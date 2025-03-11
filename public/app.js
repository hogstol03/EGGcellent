import { startCountdown } from './modules/timer.js';

document.getElementById("fiveMinButton").addEventListener("click", () => startCountdown(5, handleTimerFinish));
document.getElementById("eightMinButton").addEventListener("click", () => startCountdown(8, handleTimerFinish));
document.getElementById("tenMinButton").addEventListener("click", () => startCountdown(10, handleTimerFinish));

function handleTimerFinish(minutes) {
    alert(`${minutes} minutter timeren er ferdig!`);
}
