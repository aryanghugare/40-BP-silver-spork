async function main() {
    const postId = 1;
    const deletedPostResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: "DELETE"
    })

    const deletedPost = await deletedPostResponse.json();

    console.log(deletedPost);
}

main();