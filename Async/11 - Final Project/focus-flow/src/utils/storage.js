function saveToStorage(session, key) {
    localStorage.setItem(key, JSON.stringify(session));
}

function readFromStorage(key) {
    try {
        return JSON.parse(localStorage.getItem(key))
    } catch (ex) {
        console.error(ex);
        return null;
    }
}

export { saveToStorage, readFromStorage }