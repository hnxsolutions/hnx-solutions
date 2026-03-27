import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { BlogEngagement } from "@/models/BlogEngagement";
import { BlogUserLike } from "@/models/BlogUserLike";

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
    await connectToDatabase();

    const data = await BlogEngagement.findOneAndUpdate(
      { slug },
      { $setOnInsert: { likes: 0, comments: 0 } },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    ).lean();

    if (!data) {
      throw new Error("Failed to initialize engagement data");
    }

    const userId = getUserId(request);
    const userLiked = !!(await BlogUserLike.exists({ slug, userId }));

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
    const { action } = body; // "like"

    if (action !== "like") {
      return NextResponse.json(
        { error: "Invalid action. Provide 'like'." },
        { status: 400 }
      );
    }

    await connectToDatabase();

    const data = await BlogEngagement.findOneAndUpdate(
      { slug },
      { $setOnInsert: { likes: 0, comments: 0 } },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );

    if (!data) {
      throw new Error("Failed to initialize engagement data");
    }

    const userId = getUserId(request);
    let userLiked = false;

    const existingLike = await BlogUserLike.findOne({ slug, userId });

    if (existingLike) {
      await BlogUserLike.deleteOne({ _id: existingLike._id });
      data.likes = Math.max(0, data.likes - 1);
      userLiked = false;
    } else {
      await BlogUserLike.create({ slug, userId });
      data.likes += 1;
      userLiked = true;
    }

    await data.save();

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
