"use client";

import { motion } from "framer-motion";
import {
  Activity,
  BarChart3,
  Bell,
  Bot,
  CheckCircle2,
  CircleDollarSign,
  Clock3,
  ContactRound,
  DatabaseZap,
  Gauge,
  LayoutDashboard,
  ListChecks,
  Mail,
  MessageCircle,
  PieChart,
  Search,
  Settings,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  UsersRound,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ImageSlot } from "@/components/ui/ImageSlot";

const sidebar = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Leads", icon: ContactRound },
  { label: "Deals", icon: CircleDollarSign },
  { label: "Contacts", icon: UsersRound },
  { label: "Activities", icon: Activity },
  { label: "Automations", icon: DatabaseZap },
  { label: "Reports", icon: BarChart3 },
  { label: "Team", icon: UsersRound },
  { label: "Settings", icon: Settings },
];

const kpis = [
  { label: "Total Leads", value: "1,248", delta: "+18%", icon: ContactRound },
  { label: "Qualified Leads", value: "532", delta: "+12%", icon: Gauge },
  { label: "Deals Won", value: "198", delta: "+9%", icon: CheckCircle2 },
  { label: "Revenue", value: "₹48.6L", delta: "+24%", icon: TrendingUp },
];

const leadScores = [
  ["Acme Corp", "92", "Hot"],
  ["TechNova", "85", "Hot"],
  ["GreenLeaf", "78", "Warm"],
  ["Bright Infosys", "72", "Warm"],
  ["Skyline Tech", "65", "Warm"],
];

const activities = [
  { icon: MessageCircle, text: "WhatsApp follow-up sent to Acme Corp", time: "2m ago" },
  { icon: Mail, text: "Proposal email opened by GreenLeaf", time: "12m ago" },
  { icon: Bell, text: "Task created for Skyline Tech demo", time: "24m ago" },
  { icon: Bot, text: "AI moved TechNova to hot prospects", time: "31m ago" },
];

const pipeline = [
  { label: "New Leads", count: 38, width: "78%" },
  { label: "Contacted", count: 26, width: "62%" },
  { label: "Proposal Sent", count: 14, width: "48%" },
  { label: "Negotiation", count: 9, width: "36%" },
  { label: "Won", count: 7, width: "30%" },
];

export function Hero() {
  return (
    <section className="relative px-4 pb-20 pt-14 sm:px-6 sm:pt-18 lg:px-8 lg:pb-28 lg:pt-24">
      <div className="absolute left-0 top-12 h-96 w-[34rem] rounded-full bg-cyanGlow/12 blur-3xl" />
      <div className="absolute right-0 top-20 h-[30rem] w-[34rem] rounded-full bg-violetGlow/18 blur-3xl" />
      <div className="grid-fade absolute left-[-8rem] top-12 h-[32rem] w-[42rem] opacity-70" />
      <div className="mx-auto grid max-w-[min(92vw,1440px)] items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyanGlow/20 bg-cyanGlow/10 px-4 py-2 text-sm font-medium text-cyan-100 shadow-glow">
            <Sparkles className="h-4 w-4 text-tealGlow" aria-hidden="true" />
            Custom CRM implementation for modern teams
          </div>
          <h1 className="max-w-4xl text-balance text-5xl font-bold leading-[1.02] tracking-normal text-white sm:text-6xl lg:text-7xl">
            Custom CRM built around your business{" "}
            <span className="text-gradient">workflow.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            HNX helps you organize leads, automate follow-ups, manage teams, track deals, and view business
            reports from one clean dashboard.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#consultation" size="lg" showArrow>
              Book a CRM Consultation
            </Button>
            <Button href="#process" variant="secondary" size="lg">
              See How It Works
            </Button>
          </div>
          <div className="mt-8 grid gap-3 text-sm text-slate-300 sm:grid-cols-3">
            {["No Credit Card Required", "Setup in Days Not Months", "Secure & Reliable Enterprise Grade"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 shrink-0 text-tealGlow" aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8, ease: "easeOut" }}
            className="mt-10 hidden max-w-md lg:block"
          >
            <ImageSlot
              src="/images/team-meeting.jpg"
              alt="Business team meeting placeholder"
              className="h-48 shadow-card"
            >
              <div className="flex h-full items-end p-5">
                <div className="rounded-2xl border border-white/10 bg-slate-950/72 p-4 backdrop-blur-xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyanGlow">Team sync</p>
                  <p className="mt-1 text-sm font-semibold text-white">CRM rollout workshop</p>
                  <div className="mt-3 flex -space-x-2">
                    {[0, 1, 2, 3].map((item) => (
                      <span
                        key={item}
                        className="grid h-8 w-8 place-items-center rounded-full border border-slate-950 bg-gradient-to-br from-cyanGlow to-violetGlow text-[11px] font-bold text-white"
                      >
                        {["AR", "NS", "PM", "KV"][item]}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ImageSlot>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 34 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative z-10"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="hairline-glow relative rounded-[32px] bg-slate-950/72 p-2 shadow-[0_36px_120px_rgba(37,208,255,0.18)]"
          >
            <div className="overflow-hidden rounded-[26px] border border-white/10 bg-[#07111f]/95">
              <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.035] px-5 py-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400/80" />
                  <span className="h-3 w-3 rounded-full bg-amber-300/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                </div>
                <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-slate-950/70 px-3 py-2 text-xs text-slate-400 sm:flex">
                  <Search className="h-3.5 w-3.5" aria-hidden="true" />
                  Search leads, deals, contacts...
                </div>
              </div>
              <div className="grid min-h-[700px] grid-cols-1 lg:grid-cols-[174px_1fr]">
                <aside className="hidden border-r border-white/10 bg-slate-950/50 p-4 lg:block">
                  <div className="mb-5 flex items-center gap-2 rounded-2xl border border-cyanGlow/20 bg-cyanGlow/10 p-3">
                    <span className="grid h-8 w-8 place-items-center rounded-xl bg-cyanGlow/20 text-cyan-100">
                      <LayoutDashboard className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-xs font-bold text-white">HNX</p>
                      <p className="text-[10px] text-slate-400">Admin Suite</p>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    {sidebar.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={item.label}
                          className={`flex items-center gap-2 rounded-xl px-3 py-2 text-xs ${
                            index === 0
                              ? "bg-cyanGlow/12 text-cyan-100 shadow-glow"
                              : "text-slate-400 hover:bg-white/[0.04] hover:text-slate-200"
                          }`}
                        >
                          <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                          {item.label}
                        </div>
                      );
                    })}
                  </div>
                </aside>

                <div className="p-4 sm:p-5">
                  <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyanGlow">Command Center</p>
                      <h2 className="mt-1 text-xl font-bold text-white">Sales Overview</h2>
                    </div>
                    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-3 py-2 text-xs text-slate-300">
                      <Clock3 className="h-3.5 w-3.5 text-tealGlow" aria-hidden="true" />
                      Live updates enabled
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                    {kpis.map((kpi) => {
                      const Icon = kpi.icon;
                      return (
                        <div key={kpi.label} className="rounded-2xl border border-white/10 bg-white/[0.055] p-4">
                          <div className="flex items-center justify-between">
                            <span className="grid h-9 w-9 place-items-center rounded-xl bg-cyanGlow/12 text-cyan-100">
                              <Icon className="h-4 w-4" aria-hidden="true" />
                            </span>
                            <span className="rounded-full bg-tealGlow/10 px-2 py-1 text-[11px] font-semibold text-tealGlow">
                              {kpi.delta}
                            </span>
                          </div>
                          <p className="mt-4 text-2xl font-bold text-white">{kpi.value}</p>
                          <p className="mt-1 text-xs text-slate-400">{kpi.label}</p>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-4 grid gap-4 xl:grid-cols-[1.35fr_0.85fr]">
                    <div className="rounded-3xl border border-white/10 bg-white/[0.045] p-5">
                      <div className="mb-5 flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-white">Leads Over Time</h3>
                          <p className="text-xs text-slate-400">Weekly qualified lead movement</p>
                        </div>
                        <BarChart3 className="h-5 w-5 text-cyanGlow" aria-hidden="true" />
                      </div>
                      <div className="relative h-48 overflow-hidden rounded-2xl border border-white/[0.06] bg-slate-950/54 p-4">
                        <div className="absolute inset-0 grid grid-rows-4">
                          {[0, 1, 2, 3].map((row) => (
                            <span key={row} className="border-b border-white/[0.055]" />
                          ))}
                        </div>
                        <svg className="relative h-full w-full" viewBox="0 0 420 170" role="img" aria-label="Leads over time line chart">
                          <defs>
                            <linearGradient id="lineGlow" x1="0" x2="1">
                              <stop offset="0%" stopColor="#25d0ff" />
                              <stop offset="52%" stopColor="#14f1d9" />
                              <stop offset="100%" stopColor="#7c3aed" />
                            </linearGradient>
                            <linearGradient id="areaGlow" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#25d0ff" stopOpacity="0.28" />
                              <stop offset="100%" stopColor="#25d0ff" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                          <path
                            d="M8 132 C42 118, 54 94, 88 104 C126 116, 130 58, 168 68 C210 80, 212 36, 248 48 C288 60, 296 28, 330 38 C366 48, 382 24, 412 30 L412 170 L8 170 Z"
                            fill="url(#areaGlow)"
                          />
                          <path
                            d="M8 132 C42 118, 54 94, 88 104 C126 116, 130 58, 168 68 C210 80, 212 36, 248 48 C288 60, 296 28, 330 38 C366 48, 382 24, 412 30"
                            fill="none"
                            stroke="url(#lineGlow)"
                            strokeWidth="5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-white/[0.045] p-5">
                      <div className="mb-4 flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-white">Leads by Source</h3>
                          <p className="text-xs text-slate-400">Source quality split</p>
                        </div>
                        <PieChart className="h-5 w-5 text-violet-300" aria-hidden="true" />
                      </div>
                      <div className="grid items-center gap-4 sm:grid-cols-[130px_1fr] xl:grid-cols-1">
                        <div className="relative mx-auto h-32 w-32 rounded-full bg-[conic-gradient(from_180deg,#25d0ff_0_38%,#14f1d9_38%_62%,#7c3aed_62%_84%,#334155_84%_100%)] p-4 shadow-glow">
                          <div className="grid h-full w-full place-items-center rounded-full bg-[#07111f] text-center">
                            <span className="text-2xl font-bold text-white">86%</span>
                            <span className="-mt-2 block text-[10px] text-slate-400">quality</span>
                          </div>
                        </div>
                        <div className="space-y-2 text-xs text-slate-300">
                          {[
                            ["Website Forms", "38%", "bg-cyanGlow"],
                            ["WhatsApp", "24%", "bg-tealGlow"],
                            ["Referrals", "22%", "bg-violetGlow"],
                            ["Email", "16%", "bg-slate-500"],
                          ].map(([label, value, color]) => (
                            <div key={label} className="flex items-center justify-between">
                              <span className="flex items-center gap-2">
                                <span className={`h-2 w-2 rounded-full ${color}`} />
                                {label}
                              </span>
                              <span className="font-semibold text-white">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
                    <div className="rounded-3xl border border-white/10 bg-white/[0.045] p-5">
                      <div className="mb-4 flex items-center justify-between">
                        <h3 className="font-semibold text-white">Lead Pipeline</h3>
                        <ListChecks className="h-5 w-5 text-tealGlow" aria-hidden="true" />
                      </div>
                      <div className="grid gap-3 sm:grid-cols-5 xl:grid-cols-1">
                        {pipeline.map((stage) => (
                          <div key={stage.label} className="rounded-2xl border border-white/[0.07] bg-slate-950/46 p-3">
                            <div className="flex items-center justify-between text-xs">
                              <span className="font-medium text-slate-200">{stage.label}</span>
                              <span className="text-slate-400">{stage.count}</span>
                            </div>
                            <div className="mt-3 h-2 rounded-full bg-white/[0.07]">
                              <div
                                className="h-full rounded-full bg-gradient-to-r from-cyanGlow to-violetGlow"
                                style={{ width: stage.width }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid gap-4">
                      <div className="rounded-3xl border border-white/10 bg-white/[0.045] p-5">
                        <div className="mb-4 flex items-center justify-between">
                          <h3 className="font-semibold text-white">AI Lead Score</h3>
                          <Bot className="h-5 w-5 text-cyanGlow" aria-hidden="true" />
                        </div>
                        <div className="space-y-2">
                          {leadScores.map(([company, score, status]) => (
                            <div key={company} className="flex items-center justify-between rounded-2xl bg-slate-950/46 px-3 py-2">
                              <span className="text-xs text-slate-200">{company}</span>
                              <span className="flex items-center gap-2">
                                <span className="text-xs font-bold text-white">{score}</span>
                                <span
                                  className={`rounded-full px-2 py-1 text-[10px] font-semibold ${
                                    status === "Hot" ? "bg-cyanGlow/15 text-cyan-100" : "bg-tealGlow/12 text-teal-100"
                                  }`}
                                >
                                  {status}
                                </span>
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="rounded-3xl border border-white/10 bg-white/[0.045] p-5">
                        <h3 className="mb-4 font-semibold text-white">Recent Activities</h3>
                        <div className="space-y-3">
                          {activities.map((activity) => {
                            const Icon = activity.icon;
                            return (
                              <div key={activity.text} className="flex items-start gap-3">
                                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-cyanGlow/10 text-cyan-100">
                                  <Icon className="h-4 w-4" aria-hidden="true" />
                                </span>
                                <div>
                                  <p className="text-xs leading-5 text-slate-200">{activity.text}</p>
                                  <p className="text-[10px] text-slate-500">{activity.time}</p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
