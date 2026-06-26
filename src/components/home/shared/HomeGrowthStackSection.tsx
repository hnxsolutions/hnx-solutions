import {
  HiBriefcase,
  HiChartBar,
  HiCode,
  HiCog,
  HiDeviceMobile,
  HiLightningBolt,
} from "react-icons/hi";
import {
  GradientWord,
  HomeSectionShell,
  IconBubble,
  PrimaryArrowLink,
  SectionBadge,
  SectionCopy,
  SectionHeading,
} from "./HomeSectionPrimitives";
import { growthStackCards } from "./homeSectionsData";

const stackIcons = [
  HiBriefcase,
  HiCog,
  HiLightningBolt,
  HiCode,
  HiDeviceMobile,
  HiChartBar,
];

const desktopPositions = [
  "lg:left-[7%] lg:top-[3%]",
  "lg:right-[5%] lg:top-[4%]",
  "lg:left-0 lg:top-[38%]",
  "lg:right-0 lg:top-[39%]",
  "lg:left-[9%] lg:bottom-[3%]",
  "lg:right-[7%] lg:bottom-[4%]",
];

export default function HomeGrowthStackSection() {
  return (
    <HomeSectionShell className="pt-12 sm:pt-16 lg:pt-18">
      <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
        <div>
          <SectionBadge>HNX Growth Stack</SectionBadge>

          <SectionHeading>
            Everything Your Business Runs On. Built as{" "}
            <GradientWord>One System.</GradientWord>
          </SectionHeading>

          <SectionCopy>
            CRM, websites, apps, automation, AI, and industry systems connected
            together to drive growth, efficiency, and profit.
          </SectionCopy>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <PrimaryArrowLink href="/services/full-business-suite">
              Explore Our Stack
            </PrimaryArrowLink>
            <PrimaryArrowLink
              href="/workflow-lab"
              className="border border-slate-200 bg-white text-blue-700 shadow-none hover:bg-blue-50"
            >
              View Workflow Lab
            </PrimaryArrowLink>
          </div>

          <div className="mt-10">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">
              Trusted by businesses worldwide
            </p>
            <div className="mt-4 flex flex-wrap gap-x-7 gap-y-2 text-xl font-semibold text-slate-500">
              <span>novakos</span>
              <span>MindSets</span>
              <span>UrbanAut</span>
              <span>distrct</span>
            </div>
          </div>
        </div>

        <div className="relative min-h-[460px] overflow-visible rounded-[1.8rem] bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.12),transparent_42%)] lg:min-h-[520px]">
          <div className="absolute inset-8 hidden rounded-[2rem] border border-blue-200/50 bg-[linear-gradient(90deg,rgba(99,102,241,0.1)_1px,transparent_1px),linear-gradient(0deg,rgba(99,102,241,0.1)_1px,transparent_1px)] bg-[size:80px_80px] opacity-70 lg:block" />

          <div className="absolute left-1/2 top-1/2 hidden h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-indigo-200 lg:block" />

          <div className="absolute left-1/2 top-1/2 z-10 flex h-38 w-38 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[1.4rem] bg-linear-to-br from-blue-500 via-indigo-600 to-violet-600 shadow-[0_24px_64px_rgba(79,70,229,0.28)] lg:h-44 lg:w-44">
            <div className="absolute inset-4 rounded-[1.5rem] border border-white/30 bg-white/8" />
            <div className="absolute -inset-6 rounded-[2.4rem] border border-blue-300/40" />
            <span className="relative text-3xl font-black tracking-tight text-white lg:text-4xl">
              HNX
            </span>
          </div>

          <div className="relative z-20 grid gap-4 pt-6 sm:grid-cols-2 lg:absolute lg:inset-0 lg:block lg:pt-0">
            {growthStackCards.map((card, index) => {
              const Icon = stackIcons[index];
              return (
                <div
                  key={card.title}
                  className={`rounded-[1.1rem] border border-slate-200/80 bg-white/90 p-3.5 shadow-[0_16px_42px_rgba(15,23,42,0.07)] backdrop-blur lg:absolute lg:w-[205px] ${desktopPositions[index]}`}
                >
                  <div className="flex items-start gap-3">
                    <IconBubble tone={card.tone} className="h-10 w-10 rounded-xl">
                      <Icon className="text-lg" />
                    </IconBubble>
                    <div>
                      <h3 className="text-sm font-black leading-snug text-slate-950">
                        {card.title}
                      </h3>
                      <p className="mt-2 text-xs font-medium leading-5 text-slate-600">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </HomeSectionShell>
  );
}
