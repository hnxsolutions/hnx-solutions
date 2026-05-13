import type { Metadata } from "next";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://hnxsolutions.com";

export const SITE_NAME = "HNX Solutions";

export const DEFAULT_TITLE =
  "HNX Solutions | Custom CRM, AI Automation & Digital Solutions";

export const DEFAULT_DESCRIPTION =
  "HNX Solutions builds custom CRM systems, AI automation workflows, SaaS platforms, websites, mobile apps, cloud infrastructure, workflow automation, and industry-specific business systems.";

// Fallback until a dedicated 1200x630 /og-image.png is added.
export const DEFAULT_OG_IMAGE = "/HNXlogo.png";

export const defaultKeywords = [
  "HNX Solutions",
  "HNX Technologies",
  "custom CRM development",
  "AI automation",
  "SaaS development",
  "web development",
  "mobile app development",
  "cloud infrastructure",
  "workflow automation",
  "industry CRM systems",
  "UI UX design",
  "SEO growth",
  "digital solutions company India",
];

export const openGraphDefaults = {
  siteName: SITE_NAME,
  locale: "en_IN",
  images: [
    {
      url: DEFAULT_OG_IMAGE,
      width: 1200,
      height: 630,
      alt: `${SITE_NAME} digital solutions`,
    },
  ],
};

type MetadataType = "website" | "article";

type CreateMetadataInput = {
  title?: string;
  description?: string;
  path?: string;
  keywords?: readonly string[];
  image?: string;
  type?: MetadataType;
};

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalizedPath}`;
}

export function createMetadata({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  keywords = [],
  image = DEFAULT_OG_IMAGE,
  type = "website",
}: CreateMetadataInput = {}): Metadata {
  const canonicalPath = path.startsWith("/") ? path : `/${path}`;
  const url = absoluteUrl(canonicalPath);
  const mergedKeywords = Array.from(new Set([...defaultKeywords, ...keywords]));

  return {
    title: {
      absolute: title,
    },
    description,
    keywords: mergedKeywords,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      ...openGraphDefaults,
      title,
      description,
      url,
      type,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  alternateName: "HNX Technologies",
  url: SITE_URL,
  logo: absoluteUrl("/HNXlogo.png"),
  description: "IT Services & Digital Solutions company",
  areaServed: "India",
  serviceType: [
    "Custom CRM Development",
    "AI Automation",
    "SaaS Development",
    "Web Development",
    "Mobile App Development",
    "Cloud Infrastructure",
    "Workflow Automation",
    "UI/UX Design",
    "SEO Growth",
  ],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  description: DEFAULT_DESCRIPTION,
  publisher: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: absoluteUrl("/HNXlogo.png"),
  },
};

export const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_NAME,
  alternateName: "HNX Technologies",
  url: SITE_URL,
  logo: absoluteUrl("/HNXlogo.png"),
  image: absoluteUrl(DEFAULT_OG_IMAGE),
  description: DEFAULT_DESCRIPTION,
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  provider: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
  },
  serviceType: organizationJsonLd.serviceType,
};

export function createBreadcrumbJsonLd(
  items: Array<{ name: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function createServiceJsonLd({
  name,
  description,
  path,
  serviceType,
}: {
  name: string;
  description: string;
  path: string;
  serviceType?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType: serviceType ?? name,
    url: absoluteUrl(path),
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: absoluteUrl("/HNXlogo.png"),
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
  };
}
