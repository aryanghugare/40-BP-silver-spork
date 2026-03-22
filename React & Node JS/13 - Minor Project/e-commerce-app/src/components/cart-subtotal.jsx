import React from "react";

export default function CartSubtotal({ cartItems }) {
  if (!cartItems?.length) {
    return null;
  }
  return (
    <article>
      <h3>Sub-Total</h3>
      <p>${cartItems.reduce((prev, current) => prev + current.price * current.quantity, 0)?.toFixed(2)}</p>
    </article>
  );
}
