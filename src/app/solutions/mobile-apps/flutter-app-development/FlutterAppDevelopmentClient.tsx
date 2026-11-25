"use client";

import Link from "next/link";
import { useMemo, useState, type ReactNode } from "react";
import * as Lucide from "lucide-react";
import { SolutionCategoryTabs } from "@/components/solutions/shared/SolutionCategoryTabs";
import { SolutionSidebar } from "@/components/solutions/SolutionSidebar";
import type { SolutionPageData } from "@/data/solutions/types";

type LucideIcon = Lucide.LucideIcon;

const MODULE_NAME = "Flutter App Development";
const SIDEBAR_TITLE = "Flutter App";
const SIDEBAR_SUBTITLE = "Cross-platform Product Build";

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
  { id: "cross-platform-need", label: "Cross-platform Need", icon: Lucide.Smartphone },
  { id: "flutter-architecture", label: "Flutter Architecture", icon: Lucide.Code2 },
  { id: "ui-component-system", label: "UI Component System", icon: Lucide.Palette },
  { id: "state-management", label: "State Management", icon: Lucide.GitBranch },
  { id: "api-integration", label: "API Integration", icon: Lucide.Network },
  { id: "performance-quality", label: "Performance Quality", icon: Lucide.Gauge },
  { id: "testing-release", label: "Testing & Release", icon: Lucide.CheckCircle2 },
  { id: "scale-roadmap", label: "Scale Roadmap", icon: Lucide.TrendingUp },
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
  metrics?: MetricItem[];
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
    title: "Build one polished mobile product for iOS and Android.",
    intro:
      "Flutter is a cross-platform build system, but HNX treats it as a business speed and product quality decision. We plan architecture, components, state, APIs, performance, testing, release, and scaling so one codebase can support a consistent app experience.",
    cards: [
      c(Lucide.Smartphone, "One Product Experience", "Users on iOS and Android get the same brand, navigation, interaction quality, and release logic.", "Consistency"),
      c(Lucide.Code2, "Maintainable Codebase", "Reusable screens, widgets, state boundaries, and API services reduce duplicated work as the app grows.", "Engineering"),
      c(Lucide.Network, "Connected Backend", "Authentication, admin APIs, payments, notifications, files, and analytics are planned around real operations.", "Systems"),
      c(Lucide.Rocket, "Faster Rollout", "A single product roadmap can move through prototype, MVP, store release, and later updates with less coordination drag.", "Launch"),
    ],
    metrics: [
      m("Platforms", "2", "iOS and Android from one primary codebase."),
      m("UI system", "Reusable", "Components speed future screens and updates."),
      m("Release path", "Store-ready", "Builds, testing, and store steps planned early."),
      m("Events", "30+", "Analytics and crash signals prepared for launch."),
    ],
    flow: [
      f(Lucide.SearchCheck, "Scope", "Define product goals, screens, backend needs, and launch priorities."),
      f(Lucide.Palette, "Design", "Create reusable UI patterns and mobile interaction states."),
      f(Lucide.Code2, "Build", "Develop Flutter screens, state, services, and integrations."),
      f(Lucide.Rocket, "Release", "Test, package, submit, monitor, and improve."),
    ],
    implementationTitle: "Flutter should be chosen for business clarity, not only engineering preference.",
    implementationText:
      "The decision works best when the business wants faster dual-platform delivery, consistent UI, controlled maintenance, and a release process that stays manageable after launch.",
    implementationPoints: [
      "Define app scope and backend contracts before development starts.",
      "Create a reusable component system for screens, states, and forms.",
      "Connect analytics and crash monitoring during the MVP build.",
      "Plan store release and future update cadence from day one.",
    ],
    visualTitle: "Flutter delivery map",
    visualRows: ["Product scope", "Design system", "Architecture and state", "API and admin integration", "Testing and store release"],
  },
  "cross-platform-need": {
    title: "Cross-platform speed matters when the business needs consistency.",
    intro:
      "Separate native builds can increase cost, duplicate decisions, and slow down releases. Flutter helps teams move faster when the app experience, backend contracts, and release strategy are planned with discipline.",
    cards: [
      c(Lucide.Clock3, "Duplicate Build Effort", "Two native builds can double screens, bugs, QA notes, and release coordination.", "Cost"),
      c(Lucide.Palette, "Inconsistent UI", "Buttons, spacing, interactions, empty states, and forms can drift between platforms without a shared system.", "Brand"),
      c(Lucide.GitBranch, "Slower Updates", "Feature updates take longer when the same change must be implemented twice.", "Velocity"),
      c(Lucide.BarChart3, "Split Analytics", "Product decisions become weaker when event naming and funnel tracking differ by platform.", "Data"),
    ],
    metrics: [
      m("Release sync", "Higher", "One roadmap can ship consistently."),
      m("QA surface", "Controlled", "Common flows can be validated together."),
      m("Design drift", "Lower", "Shared widgets protect the UI system."),
      m("Roadmap speed", "Faster", "Features can reach both stores together."),
    ],
    flow: [
      f(Lucide.Users, "Shared users", "Customers expect the same app behavior on both platforms."),
      f(Lucide.Layers3, "Shared scope", "MVP features are prioritized once, not separately."),
      f(Lucide.Code2, "Shared build", "Flutter carries the UI and core logic through one structure."),
      f(Lucide.Rocket, "Shared release", "Updates are packaged and monitored together."),
    ],
    implementationTitle: "Cross-platform does not mean cutting quality.",
    implementationText:
      "A strong Flutter build still needs platform-aware permissions, store requirements, device QA, native integrations, and performance discipline.",
    implementationPoints: [
      "Use Flutter for shared product logic and UI consistency.",
      "Respect platform-specific permissions and store expectations.",
      "Create QA coverage for common and platform-specific behavior.",
      "Use one analytics vocabulary across both mobile platforms.",
    ],
    visualTitle: "Cross-platform decision board",
    visualRows: ["Business urgency", "Budget and maintenance", "UI consistency", "Native dependency needs", "Release and update rhythm"],
  },
  "flutter-architecture": {
    title: "Architecture keeps the app maintainable after the first release.",
    intro:
      "Flutter apps scale well when navigation, folders, services, state boundaries, API models, error handling, and environment configuration are planned before feature work becomes heavy.",
    cards: [
      c(Lucide.Layers3, "Feature Structure", "Separate screens, widgets, models, services, and state logic so teams can add modules without breaking old flows.", "Structure"),
      c(Lucide.Route, "Navigation System", "Auth gates, tab navigation, deep links, modals, and protected screens need a predictable routing plan.", "Routing"),
      c(Lucide.Database, "Data Models", "Booking, order, user, payment, notification, and support data should have typed models and clear transformations.", "Data"),
      c(Lucide.ShieldCheck, "Error Boundaries", "API failures, validation errors, expired sessions, and empty states need stable recovery patterns.", "Reliability"),
    ],
    metrics: [
      m("Modules", "Clear", "Features are easier to own and extend."),
      m("Environments", "Staged", "Dev, staging, and production stay separate."),
      m("Routing", "Planned", "Deep links and auth flows behave predictably."),
      m("Errors", "Handled", "Users are guided instead of stranded."),
    ],
    flow: [
      f(Lucide.FileText, "Define modules", "Name the product areas and data they own."),
      f(Lucide.GitBranch, "Set boundaries", "Separate presentation, state, services, and models."),
      f(Lucide.Network, "Connect services", "Standardize API clients, auth, storage, and notifications."),
      f(Lucide.Activity, "Monitor behavior", "Track errors, latency, and feature health."),
    ],
    implementationTitle: "Good architecture is a business asset.",
    implementationText:
      "It reduces rework, lowers onboarding time for future developers, and makes app updates safer when the business adds new services or workflows.",
    implementationPoints: [
      "Create module boundaries that match business domains.",
      "Keep API services and UI widgets separate.",
      "Use typed models for records exchanged with backend systems.",
      "Prepare environment configuration before production builds.",
    ],
    visualTitle: "Architecture layers",
    visualRows: ["Presentation widgets", "State and controllers", "Domain models", "API and local storage services", "Environment and release config"],
  },
  "ui-component-system": {
    title: "A Flutter UI system keeps screens fast, consistent, and premium.",
    intro:
      "A reusable component system helps the app feel intentional. Buttons, inputs, cards, lists, dialogs, status badges, empty states, and loading screens should be designed once and reused with care.",
    cards: [
      c(Lucide.Palette, "Design Tokens", "Colors, typography, spacing, radii, shadows, and states keep the app aligned with the brand.", "Brand"),
      c(Lucide.LayoutGrid, "Reusable Widgets", "Cards, forms, tiles, app bars, bottom sheets, and lists reduce repeated UI work.", "Components"),
      c(Lucide.Smartphone, "Responsive Screens", "Layouts should adapt across device sizes without breaking tap targets or text hierarchy.", "Mobile"),
      c(Lucide.CheckCircle2, "Stateful UI", "Loading, empty, disabled, success, failure, and retry states are designed as part of each flow.", "States"),
    ],
    metrics: [
      m("Core widgets", "20+", "Reusable UI pieces for common screens."),
      m("State variants", "6", "Loading, empty, success, failure, disabled, retry."),
      m("Screen speed", "Faster", "New modules reuse known building blocks."),
      m("Brand drift", "Lower", "Design decisions stay centralized."),
    ],
    flow: [
      f(Lucide.Palette, "Tokenize", "Define visual rules for the app identity."),
      f(Lucide.Layers3, "Componentize", "Create reusable widgets for repeated patterns."),
      f(Lucide.Smartphone, "Apply", "Build screens from the shared system."),
      f(Lucide.SearchCheck, "Review", "Check consistency, accessibility, and mobile fit."),
    ],
    implementationTitle: "The component system protects future product speed.",
    implementationText:
      "When the business asks for a new booking screen, payment state, or report view, the app should not need fresh UI invention every time.",
    implementationPoints: [
      "Design shared widgets before building every screen separately.",
      "Document component states so edge cases look professional.",
      "Use consistent spacing and typography across iOS and Android.",
      "Review components after real app content is added.",
    ],
    visualTitle: "Component library",
    visualRows: ["Buttons and inputs", "Status and alert badges", "Cards and lists", "Bottom sheets and dialogs", "Empty and error states"],
  },
  "state-management": {
    title: "State management should make app behavior predictable.",
    intro:
      "State management is not only a technical choice. It affects how smoothly users move through authentication, carts, bookings, payments, profile updates, offline states, and admin-connected workflows.",
    cards: [
      c(Lucide.UserCheck, "Session State", "Login, token refresh, user role, permissions, and profile context must stay stable.", "Auth"),
      c(Lucide.ShoppingCart, "Transactional State", "Cart, booking selections, payment attempt, and confirmation data should not disappear unexpectedly.", "Flow"),
      c(Lucide.Database, "Cached Data", "App content, profile details, catalog, and recent activity can be cached carefully for speed.", "Data"),
      c(Lucide.Activity, "Error Recovery", "State rules should support retry, rollback, refresh, and graceful failure.", "Reliability"),
    ],
    metrics: [
      m("State owners", "Defined", "Each module knows who owns data changes."),
      m("Retry paths", "Planned", "Network and payment errors have recovery logic."),
      m("Cache rules", "Clear", "Data freshness is controlled by business need."),
      m("Debug time", "Lower", "Predictable state reduces hidden bugs."),
    ],
    flow: [
      f(Lucide.MousePointerClick, "User acts", "The customer changes a selection, form, payment, or request."),
      f(Lucide.GitBranch, "State updates", "Local and remote state update through predictable rules."),
      f(Lucide.Network, "API confirms", "Backend response validates the business record."),
      f(Lucide.CheckCircle2, "UI resolves", "The app shows success, failure, retry, or next step."),
    ],
    implementationTitle: "Choose state patterns around product risk.",
    implementationText:
      "A simple informational app and a payment-heavy booking app do not need the same state strategy. HNX chooses patterns around complexity, team maintainability, and failure impact.",
    implementationPoints: [
      "Separate temporary form state from confirmed backend records.",
      "Persist critical in-progress actions only where it helps users.",
      "Handle expired sessions and failed requests without data loss.",
      "Track state-related funnel drop-offs in analytics.",
    ],
    visualTitle: "State control map",
    visualRows: ["Authentication state", "Form and selection state", "Remote API state", "Cached content state", "Error and retry state"],
  },
  "api-integration": {
    title: "Flutter apps become business systems when APIs are planned properly.",
    intro:
      "The app needs clean API integration for login, content, bookings, orders, payments, notifications, files, admin updates, analytics, and support. A polished UI cannot compensate for weak backend contracts.",
    cards: [
      c(Lucide.KeyRound, "Authentication APIs", "Secure login, refresh tokens, account recovery, roles, and profile endpoints keep access reliable.", "Auth"),
      c(Lucide.CreditCard, "Payment APIs", "Payment creation, confirmation, failure, refund, and receipt flows need exact app states.", "Payments"),
      c(Lucide.LayoutDashboard, "Admin APIs", "App actions should update dashboard records, statuses, owners, and reports.", "Admin"),
      c(Lucide.Bell, "Notification APIs", "Tokens, segments, trigger events, preferences, and delivery status should connect with the app lifecycle.", "Push"),
    ],
    metrics: [
      m("Endpoints", "Mapped", "Every app action has a backend contract."),
      m("Auth", "Secure", "Session handling is planned before release."),
      m("Payments", "Auditable", "Attempts and receipts can be reconciled."),
      m("Admin sync", "Live", "Teams see customer actions quickly."),
    ],
    flow: [
      f(Lucide.FileText, "Contract", "Define request, response, errors, and permissions."),
      f(Lucide.Code2, "Integrate", "Build services, models, and UI states around the contract."),
      f(Lucide.CheckCircle2, "Validate", "Test success, failure, empty, and edge responses."),
      f(Lucide.BarChart3, "Monitor", "Track latency, errors, and conversion effects."),
    ],
    implementationTitle: "API work should be designed with admin operations in mind.",
    implementationText:
      "Every API response should support what the customer sees and what the business needs to manage behind the scenes.",
    implementationPoints: [
      "Document endpoint contracts before UI development depends on them.",
      "Design failure messages and retry logic for each critical API.",
      "Connect customer actions to admin status and reporting fields.",
      "Log important API events for diagnostics and analytics.",
    ],
    visualTitle: "API integration stack",
    visualRows: ["Auth and profile", "Content and catalog", "Booking/order/payment", "Admin status updates", "Notifications and analytics"],
  },
  "performance-quality": {
    title: "Performance quality is what makes the app feel native and trustworthy.",
    intro:
      "Flutter can feel smooth when screen weight, animations, images, API calls, list rendering, and background work are controlled. Quality is designed into the product, not added at the end.",
    cards: [
      c(Lucide.Gauge, "Startup Speed", "App launch, splash, session check, and initial data loading should feel quick and intentional.", "Speed"),
      c(Lucide.Activity, "Smooth Interaction", "Transitions, scrolling, lists, forms, and bottom sheets should avoid jank on common devices.", "UX"),
      c(Lucide.Image, "Asset Control", "Images, icons, fonts, and cached media need size and loading rules.", "Assets"),
      c(Lucide.Bug, "Crash Visibility", "Crash logs, non-fatal errors, and performance traces help teams fix issues after launch.", "Monitoring"),
    ],
    metrics: [
      m("Cold start", "Tracked", "Launch performance is measured on release builds."),
      m("Crash rate", "<1%", "Target baseline after production monitoring."),
      m("API latency", "Visible", "Slow services can be diagnosed."),
      m("Jank review", "Device QA", "Animations and lists checked on real devices."),
    ],
    flow: [
      f(Lucide.Gauge, "Measure", "Profile startup, screen load, list rendering, and API response."),
      f(Lucide.Image, "Optimize", "Compress assets and control expensive renders."),
      f(Lucide.Smartphone, "Device test", "Validate on realistic Android and iOS devices."),
      f(Lucide.Activity, "Monitor", "Use crash and performance signals after launch."),
    ],
    implementationTitle: "A fast app reduces support and increases confidence.",
    implementationText:
      "Users rarely describe performance as architecture, but they feel it immediately. Smooth app behavior directly affects trust and completion rates.",
    implementationPoints: [
      "Profile release builds, not only development builds.",
      "Keep heavy work away from the first screen when possible.",
      "Design loading states that explain what is happening.",
      "Monitor crashes, API latency, and slow screens after launch.",
    ],
    visualTitle: "Quality checklist",
    visualRows: ["Startup time", "Screen transition smoothness", "Image and asset weight", "API latency", "Crash and error monitoring"],
  },
  "testing-release": {
    title: "Testing and release should be part of the build plan from the start.",
    intro:
      "Flutter delivery includes device testing, permissions, test accounts, API environments, payment sandbox checks, push notification testing, store builds, release notes, and post-release monitoring.",
    cards: [
      c(Lucide.CheckCircle2, "Functional QA", "Test onboarding, login, profile, core actions, payments, support, notifications, and admin sync.", "QA"),
      c(Lucide.Smartphone, "Device Coverage", "Validate layout, keyboard, permissions, camera, location, and deep links on common devices.", "Devices"),
      c(Lucide.Store, "Store Builds", "Prepare Android and iOS production builds with signing, versioning, assets, and policies.", "Release"),
      c(Lucide.Activity, "Post-release Watch", "Monitor crash reports, user feedback, API errors, store review, and funnel drop-offs.", "Monitoring"),
    ],
    metrics: [
      m("QA flows", "20+", "Critical paths tested before store submission."),
      m("Builds", "Signed", "Android and iOS release builds prepared correctly."),
      m("Test tracks", "Ready", "Internal, closed, or TestFlight review supported."),
      m("Release notes", "Clear", "Users and reviewers understand what changed."),
    ],
    flow: [
      f(Lucide.FileText, "Checklist", "Create QA cases, accounts, data, and environment notes."),
      f(Lucide.CheckCircle2, "Test", "Validate device, API, payment, notification, and admin flows."),
      f(Lucide.Store, "Submit", "Package and upload release builds with store metadata."),
      f(Lucide.Activity, "Monitor", "Review crashes, feedback, and adoption after release."),
    ],
    implementationTitle: "Release discipline prevents store-day surprises.",
    implementationText:
      "A release-ready app needs more than a working debug build. The team needs signing, policies, assets, test paths, and monitoring before public users arrive.",
    implementationPoints: [
      "Keep staging and production API environments separate.",
      "Test payment, push, deep link, and permission flows in release mode.",
      "Prepare screenshots, icons, privacy links, and release notes early.",
      "Assign ownership for post-launch crash and support review.",
    ],
    visualTitle: "Release pipeline",
    visualRows: ["QA checklist", "Release build signing", "Internal testing track", "Store submission", "Monitoring and hotfix plan"],
  },
  "scale-roadmap": {
    title: "A Flutter app should be ready for version 1.1, 1.2, and beyond.",
    intro:
      "The first release should not trap the business. HNX plans a scale roadmap for new modules, admin controls, analytics improvements, performance work, localization, integrations, and user feedback.",
    cards: [
      c(Lucide.Layers3, "Module Expansion", "Add bookings, orders, loyalty, wallet, support, memberships, or content without rebuilding the core.", "Features"),
      c(Lucide.LayoutDashboard, "Admin Controls", "More settings can move into dashboards so the business depends less on developers for daily changes.", "Operations"),
      c(Lucide.BarChart3, "Analytics Roadmap", "Event data guides which screens, funnels, and features deserve iteration.", "Insights"),
      c(Lucide.TrendingUp, "Growth Experiments", "Test onboarding prompts, saved actions, notifications, offers, and referral loops responsibly.", "Growth"),
    ],
    metrics: [
      m("V1.1", "Planned", "First improvement release informed by launch data."),
      m("Backlog", "Prioritized", "Features ranked by value and effort."),
      m("Admin control", "Growing", "More daily changes handled without app rebuilds."),
      m("Experiments", "Measured", "Growth ideas tied to real funnels."),
    ],
    flow: [
      f(Lucide.Activity, "Review usage", "See what users do after launch."),
      f(Lucide.SearchCheck, "Prioritize", "Rank problems, requests, and business opportunities."),
      f(Lucide.Code2, "Ship update", "Release new features, fixes, and refinements."),
      f(Lucide.BarChart3, "Measure again", "Compare adoption, retention, and revenue signals."),
    ],
    implementationTitle: "Scaling starts with a clean first architecture.",
    implementationText:
      "The app can grow faster when the MVP has clear modules, analytics, release discipline, and admin-operational thinking from the start.",
    implementationPoints: [
      "Keep the MVP narrow but architected for future modules.",
      "Use analytics to choose improvements instead of guessing.",
      "Move configurable content and rules into admin controls where useful.",
      "Plan regular release windows for fixes and feature growth.",
    ],
    visualTitle: "Scale roadmap",
    visualRows: ["MVP launch", "V1.1 funnel fixes", "V1.2 feature expansion", "Admin control improvements", "Growth experiments and retention loops"],
  },
  "final-cta": {
    title: "Build a Flutter app that is fast to launch and strong enough to maintain.",
    intro:
      "HNX can design, develop, connect, test, release, and improve a Flutter app that supports real business workflows instead of just placing screens into a mobile shell.",
    cards: [
      c(Lucide.SearchCheck, "Product Scope", "Clarify users, actions, MVP, integrations, admin needs, and launch path.", "Strategy"),
      c(Lucide.Palette, "Mobile UI System", "Create reusable app components, states, and premium screen patterns.", "Design"),
      c(Lucide.Code2, "Flutter Development", "Build maintainable app modules with state, API, payments, notifications, and analytics.", "Build"),
      c(Lucide.Rocket, "Release Support", "Prepare QA, signed builds, store submission, monitoring, and version roadmap.", "Launch"),
    ],
    metrics: [
      m("Codebase", "One", "Shared mobile product across iOS and Android."),
      m("Architecture", "Clean", "Built for maintenance and future modules."),
      m("Integrations", "Connected", "APIs, admin, payments, push, and analytics."),
      m("Launch", "Ready", "Release path and monitoring planned."),
    ],
    flow: [
      f(Lucide.SearchCheck, "Plan", "Define scope, flows, architecture, and data contracts."),
      f(Lucide.Palette, "Design", "Create reusable UI and mobile states."),
      f(Lucide.Code2, "Develop", "Build Flutter screens, services, state, and integrations."),
      f(Lucide.Rocket, "Launch", "Test, submit, monitor, and improve."),
    ],
    implementationTitle: "The right Flutter app is a product system.",
    implementationText:
      "It combines business workflow, mobile UX, maintainable engineering, backend integration, release readiness, and analytics into one launchable product.",
    implementationPoints: [
      "Start with product goals and business workflows.",
      "Design components before building every screen independently.",
      "Treat API, admin, and analytics as launch-critical work.",
      "Plan updates before the app reaches public users.",
    ],
    visualTitle: "HNX Flutter delivery",
    visualRows: ["Discovery and MVP scope", "UI system and prototype", "Flutter architecture", "API and admin connection", "Testing, stores, and improvement roadmap"],
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
        <p className="text-xs font-black text-[#66728f]">Flutter Build Console</p>
      </div>
      <div className="grid gap-5 p-5 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[24px] bg-gradient-to-br from-[#0f214f] via-[#145cb7] to-[#19b7c5] p-6 text-white">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-100">Cross-platform App Build</p>
          <h3 className="mt-4 text-4xl font-black tracking-[-0.05em]">One codebase with product discipline.</h3>
          <p className="mt-4 text-sm font-semibold leading-7 text-blue-100">Flutter works best when UI, state, APIs, testing, release, and analytics are planned as one delivery system.</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {["Reusable widgets", "API services", "Release builds", "Crash insights"].map((item) => <p key={item} className="rounded-xl bg-white/12 px-4 py-3 text-xs font-black">{item}</p>)}
          </div>
        </div>
        <div className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-3">
            {[["2", "Platforms"], ["20+", "Widgets"], ["30+", "Events"]].map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-[#d7e1f2] bg-[#f8fbff] p-4">
                <p className="text-2xl font-black text-[#145cb7]">{value}</p>
                <p className="mt-1 text-xs font-bold text-[#66728f]">{label}</p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-[#d7e1f2] bg-[#f8fbff] p-4">
            <p className="text-sm font-black text-[#0f214f]">Build layers</p>
            <div className="mt-4 space-y-2">
              {["Navigation and auth", "Component library", "State and services", "API contracts", "Store release pipeline"].map((item) => (
                <div key={item} className="flex items-center justify-between rounded-xl bg-white px-4 py-3">
                  <span className="text-xs font-black text-[#0f214f]">{item}</span>
                  <Lucide.CheckCircle2 className="h-4 w-4 text-emerald-600" />
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-[#bfd7ff] bg-[#eef6ff] px-4 py-3">
            <p className="text-sm font-black text-[#145cb7]">Outcome: faster launch, consistent UX, maintainable updates</p>
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
          <p className="text-xl font-black">Ready to build your Flutter app?</p>
          <p className="mt-2 text-sm font-semibold text-blue-100">Plan the app, architecture, integrations, release, and update roadmap together.</p>
        </div>
        <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-extrabold text-[#075edb]">
          Book Flutter App Call <Lucide.ArrowRight className="h-4 w-4" />
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
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {chapterCards.map((item) => <KnowledgeCard key={item.title} item={item} />)}
      </div>
      <ChapterInsightPanel section={section} />
      {section.metrics ? (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {section.metrics.map((metric) => <MetricCard key={metric.label} metric={metric} />)}
        </div>
      ) : null}
      <FlowVisual items={section.flow} />
      <SplitPanel title={section.implementationTitle} text={section.implementationText} points={section.implementationPoints} visual={<ImplementationMap title={section.visualTitle} rows={section.visualRows} />} />
      <SectionFooter activeTab={activeTab} onTabChange={onTabChange} />
    </ChapterShell>
  );
}

export default function FlutterAppDevelopmentClient() {
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
          icon={Lucide.Smartphone}
          items={knowledgeTabs}
          activeTab={activeTab}
          onTabChange={handleTabChange}
          ctaTitle="Build Flutter App"
          ctaText="Create a consistent cross-platform mobile product with architecture, APIs, release, and analytics."
          ctaButtonText="Book Flutter Call"
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
