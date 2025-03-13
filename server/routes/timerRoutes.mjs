import { Router } from 'express';
import { TimerController } from '../controllers/timerController.mjs';

const router = Router();


router.post('/api/timer', TimerController.startTimer);
router.get('/api/timers', TimerController.getTimers);
router.put('/api/timer/:id', TimerController.updateTimer);
router.delete('/api/timer/:id', TimerController.deleteTimer);

export default router;
