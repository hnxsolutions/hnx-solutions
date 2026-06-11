import type { ReactNode } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Bell,
  CheckCircle2,
  ChevronRight,
  CreditCard,
  Download,
  LockKeyhole,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  TicketCheck,
  Upload,
  UserRound,
} from "lucide-react";
import IndustryAiAutomationSection from "../common/IndustryAiAutomationSection";
import IndustryIntegrationsDeploymentSection from "../common/IndustryIntegrationsDeploymentSection";
import {
  getIndustryPortalPage,
  type IndustryPortalCard,
  type IndustryPortalHeroPreviewCard,
  type IndustryPortalModule,
  type IndustryPortalPageData,
  type IndustryPortalRoleExperience,
} from "./industryPortalData";
import { PortalFloat, PortalProgressLine, PortalReveal } from "./PortalMotion";

const portalPreviewIcons = [UserRound, Upload, Download, TicketCheck, CreditCard, Bell] as const;
const roleExperienceIcons = [UserRound, ShieldCheck, MessageCircle] as const;

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
      <section className="relative px-3 pb-20 pt-20 sm:px-6 lg:px-8 lg:pt-24 xl:px-10 2xl:px-12">
        <div className="mx-auto w-full max-w-full sm:max-w-[min(92vw,1440px)]">
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-white/[0.035]">
            <PortalHeroSection data={data} />
            <PortalProblemsSection data={data} />
            <PortalAccessJourneySection data={data} />
            <PortalRoleExperiencesSection data={data} />
            <PortalModulesSection data={data} />
            <PortalSecuritySection data={data} />
            <section className="border-t border-slate-200 px-5 py-4 dark:border-white/10 sm:px-8 lg:px-10 xl:px-12">
              <IndustryAiAutomationSection {...data.aiAutomation} />
              <IndustryIntegrationsDeploymentSection {...data.integrationsDeployment} />
            </section>
            <FinalCTASection data={data} />
          </div>
        </div>
      </section>
    </main>
  );
}

function PortalHeroSection({ data }: { data: IndustryPortalPageData }) {
  const hero = data.portalHero;

  return (
    <section className="relative overflow-hidden px-6 py-7 sm:px-10 lg:px-12 lg:py-10 xl:px-14">
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.04)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:linear-gradient(120deg,black,transparent_72%)] dark:bg-[linear-gradient(rgba(125,211,252,0.044)_1px,transparent_1px),linear-gradient(90deg,rgba(125,211,252,0.044)_1px,transparent_1px)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-16 top-10 h-80 w-80 rounded-full bg-blue-100/55 blur-3xl dark:bg-blue-500/10"
        aria-hidden="true"
      />

      <div className="relative">
        <nav className="mb-5 flex flex-wrap items-center gap-3 text-sm font-semibold text-slate-500 dark:text-slate-400">
          <Link href="/industries" className="transition hover:text-blue-700 dark:hover:text-blue-300">
            Industries
          </Link>
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
          <Link
            href={`/industries/${data.industrySlug}`}
            className="transition hover:text-blue-700 dark:hover:text-blue-300"
          >
            {data.industryName}
          </Link>
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
          <span className="text-slate-900 dark:text-white">{data.eyebrow}</span>
        </nav>

        <div className="grid items-center gap-8 xl:grid-cols-[0.9fr_1.1fr]">
          <PortalReveal>
            <div>
              <Badge>
                <LockKeyhole className="h-4 w-4" aria-hidden="true" />
                {hero.eyebrow}
              </Badge>

              <h1 className="mt-6 max-w-4xl text-[clamp(2.25rem,4.1vw,4.35rem)] font-black leading-[1.03] tracking-[-0.052em] text-slate-950 dark:text-white">
                {hero.title}
              </h1>

              <p className="mt-5 max-w-2xl text-base font-semibold leading-8 text-slate-600 dark:text-slate-300">
                {hero.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {hero.trustChips.map((chip) => (
                  <span
                    key={chip}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/88 px-3 py-2 text-xs font-black text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-300"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 dark:text-blue-300" aria-hidden="true" />
                    {chip}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={hero.primaryCtaHref}
                  className="inline-flex items-center justify-center gap-3 rounded-2xl bg-slate-950 px-8 py-4 text-sm font-black text-white shadow-[0_18px_44px_rgba(15,23,42,0.18)] transition hover:-translate-y-0.5 dark:bg-white dark:text-slate-950"
                >
                  {hero.primaryCtaLabel}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>

                {hero.secondaryCtaHref && hero.secondaryCtaLabel ? (
                  <Link
                    href={hero.secondaryCtaHref}
                    className="inline-flex items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white/92 px-8 py-4 text-sm font-black text-blue-700 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 dark:border-white/10 dark:bg-white/[0.06] dark:text-blue-300"
                  >
                    {hero.secondaryCtaLabel}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                ) : null}
              </div>
            </div>
          </PortalReveal>

          <PortalAccessExperience data={data} />
        </div>
      </div>
    </section>
  );
}

function PortalAccessExperience({ data }: { data: IndustryPortalPageData }) {
  const cards = data.portalHero.previewCards.slice(0, 6);
  const timeline = data.portalJourney.steps.slice(0, 4);

  return (
    <PortalReveal delay={0.08} y={18}>
      <div className="mx-auto w-full max-w-[720px]">
        <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 p-3 shadow-[0_24px_70px_rgba(15,23,42,0.15)] dark:border-white/10">
          <div className="rounded-[1.5rem] bg-white p-4 dark:bg-slate-950">
            <div className="flex flex-col gap-3 border-b border-slate-100 pb-3 dark:border-white/10 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-400/10 dark:text-blue-300">
                  <LockKeyhole className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-black text-slate-950 dark:text-white">
                    Portal Access Experience
                  </p>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    Secure login, account status, files, requests, payments, and updates
                  </p>
                </div>
              </div>
              <span className="w-fit rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-xs font-black text-emerald-700 dark:border-emerald-300/20 dark:bg-emerald-400/10 dark:text-emerald-200">
                Login protected
              </span>
            </div>

            <div className="grid gap-4 py-4 lg:grid-cols-[0.72fr_1.28fr]">
              <PortalFloat className="min-w-0" delay={0.08}>
                <div className="h-full rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/[0.04]">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                    My account
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-blue-600 shadow-sm dark:bg-white/10 dark:text-blue-300">
                      <UserRound className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-black text-slate-950 dark:text-white">
                        {data.eyebrow} User
                      </p>
                      <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                        Verified access
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 space-y-2">
                    {data.portalHero.trustChips.slice(0, 3).map((chip) => (
                      <div key={chip} className="flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-xs font-black text-slate-700 shadow-sm dark:bg-white/[0.06] dark:text-slate-300">
                        <ShieldCheck className="h-3.5 w-3.5 text-blue-600 dark:text-blue-300" aria-hidden="true" />
                        {chip}
                      </div>
                    ))}
                  </div>
                </div>
              </PortalFloat>

              <div className="grid gap-3 sm:grid-cols-2">
                {cards.map((card, index) => (
                  <PortalPreviewCard key={card.title} card={card} index={index} />
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-blue-50/70 p-4 dark:border-blue-300/15 dark:bg-blue-400/10">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-black text-slate-950 dark:text-white">
                    Latest update
                  </p>
                  <p className="mt-1 text-xs font-semibold leading-5 text-slate-600 dark:text-slate-300">
                    {cards[1]?.description ?? "A new portal update is ready for the user."}
                  </p>
                </div>
                <Bell className="h-5 w-5 shrink-0 text-blue-600 dark:text-blue-300" aria-hidden="true" />
              </div>
            </div>

            <div className="mt-4 hidden rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-white/[0.04] sm:block">
              <div className="relative grid grid-cols-4 gap-3">
                <span className="absolute left-6 right-6 top-5 h-px bg-slate-200 dark:bg-white/10" aria-hidden="true" />
                <PortalProgressLine className="absolute left-6 right-6 top-5 h-px bg-blue-500" />
                {timeline.map((step, index) => (
                  <div key={step.title} className="relative text-center">
                    <span className="mx-auto grid h-10 w-10 place-items-center rounded-full bg-white text-xs font-black text-blue-700 ring-1 ring-blue-200 dark:bg-slate-950 dark:text-blue-300 dark:ring-blue-300/20">
                      {index + 1}
                    </span>
                    <p className="mt-2 truncate text-[11px] font-black text-slate-700 dark:text-slate-300">
                      {step.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PortalReveal>
  );
}

function PortalPreviewCard({
  card,
  index,
}: {
  card: IndustryPortalHeroPreviewCard;
  index: number;
}) {
  const Icon = portalPreviewIcons[index % portalPreviewIcons.length];

  return (
    <PortalFloat delay={0.04 * index}>
      {/*
        Updated preview card to use a subtle gradient background and deeper shadow.
        The rounded corners are slightly larger for a more modern look.
      */}
      <article className="rounded-3xl border border-transparent bg-gradient-to-br from-white via-blue-50 to-white p-5 shadow-[0_8px_24px_rgba(15,23,42,0.06)] dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="flex items-center justify-between gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-slate-50 text-blue-600 dark:bg-white/[0.07] dark:text-blue-300">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-black uppercase text-slate-500 dark:bg-white/[0.08] dark:text-slate-300">
            {card.value}
          </span>
        </div>
        <h3 className="mt-4 text-sm font-black text-slate-950 dark:text-white">
          {card.title}
        </h3>
        <p className="mt-2 text-xs font-semibold leading-5 text-slate-500 dark:text-slate-400">
          {card.description}
        </p>
      </article>
    </PortalFloat>
  );
}

function PortalProblemsSection({ data }: { data: IndustryPortalPageData }) {
  return (
    <section className="border-t border-slate-200 px-6 py-10 dark:border-white/10 sm:px-10 lg:px-12">
      <SectionHeader
        eyebrow="Portal Problems / Why It Matters"
        title={data.problemsTitle}
        description="Without a secure self-service portal, users keep asking for status, documents, payments, support, and updates through scattered calls and messages."
      />

      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        {data.problems.slice(0, 4).map((item, index) => (
          <PortalReveal key={item.title} delay={index * 0.04}>
            <ProblemCard item={item} />
          </PortalReveal>
        ))}
      </div>
    </section>
  );
}

function ProblemCard({ item }: { item: IndustryPortalCard }) {
  const Icon = item.icon;

  return (
    <article className="h-full rounded-3xl border border-transparent bg-gradient-to-br from-slate-50 via-white to-slate-50 p-5 shadow-[0_4px_16px_rgba(15,23,42,0.05)] dark:from-slate-800 dark:via-slate-900 dark:to-slate-800">
      <div className="flex items-start gap-4">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white text-slate-600 shadow-sm dark:bg-white/10 dark:text-slate-300">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <div>
          <h3 className="text-base font-black text-slate-950 dark:text-white">{item.title}</h3>
          <p className="mt-2 text-sm font-semibold leading-6 text-slate-600 dark:text-slate-300">
            {item.description}
          </p>
        </div>
      </div>
    </article>
  );
}

function PortalAccessJourneySection({ data }: { data: IndustryPortalPageData }) {
  const steps = data.portalJourney.steps;

  return (
    <section id="portal-journey" className="border-t border-slate-200 bg-slate-50/65 px-6 py-10 dark:border-white/10 dark:bg-white/[0.025] sm:px-10 lg:px-12">
      <SectionHeader
        eyebrow="Portal Access Journey"
        title={data.portalJourney.title}
        description={data.portalJourney.description}
      />

      <div className="relative mt-8">
        <div className="absolute left-6 right-6 top-[1.38rem] hidden h-px bg-slate-200 dark:bg-white/10 xl:block" aria-hidden="true" />
        <PortalProgressLine className="absolute left-6 right-6 top-[1.38rem] hidden h-px bg-blue-500 xl:block" />

        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-7">
          {steps.map((step, index) => (
            <PortalReveal key={step.title} delay={index * 0.035}>
              <article className="relative h-full rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/[0.05]">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-slate-950 text-sm font-black text-white dark:bg-white dark:text-slate-950">
                  {index + 1}
                </span>
                <h3 className="mt-4 text-sm font-black text-slate-950 dark:text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs font-semibold leading-5 text-slate-600 dark:text-slate-300">
                  {step.description}
                </p>
              </article>
            </PortalReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PortalRoleExperiencesSection({ data }: { data: IndustryPortalPageData }) {
  return (
    <section className="border-t border-slate-200 px-6 py-10 dark:border-white/10 sm:px-10 lg:px-12">
      <SectionHeader
        eyebrow="Role-Based Portal Experiences"
        title={data.roleExperiences.title}
        description={data.roleExperiences.description}
      />

      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {data.roleExperiences.roles.map((role, index) => (
          <PortalReveal key={role.role} delay={index * 0.05}>
            <RoleExperienceCard role={role} index={index} />
          </PortalReveal>
        ))}
      </div>
    </section>
  );
}

function RoleExperienceCard({
  role,
  index,
}: {
  role: IndustryPortalRoleExperience;
  index: number;
}) {
  const Icon = roleExperienceIcons[index % roleExperienceIcons.length];

  return (
    <article className="h-full rounded-[1.5rem] border border-transparent bg-gradient-to-br from-white via-slate-50 to-white p-5 shadow-[0_4px_16px_rgba(15,23,42,0.05)] dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-400/10 dark:text-blue-300">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>
      <p className="mt-5 text-xs font-black uppercase tracking-[0.16em] text-blue-700 dark:text-blue-300">
        {role.role}
      </p>
      <h3 className="mt-2 text-lg font-black text-slate-950 dark:text-white">
        {role.title}
      </h3>
      <p className="mt-2 text-sm font-semibold leading-6 text-slate-600 dark:text-slate-300">
        {role.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {role.features.map((feature) => (
          <span
            key={feature}
            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-black text-slate-600 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-300"
          >
            {feature}
          </span>
        ))}
      </div>
    </article>
  );
}

function PortalModulesSection({ data }: { data: IndustryPortalPageData }) {
  const features = data.modules.slice(0, 10);

  return (
    <section className="border-t border-slate-200 bg-[linear-gradient(180deg,#ffffff,#f8fbff)] px-6 py-10 dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.025))] sm:px-10 lg:px-12">
      <SectionHeader
        eyebrow="Portal Modules"
        title={data.modulesTitle}
        description={data.modulesDescription}
      />

      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {features.map((module, index) => (
          <PortalReveal key={module.title} delay={index * 0.025}>
            <PortalFeatureCard module={module} />
          </PortalReveal>
        ))}
      </div>
    </section>
  );
}

function PortalFeatureCard({ module }: { module: IndustryPortalModule }) {
  const Icon = module.icon;

  return (
    <article className="h-full rounded-3xl border border-transparent bg-gradient-to-br from-white via-slate-50 to-white p-5 shadow-[0_4px_16px_rgba(15,23,42,0.05)] dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <span className="grid h-11 w-11 place-items-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-400/10 dark:text-blue-300">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <h3 className="mt-4 text-base font-black leading-6 text-slate-950 dark:text-white">
        {module.title}
      </h3>
      <p className="mt-2 text-sm font-semibold leading-6 text-slate-600 dark:text-slate-300">
        {module.description}
      </p>
      <div className="mt-4 space-y-2">
        {module.points.slice(0, 2).map((point) => (
          <div key={point} className="flex items-center gap-2 text-xs font-black text-slate-500 dark:text-slate-300">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" aria-hidden="true" />
            {point}
          </div>
        ))}
      </div>
    </article>
  );
}

function PortalSecuritySection({ data }: { data: IndustryPortalPageData }) {
  return (
    <section className="border-t border-slate-200 px-6 py-10 dark:border-white/10 sm:px-10 lg:px-12">
      <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <SectionHeader
          eyebrow="Security & Permissions"
          title={data.securityTitle}
          description={data.securityDescription}
        />
        <div className="grid gap-3 sm:grid-cols-2">
          {data.securityItems.slice(0, 4).map((item, index) => (
            <PortalReveal key={item.title} delay={index * 0.04}>
              <SecurityCard item={item} />
            </PortalReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function SecurityCard({ item }: { item: IndustryPortalCard }) {
  const Icon = item.icon;

  return (
    <article className="rounded-3xl border border-transparent bg-gradient-to-br from-slate-50 via-white to-slate-50 p-5 shadow-[0_4px_16px_rgba(15,23,42,0.05)] dark:from-slate-800 dark:via-slate-900 dark:to-slate-800">
      <Icon className="h-6 w-6 text-blue-600 dark:text-blue-300" aria-hidden="true" />
      <h3 className="mt-4 text-sm font-black text-slate-950 dark:text-white">
        {item.title}
      </h3>
      <p className="mt-2 text-sm font-semibold leading-6 text-slate-600 dark:text-slate-300">
        {item.description}
      </p>
    </article>
  );
}

function FinalCTASection({ data }: { data: IndustryPortalPageData }) {
  return (
    <section className="border-t border-slate-200 px-6 py-12 dark:border-white/10 sm:px-10 lg:px-14">
      <div className="overflow-hidden rounded-[2.5rem] border border-transparent bg-gradient-to-tr from-slate-900 via-blue-950 to-indigo-900 p-8 text-white shadow-[0_30px_80px_rgba(15,23,42,0.3)] sm:p-10 lg:p-12">
        <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-300">
              Secure portal build
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-black leading-tight sm:text-4xl">
              {data.ctaTitle}
            </h2>
            <p className="mt-4 max-w-3xl text-sm font-semibold leading-7 text-slate-300">
              {data.ctaDescription}
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4 text-sm font-black text-slate-950 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            Start My Portal Build
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            "Secure login access", "Self-service user workspace", "Reduced manual support",
          ].map((item) => (
            <div key={item} className="rounded-2xl bg-white/10 px-5 py-3 text-sm font-black ring-1 ring-white/10">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <PortalReveal>
      <div className="max-w-3xl">
        <SectionEyebrow>{eyebrow}</SectionEyebrow>
        <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.03em] text-slate-950 dark:text-white sm:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-3 text-sm font-semibold leading-7 text-slate-600 dark:text-slate-300">
            {description}
          </p>
        ) : null}
      </div>
    </PortalReveal>
  );
}

function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.16em] text-blue-700 dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-300">
      <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
      {children}
    </span>
  );
}

function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-blue-700 dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-300">
      {children}
    </span>
  );
}
