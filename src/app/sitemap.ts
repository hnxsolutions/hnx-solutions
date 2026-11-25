import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { services } from "@/data/services";
import { webSaasSolutions } from "@/data/solutions/webSaasSolutions";
import { mobileAppSolutions } from "@/data/solutions/mobileAppSolutions";
import { aiAutomationSolutions } from "@/data/solutions/aiAutomationSolutions";
import { cloudDevopsSolutions } from "@/data/solutions/cloudDevopsSolutions";
import { designGrowthSolutions } from "@/data/solutions/designGrowthSolutions";
import { industryBusinessSuitePages } from "@/components/industries/shared/business-suite-shared/businessSuiteData";
import { industryCrmPages } from "@/components/industries/shared/crm-shared/industryCrmData";
import { industryPortalPages } from "@/components/industries/shared/portal-shared/portalData";
import { industryMobileAppPages } from "@/components/industries/shared/mobile-app-shared/industryMobileAppData";
import { healthcareSolutionSlugs } from "@/components/industries/healthcare/healthcareData";
import { solutionSeoEntries } from "@/data/solutions/solutionSeo";

type ChangeFrequency = NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;

const now = new Date();

const crmSolutionPaths = [
  "/solutions/crm/business-os",
  "/solutions/crm/crmcore",
  "/solutions/crm/admin-control-room",
  "/solutions/crm/workflow-engine",
  "/solutions/crm/ai-intelligence",
  "/solutions/crm/dashboards-reports",
];

const industryPaths = [
  "/industries/healthcare-crm",
  "/industries/real-estate-crm",
  "/industries/education-crm",
  "/industries/manufacturing-crm",
  "/industries/retail-crm",
  "/industries/finance-crm",
  "/industries/insurance-crm",
  "/industries/travel-crm",
  "/industries/automobile-crm",
  "/industries/service-business-crm",
];

const priorityByServiceId: Record<string, number> = {
  "custom-crm-systems": 0.96,
  "ai-automation": 0.94,
  "saas-development": 0.93,
  "web-development": 0.92,
  "mobile-app-development": 0.92,
};

function entry(
  path: string,
  priority: number,
  changeFrequency: ChangeFrequency = "weekly",
): MetadataRoute.Sitemap[number] {
  return {
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = [
    entry("/", 1, "weekly"),
    entry("/services", 0.96, "weekly"),
    entry("/services/full-business-suite", 0.97, "weekly"),
    entry("/industries", 0.94, "weekly"),
    // "/solutions" and "/demo-crm" are not listed: both return 200 but carry a
    // canonical pointing somewhere else - "/solutions" to
    // "/solutions/crm/business-os" and "/demo-crm" to "/crm-demo" - so Google
    // would drop them from the index anyway. Their canonical destinations are
    // both listed, "/crm-demo" immediately below.
    entry("/crm-demo", 0.9, "weekly"),
    entry("/roi-calculator", 0.86, "monthly"),
    entry("/workflow-lab", 0.86, "monthly"),
    entry("/contact", 0.86, "monthly"),
    entry("/crm-systems", 0.9, "monthly"),
    entry("/blog", 0.8, "weekly"),
    entry("/portfolio", 0.74, "monthly"),
    entry("/about", 0.72, "monthly"),
  ];

  const serviceEntries = services.map((service) =>
    entry(`/services/${service.id}`, priorityByServiceId[service.id] ?? 0.82, "monthly"),
  );

  const solutionEntries = [
    ...crmSolutionPaths.map((path) => entry(path, 0.9, "monthly")),
    ...webSaasSolutions.map((solution) => entry(solution.href, 0.88, "monthly")),
    ...mobileAppSolutions.map((solution) => entry(solution.href, 0.86, "monthly")),
    ...aiAutomationSolutions.map((solution) => entry(solution.href, 0.88, "monthly")),
    ...cloudDevopsSolutions.map((solution) => entry(solution.href, 0.84, "monthly")),
    ...designGrowthSolutions.map((solution) => entry(solution.href, 0.84, "monthly")),
  ];

  const industryEntries = industryPaths.map((path) => entry(path, 0.9, "monthly"));
  const industryPortalEntries = Object.values(industryPortalPages).map((page) =>
    entry(page.primaryRoute, 0.88, "monthly"),
  );
  const industryCrmEntries = Object.values(industryCrmPages).map((page) =>
    entry(page.primaryRoute, 0.9, "monthly"),
  );
  const industryBusinessSuiteEntries = Object.values(industryBusinessSuitePages).map((page) =>
    entry(page.primaryRoute, 0.9, "monthly"),
  );

  // The four industry mobile-app pages that are reachable today and that
  // /industries/[slug]/[solutionSlug] already serves with its own metadata and
  // self-referencing canonical - they were simply never listed. The route comes
  // from the same data the page is built from, matching the portal, CRM and
  // business-suite entries above, so no path is written twice.
  //
  // industryMobileAppPages holds ten entries. The other six are absent from the
  // sitemap too, but they are outside this change and are deliberately left as
  // they are rather than listed unverified.
  const sitemappedMobileAppIndustries = ["automobile", "finance", "insurance", "travel"];
  const industryMobileAppEntries = Object.values(industryMobileAppPages)
    .filter((page) => sitemappedMobileAppIndustries.includes(page.industrySlug))
    .map((page) => entry(page.primaryRoute, 0.88, "monthly"));

  // Driven by the same list the route itself uses for generateStaticParams, so
  // a new healthcare solution appears here without a second list to maintain.
  // The hand-built solution pages, read from the same entries their layouts use
  // for metadata — so a page is described and listed from one place.
  const handBuiltSolutionEntries = solutionSeoEntries.map((item) =>
    entry(item.path, 0.86, "monthly"),
  );

  const healthcareEntries = [
    entry("/industries/healthcare", 0.9, "monthly"),
    ...healthcareSolutionSlugs.map((slug) =>
      entry(`/industries/healthcare/${slug}`, 0.88, "monthly"),
    ),
  ];

  // De-duplicate by URL, keeping the first occurrence.
  //
  // Several of these lists legitimately overlap: `industryPaths` names the ten
  // /industries/*-crm pages explicitly, and `industryCrmPages` arrives at the
  // same ten through its own primaryRoute. The live sitemap has been shipping
  // all ten twice (110 entries, 100 distinct). Collapsing here rather than
  // editing either list keeps both sources intact — each is the right source
  // for its own purpose — and means any future overlap is handled too.
  //
  // First occurrence wins so the earlier list's priority is the one kept, which
  // preserves the values already published.
  const all = [
    ...staticEntries,
    ...serviceEntries,
    ...solutionEntries,
    ...industryEntries,
    ...industryPortalEntries,
    ...industryCrmEntries,
    ...industryBusinessSuiteEntries,
    ...industryMobileAppEntries,
    ...healthcareEntries,
    ...handBuiltSolutionEntries,
  ];

  const seen = new Set<string>();
  return all.filter((item) => {
    if (seen.has(item.url)) return false;
    seen.add(item.url);
    return true;
  });
}
