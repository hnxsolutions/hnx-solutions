"use client";

import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BarChart3,
  Bell,
  CalendarCheck,
  CheckCircle2,
  FileText,
  Menu,
  MonitorSmartphone,
  PackageSearch,
  PhoneCall,
  Search,
  ShieldCheck,
  Smartphone,
  Star,
  X,
} from "lucide-react";
import type {
  IndustryWebsiteCard,
  IndustryWebsiteDemo,
  IndustryWebsiteModule,
  IndustryWebsitePageData,
  IndustryWebsitePricingPlan,
  IndustryWebsiteProblem,
  IndustryWebsiteProvider,
  IndustryWebsiteTestimonial,
  IndustryWebsiteTrustItem,
} from "./industryWebsiteData";
import SharedIndustryWebsiteDemoModal from "./IndustryWebsiteDemoModal";
import { getIndustryWebsitePage } from "./industryWebsiteData";

type DemoTab = "desktop" | "mobile" | "flow" | "catalog" | "analytics";

const demoTabs: Array<{ id: DemoTab; label: string; icon: LucideIcon }> = [
  { id: "desktop", label: "Desktop Preview", icon: MonitorSmartphone },
  { id: "mobile", label: "Mobile Preview", icon: Smartphone },
  { id: "flow", label: "Lead Flow", icon: CalendarCheck },
  { id: "catalog", label: "Catalog / Listings", icon: PackageSearch },
  { id: "analytics", label: "Analytics Dashboard", icon: BarChart3 },
];

export default function IndustryWebsitePage({
  industrySlug,
  websiteSlug,
}: {
  industrySlug: string;
  websiteSlug: string;
}) {
  const data = getIndustryWebsitePage(industrySlug, websiteSlug);
  const [activeDemo, setActiveDemo] = useState<IndustryWebsiteDemo | null>(null);

  if (!data) {
    return null;
  }

  return (
    <main className="relative overflow-hidden bg-[#f8fbff] text-slate-950 dark:bg-[#050814] dark:text-white">
      <div className="pointer-events-none absolute left-0 top-0 h-[34rem] w-[34rem] rounded-full bg-blue-200/35 blur-3xl dark:bg-blue-500/10" />
      <div className="pointer-events-none absolute right-0 top-20 h-[30rem] w-[30rem] rounded-full bg-violet-200/35 blur-3xl dark:bg-violet-500/10" />

      <section className="relative px-3 pb-20 pt-24 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <div className="mx-auto w-full max-w-full sm:max-w-[min(92vw,1440px)]">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white/90 shadow-[0_28px_90px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.05]">
            <HeroSection data={data} />

            <div className="grid border-t border-slate-200 dark:border-white/10 xl:grid-cols-[1.05fr_0.95fr]">
              <ProblemsSection title={data.problemsTitle} items={data.problems} />
              <IncludesSection title={data.featuresTitle} items={data.features} />
            </div>

            <IndustryModulesSection data={data} />
            <TrustedProvidersSection data={data} />
            <WebsiteDemosSection data={data} onOpenDemo={setActiveDemo} />
            <WhyChooseAndCTASection data={data} />
            <PricingSection data={data} />
            <TestimonialsSection title={data.testimonialsTitle} items={data.testimonials} />
            <ComplianceSection data={data} />
          </div>
        </div>
      </section>

      {activeDemo ? (
        <SharedIndustryWebsiteDemoModal
          data={data}
          demo={activeDemo}
          onClose={() => setActiveDemo(null)}
        />
      ) : null}

      <MarqueeStyles />
    </main>
  );
}

function HeroSection({ data }: { data: IndustryWebsitePageData }) {
  const [titleStart, titleEnd] = splitHighlightedText(data.title, data.highlight);

  return (
    <section className="relative overflow-hidden px-7 py-1 sm:px-10 lg:px-12 xl:px-14">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(59,130,246,0.12),transparent_28%),radial-gradient(circle_at_78%_16%,rgba(124,58,237,0.10),transparent_28%)]" />

      <div className="relative grid items-center gap-10 xl:grid-cols-[0.78fr_1.22fr]">
        <div>
          <Badge>
            <MonitorSmartphone className="h-4 w-4" />
            {data.eyebrow}
          </Badge>

          <h1 className="mt-7 max-w-2xl text-[clamp(2.5rem,4.6vw,3.1rem)] font-black leading-[1.04] tracking-[-0.055em] text-slate-950 dark:text-white">
            {titleStart}
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              {data.highlight}
            </span>
            {titleEnd}
          </h1>

          <p className="mt-5 max-w-xl text-base leading-8 text-slate-600 dark:text-slate-300">
            {data.description}
          </p>

          <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {data.heroChips.map((chip) => {
              const Icon = chip.icon;

              return (
                <div
                  key={chip.label}
                  className="rounded-2xl border border-slate-200 bg-white/85 p-3 shadow-sm dark:border-white/10 dark:bg-white/[0.06]"
                >
                  <Icon className="mb-2 h-5 w-5 text-blue-600 dark:text-blue-300" />
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
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-7 py-4 text-sm font-black text-white shadow-[0_18px_50px_rgba(37,99,235,0.25)] transition hover:-translate-y-0.5"
            >
              {data.ctaLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="#industry-website-demos"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-7 py-4 text-sm font-black text-blue-700 shadow-sm transition hover:-translate-y-0.5 dark:border-white/10 dark:bg-white/[0.06] dark:text-blue-300"
            >
              View Live Demo
            </Link>
          </div>
        </div>

        <WebsiteMockup data={data} />
      </div>
    </section>
  );
}

function WebsiteMockup({ data }: { data: IndustryWebsitePageData }) {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute -left-10 top-10 h-40 w-40 rounded-full bg-blue-300/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-8 bottom-10 h-48 w-48 rounded-full bg-violet-300/30 blur-3xl" />

      <div className="absolute -right-3 bottom-6 z-30 hidden w-[185px] overflow-hidden rounded-[1.6rem] border-[7px] border-slate-950 bg-white p-2 shadow-[0_24px_70px_rgba(15,23,42,0.20)] dark:border-slate-800 lg:block">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-[10px] font-black text-blue-700">
            {data.heroBrand}
          </span>
          <span className="h-1.5 w-8 rounded-full bg-slate-300" />
        </div>

        <div
          className="h-24 rounded-xl bg-cover bg-center"
          style={{ backgroundImage: `url(${data.heroImage})` }}
        />

        <div className="mt-3 space-y-2">
          <p className="text-sm font-black leading-tight text-slate-950">
            {data.heroHeadline}
          </p>
          <div className="h-8 rounded-lg bg-blue-600" />
          <div className="grid grid-cols-2 gap-2">
            <div className="h-9 rounded-lg bg-slate-100" />
            <div className="h-9 rounded-lg bg-slate-100" />
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-3 shadow-[0_28px_90px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-white/[0.06]">
        <div className="overflow-hidden rounded-[1.5rem] bg-slate-50 dark:bg-slate-950">
          <div className="flex items-center justify-between bg-white px-5 py-4 dark:bg-white/[0.06]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-emerald-600" />
              <span className="text-sm font-black text-slate-950 dark:text-white">
                {data.heroBrand}
              </span>
            </div>

            <div className="hidden gap-5 text-xs font-bold text-slate-500 dark:text-slate-400 md:flex">
              {data.heroNav.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <span className="rounded-lg bg-emerald-500 px-3 py-2 text-xs font-black text-white">
              {data.heroPrimaryCta}
            </span>
          </div>

          <div className="relative grid min-h-[345px] items-center gap-6 bg-gradient-to-br from-blue-50 to-white p-7 dark:from-blue-950/30 dark:to-slate-950 md:grid-cols-[0.85fr_1.15fr]">
            <div>
              <h2 className="text-3xl font-black leading-tight text-slate-950 dark:text-white">
                {data.heroHeadline}
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {data.heroSubtext}
              </p>

              <div className="mt-5 flex gap-3">
                <span className="rounded-lg bg-emerald-500 px-4 py-2 text-xs font-black text-white">
                  {data.heroPrimaryCta}
                </span>
                <span className="rounded-lg bg-white px-4 py-2 text-xs font-black text-slate-700 dark:bg-white/10 dark:text-slate-200">
                  {data.heroSecondaryCta}
                </span>
              </div>
            </div>

            <div
              className="min-h-[280px] rounded-[1.5rem] bg-cover bg-center shadow-inner"
              style={{ backgroundImage: `url(${data.heroImage})` }}
            />

            <div className="absolute -bottom-7 left-8 right-8 grid grid-cols-4 gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-[0_18px_50px_rgba(15,23,42,0.10)] dark:border-white/10 dark:bg-slate-950">
              {data.heroStats.map(([value, label]) => (
                <div key={label}>
                  <p className="text-base font-black text-emerald-600">
                    {value}
                  </p>
                  <p className="text-[10px] font-semibold text-slate-500 dark:text-slate-400">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="h-9" />
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
  items: IndustryWebsiteProblem[];
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
              <span className={toneClass(item.tone)}>
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
  items: IndustryWebsiteCard[];
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

function IndustryModulesSection({ data }: { data: IndustryWebsitePageData }) {
  const marqueeModules = [...data.modules, ...data.modules];

  return (
    <section className="border-t border-slate-200 px-0 py-8 dark:border-white/10">
      <div className="px-7 sm:px-10 lg:px-12">
        <SectionTitle
          title={data.modulesTitle}
          description={data.modulesDescription}
          center
        />
      </div>

      <div className="mt-6 overflow-hidden">
        <div className="industry-website-marquee-left flex w-max gap-4 px-7 sm:px-10 lg:px-12">
          {marqueeModules.map((module, index) => (
            <ModuleCard key={`${module.title}-${index}`} module={module} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ModuleCard({ module }: { module: IndustryWebsiteModule }) {
  const Icon = module.icon;

  return (
    <article className="group h-[235px] w-[280px] shrink-0 overflow-hidden rounded-[1.35rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,0.10)] dark:border-white/10 dark:bg-white/[0.05] sm:w-[310px]">
      <div
        className="relative h-24 bg-cover bg-center"
        style={{ backgroundImage: `url(${module.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/15 via-transparent to-transparent" />
        <span className="absolute -bottom-5 left-5 grid h-10 w-10 place-items-center rounded-xl border border-cyan-200 bg-cyan-50 text-cyan-600 shadow-[0_10px_24px_rgba(8,145,178,0.16)] dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-300">
          <Icon className="h-5 w-5" />
        </span>
      </div>

      <div className="px-5 pb-5 pt-8">
        <h3 className="text-lg font-black leading-6 text-slate-950 dark:text-white">
          {module.title}
        </h3>

        <div className="mt-3 space-y-2">
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

function TrustedProvidersSection({ data }: { data: IndustryWebsitePageData }) {
  const marqueeProviders = [...data.trustedProviders, ...data.trustedProviders];

  return (
    <section className="border-t border-slate-200 px-0 py-8 dark:border-white/10">
      <div className="px-7 sm:px-10 lg:px-12">
        <SectionTitle
          title={data.trustedProvidersTitle}
          description={data.trustedProvidersDescription}
          center
        />
      </div>

      <div className="mt-6 overflow-hidden">
        <div className="industry-website-marquee-right flex w-max gap-4 px-7 sm:px-10 lg:px-12">
          {marqueeProviders.map((provider, index) => (
            <ProviderCard key={`${provider.name}-${index}`} provider={provider} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProviderCard({ provider }: { provider: IndustryWebsiteProvider }) {
  return (
    <article className="flex h-[92px] w-[285px] shrink-0 items-center gap-3 rounded-[1.25rem] border border-slate-200 bg-white p-3 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(15,23,42,0.09)] dark:border-white/10 dark:bg-white/[0.05]">
      <div
        className="h-14 w-14 shrink-0 rounded-2xl bg-cover bg-center"
        style={{ backgroundImage: `url(${provider.image})` }}
      />

      <div className="min-w-0">
        <p className="truncate text-sm font-black leading-5 text-slate-950 dark:text-white">
          {provider.name}
        </p>
        <p className="truncate text-xs font-bold text-slate-500 dark:text-slate-400">
          {provider.type}
        </p>

        <div className="mt-2 inline-flex items-center gap-1 rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-black text-blue-700 dark:bg-blue-400/10 dark:text-blue-300">
          <CheckCircle2 className="h-3 w-3" />
          Website Ready
        </div>
      </div>
    </article>
  );
}

function WebsiteDemosSection({
  data,
  onOpenDemo,
}: {
  data: IndustryWebsitePageData;
  onOpenDemo: (demo: IndustryWebsiteDemo) => void;
}) {
  return (
    <section
      id="industry-website-demos"
      className="border-t border-slate-200 bg-gradient-to-b from-white to-blue-50/40 px-7 py-12 dark:border-white/10 dark:from-white/[0.04] dark:to-blue-950/10 sm:px-10 lg:px-12"
    >
      <div className="mx-auto max-w-3xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-black text-blue-700 dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-300">
          <MonitorSmartphone className="h-4 w-4" />
          Website Demo Gallery
        </div>

        <h2 className="mt-5 text-[clamp(1.8rem,3vw,2.8rem)] font-black leading-tight tracking-[-0.04em] text-slate-950 dark:text-white">
          {data.demoGalleryTitle}
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-300">
          {data.demoGalleryDescription}
        </p>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        {[
          ["Modern Design", ShieldCheck],
          ["Mobile Responsive", Smartphone],
          ["Inquiry Flow", CalendarCheck],
          ["SEO Optimized", Search],
          ["Easy To Customize", MonitorSmartphone],
        ].map(([label, Icon]) => {
          const ChipIcon = Icon as LucideIcon;

          return (
            <span
              key={label as string}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-black text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-300"
            >
              <ChipIcon className="h-4 w-4 text-blue-600 dark:text-blue-300" />
              {label as string}
            </span>
          );
        })}
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {data.demoGallery.map((demo) => (
          <DemoCard key={demo.title} demo={demo} onOpenDemo={onOpenDemo} />
        ))}
      </div>

      <div className="mt-8 grid gap-5 rounded-[1.6rem] border border-slate-200 bg-slate-950 p-5 text-white shadow-[0_24px_70px_rgba(15,23,42,0.16)] dark:border-white/10 lg:grid-cols-[1fr_auto] lg:items-center">
        <div className="flex items-start gap-4">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-blue-500/15 text-blue-300">
            <ShieldCheck className="h-6 w-6" />
          </span>

          <div>
            <h3 className="text-lg font-black">{data.demoCtaTitle}</h3>
            <p className="mt-1 max-w-3xl text-sm leading-6 text-slate-300">
              {data.demoCtaDescription}
            </p>
          </div>
        </div>

        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-7 py-4 text-sm font-black text-white shadow-[0_18px_50px_rgba(37,99,235,0.25)] transition hover:-translate-y-0.5"
        >
          Build My Website Now
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

function DemoCard({
  demo,
  onOpenDemo,
}: {
  demo: IndustryWebsiteDemo;
  onOpenDemo: (demo: IndustryWebsiteDemo) => void;
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

        <div className="grid min-h-[138px] grid-cols-[1fr_116px] items-stretch gap-2 p-3">
          <div className="flex flex-col justify-center rounded-xl bg-white p-3 dark:bg-white/[0.06]">
            <p className="text-sm font-black leading-tight text-slate-950 dark:text-white">
              {demo.headline}
            </p>

            <div className="mt-3 flex gap-2">
              <span className={`h-6 w-16 rounded-md ${accentClasses.button}`} />
              <span className="h-6 w-14 rounded-md bg-slate-100 dark:bg-white/10" />
            </div>

            <div className="mt-3 grid grid-cols-4 gap-1.5">
              {demo.stats.map((stat, index) => (
                <div key={`${stat}-${index}`} className="text-center">
                  <p className={`text-[11px] font-black ${accentClasses.text}`}>
                    {stat}
                  </p>
                  <div className="mx-auto mt-1 h-1.5 w-6 rounded-full bg-slate-100 dark:bg-white/10" />
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div
              className="h-full min-h-[138px] rounded-xl bg-cover bg-center"
              style={{ backgroundImage: `url(${demo.image})` }}
            />

            <div className="absolute bottom-2 right-2 hidden h-[104px] w-[58px] overflow-hidden rounded-xl border-[4px] border-slate-950 bg-white p-1 shadow-lg sm:block dark:border-slate-800">
              <div className="mb-1 h-1 w-5 rounded-full bg-slate-200" />
              <div
                className="h-12 rounded-md bg-cover bg-center"
                style={{ backgroundImage: `url(${demo.image})` }}
              />
              <div className="mt-1.5 space-y-1">
                <div className="h-1.5 rounded bg-slate-100" />
                <div className="h-1.5 w-2/3 rounded bg-slate-100" />
                <div className={`h-3 rounded ${accentClasses.button}`} />
              </div>
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

function WhyChooseAndCTASection({ data }: { data: IndustryWebsitePageData }) {
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
                  className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm dark:border-white/10 dark:bg-white/[0.05]"
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
          <h2 className="text-2xl font-black">{data.ctaTitle}</h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-blue-50">
            {data.ctaDescription}
          </p>

          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-black text-blue-700"
          >
            {data.ctaLabel}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function PricingSection({ data }: { data: IndustryWebsitePageData }) {
  const [activePlan, setActivePlan] = useState(0);

  useEffect(() => {
    if (data.pricingPlans.length < 2) {
      return;
    }

    const timer = window.setInterval(() => {
      setActivePlan((current) => (current + 1) % data.pricingPlans.length);
    }, 3500);

    return () => window.clearInterval(timer);
  }, [data.pricingPlans.length]);

  return (
    <section className="border-t border-slate-200 px-0 py-8 dark:border-white/10">
      <div className="px-7 sm:px-10 lg:px-12">
        <SectionTitle
          title="Simple, Transparent Pricing"
          description={data.pricingDescription}
          center
        />
      </div>

      <div className="mt-7 lg:hidden">
        <div className="mx-auto w-[285px] overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${activePlan * 285}px)`,
            }}
          >
            {data.pricingPlans.map((plan) => (
              <PricingCard key={`${plan.name}-mobile`} plan={plan} mobile />
            ))}
          </div>
        </div>

        <div className="mt-5 flex items-center justify-center gap-2">
          {data.pricingPlans.map((plan, index) => (
            <button
              key={plan.name}
              type="button"
              aria-label={`Show ${plan.name}`}
              onClick={() => setActivePlan(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activePlan === index
                  ? "w-7 bg-gradient-to-r from-blue-600 to-violet-600"
                  : "w-2.5 bg-slate-300 dark:bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="mt-8 hidden gap-5 px-7 sm:px-10 lg:grid lg:grid-cols-3 lg:px-12">
        {data.pricingPlans.map((plan) => (
          <PricingCard key={plan.name} plan={plan} />
        ))}
      </div>
    </section>
  );
}

function PricingCard({
  plan,
  mobile = false,
}: {
  plan: IndustryWebsitePricingPlan;
  mobile?: boolean;
}) {
  const Icon = plan.icon;

  if (mobile) {
    return (
      <article
        className={`relative h-[350px] w-[285px] shrink-0 rounded-[1.5rem] border bg-white p-5 shadow-sm dark:bg-white/[0.05] ${
          plan.popular
            ? "border-violet-400 shadow-[0_18px_48px_rgba(124,58,237,0.14)] dark:border-violet-400/60"
            : "border-slate-200 dark:border-white/10"
        }`}
      >
        {plan.popular ? <PopularBadge mobile /> : null}

        <span className="grid h-11 w-11 place-items-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-400/10 dark:text-blue-300">
          <Icon className="h-5 w-5" />
        </span>

        <h3 className="mt-4 text-base font-black text-slate-950 dark:text-white">
          {plan.name}
        </h3>

        <p className="mt-1 line-clamp-2 text-xs leading-5 text-slate-500 dark:text-slate-400">
          {plan.subtitle}
        </p>

        <div className="mt-4">
          <p className="text-[11px] font-bold text-slate-500 dark:text-slate-400">
            Starting From
          </p>
          <p className="mt-1 text-2xl font-black text-slate-950 dark:text-white">
            {plan.price}
          </p>
        </div>

        <ul className="mt-4 space-y-2">
          {plan.features.slice(0, 4).map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300"
            >
              <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-500" />
              {feature}
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className={`absolute bottom-5 left-5 right-5 inline-flex items-center justify-center rounded-xl px-4 py-3 text-xs font-black transition hover:-translate-y-0.5 ${
            plan.popular
              ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-[0_14px_36px_rgba(37,99,235,0.24)]"
              : "border border-slate-200 bg-white text-blue-700 dark:border-white/10 dark:bg-white/[0.06] dark:text-blue-300"
          }`}
        >
          {plan.cta}
        </Link>
      </article>
    );
  }

  return (
    <article
      className={`relative rounded-[1.6rem] border bg-white p-6 shadow-sm transition hover:-translate-y-1 dark:bg-white/[0.05] ${
        plan.popular
          ? "border-violet-400 shadow-[0_18px_50px_rgba(124,58,237,0.13)] dark:border-violet-400/60"
          : "border-slate-200 dark:border-white/10"
      }`}
    >
      {plan.popular ? <PopularBadge /> : null}

      <div className="flex items-start gap-4">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-400/10 dark:text-blue-300">
          <Icon className="h-5 w-5" />
        </span>

        <div>
          <h3 className="text-lg font-black text-slate-950 dark:text-white">
            {plan.name}
          </h3>
          <p className="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400">
            {plan.subtitle}
          </p>
        </div>
      </div>

      <div className="mt-6">
        <p className="text-xs font-bold text-slate-500 dark:text-slate-400">
          Starting From
        </p>
        <p className="mt-1 text-3xl font-black text-slate-950 dark:text-white">
          {plan.price}
        </p>
      </div>

      <ul className="mt-5 grid gap-2">
        {plan.features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-3 text-sm font-semibold text-slate-700 dark:text-slate-300"
          >
            <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
            {feature}
          </li>
        ))}
      </ul>

      <Link
        href="/contact"
        className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-5 py-3 text-sm font-black transition hover:-translate-y-0.5 ${
          plan.popular
            ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-[0_14px_38px_rgba(37,99,235,0.24)]"
            : "border border-slate-200 bg-white text-blue-700 dark:border-white/10 dark:bg-white/[0.06] dark:text-blue-300"
        }`}
      >
        {plan.cta}
      </Link>
    </article>
  );
}

function PopularBadge({ mobile = false }: { mobile?: boolean }) {
  return (
    <span
      className={`absolute left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 font-black text-white ${
        mobile ? "-top-3 px-4 py-1.5 text-[10px]" : "-top-4 px-5 py-2 text-xs"
      }`}
    >
      Most Popular
    </span>
  );
}

function TestimonialsSection({
  title,
  items,
}: {
  title: string;
  items: IndustryWebsiteTestimonial[];
}) {
  return (
    <section className="border-t border-slate-200 px-7 py-10 dark:border-white/10 sm:px-10 lg:px-12">
      <SectionTitle title={title} center />

      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {items.map((item) => (
          <article
            key={item.name}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.05]"
          >
            <div className="mb-4 flex gap-1 text-amber-400">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="text-sm leading-6 text-slate-700 dark:text-slate-300">
              &quot;{item.quote}&quot;
            </p>
            <p className="mt-5 text-sm font-black text-slate-950 dark:text-white">
              {item.name}
            </p>
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              {item.role}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ComplianceSection({ data }: { data: IndustryWebsitePageData }) {
  return (
    <section className="border-t border-slate-200 px-7 py-10 dark:border-white/10 sm:px-10 lg:px-12">
      <SectionTitle title="Built For Security, Trust & Compliance" center />

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {data.compliance.map((item) => (
          <TrustItem key={item.title} item={item} />
        ))}
      </div>

      <p className="mx-auto mt-6 max-w-xl text-center text-sm leading-6 text-slate-500 dark:text-slate-400">
        {data.complianceDescription}
      </p>
    </section>
  );
}

function TrustItem({ item }: { item: IndustryWebsiteTrustItem }) {
  const Icon = item.icon;

  return (
    <div className="text-center">
      <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-400/10 dark:text-blue-300">
        <Icon className="h-5 w-5" />
      </span>
      <p className="mt-3 text-xs font-black text-slate-700 dark:text-slate-300">
        {item.title}
      </p>
    </div>
  );
}

function IndustryWebsiteDemoModal({
  data,
  demo,
  onClose,
}: {
  data: IndustryWebsitePageData;
  demo: IndustryWebsiteDemo;
  onClose: () => void;
}) {
  const [activeTab, setActiveTab] = useState<DemoTab>("desktop");
  const accent = getDemoAccentClasses(demo.accent);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-xl">
      <button
        type="button"
        aria-label="Close demo"
        className="absolute inset-0 cursor-default"
        onClick={onClose}
      />

      <section className="relative max-h-[92vh] w-full max-w-[1380px] overflow-hidden rounded-[2rem] border border-white/20 bg-white shadow-[0_35px_120px_rgba(0,0,0,0.35)] dark:border-white/10 dark:bg-[#080b16]">
        <button
          type="button"
          aria-label="Close demo"
          onClick={onClose}
          className="absolute right-5 top-5 z-30 grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:scale-105 dark:border-white/10 dark:bg-white/[0.08] dark:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="grid max-h-[92vh] overflow-y-auto lg:grid-cols-[300px_1fr]">
          <aside className="border-b border-slate-200 bg-slate-50/80 p-6 dark:border-white/10 dark:bg-white/[0.03] lg:sticky lg:top-0 lg:max-h-[92vh] lg:overflow-y-auto lg:border-b-0 lg:border-r">
            <div className="flex items-center gap-3">
              <span
                className={`grid h-12 w-12 place-items-center rounded-2xl ${accent.iconBg} ${accent.iconText}`}
              >
                <MonitorSmartphone className="h-6 w-6" />
              </span>

              <div>
                <p className="text-lg font-black text-slate-950 dark:text-white">
                  HNX Solutions
                </p>
                <p className="text-xs font-bold text-slate-500 dark:text-slate-400">
                  {data.industryName} Website Demo
                </p>
              </div>
            </div>

            <div className="mt-7">
              <h2 className="text-xl font-black leading-tight text-slate-950 dark:text-white">
                {demo.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {demo.subtitle}
              </p>
            </div>

            <nav className="mt-7 space-y-2" aria-label="Demo preview tabs">
              {demoTabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;

                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-black transition ${
                      isActive
                        ? `${accent.softBg} ${accent.text}`
                        : "text-slate-600 hover:bg-white hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/[0.06] dark:hover:text-white"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    {tab.label}
                  </button>
                );
              })}
            </nav>

            <div className="mt-7 rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/[0.05]">
              <h3 className="text-sm font-black text-slate-950 dark:text-white">
                What&apos;s included
              </h3>

              <div className="mt-4 space-y-3">
                {demo.chips.slice(0, 4).map((chip) => (
                  <button
                    type="button"
                    key={chip}
                    onClick={() => setActiveTab("catalog")}
                    className="flex w-full items-center gap-2 rounded-xl text-left text-sm font-semibold text-slate-600 transition hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
                  >
                    <CheckCircle2 className={`h-4 w-4 ${accent.text}`} />
                    {chip}
                  </button>
                ))}
              </div>
            </div>

            <Link
              href="/contact"
              className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-4 text-sm font-black text-white shadow-lg transition hover:-translate-y-0.5 ${accent.button}`}
            >
              Build Similar Website
              <ArrowRight className="h-4 w-4" />
            </Link>
          </aside>

          <div className="bg-white p-5 dark:bg-[#080b16] sm:p-7">
            <div className="mb-5 pr-14">
              <p className={`text-sm font-black ${accent.text}`}>
                {demoTabs.find((tab) => tab.id === activeTab)?.label}
              </p>
              <h2 className="mt-1 text-2xl font-black text-slate-950 dark:text-white sm:text-3xl">
                {demo.title} Website Experience
              </h2>
            </div>

            {activeTab === "desktop" ? (
              <DesktopDemoPreview data={data} demo={demo} onOpenTab={setActiveTab} />
            ) : null}

            {activeTab === "mobile" ? (
              <MobileDemoPreview data={data} demo={demo} onOpenTab={setActiveTab} />
            ) : null}

            {activeTab === "flow" ? <LeadFlowPreview data={data} demo={demo} /> : null}

            {activeTab === "catalog" ? (
              <CatalogPreview data={data} demo={demo} onOpenTab={setActiveTab} />
            ) : null}

            {activeTab === "analytics" ? (
              <AnalyticsPreview data={data} demo={demo} onOpenTab={setActiveTab} />
            ) : null}

            <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 px-5 py-4 text-sm leading-6 text-slate-600 dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-slate-300">
              This is a strategic preview. Final design, content, modules,
              images, inquiry flow, forms, catalog sections, and dashboards can
              be customized for the client&apos;s {data.industryName.toLowerCase()} business.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function DesktopDemoPreview({
  data,
  demo,
  onOpenTab,
}: {
  data: IndustryWebsitePageData;
  demo: IndustryWebsiteDemo;
  onOpenTab: (tab: DemoTab) => void;
}) {
  const accent = getDemoAccentClasses(demo.accent);
  const [requestSent, setRequestSent] = useState(false);

  return (
    <div className="rounded-[1.6rem] border border-slate-200 bg-slate-50 p-3 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
      <div className="max-h-[74vh] overflow-y-auto rounded-[1.25rem] border border-slate-200 bg-white dark:border-white/10 dark:bg-[#0b1020]">
        <div className="sticky top-0 z-20 flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 bg-white/95 px-5 py-4 backdrop-blur-xl dark:border-white/10 dark:bg-[#0b1020]/95">
          <button type="button" className="flex items-center gap-2">
            <span className={`h-4 w-4 rounded-full ${accent.button}`} />
            <span className="text-sm font-black text-slate-950 dark:text-white">
              {demo.brand}
            </span>
          </button>

          <div className="flex max-w-full flex-1 items-center gap-2 overflow-x-auto text-xs font-black text-slate-500 dark:text-slate-400 md:justify-center">
            {data.heroNav.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => onOpenTab(item === data.heroNav[2] ? "catalog" : "desktop")}
                className="shrink-0 rounded-lg px-3 py-2 transition hover:bg-slate-100 hover:text-slate-950 dark:hover:bg-white/[0.06] dark:hover:text-white"
              >
                {item}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => onOpenTab("flow")}
            className={`rounded-lg px-4 py-2 text-xs font-black text-white transition hover:-translate-y-0.5 ${accent.button}`}
          >
            {data.heroPrimaryCta}
          </button>
        </div>

        <section className="min-h-[680px] bg-gradient-to-br from-slate-50 to-white p-7 dark:from-white/[0.04] dark:to-transparent">
          <div className="grid min-h-[440px] items-center gap-7 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <span
                className={`inline-flex rounded-full px-3 py-1.5 text-xs font-black ${accent.softBg} ${accent.text}`}
              >
                {data.eyebrow}
              </span>

              <h3 className="mt-5 max-w-xl text-4xl font-black leading-tight text-slate-950 dark:text-white">
                {demo.headline}
              </h3>

              <p className="mt-4 max-w-lg text-sm leading-6 text-slate-600 dark:text-slate-300">
                {data.heroSubtext}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => onOpenTab("flow")}
                  className={`rounded-xl px-5 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 ${accent.button}`}
                >
                  {data.heroPrimaryCta}
                </button>
                <button
                  type="button"
                  onClick={() => onOpenTab("catalog")}
                  className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-black text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300 dark:border-white/10 dark:bg-white/[0.06] dark:text-white"
                >
                  Explore {data.heroNav[1] ?? "Services"}
                </button>
              </div>
            </div>

            <div
              className="min-h-[360px] rounded-[1.4rem] bg-cover bg-center shadow-inner"
              style={{ backgroundImage: `url(${demo.image})` }}
            />
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-4">
            {demo.stats.map((stat, index) => (
              <button
                type="button"
                key={`${stat}-${index}`}
                onClick={() => onOpenTab(index === 3 ? "flow" : "analytics")}
                className="rounded-2xl bg-white p-4 text-center transition hover:-translate-y-0.5 hover:shadow-sm dark:bg-white/[0.05]"
              >
                <p className={`text-xl font-black ${accent.text}`}>{stat}</p>
                <p className="mt-1 text-xs font-bold text-slate-500 dark:text-slate-400">
                  {["Pages", "Leads", "Sections", "Growth"][index]}
                </p>
              </button>
            ))}
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {demo.chips.slice(0, 4).map((chip) => (
              <button
                key={chip}
                type="button"
                onClick={() => onOpenTab("catalog")}
                className="rounded-2xl border border-slate-200 bg-white p-5 text-left transition hover:-translate-y-0.5 hover:shadow-sm dark:border-white/10 dark:bg-white/[0.05]"
              >
                <CheckCircle2 className={`h-6 w-6 ${accent.text}`} />
                <p className="mt-4 text-sm font-black text-slate-950 dark:text-white">
                  {chip}
                </p>
                <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">
                  Built into the demo website flow for stronger visitor confidence.
                </p>
              </button>
            ))}
          </div>

          <div className="mt-7 grid gap-5 rounded-[1.4rem] border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/[0.05] lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className={`text-xs font-black ${accent.text}`}>
                Lead Capture
              </p>
              <h4 className="mt-2 text-xl font-black text-slate-950 dark:text-white">
                Route every inquiry with clear business context.
              </h4>
              <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                The preview includes service selection, contact details, priority,
                and a simple confirmation state for your sales or operations team.
              </p>
            </div>

            <div className="grid gap-3">
              {["Name", data.heroPrimaryCta, "Preferred Date", "Phone / WhatsApp"].map((field) => (
                <div
                  key={field}
                  className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-bold text-slate-500 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300"
                >
                  {field}
                </div>
              ))}
              <button
                type="button"
                onClick={() => setRequestSent(true)}
                className={`rounded-xl px-5 py-3 text-sm font-black text-white ${accent.button}`}
              >
                {requestSent ? "Inquiry Captured" : "Submit Inquiry"}
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function MobileDemoPreview({
  data,
  demo,
  onOpenTab,
}: {
  data: IndustryWebsitePageData;
  demo: IndustryWebsiteDemo;
  onOpenTab: (tab: DemoTab) => void;
}) {
  const accent = getDemoAccentClasses(demo.accent);
  const [menuOpen, setMenuOpen] = useState(false);
  const [requestDone, setRequestDone] = useState(false);
  const screens = [
    ["Home", MonitorSmartphone],
    [data.heroNav[1] ?? "Services", Search],
    ["Request", CalendarCheck],
    ["Updates", Bell],
  ] as const;

  return (
    <div className="grid items-start gap-6 lg:grid-cols-[0.8fr_1.2fr]">
      <div className="mx-auto w-[280px] rounded-[2.4rem] border-[10px] border-slate-950 bg-white p-4 shadow-[0_30px_80px_rgba(15,23,42,0.24)] dark:border-slate-800 dark:bg-[#0b1020]">
        <div className="mx-auto mb-4 h-1.5 w-16 rounded-full bg-slate-300" />

        <div className="sticky top-0 z-10 flex items-center justify-between bg-white/95 py-1 backdrop-blur-xl dark:bg-[#0b1020]/95">
          <button type="button" className="text-sm font-black text-slate-950 dark:text-white">
            {demo.brand}
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Toggle mobile menu"
            className="grid h-8 w-8 place-items-center rounded-full bg-slate-100 text-slate-600 dark:bg-white/[0.08] dark:text-slate-200"
          >
            <Menu className="h-4 w-4" />
          </button>
        </div>

        {menuOpen ? (
          <div className="mt-3 grid grid-cols-2 gap-2 rounded-2xl bg-slate-50 p-2 dark:bg-white/[0.04]">
            {screens.map(([label]) => (
              <button
                key={label}
                type="button"
                onClick={() => setMenuOpen(false)}
                className={`rounded-xl px-2 py-2 text-[10px] font-black ${accent.button} text-white`}
              >
                {label}
              </button>
            ))}
          </div>
        ) : null}

        <div
          className="mt-4 h-32 rounded-2xl bg-cover bg-center"
          style={{ backgroundImage: `url(${demo.image})` }}
        />
        <h3 className="mt-4 text-xl font-black leading-tight text-slate-950 dark:text-white">
          {demo.headline}
        </h3>
        <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">
          {data.heroSubtext}
        </p>

        <div className="mt-4 grid gap-2">
          {demo.chips.slice(0, 4).map((chip) => (
            <button
              key={chip}
              type="button"
              onClick={() => onOpenTab("catalog")}
              className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-3 text-left text-[11px] font-black text-slate-700 dark:bg-white/[0.06] dark:text-slate-200"
            >
              {chip}
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setRequestDone(true)}
          className={`mt-4 grid h-11 w-full place-items-center rounded-xl text-sm font-black text-white ${accent.button}`}
        >
          {requestDone ? "Request Sent" : data.heroPrimaryCta}
        </button>
        <button
          type="button"
          className="mt-3 flex h-10 w-full items-center justify-center gap-2 rounded-xl border border-slate-200 text-xs font-black text-slate-700 dark:border-white/10 dark:text-slate-200"
        >
          <PhoneCall className="h-4 w-4" />
          Talk To Team
        </button>

        <div className="sticky bottom-0 mt-5 grid grid-cols-4 gap-2 bg-white/95 pt-2 backdrop-blur-xl dark:bg-[#0b1020]/95">
          {screens.map(([label, Icon], index) => (
            <button
              key={label}
              type="button"
              onClick={() => onOpenTab(index === 2 ? "flow" : index === 3 ? "analytics" : "mobile")}
              className={`grid h-12 place-items-center rounded-xl transition ${
                index === 0
                  ? `${accent.button} text-white`
                  : "bg-slate-50 text-slate-500 hover:text-slate-900 dark:bg-white/[0.06] dark:text-slate-300"
              }`}
            >
              <Icon className="h-4 w-4" />
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {[...data.features.slice(0, 3), data.benefits[0]].map((item, index) => {
          const Icon = item.icon;

          return (
            <button
              key={`${item.title}-${index}`}
              type="button"
              onClick={() => onOpenTab(index === 3 ? "analytics" : "catalog")}
              className="rounded-2xl border border-slate-200 bg-white p-5 text-left transition hover:-translate-y-0.5 hover:shadow-sm dark:border-white/10 dark:bg-white/[0.05]"
            >
              <Icon className={`mb-3 h-5 w-5 ${accent.text}`} />
              <p className="text-sm font-black text-slate-950 dark:text-white">
                {item.title}
              </p>
              <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">
                {item.description}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function LeadFlowPreview({
  data,
  demo,
}: {
  data: IndustryWebsitePageData;
  demo: IndustryWebsiteDemo;
}) {
  const accent = getDemoAccentClasses(demo.accent);
  const [selectedStep, setSelectedStep] = useState(0);
  const steps = [
    ["Choose Interest", data.features[0]?.title ?? data.heroNav[1]],
    ["Share Requirement", data.features[1]?.title ?? "Inquiry details"],
    ["Pick Follow-up", data.heroPrimaryCta],
    ["Confirm Lead", "Team dashboard update"],
  ];

  return (
    <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="rounded-[1.6rem] border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.05]">
        <h3 className="text-xl font-black text-slate-950 dark:text-white">
          Inquiry / Booking Flow
        </h3>
        <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
          A focused lead path captures what the visitor wants and sends useful
          context to your team.
        </p>

        <div className="mt-6 space-y-3">
          {steps.map(([title, detail], index) => (
            <button
              key={title}
              type="button"
              onClick={() => setSelectedStep(index)}
              className={`flex w-full items-start gap-4 rounded-2xl border p-4 text-left transition hover:-translate-y-0.5 ${
                selectedStep === index
                  ? `border-transparent ${accent.softBg}`
                  : "border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/[0.04]"
              }`}
            >
              <span
                className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl text-xs font-black ${
                  selectedStep === index
                    ? `${accent.button} text-white`
                    : "bg-white text-slate-500 dark:bg-white/[0.08] dark:text-slate-300"
                }`}
              >
                {index + 1}
              </span>
              <span>
                <span className="block text-sm font-black text-slate-950 dark:text-white">
                  {title}
                </span>
                <span className="mt-1 block text-xs leading-5 text-slate-500 dark:text-slate-400">
                  {detail}
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-[1.6rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-[0_22px_70px_rgba(15,23,42,0.20)] dark:border-white/10">
        <div className="flex items-center gap-3">
          <span className={`grid h-12 w-12 place-items-center rounded-2xl ${accent.button}`}>
            <FileText className="h-5 w-5" />
          </span>
          <div>
            <p className="text-xs font-black text-slate-300">Lead Preview</p>
            <h4 className="text-xl font-black">{demo.brand}</h4>
          </div>
        </div>

        <div className="mt-6 grid gap-3">
          {[
            ["Industry", data.industryName],
            ["Demo", demo.title],
            ["Interest", steps[selectedStep]?.[1] ?? data.heroPrimaryCta],
            ["Status", selectedStep === 3 ? "Ready for follow-up" : "In progress"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="flex items-center justify-between gap-4 rounded-2xl bg-white/10 px-4 py-3"
            >
              <span className="text-xs font-bold text-slate-300">{label}</span>
              <span className="text-right text-sm font-black">{value}</span>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setSelectedStep(3)}
          className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-black text-white ${accent.button}`}
        >
          Confirm Demo Lead
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

function CatalogPreview({
  data,
  demo,
  onOpenTab,
}: {
  data: IndustryWebsitePageData;
  demo: IndustryWebsiteDemo;
  onOpenTab: (tab: DemoTab) => void;
}) {
  const accent = getDemoAccentClasses(demo.accent);
  const [selectedModule, setSelectedModule] = useState(data.modules[0]?.title ?? demo.title);

  return (
    <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
      <div className="rounded-[1.6rem] border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.05]">
        <h3 className="text-xl font-black text-slate-950 dark:text-white">
          Profile, Catalog And Listing Sections
        </h3>
        <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
          The demo can organize service pages, listings, profiles, products, or
          packages around the exact buyer journey for {data.industryName.toLowerCase()}.
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {data.modules.slice(0, 6).map((module) => {
            const Icon = module.icon;
            const isActive = selectedModule === module.title;

            return (
              <button
                key={module.title}
                type="button"
                onClick={() => setSelectedModule(module.title)}
                className={`rounded-2xl border p-4 text-left transition hover:-translate-y-0.5 ${
                  isActive
                    ? `border-transparent ${accent.softBg}`
                    : "border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/[0.04]"
                }`}
              >
                <Icon className={`h-5 w-5 ${accent.text}`} />
                <p className="mt-3 text-sm font-black text-slate-950 dark:text-white">
                  {module.title}
                </p>
                <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">
                  {module.points.slice(0, 2).join(", ")}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      <div className="overflow-hidden rounded-[1.6rem] border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-white/[0.05]">
        <div
          className="h-56 bg-cover bg-center"
          style={{ backgroundImage: `url(${demo.image})` }}
        />
        <div className="p-6">
          <p className={`text-xs font-black ${accent.text}`}>{demo.brand}</p>
          <h4 className="mt-2 text-2xl font-black text-slate-950 dark:text-white">
            {selectedModule}
          </h4>
          <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
            {demo.headline}
          </p>

          <div className="mt-5 grid gap-2">
            {(data.modules.find((module) => module.title === selectedModule)?.points ??
              demo.chips).slice(0, 4).map((point) => (
              <div
                key={point}
                className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 dark:bg-white/[0.06] dark:text-slate-300"
              >
                <CheckCircle2 className={`h-4 w-4 ${accent.text}`} />
                {point}
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => onOpenTab("flow")}
            className={`mt-5 inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-black text-white ${accent.button}`}
          >
            Start Inquiry Flow
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

function AnalyticsPreview({
  data,
  demo,
  onOpenTab,
}: {
  data: IndustryWebsitePageData;
  demo: IndustryWebsiteDemo;
  onOpenTab: (tab: DemoTab) => void;
}) {
  const accent = getDemoAccentClasses(demo.accent);
  const [reportReady, setReportReady] = useState(false);
  const metrics = [
    ["Visitors", demo.stats[0] ?? "1.2K", "+18.4%"],
    ["Inquiries", demo.stats[1] ?? "240", "+22.6%"],
    ["Top Section", demo.chips[0] ?? data.heroNav[1], "+14.2%"],
    ["Conversion", demo.stats[3] ?? "9.8%", "+3.1%"],
  ];

  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_0.8fr]">
      <div className="rounded-[1.6rem] border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.05]">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h3 className="text-xl font-black text-slate-950 dark:text-white">
              Website Performance Overview
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
              Track traffic, inquiry quality, top pages, and campaign results
              for the {data.industryName.toLowerCase()} website.
            </p>
          </div>
          <span className={`rounded-xl px-4 py-2 text-xs font-black ${accent.softBg} ${accent.text}`}>
            30 Days
          </span>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {metrics.map(([label, value, growth]) => (
            <button
              key={label}
              type="button"
              onClick={() => setReportReady(false)}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-left transition hover:-translate-y-0.5 hover:bg-white dark:border-white/10 dark:bg-[#0b1020]"
            >
              <p className="text-xs font-bold text-slate-500 dark:text-slate-400">
                {label}
              </p>
              <p className="mt-2 text-2xl font-black text-slate-950 dark:text-white">
                {value}
              </p>
              <p className={`mt-1 text-xs font-black ${accent.text}`}>
                {growth}
              </p>
            </button>
          ))}
        </div>

        <div className="mt-6 h-44 rounded-2xl bg-slate-50 p-5 dark:bg-[#0b1020]">
          <svg viewBox="0 0 500 140" className="h-full w-full" aria-hidden="true">
            <path
              d="M10 112 C70 96, 100 88, 150 92 S240 58, 290 78 S370 42, 430 55 S470 40, 490 32"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="8"
              className={accent.text}
            />
          </svg>
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => setReportReady((value) => !value)}
            className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-black text-white ${accent.button}`}
          >
            <FileText className="h-4 w-4" />
            {reportReady ? "Report Ready" : "Generate Report"}
          </button>
          <button
            type="button"
            onClick={() => onOpenTab("flow")}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 py-3 text-sm font-black text-slate-700 transition hover:-translate-y-0.5 dark:border-white/10 dark:text-white"
          >
            Review Requests
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="rounded-[1.6rem] border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.05]">
        <h3 className="text-xl font-black text-slate-950 dark:text-white">
          Source Performance
        </h3>

        <div className="mt-6 space-y-4">
          {[
            ["Google Search", "42%"],
            ["Direct Traffic", "24%"],
            ["Social Campaigns", "19%"],
            ["Referral", "15%"],
          ].map(([source, value]) => (
            <div key={source}>
              <div className="mb-2 flex justify-between text-sm font-bold text-slate-600 dark:text-slate-300">
                <span>{source}</span>
                <span>{value}</span>
              </div>
              <div className="h-2 rounded-full bg-slate-100 dark:bg-white/10">
                <div
                  className={`h-2 rounded-full ${accent.button}`}
                  style={{ width: value }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl bg-slate-50 p-5 dark:bg-white/[0.04]">
          <p className="text-sm font-black text-slate-950 dark:text-white">
            Latest demo lead
          </p>
          <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">
            {demo.title} inquiry from the {demo.chips[0] ?? "primary"} section,
            ready for follow-up.
          </p>
        </div>
      </div>
    </div>
  );
}

function Badge({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-xs font-black text-blue-700 dark:bg-blue-400/10 dark:text-blue-300">
      {children}
    </div>
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
    <div className={center ? "text-center" : ""}>
      <h2 className="text-xl font-black text-slate-950 dark:text-white">
        {title}
      </h2>
      {description ? (
        <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-slate-500 dark:text-slate-400">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function splitHighlightedText(title: string, highlight: string) {
  const highlightIndex = title.indexOf(highlight);

  if (highlightIndex === -1) {
    return [`${title} `, ""];
  }

  return [
    title.slice(0, highlightIndex),
    title.slice(highlightIndex + highlight.length),
  ];
}

function toneClass(tone: string) {
  const base = "grid h-14 w-14 place-items-center rounded-2xl";

  if (tone === "emerald") {
    return `${base} bg-emerald-50 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-300`;
  }

  if (tone === "rose") {
    return `${base} bg-rose-50 text-rose-600 dark:bg-rose-400/10 dark:text-rose-300`;
  }

  if (tone === "violet") {
    return `${base} bg-violet-50 text-violet-600 dark:bg-violet-400/10 dark:text-violet-300`;
  }

  return `${base} bg-blue-50 text-blue-600 dark:bg-blue-400/10 dark:text-blue-300`;
}

function getDemoAccentClasses(accent: string) {
  if (accent === "violet") {
    return {
      iconBg: "bg-violet-50 dark:bg-violet-400/10",
      iconText: "text-violet-600 dark:text-violet-300",
      button: "bg-violet-600",
      softBg: "bg-violet-50 dark:bg-violet-400/10",
      text: "text-violet-600 dark:text-violet-300",
    };
  }

  if (accent === "blue") {
    return {
      iconBg: "bg-blue-50 dark:bg-blue-400/10",
      iconText: "text-blue-600 dark:text-blue-300",
      button: "bg-blue-600",
      softBg: "bg-blue-50 dark:bg-blue-400/10",
      text: "text-blue-600 dark:text-blue-300",
    };
  }

  if (accent === "teal") {
    return {
      iconBg: "bg-teal-50 dark:bg-teal-400/10",
      iconText: "text-teal-600 dark:text-teal-300",
      button: "bg-teal-600",
      softBg: "bg-teal-50 dark:bg-teal-400/10",
      text: "text-teal-600 dark:text-teal-300",
    };
  }

  if (accent === "orange") {
    return {
      iconBg: "bg-orange-50 dark:bg-orange-400/10",
      iconText: "text-orange-600 dark:text-orange-300",
      button: "bg-orange-600",
      softBg: "bg-orange-50 dark:bg-orange-400/10",
      text: "text-orange-600 dark:text-orange-300",
    };
  }

  if (accent === "rose") {
    return {
      iconBg: "bg-rose-50 dark:bg-rose-400/10",
      iconText: "text-rose-600 dark:text-rose-300",
      button: "bg-rose-600",
      softBg: "bg-rose-50 dark:bg-rose-400/10",
      text: "text-rose-600 dark:text-rose-300",
    };
  }

  return {
    iconBg: "bg-emerald-50 dark:bg-emerald-400/10",
    iconText: "text-emerald-600 dark:text-emerald-300",
    button: "bg-emerald-600",
    softBg: "bg-emerald-50 dark:bg-emerald-400/10",
    text: "text-emerald-600 dark:text-emerald-300",
  };
}

function MarqueeStyles() {
  return (
    <style jsx global>{`
      @keyframes industry-website-marquee-left {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }

      @keyframes industry-website-marquee-right {
        0% {
          transform: translateX(-50%);
        }
        100% {
          transform: translateX(0);
        }
      }

      .industry-website-marquee-left {
        animation: industry-website-marquee-left 40s linear infinite;
      }

      .industry-website-marquee-right {
        animation: industry-website-marquee-right 36s linear infinite;
      }

      .industry-website-marquee-left:hover,
      .industry-website-marquee-right:hover {
        animation-play-state: paused;
      }

      @media (prefers-reduced-motion: reduce) {
        .industry-website-marquee-left,
        .industry-website-marquee-right {
          animation: none;
        }
      }
    `}</style>
  );
}
