const express = require('express');
const router = express.Router();
const controller = require('../controller/product.controller');

module.exports = () => {
    router.post('/', controller.addProduct);
    router.get('/', controller.getAllProducts);
    router.get('/:id', controller.getProduct);
    router.delete('/:id', controller.deleteProduct);
    router.put('/:id', controller.updateProduct);
    return router;
}