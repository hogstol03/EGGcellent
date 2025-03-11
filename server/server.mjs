import express from 'express';
import { json } from 'express';
import { TimerController } from './controllers/timerController.mjs';

const app = express();
app.use(json());

app.post('/api/timer', TimerController.startTimer);
app.get('/api/timers', TimerController.getTimers);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
