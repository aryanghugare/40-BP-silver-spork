import { useState, createContext } from "react";
import "./App.css";
import PanelList from "./components/panel-list";
import PanelImage from "./components/panel-image";
import Header from "./components/header";
import Footer from "./components/footer";
import PanelItem from "./components/panel-item";

// context is created with default value
export const SizeContext = createContext("small");
export const ThemeContext = createContext("dark");
function App() {
  const [imageSize, setImageSize] = useState("small");
  const [theme, setTheme] = useState("dark");
  function toggleSize(e) {
    setImageSize(() => (e.target.checked ? "large" : "small"));
  }

  return (
    <ThemeContext value={{ theme, setTheme }}>
      <Header />
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
          <ThemeContext value={{ theme: "light" }}>
            <PanelItem item={{ id: 5, image: "https://placecats.com/200/200", description: "Some desc" }} />
          </ThemeContext>
        </section>
      </SizeContext>
      {/* component which are not child of context provider will get the default value  */}
      <PanelImage url={"https://placecats.com/200/200"} />
      <Footer />
    </ThemeContext>
  );
}

export default App;
