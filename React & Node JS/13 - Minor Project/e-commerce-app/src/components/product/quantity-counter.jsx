import { useEffect } from "react";
import { useState } from "react";

export default function QuantityCounter({ onUpdate }) {
  const [count, setCount] = useState(1);
  useEffect(() => {
    onUpdate(count);
  }, [count]);
  function updateCounter(type = "increment") {
    if (type === "increment") {
      setCount((prevCount) => prevCount + 1);
    } else {
      setCount((prevCount) => prevCount - 1);
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
