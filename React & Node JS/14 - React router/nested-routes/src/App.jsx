import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./components/home";
import About from "./components/about";
import Layout from "./components/layout";
import Settings from "./components/settings";
import UserSettings from "./components/user-settings";
import AdminSettings from "./components/admin-settings";
import Product from "./components/product";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="settings" element={<Settings />}>
            <Route index element={<UserSettings />} />
            <Route path="admin/:id" element={<AdminSettings />} />
          </Route>
          <Route path="product/:id" element={<Product />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
