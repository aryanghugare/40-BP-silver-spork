import { useState, useEffect } from "react";
import "./App.css";
import Post from "./component/post";

function App() {
  const [post, setPost] = useState(null);

  async function fetchPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const result = await response.json();
    setPost(result);
  }
  // if we do not call fetchPosts inside use effect every time the component is
  // rerendered fetch posts will be called, state will be set which
  // will trigger a new render - it will become an infinite loop
  useEffect(() => {
    fetchPosts();
  }, []); // dependency array empty - it means the callback will be called only on
  // the initial render
  // if no dependency array is provided then it will run on every render

  return <Post post={post} />;
}

export default App;
