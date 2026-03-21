import React from "react";
import ProductSize from "./product-size";
import ProductColor from "./product-color";
import QuantityCounter from "./quantity-counter";
import { useState } from "react";

export default function ProductCard({ product }) {
  const [attributes, setAttributes] = useState({});

  function setSize(size) {
    setAttributes((prev) => ({ ...prev, size }));
  }
  function setColor(color) {
    console.log(color);
    setAttributes((prev) => ({ ...prev, color }));
  }

  function setQuantity(quantity) {
    setAttributes((prev) => ({ ...prev, quantity }));
  }

  function addToCartClicked() {
    console.log({ title: product.title, id: product._id, price: product.price, ...attributes });
  }

  return (
    <article className="product-card">
      <header>
        <img className="product-image" src={product.image} alt={product.title} />
      </header>
      <h3 className="product-title truncate">{product.title}</h3>
      <p title={product.description} className="product-description truncate-2">
        {product.description}
      </p>
      <p className="product-price">${product.price.toFixed(2)}</p>
      <ProductSize sizeList={product.size} onSizeSelect={setSize} />
      <ProductColor colorList={product.color} onColorSelect={setColor} />
      <QuantityCounter onUpdate={setQuantity} />
      <footer>
        <button onClick={addToCartClicked}>Add to Cart</button>
      </footer>
    </article>
  );
}
