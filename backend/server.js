const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/videos', require('./routes/videoRoutes'));

const PORT = process.env.PORT || 5172;

// Start the server and connect to MongoDB
app.listen(PORT, async () => {
    try {
        console.log(`Server is running on http://localhost:${PORT}`);
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Failed to connect to MongoDB', error);
        process.exit(1); // Exit process if DB connection fails
    }
});