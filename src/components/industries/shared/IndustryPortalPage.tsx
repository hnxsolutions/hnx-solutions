"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Bell,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  FileText,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import {
  getIndustryPortalPage,
  type IndustryPortalCard,
  type IndustryPortalDemo,
  type IndustryPortalModule,
  type IndustryPortalPageData,
  type IndustryPortalPricingPlan,
  type IndustryPortalRole,
  type IndustryPortalSecurityItem,
  type IndustryPortalTestimonial,
  type IndustryPortalTrustItem,
  type IndustryPortalWorkflowStep,
} from "./industryPortalData";

export default function IndustryPortalPage({
  industrySlug,
  solutionSlug,
}: {
  industrySlug: string;
  solutionSlug: string;
}) {
  const data = getIndustryPortalPage(industrySlug, solutionSlug);

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
            <ProblemsAndFixesSection data={data} />
            <PortalRolesSection data={data} />
            <PortalModulesSection data={data} />
            <WorkflowJourneySection data={data} />
            <SecurityAccessSection data={data} />
            <PortalDemoGallerySection data={data} />
            <PricingSection data={data} />
            <TestimonialsSection title={data.testimonialsTitle} items={data.testimonials} />
            <TrustSection data={data} />
            <FinalCTASection data={data} />
          </div>
        </div>
      </section>
    </main>
  );
}

function HeroSection({ data }: { data: IndustryPortalPageData }) {
  const [titleStart, titleEnd] = splitHighlightedText(data.title, data.highlight);

  return (
    <section className="relative overflow-hidden px-7 py-1 sm:px-10 lg:px-12 xl:px-14">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(59,130,246,0.12),transparent_28%),radial-gradient(circle_at_78%_16%,rgba(124,58,237,0.10),transparent_28%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.04)_1px,transparent_1px)] bg-[size:48px_48px] opacity-60 [mask-image:linear-gradient(120deg,black,transparent_76%)] dark:bg-[linear-gradient(rgba(125,211,252,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(125,211,252,0.05)_1px,transparent_1px)]" />

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
          <span className="text-slate-900 dark:text-white">Portal</span>
        </nav>

        <div className="relative grid items-center gap-10 xl:grid-cols-[0.78fr_1.22fr]">
          <div className="relative z-20">
            <Badge>
              <LockKeyhole className="h-4 w-4" />
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
                Build My {data.industryName} Portal
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="#portal-flow"
                className="inline-flex items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white/92 px-8 py-4 text-sm font-black text-blue-700 shadow-[0_16px_36px_rgba(15,23,42,0.08)] transition hover:-translate-y-0.5 hover:border-blue-200 dark:border-white/10 dark:bg-white/[0.06] dark:text-blue-300"
              >
                View Portal Flow
                <span className="grid h-8 w-8 place-items-center rounded-full border border-blue-200 bg-white text-blue-600 dark:border-blue-300/20 dark:bg-white/10 dark:text-blue-300">
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </div>

            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
              {["Secure login", "Role-based views", "Admin visibility"].map((chip) => (
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

          <PortalDashboardMockup data={data} />
        </div>
      </div>
    </section>
  );
}

function PortalDashboardMockup({ data }: { data: IndustryPortalPageData }) {
  const { heroVisual } = data;

  return (
    <div className="relative mx-auto h-[500px] w-full max-w-[780px] overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-4 shadow-[0_28px_90px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-white/[0.06] sm:h-[560px]">
      <div
        className="pointer-events-none absolute right-0 top-0 h-full w-[58%] bg-cover bg-center opacity-[0.16] grayscale [mask-image:linear-gradient(90deg,transparent,black)]"
        style={{ backgroundImage: `url(${data.heroImage})` }}
      />
      <div className="pointer-events-none absolute -left-16 top-12 h-64 w-64 rounded-full bg-blue-300/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-14 bottom-10 h-72 w-72 rounded-full bg-violet-300/25 blur-3xl" />

      <div className="relative z-10 h-full overflow-hidden rounded-[1.55rem] border border-slate-200 bg-slate-50/85 shadow-inner dark:border-white/10 dark:bg-slate-950/80">
        <div className="flex h-full">
          <aside className="hidden w-40 border-r border-slate-200 bg-white/80 p-4 dark:border-white/10 dark:bg-white/[0.04] md:block">
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-white">
                <LockKeyhole className="h-4 w-4" />
              </span>
              <div>
                <p className="text-xs font-black text-slate-950 dark:text-white">
                  {heroVisual.portalName}
                </p>
                <p className="text-[10px] font-bold text-slate-400">Portal</p>
              </div>
            </div>

            <div className="mt-8 space-y-2">
              {heroVisual.sidebar.map((item, index) => (
                <div
                  key={item}
                  className={`rounded-xl px-3 py-2 text-xs font-black ${
                    index === 0
                      ? "bg-blue-600 text-white shadow-sm"
                      : "text-slate-500 dark:text-slate-400"
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
          </aside>

          <div className="flex-1 p-4 sm:p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs font-black uppercase text-blue-700 dark:text-blue-300">
                  {heroVisual.portalName} Workspace
                </p>
                <h2 className="mt-1 text-2xl font-black text-slate-950 dark:text-white">
                  Portal Operations
                </h2>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1.5 text-xs font-black text-emerald-700 dark:border-emerald-300/15 dark:bg-emerald-400/10 dark:text-emerald-300">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Live
              </span>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
              {heroVisual.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-slate-200 bg-white/90 p-3 shadow-sm dark:border-white/10 dark:bg-white/[0.06]"
                >
                  <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400">
                    {stat.label}
                  </p>
                  <div className="mt-2 flex items-end justify-between gap-2">
                    <p className="text-2xl font-black text-slate-950 dark:text-white">
                      {stat.value}
                    </p>
                    <span className="text-[10px] font-black text-emerald-600 dark:text-emerald-300">
                      {stat.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 grid gap-4 lg:grid-cols-[1.3fr_0.9fr]">
              <div className="rounded-[1.35rem] border border-slate-200 bg-white/92 p-4 shadow-sm dark:border-white/10 dark:bg-white/[0.06]">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-sm font-black text-slate-950 dark:text-white">
                    {heroVisual.pipelineTitle}
                  </h3>
                  <span className="text-[10px] font-black text-blue-700 dark:text-blue-300">
                    View all
                  </span>
                </div>
                <div className="mt-4 space-y-3">
                  {heroVisual.pipeline.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-3 dark:border-white/10 dark:bg-white/[0.06]"
                    >
                      <span className="grid h-9 w-9 place-items-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-400/10 dark:text-blue-300">
                        <ClipboardCheck className="h-4 w-4" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-xs font-black text-slate-950 dark:text-white">
                          {item.label}
                        </p>
                        <p className="mt-0.5 truncate text-[10px] font-bold text-slate-500 dark:text-slate-400">
                          {item.owner}
                        </p>
                      </div>
                      <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-black text-blue-700 dark:bg-blue-400/10 dark:text-blue-300">
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-[1.35rem] border border-slate-200 bg-white/92 p-4 shadow-sm dark:border-white/10 dark:bg-white/[0.06]">
                  <p className="text-xs font-black text-slate-950 dark:text-white">
                    {heroVisual.roleViewTitle}
                  </p>
                  <div className="mt-3 grid gap-2">
                    {heroVisual.roleView.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2 text-[10px] font-black text-slate-600 dark:bg-white/[0.06] dark:text-slate-300"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[1.35rem] border border-blue-100 bg-blue-50/90 p-4 shadow-sm dark:border-blue-300/15 dark:bg-blue-400/10">
                  <div className="flex items-start gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-white text-blue-600 shadow-sm dark:bg-white/10 dark:text-blue-300">
                      <Bell className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-[10px] font-black uppercase text-blue-700 dark:text-blue-300">
                        New notification
                      </p>
                      <p className="mt-1 text-xs font-bold leading-5 text-slate-700 dark:text-slate-200">
                        {heroVisual.notification}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-4 left-4 right-4 hidden rounded-[1.35rem] border border-violet-100 bg-white/92 p-4 shadow-[0_18px_50px_rgba(15,23,42,0.12)] dark:border-violet-300/15 dark:bg-slate-950/90 sm:block">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-violet-50 text-violet-600 dark:bg-violet-400/10 dark:text-violet-300">
                    <FileText className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-black text-slate-950 dark:text-white">
                      {heroVisual.documentCard}
                    </p>
                    <p className="mt-1 text-[10px] font-bold text-slate-500 dark:text-slate-400">
                      Document center / Review queue
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-violet-50 px-3 py-1 text-[10px] font-black text-violet-700 dark:bg-violet-400/10 dark:text-violet-300">
                  Needs review
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProblemsAndFixesSection({ data }: { data: IndustryPortalPageData }) {
  return (
    <section className="grid border-t border-slate-200 dark:border-white/10 xl:grid-cols-[1fr_1fr]">
      <PortalCardColumn
        title={data.problemsTitle}
        description="Portal gaps usually show up as repeated follow-ups, lost files, unclear status, and slow approvals."
        items={data.problems}
        tone="problem"
      />
      <PortalCardColumn
        title={data.fixesTitle}
        description="A secure portal turns those loose messages into controlled requests, documents, roles, and updates."
        items={data.fixes}
        tone="fix"
      />
    </section>
  );
}

function PortalCardColumn({
  title,
  description,
  items,
  tone,
}: {
  title: string;
  description: string;
  items: IndustryPortalCard[];
  tone: "problem" | "fix";
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
                  tone === "fix"
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

function PortalRolesSection({ data }: { data: IndustryPortalPageData }) {
  const firstRole = data.roles[0];
  const [activeRoleId, setActiveRoleId] = useState(firstRole?.id ?? "");
  const activeRole = data.roles.find((role) => role.id === activeRoleId) ?? firstRole;

  if (!activeRole) {
    return null;
  }

  return (
    <section className="border-t border-slate-200 bg-gradient-to-b from-slate-50/80 to-white px-7 py-12 dark:border-white/10 dark:from-white/[0.025] dark:to-white/[0.04] sm:px-10 lg:px-12">
      <div className="mx-auto max-w-3xl text-center">
        <SectionEyebrow>Portal Roles</SectionEyebrow>
        <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950 dark:text-white sm:text-4xl">
          {data.rolesTitle}
        </h2>
        <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
          {data.rolesDescription}
        </p>
      </div>

      <div className="mt-9 grid gap-6 xl:grid-cols-[0.78fr_1.22fr] xl:items-stretch">
        <div className="-mx-7 flex gap-3 overflow-x-auto px-7 pb-2 sm:-mx-10 sm:px-10 xl:mx-0 xl:grid xl:auto-rows-fr xl:overflow-visible xl:px-0 xl:pb-0">
          {data.roles.map((roleItem) => (
            <PortalRoleTab
              key={roleItem.id}
              role={roleItem}
              isActive={roleItem.id === activeRole.id}
              onClick={() => setActiveRoleId(roleItem.id)}
            />
          ))}
        </div>

        <PortalRolePreview role={activeRole} data={data} />
      </div>
    </section>
  );
}

function PortalRoleTab({
  role,
  isActive,
  onClick,
}: {
  role: IndustryPortalRole;
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

function PortalRolePreview({
  role,
  data,
}: {
  role: IndustryPortalRole;
  data: IndustryPortalPageData;
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
                Portal workflow line
              </p>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-black text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300">
                Role synced
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

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-4 dark:border-blue-300/15 dark:bg-blue-400/10">
              <p className="text-xs font-black uppercase text-blue-700 dark:text-blue-300">
                Role metric
              </p>
              <p className="mt-2 text-xl font-black text-slate-950 dark:text-white">
                {role.metric}
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-4 text-sm font-black text-white shadow-[0_16px_42px_rgba(37,99,235,0.22)] transition hover:-translate-y-0.5"
            >
              Plan This Portal Role
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <MiniPortalPreview role={role} portalName={data.heroVisual.portalName} />
      </div>
    </div>
  );
}

function MiniPortalPreview({
  role,
  portalName,
}: {
  role: IndustryPortalRole;
  portalName: string;
}) {
  return (
    <div className="mx-auto w-full max-w-[330px] rounded-[1.75rem] border border-slate-200 bg-white p-3 shadow-[0_24px_70px_rgba(15,23,42,0.14)] dark:border-white/10 dark:bg-slate-950">
      <div className="rounded-[1.35rem] bg-slate-950 p-4 text-white">
        <p className="text-[10px] font-black uppercase text-blue-200">
          {portalName}
        </p>
        <h4 className="mt-2 text-xl font-black leading-tight">
          {role.title}
        </h4>
        <p className="mt-2 text-xs leading-5 text-slate-300">
          Secure role workspace
        </p>
      </div>

      <div className="mt-3 space-y-2.5">
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

      <div className="mt-3 flex items-center justify-around rounded-2xl border border-slate-200 bg-white px-3 py-2 dark:border-white/10 dark:bg-white/[0.04]">
        {["Home", "Files", "Messages", "Reports"].map((item, index) => (
          <span
            key={item}
            className={`text-[10px] font-black ${index === 0 ? "text-blue-600 dark:text-blue-300" : "text-slate-400"}`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function PortalModulesSection({ data }: { data: IndustryPortalPageData }) {
  return (
    <section className="border-t border-slate-200 px-7 py-12 dark:border-white/10 sm:px-10 lg:px-12">
      <SectionTitle
        title={data.modulesTitle}
        description={data.modulesDescription}
        center
      />

      <div className="mt-9 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {data.modules.map((module) => (
          <PortalModuleCard key={module.title} module={module} />
        ))}
      </div>
    </section>
  );
}

function PortalModuleCard({ module }: { module: IndustryPortalModule }) {
  const Icon = module.icon;

  return (
    <article className="group overflow-hidden rounded-[1.45rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.10)] dark:border-white/10 dark:bg-white/[0.05]">
      <div className="relative min-h-[135px] overflow-hidden bg-gradient-to-br from-blue-50 via-white to-violet-50 p-4 dark:from-blue-950/30 dark:via-slate-950 dark:to-violet-950/20">
        <div className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-2xl bg-white text-blue-600 shadow-sm dark:bg-white/10 dark:text-blue-300">
          <Icon className="h-5 w-5" />
        </div>
        <div className="w-full max-w-[210px] rounded-2xl border border-slate-200 bg-white/90 p-3 shadow-sm dark:border-white/10 dark:bg-white/[0.06]">
          <div className="flex items-center justify-between">
            <span className="h-2 w-16 rounded-full bg-blue-200 dark:bg-blue-300/20" />
            <span className="h-5 w-5 rounded-full bg-emerald-100 dark:bg-emerald-300/20" />
          </div>
          <div className="mt-4 space-y-2">
            {[0, 1, 2].map((item) => (
              <div key={item} className="flex items-center gap-2 rounded-xl bg-slate-50 p-2 dark:bg-white/10">
                <span className="h-6 w-6 rounded-lg bg-blue-100 dark:bg-blue-400/20" />
                <span className="h-2 flex-1 rounded-full bg-slate-200 dark:bg-white/15" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-black leading-6 text-slate-950 dark:text-white">
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
      </div>
    </article>
  );
}

function WorkflowJourneySection({ data }: { data: IndustryPortalPageData }) {
  return (
    <section
      id="portal-flow"
      className="border-t border-slate-200 bg-gradient-to-b from-white to-blue-50/35 px-7 py-12 dark:border-white/10 dark:from-white/[0.04] dark:to-blue-950/10 sm:px-10 lg:px-12"
    >
      <SectionTitle
        title={data.workflowTitle}
        description="A portal workflow turns login, requests, documents, review, updates, and reporting into one visible journey."
        center
      />

      <div className="relative mt-10">
        <div className="pointer-events-none absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent dark:via-blue-300/20 lg:block" />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {data.workflowSteps.map((step, index) => (
            <WorkflowJourneyStep key={step.title} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkflowJourneyStep({
  step,
  index,
}: {
  step: IndustryPortalWorkflowStep;
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

function SecurityAccessSection({ data }: { data: IndustryPortalPageData }) {
  return (
    <section className="border-t border-slate-200 px-7 py-12 dark:border-white/10 sm:px-10 lg:px-12">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <SectionEyebrow>Access Control</SectionEyebrow>
          <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950 dark:text-white sm:text-4xl">
            {data.securityTitle}
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
            {data.securityDescription}
          </p>
        </div>
        <ShieldCheck className="h-10 w-10 text-emerald-500" />
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {data.securityItems.map((item) => (
          <SecurityCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}

function SecurityCard({ item }: { item: IndustryPortalSecurityItem }) {
  const Icon = item.icon;

  return (
    <article className="rounded-[1.35rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-white/[0.05]">
      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-50 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-300">
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
}

function PortalDemoGallerySection({ data }: { data: IndustryPortalPageData }) {
  return (
    <section className="border-t border-slate-200 bg-gradient-to-b from-white to-blue-50/40 px-7 py-12 dark:border-white/10 dark:from-white/[0.04] dark:to-blue-950/10 sm:px-10 lg:px-12">
      <div className="mx-auto max-w-3xl text-center">
        <SectionEyebrow>Portal Demo Gallery</SectionEyebrow>
        <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950 dark:text-white sm:text-4xl">
          {data.demoGalleryTitle}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-300">
          {data.demoGalleryDescription}
        </p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {data.demoGallery.map((demoItem) => (
          <PortalDemoCard key={demoItem.title} demo={demoItem} />
        ))}
      </div>
    </section>
  );
}

function PortalDemoCard({ demo }: { demo: IndustryPortalDemo }) {
  const Icon = demo.icon;

  return (
    <article className="group overflow-hidden rounded-[1.45rem] border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.10)] dark:border-white/10 dark:bg-white/[0.05]">
      <div className="mb-4 flex items-start gap-3">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-400/10 dark:text-blue-300">
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

      <MiniDashboardPreview demo={demo} />

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

      <Link
        href="/contact"
        className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-3 text-xs font-black text-white shadow-sm transition hover:-translate-y-0.5"
      >
        View Portal Demo
        <ArrowRight className="h-4 w-4" />
      </Link>
    </article>
  );
}

function MiniDashboardPreview({ demo }: { demo: IndustryPortalDemo }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-slate-950">
      <div className="flex items-center justify-between border-b border-slate-200 bg-white px-3 py-2 dark:border-white/10 dark:bg-white/[0.06]">
        <span className="text-[10px] font-black text-slate-900 dark:text-white">
          Portal Preview
        </span>
        <span className="rounded-full bg-emerald-50 px-2 py-1 text-[9px] font-black text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300">
          Live
        </span>
      </div>

      <div className="grid min-h-[185px] grid-cols-[0.8fr_1.2fr] gap-3 p-3">
        <div className="space-y-2">
          {demo.stats.map(([label, value]) => (
            <div key={label} className="rounded-xl bg-white p-3 shadow-sm dark:bg-white/[0.06]">
              <p className="text-[9px] font-black uppercase text-slate-400">
                {label}
              </p>
              <p className="mt-1 text-xs font-black text-slate-950 dark:text-white">
                {value}
              </p>
            </div>
          ))}
        </div>
        <div className="rounded-xl bg-white p-3 shadow-sm dark:bg-white/[0.06]">
          <div className="h-2 w-20 rounded-full bg-blue-200 dark:bg-blue-300/20" />
          <div className="mt-4 space-y-2.5">
            {[0, 1, 2, 3].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="h-7 w-7 rounded-lg bg-blue-50 dark:bg-blue-400/10" />
                <span className="h-2 flex-1 rounded-full bg-slate-100 dark:bg-white/10" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function PricingSection({ data }: { data: IndustryPortalPageData }) {
  return (
    <section className="border-t border-slate-200 bg-gradient-to-b from-white to-slate-50/80 px-7 py-12 dark:border-white/10 dark:from-white/[0.04] dark:to-white/[0.025] sm:px-10 lg:px-12">
      <SectionTitle
        title={`Portal pricing for ${data.industryName}`}
        description={data.pricingDescription}
        center
      />

      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {data.pricingPlans.map((planItem) => (
          <PricingCard key={planItem.name} plan={planItem} />
        ))}
      </div>
    </section>
  );
}

function PricingCard({ plan }: { plan: IndustryPortalPricingPlan }) {
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
  items: IndustryPortalTestimonial[];
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

function TrustSection({ data }: { data: IndustryPortalPageData }) {
  return (
    <section className="border-t border-slate-200 px-7 py-12 dark:border-white/10 sm:px-10 lg:px-12">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <SectionEyebrow>Trust</SectionEyebrow>
          <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950 dark:text-white sm:text-4xl">
            {data.trustTitle}
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
            {data.trustDescription}
          </p>
        </div>
        <ShieldCheck className="h-10 w-10 text-emerald-500" />
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {data.trustItems.map((item) => (
          <TrustCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}

function TrustCard({ item }: { item: IndustryPortalTrustItem }) {
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

function FinalCTASection({ data }: { data: IndustryPortalPageData }) {
  return (
    <section className="border-t border-slate-200 px-7 py-10 dark:border-white/10 sm:px-10 lg:px-12">
      <div className="overflow-hidden rounded-[2rem] border border-slate-800 bg-[linear-gradient(135deg,#020617,#0f172a_48%,#1d4ed8)] p-6 text-white shadow-[0_24px_70px_rgba(15,23,42,0.20)] sm:p-8 lg:p-10">
        <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase text-blue-300">
              Portal build
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
              Start My Portal Build
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#portal-flow"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/10 px-7 py-4 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-white/15"
            >
              View Portal Flow
              <WorkflowIcon />
            </Link>
          </div>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {["Secure role-based access", "Document-controlled workspace", "Admin visibility"].map((item) => (
            <div key={item} className="rounded-2xl bg-white/10 px-4 py-3 text-sm font-black ring-1 ring-white/10">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkflowIcon() {
  return <ArrowRight className="h-4 w-4" />;
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
