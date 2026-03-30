import { NextRequest, NextResponse } from "next/server";
import {
  extractLeadDataFromMessages,
  getNextMissingField,
  buildLeadMessage,
  type ChatMessage,
} from "@/lib/lead-parser";

function getQuestionForField(
  field: string,
  lead: ReturnType<typeof extractLeadDataFromMessages>
) {
  switch (field) {
    case "projectType":
      return {
        message:
          "Sure — what would you like help with: website, mobile app, software, CRM, SaaS, or AI automation?",
        quickReplies: [
          "Website",
          "Mobile App",
          "Software",
          "CRM",
          "SaaS",
          "AI Automation",
        ],
      };

    case "useCase":
      if (lead.projectType === "Mobile App Development") {
        return {
          message:
            "Got it. What is the app for, and who will use it?",
          quickReplies: [
            "Business app",
            "NGO app",
            "Customer app",
            "Internal team app",
          ],
        };
      }

      if (lead.projectType === "Website Development") {
        return {
          message:
            "Got it. What is the website for? For example shop, business, portfolio, school, clinic, or something else.",
          quickReplies: [
            "Shop",
            "Business",
            "Portfolio",
            "School",
            "Clinic",
          ],
        };
      }

      return {
        message: "Got it. Can you briefly tell me what this project is for?",
        quickReplies: [],
      };

    case "budget":
      return {
        message: `Understood. What’s your approximate budget for this ${lead.projectType?.toLowerCase() || "project"}?`,
        quickReplies: ["Under 25k", "25k–50k", "50k–1L", "Need suggestion"],
      };

    case "name":
      return {
        message:
          "Great. Please share your name so our team can contact you.",
        quickReplies: [],
      };

    case "email":
      return {
        message: "Please share your email address.",
        quickReplies: [],
      };

    default:
      return {
        message: "Please share a few details about your requirement.",
        quickReplies: [],
      };
  }
}

function isGeneralInfoQuery(text: string) {
  const lower = text.toLowerCase();

  const infoWords = [
    "services",
    "pricing",
    "price",
    "cost",
    "what do you do",
    "who are you",
    "company",
    "hnx",
  ];

  return infoWords.some((word) => lower.includes(word));
}

async function getOllamaReplyForGeneralQuery(messages: ChatMessage[]) {
  const systemPrompt = `
You are the AI assistant for hnx.services.

Rules:
- Be transparent that you are an AI assistant
- Keep responses short, clear, and friendly
- Answer only about company services and general inquiries
- Do not ask too many follow-up questions
- Do not drift into unrelated services
- If pricing is asked, say pricing depends on scope and requirements
- If the user expresses project interest, guide toward collecting their requirement
`;

  const res = await fetch("http://127.0.0.1:11434/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "llama3.2",
      stream: false,
      messages: [
        { role: "system", content: systemPrompt },
        ...messages,
      ],
    }),
  });

  if (!res.ok) {
    throw new Error("Failed to connect to Ollama");
  }

  const data = await res.json();
  return data?.message?.content || "Sorry, I could not process that.";
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const messages: ChatMessage[] = Array.isArray(body.messages) ? body.messages : [];
    const lastUserMessage =
      [...messages].reverse().find((m) => m.role === "user")?.content || "";

    const lead = extractLeadDataFromMessages(messages);
    const nextField = getNextMissingField(lead);

    if (isGeneralInfoQuery(lastUserMessage) && !lead.projectType) {
      const infoReply = await getOllamaReplyForGeneralQuery(messages);

      return NextResponse.json({
        mode: "text",
        message: infoReply,
        quickReplies: ["Website", "Mobile App", "Software", "CRM"],
        collected: lead,
      });
    }

    if (!nextField) {
      return NextResponse.json({
        mode: "action",
        action: "save_lead",
        message:
          "Thanks — I have the details needed. Please confirm and our team will contact you shortly.",
        data: {
          name: lead.name || "",
          email: lead.email || "",
          phone: lead.phone || "",
          projectType: lead.projectType || "General Inquiry",
          budget: lead.budget || "",
          message: buildLeadMessage(lead),
          chatTranscript: messages,
        },
      });
    }

    const nextQuestion = getQuestionForField(nextField, lead);

    return NextResponse.json({
      mode: "text",
      message: nextQuestion.message,
      quickReplies: nextQuestion.quickReplies,
      collected: lead,
      nextField,
    });
  } catch (error) {
    console.error("Chat route error:", error);

    return NextResponse.json(
      {
        mode: "text",
        message:
          "I’m sorry — I couldn’t process that. You can briefly share your requirement, or leave your name and email and our team will contact you.",
        quickReplies: ["Website", "Mobile App", "Software", "Talk to team"],
      },
      { status: 500 }
    );
  }
}