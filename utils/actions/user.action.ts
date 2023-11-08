'use server'
import User from "../models/user";
import { connectDB } from "../mongoose";

export const getUser = async ({ email }: { email?: string | null }) => {
  try {
    await connectDB();

    return await User.findOne({ email });
  } catch (error) {
    console.log(error);
  }
};
