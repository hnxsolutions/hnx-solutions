"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
  type TouchEvent,
} from "react";
import {
  HiArrowLeft,
  HiArrowRight,
  HiChartBar,
  HiCheck,
  HiChevronRight,
  HiEye,
  HiLightningBolt,
  HiPause,
  HiPlay,
  HiShieldCheck,
  HiSparkles,
  HiUsers,
} from "react-icons/hi";

const commandCards = [
  {
    id: "overview",
    number: "01",
    title: "Executive Overview",
    eyebrow: "Executive Overview",
    description: "Real-time business performance at a glance.",
    icon: HiChartBar,
  },
  {
    id: "ai",
    number: "02",
    title: "AI Copilot",
    eyebrow: "AI Copilot",
    description: "Smart insights and recommendations.",
    icon: HiSparkles,
  },
  {
    id: "sales",
    number: "03",
    title: "Sales Pipeline",
    eyebrow: "Sales Pipeline",
    description: "Pipeline visibility and forecast.",
    icon: HiEye,
  },
  {
    id: "automation",
    number: "04",
    title: "Automation Hub",
    eyebrow: "Automation Hub",
    description: "Automate tasks and save time.",
    icon: HiLightningBolt,
  },
  {
    id: "team",
    number: "05",
    title: "Team Operations",
    eyebrow: "Team Operations",
    description: "Team performance and accountability.",
    icon: HiUsers,
  },
  {
    id: "risk",
    number: "06",
    title: "Risk Monitor",
    eyebrow: "Risk Monitor",
    description: "Alerts, bottlenecks, and business risks.",
    icon: HiShieldCheck,
  },
  {
    id: "workflow",
    number: "07",
    title: "Workflow Studio",
    eyebrow: "Workflow Studio",
    description: "Processes from lead capture to delivery.",
    icon: HiLightningBolt,
  },
  {
    id: "customer",
    number: "08",
    title: "Customer Health",
    eyebrow: "Customer Health",
    description: "NPS, sentiment, and account health.",
    icon: HiUsers,
  },
];

type CommandCard = (typeof commandCards)[number];

export default function HomeCommandCenterSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const activeCard = commandCards[activeIndex];

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % commandCards.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  const goNext = () => {
    setActiveIndex((current) => (current + 1) % commandCards.length);
  };

  const goPrev = () => {
    setActiveIndex(
      (current) => (current - 1 + commandCards.length) % commandCards.length,
    );
  };

  const visibleCards = useMemo(() => {
    return commandCards
      .map((card, index) => ({
        ...card,
        relative: getRelativePosition(index, activeIndex),
        originalIndex: index,
      }))
      .filter((card) => card.relative >= -2 && card.relative <= 2)
      .sort((a, b) => a.relative - b.relative);
  }, [activeIndex]);

  const leftCards = visibleCards.filter((card) => card.relative < 0);
  const rightCards = visibleCards.filter((card) => card.relative > 0);

  return (
    <section className="relative overflow-hidden bg-[#f8fbff] pt-24 pb-16 text-slate-950 sm:pt-28 lg:pt-32 lg:pb-20 dark:bg-slate-950 dark:text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(59,130,246,0.12),transparent_30%),radial-gradient(circle_at_82%_70%,rgba(124,58,237,0.16),transparent_34%)] dark:bg-[radial-gradient(circle_at_18%_18%,rgba(59,130,246,0.16),transparent_30%),radial-gradient(circle_at_82%_70%,rgba(124,58,237,0.18),transparent_34%)]" />
      <div className="pointer-events-none absolute left-[-15%] top-16 h-[540px] w-[540px] rounded-full border border-blue-200/60 dark:border-blue-400/10" />
      <div className="pointer-events-none absolute right-[-14%] bottom-8 h-[620px] w-[620px] rounded-full border border-violet-200/70 dark:border-violet-400/10" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#f8fbff] to-transparent dark:from-slate-950" />

      <div className="relative mx-auto w-full max-w-[min(95vw,1580px)] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/90 px-5 py-2 text-xs font-black uppercase tracking-[0.18em] text-blue-700 shadow-[0_14px_36px_rgba(37,99,235,0.10)] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.06] dark:text-blue-300">
            <HiSparkles className="text-base" />
            All-in-one Intelligence
          </span>

          <h2 className="mt-5 text-4xl font-black tracking-[-0.055em] text-slate-950 sm:text-5xl lg:text-6xl dark:text-white">
            Business Command Centre
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm font-semibold leading-7 text-slate-600 sm:text-base lg:text-lg dark:text-slate-300">
            Real-time intelligence across your entire business. One platform.
            Every insight. Every workflow. Every decision.
          </p>
        </div>

        <div
          className="relative mt-10"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative hidden items-stretch justify-center gap-4 lg:flex">
            <ArrowButton direction="left" onClick={goPrev} />

            <div className="hidden w-[210px] flex-col gap-4 xl:flex">
              {leftCards.map((card) => (
                <SideDashboardCard
                  key={card.id}
                  card={card}
                  onClick={() => setActiveIndex(card.originalIndex)}
                />
              ))}
            </div>

            <div className="w-full max-w-[760px]">
              <MainDashboardShell card={activeCard}>
                <DashboardContent card={activeCard} />
              </MainDashboardShell>
            </div>

            <div className="hidden w-[210px] flex-col gap-4 xl:flex">
              {rightCards.map((card) => (
                <SideDashboardCard
                  key={card.id}
                  card={card}
                  onClick={() => setActiveIndex(card.originalIndex)}
                />
              ))}
            </div>

            <ArrowButton direction="right" onClick={goNext} />
          </div>

          <MobileCommandCards
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            goNext={goNext}
            goPrev={goPrev}
          />

          <div className="relative mx-auto mt-8 max-w-[760px]">
            <div className="flex items-center justify-center gap-3">
              {commandCards.map((card, index) => (
                <button
                  key={card.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Open ${card.title}`}
                  className={[
                    "h-3 rounded-full transition-all duration-300",
                    index === activeIndex
                      ? "w-9 bg-blue-600"
                      : "w-3 bg-slate-300 hover:bg-blue-300 dark:bg-white/20",
                  ].join(" ")}
                />
              ))}
            </div>

            <div className="mt-5 flex items-center justify-center gap-3 text-sm font-semibold text-slate-500 dark:text-slate-400">
              <span>Swipe or click to explore command centres</span>
              <button
                type="button"
                onClick={() => setIsPaused((value) => !value)}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/85 px-3 py-1.5 text-xs font-black text-blue-700 shadow-sm backdrop-blur-xl transition hover:bg-blue-600 hover:text-white dark:border-white/10 dark:bg-white/[0.05] dark:text-blue-300"
              >
                {isPaused ? <HiPlay /> : <HiPause />}
                {isPaused ? "Play" : "Auto"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MainDashboardShell({
  card,
  children,
}: {
  card: CommandCard;
  children: ReactNode;
}) {
  const Icon = card.icon;

  return (
    <article className="relative overflow-hidden rounded-[34px] border border-blue-300 bg-white/92 p-6 shadow-[0_34px_100px_rgba(79,70,229,0.22),inset_0_0_0_1px_rgba(255,255,255,0.85)] ring-[3px] ring-blue-200/80 backdrop-blur-2xl dark:border-blue-400/40 dark:bg-white/[0.055] dark:ring-blue-400/20">
      <div className="pointer-events-none absolute inset-0 rounded-[34px] bg-[linear-gradient(135deg,rgba(37,99,235,0.08),transparent_36%,rgba(124,58,237,0.10))]" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-60 w-60 rounded-full bg-violet-100/80 blur-3xl dark:bg-violet-500/10" />
      <div className="pointer-events-none absolute -bottom-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-100/60 blur-3xl dark:bg-blue-500/10" />

      <div className="relative flex items-start justify-between gap-5">
        <div className="flex items-start gap-4">
          <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-blue-50 text-blue-700 shadow-[0_16px_36px_rgba(37,99,235,0.14)] ring-1 ring-blue-100 dark:bg-blue-500/10 dark:text-blue-300 dark:ring-blue-400/20">
            <Icon className="text-3xl" />
          </span>

          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="grid h-8 w-11 place-items-center rounded-full bg-white text-xs font-black text-blue-700 ring-1 ring-blue-100 dark:bg-white/[0.06] dark:text-blue-300 dark:ring-blue-400/20">
                {card.number}
              </span>
              <span className="rounded-full bg-blue-50 px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
                {card.eyebrow}
              </span>
            </div>

            <h3 className="mt-3 text-3xl font-black tracking-[-0.045em] text-slate-950 dark:text-white">
              {card.title}
            </h3>

            <p className="mt-2 text-sm font-semibold leading-6 text-slate-600 dark:text-slate-300">
              {card.description}
            </p>
          </div>
        </div>

        <div className="hidden items-center gap-2 sm:flex">
          <span className="rounded-xl border border-slate-200 bg-white/85 px-4 py-2.5 text-xs font-black text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/[0.05] dark:text-slate-300">
            This Month
          </span>
          <span className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 bg-white/85 text-slate-500 shadow-sm dark:border-white/10 dark:bg-white/[0.05]">
            ⋮
          </span>
        </div>
      </div>

      <div className="relative mt-6">{children}</div>
    </article>
  );
}

function DashboardContent({ card }: { card: CommandCard }) {
  if (card.id === "ai") return <AiInterface />;
  if (card.id === "sales") return <SalesInterface />;
  if (card.id === "automation") return <AutomationInterface />;
  if (card.id === "team") return <TeamInterface />;
  if (card.id === "risk") return <RiskInterface />;
  if (card.id === "workflow") return <WorkflowInterface />;
  if (card.id === "customer") return <CustomerInterface />;

  return <OverviewInterface />;
}

function OverviewInterface() {
  return (
    <div className="space-y-4">
      <div className="grid gap-3 md:grid-cols-4">
        <MetricCard icon="$" title="Revenue" value="$3.67M" change="↑ 18.6%" tone="blue" />
        <MetricCard icon="👥" title="New Leads" value="248" change="↑ 14.2%" tone="violet" />
        <MetricCard icon="✓" title="Tasks Done" value="86%" change="↑ 9.1%" tone="emerald" />
        <MetricCard icon="!" title="At Risk" value="14%" change="↓ 4.1%" tone="rose" />
      </div>

      <div className="grid gap-4 md:grid-cols-[1.25fr_0.95fr]">
        <GlassPanel title="Revenue Over Time" action="Weekly">
          <LineChart height="h-[170px]" />
          <div className="mt-3 grid grid-cols-3 gap-3">
            <MiniKpi title="Pipeline" value="$3.67M" change="↑ 12.5%" />
            <MiniKpi title="Won Deals" value="$1.24M" change="↑ 22.3%" />
            <MiniKpi title="Forecast" value="$5.92M" change="↑ 8.4%" />
          </div>
        </GlassPanel>

        <GlassPanel title="Revenue by Source">
          <div className="grid grid-cols-[120px_1fr] items-center gap-4">
            <DonutChart />
            <div className="space-y-2.5">
              <LegendRow color="bg-blue-600" label="Direct" value="$1.24M" />
              <LegendRow color="bg-violet-500" label="Partner" value="$1.01M" />
              <LegendRow color="bg-emerald-500" label="Organic" value="$782K" />
              <LegendRow color="bg-amber-500" label="Paid Ads" value="$456K" />
              <LegendRow color="bg-slate-300" label="Referral" value="$192K" />
            </div>
          </div>
          <DealList />
        </GlassPanel>
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        <BottomStat icon="👤" title="Team Activity" value="24" note="Active" />
        <BottomStat icon="⚙" title="Automation Impact" value="1,243" note="↑ 32%" />
        <BottomStat icon="😊" title="Customer NPS" value="82" note="↑ 6.4%" />
      </div>
    </div>
  );
}

function AiInterface() {
  return (
    <div className="grid gap-4 md:grid-cols-[0.95fr_1.05fr]">
      <GlassPanel title="Recommendation">
        <ActionRow icon="✓" title="Follow up with 8 cold leads" note="High engagement" tone="emerald" />
        <ActionRow icon="⏱" title="Review 3 at-risk accounts" note="Health declining" tone="blue" />
        <ActionRow icon="★" title="Schedule pipeline review" note="22 updates available" tone="amber" />

        <div className="mt-4 rounded-2xl bg-violet-50 p-4 dark:bg-violet-500/10">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-black text-slate-500 dark:text-slate-400">AI Score</p>
              <p className="mt-1 text-3xl font-black text-slate-950 dark:text-white">91%</p>
            </div>
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-black text-emerald-700">
              Excellent
            </span>
          </div>
          <MiniChart />
        </div>
      </GlassPanel>

      <GlassPanel title="Copilot Forecast">
        <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-violet-50 p-5 dark:from-blue-500/10 dark:to-violet-500/10">
          <p className="text-sm font-black text-slate-950 dark:text-white">
            Next best action
          </p>
          <p className="mt-2 text-sm font-semibold leading-6 text-slate-600 dark:text-slate-300">
            Focus on Enterprise SaaS renewals. Highest risk accounts need
            attention this week.
          </p>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-3">
          <MiniKpi title="Potential" value="$420K" change="Unlocked" />
          <MiniKpi title="Risk" value="3" change="Accounts" />
          <MiniKpi title="Speed" value="14%" change="Better" />
        </div>

        <LineChart height="mt-4 h-[150px]" />
      </GlassPanel>
    </div>
  );
}

function SalesInterface() {
  return (
    <div className="grid gap-4 md:grid-cols-[0.82fr_1.18fr]">
      <GlassPanel title="Pipeline Forecast">
        <p className="text-3xl font-black text-slate-950 dark:text-white">
          $3.67M
        </p>
        <p className="mt-1 text-xs font-black text-emerald-500">
          ↑ 18.6% vs last 30 days
        </p>

        <div className="mt-5 space-y-4">
          <ProgressRow label="Prospecting" value="$1.24M" width="82%" />
          <ProgressRow label="Qualification" value="$982K" width="64%" />
          <ProgressRow label="Proposal" value="$756K" width="78%" />
          <ProgressRow label="Closed Won" value="$226K" width="36%" />
        </div>

        <button
          type="button"
          className="mt-5 inline-flex items-center gap-2 text-sm font-black text-blue-700"
        >
          View pipeline <HiChevronRight />
        </button>
      </GlassPanel>

      <GlassPanel title="Top Deals">
        <div className="grid gap-3">
          <DealCard title="Enterprise SaaS Rollout" value="$128K" status="Qualification" />
          <DealCard title="Analytics Platform" value="$96K" status="Proposal" />
          <DealCard title="Security Upgrade" value="$74K" status="Negotiation" />
          <DealCard title="Automation Suite" value="$52K" status="Discovery" />
        </div>
      </GlassPanel>
    </div>
  );
}

function AutomationInterface() {
  return (
    <div className="grid gap-4 md:grid-cols-[0.9fr_1.1fr]">
      <GlassPanel title="Automation Impact">
        <MetricCard icon="$" title="Runs" value="1,243" change="↑ 32%" tone="blue" compact />
        <MetricCard icon="♟" title="Tasks" value="5,689" change="↑ 28%" tone="emerald" compact />
        <MetricCard icon="⏱" title="Saved" value="128h" change="↑ 35%" tone="violet" compact />
      </GlassPanel>

      <GlassPanel title="Active Workflows">
        <WorkflowRow title="Lead Nurture Flow" note="Triggered 12m ago" />
        <WorkflowRow title="Invoice Reminders" note="Triggered 1h ago" />
        <WorkflowRow title="Support Escalation" note="Triggered 2h ago" />

        <div className="mt-5 rounded-2xl bg-gradient-to-br from-blue-50 to-violet-50 p-4 dark:from-blue-500/10 dark:to-violet-500/10">
          <p className="text-sm font-black text-slate-950 dark:text-white">
            Workflow Overview
          </p>
          <div className="mt-4 flex items-center justify-between gap-2">
            {["▶", "✉", "🤖", "☰"].map((item) => (
              <span
                key={item}
                className="grid h-11 w-11 place-items-center rounded-full bg-white text-lg shadow-sm dark:bg-white/[0.08]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </GlassPanel>
    </div>
  );
}

function TeamInterface() {
  return (
    <div className="grid gap-4 md:grid-cols-[0.95fr_1.05fr]">
      <GlassPanel title="Top Performers">
        <TeamRow initials="AM" name="Alex Morgan" value="72%" />
        <TeamRow initials="PS" name="Priya Shah" value="67%" />
        <TeamRow initials="JL" name="Jordan Lee" value="62%" />
      </GlassPanel>

      <GlassPanel title="Team Health">
        <div className="grid grid-cols-[110px_1fr] items-center gap-4">
          <RingScore value="87%" />
          <div>
            <p className="text-xl font-black text-emerald-600">On Track</p>
            <p className="mt-2 text-sm font-semibold leading-6 text-slate-600 dark:text-slate-300">
              Team workload is balanced. Response time improved this month.
            </p>
          </div>
        </div>

        <div className="mt-5 space-y-3">
          <ProgressRow label="Sales" value="78%" width="78%" />
          <ProgressRow label="Support" value="82%" width="82%" />
          <ProgressRow label="Operations" value="58%" width="58%" />
        </div>
      </GlassPanel>
    </div>
  );
}

function RiskInterface() {
  return (
    <div className="grid gap-4 md:grid-cols-[0.9fr_1.1fr]">
      <GlassPanel title="Active Risk Queue">
        <ActionRow icon="!" title="3 accounts need attention" note="High priority" tone="rose" />
        <ActionRow icon="⏱" title="6 overdue follow-ups" note="Sales team" tone="amber" />
        <ActionRow icon="✓" title="12 resolved alerts" note="This week" tone="emerald" />
      </GlassPanel>

      <GlassPanel title="Risk Heatmap">
        <div className="grid grid-cols-4 gap-2">
          {Array.from({ length: 16 }).map((_, index) => (
            <span
              key={index}
              className={[
                "h-12 rounded-xl",
                index % 5 === 0
                  ? "bg-red-100"
                  : index % 3 === 0
                    ? "bg-amber-100"
                    : "bg-emerald-100",
              ].join(" ")}
            />
          ))}
        </div>
      </GlassPanel>
    </div>
  );
}

function WorkflowInterface() {
  return (
    <div className="grid gap-4 md:grid-cols-[1fr_1fr]">
      <GlassPanel title="Workflow Builder">
        <div className="grid grid-cols-2 gap-3">
          {[
            ["Lead", "Captured"],
            ["CRM", "Updated"],
            ["Email", "Sent"],
            ["Task", "Assigned"],
          ].map(([title, note], index) => (
            <div
              key={title}
              className="rounded-2xl border border-blue-100 bg-white p-4 text-center dark:border-white/10 dark:bg-white/[0.04]"
            >
              <span className="mx-auto grid h-9 w-9 place-items-center rounded-full bg-blue-50 text-sm font-black text-blue-700">
                {index + 1}
              </span>
              <p className="mt-3 text-sm font-black text-slate-950 dark:text-white">
                {title}
              </p>
              <p className="text-xs font-semibold text-slate-500">{note}</p>
            </div>
          ))}
        </div>
      </GlassPanel>

      <GlassPanel title="Running Automations">
        <WorkflowRow title="Lead routing" note="Live" />
        <WorkflowRow title="Invoice reminders" note="Live" />
        <WorkflowRow title="Support escalation" note="Live" />
        <div className="mt-4 rounded-2xl bg-violet-50 p-4 dark:bg-violet-500/10">
          <p className="text-lg font-black text-slate-950 dark:text-white">
            18 active workflows
          </p>
          <p className="text-xs font-black text-emerald-600">
            ↑ 28% automation coverage
          </p>
        </div>
      </GlassPanel>
    </div>
  );
}

function CustomerInterface() {
  return (
    <div className="grid gap-4 md:grid-cols-[0.85fr_1.15fr]">
      <GlassPanel title="Health Score">
        <RingScore value="82" />
        <p className="mt-4 text-center text-sm font-black text-emerald-600">
          Healthy Accounts
        </p>
      </GlassPanel>

      <GlassPanel title="Account Pulse">
        <CustomerRow name="Acme Corp" status="Healthy" tone="emerald" />
        <CustomerRow name="Globex Inc." status="At Risk" tone="amber" />
        <CustomerRow name="Northstar Group" status="Growing" tone="blue" />
        <LineChart height="mt-4 h-[130px]" />
      </GlassPanel>
    </div>
  );
}

function SideDashboardCard({
  card,
  onClick,
}: {
  card: CommandCard & { originalIndex: number; relative: number };
  onClick: () => void;
}) {
  const Icon = card.icon;

  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "group relative min-h-[250px] overflow-hidden rounded-[26px] border border-slate-200/80 bg-white/74 p-5 text-left shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white dark:border-white/10 dark:bg-white/[0.045]",
        Math.abs(card.relative) === 2 ? "opacity-70" : "opacity-100",
      ].join(" ")}
    >
      <div className="flex items-start justify-between">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-blue-700 shadow-sm ring-1 ring-blue-100 dark:bg-blue-500/10 dark:text-blue-300">
          <Icon className="text-xl" />
        </span>
        <span className="grid h-8 w-10 place-items-center rounded-full bg-blue-50 text-xs font-black text-blue-700 ring-1 ring-blue-100">
          {card.number}
        </span>
      </div>

      <h3 className="mt-5 text-lg font-black tracking-[-0.03em] text-slate-950 dark:text-white">
        {card.title}
      </h3>

      <p className="mt-3 text-sm font-semibold leading-6 text-slate-600 dark:text-slate-300">
        {card.description}
      </p>

      <div className="mt-5 rounded-2xl border border-slate-200 bg-white/80 p-3 dark:border-white/10 dark:bg-white/[0.04]">
        {card.id === "ai" ? (
          <>
            <MiniKpi title="AI Score" value="91%" change="Excellent" />
            <MiniChart />
          </>
        ) : card.id === "sales" ? (
          <>
            <MiniKpi title="Pipeline Value" value="$3.67M" change="↑ 18.6%" />
            <ProgressRow label="Prospecting" value="82%" width="82%" />
            <ProgressRow label="Proposal" value="78%" width="78%" />
          </>
        ) : card.id === "automation" ? (
          <>
            <MiniKpi title="Hours Saved" value="128h" change="↑ 35%" />
            <MiniChart />
          </>
        ) : card.id === "team" ? (
          <>
            <TeamRow initials="AM" name="Alex Morgan" value="72%" small />
            <TeamRow initials="PS" name="Priya Shah" value="67%" small />
          </>
        ) : (
          <>
            <MiniKpi title="Health" value="82" change="↑ 6.4%" />
            <MiniChart />
          </>
        )}
      </div>
    </button>
  );
}

function MobileCommandCards({
  activeIndex,
  setActiveIndex,
  goNext,
  goPrev,
}: {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  goNext: () => void;
  goPrev: () => void;
}) {
  const startX = useRef<number | null>(null);
  const activeCard = commandCards[activeIndex];

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    startX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (startX.current === null) return;

    const endX = event.changedTouches[0]?.clientX ?? startX.current;
    const difference = startX.current - endX;

    if (Math.abs(difference) > 45) {
      if (difference > 0) goNext();
      else goPrev();
    }

    startX.current = null;
  };

  return (
    <div className="lg:hidden">
      <div
        className="mx-auto max-w-[380px]"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <MainDashboardShell card={activeCard}>
          <DashboardContent card={activeCard} />
        </MainDashboardShell>
      </div>

      <div className="mt-5 flex gap-3 overflow-x-auto pb-2">
        {commandCards.map((card, index) => (
          <button
            key={card.id}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={[
              "w-[170px] shrink-0 rounded-2xl border p-4 text-left transition",
              activeIndex === index
                ? "border-blue-300 bg-blue-50 dark:border-blue-400/30 dark:bg-blue-500/10"
                : "border-slate-200 bg-white/80 dark:border-white/10 dark:bg-white/[0.04]",
            ].join(" ")}
          >
            <card.icon className="text-xl text-blue-700 dark:text-blue-300" />
            <p className="mt-3 text-xs font-black text-blue-700 dark:text-blue-300">
              {card.number}
            </p>
            <p className="mt-1 text-sm font-black text-slate-950 dark:text-white">
              {card.title}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}

function ArrowButton({
  direction,
  onClick,
}: {
  direction: "left" | "right";
  onClick: () => void;
}) {
  const Icon = direction === "left" ? HiArrowLeft : HiArrowRight;

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "left" ? "Previous card" : "Next card"}
      className={[
        "absolute top-1/2 z-30 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-slate-200 bg-white text-blue-700 shadow-[0_18px_45px_rgba(15,23,42,0.12)] transition hover:bg-blue-600 hover:text-white dark:border-white/10 dark:bg-slate-900 dark:text-blue-300",
        direction === "left" ? "left-0" : "right-0",
      ].join(" ")}
    >
      <Icon className="text-2xl" />
    </button>
  );
}

function GlassPanel({
  title,
  action,
  children,
}: {
  title: string;
  action?: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/82 p-4 shadow-[0_14px_40px_rgba(15,23,42,0.04)] dark:border-white/10 dark:bg-white/[0.04]">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-black text-slate-950 dark:text-white">
          {title}
        </p>
        {action ? (
          <span className="rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-black text-slate-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300">
            {action}
          </span>
        ) : null}
      </div>
      <div className="mt-3">{children}</div>
    </div>
  );
}

function MetricCard({
  icon,
  title,
  value,
  change,
  tone,
  compact = false,
}: {
  icon: string;
  title: string;
  value: string;
  change: string;
  tone: "blue" | "violet" | "emerald" | "rose";
  compact?: boolean;
}) {
  const toneClasses = {
    blue: "bg-blue-50 text-blue-700",
    violet: "bg-violet-50 text-violet-700",
    emerald: "bg-emerald-50 text-emerald-700",
    rose: "bg-rose-50 text-rose-700",
  };

  const chartStroke = {
    blue: "#2563eb",
    violet: "#8b5cf6",
    emerald: "#10b981",
    rose: "#f43f5e",
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white/86 p-4 dark:border-white/10 dark:bg-white/[0.04]">
      <div className="flex items-start gap-3">
        <span
          className={[
            "grid h-11 w-11 shrink-0 place-items-center rounded-full text-lg font-black",
            toneClasses[tone],
          ].join(" ")}
        >
          {icon}
        </span>
        <div>
          <p className="text-xs font-black text-slate-500 dark:text-slate-400">
            {title}
          </p>
          <p className="mt-1 text-2xl font-black text-slate-950 dark:text-white">
            {value}
          </p>
          <p
            className={[
              "text-xs font-black",
              change.includes("↓") ? "text-red-500" : "text-emerald-500",
            ].join(" ")}
          >
            {change}
          </p>
        </div>
      </div>

      {!compact ? <TinyLine stroke={chartStroke[tone]} /> : null}
    </div>
  );
}

function MiniKpi({
  title,
  value,
  change,
}: {
  title: string;
  value: string;
  change: string;
}) {
  return (
    <div className="rounded-xl bg-slate-50 p-3 dark:bg-white/[0.04]">
      <p className="text-xs font-black text-slate-500 dark:text-slate-400">
        {title}
      </p>
      <p className="mt-1 text-lg font-black text-slate-950 dark:text-white">
        {value}
      </p>
      <p className="text-[10px] font-black text-emerald-500">{change}</p>
    </div>
  );
}

function BottomStat({
  icon,
  title,
  value,
  note,
}: {
  icon: string;
  title: string;
  value: string;
  note: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/82 p-4 dark:border-white/10 dark:bg-white/[0.04]">
      <span className="grid h-11 w-11 place-items-center rounded-full bg-blue-50 text-xl">
        {icon}
      </span>
      <div>
        <p className="text-xs font-black text-slate-600 dark:text-slate-300">
          {title}
        </p>
        <p className="text-xl font-black text-slate-950 dark:text-white">
          {value} <span className="text-xs text-emerald-500">{note}</span>
        </p>
      </div>
    </div>
  );
}

function ActionRow({
  icon,
  title,
  note,
  tone,
}: {
  icon: string;
  title: string;
  note: string;
  tone: "emerald" | "blue" | "amber" | "rose";
}) {
  const toneClass = {
    emerald: "bg-emerald-50 text-emerald-600",
    blue: "bg-blue-50 text-blue-600",
    amber: "bg-amber-50 text-amber-600",
    rose: "bg-rose-50 text-rose-600",
  };

  return (
    <div className="mb-3 flex items-center gap-3 rounded-2xl bg-white/82 p-3 last:mb-0 dark:bg-white/[0.04]">
      <span className={["grid h-10 w-10 place-items-center rounded-full text-sm font-black", toneClass[tone]].join(" ")}>
        {icon}
      </span>
      <div>
        <p className="text-sm font-black text-slate-950 dark:text-white">
          {title}
        </p>
        <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
          {note}
        </p>
      </div>
    </div>
  );
}

function DealCard({
  title,
  value,
  status,
}: {
  title: string;
  value: string;
  status: string;
}) {
  return (
    <div className="grid grid-cols-[1fr_auto] items-center gap-4 rounded-2xl bg-slate-50 p-4 dark:bg-white/[0.04]">
      <div>
        <p className="text-sm font-black text-slate-950 dark:text-white">
          {title}
        </p>
        <p className="text-xs font-semibold text-slate-500">{status}</p>
      </div>
      <p className="text-sm font-black text-blue-700 dark:text-blue-300">
        {value}
      </p>
    </div>
  );
}

function WorkflowRow({ title, note }: { title: string; note: string }) {
  return (
    <div className="mb-3 flex items-center justify-between rounded-2xl bg-slate-50 p-4 last:mb-0 dark:bg-white/[0.04]">
      <p className="text-sm font-black text-slate-800 dark:text-slate-200">
        {title}
      </p>
      <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-black text-emerald-600">
        {note}
      </span>
    </div>
  );
}

function TeamRow({
  initials,
  name,
  value,
  small = false,
}: {
  initials: string;
  name: string;
  value: string;
  small?: boolean;
}) {
  return (
    <div className="mb-3 grid grid-cols-[40px_1fr_auto] items-center gap-3 last:mb-0">
      <span className="grid h-10 w-10 place-items-center rounded-full bg-blue-100 text-xs font-black text-blue-700">
        {initials}
      </span>
      <div>
        <p className="text-sm font-black text-slate-950 dark:text-white">
          {name}
        </p>
        <div className="mt-1 h-2 rounded-full bg-slate-100 dark:bg-white/10">
          <div className="h-full rounded-full bg-blue-600" style={{ width: value }} />
        </div>
      </div>
      <span className={small ? "text-xs font-black text-slate-500" : "text-sm font-black text-slate-600 dark:text-slate-300"}>
        {value}
      </span>
    </div>
  );
}

function CustomerRow({
  name,
  status,
  tone,
}: {
  name: string;
  status: string;
  tone: "emerald" | "amber" | "blue";
}) {
  const toneClass = {
    emerald: "bg-emerald-50 text-emerald-600",
    amber: "bg-amber-50 text-amber-600",
    blue: "bg-blue-50 text-blue-600",
  };

  return (
    <div className="mb-3 flex items-center justify-between rounded-2xl bg-slate-50 p-4 last:mb-0 dark:bg-white/[0.04]">
      <p className="text-sm font-black text-slate-800 dark:text-slate-200">
        {name}
      </p>
      <span className={["rounded-full px-3 py-1 text-xs font-black", toneClass[tone]].join(" ")}>
        {status}
      </span>
    </div>
  );
}

function ProgressRow({
  label,
  value,
  width,
}: {
  label: string;
  value: string;
  width: string;
}) {
  return (
    <div className="mt-3 first:mt-0">
      <div className="mb-1 flex items-center justify-between text-xs font-black text-slate-500 dark:text-slate-400">
        <span>{label}</span>
        <span>{value}</span>
      </div>
      <div className="h-2.5 rounded-full bg-slate-100 dark:bg-white/10">
        <div className="h-full rounded-full bg-gradient-to-r from-blue-600 to-violet-600" style={{ width }} />
      </div>
    </div>
  );
}

function LegendRow({
  color,
  label,
  value,
}: {
  color: string;
  label: string;
  value: string;
}) {
  return (
    <div className="grid grid-cols-[14px_1fr_auto] items-center gap-2 text-xs font-bold text-slate-600 dark:text-slate-300">
      <span className={["h-3 w-3 rounded-full", color].join(" ")} />
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}

function DealList() {
  return (
    <div className="mt-4 border-t border-slate-100 pt-4 dark:border-white/10">
      <p className="text-sm font-black text-slate-950 dark:text-white">
        Top Performing Deals
      </p>
      <div className="mt-3 space-y-2">
        <div className="flex items-center justify-between text-xs font-bold">
          <span>Enterprise SaaS Rollout</span>
          <span className="text-blue-700">$128,000</span>
        </div>
        <div className="flex items-center justify-between text-xs font-bold">
          <span>Cloud Migration Project</span>
          <span className="text-blue-700">$96,400</span>
        </div>
        <div className="flex items-center justify-between text-xs font-bold">
          <span>AI Analytics Suite</span>
          <span className="text-blue-700">$82,300</span>
        </div>
      </div>
    </div>
  );
}

function DonutChart() {
  return (
    <div className="relative h-28 w-28 rounded-full bg-[conic-gradient(#2563eb_0_34%,#8b5cf6_34%_61%,#14b8a6_61%_82%,#f59e0b_82%_94%,#cbd5e1_94%_100%)]">
      <div className="absolute inset-5 grid place-items-center rounded-full bg-white text-center dark:bg-slate-950">
        <p className="text-sm font-black text-slate-950 dark:text-white">$3.67M</p>
        <p className="text-[10px] font-bold text-slate-500">Total</p>
      </div>
    </div>
  );
}

function RingScore({ value }: { value: string }) {
  return (
    <div className="relative mx-auto grid h-28 w-28 place-items-center rounded-full bg-[conic-gradient(#10b981_0_72%,#f59e0b_72%_87%,#e5e7eb_87%_100%)]">
      <div className="grid h-20 w-20 place-items-center rounded-full bg-white text-center dark:bg-slate-950">
        <p className="text-2xl font-black text-slate-950 dark:text-white">{value}</p>
        <p className="text-[10px] font-bold text-slate-500">Score</p>
      </div>
    </div>
  );
}

function TinyLine({ stroke }: { stroke: string }) {
  return (
    <svg viewBox="0 0 160 42" className="mt-3 h-10 w-full">
      <path
        d="M4 30 C18 12 28 38 42 24 S64 32 78 16 S102 26 116 12 S138 24 156 8"
        fill="none"
        stroke={stroke}
        strokeLinecap="round"
        strokeWidth="4"
      />
    </svg>
  );
}

function MiniChart() {
  return (
    <svg viewBox="0 0 240 82" className="mt-3 h-14 w-full">
      <path
        d="M6 58 C 28 34, 40 70, 62 44 S 102 64, 126 28 S 162 42, 188 22 S 218 36, 234 12"
        fill="none"
        stroke="#635bff"
        strokeLinecap="round"
        strokeWidth="5"
      />
      <path
        d="M6 58 C 28 34, 40 70, 62 44 S 102 64, 126 28 S 162 42, 188 22 S 218 36, 234 12 L234 82 L6 82 Z"
        fill="rgba(99,91,255,0.10)"
      />
    </svg>
  );
}

function LineChart({ height = "h-[150px]" }: { height?: string }) {
  return (
    <svg viewBox="0 0 520 180" className={["w-full", height].join(" ")}>
      <defs>
        <linearGradient id="commandChartFill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#2563eb" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
        </linearGradient>
      </defs>

      {[35, 70, 105, 140].map((y) => (
        <line key={y} x1="0" x2="520" y1={y} y2={y} stroke="rgba(148,163,184,0.22)" />
      ))}

      {[0, 90, 180, 270, 360, 450].map((x) => (
        <line key={x} x1={x} x2={x} y1="18" y2="162" stroke="rgba(148,163,184,0.16)" />
      ))}

      <path
        d="M0 146 C 35 128, 58 85, 96 104 S 156 132, 196 70 S 254 112, 292 88 S 356 42, 398 72 S 454 96, 520 38 L520 180 L0 180 Z"
        fill="url(#commandChartFill)"
      />

      <path
        d="M0 146 C 35 128, 58 85, 96 104 S 156 132, 196 70 S 254 112, 292 88 S 356 42, 398 72 S 454 96, 520 38"
        fill="none"
        stroke="#2563eb"
        strokeLinecap="round"
        strokeWidth="5"
      />

      <circle cx="520" cy="38" r="6" fill="#2563eb" />
    </svg>
  );
}

function getRelativePosition(index: number, activeIndex: number) {
  const total = commandCards.length;
  let diff = index - activeIndex;

  if (diff > total / 2) diff -= total;
  if (diff < -total / 2) diff += total;

  return diff;
}