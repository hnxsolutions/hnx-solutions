"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import type { IconType } from "react-icons";
import {
  HiArrowRight,
  HiCheck,
  HiClipboardList,
  HiCog,
  HiDocumentText,
  HiLightningBolt,
  HiMail,
  HiSparkles,
  HiTrendingUp,
  HiUsers,
} from "react-icons/hi";
import { HomeSectionShell } from "./HomeSectionPrimitives";

const startingCards = [
  {
    title: "Idea to Product",
    description: "Turn your idea into a real digital product.",
    cta: "Start with a Product",
    href: "/contact",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=90",
    imageAlt: "Team planning a digital product on a laptop",
    tone: "pink",
    icon: HiSparkles,
    preview: "product",
  },
  {
    title: "Business to Scale",
    description: "Optimize and grow your existing business systems.",
    cta: "Scale My Business",
    href: "/services/full-business-suite",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=90",
    imageAlt: "Business team reviewing growth dashboard",
    tone: "blue",
    icon: HiTrendingUp,
    preview: "scale",
  },
  {
    title: "Manual to Automated",
    description: "Connect tools, automate workflows, and simplify operations.",
    cta: "Automate My Work",
    href: "/solutions",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=90",
    imageAlt: "Professional working with automation dashboard",
    tone: "purple",
    icon: HiCog,
    preview: "automation",
  },
];

const toneStyles = {
  pink: {
    card:
      "border-pink-300/90 shadow-[0_16px_44px_rgba(236,72,153,0.14)] hover:shadow-[0_24px_66px_rgba(236,72,153,0.22)]",
    iconWrap:
      "bg-gradient-to-br from-pink-500 to-rose-500 text-white shadow-[0_12px_28px_rgba(236,72,153,0.34)]",
    glow: "bg-pink-400/16",
    button:
      "from-pink-500 to-rose-500 shadow-[0_14px_30px_rgba(236,72,153,0.28)]",
    soft: "bg-pink-50 text-pink-600",
    border: "border-pink-200",
    chart: "#ec4899",
    rowIcon: "bg-pink-500",
  },
  blue: {
    card:
      "border-blue-300/90 shadow-[0_16px_44px_rgba(37,99,235,0.14)] hover:shadow-[0_24px_66px_rgba(37,99,235,0.22)]",
    iconWrap:
      "bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-[0_12px_28px_rgba(37,99,235,0.34)]",
    glow: "bg-blue-400/16",
    button:
      "from-blue-600 to-indigo-600 shadow-[0_14px_30px_rgba(37,99,235,0.28)]",
    soft: "bg-blue-50 text-blue-600",
    border: "border-blue-200",
    chart: "#2563eb",
    rowIcon: "bg-blue-600",
  },
  purple: {
    card:
      "border-violet-300/90 shadow-[0_16px_44px_rgba(124,58,237,0.14)] hover:shadow-[0_24px_66px_rgba(124,58,237,0.24)]",
    iconWrap:
      "bg-gradient-to-br from-violet-500 to-purple-700 text-white shadow-[0_12px_28px_rgba(124,58,237,0.34)]",
    glow: "bg-violet-400/16",
    button:
      "from-violet-600 to-purple-700 shadow-[0_14px_30px_rgba(124,58,237,0.30)]",
    soft: "bg-violet-50 text-violet-600",
    border: "border-violet-200",
    chart: "#7c3aed",
    rowIcon: "bg-violet-600",
  },
};

type Tone = keyof typeof toneStyles;

export default function HomeStartingPointSection() {
  return (
    <HomeSectionShell className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_52%,#f5f7ff_100%)] py-9 text-slate-950 sm:py-10 lg:py-12 dark:bg-slate-950 dark:text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_14%,rgba(236,72,153,0.10),transparent_30%),radial-gradient(circle_at_86%_16%,rgba(37,99,235,0.12),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(124,58,237,0.08),transparent_36%)]" />

      <div className="relative mx-auto w-full max-w-[min(94vw,1280px)]">
        <div className="mx-auto max-w-5xl text-center">
          <span className="mx-auto inline-flex max-w-[92vw] items-center gap-2 rounded-full border border-violet-200/80 bg-white/85 px-4 py-2 text-[10px] font-black uppercase tracking-[0.14em] text-violet-700 shadow-[0_12px_30px_rgba(124,58,237,0.10)] backdrop-blur-xl sm:px-5 sm:text-[11px] sm:tracking-[0.18em] dark:border-white/10 dark:bg-white/[0.05] dark:text-violet-300">
            <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-violet-100 text-violet-700 dark:bg-violet-500/15 dark:text-violet-300">
              ✦
            </span>
            <span className="truncate">Start Smart. Scale Confidently.</span>
          </span>

          <h2 className="mx-auto mt-4 max-w-5xl text-center text-[38px] font-black leading-[0.95] tracking-[-0.06em] text-slate-950 sm:text-5xl lg:text-[54px] dark:text-white">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-600 bg-clip-text text-transparent">
              Starting Point
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-center text-sm font-semibold leading-6 text-slate-600 sm:text-base sm:leading-7 dark:text-slate-300">
            Choose the path that fits your business today — we&apos;ll help you
            scale tomorrow.
          </p>
        </div>

        <div className="mx-auto mt-7 grid max-w-[390px] items-stretch gap-5 sm:max-w-[430px] lg:max-w-[1120px] lg:grid-cols-3 lg:gap-4 xl:gap-5">
          {startingCards.map((card) => (
            <StartingCard key={card.title} {...card} tone={card.tone as Tone} />
          ))}
        </div>

        <Link
          href="/contact"
          className="mx-auto mt-7 flex max-w-[390px] items-center justify-between gap-3 rounded-full bg-white/88 px-4 py-3 shadow-[0_14px_40px_rgba(99,102,241,0.12)] ring-1 ring-violet-200/80 backdrop-blur-xl transition hover:-translate-y-0.5 hover:shadow-[0_20px_55px_rgba(99,102,241,0.16)] sm:max-w-xl sm:px-5 dark:bg-white/[0.05] dark:ring-white/10"
        >
          <div className="flex min-w-0 items-center gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-violet-50 text-violet-600 dark:bg-violet-500/10 dark:text-violet-300">
              <HiUsers className="text-lg" />
            </span>
            <p className="min-w-0 text-xs font-bold leading-5 text-slate-700 sm:text-sm dark:text-slate-200">
              Not sure where to begin?{" "}
              <span className="text-violet-700 dark:text-violet-300">
                Let&apos;s plan it together
              </span>
            </p>
          </div>
          <HiArrowRight className="shrink-0 text-xl text-violet-700 dark:text-violet-300" />
        </Link>
      </div>
    </HomeSectionShell>
  );
}

function StartingCard({
  title,
  description,
  cta,
  href,
  image,
  imageAlt,
  tone,
  icon: Icon,
  preview,
}: {
  title: string;
  description: string;
  cta: string;
  href: string;
  image: string;
  imageAlt: string;
  tone: Tone;
  icon: IconType;
  preview: string;
}) {
  const theme = toneStyles[tone];

  return (
    <article
      className={[
        "group relative flex h-full overflow-hidden rounded-[26px] border bg-white/88 p-3 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 dark:bg-white/[0.045]",
        theme.card,
      ].join(" ")}
    >
      <div
        className={[
          "pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full blur-3xl transition duration-500 group-hover:scale-110",
          theme.glow,
        ].join(" ")}
      />

      <div className="relative flex h-full w-full flex-col">
        <div className="flex items-start gap-3 px-1 pt-1 lg:min-h-[74px]">
          <span
            className={[
              "grid h-12 w-12 shrink-0 place-items-center rounded-[18px] text-2xl ring-4 ring-white/80 transition duration-500 group-hover:scale-105 dark:ring-white/10",
              theme.iconWrap,
            ].join(" ")}
          >
            <Icon />
          </span>

          <div className="min-w-0">
            <h3 className="text-xl font-black tracking-[-0.045em] text-slate-950 dark:text-white">
              {title}
            </h3>
            <p className="mt-1 max-w-[280px] text-sm font-semibold leading-5 text-slate-600 dark:text-slate-300">
              {description}
            </p>
          </div>
        </div>

        <div className="mt-3 overflow-hidden rounded-[20px] bg-slate-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] dark:bg-white/[0.04]">
          <img
            src={image}
            alt={imageAlt}
            className="h-[148px] w-full object-cover transition duration-700 group-hover:scale-[1.035] lg:h-[108px]"
            loading="lazy"
          />
        </div>

        <div className="mt-3 flex overflow-hidden rounded-[20px] bg-white/94 p-3 shadow-[inset_0_0_0_1px_rgba(148,163,184,0.14),0_10px_28px_rgba(15,23,42,0.055)] lg:h-[178px] dark:bg-white/[0.04]">
          <div className="w-full">
            {preview === "product" ? (
              <ProductPreview tone={tone} />
            ) : preview === "scale" ? (
              <ScalePreview tone={tone} />
            ) : (
              <AutomationPreview tone={tone} />
            )}
          </div>
        </div>

        <div className="h-3" />

        <Link
          href={href}
          className={[
            "relative mt-auto inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r px-6 py-3 text-sm font-black text-white transition hover:-translate-y-0.5",
            theme.button,
          ].join(" ")}
        >
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition duration-700 group-hover:translate-x-full" />
          <span className="relative">{cta}</span>
          <HiArrowRight className="relative text-lg" />
        </Link>
      </div>
    </article>
  );
}

function ProductPreview({ tone }: { tone: Tone }) {
  const theme = toneStyles[tone];

  return (
    <div className="h-full">
      <div className="flex items-center justify-between gap-3">
        <h4 className="text-xs font-black text-slate-950 dark:text-white">
          Product Roadmap
        </h4>
        <span
          className={[
            "shrink-0 rounded-full px-2.5 py-1 text-[9px] font-black",
            theme.soft,
          ].join(" ")}
        >
          62% Complete
        </span>
      </div>

      <div className="mt-2.5 grid grid-cols-[1fr_66px] gap-2 lg:h-[132px] lg:grid-cols-[1fr_72px]">
        <div className="space-y-1.5">
          <RoadmapRow label="User Research" status="Done" done tone={tone} />
          <RoadmapRow label="MVP Features" status="Progress" tone={tone} />
          <RoadmapRow label="Design System" status="Progress" tone={tone} />
        </div>

        <div
          className={[
            "grid place-items-center rounded-2xl border bg-white dark:bg-white/[0.04]",
            theme.border,
          ].join(" ")}
        >
          <div
            className="relative grid h-12 w-12 place-items-center rounded-full lg:h-14 lg:w-14"
            style={{
              background: `conic-gradient(${theme.chart} 0 62%, #f1f5f9 62% 100%)`,
            }}
          >
            <div className="grid h-9 w-9 place-items-center rounded-full bg-white text-center lg:h-10 lg:w-10 dark:bg-slate-950">
              <span className="text-[11px] font-black text-slate-950 lg:text-xs dark:text-white">
                62%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RoadmapRow({
  label,
  status,
  done = false,
  tone,
}: {
  label: string;
  status: string;
  done?: boolean;
  tone: Tone;
}) {
  const theme = toneStyles[tone];

  return (
    <div className="grid grid-cols-[1fr_auto] items-center gap-2 rounded-xl bg-slate-50 px-2 py-1.5 lg:px-2.5 dark:bg-white/[0.04]">
      <div className="flex min-w-0 items-center gap-2">
        <span
          className={[
            "grid h-4 w-4 shrink-0 place-items-center rounded-full text-[9px] text-white",
            done ? "bg-emerald-500" : theme.rowIcon,
          ].join(" ")}
        >
          <HiCheck />
        </span>
        <span className="truncate text-[10px] font-bold text-slate-600 dark:text-slate-300">
          {label}
        </span>
      </div>

      <span
        className={[
          "rounded-full px-1.5 py-0.5 text-[8px] font-black lg:px-2",
          done
            ? "bg-emerald-50 text-emerald-600"
            : "bg-amber-50 text-amber-600",
        ].join(" ")}
      >
        {status}
      </span>
    </div>
  );
}

function ScalePreview({ tone }: { tone: Tone }) {
  const theme = toneStyles[tone];

  return (
    <div className="h-full">
      <div className="flex items-center justify-between gap-3">
        <h4 className="text-xs font-black text-slate-950 dark:text-white">
          Business Overview
        </h4>
        <span className="shrink-0 rounded-full bg-slate-50 px-2.5 py-1 text-[9px] font-black text-slate-500 dark:bg-white/[0.04]">
          This Month
        </span>
      </div>

      <div className="mt-2.5 grid grid-cols-3 gap-1.5 lg:gap-2">
        <MiniMetric label="Revenue" value="$248K" delta="↑ 32%" />
        <MiniMetric label="Customers" value="12.5K" delta="↑ 24%" />
        <MiniMetric label="Efficiency" value="89%" delta="↑ 41%" />
      </div>

      <div
        className={[
          "mt-2.5 rounded-2xl border bg-white p-2 dark:bg-white/[0.04] lg:p-2.5",
          theme.border,
        ].join(" ")}
      >
        <MiniChart color={theme.chart} />
      </div>
    </div>
  );
}

function MiniMetric({
  label,
  value,
  delta,
}: {
  label: string;
  value: string;
  delta: string;
}) {
  return (
    <div className="rounded-2xl bg-slate-50 p-2 dark:bg-white/[0.04] lg:p-2.5">
      <p className="text-[8px] font-bold text-slate-400 lg:text-[9px]">
        {label}
      </p>
      <p className="mt-0.5 text-xs font-black text-slate-950 lg:text-sm dark:text-white">
        {value}
      </p>
      <p className="text-[8px] font-black text-emerald-500 lg:text-[9px]">
        {delta}
      </p>
    </div>
  );
}

function AutomationPreview({ tone }: { tone: Tone }) {
  const theme = toneStyles[tone];

  return (
    <div className="grid h-full gap-2 lg:grid-cols-[1fr_54px_1fr] lg:items-center">
      <div className="grid grid-cols-2 gap-1.5 lg:block lg:space-y-1.5">
        <AutomationNode icon={<HiDocumentText />} label="Forms" />
        <AutomationNode icon={<HiMail />} label="Email" />
        <AutomationNode icon={<HiClipboardList />} label="Sheets" />
        <AutomationNode icon={<HiUsers />} label="CRM" />
      </div>

      <div
        className={[
          "relative mx-auto hidden h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br text-2xl text-white shadow-[0_14px_30px_rgba(124,58,237,0.28)] lg:grid",
          theme.button,
        ].join(" ")}
      >
        <HiLightningBolt />
        <span className="absolute -left-4 top-1/2 h-px w-4 border-t border-dashed border-violet-300" />
        <span className="absolute -right-4 top-1/2 h-px w-4 border-t border-dashed border-violet-300" />
      </div>

      <div className="grid grid-cols-2 gap-1.5 lg:block lg:space-y-1.5">
        <AutomationAction label="Task Created" />
        <AutomationAction label="Data Sync" />
        <AutomationAction label="Notification Sent" />
        <AutomationAction label="Report Generated" />
      </div>
    </div>
  );
}

function AutomationNode({ icon, label }: { icon: ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 rounded-xl bg-slate-50 px-2 py-1.5 lg:px-2.5 dark:bg-white/[0.04]">
      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-lg bg-white text-blue-600 shadow-sm dark:bg-white/[0.06]">
        {icon}
      </span>
      <span className="truncate text-[10px] font-bold text-slate-600 dark:text-slate-300">
        {label}
      </span>
    </div>
  );
}

function AutomationAction({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-between gap-2 rounded-xl bg-slate-50 px-2 py-1.5 lg:px-2.5 dark:bg-white/[0.04]">
      <span className="truncate text-[10px] font-bold text-slate-600 dark:text-slate-300">
        {label}
      </span>
      <HiCheck className="shrink-0 text-emerald-500" />
    </div>
  );
}

function MiniChart({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 420 95" className="h-[58px] w-full lg:h-[66px]">
      <defs>
        <linearGradient id="start-chart-fill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.22" />
          <stop offset="100%" stopColor={color} stopOpacity="0.02" />
        </linearGradient>
      </defs>

      {[28, 56, 84].map((y) => (
        <line
          key={y}
          x1="0"
          x2="420"
          y1={y}
          y2={y}
          stroke="rgba(148,163,184,0.16)"
        />
      ))}

      <path
        d="M0 78 C36 64, 54 66, 80 54 C108 38, 132 62, 158 46 C190 30, 218 54, 246 42 C278 26, 306 38, 330 20 C360 6, 388 12, 420 5 L420 95 L0 95 Z"
        fill="url(#start-chart-fill)"
      />
      <path
        d="M0 78 C36 64, 54 66, 80 54 C108 38, 132 62, 158 46 C190 30, 218 54, 246 42 C278 26, 306 38, 330 20 C360 6, 388 12, 420 5"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeWidth="4"
      />
      <circle cx="420" cy="5" r="5" fill={color} />
    </svg>
  );
}