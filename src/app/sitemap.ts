import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { services } from "@/data/services";
import { webSaasSolutions } from "@/data/solutions/webSaasSolutions";
import { mobileAppSolutions } from "@/data/solutions/mobileAppSolutions";
import { aiAutomationSolutions } from "@/data/solutions/aiAutomationSolutions";
import { cloudDevopsSolutions } from "@/data/solutions/cloudDevopsSolutions";
import { designGrowthSolutions } from "@/data/solutions/designGrowthSolutions";

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
    entry("/solutions", 0.94, "weekly"),
    entry("/industries", 0.94, "weekly"),
    entry("/demo-crm", 0.9, "weekly"),
    entry("/crm-demo", 0.9, "weekly"),
    entry("/roi-calculator", 0.86, "monthly"),
    entry("/workflow-lab", 0.86, "monthly"),
    entry("/contact", 0.86, "monthly"),
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

  return [...staticEntries, ...serviceEntries, ...solutionEntries, ...industryEntries];
}
