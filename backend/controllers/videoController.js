const Video = require('../models/Video');

// Get all videos
const getAllVideos = async (req, res) => {
    try {
        const videos = await Video.find();
        res.status(200).json(videos);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching videos', error: error.message });
    }
};

// Create a new video
const createVideo = async (req, res) => {
    const { link, tier, remarks, willTry } = req.body;

    if (!link || !tier || !remarks || !willTry) {
        return res.status(400).json({ message: 'Link and tier are required' });
    }

    try {
        const video = new Video({ link, tier, remarks, willTry });
        const savedVideo = await video.save();
        res.status(201).json(savedVideo);
    } catch (error) {
        res.status(500).json({ message: 'Error saving video', error: error.message });
    }
};

module.exports = { getAllVideos, createVideo };