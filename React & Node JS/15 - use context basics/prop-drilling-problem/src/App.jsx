import { useState } from "react";
import "./App.css";
import PanelList from "./components/panel-list";

function App() {
  const [imageSize, setImageSize] = useState("small");
  function toggleSize(e) {
    setImageSize(() => (e.target.checked ? "large" : "small"));
  }
  return (
    <section className="container">
      <section>
        <input type="checkbox" name="toggleImages" id="toggleImages" onChange={toggleSize} />
        <label htmlFor="toggleImages">Show Large Image</label>
      </section>
      <PanelList imageSize={imageSize} />
    </section>
  );
}

export default App;
