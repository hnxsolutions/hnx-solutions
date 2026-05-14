import HealthcareIndustryPage from "@/components/industries/healthcare/HealthcareIndustryPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { createBreadcrumbJsonLd, createMetadata, createServiceJsonLd } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Healthcare Digital Solutions | Website, App, CRM, Portal & Automation",
  description:
    "Explore HNX healthcare solution previews for websites, mobile apps, CRM, patient portals, automation workflows, dashboards, and full digital suites.",
  path: "/industries/healthcare",
  keywords: [
    "healthcare digital solutions",
    "healthcare website",
    "healthcare mobile app",
    "healthcare CRM",
    "patient portal",
    "healthcare automation",
    "healthcare dashboard",
  ],
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          createBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Industries", path: "/industries" },
            { name: "Healthcare", path: "/industries/healthcare" },
          ]),
          createServiceJsonLd({
            name: "Healthcare Digital Solutions",
            description:
              "Healthcare websites, mobile apps, CRM systems, patient portals, workflow automation, dashboards, and connected digital suites.",
            path: "/industries/healthcare",
            serviceType: "Healthcare Digital Solutions",
          }),
        ]}
      />
      <HealthcareIndustryPage />
    </>
  );
}
