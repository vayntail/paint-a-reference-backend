import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    pfp: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    bio: { type: String },
    moderator: { type: Boolean, default: false },
    favRefs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Ref" }],
    favStudies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Study" }],
    uploadedRefs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Ref" }],
    uploadedStudies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Study" }],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
