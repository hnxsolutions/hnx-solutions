import Link from "next/link";
import { ArrowRight, Bell, Search, Settings } from "lucide-react";
import { fullBusinessSuiteData } from "./fullBusinessSuiteData";
import {
  HnxMark,
  SoftWaves,
  SuiteHeader,
  SuiteIconBox,
  SuiteSection,
  SuiteTinyIcon,
  cn,
} from "./fullBusinessSuiteUtils";

export default function FullBusinessSuiteDashboard() {
  const { dashboard } = fullBusinessSuiteData;

  return (
    <SuiteSection id="dashboard" className="bg-[#f8fbff] pb-10">
      <SoftWaves />
      <div className="relative grid min-w-0 items-center gap-7 lg:grid-cols-[0.34fr_0.66fr]">
        <div className="min-w-0">
          <SuiteHeader
            eyebrow={dashboard.eyebrow}
            title={dashboard.title}
            description={dashboard.description}
          />

          <div className="mt-5 grid gap-3.5">
            {dashboard.list.slice(0, 6).map((card) => (
              <article key={card.title} className="flex gap-4">
                <SuiteIconBox icon={card.icon} tone={card.tone} className="h-10 w-10 rounded-xl" iconClassName="h-5 w-5" />
                <div>
                  <h3 className="text-base font-black text-[#06143a]">{card.title}</h3>
                  <p className="mt-1 text-sm font-medium leading-6 text-[#445579]">{card.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="relative ml-auto w-full min-w-0 max-w-[760px] xl:max-w-[800px]">
          <DashboardMockup />
        </div>
      </div>
    </SuiteSection>
  );
}

function DashboardMockup() {
  const { dashboard } = fullBusinessSuiteData;

  return (
    <>
      <div className="relative overflow-hidden rounded-[1.35rem] border border-slate-200 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.13)]">
        <div className="grid min-h-[430px] grid-cols-[124px_1fr] max-lg:grid-cols-1 xl:grid-cols-[136px_1fr]">
          <aside className="hidden bg-gradient-to-b from-[#031638] to-[#071f4d] p-3.5 text-white lg:block">
            <HnxMark className="[&_*]:text-white" />
            <div className="mt-6 space-y-1.5">
              {["Dashboard", "Leads", "Clients", "Projects", "Tasks", "Reports", "Automation", "Settings"].map((item, index) => (
                <div
                  key={item}
                  className={cn(
                    "rounded-lg px-2.5 py-1.5 text-[10px] font-black",
                    index === 0 ? "bg-[#0b61ff]" : "text-white/78",
                  )}
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="absolute bottom-4 left-3.5 right-[calc(100%-118px)] rounded-xl border border-white/15 p-2 text-[10px] font-bold xl:right-[calc(100%-130px)]">
              Need Help?
            </div>
          </aside>

          <div className="min-w-0 p-3.5 sm:p-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h3 className="text-lg font-black text-[#06143a]">Dashboard</h3>
              <div className="flex items-center gap-3 text-slate-600">
                <span className="rounded-lg border border-slate-200 px-3 py-1.5 text-[11px] font-bold">
                  May 19 - May 25, 2025
                </span>
                <Search className="h-5 w-5" aria-hidden="true" />
                <Bell className="h-5 w-5" aria-hidden="true" />
                <Settings className="h-5 w-5" aria-hidden="true" />
              </div>
            </div>

            <div className="mt-4 grid gap-2.5 md:grid-cols-2 xl:grid-cols-5">
              {dashboard.metrics.map((metric) => (
                <article key={metric.label} className="rounded-xl border border-slate-200 bg-white p-2.5 shadow-sm">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-bold text-slate-500">{metric.label}</p>
                      <p className="mt-1 text-lg font-black tracking-tight text-[#06143a]">{metric.value}</p>
                      <p className="mt-1 text-xs font-black text-emerald-600">{metric.meta}</p>
                    </div>
                    <SuiteTinyIcon icon={metric.icon} tone={metric.tone} />
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-3.5 grid gap-3.5 xl:grid-cols-[1.15fr_0.85fr]">
              <section className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-sm">
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-black text-[#06143a]">Revenue Overview</h4>
                  <span className="rounded-lg border border-slate-200 px-3 py-1 text-xs font-bold text-slate-500">
                    This Week
                  </span>
                </div>
                <svg viewBox="0 0 540 190" className="mt-3 h-28 w-full xl:h-32" aria-hidden="true">
                  {[0, 1, 2, 3, 4].map((line) => (
                    <line key={line} x1="0" x2="540" y1={28 + line * 34} y2={28 + line * 34} stroke="#e2e8f0" />
                  ))}
                  <path
                    d="M18 158 C65 118 85 108 124 130 C172 158 172 70 229 76 C278 82 278 138 330 96 C378 58 400 112 438 70 C478 28 496 68 522 26"
                    fill="none"
                    stroke="#0b61ff"
                    strokeLinecap="round"
                    strokeWidth="5"
                  />
                  {[18, 124, 229, 330, 438, 522].map((x, index) => (
                    <circle key={x} cx={x} cy={[158, 130, 76, 96, 70, 26][index]} r="5" fill="#0b61ff" />
                  ))}
                </svg>
              </section>

              <section className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-sm">
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-black text-[#06143a]">Sales Pipeline</h4>
                  <span className="rounded-lg border border-slate-200 px-3 py-1 text-xs font-bold text-slate-500">
                    This Week
                  </span>
                </div>
                <div className="mt-4 grid gap-2.5">
                  {[
                    ["New", "750", "bg-[#062867]", "100%"],
                    ["Contacted", "450", "bg-[#1976e8]", "82%"],
                    ["Qualified", "300", "bg-[#ff7a13]", "66%"],
                    ["Proposal", "150", "bg-[#ffbd2d]", "48%"],
                    ["Closed", "75", "bg-[#22c55e]", "32%"],
                  ].map(([label, count, color, width]) => (
                    <div key={label} className="flex items-center gap-3">
                      <span className={`h-5 rounded-sm ${color}`} style={{ width }} />
                      <span className="w-28 text-xs font-bold text-slate-700">
                        {label} ({count})
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <div className="mt-3.5 grid gap-3.5 xl:grid-cols-3">
              <SmallDashboardCard title="Top Sources" />
              <section className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-sm">
                <h4 className="text-base font-black text-[#06143a]">Recent Activity</h4>
                <div className="mt-4 space-y-3">
                  {dashboard.activities.map((activity, index) => (
                    <div key={activity} className="flex items-center justify-between gap-3 text-sm">
                      <span className="flex items-center gap-2 font-semibold text-slate-700">
                        <span className="h-2 w-2 rounded-full bg-emerald-500" />
                        {activity}
                      </span>
                      <span className="text-xs text-slate-400">{index + 1}h ago</span>
                    </div>
                  ))}
                </div>
              </section>
              <SmallDashboardCard title="Task Progress" bars />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-center">
        <Link
          href="/contact"
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#062867] to-[#073b95] px-7 py-2.5 text-sm font-black text-white shadow-[0_14px_30px_rgba(6,40,103,0.22)] sm:text-base"
        >
          View Full Dashboard
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </>
  );
}

function SmallDashboardCard({ title, bars = false }: { title: string; bars?: boolean }) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-sm">
      <h4 className="text-base font-black text-[#06143a]">{title}</h4>
      {bars ? (
        <div className="mt-4 space-y-4">
          {["Follow-ups", "Proposals", "Onboarding", "Support Tickets"].map((item, index) => (
            <div key={item}>
              <div className="flex justify-between text-xs font-bold text-slate-600">
                <span>{item}</span>
                <span>{[75, 60, 90, 45][index]}%</span>
              </div>
              <div className="mt-2 h-2 rounded-full bg-slate-100">
                <div
                  className={cn("h-full rounded-full", index === 2 ? "bg-emerald-500" : "bg-[#0b61ff]")}
                  style={{ width: `${[75, 60, 90, 45][index]}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-4 grid place-items-center">
          <div className="h-20 w-20 rounded-full border-[13px] border-[#0b61ff] border-b-[#ffb020] border-l-[#13c06b]" />
        </div>
      )}
    </section>
  );
}
