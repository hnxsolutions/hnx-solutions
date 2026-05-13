import InsuranceCRMPage from "@/components/industries/InsuranceCRMPage";
import { createIndustryMetadata, IndustrySeoJsonLd } from "@/components/seo/IndustrySeo";

const slug = "insurance-crm";

export const metadata = createIndustryMetadata(slug);

export default function Page() {
  return (
    <>
      <IndustrySeoJsonLd slug={slug} />
      <InsuranceCRMPage />
    </>
  );
}