const Product = require('../models/product.model');

// To add new product to the system
const addProduct = async (req, res) => {
     //to prevent crashes
     if (req.body) {
        const product = new Product(req.body);
        //return a promise
        product.save()
            .then(data => {
                res.status(200).send({ data: data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

// To get all the products in the system
const getAllProducts = async (req, res) => {
    await Product.find({})
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
}

// To get a one product
const getProduct = async (req, res) => {
    if (req.params && req.params.id) {
        await Product.findById(req.params.id)
            .then(data => {
                res.status(200).send({ data: data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

// To delete a product from the system
const deleteProduct = async (req, res) => {
    if (req.params && req.params.id) {
        await Product.deleteOne({ _id: req.params.id })
            .then((result) => {
                res.status(200).send("deleted")
            }).catch((err) => {
                res.status(500).send({ error: err.message })
            });
    }
}

// To update a product in the system
const updateProduct = async (req, res) => {
    if (req.params && req.params.id) {
        await Product.updateOne({ _id: req.params.id }, { name: req.body.name, category: req.body.category, description: req.body.description, amount: req.body.amount })
            .then((result) => {
                res.status(200).send({ data: result });
            }).catch((err) => {
                res.status(500).send({ error: err.message });
            });
    }
}

// Exporting all the function in this file
module.exports = {
    addProduct,
    getAllProducts,
    getProduct,
    deleteProduct,
    updateProduct
}