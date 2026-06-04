import { ShieldCheck } from "lucide-react";
import type { IndustryCrmPageData } from "./industryCrmData";

export default function CrmRolesSection({ data }: { data: IndustryCrmPageData }) {
  return (
    <section className="border-t border-slate-200 px-6 py-12 dark:border-white/10 sm:px-8 lg:px-12">
      <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-700 dark:text-blue-300">
            Role-Based Dashboards
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-[-0.03em] text-slate-950 dark:text-white sm:text-4xl">
            Every team sees only what they need
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
            Role-based access keeps the CRM focused, controlled and easier for daily adoption.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {data.roles.map((role) => {
            const Icon = role.icon;

            return (
              <article
                key={role.title}
                className="rounded-[1.35rem] border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.05]"
              >
                <div className="flex items-start gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-cyan-50 text-cyan-700 dark:bg-cyan-400/10 dark:text-cyan-300">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-base font-black text-slate-950 dark:text-white">
                      {role.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
                      {role.description}
                    </p>
                  </div>
                </div>
                <div className="mt-4 grid gap-2">
                  {role.permissions.map((permission) => (
                    <div
                      key={permission}
                      className="flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2 text-xs font-bold text-slate-600 dark:bg-white/10 dark:text-slate-300"
                    >
                      <ShieldCheck className="h-3.5 w-3.5 text-cyan-600 dark:text-cyan-300" />
                      {permission}
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

