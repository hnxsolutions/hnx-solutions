import { PricingDetailPage } from "@/components/pages/LightDetailPages";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Pricing | HNX",
  description: "Compare HNX packages for Core CRM, Growth CRM, and AI CRM Suite.",
  path: "/pricing",
  keywords: ["HNX pricing", "CRM pricing", "custom CRM packages", "AI CRM pricing"],
});

export default function PricingPage() {
  return <PricingDetailPage />;
}
