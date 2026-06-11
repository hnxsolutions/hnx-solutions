import type { Metadata } from "next";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BarChart3,
  Bell,
  Bot,
  BrainCircuit,
  Building2,
  Car,
  Check,
  CheckCircle2,
  ChevronRight,
  Cloud,
  Database,
  Factory,
  FileText,
  Flag,
  Globe2,
  GraduationCap,
  Headphones,
  HeartPulse,
  Landmark,
  LayoutDashboard,
  Lightbulb,
  Link2,
  LockKeyhole,
  Mail,
  MessageCircle,
  MonitorSmartphone,
  Plane,
  PlayCircle,
  PlugZap,
  Rocket,
  ServerCog,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Store,
  Target,
  Workflow,
  Wrench,
  Zap,
} from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  createBreadcrumbJsonLd,
  createMetadata,
  createServiceJsonLd,
} from "@/lib/seo";

type IconItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type PackageOption = {
  name: string;
  description: string;
  badge?: string;
  includes: string[];
};

type IndustryItem = {
  name: string;
  slug: string;
  icon: LucideIcon;
};

const servicePath = "/services/full-business-suite";
const serviceDescription =
  "We plan, design, build, automate, and deploy the full digital ecosystem your business needs - website, mobile app, CRM, portal, dashboards, integrations, and AI agents.";

export const metadata: Metadata = createMetadata({
  title: "HNX Full Business Suite | Complete Digital Business System",
  description:
    "Build your complete digital business system with HNX Solutions: website, mobile app, CRM, portal, dashboards, integrations, AI agents, cloud deployment, and support.",
  path: servicePath,
  keywords: [
    "HNX Full Business Suite",
    "full business suite",
    "digital business system",
    "website app CRM portal",
    "AI automation",
    "business operating system",
  ],
});

const ecosystemItems: IconItem[] = [
  { title: "Website", description: "Public presence and lead capture.", icon: Globe2 },
  { title: "Mobile App", description: "Customer and team mobile access.", icon: Smartphone },
  { title: "CRM", description: "Lead, customer, and team workflows.", icon: Database },
  { title: "Portal", description: "Secure self-service access.", icon: LockKeyhole },
  { title: "Dashboards", description: "Live reporting and visibility.", icon: LayoutDashboard },
  { title: "AI Automation", description: "Agents, scoring, and reminders.", icon: BrainCircuit },
  { title: "Integrations", description: "Payments, WhatsApp, email, and APIs.", icon: PlugZap },
  { title: "Cloud", description: "Deployment, monitoring, and support.", icon: Cloud },
];

const includedItems: IconItem[] = [
  {
    title: "Website & Landing Pages",
    description: "Premium web pages for trust, SEO, campaigns, and enquiries.",
    icon: Globe2,
  },
  {
    title: "Mobile App",
    description: "iOS and Android app flows connected to your backend.",
    icon: Smartphone,
  },
  {
    title: "Custom CRM",
    description: "Lead, customer, team, task, and follow-up management.",
    icon: Database,
  },
  {
    title: "Customer Portal",
    description: "Secure login access for requests, documents, status, and payments.",
    icon: LockKeyhole,
  },
  {
    title: "Admin Dashboard",
    description: "A control room for users, approvals, records, and reports.",
    icon: LayoutDashboard,
  },
  {
    title: "AI Automation",
    description: "AI agents, smart replies, lead scoring, reminders, and summaries.",
    icon: Bot,
  },
  {
    title: "Integrations & APIs",
    description: "Connect WhatsApp, email, payments, analytics, sheets, and APIs.",
    icon: Link2,
  },
  {
    title: "Analytics & Reports",
    description: "Dashboards for sales, operations, campaigns, and support.",
    icon: BarChart3,
  },
  {
    title: "Cloud Deployment",
    description: "Production setup, environments, monitoring, and backups.",
    icon: ServerCog,
  },
  {
    title: "Support & Optimization",
    description: "Maintenance, performance checks, improvements, and support.",
    icon: Headphones,
  },
];

const startingPoints = [
  "I need everything from scratch",
  "I already have a website",
  "I already have a mobile app",
  "I use manual tools right now",
  "I want to automate my team",
  "I want better dashboards & reporting",
];

const architectureSteps: IconItem[] = [
  { title: "Website/App", description: "Entry points", icon: MonitorSmartphone },
  { title: "Lead Capture", description: "Forms and enquiries", icon: Target },
  { title: "CRM", description: "Team workflow", icon: Database },
  { title: "Portal", description: "User access", icon: LockKeyhole },
  { title: "Automation", description: "Smart actions", icon: Zap },
  { title: "Dashboard", description: "Live metrics", icon: LayoutDashboard },
  { title: "Growth Decisions", description: "Better direction", icon: BarChart3 },
];

const automationItems: IconItem[] = [
  { title: "AI Sales Agent", description: "Lead handling", icon: Bot },
  { title: "AI Support Agent", description: "Support replies", icon: MessageCircle },
  { title: "Lead Scoring", description: "Prioritize enquiries", icon: Target },
  { title: "WhatsApp / Email Follow-ups", description: "Timed messages", icon: Mail },
  { title: "Document Automation", description: "Files and summaries", icon: FileText },
  { title: "Report Generation", description: "Readable reports", icon: BarChart3 },
  { title: "Task Automation", description: "Assignments", icon: Workflow },
  { title: "Smart Reminders", description: "Timely nudges", icon: Bell },
];

const packageOptions: PackageOption[] = [
  {
    name: "Starter Digital Suite",
    description: "For businesses that need a strong online foundation and basic tracking.",
    includes: [
      "Website & Landing Pages",
      "Lead Forms & WhatsApp Integration",
      "Basic Dashboard & Analytics",
      "Email Notifications",
    ],
  },
  {
    name: "Growth Business Suite",
    description: "For teams ready to connect leads, customers, workflows, and reports.",
    badge: "Most Popular",
    includes: [
      "Website",
      "Custom CRM",
      "Customer Portal",
      "Automation Workflows",
      "Reports & Dashboards",
    ],
  },
  {
    name: "Complete Business Suite",
    description: "For businesses that want one full digital operating system.",
    badge: "All-in-One Solution",
    includes: [
      "Website + Mobile App",
      "CRM + Portal",
      "Dashboards & Analytics",
      "AI Automation & Agents",
      "Integrations",
      "Cloud Deployment & Support",
    ],
  },
];

const processSteps: IconItem[] = [
  {
    title: "Discover",
    description: "We understand your business, users, workflows, tools, and goals.",
    icon: Target,
  },
  {
    title: "Plan",
    description: "We define modules, architecture, integrations, automation, and timeline.",
    icon: Lightbulb,
  },
  {
    title: "Build & Automate",
    description: "We design, develop, connect, automate, test, and prepare launch.",
    icon: Workflow,
  },
  {
    title: "Launch & Grow",
    description: "We deploy, support, monitor, improve, and help the suite evolve.",
    icon: Rocket,
  },
];

const industries: IndustryItem[] = [
  { name: "Healthcare", slug: "healthcare", icon: HeartPulse },
  { name: "Manufacturing", slug: "manufacturing", icon: Factory },
  { name: "Education", slug: "education", icon: GraduationCap },
  { name: "Real Estate", slug: "real-estate", icon: Building2 },
  { name: "Retail", slug: "retail", icon: Store },
  { name: "Finance", slug: "finance", icon: Landmark },
  { name: "Insurance", slug: "insurance", icon: ShieldCheck },
  { name: "Travel", slug: "travel", icon: Plane },
  { name: "Automobile", slug: "automobile", icon: Car },
  { name: "Service Business", slug: "service-business", icon: Wrench },
];

const trustItems = [
  "End-to-End Solution",
  "Secure & Scalable",
  "On-time Delivery",
  "24/7 Support",
];

const ctaTrustItems = ["Free Consultation", "No Commitment", "Quick Response"];

export default function FullBusinessSuitePage() {
  return (
    <main className="relative overflow-hidden bg-white text-slate-950 dark:bg-[#050814] dark:text-white">
      <JsonLd
        data={[
          createBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Full Business Suite", path: servicePath },
          ]),
          createServiceJsonLd({
            name: "HNX Full Business Suite",
            description:
              "Complete digital ecosystem with website, mobile app, CRM, portal, dashboards, integrations, AI automation, cloud deployment, and support.",
            path: servicePath,
            serviceType: "Full Business Suite Development",
          }),
        ]}
      />

      <section className="px-3 pb-14 pt-24 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <div className="mx-auto w-[calc(100vw-1.5rem)] max-w-[calc(100vw-1.5rem)] sm:w-full sm:max-w-[min(92vw,1440px)]">
          <HeroSection />
          <IncludedSection />
          <BentoSection />
          <PackageSection />
          <ProcessSection />
          <IndustriesSection />
          <FinalCTASection />
        </div>
      </section>
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative w-full max-w-full overflow-hidden rounded-[2rem] bg-[#091427] px-6 py-7 text-white shadow-[0_24px_80px_rgba(9,20,39,0.22)] ring-1 ring-white/10 sm:px-8 sm:py-9 lg:px-10 xl:px-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_18%,rgba(59,130,246,0.16),transparent_30%),radial-gradient(circle_at_86%_10%,rgba(124,58,237,0.15),transparent_28%)]" />
      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/50 to-transparent" />

      <div className="relative grid gap-8 xl:grid-cols-[0.92fr_1.08fr] xl:items-center">
        <div className="min-w-0 max-w-3xl">
          <nav className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-300">
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-500" aria-hidden="true" />
            <Link href="/services" className="transition hover:text-white">
              Services
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-500" aria-hidden="true" />
            <span className="text-white">Full Business Suite</span>
          </nav>

          <span className="mt-7 inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-white/8 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-blue-100">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Complete Digital Ecosystem
          </span>

          <h1 className="mt-6 max-w-full break-words text-[2rem] font-black leading-[1.08] tracking-[-0.035em] sm:max-w-3xl sm:text-[clamp(2.75rem,4.8vw,4.85rem)] sm:leading-[1.03] sm:tracking-[-0.055em]">
            <span className="block sm:inline">Build Your</span>{" "}
            <span className="block sm:inline">Complete Digital</span>{" "}
            <span className="block bg-gradient-to-r from-blue-300 via-cyan-200 to-violet-300 bg-clip-text text-transparent sm:inline">
              Business System
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-sm font-semibold leading-7 text-slate-300 sm:text-base sm:leading-8">
            {serviceDescription}
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex w-full max-w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-black text-slate-950 shadow-[0_16px_40px_rgba(255,255,255,0.14)] transition hover:-translate-y-0.5 sm:w-auto"
            >
              Plan My Business Suite
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex w-full max-w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/8 px-6 py-3.5 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-white/12 sm:w-auto"
            >
              <PlayCircle className="h-4 w-4" aria-hidden="true" />
              Book Free Consultation
            </Link>
          </div>

          <div className="mt-7 grid gap-2 sm:grid-cols-2 lg:grid-cols-4 xl:max-w-3xl">
            {trustItems.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.055] px-3 py-2 text-xs font-black text-slate-200"
              >
                <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-blue-300" aria-hidden="true" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <EcosystemDiagram />
      </div>
    </section>
  );
}

function EcosystemDiagram() {
  return (
    <div className="relative mx-auto min-w-0 w-full max-w-[680px]">
      <div className="hidden min-h-[510px] lg:block">
        <div className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-300/25" />
        <div className="absolute left-1/2 top-1/2 h-[245px] w-[245px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/16" />
        <div className="absolute left-1/2 top-1/2 grid h-[150px] w-[150px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-blue-300/25 bg-white/[0.075] p-5 text-center shadow-[0_18px_50px_rgba(15,23,42,0.24)] backdrop-blur">
          <div>
            <span className="mx-auto grid h-10 w-10 place-items-center rounded-2xl bg-blue-400/18 text-blue-200">
              <Workflow className="h-5 w-5" aria-hidden="true" />
            </span>
            <p className="mt-3 text-sm font-black leading-5">
              Your Business Operating System
            </p>
          </div>
        </div>

        {ecosystemItems.map((item, index) => (
          <OrbitCard key={item.title} item={item} index={index} />
        ))}
      </div>

      <div className="grid gap-3 lg:hidden">
        <div className="rounded-2xl border border-white/12 bg-white/[0.075] p-5 text-center">
          <p className="text-lg font-black">Your Business Operating System</p>
          <p className="mt-2 text-xs font-semibold leading-5 text-slate-300">
            One connected ecosystem for customers, team operations, automation, and reporting.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {ecosystemItems.map((item, index) => (
            <MiniDarkCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

function OrbitCard({ item, index }: { item: IconItem; index: number }) {
  const Icon = item.icon;
  const positions = [
    "left-1/2 top-1 -translate-x-1/2",
    "right-10 top-16",
    "right-3 top-1/2 -translate-y-1/2",
    "bottom-16 right-10",
    "bottom-1 left-1/2 -translate-x-1/2",
    "bottom-16 left-10",
    "left-3 top-1/2 -translate-y-1/2",
    "left-10 top-16",
  ];

  return (
    <article
      className={`absolute ${positions[index]} flex w-[170px] items-center gap-3 rounded-2xl border border-white/12 bg-[#0d1c35]/92 p-3 shadow-[0_16px_38px_rgba(2,6,23,0.20)] backdrop-blur`}
    >
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-blue-400/12 text-blue-200 ring-1 ring-blue-300/15">
        <Icon className="h-4 w-4" aria-hidden="true" />
      </span>
      <div className="min-w-0">
        <p className="text-xs font-black leading-tight text-white">{item.title}</p>
        <p className="mt-0.5 truncate text-[10px] font-semibold text-slate-400">
          Connected
        </p>
      </div>
      <span className="absolute -left-1 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-blue-300/80" />
    </article>
  );
}

function MiniDarkCard({ item, index }: { item: IconItem; index: number }) {
  const Icon = item.icon;

  return (
    <article className="rounded-2xl border border-white/12 bg-white/[0.055] p-3">
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-blue-400/12 text-blue-200">
        <Icon className="h-4 w-4" aria-hidden="true" />
      </span>
      <p className="mt-3 text-xs font-black text-white">{item.title}</p>
      <p className="mt-1 text-[10px] font-semibold text-slate-400">
        Layer {String(index + 1).padStart(2, "0")}
      </p>
    </article>
  );
}

function IncludedSection() {
  return (
    <section id="included" className="grid gap-8 border-b border-slate-200 py-14 dark:border-white/10 lg:grid-cols-[280px_1fr] lg:items-start">
      <div className="lg:sticky lg:top-24">
        <SectionKicker>What&apos;s Included</SectionKicker>
        <h2 className="mt-3 text-3xl font-black leading-tight tracking-[-0.04em] text-slate-950 dark:text-white">
          Everything needed to run a connected digital business.
        </h2>
        <p className="mt-3 text-sm font-semibold leading-7 text-slate-600 dark:text-slate-300">
          Start with one layer or build the full suite. Every part is planned to connect with the others.
        </p>
        <Link
          href="#suite-packages"
          className="mt-5 inline-flex items-center gap-2 text-sm font-black text-blue-700 transition hover:gap-3 dark:text-blue-300"
        >
          See all features
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
        {includedItems.map((item, index) => (
          <IncludedCard key={item.title} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}

function IncludedCard({ item, index }: { item: IconItem; index: number }) {
  const Icon = item.icon;

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_12px_34px_rgba(15,23,42,0.045)] transition hover:-translate-y-0.5 hover:border-blue-200 dark:border-white/10 dark:bg-white/[0.05]">
      <span className={`grid h-10 w-10 place-items-center rounded-xl ${iconTone(index)}`}>
        <Icon className="h-4 w-4" aria-hidden="true" />
      </span>
      <h3 className="mt-4 text-sm font-black text-slate-950 dark:text-white">{item.title}</h3>
      <p className="mt-2 text-xs font-semibold leading-5 text-slate-600 dark:text-slate-300">
        {item.description}
      </p>
    </article>
  );
}

function BentoSection() {
  return (
    <section className="border-b border-slate-200 py-14 dark:border-white/10">
      <div className="grid gap-4 xl:grid-cols-3">
        <StartingPointBento />
        <ArchitectureBento />
        <AutomationBento />
      </div>
    </section>
  );
}

function StartingPointBento() {
  return (
    <article className="relative overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-[0_14px_40px_rgba(15,23,42,0.055)] dark:border-white/10 dark:bg-white/[0.05]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <SectionKicker>Choose Your Starting Point</SectionKicker>
          <h3 className="mt-3 text-xl font-black text-slate-950 dark:text-white">
            Start from where you are now.
          </h3>
        </div>
        <span className="grid h-11 w-11 place-items-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-400/10 dark:text-blue-300">
          <Flag className="h-5 w-5" aria-hidden="true" />
        </span>
      </div>

      <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/[0.04]">
        <div className="relative h-20 overflow-hidden rounded-xl bg-gradient-to-b from-white to-blue-50 dark:from-white/[0.08] dark:to-blue-400/10">
          <div className="absolute bottom-0 left-4 h-10 w-24 rounded-t-full bg-blue-100 dark:bg-blue-400/10" />
          <div className="absolute bottom-0 left-24 h-16 w-32 rounded-t-full bg-violet-100 dark:bg-violet-400/10" />
          <div className="absolute right-9 top-4 h-8 w-8 rounded-full bg-blue-500/85" />
          <div className="absolute right-12 top-8 h-10 w-px bg-slate-300 dark:bg-white/20" />
        </div>
      </div>

      <ul className="mt-5 grid gap-2">
        {startingPoints.map((item) => (
          <li key={item} className="flex items-center gap-3 text-sm font-semibold text-slate-700 dark:text-slate-300">
            <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-400/10 dark:text-blue-300">
              <Check className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

function ArchitectureBento() {
  const firstRow = architectureSteps.slice(0, 5);
  const secondRow = architectureSteps.slice(5);

  return (
    <article id="suite-architecture" className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-[0_14px_40px_rgba(15,23,42,0.055)] dark:border-white/10 dark:bg-white/[0.05]">
      <SectionKicker>Suite Architecture</SectionKicker>
      <h3 className="mt-3 text-xl font-black text-slate-950 dark:text-white">
        A simple flow from capture to decisions.
      </h3>

      <div className="mt-6 space-y-5">
        <FlowRow items={firstRow} />
        <div className="mx-auto h-5 w-px border-l border-dashed border-slate-300 dark:border-white/20" />
        <FlowRow items={secondRow} centered />
      </div>
    </article>
  );
}

function FlowRow({ items, centered = false }: { items: IconItem[]; centered?: boolean }) {
  return (
    <div className={`flex flex-wrap items-center gap-2 ${centered ? "justify-center" : ""}`}>
      {items.map((item, index) => {
        const Icon = item.icon;

        return (
          <div key={item.title} className="flex items-center gap-2">
            <div className="w-[96px] rounded-2xl border border-slate-200 bg-slate-50 p-3 text-center dark:border-white/10 dark:bg-white/[0.04]">
              <Icon className="mx-auto h-4 w-4 text-blue-600 dark:text-blue-300" aria-hidden="true" />
              <p className="mt-2 text-[11px] font-black leading-4 text-slate-800 dark:text-slate-100">
                {item.title}
              </p>
            </div>
            {index < items.length - 1 ? (
              <ArrowRight className="h-4 w-4 text-slate-300 dark:text-white/25" aria-hidden="true" />
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

function AutomationBento() {
  return (
    <article className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-[0_14px_40px_rgba(15,23,42,0.055)] dark:border-white/10 dark:bg-white/[0.05]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <SectionKicker>AI + Automation Layer</SectionKicker>
          <h3 className="mt-3 text-xl font-black text-slate-950 dark:text-white">
            Smart workflows without extra clutter.
          </h3>
        </div>
        <span className="grid h-11 w-11 place-items-center rounded-2xl bg-violet-50 text-violet-600 dark:bg-violet-400/10 dark:text-violet-300">
          <Bot className="h-5 w-5" aria-hidden="true" />
        </span>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {automationItems.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3 dark:border-white/10 dark:bg-white/[0.04]"
            >
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-white text-blue-600 shadow-sm dark:bg-white/10 dark:text-blue-300">
                <Icon className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="truncate text-xs font-black text-slate-800 dark:text-white">
                  {item.title}
                </p>
                <p className="mt-0.5 truncate text-[10px] font-semibold text-slate-500 dark:text-slate-400">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
}

function PackageSection() {
  return (
    <section id="suite-packages" className="border-b border-slate-200 py-14 dark:border-white/10">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-black tracking-[-0.04em] text-slate-950 dark:text-white sm:text-4xl">
          Flexible Packages for Every Business
        </h2>
        <p className="mt-3 text-sm font-semibold leading-7 text-slate-600 dark:text-slate-300 sm:text-base">
          Choose the right package or get a custom solution for your unique needs.
        </p>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {packageOptions.map((option, index) => (
          <PackageCard key={option.name} option={option} index={index} />
        ))}
      </div>
    </section>
  );
}

function PackageCard({ option, index }: { option: PackageOption; index: number }) {
  const isGrowth = option.name === "Growth Business Suite";
  const isComplete = option.name === "Complete Business Suite";

  return (
    <article
      className={`relative flex min-h-[360px] flex-col rounded-[1.5rem] border bg-white p-6 shadow-[0_14px_42px_rgba(15,23,42,0.055)] dark:bg-white/[0.05] ${
        isGrowth
          ? "border-violet-200 ring-1 ring-violet-100 dark:border-violet-300/30 dark:ring-violet-300/10"
          : "border-slate-200 dark:border-white/10"
      }`}
    >
      {option.badge ? (
        <span
          className={`absolute right-5 top-5 rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.13em] ${
            isGrowth
              ? "bg-violet-600 text-white"
              : "bg-slate-950 text-white dark:bg-white dark:text-slate-950"
          }`}
        >
          {option.badge}
        </span>
      ) : null}

      <span className={`grid h-12 w-12 place-items-center rounded-2xl ${iconTone(index)}`}>
        {isComplete ? (
          <Sparkles className="h-5 w-5" aria-hidden="true" />
        ) : isGrowth ? (
          <Rocket className="h-5 w-5" aria-hidden="true" />
        ) : (
          <Globe2 className="h-5 w-5" aria-hidden="true" />
        )}
      </span>

      <h3 className="mt-5 pr-28 text-xl font-black text-slate-950 dark:text-white">
        {option.name}
      </h3>
      <p className="mt-2 text-sm font-semibold leading-6 text-slate-600 dark:text-slate-300">
        {option.description}
      </p>

      <ul className="mt-5 grid gap-2.5">
        {option.includes.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm font-semibold text-slate-700 dark:text-slate-300">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-600 dark:text-blue-300" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>

      <p className="mt-auto pt-6 text-sm font-black text-slate-800 dark:text-slate-200">
        Custom quote based on your needs
      </p>
    </article>
  );
}

function ProcessSection() {
  return (
    <section className="grid gap-8 border-b border-slate-200 py-14 dark:border-white/10 lg:grid-cols-[280px_1fr] lg:items-center">
      <div>
        <SectionKicker>Our Proven Process</SectionKicker>
        <h2 className="mt-3 text-3xl font-black leading-tight tracking-[-0.04em] text-slate-950 dark:text-white">
          A clear path from idea to operating system.
        </h2>
        <p className="mt-3 text-sm font-semibold leading-7 text-slate-600 dark:text-slate-300">
          We keep every phase practical, visible, and aligned to real business outcomes.
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-8 right-8 top-8 hidden border-t border-dashed border-slate-300 dark:border-white/15 lg:block" />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step, index) => (
            <ProcessStep key={step.title} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessStep({ step, index }: { step: IconItem; index: number }) {
  const Icon = step.icon;

  return (
    <article className="relative rounded-[1.35rem] border border-slate-200 bg-white p-5 shadow-[0_12px_34px_rgba(15,23,42,0.045)] dark:border-white/10 dark:bg-white/[0.05]">
      <span className="relative z-10 grid h-12 w-12 place-items-center rounded-2xl bg-slate-950 text-white dark:bg-white dark:text-slate-950">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <p className="mt-5 text-xs font-black uppercase tracking-[0.16em] text-blue-700 dark:text-blue-300">
        {String(index + 1).padStart(2, "0")}
      </p>
      <h3 className="mt-2 text-base font-black text-slate-950 dark:text-white">{step.title}</h3>
      <p className="mt-2 text-sm font-semibold leading-6 text-slate-600 dark:text-slate-300">
        {step.description}
      </p>
    </article>
  );
}

function IndustriesSection() {
  return (
    <section className="border-b border-slate-200 py-14 text-center dark:border-white/10">
      <SectionKicker>Industries We Serve</SectionKicker>
      <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-slate-950 dark:text-white sm:text-4xl">
        Industry suites built around real workflows.
      </h2>

      <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
        {industries.map((industry, index) => {
          const Icon = industry.icon;

          return (
            <Link
              key={industry.slug}
              href={`/industries/${industry.slug}/business-suite`}
              className="group rounded-2xl border border-slate-200 bg-white p-4 text-left shadow-[0_12px_34px_rgba(15,23,42,0.04)] transition hover:-translate-y-0.5 hover:border-blue-200 dark:border-white/10 dark:bg-white/[0.05]"
            >
              <div className="flex items-center gap-3">
                <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${iconTone(index)}`}>
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-black text-slate-950 dark:text-white">{industry.name}</p>
                  <p className="mt-1 text-xs font-semibold text-slate-500 dark:text-slate-400">Business suite</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <Link
        href="/industries"
        className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-black text-blue-700 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 dark:border-white/10 dark:bg-white/[0.06] dark:text-blue-300"
      >
        Explore Industry Suites
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </section>
  );
}

function FinalCTASection() {
  return (
    <section className="pt-14">
      <div className="overflow-hidden rounded-[2rem] border border-slate-800 bg-gradient-to-br from-[#07111f] via-[#0d1730] to-[#21143d] p-6 text-white shadow-[0_24px_70px_rgba(15,23,42,0.22)] sm:p-8 lg:p-10">
        <div className="grid gap-7 lg:grid-cols-[0.8fr_1fr_auto] lg:items-center">
          <h2 className="max-w-xl text-3xl font-black leading-tight tracking-[-0.035em] sm:text-4xl">
            Let&apos;s Build Your Business Operating System
          </h2>
          <p className="max-w-2xl text-sm font-semibold leading-7 text-slate-300">
            Tell us how your business works. We&apos;ll suggest the right digital suite to save time, improve operations, and grow online.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-black text-slate-950 shadow-sm transition hover:-translate-y-0.5"
            >
              Plan My Full Suite
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/8 px-6 py-3.5 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-white/12"
            >
              Book Free Consultation
            </Link>
          </div>
        </div>

        <div className="mt-7 grid gap-2 border-t border-white/10 pt-5 sm:grid-cols-3">
          {ctaTrustItems.map((item) => (
            <div key={item} className="flex items-center gap-2 text-xs font-black text-slate-300">
              <CheckCircle2 className="h-3.5 w-3.5 text-blue-300" aria-hidden="true" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionKicker({ children }: { children: string }) {
  return (
    <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-700 dark:text-blue-300">
      {children}
    </p>
  );
}

function iconTone(index: number) {
  const tones = [
    "bg-blue-50 text-blue-600 dark:bg-blue-400/10 dark:text-blue-300",
    "bg-violet-50 text-violet-600 dark:bg-violet-400/10 dark:text-violet-300",
    "bg-cyan-50 text-cyan-600 dark:bg-cyan-400/10 dark:text-cyan-300",
    "bg-emerald-50 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-300",
    "bg-slate-100 text-slate-700 dark:bg-white/10 dark:text-slate-300",
  ];

  return tones[index % tones.length];
}
