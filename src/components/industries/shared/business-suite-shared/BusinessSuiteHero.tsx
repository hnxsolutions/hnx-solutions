import Link from "next/link";
import { ArrowRight, CheckCircle2, PlayCircle, Search, Settings, Bell } from "lucide-react";
import type { BusinessSuitePageData } from "./businessSuiteData";
import {
  BusinessSuiteBadge,
  BusinessSuiteIconBox,
  BusinessSuiteSection,
  DottedBackground,
  HnxMark,
  SoftBlueWaves,
} from "./businessSuiteUtils";

export default function BusinessSuiteHero({ data }: { data: BusinessSuitePageData }) {
  const IndustryIcon = data.industryIcon;

  return (
    <BusinessSuiteSection
      className="overflow-hidden bg-[linear-gradient(115deg,#ffffff_0%,#f8fbff_47%,#eef5ff_100%)] pb-8 pt-20 sm:pt-24 lg:pb-8 lg:pt-20"
      innerClassName="relative"
    >
      <DottedBackground className="bottom-4 left-0 h-52 w-52 opacity-55" />
      <SoftBlueWaves />
      <div className="pointer-events-none absolute -right-16 top-20 h-80 w-80 rounded-full bg-blue-100/70 blur-3xl" />

      <div className="relative grid items-center gap-8 lg:grid-cols-2 lg:gap-8 xl:gap-10">
        <div className="min-w-0 max-w-[650px]">
          <p className="text-sm font-semibold text-slate-950 sm:text-base">{data.hero.eyebrow}</p>
          <h1 className="mt-4 max-w-[650px] text-[2rem] font-black leading-[1.12] tracking-[-0.03em] text-[#06143a] sm:text-4xl lg:text-[2.75rem] xl:text-[2.95rem] 2xl:text-[3.2rem]">
            <span className="block lg:whitespace-nowrap">{data.hero.title.replace(/\s+for$/, "")}</span>
            <span className="mt-1 block">
              for{" "}
              <span className="font-serif font-semibold italic tracking-[-0.025em] text-[#0647d9]">
                {data.hero.highlightedTitle}
              </span>
            </span>
          </h1>
          <p className="mt-4 max-w-xl text-base font-medium leading-7 text-[#1e2f53] sm:text-[1.05rem] sm:leading-8">
            {data.hero.description}
          </p>

          <div className="mt-5 grid max-w-lg gap-2.5">
            {data.hero.bullets.map((bullet) => (
              <div key={bullet} className="flex items-center gap-3 text-sm font-semibold text-slate-900 sm:text-base">
                <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-500 text-white">
                  <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                {bullet}
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href={data.hero.primaryHref}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#ff5b12] px-6 py-3 text-sm font-black text-white shadow-[0_16px_32px_rgba(255,91,18,0.24)] transition hover:-translate-y-0.5 hover:bg-[#ea4f0f]"
            >
              {data.hero.primaryLabel}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href={data.hero.secondaryHref}
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-black text-slate-950 shadow-[0_14px_34px_rgba(15,23,42,0.07)] transition hover:-translate-y-0.5 hover:border-blue-200"
            >
              {data.hero.secondaryLabel}
              <span className="grid h-7 w-7 place-items-center rounded-full border border-slate-300">
                <PlayCircle className="h-4 w-4 text-[#06143a]" aria-hidden="true" />
              </span>
            </Link>
          </div>
        </div>

        <HeroDeviceMockup industryName={data.industryName} />
      </div>

      <div className="relative mt-6 rounded-[1.2rem] border border-slate-200 bg-white/92 px-4 py-4 shadow-[0_18px_50px_rgba(15,23,42,0.09)] backdrop-blur">
        <div className="grid divide-y divide-slate-200 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {data.hero.stats.map((stat) => (
            <div key={stat.label} className="flex items-center justify-center gap-4 px-4 py-2.5">
              <stat.icon className="h-9 w-9 shrink-0 text-[#062d86]" aria-hidden="true" />
              <div>
                <p className="text-2xl font-black tracking-tight text-[#06143a]">{stat.value}</p>
                <p className="mt-0.5 text-sm font-semibold text-slate-700">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute right-0 top-0 hidden opacity-15 lg:block">
        <BusinessSuiteBadge icon={IndustryIcon}>{data.industryName}</BusinessSuiteBadge>
      </div>
    </BusinessSuiteSection>
  );
}

function HeroDeviceMockup({ industryName }: { industryName: string }) {
  return (
    <div className="relative mx-auto w-full max-w-[720px] min-w-0 xl:max-w-[760px]">
      <div className="ml-auto w-[92%] max-w-full overflow-hidden rounded-[1.25rem] border-[8px] border-[#070b13] bg-[#070b13] shadow-[0_24px_58px_rgba(15,23,42,0.2)]">
        <div className="rounded-t-[0.85rem] bg-[#05080d] px-4 py-2">
          <div className="mx-auto h-1.5 w-16 rounded-full bg-white/10" />
        </div>
        <div className="grid h-[350px] grid-cols-[112px_1fr] overflow-hidden bg-white xl:h-[380px] xl:grid-cols-[126px_1fr]">
          <aside className="bg-gradient-to-b from-[#031638] to-[#071f4d] p-3.5 text-white xl:p-4">
            <HnxMark className="[&_*]:text-white" />
            <div className="mt-6 space-y-1.5 xl:mt-7 xl:space-y-2">
              {["Dashboard", "Leads", "Sales", "Customers", "Tasks", "Reports", "Campaigns", "Settings"].map(
                (item, index) => (
                  <div
                    key={item}
                    className={`flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-[10px] font-bold xl:px-3 xl:py-2 xl:text-[11px] ${
                      index === 0 ? "bg-[#0b61ff]" : "text-white/78"
                    }`}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-current" />
                    {item}
                  </div>
                ),
              )}
            </div>
          </aside>
          <div className="min-w-0 p-4 xl:p-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-base font-black text-[#06143a] xl:text-lg">Dashboard</p>
                <p className="mt-1 text-xs font-semibold text-slate-500">
                  Good morning, HNX Solutions
                </p>
              </div>
              <div className="flex items-center gap-3 text-slate-600">
                <Search className="h-4 w-4" aria-hidden="true" />
                <Bell className="h-4 w-4" aria-hidden="true" />
                <Settings className="h-4 w-4" aria-hidden="true" />
              </div>
            </div>

            <div className="mt-4 grid grid-cols-4 gap-2.5 xl:gap-3">
              {[
                ["Total Leads", "1,248", "+12.5%"],
                ["New Customers", "352", "+8.4%"],
                ["Revenue", "Rs 12.45L", "+15.3%"],
                ["Tasks", "28", "In progress"],
              ].map(([label, value, meta]) => (
                <div key={label} className="rounded-xl border border-slate-200 bg-white p-2.5 shadow-sm xl:p-3">
                  <p className="text-[10px] font-bold text-slate-500">{label}</p>
                  <p className="mt-1.5 text-lg font-black text-[#06143a] xl:text-xl">{value}</p>
                  <p className="mt-1 text-[10px] font-black text-emerald-600">{meta}</p>
                </div>
              ))}
            </div>

            <div className="mt-3 grid gap-3 lg:grid-cols-[1.25fr_0.8fr] xl:mt-4 xl:gap-4">
              <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm xl:p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-black text-[#06143a]">Revenue Overview</p>
                  <span className="text-[10px] font-bold text-slate-400">This Month</span>
                </div>
                <svg viewBox="0 0 360 155" className="mt-3 h-28 w-full xl:mt-4 xl:h-32" aria-hidden="true">
                  <path
                    d="M4 124 C42 98 58 85 88 98 C123 114 128 56 174 64 C218 72 212 26 257 44 C294 58 304 20 356 30"
                    fill="none"
                    stroke="#0b61ff"
                    strokeLinecap="round"
                    strokeWidth="5"
                  />
                  <path
                    d="M4 134 C42 108 58 95 88 108 C123 124 128 66 174 74 C218 82 212 36 257 54 C294 68 304 30 356 40 L356 155 L4 155Z"
                    fill="#0b61ff"
                    opacity="0.08"
                  />
                  {[0, 1, 2, 3].map((line) => (
                    <line
                      key={line}
                      x1="0"
                      x2="360"
                      y1={26 + line * 32}
                      y2={26 + line * 32}
                      stroke="#e2e8f0"
                    />
                  ))}
                </svg>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm xl:p-4">
                <p className="text-sm font-black text-[#06143a]">Sales Pipeline</p>
                <div className="mt-4 space-y-2">
                  {[
                    ["New", "bg-[#053071]", "90%"],
                    ["Contacted", "bg-[#1976e8]", "74%"],
                    ["Qualified", "bg-[#ff7a13]", "58%"],
                    ["Proposal", "bg-[#ffbd2d]", "42%"],
                    ["Closed", "bg-[#22c55e]", "26%"],
                  ].map(([label, color, width]) => (
                    <div key={label} className="flex items-center gap-3">
                      <div className="h-5 flex-1 rounded-sm bg-slate-100">
                        <div className={`h-full rounded-sm ${color}`} style={{ width }} />
                      </div>
                      <span className="w-14 text-[10px] font-bold text-slate-500">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-3 grid grid-cols-3 gap-2.5 xl:mt-4 xl:gap-3">
              {["Top Sources", "Recent Activities", "Task Progress"].map((title) => (
                <div key={title} className="min-h-20 rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
                  <p className="text-xs font-black text-[#06143a]">{title}</p>
                  <div className="mt-3 space-y-2">
                    <span className="block h-2 rounded-full bg-slate-100" />
                    <span className="block h-2 w-4/5 rounded-full bg-slate-100" />
                    <span className="block h-2 w-3/5 rounded-full bg-slate-100" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-4 left-6 w-[170px] rounded-[1.45rem] border-[6px] border-[#0b0e16] bg-[#0b0e16] p-1.5 shadow-[0_18px_48px_rgba(15,23,42,0.24)] sm:left-16 lg:-bottom-2 lg:left-24 xl:w-[185px]">
        <div className="overflow-hidden rounded-[1.1rem] bg-white">
          <div className="flex items-center justify-between border-b border-slate-100 px-3 py-2">
            <span className="text-[9px] font-black text-[#06143a]">Dashboard</span>
            <span className="text-[8px] text-slate-400">{industryName}</span>
          </div>
          <div className="space-y-2 p-3">
            {[
              ["Total Leads", "1,248"],
              ["New Customers", "352"],
              ["Revenue", "Rs 12.45L"],
              ["Tasks", "28"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-lg border border-slate-100 bg-slate-50 p-2">
                <p className="text-[8px] font-bold text-slate-500">{label}</p>
                <p className="mt-1 text-sm font-black text-[#06143a]">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute right-0 bottom-7 hidden rounded-2xl border border-blue-100 bg-white/95 p-2.5 shadow-[0_16px_42px_rgba(15,23,42,0.1)] lg:block">
        <BusinessSuiteIconBox icon={CheckCircle2} tone="green" className="h-11 w-11 rounded-xl" iconClassName="h-5 w-5" />
      </div>
    </div>
  );
}
