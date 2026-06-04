import type { IndustryCrmPageData } from "./industryCrmData";

export default function CrmUseCasesSection({ data }: { data: IndustryCrmPageData }) {
  return (
    <section className="border-t border-slate-200 px-6 py-12 dark:border-white/10 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-700 dark:text-blue-300">
          Industry Use Cases
        </p>
        <h2 className="mt-3 text-3xl font-black tracking-[-0.03em] text-slate-950 dark:text-white sm:text-4xl">
          Practical CRM use cases for {data.industryName.toLowerCase()}
        </h2>
      </div>

      <div className="mt-9 grid gap-5 md:grid-cols-3">
        {data.useCases.map((useCase) => {
          const Icon = useCase.icon;

          return (
            <article
              key={useCase.title}
              className="rounded-[1.45rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 dark:border-white/10 dark:bg-white/[0.05]"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-50 text-cyan-700 dark:bg-cyan-400/10 dark:text-cyan-300">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-black text-slate-950 dark:text-white">
                {useCase.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {useCase.description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

