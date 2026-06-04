import type { IndustryCrmPageData } from "./industryCrmData";

export default function CrmReportsSection({ data }: { data: IndustryCrmPageData }) {
  return (
    <section className="border-t border-slate-200 px-6 py-12 dark:border-white/10 sm:px-8 lg:px-12">
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-700 dark:text-blue-300">
            Reports & Analytics
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-[-0.03em] text-slate-950 dark:text-white sm:text-4xl">
            Reports built for daily decisions
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
            The CRM should show what needs attention now, not just store records.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {data.reports.map((report) => {
            const Icon = report.icon;

            return (
              <article
                key={report.title}
                className="rounded-[1.35rem] border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.05]"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-50 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300">
                  <Icon className="h-5 w-5" />
                </span>
                <p className="mt-5 text-3xl font-black text-slate-950 dark:text-white">
                  {report.metric}
                </p>
                <h3 className="mt-2 text-base font-black text-slate-950 dark:text-white">
                  {report.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {report.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

