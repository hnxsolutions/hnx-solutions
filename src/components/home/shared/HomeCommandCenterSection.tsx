"use client";

import { useEffect, useMemo, useRef, useState, type ReactNode, type TouchEvent } from "react";
import {
  HiArrowLeft,
  HiArrowRight,
  HiChartBar,
  HiCheck,
  HiEye,
  HiLightningBolt,
  HiPause,
  HiPlay,
  HiShieldCheck,
  HiSparkles,
  HiUsers,
  HiViewGrid,
} from "react-icons/hi";

const commandCards = [
  {
    id: "overview",
    number: "01",
    title: "Executive Overview",
    shortTitle: "Overview",
    description: "Revenue, leads, tasks, and customer health in one board.",
    icon: HiChartBar,
    tone: "blue",
  },
  {
    id: "ai",
    number: "02",
    title: "AI Copilot",
    shortTitle: "AI Copilot",
    description: "Smart recommendations, risk alerts, and next-best actions.",
    icon: HiSparkles,
    tone: "violet",
  },
  {
    id: "sales",
    number: "03",
    title: "Sales Pipeline",
    shortTitle: "Sales",
    description: "Deal stages, pipeline value, win rate, and forecast clarity.",
    icon: HiEye,
    tone: "indigo",
  },
  {
    id: "automation",
    number: "04",
    title: "Automation Hub",
    shortTitle: "Automation",
    description: "Workflows, automated tasks, saved hours, and live triggers.",
    icon: HiLightningBolt,
    tone: "emerald",
  },
  {
    id: "team",
    number: "05",
    title: "Team Operations",
    shortTitle: "Team",
    description: "Ownership, workload, activity, and response accountability.",
    icon: HiUsers,
    tone: "sky",
  },
  {
    id: "alerts",
    number: "06",
    title: "Risk & Alerts",
    shortTitle: "Alerts",
    description: "Catch stuck work, missed follow-ups, and business bottlenecks.",
    icon: HiShieldCheck,
    tone: "amber",
  },
  {
    id: "workflow",
    number: "07",
    title: "Workflow Hub",
    shortTitle: "Workflow",
    description: "Orchestrate business processes from lead capture to delivery.",
    icon: HiViewGrid,
    tone: "purple",
  },
  {
    id: "customers",
    number: "08",
    title: "Customer Health",
    shortTitle: "Customers",
    description: "NPS, sentiment, account risk, and customer engagement signals.",
    icon: HiUsers,
    tone: "teal",
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
    }, 4600);

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

  return (
    <section className="relative overflow-hidden bg-[#f8fbff] pt-24 pb-16 text-slate-950 sm:pt-28 lg:pt-32 lg:pb-20 dark:bg-slate-950 dark:text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(37,99,235,0.10),transparent_30%),radial-gradient(circle_at_86%_78%,rgba(124,58,237,0.14),transparent_34%)] dark:bg-[radial-gradient(circle_at_18%_12%,rgba(59,130,246,0.14),transparent_30%),radial-gradient(circle_at_86%_78%,rgba(139,92,246,0.16),transparent_34%)]" />
      <div className="pointer-events-none absolute -left-44 top-20 h-[560px] w-[560px] rounded-full border border-blue-200/60 opacity-50 dark:border-blue-400/10" />
      <div className="pointer-events-none absolute -right-36 bottom-0 h-[660px] w-[660px] rounded-full border border-violet-200/70 opacity-60 dark:border-violet-400/10" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#f8fbff] to-transparent dark:from-slate-950" />

      <div className="relative mx-auto w-full max-w-[min(94vw,1560px)] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/85 px-5 py-2 text-xs font-black uppercase tracking-[0.18em] text-blue-700 shadow-[0_14px_36px_rgba(79,70,229,0.10)] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.06] dark:text-blue-300">
            <HiSparkles className="text-base" />
            Platform Overview
          </span>

          <h2 className="mt-5 text-4xl font-black tracking-[-0.055em] text-slate-950 sm:text-5xl lg:text-6xl dark:text-white">
            Business Command Centre
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm font-semibold leading-7 text-slate-600 sm:text-base lg:text-lg dark:text-slate-300">
            One intelligent view for leads, sales, automation, team activity,
            customer health, and business decisions.
          </p>
        </div>

        <div
          className="relative mt-10"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative hidden h-[560px] lg:block">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous command centre card"
              className="absolute left-0 top-1/2 z-40 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-slate-200 bg-white text-blue-700 shadow-[0_18px_40px_rgba(15,23,42,0.12)] transition hover:-translate-x-1 hover:bg-blue-600 hover:text-white dark:border-white/10 dark:bg-slate-900 dark:text-blue-300"
            >
              <HiArrowLeft className="text-2xl" />
            </button>

            <button
              type="button"
              onClick={goNext}
              aria-label="Next command centre card"
              className="absolute right-0 top-1/2 z-40 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-slate-200 bg-white text-blue-700 shadow-[0_18px_40px_rgba(15,23,42,0.12)] transition hover:translate-x-1 hover:bg-blue-600 hover:text-white dark:border-white/10 dark:bg-slate-900 dark:text-blue-300"
            >
              <HiArrowRight className="text-2xl" />
            </button>

            <div className="absolute inset-x-12 top-0 h-full overflow-hidden">
              {commandCards.map((card, index) => {
                const relative = getRelativePosition(index, activeIndex);
                const visual = getCardVisual(relative);

                if (!visual.visible) return null;

                const isActive = relative === 0;
                const Icon = card.icon;

                return (
                  <div
                    key={card.id}
                    role="button"
                    tabIndex={0}
                    onClick={() => setActiveIndex(index)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        setActiveIndex(index);
                      }
                    }}
                    className="absolute left-1/2 top-0 cursor-pointer text-left outline-none transition-all duration-[850ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                    style={{
                      width: visual.width,
                      height: visual.height,
                      opacity: visual.opacity,
                      zIndex: visual.zIndex,
                      transform: `translateX(${visual.x}px) translateY(${visual.y}px) scale(${visual.scale})`,
                    }}
                  >
                    <article
                      className={[
                        "relative h-full overflow-hidden border bg-white/90 backdrop-blur-2xl transition-all duration-[850ms] dark:bg-white/[0.045]",
                        isActive
                          ? "rounded-[34px] border-blue-400 p-5 shadow-[0_34px_100px_rgba(79,70,229,0.26),inset_0_0_0_1px_rgba(255,255,255,0.8)] ring-[3px] ring-blue-200/80 dark:border-blue-400/40 dark:ring-blue-400/20"
                          : "rounded-[26px] border-slate-200/80 p-4 shadow-[0_20px_55px_rgba(15,23,42,0.06)] dark:border-white/10",
                      ].join(" ")}
                    >
                      {isActive ? (
                        <div className="pointer-events-none absolute inset-0 rounded-[34px] bg-[linear-gradient(135deg,rgba(37,99,235,0.08),transparent_34%,rgba(124,58,237,0.09))]" />
                      ) : null}

                      <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-100/60 blur-3xl dark:bg-blue-500/10" />

                      {isActive ? (
                        <ActiveDashboard card={card} />
                      ) : (
                        <SidePreviewCard card={card} Icon={Icon} />
                      )}
                    </article>
                  </div>
                );
              })}
            </div>
          </div>

          <MobileStackCarousel
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            goNext={goNext}
            goPrev={goPrev}
          />

          <div className="relative mx-auto mt-6 max-w-[1180px] px-4">
            <div className="h-1.5 overflow-hidden rounded-full bg-slate-200/80 dark:bg-white/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-blue-600 to-violet-600 transition-all duration-700"
                style={{
                  width: `${((activeIndex + 1) / commandCards.length) * 100}%`,
                }}
              />
            </div>

            <div className="mt-6 grid items-center gap-5 sm:grid-cols-[1fr_2fr_1fr]">
              <div className="text-center text-lg font-black text-blue-700 sm:text-left dark:text-blue-300">
                {activeCard.number}{" "}
                <span className="font-semibold text-slate-400">
                  / {String(commandCards.length).padStart(2, "0")}
                </span>
              </div>

              <div className="hidden items-center justify-center gap-0 md:flex">
                {commandCards.map((card, index) => {
                  const isActive = activeIndex === index;

                  return (
                    <button
                      key={card.id}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      className="group flex items-center"
                    >
                      <span
                        className={[
                          "grid h-8 w-8 place-items-center rounded-full border text-xs font-black transition",
                          isActive
                            ? "border-blue-600 bg-blue-600 text-white"
                            : "border-slate-200 bg-white text-slate-500 group-hover:border-blue-300 group-hover:text-blue-600 dark:border-white/10 dark:bg-white/[0.04]",
                        ].join(" ")}
                      >
                        {card.number}
                      </span>

                      {index !== commandCards.length - 1 ? (
                        <span
                          className={[
                            "h-px w-12 transition lg:w-16",
                            index < activeIndex
                              ? "bg-blue-600"
                              : "bg-slate-200 dark:bg-white/10",
                          ].join(" ")}
                        />
                      ) : null}
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center justify-center gap-3 sm:justify-end">
                <button
                  type="button"
                  onClick={() => setIsPaused((value) => !value)}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-bold text-blue-700 shadow-sm backdrop-blur transition hover:bg-blue-600 hover:text-white dark:border-white/10 dark:bg-white/[0.04] dark:text-blue-300"
                >
                  {isPaused ? <HiPlay /> : <HiPause />}
                  {isPaused ? "Play" : "Auto-rotating"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MobileStackCarousel({
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

  const visibleCards = useMemo(() => {
    return commandCards.map((card, index) => {
      const relative = getRelativePosition(index, activeIndex);
      return { ...card, relative, originalIndex: index };
    });
  }, [activeIndex]);

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
        className="relative mx-auto h-[720px] max-w-[380px]"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {visibleCards.map((card) => {
          const visual = getMobileCardVisual(card.relative);
          if (!visual.visible) return null;

          const isActive = card.relative === 0;

          return (
            <div
              key={card.id}
              role="button"
              tabIndex={0}
              onClick={() => setActiveIndex(card.originalIndex)}
              className="absolute left-1/2 top-0 w-[340px] cursor-pointer text-left outline-none transition-all duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                opacity: visual.opacity,
                zIndex: visual.zIndex,
                transform: `translateX(-50%) translateX(${visual.x}px) translateY(${visual.y}px) scale(${visual.scale}) rotate(${visual.rotate}deg)`,
              }}
            >
              <article
                className={[
                  "relative min-h-[670px] overflow-hidden border bg-white/92 backdrop-blur-2xl dark:bg-white/[0.055]",
                  isActive
                    ? "rounded-[30px] border-blue-300/80 p-4 shadow-[0_26px_75px_rgba(79,70,229,0.20)] ring-2 ring-blue-300/40 dark:border-blue-400/40 dark:ring-blue-400/20"
                    : "rounded-[28px] border-slate-200/80 p-5 shadow-[0_18px_50px_rgba(15,23,42,0.08)] dark:border-white/10",
                ].join(" ")}
              >
                {isActive ? (
                  <ActiveDashboard card={card} compact />
                ) : (
                  <SidePreviewCard card={card} Icon={card.icon} />
                )}
              </article>
            </div>
          );
        })}
      </div>

      <div className="mt-5 flex items-center justify-center gap-2">
        {commandCards.map((card, index) => (
          <button
            key={card.id}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to ${card.title}`}
            className={[
              "h-2.5 rounded-full transition",
              activeIndex === index
                ? "w-8 bg-blue-600"
                : "w-2.5 bg-slate-300 dark:bg-white/20",
            ].join(" ")}
          />
        ))}
      </div>

      <p className="mt-3 text-center text-xs font-semibold text-slate-500 dark:text-slate-400">
        Swipe left or right to explore cards
      </p>
    </div>
  );
}

function ActiveDashboard({
  card,
  compact = false,
}: {
  card: CommandCard;
  compact?: boolean;
}) {
  return (
    <div className="relative h-full">
      <CommandWindowHeader card={card} compact={compact} />
      <div className={compact ? "mt-4" : "mt-5"}>
        <DashboardBody card={card} compact={compact} />
      </div>
    </div>
  );
}

function CommandWindowHeader({
  card,
  compact = false,
}: {
  card: CommandCard;
  compact?: boolean;
}) {
  const Icon = card.icon;

  return (
    <div className="relative flex items-start justify-between gap-4">
      <div className="flex items-start gap-3">
        <span
          className={[
            "grid shrink-0 place-items-center rounded-2xl bg-blue-50 text-blue-700 shadow-[0_14px_34px_rgba(79,70,229,0.12)] ring-1 ring-blue-100 dark:bg-blue-500/10 dark:text-blue-300 dark:ring-blue-400/20",
            compact ? "h-12 w-12" : "h-14 w-14",
          ].join(" ")}
        >
          <Icon className={compact ? "text-2xl" : "text-3xl"} />
        </span>

        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="grid h-7 w-10 place-items-center rounded-full bg-blue-50 text-[11px] font-black text-blue-700 ring-1 ring-blue-100 dark:bg-blue-500/10 dark:text-blue-300 dark:ring-blue-400/20">
              {card.number}
            </span>
            <span className="hidden rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.13em] text-slate-500 sm:inline-flex dark:bg-white/[0.06] dark:text-slate-300">
              {card.shortTitle}
            </span>
          </div>

          <h3
            className={[
              "font-black tracking-[-0.04em] text-slate-950 dark:text-white",
              compact ? "mt-3 text-xl" : "mt-3 text-2xl",
            ].join(" ")}
          >
            {card.title}
          </h3>

          <p
            className={[
              "font-semibold leading-6 text-slate-600 dark:text-slate-300",
              compact ? "mt-1 text-xs" : "mt-2 max-w-md text-sm",
            ].join(" ")}
          >
            {card.description}
          </p>
        </div>
      </div>

      {!compact ? (
        <div className="flex items-center gap-2">
          <span className="rounded-xl border border-slate-200 bg-white/80 px-3 py-2 text-xs font-black text-slate-600 shadow-sm dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300">
            This Month
          </span>
          <span className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white/80 text-slate-500 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
            ⋮
          </span>
        </div>
      ) : null}
    </div>
  );
}

function DashboardBody({
  card,
  compact = false,
}: {
  card: CommandCard;
  compact?: boolean;
}) {
  if (card.id === "ai") return <AiDashboard compact={compact} />;
  if (card.id === "sales") return <SalesDashboard compact={compact} />;
  if (card.id === "automation") return <AutomationDashboard compact={compact} />;
  if (card.id === "team") return <TeamDashboard compact={compact} />;
  if (card.id === "alerts") return <AlertsDashboard compact={compact} />;
  if (card.id === "workflow") return <WorkflowDashboard compact={compact} />;
  if (card.id === "customers") return <CustomerDashboard compact={compact} />;

  return <OverviewDashboard compact={compact} />;
}

function OverviewDashboard({ compact = false }: { compact?: boolean }) {
  return (
    <div className="space-y-3">
      <div className="grid gap-2.5 sm:grid-cols-4">
        {[
          ["Revenue", "$3.67M", "↑ 18.6%"],
          ["New Leads", "248", "↑ 14.2%"],
          ["Tasks Done", "86%", "↑ 9.1%"],
          ["At Risk", "14%", "↓ 4.1%"],
        ].map(([label, value, change]) => (
          <MetricTile key={label} label={label} value={value} change={change} />
        ))}
      </div>

      <div className={compact ? "grid gap-3" : "grid gap-3 md:grid-cols-[1.25fr_0.75fr]"}>
        <Panel title="Revenue Over Time">
          <LineChart />
        </Panel>

        <Panel title="Revenue by Source">
          <DonutWithLegend />
        </Panel>
      </div>

      {!compact ? <BottomDashboardGrid /> : null}
    </div>
  );
}

function AiDashboard({ compact = false }: { compact?: boolean }) {
  return (
    <div className="space-y-3">
      <div className={compact ? "grid gap-3" : "grid gap-3 md:grid-cols-[1.05fr_0.95fr]"}>
        <Panel title="Recommended For You" accent="violet">
          <ActionList
            items={[
              ["Follow up with 8 cold leads", "Engagement score is high", "blue"],
              ["Review 3 at-risk accounts", "Health score declining", "red"],
              ["Schedule pipeline review", "22 forecast updates", "violet"],
            ]}
          />
        </Panel>

        <Panel title="Copilot Impact" accent="blue">
          <p className="mt-3 text-3xl font-black text-slate-950 dark:text-white">
            +$1.24M
          </p>
          <p className="text-xs font-black text-emerald-500">↑ 21.7% revenue impact</p>
          <MiniChart />
        </Panel>
      </div>

      <div className="rounded-2xl border border-violet-100 bg-gradient-to-br from-violet-50 to-white p-3 dark:border-violet-400/10 dark:from-violet-500/10 dark:to-white/[0.03]">
        <div className="flex items-start gap-3">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white text-blue-700 shadow-sm dark:bg-white/[0.08] dark:text-blue-300">
            <HiSparkles />
          </span>
          <div>
            <p className="text-xs font-black text-slate-950 dark:text-white">AI Summary</p>
            <p className="mt-1 text-xs font-semibold leading-5 text-slate-600 dark:text-slate-300">
              Conversion improved by 14%. Highest opportunity is follow-up automation for warm leads.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SalesDashboard({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "grid gap-3" : "grid gap-3 md:grid-cols-[0.8fr_1.2fr]"}>
      <Panel title="Pipeline by Stage" accent="indigo">
        <StageStack />
      </Panel>

      <div className="space-y-3">
        <Panel title="Forecast Value">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-3xl font-black text-slate-950 dark:text-white">$3.67M</p>
              <p className="text-xs font-black text-emerald-500">↑ 22.4% this month</p>
            </div>
            <div className="rounded-xl bg-blue-50 px-3 py-2 text-right dark:bg-blue-500/10">
              <p className="text-[10px] font-black text-slate-500 dark:text-slate-400">Win Rate</p>
              <p className="text-lg font-black text-blue-700 dark:text-blue-300">32.4%</p>
            </div>
          </div>
          <LineChart small />
        </Panel>

        <Panel title="Top Deals">
          <DealRows />
        </Panel>
      </div>
    </div>
  );
}

function AutomationDashboard({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "grid gap-3" : "grid gap-3 md:grid-cols-[1fr_0.82fr]"}>
      <Panel title="Automation Impact" accent="emerald">
        <div className="grid grid-cols-3 gap-2">
          {[
            ["Runs", "1,243", "↑ 32%"],
            ["Tasks", "5,689", "↑ 28%"],
            ["Saved", "128h", "↑ 35%"],
          ].map(([label, value, change]) => (
            <MiniNumberCard key={label} label={label} value={value} change={change} />
          ))}
        </div>
        <MiniChart />
      </Panel>

      <Panel title="Live Workflows">
        <WorkflowRows />
      </Panel>
    </div>
  );
}

function TeamDashboard({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "grid gap-3" : "grid gap-3 md:grid-cols-[1.05fr_0.95fr]"}>
      <Panel title="Team Scorecard" accent="sky">
        <TeamRows />
      </Panel>

      <Panel title="Operations Snapshot">
        <div className="grid grid-cols-2 gap-2">
          {[
            ["Team Score", "89%", "↑ 8%"],
            ["Tasks Done", "2,451", "↑ 10%"],
            ["On Track", "12", "↑ 2"],
            ["Response", "1.2h", "↓ 0.3h"],
          ].map(([label, value, change]) => (
            <MiniNumberCard key={label} label={label} value={value} change={change} />
          ))}
        </div>
        <AvatarStrip />
      </Panel>
    </div>
  );
}

function AlertsDashboard({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "grid gap-3" : "grid gap-3 md:grid-cols-[1fr_0.82fr]"}>
      <Panel title="Risk Queue" accent="amber">
        <ActionList
          items={[
            ["High-priority follow-up", "12 minutes overdue", "red"],
            ["Invoice approval waiting", "Finance owner pending", "amber"],
            ["Response SLA slipping", "Support queue needs help", "blue"],
          ]}
        />
      </Panel>

      <Panel title="Risk Summary">
        <div className="grid place-items-center rounded-2xl bg-gradient-to-br from-orange-50 to-white p-5 text-center dark:from-orange-500/10 dark:to-white/[0.03]">
          <p className="text-5xl font-black text-orange-500">23</p>
          <p className="mt-1 text-xs font-black text-slate-950 dark:text-white">Needs Attention</p>
          <p className="mt-1 text-[10px] font-semibold text-slate-500 dark:text-slate-400">7 high priority</p>
        </div>
      </Panel>
    </div>
  );
}

function WorkflowDashboard({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "grid gap-3" : "grid gap-3 md:grid-cols-[0.88fr_1.12fr]"}>
      <Panel title="Workflow Map" accent="violet">
        <FlowMap />
      </Panel>

      <Panel title="Running Automations">
        <WorkflowRows />
        <div className="mt-3 rounded-xl bg-violet-50 p-3 dark:bg-violet-500/10">
          <p className="text-xs font-black text-slate-950 dark:text-white">18 active workflows</p>
          <p className="mt-1 text-[10px] font-semibold text-emerald-600">↑ 28% automation coverage</p>
        </div>
      </Panel>
    </div>
  );
}

function CustomerDashboard({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "grid gap-3" : "grid gap-3 md:grid-cols-[0.82fr_1.18fr]"}>
      <Panel title="Health Score" accent="teal">
        <HealthDonut />
      </Panel>

      <Panel title="Top Accounts">
        <div className="space-y-2.5">
          {[
            ["Acme Corp", "Healthy", "emerald"],
            ["Globex Inc.", "At Risk", "amber"],
            ["Soylent Corp.", "Healthy", "emerald"],
          ].map(([name, status, color]) => (
            <div key={name} className="flex items-center justify-between rounded-xl bg-slate-50 p-3 dark:bg-white/[0.04]">
              <span className="text-xs font-black text-slate-800 dark:text-slate-200">{name}</span>
              <span className={[
                "rounded-full px-2 py-1 text-[10px] font-black",
                color === "amber" ? "bg-amber-50 text-amber-600" : "bg-emerald-50 text-emerald-600",
              ].join(" ")}>{status}</span>
            </div>
          ))}
        </div>
        <MiniChart />
      </Panel>
    </div>
  );
}

function SidePreviewCard({ card, Icon }: { card: CommandCard; Icon: CommandCard["icon"] }) {
  return (
    <div className="relative h-full">
      <div className="flex items-start justify-between gap-3">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-blue-50 text-blue-700 ring-1 ring-blue-100 dark:bg-blue-500/10 dark:text-blue-300 dark:ring-blue-400/20">
          <Icon className="text-xl" />
        </span>
        <span className="grid h-8 w-10 place-items-center rounded-full bg-blue-50 text-xs font-black text-blue-700 ring-1 ring-blue-100 dark:bg-blue-500/10 dark:text-blue-300 dark:ring-blue-400/20">
          {card.number}
        </span>
      </div>

      <h3 className="mt-5 text-lg font-black leading-tight tracking-[-0.03em] text-slate-950 dark:text-white">
        {card.title}
      </h3>
      <p className="mt-3 text-sm font-semibold leading-6 text-slate-600 dark:text-slate-300">
        {card.description}
      </p>

      <div className="absolute bottom-0 left-0 right-0">
        <SideMiniInterface id={card.id} />
      </div>
    </div>
  );
}

function SideMiniInterface({ id }: { id: string }) {
  if (id === "sales") {
    return (
      <Panel title="Pipeline" compact>
        <MiniStat label="Forecast" value="$3.67M" />
        <ProgressRows />
      </Panel>
    );
  }
  if (id === "ai") {
    return (
      <Panel title="AI Signal" compact>
        <p className="mt-3 text-xs font-semibold leading-5 text-slate-600 dark:text-slate-300">
          Conversion improved by 14%.
        </p>
        <MiniChart />
      </Panel>
    );
  }
  if (id === "automation" || id === "workflow") {
    return (
      <Panel title={id === "workflow" ? "Workflow" : "Automations"} compact>
        <MiniStat label="Active" value={id === "workflow" ? "18" : "1,243"} />
        <MiniChart />
      </Panel>
    );
  }
  if (id === "team") {
    return (
      <Panel title="Team" compact>
        <TeamRows small />
      </Panel>
    );
  }
  if (id === "alerts") {
    return (
      <Panel title="Alerts" compact>
        <MiniStat label="Open" value="23" />
        <MiniChart />
      </Panel>
    );
  }
  if (id === "customers") {
    return (
      <Panel title="Health" compact>
        <MiniStat label="NPS" value="82" />
        <MiniChart />
      </Panel>
    );
  }

  return (
    <Panel title="Revenue" compact>
      <MiniStat label="Total" value="$3.67M" />
      <MiniChart />
    </Panel>
  );
}

function getRelativePosition(index: number, activeIndex: number) {
  const total = commandCards.length;
  let diff = index - activeIndex;

  if (diff > total / 2) diff -= total;
  if (diff < -total / 2) diff += total;

  return diff;
}

function getCardVisual(position: number) {
  const activeWidth = 650;
  const activeHeight = 500;
  const collapsedWidth = 195;
  const collapsedHeight = 420;

  const visuals: Record<
    number,
    {
      visible: boolean;
      x: number;
      y: number;
      scale: number;
      opacity: number;
      zIndex: number;
      width: number;
      height: number;
    }
  > = {
    [-3]: {
      visible: true,
      x: -805,
      y: 58,
      scale: 0.78,
      opacity: 0.2,
      zIndex: 1,
      width: collapsedWidth,
      height: collapsedHeight,
    },
    [-2]: {
      visible: true,
      x: -600,
      y: 45,
      scale: 0.86,
      opacity: 0.42,
      zIndex: 2,
      width: collapsedWidth,
      height: collapsedHeight,
    },
    [-1]: {
      visible: true,
      x: -397,
      y: 32,
      scale: 0.92,
      opacity: 0.64,
      zIndex: 3,
      width: collapsedWidth,
      height: collapsedHeight,
    },
    0: {
      visible: true,
      x: -325,
      y: 0,
      scale: 1,
      opacity: 1,
      zIndex: 10,
      width: activeWidth,
      height: activeHeight,
    },
    1: {
      visible: true,
      x: 360,
      y: 32,
      scale: 0.92,
      opacity: 0.84,
      zIndex: 5,
      width: collapsedWidth,
      height: collapsedHeight,
    },
    2: {
      visible: true,
      x: 563,
      y: 45,
      scale: 0.86,
      opacity: 0.62,
      zIndex: 4,
      width: collapsedWidth,
      height: collapsedHeight,
    },
    3: {
      visible: true,
      x: 765,
      y: 58,
      scale: 0.78,
      opacity: 0.32,
      zIndex: 3,
      width: collapsedWidth,
      height: collapsedHeight,
    },
    4: {
      visible: true,
      x: 940,
      y: 66,
      scale: 0.7,
      opacity: 0.14,
      zIndex: 2,
      width: collapsedWidth,
      height: collapsedHeight,
    },
  };

  return (
    visuals[position] ?? {
      visible: false,
      x: 0,
      y: 0,
      scale: 0,
      opacity: 0,
      zIndex: 0,
      width: collapsedWidth,
      height: collapsedHeight,
    }
  );
}

function getMobileCardVisual(position: number) {
  const visuals: Record<
    number,
    {
      visible: boolean;
      x: number;
      y: number;
      scale: number;
      opacity: number;
      zIndex: number;
      rotate: number;
    }
  > = {
    [-2]: {
      visible: true,
      x: -34,
      y: 34,
      scale: 0.88,
      opacity: 0.2,
      zIndex: 1,
      rotate: -5,
    },
    [-1]: {
      visible: true,
      x: -20,
      y: 20,
      scale: 0.94,
      opacity: 0.45,
      zIndex: 2,
      rotate: -3,
    },
    0: {
      visible: true,
      x: 0,
      y: 0,
      scale: 1,
      opacity: 1,
      zIndex: 8,
      rotate: 0,
    },
    1: {
      visible: true,
      x: 20,
      y: 20,
      scale: 0.94,
      opacity: 0.45,
      zIndex: 3,
      rotate: 3,
    },
    2: {
      visible: true,
      x: 34,
      y: 34,
      scale: 0.88,
      opacity: 0.2,
      zIndex: 1,
      rotate: 5,
    },
  };

  return (
    visuals[position] ?? {
      visible: false,
      x: 0,
      y: 0,
      scale: 0,
      opacity: 0,
      zIndex: 0,
      rotate: 0,
    }
  );
}

function Panel({
  title,
  children,
  compact = false,
  accent,
}: {
  title: string;
  children: ReactNode;
  compact?: boolean;
  accent?: string;
}) {
  const accentClass =
    accent === "violet"
      ? "border-violet-100 bg-gradient-to-br from-violet-50 to-white dark:border-violet-400/10 dark:from-violet-500/10"
      : accent === "blue" || accent === "indigo" || accent === "sky"
        ? "border-blue-100 bg-gradient-to-br from-blue-50 to-white dark:border-blue-400/10 dark:from-blue-500/10"
        : accent === "emerald" || accent === "teal"
          ? "border-emerald-100 bg-gradient-to-br from-emerald-50 to-white dark:border-emerald-400/10 dark:from-emerald-500/10"
          : accent === "amber"
            ? "border-orange-100 bg-gradient-to-br from-orange-50 to-white dark:border-orange-400/10 dark:from-orange-500/10"
            : "border-slate-200 bg-white/80 dark:border-white/10 dark:bg-white/[0.04]";

  return (
    <div className={["rounded-2xl border dark:to-white/[0.03]", accentClass, compact ? "p-3" : "p-3.5"].join(" ")}>
      <p className="text-xs font-black text-slate-950 dark:text-white">{title}</p>
      {children}
    </div>
  );
}

function MetricTile({ label, value, change }: { label: string; value: string; change: string }) {
  const positive = change.includes("↑");
  const negative = change.includes("↓");

  return (
    <div className="rounded-2xl border border-slate-200 bg-white/85 p-3 dark:border-white/10 dark:bg-white/[0.04]">
      <p className="text-[10px] font-black text-slate-500 dark:text-slate-400">{label}</p>
      <div className="mt-2 flex items-end justify-between gap-2">
        <p className="text-lg font-black text-slate-950 dark:text-white">{value}</p>
        <p className={["text-[10px] font-black", positive ? "text-emerald-500" : negative ? "text-red-500" : "text-blue-600 dark:text-blue-300"].join(" ")}>{change}</p>
      </div>
    </div>
  );
}

function MiniNumberCard({ label, value, change }: { label: string; value: string; change: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white/80 p-2.5 dark:border-white/10 dark:bg-white/[0.04]">
      <p className="text-[9px] font-black text-slate-500 dark:text-slate-400">{label}</p>
      <p className="mt-1 text-base font-black text-slate-950 dark:text-white">{value}</p>
      <p className="text-[9px] font-black text-emerald-500">{change}</p>
    </div>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="mb-3">
      <p className="text-[10px] font-black text-slate-500 dark:text-slate-400">{label}</p>
      <p className="mt-1 text-lg font-black text-slate-950 dark:text-white">{value}</p>
    </div>
  );
}

function ProgressRows({ large = false }: { large?: boolean }) {
  return (
    <div className={large ? "mt-5 space-y-4" : "mt-3 space-y-2"}>
      {[
        ["Prospecting", "82%"],
        ["Qualification", "64%"],
        ["Proposal", "78%"],
        ["Closed Won", "36%"],
      ].map(([label, width]) => (
        <div key={label}>
          <div className="mb-1 flex justify-between text-[10px] font-bold text-slate-500 dark:text-slate-400">
            <span>{label}</span>
            <span>{width}</span>
          </div>
          <div className="h-2 rounded-full bg-slate-100 dark:bg-white/10">
            <div className="h-full rounded-full bg-gradient-to-r from-blue-600 to-violet-600" style={{ width }} />
          </div>
        </div>
      ))}
    </div>
  );
}

function ActionList({ items }: { items: string[][] }) {
  return (
    <div className="mt-3 space-y-2.5">
      {items.map(([title, desc, color]) => (
        <div key={title} className="flex items-start gap-3 rounded-xl bg-white/80 p-3 dark:bg-white/[0.04]">
          <span className={[
            "mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg text-xs",
            color === "red" ? "bg-red-50 text-red-500" : color === "amber" ? "bg-amber-50 text-amber-500" : color === "violet" ? "bg-violet-50 text-violet-600" : "bg-blue-50 text-blue-600",
          ].join(" ")}>
            {color === "red" || color === "amber" ? "!" : <HiCheck />}
          </span>
          <div>
            <p className="text-xs font-black text-slate-950 dark:text-white">{title}</p>
            <p className="mt-1 text-[10px] font-semibold text-slate-500 dark:text-slate-400">{desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function DealRows() {
  return (
    <div className="mt-3 space-y-2">
      {[
        ["Enterprise SaaS Rollout", "$128,000", "Won"],
        ["Data Automation Suite", "$95,000", "Won"],
        ["AI Insights Platform", "$70,000", "Proposal"],
      ].map(([deal, value, stage]) => (
        <div key={deal} className="grid grid-cols-[1fr_auto] gap-3 rounded-xl bg-slate-50 p-2.5 dark:bg-white/[0.04]">
          <div>
            <p className="text-[11px] font-black text-slate-950 dark:text-white">{deal}</p>
            <p className="text-[9px] font-semibold text-slate-400">{stage}</p>
          </div>
          <p className="text-[11px] font-black text-blue-700 dark:text-blue-300">{value}</p>
        </div>
      ))}
    </div>
  );
}

function StageStack() {
  return (
    <div className="mt-3 space-y-2.5">
      {[
        ["Prospecting", "$4.38M", "bg-blue-100 text-blue-700"],
        ["Qualification", "$3.11M", "bg-sky-100 text-sky-700"],
        ["Proposal", "$2.30M", "bg-amber-100 text-amber-700"],
        ["Negotiation", "$1.17M", "bg-violet-100 text-violet-700"],
        ["Closed Won", "$2.45M", "bg-emerald-100 text-emerald-700"],
      ].map(([stage, value, cls]) => (
        <div key={stage} className={["flex items-center justify-between rounded-xl px-3 py-3", cls].join(" ")}>
          <div>
            <p className="text-xs font-black">{stage}</p>
            <p className="text-[10px] font-semibold opacity-70">+10 deals</p>
          </div>
          <p className="text-xs font-black">{value}</p>
        </div>
      ))}
    </div>
  );
}

function WorkflowRows() {
  return (
    <div className="mt-3 space-y-2.5">
      {[
        ["Lead routing", "Live"],
        ["Invoice reminders", "Live"],
        ["Support escalation", "Live"],
      ].map(([item, status]) => (
        <div key={item} className="flex items-center justify-between rounded-xl bg-slate-50 p-3 dark:bg-white/[0.04]">
          <span className="text-xs font-black text-slate-700 dark:text-slate-300">{item}</span>
          <span className="rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-black text-emerald-600">{status}</span>
        </div>
      ))}
    </div>
  );
}

function TeamRows({ small = false }: { small?: boolean }) {
  const rows = small
    ? [["Alex Morgan", "72%"], ["Priya Shah", "67%"], ["Jordan Lee", "62%"]]
    : [["Alex Morgan", "72%"], ["Priya Shah", "67%"], ["Jordan Lee", "62%"], ["Taylor Brooks", "57%"]];

  return (
    <div className="mt-3 space-y-3">
      {rows.map(([name, percent], index) => (
        <div key={name} className="grid grid-cols-[30px_1fr_auto] items-center gap-2">
          <Avatar index={index} />
          <div>
            <p className="text-[10px] font-black text-slate-800 dark:text-slate-200">{name}</p>
            <div className="mt-1 h-1.5 rounded-full bg-slate-100 dark:bg-white/10">
              <div className="h-full rounded-full bg-blue-600" style={{ width: percent }} />
            </div>
          </div>
          <span className="text-[10px] font-black text-slate-500">{percent}</span>
        </div>
      ))}
    </div>
  );
}

function Avatar({ index }: { index: number }) {
  const initials = ["AM", "PS", "JL", "TB", "NP"];
  return (
    <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-blue-100 via-violet-100 to-emerald-100 text-[10px] font-black text-blue-700 ring-2 ring-white dark:ring-slate-900">
      {initials[index % initials.length]}
    </span>
  );
}

function AvatarStrip() {
  return (
    <div className="mt-4 flex items-center">
      {[0, 1, 2, 3, 4].map((item) => (
        <span key={item} className="-ml-2 first:ml-0">
          <Avatar index={item} />
        </span>
      ))}
      <span className="ml-2 text-xs font-black text-slate-500">+6</span>
    </div>
  );
}

function FlowMap() {
  return (
    <div className="mt-4 grid grid-cols-2 gap-3">
      {[
        ["Lead", "Captured"],
        ["CRM", "Updated"],
        ["Email", "Sent"],
        ["Task", "Assigned"],
      ].map(([title, text], index) => (
        <div key={title} className="rounded-2xl border border-violet-100 bg-white/80 p-3 text-center dark:border-white/10 dark:bg-white/[0.04]">
          <span className="mx-auto grid h-8 w-8 place-items-center rounded-full bg-violet-50 text-xs font-black text-violet-700">{index + 1}</span>
          <p className="mt-2 text-xs font-black text-slate-950 dark:text-white">{title}</p>
          <p className="text-[10px] font-semibold text-slate-500">{text}</p>
        </div>
      ))}
    </div>
  );
}

function HealthDonut() {
  return (
    <div className="mt-4 grid place-items-center text-center">
      <div className="relative h-32 w-32 rounded-full bg-[conic-gradient(#14b8a6_0_52%,#f59e0b_52%_78%,#ef4444_78%_100%)]">
        <div className="absolute inset-5 grid place-items-center rounded-full bg-white dark:bg-slate-950">
          <p className="text-3xl font-black text-slate-950 dark:text-white">82</p>
          <p className="text-[10px] font-bold text-slate-500">Great</p>
        </div>
      </div>
    </div>
  );
}

function DonutWithLegend() {
  return (
    <div className="mt-3 grid grid-cols-[92px_1fr] items-center gap-4">
      <Donut />
      <div className="space-y-2">
        {[
          ["Direct", "$1.24M"],
          ["Partner", "$1.01M"],
          ["Organic", "$782K"],
          ["Paid Ads", "$456K"],
        ].map(([label, value]) => (
          <div key={label} className="flex justify-between text-[10px] font-bold text-slate-500 dark:text-slate-400">
            <span>{label}</span>
            <span>{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function BottomDashboardGrid() {
  return (
    <div className="grid gap-3 md:grid-cols-3">
      <Panel title="Top Performing Deals">
        <DealRows />
      </Panel>
      <Panel title="Team Activity">
        <TeamRows small />
      </Panel>
      <Panel title="Automation Impact">
        <AutomationRows />
      </Panel>
    </div>
  );
}

function AutomationRows() {
  return (
    <div className="mt-3 space-y-2.5">
      {[
        ["Workflows Run", "1,243", "↑ 32%"],
        ["Tasks Automated", "5,689", "↑ 28%"],
        ["Time Saved", "128h", "↑ 35%"],
      ].map(([label, value, change]) => (
        <div key={label} className="flex items-center justify-between border-b border-slate-100 pb-2.5 last:border-b-0 last:pb-0 dark:border-white/10">
          <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400">{label}</span>
          <span className="text-sm font-black text-slate-950 dark:text-white">{value}</span>
          <span className="text-[10px] font-black text-emerald-500">{change}</span>
        </div>
      ))}
    </div>
  );
}

function Donut() {
  return (
    <div className="relative h-20 w-20 shrink-0 rounded-full bg-[conic-gradient(#2563eb_0_30%,#8b5cf6_30%_58%,#14b8a6_58%_78%,#f59e0b_78%_90%,#cbd5e1_90%_100%)]">
      <div className="absolute inset-4 grid place-items-center rounded-full bg-white dark:bg-slate-950">
        <span className="text-xs font-black text-slate-950 dark:text-white">$3.67M</span>
      </div>
    </div>
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

function LineChart({ small = false }: { small?: boolean }) {
  return (
    <svg viewBox="0 0 520 165" className={small ? "h-[96px] w-full" : "h-[128px] w-full"}>
      <defs>
        <linearGradient id="commandChartFill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#635bff" stopOpacity="0.24" />
          <stop offset="100%" stopColor="#635bff" stopOpacity="0" />
        </linearGradient>
      </defs>

      {[35, 70, 105, 140].map((y) => (
        <line key={y} x1="0" x2="520" y1={y} y2={y} stroke="rgba(148,163,184,0.22)" />
      ))}

      {[0, 90, 180, 270, 360, 450].map((x) => (
        <line key={x} x1={x} x2={x} y1="18" y2="150" stroke="rgba(148,163,184,0.16)" />
      ))}

      <path
        d="M0 140 C 38 132, 55 96, 84 112 S 130 148, 166 82 S 220 104, 252 96 S 302 44, 344 58 S 406 72, 448 48 S 492 60, 520 28 L520 165 L0 165 Z"
        fill="url(#commandChartFill)"
      />

      <path
        d="M0 140 C 38 132, 55 96, 84 112 S 130 148, 166 82 S 220 104, 252 96 S 302 44, 344 58 S 406 72, 448 48 S 492 60, 520 28"
        fill="none"
        stroke="#4f46e5"
        strokeLinecap="round"
        strokeWidth="5"
      />

      <circle cx="520" cy="28" r="6" fill="#4f46e5" />
    </svg>
  );
}
