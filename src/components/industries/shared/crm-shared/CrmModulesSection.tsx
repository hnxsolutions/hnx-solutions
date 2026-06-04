import type { IndustryCrmPageData } from "./industryCrmData";

export default function CrmModulesSection({ data }: { data: IndustryCrmPageData }) {
  return (
    <section className="border-t border-slate-200 bg-gradient-to-b from-white to-blue-50/40 px-6 py-12 dark:border-white/10 dark:from-white/[0.03] dark:to-white/[0.02] sm:px-8 lg:px-12">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-700 dark:text-blue-300">
          Key CRM Modules
        </p>
        <h2 className="mt-3 text-3xl font-black tracking-[-0.03em] text-slate-950 dark:text-white sm:text-4xl">
          Modules built around {data.industryName.toLowerCase()} operations
        </h2>
      </div>

      <div className="mt-9 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {data.modules.map((module) => {
          const Icon = module.icon;

          return (
            <article
              key={module.title}
              className="rounded-[1.45rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 dark:border-white/10 dark:bg-white/[0.05]"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-blue-700 dark:bg-blue-400/10 dark:text-blue-300">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-base font-black text-slate-950 dark:text-white">
                {module.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {module.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {module.features.map((feature) => (
                  <span
                    key={feature}
                    className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-bold text-slate-600 dark:bg-white/10 dark:text-slate-300"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

