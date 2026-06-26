import Image from "next/image";
import {
  HiCheckCircle,
  HiClipboardCheck,
  HiCode,
  HiLightningBolt,
  HiPencilAlt,
  HiSearch,
  HiStar,
  HiTrendingUp,
} from "react-icons/hi";
import {
  HomeSectionShell,
  IconBubble,
  SectionBadge,
  SectionCopy,
  SectionHeading,
  SoftCard,
} from "./HomeSectionPrimitives";
import { processSteps } from "./homeSectionsData";

const processIcons = [
  HiSearch,
  HiClipboardCheck,
  HiPencilAlt,
  HiCode,
  HiLightningBolt,
  HiTrendingUp,
];

export default function HomeProcessSection() {
  return (
    <HomeSectionShell>
      <SectionBadge>How HNX Builds</SectionBadge>
      <SectionHeading className="max-w-6xl">
        A Proven Process. Built For Success.
      </SectionHeading>
      <SectionCopy className="max-w-3xl">
        From strategy to scale, we follow a proven process to deliver solutions
        that drive real impact - on time and on budget.
      </SectionCopy>

      <div className="mt-12">
        <div className="relative hidden grid-cols-6 gap-6 lg:grid">
          <div className="absolute left-[7%] right-[7%] top-9 h-0.5 bg-linear-to-r from-blue-500 via-violet-500 to-blue-500" />
          {processSteps.map((step, index) => {
            const Icon = processIcons[index];
            return (
              <div key={step.title} className="relative text-center">
                <div className="relative z-10 mx-auto grid h-18 w-18 place-items-center rounded-full border border-blue-100 bg-white shadow-[0_16px_38px_rgba(79,70,229,0.1)]">
                  <IconBubble tone="violet" className="h-12 w-12 rounded-full">
                    <Icon className="text-2xl" />
                  </IconBubble>
                </div>
                <span className="mx-auto mt-4 block h-3 w-3 rounded-full bg-blue-600 shadow-[0_0_0_7px_rgba(99,102,241,0.12)]" />
                <h3 className="mt-4 text-base font-black text-slate-950">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm font-medium leading-6 text-slate-600">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="grid gap-4 lg:hidden">
          {processSteps.map((step, index) => {
            const Icon = processIcons[index];
            return (
              <SoftCard key={step.title} className="flex gap-4 p-5">
                <IconBubble tone="violet" className="h-12 w-12 shrink-0">
                  <Icon className="text-xl" />
                </IconBubble>
                <div>
                  <h3 className="text-lg font-black">{step.title}</h3>
                  <p className="mt-2 text-sm font-medium leading-6 text-slate-600">
                    {step.description}
                  </p>
                </div>
              </SoftCard>
            );
          })}
        </div>
      </div>

      <SoftCard className="mt-12 overflow-hidden rounded-[1.4rem] p-5 lg:p-6">
        <div className="grid items-center gap-8 lg:grid-cols-[0.55fr_0.45fr]">
          <div className="flex flex-col gap-6 md:flex-row md:items-center">
            <IconBubble tone="violet" className="h-16 w-16 shrink-0 rounded-full">
              <HiStar className="text-3xl" />
            </IconBubble>
            <div>
              <h3 className="text-xl font-black text-blue-700 sm:text-2xl">
                Agile. Transparent. Focused on Results.
              </h3>
              <p className="mt-4 max-w-3xl text-sm font-medium leading-7 text-slate-600">
                We work in agile sprints with clear communication and complete
                visibility. You&apos;re always in the loop - every step of the
                way.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {[
                  "Collaborative Partnership",
                  "Clear Communication",
                  "Measurable Outcomes",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm font-black">
                    <HiCheckCircle className="text-xl text-blue-600" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative h-56 overflow-hidden rounded-[1.1rem] lg:h-64">
            <Image
              src="/images/team-meeting.jpg"
              alt="HNX team planning a digital product"
              fill
              sizes="(min-width: 1024px) 38vw, 90vw"
              className="object-cover"
            />
          </div>
        </div>
      </SoftCard>
    </HomeSectionShell>
  );
}
