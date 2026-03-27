import { NextRequest, NextResponse } from "next/server";

// GET: Fetch all comments for a blog
export async function GET(
  _request: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  await context.params;

  return NextResponse.json([], { status: 200 });
}

// POST: Add a new comment
export async function POST(
  _request: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  await context.params;

  return NextResponse.json(
    { error: "Comments are currently disabled." },
    { status: 503 }
  );
}
