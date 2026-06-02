"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BarChart3,
  Bell,
  CheckCircle2,
  Route,
  ShieldCheck,
  Smartphone,
  Star,
  Users,
} from "lucide-react";
import IndustryMobileAppDemoModal from "./IndustryMobileAppDemoModal";
import IndustryMobileAppPreviewHero from "./IndustryMobileAppPreviewHero";
import {
  getIndustryMobileAppPage,
  type IndustryMobileAppCard,
  type IndustryMobileAppDemo,
  type IndustryMobileAppModule,
  type IndustryMobileAppPageData,
  type IndustryMobileAppPricingPlan,
  type IndustryMobileAppRoleExperience,
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

      <section className="relative px-3 pb-20 pt-24 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <div className="mx-auto w-full max-w-full sm:max-w-[min(92vw,1440px)]">
          <div className="relative overflow-hidden">
            <IndustryMobileAppPreviewHero data={data} />

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
            <FinalCTASection data={data} />
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

      <MobileAppPageStyles />
    </main>
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

function ModulesSection({ data }: { data: IndustryMobileAppPageData }) {
  const marqueeModules = [...data.modules, ...data.modules];

  return (
    <section className="border-t border-slate-200 px-0 py-12 dark:border-white/10">
      <div className="px-7 sm:px-10 lg:px-12">
        <SectionTitle
          title={data.modulesTitle}
          description={data.modulesDescription}
          center
        />
      </div>

      <div className="mt-8 overflow-hidden">
        <div className="industry-mobile-app-marquee-left flex w-max gap-4 px-7 sm:px-10 lg:px-12">
          {marqueeModules.map((module, index) => (
            <ModuleCard key={`${module.title}-${index}`} module={module} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ModuleCard({ module, index }: { module: IndustryMobileAppModule; index: number }) {
  const Icon = module.icon;
  const accent = getModuleAccent(index);

  return (
    <article className="group relative h-[300px] w-[285px] shrink-0 overflow-hidden rounded-[1.6rem] border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.10)] dark:border-white/10 dark:bg-white/[0.05] sm:w-[320px]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_12%,rgba(59,130,246,0.12),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(124,58,237,0.10),transparent_30%)]" />
      <div className="relative">
        <div className="flex items-center justify-between">
          <span className={`grid h-12 w-12 place-items-center rounded-2xl ${accent.soft} ${accent.text}`}>
            <Icon className="h-6 w-6" />
          </span>
          <span className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[10px] font-black text-slate-500 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-300">
            App Module
          </span>
        </div>

        <div className="mt-5 rounded-[1.25rem] border border-slate-200 bg-slate-50 p-3 dark:border-white/10 dark:bg-slate-950">
          <div className="rounded-2xl bg-slate-950 p-3 text-white">
            <p className="text-[10px] font-black uppercase text-blue-200">
              Mobile screen
            </p>
            <p className="mt-1 line-clamp-1 text-sm font-black">
              {module.title}
            </p>
          </div>
          <div className="mt-3 grid gap-2">
            {module.points.slice(0, 2).map((point) => (
              <div key={point} className="h-8 rounded-xl bg-white px-3 py-2 text-[10px] font-bold text-slate-500 dark:bg-white/[0.06] dark:text-slate-300">
                <span className="line-clamp-1">{point}</span>
              </div>
            ))}
          </div>
        </div>

        <h3 className="mt-5 text-lg font-black leading-6 text-slate-950 dark:text-white">
          {module.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
          {module.description}
        </p>
      </div>
    </article>
  );
}

function RoleExperienceSection({ data }: { data: IndustryMobileAppPageData }) {
  const [activeUseCaseId, setActiveUseCaseId] = useState(data.roleExperiences[0]?.id ?? "");
  const activeUseCase =
    data.roleExperiences.find((role) => role.id === activeUseCaseId) ??
    data.roleExperiences[0];

  useEffect(() => {
    setActiveUseCaseId(data.roleExperiences[0]?.id ?? "");
  }, [data.industrySlug, data.roleExperiences]);

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
          Role-Based App Experience for {data.industryName}
        </h2>
        <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
          {data.roleExperiencesDescription}
        </p>
      </div>

      <div className="mt-9 grid gap-6 xl:grid-cols-[0.72fr_1.28fr] xl:items-stretch">
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
            </div>

            <RolePhonePreview data={data} role={activeUseCase} />
          </div>
        </div>
      </div>
    </section>
  );
}

function RolePhonePreview({ data, role }: { data: IndustryMobileAppPageData; role: IndustryMobileAppRoleExperience }) {
  return (
    <div className="mx-auto w-full max-w-[315px]">
      <div className="relative">
        <div className="absolute -right-5 top-8 z-20 rounded-2xl border border-slate-200 bg-white p-3 shadow-[0_16px_42px_rgba(15,23,42,0.16)] dark:border-white/10 dark:bg-slate-950">
          <p className="text-[10px] font-black uppercase text-blue-700 dark:text-blue-300">
            Metric
          </p>
          <p className="mt-1 max-w-28 text-xs font-black leading-4 text-slate-950 dark:text-white">
            {role.metric}
          </p>
        </div>
        <div className="rounded-[2.45rem] border-[9px] border-slate-950 bg-slate-950 p-2 shadow-[0_30px_78px_rgba(15,23,42,0.32)] dark:border-slate-800">
          <div className="overflow-hidden rounded-[1.85rem] bg-white dark:bg-slate-950">
            <div className="border-b border-slate-100 px-4 py-3 dark:border-white/10">
              <p className="text-sm font-black text-slate-950 dark:text-white">
                {role.previewTitle}
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
                  {role.actionLabel}
                </p>
              </div>

              <div className="mt-4 space-y-2.5">
                {role.previewCards.map((card, index) => {
                  const CardIcon = card.icon;

                  return (
                    <div
                      key={`${role.id}-${card.label}`}
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
            <WorkflowJourneyStep key={step.title} step={step} index={index} />
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
          Mobile App Experience Gallery
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
          ["Native App Feel", Smartphone],
          ["Push Updates", Bell],
          ["Role Access", Users],
          ["Live Workflow", Route],
          ["App Insights", BarChart3],
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
            <h3 className="text-lg font-black">Plan the right mobile experience before development.</h3>
            <p className="mt-1 max-w-3xl text-sm leading-6 text-slate-300">
              Pick the right app flow, screens, notifications, admin view, and launch plan for your {data.industryName.toLowerCase()} business.
            </p>
          </div>
        </div>

        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-7 py-4 text-sm font-black text-white shadow-[0_18px_50px_rgba(37,99,235,0.25)] transition hover:-translate-y-0.5"
        >
          Plan My App Experience
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
  demo: IndustryMobileAppDemo;
  onOpenDemo: (demo: IndustryMobileAppDemo) => void;
}) {
  const Icon = demo.icon;
  const accentClasses = getAppAccentClasses(demo.accent);

  return (
    <article className="group overflow-hidden rounded-[1.55rem] border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.10)] dark:border-white/10 dark:bg-white/[0.05]">
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

      <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-3 dark:border-white/10 dark:bg-slate-950">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${demo.image})` }}
        />
        <div className="relative mx-auto w-[118px] rounded-[1.7rem] border-[7px] border-slate-950 bg-white p-2 shadow-[0_18px_44px_rgba(15,23,42,0.20)] dark:border-slate-800 dark:bg-slate-950">
          <div className="mx-auto mb-2 h-1.5 w-10 rounded-full bg-slate-200 dark:bg-white/20" />
          <div className={`rounded-2xl p-3 text-white ${accentClasses.button}`}>
            <p className="text-[9px] font-black uppercase text-white/75">
              {demo.brand}
            </p>
            <p className="mt-2 line-clamp-2 text-xs font-black leading-4">
              {demo.headline}
            </p>
          </div>
          <div className="mt-2 space-y-1.5">
            {demo.chips.slice(0, 3).map((chip) => (
              <div key={chip} className="h-6 rounded-lg bg-slate-100 px-2 py-1 text-[8px] font-bold text-slate-500 dark:bg-white/10 dark:text-slate-300">
                <span className="line-clamp-1">{chip}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2">
        {demo.stats.slice(0, 4).map((stat, index) => (
          <span
            key={`${stat}-${index}`}
            className="truncate rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-center text-[10px] font-black text-slate-600 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-300"
          >
            {stat}
          </span>
        ))}
      </div>

      <button
        type="button"
        onClick={() => onOpenDemo(demo)}
        className={`mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-xs font-black text-white shadow-sm transition hover:-translate-y-0.5 ${accentClasses.button}`}
      >
        View App Preview
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
            Start App Plan
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function PricingSection({ data }: { data: IndustryMobileAppPageData }) {
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
      <div className="px-7 sm:px-10 lg:px-12">
        <SectionTitle
          title="Simple, Transparent Mobile App Pricing"
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
  plan: IndustryMobileAppPricingPlan;
  mobile?: boolean;
}) {
  const Icon = plan.icon;

  return (
    <article
      className={`relative flex h-full flex-col rounded-[1.6rem] border bg-white p-6 shadow-sm transition hover:-translate-y-1 dark:bg-white/[0.05] ${
        plan.popular
          ? "border-violet-400 shadow-[0_18px_50px_rgba(124,58,237,0.13)] dark:border-violet-400/60"
          : "border-slate-200 dark:border-white/10"
      } ${mobile ? "mx-auto max-w-[350px]" : ""}`}
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
        Start App Plan
      </Link>
    </article>
  );
}

function FinalCTASection({ data }: { data: IndustryMobileAppPageData }) {
  return (
    <section className="border-t border-slate-200 px-7 py-10 dark:border-white/10 sm:px-10 lg:px-12">
      <div className="overflow-hidden rounded-[2rem] bg-slate-950 p-8 text-white shadow-[0_24px_70px_rgba(15,23,42,0.18)] dark:border dark:border-white/10">
        <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-300">
              Mobile App Strategy
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight">
              Build a connected {data.industryName.toLowerCase()} app experience.
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300">
              We can plan the app screens, user roles, admin dashboard, notifications, launch path, and future scale before development starts.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-7 py-4 text-sm font-black text-white shadow-[0_18px_50px_rgba(37,99,235,0.25)] transition hover:-translate-y-0.5"
          >
            Plan My Mobile App
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection({
  title,
  items,
}: {
  title: string;
  items: IndustryMobileAppTestimonial[];
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
    <section className="border-t border-slate-200 px-7 py-10 dark:border-white/10 sm:px-10 lg:px-12">
      <SectionTitle title={title} center />

      <div className="mt-8 lg:hidden">
        <div className="overflow-hidden px-1">
          <div
            className="flex transition-transform duration-700 ease-out motion-reduce:transition-none"
            style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
          >
            {items.map((item) => (
              <div key={`${item.name}-mobile`} className="w-full shrink-0">
                <TestimonialCard item={item} mobile />
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
          <TestimonialCard key={item.name} item={item} />
        ))}
      </div>
    </section>
  );
}

function TestimonialCard({ item, mobile = false }: { item: IndustryMobileAppTestimonial; mobile?: boolean }) {
  return (
    <article className={`${mobile ? "mx-auto max-w-[340px]" : ""} rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.05]`}>
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
  );
}

function TrustSection({ data }: { data: IndustryMobileAppPageData }) {
  return (
    <section className="border-t border-slate-200 px-7 py-10 dark:border-white/10 sm:px-10 lg:px-12">
      <SectionTitle
        title={data.trustTitle}
        description={data.trustDescription}
        center
      />

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {data.trustItems.map((item) => (
          <TrustItem key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}

function TrustItem({ item }: { item: IndustryMobileAppTrustItem }) {
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

function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-black text-blue-700 dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-300">
      {children}
    </span>
  );
}

function PopularBadge() {
  return (
    <span className="absolute left-1/2 -top-4 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-2 text-xs font-black text-white">
      Most Popular
    </span>
  );
}

function getModuleAccent(index: number) {
  const accents = [
    {
      soft: "bg-blue-50 dark:bg-blue-400/10",
      text: "text-blue-600 dark:text-blue-300",
    },
    {
      soft: "bg-violet-50 dark:bg-violet-400/10",
      text: "text-violet-600 dark:text-violet-300",
    },
    {
      soft: "bg-emerald-50 dark:bg-emerald-400/10",
      text: "text-emerald-600 dark:text-emerald-300",
    },
    {
      soft: "bg-orange-50 dark:bg-orange-400/10",
      text: "text-orange-600 dark:text-orange-300",
    },
  ];

  return accents[index % accents.length];
}

function getAppAccentClasses(accent: IndustryMobileAppDemo["accent"]) {
  if (accent === "violet") {
    return {
      iconBg: "bg-violet-50 dark:bg-violet-400/10",
      iconText: "text-violet-600 dark:text-violet-300",
      button: "bg-violet-600",
    };
  }

  if (accent === "blue") {
    return {
      iconBg: "bg-blue-50 dark:bg-blue-400/10",
      iconText: "text-blue-600 dark:text-blue-300",
      button: "bg-blue-600",
    };
  }

  if (accent === "teal") {
    return {
      iconBg: "bg-teal-50 dark:bg-teal-400/10",
      iconText: "text-teal-600 dark:text-teal-300",
      button: "bg-teal-600",
    };
  }

  if (accent === "orange") {
    return {
      iconBg: "bg-orange-50 dark:bg-orange-400/10",
      iconText: "text-orange-600 dark:text-orange-300",
      button: "bg-orange-600",
    };
  }

  if (accent === "rose") {
    return {
      iconBg: "bg-rose-50 dark:bg-rose-400/10",
      iconText: "text-rose-600 dark:text-rose-300",
      button: "bg-rose-600",
    };
  }

  return {
    iconBg: "bg-emerald-50 dark:bg-emerald-400/10",
    iconText: "text-emerald-600 dark:text-emerald-300",
    button: "bg-emerald-600",
  };
}

function MobileAppPageStyles() {
  return (
    <style jsx global>{`
      @keyframes industry-mobile-app-marquee-left {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }

      .industry-mobile-app-marquee-left {
        animation: industry-mobile-app-marquee-left 42s linear infinite;
      }

      .industry-mobile-app-marquee-left:hover {
        animation-play-state: paused;
      }

      @media (prefers-reduced-motion: reduce) {
        .industry-mobile-app-marquee-left {
          animation: none;
        }
      }
    `}</style>
  );
}
