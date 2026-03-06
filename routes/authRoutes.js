
import express from "express"
const router=express.Router()

router.get("/login",(req,res)=>res.render("login"))

router.post("/login",(req,res)=>{
const {email,password}=req.body
if(email==="admin@email.com" && password==="admin123"){
req.session.admin=true
return res.redirect("/admin/dashboard")
}
res.redirect("/auth/login")
})

router.get("/logout",(req,res)=>{
req.session.destroy(()=>res.redirect("/"))
})

export default router
