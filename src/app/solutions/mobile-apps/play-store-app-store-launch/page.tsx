"use client";

import Link from "next/link";
import { useMemo, useState, type ReactNode } from "react";
import * as Lucide from "lucide-react";
import { SolutionCategoryTabs } from "@/components/solutions/shared/SolutionCategoryTabs";
import { SolutionSidebar } from "@/components/solutions/SolutionSidebar";
import type { SolutionPageData } from "@/data/solutions/types";

type LucideIcon = Lucide.LucideIcon;

const MODULE_NAME = "Play Store / App Store Launch";
const SIDEBAR_TITLE = "Store Launch";
const SIDEBAR_SUBTITLE = "Release Readiness";

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
  { id: "launch-readiness-gap", label: "Launch Readiness Gap", icon: Lucide.CircleAlert },
  { id: "store-listing-strategy", label: "Store Listing Strategy", icon: Lucide.FileText },
  { id: "screenshots-assets", label: "Screenshots & Assets", icon: Lucide.Image },
  { id: "app-review-compliance", label: "App Review Compliance", icon: Lucide.ShieldCheck },
  { id: "release-build", label: "Release Build", icon: Lucide.PackageCheck },
  { id: "testing-checklist", label: "Testing Checklist", icon: Lucide.CheckCircle2 },
  { id: "post-launch-monitoring", label: "Post-launch Monitoring", icon: Lucide.Activity },
  { id: "update-roadmap", label: "Update Roadmap", icon: Lucide.GitBranch },
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
    title: "Launch your app with the full release process handled.",
    intro:
      "Publishing an app is not just uploading a file. A real launch includes store listings, screenshots, icon assets, privacy policy, permissions, Android and iOS review, production builds, testing tracks, release notes, monitoring, feedback, and an update roadmap.",
    cards: [
      c(Lucide.FileText, "Store Listing", "Title, description, category, keywords, support contact, policy links, and release notes should explain the app clearly.", "Listing"),
      c(Lucide.Image, "Screenshots & Icon", "Store assets should show the actual app value, not generic mockups or unclear feature claims.", "Assets"),
      c(Lucide.ShieldCheck, "Review Compliance", "Permissions, data handling, login access, payments, privacy, and platform guidelines must be ready before submission.", "Compliance"),
      c(Lucide.Activity, "Launch Monitoring", "Crashes, reviews, installs, funnel issues, and support feedback should be watched from day one.", "Post-launch"),
    ],
    metrics: [
      m("Stores", "2", "Google Play and Apple App Store release paths."),
      m("Assets", "Complete", "Icon, screenshots, descriptions, and policy links."),
      m("Testing", "Ready", "Internal tracks, closed testing, or TestFlight prepared."),
      m("Rollout", "Controlled", "Versioning, release notes, and monitoring planned."),
    ],
    flow: [
      f(Lucide.SearchCheck, "Audit readiness", "Review app quality, policy needs, assets, accounts, and release blockers."),
      f(Lucide.FileText, "Prepare listing", "Create metadata, screenshots, icon, privacy policy, and support details."),
      f(Lucide.PackageCheck, "Submit build", "Package signed builds and upload to review tracks."),
      f(Lucide.Activity, "Monitor launch", "Watch review status, crashes, feedback, installs, and first update needs."),
    ],
    implementationTitle: "Launch readiness should be planned before the final week.",
    implementationText:
      "HNX treats store launch as a release process with checklists, ownership, compliance, testing, monitoring, and an update plan.",
    implementationPoints: [
      "Prepare app listing, visuals, privacy policy, and permissions early.",
      "Test production builds through internal or beta tracks.",
      "Create clear release notes and support paths for reviewers and users.",
      "Monitor early crashes, reviews, feedback, and funnel behavior after launch.",
    ],
    visualTitle: "Store launch map",
    visualRows: ["Listing strategy", "Screenshots and icon", "Compliance and privacy", "Release build and testing", "Monitoring and update roadmap"],
  },
  "launch-readiness-gap": {
    title: "The gap appears when teams treat launch as a final upload.",
    intro:
      "Apps are often delayed because privacy pages, permissions, test accounts, screenshots, signing, review notes, data safety forms, and production testing are handled too late.",
    cards: [
      c(Lucide.CircleAlert, "Missing Metadata", "Incomplete descriptions, categories, support links, privacy links, or review notes can delay approval.", "Listing"),
      c(Lucide.KeyRound, "No Test Access", "Review teams may need demo accounts, test credentials, or clear instructions for restricted app flows.", "Review"),
      c(Lucide.ShieldAlert, "Permission Risk", "Location, camera, notifications, contacts, payments, and background access need clear purpose and policy alignment.", "Policy"),
      c(Lucide.Bug, "Untested Release Build", "Debug success does not guarantee signed production builds, payment configs, push tokens, or deep links work.", "Quality"),
    ],
    metrics: [
      m("Review blockers", "Avoidable", "Most store delays come from missing details."),
      m("Policy readiness", "Required", "Privacy and data forms must match app behavior."),
      m("Build confidence", "Release-mode", "Production builds need their own QA pass."),
      m("Support path", "Visible", "Users and reviewers need contact and help information."),
    ],
    flow: [
      f(Lucide.FileText, "Requirements surface", "Stores ask for metadata, assets, policies, and access details."),
      f(Lucide.CircleAlert, "Gaps delay", "Missing or mismatched items cause review issues."),
      f(Lucide.CheckCircle2, "Checklist fixes", "Readiness is verified before submission."),
      f(Lucide.Rocket, "Launch proceeds", "Submission has fewer preventable blockers."),
    ],
    implementationTitle: "A readiness audit prevents avoidable delays.",
    implementationText:
      "The audit should compare app behavior, store forms, policy links, permissions, screenshots, and testing evidence before public submission.",
    implementationPoints: [
      "List every permission and explain its user-facing purpose.",
      "Confirm privacy policy and data safety details match the app.",
      "Prepare reviewer notes and demo accounts where required.",
      "Run QA on signed production builds before store upload.",
    ],
    visualTitle: "Readiness gap board",
    visualRows: ["Metadata missing", "Privacy/data mismatch", "No reviewer access", "Incomplete asset set", "Untested release build"],
  },
  "store-listing-strategy": {
    title: "The store listing should explain value before users install.",
    intro:
      "A good listing communicates what the app does, who it is for, why it is trustworthy, what actions it supports, and how users can get help. It also supports search and review clarity.",
    cards: [
      c(Lucide.Type, "Title & Subtitle", "The app name and short description should explain category, value, and brand without keyword stuffing.", "Copy"),
      c(Lucide.FileText, "Long Description", "Describe core flows, benefits, account needs, payments, support, privacy, and real use cases clearly.", "Detail"),
      c(Lucide.Tags, "Category & Keywords", "Choose category, tags, and search language around user intent and platform guidelines.", "Discovery"),
      c(Lucide.MessageCircle, "Support Details", "Support URL, contact email, website, FAQs, and policy links should be visible and reliable.", "Trust"),
    ],
    metrics: [
      m("Message", "Clear", "Users understand what they are installing."),
      m("Search", "Relevant", "Listing language aligns with real user demand."),
      m("Review clarity", "Higher", "Reviewers understand app purpose and access."),
      m("Support", "Ready", "Users know where to ask for help."),
    ],
    flow: [
      f(Lucide.SearchCheck, "Position", "Clarify app audience, category, and primary value."),
      f(Lucide.FileText, "Write", "Prepare title, short copy, long description, and release notes."),
      f(Lucide.ShieldCheck, "Verify", "Match listing claims with actual app behavior and policies."),
      f(Lucide.Store, "Publish", "Submit metadata with build and assets."),
    ],
    implementationTitle: "Listing copy should be accurate and conversion-minded.",
    implementationText:
      "The goal is to attract the right users and avoid review confusion by making the app purpose and data behavior clear.",
    implementationPoints: [
      "Write around user actions and outcomes, not internal feature names.",
      "Avoid unsupported claims or screenshots that do not match the app.",
      "Include support, privacy, and website links before submission.",
      "Prepare release notes that explain the first version clearly.",
    ],
    visualTitle: "Listing content map",
    visualRows: ["App name and subtitle", "Short description", "Long description", "Category and keywords", "Support and policy links"],
  },
  "screenshots-assets": {
    title: "Screenshots and assets should show the real app journey.",
    intro:
      "Store visuals need to help users understand the product quickly. Screenshots should reveal actual onboarding, home, primary action, admin-connected status, payments, support, and trust points where relevant.",
    cards: [
      c(Lucide.Image, "Screenshot Story", "Use screenshots to show the app journey in order: value, action, status, support, and trust.", "Narrative"),
      c(Lucide.AppWindow, "Real Interface", "Show true screens from the app rather than vague graphics that do not explain functionality.", "Authentic"),
      c(Lucide.BadgeCheck, "App Icon", "The icon should be clean, readable, brand-aligned, and valid for store requirements.", "Brand"),
      c(Lucide.Smartphone, "Device Fit", "Assets should be prepared for required phone sizes, platform ratios, and readable text.", "Format"),
    ],
    metrics: [
      m("Screenshots", "6-8", "Enough to explain the primary journey."),
      m("Icon", "Prepared", "Meets platform size and clarity requirements."),
      m("Readability", "Mobile-first", "Text remains legible in store preview."),
      m("Value", "Visible", "Users see what the app helps them do."),
    ],
    flow: [
      f(Lucide.SearchCheck, "Choose story", "Select the app journey that best explains value."),
      f(Lucide.Smartphone, "Capture screens", "Use polished, realistic app states."),
      f(Lucide.Image, "Design assets", "Add clear captions and brand-safe framing."),
      f(Lucide.CheckCircle2, "Validate sizes", "Export assets for required store formats."),
    ],
    implementationTitle: "Visual assets should reduce user uncertainty.",
    implementationText:
      "A user should understand the app's role from screenshots before reading the full description.",
    implementationPoints: [
      "Use real app screens with realistic data and clean states.",
      "Order screenshots around the main user journey.",
      "Keep caption text short and readable on mobile.",
      "Prepare separate Android and iOS sizes when required.",
    ],
    visualTitle: "Asset checklist",
    visualRows: ["App icon", "Feature or promo graphic", "Onboarding screenshot", "Primary action screenshot", "Status/support screenshot"],
  },
  "app-review-compliance": {
    title: "App review compliance should match how the app actually works.",
    intro:
      "Store review checks permissions, data collection, login, payments, user-generated content, sensitive categories, policies, and app stability. The safest path is accurate disclosure and clean implementation.",
    cards: [
      c(Lucide.ShieldCheck, "Privacy Policy", "The policy should explain data collection, purpose, account actions, contact, and deletion paths accurately.", "Privacy"),
      c(Lucide.KeyRound, "Reviewer Access", "If the app requires login, provide test accounts, demo instructions, and access notes.", "Review"),
      c(Lucide.LockKeyhole, "Permission Justification", "Camera, location, notifications, files, and background permissions should be tied to visible user value.", "Permissions"),
      c(Lucide.CreditCard, "Payment Rules", "In-app purchases, external payments, subscriptions, refunds, and digital goods must follow platform policies.", "Payments"),
    ],
    metrics: [
      m("Policy match", "Required", "Forms and app behavior must align."),
      m("Reviewer notes", "Clear", "Restricted flows can be tested."),
      m("Permissions", "Justified", "Users and reviewers see why access is needed."),
      m("Resubmission risk", "Lower", "Preventable review blockers are addressed early."),
    ],
    flow: [
      f(Lucide.SearchCheck, "Review app behavior", "List data, permissions, payments, login, and restricted flows."),
      f(Lucide.FileText, "Prepare disclosures", "Update privacy, data safety, and app review forms."),
      f(Lucide.KeyRound, "Provide access", "Create reviewer credentials and notes."),
      f(Lucide.ShieldCheck, "Submit confidently", "Build and listing are aligned with policies."),
    ],
    implementationTitle: "Compliance is a product responsibility.",
    implementationText:
      "Compliance should not be treated as paperwork after development. It must reflect the real data, permissions, and payment behavior inside the app.",
    implementationPoints: [
      "Audit app permissions against visible user features.",
      "Ensure privacy policy, data safety forms, and app behavior match.",
      "Provide test credentials and instructions for protected flows.",
      "Review payment and subscription rules before submission.",
    ],
    visualTitle: "Compliance review map",
    visualRows: ["Data collection", "Permission purpose", "Login/reviewer access", "Payment policy", "User support and deletion path"],
  },
  "release-build": {
    title: "The release build must be signed, configured, and tested properly.",
    intro:
      "Production builds require signing, versioning, environment variables, API endpoints, payment keys, push certificates, app icons, bundle IDs, package names, and release-mode QA.",
    cards: [
      c(Lucide.PackageCheck, "Signed Builds", "Android app bundles and iOS archives must use correct signing, identifiers, version codes, and certificates.", "Build"),
      c(Lucide.Settings, "Production Config", "API URLs, payment keys, push setup, analytics, maps, and environment variables must point to production systems.", "Config"),
      c(Lucide.GitBranch, "Versioning", "Version name, build number, release notes, and rollback awareness should be managed clearly.", "Version"),
      c(Lucide.CheckCircle2, "Release-mode QA", "Critical flows should be tested from the signed build, not only local debug mode.", "QA"),
    ],
    metrics: [
      m("Build type", "Release", "Production behavior is validated."),
      m("Signing", "Correct", "Store upload requirements are met."),
      m("Config", "Verified", "Production integrations are checked."),
      m("Version", "Controlled", "Updates can be tracked and submitted cleanly."),
    ],
    flow: [
      f(Lucide.Settings, "Configure", "Set production environment, keys, and app identifiers."),
      f(Lucide.PackageCheck, "Build", "Create signed Android and iOS release files."),
      f(Lucide.CheckCircle2, "Test", "Run critical flows from release builds."),
      f(Lucide.Store, "Upload", "Submit builds to store tracks for review."),
    ],
    implementationTitle: "Production configuration must be verified before upload.",
    implementationText:
      "Wrong endpoints, missing certificates, disabled push, or untested payment keys can break launch even when the app worked locally.",
    implementationPoints: [
      "Separate staging and production app configurations.",
      "Check signing, bundle IDs, package names, and version numbers.",
      "Validate payments, push, maps, auth, and analytics from release builds.",
      "Keep release artifacts and notes organized for future updates.",
    ],
    visualTitle: "Release build pipeline",
    visualRows: ["Production configuration", "Signing and versioning", "Android app bundle", "iOS archive", "Release QA and upload"],
  },
  "testing-checklist": {
    title: "Testing should cover the user journey and store-specific risks.",
    intro:
      "Launch testing includes onboarding, login, permissions, app flows, payments, notifications, deep links, support, offline states, devices, crash monitoring, and store review scenarios.",
    cards: [
      c(Lucide.UserCheck, "Account Flow", "Signup, login, OTP, password reset, logout, profile update, and account deletion should be tested.", "Access"),
      c(Lucide.MousePointerClick, "Critical Actions", "Booking, order, payment, request, support, profile, and notification flows need realistic data tests.", "Flows"),
      c(Lucide.Smartphone, "Device & OS QA", "Screen sizes, keyboards, permissions, deep links, and performance should be checked on common devices.", "Devices"),
      c(Lucide.Bug, "Failure States", "Network loss, payment failure, empty data, expired session, denied permission, and API errors need recovery states.", "Reliability"),
    ],
    metrics: [
      m("Critical cases", "20+", "Enough to cover main user and admin journeys."),
      m("Devices", "Representative", "Android and iOS behavior is validated."),
      m("Payments", "Sandbox/live", "Gateway states are checked carefully."),
      m("Crash tools", "Ready", "Issues can be diagnosed after release."),
    ],
    flow: [
      f(Lucide.FileText, "Checklist", "Prepare test cases and account data."),
      f(Lucide.Smartphone, "Device QA", "Run flows across relevant devices and OS versions."),
      f(Lucide.Bug, "Edge cases", "Validate failure, empty, and recovery states."),
      f(Lucide.CheckCircle2, "Sign off", "Launch-critical issues are resolved before submission."),
    ],
    implementationTitle: "Testing should include reviewer and real-user scenarios.",
    implementationText:
      "A store reviewer and a first customer both need a smooth path. Testing must cover the flows they will actually touch.",
    implementationPoints: [
      "Create test accounts for customer, admin, and reviewer access.",
      "Test all permission prompts and denied-permission fallbacks.",
      "Validate payment, push, deep link, and support flows.",
      "Document known limitations and first-update priorities.",
    ],
    visualTitle: "Launch QA checklist",
    visualRows: ["Account and onboarding", "Primary action flow", "Payment and receipt", "Notifications and deep links", "Failure and recovery states"],
  },
  "post-launch-monitoring": {
    title: "Post-launch monitoring catches issues while trust is still fresh.",
    intro:
      "The first days after release are critical. Monitor crashes, app store review status, installs, onboarding completion, payment errors, support tickets, ratings, reviews, and backend health.",
    cards: [
      c(Lucide.Activity, "Crash & Error Watch", "Crash reports, non-fatal errors, API failures, and slow screens need daily review after launch.", "Stability"),
      c(Lucide.Star, "Ratings & Reviews", "User feedback, public reviews, and support messages should feed the improvement backlog.", "Feedback"),
      c(Lucide.BarChart3, "Funnel Signals", "Installs, onboarding completion, first action, payment attempts, and retention show launch health.", "Analytics"),
      c(Lucide.Headphones, "Support Readiness", "Support team should know common issues, escalation paths, and how to respond to launch questions.", "Support"),
    ],
    metrics: [
      m("Crash rate", "Watched", "Early issues can be prioritized quickly."),
      m("Onboarding", "Measured", "Activation problems appear in data."),
      m("Reviews", "Reviewed", "Feedback informs roadmap and support."),
      m("Hotfix path", "Prepared", "Critical fixes can move quickly."),
    ],
    flow: [
      f(Lucide.Rocket, "Release", "App goes live or rolls out to users."),
      f(Lucide.Activity, "Monitor", "Technical and user signals are reviewed."),
      f(Lucide.SearchCheck, "Prioritize", "Critical crashes and blockers move first."),
      f(Lucide.GitBranch, "Update", "Fixes and improvements enter the next release."),
    ],
    implementationTitle: "Launch does not end when the app appears in the store.",
    implementationText:
      "The first release creates real evidence. HNX uses that evidence to stabilize, support, and improve the next version.",
    implementationPoints: [
      "Monitor crash, analytics, reviews, and support channels daily after launch.",
      "Create a triage process for critical, high, medium, and low issues.",
      "Respond to repeated user feedback with clear product decisions.",
      "Prepare a hotfix path for launch-critical defects.",
    ],
    visualTitle: "Launch monitoring loop",
    visualRows: ["Crash and error signals", "Install and activation funnel", "Ratings and reviews", "Support ticket themes", "Hotfix and V1.1 backlog"],
  },
  "update-roadmap": {
    title: "The update roadmap turns launch feedback into better versions.",
    intro:
      "Version 1.0 is only the start. The roadmap should organize bug fixes, UX improvements, store feedback, analytics insights, new features, performance work, and policy updates into version 1.1, 1.2, and beyond.",
    cards: [
      c(Lucide.GitBranch, "Version Planning", "Separate urgent hotfixes, first improvements, feature releases, and long-term roadmap items.", "Versions"),
      c(Lucide.BarChart3, "Analytics Inputs", "Use onboarding, funnel, retention, crash, payment, and support data to choose improvements.", "Data"),
      c(Lucide.MessageCircle, "User Feedback", "Ratings, reviews, support tickets, and stakeholder feedback should be grouped by theme.", "Voice"),
      c(Lucide.PackageCheck, "Repeat Release Process", "Each update still needs QA, release notes, store assets if needed, and post-release monitoring.", "Release"),
    ],
    metrics: [
      m("V1.1", "Stabilize", "Fix launch blockers and high-friction UX."),
      m("V1.2", "Improve", "Add prioritized features from evidence."),
      m("Reviews", "Grouped", "Feedback is categorized and owned."),
      m("Release cycle", "Repeatable", "Updates do not become chaotic."),
    ],
    flow: [
      f(Lucide.Activity, "Collect signals", "Crashes, reviews, analytics, and support reveal needs."),
      f(Lucide.ListChecks, "Prioritize", "Sort by severity, value, effort, and policy impact."),
      f(Lucide.Code2, "Build update", "Fix, improve, test, and prepare release notes."),
      f(Lucide.Store, "Release again", "Submit update and monitor results."),
    ],
    implementationTitle: "Updates should be planned as part of launch.",
    implementationText:
      "Clients often think app launch is the end. A professional launch includes the first improvement cycle and the operating rhythm for future releases.",
    implementationPoints: [
      "Create a version backlog before public launch.",
      "Prioritize fixes using severity, user impact, and business value.",
      "Prepare release notes that explain user-facing changes clearly.",
      "Keep store compliance and privacy details updated as features evolve.",
    ],
    visualTitle: "Update roadmap",
    visualRows: ["Launch feedback", "Hotfixes", "V1.1 UX and stability", "V1.2 feature growth", "Ongoing release rhythm"],
  },
  "final-cta": {
    title: "Launch your app with fewer store-day surprises.",
    intro:
      "HNX can help package, test, document, submit, monitor, and improve your app across Google Play and Apple App Store with a complete launch-readiness process.",
    cards: [
      c(Lucide.SearchCheck, "Launch Audit", "Review store accounts, app quality, permissions, metadata, policies, and release blockers.", "Audit"),
      c(Lucide.Image, "Listing & Assets", "Prepare descriptions, screenshots, icon, support links, privacy policy, and release notes.", "Assets"),
      c(Lucide.PackageCheck, "Build & Submit", "Create signed builds, test tracks, reviewer access, compliance forms, and submission support.", "Release"),
      c(Lucide.Activity, "Monitor & Update", "Watch crashes, reviews, feedback, funnel data, and prepare the first improvement release.", "Growth"),
    ],
    metrics: [
      m("Checklist", "Complete", "Launch readiness is visible."),
      m("Testing", "Release-mode", "Production behavior is checked."),
      m("Review", "Prepared", "Store reviewers get clear access and context."),
      m("Roadmap", "Active", "The first update is planned."),
    ],
    flow: [
      f(Lucide.SearchCheck, "Audit", "Find release gaps before submission."),
      f(Lucide.FileText, "Prepare", "Create listing, policy, assets, and review notes."),
      f(Lucide.Store, "Submit", "Upload builds and respond to review needs."),
      f(Lucide.Activity, "Monitor", "Track stability, reviews, and first improvements."),
    ],
    implementationTitle: "Treat store launch like a release system.",
    implementationText:
      "Uploading is one step. The real work is making the app, listing, policies, testing, review, and post-launch support ready together.",
    implementationPoints: [
      "Prepare metadata, assets, privacy, and reviewer details before final build.",
      "Test signed builds across real launch-critical flows.",
      "Monitor store review and respond to issues quickly.",
      "Use launch data to guide V1.1 and future updates.",
    ],
    visualTitle: "HNX store launch delivery",
    visualRows: ["Readiness audit", "Listing and asset creation", "Compliance and reviewer access", "Build submission", "Monitoring and update roadmap"],
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
        <p className="text-xs font-black text-[#66728f]">Store Launch Tracker</p>
      </div>
      <div className="grid gap-5 p-5 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[24px] bg-gradient-to-br from-[#0f214f] via-[#145cb7] to-[#19b7c5] p-6 text-white">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-100">Release readiness</p>
          <h3 className="mt-4 text-4xl font-black tracking-[-0.05em]">Listing, build, review, and rollout in one checklist.</h3>
          <p className="mt-4 text-sm font-semibold leading-7 text-blue-100">Prepare what stores, reviewers, users, and support teams need before public launch.</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {["Metadata", "Assets", "Compliance", "Monitoring"].map((item) => <p key={item} className="rounded-xl bg-white/12 px-4 py-3 text-xs font-black">{item}</p>)}
          </div>
        </div>
        <div className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-3">
            {[["94%", "Checklist"], ["120", "Beta users"], ["3", "Review items"]].map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-[#d7e1f2] bg-[#f8fbff] p-4">
                <p className="text-2xl font-black text-[#145cb7]">{value}</p>
                <p className="mt-1 text-xs font-bold text-[#66728f]">{label}</p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-[#d7e1f2] bg-[#f8fbff] p-4">
            <p className="text-sm font-black text-[#0f214f]">Launch checklist</p>
            <div className="mt-4 space-y-2">
              {["Privacy policy linked", "Screenshots approved", "Release build signed", "Reviewer account ready", "Monitoring dashboard active"].map((item) => (
                <div key={item} className="flex items-center justify-between rounded-xl bg-white px-4 py-3">
                  <span className="text-xs font-black text-[#0f214f]">{item}</span>
                  <Lucide.CheckCircle2 className="h-4 w-4 text-emerald-600" />
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-[#bfd7ff] bg-[#eef6ff] px-4 py-3">
            <p className="text-sm font-black text-[#145cb7]">Outcome: cleaner submission, safer rollout, clearer updates</p>
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
          <p className="text-xl font-black">Ready for a proper app store launch?</p>
          <p className="mt-2 text-sm font-semibold text-blue-100">Prepare listing, assets, compliance, builds, testing, monitoring, and updates together.</p>
        </div>
        <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-extrabold text-[#075edb]">
          Book Launch Call <Lucide.ArrowRight className="h-4 w-4" />
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

export default function PlayStoreAppStoreLaunchPage() {
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
          icon={Lucide.Store}
          items={knowledgeTabs}
          activeTab={activeTab}
          onTabChange={handleTabChange}
          ctaTitle="Launch App Properly"
          ctaText="Prepare store listing, screenshots, compliance, builds, testing, monitoring, and update roadmap."
          ctaButtonText="Book Launch Call"
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
