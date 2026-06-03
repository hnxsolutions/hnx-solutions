"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  Bell,
  ChevronRight,
  Cloud,
  LockKeyhole,
  Play,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
} from "lucide-react";
import type { IndustryMobileAppPageData } from "../industryMobileAppData";

type HeroAccent = "blue" | "violet" | "emerald" | "cyan" | "orange";

type IndustryHeroPreviewConfig = {
  badgeLabel: string;
  floatingTitle: string;
  floatingText: string;
  notificationTitle: string;
  notificationText: string;
  resultTitle: string;
  resultText: string;
  phoneGreeting: string;
  phoneTitle: string;
  phoneSubtitle: string;
  phoneAction: string;
  phoneMetricOne: string;
  phoneMetricTwo: string;
  accent: HeroAccent;
};

type HeroPhoneRow = {
  label: string;
  value: string;
  icon: LucideIcon;
};

type AccentClasses = {
  badge: string;
  chipIcon: string;
  cta: string;
  line: string;
  phonePanel: string;
  ring: string;
};

const fallbackHeroPreviewConfig: IndustryHeroPreviewConfig = {
  badgeLabel: "Mobile App Industry Solution",
  floatingTitle: "Live App Activity",
  floatingText: "New requests are syncing now",
  notificationTitle: "Push notification",
  notificationText: "A new mobile update was sent successfully",
  resultTitle: "App Overview",
  resultText: "Real-time app performance",
  phoneGreeting: "Good morning,",
  phoneTitle: "Mobile Dashboard",
  phoneSubtitle: "Connected business app",
  phoneAction: "Open App Workflow",
  phoneMetricOne: "Active",
  phoneMetricTwo: "Synced",
  accent: "blue",
};

const industryHeroPreviewConfig: Record<string, IndustryHeroPreviewConfig> = {
  healthcare: {
    badgeLabel: "Healthcare Industry",
    floatingTitle: "Doctor available",
    floatingText: "Dr. Ananya Sharma is available now",
    notificationTitle: "Appointment booked",
    notificationText: "Your appointment is confirmed for today",
    resultTitle: "Prescription reminder",
    resultText: "Take your medication on time for better results.",
    phoneGreeting: "Good morning,",
    phoneTitle: "Sara Johnson",
    phoneSubtitle: "City Care Hospital",
    phoneAction: "Book Appointment",
    phoneMetricOne: "Patients",
    phoneMetricTwo: "Reports",
    accent: "cyan",
  },
  education: {
    badgeLabel: "Education Industry",
    floatingTitle: "New Assignment",
    floatingText: "History Essay - The Renaissance",
    notificationTitle: "Quiz Scored",
    notificationText: "You achieved 92% in Biology Quiz",
    resultTitle: "Parent Communication",
    resultText: "Message from Principal: School Update.",
    phoneGreeting: "Good morning,",
    phoneTitle: "Alex Carter",
    phoneSubtitle: "Greenwood International School",
    phoneAction: "Advanced Mathematics",
    phoneMetricOne: "Classes",
    phoneMetricTwo: "Updates",
    accent: "violet",
  },
  manufacturing: {
    badgeLabel: "Manufacturing Industry",
    floatingTitle: "RFQ Received",
    floatingText: "New RFQ from ABC Industries",
    notificationTitle: "Order Approved",
    notificationText: "Order has been approved",
    resultTitle: "Dispatch Tracking",
    resultText: "Order is on the way and live tracked.",
    phoneGreeting: "Hello,",
    phoneTitle: "Arjun",
    phoneSubtitle: "ABC Industries Operations",
    phoneAction: "Today's Overview",
    phoneMetricOne: "Orders",
    phoneMetricTwo: "Dispatch",
    accent: "orange",
  },
  insurance: {
    badgeLabel: "Insurance Industry Solution",
    floatingTitle: "Policy Dashboard",
    floatingText: "Claims and renewals synced",
    notificationTitle: "Push notification",
    notificationText: "Renewal reminder sent",
    resultTitle: "Claims Overview",
    resultText: "Faster policy requests and cleaner operations.",
    phoneGreeting: "Good morning,",
    phoneTitle: "PolicyDesk",
    phoneSubtitle: "Secure insurance workspace",
    phoneAction: "Get Policy Quote",
    phoneMetricOne: "Policies",
    phoneMetricTwo: "Claims",
    accent: "emerald",
  },
  "real-estate": {
    badgeLabel: "Real Estate Industry Solution",
    floatingTitle: "Site visit ready",
    floatingText: "Buyer visit confirmed for today",
    notificationTitle: "Broker notified",
    notificationText: "Visit details sent to assigned broker",
    resultTitle: "Lead pipeline",
    resultText: "Listings, visits, and follow-ups stay connected.",
    phoneGreeting: "Good morning,",
    phoneTitle: "PropertyFlow",
    phoneSubtitle: "Buyer and broker workspace",
    phoneAction: "Book Site Visit",
    phoneMetricOne: "Listings",
    phoneMetricTwo: "Visits",
    accent: "blue",
  },
  retail: {
    badgeLabel: "Retail Industry Solution",
    floatingTitle: "Live Orders",
    floatingText: "Repeat orders are moving through the app",
    notificationTitle: "Offer sent",
    notificationText: "New offer sent to active customers",
    resultTitle: "Loyalty activity",
    resultText: "Catalog, offers, and repeat buying stay in sync.",
    phoneGreeting: "Welcome back,",
    phoneTitle: "RetailGo",
    phoneSubtitle: "Shopping experience",
    phoneAction: "View Offers",
    phoneMetricOne: "Catalog",
    phoneMetricTwo: "Orders",
    accent: "violet",
  },
  finance: {
    badgeLabel: "Finance Industry Solution",
    floatingTitle: "Consultation request",
    floatingText: "New client inquiry is ready for advisor review",
    notificationTitle: "Document reminder",
    notificationText: "Checklist update sent securely",
    resultTitle: "Advisor pipeline",
    resultText: "Leads, documents, and follow-ups stay controlled.",
    phoneGreeting: "Good morning,",
    phoneTitle: "FinanceDesk",
    phoneSubtitle: "Client advisory workspace",
    phoneAction: "Review Client",
    phoneMetricOne: "Leads",
    phoneMetricTwo: "Docs",
    accent: "blue",
  },
  travel: {
    badgeLabel: "Travel Industry Solution",
    floatingTitle: "Booking Inquiry",
    floatingText: "Traveler package interest is ready for follow-up",
    notificationTitle: "Trip alert",
    notificationText: "Itinerary update sent to traveler",
    resultTitle: "Trip operations",
    resultText: "Packages, vouchers, and support updates stay together.",
    phoneGreeting: "Hello,",
    phoneTitle: "TripMate",
    phoneSubtitle: "Booking and itinerary app",
    phoneAction: "Plan Trip",
    phoneMetricOne: "Trips",
    phoneMetricTwo: "Alerts",
    accent: "cyan",
  },
  "service-business": {
    badgeLabel: "Service Business Solution",
    floatingTitle: "Quote request",
    floatingText: "New job details are ready for assignment",
    notificationTitle: "Team assigned",
    notificationText: "Customer received job status update",
    resultTitle: "Service workflow",
    resultText: "Quotes, bookings, jobs, and reviews stay trackable.",
    phoneGreeting: "Good morning,",
    phoneTitle: "ServiceDesk",
    phoneSubtitle: "Booking and field team app",
    phoneAction: "Assign Team",
    phoneMetricOne: "Jobs",
    phoneMetricTwo: "Teams",
    accent: "emerald",
  },
  automobile: {
    badgeLabel: "Automobile Industry Solution",
    floatingTitle: "Test drive booked",
    floatingText: "Customer selected vehicle and showroom slot",
    notificationTitle: "Dealer update",
    notificationText: "Sales team received the test-drive request",
    resultTitle: "Dealer activity",
    resultText: "Inventory, test drives, service, and offers stay connected.",
    phoneGreeting: "Good morning,",
    phoneTitle: "DealerGo",
    phoneSubtitle: "Showroom operations app",
    phoneAction: "Book Test Drive",
    phoneMetricOne: "Cars",
    phoneMetricTwo: "Visits",
    accent: "orange",
  },
};

export default function IndustryMobileAppPreviewHero({
  data,
}: {
  data: IndustryMobileAppPageData;
}) {
  const config = getHeroPreviewConfig(data);
  const accent = getAccentClasses(config.accent);
  const [titleStart, titleEnd] = splitHighlightedText(data.title, data.highlight);
  const heroChips = getDisplayHeroChips(data);
  const BadgeIcon = data.heroChips[0]?.icon ?? Smartphone;

  return (
    <section className="relative isolate overflow-visible bg-transparent px-5 py-0 text-slate-950 sm:px-10 lg:px-12 xl:px-10 dark:text-white">
      <div className="pointer-events-none absolute left-1/2 top-0 h-full w-screen -translate-x-1/2 bg-[radial-gradient(ellipse_at_74%_42%,rgba(34,211,238,0.14),transparent_34%),radial-gradient(ellipse_at_96%_92%,rgba(168,85,247,0.12),transparent_28%),linear-gradient(180deg,#ffffff,rgba(248,250,252,0.92))] dark:bg-[radial-gradient(ellipse_at_74%_42%,rgba(34,211,238,0.10),transparent_34%),radial-gradient(ellipse_at_96%_92%,rgba(168,85,247,0.10),transparent_28%),linear-gradient(180deg,#020617,rgba(15,23,42,0.95))]" />

      <div className="relative mx-auto grid min-h-[calc(100svh-5.2rem)] max-w-[1640px] gap-8 pb-9 pt-8 lg:grid-cols-[minmax(0,0.46fr)_minmax(0,0.54fr)] lg:items-start lg:gap-6">
        <div className="relative z-30 min-w-0 max-w-[800px] pt-0 sm:pt-1 lg:pt-3 xl:pt-4">
          <Badge accent={accent.badge}>
            <BadgeIcon className="h-3.5 w-3.5" aria-hidden="true" />
            {config.badgeLabel}
          </Badge>

          <h1 className="mt-5 max-w-[20rem] break-words text-[2rem] font-extrabold leading-[1.08] tracking-[-0.025em] text-slate-950 sm:max-w-[760px] sm:text-[clamp(2.2rem,3vw,3.5rem)] sm:leading-[1.06] lg:text-[clamp(1.95rem,2.8vw,2.55rem)] xl:max-w-[800px] xl:text-[clamp(2.55rem,3.1vw,3.9rem)] dark:text-white">
            {titleStart}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-600 bg-clip-text text-transparent">
              {data.highlight}
            </span>
            {titleEnd}
          </h1>

          <span className={`mt-4 block h-1.5 w-24 rounded-full ${accent.line}`} />

          <p className="mt-5 max-w-[20rem] text-base leading-7 text-slate-600 sm:max-w-[650px] xl:text-lg xl:leading-8 dark:text-slate-300">
            {data.description}
          </p>

          <div className="mt-7 flex max-w-[20rem] flex-col gap-3 sm:max-w-none sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex min-h-12 w-full items-center justify-center gap-3 whitespace-nowrap rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-600 px-6 py-3 text-sm font-extrabold text-white shadow-[0_22px_44px_rgba(37,99,235,0.24)] transition hover:-translate-y-0.5 hover:shadow-[0_26px_52px_rgba(37,99,235,0.3)] sm:w-auto lg:px-4 lg:text-xs xl:min-h-14 xl:px-7 xl:py-4 xl:text-sm dark:shadow-[0_22px_44px_rgba(59,130,246,0.18)]"
            >
              Book a Consultation
            </Link>

            <Link
              href="#mobile-app-experience-gallery"
              className="inline-flex min-h-12 w-full items-center justify-center gap-3 whitespace-nowrap rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-extrabold text-slate-950 shadow-[0_16px_34px_rgba(15,23,42,0.08)] transition hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50/40 sm:w-auto lg:gap-2 lg:px-4 lg:text-xs xl:min-h-14 xl:gap-3 xl:px-7 xl:py-4 xl:text-sm dark:border-white/15 dark:bg-white/[0.06] dark:text-white dark:hover:bg-white/10"
            >
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-blue-100 bg-blue-50 text-blue-600 lg:h-6 lg:w-6 xl:h-8 xl:w-8 dark:border-blue-300/20 dark:bg-blue-400/10 dark:text-blue-300">
                <Play className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
              </span>
              View App Preview
            </Link>
          </div>

          <div className="mt-6 grid max-w-[20rem] grid-cols-1 gap-3 sm:max-w-[720px] sm:grid-cols-2 xl:max-w-[650px] xl:grid-cols-2">
            {heroChips.map((chip, index) => {
              const Icon = chip.icon;

              return (
                <div
                  key={`${chip.label}-${index}`}
                  className="inline-flex min-h-[4.25rem] min-w-0 max-w-full items-center gap-3 overflow-hidden rounded-2xl border border-slate-200/80 bg-white/88 px-3.5 py-3 text-slate-800 shadow-[0_12px_26px_rgba(15,23,42,0.06)] backdrop-blur transition hover:-translate-y-0.5 hover:border-blue-200 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-100"
                >
                  <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl ${chip.tone ?? accent.chipIcon}`}>
                    <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1 overflow-hidden leading-tight">
                    <span className="block line-clamp-2 text-[12px] font-extrabold leading-[1.15] text-slate-800 lg:block dark:text-slate-100">
                      {chip.label}
                    </span>
                    <span className="mt-1 block line-clamp-1 text-[10px] font-semibold leading-4 text-slate-500 dark:text-slate-400">
                      {chip.caption}
                    </span>
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <HeroVisualStage data={data} config={config} accent={accent} />
      </div>
    </section>
  );
}

function HeroVisualStage({
  data,
  config,
  accent,
}: {
  data: IndustryMobileAppPageData;
  config: IndustryHeroPreviewConfig;
  accent: AccentClasses;
}) {
  const phoneRows = getPhoneRows(data);

  return (
    <div
      className="relative z-10 mx-auto h-[560px] w-full max-w-[760px] min-w-0 overflow-visible sm:h-[590px] lg:h-[430px] lg:max-w-none xl:h-[600px]"
      style={{ transform: "translateY(-34px)" }}
    >
      <div className={`pointer-events-none absolute left-[52%] top-[54%] h-[31rem] w-[31rem] -translate-x-1/2 -translate-y-1/2 rounded-full ${accent.ring}`} />
      <div className="pointer-events-none absolute left-[52%] top-[54%] h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/70 dark:border-cyan-300/10" />
      <div className="pointer-events-none absolute left-[52%] top-[54%] h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-200/55 dark:border-violet-300/10" />
      <div className="pointer-events-none absolute left-[52%] top-[55%] h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/12 blur-3xl dark:bg-cyan-300/10" />

      <div className="absolute left-1/2 top-[53%] z-30 w-[235px] -translate-x-1/2 -translate-y-1/2 sm:w-[260px] lg:left-[52%] lg:top-[53%] lg:w-[190px] xl:top-[54%] xl:w-[272px] 2xl:w-[282px]">
        <HeroPhoneFrame data={data} config={config} phoneRows={phoneRows} accent={accent} />
      </div>

      <HeroFloatCard
        className="-left-[4%] top-[41%] hidden w-[150px] lg:block xl:left-[4%] xl:w-[190px] 2xl:left-[7%]"
      >
        <p className="text-sm font-extrabold leading-5 text-slate-950 dark:text-white">
          {config.floatingTitle}
        </p>
        <p className="mt-1.5 text-xs leading-5 text-slate-600 dark:text-slate-300">
          {config.floatingText}
        </p>
        <span className="mt-3 inline-flex rounded-lg bg-slate-100 px-3 py-2 text-[11px] font-bold text-slate-800 dark:bg-white/10 dark:text-slate-100">
          {config.phoneAction}
        </span>
      </HeroFloatCard>

      <HeroFloatCard
        className="-right-[2%] top-[21%] hidden w-[150px] lg:block xl:right-[4%] xl:top-[23%] xl:w-[190px] 2xl:right-[8%]"
      >
        <p className="text-sm font-extrabold leading-5 text-slate-950 dark:text-white">
          {config.notificationTitle}
        </p>
        <p className="mt-1.5 text-xs leading-5 text-slate-600 dark:text-slate-300">
          {config.notificationText}
        </p>
      </HeroFloatCard>

      <HeroFloatCard
        className="-right-[8%] bottom-[18%] hidden w-[165px] lg:block xl:right-[5%] xl:bottom-[23%] xl:w-[205px] 2xl:right-[7%]"
      >
        <p className="text-sm font-extrabold leading-5 text-slate-950 dark:text-white">
          {config.resultTitle}
        </p>
        <p className="mt-1.5 text-xs leading-5 text-slate-600 dark:text-slate-300">
          {config.resultText}
        </p>
      </HeroFloatCard>
    </div>
  );
}

function HeroPhoneFrame({
  data,
  config,
  phoneRows,
  accent,
}: {
  data: IndustryMobileAppPageData;
  config: IndustryHeroPreviewConfig;
  phoneRows: HeroPhoneRow[];
  accent: AccentClasses;
}) {
  const navItems = data.heroVisual.navItems.slice(0, 4).length
    ? data.heroVisual.navItems.slice(0, 4)
    : ["Home", "Tasks", "Updates", "Profile"];

  return (
    <div className="rounded-[2.55rem] border-[7px] border-slate-950 bg-slate-950 p-1.5 shadow-[0_28px_70px_rgba(15,23,42,0.28)] dark:border-slate-800">
      <div className="relative h-[430px] overflow-hidden rounded-[2rem] bg-white dark:bg-slate-950 sm:h-[480px] lg:h-[340px] xl:h-[505px] 2xl:h-[520px]">
        <div className="relative flex h-8 items-center justify-between px-4 pt-2 text-[10px] font-black text-slate-950 dark:text-white">
          <span>9:41</span>
          <span className="absolute left-1/2 top-2 h-5 w-16 -translate-x-1/2 rounded-full bg-slate-950 dark:bg-slate-800" />
          <span className="flex items-center gap-1">
            <span className="h-2 w-3 rounded-[2px] border border-slate-950 dark:border-white" />
            <span className="h-2 w-3 rounded-[2px] bg-slate-950 dark:bg-white" />
          </span>
        </div>

        <div className="flex items-start justify-between px-4 pb-3 pt-2">
          <div className="min-w-0">
            <p className="text-xs font-bold text-slate-500 dark:text-slate-400">
              {config.phoneGreeting}
            </p>
            <p className="truncate text-base font-black text-slate-950 xl:text-lg dark:text-white">
              {config.phoneTitle}
            </p>
            <p className="mt-0.5 truncate text-[10px] font-bold text-slate-500 dark:text-slate-400">
              {config.phoneSubtitle}
            </p>
          </div>
          <span className="relative grid h-8 w-8 shrink-0 place-items-center rounded-full bg-slate-50 text-slate-700 dark:bg-white/10 dark:text-slate-200">
            <Bell className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="absolute right-1 top-1 h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white dark:ring-slate-950" />
          </span>
        </div>

        <div className="px-4">
          <div
            className={`relative overflow-hidden rounded-2xl border p-3.5 shadow-[0_12px_28px_rgba(15,23,42,0.08)] ${accent.phonePanel}`}
          >
            <div className="relative flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-[11px] font-extrabold text-slate-700 dark:text-slate-200">
                  {data.heroVisual.screenTitle}
                </p>
                <p className="mt-1 line-clamp-2 text-sm font-black leading-snug text-slate-950 dark:text-white">
                  {config.phoneAction || data.heroVisual.actionLabel}
                </p>
                <p className="mt-1 line-clamp-2 text-[10px] font-semibold leading-4 text-slate-600 dark:text-slate-300">
                  {data.heroVisual.screenSubtitle}
                </p>
              </div>
              <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
            </div>
            <div className="mt-3 flex flex-wrap gap-2 text-[10px] font-bold text-slate-600 dark:text-slate-300">
              <span>{phoneRows[0]?.label ?? config.phoneMetricOne}</span>
              <span>/</span>
              <span>{phoneRows[1]?.value ?? config.phoneMetricTwo}</span>
            </div>
          </div>
        </div>

        <div className="px-4 pt-4">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-xs font-black text-slate-950 dark:text-white">Quick Actions</p>
            <span className="text-[10px] font-black text-blue-600 dark:text-blue-300">View all</span>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {phoneRows.slice(0, 4).map((row, index) => {
              const Icon = row.icon;

              return (
                <div key={`${row.label}-${index}`} className="min-w-0 text-center">
                  <span
                    className={`mx-auto grid h-10 w-10 place-items-center rounded-xl ${
                      index === 0
                        ? accent.chipIcon
                        : "bg-slate-50 text-slate-500 ring-1 ring-slate-200 dark:bg-white/10 dark:text-slate-300 dark:ring-white/10"
                    }`}
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <p className="mt-1.5 line-clamp-2 min-h-[22px] text-[8px] font-extrabold leading-[11px] text-slate-700 dark:text-slate-200">
                    {row.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="px-4 pt-4">
          <p className="mb-2 text-xs font-black text-slate-950 dark:text-white">Learning Overview</p>
          <div className="grid grid-cols-2 gap-2.5">
            {phoneRows.slice(0, 2).map((row, index) => {
              const Icon = row.icon;

              return (
                <div
                  key={`metric-${row.label}`}
                  className="min-w-0 rounded-2xl border border-slate-100 bg-slate-50 px-3 py-3 dark:border-white/10 dark:bg-white/[0.06]"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`grid h-7 w-7 shrink-0 place-items-center rounded-lg ${
                        index === 0 ? accent.chipIcon : "bg-violet-50 text-violet-600 dark:bg-violet-400/10 dark:text-violet-300"
                      }`}
                    >
                      <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-[9px] font-bold text-slate-500 dark:text-slate-400">
                        {row.label}
                      </p>
                      <p className="truncate text-sm font-black text-slate-950 dark:text-white">
                        {row.value}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="absolute inset-x-4 bottom-3 grid grid-cols-4 gap-1 border-t border-slate-100 bg-white/95 pt-2.5 dark:border-white/10 dark:bg-slate-950/95">
          {navItems.map((item, index) => (
            <div
              key={`${item}-${index}`}
              className={`rounded-lg px-1 py-1.5 text-center text-[8px] font-black ${
                index === 0
                  ? "bg-blue-600 text-white"
                  : "bg-slate-100 text-slate-500 dark:bg-white/10 dark:text-slate-300"
              }`}
            >
              <span className="block truncate">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function HeroFloatCard({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) {
  return (
    <div
      className={`absolute z-40 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-[0_18px_42px_rgba(15,23,42,0.14)] dark:border-white/10 dark:bg-slate-900/95 ${className}`}
    >
      {children}
    </div>
  );
}

function Badge({
  children,
  accent,
}: {
  children: ReactNode;
  accent: string;
}) {
  return (
    <div className={`inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs font-semibold ${accent}`}>
      {children}
    </div>
  );
}

function getHeroPreviewConfig(data: IndustryMobileAppPageData): IndustryHeroPreviewConfig {
  const configured = industryHeroPreviewConfig[data.industrySlug];
  const dataDefaults: IndustryHeroPreviewConfig = {
    ...fallbackHeroPreviewConfig,
    badgeLabel: `${data.industryName} Industry Solution`,
    floatingText: data.heroVisual.floatingMetric,
    notificationText: data.heroVisual.notification,
    phoneTitle: data.heroVisual.screenTitle,
    phoneAction: data.heroVisual.actionLabel,
  };

  return configured ? { ...dataDefaults, ...configured } : dataDefaults;
}

function getPhoneRows(data: IndustryMobileAppPageData): HeroPhoneRow[] {
  const rows = data.heroVisual.cards.length
    ? data.heroVisual.cards
    : data.heroChips.map((chip, index) => ({
        label: chip.label,
        value: data.heroStats[index]?.[1] ?? data.demoContent.catalogTabLabel,
        icon: chip.icon,
      }));

  return [
    ...rows,
    {
      label: "Live Sync",
      value: data.heroVisual.floatingMetric,
      icon: Sparkles,
    },
    {
      label: "Secure Access",
      value: "Role based",
      icon: ShieldCheck,
    },
  ].slice(0, 4);
}

function getDisplayHeroChips(data: IndustryMobileAppPageData) {
  const fallback = [
    { label: "Secure", caption: "Private access", icon: ShieldCheck, tone: "bg-blue-50 text-blue-600 dark:bg-blue-400/10 dark:text-blue-300" },
    { label: "Enterprise", caption: "Scalable app", icon: LockKeyhole, tone: "bg-emerald-50 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-300" },
    { label: "Rating", caption: "4.8 / 5", icon: Star, tone: "bg-amber-50 text-amber-600 dark:bg-amber-400/10 dark:text-amber-300" },
    { label: "Uptime", caption: "99.9%", icon: Cloud, tone: "bg-blue-50 text-blue-600 dark:bg-blue-400/10 dark:text-blue-300" },
  ];

  if (!data.heroChips.length) return fallback;

  return data.heroChips.slice(0, 4).map((chip, index) => ({
    label: chip.label,
    caption: data.heroStats[index]?.[1] ?? fallback[index]?.caption ?? "App ready",
    icon: chip.icon,
    tone: fallback[index]?.tone,
  }));
}

function splitHighlightedText(title: string, highlight: string) {
  if (!highlight) return [title, ""];

  const highlightIndex = title.indexOf(highlight);

  if (highlightIndex === -1) {
    return [`${title} `, ""];
  }

  return [
    title.slice(0, highlightIndex),
    title.slice(highlightIndex + highlight.length),
  ];
}

function getCompactChipLabel(label: string) {
  const firstWord = label.split(" ")[0] ?? label;

  if (firstWord.toLowerCase().startsWith("admission")) {
    return "Adm.";
  }

  return firstWord;
}

function getAccentClasses(accent: HeroAccent): AccentClasses {
  if (accent === "violet") {
    return {
      badge: "bg-violet-50 text-violet-700 dark:bg-violet-400/10 dark:text-violet-300",
      chipIcon: "bg-violet-50 text-violet-600 dark:bg-violet-400/10 dark:text-violet-300",
      cta: "bg-gradient-to-r from-blue-600 to-violet-600",
      line: "bg-gradient-to-r from-blue-600 to-violet-600",
      phonePanel: "border-violet-100 bg-gradient-to-br from-violet-50 via-white to-cyan-50 dark:border-violet-300/10 dark:bg-gradient-to-br dark:from-violet-400/10 dark:via-white/[0.04] dark:to-cyan-400/10",
      ring: "bg-[radial-gradient(ellipse_at_center,rgba(45,212,191,0.20),rgba(124,58,237,0.08)_46%,transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(45,212,191,0.12),rgba(124,58,237,0.08)_46%,transparent_70%)]",
    };
  }

  if (accent === "emerald") {
    return {
      badge: "bg-emerald-50 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300",
      chipIcon: "bg-emerald-50 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-300",
      cta: "bg-gradient-to-r from-blue-600 to-emerald-600",
      line: "bg-gradient-to-r from-blue-600 to-emerald-500",
      phonePanel: "border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-cyan-50 dark:border-emerald-300/10 dark:bg-gradient-to-br dark:from-emerald-400/10 dark:via-white/[0.04] dark:to-cyan-400/10",
      ring: "bg-[radial-gradient(ellipse_at_center,rgba(45,212,191,0.20),rgba(16,185,129,0.08)_46%,transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(45,212,191,0.12),rgba(16,185,129,0.08)_46%,transparent_70%)]",
    };
  }

  if (accent === "cyan") {
    return {
      badge: "bg-cyan-50 text-cyan-700 dark:bg-cyan-400/10 dark:text-cyan-300",
      chipIcon: "bg-cyan-50 text-cyan-600 dark:bg-cyan-400/10 dark:text-cyan-300",
      cta: "bg-gradient-to-r from-blue-600 to-cyan-600",
      line: "bg-gradient-to-r from-blue-600 to-cyan-500",
      phonePanel: "border-cyan-100 bg-gradient-to-br from-cyan-50 via-white to-blue-50 dark:border-cyan-300/10 dark:bg-gradient-to-br dark:from-cyan-400/10 dark:via-white/[0.04] dark:to-blue-400/10",
      ring: "bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.20),rgba(59,130,246,0.08)_46%,transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.12),rgba(59,130,246,0.08)_46%,transparent_70%)]",
    };
  }

  if (accent === "orange") {
    return {
      badge: "bg-orange-50 text-orange-700 dark:bg-orange-400/10 dark:text-orange-300",
      chipIcon: "bg-orange-50 text-orange-600 dark:bg-orange-400/10 dark:text-orange-300",
      cta: "bg-gradient-to-r from-blue-600 to-orange-500",
      line: "bg-gradient-to-r from-blue-600 to-orange-500",
      phonePanel: "border-orange-100 bg-gradient-to-br from-orange-50 via-white to-cyan-50 dark:border-orange-300/10 dark:bg-gradient-to-br dark:from-orange-400/10 dark:via-white/[0.04] dark:to-cyan-400/10",
      ring: "bg-[radial-gradient(ellipse_at_center,rgba(45,212,191,0.18),rgba(249,115,22,0.08)_46%,transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(45,212,191,0.11),rgba(249,115,22,0.08)_46%,transparent_70%)]",
    };
  }

  return {
    badge: "bg-blue-50 text-blue-700 dark:bg-blue-400/10 dark:text-blue-300",
    chipIcon: "bg-blue-50 text-blue-600 dark:bg-blue-400/10 dark:text-blue-300",
    cta: "bg-gradient-to-r from-blue-600 to-violet-600",
    line: "bg-gradient-to-r from-blue-600 to-violet-600",
    phonePanel: "border-blue-100 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:border-blue-300/10 dark:bg-gradient-to-br dark:from-blue-400/10 dark:via-white/[0.04] dark:to-cyan-400/10",
    ring: "bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.18),rgba(59,130,246,0.08)_46%,transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.11),rgba(59,130,246,0.08)_46%,transparent_70%)]",
  };
}
