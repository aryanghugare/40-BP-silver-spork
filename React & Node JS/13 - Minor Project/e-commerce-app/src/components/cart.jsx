import React from "react";
import "./cart.css";
import ProductColor from "./product/product-color";
import CartSubtotal from "./cart-subtotal";
export default function Cart({ cartItems, onItemRemove }) {
  return (
    <section className="cart">
      <h3 className="heading">Cart</h3>
      {cartItems.length
        ? cartItems.map((item) => (
            <article key={item._id} className="cart-item">
              <header className="item-title">
                <p>{item.title}</p>
              </header>
              <section className="item-details">
                <section className="item-group">
                  <label htmlFor="price">Price:</label>
                  <p>${item.price}</p>
                </section>
                <section>
                  <section className="item-group">
                    <label htmlFor="">Color:</label>
                    <ProductColor colorList={[item.color]} readOnly />
                  </section>
                  <section className="item-group">
                    <label htmlFor="quantiy">Quantity:</label>
                    <p>{item.quantity}</p>
                  </section>
                  <section className="item-group">
                    <label htmlFor="">Size:</label>
                    <p>{item.size}</p>
                  </section>
                </section>
              </section>
              <footer>
                <button onClick={() => onItemRemove(item._id)}>Remove</button>
              </footer>
            </article>
          ))
        : "No Items added in cart"}
      <CartSubtotal cartItems={cartItems} />
    </section>
  );
}
