import type { Metadata } from "next";
import { notFound } from "next/navigation";
import IndustryWebsitePage from "@/components/industries/shared/IndustryWebsitePage";
import {
  getIndustryWebsitePage,
  industryWebsiteStaticParams,
} from "@/components/industries/shared/industryWebsiteData";
import { JsonLd } from "@/components/seo/JsonLd";
import { createBreadcrumbJsonLd, createMetadata, createServiceJsonLd } from "@/lib/seo";

type IndustryWebsiteRoutePageProps = {
  params: Promise<{
    slug: string;
    websiteSlug: string;
  }>;
};

export function generateStaticParams() {
  return industryWebsiteStaticParams.map(({ industrySlug, websiteSlug }) => ({
    slug: industrySlug,
    websiteSlug,
  }));
}

export async function generateMetadata({
  params,
}: IndustryWebsiteRoutePageProps): Promise<Metadata> {
  const { slug, websiteSlug } = await params;
  const page = getIndustryWebsitePage(slug, websiteSlug);

  if (!page) {
    return createMetadata({
      title: "Industry Website Not Found | HNX Solutions",
      description: "The requested industry website page could not be found.",
      path: `/industries/${slug}/${websiteSlug}`,
    });
  }

  return createMetadata({
    title: `${page.eyebrow} Development | HNX Solutions`,
    description: page.description,
    path: page.primaryRoute,
    image: page.heroImage,
    keywords: page.keywords,
  });
}

export default async function IndustryWebsiteRoutePage({
  params,
}: IndustryWebsiteRoutePageProps) {
  const { slug, websiteSlug } = await params;
  const page = getIndustryWebsitePage(slug, websiteSlug);

  if (!page) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={[
          createBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Industries", path: "/industries" },
            { name: page.industryName, path: `/industries/${page.industrySlug}` },
            { name: "Website", path: page.primaryRoute },
          ]),
          createServiceJsonLd({
            name: `${page.eyebrow} Development`,
            description: page.description,
            path: page.primaryRoute,
            serviceType: page.serviceType,
          }),
        ]}
      />
      <IndustryWebsitePage industrySlug={slug} websiteSlug={websiteSlug} />
    </>
  );
}
