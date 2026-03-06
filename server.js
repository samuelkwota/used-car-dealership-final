
import express from "express"
import session from "express-session"
import path from "path"
import {fileURLToPath} from "url"

import vehicleRoutes from "./routes/vehicleRoutes.js"
import adminRoutes from "./routes/adminRoutes.js"
import authRoutes from "./routes/authRoutes.js"

const __filename=fileURLToPath(import.meta.url)
const __dirname=path.dirname(__filename)

const app=express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static(path.join(__dirname,"public")))

app.use("/uploads", express.static(path.join(__dirname,"uploads")))
app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"))

app.use(session({
secret:"supersecret",
resave:false,
saveUninitialized:false
}))

app.use("/",vehicleRoutes)
app.use("/admin",adminRoutes)
app.use("/auth",authRoutes)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
