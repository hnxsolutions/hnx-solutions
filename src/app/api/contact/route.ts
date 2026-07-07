import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/validators";
import { connectToDatabase } from "@/lib/mongodb";
import { ContactSubmission } from "@/models/ContactSubmission";
import { sendContactLeadToSalesAgent } from "@/lib/salesAgent";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = contactSchema.parse(body);

    await connectToDatabase();

    const savedSubmission = await ContactSubmission.create({
      ...data,
      ipAddress: req.headers.get("x-forwarded-for")?.split(",")[0]?.trim(),
      userAgent: req.headers.get("user-agent") ?? undefined,
    });

    const sourceExternalId = `contact_${savedSubmission._id.toString()}`;
    const salesAgentResult = await sendContactLeadToSalesAgent({
      source_external_id: sourceExternalId,
      name: data.name,
      email: data.email,
      projectType: data.projectType,
      budget: data.budget,
      message: data.message,
    });

    if (!salesAgentResult.ok) {
      console.warn("Sales Agent contact lead forwarding failed", {
        sourceExternalId,
        status: salesAgentResult.status,
        skipped: salesAgentResult.skipped,
        error: salesAgentResult.error,
      });
    }

    return NextResponse.json(
      { success: true, message: "Message received! We'll get back to you soon." },
      { status: 200 }
    );
  } catch (error) {
    console.error("CONTACT API ERROR:", error);

    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json(
        { success: false, message: "Invalid form data" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong",
        details:
          process.env.NODE_ENV === "development" && error instanceof Error
            ? error.message
            : undefined,
      },
      { status: 500 }
    );
  }
}
