import {
  ArrowRight,
  BarChart3,
  Bot,
  ClipboardList,
  CreditCard,
  Globe2,
  Mail,
  MessageCircle,
  PieChart,
  RefreshCw,
  ShieldCheck,
  Smartphone,
  Target,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import CrmReveal from "./CrmReveal";
import {
  crmClass,
  crmRevealCard,
  crmRevealHeading,
  crmRevealPop,
  crmRevealScale,
  crmRevealScaleCard,
  crmSlideRight,
  crmSvgDraw,
} from "./crmAnimationUtils";
import type { IndustryCrmPageData } from "./industryCrmData";

const integrationHighlights = [
  {
    title: "Real-time Sync",
    description: "Keep data updated across all platforms.",
    icon: RefreshCw,
  },
  {
    title: "No Manual Work",
    description: "Automate data flow and actions.",
    icon: Zap,
  },
  {
    title: "Secure & Reliable",
    description: "Enterprise-grade security always.",
    icon: ShieldCheck,
  },
  {
    title: "100+ Integrations",
    description: "Connect with your favorite tools.",
    icon: Workflow,
  },
];

const integrationTools = [
  {
    title: "WhatsApp",
    brand: "whatsapp",
    position: "left-1/2 top-4 -translate-x-1/2",
  },
  {
    title: "Gmail",
    brand: "gmail",
    position: "right-[17%] top-[9%]",
  },
  {
    title: "Calendar",
    brand: "calendar",
    position: "right-[4%] top-[34%]",
  },
  {
    title: "Outlook",
    brand: "outlook",
    position: "right-[11%] bottom-[21%]",
  },
  {
    title: "Slack",
    brand: "slack",
    position: "right-[30%] bottom-[7%]",
  },
  {
    title: "HubSpot",
    brand: "hubspot",
    position: "left-1/2 bottom-4 -translate-x-1/2",
  },
  {
    title: "Zapier",
    brand: "zapier",
    position: "left-[30%] bottom-[7%]",
  },
  {
    title: "Razorpay",
    brand: "razorpay",
    position: "left-[11%] bottom-[21%]",
  },
  {
    title: "Stripe",
    brand: "stripe",
    position: "left-[4%] top-[34%]",
  },
  {
    title: "Sheets",
    brand: "sheets",
    position: "left-[17%] top-[9%]",
  },
];

const fallbackUseCases = [
  {
    title: "Lead Management",
    description: "Capture, track, and nurture leads from every channel.",
    icon: Target,
  },
  {
    title: "Sales Automation",
    description: "Automate follow-ups and move deals faster.",
    icon: BarChart3,
  },
  {
    title: "Customer Support",
    description: "Resolve tickets faster and improve customer happiness.",
    icon: MessageCircle,
  },
  {
    title: "Marketing Automation",
    description: "Run campaigns, nurture leads, and measure results.",
    icon: Bot,
  },
  {
    title: "Project Management",
    description: "Manage projects, tasks, updates, and team collaboration.",
    icon: ClipboardList,
  },
  {
    title: "Invoicing & Billing",
    description: "Create invoices, reminders, and payment tracking.",
    icon: CreditCard,
  },
  {
    title: "Analytics & Reports",
    description: "Get actionable insights and make smarter decisions.",
    icon: PieChart,
  },
  {
    title: "Workflow Automation",
    description: "Automate repetitive tasks and business processes.",
    icon: Workflow,
  },
  {
    title: "Customer Portal",
    description: "Give users secure access to their data and requests.",
    icon: Users,
  },
  {
    title: "Mobile Access",
    description: "Manage CRM activity from mobile devices.",
    icon: Smartphone,
  },
];

function getUseCaseTone(index: number) {
  if (index % 5 === 0) {
    return "bg-emerald-50/60 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-300";
  }

  if (index % 5 === 1) {
    return "bg-blue-50/60 text-blue-600 dark:bg-blue-400/10 dark:text-blue-300";
  }

  if (index % 5 === 2) {
    return "bg-orange-50/60 text-orange-600 dark:bg-orange-400/10 dark:text-orange-300";
  }

  if (index % 5 === 3) {
    return "bg-violet-50/60 text-violet-600 dark:bg-violet-400/10 dark:text-violet-300";
  }

  return "bg-pink-50/60 text-pink-600 dark:bg-pink-400/10 dark:text-pink-300";
}

export default function CrmIntegrationsUseCasesSection({
  data,
}: {
  data: IndustryCrmPageData;
}) {
  const useCases = [
    ...data.useCases.map((item) => ({
      title: item.title,
      description: item.description,
      icon: item.icon,
    })),
    ...fallbackUseCases,
  ].slice(0, 10);

  return (
    <section id="crm-integrations-use-cases" className="py-8 sm:py-10">
      <style>
        {`
          @keyframes crmMobileSlideLeft {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }

          @keyframes crmMobileSlideRight {
            from {
              transform: translateX(-50%);
            }
            to {
              transform: translateX(0);
            }
          }

          .crm-mobile-slider-mask {
            -webkit-mask-image: linear-gradient(
              90deg,
              transparent,
              #000 8%,
              #000 92%,
              transparent
            );
            mask-image: linear-gradient(
              90deg,
              transparent,
              #000 8%,
              #000 92%,
              transparent
            );
          }

          .crm-mobile-slider-track-left {
            width: max-content;
            animation: crmMobileSlideLeft 34s linear infinite;
          }

          .crm-mobile-slider-track-right {
            width: max-content;
            animation: crmMobileSlideRight 38s linear infinite;
          }

          @media (prefers-reduced-motion: reduce) {
            .crm-mobile-slider-track-left,
            .crm-mobile-slider-track-right {
              animation: none;
              transform: none;
            }
          }
        `}
      </style>

      <div className="space-y-4">
        <CrmReveal
          variant="scale-in"
          duration={860}
          className={crmClass(
            crmRevealScale,
            "overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_82%_20%,rgba(37,99,235,0.12),transparent_32%),radial-gradient(circle_at_18%_12%,rgba(124,58,237,0.10),transparent_34%),linear-gradient(135deg,#ffffff,#f8fbff)] p-6 shadow-[0_26px_90px_rgba(15,23,42,0.06)] dark:bg-none dark:bg-white/[0.04] sm:p-8 lg:p-10",
          )}
        >
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1fr] lg:items-center lg:gap-10">
            <div className={crmRevealHeading}>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-violet-700 dark:text-violet-300">
                Integrations
              </p>

              <h2 className="mt-5 max-w-2xl text-4xl font-black tracking-[-0.055em] text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
                Connect Everything.
                <span className="block bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Work Without Limits.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-base font-semibold leading-8 text-slate-600 dark:text-slate-300">
                Seamlessly connect your CRM with the tools you already use.
                Unify data, automate workflows, and create a powerful system
                that grows with your business.
              </p>

              <div className="mt-8 grid gap-5 sm:mt-9 sm:grid-cols-2">
                {integrationHighlights.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className={crmClass(
                        crmRevealCard(index),
                        "flex items-start gap-4",
                      )}
                    >
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white text-violet-600 shadow-sm ring-1 ring-slate-200 dark:bg-white/10 dark:text-violet-200 dark:ring-white/10">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <div>
                        <h3 className="text-sm font-black text-slate-950 dark:text-white">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-xs font-semibold leading-5 text-slate-500 dark:text-slate-400">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div
              className={crmClass(
                crmSlideRight,
                "relative min-h-[21rem] overflow-hidden rounded-[1.8rem] bg-white/70 p-5 shadow-[0_24px_80px_rgba(15,23,42,0.08)] dark:bg-white/[0.04] sm:min-h-[40rem]",
              )}
            >
              <div className="hidden sm:block">
                <div className="absolute inset-7 rounded-full border border-blue-100/80 dark:border-white/10" />
                <div className="absolute inset-16 rounded-full border border-violet-100/80 dark:border-white/10" />
                <div className="absolute inset-[6.5rem] rounded-full border border-slate-100 dark:border-white/10" />

                <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
                  <div
                    className={crmClass(
                      crmRevealPop,
                      "grid h-28 w-28 place-items-center rounded-[1.8rem] bg-gradient-to-br from-blue-600 to-violet-600 text-center text-white shadow-[0_24px_70px_rgba(79,70,229,0.32)] sm:h-32 sm:w-32",
                    )}
                  >
                    <div>
                      <Bot className="mx-auto h-7 w-7" aria-hidden="true" />
                      <p className="mt-3 text-lg font-black tracking-[-0.03em]">
                        HNX
                      </p>
                      <p className="text-xs font-black uppercase tracking-[0.24em]">
                        CRM
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute left-1/2 top-[64%] z-30 hidden -translate-x-1/2 rounded-full bg-white px-4 py-2 text-[11px] font-black text-violet-700 shadow-sm dark:bg-slate-950 dark:text-violet-300 sm:block">
                  100+ More
                </div>

                <div
                  className="absolute inset-0 z-10 hidden sm:block"
                  aria-hidden="true"
                >
                  <svg
                    className="h-full w-full"
                    viewBox="0 0 680 620"
                    fill="none"
                  >
                    <path
                      className={crmSvgDraw}
                      d="M340 95 C340 175 340 220 340 260"
                      stroke="#8B5CF6"
                      strokeWidth="2"
                      strokeDasharray="8 9"
                      strokeLinecap="round"
                    />
                    <path
                      className={crmSvgDraw}
                      d="M500 130 C430 170 392 215 365 265"
                      stroke="#8B5CF6"
                      strokeWidth="2"
                      strokeDasharray="8 9"
                      strokeLinecap="round"
                    />
                    <path
                      className={crmSvgDraw}
                      d="M580 270 C500 280 430 292 385 302"
                      stroke="#8B5CF6"
                      strokeWidth="2"
                      strokeDasharray="8 9"
                      strokeLinecap="round"
                    />
                    <path
                      className={crmSvgDraw}
                      d="M555 445 C485 405 424 365 380 330"
                      stroke="#8B5CF6"
                      strokeWidth="2"
                      strokeDasharray="8 9"
                      strokeLinecap="round"
                    />
                    <path
                      className={crmSvgDraw}
                      d="M455 540 C410 460 375 385 358 345"
                      stroke="#8B5CF6"
                      strokeWidth="2"
                      strokeDasharray="8 9"
                      strokeLinecap="round"
                    />
                    <path
                      className={crmSvgDraw}
                      d="M340 545 C340 455 340 388 340 352"
                      stroke="#8B5CF6"
                      strokeWidth="2"
                      strokeDasharray="8 9"
                      strokeLinecap="round"
                    />
                    <path
                      className={crmSvgDraw}
                      d="M225 540 C270 460 305 385 322 345"
                      stroke="#8B5CF6"
                      strokeWidth="2"
                      strokeDasharray="8 9"
                      strokeLinecap="round"
                    />
                    <path
                      className={crmSvgDraw}
                      d="M125 445 C195 405 256 365 300 330"
                      stroke="#8B5CF6"
                      strokeWidth="2"
                      strokeDasharray="8 9"
                      strokeLinecap="round"
                    />
                    <path
                      className={crmSvgDraw}
                      d="M100 270 C180 280 250 292 295 302"
                      stroke="#8B5CF6"
                      strokeWidth="2"
                      strokeDasharray="8 9"
                      strokeLinecap="round"
                    />
                    <path
                      className={crmSvgDraw}
                      d="M180 130 C250 170 288 215 315 265"
                      stroke="#8B5CF6"
                      strokeWidth="2"
                      strokeDasharray="8 9"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <div className="absolute inset-0 z-30 hidden sm:block">
                  {integrationTools.map((item, index) => (
                    <div key={item.title} className={`absolute ${item.position}`}>
                      <div
                        className={crmClass(
                          crmRevealScaleCard(index),
                          "group w-[6.35rem] rounded-2xl bg-white p-2.5 text-center shadow-[0_16px_40px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 dark:bg-slate-950",
                        )}
                      >
                        <BrandIcon brand={item.brand} />
                        <p className="mt-2 text-[9.5px] font-black leading-4 text-slate-950 dark:text-white">
                          {item.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative z-30 sm:hidden">
                <div className="mx-auto grid h-24 w-24 place-items-center rounded-[1.5rem] bg-gradient-to-br from-blue-600 to-violet-600 text-center text-white shadow-[0_20px_55px_rgba(79,70,229,0.25)]">
                  <div>
                    <Bot className="mx-auto h-6 w-6" aria-hidden="true" />
                    <p className="mt-2 text-base font-black tracking-[-0.03em]">
                      HNX
                    </p>
                    <p className="text-[10px] font-black uppercase tracking-[0.22em]">
                      CRM
                    </p>
                  </div>
                </div>

                <div className="crm-mobile-slider-mask -mx-5 mt-6 overflow-hidden">
                  <div className="crm-mobile-slider-track-left flex gap-3 px-5">
                    {[...integrationTools, ...integrationTools].map(
                      (item, index) => (
                        <div
                          key={`${item.title}-${index}`}
                          className="flex w-[9.5rem] shrink-0 items-center gap-3 rounded-2xl bg-white p-3 shadow-[0_12px_32px_rgba(15,23,42,0.08)] dark:bg-slate-950"
                        >
                          <BrandIcon brand={item.brand} compact />
                          <div>
                            <p className="text-sm font-black text-slate-950 dark:text-white">
                              {item.title}
                            </p>
                            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                              Connected
                            </p>
                          </div>
                        </div>
                      ),
                    )}

                    {[0, 1].map((item) => (
                      <div
                        key={`more-${item}`}
                        className="flex w-[9.5rem] shrink-0 items-center gap-3 rounded-2xl bg-white p-3 shadow-[0_12px_32px_rgba(15,23,42,0.08)] dark:bg-slate-950"
                      >
                        <span className="grid h-10 w-10 place-items-center rounded-xl bg-slate-50 text-blue-600 ring-1 ring-slate-200 dark:bg-white/10 dark:text-blue-300 dark:ring-white/10">
                          <Globe2 className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <div>
                          <p className="text-sm font-black text-slate-950 dark:text-white">
                            100+ More
                          </p>
                          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                            Connected
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CrmReveal>

        <CrmReveal
          variant="scale-in"
          duration={820}
          className={crmClass(
            crmRevealScale,
            "overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_8%_92%,rgba(124,58,237,0.10),transparent_32%),linear-gradient(135deg,#ffffff,#f7f8ff)] p-6 shadow-[0_26px_90px_rgba(15,23,42,0.06)] dark:bg-none dark:bg-white/[0.04] sm:p-7 lg:p-9",
          )}
        >
          <div className="grid gap-8 lg:grid-cols-[0.32fr_1fr] lg:items-start">
            <div className={crmClass(crmRevealHeading, "lg:sticky lg:top-28")}>
              <p className="text-xs font-black uppercase tracking-[0.14em] text-violet-700 dark:text-violet-300">
                Use Cases
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-[-0.055em] text-slate-950 dark:text-white sm:text-5xl lg:text-[3.25rem]">
                One CRM.
                <span className="block bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Endless Possibilities.
                </span>
              </h2>

              <p className="mt-4 max-w-md text-sm font-semibold leading-7 text-slate-600 dark:text-slate-300">
                Whether you are a startup or an enterprise, your CRM adapts to
                your workflow and helps your team achieve more every day.
              </p>

              <a
                href="/contact"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-black text-violet-700 shadow-[0_14px_38px_rgba(15,23,42,0.08)] transition hover:-translate-y-0.5 hover:bg-violet-50 dark:bg-white/10 dark:text-violet-200 dark:hover:bg-white/15"
              >
                Explore All Use Cases
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>

            <div className="sm:hidden">
              <div className="crm-mobile-slider-mask -mx-6 overflow-hidden py-1">
                <div className="crm-mobile-slider-track-right flex gap-3 px-6">
                  {[...useCases, ...useCases].map((item, index) => {
                    const Icon = item.icon;
                    const tone = getUseCaseTone(index);

                    return (
                      <article
                        key={`${item.title}-${index}`}
                        className="group w-[13.5rem] shrink-0 rounded-[1.5rem] bg-white/95 p-5 shadow-[0_14px_42px_rgba(15,23,42,0.07)] dark:bg-white/[0.05]"
                      >
                        <span
                          className={`mx-auto grid h-14 w-14 place-items-center rounded-[1.2rem] ${tone}`}
                        >
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </span>

                        <h3 className="mt-4 text-center text-base font-black leading-6 text-slate-950 dark:text-white">
                          {item.title}
                        </h3>

                        <p className="mt-2 line-clamp-3 text-center text-sm font-semibold leading-6 text-slate-500 dark:text-slate-300">
                          {item.description}
                        </p>

                        <div className="mt-5 flex items-center justify-center gap-2 text-sm font-black text-blue-700 dark:text-blue-300">
                          Learn more
                          <ArrowRight
                            className="h-3.5 w-3.5"
                            aria-hidden="true"
                          />
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="hidden gap-4 sm:grid sm:grid-cols-2 xl:grid-cols-5">
              {useCases.map((item, index) => {
                const Icon = item.icon;
                const tone = getUseCaseTone(index);

                return (
                  <article
                    key={`${item.title}-${index}`}
                    className={crmClass(
                      crmRevealCard(index),
                      "group rounded-[1.5rem] bg-white/95 p-5 shadow-[0_14px_42px_rgba(15,23,42,0.07)] transition hover:-translate-y-1 hover:shadow-[0_20px_52px_rgba(15,23,42,0.1)] dark:bg-white/[0.05]",
                    )}
                  >
                    <span
                      className={`mx-auto grid h-14 w-14 place-items-center rounded-[1.2rem] ${tone}`}
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>

                    <h3 className="mt-4 text-center text-base font-black leading-6 text-slate-950 dark:text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 line-clamp-3 text-center text-sm font-semibold leading-6 text-slate-500 dark:text-slate-300">
                      {item.description}
                    </p>

                    <div className="mt-5 flex items-center justify-center gap-2 text-sm font-black text-blue-700 dark:text-blue-300">
                      Learn more
                      <ArrowRight
                        className="h-3.5 w-3.5 transition group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </CrmReveal>
      </div>
    </section>
  );
}

function BrandIcon({
  brand,
  compact = false,
}: {
  brand: string;
  compact?: boolean;
}) {
  const size = compact ? "h-10 w-10 rounded-xl" : "h-11 w-11 rounded-xl";

  if (brand === "whatsapp") {
    return (
      <span
        className={`mx-auto grid ${size} place-items-center bg-[#25D366] text-white`}
      >
        <MessageCircle className="h-5 w-5" aria-hidden="true" />
      </span>
    );
  }

  if (brand === "gmail") {
    return (
      <span
        className={`mx-auto grid ${size} place-items-center bg-white ring-1 ring-slate-200`}
      >
        <svg className="h-6 w-6" viewBox="0 0 48 48" aria-hidden="true">
          <path
            fill="#EA4335"
            d="M24 27.5 6 14.2V38h7V24.8l11 8.2 11-8.2V38h7V14.2L24 27.5Z"
          />
          <path
            fill="#FBBC04"
            d="M6 14.2 24 27.5l18-13.3V10c0-2.2-2.5-3.5-4.3-2.2L24 18 10.3 7.8C8.5 6.5 6 7.8 6 10v4.2Z"
          />
          <path fill="#34A853" d="M6 14.2V38h7V24.8L6 14.2Z" />
          <path fill="#4285F4" d="M35 24.8V38h7V14.2l-7 10.6Z" />
        </svg>
      </span>
    );
  }

  if (brand === "calendar") {
    return (
      <span
        className={`mx-auto grid ${size} place-items-center bg-white ring-1 ring-slate-200`}
      >
        <svg className="h-6 w-6" viewBox="0 0 48 48" aria-hidden="true">
          <path
            fill="#4285F4"
            d="M10 8h28a4 4 0 0 1 4 4v26a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4V12a4 4 0 0 1 4-4Z"
          />
          <path fill="#fff" d="M10 18h28v20H10V18Z" />
          <path fill="#34A853" d="M10 8h28v10H10V8Z" />
          <path fill="#FBBC04" d="M6 18h4V8a4 4 0 0 0-4 4v6Z" />
          <path fill="#EA4335" d="M38 8a4 4 0 0 1 4 4v6h-4V8Z" />
          <text x="18" y="33" fontSize="13" fontWeight="800" fill="#4285F4">
            31
          </text>
        </svg>
      </span>
    );
  }

  if (brand === "outlook") {
    return (
      <span
        className={`mx-auto grid ${size} place-items-center bg-white ring-1 ring-slate-200`}
      >
        <svg className="h-6 w-6" viewBox="0 0 48 48" aria-hidden="true">
          <path fill="#0078D4" d="M20 10h20v28H20z" />
          <path fill="#50A6F1" d="M20 22h18v6H20z" />
          <path fill="#185ABD" d="M8 14l16-3v26L8 34V14z" />
          <text x="12" y="29" fontSize="13" fontWeight="800" fill="white">
            O
          </text>
        </svg>
      </span>
    );
  }

  if (brand === "slack") {
    return (
      <span
        className={`mx-auto grid ${size} place-items-center bg-white ring-1 ring-slate-200`}
      >
        <svg className="h-6 w-6" viewBox="0 0 48 48" aria-hidden="true">
          <rect x="20" y="5" width="7" height="18" rx="3.5" fill="#36C5F0" />
          <rect x="20" y="25" width="7" height="18" rx="3.5" fill="#2EB67D" />
          <rect x="25" y="20" width="18" height="7" rx="3.5" fill="#ECB22E" />
          <rect x="5" y="20" width="18" height="7" rx="3.5" fill="#E01E5A" />
        </svg>
      </span>
    );
  }

  if (brand === "razorpay") {
    return (
      <span
        className={`mx-auto grid ${size} place-items-center bg-white ring-1 ring-slate-200`}
      >
        <span className="text-base font-black italic text-[#0B72E7]">R</span>
      </span>
    );
  }

  if (brand === "stripe") {
    return (
      <span
        className={`mx-auto grid ${size} place-items-center bg-[#635BFF] text-white`}
      >
        <span className="text-base font-black">S</span>
      </span>
    );
  }

  if (brand === "sheets") {
    return (
      <span
        className={`mx-auto grid ${size} place-items-center bg-white ring-1 ring-slate-200`}
      >
        <svg className="h-6 w-6" viewBox="0 0 48 48" aria-hidden="true">
          <path fill="#0F9D58" d="M12 4h17l9 9v31H12z" />
          <path fill="#87CEAC" d="M29 4v9h9z" />
          <path
            fill="white"
            d="M17 20h18v16H17V20Zm3 3v3h5v-3h-5Zm8 0v3h4v-3h-4Zm-8 6v4h5v-4h-5Zm8 0v4h4v-4h-4Z"
          />
        </svg>
      </span>
    );
  }

  if (brand === "zapier") {
    return (
      <span
        className={`mx-auto grid ${size} place-items-center bg-[#FF4A00] text-white`}
      >
        <Zap className="h-5 w-5" aria-hidden="true" />
      </span>
    );
  }

  if (brand === "hubspot") {
    return (
      <span
        className={`mx-auto grid ${size} place-items-center bg-[#FF5C35] text-white`}
      >
        <Workflow className="h-5 w-5" aria-hidden="true" />
      </span>
    );
  }

  if (brand === "mailchimp") {
    return (
      <span
        className={`mx-auto grid ${size} place-items-center bg-[#FFE01B] text-slate-950`}
      >
        <Mail className="h-5 w-5" aria-hidden="true" />
      </span>
    );
  }

  return (
    <span
      className={`mx-auto grid ${size} place-items-center bg-slate-50 text-blue-600 ring-1 ring-slate-200 dark:bg-white/10 dark:text-blue-300 dark:ring-white/10`}
    >
      <Globe2 className="h-5 w-5" aria-hidden="true" />
    </span>
  );
}