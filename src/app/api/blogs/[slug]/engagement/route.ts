import { NextRequest, NextResponse } from "next/server";

// Simple in-memory storage for engagement data with user likes tracking
// In production, this should use a database (Supabase, Prisma, MongoDB, etc.)
const engagementStore: Record<
  string,
  { likes: number; comments: number; likedBy: Set<string> }
> = {};

// Helper to get engagement data
function getEngagement(slug: string) {
  if (!engagementStore[slug]) {
    engagementStore[slug] = { likes: 0, comments: 0, likedBy: new Set() };
  }
  return engagementStore[slug];
}

// Helper to get or create user ID from request
function getUserId(request: NextRequest): string {
  // In production, use actual user sessions
  // For now, use a browser fingerprint via cookie
  let userId = request.cookies.get("blog-user-id")?.value;
  if (!userId) {
    userId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }
  return userId;
}

// GET: Fetch engagement data
export async function GET(
  request: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  const { slug } = await context.params;

  try {
    const data = getEngagement(slug);
    const userId = getUserId(request);
    const userLiked = data.likedBy.has(userId);

    const response = NextResponse.json(
      {
        likes: data.likes,
        comments: data.comments,
        userLiked,
      },
      { status: 200 }
    );

    // Set user ID cookie if not already set
    if (!request.cookies.get("blog-user-id")) {
      response.cookies.set("blog-user-id", userId, {
        maxAge: 60 * 60 * 24 * 365, // 1 year
      });
    }

    return response;
  } catch (error) {
    console.error("Error fetching engagement:", error);
    return NextResponse.json(
      { error: "Failed to fetch engagement data" },
      { status: 500 }
    );
  }
}

// POST: Toggle likes or increment comments
export async function POST(
  request: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  const { slug } = await context.params;

  try {
    const body = await request.json();
    const { action } = body; // "like" or "comment"

    if (!action || !["like", "comment"].includes(action)) {
      return NextResponse.json(
        { error: "Invalid action. Provide 'like' or 'comment'." },
        { status: 400 }
      );
    }

    const data = getEngagement(slug);
    const userId = getUserId(request);
    let userLiked = false;

    // Toggle like or increment comment
    if (action === "like") {
      // Toggle: if user already liked, remove the like; otherwise add it
      if (data.likedBy.has(userId)) {
        data.likedBy.delete(userId);
        data.likes = Math.max(0, data.likes - 1);
        userLiked = false;
      } else {
        data.likedBy.add(userId);
        data.likes += 1;
        userLiked = true;
      }
    } else if (action === "comment") {
      data.comments += 1;
    }

    // Return updated engagement data
    const response = NextResponse.json(
      {
        likes: data.likes,
        comments: data.comments,
        userLiked,
      },
      { status: 200 }
    );

    // Set user ID cookie if not already set
    if (!request.cookies.get("blog-user-id")) {
      response.cookies.set("blog-user-id", userId, {
        maxAge: 60 * 60 * 24 * 365, // 1 year
      });
    }

    return response;
  } catch (error) {
    console.error("Error updating engagement:", error);
    return NextResponse.json(
      { error: "Failed to update engagement data" },
      { status: 500 }
    );
  }
}
