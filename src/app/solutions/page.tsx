import { redirect } from "next/navigation";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Business Solutions by HNX | CRM, SaaS, AI Automation & Growth Systems",
  description:
    "Discover HNX business solutions for CRM, Web & SaaS, mobile apps, AI automation, cloud DevOps, and design growth systems.",
  path: "/solutions",
  keywords: [
    "business solutions",
    "CRM solutions",
    "SaaS solutions",
    "AI automation solutions",
    "mobile app solutions",
    "cloud DevOps solutions",
    "design growth systems",
  ],
});

export default function SolutionsIndexPage() {
  redirect("/solutions/crm/business-os");
}
