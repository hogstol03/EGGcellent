import { client } from './client';

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

    static async update(id, time_minutes) {
        const query = 'UPDATE timers SET time_minutes = $1 WHERE id = $2 RETURNING *';
        const values = [time_minutes, id];
        try {
            const result = await client.query(query, values);
            return result.rows[0];
        } catch (error) {
            console.error(error);
            throw new Error('Unable to update timer');
        }
    }

    static async delete(id) {
        const query = 'DELETE FROM timers WHERE id = $1 RETURNING *';
        const values = [id];
        try {
            const result = await client.query(query, values);
            return result.rows[0];
        } catch (error) {
            console.error(error);
            throw new Error('Unable to delete timer');
        }
    }
}
