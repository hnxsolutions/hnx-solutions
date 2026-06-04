import IndustryCrmPage from "@/components/industries/shared/crm-shared/IndustryCrmPage";
import { createIndustryMetadata, IndustrySeoJsonLd } from "@/components/seo/IndustrySeo";

const slug = "real-estate-crm";

export const metadata = createIndustryMetadata(slug);

export default function Page() {
  return (
    <>
      <IndustrySeoJsonLd slug={slug} />
      <IndustryCrmPage industrySlug="real-estate" />
    </>
  );
}
