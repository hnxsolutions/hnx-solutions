import { CheckCircle2, Rocket } from "lucide-react";
import type { IndustryCrmPageData } from "./industryCrmData";

const fallbackProcessSteps = [
  { title: "Discovery & Planning", description: "We understand your business and goals." },
  { title: "CRM Blueprint", description: "We design the right workflow and modules." },
  { title: "Design & Development", description: "We build your CRM with clean and scalable code." },
  { title: "Testing & Data Setup", description: "We test everything and migrate your data." },
  { title: "Launch & Training", description: "Go live with training for your team." },
  { title: "Support & Growth", description: "We support and improve as you grow." },
];

export default function CrmProcessSection({ data }: { data: IndustryCrmPageData }) {
  const steps = fallbackProcessSteps.map((step, index) => data.processSteps[index] ?? step);

  return (
    <section id="crm-process" className="py-6">
      <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_22px_70px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-white/[0.04] sm:p-7 lg:p-9">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-violet-50 px-3 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-violet-700 dark:bg-violet-400/10 dark:text-violet-200">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-violet-600 text-white">09</span>
            Implementation Process
          </span>
          <h2 className="mt-5 text-3xl font-black tracking-[-0.035em] text-slate-950 dark:text-white sm:text-4xl">
            Our Proven CRM Implementation Process
          </h2>
          <p className="mt-3 text-sm font-semibold leading-7 text-slate-600 dark:text-slate-300">
            A simple, transparent and proven process to build your perfect CRM.
          </p>
        </div>

        <div className="no-scrollbar relative mt-9 flex gap-4 overflow-x-auto pb-3 xl:grid xl:grid-cols-6 xl:overflow-visible xl:pb-0">
          <div className="absolute left-12 right-12 top-10 hidden h-px bg-gradient-to-r from-violet-100 via-violet-300 to-blue-200 xl:block" />
          {steps.map((step, index) => (
            <article key={`${step.title}-${index}`} className="relative z-10 min-w-[13rem] rounded-[1.45rem] border border-slate-200 bg-slate-50/80 p-4 shadow-sm dark:border-white/10 dark:bg-white/[0.05] xl:min-w-0">
              <span className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-violet-600 to-blue-600 text-white shadow-[0_16px_35px_rgba(79,70,229,0.2)]">
                {index === steps.length - 1 ? <Rocket className="h-6 w-6" aria-hidden="true" /> : <CheckCircle2 className="h-6 w-6" aria-hidden="true" />}
              </span>
              <p className="mt-5 text-[11px] font-black uppercase tracking-[0.14em] text-violet-600 dark:text-violet-200">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-1 text-base font-black leading-5 text-slate-950 dark:text-white">{step.title}</h3>
              <p className="mt-2 text-xs font-semibold leading-5 text-slate-600 dark:text-slate-300 sm:text-sm">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
