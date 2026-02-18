import { getMotivationalQuote } from "./common/quote-generator";
import STORAGE_KEYS from "./common/storage-keys";
import { showCreateSessionView } from "./main";
import "./session-view.css";
import { addToHistory, readFromStorage, saveToStorage } from "./utils/storage";
let timerId = null;
let remainingDuration = null;
let totalDuration = null;
let currentCycle = 1;

let currentSession = null;
let autoSaveId = null;

const STATUS = {
    STUDYING: "📖 Studying",
    PAUSED: "⏸️ Paused",
    COMPLETED: "👍🏼 Completed",
    BREAK: "🛏️ BREAK"
}
let currentStatus = null;
export function startSession(session) {
    const sessionViewElement = document.querySelector("#session-view");
    sessionViewElement.classList.remove("hidden");

    sessionViewElement.querySelector(".title").textContent = session.name;
    setStatusText(session?.currentStatus ?? STATUS.STUDYING);
    setCycle(session?.currentCycle ?? currentCycle, session.cycles);
    sessionViewElement.querySelector("#pause").addEventListener("click", onPause)
    sessionViewElement.querySelector("#resume").addEventListener("click", resumeCountdown)
    totalDuration = session.duration * 60;
    currentSession = session;
    countdown(currentSession?.remainingDuration ?? totalDuration);
    autoSave();
}

function autoSave() {
    saveToStorage({ ...currentSession, remainingDuration, currentCycle, currentStatus }, STORAGE_KEYS.CURRENT_SESSION);
    autoSaveId = setTimeout(() => {
        autoSave();
    }, 10_000);
}

function setCycle(cycle, totalCycles) {
    currentCycle = cycle;
    document.querySelector("#session-view .cycle").textContent = `Cycle ${cycle} of ${totalCycles}`;

}
function setStatusText(text) {
    document.querySelector("#session-view .status-value").textContent = text
    currentStatus = text;
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
    autoSave();
    document.querySelector("#session-view #resume").classList.remove("hidden");
}

function stopCountdown() {
    clearInterval(timerId);
}
function updateProgress() {
    const progressValue = ((totalDuration - remainingDuration) / totalDuration) * 100;

    const progressIndicator = document.querySelector("#session-view .progress-indicator");
    progressIndicator.style.width = `${progressValue}% `;

}

async function showMotivationalQuote() {
    const { author, quote } = await getMotivationalQuote();
    const element = document.querySelector(".motivational-quote");
    element.textContent = `${quote} - ${author}`;
    element.classList.remove("hidden");
}

function hideMotivationalQuote() {
    const element = document.querySelector(".motivational-quote");
    element.classList.add("hidden");
}

function updateSessionProgress() {
    if (currentStatus === STATUS.STUDYING) {
        setStatusText(STATUS.BREAK);
        showMotivationalQuote();
        remainingDuration = currentSession.breakDuration * 60;
        totalDuration = currentSession.breakDuration * 60;
        countdown(remainingDuration);
    } else if (currentStatus === STATUS.BREAK) {
        hideMotivationalQuote();
        if (currentCycle + 1 <= Number(currentSession.cycles)) {

            setCycle(currentCycle + 1, currentSession.cycles)
            setStatusText(STATUS.STUDYING);

            remainingDuration = currentSession.duration * 60;
            totalDuration = currentSession.duration * 60;
            countdown(remainingDuration);
        } else {
            setStatusText(STATUS.COMPLETED);
            document.querySelector("#session-view #pause").classList.add("hidden");
            addToHistory({ id: currentSession.id, name: currentSession.name, studyTime: currentSession.duration * currentSession.cycles, status: currentStatus })
            saveToStorage(null, STORAGE_KEYS.CURRENT_SESSION)
            showCreateSessionView();
        }
    }
}



function countdown(totalSeconds) {
    remainingDuration = totalSeconds;
    updateProgress();

    const { minutes, seconds } = formatTime(totalSeconds);
    const timer = document.querySelector("#session-view .timer");

    timer.querySelector(".minutes").textContent = minutes;
    timer.querySelector(".seconds").textContent = seconds;
    if (remainingDuration === 0) {
        stopCountdown();
        updateSessionProgress();
        return;
    }
    timerId = setTimeout(() => {
        countdown(totalSeconds - 1)
    }, 1000);
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return { minutes: mins.toString().padStart(2, "0"), seconds: sec.toString().padStart(2, "0") }
}