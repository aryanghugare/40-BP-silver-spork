import "./App.css";
import Box from "./components/box/box";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";

function App() {
  return (
    <>
      <Header />

      <section className="content">
        <Box size="small" style={{ backgroundColor: "red" }} />
        <Box size="medium" style={{ backgroundColor: "royalblue", fontWeight: 600, fontStyle: "normal" }} />
        <Box size="large" style={{ backgroundColor: "yellow" }} />
      </section>
      <Footer />
    </>
  );
}

export default App;
