import type { ServiceItem } from "@/data/services";
import {
  Boxes,
  Code2,
  LayoutDashboard,
  Layers3,
  Network,
  Rocket,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

type ServiceWhatWeBuildProps = {
  service: ServiceItem;
};

const moduleIcons: LucideIcon[] = [
  LayoutDashboard,
  Layers3,
  Network,
  Code2,
  Boxes,
  ShieldCheck,
  Sparkles,
  Rocket,
];

const moduleTone: Record<ServiceItem["visualType"], string> = {
  website: "Conversion-ready, responsive, and search-aware.",
  saas: "Structured for product growth and repeatable user workflows.",
  mobile: "Designed for smooth app journeys and backend-connected actions.",
  crm: "Built around ownership, pipeline visibility, and team accountability.",
  ai: "Connected to business data with practical human review points.",
  workflow: "Mapped from real triggers, conditions, actions, and alerts.",
  api: "Documented, secure, and ready for connected products.",
  integration: "Keeps data moving between the tools your team already uses.",
  devops: "Turns release work into a repeatable production process.",
  cloud: "Creates a reliable foundation for hosting, storage, and scaling.",
  support: "Keeps live systems measurable, maintained, and improving.",
  security: "Adds stronger controls where users, data, and APIs meet.",
  design: "Gives teams polished screens and reusable design direction.",
  landing: "Built to convert campaign traffic into measurable leads.",
  seo: "Improves visibility, tracking, and decision-making data.",
  brand: "Creates a consistent visual system across digital channels.",
};

export default function ServiceWhatWeBuild({ service }: ServiceWhatWeBuildProps) {
  return (
    <section className="relative py-18 sm:py-22 lg:py-24">
      <div className="mx-auto w-full max-w-[min(92vw,1440px)] px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-primary">What We Build</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-(--text) sm:text-4xl md:text-5xl">
              Service modules that make the offer feel complete, not generic.
            </h2>
          </div>
          <div className={`max-w-sm rounded-[1.5rem] bg-linear-to-br ${service.accent} p-5 text-sm font-bold leading-6 text-white shadow-[0_20px_55px_rgba(37,99,235,0.18)]`}>
            {moduleTone[service.visualType]}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {service.whatWeBuild.map((item, index) => {
            const Icon = moduleIcons[index % moduleIcons.length];
            return (
              <article
                key={item}
                className="group relative overflow-hidden rounded-[1.7rem] border border-(--border) bg-white/72 p-5 shadow-[0_20px_55px_rgba(15,23,42,0.08)] backdrop-blur-2xl transition duration-300 hover:-translate-y-1 dark:bg-white/5"
              >
                <div className={`absolute inset-x-0 bottom-0 h-1 bg-linear-to-r ${service.accent} opacity-80`} />
                <span className={`grid h-12 w-12 place-items-center rounded-2xl bg-linear-to-br ${service.accent} text-white shadow-[0_14px_34px_rgba(37,99,235,0.18)]`}>
                  <Icon className="h-5 w-5" />
                </span>
                <p className="mt-5 text-xs font-black uppercase tracking-[0.18em] text-primary">
                  Module {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-xl font-black text-(--text)">{item}</h3>
                <p className="mt-3 text-sm leading-6 text-(--text-soft)">
                  Scoped around your workflow, users, data, and launch priorities so it works as part of a real business system.
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
