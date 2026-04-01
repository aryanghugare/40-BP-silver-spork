import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import Login from "./pages/login/login";
import Profile from "./pages/profile/profile";
import Signup from "./pages/signup/signup";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Profile />} />
    </Routes>
  );
}

export default App;
