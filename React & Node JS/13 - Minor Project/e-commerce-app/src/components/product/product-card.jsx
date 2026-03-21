import React from "react";
import ProductSize from "./product-size";
import ProductColor from "./product-color";
import QuantityCounter from "./quantity-counter";

export default function ProductCard({ product }) {
  function setSize(size) {
    console.log(size);
  }
  function setColor(color) {
    console.log(color);
  }

  function setQuantity(count) {
    console.log(count);
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
        <button>Add to Cart</button>
      </footer>
    </article>
  );
}
