import { useState, useEffect } from "react";

import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import ProductGallery from "./components/product/product-gallery";
import Cart from "./components/cart";
import { addToCart, fetchCartItems, fetchProducts, removeFromCart } from "./api/api";

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  async function onAdd(cartItem) {
    // setCartItems((prev) => [...prev, cartItem]);
    const result = await addToCart(cartItem);
    if (result.insertedId) {
      getCartItems();
    }
    console.log(result);
  }

  function getCartItems() {
    fetchCartItems().then(setCartItems);
  }

  async function removeItemFromCart(itemId) {
    console.log(itemId);
    const result = await removeFromCart(itemId);
    if (result.deletedCount) {
      getCartItems();
    }
  }

  useEffect(() => {
    getCartItems();
    fetchProducts().then(setProducts);
  }, []);

  return (
    <section className="container">
      <Header />
      <section className="content">
        <ProductGallery products={products} onAdd={onAdd} />
        <Cart cartItems={cartItems} onItemRemove={removeItemFromCart} />
      </section>
      <Footer />
    </section>
  );
}

export default App;
