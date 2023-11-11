import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json("Webhook received successfully");
}
export async function GET() {
  return NextResponse.json("Hello World");
}
