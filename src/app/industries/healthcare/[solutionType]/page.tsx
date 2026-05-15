import type { ComponentType } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import HealthcareCrmPreview from "@/components/industries/healthcare/crm";
import HealthcareFullSuitePreview from "@/components/industries/healthcare/full-suite";
import {
  getHealthcareSolution,
  healthcareSolutionSlugs,
  type HealthcareSolutionSlug,
} from "@/components/industries/healthcare/healthcareData";
import HealthcareMobileAppPreview from "@/components/industries/healthcare/mobile-app";
import HealthcarePatientPortalPreview from "@/components/industries/healthcare/patient-portal";
import HealthcareWebsitePreview from "@/components/industries/healthcare/website";
import { JsonLd } from "@/components/seo/JsonLd";
import { createBreadcrumbJsonLd, createMetadata, createServiceJsonLd } from "@/lib/seo";

type HealthcareSolutionPageProps = {
  params: Promise<{
    solutionType: string;
  }>;
};

const previewComponents: Record<HealthcareSolutionSlug, ComponentType> = {
  website: HealthcareWebsitePreview,
  "mobile-app": HealthcareMobileAppPreview,
  crm: HealthcareCrmPreview,
  "patient-portal": HealthcarePatientPortalPreview,
  "full-suite": HealthcareFullSuitePreview,
};

export function generateStaticParams() {
  return healthcareSolutionSlugs.map((solutionType) => ({ solutionType }));
}

export async function generateMetadata({
  params,
}: HealthcareSolutionPageProps): Promise<Metadata> {
  const { solutionType } = await params;
  const solution = getHealthcareSolution(solutionType);

  if (!solution) {
    return createMetadata({
      title: "Healthcare Solution Not Found | HNX Solutions",
      description: "The requested healthcare solution preview could not be found.",
      path: `/industries/healthcare/${solutionType}`,
    });
  }

  return createMetadata({
    title: `${solution.title} | HNX Solutions`,
    description: solution.description,
    path: solution.href,
    keywords: [
      solution.title,
      "healthcare digital solution",
      "healthcare software",
      "HNX Solutions",
    ],
  });
}

export default async function HealthcareSolutionPage({
  params,
}: HealthcareSolutionPageProps) {
  const { solutionType } = await params;
  const solution = getHealthcareSolution(solutionType);

  if (!solution) {
    notFound();
  }

  const Preview = previewComponents[solution.slug];

  return (
    <>
      <JsonLd
        data={[
          createBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Industries", path: "/industries" },
            { name: "Healthcare", path: "/industries/healthcare" },
            { name: solution.selectorTitle, path: solution.href },
          ]),
          createServiceJsonLd({
            name: solution.title,
            description: solution.description,
            path: solution.href,
            serviceType: "Healthcare Digital Solution",
          }),
        ]}
      />
      <Preview />
    </>
  );
}
