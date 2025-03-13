import express from 'express';
import { TimerController } from '../controllers/timerController.mjs';
const router = express.Router();

router.get('/timers', TimerController.getAll);
router.post('/timers', TimerController.create);
router.put('/timers/:id', TimerController.update);
router.delete('/timers/:id', TimerController.delete);

export default router;