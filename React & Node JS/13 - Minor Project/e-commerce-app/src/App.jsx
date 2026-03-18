import { useState } from "react";

import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import ProductGallery from "./components/product-gallery";
import Cart from "./components/cart";

function App() {
  const [count, setCount] = useState(0);

  return (
    <section className="container">
      <Header />
      <section className="content">
        <ProductGallery />
        <Cart />
      </section>
      <Footer />
    </section>
  );
}

export default App;
