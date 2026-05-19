"use client";

import { useState, type CSSProperties } from "react";
import type { ServiceItem } from "@/data/services";
import {
  ArrowRight,
  CheckCircle2,
  RotateCcw,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import ServiceSectionHeading from "@/components/services/shared/ServiceSectionHeading";
import { getServicePageDetails } from "@/components/services/shared/servicePageDetails";

type ServiceProcessProps = {
  service: ServiceItem;
};

type JourneyKnowledge = {
  label: string;
  headline: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  points: string[];
};

const processPhotos = {
  journey:
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=760&q=85",
  prototype:
    "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=760&q=85",
  backend:
    "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=760&q=85",
  build:
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=760&q=85",
  launch:
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=760&q=85",
};

function getJourneyKnowledge(stepTitle: string, index: number): JourneyKnowledge {
  const title = stepTitle.toLowerCase();

  if (title.includes("journey") || title.includes("mapping")) {
    return {
      label: "Journey Mapping",
      headline: "Define the product path.",
      description: "We map users, actions, and core screens before design.",
      imageUrl: processPhotos.journey,
      imageAlt: "Team planning a product journey on a table",
      points: ["User roles", "Screen flow", "Launch scope"],
    };
  }

  if (
    title.includes("ux") ||
    title.includes("prototype") ||
    title.includes("design")
  ) {
    return {
      label: "UX Prototype",
      headline: "Make the app visible.",
      description: "We design main screens and create a clickable flow.",
      imageUrl: processPhotos.prototype,
      imageAlt: "Designer working on digital interface screens",
      points: ["App screens", "Clickable flow", "UI states"],
    };
  }

  if (
    title.includes("api") ||
    title.includes("backend") ||
    title.includes("setup")
  ) {
    return {
      label: "Backend System",
      headline: "Build the core engine.",
      description: "We structure APIs, data, auth, admin, and integrations.",
      imageUrl: processPhotos.backend,
      imageAlt: "Developer working on backend code",
      points: ["API structure", "Data model", "Secure auth"],
    };
  }

  if (
    title.includes("qa") ||
    title.includes("build") ||
    title.includes("test")
  ) {
    return {
      label: "Build and QA",
      headline: "Turn plans into product.",
      description: "We build, connect, test, and polish the app experience.",
      imageUrl: processPhotos.build,
      imageAlt: "Software developer building an application",
      points: ["App build", "QA testing", "Performance polish"],
    };
  }

  if (
    title.includes("store") ||
    title.includes("launch") ||
    title.includes("release")
  ) {
    return {
      label: "Launch Ready",
      headline: "Prepare for release.",
      description: "We handle store assets, checks, builds, and support.",
      imageUrl: processPhotos.launch,
      imageAlt: "Team preparing a product launch",
      points: ["Release assets", "Final checklist", "Launch support"],
    };
  }

  return {
    label: `Phase ${index + 1}`,
    headline: "Keep the phase clear.",
    description: "We keep scope, quality, and delivery aligned.",
    imageUrl: processPhotos.journey,
    imageAlt: "Team planning project delivery",
    points: ["Clear scope", "Quality check", "Next handoff"],
  };
}

function CardPhoto({
  src,
  alt,
  accentClass,
}: {
  src: string;
  alt: string;
  accentClass: string;
}) {
  return (
    <div className="relative h-[78px] overflow-hidden rounded-[1.15rem] border border-white/80 bg-white shadow-[0_14px_30px_rgba(15,23,42,0.11)] ring-1 ring-slate-200/70 dark:border-white/10 dark:bg-white/10 dark:ring-white/10">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-slate-950/28" />
      <div
        className={`absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r ${accentClass}`}
      />
      <div className="absolute right-2.5 top-2.5 rounded-full border border-white/45 bg-white/22 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white shadow-sm backdrop-blur-md">
        Real work
      </div>
    </div>
  );
}

export default function ServiceProcess({ service }: ServiceProcessProps) {
  const details = getServicePageDetails(service);
  const [hasStarted, setHasStarted] = useState(false);
  const [manualFlip, setManualFlip] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden py-16">
      <style jsx>{`
        @keyframes journeyCardEnter {
          0% {
            opacity: 0;
            transform: translateY(38px) rotateX(-20deg) scale(0.93);
            filter: blur(14px);
          }
          68% {
            opacity: 1;
            transform: translateY(-7px) rotateX(4deg) scale(1.012);
            filter: blur(0);
          }
          100% {
            opacity: 1;
            transform: translateY(0) rotateX(0deg) scale(1);
            filter: blur(0);
          }
        }

        @keyframes journeyAutoFlip {
          0% {
            transform: rotateY(0deg);
          }
          38% {
            transform: rotateY(0deg);
          }
          70% {
            transform: rotateY(188deg);
          }
          100% {
            transform: rotateY(180deg);
          }
        }

        @keyframes journeyLineTravel {
          0% {
            transform: translateX(-18%);
            opacity: 0.18;
          }
          45% {
            opacity: 0.95;
          }
          100% {
            transform: translateX(118%);
            opacity: 0.18;
          }
        }

        @keyframes cardHalo {
          0%,
          100% {
            opacity: 0.08;
            transform: scale(1);
          }
          50% {
            opacity: 0.24;
            transform: scale(1.08);
          }
        }

        @keyframes burstSpark {
          0% {
            opacity: 0;
            transform: translate3d(0, 0, 0) scale(0.35);
          }
          38% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translate3d(var(--spark-x), var(--spark-y), 0)
              scale(1.1);
          }
        }

        @keyframes scanReveal {
          0% {
            opacity: 0;
            transform: translateY(-14px);
          }
          28% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateY(220px);
          }
        }

        @keyframes nodePulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.74;
          }
          50% {
            transform: scale(1.22);
            opacity: 1;
          }
        }

        @keyframes progressFill {
          0% {
            transform: scaleX(0);
          }
          100% {
            transform: scaleX(1);
          }
        }

        @keyframes photoGlow {
          0%,
          100% {
            box-shadow: 0 14px 30px rgba(15, 23, 42, 0.11);
          }
          50% {
            box-shadow: 0 20px 48px rgba(14, 165, 233, 0.22);
          }
        }

        .journey-card-start {
          animation: journeyCardEnter 0.72s ease-out var(--enter-delay) both;
          transform-style: preserve-3d;
        }

        .journey-card-inner-start {
          animation: journeyAutoFlip 1.2s cubic-bezier(0.22, 1, 0.36, 1)
            var(--flip-delay) both;
          transform-style: preserve-3d;
        }

        .journey-card-inner-manual {
          transform: rotateY(180deg);
        }

        .journey-card-inner-front {
          transform: rotateY(0deg);
        }

        .journey-line-glow {
          animation: journeyLineTravel 6.2s ease-in-out infinite;
        }

        .journey-halo {
          animation: cardHalo 3.8s ease-in-out infinite;
        }

        .journey-spark {
          animation: burstSpark 0.8s ease-out var(--spark-delay) both;
        }

        .journey-scan {
          animation: scanReveal 0.95s ease-out var(--scan-delay) both;
        }

        .journey-node {
          animation: nodePulse 2.2s ease-in-out infinite;
        }

        .journey-progress-fill {
          animation: progressFill 5.4s ease-out 0.2s both;
          transform-origin: left;
        }

        .photo-glow {
          animation: photoGlow 2.8s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .journey-card-start,
          .journey-card-inner-start,
          .journey-line-glow,
          .journey-halo,
          .journey-spark,
          .journey-scan,
          .journey-node,
          .journey-progress-fill,
          .photo-glow {
            animation: none;
          }
        }
      `}</style>

      <div className="pointer-events-none absolute inset-x-0 top-16 h-[620px] bg-[radial-gradient(circle_at_16%_18%,rgba(14,165,233,0.12),transparent_34%),radial-gradient(circle_at_78%_20%,rgba(124,58,237,0.12),transparent_34%),radial-gradient(circle_at_54%_78%,rgba(34,211,238,0.08),transparent_32%)] dark:bg-[radial-gradient(circle_at_16%_18%,rgba(56,189,248,0.11),transparent_34%),radial-gradient(circle_at_78%_20%,rgba(139,92,246,0.14),transparent_34%)]" />

      <div className="relative mx-auto w-full max-w-[min(92vw,1440px)] px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <div className="grid gap-6 lg:grid-cols-[0.72fr_1fr] lg:items-end">
          <ServiceSectionHeading
            eyebrow="Process"
            title={details.processTitle}
            description={details.processDescription}
          />

          <motion.div
            initial={{ opacity: 0, y: 18, rotateX: -4 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            onViewportEnter={() => setHasStarted(true)}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{ transformStyle: "preserve-3d" }}
            className="relative overflow-hidden rounded-[1.8rem] border border-white/70 bg-white/78 p-5 shadow-[0_22px_65px_rgba(15,23,42,0.08)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/6 dark:shadow-[0_22px_65px_rgba(0,0,0,0.22)]"
          >
            <div
              className={`pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-gradient-to-br ${service.accent} opacity-[0.12] blur-3xl`}
            />
            <div
              className={`pointer-events-none absolute -bottom-20 left-10 h-44 w-44 rounded-full bg-gradient-to-br ${service.accent} opacity-[0.07] blur-3xl`}
            />

            <div className="relative flex items-start gap-3">
              <span
                className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${service.accent} text-white shadow-[0_14px_34px_rgba(37,99,235,0.16)]`}
                style={{ transform: "translateZ(16px)" }}
              >
                <Sparkles className="h-5 w-5" aria-hidden="true" />
              </span>

              <div style={{ transform: "translateZ(14px)" }}>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#145cb7] dark:text-cyan-200">
                  Guided build journey
                </p>
                <p className="mt-2 text-sm font-normal leading-7 text-slate-600 antialiased dark:text-slate-300">
                  Each phase appears like a storyboard card and flips to show
                  the exact work inside that step.
                </p>
              </div>
            </div>

            <div className="relative mt-5 h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-white/10">
              <span
                className={`absolute inset-y-0 left-0 w-full rounded-full bg-gradient-to-r ${service.accent} ${
                  hasStarted ? "journey-progress-fill" : "scale-x-0"
                }`}
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          className="relative mt-12 [perspective:1600px]"
          viewport={{ once: true, amount: 0.25 }}
          onViewportEnter={() => setHasStarted(true)}
        >
          <div className="pointer-events-none absolute left-0 right-0 top-[4.55rem] hidden h-px overflow-hidden bg-gradient-to-r from-transparent via-sky-200 to-transparent dark:via-cyan-300/20 xl:block">
            <span
              className={`absolute inset-y-0 h-px w-64 bg-gradient-to-r ${service.accent} ${
                hasStarted ? "journey-line-glow" : ""
              }`}
            />
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {details.process.map((step, index) => {
              const knowledge = getJourneyKnowledge(step.title, index);

              const enterDelay = index * 0.36;
              const flipDelay = enterDelay + 0.88;
              const scanDelay = flipDelay + 0.14;
              const isManuallyFlipped = manualFlip === index;
              const isManualFront = manualFlip !== null && manualFlip !== index;

              const cssVars = {
                "--enter-delay": `${enterDelay}s`,
                "--flip-delay": `${flipDelay}s`,
                "--scan-delay": `${scanDelay}s`,
              } as CSSProperties;

              return (
                <article
                  key={`${step.title}-${index}`}
                  style={cssVars}
                  className={`group relative h-[350px] transform-gpu rounded-[1.9rem] transition duration-300 will-change-transform ${
                    hasStarted
                      ? "journey-card-start"
                      : "translate-y-10 opacity-0"
                  }`}
                >
                  <div
                    className={`journey-halo pointer-events-none absolute -inset-3 rounded-[2.15rem] bg-gradient-to-br ${service.accent} opacity-0 blur-2xl transition group-hover:opacity-[0.18]`}
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setManualFlip((current) =>
                        current === index ? null : index
                      )
                    }
                    className="relative h-full w-full text-left [perspective:1600px]"
                    aria-pressed={isManuallyFlipped}
                  >
                    <div
                      className={`relative h-full w-full rounded-[1.9rem] transition-transform duration-700 [transform-style:preserve-3d] ${
                        hasStarted && manualFlip === null
                          ? "journey-card-inner-start"
                          : ""
                      } ${
                        isManuallyFlipped
                          ? "journey-card-inner-manual"
                          : isManualFront
                            ? "journey-card-inner-front"
                            : ""
                      }`}
                    >
                      <div className="absolute inset-0 overflow-hidden rounded-[1.9rem] border border-slate-200 bg-white/88 p-4 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur-2xl [backface-visibility:hidden] dark:border-white/10 dark:bg-white/7 dark:shadow-[0_24px_70px_rgba(0,0,0,0.24)]">
                        <div
                          className={`absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${service.accent} opacity-10 blur-3xl`}
                        />
                        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.72),transparent_46%,rgba(59,130,246,0.06))] dark:bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_48%,rgba(56,189,248,0.06))]" />

                        <div className="relative">
                          <CardPhoto
                            src={knowledge.imageUrl}
                            alt={knowledge.imageAlt}
                            accentClass={service.accent}
                          />

                          <span className="absolute right-2.5 top-2.5 rounded-full border border-white/65 bg-white/78 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-500 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-slate-950/45 dark:text-slate-300">
                            Step {index + 1}
                          </span>
                        </div>

                        <div className="relative mt-4">
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#145cb7] dark:text-cyan-200">
                            Phase {index + 1}
                          </p>

                          <h3 className="mt-1.5 text-xl font-semibold leading-7 tracking-[-0.028em] text-slate-950 antialiased dark:text-white">
                            {step.title}
                          </h3>

                          <p className="mt-2.5 text-sm font-normal leading-6 text-slate-600 antialiased [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3] dark:text-slate-300">
                            {step.description}
                          </p>
                        </div>

                        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
                          <span className="inline-flex items-center gap-2 text-sm font-medium text-[#145cb7] dark:text-cyan-300">
                            <span className="journey-node grid h-5 w-5 place-items-center rounded-full bg-emerald-50 text-emerald-500 dark:bg-emerald-400/10">
                              <CheckCircle2
                                className="h-3.5 w-3.5"
                                aria-hidden="true"
                              />
                            </span>
                            View step
                          </span>

                          <ArrowRight
                            className="h-4 w-4 text-slate-400 transition group-hover:translate-x-1 group-hover:text-[#145cb7]"
                            aria-hidden="true"
                          />
                        </div>
                      </div>

                      <div className="absolute inset-0 overflow-hidden rounded-[1.9rem] border border-sky-200 bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(240,249,255,0.94),rgba(237,233,254,0.58))] p-4 shadow-[0_30px_90px_rgba(14,165,233,0.15)] backdrop-blur-2xl [backface-visibility:hidden] [transform:rotateY(180deg)] dark:border-cyan-300/25 dark:bg-[linear-gradient(135deg,rgba(8,47,73,0.44),rgba(255,255,255,0.07),rgba(88,28,135,0.22))]">
                        <div
                          className={`absolute -right-16 -top-16 h-44 w-44 rounded-full bg-gradient-to-br ${service.accent} opacity-[0.18] blur-3xl`}
                        />
                        <div
                          className={`absolute -bottom-20 left-6 h-36 w-36 rounded-full bg-gradient-to-br ${service.accent} opacity-[0.12] blur-3xl`}
                        />

                        <span className="journey-scan pointer-events-none absolute left-4 right-4 top-4 h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent shadow-[0_0_24px_rgba(34,211,238,0.6)]" />

                        {[
                          ["18%", "16%", "-22px", "-18px", "0s"],
                          ["78%", "18%", "22px", "-20px", "0.06s"],
                          ["86%", "62%", "28px", "24px", "0.12s"],
                          ["18%", "76%", "-28px", "26px", "0.18s"],
                          ["50%", "10%", "0px", "-32px", "0.24s"],
                        ].map(([left, top, x, y, delay]) => (
                          <span
                            key={`${left}-${top}`}
                            className={`journey-spark pointer-events-none absolute h-2 w-2 rounded-full bg-gradient-to-r ${service.accent}`}
                            style={
                              {
                                left,
                                top,
                                "--spark-x": x,
                                "--spark-y": y,
                                "--spark-delay": `calc(${scanDelay}s + ${delay})`,
                              } as CSSProperties
                            }
                          />
                        ))}

                        <div className="relative">
                          <CardPhoto
                            src={knowledge.imageUrl}
                            alt={knowledge.imageAlt}
                            accentClass={service.accent}
                          />

                          <span className="absolute right-2.5 top-2.5 inline-flex items-center gap-1.5 rounded-full border border-white/65 bg-white/82 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-[#145cb7] shadow-sm backdrop-blur-md dark:border-cyan-300/20 dark:bg-slate-950/45 dark:text-cyan-200">
                            <RotateCcw className="h-3.5 w-3.5" />
                            Replay
                          </span>
                        </div>

                        <div className="relative mt-3">
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#145cb7] dark:text-cyan-200">
                            {knowledge.label}
                          </p>

                          <h3 className="mt-1.5 text-lg font-semibold leading-6 tracking-[-0.025em] text-slate-950 antialiased dark:text-white">
                            {knowledge.headline}
                          </h3>

                          <p className="mt-2 text-sm font-normal leading-5 text-slate-600 antialiased [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] dark:text-slate-300">
                            {knowledge.description}
                          </p>
                        </div>

                        <div className="relative mt-3 space-y-1.5">
                          {knowledge.points.map((point) => (
                            <div
                              key={point}
                              className="flex items-center gap-2 rounded-2xl border border-sky-100 bg-white/76 px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm dark:border-cyan-300/15 dark:bg-white/7 dark:text-slate-300"
                            >
                              <span
                                className={`h-2 w-2 shrink-0 rounded-full bg-gradient-to-r ${service.accent}`}
                              />
                              {point}
                            </div>
                          ))}
                        </div>

                        <div
                          className={`absolute inset-x-4 bottom-0 h-1 rounded-t-full bg-gradient-to-r ${service.accent}`}
                        />
                      </div>
                    </div>
                  </button>
                </article>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}