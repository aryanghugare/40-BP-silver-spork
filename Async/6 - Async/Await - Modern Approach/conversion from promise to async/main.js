// fetch - this fn allows us to make http requests in the browser


// // fetchUsers 

// users data => db, json, some storage

fetch("http://127.0.0.1:5500/Async/3%20-%20Promise%20-%20the%20solution/example%20-%20data%20fetch%20&%20save%20simulation/user.json")
    .then(result => {
        console.log(result)
        // result.text().then(res => console.log(res))
        // JSON.parse
        return result.json();
    }).then(data => console.log(data))
    .catch(error => console.log(error))


// https://jsonplaceholder.typicode.com/posts

fetch("https://jsonplaceholder.typicode.com/posts").then(response => response.json()).then(result => console.log(result))

function showLoader(content = "loading...") {
    document.getElementById("status").textContent = content;
}
function clearLoader() {
    document.getElementById("status").textContent = ""

}

async function fetchPosts(postId) {

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    // const result = await response.json();
    // return result;
    return response.json();
}

// function fetchComments(postId) {
//     return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`).then(response => {response.json()})
// }
async function fetchComments(postId) {
    showLoader("fetching comments...")
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
    return response.json();
}

async function fetchUsers(comments) {
    showLoader("fetching user...")
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    return comments.map(comment => {
        // users.find(user=> user.email === comment.email)
        // using random index to attach a user with comment
        return {
            ...comment,
            user: users[Math.floor(Math.random() * users.length)]
        }

    })
}

function showComments(comments) {
    if (comments.length) {
        const commentsElement = document.querySelector("#post-comments");
        const commentsContainer = document.createElement("ul");
        for (let comment of comments) {
            const commentsElement = document.createElement("li");
            commentsElement.id = comment.id;
            commentsElement.textContent = `${comment.name}, by - ${comment.user.name}`;
            commentsContainer.append(commentsElement);
        }
        commentsElement.append(commentsContainer);
    }

}

function showPosts(post) {
    showLoader("fetching posts....")
    const postElement = document.getElementById("post");
    postElement.innerHTML = `<article id=${post.id}>
        <h1>${post.title}</h1>
        <p>${post.body}</p>
        <section id="post-comments">
            <h2>comments</h2>
        </section>
    </article>`;
    return post.id;
}

document.querySelector("#show").addEventListener("click", async function () {
    showLoader();
    const post = await fetchPosts(document.querySelector("#posts-id").value);
    showPosts(post);
    const comments = await fetchComments(post.id);
    const userComments = await fetchUsers(comments);
    showComments(userComments);
    clearLoader();
})

