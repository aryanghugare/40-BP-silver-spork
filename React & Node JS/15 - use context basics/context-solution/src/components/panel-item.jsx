import React from "react";
import PanelImage from "./panel-image";

export default function PanelItem({ item }) {
  return (
    <article className="panel-item">
      <PanelImage url={item.image} />
      <p className="description">{item.description}</p>
    </article>
  );
}
