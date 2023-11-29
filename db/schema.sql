DROP DATABASE IF EXISTS chat_db_dev;
CREATE DATABASE chat_db_dev;

\c chat_db_dev;

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    user_email VARCHAR(40) UNIQUE NOT NULL,
    user_name VARCHAR(40) NOT NULL,
    user_password VARCHAR(40) NOT NULL,
    manager BOOLEAN DEFAULT false,
    user_status INTEGER DEFAULT 0
);

CREATE TABLE rooms (
    room_id SERIAL PRIMARY KEY,
    room_name VARCHAR(255) NOT NULL
);

CREATE TABLE messages (
    message_id SERIAL PRIMARY KEY,
    room_id INTEGER REFERENCES rooms(room_id) ON DELETE CASCADE, 
    chat_message TEXT,
    user_name VARCHAR(40) NOT NULL
);