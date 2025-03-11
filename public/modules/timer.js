export function startCountdown(minutes, callback) {
    let time = minutes * 60;
    const interval = setInterval(() => {
        if (time <= 0) {
            clearInterval(interval);
            callback(minutes);
        } else {
            console.log(`Tid igjen: ${time} sekunder`);
            time--;
        }
    }, 1000);
}
