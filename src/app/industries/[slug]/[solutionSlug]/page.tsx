import type { Metadata } from "next";
import { notFound } from "next/navigation";
import IndustryCrmPage from "@/components/industries/shared/crm-shared/IndustryCrmPage";
import {
  getIndustryCrmPage,
  industryCrmStaticParams,
} from "@/components/industries/shared/crm-shared/industryCrmData";
import IndustryMobileAppPage from "@/components/industries/shared/mobile-app-shared/IndustryMobileAppPage";
import {
  getIndustryMobileAppPage,
  industryMobileAppStaticParams,
} from "@/components/industries/shared/mobile-app-shared/industryMobileAppData";
import IndustryPortalPage from "@/components/industries/shared/portal-shared/IndustryPortalPage";
import {
  getIndustryPortalPage,
  industryPortalStaticParams,
} from "@/components/industries/shared/portal-shared/industryPortalData";
import IndustryWebsitePage from "@/components/industries/shared/website-shared/IndustryWebsitePage";
import {
  getIndustryWebsitePage,
  industryWebsiteStaticParams,
} from "@/components/industries/shared/website-shared/industryWebsiteData";
import { JsonLd } from "@/components/seo/JsonLd";
import { createBreadcrumbJsonLd, createMetadata, createServiceJsonLd } from "@/lib/seo";

type IndustrySolutionRoutePageProps = {
  params: Promise<{
    slug: string;
    solutionSlug: string;
  }>;
};

export function generateStaticParams() {
  return [
    ...industryWebsiteStaticParams.map(({ industrySlug, websiteSlug }) => ({
      slug: industrySlug,
      solutionSlug: websiteSlug,
    })),
    ...industryMobileAppStaticParams.map(({ industrySlug, solutionSlug }) => ({
      slug: industrySlug,
      solutionSlug,
    })),
    ...industryPortalStaticParams.map(({ industrySlug, solutionSlug }) => ({
      slug: industrySlug,
      solutionSlug,
    })),
    ...industryCrmStaticParams.map(({ industrySlug, solutionSlug }) => ({
      slug: industrySlug,
      solutionSlug,
    })),
  ];
}

export async function generateMetadata({
  params,
}: IndustrySolutionRoutePageProps): Promise<Metadata> {
  const { slug, solutionSlug } = await params;
  const websitePage = getIndustryWebsitePage(slug, solutionSlug);

  if (websitePage) {
    return createMetadata({
      title: `${websitePage.eyebrow} Development | HNX Solutions`,
      description: websitePage.description,
      path: websitePage.primaryRoute,
      image: websitePage.heroImage,
      keywords: websitePage.keywords,
    });
  }

  const mobileAppPage = getIndustryMobileAppPage(slug, solutionSlug);

  if (!mobileAppPage) {
    const portalPage = getIndustryPortalPage(slug, solutionSlug);

    if (portalPage) {
      return createMetadata({
        title: `${portalPage.industryName} Portal Development Services | HNX Solutions`,
        description: `Build a secure ${portalPage.industryName.toLowerCase()} portal for role-based access, requests, documents, approvals, status tracking and admin visibility.`,
        path: portalPage.primaryRoute,
        image: portalPage.heroImage,
        keywords: portalPage.keywords,
      });
    }

    const crmPage = getIndustryCrmPage(slug, solutionSlug);

    if (crmPage) {
      return createMetadata({
        title: `${crmPage.industryName} CRM Development Services | HNX Solutions`,
        description: crmPage.description,
        path: crmPage.primaryRoute,
        keywords: crmPage.keywords,
      });
    }

    return createMetadata({
      title: "Industry Solution Not Found | HNX Solutions",
      description: "The requested industry solution page could not be found.",
      path: `/industries/${slug}/${solutionSlug}`,
    });
  }

  return createMetadata({
    title: `${mobileAppPage.eyebrow} Development | HNX Solutions`,
    description: mobileAppPage.description,
    path: mobileAppPage.primaryRoute,
    image: mobileAppPage.heroImage,
    keywords: mobileAppPage.keywords,
  });
}

export default async function IndustrySolutionRoutePage({
  params,
}: IndustrySolutionRoutePageProps) {
  const { slug, solutionSlug } = await params;
  const websitePage = getIndustryWebsitePage(slug, solutionSlug);

  if (websitePage) {
    return (
      <>
        <JsonLd
          data={[
            createBreadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Industries", path: "/industries" },
              { name: websitePage.industryName, path: `/industries/${websitePage.industrySlug}` },
              { name: "Website", path: websitePage.primaryRoute },
            ]),
            createServiceJsonLd({
              name: `${websitePage.eyebrow} Development`,
              description: websitePage.description,
              path: websitePage.primaryRoute,
              serviceType: websitePage.serviceType,
            }),
          ]}
        />
        <IndustryWebsitePage industrySlug={slug} websiteSlug={solutionSlug} />
      </>
    );
  }

  const mobileAppPage = getIndustryMobileAppPage(slug, solutionSlug);

  if (!mobileAppPage) {
    const portalPage = getIndustryPortalPage(slug, solutionSlug);

    if (portalPage) {
      return (
        <>
          <JsonLd
            data={[
              createBreadcrumbJsonLd([
                { name: "Home", path: "/" },
                { name: "Industries", path: "/industries" },
                { name: portalPage.industryName, path: `/industries/${portalPage.industrySlug}` },
                { name: "Portal", path: portalPage.primaryRoute },
              ]),
              createServiceJsonLd({
                name: `${portalPage.eyebrow} Development`,
                description: portalPage.description,
                path: portalPage.primaryRoute,
                serviceType: portalPage.serviceType,
              }),
            ]}
          />
          <IndustryPortalPage industrySlug={slug} solutionSlug={solutionSlug} />
        </>
      );
    }

    const crmPage = getIndustryCrmPage(slug, solutionSlug);

    if (crmPage) {
      return (
        <>
          <JsonLd
            data={[
              createBreadcrumbJsonLd([
                { name: "Home", path: "/" },
                { name: "Industries", path: "/industries" },
                { name: crmPage.industryName, path: `/industries/${crmPage.industrySlug}` },
                { name: "CRM", path: crmPage.primaryRoute },
              ]),
              createServiceJsonLd({
                name: `${crmPage.industryName} CRM Development`,
                description: crmPage.description,
                path: crmPage.primaryRoute,
                serviceType: crmPage.serviceType,
              }),
            ]}
          />
          <IndustryCrmPage industrySlug={slug} solutionSlug={solutionSlug} />
        </>
      );
    }

    notFound();
  }

  return (
    <>
      <JsonLd
        data={[
          createBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Industries", path: "/industries" },
            { name: mobileAppPage.industryName, path: `/industries/${mobileAppPage.industrySlug}` },
            { name: "Mobile App", path: mobileAppPage.primaryRoute },
          ]),
          createServiceJsonLd({
            name: `${mobileAppPage.eyebrow} Development`,
            description: mobileAppPage.description,
            path: mobileAppPage.primaryRoute,
            serviceType: mobileAppPage.serviceType,
          }),
        ]}
      />
      <IndustryMobileAppPage industrySlug={slug} solutionSlug={solutionSlug} />
    </>
  );
}
