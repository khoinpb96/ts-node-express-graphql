import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  name: String,
  users: [mongoose.Types.ObjectId],
  phase: mongoose.Types.ObjectId,
  create_at: Date,
  due_date: Date,
});

export default mongoose.model("Task", TaskSchema);
