import React from "react";
import { useParams } from "react-router";
export default function ItemDetail() {
  const { id } = useParams();

  return (
    <article>
      <h1>Item {id}</h1>
      <p>Description for Item {id}</p>
    </article>
  );
}
