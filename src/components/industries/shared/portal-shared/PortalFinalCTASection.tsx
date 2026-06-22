import {
  CalendarCheck,
  Cloud,
  Headphones,
  HeartPulse,
  PlayCircle,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import Link from "next/link";
import type { IndustryPortalPageData } from "./portalTypes";

const valueCards = [
  {
    title: "Secure & Compliant",
    description: "Built with enterprise-grade security and fully compliant with healthcare standards.",
    icon: ShieldCheck,
  },
  {
    title: "Scalable & Reliable",
    description: "Designed to grow with your organization and deliver high performance, always.",
    icon: Cloud,
  },
  {
    title: "User-Centric Design",
    description: "Intuitive, accessible, and thoughtfully designed for patients and staff.",
    icon: UserRound,
  },
  {
    title: "Expert Support",
    description: "Partner with a dedicated team that's here to support your success at every step.",
    icon: Headphones,
  },
];

export default function PortalFinalCTASection({ data }: { data: IndustryPortalPageData }) {
  const isHealthcare = data.industrySlug === "healthcare";
  const title = isHealthcare ? "Let's Build a Better Healthcare Portal Together" : data.finalCta.title;
  const description = isHealthcare
    ? "Empower your patients, staff, and operations with a secure, smart, and seamless healthcare portal built for today and ready for tomorrow."
    : data.finalCta.description;

  return (
    <section id="portal-final-cta" className="relative isolate scroll-mt-[calc(var(--nav-offset)+1rem)] overflow-hidden border-t border-blue-100/70 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_56%,#eef5ff_100%)] px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20 xl:px-12">
      <CtaBackground />

      <div className="relative mx-auto w-full max-w-[min(92vw,1320px)] text-center">
        <span className="inline-flex items-center gap-3 rounded-full border border-[#cfe0f5] bg-white/75 px-5 py-2.5 text-xs font-black uppercase tracking-[0.08em] text-[#0b57e3] shadow-[0_12px_28px_rgba(25,52,101,0.06)] sm:px-6">
          <HeartPulse className="h-5 w-5" aria-hidden="true" />
          Ready to Transform Your Healthcare Experience?
        </span>

        <h2 className="mx-auto mt-7 max-w-4xl text-4xl font-extrabold leading-[1.1] text-[#071538] sm:text-5xl lg:text-[3.25rem]">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-base font-medium leading-8 text-[#526684] sm:text-lg">
          {description}
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={data.finalCta.primaryCta.href}
            className="inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-xl bg-blue-700 px-7 text-base font-extrabold text-white shadow-[0_16px_36px_rgba(18,87,217,0.26)] transition hover:-translate-y-0.5 hover:bg-blue-800 sm:w-auto"
          >
            <CalendarCheck className="h-5 w-5" aria-hidden="true" />
            Book a Consultation
          </Link>
          <Link
            href={data.finalCta.secondaryCta.href}
            className="inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-xl border-2 border-blue-700 bg-white/75 px-7 text-base font-extrabold text-blue-700 shadow-[0_14px_30px_rgba(25,52,101,0.08)] transition hover:-translate-y-0.5 hover:bg-blue-50 sm:w-auto"
          >
            <PlayCircle className="h-5 w-5" aria-hidden="true" />
            View Live Demo
          </Link>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {valueCards.map((card) => {
            const Icon = card.icon;

            return (
              <article key={card.title} className="min-h-[220px] rounded-[1.5rem] border border-[#dce5f4] bg-white p-6 shadow-[0_16px_40px_rgba(25,52,101,0.07)]">
                <span className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-blue-50 text-[#1257d9]">
                  <Icon className="h-10 w-10" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-lg font-extrabold text-[#071538]">{card.title}</h3>
                <div className="mx-auto mt-4 h-0.5 w-8 bg-[#0b57e3]" />
                <p className="mt-5 text-sm font-medium leading-6 text-[#31466d]">{card.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CtaBackground() {
  return (
    <>
      <div className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 bg-[radial-gradient(circle,rgba(37,99,235,0.14)_1px,transparent_1.6px)] bg-[size:18px_18px] [mask-image:radial-gradient(ellipse_at_bottom_left,black_0%,transparent_72%)]" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-20 right-0 h-64 w-64 bg-[radial-gradient(circle,rgba(37,99,235,0.14)_1px,transparent_1.6px)] bg-[size:18px_18px] [mask-image:radial-gradient(ellipse_at_bottom_right,black_0%,transparent_72%)]" aria-hidden="true" />
      <svg className="pointer-events-none absolute inset-x-0 bottom-0 h-48 w-full text-blue-200/80" viewBox="0 0 1440 220" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 130 C160 220 330 98 520 150 C720 205 850 210 1020 110 C1180 16 1320 64 1440 88 L1440 220 L0 220 Z" fill="currentColor" opacity="0.5" />
        {Array.from({ length: 8 }).map((_, index) => {
          const y = 82 + index * 9;
          return (
            <path
              key={index}
              d={`M0 ${y} C170 ${y + 90} 330 ${y - 30} 520 ${y + 18} C720 ${y + 72} 840 ${y + 72} 1020 ${y - 20} C1180 ${y - 95} 1320 ${y - 48} 1440 ${y - 25}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              opacity={0.5 - index * 0.04}
            />
          );
        })}
      </svg>
    </>
  );
}
