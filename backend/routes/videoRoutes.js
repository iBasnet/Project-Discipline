const express = require('express');
const { getAllVideos, createVideo } = require('../controllers/videoController');

const router = express.Router();

// GET /api/videos - Fetch all videos
router.get('/', getAllVideos);

// POST /api/videos - Add a new video
router.post('/', createVideo);

module.exports = router;