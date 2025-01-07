const Video = require('../models/Video');

// Get all videos
const getAllVideos = async (req, res) => {
    try {
        const videos = await Video.find();
        res.status(200).json(videos);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching videos', error: error.message });
    }
}

// Create a new video
const createVideo = async (req, res) => {
    try {
        const video = new Video({ ...req.body });
        const savedVideo = await video.save();
        res.status(201).json(savedVideo);
    } catch (error) {
        res.status(500).json({ message: 'Error saving video', error: error.message });
    }
}

module.exports = { getAllVideos, createVideo };