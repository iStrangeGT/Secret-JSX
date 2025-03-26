import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import feedbackRoutes from "./Routes/FeedbackRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB:", err));

// Routes
app.use("/api/feedback", feedbackRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the SecretStore API!");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.post('/api/feedback', async (req, res) => {
    try {
      const { username, comment } = req.body;
  
      if (!username || !comment) {
        return res.status(400).json({ message: "Username and comment are required." });
      }
  
      // Tambahkan timestamp saat ini
      const newFeedback = new Feedback({
        username,
        comment,
        timestamp: new Date(), // Tambahkan nilai timestamp di sini
      });
  
      const savedFeedback = await newFeedback.save();
      res.status(201).json(savedFeedback);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to save feedback" });
    }
  });
  
  
