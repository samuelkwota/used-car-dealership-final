import express from "express"
import multer from "multer"
import pool from "../config/db.js"

const router = express.Router()

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "public/uploads"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname)
})

const upload = multer({ storage })

function checkAuth(req, res, next) {
  if (!req.session.admin) return res.redirect("/auth/login")
  next()
}

router.get("/dashboard", checkAuth, async (req, res) => {
  const cars = await pool.query("SELECT * FROM vehicles ORDER BY id DESC")
  res.render("dashboard", { cars: cars.rows })
})

router.post("/add", checkAuth, upload.single("image"), async (req, res) => {

  const { make, model, year, price, mileage } = req.body

  const cleanPrice = price.replace(/,/g, "")

  let image = null
  if (req.file) {
    image = "/uploads/" + req.file.filename
  }

  await pool.query(
    "INSERT INTO vehicles (make,model,year,price,mileage,image) VALUES ($1,$2,$3,$4,$5,$6)",
    [make, model, year, cleanPrice, mileage, image]
  )

  res.redirect("/admin/dashboard")
})

router.post("/delete/:id", checkAuth, async (req, res) => {
  await pool.query("DELETE FROM vehicles WHERE id=$1", [req.params.id])
  res.redirect("/admin/dashboard")
})

export default router