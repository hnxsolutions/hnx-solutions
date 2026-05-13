import ServiceBusinessCRMPage from "@/components/industries/ServiceBusinessCRMPage";
import { createIndustryMetadata, IndustrySeoJsonLd } from "@/components/seo/IndustrySeo";

const slug = "service-business-crm";

export const metadata = createIndustryMetadata(slug);

export default function Page() {
  return (
    <>
      <IndustrySeoJsonLd slug={slug} />
      <ServiceBusinessCRMPage />
    </>
  );
}