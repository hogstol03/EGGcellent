import { updateTimerDisplay } from '../view/timerView.mjs';
import { showNotification } from './ui.mjs';

let timerInterval = null;
let remainingTime = 0; 
let timerPaused = false; 

export function startTimer(duration) {
    stopTimer();r

    remainingTime = duration;

    updateTimerDisplay(Math.floor(remainingTime / 60), remainingTime % 60);

    timerInterval = setInterval(() => {
        if (remainingTime <= 0) {
            stopTimer();
            showNotification();
            return;
        }

        remainingTime--;
        updateTimerDisplay(Math.floor(remainingTime / 60), remainingTime % 60);
    }, 1000);
}

export function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
    remainingTime = 0;
    updateTimerDisplay(0, 0);
}

export function pauseTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
    timerPaused = true;
}

export function resumeTimer() {
    if (timerPaused) {
        timerPaused = false;
        startTimer(remainingTime);
    }
}