db name: oasis

CREATE TABLE users(
id SERIAL PRIMARY KEY,
username VARCHAR(50) NOT NULL,
password VARCHAR(100) NOT NULL
);