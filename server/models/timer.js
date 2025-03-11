import { client } from '../db.js';

export class Timer {
    constructor(time_minutes) {
        this.time_minutes = time_minutes;
        this.started_at = new Date();
    }

    async save() {
        const query = 'INSERT INTO timers(time_minutes, started_at) VALUES($1, $2) RETURNING *';
        const values = [this.time_minutes, this.started_at];
        try {
            const result = await client.query(query, values);
            return result.rows[0];
        } catch (error) {
            console.error(error);
            throw new Error('Unable to save timer');
        }
    }

    static async getAll() {
        try {
            const query = 'SELECT * FROM timers';
            const result = await client.query(query);
            return result.rows;
        } catch (error) {
            console.error(error);
            throw new Error('Unable to retrieve timers');
        }
    }
}
