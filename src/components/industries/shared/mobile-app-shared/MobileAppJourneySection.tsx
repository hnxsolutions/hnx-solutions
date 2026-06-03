"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import type { LucideIcon } from "lucide-react";
import type { IndustryMobileAppPageData } from "../industryMobileAppData";
import { MobileAppSectionShell } from "./mobileAppSectionUtils";

type JourneyTone = {
  ring: string;
  bg: string;
  icon: string;
  number: string;
};

const journeyTones: JourneyTone[] = [
  {
    ring: "border-blue-100",
    bg: "bg-blue-50",
    icon: "text-blue-600",
    number: "text-blue-600",
  },
  {
    ring: "border-violet-100",
    bg: "bg-violet-50",
    icon: "text-violet-600",
    number: "text-violet-600",
  },
  {
    ring: "border-emerald-100",
    bg: "bg-emerald-50",
    icon: "text-emerald-600",
    number: "text-emerald-600",
  },
  {
    ring: "border-amber-100",
    bg: "bg-amber-50",
    icon: "text-amber-600",
    number: "text-amber-500",
  },
  {
    ring: "border-rose-100",
    bg: "bg-rose-50",
    icon: "text-rose-600",
    number: "text-rose-500",
  },
];

function JourneyIcon({
  icon: Icon,
  tone,
}: {
  icon: LucideIcon;
  tone: JourneyTone;
}) {
  return (
    <div
      className={[
        "relative z-20 mx-auto flex h-24 w-24 items-center justify-center rounded-full border-2 bg-white shadow-[0_14px_34px_rgba(15,23,42,0.05)]",
        tone.ring,
      ].join(" ")}
    >
      <div
        className={[
          "flex h-16 w-16 items-center justify-center rounded-full",
          tone.bg,
        ].join(" ")}
      >
        <Icon className={["h-8 w-8", tone.icon].join(" ")} />
      </div>
    </div>
  );
}

export default function MobileAppJourneySection({
  data,
}: {
  data: IndustryMobileAppPageData;
}) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [animateJourney, setAnimateJourney] = useState(false);
  const [activeJourneyIndex, setActiveJourneyIndex] = useState(0);
  const steps = data.flowSteps.slice(0, 5);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section || animateJourney) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;

        setAnimateJourney(true);
        observer.disconnect();
      },
      {
        root: null,
        rootMargin: "-32% 0px -24% 0px",
        threshold: 0.01,
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [animateJourney]);

  useEffect(() => {
    const scroller = scrollRef.current;

    if (!scroller) return;

    const updateActiveJourneyIndex = () => {
      const cards = Array.from(
        scroller.querySelectorAll<HTMLElement>("[data-journey-card]"),
      );

      if (!cards.length) return;

      const viewportCenter = scroller.scrollLeft + scroller.clientWidth / 2;
      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      cards.forEach((card, index) => {
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const distance = Math.abs(cardCenter - viewportCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveJourneyIndex(closestIndex);
    };

    updateActiveJourneyIndex();

    scroller.addEventListener("scroll", updateActiveJourneyIndex, {
      passive: true,
    });
    window.addEventListener("resize", updateActiveJourneyIndex);

    return () => {
      scroller.removeEventListener("scroll", updateActiveJourneyIndex);
      window.removeEventListener("resize", updateActiveJourneyIndex);
    };
  }, [steps.length]);

  const scrollToJourneyStep = (index: number) => {
    const scroller = scrollRef.current;
    const card = scroller?.querySelector<HTMLElement>(
      `[data-journey-card="${index}"]`,
    );

    if (!scroller || !card) return;

    scroller.scrollTo({
      left: card.offsetLeft - 12,
      behavior: "smooth",
    });
  };

  return (
    <MobileAppSectionShell className="border-0 py-6 sm:py-8 lg:py-8 xl:py-8">
      <section
        ref={sectionRef}
        className="relative overflow-hidden bg-white py-6 dark:bg-slate-950 lg:py-8"
      >
        <div
          className="mx-auto max-w-3xl text-center"
          style={{
            opacity: animateJourney ? 1 : 0,
            transform: animateJourney
              ? "translate3d(0, 0, 0)"
              : "translate3d(0, 24px, 0)",
            transition:
              "opacity 620ms ease-out, transform 620ms cubic-bezier(0.2, 0.9, 0.24, 1.08)",
            willChange: "opacity, transform",
          }}
        >
          <h2 className="text-[2rem] font-black leading-tight tracking-[-0.025em] text-slate-950 dark:text-white sm:text-[2.35rem]">
            App Journey / How It Works
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-[0.95rem] font-semibold leading-6 text-slate-600 dark:text-slate-300">
            {data.flowTitle}
          </p>
        </div>

        <div
          ref={scrollRef}
          className="mt-9 overflow-x-auto pb-3 [scrollbar-width:none] xl:overflow-visible [&::-webkit-scrollbar]:hidden"
        >
          <div className="flex min-w-max snap-x snap-mandatory gap-5 px-1 pr-10 xl:grid xl:min-w-0 xl:grid-cols-5 xl:gap-0 xl:px-0 xl:pr-0">
            {steps.map((step, index) => {
              const tone = journeyTones[index % journeyTones.length];

              return (
                <article
                  key={`${step.title}-${index}`}
                  data-journey-card={index}
                  className="relative w-[78vw] max-w-[250px] shrink-0 snap-center overflow-visible text-center xl:w-auto xl:max-w-none"
                  style={
                    {
                      opacity: animateJourney ? 1 : 0,
                      transform: animateJourney
                        ? "translate3d(0, 0, 0) scale(1)"
                        : "translate3d(0, 0, 0) scale(0.82)",
                      transition: [
                        `opacity 560ms ease-out ${220 + index * 210}ms`,
                        `transform 720ms cubic-bezier(0.17, 0.95, 0.24, 1.18) ${
                          220 + index * 210
                        }ms`,
                      ].join(", "),
                      willChange: "opacity, transform",
                    } as CSSProperties
                  }
                >
                  {index > 0 ? (
                    <span
                      className="pointer-events-none absolute left-[-2.25rem] top-12 hidden h-[2px] w-[4.5rem] origin-left bg-gradient-to-r from-blue-200 via-violet-200 to-transparent xl:block"
                      style={{
                        transform: animateJourney ? "scaleX(1)" : "scaleX(0)",
                        opacity: animateJourney ? 1 : 0,
                        transition: `transform 520ms ease-out ${
                          420 + index * 210
                        }ms, opacity 520ms ease-out ${420 + index * 210}ms`,
                      }}
                    />
                  ) : null}

                  <div
                    style={{
                      transform: animateJourney
                        ? "translate3d(0, 0, 0) rotate(0deg)"
                        : "translate3d(0, -34px, 0) rotate(-10deg)",
                      transition: `transform 780ms cubic-bezier(0.16, 0.95, 0.24, 1.18) ${
                        220 + index * 210
                      }ms`,
                    }}
                  >
                    <JourneyIcon icon={step.icon} tone={tone} />
                  </div>

                  <p
                    className={[
                      "mt-5 text-[0.95rem] font-black leading-none tracking-[0.08em]",
                      tone.number,
                    ].join(" ")}
                    style={{
                      opacity: animateJourney ? 1 : 0,
                      transform: animateJourney
                        ? "translateY(0)"
                        : "translateY(10px)",
                      transition: `opacity 480ms ease-out ${
                        480 + index * 210
                      }ms, transform 480ms ease-out ${480 + index * 210}ms`,
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3
                    className="mt-4 text-[1.25rem] font-black leading-7 tracking-tight text-slate-950 dark:text-white"
                    style={{
                      opacity: animateJourney ? 1 : 0,
                      transform: animateJourney
                        ? "translateY(0)"
                        : "translateY(14px)",
                      transition: `opacity 520ms ease-out ${
                        540 + index * 210
                      }ms, transform 520ms ease-out ${540 + index * 210}ms`,
                    }}
                  >
                    {step.title}
                  </h3>

                  <p
                    className="mx-auto mt-3 max-w-[175px] text-[0.95rem] font-medium leading-7 text-slate-600 dark:text-slate-300"
                    style={{
                      opacity: animateJourney ? 1 : 0,
                      transform: animateJourney
                        ? "translateY(0)"
                        : "translateY(16px)",
                      transition: `opacity 560ms ease-out ${
                        600 + index * 210
                      }ms, transform 560ms ease-out ${600 + index * 210}ms`,
                    }}
                  >
                    {step.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-4 flex flex-col items-center justify-center gap-3 xl:hidden">
          <p className="text-[0.68rem] font-black uppercase tracking-[0.22em] text-blue-600 dark:text-blue-300">
            Step {String(activeJourneyIndex + 1).padStart(2, "0")} of{" "}
            {String(steps.length).padStart(2, "0")}
          </p>

          <div className="flex items-center justify-center gap-2">
            {steps.map((step, index) => (
              <button
                key={`${step.title}-journey-dot`}
                type="button"
                aria-label={`Show journey step ${index + 1}`}
                aria-current={activeJourneyIndex === index ? "step" : undefined}
                onClick={() => scrollToJourneyStep(index)}
                className={[
                  "h-2.5 rounded-full transition-all duration-300",
                  activeJourneyIndex === index
                    ? "w-8 bg-blue-600 shadow-[0_6px_16px_rgba(37,99,235,0.3)]"
                    : "w-2.5 bg-slate-300 hover:bg-slate-400 dark:bg-white/20 dark:hover:bg-white/35",
                ].join(" ")}
              />
            ))}
          </div>
        </div>
      </section>
    </MobileAppSectionShell>
  );
}
