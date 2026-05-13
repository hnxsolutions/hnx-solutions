import ManufacturingCRMPage from "@/components/industries/ManufacturingCRMPage";
import { createIndustryMetadata, IndustrySeoJsonLd } from "@/components/seo/IndustrySeo";

const slug = "manufacturing-crm";

export const metadata = createIndustryMetadata(slug);

export default function Page() {
  return (
    <>
      <IndustrySeoJsonLd slug={slug} />
      <ManufacturingCRMPage />
    </>
  );
}