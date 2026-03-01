import { useState, useEffect } from "react";
import Post from "./post";
function PostSelector() {
  const [post, setPost] = useState(null);
  const [postId, setPostId] = useState(1);
  async function fetchPosts(postId) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const result = await response.json();
    setPost(result);
  }
  useEffect(() => {
    fetchPosts(postId);
  }, [postId]);
  function updateId(buttonType) {
    if (buttonType === "next") {
      setPostId(postId + 1);
    } else {
      setPostId(postId - 1);
    }
  }
  return (
    <>
      <Post post={post} />
      <button onClick={() => updateId("next")}>Next</button>
      <button onClick={() => updateId("previous")}>Previous</button>
    </>
  );
}

export default PostSelector;
