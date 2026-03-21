import React from "react";
import ProductSize from "./product-size";

export default function ProductCard({ product }) {
  function setSize(size) {
    console.log(size);
  }

  return (
    <article className="product-card">
      <header>
        <img className="product-image" src={product.image} alt={product.title} />
      </header>
      <h3 className="product-title truncate">{product.title}</h3>
      <p className="product-description truncate-2">{product.description}</p>
      <p className="product-price">${product.price.toFixed(2)}</p>
      <ProductSize sizeList={product.size} onSizeSelect={setSize} />
      <section className="product-colors">
        <label>Colors: </label>
        {product.color.map((color) => (
          <button key={color}>{color}</button>
        ))}
      </section>
      <footer>
        <button>Add to Cart</button>
      </footer>
    </article>
  );
}
