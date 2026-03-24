import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/validators";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = contactSchema.parse(body);

    // TODO: Replace with your actual logic — save to DB, send email, etc.
    console.log("Contact form submission:", data);

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
