const mongoose = require('mongoose');

const rentalSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    skinId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Skin'
    },
    rentalPrice: {
        type: Number,
        required: true
    },
    rentalDuration: {
        type: Number,
        required: true // Duration in hours
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Rental = mongoose.model('Rental', rentalSchema);

module.exports = Rental;