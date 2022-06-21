const express = require("express")

const productController = require("../controllers/products")

const router = express.Router()

//GET
router.get('/',productController.getAllProduct);

// Exports
module.exports = router;