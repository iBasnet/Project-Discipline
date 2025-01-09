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
        console.log(error);
    }
}

// Update an existing video
const updateVideo = async (req, res) => {
    const { link } = req.params;
    const updatedData = req.body;

    try {
        const video = await Video.findOneAndUpdate(
            // update the updatedData
        )

        if (!video) {
            return res.status(404).json({ message: 'Video not found' });
        }

        res.status(200).json(video);
    } catch (error) {
        res.status(500).json({ message: 'Error updating video', error: error.message });
        console.log(error);
    }
}

module.exports = { getAllVideos, createVideo, updateVideo };