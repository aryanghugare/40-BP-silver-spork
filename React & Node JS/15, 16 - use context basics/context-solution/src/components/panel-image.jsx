import { useContext } from "react";
import { SizeContext } from "../App";

export default function PanelImage({ url }) {
  // useContext hook allows you to read the value which is set
  // in it's nearest parent context provider
  const size = useContext(SizeContext);
  return (
    <header className={size === "small" ? "img-small" : "img-large"}>
      <img className="image" src={url} alt={"Image of a cat"} />
    </header>
  );
}
