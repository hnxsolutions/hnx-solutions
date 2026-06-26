import { HiCheck, HiCog, HiCube, HiUser, HiX } from "react-icons/hi";
import {
  HomeSectionShell,
  SectionBadge,
  SectionCopy,
  SectionHeading,
  SoftCard,
} from "./HomeSectionPrimitives";
import { customHnxList, genericSoftwareList } from "./homeSectionsData";

function ComparisonList({
  title,
  items,
  positive,
}: {
  title: string;
  items: readonly string[];
  positive?: boolean;
}) {
  return (
    <SoftCard className="p-5">
      <h3
        className={`text-xl font-black ${
          positive ? "text-blue-700" : "text-slate-950 dark:text-white"
        }`}
      >
        {title}
      </h3>
      <div className="mt-4 divide-y divide-slate-200 dark:divide-white/10">
        {items.map((item) => (
          <div key={item} className="flex items-center gap-3 py-3">
            <span
              className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border ${
                positive
                  ? "border-blue-500 text-blue-600"
                  : "border-red-500 text-red-500"
              }`}
            >
              {positive ? <HiCheck /> : <HiX />}
            </span>
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              {item}
            </span>
          </div>
        ))}
      </div>
    </SoftCard>
  );
}

function SystemIllustration() {
  return (
    <div className="relative mx-auto min-h-[360px] w-full max-w-[520px] lg:min-h-[460px]">
      <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.16),transparent_45%)]" />
      <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-[1.6rem] border border-blue-200 bg-white/80 shadow-[0_30px_72px_rgba(79,70,229,0.16)]" />
      <div className="absolute left-1/2 top-1/2 grid h-34 w-34 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[1.2rem] bg-linear-to-br from-blue-500 to-violet-600 shadow-[0_24px_60px_rgba(79,70,229,0.34)]">
        <span className="rounded-lg bg-white px-3 py-2 text-xl font-black text-blue-700">
          HNX
        </span>
      </div>
      {[
        { icon: HiUser, label: "CRM", className: "left-[7%] top-[44%]" },
        { icon: HiCube, label: "Portal", className: "right-[6%] top-[22%]" },
        { icon: HiCog, label: "Automation", className: "right-[10%] bottom-[18%]" },
        { icon: HiCheck, label: "Reports", className: "left-[26%] bottom-[10%]" },
      ].map((item) => (
        <div
          key={item.label}
          className={`absolute grid h-22 w-26 place-items-center rounded-xl border border-blue-100 bg-white shadow-[0_16px_40px_rgba(79,70,229,0.12)] ${item.className}`}
        >
          <item.icon className="text-2xl text-blue-600" />
          <span className="text-[10px] font-black uppercase tracking-[0.12em] text-slate-500">
            {item.label}
          </span>
        </div>
      ))}
      <div className="absolute inset-x-10 bottom-0 h-16 rounded-[50%] bg-blue-500/10 blur-2xl" />
    </div>
  );
}

export default function HomeWhyCustomWinsSection() {
  return (
    <HomeSectionShell>
      <div className="grid items-center gap-10 xl:grid-cols-[0.52fr_0.48fr]">
        <div>
          <SectionBadge>Why Custom Wins</SectionBadge>
          <SectionHeading>
            Your Business Is Unique. Your System Should Be Too.
          </SectionHeading>
          <SectionCopy>
            Off-the-shelf software forces you to adapt. Custom systems adapt to
            you - your processes, your goals, your future.
          </SectionCopy>

          <div className="relative mt-8 grid gap-5 md:grid-cols-2">
            <ComparisonList title="Generic Software" items={genericSoftwareList} />
            <div className="hidden md:grid absolute left-1/2 top-1/2 z-10 h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-linear-to-br from-blue-600 to-violet-600 text-sm font-black text-white shadow-xl">
              VS
            </div>
            <ComparisonList
              title="Custom Built by HNX"
              items={customHnxList}
              positive
            />
          </div>
        </div>

        <SystemIllustration />
      </div>
    </HomeSectionShell>
  );
}
