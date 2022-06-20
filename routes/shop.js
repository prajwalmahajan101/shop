const express = require("express")
const path = require("path")

const product = require("./admin").product

const router = express.Router()



router.get('/',
    (req, res, next) => {
        console.log(product)
        res.render('shop',{
            prods:product,
            title:"Home",
            hasProduct:product.length>0,
        })
    });


module.exports = router;