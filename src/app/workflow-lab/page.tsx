import type { Metadata } from "next";
import WorkflowLabPreview from "@/components/sections/WorkflowLabPreview";

export const metadata: Metadata = {
  title: "HNX Workflow Lab | CRM Workflow Add-ons & Automation Marketplace",
  description:
    "Explore ready-made workflow add-ons for HNX CRM systems including lead assignment, reminders, WhatsApp follow-ups, invoice alerts, and AI automation.",
};

export default function WorkflowLabPage() {
  return <WorkflowLabPreview />;
}
