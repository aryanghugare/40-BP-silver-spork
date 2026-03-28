import { useRef } from "react";
import "./image-slider.css";
export default function ImageSlider() {
  const containerRef = useRef(null);
  function scrollToImage(index) {
    const imageItems = containerRef.current.querySelectorAll(".image-item");
    imageItems[index].scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "start",
    });
  }
  return (
    <>
      <header>
        <button onClick={() => scrollToImage(0)}>Neo</button>
        <button onClick={() => scrollToImage(1)}>Millie</button>
        <button onClick={() => scrollToImage(2)}>Bella</button>
      </header>
      <ul ref={containerRef} className="image-gallery">
        <li className="image-item">
          <img src="https://placecats.com/neo/300/200"></img>
        </li>
        <li className="image-item">
          <img src="https://placecats.com/millie/200/200"></img>
        </li>
        <li className="image-item">
          <img src="https://placecats.com/bella/199/200"></img>
        </li>
      </ul>
    </>
  );
}
