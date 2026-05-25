"use client";

import Link from "next/link";
import { useMemo, useState, type ReactNode } from "react";
import * as Lucide from "lucide-react";
import { SolutionCategoryTabs } from "@/components/solutions/shared/SolutionCategoryTabs";
import { SolutionSidebar } from "@/components/solutions/SolutionSidebar";
import type { SolutionPageData } from "@/data/solutions/types";

type LucideIcon = Lucide.LucideIcon;

const MODULE_NAME = "App Analytics & Improvements";
const SIDEBAR_TITLE = "App Analytics";
const SIDEBAR_SUBTITLE = "Post-launch Growth System";

function tabSolution(slug: string, label: string, href: string, icon: SolutionPageData["icon"]): SolutionPageData {
  return {
    slug,
    label,
    href,
    icon,
    eyebrow: label,
    headline: label,
    description: `${label} solution by HNX.`,
    problem: "",
    solution: "",
    impact: "",
    stats: [],
    problems: [],
    flow: [],
    modules: [],
    process: [],
    useCases: [],
    preview: { title: label, subtitle: "", metrics: [], rows: [] },
    ctaTitle: label,
    ctaText: "",
  };
}

const mobileAppSolutions: readonly SolutionPageData[] = [
  tabSolution("app-strategy", "App Strategy", "/solutions/mobile-apps/app-strategy", "Rocket"),
  tabSolution("customer-mobile-app", "Customer Mobile App", "/solutions/mobile-apps/customer-mobile-app", "Users"),
  tabSolution("flutter-app-development", "Flutter App Development", "/solutions/mobile-apps/flutter-app-development", "Smartphone"),
  tabSolution("booking-order-app", "Booking / Order App", "/solutions/mobile-apps/booking-order-app", "Store"),
  tabSolution("admin-connected-app", "Admin Connected App", "/solutions/mobile-apps/admin-connected-app", "LayoutDashboard"),
  tabSolution("push-notifications", "Push Notifications", "/solutions/mobile-apps/push-notifications", "Bell"),
  tabSolution("play-store-app-store-launch", "Play Store / App Store Launch", "/solutions/mobile-apps/play-store-app-store-launch", "Store"),
  tabSolution("app-analytics-improvements", "App Analytics & Improvements", "/solutions/mobile-apps/app-analytics-improvements", "BarChart3"),
];

const knowledgeTabs = [
  { id: "overview", label: "Overview", icon: Lucide.Home },
  { id: "blind-app-growth", label: "Blind App Growth", icon: Lucide.CircleAlert },
  { id: "event-tracking", label: "Event Tracking", icon: Lucide.Activity },
  { id: "funnel-analysis", label: "Funnel Analysis", icon: Lucide.BarChart3 },
  { id: "retention-metrics", label: "Retention Metrics", icon: Lucide.Users },
  { id: "crash-performance", label: "Crash & Performance", icon: Lucide.Gauge },
  { id: "user-feedback-loop", label: "User Feedback Loop", icon: Lucide.MessageCircle },
  { id: "improvement-roadmap", label: "Improvement Roadmap", icon: Lucide.GitBranch },
  { id: "growth-experiments", label: "Growth Experiments", icon: Lucide.TrendingUp },
  { id: "final-cta", label: "Final CTA", icon: Lucide.ArrowRight },
] as const;

type TabId = (typeof knowledgeTabs)[number]["id"];
type CardItem = { icon: LucideIcon; title: string; text: string; tag?: string };
type MetricItem = { label: string; value: string; note: string };
type FlowItem = { icon: LucideIcon; title: string; text: string };
type SectionContent = { title: string; intro: string; cards: CardItem[]; metrics?: MetricItem[]; flow: FlowItem[]; implementationTitle: string; implementationText: string; implementationPoints: string[]; visualTitle: string; visualRows: string[] };

const c = (icon: LucideIcon, title: string, text: string, tag?: string): CardItem => ({ icon, title, text, tag });
const m = (label: string, value: string, note: string): MetricItem => ({ label, value, note });
const f = (icon: LucideIcon, title: string, text: string): FlowItem => ({ icon, title, text });

const sections: Record<TabId, SectionContent> = {
  overview: {
    title: "Use analytics to decide what the app should become next.",
    intro:
      "A mobile app does not become successful at launch. HNX plans analytics as the post-launch growth system: event tracking, onboarding funnels, core action funnels, retention, crashes, performance, feedback, experiments, and version roadmap decisions.",
    cards: [
      c(Lucide.Activity, "Event Tracking", "Track meaningful app actions such as signup, search, booking, order, payment, support, notification, and profile updates.", "Events"),
      c(Lucide.BarChart3, "Funnel Visibility", "See where users drop from install to onboarding, first action, payment, repeat use, or support.", "Funnels"),
      c(Lucide.Users, "Retention Metrics", "Cohorts, repeat actions, inactivity, churn, and lifecycle segments show whether users keep coming back.", "Retention"),
      c(Lucide.GitBranch, "Improvement Roadmap", "Analytics, crash data, and feedback guide version 1.1, 1.2, and future releases.", "Roadmap"),
    ],
    metrics: [
      m("Core events", "40+", "Meaningful app actions can be tracked."),
      m("Funnels", "3+", "Onboarding, core action, and payment/support flows."),
      m("Retention", "Cohorts", "Repeat behavior is reviewed over time."),
      m("Roadmap", "Evidence-led", "Updates are prioritized from real signals."),
    ],
    flow: [
      f(Lucide.Activity, "Track", "Capture events, errors, performance, and feedback."),
      f(Lucide.SearchCheck, "Analyze", "Find drop-offs, friction, crashes, and missed opportunities."),
      f(Lucide.GitBranch, "Prioritize", "Rank fixes, improvements, and feature ideas."),
      f(Lucide.Rocket, "Release", "Ship updates and measure whether outcomes improve."),
    ],
    implementationTitle: "Analytics should be tied to business decisions.",
    implementationText:
      "The goal is not to collect endless dashboards. The goal is to know what to improve after launch and how those improvements affect customers and revenue.",
    implementationPoints: [
      "Define events before launch so version 1.0 creates usable data.",
      "Track funnels for onboarding and the app's main business action.",
      "Combine analytics with crash reports and user feedback.",
      "Use every release to test whether a specific metric improves.",
    ],
    visualTitle: "Analytics operating loop",
    visualRows: ["Events and funnels", "Retention and cohorts", "Crash/performance signals", "Feedback themes", "Version roadmap decisions"],
  },
  "blind-app-growth": {
    title: "Blind app growth happens when teams rely on opinions after launch.",
    intro:
      "Without analytics, the business cannot tell whether users are onboarding, completing core actions, returning, paying, abandoning, crashing, or asking for support because the app is confusing.",
    cards: [
      c(Lucide.CircleAlert, "Unknown Drop-offs", "Users leave onboarding, checkout, booking, order, or support flows without the team knowing where.", "Blind Spot"),
      c(Lucide.Bug, "Hidden Stability Issues", "Crashes, API errors, slow screens, and failed payments appear as vague complaints instead of measurable defects.", "Quality"),
      c(Lucide.MessageCircle, "Scattered Feedback", "Reviews, support tickets, WhatsApp messages, and stakeholder requests are not grouped into product themes.", "Feedback"),
      c(Lucide.Target, "Random Roadmap", "Version updates are chosen by loudest request instead of user impact, revenue, risk, and effort.", "Roadmap"),
    ],
    metrics: [
      m("Decision quality", "Weak", "Without data, roadmap choices become subjective."),
      m("Support learning", "Lost", "Repeated complaints are not connected to app behavior."),
      m("Crash visibility", "Low", "Issues are hard to reproduce and prioritize."),
      m("Growth confidence", "Limited", "Marketing and product changes cannot be measured."),
    ],
    flow: [
      f(Lucide.Smartphone, "Users try app", "Customers install and move through early flows."),
      f(Lucide.CircleAlert, "Signals are missing", "The team cannot see where friction happens."),
      f(Lucide.MessageCircle, "Complaints arrive", "Support hears symptoms without product context."),
      f(Lucide.BarChart3, "Analytics fixes", "Events, funnels, and crash tools create evidence."),
    ],
    implementationTitle: "Blind spots should become measurement requirements.",
    implementationText:
      "HNX starts by asking what the business needs to learn after launch, then maps events and reports to those questions.",
    implementationPoints: [
      "List the questions leaders will ask after launch.",
      "Map each question to events, funnels, reports, or feedback tags.",
      "Avoid vanity metrics that do not support product decisions.",
      "Create a weekly review rhythm for app health and growth.",
    ],
    visualTitle: "Blind growth diagnosis",
    visualRows: ["No onboarding funnel", "No core action funnel", "No retention cohorts", "No crash context", "No roadmap scoring"],
  },
  "event-tracking": {
    title: "Event tracking turns app behavior into readable signals.",
    intro:
      "Events should capture meaningful user and system actions, not every tap. A clean event plan includes names, properties, user context, source, status, and business outcome.",
    cards: [
      c(Lucide.Activity, "User Events", "Signup started, signup completed, profile updated, item viewed, booking started, order submitted, payment attempted, and support opened.", "User"),
      c(Lucide.Database, "Event Properties", "Screen, source, plan, item, slot, status, amount, error, segment, and campaign context make events useful.", "Context"),
      c(Lucide.Bell, "Notification Events", "Sent, delivered, opened, deep link arrived, action completed, and opt-out events show message quality.", "Push"),
      c(Lucide.ShieldCheck, "Privacy Discipline", "Track what is needed for product decisions while respecting user data and consent requirements.", "Trust"),
    ],
    metrics: [
      m("Naming", "Consistent", "Events are easy to read and compare."),
      m("Properties", "Useful", "Context explains why behavior happened."),
      m("Coverage", "Critical flows", "Important journeys are visible."),
      m("Privacy", "Controlled", "Sensitive data is not tracked carelessly."),
    ],
    flow: [
      f(Lucide.FileText, "Define event", "Name the action and business question it answers."),
      f(Lucide.Database, "Add properties", "Capture context such as source, status, amount, and segment."),
      f(Lucide.Code2, "Implement", "Track the event in the app or backend."),
      f(Lucide.SearchCheck, "Validate", "Confirm events appear correctly in analytics tools."),
    ],
    implementationTitle: "Event names should make reports understandable.",
    implementationText:
      "A clean event taxonomy prevents analytics from becoming unusable as the app grows.",
    implementationPoints: [
      "Create an event naming convention before implementation.",
      "Add properties that explain source, status, value, and errors.",
      "Validate events in staging and production builds.",
      "Review events quarterly and remove noise that does not guide action.",
    ],
    visualTitle: "Event taxonomy",
    visualRows: ["Lifecycle events", "Core action events", "Payment/status events", "Notification events", "Error and performance events"],
  },
  "funnel-analysis": {
    title: "Funnels show where users lose momentum.",
    intro:
      "A funnel connects events into a journey. For mobile apps, the most important funnels usually include onboarding, profile completion, first booking/order, checkout, payment, support, and repeat action.",
    cards: [
      c(Lucide.UserCheck, "Onboarding Funnel", "Install, open, signup start, signup complete, permissions, profile, and first action reveal activation quality.", "Activation"),
      c(Lucide.MousePointerClick, "Core Action Funnel", "Search, detail view, selection, form, confirmation, and admin handoff show product friction.", "Action"),
      c(Lucide.CreditCard, "Payment Funnel", "Checkout start, payment attempt, pending, success, failure, retry, receipt, and refund reveal revenue leakage.", "Revenue"),
      c(Lucide.Headphones, "Support Funnel", "Help view, ticket start, submit, admin reply, resolution, and feedback show service quality.", "Support"),
    ],
    metrics: [
      m("Activation", "Visible", "First-use friction is measurable."),
      m("Drop-off", "By step", "Teams know where users leave."),
      m("Revenue leakage", "Tracked", "Payment and checkout issues can be fixed."),
      m("Support quality", "Measured", "Resolution and feedback become visible."),
    ],
    flow: [
      f(Lucide.Activity, "Collect events", "Each journey step is tracked."),
      f(Lucide.BarChart3, "Build funnel", "Events are ordered into a path."),
      f(Lucide.SearchCheck, "Find drop-off", "The weakest step becomes visible."),
      f(Lucide.GitBranch, "Improve step", "Release changes target the friction point."),
    ],
    implementationTitle: "Every core app action deserves a funnel.",
    implementationText:
      "Funnels help the team fix specific steps instead of debating broad impressions about the app.",
    implementationPoints: [
      "Build onboarding and core action funnels before launch.",
      "Add payment and support funnels where they affect revenue and trust.",
      "Segment funnels by source, device, user type, and app version.",
      "Use funnel changes to evaluate each release.",
    ],
    visualTitle: "Funnel library",
    visualRows: ["Install to activation", "Home to first action", "Selection to checkout", "Payment attempt to receipt", "Support open to resolution"],
  },
  "retention-metrics": {
    title: "Retention metrics show whether the app stays valuable.",
    intro:
      "Downloads do not equal growth. Retention analysis shows whether users return, repeat core actions, respond to reminders, become inactive, or move into loyal customer segments.",
    cards: [
      c(Lucide.Users, "Cohort Retention", "Track how many users return after day 1, day 7, day 30, or custom lifecycle windows.", "Cohorts"),
      c(Lucide.RefreshCw, "Repeat Actions", "Rebooking, reordering, payment repeats, support reuse, and saved actions reveal habit formation.", "Behavior"),
      c(Lucide.Bell, "Notification Influence", "Measure whether reminders and reactivation pushes lead to useful action without increasing opt-outs.", "Push"),
      c(Lucide.UserX, "Churn Signals", "Inactivity, failed payments, abandoned flows, support complaints, and uninstall signals can show risk.", "Churn"),
    ],
    metrics: [
      m("D1/D7/D30", "Tracked", "Early and longer-term return patterns are visible."),
      m("Repeat rate", "Measured", "Users returning to core actions are counted."),
      m("Inactive users", "Segmented", "Reactivation can be targeted responsibly."),
      m("Loyalty", "Visible", "High-value behavior can guide roadmap and offers."),
    ],
    flow: [
      f(Lucide.UserCheck, "Activate", "User completes the first meaningful action."),
      f(Lucide.RefreshCw, "Repeat", "User returns to book, order, pay, or engage again."),
      f(Lucide.Users, "Cohort", "Users are grouped by start date, source, or behavior."),
      f(Lucide.TrendingUp, "Improve", "Retention experiments target the right lifecycle stage."),
    ],
    implementationTitle: "Retention should be measured by useful return behavior.",
    implementationText:
      "Opening the app matters less than returning to complete actions that create customer and business value.",
    implementationPoints: [
      "Define what counts as a meaningful return for this app.",
      "Track retention by cohort, source, version, and customer segment.",
      "Compare notification-influenced returns with organic returns.",
      "Use churn signals to improve onboarding, value, and reminders.",
    ],
    visualTitle: "Retention model",
    visualRows: ["Activation", "Second action", "Repeat cycle", "Inactive risk", "Reactivation or loyalty path"],
  },
  "crash-performance": {
    title: "Crash and performance data protects trust after launch.",
    intro:
      "Users may not report every crash or slow screen. Monitoring gives the team evidence about app stability, API failures, payment issues, startup speed, screen load, and device-specific problems.",
    cards: [
      c(Lucide.Bug, "Crash Reports", "Crashes should include app version, device, OS, screen, stack trace, and user flow context where possible.", "Crashes"),
      c(Lucide.Gauge, "Performance Traces", "Startup time, screen rendering, API latency, slow lists, and heavy images reveal where the app feels weak.", "Speed"),
      c(Lucide.Network, "API Errors", "Failed requests, timeouts, auth errors, and payment gateway issues should be separated from UI bugs.", "API"),
      c(Lucide.Smartphone, "Device Segments", "Low-end devices, specific OS versions, or network conditions may reveal hidden quality issues.", "Devices"),
    ],
    metrics: [
      m("Crash-free users", "Tracked", "Stability can be monitored by version."),
      m("Startup time", "Measured", "First impression quality is visible."),
      m("API failures", "Grouped", "Backend and network issues are diagnosable."),
      m("Version health", "Compared", "Updates can be judged by stability."),
    ],
    flow: [
      f(Lucide.Bug, "Detect issue", "Crash, error, or slow trace is captured."),
      f(Lucide.SearchCheck, "Group pattern", "Issues are grouped by version, device, screen, and severity."),
      f(Lucide.GitBranch, "Prioritize fix", "High-impact defects enter the next release."),
      f(Lucide.CheckCircle2, "Verify", "New version is monitored to confirm improvement."),
    ],
    implementationTitle: "Stability monitoring should be launch-critical.",
    implementationText:
      "Crash and performance tools let the team respond faster and protect user trust during the first public release.",
    implementationPoints: [
      "Enable crash and performance monitoring before store launch.",
      "Tag issues by app version, screen, user action, and environment.",
      "Prioritize defects by severity, frequency, and revenue or trust impact.",
      "Review stability after every app update.",
    ],
    visualTitle: "Quality monitoring stack",
    visualRows: ["Crash reports", "Non-fatal errors", "Performance traces", "API failures", "Version health review"],
  },
  "user-feedback-loop": {
    title: "User feedback becomes powerful when it is organized.",
    intro:
      "Feedback comes from store reviews, support tickets, surveys, calls, internal teams, app prompts, and analytics. The value appears when feedback is grouped, scored, and connected to roadmap decisions.",
    cards: [
      c(Lucide.Star, "Store Reviews", "Ratings and reviews reveal public trust, repeated issues, and messaging problems.", "Reviews"),
      c(Lucide.Headphones, "Support Themes", "Tickets and chats show where users need help, get confused, or face operational gaps.", "Support"),
      c(Lucide.MessageCircle, "In-app Feedback", "Short prompts, satisfaction checks, and issue reporting can capture context close to the problem.", "In-app"),
      c(Lucide.ListChecks, "Theme Scoring", "Group feedback by frequency, severity, business value, effort, and related analytics signals.", "Prioritize"),
    ],
    metrics: [
      m("Feedback sources", "Unified", "Reviews, support, and surveys are connected."),
      m("Themes", "Tagged", "Repeated patterns become visible."),
      m("Severity", "Scored", "Not all requests are treated equally."),
      m("Roadmap", "Informed", "Feedback supports version planning."),
    ],
    flow: [
      f(Lucide.MessageCircle, "Capture", "Collect reviews, tickets, surveys, and in-app feedback."),
      f(Lucide.Tags, "Tag", "Group feedback into product, support, performance, and feature themes."),
      f(Lucide.BarChart3, "Compare", "Match feedback with analytics and crash data."),
      f(Lucide.GitBranch, "Prioritize", "Move validated themes into roadmap decisions."),
    ],
    implementationTitle: "Feedback should be connected to evidence.",
    implementationText:
      "A feature request becomes more useful when the team can see how often it appears, which users mention it, and which analytics signal supports it.",
    implementationPoints: [
      "Create feedback categories that match app modules and user journeys.",
      "Link support themes to funnel drop-offs and crash reports where possible.",
      "Score requests by impact, frequency, effort, and strategic value.",
      "Close the loop by communicating improvements through release notes or support replies.",
    ],
    visualTitle: "Feedback loop",
    visualRows: ["Store reviews", "Support tickets", "In-app feedback", "Theme scoring", "Roadmap decision"],
  },
  "improvement-roadmap": {
    title: "The improvement roadmap turns signals into versions.",
    intro:
      "Version 1.1, 1.2, and later updates should be shaped by analytics, crash data, feedback, business goals, and technical health. The roadmap should balance fixes, UX improvements, and growth features.",
    cards: [
      c(Lucide.GitBranch, "Version Buckets", "Separate hotfixes, stability work, UX improvements, growth experiments, admin controls, and major features.", "Planning"),
      c(Lucide.Target, "Priority Scoring", "Score items by user impact, revenue impact, support load, risk, effort, and strategic value.", "Scoring"),
      c(Lucide.Code2, "Release Scope", "Each app version should have a focused goal rather than a random bundle of unrelated changes.", "Delivery"),
      c(Lucide.FileText, "Release Notes", "Users and stakeholders should understand what changed and why it matters.", "Communication"),
    ],
    metrics: [
      m("V1.1", "Focused", "Stability and first friction fixes."),
      m("V1.2", "Growth", "Prioritized enhancements from evidence."),
      m("Backlog", "Scored", "Requests are ranked, not guessed."),
      m("Outcome", "Measured", "Every release has success signals."),
    ],
    flow: [
      f(Lucide.Activity, "Gather signals", "Analytics, crashes, feedback, and support themes feed the backlog."),
      f(Lucide.ListChecks, "Score", "Items are ranked by impact and effort."),
      f(Lucide.Rocket, "Release", "Focused updates ship with QA and release notes."),
      f(Lucide.BarChart3, "Review", "Metrics confirm whether the update worked."),
    ],
    implementationTitle: "A roadmap should connect effort to outcomes.",
    implementationText:
      "HNX helps clients decide what to improve next based on evidence, not pressure from the latest complaint.",
    implementationPoints: [
      "Group roadmap items by fix, improve, grow, and maintain categories.",
      "Assign each version a measurable objective.",
      "Keep release scope small enough to test and learn.",
      "Review results before committing to the next roadmap cycle.",
    ],
    visualTitle: "Version planning board",
    visualRows: ["Hotfix queue", "V1.1 friction fixes", "V1.2 feature improvements", "Admin/control enhancements", "Long-term product bets"],
  },
  "growth-experiments": {
    title: "Growth experiments help improve behavior without guessing.",
    intro:
      "Once the app has a stable analytics base, the team can test onboarding prompts, home screen priority, saved actions, notification timing, offers, loyalty, referrals, and checkout improvements.",
    cards: [
      c(Lucide.Sparkles, "Onboarding Experiments", "Test value prompts, profile timing, permission prompts, and first-action guidance.", "Activation"),
      c(Lucide.Home, "Home Screen Tests", "Change next-action cards, shortcuts, offers, and status modules based on user behavior.", "Engagement"),
      c(Lucide.Bell, "Notification Tests", "Compare timing, copy, segment, and deep link performance while watching opt-outs.", "Retention"),
      c(Lucide.CreditCard, "Checkout Improvements", "Test summary clarity, payment recovery, saved details, and trust cues to reduce revenue leakage.", "Revenue"),
    ],
    metrics: [
      m("Hypotheses", "Written", "Each experiment has a reason and metric."),
      m("Guardrails", "Set", "Opt-outs, crashes, and support issues are watched."),
      m("Impact", "Measured", "Changes are compared against baseline."),
      m("Learning", "Documented", "Results guide future releases."),
    ],
    flow: [
      f(Lucide.SearchCheck, "Find opportunity", "Analytics reveals friction or growth potential."),
      f(Lucide.Target, "Write hypothesis", "Define expected behavior change and metric."),
      f(Lucide.Rocket, "Ship test", "Release the experiment safely."),
      f(Lucide.BarChart3, "Evaluate", "Compare outcome, guardrails, and next decision."),
    ],
    implementationTitle: "Experiments should be small, measurable, and respectful.",
    implementationText:
      "Growth work should improve user value, not manipulate behavior. HNX designs experiments with clear goals and trust guardrails.",
    implementationPoints: [
      "Start experiments only after baseline tracking is reliable.",
      "Define one primary metric and at least one trust guardrail.",
      "Test changes small enough to understand the result.",
      "Keep experiment learnings in the roadmap record.",
    ],
    visualTitle: "Experiment loop",
    visualRows: ["Opportunity from data", "Hypothesis and metric", "Small release", "Guardrail review", "Roadmap decision"],
  },
  "final-cta": {
    title: "Turn post-launch app data into better versions.",
    intro:
      "HNX can help implement analytics, funnels, retention reports, crash monitoring, feedback loops, roadmap scoring, and growth experiments so every release improves with evidence.",
    cards: [
      c(Lucide.Activity, "Analytics Setup", "Define events, properties, funnels, cohorts, and dashboards around real business decisions.", "Setup"),
      c(Lucide.Gauge, "Quality Monitoring", "Track crashes, performance, API errors, and release health after launch.", "Stability"),
      c(Lucide.MessageCircle, "Feedback System", "Organize reviews, support themes, in-app feedback, and stakeholder requests.", "Feedback"),
      c(Lucide.GitBranch, "Version Roadmap", "Prioritize fixes, improvements, and experiments for V1.1, V1.2, and future releases.", "Roadmap"),
    ],
    metrics: [
      m("Events", "Defined", "The app produces usable signals."),
      m("Funnels", "Visible", "Drop-offs can be diagnosed."),
      m("Retention", "Measured", "Return behavior becomes clear."),
      m("Updates", "Evidence-led", "Roadmap decisions are grounded."),
    ],
    flow: [
      f(Lucide.SearchCheck, "Plan", "Define business questions and measurement needs."),
      f(Lucide.Code2, "Implement", "Add events, crash tools, dashboards, and feedback capture."),
      f(Lucide.BarChart3, "Review", "Analyze funnels, cohorts, quality, and user themes."),
      f(Lucide.Rocket, "Improve", "Ship focused releases and measure outcomes."),
    ],
    implementationTitle: "Analytics should create a better app, not just a dashboard.",
    implementationText:
      "The value is in the loop: measure, diagnose, prioritize, release, and measure again.",
    implementationPoints: [
      "Start with questions the business needs answered.",
      "Track events and funnels that relate to those questions.",
      "Combine quantitative data with qualitative feedback.",
      "Plan every update around a measurable improvement goal.",
    ],
    visualTitle: "HNX analytics delivery",
    visualRows: ["Measurement planning", "Event and funnel implementation", "Crash and performance monitoring", "Feedback and roadmap scoring", "Growth experiments and releases"],
  },
};

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function getTabFromHash(hash: string): TabId | null {
  const id = hash.replace("#", "");
  return knowledgeTabs.find((item) => item.id === id)?.id ?? null;
}

function scrollToKnowledge() {
  window.requestAnimationFrame(() => {
    const element = document.getElementById("knowledge-content");
    if (!element) return;
    const stickyOffset = window.innerWidth >= 1024 ? 190 : 170;
    const top = element.getBoundingClientRect().top + window.scrollY - stickyOffset;
    window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
  });
}

function IconShell({ icon: Icon, className }: { icon: LucideIcon; className?: string }) {
  return (
    <span className={cx("grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#eef6ff] text-[#2378ff] ring-1 ring-[#bfd7ff]", className)}>
      <Icon className="h-5 w-5" aria-hidden="true" />
    </span>
  );
}

function MobileTabs({ activeTab, onTabChange }: { activeTab: TabId; onTabChange: (tab: TabId) => void }) {
  return (
    <div className="sticky top-[136px] z-30 border-b border-[#d7e1f2] bg-white/95 px-4 py-3 shadow-sm backdrop-blur-xl lg:hidden">
      <div className="flex gap-2 overflow-x-auto pb-1">
        {knowledgeTabs.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button key={item.id} type="button" onClick={() => onTabChange(item.id)} className={cx("flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-xs font-extrabold transition", isActive ? "border-[#9fc6e6] bg-[#eef6ff] text-[#145cb7]" : "border-[#d7e1f2] bg-white text-[#334766]")}>
              <Icon className="h-4 w-4" aria-hidden="true" />
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Breadcrumb({ activeLabel }: { activeLabel: string }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-3 text-sm font-extrabold">
      <Link href="/solutions" className="text-[#0891b2] transition hover:text-[#145cb7]">Solutions</Link>
      <span className="text-[#9aa7bd]">/</span>
      <Link href="/solutions/mobile-apps/app-strategy" className="text-[#0891b2] transition hover:text-[#145cb7]">Mobile Apps</Link>
      <span className="text-[#9aa7bd]">/</span>
      <span className="text-[#334766]">{MODULE_NAME}</span>
      <span className="text-[#9aa7bd]">/</span>
      <span className="text-[#0f214f]">{activeLabel}</span>
    </nav>
  );
}

function ChapterShell({ activeLabel, title, intro, children }: { activeLabel: string; title: string; intro: string; children: ReactNode }) {
  return (
    <section className="border-b border-[#d7e1f2] bg-white px-5 py-10 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
      <Breadcrumb activeLabel={activeLabel} />
      <div className="max-w-5xl">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-[#145cb7]">{MODULE_NAME}</p>
        <h1 className="mt-5 text-5xl font-black leading-[1.02] tracking-[-0.06em] text-[#0f214f] sm:text-6xl">{title}</h1>
        <p className="mt-5 max-w-4xl text-base font-semibold leading-8 text-[#52627d] sm:text-lg">{intro}</p>
      </div>
      <div className="mt-10 space-y-8">{children}</div>
    </section>
  );
}

function KnowledgeCard({ item }: { item: CardItem }) {
  const Icon = item.icon;
  return (
    <div className="rounded-[24px] border border-[#d7e1f2] bg-white p-5 shadow-[0_18px_45px_rgba(15,23,42,0.045)]">
      <div className="flex items-start gap-4">
        <IconShell icon={Icon} />
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-lg font-black tracking-[-0.02em] text-[#0f214f]">{item.title}</h3>
            {item.tag ? <span className="rounded-full bg-[#eef6ff] px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-[#145cb7]">{item.tag}</span> : null}
          </div>
          <p className="mt-2 text-sm font-semibold leading-6 text-[#52627d]">{item.text}</p>
        </div>
      </div>
    </div>
  );
}

function MetricCard({ metric }: { metric: MetricItem }) {
  return (
    <div className="rounded-[22px] border border-[#d7e1f2] bg-white p-5 shadow-[0_18px_40px_rgba(15,23,42,0.045)]">
      <p className="text-xs font-black uppercase tracking-[0.15em] text-[#66728f]">{metric.label}</p>
      <p className="mt-3 text-3xl font-black tracking-[-0.05em] text-[#0f214f]">{metric.value}</p>
      <p className="mt-2 text-sm font-semibold leading-6 text-[#52627d]">{metric.note}</p>
      <svg viewBox="0 0 220 36" className="mt-3 h-9 w-full text-[#2378ff]" aria-hidden="true">
        <path d="M2 28 L18 24 L34 27 L50 22 L66 25 L82 17 L98 18 L114 14 L130 17 L146 10 L162 13 L178 8 L194 12 L218 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
      </svg>
    </div>
  );
}

function PreviewWindow() {
  return (
    <div className="overflow-hidden rounded-[28px] border border-[#d7e1f2] bg-white shadow-[0_20px_55px_rgba(15,23,42,0.08)]">
      <div className="flex items-center justify-between border-b border-[#d7e1f2] bg-[#f8fbff] px-5 py-4">
        <div className="flex gap-2"><span className="h-3 w-3 rounded-full bg-red-400" /><span className="h-3 w-3 rounded-full bg-yellow-400" /><span className="h-3 w-3 rounded-full bg-green-400" /></div>
        <p className="text-xs font-black text-[#66728f]">App Growth Dashboard</p>
      </div>
      <div className="grid gap-5 p-5 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[24px] bg-gradient-to-br from-[#0f214f] via-[#145cb7] to-[#19b7c5] p-6 text-white">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-100">Post-launch intelligence</p>
          <h3 className="mt-4 text-4xl font-black tracking-[-0.05em]">Measure, diagnose, improve, and release again.</h3>
          <p className="mt-4 text-sm font-semibold leading-7 text-blue-100">Analytics, crashes, feedback, and experiments guide every app version after launch.</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {["Events", "Funnels", "Retention", "Roadmap"].map((item) => <p key={item} className="rounded-xl bg-white/12 px-4 py-3 text-xs font-black">{item}</p>)}
          </div>
        </div>
        <div className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-3">
            {[["42k", "Events"], ["68%", "Activation"], ["96%", "Crash-free"]].map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-[#d7e1f2] bg-[#f8fbff] p-4">
                <p className="text-2xl font-black text-[#145cb7]">{value}</p>
                <p className="mt-1 text-xs font-bold text-[#66728f]">{label}</p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-[#d7e1f2] bg-[#f8fbff] p-4">
            <p className="text-sm font-black text-[#0f214f]">Improvement signals</p>
            <div className="mt-4 space-y-2">
              {["Onboarding drop-off at OTP", "Payment failures grouped", "Support theme: reschedule", "Inactive cohort ready", "V1.1 backlog prioritized"].map((item) => (
                <div key={item} className="flex items-center justify-between rounded-xl bg-white px-4 py-3">
                  <span className="text-xs font-black text-[#0f214f]">{item}</span>
                  <Lucide.CheckCircle2 className="h-4 w-4 text-emerald-600" />
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-[#bfd7ff] bg-[#eef6ff] px-4 py-3">
            <p className="text-sm font-black text-[#145cb7]">Outcome: every release learns from real app behavior</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FlowVisual({ items }: { items: FlowItem[] }) {
  return (
    <div className="overflow-x-auto rounded-[28px] border border-[#d7e1f2] bg-[#f8fbff] p-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <div className="flex min-w-max items-stretch gap-4">
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="relative flex w-[235px] shrink-0">
              <div className="flex min-h-[245px] w-full flex-col rounded-[24px] border border-[#d7e1f2] bg-white p-5 shadow-[0_18px_45px_rgba(15,23,42,0.045)]">
                <div className="flex items-start justify-between gap-4">
                  <IconShell icon={Icon} className="h-12 w-12" />
                  <span className="rounded-full bg-[#eef6ff] px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-[#145cb7]">Step {index + 1}</span>
                </div>
                <p className="mt-5 text-xl font-black tracking-[-0.03em] text-[#0f214f]">{item.title}</p>
                <p className="mt-3 text-sm font-semibold leading-6 text-[#52627d]">{item.text}</p>
              </div>
              {index < items.length - 1 ? <span className="absolute -right-6 top-1/2 z-20 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-[#bfd7ff] bg-white text-[#2378ff] shadow-[0_10px_20px_rgba(15,23,42,0.08)] md:flex"><Lucide.ArrowRight className="h-4 w-4" /></span> : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ImplementationMap({ title, rows }: { title: string; rows: string[] }) {
  return (
    <div className="rounded-[28px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.04)]">
      <div className="flex items-center justify-between gap-4">
        <p className="text-lg font-black text-[#0f214f]">{title}</p>
        <span className="rounded-full bg-[#eef6ff] px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-[#145cb7]">HNX Map</span>
      </div>
      <div className="mt-5 space-y-3">
        {rows.map((row, index) => (
          <div key={row} className="flex items-center gap-3 rounded-2xl bg-[#f8fbff] p-4">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-sm font-black text-[#145cb7] ring-1 ring-[#bfd7ff]">{index + 1}</span>
            <p className="text-sm font-black text-[#0f214f]">{row}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function SplitPanel({ title, text, points, visual }: { title: string; text: string; points: string[]; visual: ReactNode }) {
  return (
    <div className="grid gap-6 rounded-[28px] border border-[#d7e1f2] bg-[#f8fbff] p-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
      <div>
        <h2 className="text-2xl font-black tracking-[-0.035em] text-[#0f214f]">{title}</h2>
        <p className="mt-4 text-sm font-semibold leading-7 text-[#52627d]">{text}</p>
        <div className="mt-5 space-y-3">
          {points.map((point) => (
            <div key={point} className="flex items-start gap-3">
              <Lucide.CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
              <p className="text-sm font-semibold leading-6 text-[#465374]">{point}</p>
            </div>
          ))}
        </div>
      </div>
      {visual}
    </div>
  );
}

function SectionFooter({ activeTab, onTabChange }: { activeTab: TabId; onTabChange: (tab: TabId) => void }) {
  const activeIndex = knowledgeTabs.findIndex((item) => item.id === activeTab);
  const nextTab = knowledgeTabs[activeIndex + 1];
  if (!nextTab) {
    return (
      <div className="flex flex-col gap-3 rounded-[28px] bg-[#075edb] p-6 text-white sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xl font-black">Ready to improve your app with real data?</p>
          <p className="mt-2 text-sm font-semibold text-blue-100">Set up tracking, funnels, retention, quality monitoring, feedback, and roadmap scoring.</p>
        </div>
        <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-extrabold text-[#075edb]">
          Book Analytics Call <Lucide.ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    );
  }
  return (
    <div className="flex justify-end">
      <button type="button" onClick={() => onTabChange(nextTab.id)} className="inline-flex items-center justify-center gap-2 rounded-full border border-[#c8d7ea] bg-white px-6 py-3 text-sm font-extrabold text-[#0f214f] shadow-[0_12px_28px_rgba(15,23,42,0.06)] transition hover:border-[#145cb7] hover:text-[#145cb7]">
        Continue to {nextTab.label} <Lucide.ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}

function buildDepthCards(section: SectionContent): CardItem[] {
  const needed = Math.max(0, 6 - section.cards.length);
  const labels = ["Execution Detail", "Business Control", "Measurement Detail", "Launch Detail"];
  const icons = [Lucide.Settings, Lucide.LayoutDashboard, Lucide.SearchCheck, Lucide.Database];

  return section.flow.slice(0, needed).map((item, index) => ({
    icon: icons[index] ?? item.icon,
    title: `${item.title} ${labels[index] ?? "Detail"}`,
    text: `${item.text} ${section.implementationPoints[index] ?? section.implementationText}`,
    tag: index === 0 ? "Depth" : "Control",
  }));
}

function ChapterInsightPanel({ section }: { section: SectionContent }) {
  return (
    <div className="grid gap-5 rounded-[28px] border border-[#d7e1f2] bg-[#f8fbff] p-6 lg:grid-cols-[1fr_1fr]">
      <div>
        <p className="text-xs font-black uppercase tracking-[0.16em] text-[#145cb7]">HNX Build Lens</p>
        <h2 className="mt-3 text-2xl font-black tracking-[-0.035em] text-[#0f214f]">{section.implementationTitle}</h2>
        <p className="mt-4 text-sm font-semibold leading-7 text-[#52627d]">{section.implementationText}</p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {section.visualRows.slice(0, 4).map((row, index) => (
          <div key={row} className="rounded-2xl border border-[#d7e1f2] bg-white p-4 shadow-[0_12px_26px_rgba(15,23,42,0.035)]">
            <p className="text-xs font-black uppercase tracking-[0.14em] text-[#145cb7]">Checkpoint {index + 1}</p>
            <p className="mt-2 text-sm font-black leading-6 text-[#0f214f]">{row}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionRenderer({ activeTab, onTabChange }: { activeTab: TabId; onTabChange: (tab: TabId) => void }) {
  const section = sections[activeTab];
  const activeLabel = knowledgeTabs.find((item) => item.id === activeTab)?.label ?? "Overview";
  const chapterCards = [...section.cards, ...buildDepthCards(section)];
  return (
    <ChapterShell activeLabel={activeLabel} title={section.title} intro={section.intro}>
      {activeTab === "overview" ? <PreviewWindow /> : null}
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">{chapterCards.map((item) => <KnowledgeCard key={item.title} item={item} />)}</div>
      <ChapterInsightPanel section={section} />
      {section.metrics ? <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">{section.metrics.map((metric) => <MetricCard key={metric.label} metric={metric} />)}</div> : null}
      <FlowVisual items={section.flow} />
      <SplitPanel title={section.implementationTitle} text={section.implementationText} points={section.implementationPoints} visual={<ImplementationMap title={section.visualTitle} rows={section.visualRows} />} />
      <SectionFooter activeTab={activeTab} onTabChange={onTabChange} />
    </ChapterShell>
  );
}

export default function AppAnalyticsImprovementsPage() {
  const [activeTab, setActiveTab] = useState<TabId>(() => {
    if (typeof window === "undefined") return "overview";
    return getTabFromHash(window.location.hash) ?? "overview";
  });
  const activeLabel = useMemo(() => knowledgeTabs.find((item) => item.id === activeTab)?.label ?? "Overview", [activeTab]);
  const handleTabChange = (tab: TabId) => {
    setActiveTab(tab);
    window.history.replaceState(null, "", `#${tab}`);
    scrollToKnowledge();
  };

  return (
    <main className="min-h-screen bg-[#f8fbff] text-[#0f214f]">
      <SolutionCategoryTabs category="mobile-apps" solutions={mobileAppSolutions} />
      <MobileTabs activeTab={activeTab} onTabChange={handleTabChange} />
      <div className="mx-auto flex max-w-[min(92vw,1440px)] pt-14">
        <SolutionSidebar<TabId>
          title={SIDEBAR_TITLE}
          subtitle={SIDEBAR_SUBTITLE}
          icon={Lucide.BarChart3}
          items={knowledgeTabs}
          activeTab={activeTab}
          onTabChange={handleTabChange}
          ctaTitle="Improve With Data"
          ctaText="Create analytics, funnels, retention reporting, crash monitoring, feedback loops, and roadmap decisions."
          ctaButtonText="Book Analytics Call"
          ctaHref="/contact"
        />
        <div id="knowledge-content" className="min-w-0 flex-1">
          <div className="mb-5 rounded-2xl border border-[#d7e1f2] bg-white px-4 py-3 shadow-[0_10px_24px_rgba(15,23,42,0.04)] lg:hidden">
            <p className="text-xs font-bold text-[#66728f]">{MODULE_NAME}</p>
            <p className="text-sm font-black text-[#0f214f]">{activeLabel}</p>
          </div>
          <SectionRenderer activeTab={activeTab} onTabChange={handleTabChange} />
        </div>
      </div>
    </main>
  );
}
