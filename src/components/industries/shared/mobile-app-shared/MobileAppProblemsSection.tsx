"use client";

import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  ClipboardList,
  Clock,
  Database,
  Puzzle,
  Users,
} from "lucide-react";
import type { IndustryMobileAppPageData } from "../industryMobileAppData";

type ProblemItem = {
  title: string;
  description: string;
  icon: LucideIcon;
  tone: string;
};

const mobileAppProblems: ProblemItem[] = [
  {
    title: "Users Drop After Install",
    description:
      "Weak onboarding and unclear actions make users leave before the app becomes useful.",
    icon: Users,
    tone: "bg-blue-50 text-blue-600 ring-blue-100",
  },
  {
    title: "No Live Status Updates",
    description:
      "Customers keep calling because bookings, orders, or requests are not trackable.",
    icon: Clock,
    tone: "bg-violet-50 text-violet-600 ring-violet-100",
  },
  {
    title: "App & Admin Not Synced",
    description:
      "Mobile users and internal teams work from different data, causing delays.",
    icon: Database,
    tone: "bg-emerald-50 text-emerald-600 ring-emerald-100",
  },
  {
    title: "Manual Request Flow",
    description:
      "Bookings, approvals, and service requests still depend on calls or forms.",
    icon: ClipboardList,
    tone: "bg-orange-50 text-orange-600 ring-orange-100",
  },
  {
    title: "Weak Push Strategy",
    description:
      "Important alerts, offers, reminders, and updates do not reach users on time.",
    icon: Puzzle,
    tone: "bg-sky-50 text-sky-600 ring-sky-100",
  },
  {
    title: "No Retention Insights",
    description:
      "Owners cannot track active users, repeat actions, drop-offs, or app growth.",
    icon: BarChart3,
    tone: "bg-purple-50 text-purple-600 ring-purple-100",
  },
];

export default function MobileAppProblemsSection({
  data,
}: {
  data: IndustryMobileAppPageData;
}) {
  return (
    <section
      aria-label={`${data.industryName} mobile app problems we solve`}
      className="relative bg-white px-5 py-8 dark:bg-slate-950 sm:px-8 lg:px-10 xl:px-12"
    >
      <div className="rounded-xl border border-slate-200 bg-white px-4 pb-8 pt-4 shadow-[0_14px_40px_rgba(15,23,42,0.045)] dark:border-white/10 dark:bg-white/[0.035] sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          {/* <span className="grid h-9 w-9 place-items-center rounded-md bg-blue-50 text-sm font-black text-blue-600 shadow-inner ring-1 ring-blue-100 dark:bg-blue-400/10 dark:text-blue-300 dark:ring-blue-300/10">
            1
          </span>
          <p className="text-sm font-black text-slate-950 dark:text-white">
            App Problems We Solve
          </p> */}
        </div>

        <div className="mx-auto mt-5 max-w-2xl text-center">
          <h2 className="text-2xl font-black leading-tight tracking-[-0.025em] text-slate-950 dark:text-white sm:text-3xl">
            Mobile App Problems That Block
            <br className="hidden sm:block" />
            {" "}
            User Adoption & Growth
          </h2>

          <span className="mx-auto mt-3 block h-1.5 w-24 rounded-full bg-gradient-to-r from-blue-600 to-violet-600" />

          <p className="mx-auto mt-4 max-w-xl text-sm font-semibold leading-6 text-slate-600 dark:text-slate-300">
            We fix the app experience, workflow, notification, and admin-sync gaps
            that stop users from using your mobile app daily.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {mobileAppProblems.map((problem) => (
            <ProblemCard key={problem.title} problem={problem} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProblemCard({ problem }: { problem: ProblemItem }) {
  const Icon = problem.icon;

  return (
    <article className="group flex min-h-[190px] flex-col items-center justify-start rounded-xl border border-slate-200 bg-white px-5 py-6 text-center shadow-[0_14px_34px_rgba(15,23,42,0.055)] transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_20px_48px_rgba(37,99,235,0.10)] dark:border-white/10 dark:bg-slate-950/70">
      <span
        className={`relative mx-auto grid h-14 w-14 shrink-0 place-items-center rounded-full ring-1 ${problem.tone} dark:bg-white/10 dark:ring-white/10`}
      >
        <Icon className="h-6 w-6" aria-hidden="true" />
        <span className="absolute -right-1 top-2 h-2.5 w-2.5 rounded-full bg-current opacity-35" />
        <span className="absolute -left-1 bottom-3 h-1.5 w-1.5 rounded-full bg-current opacity-25" />
      </span>

      <h3 className="mt-4 min-h-[2.5rem] text-sm font-black leading-5 text-slate-950 dark:text-white">
        {problem.title}
      </h3>

      <p className="mt-2 max-w-[14.5rem] text-xs font-semibold leading-5 text-slate-600 dark:text-slate-300">
        {problem.description}
      </p>
    </article>
  );
}
