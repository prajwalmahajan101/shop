const products = [];
module.exports = class Product{
    constructor(body) {
        this.id = products.length;
        this.title = body.title;
        this.description = body.description;
        this.by = body.by;
        this.img = body.img;
        this.price = body.price;
    }
    save(){
        products.push(this);
    }
    static fetchAll(){
        return products;
    }
}