import STORAGE_KEYS from "../common/storage-keys";

function saveToStorage(session, key) {
    localStorage.setItem(key, session ? JSON.stringify(session) : null);
}

function readFromStorage(key) {
    try {
        return JSON.parse(localStorage.getItem(key))
    } catch (ex) {
        console.error(ex);
        return null;
    }
}

function addToHistory(session) {
    let sessions = readFromStorage(STORAGE_KEYS.SESSION_HISTORY);
    if (!sessions) {
        sessions = [];
    }
    sessions.push(session);
    saveToStorage(sessions, STORAGE_KEYS.SESSION_HISTORY);
}

export { saveToStorage, readFromStorage, addToHistory }