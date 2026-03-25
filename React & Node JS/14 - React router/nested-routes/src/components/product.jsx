import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
export default function Product() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  function fetchProduct() {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }

  useEffect(() => {
    fetchProduct();
  }, [id]);

  return (
    <>
      {product ? (
        <article>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <img src={product.image} alt={product.title} />
        </article>
      ) : (
        "Loading product"
      )}
    </>
  );
}
