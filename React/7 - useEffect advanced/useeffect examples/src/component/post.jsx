import React from "react";

export default function Post({ post }) {
  let { id, body, title } = post ?? {};
  return post?.id ? (
    <article id={id}>
      <h1>{title}</h1>
      <p>{body}</p>
    </article>
  ) : (
    <p>No post</p>
  );
}
