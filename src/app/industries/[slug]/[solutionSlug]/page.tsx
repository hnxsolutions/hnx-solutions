import type { Metadata } from "next";
import { notFound } from "next/navigation";
import IndustryMobileAppPage from "@/components/industries/shared/IndustryMobileAppPage";
import {
  getIndustryMobileAppPage,
  industryMobileAppStaticParams,
} from "@/components/industries/shared/industryMobileAppData";
import IndustryWebsitePage from "@/components/industries/shared/IndustryWebsitePage";
import {
  getIndustryWebsitePage,
  industryWebsiteStaticParams,
} from "@/components/industries/shared/industryWebsiteData";
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
