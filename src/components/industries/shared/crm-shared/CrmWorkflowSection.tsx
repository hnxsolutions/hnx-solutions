import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { IndustryCrmPageData } from "./industryCrmData";

const fallbackWorkflowSteps = [
  {
    title: "Lead Captured",
    description: "Every inquiry is collected from website, phone, WhatsApp or campaign forms.",
    owner: "Marketing",
    icon: CheckCircle2,
  },
  {
    title: "Lead Qualified",
    description: "The CRM scores, tags and assigns the right opportunity to the right teammate.",
    owner: "Sales",
    icon: CheckCircle2,
  },
  {
    title: "Follow-up Automated",
    description: "Tasks, reminders and message templates keep every conversation moving.",
    owner: "Sales Ops",
    icon: CheckCircle2,
  },
  {
    title: "Deal Tracked",
    description: "Pipeline stages show exactly what is pending, won, delayed or at risk.",
    owner: "Manager",
    icon: CheckCircle2,
  },
  {
    title: "Customer Served",
    description: "Support and service teams get full context after the deal is closed.",
    owner: "Support",
    icon: CheckCircle2,
  },
  {
    title: "Growth Reported",
    description: "Dashboards reveal conversion, revenue and team performance trends.",
    owner: "Leadership",
    icon: CheckCircle2,
  },
];

export default function CrmWorkflowSection({ data }: { data: IndustryCrmPageData }) {
  const steps = [
    ...data.workflowSteps,
    ...fallbackWorkflowSteps.slice(data.workflowSteps.length),
  ].slice(0, 6);

  return (
    <section id="crm-workflow" className="py-6">
      <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_22px_70px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-white/[0.04] sm:p-7 lg:p-9">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-violet-50 px-3 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-violet-700 dark:bg-violet-400/10 dark:text-violet-200">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-violet-600 text-white">03</span>
              Workflow Journey
            </span>
            <h2 className="mt-5 text-3xl font-black tracking-[-0.035em] text-slate-950 dark:text-white sm:text-4xl">
              From Inquiry to Loyal Customer
            </h2>
            <p className="mt-3 max-w-3xl text-sm font-semibold leading-7 text-slate-600 dark:text-slate-300">
              A complete workflow that helps you capture, nurture and convert more customers - all in one place.
            </p>
          </div>
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 text-xs font-black text-emerald-700 dark:border-emerald-300/15 dark:bg-emerald-400/10 dark:text-emerald-200">
            <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
            End-to-end flow
          </span>
        </div>

        <div className="no-scrollbar mt-9 flex gap-4 overflow-x-auto pb-3 xl:grid xl:grid-cols-6 xl:overflow-visible xl:pb-0">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={step.title} className="relative flex min-w-[13.25rem] flex-1 items-stretch xl:min-w-0">
                <article className="relative z-10 flex w-full flex-col rounded-[1.45rem] border border-slate-200 bg-slate-50/70 p-4 shadow-sm dark:border-white/10 dark:bg-white/[0.05]">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-violet-600 to-blue-600 text-white shadow-[0_16px_35px_rgba(79,70,229,0.22)]">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <p className="mt-5 text-[11px] font-black uppercase tracking-[0.14em] text-violet-600 dark:text-violet-200">
                    Step {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-1 text-base font-black text-slate-950 dark:text-white">{step.title}</h3>
                  <p className="mt-2 text-xs font-semibold leading-5 text-slate-600 dark:text-slate-300 sm:text-sm">{step.description}</p>
                  <span className="mt-auto pt-4 text-[11px] font-black uppercase tracking-[0.12em] text-slate-400">{step.owner}</span>
                </article>

                {index < steps.length - 1 ? (
                  <span className="mx-1 hidden items-center text-violet-300 xl:flex">
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </span>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
