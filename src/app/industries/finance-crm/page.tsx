import IndustryCrmPage from "@/components/industries/shared/crm-shared/IndustryCrmPage";
import { createIndustryMetadata, IndustrySeoJsonLd } from "@/components/seo/IndustrySeo";

const slug = "finance-crm";

export const metadata = createIndustryMetadata(slug);

export default function Page() {
  return (
    <>
      <IndustrySeoJsonLd slug={slug} />
      <IndustryCrmPage industrySlug="finance" />
    </>
  );
}
