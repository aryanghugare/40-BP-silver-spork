import "./style.css"
import { setupSessionCreation } from "./create-session.js";
import STORAGE_KEYS from "./common/storage-keys.js";
import { startSession } from "./session-view.js";
import { readFromStorage } from "./utils/storage.js";

document.addEventListener("DOMContentLoaded", () => {
  const currentSession = readFromStorage(STORAGE_KEYS.CURRENT_SESSION);
  const historySection = document.getElementById("history");
  const container = document.createElement("ul");
  historySection.append(container);

  const sessionHistory = readFromStorage(STORAGE_KEYS.SESSION_HISTORY);

  for (let { name, time, status } of sessionHistory) {
    const historyItem = document.createElement("li");
    const titleElement = document.createElement("span");
    titleElement.textContent = name;

    const timeElement = document.createElement("span");
    timeElement.textContent = time;

    const statusElement = document.createElement("span");
    statusElement.textContent = status;

    historyItem.append(titleElement, timeElement, statusElement);

    container.append(historyItem);

  }

  if (currentSession) {
    startSession(currentSession);
  } else {
    setupSessionCreation(document.querySelector("#focus-flow #create-session-form"));
  }
})

export function showCreateSessionView() {
  document.querySelector("#focus-flow #create-session-form").classList.remove("hidden");
  document.querySelector("#session-view").classList.add("hidden");
}