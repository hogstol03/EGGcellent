CREATE TABLE IF NOT EXISTS timers (
    id SERIAL PRIMARY KEY,
    duration INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
