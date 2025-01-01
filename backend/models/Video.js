const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema(
    {
        link: {
            type: String,
            required: [true, 'A video link is required'],
        },
        tier: {
            type: String,
            enum: ['S', 'A', 'B', 'C', 'D', 'E', 'F'],
            required: [true, 'A tier is required'],
        },
        remarks: {
            type: String,
            required: [true, 'A remarks is required'],
        },
    },
    {
        timestamps: true, // Enable timestamps
        collection: 'videos', // Name the collection
    }
);

module.exports = mongoose.model('Video', videoSchema);