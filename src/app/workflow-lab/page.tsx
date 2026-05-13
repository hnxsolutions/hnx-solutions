import WorkflowLabPreview from "@/components/sections/WorkflowLabPreview";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "HNX Workflow Lab | CRM Workflow Add-ons & Automation Marketplace",
  description:
    "Explore ready-made workflow add-ons for HNX CRM systems including lead assignment, reminders, WhatsApp follow-ups, invoice alerts, and AI automation.",
  path: "/workflow-lab",
  keywords: ["workflow automation", "CRM workflow add-ons", "lead assignment automation", "WhatsApp follow-up automation"],
});

export default function WorkflowLabPage() {
  return <WorkflowLabPreview />;
}
