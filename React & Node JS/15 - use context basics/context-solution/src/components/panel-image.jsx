import React from "react";

export default function PanelImage({ url, size }) {
  return (
    <header className={size === "small" ? "img-small" : "img-large"}>
      <img className="image" src={url} alt={"Image of a cat"} />
    </header>
  );
}
