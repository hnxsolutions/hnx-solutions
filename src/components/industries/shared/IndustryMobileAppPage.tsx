"use client";

import { useEffect, useState } from "react";
import { Roboto_Slab } from "next/font/google";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Star } from "lucide-react";
import IndustryMobileAppDemoModal from "./IndustryMobileAppDemoModal";
import IndustryMobileAppPreviewHero from "./mobile-app-shared/IndustryMobileAppPreviewHero";
import MobileAppAdvantageSection from "./mobile-app-shared/MobileAppAdvantageSection";
import MobileAppExperienceGallerySection from "./mobile-app-shared/MobileAppExperienceGallerySection";
import MobileAppIncludesSection from "./mobile-app-shared/MobileAppIncludesSection";
import MobileAppJourneySection from "./mobile-app-shared/MobileAppJourneySection";
import MobileAppProblemsSection from "./mobile-app-shared/MobileAppProblemsSection";
import MobileAppRoleExperienceSection from "./mobile-app-shared/MobileAppRoleExperienceSection";
import MobileAppWorkflowSection from "./mobile-app-shared/MobileAppWorkflowSection";
import {
  getIndustryMobileAppPage,
  type IndustryMobileAppDemo,
  type IndustryMobileAppPageData,
  type IndustryMobileAppPricingPlan,
  type IndustryMobileAppTestimonial,
  type IndustryMobileAppTrustItem,
} from "./industryMobileAppData";

const mobileAppRobotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-mobile-app-roboto-slab",
});

export default function IndustryMobileAppPage({
  industrySlug,
  solutionSlug,
}: {
  industrySlug: string;
  solutionSlug: string;
}) {
  const data = getIndustryMobileAppPage(industrySlug, solutionSlug);
  const [activeDemo, setActiveDemo] = useState<IndustryMobileAppDemo | null>(null);

  if (!data) {
    return null;
  }

  return (
    <main className={`${mobileAppRobotoSlab.className} relative overflow-hidden bg-[#f8fbff] text-slate-950 dark:bg-[#050814] dark:text-white`}>
      <div className="pointer-events-none absolute left-0 top-0 h-[34rem] w-[34rem] rounded-full bg-blue-200/35 blur-3xl dark:bg-blue-500/10" />
      <div className="pointer-events-none absolute right-0 top-20 h-[30rem] w-[30rem] rounded-full bg-violet-200/35 blur-3xl dark:bg-violet-500/10" />

      <section className="relative px-3 pb-0 pt-16 sm:px-6 sm:pb-4 lg:px-8 xl:px-10 2xl:px-12">
        <div className="mx-auto w-full max-w-full sm:max-w-[min(92vw,1440px)]">
          <div className="relative">
            <IndustryMobileAppPreviewHero data={data} />

            <MobileAppProblemsSection data={data} />
            <MobileAppIncludesSection data={data} />
            <MobileAppWorkflowSection data={data} />
            <MobileAppRoleExperienceSection data={data} />
            <MobileAppJourneySection data={data} />
            <MobileAppExperienceGallerySection data={data} onOpenDemo={setActiveDemo} />
            <MobileAppAdvantageSection data={data} />
            <PricingSection data={data} />
            <TestimonialsSection title={data.testimonialsTitle} items={data.testimonials} />
            <TrustSection data={data} />
            <FinalCTASection data={data} />
          </div>
        </div>
      </section>

      {activeDemo ? (
        <IndustryMobileAppDemoModal
          data={data}
          demo={activeDemo}
          onClose={() => setActiveDemo(null)}
        />
      ) : null}
    </main>
  );
}

function PricingSection({ data }: { data: IndustryMobileAppPageData }) {
  const [activePlan, setActivePlan] = useState(0);

  useEffect(() => {
    if (data.pricingPlans.length <= 1) return;

    const timer = window.setInterval(() => {
      setActivePlan((current) => (current + 1) % data.pricingPlans.length);
    }, 2500);

    return () => window.clearInterval(timer);
  }, [data.pricingPlans.length]);

  useEffect(() => {
    setActivePlan(0);
  }, [data.industrySlug]);

  return (
    <section className="border-t border-slate-200 px-0 py-14 dark:border-white/10 sm:py-16 lg:py-[4.5rem]">
      <div className="px-7 sm:px-10 lg:px-12">
        <SectionTitle
          title="Simple, Transparent Mobile App Pricing"
          description={data.pricingDescription}
          center
        />
      </div>

      <div className="mt-16 lg:hidden">
        <div className="overflow-hidden px-3 pt-7">
          <div
            className="flex transition-transform duration-700 ease-out motion-reduce:transition-none"
            style={{ transform: `translateX(-${activePlan * 100}%)` }}
          >
            {data.pricingPlans.map((plan) => (
              <div key={`${plan.name}-mobile`} className="w-full shrink-0">
                <PricingCard plan={plan} mobile />
              </div>
            ))}
          </div>
        </div>

        {data.pricingPlans.length > 1 ? (
          <div className="mt-7 flex items-center justify-center gap-2">
            {data.pricingPlans.map((plan, index) => (
              <button
                key={`${plan.name}-dot`}
                type="button"
                aria-label={`Show ${plan.name} pricing plan`}
                onClick={() => setActivePlan(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activePlan === index
                    ? "w-7 bg-gradient-to-r from-blue-600 to-violet-600"
                    : "w-2.5 bg-slate-300 dark:bg-white/20"
                }`}
              />
            ))}
          </div>
        ) : null}
      </div>

      <div className="mt-14 hidden gap-6 px-7 sm:px-10 lg:grid lg:grid-cols-3 lg:px-12">
        {data.pricingPlans.map((plan) => (
          <PricingCard key={plan.name} plan={plan} />
        ))}
      </div>
    </section>
  );
}

function PricingCard({
  plan,
  mobile = false,
}: {
  plan: IndustryMobileAppPricingPlan;
  mobile?: boolean;
}) {
  const Icon = plan.icon;

  return (
    <article
      className={`relative flex h-full flex-col rounded-[1.6rem] border bg-white px-6 pb-6 pt-6 shadow-sm transition hover:-translate-y-1 dark:bg-white/[0.05] ${
        plan.popular
          ? "border-violet-400 shadow-[0_18px_50px_rgba(124,58,237,0.13)] dark:border-violet-400/60"
          : "border-slate-200 dark:border-white/10"
      } ${plan.popular ? "pt-14" : ""} ${mobile ? "mx-auto max-w-[350px]" : ""}`}
    >
      {plan.popular ? <PopularBadge /> : null}

      <div className="flex items-start gap-4">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-400/10 dark:text-blue-300">
          <Icon className="h-5 w-5" />
        </span>

        <div>
          <h3 className="text-lg font-black text-slate-950 dark:text-white">
            {plan.name}
          </h3>
          <p className="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400">
            {plan.subtitle}
          </p>
        </div>
      </div>

      <div className="mt-6">
        <p className="text-xs font-bold text-slate-500 dark:text-slate-400">
          Starting From
        </p>
        <p className="mt-1 text-3xl font-black text-slate-950 dark:text-white">
          {plan.price}
        </p>
      </div>

      <ul className="mt-5 grid gap-2">
        {plan.features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-3 text-sm font-semibold text-slate-700 dark:text-slate-300"
          >
            <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
            {feature}
          </li>
        ))}
      </ul>

      <Link
        href="/contact"
        className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-5 py-3 text-sm font-black transition hover:-translate-y-0.5 ${
          plan.popular
            ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-[0_14px_38px_rgba(37,99,235,0.24)]"
            : "border border-slate-200 bg-white text-blue-700 dark:border-white/10 dark:bg-white/[0.06] dark:text-blue-300"
        }`}
      >
        Start App Plan
      </Link>
    </article>
  );
}

function TestimonialsSection({
  title,
  items,
}: {
  title: string;
  items: IndustryMobileAppTestimonial[];
}) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    if (items.length <= 1) return;

    const timer = window.setInterval(() => {
      setActiveTestimonial((current) => (current + 1) % items.length);
    }, 2500);

    return () => window.clearInterval(timer);
  }, [items.length]);

  useEffect(() => {
    setActiveTestimonial(0);
  }, [title]);

  return (
    <section className="border-t border-slate-200 px-7 py-14 dark:border-white/10 sm:px-10 sm:py-16 lg:px-12 lg:py-[4.5rem]">
      <SectionTitle title={title} center />

      <div className="mt-14 lg:hidden">
        <div className="overflow-hidden px-1">
          <div
            className="flex transition-transform duration-700 ease-out motion-reduce:transition-none"
            style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
          >
            {items.map((item) => (
              <div key={`${item.name}-mobile`} className="w-full shrink-0">
                <TestimonialCard item={item} mobile />
              </div>
            ))}
          </div>
        </div>

        {items.length > 1 ? (
          <div className="mt-7 flex items-center justify-center gap-2">
            {items.map((item, index) => (
              <button
                key={`${item.name}-dot`}
                type="button"
                aria-label={`Show testimonial from ${item.name}`}
                onClick={() => setActiveTestimonial(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeTestimonial === index
                    ? "w-7 bg-gradient-to-r from-blue-600 to-violet-600"
                    : "w-2.5 bg-slate-300 dark:bg-white/20"
                }`}
              />
            ))}
          </div>
        ) : null}
      </div>

      <div className="mt-14 hidden gap-6 lg:grid lg:grid-cols-3">
        {items.map((item) => (
          <TestimonialCard key={item.name} item={item} />
        ))}
      </div>
    </section>
  );
}

function TestimonialCard({
  item,
  mobile = false,
}: {
  item: IndustryMobileAppTestimonial;
  mobile?: boolean;
}) {
  return (
    <article className={`${mobile ? "mx-auto max-w-[340px]" : ""} rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.05]`}>
      <div className="mb-4 flex gap-1 text-amber-400">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star key={star} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <p className="text-sm leading-6 text-slate-700 dark:text-slate-300">
        &quot;{item.quote}&quot;
      </p>
      <p className="mt-5 text-sm font-black text-slate-950 dark:text-white">
        {item.name}
      </p>
      <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
        {item.role}
      </p>
    </article>
  );
}

function FinalCTASection({ data }: { data: IndustryMobileAppPageData }) {
  return (
    <section className="border-t border-slate-200 px-7 pb-12 pt-14 dark:border-white/10 sm:px-10 sm:pb-14 sm:pt-16 lg:px-12">
      <div className="overflow-hidden rounded-[2rem] bg-slate-950 p-8 text-white shadow-[0_24px_70px_rgba(15,23,42,0.18)] dark:border dark:border-white/10">
        <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-300">
              Mobile App Strategy
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight">
              Build a connected {data.industryName.toLowerCase()} app experience.
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-300">
              We can plan the app screens, user roles, admin dashboard, notifications, launch path, and future scale before development starts.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-7 py-4 text-sm font-black text-white shadow-[0_18px_50px_rgba(37,99,235,0.25)] transition hover:-translate-y-0.5"
          >
            Plan My Mobile App
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function TrustSection({ data }: { data: IndustryMobileAppPageData }) {
  const orbitPositions = [
    "left-1/2 top-0 -translate-x-1/2",
    "right-0 top-[72px]",
    "bottom-[42px] right-[16px]",
    "bottom-0 left-1/2 -translate-x-1/2",
    "left-0 top-[72px]",
  ];

  return (
    <section className="border-t border-slate-200 px-7 pb-16 pt-14 dark:border-white/10 sm:px-10 sm:pb-[4.5rem] sm:pt-16 lg:px-12 lg:pb-20 lg:pt-[4.5rem]">
      <SectionTitle
        title={data.trustTitle}
        description={data.trustDescription}
        center
      />

      <div className="mt-14 sm:hidden">
        <div className="relative mx-auto h-[320px] w-[320px] max-w-full">
          <div className="absolute inset-3 rounded-full bg-gradient-to-br from-blue-50 via-white to-violet-50 shadow-[0_24px_70px_rgba(37,99,235,0.10)] dark:from-white/[0.04] dark:via-white/[0.03] dark:to-violet-400/10" />
          <div className="absolute inset-8 rounded-full border border-dashed border-blue-200 dark:border-blue-400/20" />
          <div className="absolute inset-16 rounded-full border border-slate-200 bg-white/80 backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.05]" />

          <div className="absolute left-1/2 top-1/2 z-20 grid h-[104px] w-[104px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-gradient-to-br from-blue-600 to-violet-600 text-center text-white shadow-[0_22px_55px_rgba(37,99,235,0.28)]">
            <div>
              <ShieldCheck className="mx-auto h-7 w-7" />
              <p className="mt-2 text-[11px] font-black leading-4">
                Secure
                <br />
                Mobile App
              </p>
            </div>
          </div>

          <div className="industry-mobile-trust-orbit absolute inset-0 z-10">
            {data.trustItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={`${item.title}-mobile-orbit`}
                  className={[
                    "absolute",
                    orbitPositions[index % orbitPositions.length],
                  ].join(" ")}
                >
                  <div className="industry-mobile-trust-counter">
                    <div className="w-[92px] rounded-2xl border border-slate-200 bg-white/95 p-2.5 text-center shadow-[0_16px_40px_rgba(15,23,42,0.09)] backdrop-blur dark:border-white/10 dark:bg-[#111111]/95">
                      <span className="mx-auto grid h-10 w-10 place-items-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-400/10 dark:text-blue-300">
                        <Icon className="h-4 w-4" />
                      </span>
                      <p className="mt-2 text-[10px] font-black leading-4 text-slate-700 dark:text-slate-300">
                        {item.title}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-14 hidden gap-5 sm:grid sm:grid-cols-2 lg:grid-cols-5">
        {data.trustItems.map((item) => (
          <TrustItem key={item.title} item={item} />
        ))}
      </div>

      <style jsx>{`
        @keyframes industryMobileTrustOrbit {
          0% {
            transform: rotate(0deg);
          }

          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes industryMobileTrustCounterOrbit {
          0% {
            transform: rotate(0deg);
          }

          100% {
            transform: rotate(-360deg);
          }
        }

        .industry-mobile-trust-orbit {
          animation: industryMobileTrustOrbit 20s linear infinite;
          transform-origin: center;
        }

        .industry-mobile-trust-counter {
          animation: industryMobileTrustCounterOrbit 20s linear infinite;
          transform-origin: center;
        }

        .industry-mobile-trust-orbit:hover,
        .industry-mobile-trust-orbit:focus-within {
          animation-play-state: paused;
        }

        .industry-mobile-trust-orbit:hover .industry-mobile-trust-counter,
        .industry-mobile-trust-orbit:focus-within .industry-mobile-trust-counter {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .industry-mobile-trust-orbit,
          .industry-mobile-trust-counter {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}

function TrustItem({ item }: { item: IndustryMobileAppTrustItem }) {
  const Icon = item.icon;

  return (
    <div className="text-center">
      <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-400/10 dark:text-blue-300">
        <Icon className="h-5 w-5" />
      </span>
      <p className="mt-3 text-xs font-black text-slate-700 dark:text-slate-300">
        {item.title}
      </p>
    </div>
  );
}

function SectionTitle({
  title,
  description,
  center = false,
}: {
  title: string;
  description?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "text-center" : ""}>
      <h2 className="text-xl font-black text-slate-950 dark:text-white">
        {title}
      </h2>
      {description ? (
        <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-slate-500 dark:text-slate-400">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function PopularBadge() {
  return (
    <span className="absolute left-1/2 top-4 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-2 text-xs font-black text-white shadow-[0_12px_28px_rgba(37,99,235,0.24)]">
      Most Popular
    </span>
  );
}
