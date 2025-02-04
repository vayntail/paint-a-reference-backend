import mongoose from "mongoose";

const refSchema = new mongoose.Schema(
  {
    imageUrl: { type: String, required: true },
    uploadDate: { type: Date, default: Date.now },
    type: {
      type: String,
      enum: ["Photo", "Film", "Game", "Animation"],
      required: true,
    },
    tags: [{ type: String }],
    uploadedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    favedUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    studies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Study" }],
  },
  { timestamps: true }
);

refSchema.index({ createdAt: 1 });

const Ref = mongoose.model("Ref", refSchema);
export default Ref;
