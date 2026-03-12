import express from "express"
import multer from "multer"
import { CloudinaryStorage } from "multer-storage-cloudinary"
import cloudinary from "../config/cloudinary.js"
import pool from "../config/db.js"

const router = express.Router()

// Cloudinary storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "cars",
    allowed_formats: ["jpg","png","jpeg","webp","avif"]
  }
})

const upload = multer({ storage })

// Auth middleware
function checkAuth(req, res, next) {
  if (!req.session.admin) return res.redirect("/auth/login")
  next()
}

//
// Dashboard
//
router.get("/dashboard", checkAuth, async (req, res) => {
  const cars = await pool.query("SELECT * FROM vehicles ORDER BY id DESC")
  res.render("dashboard", { cars: cars.rows })
})

//
// Open edit page
//
router.get("/edit/:id", checkAuth, async (req, res) => {

  const car = await pool.query(
    "SELECT * FROM vehicles WHERE id=$1",
    [req.params.id]
  )

  res.render("editVehicle", { car: car.rows[0] })

})

//
// Add vehicle
//
router.post("/add", checkAuth, upload.single("image"), async (req, res) => {

  const { make, model, year, price, mileage } = req.body

  const cleanPrice = price.replace(/,/g,"")

  let image = null
  if (req.file) {
    image = req.file.path
  }

  await pool.query(
    "INSERT INTO vehicles (make,model,year,price,mileage,image) VALUES ($1,$2,$3,$4,$5,$6)",
    [make, model, year, cleanPrice, mileage, image]
  )

  res.redirect("/admin/dashboard")
})

//
// Update vehicle
//
router.post("/update/:id", checkAuth, upload.single("image"), async (req, res) => {

  const { make, model, year, price, mileage } = req.body
  const cleanPrice = price.replace(/,/g,"")

  let image

  if (req.file) {
    image = req.file.path
  } else {
    const current = await pool.query(
      "SELECT image FROM vehicles WHERE id=$1",
      [req.params.id]
    )
    image = current.rows[0].image
  }

  await pool.query(
    "UPDATE vehicles SET make=$1, model=$2, year=$3, price=$4, mileage=$5, image=$6 WHERE id=$7",
    [make, model, year, cleanPrice, mileage, image, req.params.id]
  )

  res.redirect("/admin/dashboard")
})

//
// Delete vehicle
//
router.post("/delete/:id", checkAuth, async (req, res) => {

  await pool.query(
    "DELETE FROM vehicles WHERE id=$1",
    [req.params.id]
  )

  res.redirect("/admin/dashboard")

})

export default router