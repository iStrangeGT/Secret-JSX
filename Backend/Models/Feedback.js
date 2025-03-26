import mongoose from "mongoose";

const FeedbackSchema = new mongoose.Schema({
    username: { type: String, required: true },
    comment: { type: String, required: true },
    timestamp: { type: Date, required: true, default: Date.now },
  });
  

export default mongoose.model("Feedback", FeedbackSchema);
