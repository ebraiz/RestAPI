const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: [true, "Price must be provided"],
    },
    featured: {
        type: Boolean,
        default: false,
    },
    rating: {
        type: Number,
        default: 4.9,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    company: {
        type: String,
        enum: {
            values: ["google", "apple", "oneplus", "nokia", "samsung"],
            message: "{VALUE} is not supported",
        },
    },
});

module.exports = mongoose.model("Product", ProductSchema);