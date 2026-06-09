import Link from "next/link";
import { ArrowRight, CheckCircle2, Layers, Rocket, Sparkles, Workflow } from "lucide-react";
import type { IndustryCrmPageData } from "./industryCrmData";

const packages = [
  {
    title: "CRM MVP",
    badge: "2-4 Weeks",
    description: "Essential modules to get your operations started.",
    icon: Rocket,
    features: ["Core modules", "Basic dashboard", "Lead workflow"],
  },
  {
    title: "Growth CRM",
    badge: "4-8 Weeks",
    description: "Advanced features, automations and custom reports.",
    icon: Workflow,
    features: ["Automations", "Reports", "Team roles"],
  },
  {
    title: "Advanced CRM",
    badge: "8-12 Weeks",
    description: "AI, portals, advanced workflows and deeper integrations.",
    icon: Sparkles,
    features: ["AI assistant", "Portals", "Integrations"],
  },
  {
    title: "Custom Pricing",
    badge: "Flexible",
    description: "Based on modules, workflow complexity and team size.",
    icon: Layers,
    features: ["Custom scope", "Phased build", "Scale-ready"],
  },
];

export default function CrmTimelinePackagesSection({ data }: { data: IndustryCrmPageData }) {
  return (
    <section id="crm-timeline-packages" className="py-6">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_22px_70px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-white/[0.04] sm:p-7 lg:p-9">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-violet-50 px-3 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-violet-700 dark:bg-violet-400/10 dark:text-violet-200">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-violet-600 text-white">10</span>
              Timeline / Packages
            </span>
            <h2 className="mt-5 text-3xl font-black tracking-[-0.035em] text-slate-950 dark:text-white sm:text-4xl">
              Start Small. Scale When You Need.
            </h2>
            <p className="mt-4 max-w-xl text-sm font-semibold leading-7 text-slate-600 dark:text-slate-300">
              Flexible CRM development models that grow with your business.
            </p>
            <p className="mt-5 rounded-2xl border border-violet-100 bg-violet-50/70 p-4 text-xs font-bold leading-6 text-violet-800 dark:border-violet-300/15 dark:bg-violet-400/10 dark:text-violet-100">
              Pricing depends on modules, users and workflow complexity.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {packages.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="rounded-[1.45rem] border border-slate-200 bg-slate-50/70 p-5 shadow-sm transition hover:-translate-y-1 hover:border-violet-200 hover:bg-white hover:shadow-[0_18px_48px_rgba(79,70,229,0.1)] dark:border-white/10 dark:bg-white/[0.05]">
                  <span className="inline-flex rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.12em] text-white">
                    {item.badge}
                  </span>
                  <span className="mt-5 grid h-12 w-12 place-items-center rounded-2xl bg-white text-violet-700 shadow-sm dark:bg-white/10 dark:text-violet-200">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-xl font-black tracking-[-0.02em] text-slate-950 dark:text-white">{item.title}</h3>
                  <p className="mt-2 text-sm font-semibold leading-6 text-slate-600 dark:text-slate-300">{item.description}</p>
                  <div className="mt-5 space-y-2">
                    {item.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-xs font-bold text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Link
                    href={data.finalCta.primaryHref}
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-violet-100 bg-white px-4 py-3 text-sm font-black text-violet-700 transition hover:bg-violet-50 dark:border-white/10 dark:bg-white/10 dark:text-violet-100"
                  >
                    Custom Quote
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
