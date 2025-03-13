import { showStartView } from '../view/startView.mjs';
import { startTimer, stopTimer, pauseTimer, resumeTimer } from '../modules/timer.mjs';

let timerRunning = false;
let timerPaused = false;

export function showTimerView() {
    //console.log('showTimerView called');

    const timerView = document.getElementById('timer-view');
    const pauseHitbox = document.querySelector('.pause-hitbox');
    const cancelHitbox = document.querySelector('.cancel-hitbox');
    const timerDisplay = document.getElementById('timer-display');

    timerView.style.display = 'block';
    pauseHitbox.style.display = 'block';
    cancelHitbox.style.display = 'block';
    timerDisplay.textContent = '00:00';

    cancelHitbox.removeEventListener('click', handleCancelClick);
    cancelHitbox.addEventListener('click', handleCancelClick);

    pauseHitbox.removeEventListener('click', handlePauseClick);
    pauseHitbox.addEventListener('click', handlePauseClick);
}

export function hideTimerView() {
    document.getElementById('timer-view').style.display = 'none';
    document.querySelector('.pause-hitbox').style.display = 'none';
    document.querySelector('.cancel-hitbox').style.display = 'none';
}

function handleCancelClick() {
    //console.log('Cancel button clicked');
    stopTimer();
    hideTimerView();
    showStartView();
}

function handlePauseClick() {
    if (timerPaused) {
        //console.log('Resuming timer...');
        document.body.style.backgroundImage = "url('./icons/eggcellentTimerBG.png')";
        resumeTimer();
        timerPaused = false;
    } else {
        //console.log('Pausing timer...');
        document.body.style.backgroundImage = "url('./icons/eggcellentTimerStartBG.png')";
        pauseTimer();
        timerPaused = true;
    }
}

export function startNewTimer(timeInSeconds) {
    if (timerRunning) {
        stopTimer();
    }
    //console.log(`Starting new timer: ${timeInSeconds} seconds`);
    timerRunning = true;
    timerPaused = false;
    startTimer(timeInSeconds);
}

export function updateTimerDisplay(minutes, seconds) {
    const timerDisplay = document.getElementById('timer-display');
    //console.log(`Updating timer display: ${minutes}:${seconds}`);
    timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}
