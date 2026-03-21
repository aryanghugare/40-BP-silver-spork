import { useState } from "react";

export default function QuantityCounter({ onUpdate }) {
  const [count, setCount] = useState(1);
  function updateCounter(type = "increment") {
    let updatedCount;
    if (type === "increment") {
      setCount((prevCount) => {
        updatedCount = prevCount + 1;
        onUpdate(updatedCount);
        return updatedCount;
      });
    } else {
      setCount((prevCount) => {
        updatedCount = prevCount - 1;
        onUpdate(updatedCount);
        return updatedCount;
      });
    }
  }
  return (
    <section className="product-quantity">
      <button onClick={() => updateCounter()}>+</button>
      <span>{count}</span>
      <button onClick={() => updateCounter("decrement")}>-</button>
    </section>
  );
}
