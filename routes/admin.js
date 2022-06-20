const express = require("express")
const path = require("path")


//cont Test Db

const product = [];

const router = express.Router()
router.get('/add-product',
    (req, res, next) => {
        res.render('add-product')
    });

router.post('/add-product',
    (req,res,next)=>{
    // console.log(req.body)
    product.push({
        id:product.length,
        title:req.body['title'],
        dis:req.body['description'],
        by:req.body['by'],
        img:req.body['img'],
        price:req.body['price'],
    })
    res.redirect('/')
})


exports.routes = router;
exports.product = product;