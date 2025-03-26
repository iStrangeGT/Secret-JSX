import express from "express";
import Feedback from "../Models/Feedback.js";

const router = express.Router();

// Create Feedback
router.post("/", async (req, res) => {
  try {
    const { username, comment, profile, timestamp } = req.body;
    if (!username || !comment) {
      return res.status(400).json({ error: "Name and comment are required." });
    }
    const feedback = new Feedback({ username, comment, profile, timestamp });
    const savedFeedback = await feedback.save();
    res.status(201).json(savedFeedback);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error." });
  }
});

// Get All Feedback
router.get("/", async (req, res) => {
    try {
      const feedbacks = await Feedback.find(); // Ambil semua feedback dari MongoDB
      res.status(200).json(feedbacks);
    } catch (error) {
      res.status(500).json({ message: "Error fetching feedbacks", error });
    }
  });

  router.post("/", async (req, res) => {
    const { username, comment } = req.body;
  
    if (!username || !comment) {
      return res.status(400).json({ message: "Username and comment are required" });
    }
  
    try {
      const newFeedback = new Feedback({
        username,
        comment,
        profile: "./default-profile.png", // Set default profile image
        timestamp: new Date().toISOString(),
      });
  
      const savedFeedback = await newFeedback.save(); // Simpan ke MongoDB
      res.status(201).json(savedFeedback);
    } catch (error) {
      res.status(500).json({ message: "Error saving feedback", error });
    }
  });
  

// Delete Feedback
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedFeedback = await Feedback.findByIdAndDelete(id);
    if (!deletedFeedback) {
      return res.status(404).json({ error: "Feedback not found." });
    }
    res.status(200).json({ message: "Feedback deleted successfully." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error." });
  }
});


  

export default router;
