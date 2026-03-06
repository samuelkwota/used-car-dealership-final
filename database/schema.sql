
CREATE DATABASE usedcars;

CREATE TABLE vehicles(
id SERIAL PRIMARY KEY,
make TEXT,
model TEXT,
year INT,
price INT,
image TEXT
);
