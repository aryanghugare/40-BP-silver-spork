import "./style.css"
import { setupSessionCreation } from "./create-session.js";
import STORAGE_KEYS from "./common/storage-keys.js";
import { startSession } from "./session-view.js";
import { readFromStorage } from "./utils/storage.js";

document.addEventListener("DOMContentLoaded", () => {
  const currentSession = readFromStorage(STORAGE_KEYS.CURRENT_SESSION);
  if (currentSession) {
    startSession(currentSession);
  } else {
    setupSessionCreation(document.querySelector("#focus-flow #create-session-form"));
  }
})