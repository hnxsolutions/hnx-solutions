"use client";

import type { ServiceItem } from "@/data/services";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import ServiceSectionHeading from "@/components/services/shared/ServiceSectionHeading";
import { getServicePageDetails } from "@/components/services/shared/servicePageDetails";

type ServiceDeliverablesGridProps = {
  service: ServiceItem;
};

export default function ServiceDeliverablesGrid({
  service,
}: ServiceDeliverablesGridProps) {
  const details = getServicePageDetails(service);
  const deliverables = details.deliverables.slice(0, 8);
  const sliderItems = [...deliverables, ...deliverables];

  return (
    <section id="what-we-build" className="relative overflow-hidden py-12">
      <style jsx>{`
        @keyframes deliverablesAutoSlide {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }

        @keyframes deliverableCardFloat {
          0%,
          100% {
            transform: translateY(0) rotateX(0deg);
          }
          50% {
            transform: translateY(-8px) rotateX(1.5deg);
          }
        }

        @keyframes deliverableIconPulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.08);
            opacity: 0.92;
          }
        }

        @keyframes deliverableSoftShine {
          0% {
            transform: translateX(-130%) rotate(12deg);
          }
          100% {
            transform: translateX(160%) rotate(12deg);
          }
        }

        .deliverables-slider-track {
          animation: deliverablesAutoSlide 38s linear infinite;
          will-change: transform;
        }

        .deliverables-slider:hover .deliverables-slider-track {
          animation-play-state: paused;
        }

        .deliverable-card {
          transform-style: preserve-3d;
          animation: deliverableCardFloat 5.8s ease-in-out infinite;
        }

        .deliverable-card:nth-child(2n) {
          animation-delay: -1.4s;
        }

        .deliverable-card:nth-child(3n) {
          animation-delay: -2.8s;
        }

        .deliverable-card:nth-child(4n) {
          animation-delay: -4.2s;
        }

        .deliverable-card:hover {
          animation-play-state: paused;
        }

        .deliverable-card:hover .deliverable-icon {
          animation: deliverableIconPulse 1.35s ease-in-out infinite;
        }

        .deliverable-card:hover .deliverable-shine {
          animation: deliverableSoftShine 1.15s ease-out;
        }

        @media (prefers-reduced-motion: reduce) {
          .deliverables-slider-track,
          .deliverable-card,
          .deliverable-card:hover .deliverable-icon,
          .deliverable-card:hover .deliverable-shine {
            animation: none;
          }
        }
      `}</style>

      <div className="pointer-events-none absolute inset-x-0 top-1/2 h-72 -translate-y-1/2 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.08),transparent_55%)]" />
      <div className="pointer-events-none absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-100/40 blur-3xl dark:bg-violet-500/10" />

      <div className="relative mx-auto w-full max-w-[min(92vw,1440px)] px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <div className="grid gap-6 lg:grid-cols-[0.72fr_1fr] lg:items-end">
          <ServiceSectionHeading
            eyebrow="What You Get"
            title={details.deliverableTitle}
            description={details.deliverableDescription}
          />

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.48, ease: "easeOut" }}
            className="relative overflow-hidden rounded-[1.8rem] border border-white/70 bg-white/76 p-5 shadow-[0_22px_65px_rgba(15,23,42,0.08)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/6 dark:shadow-[0_22px_65px_rgba(0,0,0,0.22)]"
          >
            <div
              className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${service.accent} opacity-10 blur-3xl`}
            />

            <div className="relative flex items-start gap-3">
              <span
                className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${service.accent} text-white shadow-[0_14px_34px_rgba(37,99,235,0.16)]`}
              >
                <Sparkles className="h-5 w-5" aria-hidden="true" />
              </span>

              <p className="text-sm font-normal leading-7 text-slate-600 antialiased dark:text-slate-300">
                {details.deliverableNote}
              </p>
            </div>

            <div className="relative mt-4 flex flex-wrap gap-2">
              {service.tags.slice(0, 6).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600 transition hover:-translate-y-0.5 hover:border-sky-200 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-cyan-300/25 dark:hover:bg-white/8"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="deliverables-slider relative mt-10 overflow-hidden py-3"
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-24 bg-gradient-to-r from-[#f8fbff] via-[#f8fbff]/88 to-transparent dark:from-[#050814] dark:via-[#050814]/88" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-24 bg-gradient-to-l from-[#f8fbff] via-[#f8fbff]/88 to-transparent dark:from-[#050814] dark:via-[#050814]/88" />

          <div className="deliverables-slider-track flex w-max gap-4 pb-4 pt-2">
            {sliderItems.map((deliverable, index) => {
              const Icon = deliverable.icon;
              const displayIndex = (index % deliverables.length) + 1;

              return (
                <article
                  key={`${deliverable.title}-${index}`}
                  className="deliverable-card group relative min-h-[260px] w-[360px] shrink-0 overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white/88 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.07)] backdrop-blur-2xl transition duration-300 hover:-translate-y-3 hover:rotate-0 hover:border-sky-200 hover:shadow-[0_30px_90px_rgba(14,165,233,0.16)] dark:border-white/10 dark:bg-white/7 dark:shadow-[0_24px_75px_rgba(0,0,0,0.24)] dark:hover:border-cyan-300/25"
                >
                  <span className="deliverable-shine pointer-events-none absolute -left-24 top-0 z-20 h-full w-20 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.55),transparent)] opacity-0 transition group-hover:opacity-100 dark:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.18),transparent)]" />

                  <div
                    className={`absolute -right-16 -top-16 h-36 w-36 rounded-full bg-gradient-to-br ${service.accent} opacity-10 blur-2xl transition duration-300 group-hover:opacity-25`}
                  />
                  <div
                    className={`absolute -bottom-20 left-6 h-32 w-32 rounded-full bg-gradient-to-br ${service.accent} opacity-0 blur-3xl transition duration-300 group-hover:opacity-12`}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.62),transparent_45%,rgba(59,130,246,0.05))] opacity-70 dark:bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_48%,rgba(56,189,248,0.06))]" />

                  <div className="relative flex items-start justify-between gap-4">
                    <span
                      className={`deliverable-icon grid h-[3.15rem] w-[3.15rem] shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${service.accent} text-white shadow-[0_14px_34px_rgba(37,99,235,0.18)]`}
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>

                    <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-400 transition group-hover:border-sky-200 group-hover:text-[#145cb7] dark:border-white/10 dark:bg-white/6 dark:text-slate-500 dark:group-hover:border-cyan-300/25 dark:group-hover:text-cyan-200">
                      {String(displayIndex).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="relative mt-6 text-xl font-semibold leading-7 tracking-[-0.025em] text-slate-950 antialiased transition group-hover:text-[#145cb7] dark:text-white dark:group-hover:text-cyan-200">
                    {deliverable.title}
                  </h3>

                  <p className="relative mt-3 overflow-hidden text-sm font-normal leading-6 text-slate-600 antialiased [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3] dark:text-slate-300">
                    {deliverable.description}
                  </p>

                  <div className="relative mt-5 flex items-center gap-2 text-sm font-medium text-[#145cb7] antialiased dark:text-cyan-300">
                    <Sparkles
                      className="h-4 w-4 text-emerald-500 transition group-hover:rotate-12 group-hover:scale-110"
                      aria-hidden="true"
                    />
                    Included deliverable
                    <ArrowRight
                      className="h-4 w-4 transition group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </div>

                  <div
                    className={`absolute inset-x-5 bottom-0 h-1 rounded-t-full bg-gradient-to-r ${service.accent} opacity-0 transition duration-300 group-hover:opacity-100`}
                  />
                </article>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}