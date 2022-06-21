const Product = require('../models/product')

exports.getAddProduct = (req, res, next) => {
    res.render('add-product')
}


exports.postAddProduct = (req,res,next)=>{
    const product = new Product(req.body)
    product.save()
    res.redirect('/')
}

exports.getAllProduct = (req, res, next) => {
    // console.log(product)
    const products = Product.fetchAll()
    // console.log(products)
    res.render('shop',{
        prods:products,
        title:"Home",
        hasProduct:products.length,
    })
}





