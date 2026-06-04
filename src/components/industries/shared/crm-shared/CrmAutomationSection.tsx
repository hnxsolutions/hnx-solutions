import { Workflow } from "lucide-react";
import type { IndustryCrmPageData } from "./industryCrmData";

export default function CrmAutomationSection({ data }: { data: IndustryCrmPageData }) {
  return (
    <section className="border-t border-slate-200 bg-slate-50/70 px-6 py-12 dark:border-white/10 dark:bg-white/[0.02] sm:px-8 lg:px-12">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-700 dark:text-blue-300">
          Automation & Follow-up Engine
        </p>
        <h2 className="mt-3 text-3xl font-black tracking-[-0.03em] text-slate-950 dark:text-white sm:text-4xl">
          Automate the follow-ups teams usually forget
        </h2>
      </div>

      <div className="mt-9 grid gap-5 lg:grid-cols-3">
        {data.automations.map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.title}
              className="rounded-[1.45rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.05]"
            >
              <div className="flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-blue-50 text-blue-700 dark:bg-blue-400/10 dark:text-blue-300">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-lg font-black text-slate-950 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="mt-5 grid gap-3">
                <FlowRow label="Trigger" value={item.trigger} />
                <FlowRow label="Action" value={item.action} />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function FlowRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 dark:bg-white/10">
      <Workflow className="mt-0.5 h-4 w-4 shrink-0 text-blue-600 dark:text-blue-300" />
      <div>
        <p className="text-[10px] font-black uppercase tracking-[0.14em] text-slate-400">
          {label}
        </p>
        <p className="mt-1 text-sm font-bold leading-6 text-slate-700 dark:text-slate-200">
          {value}
        </p>
      </div>
    </div>
  );
}

