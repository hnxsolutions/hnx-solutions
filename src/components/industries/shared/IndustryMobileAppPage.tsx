"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
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

      <section className="relative px-5 pb-20 pt-24 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <div className="mx-auto w-full max-w-[min(92vw,1440px)]">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white/90 shadow-[0_28px_90px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.05]">
            <HeroSection data={data} />

            <div className="grid border-t border-slate-200 dark:border-white/10 xl:grid-cols-[1.05fr_0.95fr]">
              <ProblemsSection title={data.problemsTitle} items={data.problems} />
              <IncludesSection title={data.includesTitle} items={data.includes} />
            </div>

            <JourneySection data={data} />
            <ModulesSection data={data} />
            <RoleExperienceSection data={data} />
            <DemoGallerySection data={data} onOpenDemo={setActiveDemo} />
            <WhyChooseAndCTASection data={data} />
            <PricingSection data={data} />
            <TestimonialsSection title={data.testimonialsTitle} items={data.testimonials} />
            <TrustSection data={data} />
            <FinalCTASection data={data} />
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

  return (
    <section className="relative overflow-hidden px-6 py-7 sm:px-8 lg:px-10 lg:py-9 xl:px-12">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(239,246,255,0.94),rgba(255,255,255,0.72),rgba(238,242,255,0.82)),radial-gradient(circle_at_18%_16%,rgba(59,130,246,0.10),transparent_28%),radial-gradient(circle_at_78%_16%,rgba(124,58,237,0.08),transparent_28%)] dark:bg-[linear-gradient(135deg,rgba(15,23,42,0.42),rgba(2,6,23,0.18),rgba(30,41,59,0.24)),radial-gradient(circle_at_18%_16%,rgba(59,130,246,0.12),transparent_28%),radial-gradient(circle_at_78%_16%,rgba(124,58,237,0.10),transparent_28%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.045)_1px,transparent_1px)] bg-[size:42px_42px] opacity-70 [mask-image:linear-gradient(to_bottom,black,transparent_86%)] dark:bg-[linear-gradient(rgba(125,211,252,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(125,211,252,0.045)_1px,transparent_1px)]" />

      <div className="relative">
        <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm font-bold text-slate-500 dark:text-slate-400">
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

        <div className="grid items-center gap-8 xl:grid-cols-[0.96fr_1.04fr]">
          <div>
            <Badge>
              <Smartphone className="h-4 w-4" />
              {data.industryName} Mobile App Solution
            </Badge>

            <h1 className="mt-6 max-w-[760px] text-4xl font-black leading-[0.98] text-slate-950 dark:text-white sm:text-5xl lg:text-[3.35rem] xl:text-[3.9rem]">
              {titleStart}
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                {data.highlight}
              </span>
              {titleEnd}
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300 lg:text-lg">
              {data.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {data.heroChips.map((chip) => {
                const Icon = chip.icon;

                return (
                  <div
                    key={chip.label}
                    className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/88 px-3.5 py-2 text-xs font-black text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-300"
                  >
                    <Icon className="h-4 w-4 text-blue-600 dark:text-blue-300" />
                    {chip.label}
                  </div>
                );
              })}
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-7 py-4 text-sm font-black text-white shadow-[0_18px_50px_rgba(37,99,235,0.25)] transition hover:-translate-y-0.5"
              >
                Build My {data.industryName} App
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="#mobile-app-use-cases"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-7 py-4 text-sm font-black text-blue-700 shadow-sm transition hover:-translate-y-0.5 dark:border-white/10 dark:bg-white/[0.06] dark:text-blue-300"
              >
                View App Use Cases
              </Link>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {["Secure roles", "Admin connected", "Analytics ready"].map((chip) => (
                <span
                  key={chip}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3.5 py-2 text-xs font-black text-slate-600 shadow-sm dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-300"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
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

function PhoneHeroMockup({ data }: { data: IndustryMobileAppPageData }) {
  const visual = data.heroVisual;
  const appRows = visual.cards.slice(0, 4);
  const navItems = visual.navItems.slice(0, 4);

  return (
    <div className="relative mx-auto w-full max-w-[660px]" style={{ perspective: "1500px" }}>
      <div className="relative h-[410px] overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-4 shadow-[0_30px_90px_rgba(15,23,42,0.13)] dark:border-white/10 dark:bg-slate-950/82 sm:h-[440px] lg:h-[455px]">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(239,246,255,0.88),rgba(238,242,255,0.94)),radial-gradient(circle_at_28%_30%,rgba(37,99,235,0.20),transparent_33%),radial-gradient(circle_at_78%_16%,rgba(14,165,233,0.16),transparent_32%),radial-gradient(circle_at_76%_78%,rgba(124,58,237,0.18),transparent_32%)] dark:bg-[linear-gradient(135deg,rgba(15,23,42,0.98),rgba(2,6,23,0.90),rgba(15,23,42,0.95)),radial-gradient(circle_at_28%_30%,rgba(37,99,235,0.26),transparent_33%),radial-gradient(circle_at_78%_16%,rgba(14,165,233,0.16),transparent_32%),radial-gradient(circle_at_76%_78%,rgba(124,58,237,0.20),transparent_32%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.055)_1px,transparent_1px)] bg-[size:34px_34px] opacity-70 [mask-image:linear-gradient(135deg,black,transparent_82%)] dark:bg-[linear-gradient(rgba(125,211,252,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(125,211,252,0.06)_1px,transparent_1px)]" />
        <div
          className="absolute right-0 top-0 h-full w-[42%] bg-cover bg-center opacity-[0.09] mix-blend-multiply dark:opacity-[0.08] dark:mix-blend-screen"
          style={{ backgroundImage: `url(${data.heroImage})` }}
        />
        <div className="absolute left-1/2 top-[53%] h-28 w-[24rem] -translate-x-1/2 rounded-[100%] bg-slate-950/14 blur-2xl dark:bg-blue-400/10" />

        <div
          className="absolute left-7 top-12 hidden w-[230px] rounded-[1.8rem] border border-white/75 bg-white/78 p-3 shadow-[0_28px_76px_rgba(15,23,42,0.16)] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.08] lg:block"
          style={{ transform: "rotateY(27deg) rotateZ(-10deg) translateZ(-80px)", transformStyle: "preserve-3d" }}
        >
          <div className="overflow-hidden rounded-[1.45rem] border border-slate-200 bg-slate-950 text-white dark:border-white/10">
            <div
              className="h-20 bg-cover bg-center opacity-80"
              style={{ backgroundImage: `linear-gradient(rgba(15,23,42,0.10),rgba(15,23,42,0.72)),url(${data.heroImage})` }}
            />
            <div className="p-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] font-black uppercase text-blue-200">Team view</p>
                <p className="mt-1 text-sm font-black">{visual.appName}</p>
              </div>
              <span className="grid h-8 w-8 place-items-center rounded-2xl bg-white/10">
                <MonitorSmartphone className="h-4 w-4 text-cyan-200" />
              </span>
            </div>
            <div className="mt-3 rounded-2xl bg-white/10 p-3">
              <p className="text-[10px] font-black uppercase text-slate-300">Operations</p>
              <p className="mt-1 text-xs font-black leading-4">{data.demoContent.adminTitle}</p>
            </div>
            <div className="mt-3 flex h-16 items-end gap-2">
              {[68, 42, 82, 58, 92].map((height, index) => (
                <span
                  key={`${height}-${index}`}
                  className="flex-1 rounded-t-xl bg-gradient-to-t from-blue-500 to-cyan-300"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
            </div>
          </div>
        </div>

        <div className="absolute right-6 top-7 z-20 hidden w-[205px] rounded-[1.35rem] border border-white/80 bg-white/92 p-4 shadow-[0_22px_60px_rgba(15,23,42,0.14)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/80 md:block">
          <div className="flex items-start gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-emerald-50 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-300">
              <BarChart3 className="h-5 w-5" />
            </span>
            <div>
              <p className="text-[10px] font-black uppercase tracking-wide text-slate-400">Live app metric</p>
              <p className="mt-1 text-base font-black leading-tight text-slate-950 dark:text-white">
                {visual.floatingMetric}
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-6 z-20 hidden max-w-[245px] rounded-[1.35rem] border border-white/80 bg-white/92 p-3.5 shadow-[0_22px_60px_rgba(37,99,235,0.15)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/80 sm:block">
          <div className="flex items-start gap-3">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-400/10 dark:text-blue-300">
              <Bell className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs font-black text-slate-950 dark:text-white">Push notification</p>
              <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                {visual.notification}
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 right-7 z-20 hidden max-w-[210px] rounded-[1.35rem] border border-white/80 bg-white/92 p-3.5 shadow-[0_22px_60px_rgba(15,23,42,0.15)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/80 lg:block">
          <p className="text-[10px] font-black uppercase tracking-wide text-violet-600 dark:text-violet-300">
            Next action
          </p>
          <p className="mt-1 text-sm font-black leading-5 text-slate-950 dark:text-white">
            {visual.actionCard}
          </p>
        </div>

        <div className="relative z-10 flex h-full items-center justify-center">
          <div
            className="relative w-[min(268px,74vw)] sm:w-[278px]"
            style={{ transform: "rotateX(5deg) rotateY(-12deg) rotateZ(1deg)", transformStyle: "preserve-3d" }}
          >
            <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-br from-white/90 via-blue-200/40 to-violet-200/45 blur-xl dark:from-blue-500/15 dark:via-cyan-400/10 dark:to-violet-500/15" />
            <div className="relative rounded-[2.7rem] border-[9px] border-slate-950 bg-slate-950 p-2 shadow-[0_42px_105px_rgba(15,23,42,0.42)] dark:border-slate-800">
              <div className="absolute left-1/2 top-3 z-20 h-4 w-24 -translate-x-1/2 rounded-full bg-slate-950 dark:bg-slate-800" />
              <div className="overflow-hidden rounded-[2rem] bg-white dark:bg-slate-950">
                <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3 dark:border-white/10">
                  <div>
                    <p className="text-sm font-black text-slate-950 dark:text-white">{visual.appName}</p>
                    <p className="mt-0.5 text-[10px] font-bold text-slate-500 dark:text-slate-400">
                      Secure mobile workspace
                    </p>
                  </div>
                  <span className="grid h-9 w-9 place-items-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-400/10 dark:text-blue-300">
                    <Smartphone className="h-4 w-4" />
                  </span>
                </div>

                <div className="bg-gradient-to-b from-blue-50 via-white to-slate-50 p-3.5 dark:from-blue-950/35 dark:via-slate-950 dark:to-slate-950">
                  <div className="rounded-[1.35rem] bg-[linear-gradient(135deg,#0f172a,#1d4ed8_55%,#6d28d9)] p-3.5 text-white shadow-[0_18px_46px_rgba(37,99,235,0.30)]">
                    <div className="flex items-center justify-between">
                      <p className="text-[10px] font-black uppercase tracking-wide text-blue-100">
                        {data.industryName} app
                      </p>
                      <span className="rounded-full bg-white/15 px-2.5 py-1 text-[9px] font-black">
                        Live
                      </span>
                    </div>
                    <h3 className="mt-2 text-lg font-black leading-tight">{visual.screenTitle}</h3>
                    <p className="mt-1.5 line-clamp-2 text-xs leading-5 text-blue-50/85">
                      {visual.screenSubtitle}
                    </p>
                    <div className="mt-3 flex items-center gap-2 rounded-2xl bg-white/12 p-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
                      <span className="text-[10px] font-black text-white">{visual.actionLabel}</span>
                    </div>
                  </div>

                  <div className="mt-2.5 space-y-1.5">
                    {appRows.map((card, index) => {
                      const Icon = card.icon;

                      return (
                        <div
                          key={card.label}
                          className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/92 p-2.5 shadow-[0_10px_28px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-white/[0.06]"
                        >
                          <span
                            className={`grid h-9 w-9 shrink-0 place-items-center rounded-2xl ${
                              index === 0
                                ? "bg-blue-600 text-white shadow-[0_12px_28px_rgba(37,99,235,0.24)]"
                                : "bg-slate-100 text-slate-600 dark:bg-white/10 dark:text-slate-300"
                            }`}
                          >
                            <Icon className="h-4 w-4" />
                          </span>
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-xs font-black text-slate-950 dark:text-white">
                              {card.label}
                            </p>
                            <p className="mt-0.5 truncate text-[10px] font-bold text-slate-500 dark:text-slate-400">
                              {card.value}
                            </p>
                          </div>
                          <ChevronRight className="h-4 w-4 text-slate-300" />
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-2.5 grid grid-cols-4 gap-1.5 rounded-2xl border border-slate-200 bg-white/80 p-1.5 dark:border-white/10 dark:bg-white/[0.05]">
                    {navItems.map((item, index) => (
                      <div
                        key={item}
                        className={`rounded-xl px-1 py-2 text-center text-[9px] font-black ${
                          index === 0
                            ? "bg-slate-950 text-white dark:bg-white dark:text-slate-950"
                            : "text-slate-500 dark:text-slate-300"
                        }`}
                      >
                        {item}
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
      <div className="grid gap-8 xl:grid-cols-[0.88fr_1.12fr] xl:items-center">
        <div>
          <SectionEyebrow>App Journey</SectionEyebrow>
          <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950 dark:text-white sm:text-4xl">
            {data.flowTitle}
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300">
            A clear mobile journey keeps every user action connected to staff follow-up, status updates, and reporting.
          </p>

          <div className="mt-7 grid gap-3">
            {data.flowSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.title}
                  className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 dark:border-white/10 dark:bg-white/[0.05]"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-sm font-black text-white">
                    {index + 1}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <Icon className="h-4 w-4 text-blue-600 dark:text-blue-300" />
                      <h3 className="font-black text-slate-950 dark:text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
                      {step.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 p-5 text-white shadow-[0_28px_80px_rgba(15,23,42,0.22)] dark:border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-black uppercase text-blue-300">
                  Live mobile journey
                </p>
                <h3 className="mt-2 text-2xl font-black">
                  {data.demoContent.primaryAction}
                </h3>
              </div>
              <Smartphone className="h-7 w-7 text-cyan-300" />
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-5">
              {data.flowSteps.map((step, index) => (
                <div key={`${step.title}-visual`} className="rounded-2xl bg-white/10 p-3 ring-1 ring-white/10">
                  <p className="text-2xl font-black text-cyan-200">
                    0{index + 1}
                  </p>
                  <p className="mt-3 text-xs font-black leading-5">
                    {step.title}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-7 rounded-2xl bg-white p-4 text-slate-950">
              <div className="flex items-center justify-between">
                <p className="text-sm font-black">{data.demoContent.adminTitle}</p>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-black text-emerald-700">
                  Connected
                </span>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {data.demoContent.analyticsMetrics.slice(0, 3).map((metric) => (
                  <div key={metric.label} className="rounded-xl bg-slate-50 p-3">
                    <p className="text-xs font-bold text-slate-500">{metric.label}</p>
                    <p className="mt-1 text-lg font-black">{metric.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
    <article className="group min-h-[255px] rounded-[1.45rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.10)] dark:border-white/10 dark:bg-white/[0.05]">
      <div className="flex items-start justify-between gap-4">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 text-blue-600 ring-1 ring-blue-100 dark:from-blue-400/10 dark:to-cyan-400/10 dark:text-blue-300 dark:ring-blue-300/10">
          <Icon className="h-5 w-5" />
        </span>
        <Layers3 className="h-5 w-5 text-slate-300 transition group-hover:text-blue-400" />
      </div>

      <h3 className="mt-5 text-lg font-black leading-6 text-slate-950 dark:text-white">
        {module.title}
      </h3>
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
          Mobile App Use Cases for {data.industryName}
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

              <div className="mt-7 rounded-[1.35rem] border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/[0.06]">
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
        View App Demo
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
    <section className="border-t border-slate-200 px-7 py-12 dark:border-white/10 sm:px-10 lg:px-12">
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

function FinalCTASection({ data }: { data: IndustryMobileAppPageData }) {
  return (
    <section className="border-t border-slate-200 px-7 py-10 dark:border-white/10 sm:px-10 lg:px-12">
      <div className="overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950 p-6 text-white shadow-[0_24px_70px_rgba(15,23,42,0.20)] sm:p-8 lg:p-10">
        <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase text-blue-300">
              Build a mobile app your customers actually use
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-black leading-tight sm:text-4xl">
              Create an industry-specific app for booking, tracking, communication, and growth.
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
              {data.ctaDescription}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-7 py-4 text-sm font-black text-white shadow-[0_18px_50px_rgba(37,99,235,0.25)] transition hover:-translate-y-0.5"
            >
              Build My App
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
