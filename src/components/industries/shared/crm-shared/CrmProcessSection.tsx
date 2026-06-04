import { CheckCircle2 } from "lucide-react";
import type { IndustryCrmPageData } from "./industryCrmData";

export default function CrmProcessSection({ data }: { data: IndustryCrmPageData }) {
  return (
    <section className="border-t border-slate-200 bg-slate-50/70 px-6 py-12 dark:border-white/10 dark:bg-white/[0.02] sm:px-8 lg:px-12">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-700 dark:text-blue-300">
            Implementation Process
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-[-0.03em] text-slate-950 dark:text-white sm:text-4xl">
            Build safely, then roll out with clarity
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
            Start with workflow clarity, then move through architecture, build, testing and adoption support.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {data.processSteps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-[1.35rem] border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.05]"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-black text-blue-700 dark:bg-blue-400/10 dark:text-blue-300">
                <CheckCircle2 className="h-4 w-4" />
                Step {index + 1}
              </span>
              <h3 className="mt-5 text-lg font-black text-slate-950 dark:text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

