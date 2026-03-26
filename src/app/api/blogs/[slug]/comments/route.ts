import { NextRequest, NextResponse } from "next/server";

// Simple in-memory storage for comments
// In production, this should use a database (Supabase, Prisma, MongoDB, etc.)
const commentsStore: Record<string, Array<{
  id: string;
  name: string;
  content: string;
  createdAt: string;
}>> = {};

// Helper to get comments for a blog
function getComments(slug: string) {
  if (!commentsStore[slug]) {
    commentsStore[slug] = [];
  }
  return commentsStore[slug];
}

// GET: Fetch all comments for a blog
export async function GET(
  request: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  const { slug } = await context.params;

  try {
    const comments = getComments(slug);
    // Return comments sorted by newest first
    return NextResponse.json(comments.reverse(), { status: 200 });
  } catch (error) {
    console.error("Error fetching comments:", error);
    return NextResponse.json(
      { error: "Failed to fetch comments" },
      { status: 500 }
    );
  }
}

// POST: Add a new comment
export async function POST(
  request: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  const { slug } = await context.params;

  try {
    const body = await request.json();
    const { name, content } = body;

    if (!name || !content) {
      return NextResponse.json(
        { error: "Name and content are required" },
        { status: 400 }
      );
    }

    const comments = getComments(slug);
    const newComment = {
      id: `comment_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      name: name.trim(),
      content: content.trim(),
      createdAt: new Date().toISOString(),
    };

    comments.push(newComment);

    return NextResponse.json(newComment, { status: 201 });
  } catch (error) {
    console.error("Error adding comment:", error);
    return NextResponse.json(
      { error: "Failed to add comment" },
      { status: 500 }
    );
  }
}
