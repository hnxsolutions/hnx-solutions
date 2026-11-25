"use client";

import Link from "next/link";
import { useMemo, useState, type ReactNode } from "react";
import * as Lucide from "lucide-react";
import { SolutionCategoryTabs } from "@/components/solutions/shared/SolutionCategoryTabs";
import { SolutionSidebar } from "@/components/solutions/SolutionSidebar";
import type { SolutionPageData } from "@/data/solutions/types";

type LucideIcon = Lucide.LucideIcon;

const MODULE_NAME = "Push Notifications";
const SIDEBAR_TITLE = "Push System";
const SIDEBAR_SUBTITLE = "Retention + Operations";

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
  { id: "engagement-gap", label: "Engagement Gap", icon: Lucide.CircleAlert },
  { id: "notification-strategy", label: "Notification Strategy", icon: Lucide.Target },
  { id: "trigger-system", label: "Trigger System", icon: Lucide.Workflow },
  { id: "reminder-flows", label: "Reminder Flows", icon: Lucide.Clock3 },
  { id: "segmentation", label: "Segmentation", icon: Lucide.Users },
  { id: "deep-links", label: "Deep Links", icon: Lucide.Link },
  { id: "frequency-control", label: "Frequency Control", icon: Lucide.SlidersHorizontal },
  { id: "performance-tracking", label: "Performance Tracking", icon: Lucide.BarChart3 },
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
    title: "Use push notifications as a trust-first retention system.",
    intro:
      "Push notifications should not be treated as random alerts. HNX designs them as a structured system for confirmations, reminders, status updates, reactivation, segmentation, deep links, frequency control, preferences, and performance tracking.",
    cards: [
      c(Lucide.Bell, "Transactional Updates", "Booking, order, payment, support, delivery, approval, and account messages keep customers informed.", "Service"),
      c(Lucide.Clock3, "Timely Reminders", "Upcoming slots, renewals, abandoned actions, balances, and deadlines can be handled without manual chasing.", "Timing"),
      c(Lucide.Users, "Segmented Messages", "Different users receive messages based on behavior, lifecycle, preferences, and value.", "Relevance"),
      c(Lucide.BarChart3, "Measured Outcomes", "Delivery, opens, clicks, completed actions, opt-outs, and conversion impact are reviewed.", "Insights"),
    ],
    metrics: [
      m("Triggers", "Event-based", "Messages are connected to real app or admin actions."),
      m("Segments", "Behavioral", "Users are grouped by lifecycle and intent."),
      m("Deep links", "Direct", "Notifications open the exact screen or action."),
      m("Trust", "Protected", "Frequency, preference, and opt-out signals are respected."),
    ],
    flow: [
      f(Lucide.Activity, "Event happens", "A booking, order, payment, inactivity, or support state changes."),
      f(Lucide.Target, "Rule checks", "The system checks segment, timing, permission, and frequency."),
      f(Lucide.Bell, "Message sends", "The customer receives a useful notification with context."),
      f(Lucide.MousePointerClick, "Action completes", "Deep link routes the user to the next step."),
    ],
    implementationTitle: "Notifications should help users, not interrupt them.",
    implementationText:
      "A professional notification system balances business outcomes with user trust. The right message goes to the right customer at the right moment with a clear action.",
    implementationPoints: [
      "Separate transactional, reminder, lifecycle, and promotional notifications.",
      "Use behavior and preferences to decide who should receive each message.",
      "Deep link every actionable notification to the relevant screen.",
      "Review opt-outs, action rates, and conversion impact regularly.",
    ],
    visualTitle: "Notification operating map",
    visualRows: ["Event trigger", "Segment and permission check", "Template and timing rule", "Deep link destination", "Performance and trust review"],
  },
  "engagement-gap": {
    title: "Apps lose value when users forget why they installed them.",
    intro:
      "Without useful follow-up, customers miss appointments, abandon orders, forget renewals, delay payments, and stop returning. The solution is not louder messaging; it is relevant messaging with restraint.",
    cards: [
      c(Lucide.CircleAlert, "Forgotten Actions", "Users start bookings, orders, forms, carts, or renewals but do not always return without a helpful prompt.", "Drop-off"),
      c(Lucide.MessageCircle, "Manual Chasing", "Teams call or message customers manually for reminders, balances, confirmations, and status updates.", "Operations"),
      c(Lucide.Send, "Generic Blasts", "Same-message-to-everyone campaigns weaken trust and make users mute notifications.", "Risk"),
      c(Lucide.BarChart3, "No Signal Review", "Businesses send messages without knowing delivery, action, conversion, or opt-out impact.", "Blind Spot"),
    ],
    metrics: [
      m("Missed reminders", "Common", "Manual follow-up cannot scale reliably."),
      m("Relevance", "Variable", "Generic messages create weak engagement."),
      m("Opt-out risk", "Real", "Frequency and value must be managed."),
      m("Insight", "Needed", "Notification analytics guide better journeys."),
    ],
    flow: [
      f(Lucide.Activity, "User pauses", "A customer abandons, delays, or waits for status."),
      f(Lucide.Clock3, "Time passes", "The window for action becomes smaller."),
      f(Lucide.Bell, "Relevant reminder", "A trigger-based message provides context."),
      f(Lucide.CheckCircle2, "User completes", "The app receives the user back at the right screen."),
    ],
    implementationTitle: "The engagement gap should be solved with context.",
    implementationText:
      "HNX maps where users genuinely need reminders or updates, then designs triggers that support the journey instead of overwhelming it.",
    implementationPoints: [
      "Identify high-value moments where follow-up is useful.",
      "Remove generic pushes that do not lead to a clear user action.",
      "Track abandoned and completed actions by notification journey.",
      "Use preference controls to keep communication respectful.",
    ],
    visualTitle: "Engagement gap diagnosis",
    visualRows: ["Abandoned checkout", "Missed booking reminder", "Payment due", "Order status unknown", "Inactive user needs relevant reason to return"],
  },
  "notification-strategy": {
    title: "Notification strategy defines purpose before messages are written.",
    intro:
      "A strong strategy decides which messages are transactional, operational, lifecycle, promotional, or reactivation-based. It also defines timing, ownership, deep links, templates, and success metrics.",
    cards: [
      c(Lucide.FileText, "Message Taxonomy", "Classify confirmations, reminders, alerts, offers, reactivation, feedback, and support updates clearly.", "Structure"),
      c(Lucide.Target, "Business Objective", "Each message should support service quality, completion, retention, revenue, or customer clarity.", "Purpose"),
      c(Lucide.ShieldCheck, "User Trust Rules", "Set guardrails for tone, frequency, opt-outs, permissions, and sensitive topics.", "Trust"),
      c(Lucide.LayoutDashboard, "Admin Controls", "Templates, campaigns, triggers, segments, and performance should be manageable from an admin view where useful.", "Control"),
    ],
    metrics: [
      m("Categories", "Defined", "Teams know what type of message they are sending."),
      m("Tone", "Brand-safe", "Copy stays useful and professional."),
      m("Ownership", "Clear", "Product, operations, or marketing roles are defined."),
      m("Success", "Measurable", "Each journey has a target action or quality signal."),
    ],
    flow: [
      f(Lucide.SearchCheck, "Audit journeys", "Find points where messages reduce friction or improve retention."),
      f(Lucide.FileText, "Define templates", "Write message types, variables, timing, and links."),
      f(Lucide.Settings, "Set controls", "Configure frequency, role access, preferences, and approval needs."),
      f(Lucide.BarChart3, "Review results", "Measure outcome quality after release."),
    ],
    implementationTitle: "Strategy prevents notification clutter.",
    implementationText:
      "When messages have defined roles, the system stays professional and easier to maintain as the app grows.",
    implementationPoints: [
      "Build a notification taxonomy before campaign creation.",
      "Tie each message type to a lifecycle stage and business outcome.",
      "Create copy templates with variables and fallback language.",
      "Review messages for tone, permissions, timing, and compliance.",
    ],
    visualTitle: "Strategy blueprint",
    visualRows: ["Message category", "Audience and trigger", "Copy and variables", "Deep link and action", "Metric and owner"],
  },
  "trigger-system": {
    title: "Trigger systems make notifications reliable and relevant.",
    intro:
      "A trigger is the business event that decides when a notification should send. Triggers can come from app behavior, admin updates, payments, time rules, inventory, support status, or inactivity.",
    cards: [
      c(Lucide.Workflow, "Event Triggers", "Booking confirmed, order updated, ticket replied, payment failed, profile incomplete, or stock available can fire messages.", "Events"),
      c(Lucide.Clock3, "Time Triggers", "Reminders before appointments, renewal windows, payment due dates, and inactivity intervals use timing rules.", "Time"),
      c(Lucide.LayoutDashboard, "Admin Triggers", "Staff status changes, approvals, cancellations, refunds, and assignment changes can notify customers or teams.", "Admin"),
      c(Lucide.Database, "Data Conditions", "Segment, preference, language, location, lifecycle stage, and last activity should influence sending.", "Rules"),
    ],
    metrics: [
      m("Trigger source", "Mapped", "App, backend, admin, and time events are documented."),
      m("Conditions", "Controlled", "Messages only send when context is valid."),
      m("Retries", "Handled", "Failed sends or token issues can be diagnosed."),
      m("Audit", "Logged", "Important notification events keep history."),
    ],
    flow: [
      f(Lucide.Activity, "Event detected", "The app or backend records a meaningful change."),
      f(Lucide.Database, "Conditions checked", "Rules verify segment, permission, timing, and frequency."),
      f(Lucide.Send, "Notification queued", "Template and deep link are prepared."),
      f(Lucide.CheckCircle2, "Delivery logged", "Delivery, open, click, and completion are tracked."),
    ],
    implementationTitle: "Triggers should be documented like product features.",
    implementationText:
      "A trigger system is easier to maintain when every rule has a source event, conditions, template, destination, and metric.",
    implementationPoints: [
      "Name and document each notification trigger clearly.",
      "Avoid sending messages from incomplete or uncertain data states.",
      "Use admin controls for templates and selected trigger settings.",
      "Log trigger history for support and performance review.",
    ],
    visualTitle: "Trigger architecture",
    visualRows: ["Source event", "Audience condition", "Frequency and preference check", "Template and payload", "Delivery and conversion log"],
  },
  "reminder-flows": {
    title: "Reminder flows protect revenue and service quality.",
    intro:
      "Reminders are useful when they prevent missed bookings, unpaid balances, forgotten carts, delayed renewals, incomplete profiles, or overdue support responses. They should be timed and limited carefully.",
    cards: [
      c(Lucide.CalendarCheck, "Booking Reminders", "Appointment, turf slot, class, event, rental, and service reminders reduce no-shows.", "Schedule"),
      c(Lucide.ShoppingCart, "Cart / Checkout Reminders", "Abandoned carts or incomplete checkout flows can receive a gentle return path.", "Conversion"),
      c(Lucide.CreditCard, "Payment Reminders", "Failed payment, balance due, invoice, renewal, or deposit reminders reduce manual chasing.", "Money"),
      c(Lucide.MessageCircle, "Support Reminders", "Customer pending, team pending, and feedback request reminders keep service loops moving.", "Support"),
    ],
    metrics: [
      m("No-shows", "Lower", "Timed reminders protect booked capacity."),
      m("Payment recovery", "Tracked", "Failed or due payments can be followed up."),
      m("Cart returns", "Measured", "Action rate shows whether reminders help."),
      m("Support closure", "Faster", "Pending cases do not sit unnoticed."),
    ],
    flow: [
      f(Lucide.Clock3, "Schedule", "The reminder time is based on the business event."),
      f(Lucide.Users, "Check audience", "The user is eligible and has not opted out."),
      f(Lucide.Link, "Deep link", "The message opens the exact booking, order, payment, or ticket."),
      f(Lucide.BarChart3, "Measure", "Completion and opt-out outcomes are reviewed."),
    ],
    implementationTitle: "Reminder timing should match user need.",
    implementationText:
      "Too early, too late, or too frequent reminders can hurt trust. HNX tunes reminder windows around the business model and customer behavior.",
    implementationPoints: [
      "Define reminder windows for each business event.",
      "Limit repeats and stop reminders after the user completes the action.",
      "Use deep links so reminders lead directly to resolution.",
      "Track action completion and no-show or recovery impact.",
    ],
    visualTitle: "Reminder library",
    visualRows: ["Booking reminder", "Cart return", "Payment due", "Support pending", "Feedback request"],
  },
  segmentation: {
    title: "Segmentation makes messages more useful and less noisy.",
    intro:
      "Not every user should receive the same message. Segments can be based on activity, lifecycle, spending, interests, location, booking type, order history, membership, or support needs.",
    cards: [
      c(Lucide.Users, "Lifecycle Segments", "New, activated, repeat, inactive, loyal, at-risk, and churned users need different messages.", "Lifecycle"),
      c(Lucide.Activity, "Behavior Segments", "Users can be grouped by views, carts, bookings, orders, payments, preferences, or support patterns.", "Behavior"),
      c(Lucide.MapPin, "Context Segments", "Location, branch, service area, language, device, and local availability can improve relevance.", "Context"),
      c(Lucide.CreditCard, "Value Segments", "High-value, frequent, trial, unpaid, renewal, and coupon-sensitive customers need careful handling.", "Value"),
    ],
    metrics: [
      m("Relevance", "Higher", "Messages match customer context."),
      m("Opt-out risk", "Lower", "Fewer irrelevant notifications are sent."),
      m("Campaign quality", "Measured", "Segments can be compared by action rate."),
      m("Retention", "Clearer", "Lifecycle cohorts reveal user movement."),
    ],
    flow: [
      f(Lucide.Database, "Collect signals", "Events, profile, purchase, location, and preferences are captured responsibly."),
      f(Lucide.Users, "Build segment", "Rules group users around meaningful behavior."),
      f(Lucide.Bell, "Send relevant", "The message reflects segment intent."),
      f(Lucide.BarChart3, "Compare", "Action and opt-out rates show segment quality."),
    ],
    implementationTitle: "Segments should be simple enough to operate.",
    implementationText:
      "The goal is not to create endless audience lists. Useful segments should be easy to understand, maintain, and improve.",
    implementationPoints: [
      "Start with lifecycle and behavior segments before complex targeting.",
      "Document why each segment exists and what action it supports.",
      "Respect notification preferences and sensitive data boundaries.",
      "Retire segments that do not improve user action or service quality.",
    ],
    visualTitle: "Segment model",
    visualRows: ["New user", "Activated user", "Repeat customer", "Inactive user", "High-value customer"],
  },
  "deep-links": {
    title: "Deep links turn notifications into direct action paths.",
    intro:
      "A notification should not simply open the app home screen. Deep links should take customers to the booking, order, ticket, payment, offer, profile, or support thread that matches the message.",
    cards: [
      c(Lucide.Link, "Screen Routing", "Notifications can open exact screens such as order details, payment retry, booking reschedule, or support thread.", "Destination"),
      c(Lucide.MousePointerClick, "Action Completion", "The fewer taps after opening, the more likely users complete the intended action.", "Conversion"),
      c(Lucide.ShieldCheck, "Auth-safe Links", "Protected destinations should handle login, expired sessions, and permissions without losing context.", "Security"),
      c(Lucide.BarChart3, "Link Analytics", "Track notification open, deep link arrival, screen action, and completion separately.", "Tracking"),
    ],
    metrics: [
      m("Tap path", "Short", "Users land where the action is needed."),
      m("Auth recovery", "Handled", "Login does not break the destination."),
      m("Attribution", "Clear", "Opens and completions are tied to the message."),
      m("Support", "Lower", "Users do not search manually after notification."),
    ],
    flow: [
      f(Lucide.Bell, "User taps", "The notification carries a destination and context."),
      f(Lucide.KeyRound, "Auth checks", "The app verifies access while preserving intent."),
      f(Lucide.Link, "Route opens", "The correct screen appears with relevant data."),
      f(Lucide.CheckCircle2, "Action completes", "Payment, booking, support, or order step is finished."),
    ],
    implementationTitle: "Deep links should be tested like checkout paths.",
    implementationText:
      "A broken deep link wastes the notification and can frustrate users. HNX plans link handling across app states, auth states, and platform behavior.",
    implementationPoints: [
      "Define destination screens for every actionable notification type.",
      "Handle logged-out, expired-session, and missing-record states gracefully.",
      "Track open, route arrival, and final action as separate events.",
      "Test links on both Android and iOS release builds.",
    ],
    visualTitle: "Deep link path",
    visualRows: ["Notification payload", "Auth and permission check", "Destination screen", "Fallback state", "Completion tracking"],
  },
  "frequency-control": {
    title: "Frequency control protects customer trust.",
    intro:
      "A strong notification system limits repetition, respects preferences, avoids irrelevant promotions, and stops messages when the user has already completed the action.",
    cards: [
      c(Lucide.SlidersHorizontal, "Send Limits", "Daily, weekly, campaign, and journey caps prevent over-communication.", "Limits"),
      c(Lucide.ShieldCheck, "Preference Center", "Users should manage promotional, reminder, account, and service notification settings where appropriate.", "Control"),
      c(Lucide.Clock3, "Quiet Hours", "Timing rules can avoid inconvenient hours and support location or business-hour logic.", "Timing"),
      c(Lucide.XCircle, "Stop Conditions", "Reminders should stop after payment, booking confirmation, ticket closure, opt-out, or expiry.", "Respect"),
    ],
    metrics: [
      m("Caps", "Defined", "Message volume stays controlled."),
      m("Preferences", "Visible", "Users understand what they can manage."),
      m("Opt-outs", "Watched", "Trust signals are reviewed."),
      m("Suppression", "Active", "Completed users are removed from reminders."),
    ],
    flow: [
      f(Lucide.Activity, "Message requested", "A trigger or campaign asks to send."),
      f(Lucide.SlidersHorizontal, "Rules check", "Frequency, quiet hours, preferences, and completion state are checked."),
      f(Lucide.Send, "Send or suppress", "The system sends only when the message remains appropriate."),
      f(Lucide.BarChart3, "Review trust", "Opt-out and engagement data informs future limits."),
    ],
    implementationTitle: "Trust controls should be part of launch scope.",
    implementationText:
      "Frequency rules are easier to build early than to repair after users lose confidence in notifications.",
    implementationPoints: [
      "Define notification categories and preference controls.",
      "Set caps and quiet-hour rules around customer expectations.",
      "Suppress users who already completed the target action.",
      "Review opt-out trends before increasing message volume.",
    ],
    visualTitle: "Frequency control logic",
    visualRows: ["Category preference", "Journey cap", "Quiet hours", "Completion suppression", "Opt-out review"],
  },
  "performance-tracking": {
    title: "Performance tracking shows whether notifications create useful action.",
    intro:
      "Notification performance should be measured beyond opens. The business needs delivery, opens, clicks, deep link arrivals, completed actions, revenue, retention, opt-outs, and support effects.",
    cards: [
      c(Lucide.BarChart3, "Delivery Funnel", "Sent, delivered, opened, clicked, deep-linked, and completed stages reveal where the journey breaks.", "Funnel"),
      c(Lucide.Target, "Conversion Impact", "Bookings completed, orders paid, balances recovered, reactivations, and support closures show business value.", "Impact"),
      c(Lucide.Users, "Segment Comparison", "Compare lifecycle and behavior segments by action rate and opt-out risk.", "Segments"),
      c(Lucide.Activity, "Operational Signals", "No-shows, support volume, payment recovery, and abandoned flows show where reminders help.", "Operations"),
    ],
    metrics: [
      m("Open rate", "Tracked", "But not treated as the only success metric."),
      m("Action rate", "Primary", "Completed action matters more than tap curiosity."),
      m("Opt-out rate", "Guardrail", "Trust impact is monitored."),
      m("Revenue link", "Visible", "Messages can connect to paid outcomes."),
    ],
    flow: [
      f(Lucide.Send, "Send", "The notification is delivered through the provider."),
      f(Lucide.MousePointerClick, "Open", "The user taps and enters the app."),
      f(Lucide.Link, "Arrive", "Deep link opens the correct destination."),
      f(Lucide.CheckCircle2, "Complete", "The user completes booking, payment, order, or support action."),
    ],
    implementationTitle: "Measurement should include user trust and business value.",
    implementationText:
      "A notification that gets opens but causes opt-outs or low completion is not successful. HNX reviews performance with both growth and trust in mind.",
    implementationPoints: [
      "Track delivery, open, click, deep link arrival, and completion separately.",
      "Compare performance by segment, trigger, and message category.",
      "Watch opt-outs, muted users, and support complaints.",
      "Use results to refine timing, copy, targeting, and frequency.",
    ],
    visualTitle: "Notification analytics view",
    visualRows: ["Delivery status", "Open and click", "Deep link arrival", "Completed action", "Opt-out and retention impact"],
  },
  "final-cta": {
    title: "Build push notifications that improve service and retention.",
    intro:
      "HNX can design and implement a notification system with triggers, templates, segmentation, deep links, frequency control, preferences, admin controls, and analytics.",
    cards: [
      c(Lucide.SearchCheck, "Journey Audit", "Find where reminders, confirmations, and lifecycle messages reduce friction.", "Audit"),
      c(Lucide.Workflow, "Trigger Design", "Map event, timing, admin, and data-based rules for each message journey.", "Rules"),
      c(Lucide.Users, "Segments & Preferences", "Create relevant audience groups while respecting customer control.", "Trust"),
      c(Lucide.BarChart3, "Performance Review", "Measure delivery, action, opt-out, retention, and revenue signals.", "Growth"),
    ],
    metrics: [
      m("Messages", "Purposeful", "Each one supports a clear user or business moment."),
      m("Deep links", "Ready", "Users land where the action happens."),
      m("Frequency", "Controlled", "Trust is part of the system."),
      m("Analytics", "Actionable", "Results guide improvement."),
    ],
    flow: [
      f(Lucide.SearchCheck, "Audit", "Map user moments and business events."),
      f(Lucide.FileText, "Design", "Create templates, triggers, segments, and deep links."),
      f(Lucide.Settings, "Implement", "Connect provider, tokens, rules, preferences, and admin controls."),
      f(Lucide.BarChart3, "Improve", "Review performance and refine journeys."),
    ],
    implementationTitle: "Start with useful communication, then automate it.",
    implementationText:
      "The strongest push systems feel like service, not noise. They help customers complete actions and help teams operate with less manual follow-up.",
    implementationPoints: [
      "Prioritize transactional and reminder messages before campaigns.",
      "Design segmentation and frequency controls from the beginning.",
      "Connect notifications to app screens with deep links.",
      "Use analytics to protect trust and improve retention.",
    ],
    visualTitle: "HNX push delivery",
    visualRows: ["Journey and trigger audit", "Template and segment design", "Provider and token setup", "Deep links and preferences", "Performance dashboard"],
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
        <p className="text-xs font-black text-[#66728f]">Push Engagement Console</p>
      </div>
      <div className="grid gap-5 p-5 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[24px] bg-gradient-to-br from-[#0f214f] via-[#145cb7] to-[#19b7c5] p-6 text-white">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-100">Trust-first messaging</p>
          <h3 className="mt-4 text-4xl font-black tracking-[-0.05em]">Send only what helps users move forward.</h3>
          <p className="mt-4 text-sm font-semibold leading-7 text-blue-100">Triggers, segments, deep links, preferences, and analytics keep notifications useful and measurable.</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {["Triggers", "Segments", "Deep links", "Frequency"].map((item) => <p key={item} className="rounded-xl bg-white/12 px-4 py-3 text-xs font-black">{item}</p>)}
          </div>
        </div>
        <div className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-3">
            {[["38%", "Open rate"], ["16", "Automations"], ["Low", "Opt-out"]].map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-[#d7e1f2] bg-[#f8fbff] p-4">
                <p className="text-2xl font-black text-[#145cb7]">{value}</p>
                <p className="mt-1 text-xs font-bold text-[#66728f]">{label}</p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-[#d7e1f2] bg-[#f8fbff] p-4">
            <p className="text-sm font-black text-[#0f214f]">Active notification journeys</p>
            <div className="mt-4 space-y-2">
              {["Booking reminder sent", "Payment retry deep link", "Order ready update", "Inactive user reactivation", "Support ticket reply"].map((item) => (
                <div key={item} className="flex items-center justify-between rounded-xl bg-white px-4 py-3">
                  <span className="text-xs font-black text-[#0f214f]">{item}</span>
                  <Lucide.CheckCircle2 className="h-4 w-4 text-emerald-600" />
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-[#bfd7ff] bg-[#eef6ff] px-4 py-3">
            <p className="text-sm font-black text-[#145cb7]">Outcome: useful nudges, clear actions, measurable retention</p>
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
          <p className="text-xl font-black">Ready to build a useful push system?</p>
          <p className="mt-2 text-sm font-semibold text-blue-100">Plan triggers, segments, deep links, preferences, and tracking without spammy shortcuts.</p>
        </div>
        <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-extrabold text-[#075edb]">
          Book Push Strategy Call <Lucide.ArrowRight className="h-4 w-4" />
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

export default function PushNotificationsClient() {
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
          icon={Lucide.Bell}
          items={knowledgeTabs}
          activeTab={activeTab}
          onTabChange={handleTabChange}
          ctaTitle="Plan Push System"
          ctaText="Create useful notification journeys with triggers, segments, deep links, controls, and analytics."
          ctaButtonText="Book Push Call"
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
