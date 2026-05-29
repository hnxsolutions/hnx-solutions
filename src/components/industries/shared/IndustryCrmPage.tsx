"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ChevronRight,
  LayoutDashboard,
  Sparkles,
  Star,
  Workflow,
} from "lucide-react";
import {
  getIndustryCrmPage,
  type IndustryCrmAutomationExample,
  type IndustryCrmCard,
  type IndustryCrmIntegration,
  type IndustryCrmObject,
  type IndustryCrmPageData,
  type IndustryCrmPipelineDeal,
  type IndustryCrmPipelineStage,
  type IndustryCrmPricingPlan,
  type IndustryCrmReportCard,
  type IndustryCrmRole,
  type IndustryCrmTestimonial,
  type IndustryCrmWorkflowStage,
} from "./industryCrmData";

export default function IndustryCrmPage({
  industrySlug,
  solutionSlug,
}: {
  industrySlug: string;
  solutionSlug: string;
}) {
  const data = getIndustryCrmPage(industrySlug, solutionSlug);

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
            <GenericCrmProblemsSection data={data} />
            <CrmWorkflowMapSection data={data} />
            <CrmObjectsSection data={data} />
            <RoleBasedCrmDesksSection data={data} />
            <PipelineBoardSection data={data} />
            <AutomationEngineSection data={data} />
            <CrmDemoExperienceSection data={data} />
            <CrmIntelligenceReportsSection data={data} />
            <OwnershipComparisonSection data={data} />
            <IntegrationsSection data={data} />
            <PricingSection data={data} />
            <TestimonialsSection title={data.testimonialsTitle} items={data.testimonials} />
            <FinalCTASection data={data} />
          </div>
        </div>
      </section>
    </main>
  );
}

function HeroSection({ data }: { data: IndustryCrmPageData }) {
  const [titleStart, titleEnd] = splitHighlightedText(data.title, data.highlight);

  return (
    <section className="relative overflow-hidden px-7 py-1 sm:px-10 lg:px-12 xl:px-14">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(59,130,246,0.12),transparent_28%),radial-gradient(circle_at_78%_16%,rgba(124,58,237,0.10),transparent_28%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.04)_1px,transparent_1px)] bg-[size:48px_48px] opacity-60 [mask-image:linear-gradient(120deg,black,transparent_78%)] dark:bg-[linear-gradient(rgba(125,211,252,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(125,211,252,0.05)_1px,transparent_1px)]" />

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
          <span className="text-slate-900 dark:text-white">CRM</span>
        </nav>

        <div className="relative grid items-center gap-10 xl:grid-cols-[0.78fr_1.22fr]">
          <div className="relative z-20">
            <Badge>
              <LayoutDashboard className="h-4 w-4" />
              {data.eyebrow}
            </Badge>

            <h1 className="mt-7 max-w-3xl text-[clamp(2.5rem,4.6vw,4.65rem)] font-black leading-[1.02] tracking-[-0.055em] text-slate-950 dark:text-white">
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
                    className="rounded-2xl border border-slate-200 bg-white/85 p-3 shadow-sm backdrop-blur-xl transition hover:-translate-y-1 hover:border-blue-200 dark:border-white/10 dark:bg-white/[0.06]"
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
                Build My {data.industryName} CRM
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href={data.crmDemoHref}
                className="inline-flex items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white/92 px-8 py-4 text-sm font-black text-blue-700 shadow-[0_16px_36px_rgba(15,23,42,0.08)] transition hover:-translate-y-0.5 hover:border-blue-200 dark:border-white/10 dark:bg-white/[0.06] dark:text-blue-300"
              >
                Explore CRM Demo
                <span className="grid h-8 w-8 place-items-center rounded-full border border-blue-200 bg-white text-blue-600 dark:border-blue-300/20 dark:bg-white/10 dark:text-blue-300">
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </div>

            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
              {["Owned CRM", "Role-based desks", "Pipeline intelligence"].map((chip) => (
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

          <CrmCommandCenterMockup data={data} />
        </div>
      </div>
    </section>
  );
}

function CrmCommandCenterMockup({ data }: { data: IndustryCrmPageData }) {
  const visual = data.heroVisual;
  const previewStages = data.pipelineStages.slice(0, 3);

  return (
    <div className="relative mx-auto h-[520px] w-full max-w-[820px] overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-4 shadow-[0_28px_90px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-white/[0.06] sm:h-[590px]">
      <div className="pointer-events-none absolute -left-16 top-12 h-64 w-64 rounded-full bg-blue-300/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-14 bottom-10 h-72 w-72 rounded-full bg-violet-300/25 blur-3xl" />

      <div className="relative z-10 h-full overflow-hidden rounded-[1.55rem] border border-slate-200 bg-slate-50/90 shadow-inner dark:border-white/10 dark:bg-slate-950/85">
        <div className="flex h-full">
          <CrmSidebarMockup crmName={visual.crmName} items={visual.sidebar} />

          <div className="min-w-0 flex-1 p-4 sm:p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs font-black uppercase text-blue-700 dark:text-blue-300">
                  {visual.crmName} Command Center
                </p>
                <h2 className="mt-1 text-2xl font-black text-slate-950 dark:text-white">
                  Leads, pipeline and revenue in one view
                </h2>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1.5 text-xs font-black text-emerald-700 dark:border-emerald-300/15 dark:bg-emerald-400/10 dark:text-emerald-300">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Live CRM
              </span>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3 xl:grid-cols-4">
              {visual.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-slate-200 bg-white/92 p-3 shadow-sm dark:border-white/10 dark:bg-white/[0.06]"
                >
                  <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400">
                    {stat.label}
                  </p>
                  <div className="mt-2 flex items-end justify-between gap-2">
                    <p className="text-xl font-black text-slate-950 dark:text-white sm:text-2xl">
                      {stat.value}
                    </p>
                    <span className="text-[10px] font-black text-emerald-600 dark:text-emerald-300">
                      {stat.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 grid gap-4 xl:grid-cols-[1.25fr_0.85fr]">
              <div className="rounded-[1.35rem] border border-slate-200 bg-white/92 p-3 shadow-sm dark:border-white/10 dark:bg-white/[0.06]">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-sm font-black text-slate-950 dark:text-white">
                    Pipeline Board
                  </p>
                  <span className="text-[10px] font-black text-blue-700 dark:text-blue-300">
                    Today
                  </span>
                </div>
                <div className="grid gap-3 md:grid-cols-3">
                  {previewStages.map((stageItem) => (
                    <div
                      key={stageItem.title}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-3 dark:border-white/10 dark:bg-white/[0.06]"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <p className="truncate text-[11px] font-black text-slate-700 dark:text-slate-200">
                          {stageItem.title}
                        </p>
                        <span className="text-[10px] font-black text-slate-400">
                          {stageItem.total}
                        </span>
                      </div>
                      <div className="mt-3 space-y-2">
                        {stageItem.cards.slice(0, 2).map((dealItem) => (
                          <div
                            key={dealItem.name}
                            className="rounded-xl bg-white p-2 shadow-sm dark:bg-slate-950/60"
                          >
                            <p className="truncate text-[10px] font-black text-slate-950 dark:text-white">
                              {dealItem.name}
                            </p>
                            <p className="mt-1 text-[10px] font-bold text-blue-700 dark:text-blue-300">
                              {dealItem.value}
                            </p>
                            <p className="mt-1 truncate text-[9px] font-semibold text-slate-500 dark:text-slate-400">
                              {dealItem.nextTask}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-[1.35rem] border border-slate-200 bg-white/92 p-4 shadow-sm dark:border-white/10 dark:bg-white/[0.06]">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[10px] font-black uppercase text-slate-400">
                        Customer timeline
                      </p>
                      <h3 className="mt-1 text-base font-black text-slate-950 dark:text-white">
                        {visual.customerName}
                      </h3>
                    </div>
                    <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-black text-blue-700 dark:bg-blue-400/10 dark:text-blue-300">
                      {visual.dealValue}
                    </span>
                  </div>
                  <p className="mt-2 text-xs font-bold text-slate-500 dark:text-slate-400">
                    {visual.customerType}
                  </p>
                  <div className="mt-4 space-y-2">
                    <TimelineItem label="Last contact" value={visual.lastContact} />
                    <TimelineItem label="Next task" value={visual.nextTask} />
                  </div>
                </div>

                <div className="rounded-[1.35rem] border border-violet-100 bg-violet-50/90 p-4 shadow-sm dark:border-violet-300/15 dark:bg-violet-400/10">
                  <div className="flex items-start gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-white text-violet-600 shadow-sm dark:bg-white/10 dark:text-violet-300">
                      <Workflow className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-[10px] font-black uppercase text-violet-700 dark:text-violet-300">
                        Automation suggestion
                      </p>
                      <p className="mt-1 text-xs font-bold leading-5 text-slate-700 dark:text-slate-200">
                        {visual.automationSuggestion}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-4 left-4 right-4 hidden rounded-[1.35rem] border border-blue-100 bg-white/92 p-4 shadow-[0_18px_50px_rgba(15,23,42,0.12)] dark:border-blue-300/15 dark:bg-slate-950/90 sm:block">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-400/10 dark:text-blue-300">
                    <BarChart3 className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-black text-slate-950 dark:text-white">
                      {visual.reportHealth}
                    </p>
                    <p className="mt-1 text-[10px] font-bold text-slate-500 dark:text-slate-400">
                      Report card / Forecast / Task aging
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-black text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300">
                  Decision ready
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CrmSidebarMockup({ crmName, items }: { crmName: string; items: string[] }) {
  return (
    <aside className="hidden w-40 shrink-0 bg-slate-950 p-4 text-white md:block">
      <div className="flex items-center gap-2">
        <span className="grid h-9 w-9 place-items-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-white">
          <LayoutDashboard className="h-4 w-4" />
        </span>
        <div>
          <p className="text-xs font-black">{crmName}</p>
          <p className="text-[10px] font-bold text-slate-500">Command OS</p>
        </div>
      </div>

      <div className="mt-8 space-y-2">
        {items.map((item, index) => (
          <div
            key={item}
            className={`rounded-xl px-3 py-2 text-xs font-black ${
              index === 0 ? "bg-blue-600 text-white shadow-sm" : "text-slate-400"
            }`}
          >
            {item}
          </div>
        ))}
      </div>
    </aside>
  );
}

function TimelineItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-3 rounded-xl bg-slate-50 p-3 dark:bg-white/[0.06]">
      <span className="mt-1 h-2 w-2 rounded-full bg-blue-600" />
      <div>
        <p className="text-[10px] font-black uppercase text-slate-400">{label}</p>
        <p className="mt-1 text-xs font-bold leading-5 text-slate-700 dark:text-slate-200">
          {value}
        </p>
      </div>
    </div>
  );
}

function GenericCrmProblemsSection({ data }: { data: IndustryCrmPageData }) {
  return (
    <section className="grid border-t border-slate-200 dark:border-white/10 xl:grid-cols-[1fr_1fr]">
      <ComparisonColumn
        title={data.genericProblemsTitle}
        description="Generic CRMs often look powerful in demos, then slow teams down when the workflow becomes real."
        items={data.genericProblems}
        tone="generic"
      />
      <ComparisonColumn
        title={data.crmFixesTitle}
        description="HNX designs the CRM around your data model, stage logic, role needs and reporting decisions."
        items={data.crmFixes}
        tone="custom"
      />
    </section>
  );
}

function ComparisonColumn({
  title,
  description,
  items,
  tone,
}: {
  title: string;
  description: string;
  items: IndustryCrmCard[];
  tone: "generic" | "custom";
}) {
  return (
    <section className="border-slate-200 px-7 py-10 dark:border-white/10 sm:px-10 lg:px-12 xl:first:border-r">
      <SectionTitle title={title} description={description} center />

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-white/[0.05]"
            >
              <span
                className={`grid h-12 w-12 place-items-center rounded-2xl ${
                  tone === "custom"
                    ? "bg-blue-50 text-blue-600 dark:bg-blue-400/10 dark:text-blue-300"
                    : "bg-slate-100 text-slate-600 dark:bg-white/10 dark:text-slate-300"
                }`}
              >
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

function CrmWorkflowMapSection({ data }: { data: IndustryCrmPageData }) {
  return (
    <section className="border-t border-slate-200 bg-gradient-to-b from-white to-blue-50/35 px-7 py-12 dark:border-white/10 dark:from-white/[0.04] dark:to-blue-950/10 sm:px-10 lg:px-12">
      <SectionTitle
        title={data.workflowTitle}
        description="This is not a generic step timeline. It is the CRM lifecycle your team sees every day, with owners, activity and stage context."
        center
      />

      <div className="relative mt-10">
        <div className="pointer-events-none absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent dark:via-blue-300/20 lg:block" />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-7">
          {data.workflowStages.map((stageItem, index) => (
            <WorkflowStageCard key={stageItem.title} stage={stageItem} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkflowStageCard({
  stage,
  index,
}: {
  stage: IndustryCrmWorkflowStage;
  index: number;
}) {
  const Icon = stage.icon;

  return (
    <article className="relative rounded-[1.35rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-white/[0.05]">
      <span className="relative z-10 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-[0_14px_30px_rgba(37,99,235,0.22)]">
        <Icon className="h-5 w-5" />
      </span>
      <p className="mt-5 text-xs font-black uppercase text-blue-700 dark:text-blue-300">
        Stage {index + 1}
      </p>
      <h3 className="mt-2 text-base font-black text-slate-950 dark:text-white">
        {stage.title}
      </h3>
      <div className="mt-3 space-y-2 text-xs font-bold text-slate-500 dark:text-slate-400">
        <p>Owner: {stage.owner}</p>
        <p>Metric: {stage.metric}</p>
      </div>
    </article>
  );
}

function CrmObjectsSection({ data }: { data: IndustryCrmPageData }) {
  const centerLabel = data.industryName === "Retail" ? "Customer" : data.industryName === "Education" ? "Student Lead" : "Lead / Customer";

  return (
    <section className="border-t border-slate-200 px-7 py-12 dark:border-white/10 sm:px-10 lg:px-12">
      <SectionTitle
        title={data.objectsTitle}
        description="A custom CRM starts with the right objects. HNX maps the records your team truly manages instead of forcing everything into generic contacts and deals."
        center
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-[0_24px_70px_rgba(15,23,42,0.16)] dark:border-white/10">
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="relative">
            <p className="text-xs font-black uppercase text-blue-200">CRM data model</p>
            <h3 className="mt-3 text-3xl font-black leading-tight">{centerLabel}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              The central record connects stages, tasks, documents, conversations, automations and reports.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {data.heroStats.map(([label, value]) => (
                <div key={label} className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">
                  <p className="text-[10px] font-black uppercase text-slate-400">{label}</p>
                  <p className="mt-1 text-lg font-black">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {data.crmObjects.map((objectItem) => (
            <CrmObjectCard key={objectItem.title} objectItem={objectItem} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CrmObjectCard({ objectItem }: { objectItem: IndustryCrmObject }) {
  const Icon = objectItem.icon;

  return (
    <article className="rounded-[1.35rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-white/[0.05]">
      <div className="flex items-start gap-3">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-400/10 dark:text-blue-300">
          <Icon className="h-5 w-5" />
        </span>
        <div>
          <p className="text-[10px] font-black uppercase text-slate-400">
            {objectItem.relation}
          </p>
          <h3 className="mt-1 text-base font-black text-slate-950 dark:text-white">
            {objectItem.title}
          </h3>
        </div>
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
        {objectItem.description}
      </p>
    </article>
  );
}

function RoleBasedCrmDesksSection({ data }: { data: IndustryCrmPageData }) {
  const firstRole = data.crmRoles[0];
  const [activeRoleId, setActiveRoleId] = useState(firstRole?.id ?? "");
  const activeRole = data.crmRoles.find((role) => role.id === activeRoleId) ?? firstRole;

  if (!activeRole) {
    return null;
  }

  return (
    <section className="border-t border-slate-200 bg-gradient-to-b from-slate-50/80 to-white px-7 py-12 dark:border-white/10 dark:from-white/[0.025] dark:to-white/[0.04] sm:px-10 lg:px-12">
      <div className="mx-auto max-w-3xl text-center">
        <SectionEyebrow>CRM Desks</SectionEyebrow>
        <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950 dark:text-white sm:text-4xl">
          {data.rolesTitle}
        </h2>
        <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
          {data.rolesDescription}
        </p>
      </div>

      <div className="mt-9 grid gap-6 xl:grid-cols-[0.78fr_1.22fr] xl:items-stretch">
        <div className="-mx-7 flex gap-3 overflow-x-auto px-7 pb-2 sm:-mx-10 sm:px-10 xl:mx-0 xl:grid xl:auto-rows-fr xl:overflow-visible xl:px-0 xl:pb-0">
          {data.crmRoles.map((roleItem) => (
            <CrmRoleTab
              key={roleItem.id}
              role={roleItem}
              isActive={roleItem.id === activeRole.id}
              onClick={() => setActiveRoleId(roleItem.id)}
            />
          ))}
        </div>

        <CrmRolePreview role={activeRole} crmName={data.heroVisual.crmName} />
      </div>
    </section>
  );
}

function CrmRoleTab({
  role,
  isActive,
  onClick,
}: {
  role: IndustryCrmRole;
  isActive: boolean;
  onClick: () => void;
}) {
  const Icon = role.icon;

  return (
    <button
      type="button"
      onClick={onClick}
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
          <h3 className="mt-1 text-base font-black">{role.title}</h3>
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
}

function CrmRolePreview({
  role,
  crmName,
}: {
  role: IndustryCrmRole;
  crmName: string;
}) {
  const Icon = role.icon;

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_26px_80px_rgba(15,23,42,0.10)] dark:border-white/10 dark:bg-white/[0.05] sm:p-6">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_12%,rgba(59,130,246,0.12),transparent_28%),radial-gradient(circle_at_82%_14%,rgba(124,58,237,0.12),transparent_30%)]" />
      <div className="relative grid gap-6 lg:grid-cols-[1fr_330px] lg:items-center">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-[0_14px_30px_rgba(37,99,235,0.24)]">
              <Icon className="h-6 w-6" />
            </span>
            <div>
              <p className="text-xs font-black uppercase text-blue-700 dark:text-blue-300">
                {role.role}
              </p>
              <h3 className="mt-1 text-3xl font-black leading-tight text-slate-950 dark:text-white">
                {role.title}
              </h3>
            </div>
          </div>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300">
            {role.description}
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {role.capabilities.map((capability) => (
              <div
                key={capability}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3 dark:border-white/10 dark:bg-white/[0.06]"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
                <span className="text-xs font-black text-slate-700 dark:text-slate-300">
                  {capability}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-7 rounded-[1.35rem] border border-slate-200 bg-slate-50 p-4 shadow-sm dark:border-white/10 dark:bg-white/[0.06]">
            <div className="mb-4 flex items-center justify-between gap-3">
              <p className="text-xs font-black uppercase text-slate-400">
                Desk workflow
              </p>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-black text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300">
                CRM synced
              </span>
            </div>
            <div className="grid gap-3 sm:grid-cols-4">
              {role.capabilities.map((capability, index) => (
                <div key={`${role.id}-flow-${capability}`}>
                  <div className="flex items-center gap-2">
                    <span
                      className={`grid h-7 w-7 shrink-0 place-items-center rounded-full text-[10px] font-black ${
                        index === 0
                          ? "bg-gradient-to-br from-blue-600 to-violet-600 text-white"
                          : "bg-white text-slate-500 dark:bg-white/10 dark:text-slate-300"
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

          <Link
            href="/contact"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3 text-sm font-black text-white shadow-[0_16px_42px_rgba(37,99,235,0.22)] transition hover:-translate-y-0.5"
          >
            Plan This CRM Desk
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <MiniCrmDeskPreview role={role} crmName={crmName} />
      </div>
    </div>
  );
}

function MiniCrmDeskPreview({
  role,
  crmName,
}: {
  role: IndustryCrmRole;
  crmName: string;
}) {
  return (
    <div className="mx-auto w-full max-w-[330px] overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.14)] dark:border-white/10 dark:bg-slate-950">
      <div className="bg-slate-950 p-4 text-white">
        <p className="text-[10px] font-black uppercase text-blue-200">{crmName}</p>
        <h4 className="mt-2 text-xl font-black leading-tight">{role.title}</h4>
        <p className="mt-2 text-xs leading-5 text-slate-300">
          Internal CRM operating desk
        </p>
      </div>

      <div className="space-y-2.5 p-3">
        {role.previewCards.map((card, index) => {
          const Icon = card.icon;

          return (
            <div
              key={card.label}
              className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3 dark:border-white/10 dark:bg-white/[0.06]"
            >
              <span
                className={`grid h-10 w-10 shrink-0 place-items-center rounded-2xl ${
                  index === 0
                    ? "bg-blue-50 text-blue-600 dark:bg-blue-400/10 dark:text-blue-300"
                    : "bg-white text-slate-600 dark:bg-white/10 dark:text-slate-300"
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
            </div>
          );
        })}
      </div>
    </div>
  );
}

function PipelineBoardSection({ data }: { data: IndustryCrmPageData }) {
  return (
    <section className="border-t border-slate-200 px-7 py-12 dark:border-white/10 sm:px-10 lg:px-12">
      <SectionTitle
        title={data.pipelineTitle}
        description="A CRM pipeline should mirror the real movement of money, work, documents and customer commitment."
        center
      />

      <div className="mt-9 overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 p-4 shadow-inner dark:border-white/10 dark:bg-slate-950/70">
        <div className="overflow-x-auto pb-2">
          <div className="grid min-w-[1040px] grid-cols-6 gap-4">
            {data.pipelineStages.map((stageItem) => (
              <PipelineColumn key={stageItem.title} stage={stageItem} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PipelineColumn({ stage }: { stage: IndustryCrmPipelineStage }) {
  return (
    <div className="rounded-[1.35rem] border border-slate-200 bg-white p-3 shadow-sm dark:border-white/10 dark:bg-white/[0.05]">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-sm font-black text-slate-950 dark:text-white">
          {stage.title}
        </h3>
        <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-black text-blue-700 dark:bg-blue-400/10 dark:text-blue-300">
          {stage.total}
        </span>
      </div>

      <div className="mt-4 space-y-3">
        {stage.cards.map((dealItem) => (
          <PipelineDealCard key={`${stage.title}-${dealItem.name}`} deal={dealItem} />
        ))}
      </div>
    </div>
  );
}

function PipelineDealCard({ deal }: { deal: IndustryCrmPipelineDeal }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-slate-50 p-3 shadow-sm dark:border-white/10 dark:bg-white/[0.06]">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="truncate text-xs font-black text-slate-950 dark:text-white">
            {deal.name}
          </p>
          <p className="mt-1 text-xs font-black text-blue-700 dark:text-blue-300">
            {deal.value}
          </p>
        </div>
        <StatusBadge label={deal.priority} />
      </div>
      <p className="mt-3 text-[11px] font-semibold leading-4 text-slate-500 dark:text-slate-400">
        Next: {deal.nextTask}
      </p>
      <p className="mt-2 text-[10px] font-black uppercase text-slate-400">
        Owner: {deal.owner}
      </p>
    </article>
  );
}

function StatusBadge({ label }: { label: IndustryCrmPipelineDeal["priority"] }) {
  const active = label === "Hot" || label === "Won";

  return (
    <span
      className={`rounded-full px-2 py-1 text-[9px] font-black uppercase ${
        active
          ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300"
          : "bg-slate-100 text-slate-500 dark:bg-white/10 dark:text-slate-300"
      }`}
    >
      {label}
    </span>
  );
}

function AutomationEngineSection({ data }: { data: IndustryCrmPageData }) {
  return (
    <section className="border-t border-slate-200 bg-gradient-to-b from-white to-blue-50/35 px-7 py-12 dark:border-white/10 dark:from-white/[0.04] dark:to-blue-950/10 sm:px-10 lg:px-12">
      <SectionTitle
        title={data.automationTitle}
        description="CRM automations should feel like operational guardrails: when something happens, the right owner gets the right next action."
        center
      />

      <div className="mt-9 grid gap-5 lg:grid-cols-3">
        {data.automationExamples.map((automationItem) => (
          <AutomationFlowCard key={automationItem.title} item={automationItem} />
        ))}
      </div>
    </section>
  );
}

function AutomationFlowCard({ item }: { item: IndustryCrmAutomationExample }) {
  const Icon = item.icon;

  return (
    <article className="rounded-[1.45rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.10)] dark:border-white/10 dark:bg-white/[0.05]">
      <div className="flex items-center gap-3">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-400/10 dark:text-blue-300">
          <Icon className="h-5 w-5" />
        </span>
        <h3 className="text-lg font-black text-slate-950 dark:text-white">
          {item.title}
        </h3>
      </div>

      <div className="mt-5 space-y-3">
        <AutomationStep label="Trigger" value={item.trigger} />
        <AutomationStep label="Condition" value={item.condition} />
        <AutomationStep label="Action" value={item.action} />
      </div>
    </article>
  );
}

function AutomationStep({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/[0.06]">
      <p className="text-[10px] font-black uppercase text-blue-700 dark:text-blue-300">
        {label}
      </p>
      <p className="mt-1 text-sm font-bold leading-6 text-slate-700 dark:text-slate-300">
        {value}
      </p>
    </div>
  );
}

function CrmDemoExperienceSection({ data }: { data: IndustryCrmPageData }) {
  return (
    <section className="border-t border-slate-200 px-7 py-12 dark:border-white/10 sm:px-10 lg:px-12">
      <div className="grid gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <SectionEyebrow>CRM Demo</SectionEyebrow>
          <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950 dark:text-white sm:text-4xl">
            {data.demoSectionTitle}
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
            {data.demoSectionDescription}
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
            This is not a static screenshot. The demo helps you understand what your CRM can look like, what modules you need, and how your team will use it daily.
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {data.demoSteps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/[0.05]"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-400/10 dark:text-blue-300">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="text-sm font-black text-slate-950 dark:text-white">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={data.crmDemoHref}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3 text-sm font-black text-white shadow-[0_16px_42px_rgba(37,99,235,0.22)] transition hover:-translate-y-0.5"
            >
              Launch CRM Demo
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-black text-blue-700 transition hover:-translate-y-0.5 dark:border-white/10 dark:bg-white/[0.06] dark:text-blue-300"
            >
              Book a CRM Walkthrough
            </Link>
          </div>
        </div>

        <CrmDemoWindow data={data} />
      </div>
    </section>
  );
}

function CrmDemoWindow({ data }: { data: IndustryCrmPageData }) {
  const tabs = ["Pipeline", "Leads", "Tasks", "Reports", "Automations"];

  return (
    <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 p-4 text-white shadow-[0_28px_90px_rgba(15,23,42,0.18)] dark:border-white/10">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-[10px] font-black uppercase text-blue-200">
            Demo Mode
          </p>
          <h3 className="mt-1 text-xl font-black">{data.industryName} CRM</h3>
        </div>
        <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-black ring-1 ring-white/10">
          Working preview
        </span>
      </div>

      <div className="mt-5 flex gap-2 overflow-x-auto pb-1">
        {tabs.map((tab, index) => (
          <span
            key={tab}
            className={`shrink-0 rounded-xl px-3 py-2 text-[10px] font-black ${
              index === 0 ? "bg-blue-600 text-white" : "bg-white/10 text-slate-300"
            }`}
          >
            {tab}
          </span>
        ))}
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-[1fr_0.8fr]">
        <div className="grid gap-3 sm:grid-cols-3">
          {data.pipelineStages.slice(0, 3).map((stageItem) => (
            <div key={stageItem.title} className="rounded-2xl bg-white/10 p-3 ring-1 ring-white/10">
              <p className="text-[10px] font-black text-blue-200">{stageItem.title}</p>
              <div className="mt-3 space-y-2">
                {stageItem.cards.slice(0, 2).map((dealItem) => (
                  <div key={dealItem.name} className="rounded-xl bg-white/10 p-2">
                    <p className="truncate text-[10px] font-black">{dealItem.name}</p>
                    <p className="mt-1 text-[9px] font-bold text-slate-400">{dealItem.value}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-2xl bg-white p-4 text-slate-950">
          <p className="text-xs font-black uppercase text-blue-700">Report widget</p>
          <p className="mt-2 text-2xl font-black">{data.heroVisual.reportHealth}</p>
          <div className="mt-4 space-y-2">
            {data.reportCards.slice(0, 3).map((reportItem) => (
              <div key={reportItem.title} className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2">
                <span className="text-[10px] font-black text-slate-600">{reportItem.title}</span>
                <span className="text-[10px] font-black text-emerald-600">{reportItem.change}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CrmIntelligenceReportsSection({ data }: { data: IndustryCrmPageData }) {
  return (
    <section className="border-t border-slate-200 bg-gradient-to-b from-white to-slate-50/80 px-7 py-12 dark:border-white/10 dark:from-white/[0.04] dark:to-white/[0.025] sm:px-10 lg:px-12">
      <SectionTitle
        title={data.reportsTitle}
        description="A CRM becomes valuable when the team can see which source works, where deals get stuck, who needs support, and what revenue is likely to close."
        center
      />

      <div className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {data.reportCards.map((reportItem) => (
          <ReportMetricCard key={reportItem.title} item={reportItem} />
        ))}
      </div>
    </section>
  );
}

function ReportMetricCard({ item }: { item: IndustryCrmReportCard }) {
  const Icon = item.icon;

  return (
    <article className="rounded-[1.45rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.10)] dark:border-white/10 dark:bg-white/[0.05]">
      <div className="flex items-start justify-between gap-4">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-400/10 dark:text-blue-300">
          <Icon className="h-5 w-5" />
        </span>
        <span className="rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-black text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300">
          {item.change}
        </span>
      </div>
      <h3 className="mt-5 text-lg font-black text-slate-950 dark:text-white">
        {item.title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
        {item.description}
      </p>
      <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/[0.06]">
        <p className="text-2xl font-black text-slate-950 dark:text-white">
          {item.metric}
        </p>
        <div className="mt-3 flex items-end gap-1.5">
          {[34, 52, 44, 68, 58, 82].map((height) => (
            <span
              key={height}
              className="w-full rounded-t bg-gradient-to-t from-blue-600 to-violet-500"
              style={{ height: `${height}px` }}
            />
          ))}
        </div>
      </div>
    </article>
  );
}

function OwnershipComparisonSection({ data }: { data: IndustryCrmPageData }) {
  return (
    <section className="border-t border-slate-200 px-7 py-12 dark:border-white/10 sm:px-10 lg:px-12">
      <SectionTitle
        title={data.ownershipTitle}
        description="A custom CRM should reduce noise, reduce dependency and give your team control over the exact workflow they use every day."
        center
      />

      <div className="mt-9 grid gap-5 lg:grid-cols-2">
        <OwnershipComparisonCard
          title={data.ownershipComparison.genericTitle}
          items={data.ownershipComparison.genericItems}
          tone="generic"
        />
        <OwnershipComparisonCard
          title={data.ownershipComparison.customTitle}
          items={data.ownershipComparison.customItems}
          tone="custom"
        />
      </div>
    </section>
  );
}

function OwnershipComparisonCard({
  title,
  items,
  tone,
}: {
  title: string;
  items: string[];
  tone: "generic" | "custom";
}) {
  return (
    <article
      className={`rounded-[2rem] border p-6 shadow-sm ${
        tone === "custom"
          ? "border-blue-200 bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-[0_22px_58px_rgba(37,99,235,0.22)]"
          : "border-slate-200 bg-white text-slate-950 dark:border-white/10 dark:bg-white/[0.05] dark:text-white"
      }`}
    >
      <h3 className="text-2xl font-black">{title}</h3>
      <div className="mt-6 grid gap-3">
        {items.map((item) => (
          <div
            key={item}
            className={`flex items-start gap-3 rounded-2xl p-4 ${
              tone === "custom"
                ? "bg-white/12 text-white ring-1 ring-white/15"
                : "bg-slate-50 text-slate-700 dark:bg-white/[0.06] dark:text-slate-300"
            }`}
          >
            <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${tone === "custom" ? "text-white" : "text-blue-600 dark:text-blue-300"}`} />
            <p className="text-sm font-bold leading-6">{item}</p>
          </div>
        ))}
      </div>
    </article>
  );
}

function IntegrationsSection({ data }: { data: IndustryCrmPageData }) {
  return (
    <section className="border-t border-slate-200 bg-gradient-to-b from-white to-blue-50/35 px-7 py-12 dark:border-white/10 dark:from-white/[0.04] dark:to-blue-950/10 sm:px-10 lg:px-12">
      <SectionTitle
        title={data.integrationsTitle}
        description="The CRM becomes the center of the business system when forms, communication, payments, portals, apps and reports feed the same operating layer."
        center
      />

      <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {data.integrations.map((integration) => (
          <IntegrationCard key={integration.title} integration={integration} />
        ))}
      </div>
    </section>
  );
}

function IntegrationCard({ integration }: { integration: IndustryCrmIntegration }) {
  const Icon = integration.icon;

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 dark:border-white/10 dark:bg-white/[0.05]">
      <Icon className="h-6 w-6 text-blue-600 dark:text-blue-300" />
      <h3 className="mt-4 text-sm font-black leading-5 text-slate-950 dark:text-white">
        {integration.title}
      </h3>
      <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">
        {integration.description}
      </p>
    </article>
  );
}

function PricingSection({ data }: { data: IndustryCrmPageData }) {
  return (
    <section className="border-t border-slate-200 bg-gradient-to-b from-white to-slate-50/80 px-7 py-12 dark:border-white/10 dark:from-white/[0.04] dark:to-white/[0.025] sm:px-10 lg:px-12">
      <SectionTitle
        title={`CRM pricing for ${data.industryName}`}
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

function PricingCard({ plan }: { plan: IndustryCrmPricingPlan }) {
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
        Discuss CRM Plan
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
  items: IndustryCrmTestimonial[];
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

function FinalCTASection({ data }: { data: IndustryCrmPageData }) {
  return (
    <section className="border-t border-slate-200 px-7 py-10 dark:border-white/10 sm:px-10 lg:px-12">
      <div className="overflow-hidden rounded-[2rem] border border-slate-800 bg-[linear-gradient(135deg,#020617,#0f172a_48%,#1d4ed8)] p-6 text-white shadow-[0_24px_70px_rgba(15,23,42,0.20)] sm:p-8 lg:p-10">
        <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase text-blue-300">
              Owned CRM command center
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-black leading-tight sm:text-4xl">
              {data.ctaTitle}
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
              Start My CRM Build
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={data.crmDemoHref}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/10 px-7 py-4 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-white/15"
            >
              Launch CRM Demo
              <LayoutDashboard className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {["Pipeline mapped", "Automations ready", "Reports built for decisions"].map((item) => (
            <div key={item} className="rounded-2xl bg-white/10 px-4 py-3 text-sm font-black ring-1 ring-white/10">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
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

function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-black uppercase text-blue-700 dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-300">
      <Sparkles className="h-4 w-4" />
      {children}
    </span>
  );
}

function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-black uppercase text-blue-700 dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-300">
      {children}
    </span>
  );
}

function PopularBadge() {
  return (
    <span className="absolute right-5 top-5 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-3 py-1 text-[10px] font-black uppercase text-white shadow-sm">
      Popular
    </span>
  );
}

function splitHighlightedText(title: string, highlight: string): [string, string] {
  const index = title.toLowerCase().indexOf(highlight.toLowerCase());

  if (index === -1) {
    return [`${title} `, ""];
  }

  return [title.slice(0, index), title.slice(index + highlight.length)];
}
