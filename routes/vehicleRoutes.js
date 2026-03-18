import nodemailer from "nodemailer"
import express from "express";
import pool from "../config/db.js";

const router = express.Router();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
})

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

  const result = await pool.query(
    "SELECT * FROM vehicles WHERE id=$1",
    [req.params.id]
  )

  const vehicle = result.rows[0]

  res.render("vehicle", { vehicle })

})
// Emial page
router.get("/contact/:id", async (req, res) => {

const car = await pool.query(
"SELECT * FROM vehicles WHERE id=$1",
[req.params.id]
)

res.render("contact", { vehicle: car.rows[0] })

})

router.post("/contact", async (req, res) => {

const { name, email, phone, message, vehicle } = req.body

const mailOptions = {
from: email,
to: process.env.EMAIL_USER,
subject: "Vehicle Inquiry",
text: `
Vehicle: ${vehicle}

Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}
`
}

await transporter.sendMail(mailOptions)

res.send("Message sent successfully!")

})
export default router;