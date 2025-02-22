import mongoose from "mongoose";
import { DB_URL, NODE_ENV } from "../config/config.js";

const connectDB = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log(`Connected to MongoDB at ${NODE_ENV} mode`);
  } catch (err) {
    console.error("Error connecting to MongoDB", err);
    process.exit(1);
  }
};

export default connectDB;

