import { useState, useEffect } from "react";

import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import ProductGallery from "./components/product/product-gallery";
import Cart from "./components/cart";
import { fetchProducts } from "./api/api";

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  function onAdd(cartItem) {
    setCartItems((prev) => [...prev, cartItem]);
  }

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  return (
    <section className="container">
      <Header />
      <section className="content">
        <ProductGallery products={products} onAdd={onAdd} />
        <Cart cartItems={cartItems} />
      </section>
      <Footer />
    </section>
  );
}

export default App;
