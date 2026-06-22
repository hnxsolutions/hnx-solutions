import {
  Activity,
  Bell,
  CalendarCheck,
  ChevronDown,
  FlaskConical,
  Heart,
  Home,
  Menu,
  MessageSquareText,
  Search,
  Settings,
  UsersRound,
  WalletCards,
  Zap,
} from "lucide-react";
import { cn } from "./portalSectionUtils";
import type { IndustryPortalPageData } from "./portalTypes";

const featureRows = [
  {
    title: "Real-time Updates",
    description: "Stay informed with live data and instant synchronization across all modules.",
    icon: Activity,
  },
  {
    title: "Quick Actions",
    description: "Access key functions and common tasks in just a click.",
    icon: Zap,
  },
  {
    title: "Performance Overview",
    description: "Monitor health metrics and operational KPIs with interactive insights.",
    icon: Activity,
  },
  {
    title: "Smart Notifications",
    description: "Personalized alerts and reminders keep you and your team ahead.",
    icon: Bell,
  },
];

const sidebarItems = [
  { label: "Dashboard", icon: Home, active: true },
  { label: "Appointments", icon: CalendarCheck },
  { label: "Health Records", icon: Activity },
  { label: "Messages", icon: MessageSquareText, badge: "3" },
  { label: "Lab Results", icon: FlaskConical },
  { label: "Medications", icon: WalletCards },
  { label: "Billing", icon: WalletCards },
  { label: "Care Team", icon: UsersRound },
  { label: "Settings", icon: Settings },
];

const healthMetrics = [
  { label: "Blood Pressure", value: "120/80", unit: "mmHg", icon: Heart, tone: "rose", status: "Normal" },
  { label: "Heart Rate", value: "72", unit: "bpm", icon: Heart, tone: "rose", status: "Normal" },
  { label: "Weight", value: "68.5", unit: "kg", icon: WalletCards, tone: "blue", status: "Healthy" },
  { label: "Blood Sugar", value: "98", unit: "mg/dL", icon: FlaskConical, tone: "violet", status: "Normal" },
];

const appointments = [
  ["May 20, 2025 - 10:30 AM", "Dr. Emily Carter", "Cardiologist", "Confirmed"],
  ["Jun 03, 2025 - 02:00 PM", "Dr. James Wilson", "General Physician", "Scheduled"],
  ["Jun 17, 2025 - 11:00 AM", "Dental Cleaning", "Smile Dental Clinic", "Pending"],
];

const careTeam = [
  ["Dr. Emily Carter", "Cardiologist", "EC"],
  ["Dr. James Wilson", "General Physician", "JW"],
  ["Nurse Olivia Brown", "Care Coordinator", "OB"],
  ["Dr. Michael Lee", "Endocrinologist", "ML"],
];

export default function PortalDashboardPreviewSection({ data }: { data: IndustryPortalPageData }) {
  const isHealthcare = data.industrySlug === "healthcare";

  return (
    <section id="portal-dashboard-preview" className="relative isolate scroll-mt-[calc(var(--nav-offset)+1rem)] overflow-hidden border-t border-blue-100/70 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_54%,#edf4ff_100%)] px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-14 xl:px-12">
      <DashboardBackground />

      <div className="relative mx-auto grid w-full max-w-[min(92vw,1440px)] gap-7 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-start">
        <div className="min-w-0">
          <div>
            <SectionLabel>Portal Dashboard</SectionLabel>
            <h2 className="mt-4 max-w-xl text-3xl font-extrabold leading-[1.1] tracking-normal text-[#071538] sm:text-4xl lg:text-[2.85rem]">
              {isHealthcare ? "Real-Time Insights at Your Fingertips" : `Real-Time ${data.industryName} Insights at Your Fingertips`}
            </h2>
            <p className="mt-4 max-w-xl text-sm font-medium leading-7 text-[#31466d] sm:text-base">
              {isHealthcare
                ? "A unified dashboard that brings together everything that matters-appointments, health data, messages, and care team updates-empowering patients, staff, and administrators to make informed decisions, faster."
                : `A unified dashboard that brings together requests, documents, updates, messages, and team activity for your ${data.portalName.toLowerCase()}.`}
            </p>

            <div className="mt-6 space-y-4">
              {featureRows.map((row) => {
                const Icon = row.icon;

                return (
                  <div key={row.title} className="flex gap-3.5">
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-blue-50 text-[#1257d9] shadow-[0_14px_30px_rgba(30,57,104,0.08)]">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </span>
                      <div>
                        <h3 className="text-[0.95rem] font-extrabold text-[#0a1740]">{row.title}</h3>
                        <p className="mt-1 max-w-md text-sm font-medium leading-6 text-[#526684]">{row.description}</p>
                      </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="min-w-0">
          <DashboardMockup />
        </div>
      </div>
    </section>
  );
}

function DashboardMockup() {
  return (
    <div className="relative mx-auto min-h-[500px] w-full max-w-[760px] lg:min-h-[520px] xl:max-w-[820px]">
      <div className="relative mr-0 min-w-0 overflow-hidden rounded-[1.5rem] border border-[#d9e4f4] bg-white shadow-[0_28px_90px_rgba(25,52,101,0.15)] xl:mr-12">
        <div className="grid min-h-[520px] lg:grid-cols-[145px_minmax(0,1fr)]">
          <aside className="hidden bg-[#06295b] p-3 text-white lg:flex lg:flex-col">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-white text-[#1158df]">
                <Heart className="h-5 w-5 fill-[#1158df]/10" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-black leading-none">CareConnect</p>
                <p className="mt-1 text-[9px] font-black uppercase tracking-[0.2em] text-blue-100">Health Portal</p>
              </div>
            </div>

            <nav className="mt-5 space-y-1">
              {sidebarItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className={cn(
                      "flex items-center gap-2 rounded-xl px-2.5 py-1.5 text-[11px] font-extrabold",
                      item.active ? "bg-[#135be8] shadow-[0_14px_28px_rgba(19,91,232,0.28)]" : "text-blue-50",
                    )}
                  >
                    <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                    <span className="truncate">{item.label}</span>
                    {item.badge ? (
                      <span className="ml-auto grid h-5 w-5 place-items-center rounded-full bg-[#2d7cff] text-[10px]">{item.badge}</span>
                    ) : null}
                  </div>
                );
              })}
            </nav>

            <div className="mt-auto">
              <div className="flex items-center gap-2.5 rounded-xl border border-white/20 bg-white/5 px-3 py-2 text-[11px] font-extrabold">
                <Bell className="h-[18px] w-[18px]" aria-hidden="true" />
                Need Help?
              </div>
              <div className="mt-4 flex items-center gap-2.5">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-[linear-gradient(135deg,#f7c9a5,#6f331f)] text-[11px] font-black">SJ</span>
                <div>
                  <p className="text-xs font-black">Sarah Johnson</p>
                  <p className="text-[11px] text-blue-100">Patient</p>
                </div>
                <ChevronDown className="ml-auto h-4 w-4" aria-hidden="true" />
              </div>
            </div>
          </aside>

          <div className="p-3 sm:p-4">
            <header className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-extrabold text-[#071538]">Good morning, Sarah 👋</h3>
                <p className="mt-1 text-xs font-semibold text-[#526684]">Here&apos;s what&apos;s happening with your health today.</p>
              </div>
              <div className="flex items-center gap-3">
                <Search className="h-5 w-5 text-[#31466d]" aria-hidden="true" />
                <span className="relative">
                  <Bell className="h-5 w-5 text-[#31466d]" aria-hidden="true" />
                  <span className="absolute -right-1 -top-2 grid h-5 w-5 place-items-center rounded-full bg-red-500 text-[10px] font-black text-white">2</span>
                </span>
                <span className="hidden h-9 w-9 place-items-center rounded-full bg-[linear-gradient(135deg,#f7c9a5,#6f331f)] text-[11px] font-black text-white sm:grid">SJ</span>
                <ChevronDown className="hidden h-4 w-4 text-[#31466d] sm:block" aria-hidden="true" />
              </div>
            </header>

            <div className="mt-4 grid gap-2.5 xl:grid-cols-3">
              <TopCard icon={CalendarCheck} tone="blue" title="Upcoming Appointment" value="May 20, 2025 - 10:30 AM" note="Dr. Emily Carter" link="View Details" />
              <TopCard icon={FlaskConical} tone="emerald" title="Test Results" value="2 new results available" note="Blood Test - May 15, 2025" link="View Results" />
              <TopCard icon={MessageSquareText} tone="violet" title="Messages" value="3 unread messages" note="from your care team" link="Go to Messages" />
            </div>

            <div className="mt-3 rounded-2xl border border-[#dce5f4] bg-white p-3 shadow-[0_12px_36px_rgba(30,57,104,0.055)]">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-extrabold text-[#071538]">Health Overview</h4>
                <span className="text-xs font-extrabold text-[#1257d9]">View All Metrics</span>
              </div>
              <div className="mt-3 grid gap-2.5 sm:grid-cols-2 xl:grid-cols-4">
                {healthMetrics.map((metric) => (
                  <MetricCard key={metric.label} metric={metric} />
                ))}
              </div>
            </div>

            <div className="mt-3 grid gap-3 xl:grid-cols-[0.9fr_1fr]">
              <div className="rounded-2xl border border-[#dce5f4] bg-white p-3 shadow-[0_12px_36px_rgba(30,57,104,0.055)]">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-extrabold text-[#071538]">Recent Appointments</h4>
                  <span className="text-xs font-extrabold text-[#1257d9]">View All</span>
                </div>
                <div className="mt-3 divide-y divide-[#edf2f8]">
                  {appointments.map((appointment, index) => (
                    <div key={appointment[1]} className="flex items-center gap-2.5 py-2">
                      <span className={cn("grid h-8 w-8 place-items-center rounded-xl", index === 2 ? "bg-orange-50 text-orange-600" : "bg-blue-50 text-[#1257d9]")}>
                        <CalendarCheck className="h-[18px] w-[18px]" aria-hidden="true" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-[11px] font-medium text-[#526684]">{appointment[0]}</p>
                        <p className="mt-0.5 text-xs font-extrabold text-[#071538]">{appointment[1]}</p>
                        <p className="text-[11px] font-medium text-[#526684]">{appointment[2]}</p>
                      </div>
                      <span className="rounded-lg bg-emerald-50 px-2.5 py-1 text-[10px] font-extrabold text-emerald-700">{appointment[3]}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-[#dce5f4] bg-white p-3 shadow-[0_12px_36px_rgba(30,57,104,0.055)]">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-extrabold text-[#071538]">Care Team</h4>
                  <span className="text-xs font-extrabold text-[#1257d9]">View All</span>
                </div>
                <div className="mt-3 divide-y divide-[#edf2f8]">
                  {careTeam.map((member) => (
                    <div key={member[0]} className="flex items-center gap-2.5 py-2">
                      <span className="grid h-8 w-8 place-items-center rounded-full bg-[linear-gradient(135deg,#f7c9a5,#6f331f)] text-[10px] font-black text-white">{member[2]}</span>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-extrabold text-[#071538]">{member[0]}</p>
                        <p className="text-[11px] font-medium text-[#526684]">{member[1]}</p>
                      </div>
                      <button type="button" className="rounded-lg border border-blue-200 px-2.5 py-1 text-[10px] font-extrabold text-[#1257d9]">Message</button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <MobileDashboardCard />
    </div>
  );
}

function TopCard({
  icon: Icon,
  tone,
  title,
  value,
  note,
  link,
}: {
  icon: typeof CalendarCheck;
  tone: "blue" | "emerald" | "violet";
  title: string;
  value: string;
  note: string;
  link: string;
}) {
  return (
    <article className="rounded-2xl border border-[#dce5f4] bg-white p-3 shadow-[0_12px_36px_rgba(30,57,104,0.055)]">
      <span className={cn("grid h-8 w-8 place-items-center rounded-xl", tone === "blue" ? "bg-blue-50 text-[#1257d9]" : tone === "emerald" ? "bg-emerald-50 text-emerald-600" : "bg-violet-50 text-violet-600")}>
        <Icon className="h-4 w-4" aria-hidden="true" />
      </span>
      <p className="mt-2.5 text-xs font-extrabold text-[#071538]">{title}</p>
      <p className="mt-2 text-xs font-extrabold text-[#071538]">{value}</p>
      <p className="mt-1 text-[11px] font-medium text-[#526684]">{note}</p>
      <p className="mt-3 text-[11px] font-extrabold text-[#1257d9]">{link} →</p>
    </article>
  );
}

function MetricCard({ metric }: { metric: (typeof healthMetrics)[number] }) {
  const Icon = metric.icon;

  return (
    <article className="rounded-2xl border border-[#e0e8f5] bg-white p-3 shadow-[0_10px_28px_rgba(30,57,104,0.045)]">
      <div className="flex items-center gap-3">
        <span className={cn("grid h-8 w-8 place-items-center rounded-xl", metric.tone === "rose" ? "bg-rose-50 text-rose-600" : metric.tone === "blue" ? "bg-blue-50 text-[#1257d9]" : "bg-violet-50 text-violet-600")}>
          <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
        </span>
        <p className="text-xs font-extrabold text-[#071538]">{metric.label}</p>
      </div>
      <p className="mt-3 text-lg font-extrabold text-[#071538]">{metric.value}</p>
      <p className="text-[11px] font-medium text-[#526684]">{metric.unit}</p>
      <div className="mt-3 flex items-center justify-between">
        <span className="inline-flex items-center gap-1 text-[11px] font-extrabold text-emerald-600">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          {metric.status}
        </span>
        <svg className="h-5 w-12 text-[#2e82ff]" viewBox="0 0 56 24" aria-hidden="true">
          <path d="M2 18 C10 14, 14 20, 21 13 S33 15, 38 8 S47 12, 54 6" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>
    </article>
  );
}

function MobileDashboardCard() {
  return (
    <div className="absolute bottom-5 right-0 hidden w-[205px] rounded-[1.5rem] border border-[#dce5f4] bg-white p-3.5 shadow-[0_28px_80px_rgba(25,52,101,0.2)] xl:block 2xl:w-[218px]">
      <div className="flex items-center justify-between text-[11px] font-black text-[#071538]">
        <span>9:41</span>
        <span>•••</span>
      </div>
      <div className="mt-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-xl bg-[#1257d9] text-white">
            <Heart className="h-4 w-4" aria-hidden="true" />
          </span>
          <div>
            <p className="text-[11px] font-black text-[#071538]">CareConnect</p>
            <p className="text-[8px] font-black uppercase tracking-[0.16em] text-[#1257d9]">Health Portal</p>
          </div>
        </div>
        <Menu className="h-5 w-5 text-[#071538]" aria-hidden="true" />
      </div>
      <h4 className="mt-4 text-xs font-extrabold text-[#071538]">Good morning, Sarah 👋</h4>
      <MobilePanel title="Upcoming Appointment" lines={["May 20, 2025 - 10:30 AM", "Dr. Emily Carter", "View Details →"]} />
      <MobilePanel title="Health Overview" compact />
      <MobilePanel title="Messages" lines={["3 unread messages", "from your care team", "Go to Messages →"]} />
    </div>
  );
}

function MobilePanel({
  title,
  lines,
  compact,
}: {
  title: string;
  lines?: string[];
  compact?: boolean;
}) {
  return (
    <div className="mt-3 rounded-2xl border border-[#dce5f4] bg-white p-2.5 shadow-[0_10px_24px_rgba(30,57,104,0.08)]">
      <p className="text-[11px] font-extrabold text-[#071538]">{title}</p>
      {compact ? (
        <div className="mt-2.5 grid grid-cols-2 gap-1.5">
          {healthMetrics.map((metric) => (
            <div key={metric.label} className="rounded-xl border border-[#e8eff8] p-1.5">
              <p className="text-[11px] font-black text-[#071538]">{metric.value}</p>
              <p className="text-[8px] font-bold text-[#526684]">{metric.unit}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-2 space-y-1">
          {lines?.map((line, index) => (
            <p key={line} className={cn("text-[10px] font-semibold", index === 2 ? "text-[#1257d9]" : "text-[#526684]")}>{line}</p>
          ))}
        </div>
      )}
    </div>
  );
}

function DashboardBackground() {
  return (
    <>
      <div className="pointer-events-none absolute right-8 top-10 h-52 w-52 bg-[radial-gradient(circle,rgba(37,99,235,0.12)_1px,transparent_1.6px)] bg-[size:18px_18px] [mask-image:radial-gradient(circle_at_center,black_0%,transparent_72%)]" aria-hidden="true" />
      <svg className="pointer-events-none absolute inset-x-0 bottom-0 h-64 w-full text-blue-200/70" viewBox="0 0 1440 260" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 170 C230 60 390 230 610 140 C820 54 1010 180 1188 112 C1290 74 1360 74 1440 88 L1440 260 L0 260 Z" fill="currentColor" opacity="0.34" />
        <path d="M0 142 C240 48 390 214 610 122 C835 28 1030 184 1220 92 C1302 52 1378 48 1440 58" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.8" />
        <path d="M0 158 C250 68 410 226 628 132 C846 42 1020 198 1215 112 C1320 66 1374 64 1440 78" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
      </svg>
    </>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <span className="text-xs font-black uppercase tracking-[0.22em] text-[#0b57e3]">
      {children}
    </span>
  );
}
