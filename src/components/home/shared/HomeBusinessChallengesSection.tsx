"use client";

import { useEffect, useRef, useState } from "react";
import type { IconType } from "react-icons";
import {
  HiChartBar,
  HiCheckCircle,
  HiChevronDown,
  HiChevronUp,
  HiClock,
  HiCurrencyDollar,
  HiDatabase,
  HiDocumentText,
  HiExclamationCircle,
  HiLightningBolt,
  HiLockClosed,
  HiMail,
  HiShieldCheck,
  HiTrendingUp,
  HiUserGroup,
} from "react-icons/hi";
import { SectionBadge } from "./HomeSectionPrimitives";

type ChallengeVisual =
  | "data"
  | "process"
  | "visibility"
  | "security"
  | "scaling"
  | "cost";

type ChallengeItem = {
  title: string;
  tag: string;
  icon: IconType;
  visual: ChallengeVisual;
  summary: string;
  bullets: string[];
  priority: string;
};

const challengeItems: ChallengeItem[] = [
  {
    title: "Disconnected Systems & Data Silos",
    tag: "Data Gap",
    icon: HiDatabase,
    visual: "data",
    summary:
      "Your data is split across sheets, inboxes, chats, and tools, so teams never see one reliable business view.",
    bullets: [
      "No single source of truth",
      "Duplicate updates",
      "Slow manual reports",
      "Outdated customer records",
    ],
    priority: "Unify leads, customers, tasks, and reports in one owned system.",
  },
  {
    title: "Inefficient Processes & Manual Work",
    tag: "Ops Risk",
    icon: HiClock,
    visual: "process",
    summary:
      "Manual approvals, follow-ups, and repetitive updates slow execution and waste valuable team hours.",
    bullets: [
      "Higher operating cost",
      "Slow approvals",
      "More rework",
      "Low productivity",
    ],
    priority: "Automate repeat workflows and remove manual bottlenecks.",
  },
  {
    title: "Limited Visibility & Poor Reporting",
    tag: "Blind Spot",
    icon: HiChartBar,
    visual: "visibility",
    summary:
      "Without live reports, owners react late to lead drops, support delays, revenue gaps, and team issues.",
    bullets: [
      "No live business view",
      "Delayed decisions",
      "Weak accountability",
      "Missed opportunities",
    ],
    priority: "Give owners live dashboards, alerts, and performance reports.",
  },
  {
    title: "Security, Compliance & Risk Exposure",
    tag: "Risk",
    icon: HiLockClosed,
    visual: "security",
    summary:
      "Shared files, open access, and scattered customer data increase security risk and reduce control.",
    bullets: [
      "Weak role access",
      "No audit trail",
      "Sensitive data exposure",
      "Platform dependency",
    ],
    priority: "Control permissions, access rules, audit logs, and ownership.",
  },
  {
    title: "Scaling Challenges & Growth Constraints",
    tag: "Growth Gap",
    icon: HiTrendingUp,
    visual: "scaling",
    summary:
      "Processes that work for a small team start breaking when leads, users, branches, and workflows increase.",
    bullets: [
      "Volume becomes hard",
      "People dependency rises",
      "Branch setup is slow",
      "Automation becomes limited",
    ],
    priority: "Build scalable modules that grow with your business.",
  },
  {
    title: "Rising Costs & Resource Constraints",
    tag: "Cost",
    icon: HiCurrencyDollar,
    visual: "cost",
    summary:
      "Multiple subscriptions, manual labour, and tool overlap increase cost without giving full ownership.",
    bullets: [
      "Recurring SaaS cost",
      "Low ROI visibility",
      "Manual labour cost",
      "No owned system",
    ],
    priority: "Reduce tool dependency and own your workflow system.",
  },
];

const challengeThemeClasses: Record<
  ChallengeVisual,
  {
    border: string;
    icon: string;
    tag: string;
    activeIcon: string;
    activeBorder: string;
    glow: string;
  }
> = {
  data: {
    border: "before:bg-blue-600",
    icon: "bg-blue-50 text-blue-700 dark:bg-blue-400/10 dark:text-blue-200",
    tag: "bg-blue-50 text-blue-700 dark:bg-blue-400/10 dark:text-blue-200",
    activeIcon:
      "bg-blue-700 text-white shadow-[0_12px_30px_rgba(37,99,235,0.28)]",
    activeBorder:
      "border-blue-300 ring-blue-200/80 dark:border-blue-300/35 dark:ring-blue-300/20",
    glow: "hover:shadow-[0_20px_60px_rgba(37,99,235,0.12)]",
  },
  process: {
    border: "before:bg-indigo-600",
    icon: "bg-indigo-50 text-indigo-700 dark:bg-indigo-400/10 dark:text-indigo-200",
    tag: "bg-indigo-50 text-indigo-700 dark:bg-indigo-400/10 dark:text-indigo-200",
    activeIcon:
      "bg-indigo-700 text-white shadow-[0_12px_30px_rgba(79,70,229,0.28)]",
    activeBorder:
      "border-indigo-300 ring-indigo-200/80 dark:border-indigo-300/35 dark:ring-indigo-300/20",
    glow: "hover:shadow-[0_20px_60px_rgba(79,70,229,0.12)]",
  },
  visibility: {
    border: "before:bg-cyan-500",
    icon: "bg-cyan-50 text-cyan-700 dark:bg-cyan-400/10 dark:text-cyan-200",
    tag: "bg-cyan-50 text-cyan-700 dark:bg-cyan-400/10 dark:text-cyan-200",
    activeIcon:
      "bg-cyan-600 text-white shadow-[0_12px_30px_rgba(8,145,178,0.28)]",
    activeBorder:
      "border-cyan-300 ring-cyan-200/80 dark:border-cyan-300/35 dark:ring-cyan-300/20",
    glow: "hover:shadow-[0_20px_60px_rgba(8,145,178,0.12)]",
  },
  security: {
    border: "before:bg-emerald-600",
    icon: "bg-emerald-50 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-200",
    tag: "bg-emerald-50 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-200",
    activeIcon:
      "bg-emerald-600 text-white shadow-[0_12px_30px_rgba(16,185,129,0.28)]",
    activeBorder:
      "border-emerald-300 ring-emerald-200/80 dark:border-emerald-300/35 dark:ring-emerald-300/20",
    glow: "hover:shadow-[0_20px_60px_rgba(16,185,129,0.12)]",
  },
  scaling: {
    border: "before:bg-purple-600",
    icon: "bg-purple-50 text-purple-700 dark:bg-purple-400/10 dark:text-purple-200",
    tag: "bg-purple-50 text-purple-700 dark:bg-purple-400/10 dark:text-purple-200",
    activeIcon:
      "bg-purple-700 text-white shadow-[0_12px_30px_rgba(124,58,237,0.28)]",
    activeBorder:
      "border-purple-300 ring-purple-200/80 dark:border-purple-300/35 dark:ring-purple-300/20",
    glow: "hover:shadow-[0_20px_60px_rgba(124,58,237,0.12)]",
  },
  cost: {
    border: "before:bg-orange-500",
    icon: "bg-orange-50 text-orange-700 dark:bg-orange-400/10 dark:text-orange-200",
    tag: "bg-orange-50 text-orange-700 dark:bg-orange-400/10 dark:text-orange-200",
    activeIcon:
      "bg-orange-500 text-white shadow-[0_12px_30px_rgba(249,115,22,0.28)]",
    activeBorder:
      "border-orange-300 ring-orange-200/80 dark:border-orange-300/35 dark:ring-orange-300/20",
    glow: "hover:shadow-[0_20px_60px_rgba(249,115,22,0.12)]",
  },
};

function MiniHeader({
  label,
  title,
  tone = "blue",
}: {
  label: string;
  title: string;
  tone?: "blue" | "indigo" | "emerald" | "orange" | "purple" | "rose";
}) {
  const toneClasses = {
    blue: "bg-blue-50 text-blue-700 dark:bg-blue-400/10 dark:text-blue-200",
    indigo:
      "bg-indigo-50 text-indigo-700 dark:bg-indigo-400/10 dark:text-indigo-200",
    emerald:
      "bg-emerald-50 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-200",
    orange:
      "bg-orange-50 text-orange-700 dark:bg-orange-400/10 dark:text-orange-200",
    purple:
      "bg-purple-50 text-purple-700 dark:bg-purple-400/10 dark:text-purple-200",
    rose: "bg-rose-50 text-rose-700 dark:bg-rose-400/10 dark:text-rose-200",
  };

  return (
    <div>
      <span
        className={`inline-flex rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] ${toneClasses[tone]}`}
      >
        {label}
      </span>
      <p className="mt-2 text-sm font-black text-slate-950 dark:text-white">
        {title}
      </p>
    </div>
  );
}

function RingScore({
  value,
  label,
  color = "#2563eb",
}: {
  value: number;
  label: string;
  color?: string;
}) {
  const degree = value * 3.6;

  return (
    <div
      className="grid h-20 w-20 shrink-0 place-items-center rounded-full"
      style={{
        background: `conic-gradient(${color} 0deg, ${color} ${degree}deg, #e8ecff ${degree}deg, #e8ecff 360deg)`,
      }}
    >
      <div className="grid h-14 w-14 place-items-center rounded-full bg-white text-center shadow-inner dark:bg-slate-950">
        <div>
          <p className="text-lg font-black text-slate-950 dark:text-white">
            {value}%
          </p>
          <p className="text-[9px] font-bold text-slate-500 dark:text-slate-400">
            {label}
          </p>
        </div>
      </div>
    </div>
  );
}

function DataSilosVisual() {
  const systems = [
    { label: "Sheets", icon: HiDocumentText, className: "left-4 top-6" },
    { label: "Inbox", icon: HiMail, className: "right-5 top-8" },
    { label: "Calls", icon: HiUserGroup, className: "left-8 bottom-8" },
    { label: "CRM", icon: HiDatabase, className: "right-8 bottom-8" },
    {
      label: "Reports",
      icon: HiChartBar,
      className: "left-1/2 top-5 -translate-x-1/2",
    },
  ];

  return (
    <div className="rounded-[1.3rem] border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-4 shadow-[0_18px_45px_rgba(37,99,235,0.08)] dark:border-blue-300/10 dark:from-blue-400/10 dark:via-white/[0.04] dark:to-cyan-400/10">
      <MiniHeader
        label="System map"
        title="Disconnected sources create broken visibility"
      />

      <div className="mt-4 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative min-h-[18rem] overflow-hidden rounded-3xl border border-blue-100 bg-white/80 p-4 dark:border-white/10 dark:bg-slate-950/35">
          <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-blue-300" />
          <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-blue-200/70" />

          <div className="absolute left-1/2 top-1/2 grid h-24 w-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[1.35rem] bg-blue-700 text-center text-white shadow-[0_20px_50px_rgba(37,99,235,0.3)]">
            <HiDatabase className="text-2xl" />
            <span className="text-[10px] font-black uppercase tracking-wider">
              HNX OS
            </span>
          </div>

          {systems.map((system) => {
            const Icon = system.icon;

            return (
              <div
                key={system.label}
                className={`absolute ${system.className} rounded-2xl border border-slate-200 bg-white px-3 py-2 shadow-sm dark:border-white/10 dark:bg-slate-950/80`}
              >
                <div className="flex items-center gap-2">
                  <Icon className="text-blue-700 dark:text-blue-300" />
                  <span className="text-xs font-black text-slate-700 dark:text-slate-200">
                    {system.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid gap-3">
          {[
            ["12", "Disconnected sources", "Data sits in different places"],
            ["31%", "Duplicate records", "Repeated updates create confusion"],
            ["42h", "Reporting delay", "Manual reporting slows decisions"],
          ].map(([value, label, note]) => (
            <div
              key={label}
              className="rounded-2xl border border-blue-100 bg-white p-4 dark:border-white/10 dark:bg-white/[0.04]"
            >
              <p className="text-3xl font-black text-slate-950 dark:text-white">
                {value}
              </p>
              <p className="mt-1 text-sm font-black text-slate-700 dark:text-slate-200">
                {label}
              </p>
              <p className="mt-1 text-xs font-medium leading-5 text-slate-500 dark:text-slate-400">
                {note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ManualWorkVisual() {
  return (
    <div className="rounded-[1.3rem] border border-indigo-100 bg-white p-4 shadow-[0_18px_45px_rgba(79,70,229,0.08)] dark:border-indigo-300/10 dark:bg-white/[0.05]">
      <div className="flex items-start justify-between gap-3">
        <MiniHeader
          label="Workflow lab"
          title="Manual steps slowing daily execution"
          tone="indigo"
        />
        <span className="rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-[11px] font-black text-slate-600 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
          This Month
        </span>
      </div>

      <div className="mt-4 grid gap-3 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 dark:border-white/10 dark:bg-white/[0.04]">
          <p className="text-xs font-black text-slate-700 dark:text-slate-200">
            Manual Process Chain
          </p>

          <div className="mt-4 space-y-3">
            {[
              ["Lead assigned", "Manual"],
              ["Manager review", "Delayed"],
              ["Follow-up sent", "Manual"],
              ["Report updated", "Late"],
            ].map(([title, status], index) => (
              <div key={title} className="flex items-center gap-3">
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-indigo-600 text-xs font-black text-white">
                  {index + 1}
                </div>
                <div className="flex-1 rounded-2xl bg-white px-3 py-2 shadow-sm dark:bg-slate-950/45">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-xs font-black text-slate-700 dark:text-slate-200">
                      {title}
                    </p>
                    <span className="rounded-full bg-orange-50 px-2 py-0.5 text-[10px] font-black text-orange-700 dark:bg-orange-400/10 dark:text-orange-200">
                      {status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-3">
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              ["124", "Manual Tasks", "↑ 18%"],
              ["5.6d", "Cycle Time", "↓ 8%"],
              ["23%", "Rework", "↑ 6%"],
            ].map(([value, label, trend]) => (
              <div
                key={label}
                className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-white/[0.04]"
              >
                <p className="text-2xl font-black text-slate-950 dark:text-white">
                  {value}
                </p>
                <p className="mt-1 text-[11px] font-black text-slate-500 dark:text-slate-400">
                  {label}
                </p>
                <p
                  className={`mt-2 text-[10px] font-black ${
                    trend.includes("↓")
                      ? "text-emerald-600 dark:text-emerald-300"
                      : "text-rose-600 dark:text-rose-300"
                  }`}
                >
                  {trend}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-slate-200 bg-indigo-50/60 p-4 dark:border-white/10 dark:bg-indigo-400/[0.06]">
            <div className="flex items-center gap-4">
              <RingScore value={62} label="Score" color="#4f46e5" />
              <div>
                <p className="text-sm font-black text-slate-950 dark:text-white">
                  Process efficiency is average
                </p>
                <p className="mt-1 text-xs font-medium leading-5 text-slate-500 dark:text-slate-400">
                  Repeat approvals and manual updates are creating unnecessary
                  delay.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-indigo-50 px-3.5 py-3 text-[11px] font-bold leading-5 text-indigo-800 dark:bg-indigo-400/10 dark:text-indigo-100">
            Automation can remove repeat steps and save 100+ hours/month.
          </div>
        </div>
      </div>
    </div>
  );
}

function VisibilityVisual() {
  const alerts: {
    title: string;
    note: string;
    icon: IconType;
  }[] = [
    {
      title: "Hot lead idle",
      note: "2h no response",
      icon: HiExclamationCircle,
    },
    {
      title: "Support SLA risk",
      note: "Needs review",
      icon: HiClock,
    },
    {
      title: "Revenue dip",
      note: "Follow-up gap",
      icon: HiTrendingUp,
    },
    {
      title: "Team task stuck",
      note: "Owner missing",
      icon: HiUserGroup,
    },
  ];

  return (
    <div className="rounded-[1.3rem] border border-cyan-100 bg-gradient-to-br from-white via-cyan-50/60 to-white p-4 shadow-[0_18px_45px_rgba(8,145,178,0.08)] dark:border-cyan-300/10 dark:from-white/[0.05] dark:via-cyan-400/10 dark:to-white/[0.03]">
      <MiniHeader
        label="Command center"
        title="Owner view for decisions, alerts, and accountability"
      />

      <div className="mt-4 grid gap-3 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-slate-950/35">
          <div className="flex items-center justify-between">
            <p className="text-xs font-black text-slate-700 dark:text-slate-200">
              Pipeline Health
            </p>
            <span className="rounded-full bg-rose-50 px-2 py-1 text-[10px] font-black text-rose-600 dark:bg-rose-400/10 dark:text-rose-200">
              18 delayed
            </span>
          </div>

          <div className="mt-5 space-y-4">
            {[
              ["New Leads", "86%", "bg-blue-600"],
              ["Follow-ups", "54%", "bg-indigo-500"],
              ["Proposals", "41%", "bg-cyan-500"],
              ["Closures", "29%", "bg-rose-500"],
            ].map(([label, width, color]) => (
              <div key={label}>
                <div className="mb-1 flex justify-between text-[11px] font-bold text-slate-500 dark:text-slate-400">
                  <span>{label}</span>
                  <span>{width}</span>
                </div>
                <div className="h-2 rounded-full bg-slate-200 dark:bg-white/10">
                  <div
                    className={`h-2 rounded-full ${color}`}
                    style={{ width }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 grid gap-2 sm:grid-cols-3">
            {[
              ["Reports", "49%"],
              ["Tasks", "74"],
              ["Delay", "36h"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-2xl bg-slate-50 p-3 dark:bg-white/[0.04]"
              >
                <p className="text-xl font-black text-slate-950 dark:text-white">
                  {value}
                </p>
                <p className="mt-1 text-[10px] font-bold text-slate-500 dark:text-slate-400">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-slate-950/35">
          <p className="text-xs font-black text-slate-700 dark:text-slate-200">
            Live Alerts
          </p>

          <div className="mt-4 space-y-2">
            {alerts.map((alert) => {
              const AlertIcon = alert.icon;

              return (
                <div
                  key={alert.title}
                  className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 px-3 py-2.5 dark:border-white/10 dark:bg-white/[0.04]"
                >
                  <div className="flex items-center gap-2">
                    <AlertIcon className="text-blue-700 dark:text-blue-300" />
                    <p className="text-xs font-black text-slate-700 dark:text-slate-200">
                      {alert.title}
                    </p>
                  </div>
                  <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400">
                    {alert.note}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function SecurityVisual() {
  const roles = [
    { name: "Sales", permissions: [true, true, false, false] },
    { name: "Support", permissions: [true, false, false, false] },
    { name: "Manager", permissions: [true, true, true, false] },
    { name: "Owner", permissions: [true, true, true, true] },
  ];

  return (
    <div className="overflow-hidden rounded-[1.3rem] border border-slate-800 bg-slate-950 p-4 text-white shadow-[0_22px_55px_rgba(15,23,42,0.22)]">
      <div className="flex items-start justify-between gap-3">
        <div>
          <span className="inline-flex rounded-full bg-emerald-400/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-emerald-200">
            Security layer
          </span>
          <p className="mt-2 text-sm font-black text-white">
            Access matrix, risk status, and audit trail
          </p>
        </div>
        <div className="grid h-10 w-10 place-items-center rounded-2xl bg-emerald-400/10 text-emerald-200 ring-1 ring-emerald-300/20">
          <HiShieldCheck />
        </div>
      </div>

      <div className="mt-4 grid gap-3 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-4">
          <div className="flex items-center justify-between">
            <p className="text-xs font-black text-slate-200">
              Role Access Matrix
            </p>
            <span className="rounded-full bg-orange-400/10 px-2 py-1 text-[10px] font-black text-orange-200">
              27 reviews
            </span>
          </div>

          <div className="mt-4 space-y-2">
            <div className="grid grid-cols-[1fr_repeat(4,2rem)] gap-2 text-[10px] font-black text-slate-400">
              <span />
              <span>Lead</span>
              <span>CRM</span>
              <span>Pay</span>
              <span>Admin</span>
            </div>

            {roles.map((role) => (
              <div
                key={role.name}
                className="grid grid-cols-[1fr_repeat(4,2rem)] items-center gap-2"
              >
                <span className="text-xs font-black text-slate-200">
                  {role.name}
                </span>

                {role.permissions.map((active, index) => (
                  <span
                    key={`${role.name}-${index}`}
                    className={`grid h-7 w-7 place-items-center rounded-lg text-[10px] font-black ${
                      active
                        ? "bg-emerald-400 text-slate-950"
                        : "bg-white/10 text-slate-500"
                    }`}
                  >
                    {active ? "✓" : "—"}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-3">
          <div className="rounded-3xl border border-white/10 bg-emerald-400/[0.06] p-4">
            <div className="flex items-center gap-4">
              <RingScore value={71} label="Safe" color="#10b981" />
              <div>
                <p className="text-sm font-black text-white">
                  Moderate protection
                </p>
                <p className="mt-1 text-xs font-medium leading-5 text-slate-300">
                  Access rules exist, but logs and sensitive permissions need
                  stronger ownership.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-4">
            <p className="text-xs font-black text-slate-200">
              Recent Audit Trail
            </p>
            <div className="mt-3 space-y-2">
              {[
                ["Manager changed lead status", "2 min ago"],
                ["Support exported customer file", "14 min ago"],
                ["Admin updated role access", "1h ago"],
              ].map(([title, time]) => (
                <div
                  key={title}
                  className="flex items-center justify-between rounded-2xl bg-white/[0.04] px-3 py-2"
                >
                  <p className="text-[11px] font-bold text-slate-300">
                    {title}
                  </p>
                  <span className="text-[10px] font-bold text-slate-500">
                    {time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ScalingVisual() {
  return (
    <div className="rounded-[1.3rem] border border-purple-100 bg-gradient-to-br from-purple-50 via-white to-blue-50 p-4 shadow-[0_18px_45px_rgba(124,58,237,0.08)] dark:border-purple-300/10 dark:from-purple-400/10 dark:via-white/[0.04] dark:to-blue-400/10">
      <MiniHeader
        label="Scale roadmap"
        title="Readiness across teams, branches, and automation"
        tone="purple"
      />

      <div className="mt-5 rounded-3xl border border-purple-100 bg-white p-4 dark:border-white/10 dark:bg-slate-950/35">
        <div className="grid gap-3 sm:grid-cols-4">
          {[
            ["01", "Team", "Assign roles"],
            ["02", "Branch", "Replicate setup"],
            ["03", "Workflow", "Standardize ops"],
            ["04", "AI", "Automate tasks"],
          ].map(([number, title, note], index) => (
            <div key={title} className="relative">
              {index < 3 ? (
                <div className="absolute left-[calc(50%+1.5rem)] top-6 hidden h-0.5 w-[calc(100%-3rem)] bg-purple-200 sm:block" />
              ) : null}

              <div className="relative rounded-2xl border border-purple-100 bg-purple-50/60 p-3 text-center dark:border-white/10 dark:bg-white/[0.04]">
                <div className="mx-auto grid h-11 w-11 place-items-center rounded-2xl bg-purple-700 text-sm font-black text-white">
                  {number}
                </div>
                <p className="mt-3 text-sm font-black text-slate-950 dark:text-white">
                  {title}
                </p>
                <p className="mt-1 text-[11px] font-medium text-slate-500 dark:text-slate-400">
                  {note}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-3 grid gap-3 lg:grid-cols-[1fr_0.9fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-white/[0.04]">
          <p className="text-xs font-black text-slate-700 dark:text-slate-200">
            Capacity Signals
          </p>

          <div className="mt-4 space-y-3">
            {[
              ["Lead Volume", "88%"],
              ["Team Capacity", "58%"],
              ["Automation Fit", "41%"],
            ].map(([label, width]) => (
              <div key={label}>
                <div className="mb-1 flex justify-between text-[11px] font-bold text-slate-500 dark:text-slate-400">
                  <span>{label}</span>
                  <span>{width}</span>
                </div>
                <div className="h-2 rounded-full bg-slate-200 dark:bg-white/10">
                  <div
                    className="h-2 rounded-full bg-purple-600"
                    style={{ width }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-2 sm:grid-cols-3 lg:grid-cols-1">
          {[
            ["9", "Active workflows"],
            ["2/5", "Branches ready"],
            ["58%", "Scale score"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="rounded-2xl border border-purple-100 bg-white p-3 dark:border-white/10 dark:bg-white/[0.04]"
            >
              <p className="text-xl font-black text-slate-950 dark:text-white">
                {value}
              </p>
              <p className="mt-1 text-[10px] font-bold text-slate-500 dark:text-slate-400">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CostVisual() {
  return (
    <div className="rounded-[1.3rem] border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-amber-50 p-4 shadow-[0_18px_45px_rgba(234,88,12,0.08)] dark:border-orange-300/10 dark:from-orange-400/10 dark:via-white/[0.04] dark:to-amber-400/10">
      <MiniHeader
        label="Cost control"
        title="Subscription overlap vs owned workflow value"
        tone="orange"
      />

      <div className="mt-4 grid gap-3 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-3xl border border-orange-100 bg-white p-4 dark:border-white/10 dark:bg-slate-950/35">
          <p className="text-xs font-black text-slate-700 dark:text-slate-200">
            Monthly Tool Stack
          </p>

          <div className="mt-4 space-y-2">
            {[
              ["CRM", "$2.1K"],
              ["Automation", "$1.4K"],
              ["Support", "$1.8K"],
              ["Reports", "$1.2K"],
              ["Manual Ops", "$1.9K"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="flex items-center justify-between rounded-2xl bg-orange-50/70 px-3 py-2 dark:bg-white/[0.04]"
              >
                <span className="text-xs font-bold text-slate-600 dark:text-slate-300">
                  {label}
                </span>
                <span className="text-xs font-black text-slate-950 dark:text-white">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-orange-100 bg-white p-4 dark:border-white/10 dark:bg-slate-950/35">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-black text-slate-700 dark:text-slate-200">
                Cost Pressure
              </p>
              <p className="mt-3 text-4xl font-black text-slate-950 dark:text-white">
                $8.4K
              </p>
              <p className="mt-1 text-xs font-bold text-rose-600 dark:text-rose-300">
                Monthly overlap
              </p>
            </div>

            <RingScore value={46} label="ROI" color="#f97316" />
          </div>

          <div className="mt-5 rounded-2xl bg-orange-50/70 p-3 dark:bg-white/[0.04]">
            <div className="flex items-center justify-between text-[11px] font-bold text-slate-500 dark:text-slate-400">
              <span>Current tool cost</span>
              <span>Owned workflow target</span>
            </div>
            <div className="mt-2 grid grid-cols-[1fr_0.62fr] gap-2">
              <div className="h-3 rounded-full bg-rose-400" />
              <div className="h-3 rounded-full bg-emerald-400" />
            </div>
            <div className="mt-2 flex justify-between text-xs font-black">
              <span className="text-rose-600 dark:text-rose-300">
                $8.4K/mo
              </span>
              <span className="text-emerald-600 dark:text-emerald-300">
                Lower recurring cost
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChallengeVisualPanel({ visual }: { visual: ChallengeVisual }) {
  if (visual === "data") return <DataSilosVisual />;
  if (visual === "process") return <ManualWorkVisual />;
  if (visual === "visibility") return <VisibilityVisual />;
  if (visual === "security") return <SecurityVisual />;
  if (visual === "scaling") return <ScalingVisual />;
  return <CostVisual />;
}

export default function HomeBusinessChallengesSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [hasEnteredView, setHasEnteredView] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const sectionNode = sectionRef.current;

    if (!sectionNode) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEnteredView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.22,
        rootMargin: "0px 0px -12% 0px",
      },
    );

    observer.observe(sectionNode);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white py-12 text-slate-950 sm:py-14 lg:py-16 dark:bg-slate-950 dark:text-white"
    >
      <div className="pointer-events-none absolute left-[-18rem] top-[-12rem] h-[32rem] w-[32rem] rounded-full bg-blue-100/80 blur-3xl dark:bg-blue-950/35" />
      <div className="pointer-events-none absolute right-[-16rem] top-[-14rem] h-[30rem] w-[30rem] rounded-full bg-indigo-100/80 blur-3xl dark:bg-indigo-950/30" />
      <div className="pointer-events-none absolute bottom-[-18rem] left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-cyan-100/60 blur-3xl dark:bg-cyan-950/20" />

      <div className="relative mx-auto w-full max-w-[min(92vw,1440px)] px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <div
          className={`mx-auto max-w-3xl text-center transition-all duration-700 ease-out ${
            hasEnteredView
              ? "translate-y-0 opacity-100 blur-0"
              : "translate-y-6 opacity-0 blur-sm"
          }`}
        >
          <div className="flex justify-center">
            <SectionBadge>Business Challenges</SectionBadge>
          </div>

          <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl dark:text-white">
            Business Challenges
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm font-medium leading-6 text-slate-600 sm:text-base dark:text-slate-300">
            Common obstacles slowing growth, efficiency, and ownership.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-7xl space-y-2.5">
          {challengeItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeIndex === index;
            const theme = challengeThemeClasses[item.visual];

            return (
              <article
                key={item.title}
                style={{
                  transitionDelay: hasEnteredView
                    ? `${300 + index * 500}ms`
                    : "0ms",
                }}
                className={`relative overflow-hidden rounded-[1.25rem] border bg-white/90 shadow-[0_14px_42px_rgba(15,23,42,0.055)] backdrop-blur transition-all duration-[850ms] ease-out before:pointer-events-none before:absolute before:left-0 before:top-0 before:h-full before:w-1.5 before:content-[''] dark:bg-white/[0.04] ${
                  theme.border
                } ${
                  hasEnteredView
                    ? "translate-y-0 scale-100 opacity-100 blur-0"
                    : "translate-y-8 scale-[0.985] opacity-0 blur-sm"
                } ${
                  isActive
                    ? `${theme.activeBorder} ring-1`
                    : `border-slate-200 hover:-translate-y-0.5 hover:border-slate-300 ${theme.glow} dark:border-white/10 dark:hover:border-white/20`
                }`}
              >
                <button
                  type="button"
                  aria-expanded={isActive}
                  onClick={() => setActiveIndex(isActive ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-4 py-3.5 text-left sm:px-6"
                >
                  <div className="flex min-w-0 items-center gap-3.5">
                    <div
                      className={`grid h-10 w-10 shrink-0 place-items-center rounded-2xl text-lg transition ${
                        isActive ? theme.activeIcon : theme.icon
                      }`}
                    >
                      <Icon />
                    </div>

                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-sm font-black text-slate-950 sm:text-lg dark:text-white">
                          {item.title}
                        </h3>

                        <span
                          className={`rounded-lg px-2 py-0.5 text-[10px] font-black ${theme.tag}`}
                        >
                          {item.tag}
                        </span>

                        {isActive ? (
                          <span className="rounded-lg bg-slate-950 px-2 py-0.5 text-[10px] font-black text-white dark:bg-white dark:text-slate-950">
                            Active Issue
                          </span>
                        ) : null}
                      </div>
                    </div>
                  </div>

                  <span
                    className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border text-base shadow-sm transition ${
                      isActive
                        ? `${theme.activeIcon} border-transparent`
                        : "border-slate-200 bg-white text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                    }`}
                  >
                    {isActive ? <HiChevronUp /> : <HiChevronDown />}
                  </span>
                </button>

                {isActive ? (
                  <div className="border-t border-slate-200 px-4 pb-4 pt-4 sm:px-6 dark:border-white/10">
                    <div className="grid gap-5 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
                      <div>
                        <p className="max-w-xl text-sm font-semibold leading-6 text-slate-600 dark:text-slate-300">
                          {item.summary}
                        </p>

                        <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
                          {item.bullets.map((bullet) => (
                            <div
                              key={bullet}
                              className="flex items-center gap-2 rounded-2xl bg-slate-50 px-3 py-2.5 dark:bg-white/[0.04]"
                            >
                              <div
                                className={`grid h-7 w-7 shrink-0 place-items-center rounded-full ${theme.icon}`}
                              >
                                <HiCheckCircle className="text-base" />
                              </div>
                              <p className="text-xs font-black text-slate-700 dark:text-slate-200">
                                {bullet}
                              </p>
                            </div>
                          ))}
                        </div>

                        <div className="mt-4 rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-3.5 dark:border-blue-300/10 dark:from-blue-400/10 dark:to-white/[0.03]">
                          <div className="flex gap-3">
                            <div
                              className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl shadow-sm ${theme.icon}`}
                            >
                              <HiLightningBolt />
                            </div>
                            <div>
                              <p className="text-xs font-black text-slate-950 dark:text-white">
                                Priority Area
                              </p>
                              <p className="mt-1 text-xs font-semibold leading-5 text-slate-600 dark:text-slate-300">
                                {item.priority}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <ChallengeVisualPanel visual={item.visual} />
                    </div>
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}