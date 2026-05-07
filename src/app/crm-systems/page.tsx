import type { Metadata } from "next";
import { LightLandingPage } from "@/components/sections/LightLandingPage";

export const metadata: Metadata = {
  title: "HNX CRM Systems | Custom CRM Development & Workflow Automation",
  description:
    "HNX builds custom CRM systems with dashboards, AI insights, workflow automation, secure roles, and industry-specific modules for growing businesses.",
};

export default function CRMSystemsPage() {
  return <LightLandingPage />;
}
