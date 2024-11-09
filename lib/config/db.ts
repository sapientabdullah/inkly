import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connect = async () => {
  const mongoUri = process.env.MONGO_URI;
  if (!mongoUri) {
    throw new Error("MONGO_URI is not defined in the environment variables");
  }
  await mongoose.connect(mongoUri);
  console.log("Connected to MongoDB");
};