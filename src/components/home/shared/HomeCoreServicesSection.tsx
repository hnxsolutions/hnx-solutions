"use client";

import type { IconType } from "react-icons";
import {
  HiAnnotation,
  HiArrowRight,
  HiChartBar,
  HiCheckCircle,
  HiCloud,
  HiCog,
  HiCollection,
  HiCube,
  HiDeviceMobile,
  HiDocumentReport,
  HiGlobeAlt,
  HiLockClosed,
  HiOfficeBuilding,
  HiSearch,
  HiServer,
  HiShieldCheck,
  HiSparkles,
  HiSupport,
  HiTemplate,
  HiUserGroup,
} from "react-icons/hi";
import {
  GradientWord,
  HomeSectionShell,
  PrimaryArrowLink,
  SectionBadge,
  SectionCopy,
  SectionHeading,
} from "./HomeSectionPrimitives";

type CoreService = {
  title: string;
  eyebrow: string;
  description: string;
  points: string[];
  icon: IconType;
  href: string;
  image: string;
  tone: "blue" | "cyan" | "violet" | "emerald" | "orange" | "rose";
};

const coreServiceModules: CoreService[] = [
  {
    title: "Website Development",
    eyebrow: "Web Presence",
    description: "Fast, responsive, SEO-ready websites built to convert.",
    points: ["Business websites", "SEO structure", "Responsive UI"],
    icon: HiGlobeAlt,
    tone: "blue",
    href: "/services/web-development",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Mobile App Development",
    eyebrow: "iOS & Android",
    description: "High-performance apps with clean user flows.",
    points: ["iOS & Android", "Modern app UI", "API integration"],
    icon: HiDeviceMobile,
    tone: "cyan",
    href: "/services/mobile-app-development",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Custom CRM Systems",
    eyebrow: "Owned CRM",
    description: "Lead, deal, customer, task, and team management.",
    points: ["Lead tracking", "Sales pipeline", "Dashboards"],
    icon: HiUserGroup,
    tone: "violet",
    href: "/services/custom-crm-systems",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Workflow Automation",
    eyebrow: "Automation",
    description: "Automate approvals, follow-ups, and reminders.",
    points: ["Task routing", "Smart reminders", "Approval flows"],
    icon: HiCog,
    tone: "blue",
    href: "/services/workflow-automation",
    image:
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "AI Automation & Agents",
    eyebrow: "AI Systems",
    description: "AI agents that reduce repetitive business work.",
    points: ["AI agents", "Smart insights", "Auto replies"],
    icon: HiSparkles,
    tone: "violet",
    href: "/services/ai-automation",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "SaaS & Portal Development",
    eyebrow: "Platforms",
    description: "Scalable SaaS products and customer portals.",
    points: ["User portals", "Subscriptions", "Admin controls"],
    icon: HiCloud,
    tone: "cyan",
    href: "/services/saas-development",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Business Portal Systems",
    eyebrow: "Self-Service",
    description: "Secure portals for customers, vendors, and teams.",
    points: ["Role access", "Self-service", "Secure login"],
    icon: HiLockClosed,
    tone: "emerald",
    href: "/services/saas-development",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "AI Chatbots",
    eyebrow: "Chat AI",
    description: "Chatbots that guide users and capture leads.",
    points: ["Lead capture", "Smart replies", "Handoff flows"],
    icon: HiAnnotation,
    tone: "violet",
    href: "/services/ai-automation",
    image:
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "AI Lead Scoring",
    eyebrow: "Sales AI",
    description: "Score leads and find high-intent prospects.",
    points: ["Intent scoring", "Priority leads", "Sales alerts"],
    icon: HiChartBar,
    tone: "orange",
    href: "/services/ai-automation",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Dashboards & Analytics",
    eyebrow: "Reporting",
    description: "Live dashboards for revenue and performance.",
    points: ["Live reports", "KPI tracking", "Owner view"],
    icon: HiDocumentReport,
    tone: "blue",
    href: "/services/custom-crm-systems",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "SEO & GEO Systems",
    eyebrow: "Growth",
    description: "Search-ready pages and AI-search visibility.",
    points: ["Technical SEO", "Content structure", "GEO-ready"],
    icon: HiSearch,
    tone: "emerald",
    href: "/services/web-development",
    image:
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Cloud & DevOps",
    eyebrow: "Infrastructure",
    description: "Reliable deployment, hosting, and monitoring.",
    points: ["Cloud hosting", "CI/CD setup", "Monitoring"],
    icon: HiServer,
    tone: "cyan",
    href: "/services/cloud-infrastructure",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "UI/UX Design",
    eyebrow: "Product Design",
    description: "Premium interfaces built for clarity and trust.",
    points: ["Wireframes", "Design systems", "User flows"],
    icon: HiTemplate,
    tone: "rose",
    href: "/services/ui-ux-design",
    image:
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "API Integrations",
    eyebrow: "Connected Stack",
    description: "Connect payments, CRM, WhatsApp, and apps.",
    points: ["Third-party APIs", "Data sync", "Webhooks"],
    icon: HiCollection,
    tone: "blue",
    href: "/services/workflow-automation",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Industry CRM Modules",
    eyebrow: "Industry Systems",
    description: "CRM modules tailored for business workflows.",
    points: ["Industry fields", "Custom pipelines", "Role workflows"],
    icon: HiOfficeBuilding,
    tone: "violet",
    href: "/industries",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Security & Permissions",
    eyebrow: "Access Control",
    description: "Role permissions, audit trails, and secure access.",
    points: ["Role access", "Audit logs", "Data protection"],
    icon: HiShieldCheck,
    tone: "emerald",
    href: "/services/saas-development",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Support & Maintenance",
    eyebrow: "Long-Term Care",
    description: "Ongoing fixes, monitoring, and improvements.",
    points: ["Bug fixes", "Performance", "Feature updates"],
    icon: HiSupport,
    tone: "orange",
    href: "/services",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Full Business Suite",
    eyebrow: "Complete System",
    description: "Website, CRM, mobile, automation, AI, and portal.",
    points: ["One ecosystem", "Owned workflows", "Scalable growth"],
    icon: HiCube,
    tone: "blue",
    href: "/services/full-business-suite",
    image:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=900&q=85",
  },
];

const toneClasses: Record<
  CoreService["tone"],
  {
    icon: string;
    badge: string;
    check: string;
    ring: string;
    glow: string;
    link: string;
    underline: string;
    orb: string;
    borderGlow: string;
    bottomLine: string;
  }
> = {
  blue: {
    icon: "bg-blue-600 text-white shadow-[0_14px_30px_rgba(37,99,235,0.3)]",
    badge: "bg-blue-50 text-blue-700 dark:bg-blue-400/10 dark:text-blue-200",
    check: "text-blue-600 dark:text-blue-300",
    ring: "group-hover:border-blue-200 group-hover:shadow-[0_26px_80px_rgba(37,99,235,0.18)]",
    glow: "from-blue-600/30 via-transparent to-transparent",
    link: "text-blue-700 dark:text-blue-200",
    underline: "bg-blue-600 dark:bg-blue-300",
    orb: "bg-blue-500/25",
    borderGlow: "from-blue-500/0 via-blue-500/70 to-blue-500/0",
    bottomLine: "from-blue-500 via-cyan-400 to-blue-600",
  },
  cyan: {
    icon: "bg-cyan-500 text-white shadow-[0_14px_30px_rgba(6,182,212,0.28)]",
    badge: "bg-cyan-50 text-cyan-700 dark:bg-cyan-400/10 dark:text-cyan-200",
    check: "text-cyan-600 dark:text-cyan-300",
    ring: "group-hover:border-cyan-200 group-hover:shadow-[0_26px_80px_rgba(6,182,212,0.16)]",
    glow: "from-cyan-500/30 via-transparent to-transparent",
    link: "text-cyan-700 dark:text-cyan-200",
    underline: "bg-cyan-600 dark:bg-cyan-300",
    orb: "bg-cyan-500/25",
    borderGlow: "from-cyan-500/0 via-cyan-500/70 to-cyan-500/0",
    bottomLine: "from-cyan-400 via-sky-400 to-blue-500",
  },
  violet: {
    icon:
      "bg-violet-600 text-white shadow-[0_14px_30px_rgba(124,58,237,0.3)]",
    badge:
      "bg-violet-50 text-violet-700 dark:bg-violet-400/10 dark:text-violet-200",
    check: "text-violet-600 dark:text-violet-300",
    ring: "group-hover:border-violet-200 group-hover:shadow-[0_26px_80px_rgba(124,58,237,0.18)]",
    glow: "from-violet-600/30 via-transparent to-transparent",
    link: "text-violet-700 dark:text-violet-200",
    underline: "bg-violet-600 dark:bg-violet-300",
    orb: "bg-violet-500/25",
    borderGlow: "from-violet-500/0 via-violet-500/70 to-violet-500/0",
    bottomLine: "from-violet-500 via-fuchsia-400 to-indigo-500",
  },
  emerald: {
    icon:
      "bg-emerald-500 text-white shadow-[0_14px_30px_rgba(16,185,129,0.26)]",
    badge:
      "bg-emerald-50 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-200",
    check: "text-emerald-600 dark:text-emerald-300",
    ring: "group-hover:border-emerald-200 group-hover:shadow-[0_26px_80px_rgba(16,185,129,0.16)]",
    glow: "from-emerald-500/30 via-transparent to-transparent",
    link: "text-emerald-700 dark:text-emerald-200",
    underline: "bg-emerald-600 dark:bg-emerald-300",
    orb: "bg-emerald-500/25",
    borderGlow: "from-emerald-500/0 via-emerald-500/70 to-emerald-500/0",
    bottomLine: "from-emerald-400 via-teal-400 to-green-500",
  },
  orange: {
    icon:
      "bg-orange-500 text-white shadow-[0_14px_30px_rgba(249,115,22,0.26)]",
    badge:
      "bg-orange-50 text-orange-700 dark:bg-orange-400/10 dark:text-orange-200",
    check: "text-orange-600 dark:text-orange-300",
    ring: "group-hover:border-orange-200 group-hover:shadow-[0_26px_80px_rgba(249,115,22,0.16)]",
    glow: "from-orange-500/30 via-transparent to-transparent",
    link: "text-orange-700 dark:text-orange-200",
    underline: "bg-orange-600 dark:bg-orange-300",
    orb: "bg-orange-500/25",
    borderGlow: "from-orange-500/0 via-orange-500/70 to-orange-500/0",
    bottomLine: "from-orange-400 via-amber-400 to-rose-400",
  },
  rose: {
    icon: "bg-rose-500 text-white shadow-[0_14px_30px_rgba(244,63,94,0.26)]",
    badge: "bg-rose-50 text-rose-700 dark:bg-rose-400/10 dark:text-rose-200",
    check: "text-rose-600 dark:text-rose-300",
    ring: "group-hover:border-rose-200 group-hover:shadow-[0_26px_80px_rgba(244,63,94,0.16)]",
    glow: "from-rose-500/30 via-transparent to-transparent",
    link: "text-rose-700 dark:text-rose-200",
    underline: "bg-rose-600 dark:bg-rose-300",
    orb: "bg-rose-500/25",
    borderGlow: "from-rose-500/0 via-rose-500/70 to-rose-500/0",
    bottomLine: "from-rose-400 via-pink-400 to-fuchsia-500",
  },
};

function ServiceCard({
  service,
  index,
}: {
  service: CoreService;
  index: number;
}) {
  const Icon = service.icon;
  const tone = toneClasses[service.tone];

  return (
    <article
      style={{
        animationDelay: `${(index % coreServiceModules.length) * 90}ms`,
      }}
      className={`group relative w-[15.35rem] shrink-0 overflow-hidden rounded-[1.45rem] border border-slate-200/90 bg-white/95 shadow-[0_16px_42px_rgba(15,23,42,0.07)] backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:scale-[1.018] dark:border-white/10 dark:bg-white/[0.045] ${tone.ring}`}
    >
      <div className="pointer-events-none absolute inset-0 rounded-[1.45rem] opacity-0 transition duration-500 group-hover:opacity-100">
        <div
          className={`absolute left-[-55%] top-0 h-px w-[95%] bg-gradient-to-r ${tone.borderGlow} animate-[serviceBorderSweep_2.8s_ease-in-out_infinite]`}
        />
        <div
          className={`absolute bottom-0 right-[-55%] h-px w-[95%] bg-gradient-to-r ${tone.borderGlow} animate-[serviceBorderSweepReverse_2.8s_ease-in-out_infinite]`}
        />
      </div>

      <div
        className={`pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full ${tone.orb} blur-2xl transition duration-700 group-hover:scale-150 group-hover:opacity-100`}
      />

      <div className="pointer-events-none absolute -bottom-16 left-6 h-32 w-32 rounded-full bg-slate-200/45 blur-3xl transition duration-700 group-hover:scale-125 dark:bg-white/10" />

      <div className="relative h-[6.6rem] overflow-hidden bg-slate-100 dark:bg-slate-900">
        <img
          src={service.image}
          alt={`${service.title} preview`}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110 group-hover:rotate-[0.7deg]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/68 via-slate-950/18 to-white/5" />
        <div className={`absolute inset-0 bg-gradient-to-br ${tone.glow}`} />

        <div className="absolute -left-16 top-0 h-full w-12 rotate-12 bg-white/35 blur-sm transition duration-700 group-hover:left-[120%]" />

        <div className="absolute left-3 top-3 rounded-full border border-white/40 bg-white/90 px-2.5 py-1 text-[8px] font-black uppercase tracking-[0.12em] text-slate-700 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-slate-950/75 dark:text-slate-200">
          {service.eyebrow}
        </div>

        <div className="absolute right-3 top-3 grid h-7 w-7 place-items-center rounded-full border border-white/35 bg-white/20 text-[9px] font-black text-white shadow-sm backdrop-blur-md">
          {String((index % coreServiceModules.length) + 1).padStart(2, "0")}
        </div>

        <div className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full border border-white/30 bg-white/18 px-2.5 py-1 text-[8px] font-black uppercase tracking-[0.12em] text-white backdrop-blur-md">
          <span className="h-1.5 w-1.5 animate-[servicePulse_1.8s_ease-in-out_infinite] rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.9)]" />
          Live Module
        </div>

        <div
          className={`absolute bottom-[-1.05rem] left-4 grid h-11 w-11 place-items-center rounded-2xl ring-4 ring-white transition duration-500 group-hover:-translate-y-1 group-hover:rotate-[-4deg] dark:ring-slate-950 ${tone.icon}`}
        >
          <Icon className="animate-[serviceIconFloat_3.2s_ease-in-out_infinite] text-xl" />
        </div>
      </div>

      <div className="relative px-4 pb-4 pt-6">
        <div className="pointer-events-none absolute right-4 top-4 grid grid-cols-3 gap-1 opacity-20 transition duration-500 group-hover:opacity-40">
          {Array.from({ length: 9 }).map((_, dotIndex) => (
            <span
              key={dotIndex}
              className="h-1 w-1 rounded-full bg-slate-400 dark:bg-white"
            />
          ))}
        </div>

        <h3 className="relative text-[1.02rem] font-black leading-5 tracking-tight text-slate-950 transition duration-300 dark:text-white">
          {service.title}
        </h3>

        <p className="mt-2 min-h-[2.5rem] text-xs font-medium leading-5 text-slate-600 dark:text-slate-300">
          {service.description}
        </p>

        <div className="mt-3 space-y-1.5">
          {service.points.map((point, pointIndex) => (
            <div
              key={point}
              className="flex items-center gap-2 transition duration-300 group-hover:translate-x-0.5"
              style={{
                transitionDelay: `${pointIndex * 55}ms`,
              }}
            >
              <HiCheckCircle
                className={`shrink-0 text-sm transition duration-300 group-hover:scale-110 ${tone.check}`}
              />
              <span className="text-[11px] font-semibold text-slate-600 dark:text-slate-300">
                {point}
              </span>
            </div>
          ))}
        </div>

        <a
          href={service.href}
          className={`group/link mt-4 inline-flex items-center gap-1.5 text-[11px] font-black ${tone.link}`}
        >
          <span className="relative">
            Explore Service
            <span
              className={`absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-60 rounded-full transition-transform duration-300 group-hover/link:scale-x-100 ${tone.underline}`}
            />
          </span>
          <HiArrowRight className="text-sm transition-transform duration-300 group-hover/link:translate-x-1" />
        </a>
      </div>

      <div
        className={`pointer-events-none absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r transition-transform duration-500 group-hover:scale-x-100 ${tone.bottomLine}`}
      />
    </article>
  );
}

export default function HomeCoreServicesSection() {
  const marqueeServices = [...coreServiceModules, ...coreServiceModules];

  return (
    <HomeSectionShell>
      <div className="mx-auto max-w-3xl text-center">
        <SectionBadge>Core Services</SectionBadge>

        <SectionHeading>
          Built Around Our <GradientWord>Core Services.</GradientWord>
        </SectionHeading>

        <SectionCopy>
          Explore 18 service modules built around websites, mobile apps, CRM,
          automation, AI, SaaS, portals, dashboards, and business growth systems.
        </SectionCopy>
      </div>

      <div className="relative mt-10 overflow-hidden py-5">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white via-white/85 to-transparent dark:from-slate-950 dark:via-slate-950/85" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white via-white/85 to-transparent dark:from-slate-950 dark:via-slate-950/85" />

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-32 w-[55vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/45 blur-3xl dark:bg-blue-500/10" />

        <div className="flex w-max animate-[coreServicesMarquee_72s_linear_infinite] gap-4 hover:[animation-play-state:paused]">
          {marqueeServices.map((service, index) => (
            <ServiceCard
              key={`${service.title}-${index}`}
              service={service}
              index={index}
            />
          ))}
        </div>
      </div>

      <div className="mt-3 text-center">
        <PrimaryArrowLink href="/services">View All Services</PrimaryArrowLink>
      </div>

      <style jsx>{`
        @keyframes coreServicesMarquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-50% - 0.5rem));
          }
        }

        @keyframes serviceBorderSweep {
          0%,
          100% {
            transform: translateX(0);
            opacity: 0.2;
          }
          50% {
            transform: translateX(175%);
            opacity: 1;
          }
        }

        @keyframes serviceBorderSweepReverse {
          0%,
          100% {
            transform: translateX(0);
            opacity: 0.2;
          }
          50% {
            transform: translateX(-175%);
            opacity: 1;
          }
        }

        @keyframes serviceIconFloat {
          0%,
          100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-2px) scale(1.08);
          }
        }

        @keyframes servicePulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.75;
          }
          50% {
            transform: scale(1.35);
            opacity: 1;
          }
        }
      `}</style>
    </HomeSectionShell>
  );
}