import mongoose from "mongoose";

const studySchema = new mongoose.Schema(
  {
    imageUrl: { type: String, required: true },
    uploadDate: { type: Date, default: Date.now },
    ref: { type: mongoose.Schema.Types.ObjectId, ref: "Ref", required: true },
    uploadedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    favedUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
  },
  { timestamps: true }
);

studySchema.index({ createdAt: 1 });

const Study = mongoose.model("Study", studySchema);
export default Study;
