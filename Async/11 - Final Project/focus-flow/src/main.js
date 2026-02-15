import "./style.css"
import { setupSessionCreation } from "./create-session.js";

document.addEventListener("DOMContentLoaded", () => {
  setupSessionCreation(document.querySelector("#focus-flow #create-session-form"));
})