// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Feedback Schema and Model
const feedbackSchema = new mongoose.Schema({
  username: { type: String, required: true },
  comment: { type: String, required: true },
  profile: { type: String, required: true },
  timestamp: { type: String, required: true },
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

// Routes
app.get('/feedbacks', async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ _id: -1 }); // Sort by newest
    res.json(feedbacks);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch feedbacks' });
  }
});

app.post('/feedbacks', async (req, res) => {
  const { username, comment, profile, timestamp } = req.body;
  if (!username || !comment || !profile || !timestamp) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const newFeedback = new Feedback({ username, comment, profile, timestamp });
    await newFeedback.save();
    res.status(201).json(newFeedback);
  } catch (err) {
    res.status(500).json({ error: 'Failed to save feedback' });
  }
});

app.delete('/feedbacks/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Feedback.findByIdAndDelete(id);
    res.status(200).json({ message: 'Feedback deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete feedback' });
  }
});

// Start the server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
