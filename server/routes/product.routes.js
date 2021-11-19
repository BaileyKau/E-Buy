const ProductController = require('../controllers/product.controller');
module.exports = function(app){
    app.get('/api/Product', ProductController.findAllProducts);
    app.get('/api/Product/:id', ProductController.findProduct);
    app.put('/api/Product/edit/:id', ProductController.editProduct);
    app.post('/api/Product', ProductController.createProduct);
    app.delete('/api/Product/:id', ProductController.deleteProduct);
}