import { getItem, setItem } from "../helpers/storage";
import { USERS } from "../helpers/common";
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
    return getItem(USERS);
}

