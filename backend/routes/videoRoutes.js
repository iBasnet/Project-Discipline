const express = require('express');
const { getAllVideos, createVideo, updateVideo } = require('../controllers/videoController');

const router = express.Router();

// GET /api/videos - Fetch all videos
router.get('/', getAllVideos);

// POST /api/videos - Add a new video
router.post('/', createVideo);

// PUT /api/videos - Update an existing video
router.put('/:videoId', updateVideo);

module.exports = router;