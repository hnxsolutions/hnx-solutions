"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BarChart3,
  Bell,
  CalendarCheck,
  CheckCircle2,
  ChevronRight,
  Cloud,
  LockKeyhole,
  Play,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";
import type { IndustryMobileAppPageData } from "./industryMobileAppData";

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
    badgeLabel: "Education Industry Solution",
    floatingTitle: "Live Admissions",
    floatingText: "12 new inquiries this week",
    notificationTitle: "Parent Notification Sent",
    notificationText: "Fee reminder sent successfully",
    resultTitle: "Attendance Overview",
    resultText: "92% average attendance this month.",
    phoneGreeting: "Good morning,",
    phoneTitle: "Ananya",
    phoneSubtitle: "Greenwood International School",
    phoneAction: "Today’s Classes",
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
    phoneAction: "Today’s Overview",
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

  return (
    <section className="relative isolate overflow-hidden px-5 py-0 sm:px-10 lg:px-12 xl:px-14">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_28%_24%,rgba(59,130,246,0.11),transparent_34%),radial-gradient(ellipse_at_78%_20%,rgba(124,58,237,0.12),transparent_34%),linear-gradient(115deg,rgba(255,255,255,0.99),rgba(248,250,252,0.96)_48%,rgba(239,246,255,0.9))] dark:bg-[radial-gradient(ellipse_at_28%_24%,rgba(59,130,246,0.16),transparent_34%),radial-gradient(ellipse_at_78%_20%,rgba(124,58,237,0.15),transparent_34%),linear-gradient(115deg,rgba(15,23,42,0.98),rgba(2,6,23,0.95)_48%,rgba(15,23,42,0.97))]" />
      <div className="pointer-events-none absolute -left-24 bottom-16 hidden h-40 w-40 bg-[radial-gradient(circle,rgba(59,130,246,0.18)_1.5px,transparent_1.5px)] bg-[length:18px_18px] opacity-60 lg:block" />
      <div className="pointer-events-none absolute right-[12%] top-[24%] hidden h-32 w-32 bg-[radial-gradient(circle,rgba(99,102,241,0.18)_1.5px,transparent_1.5px)] bg-[length:18px_18px] opacity-50 xl:block" />

      <div className="relative grid min-h-[calc(100svh-5.2rem)] gap-8 pb-7 pt-5 xl:grid-cols-[minmax(0,0.52fr)_minmax(0,0.48fr)] xl:items-center xl:gap-0">
        <div className="relative z-30 min-w-0 max-w-[820px] xl:pr-6">
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex flex-wrap items-center gap-3 text-sm font-semibold text-slate-500 dark:text-slate-400"
          >
            <Link href="/industries" className="transition hover:text-blue-700 dark:hover:text-blue-300">
              Industries
            </Link>
            <ChevronRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            <Link
              href={`/industries/${data.industrySlug}`}
              className="transition hover:text-blue-700 dark:hover:text-blue-300"
            >
              {data.industryName}
            </Link>
            <ChevronRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span className="text-slate-900 dark:text-white">Mobile App</span>
          </nav>

          <Badge accent={accent.badge}>
            <Smartphone className="h-4 w-4" aria-hidden="true" />
            {config.badgeLabel}
          </Badge>

          <h1 className="mt-7 max-w-[860px] text-[clamp(2.75rem,4.95vw,5.35rem)] font-black leading-[1.05] tracking-[-0.055em] text-slate-950 dark:text-white xl:max-w-[820px] 2xl:max-w-[900px]">
            {titleStart}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-600 bg-clip-text text-transparent">
              {data.highlight}
            </span>
            {titleEnd}
          </h1>

          <span className={`mt-5 block h-1.5 w-28 rounded-full ${accent.line}`} />

          <p className="mt-6 max-w-[700px] text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
            {data.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className={`inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-2xl px-8 py-4 text-sm font-black text-white shadow-[0_22px_50px_rgba(37,99,235,0.28)] transition hover:-translate-y-0.5 sm:w-auto ${accent.cta}`}
            >
              Book a Consultation
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>

            <Link
              href="#mobile-app-demos"
              className="inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white/92 px-8 py-4 text-sm font-black text-slate-950 shadow-[0_16px_36px_rgba(15,23,42,0.08)] transition hover:-translate-y-0.5 hover:border-blue-200 dark:border-white/10 dark:bg-white/[0.06] dark:text-white sm:w-auto"
            >
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-blue-200 bg-white text-blue-600 dark:border-blue-300/20 dark:bg-white/10 dark:text-blue-300">
                <Play className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
              </span>
              View App Preview
            </Link>
          </div>

          <div className="mt-8 grid max-w-[790px] grid-cols-2 gap-3 sm:grid-cols-4">
            {heroChips.map((chip, index) => {
              const Icon = chip.icon;

              return (
                <div
                  key={`${chip.label}-${index}`}
                  className="flex min-h-[72px] min-w-0 items-center gap-3 overflow-hidden rounded-2xl border border-slate-200 bg-white/88 px-4 py-3 text-slate-800 shadow-[0_14px_36px_rgba(15,23,42,0.07)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-blue-200 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-100"
                >
                  <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-2xl ${chip.tone ?? accent.chipIcon}`}>
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-black leading-4 text-slate-800 dark:text-slate-200">
                      {chip.label}
                    </p>
                    <p className="mt-1 truncate text-[10px] font-bold text-slate-500 dark:text-slate-400">
                      {chip.caption}
                    </p>
                  </div>
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
  const PrimaryIcon = phoneRows[0]?.icon ?? BarChart3;
  const SecondaryIcon = phoneRows[1]?.icon ?? CalendarCheck;

  return (
    <div className="relative z-10 mx-auto h-[500px] w-full max-w-[760px] min-w-0 overflow-visible sm:h-[560px] xl:h-[620px] xl:max-w-none">
      <div className={`pointer-events-none absolute inset-y-10 left-[12%] right-[2%] rounded-[3rem] ${accent.ring}`} />
      <div
        className="pointer-events-none absolute inset-y-14 right-0 w-[62%] rounded-[2.6rem] bg-cover bg-center opacity-[0.13] saturate-75 [mask-image:linear-gradient(to_left,black_6%,rgba(0,0,0,0.42)_60%,transparent_96%)] dark:opacity-[0.08]"
        style={{ backgroundImage: `url(${data.heroImage})` }}
      />
      <div className="pointer-events-none absolute left-[50%] top-[50%] h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-200/60 dark:border-blue-300/10" />
      <div className="pointer-events-none absolute left-[50%] top-[50%] h-[20rem] w-[20rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-200/60 dark:border-violet-300/10" />
      <div className="pointer-events-none absolute left-[49%] top-[52%] h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-400/10" />

      <div className="absolute left-[50%] top-[51%] z-30 w-[245px] -translate-x-1/2 -translate-y-1/2 sm:w-[282px] xl:w-[322px] 2xl:w-[338px]">
        <HeroPhoneFrame data={data} config={config} phoneRows={phoneRows} accent={accent} />
      </div>

      <HeroFloatCard
        className="left-[0%] top-[27%] hidden w-[230px] xl:block 2xl:left-[2%] 2xl:w-[245px]"
        icon={PrimaryIcon}
        tone={config.accent === "orange" ? "orange" : config.accent === "cyan" ? "cyan" : "blue"}
      >
        <p className="text-sm font-black leading-5 text-slate-950 dark:text-white">
          {config.floatingTitle}
        </p>
        <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">
          {config.floatingText}
        </p>
        <div className="mt-4 h-10 overflow-hidden rounded-xl bg-gradient-to-r from-blue-50 via-violet-50 to-white dark:from-white/10 dark:via-white/5 dark:to-transparent">
          <div className="h-full w-full bg-[linear-gradient(120deg,transparent_0%,transparent_28%,rgba(124,58,237,0.18)_28%,rgba(124,58,237,0.18)_42%,transparent_42%,transparent_56%,rgba(59,130,246,0.16)_56%,rgba(59,130,246,0.16)_70%,transparent_70%)]" />
        </div>
      </HeroFloatCard>

      <HeroFloatCard
        className="right-[2%] top-[29%] hidden w-[230px] xl:block 2xl:right-[5%] 2xl:w-[245px]"
        icon={Bell}
        tone="violet"
      >
        <p className="text-base font-black leading-5 text-slate-950 dark:text-white">
          {config.notificationTitle}
        </p>
        <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
          {data.heroVisual.notification || config.notificationText}
        </p>
      </HeroFloatCard>

      <HeroFloatCard
        className="right-[4%] bottom-[11%] hidden w-[245px] xl:block 2xl:right-[4%] 2xl:w-[255px]"
        icon={SecondaryIcon}
        tone={config.accent === "emerald" ? "emerald" : "blue"}
      >
        <p className="text-base font-black leading-5 text-slate-950 dark:text-white">
          {config.resultTitle}
        </p>
        <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
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
    <div className="rounded-[2.75rem] border-[9px] border-slate-950 bg-slate-950 p-2 shadow-[0_34px_95px_rgba(15,23,42,0.36)] dark:border-slate-800 sm:border-[10px]">
      <div className="relative h-[430px] overflow-hidden rounded-[2rem] bg-white dark:bg-slate-950 sm:h-[500px] xl:h-[560px]">
        <div className="flex items-start justify-between px-4 pb-3 pt-4">
          <div className="min-w-0">
            <p className="text-xs font-bold text-slate-500 dark:text-slate-400">
              {config.phoneGreeting}
            </p>
            <p className="truncate text-lg font-black text-slate-950 dark:text-white">
              {config.phoneTitle}
            </p>
            <p className="mt-0.5 truncate text-[10px] font-bold text-slate-500 dark:text-slate-400">
              {config.phoneSubtitle}
            </p>
          </div>
          <span className="relative grid h-10 w-10 shrink-0 place-items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-400/10 dark:text-blue-300">
            <Bell className="h-4 w-4" aria-hidden="true" />
            <span className="absolute right-1 top-1 h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white dark:ring-slate-950" />
          </span>
        </div>

        <div className="px-4">
          <div
            className={`relative overflow-hidden rounded-[1.45rem] p-4 text-white shadow-[0_16px_38px_rgba(15,23,42,0.24)] ${accent.phonePanel}`}
          >
            <div
              className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-20 mix-blend-screen"
              style={{ backgroundImage: `url(${data.heroImage})` }}
            />
            <div className="relative">
              <p className="line-clamp-2 text-[10px] font-black uppercase tracking-[0.12em] text-blue-100">
                {data.heroVisual.screenSubtitle}
              </p>
              <p className="mt-3 line-clamp-2 text-2xl font-black leading-tight">
                {config.phoneAction || data.heroVisual.actionLabel}
              </p>
              <div className="mt-4 grid grid-cols-3 gap-2">
                {phoneRows.slice(0, 3).map((row) => (
                  <div key={row.label} className="rounded-xl bg-white/12 p-2.5">
                    <p className="truncate text-[10px] font-black text-white">{row.label}</p>
                    <p className="mt-1 truncate text-[9px] font-bold text-blue-100">{row.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 pt-4">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-sm font-black text-slate-950 dark:text-white">Quick Actions</p>
            <span className="text-[10px] font-black text-blue-600 dark:text-blue-300">View all</span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {phoneRows.slice(0, 4).map((row, index) => {
              const Icon = row.icon;

              return (
                <div
                  key={`${row.label}-${index}`}
                  className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm dark:border-white/10 dark:bg-white/[0.06]"
                >
                  <span
                    className={`mb-3 grid h-9 w-9 place-items-center rounded-2xl ${
                      index === 0
                        ? accent.chipIcon
                        : "bg-slate-100 text-slate-600 dark:bg-white/10 dark:text-slate-300"
                    }`}
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <p className="truncate text-xs font-black text-slate-950 dark:text-white">
                    {row.label}
                  </p>
                  <p className="mt-0.5 truncate text-[10px] font-bold text-slate-500 dark:text-slate-400">
                    {row.value}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="px-4 pt-4">
          <div className="mb-2 flex items-center justify-between">
            <p className="text-sm font-black text-slate-950 dark:text-white">Recent Updates</p>
            <span className="text-[10px] font-black text-blue-600 dark:text-blue-300">View all</span>
          </div>
          <div className="space-y-2">
            {phoneRows.slice(0, 3).map((row, index) => (
              <div
                key={`update-${row.label}`}
                className="flex items-center gap-3 rounded-2xl bg-slate-50 px-3 py-2.5 dark:bg-white/[0.06]"
              >
                <span
                  className={`h-2.5 w-2.5 shrink-0 rounded-full ${
                    index === 0 ? "bg-blue-500" : index === 1 ? "bg-emerald-500" : "bg-violet-500"
                  }`}
                />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-xs font-black text-slate-700 dark:text-slate-200">
                    {row.label}
                  </p>
                  <p className="truncate text-[9px] font-bold text-slate-500 dark:text-slate-400">
                    {row.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute inset-x-4 bottom-3 grid grid-cols-4 gap-2 border-t border-slate-100 bg-white/95 pt-3 dark:border-white/10 dark:bg-slate-950/95">
          {navItems.map((item, index) => (
            <div
              key={item}
              className={`rounded-xl px-1.5 py-2 text-center text-[8px] font-black ${
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
  icon: Icon,
  tone,
}: {
  children: ReactNode;
  className: string;
  icon: LucideIcon;
  tone: "blue" | "violet" | "emerald" | "cyan" | "orange";
}) {
  const toneClass = getFloatingToneClass(tone);

  return (
    <div
      className={`absolute z-40 rounded-[1.55rem] border border-white/85 bg-white/90 p-4 shadow-[0_22px_55px_rgba(15,23,42,0.13)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/78 ${className}`}
    >
      <div className="flex items-start gap-3">
        <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl ${toneClass}`}>
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <div className="min-w-0 flex-1">{children}</div>
      </div>
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
    <div className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-black shadow-sm ${accent}`}>
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

function getAccentClasses(accent: HeroAccent): AccentClasses {
  if (accent === "violet") {
    return {
      badge: "bg-violet-50 text-violet-700 dark:bg-violet-400/10 dark:text-violet-300",
      chipIcon: "bg-violet-50 text-violet-600 dark:bg-violet-400/10 dark:text-violet-300",
      cta: "bg-gradient-to-r from-blue-600 to-violet-600",
      line: "bg-gradient-to-r from-blue-600 to-violet-600",
      phonePanel: "bg-gradient-to-br from-indigo-600 via-violet-600 to-blue-700",
      ring: "bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.22),rgba(59,130,246,0.12)_48%,transparent_76%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.16),rgba(59,130,246,0.10)_48%,transparent_76%)]",
    };
  }

  if (accent === "emerald") {
    return {
      badge: "bg-emerald-50 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300",
      chipIcon: "bg-emerald-50 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-300",
      cta: "bg-gradient-to-r from-blue-600 to-emerald-600",
      line: "bg-gradient-to-r from-blue-600 to-emerald-500",
      phonePanel: "bg-gradient-to-br from-teal-600 via-blue-700 to-emerald-700",
      ring: "bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.18),rgba(59,130,246,0.14)_48%,transparent_76%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.12),rgba(59,130,246,0.10)_48%,transparent_76%)]",
    };
  }

  if (accent === "cyan") {
    return {
      badge: "bg-cyan-50 text-cyan-700 dark:bg-cyan-400/10 dark:text-cyan-300",
      chipIcon: "bg-cyan-50 text-cyan-600 dark:bg-cyan-400/10 dark:text-cyan-300",
      cta: "bg-gradient-to-r from-blue-600 to-cyan-600",
      line: "bg-gradient-to-r from-blue-600 to-cyan-500",
      phonePanel: "bg-gradient-to-br from-cyan-600 via-teal-600 to-blue-700",
      ring: "bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.18),rgba(59,130,246,0.14)_48%,transparent_76%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.12),rgba(59,130,246,0.10)_48%,transparent_76%)]",
    };
  }

  if (accent === "orange") {
    return {
      badge: "bg-orange-50 text-orange-700 dark:bg-orange-400/10 dark:text-orange-300",
      chipIcon: "bg-orange-50 text-orange-600 dark:bg-orange-400/10 dark:text-orange-300",
      cta: "bg-gradient-to-r from-blue-600 to-orange-500",
      line: "bg-gradient-to-r from-blue-600 to-orange-500",
      phonePanel: "bg-gradient-to-br from-slate-900 via-blue-900 to-orange-800",
      ring: "bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.16),rgba(59,130,246,0.14)_48%,transparent_76%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.10),rgba(59,130,246,0.10)_48%,transparent_76%)]",
    };
  }

  return {
    badge: "bg-blue-50 text-blue-700 dark:bg-blue-400/10 dark:text-blue-300",
    chipIcon: "bg-blue-50 text-blue-600 dark:bg-blue-400/10 dark:text-blue-300",
    cta: "bg-gradient-to-r from-blue-600 to-violet-600",
    line: "bg-gradient-to-r from-blue-600 to-violet-600",
    phonePanel: "bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700",
    ring: "bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.18),rgba(124,58,237,0.12)_48%,transparent_76%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.14),rgba(124,58,237,0.10)_48%,transparent_76%)]",
  };
}

function getFloatingToneClass(tone: "blue" | "violet" | "emerald" | "cyan" | "orange") {
  if (tone === "emerald") {
    return "bg-emerald-50 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-300";
  }

  if (tone === "violet") {
    return "bg-violet-50 text-violet-600 dark:bg-violet-400/10 dark:text-violet-300";
  }

  if (tone === "cyan") {
    return "bg-cyan-50 text-cyan-600 dark:bg-cyan-400/10 dark:text-cyan-300";
  }

  if (tone === "orange") {
    return "bg-orange-50 text-orange-600 dark:bg-orange-400/10 dark:text-orange-300";
  }

  return "bg-blue-50 text-blue-600 dark:bg-blue-400/10 dark:text-blue-300";
}
