const express = require("express")
const router = express.Router()

const adminRouter = require("./admin")
const shopRouter = require("./shop")


router.use("/admin",adminRouter)
router.use(shopRouter)
router.use((req,res,next)=>{
   res.render("error",{
       title:"404 Page Not Found",
       errorMessage:"Which idiot gave You this URL? Pls go to some Useful Page through Navigation Bar !!!"
   })
})

module.exports = router