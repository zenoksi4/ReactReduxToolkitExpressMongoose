const mongoose = require('mongoose');

const planeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    steamUrl: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    itemImage: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model("item", planeSchema)