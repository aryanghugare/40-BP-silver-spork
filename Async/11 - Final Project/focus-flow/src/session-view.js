import STORAGE_KEYS from "./common/storage-keys";
import "./session-view.css";
import { readFromStorage, saveToStorage } from "./utils/storage";
let timerId = null;
let remainingDuration = null;
let totalDuration = null;
const STATUS = {
    STUDYING: "📖 Studying",
    PAUSED: "⏸️ Paused",
    COMPLETED: "👍🏼 Completed",
    BREAK: "🛏️ BREAK"
}
export function startSession(session) {
    // <article id="session-view">
    //     <h1 class="title">Session Name</h1>
    //     <section class="status">Status : <span class="status-value"></span></section>
    //     <section class="timer">
    //         <section><span>HH</span><span>:</span><span>MM</span></section>
    //     </section>
    //     <section class="progress">progress indicator</section>
    //     <section class="cycle">cycle</section>
    // </article>
    const sessionViewElement = document.querySelector("#session-view");

    // sessionId, name, duration, breakDuration, cycles
    sessionViewElement.querySelector(".title").textContent = session.name;
    sessionViewElement.querySelector(".cycle").textContent = session.cycles;
    setStatusText(STATUS.STUDYING);
    sessionViewElement.querySelector("#pause").addEventListener("click", onPause)
    sessionViewElement.querySelector("#resume").addEventListener("click", resumeCountdown)
    totalDuration = session.duration * 60;
    countdown(totalDuration);

}
function setStatusText(text) {
    document.querySelector("#session-view .status-value").textContent = text
}

function resumeCountdown() {
    this.classList.add("hidden");
    const pauseButton = document.querySelector("#session-view #pause");
    pauseButton.classList.remove("hidden");
    setStatusText(STATUS.STUDYING);
    countdown(remainingDuration);
}

function onPause() {
    stopCountdown();
    let currentSession = readFromStorage(STORAGE_KEYS.CURRENT_SESSION);
    currentSession.remainingDuration = remainingDuration;
    setStatusText(STATUS.PAUSED);
    this.classList.add("hidden");
    saveToStorage(currentSession);
    document.querySelector("#session-view #resume").classList.remove("hidden");
}

function stopCountdown() {
    clearInterval(timerId);
}
function updateProgress() {
    const progressValue = ((totalDuration - remainingDuration) / totalDuration) * 100;

    const progressIndicator = document.querySelector("#session-view .progress-indicator");
    progressIndicator.style.width = `${progressValue}%`;

}
function countdown(totalSeconds) {
    remainingDuration = totalSeconds;
    updateProgress();
    const { minutes, seconds } = formatTime(totalSeconds);
    const timer = document.querySelector("#session-view .timer");

    timer.querySelector(".minutes").textContent = minutes;
    timer.querySelector(".seconds").textContent = seconds;
    timerId = setTimeout(() => {
        countdown(totalSeconds - 1)
    }, 1000);
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return { minutes: mins.toString().padStart(2, "0"), seconds: sec.toString().padStart(2, "0") }
}