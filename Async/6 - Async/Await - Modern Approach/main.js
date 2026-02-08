function fetchUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id) {

                resolve({ user: "jane", age: 21 })
            } else {
                reject("user not found")
            }
        }, 1000);
    })
}
// fetchUser(1).then(console.log).catch(console.error);
async function getUser() {
    try {
        const user = await fetchUser(0);
        console.log(user);
        // if nothing is returned it is the same as => resolve()
        // return user => resolve(user)
        return user;
    } catch (ex) {
        console.error(ex);
        // throw means reject(ex)
        throw ex;
        // return ex; this is equivalent to resolve(ex), 
        // so it will go inside then block
    }
    finally {
        console.log("finally called")
    }
}
function someFn() {
    console.log("some func called")
}
// async function main() {
getUser().then((user) => console.log("get user called", user))
    .catch(() => {
        console.log("catch block called")
    })
someFn();

// }

// main();