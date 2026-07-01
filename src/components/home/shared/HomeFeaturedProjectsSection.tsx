"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import {
  HiArrowRight,
  HiChartBar,
  HiCheckCircle,
  HiChip,
  HiCog,
  HiDesktopComputer,
  HiDeviceMobile,
  HiLightningBolt,
  HiPlay,
  HiUserGroup,
  HiViewGrid,
} from "react-icons/hi";

export default function HomeCommandCenterSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f9ff] py-10 text-slate-950 sm:py-12 lg:py-14 dark:bg-slate-950 dark:text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(59,130,246,0.09),transparent_30%),radial-gradient(circle_at_88%_78%,rgba(139,92,246,0.11),transparent_34%)]" />
      <div className="pointer-events-none absolute -left-40 top-12 h-[380px] w-[380px] rounded-full border border-blue-200/50 opacity-60" />
      <div className="pointer-events-none absolute -right-44 bottom-0 h-[480px] w-[480px] rounded-full border border-violet-200/60 opacity-70" />

      <div className="relative mx-auto w-full max-w-[min(96vw,1560px)] px-3 sm:px-4 lg:px-6 xl:px-8">
        <div className="overflow-hidden bg-white/40 px-2 py-4 backdrop-blur-xl sm:px-3 lg:px-4 dark:bg-white/[0.025]">
          <div className="grid items-center gap-7 lg:grid-cols-[0.34fr_0.66fr] xl:gap-10">
            <div className="max-w-[455px]">
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-50/90 px-4 py-2 text-[10px] font-black uppercase tracking-[0.13em] text-blue-700 shadow-sm dark:bg-blue-500/10 dark:text-blue-300">
                <HiLightningBolt className="text-sm" />
                HNX Solutions
              </span>

              <h2 className="mt-5 max-w-md text-[40px] font-black leading-[0.96] tracking-[-0.055em] text-slate-950 sm:text-5xl lg:text-[58px] dark:text-white">
                Business
                <span className="block bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500 bg-clip-text text-transparent">
                  Command Centre
                </span>
              </h2>

              <div className="mt-4 h-[3px] w-24 rounded-full bg-gradient-to-r from-blue-500 via-indigo-400 to-violet-400" />

              <p className="mt-5 max-w-[445px] text-sm font-medium leading-7 text-slate-600 sm:text-[15px] dark:text-slate-300">
                We first understand your business—your goals, workflows,
                customers, and challenges. Then we design one connected system
                that brings your Website, Mobile App, CRM, Portal, AI Agent, and
                Automations together.
              </p>

              <div className="mt-6 space-y-3.5">
                <FeaturePoint
                  icon={<HiCheckCircle />}
                  title="We Understand Your Business"
                  description="Discovery to align technology with your real goals."
                  tone="blue"
                />
                <FeaturePoint
                  icon={<HiChip />}
                  title="Everything Connected"
                  description="Your systems, data, and workflows work as one."
                  tone="violet"
                />
                <FeaturePoint
                  icon={<HiChartBar />}
                  title="Manage. Automate. Scale."
                  description="One interface to run and grow your business."
                  tone="indigo"
                />
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/services/full-business-suite"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500 px-5 py-3.5 text-sm font-bold text-white shadow-[0_18px_42px_rgba(99,102,241,0.22)] transition hover:-translate-y-0.5"
                >
                  Explore Full Business Suite
                  <HiArrowRight className="text-base" />
                </Link>

                <Link
                  href="/solutions"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3.5 text-sm font-bold text-indigo-600 shadow-[0_10px_28px_rgba(15,23,42,0.07)] transition hover:bg-indigo-50/60 dark:bg-white/[0.04] dark:text-indigo-300"
                >
                  <span className="grid h-6 w-6 place-items-center rounded-full border border-current text-[11px]">
                    <HiPlay className="translate-x-[1px]" />
                  </span>
                  See How It Works
                </Link>
              </div>
            </div>

            <div className="relative lg:-mr-2">
              <div className="pointer-events-none absolute inset-x-16 -bottom-4 h-14 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.22),transparent_68%)] blur-xl" />

              <div className="relative overflow-hidden rounded-[26px] bg-white shadow-[0_26px_72px_rgba(15,23,42,0.10)] dark:bg-slate-900">
                <div className="flex items-center gap-2 px-4 py-3">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>

                <div className="grid grid-cols-[58px_1fr]">
                  <DashboardSidebar />

                  <div className="bg-white p-4 xl:p-5 dark:bg-slate-900">
                    <DashboardHeader />

                    <div className="mt-4 grid gap-3 xl:grid-cols-[1fr_200px_1fr]">
                      <div className="grid gap-3">
                        <NodeCard
                          icon={<HiDesktopComputer />}
                          color="blue"
                          title="Website"
                          status="Live"
                          description="Corporate site & marketing hub"
                        />
                        <NodeCard
                          icon={<HiDeviceMobile />}
                          color="violet"
                          title="Mobile App"
                          status="Live"
                          description="iOS & Android customer app"
                        />
                        <NodeCard
                          icon={<HiUserGroup />}
                          color="emerald"
                          title="CRM"
                          status="Connected"
                          description="Leads, pipeline & customer 360°"
                        />
                      </div>

                      <div className="relative flex items-center justify-center">
                        <ConnectorLines />

                        <div className="relative z-10 w-full rounded-[22px] bg-white p-4 text-center shadow-[0_18px_50px_rgba(99,102,241,0.12)] dark:bg-white/[0.04]">
                          <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-violet-50 text-base text-violet-500">
                            ✦
                          </div>
                          <div className="mt-3 text-sm font-black tracking-[0.12em] text-[#273b77] dark:text-white">
                            HNX
                          </div>
                          <h4 className="mt-2 text-sm font-black leading-5 text-slate-900 dark:text-white">
                            Business Command Centre
                          </h4>
                          <p className="mt-2 text-xs font-medium leading-5 text-slate-500 dark:text-slate-400">
                            Connected system working as one.
                          </p>
                        </div>
                      </div>

                      <div className="grid gap-3">
                        <NodeCard
                          icon={<HiViewGrid />}
                          color="amber"
                          title="Portal"
                          status="Live"
                          description="Client & partner self-service portal"
                        />
                        <NodeCard
                          icon={<HiChip />}
                          color="violet"
                          title="AI Agent"
                          status="Active"
                          description="Automation & intelligent assistance"
                        />
                        <NodeCard
                          icon={<HiCog />}
                          color="cyan"
                          title="Automations"
                          status="Running"
                          description="Workflows, approvals & integrations"
                        />
                      </div>
                    </div>

                    <div className="mt-4 rounded-[20px] bg-[#fbfcff] p-3.5 shadow-[0_12px_32px_rgba(15,23,42,0.04)] dark:bg-white/[0.03]">
                      <div className="grid gap-3 xl:grid-cols-[1fr_0.85fr]">
                        <div>
                          <h4 className="text-sm font-black text-slate-900 dark:text-white">
                            Business Overview
                          </h4>

                          <div className="mt-3 grid gap-2.5 sm:grid-cols-3">
                            <StatCard
                              label="Revenue"
                              value="$2.45M"
                              delta="↑ 18.6%"
                            />
                            <StatCard
                              label="New Leads"
                              value="1,243"
                              delta="↑ 12.4%"
                            />
                            <StatCard
                              label="Customers"
                              value="856"
                              delta="↑ 8.7%"
                            />
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center justify-between gap-3">
                            <h4 className="text-sm font-black text-slate-900 dark:text-white">
                              Performance
                            </h4>
                            <div className="rounded-lg bg-white px-2 py-1 text-[10px] font-semibold text-slate-500 shadow-sm dark:bg-white/[0.04]">
                              Week ▾
                            </div>
                          </div>

                          <div className="mt-3 rounded-[16px] bg-white px-3 py-3 shadow-sm dark:bg-white/[0.04]">
                            <MiniLineChart />
                          </div>
                        </div>
                      </div>

                      <div className="mt-3 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-white px-3.5 py-2.5 text-xs font-semibold text-slate-500 shadow-sm dark:bg-white/[0.04] dark:text-slate-300">
                        <div className="inline-flex items-center gap-2">
                          <span className="grid h-5 w-5 place-items-center rounded-full bg-indigo-50 text-[11px] text-indigo-500">
                            i
                          </span>
                          All systems are healthy and performing optimally.
                        </div>

                        <Link
                          href="/contact"
                          className="font-bold text-indigo-600 transition hover:text-indigo-700 dark:text-indigo-300"
                        >
                          View Health →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* end grid */}
        </div>
      </div>
    </section>
  );
}

function FeaturePoint({
  icon,
  title,
  description,
  tone,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  tone: "blue" | "violet" | "indigo";
}) {
  const tones = {
    blue: "bg-blue-50 text-blue-600",
    violet: "bg-violet-50 text-violet-600",
    indigo: "bg-indigo-50 text-indigo-600",
  };

  return (
    <div className="flex items-start gap-3.5">
      <div
        className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl text-base shadow-sm ${tones[tone]}`}
      >
        {icon}
      </div>
      <div>
        <h3 className="text-[15px] font-black tracking-[-0.03em] text-slate-900 dark:text-white">
          {title}
        </h3>
        <p className="mt-1 text-sm font-medium leading-5 text-slate-500 dark:text-slate-400">
          {description}
        </p>
      </div>
    </div>
  );
}

function DashboardSidebar() {
  return (
    <div className="flex flex-col items-center bg-[#0b1d4d] px-1.5 py-4 text-white">
      <div className="text-[14px] font-black tracking-[0.14em]">HNX</div>

      <div className="mt-7 flex flex-1 flex-col items-center gap-3">
        <SideNavIcon active icon={<HiDesktopComputer />} />
        <SideNavIcon icon={<HiViewGrid />} />
        <SideNavIcon icon={<HiUserGroup />} />
        <SideNavIcon icon={<HiChartBar />} />
        <SideNavIcon icon={<HiLightningBolt />} />
        <SideNavIcon icon={<HiCog />} />
      </div>

      <div className="mt-4 flex flex-col gap-2.5">
        <SideNavSmall>?</SideNavSmall>
        <SideNavSmall>↗</SideNavSmall>
      </div>
    </div>
  );
}

function DashboardHeader() {
  return (
    <div className="flex flex-wrap items-start justify-between gap-3">
      <div>
        <h3 className="text-[22px] font-black tracking-[-0.04em] text-slate-900 dark:text-white">
          Command Centre
        </h3>
        <p className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">
          Overview of your connected business ecosystem.
        </p>
      </div>

      <div className="flex items-center gap-2">
        <div className="inline-flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-xs font-semibold text-slate-600 shadow-sm dark:bg-white/[0.04] dark:text-slate-300">
          <span className="text-slate-400">📅</span>
          May 12 – May 18
          <span className="text-xs">▾</span>
        </div>
        <div className="grid h-9 w-9 place-items-center rounded-full bg-white text-slate-500 shadow-sm dark:bg-white/[0.04]">
          🔔
        </div>
        <div className="grid h-9 w-9 place-items-center rounded-full bg-[linear-gradient(135deg,#dbeafe,#bfdbfe)] text-xs font-black text-slate-700">
          AK
        </div>
      </div>
    </div>
  );
}

function SideNavIcon({
  icon,
  active = false,
}: {
  icon: ReactNode;
  active?: boolean;
}) {
  return (
    <div
      className={[
        "grid h-9 w-9 place-items-center rounded-2xl text-sm transition",
        active
          ? "bg-[#244fc5] text-white shadow-lg"
          : "text-white/80 hover:bg-white/10",
      ].join(" ")}
    >
      {icon}
    </div>
  );
}

function SideNavSmall({ children }: { children: ReactNode }) {
  return (
    <div className="grid h-7 w-7 place-items-center rounded-xl border border-white/10 text-[11px] text-white/70">
      {children}
    </div>
  );
}

function ConnectorLines() {
  return (
    <>
      <div className="pointer-events-none absolute left-0 top-[18%] hidden h-px w-8 border-t border-dashed border-blue-300 xl:block" />
      <div className="pointer-events-none absolute left-0 top-1/2 hidden h-px w-8 -translate-y-1/2 border-t border-dashed border-blue-300 xl:block" />
      <div className="pointer-events-none absolute left-0 bottom-[18%] hidden h-px w-8 border-t border-dashed border-blue-300 xl:block" />

      <div className="pointer-events-none absolute right-0 top-[18%] hidden h-px w-8 border-t border-dashed border-blue-300 xl:block" />
      <div className="pointer-events-none absolute right-0 top-1/2 hidden h-px w-8 -translate-y-1/2 border-t border-dashed border-blue-300 xl:block" />
      <div className="pointer-events-none absolute right-0 bottom-[18%] hidden h-px w-8 border-t border-dashed border-blue-300 xl:block" />
    </>
  );
}

function NodeCard({
  icon,
  color,
  title,
  status,
  description,
}: {
  icon: ReactNode;
  color: "blue" | "violet" | "emerald" | "amber" | "cyan";
  title: string;
  status: string;
  description: string;
}) {
  const styles = {
    blue: "bg-blue-50 text-blue-600",
    violet: "bg-violet-50 text-violet-600",
    emerald: "bg-emerald-50 text-emerald-600",
    amber: "bg-amber-50 text-amber-600",
    cyan: "bg-cyan-50 text-cyan-600",
  };

  return (
    <div className="rounded-[18px] bg-white p-3.5 shadow-[0_10px_28px_rgba(15,23,42,0.06)] dark:bg-white/[0.04]">
      <div className="flex items-start gap-3">
        <div
          className={`grid h-9 w-9 shrink-0 place-items-center rounded-2xl text-base ${styles[color]}`}
        >
          {icon}
        </div>

        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h4 className="text-base font-black leading-none tracking-[-0.03em] text-slate-900 dark:text-white">
              {title}
            </h4>
            <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-600">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              {status}
            </span>
          </div>

          <p className="mt-2 text-[11px] font-medium leading-5 text-slate-500 dark:text-slate-400">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

function StatCard({
  label,
  value,
  delta,
}: {
  label: string;
  value: string;
  delta: string;
}) {
  return (
    <div className="rounded-[15px] bg-white p-3 shadow-sm dark:bg-white/[0.04]">
      <div className="text-[10px] font-semibold text-slate-400">{label}</div>
      <div className="mt-2 text-xl font-black tracking-[-0.04em] text-slate-900 dark:text-white">
        {value}
      </div>
      <div className="mt-1 text-[10px] font-semibold text-emerald-600">
        {delta}
      </div>
    </div>
  );
}

function MiniLineChart() {
  return (
    <div className="space-y-2">
      <div className="flex h-[78px] items-end gap-3">
        <div className="flex h-full w-5 flex-col justify-between text-[9px] font-medium text-slate-300">
          <span>3K</span>
          <span>2K</span>
          <span>1K</span>
          <span>0</span>
        </div>

        <div className="relative flex-1">
          <div className="absolute inset-0 grid grid-rows-4">
            <div className="border-b border-slate-100" />
            <div className="border-b border-slate-100" />
            <div className="border-b border-slate-100" />
            <div />
          </div>

          <svg viewBox="0 0 420 100" className="relative h-[78px] w-full">
            <defs>
              <linearGradient id="cmd-line-fill" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.24" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.04" />
              </linearGradient>
            </defs>

            <path
              d="M0 82 C35 48, 65 52, 92 68 C118 84, 152 38, 188 32 C225 27, 253 64, 289 52 C325 42, 355 58, 386 22 C398 10, 409 12, 420 17 L420 100 L0 100 Z"
              fill="url(#cmd-line-fill)"
            />
            <path
              d="M0 82 C35 48, 65 52, 92 68 C118 84, 152 38, 188 32 C225 27, 253 64, 289 52 C325 42, 355 58, 386 22 C398 10, 409 12, 420 17"
              fill="none"
              stroke="#7c3aed"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      <div className="grid grid-cols-7 text-center text-[9px] font-medium text-slate-400">
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
        <span>Thu</span>
        <span>Fri</span>
        <span>Sat</span>
        <span>Sun</span>
      </div>
    </div>
  );
}