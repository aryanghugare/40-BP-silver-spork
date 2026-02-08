function fetchUsers(delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("users")
        }, delay);
    })
}
function fetchPosts(delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("posts")
        }, delay);
    })
}
function fetchComments(delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("comments")
        }, delay);
    })
}

function request4() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("error due to timeout")
        }, 1000);
    })
}

async function main() {

    try {

        try {
            const results = await Promise.all([fetchUsers(1000), fetchComments(1000), fetchPosts(1500), request4()]);
            for (let result of results) {

                console.log(result);
            }
        } catch (ex) {
            console.log(ex);
        }

        const resultForAny = await Promise.any([fetchUsers(1000), fetchComments(1000), fetchPosts(1500), request4()]);
        console.log(resultForAny);

        const resultsForAllSettled = await Promise.allSettled([fetchUsers(1000), fetchComments(1000), fetchPosts(1500), request4()]);
        console.table(resultsForAllSettled)

    } catch (ex) {
        console.error(ex);
    }
}

main();
