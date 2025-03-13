export function changeBackground() {
    const startView = document.getElementById('start-view');
    const timerView = document.getElementById('timer-view');

    if (startView.style.display === 'block') {

        document.body.style.backgroundImage = "url('./icons/eggcellentBG.png')";
        //console.log("Start view active. Background set to eggcellentBG.");

    } else if (timerView.style.display === 'block') {
        
        document.body.style.backgroundImage = "url('./icons/eggcellentTimerBG.png')";
        //console.log("Timer view active. Background set to eggcellentTimerBG.");
    }
}

export function showNotification() {
    if ("Notification" in window && Notification.permission === "granted") {
        new Notification("EGGcellent", { body: "Time's up, your egg is ready!" });
    }
}
