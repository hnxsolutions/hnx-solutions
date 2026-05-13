import type { Metadata } from "next";
import type { ReactNode } from "react";
import { JsonLd } from "@/components/seo/JsonLd";
import { getCrmSolutionSeo } from "@/data/solutions/crmSolutionSeo";
import { createBreadcrumbJsonLd, createMetadata, createServiceJsonLd } from "@/lib/seo";

export function createCrmSolutionMetadata(slug: string): Metadata {
  const solution = getCrmSolutionSeo(slug);

  return createMetadata({
    title: solution.title,
    description: solution.description,
    path: solution.href,
    keywords: solution.keywords,
  });
}

export function CrmSolutionSeoLayout({
  slug,
  children,
}: {
  slug: string;
  children: ReactNode;
}) {
  const solution = getCrmSolutionSeo(slug);

  return (
    <>
      <JsonLd
        data={[
          createBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Solutions", path: "/solutions" },
            { name: "CRM", path: "/solutions/crm/business-os" },
            { name: solution.label, path: solution.href },
          ]),
          createServiceJsonLd({
            name: solution.label,
            description: solution.description,
            path: solution.href,
            serviceType: "CRM Solution",
          }),
        ]}
      />
      {children}
    </>
  );
}
