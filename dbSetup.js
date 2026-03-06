// dbSetup.js
import pool from "./config/db.js";

async function createTables() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS vehicles (
        id SERIAL PRIMARY KEY,
        make VARCHAR(50) NOT NULL,
        model VARCHAR(50) NOT NULL,
        year INT NOT NULL,
        price NUMERIC(12,2) NOT NULL,
        mileage INT,
        image VARCHAR(255),
        description TEXT
      );
    `);

    console.log("Vehicles table created successfully");
    process.exit(0); // Exit after running
  } catch (err) {
    console.error("Error creating tables:", err);
    process.exit(1);
  }
}

createTables();