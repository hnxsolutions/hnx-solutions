"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { IconType } from "react-icons";
import {
  HiAcademicCap,
  HiArrowRight,
  HiBriefcase,
  HiChevronLeft,
  HiChevronRight,
  HiCog,
  HiDeviceMobile,
  HiGlobeAlt,
  HiHeart,
  HiOfficeBuilding,
  HiShieldCheck,
  HiShoppingCart,
  HiSparkles,
  HiTruck,
  HiUserGroup,
  HiViewGrid,
} from "react-icons/hi";
import {
  GradientWord,
  HomeSectionShell,
  SectionBadge,
} from "./HomeSectionPrimitives";

type IndustryTone = "blue" | "cyan" | "violet" | "emerald" | "orange" | "rose";

type IndustrySolution = {
  label: string;
  href: string;
  icon: IconType;
};

type SiteIndustry = {
  title: string;
  description: string;
  icon: IconType;
  image: string;
};

type EnhancedIndustry = {
  title: string;
  description: string;
  image: string;
  href: string;
  icon: IconType;
  tone: IndustryTone;
  solutions: IndustrySolution[];
};

const siteIndustries: SiteIndustry[] = [
  {
    title: "Healthcare",
    description:
      "Streamline patient care, appointments, records and communication.",
    icon: HiHeart,
    image: "/images/industries/crm/healthcare-preview.png",
  },
  {
    title: "Manufacturing",
    description:
      "Connect production, inventory, teams, orders, vendors and workflows.",
    icon: HiCog,
    image: "/images/industries/crm/manufacturing-preview.png",
  },
  {
    title: "Education",
    description:
      "Simplify admissions, learning experiences, student communication and operations.",
    icon: HiAcademicCap,
    image: "/images/industries/crm/education-campus-preview.png",
  },
  {
    title: "Real Estate",
    description:
      "Manage properties, leads, deals and client relationships with confidence.",
    icon: HiOfficeBuilding,
    image: "/images/industries/crm/real-estate-preview.png",
  },
  {
    title: "Retail",
    description:
      "Grow sales, manage inventory, customers and omnichannel experiences.",
    icon: HiShoppingCart,
    image: "/images/industries/crm/retail-preview.png",
  },
  {
    title: "Finance",
    description:
      "Build secure platforms for clients, compliance, reports and relationships.",
    icon: HiBriefcase,
    image: "/images/industries/crm/finance-preview.png",
  },
  {
    title: "Insurance",
    description:
      "Simplify policies, claims, renewals, customer support and agent workflows.",
    icon: HiShieldCheck,
    image: "/images/industries/crm/insurance-preview.png",
  },
  {
    title: "Travel",
    description:
      "Manage bookings, itineraries, customer support and travel experiences.",
    icon: HiSparkles,
    image: "/images/industries/crm/travel-preview.png",
  },
  {
    title: "Automobile",
    description:
      "Manage vehicle sales, service bookings, customer records and operations.",
    icon: HiTruck,
    image: "/images/industries/crm/automobile-preview.png",
  },
  {
    title: "Service Business",
    description:
      "Manage service requests, bookings, technicians, projects and follow-ups.",
    icon: HiBriefcase,
    image: "/images/industries/crm/service-preview.png",
  },
];

const toneOrder: IndustryTone[] = [
  "blue",
  "rose",
  "cyan",
  "violet",
  "emerald",
  "orange",
];

const toneClasses: Record<
  IndustryTone,
  {
    icon: string;
    chip: string;
    activeChip: string;
    cardBorder: string;
    cardShadow: string;
    imageGlow: string;
    dot: string;
    cta: string;
  }
> = {
  blue: {
    icon: "bg-blue-600 text-white shadow-[0_18px_40px_rgba(37,99,235,0.28)]",
    chip: "border-blue-100 bg-white text-blue-700 shadow-[0_10px_24px_rgba(37,99,235,0.08)] hover:border-blue-200 hover:bg-blue-50 hover:shadow-[0_14px_34px_rgba(37,99,235,0.14)]",
    activeChip:
      "border-blue-600 bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-[0_16px_38px_rgba(37,99,235,0.28)]",
    cardBorder: "border-blue-200/90",
    cardShadow: "shadow-[0_30px_90px_rgba(37,99,235,0.16)]",
    imageGlow: "from-blue-500/14 via-transparent to-transparent",
    dot: "bg-blue-600",
    cta: "hover:border-blue-200 hover:text-blue-700",
  },
  cyan: {
    icon: "bg-cyan-500 text-white shadow-[0_18px_40px_rgba(6,182,212,0.25)]",
    chip: "border-cyan-100 bg-white text-cyan-700 shadow-[0_10px_24px_rgba(6,182,212,0.08)] hover:border-cyan-200 hover:bg-cyan-50 hover:shadow-[0_14px_34px_rgba(6,182,212,0.13)]",
    activeChip:
      "border-cyan-500 bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_16px_38px_rgba(6,182,212,0.25)]",
    cardBorder: "border-cyan-200/90",
    cardShadow: "shadow-[0_30px_90px_rgba(6,182,212,0.14)]",
    imageGlow: "from-cyan-500/14 via-transparent to-transparent",
    dot: "bg-cyan-500",
    cta: "hover:border-cyan-200 hover:text-cyan-700",
  },
  violet: {
    icon:
      "bg-violet-600 text-white shadow-[0_18px_40px_rgba(124,58,237,0.28)]",
    chip:
      "border-violet-100 bg-white text-violet-700 shadow-[0_10px_24px_rgba(124,58,237,0.08)] hover:border-violet-200 hover:bg-violet-50 hover:shadow-[0_14px_34px_rgba(124,58,237,0.14)]",
    activeChip:
      "border-violet-600 bg-gradient-to-r from-violet-600 to-blue-600 text-white shadow-[0_16px_38px_rgba(124,58,237,0.28)]",
    cardBorder: "border-violet-200/90",
    cardShadow: "shadow-[0_30px_90px_rgba(124,58,237,0.16)]",
    imageGlow: "from-violet-500/14 via-transparent to-transparent",
    dot: "bg-violet-600",
    cta: "hover:border-violet-200 hover:text-violet-700",
  },
  emerald: {
    icon:
      "bg-emerald-500 text-white shadow-[0_18px_40px_rgba(16,185,129,0.24)]",
    chip:
      "border-emerald-100 bg-white text-emerald-700 shadow-[0_10px_24px_rgba(16,185,129,0.08)] hover:border-emerald-200 hover:bg-emerald-50 hover:shadow-[0_14px_34px_rgba(16,185,129,0.13)]",
    activeChip:
      "border-emerald-500 bg-gradient-to-r from-emerald-500 to-cyan-600 text-white shadow-[0_16px_38px_rgba(16,185,129,0.24)]",
    cardBorder: "border-emerald-200/90",
    cardShadow: "shadow-[0_30px_90px_rgba(16,185,129,0.13)]",
    imageGlow: "from-emerald-500/14 via-transparent to-transparent",
    dot: "bg-emerald-500",
    cta: "hover:border-emerald-200 hover:text-emerald-700",
  },
  orange: {
    icon:
      "bg-orange-500 text-white shadow-[0_18px_40px_rgba(249,115,22,0.24)]",
    chip:
      "border-orange-100 bg-white text-orange-700 shadow-[0_10px_24px_rgba(249,115,22,0.08)] hover:border-orange-200 hover:bg-orange-50 hover:shadow-[0_14px_34px_rgba(249,115,22,0.13)]",
    activeChip:
      "border-orange-500 bg-gradient-to-r from-orange-500 to-rose-500 text-white shadow-[0_16px_38px_rgba(249,115,22,0.24)]",
    cardBorder: "border-orange-200/90",
    cardShadow: "shadow-[0_30px_90px_rgba(249,115,22,0.13)]",
    imageGlow: "from-orange-500/14 via-transparent to-transparent",
    dot: "bg-orange-500",
    cta: "hover:border-orange-200 hover:text-orange-700",
  },
  rose: {
    icon: "bg-rose-500 text-white shadow-[0_18px_40px_rgba(244,63,94,0.24)]",
    chip:
      "border-rose-100 bg-white text-rose-700 shadow-[0_10px_24px_rgba(244,63,94,0.08)] hover:border-rose-200 hover:bg-rose-50 hover:shadow-[0_14px_34px_rgba(244,63,94,0.13)]",
    activeChip:
      "border-rose-500 bg-gradient-to-r from-rose-500 to-violet-600 text-white shadow-[0_16px_38px_rgba(244,63,94,0.24)]",
    cardBorder: "border-rose-200/90",
    cardShadow: "shadow-[0_30px_90px_rgba(244,63,94,0.13)]",
    imageGlow: "from-rose-500/14 via-transparent to-transparent",
    dot: "bg-rose-500",
    cta: "hover:border-rose-200 hover:text-rose-700",
  },
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getImagePositionClass(title: string) {
  const key = title.toLowerCase();

  if (key.includes("manufacturing")) return "object-[center_85%]";
  if (key.includes("healthcare")) return "object-[center_85%]";
  if (key.includes("education")) return "object-[center_85%]";
  if (key.includes("real estate")) return "object-[center_85%]";
  if (key.includes("retail")) return "object-[center_85%]";
  if (key.includes("finance")) return "object-[center_85%]";
  if (key.includes("travel")) return "object-[center_85%]";
  if (key.includes("service")) return "object-[center_85%]";
  if (key.includes("automobile")) return "object-[center_85%]";
  if (key.includes("insurance")) return "object-[center_85%]";

  return "object-[center_85%]";
}

function getIndustrySolutions(title: string): IndustrySolution[] {
  const slug = slugify(title);

  return [
    {
      label: "Website",
      href: `/industries/${slug}/website`,
      icon: HiGlobeAlt,
    },
    {
      label: "Mobile App",
      href: `/industries/${slug}/mobile-app`,
      icon: HiDeviceMobile,
    },
    {
      label: "CRM",
      href: `/industries/${slug}/crm`,
      icon: HiUserGroup,
    },
    {
      label: "Portal",
      href: `/industries/${slug}/portal`,
      icon: HiViewGrid,
    },
    {
      label: "Full Business Suite",
      href: `/industries/${slug}/business-suite`,
      icon: HiSparkles,
    },
  ];
}

function buildIndustries(): EnhancedIndustry[] {
  return siteIndustries.map((industry, index) => {
    const slug = slugify(industry.title);

    return {
      title: industry.title,
      description: industry.description,
      image: industry.image,
      href: `/industries/${slug}`,
      icon: industry.icon,
      tone: toneOrder[index % toneOrder.length],
      solutions: getIndustrySolutions(industry.title),
    };
  });
}

function getRelativeIndex(index: number, activeIndex: number, total: number) {
  let diff = index - activeIndex;

  if (diff > total / 2) diff -= total;
  if (diff < -total / 2) diff += total;

  return diff;
}

function getCardTransform(relativeIndex: number) {
  if (relativeIndex === 0) {
    return "translateX(-50%) translateY(0) scale(1)";
  }

  if (relativeIndex === -1) {
    return "translateX(calc(-50% - 30.5rem)) translateY(2.75rem) scale(0.82)";
  }

  if (relativeIndex === 1) {
    return "translateX(calc(-50% + 30.5rem)) translateY(2.75rem) scale(0.82)";
  }

  return "translateX(-50%) translateY(3rem) scale(0.74)";
}

function getCardStateClasses(relativeIndex: number) {
  if (relativeIndex === 0) return "z-30 opacity-100";
  if (relativeIndex === -1 || relativeIndex === 1) return "z-20 opacity-50";
  return "pointer-events-none z-0 opacity-0";
}

function IndustryFocusCard({
  industry,
  relativeIndex,
  index,
}: {
  industry: EnhancedIndustry;
  relativeIndex: number;
  index: number;
}) {
  const Icon = industry.icon;
  const tone = toneClasses[industry.tone];
  const isActive = relativeIndex === 0;

  return (
    <article
      style={{
        transform: getCardTransform(relativeIndex),
      }}
      className={`absolute left-1/2 top-0 h-[24.75rem] w-[39.5rem] overflow-hidden rounded-[1.35rem] border bg-white transition-all duration-700 ease-out ${tone.cardBorder} ${tone.cardShadow} ${getCardStateClasses(
        relativeIndex,
      )}`}
    >
      <div className="pointer-events-none absolute inset-0 rounded-[1.35rem] bg-gradient-to-br from-white via-white to-blue-50/50" />

      <div
        className={`pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br ${tone.imageGlow} blur-3xl`}
      />
      <div className="pointer-events-none absolute -bottom-24 left-16 h-64 w-64 rounded-full bg-violet-100/65 blur-3xl" />

      <div className="relative mx-3 mt-3 h-[12.35rem] overflow-hidden rounded-[1.05rem] bg-slate-100">
        <Image
          src={industry.image}
          alt={`${industry.title} industry preview`}
          fill
          priority={index < 3}
          sizes="640px"
          className={`object-cover ${getImagePositionClass(industry.title)}`}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-white/22 via-white/6 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-white/55 via-white/22 to-transparent" />
        <div className={`absolute inset-0 bg-gradient-to-br ${tone.imageGlow}`} />
      </div>

      <div
        className={`absolute left-8 top-[10.75rem] grid h-16 w-16 place-items-center rounded-2xl ring-[8px] ring-white ${tone.icon}`}
      >
        <Icon className="text-3xl" />
      </div>

      <div className="relative px-8 pb-6 pt-9">
        <h3 className="text-[1.55rem] font-black tracking-tight text-slate-950">
          {industry.title}
        </h3>

        <p className="mt-2.5 max-w-[34rem] text-sm font-semibold leading-6 text-slate-600">
          {industry.description}
        </p>

        <div className="mt-5 grid overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-[0_18px_42px_rgba(37,99,235,0.09)] sm:grid-cols-5">
          {industry.solutions.map((solution, solutionIndex) => {
            const SolutionIcon = solution.icon;
            const isFirst = solutionIndex === 0;

            return (
              <Link
                key={solution.label}
                href={solution.href}
                tabIndex={isActive ? 0 : -1}
                className={`group/path relative inline-flex h-[3.15rem] items-center justify-center gap-2 border-blue-100 px-2 text-[11px] font-black transition hover:-translate-y-0.5 sm:border-r last:border-r-0 ${
                  isFirst ? tone.activeChip : tone.chip
                }`}
              >
                <SolutionIcon className="text-base transition group-hover/path:scale-110" />
                <span className="whitespace-nowrap">{solution.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </article>
  );
}

function MobileIndustryCard({
  industry,
  index,
}: {
  industry: EnhancedIndustry;
  index: number;
}) {
  const Icon = industry.icon;
  const tone = toneClasses[industry.tone];

  return (
    <article
      className={`relative overflow-hidden rounded-[2rem] border bg-white ${tone.cardBorder} shadow-[0_26px_80px_rgba(37,99,235,0.14)]`}
    >
      <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white via-white to-blue-50/50" />
      <div
        className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br ${tone.imageGlow} blur-3xl`}
      />
      <div className="pointer-events-none absolute -bottom-20 left-8 h-48 w-48 rounded-full bg-violet-100/70 blur-3xl" />

      <div className="relative mx-3 mt-3 h-[17.5rem] overflow-hidden rounded-[1.55rem] bg-slate-100">
        <Image
          src={industry.image}
          alt={`${industry.title} industry preview`}
          fill
          priority={index < 2}
          sizes="92vw"
          className={`object-cover ${getImagePositionClass(industry.title)}`}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-white/16 via-white/4 to-transparent" />
        <div className={`absolute inset-0 bg-gradient-to-br ${tone.imageGlow}`} />
      </div>

      <div
        className={`absolute left-8 top-[16.1rem] grid h-20 w-20 place-items-center rounded-3xl ring-[8px] ring-white ${tone.icon}`}
      >
        <Icon className="text-4xl" />
      </div>

      <div className="relative px-6 pb-7 pt-12">
        <h3 className="text-[1.85rem] font-black tracking-tight text-slate-950">
          {industry.title}
        </h3>

        <p className="mt-4 text-[0.95rem] font-semibold leading-7 text-slate-600">
          {industry.description}
        </p>

        <div className="mt-7 grid grid-cols-2 gap-3">
          {industry.solutions.slice(0, 4).map((solution, solutionIndex) => {
            const SolutionIcon = solution.icon;
            const isFirst = solutionIndex === 0;

            return (
              <Link
                key={solution.label}
                href={solution.href}
                className={`inline-flex h-16 items-center justify-center gap-2 rounded-2xl border px-3 text-sm font-black transition active:scale-[0.98] ${
                  isFirst ? tone.activeChip : tone.chip
                }`}
              >
                <SolutionIcon className="text-xl" />
                <span className="whitespace-nowrap">{solution.label}</span>
              </Link>
            );
          })}

          <Link
            href={industry.solutions[4].href}
            className={`col-span-2 inline-flex h-16 items-center justify-center gap-2 rounded-2xl border px-3 text-sm font-black transition active:scale-[0.98] ${tone.chip}`}
          >
            <HiSparkles className="text-xl text-violet-600" />
            <span>{industry.solutions[4].label}</span>
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function HomeIndustrySolutionsSection() {
  const industries = useMemo(() => buildIndustries(), []);
  const [activeIndex, setActiveIndex] = useState(() => {
    const realEstateIndex = industries.findIndex(
      (industry) => industry.title.toLowerCase() === "real estate",
    );

    return realEstateIndex >= 0 ? realEstateIndex : 0;
  });

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % industries.length);
    }, 4300);

    return () => window.clearInterval(timer);
  }, [industries.length]);

  const activeIndustry = industries[activeIndex];
  const activeTone = toneClasses[activeIndustry.tone];

  const goPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? industries.length - 1 : current - 1,
    );
  };

  const goNext = () => {
    setActiveIndex((current) => (current + 1) % industries.length);
  };

  return (
    <HomeSectionShell>
      <div className="relative overflow-hidden py-6">
        <div className="pointer-events-none absolute left-1/2 top-0 h-56 w-[50rem] -translate-x-1/2 rounded-full bg-blue-100/80 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-violet-100/80 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-cyan-100/60 blur-3xl" />

        <div className="relative mx-auto max-w-3xl text-center">
          <SectionBadge>Industry Solutions</SectionBadge>

          <h2 className="mt-4 text-[2.35rem] font-black leading-[1.05] tracking-[-0.05em] text-slate-950 sm:text-4xl lg:text-[2.65rem] dark:text-white">
            Purpose-built. <GradientWord>Industry-proven.</GradientWord>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm font-semibold leading-6 text-slate-600 sm:text-base dark:text-slate-300">
            Choose an industry, then open the exact solution path your business
            needs — website, app, CRM, portal, or full suite.
          </p>
        </div>

        {/* Desktop carousel - unchanged */}
        <div className="relative mx-auto mt-9 hidden h-[27rem] max-w-[96rem] md:block">
          <button
            type="button"
            aria-label="Previous industry"
            onClick={goPrevious}
            className="absolute left-0 top-[11.8rem] z-40 grid h-14 w-14 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-[0_18px_45px_rgba(15,23,42,0.13)] transition hover:-translate-x-1 hover:text-blue-700"
          >
            <HiChevronLeft className="text-2xl" />
          </button>

          <button
            type="button"
            aria-label="Next industry"
            onClick={goNext}
            className="absolute right-0 top-[11.8rem] z-40 grid h-14 w-14 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-[0_18px_45px_rgba(15,23,42,0.13)] transition hover:translate-x-1 hover:text-blue-700"
          >
            <HiChevronRight className="text-2xl" />
          </button>

          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-44 bg-gradient-to-r from-white via-white/82 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-44 bg-gradient-to-l from-white via-white/82 to-transparent" />

          {industries.map((industry, index) => (
            <IndustryFocusCard
              key={industry.title}
              industry={industry}
              index={index}
              relativeIndex={getRelativeIndex(
                index,
                activeIndex,
                industries.length,
              )}
            />
          ))}
        </div>

        {/* Mobile carousel - new mobile-only layout */}
        <div className="relative mx-auto mt-8 md:hidden">
          <MobileIndustryCard industry={activeIndustry} index={activeIndex} />

          <button
            type="button"
            aria-label="Previous industry"
            onClick={goPrevious}
            className="absolute left-[-0.15rem] top-[16.25rem] z-40 grid h-14 w-14 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-[0_18px_45px_rgba(15,23,42,0.15)] transition active:scale-95"
          >
            <HiChevronLeft className="text-2xl" />
          </button>

          <button
            type="button"
            aria-label="Next industry"
            onClick={goNext}
            className="absolute right-[-0.15rem] top-[16.25rem] z-40 grid h-14 w-14 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-[0_18px_45px_rgba(15,23,42,0.15)] transition active:scale-95"
          >
            <HiChevronRight className="text-2xl" />
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-2 md:mt-1">
          {industries.map((industry, index) => (
            <button
              key={industry.title}
              type="button"
              aria-label={`Show ${industry.title}`}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full border transition-all ${
                index === activeIndex
                  ? `w-8 border-transparent ${activeTone.dot}`
                  : "w-2.5 border-blue-200 bg-white hover:bg-blue-100"
              }`}
            />
          ))}
        </div>

        <div className="mt-7 flex justify-center">
          <Link
            href="/industries"
            className={`inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-7 py-3 text-sm font-black text-slate-800 shadow-[0_14px_34px_rgba(15,23,42,0.08)] transition hover:-translate-y-0.5 ${activeTone.cta}`}
          >
            <HiViewGrid className="text-lg text-slate-700" />
            View all industries
            <HiArrowRight className="text-lg" />
          </Link>
        </div>
      </div>
    </HomeSectionShell>
  );
}