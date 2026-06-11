import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  BarChart3,
  Bot,
  CheckCircle2,
  ChevronRight,
  Cloud,
  Database,
  Globe2,
  LayoutDashboard,
  LockKeyhole,
  PlayCircle,
  PlugZap,
  Smartphone,
} from "lucide-react";
import {
  BusinessSuiteHeader,
  BusinessSuiteIcon,
  BusinessSuiteSection,
  cn,
} from "./businessSuiteSectionUtils";
import {
  getIndustryBusinessSuitePage,
  type IndustryBusinessSuiteCard,
  type IndustryBusinessSuitePageData,
  type IndustryBusinessSuitePlan,
  type IndustryBusinessSuiteStartingPoint,
} from "./industryBusinessSuiteData";

export default function IndustryBusinessSuitePage({
  industrySlug,
  solutionSlug = "business-suite",
}: {
  industrySlug: string;
  solutionSlug?: string;
}) {
  const data = getIndustryBusinessSuitePage(industrySlug, solutionSlug);

  if (!data) {
    notFound();
  }

  return (
    <main className="relative overflow-hidden bg-[#f8fbff] text-slate-950 dark:bg-[#050814] dark:text-white">
      <section className="relative px-3 pb-20 pt-24 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <div className="mx-auto w-full max-w-full sm:max-w-[min(92vw,1440px)]">
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-white/[0.035]">
            <HeroSection data={data} />
            <IncludedSection data={data} />
            <StrategySection data={data} />
            <StartingPointSection data={data} />
            <SuiteFlowSection data={data} />
            <AutomationSection data={data} />
            <PackageSection data={data} />
            <IndustryExampleSection data={data} />
            <FinalCTASection data={data} />
          </div>
        </div>
      </section>
    </main>
  );
}

function HeroSection({ data }: { data: IndustryBusinessSuitePageData }) {
  const IndustryIcon = data.industryIcon;

  return (
    <section className="relative overflow-hidden px-6 py-8 sm:px-10 lg:px-12 xl:px-14">
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.042)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.042)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:linear-gradient(120deg,black,transparent_74%)] dark:bg-[linear-gradient(rgba(125,211,252,0.044)_1px,transparent_1px),linear-gradient(90deg,rgba(125,211,252,0.044)_1px,transparent_1px)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl dark:bg-blue-500/10"
        aria-hidden="true"
      />

      <div className="relative">
        <nav className="mb-6 flex flex-wrap items-center gap-3 text-sm font-semibold text-slate-500 dark:text-slate-400">
          <Link href="/industries" className="transition hover:text-blue-700 dark:hover:text-blue-300">
            Industries
          </Link>
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
          <Link
            href={`/industries/${data.slug}`}
            className="transition hover:text-blue-700 dark:hover:text-blue-300"
          >
            {data.industryName}
          </Link>
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
          <span className="text-slate-900 dark:text-white">Full Business Suite</span>
        </nav>

        <SuiteTabNav data={data} />

        <div className="mt-8 grid items-center gap-10 xl:grid-cols-[0.88fr_1.12fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-blue-700 dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-300">
              <IndustryIcon className="h-4 w-4" aria-hidden="true" />
              {data.hero.eyebrow}
            </span>

            <h1 className="mt-7 max-w-4xl text-[clamp(2.35rem,4.4vw,4.75rem)] font-black leading-[1.03] tracking-[-0.055em] text-slate-950 dark:text-white">
              {data.hero.title}
            </h1>

            <p className="mt-5 max-w-2xl text-base font-semibold leading-8 text-slate-600 dark:text-slate-300">
              {data.hero.description}
            </p>

            <p className="mt-5 max-w-2xl text-sm font-black leading-7 text-slate-700 dark:text-slate-200">
              We build your complete business operating system - from digital presence to automation, portals, CRM, dashboards, and AI agents.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {data.hero.includedSystems.map((system) => (
                <span
                  key={system}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/88 px-3 py-2 text-xs font-black text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-300"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 dark:text-blue-300" aria-hidden="true" />
                  {system}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={data.hero.primaryCtaHref}
                className="inline-flex items-center justify-center gap-3 rounded-2xl bg-slate-950 px-8 py-4 text-sm font-black text-white shadow-[0_18px_44px_rgba(15,23,42,0.18)] transition hover:-translate-y-0.5 dark:bg-white dark:text-slate-950"
              >
                {data.hero.primaryCtaLabel}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>

              {data.hero.secondaryCtaHref && data.hero.secondaryCtaLabel ? (
                <Link
                  href={data.hero.secondaryCtaHref}
                  className="inline-flex items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white/92 px-8 py-4 text-sm font-black text-blue-700 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 dark:border-white/10 dark:bg-white/[0.06] dark:text-blue-300"
                >
                  {data.hero.secondaryCtaLabel}
                  <PlayCircle className="h-4 w-4" aria-hidden="true" />
                </Link>
              ) : null}
            </div>
          </div>

          <EcosystemVisual systems={data.hero.includedSystems} />
        </div>
      </div>
    </section>
  );
}

function SuiteTabNav({ data }: { data: IndustryBusinessSuitePageData }) {
  const tabs = [
    { label: "Website", href: `/industries/${data.slug}/website` },
    { label: "Mobile App", href: `/industries/${data.slug}/mobile-app` },
    { label: "CRM", href: `/industries/${data.slug}/crm` },
    {
      label: "Portal",
      href: data.slug === "healthcare" ? "/industries/healthcare/patient-portal" : `/industries/${data.slug}/portal`,
    },
    { label: "Full Business Suite", href: data.primaryRoute, active: true },
  ];

  return (
    <div className="overflow-x-auto pb-1">
      <div className="flex min-w-max gap-2 rounded-2xl border border-slate-200 bg-white/80 p-2 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/[0.05]">
        {tabs.map((tab) => (
          <Link
            key={tab.label}
            href={tab.href}
            className={cn(
              "inline-flex items-center justify-center rounded-xl px-4 py-2 text-xs font-black transition",
              tab.active
                ? "bg-slate-950 text-white shadow-sm dark:bg-white dark:text-slate-950"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white",
            )}
          >
            {tab.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

function EcosystemVisual({ systems }: { systems: string[] }) {
  const displayed = systems.slice(0, 8);

  return (
    <div className="mx-auto w-full max-w-[760px]">
      <div className="relative rounded-[2rem] border border-slate-200 bg-white/90 p-5 shadow-[0_24px_70px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-slate-950/90 sm:p-6">
        <div className="absolute inset-6 rounded-[1.5rem] border border-dashed border-blue-200/70 dark:border-blue-300/15" aria-hidden="true" />

        <div className="relative grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {displayed.map((system, index) => {
            const Icon = getSystemIcon(system);

            return (
              <article
                key={system}
                className={cn(
                  "rounded-2xl border border-slate-200 bg-slate-50/92 p-4 shadow-sm dark:border-white/10 dark:bg-white/[0.045]",
                  index === 0 && "lg:col-span-2",
                  index === 5 && "lg:col-span-2",
                )}
              >
                <div className="flex items-center gap-3">
                  <BusinessSuiteIcon icon={Icon} tone={index % 3 === 0 ? "blue" : index % 3 === 1 ? "violet" : "cyan"} />
                  <div className="min-w-0">
                    <p className="text-sm font-black text-slate-950 dark:text-white">
                      {system}
                    </p>
                    <p className="mt-1 text-xs font-semibold text-slate-500 dark:text-slate-400">
                      Connected layer
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="relative mt-4 rounded-2xl border border-blue-100 bg-blue-50/70 p-4 dark:border-blue-300/15 dark:bg-blue-400/10">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-black text-slate-950 dark:text-white">
                One connected operating system
              </p>
              <p className="mt-1 text-xs font-semibold leading-5 text-slate-600 dark:text-slate-300">
                Presence, operations, customer access, automation, dashboards, and cloud support work together.
              </p>
            </div>
            <span className="inline-flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-xs font-black text-blue-700 shadow-sm dark:bg-white/10 dark:text-blue-200">
              <PlugZap className="h-3.5 w-3.5" aria-hidden="true" />
              Integrated
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function IncludedSection({ data }: { data: IndustryBusinessSuitePageData }) {
  return (
    <BusinessSuiteSection className="bg-slate-50/70 dark:bg-white/[0.025]">
      <BusinessSuiteHeader
        eyebrow="What's Included"
        title={data.included.title}
        description={data.included.description}
      />
      <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {data.included.items.map((item, index) => (
          <CompactCard key={item.title} item={item} tone={getTone(index)} />
        ))}
      </div>
    </BusinessSuiteSection>
  );
}

function StrategySection({ data }: { data: IndustryBusinessSuitePageData }) {
  return (
    <BusinessSuiteSection>
      <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <BusinessSuiteHeader
          eyebrow="Business First"
          title={data.strategy.title}
          description={data.strategy.description}
        />
        <div className="grid gap-3">
          {data.strategy.steps.map((step, index) => (
            <NumberedStep key={step.title} step={step} index={index} />
          ))}
        </div>
      </div>
    </BusinessSuiteSection>
  );
}

function StartingPointSection({ data }: { data: IndustryBusinessSuitePageData }) {
  return (
    <BusinessSuiteSection className="bg-slate-50/70 dark:bg-white/[0.025]">
      <BusinessSuiteHeader
        eyebrow="Starting Point"
        title={data.startingPoints.title}
        description={data.startingPoints.description}
        center
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {data.startingPoints.cards.map((card, index) => (
          <StartingPointCard key={card.title} card={card} tone={getTone(index)} />
        ))}
      </div>
    </BusinessSuiteSection>
  );
}

function SuiteFlowSection({ data }: { data: IndustryBusinessSuitePageData }) {
  return (
    <BusinessSuiteSection>
      <BusinessSuiteHeader
        eyebrow="Connected Flow"
        title={data.suiteFlow.title}
        description={data.suiteFlow.description}
      />
      <div className="mt-7 grid gap-3 md:grid-cols-2 xl:grid-cols-7">
        {data.suiteFlow.steps.map((step, index) => (
          <FlowStep key={step.title} step={step} index={index} isLast={index === data.suiteFlow.steps.length - 1} />
        ))}
      </div>
    </BusinessSuiteSection>
  );
}

function AutomationSection({ data }: { data: IndustryBusinessSuitePageData }) {
  return (
    <BusinessSuiteSection className="bg-slate-50/70 dark:bg-white/[0.025]">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <BusinessSuiteHeader
          eyebrow="AI + Automation Layer"
          title={data.automation.title}
          description={data.automation.description}
        />
        <div className="grid gap-3 sm:grid-cols-2">
          {data.automation.items.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/[0.05]"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-violet-50 text-violet-600 dark:bg-violet-400/10 dark:text-violet-300">
                <Bot className="h-4 w-4" aria-hidden="true" />
              </span>
              <p className="text-sm font-black text-slate-800 dark:text-slate-200">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </BusinessSuiteSection>
  );
}

function PackageSection({ data }: { data: IndustryBusinessSuitePageData }) {
  return (
    <BusinessSuiteSection>
      <BusinessSuiteHeader
        eyebrow="Package Levels"
        title={data.packages.title}
        description={data.packages.description}
        center
      />
      <div className="mt-7 grid gap-4 lg:grid-cols-3">
        {data.packages.plans.map((plan) => (
          <PackageCard key={plan.name} plan={plan} />
        ))}
      </div>
    </BusinessSuiteSection>
  );
}

function IndustryExampleSection({ data }: { data: IndustryBusinessSuitePageData }) {
  return (
    <BusinessSuiteSection className="bg-slate-50/70 dark:bg-white/[0.025]">
      <div className="grid gap-7 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.04] lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:p-8">
        <BusinessSuiteHeader
          eyebrow={`${data.industryName} Example`}
          title={data.industryExample.title}
          description={data.industryExample.description}
        />
        <div className="grid gap-3 sm:grid-cols-2">
          {data.industryExample.stack.map((item, index) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-white/10 dark:bg-white/[0.05]"
            >
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-blue-50 text-xs font-black text-blue-700 dark:bg-blue-400/10 dark:text-blue-300">
                {index + 1}
              </span>
              <p className="text-sm font-black text-slate-800 dark:text-slate-200">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </BusinessSuiteSection>
  );
}

function FinalCTASection({ data }: { data: IndustryBusinessSuitePageData }) {
  return (
    <BusinessSuiteSection>
      <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-[0_22px_64px_rgba(15,23,42,0.18)] dark:border-white/10 sm:p-8 lg:p-10">
        <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-300">
              Full Business Suite
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-black leading-tight sm:text-4xl">
              {data.finalCta.title}
            </h2>
            <p className="mt-4 max-w-3xl text-sm font-semibold leading-7 text-slate-300">
              {data.finalCta.description}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link
              href={data.finalCta.primaryHref}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-7 py-4 text-sm font-black text-slate-950 shadow-sm transition hover:-translate-y-0.5"
            >
              {data.finalCta.primaryLabel}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            {data.finalCta.secondaryHref && data.finalCta.secondaryLabel ? (
              <Link
                href={data.finalCta.secondaryHref}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-7 py-4 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-white/15"
              >
                {data.finalCta.secondaryLabel}
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </BusinessSuiteSection>
  );
}

function CompactCard({
  item,
  tone,
}: {
  item: IndustryBusinessSuiteCard;
  tone: "blue" | "violet" | "emerald" | "cyan" | "slate";
}) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/[0.05]">
      <BusinessSuiteIcon icon={item.icon} tone={tone} />
      <h3 className="mt-4 text-sm font-black leading-5 text-slate-950 dark:text-white">
        {item.title}
      </h3>
      <p className="mt-2 text-sm font-semibold leading-6 text-slate-600 dark:text-slate-300">
        {item.description}
      </p>
    </article>
  );
}

function NumberedStep({ step, index }: { step: IndustryBusinessSuiteCard; index: number }) {
  return (
    <article className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/[0.05]">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-slate-950 text-sm font-black text-white dark:bg-white dark:text-slate-950">
        {index + 1}
      </span>
      <div>
        <h3 className="text-sm font-black text-slate-950 dark:text-white">
          {step.title}
        </h3>
        <p className="mt-1 text-sm font-semibold leading-6 text-slate-600 dark:text-slate-300">
          {step.description}
        </p>
      </div>
    </article>
  );
}

function StartingPointCard({
  card,
  tone,
}: {
  card: IndustryBusinessSuiteStartingPoint;
  tone: "blue" | "violet" | "emerald" | "cyan" | "slate";
}) {
  return (
    <article className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.05]">
      <BusinessSuiteIcon icon={card.icon} tone={tone} />
      <h3 className="mt-4 text-base font-black text-slate-950 dark:text-white">
        {card.title}
      </h3>
      <p className="mt-2 text-sm font-semibold leading-6 text-slate-600 dark:text-slate-300">
        {card.description}
      </p>
      <div className="mt-4 rounded-2xl border border-blue-100 bg-blue-50 p-3 dark:border-blue-300/15 dark:bg-blue-400/10">
        <p className="text-xs font-black uppercase tracking-[0.14em] text-blue-700 dark:text-blue-300">
          Outcome
        </p>
        <p className="mt-1 text-sm font-black leading-6 text-slate-800 dark:text-slate-100">
          {card.outcome}
        </p>
      </div>
    </article>
  );
}

function FlowStep({
  step,
  index,
  isLast,
}: {
  step: IndustryBusinessSuiteCard;
  index: number;
  isLast: boolean;
}) {
  const Icon = step.icon;

  return (
    <article className="relative rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/[0.05]">
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-50 text-blue-700 dark:bg-blue-400/10 dark:text-blue-300">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <span className="grid h-7 w-7 place-items-center rounded-full border border-slate-200 bg-slate-50 text-xs font-black text-slate-600 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-300">
          {index + 1}
        </span>
      </div>
      <h3 className="mt-4 text-sm font-black text-slate-950 dark:text-white">
        {step.title}
      </h3>
      <p className="mt-2 text-xs font-semibold leading-5 text-slate-600 dark:text-slate-300">
        {step.description}
      </p>
      {!isLast ? (
        <ArrowRight className="absolute -right-3 top-1/2 hidden h-5 w-5 text-slate-300 xl:block" aria-hidden="true" />
      ) : null}
    </article>
  );
}

function PackageCard({ plan }: { plan: IndustryBusinessSuitePlan }) {
  return (
    <article
      className={cn(
        "relative rounded-[1.6rem] border p-5 shadow-sm dark:bg-white/[0.05]",
        plan.featured
          ? "border-blue-200 bg-gradient-to-br from-blue-50 via-white to-violet-50 shadow-[0_18px_54px_rgba(37,99,235,0.10)] dark:border-blue-300/20 dark:from-blue-400/10 dark:via-white/[0.05] dark:to-violet-400/10"
          : "border-slate-200 bg-white dark:border-white/10",
      )}
    >
      {plan.featured ? (
        <span className="absolute right-5 top-5 rounded-full bg-slate-950 px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-white dark:bg-white dark:text-slate-950">
          Most flexible
        </span>
      ) : null}
      <h3 className="pr-28 text-xl font-black text-slate-950 dark:text-white">
        {plan.name}
      </h3>
      <p className="mt-2 text-sm font-semibold leading-6 text-slate-600 dark:text-slate-300">
        {plan.description}
      </p>
      <p className="mt-5 rounded-2xl bg-slate-50 p-3 text-sm font-black text-slate-800 dark:bg-white/[0.06] dark:text-slate-200">
        Best for: {plan.bestFor}
      </p>
      <ul className="mt-5 space-y-2">
        {plan.includes.map((item) => (
          <li key={item} className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
            <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-600 dark:text-blue-300" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
      <p className="mt-5 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-black text-slate-700 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-200">
        Custom quote based on your business needs.
      </p>
    </article>
  );
}

function getSystemIcon(system: string) {
  if (system === "Website") return Globe2;
  if (system === "Mobile App") return Smartphone;
  if (system === "CRM") return Database;
  if (system === "Portal") return LockKeyhole;
  if (system === "Dashboards") return LayoutDashboard;
  if (system === "AI Automation") return Bot;
  if (system === "Integrations") return PlugZap;
  if (system === "Cloud") return Cloud;
  return BarChart3;
}

function getTone(index: number): "blue" | "violet" | "emerald" | "cyan" | "slate" {
  const tones: Array<"blue" | "violet" | "emerald" | "cyan" | "slate"> = [
    "blue",
    "violet",
    "emerald",
    "cyan",
    "slate",
  ];

  return tones[index % tones.length];
}
