"use client";

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
  const steps = data.flowSteps.slice(0, 5);

  return (
    <MobileAppSectionShell>
      <section className="relative overflow-hidden bg-white py-12 dark:bg-slate-950 lg:py-14">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[2rem] font-black leading-tight tracking-[-0.025em] text-slate-950 dark:text-white sm:text-[2.35rem]">
            App Journey / How It Works
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-[0.95rem] font-semibold leading-6 text-slate-600 dark:text-slate-300">
            {data.flowTitle}
          </p>
        </div>

        <div className="mt-12 overflow-x-auto pb-4 [scrollbar-width:none] xl:overflow-visible [&::-webkit-scrollbar]:hidden">
          <div className="flex min-w-max snap-x snap-mandatory gap-8 px-1 xl:grid xl:min-w-0 xl:grid-cols-5 xl:gap-0 xl:px-0">
            {steps.map((step, index) => {
              const tone = journeyTones[index % journeyTones.length];

              return (
                <article
                  key={`${step.title}-${index}`}
                  className="relative w-[230px] shrink-0 snap-center overflow-visible text-center xl:w-auto"
                >
                  <JourneyIcon icon={step.icon} tone={tone} />

                  <p
                    className={[
                      "mt-5 text-[0.95rem] font-black leading-none tracking-[0.08em]",
                      tone.number,
                    ].join(" ")}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3 className="mt-4 text-[1.25rem] font-black leading-7 tracking-tight text-slate-950 dark:text-white">
                    {step.title}
                  </h3>

                  <p className="mx-auto mt-3 max-w-[175px] text-[0.95rem] font-medium leading-7 text-slate-600 dark:text-slate-300">
                    {step.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </MobileAppSectionShell>
  );
}