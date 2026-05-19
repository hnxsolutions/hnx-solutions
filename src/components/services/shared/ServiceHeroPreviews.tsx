"use client";

import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Database,
  Gauge,
  Globe2,
  LayoutDashboard,
  LineChart,
  Lock,
  Mail,
  MessageSquareText,
  Rocket,
  Search,
  Send,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import type { ServiceItem } from "@/data/services";
import type { ServiceHeroStat } from "@/components/services/shared/ServiceStatStrip";
import type { ServiceHeroVisualLabel } from "@/components/services/shared/Service3DHeroVisual";

type PreviewProps = {
  service: ServiceItem;
  title: string;
  subtitle: string;
  labels: ServiceHeroVisualLabel[];
  stats: ServiceHeroStat[];
  accentClass: string;
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function BrowserDots() {
  return (
    <div className="flex items-center gap-1.5">
      <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
      <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
      <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
    </div>
  );
}

function PreviewShell({
  children,
  footer,
}: {
  children: ReactNode;
  footer?: ReactNode;
}) {
  return (
    <div className="relative mx-auto w-full max-w-[860px]">
      <div className="absolute -inset-6 rounded-[3rem] bg-[radial-gradient(circle_at_25%_18%,rgba(14,165,233,0.16),transparent_36%),radial-gradient(circle_at_78%_70%,rgba(124,58,237,0.13),transparent_35%)] blur-2xl" />
      <div className="relative overflow-hidden rounded-[2.15rem] border border-slate-200/90 bg-white/86 p-3 shadow-[0_36px_110px_rgba(15,23,42,0.14)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/7 dark:shadow-[0_36px_110px_rgba(0,0,0,0.34)]">
        {children}
      </div>
      {footer ? <div className="relative mt-4">{footer}</div> : null}
    </div>
  );
}

function MiniMetric({
  label,
  value,
  note,
  accentClass,
}: {
  label: string;
  value: string;
  note: string;
  accentClass: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200/90 bg-white/88 p-4 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/7">
      <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-400 dark:text-slate-500">
        {label}
      </p>
      <p
        className={cn(
          "mt-2 bg-gradient-to-r bg-clip-text text-2xl font-black text-transparent",
          accentClass
        )}
      >
        {value}
      </p>
      <p className="mt-1 text-[11px] font-semibold text-slate-500 dark:text-slate-400">
        {note}
      </p>
    </div>
  );
}

function IconTile({
  icon: Icon,
  title,
  detail,
  tone = "blue",
}: {
  icon: LucideIcon;
  title: string;
  detail?: string;
  tone?: "blue" | "green" | "violet" | "orange";
}) {
  const toneClass = {
    blue: "bg-sky-50 text-sky-600 ring-sky-100 dark:bg-sky-400/10 dark:text-sky-200 dark:ring-sky-300/10",
    green:
      "bg-emerald-50 text-emerald-600 ring-emerald-100 dark:bg-emerald-400/10 dark:text-emerald-200 dark:ring-emerald-300/10",
    violet:
      "bg-violet-50 text-violet-600 ring-violet-100 dark:bg-violet-400/10 dark:text-violet-200 dark:ring-violet-300/10",
    orange:
      "bg-orange-50 text-orange-600 ring-orange-100 dark:bg-orange-400/10 dark:text-orange-200 dark:ring-orange-300/10",
  }[tone];

  return (
    <div className="rounded-2xl border border-slate-200/90 bg-white/82 p-4 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/7">
      <div className="flex items-start gap-3">
        <span
          className={cn(
            "grid h-10 w-10 shrink-0 place-items-center rounded-xl ring-1",
            toneClass
          )}
        >
          <Icon className="h-4 w-4" aria-hidden="true" />
        </span>
        <div>
          <p className="text-sm font-black leading-5 text-slate-800 dark:text-white">
            {title}
          </p>
          {detail ? (
            <p className="mt-1 text-xs font-semibold text-slate-500 dark:text-slate-400">
              {detail}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export function WebsiteHeroPreview({ accentClass, stats }: PreviewProps) {
  return (
    <PreviewShell
      footer={
        <div className="grid gap-3 sm:grid-cols-3">
          {stats.slice(0, 3).map((stat) => (
            <MiniMetric
              key={stat.label}
              label={stat.label}
              value={stat.value}
              note={stat.detail}
              accentClass={accentClass}
            />
          ))}
        </div>
      }
    >
      <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white dark:border-white/10 dark:bg-slate-950">
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 dark:border-white/10">
          <div className="flex items-center gap-3">
            <BrowserDots />
            <span className="ml-2 text-sm font-black text-slate-900 dark:text-white">
              Elevate
            </span>
          </div>
          <div className="hidden items-center gap-5 text-[11px] font-bold text-slate-500 dark:text-slate-400 sm:flex">
            <span>Home</span>
            <span>Services</span>
            <span>Case Studies</span>
            <span>Blog</span>
          </div>
          <span className="rounded-xl bg-slate-950 px-3 py-2 text-[10px] font-black text-white dark:bg-white dark:text-slate-950">
            Book a Call
          </span>
        </div>

        <div className="relative grid min-h-[390px] gap-5 overflow-hidden p-6 lg:grid-cols-[1fr_0.95fr]">
          <div className="relative z-10">
            <span className="rounded-full bg-slate-100 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-slate-500 dark:bg-white/10 dark:text-slate-300">
              Results driven websites
            </span>
            <h3 className="mt-6 max-w-sm text-4xl font-black leading-[1.05] tracking-[-0.055em] text-slate-950 dark:text-white">
              We help businesses grow with smarter{" "}
              <span
                className={cn(
                  "bg-gradient-to-r bg-clip-text text-transparent",
                  accentClass
                )}
              >
                digital experiences.
              </span>
            </h3>
            <p className="mt-4 max-w-sm text-sm font-semibold leading-6 text-slate-500 dark:text-slate-400">
              High-performance websites that attract, engage, and convert ideal
              customers.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              {[
                "Conversion focused",
                "SEO optimized",
                "Mobile responsive",
              ].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 text-[11px] font-black text-slate-600 dark:text-slate-300"
                >
                  <CheckCircle2
                    className="h-3.5 w-3.5 text-sky-500"
                    aria-hidden="true"
                  />
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-7 flex gap-3">
              <span className="rounded-xl bg-slate-950 px-4 py-3 text-xs font-black text-white dark:bg-white dark:text-slate-950">
                Get a Free Proposal
              </span>
              <span className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs font-black text-slate-700 dark:border-white/10 dark:bg-white/7 dark:text-slate-200">
                See Our Work
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-10 top-0 h-64 w-64 rounded-[3rem] bg-gradient-to-br from-sky-200 via-cyan-100 to-violet-100 opacity-80 dark:from-sky-500/20 dark:via-cyan-400/10 dark:to-violet-500/20" />

            <div className="absolute right-8 top-10 rounded-2xl border border-slate-200 bg-white/94 p-4 shadow-[0_18px_45px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-slate-900/90">
              <p className="text-[10px] font-black text-slate-400">
                Leads This Month
              </p>
              <p className="mt-1 text-2xl font-black text-slate-950 dark:text-white">
                248
              </p>
              <div className="mt-3 h-10 w-28 rounded-xl bg-[linear-gradient(135deg,rgba(14,165,233,0.18),rgba(124,58,237,0.12))]" />
            </div>

            <div className="absolute right-0 top-32 w-56 rounded-2xl border border-slate-200 bg-white/96 p-4 shadow-[0_18px_45px_rgba(15,23,42,0.14)] dark:border-white/10 dark:bg-slate-900/92">
              <p className="text-sm font-black text-slate-900 dark:text-white">
                Get a Free Website Plan
              </p>
              <p className="mt-1 text-xs font-semibold text-slate-500 dark:text-slate-400">
                Tell us about your project.
              </p>
              <div className="mt-4 space-y-2">
                {["Your Name", "Work Email", "What do you need?"].map(
                  (field) => (
                    <div
                      key={field}
                      className="rounded-xl bg-slate-50 px-3 py-2 text-[11px] font-semibold text-slate-400 dark:bg-white/7"
                    >
                      {field}
                    </div>
                  )
                )}
              </div>
              <div
                className={cn(
                  "mt-3 rounded-xl bg-gradient-to-r px-3 py-2 text-center text-[11px] font-black text-white",
                  accentClass
                )}
              >
                Send Request
              </div>
            </div>

            <div className="absolute bottom-4 left-0 rounded-2xl border border-slate-200 bg-white/94 p-4 shadow-[0_18px_45px_rgba(15,23,42,0.10)] dark:border-white/10 dark:bg-slate-900/92">
              <div className="grid h-16 w-16 place-items-center rounded-full border-[7px] border-cyan-400 text-lg font-black text-slate-950 dark:text-white">
                98
              </div>
              <p className="mt-2 text-[10px] font-black text-slate-400">
                Page Speed
              </p>
            </div>
          </div>
        </div>
      </div>
    </PreviewShell>
  );
}

export function CrmHeroPreview({ accentClass }: PreviewProps) {
  const columns = [
    ["New Lead", "23", ["Acme Corp", "BlueStone Ltd.", "Northwind Inc."]],
    ["Qualified", "16", ["TechNova", "Innotech", "BrightWave"]],
    ["Proposal", "11", ["Velocity Systems", "DataCore", "Summit Labs"]],
    ["Negotiation", "7", ["Globex Corp", "Zentrix Solutions"]],
    ["Closed Won", "8", ["Alpha Systems", "Omega Pvt. Ltd."]],
  ];

  return (
    <PreviewShell
      footer={
        <div className="grid gap-3 sm:grid-cols-4">
          <IconTile
            icon={ShieldCheck}
            title="100% Custom Built"
            detail="Your workflow"
            tone="green"
          />
          <IconTile icon={Lock} title="Your Data" detail="Full control" tone="green" />
          <IconTile
            icon={BarChart3}
            title="Smart Reports"
            detail="Realtime view"
            tone="blue"
          />
          <IconTile icon={Rocket} title="Built to Scale" detail="No limits" tone="violet" />
        </div>
      }
    >
      <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white dark:border-white/10 dark:bg-slate-950">
        <div className="grid min-h-[540px] lg:grid-cols-[150px_1fr]">
          <aside className="border-r border-slate-100 bg-slate-50/86 p-4 dark:border-white/10 dark:bg-white/5">
            <div className="mb-6 flex items-center gap-2">
              <span
                className={cn(
                  "grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-r text-xs font-black text-white",
                  accentClass
                )}
              >
                H
              </span>
              <span className="text-xs font-black text-slate-900 dark:text-white">
                HNX CRM
              </span>
            </div>

            {["Dashboard", "Leads", "Deals", "Contacts", "Companies"].map(
              (item, index) => (
                <div
                  key={item}
                  className={cn(
                    "mb-2 flex items-center gap-2 rounded-xl px-3 py-2 text-[11px] font-black",
                    index === 0
                      ? "bg-blue-600 text-white"
                      : "text-slate-500 dark:text-slate-400"
                  )}
                >
                  <LayoutDashboard className="h-3.5 w-3.5" aria-hidden="true" />
                  {item}
                </div>
              )
            )}
          </aside>

          <div className="p-5">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <h3 className="text-2xl font-black tracking-[-0.04em] text-slate-950 dark:text-white">
                  Dashboard
                </h3>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  Pipeline, tasks, and revenue in one system.
                </p>
              </div>
              <span className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-[10px] font-black text-slate-500 dark:border-white/10 dark:bg-white/7">
                This Month
              </span>
            </div>

            <div className="mb-4 grid grid-cols-4 gap-3">
              {[
                ["Total Deals", "128", "+18%"],
                ["Pipeline", "₹48.6L", "+22%"],
                ["Won Deals", "26", "+30%"],
                ["Win Rate", "32%", "+8%"],
              ].map(([label, value, change]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm dark:border-white/10 dark:bg-white/7"
                >
                  <p className="text-[10px] font-black text-slate-400">
                    {label}
                  </p>
                  <div className="mt-2 flex items-end justify-between gap-1">
                    <p className="text-lg font-black text-slate-950 dark:text-white">
                      {value}
                    </p>
                    <p className="text-[10px] font-black text-emerald-500">
                      {change}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-white/7">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-sm font-black text-slate-950 dark:text-white">
                  Sales Pipeline
                </p>
                <p className="text-[10px] font-black uppercase tracking-[0.14em] text-slate-400">
                  Live board
                </p>
              </div>

              <div className="grid gap-3 lg:grid-cols-5">
                {columns.map(([title, count, names]) => (
                  <div
                    key={title as string}
                    className="rounded-xl border border-slate-200 bg-slate-50/80 p-2 dark:border-white/10 dark:bg-white/5"
                  >
                    <div className="mb-2 flex justify-between text-[10px] font-black text-slate-500 dark:text-slate-400">
                      <span>{title as string}</span>
                      <span>{count as string}</span>
                    </div>

                    <div className="space-y-2">
                      {(names as string[]).map((name, index) => (
                        <div
                          key={name}
                          className="rounded-lg bg-white p-2 shadow-sm dark:bg-slate-950/60"
                        >
                          <div className="flex items-center gap-1.5">
                            <Building2
                              className="h-3 w-3 text-blue-500"
                              aria-hidden="true"
                            />
                            <span className="truncate text-[10px] font-black text-slate-700 dark:text-slate-200">
                              {name}
                            </span>
                          </div>
                          <div className="mt-1 flex justify-between text-[9px] font-bold text-slate-400">
                            <span>{index + 1}d ago</span>
                            <span>
                              ₹{index + 2}.{index + 4}L
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-white/7">
                <p className="text-xs font-black text-slate-900 dark:text-white">
                  Revenue
                </p>
                <p
                  className={cn(
                    "mt-3 bg-gradient-to-r bg-clip-text text-2xl font-black text-transparent",
                    accentClass
                  )}
                >
                  ₹48.6L
                </p>
                <div className="mt-3 h-12 rounded-xl bg-[linear-gradient(135deg,rgba(14,165,233,0.16),rgba(124,58,237,0.10))]" />
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-white/7">
                <p className="text-xs font-black text-slate-900 dark:text-white">
                  Tasks Due
                </p>
                <div className="mt-3 space-y-2">
                  {["Follow up", "Demo", "Proposal"].map((task) => (
                    <div
                      key={task}
                      className="flex justify-between text-[10px] font-bold text-slate-500"
                    >
                      <span>{task}</span>
                      <span className="text-rose-500">High</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-white/7">
                <p className="text-xs font-black text-slate-900 dark:text-white">
                  Activities
                </p>
                <div className="mt-3 grid h-16 w-16 place-items-center rounded-full border-[8px] border-violet-400 text-sm font-black text-slate-950 dark:text-white">
                  236
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PreviewShell>
  );
}

function PhoneMockup({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative h-[405px] w-[205px] rounded-[2.5rem] border-[7px] border-slate-950 bg-slate-950 p-2 shadow-[0_30px_70px_rgba(15,23,42,0.25)] dark:border-slate-900 dark:bg-slate-900 dark:shadow-[0_30px_90px_rgba(14,165,233,0.16)]",
        className
      )}
    >
      <div className="absolute left-1/2 top-3 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-slate-950 dark:bg-slate-900" />
      <div className="h-full overflow-hidden rounded-[1.9rem] bg-white text-slate-950 shadow-inner dark:bg-[#f8fbff] dark:text-slate-950">
        {children}
      </div>
    </div>
  );
}

export function MobileHeroPreview({ accentClass }: PreviewProps) {
  return (
    <PreviewShell
      footer={
        <div className="grid gap-3 sm:grid-cols-4">
          <IconTile
            icon={ShieldCheck}
            title="Secure & Scalable"
            detail="Enterprise-ready"
            tone="green"
          />
          <IconTile
            icon={Zap}
            title="High Performance"
            detail="Fast and stable"
            tone="blue"
          />
          <IconTile
            icon={Smartphone}
            title="Modern UI"
            detail="Users love it"
            tone="violet"
          />
          <IconTile
            icon={Rocket}
            title="Store Ready"
            detail="Launch support"
            tone="orange"
          />
        </div>
      }
    >
      <div className="relative min-h-[545px] overflow-hidden rounded-[1.75rem] border border-slate-200 bg-[linear-gradient(135deg,#ffffff_0%,#f7fbff_52%,#f3f0ff_100%)] p-6 dark:border-white/10 dark:bg-[linear-gradient(135deg,#101827_0%,#132033_48%,#211a42_100%)]">
        <div className="absolute inset-0 opacity-80 dark:opacity-100">
          <div className="absolute left-10 top-8 h-72 w-72 rounded-full bg-sky-200/35 blur-3xl dark:bg-sky-400/20" />
          <div className="absolute right-10 top-14 h-80 w-80 rounded-full bg-violet-200/35 blur-3xl dark:bg-violet-400/20" />
          <div className="absolute bottom-8 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-100/50 blur-3xl dark:bg-cyan-300/10" />
        </div>

        <div className="absolute left-1/2 top-16 h-96 w-96 -translate-x-1/2 rounded-full border border-sky-200 dark:border-sky-300/18" />
        <div className="absolute left-1/2 top-28 h-72 w-72 -translate-x-1/2 rounded-full border border-violet-200 dark:border-violet-300/18" />

        <div className="relative flex min-h-[470px] items-center justify-center gap-4">
          <PhoneMockup className="-rotate-6 scale-[0.92] dark:opacity-95">
            <div className="p-5">
              <p className="mt-10 text-xs font-black text-blue-600">Pulse</p>
              <h3 className="mt-8 text-2xl font-black leading-tight text-slate-950">
                Better habits.{" "}
                <span className="text-blue-600">Stronger you.</span>
              </h3>
              <p className="mt-3 text-xs font-semibold leading-5 text-slate-500">
                Track, improve, and achieve your daily wellness goals.
              </p>
              <div className="mt-8 h-32 rounded-3xl bg-gradient-to-br from-blue-100 to-violet-100" />
              <div
                className={cn(
                  "mt-8 rounded-2xl bg-gradient-to-r px-4 py-3 text-center text-xs font-black text-white",
                  accentClass
                )}
              >
                Get Started
              </div>
            </div>
          </PhoneMockup>

          <PhoneMockup className="z-10 scale-105 dark:opacity-100">
            <div className="p-5">
              <p className="mt-8 text-sm font-black text-slate-950">
                Good morning, Alex 👋
              </p>
              <p className="text-xs font-semibold text-slate-500">
                Here is your progress for today
              </p>

              <div
                className={cn(
                  "mt-5 rounded-3xl bg-gradient-to-r p-4 text-white shadow-[0_18px_45px_rgba(37,99,235,0.20)]",
                  accentClass
                )}
              >
                <p className="text-[10px] font-black uppercase tracking-wider opacity-80">
                  Daily Steps
                </p>
                <p className="mt-2 text-3xl font-black">8,432</p>
                <div className="mt-4 h-16 rounded-2xl bg-white/18" />
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-slate-50 p-3">
                  <p className="text-[10px] font-black text-slate-400">
                    Calories
                  </p>
                  <p className="text-xl font-black text-slate-950">540</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-3">
                  <p className="text-[10px] font-black text-slate-400">
                    Sleep
                  </p>
                  <p className="text-xl font-black text-slate-950">7h</p>
                </div>
              </div>
            </div>
          </PhoneMockup>

          <PhoneMockup className="rotate-6 scale-[0.92] dark:opacity-95">
            <div className="p-5">
              <div className="mt-8 flex items-center justify-between">
                <p className="text-sm font-black text-slate-950">
                  Book Appointment
                </p>
                <Search className="h-4 w-4 text-slate-400" />
              </div>
              <div className="mt-5 rounded-2xl bg-slate-50 px-3 py-2 text-[10px] font-semibold text-slate-400">
                Search services
              </div>
              <p className="mt-5 text-xs font-black text-slate-900">
                Top Experts
              </p>
              <div className="mt-3 space-y-3">
                {["Dr. Sarah", "Jacob Lee", "Emily Clark"].map((person) => (
                  <div
                    key={person}
                    className="flex items-center justify-between rounded-2xl bg-slate-50 p-2"
                  >
                    <span className="text-[10px] font-black text-slate-700">
                      {person}
                    </span>
                    <span className="rounded-full bg-blue-50 px-2 py-1 text-[9px] font-black text-blue-600">
                      Book
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </PhoneMockup>
        </div>

        <div className="absolute bottom-7 right-8 w-72 rounded-3xl border border-slate-200 bg-white/94 p-5 shadow-[0_22px_60px_rgba(15,23,42,0.14)] backdrop-blur-xl dark:border-white/10 dark:bg-white/92 dark:shadow-[0_22px_70px_rgba(14,165,233,0.16)]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-black text-slate-900">
                App Performance
              </p>
              <p className="text-[10px] font-bold text-slate-500">Excellent</p>
            </div>
            <div className="grid h-16 w-16 place-items-center rounded-full border-[8px] border-cyan-400 text-sm font-black text-slate-950">
              98%
            </div>
          </div>

          <div className="mt-4 space-y-2">
            {[
              ["Users", "12.4K", "+18%"],
              ["Sessions", "45.7K", "+22%"],
              ["Retention", "64%", "+12%"],
            ].map(([label, value, change]) => (
              <div
                key={label}
                className="flex items-center justify-between text-[11px] font-black"
              >
                <span className="text-slate-500">{label}</span>
                <span className="text-slate-950">{value}</span>
                <span className="text-cyan-600">{change}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PreviewShell>
  );
}

export function AiAutomationHeroPreview({ accentClass }: PreviewProps) {
  const steps: Array<
    [string, string, LucideIcon, "blue" | "green" | "violet"]
  > = [
    ["New Lead Captured", "Website form submission", Users, "blue"],
    ["AI Lead Qualifier", "Scores and qualifies lead", Bot, "violet"],
    ["Route to Right Owner", "Assigns based on rules", Workflow, "blue"],
    ["Follow-up Automation", "Email/SMS sequence", Mail, "green"],
    ["Update CRM & Notify", "Log activity and alert team", Database, "blue"],
  ];

  return (
    <PreviewShell
      footer={
        <div className="mx-auto flex max-w-md items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white/86 px-5 py-4 text-sm font-black text-blue-700 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/7 dark:text-cyan-200">
          <Sparkles className="h-5 w-5" aria-hidden="true" />
          AI working 24/7 so your business never stops.
        </div>
      }
    >
      <div className="relative min-h-[535px] overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(14,165,233,0.14)_1px,transparent_0)] [background-size:22px_22px] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(125,211,252,0.10)_1px,transparent_0)]" />

        <div className="relative grid gap-5 lg:grid-cols-[0.86fr_1.14fr]">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 text-sm font-black text-slate-900 shadow-sm dark:border-white/10 dark:bg-slate-900/90 dark:text-white">
              <Sparkles className="h-4 w-4 text-blue-500" />
              AI Automation Workflow
            </div>

            <div className="space-y-4">
              {steps.map(([stepTitle, detail, Icon, tone], index) => (
                <div key={stepTitle} className="relative">
                  {index < steps.length - 1 ? (
                    <span className="absolute left-8 top-16 h-4 w-px bg-slate-200 dark:bg-white/10" />
                  ) : null}

                  <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white/92 p-4 shadow-sm dark:border-white/10 dark:bg-slate-900/92">
                    <span
                      className={cn(
                        "grid h-12 w-12 shrink-0 place-items-center rounded-2xl text-white",
                        tone === "green"
                          ? "bg-emerald-500"
                          : tone === "violet"
                            ? "bg-violet-600"
                            : "bg-blue-600"
                      )}
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-sm font-black text-slate-900 dark:text-white">
                        {stepTitle}
                      </p>
                      <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                        {detail}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <div className="rounded-3xl border border-slate-200 bg-white/94 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.10)] dark:border-white/10 dark:bg-slate-900/92">
              <div className="flex items-center gap-4">
                <span
                  className={cn(
                    "grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-r text-white",
                    accentClass
                  )}
                >
                  <Bot className="h-7 w-7" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xl font-black text-slate-950 dark:text-white">
                    AI Assistant
                  </p>
                  <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                    How can I help you today?
                  </p>
                </div>
              </div>

              <div className="mt-5 space-y-3">
                {[
                  "Summarize today's leads",
                  "Draft a follow-up email",
                  "Show pipeline summary",
                ].map((action) => (
                  <div
                    key={action}
                    className="inline-flex w-full items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-bold text-blue-700 dark:border-white/10 dark:bg-white/7 dark:text-cyan-200"
                  >
                    <ClipboardCheck className="h-4 w-4" aria-hidden="true" />
                    {action}
                  </div>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 dark:border-white/10 dark:bg-slate-950">
                <span className="flex-1 text-sm font-semibold text-slate-400">
                  Ask anything...
                </span>
                <span
                  className={cn(
                    "grid h-10 w-10 place-items-center rounded-full bg-gradient-to-r text-white",
                    accentClass
                  )}
                >
                  <Send className="h-4 w-4" aria-hidden="true" />
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-3xl border border-slate-200 bg-white/94 p-5 shadow-sm dark:border-white/10 dark:bg-slate-900/92">
                <p className="text-sm font-black text-slate-900 dark:text-white">
                  Automation Impact
                </p>
                <p
                  className={cn(
                    "mt-4 bg-gradient-to-r bg-clip-text text-3xl font-black text-transparent",
                    accentClass
                  )}
                >
                  1,246
                </p>
                <p className="mt-1 text-xs font-black text-emerald-500">
                  ↑ 28% this month
                </p>
                <div className="mt-4 h-14 rounded-2xl bg-[linear-gradient(135deg,rgba(14,165,233,0.16),rgba(124,58,237,0.10))]" />
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white/94 p-5 shadow-sm dark:border-white/10 dark:bg-slate-900/92">
                <p className="text-sm font-black text-slate-900 dark:text-white">
                  Lead Score
                </p>
                <div className="mt-4 flex items-center gap-4">
                  <div className="grid h-20 w-20 place-items-center rounded-full border-[10px] border-violet-500 text-xl font-black text-slate-950 dark:text-white">
                    82%
                  </div>
                  <div>
                    <p className="text-sm font-black text-slate-900 dark:text-white">
                      High Quality
                    </p>
                    <p className="mt-1 text-xs font-black text-emerald-500">
                      ↑ 18% vs last month
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PreviewShell>
  );
}

export function GenericServiceHeroPreview({
  service,
  title,
  subtitle,
  labels,
  stats,
  accentClass,
}: PreviewProps) {
  const featureIcons = [
    Globe2,
    Target,
    LineChart,
    ShieldCheck,
    Gauge,
    MessageSquareText,
  ];

  return (
    <PreviewShell
      footer={
        <div className="grid gap-3 sm:grid-cols-3">
          {stats.slice(0, 3).map((stat) => (
            <MiniMetric
              key={stat.label}
              label={stat.label}
              value={stat.value}
              note={stat.detail}
              accentClass={accentClass}
            />
          ))}
        </div>
      }
    >
      <div className="relative min-h-[520px] overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-slate-950">
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-sky-100 blur-3xl dark:bg-sky-500/10" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-violet-100 blur-3xl dark:bg-violet-500/10" />

        <div className="relative">
          <div className="mb-5 flex items-center justify-between border-b border-slate-100 pb-4 dark:border-white/10">
            <div className="flex items-center gap-3">
              <BrowserDots />
              <span className="text-sm font-black text-slate-950 dark:text-white">
                {service.title} System
              </span>
            </div>
            <span
              className={cn(
                "rounded-xl bg-gradient-to-r px-3 py-2 text-xs font-black text-white",
                accentClass
              )}
            >
              Live Preview
            </span>
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-3xl bg-slate-950 p-7 text-white">
              <span className="rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-slate-300">
                Production ready
              </span>
              <h3 className="mt-7 text-4xl font-black leading-tight tracking-[-0.05em]">
                {title}
              </h3>
              <p className="mt-4 text-sm font-semibold leading-6 text-slate-300">
                {subtitle}
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3">
                {labels.slice(0, 4).map((label) => (
                  <div
                    key={`${label.label}-${label.value}`}
                    className="rounded-2xl border border-white/10 bg-white/8 p-4"
                  >
                    <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">
                      {label.label}
                    </p>
                    <p className="mt-2 text-sm font-black text-white">
                      {label.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {service.features.slice(0, 6).map((feature, index) => {
                const Icon = featureIcons[index % featureIcons.length];

                return (
                  <div
                    key={feature}
                    className="rounded-3xl border border-slate-200 bg-slate-50/80 p-5 dark:border-white/10 dark:bg-white/5"
                  >
                    <span
                      className={cn(
                        "grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-r text-white",
                        accentClass
                      )}
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <p className="mt-7 text-base font-black text-slate-950 dark:text-white">
                      {feature}
                    </p>
                    <p className="mt-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
                      Built into your project scope.
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </PreviewShell>
  );
}