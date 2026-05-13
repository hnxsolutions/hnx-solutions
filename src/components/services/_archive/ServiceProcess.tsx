import type { ServiceItem } from "@/data/services";
import { CheckCircle2 } from "lucide-react";

type ServiceProcessProps = {
  service: ServiceItem;
};

export default function ServiceProcess({ service }: ServiceProcessProps) {
  return (
    <section className="relative py-18 sm:py-22 lg:py-24">
      <div className="mx-auto w-full max-w-[min(92vw,1440px)] px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-primary">Process</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-(--text) sm:text-4xl md:text-5xl">
            A polished delivery path from idea to launch.
          </h2>
          <p className="mt-4 text-base leading-8 text-(--text-soft) md:text-lg">
            The work stays structured so design, architecture, build quality, testing, launch, and support are visible throughout the project.
          </p>
        </div>

        <div className="relative">
          <div className={`pointer-events-none absolute left-6 top-8 hidden h-[calc(100%-4rem)] w-px bg-linear-to-b ${service.accent} opacity-40 lg:block`} />
          <div className="grid gap-4 lg:grid-cols-7">
            {service.process.map((step, index) => (
              <article
                key={`${step}-${index}`}
                className="relative rounded-[1.6rem] border border-(--border) bg-white/74 p-5 shadow-[0_20px_55px_rgba(15,23,42,0.08)] backdrop-blur-2xl dark:bg-white/5"
              >
                <span className={`grid h-12 w-12 place-items-center rounded-2xl bg-linear-to-br ${service.accent} text-sm font-black text-white shadow-[0_14px_34px_rgba(37,99,235,0.18)]`}>
                  {index + 1}
                </span>
                <h3 className="mt-5 text-lg font-black text-(--text)">{step}</h3>
                <p className="mt-3 text-sm leading-6 text-(--text-soft)">
                  Clear decisions, visible outputs, and practical checkpoints before the next stage starts.
                </p>
                <div className="mt-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-emerald-500">
                  <CheckCircle2 className="h-4 w-4" />
                  Checkpoint
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
