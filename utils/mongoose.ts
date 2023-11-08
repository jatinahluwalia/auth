import { connect } from "mongoose";

let isConnected = false;

export const connectDB = async () => {
  if (isConnected) return console.log("Already connected.");
  await connect(process.env.MONGO_URI || "");
  console.log("MONGO Connected");
  isConnected = true;
};
