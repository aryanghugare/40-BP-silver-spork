import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import StopWatch from "./components/stop-watch";
import Focus from "./components/focus";
import ImageSlider from "./components/image-slider";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <StopWatch />
      <Focus />
      <ImageSlider />
    </>
  );
}

export default App;
