"use client";

import type React from "react";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Play, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";

export type IndustryIcon = React.ElementType;

export type IndustryCard = {
  title: string;
  text: string;
  icon: IndustryIcon;
};

export type IndustryImageCard = IndustryCard & {
  image: string;
};

export type IndustryMetric = {
  label: string;
  value: string;
  delta: string;
};

export type IndustryPricingPlan = {
  name: string;
  tag: string;
  desc: string;
  price: string;
  note: string;
  features: string[];
  popular?: boolean;
};

export type IndustryCRMConfig = {
  badge: string;
  headline: [string, string, string];
  description: string;
  heroImage: string;
  heroAlt: string;
  accent: string;
  accentDark: string;
  accentSoft: string;
  stats: IndustryMetric[];
  nextCard: {
    label: string;
    name: string;
    description: string;
    detail: string;
    status: string;
  };
  trustBadges: Array<{
    label: string;
    sub: string;
    icon: IndustryIcon;
  }>;
  whyTitle: string;
  whySubtitle: string;
  whyCards: IndustryCard[];
  specialtyTitle: string;
  specialtyCards: IndustryImageCard[];
  dashboard: {
    title: string;
    dateLabel: string;
    sidebar: string[];
    chartTitle: string;
    sourceTitle: string;
    sources: string[];
    rowsTitle: string;
    rows: Array<[string, string, string, string]>;
    taskTitle: string;
    tasks: Array<[string, string]>;
  };
  journeyTitle: string;
  journeySubtitle: string;
  journey: IndustryCard[];
  featureTitle: string;
  featureSubtitle: string;
  leftFeatures: string[];
  rightFeatures: string[];
  operationsTitle: string;
  operationsSubtitle: string;
  operations: IndustryCard[];
  pricingIntro: string;
  pricingPlans: IndustryPricingPlan[];
  integrations: Array<{
    name: string;
    sub: string;
    icon: IndustryIcon;
  }>;
};

function themeStyle(config: IndustryCRMConfig) {
  return {
    "--industry-accent": config.accent,
    "--industry-accent-dark": config.accentDark,
    "--industry-accent-soft": config.accentSoft,
  } as React.CSSProperties;
}

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function TrendArrow() {
  return (
    <span
      className="mr-1.5 inline-block h-0 w-0 border-x-[5px] border-b-[8px] border-x-transparent border-b-[var(--industry-accent)]"
      aria-hidden="true"
    />
  );
}

function HeroVisual({ config }: { config: IndustryCRMConfig }) {
  return (
    <div className="relative mx-auto min-h-[560px] w-full max-w-[760px] overflow-visible lg:min-h-[640px]">
      <div className="absolute bottom-4 left-[2%] top-10 z-0 w-[54%] rounded-[999px] bg-[var(--industry-accent-soft)]" />
      <div
        className="absolute bottom-5 right-0 top-4 z-10 w-[58%] rounded-[3.2rem] shadow-[0_30px_75px_rgba(15,23,42,0.15)]"
        style={{
          background: `linear-gradient(145deg, ${config.accentDark}, ${config.accent})`,
        }}
      />

      <div className="absolute bottom-8 left-[4%] top-16 z-20 w-[52%] overflow-hidden rounded-[999px] border border-white/70 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.12)]">
        <img src={config.heroImage} alt={config.heroAlt} className="h-full w-full object-cover object-center" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/80 to-transparent" />
      </div>

      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[5.4%] top-[4.4rem] z-30 w-[min(25.5rem,86%)] rounded-[26px] bg-white p-6 shadow-[0_26px_60px_rgba(15,23,42,0.13)] sm:w-[min(25.5rem,68%)] lg:w-[min(25.5rem,56%)]"
      >
        <h3 className="text-[1.2rem] font-black text-[#071b4c] sm:text-[1.3rem]">Today&apos;s Overview</h3>

        <div className="mt-5 grid grid-cols-2 overflow-hidden border-t border-[#e3e9f2]">
          {config.stats.map((item, index) => (
            <div
              key={item.label}
              className={`min-h-[118px] p-4 ${
                index % 2 === 0 ? "border-r border-[#e3e9f2]" : ""
              } ${index < 2 ? "border-b border-[#e3e9f2]" : ""}`}
            >
              <div className="text-[0.9rem] font-bold text-[#516181]">{item.label}</div>
              <div className="mt-2.5 text-[1.95rem] font-black leading-none text-[#071b4c] sm:text-[2.15rem]">
                {item.value}
              </div>
              <div className="mt-2.5 flex items-center whitespace-nowrap text-[0.74rem] font-extrabold text-[var(--industry-accent)] sm:text-[0.8rem]">
                <TrendArrow />
                {item.delta}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[4.9rem] right-[5.4%] z-30 min-h-[210px] w-[min(25.5rem,86%)] rounded-[26px] bg-white p-6 shadow-[0_26px_60px_rgba(15,23,42,0.13)] sm:w-[min(25.5rem,68%)] lg:w-[min(25.5rem,56%)]"
      >
        <div className="text-[1.02rem] font-bold text-[#516181]">{config.nextCard.label}</div>

        <div className="relative mt-6 flex items-center gap-4 pr-24">
          <div className="grid h-[68px] w-[68px] shrink-0 place-items-center rounded-full bg-[var(--industry-accent-soft)] text-[var(--industry-accent)]">
            <Users className="h-8 w-8" aria-hidden="true" />
          </div>

          <div className="min-w-0 flex-1">
            <div className="truncate text-[1.25rem] font-black leading-tight text-[#071b4c]">{config.nextCard.name}</div>
            <div className="mt-1 text-[0.95rem] font-medium text-[#5d7296]">{config.nextCard.description}</div>
            <div className="mt-1.5 text-[0.9rem] font-medium text-[#5d7296]">{config.nextCard.detail}</div>
          </div>

          <div className="absolute bottom-0 right-0 rounded-xl bg-[#e5f7ef] px-3.5 py-2 text-[0.82rem] font-extrabold text-[#078d61]">
            {config.nextCard.status}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function DashboardMetric({ item }: { item: IndustryMetric }) {
  return (
    <div className="rounded-2xl border border-[#e6edf7] bg-white p-4 shadow-sm">
      <p className="text-xs font-bold text-[#65718c]">{item.label}</p>
      <p className="mt-2 text-2xl font-black text-[#081633]">{item.value}</p>
      <p className="mt-1 text-[11px] font-bold text-[var(--industry-accent)]">{item.delta}</p>
    </div>
  );
}

function WhySection({ config }: { config: IndustryCRMConfig }) {
  return (
    <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[min(95vw,1600px)]">
        <Reveal>
          <div
            className="rounded-[34px] p-8 text-white shadow-[0_24px_80px_rgba(15,23,42,0.12)]"
            style={{
              background: `linear-gradient(135deg, #06142f, ${config.accentDark})`,
            }}
          >
            <div className="text-center">
              <h2 className="text-2xl font-black">{config.whyTitle}</h2>
              <p className="mt-2 text-sm text-white/80">{config.whySubtitle}</p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
              {config.whyCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div key={card.title} className="rounded-3xl bg-white/10 p-5 text-center ring-1 ring-white/10 backdrop-blur">
                    <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-white text-[var(--industry-accent)]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 text-sm font-black">{card.title}</h3>
                    <p className="mt-2 text-xs leading-5 text-white/80">{card.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function SpecialtyCarousel({ config }: { config: IndustryCRMConfig }) {
  return (
    <section className="bg-white px-4 pb-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[min(95vw,1600px)]">
        <Reveal>
          <h2 className="text-center text-2xl font-black text-[#081633]">{config.specialtyTitle}</h2>
        </Reveal>

        <Reveal>
          <div className="relative mt-8 overflow-hidden rounded-[28px]">
            <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />

            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
              className="flex w-max gap-5"
            >
              {[...config.specialtyCards, ...config.specialtyCards].map((card, index) => {
                const Icon = card.icon;
                return (
                  <div
                    key={`${card.title}-${index}`}
                    className="w-[280px] shrink-0 overflow-hidden rounded-[24px] border border-[#dce7f7] bg-white shadow-[0_18px_55px_rgba(15,23,42,0.055)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.10)] sm:w-[320px]"
                  >
                    <div className="relative h-28 bg-cover bg-center" style={{ backgroundImage: `url(${card.image})` }}>
                      <span className="absolute bottom-[-1.1rem] left-5 grid h-11 w-11 place-items-center rounded-2xl border border-[#dce7f7] bg-[var(--industry-accent-soft)] text-[var(--industry-accent)] shadow-sm">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    </div>
                    <div className="px-5 pb-5 pt-7">
                      <h3 className="text-[1.12rem] font-black text-[#081633]">{card.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-[#65718c]">{card.text}</p>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function DashboardSection({ config }: { config: IndustryCRMConfig }) {
  return (
    <section className="bg-[#f3f7fb] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[min(95vw,1600px)]">
        <Reveal>
          <div className="rounded-[34px] border border-[#dce7f7] bg-white p-5 shadow-[0_26px_90px_rgba(15,23,42,0.08)]">
            <h2 className="mb-6 text-center text-2xl font-black tracking-[-0.02em] text-[#081633]">{config.dashboard.title}</h2>

            <div className="overflow-hidden rounded-[28px] border border-[#e5edf8] bg-white">
              <div className="grid lg:grid-cols-[170px_1fr]">
                <aside className="hidden border-r border-[#e5edf8] bg-[#fbfdff] p-5 lg:block">
                  <p className="mb-6 text-sm font-black text-[var(--industry-accent)]">HNX CRM Systems</p>

                  {config.dashboard.sidebar.map((item, index) => (
                    <div
                      key={item}
                      className={`mb-1.5 rounded-xl px-3 py-2 text-xs font-bold ${
                        index === 0 ? "bg-[var(--industry-accent-soft)] text-[var(--industry-accent)]" : "text-[#65718c]"
                      }`}
                    >
                      {item}
                    </div>
                  ))}
                </aside>

                <div className="p-4 sm:p-6">
                  <div className="mb-5 flex items-center justify-between">
                    <p className="text-lg font-black text-[#081633]">Dashboard</p>
                    <div className="flex items-center gap-3">
                      <span className="hidden rounded-full border border-[#e5edf8] px-3 py-2 text-xs font-bold text-[#65718c] sm:block">
                        {config.dashboard.dateLabel}
                      </span>
                      <span className="grid h-9 w-9 place-items-center rounded-full bg-[#f1f7ff] text-[var(--industry-accent)]">
                        <Users className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    {config.stats.map((item) => (
                      <DashboardMetric key={item.label} item={item} />
                    ))}
                  </div>

                  <div className="mt-5 grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
                    <div className="rounded-2xl border border-[#e5edf8] bg-white p-5 shadow-sm">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-black text-[#081633]">{config.dashboard.chartTitle}</p>
                        <div className="flex items-center gap-3 text-[11px] font-bold text-[#65718c]">
                          <span className="flex items-center gap-1">
                            <span className="h-2 w-2 rounded-full bg-[var(--industry-accent)]" />
                            Planned
                          </span>
                          <span className="flex items-center gap-1">
                            <span className="h-2 w-2 rounded-full bg-[#19b7c5]" />
                            Completed
                          </span>
                        </div>
                      </div>

                      <div className="mt-4 h-56 rounded-2xl bg-gradient-to-b from-[#f8fbff] to-white p-4">
                        <svg viewBox="0 0 440 190" className="h-full w-full" aria-hidden="true">
                          {[35, 75, 115, 155].map((y) => (
                            <line key={y} x1="0" x2="440" y1={y} y2={y} stroke="#e5edf8" strokeWidth="1" />
                          ))}
                          <path
                            d="M18 142 C52 86, 80 112, 112 76 C148 28, 178 118, 214 84 C248 46, 284 65, 318 42 C354 18, 390 86, 420 62"
                            fill="none"
                            stroke="var(--industry-accent)"
                            strokeLinecap="round"
                            strokeWidth="4"
                          />
                          <path
                            d="M18 150 C52 114, 80 128, 112 98 C148 62, 178 137, 214 104 C248 72, 284 92, 318 67 C354 44, 390 106, 420 82"
                            fill="none"
                            stroke="#19b7c5"
                            strokeLinecap="round"
                            strokeWidth="3"
                          />
                        </svg>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-[#e5edf8] bg-white p-5 shadow-sm">
                      <p className="text-sm font-black text-[#081633]">{config.dashboard.sourceTitle}</p>
                      <div className="mt-5 grid place-items-center">
                        <div className="relative grid h-36 w-36 place-items-center rounded-full bg-[conic-gradient(var(--industry-accent)_0_35%,#19b7c5_35%_63%,#60a5fa_63%_83%,#f59e0b_83%_95%,#e5edf8_95%_100%)]">
                          <div className="grid h-20 w-20 place-items-center rounded-full bg-white text-center shadow-inner">
                            <div>
                              <p className="text-xl font-black text-[#081633]">{config.stats[0]?.value}</p>
                              <p className="text-[10px] font-bold text-[#65718c]">Total</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-5 space-y-2 text-xs font-bold text-[#65718c]">
                        {config.dashboard.sources.map((source) => (
                          <div key={source} className="flex items-center justify-between">
                            <span>{source}</span>
                            <span className="h-2 w-8 rounded-full bg-[var(--industry-accent)]" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
                    <div className="rounded-2xl border border-[#e5edf8] bg-white p-5 shadow-sm">
                      <div className="mb-3 flex items-center justify-between">
                        <p className="text-sm font-black text-[#081633]">{config.dashboard.rowsTitle}</p>
                        <span className="text-xs font-black text-[var(--industry-accent)]">View all</span>
                      </div>

                      <div className="overflow-x-auto">
                        <table className="w-full min-w-[620px] text-left text-xs">
                          <tbody>
                            {config.dashboard.rows.map(([name, type, time, status]) => (
                              <tr key={`${name}-${time}`} className="border-b border-[#eef3fa] last:border-0">
                                <td className="py-2 font-bold text-[#081633]">{name}</td>
                                <td className="py-2 text-[#65718c]">{type}</td>
                                <td className="py-2 text-[#65718c]">{time}</td>
                                <td className="py-2">
                                  <span className="rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-black text-emerald-700">
                                    {status}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-[#e5edf8] bg-white p-5 shadow-sm">
                      <p className="text-sm font-black text-[#081633]">{config.dashboard.taskTitle}</p>
                      <div className="mt-4 space-y-3">
                        {config.dashboard.tasks.map(([task, due]) => (
                          <div key={task} className="flex items-start justify-between gap-3">
                            <p className="text-xs font-bold text-[#334766]">{task}</p>
                            <p className="text-[10px] font-bold text-[#65718c]">{due}</p>
                          </div>
                        ))}
                      </div>
                      <p className="mt-4 text-xs font-black text-[var(--industry-accent)]">View all tasks</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function JourneySection({ config }: { config: IndustryCRMConfig }) {
  return (
    <section className="bg-gradient-to-br from-[#effcff] to-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[min(95vw,1600px)]">
        <Reveal>
          <div className="text-center">
            <h2 className="text-3xl font-black tracking-[-0.03em] text-[#081633]">{config.journeyTitle}</h2>
            <p className="mt-2 text-[#465374]">{config.journeySubtitle}</p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-5">
          {config.journey.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 0.05}>
                <div className="relative h-full text-center">
                  <div className="rounded-[30px] border border-[#dce7f7] bg-white p-6 shadow-sm">
                    <span className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-[#dce7f7] bg-white text-[var(--industry-accent)] shadow-sm">
                      <Icon className="h-7 w-7" aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 text-sm font-black text-[#081633]">{item.title}</h3>
                    <p className="mt-2 text-xs leading-5 text-[#65718c]">{item.text}</p>
                  </div>

                  {index < config.journey.length - 1 ? (
                    <ArrowRight className="absolute right-[-1.6rem] top-[4.8rem] hidden h-6 w-6 text-[var(--industry-accent)] lg:block" />
                  ) : null}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FeatureBlock({ config }: { config: IndustryCRMConfig }) {
  return (
    <section className="bg-[#f8fbff] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-[min(95vw,1600px)] items-center gap-8 lg:grid-cols-[0.95fr_0.6fr_0.95fr]">
        <Reveal>
          <div className="rounded-[30px] border border-[#dce7f7] bg-white p-7 shadow-[0_20px_70px_rgba(15,23,42,0.065)]">
            <h2 className="text-center text-lg font-black text-[#081633]">{config.featureTitle}</h2>
            <p className="mb-6 text-center text-sm font-bold text-[#65718c]">{config.featureSubtitle}</p>

            <div className="space-y-3">
              {config.leftFeatures.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[var(--industry-accent)]" />
                  <span className="text-sm font-bold text-[#334766]">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="mx-auto w-full max-w-[270px] rounded-[2.2rem] border-[10px] border-[#081633] bg-[#081633] p-2 shadow-[0_24px_80px_rgba(15,23,42,0.20)]">
            <div className="overflow-hidden rounded-[1.5rem] bg-white">
              <div className="px-4 py-3 text-white" style={{ background: config.accentDark }}>
                <p className="text-xs font-black">CRM Workspace</p>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-[var(--industry-accent-soft)] text-[var(--industry-accent)]">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-black text-[#081633]">{config.nextCard.name}</p>
                    <p className="text-[10px] text-[#65718c]">{config.nextCard.description}</p>
                  </div>
                </div>

                <div className="mt-5 space-y-2">
                  {[...config.leftFeatures.slice(0, 3), ...config.rightFeatures.slice(0, 2)].map((item) => (
                    <div key={item} className="rounded-xl bg-[#f8fbff] px-3 py-2">
                      <p className="text-[10px] font-bold text-[#65718c]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="rounded-[30px] border border-[#dce7f7] bg-white p-7 shadow-[0_20px_70px_rgba(15,23,42,0.065)]">
            <div className="space-y-3">
              {config.rightFeatures.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[var(--industry-accent)]" />
                  <span className="text-sm font-bold text-[#334766]">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function OperationsSection({ config }: { config: IndustryCRMConfig }) {
  return (
    <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[min(95vw,1600px)]">
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-black tracking-[-0.03em] text-[#081633]">{config.operationsTitle}</h2>
            <p className="mt-3 text-lg leading-8 text-[#465374]">{config.operationsSubtitle}</p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {config.operations.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 0.04}>
                <div className="h-full rounded-[28px] border border-[#dce7f7] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.055)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.10)]">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[var(--industry-accent-soft)] text-[var(--industry-accent)] shadow-sm">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-xl font-black text-[#081633]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#5b6b87]">{item.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PricingCarousel({ config }: { config: IndustryCRMConfig }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % config.pricingPlans.length);
    }, 3200);

    return () => window.clearInterval(timer);
  }, [config.pricingPlans.length]);

  const visiblePlans = useMemo(
    () => [0, 1, 2].map((offset) => config.pricingPlans[(activeIndex + offset) % config.pricingPlans.length]),
    [activeIndex, config.pricingPlans]
  );

  return (
    <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[min(95vw,1600px)]">
        <Reveal>
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-xl leading-[1.45] text-[#3f5379] sm:text-2xl lg:text-[1.9rem]">{config.pricingIntro}</p>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-10 overflow-hidden rounded-[34px]">
            <motion.div
              key={activeIndex}
              initial={{ x: 80, opacity: 0.75 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="grid gap-6 lg:grid-cols-3"
            >
              {visiblePlans.map((plan, index) => (
                <div
                  key={`${plan.name}-${activeIndex}-${index}`}
                  className={`min-h-[430px] rounded-[34px] border p-7 shadow-[0_20px_70px_rgba(15,23,42,0.07)] ${
                    plan.popular
                      ? "border-[#b8ebff] bg-gradient-to-br from-[#eefdff] via-[#f6fdff] to-white ring-2 ring-[#b8ebff]"
                      : "border-[#dce7f7] bg-white"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-3xl font-black leading-tight text-[#081633]">{plan.name}</h3>
                      <p className="mt-4 min-h-[84px] text-base leading-7 text-[#445676]">{plan.desc}</p>
                    </div>

                    {plan.popular ? (
                      <span className="shrink-0 rounded-full bg-[#dff7ff] px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-[#15a8d4]">
                        Most Popular
                      </span>
                    ) : null}
                  </div>

                  <div className="mt-5 rounded-2xl border border-[#e3eaf4] bg-white/80 p-5">
                    <p className="text-xs font-black uppercase tracking-[0.24em] text-[#65718c]">Package Price</p>
                    <p className="mt-3 text-4xl font-black text-[var(--industry-accent)]">{plan.price}</p>
                    <p className="mt-2 text-sm font-bold text-[#65718c]">{plan.note}</p>
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--industry-accent)]" />
                        <span className="text-[0.95rem] leading-6 text-[#334766]">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </Reveal>

        <div className="mt-6 flex justify-center gap-2">
          {config.pricingPlans.map((plan, index) => (
            <button
              key={plan.name}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Show ${plan.name}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === index ? "w-10 bg-[var(--industry-accent)]" : "w-2.5 bg-[#c9d8ea]"
              }`}
            />
          ))}
        </div>

        <Reveal>
          <div className="mt-8 rounded-[24px] border border-[#dce7f7] bg-[#f8fbff] px-6 py-5 text-center">
            <p className="text-base font-black text-[#081633]">
              Note: Add-ons, advanced automation flows, and custom integration charges are extra and are scoped separately.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function IntegrationsSection({ config }: { config: IndustryCRMConfig }) {
  return (
    <section className="bg-[#f8fbff] px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[min(95vw,1600px)]">
        <Reveal>
          <h2 className="text-center text-3xl font-black text-[#081633]">Seamless Integrations</h2>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-9">
          {config.integrations.map((integration) => {
            const Icon = integration.icon;
            return (
              <Reveal key={integration.name}>
                <div className="rounded-2xl border border-[#dce7f7] bg-white p-5 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_45px_rgba(15,23,42,0.08)]">
                  <Icon className="mx-auto h-7 w-7 text-[var(--industry-accent)]" />
                  <p className="mt-3 text-sm font-black text-[#081633]">{integration.name}</p>
                  <p className="text-xs text-[#65718c]">{integration.sub}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function IndustryCRMContent({ config }: { config: IndustryCRMConfig }) {
  return (
    <main style={themeStyle(config)} className="overflow-hidden bg-[#f8fbff] text-[#081633]">
      <section className="relative border-b border-[#e5edf8] bg-gradient-to-br from-white via-[#fbfdff] to-[#eefbff] px-4 pb-10 pt-28 sm:px-6 lg:px-8 lg:pt-32">
        <div className="mx-auto grid max-w-[min(95vw,1600px)] gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <Reveal>
            <div className="relative z-20">
              <div className="inline-flex items-center gap-3 rounded-full bg-[var(--industry-accent-soft)] px-5 py-3 text-sm font-black uppercase text-[var(--industry-accent)]">
                <CheckCircle2 className="h-4 w-4" />
                {config.badge}
              </div>

              <h1 className="mt-7 max-w-3xl text-4xl font-black leading-[1.06] text-[#071633] sm:text-5xl lg:text-[3.55rem] xl:text-[4rem]">
                {config.headline.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-9 text-[#334766]">{config.description}</p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button href="/contact" size="lg" className="!h-[60px] !bg-[var(--industry-accent)] !px-8 !text-[1.05rem] !text-white hover:!bg-[var(--industry-accent-dark)]">
                  Book a Demo
                </Button>
                <Button href="/crm-demo" variant="secondary" size="lg" className="!h-[60px] !border-[#dce7f7] !bg-white !px-8 !text-[1rem] !text-[#081633]">
                  <Play className="mr-1 h-5 w-5" />
                  See it in Action
                </Button>
              </div>

              <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                {config.trustBadges.map((badge) => {
                  const Icon = badge.icon;
                  return (
                    <div key={badge.label} className="flex items-center gap-3">
                      <span className="grid h-[56px] w-12 shrink-0 place-items-center rounded-[18px] bg-white text-[var(--industry-accent)] shadow-sm ring-1 ring-[#dce7f7]">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-base font-black leading-tight text-[#081633]">{badge.label}</p>
                        <p className="mt-1 text-sm font-bold leading-tight text-[#65718c]">{badge.sub}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>

          <Reveal>
            <HeroVisual config={config} />
          </Reveal>
        </div>
      </section>

      <WhySection config={config} />
      <SpecialtyCarousel config={config} />
      <DashboardSection config={config} />
      <JourneySection config={config} />
      <FeatureBlock config={config} />
      <OperationsSection config={config} />
      <PricingCarousel config={config} />
      <IntegrationsSection config={config} />
    </main>
  );
}

export function IndustryCRMTemplate({ config }: { config: IndustryCRMConfig }) {
  return (
    <>
      <IndustryCRMContent config={config} />
    </>
  );
}
