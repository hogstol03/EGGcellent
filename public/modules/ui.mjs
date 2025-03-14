export function changeBackground() {
    const startView = document.getElementById('start-view');
    const timerView = document.getElementById('timer-view');

    if (startView.style.display === 'block') {
        document.body.style.backgroundImage = "url('./icons/eggcellentBG.png')";
    } else if (timerView.style.display === 'block') {
        document.body.style.backgroundImage = "url('./icons/eggcellentTimerBG.png')";
    }
}

export function requestNotificationPermission() {
    if ("Notification" in window && Notification.permission !== "granted") {
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                console.log("Notification permission granted.");
            } else {
                console.log("Notification permission denied.");
            }
        });
    }
}

export function showNotification() {
    if ("Notification" in window && Notification.permission === "granted") {
        new Notification("EGGcellent", { body: "Time's up, your egg is ready!" });
    }
}
