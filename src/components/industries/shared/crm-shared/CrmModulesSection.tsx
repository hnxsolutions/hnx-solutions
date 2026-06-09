import { BarChart3, Bot, Boxes, ShieldCheck, Workflow } from "lucide-react";
import type { IndustryCrmPageData } from "./industryCrmData";

const fallbackModules = [
  {
    title: "Workflow Automation",
    description: "Automate follow-ups, assignments, approvals and task creation.",
    icon: Workflow,
    features: ["Trigger rules", "Auto tasks", "Follow-up flows"],
  },
  {
    title: "Reports & Dashboards",
    description: "Track pipeline, revenue, conversion and team performance.",
    icon: BarChart3,
    features: ["Live metrics", "Custom charts", "Export reports"],
  },
  {
    title: "Role Permissions",
    description: "Give each team member the right level of CRM access.",
    icon: ShieldCheck,
    features: ["Admin roles", "View-only users", "Secure access"],
  },
  {
    title: "AI Assistant",
    description: "Get lead insights, next-best actions and smart summaries.",
    icon: Bot,
    features: ["Lead scoring", "Smart notes", "Action prompts"],
  },
];

export default function CrmModulesSection({ data }: { data: IndustryCrmPageData }) {
  const modules = [
    ...data.modules,
    ...fallbackModules.filter(
      (fallback) => !data.modules.some((module) => module.title === fallback.title),
    ),
  ].slice(0, 10);

  return (
    <section id="crm-modules" className="py-6">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_22px_70px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-white/[0.04] sm:p-7 lg:p-9">
        <div className="grid gap-8 lg:grid-cols-[0.68fr_1.32fr] lg:items-start">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-violet-50 px-3 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-violet-700 dark:bg-violet-400/10 dark:text-violet-200">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-violet-600 text-white">04</span>
              CRM Modules
            </span>
            <h2 className="mt-5 text-3xl font-black tracking-[-0.035em] text-slate-950 dark:text-white sm:text-4xl">
              Everything You Need in One CRM
            </h2>
            <p className="mt-4 max-w-xl text-sm font-semibold leading-7 text-slate-600 dark:text-slate-300">
              Powerful modules designed to automate your sales, service and customer relationships.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-5">
            {modules.map((module, index) => {
              const Icon = module.icon ?? Boxes;

              return (
                <article
                  key={module.title}
                  className="rounded-[1.25rem] border border-slate-200 bg-slate-50/70 p-4 shadow-sm transition hover:-translate-y-1 hover:border-violet-200 hover:bg-white hover:shadow-[0_18px_48px_rgba(79,70,229,0.1)] dark:border-white/10 dark:bg-white/[0.05]"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-blue-700 shadow-sm dark:bg-white/10 dark:text-blue-200">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-sm font-black leading-5 text-slate-950 dark:text-white">{module.title}</h3>
                  <p className="mt-3 text-[11px] font-black uppercase tracking-[0.12em] text-slate-400">
                    Module {String(index + 1).padStart(2, "0")}
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
