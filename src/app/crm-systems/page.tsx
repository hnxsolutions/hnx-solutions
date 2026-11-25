import { LightLandingPage } from "@/components/sections/LightLandingPage";
import { createMetadata } from "@/lib/seo";

// Same title and description as before; routed through createMetadata so the
// page gets the self-canonical, Open Graph and Twitter tags every other page
// here has. A bare Metadata object sets none of those.
export const metadata = createMetadata({
  title: "HNX CRM Systems | Custom CRM Development & Workflow Automation",
  description:
    "HNX builds custom CRM systems with dashboards, AI insights, workflow automation, secure roles, and industry-specific modules for growing businesses.",
  path: "/crm-systems",
});

export default function CRMSystemsPage() {
  return <LightLandingPage />;
}
