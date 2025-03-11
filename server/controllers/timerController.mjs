import { Timer } from '../models/timer.js';

export class TimerController {

  static async startTimer(req, res) {
    const { time_minutes } = req.body;
    const timer = new Timer(time_minutes);
    
    try {
      const savedTimer = await timer.save();
      res.status(201).json({ message: "Timer started", timer: savedTimer });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  static async getTimers(req, res) {
    try {
      const timers = await Timer.getAll();
      res.status(200).json(timers);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}
