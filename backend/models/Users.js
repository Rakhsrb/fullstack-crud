import mongoose from "mongoose";

const Users = new mongoose.Schema(
  {
    userName: { type: String, required: true },
    age: { type: Number, required: true },
    job: { type: String, required: true },
    gender: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("users", Users);
