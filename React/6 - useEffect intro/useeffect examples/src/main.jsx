import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import PostSelector from "./component/post-selector.jsx";
import Timer from "./component/timer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <PostSelector /> */}
    <Timer />
  </StrictMode>,
);
