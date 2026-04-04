import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import Login from "./pages/login/login";
import Profile from "./pages/profile/profile";
import Signup from "./pages/signup/signup";
import RegistrationLayout from "./components/registration-layout";
import ProtectedRoute from "./components/protected-route";
import Layout from "./components/layout";

function App() {
  return (
    <Routes>
      <Route path="/user" element={<RegistrationLayout />}>
        <Route index element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
