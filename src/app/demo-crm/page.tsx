import { redirect } from "next/navigation";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Demo CRM by HNX Solutions | Live Industry CRM Preview",
  description:
    "Open the HNX live CRM demo to explore industry-specific dashboards, workflows, automations, reports, and business CRM systems.",
  path: "/demo-crm",
  keywords: ["demo CRM", "live CRM preview", "industry CRM demo", "HNX CRM"],
});

export default function DemoCrmRedirectPage() {
  redirect("/crm-demo");
}
