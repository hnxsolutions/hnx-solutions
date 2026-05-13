  import type { ServiceItem } from "@/data/services";
  import { ArrowUpRight, Building2, CheckCircle2 } from "lucide-react";

  type ServiceUseCasesProps = {
    service: ServiceItem;
  };

  export default function ServiceUseCases({ service }: ServiceUseCasesProps) {
    return (
      <section className="relative py-18 sm:py-22 lg:py-24">
        <div className="mx-auto w-full max-w-[min(92vw,1440px)] px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
          <div className="mb-10 grid gap-5 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-primary">Use Cases</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-(--text) sm:text-4xl md:text-5xl">
                Real business situations where this service fits naturally.
              </h2>
            </div>
            <div className="rounded-[1.6rem] border border-(--border) bg-white/72 p-5 shadow-[0_20px_55px_rgba(15,23,42,0.08)] backdrop-blur-2xl dark:bg-white/5">
              <div className="flex items-center gap-3">
                <span className={`grid h-11 w-11 place-items-center rounded-2xl bg-linear-to-br ${service.accent} text-white`}>
                  <CheckCircle2 className="h-5 w-5" />
                </span>
                <p className="text-sm font-bold leading-6 text-(--text-soft)">{service.bestFor}</p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {service.useCases.map((useCase, index) => (
              <article
                key={useCase}
                className="group relative overflow-hidden rounded-[1.7rem] border border-(--border) bg-white/72 p-5 shadow-[0_20px_55px_rgba(15,23,42,0.08)] backdrop-blur-2xl transition duration-300 hover:-translate-y-1 dark:bg-white/5"
              >
                <div className={`absolute inset-x-0 top-0 h-1 bg-linear-to-r ${service.accent}`} />
                <div className="flex items-center justify-between gap-4">
                  <span className={`grid h-12 w-12 place-items-center rounded-2xl bg-linear-to-br ${service.accent} text-white`}>
                    <Building2 className="h-5 w-5" />
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-(--text-soft) transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary" />
                </div>
                <p className="mt-5 text-xs font-black uppercase tracking-[0.18em] text-primary">
                  Use case {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-xl font-black leading-7 text-(--text)">{useCase}</h3>
                <p className="mt-3 text-sm leading-6 text-(--text-soft)">
                  Can combine strategy, UI, backend, automation, integrations, and launch support depending on scope.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }
