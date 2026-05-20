"use client";

import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  FileSearch,
  PenTool,
  Share2,
  BarChart3,
  Bot,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  CreditCard,
  Database,
  Gauge,
  Globe2,
  LayoutDashboard,
  LineChart,
  Type,
  TrendingUp,
  Palette,
  MousePointerClick,
  Layers3,
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
  compact = false,
}: {
  children: ReactNode;
  footer?: ReactNode;
  compact?: boolean;
}) {
  return (
    <div className={cn("relative mx-auto w-full", compact ? "max-w-[815px]" : "max-w-[860px]")}>
      <div className="absolute -inset-5 rounded-[3rem] bg-[radial-gradient(circle_at_25%_18%,rgba(14,165,233,0.14),transparent_36%),radial-gradient(circle_at_78%_70%,rgba(124,58,237,0.12),transparent_35%)] blur-2xl" />
      <div className="relative overflow-hidden rounded-[2.15rem] border border-slate-200/90 bg-white/86 p-3 shadow-[0_34px_95px_rgba(15,23,42,0.13)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/7 dark:shadow-[0_34px_95px_rgba(0,0,0,0.34)]">
        {children}
      </div>
      {footer ? <div className="relative mt-3">{footer}</div> : null}
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
    <div className="rounded-2xl border border-slate-200/90 bg-white/82 p-3 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/7">
      <div className="flex items-start gap-3">
        <span
          className={cn(
            "grid h-9 w-9 shrink-0 place-items-center rounded-xl ring-1",
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
            <p className="mt-0.5 text-xs font-semibold text-slate-500 dark:text-slate-400">
              {detail}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function CompactSidebar({
  title,
  active,
  accentClass,
  items,
}: {
  title: string;
  active: string;
  accentClass: string;
  items: string[];
}) {
  return (
    <aside className="border-r border-slate-100 bg-slate-50/90 p-3 dark:border-white/10 dark:bg-white/5">
      <div className="mb-4 flex items-center gap-2">
        <span
          className={cn(
            "grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-r text-xs font-black text-white",
            accentClass
          )}
        >
          {title.charAt(0)}
        </span>
        <span className="text-[11px] font-black text-slate-900 dark:text-white">
          {title}
        </span>
      </div>

      {items.map((item) => (
        <div
          key={item}
          className={cn(
            "mb-2 flex items-center gap-2 rounded-xl px-2.5 py-2 text-[10px] font-black",
            item === active
              ? "bg-blue-600 text-white"
              : "text-slate-500 dark:text-slate-400"
          )}
        >
          <LayoutDashboard className="h-3.5 w-3.5" aria-hidden="true" />
          {item}
        </div>
      ))}
    </aside>
  );
}

function AutomationFooter() {
  return (
    <div className="grid gap-3 sm:grid-cols-4">
      <IconTile icon={ShieldCheck} title="Controlled" detail="Safe review" tone="green" />
      <IconTile icon={Zap} title="Fast Actions" detail="No delay" tone="blue" />
      <IconTile icon={BarChart3} title="Trackable" detail="Live metrics" tone="violet" />
      <IconTile icon={Rocket} title="Scale Ready" detail="Built to grow" tone="orange" />
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
              {["Conversion focused", "SEO optimized", "Mobile responsive"].map(
                (item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 text-[11px] font-black text-slate-600 dark:text-slate-300"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-sky-500" />
                    {item}
                  </span>
                )
              )}
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
  const pipelineColumns = [
    ["Lead", "23", ["Website enquiry", "WhatsApp lead"]],
    ["Qualified", "16", ["Discovery call", "Need confirmed"]],
    ["Proposal", "11", ["Quote sent", "Follow-up due"]],
    ["Won", "8", ["Payment done", "Kickoff booked"]],
  ];

  return (
    <PreviewShell
      footer={
        <div className="grid gap-3 sm:grid-cols-4">
          <IconTile icon={ShieldCheck} title="Custom Built" detail="Your workflow" tone="green" />
          <IconTile icon={Lock} title="Your Data" detail="Full control" tone="green" />
          <IconTile icon={BarChart3} title="Reports" detail="Realtime" tone="blue" />
          <IconTile icon={Rocket} title="Scalable" detail="No limits" tone="violet" />
        </div>
      }
    >
      <div className="relative min-h-[415px] overflow-hidden rounded-[1.75rem] border border-slate-200 bg-[linear-gradient(135deg,#ffffff_0%,#f8fbff_52%,#f4f0ff_100%)] p-3 dark:border-white/10 dark:bg-[linear-gradient(135deg,#0f172a_0%,#111827_52%,#1e1b4b_100%)]">
        <div className="pointer-events-none absolute -right-16 top-4 h-72 w-72 rounded-full bg-sky-200/45 blur-3xl dark:bg-sky-400/10" />
        <div className="pointer-events-none absolute -bottom-20 left-16 h-72 w-72 rounded-full bg-violet-200/45 blur-3xl dark:bg-violet-400/10" />

        <div className="relative overflow-hidden rounded-[1.45rem] border border-slate-200 bg-white/92 shadow-[0_22px_70px_rgba(15,23,42,0.11)] backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/82">
          <div className="grid min-h-[388px] lg:grid-cols-[114px_1fr]">
            <CompactSidebar
              title="CRM"
              active="Leads"
              accentClass={accentClass}
              items={["Leads", "Deals", "Tasks", "Reports", "Admin"]}
            />

            <div className="p-3.5">
              <div className="mb-3 flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-black tracking-[-0.035em] text-slate-950 dark:text-white">
                    Sales CRM
                  </h3>
                  <p className="mt-0.5 text-xs font-semibold text-slate-500 dark:text-slate-400">
                    Leads, pipeline, follow-ups, and revenue.
                  </p>
                </div>

                <span className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-[10px] font-black text-slate-500 dark:border-white/10 dark:bg-white/7">
                  Live
                </span>
              </div>

              <div className="mb-3 grid grid-cols-4 gap-2">
                {[
                  ["Leads", "128", "+18%"],
                  ["Pipeline", "₹48.6L", "+22%"],
                  ["Won", "26", "+30%"],
                  ["Tasks", "42", "Due"],
                ].map(([label, value, change]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-slate-200 bg-white p-2.5 shadow-sm dark:border-white/10 dark:bg-white/7"
                  >
                    <p className="text-[9px] font-black uppercase tracking-[0.12em] text-slate-400">
                      {label}
                    </p>
                    <p className="mt-1 text-base font-black text-slate-950 dark:text-white">
                      {value}
                    </p>
                    <p
                      className={cn(
                        "text-[10px] font-black",
                        change === "Due" ? "text-rose-500" : "text-emerald-500"
                      )}
                    >
                      {change}
                    </p>
                  </div>
                ))}
              </div>

              <div className="grid gap-3 lg:grid-cols-[1.08fr_0.92fr]">
                <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm dark:border-white/10 dark:bg-white/7">
                  <div className="mb-2 flex items-center justify-between">
                    <p className="text-sm font-black text-slate-950 dark:text-white">
                      Pipeline Board
                    </p>
                    <p className="text-[9px] font-black uppercase tracking-[0.14em] text-slate-400">
                      Deals
                    </p>
                  </div>

                  <div className="grid grid-cols-4 gap-2">
                    {pipelineColumns.map(([title, count, cards]) => (
                      <div
                        key={title as string}
                        className="min-h-[136px] rounded-xl border border-slate-200 bg-slate-50/90 p-2 dark:border-white/10 dark:bg-white/5"
                      >
                        <div className="mb-2 flex justify-between text-[9px] font-black text-slate-500 dark:text-slate-400">
                          <span>{title as string}</span>
                          <span>{count as string}</span>
                        </div>

                        <div className="space-y-1.5">
                          {(cards as string[]).map((card, cardIndex) => (
                            <div
                              key={card}
                              className="rounded-lg bg-white p-2 shadow-sm dark:bg-slate-950/60"
                            >
                              <div className="flex items-center gap-1.5">
                                <Building2 className="h-3 w-3 shrink-0 text-blue-500" />
                                <span className="truncate text-[9px] font-black text-slate-700 dark:text-slate-200">
                                  {card}
                                </span>
                              </div>
                              <div className="mt-1 flex justify-between text-[8px] font-bold text-slate-400">
                                <span>{cardIndex + 1}d</span>
                                <span>₹{cardIndex + 2}.4L</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-3">
                  <div className="rounded-2xl border border-slate-200 bg-white p-3 dark:border-white/10 dark:bg-white/7">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-black text-slate-900 dark:text-white">
                        Revenue
                      </p>
                      <LineChart className="h-4 w-4 text-blue-500" />
                    </div>
                    <p
                      className={cn(
                        "mt-1.5 bg-gradient-to-r bg-clip-text text-2xl font-black text-transparent",
                        accentClass
                      )}
                    >
                      ₹48.6L
                    </p>
                    <div className="mt-3 flex h-14 items-end gap-1.5 rounded-xl bg-slate-50 p-2 dark:bg-white/6">
                      {[34, 48, 38, 62, 52, 74, 66].map((height, index) => (
                        <span
                          key={index}
                          className={cn(
                            "flex-1 rounded-t-md bg-gradient-to-t",
                            accentClass
                          )}
                          style={{ height: `${height}%` }}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white p-3 dark:border-white/10 dark:bg-white/7">
                    <p className="text-xs font-black text-slate-900 dark:text-white">
                      Follow-ups
                    </p>
                    <div className="mt-2 space-y-1.5">
                      {["Call lead", "Send proposal", "Demo reminder"].map(
                        (task, index) => (
                          <div
                            key={task}
                            className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2 text-[10px] font-bold text-slate-600 dark:bg-white/6 dark:text-slate-300"
                          >
                            <span>{task}</span>
                            <span
                              className={
                                index === 0 ? "text-rose-500" : "text-blue-500"
                              }
                            >
                              {index === 0 ? "High" : "Open"}
                            </span>
                          </div>
                        )
                      )}
                    </div>
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
          <IconTile icon={ShieldCheck} title="Secure & Scalable" detail="Enterprise-ready" tone="green" />
          <IconTile icon={Zap} title="High Performance" detail="Fast and stable" tone="blue" />
          <IconTile icon={Smartphone} title="Modern UI" detail="Users love it" tone="violet" />
          <IconTile icon={Rocket} title="Store Ready" detail="Launch support" tone="orange" />
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
                Better habits. <span className="text-blue-600">Stronger you.</span>
              </h3>
              <p className="mt-3 text-xs font-semibold leading-5 text-slate-500">
                Track, improve, and achieve your daily wellness goals.
              </p>
              <div className="mt-8 h-32 rounded-3xl bg-gradient-to-br from-blue-100 to-violet-100" />
              <div className={cn("mt-8 rounded-2xl bg-gradient-to-r px-4 py-3 text-center text-xs font-black text-white", accentClass)}>
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

              <div className={cn("mt-5 rounded-3xl bg-gradient-to-r p-4 text-white shadow-[0_18px_45px_rgba(37,99,235,0.20)]", accentClass)}>
                <p className="text-[10px] font-black uppercase tracking-wider opacity-80">
                  Daily Steps
                </p>
                <p className="mt-2 text-3xl font-black">8,432</p>
                <div className="mt-4 h-16 rounded-2xl bg-white/18" />
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-slate-50 p-3">
                  <p className="text-[10px] font-black text-slate-400">Calories</p>
                  <p className="text-xl font-black text-slate-950">540</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-3">
                  <p className="text-[10px] font-black text-slate-400">Sleep</p>
                  <p className="text-xl font-black text-slate-950">7h</p>
                </div>
              </div>
            </div>
          </PhoneMockup>

          <PhoneMockup className="rotate-6 scale-[0.92] dark:opacity-95">
            <div className="p-5">
              <div className="mt-8 flex items-center justify-between">
                <p className="text-sm font-black text-slate-950">Book Appointment</p>
                <Search className="h-4 w-4 text-slate-400" />
              </div>
              <div className="mt-5 rounded-2xl bg-slate-50 px-3 py-2 text-[10px] font-semibold text-slate-400">
                Search services
              </div>
              <p className="mt-5 text-xs font-black text-slate-900">Top Experts</p>
              <div className="mt-3 space-y-3">
                {["Dr. Sarah", "Jacob Lee", "Emily Clark"].map((person) => (
                  <div key={person} className="flex items-center justify-between rounded-2xl bg-slate-50 p-2">
                    <span className="text-[10px] font-black text-slate-700">{person}</span>
                    <span className="rounded-full bg-blue-50 px-2 py-1 text-[9px] font-black text-blue-600">Book</span>
                  </div>
                ))}
              </div>
            </div>
          </PhoneMockup>
        </div>

        <div className="absolute bottom-7 right-8 w-72 rounded-3xl border border-slate-200 bg-white/94 p-5 shadow-[0_22px_60px_rgba(15,23,42,0.14)] backdrop-blur-xl dark:border-white/10 dark:bg-white/92 dark:shadow-[0_22px_70px_rgba(14,165,233,0.16)]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-black text-slate-900">App Performance</p>
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
              <div key={label} className="flex items-center justify-between text-[11px] font-black">
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

function AiAutomationHeroDashboard({ accentClass }: { accentClass: string }) {
  return (
    <PreviewShell footer={<AutomationFooter />}>
      <div className="relative min-h-[415px] overflow-hidden rounded-[1.75rem] border border-slate-200 bg-[linear-gradient(135deg,#ffffff_0%,#faf7ff_48%,#eff8ff_100%)] p-4 dark:border-white/10 dark:bg-[linear-gradient(135deg,#111827_0%,#211a42_48%,#082f49_100%)]">
        <div className="pointer-events-none absolute -left-16 top-8 h-72 w-72 rounded-full bg-fuchsia-200/45 blur-3xl dark:bg-fuchsia-400/10" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-sky-200/45 blur-3xl dark:bg-sky-400/10" />

        <div className="relative grid min-h-[386px] gap-3 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[1.45rem] border border-slate-200 bg-white/92 p-4 shadow-[0_22px_70px_rgba(15,23,42,0.10)] dark:border-white/10 dark:bg-slate-950/82">
            <div className="flex items-center gap-3">
              <span className={cn("grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-r text-white", accentClass)}>
                <Bot className="h-5 w-5" />
              </span>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.16em] text-blue-600 dark:text-cyan-200">
                  AI Automation
                </p>
                <h3 className="text-lg font-black tracking-[-0.035em] text-slate-950 dark:text-white">
                  AI Copilot Console
                </h3>
              </div>
            </div>

            <div className="mt-4 rounded-3xl bg-slate-950 p-4 text-white dark:bg-black/35">
              <p className="text-xs font-black text-white/70">Today’s AI summary</p>
              <p className="mt-2 text-xl font-black leading-snug">
                42 leads scored, 18 replies drafted, 7 hot opportunities found.
              </p>
              <div className="mt-3 flex gap-2">
                {["Score", "Draft", "Route"].map((item) => (
                  <span key={item} className="rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-black">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-3 space-y-2">
              {[
                ["Lead scoring", "Best opportunities found"],
                ["Smart replies", "Responses drafted"],
                ["Business insights", "Patterns detected"],
              ].map(([itemTitle, detail], index) => (
                <div key={itemTitle} className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50/90 p-2.5 dark:border-white/10 dark:bg-white/6">
                  <span className={cn("grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-r text-xs font-black text-white", accentClass)}>
                    {index + 1}
                  </span>
                  <div>
                    <p className="text-xs font-black text-slate-900 dark:text-white">{itemTitle}</p>
                    <p className="text-[10px] font-semibold text-slate-500">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-3">
            <div className="grid grid-cols-4 gap-2">
              {[
                ["Actions", "1,246", "+28%"],
                ["Score", "82%", "High"],
                ["Drafts", "394", "Ready"],
                ["Saved", "176h", "+21%"],
              ].map(([label, value, change]) => (
                <div key={label} className="rounded-2xl border border-slate-200 bg-white/92 p-2.5 shadow-sm dark:border-white/10 dark:bg-white/7">
                  <p className="text-[9px] font-black uppercase tracking-[0.12em] text-slate-400">{label}</p>
                  <p className="mt-1 text-base font-black text-slate-950 dark:text-white">{value}</p>
                  <p className="text-[10px] font-black text-emerald-500">{change}</p>
                </div>
              ))}
            </div>

            <div className="rounded-[1.45rem] border border-slate-200 bg-white/92 p-4 shadow-[0_22px_70px_rgba(15,23,42,0.10)] dark:border-white/10 dark:bg-slate-950/82">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-sm font-black text-slate-950 dark:text-white">AI Decision Pipeline</p>
                <Sparkles className="h-5 w-5 text-violet-500" />
              </div>

              <div className="grid gap-2 sm:grid-cols-2">
                {[
                  ["Capture", "Forms, CRM, email", Users],
                  ["Understand", "Intent + urgency", Bot],
                  ["Generate", "Reply + next action", MessageSquareText],
                  ["Control", "Review + log", ShieldCheck],
                ].map(([itemTitle, detail, Icon], index) => {
                  const RealIcon = Icon as LucideIcon;
                  return (
                    <div key={itemTitle as string} className="rounded-2xl bg-slate-50 p-3 dark:bg-white/6">
                      <div className="flex items-center justify-between">
                        <RealIcon className="h-4 w-4 text-blue-500" />
                        <span className="text-[10px] font-black text-slate-400">0{index + 1}</span>
                      </div>
                      <p className="mt-2 text-sm font-black text-slate-900 dark:text-white">{itemTitle as string}</p>
                      <p className="mt-0.5 truncate text-[10px] font-semibold text-slate-500">{detail as string}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-[1.45rem] border border-slate-200 bg-white/92 p-3 dark:border-white/10 dark:bg-white/7">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <p className="text-xs font-black text-slate-900 dark:text-white">
                  Human approval enabled before important business actions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PreviewShell>
  );
}

function WorkflowAutomationHeroDashboard({ accentClass }: { accentClass: string }) {
  return (
    <PreviewShell footer={<AutomationFooter />}>
      <div className="relative min-h-[415px] overflow-hidden rounded-[1.75rem] border border-slate-200 bg-[linear-gradient(135deg,#ffffff_0%,#f4fffb_48%,#eff6ff_100%)] p-4 dark:border-white/10 dark:bg-[linear-gradient(135deg,#0f172a_0%,#052e2b_48%,#111827_100%)]">
        <div className="pointer-events-none absolute -left-16 top-8 h-72 w-72 rounded-full bg-emerald-200/45 blur-3xl dark:bg-emerald-400/10" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-sky-200/45 blur-3xl dark:bg-sky-400/10" />

        <div className="relative overflow-hidden rounded-[1.45rem] border border-slate-200 bg-white/92 shadow-[0_22px_70px_rgba(15,23,42,0.11)] backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/82">
          <div className="grid min-h-[386px] lg:grid-cols-[124px_1fr]">
            <CompactSidebar
              title="Flow OS"
              active="Builder"
              accentClass={accentClass}
              items={["Builder", "Rules", "Approvals", "Logs", "Reports"]}
            />

            <div className="p-3.5">
              <div className="mb-3 flex items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.16em] text-emerald-600 dark:text-emerald-200">
                    Workflow Automation
                  </p>
                  <h3 className="mt-1 text-lg font-black tracking-[-0.035em] text-slate-950 dark:text-white">
                    Visual Flow Builder
                  </h3>
                  <p className="mt-0.5 max-w-md text-xs font-semibold text-slate-500 dark:text-slate-400">
                    Triggers, approvals, reminders, and handoffs in one flow.
                  </p>
                </div>

                <span className={cn("rounded-xl bg-gradient-to-r px-3 py-2 text-[10px] font-black text-white", accentClass)}>
                  Running
                </span>
              </div>

              <div className="grid gap-3 lg:grid-cols-[1.08fr_0.92fr]">
                <div className="rounded-3xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-white/7">
                  <div className="relative min-h-[286px]">
                    <div className="absolute left-9 top-10 h-[214px] w-px bg-gradient-to-b from-blue-200 via-emerald-300 to-violet-200 dark:from-cyan-300/20 dark:via-emerald-300/30 dark:to-violet-300/20" />

                    {[
                      ["Trigger", "New request received", Zap, "bg-blue-600"],
                      ["Condition", "Priority + owner check", Target, "bg-violet-600"],
                      ["Approval", "Manager approval step", ClipboardCheck, "bg-emerald-600"],
                      ["Action", "Task + reminder sent", Mail, "bg-orange-500"],
                    ].map(([itemTitle, detail, Icon, color], index) => {
                      const RealIcon = Icon as LucideIcon;

                      return (
                        <div key={itemTitle as string} className="relative mb-3 flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50/90 p-3 shadow-sm dark:border-white/10 dark:bg-white/6">
                          <span className={cn("z-10 grid h-11 w-11 shrink-0 place-items-center rounded-2xl text-white", color as string)}>
                            <RealIcon className="h-5 w-5" />
                          </span>
                          <div className="min-w-0 flex-1">
                            <p className="text-sm font-black text-slate-900 dark:text-white">{itemTitle as string}</p>
                            <p className="truncate text-xs font-semibold text-slate-500">{detail as string}</p>
                          </div>
                          <span className="rounded-full bg-white px-2 py-1 text-[10px] font-black text-slate-500 shadow-sm dark:bg-slate-950/60">
                            {index + 1}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="grid gap-2.5">
                  {[
                    ["Tasks Routed", "1,284", "+32%"],
                    ["Hours Saved", "214", "+18%"],
                    ["Flow Health", "96%", "Stable"],
                  ].map(([label, value, note]) => (
                    <div key={label} className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-white/7">
                      <p className="text-[10px] font-black uppercase tracking-[0.14em] text-slate-400">{label}</p>
                      <p className={cn("mt-2 bg-gradient-to-r bg-clip-text text-3xl font-black text-transparent", accentClass)}>
                        {value}
                      </p>
                      <p className="mt-1 text-[10px] font-black text-emerald-500">{note}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PreviewShell>
  );
}

function ApiDevelopmentHeroDashboard({ accentClass }: { accentClass: string }) {
  return (
    <PreviewShell footer={<AutomationFooter />}>
      <div className="relative min-h-[415px] overflow-hidden rounded-[1.75rem] border border-slate-200 bg-[linear-gradient(135deg,#ffffff_0%,#f7fbff_50%,#eef7ff_100%)] p-4 dark:border-white/10 dark:bg-[linear-gradient(135deg,#0f172a_0%,#082f49_48%,#111827_100%)]">
        <div className="pointer-events-none absolute -left-16 top-8 h-72 w-72 rounded-full bg-sky-200/45 blur-3xl dark:bg-sky-400/10" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-blue-200/45 blur-3xl dark:bg-blue-400/10" />

        <div className="relative overflow-hidden rounded-[1.45rem] border border-slate-200 bg-white/92 shadow-[0_22px_70px_rgba(15,23,42,0.11)] backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/82">
          <div className="grid min-h-[386px] lg:grid-cols-[124px_1fr]">
            <CompactSidebar
              title="API Hub"
              active="Gateway"
              accentClass={accentClass}
              items={["Gateway", "Auth", "Docs", "Logs", "Status"]}
            />

            <div className="p-3.5">
              <div className="mb-3 flex items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.16em] text-blue-600 dark:text-cyan-200">
                    API Development
                  </p>
                  <h3 className="mt-1 text-lg font-black tracking-[-0.035em] text-slate-950 dark:text-white">
                    API Gateway Monitor
                  </h3>
                  <p className="mt-0.5 max-w-md text-xs font-semibold text-slate-500 dark:text-slate-400">
                    Auth, endpoints, latency, webhooks, docs, and logs.
                  </p>
                </div>

                <span className="rounded-xl bg-emerald-500 px-3 py-2 text-[10px] font-black text-white">
                  99.9% Up
                </span>
              </div>

              <div className="mb-3 grid grid-cols-4 gap-2">
                {[
                  ["Requests", "2.4M", "+41%"],
                  ["Latency", "82ms", "Fast"],
                  ["Errors", "0.8%", "-12%"],
                  ["Keys", "48", "Active"],
                ].map(([label, value, note]) => (
                  <div key={label} className="rounded-2xl border border-slate-200 bg-white p-2.5 shadow-sm dark:border-white/10 dark:bg-white/7">
                    <p className="text-[9px] font-black uppercase tracking-[0.12em] text-slate-400">{label}</p>
                    <p className="mt-1 text-base font-black text-slate-950 dark:text-white">{value}</p>
                    <p className={cn("text-[10px] font-black", note.includes("-") ? "text-rose-500" : "text-emerald-500")}>
                      {note}
                    </p>
                  </div>
                ))}
              </div>

              <div className="grid gap-3 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="rounded-3xl border border-slate-200 bg-white p-3.5 dark:border-white/10 dark:bg-white/7">
                  <div className="mb-3 flex items-center justify-between">
                    <p className="text-sm font-black text-slate-950 dark:text-white">
                      Endpoint Activity
                    </p>
                    <Database className="h-4 w-4 text-blue-500" />
                  </div>

                  <div className="space-y-2">
                    {[
                      ["GET", "/api/users", "18ms", "200"],
                      ["POST", "/api/bookings", "44ms", "201"],
                      ["PATCH", "/api/payments", "61ms", "200"],
                      ["POST", "/webhooks/order", "73ms", "202"],
                    ].map(([method, path, speed, status]) => (
                      <div key={path} className="grid grid-cols-[46px_1fr_42px_32px] items-center gap-2 rounded-2xl bg-slate-50 px-3 py-2 dark:bg-white/6">
                        <span className="text-[10px] font-black text-blue-600">{method}</span>
                        <span className="truncate text-xs font-black text-slate-700 dark:text-slate-200">{path}</span>
                        <span className="text-[10px] font-bold text-slate-500">{speed}</span>
                        <span className="text-[10px] font-black text-emerald-500">{status}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-3">
                  <div className="rounded-2xl border border-slate-200 bg-white p-3 dark:border-white/10 dark:bg-white/7">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-black text-slate-900 dark:text-white">
                        Traffic
                      </p>
                      <LineChart className="h-4 w-4 text-blue-500" />
                    </div>
                    <div className="mt-3 flex h-20 items-end gap-2 rounded-2xl bg-slate-50 p-3 dark:bg-white/6">
                      {[38, 52, 44, 68, 62, 82, 76].map((height, index) => (
                        <span key={index} className={cn("flex-1 rounded-t-md bg-gradient-to-t", accentClass)} style={{ height: `${height}%` }} />
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white p-3 dark:border-white/10 dark:bg-white/7">
                    <p className="text-xs font-black text-slate-900 dark:text-white">
                      Security Layers
                    </p>
                    <div className="mt-3 grid grid-cols-2 gap-2">
                      {["JWT", "OAuth", "Roles", "Rate limit"].map((item) => (
                        <span key={item} className="rounded-xl bg-slate-50 px-3 py-2 text-[10px] font-black text-slate-600 dark:bg-white/6 dark:text-slate-300">
                          {item}
                        </span>
                      ))}
                    </div>
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

function IntegrationServicesHeroDashboard({ accentClass }: { accentClass: string }) {
  const routes = [
    ["Website lead", "CRM + WhatsApp"],
    ["Payment status", "Order + report"],
    ["Form response", "Sheet + dashboard"],
  ];

  const tools: Array<[string, LucideIcon, string]> = [
    ["CRM", Users, "Lead data"],
    ["Payment", CreditCard, "Status sync"],
    ["WhatsApp", MessageSquareText, "Auto follow-up"],
    ["Reports", BarChart3, "Live dashboard"],
    ["Forms", ClipboardCheck, "Capture"],
    ["API", Globe2, "Bridge"],
  ];

  return (
    <PreviewShell compact>
      <div className="relative min-h-[360px] overflow-hidden rounded-[1.75rem] border border-slate-200 bg-[linear-gradient(135deg,#ffffff_0%,#f5fcff_48%,#f1f5ff_100%)] p-3 dark:border-white/10 dark:bg-[linear-gradient(135deg,#0f172a_0%,#0c4a6e_48%,#111827_100%)]">
        <div className="pointer-events-none absolute -left-16 top-8 h-64 w-64 rounded-full bg-cyan-200/45 blur-3xl dark:bg-cyan-400/10" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-blue-200/45 blur-3xl dark:bg-blue-400/10" />

        <div className="relative overflow-hidden rounded-[1.45rem] border border-slate-200 bg-white/94 shadow-[0_22px_70px_rgba(15,23,42,0.10)] backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/82">
          <div className="grid min-h-[334px] lg:grid-cols-[104px_1fr]">
            <CompactSidebar
              title="Sync OS"
              active="Map"
              accentClass={accentClass}
              items={["Map", "Rules", "Logs"]}
            />

            <div className="p-3">
              <div className="mb-2.5 flex items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.16em] text-sky-600 dark:text-cyan-200">
                    Integration Services
                  </p>
                  <h3 className="mt-1 text-lg font-black tracking-[-0.035em] text-slate-950 dark:text-white">
                    Connected Workflow Hub
                  </h3>
                  <p className="mt-0.5 max-w-md text-xs font-semibold text-slate-500 dark:text-slate-400">
                    Tools, forms, payments, APIs, and reports moving in one clean sync layer.
                  </p>
                </div>

                <span className={cn("rounded-xl bg-gradient-to-r px-3 py-2 text-[10px] font-black text-white shadow-[0_12px_28px_rgba(14,165,233,0.18)]", accentClass)}>
                  Live Sync
                </span>
              </div>

              <div className="grid gap-2.5 lg:grid-cols-[1.06fr_0.94fr]">
                <div className="rounded-3xl border border-slate-200 bg-white p-2.5 dark:border-white/10 dark:bg-white/7">
                  <div className="relative min-h-[246px] overflow-hidden rounded-3xl bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.16),transparent_30%),linear-gradient(135deg,#f8fbff,#edf8ff)] p-3 dark:bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.20),transparent_32%),linear-gradient(135deg,rgba(15,23,42,0.88),rgba(12,74,110,0.35))]">
                    <div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/90 dark:border-cyan-300/20" />
                    <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-200/80 dark:border-blue-300/15" />
                    <div className="absolute left-[12%] right-[12%] top-1/2 h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent" />
                    <div className="absolute bottom-[12%] left-1/2 top-[12%] w-px bg-gradient-to-b from-transparent via-blue-300 to-transparent" />

                    <div className={cn("absolute left-1/2 top-1/2 z-20 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[1.6rem] bg-gradient-to-br text-white shadow-[0_24px_65px_rgba(14,165,233,0.26)]", accentClass)}>
                      <div className="text-center">
                        <Database className="mx-auto h-7 w-7" />
                        <p className="mt-1 text-[9px] font-black uppercase tracking-[0.12em]">
                          Core
                        </p>
                      </div>
                    </div>

                    {tools.map(([label, Icon, detail], index) => {
                      const positions = [
                        "left-[6%] top-[14%]",
                        "right-[5%] top-[15%]",
                        "left-[6%] bottom-[14%]",
                        "right-[5%] bottom-[14%]",
                        "left-1/2 top-[5%] -translate-x-1/2",
                        "left-1/2 bottom-[4%] -translate-x-1/2",
                      ];

                      return (
                        <div
                          key={label}
                          className={cn(
                            "absolute z-10 rounded-2xl border border-white/90 bg-white/94 px-3 py-2 shadow-[0_14px_36px_rgba(15,23,42,0.11)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/76",
                            positions[index]
                          )}
                        >
                          <div className="flex items-center gap-2">
                            <span className="grid h-7 w-7 place-items-center rounded-xl bg-cyan-50 text-cyan-600 dark:bg-cyan-300/10 dark:text-cyan-200">
                              <Icon className="h-3.5 w-3.5" />
                            </span>
                            <div>
                              <p className="text-[11px] font-black text-slate-900 dark:text-white">
                                {label}
                              </p>
                              <p className="text-[8px] font-bold text-slate-400">
                                {detail}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}

                    <div className="absolute bottom-2.5 left-1/2 z-20 -translate-x-1/2 rounded-full border border-emerald-200 bg-white/92 px-3.5 py-1.5 text-[9px] font-black text-emerald-600 shadow-sm dark:border-emerald-300/20 dark:bg-slate-950/80 dark:text-emerald-200">
                      6 tools syncing now
                    </div>
                  </div>
                </div>

                <div className="grid gap-2.5">
                  <div className="grid grid-cols-4 gap-2">
                    {[
                      ["Synced", "48K"],
                      ["Tools", "12"],
                      ["Fresh", "94%"],
                      ["Retries", "9"],
                    ].map(([label, value]) => (
                      <div
                        key={label}
                        className="rounded-2xl border border-slate-200 bg-white p-2.5 dark:border-white/10 dark:bg-white/7"
                      >
                        <p className="text-[8px] font-black uppercase tracking-[0.12em] text-slate-400">
                          {label}
                        </p>
                        <p className={cn("mt-1.5 bg-gradient-to-r bg-clip-text text-lg font-black text-transparent", accentClass)}>
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white p-2.5 dark:border-white/10 dark:bg-white/7">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-black text-slate-900 dark:text-white">
                        Live Data Routes
                      </p>
                      <Workflow className="h-4 w-4 text-cyan-500" />
                    </div>

                    <div className="mt-2 space-y-1.5">
                      {routes.map(([from, to]) => (
                        <div
                          key={from}
                          className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 rounded-xl bg-slate-50 px-3 py-1.5 text-[9px] font-bold text-slate-600 dark:bg-white/6 dark:text-slate-300"
                        >
                          <span className="truncate">{from}</span>
                          <Zap className="h-3 w-3 text-cyan-500" />
                          <span className="truncate text-right">{to}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white p-2.5 dark:border-white/10 dark:bg-white/7">
                    <p className="text-xs font-black text-slate-900 dark:text-white">
                      Recent Sync
                    </p>

                    <div className="mt-2 grid gap-1.5">
                      {["Lead synced to CRM", "Payment matched", "Report refreshed"].map((event) => (
                        <div
                          key={event}
                          className="flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-1.5 text-[9px] font-bold text-slate-600 dark:bg-white/6 dark:text-slate-300"
                        >
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                          {event}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-1.5">
                    {["Field map", "Webhooks", "Retries", "Logs"].map((module) => (
                      <span
                        key={module}
                        className="rounded-xl bg-slate-50 px-2 py-1.5 text-center text-[8px] font-black text-slate-600 ring-1 ring-slate-200 dark:bg-white/6 dark:text-slate-300 dark:ring-white/10"
                      >
                        {module}
                      </span>
                    ))}
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

function SaasHeroDashboard({ accentClass }: { accentClass: string }) {
  return (
    <PreviewShell footer={<AutomationFooter />}>
      <div className="relative min-h-[415px] overflow-hidden rounded-[1.75rem] border border-slate-200 bg-[linear-gradient(135deg,#ffffff_0%,#f8fbff_52%,#f4f0ff_100%)] p-3 dark:border-white/10 dark:bg-[linear-gradient(135deg,#0f172a_0%,#111827_52%,#1e1b4b_100%)]">
        <div className="pointer-events-none absolute -left-16 top-8 h-72 w-72 rounded-full bg-sky-200/45 blur-3xl dark:bg-sky-400/10" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-violet-200/45 blur-3xl dark:bg-violet-400/10" />

        <div className="relative overflow-hidden rounded-[1.45rem] border border-slate-200 bg-white/92 shadow-[0_22px_70px_rgba(15,23,42,0.11)] backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/82">
          <div className="grid min-h-[388px] lg:grid-cols-[124px_1fr]">
            <CompactSidebar
              title="SaaS OS"
              active="Overview"
              accentClass={accentClass}
              items={["Overview", "Users", "Plans", "Billing", "Reports"]}
            />

            <div className="p-3.5">
              <div className="mb-3 flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-black tracking-[-0.035em] text-slate-950 dark:text-white">
                    SaaS Dashboard
                  </h3>
                  <p className="mt-0.5 text-xs font-semibold text-slate-500 dark:text-slate-400">
                    Users, plans, billing, usage, and admin control.
                  </p>
                </div>

                <span className={cn("rounded-xl bg-gradient-to-r px-3 py-2 text-[10px] font-black text-white", accentClass)}>
                  Live SaaS
                </span>
              </div>

              <div className="mb-3 grid grid-cols-4 gap-2">
                {[
                  ["MRR", "₹2.8L", "+18%"],
                  ["Users", "4.2K", "+24%"],
                  ["Trials", "312", "Active"],
                  ["Churn", "2.1%", "-8%"],
                ].map(([label, value, change]) => (
                  <div key={label} className="rounded-2xl border border-slate-200 bg-white p-2.5 shadow-sm dark:border-white/10 dark:bg-white/7">
                    <p className="text-[9px] font-black uppercase tracking-[0.12em] text-slate-400">{label}</p>
                    <p className="mt-1 text-base font-black text-slate-950 dark:text-white">{value}</p>
                    <p className="text-[10px] font-black text-emerald-500">{change}</p>
                  </div>
                ))}
              </div>

              <div className="grid gap-3 lg:grid-cols-[1fr_0.92fr]">
                <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm dark:border-white/10 dark:bg-white/7">
                  <div className="mb-3 flex items-center justify-between">
                    <p className="text-sm font-black text-slate-950 dark:text-white">Plans</p>
                    <p className="text-[9px] font-black uppercase tracking-[0.14em] text-slate-400">Billing</p>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    {[
                      ["Starter", "₹999", "42%"],
                      ["Growth", "₹2,999", "38%"],
                      ["Scale", "₹7,999", "20%"],
                    ].map(([plan, price, width]) => (
                      <div key={plan} className="rounded-2xl border border-slate-200 bg-slate-50/90 p-3 dark:border-white/10 dark:bg-white/5">
                        <p className="text-xs font-black text-slate-900 dark:text-white">{plan}</p>
                        <p className={cn("mt-2 bg-gradient-to-r bg-clip-text text-base font-black text-transparent", accentClass)}>{price}</p>
                        <div className="mt-3 h-2 rounded-full bg-white dark:bg-slate-950/60">
                          <div className={cn("h-full rounded-full bg-gradient-to-r", accentClass)} style={{ width }} />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-3 rounded-2xl border border-slate-200 bg-white p-3 dark:border-white/10 dark:bg-white/7">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-black text-slate-900 dark:text-white">Usage</p>
                      <Gauge className="h-4 w-4 text-blue-500" />
                    </div>
                    <div className="mt-3 flex h-14 items-end gap-1.5 rounded-xl bg-slate-50 p-2 dark:bg-white/6">
                      {[48, 62, 52, 76, 68, 84, 72, 90].map((height, index) => (
                        <span key={index} className={cn("flex-1 rounded-t-md bg-gradient-to-t", accentClass)} style={{ height: `${height}%` }} />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid gap-3">
                  <div className="rounded-2xl border border-slate-200 bg-white p-3 dark:border-white/10 dark:bg-white/7">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-black text-slate-900 dark:text-white">Access</p>
                      <Lock className="h-4 w-4 text-emerald-500" />
                    </div>

                    <div className="mt-3 space-y-2">
                      {["Owner", "Admin", "Member"].map((role, index) => (
                        <div key={role} className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2 dark:bg-white/6">
                          <span className="text-[10px] font-bold text-slate-600 dark:text-slate-300">{role}</span>
                          <span className={cn("rounded-full px-2 py-1 text-[9px] font-black", index === 0 ? "bg-violet-50 text-violet-600" : "bg-blue-50 text-blue-600")}>
                            {index === 0 ? "Full" : "Limited"}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white p-3 dark:border-white/10 dark:bg-white/7">
                    <p className="text-xs font-black text-slate-900 dark:text-white">Events</p>

                    <div className="mt-3 space-y-2">
                      {["Trial started", "Plan upgraded", "Invoice paid"].map((event) => (
                        <div key={event} className="flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2 text-[10px] font-bold text-slate-600 dark:bg-white/6 dark:text-slate-300">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                          {event}
                        </div>
                      ))}
                    </div>
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


function DevOpsDeploymentHeroDashboard({ accentClass }: { accentClass: string }) {
  const pipelineSteps: Array<[string, string, LucideIcon, string]> = [
    ["Commit", "Code pushed to GitHub", Workflow, "bg-sky-600"],
    ["Build", "Tests and checks running", Gauge, "bg-blue-600"],
    ["Deploy", "Production release ready", Rocket, "bg-violet-600"],
    ["Monitor", "Logs and uptime watched", LineChart, "bg-emerald-600"],
  ];

  return (
    <PreviewShell footer={<AutomationFooter />}>
      <div className="relative min-h-[415px] overflow-hidden rounded-[1.75rem] border border-slate-200 bg-[linear-gradient(135deg,#ffffff_0%,#f5f9ff_48%,#eef6ff_100%)] p-4 dark:border-white/10 dark:bg-[linear-gradient(135deg,#0f172a_0%,#082f49_48%,#111827_100%)]">
        <div className="pointer-events-none absolute -left-16 top-8 h-72 w-72 rounded-full bg-blue-200/45 blur-3xl dark:bg-blue-400/10" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-violet-200/45 blur-3xl dark:bg-violet-400/10" />

        <div className="relative overflow-hidden rounded-[1.45rem] border border-slate-200 bg-white/92 shadow-[0_22px_70px_rgba(15,23,42,0.11)] backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/82">
          <div className="grid min-h-[386px] lg:grid-cols-[124px_1fr]">
            <CompactSidebar
              title="Deploy OS"
              active="Pipeline"
              accentClass={accentClass}
              items={["Pipeline", "Builds", "Secrets", "Logs", "Alerts"]}
            />

            <div className="p-3.5">
              <div className="mb-3 flex items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.16em] text-blue-600 dark:text-cyan-200">
                    DevOps & Deployment
                  </p>
                  <h3 className="mt-1 text-lg font-black tracking-[-0.035em] text-slate-950 dark:text-white">
                    Release Command Center
                  </h3>
                  <p className="mt-0.5 max-w-md text-xs font-semibold text-slate-500 dark:text-slate-400">
                    CI/CD, environments, rollback, logs, and uptime control.
                  </p>
                </div>

                <span className="rounded-xl bg-emerald-500 px-3 py-2 text-[10px] font-black text-white">
                  Healthy
                </span>
              </div>

              <div className="mb-3 grid grid-cols-4 gap-2">
                {[
                  ["Deploys", "42", "+16%"],
                  ["Build", "2m 18s", "Fast"],
                  ["Uptime", "99.9%", "Live"],
                  ["Rollback", "1-click", "Ready"],
                ].map(([label, value, note]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-slate-200 bg-white p-2.5 shadow-sm dark:border-white/10 dark:bg-white/7"
                  >
                    <p className="text-[9px] font-black uppercase tracking-[0.12em] text-slate-400">
                      {label}
                    </p>
                    <p className="mt-1 text-base font-black text-slate-950 dark:text-white">
                      {value}
                    </p>
                    <p className="text-[10px] font-black text-emerald-500">
                      {note}
                    </p>
                  </div>
                ))}
              </div>

              <div className="grid gap-3 lg:grid-cols-[1.08fr_0.92fr]">
                <div className="rounded-3xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-white/7">
                  <div className="mb-3 flex items-center justify-between">
                    <p className="text-sm font-black text-slate-950 dark:text-white">
                      Production Pipeline
                    </p>
                    <Rocket className="h-4 w-4 text-blue-500" />
                  </div>

                  <div className="relative">
                    <div className="absolute left-6 top-8 h-[188px] w-px bg-gradient-to-b from-blue-200 via-violet-300 to-emerald-300 dark:from-cyan-300/20 dark:via-violet-300/25 dark:to-emerald-300/25" />

                    {pipelineSteps.map(([itemTitle, detail, Icon, color], index) => (
                      <div
                        key={itemTitle}
                        className="relative mb-3 flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50/90 p-3 shadow-sm dark:border-white/10 dark:bg-white/6"
                      >
                        <span className={cn("z-10 grid h-12 w-12 shrink-0 place-items-center rounded-2xl text-white", color)}>
                          <Icon className="h-5 w-5" />
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-black text-slate-900 dark:text-white">
                            {itemTitle}
                          </p>
                          <p className="truncate text-xs font-semibold text-slate-500">
                            {detail}
                          </p>
                        </div>
                        <span className="rounded-full bg-white px-2 py-1 text-[10px] font-black text-slate-500 shadow-sm dark:bg-slate-950/60">
                          0{index + 1}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-3">
                  <div className="rounded-2xl border border-slate-200 bg-white p-3 dark:border-white/10 dark:bg-white/7">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-black text-slate-900 dark:text-white">
                        Environment Status
                      </p>
                      <ShieldCheck className="h-4 w-4 text-emerald-500" />
                    </div>

                    <div className="mt-3 space-y-2">
                      {["Production", "Staging", "Preview"].map((env, index) => (
                        <div
                          key={env}
                          className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2 dark:bg-white/6"
                        >
                          <span className="text-[10px] font-bold text-slate-600 dark:text-slate-300">
                            {env}
                          </span>
                          <span
                            className={cn(
                              "rounded-full px-2 py-1 text-[9px] font-black",
                              index === 0
                                ? "bg-emerald-50 text-emerald-600"
                                : "bg-blue-50 text-blue-600"
                            )}
                          >
                            {index === 0 ? "Live" : "Synced"}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white p-3 dark:border-white/10 dark:bg-white/7">
                    <p className="text-xs font-black text-slate-900 dark:text-white">
                      Release Logs
                    </p>

                    <div className="mt-3 space-y-2">
                      {["Build passed", "Secrets verified", "Health check OK"].map((event) => (
                        <div
                          key={event}
                          className="flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2 text-[10px] font-bold text-slate-600 dark:bg-white/6 dark:text-slate-300"
                        >
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                          {event}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white p-3 dark:border-white/10 dark:bg-white/7">
                    <p className="text-xs font-black text-slate-900 dark:text-white">
                      Deployment Speed
                    </p>
                    <div className="mt-3 flex h-14 items-end gap-1.5 rounded-xl bg-slate-50 p-2 dark:bg-white/6">
                      {[42, 58, 48, 72, 64, 86, 78].map((height, index) => (
                        <span
                          key={index}
                          className={cn("flex-1 rounded-t-md bg-gradient-to-t", accentClass)}
                          style={{ height: `${height}%` }}
                        />
                      ))}
                    </div>
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

function CloudInfrastructureHeroDashboard({ accentClass }: { accentClass: string }) {
  const nodes: Array<[string, LucideIcon, string]> = [
    ["App Server", Globe2, "Runtime"],
    ["Database", Database, "Primary DB"],
    ["Storage", Lock, "Buckets"],
    ["CDN", Zap, "Edge"],
    ["Backups", ShieldCheck, "Recovery"],
    ["Scaling", Gauge, "Auto scale"],
  ];

  return (
    <PreviewShell footer={<AutomationFooter />}>
      <div className="relative min-h-[415px] overflow-hidden rounded-[1.75rem] border border-slate-200 bg-[linear-gradient(135deg,#ffffff_0%,#f2faff_48%,#eef4ff_100%)] p-4 dark:border-white/10 dark:bg-[linear-gradient(135deg,#0f172a_0%,#082f49_48%,#111827_100%)]">
        <div className="pointer-events-none absolute -left-16 top-8 h-72 w-72 rounded-full bg-cyan-200/45 blur-3xl dark:bg-cyan-400/10" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-blue-200/45 blur-3xl dark:bg-blue-400/10" />

        <div className="relative overflow-hidden rounded-[1.45rem] border border-slate-200 bg-white/92 shadow-[0_22px_70px_rgba(15,23,42,0.11)] backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/82">
          <div className="grid min-h-[386px] lg:grid-cols-[124px_1fr]">
            <CompactSidebar
              title="Cloud OS"
              active="Infra"
              accentClass={accentClass}
              items={["Infra", "Compute", "Storage", "Backups", "Cost"]}
            />

            <div className="p-3.5">
              <div className="mb-3 flex items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.16em] text-sky-600 dark:text-cyan-200">
                    Cloud Infrastructure
                  </p>
                  <h3 className="mt-1 text-lg font-black tracking-[-0.035em] text-slate-950 dark:text-white">
                    Cloud Architecture Map
                  </h3>
                  <p className="mt-0.5 max-w-md text-xs font-semibold text-slate-500 dark:text-slate-400">
                    Hosting, database, storage, CDN, backups, scaling, and monitoring.
                  </p>
                </div>

                <span className={cn("rounded-xl bg-gradient-to-r px-3 py-2 text-[10px] font-black text-white", accentClass)}>
                  Cost Aware
                </span>
              </div>

              <div className="grid gap-3 lg:grid-cols-[1.08fr_0.92fr]">
                <div className="rounded-3xl border border-slate-200 bg-white p-3.5 dark:border-white/10 dark:bg-white/7">
                  <div className="relative min-h-[296px] overflow-hidden rounded-3xl bg-[radial-gradient(circle_at_50%_48%,rgba(14,165,233,0.18),transparent_30%),linear-gradient(135deg,#f8fbff,#eef7ff)] p-3 dark:bg-[radial-gradient(circle_at_50%_48%,rgba(14,165,233,0.20),transparent_32%),linear-gradient(135deg,rgba(15,23,42,0.88),rgba(12,74,110,0.35))]">
                    <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/90 dark:border-cyan-300/20" />
                    <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-200/80 dark:border-blue-300/15" />
                    <div className="absolute left-[10%] right-[10%] top-1/2 h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent" />
                    <div className="absolute bottom-[10%] left-1/2 top-[10%] w-px bg-gradient-to-b from-transparent via-blue-300 to-transparent" />

                    <div className={cn("absolute left-1/2 top-1/2 z-20 grid h-24 w-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[1.8rem] bg-gradient-to-br text-white shadow-[0_24px_65px_rgba(14,165,233,0.26)]", accentClass)}>
                      <div className="text-center">
                        <Database className="mx-auto h-8 w-8" />
                        <p className="mt-1 text-[9px] font-black uppercase tracking-[0.12em]">
                          Core
                        </p>
                      </div>
                    </div>

                    {nodes.map(([label, Icon, detail], index) => {
                      const positions = [
                        "left-[5%] top-[13%]",
                        "right-[5%] top-[13%]",
                        "left-[5%] bottom-[13%]",
                        "right-[5%] bottom-[13%]",
                        "left-1/2 top-[4%] -translate-x-1/2",
                        "left-1/2 bottom-[4%] -translate-x-1/2",
                      ];

                      return (
                        <div
                          key={label}
                          className={cn(
                            "absolute z-10 rounded-2xl border border-white/90 bg-white/94 px-3 py-2 shadow-[0_14px_36px_rgba(15,23,42,0.11)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/76",
                            positions[index]
                          )}
                        >
                          <div className="flex items-center gap-2">
                            <span className="grid h-7 w-7 place-items-center rounded-xl bg-cyan-50 text-cyan-600 dark:bg-cyan-300/10 dark:text-cyan-200">
                              <Icon className="h-3.5 w-3.5" />
                            </span>
                            <div>
                              <p className="text-[11px] font-black text-slate-900 dark:text-white">
                                {label}
                              </p>
                              <p className="text-[8px] font-bold text-slate-400">
                                {detail}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}

                    <div className="absolute bottom-2.5 left-1/2 z-20 -translate-x-1/2 rounded-full border border-emerald-200 bg-white/92 px-3.5 py-1.5 text-[9px] font-black text-emerald-600 shadow-sm dark:border-emerald-300/20 dark:bg-slate-950/80 dark:text-emerald-200">
                      6 layers monitored
                    </div>
                  </div>
                </div>

                <div className="grid gap-2.5">
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      ["Uptime", "99.9%"],
                      ["Latency", "86ms"],
                      ["Backups", "Daily"],
                      ["Cost", "-18%"],
                    ].map(([label, value]) => (
                      <div
                        key={label}
                        className="rounded-2xl border border-slate-200 bg-white p-3 dark:border-white/10 dark:bg-white/7"
                      >
                        <p className="text-[9px] font-black uppercase tracking-[0.12em] text-slate-400">
                          {label}
                        </p>
                        <p className={cn("mt-1.5 bg-gradient-to-r bg-clip-text text-xl font-black text-transparent", accentClass)}>
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white p-3 dark:border-white/10 dark:bg-white/7">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-black text-slate-900 dark:text-white">
                        Resource Load
                      </p>
                      <LineChart className="h-4 w-4 text-blue-500" />
                    </div>
                    <div className="mt-3 flex h-20 items-end gap-2 rounded-2xl bg-slate-50 p-3 dark:bg-white/6">
                      {[32, 44, 38, 56, 48, 68, 58, 74].map((height, index) => (
                        <span
                          key={index}
                          className={cn("flex-1 rounded-t-md bg-gradient-to-t", accentClass)}
                          style={{ height: `${height}%` }}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white p-3 dark:border-white/10 dark:bg-white/7">
                    <p className="text-xs font-black text-slate-900 dark:text-white">
                      Architecture Checks
                    </p>
                    <div className="mt-2 grid gap-1.5">
                      {["SSL active", "Backup verified", "CDN enabled"].map((event) => (
                        <div
                          key={event}
                          className="flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-1.5 text-[9px] font-bold text-slate-600 dark:bg-white/6 dark:text-slate-300"
                        >
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                          {event}
                        </div>
                      ))}
                    </div>
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


function MaintenanceSupportHeroDashboard({ accentClass }: { accentClass: string }) {
  const tickets: Array<[string, string, string]> = [
    ["Login issue", "High", "24m"],
    ["Content update", "Open", "1h"],
    ["Speed review", "Planned", "Today"],
  ];

  const healthItems: Array<[string, string, LucideIcon]> = [
    ["Uptime", "99.9%", Gauge],
    ["Bug Queue", "12", ClipboardCheck],
    ["Updates", "8", Rocket],
    ["Security", "Clean", ShieldCheck],
  ];

  return (
    <PreviewShell footer={<AutomationFooter />}>
      <div className="relative min-h-[415px] overflow-hidden rounded-[1.75rem] border border-slate-200 bg-[linear-gradient(135deg,#ffffff_0%,#fff8f1_48%,#fff3e8_100%)] p-4 dark:border-white/10 dark:bg-[linear-gradient(135deg,#0f172a_0%,#431407_48%,#111827_100%)]">
        <div className="pointer-events-none absolute -left-16 top-8 h-72 w-72 rounded-full bg-orange-200/45 blur-3xl dark:bg-orange-400/10" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-amber-200/45 blur-3xl dark:bg-amber-400/10" />

        <div className="relative overflow-hidden rounded-[1.45rem] border border-slate-200 bg-white/92 shadow-[0_22px_70px_rgba(15,23,42,0.11)] backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/82">
          <div className="grid min-h-[386px] lg:grid-cols-[124px_1fr]">
            <CompactSidebar
              title="Care Desk"
              active="Health"
              accentClass={accentClass}
              items={["Health", "Tickets", "Updates", "Uptime", "Reports"]}
            />

            <div className="p-3.5">
              <div className="mb-3 flex items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.16em] text-orange-600 dark:text-orange-200">
                    Maintenance & Support
                  </p>
                  <h3 className="mt-1 text-lg font-black tracking-[-0.035em] text-slate-950 dark:text-white">
                    Product Health Desk
                  </h3>
                  <p className="mt-0.5 max-w-md text-xs font-semibold text-slate-500 dark:text-slate-400">
                    Tickets, uptime, bug fixes, updates, and performance care in one support view.
                  </p>
                </div>

                <span className={cn("rounded-xl bg-gradient-to-r px-3 py-2 text-[10px] font-black text-white", accentClass)}>
                  Support Live
                </span>
              </div>

              <div className="mb-3 grid grid-cols-4 gap-2">
                {healthItems.map(([label, value, Icon]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-slate-200 bg-white p-2.5 shadow-sm dark:border-white/10 dark:bg-white/7"
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-[9px] font-black uppercase tracking-[0.12em] text-slate-400">
                        {label}
                      </p>
                      <Icon className="h-3.5 w-3.5 text-orange-500" />
                    </div>
                    <p className="mt-1.5 text-base font-black text-slate-950 dark:text-white">
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="grid gap-3 lg:grid-cols-[1.08fr_0.92fr]">
                <div className="rounded-3xl border border-slate-200 bg-white p-3.5 dark:border-white/10 dark:bg-white/7">
                  <div className="mb-3 flex items-center justify-between">
                    <p className="text-sm font-black text-slate-950 dark:text-white">
                      Support Queue
                    </p>
                    <MessageSquareText className="h-4 w-4 text-orange-500" />
                  </div>

                  <div className="space-y-2">
                    {tickets.map(([issue, status, time], index) => (
                      <div
                        key={issue}
                        className="grid grid-cols-[32px_1fr_62px_42px] items-center gap-2 rounded-2xl bg-slate-50 px-3 py-2.5 dark:bg-white/6"
                      >
                        <span className={cn("grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-r text-[10px] font-black text-white", accentClass)}>
                          {index + 1}
                        </span>
                        <span className="truncate text-xs font-black text-slate-700 dark:text-slate-200">
                          {issue}
                        </span>
                        <span className={cn("rounded-full px-2 py-1 text-center text-[9px] font-black", status === "High" ? "bg-rose-50 text-rose-600" : "bg-orange-50 text-orange-600")}>
                          {status}
                        </span>
                        <span className="text-right text-[9px] font-bold text-slate-400">
                          {time}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-3 rounded-2xl bg-slate-950 p-3 text-white dark:bg-black/35">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.14em] text-white/55">
                          Care Plan
                        </p>
                        <p className="mt-1 text-lg font-black">Monthly product maintenance</p>
                      </div>
                      <CheckCircle2 className="h-6 w-6 text-emerald-400" />
                    </div>
                  </div>
                </div>

                <div className="grid gap-3">
                  <div className="rounded-2xl border border-slate-200 bg-white p-3 dark:border-white/10 dark:bg-white/7">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-black text-slate-900 dark:text-white">Uptime Trend</p>
                      <LineChart className="h-4 w-4 text-orange-500" />
                    </div>
                    <div className="mt-3 flex h-20 items-end gap-2 rounded-2xl bg-slate-50 p-3 dark:bg-white/6">
                      {[70, 82, 78, 88, 84, 92, 89, 96].map((height, index) => (
                        <span key={index} className={cn("flex-1 rounded-t-md bg-gradient-to-t", accentClass)} style={{ height: `${height}%` }} />
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white p-3 dark:border-white/10 dark:bg-white/7">
                    <p className="text-xs font-black text-slate-900 dark:text-white">Care Actions</p>
                    <div className="mt-2 grid gap-1.5">
                      {["Bug fix shipped", "Backup checked", "Speed report sent"].map((event) => (
                        <div key={event} className="flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-1.5 text-[9px] font-bold text-slate-600 dark:bg-white/6 dark:text-slate-300">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                          {event}
                        </div>
                      ))}
                    </div>
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

function SecurityComplianceHeroDashboard({ accentClass }: { accentClass: string }) {
  const controls: Array<[string, string, LucideIcon]> = [
    ["RBAC", "Role access", Lock],
    ["Audit", "Activity trail", ClipboardCheck],
    ["API Guard", "Protected routes", ShieldCheck],
    ["Alerts", "Blocked attempts", Gauge],
  ];

  return (
    <PreviewShell footer={<AutomationFooter />}>
      <div className="relative min-h-[415px] overflow-hidden rounded-[1.75rem] border border-slate-200 bg-[linear-gradient(135deg,#ffffff_0%,#fff5f7_48%,#fff0f4_100%)] p-4 dark:border-white/10 dark:bg-[linear-gradient(135deg,#0f172a_0%,#4c0519_48%,#111827_100%)]">
        <div className="pointer-events-none absolute -left-16 top-8 h-72 w-72 rounded-full bg-rose-200/45 blur-3xl dark:bg-rose-400/10" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-red-200/45 blur-3xl dark:bg-red-400/10" />

        <div className="relative overflow-hidden rounded-[1.45rem] border border-slate-200 bg-white/92 shadow-[0_22px_70px_rgba(15,23,42,0.11)] backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/82">
          <div className="grid min-h-[386px] lg:grid-cols-[124px_1fr]">
            <CompactSidebar
              title="Secure OS"
              active="Controls"
              accentClass={accentClass}
              items={["Controls", "Roles", "Audit", "API", "Review"]}
            />

            <div className="p-3.5">
              <div className="mb-3 flex items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.16em] text-rose-600 dark:text-rose-200">
                    Security & Compliance
                  </p>
                  <h3 className="mt-1 text-lg font-black tracking-[-0.035em] text-slate-950 dark:text-white">
                    Access Control Center
                  </h3>
                  <p className="mt-0.5 max-w-md text-xs font-semibold text-slate-500 dark:text-slate-400">
                    Roles, permissions, audit logs, API protection, and deployment hardening.
                  </p>
                </div>

                <span className={cn("rounded-xl bg-gradient-to-r px-3 py-2 text-[10px] font-black text-white", accentClass)}>
                  Protected
                </span>
              </div>

              <div className="grid gap-3 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="rounded-3xl border border-slate-200 bg-white p-3.5 dark:border-white/10 dark:bg-white/7">
                  <div className="mb-3 flex items-center justify-between">
                    <p className="text-sm font-black text-slate-950 dark:text-white">
                      Security Layers
                    </p>
                    <ShieldCheck className="h-5 w-5 text-rose-500" />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {controls.map(([label, detail, Icon], index) => (
                      <div key={label} className="rounded-2xl border border-slate-100 bg-slate-50/90 p-3 dark:border-white/10 dark:bg-white/6">
                        <div className="flex items-center justify-between">
                          <span className={cn("grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-r text-white", accentClass)}>
                            <Icon className="h-4 w-4" />
                          </span>
                          <span className="text-[10px] font-black text-slate-400">0{index + 1}</span>
                        </div>
                        <p className="mt-2 text-sm font-black text-slate-900 dark:text-white">{label}</p>
                        <p className="mt-0.5 text-[10px] font-semibold text-slate-500">{detail}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-3 rounded-2xl bg-slate-950 p-3 text-white dark:bg-black/35">
                    <p className="text-[10px] font-black uppercase tracking-[0.14em] text-white/55">
                      Policy Status
                    </p>
                    <div className="mt-2 grid grid-cols-3 gap-2">
                      {[
                        ["Auth", "On"],
                        ["Logs", "Live"],
                        ["Backups", "Safe"],
                      ].map(([label, value]) => (
                        <div key={label} className="rounded-xl bg-white/10 px-3 py-2">
                          <p className="text-[9px] font-black text-white/50">{label}</p>
                          <p className="text-sm font-black">{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid gap-3">
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      ["Risk", "Low"],
                      ["Blocked", "184"],
                      ["Roles", "12"],
                      ["Logs", "24/7"],
                    ].map(([label, value]) => (
                      <div key={label} className="rounded-2xl border border-slate-200 bg-white p-3 dark:border-white/10 dark:bg-white/7">
                        <p className="text-[9px] font-black uppercase tracking-[0.12em] text-slate-400">{label}</p>
                        <p className={cn("mt-1.5 bg-gradient-to-r bg-clip-text text-xl font-black text-transparent", accentClass)}>{value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white p-3 dark:border-white/10 dark:bg-white/7">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-black text-slate-900 dark:text-white">Audit Stream</p>
                      <LineChart className="h-4 w-4 text-rose-500" />
                    </div>
                    <div className="mt-2 grid gap-1.5">
                      {["Admin login verified", "API token rotated", "Permission change logged"].map((event) => (
                        <div key={event} className="flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-1.5 text-[9px] font-bold text-slate-600 dark:bg-white/6 dark:text-slate-300">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                          {event}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white p-3 dark:border-white/10 dark:bg-white/7">
                    <p className="text-xs font-black text-slate-900 dark:text-white">Threat Activity</p>
                    <div className="mt-3 flex h-16 items-end gap-2 rounded-2xl bg-slate-50 p-3 dark:bg-white/6">
                      {[28, 44, 22, 58, 34, 18, 42].map((height, index) => (
                        <span key={index} className={cn("flex-1 rounded-t-md bg-gradient-to-t", accentClass)} style={{ height: `${height}%` }} />
                      ))}
                    </div>
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

export function AiAutomationHeroPreview({ accentClass }: PreviewProps) {
  return <AiAutomationHeroDashboard accentClass={accentClass} />;
}

export function GenericServiceHeroPreview({
  service,
  title,
  subtitle,
  labels,
  stats,
  accentClass,
}: PreviewProps) {
  if (service.id === "workflow-automation") {
    return <WorkflowAutomationHeroDashboard accentClass={accentClass} />;
  }

  if (service.id === "api-development") {
    return <ApiDevelopmentHeroDashboard accentClass={accentClass} />;
  }

  if (service.id === "integration-services") {
    return <IntegrationServicesHeroDashboard accentClass={accentClass} />;
  }

  if (service.id === "saas-development") {
    return <SaasHeroDashboard accentClass={accentClass} />;
  }

  if (service.id === "devops-deployment") {
    return <DevOpsDeploymentHeroDashboard accentClass={accentClass} />;
  }

  if (service.id === "cloud-infrastructure") {
    return <CloudInfrastructureHeroDashboard accentClass={accentClass} />;
  }

  if (service.id === "maintenance-support") {
    return <MaintenanceSupportHeroDashboard accentClass={accentClass} />;
  }

  if (service.id === "security-compliance") {
    return <SecurityComplianceHeroDashboard accentClass={accentClass} />;
  }

  if (service.id === "ui-ux-design") {
    return (
      <UiUxDesignHeroPreview
        service={service}
        title={title}
        subtitle={subtitle}
        labels={labels}
        stats={stats}
        accentClass={accentClass}
      />
    );
  }

  if (service.id === "landing-pages-campaigns") {
    return (
      <LandingPagesHeroPreview
        service={service}
        title={title}
        subtitle={subtitle}
        labels={labels}
        stats={stats}
        accentClass={accentClass}
      />
    );
  }

  if (service.id === "seo-analytics") {
    return (
      <SeoAnalyticsHeroPreview
        service={service}
        title={title}
        subtitle={subtitle}
        labels={labels}
        stats={stats}
        accentClass={accentClass}
      />
    );
  }

  if (service.id === "brand-identity") {
    return (
      <BrandIdentityHeroPreview
        service={service}
        title={title}
        subtitle={subtitle}
        labels={labels}
        stats={stats}
        accentClass={accentClass}
      />
    );
  }

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
            <span className={cn("rounded-xl bg-gradient-to-r px-3 py-2 text-xs font-black text-white", accentClass)}>
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
                  <div key={`${label.label}-${label.value}`} className="rounded-2xl border border-white/10 bg-white/8 p-4">
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
                  <div key={feature} className="rounded-3xl border border-slate-200 bg-slate-50/80 p-5 dark:border-white/10 dark:bg-white/5">
                    <span className={cn("grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-r text-white", accentClass)}>
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

function DesignPreviewShell({
  children,
  footer,
}: {
  children: ReactNode;
  footer?: ReactNode;
}) {
  return (
    <div className="relative mx-auto w-full max-w-[860px]">
      <div className="absolute -inset-5 rounded-[3rem] bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.14),transparent_36%),radial-gradient(circle_at_80%_72%,rgba(124,58,237,0.12),transparent_35%)] blur-2xl" />
      <div className="relative overflow-hidden rounded-[2.15rem] border border-slate-200/90 bg-white/86 p-3 shadow-[0_34px_95px_rgba(15,23,42,0.13)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/7 dark:shadow-[0_34px_95px_rgba(0,0,0,0.34)]">
        {children}
      </div>
      {footer ? <div className="relative mt-3">{footer}</div> : null}
    </div>
  );
}

function MiniTile({
  icon: Icon,
  title,
  detail,
  accentClass,
}: {
  icon: LucideIcon;
  title: string;
  detail: string;
  accentClass: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200/90 bg-white/88 p-3 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/7">
      <div className="flex items-center gap-3">
        <span
          className={cn(
            "grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-r text-white",
            accentClass
          )}
        >
          <Icon className="h-4 w-4" aria-hidden="true" />
        </span>
        <div>
          <p className="text-sm font-black leading-5 text-slate-800 dark:text-white">
            {title}
          </p>
          <p className="mt-0.5 text-xs font-semibold text-slate-500 dark:text-slate-400">
            {detail}
          </p>
        </div>
      </div>
    </div>
  );
}

function Sidebar({
  title,
  active,
  items,
  accentClass,
}: {
  title: string;
  active: string;
  items: string[];
  accentClass: string;
}) {
  return (
    <aside className="border-r border-slate-100 bg-slate-50/90 p-3 dark:border-white/10 dark:bg-white/5">
      <div className="mb-4 flex items-center gap-2">
        <span
          className={cn(
            "grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-r text-xs font-black text-white",
            accentClass
          )}
        >
          {title.charAt(0)}
        </span>
        <span className="text-[11px] font-black text-slate-900 dark:text-white">
          {title}
        </span>
      </div>

      {items.map((item) => (
        <div
          key={item}
          className={cn(
            "mb-2 flex items-center gap-2 rounded-xl px-2.5 py-2 text-[10px] font-black",
            item === active
              ? "bg-blue-600 text-white"
              : "text-slate-500 dark:text-slate-400"
          )}
        >
          <LayoutDashboard className="h-3.5 w-3.5" aria-hidden="true" />
          {item}
        </div>
      ))}
    </aside>
  );
}

function FooterTiles({ accentClass }: { accentClass: string }) {
  return (
    <div className="grid gap-3 sm:grid-cols-4">
      <MiniTile icon={Sparkles} title="Premium UI" detail="Modern feel" accentClass={accentClass} />
      <MiniTile icon={Target} title="Conversion" detail="Clear actions" accentClass={accentClass} />
      <MiniTile icon={Gauge} title="Performance" detail="Fast screens" accentClass={accentClass} />
      <MiniTile icon={Rocket} title="Launch Ready" detail="Built to ship" accentClass={accentClass} />
    </div>
  );
}

function RealImagePanel({
  imageUrl,
  label,
  title,
  description,
  accentClass,
}: {
  imageUrl: string;
  label: string;
  title: string;
  description: string;
  accentClass: string;
}) {
  return (
    <div className="relative min-h-[330px] overflow-hidden rounded-[1.65rem] border border-slate-200 bg-slate-950 shadow-[0_24px_70px_rgba(15,23,42,0.16)] dark:border-white/10">
      <img
        src={imageUrl}
        alt={title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-88"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.10),rgba(2,6,23,0.42)_42%,rgba(2,6,23,0.88))]" />
      <div
        className={cn(
          "absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r",
          accentClass
        )}
      />
      <div className="absolute inset-x-5 bottom-5 rounded-3xl border border-white/15 bg-white/14 p-4 text-white shadow-[0_18px_50px_rgba(2,6,23,0.26)] backdrop-blur-2xl">
        <p className="text-[10px] font-black uppercase tracking-[0.18em] text-white/70">
          {label}
        </p>
        <h3 className="mt-2 text-2xl font-black leading-tight tracking-[-0.04em]">
          {title}
        </h3>
        <p className="mt-2 text-xs font-semibold leading-5 text-white/72">
          {description}
        </p>
      </div>
    </div>
  );
}

function AssetPill({
  children,
  accentClass,
}: {
  children: ReactNode;
  accentClass: string;
}) {
  return (
    <span className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white px-3 py-2 text-[10px] font-black text-slate-600 shadow-sm dark:border-white/10 dark:bg-white/7 dark:text-slate-300">
      <span
        className={cn(
          "absolute inset-y-0 left-0 w-1 bg-gradient-to-b",
          accentClass
        )}
      />
      <span className="relative">{children}</span>
    </span>
  );
}


function RealImageFrame({
  imageUrl,
  alt,
  label,
  accentClass,
  className,
}: {
  imageUrl: string;
  alt: string;
  label: string;
  accentClass: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[1.55rem] border border-white/80 bg-white shadow-[0_22px_55px_rgba(15,23,42,0.14)] ring-1 ring-slate-200/80 dark:border-white/10 dark:bg-white/10 dark:ring-white/10",
        className
      )}
    >
      <img
        src={imageUrl}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.02),rgba(15,23,42,0.34))]" />
      <div
        className={cn(
          "absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r",
          accentClass
        )}
      />
      <span className="absolute left-3 top-3 rounded-full border border-white/60 bg-white/82 px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-slate-700 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/62 dark:text-white">
        {label}
      </span>
    </div>
  );
}

function CreativeChip({
  icon: Icon,
  label,
  accentClass,
}: {
  icon: LucideIcon;
  label: string;
  accentClass: string;
}) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-3 py-2 text-[10px] font-black text-slate-600 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/7 dark:text-slate-300">
      <span
        className={cn(
          "grid h-6 w-6 place-items-center rounded-full bg-gradient-to-r text-white",
          accentClass
        )}
      >
        <Icon className="h-3.5 w-3.5" aria-hidden="true" />
      </span>
      {label}
    </span>
  );
}

function CreativeProofStrip({ accentClass }: { accentClass: string }) {
  return (
    <div className="grid gap-3 sm:grid-cols-4">
      <MiniMetric
        label="Creative"
        value="Visual"
        note="Real preview"
        accentClass={accentClass}
      />
      <MiniMetric
        label="System"
        value="Clear"
        note="Reusable assets"
        accentClass={accentClass}
      />
      <MiniMetric
        label="Launch"
        value="Ready"
        note="Handoff included"
        accentClass={accentClass}
      />
      <MiniMetric
        label="Quality"
        value="Premium"
        note="Modern feel"
        accentClass={accentClass}
      />
    </div>
  );
}

export function UiUxDesignHeroPreview({ accentClass }: PreviewProps) {
  return (
    <PreviewShell footer={<CreativeProofStrip accentClass={accentClass} />}>
      <div className="relative min-h-[430px] overflow-hidden rounded-[1.75rem] border border-slate-200 bg-[linear-gradient(135deg,#ffffff_0%,#f7fbff_52%,#f4f0ff_100%)] p-5 dark:border-white/10 dark:bg-[linear-gradient(135deg,#0f172a_0%,#111827_52%,#1e1b4b_100%)]">
        <div className="pointer-events-none absolute -left-16 top-8 h-72 w-72 rounded-full bg-sky-200/45 blur-3xl dark:bg-sky-400/10" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-violet-200/45 blur-3xl dark:bg-violet-400/10" />

        <div className="relative grid min-h-[386px] gap-5 lg:grid-cols-[0.98fr_1.02fr]">
          <div className="relative">
            <RealImageFrame
              imageUrl="https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=900&q=85"
              alt="Designer creating a digital product interface"
              label="UX Workshop"
              accentClass={accentClass}
              className="h-[305px]"
            />

            <div className="absolute -bottom-7 left-6 right-6 rounded-[1.45rem] border border-slate-200 bg-white/92 p-4 shadow-[0_22px_60px_rgba(15,23,42,0.16)] backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/82">
              <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">
                Design handoff
              </p>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {[
                  ["Flow", MousePointerClick],
                  ["States", Layers3],
                  ["UI Kit", Palette],
                ].map(([label, Icon]) => (
                  <div
                    key={label as string}
                    className="rounded-2xl bg-slate-50 p-3 text-center dark:bg-white/6"
                  >
                    <Icon className="mx-auto h-5 w-5 text-blue-500" />
                    <p className="mt-2 text-[10px] font-black text-slate-600 dark:text-slate-300">
                      {label as string}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative flex flex-col justify-center">
            <div className="rounded-[1.7rem] border border-slate-200 bg-white/88 p-5 shadow-[0_22px_70px_rgba(15,23,42,0.10)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/7">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-blue-600 dark:text-cyan-200">
                UI/UX Design
              </p>
              <h3 className="mt-2 max-w-sm text-3xl font-black leading-[1.05] tracking-[-0.05em] text-slate-950 dark:text-white">
                Real product screens before development starts.
              </h3>
              <p className="mt-3 text-sm font-semibold leading-6 text-slate-500 dark:text-slate-400">
                User journeys, visual direction, components, empty states, and
                clickable flows shown like a real product concept.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <CreativeChip
                  icon={MousePointerClick}
                  label="Clickable prototype"
                  accentClass={accentClass}
                />
                <CreativeChip
                  icon={Layers3}
                  label="Component system"
                  accentClass={accentClass}
                />
                <CreativeChip
                  icon={CheckCircle2}
                  label="Developer handoff"
                  accentClass={accentClass}
                />
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-[1.35rem] border border-slate-200 bg-white/82 p-4 dark:border-white/10 dark:bg-white/7">
                <p className="text-[10px] font-black uppercase tracking-[0.14em] text-slate-400">
                  Mobile flow
                </p>
                <div className="mt-3 space-y-2">
                  <div className={cn("h-10 rounded-2xl bg-gradient-to-r", accentClass)} />
                  <div className="h-9 rounded-2xl bg-slate-100 dark:bg-white/8" />
                  <div className="h-9 rounded-2xl bg-slate-100 dark:bg-white/8" />
                </div>
              </div>

              <div className="rounded-[1.35rem] border border-slate-200 bg-white/82 p-4 dark:border-white/10 dark:bg-white/7">
                <p className="text-[10px] font-black uppercase tracking-[0.14em] text-slate-400">
                  Web screen
                </p>
                <div className="mt-3 rounded-2xl bg-slate-100 p-2 dark:bg-white/8">
                  <div className="h-16 rounded-xl bg-white dark:bg-slate-950/60" />
                  <div className={cn("mt-2 h-2 rounded-full bg-gradient-to-r", accentClass)} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PreviewShell>
  );
}

export function LandingPagesHeroPreview({ accentClass }: PreviewProps) {
  return (
    <PreviewShell footer={<CreativeProofStrip accentClass={accentClass} />}>
      <div className="relative min-h-[430px] overflow-hidden rounded-[1.75rem] border border-slate-200 bg-[linear-gradient(135deg,#ffffff_0%,#f8fbff_52%,#f4f0ff_100%)] p-5 dark:border-white/10 dark:bg-[linear-gradient(135deg,#0f172a_0%,#111827_52%,#1e1b4b_100%)]">
        <div className="pointer-events-none absolute -left-16 top-8 h-72 w-72 rounded-full bg-blue-200/45 blur-3xl dark:bg-blue-400/10" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-violet-200/45 blur-3xl dark:bg-violet-400/10" />

        <div className="relative grid min-h-[386px] gap-5 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="rounded-[1.65rem] border border-slate-200 bg-white/92 p-3 shadow-[0_22px_70px_rgba(15,23,42,0.11)] backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/82">
            <div className="overflow-hidden rounded-[1.35rem] border border-slate-200 bg-white dark:border-white/10 dark:bg-slate-950">
              <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3 dark:border-white/10">
                <BrowserDots />
                <span className="text-[10px] font-black uppercase tracking-[0.14em] text-slate-400">
                  Live campaign page
                </span>
              </div>

              <div className={cn("bg-gradient-to-br p-6 text-white", accentClass)}>
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-white/75">
                  Focused offer
                </p>
                <h3 className="mt-3 max-w-xs text-3xl font-black leading-[1.05] tracking-[-0.045em]">
                  Turn one campaign into one clear conversion path.
                </h3>
                <span className="mt-5 inline-flex rounded-2xl bg-white/20 px-4 py-3 text-xs font-black">
                  Book Strategy Call
                </span>
              </div>

              <div className="grid gap-3 p-4">
                {[
                  ["Proof block", "Customer trust before CTA"],
                  ["Benefit stack", "What user gets clearly"],
                  ["Lead form", "Low friction enquiry"],
                ].map(([title, detail]) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-3 dark:border-white/10 dark:bg-white/6"
                  >
                    <p className="text-xs font-black text-slate-900 dark:text-white">
                      {title}
                    </p>
                    <p className="mt-1 text-[10px] font-semibold text-slate-500 dark:text-slate-400">
                      {detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <RealImageFrame
              imageUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=85"
              alt="Campaign planning and conversion analysis on a laptop"
              label="Campaign setup"
              accentClass={accentClass}
              className="h-[250px]"
            />

            <div className="mt-4 rounded-[1.55rem] border border-slate-200 bg-white/90 p-4 shadow-[0_18px_50px_rgba(15,23,42,0.10)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/7">
              <p className="text-sm font-black text-slate-950 dark:text-white">
                Conversion path
              </p>
              <div className="mt-4 grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-2 text-center">
                {["Ad", "Page", "Lead"].map((item, index) => (
                  <div key={item} className="contents">
                    <span className="rounded-2xl bg-slate-50 px-3 py-3 text-[10px] font-black text-slate-600 dark:bg-white/6 dark:text-slate-300">
                      {item}
                    </span>
                    {index < 2 ? (
                      <ArrowRight
                        className="h-4 w-4 text-blue-500"
                        aria-hidden="true"
                      />
                    ) : null}
                  </div>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <CreativeChip icon={Target} label="Single offer" accentClass={accentClass} />
                <CreativeChip icon={ClipboardCheck} label="Lead form" accentClass={accentClass} />
                <CreativeChip icon={LineChart} label="Tracked events" accentClass={accentClass} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </PreviewShell>
  );
}

export function SeoAnalyticsHeroPreview({ accentClass }: PreviewProps) {
  return (
    <PreviewShell footer={<CreativeProofStrip accentClass={accentClass} />}>
      <div className="relative min-h-[430px] overflow-hidden rounded-[1.75rem] border border-slate-200 bg-[linear-gradient(135deg,#ffffff_0%,#f7fbff_50%,#eef7ff_100%)] p-5 dark:border-white/10 dark:bg-[linear-gradient(135deg,#0f172a_0%,#082f49_48%,#111827_100%)]">
        <div className="pointer-events-none absolute -left-16 top-8 h-72 w-72 rounded-full bg-sky-200/45 blur-3xl dark:bg-sky-400/10" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-blue-200/45 blur-3xl dark:bg-blue-400/10" />

        <div className="relative grid min-h-[386px] gap-5 lg:grid-cols-[0.98fr_1.02fr]">
          <div className="space-y-4">
            <div className="rounded-[1.55rem] border border-slate-200 bg-white/94 p-4 shadow-[0_20px_55px_rgba(15,23,42,0.10)] backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/82">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-3 dark:border-white/10">
                <Search className="h-4 w-4 text-blue-500" />
                <span className="text-xs font-black text-slate-800 dark:text-white">
                  custom crm development agency
                </span>
              </div>

              <div className="mt-4 space-y-4">
                {[
                  ["HNX Solutions — Custom CRM Systems", "Role-based CRM, automation, dashboards, and ownership."],
                  ["Build CRM Workflows That Match Your Team", "Lead tracking, permissions, reports, and follow-up systems."],
                  ["CRM Development Services", "Custom portals, APIs, analytics, and integrations."],
                ].map(([title, detail], index) => (
                  <div key={title}>
                    <p
                      className={cn(
                        "text-sm font-black",
                        index === 0 ? "text-blue-700 dark:text-cyan-200" : "text-slate-700 dark:text-slate-300"
                      )}
                    >
                      {title}
                    </p>
                    <p className="mt-1 text-[11px] font-semibold leading-5 text-slate-500 dark:text-slate-400">
                      {detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <RealImageFrame
              imageUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=85"
              alt="Search analytics and content performance review"
              label="Analytics review"
              accentClass={accentClass}
              className="h-[145px]"
            />
          </div>

          <div className="rounded-[1.65rem] border border-slate-200 bg-white/92 p-5 shadow-[0_22px_70px_rgba(15,23,42,0.11)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/7">
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-blue-600 dark:text-cyan-200">
              SEO & Analytics
            </p>
            <h3 className="mt-2 max-w-sm text-3xl font-black leading-[1.05] tracking-[-0.05em] text-slate-950 dark:text-white">
              Search visibility shown as a real growth workspace.
            </h3>
            <p className="mt-3 text-sm font-semibold leading-6 text-slate-500 dark:text-slate-400">
              Search result previews, technical audit cards, analytics events,
              and content opportunities in one visual planning board.
            </p>

            <div className="mt-5 grid gap-3">
              {[
                ["Meta preview", FileSearch],
                ["Schema checks", CheckCircle2],
                ["Content gaps", Target],
                ["Event tracking", LineChart],
              ].map(([label, Icon]) => (
                <div
                  key={label as string}
                  className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-white/10 dark:bg-white/6"
                >
                  <span className="flex items-center gap-3 text-xs font-black text-slate-700 dark:text-slate-200">
                    <Icon className="h-4 w-4 text-blue-500" />
                    {label as string}
                  </span>
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PreviewShell>
  );
}

export function BrandIdentityHeroPreview({ accentClass }: PreviewProps) {
  return (
    <PreviewShell footer={<CreativeProofStrip accentClass={accentClass} />}>
      <div className="relative min-h-[430px] overflow-hidden rounded-[1.75rem] border border-slate-200 bg-[linear-gradient(135deg,#ffffff_0%,#f9fbff_50%,#f2f7ff_100%)] p-5 dark:border-white/10 dark:bg-[linear-gradient(135deg,#0f172a_0%,#111827_52%,#1e1b4b_100%)]">
        <div className="pointer-events-none absolute -left-16 top-8 h-72 w-72 rounded-full bg-sky-200/45 blur-3xl dark:bg-sky-400/10" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-cyan-200/45 blur-3xl dark:bg-cyan-400/10" />

        <div className="relative grid min-h-[386px] gap-5 lg:grid-cols-[1fr_1fr]">
          <div className="relative rounded-[1.75rem] border border-slate-200 bg-white/92 p-4 shadow-[0_22px_70px_rgba(15,23,42,0.11)] backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/82">
            <RealImageFrame
              imageUrl="https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=900&q=85"
              alt="Brand identity moodboard with creative assets"
              label="Moodboard"
              accentClass={accentClass}
              className="h-[190px]"
            />

            <div className="mt-4 rounded-[1.4rem] bg-slate-950 p-5 text-white">
              <div
                className={cn(
                  "grid h-20 w-20 place-items-center rounded-[1.55rem] bg-gradient-to-br text-3xl font-black",
                  accentClass
                )}
              >
                H
              </div>
              <p className="mt-4 text-[10px] font-black uppercase tracking-[0.18em] text-white/55">
                Brand direction
              </p>
              <h3 className="mt-2 max-w-xs text-2xl font-black leading-tight">
                Premium identity system for trust and recall.
              </h3>
            </div>
          </div>

          <div className="grid gap-3">
            <div className="rounded-[1.55rem] border border-slate-200 bg-white/90 p-4 shadow-[0_18px_50px_rgba(15,23,42,0.10)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/7">
              <p className="text-sm font-black text-slate-950 dark:text-white">
                Brand kit pieces
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {[
                  ["Logo mark", PenTool],
                  ["Color palette", Palette],
                  ["Typography", Type],
                  ["Social assets", Share2],
                ].map(([label, Icon]) => (
                  <div
                    key={label as string}
                    className="rounded-2xl bg-slate-50 p-4 dark:bg-white/6"
                  >
                    <Icon className="h-5 w-5 text-blue-500" />
                    <p className="mt-3 text-xs font-black text-slate-700 dark:text-slate-200">
                      {label as string}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.55rem] border border-slate-200 bg-white/90 p-4 shadow-[0_18px_50px_rgba(15,23,42,0.10)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/7">
              <p className="text-sm font-black text-slate-950 dark:text-white">
                Palette and layout direction
              </p>
              <div className="mt-4 grid grid-cols-5 gap-2">
                {["bg-sky-400", "bg-blue-500", "bg-cyan-400", "bg-slate-950", "bg-white"].map((color) => (
                  <span
                    key={color}
                    className={cn(
                      "h-14 rounded-2xl border border-slate-200 shadow-sm",
                      color
                    )}
                  />
                ))}
              </div>
              <div className="mt-4 space-y-2">
                <div className="h-3 rounded-full bg-slate-950 dark:bg-white" />
                <div className="h-2 w-2/3 rounded-full bg-slate-200 dark:bg-white/10" />
                <div className={cn("h-2 w-1/2 rounded-full bg-gradient-to-r", accentClass)} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </PreviewShell>
  );
}
