import React, { useState } from "react";

export default function ImageSlider({ images }) {
  const [activeIndex, setActiveIndex] = useState(0);
  function updateActiveIndex(type = "next") {
    if (type === "next") {
      setActiveIndex((prev) => (prev + 1) % images.length);
    } else {
      setActiveIndex((prev) => {
        return (prev - 1 + images.length) % images.length;
      });
    }
  }
  return (
    <>
      <button className="prev-btn" onClick={() => updateActiveIndex("prev")}>
        &lt;
      </button>
      <img className="product-image" src={images[activeIndex]} />
      <button className="next-btn" onClick={() => updateActiveIndex()}>
        &gt;
      </button>
    </>
  );
}
