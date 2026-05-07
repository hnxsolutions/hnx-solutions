import type { Metadata } from "next";
import { DemoCRMPage } from "@/components/crm-demo/DemoCRMPage";
import { EnhancedDemoCRMPage } from "@/components/crm-demo/enhanced/EnhancedDemoCRMPage";

export const metadata: Metadata = {
  title: "HNX CRM Demo - Try Your Industry CRM Live | Custom CRM India",
  description:
    "Experience a live custom CRM demo for your industry. Real Estate, Education, Healthcare, Agency, IT/SaaS and more. See how HNX builds CRMs around your workflow, team, and automation needs.",
  openGraph: {
    title: "HNX CRM Demo - Try Your Industry CRM Live",
    description:
      "Choose your industry, set your goal, and explore a live CRM dashboard built around your workflow.",
    images: ["/images/heroimage.png"],
  },
};

export default function DemoCrmRoute() {
  const enhancedDemo = process.env.NEXT_PUBLIC_ENHANCED_DEMO !== "false";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "HNX CRM Demo",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: "https://hnx.services/crm-demo",
    description:
      "Interactive custom CRM demo for Real Estate, Education, Healthcare, Agency, IT/SaaS, Pharma, Events, and Local Services teams.",
    audience: {
      "@type": "Audience",
      audienceType: "SMBs and entrepreneurs in India",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {enhancedDemo ? <EnhancedDemoCRMPage /> : <DemoCRMPage />}
    </>
  );
}
