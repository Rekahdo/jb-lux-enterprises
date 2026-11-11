import { NextResponse } from "next/server";

export function GET(){
    const images = {
      og: "https://jbluxenterprises.vercel.app/og/og.jpg",
    };

    return NextResponse.json(images)
}