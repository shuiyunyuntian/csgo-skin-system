const mongoose = require('mongoose');

const skinSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rarity: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Skin = mongoose.model('Skin', skinSchema);
module.exports = Skin;