import {
  HiCalendar,
  HiChartBar,
  HiCheckCircle,
  HiClock,
  HiLightningBolt,
  HiSparkles,
  HiTrendingUp,
  HiUsers,
} from "react-icons/hi";

type CrmDashboardMockupProps = {
  compact?: boolean;
  className?: string;
};

const modules = [
  { label: "Leads", value: "428", active: true },
  { label: "Deals", value: "86", active: true },
  { label: "Customers", value: "1.2k", active: false },
  { label: "Tasks", value: "34", active: true },
  { label: "Calendar", value: "18", active: false },
  { label: "Reports", value: "12", active: false },
  { label: "Automation", value: "24", active: true },
];

const revenueBars = [42, 58, 46, 72, 64, 82, 76, 91];

const feed = [
  "AI flagged 14 high-intent leads",
  "Payment reminder workflow completed",
  "3 site visit tasks due today",
  "New customer added from website form",
];

export default function CRMDashboardMockup({
  compact = false,
  className = "",
}: CrmDashboardMockupProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-[1.75rem] border border-white/14 bg-slate-950/88 p-4 text-white shadow-[0_24px_80px_rgba(2,6,23,0.34)] backdrop-blur-2xl ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.22),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.18),transparent_32%)]" />
      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-cyan-300/70 to-transparent" />

      <div className="relative z-10">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-200/70">
              HNX CRM Demo
            </p>
            <h3 className="mt-1 text-lg font-bold sm:text-xl">
              Business Command Center
            </h3>
          </div>

          <div className="flex items-center gap-1.5 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1.5 text-[11px] font-semibold text-emerald-200">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
            Live
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {modules.slice(0, compact ? 4 : modules.length).map((module) => (
            <div
              key={module.label}
              className={`rounded-2xl border p-3 ${
                module.active
                  ? "border-cyan-300/20 bg-cyan-300/10"
                  : "border-white/10 bg-white/6"
              }`}
            >
              <p className="text-[10px] uppercase tracking-[0.16em] text-white/52">
                {module.label}
              </p>
              <p className="mt-1 text-lg font-bold text-white">{module.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-3 grid gap-3 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-white/10 bg-white/7 p-4">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-cyan-300/12 text-cyan-200">
                  <HiTrendingUp />
                </span>
                <div>
                  <p className="text-sm font-semibold">Revenue Chart</p>
                  <p className="text-[11px] text-white/50">Quarter pipeline</p>
                </div>
              </div>
              <span className="rounded-full bg-emerald-300/10 px-2.5 py-1 text-[11px] font-bold text-emerald-200">
                +28%
              </span>
            </div>

            <div className="flex h-34 items-end gap-2">
              {revenueBars.map((height, index) => (
                <div
                  key={`${height}-${index}`}
                  className="flex flex-1 items-end rounded-full bg-white/7"
                >
                  <div
                    className="w-full rounded-full bg-linear-to-t from-cyan-400 via-sky-300 to-violet-300 shadow-[0_0_18px_rgba(56,189,248,0.28)]"
                    style={{ height: `${height}%` }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-3">
            <div className="rounded-3xl border border-violet-300/16 bg-violet-300/10 p-4">
              <div className="mb-3 flex items-center gap-2">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-violet-200/14 text-violet-100">
                  <HiSparkles />
                </span>
                <div>
                  <p className="text-sm font-semibold">AI Insight Panel</p>
                  <p className="text-[11px] text-white/52">Recommended action</p>
                </div>
              </div>
              <p className="text-sm leading-6 text-white/76">
                Prioritize leads from paid search today. Similar deals closed
                31% faster this month.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/7 p-4">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-sm font-semibold">Activity Feed</p>
                <HiClock className="text-white/42" />
              </div>
              <div className="space-y-2.5">
                {feed.slice(0, compact ? 2 : feed.length).map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <HiCheckCircle className="mt-0.5 shrink-0 text-emerald-300" />
                    <p className="text-xs leading-5 text-white/68">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {!compact ? (
          <div className="mt-3 grid gap-3 sm:grid-cols-3">
            {[
              { icon: HiUsers, label: "Customers synced", value: "1,248" },
              { icon: HiCalendar, label: "Calendar events", value: "18" },
              { icon: HiLightningBolt, label: "Automations", value: "24 active" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/7 p-3"
              >
                <div className="mb-2 flex items-center gap-2 text-cyan-200">
                  <item.icon />
                  <span className="text-[10px] uppercase tracking-[0.16em] text-white/52">
                    {item.label}
                  </span>
                </div>
                <p className="text-sm font-bold">{item.value}</p>
              </div>
            ))}
          </div>
        ) : null}
      </div>

      <HiChartBar className="pointer-events-none absolute -bottom-8 -right-8 text-8xl text-cyan-300/8" />
    </div>
  );
}
