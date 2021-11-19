const Product = require("../models/Product");
module.exports = {
    findAllProducts: (_req, res) => {
        Product.find()
            .then(allProducts => res.json( allProducts ))
            .catch(err => res.status(400).json(err));
    },

    findProduct: (req, res) => {
        Product.findOne({ _id: req.params.id })
            .then(oneProduct => res.json( oneProduct ))
            .catch(err => res.status(400).json(err));
    },

    createProduct: (req, res) => {
        Product.create(req.body)
            .then(newProduct => res.json({ Product: newProduct }))
            .catch(err => res.status(400).json(err));
    },

    editProduct: (req, res) => {
        Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
            .then(updatedProduct => res.json({ Product: updatedProduct }))
            .catch(err => res.status(400).json(err));
    },

    deleteProduct: (req, res) => {
        Product.deleteOne({ _id: req.params.id }) 
            .then(result => res.json({ result: result }))
            .catch(err => res.status(400).json(err));
    }
}