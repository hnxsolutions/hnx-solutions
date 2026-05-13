import { JsonLd } from "@/components/seo/JsonLd";
import Industries from "@/components/sections/industries";
import { createBreadcrumbJsonLd, createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Industry Digital Solutions | Healthcare, Real Estate, Education & More",
  description:
    "HNX Solutions builds industry-specific CRM, web, app, automation, portal, and dashboard systems for healthcare, real estate, education, manufacturing, retail, finance, travel, and service businesses.",
  path: "/industries",
  keywords: [
    "industry digital solutions",
    "healthcare CRM",
    "real estate CRM",
    "education CRM",
    "manufacturing CRM",
    "retail CRM",
    "finance CRM",
    "industry automation",
  ],
});

export default function IndustriesPage() {
  return (
    <>
      <JsonLd
        data={createBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
        ])}
      />
      <Industries />
    </>
  );
}
