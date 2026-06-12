import { Boxes } from "lucide-react";
import CrmReveal from "./CrmReveal";
import {
  crmClass,
  crmLineGrowX,
  crmRevealCard,
  crmRevealHeading,
  crmRevealScale,
} from "./crmAnimationUtils";
import type { IndustryCrmPageData } from "./industryCrmData";

const palette = [
  {
    ring: "from-violet-500/18 to-purple-500/5",
    icon: "text-violet-700",
    border: "border-violet-200",
    badge: "bg-violet-50 text-violet-700 border-violet-100",
  },
  {
    ring: "from-blue-500/18 to-sky-500/5",
    icon: "text-blue-700",
    border: "border-blue-200",
    badge: "bg-blue-50 text-blue-700 border-blue-100",
  },
  {
    ring: "from-cyan-500/18 to-teal-500/5",
    icon: "text-cyan-700",
    border: "border-cyan-200",
    badge: "bg-cyan-50 text-cyan-700 border-cyan-100",
  },
  {
    ring: "from-orange-500/18 to-amber-500/5",
    icon: "text-orange-700",
    border: "border-orange-200",
    badge: "bg-orange-50 text-orange-700 border-orange-100",
  },
  {
    ring: "from-emerald-500/18 to-green-500/5",
    icon: "text-emerald-700",
    border: "border-emerald-200",
    badge: "bg-emerald-50 text-emerald-700 border-emerald-100",
  },
];

function normalizeCategory(module: { features?: string[]; title: string }) {
  const firstFeature = module.features?.[0];

  if (firstFeature) return firstFeature;

  if (/report|dashboard|analytics|performance/i.test(module.title)) return "Analytics";
  if (/payment|fee|invoice|finance|dues|collection/i.test(module.title)) return "Finance";
  if (/workflow|automation|assign|reminder/i.test(module.title)) return "Automation";
  if (/document|file|certificate/i.test(module.title)) return "Documents";
  if (/message|email|whatsapp|communication/i.test(module.title)) return "Communication";
  if (/task|follow/i.test(module.title)) return "Tasks";
  if (/portal/i.test(module.title)) return "Portal";
  if (/record|profile/i.test(module.title)) return "Records";
  if (/schedule|appointment|calendar/i.test(module.title)) return "Scheduling";
  if (/support|request|ticket|complaint/i.test(module.title)) return "Support";

  return "Core";
}

function chunkArray<T>(items: T[], size: number) {
  const chunks: T[][] = [];

  for (let index = 0; index < items.length; index += size) {
    chunks.push(items.slice(index, index + size));
  }

  return chunks;
}

export default function CrmModulesSection({ data }: { data: IndustryCrmPageData }) {
  const modules = data.modules;
  const modulePages = chunkArray(modules, 10);
  const totalModules = modules.length;
  const pageCount = modulePages.length;

  const carouselCss = modulePages
    .map(
      (_, index) => `
        #crm-modules-page-${index}:checked ~ .crm-modules-carousel .crm-modules-panel-${index} {
          display: grid;
        }

        #crm-modules-page-${index}:checked ~ .crm-modules-mobile-controls .crm-modules-mobile-control-${index} {
          display: flex;
        }

        #crm-modules-page-${index}:checked ~ .crm-modules-footer .crm-modules-dots label[for="crm-modules-page-${index}"] {
          transform: scale(1.25);
          background: rgb(124 58 237);
        }
      `,
    )
    .join("\n");

  return (
    <section id="crm-modules" className="py-4">
      <style>
        {`
          .crm-modules-panel {
            display: none;
          }

          .crm-modules-mobile-control {
            display: none;
          }

          .crm-modules-radio {
            position: absolute;
            opacity: 0;
            pointer-events: none;
          }

          ${carouselCss}
        `}
      </style>

      <CrmReveal
        variant="scale-in"
        duration={820}
        className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white px-4 py-7 shadow-[0_18px_60px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-white/[0.04] sm:px-6 lg:px-8"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.06),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.06),transparent_28%)]" />
        <div className="pointer-events-none absolute left-8 top-8 h-40 w-40 rounded-full border border-blue-100/70 opacity-35" />
        <div className="pointer-events-none absolute right-8 bottom-8 h-44 w-44 rounded-full border border-violet-100/70 opacity-40" />

        <div className={crmClass(crmRevealHeading, "relative mx-auto max-w-4xl text-center")}>
          <h2 className="text-3xl font-black leading-tight tracking-[-0.04em] text-slate-950 dark:text-white sm:text-4xl lg:text-[2.8rem]">
            CRM Modules
          </h2>

          <p className="mx-auto mt-2 max-w-2xl text-sm font-semibold leading-6 text-slate-600 dark:text-slate-300 sm:text-base">
            Everything you need in one CRM
          </p>
        </div>

        {modulePages.map((_, index) => (
          <input
            key={`crm-module-radio-${index}`}
            id={`crm-modules-page-${index}`}
            name="crm-modules-page"
            type="radio"
            className="crm-modules-radio"
            defaultChecked={index === 0}
          />
        ))}

        <div className="crm-modules-carousel relative mt-7">
          <div
            className={crmClass(
              crmLineGrowX,
              "pointer-events-none absolute left-[7%] right-[7%] top-[26%] hidden h-0.5 rounded-full bg-gradient-to-r from-violet-100 via-blue-100 to-violet-100 lg:block",
            )}
          />
          <div
            className={crmClass(
              crmLineGrowX,
              "pointer-events-none absolute left-[7%] right-[7%] top-[68%] hidden h-0.5 rounded-full bg-gradient-to-r from-violet-100 via-blue-100 to-violet-100 lg:block",
            )}
          />

          {modulePages.map((pageModules, pageIndex) => {
            const previousPage = pageIndex === 0 ? pageCount - 1 : pageIndex - 1;
            const nextPage = pageIndex === pageCount - 1 ? 0 : pageIndex + 1;

            return (
              <div
                key={`crm-modules-panel-${pageIndex}`}
                className={`crm-modules-panel crm-modules-panel-${pageIndex} relative z-10 mx-auto w-full max-w-6xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-6 lg:gap-y-5`}
              >
                {pageCount > 1 ? (
                  <>
                    <label
                      htmlFor={`crm-modules-page-${previousPage}`}
                      aria-label="Previous CRM modules"
                      className="absolute left-0 top-1/2 z-20 hidden h-11 w-11 -translate-x-1/2 -translate-y-1/2 cursor-pointer place-items-center rounded-full border border-slate-200 bg-white text-blue-700 shadow-[0_12px_32px_rgba(15,23,42,0.1)] transition hover:-translate-x-[60%] hover:border-violet-200 hover:text-violet-700 lg:grid"
                    >
                      <span className="text-3xl leading-none">‹</span>
                    </label>

                    <label
                      htmlFor={`crm-modules-page-${nextPage}`}
                      aria-label="Next CRM modules"
                      className="absolute right-0 top-1/2 z-20 hidden h-11 w-11 translate-x-1/2 -translate-y-1/2 cursor-pointer place-items-center rounded-full border border-slate-200 bg-white text-blue-700 shadow-[0_12px_32px_rgba(15,23,42,0.1)] transition hover:translate-x-[60%] hover:border-violet-200 hover:text-violet-700 lg:grid"
                    >
                      <span className="text-3xl leading-none">›</span>
                    </label>
                  </>
                ) : null}

                {pageModules.map((module, moduleIndex) => {
                  const globalIndex = pageIndex * 10 + moduleIndex;
                  const Icon = module.icon ?? Boxes;
                  const color = palette[globalIndex % palette.length];
                  const category = normalizeCategory(module);

                  return (
                    <article
                      key={`${module.title}-${globalIndex}`}
                      className={crmClass(
                        crmRevealCard(moduleIndex),
                        "group relative min-h-[10.8rem] overflow-hidden rounded-[1.25rem] border border-slate-200 bg-white/90 p-4 text-center shadow-[0_12px_34px_rgba(15,23,42,0.055)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-[0_18px_48px_rgba(79,70,229,0.11)] dark:border-white/10 dark:bg-white/[0.05]",
                      )}
                    >
                      <div className="pointer-events-none absolute inset-0 rounded-[1.25rem] bg-gradient-to-br from-white via-transparent to-slate-50/70 opacity-80 dark:from-white/5 dark:to-transparent" />

                      <span
                        className={`absolute right-4 top-4 rounded-lg border px-2 py-0.5 text-xs font-black ${color.badge}`}
                      >
                        {String(globalIndex + 1).padStart(2, "0")}
                      </span>

                      <div className="relative mx-auto grid h-14 w-14 place-items-center">
                        <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${color.ring}`} />
                        <div
                          className={`relative grid h-12 w-12 place-items-center rounded-full border bg-white shadow-sm ${color.border}`}
                        >
                          <Icon className={`h-5 w-5 ${color.icon}`} aria-hidden="true" />
                        </div>
                      </div>

                      <h3 className="relative mt-4 min-h-[2.5rem] text-sm font-black leading-5 tracking-[-0.02em] text-slate-950 dark:text-white sm:text-[0.95rem]">
                        {module.title}
                      </h3>

                      <div
                        className={`relative mx-auto mt-3 inline-flex min-w-[6.7rem] items-center justify-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-[10px] font-black uppercase tracking-[0.07em] ${color.badge}`}
                      >
                        <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                        {category}
                      </div>
                    </article>
                  );
                })}
              </div>
            );
          })}
        </div>

        {pageCount > 1 ? (
          <div className="crm-modules-mobile-controls relative z-20 mt-6 flex w-full items-center justify-center lg:hidden">
            {modulePages.map((_, pageIndex) => {
              const previousPage = pageIndex === 0 ? pageCount - 1 : pageIndex - 1;
              const nextPage = pageIndex === pageCount - 1 ? 0 : pageIndex + 1;

              return (
                <div
                  key={`crm-modules-mobile-control-${pageIndex}`}
                  className={`crm-modules-mobile-control crm-modules-mobile-control-${pageIndex} mx-auto items-center justify-center gap-3 rounded-full border border-slate-200 bg-white/90 px-3 py-2 shadow-[0_12px_30px_rgba(15,23,42,0.08)] backdrop-blur dark:border-white/10 dark:bg-white/[0.06]`}
                >
                  <label
                    htmlFor={`crm-modules-page-${previousPage}`}
                    aria-label="Previous CRM modules"
                    className="grid h-8 w-8 cursor-pointer place-items-center rounded-full bg-slate-50 text-blue-700 transition active:scale-95 dark:bg-white/[0.08] dark:text-blue-200"
                  >
                    <span className="text-2xl leading-none">‹</span>
                  </label>

                  <div className="flex items-center gap-2 px-1">
                    {modulePages.map((_, dotIndex) => (
                      <label
                        key={`crm-modules-mobile-dot-${pageIndex}-${dotIndex}`}
                        htmlFor={`crm-modules-page-${dotIndex}`}
                        aria-label={`Show CRM module page ${dotIndex + 1}`}
                        className={`h-2 cursor-pointer rounded-full transition ${
                          dotIndex === pageIndex
                            ? "w-5 bg-violet-600"
                            : "w-2 bg-slate-200 dark:bg-white/20"
                        }`}
                      />
                    ))}
                  </div>

                  <label
                    htmlFor={`crm-modules-page-${nextPage}`}
                    aria-label="Next CRM modules"
                    className="grid h-8 w-8 cursor-pointer place-items-center rounded-full bg-slate-50 text-blue-700 transition active:scale-95 dark:bg-white/[0.08] dark:text-blue-200"
                  >
                    <span className="text-2xl leading-none">›</span>
                  </label>
                </div>
              );
            })}
          </div>
        ) : null}

        <div
          className={crmClass(
            crmRevealScale,
            "crm-modules-footer relative mx-auto mt-7 hidden w-fit flex-col items-center gap-3 lg:flex",
          )}
        >
          <div className="inline-flex items-center gap-4 rounded-full border border-slate-200 bg-white/80 px-5 py-2 text-xs font-black text-slate-500 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/[0.05] dark:text-slate-300 sm:text-sm">
            <span>{totalModules} Modules</span>
            <span className="h-1 w-1 rounded-full bg-slate-400" />
            <span>Scalable CRM for {data.industryName}</span>
          </div>

          {pageCount > 1 ? (
            <div className="crm-modules-dots flex items-center gap-2.5">
              {modulePages.map((_, index) => (
                <label
                  key={`crm-modules-dot-${index}`}
                  htmlFor={`crm-modules-page-${index}`}
                  aria-label={`Show CRM module page ${index + 1}`}
                  className="h-2 w-2 cursor-pointer rounded-full bg-slate-200 transition dark:bg-white/20"
                />
              ))}
            </div>
          ) : null}
        </div>
      </CrmReveal>
    </section>
  );
}