import type { IndustryCrmPageData } from "./industryCrmData";

export default function CrmProblemsSection({ data }: { data: IndustryCrmPageData }) {
  return (
    <section className="border-t border-slate-200 bg-slate-50/70 px-6 py-12 dark:border-white/10 dark:bg-white/[0.02] sm:px-8 lg:px-12">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-700 dark:text-blue-300">
          CRM Pain Points
        </p>
        <h2 className="mt-3 text-3xl font-black tracking-[-0.03em] text-slate-950 dark:text-white sm:text-4xl">
          Where {data.industryName.toLowerCase()} teams lose visibility
        </h2>
        <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
          These are the workflow gaps the CRM page is designed to solve before they become daily bottlenecks.
        </p>
      </div>

      <div className="mt-9 grid gap-5 md:grid-cols-3">
        {data.problems.map((problem) => {
          const Icon = problem.icon;

          return (
            <article
              key={problem.title}
              className="rounded-[1.45rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 dark:border-white/10 dark:bg-white/[0.05]"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-red-50 text-red-600 dark:bg-red-400/10 dark:text-red-300">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-black text-slate-950 dark:text-white">
                {problem.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {problem.description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

