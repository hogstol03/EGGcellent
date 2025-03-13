import { db } from '../../data/db.mjs';

export const TimerController = {
    getAll: async (req, res) => {
        try {
            const result = await db.query('SELECT * FROM timers');
            res.json(result.rows);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    create: async (req, res) => {
        try {
            const { duration } = req.body;
            const result = await db.query('INSERT INTO timers (duration) VALUES ($1) RETURNING *', [duration]);
            res.json(result.rows[0]);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    update: async (req, res) => {
        try {
            const { id } = req.params;
            const { duration } = req.body;
            const result = await db.query('UPDATE timers SET duration = $1 WHERE id = $2 RETURNING *', [duration, id]);
            res.json(result.rows[0]);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params;
            await db.query('DELETE FROM timers WHERE id = $1', [id]);
            res.json({ message: 'Timer deleted' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};
