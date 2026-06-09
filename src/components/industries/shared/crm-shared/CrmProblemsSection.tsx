import {
  AlertTriangle,
  BarChart3,
  Clock,
  Database,
  FileText,
  Lightbulb,
  Users,
  Workflow,
} from "lucide-react";
import type { IndustryCrmPageData } from "./industryCrmData";

const fallbackProblems = [
  {
    title: "Missed Leads",
    description:
      "New inquiries slip through because teams lack one shared lead capture flow.",
    icon: AlertTriangle,
  },
  {
    title: "No Follow-ups",
    description:
      "Follow-up reminders depend on memory instead of automated task triggers.",
    icon: Clock,
  },
  {
    title: "Scattered Data",
    description:
      "Customer notes, calls and documents live across too many disconnected tools.",
    icon: Database,
  },
  {
    title: "No Accountability",
    description:
      "Managers cannot quickly see ownership, next actions or delayed opportunities.",
    icon: Users,
  },
  {
    title: "Poor Reporting",
    description:
      "Leadership lacks clean dashboards for pipeline, revenue and team performance.",
    icon: BarChart3,
  },
  {
    title: "Manual Work",
    description:
      "Repeated admin tasks slow teams down and leave too much room for errors.",
    icon: Workflow,
  },
];

const defaultCardIcons = [Users, FileText, BarChart3, AlertTriangle, Clock, Database];

export default function CrmProblemsSection({
  data,
}: {
  data: IndustryCrmPageData;
}) {
  const problems = [
    ...data.problems,
    ...fallbackProblems.filter(
      (fallback) =>
        !data.problems.some((problem) => problem.title === fallback.title),
    ),
  ].slice(0, 6);

  return (
    <section id="crm-problems" className="py-4">
      <div className="bg-white px-4 py-9 dark:bg-slate-950 sm:px-6 lg:px-10 xl:px-12">
        <div className="grid gap-9 lg:grid-cols-[0.72fr_1.28fr] lg:items-center xl:gap-12">
          <div className="lg:pl-2 xl:pl-4">
            <h2 className="max-w-lg text-[2.55rem] font-black leading-[1.12] tracking-[-0.045em] text-slate-950 dark:text-white sm:text-5xl lg:text-[2.95rem]">
              CRM Problems
              <span className="block">
                We Help You{" "}
                <span className="bg-gradient-to-r from-blue-500 to-sky-400 bg-clip-text text-transparent">
                  Solve
                </span>
              </span>
            </h2>

            <div className="mt-5 h-1 w-16 rounded-full bg-blue-500" />

            <p className="mt-7 max-w-md text-[15px] font-medium leading-7 text-slate-600 dark:text-slate-300">
              Outdated processes and scattered data are costing you leads, time
              and growth.
            </p>

            <div className="mt-8 flex max-w-lg items-center gap-4 rounded-xl bg-slate-50/90 px-4 py-4 shadow-[0_14px_40px_rgba(15,23,42,0.045)] dark:bg-white/[0.05]">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white text-blue-500 shadow-[0_10px_24px_rgba(15,23,42,0.07)] dark:bg-white/10">
                <Lightbulb className="h-6 w-6" aria-hidden="true" />
              </span>

              <p className="text-sm font-semibold leading-6 text-slate-700 dark:text-slate-200">
                Every card maps to a practical CRM workflow your team can
                actually use.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {problems.map((problem, index) => {
              const Icon = problem.icon ?? defaultCardIcons[index] ?? AlertTriangle;

              return (
                <article
                  key={problem.title}
                  className="group min-h-[220px] rounded-[1.45rem] bg-white p-6 shadow-[0_0_0_1px_rgba(226,232,240,0.9),0_16px_42px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_0_1px_rgba(191,219,254,0.95),0_22px_52px_rgba(37,99,235,0.08)] dark:bg-white/[0.045] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.1)]"
                >
                  <span className="grid h-13 w-13 place-items-center rounded-2xl bg-slate-50 text-blue-500 shadow-[inset_0_0_0_1px_rgba(226,232,240,0.9)] transition group-hover:bg-blue-50 group-hover:text-blue-600 dark:bg-white/10 dark:text-blue-300 dark:shadow-none">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>

                  <h3 className="mt-7 max-w-[15rem] text-lg font-black leading-snug tracking-[-0.025em] text-slate-950 dark:text-white">
                    {problem.title}
                  </h3>

                  <div className="mt-4 h-0.5 w-9 rounded-full bg-blue-500" />

                  <p className="mt-4 text-[14px] font-medium leading-6 text-slate-600 dark:text-slate-300">
                    {problem.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}