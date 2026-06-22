import {
  ArrowRight,
  Bell,
  CalendarCheck,
  CreditCard,
  Download,
  FileText,
  HelpCircle,
  LayoutDashboard,
  Library,
  LockKeyhole,
  MessageSquareText,
  Settings,
  ShieldCheck,
  UsersRound,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { PortalReveal } from "./PortalMotion";
import { cn } from "./portalSectionUtils";
import type { IndustryPortalPageData } from "./portalTypes";

type FeatureCardItem = {
  title: string;
  description: string;
  icon: LucideIcon;
  tone: string;
};

const healthcareFeatures: FeatureCardItem[] = [
  {
    title: "Appointments",
    description: "Schedule, manage, and track appointments with ease.",
    icon: CalendarCheck,
    tone: "violet",
  },
  {
    title: "Requests",
    description: "Submit and track requests across departments.",
    icon: FileText,
    tone: "emerald",
  },
  {
    title: "Documents",
    description: "Securely upload, access, and manage important documents.",
    icon: Workflow,
    tone: "blue",
  },
  {
    title: "Billing & Payments",
    description: "View statements, make payments, and track history.",
    icon: CreditCard,
    tone: "orange",
  },
  {
    title: "Messaging",
    description: "Communicate securely with your care team.",
    icon: MessageSquareText,
    tone: "violet",
  },
  {
    title: "Notifications",
    description: "Stay informed with real-time alerts and important updates.",
    icon: Bell,
    tone: "rose",
  },
  {
    title: "Approvals",
    description: "Review and approve requests with confidence.",
    icon: ShieldCheck,
    tone: "blue",
  },
  {
    title: "Dashboard",
    description: "Get a personalized overview of key activities and metrics.",
    icon: LayoutDashboard,
    tone: "orange",
  },
  {
    title: "Knowledge Base",
    description: "Find guides, FAQs, and resources in one place.",
    icon: Library,
    tone: "emerald",
  },
  {
    title: "Support",
    description: "Get help when you need it from our support team.",
    icon: HelpCircle,
    tone: "violet",
  },
  {
    title: "Profile Settings",
    description: "Manage your profile, preferences, and account settings.",
    icon: Settings,
    tone: "blue",
  },
  {
    title: "Security & Access",
    description: "Role-based access and advanced security you can trust.",
    icon: LockKeyhole,
    tone: "rose",
  },
  {
    title: "Data Export",
    description: "Export your data securely whenever you need it.",
    icon: Download,
    tone: "orange",
  },
  {
    title: "Care Team",
    description: "View your care team and their roles and contact information.",
    icon: UsersRound,
    tone: "violet",
  },
];

export default function PortalFeaturesSection({ data }: { data: IndustryPortalPageData }) {
  const features = getFeatureCards(data);
  const topFeatures = features.slice(0, 6);
  const lowerFeatures = features.slice(6);

  return (
    <section id="portal-features" className="relative isolate scroll-mt-[calc(var(--nav-offset)+1rem)] overflow-hidden border-t border-blue-100/70 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_54%,#edf4ff_100%)] px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20 xl:px-12">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-[45%] bg-[linear-gradient(90deg,rgba(239,246,255,0.9),transparent)]" aria-hidden="true" />
      <div className="pointer-events-none absolute right-0 top-0 h-80 w-[420px] bg-[radial-gradient(circle,rgba(37,99,235,0.13)_1px,transparent_1.6px)] bg-[size:18px_18px] opacity-70 [mask-image:radial-gradient(ellipse_at_top_right,black_0%,transparent_74%)]" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-[520px] bg-[radial-gradient(circle,rgba(37,99,235,0.12)_1px,transparent_1.6px)] bg-[size:18px_18px] [mask-image:radial-gradient(ellipse_at_bottom_left,black_0%,transparent_72%)]" aria-hidden="true" />

      <div id="portal-features-grid" className="relative mx-auto w-full max-w-[min(92vw,1440px)]">
        <div className="xl:flex xl:items-start xl:gap-6">
        <PortalReveal className="xl:w-1/4 xl:shrink-0">
          <div>
            <SectionLabel>Portal Features</SectionLabel>
            <h2 className="mt-4 max-w-xl text-3xl font-extrabold leading-[1.1] text-[#071538] sm:text-4xl lg:text-[2.85rem]">
              Everything You Need in One Portal
            </h2>
            <p className="mt-4 max-w-xl text-sm font-medium leading-7 text-[#31466d] sm:text-base">
              {data.industrySlug === "healthcare"
                ? "Our all-in-one healthcare portal streamlines every workflow, connecting patients, staff, and administrators in a secure and intuitive experience."
                : `Bring requests, documents, payments, messaging, support, and access control into one secure ${data.portalName.toLowerCase()}.`}
            </p>
            <Link
              href="#portal-features-grid"
              className="mt-7 inline-flex min-h-11 items-center justify-center gap-3 rounded-xl border border-[#9cacff] bg-white/80 px-5 py-2.5 text-sm font-extrabold text-[#123adf] shadow-[0_12px_28px_rgba(30,57,104,0.08)] transition hover:-translate-y-0.5 hover:bg-blue-50"
            >
              Explore All Features
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </PortalReveal>

          <div className="mt-7 grid gap-5 md:grid-cols-2 xl:mt-0 xl:flex-1 xl:grid-cols-3">
            {topFeatures.map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} index={index} />
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {lowerFeatures.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index + topFeatures.length} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  feature,
  index,
}: {
  feature: FeatureCardItem;
  index: number;
}) {
  const Icon = feature.icon;

  return (
    <PortalReveal delay={index * 0.025} y={24}>
      <article className={cn(
        "relative min-h-[185px] overflow-hidden rounded-2xl border border-[#dce5f4] bg-white p-5 shadow-[0_16px_42px_rgba(30,57,104,0.07)] transition hover:-translate-y-1 hover:shadow-[0_22px_52px_rgba(30,57,104,0.11)]",
        getBottomAccent(feature.tone),
      )}>
        <span className={cn("grid h-14 w-14 place-items-center rounded-2xl", getIconTone(feature.tone))}>
          <Icon className="h-7 w-7" aria-hidden="true" />
        </span>
        <h3 className="mt-5 text-base font-extrabold text-[#111c37]">
          {feature.title}
        </h3>
        <p className="mt-3 text-sm font-medium leading-6 text-[#526684]">
          {feature.description}
        </p>
      </article>
    </PortalReveal>
  );
}

function getFeatureCards(data: IndustryPortalPageData): FeatureCardItem[] {
  if (data.industrySlug === "healthcare") {
    return healthcareFeatures;
  }

  const tones = ["blue", "violet", "emerald", "orange", "cyan", "rose"];
  const generic = [
    { title: "Notifications", description: "Send status updates and reminders automatically.", icon: Bell },
    { title: "Dashboard", description: "Keep all important work visible in one overview.", icon: LayoutDashboard },
    { title: "Knowledge Base", description: "Give users helpful answers and documentation.", icon: Library },
    { title: "Security & Access", description: "Control permissions, sessions, and audit visibility.", icon: LockKeyhole },
  ];

  return [...data.modules, ...generic].slice(0, 12).map((item, index) => ({
    title: item.title,
    description: item.description,
    icon: item.icon,
    tone: tones[index % tones.length],
  }));
}

function SectionLabel({ children }: { children: string }) {
  return (
    <span className="inline-flex text-xs font-black uppercase tracking-[0.22em] text-[#123adf]">
      {children}
    </span>
  );
}

function getIconTone(tone: string) {
  const tones: Record<string, string> = {
    blue: "bg-blue-50 text-blue-700",
    violet: "bg-violet-50 text-violet-700",
    emerald: "bg-emerald-50 text-emerald-700",
    orange: "bg-orange-50 text-orange-700",
    cyan: "bg-cyan-50 text-cyan-700",
    rose: "bg-rose-50 text-rose-700",
  };

  return tones[tone] ?? tones.blue;
}

function getBottomAccent(tone: string) {
  const tones: Record<string, string> = {
    blue: "after:bg-blue-500",
    violet: "after:bg-violet-500",
    emerald: "after:bg-emerald-500",
    orange: "after:bg-orange-500",
    cyan: "after:bg-cyan-500",
    rose: "after:bg-rose-500",
  };

  return cn("after:absolute after:inset-x-0 after:bottom-0 after:h-1", tones[tone] ?? tones.blue);
}
