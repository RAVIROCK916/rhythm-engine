const { Schema, model } = require('mongoose');

const albumSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    audioLink: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
}, { collection: "Albums" });

const Album = model('Album', albumSchema);

module.exports = { Album }
