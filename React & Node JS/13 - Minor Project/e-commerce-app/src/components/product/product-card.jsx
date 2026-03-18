import React from "react";

export default function ProductCard({ product }) {
  return (
    <article className="product-card">
      <header>
        <img className="product-image" src={product.image} alt={product.title} />
      </header>
      <h3 className="product-title truncate">{product.title}</h3>
      <p className="product-description truncate-2">{product.description}</p>
      <p className="product-price">${product.price.toFixed(2)}</p>
      <section className="product-sizes">
        <label>Size: </label>
        {product.size.map((size) => (
          <button key={size}>{size}</button>
        ))}
      </section>
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
