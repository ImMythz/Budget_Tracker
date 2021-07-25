let db;
let budgetVersion;

console.log('Connected')

const request = window.indexedDB.open('budget', budgetVersion)

request.onupgradeneeded = (e) => {
    db = e.target.result

    if (db.objectStoreNames === 0) {
        const budgetCache = db.createObjectStore('budgetCache', { autoIncrement: true })
    }   else {
        console.log(errorCode)
    }
} 

request.onsuccess = (e) => {
    console.log('Added' + e.target.result + 'successfully')
    db = e.target.result
    
    if (navigator.onLine) {
        console.log('DB ONLINE')
        checkDB()
    }   else {
        console.log(errorCode)
    }
}

request.onerror = (e) => {
    console.log(e.target.errorCode)
}

const checkDB = () => {
    console.log('checking DB')
    let transaction = db.transaction(['budgetCache'], 'readWrite')
    const cache = transaction.objectStore('budgetCache')
    const getCache = cache.getALL()

    getCache.onsuccess = () => {
        if ( getCache.result.length > 0 ) {
            fetch('/api/transaction/bulk', {
                method: 'POST',
                body: JSON.stringify(getCache.result),
                headers: {
                    Accept: 'application/json, text/plain, */*', 'Content-Type': 'application/json',
                }
            })
            .then((response) => response.json())
            .then((res) => {
                if (res.length !== 0) {
                    transaction = db.transaction(['budgetCache'],'readWrite')
                    const currentCache = transaction.objectStore('budgetCache')
                    currentCache.clear()
                    console.log('Clearing Cache')
                }
            })
        }
    }
}