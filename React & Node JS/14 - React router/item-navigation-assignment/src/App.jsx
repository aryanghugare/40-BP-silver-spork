import { useState } from "react";
import { Routes, Route } from "react-router";

import "./App.css";
import ItemList from "./components/item-list";
import ItemDetail from "./components/item-detail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ItemList />}></Route>
      <Route path="/items/:id" element={<ItemDetail />}></Route>
    </Routes>
  );
}

export default App;
