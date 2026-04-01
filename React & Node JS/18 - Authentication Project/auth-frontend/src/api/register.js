const USERS = "users";
export function registerUser({ name, email, password }) {
    let users = getUsers();
    if (!users) {
        users = [];
    }
    users.push({ name, email, password })
    setItem(USERS, users);
    return true;
}

function getUsers() {
    try {

        return JSON.parse(localStorage.getItem(USERS))
    } catch (ex) {
        console.error(ex);
        return null;
    }
}

function setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

function getItem(key) {
    try {
        return JSON.parse(localStorage.getItem(key))
    } catch (ex) {
        console.error(ex);
        return null;
    }
}