import { ShieldCheck } from "lucide-react";
import type { IndustryCrmPageData } from "./industryCrmData";

export default function CrmRolesSection({ data }: { data: IndustryCrmPageData }) {
  const roles = data.roles.slice(0, 5);

  return (
    <section id="crm-roles" className="py-6">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_22px_70px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-white/[0.04] sm:p-7 lg:p-9">
        <div className="grid gap-8 lg:grid-cols-[0.68fr_1.32fr] lg:items-start">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-violet-50 px-3 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-violet-700 dark:bg-violet-400/10 dark:text-violet-200">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-violet-600 text-white">05</span>
              Role Experience
            </span>
            <h2 className="mt-5 text-3xl font-black tracking-[-0.035em] text-slate-950 dark:text-white sm:text-4xl">
              One CRM. Different Experience for Every Role.
            </h2>
            <p className="mt-4 max-w-xl text-sm font-semibold leading-7 text-slate-600 dark:text-slate-300">
              Role-based dashboards and permissions ensure every team member sees what matters most.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
            {roles.map((role, index) => {
              const Icon = role.icon;

              return (
                <article
                  key={role.title}
                  className="rounded-[1.35rem] border border-slate-200 bg-slate-50/70 p-4 shadow-sm transition hover:-translate-y-1 hover:border-violet-200 hover:bg-white hover:shadow-[0_18px_48px_rgba(79,70,229,0.1)] dark:border-white/10 dark:bg-white/[0.05]"
                >
                  <div className="flex items-center gap-3 xl:block">
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-gradient-to-br from-violet-600 to-blue-600 text-white shadow-[0_14px_32px_rgba(79,70,229,0.18)]">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-[11px] font-black uppercase tracking-[0.12em] text-slate-400 xl:mt-4">
                        Role {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-1 text-base font-black leading-5 text-slate-950 dark:text-white">{role.title}</h3>
                    </div>
                  </div>
                  <p className="mt-3 text-xs font-semibold leading-5 text-slate-600 dark:text-slate-300">{role.description}</p>
                  <div className="mt-4 space-y-2">
                    {role.permissions.slice(0, 2).map((permission) => (
                      <div
                        key={permission}
                        className="flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-[11px] font-bold text-slate-600 shadow-sm dark:bg-white/10 dark:text-slate-300"
                      >
                        <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-violet-600 dark:text-violet-200" aria-hidden="true" />
                        <span>{permission}</span>
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
