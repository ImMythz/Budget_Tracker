let db;
let budgetVersion;

console.log('Connected')

const request = window.indexedDB.open('budget_tracker_db', budgetVersion || 21)

request.onupgradeneeded = (e) => {
    db = e.target.result

    if (db.objectStoreNames.length === 0) {
        db.createObjectStore('budgetCache', { autoIncrement: true })
    }
} 

request.onerror = (e) => {
    console.log(e.target.errorCode)
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

function checkDB()  {
    console.log('checking DB')
    let transaction = db.transaction(['budgetCache'], 'readwrite')
    const cache = transaction.objectStore('budgetCache')
    const getCache = cache.getAll()

    console.log(getCache)

    getCache.onsuccess = () => {
        if ( getCache.result.length > 0 ) {
            fetch('/api/transaction/bulk', {
                method: 'POST',
                body: JSON.stringify(getCache.result),
                headers: {
                    Accept: 'application/json, text/plain, */*',
                    'Content-Type': 'application/json',
                }
            })
            .then((response) => response.json())
            .then((res) => {
                if (res.length !== 0) {
                    transaction = db.transaction(['budgetCache'],'readwrite')
                    const currentCache = transaction.objectStore('budgetCache')
                    currentCache.clear()
                    console.log('Clearing Cache')
                }
            })
        }
    }
}

const storeTransaction = (record) => {
    const transaction = db.transaction(['budgetCache'],'readwrite')
    const cache = transaction.objectStore('budgetCache')
    cache.add(record)
    console.log('Transaction saved')
}   

window.addEventListener('online', checkDB)