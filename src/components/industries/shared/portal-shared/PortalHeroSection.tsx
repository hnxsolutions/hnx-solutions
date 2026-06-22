import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  ArrowRight,
  BarChart3,
  Battery,
  CalendarDays,
  ClipboardList,
  CreditCard,
  EyeOff,
  FileText,
  FlaskConical,
  HeartPulse,
  LayoutDashboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquareText,
  Play,
  Plus,
  ScanFace,
  Settings,
  ShieldCheck,
  Users,
  Wifi,
} from "lucide-react";
import { PortalReveal } from "./PortalMotion";
import type { IndustryPortalPageData } from "./portalTypes";

type Tone = "blue" | "violet" | "emerald" | "cyan" | "slate";

type SidebarItem = {
  label: string;
  icon: LucideIcon;
  badge?: string;
};

type SummaryCard = {
  title: string;
  value: string;
  description: string;
  icon: LucideIcon;
  tone: Tone;
};

type OverviewMetric = {
  label: string;
  value: string;
  unit: string;
  status: string;
};

type RecentItem = {
  date: string;
  title: string;
  meta: string;
  status: string;
};

type TeamMember = {
  name: string;
  role: string;
  initials: string;
  tone: string;
};

type HeroMockupData = {
  brandName: string;
  brandMeta: string;
  greeting: string;
  subGreeting: string;
  userName: string;
  userRole: string;
  sidebarItems: SidebarItem[];
  topCards: SummaryCard[];
  overviewTitle: string;
  overviewMetrics: OverviewMetric[];
  recentTitle: string;
  recentItems: RecentItem[];
  teamTitle: string;
  teamMembers: TeamMember[];
  mobileEmail: string;
};

const trustIcons = [ShieldCheck, LayoutDashboard, BarChart3];

export default function PortalHeroSection({ data }: { data: IndustryPortalPageData }) {
  const BadgeIcon = data.industrySlug === "healthcare" ? HeartPulse : ShieldCheck;

  return (
    <section className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_52%,#eef3ff_100%)] px-5 pb-10 pt-[calc(var(--nav-offset)+0.75rem)] text-slate-950 sm:px-8 lg:min-h-[calc(100svh-var(--nav-offset))] lg:px-10 lg:pb-0 lg:pt-[var(--nav-offset)] xl:px-12 2xl:px-14">
      <HeroBackground />

      <div className="relative z-10 mx-auto grid w-full min-w-0 max-w-[1500px] gap-8 lg:min-h-[calc(100svh-var(--nav-offset))] lg:grid-cols-[minmax(0,0.41fr)_minmax(0,0.59fr)] lg:items-start lg:gap-7 lg:pb-8 lg:pt-14 xl:pt-16">
        <PortalReveal className="relative z-20 w-full min-w-0 max-w-[350px] pt-0 sm:max-w-[680px] lg:pt-1 xl:pt-0">
          <div className="inline-flex items-center gap-2.5 rounded-2xl bg-[#e7edff] px-4 py-2.5 text-sm font-extrabold text-[#123de0] shadow-[0_14px_34px_rgba(59,88,190,0.12)] sm:text-base">
            <BadgeIcon className="h-5 w-5" aria-hidden="true" />
            {data.hero.eyebrow}
          </div>

          <h1 className="mt-6 max-w-full break-words text-[2.15rem] font-extrabold leading-[1.08] tracking-normal text-[#071538] sm:text-[2.85rem] lg:text-[3.05rem] xl:text-[3.35rem] 2xl:text-[3.65rem]">
            {data.hero.title}
          </h1>

          <p className="mt-5 max-w-full text-sm font-medium leading-7 text-[#31466d] sm:max-w-[620px] sm:text-base sm:leading-8">
            {data.hero.description}
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href={data.hero.primaryCta.href}
              className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-xl bg-[#123adf] px-6 py-3 text-sm font-extrabold text-white shadow-[0_16px_32px_rgba(18,58,223,0.24)] transition hover:-translate-y-0.5 hover:bg-[#0f32c8] sm:w-auto"
            >
              {data.hero.primaryCta.label}
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
            <Link
              href={data.hero.secondaryCta.href}
              className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-xl border border-[#9cacff] bg-white/75 px-6 py-3 text-sm font-extrabold text-[#123adf] shadow-[0_14px_30px_rgba(48,73,166,0.08)] backdrop-blur transition hover:-translate-y-0.5 hover:border-[#123adf] hover:bg-white sm:w-auto"
            >
              <span className="grid h-6 w-6 place-items-center rounded-full border border-[#123adf]/30 bg-white text-[#123adf]">
                <Play className="h-3 w-3 fill-current" aria-hidden="true" />
              </span>
              {data.hero.secondaryCta.label}
            </Link>
          </div>

          <div className="mt-7 grid w-full max-w-[640px] gap-3 sm:grid-cols-3">
            {data.hero.trustChips.slice(0, 3).map((chip, index) => {
              const Icon = trustIcons[index] ?? ShieldCheck;

              return (
                <div
                  key={chip}
                  className="flex min-h-[60px] items-center gap-3 rounded-xl border border-white/80 bg-white/70 px-3 py-2.5 text-xs font-bold leading-5 text-[#263a62] shadow-[0_12px_30px_rgba(31,54,118,0.08)] backdrop-blur sm:text-sm"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white text-[#123adf] shadow-[0_8px_20px_rgba(18,58,223,0.12)]">
                    <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                  </span>
                  <span>{chip}</span>
                </div>
              );
            })}
          </div>
        </PortalReveal>

        <PortalDashboardMockup data={data} />
      </div>
    </section>
  );
}

function HeroBackground() {
  return (
    <>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[42%] bg-[radial-gradient(ellipse_at_center,rgba(91,112,255,0.18)_0%,rgba(59,130,246,0.09)_38%,transparent_72%)]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(224,232,255,0.72)_100%)]" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-28 left-[-6%] h-[280px] w-[112%] rounded-[50%] border-t border-white/80" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-52 left-[12%] h-[360px] w-[92%] rounded-[50%] border-t border-white/70" aria-hidden="true" />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-[260px] w-[420px] bg-[radial-gradient(circle,rgba(37,99,235,0.18)_1px,transparent_1.6px)] bg-[size:18px_18px] [mask-image:radial-gradient(ellipse_at_bottom_left,black_0%,transparent_72%)]"
        aria-hidden="true"
      />
    </>
  );
}

function PortalDashboardMockup({ data }: { data: IndustryPortalPageData }) {
  const mockup = getHeroMockupData(data);

  return (
    <PortalReveal delay={0.08} y={20} className="relative z-10 min-w-0">
      <div className="relative mx-auto h-auto w-full min-w-0 max-w-full lg:h-[520px] lg:max-w-[820px] xl:h-[570px] xl:max-w-[920px] 2xl:h-[610px] 2xl:max-w-[990px]">
        <div className="relative w-full overflow-hidden rounded-[1.55rem] border border-[#d6def0] bg-white shadow-[0_28px_80px_rgba(27,43,83,0.16)] lg:absolute lg:left-0 lg:top-1/2 lg:w-[94%] lg:-translate-y-1/2">
          <div className="grid h-[500px] grid-cols-[140px_minmax(0,1fr)] overflow-hidden sm:grid-cols-[170px_minmax(0,1fr)] lg:h-[510px] lg:grid-cols-[175px_minmax(0,1fr)] xl:h-[550px] 2xl:h-[590px] 2xl:grid-cols-[190px_minmax(0,1fr)]">
            <DashboardSidebar mockup={mockup} />
            <DashboardMain mockup={mockup} />
          </div>
        </div>

        <MobileLoginCard mockup={mockup} />
      </div>
    </PortalReveal>
  );
}

function DashboardSidebar({ mockup }: { mockup: HeroMockupData }) {
  return (
    <aside className="grid min-h-0 grid-rows-[76px_1fr] border-r border-[#dce4f2] xl:grid-rows-[84px_1fr]">
      <div className="flex items-center gap-2 bg-white px-4">
        <BrandMark className="h-10 w-10" iconClassName="h-5 w-5" />
        <div className="min-w-0">
          <p className="truncate text-[13px] font-extrabold leading-4 text-[#111c37]">
            {mockup.brandName}
          </p>
          <p className="mt-0.5 truncate text-[9px] font-black uppercase tracking-[0.16em] text-[#65708a]">
            {mockup.brandMeta}
          </p>
        </div>
      </div>

      <div className="flex min-h-0 flex-col bg-[linear-gradient(180deg,#073f8b_0%,#062e67_52%,#052655_100%)] px-3 py-5 text-white">
        <nav className="space-y-2">
          {mockup.sidebarItems.slice(0, 9).map((item, index) => {
            const Icon = item.icon;
            const active = index === 0;

            return (
              <div
                key={item.label}
                className={`flex min-h-10 items-center gap-3 rounded-lg px-3 text-[12px] font-extrabold ${
                  active
                    ? "bg-[#1261d9] text-white shadow-[0_12px_22px_rgba(0,0,0,0.16)]"
                    : "text-blue-50/90"
                }`}
              >
                <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span className="hidden min-w-0 flex-1 truncate sm:block">{item.label}</span>
                {item.badge ? (
                  <span className="grid h-5 min-w-5 place-items-center rounded-full bg-[#2080ff] px-1.5 text-[10px] font-black">
                    {item.badge}
                  </span>
                ) : null}
              </div>
            );
          })}
        </nav>

        <div className="mt-auto space-y-2 pt-4">
          <div className="flex min-h-10 items-center gap-3 rounded-lg px-3 text-[12px] font-extrabold text-blue-50/90">
            <Settings className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span className="hidden sm:block">Settings</span>
          </div>
          <div className="flex min-h-10 items-center gap-3 rounded-lg px-3 text-[12px] font-extrabold text-blue-50/90">
            <LogOut className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span className="hidden sm:block">Log out</span>
          </div>
        </div>
      </div>
    </aside>
  );
}

function DashboardMain({ mockup }: { mockup: HeroMockupData }) {
  return (
    <div className="min-w-0 bg-[#fbfdff]">
      <header className="flex h-[76px] items-center justify-between border-b border-[#e2e8f3] bg-white px-4 xl:h-[84px] xl:px-7">
        <div className="min-w-0">
          <p className="truncate text-base font-extrabold text-[#111c37] xl:text-lg">
            {mockup.greeting}
          </p>
          <p className="mt-1 truncate text-[11px] font-semibold text-[#597093]">
            {mockup.subGreeting}
          </p>
        </div>

        <div className="hidden items-center gap-4 sm:flex">
          <Mail className="h-5 w-5 text-[#111c37]" aria-hidden="true" />
          <div className="flex items-center gap-3">
            <Avatar initials="SJ" tone="bg-gradient-to-br from-orange-200 to-orange-500 text-white" />
            <div className="hidden min-w-0 lg:block">
              <p className="truncate text-[12px] font-extrabold text-[#111c37]">
                {mockup.userName}
              </p>
              <p className="text-[10px] font-semibold text-[#65708a]">
                {mockup.userRole}
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="p-4 xl:p-6">
        <div className="grid gap-3 md:grid-cols-3">
          {mockup.topCards.map((card) => (
            <SummaryCard key={card.title} card={card} />
          ))}
        </div>

        <section className="mt-4 rounded-xl border border-[#dbe4f2] bg-white p-4 shadow-[0_10px_28px_rgba(31,54,118,0.04)] xl:mt-5 xl:p-5">
          <h2 className="text-sm font-extrabold text-[#111c37]">
            {mockup.overviewTitle}
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {mockup.overviewMetrics.map((metric) => (
              <MetricCard key={metric.label} metric={metric} />
            ))}
          </div>
        </section>

        <div className="mt-4 grid gap-3 xl:mt-5 xl:grid-cols-[1.15fr_0.85fr]">
          <RecentAppointments mockup={mockup} />
          <CareTeam mockup={mockup} />
        </div>
      </div>
    </div>
  );
}

function SummaryCard({ card }: { card: SummaryCard }) {
  const Icon = card.icon;

  return (
    <article className="min-h-[84px] rounded-xl border border-[#dbe4f2] bg-white p-3 shadow-[0_10px_26px_rgba(31,54,118,0.04)] xl:min-h-[104px] xl:p-4">
      <div className="flex items-start gap-3">
        <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-lg ${getToneClass(card.tone)}`}>
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <p className="line-clamp-1 text-[11px] font-extrabold text-[#111c37] xl:text-[12px]">
            {card.title}
          </p>
          <p className="mt-1 line-clamp-1 text-[11px] font-extrabold text-[#123adf] xl:text-[12px]">
            {card.value}
          </p>
          <p className="mt-1 line-clamp-2 text-[10px] font-semibold leading-4 text-[#4d6182]">
            {card.description}
          </p>
        </div>
      </div>
    </article>
  );
}

function MetricCard({ metric }: { metric: OverviewMetric }) {
  return (
    <div className="min-h-[96px] rounded-xl border border-[#e0e7f2] bg-white p-3 xl:min-h-[114px]">
      <p className="text-[10px] font-extrabold text-[#263a62] xl:text-[11px]">
        {metric.label}
      </p>
      <p className="mt-2 text-xl font-extrabold leading-none text-[#111c37] xl:text-2xl">
        {metric.value}
      </p>
      <p className="mt-1 text-[10px] font-semibold text-[#506485]">
        {metric.unit}
      </p>
      <div className="mt-3 rounded-md bg-emerald-50 px-2 py-1.5 text-[10px] font-extrabold text-emerald-700">
        {metric.status}
      </div>
    </div>
  );
}

function RecentAppointments({ mockup }: { mockup: HeroMockupData }) {
  return (
    <section className="rounded-xl border border-[#dbe4f2] bg-white p-4 shadow-[0_10px_28px_rgba(31,54,118,0.04)]">
      <h2 className="text-sm font-extrabold text-[#111c37]">
        {mockup.recentTitle}
      </h2>
      <div className="mt-3 space-y-2">
        {mockup.recentItems.slice(0, 3).map((item) => (
          <div key={`${item.date}-${item.title}`} className="flex items-center gap-3 rounded-lg border border-[#edf2f8] bg-white px-3 py-2">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-blue-50 text-[#123adf]">
              <CalendarDays className="h-4 w-4" aria-hidden="true" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[10px] font-semibold text-[#6b7891]">
                {item.date}
              </p>
              <p className="truncate text-[11px] font-extrabold text-[#111c37]">
                {item.title}
              </p>
              <p className="truncate text-[10px] font-semibold text-[#4d6182]">
                {item.meta}
              </p>
            </div>
            <span className="hidden rounded-md bg-emerald-50 px-2 py-1 text-[9px] font-extrabold text-emerald-700 sm:inline-flex">
              {item.status}
            </span>
          </div>
        ))}
      </div>
      <p className="mt-3 text-[11px] font-extrabold text-[#123adf]">
        View all appointments
      </p>
    </section>
  );
}

function CareTeam({ mockup }: { mockup: HeroMockupData }) {
  return (
    <section className="rounded-xl border border-[#dbe4f2] bg-white p-4 shadow-[0_10px_28px_rgba(31,54,118,0.04)]">
      <h2 className="text-sm font-extrabold text-[#111c37]">
        {mockup.teamTitle}
      </h2>
      <div className="mt-4 space-y-3">
        {mockup.teamMembers.slice(0, 3).map((member) => (
          <div key={member.name} className="flex items-center gap-3">
            <Avatar initials={member.initials} tone={member.tone} />
            <div className="min-w-0">
              <p className="truncate text-[11px] font-extrabold text-[#111c37]">
                {member.name}
              </p>
              <p className="truncate text-[10px] font-semibold text-[#4d6182]">
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-4 text-[11px] font-extrabold text-[#123adf]">
        View care team
      </p>
    </section>
  );
}

function MobileLoginCard({ mockup }: { mockup: HeroMockupData }) {
  return (
    <div className="relative z-20 mx-auto -mt-14 w-[min(86vw,270px)] rounded-[1.65rem] border border-[#dbe4f0] bg-white p-4 shadow-[0_24px_70px_rgba(26,42,82,0.18)] lg:absolute lg:right-0 lg:top-[70%] lg:mt-0 lg:w-[235px] lg:-translate-y-1/2 xl:w-[260px] 2xl:w-[280px]">
      <div className="flex items-center justify-between text-[11px] font-extrabold text-black">
        <span>9:41</span>
        <span className="flex items-center gap-1">
          <Wifi className="h-3 w-3" aria-hidden="true" />
          <Battery className="h-3.5 w-3.5" aria-hidden="true" />
        </span>
      </div>

      <div className="mt-6 flex items-center justify-center gap-3">
        <BrandMark className="h-9 w-9" iconClassName="h-5 w-5" />
        <div>
          <p className="text-base font-extrabold leading-5 text-[#111c37]">
            {mockup.brandName}
          </p>
          <p className="text-[9px] font-black uppercase tracking-[0.16em] text-[#65708a]">
            {mockup.brandMeta}
          </p>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-extrabold text-[#111c37]">
          Welcome back 👋
        </h2>
        <p className="mt-1 text-[11px] font-semibold text-[#586b8a]">
          Sign in to your account
        </p>
      </div>

      <div className="mt-5 space-y-3">
        <LoginField label="Email address" value={mockup.mobileEmail} />
        <LoginField label="Password" value="********" secured />
      </div>

      <Link href="/contact" className="mt-2 block text-right text-[10px] font-extrabold text-[#123adf]">
        Forgot password?
      </Link>

      <Link
        href="/contact"
        className="mt-4 inline-flex h-10 w-full items-center justify-center rounded-lg bg-[#123adf] text-[12px] font-extrabold text-white shadow-[0_14px_26px_rgba(18,58,223,0.22)]"
      >
        Sign in
      </Link>

      <div className="my-4 flex items-center gap-3 text-[10px] font-semibold text-[#7b879d]">
        <span className="h-px flex-1 bg-[#edf1f7]" />
        or
        <span className="h-px flex-1 bg-[#edf1f7]" />
      </div>

      <button
        type="button"
        className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-lg border border-[#dbe4f0] bg-white text-[12px] font-extrabold text-[#263a62]"
      >
        <ScanFace className="h-4 w-4 text-[#123adf]" aria-hidden="true" />
        Use Face ID
      </button>

      <p className="mt-4 text-center text-[10px] font-semibold text-[#65708a]">
        Don&apos;t have an account? <span className="font-extrabold text-[#123adf]">Sign up</span>
      </p>
    </div>
  );
}

function LoginField({
  label,
  value,
  secured = false,
}: {
  label: string;
  value: string;
  secured?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-[10px] font-extrabold text-[#65708a]">{label}</span>
      <span className="mt-1.5 flex h-9 items-center rounded-lg border border-[#dbe4f0] bg-white px-3 text-[11px] font-semibold text-[#263a62]">
        <span className="min-w-0 flex-1 truncate">{value}</span>
        {secured ? <EyeOff className="h-4 w-4 text-[#7a869c]" aria-hidden="true" /> : null}
      </span>
    </label>
  );
}

function BrandMark({
  className,
  iconClassName,
}: {
  className: string;
  iconClassName: string;
}) {
  return (
    <span className={`grid shrink-0 place-items-center rounded-xl bg-[linear-gradient(135deg,#0d86ff,#123adf)] text-white shadow-[0_10px_22px_rgba(18,58,223,0.24)] ${className}`}>
      <Plus className={iconClassName} strokeWidth={4} aria-hidden="true" />
    </span>
  );
}

function Avatar({ initials, tone }: { initials: string; tone: string }) {
  return (
    <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full text-[11px] font-extrabold ${tone}`}>
      {initials}
    </span>
  );
}

function getToneClass(tone: Tone) {
  const tones: Record<Tone, string> = {
    blue: "bg-blue-50 text-[#123adf]",
    violet: "bg-violet-50 text-violet-600",
    emerald: "bg-emerald-50 text-emerald-600",
    cyan: "bg-cyan-50 text-cyan-600",
    slate: "bg-slate-100 text-slate-600",
  };

  return tones[tone];
}

function getHeroMockupData(data: IndustryPortalPageData): HeroMockupData {
  if (data.industrySlug === "healthcare") {
    return {
      brandName: "CareConnect",
      brandMeta: "Health Portal",
      greeting: "Good morning, Sarah 👋",
      subGreeting: "Here's what's happening today.",
      userName: "Sarah Johnson",
      userRole: "Patient",
      sidebarItems: [
        { label: "Dashboard", icon: LayoutDashboard },
        { label: "Appointments", icon: CalendarDays },
        { label: "My Health", icon: HeartPulse },
        { label: "Messages", icon: Mail, badge: "3" },
        { label: "Billing & Payments", icon: CreditCard },
        { label: "Documents", icon: FileText },
        { label: "Prescriptions", icon: ClipboardList },
        { label: "Care Team", icon: Users },
        { label: "Support", icon: LifeBuoy },
      ],
      topCards: [
        {
          title: "Upcoming Appointment",
          value: "May 24, 2025 · 10:30 AM",
          description: "Dr. Emily Carter Cardiology",
          icon: CalendarDays,
          tone: "violet",
        },
        {
          title: "Test Results",
          value: "2 New Results",
          description: "View your latest lab results",
          icon: FlaskConical,
          tone: "blue",
        },
        {
          title: "Messages",
          value: "3 Unread Messages",
          description: "From your care team",
          icon: MessageSquareText,
          tone: "emerald",
        },
      ],
      overviewTitle: "Health Overview",
      overviewMetrics: [
        { label: "Blood Pressure", value: "120/80", unit: "mmHg", status: "Normal" },
        { label: "Heart Rate", value: "72", unit: "bpm", status: "Normal" },
        { label: "Weight", value: "68.5", unit: "kg", status: "1.2 kg this month" },
        { label: "Blood Sugar", value: "98", unit: "mg/dL", status: "Good" },
      ],
      recentTitle: "Recent Appointments",
      recentItems: [
        { date: "May 24, 2025 · 10:30 AM", title: "Dr. Emily Carter", meta: "Cardiology", status: "Completed" },
        { date: "Apr 23, 2025 · 02:00 PM", title: "Dr. James Williams", meta: "General Physician", status: "Completed" },
        { date: "Apr 05, 2025 · 11:00 AM", title: "Dr. Sarah Thompson", meta: "Dermatology", status: "Completed" },
      ],
      teamTitle: "Care Team",
      teamMembers: [
        { name: "Dr. Emily Carter", role: "Cardiologist", initials: "EC", tone: "bg-orange-100 text-orange-700" },
        { name: "Dr. James Williams", role: "General Physician", initials: "JW", tone: "bg-blue-100 text-blue-700" },
        { name: "Nurse Lisa Anderson", role: "Care Coordinator", initials: "LA", tone: "bg-rose-100 text-rose-700" },
      ],
      mobileEmail: "sarah.johnson@email.com",
    };
  }

  const cards = data.loginExperience.cards;
  const metrics = data.dashboard.metrics;
  const primaryRole = data.roles[0]?.title ?? "User";

  return {
    brandName: data.portalName,
    brandMeta: `${data.industryName} Portal`,
    greeting: `Good morning, ${primaryRole} 👋`,
    subGreeting: data.loginExperience.latestUpdate,
    userName: data.loginExperience.profileTitle,
    userRole: data.loginExperience.accountStatus,
    sidebarItems: [
      { label: "Dashboard", icon: LayoutDashboard },
      ...data.dashboard.sidebarItems.slice(1, 8).map((item, index) => ({
        label: item,
        icon: [ClipboardList, FileText, CreditCard, LifeBuoy, Activity, Users, ShieldCheck][index] ?? LayoutDashboard,
      })),
    ],
    topCards: cards.slice(0, 3).map((card, index) => ({
      title: card.title,
      value: card.value,
      description: card.description,
      icon: card.icon,
      tone: (["blue", "violet", "emerald"] as Tone[])[index] ?? "blue",
    })),
    overviewTitle: `${data.portalName} Overview`,
    overviewMetrics: metrics.slice(0, 4).map((metric) => ({
      label: metric.label,
      value: metric.value,
      unit: metric.note,
      status: "Updated",
    })),
    recentTitle: "Recent Activity",
    recentItems: data.dashboard.requestStatus.map((item) => ({
      date: item.meta,
      title: item.title,
      meta: data.portalName,
      status: item.status,
    })),
    teamTitle: "Portal Team",
    teamMembers: data.roles.slice(0, 3).map((role, index) => ({
      name: role.title,
      role: role.accessLevel,
      initials: getInitials(role.title),
      tone: [
        "bg-blue-100 text-blue-700",
        "bg-violet-100 text-violet-700",
        "bg-emerald-100 text-emerald-700",
      ][index] ?? "bg-slate-100 text-slate-700",
    })),
    mobileEmail: `${data.industrySlug.replace(/-/g, ".")}@portal.com`,
  };
}

function getInitials(value: string) {
  return value
    .split(/[\s/]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}
