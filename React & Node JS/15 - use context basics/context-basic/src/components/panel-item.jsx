import React from "react";
import PanelImage from "./panel-image";

export default function PanelItem({ item, size = "small" }) {
  return (
    <article className="panel-item">
      <PanelImage url={item.image} size={size} />
      <p className="description">{item.description}</p>
    </article>
  );
}
