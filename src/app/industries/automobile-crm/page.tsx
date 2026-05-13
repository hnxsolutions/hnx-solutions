import AutomobileCRMPage from "@/components/industries/AutomobileCRMPage";
import { createIndustryMetadata, IndustrySeoJsonLd } from "@/components/seo/IndustrySeo";

const slug = "automobile-crm";

export const metadata = createIndustryMetadata(slug);

export default function Page() {
  return (
    <>
      <IndustrySeoJsonLd slug={slug} />
      <AutomobileCRMPage />
    </>
  );
}