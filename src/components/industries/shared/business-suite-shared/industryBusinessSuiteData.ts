import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Bot,
  Car,
  CheckCircle2,
  ClipboardCheck,
  Cloud,
  Database,
  Factory,
  FileText,
  Globe2,
  GraduationCap,
  HeartPulse,
  Home,
  Landmark,
  LayoutDashboard,
  LifeBuoy,
  LockKeyhole,
  Network,
  Plane,
  PlugZap,
  Rocket,
  SearchCheck,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Store,
  Users,
  Workflow,
} from "lucide-react";

export type IndustryBusinessSuiteRoute = {
  industrySlug: string;
  solutionSlug: string;
};

export type IndustryBusinessSuiteCard = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type IndustryBusinessSuiteStartingPoint = {
  title: string;
  description: string;
  outcome: string;
  icon: LucideIcon;
};

export type IndustryBusinessSuitePlan = {
  name: string;
  description: string;
  includes: string[];
  bestFor: string;
  featured?: boolean;
};

export type IndustryBusinessSuitePageData = {
  industryName: string;
  slug: string;
  aliases: string[];
  primaryRoute: string;
  keywords: string[];
  serviceType: string;
  industryIcon: LucideIcon;
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCtaLabel: string;
    primaryCtaHref: string;
    secondaryCtaLabel?: string;
    secondaryCtaHref?: string;
    includedSystems: string[];
  };
  included: {
    title: string;
    description: string;
    items: IndustryBusinessSuiteCard[];
  };
  strategy: {
    title: string;
    description: string;
    steps: IndustryBusinessSuiteCard[];
  };
  startingPoints: {
    title: string;
    description: string;
    cards: IndustryBusinessSuiteStartingPoint[];
  };
  suiteFlow: {
    title: string;
    description: string;
    steps: IndustryBusinessSuiteCard[];
  };
  automation: {
    title: string;
    description: string;
    items: string[];
  };
  packages: {
    title: string;
    description: string;
    plans: IndustryBusinessSuitePlan[];
  };
  industryExample: {
    title: string;
    description: string;
    stack: string[];
  };
  finalCta: {
    title: string;
    description: string;
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel?: string;
    secondaryHref?: string;
  };
};

type IndustryConfig = {
  slug: string;
  industryName: string;
  industryIcon: LucideIcon;
  title: string;
  description?: string;
  exampleTitle: string;
  exampleDescription: string;
  exampleStack: string[];
  keywords: string[];
};

const businessSuiteSlug = "business-suite";

const includedItems: IndustryBusinessSuiteCard[] = [
  card("Website & Landing Pages", "Conversion-focused pages for discovery, trust, lead capture, SEO, and campaigns.", Globe2),
  card("Mobile App", "A customer, staff, field, or partner app connected to your backend and operations.", Smartphone),
  card("Custom CRM", "Lead, customer, sales, support, and follow-up workflows built around your exact process.", Database),
  card("Customer / Partner Portal", "Secure login access for documents, requests, status updates, payments, and support.", LockKeyhole),
  card("Admin Dashboard", "A clean control room for teams, records, permissions, approvals, and business operations.", LayoutDashboard),
  card("AI Automation", "AI agents, smart reminders, lead scoring, support assistance, and workflow automation.", Bot),
  card("Integrations", "Connect WhatsApp, forms, payments, email, sheets, accounting, and third-party tools.", PlugZap),
  card("Analytics & Reports", "Dashboards that show leads, revenue, requests, team output, and growth performance.", BarChart3),
  card("Cloud Deployment", "Production hosting, environments, database setup, backups, monitoring, and release flow.", Cloud),
  card("Support & Optimization", "Ongoing improvements, workflow tuning, speed checks, and growth support after launch.", LifeBuoy),
];

const strategySteps: IndustryBusinessSuiteCard[] = [
  card("Understand your workflow", "We map how leads, customers, teams, documents, payments, and decisions move today.", SearchCheck),
  card("Find gaps and manual work", "We identify repeated tasks, missed follow-ups, slow approvals, and disconnected tools.", ClipboardCheck),
  card("Suggest digital improvements", "We recommend the right website, app, CRM, portal, dashboard, automation, and AI layers.", Network),
  card("Design the full system", "We turn the operating model into screens, roles, data, integrations, and implementation phases.", Workflow),
  card("Build, deploy, and improve", "We launch the system, connect the stack, monitor usage, and refine based on real operations.", Rocket),
];

const startingPointCards: IndustryBusinessSuiteStartingPoint[] = [
  startingPoint(
    "I only have an offline business",
    "You have customers, teams, and operations, but no connected digital system yet.",
    "We build your digital presence, lead system, CRM, and automation.",
    Store,
  ),
  startingPoint(
    "I already have a website",
    "Your website exists, but leads, follow-ups, requests, and reports are still handled manually.",
    "We add CRM, portal, automation, dashboards, and AI agents.",
    Globe2,
  ),
  startingPoint(
    "I already have a mobile app",
    "Your app needs stronger backend operations, admin controls, analytics, or engagement workflows.",
    "We improve backend, dashboards, engagement, and workflows.",
    Smartphone,
  ),
  startingPoint(
    "I already use manual tools",
    "Your business runs through spreadsheets, WhatsApp, forms, email, and disconnected software.",
    "We connect your tools and automate repetitive work.",
    Workflow,
  ),
];

const suiteFlowSteps: IndustryBusinessSuiteCard[] = [
  card("Customer visits website/app", "The customer discovers your business, submits an inquiry, books, buys, or requests help.", Globe2),
  card("Lead goes into CRM", "Source, intent, contact details, and next steps become structured CRM records.", Database),
  card("Team gets task/follow-up", "Owners, reminders, stage updates, and internal tasks keep work moving.", CheckCircle2),
  card("Customer gets portal access", "External users can log in, see documents, requests, payments, and status updates.", LockKeyhole),
  card("Payments/documents/status happen", "Files, approvals, receipts, tickets, and progress updates stay attached to the account.", FileText),
  card("AI automation sends updates", "Smart reminders, WhatsApp follow-ups, reports, and agent responses reduce manual work.", Bot),
  card("Dashboard shows performance", "Owners see leads, revenue, team output, requests, and business health in one place.", BarChart3),
];

const automationItems = [
  "AI sales assistant",
  "AI support agent",
  "WhatsApp follow-up automation",
  "Lead scoring",
  "Report generation",
  "Document workflows",
  "Internal task automation",
  "Smart reminders",
];

const packagePlans: IndustryBusinessSuitePlan[] = [
  {
    name: "Starter Digital Suite",
    description: "A focused digital foundation for businesses starting online.",
    bestFor: "Businesses starting online.",
    includes: ["Website", "Lead forms", "WhatsApp integration", "Basic dashboard", "Analytics"],
  },
  {
    name: "Growth Business Suite",
    description: "A connected operating setup for teams ready to organize sales and service.",
    bestFor: "Businesses ready to organize operations.",
    includes: ["Website", "CRM", "Portal", "Admin dashboard", "Automation", "Reports"],
    featured: true,
  },
  {
    name: "Complete Business Suite",
    description: "A full digital operating system across presence, users, data, automation, and cloud.",
    bestFor: "Businesses that want a full digital operating system.",
    includes: [
      "Website",
      "Mobile app",
      "CRM",
      "Portal",
      "Dashboards",
      "AI agents",
      "Integrations",
      "Cloud deployment",
      "Support",
    ],
  },
];

const industryConfigs: IndustryConfig[] = [
  {
    slug: "healthcare",
    industryName: "Healthcare",
    industryIcon: HeartPulse,
    title: "Build Your Complete Healthcare Digital System",
    exampleTitle: "Healthcare Business Suite Example",
    exampleDescription:
      "Website + Patient Portal + Appointment CRM + Mobile App + Reminders + Reports working as one healthcare operating system.",
    exampleStack: ["Healthcare website", "Patient portal", "Appointment CRM", "Mobile app", "Reminders", "Reports"],
    keywords: ["healthcare business suite", "healthcare digital system", "patient portal CRM app"],
  },
  {
    slug: "manufacturing",
    industryName: "Manufacturing",
    industryIcon: Factory,
    title: "Build Your Complete Manufacturing Digital System",
    exampleTitle: "Manufacturing Business Suite Example",
    exampleDescription:
      "Dealer Portal + Order CRM + Inventory Dashboard + Dispatch Updates + Automation for a clearer factory-to-customer workflow.",
    exampleStack: ["Dealer portal", "Order CRM", "Inventory dashboard", "Dispatch updates", "RFQ workflow", "Automation"],
    keywords: ["manufacturing business suite", "dealer portal CRM", "vendor portal automation"],
  },
  {
    slug: "education",
    industryName: "Education",
    industryIcon: GraduationCap,
    title: "Build Your Complete Education Digital System",
    exampleTitle: "Education Business Suite Example",
    exampleDescription:
      "Website + Student App + Parent Portal + Fee Dashboard + Notifications connected for admissions, learning, and operations.",
    exampleStack: ["Education website", "Student app", "Parent portal", "Fee dashboard", "Admissions CRM", "Notifications"],
    keywords: ["education business suite", "student parent portal", "school digital system"],
  },
  {
    slug: "real-estate",
    industryName: "Real Estate",
    industryIcon: Home,
    title: "Build Your Complete Real Estate Digital System",
    exampleTitle: "Real Estate Business Suite Example",
    exampleDescription:
      "Property Website + Lead CRM + Buyer Portal + Visit Automation + Documents for a cleaner sales and booking journey.",
    exampleStack: ["Property website", "Lead CRM", "Buyer portal", "Visit automation", "Document flow", "Sales dashboard"],
    keywords: ["real estate business suite", "property CRM portal", "buyer portal automation"],
  },
  {
    slug: "retail",
    industryName: "Retail",
    industryIcon: ShoppingBag,
    title: "Build Your Complete Retail Digital System",
    exampleTitle: "Retail Business Suite Example",
    exampleDescription:
      "E-commerce Website + Loyalty Portal + Inventory Dashboard + Campaigns connected across orders, customers, and support.",
    exampleStack: ["E-commerce website", "Loyalty portal", "Inventory dashboard", "Campaign automation", "Order CRM", "Reports"],
    keywords: ["retail business suite", "customer loyalty portal", "retail CRM automation"],
  },
  {
    slug: "finance",
    industryName: "Finance",
    industryIcon: Landmark,
    title: "Build Your Complete Finance Digital System",
    exampleTitle: "Finance Business Suite Example",
    exampleDescription:
      "Client Portal + Document Workflow + CRM + Secure Reporting for advisors, service teams, approvals, and client updates.",
    exampleStack: ["Client portal", "Document workflow", "Finance CRM", "Secure reports", "Advisor updates", "Approvals"],
    keywords: ["finance business suite", "client portal CRM", "finance workflow automation"],
  },
  {
    slug: "insurance",
    industryName: "Insurance",
    industryIcon: ShieldCheck,
    title: "Build Your Complete Insurance Digital System",
    exampleTitle: "Insurance Business Suite Example",
    exampleDescription:
      "Policy pages + Agent CRM + Policyholder Portal + Renewal Reminders + Claims Dashboard for better service and retention.",
    exampleStack: ["Insurance website", "Agent CRM", "Policyholder portal", "Renewal reminders", "Claims dashboard", "Reports"],
    keywords: ["insurance business suite", "policyholder portal", "insurance CRM automation"],
  },
  {
    slug: "travel",
    industryName: "Travel",
    industryIcon: Plane,
    title: "Build Your Complete Travel Digital System",
    exampleTitle: "Travel Business Suite Example",
    exampleDescription:
      "Travel Website + Booking App + Traveler Portal + Inquiry CRM + Payment Updates + Trip Automation for smoother operations.",
    exampleStack: ["Travel website", "Booking app", "Traveler portal", "Inquiry CRM", "Payment updates", "Trip automation"],
    keywords: ["travel business suite", "traveler portal", "booking CRM automation"],
  },
  {
    slug: "automobile",
    industryName: "Automobile",
    industryIcon: Car,
    title: "Build Your Complete Automobile Digital System",
    exampleTitle: "Automobile Business Suite Example",
    exampleDescription:
      "Vehicle Website + Customer App + Dealer CRM + Service Portal + Booking Dashboard for dealership and service operations.",
    exampleStack: ["Vehicle website", "Customer app", "Dealer CRM", "Service portal", "Booking dashboard", "Follow-ups"],
    keywords: ["automobile business suite", "dealer CRM portal", "service booking dashboard"],
  },
  {
    slug: "service-business",
    industryName: "Service Business",
    industryIcon: Users,
    title: "Build Your Complete Service Business Digital System",
    exampleTitle: "Service Business Suite Example",
    exampleDescription:
      "Service Website + Booking CRM + Client Portal + Staff App + Payment Status + Support Automation for repeatable delivery.",
    exampleStack: ["Service website", "Booking CRM", "Client portal", "Staff app", "Payment status", "Support automation"],
    keywords: ["service business suite", "client portal CRM", "service workflow automation"],
  },
];

export const industryBusinessSuitePages: Record<string, IndustryBusinessSuitePageData> =
  Object.fromEntries(industryConfigs.map((config) => [config.slug, createPage(config)]));

export const industryBusinessSuiteStaticParams: IndustryBusinessSuiteRoute[] =
  Object.values(industryBusinessSuitePages).flatMap((page) =>
    page.aliases.map((solutionSlug) => ({
      industrySlug: page.slug,
      solutionSlug,
    })),
  );

export function getIndustryBusinessSuitePage(
  industrySlug: string,
  solutionSlug = businessSuiteSlug,
): IndustryBusinessSuitePageData | null {
  const page = industryBusinessSuitePages[industrySlug];

  if (!page || !page.aliases.includes(solutionSlug)) {
    return null;
  }

  return page;
}

function createPage(config: IndustryConfig): IndustryBusinessSuitePageData {
  return {
    industryName: config.industryName,
    slug: config.slug,
    aliases: [businessSuiteSlug],
    primaryRoute: `/industries/${config.slug}/${businessSuiteSlug}`,
    keywords: [
      ...config.keywords,
      "full business suite",
      "business operating system",
      "website app CRM portal automation",
      "HNX Solutions",
    ],
    serviceType: `${config.industryName} Full Business Suite`,
    industryIcon: config.industryIcon,
    hero: {
      eyebrow: "Full Business Suite",
      title: config.title,
      description:
        config.description ??
        "From website and mobile app to CRM, portals, dashboards, automation, and AI agents - we design and build the full system your business needs to operate smarter and grow faster.",
      primaryCtaLabel: "Plan My Full Suite",
      primaryCtaHref: "/contact",
      secondaryCtaLabel: "Book Free Consultation",
      secondaryCtaHref: "/contact",
      includedSystems: ["Website", "Mobile App", "CRM", "Portal", "Dashboards", "AI Automation", "Integrations", "Cloud"],
    },
    included: {
      title: "What's Included",
      description:
        "A complete package can start small or become a full digital operating system across customer acquisition, internal operations, self-service access, automation, and reporting.",
      items: includedItems,
    },
    strategy: {
      title: "We Start With Your Business",
      description:
        "We understand how your business works, where time is wasted, where leads are lost, and what can be automated. Then we design the right system around your actual operations.",
      steps: strategySteps,
    },
    startingPoints: {
      title: "Choose Your Starting Point",
      description:
        "You do not need to rebuild everything at once. We can start from your current stage and phase the right suite around your business priorities.",
      cards: startingPointCards,
    },
    suiteFlow: {
      title: "Business Suite Flow",
      description:
        "The full suite connects customer-facing channels, CRM records, team workflows, portal access, automation, and reporting into one operating flow.",
      steps: suiteFlowSteps,
    },
    automation: {
      title: "AI + Automation Layer",
      description:
        "AI agents and workflow automation can sit across the suite to reduce repeated work, speed up response times, and make every team action easier to track.",
      items: automationItems,
    },
    packages: {
      title: "Package Levels",
      description:
        "No fixed prices. Each suite is scoped around your business model, existing tools, launch priority, integrations, and support needs.",
      plans: packagePlans,
    },
    industryExample: {
      title: config.exampleTitle,
      description: config.exampleDescription,
      stack: config.exampleStack,
    },
    finalCta: {
      title: "Let's Build Your Business Operating System",
      description:
        "Tell us how your business works. We'll suggest the right digital suite to save time, improve operations, and grow online.",
      primaryLabel: "Plan My Full Suite",
      primaryHref: "/contact",
      secondaryLabel: "Book Free Consultation",
      secondaryHref: "/contact",
    },
  };
}

function card(title: string, description: string, icon: LucideIcon): IndustryBusinessSuiteCard {
  return { title, description, icon };
}

function startingPoint(
  title: string,
  description: string,
  outcome: string,
  icon: LucideIcon,
): IndustryBusinessSuiteStartingPoint {
  return { title, description, outcome, icon };
}
