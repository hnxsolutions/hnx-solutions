"use client";

import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  MonitorSmartphone,
  Search,
  ShieldCheck,
  Smartphone,
  Star,
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
    <main className="relative overflow-hidden bg-[#f8fbff] font-[family-name:var(--font-raleway)] text-slate-950 dark:bg-[#050814] dark:text-white">
      <div className="pointer-events-none absolute left-0 top-0 h-[34rem] w-[34rem] rounded-full bg-blue-200/35 blur-3xl dark:bg-blue-500/10" />
      <div className="pointer-events-none absolute right-0 top-20 h-[30rem] w-[30rem] rounded-full bg-violet-200/35 blur-3xl dark:bg-violet-500/10" />

      <section className="relative px-3 pb-20 pt-24 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <div className="mx-auto w-full max-w-full sm:max-w-[min(92vw,1440px)]">
          <div className="relative overflow-hidden">
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
    <section className="relative overflow-hidden px-4 py-1 sm:px-10 lg:px-12 xl:px-14">
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
    <section className="border-b border-slate-200 px-4 py-10 dark:border-white/10 sm:px-10 lg:px-12 xl:border-b-0 xl:border-r">
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
    <section className="px-4 py-10 sm:px-10 lg:px-12">
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
      <div className="px-4 sm:px-10 lg:px-12">
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
    <article className="group h-[260px] w-[280px] shrink-0 overflow-hidden rounded-[1.35rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,0.10)] dark:border-white/10 dark:bg-white/[0.05] sm:w-[310px]">
      <div
        className="relative h-24 bg-cover bg-center"
        style={{ backgroundImage: `url(${module.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/15 via-transparent to-transparent" />
        <span className="absolute -bottom-5 left-5 grid h-10 w-10 place-items-center rounded-xl border border-cyan-200 bg-cyan-50 text-cyan-600 shadow-[0_10px_24px_rgba(8,145,178,0.16)] dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-300">
          <Icon className="h-5 w-5" />
        </span>
      </div>

      <div className="px-5 pb-7 pt-8">
        <h3 className="text-lg font-black leading-6 text-slate-950 dark:text-white">
          {module.title}
        </h3>

        <div className="mt-3 space-y-2.5 pb-1">
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
      <div className="px-4 sm:px-10 lg:px-12">
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
      className="border-t border-slate-200 bg-gradient-to-b from-white to-blue-50/40 px-4 py-12 dark:border-white/10 dark:from-white/[0.04] dark:to-blue-950/10 sm:px-10 lg:px-12"
    >
      <div className="mx-auto max-w-3xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-black text-blue-700 dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-300">
          <MonitorSmartphone className="h-4 w-4" />
          Website Experience Gallery
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
        View Website Preview
        <ArrowRight className="h-4 w-4" />
      </button>
    </article>
  );
}

function WhyChooseAndCTASection({ data }: { data: IndustryWebsitePageData }) {
  return (
    <section className="border-t border-slate-200 px-4 py-10 dark:border-white/10 sm:px-10 lg:px-12">
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
    if (data.pricingPlans.length <= 1) return;

    const timer = window.setInterval(() => {
      setActivePlan((current) => (current + 1) % data.pricingPlans.length);
    }, 2500);

    return () => window.clearInterval(timer);
  }, [data.pricingPlans.length]);

  useEffect(() => {
    setActivePlan(0);
  }, [data.industrySlug]);

  return (
    <section className="border-t border-slate-200 px-0 py-8 dark:border-white/10">
      <div className="px-4 sm:px-10 lg:px-12">
        <SectionTitle
          title="Simple, Transparent Pricing"
          description={data.pricingDescription}
          center
        />
      </div>

      <div className="mt-8 lg:hidden">
        <div className="overflow-hidden px-3">
          <div
            className="flex transition-transform duration-700 ease-out motion-reduce:transition-none"
            style={{ transform: `translateX(-${activePlan * 100}%)` }}
          >
            {data.pricingPlans.map((plan) => (
              <div key={`${plan.name}-mobile`} className="w-full shrink-0">
                <PricingCard plan={plan} mobile />
              </div>
            ))}
          </div>
        </div>

        {data.pricingPlans.length > 1 ? (
          <div className="mt-5 flex items-center justify-center gap-2">
            {data.pricingPlans.map((plan, index) => (
              <button
                key={`${plan.name}-dot`}
                type="button"
                aria-label={`Show ${plan.name} pricing plan`}
                onClick={() => setActivePlan(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activePlan === index
                    ? "w-7 bg-gradient-to-r from-blue-600 to-violet-600"
                    : "w-2.5 bg-slate-300 dark:bg-white/20"
                }`}
              />
            ))}
          </div>
        ) : null}
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
        className={`relative flex h-auto min-h-0 w-full flex-col overflow-visible rounded-[1.5rem] border bg-white p-5 shadow-sm dark:bg-white/[0.05] ${
          plan.popular
            ? "border-violet-400 shadow-[0_18px_48px_rgba(124,58,237,0.14)] dark:border-violet-400/60"
            : "border-slate-200 dark:border-white/10"
        }`}
      >
        {plan.popular ? (
          <div className="mb-4 flex justify-center">
            <span className="rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-4 py-1.5 text-[10px] font-black text-white">
              Most Popular
            </span>
          </div>
        ) : null}

        <span className="grid h-11 w-11 place-items-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-400/10 dark:text-blue-300">
          <Icon className="h-5 w-5" />
        </span>

        <h3 className="mt-4 text-base font-black text-slate-950 dark:text-white">
          {plan.name}
        </h3>

        <p className="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400">
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

        <ul className="mt-5 space-y-3">
          {plan.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2 text-sm font-semibold leading-6 text-slate-700 dark:text-slate-300"
            >
              <CheckCircle2 className="mt-1 h-3.5 w-3.5 shrink-0 text-emerald-500" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-5">
          <Link
            href="/contact"
            className={`inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-xs font-black transition hover:-translate-y-0.5 ${
              plan.popular
                ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-[0_14px_36px_rgba(37,99,235,0.24)]"
                : "border border-slate-200 bg-white text-blue-700 dark:border-white/10 dark:bg-white/[0.06] dark:text-blue-300"
            }`}
          >
            {plan.cta}
          </Link>
        </div>
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

function PopularBadge() {
  return (
    <span
      className="absolute left-1/2 -top-4 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-2 text-xs font-black text-white"
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
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    if (items.length <= 1) return;

    const timer = window.setInterval(() => {
      setActiveTestimonial((current) => (current + 1) % items.length);
    }, 2500);

    return () => window.clearInterval(timer);
  }, [items.length]);

  useEffect(() => {
    setActiveTestimonial(0);
  }, [title]);

  return (
    <section className="border-t border-slate-200 px-4 py-10 dark:border-white/10 sm:px-10 lg:px-12">
      <SectionTitle title={title} center />

      <div className="mt-8 lg:hidden">
        <div className="overflow-hidden px-1">
          <div
            className="flex transition-transform duration-700 ease-out motion-reduce:transition-none"
            style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
          >
            {items.map((item) => (
              <div key={`${item.name}-mobile`} className="w-full shrink-0">
                <article className="mx-auto max-w-[340px] rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.05]">
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
              </div>
            ))}
          </div>
        </div>

        {items.length > 1 ? (
          <div className="mt-5 flex items-center justify-center gap-2">
            {items.map((item, index) => (
              <button
                key={`${item.name}-dot`}
                type="button"
                aria-label={`Show testimonial from ${item.name}`}
                onClick={() => setActiveTestimonial(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeTestimonial === index
                    ? "w-7 bg-gradient-to-r from-blue-600 to-violet-600"
                    : "w-2.5 bg-slate-300 dark:bg-white/20"
                }`}
              />
            ))}
          </div>
        ) : null}
      </div>

      <div className="mt-8 hidden gap-5 lg:grid lg:grid-cols-3">
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
  const orbitPositions = [
    "left-1/2 top-0 -translate-x-1/2",
    "right-0 top-[72px]",
    "bottom-[42px] right-[16px]",
    "bottom-0 left-1/2 -translate-x-1/2",
    "left-0 top-[72px]",
    "left-[38px] bottom-[42px]",
  ];

  return (
    <section className="border-t border-slate-200 px-4 py-10 dark:border-white/10 sm:px-10 lg:px-12">
      <SectionTitle title="Built For Security, Trust & Compliance" center />

      <div className="mt-8 sm:hidden">
        <div className="relative mx-auto h-[320px] w-[320px] max-w-full">
          <div className="absolute inset-3 rounded-full bg-gradient-to-br from-blue-50 via-white to-violet-50 shadow-[0_24px_70px_rgba(37,99,235,0.10)] dark:from-white/[0.04] dark:via-white/[0.03] dark:to-violet-400/10" />
          <div className="absolute inset-8 rounded-full border border-dashed border-blue-200 dark:border-blue-400/20" />
          <div className="absolute inset-16 rounded-full border border-slate-200 bg-white/80 backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.05]" />

          <div className="absolute left-1/2 top-1/2 z-20 grid h-[104px] w-[104px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-gradient-to-br from-blue-600 to-violet-600 text-center text-white shadow-[0_22px_55px_rgba(37,99,235,0.28)]">
            <div>
              <ShieldCheck className="mx-auto h-7 w-7" />
              <p className="mt-2 text-[11px] font-black leading-4">
                Secure
                <br />
                Website
              </p>
            </div>
          </div>

          <div className="industry-website-compliance-orbit absolute inset-0 z-10">
            {data.compliance.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className={`absolute ${
                    orbitPositions[index % orbitPositions.length]
                  } industry-website-compliance-counter`}
                >
                  <div className="w-[92px] rounded-2xl border border-slate-200 bg-white/95 p-2.5 text-center shadow-[0_16px_40px_rgba(15,23,42,0.09)] backdrop-blur dark:border-white/10 dark:bg-[#111111]/95">
                    <span className="grid h-10 w-10 place-items-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-400/10 dark:text-blue-300">
                      <Icon className="h-4 w-4" />
                    </span>
                    <p className="mt-2 text-[10px] font-black leading-4 text-slate-700 dark:text-slate-300">
                      {item.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-8 hidden gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-5">
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

      @keyframes industry-website-compliance-orbit {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }

      @keyframes industry-website-compliance-counter-orbit {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(-360deg);
        }
      }

      .industry-website-compliance-orbit {
        animation: industry-website-compliance-orbit 20s linear infinite;
        transform-origin: center;
      }

      .industry-website-compliance-counter {
        animation: industry-website-compliance-counter-orbit 20s linear infinite;
        transform-origin: center;
      }

      .industry-website-compliance-orbit:hover,
      .industry-website-compliance-orbit:focus-within {
        animation-play-state: paused;
      }

      .industry-website-compliance-orbit:hover .industry-website-compliance-counter,
      .industry-website-compliance-orbit:focus-within .industry-website-compliance-counter {
        animation-play-state: paused;
      }

      @media (prefers-reduced-motion: reduce) {
        .industry-website-marquee-left,
        .industry-website-marquee-right,
        .industry-website-compliance-orbit,
        .industry-website-compliance-counter {
          animation: none;
        }
      }
    `}</style>
  );
}

