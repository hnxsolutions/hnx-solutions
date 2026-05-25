"use client";

import Link from "next/link";
import { useMemo, useState, type ReactNode } from "react";
import * as Lucide from "lucide-react";
import { SolutionCategoryTabs } from "@/components/solutions/shared/SolutionCategoryTabs";
import { SolutionSidebar } from "@/components/solutions/SolutionSidebar";
import type { SolutionPageData } from "@/data/solutions/types";

type LucideIcon = Lucide.LucideIcon;

const MODULE_NAME = "App Strategy";
const SIDEBAR_TITLE = "App Strategy";
const SIDEBAR_SUBTITLE = "Product Blueprint";

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
  { id: "app-idea-chaos", label: "App Idea Chaos", icon: Lucide.CircleAlert },
  { id: "user-journey-map", label: "User Journey Map", icon: Lucide.Workflow },
  { id: "feature-priority", label: "Feature Priority", icon: Lucide.ListChecks },
  { id: "app-architecture", label: "App Architecture", icon: Lucide.Network },
  { id: "mvp-roadmap", label: "MVP Roadmap", icon: Lucide.GitBranch },
  { id: "monetization-logic", label: "Monetization Logic", icon: Lucide.CreditCard },
  { id: "launch-planning", label: "Launch Planning", icon: Lucide.Rocket },
  { id: "growth-roadmap", label: "Growth Roadmap", icon: Lucide.TrendingUp },
  { id: "final-cta", label: "Final CTA", icon: Lucide.ArrowRight },
] as const;

type TabId = (typeof knowledgeTabs)[number]["id"];
type CardItem = { icon: LucideIcon; title: string; text: string; tag?: string };
type MetricItem = { label: string; value: string; note: string };
type FlowItem = { icon: LucideIcon; title: string; text: string };
type SectionContent = {
  title: string;
  intro: string;
  cards: CardItem[];
  metrics: MetricItem[];
  flow: FlowItem[];
  implementationTitle: string;
  implementationText: string;
  implementationPoints: string[];
  visualTitle: string;
  visualRows: string[];
};

const c = (icon: LucideIcon, title: string, text: string, tag?: string): CardItem => ({ icon, title, text, tag });
const m = (label: string, value: string, note: string): MetricItem => ({ label, value, note });
const f = (icon: LucideIcon, title: string, text: string): FlowItem => ({ icon, title, text });

const sections: Record<TabId, SectionContent> = {
  overview: {
    title: "Turn an app idea into a build-ready product blueprint.",
    intro:
      "A mobile app strategy should convert rough ideas into a clear product plan: target users, use cases, customer journeys, MVP scope, architecture, admin needs, monetization, launch plan, analytics, and growth roadmap. HNX helps teams understand what to build first, what to delay, what the business model requires, and how the app should improve after launch.",
    cards: [
      c(Lucide.Target, "Business Goal", "Clarify whether the app should increase bookings, orders, retention, support quality, membership value, field productivity, or recurring revenue.", "Goal"),
      c(Lucide.Users, "Target Users", "Define customers, admins, staff, vendors, delivery teams, partners, or managers so each user type has a real journey.", "Users"),
      c(Lucide.Workflow, "Journey Blueprint", "Map onboarding, home screen, core action, payment, notifications, support, admin handoff, and return visits.", "Journey"),
      c(Lucide.ListChecks, "MVP Feature Priority", "Separate must-have launch features from later improvements so budget and timeline stay controlled.", "Scope"),
      c(Lucide.Network, "System Architecture", "Plan app, API, database, admin dashboard, analytics, notifications, payments, and store release requirements together.", "Architecture"),
      c(Lucide.BarChart3, "Growth Measurement", "Define events, funnels, retention metrics, crash monitoring, feedback loops, and version roadmap before development starts.", "Growth"),
    ],
    metrics: [
      m("MVP clarity", "High", "Launch scope is separated from future roadmap."),
      m("Core flows", "8-12", "Customer, admin, payment, support, and notification journeys mapped."),
      m("Risk reduction", "Early", "Architecture, compliance, and operational issues surface before build."),
      m("Roadmap", "3 phases", "MVP, V1.1, and growth releases are planned."),
    ],
    flow: [
      f(Lucide.SearchCheck, "Discover", "Understand users, business goals, operations, competitors, and current friction."),
      f(Lucide.Workflow, "Map journeys", "Turn use cases into screens, actions, states, and admin handoffs."),
      f(Lucide.ListChecks, "Prioritize MVP", "Rank features by value, risk, effort, dependency, and launch need."),
      f(Lucide.Rocket, "Plan launch", "Prepare build sequence, store readiness, analytics, support, and update roadmap."),
    ],
    implementationTitle: "Strategy makes development safer and more useful.",
    implementationText:
      "The goal is to avoid building a beautiful app that lacks business logic. HNX creates a practical product blueprint so design, development, launch, and growth decisions have a shared foundation.",
    implementationPoints: [
      "Define the app's main business outcome before listing features.",
      "Map customer and admin journeys together so operations can actually run the app.",
      "Prioritize launch scope around value, effort, dependency, and risk.",
      "Plan analytics and store launch before the product reaches development handoff.",
    ],
    visualTitle: "App strategy blueprint",
    visualRows: ["Business objective", "Target users and use cases", "Journey and screen map", "MVP and architecture", "Launch and growth roadmap"],
  },
  "app-idea-chaos": {
    title: "Most app ideas start as a feature pile, not a product system.",
    intro:
      "Founders and teams often begin with a long list of screens, competitor references, and desired features. Without strategy, the app can become expensive, hard to launch, disconnected from operations, and difficult to measure. HNX turns idea chaos into structured product decisions.",
    cards: [
      c(Lucide.CircleAlert, "Unclear App Purpose", "The team wants an app but has not defined the exact business outcome, customer behavior, or operational problem it must solve.", "Risk"),
      c(Lucide.Users, "Mixed User Needs", "Customer, admin, staff, and owner requirements get blended together, creating screens that do not serve anyone clearly.", "Users"),
      c(Lucide.Layers3, "Feature Overload", "Too many launch features increase cost, delay release, and hide the simple action users need most.", "Scope"),
      c(Lucide.LayoutDashboard, "Missing Admin Layer", "The customer app may look useful, but the business has no clear dashboard to manage records, statuses, content, payments, or reports.", "Operations"),
      c(Lucide.CreditCard, "Unclear Revenue Model", "Payments, subscriptions, commissions, membership, lead generation, retention, or operational savings are not modeled early.", "Money"),
      c(Lucide.BarChart3, "No Success Metrics", "The team cannot judge launch quality if events, funnels, retention, crashes, and feedback are not planned.", "Data"),
    ],
    metrics: [
      m("Feature requests", "Unranked", "Ideas need priority before design starts."),
      m("Admin risk", "High", "Operations fail when dashboard needs are delayed."),
      m("Budget clarity", "Weak", "Scope can expand without a phased roadmap."),
      m("Launch evidence", "Missing", "Analytics must be planned before release."),
    ],
    flow: [
      f(Lucide.MessageCircle, "Idea discussion", "Stakeholders describe features, competitors, and desired screens."),
      f(Lucide.SearchCheck, "Problem sorting", "HNX separates business problems, user needs, and operational requirements."),
      f(Lucide.ListChecks, "Decision framework", "Features are scored and grouped by launch value and dependency."),
      f(Lucide.FileText, "Blueprint output", "The app becomes a scoped plan, not an open-ended wish list."),
    ],
    implementationTitle: "Chaos becomes useful when every idea is forced to answer a question.",
    implementationText:
      "Who uses it, what action does it support, what business outcome does it create, what admin process does it trigger, and how will we know it worked?",
    implementationPoints: [
      "Convert feature ideas into user stories and business outcomes.",
      "Separate launch-critical flows from nice-to-have screens.",
      "Identify operational gaps before app development starts.",
      "Use scoring to prevent the loudest idea from becoming the roadmap.",
    ],
    visualTitle: "Idea cleanup board",
    visualRows: ["Raw feature list", "User and role sorting", "Business outcome mapping", "Risk and dependency scoring", "Build-ready scope"],
  },
  "user-journey-map": {
    title: "The user journey map shows how people move through the app.",
    intro:
      "A mobile app is a sequence of decisions, states, and outcomes. HNX maps the journey from first open to repeat use: onboarding, permissions, home screen, primary action, payment or confirmation, support, notifications, admin response, and future return visits.",
    cards: [
      c(Lucide.UserCheck, "Onboarding Path", "Plan signup, login, OTP, profile details, permissions, trust copy, and first action without unnecessary friction.", "Start"),
      c(Lucide.Home, "Home Screen Role", "Define what the user should see after login: current status, next action, shortcuts, offers, support, or account context.", "Home"),
      c(Lucide.MousePointerClick, "Primary Action", "Map the main journey such as book, order, request, pay, subscribe, upload, track, or complete a staff task.", "Core"),
      c(Lucide.CreditCard, "Money / Confirmation", "Design price, payment, receipt, refund, cancellation, invoice, and confirmation states where revenue is involved.", "Commerce"),
      c(Lucide.Headphones, "Support and Recovery", "Add help routes, ticket states, failed action recovery, fallback messaging, and admin escalation paths.", "Support"),
      c(Lucide.Bell, "Return Journey", "Use reminders, status updates, saved actions, history, loyalty, and lifecycle messages to bring users back with value.", "Retention"),
    ],
    metrics: [
      m("Critical flows", "Mapped", "The app's highest-value journeys are documented."),
      m("States", "Complete", "Loading, empty, error, success, retry, and blocked states are included."),
      m("Admin handoff", "Visible", "User actions connect to owner and status."),
      m("Analytics", "Step-based", "Every major journey can become a funnel."),
    ],
    flow: [
      f(Lucide.Smartphone, "First open", "The user understands the app's value and access path."),
      f(Lucide.Home, "Current context", "The home screen shows what matters now."),
      f(Lucide.CheckCircle2, "Core completion", "The user completes the app's primary business action."),
      f(Lucide.RefreshCw, "Repeat cycle", "History, notifications, and saved preferences make returning easier."),
    ],
    implementationTitle: "Journey mapping prevents missing screens and missing states.",
    implementationText:
      "The map should include ideal journeys and uncomfortable edge cases: expired sessions, no data, no availability, failed payment, denied permissions, duplicate submissions, and support escalation.",
    implementationPoints: [
      "Document each role's path from first entry to completed outcome.",
      "Include system states, not only happy-path screens.",
      "Define which app events should create admin records or notifications.",
      "Turn journey steps into analytics funnels for launch review.",
    ],
    visualTitle: "User journey architecture",
    visualRows: ["First open and trust", "Home context", "Primary action path", "Support and recovery", "Repeat and retention loop"],
  },
  "feature-priority": {
    title: "Feature priority decides what belongs in MVP and what can wait.",
    intro:
      "A strategy phase protects the product from trying to launch everything at once. HNX scores features by user value, revenue value, operational need, technical dependency, compliance risk, support impact, and effort so the MVP can ship with confidence.",
    cards: [
      c(Lucide.Flame, "Must-have Features", "Core user actions, authentication, admin handoff, and launch-critical states that the app cannot work without.", "MVP"),
      c(Lucide.Star, "Differentiators", "Features that make the product feel special but should still be tested against effort and launch value.", "Value"),
      c(Lucide.Clock3, "Later Releases", "Useful ideas that can wait for V1.1 or V1.2 after real user behavior validates the need.", "Roadmap"),
      c(Lucide.Network, "Dependencies", "Features relying on payments, APIs, admin tools, store permissions, location, maps, or third-party services need sequencing.", "Dependency"),
      c(Lucide.ShieldCheck, "Risk Items", "Compliance, privacy, permissions, refunds, subscriptions, data security, and moderation require early attention.", "Risk"),
      c(Lucide.BarChart3, "Measurement Needs", "Each priority should connect to an analytics event or business metric so success can be reviewed.", "Data"),
    ],
    metrics: [
      m("MVP scope", "Lean", "Launch contains only what proves the core journey."),
      m("Backlog", "Scored", "Future features are ranked rather than forgotten."),
      m("Dependencies", "Sequenced", "Build order follows technical and business reality."),
      m("Effort", "Visible", "Complexity is discussed before promises are made."),
    ],
    flow: [
      f(Lucide.ListChecks, "Collect features", "Gather all business, user, admin, and growth ideas."),
      f(Lucide.Target, "Score value", "Rank features by customer outcome and business impact."),
      f(Lucide.Network, "Map dependencies", "Identify technical and operational prerequisites."),
      f(Lucide.GitBranch, "Phase roadmap", "Move features into MVP, V1.1, V1.2, and later bets."),
    ],
    implementationTitle: "Priority is a product decision, not a spreadsheet exercise.",
    implementationText:
      "The right MVP should feel complete for the core use case even if many future features are intentionally delayed.",
    implementationPoints: [
      "Score each feature against value, effort, dependency, and risk.",
      "Protect the launch experience by not overloading the first version.",
      "Plan future releases so delayed features still have ownership.",
      "Use analytics after launch to validate or reject roadmap assumptions.",
    ],
    visualTitle: "MVP priority matrix",
    visualRows: ["Must launch", "High-value next", "Operational dependency", "Risk and compliance", "Later growth bet"],
  },
  "app-architecture": {
    title: "App architecture connects the mobile experience to the business system.",
    intro:
      "Strategy must define the system behind the screens. HNX maps mobile app structure, backend APIs, database records, admin dashboards, notifications, payments, analytics, file storage, roles, integrations, and release environments before build decisions become expensive.",
    cards: [
      c(Lucide.Smartphone, "Mobile Frontend", "Plan screens, navigation, offline states, device permissions, push token handling, and platform-specific requirements.", "App"),
      c(Lucide.ServerCog, "Backend/API Layer", "Define authentication, business logic, records, validation, payment callbacks, notifications, and admin sync.", "API"),
      c(Lucide.Database, "Data Model", "Structure users, profiles, bookings, orders, payments, tickets, content, events, and audit history.", "Data"),
      c(Lucide.LayoutDashboard, "Admin Dashboard", "Plan queues, statuses, role controls, reports, settings, content management, and exception handling.", "Admin"),
      c(Lucide.Bell, "Notification Layer", "Map push tokens, triggers, segments, templates, deep links, preferences, and delivery tracking.", "Push"),
      c(Lucide.BarChart3, "Analytics + Monitoring", "Add event tracking, funnels, crash monitoring, API health, and performance signals to the architecture.", "Insights"),
    ],
    metrics: [
      m("System layers", "Mapped", "App, backend, admin, data, push, and analytics are connected."),
      m("Roles", "Defined", "User and admin permissions are planned early."),
      m("Environments", "Separated", "Development, staging, and production stay controlled."),
      m("Integration risk", "Reduced", "External services are identified before build."),
    ],
    flow: [
      f(Lucide.Smartphone, "App screen", "The user performs a mobile action."),
      f(Lucide.Network, "API logic", "The backend validates and creates the business record."),
      f(Lucide.LayoutDashboard, "Admin control", "The team manages owner, status, exception, or response."),
      f(Lucide.BarChart3, "Analytics signal", "The event becomes part of funnel, revenue, or quality reporting."),
    ],
    implementationTitle: "Architecture should explain how the app will operate in real life.",
    implementationText:
      "Every important screen needs a backend record, a status model, permissions, notifications, analytics, and a support path where relevant.",
    implementationPoints: [
      "Map data records before designing admin dashboards.",
      "Define API contracts for each critical app action.",
      "Plan roles and permissions for internal and external users.",
      "Include monitoring, analytics, and release environments in the blueprint.",
    ],
    visualTitle: "Architecture layer map",
    visualRows: ["Mobile UI and device permissions", "API and business logic", "Database and audit history", "Admin dashboard and roles", "Notifications, analytics, and monitoring"],
  },
  "mvp-roadmap": {
    title: "The MVP roadmap turns strategy into a practical delivery sequence.",
    intro:
      "A mobile app roadmap should not be a vague timeline. HNX breaks the product into discovery, UX, design, architecture, MVP build, QA, store launch, analytics review, V1.1 fixes, and growth features so the business knows what happens when and why.",
    cards: [
      c(Lucide.SearchCheck, "Discovery Sprint", "Confirm user roles, business rules, app goals, competitor context, data needs, and operational workflows.", "Start"),
      c(Lucide.Palette, "UX + Prototype", "Create journey maps, wireframes, screen states, navigation, and prototype flows before full development.", "UX"),
      c(Lucide.Code2, "MVP Development", "Build the lean version with authentication, core action, admin connection, notifications, analytics, and launch-critical states.", "Build"),
      c(Lucide.CheckCircle2, "QA + UAT", "Test devices, permissions, payments, API failures, admin workflows, store review paths, and user acceptance scenarios.", "Quality"),
      c(Lucide.Store, "Store Launch", "Prepare signed builds, screenshots, privacy policy, release notes, test tracks, and submission support.", "Launch"),
      c(Lucide.GitBranch, "V1.1 Backlog", "Use launch evidence to prioritize friction fixes, missing states, support improvements, and first growth features.", "Improve"),
    ],
    metrics: [
      m("Roadmap phases", "Clear", "Strategy, prototype, build, launch, and improve are separated."),
      m("MVP features", "Ranked", "Scope is tied to launch outcome."),
      m("QA coverage", "Critical", "Store and real-user risks are planned."),
      m("V1.1", "Prepared", "First improvement release is not an afterthought."),
    ],
    flow: [
      f(Lucide.SearchCheck, "Discover", "Build the product brief and requirements."),
      f(Lucide.Palette, "Prototype", "Validate screens, states, and journeys."),
      f(Lucide.Code2, "Build MVP", "Develop the core app and admin-connected system."),
      f(Lucide.Rocket, "Launch + learn", "Release, monitor, fix, and improve."),
    ],
    implementationTitle: "The roadmap should make tradeoffs visible.",
    implementationText:
      "A roadmap helps clients understand why some features are included now, why some wait, and how the app can grow without rebuilding everything.",
    implementationPoints: [
      "Break the build into milestones with clear deliverables.",
      "Connect each milestone to user value and business control.",
      "Reserve time for testing, store review, and post-launch fixes.",
      "Maintain a backlog that is scored by impact and effort.",
    ],
    visualTitle: "MVP delivery roadmap",
    visualRows: ["Discovery and product brief", "UX prototype", "MVP build", "QA and store launch", "V1.1 improvement cycle"],
  },
  "monetization-logic": {
    title: "Monetization logic should be designed before checkout is built.",
    intro:
      "An app can make money directly through payments, subscriptions, commissions, bookings, orders, memberships, renewals, or indirectly through retention, support reduction, staff productivity, and lead conversion. HNX helps define the commercial model before screens become fixed.",
    cards: [
      c(Lucide.CreditCard, "Payment Model", "Full payment, advance, balance due, COD, invoice, wallet, refund, cancellation, and receipt flows need clear rules.", "Payments"),
      c(Lucide.Repeat, "Subscription / Membership", "Plans, renewals, trials, access limits, upgrades, downgrades, expiry, and payment failure states must be planned.", "Recurring"),
      c(Lucide.Store, "Order / Booking Revenue", "Catalog, service, add-on, slot, package, tax, delivery, coupon, and commission logic should match business operations.", "Commerce"),
      c(Lucide.Users, "Retention Value", "Saved actions, reminders, loyalty, referrals, and lifecycle nudges increase repeat usage without feeling spammy.", "Retention"),
      c(Lucide.LayoutDashboard, "Admin Finance View", "Paid, pending, failed, refunded, balance, settlement, and source-based revenue reporting belongs in admin planning.", "Control"),
      c(Lucide.BarChart3, "Unit Economics", "Acquisition cost, repeat rate, order value, refund rate, support cost, and conversion rate should be trackable.", "Metrics"),
    ],
    metrics: [
      m("Revenue paths", "Mapped", "Direct and indirect value sources are visible."),
      m("Payment states", "Defined", "Success, failure, refund, balance, and retry are planned."),
      m("Reports", "Finance-ready", "Admins can review money movement."),
      m("Retention value", "Measured", "Repeat actions connect to revenue or service value."),
    ],
    flow: [
      f(Lucide.Target, "Choose model", "Decide how the app creates commercial value."),
      f(Lucide.CreditCard, "Design money flow", "Plan pricing, payment, refund, and receipt states."),
      f(Lucide.LayoutDashboard, "Admin reconcile", "Connect revenue records to operations and reports."),
      f(Lucide.BarChart3, "Measure economics", "Track value, leakage, retention, and source quality."),
    ],
    implementationTitle: "Monetization should be understandable to customers and auditable for the business.",
    implementationText:
      "A payment or subscription flow that looks simple on the screen still needs strong backend states, admin controls, policy clarity, and analytics.",
    implementationPoints: [
      "Define what users pay for, when they pay, and what happens if payment fails.",
      "Plan refund, cancellation, renewal, and invoice logic before build.",
      "Connect all revenue states to admin and finance reporting.",
      "Use analytics to understand pricing, conversion, repeat behavior, and leakage.",
    ],
    visualTitle: "Monetization map",
    visualRows: ["Revenue model", "Pricing and payment state", "Refund/cancellation logic", "Admin finance reporting", "Retention and unit economics"],
  },
  "launch-planning": {
    title: "Launch planning prepares the app, team, stores, and support system.",
    intro:
      "A serious app launch includes more than a production build. HNX plans release readiness across QA, store listing, screenshots, privacy policy, permissions, test accounts, analytics, crash monitoring, support scripts, admin training, rollout, and first-update decisions.",
    cards: [
      c(Lucide.CheckCircle2, "Launch QA", "Test onboarding, permissions, core actions, payments, support, notifications, deep links, admin sync, and edge cases.", "QA"),
      c(Lucide.Store, "Store Readiness", "Prepare listing copy, screenshots, icon, category, privacy policy, data safety, release notes, and reviewer access.", "Store"),
      c(Lucide.ShieldCheck, "Compliance Review", "Check data collection, permissions, account deletion, payments, privacy, and platform-specific review rules.", "Compliance"),
      c(Lucide.LayoutDashboard, "Admin Training", "The team needs to manage users, content, requests, orders, payments, notifications, reports, and settings confidently.", "Handoff"),
      c(Lucide.Headphones, "Support Readiness", "Create launch support paths for login issues, failed payments, booking/order questions, refunds, and feedback.", "Support"),
      c(Lucide.Activity, "Monitoring Setup", "Crash reporting, analytics, performance traces, API health, support themes, and review monitoring should start immediately.", "Monitor"),
    ],
    metrics: [
      m("Critical tests", "20+", "Launch flows are checked before submission."),
      m("Store assets", "Complete", "Listing and review needs are ready."),
      m("Support paths", "Prepared", "Teams know how to handle first-user issues."),
      m("Monitoring", "Live", "Technical and product health can be reviewed."),
    ],
    flow: [
      f(Lucide.FileText, "Checklist", "Create launch readiness tasks and owners."),
      f(Lucide.CheckCircle2, "Validate", "Test app, admin, payments, notifications, and support."),
      f(Lucide.Store, "Submit", "Prepare builds and store review materials."),
      f(Lucide.Activity, "Watch", "Monitor launch data, crashes, feedback, and support issues."),
    ],
    implementationTitle: "Launch should be controlled, not improvised.",
    implementationText:
      "The first users will test the app, the business operations, and the support team at the same time. Launch planning makes that moment manageable.",
    implementationPoints: [
      "Assign owners for QA, store submission, support, monitoring, and admin handoff.",
      "Prepare test accounts and reviewer instructions before submission.",
      "Validate analytics and crash reporting in release builds.",
      "Create a launch review cadence for the first days and weeks.",
    ],
    visualTitle: "Launch readiness checklist",
    visualRows: ["Release build and QA", "Store listing and compliance", "Admin and support handoff", "Monitoring dashboard", "First update backlog"],
  },
  "growth-roadmap": {
    title: "Growth roadmap turns version 1.0 into a better product.",
    intro:
      "App strategy should not stop at launch. HNX plans the post-launch improvement system: analytics review, retention cohorts, crash fixes, user feedback, support themes, feature scoring, experiments, and version planning for V1.1, V1.2, and future scale.",
    cards: [
      c(Lucide.Activity, "Event Review", "Review onboarding, home usage, core actions, payments, notifications, support, and admin workflows.", "Events"),
      c(Lucide.Users, "Retention Cohorts", "Measure whether users return, repeat actions, respond to reminders, or become inactive after launch.", "Retention"),
      c(Lucide.Bug, "Quality Backlog", "Crashes, slow screens, API errors, payment failures, and device issues become prioritized fixes.", "Quality"),
      c(Lucide.MessageCircle, "Feedback Themes", "Store reviews, support tickets, surveys, and stakeholder notes are grouped by product area and severity.", "Feedback"),
      c(Lucide.Sparkles, "Growth Experiments", "Test onboarding prompts, notification timing, home screen priority, checkout copy, offers, and referral loops.", "Experiments"),
      c(Lucide.GitBranch, "Version Planning", "Build V1.1 and V1.2 around evidence, effort, risk, and business value instead of random requests.", "Roadmap"),
    ],
    metrics: [
      m("V1.1", "Stabilize", "Fix launch friction and quality issues."),
      m("V1.2", "Improve", "Add features validated by real usage."),
      m("Retention", "Tracked", "Cohorts show whether the app is useful over time."),
      m("Experiments", "Measured", "Growth ideas are evaluated with guardrails."),
    ],
    flow: [
      f(Lucide.BarChart3, "Measure", "Collect analytics, crash, feedback, and support signals."),
      f(Lucide.SearchCheck, "Diagnose", "Find the highest-impact problems and opportunities."),
      f(Lucide.ListChecks, "Prioritize", "Score fixes and features by value, severity, effort, and risk."),
      f(Lucide.Rocket, "Release again", "Ship focused updates and measure whether the metric improved."),
    ],
    implementationTitle: "Growth should be an operating loop, not a wish list.",
    implementationText:
      "The app gets stronger when each release has a reason, a metric, and a review point. HNX builds that rhythm into the strategy.",
    implementationPoints: [
      "Define the first post-launch review before launch day.",
      "Use funnels, cohorts, crashes, and feedback to score roadmap items.",
      "Separate urgent hotfixes from growth experiments and feature releases.",
      "Measure whether each version improves the intended user or business outcome.",
    ],
    visualTitle: "Post-launch growth loop",
    visualRows: ["Analytics and crash signals", "Feedback and support themes", "Backlog scoring", "V1.1 and V1.2 releases", "Experiment and retention review"],
  },
  "final-cta": {
    title: "Start your app with a blueprint before you spend on development.",
    intro:
      "HNX can help you convert an app idea into a product strategy with target users, journey map, MVP scope, architecture, admin plan, monetization logic, launch readiness, analytics, and a growth roadmap. The result is a smarter build with fewer late surprises.",
    cards: [
      c(Lucide.SearchCheck, "Idea Audit", "Clarify what the app should solve, who it serves, what outcome matters, and what risk should be addressed before build.", "Audit"),
      c(Lucide.Workflow, "Journey Blueprint", "Map onboarding, home, primary actions, payments, support, notifications, admin handoff, and return loops.", "Journey"),
      c(Lucide.ListChecks, "MVP Scope", "Rank features into launch, V1.1, V1.2, and later roadmap using value, effort, dependency, and risk.", "Scope"),
      c(Lucide.Network, "Architecture Plan", "Define app, API, database, admin dashboard, payments, push, analytics, and release environments.", "Architecture"),
      c(Lucide.CreditCard, "Business Model", "Plan direct revenue, indirect value, payment states, subscriptions, retention value, and finance reporting.", "Business"),
      c(Lucide.Rocket, "Launch + Growth", "Prepare store launch, monitoring, support, analytics review, and version roadmap before development starts.", "Growth"),
    ],
    metrics: [
      m("Strategy", "Build-ready", "The output can guide design and development."),
      m("Scope", "Phased", "MVP and growth roadmap are separated."),
      m("Operations", "Planned", "Admin and support workflows are not forgotten."),
      m("Measurement", "Defined", "Launch success can be reviewed from real data."),
    ],
    flow: [
      f(Lucide.SearchCheck, "Discover", "Understand the app idea, business model, users, and operations."),
      f(Lucide.Workflow, "Blueprint", "Map journeys, features, architecture, and admin controls."),
      f(Lucide.ListChecks, "Prioritize", "Create MVP and future roadmap phases."),
      f(Lucide.Rocket, "Handoff", "Prepare build, launch, analytics, and improvement direction."),
    ],
    implementationTitle: "A strategy sprint saves time, budget, and product confusion.",
    implementationText:
      "Before building screens, HNX helps the business see the full product system and decide the smartest path to launch.",
    implementationPoints: [
      "Get a clear product blueprint before development starts.",
      "Avoid building expensive features before validating the core journey.",
      "Plan the admin, analytics, and launch layers with the customer app.",
      "Move forward with a roadmap your team can actually execute.",
    ],
    visualTitle: "HNX app strategy deliverables",
    visualRows: ["Product strategy brief", "Journey and feature map", "Architecture and admin blueprint", "MVP and monetization plan", "Launch and growth roadmap"],
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
            <button
              key={item.id}
              type="button"
              onClick={() => onTabChange(item.id)}
              className={cx("flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-xs font-extrabold transition", isActive ? "border-[#9fc6e6] bg-[#eef6ff] text-[#145cb7]" : "border-[#d7e1f2] bg-white text-[#334766]")}
            >
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
        <p className="text-xs font-black text-[#66728f]">App Strategy Board</p>
      </div>
      <div className="grid gap-5 p-5 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[24px] bg-gradient-to-br from-[#0f214f] via-[#145cb7] to-[#19b7c5] p-6 text-white">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-100">Product Blueprint</p>
          <h3 className="mt-4 text-4xl font-black tracking-[-0.05em]">From rough idea to scoped launch roadmap.</h3>
          <p className="mt-4 text-sm font-semibold leading-7 text-blue-100">
            The blueprint connects user journeys, MVP scope, system architecture, admin control, monetization, launch readiness, and growth metrics.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {["User journey", "MVP scope", "Architecture", "Launch plan"].map((item) => (
              <p key={item} className="rounded-xl bg-white/12 px-4 py-3 text-xs font-black">{item}</p>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-3">
            {[["12", "MVP features"], ["8", "Core flows"], ["3", "Release phases"]].map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-[#d7e1f2] bg-[#f8fbff] p-4">
                <p className="text-2xl font-black text-[#145cb7]">{value}</p>
                <p className="mt-1 text-xs font-bold text-[#66728f]">{label}</p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-[#d7e1f2] bg-[#f8fbff] p-4">
            <p className="text-sm font-black text-[#0f214f]">Blueprint deliverables</p>
            <div className="mt-4 space-y-2">
              {["Target user map", "Feature priority matrix", "App/admin architecture", "Monetization plan", "Launch and growth roadmap"].map((item) => (
                <div key={item} className="flex items-center justify-between rounded-xl bg-white px-4 py-3">
                  <span className="text-xs font-black text-[#0f214f]">{item}</span>
                  <Lucide.CheckCircle2 className="h-4 w-4 text-emerald-600" />
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-[#bfd7ff] bg-[#eef6ff] px-4 py-3">
            <p className="text-sm font-black text-[#145cb7]">Outcome: clarity before design, build, launch, and growth spend</p>
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
          <p className="text-xl font-black">Ready to plan your app properly?</p>
          <p className="mt-2 text-sm font-semibold text-blue-100">Turn the idea into a scoped product blueprint before design, development, launch, or growth spend.</p>
        </div>
        <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-extrabold text-[#075edb]">
          Book App Strategy Call <Lucide.ArrowRight className="h-4 w-4" />
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
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {chapterCards.map((item) => <KnowledgeCard key={item.title} item={item} />)}
      </div>
      <ChapterInsightPanel section={section} />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {section.metrics.map((metric) => <MetricCard key={metric.label} metric={metric} />)}
      </div>
      <FlowVisual items={section.flow} />
      <SplitPanel title={section.implementationTitle} text={section.implementationText} points={section.implementationPoints} visual={<ImplementationMap title={section.visualTitle} rows={section.visualRows} />} />
      <SectionFooter activeTab={activeTab} onTabChange={onTabChange} />
    </ChapterShell>
  );
}

export default function AppStrategyPage() {
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
          icon={Lucide.Rocket}
          items={knowledgeTabs}
          activeTab={activeTab}
          onTabChange={handleTabChange}
          ctaTitle="Plan App Blueprint"
          ctaText="Create the users, scope, architecture, launch, and growth roadmap before development starts."
          ctaButtonText="Book Strategy Call"
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
