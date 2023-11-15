import { NextResponse, NextRequest } from 'next/server';

export const POST = async (req: NextRequest) => {
  try {
    return NextResponse.json({ succes: 'OK', haha: 'Ok' });
  } catch (error) {}
};
