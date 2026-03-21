import { useState } from "react";

export default function ProductSize({ sizeList, onSizeSelect }) {
  const [activeSize, setActiveSize] = useState("");
  return (
    <section className="product-sizes">
      {sizeList.map((size) => (
        <button
          className={size === activeSize ? "active" : ""}
          key={size}
          onClick={() => {
            setActiveSize(size);
            onSizeSelect(size);
          }}
        >
          {size}
        </button>
      ))}
    </section>
  );
}
