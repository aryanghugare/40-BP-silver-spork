import React from "react";

export default function Cart({ cartItems }) {
  return (
    <section>
      <h1>Cart</h1>
      {cartItems.length
        ? cartItems.map((item) => (
            <article key={item.id}>
              <p>{item.title}</p>
              <p>{item.price}</p>
              <p>{item.color}</p>
            </article>
          ))
        : "No Items added in cart"}
    </section>
  );
}
