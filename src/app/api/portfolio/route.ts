import { NextResponse } from "next/server";
import { portfolioProjects } from "@/data/portfolioProjects";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category");

  let filtered = portfolioProjects;
  if (category && category !== "All") {
    filtered = portfolioProjects.filter((p) => p.category === category);
  }

  return NextResponse.json({ success: true, data: filtered });
}
