import {
  BriefcaseBusiness,
  ClipboardList,
  Code2,
  Headphones,
  Rocket,
  Search,
  ShieldCheck,
  TimerReset,
} from "lucide-react";
import { PortalProgressLine, PortalReveal } from "./PortalMotion";
import type { IndustryPortalPageData } from "./portalTypes";

const processSteps = [
  {
    title: "Discovery",
    description: "We understand your goals, needs, and current environment.",
    icon: Search,
  },
  {
    title: "Planning",
    description: "We define the roadmap, timeline, resources, and success criteria.",
    icon: ClipboardList,
  },
  {
    title: "Design & Build",
    description: "We design intuitive experiences and build secure, scalable solutions.",
    icon: Code2,
  },
  {
    title: "Testing",
    description: "We rigorously test for quality, security, and performance.",
    icon: ShieldCheck,
  },
  {
    title: "Deployment",
    description: "We ensure a smooth go-live with minimal disruption.",
    icon: Rocket,
  },
  {
    title: "Support & Growth",
    description: "We provide ongoing support and continuous improvement.",
    icon: Headphones,
  },
];

const metrics = [
  { value: "98%", title: "On-Time Delivery", note: "Projects delivered on time, every time.", icon: TimerReset },
  { value: "100+", title: "Successful Projects", note: "Healthcare portals delivered with impact.", icon: BriefcaseBusiness },
  { value: "24/7", title: "Support", note: "Expert support whenever you need it.", icon: Headphones },
  { value: "99.9%", title: "Uptime", note: "Reliable performance you can trust.", icon: ShieldCheck },
];

export default function PortalImplementationProcessSection({ data }: { data: IndustryPortalPageData }) {
  const isHealthcare = data.industrySlug === "healthcare";

  return (
    <section id="portal-implementation-process" className="relative isolate scroll-mt-[calc(var(--nav-offset)+1rem)] overflow-hidden border-t border-blue-100/70 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_54%,#eef5ff_100%)] px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20 xl:px-12">
      <ImplementationBackground />

      <div className="relative mx-auto w-full max-w-[min(92vw,1440px)]">
        <PortalReveal className="text-center">
          <SectionLabel>Implementation Process</SectionLabel>
          <h2 className="mx-auto mt-4 max-w-5xl text-3xl font-extrabold leading-[1.1] text-[#071538] sm:text-4xl lg:text-5xl">
            Our Proven Implementation Process
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-7 text-[#31466d] sm:text-base">
            {isHealthcare
              ? "A structured, collaborative approach that ensures a smooth, successful, and on-time portal deployment."
              : `A structured, collaborative approach that ensures a smooth and on-time ${data.portalName.toLowerCase()} deployment.`}
          </p>
        </PortalReveal>

        <div className="relative mt-11">
          <div className="absolute left-[6%] right-[6%] top-[39px] hidden h-0.5 bg-blue-100 lg:block" aria-hidden="true" />
          <PortalProgressLine className="absolute left-[6%] right-[6%] top-[39px] hidden h-0.5 bg-[#1257d9] lg:block" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-6 lg:gap-5">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <article key={step.title} className="relative text-center">
                    <div className="relative z-10 mx-auto grid h-20 w-20 place-items-center rounded-full border border-blue-100 bg-white shadow-[0_12px_30px_rgba(30,57,104,0.11)]">
                      <span className="grid h-14 w-14 place-items-center rounded-full bg-blue-700 text-xl font-black text-white shadow-[0_12px_22px_rgba(18,87,217,0.26)]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <span className="mx-auto mt-7 grid h-[72px] w-[72px] place-items-center rounded-full bg-blue-50 text-[#1257d9]">
                      <Icon className="h-9 w-9" aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 text-lg font-extrabold text-[#071538]">{step.title}</h3>
                    <p className="mx-auto mt-2.5 max-w-[180px] text-sm font-medium leading-6 text-[#526684]">{step.description}</p>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-11 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;

            return (
              <PortalReveal key={metric.title} delay={index * 0.04}>
                <article className="flex min-h-[140px] items-center gap-5 rounded-2xl border border-[#dce5f4] bg-white p-5 shadow-[0_16px_40px_rgba(25,52,101,0.07)]">
                  <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-blue-50 text-[#1257d9]">
                    <Icon className="h-8 w-8" aria-hidden="true" />
                  </span>
                  <div className="border-l border-[#dce5f4] pl-5">
                    <p className="text-3xl font-extrabold text-[#071538]">{metric.value}</p>
                    <h3 className="mt-1 text-base font-extrabold text-[#071538]">{metric.title}</h3>
                    <p className="mt-2 text-sm font-medium leading-6 text-[#526684]">{metric.note}</p>
                  </div>
                </article>
              </PortalReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ImplementationBackground() {
  return (
    <>
      <div className="pointer-events-none absolute -left-16 -top-28 h-96 w-96 rounded-full bg-blue-50" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-blue-50" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-8 left-0 h-24 w-28 bg-[radial-gradient(circle,rgba(37,99,235,0.18)_1px,transparent_1.6px)] bg-[size:16px_16px]" aria-hidden="true" />
      <div className="pointer-events-none absolute left-20 top-28 text-blue-100" aria-hidden="true">
        <PlusIcon className="h-20 w-20" />
      </div>
      <div className="pointer-events-none absolute right-16 top-24 text-blue-100" aria-hidden="true">
        <PlusIcon className="h-9 w-9" />
      </div>
    </>
  );
}

function PlusIcon({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M19 5H29V19H43V29H29V43H19V29H5V19H19V5Z" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <span className="text-xs font-black uppercase tracking-[0.22em] text-[#0b57e3]">
      {children}
    </span>
  );
}
