import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Use External Database URL from Render
  ssl: { rejectUnauthorized: false }          // Required for Render Postgres
});

export default pool;