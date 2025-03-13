export function showStartView() {
    const startView = document.getElementById('start-view');
    startView.style.display = 'block';

    document.body.style.backgroundImage = "url('./icons/eggcellentBG.png')";
}

export function hideStartView() {
    const startView = document.getElementById('start-view');
    startView.style.display = 'none';

    document.body.style.backgroundImage = "url('./icons/eggcellentTimerBG.png')";
}
