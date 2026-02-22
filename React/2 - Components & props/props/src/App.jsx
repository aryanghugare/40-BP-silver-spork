import "./App.css";
import Box from "./components/box/box";
import Counter from "./components/counter";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";

function App() {
  return (
    <>
      <Header />

      <section className="content">
        <Box size="small" style={{ backgroundColor: "red" }}>
          Box 1
        </Box>
        <Box size="medium" style={{ backgroundColor: "royalblue", fontWeight: 600, fontStyle: "normal" }}>
          Box 2
        </Box>
        <Box size="large" style={{ backgroundColor: "yellow" }} children={"Box 3"} />
      </section>
      <Counter />
      <Footer />
    </>
  );
}

export default App;
