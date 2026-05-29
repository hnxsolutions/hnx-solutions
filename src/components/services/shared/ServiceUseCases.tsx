"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import type { ServiceItem } from "@/data/services";
import { getHealthcareSolution } from "@/components/industries/healthcare/healthcareData";
import {
  industryWebsitePages,
  type IndustryWebsitePageData,
} from "@/components/industries/shared/industryWebsiteData";
import {
  ArrowRight,
  BarChart3,
  Building2,
  Car,
  CheckCircle2,
  Factory,
  Globe2,
  GraduationCap,
  HeartPulse,
  Landmark,
  MonitorSmartphone,
  Plane,
  ShieldCheck,
  ShoppingBag,
  Wrench,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

type ServiceUseCasesProps = {
  service: ServiceItem;
};

type IndustrySlug =
  | "healthcare"
  | "real-estate"
  | "education"
  | "manufacturing"
  | "retail"
  | "finance"
  | "insurance"
  | "travel"
  | "automobile"
  | "service-business";

type SharedIndustrySlug = Exclude<IndustrySlug, "healthcare">;

type PreviewOverride = {
  name: string;
  icon: LucideIcon;
  accent: string;
  href: string;
  eyebrow: string;
  title: string;
  description: string;
  chips: string[];
};

type WebsitePreview = PreviewOverride & {
  slug: IndustrySlug;
  heroImage: string;
  heroBrand: string;
  heroHeadline: string;
  heroSubtext: string;
  heroNav: string[];
  stats: Array<[string, string]>;
};

const industryOrder: IndustrySlug[] = [
  "healthcare",
  "real-estate",
  "education",
  "manufacturing",
  "retail",
  "finance",
  "insurance",
  "travel",
  "automobile",
  "service-business",
];

const previewOverrides: Record<IndustrySlug, PreviewOverride> = {
  healthcare: {
    name: "Healthcare",
    icon: HeartPulse,
    accent: "from-sky-500 to-cyan-500",
    href: "/industries/healthcare/website",
    eyebrow: "Healthcare Website",
    title: "Patient-focused healthcare website experience",
    description:
      "Build trust, explain services, highlight doctors, and convert visitors into appointments.",
    chips: [
      "Appointment Booking",
      "Doctor Profiles",
      "SEO Ready",
      "Mobile Optimized",
    ],
  },
  "real-estate": {
    name: "Real Estate",
    icon: Building2,
    accent: "from-orange-500 to-amber-500",
    href: "/industries/real-estate/website-development",
    eyebrow: "Real Estate Website",
    title: "Property website experience for listings and site visits",
    description:
      "Showcase projects, locations, amenities, galleries, and convert visitors into site visit leads.",
    chips: [
      "Property Listings",
      "Site Visit Flow",
      "Location SEO",
      "Broker Inquiry",
    ],
  },
  education: {
    name: "Education",
    icon: GraduationCap,
    accent: "from-violet-500 to-purple-500",
    href: "/industries/education/website-development",
    eyebrow: "Education Website",
    title: "Admissions-focused education website experience",
    description:
      "Present courses, faculty, campus proof, and convert visitors into admission inquiries.",
    chips: [
      "Course Pages",
      "Admissions Flow",
      "Faculty Profiles",
      "Brochure Download",
    ],
  },
  manufacturing: {
    name: "Manufacturing",
    icon: Factory,
    accent: "from-emerald-500 to-teal-500",
    href: "/industries/manufacturing/website-development",
    eyebrow: "Manufacturing Website",
    title: "B2B manufacturing website for RFQs and credibility",
    description:
      "Showcase products, capabilities, certifications, and convert visitors into RFQs.",
    chips: ["Product Catalog", "RFQ Flow", "Certifications", "B2B SEO"],
  },
  retail: {
    name: "Retail",
    icon: ShoppingBag,
    accent: "from-fuchsia-500 to-pink-500",
    href: "/industries/retail/ecommerce-website",
    eyebrow: "Retail Website",
    title: "Retail website experience for catalog and order inquiries",
    description:
      "Promote products, offers, store trust, and turn visitors into orders or inquiries.",
    chips: ["Catalog", "Offers", "Order Flow", "Reviews"],
  },
  finance: {
    name: "Finance",
    icon: Landmark,
    accent: "from-slate-700 to-blue-600",
    href: "/industries/finance/website",
    eyebrow: "Finance Website",
    title: "Trust-first finance website experience",
    description:
      "Explain services, build advisor credibility, and convert visitors into consultation leads.",
    chips: [
      "Consultation Flow",
      "Advisor Trust",
      "Service Pages",
      "Secure Forms",
    ],
  },
  insurance: {
    name: "Insurance",
    icon: ShieldCheck,
    accent: "from-blue-600 to-cyan-500",
    href: "/industries/insurance/website",
    eyebrow: "Insurance Website",
    title: "Insurance website experience for policy and claim inquiries",
    description:
      "Present policies, claims, renewals, and connect visitors with the right agent.",
    chips: ["Policy Pages", "Claim Flow", "Renewal CTA", "Agent Inquiry"],
  },
  travel: {
    name: "Travel",
    icon: Plane,
    accent: "from-sky-500 to-blue-600",
    href: "/industries/travel/website",
    eyebrow: "Travel Website",
    title: "Travel website experience for packages and booking inquiries",
    description:
      "Showcase destinations, itineraries, seasonal offers, and convert visitors into trip inquiries.",
    chips: ["Packages", "Destinations", "Booking Flow", "Itinerary"],
  },
  automobile: {
    name: "Automobile",
    icon: Car,
    accent: "from-red-500 to-orange-500",
    href: "/industries/automobile/website",
    eyebrow: "Automobile Website",
    title: "Automobile website experience for inventory and bookings",
    description:
      "Display vehicles, offers, service options, and convert visitors into test drive or service leads.",
    chips: ["Inventory", "Test Drive", "Service Booking", "Offers"],
  },
  "service-business": {
    name: "Service Business",
    icon: Wrench,
    accent: "from-indigo-500 to-sky-500",
    href: "/industries/service-business/website",
    eyebrow: "Service Business Website",
    title: "Service website experience for quotes and appointments",
    description:
      "Explain services, show proof, capture quote requests, and grow local service leads.",
    chips: ["Service Pages", "Quote Flow", "Reviews", "Service Areas"],
  },
};

const healthcareWebsite = getHealthcareSolution("website");

function sharedPreview(
  slug: SharedIndustrySlug,
  page: IndustryWebsitePageData,
): WebsitePreview {
  const override = previewOverrides[slug];

  return {
    ...override,
    slug,
    heroImage: page.heroImage,
    heroBrand: page.heroBrand,
    heroHeadline: page.heroHeadline,
    heroSubtext: page.heroSubtext,
    heroNav: page.heroNav,
    stats: page.heroStats,
  };
}

const websitePreviews: WebsitePreview[] = industryOrder.map((slug) => {
  if (slug === "healthcare") {
    const override = previewOverrides.healthcare;

    return {
      ...override,
      slug,
      heroImage:
        healthcareWebsite?.imageUrl ??
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1400&q=82",
      heroBrand: "HNX Care",
      heroHeadline: "Patient care starts with a trustworthy website",
      heroSubtext:
        healthcareWebsite?.selectorDescription ??
        "Service pages, doctor profiles, appointment requests, mobile UX, and patient-first healthcare SEO.",
      heroNav: ["Services", "Doctors", "Booking", "Resources", "Contact"],
      stats: [
        ["Appointments", "Booking flow"],
        ["Doctors", "Profile trust"],
        ["SEO", "Service pages"],
        ["Mobile", "Patient ready"],
      ],
    };
  }

  return sharedPreview(slug, industryWebsitePages[slug]);
});

export default function ServiceUseCases({ service }: ServiceUseCasesProps) {
  const [activeIndustry, setActiveIndustry] =
    useState<IndustrySlug>("healthcare");

  const selectedPreview = useMemo(
    () =>
      websitePreviews.find((preview) => preview.slug === activeIndustry) ??
      websitePreviews[0],
    [activeIndustry],
  );

  const ActiveIcon = selectedPreview.icon;

  return (
    <section
      className="relative overflow-hidden py-8 lg:py-10"
      aria-label={`${service.title} industry website use cases`}
    >
      <div className="pointer-events-none absolute inset-x-0 top-8 h-[460px] bg-[radial-gradient(circle_at_12%_18%,rgba(14,165,233,0.09),transparent_34%),radial-gradient(circle_at_82%_18%,rgba(124,58,237,0.08),transparent_34%)] dark:bg-[radial-gradient(circle_at_12%_18%,rgba(56,189,248,0.10),transparent_34%),radial-gradient(circle_at_82%_18%,rgba(139,92,246,0.10),transparent_34%)]" />

      <div className="relative mx-auto w-full max-w-full px-3 sm:max-w-[min(92vw,1440px)] sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <div className="grid gap-5 lg:grid-cols-[310px_1fr] lg:items-start">
          <aside className="relative self-start overflow-hidden rounded-[1.6rem] border border-slate-200 bg-white/84 p-3 shadow-[0_20px_55px_rgba(15,23,42,0.07)] backdrop-blur-2xl dark:border-white/10 dark:bg-[#18181B] dark:shadow-[0_24px_80px_rgba(0,0,0,0.45)] lg:p-3.5">
            <div className="mb-3 flex items-start justify-between gap-3 border-b border-slate-100 pb-3 dark:border-white/10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#145cb7] dark:text-cyan-200">
                  Use Cases
                </p>
                <p className="mt-1 text-xs font-normal text-slate-500 dark:text-slate-400">
                  Select industry
                </p>
              </div>

              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-2xl border border-slate-200 bg-slate-50 text-xs font-semibold text-slate-500 dark:border-white/10 dark:bg-[#202024] dark:text-zinc-300">
                {websitePreviews.length}
              </span>
            </div>

            <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth pb-2 pr-1 [scrollbar-width:none] [scrollbar-color:rgba(14,165,233,0.35)_transparent] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden lg:block lg:max-h-[460px] lg:space-y-1.5 lg:overflow-y-auto lg:pr-1 lg:[scrollbar-width:thin]">
              {websitePreviews.map((preview) => {
                const Icon = preview.icon;
                const isActive = preview.slug === activeIndustry;

                return (
                  <button
                    key={preview.slug}
                    type="button"
                    onClick={() => setActiveIndustry(preview.slug)}
                    aria-pressed={isActive}
                    className={`group flex min-w-[148px] shrink-0 snap-start flex-col items-center justify-center gap-2.5 rounded-[1.1rem] border px-3 py-4 text-center transition lg:w-full lg:min-w-0 lg:max-w-none lg:flex-row lg:items-center lg:justify-start lg:p-2.5 lg:text-left ${
                      isActive
                        ? "border-sky-200 bg-sky-50/80 shadow-[0_12px_28px_rgba(14,165,233,0.11)] dark:border-blue-300/20 dark:bg-blue-300/10"
                        : "border-transparent hover:border-slate-200 hover:bg-slate-50 dark:hover:border-white/10 dark:hover:bg-[#202024]"
                    }`}
                  >
                    <span
                      className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${preview.accent} text-white shadow-[0_12px_26px_rgba(15,23,42,0.12)] lg:h-10 lg:w-10`}
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>

                    <span className="min-w-0 lg:flex-1">
                      <span className="block text-sm font-semibold leading-5 text-slate-950 dark:text-white lg:truncate">
                        {preview.name}
                      </span>
                      <span className="mt-0.5 line-clamp-2 block text-xs leading-5 text-slate-500 dark:text-slate-400 lg:line-clamp-1">
                        {preview.eyebrow}
                      </span>
                    </span>

                    <ArrowRight
                      className={`h-4 w-4 shrink-0 transition ${
                        isActive
                          ? "translate-x-0 text-[#145cb7] dark:text-cyan-200"
                          : "text-slate-400 group-hover:translate-x-1"
                      } lg:ml-auto`}
                      aria-hidden="true"
                    />
                  </button>
                );
              })}
            </div>
          </aside>

          <div className="relative w-full max-w-full overflow-hidden rounded-[1.8rem] border border-slate-200 bg-white/88 p-4 shadow-[0_24px_75px_rgba(15,23,42,0.08)] backdrop-blur-2xl dark:border-white/10 dark:bg-[#18181B] dark:shadow-[0_24px_80px_rgba(0,0,0,0.45)] sm:p-5 lg:p-6">
            <div
              className={`pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gradient-to-br ${selectedPreview.accent} opacity-[0.10] blur-3xl`}
            />
            <div className="pointer-events-none absolute bottom-0 right-0 hidden h-full w-[44%] bg-gradient-to-l from-sky-50/70 to-transparent dark:from-sky-500/5 xl:block" />

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedPreview.slug}
                initial={{ opacity: 0, y: 14, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -10, filter: "blur(8px)" }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="relative"
              >
                <Link
                  href={selectedPreview.href}
                  aria-label={`Open ${selectedPreview.name} website solution`}
                  className="group block w-full max-w-full overflow-hidden rounded-[1.55rem] border border-slate-200 bg-white shadow-[0_20px_58px_rgba(15,23,42,0.10)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(15,23,42,0.16)] focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-4 focus-visible:ring-offset-white dark:border-white/10 dark:bg-slate-950/80 dark:focus-visible:ring-offset-slate-950"
                >
                  <div className="relative w-full max-w-full overflow-hidden p-4 sm:p-6 lg:p-7">
                    <div
                      className={`pointer-events-none absolute -left-16 -top-20 h-56 w-56 rounded-full bg-gradient-to-br ${selectedPreview.accent} opacity-[0.13] blur-3xl`}
                    />
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(59,130,246,0.10),transparent_30%)] dark:bg-[radial-gradient(circle_at_78%_18%,rgba(56,189,248,0.08),transparent_32%)]" />

                    <div className="relative grid min-w-0 gap-7 xl:grid-cols-[0.88fr_1.12fr] xl:items-center">
                      <div className="min-w-0">
                        <div className="flex items-center gap-3">
                          <span
                            className={`grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br ${selectedPreview.accent} text-white shadow-[0_16px_36px_rgba(14,165,233,0.18)]`}
                          >
                            <ActiveIcon className="h-5 w-5" aria-hidden="true" />
                          </span>

                          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#145cb7] dark:text-cyan-200">
                            {selectedPreview.eyebrow}
                          </p>
                        </div>

                        <h3 className="mt-5 max-w-2xl text-balance break-words text-[clamp(2rem,8vw,3rem)] font-semibold leading-[1.05] tracking-[-0.045em] text-slate-950 antialiased dark:text-white lg:text-4xl">
                          {selectedPreview.title}
                        </h3>

                        <p className="mt-4 max-w-2xl text-sm font-normal leading-7 text-slate-600 antialiased dark:text-slate-300 lg:text-base">
                          {selectedPreview.description}
                        </p>

                        <div className="mt-5 flex max-w-full flex-wrap gap-2">
                          {selectedPreview.chips.map((chip) => (
                            <span
                              key={chip}
                              className="inline-flex max-w-full items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[11px] font-semibold text-slate-600 shadow-sm dark:border-white/10 dark:bg-white/7 dark:text-slate-300"
                            >
                              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                              {chip}
                            </span>
                          ))}
                        </div>

                        <div className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                          <span
                            className={`inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r ${selectedPreview.accent} px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_38px_rgba(37,99,235,0.18)] transition group-hover:shadow-[0_22px_48px_rgba(37,99,235,0.26)] sm:w-auto`}
                          >
                            View Website Solution
                            <ArrowRight className="h-4 w-4" />
                          </span>
                          <span className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-xs font-semibold text-slate-600 dark:border-white/10 dark:bg-white/7 dark:text-slate-300 sm:w-auto">
                            <MonitorSmartphone className="h-4 w-4 text-[#145cb7] dark:text-cyan-200" />
                            Website / Lead Flow / SEO / Analytics
                          </span>
                        </div>
                      </div>

                      <HeroMockup preview={selectedPreview} />
                    </div>

                    <div className="relative mt-5 grid max-w-full grid-cols-2 gap-2 sm:grid-cols-4">
                      {selectedPreview.stats.slice(0, 4).map(([value, label]) => (
                        <div
                          key={`${value}-${label}`}
                          className="rounded-2xl border border-slate-200 bg-white/88 p-3 shadow-sm dark:border-white/10 dark:bg-white/7"
                        >
                          <p className="text-sm font-semibold text-slate-950 dark:text-white">
                            {value}
                          </p>
                          <p className="mt-1 text-[10px] leading-4 text-slate-500 dark:text-slate-400">
                            {label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroMockup({ preview }: { preview: WebsitePreview }) {
  return (
    <div className="relative w-full max-w-full overflow-hidden">
      <div
        className={`pointer-events-none absolute -right-6 -top-8 h-44 w-44 rounded-full bg-gradient-to-br ${preview.accent} opacity-[0.16] blur-3xl`}
      />

      <div className="w-full max-w-full overflow-hidden rounded-[1.45rem] border border-slate-200 bg-white p-3 shadow-[0_22px_65px_rgba(15,23,42,0.14)] dark:border-white/10 dark:bg-white/[0.06]">
        <div className="w-full max-w-full overflow-hidden rounded-[1.05rem] bg-slate-50 dark:bg-slate-950">
          <div className="flex min-w-0 items-center justify-between gap-3 border-b border-slate-100 bg-white px-4 py-3 dark:border-white/10 dark:bg-white/[0.06]">
            <div className="flex min-w-0 items-center gap-2">
              <Globe2 className="h-4 w-4 shrink-0 text-[#145cb7] dark:text-cyan-200" />
              <span className="truncate text-xs font-black text-slate-950 dark:text-white">
                {preview.heroBrand}
              </span>
            </div>

            <div className="hidden gap-4 text-[10px] font-bold text-slate-500 dark:text-slate-400 sm:flex">
              {preview.heroNav.slice(0, 4).map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <span
              className={`shrink-0 rounded-lg bg-gradient-to-r ${preview.accent} px-3 py-2 text-[10px] font-black text-white`}
            >
              Start
            </span>
          </div>

          <div className="grid min-h-[280px] min-w-0 gap-4 bg-gradient-to-br from-blue-50 to-white p-4 dark:from-blue-950/30 dark:to-slate-950 sm:p-5 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div className="min-w-0">
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#145cb7] dark:text-cyan-200">
                Live website preview
              </p>
              <h4 className="mt-3 text-2xl font-black leading-tight tracking-[-0.04em] text-slate-950 dark:text-white">
                {preview.heroHeadline}
              </h4>
              <p className="mt-3 line-clamp-3 text-xs leading-5 text-slate-600 dark:text-slate-300">
                {preview.heroSubtext}
              </p>

              <div className="mt-4 flex items-center gap-2">
                <span
                  className={`h-2 flex-1 rounded-full bg-gradient-to-r ${preview.accent}`}
                />
                <span className="h-2 w-10 rounded-full bg-slate-200 dark:bg-white/10" />
                <span className="h-2 w-6 rounded-full bg-slate-200 dark:bg-white/10" />
              </div>
            </div>

            <div
              className="min-h-[210px] w-full max-w-full rounded-[1rem] bg-cover bg-center shadow-[inset_0_0_0_1px_rgba(255,255,255,0.45)]"
              style={{ backgroundImage: `url(${preview.heroImage})` }}
            >
              <div className="flex h-full min-h-[210px] items-end rounded-[1rem] bg-gradient-to-t from-slate-950/68 via-slate-950/10 to-transparent p-4">
                <div className="w-full max-w-full overflow-hidden rounded-2xl bg-white/92 p-3 shadow-lg backdrop-blur dark:bg-slate-950/84">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-xs font-black text-slate-950 dark:text-white">
                      Conversion path
                    </span>
                    <BarChart3 className="h-4 w-4 text-emerald-500" />
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    {preview.chips.slice(0, 3).map((chip, index) => (
                      <div
                        key={chip}
                        className="rounded-xl bg-slate-50 p-2 dark:bg-white/7"
                      >
                        <span
                          className={`grid h-6 w-6 place-items-center rounded-lg bg-gradient-to-br ${preview.accent} text-[10px] font-black text-white`}
                        >
                          {index + 1}
                        </span>
                        <p className="mt-2 line-clamp-2 text-[10px] font-bold leading-3 text-slate-600 dark:text-slate-300">
                          {chip}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
