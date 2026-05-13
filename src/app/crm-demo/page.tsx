import { JsonLd } from "@/components/seo/JsonLd";
import { DemoCRMPage } from "@/components/crm-demo/DemoCRMPage";
import { EnhancedDemoCRMPage } from "@/components/crm-demo/enhanced/EnhancedDemoCRMPage";
import { absoluteUrl, createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "HNX CRM Demo - Try Your Industry CRM Live | Custom CRM India",
  description:
    "Experience a live custom CRM demo for your industry. Real Estate, Education, Healthcare, Agency, IT/SaaS and more. See how HNX builds CRMs around your workflow, team, and automation needs.",
  path: "/crm-demo",
  image: "/images/heroimage.png",
  keywords: ["CRM demo", "custom CRM India", "industry CRM demo", "live CRM dashboard"],
});

export default function DemoCrmRoute() {
  const enhancedDemo = process.env.NEXT_PUBLIC_ENHANCED_DEMO !== "false";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "HNX CRM Demo",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: absoluteUrl("/crm-demo"),
    description:
      "Interactive custom CRM demo for Real Estate, Education, Healthcare, Agency, IT/SaaS, Pharma, Events, and Local Services teams.",
    audience: {
      "@type": "Audience",
      audienceType: "SMBs and entrepreneurs in India",
    },
  };

  return (
    <>
      <JsonLd data={structuredData} />
      {enhancedDemo ? <EnhancedDemoCRMPage /> : <DemoCRMPage />}
    </>
  );
}
