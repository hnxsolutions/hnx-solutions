"use client";

import { useEffect, useRef, useState } from "react";
import type { IconType } from "react-icons";
import {
  HiArrowRight,
  HiClipboardCheck,
  HiCode,
  HiPaperAirplane,
  HiPencilAlt,
  HiSearch,
  HiShieldCheck,
} from "react-icons/hi";
import {
  GradientWord,
  HomeSectionShell,
  IconBubble,
  SectionBadge,
} from "./HomeSectionPrimitives";

type ProcessTone = "blue" | "violet" | "pink" | "orange" | "green";

type ProcessStep = {
  number: string;
  title: string;
  description: string;
  icon: IconType;
  tone: ProcessTone;
};

const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your ideas, audience, goals, and business needs.",
    icon: HiSearch,
    tone: "blue",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We define scope, features, timeline, and the right execution roadmap.",
    icon: HiClipboardCheck,
    tone: "violet",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We create clean, intuitive UI/UX that feels modern and usable.",
    icon: HiPencilAlt,
    tone: "pink",
  },
  {
    number: "04",
    title: "Develop",
    description:
      "We build fast, secure, scalable solutions with clean code.",
    icon: HiCode,
    tone: "orange",
  },
  {
    number: "05",
    title: "Deliver",
    description:
      "We test, launch, and support your product for long-term growth.",
    icon: HiPaperAirplane,
    tone: "green",
  },
];

const cardDelayClasses = [
  "delay-0",
  "delay-[520ms]",
  "delay-[1040ms]",
  "delay-[1560ms]",
  "delay-[2080ms]",
];

const connectorDelayClasses = [
  "delay-[340ms]",
  "delay-[860ms]",
  "delay-[1380ms]",
  "delay-[1900ms]",
  "delay-[2420ms]",
];

const mobileDelayClasses = [
  "delay-0",
  "delay-[950ms]",
  "delay-[1900ms]",
  "delay-[2850ms]",
  "delay-[3800ms]",
];

const mobileStackClasses = [
  "z-10 translate-y-0 scale-[0.94] rotate-[-2deg]",
  "z-20 translate-y-2 scale-[0.955] rotate-[1.5deg]",
  "z-30 translate-y-4 scale-[0.97] rotate-[-1deg]",
  "z-40 translate-y-6 scale-[0.985] rotate-[1deg]",
  "z-50 translate-y-8 scale-100 rotate-0",
];

const toneClasses: Record<
  ProcessTone,
  {
    text: string;
    border: string;
    glow: string;
    icon: string;
    mobileIcon: string;
    line: string;
    dot: string;
    cardGlow: string;
  }
> = {
  blue: {
    text: "text-blue-600",
    border: "border-blue-200",
    glow: "shadow-[0_20px_54px_rgba(37,99,235,0.12)]",
    icon: "bg-linear-to-br from-sky-400 via-blue-500 to-blue-700 text-white shadow-[0_0_0_8px_rgba(59,130,246,0.08),0_18px_42px_rgba(37,99,235,0.38)]",
    mobileIcon:
      "bg-linear-to-br from-sky-400 via-blue-500 to-blue-700 text-white shadow-[0_14px_34px_rgba(37,99,235,0.3)]",
    line: "bg-blue-600",
    dot: "bg-blue-600",
    cardGlow: "bg-blue-500/14",
  },
  violet: {
    text: "text-violet-600",
    border: "border-violet-200",
    glow: "shadow-[0_20px_54px_rgba(124,58,237,0.12)]",
    icon: "bg-linear-to-br from-fuchsia-400 via-violet-500 to-indigo-700 text-white shadow-[0_0_0_8px_rgba(124,58,237,0.08),0_18px_42px_rgba(124,58,237,0.38)]",
    mobileIcon:
      "bg-linear-to-br from-fuchsia-400 via-violet-500 to-indigo-700 text-white shadow-[0_14px_34px_rgba(124,58,237,0.3)]",
    line: "bg-violet-600",
    dot: "bg-violet-600",
    cardGlow: "bg-violet-500/14",
  },
  pink: {
    text: "text-pink-600",
    border: "border-pink-200",
    glow: "shadow-[0_20px_54px_rgba(219,39,119,0.12)]",
    icon: "bg-linear-to-br from-pink-400 via-fuchsia-500 to-rose-600 text-white shadow-[0_0_0_8px_rgba(236,72,153,0.08),0_18px_42px_rgba(219,39,119,0.36)]",
    mobileIcon:
      "bg-linear-to-br from-pink-400 via-fuchsia-500 to-rose-600 text-white shadow-[0_14px_34px_rgba(219,39,119,0.28)]",
    line: "bg-pink-500",
    dot: "bg-pink-500",
    cardGlow: "bg-pink-500/14",
  },
  orange: {
    text: "text-orange-500",
    border: "border-orange-200",
    glow: "shadow-[0_20px_54px_rgba(249,115,22,0.12)]",
    icon: "bg-linear-to-br from-amber-300 via-orange-500 to-red-500 text-white shadow-[0_0_0_8px_rgba(249,115,22,0.08),0_18px_42px_rgba(249,115,22,0.34)]",
    mobileIcon:
      "bg-linear-to-br from-amber-300 via-orange-500 to-red-500 text-white shadow-[0_14px_34px_rgba(249,115,22,0.28)]",
    line: "bg-orange-500",
    dot: "bg-orange-500",
    cardGlow: "bg-orange-500/14",
  },
  green: {
    text: "text-emerald-500",
    border: "border-emerald-200",
    glow: "shadow-[0_20px_54px_rgba(16,185,129,0.12)]",
    icon: "bg-linear-to-br from-lime-300 via-emerald-500 to-green-700 text-white shadow-[0_0_0_8px_rgba(16,185,129,0.08),0_18px_42px_rgba(16,185,129,0.34)]",
    mobileIcon:
      "bg-linear-to-br from-lime-300 via-emerald-500 to-green-700 text-white shadow-[0_14px_34px_rgba(16,185,129,0.28)]",
    line: "bg-emerald-500",
    dot: "bg-emerald-500",
    cardGlow: "bg-emerald-500/14",
  },
};

function ProcessCard({
  step,
  index,
  hasEnteredView,
}: {
  step: ProcessStep;
  index: number;
  hasEnteredView: boolean;
}) {
  const Icon = step.icon;
  const tone = toneClasses[step.tone];

  return (
    <article
      className={`group relative h-[15.8rem] overflow-visible border bg-white/92 p-px backdrop-blur-xl transition-all duration-700 ease-out [clip-path:polygon(0_0,88%_0,100%_50%,88%_100%,0_100%)] dark:bg-white/4.5 ${
        tone.border
      } ${tone.glow} ${cardDelayClasses[index]} ${
        hasEnteredView
          ? "translate-y-0 scale-100 opacity-100"
          : "translate-y-7 scale-[0.96] opacity-0"
      }`}
    >
      <div className="relative flex h-full flex-col justify-between bg-linear-to-br from-white via-white to-slate-50/70 px-5 py-5 [clip-path:polygon(0_0,88%_0,100%_50%,88%_100%,0_100%)] dark:from-white/6 dark:via-white/4.5 dark:to-white/2.5">
        <div
          className={`pointer-events-none absolute -left-6 -top-6 h-24 w-24 rounded-full blur-3xl ${tone.cardGlow}`}
        />
        <div className="pointer-events-none absolute -bottom-10 left-4 h-20 w-20 rounded-full bg-violet-100/50 blur-3xl dark:bg-violet-500/10" />

        <div className="flex items-start justify-between gap-3">
          <IconBubble
            tone="violet"
            className={`h-[3.25rem] w-[3.25rem] rounded-2xl ${tone.icon}`}
          >
            <Icon className="text-2xl" />
          </IconBubble>

          <span className={`text-xl font-black ${tone.text}`}>
            {step.number}
          </span>
        </div>

        <div>
          <h3 className="text-[1.15rem] font-black tracking-tight text-slate-950 dark:text-white">
            {step.title}
          </h3>

          <div className={`mt-3 h-0.5 w-9 rounded-full ${tone.line}`} />

          <p className="mt-3 max-w-50 text-[13px] font-semibold leading-5 text-slate-600 dark:text-slate-300">
            {step.description}
          </p>
        </div>

        <span
          className={`grid h-8 w-8 place-items-center rounded-full border border-white/80 bg-white text-sm shadow-[0_10px_24px_rgba(15,23,42,0.09)] transition group-hover:translate-x-1 ${tone.text}`}
        >
          <HiArrowRight />
        </span>
      </div>

      {index < processSteps.length - 1 && (
        <div
          className={`absolute -right-4 top-1/2 z-30 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full border border-white bg-white shadow-[0_12px_26px_rgba(15,23,42,0.1)] transition-all duration-500 ${connectorDelayClasses[index]} ${
            hasEnteredView ? "scale-100 opacity-100" : "scale-50 opacity-0"
          }`}
        >
          <span
            className={`h-2.5 w-2.5 rounded-full ${tone.dot} shadow-[0_0_0_6px_rgba(99,102,241,0.1)]`}
          />
        </div>
      )}
    </article>
  );
}

function MobileStackCard({
  step,
  index,
  hasEnteredView,
}: {
  step: ProcessStep;
  index: number;
  hasEnteredView: boolean;
}) {
  const Icon = step.icon;
  const tone = toneClasses[step.tone];

  return (
    <article
      className={`absolute inset-x-0 top-0 rounded-[1.35rem] border bg-white/95 p-4 shadow-[0_20px_54px_rgba(15,23,42,0.12)] backdrop-blur transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] dark:bg-slate-950/90 ${
        tone.border
      } ${mobileDelayClasses[index]} ${
        hasEnteredView
          ? `${mobileStackClasses[index]} opacity-100`
          : "-translate-y-28 scale-95 rotate-0 opacity-0"
      }`}
    >
      <div
        className={`pointer-events-none absolute inset-x-8 -top-8 h-20 rounded-full blur-3xl ${tone.cardGlow}`}
      />

      <div className="relative flex items-start gap-4">
        <IconBubble
          tone="violet"
          className={`h-13 w-13 shrink-0 rounded-2xl ${tone.mobileIcon}`}
        >
          <Icon className="text-2xl" />
        </IconBubble>

        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <span className={`text-sm font-black ${tone.text}`}>
              {step.number}
            </span>
            <div className={`h-0.5 w-8 rounded-full ${tone.line}`} />
          </div>

          <h3 className="mt-1 text-xl font-black text-slate-950 dark:text-white">
            {step.title}
          </h3>

          <p className="mt-2 text-sm font-semibold leading-6 text-slate-600 dark:text-slate-300">
            {step.description}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function HomeProcessSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [hasEnteredView, setHasEnteredView] = useState(false);

  useEffect(() => {
    const currentSection = sectionRef.current;

    if (!currentSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEnteredView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.25,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    observer.observe(currentSection);

    return () => observer.disconnect();
  }, []);

  return (
    <HomeSectionShell>
      <section ref={sectionRef} className="relative overflow-hidden py-2">
        <div className="pointer-events-none absolute left-1/2 top-0 h-100 w-232 -translate-x-1/2 rounded-full border border-blue-100/70 bg-blue-50/20 blur-[1px] dark:border-white/10 dark:bg-blue-500/5" />
        <div className="pointer-events-none absolute left-0 top-28 h-52 w-52 rounded-full bg-blue-100/40 blur-3xl dark:bg-blue-500/10" />
        <div className="pointer-events-none absolute right-0 top-28 h-52 w-52 rounded-full bg-violet-100/45 blur-3xl dark:bg-violet-500/10" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-linear-to-t from-blue-50/45 to-transparent dark:from-blue-500/5" />

        <div className="relative mx-auto max-w-3xl text-center">
          <SectionBadge>Our Process</SectionBadge>

          <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.05em] text-slate-950 sm:text-4xl lg:text-[3rem] dark:text-white">
            How <GradientWord>HNX</GradientWord> Build
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm font-semibold leading-6 text-slate-600 sm:text-base dark:text-slate-300">
            From concept to launch, we follow a proven process to deliver
            impactful digital solutions.
          </p>
        </div>

        <div className="relative mt-10 hidden grid-cols-5 gap-5 lg:grid">
          {processSteps.map((step, index) => (
            <ProcessCard
              key={step.title}
              step={step}
              index={index}
              hasEnteredView={hasEnteredView}
            />
          ))}
        </div>

        <div className="relative mx-auto mt-7 h-[11.25rem] max-w-md lg:hidden">
          {processSteps.map((step, index) => (
            <MobileStackCard
              key={step.title}
              step={step}
              index={index}
              hasEnteredView={hasEnteredView}
            />
          ))}
        </div>

        <div
          className={`relative mx-auto mt-4 max-w-2xl rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 shadow-[0_14px_34px_rgba(15,23,42,0.05)] backdrop-blur transition-all delay-[4700ms] duration-700 dark:border-white/10 dark:bg-white/4.5 ${
            hasEnteredView
              ? "translate-y-0 opacity-100"
              : "translate-y-5 opacity-0"
          }`}
        >
          <div className="flex flex-col items-center justify-center gap-3 text-center sm:flex-row">
            <span className="grid h-10 w-10 place-items-center rounded-full border border-blue-100 bg-white text-blue-600 shadow-[0_10px_24px_rgba(37,99,235,0.09)] dark:border-white/10 dark:bg-white/6">
              <HiShieldCheck className="text-xl" />
            </span>

            <p className="text-sm font-semibold leading-6 text-slate-600 dark:text-slate-300">
              Transparent. Collaborative. Results-driven.
            </p>

            <span className="hidden h-7 w-px bg-slate-200 sm:block dark:bg-white/10" />

            <p className="text-sm font-black text-blue-600 dark:text-blue-300">
              Built for long-term impact.
            </p>
          </div>
        </div>
      </section>
    </HomeSectionShell>
  );
}