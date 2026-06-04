import type { IndustryCrmPageData } from "./industryCrmData";

export default function CrmWorkflowSection({ data }: { data: IndustryCrmPageData }) {
  return (
    <section className="border-t border-slate-200 px-6 py-12 dark:border-white/10 sm:px-8 lg:px-12">
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-700 dark:text-blue-300">
            CRM Workflow Journey
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-[-0.03em] text-slate-950 dark:text-white sm:text-4xl">
            From enquiry to decision-ready reporting
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
            The CRM flow keeps leads, ownership, follow-ups, documents, tasks and reporting connected across the full journey.
          </p>
        </div>

        <div className="grid gap-4">
          {data.workflowSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <article
                key={step.title}
                className="grid gap-4 rounded-[1.35rem] border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.05] sm:grid-cols-[auto_1fr_auto] sm:items-center"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-blue-700 dark:bg-blue-400/10 dark:text-blue-300">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-400">
                    Step {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-1 text-lg font-black text-slate-950 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {step.description}
                  </p>
                </div>
                <span className="w-fit rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-600 dark:bg-white/10 dark:text-slate-300">
                  {step.owner}
                </span>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

