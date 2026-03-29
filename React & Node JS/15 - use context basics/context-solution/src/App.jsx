import { useState, createContext } from "react";
import "./App.css";
import PanelList from "./components/panel-list";
import PanelImage from "./components/panel-image";

// context is created with default value
export const SizeContext = createContext("small");
function App() {
  const [imageSize, setImageSize] = useState("small");
  function toggleSize(e) {
    setImageSize(() => (e.target.checked ? "large" : "small"));
  }
  return (
    <>
      {/* context provider  */}
      {/* <SizeContext.Provider>in older version you have to write</SizeContext.Provider> */}
      <SizeContext value={imageSize}>
        {/* components which are children of context provider will get the value which is set in the provider */}
        <section className="container">
          <section>
            <input type="checkbox" name="toggleImages" id="toggleImages" onChange={toggleSize} />
            <label htmlFor="toggleImages">Show Large Image</label>
          </section>
          <PanelList />
        </section>
      </SizeContext>
      {/* component which are not child of context provider will get the default value  */}
      <PanelImage url={"https://placecats.com/200/200"} />
    </>
  );
}

export default App;
