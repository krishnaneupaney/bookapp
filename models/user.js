import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, required:  true },
  email: { type: String, required: false },
  password: { type: String, required: true },
  id: { type: String },
});

export default mongoose.model("User", userSchema);