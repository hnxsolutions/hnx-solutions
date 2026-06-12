import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Code2,
  Crown,
  Rocket,
  Send,
  ShieldCheck,
  Sparkles,
  Trophy,
  Wrench,
} from "lucide-react";
import CrmReveal from "./CrmReveal";
import {
  crmClass,
  crmLineGrowX,
  crmRevealCard,
  crmRevealHeading,
  crmRevealScale,
} from "./crmAnimationUtils";
import type { IndustryCrmPageData } from "./industryCrmData";

const timelineSteps = [
  {
    title: "Discovery & Planning",
    duration: "3 - 5 Days",
    description: "Understand your needs and plan the roadmap.",
    icon: CalendarDays,
    tone: "text-violet-600 bg-violet-50 dark:bg-violet-400/10 dark:text-violet-200",
    dot: "bg-violet-600",
  },
  {
    title: "Development",
    duration: "2 - 6 Weeks",
    description: "Build and customize your CRM solution.",
    icon: Code2,
    tone: "text-blue-600 bg-blue-50 dark:bg-blue-400/10 dark:text-blue-200",
    dot: "bg-blue-600",
  },
  {
    title: "Testing & Training",
    duration: "1 - 2 Weeks",
    description: "Test thoroughly and train your team.",
    icon: CheckCircle2,
    tone: "text-emerald-600 bg-emerald-50 dark:bg-emerald-400/10 dark:text-emerald-200",
    dot: "bg-emerald-600",
  },
  {
    title: "Go Live & Support",
    duration: "Ongoing",
    description: "Launch successfully and grow with support.",
    icon: Rocket,
    tone: "text-orange-600 bg-orange-50 dark:bg-orange-400/10 dark:text-orange-200",
    dot: "bg-orange-500",
  },
];

const packages = [
  {
    title: "CRM MVP",
    badge: "Starter",
    timeline: "2 - 4 Weeks",
    description: "Perfect for businesses that need a focused CRM foundation.",
    icon: Send,
    price: "$ 4999",
    priceNote: "quote",
    accent: "text-violet-600",
    line: "bg-violet-500",
    button:
      "bg-violet-50 text-violet-700 hover:bg-violet-100 dark:bg-violet-400/10 dark:text-violet-200",
    features: [
      "Core CRM modules",
      "Lead & contact workflow",
      "Basic dashboard",
      "Team access setup",
      "Launch support",
    ],
  },
  {
    title: "Growth CRM",
    badge: "Most Popular",
    timeline: "4 - 8 Weeks",
    description: "Built for growing teams that need automation and reports.",
    icon: Trophy,
    price: "$ 9999",
    priceNote: "quote",
    accent: "text-blue-600",
    line: "bg-blue-600",
    button:
      "bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-[0_18px_45px_rgba(37,99,235,0.24)] hover:-translate-y-0.5",
    features: [
      "Everything in CRM MVP",
      "Workflow automation",
      "Custom reports",
      "Role-based access",
      "Priority support",
    ],
    popular: true,
  },
  {
    title: "Advanced CRM",
    badge: "Enterprise",
    timeline: "8 - 12 Weeks",
    description: "For advanced workflows, portals, AI, and deep integrations.",
    icon: Crown,
    price: "Custom",
    priceNote: "scope",
    accent: "text-emerald-600",
    line: "bg-emerald-500",
    button:
      "bg-emerald-50 text-emerald-700 hover:bg-emerald-100 dark:bg-emerald-400/10 dark:text-emerald-200",
    features: [
      "Advanced CRM workflows",
      "AI assistant options",
      "Customer / team portals",
      "Integrations & API access",
      "Scale-ready architecture",
    ],
  },
];

const packageNotes = [
  {
    title: "Free Setup Guidance",
    description: "We help plan the right CRM modules before development.",
    icon: ShieldCheck,
  },
  {
    title: "Phased Delivery",
    description: "Start with essentials and add advanced features later.",
    icon: Wrench,
  },
  {
    title: "Custom Scope",
    description: "Final pricing depends on modules, users, and complexity.",
    icon: Sparkles,
  },
];

export default function CrmTimelinePackagesSection({
  data,
}: {
  data: IndustryCrmPageData;
}) {
  return (
    <section id="crm-timeline-packages" className="py-8 sm:py-10">
      <style>
        {`
          @keyframes crmPackageMobileCardOne {
            0%,
            28% {
              opacity: 1;
              transform: translateX(0) scale(1);
              pointer-events: auto;
            }

            33%,
            100% {
              opacity: 0;
              transform: translateX(-18px) scale(0.98);
              pointer-events: none;
            }
          }

          @keyframes crmPackageMobileCardTwo {
            0%,
            28% {
              opacity: 0;
              transform: translateX(18px) scale(0.98);
              pointer-events: none;
            }

            33%,
            61% {
              opacity: 1;
              transform: translateX(0) scale(1);
              pointer-events: auto;
            }

            66%,
            100% {
              opacity: 0;
              transform: translateX(-18px) scale(0.98);
              pointer-events: none;
            }
          }

          @keyframes crmPackageMobileCardThree {
            0%,
            61% {
              opacity: 0;
              transform: translateX(18px) scale(0.98);
              pointer-events: none;
            }

            66%,
            94% {
              opacity: 1;
              transform: translateX(0) scale(1);
              pointer-events: auto;
            }

            100% {
              opacity: 0;
              transform: translateX(-18px) scale(0.98);
              pointer-events: none;
            }
          }

          .crm-packages-mobile-stage {
            position: relative;
            width: min(76vw, 19rem);
            min-height: 34rem;
            margin-inline: auto;
          }

          .crm-package-mobile-slide {
            position: absolute;
            inset: 0;
            opacity: 0;
            will-change: opacity, transform;
          }

          .crm-package-mobile-slide-0 {
            animation: crmPackageMobileCardOne 15s ease-in-out infinite;
          }

          .crm-package-mobile-slide-1 {
            animation: crmPackageMobileCardTwo 15s ease-in-out infinite;
          }

          .crm-package-mobile-slide-2 {
            animation: crmPackageMobileCardThree 15s ease-in-out infinite;
          }

          @media (prefers-reduced-motion: reduce) {
            .crm-package-mobile-slide {
              animation: none;
              opacity: 0;
              transform: none;
              pointer-events: none;
            }

            .crm-package-mobile-slide-0 {
              opacity: 1;
              pointer-events: auto;
            }
          }
        `}
      </style>

      <CrmReveal
        variant="scale-in"
        duration={850}
        className={crmClass(
          crmRevealScale,
          "overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_50%_0%,rgba(124,58,237,0.10),transparent_34%),linear-gradient(135deg,#ffffff,#f8fbff)] px-5 py-9 shadow-[0_26px_90px_rgba(15,23,42,0.06)] dark:bg-none dark:bg-white/[0.04] sm:px-7 sm:py-10 lg:px-9 lg:py-12",
        )}
      >
        <div
          className={crmClass(
            crmRevealHeading,
            "mx-auto max-w-4xl text-center",
          )}
        >
          <p className="text-xs font-black uppercase tracking-[0.28em] text-violet-700 dark:text-violet-300">
            Timeline & Packages
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-[-0.06em] text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
            Flexible Packages.
            <span className="block bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Clear Timelines.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm font-semibold leading-7 text-slate-600 dark:text-slate-300 sm:text-base">
            Choose the right CRM build model for your business. We deliver fast,
            reliable, and scalable CRM solutions without locking you into fixed
            templates.
          </p>
        </div>

        <div className="mt-8 rounded-[1.7rem] bg-white/85 px-5 py-6 shadow-[0_18px_55px_rgba(15,23,42,0.06)] dark:bg-white/[0.05] sm:px-6 lg:px-8">
          <div className="relative grid gap-6 lg:grid-cols-4">
            <div
              className={crmClass(
                crmLineGrowX,
                "absolute left-10 right-10 top-[4.15rem] hidden h-px bg-gradient-to-r from-violet-200 via-blue-200 to-orange-200 lg:block",
              )}
              aria-hidden="true"
            />

            {timelineSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.title}
                  className={crmClass(crmRevealCard(index), "relative z-10")}
                >
                  <div className="flex gap-4 lg:block">
                    <div>
                      <span
                        className={`grid h-14 w-14 place-items-center rounded-full ${step.tone}`}
                      >
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </span>

                      <span
                        className={`mx-auto mt-4 hidden h-3 w-3 rounded-full ring-4 ring-white dark:ring-slate-950 lg:block ${step.dot}`}
                        aria-hidden="true"
                      />
                    </div>

                    <div className="lg:mt-4">
                      <h3 className="text-base font-black text-slate-950 dark:text-white">
                        {step.title}
                      </h3>
                      <p
                        className={`mt-1 text-sm font-black ${
                          step.tone.split(" ")[0]
                        }`}
                      >
                        {step.duration}
                      </p>
                      <p className="mt-2 max-w-xs text-sm font-semibold leading-6 text-slate-500 dark:text-slate-300">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-7 sm:hidden">
          <div className="crm-packages-mobile-stage py-4">
            {packages.map((item, index) => (
              <div
                key={item.title}
                className={`crm-package-mobile-slide crm-package-mobile-slide-${index}`}
              >
                <PackageCard
                  item={item}
                  index={index}
                  href={data.finalCta.primaryHref}
                  mobile
                />
              </div>
            ))}
          </div>

          <div className="mt-2 flex items-center justify-center gap-2">
            {packages.map((item) => (
              <span
                key={item.title}
                className={`h-2 rounded-full ${
                  item.popular ? "w-6 bg-blue-600" : "w-2 bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mt-7 hidden gap-5 sm:grid lg:grid-cols-3">
          {packages.map((item, index) => (
            <PackageCard
              key={item.title}
              item={item}
              index={index}
              href={data.finalCta.primaryHref}
            />
          ))}
        </div>

        <div className="mx-auto mt-7 grid max-w-6xl gap-4 rounded-[1.4rem] bg-white/70 p-4 shadow-[0_16px_50px_rgba(15,23,42,0.05)] dark:bg-white/[0.05] md:grid-cols-3">
          {packageNotes.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={crmClass(
                  crmRevealCard(index),
                  "flex items-start gap-4",
                )}
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-violet-50 text-violet-600 dark:bg-violet-400/10 dark:text-violet-200">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h4 className="text-sm font-black text-slate-950 dark:text-white">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-xs font-semibold leading-5 text-slate-500 dark:text-slate-300">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </CrmReveal>
    </section>
  );
}

function PackageCard({
  item,
  index,
  href,
  mobile = false,
}: {
  item: (typeof packages)[number];
  index: number;
  href: string;
  mobile?: boolean;
}) {
  const Icon = item.icon;

  return (
    <article
      className={`${mobile ? "w-full max-w-[19rem]" : ""} ${
        mobile ? "" : crmRevealCard(index)
      } relative rounded-[1.7rem] bg-white p-5 shadow-[0_20px_65px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_26px_75px_rgba(15,23,42,0.12)] dark:bg-white/[0.05] sm:rounded-[1.8rem] sm:p-6 ${
        item.popular
          ? "ring-2 ring-blue-500/70"
          : "ring-1 ring-slate-100 dark:ring-white/10"
      }`}
    >
      {item.popular ? (
        <span className="absolute -top-4 left-1/2 inline-flex -translate-x-1/2 items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-4 py-2 text-xs font-black text-white shadow-[0_14px_35px_rgba(37,99,235,0.28)] sm:text-sm">
          <Sparkles className="h-4 w-4" aria-hidden="true" />
          {item.badge}
        </span>
      ) : null}

      <div className="flex items-start gap-3 sm:gap-4">
        <span className="grid h-13 w-13 shrink-0 place-items-center rounded-2xl bg-slate-50 text-violet-600 shadow-sm dark:bg-white/10 dark:text-violet-200 sm:h-16 sm:w-16">
          <Icon className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true" />
        </span>

        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-xl font-black tracking-[-0.04em] text-slate-950 dark:text-white sm:text-2xl">
              {item.title}
            </h3>
            {!item.popular ? (
              <span className="rounded-full bg-slate-50 px-3 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-slate-500 dark:bg-white/10 dark:text-slate-300 sm:text-[11px]">
                {item.badge}
              </span>
            ) : null}
          </div>
          <p className="mt-2 line-clamp-2 text-xs font-semibold leading-5 text-slate-500 dark:text-slate-300 sm:text-sm sm:leading-6">
            {item.description}
          </p>
        </div>
      </div>

      <div className="mt-5 sm:mt-6">
        <div className="flex items-end gap-2">
          <p
            className={`text-4xl font-black tracking-[-0.07em] sm:text-5xl ${item.accent}`}
          >
            {item.price}
          </p>
          <p className="pb-1.5 text-xs font-bold text-slate-500 dark:text-slate-300 sm:pb-2 sm:text-sm">
            / {item.priceNote}
          </p>
        </div>

        <p className="mt-1 text-xs font-black text-slate-500 dark:text-slate-300 sm:text-sm">
          Timeline: {item.timeline}
        </p>
      </div>

      <span
        className={`mt-5 block h-0.5 w-full rounded-full sm:mt-6 ${item.line}`}
      />

      <div className="mt-5 space-y-2.5 sm:mt-6 sm:space-y-3">
        {item.features
          .slice(0, mobile ? 4 : item.features.length)
          .map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-3 text-xs font-bold text-slate-700 dark:text-slate-200 sm:text-sm"
            >
              <CheckCircle2
                className={`h-4 w-4 shrink-0 ${item.accent}`}
                aria-hidden="true"
              />
              {feature}
            </div>
          ))}
      </div>

      <Link
        href={href}
        className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-3.5 text-sm font-black transition sm:mt-7 sm:py-4 ${item.button}`}
      >
        {item.popular ? "Choose Growth CRM" : "Request Custom Quote"}
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </article>
  );
}