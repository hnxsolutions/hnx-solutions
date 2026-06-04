import { ArrowRight } from "lucide-react";
import type { IndustryCrmPageData } from "./industryCrmData";

export default function CrmIntegrationSection({
  data,
}: {
  data: IndustryCrmPageData;
}) {
  return (
    <section className="border-t border-slate-200 bg-gradient-to-b from-white to-blue-50/40 px-6 py-12 dark:border-white/10 dark:from-white/[0.03] dark:to-white/[0.02] sm:px-8 lg:px-12">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-700 dark:text-blue-300">
          Website + Mobile App + CRM Integration
        </p>
        <h2 className="mt-3 text-3xl font-black tracking-[-0.03em] text-slate-950 dark:text-white sm:text-4xl">
          Connect every digital touchpoint to one CRM
        </h2>
        <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
          Website forms, mobile app actions, portals, payments and support workflows can feed the same operating layer.
        </p>
      </div>

      <div className="mt-9 grid gap-5 md:grid-cols-3">
        {data.integrations.map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.title}
              className="rounded-[1.45rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.05]"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-blue-700 dark:bg-blue-400/10 dark:text-blue-300">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-black text-slate-950 dark:text-white">
                {item.title}
              </h3>
              <div className="mt-3 flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-xs font-black text-slate-600 dark:bg-white/10 dark:text-slate-300">
                {item.flow}
                <ArrowRight className="h-3.5 w-3.5" />
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {item.description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

