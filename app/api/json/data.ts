'use server'

import { NextResponse } from 'next/server';

export async function GET(req: Request) {
    const headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*'); // Allow all origins
    
  const { searchParams } = new URL(req.url);
  const code = searchParams.get('code');

  // Pre-selected JSON data for each code
  const data: { [key: string]: { message: string } } = {
    'aaaa': { message: "This is the JSON for code 'aaaa'" },
    'bbbb': { message: "This is the JSON for code 'bbbb'" },
  };

  if (code && data[code]) {
    return NextResponse.json(data[code]);
  } else {
    return NextResponse.json({ error: "Code not found" }, { status: 404 });
  }
}