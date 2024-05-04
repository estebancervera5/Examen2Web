const mongoose = require('mongoose')

const gameSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    platform: {
        type: String,
        required: true
    }
}, {
    timestamps: true 
});

module.exports = mongoose.model('Game', gameSchema);
