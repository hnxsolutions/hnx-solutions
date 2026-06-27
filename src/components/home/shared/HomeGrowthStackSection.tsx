"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { IconType } from "react-icons";
import {
  HiArrowRight,
  HiBeaker,
  HiChatAlt2,
  HiDeviceMobile,
  HiDocumentText,
  HiLink,
  HiMail,
  HiOutlineGlobeAlt,
  HiPhone,
  HiPuzzle,
  HiShare,
  HiSparkles,
  HiThumbUp,
  HiUserGroup,
} from "react-icons/hi";

type OutputTone = "blue" | "green" | "violet" | "orange" | "rose";

const channelsIn: Array<{ title: string; icon: IconType }> = [
  { title: "Website", icon: HiOutlineGlobeAlt },
  { title: "Forms", icon: HiDocumentText },
  { title: "Social Ads", icon: HiThumbUp },
  { title: "Email", icon: HiMail },
  { title: "Phone", icon: HiPhone },
  { title: "Live Chat", icon: HiChatAlt2 },
  { title: "Integrations", icon: HiLink },
];

const outputCards: Array<{
  title: string;
  description: string;
  icon: IconType;
  tone: OutputTone;
}> = [
  {
    title: "CRM & Customers",
    description: "Centralize leads and customer data in one intelligent CRM.",
    icon: HiUserGroup,
    tone: "blue",
  },
  {
    title: "AI Automation",
    description: "Save time and scale with AI agents and smart automations.",
    icon: HiSparkles,
    tone: "green",
  },
  {
    title: "Workflows & Pipelines",
    description: "Visual pipelines that move leads to loyal customers.",
    icon: HiShare,
    tone: "violet",
  },
  {
    title: "Websites & Portals",
    description: "High-converting sites and member/customer portals.",
    icon: HiOutlineGlobeAlt,
    tone: "blue",
  },
  {
    title: "Mobile Apps",
    description: "Branded apps that engage customers on the go.",
    icon: HiDeviceMobile,
    tone: "orange",
  },
  {
    title: "Industry Modules",
    description: "Prebuilt modules for real estate, health, education, and more.",
    icon: HiPuzzle,
    tone: "rose",
  },
];

const stackLayers = [
  { title: "CRM & Customers", icon: "users" },
  { title: "AI Automation", icon: "spark" },
  { title: "Workflows & Pipelines", icon: "share" },
  { title: "Websites & Portals", icon: "globe" },
  { title: "Mobile Apps", icon: "phone" },
  { title: "Industry Modules", icon: "puzzle" },
] as const;

function iconTone(tone: OutputTone) {
  const tones = {
    blue: "from-[#3E78F2] to-[#214DD4]",
    green: "from-[#5FC96A] to-[#2D9D44]",
    violet: "from-[#8E62EF] to-[#5D37D5]",
    orange: "from-[#FFAD54] to-[#F17B25]",
    rose: "from-[#F15B89] to-[#D93C73]",
  };

  return tones[tone];
}

function Eyebrow() {
  return (
    <div className="inline-flex items-center rounded-[0.9rem] border border-[#AFC0EB] bg-[#FFFCF6]/80 px-5 py-2.5 text-[0.76rem] font-black uppercase tracking-[0.28em] text-[#1747CF] shadow-[0_9px_20px_rgba(23,71,207,0.04)]">
      HNX Growth Stack
    </div>
  );
}

function ChannelsCard() {
  return (
    <div className="w-full max-w-[170px] rounded-[1.15rem] border border-[#DED5C8] bg-[#FFFDF8]/92 px-4 py-5 shadow-[0_18px_36px_rgba(42,32,18,0.08)] backdrop-blur">
      <p className="text-[0.72rem] font-black uppercase tracking-[0.2em] text-[#17213A]">
        Channels In
      </p>

      <div className="mt-4 space-y-3">
        {channelsIn.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.title} className="flex items-center gap-3">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-[#E7E0D5] bg-white text-[#1747CF] shadow-[0_8px_16px_rgba(42,32,18,0.05)]">
                <Icon className="text-base" />
              </span>
              <span className="text-[0.88rem] font-semibold text-[#19243A]">
                {item.title}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function OutputCard({
  title,
  description,
  icon: Icon,
  tone,
  index = 0,
  isVisible = true,
}: {
  title: string;
  description: string;
  icon: IconType;
  tone: OutputTone;
  index?: number;
  isVisible?: boolean;
}) {
  return (
    <article
      className={`home-output-card group relative min-h-[88px] rounded-[1.05rem] border border-[#DED5C8] bg-[#FFFDF8]/92 px-4 py-3.5 shadow-[0_12px_26px_rgba(42,32,18,0.07)] backdrop-blur xl:h-[88px] ${
        isVisible ? "is-visible" : ""
      }`}
      style={{ transitionDelay: isVisible ? `${860 + index * 170}ms` : "0ms" }}
    >
      <div className="flex h-full items-center gap-3">
        <span
          className={`grid h-[52px] w-[52px] shrink-0 place-items-center rounded-[0.9rem] bg-linear-to-br ${iconTone(
            tone,
          )} text-white shadow-[0_12px_24px_rgba(42,32,18,0.12)] transition-transform duration-500 group-hover:scale-105`}
        >
          <Icon className="text-[1.45rem]" />
        </span>

        <div className="min-w-0">
          <h3 className="text-[0.98rem] font-black leading-tight text-[#101A31]">
            {title}
          </h3>
          <p className="mt-1 text-[0.72rem] font-medium leading-[1.12rem] text-[#45546B]">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
}

function Legend() {
  return (
    <div className="mx-auto flex w-fit flex-wrap items-center justify-center gap-6 rounded-xl border border-[#DED5C8] bg-[#FFFDF8]/92 px-6 py-3 shadow-[0_12px_24px_rgba(42,32,18,0.05)] backdrop-blur">
      <span className="flex items-center gap-2.5 text-[0.82rem] font-semibold text-[#17213A]">
        <span className="h-px w-10 border-t border-dashed border-[#7F8798]" />
        Data In
      </span>

      <span className="flex items-center gap-2.5 text-[0.82rem] font-semibold text-[#17213A]">
        <span className="h-px w-10 bg-[#1747CF]" />
        Data Flow
      </span>

      <span className="flex items-center gap-2.5 text-[0.82rem] font-semibold text-[#17213A]">
        <span className="h-3.5 w-3.5 rounded-full border-2 border-[#1747CF]" />
        Automated
      </span>
    </div>
  );
}

function StackIcon({
  type,
  x,
  y,
  scale = 1,
}: {
  type: string;
  x: number;
  y: number;
  scale?: number;
}) {
  if (type === "users") {
    return (
      <g transform={`translate(${x} ${y}) scale(${scale})`}>
        <circle cx="0" cy="-5" r="5" fill="#1747CF" />
        <circle cx="-9" cy="-2" r="4" fill="#1747CF" opacity="0.72" />
        <circle cx="9" cy="-2" r="4" fill="#1747CF" opacity="0.72" />
        <path
          d="M-16 12c2-9 8-13 16-13s14 4 16 13"
          fill="none"
          stroke="#1747CF"
          strokeLinecap="round"
          strokeWidth="4"
        />
      </g>
    );
  }

  if (type === "spark") {
    return (
      <g transform={`translate(${x} ${y}) scale(${scale})`} fill="#1747CF">
        <path d="M0-17 4-4l13 4L4 4 0 17-4 4-17 0l13-4Z" />
        <circle cx="17" cy="-12" r="3" />
      </g>
    );
  }

  if (type === "share") {
    return (
      <g
        transform={`translate(${x} ${y}) scale(${scale})`}
        fill="none"
        stroke="#1747CF"
        strokeLinecap="round"
        strokeWidth="4"
      >
        <circle cx="-13" cy="-10" r="5" />
        <circle cx="14" cy="-2" r="5" />
        <circle cx="-6" cy="15" r="5" />
        <path d="M-8-8 9-4M10 2-2 12" />
      </g>
    );
  }

  if (type === "globe") {
    return (
      <g
        transform={`translate(${x} ${y}) scale(${scale})`}
        fill="none"
        stroke="#1747CF"
        strokeLinecap="round"
        strokeWidth="4"
      >
        <circle cx="0" cy="0" r="16" />
        <path d="M-16 0h32M0-16c6 7 6 25 0 32M0-16c-6 7-6 25 0 32" />
      </g>
    );
  }

  if (type === "phone") {
    return (
      <g
        transform={`translate(${x} ${y}) scale(${scale})`}
        fill="none"
        stroke="#1747CF"
        strokeWidth="4"
      >
        <rect height="36" rx="5" width="18" x="-9" y="-18" />
        <path d="M-3 12h6" strokeLinecap="round" />
      </g>
    );
  }

  return (
    <g
      transform={`translate(${x} ${y}) scale(${scale})`}
      fill="none"
      stroke="#1747CF"
      strokeLinejoin="round"
      strokeWidth="4"
    >
      <path d="M-15-8h10v-10H8v10h10V5H8v13H-5V5h-10Z" />
    </g>
  );
}

function IsometricStack({ isVisible = true }: { isVisible?: boolean }) {
  return (
    <div
      className={`home-stack-enter relative flex h-[390px] w-[350px] items-center justify-center sm:h-[470px] sm:w-[420px] xl:h-[545px] xl:w-[500px] ${
        isVisible ? "is-visible" : ""
      }`}
    >
      <div className={`home-stack-float ${isVisible ? "is-visible" : ""}`}>
        <span className="home-stack-shine" />
        <img
          src="/hnx_growth_stack.png"
          alt="HNX unified layered business system"
          className="h-full w-auto object-contain"
          draggable={false}
        />
      </div>
    </div>
  );
}

function DesktopDiagram({ isVisible }: { isVisible: boolean }) {
  const cardCenters = [58, 152, 246, 340, 434, 528];
  const stackPorts = [116, 204, 292, 380, 468, 556];

  return (
    <div className="relative hidden h-[720px] min-w-0 xl:block">
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full"
        fill="none"
        viewBox="0 0 940 720"
      >
        <path
          className={`home-input-connector ${isVisible ? "is-visible" : ""}`}
          d="M170 326 H205 C205 238 228 212 254 212"
          stroke="#BEB5A8"
          strokeDasharray="5 6"
          strokeWidth="1.4"
          style={{ transitionDelay: isVisible ? "520ms" : "0ms" }}
        />
        <path
          className={`home-input-flow ${isVisible ? "is-visible" : ""}`}
          d="M170 326 H205 C205 238 228 212 254 212"
          stroke="#1747CF"
          strokeDasharray="16 150"
          strokeLinecap="round"
          strokeWidth="2"
        />
        <path
          className={`home-input-connector ${isVisible ? "is-visible" : ""}`}
          d="M170 326 H205 C205 430 226 506 254 506"
          stroke="#BEB5A8"
          strokeDasharray="5 6"
          strokeWidth="1.4"
          style={{ transitionDelay: isVisible ? "620ms" : "0ms" }}
        />
        <path
          className={`home-input-flow home-input-flow-delayed ${isVisible ? "is-visible" : ""}`}
          d="M170 326 H205 C205 430 226 506 254 506"
          stroke="#1747CF"
          strokeDasharray="16 170"
          strokeLinecap="round"
          strokeWidth="2"
        />
        <path
          className={`home-input-connector ${isVisible ? "is-visible" : ""}`}
          d="M170 326 H214"
          stroke="#7F8798"
          strokeWidth="1.5"
          style={{ transitionDelay: isVisible ? "700ms" : "0ms" }}
        />
        <path
          className={`home-arrow home-left-arrow ${isVisible ? "is-visible" : ""}`}
          d="M207 319 L215 326 L207 333"
          stroke="#7F8798"
          strokeWidth="1.5"
          style={{ transitionDelay: isVisible ? "760ms" : "0ms" }}
        />

        {cardCenters.map((cardY, index) => (
          <g key={cardY}>
            <path
              className={`home-connector ${isVisible ? "is-visible" : ""}`}
              d={`M570 ${stackPorts[index]} C594 ${stackPorts[index]} 596 ${cardY} 632 ${cardY} H666`}
              stroke="#BEB5A8"
              strokeDasharray="5 6"
              strokeWidth="1.4"
              style={{ transitionDelay: isVisible ? `${760 + index * 160}ms` : "0ms" }}
            />
            <path
              className={`home-flow-line ${isVisible ? "is-visible" : ""}`}
              d={`M570 ${stackPorts[index]} C594 ${stackPorts[index]} 596 ${cardY} 632 ${cardY} H666`}
              stroke="#1747CF"
              strokeDasharray="18 150"
              strokeLinecap="round"
              strokeWidth="2"
              style={{ animationDelay: `${1180 + index * 180}ms` }}
            />
            <circle
              className={`home-dot ${isVisible ? "is-visible" : ""}`}
              cx="570"
              cy={stackPorts[index]}
              fill="#1747CF"
              r="3.2"
              style={{ transitionDelay: isVisible ? `${880 + index * 160}ms` : "0ms" }}
            />
            <path
              className={`home-arrow ${isVisible ? "is-visible" : ""}`}
              d={`M659 ${cardY - 6} L667 ${cardY} L659 ${cardY + 6}`}
              stroke="#9A9287"
              strokeWidth="1.3"
              style={{ transitionDelay: isVisible ? `${900 + index * 160}ms` : "0ms" }}
            />
          </g>
        ))}
      </svg>

      <div
        className={`home-channel-enter absolute left-0 top-[160px] z-20 ${
          isVisible ? "is-visible" : ""
        }`}
      >
        <ChannelsCard />
      </div>

      <div className="absolute left-[76px] top-[18px] z-10">
        <IsometricStack isVisible={isVisible} />
      </div>

      <div className="absolute -right-2 top-[12px] z-20 w-[305px] space-y-3.5">
        {outputCards.map((card, index) => (
          <OutputCard
            key={card.title}
            {...card}
            index={index}
            isVisible={isVisible}
          />
        ))}
      </div>

      <div
        className={`home-legend-enter absolute left-[180px] top-[570px] z-30 ${
          isVisible ? "is-visible" : ""
        }`}
      >
        <Legend />
      </div>
    </div>
  );
}

function MobileDiagram({ isVisible }: { isVisible: boolean }) {
  return (
    <div className="xl:hidden">
      <div className="grid gap-6 md:grid-cols-[180px_1fr] md:items-center">
        <ChannelsCard />
        <div className="flex justify-center overflow-hidden">
          <IsometricStack isVisible={isVisible} />
        </div>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {outputCards.map((card, index) => (
          <OutputCard
            key={card.title}
            {...card}
            index={index}
            isVisible={isVisible}
          />
        ))}
      </div>

      <div className="mt-6">
        <Legend />
      </div>
    </div>
  );
}

function GrowthStackDiagram({ isVisible }: { isVisible: boolean }) {
  return (
    <div className="relative min-w-0">
      <DesktopDiagram isVisible={isVisible} />
      <MobileDiagram isVisible={isVisible} />
    </div>
  );
}

export default function HomeGrowthStackSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.32, rootMargin: "0px 0px -12% 0px" },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[linear-gradient(180deg,#F6EFE5_0%,#FCFAF6_54%,#F8F2EA_100%)] py-16 text-[#101A31] sm:py-18 lg:py-20 xl:min-h-screen xl:py-[90px]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(255,255,255,0.9),transparent_30%),radial-gradient(circle_at_78%_48%,rgba(255,255,255,0.65),transparent_34%)]" />

      <div className="relative mx-auto w-full max-w-[min(92vw,1544px)] px-4 sm:px-6 lg:px-8 xl:px-0">
        <div className="grid items-center gap-12 xl:grid-cols-[37%_63%] xl:gap-0">
          <div className="max-w-[620px]">
            <div
              className={`home-copy-enter ${isVisible ? "is-visible" : ""}`}
              style={{ transitionDelay: isVisible ? "120ms" : "0ms" }}
            >
              <Eyebrow />
            </div>

            <h2
              className={`home-copy-enter mt-8 max-w-[610px] ${isVisible ? "is-visible" : ""}  text-[clamp(2.5rem,3.45vw,3.65rem)] font-semibold leading-[1.27] tracking-[-0.045em] text-[#101A31]`}
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                transitionDelay: isVisible ? "220ms" : "0ms",
              }}
            >
              <span className="block xl:whitespace-nowrap">
                Everything Your
              </span>
              <span className="block xl:whitespace-nowrap">
                Business Runs On.
              </span>
              <span className="block xl:whitespace-nowrap">
                Built as <span className="text-[#1747CF]">One System.</span>
              </span>
            </h2>

            <p
              className={`home-copy-enter mt-7 max-w-[570px] text-[1.03rem] font-medium leading-8 text-[#43516A] sm:text-[1.12rem] ${
                isVisible ? "is-visible" : ""
              }`}
              style={{ transitionDelay: isVisible ? "320ms" : "0ms" }}
            >
              Websites, CRM, automation, AI, mobile apps, portals, and industry
              workflows &mdash; connected together to drive growth, efficiency,
              and profit.
            </p>

            <div
              className={`home-copy-enter mt-8 flex flex-col gap-4 sm:flex-row ${
                isVisible ? "is-visible" : ""
              }`}
              style={{ transitionDelay: isVisible ? "420ms" : "0ms" }}
            >
              <Link
                href="/services/full-business-suite"
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-[#1747CF] px-7 text-base font-bold text-white shadow-[0_16px_34px_rgba(23,71,207,0.23)] transition hover:-translate-y-0.5 hover:bg-[#123EB8]"
              >
                Explore Our Stack
                <HiArrowRight className="text-xl" />
              </Link>

              <Link
                href="/workflow-lab"
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-xl border border-[#1747CF] bg-[#FFFCF6]/60 px-7 text-base font-bold text-[#17213A] shadow-[0_10px_22px_rgba(42,32,18,0.03)] transition hover:-translate-y-0.5 hover:bg-white"
              >
                View Workflow Lab
                <HiBeaker className="text-xl text-[#1747CF]" />
              </Link>
            </div>

            <div
              className={`home-copy-enter mt-20 max-w-[600px] ${
                isVisible ? "is-visible" : ""
              }`}
              style={{ transitionDelay: isVisible ? "540ms" : "0ms" }}
            >
              <div className="flex items-center gap-5">
                <span className="h-px flex-1 bg-[#D8D0C4]" />
                <p className="whitespace-nowrap text-[0.74rem] font-black uppercase tracking-[0.18em] text-[#69758A]">
                  Trusted by growing businesses
                </p>
                <span className="h-px flex-1 bg-[#D8D0C4]" />
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-x-9 gap-y-3 text-[1.34rem] font-semibold text-[#263248]">
                <span>novakos</span>
                <span>MindSets</span>
                <span>UrbanAuf</span>
                <span>distrct</span>
              </div>
            </div>
          </div>

          <div className="min-w-0 xl:-ml-3 2xl:-ml-1">
            <GrowthStackDiagram isVisible={isVisible} />
          </div>
        </div>
      </div>
      <style>{`
        .home-copy-enter {
          opacity: 0;
          transform: translate3d(0, 24px, 0);
          transition: opacity 720ms cubic-bezier(0.22, 1, 0.36, 1),
            transform 720ms cubic-bezier(0.22, 1, 0.36, 1);
          will-change: opacity, transform;
        }

        .home-copy-enter.is-visible {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }

        .home-channel-enter {
          opacity: 0;
          transform: perspective(900px) translate3d(-34px, 16px, -60px) rotateY(18deg) scale(0.95);
          transform-origin: right center;
          transition: opacity 780ms cubic-bezier(0.22, 1, 0.36, 1) 420ms,
            transform 780ms cubic-bezier(0.22, 1, 0.36, 1) 420ms;
          will-change: opacity, transform;
        }

        .home-channel-enter.is-visible {
          opacity: 1;
          transform: perspective(900px) translate3d(0, 0, 0) rotateY(0deg) scale(1);
        }

        .home-stack-enter {
          opacity: 0;
          perspective: 1200px;
          transform: translate3d(0, 42px, -120px) rotateX(15deg) rotateY(-12deg) scale(0.92);
          transform-origin: 50% 55%;
          filter: blur(8px);
          transition: opacity 900ms cubic-bezier(0.22, 1, 0.36, 1) 520ms,
            transform 980ms cubic-bezier(0.16, 1, 0.3, 1) 520ms,
            filter 900ms cubic-bezier(0.22, 1, 0.36, 1) 520ms;
          will-change: opacity, transform, filter;
        }

        .home-stack-enter.is-visible {
          opacity: 1;
          transform: translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg) scale(1);
          filter: blur(0);
        }

        .home-stack-float {
          position: relative;
          display: flex;
          height: 100%;
          width: 100%;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          border-radius: 2rem;
        }

        .home-stack-float.is-visible {
          animation: hnxStackFloat 6.4s ease-in-out 1550ms infinite;
        }

        .home-stack-shine {
          pointer-events: none;
          position: absolute;
          inset: 6% 16%;
          z-index: 2;
          opacity: 0;
          transform: translateX(-145%) skewX(-18deg);
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.0) 28%,
            rgba(255, 255, 255, 0.42) 48%,
            rgba(255, 255, 255, 0.0) 70%,
            transparent 100%
          );
          filter: blur(8px);
        }

        .home-stack-float.is-visible .home-stack-shine {
          animation: hnxStackShine 2.2s cubic-bezier(0.22, 1, 0.36, 1) 1350ms 1;
        }

        .home-output-card {
          opacity: 0;
          transform: perspective(1000px) translate3d(58px, 22px, -80px) rotateX(9deg) rotateY(-24deg) scale(0.92);
          transform-origin: left center;
          transition: opacity 760ms cubic-bezier(0.22, 1, 0.36, 1),
            transform 820ms cubic-bezier(0.16, 1, 0.3, 1),
            box-shadow 500ms ease;
          will-change: opacity, transform;
        }

        .home-output-card.is-visible {
          opacity: 1;
          transform: perspective(1000px) translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg) scale(1);
        }

        .home-output-card.is-visible:hover {
          transform: perspective(1000px) translate3d(-5px, -4px, 35px) rotateX(0deg) rotateY(-4deg) scale(1.015);
        }

        .home-connector,
        .home-input-connector,
        .home-arrow {
          opacity: 0;
          transform: translateX(-12px);
          transition: opacity 620ms ease, transform 720ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .home-connector.is-visible,
        .home-input-connector.is-visible,
        .home-arrow.is-visible {
          opacity: 1;
          transform: translateX(0);
        }

        .home-flow-line,
        .home-input-flow {
          opacity: 0;
          stroke-dashoffset: 168;
          filter: drop-shadow(0 0 5px rgba(23, 71, 207, 0.38));
        }

        .home-flow-line.is-visible,
        .home-input-flow.is-visible {
          opacity: 1;
          animation: hnxFlowCurrent 1.75s linear infinite;
        }

        .home-input-flow.is-visible {
          animation-delay: 980ms;
        }

        .home-input-flow-delayed.is-visible {
          animation-delay: 1180ms;
        }

        .home-left-arrow.is-visible,
        .home-arrow.is-visible {
          animation: hnxArrowPulse 1.8s ease-in-out infinite;
        }

        .home-dot {
          opacity: 0;
          transform: scale(0);
          transform-box: fill-box;
          transform-origin: center;
          transition: opacity 420ms ease, transform 520ms cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .home-dot.is-visible {
          opacity: 1;
          transform: scale(1);
        }

        .home-legend-enter {
          opacity: 0;
          transform: perspective(800px) translate3d(0, 26px, -60px) rotateX(12deg) scale(0.96);
          transform-origin: center top;
          transition: opacity 760ms cubic-bezier(0.22, 1, 0.36, 1) 1600ms,
            transform 820ms cubic-bezier(0.16, 1, 0.3, 1) 1600ms;
          will-change: opacity, transform;
        }

        .home-legend-enter.is-visible {
          opacity: 1;
          transform: perspective(800px) translate3d(0, 0, 0) rotateX(0deg) scale(1);
        }

        @keyframes hnxStackFloat {
          0%, 100% {
            transform: translate3d(0, 0, 0) rotateZ(0deg);
          }
          50% {
            transform: translate3d(0, -10px, 0) rotateZ(-0.35deg);
          }
        }

        @keyframes hnxStackShine {
          0% {
            opacity: 0;
            transform: translateX(-145%) skewX(-18deg);
          }
          18% {
            opacity: 0.85;
          }
          100% {
            opacity: 0;
            transform: translateX(145%) skewX(-18deg);
          }
        }

        @keyframes hnxFlowCurrent {
          0% {
            stroke-dashoffset: 168;
            opacity: 0.12;
          }
          12% {
            opacity: 0.95;
          }
          72% {
            opacity: 0.95;
          }
          100% {
            stroke-dashoffset: -168;
            opacity: 0.12;
          }
        }

        @keyframes hnxArrowPulse {
          0%, 100% {
            opacity: 0.72;
            transform: translateX(0);
          }
          50% {
            opacity: 1;
            transform: translateX(4px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .home-copy-enter,
          .home-channel-enter,
          .home-stack-enter,
          .home-output-card,
          .home-connector,
          .home-input-connector,
          .home-flow-line,
          .home-input-flow,
          .home-arrow,
          .home-dot,
          .home-legend-enter {
            opacity: 1 !important;
            transform: none !important;
            filter: none !important;
            transition: none !important;
            animation: none !important;
          }

          .home-stack-float.is-visible {
            animation: none !important;
          }

          .home-stack-shine {
            display: none !important;
          }
        }
      `}</style>

    </section>
  );
}
