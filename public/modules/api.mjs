const API_URL = '/api/timers';

export async function fetchTimers() {
    const response = await fetch(API_URL);
    return response.json();
}

export async function createTimer(duration) {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ duration })
    });
    return response.json();
}

export async function deleteTimer(id) {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
}