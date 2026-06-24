import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import FullBusinessSuitePage from "@/components/services/shared/full-business-suite/FullBusinessSuitePage";
import { fullBusinessSuiteData } from "@/components/services/shared/full-business-suite/fullBusinessSuiteData";
import {
  createBreadcrumbJsonLd,
  createMetadata,
  createServiceJsonLd,
} from "@/lib/seo";

const { path, metadata: pageMetadata } = fullBusinessSuiteData;

export const metadata: Metadata = createMetadata({
  title: pageMetadata.title,
  description: pageMetadata.description,
  path,
  keywords: pageMetadata.keywords,
});

export default function ServicesFullBusinessSuiteRoute() {
  return (
    <>
      <JsonLd
        data={[
          createBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Full Business Suite", path },
          ]),
          createServiceJsonLd({
            name: "HNX Full Business Suite",
            description: pageMetadata.description,
            path,
            serviceType: "Full Business Suite for Service Businesses",
          }),
        ]}
      />
      <FullBusinessSuitePage />
    </>
  );
}
