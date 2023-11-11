import { NextResponse, NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    console.log(body);
    return NextResponse.json({ succes: "OK" });
  } catch (error) {
    console.log(error);
  }
};
