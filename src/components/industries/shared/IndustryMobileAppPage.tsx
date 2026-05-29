"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Bell,
  CheckCircle2,
  ChevronRight,
  Layers3,
  MonitorSmartphone,
  Play,
  ShieldCheck,
  Smartphone,
  Star,
} from "lucide-react";
import IndustryMobileAppDemoModal from "./IndustryMobileAppDemoModal";
import {
  getIndustryMobileAppPage,
  type IndustryMobileAppCard,
  type IndustryMobileAppDemo,
  type IndustryMobileAppModule,
  type IndustryMobileAppPageData,
  type IndustryMobileAppPricingPlan,
  type IndustryMobileAppTestimonial,
  type IndustryMobileAppTrustItem,
} from "./industryMobileAppData";

export default function IndustryMobileAppPage({
  industrySlug,
  solutionSlug,
}: {
  industrySlug: string;
  solutionSlug: string;
}) {
  const data = getIndustryMobileAppPage(industrySlug, solutionSlug);
  const [activeDemo, setActiveDemo] = useState<IndustryMobileAppDemo | null>(null);

  if (!data) {
    return null;
  }

  return (
    <main className="relative overflow-hidden bg-[#f8fbff] text-slate-950 dark:bg-[#050814] dark:text-white">
      <div className="pointer-events-none absolute left-0 top-0 h-[34rem] w-[34rem] rounded-full bg-blue-200/35 blur-3xl dark:bg-blue-500/10" />
      <div className="pointer-events-none absolute right-0 top-20 h-[30rem] w-[30rem] rounded-full bg-violet-200/35 blur-3xl dark:bg-violet-500/10" />

      <section className="relative px-0 pb-20 pt-24 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <div className="mx-auto w-full max-w-full sm:max-w-[min(92vw,1440px)]">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white/90 shadow-[0_28px_90px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.05]">
            <HeroSection data={data} />

            <div className="grid border-t border-slate-200 dark:border-white/10 xl:grid-cols-[1.05fr_0.95fr]">
              <ProblemsSection title={data.problemsTitle} items={data.problems} />
              <IncludesSection title={data.includesTitle} items={data.includes} />
            </div>

            <ModulesSection data={data} />
            <RoleExperienceSection data={data} />
            <JourneySection data={data} />
            <DemoGallerySection data={data} onOpenDemo={setActiveDemo} />
            <WhyChooseAndCTASection data={data} />
            <PricingSection data={data} />
            <FinalCTASection />
            <TestimonialsSection title={data.testimonialsTitle} items={data.testimonials} />
            <TrustSection data={data} />
          </div>
        </div>
      </section>

      {activeDemo ? (
        <IndustryMobileAppDemoModal
          data={data}
          demo={activeDemo}
          onClose={() => setActiveDemo(null)}
        />
      ) : null}
    </main>
  );
}

function HeroSection({ data }: { data: IndustryMobileAppPageData }) {
  const [titleStart, titleEnd] = splitHighlightedText(data.title, data.highlight);
  const trustChips = getHeroTrustChips(data);

  return (
    <section className="relative overflow-hidden px-7 py-1 sm:px-10 lg:px-12 xl:px-14">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.98),rgba(248,250,252,0.94)_35%,rgba(239,246,255,0.86)_68%,rgba(245,243,255,0.88)),radial-gradient(circle_at_18%_26%,rgba(37,99,235,0.12),transparent_31%),radial-gradient(circle_at_64%_42%,rgba(99,102,241,0.12),transparent_35%)] dark:bg-[linear-gradient(115deg,rgba(15,23,42,0.98),rgba(2,6,23,0.94)_44%,rgba(15,23,42,0.92)),radial-gradient(circle_at_18%_26%,rgba(37,99,235,0.16),transparent_31%),radial-gradient(circle_at_64%_42%,rgba(99,102,241,0.14),transparent_35%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.045)_1px,transparent_1px)] bg-[size:48px_48px] opacity-65 [mask-image:linear-gradient(120deg,black,transparent_78%)] dark:bg-[linear-gradient(rgba(125,211,252,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(125,211,252,0.05)_1px,transparent_1px)]" />

      <div className="relative">
        <nav className="mb-5 flex flex-wrap items-center gap-3 text-sm font-semibold text-slate-500 dark:text-slate-400">
          <Link href="/industries" className="transition hover:text-blue-700 dark:hover:text-blue-300">
            Industries
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link
            href={`/industries/${data.industrySlug}`}
            className="transition hover:text-blue-700 dark:hover:text-blue-300"
          >
            {data.industryName}
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-slate-900 dark:text-white">Mobile App</span>
        </nav>

        <div className="relative grid items-center gap-10 xl:grid-cols-[0.78fr_1.22fr]">
          <div className="relative z-20">
            <Badge>
              <Smartphone className="h-4 w-4" />
              {data.industryName} Mobile App Solution
            </Badge>

            <h1 className="mt-6 max-w-2xl text-[clamp(2.45rem,4.4vw,4.25rem)] font-black leading-[1.02] tracking-[-0.055em] text-slate-950 dark:text-white">
              {titleStart}
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                {data.highlight}
              </span>
              {titleEnd}
            </h1>
            <span className="mt-4 block h-1.5 w-24 rounded-full bg-gradient-to-r from-blue-600 to-violet-600" />

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-600 dark:text-slate-300">
              {data.description}
            </p>

            <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {data.heroChips.map((chip) => {
                const Icon = chip.icon;

                return (
                  <div
                    key={chip.label}
                    className="rounded-2xl border border-slate-200 bg-white/85 p-3 text-slate-800 shadow-sm backdrop-blur-xl transition hover:-translate-y-1 hover:border-blue-200 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-100"
                  >
                    <span className="mb-2 grid h-9 w-9 place-items-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-400/10 dark:text-blue-300">
                      <Icon className="h-5 w-5" />
                    </span>
                    <p className="text-xs font-bold leading-4 text-slate-700 dark:text-slate-300">
                      {chip.label}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 px-8 py-4 text-sm font-black text-white shadow-[0_22px_50px_rgba(37,99,235,0.30)] transition hover:-translate-y-0.5"
              >
                Build My {data.industryName} App
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="#mobile-app-use-cases"
                className="inline-flex items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white/92 px-8 py-4 text-sm font-black text-blue-700 shadow-[0_16px_36px_rgba(15,23,42,0.08)] transition hover:-translate-y-0.5 hover:border-blue-200 dark:border-white/10 dark:bg-white/[0.06] dark:text-blue-300"
              >
                View App Use Cases
                <span className="grid h-8 w-8 place-items-center rounded-full border border-blue-200 bg-white text-blue-600 dark:border-blue-300/20 dark:bg-white/10 dark:text-blue-300">
                  <Play className="h-3.5 w-3.5 fill-current" />
                </span>
              </Link>
            </div>

            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
              {trustChips.map((chip) => (
                <span
                  key={chip}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 dark:text-slate-300"
                >
                  <CheckCircle2 className="h-4 w-4 text-blue-600 dark:text-blue-300" />
                  {chip}
                </span>
              ))}
            </div>
          </div>

          <PhoneHeroMockup data={data} />
        </div>
      </div>
    </section>
  );
}

type HeroShowcaseMetric = {
  label: string;
  value: string;
  change: string;
  tone: "positive" | "negative";
};

type HeroShowcaseListItem = {
  title: string;
  subtitle: string;
  meta?: string;
  status?: string;
};

type HeroShowcaseContent = {
  overviewTitle: string;
  overviewUpdated: string;
  metrics: HeroShowcaseMetric[];
  activities: Array<{ title: string; time: string }>;
  catalogTitle: string;
  catalogItems: HeroShowcaseListItem[];
  approvalsTitle: string;
  approvalsItems: HeroShowcaseListItem[];
  dispatchTitle: string;
  dispatchCode: string;
  dispatchDealer: string;
  dispatchStatus: string;
  dispatchSteps: string[];
  notificationTitle: string;
  notificationDescription: string;
  notificationTime: string;
  resultTitle: string;
  resultSubtitle: string;
  phoneIntro: string;
  phoneAction: string;
  phoneRows: Array<{ label: string; value: string; icon: IndustryMobileAppCard["icon"] }>;
  phoneNav: string[];
};

function PhoneHeroMockup({ data }: { data: IndustryMobileAppPageData }) {
  const showcase = getHeroShowcaseContent(data);

  return (
    <div className="relative mx-auto h-[430px] w-full max-w-[760px] overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-3 shadow-[0_28px_90px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-white/[0.06] sm:h-[455px] lg:h-[485px] xl:h-[500px]" style={{ perspective: "1500px" }}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_28%,rgba(59,130,246,0.16),transparent_30%),radial-gradient(circle_at_80%_22%,rgba(124,58,237,0.13),transparent_30%),linear-gradient(135deg,rgba(239,246,255,0.92),rgba(255,255,255,0.82),rgba(224,242,254,0.82))] dark:bg-[radial-gradient(circle_at_24%_28%,rgba(59,130,246,0.18),transparent_30%),radial-gradient(circle_at_80%_22%,rgba(124,58,237,0.16),transparent_30%),linear-gradient(135deg,rgba(15,23,42,0.94),rgba(2,6,23,0.86),rgba(15,23,42,0.94))]" />
      <div
        className="absolute right-0 top-0 h-full w-[52%] bg-cover bg-center opacity-[0.13] saturate-50 [mask-image:linear-gradient(to_left,black_12%,rgba(0,0,0,0.68)_54%,transparent_94%)] dark:opacity-[0.09]"
        style={{ backgroundImage: `url(${data.heroImage})` }}
      />
      <div className="absolute left-[12%] top-[18%] h-[18rem] w-[18rem] rounded-full bg-gradient-to-br from-blue-300/24 via-cyan-200/12 to-violet-300/18 blur-3xl dark:from-blue-500/16 dark:via-cyan-400/8 dark:to-violet-500/12" />
      <div className="absolute bottom-[8%] left-[10%] h-14 w-[32rem] rounded-[100%] bg-blue-950/10 blur-2xl dark:bg-blue-300/10" />

      <div className="absolute left-1/2 top-1/2 z-30 w-[220px] -translate-x-1/2 -translate-y-1/2 rotate-[-5deg] sm:w-[235px] lg:left-[9%] lg:w-[245px] lg:translate-x-0 xl:w-[255px]" style={{ transformStyle: "preserve-3d" }}>
        <HeroPhoneFrame data={data} showcase={showcase} />
      </div>

      <div className="absolute right-[4%] top-[9%] z-10 hidden w-[310px] rounded-[1.5rem] border border-white/80 bg-white/84 p-3.5 shadow-[0_22px_58px_rgba(59,73,108,0.14)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/74 lg:block xl:w-[335px]">
        <OverviewPanel showcase={showcase} />
      </div>

      <div className="absolute right-[4%] top-[35%] z-30 hidden w-[235px] rounded-[1.35rem] border border-white/80 bg-white/90 p-3 shadow-[0_18px_48px_rgba(59,73,108,0.12)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/78 xl:block">
        <CatalogPanel showcase={showcase} image={data.heroImage} />
      </div>

      <div className="absolute bottom-[6%] right-[8%] z-30 hidden w-[310px] rounded-[1.35rem] border border-white/80 bg-white/90 p-3 shadow-[0_18px_48px_rgba(59,73,108,0.12)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/78 xl:block">
        <DispatchPanel showcase={showcase} />
      </div>

      <div className="absolute bottom-[7%] left-[31%] z-40 hidden w-[230px] rounded-[1.2rem] border border-white/80 bg-white/92 p-3 shadow-[0_18px_42px_rgba(59,73,108,0.12)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/80 lg:block">
        <NotificationPanel showcase={showcase} />
      </div>

    </div>
  );
}

function HeroPhoneFrame({
  data,
  showcase,
}: {
  data: IndustryMobileAppPageData;
  showcase: HeroShowcaseContent;
}) {
  const visual = data.heroVisual;

  return (
    <div className="relative rounded-[2.65rem] border-[8px] border-slate-950 bg-slate-950 p-1.5 shadow-[0_38px_86px_rgba(15,23,42,0.40)] dark:border-slate-800">
      <div className="absolute left-1/2 top-2.5 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-slate-950 dark:bg-slate-800" />
      <div className="overflow-hidden rounded-[2rem] bg-white dark:bg-slate-950">
        <div className="bg-[#08132d] px-4 pb-3 pt-3 text-white">
          <div className="flex items-center justify-start text-[0px] font-black text-white/90">
            <span className="text-[10px]">9:41</span>
            <span className="ml-auto text-[10px] tracking-[0.18em]">5G</span>
          </div>

          <div className="mt-5 flex items-start justify-between">
            <div>
              <p className="text-xs font-medium text-slate-300">Welcome back,</p>
              <p className="mt-1 text-base font-black leading-tight">
                Team{" "}
                <span className="text-blue-400">{visual.appName}</span>
              </p>
            </div>
            <span className="grid h-8 w-8 place-items-center rounded-2xl bg-white/10 text-blue-200">
              <MonitorSmartphone className="h-4 w-4" />
            </span>
          </div>

          <div className="mt-4 rounded-[1.25rem] bg-gradient-to-br from-blue-600 to-violet-600 p-3.5 shadow-[0_18px_40px_rgba(37,99,235,0.30)]">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-black leading-tight">{visual.screenTitle}</h3>
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white/15">
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </div>
            <p className="mt-2 text-xs leading-5 text-blue-50/90">{showcase.phoneIntro}</p>
            <button className="mt-3 flex w-full items-center justify-between rounded-2xl bg-white/14 px-3 py-2.5 text-xs font-black text-white">
              <span>{showcase.phoneAction}</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-b from-slate-50 to-white p-3.5 dark:from-slate-900 dark:to-slate-950">
          <p className="text-xs font-black text-slate-950 dark:text-white">Quick Access</p>
          <div className="mt-2.5 space-y-1.5">
            {showcase.phoneRows.map((row, index) => {
              const Icon = row.icon;

              return (
                <div
                  key={row.label}
                  className="flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white px-3 py-2.5 shadow-sm dark:border-white/10 dark:bg-white/[0.06]"
                >
                  <span
                    className={`grid h-9 w-9 shrink-0 place-items-center rounded-2xl ${
                      index === 0
                        ? "bg-blue-600 text-white"
                        : "bg-slate-100 text-slate-600 dark:bg-white/10 dark:text-slate-300"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-xs font-black text-slate-950 dark:text-white">{row.label}</p>
                    <p className="mt-0.5 truncate text-[10px] font-semibold text-slate-500 dark:text-slate-400">
                      {row.value}
                    </p>
                  </div>
                  <ChevronRight className="h-4 w-4 text-slate-300" />
                </div>
              );
            })}
          </div>

          <div className="mt-3 grid grid-cols-4 gap-1.5 border-t border-slate-100 pt-2.5 dark:border-white/10">
            {showcase.phoneNav.map((item, index) => (
              <div
                key={item}
                className={`rounded-xl px-1 py-2 text-center text-[9px] font-black ${
                  index === 0 ? "bg-blue-50 text-blue-700 dark:bg-blue-400/10 dark:text-blue-300" : "text-slate-500 dark:text-slate-400"
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function OverviewPanel({ showcase }: { showcase: HeroShowcaseContent }) {
  return (
    <>
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-sm font-black text-slate-950 dark:text-white">{showcase.overviewTitle}</h3>
          <p className="mt-1 text-[10px] font-semibold text-slate-400">{showcase.overviewUpdated}</p>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-[10px] font-black text-slate-700 shadow-sm dark:bg-white/10 dark:text-slate-200">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Live
        </span>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2">
        {showcase.metrics.map((metric) => (
          <MetricCard key={metric.label} metric={metric} />
        ))}
      </div>

      <div className="mt-4 rounded-2xl border border-slate-200/70 bg-white/78 p-3 dark:border-white/10 dark:bg-white/[0.06]">
        <div className="flex items-center justify-between">
          <p className="text-xs font-black text-slate-950 dark:text-white">Recent Activity</p>
          <ChevronRight className="h-4 w-4 text-slate-300" />
        </div>
        <div className="mt-3 space-y-2.5">
          {showcase.activities.slice(0, 3).map((activity, index) => (
            <div key={activity.title} className="flex items-center gap-3">
              <span
                className={`grid h-7 w-7 shrink-0 place-items-center rounded-xl ${
                  index === 0
                    ? "bg-blue-50 text-blue-600 dark:bg-blue-400/10 dark:text-blue-300"
                    : index === 1
                      ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-300"
                      : "bg-orange-50 text-orange-600 dark:bg-orange-400/10 dark:text-orange-300"
                }`}
              >
                <CheckCircle2 className="h-3.5 w-3.5" />
              </span>
              <p className="min-w-0 flex-1 truncate text-[11px] font-bold text-slate-700 dark:text-slate-300">
                {activity.title}
              </p>
              <span className="text-[10px] font-semibold text-slate-400">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function MetricCard({ metric }: { metric: HeroShowcaseMetric }) {
  return (
    <div className="rounded-2xl border border-slate-200/70 bg-white/80 p-3 shadow-sm dark:border-white/10 dark:bg-white/[0.06]">
      <p className="text-[10px] font-semibold text-slate-500 dark:text-slate-400">{metric.label}</p>
      <div className="mt-2 flex items-end justify-between">
        <p className="text-xl font-black text-slate-950 dark:text-white">{metric.value}</p>
        <span
          className={`text-[10px] font-black ${
            metric.tone === "positive" ? "text-emerald-500" : "text-rose-500"
          }`}
        >
          {metric.change}
        </span>
      </div>
    </div>
  );
}

function CatalogPanel({
  showcase,
  image,
}: {
  showcase: HeroShowcaseContent;
  image: string;
}) {
  return (
    <>
      <PanelHeader title={showcase.catalogTitle} action="View all" />
      <div className="mt-3 space-y-2">
        {showcase.catalogItems.map((item) => (
          <div key={item.title} className="flex items-center gap-3 rounded-2xl bg-white/74 p-2 shadow-sm dark:bg-white/[0.06]">
            <span
              className="h-10 w-10 shrink-0 rounded-xl bg-cover bg-center"
              style={{ backgroundImage: `linear-gradient(rgba(248,250,252,0.30),rgba(248,250,252,0.72)),url(${image})` }}
            />
            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-black text-slate-950 dark:text-white">{item.title}</p>
              <p className="mt-0.5 text-[10px] font-semibold text-slate-500 dark:text-slate-400">{item.subtitle}</p>
            </div>
            <ChevronRight className="h-4 w-4 text-slate-300" />
          </div>
        ))}
      </div>
    </>
  );
}

function DispatchPanel({ showcase }: { showcase: HeroShowcaseContent }) {
  return (
    <>
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-sm font-black text-slate-950 dark:text-white">{showcase.dispatchTitle}</h3>
          <p className="mt-2 text-lg font-black text-slate-950 dark:text-white">{showcase.dispatchCode}</p>
          <p className="mt-1 text-[10px] font-semibold text-slate-500 dark:text-slate-400">{showcase.dispatchDealer}</p>
        </div>
        <StatusBadge status={showcase.dispatchStatus} />
      </div>
      <div className="mt-4">
        <div className="relative h-2 rounded-full bg-slate-200 dark:bg-white/10">
          <div className="absolute inset-y-0 left-0 w-[38%] rounded-full bg-blue-600" />
          {showcase.dispatchSteps.map((step, index) => (
            <span
              key={step}
              className={`absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border-4 ${
                index < 2 ? "border-blue-600 bg-white" : "border-slate-200 bg-white dark:border-white/20 dark:bg-slate-950"
              }`}
              style={{ left: `${index * 33}%` }}
            />
          ))}
        </div>
        <div className="mt-3 grid grid-cols-4 gap-2">
          {showcase.dispatchSteps.map((step) => (
            <p key={step} className="text-center text-[9px] font-bold text-slate-500 dark:text-slate-400">
              {step}
            </p>
          ))}
        </div>
      </div>
    </>
  );
}

function NotificationPanel({ showcase }: { showcase: HeroShowcaseContent }) {
  return (
    <div className="flex items-center gap-3">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-400/10 dark:text-blue-300">
        <Bell className="h-5 w-5" />
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs font-black text-slate-950 dark:text-white">{showcase.notificationTitle}</p>
          <span className="text-[10px] font-semibold text-slate-400">{showcase.notificationTime}</span>
        </div>
        <p className="mt-1 truncate text-xs font-semibold text-slate-500 dark:text-slate-400">
          {showcase.notificationDescription}
        </p>
      </div>
    </div>
  );
}

function PanelHeader({ title, action }: { title: string; action: string }) {
  return (
    <div className="flex items-center justify-between">
      <h3 className="text-sm font-black text-slate-950 dark:text-white">{title}</h3>
      <span className="text-[10px] font-black text-blue-500 dark:text-blue-300">{action}</span>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const isApproved = status.toLowerCase().includes("approved");
  const isTransit = status.toLowerCase().includes("transit");

  return (
    <span
      className={`rounded-full px-2.5 py-1 text-[10px] font-black ${
        isApproved
          ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-300"
          : isTransit
            ? "bg-blue-50 text-blue-600 dark:bg-blue-400/10 dark:text-blue-300"
            : "bg-orange-50 text-orange-600 dark:bg-orange-400/10 dark:text-orange-300"
      }`}
    >
      {status}
    </span>
  );
}

function getHeroShowcaseContent(data: IndustryMobileAppPageData): HeroShowcaseContent {
  const visual = data.heroVisual;
  const isManufacturing = data.industrySlug === "manufacturing";

  if (isManufacturing) {
    return {
      overviewTitle: "Manufacturing Overview",
      overviewUpdated: "Updated just now",
      metrics: [
        { label: "Active RFQs", value: "18", change: "+12%", tone: "positive" },
        { label: "Open Orders", value: "24", change: "+8%", tone: "positive" },
        { label: "Pending Approvals", value: "7", change: "-5%", tone: "negative" },
        { label: "In Dispatch", value: "11", change: "+15%", tone: "positive" },
      ],
      activities: [
        { title: "New RFQ from Dealer One", time: "2m ago" },
        { title: "Order #ORD-2451 approved", time: "15m ago" },
        { title: "Dispatch #DS-7781 in transit", time: "1h ago" },
        { title: "Catalog updated", time: "2h ago" },
      ],
      catalogTitle: "Product Catalog",
      catalogItems: [
        { title: "Industrial Motors", subtitle: "248 Products" },
        { title: "Gear Systems", subtitle: "132 Products" },
        { title: "Conveyor Systems", subtitle: "86 Products" },
      ],
      approvalsTitle: "Approvals",
      approvalsItems: [
        { title: "PO #PO-8842", subtitle: "Dealer One", status: "Approved" },
        { title: "PO #PO-8841", subtitle: "Dealer Two", status: "Pending" },
        { title: "PO #PO-8840", subtitle: "Dealer Three", status: "Pending" },
      ],
      dispatchTitle: "Dispatch Tracking",
      dispatchCode: "DS-7781",
      dispatchDealer: "Dealer One",
      dispatchStatus: "In Transit",
      dispatchSteps: ["Dispatched", "In Transit", "Out for Delivery", "Delivered"],
      notificationTitle: "Push notification",
      notificationDescription: "RFQ approved by admin",
      notificationTime: "2m ago",
      resultTitle: "Smarter Operations.",
      resultSubtitle: "Stronger Results.",
      phoneIntro: "Give dealers and internal teams a connected app for catalogs, orders and more.",
      phoneAction: "Request Quote",
      phoneRows: visual.cards.slice(0, 4).map((card, index) => ({
        ...card,
        value: ["Products", "Requests", "Tracking", "Sync & Track"][index] ?? card.value,
      })),
      phoneNav: ["Home", "Orders", "Alerts", "Profile"],
    };
  }

  const rows = visual.cards.slice(0, 4);

  return {
    overviewTitle: `${data.industryName} Overview`,
    overviewUpdated: "Updated just now",
    metrics: [
      { label: rows[0]?.label ?? "Active Requests", value: "18", change: "+12%", tone: "positive" },
      { label: rows[1]?.label ?? "Open Tasks", value: "24", change: "+8%", tone: "positive" },
      { label: rows[2]?.label ?? "Pending Actions", value: "7", change: "-5%", tone: "negative" },
      { label: rows[3]?.label ?? "Completed", value: "11", change: "+15%", tone: "positive" },
    ],
    activities: [
      { title: visual.notification, time: "2m ago" },
      { title: `${rows[0]?.label ?? "Request"} updated`, time: "15m ago" },
      { title: visual.actionCard, time: "1h ago" },
      { title: `${data.industryName} app synced`, time: "2h ago" },
    ],
    catalogTitle: rows[0]?.label ?? data.demoContent.catalogTabLabel,
    catalogItems: rows.slice(0, 3).map((row, index) => ({
      title: row.label,
      subtitle: index === 0 ? row.value : `${row.value} active`,
    })),
    approvalsTitle: rows[2]?.label ?? "Approvals",
    approvalsItems: [
      { title: `${data.industryName} request #01`, subtitle: rows[1]?.label ?? "Team", status: "Approved" },
      { title: `${data.industryName} request #02`, subtitle: rows[2]?.label ?? "Admin", status: "Pending" },
      { title: `${data.industryName} request #03`, subtitle: rows[3]?.label ?? "Support", status: "Pending" },
    ],
    dispatchTitle: rows[3]?.label ?? "Tracking",
    dispatchCode: data.heroVisual.floatingMetric,
    dispatchDealer: data.demoContent.catalogTabLabel,
    dispatchStatus: "In Transit",
    dispatchSteps: ["Requested", "Reviewed", "In Progress", "Done"],
    notificationTitle: "Push notification",
    notificationDescription: visual.notification,
    notificationTime: "2m ago",
    resultTitle: "Smarter Operations.",
    resultSubtitle: "Stronger Results.",
    phoneIntro: visual.screenSubtitle,
    phoneAction: visual.actionLabel,
    phoneRows: rows,
    phoneNav: ["Home", rows[1]?.label ?? "Tasks", "Alerts", "Profile"],
  };
}

function getHeroTrustChips(data: IndustryMobileAppPageData) {
  if (data.industrySlug === "manufacturing") {
    return ["Enterprise-grade security", "Scalable & secure", "Built for manufacturers"];
  }

  return ["Enterprise-grade security", "Scalable & secure", `Built for ${data.industryName.toLowerCase()}`];
}

function ProblemsSection({
  title,
  items,
}: {
  title: string;
  items: IndustryMobileAppCard[];
}) {
  return (
    <section className="border-r border-slate-200 px-7 py-10 dark:border-white/10 sm:px-10 lg:px-12">
      <SectionTitle title={title} center />

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-white/[0.05]"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-violet-50 text-violet-600 dark:bg-violet-400/10 dark:text-violet-300">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-base font-black text-slate-950 dark:text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {item.description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function IncludesSection({
  title,
  items,
}: {
  title: string;
  items: IndustryMobileAppCard[];
}) {
  return (
    <section className="px-7 py-10 sm:px-10 lg:px-12">
      <SectionTitle title={title} center />

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.title}
              className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_22px_60px_rgba(37,99,235,0.10)] dark:border-white/10 dark:bg-white/[0.05]"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-400/10 dark:text-blue-300">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-sm font-black text-slate-950 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs leading-5 text-slate-600 dark:text-slate-300">
                  {item.description}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function JourneySection({ data }: { data: IndustryMobileAppPageData }) {
  return (
    <section className="border-t border-slate-200 bg-gradient-to-b from-white to-blue-50/35 px-7 py-12 dark:border-white/10 dark:from-white/[0.04] dark:to-blue-950/10 sm:px-10 lg:px-12">
      <SectionTitle
        title={data.flowTitle}
        description="A clear app journey moves work from the first request to completion with status visibility, notifications, and reporting."
        center
      />

      <div className="relative mt-10">
        <div className="pointer-events-none absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent dark:via-blue-300/20 lg:block" />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {data.flowSteps.map((step, index) => (
            <WorkflowJourneyStep
              key={step.title}
              step={step}
              index={index}
            />
          ))}
        </div>

        <div className="mt-8 grid gap-4 rounded-[1.75rem] border border-slate-200 bg-white/82 p-5 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.05] lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase text-blue-700 dark:text-blue-300">
              Connected owner view
            </p>
            <h3 className="mt-2 text-2xl font-black text-slate-950 dark:text-white">
              {data.demoContent.adminTitle}
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              {data.demoContent.adminDescription}
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {data.demoContent.analyticsMetrics.slice(0, 3).map((metric) => {
              const Icon = metric.icon;

              return (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/[0.06]"
                >
                  <Icon className="h-5 w-5 text-blue-600 dark:text-blue-300" />
                  <p className="mt-3 text-xs font-bold text-slate-500 dark:text-slate-400">
                    {metric.label}
                  </p>
                  <p className="mt-1 text-xl font-black text-slate-950 dark:text-white">
                    {metric.value}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkflowJourneyStep({
  step,
  index,
}: {
  step: IndustryMobileAppCard;
  index: number;
}) {
  const Icon = step.icon;

  return (
    <article className="relative rounded-[1.35rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-white/[0.05]">
      <span className="relative z-10 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-[0_14px_30px_rgba(37,99,235,0.22)]">
        <Icon className="h-5 w-5" />
      </span>
      <p className="mt-5 text-xs font-black uppercase text-blue-700 dark:text-blue-300">
        Step {index + 1}
      </p>
      <h3 className="mt-2 text-base font-black text-slate-950 dark:text-white">
        {step.title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
        {step.description}
      </p>
    </article>
  );
}

function ModulesSection({ data }: { data: IndustryMobileAppPageData }) {
  return (
    <section className="border-t border-slate-200 px-7 py-12 dark:border-white/10 sm:px-10 lg:px-12">
      <SectionTitle
        title={data.modulesTitle}
        description={data.modulesDescription}
        center
      />

      <div className="mt-9 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {data.modules.map((module) => (
          <ModuleCard key={module.title} module={module} />
        ))}
      </div>
    </section>
  );
}

function ModuleCard({ module }: { module: IndustryMobileAppModule }) {
  const Icon = module.icon;

  return (
    <article className="group overflow-hidden rounded-[1.45rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.10)] dark:border-white/10 dark:bg-white/[0.05]">
      <div className="relative min-h-[140px] overflow-hidden bg-gradient-to-br from-blue-50 via-white to-violet-50 p-4 dark:from-blue-950/30 dark:via-slate-950 dark:to-violet-950/20">
        <div className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-2xl bg-white text-blue-600 shadow-sm dark:bg-white/10 dark:text-blue-300">
          <Icon className="h-5 w-5" />
        </div>
        <div className="w-[138px] rounded-[1.7rem] border-[7px] border-slate-950 bg-slate-950 p-1.5 shadow-[0_18px_42px_rgba(15,23,42,0.20)] dark:border-slate-800">
          <div className="overflow-hidden rounded-[1.2rem] bg-white dark:bg-slate-950">
            <div className="bg-slate-950 p-3 text-white">
              <div className="h-1.5 w-10 rounded-full bg-white/20" />
              <p className="mt-4 text-[10px] font-black leading-3">
                {module.title}
              </p>
            </div>
            <div className="space-y-1.5 p-2">
              {[0, 1, 2].map((item) => (
                <div key={item} className="flex items-center gap-1.5 rounded-lg bg-slate-50 p-1.5 dark:bg-white/10">
                  <span className="h-4 w-4 rounded-md bg-blue-100 dark:bg-blue-400/20" />
                  <span className="h-1.5 flex-1 rounded-full bg-slate-200 dark:bg-white/15" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-black leading-6 text-slate-950 dark:text-white">
            {module.title}
          </h3>
          <Layers3 className="h-5 w-5 shrink-0 text-slate-300 transition group-hover:text-blue-400" />
        </div>
        <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
          {module.description}
        </p>

        <div className="mt-4 space-y-2">
          {module.points.slice(0, 3).map((point) => (
            <div
              key={point}
              className="flex items-start gap-2 text-xs font-semibold leading-5 text-slate-600 dark:text-slate-300"
            >
              <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500" />
              {point}
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

function RoleExperienceSection({ data }: { data: IndustryMobileAppPageData }) {
  const firstUseCase = data.roleExperiences[0];
  const [activeUseCaseId, setActiveUseCaseId] = useState(firstUseCase?.id ?? "");
  const activeUseCase =
    data.roleExperiences.find((role) => role.id === activeUseCaseId) ??
    firstUseCase;

  if (!activeUseCase) {
    return null;
  }

  const ActiveIcon = activeUseCase.icon;

  return (
    <section
      id="mobile-app-use-cases"
      className="border-t border-slate-200 bg-gradient-to-b from-slate-50/80 to-white px-7 py-12 dark:border-white/10 dark:from-white/[0.025] dark:to-white/[0.04] sm:px-10 lg:px-12"
    >
      <div className="mx-auto max-w-3xl text-center">
        <SectionEyebrow>Mobile App Use Cases</SectionEyebrow>
        <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950 dark:text-white sm:text-4xl">
          Role-Based Mobile App Experience for {data.industryName}
        </h2>
        <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
          {data.roleExperiencesDescription}
        </p>
      </div>

      <div className="mt-9 grid gap-6 xl:grid-cols-[0.78fr_1.22fr] xl:items-stretch">
        <div className="-mx-7 flex gap-3 overflow-x-auto px-7 pb-2 sm:-mx-10 sm:px-10 xl:mx-0 xl:grid xl:auto-rows-fr xl:overflow-visible xl:px-0 xl:pb-0">
          {data.roleExperiences.map((role) => {
            const Icon = role.icon;
            const isActive = role.id === activeUseCase.id;

            return (
              <button
                key={role.id}
                type="button"
                onClick={() => setActiveUseCaseId(role.id)}
                className={`min-w-[245px] rounded-[1.35rem] border p-4 text-left shadow-sm transition hover:-translate-y-1 xl:min-w-0 ${
                  isActive
                    ? "border-blue-200 bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-[0_22px_58px_rgba(37,99,235,0.22)]"
                    : "border-slate-200 bg-white text-slate-950 hover:border-blue-200 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-white/[0.05] dark:text-white"
                }`}
              >
                <div className="flex items-start gap-3">
                  <span
                    className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl ${
                      isActive
                        ? "bg-white/16 text-white"
                        : "bg-blue-50 text-blue-600 dark:bg-blue-400/10 dark:text-blue-300"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className={`text-[10px] font-black uppercase ${isActive ? "text-blue-100" : "text-slate-400"}`}>
                      {role.role}
                    </p>
                    <h3 className="mt-1 text-base font-black">
                      {role.title}
                    </h3>
                  </div>
                </div>
                <p className={`mt-3 line-clamp-2 text-xs leading-5 ${isActive ? "text-blue-50" : "text-slate-500 dark:text-slate-400"}`}>
                  {role.description}
                </p>
                <p className={`mt-4 rounded-full px-3 py-1.5 text-[10px] font-black ${isActive ? "bg-white/14 text-white" : "bg-slate-100 text-slate-600 dark:bg-white/10 dark:text-slate-300"}`}>
                  {role.metric}
                </p>
              </button>
            );
          })}
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_26px_80px_rgba(15,23,42,0.10)] dark:border-white/10 dark:bg-white/[0.05] sm:p-6">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_12%,rgba(59,130,246,0.12),transparent_28%),radial-gradient(circle_at_82%_14%,rgba(124,58,237,0.12),transparent_30%)]" />
          <div className="relative grid gap-6 lg:grid-cols-[1fr_315px] lg:items-center">
            <div>
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-[0_14px_30px_rgba(37,99,235,0.24)]">
                  <ActiveIcon className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-xs font-black uppercase text-blue-700 dark:text-blue-300">
                    {activeUseCase.role}
                  </p>
                  <h3 className="mt-1 text-3xl font-black leading-tight text-slate-950 dark:text-white">
                    {activeUseCase.title}
                  </h3>
                </div>
              </div>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300">
                {activeUseCase.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {activeUseCase.capabilities.map((capability) => (
                  <span
                    key={capability}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-black text-slate-700 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-300"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                    {capability}
                  </span>
                ))}
              </div>

              <div className="mt-7 rounded-[1.35rem] border border-slate-200 bg-slate-50 p-4 shadow-sm dark:border-white/10 dark:bg-white/[0.06]">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <p className="text-xs font-black uppercase text-slate-400">
                    Workflow line
                  </p>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-black text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300">
                    Live sync
                  </span>
                </div>
                <div className="grid gap-3 sm:grid-cols-4">
                  {activeUseCase.capabilities.map((capability, index) => (
                    <div key={`${activeUseCase.id}-flow-${capability}`}>
                      <div className="flex items-center gap-2">
                        <span
                          className={`grid h-7 w-7 shrink-0 place-items-center rounded-full text-[10px] font-black ${
                            index === 0
                              ? "bg-gradient-to-br from-blue-600 to-violet-600 text-white"
                              : "bg-slate-100 text-slate-500 dark:bg-white/10 dark:text-slate-300"
                          }`}
                        >
                          {index + 1}
                        </span>
                        <span className="h-1 flex-1 rounded-full bg-slate-100 dark:bg-white/10" />
                      </div>
                      <p className="mt-2 text-[11px] font-black leading-4 text-slate-600 dark:text-slate-300">
                        {capability}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-blue-100 bg-blue-50 p-4 dark:border-blue-300/15 dark:bg-blue-400/10">
                  <p className="text-xs font-black uppercase text-blue-700 dark:text-blue-300">
                    Use-case metric
                  </p>
                  <p className="mt-2 text-xl font-black text-slate-950 dark:text-white">
                    {activeUseCase.metric}
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-white/[0.06]">
                  <p className="text-xs font-black uppercase text-slate-400">
                    Primary action
                  </p>
                  <p className="mt-2 text-xl font-black text-slate-950 dark:text-white">
                    {activeUseCase.actionLabel}
                  </p>
                </div>
              </div>

              <Link
                href="/contact"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3 text-sm font-black text-white shadow-[0_16px_42px_rgba(37,99,235,0.22)] transition hover:-translate-y-0.5"
              >
                Plan This App Experience
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mx-auto w-full max-w-[315px]">
              <div className="relative">
                <div className="absolute -right-5 top-8 z-20 rounded-2xl border border-slate-200 bg-white p-3 shadow-[0_16px_42px_rgba(15,23,42,0.16)] dark:border-white/10 dark:bg-slate-950">
                  <p className="text-[10px] font-black uppercase text-blue-700 dark:text-blue-300">
                    Metric
                  </p>
                  <p className="mt-1 max-w-28 text-xs font-black leading-4 text-slate-950 dark:text-white">
                    {activeUseCase.metric}
                  </p>
                </div>
                <div className="rounded-[2.45rem] border-[9px] border-slate-950 bg-slate-950 p-2 shadow-[0_30px_78px_rgba(15,23,42,0.32)] dark:border-slate-800">
                <div className="overflow-hidden rounded-[1.85rem] bg-white dark:bg-slate-950">
                  <div className="border-b border-slate-100 px-4 py-3 dark:border-white/10">
                    <p className="text-sm font-black text-slate-950 dark:text-white">
                      {activeUseCase.previewTitle}
                    </p>
                    <p className="mt-1 text-[10px] font-bold text-slate-500 dark:text-slate-400">
                      {data.heroVisual.appName}
                    </p>
                  </div>

                  <div className="bg-gradient-to-b from-blue-50 to-white p-4 dark:from-blue-950/30 dark:to-slate-950">
                    <div className="rounded-2xl bg-slate-950 p-4 text-white">
                      <p className="text-[10px] font-black uppercase text-blue-200">
                        Active workflow
                      </p>
                      <p className="mt-2 text-lg font-black leading-tight">
                        {activeUseCase.actionLabel}
                      </p>
                    </div>

                    <div className="mt-4 space-y-2.5">
                      {activeUseCase.previewCards.map((card, index) => {
                        const CardIcon = card.icon;

                        return (
                          <div
                            key={`${activeUseCase.id}-${card.label}`}
                            className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm dark:border-white/10 dark:bg-white/[0.06]"
                          >
                            <span
                              className={`grid h-10 w-10 shrink-0 place-items-center rounded-2xl ${
                                index === 0
                                  ? "bg-blue-50 text-blue-600 dark:bg-blue-400/10 dark:text-blue-300"
                                  : "bg-slate-100 text-slate-600 dark:bg-white/10 dark:text-slate-300"
                              }`}
                            >
                              <CardIcon className="h-4 w-4" />
                            </span>
                            <div className="min-w-0 flex-1">
                              <p className="truncate text-xs font-black text-slate-950 dark:text-white">
                                {card.label}
                              </p>
                              <p className="mt-0.5 truncate text-[10px] font-bold text-slate-500 dark:text-slate-400">
                                {card.value}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="mt-4 rounded-2xl border border-emerald-100 bg-emerald-50 p-3 dark:border-emerald-300/15 dark:bg-emerald-400/10">
                      <p className="text-[10px] font-black uppercase text-emerald-700 dark:text-emerald-300">
                        Connected dashboard
                      </p>
                      <p className="mt-1 text-xs font-bold text-slate-600 dark:text-slate-300">
                        {data.demoContent.adminTitle}
                      </p>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DemoGallerySection({
  data,
  onOpenDemo,
}: {
  data: IndustryMobileAppPageData;
  onOpenDemo: (demo: IndustryMobileAppDemo) => void;
}) {
  return (
    <section
      id="mobile-app-demos"
      className="border-t border-slate-200 bg-gradient-to-b from-white to-blue-50/40 px-7 py-12 dark:border-white/10 dark:from-white/[0.04] dark:to-blue-950/10 sm:px-10 lg:px-12"
    >
      <div className="mx-auto max-w-3xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-black text-blue-700 dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-300">
          <Smartphone className="h-4 w-4" />
          Mobile App Demo Gallery
        </div>

        <h2 className="mt-5 text-3xl font-black leading-tight text-slate-950 dark:text-white sm:text-4xl">
          {data.demoGalleryTitle}
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-300">
          {data.demoGalleryDescription}
        </p>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        {[
          "Native-feeling UX",
          "Push Notifications",
          "Role-Based Access",
          "Admin Sync",
          "Analytics Ready",
        ].map((label) => (
          <span
            key={label}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-black text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-300"
          >
            <CheckCircle2 className="h-4 w-4 text-blue-600 dark:text-blue-300" />
            {label}
          </span>
        ))}
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {data.demoGallery.map((demo) => (
          <DemoCard key={demo.title} demo={demo} onOpenDemo={onOpenDemo} />
        ))}
      </div>
    </section>
  );
}

function DemoCard({
  demo,
  onOpenDemo,
}: {
  demo: IndustryMobileAppDemo;
  onOpenDemo: (demo: IndustryMobileAppDemo) => void;
}) {
  const Icon = demo.icon;
  const accentClasses = getDemoAccentClasses(demo.accent);

  return (
    <article className="group overflow-hidden rounded-[1.45rem] border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.10)] dark:border-white/10 dark:bg-white/[0.05]">
      <div className="mb-4 flex items-start gap-3">
        <span
          className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl ${accentClasses.iconBg} ${accentClasses.iconText}`}
        >
          <Icon className="h-5 w-5" />
        </span>

        <div>
          <h3 className="text-base font-black text-slate-950 dark:text-white">
            {demo.title}
          </h3>
          <p className="mt-1 line-clamp-2 text-xs leading-5 text-slate-500 dark:text-slate-400">
            {demo.subtitle}
          </p>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-slate-950">
        <div className="flex items-center justify-between border-b border-slate-200 bg-white px-3 py-2 dark:border-white/10 dark:bg-white/[0.06]">
          <span className="text-[10px] font-black text-slate-900 dark:text-white">
            {demo.brand}
          </span>
          <span className={`h-5 w-16 rounded-md ${accentClasses.button}`} />
        </div>

        <div className="grid min-h-[185px] grid-cols-[1fr_112px] items-stretch gap-3 p-3">
          <div className="flex flex-col justify-center rounded-xl bg-white p-3 dark:bg-white/[0.06]">
            <p className="text-sm font-black leading-tight text-slate-950 dark:text-white">
              {demo.headline}
            </p>

            <div className="mt-3 flex gap-2">
              <span className={`h-6 w-16 rounded-md ${accentClasses.button}`} />
              <span className="h-6 w-14 rounded-md bg-slate-100 dark:bg-white/10" />
            </div>

            <div className="mt-3 grid grid-cols-3 gap-1.5">
              {demo.stats.map((stat, index) => (
                <div key={`${stat}-${index}`} className="text-center">
                  <p className={`text-[10px] font-black leading-3 ${accentClasses.text}`}>
                    {stat}
                  </p>
                  <div className="mx-auto mt-1 h-1.5 w-6 rounded-full bg-slate-100 dark:bg-white/10" />
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-[96px] rounded-[1.55rem] border-[7px] border-slate-950 bg-white p-1.5 shadow-lg dark:border-slate-800 dark:bg-slate-950">
            <div className="mx-auto mb-1 h-1 w-6 rounded-full bg-slate-200" />
            <div
              className="h-20 rounded-xl bg-cover bg-center"
              style={{ backgroundImage: `url(${demo.image})` }}
            />
            <div className="mt-2 space-y-1.5">
              <div className="h-2 rounded bg-slate-100 dark:bg-white/10" />
              <div className="h-2 w-2/3 rounded bg-slate-100 dark:bg-white/10" />
              <div className={`h-6 rounded-lg ${accentClasses.button}`} />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2">
        {demo.chips.slice(0, 4).map((chip) => (
          <span
            key={chip}
            className="truncate rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-[10px] font-bold text-slate-600 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-300"
          >
            {chip}
          </span>
        ))}
      </div>

      <button
        type="button"
        onClick={() => onOpenDemo(demo)}
        className={`mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-xs font-black text-white shadow-sm transition hover:-translate-y-0.5 ${accentClasses.button}`}
      >
        View Full Demo
        <ArrowRight className="h-4 w-4" />
      </button>
    </article>
  );
}

function WhyChooseAndCTASection({ data }: { data: IndustryMobileAppPageData }) {
  return (
    <section className="border-t border-slate-200 px-7 py-10 dark:border-white/10 sm:px-10 lg:px-12">
      <div className="grid gap-6 xl:grid-cols-[1fr_1fr]">
        <div>
          <SectionTitle title={data.benefitsTitle} center />

          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {data.benefits.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm transition hover:-translate-y-1 dark:border-white/10 dark:bg-white/[0.05]"
                >
                  <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-400/10 dark:text-blue-300">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="mt-3 text-sm font-black text-slate-950 dark:text-white">
                    {item.title}
                  </p>
                  <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] bg-gradient-to-r from-blue-700 to-violet-700 p-8 text-white shadow-[0_24px_70px_rgba(37,99,235,0.24)]">
          <MonitorSmartphone className="h-10 w-10 text-blue-100" />
          <h2 className="mt-8 text-2xl font-black">{data.ctaTitle}</h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-blue-50">
            {data.ctaDescription}
          </p>

          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-black text-blue-700"
          >
            Start App Project
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function PricingSection({ data }: { data: IndustryMobileAppPageData }) {
  return (
    <section className="border-t border-slate-200 bg-gradient-to-b from-white to-slate-50/80 px-7 py-12 dark:border-white/10 dark:from-white/[0.04] dark:to-white/[0.025] sm:px-10 lg:px-12">
      <SectionTitle
        title={`Mobile app pricing for ${data.industryName}`}
        description={data.pricingDescription}
        center
      />

      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {data.pricingPlans.map((plan) => (
          <PricingCard key={plan.name} plan={plan} />
        ))}
      </div>
    </section>
  );
}

function PricingCard({ plan }: { plan: IndustryMobileAppPricingPlan }) {
  const Icon = plan.icon;

  return (
    <article
      className={`relative rounded-[1.5rem] border bg-white p-6 shadow-sm transition hover:-translate-y-1 dark:bg-white/[0.05] ${
        plan.popular
          ? "border-violet-400 shadow-[0_18px_48px_rgba(124,58,237,0.14)] dark:border-violet-400/60"
          : "border-slate-200 dark:border-white/10"
      }`}
    >
      {plan.popular ? <PopularBadge /> : null}

      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-400/10 dark:text-blue-300">
        <Icon className="h-5 w-5" />
      </span>

      <h3 className="mt-5 text-xl font-black text-slate-950 dark:text-white">
        {plan.name}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
        {plan.subtitle}
      </p>

      <div className="mt-5">
        <p className="text-xs font-bold text-slate-500 dark:text-slate-400">
          Starting From
        </p>
        <p className="mt-1 text-3xl font-black text-slate-950 dark:text-white">
          {plan.price}
        </p>
      </div>

      <ul className="mt-5 space-y-3">
        {plan.features.slice(0, 5).map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-2 text-sm leading-6 text-slate-700 dark:text-slate-300"
          >
            <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
            {feature}
          </li>
        ))}
      </ul>

      <Link
        href="/contact"
        className={`mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-black transition hover:-translate-y-0.5 ${
          plan.popular
            ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-[0_14px_36px_rgba(37,99,235,0.22)]"
            : "border border-slate-200 bg-slate-50 text-slate-900 dark:border-white/10 dark:bg-white/[0.06] dark:text-white"
        }`}
      >
        Discuss Plan
        <ArrowRight className="h-4 w-4" />
      </Link>
    </article>
  );
}

function TestimonialsSection({
  title,
  items,
}: {
  title: string;
  items: IndustryMobileAppTestimonial[];
}) {
  return (
    <section className="border-t border-slate-200 bg-slate-50/60 px-7 py-12 dark:border-white/10 dark:bg-white/[0.025] sm:px-10 lg:px-12">
      <SectionTitle title={title} center />

      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {items.map((item) => (
          <article
            key={item.name}
            className="rounded-[1.45rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 dark:border-white/10 dark:bg-white/[0.05]"
          >
            <div className="mb-4 flex gap-1 text-amber-400">
              {[0, 1, 2, 3, 4].map((star) => (
                <Star key={star} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
              &quot;{item.quote}&quot;
            </p>
            <div className="mt-6 border-t border-slate-100 pt-5 dark:border-white/10">
              <p className="font-black text-slate-950 dark:text-white">
                {item.name}
              </p>
              <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                {item.role}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function TrustSection({ data }: { data: IndustryMobileAppPageData }) {
  return (
    <section className="border-t border-slate-200 px-7 py-12 dark:border-white/10 sm:px-10 lg:px-12">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <SectionEyebrow>Security / Trust</SectionEyebrow>
          <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950 dark:text-white sm:text-4xl">
            {data.trustTitle}
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
            {data.trustDescription}
          </p>
        </div>
        <ShieldCheck className="h-10 w-10 text-emerald-500" />
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {data.trustItems.map((item) => (
          <TrustCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}

function TrustCard({ item }: { item: IndustryMobileAppTrustItem }) {
  const Icon = item.icon;

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 dark:border-white/10 dark:bg-white/[0.05]">
      <Icon className="h-6 w-6 text-emerald-600 dark:text-emerald-300" />
      <h3 className="mt-4 text-sm font-black leading-5 text-slate-950 dark:text-white">
        {item.title}
      </h3>
    </article>
  );
}

function FinalCTASection() {
  return (
    <section className="border-t border-slate-200 px-7 py-10 dark:border-white/10 sm:px-10 lg:px-12">
      <div className="overflow-hidden rounded-[2rem] border border-slate-800 bg-[linear-gradient(135deg,#020617,#0f172a_48%,#1d4ed8)] p-6 text-white shadow-[0_24px_70px_rgba(15,23,42,0.20)] sm:p-8 lg:p-10">
        <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase text-blue-300">
              Build a mobile app your customers actually use
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-black leading-tight sm:text-4xl">
              Build a mobile app experience your teams and customers actually use.
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
              Turn scattered workflows into a connected mobile app with role-based access, admin visibility, and industry-specific screens.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-7 py-4 text-sm font-black text-white shadow-[0_18px_50px_rgba(37,99,235,0.25)] transition hover:-translate-y-0.5"
            >
              Start My Mobile App Build
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#mobile-app-demos"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/10 px-7 py-4 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-white/15"
            >
              View Demos
              <Play className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {["Secure access", "Admin connected", "Analytics ready"].map((item) => (
            <div key={item} className="rounded-2xl bg-white/10 px-4 py-3 text-sm font-black ring-1 ring-white/10">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PopularBadge() {
  return (
    <span className="absolute right-5 top-5 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-3 py-1 text-[10px] font-black uppercase text-white shadow-sm">
      Popular
    </span>
  );
}

function SectionTitle({
  title,
  description,
  center = false,
}: {
  title: string;
  description?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <h2 className="text-3xl font-black leading-tight text-slate-950 dark:text-white sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function Badge({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-black uppercase text-blue-700 dark:border-blue-300/20 dark:bg-blue-400/10 dark:text-blue-300">
      {children}
    </div>
  );
}

function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-extrabold uppercase text-blue-700 dark:text-blue-300">
      {children}
    </p>
  );
}

function getDemoAccentClasses(accent: IndustryMobileAppDemo["accent"]) {
  const classes = {
    blue: {
      button: "bg-blue-600",
      text: "text-blue-700 dark:text-blue-300",
      iconBg: "bg-blue-50 dark:bg-blue-400/10",
      iconText: "text-blue-700 dark:text-blue-300",
    },
    emerald: {
      button: "bg-emerald-600",
      text: "text-emerald-700 dark:text-emerald-300",
      iconBg: "bg-emerald-50 dark:bg-emerald-400/10",
      iconText: "text-emerald-700 dark:text-emerald-300",
    },
    violet: {
      button: "bg-violet-600",
      text: "text-violet-700 dark:text-violet-300",
      iconBg: "bg-violet-50 dark:bg-violet-400/10",
      iconText: "text-violet-700 dark:text-violet-300",
    },
    orange: {
      button: "bg-orange-600",
      text: "text-orange-700 dark:text-orange-300",
      iconBg: "bg-orange-50 dark:bg-orange-400/10",
      iconText: "text-orange-700 dark:text-orange-300",
    },
    rose: {
      button: "bg-rose-600",
      text: "text-rose-700 dark:text-rose-300",
      iconBg: "bg-rose-50 dark:bg-rose-400/10",
      iconText: "text-rose-700 dark:text-rose-300",
    },
    teal: {
      button: "bg-teal-600",
      text: "text-teal-700 dark:text-teal-300",
      iconBg: "bg-teal-50 dark:bg-teal-400/10",
      iconText: "text-teal-700 dark:text-teal-300",
    },
  } satisfies Record<
    IndustryMobileAppDemo["accent"],
    {
      button: string;
      text: string;
      iconBg: string;
      iconText: string;
    }
  >;

  return classes[accent];
}

function splitHighlightedText(title: string, highlight: string) {
  const index = title.toLowerCase().indexOf(highlight.toLowerCase());

  if (index === -1) {
    return [title, ""] as const;
  }

  return [
    title.slice(0, index),
    title.slice(index + highlight.length),
  ] as const;
}
