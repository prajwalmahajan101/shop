const express = require("express")
const router = express.Router()

const adminRouter = require("./admin")
const shopRouter = require("./shop")


router.use("/admin",adminRouter.routes)
router.use(shopRouter)
router.use((req,res,next)=>{
    res.status(404).send(`
    <h1>Hello, Which Idiot Gave You this URL</h1>
    `)
})

module.exports = router