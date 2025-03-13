import { showTimerView } from '../view/timerView.mjs';
import { hideStartView } from '../view/startView.mjs';
import { startTimer } from './timer.mjs';
import { changeBackground } from './ui.mjs';

export function setupHitboxes() {
    const hitboxes = document.querySelectorAll('.hitbox');
    const timerDisplay = document.getElementById('timer-display');

    hitboxes.forEach(hitbox => {
        hitbox.addEventListener('click', function () {
            const time = parseInt(this.getAttribute('data-time'), 10);
            //console.log('Selected time:', time);

            hideStartView();
            
            showTimerView();

            changeBackground();
            startTimer(time);
        });
    });
}
