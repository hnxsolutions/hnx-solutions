"use client";

import { useMemo, useState, type ReactNode } from "react";
import type { IconType } from "react-icons";
import {
  HiBriefcase,
  HiChartBar,
  HiCheck,
  HiChevronRight,
  HiCog,
  HiCubeTransparent,
  HiDeviceMobile,
  HiDocumentText,
  HiGlobeAlt,
  HiLightningBolt,
  HiLockClosed,
  HiShieldCheck,
  HiSparkles,
  HiTrendingUp,
  HiUsers,
  HiViewGrid,
} from "react-icons/hi";
import { HomeSectionShell } from "./HomeSectionPrimitives";

const solutions = [
  {
    title: "Website",
    tabLabel: "Website",
    badge: "Most Popular",
    icon: HiGlobeAlt,
    heading: "Website",
    description:
      "Build a fast, secure, and SEO-friendly website that represents your brand and converts visitors into customers.",
    tags: ["SEO Optimized", "Secure by Default", "Lightning Fast"],
    benefits: [
      "Custom, responsive design",
      "Optimized for performance & SEO",
      "CMS for easy content updates",
    ],
    outcomes: [
      "Stronger online presence",
      "Higher engagement & leads",
      "Scalable foundation for growth",
    ],
    cta: "Start with Website",
    preview: "website",
  },
  {
    title: "Mobile App",
    tabLabel: "Mobile App",
    badge: "Built for Growth",
    icon: HiDeviceMobile,
    heading: "Mobile App",
    description:
      "Engage your customers on the go with powerful, intuitive, and high-performance mobile applications.",
    tags: ["iOS & Android", "Clean UX", "Push Ready"],
    benefits: [
      "Native iOS & Android app experience",
      "User-friendly and modern UI/UX",
      "Secure, scalable, and reliable",
    ],
    outcomes: [
      "Stronger customer engagement",
      "Higher retention & loyalty",
      "New revenue opportunities",
    ],
    cta: "Start with Mobile App",
    preview: "mobile",
  },
  {
    title: "CRM",
    tabLabel: "CRM",
    badge: "Smarter Relationships",
    icon: HiUsers,
    heading: "CRM",
    description:
      "Manage leads, track deals, and build stronger relationships with a CRM built for your sales and support teams.",
    tags: ["Lead Tracking", "Sales Pipeline", "Automation"],
    benefits: [
      "Lead and pipeline management",
      "Sales automation and follow-ups",
      "Reports and performance insights",
    ],
    outcomes: [
      "More closed deals",
      "Better team productivity",
      "Stronger customer relationships",
    ],
    cta: "Start with CRM",
    preview: "crm",
  },
  {
    title: "Portal",
    tabLabel: "Portal",
    badge: "Seamless Access",
    icon: HiViewGrid,
    heading: "Portal",
    description:
      "Give your users, clients, or partners a centralized place to access information, services, and support.",
    tags: ["Role-Based", "Self-Service", "Secure"],
    benefits: [
      "Role-based dashboards",
      "Self-service and ticketing",
      "Secure document and data access",
    ],
    outcomes: [
      "Better user experience",
      "Reduced support workload",
      "Stronger partner engagement",
    ],
    cta: "Start with Portal",
    preview: "portal",
  },
  {
    title: "Full Business Suite",
    tabLabel: "Full Business Suite",
    badge: "All-in-One Growth",
    icon: HiCubeTransparent,
    heading: "Full Business Suite",
    description:
      "Get everything you need to run, grow, and scale your business in one integrated digital ecosystem.",
    tags: ["Website", "App", "CRM", "Portal"],
    benefits: [
      "Website, app, CRM, and portal",
      "Automation and integrations",
      "Analytics and reporting",
    ],
    outcomes: [
      "Streamlined operations",
      "Increased efficiency and sales",
      "Sustainable business growth",
    ],
    cta: "Start Your Transformation",
    preview: "suite",
  },
];

const suitePreviewItems: Array<{
  icon: IconType;
  label: string;
  position: string;
}> = [
  {
    icon: HiGlobeAlt,
    label: "Website",
    position: "-top-7 left-1/2 -translate-x-1/2",
  },
  {
    icon: HiDeviceMobile,
    label: "Mobile App",
    position: "right-[-72px] top-1/2 -translate-y-1/2",
  },
  {
    icon: HiUsers,
    label: "CRM",
    position: "-bottom-7 left-1/2 -translate-x-1/2",
  },
  {
    icon: HiViewGrid,
    label: "Portal",
    position: "left-[-72px] top-1/2 -translate-y-1/2",
  },
];

export default function HomeStartingPointSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = useMemo(() => solutions[activeIndex], [activeIndex]);
  const ActiveIcon = active.icon;

  return (
    <HomeSectionShell className="overflow-hidden bg-[radial-gradient(circle_at_top,#f5f8ff_0%,#ffffff_46%,#f8fbff_100%)] py-16 dark:bg-slate-950">
      <div className="mx-auto max-w-[1440px]">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/90 px-4 py-2 text-[11px] font-black uppercase tracking-[0.22em] text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/[0.05] dark:text-slate-300">
            <HiSparkles className="text-blue-600" />
            Start Smart.{" "}
            <span className="text-blue-600">Scale Confidently.</span>
          </div>

          <h2 className="mt-5 text-4xl font-black tracking-[-0.055em] text-slate-950 sm:text-5xl lg:text-6xl dark:text-white">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              Starting Point
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base font-semibold leading-7 text-slate-600 dark:text-slate-300">
            Every journey is different. Choose the solution that fits your goals
            today — we&apos;ll help you scale tomorrow.
          </p>
        </div>

        <div className="mt-10 rounded-[30px] border border-slate-200 bg-white/85 shadow-[0_24px_80px_rgba(15,23,42,0.07)] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04]">
          <div className="grid grid-cols-2 border-b border-slate-200 sm:grid-cols-3 lg:grid-cols-5 dark:border-white/10">
            {solutions.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeIndex === index;

              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={[
                    "group relative flex min-h-[96px] flex-col items-center justify-center gap-2 border-r border-slate-200 px-4 text-center transition duration-300 last:border-r-0 dark:border-white/10",
                    isActive
                      ? "bg-white text-blue-600 dark:bg-white/[0.08] dark:text-blue-300"
                      : "text-slate-500 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-white/[0.04] dark:hover:text-white",
                  ].join(" ")}
                >
                  <Icon className="text-2xl" />
                  <span className="text-sm font-black">{item.tabLabel}</span>

                  {isActive ? (
                    <span className="absolute bottom-0 left-8 right-8 h-0.5 rounded-full bg-blue-600" />
                  ) : null}
                </button>
              );
            })}
          </div>

          <div className="grid gap-6 p-5 lg:grid-cols-[0.72fr_1.55fr]">
            <div className="rounded-[26px] bg-white p-6 dark:bg-slate-950/60">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-blue-700 dark:border-blue-400/20 dark:bg-blue-500/10 dark:text-blue-300">
                <HiSparkles />
                {active.badge}
              </div>

              <div className="mt-5 flex items-center gap-4">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-100 dark:bg-blue-500/10 dark:text-blue-300 dark:ring-blue-400/20">
                  <ActiveIcon className="text-3xl" />
                </span>

                <h3 className="text-4xl font-black tracking-[-0.05em] text-slate-950 dark:text-white">
                  {active.heading}
                </h3>
              </div>

              <p className="mt-4 max-w-lg text-sm font-semibold leading-7 text-slate-600 dark:text-slate-300">
                {active.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {active.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="my-6 h-px bg-slate-100 dark:bg-white/10" />

              <div>
                <h4 className="text-base font-black text-blue-600 dark:text-blue-300">
                  What you get
                </h4>

                <div className="mt-4 space-y-3">
                  {active.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-3">
                      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-300">
                        <HiCheck className="text-sm" />
                      </span>
                      <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="my-6 h-px bg-slate-100 dark:bg-white/10" />

              <div>
                <h4 className="text-base font-black text-blue-600 dark:text-blue-300">
                  Outcomes
                </h4>

                <div className="mt-4 space-y-3">
                  {active.outcomes.map((outcome) => (
                    <div key={outcome} className="flex items-center gap-3">
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gradient-to-br from-blue-500 to-violet-500 text-white">
                        <HiCheck className="text-xs" />
                      </span>
                      <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">
                        {outcome}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="button"
                className="mt-7 inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-3 text-sm font-black text-white shadow-[0_18px_40px_rgba(79,70,229,0.22)] transition hover:-translate-y-0.5"
              >
                {active.cta}
                <HiChevronRight className="text-lg" />
              </button>
            </div>

            <div className="rounded-[26px] bg-[#fbfdff] p-5 dark:bg-slate-950/60">
              <PreviewPanel type={active.preview} />
            </div>
          </div>
        </div>
      </div>
    </HomeSectionShell>
  );
}

function PreviewPanel({ type }: { type: string }) {
  if (type === "mobile") return <MobilePreview />;
  if (type === "crm") return <CrmPreview />;
  if (type === "portal") return <PortalPreview />;
  if (type === "suite") return <SuitePreview />;
  return <WebsitePreview />;
}

function BrowserShell({ children }: { children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-slate-950">
      <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 dark:border-white/10">
        <div className="font-black text-slate-950 dark:text-white">
          <span className="text-blue-600">HNX</span>{" "}
          <span className="text-sm">Solutions</span>
        </div>

        <div className="hidden items-center gap-7 text-[11px] font-bold text-slate-500 md:flex dark:text-slate-400">
          <span>Home</span>
          <span>Services</span>
          <span>About</span>
          <span>Blog</span>
          <span>Contact</span>
        </div>

        <button className="rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 px-4 py-2 text-[11px] font-black text-white">
          Get Started
        </button>
      </div>

      {children}
    </div>
  );
}

function WebsitePreview() {
  return (
    <BrowserShell>
      <div className="grid gap-6 p-6 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <h4 className="text-3xl font-black tracking-[-0.04em] text-slate-950 dark:text-white">
            Modern Solutions.
            <span className="block bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              Measurable Impact.
            </span>
          </h4>

          <p className="mt-4 max-w-md text-sm font-semibold leading-6 text-slate-500 dark:text-slate-400">
            We build digital experiences that drive growth and deliver real
            results.
          </p>

          <div className="mt-6 flex gap-3">
            <button className="rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 px-4 py-2 text-xs font-black text-white">
              Learn More
            </button>
            <button className="rounded-lg border border-slate-200 px-4 py-2 text-xs font-black text-slate-600 dark:border-white/10 dark:text-slate-300">
              Our Services
            </button>
          </div>
        </div>

        <SoftVisual icon={<HiTrendingUp />} />
      </div>

      <PreviewMetrics
        items={[
          ["Performance", "+45%"],
          ["SEO Visibility", "+120%"],
          ["Leads Generated", "+200%"],
          ["Page Speed", "98/100"],
        ]}
      />
    </BrowserShell>
  );
}

function MobilePreview() {
  return (
    <div className="grid min-h-[360px] gap-6 rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm lg:grid-cols-[0.85fr_1fr] dark:border-white/10 dark:bg-slate-950">
      <div>
        <h4 className="text-3xl font-black tracking-[-0.04em] text-slate-950 dark:text-white">
          Mobile Experience.
          <span className="block bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
            Built for Users.
          </span>
        </h4>

        <p className="mt-4 max-w-sm text-sm font-semibold leading-6 text-slate-500 dark:text-slate-400">
          Not a dashboard — a real app interface with onboarding, quick actions,
          bottom navigation, alerts, and clean user flows.
        </p>

        <div className="mt-6 grid gap-3">
          {[
            ["Beautiful UI/UX", "Designed for delight and engagement"],
            ["High Performance", "Fast, smooth, and optimized"],
            ["Secure & Reliable", "Built with the latest security standards"],
            ["Scalable Architecture", "Grow your app without limitations"],
          ].map(([title, text]) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/[0.04]"
            >
              <p className="text-sm font-black text-slate-950 dark:text-white">
                {title}
              </p>
              <p className="mt-1 text-xs font-semibold text-slate-500 dark:text-slate-400">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center">
        <PhoneMockup />
      </div>
    </div>
  );
}

function CrmPreview() {
  return (
    <BrowserShell>
      <div className="p-6">
        <div className="grid gap-4 sm:grid-cols-4">
          {[
            ["Sales Leads", "2,450"],
            ["Deals in Pipeline", "830"],
            ["Won Deals", "320"],
            ["Revenue", "$245K"],
          ].map(([label, value]) => (
            <MetricCard key={label} label={label} value={value} />
          ))}
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_0.8fr]">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/[0.04]">
            <p className="text-sm font-black text-slate-950 dark:text-white">
              Pipeline Overview
            </p>

            <div className="mt-5 space-y-3">
              {["New Lead", "Contacted", "Qualified", "Proposal", "Won"].map(
                (stage, index) => (
                  <div key={stage}>
                    <div className="mb-1 flex justify-between text-xs font-bold text-slate-500">
                      <span>{stage}</span>
                      <span>{[268, 190, 132, 76, 32][index]}</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-100 dark:bg-white/10">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-violet-500"
                        style={{ width: `${90 - index * 12}%` }}
                      />
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/[0.04]">
            <p className="text-sm font-black text-slate-950 dark:text-white">
              Recent Activity
            </p>

            <div className="mt-4 space-y-3">
              {["New lead added", "Follow-up email sent", "Deal updated"].map(
                (item) => (
                  <div key={item} className="rounded-xl bg-slate-50 p-3 dark:bg-white/[0.04]">
                    <p className="text-xs font-bold text-slate-600 dark:text-slate-300">
                      {item}
                    </p>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </BrowserShell>
  );
}

function PortalPreview() {
  return (
    <BrowserShell>
      <div className="grid gap-5 p-6 lg:grid-cols-[0.75fr_1fr]">
        <div className="rounded-2xl bg-slate-950 p-5 text-white dark:bg-white dark:text-slate-950">
          <p className="text-lg font-black">Welcome back, John 👋</p>
          <p className="mt-2 text-sm font-semibold opacity-70">
            Here&apos;s what&apos;s happening in your portal.
          </p>

          <div className="mt-5 grid grid-cols-2 gap-3">
            {[
              ["7", "Requests"],
              ["2", "Approvals"],
              ["24", "Resources"],
              ["3", "Alerts"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl bg-white/10 p-4">
                <p className="text-2xl font-black">{value}</p>
                <p className="text-xs font-bold opacity-70">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          {[
            ["Website Support", "In Progress"],
            ["New Feature Request", "Open"],
            ["Billing Inquiry", "Resolved"],
          ].map(([title, status]) => (
            <div
              key={title}
              className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-white/[0.04]"
            >
              <p className="text-sm font-black text-slate-950 dark:text-white">
                {title}
              </p>
              <span className="rounded-full bg-blue-50 px-3 py-1 text-[10px] font-black text-blue-600 dark:bg-blue-500/10 dark:text-blue-300">
                {status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </BrowserShell>
  );
}

function SuitePreview() {
  return (
    <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-950">
      <div className="mx-auto grid max-w-xl place-items-center rounded-[28px] bg-slate-50 p-8 text-center dark:bg-white/[0.04]">
        <div className="relative grid h-52 w-52 place-items-center rounded-full border border-dashed border-blue-200 dark:border-blue-400/20">
          <div className="grid h-20 w-20 place-items-center rounded-3xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-lg">
            <HiCubeTransparent className="text-4xl" />
          </div>

          {suitePreviewItems.map(({ icon: Icon, label, position }) => (
            <div
              key={label}
              className={`absolute ${position} grid h-24 w-24 place-items-center rounded-3xl border border-slate-200 bg-white p-3 shadow-sm dark:border-white/10 dark:bg-slate-900`}
            >
              <Icon className="text-2xl text-blue-600 dark:text-blue-300" />
              <p className="text-[10px] font-black text-slate-700 dark:text-slate-300">
                {label}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-xl font-black text-slate-950 dark:text-white">
          Your Business Ecosystem
        </p>
        <p className="mt-2 max-w-sm text-sm font-semibold text-slate-500 dark:text-slate-400">
          Website, app, CRM, portal, automation, and reporting connected in one
          scalable system.
        </p>
      </div>
    </div>
  );
}

function SoftVisual({ icon }: { icon: ReactNode }) {
  return (
    <div className="relative hidden min-h-[220px] items-center justify-center rounded-3xl bg-gradient-to-br from-blue-50 via-violet-50 to-white lg:flex dark:from-blue-500/10 dark:via-violet-500/10 dark:to-transparent">
      <div className="grid h-24 w-24 place-items-center rounded-[28px] bg-gradient-to-br from-blue-600 to-violet-600 text-5xl text-white shadow-[0_24px_60px_rgba(79,70,229,0.25)]">
        {icon}
      </div>
    </div>
  );
}

function PreviewMetrics({ items }: { items: string[][] }) {
  return (
    <div className="grid gap-3 border-t border-slate-100 p-5 sm:grid-cols-4 dark:border-white/10">
      {items.map(([label, value]) => (
        <div key={label}>
          <p className="text-lg font-black text-slate-950 dark:text-white">
            {value}
          </p>
          <p className="mt-1 text-xs font-bold text-slate-500 dark:text-slate-400">
            {label}
          </p>
        </div>
      ))}
    </div>
  );
}

function MetricCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/[0.04]">
      <p className="text-xl font-black text-slate-950 dark:text-white">
        {value}
      </p>
      <p className="mt-1 text-xs font-bold text-slate-500 dark:text-slate-400">
        {label}
      </p>
    </div>
  );
}

function PhoneMockup() {
  return (
    <div className="relative h-[360px] w-[180px] rounded-[38px] border-[8px] border-slate-950 bg-white shadow-[0_28px_70px_rgba(15,23,42,0.18)] dark:bg-slate-950">
      <div className="mx-auto mt-3 h-5 w-20 rounded-full bg-slate-950 dark:bg-black" />

      <div className="p-4">
        <p className="mt-3 text-xs font-bold text-slate-500 dark:text-slate-400">
          Hello, Alex 👋
        </p>
        <p className="text-lg font-black text-slate-950 dark:text-white">
          Good Morning
        </p>

        <div className="mt-5 rounded-3xl bg-gradient-to-br from-blue-600 to-violet-600 p-4 text-white">
          <p className="text-xs font-bold opacity-80">Your Activity</p>
          <p className="mt-2 text-2xl font-black">120</p>
          <p className="text-xs font-semibold opacity-80">Tasks completed</p>
        </div>

        <div className="mt-4 grid grid-cols-4 gap-2">
          {[HiDocumentText, HiLightningBolt, HiUsers, HiCog].map((Icon, i) => (
            <span
              key={i}
              className="grid h-10 place-items-center rounded-2xl bg-slate-100 text-blue-600 dark:bg-white/10 dark:text-blue-300"
            >
              <Icon />
            </span>
          ))}
        </div>

        <div className="mt-5 space-y-3">
          {["Orders", "Messages", "Bookings"].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-3 dark:border-white/10 dark:bg-white/[0.04]"
            >
              <p className="text-xs font-black text-slate-950 dark:text-white">
                {item}
              </p>
              <div className="mt-2 h-1.5 rounded-full bg-slate-200 dark:bg-white/10" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}