async function main() {
    const postId = 1;
    const updatedPostResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: "PATCH",
        body: JSON.stringify({
            // property that you want to update. for ex - title
            title: "updated title",
        })
    })

    const updatedPost = await updatedPostResponse.json();

    console.log(updatedPost);
}

main();

