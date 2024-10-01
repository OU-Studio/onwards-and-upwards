'use server'

import { NextResponse } from 'next/server';

export async function GET(req: Request) {
    try{
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
      console.log("Response sent: ", data[code]); // Log response
      return NextResponse.json(data[code]);
    } else {
      console.log("Code not found"); // Log missing code
      return NextResponse.json({ error: "Code not found" }, { status: 404 });
    }
  } catch (error) {
    console.error("Error in API handler", error); // Log error
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}