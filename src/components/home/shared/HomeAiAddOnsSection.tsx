import {
  HiBell,
  HiChartBar,
  HiClipboardList,
  HiCog,
  HiMail,
  HiUserGroup,
} from "react-icons/hi";
import {
  GradientWord,
  HomeSectionShell,
  IconBubble,
  SectionBadge,
  SectionCopy,
  SectionHeading,
  SoftCard,
} from "./HomeSectionPrimitives";
import { aiAddOns } from "./homeSectionsData";

const aiIcons = [HiUserGroup, HiMail, HiClipboardList, HiChartBar, HiCog, HiBell];

function AiChipVisual() {
  return (
    <div className="relative mx-auto flex min-h-[320px] w-full max-w-[460px] items-center justify-center lg:min-h-[420px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.16),transparent_45%)]" />
      <div className="absolute h-56 w-56 rounded-full bg-slate-100 shadow-inner" />
      <div className="absolute top-2 left-1/2 h-20 w-20 -translate-x-1/2 rounded-full bg-slate-200" />
      <div className="absolute left-22 top-18 h-20 w-20 rounded-full bg-slate-200" />
      <div className="absolute right-22 top-18 h-20 w-20 rounded-full bg-slate-200" />
      <div className="absolute bottom-18 left-24 h-18 w-18 rounded-full bg-slate-200" />
      <div className="absolute bottom-18 right-24 h-18 w-18 rounded-full bg-slate-200" />
      <div className="absolute grid h-40 w-40 place-items-center rounded-[1.5rem] border border-white/40 bg-linear-to-br from-blue-500 via-indigo-600 to-violet-700 text-5xl font-black text-white shadow-[0_28px_70px_rgba(79,70,229,0.34)]">
        AI
      </div>
      {Array.from({ length: 14 }).map((_, index) => (
        <span
          key={index}
          className="absolute h-2.5 w-2.5 rounded-full bg-blue-500 shadow-[0_0_16px_rgba(59,130,246,0.75)]"
          style={{
            transform: `rotate(${index * 25.7}deg) translateX(145px)`,
          }}
        />
      ))}
      <div className="absolute bottom-8 h-16 w-72 rounded-[50%] bg-blue-500/10 blur-2xl" />
    </div>
  );
}

export default function HomeAiAddOnsSection() {
  return (
    <HomeSectionShell>
      <div className="grid items-center gap-8 lg:grid-cols-[0.48fr_0.52fr]">
        <div>
          <SectionBadge>AI Automation Add-ons</SectionBadge>
          <SectionHeading>
            Add <GradientWord>AI.</GradientWord> Save Time.
            <br />
            Work Smarter.
          </SectionHeading>
          <SectionCopy>
            AI agents and automation that handle repetitive tasks, give smart
            insights, and help you focus on growth.
          </SectionCopy>
        </div>
        <AiChipVisual />
      </div>

      <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {aiAddOns.map((item, index) => {
          const Icon = aiIcons[index];
          return (
            <SoftCard key={item} className="min-h-[160px] p-5 text-center">
              <IconBubble tone="violet" className="mx-auto mb-5 h-12 w-12 rounded-full">
                <Icon className="text-xl" />
              </IconBubble>
              <h3 className="text-base font-black leading-6 text-slate-950 dark:text-white">
                {item}
              </h3>
            </SoftCard>
          );
        })}
      </div>
    </HomeSectionShell>
  );
}
