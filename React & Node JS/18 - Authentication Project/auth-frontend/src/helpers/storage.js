export function setItem(key, value, type = "local") {
    const storage = type === "local" ? localStorage : sessionStorage;
    storage.setItem(key, JSON.stringify(value))
}

export function getItem(key, type = "local") {
    try {
        const storage = type === "local" ? localStorage : sessionStorage;
        return JSON.parse(storage.getItem(key))
    } catch (ex) {
        console.error(ex);
        return null;
    }
}


