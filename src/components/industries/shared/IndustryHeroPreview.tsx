"use client";

import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Bell,
  CheckCircle2,
  CircleDot,
  LineChart,
  Menu,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import type { IndustryFlowStep } from "./IndustryFlow";
import type { IndustryMetric } from "./IndustryDashboardPreview";

type HeroBenefit = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type IndustryHeroPreviewProps = {
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  ctaLabel: string;
  imageUrl: string;
  visualType:
    | "website"
    | "mobile"
    | "crm"
    | "portal"
    | "automation"
    | "dashboard"
    | "full-suite";
  benefits: HeroBenefit[];
  metrics: IndustryMetric[];
  flowSteps: IndustryFlowStep[];
  href?: string;
};

function HeroMetric({ metric }: { metric: IndustryMetric }) {
  const Icon = metric.icon;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white/88 p-3 shadow-[0_14px_34px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-[#0b1220]/82">
      <div className="flex items-center justify-between gap-2">
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-blue-50 text-blue-700 dark:bg-blue-400/10 dark:text-blue-300">
          <Icon className="h-4 w-4" aria-hidden="true" />
        </span>
        {metric.change && (
          <span className="text-[10px] font-black text-emerald-600 dark:text-emerald-300">
            {metric.change}
          </span>
        )}
      </div>
      <p className="mt-3 text-[11px] font-bold text-slate-500 dark:text-slate-400">
        {metric.label}
      </p>
      <p className="mt-1 text-xl font-black tracking-tight text-slate-950 dark:text-white">
        {metric.value}
      </p>
    </div>
  );
}

function BrowserChrome({ imageUrl }: { imageUrl: string }) {
  return (
    <div className="rounded-[1.75rem] border border-slate-200 bg-white/92 p-3 shadow-[0_28px_80px_rgba(15,23,42,0.14)] backdrop-blur-2xl dark:border-white/10 dark:bg-[#0b1220]/88">
      <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3 dark:border-white/10 dark:bg-white/[0.05]">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </div>
        <div className="h-6 w-52 max-w-[48%] rounded-full bg-white shadow-inner dark:bg-white/10" />
        <span className="rounded-full bg-blue-600 px-3 py-1 text-[10px] font-black text-white">
          Book
        </span>
      </div>
      <div
        className="mt-3 min-h-72 rounded-3xl bg-cover bg-center p-5"
        style={{
          backgroundImage: `linear-gradient(110deg, rgba(248,250,252,0.94) 0%, rgba(248,250,252,0.75) 47%, rgba(15,23,42,0.16) 100%), url(${imageUrl})`,
        }}
      >
        <div className="max-w-xs">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-blue-700">
            CareWell
          </p>
          <h3 className="mt-3 text-3xl font-black leading-tight text-slate-950">
            Compassionate care. Better digital access.
          </h3>
          <div className="mt-5 flex flex-wrap gap-2">
            {["Doctors", "Services", "Appointments"].map((item) => (
              <span
                key={item}
                className="rounded-full bg-white/88 px-3 py-1.5 text-[11px] font-black text-slate-700 shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function PhoneMockup({ imageUrl }: { imageUrl: string }) {
  return (
    <div className="mx-auto w-[min(260px,78vw)] rounded-[2.35rem] border-[8px] border-slate-950 bg-slate-950 p-2 shadow-[0_30px_80px_rgba(15,23,42,0.28)] dark:border-slate-800">
      <div className="overflow-hidden rounded-[1.8rem] bg-white dark:bg-slate-950">
        <div
          className="h-32 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(37,99,235,0.12), rgba(255,255,255,0.96)), url(${imageUrl})`,
          }}
        />
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-black text-slate-950 dark:text-white">
                Hi, Sarah
              </p>
              <p className="text-[10px] text-slate-500 dark:text-slate-400">
                Your care dashboard
              </p>
            </div>
            <Bell className="h-4 w-4 text-blue-600 dark:text-blue-300" />
          </div>
          <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-3 dark:border-white/10 dark:bg-white/[0.06]">
            <p className="text-[10px] font-black text-slate-500 dark:text-slate-400">
              Upcoming Appointment
            </p>
            <p className="mt-1 text-sm font-black text-slate-950 dark:text-white">
              Dr. James Carter
            </p>
            <button className="mt-3 w-full rounded-xl bg-blue-600 py-2 text-[11px] font-black text-white">
              View Details
            </button>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {["Book", "Records", "Reports"].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-slate-200 bg-white p-2 text-center text-[10px] font-bold text-slate-600 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-300"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function DashboardMock({ metrics }: { metrics: IndustryMetric[] }) {
  return (
    <div className="rounded-[1.75rem] border border-slate-200 bg-white/92 p-4 shadow-[0_28px_80px_rgba(15,23,42,0.14)] backdrop-blur-2xl dark:border-white/10 dark:bg-[#0b1220]/88">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-blue-50 text-blue-700 dark:bg-blue-400/10 dark:text-blue-300">
            <ShieldCheck className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <p className="text-sm font-black text-slate-950 dark:text-white">
              Healthcare Command Center
            </p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Patients, appointments, reports, and follow-ups
            </p>
          </div>
        </div>
        <Menu className="h-5 w-5 text-slate-400" aria-hidden="true" />
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {metrics.slice(0, 4).map((metric) => (
          <HeroMetric key={metric.label} metric={metric} />
        ))}
      </div>

      <div className="mt-4 grid gap-3 md:grid-cols-[1fr_0.85fr]">
        <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-4 dark:border-white/10 dark:bg-white/[0.045]">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-xs font-black text-slate-950 dark:text-white">
              Appointment Trend
            </p>
            <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400">
              30 days
            </span>
          </div>
          <div className="flex h-36 items-end gap-2">
            {[42, 58, 48, 70, 62, 82, 68, 92, 76, 98, 84, 105].map(
              (height, index) => (
                <span
                  key={`${height}-${index}`}
                  className="flex-1 rounded-t-xl bg-linear-to-t from-blue-600 to-cyan-300"
                  style={{ height: `${height}%` }}
                />
              ),
            )}
          </div>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-4 dark:border-white/10 dark:bg-white/[0.045]">
          <p className="text-xs font-black text-slate-950 dark:text-white">
            Top Services
          </p>
          <div className="mt-4 space-y-3">
            {["Cardiology", "Orthopedics", "Women's Health", "Pediatrics"].map(
              (item, index) => (
                <div key={item}>
                  <div className="mb-1 flex items-center justify-between text-[11px] font-bold text-slate-600 dark:text-slate-300">
                    <span>{item}</span>
                    <span>{28 - index * 4}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white dark:bg-white/10">
                    <div
                      className="h-full rounded-full bg-linear-to-r from-violet-500 to-blue-600"
                      style={{ width: `${82 - index * 12}%` }}
                    />
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function AutomationVisual({
  flowSteps,
  metrics,
}: {
  flowSteps: IndustryFlowStep[];
  metrics: IndustryMetric[];
}) {
  return (
    <div className="rounded-[1.75rem] border border-slate-200 bg-white/92 p-4 shadow-[0_28px_80px_rgba(15,23,42,0.14)] backdrop-blur-2xl dark:border-white/10 dark:bg-[#0b1220]/88">
      <div className="grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-4 dark:border-white/10 dark:bg-white/[0.045]">
          <p className="text-sm font-black text-slate-950 dark:text-white">
            Workflow Builder
          </p>
          <div className="mt-5 space-y-3">
            {flowSteps.slice(0, 5).map((step, index) => {
              const Icon = step.icon;

              return (
                <div key={step.title} className="relative">
                  <div className="mx-auto flex max-w-xs items-center gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm dark:border-white/10 dark:bg-white/[0.06]">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-700 dark:bg-blue-400/10 dark:text-blue-300">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-xs font-black text-slate-950 dark:text-white">
                        {step.title}
                      </span>
                      <span className="text-[10px] text-slate-500 dark:text-slate-400">
                        {step.description}
                      </span>
                    </span>
                  </div>
                  {index < 4 && (
                    <div className="mx-auto h-5 w-px border-l border-dashed border-blue-300 dark:border-blue-300/40" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <div className="grid gap-3 sm:grid-cols-2">
            {metrics.slice(0, 4).map((metric) => (
              <HeroMetric key={metric.label} metric={metric} />
            ))}
          </div>
          <div className="mt-4 rounded-3xl border border-slate-200 bg-slate-50/80 p-4 dark:border-white/10 dark:bg-white/[0.045]">
            <p className="text-xs font-black text-slate-950 dark:text-white">
              Workflow Performance
            </p>
            <svg
              viewBox="0 0 360 150"
              className="mt-4 h-40 w-full"
              aria-hidden="true"
            >
              <path
                d="M12 122 C62 104 66 78 112 86 C156 95 151 48 202 56 C250 65 260 28 348 20"
                fill="none"
                stroke="#2563eb"
                strokeLinecap="round"
                strokeWidth="5"
              />
              <path
                d="M12 128 C62 110 66 84 112 92 C156 101 151 54 202 62 C250 71 260 34 348 26 L348 150 L12 150Z"
                fill="#2563eb"
                opacity="0.08"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function FullSuiteVisual({
  flowSteps,
}: {
  flowSteps: IndustryFlowStep[];
}) {
  return (
    <div className="rounded-[1.75rem] border border-slate-200 bg-white/92 p-5 shadow-[0_28px_80px_rgba(15,23,42,0.14)] backdrop-blur-2xl dark:border-white/10 dark:bg-[#0b1220]/88">
      <div className="grid items-center gap-4 lg:grid-cols-[1fr_210px_1fr]">
        <div className="grid gap-3">
          {flowSteps.slice(0, 3).map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="rounded-3xl border border-slate-200 bg-slate-50/82 p-4 dark:border-white/10 dark:bg-white/[0.045]"
              >
                <span className="grid h-10 w-10 place-items-center rounded-2xl bg-blue-50 text-blue-700 dark:bg-blue-400/10 dark:text-blue-300">
                  <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                </span>
                <p className="mt-3 text-sm font-black text-slate-950 dark:text-white">
                  {step.title}
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-600 dark:text-slate-300">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
        <div className="relative mx-auto grid h-48 w-48 place-items-center rounded-full border border-blue-200 bg-linear-to-br from-blue-50 to-violet-50 shadow-inner dark:border-blue-300/15 dark:from-blue-400/10 dark:to-violet-400/10">
          <span className="absolute inset-4 rounded-full border border-dashed border-blue-300 dark:border-blue-300/25" />
          <span className="text-center">
            <span className="block text-4xl font-black text-blue-700 dark:text-blue-300">
              HNX
            </span>
            <span className="mt-1 block text-[10px] font-black uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">
              Connected
            </span>
          </span>
        </div>
        <div className="grid gap-3">
          {flowSteps.slice(3, 6).map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="rounded-3xl border border-slate-200 bg-slate-50/82 p-4 dark:border-white/10 dark:bg-white/[0.045]"
              >
                <span className="grid h-10 w-10 place-items-center rounded-2xl bg-cyan-50 text-cyan-700 dark:bg-cyan-400/10 dark:text-cyan-300">
                  <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                </span>
                <p className="mt-3 text-sm font-black text-slate-950 dark:text-white">
                  {step.title}
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-600 dark:text-slate-300">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function HeroVisual({
  imageUrl,
  visualType,
  metrics,
  flowSteps,
}: Pick<
  IndustryHeroPreviewProps,
  "imageUrl" | "visualType" | "metrics" | "flowSteps"
>) {
  if (visualType === "mobile") {
    return (
      <div className="grid items-center gap-5 lg:grid-cols-[0.86fr_1fr]">
        <PhoneMockup imageUrl={imageUrl} />
        <DashboardMock metrics={metrics} />
      </div>
    );
  }

  if (visualType === "automation") {
    return <AutomationVisual flowSteps={flowSteps} metrics={metrics} />;
  }

  if (visualType === "full-suite") {
    return <FullSuiteVisual flowSteps={flowSteps} />;
  }

  if (visualType === "website") {
    return <BrowserChrome imageUrl={imageUrl} />;
  }

  return (
    <div className="relative">
      <DashboardMock metrics={metrics} />
      {(visualType === "crm" || visualType === "portal") && (
        <div className="absolute -bottom-8 right-0 hidden w-44 sm:block lg:-right-5">
          <PhoneMockup imageUrl={imageUrl} />
        </div>
      )}
    </div>
  );
}

export default function IndustryHeroPreview({
  eyebrow,
  title,
  highlight,
  description,
  ctaLabel,
  imageUrl,
  visualType,
  benefits,
  metrics,
  flowSteps,
  href = "/contact",
}: IndustryHeroPreviewProps) {
  return (
    <section className="relative px-5 pb-10 pt-28 sm:px-6 lg:px-8 lg:pb-14 lg:pt-32 xl:px-10 2xl:px-12">
      <div className="mx-auto max-w-[min(94vw,1540px)]">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.42 }}
          >
            <p className="text-sm font-black uppercase tracking-[0.32em] text-blue-700 dark:text-blue-300">
              HNX Solutions
            </p>
            <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-blue-700 dark:border-blue-300/15 dark:bg-blue-400/10 dark:text-blue-300">
              <CircleDot className="h-3.5 w-3.5" aria-hidden="true" />
              {eyebrow}
            </p>
            <h1 className="mt-6 max-w-3xl text-5xl font-black leading-[0.95] tracking-tight text-slate-950 dark:text-white sm:text-6xl xl:text-7xl">
              {title.replace(highlight, "").trim()}{" "}
              <span className="bg-linear-to-r from-blue-600 via-cyan-500 to-violet-600 bg-clip-text text-transparent">
                {highlight}
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300 sm:text-xl">
              {description}
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {benefits.slice(0, 3).map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <motion.div
                    key={benefit.title}
                    whileHover={{ y: -3 }}
                    className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/78 p-3 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.06]"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-700 dark:bg-blue-400/10 dark:text-blue-300">
                      <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                    </span>
                    <span className="text-sm font-black leading-5 text-slate-800 dark:text-white">
                      {benefit.title}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={href}
                className="btn-shine inline-flex items-center justify-center gap-3 rounded-2xl bg-linear-to-r from-blue-600 via-cyan-500 to-violet-600 px-6 py-4 text-sm font-black text-white shadow-[0_18px_42px_rgba(37,99,235,0.26)] transition hover:-translate-y-1"
              >
                {ctaLabel}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/industries/healthcare"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white/75 px-6 py-4 text-sm font-black text-slate-800 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:text-blue-700 dark:border-white/10 dark:bg-white/[0.06] dark:text-white dark:hover:text-blue-300"
              >
                View All Healthcare Solutions
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.48, delay: 0.05 }}
            className="relative lg:min-h-[520px]"
          >
            <div
              className="pointer-events-none absolute -inset-4 rounded-[3rem] bg-linear-to-br from-blue-500/12 via-cyan-400/10 to-violet-500/14 blur-2xl"
              aria-hidden="true"
            />
            <div className="relative">
              <HeroVisual
                imageUrl={imageUrl}
                visualType={visualType}
                metrics={metrics}
                flowSteps={flowSteps}
              />
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -left-3 -top-5 hidden rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 text-xs font-black text-slate-700 shadow-[0_18px_44px_rgba(15,23,42,0.12)] backdrop-blur-xl dark:border-white/10 dark:bg-[#0b1220]/88 dark:text-slate-200 sm:flex sm:items-center sm:gap-2"
              >
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                HIPAA-ready structure
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-4 right-4 hidden rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 text-xs font-black text-slate-700 shadow-[0_18px_44px_rgba(15,23,42,0.12)] backdrop-blur-xl dark:border-white/10 dark:bg-[#0b1220]/88 dark:text-slate-200 md:flex md:items-center md:gap-2"
              >
                <LineChart className="h-4 w-4 text-blue-600 dark:text-blue-300" />
                Connected reporting
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
