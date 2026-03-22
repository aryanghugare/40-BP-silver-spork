import { useState } from "react";

export default function ProductColor({ colorList, onColorSelect = () => {}, readOnly = false }) {
  const [activeColor, setActiveColor] = useState("");
  const colorPallete = new Map([
    ["red", "#EF4444"],
    ["blue", "#3b82f6"],
    ["green", "#10B981"],
    ["black", "#2f3d5b"],
    ["white", "#F9FAFB"],
  ]);
  return (
    <section className="product-colors">
      {colorList?.map((color) => (
        <button
          key={color}
          className={color === activeColor ? "active" : ""}
          onClick={() => {
            if (!readOnly) {
              setActiveColor(color);
              onColorSelect(color);
            }
          }}
          style={{ backgroundColor: colorPallete.get(color) }}
        ></button>
      ))}
    </section>
  );
}
