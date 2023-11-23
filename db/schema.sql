DROP DATABASE IF EXISTS thread_db_dev;
CREATE DATABASE thread_db_dev;

\c thread_db_dev;

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    user_email VARCHAR(40) UNIQUE NOT NULL,
    user_name VARCHAR(40) NOT NULL,
    user_password VARCHAR(40) NOT NULL,
    manager BOOLEAN DEFAULT false,
    user_status INTEGER DEFAULT 0
);

