import "server-only";

export type SalesAgentServiceInterest =
  | "website_development"
  | "saas_development"
  | "mobile_app_development"
  | "custom_crm"
  | "ai_automation"
  | "cloud_devops"
  | "ui_ux_design";

export type ContactLeadForSalesAgent = {
  source_external_id: string;
  name: string;
  email: string;
  projectType: string;
  budget?: string;
  message: string;
};

export type SalesAgentForwardResult =
  | {
      ok: true;
      status: number;
      data: unknown;
    }
  | {
      ok: false;
      status?: number;
      error: string;
      skipped?: boolean;
    };

const SALES_AGENT_TIMEOUT_MS = 12_000;

const SERVICE_INTEREST_BY_PROJECT_TYPE: Partial<
  Record<string, SalesAgentServiceInterest>
> = {
  "Web Application": "website_development",
  "SaaS Platform": "saas_development",
  "Mobile App": "mobile_app_development",
  "Custom CRM Systems": "custom_crm",
  "Industry CRM Systems": "custom_crm",
  "AI & Automation": "ai_automation",
  "Workflow Automation": "ai_automation",
  "Cloud Solutions": "cloud_devops",
  "UI/UX Design": "ui_ux_design",
  "Full-Stack Solution": "website_development",
};

export function mapProjectTypeToServiceInterest(projectType: string) {
  return SERVICE_INTEREST_BY_PROJECT_TYPE[projectType];
}

function createRawConversation(input: ContactLeadForSalesAgent) {
  return [
    `Name: ${input.name}`,
    `Email: ${input.email}`,
    `Project Type: ${input.projectType}`,
    `Budget: ${input.budget || "Not provided"}`,
    `Message: ${input.message}`,
  ].join("\n");
}

async function parseJsonSafely(response: Response): Promise<unknown> {
  const text = await response.text();

  if (!text) {
    return null;
  }

  try {
    return JSON.parse(text) as unknown;
  } catch {
    return text;
  }
}

export async function sendContactLeadToSalesAgent(
  input: ContactLeadForSalesAgent,
): Promise<SalesAgentForwardResult> {
  const ingestionUrl = process.env.SALES_AGENT_INGESTION_URL;
  const ingestApiKey = process.env.SALES_AGENT_INGEST_API_KEY;

  if (!ingestionUrl || !ingestApiKey) {
    return {
      ok: false,
      error: "Sales Agent ingestion config is missing.",
      skipped: true,
    };
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), SALES_AGENT_TIMEOUT_MS);
  const serviceInterest = mapProjectTypeToServiceInterest(input.projectType);

  try {
    const response = await fetch(ingestionUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Sales-Agent-Key": ingestApiKey,
      },
      body: JSON.stringify({
        source_external_id: input.source_external_id,
        name: input.name,
        email: input.email,
        service_interest: serviceInterest,
        budget: input.budget || undefined,
        message: input.message,
        conversation_summary:
          "Contact form submission from HNX Solutions website.",
        raw_conversation: createRawConversation(input),
        industry: "other",
      }),
      signal: controller.signal,
      cache: "no-store",
    });

    const data = await parseJsonSafely(response);

    if (!response.ok) {
      return {
        ok: false,
        status: response.status,
        error: `Sales Agent ingestion failed with status ${response.status}.`,
      };
    }

    return {
      ok: true,
      status: response.status,
      data,
    };
  } catch (error) {
    return {
      ok: false,
      error:
        error instanceof Error
          ? error.message
          : "Sales Agent ingestion request failed.",
    };
  } finally {
    clearTimeout(timeoutId);
  }
}
