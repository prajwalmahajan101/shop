const express = require("express")
const productController = require("../controllers/products")

//cont Test Db
const product = [];

const router = express.Router()

//GET
router.get('/add-product',productController.getAddProduct)

//POST
router.post('/add-product',productController.postAddProduct)



//Exports
module.exports =  router;
