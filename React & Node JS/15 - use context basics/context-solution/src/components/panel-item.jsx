import { useContext } from "react";
import PanelImage from "./panel-image";
import { ThemeContext } from "./theme-provider";
export default function PanelItem({ item }) {
  const { theme } = useContext(ThemeContext);
  return (
    <article className={`panel-item ${theme}`}>
      <PanelImage url={item.image} />
      <p className="description">{item.description}</p>
    </article>
  );
}
