import mongoose from "mongoose";

const PhaseSchema = new mongoose.Schema({
  name: String,
  color: String,
});

export default mongoose.model("Phase", PhaseSchema);
