import { NextResponse } from "next/server";

export async function POST(request: any) {
    return NextResponse.json('Hello World')
}
