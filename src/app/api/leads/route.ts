import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { ContactSubmission } from "@/models/ContactSubmission";

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();

    const body = await req.json();

    const {
      name,
      email,
      phone,
      projectType,
      budget,
      message,
      chatTranscript,
      submissionKey,
    } = body;

    if (!name || !email || !projectType || !message) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing required fields",
          required: ["name", "email", "projectType", "message"],
        },
        { status: 400 }
      );
    }

    if (!submissionKey) {
      return NextResponse.json(
        {
          success: false,
          error: "submissionKey is required",
        },
        { status: 400 }
      );
    }

    const existingSubmission = await ContactSubmission.findOne({
      submissionKey,
    });

    if (existingSubmission) {
      return NextResponse.json(
        {
          success: true,
          message: "Lead already submitted",
          action: "lead_already_saved",
          data: {
            id: existingSubmission._id,
            name: existingSubmission.name,
            email: existingSubmission.email,
            phone: existingSubmission.phone,
            projectType: existingSubmission.projectType,
            budget: existingSubmission.budget,
            source: existingSubmission.source,
            status: existingSubmission.status,
          },
        },
        { status: 200 }
      );
    }

    const ipAddress =
      req.headers.get("x-forwarded-for") ||
      req.headers.get("x-real-ip") ||
      "";

    const userAgent = req.headers.get("user-agent") || "";

    const submission = await ContactSubmission.create({
      name,
      email,
      phone: phone || "",
      projectType,
      budget: budget || "",
      message,
      source: "ai_chat",
      status: "new",
      submissionKey,
      ipAddress,
      userAgent,
      chatTranscript: Array.isArray(chatTranscript) ? chatTranscript : [],
    });

    return NextResponse.json(
      {
        success: true,
        message: "Lead saved successfully",
        action: "lead_saved",
        data: {
          id: submission._id,
          name: submission.name,
          email: submission.email,
          phone: submission.phone,
          projectType: submission.projectType,
          budget: submission.budget,
          source: submission.source,
          status: submission.status,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saving AI lead:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to save lead",
      },
      { status: 500 }
    );
  }
}