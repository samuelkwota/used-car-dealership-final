
import express from "express";
import pool from "../config/db.js";

const router = express.Router();

// Homepage - show latest vehicle
router.get("/", async (req, res) => {
  try {
    const featured = await pool.query(
      "SELECT * FROM vehicles ORDER BY id DESC LIMIT 1"
    );
    res.render("index", { featured: featured.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

// Inventory page with optional search
router.get("/inventory", async (req, res) => {
  try {
    const { search } = req.query;
    let query = "SELECT * FROM vehicles";
    let values = [];

    if (search) {
      query += " WHERE make ILIKE $1 OR model ILIKE $1";
      values.push(`%${search}%`);
    }

    const cars = await pool.query(query, values);
    res.render("inventory", { cars: cars.rows, search });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

// Individual vehicle page
router.get("/vehicle/:id", async (req, res) => {
  try {
    const car = await pool.query(
      "SELECT * FROM vehicles WHERE id=$1",
      [req.params.id]
    );
    res.render("vehicle", { car: car.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

export default router;