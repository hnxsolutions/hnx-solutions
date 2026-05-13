"use client";

import { useCallback, useMemo, useState } from "react";
import type { LucideIcon } from "lucide-react";
import type { SolutionCard, SolutionCategoryId, SolutionIconName, SolutionPageData } from "@/data/solutions/types";
import { SolutionSidebar, type SolutionSidebarItem } from "@/components/solutions/SolutionSidebar";
import { SolutionCategoryTabs } from "@/components/solutions/shared/SolutionCategoryTabs";
import { SolutionHero } from "@/components/solutions/shared/SolutionHero";
import { SolutionStatsGrid } from "@/components/solutions/shared/SolutionStatsGrid";
import { SolutionFlow } from "@/components/solutions/shared/SolutionFlow";
import { SolutionModules } from "@/components/solutions/shared/SolutionModules";
import { SolutionPreview } from "@/components/solutions/shared/SolutionPreview";
import { SolutionCTA } from "@/components/solutions/shared/SolutionCTA";
import { SolutionOverview } from "@/components/solutions/shared/SolutionOverview";
import { SolutionProblems } from "@/components/solutions/shared/SolutionProblems";
import { SolutionImpact } from "@/components/solutions/shared/SolutionImpact";
import { getSolutionIcon } from "@/components/solutions/shared/solutionIcons";
import { solutionCategoryMeta } from "@/components/solutions/shared/solutionCategoryMeta";

type SectionId =
  | "overview"
  | "problems"
  | "solution-flow"
  | "key-modules"
  | "preview"
  | "business-impact"
  | "use-cases"
  | "process"
  | "final-cta";

const sectionItems: Array<SolutionSidebarItem<SectionId> & { iconName: SolutionIconName }> = [
  { id: "overview", label: "Overview", iconName: "LayoutDashboard", icon: getSolutionIcon("LayoutDashboard") },
  { id: "problems", label: "Business Problems", iconName: "SearchCheck", icon: getSolutionIcon("SearchCheck") },
  { id: "solution-flow", label: "Solution Flow", iconName: "Workflow", icon: getSolutionIcon("Workflow") },
  { id: "key-modules", label: "Key Modules", iconName: "Boxes", icon: getSolutionIcon("Boxes") },
  { id: "preview", label: "Dashboard Preview", iconName: "Activity", icon: getSolutionIcon("Activity") },
  { id: "business-impact", label: "Business Impact", iconName: "BarChart3", icon: getSolutionIcon("BarChart3") },
  { id: "use-cases", label: "Use Cases", iconName: "Users", icon: getSolutionIcon("Users") },
  { id: "process", label: "Implementation Process", iconName: "CheckCircle2", icon: getSolutionIcon("CheckCircle2") },
  { id: "final-cta", label: "Final CTA", iconName: "Sparkles", icon: getSolutionIcon("Sparkles") },
];

type SolutionPageShellProps = {
  category: SolutionCategoryId;
  activeSlug: string;
  solutions: readonly SolutionPageData[];
};

function SectionHeader({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <div className="mb-7 max-w-3xl">
      <p className="text-xs font-black uppercase tracking-[0.22em] text-[#145cb7] dark:text-cyan-300">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-black tracking-[-0.035em] text-[#0f214f] dark:text-white sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base font-semibold leading-8 text-[#66728f] dark:text-slate-300">{text}</p>
    </div>
  );
}

const categoryLanguage: Record<
  SolutionCategoryId,
  {
    platform: string;
    input: string;
    conversion: string;
    operations: string;
    audience: string;
    system: string;
  }
> = {
  "web-saas": {
    platform: "digital platform",
    input: "traffic, inquiries, content, users, and payments",
    conversion: "visitor trust, lead capture, monetization, and sales handoff",
    operations: "website, SaaS, portal, campaign, and admin workflows",
    audience: "founders, marketing teams, sales teams, and operations leaders",
    system: "web and SaaS growth system",
  },
  "mobile-apps": {
    platform: "mobile operating layer",
    input: "app users, bookings, orders, notifications, and support actions",
    conversion: "customer engagement, repeat usage, payments, and retention",
    operations: "mobile, API, admin, notification, and store-launch workflows",
    audience: "businesses that need customer, staff, booking, order, or service workflows on mobile",
    system: "mobile app operating system",
  },
  "ai-automation": {
    platform: "automation operating layer",
    input: "manual tasks, messages, documents, CRM records, and triggers",
    conversion: "faster response, smarter prioritization, fewer missed actions, and clearer decisions",
    operations: "AI, workflow, communication, reporting, and human handoff paths",
    audience: "teams buried in repetitive work, support queues, lead follow-ups, documents, and manual reporting",
    system: "AI automation system",
  },
  "cloud-devops": {
    platform: "production operations layer",
    input: "deployments, servers, databases, logs, backups, and incidents",
    conversion: "uptime, performance, recovery confidence, and release safety",
    operations: "cloud, deployment, monitoring, backup, and support routines",
    audience: "teams running live websites, SaaS products, APIs, portals, CRMs, and business-critical apps",
    system: "cloud operations system",
  },
  "design-growth": {
    platform: "growth experience system",
    input: "brand messages, page traffic, campaigns, SEO signals, and analytics events",
    conversion: "clearer positioning, stronger conversion paths, measurable campaigns, and better decisions",
    operations: "design, landing page, SEO, analytics, and campaign optimization loops",
    audience: "businesses that need stronger brand clarity, conversion paths, campaign measurement, and growth visibility",
    system: "design and growth system",
  },
};

const cardKey = (item: SolutionCard) => `${item.title}:${item.text}`;

function uniqueCards(items: readonly SolutionCard[]) {
  const seen = new Set<string>();
  return items.filter((item) => {
    const key = cardKey(item);
    if (seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  });
}

function buildJourneyFlow(solution: SolutionPageData, category: SolutionCategoryId): SolutionCard[] {
  const label = solution.label.toLowerCase();

  if (category === "web-saas") {
    return [
      { title: "Plan", text: `Map the audience, offer, content, conversion path, and business role of the ${label} before design begins.`, icon: "SearchCheck" },
      { title: "Build", text: `Create the pages, product screens, portal views, forms, and admin controls that make the system usable.`, icon: "Code2" },
      { title: "Capture", text: `Connect forms, CTAs, events, source tracking, payments, or account actions so demand becomes structured data.`, icon: "Send" },
      { title: "Manage", text: `Give teams a dashboard for records, ownership, status, requests, content, and exceptions.`, icon: "LayoutDashboard" },
      { title: "Monetize", text: `Measure leads, sales handoff, subscriptions, bookings, revenue signals, and growth opportunities.`, icon: "CreditCard" },
    ];
  }

  if (category === "mobile-apps") {
    return [
      { title: "Plan", text: `Define the mobile journey, roles, launch scope, backend needs, and customer actions for the ${label}.`, icon: "Rocket" },
      { title: "Build", text: `Design and develop polished app screens, navigation, states, authentication, and core workflows.`, icon: "Smartphone" },
      { title: "Connect", text: `Link APIs, admin dashboards, payments, maps, notifications, files, and business records.`, icon: "Network" },
      { title: "Engage", text: `Use push notifications, reminders, analytics, and lifecycle messages to keep users moving.`, icon: "Bell" },
      { title: "Launch", text: `Prepare testing, release assets, store submission, rollout checks, and post-launch optimization.`, icon: "Store" },
    ];
  }

  if (category === "ai-automation") {
    return [
      { title: "Audit", text: `Identify the manual tasks, decisions, documents, conversations, and reporting gaps the ${label} should improve.`, icon: "SearchCheck" },
      { title: "Automate", text: `Create AI logic, workflow triggers, scoring rules, agent actions, and fallback paths around real business rules.`, icon: "Bot" },
      { title: "Communicate", text: `Connect replies, WhatsApp, email, CRM notes, approvals, and human handoffs so work keeps moving.`, icon: "MessageCircle" },
      { title: "Analyze", text: `Track saved time, quality, escalations, conversion, usage, and recommendations in a business dashboard.`, icon: "BarChart3" },
    ];
  }

  if (category === "cloud-devops") {
    return [
      { title: "Plan", text: `Map hosting, servers, databases, storage, environments, security, monitoring, backups, and cost controls.`, icon: "Cloud" },
      { title: "Deploy", text: `Set up infrastructure, CI/CD, domains, SSL, environment variables, runtime services, and release routines.`, icon: "Rocket" },
      { title: "Monitor", text: `Track uptime, logs, errors, performance, deployments, jobs, backup health, and incident signals.`, icon: "Activity" },
      { title: "Recover", text: `Prepare rollback, restore, access, documentation, and support routines before production issues become urgent.`, icon: "ShieldCheck" },
    ];
  }

  return [
    { title: "Position", text: `Clarify the audience, promise, offer, proof, journey, and measurable goal for the ${label}.`, icon: "Sparkles" },
    { title: "Design", text: `Create the visual system, page structure, UI patterns, content hierarchy, and conversion flow.`, icon: "Palette" },
    { title: "Launch", text: `Build or publish the assets, pages, tracking, forms, campaigns, and handoff paths.`, icon: "Rocket" },
    { title: "Track", text: `Measure events, sources, funnels, search signals, page performance, and lead quality.`, icon: "BarChart3" },
    { title: "Optimize", text: `Improve copy, layouts, CTAs, campaigns, SEO, analytics, and user journeys from real data.`, icon: "Activity" },
  ];
}

function buildOverviewCards(solution: SolutionPageData, category: SolutionCategoryId): SolutionCard[] {
  const language = categoryLanguage[category];

  return [
    {
      title: "Who it is for",
      text: `Built for ${language.audience} who need ${solution.label.toLowerCase()} to work as a managed system, not a disconnected asset.`,
      icon: "Users",
    },
    {
      title: "What it connects",
      text: `Connects ${language.input} into ${language.operations} with clear ownership, visibility, and next actions.`,
      icon: "Network",
    },
    {
      title: "How HNX delivers it",
      text: `HNX plans, designs, builds, connects, tests, launches, and improves the ${language.system} around your real process.`,
      icon: "CheckCircle2",
    },
  ];
}

function buildProblemExtras(solution: SolutionPageData, category: SolutionCategoryId): SolutionCard[] {
  const language = categoryLanguage[category];
  const label = solution.label.toLowerCase();

  return [
    {
      title: "No operating visibility",
      text: `Without a proper ${label}, teams cannot see owners, status, source quality, delays, or the next business action clearly.`,
      icon: "LayoutDashboard",
    },
    {
      title: "Weak improvement loop",
      text: `When ${language.input} is not tracked, the business cannot improve ${language.conversion} from real evidence.`,
      icon: "BarChart3",
    },
  ];
}

function buildModuleExtras(solution: SolutionPageData, category: SolutionCategoryId): SolutionCard[] {
  const language = categoryLanguage[category];
  const label = solution.label;

  return [
    {
      title: `${label} control rules`,
      text: `Ownership, status logic, permissions, and decision rules so the ${language.platform} can be managed without guesswork.`,
      icon: "ShieldCheck",
    },
    {
      title: "Automation hooks",
      text: `Notifications, reminders, routing, and follow-up triggers that connect ${language.input} into team action.`,
      icon: "Workflow",
    },
    {
      title: "Analytics and reporting",
      text: `Dashboards that connect ${label.toLowerCase()} activity to ${language.conversion}.`,
      icon: "BarChart3",
    },
    {
      title: "Admin operating view",
      text: `A practical control panel for the records, settings, owners, and exceptions behind ${language.operations}.`,
      icon: "LayoutDashboard",
    },
  ];
}

function buildUseCaseExtras(solution: SolutionPageData, category: SolutionCategoryId): SolutionCard[] {
  const language = categoryLanguage[category];

  return [
    {
      title: "Founder and manager visibility",
      text: `Give decision-makers a clear view of ${solution.label.toLowerCase()} performance, blockers, ownership, and next actions.`,
      icon: "BarChart3",
    },
    {
      title: "Team operating workflow",
      text: `Help teams run ${language.operations} with fewer manual handoffs and stronger accountability.`,
      icon: "Workflow",
    },
  ];
}

function buildImplementationProcess(solution: SolutionPageData, category: SolutionCategoryId): SolutionCard[] {
  if (category === "ai-automation") {
    return [
      { title: "Process audit", text: `Review the tasks, decisions, data, documents, and messages that the ${solution.label.toLowerCase()} should automate.`, icon: "SearchCheck" },
      { title: "Workflow mapping", text: "Define triggers, conditions, owners, human approvals, exceptions, and success metrics.", icon: "Workflow" },
      { title: "AI logic design", text: "Design prompts, knowledge sources, scoring rules, tool access, memory, and safety controls.", icon: "Bot" },
      { title: "Integration setup", text: "Connect CRM, forms, email, WhatsApp, documents, databases, and reporting systems.", icon: "Network" },
      { title: "Testing", text: "Test edge cases, low-confidence responses, handoffs, approvals, and data quality.", icon: "CheckCircle2" },
      { title: "Monitoring", text: "Track quality, saved time, escalations, conversion impact, and workflow health.", icon: "Activity" },
      { title: "Optimization", text: "Improve rules, prompts, templates, dashboards, and automation coverage from real usage.", icon: "Sparkles" },
    ];
  }

  if (category === "cloud-devops") {
    return [
      { title: "Infrastructure discovery", text: `Review the app, traffic, data, security, uptime, deployment, and recovery needs behind the ${solution.label.toLowerCase()}.`, icon: "SearchCheck" },
      { title: "Architecture plan", text: "Design servers, databases, storage, environments, access, monitoring, backup, and cost controls.", icon: "Cloud" },
      { title: "Environment setup", text: "Configure hosting, domains, SSL, variables, runtime, CI/CD, and release paths.", icon: "ServerCog" },
      { title: "Security and access", text: "Harden permissions, secrets, service accounts, network exposure, and operational ownership.", icon: "ShieldCheck" },
      { title: "Testing", text: "Validate deployments, logs, health checks, backups, rollback, and restore procedures.", icon: "CheckCircle2" },
      { title: "Launch", text: "Move to production with runbooks, alerts, owners, and recovery steps documented.", icon: "Rocket" },
      { title: "Ongoing review", text: "Review performance, errors, cost, capacity, uptime, and maintenance improvements.", icon: "Activity" },
    ];
  }

  if (category === "design-growth") {
    return [
      { title: "Discovery", text: `Understand the audience, offer, market, current friction, and measurable goal for the ${solution.label.toLowerCase()}.`, icon: "SearchCheck" },
      { title: "Positioning", text: "Clarify message, hierarchy, proof, objections, and the action path.", icon: "Sparkles" },
      { title: "UI/UX design", text: "Design the pages, screens, states, sections, and content system with responsive behavior.", icon: "Palette" },
      { title: "Build or handoff", text: "Implement the experience or prepare developer-ready assets, specs, and components.", icon: "Code2" },
      { title: "Tracking setup", text: "Connect events, funnels, pixels, Search Console, analytics, and reporting views.", icon: "BarChart3" },
      { title: "Launch QA", text: "Check content, mobile behavior, forms, speed, accessibility basics, and conversion paths.", icon: "CheckCircle2" },
      { title: "Optimization", text: "Improve copy, layout, campaigns, SEO, and funnels from performance signals.", icon: "Activity" },
    ];
  }

  if (category === "mobile-apps") {
    return [
      { title: "Discovery", text: `Clarify app users, actions, backend needs, business rules, and launch scope for the ${solution.label.toLowerCase()}.`, icon: "SearchCheck" },
      { title: "Mobile UX planning", text: "Map onboarding, core screens, states, navigation, empty states, and edge cases.", icon: "Smartphone" },
      { title: "UI design", text: "Design polished customer, staff, and admin-connected mobile experiences.", icon: "Palette" },
      { title: "Development", text: "Build app screens, authentication, APIs, payments, notifications, and data flows.", icon: "Code2" },
      { title: "Integrations", text: "Connect admin dashboards, CRM records, maps, payment gateways, files, and analytics.", icon: "Network" },
      { title: "Testing", text: "Validate devices, permissions, stores, performance, errors, and critical user journeys.", icon: "CheckCircle2" },
      { title: "Launch", text: "Prepare store assets, rollout steps, monitoring, updates, and post-launch improvements.", icon: "Store" },
    ];
  }

  return [
    { title: "Discovery", text: `Clarify audience, offer, business model, current tools, and the job of the ${solution.label.toLowerCase()}.`, icon: "SearchCheck" },
    { title: "System planning", text: "Map pages, modules, records, conversion paths, owner actions, and reporting needs.", icon: "LayoutDashboard" },
    { title: "UI/UX", text: "Design premium screens, sections, states, forms, dashboard views, and mobile behavior.", icon: "Palette" },
    { title: "Development", text: "Build the frontend, backend, CMS/admin controls, forms, dashboards, and integrations.", icon: "Code2" },
    { title: "Integrations", text: "Connect CRM, analytics, payments, email, WhatsApp, APIs, and operational tools.", icon: "Network" },
    { title: "Testing", text: "Test responsiveness, speed, forms, events, permissions, records, and business workflows.", icon: "CheckCircle2" },
    { title: "Launch and optimize", text: "Deploy, verify analytics, hand over ownership, and improve from real performance data.", icon: "Rocket" },
  ];
}

function withOperatingDepth(solution: SolutionPageData, category: SolutionCategoryId): SolutionPageData {
  const label = solution.label;
  const targetFlowCount =
    category === "web-saas" || category === "mobile-apps" || category === "design-growth" ? 5 : 4;

  const previewRows =
    solution.preview.rows.length >= 6
      ? solution.preview.rows
      : [
          ...solution.preview.rows,
          `${label} owner, status, and next action tracked`,
          `${label} optimization backlog updated from live signals`,
        ];

  const problems =
    solution.problems.length >= 6
      ? solution.problems.slice(0, 6)
      : uniqueCards([...solution.problems, ...buildProblemExtras(solution, category)]).slice(0, 6);

  const flow =
    solution.flow.length >= targetFlowCount
      ? solution.flow.slice(0, targetFlowCount)
      : uniqueCards([...solution.flow, ...buildJourneyFlow(solution, category)]).slice(0, targetFlowCount);

  const modules =
    solution.modules.length >= 8
      ? solution.modules.slice(0, 8)
      : uniqueCards([...solution.modules, ...buildModuleExtras(solution, category)]).slice(0, 8);

  const process =
    solution.process.length >= 7
      ? solution.process.slice(0, 7)
      : uniqueCards([...solution.process, ...buildImplementationProcess(solution, category)]).slice(0, 7);

  const useCases =
    solution.useCases.length >= 6
      ? solution.useCases.slice(0, 6)
      : uniqueCards([...solution.useCases, ...buildUseCaseExtras(solution, category)]).slice(0, 6);

  return {
    ...solution,
    problems,
    flow,
    modules,
    process,
    useCases,
    preview: {
      ...solution.preview,
      rows: Array.from(new Set(previewRows)).slice(0, 6),
    },
  };
}

function buildImpactCards(solution: SolutionPageData, category: SolutionCategoryId): SolutionCard[] {
  const language = categoryLanguage[category];
  const label = solution.label.toLowerCase();
  const statOutcomes: SolutionCard[] = solution.stats.slice(0, 2).map((stat, index) => ({
    title: `${stat.label} becomes visible`,
    text: `${stat.note} is tracked through the ${label} dashboard, giving teams a clearer way to measure progress instead of guessing from scattered updates.`,
    icon: index === 0 ? "BarChart3" : "Activity",
  }));

  return uniqueCards([
    ...statOutcomes,
    {
      title: "Less manual work",
      text: `Reduce repeated handoffs by connecting ${label} inputs, owners, alerts, and follow-up tasks into one accountable flow.`,
      icon: "Workflow",
    },
    {
      title: "Better visibility",
      text: `Give leaders and teams a live view of statuses, bottlenecks, source quality, and performance signals.`,
      icon: "LayoutDashboard",
    },
    {
      title: "Stronger conversion path",
      text: `Turn ${language.input} into ${language.conversion} with clearer steps and fewer dead ends.`,
      icon: "Sparkles",
    },
    {
      title: "Operational control",
      text: `Use roles, dashboards, reports, and exception handling to manage ${language.operations} with confidence.`,
      icon: "ShieldCheck",
    },
    {
      title: "Better customer experience",
      text: `Create clearer customer journeys, faster updates, better self-service, and fewer moments where people wait for internal coordination.`,
      icon: "Users",
    },
    {
      title: "Scalable growth",
      text: `Build a foundation that can support more traffic, users, records, campaigns, workflows, and reporting without rebuilding from scratch.`,
      icon: "Activity",
    },
  ]).slice(0, 6);
}

export function SolutionPageShell({ category, activeSlug, solutions }: SolutionPageShellProps) {
  const [activeTab, setActiveTab] = useState<SectionId>("overview");
  const meta = solutionCategoryMeta[category];
  const solution = useMemo(() => {
    const selectedSolution = solutions.find((item) => item.slug === activeSlug) ?? solutions[0];
    return selectedSolution ? withOperatingDepth(selectedSolution, category) : selectedSolution;
  }, [activeSlug, category, solutions]);
  const impactCards = useMemo(
    () => (solution ? buildImpactCards(solution, category) : []),
    [category, solution]
  );
  const handleTabChange = useCallback((nextTab: SectionId) => {
    setActiveTab(nextTab);
    window.requestAnimationFrame(() => {
      document.getElementById("solution-content-panel")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }, []);
  const SidebarIcon = getSolutionIcon(solution?.icon ?? meta.icon) as LucideIcon;

  if (!solution) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#f8fbff] pt-24 text-[#0f214f] dark:bg-[#050b18] dark:text-white">
      <SolutionCategoryTabs category={category} solutions={solutions} />
      <main className="relative overflow-hidden">
        <div className={`pointer-events-none absolute -right-40 top-16 h-96 w-96 rounded-full bg-gradient-to-br ${meta.accent} opacity-[0.12] blur-3xl`} />
        <div className="mx-auto flex w-full max-w-[min(92vw,1440px)] gap-6 px-5 py-8 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
          <SolutionSidebar
            title={solution.label}
            subtitle={meta.title}
            icon={SidebarIcon}
            items={sectionItems}
            activeTab={activeTab}
            onTabChange={handleTabChange}
          />

          <div id="solution-content-panel" className="min-w-0 scroll-mt-32 flex-1 space-y-8">
            {activeTab === "overview" ? (
              <>
                <SolutionHero category={category} solution={solution} />
                <SolutionStatsGrid category={category} stats={solution.stats} />
                <SolutionOverview
                  category={category}
                  solution={solution}
                  items={buildOverviewCards(solution, category)}
                />
              </>
            ) : null}

            {activeTab === "problems" ? (
              <>
                <SectionHeader
                  eyebrow="Business Problems"
                  title="The business friction this system is designed to remove."
                  text={solution.problem}
                />
                <SolutionProblems category={category} solution={solution} items={solution.problems} />
              </>
            ) : null}

            {activeTab === "solution-flow" ? (
              <>
                <SectionHeader
                  eyebrow="Solution Flow"
                  title="How the system moves from input to outcome."
                  text={solution.solution}
                />
                <SolutionFlow category={category} items={solution.flow} />
              </>
            ) : null}

            {activeTab === "key-modules" ? (
              <>
                <SectionHeader
                  eyebrow="Key Modules"
                  title="The practical modules that make the solution usable."
                  text="Each module is designed as part of the operating system, so teams get visibility, control, and measurable outputs."
                />
                <SolutionModules category={category} items={solution.modules} />
              </>
            ) : null}

            {activeTab === "business-impact" ? (
              <>
                <SectionHeader
                  eyebrow="Business Impact"
                  title="What improves when this becomes a real operating system."
                  text={solution.impact}
                />
                <SolutionImpact category={category} stats={solution.stats} outcomes={impactCards} />
              </>
            ) : null}

            {activeTab === "preview" ? (
              <>
                <SectionHeader
                  eyebrow="Dashboard Preview"
                  title="A preview of the operating dashboard this solution can create."
                  text="The preview shows the kind of business visibility, statuses, records, and metrics this solution can create."
                />
                <SolutionPreview category={category} preview={solution.preview} />
              </>
            ) : null}

            {activeTab === "use-cases" ? (
              <>
                <SectionHeader
                  eyebrow="Use Cases"
                  title="Where this solution creates practical business value."
                  text="These use cases show how the same system can support real teams, customers, workflows, and growth priorities."
                />
                <SolutionModules category={category} items={solution.useCases} eyebrow="Use case" />
              </>
            ) : null}

            {activeTab === "process" ? (
              <>
                <SectionHeader
                  eyebrow="Implementation Process"
                  title="A delivery path designed for clarity and launch confidence."
                  text="We move from business context to structure, build, validation, launch, and continuous improvement."
                />
                <SolutionFlow category={category} items={solution.process} />
              </>
            ) : null}

            {activeTab === "final-cta" ? <SolutionCTA category={category} solution={solution} /> : null}
          </div>
        </div>
      </main>
    </div>
  );
}
