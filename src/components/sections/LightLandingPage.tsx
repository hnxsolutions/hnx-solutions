"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  Bot,
  Calculator,
  Check,
  CheckCircle2,
  Briefcase,
  ChevronDown,
  GraduationCap,
  HeartPulse,
  Home,
  ShoppingCart,
  UserRound,
  Users,
  Search,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Workflow,
} from "lucide-react";
import { useState } from "react";
import {
  aiFeatures,
  automationExamples,
  buildPlans,
  faqs,
  featureCards,
  industryCards,
  ownedCrmComparison,
  permissionExamples,
  roleCards,
  trustCards,
} from "@/components/data/siteContent";
import { Button } from "@/components/ui/Button";


const heroIndustryScenarios = [
  {
    key: "real-estate",
    label: "Real Estate",
    icon: Home,
    badge: "Real Estate CRM",
    greeting: "Good morning, Alex! 👋",
    subline: "Here’s what’s happening with your real estate business today.",
    metrics: [
      ["New Leads", "56", "+18%"],
      ["Property Inquiries", "32", "+12%"],
      ["Deals in Progress", "24", "+9%"],
      ["Deals Won", "8", "+20%"],
      ["Revenue This Month", "₹48.6L", "+24%"],
    ],
    sidebar: ["Dashboard", "Leads", "Properties", "Deals", "Clients", "Tasks", "Calendar"],
    chartTitle: "Leads Over Time",
    pipelineTitle: "Deal Pipeline",
    pipelineSubtitle: "Real Estate Sales Pipeline",
    stages: [
      ["New Lead", "56"],
      ["Property Shown", "32"],
      ["Proposal Sent", "18"],
      ["Negotiation", "10"],
      ["Closed Won", "8"],
    ],
    activities: ["New lead added: Priya Sharma", "Property shown to Rahul Mehta", "Proposal sent to Amit Verma"],
  },
  {
    key: "education",
    label: "Education",
    icon: GraduationCap,
    badge: "Education CRM",
    greeting: "Good morning, Alex! 👋",
    subline: "Here’s what’s happening with your admissions team today.",
    metrics: [
      ["New Enquiries", "84", "+21%"],
      ["Counselling Calls", "46", "+14%"],
      ["Demo Classes", "28", "+11%"],
      ["Admissions Won", "17", "+8%"],
      ["Fees Collected", "₹32.4L", "+19%"],
    ],
    sidebar: ["Dashboard", "Enquiries", "Students", "Counsellors", "Tasks", "Batches", "Reports"],
    chartTitle: "Admissions Trend",
    pipelineTitle: "Admission Pipeline",
    pipelineSubtitle: "Education Sales Pipeline",
    stages: [
      ["New Enquiry", "84"],
      ["Counselling", "46"],
      ["Demo Class", "28"],
      ["Fee Discussion", "21"],
      ["Enrolled", "17"],
    ],
    activities: ["Demo class booked for Aarav", "Counsellor assigned to Neha", "Fee reminder sent to parent"],
  },
  {
    key: "healthcare",
    label: "Healthcare",
    icon: HeartPulse,
    badge: "Healthcare CRM",
    greeting: "Good morning, Alex! 👋",
    subline: "Here’s what’s happening with your clinic operations today.",
    metrics: [
      ["New Patients", "41", "+15%"],
      ["Appointments", "63", "+10%"],
      ["Follow-ups Due", "19", "+7%"],
      ["Cases Closed", "34", "+12%"],
      ["Revenue This Month", "₹21.8L", "+16%"],
    ],
    sidebar: ["Dashboard", "Patients", "Appointments", "Doctors", "Follow-ups", "Billing", "Reports"],
    chartTitle: "Appointment Flow",
    pipelineTitle: "Patient Pipeline",
    pipelineSubtitle: "Healthcare Service Pipeline",
    stages: [
      ["New Patient", "41"],
      ["Consultation", "63"],
      ["Treatment Plan", "29"],
      ["Follow-up", "19"],
      ["Completed", "34"],
    ],
    activities: ["Appointment confirmed for Riya", "Follow-up reminder sent", "Doctor note added for patient"],
  },
  {
    key: "agency",
    label: "Agency",
    icon: Users,
    badge: "Agency CRM",
    greeting: "Good morning, Alex! 👋",
    subline: "Here’s what’s happening with your client acquisition today.",
    metrics: [
      ["New Leads", "72", "+17%"],
      ["Discovery Calls", "38", "+13%"],
      ["Proposals Sent", "22", "+9%"],
      ["Clients Won", "11", "+6%"],
      ["Pipeline Value", "₹58.2L", "+22%"],
    ],
    sidebar: ["Dashboard", "Leads", "Clients", "Projects", "Proposals", "Tasks", "Reports"],
    chartTitle: "Lead Movement",
    pipelineTitle: "Client Pipeline",
    pipelineSubtitle: "Agency Sales Pipeline",
    stages: [
      ["New Lead", "72"],
      ["Discovery", "38"],
      ["Proposal", "22"],
      ["Negotiation", "16"],
      ["Client Won", "11"],
    ],
    activities: ["Proposal opened by GreenLeaf", "Discovery call booked", "Project kickoff task created"],
  },
  {
    key: "ecommerce",
    label: "E-commerce",
    icon: ShoppingCart,
    badge: "E-commerce CRM",
    greeting: "Good morning, Alex! 👋",
    subline: "Here’s what’s happening with your store and customer pipeline today.",
    metrics: [
      ["New Customers", "318", "+23%"],
      ["Abandoned Carts", "74", "-12%"],
      ["Repeat Orders", "96", "+18%"],
      ["Tickets Solved", "64", "+10%"],
      ["Revenue This Month", "₹72.3L", "+28%"],
    ],
    sidebar: ["Dashboard", "Customers", "Orders", "Carts", "Support", "Campaigns", "Reports"],
    chartTitle: "Orders Over Time",
    pipelineTitle: "Customer Pipeline",
    pipelineSubtitle: "E-commerce Growth Pipeline",
    stages: [
      ["New Visitor", "318"],
      ["Cart Added", "142"],
      ["Checkout", "96"],
      ["Payment", "82"],
      ["Repeat", "43"],
    ],
    activities: ["Cart recovery WhatsApp sent", "VIP customer tagged", "Support ticket resolved"],
  },
  {
    key: "finance",
    label: "Finance",
    icon: Briefcase,
    badge: "Finance CRM",
    greeting: "Good morning, Alex! 👋",
    subline: "Here’s what’s happening with your advisory and policy pipeline today.",
    metrics: [
      ["New Prospects", "67", "+16%"],
      ["KYC Pending", "24", "-8%"],
      ["Applications", "31", "+12%"],
      ["Policies Closed", "14", "+7%"],
      ["Premium Value", "₹44.9L", "+20%"],
    ],
    sidebar: ["Dashboard", "Prospects", "Policies", "KYC", "Claims", "Tasks", "Reports"],
    chartTitle: "Policy Pipeline Trend",
    pipelineTitle: "Finance Pipeline",
    pipelineSubtitle: "Insurance & Finance Pipeline",
    stages: [
      ["New Prospect", "67"],
      ["KYC", "24"],
      ["Application", "31"],
      ["Under Review", "18"],
      ["Closed", "14"],
    ],
    activities: ["KYC reminder sent to client", "Policy application moved", "Advisor follow-up task created"],
  },
];

void heroIndustryScenarios;

type DashboardMetric = [string, string, string];
type DashboardStage = [string, string];
type DashboardScenario = {
  label: string;
  greeting: string;
  subtitle: string;
  sidebar: string[];
  metrics: DashboardMetric[];
  pipelineTitle: string;
  pipelineSubtitle: string;
  stages: DashboardStage[];
  pipeline?: DashboardStage[];
  activities: string[];
};

type SectionIntroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
};

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.62, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionIntro({ eyebrow, title, description, align = "center" }: SectionIntroProps) {
  return (
    <div className={`mb-12 ${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}`}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-[#1b7f93]">{eyebrow}</p>
      ) : null}
      <h2 className="text-balance text-3xl font-bold tracking-normal text-[#0f214f] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-base leading-7 text-[#465374] sm:text-lg ${align === "center" ? "mx-auto max-w-2xl" : ""}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}

function ImageFrame({
  src,
  alt,
  label,
  className = "",
}: {
  src: string;
  alt: string;
  label: string;
  className?: string;
}) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <div className={`relative overflow-hidden rounded-[28px] border border-slate-200 bg-gradient-to-br from-cyan-50 via-white to-blue-50 shadow-[0_22px_70px_rgba(15,23,42,0.1)] ${className}`}>
      {!loaded || failed ? (
        <div className="absolute inset-0 grid place-items-center bg-[radial-gradient(circle_at_20%_20%,rgba(37,208,255,0.28),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.18),transparent_32%),linear-gradient(135deg,#eff6ff,#ffffff)]">
          <span className="rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
            {label}
          </span>
        </div>
      ) : null}
      {!failed ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 45vw"
          className={`object-cover transition duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
        />
      ) : null}
      <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/5 to-transparent" />
    </div>
  );
}

function FeatureCard({ title, description, icon: Icon }: (typeof featureCards)[number]) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-[28px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.07)] transition duration-300 hover:border-[#b9d7ea] hover:shadow-[0_24px_70px_rgba(20,92,183,0.12)]"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#19b7c5] to-[#145cb7] opacity-80" />
      <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-[#eefcff] to-[#eaf2ff] text-[#145cb7] shadow-sm ring-1 ring-[#d7e1f2]">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="mt-7 text-xl font-bold text-[#0f214f]">{title}</h3>
      <p className="mt-3 leading-7 text-[#465374]">{description}</p>
    </motion.article>
  );
}

function DashboardMockup({ scenario }: { scenario?: Partial<DashboardScenario> } = {}) {
  const fallbackScenario: DashboardScenario = {
    label: "Real Estate CRM",
    greeting: "Good morning, Alex! 👋",
    subtitle: "Here’s what’s happening with your real estate business today.",
    sidebar: ["Dashboard", "Leads", "Properties", "Deals", "Clients", "Tasks", "Calendar"],
    metrics: [
      ["New Leads", "56", "+18%"],
      ["Property Inquiries", "32", "+12%"],
      ["Deals in Progress", "24", "+9%"],
      ["Deals Won", "8", "+20%"],
      ["Revenue This Month", "₹48.6L", "+24%"],
    ],
    pipelineTitle: "Deal Pipeline",
    pipelineSubtitle: "Real Estate Sales Pipeline",
    stages: [
      ["New Lead", "56"],
      ["Property Shown", "32"],
      ["Proposal Sent", "18"],
      ["Negotiation", "10"],
      ["Closed Won", "8"],
    ],
    activities: [
      "New lead added: Priya Sharma",
      "Property shown to Rahul Mehta",
      "Proposal sent to Amit Verma",
    ],
  };

  const activeScenario: DashboardScenario = {
    label: scenario?.label ?? fallbackScenario.label,
    greeting: scenario?.greeting ?? fallbackScenario.greeting,
    subtitle: scenario?.subtitle ?? fallbackScenario.subtitle,
    sidebar: scenario?.sidebar ?? fallbackScenario.sidebar,
    metrics: scenario?.metrics ?? fallbackScenario.metrics,
    pipelineTitle: scenario?.pipelineTitle ?? fallbackScenario.pipelineTitle,
    pipelineSubtitle: scenario?.pipelineSubtitle ?? fallbackScenario.pipelineSubtitle,
    stages: scenario?.stages ?? scenario?.pipeline ?? fallbackScenario.stages,
    activities: scenario?.activities ?? fallbackScenario.activities,
  };

  const leads = [
    ["Acme Corp", "92", "Hot"],
    ["TechNova", "85", "Hot"],
    ["GreenLeaf", "78", "Warm"],
    ["Bright Infosys", "72", "Warm"],
  ];

  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      className="relative rounded-[34px] border border-slate-200 bg-white p-3 shadow-[0_36px_100px_rgba(15,23,42,0.16)]"
    >
      <div className="overflow-hidden rounded-[26px] border border-slate-200 bg-slate-50">
        <div className="flex items-center justify-between border-b border-slate-200 bg-white px-4 py-4">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-300" />
            <span className="h-3 w-3 rounded-full bg-amber-300" />
            <span className="h-3 w-3 rounded-full bg-emerald-300" />
          </div>

          <div className="hidden items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-500 sm:flex">
            <Search className="h-3.5 w-3.5" aria-hidden="true" />
            Search leads, deals, reports...
          </div>

          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
            {activeScenario.label}
          </span>
        </div>

        <div className="grid gap-4 p-4 lg:grid-cols-[210px_1fr]">
          <aside className="hidden rounded-3xl border border-slate-200 bg-white p-4 shadow-sm lg:block">
            <div className="mb-5">
              <p className="text-sm font-extrabold text-slate-950">HNX CRM Systems</p>
              <p className="mt-1 text-xs text-slate-500">Custom workspace</p>
            </div>

            <div className="space-y-1.5">
              {activeScenario.sidebar.map((item: string, index: number) => (
                <div
                  key={item}
                  className={`flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-bold ${
                    index === 0 ? "bg-blue-50 text-blue-700" : "text-slate-500"
                  }`}
                >
                  <span className={`h-2 w-2 rounded-full ${index === 0 ? "bg-blue-600" : "bg-slate-300"}`} />
                  {item}
                </div>
              ))}
            </div>
          </aside>

          <div className="grid gap-4">
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <h3 className="text-xl font-extrabold text-slate-950">{activeScenario.greeting}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-500">{activeScenario.subtitle}</p>
                </div>

                <span className="w-fit rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-bold text-blue-700">
                  Live preview
                </span>
              </div>
            </div>

            <div className="grid gap-3 md:grid-cols-3 xl:grid-cols-5">
              {activeScenario.metrics.map(([label, value, delta]: string[]) => (
                <div key={label} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <p className="text-xs font-semibold text-slate-500">{label}</p>
                  <div className="mt-3 flex items-end justify-between gap-2">
                    <span className="text-2xl font-bold text-slate-950">{value}</span>
                    <span className="rounded-full bg-emerald-50 px-2 py-1 text-[11px] font-bold text-emerald-700">
                      {delta}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-slate-950">Leads Over Time</h3>
                    <p className="text-xs text-slate-500">Weekly movement</p>
                  </div>
                  <TrendingUp className="h-5 w-5 text-blue-600" aria-hidden="true" />
                </div>

                <div className="relative h-44 overflow-hidden rounded-2xl bg-gradient-to-b from-cyan-50 to-white">
                  <svg viewBox="0 0 420 160" className="h-full w-full" role="img" aria-label="Mock leads line chart">
                    <defs>
                      <linearGradient id="lightLine" x1="0" x2="1">
                        <stop offset="0%" stopColor="#25d0ff" />
                        <stop offset="100%" stopColor="#2563eb" />
                      </linearGradient>
                      <linearGradient id="lightArea" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#25d0ff" stopOpacity="0.28" />
                        <stop offset="100%" stopColor="#25d0ff" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M10 126 C50 110, 62 88, 95 96 C132 106, 142 54, 178 62 C216 70, 224 36, 260 44 C302 52, 315 24, 350 32 C382 40, 392 22, 414 26 L414 160 L10 160 Z"
                      fill="url(#lightArea)"
                    />
                    <path
                      d="M10 126 C50 110, 62 88, 95 96 C132 106, 142 54, 178 62 C216 70, 224 36, 260 44 C302 52, 315 24, 350 32 C382 40, 392 22, 414 26"
                      fill="none"
                      stroke="url(#lightLine)"
                      strokeLinecap="round"
                      strokeWidth="5"
                    />
                  </svg>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="font-bold text-slate-950">AI Lead Score</h3>

                <div className="mt-4 space-y-2">
                  {leads.map(([company, score, status]) => (
                    <div key={company} className="flex items-center justify-between rounded-2xl bg-slate-50 px-3 py-2">
                      <span className="text-sm font-medium text-slate-700">{company}</span>
                      <span className="flex items-center gap-2">
                        <span className="text-sm font-bold text-slate-950">{score}</span>
                        <span className="rounded-full bg-cyan-50 px-2 py-1 text-[11px] font-bold text-blue-700">
                          {status}
                        </span>
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">AI insight</p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-slate-700">
                    Prioritize hot leads today and send follow-up messages within 2 hours.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="font-bold text-slate-950">{activeScenario.pipelineTitle}</h3>
                <p className="mt-1 text-xs text-slate-500">{activeScenario.pipelineSubtitle}</p>

                <div className="mt-4 grid gap-2 sm:grid-cols-5">
                  {activeScenario.stages.map(([stage, value]: string[], index: number) => (
                    <div key={stage} className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
                      <p className="text-[11px] font-bold leading-5 text-slate-600">{stage}</p>
                      <p className="mt-2 text-xl font-extrabold text-slate-950">{value}</p>
                      <div className="mt-3 h-2 rounded-full bg-slate-200">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-cyanGlow to-blue-600"
                          style={{ width: `${85 - index * 12}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="font-bold text-slate-950">Recent Activities</h3>

                <div className="mt-4 space-y-3 text-sm text-slate-600">
                  {activeScenario.activities.map((activity: string) => (
                    <div key={activity} className="flex items-center gap-3">
                      <span className="h-2.5 w-2.5 rounded-full bg-cyanGlow" />
                      <span>{activity}</span>
                    </div>
                  ))}
                </div>

                <Button href="/crm-demo" variant="secondary" className="mt-5">
                  View full demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
export function LightLandingPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f7faff] text-slate-950">
      <HeroSection />
      <ProblemSection />
      <WhatWeProvideSection />
      <OwnershipSection />
      <HowItWorksBehindScenesSection />
      <RolePermissionSection />
      <AutomationRulesSection />
      <AiCrmSection />
      <IndustriesSection />
      <ExploreDemoCrmSection />
      <RoiCalculatorPreviewSection />
      <BuildPlansSection />
      <ContactSection />
      <FaqSection />
      <FinalCtaSection />
    </main>
  );
}

function HeroSection() {
  const crmScenarios: Record<string, DashboardScenario> = {
    "Real Estate": {
      label: "Real Estate CRM",
      greeting: "Good morning, Alex! 👋",
      subtitle: "Here’s what’s happening with your real estate business today.",
      sidebar: ["Dashboard", "Leads", "Properties", "Deals", "Clients", "Tasks", "Calendar"],
      metrics: [
        ["New Leads", "56", "+18%"],
        ["Property Inquiries", "32", "+12%"],
        ["Deals in Progress", "24", "+9%"],
        ["Deals Won", "8", "+20%"],
        ["Revenue This Month", "₹48.6L", "+24%"],
      ],
      pipelineTitle: "Deal Pipeline",
      pipelineSubtitle: "Real Estate Sales Pipeline",
      stages: [
        ["New Lead", "56"],
        ["Property Shown", "32"],
        ["Proposal Sent", "18"],
        ["Negotiation", "10"],
        ["Closed Won", "8"],
      ],
      activities: [
        "New lead added: Priya Sharma",
        "Property shown to Rahul Mehta",
        "Proposal sent to Amit Verma",
      ],
    },

    Education: {
      label: "Education CRM",
      greeting: "Good morning, Alex! 👋",
      subtitle: "Here’s what’s happening with your institute enquiries today.",
      sidebar: ["Dashboard", "Enquiries", "Students", "Admissions", "Fees", "Tasks", "Classes"],
      metrics: [
        ["New Enquiries", "84", "+22%"],
        ["Demo Classes", "41", "+14%"],
        ["Admissions Open", "29", "+11%"],
        ["Fees Collected", "18", "+16%"],
        ["Revenue This Month", "₹18.4L", "+19%"],
      ],
      pipelineTitle: "Admission Pipeline",
      pipelineSubtitle: "Student Enrollment Pipeline",
      stages: [
        ["New Enquiry", "84"],
        ["Counselling", "41"],
        ["Demo Class", "29"],
        ["Fee Discussion", "18"],
        ["Enrolled", "12"],
      ],
      activities: [
        "New enquiry added: Rohan Sharma",
        "Demo class booked for Ananya Gupta",
        "Fee reminder sent to Mehak Verma",
      ],
    },

    Healthcare: {
      label: "Healthcare CRM",
      greeting: "Good morning, Alex! 👋",
      subtitle: "Here’s what’s happening with your clinic operations today.",
      sidebar: ["Dashboard", "Patients", "Appointments", "Treatments", "Follow-ups", "Reports", "Calendar"],
      metrics: [
        ["New Patients", "38", "+15%"],
        ["Appointments", "72", "+18%"],
        ["Follow-ups Due", "24", "+9%"],
        ["Cases Closed", "16", "+12%"],
        ["Revenue This Month", "₹12.8L", "+17%"],
      ],
      pipelineTitle: "Patient Journey",
      pipelineSubtitle: "Clinic Patient Pipeline",
      stages: [
        ["New Patient", "38"],
        ["Consultation", "72"],
        ["Treatment Plan", "24"],
        ["Follow-up", "16"],
        ["Completed", "11"],
      ],
      activities: [
        "Appointment booked for Neha Kapoor",
        "Follow-up reminder sent to Arjun Singh",
        "Treatment plan updated for Kavita Mehra",
      ],
    },

    Agency: {
      label: "Agency CRM",
      greeting: "Good morning, Alex! 👋",
      subtitle: "Here’s what’s happening with your agency leads and projects today.",
      sidebar: ["Dashboard", "Leads", "Clients", "Projects", "Proposals", "Tasks", "Reports"],
      metrics: [
        ["New Leads", "44", "+16%"],
        ["Proposals Sent", "19", "+10%"],
        ["Active Projects", "12", "+8%"],
        ["Deals Won", "7", "+13%"],
        ["Revenue This Month", "₹22.6L", "+21%"],
      ],
      pipelineTitle: "Client Pipeline",
      pipelineSubtitle: "Agency Sales Pipeline",
      stages: [
        ["New Lead", "44"],
        ["Discovery Call", "25"],
        ["Proposal Sent", "19"],
        ["Negotiation", "11"],
        ["Client Won", "7"],
      ],
      activities: [
        "Proposal sent to UrbanNest",
        "Discovery call scheduled with PixelWorks",
        "New project created for BrandMint",
      ],
    },

    "E-commerce": {
      label: "E-commerce CRM",
      greeting: "Good morning, Alex! 👋",
      subtitle: "Here’s what’s happening with your store customers today.",
      sidebar: ["Dashboard", "Customers", "Orders", "Carts", "Campaigns", "Support", "Reports"],
      metrics: [
        ["New Customers", "126", "+24%"],
        ["Abandoned Carts", "39", "-8%"],
        ["Orders Today", "88", "+17%"],
        ["Repeat Buyers", "31", "+12%"],
        ["Revenue This Month", "₹34.2L", "+26%"],
      ],
      pipelineTitle: "Customer Pipeline",
      pipelineSubtitle: "E-commerce Conversion Pipeline",
      stages: [
        ["New Visitor", "126"],
        ["Cart Added", "88"],
        ["Checkout", "52"],
        ["Paid Order", "41"],
        ["Repeat Buyer", "31"],
      ],
      activities: [
        "Cart recovery sent to Riya Malhotra",
        "Order update sent to Mohit Jain",
        "Campaign triggered for repeat buyers",
      ],
    },

    Finance: {
      label: "Finance CRM",
      greeting: "Good morning, Alex! 👋",
      subtitle: "Here’s what’s happening with your finance leads today.",
      sidebar: ["Dashboard", "Leads", "Applications", "Documents", "Policies", "Tasks", "Reports"],
      metrics: [
        ["New Leads", "62", "+17%"],
        ["Applications", "34", "+13%"],
        ["Docs Pending", "21", "-6%"],
        ["Approved Cases", "14", "+11%"],
        ["Revenue This Month", "₹27.5L", "+18%"],
      ],
      pipelineTitle: "Finance Pipeline",
      pipelineSubtitle: "Loan / Insurance Sales Pipeline",
      stages: [
        ["New Lead", "62"],
        ["Docs Collected", "34"],
        ["Under Review", "21"],
        ["Approved", "14"],
        ["Closed", "9"],
      ],
      activities: [
        "Document reminder sent to Rajat Saini",
        "Application approved for Sneha Arora",
        "New policy lead added: Vikram Mehta",
      ],
    },
  };

  const industries = Object.keys(crmScenarios);
  const [selectedIndustry, setSelectedIndustry] = useState("Real Estate");
  const homePreviewScenario = crmScenarios[selectedIndustry];

  return (
    <>
      <section
  id="home"
  className="relative overflow-hidden px-4 pb-10 pt-28 sm:px-6 sm:pt-28 lg:px-8 lg:pt-32"
>
  <div className="absolute inset-0 bg-[linear-gradient(135deg,#f8fbff_0%,#ffffff_34%,#eef6ff_100%)]" />

  {/* Full image visible, top aligned, no crop */}
  {/* Full image visible, horizontally stretched only */}
<div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
  <Image
    src="/images/heroimage.png"
    alt="CRM dashboard background"
    fill
    priority
    sizes="100vw"
    className="object-contain object-top opacity-90 [transform:scaleX(1.36)]"
  />
</div>

  {/* Readability overlays */}
  <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-[#f8fbff]/98 via-[#f8fbff]/82 to-transparent" />
  <div className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-[54%] bg-gradient-to-r from-white/78 via-white/28 to-transparent" />
  <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-24 bg-gradient-to-t from-[#f8fbff]/96 to-transparent" />

  <div className="grid-fade pointer-events-none absolute left-[-10rem] top-0 z-[1] h-[36rem] w-[46rem] opacity-25" />

  <div className="relative z-10 mx-auto max-w-[min(95vw,1600px)]">
    <div className="flex min-h-[calc(100vh-8rem)] items-start">
      <Reveal>
        <div className="max-w-[34rem] text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#c8e2ea] bg-white/80 px-4 py-2 text-sm font-semibold text-[#1f8ea1] shadow-[0_10px_30px_rgba(24,94,120,0.08)] backdrop-blur">
            <Sparkles className="h-4 w-4 text-[#20a9bb]" aria-hidden="true" />
            Own Your CRM. Automate Your Workflow.
          </div>

          <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.04] tracking-[-0.045em] text-[#0f214f] sm:text-5xl lg:text-[4.05rem]">
            <span className="block">Stop Renting</span>
            <span className="block">Generic CRMs.</span>
            <span className="block">
              Build{" "}
              <span className="bg-gradient-to-r from-[#17aab8] via-[#1591b3] to-[#1c66c7] bg-clip-text text-transparent">
                Your Own.
              </span>
            </span>
          </h1>

          <p className="mt-5 max-w-[31rem] text-base leading-8 text-[#465374] sm:text-lg">
           HNX builds custom CRMs with automation, <br/>AI insights, dashboards, and secure workflows<br /> built around your business.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href="/crm-demo" size="lg" showArrow className="!border-transparent !bg-gradient-to-r !from-[#19b7c5] !to-[#145cb7] !text-white !shadow-[0_18px_40px_rgba(20,92,183,0.24)] hover:!from-[#15a6b3] hover:!to-[#0f4fa4]">
              Explore CRM Systems
            </Button>

            <Button href="/roi-calculator" variant="secondary" size="lg" className="!border-[#d7e1f2] !bg-white/88 !text-[#20365e] hover:!border-[#c2d0ea] hover:!bg-white">
              Calculate ROI
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4 text-sm text-slate-700">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-[#1669c2]" aria-hidden="true" />
              <span className="font-semibold text-[#24385d]">No vendor lock-in</span>
            </div>

            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-[#20a9bb]" aria-hidden="true" />
              <span className="font-semibold text-[#24385d]">AI workflows</span>
            </div>

            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-[#1669c2]" aria-hidden="true" />
              <span className="font-semibold text-[#24385d]">Secure roles</span>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </div>
</section>
      <section className="relative overflow-hidden px-4 py-14 sm:px-6 lg:px-8 lg:py-18">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#f8fbff_0%,#ffffff_42%,#eef6ff_100%)]" />
        <div className="pointer-events-none absolute right-[-10rem] top-0 h-[34rem] w-[34rem] rounded-full bg-blue-200/45 blur-3xl" />
        <div className="pointer-events-none absolute left-[-12rem] bottom-[-14rem] h-[32rem] w-[32rem] rounded-full bg-cyan-200/45 blur-3xl" />

        <div className="relative mx-auto max-w-[min(95vw,1600px)]">
          <Reveal>
            <div className="mb-10 grid items-start gap-10 lg:grid-cols-[0.42fr_0.58fr]">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#c9e1eb] bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#1b7f93]">
                  <span className="h-2 w-2 rounded-full bg-[#1d8fb0]" />
                  Live Demo Preview
                </div>

                <h2 className="mt-6 max-w-md text-2xl font-bold leading-tight tracking-[-0.02em] text-slate-950 sm:text-3xl">
                  Experience your industry-specific CRM preview
                </h2>

                <Button href="/crm-demo" className="mt-6" showArrow>
                  Open CRM Systems
                </Button>
              </div>

              <div className="relative min-h-[230px]">
                <div className="absolute left-[6%] top-0 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#19b7c5] to-[#145cb7] text-white shadow-[0_18px_45px_rgba(20,92,183,0.24)]">
                  <Sparkles className="h-5 w-5" aria-hidden="true" />
                </div>

                <div className="absolute left-[14%] top-2 rounded-2xl border border-slate-200 bg-white/90 px-6 py-4 shadow-[0_18px_55px_rgba(15,23,42,0.10)] backdrop-blur">
                  <div className="flex items-center gap-3">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#145cb7] text-xs font-bold text-white">
                      1
                    </span>
                    <p className="font-bold text-slate-950">Choose your industry</p>
                  </div>
                  <p className="mt-2 text-sm text-slate-500">See CRM that fits your world</p>
                </div>

                <svg
                  className="absolute left-[18%] top-14 h-40 w-[42%] text-[#1593b5]"
                  viewBox="0 0 360 180"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M18 8 C18 78 172 42 188 106 C196 140 228 148 342 134"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray="8 8"
                  />
                  <path
                    d="M333 122 L350 134 L332 146"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <div className="absolute right-[22%] top-[96px] flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#19b7c5] to-[#145cb7] text-white shadow-[0_18px_45px_rgba(20,92,183,0.24)]">
                  <span className="text-lg font-black">◎</span>
                </div>

                <div className="absolute right-0 top-[106px] rounded-2xl border border-slate-200 bg-white/90 px-6 py-4 shadow-[0_18px_55px_rgba(15,23,42,0.10)] backdrop-blur">
                  <div className="flex items-center gap-3">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#145cb7] text-xs font-bold text-white">
                      2
                    </span>
                    <p className="font-bold text-slate-950">See your CRM experience</p>
                  </div>
                  <p className="mt-2 text-sm text-slate-500">Personalized. Relevant. Real.</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="mb-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
              {industries.map((industry) => {
                const isActive = selectedIndustry === industry;

                return (
                  <button
                    key={industry}
                    type="button"
                    suppressHydrationWarning
                    onClick={() => setSelectedIndustry(industry)}
                    className={`rounded-2xl border px-4 py-4 text-sm font-bold transition ${
                      isActive
                        ? "border-[#9fc6e6] bg-white text-[#145eb8] shadow-sm ring-2 ring-[#e1eefb]"
                        : "border-slate-200 bg-white/85 text-slate-700 hover:border-[#cbe0f5] hover:bg-[#f5fbff]"
                    }`}
                  >
                    {industry}
                  </button>
                );
              })}
            </div>

            <div className="relative">
              <div className="absolute inset-x-8 top-8 h-48 rounded-full bg-[#9de3ee]/25 blur-3xl" />
              <div className="relative">
                <DashboardMockup scenario={homePreviewScenario} />
              </div>
            </div>

            <div className="mx-auto mt-4 flex max-w-5xl flex-col items-center justify-center gap-4 text-center sm:flex-row sm:flex-nowrap sm:text-left">
              <p className="text-sm font-medium text-[#145eb8] sm:whitespace-nowrap">
                This is a live demo experience. Change industry to see how HNX adapts to your business.
              </p>

              <Button href="/crm-demo" variant="secondary" showArrow className="shrink-0">
                Open full demo
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function ProblemSection() {
  const painPoints = [
    {
      title: "Scattered operations",
      text: "Leads, customers, tasks, support, and reports live in different tools, so your team never has one clear operating view.",
    },
    {
      title: "Manual follow-ups",
      text: "Sales teams still remember follow-ups manually, update sheets, and chase managers for approvals instead of using automated workflows.",
    },
    {
      title: "Generic CRM limits",
      text: "Subscription CRMs force your business into fixed modules, fixed pricing, and fixed workflows that were not designed for your process.",
    },
    {
      title: "No true ownership",
      text: "You keep paying every month, but the system, data model, workflows, and access rules still belong to the platform — not your business.",
    },
  ];

  return (
    <section id="problem" className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute left-[-14rem] top-10 h-[28rem] w-[28rem] rounded-full bg-[#9de3ee]/25 blur-3xl" />
      <div className="pointer-events-none absolute right-[-12rem] bottom-[-8rem] h-[30rem] w-[30rem] rounded-full bg-[#dbeafe]/70 blur-3xl" />

      <div className="relative mx-auto grid max-w-[min(95vw,1600px)] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <Reveal>
          <SectionIntro
            eyebrow="The Problem"
            title="Your business has outgrown scattered tools."
            description="Most teams are not failing because they need another CRM subscription. They are struggling because their real business process is split across spreadsheets, WhatsApp, inboxes, calls, and manual reports."
            align="left"
          />
          <div className="rounded-[30px] border border-[#d7e1f2] bg-[#f8fbff] p-6 shadow-[0_18px_55px_rgba(15,23,42,0.07)]">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#1b7f93]">VisionCRM idea</p>
            <p className="mt-3 text-xl font-bold leading-8 text-[#0f214f]">
              HNX is not trying to sell another fixed CRM. The goal is to build a business operating system that your company owns.
            </p>
            <p className="mt-4 leading-7 text-[#465374]">
              Leads, sales, support, teams, workflows, reports, and AI assistance should run from one owned system — not from disconnected tools.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {painPoints.map((item) => (
              <motion.article
                key={item.title}
                whileHover={{ y: -6 }}
                className="group rounded-[28px] border border-[#d7e1f2] bg-gradient-to-br from-white to-[#f5fbff] p-6 shadow-[0_18px_50px_rgba(15,23,42,0.07)] transition hover:border-[#b9d7ea]"
              >
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-[#145cb7] shadow-sm ring-1 ring-[#d7e1f2]">
                  <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-[#0f214f]">{item.title}</h3>
                <p className="mt-3 leading-7 text-[#465374]">{item.text}</p>
              </motion.article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function WhatWeProvideSection() {
  const components = [
    {
      title: "Admin Control Room",
      description:
        "Create fields, configure pipelines, manage users, set permissions, and shape the CRM without changing code every time.",
      icon: UserRound,
      href: "/solutions/admin-control-room",
      cta: "Explore Admin Control",
    },
    {
      title: "CRM Core",
      description:
        "Leads, deals, customers, tickets, notes, tasks, and team activity in one clean daily workspace.",
      icon: Briefcase,
      href: "/solutions/crmcore",
      cta: "Explore CRM Core",
    },
    {
      title: "Workflow Engine",
      description:
        "Trigger → condition → action automation for assignments, reminders, escalations, approvals, and stage updates.",
      icon: Workflow,
      href: "/solutions/workflow-engine",
      cta: "Explore Workflow Engine",
    },
    {
      title: "AI Intelligence Layer",
      description:
        "Lead scoring, next best action, report explanation, smart message drafts, and sales insights based on CRM data.",
      icon: Bot,
      href: "/solutions/ai-intelligence",
      cta: "Explore AI Intelligence",
    },
    {
      title: "Realtime Dashboards",
      description:
        "Revenue, leads, conversion, tasks, support, and team performance visible without manual spreadsheet reporting.",
      icon: TrendingUp,
      href: "/solutions/dashboards-reports",
      cta: "Explore Dashboards",
    },
  ];

  return (
    <section id="custom-crm" className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div className="absolute right-0 top-16 h-80 w-80 rounded-full bg-[#9de3ee]/45 blur-3xl" />
      <div className="absolute left-[-12rem] bottom-[-10rem] h-80 w-80 rounded-full bg-blue-100/70 blur-3xl" />
      <div className="relative mx-auto max-w-[min(95vw,1600px)]">
        <Reveal>
          <SectionIntro
            eyebrow="What We Provide"
            title="A CRM that becomes your business operating system."
            description="The system is built around the way your company already works: your modules, your fields, your roles, your workflows, your dashboards, and your AI layer."
          />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {components.map((item) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                whileHover={{ y: -8 }}
                className="group relative flex min-h-[28rem] flex-col overflow-hidden rounded-[30px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.075)] transition hover:border-[#b9d7ea] hover:shadow-[0_28px_80px_rgba(20,92,183,0.11)]"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#19b7c5] to-[#145cb7] opacity-80" />

                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-[#eefcff] to-[#eaf2ff] text-[#145cb7] shadow-sm ring-1 ring-[#d7e1f2]">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>

                <h3 className="mt-7 text-xl font-bold text-[#0f214f]">{item.title}</h3>

                <p className="mt-3 leading-7 text-[#465374]">{item.description}</p>

                <div className="mt-auto pt-6">
                  <Link
                    href={item.href}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#c8e2ea] bg-gradient-to-r from-[#19b7c5] to-[#145cb7] px-4 py-3 text-sm font-bold text-white shadow-[0_14px_34px_rgba(20,92,183,0.18)] transition hover:from-[#15a6b3] hover:to-[#0f4fa4]"
                  >
                    {item.cta}
                    <ChevronDown className="h-4 w-4 -rotate-90" aria-hidden="true" />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function OwnershipSection() {
  const ownershipPoints = [
    "Built around your exact process instead of forcing your team into generic modules",
    "Your fields, roles, permissions, dashboards, and workflows stay under your control",
    "Workflow automation and AI can be added step-by-step as your operations mature",
    "You are not locked into per-user licensing that becomes more expensive as your team grows",
  ];

  return (
    <section id="ownership" className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[min(95vw,1600px)]">
        <Reveal>
          <SectionIntro
            eyebrow="CRM Ownership"
            title="Stop renting your CRM. Start owning your system."
            description="A rented CRM gives you access. An owned CRM gives you control: your data model, your business logic, your workflow engine, your dashboards, and your roadmap."
          />
        </Reveal>

        <div className="mx-auto max-w-4xl text-center text-lg leading-8 text-[#465374]">
          <p>
            HNX turns your internal process into a custom CRM that your business can operate, extend, and improve over time.
          </p>
          <p className="mt-4 font-semibold text-[#0f214f]">
            Build once. Own the system. Automate the work. Improve it as your business grows.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <motion.article
            whileHover={{ y: -8 }}
            className="rounded-[34px] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-7 shadow-[0_20px_70px_rgba(15,23,42,0.075)]"
          >
            <h3 className="text-2xl font-bold text-[#0f214f]">Renting Generic CRM</h3>
            <ul className="mt-6 space-y-4">
              {ownedCrmComparison.renting.map((item) => (
                <li key={item} className="flex gap-3 text-[#465374]">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-slate-400" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.article>

          <motion.article
            whileHover={{ y: -8 }}
            className="relative overflow-hidden rounded-[34px] border border-[#b9d7ea] bg-gradient-to-br from-[#f5fbff] via-white to-[#eefcff] p-7 shadow-[0_24px_80px_rgba(20,92,183,0.11)]"
          >
            <div className="absolute right-[-5rem] top-[-5rem] h-44 w-44 rounded-full bg-[#9de3ee]/50 blur-3xl" />
            <h3 className="relative text-2xl font-bold text-[#0f214f]">Owning HNX CRM Systems</h3>
            <ul className="relative mt-6 space-y-4">
              {ownershipPoints.map((item) => (
                <li key={item} className="flex gap-3 text-[#334766]">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#1593b5]" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        </div>
      </div>
    </section>
  );
}

function HowItWorksBehindScenesSection() {
  const flow = ["User Action", "API", "Event Trigger", "Workflow Engine", "AI Analysis", "Action Execution", "Realtime Update"];

  return (
    <section id="how-it-works" className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d7e1f2] to-transparent" />
      <div className="mx-auto max-w-[min(95vw,1600px)]">
        <Reveal>
          <SectionIntro
            eyebrow="How It Works"
            title="Behind every click, the system does the operational work."
            description="When a user creates a lead, updates a stage, receives a payment, or raises a ticket, HNX can trigger rules, run AI analysis, notify the right person, and update dashboards instantly."
          />
        </Reveal>

        <div className="grid gap-3 lg:grid-cols-7">
          {flow.map((item, index) => (
            <motion.div
              key={item}
              whileHover={{ y: -5 }}
              className="relative rounded-2xl border border-[#d7e1f2] bg-white p-4 text-center shadow-sm"
            >
              <span className="mx-auto grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-[#19b7c5] to-[#145cb7] text-sm font-bold text-white shadow-[0_12px_28px_rgba(20,92,183,0.18)]">
                {index + 1}
              </span>
              <p className="mt-3 text-sm font-bold leading-6 text-[#0f214f]">{item}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[30px] border border-[#d7e1f2] bg-white p-6 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1b7f93]">Real scenario</p>
            <h3 className="mt-3 text-2xl font-bold text-[#0f214f]">A sales person creates a lead.</h3>
            <p className="mt-4 leading-7 text-[#465374]">
              Fill form → save. Behind the scenes, the lead is assigned, a notification is sent, a follow-up task is created, and the dashboard updates — without manual work.
            </p>
          </div>

          <div className="rounded-[30px] border border-[#b9d7ea] bg-gradient-to-br from-[#f5fbff] to-white p-6 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#145cb7]">What this means</p>
            <p className="mt-3 text-lg font-semibold leading-8 text-[#0f214f]">
              HNX is designed like an automation brain for your business: every important action can become a rule, every rule can create work, and every update can appear live on the dashboard.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function RolePermissionSection() {
  return (
    <section id="roles" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[min(95vw,1600px)]">
        <Reveal>
          <SectionIntro
            eyebrow="Admin Control Room"
            title="Control fields, users, roles, and permissions from one place."
            description="The admin layer is the control room of the CRM. It defines what your team can see, edit, approve, assign, report, and automate."
          />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {roleCards.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>

        <div className="mt-8 rounded-[32px] border border-[#d7e1f2] bg-gradient-to-br from-[#f8fbff] to-white p-6 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1b7f93]">Permission examples</p>
              <h3 className="mt-2 text-xl font-bold text-[#0f214f]">Access control for real teams</h3>
            </div>
            <span className="rounded-full border border-[#c8e2ea] bg-white px-4 py-2 text-sm font-bold text-[#1f8ea1]">
              Role-based access
            </span>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {permissionExamples.map((item) => (
              <span key={item} className="rounded-full border border-[#d7e1f2] bg-white px-3 py-2 text-sm font-semibold text-[#334766] shadow-sm">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AutomationRulesSection() {
  const ruleBlocks = [
    ["Trigger", "Lead created, payment received, ticket delayed, deal moved, form submitted"],
    ["Condition", "Budget above threshold, region match, stage delay, role access, priority level"],
    ["Action", "Assign user, send WhatsApp/email, create task, update stage, notify manager"],
  ];

  return (
    <section id="automation" className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div className="absolute right-[-12rem] top-8 h-80 w-80 rounded-full bg-[#9de3ee]/35 blur-3xl" />
      <div className="mx-auto max-w-[min(95vw,1600px)]">
        <Reveal>
          <SectionIntro
            eyebrow="Workflow Engine"
            title="Automate the repetitive work before it slows your team down."
            description="The workflow engine executes your business rules automatically. It is the difference between a CRM that only stores data and a CRM that actually runs operations."
          />
        </Reveal>

        <div className="mx-auto mb-10 grid max-w-5xl gap-4 md:grid-cols-3">
          {ruleBlocks.map(([title, text], index) => (
            <motion.div key={title} whileHover={{ y: -6 }} className="rounded-[28px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.07)]">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-[#19b7c5] to-[#145cb7] font-bold text-white">
                {index + 1}
              </span>
              <p className="mt-5 text-lg font-bold text-[#0f214f]">{title}</p>
              <p className="mt-3 leading-7 text-[#465374]">{text}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {automationExamples.map((item) => (
            <div key={item} className="rounded-2xl border border-[#d7e1f2] bg-white p-5 shadow-sm transition hover:border-[#b9d7ea] hover:bg-[#f8fbff]">
              <Workflow className="h-5 w-5 text-[#1593b5]" aria-hidden="true" />
              <p className="mt-3 font-semibold leading-7 text-[#334766]">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AiCrmSection() {
  return (
    <section id="ai-crm" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-[min(95vw,1600px)] gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <SectionIntro
            eyebrow="AI Intelligence Layer"
            title="AI that helps your team decide what to do next."
            description="The workflow engine executes rules. The AI layer understands CRM data, finds patterns, explains reports, writes messages, scores leads, and suggests the next best action."
            align="left"
          />
          <div className="rounded-[32px] border border-[#c8e2ea] bg-gradient-to-br from-[#f5fbff] to-white p-6 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#1b7f93]">Example question</p>
            <p className="mt-3 text-2xl font-bold text-[#0f214f]">Which leads are most likely to convert today?</p>
            <p className="mt-4 leading-7 text-[#465374]">
              AI can check lead source, activity history, deal value, follow-up delay, communication tone, and pipeline movement to recommend priority leads instantly.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="grid gap-3 sm:grid-cols-2">
            {aiFeatures.map((item) => (
              <div key={item} className="rounded-2xl border border-[#d7e1f2] bg-white p-4 shadow-sm transition hover:border-[#b9d7ea] hover:bg-[#f8fbff]">
                <Bot className="h-5 w-5 text-[#145cb7]" aria-hidden="true" />
                <p className="mt-3 font-bold text-[#0f214f]">{item}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function IndustriesSection() {
  return (
    <section id="industries" className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute left-[-10rem] top-12 h-80 w-80 rounded-full bg-blue-100/70 blur-3xl" />
      <div className="mx-auto max-w-[min(95vw,1600px)]">
        <Reveal>
          <SectionIntro
            eyebrow="Industries"
            title="Same ownership model. Different CRM for every business."
            description="Real estate, education, healthcare, agencies, e-commerce, finance, events, SaaS, and support teams all need different workflows. HNX adapts the CRM to the industry, not the other way around."
          />
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industryCards.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExploreDemoCrmSection() {
  return (
    <section id="demo-crm-preview" className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 lg:px-8">
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.36, 0.58, 0.36] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[-10rem] top-8 h-80 w-80 rounded-full bg-[#9de3ee]/60 blur-3xl"
      />
      <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_80%_20%,rgba(20,92,183,0.10),transparent_32%),radial-gradient(circle_at_40%_70%,rgba(25,183,197,0.12),transparent_30%)]" />

      <div className="relative mx-auto grid max-w-[min(95vw,1600px)] gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <Reveal>
          <div className="rounded-[34px] border border-[#c8e2ea] bg-gradient-to-br from-[#f5fbff] via-white to-[#eefcff] p-7 shadow-[0_26px_90px_rgba(20,92,183,0.10)] sm:p-9">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#1b7f93]">Interactive demo</p>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-normal text-[#0f214f] sm:text-4xl lg:text-5xl">
              Show the client how their CRM would actually work.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#465374]">
              The demo is not just a pretty dashboard. It explains how HNX can manage leads, customers, permissions, workflows, dashboards, automation, and AI in one owned platform.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button href="/crm-demo" size="lg" showArrow>
                Open CRM Systems
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                Customize This Demo
              </Button>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="rounded-[34px] border border-[#d7e1f2] bg-white p-4 shadow-[0_34px_100px_rgba(15,23,42,0.12)]">
            <div className="rounded-[28px] border border-white/10 bg-[#06142f] p-5 text-white">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#9de3ee]">Demo mode</p>
                  <h3 className="mt-2 text-xl font-bold">Industry CRM switcher</h3>
                </div>
                <span className="rounded-full border border-[#9de3ee]/30 bg-[#9de3ee]/10 px-3 py-1 text-xs font-bold text-[#d8fbff]">
                  Live preview
                </span>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  "Education admissions",
                  "Healthcare appointments",
                  "Real estate site visits",
                  "Finance policy pipeline",
                  "Events ticketing",
                  "SaaS trial pipeline",
                ].map((item, index) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                    <div className="flex items-center gap-3">
                      <span className="grid h-8 w-8 place-items-center rounded-full bg-[#19b7c5]/15 text-sm font-bold text-[#d8fbff]">
                        {index + 1}
                      </span>
                      <p className="text-sm font-bold text-white">{item}</p>
                    </div>
                    <div className="mt-4 h-2 rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#19b7c5] to-[#145cb7]"
                        style={{ width: `${62 + index * 5}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function RoiCalculatorPreviewSection() {
  return (
    <section id="roi-preview" className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div className="absolute left-0 top-10 h-80 w-80 rounded-full bg-blue-100/70 blur-3xl" />
      <div className="relative mx-auto grid max-w-[min(95vw,1600px)] gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <Reveal>
          <div className="rounded-[34px] border border-[#d7e1f2] bg-white p-5 shadow-[0_34px_100px_rgba(15,23,42,0.10)]">
            <div className="rounded-[28px] border border-[#145cb7]/20 bg-gradient-to-br from-[#145cb7] to-[#19b7c5] p-6 text-white">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#d8fbff]">ROI calculator</p>
                  <h3 className="mt-2 text-2xl font-bold">Rent vs own CRM estimate</h3>
                </div>
                <Calculator className="h-8 w-8 text-[#d8fbff]" aria-hidden="true" />
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  ["Manual hours saved", "Tasks automated daily"],
                  ["Follow-ups recovered", "Missed leads reduced"],
                  ["Rented CRM cost", "1, 3, and 5-year view"],
                  ["Ownership value", "Build once, own forever"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-white/15 bg-white/[0.12] p-4">
                    <p className="text-sm font-bold text-white">{label}</p>
                    <p className="mt-2 text-sm text-[#d8fbff]">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#1b7f93]">Business value</p>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-normal text-[#0f214f] sm:text-4xl lg:text-5xl">
              See the cost of renting compared with owning.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#465374]">
              Estimate the cost of monthly CRM subscriptions, manual follow-up effort, lost leads, and reporting delays — then compare it with a custom CRM built around your process.
            </p>
            <div className="mt-7">
              <Button href="/roi-calculator" size="lg" showArrow>
                Calculate My CRM ROI
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function BuildPlansSection() {
  return (
    <section id="pricing" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[min(95vw,1600px)]">
        <Reveal>
          <SectionIntro
            eyebrow="Build Plans"
            title="Start with core CRM. Grow into automation and AI."
            description="Every build is scoped after understanding your modules, fields, permissions, reports, integrations, workflow rules, and AI requirements."
          />
        </Reveal>
        <div className="grid gap-5 lg:grid-cols-4">
          {buildPlans.map((plan) => (
            <motion.article
              key={plan.name}
              whileHover={{ y: -8 }}
              className={`rounded-[30px] border p-6 shadow-[0_20px_70px_rgba(15,23,42,0.08)] ${
                plan.featured ? "border-[#145cb7]/20 bg-gradient-to-br from-[#145cb7] to-[#19b7c5] text-white" : "border-[#d7e1f2] bg-white"
              }`}
            >
              <span className={`rounded-full px-3 py-1 text-xs font-bold ${plan.featured ? "bg-white/[0.18] text-white" : "bg-[#f5fbff] text-[#1b7f93]"}`}>
                {plan.label}
              </span>
              <h3 className="mt-5 text-2xl font-bold">{plan.name}</h3>
              <p className={`mt-3 min-h-28 leading-7 ${plan.featured ? "text-[#d8fbff]" : "text-[#465374]"}`}>{plan.description}</p>
              <ul className="mt-5 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className={`flex gap-2 text-sm ${plan.featured ? "text-[#d8fbff]" : "text-[#465374]"}`}>
                    <Check className={`mt-0.5 h-4 w-4 shrink-0 ${plan.featured ? "text-white" : "text-[#1593b5]"}`} aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-[min(95vw,1600px)] gap-8 lg:grid-cols-[1.08fr_0.92fr]">
        <Reveal>
          <div className="rounded-[34px] border border-[#c8e2ea] bg-gradient-to-br from-[#f5fbff] via-white to-[#eefcff] p-6 shadow-[0_24px_80px_rgba(15,23,42,0.10)] sm:p-8">
            <SectionIntro
              eyebrow="Contact"
              title="Book your CRM strategy call."
              description="Tell us how your business currently manages leads, customers, follow-ups, sales, support, reports, and team work. We will map that process into a CRM your business can own."
              align="left"
            />
            <form className="grid gap-4 sm:grid-cols-2">
              {[
                ["Full Name", "text"],
                ["Business Email", "email"],
                ["Phone / WhatsApp", "tel"],
                ["Company Name", "text"],
                ["Business Type", "text"],
              ].map(([label, type]) => (
                <div key={label}>
                  <label htmlFor={label} className="mb-2 block text-sm font-semibold text-[#334766]">
                    {label}
                  </label>
                  <input
                    id={label}
                    type={type}
                    suppressHydrationWarning
                    className="h-12 w-full rounded-2xl border border-[#d7e1f2] bg-white px-4 text-sm text-[#0f214f] outline-none transition placeholder:text-slate-400 focus:border-[#19b7c5] focus:ring-4 focus:ring-[#9de3ee]/30"
                    placeholder={label}
                  />
                </div>
              ))}
              {["Current Lead Management Process", "Biggest CRM Challenge"].map((label) => (
                <div key={label} className="sm:col-span-2">
                  <label htmlFor={label} className="mb-2 block text-sm font-semibold text-[#334766]">
                    {label}
                  </label>
                  <textarea
                    id={label}
                    rows={4}
                    suppressHydrationWarning
                    className="w-full resize-none rounded-2xl border border-[#d7e1f2] bg-white px-4 py-3 text-sm text-[#0f214f] outline-none transition placeholder:text-slate-400 focus:border-[#19b7c5] focus:ring-4 focus:ring-[#9de3ee]/30"
                    placeholder={label}
                  />
                </div>
              ))}
              <Button type="submit" size="lg" className="sm:col-span-2" showArrow>
                Book a CRM Strategy Call
              </Button>
            </form>
          </div>
        </Reveal>
        <Reveal>
          <div className="grid gap-5">
            <ImageFrame src="/images/consultant.jpg" alt="CRM consultant" label="CRM consultant" className="h-80" />
            <div className="grid gap-3 sm:grid-cols-2">
              {trustCards.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-2xl border border-[#d7e1f2] bg-white p-4 shadow-sm">
                    <Icon className="h-5 w-5 text-[#145cb7]" aria-hidden="true" />
                    <p className="mt-3 text-sm font-bold text-[#0f214f]">{item.title}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[min(95vw,1600px)] rounded-[38px] border border-[#145cb7]/20 bg-gradient-to-br from-[#06142f] via-[#0f214f] to-[#145cb7] p-8 text-center text-white shadow-[0_30px_110px_rgba(15,23,42,0.18)] sm:p-12">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#9de3ee]">Final pitch</p>
        <h2 className="mx-auto mt-4 max-w-4xl text-balance text-3xl font-bold tracking-normal sm:text-4xl lg:text-6xl">
          Stop renting your CRM. Start owning your system.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#d8fbff]">
          HNX combines automation, AI intelligence, dashboards, permissions, and full ownership into one custom CRM built around your business.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/contact" size="lg" showArrow className="!bg-white !text-[#0f214f] hover:!bg-[#f5fbff]">
            Book a CRM Strategy Call
          </Button>
          <Button href="/crm-demo" variant="secondary" size="lg" className="!border-white/20 !bg-white/10 !text-white hover:!bg-white/15">
            View CRM Systems
          </Button>
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <SectionIntro
            eyebrow="FAQ"
            title="Questions clients usually ask before building an owned CRM."
            description="Clear answers for teams comparing generic CRM subscriptions with a custom CRM build."
          />
        </Reveal>
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question} className="overflow-hidden rounded-2xl border border-[#d7e1f2] bg-white shadow-sm">
                <button
                  type="button"
                  suppressHydrationWarning
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-bold text-[#0f214f] transition hover:bg-[#f8fbff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9de3ee]"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`h-5 w-5 shrink-0 text-[#145cb7] transition ${isOpen ? "rotate-180" : ""}`} aria-hidden="true" />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.26, ease: "easeInOut" }}
                    >
                      <p className="border-t border-[#d7e1f2] px-5 py-5 leading-7 text-[#465374]">{faq.answer}</p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
