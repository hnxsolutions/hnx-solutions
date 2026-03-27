import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/validators";
import { connectToDatabase } from "@/lib/mongodb";
import { ContactSubmission } from "@/models/ContactSubmission";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = contactSchema.parse(body);

    await connectToDatabase();

    await ContactSubmission.create({
      ...data,
      ipAddress: req.headers.get("x-forwarded-for")?.split(",")[0]?.trim(),
      userAgent: req.headers.get("user-agent") ?? undefined,
    });

    return NextResponse.json(
      { success: true, message: "Message received! We'll get back to you soon." },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json(
        { success: false, message: "Invalid form data", errors: (error as never) },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}
