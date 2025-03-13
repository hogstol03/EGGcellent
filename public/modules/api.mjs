const API_URL = process.env.NODE_ENV === 'production'
    ? 'https://eggcellent-36xy.onrender.com/api/timers'
    : 'http://localhost:3000/api/timers';


export async function fetchTimers() {
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error('Failed to fetch timers');
    }
    return response.json();
}

export async function createTimer(duration) {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ duration })
    });
    if (!response.ok) {
        throw new Error('Failed to create timer');
    }
    return response.json();
}

export async function deleteTimer(id) {
    const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    if (!response.ok) {
        throw new Error('Failed to delete timer');
    }
    return response.json();
}