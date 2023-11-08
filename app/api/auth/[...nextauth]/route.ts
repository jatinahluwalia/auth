import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth/next";
import { connectDB } from "@/utils/mongoose";
import User from "@/utils/models/user";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || "",
      clientSecret: process.env.GOOGLE_SECRET || "",
    }),
  ],
  callbacks: {
    async signIn(params) {
      const { user } = params;
      try {
        await connectDB();
        await User.create({ email: user.email, role: "admin" });

        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
