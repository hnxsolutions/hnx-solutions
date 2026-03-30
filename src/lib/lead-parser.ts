export type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export type LeadData = {
  projectType?: string;
  useCase?: string;
  budget?: string;
  name?: string;
  email?: string;
  phone?: string;
};

function extractEmail(text: string): string | undefined {
  const match = text.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i);
  return match?.[0];
}

function extractPhone(text: string): string | undefined {
  const match = text.match(/(\+?\d[\d\s\-()]{7,}\d)/);
  return match?.[0]?.trim();
}

function extractName(text: string): string | undefined {
  const email = extractEmail(text);
  let clean = text;

  if (email) {
    clean = clean.replace(email, "").trim();
  }

  clean = clean
    .replace(/my name is/gi, "")
    .replace(/i am/gi, "")
    .replace(/i'm/gi, "")
    .replace(/and my email is/gi, "")
    .replace(/email is/gi, "")
    .replace(/mail is/gi, "")
    .replace(/[.,]/g, " ")
    .trim();

  const words = clean.split(/\s+/).filter(Boolean);

  if (words.length >= 1 && words.length <= 4) {
    const possibleName = words.join(" ").trim();
    if (
      possibleName &&
      !possibleName.toLowerCase().includes("budget") &&
      !possibleName.toLowerCase().includes("website") &&
      !possibleName.toLowerCase().includes("app")
    ) {
      return possibleName;
    }
  }

  return undefined;
}

function extractBudget(text: string): string | undefined {
  const lower = text.toLowerCase();

  const budgetPatterns = [
    /\b\d+\s?k\b/i,
    /\b\d+\s?(rs|inr|rupees)\b/i,
    /\bunder\s+\d+\s?k\b/i,
    /\baround\s+\d+\s?k\b/i,
    /\bbetween\s+\d+\s?k\s+and\s+\d+\s?k\b/i,
  ];

  if (budgetPatterns.some((pattern) => pattern.test(text)) || lower.includes("budget")) {
    return text.trim();
  }

  return undefined;
}

function extractProjectType(text: string): string | undefined {
  const lower = text.toLowerCase();

  if (lower.includes("mobile app") || lower.includes("android app") || lower.includes("ios app") || /\bapp\b/.test(lower)) {
    return "Mobile App Development";
  }

  if (lower.includes("ecommerce website") || lower.includes("e-commerce website")) {
    return "Ecommerce Website Development";
  }

  if (lower.includes("website") || lower.includes("web site") || lower.includes("web app")) {
    return "Website Development";
  }

  if (lower.includes("software")) {
    return "Software Development";
  }

  if (lower.includes("crm")) {
    return "CRM Development";
  }

  if (lower.includes("saas")) {
    return "SaaS Development";
  }

  if (lower.includes("ai automation") || lower.includes("automation")) {
    return "AI Automation";
  }

  return undefined;
}

function extractUseCase(text: string): string | undefined {
  const lower = text.toLowerCase();

  const keywords = [
    "shop",
    "store",
    "clothing",
    "ngo",
    "restaurant",
    "school",
    "clinic",
    "hospital",
    "real estate",
    "salon",
    "gym",
    "agency",
    "business",
  ];

  if (keywords.some((k) => lower.includes(k))) {
    return text.trim();
  }

  return undefined;
}

export function extractLeadDataFromMessages(messages: ChatMessage[]): LeadData {
  const lead: LeadData = {};

  for (const msg of messages) {
    if (msg.role !== "user") continue;

    const text = msg.content.trim();

    lead.projectType ||= extractProjectType(text);
    lead.useCase ||= extractUseCase(text);
    lead.budget ||= extractBudget(text);
    lead.email ||= extractEmail(text);
    lead.phone ||= extractPhone(text);
    lead.name ||= extractName(text);
  }

  return lead;
}

export function getNextMissingField(lead: LeadData): keyof LeadData | null {
  const orderedFields: (keyof LeadData)[] = [
    "projectType",
    "useCase",
    "budget",
    "name",
    "email",
  ];

  for (const field of orderedFields) {
    if (!lead[field]) return field;
  }

  return null;
}

export function buildLeadMessage(lead: LeadData) {
  return [
    lead.useCase ? `Use Case: ${lead.useCase}` : "",
    lead.budget ? `Budget: ${lead.budget}` : "",
    lead.phone ? `Phone: ${lead.phone}` : "",
  ]
    .filter(Boolean)
    .join("\n");
}