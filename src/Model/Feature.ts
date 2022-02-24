import mongoose from "mongoose";

const FeatureSchema = new mongoose.Schema({
  name: String!,
  statuses: [mongoose.Types.ObjectId],
});

export default mongoose.model("Feature", FeatureSchema);
