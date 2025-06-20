import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: String,
  email: { type: String, required: true, unique: true },
  password: String,
  role: { type: String, enum: ["entrepreneur", "investor"], required: true },
});

export default mongoose.model("User", userSchema);
