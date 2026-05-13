import type { ServiceItem } from "@/data/services";
import { AlertTriangle, ArrowRight, CheckCircle2 } from "lucide-react";

type ServiceProblemsProps = {
  service: ServiceItem;
};

export default function ServiceProblems({ service }: ServiceProblemsProps) {
  return (
    <section className="relative py-18 sm:py-22 lg:py-24">
      <div className="mx-auto w-full max-w-[min(92vw,1440px)] px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <div className="mb-10 grid gap-5 lg:grid-cols-[0.78fr_1fr] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-primary">Problems We Solve</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-(--text) sm:text-4xl md:text-5xl">
              Fix the friction that keeps {service.title.toLowerCase()} from creating value.
            </h2>
          </div>
          <p className="text-base leading-8 text-(--text-soft) md:text-lg">
            We turn vague technical blockers into clear delivery priorities, then build the systems, screens, and workflows needed to remove them.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {service.problems.map((problem, index) => (
            <article
              key={problem}
              className="group relative overflow-hidden rounded-[1.7rem] border border-(--border) bg-white/72 p-5 shadow-[0_20px_55px_rgba(15,23,42,0.08)] backdrop-blur-2xl transition duration-300 hover:-translate-y-1 dark:bg-white/5"
            >
              <div className={`absolute -right-12 -top-12 h-28 w-28 rounded-full bg-linear-to-br ${service.accent} opacity-10 blur-2xl`} />
              <div className="relative flex items-start justify-between gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-rose-200 bg-rose-50 text-rose-500 dark:border-rose-400/20 dark:bg-rose-400/10">
                  <AlertTriangle className="h-5 w-5" />
                </span>
                <span className="text-xs font-black uppercase tracking-[0.2em] text-(--text-soft)">
                  Pain {index + 1}
                </span>
              </div>
              <h3 className="relative mt-5 text-lg font-black leading-7 text-(--text)">{problem}</h3>
              <div className="relative mt-5 flex items-center gap-2 text-sm font-bold text-primary">
                <CheckCircle2 className="h-4 w-4" />
                Replaced with a clear system
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
