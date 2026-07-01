"use client";

import { useEffect, useRef, useState } from "react";
import type { IconType } from "react-icons";
import {
  HiArrowRight,
  HiChartBar,
  HiChatAlt2,
  HiCheckCircle,
  HiDatabase,
  HiDeviceMobile,
  HiFilter,
  HiGlobeAlt,
  HiPaperAirplane,
  HiSparkles,
  HiSupport,
  HiUser,
} from "react-icons/hi";
import {
  GradientWord,
  HomeSectionShell,
  SectionBadge,
} from "./HomeSectionPrimitives";

type AddOnTone = "blue" | "violet";

type AddOnStep = {
  number: string;
  title: string;
  description: string;
  icon: IconType;
  side: "left" | "right";
  tone: AddOnTone;
  actions: string[];
  preview: "lead" | "chat" | "pipeline" | "support" | "reporting";
  image: string;
  imageLabel: string;
  imagePosition: string;
};

const addOnSteps: AddOnStep[] = [
  {
    number: "01",
    title: "AI Lead Intake",
    description:
      "Captures leads from multiple sources, qualifies them instantly, and routes to the right team.",
    icon: HiUser,
    side: "right",
    tone: "blue",
    actions: ["Capture", "Qualify", "Route"],
    preview: "lead",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80",
    imageLabel: "Lead Capture",
    imagePosition: "object-[center_45%]",
  },
  {
    number: "02",
    title: "Auto Reply Bot",
    description:
      "Instant, human-like replies across chat, email, and DMs. Answers questions, qualifies leads, and books meetings.",
    icon: HiChatAlt2,
    side: "left",
    tone: "violet",
    actions: ["Respond", "Engage", "Convert"],
    preview: "chat",
    image:
      "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=900&q=80",
    imageLabel: "Customer Conversation",
    imagePosition: "object-[center_50%]",
  },
  {
    number: "03",
    title: "Pipeline Agent",
    description:
      "Monitors your pipeline, nudges follow-ups, moves deals forward, and alerts you to risks or blockers.",
    icon: HiFilter,
    side: "right",
    tone: "blue",
    actions: ["Monitor", "Nudge", "Optimize"],
    preview: "pipeline",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
    imageLabel: "Pipeline Tracking",
    imagePosition: "object-[center_45%]",
  },
  {
    number: "04",
    title: "Customer Support Copilot",
    description:
      "AI assists your support team with smart suggestions, article drafts, and context from customer history.",
    icon: HiSupport,
    side: "left",
    tone: "violet",
    actions: ["Assist", "Suggest", "Resolve"],
    preview: "support",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80",
    imageLabel: "Support Collaboration",
    imagePosition: "object-[center_43%]",
  },
  {
    number: "05",
    title: "Executive Reporting",
    description:
      "AI generates real-time reports and insights so you can make faster, data-driven decisions with confidence.",
    icon: HiChartBar,
    side: "right",
    tone: "blue",
    actions: ["Report", "Analyze", "Decide"],
    preview: "reporting",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    imageLabel: "Real-time Insights",
    imagePosition: "object-[center_50%]",
  },
];

const toneClasses: Record<
  AddOnTone,
  {
    icon: string;
    number: string;
    dot: string;
    badge: string;
    border: string;
    ring: string;
    accent: string;
    glow: string;
    imageOverlay: string;
    rail: string;
    railGlow: string;
  }
> = {
  blue: {
    icon: "bg-linear-to-br from-sky-400 via-blue-600 to-indigo-700 text-white shadow-[0_14px_30px_rgba(37,99,235,0.28)]",
    number: "text-blue-700",
    dot: "bg-blue-600 shadow-[0_0_0_5px_rgba(37,99,235,0.12),0_0_22px_rgba(37,99,235,0.34)]",
    badge: "bg-blue-50 text-blue-700 ring-blue-100",
    border: "border-blue-200/95",
    ring: "ring-1 ring-blue-100/95 hover:ring-blue-300/90",
    accent: "from-blue-500 via-blue-600 to-indigo-600",
    glow: "bg-blue-500/12",
    imageOverlay: "from-slate-950/58 via-slate-950/16 to-blue-700/28",
    rail: "from-blue-400 via-blue-600 to-indigo-500",
    railGlow: "shadow-[0_0_28px_rgba(37,99,235,0.38)]",
  },
  violet: {
    icon: "bg-linear-to-br from-violet-400 via-violet-600 to-indigo-700 text-white shadow-[0_14px_30px_rgba(124,58,237,0.28)]",
    number: "text-violet-700",
    dot: "bg-violet-600 shadow-[0_0_0_5px_rgba(124,58,237,0.12),0_0_22px_rgba(124,58,237,0.34)]",
    badge: "bg-violet-50 text-violet-700 ring-violet-100",
    border: "border-violet-200/95",
    ring: "ring-1 ring-violet-100/95 hover:ring-violet-300/90",
    accent: "from-violet-500 via-violet-600 to-indigo-600",
    glow: "bg-violet-500/12",
    imageOverlay: "from-slate-950/58 via-slate-950/16 to-violet-700/28",
    rail: "from-violet-400 via-violet-600 to-indigo-500",
    railGlow: "shadow-[0_0_28px_rgba(124,58,237,0.38)]",
  },
};

function RealImagePanel({ step }: { step: AddOnStep }) {
  const tone = toneClasses[step.tone];

  return (
    <div className="relative h-full min-h-[7rem] overflow-hidden rounded-[1rem] bg-slate-100 shadow-[0_14px_32px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/75">
      <img
        src={step.image}
        alt={step.imageLabel}
        loading="lazy"
        className={`h-full w-full scale-[1.03] object-cover ${step.imagePosition}`}
      />
      <div className={`absolute inset-0 bg-linear-to-r ${tone.imageOverlay}`} />
      <div className="absolute inset-0 bg-linear-to-t from-slate-950/50 via-transparent to-white/10" />

      <div className="absolute left-2 top-2 rounded-full bg-white/92 px-2.5 py-1 text-[8px] font-black uppercase tracking-[0.14em] text-blue-700 shadow-sm backdrop-blur">
        Live Workflow
      </div>

      <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between gap-2">
        <span className="max-w-[78%] truncate rounded-full bg-slate-950/72 px-2.5 py-1 text-[8px] font-black uppercase tracking-[0.12em] text-white backdrop-blur">
          {step.imageLabel}
        </span>

        <span className="shrink-0 rounded-full bg-emerald-500 px-2 py-1 text-[8px] font-black text-white shadow-sm">
          Active
        </span>
      </div>
    </div>
  );
}

function TextBlock({ step }: { step: AddOnStep }) {
  const Icon = step.icon;
  const tone = toneClasses[step.tone];

  return (
    <div className="flex h-full flex-col justify-center">
      <div
        className={`mb-3 grid h-11 w-11 place-items-center rounded-xl ${tone.icon}`}
      >
        <Icon className="text-xl" />
      </div>

      <h3 className="text-lg font-black tracking-tight text-slate-950 dark:text-white">
        {step.title}
      </h3>

      <p className="mt-2 text-[12.5px] font-semibold leading-5 text-slate-600 dark:text-slate-300">
        {step.description}
      </p>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {step.actions.map((action) => (
          <span
            key={action}
            className={`rounded-full px-2.5 py-1 text-[10px] font-black ring-1 ${tone.badge}`}
          >
            {action}
          </span>
        ))}
      </div>
    </div>
  );
}

function LeadCapturePanel() {
  return (
    <div className="h-full rounded-[1rem] bg-white p-3 shadow-[0_10px_24px_rgba(15,23,42,0.045)] ring-1 ring-blue-50">
      <div className="mb-2 text-[10px] font-black text-blue-700">
        New Lead Captured
      </div>

      {[
        ["Name", "Alex Johnson"],
        ["Email", "alex.j@example.com"],
        ["Source", "Website Form"],
        ["Lead Score", "92"],
      ].map(([label, value]) => (
        <div
          key={label}
          className="grid grid-cols-[0.42fr_1fr] border-t border-slate-100 py-1 text-[8.5px] font-bold"
        >
          <span className="text-slate-500">{label}</span>
          <span
            className={
              label === "Lead Score"
                ? "w-fit rounded-md bg-emerald-50 px-1.5 text-emerald-600"
                : "truncate text-slate-700"
            }
          >
            {value}
          </span>
        </div>
      ))}
    </div>
  );
}

function ChatPreviewPanel() {
  return (
    <div className="h-full overflow-hidden rounded-[1rem] bg-white shadow-[0_10px_24px_rgba(15,23,42,0.045)] ring-1 ring-violet-50">
      <div className="flex items-center justify-between bg-linear-to-r from-violet-600 to-blue-600 px-3 py-1.5 text-[9px] font-black text-white">
        <span>LIVE CHAT</span>
        <span className="flex items-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
          Online
        </span>
      </div>

      <div className="space-y-2 p-3">
        <div className="w-fit rounded-lg bg-slate-50 px-2.5 py-1 text-[9px] font-bold text-slate-700">
          Hi! Do you offer a demo?
        </div>

        <div className="ml-auto max-w-[82%] rounded-lg bg-violet-500 px-3 py-2 text-[9px] font-black leading-4 text-white shadow-[0_10px_24px_rgba(124,58,237,0.18)]">
          Absolutely! I can book a demo for you. What time works best?
        </div>

        <div className="flex items-center justify-between rounded-lg bg-slate-50 px-2.5 py-1">
          <span className="text-[8px] font-bold text-slate-400">
            Type a message...
          </span>
          <HiArrowRight className="text-xs text-blue-600" />
        </div>
      </div>
    </div>
  );
}

function PipelineDashboardPanel() {
  return (
    <div className="h-full rounded-[1rem] bg-white p-3 shadow-[0_10px_24px_rgba(15,23,42,0.045)] ring-1 ring-blue-50">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-[9.5px] font-black text-blue-700">
          PIPELINE OVERVIEW
        </span>
        <span className="rounded-full bg-white px-2 py-0.5 text-[7px] font-bold text-slate-500 shadow-sm">
          This Month
        </span>
      </div>

      <div className="grid grid-cols-5 gap-1.5">
        {[
          ["New", "128"],
          ["Contacted", "64"],
          ["Qualified", "32"],
          ["Proposal", "18"],
          ["Won", "7"],
        ].map(([label, value]) => (
          <div key={label} className="rounded-lg bg-slate-50 p-1.5 text-center">
            <p className="text-[7px] font-bold text-slate-500">{label}</p>
            <p className="mt-0.5 text-[11px] font-black text-slate-950">
              {value}
            </p>
          </div>
        ))}
      </div>

      <svg viewBox="0 0 260 72" className="mt-2 h-12 w-full text-blue-600">
        <path
          d="M5 54 C30 38, 50 42, 70 36 S110 58, 135 38 S175 22, 195 34 S225 46, 255 14"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="4"
        />
        <path
          d="M5 54 C30 38, 50 42, 70 36 S110 58, 135 38 S175 22, 195 34 S225 46, 255 14 L255 70 L5 70 Z"
          fill="currentColor"
          opacity="0.08"
        />
      </svg>

      <span className="inline-flex rounded-full bg-slate-950 px-2.5 py-1 text-[8px] font-black uppercase tracking-[0.12em] text-white">
        Pipeline Tracking
      </span>
    </div>
  );
}

function SupportSuggestionPanel() {
  return (
    <div className="h-full overflow-hidden rounded-[1rem] bg-white shadow-[0_10px_24px_rgba(15,23,42,0.045)] ring-1 ring-violet-50">
      <div className="flex items-center justify-between bg-linear-to-r from-violet-50 to-white px-3 py-2">
        <span className="text-[9px] font-black uppercase text-violet-700">
          Copilot Suggestion
        </span>
        <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[8px] font-black text-emerald-600">
          94% match
        </span>
      </div>

      <div className="p-3">
        <div className="rounded-lg bg-violet-50/55 p-2.5">
          <p className="text-[9px] font-bold leading-4 text-slate-700">
            Customer has API authentication issues. Suggest setup guide and
            offer a quick technical handoff.
          </p>
        </div>

        <div className="mt-2 grid grid-cols-3 gap-1.5">
          {[
            ["Plan", "Pro"],
            ["Tickets", "12"],
            ["Active", "2h"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-lg bg-slate-50 p-1.5 text-center"
            >
              <p className="text-[7px] font-bold text-slate-500">{label}</p>
              <p className="text-[10px] font-black text-slate-950">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ExecutiveDashboardPanel() {
  return (
    <div className="h-full overflow-hidden rounded-[1rem] bg-white shadow-[0_10px_24px_rgba(15,23,42,0.045)] ring-1 ring-blue-50">
      <div className="flex items-center justify-between bg-linear-to-r from-blue-50 to-white px-3 py-2">
        <span className="text-[9px] font-black uppercase text-blue-700">
          Executive Dashboard
        </span>
        <span className="rounded-full bg-white px-2 py-0.5 text-[7px] font-black text-blue-700 shadow-sm">
          This Month
        </span>
      </div>

      <div className="p-3">
        <div className="grid grid-cols-4 gap-1.5">
          {[
            ["Revenue", "$1.24M", "18%"],
            ["Deals", "56", "22%"],
            ["Leads", "842", "15%"],
            ["CSAT", "4.8", "9%"],
          ].map(([label, value, growth]) => (
            <div key={label} className="rounded-lg bg-slate-50 p-1.5">
              <p className="text-[7px] font-bold text-slate-500">{label}</p>
              <p className="mt-0.5 text-[11px] font-black text-slate-950">
                {value}
              </p>
              <p className="text-[7px] font-black text-emerald-600">
                ↑ {growth}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-2 grid grid-cols-[1fr_4rem] gap-2">
          <div className="rounded-lg bg-blue-50/55 px-2 py-1">
            <svg viewBox="0 0 260 72" className="h-10 w-full text-blue-600">
              <path
                d="M5 58 C26 48, 44 54, 62 40 S96 34, 116 26 S145 48, 166 30 S202 14, 224 22 S242 28, 255 12"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="4"
              />
              <path
                d="M5 58 C26 48, 44 54, 62 40 S96 34, 116 26 S145 48, 166 30 S202 14, 224 22 S242 28, 255 12 L255 70 L5 70 Z"
                fill="currentColor"
                opacity="0.09"
              />
            </svg>
          </div>

          <div className="grid place-items-center rounded-lg bg-white shadow-sm">
            <div className="h-10 w-10 rounded-full bg-conic-from-180 from-blue-600 via-violet-500 via-55% to-blue-100 p-2">
              <div className="h-full w-full rounded-full bg-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CardBody({ step }: { step: AddOnStep }) {
  if (step.preview === "lead") {
    return (
      <div className="grid h-full grid-cols-[1fr_1fr_1.15fr] gap-3">
        <RealImagePanel step={step} />
        <LeadCapturePanel />
        <TextBlock step={step} />
      </div>
    );
  }

  if (step.preview === "chat") {
    return (
      <div className="grid h-full grid-cols-[1fr_1.15fr_1fr] gap-3">
        <TextBlock step={step} />
        <ChatPreviewPanel />
        <RealImagePanel step={step} />
      </div>
    );
  }

  if (step.preview === "pipeline") {
    return (
      <div className="grid h-full grid-cols-[1.25fr_1.05fr_1fr] gap-3">
        <PipelineDashboardPanel />
        <TextBlock step={step} />
        <RealImagePanel step={step} />
      </div>
    );
  }

  if (step.preview === "support") {
    return (
      <div className="grid h-full grid-cols-[1fr_1.12fr_1fr] gap-3">
        <TextBlock step={step} />
        <SupportSuggestionPanel />
        <RealImagePanel step={step} />
      </div>
    );
  }

  return (
    <div className="grid h-full grid-cols-[1.25fr_1.05fr_1fr] gap-3">
      <ExecutiveDashboardPanel />
      <TextBlock step={step} />
      <RealImagePanel step={step} />
    </div>
  );
}

function AddOnInnerCard({
  step,
  index,
  activeStation,
}: {
  step: AddOnStep;
  index: number;
  activeStation: number;
}) {
  const tone = toneClasses[step.tone];
  const isVisible = activeStation >= index;
  const isCurrent = activeStation === index;

  return (
    <article
      className={`group relative mx-auto w-full max-w-[42rem] overflow-hidden rounded-[1.35rem] bg-white/95 p-4 shadow-[0_18px_56px_rgba(15,23,42,0.065)] backdrop-blur-xl transition-all duration-700 hover:-translate-y-1 dark:bg-white/5 ${
        tone.ring
      } ${
        isVisible
          ? "translate-y-0 scale-100 opacity-100"
          : "translate-y-8 scale-[0.975] opacity-0"
      } ${isCurrent ? "shadow-[0_26px_76px_rgba(37,99,235,0.12)]" : ""}`}
    >
      <div
        className={`pointer-events-none absolute -top-14 h-32 w-32 rounded-full blur-3xl ${tone.glow}`}
      />

      <div
        className={`pointer-events-none absolute inset-x-5 top-0 h-1 origin-left rounded-b-full bg-linear-to-r ${
          tone.accent
        } transition-transform duration-700 ${
          isVisible ? "scale-x-100" : "scale-x-0"
        }`}
      />

      <div className="relative min-h-[8.3rem]">
        <CardBody step={step} />
      </div>
    </article>
  );
}

function AddOnCard({
  step,
  index,
  activeStation,
}: {
  step: AddOnStep;
  index: number;
  activeStation: number;
}) {
  const tone = toneClasses[step.tone];
  const isLeft = step.side === "left";
  const isReached = activeStation >= index;
  const isCurrent = activeStation === index;

  return (
    <div className="relative hidden items-center gap-4 lg:grid lg:grid-cols-[1fr_4.6rem_1fr]">
      <div className="flex justify-end">
        {isLeft ? (
          <AddOnInnerCard
            step={step}
            index={index}
            activeStation={activeStation}
          />
        ) : null}
      </div>

      <div className="relative grid min-h-[10.3rem] place-items-center">
        <div className="absolute inset-y-[-1.8rem] left-1/2 w-px -translate-x-1/2 overflow-hidden bg-blue-100">
          <span
            className={`absolute left-0 top-0 block w-full origin-top bg-linear-to-b ${
              tone.rail
            } ${tone.railGlow} transition-transform duration-[850ms] ease-out ${
              isReached ? "h-full scale-y-100" : "h-full scale-y-0"
            }`}
          />
        </div>

        <span
          className={`relative z-10 grid h-11 w-11 place-items-center rounded-full bg-white text-base font-black transition-all duration-500 ${
            isReached
              ? `${tone.number} shadow-[0_16px_44px_rgba(37,99,235,0.2)] scale-100`
              : "scale-90 text-slate-300 shadow-[0_8px_20px_rgba(15,23,42,0.06)]"
          }`}
        >
          {step.number}
          {isCurrent ? (
            <span className="absolute inset-[-0.45rem] -z-10 rounded-full border border-blue-300/60 animate-[stationPulse_1.25s_ease-out_infinite]" />
          ) : null}
        </span>

        <span
          className={`absolute top-1/2 z-20 h-2.5 w-2.5 -translate-y-1/2 rounded-full transition-all duration-500 ${
            isReached
              ? tone.dot
              : "bg-blue-100 shadow-[0_0_0_5px_rgba(191,219,254,0.18)]"
          } ${isCurrent ? "scale-125" : "scale-100"} ${
            isLeft ? "-right-0.5" : "-left-0.5"
          }`}
        />
      </div>

      <div className="flex justify-start">
        {!isLeft ? (
          <AddOnInnerCard
            step={step}
            index={index}
            activeStation={activeStation}
          />
        ) : null}
      </div>
    </div>
  );
}

function MobileBackCard({
  step,
  position,
}: {
  step: AddOnStep;
  position: number;
}) {
  const Icon = step.icon;
  const tone = toneClasses[step.tone];

  return (
    <div
      className="absolute left-1/2 top-0 w-[82%] -translate-x-1/2 rounded-[1.05rem] bg-white/92 px-3.5 py-3 shadow-[0_18px_44px_rgba(15,23,42,0.075)] ring-1 ring-blue-100/80 backdrop-blur-xl"
      style={{
        transform: `translateX(-50%) translateY(${position * 2.6}rem) scale(${
          1 - position * 0.035
        })`,
        zIndex: 10 - position,
      }}
    >
      <div className="flex items-center justify-between gap-2">
        <div className="flex min-w-0 items-center gap-2.5">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-violet-50 text-sm font-black text-violet-700">
            {step.number}
          </span>

          <span
            className={`grid h-8 w-8 shrink-0 place-items-center rounded-xl ${
              position === 0 ? tone.icon : "bg-blue-50 text-blue-700"
            }`}
          >
            <Icon className="text-base" />
          </span>

          <p className="truncate text-sm font-black text-slate-950">
            {step.title}
          </p>
        </div>

        <span
          className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-black ${
            step.preview === "reporting"
              ? "bg-violet-50 text-violet-700"
              : step.preview === "support"
                ? "bg-violet-50 text-violet-700"
                : "bg-blue-50 text-blue-700"
          }`}
        >
          {step.preview === "reporting"
            ? "Insights"
            : step.preview === "support"
              ? "Live"
              : step.preview === "pipeline"
                ? "Monitor"
                : "Active"}
        </span>
      </div>
    </div>
  );
}

function MobileLeadOverview() {
  return (
    <div className="mt-5 rounded-[1.2rem] bg-white/92 p-4 shadow-[0_14px_40px_rgba(15,23,42,0.07)] ring-1 ring-blue-100/80">
      <div className="mb-4 flex items-center justify-between">
        <h4 className="text-sm font-black text-slate-950">
          Live Intake Overview
        </h4>

        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-black text-emerald-700">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Live
        </span>
      </div>

      <div className="grid grid-cols-[6.2rem_1fr] items-center gap-4">
        <div className="relative grid h-24 w-24 place-items-center rounded-full bg-conic-from-180 from-emerald-400 via-emerald-500 via-65% to-emerald-100 p-4 shadow-[0_14px_30px_rgba(16,185,129,0.18)]">
          <div className="grid h-full w-full place-items-center rounded-full bg-white">
            <div className="text-center">
              <p className="text-2xl font-black text-slate-950">128</p>
              <p className="text-[9px] font-bold leading-3 text-slate-500">
                New Leads
                <br />
                Today
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          {[
            ["Captured", "128", "+24%"],
            ["Qualified", "86", "+18%"],
            ["Routed", "64", "+12%"],
          ].map(([label, value, growth]) => (
            <div
              key={label}
              className="flex items-center justify-between rounded-xl bg-white px-3 py-2 shadow-sm ring-1 ring-slate-100"
            >
              <span className="text-[11px] font-bold text-slate-600">
                {label}
              </span>
              <span className="text-sm font-black text-slate-950">{value}</span>
              <span className="text-[11px] font-black text-emerald-600">
                {growth}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileStackedDeck() {
  const activeStep = addOnSteps[0];
  const ActiveIcon = activeStep.icon;
  const activeTone = toneClasses[activeStep.tone];
  const backCards = [addOnSteps[4], addOnSteps[3], addOnSteps[2], addOnSteps[1]];

  return (
    <div className="relative mx-auto mt-9 max-w-[25rem] px-2 lg:hidden">
      <div className="pointer-events-none absolute left-0 top-18 h-[33rem] w-px bg-linear-to-b from-blue-200 via-violet-300 to-blue-100">
        <span className="absolute -left-5 -top-2 grid h-10 w-10 place-items-center rounded-full bg-white shadow-[0_16px_38px_rgba(124,58,237,0.18)] ring-1 ring-violet-100">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-linear-to-br from-blue-500 to-violet-600 text-white shadow-[0_0_28px_rgba(124,58,237,0.32)]">
            <HiSparkles className="text-sm" />
          </span>
        </span>

        {[0, 1, 2].map((item) => (
          <span
            key={item}
            className="absolute -left-[0.44rem] h-3.5 w-3.5 rounded-full bg-white shadow-sm ring-1 ring-blue-200"
            style={{ top: `${7.6 + item * 7.8}rem` }}
          />
        ))}
      </div>

      <div className="relative h-[13.4rem]">
        {backCards.map((step, index) => (
          <MobileBackCard key={step.number} step={step} position={index} />
        ))}
      </div>

      <article className="relative z-30 -mt-4 overflow-hidden rounded-[1.55rem] bg-white/97 p-4 shadow-[0_26px_76px_rgba(15,23,42,0.12)] ring-1 ring-blue-100/90 backdrop-blur-xl">
        <div className="flex items-center justify-between gap-2">
          <div className="flex min-w-0 items-center gap-2.5">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-emerald-50 text-base font-black text-emerald-700">
              {activeStep.number}
            </span>

            <span
              className={`grid h-11 w-11 shrink-0 place-items-center rounded-full ${activeTone.icon}`}
            >
              <ActiveIcon className="text-xl" />
            </span>

            <h3 className="min-w-0 text-xl font-black leading-tight tracking-tight text-slate-950">
              {activeStep.title}
            </h3>
          </div>

          <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-black text-emerald-700">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Active
          </span>
        </div>

        <div className="relative mt-4 h-36 overflow-hidden rounded-[1.1rem] bg-slate-100 shadow-[0_14px_34px_rgba(15,23,42,0.08)]">
          <img
            src={activeStep.image}
            alt={activeStep.imageLabel}
            loading="lazy"
            className={`h-full w-full scale-[1.03] object-cover ${activeStep.imagePosition}`}
          />
          <div
            className={`absolute inset-0 bg-linear-to-r ${activeTone.imageOverlay}`}
          />
          <div className="absolute bottom-3 left-3 grid h-10 w-10 place-items-center rounded-full bg-emerald-500 text-white shadow-[0_12px_30px_rgba(16,185,129,0.28)]">
            <HiSparkles className="text-lg" />
          </div>
        </div>

        <p className="mt-5 text-[15px] font-semibold leading-7 text-slate-600">
          {activeStep.description}
        </p>

        <div className="mt-4 grid grid-cols-3 gap-2">
          {activeStep.actions.map((action, index) => (
            <span
              key={action}
              className="inline-flex items-center justify-center gap-1.5 rounded-2xl bg-white px-2.5 py-2.5 text-[11px] font-black text-emerald-700 shadow-sm ring-1 ring-blue-100"
            >
              {index === 0 ? "↓" : index === 1 ? "♙" : "➤"}
              {action}
            </span>
          ))}
        </div>

        <MobileLeadOverview />

        <div className="mt-4 rounded-2xl bg-blue-50/70 px-4 py-3 text-center text-xs font-black text-blue-700">
          ⚡ AI working 24/7 to fill your pipeline
        </div>
      </article>

      <div className="mt-5 flex items-center justify-center gap-3">
        <div className="flex items-center gap-2">
          {addOnSteps.slice(0, 4).map((step, index) => (
            <span
              key={step.number}
              className={`h-2.5 rounded-full transition-all duration-500 ${
                index === 0
                  ? "w-2.5 bg-linear-to-r from-blue-600 to-violet-600"
                  : "w-2.5 bg-blue-100"
              }`}
            />
          ))}
        </div>

        <span className="text-lg text-blue-200">👋</span>
        <p className="text-xs font-bold text-slate-400">
          Swipe to explore all add-ons
        </p>
      </div>

      <div className="mt-7 grid grid-cols-4 gap-3 rounded-[1.35rem] bg-white/88 p-3.5 shadow-[0_20px_50px_rgba(37,99,235,0.08)] ring-1 ring-blue-100/80 backdrop-blur-xl">
        {[
          { label: "Websites", icon: HiGlobeAlt, color: "text-blue-600" },
          { label: "Mobile Apps", icon: HiDeviceMobile, color: "text-violet-600" },
          { label: "CRMs", icon: HiDatabase, color: "text-emerald-600" },
          { label: "Portals", icon: HiCheckCircle, color: "text-orange-500" },
        ].map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.label} className="text-center">
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-white shadow-sm ring-1 ring-blue-100">
                <Icon className={`text-xl ${item.color}`} />
              </div>
              <p className="mt-2 text-[10px] font-bold leading-tight text-slate-600">
                {item.label}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function BottomCta({ activeStation }: { activeStation: number }) {
  const isVisible = activeStation >= addOnSteps.length - 1;

  return (
    <div
      className={`relative mx-auto mt-7 max-w-[70rem] overflow-hidden rounded-[1.4rem] border-2 border-blue-200 bg-white/88 px-4 py-3.5 shadow-[0_20px_56px_rgba(37,99,235,0.09)] ring-1 ring-blue-100/90 backdrop-blur-xl transition-all duration-700 dark:border-white/10 dark:bg-white/5 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 w-48 bg-linear-to-r from-blue-100/70 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-64 bg-linear-to-l from-violet-100/70 to-transparent" />

      <div className="relative grid items-center gap-5 lg:grid-cols-[1.25fr_0.7fr_1.2fr]">
        <div className="flex items-center gap-4">
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-blue-100 bg-white text-blue-700 shadow-[0_12px_30px_rgba(37,99,235,0.12)]">
            <HiPaperAirplane className="text-xl" />
          </div>

          <div>
            <h3 className="text-base font-black text-blue-700">
              Automate more. Scale faster.
            </h3>
            <p className="mt-1 max-w-md text-xs font-semibold leading-5 text-slate-600 dark:text-slate-300">
              These AI add-ons work with websites, apps, CRMs, and portals.
            </p>
          </div>
        </div>

        <a
          href="/contact"
          className="inline-flex h-11 items-center justify-center gap-3 rounded-2xl bg-linear-to-r from-blue-600 to-violet-600 px-5 text-sm font-black text-white shadow-[0_14px_32px_rgba(37,99,235,0.25)] transition hover:-translate-y-0.5"
        >
          Explore Add-ons
          <HiArrowRight className="text-base" />
        </a>

        <div className="grid grid-cols-4 divide-x divide-blue-100 text-center dark:divide-white/10">
          {[
            { label: "Websites", icon: HiGlobeAlt },
            { label: "Apps", icon: HiDeviceMobile },
            { label: "CRMs", icon: HiDatabase },
            { label: "Portals", icon: HiCheckCircle },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.label} className="px-3">
                <Icon className="mx-auto text-lg text-blue-700" />
                <p className="mt-1 text-[10px] font-black text-slate-700 dark:text-slate-200">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function HomeAiAddOnsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [hasEnteredView, setHasEnteredView] = useState(false);
  const [activeStation, setActiveStation] = useState(-1);

  useEffect(() => {
    const currentSection = sectionRef.current;

    if (!currentSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEnteredView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    observer.observe(currentSection);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasEnteredView) return;

    const timers = addOnSteps.map((_, index) =>
      window.setTimeout(() => {
        setActiveStation(index);
      }, 360 + index * 1050),
    );

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [hasEnteredView]);

  return (
    <HomeSectionShell>
      <section ref={sectionRef} className="relative overflow-hidden py-1">
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-blue-100/55 blur-3xl dark:bg-blue-500/10" />
        <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-violet-100/65 blur-3xl dark:bg-violet-500/10" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-[30rem] w-[52rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.07),transparent_62%)]" />

        <div className="relative mx-auto max-w-4xl text-center">
          <SectionBadge>AI-Powered Growth</SectionBadge>

          <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.05em] text-slate-950 sm:text-5xl lg:text-[3.35rem] dark:text-white">
            AI Automation <GradientWord>Add-ons</GradientWord>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-base font-semibold leading-7 text-slate-600 dark:text-slate-300">
            Optional AI add-ons that plug into your stack and automate key
            workflows across your business.
          </p>
        </div>

        <MobileStackedDeck />

        <div className="relative mx-auto mt-7 hidden max-w-[74rem] space-y-4 lg:mt-8 lg:block lg:space-y-0">
          {addOnSteps.map((step, index) => (
            <AddOnCard
              key={step.title}
              step={step}
              index={index}
              activeStation={activeStation}
            />
          ))}
        </div>

        <div className="hidden lg:block">
          <BottomCta activeStation={activeStation} />
        </div>
      </section>

      <style jsx>{`
        @keyframes stationPulse {
          0% {
            opacity: 0.75;
            transform: scale(0.85);
          }
          100% {
            opacity: 0;
            transform: scale(1.35);
          }
        }
      `}</style>
    </HomeSectionShell>
  );
}