CREATE SCHEMA IF NOT EXISTS app;

CREATE TABLE IF NOT EXISTS app.account (
   email VARCHAR(50) PRIMARY KEY,
   password VARCHAR(255) NOT NULL
);
