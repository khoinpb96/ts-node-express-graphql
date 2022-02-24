import mongoose from "mongoose";

const StatusSchema = new mongoose.Schema({
  name: String,
  color: String,
  tasks: [mongoose.Types.ObjectId],
});

export default mongoose.model("Status", StatusSchema);
