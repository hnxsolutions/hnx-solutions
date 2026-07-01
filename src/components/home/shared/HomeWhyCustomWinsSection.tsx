import type { ReactNode } from "react";
import type { IconType } from "react-icons";
import {
  HiArrowRight,
  HiCheck,
  HiDesktopComputer,
  HiLockClosed,
  HiSparkles,
  HiUsers,
  HiX,
} from "react-icons/hi";

import { HomeSectionShell } from "./HomeSectionPrimitives";

const genericCosts = [
  "Pay every month",
  "User limits",
  "Extra module charges",
  "Data on their terms",
] as const;

const customBenefits = [
  "Pay once, use forever",
  "Add users anytime",
  "No per-user fees",
  "Your data, your rules",
] as const;

const bottomBenefits: Array<{ icon: IconType; title: string; copy: string }> = [
  {
    icon: HiLockClosed,
    title: "You Own It",
    copy: "Your CRM, your data.",
  },
  {
    icon: HiUsers,
    title: "No Per-User Fees",
    copy: "Add users anytime.",
  },
  {
    icon: HiSparkles,
    title: "Built Around You",
    copy: "No forced workflow.",
  },
];

function PointRow({
  children,
  positive = false,
}: {
  children: ReactNode;
  positive?: boolean;
}) {
  return (
    <li className="flex items-center gap-2 py-1.25 text-[12px] font-bold leading-snug text-slate-700 dark:text-slate-300">
      <span
        className={`grid h-5.5 w-5.5 shrink-0 place-items-center rounded-full ${
          positive
            ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-300"
            : "bg-red-50 text-red-500 dark:bg-red-500/15 dark:text-red-300"
        }`}
      >
        {positive ? (
          <HiCheck className="text-sm" />
        ) : (
          <HiX className="text-sm" />
        )}
      </span>
      <span>{children}</span>
    </li>
  );
}

function PricingCard({ type }: { type: "generic" | "custom" }) {
  const isCustom = type === "custom";

  return (
    <div
      className={`relative flex h-full min-h-[330px] flex-col justify-between rounded-[1.35rem] bg-white/90 p-4 shadow-[0_16px_42px_rgba(15,23,42,0.06)] backdrop-blur-xl dark:bg-white/[0.06] dark:shadow-[0_20px_55px_rgba(0,0,0,0.26)] ${
        isCustom ? "ring-1 ring-violet-200/70 dark:ring-violet-400/20" : ""
      }`}
    >
      <div>
        <p className="text-center text-[15px] font-black text-slate-950 dark:text-white">
          {isCustom ? "HNX Custom CRM" : "Generic CRM"}
        </p>

        <div className="mt-3 text-center">
          {isCustom ? (
            <>
              <p className="text-lg font-black text-slate-950 dark:text-white">
                One-Time Investment
              </p>
              <p className="mt-1.5 text-sm font-bold text-slate-500 dark:text-slate-400">
                No per-user fees
              </p>
              <div className="my-3 h-px bg-slate-200/70 dark:bg-white/10" />
              <p className="text-2xl font-black leading-tight text-emerald-600 dark:text-emerald-300">
                Save Big.
                <br />
                Own Forever.
              </p>
            </>
          ) : (
            <>
              <p className="text-2xl font-black text-slate-950 dark:text-white">
                ₹1,200
                <span className="text-sm font-bold text-slate-500 dark:text-slate-400">
                  /user/mo
                </span>
              </p>
              <p className="mt-2 text-xs font-bold text-slate-500 dark:text-slate-400">
                × 10 users × 12 months × 3 years
              </p>
              <div className="my-3 h-px bg-slate-200/70 dark:bg-white/10" />
              <p className="text-2xl font-black text-red-500">= ₹4,32,000</p>
              <p className="mt-0.5 text-xs font-black text-slate-950 dark:text-white">
                in 3 years
              </p>
            </>
          )}
        </div>
      </div>

      <ul className="mt-3 space-y-0">
        {(isCustom ? customBenefits : genericCosts).map((item) => (
          <PointRow key={item} positive={isCustom}>
            {item}
          </PointRow>
        ))}
      </ul>
    </div>
  );
}

function BenefitStrip() {
  return (
    <div className="mt-4 grid gap-2 rounded-[1.05rem] bg-white/78 p-2 shadow-[0_12px_30px_rgba(15,23,42,0.04)] backdrop-blur-xl sm:grid-cols-3 dark:bg-white/[0.055]">
      {bottomBenefits.map(({ icon: Icon, title, copy }) => (
        <div
          key={title}
          className="flex items-center gap-2 rounded-xl px-2 py-1.5"
        >
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-500/15 dark:text-blue-300">
            <Icon className="text-base" />
          </span>
          <div>
            <p className="text-[12px] font-black text-slate-950 dark:text-white">
              {title}
            </p>
            <p className="text-[10px] font-semibold text-slate-500 dark:text-slate-400">
              {copy}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function HomeWhyCustomWinsSection() {
  return (
    <HomeSectionShell>
      <section
        className="relative overflow-hidden rounded-[1.8rem] px-5 py-5 sm:px-7 lg:px-8 xl:px-10"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(248,250,255,0.96) 50%, rgba(244,236,255,0.72) 100%)",
        }}
      >
        <div
          className="pointer-events-none absolute -left-36 bottom-0 h-64 w-64 rounded-full blur-3xl"
          style={{ background: "rgba(37,99,235,0.1)" }}
        />
        <div
          className="pointer-events-none absolute -right-28 top-0 h-64 w-64 rounded-full blur-3xl"
          style={{ background: "rgba(147,51,234,0.1)" }}
        />
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-1/2 opacity-30"
          style={{
            backgroundImage:
              "repeating-radial-gradient(circle at left center, rgba(99,102,241,0.14) 0 1px, transparent 1px 13px)",
          }}
        />

        <div className="relative grid items-center gap-5 xl:grid-cols-[0.68fr_1.32fr]">
          <div>
            <p className="inline-flex rounded-full bg-blue-50 px-3 py-1.25 text-[9px] font-black uppercase tracking-[0.16em] text-blue-700 dark:bg-blue-500/15 dark:text-blue-300">
              Custom CRM Offer
            </p>

            <h2 className="mt-3 max-w-[480px] text-[clamp(2rem,4.35vw,3.55rem)] font-black leading-[0.94] tracking-[-0.06em] text-slate-950 dark:text-white">
              Stop Renting.
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                Own It.
              </span>
            </h2>

            <p className="mt-3 max-w-[390px] text-[15px] font-semibold leading-6 text-slate-600 dark:text-slate-300">
              Pay once. Add users anytime. Own your CRM forever.
            </p>

            <div className="mt-4 flex flex-col gap-2.5 sm:flex-row">
              <a
                href="/crm-demo"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-4 text-[13px] font-black text-white shadow-[0_14px_30px_rgba(79,70,229,0.22)] transition hover:-translate-y-0.5"
              >
                <HiDesktopComputer className="text-base" />
                Experience CRM Demo
                <HiArrowRight className="text-sm" />
              </a>
              <a
                href="/workflow-lab"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-white/86 px-4 text-[13px] font-black text-slate-950 shadow-[0_12px_26px_rgba(15,23,42,0.05)] transition hover:-translate-y-0.5 dark:bg-white/[0.06] dark:text-white"
              >
                Open Workflow Lab
                <HiSparkles className="text-sm text-violet-600 dark:text-violet-300" />
              </a>
            </div>

            <p className="mt-3 flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
              <HiLockClosed className="text-sm text-blue-600 dark:text-blue-300" />
              Secure. Scalable. Built for growth.
            </p>
          </div>

          <div className="relative grid gap-3 lg:grid-cols-2">
            <div className="absolute left-1/2 top-10 z-20 hidden h-14 w-22 -translate-x-1/2 lg:block">
              <div className="h-full w-full rounded-full border-t-[3px] border-violet-600" />
              <HiArrowRight className="absolute right-0 top-3 text-2xl text-violet-600" />
            </div>
            <PricingCard type="generic" />
            <PricingCard type="custom" />
          </div>
        </div>

        <BenefitStrip />
      </section>
    </HomeSectionShell>
  );
}
