import { existsSync } from "node:fs";
import { join } from "node:path";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import CrmReveal from "./CrmReveal";
import {
  crmClass,
  crmRevealHeading,
  crmRevealSoft,
  crmSlideRight,
  crmStagger,
} from "./crmAnimationUtils";
import type { IndustryCrmPageData } from "./industryCrmData";

type CrmVariant =
  | "education"
  | "healthcare"
  | "finance"
  | "real-estate"
  | "retail"
  | "manufacturing"
  | "insurance"
  | "automobile"
  | "service-business"
  | "travel"
  | "default";

type DashboardConfig = {
  variant: CrmVariant;
  heroTitle: string;
  heroLineOne: string;
  heroLineTwo: string;
  description: string;
  dashboardLabel: string;
  sceneClass: string;
};

type CrmHeroAsset = {
  background: string;
  dashboard: string;
  mobileDashboard?: string;
};

const fallbackCrmHeroAsset: CrmHeroAsset = {
  background: "/images/industries/crm/education-campus-preview.png",
  dashboard: "/images/industries/crm/education-crm-dashboard-preview.png",
};

const crmHeroAssets = {
  education: fallbackCrmHeroAsset,
  healthcare: {
    background: "/images/industries/crm/healthcare-preview.png",
    dashboard: "/images/industries/crm/healthcare-crm-dashboard-preview.png",
  },
  "real-estate": {
    background: "/images/industries/crm/real-estate-preview.png",
    dashboard: "/images/industries/crm/real-estate-crm-dashboard-preview.png",
  },
  manufacturing: {
    background: "/images/industries/crm/manufacturing-preview.png",
    dashboard: "/images/industries/crm/manufacturing-crm-dashboard-preview.png",
  },
  retail: {
    background: "/images/industries/crm/retail-preview.png",
    dashboard: "/images/industries/crm/retail-crm-dashboard-preview.png",
  },
  finance: {
    background: "/images/industries/crm/finance-preview.png",
    dashboard: "/images/industries/crm/finance-crm-dashboard-preview.png",
  },
  insurance: {
    background: "/images/industries/crm/insurance-preview.png",
    dashboard: "/images/industries/crm/insurance-crm-dashboard-preview.png",
  },
  automobile: {
    background: "/images/industries/crm/automobile-preview.png",
    dashboard: "/images/industries/crm/automobile-crm-dashboard-preview.png",
  },
  "service-business": {
    background: "/images/industries/crm/service-preview.png",
    dashboard: "/images/industries/crm/service-crm-dashboard-preview.png",
  },
  travel: {
    background: "/images/industries/crm/travel-preview.png",
    dashboard: "/images/industries/crm/travel-crm-dashboard-preview.png",
    mobileDashboard: "/images/industries/crm/travel-crm-mobile-dashboard.png",
  },
} as const satisfies Record<Exclude<CrmVariant, "default">, CrmHeroAsset>;

const publicAssetExistsCache = new Map<string, boolean>();

function publicAssetExists(assetPath: string) {
  const normalizedAssetPath = assetPath.replace(/^\/+/, "");
  const cachedResult = publicAssetExistsCache.get(normalizedAssetPath);

  if (cachedResult !== undefined) {
    return cachedResult;
  }

  const exists = existsSync(join(process.cwd(), "public", normalizedAssetPath));
  publicAssetExistsCache.set(normalizedAssetPath, exists);
  return exists;
}

function resolvePublicAsset(assetPath: string, fallbackPath: string) {
  return publicAssetExists(assetPath) ? assetPath : fallbackPath;
}

function getHeroAssets(variant: CrmVariant): CrmHeroAsset {
  if (variant === "default") {
    return fallbackCrmHeroAsset;
  }

  return crmHeroAssets[variant] ?? fallbackCrmHeroAsset;
}

function getCrmVariant(data: IndustryCrmPageData): CrmVariant {
  const variantsBySlug: Partial<Record<string, CrmVariant>> = {
    education: "education",
    healthcare: "healthcare",
    finance: "finance",
    "real-estate": "real-estate",
    retail: "retail",
    manufacturing: "manufacturing",
    insurance: "insurance",
    automobile: "automobile",
    "service-business": "service-business",
    travel: "travel",
  };
  const slugVariant = variantsBySlug[data.industrySlug];

  if (slugVariant) {
    return slugVariant;
  }

  const text = `${data.industrySlug} ${data.industryName} ${data.hero.eyebrow} ${data.hero.title} ${data.hero.dashboardName}`.toLowerCase();

  if (text.includes("education") || text.includes("student") || text.includes("admission")) return "education";
  if (text.includes("health") || text.includes("clinic") || text.includes("patient")) return "healthcare";
  if (text.includes("finance") || text.includes("kyc") || text.includes("financial")) return "finance";
  if (text.includes("real estate") || text.includes("property") || text.includes("broker")) return "real-estate";
  if (text.includes("manufacturing") || text.includes("dealer") || text.includes("production")) return "manufacturing";
  if (text.includes("retail") || text.includes("store") || text.includes("order")) return "retail";
  if (text.includes("insurance") || text.includes("policy") || text.includes("claim")) return "insurance";
  if (text.includes("automobile") || text.includes("vehicle") || text.includes("dealership")) return "automobile";
  if (text.includes("service business") || text.includes("service") || text.includes("technician")) return "service-business";
  if (text.includes("travel") || text.includes("booking") || text.includes("itinerary")) return "travel";

  return "default";
}

function getDashboardConfig(data: IndustryCrmPageData): DashboardConfig {
  const variant = getCrmVariant(data);

  const configs: Record<CrmVariant, DashboardConfig> = {
    education: {
      variant,
      heroTitle: "Education CRM",
      heroLineOne: "Stronger Connections",
      heroLineTwo: "Smarter Enrollments",
      description:
        "Unify student inquiries, track applications, manage counselors, and grow enrollments with a CRM built for modern educational institutions.",
      dashboardLabel: "Education CRM",
      sceneClass: "from-sky-100/80 via-blue-50/70 to-violet-100/70",
    },
    healthcare: {
      variant,
      heroTitle: "Healthcare CRM",
      heroLineOne: "Strong Patient Bonds",
      heroLineTwo: "Healthier Growth",
      description:
        "Unify patient inquiries, appointment requests, follow-ups, doctor communication, and care journeys with a CRM built for modern healthcare teams.",
      dashboardLabel: "Healthcare CRM",
      sceneClass: "from-cyan-100/80 via-blue-50/70 to-emerald-100/60",
    },
    finance: {
      variant,
      heroTitle: "Finance CRM",
      heroLineOne: "Trusted Client Bonds",
      heroLineTwo: "Smart Financial Growth",
      description:
        "Manage clients, KYC, documents, advisors, opportunities, follow-ups, and compliance workflows with a CRM built for financial services.",
      dashboardLabel: "Finance CRM",
      sceneClass: "from-blue-100/80 via-slate-50/70 to-cyan-100/60",
    },
    "real-estate": {
      variant,
      heroTitle: "Real Estate CRM",
      heroLineOne: "More Property Leads",
      heroLineTwo: "Faster Closures",
      description:
        "Manage property inquiries, site visits, brokers, buyers, follow-ups, and deal pipelines with a CRM built for real estate growth.",
      dashboardLabel: "Real Estate CRM",
      sceneClass: "from-sky-100/80 via-blue-50/70 to-violet-100/60",
    },
    manufacturing: {
      variant,
      heroTitle: "Manufacturing CRM",
      heroLineOne: "Strong Dealer Network",
      heroLineTwo: "Smart Sales Operations",
      description:
        "Manage dealer inquiries, quotations, orders, production updates, dispatch coordination, and service requests in one manufacturing CRM.",
      dashboardLabel: "Manufacturing CRM",
      sceneClass: "from-blue-100/80 via-indigo-50/70 to-slate-100/60",
    },
    retail: {
      variant,
      heroTitle: "Retail CRM",
      heroLineOne: "Smarter Customer Engagement",
      heroLineTwo: "Stronger Repeat Sales",
      description:
        "Manage customers, orders, loyalty campaigns, offers, support tickets, feedback, and repeat purchase journeys with a retail CRM.",
      dashboardLabel: "Retail CRM",
      sceneClass: "from-blue-100/80 via-purple-50/70 to-sky-100/60",
    },
    insurance: {
      variant,
      heroTitle: "Insurance CRM",
      heroLineOne: "Stronger Client Bonds",
      heroLineTwo: "Smart Insurance Growth",
      description:
        "Manage policy inquiries, renewals, claims, agents, documents, reminders, and customer communication with an insurance CRM.",
      dashboardLabel: "Insurance CRM",
      sceneClass: "from-blue-100/80 via-cyan-50/70 to-indigo-100/60",
    },
    automobile: {
      variant,
      heroTitle: "Automobile CRM",
      heroLineOne: "More Vehicle Leads",
      heroLineTwo: "Faster Sales Closures",
      description:
        "Manage vehicle inquiries, test drives, quotations, bookings, service reminders, and customer follow-ups in one automobile CRM.",
      dashboardLabel: "Automobile CRM",
      sceneClass: "from-sky-100/80 via-blue-50/70 to-slate-100/60",
    },
    "service-business": {
      variant,
      heroTitle: "Service Business CRM",
      heroLineOne: "Better Service Requests",
      heroLineTwo: "Faster Team Response",
      description:
        "Manage customer requests, bookings, technicians, schedules, service tickets, payments, and feedback from one service business CRM.",
      dashboardLabel: "Service Business CRM",
      sceneClass: "from-blue-100/80 via-teal-50/70 to-cyan-100/60",
    },
    travel: {
      variant,
      heroTitle: "Travel CRM",
      heroLineOne: "More Travel Leads",
      heroLineTwo: "Smoother Bookings",
      description:
        "Manage travel inquiries, packages, itineraries, bookings, payments, reminders, and customer communication with a travel CRM.",
      dashboardLabel: "Travel CRM",
      sceneClass: "from-cyan-100/80 via-blue-50/70 to-indigo-100/60",
    },
    default: {
      variant,
      heroTitle: data.hero.dashboardName,
      heroLineOne: "Stronger Relationships",
      heroLineTwo: "Smarter Workflows",
      description: data.hero.description,
      dashboardLabel: data.hero.dashboardName,
      sceneClass: "from-blue-100/80 via-sky-50/70 to-violet-100/60",
    },
  };

  return configs[variant];
}

export default function CrmHeroSection({ data }: { data: IndustryCrmPageData }) {
  const config = getDashboardConfig(data);

  return (
    <section className="relative isolate overflow-hidden bg-white px-0 pb-0 pt-[5.35rem] sm:pt-[5.6rem] lg:pt-[5.85rem] dark:bg-slate-950">
      <div className="pointer-events-none absolute inset-0 -z-30 bg-[linear-gradient(115deg,#f8fbff_0%,#ffffff_45%,#eff6ff_100%)] dark:bg-[linear-gradient(115deg,#020617_0%,#0f172a_58%,#111827_100%)]" />
      <div className={`pointer-events-none absolute bottom-0 left-0 top-0 -z-20 w-full bg-gradient-to-br ${config.sceneClass} opacity-[0.06] lg:w-[43vw] dark:opacity-20`} />
      <div className="pointer-events-none absolute inset-y-0 left-[36vw] -z-10 hidden w-[17vw] bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,0.42)_54%,rgba(255,255,255,0.82))] lg:block dark:from-transparent dark:via-slate-950/45 dark:to-slate-950" />
      <IndustryPhotoBackground variant={config.variant} />

      <div className="grid min-h-[calc(100svh-5.85rem)] min-w-0 w-full gap-0 lg:grid-cols-[minmax(0,0.39fr)_minmax(0,0.61fr)] lg:items-start">
        <CrmReveal
          variant="fade-up"
          duration={840}
          className={crmClass(
            crmRevealHeading,
            "relative z-10 flex min-w-0 max-w-[620px] flex-col justify-start py-0 pl-5 pr-1 sm:pl-8 lg:min-h-[500px] lg:pl-[4.3vw] lg:pr-0 lg:pt-[3.1rem] xl:pl-[4.6vw] xl:pt-[3.35rem] 2xl:pl-[4.9vw] 2xl:pt-[3.65rem]",
          )}
        >
          <h1 className="mt-0 max-w-[660px] break-words text-[clamp(2.45rem,3.05vw,4rem)] font-extrabold leading-[1.08] tracking-[-0.035em] text-slate-950 dark:text-white">
            <span className="block">{config.heroTitle}</span>
            <span className="mt-1.5 block text-blue-700 dark:text-blue-300">{config.heroLineOne}</span>
            <span className="block text-violet-600 dark:text-violet-300">{config.heroLineTwo}</span>
          </h1>

          <p
            className={crmClass(
              crmRevealSoft,
              crmStagger(1),
              "mt-4 max-w-[390px] text-[1rem] font-semibold leading-[1.75] text-slate-900 dark:text-slate-200",
            )}
          >
            <span className="box-decoration-clone rounded-md bg-white/42 px-1.5 py-0.5 shadow-[0_1px_16px_rgba(255,255,255,0.55)] backdrop-blur-[2px] [-webkit-box-decoration-break:clone] dark:bg-slate-950/35">
              {config.description}
            </span>
          </p>

          <div
            className={crmClass(
              crmRevealSoft,
              crmStagger(2),
              "mt-4 flex w-[453px] max-w-full items-center justify-center gap-2",
            )}
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-700 px-4 py-2 text-[13px] font-extrabold text-white shadow-[0_12px_28px_rgba(37,99,235,0.22)] transition hover:-translate-y-0.5 hover:bg-blue-800"
            >
              Get Started
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href={data.demoRedirect.demoHref}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/88 px-4 py-2 text-[13px] font-extrabold text-blue-700 shadow-[0_12px_28px_rgba(15,23,42,0.08)] backdrop-blur-md transition hover:-translate-y-0.5 dark:bg-white/[0.06] dark:text-blue-300"
            >
              Book a Demo
              <CalendarDays className="h-5 w-5" />
            </Link>
          </div>
        </CrmReveal>

        <CrmDashboardPreview config={config} />
      </div>
    </section>
  );
}

function CrmDashboardPreview({ config }: { config: DashboardConfig }) {
  return (
    <CrmReveal
      variant="fade-left"
      delay={140}
      duration={900}
      className={crmClass(
        crmSlideRight,
        "relative z-10 min-w-0 w-full overflow-visible px-4 pt-5 sm:px-6 lg:px-0 lg:pt-0 lg:pr-[1.2vw] lg:-ml-[2.5vw] xl:-ml-[3vw]",
      )}
    >
      <div className="relative ml-0 w-full max-w-none lg:hidden">
        <img
          src={getMobileDashboardImageUrl(config.variant)}
          alt={`${config.dashboardLabel} mobile dashboard preview`}
          className="block h-auto w-full rounded-[1.35rem] border border-white/80 object-contain shadow-[0_20px_60px_rgba(15,23,42,0.10)]"
          loading="eager"
          draggable={false}
        />
      </div>

      <div className="relative ml-0 hidden w-full max-w-none lg:block">
        <img
          src={getDashboardImageUrl(config.variant)}
          alt={`${config.dashboardLabel} dashboard preview`}
          className="block h-auto w-full rounded-[1.35rem] object-contain"
          loading="eager"
          draggable={false}
        />
      </div>
    </CrmReveal>
  );
}

function getDashboardImageUrl(variant: CrmVariant) {
  const { dashboard } = getHeroAssets(variant);
  return resolvePublicAsset(dashboard, fallbackCrmHeroAsset.dashboard);
}

function getMobileDashboardImageUrl(variant: CrmVariant) {
  const assets = getHeroAssets(variant);
  const mobileDashboard = assets.mobileDashboard ?? assets.dashboard;
  return resolvePublicAsset(mobileDashboard, assets.dashboard);
}

function getIndustryPhotoUrl(variant: CrmVariant) {
  const { background } = getHeroAssets(variant);
  return resolvePublicAsset(background, fallbackCrmHeroAsset.background);
}

function IndustryPhotoBackground({ variant }: { variant: CrmVariant }) {
  const imageUrl = getIndustryPhotoUrl(variant);

  return (
    <>
      <div className="pointer-events-none absolute right-0 top-[5.35rem] z-0 h-[50%] w-[92vw] overflow-hidden rounded-bl-[3.5rem] sm:hidden">
        <img
          src={imageUrl}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full max-w-none select-none object-cover object-right opacity-[0.42] saturate-[1.12] contrast-[1.04]"
          draggable={false}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(248,251,255,0.98)_0%,rgba(248,251,255,0.76)_42%,rgba(248,251,255,0.28)_100%)] dark:bg-[linear-gradient(90deg,rgba(2,6,23,0.98)_0%,rgba(2,6,23,0.78)_42%,rgba(2,6,23,0.34)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[45%] bg-[linear-gradient(180deg,rgba(248,251,255,0)_0%,rgba(248,251,255,0.72)_66%,rgba(248,251,255,1)_100%)] dark:bg-[linear-gradient(180deg,rgba(2,6,23,0)_0%,rgba(2,6,23,0.76)_66%,rgba(2,6,23,1)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-[24%] bg-[linear-gradient(180deg,rgba(248,251,255,0.78)_0%,rgba(248,251,255,0.28)_72%,rgba(248,251,255,0)_100%)] dark:bg-[linear-gradient(180deg,rgba(2,6,23,0.82)_0%,rgba(2,6,23,0.34)_72%,rgba(2,6,23,0)_100%)]" />
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 -z-10 hidden h-[54%] w-[40vw] overflow-visible sm:block">
        <img
          src={imageUrl}
          alt=""
          aria-hidden="true"
          className="absolute bottom-0 left-0 h-auto w-[40vw] max-w-none select-none object-contain opacity-100 saturate-[1.05]"
          draggable={false}
        />
        <div className="absolute inset-x-0 top-0 h-[18%] bg-[linear-gradient(180deg,rgba(248,251,255,0.32)_0%,rgba(248,251,255,0.10)_52%,rgba(248,251,255,0)_100%)] dark:bg-[linear-gradient(180deg,rgba(2,6,23,0.32)_0%,rgba(2,6,23,0.10)_52%,rgba(2,6,23,0)_100%)]" />
        <div className="absolute inset-y-0 right-[-8vw] w-[26vw] bg-[linear-gradient(90deg,rgba(248,251,255,0)_0%,rgba(248,251,255,0.25)_52%,rgba(248,251,255,0.78)_100%)] dark:bg-[linear-gradient(90deg,rgba(2,6,23,0)_0%,rgba(2,6,23,0.25)_52%,rgba(2,6,23,0.78)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[16%] bg-[linear-gradient(180deg,rgba(248,251,255,0),rgba(248,251,255,0.10)_56%,rgba(248,251,255,0.24))] dark:bg-[linear-gradient(180deg,rgba(2,6,23,0),rgba(2,6,23,0.22)_56%,rgba(2,6,23,0.48))]" />
      </div>
    </>
  );
}