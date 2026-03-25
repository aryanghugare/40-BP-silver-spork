import React from "react";
import { Navigate } from "react-router";

export default function ProtectedRoute({ children }) {
  const userLoggedIn = false; // placeholder implementation for authentication
  if (!userLoggedIn) {
    return <Navigate to="/" />;
  }
  return children;
}
