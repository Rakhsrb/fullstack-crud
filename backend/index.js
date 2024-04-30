import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import UserRoutes from "./routes/UserRoutes.js";
import cors from "cors";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (_, res) => {
  res.send("Hello world");
});

app.use("/users", UserRoutes);

async function RunCode() {
  try {
    await mongoose.connect(process.env.MONGO);
    app.listen(3000, console.log("Server is running on http://localhost:3000"));
  } catch (err) {
    console.log(err);
  }
}
RunCode();
