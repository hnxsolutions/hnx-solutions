/**
 * SEO metadata for solution pages that are not described by a `SolutionPageData` entry.
 *
 * These pages are hand-built: each renders its own layout and copy rather than
 * the shared `SolutionSeoPage`, so they never belonged in the rich
 * `SolutionPageData` arrays. Forcing them in would have meant filling nineteen
 * required fields - problems, modules, use cases, stats, CTA copy - with
 * content that nothing renders.
 *
 * A sitemap entry and a title need four things, so that is all this holds.
 * Every label and description below is lifted from the page it describes: the
 * label is its MODULE_NAME, the description is a sentence its own overview
 * section already shows a visitor. None of it is new copy.
 *
 * Both the per-page layout.tsx and sitemap.ts read this, so a page added here
 * gets its metadata and its sitemap entry from the same line.
 */
export type SolutionSeoEntry = {
  slug: string;
  /** The page's own MODULE_NAME. */
  label: string;
  path: string;
  /** A sentence taken from the page's own overview section. */
  description: string;
};

export type SolutionSeoCategory = {
  /** Reads as "<label> by HNX Solutions" in the title. */
  categoryLabel: string;
  entries: SolutionSeoEntry[];
};

export const aiAutomationSolutionSeo: SolutionSeoCategory = {
  categoryLabel: "AI Automation",
  entries: [
    {
      slug: "ai-sales-agent",
      label: "AI Sales Agent",
      path: "/solutions/ai-automation/ai-sales-agent",
      description:
        "The agent greets, explains, qualifies, recommends next action, and captures structured sales data.",
    },
    {
      slug: "ai-support-agent",
      label: "AI Support Agent",
      path: "/solutions/ai-automation/ai-support-agent",
      description:
        "The agent uses approved knowledge, classification rules, ticket logic, and escalation paths.",
    },
    {
      slug: "automation-analytics-improvements",
      label: "Automation Analytics & Improvements",
      path: "/solutions/ai-automation/automation-analytics-improvements",
      description:
        "HNX defines the trigger, rule, AI support, timing, and next action for automation performance system.",
    },
    {
      slug: "automation-strategy",
      label: "Automation Strategy",
      path: "/solutions/ai-automation/automation-strategy",
      description:
        "HNX maps repeated tasks, decision points, data sources, owner roles, and customer impact before recommending automation.",
    },
    {
      slug: "document-report-automation",
      label: "Document / Report Automation",
      path: "/solutions/ai-automation/document-report-automation",
      description:
        "HNX defines the trigger, rule, AI support, timing, and next action for document and report automation.",
    },
    {
      slug: "lead-scoring-crm-automation",
      label: "Lead Scoring & CRM Automation",
      path: "/solutions/ai-automation/lead-scoring-crm-automation",
      description:
        "HNX defines the trigger, rule, AI support, timing, and next action for lead scoring and CRM automation.",
    },
  ],
};

export const cloudDevopsSolutionSeo: SolutionSeoCategory = {
  categoryLabel: "Cloud & DevOps",
  entries: [
    {
      slug: "cloud-strategy",
      label: "Cloud Strategy",
      path: "/solutions/cloud-devops/cloud-strategy",
      description:
        "HNX turns business goals into cloud requirements, readiness checks, hosting decisions, cost models, and rollout phases.",
    },
    {
      slug: "deployment-automation",
      label: "Deployment Automation",
      path: "/solutions/cloud-devops/deployment-automation",
      description:
        "HNX designs deployment automation operating model around repeatable operations, release safety, infrastructure visibility, and business impact.",
    },
    {
      slug: "devops-ci-cd",
      label: "DevOps CI/CD",
      path: "/solutions/cloud-devops/devops-ci-cd",
      description:
        "HNX designs CI/CD release operating model around repeatable operations, release safety, infrastructure visibility, and business impact.",
    },
    {
      slug: "monitoring-logging",
      label: "Monitoring & Logging",
      path: "/solutions/cloud-devops/monitoring-logging",
      description:
        "HNX designs monitoring and logging operating model around repeatable operations, release safety, infrastructure visibility, and business impact.",
    },
    {
      slug: "performance-scaling",
      label: "Performance & Scaling",
      path: "/solutions/cloud-devops/performance-scaling",
      description:
        "HNX designs performance and scaling operating model around repeatable operations, release safety, infrastructure visibility, and business impact.",
    },
    {
      slug: "security-backup",
      label: "Security & Backup",
      path: "/solutions/cloud-devops/security-backup",
      description:
        "HNX designs security and backup operating model around repeatable operations, release safety, infrastructure visibility, and business impact.",
    },
  ],
};

export const designGrowthSolutionSeo: SolutionSeoCategory = {
  categoryLabel: "Design & Growth",
  entries: [
    {
      slug: "brand-strategy",
      label: "Brand Strategy",
      path: "/solutions/design-growth/brand-strategy",
      description:
        "The experience defines what visitors should understand first, what objections must be answered, and how the brand should feel across digital touchpoints.",
    },
    {
      slug: "content-marketing",
      label: "Content Marketing",
      path: "/solutions/design-growth/content-marketing",
      description:
        "HNX defines the strategic role of content marketing operating model, including audience intent, business priority, content hierarchy, and conversion objective.",
    },
    {
      slug: "conversion-optimization",
      label: "Conversion Optimization",
      path: "/solutions/design-growth/conversion-optimization",
      description:
        "Conversion optimization operating model is measured through relevant events, CTA behavior, source quality, engagement, conversion, and improvement signals.",
    },
    {
      slug: "growth-analytics",
      label: "Growth Analytics",
      path: "/solutions/design-growth/growth-analytics",
      description:
        "HNX defines the strategic role of growth analytics operating model, including audience intent, business priority, content hierarchy, and conversion objective.",
    },
    {
      slug: "landing-page-design",
      label: "Landing Page Design",
      path: "/solutions/design-growth/landing-page-design",
      description:
        "HNX defines the strategic role of landing page conversion system, including audience intent, business priority, content hierarchy, and conversion objective.",
    },
  ],
};

export const mobileAppsSolutionSeo: SolutionSeoCategory = {
  categoryLabel: "Mobile Apps",
  entries: [
    {
      slug: "app-analytics-improvements",
      label: "App Analytics & Improvements",
      path: "/solutions/mobile-apps/app-analytics-improvements",
      description:
        "Use analytics to decide what the app should become next.",
    },
    {
      slug: "play-store-app-store-launch",
      label: "Play Store / App Store Launch",
      path: "/solutions/mobile-apps/play-store-app-store-launch",
      description:
        "Launch your app with the full release process handled.",
    },
  ],
};

export const solutionSeoCategories: SolutionSeoCategory[] = [
  aiAutomationSolutionSeo,
  cloudDevopsSolutionSeo,
  designGrowthSolutionSeo,
  mobileAppsSolutionSeo,
];

/** Every hand-built solution page, for the sitemap. */
export const solutionSeoEntries: SolutionSeoEntry[] = solutionSeoCategories.flatMap(
  (category) => category.entries,
);

/** Looks up one page so its layout builds metadata from the same line. */
export function getSolutionSeo(path: string): {
  entry: SolutionSeoEntry;
  categoryLabel: string;
} {
  for (const category of solutionSeoCategories) {
    const entry = category.entries.find((item) => item.path === path);
    if (entry) return { entry, categoryLabel: category.categoryLabel };
  }

  throw new Error(`No solution SEO entry for ${path}`);
}
