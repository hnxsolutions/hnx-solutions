import type { Metadata } from "next";
import { PricingDetailPage } from "@/components/pages/LightDetailPages";

export const metadata: Metadata = {
  title: "Pricing | HNX",
  description: "Compare HNX packages for Core CRM, Growth CRM, and AI CRM Suite.",
};

export default function PricingPage() {
  return <PricingDetailPage />;
}
