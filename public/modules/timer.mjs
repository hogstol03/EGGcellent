// timer.mjs

import { updateTimerDisplay } from '../view/timerView.mjs';  // Import to update the timer display
import { showNotification } from './ui.mjs';  // Import to show notification when timer finishes

let timerInterval = null; // Store the interval reference
let remainingTime = 0;    // Store remaining time (in seconds)
let timerPaused = false;  // Track if the timer is paused

// Function to start the timer with the given duration
export function startTimer(duration) {
    stopTimer(); // Stop any existing timer

    remainingTime = duration; // Set the remaining time to the provided duration

    // Update the display to show the initial time (converted to minutes and seconds)
    updateTimerDisplay(Math.floor(remainingTime / 60), remainingTime % 60);

    // Set the interval to update the timer every second
    timerInterval = setInterval(() => {
        if (remainingTime <= 0) {
            stopTimer(); // Stop the timer when the time is up
            showNotification(); // Show notification when time is up
            return;
        }

        remainingTime--; // Decrease the remaining time
        updateTimerDisplay(Math.floor(remainingTime / 60), remainingTime % 60); // Update the display
    }, 1000); // Run every second (1000ms)
}

// Function to stop the timer
export function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval); // Clear the timer interval
        timerInterval = null; // Reset the interval reference
    }
    remainingTime = 0; // Reset the remaining time
    updateTimerDisplay(0, 0); // Reset the display to 0:00
}

// Function to pause the timer
export function pauseTimer() {
    if (timerInterval) {
        clearInterval(timerInterval); // Clear the timer interval
        timerInterval = null; // Reset the interval reference
    }
    timerPaused = true; // Mark the timer as paused
}

// Function to resume the paused timer
export function resumeTimer() {
    if (timerPaused) {
        timerPaused = false; // Mark the timer as not paused
        startTimer(remainingTime); // Resume the timer with the remaining time
    }
}