import { NextResponse } from "next/server";

// 1. Force this route to be dynamic (evaluated on request, not build)
export const dynamic = "force-dynamic";

export async function GET(): Promise<NextResponse> {
  try {
    const images = {
      og: "https://jbluxenterprises.vercel.app/og/og.jpg",
    };

    return NextResponse.json(images);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch images" },
      { status: 500 },
    );
  }
}
