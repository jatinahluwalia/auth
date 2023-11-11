import { NextResponse } from "next/server";

export async function POST(request: any) {
    const payload = request.body;

    console.log(payload);

    return NextResponse.json("Webhook received successfully");
}
export async function GET(request: any) {
    return NextResponse.json("Hello World");
}
