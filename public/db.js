let db;
let budgetVersion;

console.log('Connected')

const request = window.indexedDB.open('budget', budgetVersion)

request.onupgradeneeded = (e) => {
    db = e.target.result
    if (db.objectStoreNames === 0) {
        const budgetCache = db.createObjectStore('budgetCache', { autoIncrement: true })
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

    getCache = () => {}
}