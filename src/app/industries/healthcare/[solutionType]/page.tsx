import type { ComponentType } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BusinessSuitePage from "@/components/industries/shared/business-suite-shared/BusinessSuitePage";
import { getIndustryBusinessSuitePage } from "@/components/industries/shared/business-suite-shared/businessSuiteData";
import { getIndustryPortalPage } from "@/components/industries/shared/portal-shared/portalData";
import HealthcareFullSuitePreview from "@/components/industries/healthcare/full-suite";
import {
  getHealthcareSolution,
  healthcareSolutionSlugs,
  type HealthcareSolutionSlug,
} from "@/components/industries/healthcare/healthcareData";
import HealthcareMobileAppPreview from "@/components/industries/healthcare/mobile-app";
import HealthcarePatientPortalPreview from "@/components/industries/healthcare/patient-portal";
import HealthcareWebsitePreview from "@/components/industries/healthcare/website";
import IndustryCrmPage from "@/components/industries/shared/crm-shared/IndustryCrmPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { createBreadcrumbJsonLd, createMetadata, createServiceJsonLd } from "@/lib/seo";

type HealthcareSolutionPageProps = {
  params: Promise<{
    solutionType: string;
  }>;
};

function HealthcareCrmPreview() {
  return <IndustryCrmPage industrySlug="healthcare" solutionSlug="crm" />;
}

function HealthcareBusinessSuitePreview() {
  return <BusinessSuitePage industrySlug="healthcare" solutionSlug="business-suite" />;
}

function HealthcarePortalAliasPreview() {
  return <HealthcarePatientPortalPreview />;
}

const previewComponents: Record<HealthcareSolutionSlug, ComponentType> = {
  website: HealthcareWebsitePreview,
  "mobile-app": HealthcareMobileAppPreview,
  crm: HealthcareCrmPreview,
  "patient-portal": HealthcarePatientPortalPreview,
  "full-suite": HealthcareFullSuitePreview,
};

export function generateStaticParams() {
  return [
    ...healthcareSolutionSlugs.map((solutionType) => ({ solutionType })),
    { solutionType: "portal" },
    { solutionType: "business-suite" },
  ];
}

export async function generateMetadata({
  params,
}: HealthcareSolutionPageProps): Promise<Metadata> {
  const { solutionType } = await params;

  if (solutionType === "business-suite") {
    const businessSuitePage = getIndustryBusinessSuitePage("healthcare", "business-suite");

    if (businessSuitePage) {
      return createMetadata({
        title: "Healthcare Full Business Suite | HNX Solutions",
        description:
          "Build a complete healthcare digital system with website, mobile app, CRM, patient portal, dashboards, integrations, and AI automation.",
        path: businessSuitePage.primaryRoute,
        keywords: businessSuitePage.keywords,
      });
    }
  }

  if (solutionType === "portal") {
    const portalPage = getIndustryPortalPage("healthcare", "portal");

    if (portalPage) {
      return createMetadata({
        title: "Healthcare Patient Portal | HNX Solutions",
        description:
          "Build a secure patient portal for reports, appointments, prescriptions, payments, requests, notifications, and support.",
        path: "/industries/healthcare/portal",
        keywords: portalPage.keywords,
      });
    }
  }

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

  if (solutionType === "business-suite") {
    const businessSuitePage = getIndustryBusinessSuitePage("healthcare", "business-suite");

    if (!businessSuitePage) {
      notFound();
    }

    return (
      <>
        <JsonLd
          data={[
            createBreadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Industries", path: "/industries" },
              { name: "Healthcare", path: "/industries/healthcare" },
              { name: "Full Business Suite", path: businessSuitePage.primaryRoute },
            ]),
            createServiceJsonLd({
              name: "Healthcare Full Business Suite",
              description: businessSuitePage.hero.description,
              path: businessSuitePage.primaryRoute,
              serviceType: businessSuitePage.serviceType,
            }),
          ]}
        />
        <HealthcareBusinessSuitePreview />
      </>
    );
  }

  if (solutionType === "portal") {
    const portalPage = getIndustryPortalPage("healthcare", "portal");

    if (!portalPage) {
      notFound();
    }

    return (
      <>
        <JsonLd
          data={[
            createBreadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Industries", path: "/industries" },
              { name: "Healthcare", path: "/industries/healthcare" },
              { name: "Patient Portal", path: "/industries/healthcare/portal" },
            ]),
            createServiceJsonLd({
              name: "Healthcare Patient Portal",
              description: portalPage.hero.description,
              path: "/industries/healthcare/portal",
              serviceType: portalPage.serviceType,
            }),
          ]}
        />
        <HealthcarePortalAliasPreview />
      </>
    );
  }

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
