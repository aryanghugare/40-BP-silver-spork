const createNewPost = async () => {
    const newPost = {
        userId: 1,
        title: "My new post",
        body: "My new post body......."
    }
    let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(newPost),
    })
    console.log(await response.json());
}

createNewPost();