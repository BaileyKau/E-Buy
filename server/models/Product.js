const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: [true, "{PATH} is required"],
    },
    cost: { 
        type: Number,
        min: [1, "Your product must cost at least $1"],
    },
    category: {
        type: String,
        required: [true, "{PATH} is required"],
    },
    image: {
        type: String,
        required: [true, "{PATH} is required"],
    },
    cart: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });
const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
