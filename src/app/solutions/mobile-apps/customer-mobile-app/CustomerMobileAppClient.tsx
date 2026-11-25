"use client";

import Link from "next/link";
import { useMemo, useState, type ReactNode } from "react";
import * as Lucide from "lucide-react";
import { SolutionCategoryTabs } from "@/components/solutions/shared/SolutionCategoryTabs";
import { SolutionSidebar } from "@/components/solutions/SolutionSidebar";
import type { SolutionPageData } from "@/data/solutions/types";

type LucideIcon = Lucide.LucideIcon;

const MODULE_NAME = "Customer Mobile App";
const SIDEBAR_TITLE = "Customer App";
const SIDEBAR_SUBTITLE = "Branded Customer Journey";

function tabSolution(
  slug: string,
  label: string,
  href: string,
  icon: SolutionPageData["icon"]
): SolutionPageData {
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
  { id: "customer-experience-gap", label: "Customer Experience Gap", icon: Lucide.CircleAlert },
  { id: "onboarding-flow", label: "Onboarding Flow", icon: Lucide.UserCheck },
  { id: "home-screen-system", label: "Home Screen System", icon: Lucide.LayoutDashboard },
  { id: "core-user-actions", label: "Core User Actions", icon: Lucide.MousePointerClick },
  { id: "profile-account", label: "Profile & Account", icon: Lucide.Users },
  { id: "support-help-flow", label: "Support / Help Flow", icon: Lucide.Headphones },
  { id: "retention-system", label: "Retention System", icon: Lucide.Bell },
  { id: "launch-quality", label: "Launch Quality", icon: Lucide.Rocket },
  { id: "final-cta", label: "Final CTA", icon: Lucide.ArrowRight },
] as const;

type TabId = (typeof knowledgeTabs)[number]["id"];

type CardItem = {
  icon: LucideIcon;
  title: string;
  text: string;
  tag?: string;
};

type MetricItem = {
  label: string;
  value: string;
  note: string;
};

type FlowItem = {
  icon: LucideIcon;
  title: string;
  text: string;
};

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

const sections: Record<TabId, SectionContent> = {
  overview: {
    title: "Give customers one smooth branded app experience.",
    intro:
      "A customer-facing mobile app should feel like the easiest way to interact with your business. HNX plans the onboarding, home screen, primary actions, profile, support, notifications, trust, analytics, and launch quality as one connected customer journey.",
    cards: [
      { icon: Lucide.Smartphone, title: "Branded Mobile Home", text: "Customers get a familiar place to book, order, pay, track status, request support, and come back without searching through messages.", tag: "Experience" },
      { icon: Lucide.UserCheck, title: "Friction-light Onboarding", text: "Sign up, login, permissions, preferences, and first action are designed to feel quick without skipping security or data quality.", tag: "Access" },
      { icon: Lucide.MousePointerClick, title: "Primary Action Path", text: "The main business action, such as booking, ordering, membership, request, or payment, stays visible and easy to complete.", tag: "Conversion" },
      { icon: Lucide.Bell, title: "Retention Layer", text: "Useful reminders, status updates, offers, loyalty moments, and reactivation flows keep the app valuable after first launch.", tag: "Retention" },
    ],
    metrics: [
      { label: "Self-service", value: "24/7", note: "Core customer actions stay available outside business hours." },
      { label: "Repeat use", value: "+28%", note: "Designed around saved actions, reminders, and history." },
      { label: "Support load", value: "-35%", note: "Status and help flows reduce manual follow-up." },
      { label: "Tracked events", value: "30+", note: "Customer behavior becomes measurable after launch." },
    ],
    flow: [
      { icon: Lucide.UserCheck, title: "Join", text: "Account, OTP, permissions, and preference capture are handled with clear value." },
      { icon: Lucide.Home, title: "Land", text: "The home screen shows the next best action, current status, and useful shortcuts." },
      { icon: Lucide.CreditCard, title: "Act", text: "Booking, ordering, paying, requesting, or support happens with fewer steps." },
      { icon: Lucide.Bell, title: "Return", text: "Reminders, updates, history, and offers bring customers back with purpose." },
    ],
    implementationTitle: "The app should be designed around real customer moments.",
    implementationText:
      "A customer app works when every screen supports a business moment: first visit, first action, repeat purchase, support request, payment, status update, and reactivation.",
    implementationPoints: [
      "Map the customer journey before designing screens.",
      "Keep the primary action visible from the home screen.",
      "Connect app behavior to admin visibility and analytics.",
      "Use notifications only when they create useful customer context.",
    ],
    visualTitle: "Customer app operating map",
    visualRows: ["Onboarding and permissions", "Home screen and next action", "Booking/order/payment flow", "Support and status tracking", "Retention and analytics loop"],
  },
  "customer-experience-gap": {
    title: "The gap appears when customers must use too many channels.",
    intro:
      "When customers move between phone calls, WhatsApp, websites, paper receipts, payment links, and manual reminders, the brand experience feels fragmented. A customer app brings those actions into one controlled journey.",
    cards: [
      { icon: Lucide.MessageCircle, title: "Scattered Conversations", text: "Customers ask for updates in different places because there is no single app status view.", tag: "Friction" },
      { icon: Lucide.Clock3, title: "Manual Follow-up", text: "Teams spend time confirming bookings, chasing payments, sending reminders, and repeating the same answers.", tag: "Operations" },
      { icon: Lucide.ShieldCheck, title: "Weak Trust Signals", text: "Receipts, policies, support routes, and account history are hard to find when everything lives outside the app.", tag: "Trust" },
      { icon: Lucide.BarChart3, title: "No Behavior Data", text: "The business cannot see what customers start, abandon, repeat, or need help with.", tag: "Blind Spot" },
    ],
    metrics: [
      { label: "Channels", value: "5+", note: "Commonly used before a branded app centralizes the journey." },
      { label: "Status clarity", value: "Low", note: "Customers keep asking because progress is not visible." },
      { label: "Manual work", value: "High", note: "Teams repeat updates instead of improving service." },
      { label: "Insight quality", value: "Weak", note: "Customer intent is hidden across disconnected tools." },
    ],
    flow: [
      { icon: Lucide.Search, title: "Customer searches", text: "They try to find contact, status, offer, payment, or support information." },
      { icon: Lucide.MessageCircle, title: "Team replies", text: "Staff gives manual updates that are not always logged in one place." },
      { icon: Lucide.CircleAlert, title: "Context gets lost", text: "History, owner, payment state, and next step become unclear." },
      { icon: Lucide.LayoutDashboard, title: "App centralizes", text: "The mobile app gives both customer and admin a shared source of truth." },
    ],
    implementationTitle: "The fix is not just a new interface.",
    implementationText:
      "HNX treats the customer app as a service system. The goal is to reduce confusion, standardize responses, and make every important customer action visible to the business.",
    implementationPoints: [
      "Identify every customer action currently handled manually.",
      "Turn repeated questions into visible app statuses and help content.",
      "Connect app submissions to owner, status, and admin history.",
      "Measure drop-offs where customers still leave the digital path.",
    ],
    visualTitle: "Experience gap diagnosis",
    visualRows: ["Calls and messages are repeated", "Payment and receipt paths are unclear", "Support lacks owner and history", "Customers cannot see progress", "Admins do not see full customer intent"],
  },
  "onboarding-flow": {
    title: "Onboarding should earn trust and move users to the first useful action.",
    intro:
      "A strong onboarding flow explains why the app matters, captures only necessary information, handles login securely, and guides the customer toward the action that creates business value.",
    cards: [
      { icon: Lucide.KeyRound, title: "Secure Login", text: "OTP, email, social login, or password flows should be chosen around customer convenience and business risk.", tag: "Access" },
      { icon: Lucide.FileText, title: "Profile Basics", text: "Collect only the details needed for booking, ordering, support, loyalty, billing, or personalization.", tag: "Data" },
      { icon: Lucide.Bell, title: "Permission Timing", text: "Ask for notifications, location, or camera access when the user understands the value.", tag: "Trust" },
      { icon: Lucide.Target, title: "First Action Guide", text: "After signup, the app should lead customers toward booking, ordering, account setup, or support without dead ends.", tag: "Activation" },
    ],
    metrics: [
      { label: "Signup fields", value: "Lean", note: "Only ask what the first journey needs." },
      { label: "Activation", value: "Fast", note: "First useful action is visible immediately." },
      { label: "Permissions", value: "Timed", note: "Requests appear at relevant moments." },
      { label: "Trust copy", value: "Clear", note: "Users know how their data is used." },
    ],
    flow: [
      { icon: Lucide.Sparkles, title: "Value prompt", text: "Explain what the app helps the customer do faster." },
      { icon: Lucide.KeyRound, title: "Authenticate", text: "Let the customer enter securely with minimal friction." },
      { icon: Lucide.Users, title: "Complete profile", text: "Capture details that support the first transaction or request." },
      { icon: Lucide.MousePointerClick, title: "Start action", text: "Move into booking, order, support, payment, or dashboard." },
    ],
    implementationTitle: "Onboarding is an activation system.",
    implementationText:
      "The best onboarding flow helps the customer understand value, trust the app, and complete the first meaningful action before attention fades.",
    implementationPoints: [
      "Design onboarding around the first business-critical action.",
      "Reduce form fields until every field has a clear operational reason.",
      "Use empty states and prompts to guide customers after login.",
      "Track signup start, signup complete, permission acceptance, and first action.",
    ],
    visualTitle: "Onboarding checklist",
    visualRows: ["Value promise before signup", "Secure OTP or account login", "Profile fields tied to operations", "Permission prompts at useful moments", "First action path tracked"],
  },
  "home-screen-system": {
    title: "The home screen should act like a customer command center.",
    intro:
      "The home screen is not just a menu. It should show current status, next action, shortcuts, offers, loyalty, support, and personalized context so the customer knows what to do next.",
    cards: [
      { icon: Lucide.Home, title: "Next Best Action", text: "Show the most relevant action based on the customer's status, last activity, booking, order, or membership stage.", tag: "Priority" },
      { icon: Lucide.LayoutGrid, title: "Action Shortcuts", text: "Keep booking, order, pay, support, profile, offers, and history within easy thumb reach.", tag: "Navigation" },
      { icon: Lucide.Activity, title: "Live Status", text: "Upcoming bookings, active orders, pending payments, support replies, and approvals should be visible.", tag: "Status" },
      { icon: Lucide.Sparkles, title: "Personalized Content", text: "Show loyalty, recommendations, saved services, recent orders, and relevant announcements without clutter.", tag: "Relevance" },
    ],
    metrics: [
      { label: "Shortcuts", value: "6-8", note: "Enough for speed without overwhelming customers." },
      { label: "Status blocks", value: "Live", note: "Active items reduce support messages." },
      { label: "Personalization", value: "Contextual", note: "Content changes by customer state." },
      { label: "Home events", value: "Tracked", note: "Clicks reveal what customers need most." },
    ],
    flow: [
      { icon: Lucide.Home, title: "Open app", text: "Customer lands on current context, not a generic static page." },
      { icon: Lucide.Activity, title: "Review status", text: "They see active bookings, orders, tickets, or payments." },
      { icon: Lucide.MousePointerClick, title: "Choose action", text: "They continue, repeat, pay, support, or explore." },
      { icon: Lucide.BarChart3, title: "Learn behavior", text: "Home interactions inform product and business improvements." },
    ],
    implementationTitle: "Home screen hierarchy should be designed from customer intent.",
    implementationText:
      "Every home component should justify its place: it either helps the customer act, builds trust, reduces support, or improves retention.",
    implementationPoints: [
      "Prioritize active status and next action above static content.",
      "Group shortcuts by customer intent instead of internal departments.",
      "Use cards for current items and compact tiles for repeat actions.",
      "Review analytics to remove unused home screen clutter after launch.",
    ],
    visualTitle: "Home screen content stack",
    visualRows: ["Greeting and current status", "Primary action card", "Shortcut grid", "Offers or loyalty prompt", "Support and history access"],
  },
  "core-user-actions": {
    title: "Core actions must feel fast, recoverable, and connected to operations.",
    intro:
      "Whether the app is built for booking, ordering, payments, requests, membership, or support, the primary user action should have clear steps, saved context, confirmations, and admin handoff.",
    cards: [
      { icon: Lucide.CheckCircle2, title: "Booking / Request", text: "Services, slots, staff, capacity, notes, attachments, and confirmation states should be planned as a complete flow.", tag: "Action" },
      { icon: Lucide.Store, title: "Order / Catalog", text: "Catalog browsing, variants, add-ons, cart, delivery or pickup, and repeat order logic keep purchases smooth.", tag: "Commerce" },
      { icon: Lucide.CreditCard, title: "Payment / Receipt", text: "Payment attempts, success, failure, refund, balance, invoice, and receipt states need clear customer messaging.", tag: "Money" },
      { icon: Lucide.Database, title: "Admin Handoff", text: "Each customer action should create a record with owner, status, timestamp, and next step for the business.", tag: "Operations" },
    ],
    metrics: [
      { label: "Primary flow", value: "1", note: "Main action gets the most design attention." },
      { label: "Drop-off events", value: "Mapped", note: "Each step can be improved after launch." },
      { label: "Receipts", value: "Instant", note: "Customers receive confirmation without manual follow-up." },
      { label: "Admin record", value: "Complete", note: "Operations can act without asking for context again." },
    ],
    flow: [
      { icon: Lucide.Store, title: "Select", text: "Customer chooses service, product, plan, support type, or request category." },
      { icon: Lucide.FileText, title: "Add details", text: "The app captures the minimum details needed for fulfillment." },
      { icon: Lucide.CreditCard, title: "Confirm", text: "Payment, confirmation, receipt, and policy states are clear." },
      { icon: Lucide.LayoutDashboard, title: "Fulfill", text: "Admin receives the record with status, owner, and action path." },
    ],
    implementationTitle: "Primary actions should never end in uncertainty.",
    implementationText:
      "The customer should always know what happened, what happens next, and how to recover if payment, availability, or submission fails.",
    implementationPoints: [
      "Design loading, success, failure, empty, and retry states.",
      "Use confirmation screens with receipt and next-step details.",
      "Store source, customer, payment, and action context for admin teams.",
      "Track funnel steps from start to successful completion.",
    ],
    visualTitle: "Core action state map",
    visualRows: ["Start action", "Details captured", "Validation and price", "Payment or confirmation", "Admin queue and customer status"],
  },
  "profile-account": {
    title: "Profile and account screens should reduce repeated effort.",
    intro:
      "A customer profile is more than a settings page. It stores identity, contact details, preferences, saved addresses, payment context, history, loyalty, privacy controls, and support context.",
    cards: [
      { icon: Lucide.Users, title: "Customer Identity", text: "Name, contact, membership, saved preferences, and verification status should support service quality.", tag: "Profile" },
      { icon: Lucide.MapPin, title: "Addresses / Locations", text: "Saved addresses, service locations, branch preferences, and delivery notes reduce checkout friction.", tag: "Context" },
      { icon: Lucide.ReceiptText, title: "History & Receipts", text: "Bookings, orders, payments, invoices, refunds, and support history should be easy to find.", tag: "History" },
      { icon: Lucide.LockKeyhole, title: "Privacy Controls", text: "Notification preferences, account deletion, consent, and data update flows should be visible and respectful.", tag: "Trust" },
    ],
    metrics: [
      { label: "Repeat data", value: "Saved", note: "Customers avoid retyping details." },
      { label: "History", value: "Visible", note: "Receipts and records reduce support friction." },
      { label: "Preferences", value: "Editable", note: "Users control notifications and account details." },
      { label: "Trust", value: "Higher", note: "Privacy controls make the app feel professional." },
    ],
    flow: [
      { icon: Lucide.UserCheck, title: "Create profile", text: "Capture identity after the customer understands value." },
      { icon: Lucide.FileText, title: "Save context", text: "Store useful addresses, preferences, and history." },
      { icon: Lucide.LockKeyhole, title: "Control privacy", text: "Let users manage consent and notification settings." },
      { icon: Lucide.RefreshCw, title: "Reuse details", text: "Future bookings, orders, and support become faster." },
    ],
    implementationTitle: "Account design should support trust and speed together.",
    implementationText:
      "A good account area makes repeat actions easier while giving customers clear control over personal information and communication preferences.",
    implementationPoints: [
      "Separate editable details, history, payments, and preferences clearly.",
      "Expose notification preferences instead of forcing all messages.",
      "Let customers find receipts and past actions without contacting support.",
      "Connect customer records to admin history and analytics safely.",
    ],
    visualTitle: "Account architecture",
    visualRows: ["Personal details", "Saved addresses and preferences", "Orders/bookings/payments", "Support history", "Privacy and notification controls"],
  },
  "support-help-flow": {
    title: "Support should feel structured, visible, and easy to follow.",
    intro:
      "A customer app should make help easy without pushing everything into chat. Structured support categories, ticket status, FAQs, attachments, and admin ownership create a better support experience.",
    cards: [
      { icon: Lucide.Headphones, title: "Help Categories", text: "Customers choose issue types like payment, booking, order, account, delivery, cancellation, or technical help.", tag: "Routing" },
      { icon: Lucide.MessageCircle, title: "Contextual Thread", text: "Messages, files, status, and replies stay attached to the issue instead of getting lost.", tag: "Conversation" },
      { icon: Lucide.Clock3, title: "Status Visibility", text: "Open, waiting, in review, resolved, and reopened states reduce repeated follow-up.", tag: "Status" },
      { icon: Lucide.FileText, title: "Self-help Content", text: "FAQs, policy notes, how-to flows, and common fixes should deflect simple questions professionally.", tag: "Self-service" },
    ],
    metrics: [
      { label: "First response", value: "Tracked", note: "Support quality becomes measurable." },
      { label: "Repeated issues", value: "Visible", note: "Reports reveal product or operations gaps." },
      { label: "Ticket status", value: "Live", note: "Customers know what is happening." },
      { label: "FAQ deflection", value: "Useful", note: "Simple questions can be answered instantly." },
    ],
    flow: [
      { icon: Lucide.SearchCheck, title: "Find help", text: "Customer sees FAQs and support categories." },
      { icon: Lucide.FileText, title: "Submit context", text: "Issue type, message, order ID, booking ID, and attachments are captured." },
      { icon: Lucide.UserCheck, title: "Assign owner", text: "Admin or support team receives the case with priority." },
      { icon: Lucide.CheckCircle2, title: "Resolve visibly", text: "Customer sees replies, status, and resolution history." },
    ],
    implementationTitle: "Support should be connected to customer records.",
    implementationText:
      "When support is connected to order, booking, payment, and account data, the team can respond faster and customers do not need to explain everything again.",
    implementationPoints: [
      "Use issue categories that match real support workload.",
      "Attach support cases to customer history and related transactions.",
      "Show clear statuses and expected response guidance.",
      "Track support volume, response time, repeat issues, and satisfaction.",
    ],
    visualTitle: "Support workflow",
    visualRows: ["FAQ search", "Issue category", "Ticket with context", "Admin assignment", "Status updates and resolution"],
  },
  "retention-system": {
    title: "Retention should be built from useful moments, not spam.",
    intro:
      "A customer app becomes valuable when users have reasons to return. Retention is shaped through reminders, loyalty, saved actions, order history, personalized content, and respectful notifications.",
    cards: [
      { icon: Lucide.Bell, title: "Useful Reminders", text: "Booking reminders, renewal notices, payment prompts, order status, and support replies should be timely and relevant.", tag: "Timing" },
      { icon: Lucide.Gift, title: "Loyalty & Rewards", text: "Points, credits, offers, referrals, memberships, or repeat benefits give customers a reason to return.", tag: "Value" },
      { icon: Lucide.RefreshCw, title: "Saved Repeat Actions", text: "Reorder, rebook, favorite services, saved carts, and recent activity reduce repeat friction.", tag: "Habit" },
      { icon: Lucide.BarChart3, title: "Lifecycle Analytics", text: "Track activation, repeat action, inactivity, opt-outs, and reactivation to improve the app responsibly.", tag: "Insights" },
    ],
    metrics: [
      { label: "Repeat path", value: "1 tap", note: "Saved actions make return visits easier." },
      { label: "Segments", value: "Behavioral", note: "Messages are based on real app activity." },
      { label: "Opt-outs", value: "Monitored", note: "Trust is protected with frequency control." },
      { label: "Retention", value: "Measured", note: "Cohorts show whether users keep coming back." },
    ],
    flow: [
      { icon: Lucide.Activity, title: "Detect signal", text: "User books, orders, pauses, abandons, or becomes inactive." },
      { icon: Lucide.Users, title: "Segment", text: "Group customers by behavior, value, preferences, or lifecycle stage." },
      { icon: Lucide.Bell, title: "Send context", text: "Use reminders and offers tied to customer value." },
      { icon: Lucide.BarChart3, title: "Review impact", text: "Measure action rate, repeat usage, opt-outs, and revenue." },
    ],
    implementationTitle: "Retention should protect user trust.",
    implementationText:
      "The app should communicate when it helps the customer, not because the business wants to send more messages.",
    implementationPoints: [
      "Build notification preferences into the account area.",
      "Limit promotional pushes and prioritize transactional usefulness.",
      "Create segments from behavior instead of sending every message to everyone.",
      "Review opt-outs, open rates, repeat actions, and revenue impact together.",
    ],
    visualTitle: "Retention loop",
    visualRows: ["Usage signal", "Segment and preference check", "Reminder or offer", "Deep link to action", "Retention metric review"],
  },
  "launch-quality": {
    title: "Launch quality decides whether customers trust the app from day one.",
    intro:
      "A customer app launch needs device QA, performance checks, permissions review, error handling, analytics events, store assets, support readiness, and a post-launch improvement plan.",
    cards: [
      { icon: Lucide.Smartphone, title: "Device QA", text: "Responsive behavior, touch targets, scroll states, keyboard behavior, and permissions should work across common devices.", tag: "QA" },
      { icon: Lucide.Gauge, title: "Performance", text: "App startup, screen transitions, API response, media loading, and offline states must feel reliable.", tag: "Speed" },
      { icon: Lucide.Bug, title: "Error Handling", text: "Failed login, payment failure, empty data, network loss, and unavailable slots need clear recovery paths.", tag: "Reliability" },
      { icon: Lucide.BarChart3, title: "Analytics Baseline", text: "Onboarding, home clicks, core action funnel, support, retention, and crash events should be ready at release.", tag: "Tracking" },
    ],
    metrics: [
      { label: "Critical flows", value: "10+", note: "Tested before launch." },
      { label: "Crash monitoring", value: "Ready", note: "Issues can be diagnosed quickly." },
      { label: "Store assets", value: "Complete", note: "Listing, screenshots, icon, and policy links prepared." },
      { label: "V1.1 backlog", value: "Planned", note: "Improvements are ready after real usage data." },
    ],
    flow: [
      { icon: Lucide.CheckCircle2, title: "Pre-launch QA", text: "Validate customer flows, edge cases, and admin handoff." },
      { icon: Lucide.Store, title: "Store readiness", text: "Prepare listing, screenshots, policies, permissions, and release notes." },
      { icon: Lucide.Activity, title: "Monitor usage", text: "Watch crashes, API errors, conversion, and support tickets." },
      { icon: Lucide.GitBranch, title: "Improve", text: "Turn feedback and analytics into the first update roadmap." },
    ],
    implementationTitle: "A polished launch needs operations readiness too.",
    implementationText:
      "Customers judge the app by whether it works smoothly, but the business also needs support workflows and analytics ready when usage begins.",
    implementationPoints: [
      "Test every critical customer action with realistic data.",
      "Prepare support scripts and admin workflows before users arrive.",
      "Validate analytics events and crash reporting in release builds.",
      "Plan the first two improvement releases before public launch.",
    ],
    visualTitle: "Launch readiness board",
    visualRows: ["Device and permission QA", "Core funnel testing", "Store listing and policy review", "Support workflow readiness", "Monitoring and update roadmap"],
  },
  "final-cta": {
    title: "Build a customer app that feels useful every time it is opened.",
    intro:
      "HNX can plan, design, develop, connect, launch, and improve a branded customer mobile app that supports onboarding, core actions, profile, support, notifications, analytics, and admin control.",
    cards: [
      { icon: Lucide.SearchCheck, title: "Customer Journey Audit", text: "Find the points where customers currently depend on calls, messages, manual updates, or unclear support.", tag: "Audit" },
      { icon: Lucide.Palette, title: "App UX Design", text: "Design onboarding, home, account, action flows, support, and retention in a premium mobile experience.", tag: "Design" },
      { icon: Lucide.Network, title: "Admin Connection", text: "Connect customer actions to records, statuses, owners, notifications, payments, and reports.", tag: "Operations" },
      { icon: Lucide.Rocket, title: "Launch & Improve", text: "Prepare testing, store launch, analytics, monitoring, support readiness, and version updates.", tag: "Growth" },
    ],
    metrics: [
      { label: "Journey", value: "Mapped", note: "Customer and admin flows planned together." },
      { label: "Core action", value: "Optimized", note: "The main app job gets a complete funnel." },
      { label: "Support", value: "Structured", note: "Customers and teams see clear status." },
      { label: "Growth", value: "Measured", note: "Launch data guides V1.1 and beyond." },
    ],
    flow: [
      { icon: Lucide.SearchCheck, title: "Discover", text: "Understand customer needs, business rules, and current service gaps." },
      { icon: Lucide.Palette, title: "Design", text: "Create the screen journey and interaction system." },
      { icon: Lucide.Code2, title: "Build", text: "Develop app flows, APIs, admin handoff, notifications, and analytics." },
      { icon: Lucide.Rocket, title: "Launch", text: "Release with QA, store assets, monitoring, and improvement roadmap." },
    ],
    implementationTitle: "Start with the full customer journey, not a feature list.",
    implementationText:
      "A successful customer app connects experience, operations, trust, support, launch, and analytics into one product system.",
    implementationPoints: [
      "Define the app's main business action before adding secondary features.",
      "Connect every customer action to admin visibility and follow-up.",
      "Design notifications and support around trust, not noise.",
      "Use launch data to improve onboarding, funnels, and retention.",
    ],
    visualTitle: "HNX customer app delivery",
    visualRows: ["Discovery workshop", "Journey and screen design", "Flutter or native build", "Admin/API integration", "Store launch and analytics review"],
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

    if (!element) {
      return;
    }

    const stickyOffset = window.innerWidth >= 1024 ? 190 : 170;
    const top = element.getBoundingClientRect().top + window.scrollY - stickyOffset;

    window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
  });
}

function IconShell({
  icon: Icon,
  className,
}: {
  icon: LucideIcon;
  className?: string;
}) {
  return (
    <span
      className={cx(
        "grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#eef6ff] text-[#2378ff] ring-1 ring-[#bfd7ff]",
        className
      )}
    >
      <Icon className="h-5 w-5" aria-hidden="true" />
    </span>
  );
}

function MobileTabs({
  activeTab,
  onTabChange,
}: {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
}) {
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
              className={cx(
                "flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-xs font-extrabold transition",
                isActive
                  ? "border-[#9fc6e6] bg-[#eef6ff] text-[#145cb7]"
                  : "border-[#d7e1f2] bg-white text-[#334766]"
              )}
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
      <Link href="/solutions" className="text-[#0891b2] transition hover:text-[#145cb7]">
        Solutions
      </Link>
      <span className="text-[#9aa7bd]">/</span>
      <Link href="/solutions/mobile-apps/app-strategy" className="text-[#0891b2] transition hover:text-[#145cb7]">
        Mobile Apps
      </Link>
      <span className="text-[#9aa7bd]">/</span>
      <span className="text-[#334766]">{MODULE_NAME}</span>
      <span className="text-[#9aa7bd]">/</span>
      <span className="text-[#0f214f]">{activeLabel}</span>
    </nav>
  );
}

function ChapterShell({
  activeLabel,
  title,
  intro,
  children,
}: {
  activeLabel: string;
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <section className="border-b border-[#d7e1f2] bg-white px-5 py-10 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
      <Breadcrumb activeLabel={activeLabel} />
      <div className="max-w-5xl">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-[#145cb7]">{MODULE_NAME}</p>
        <h1 className="mt-5 text-5xl font-black leading-[1.02] tracking-[-0.06em] text-[#0f214f] sm:text-6xl">
          {title}
        </h1>
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
            {item.tag ? (
              <span className="rounded-full bg-[#eef6ff] px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-[#145cb7]">
                {item.tag}
              </span>
            ) : null}
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
        <path
          d="M2 28 L18 24 L34 27 L50 22 L66 25 L82 17 L98 18 L114 14 L130 17 L146 10 L162 13 L178 8 L194 12 L218 7"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.5"
        />
      </svg>
    </div>
  );
}

function PreviewWindow() {
  return (
    <div className="overflow-hidden rounded-[28px] border border-[#d7e1f2] bg-white shadow-[0_20px_55px_rgba(15,23,42,0.08)]">
      <div className="flex items-center justify-between border-b border-[#d7e1f2] bg-[#f8fbff] px-5 py-4">
        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-400" />
        </div>
        <p className="text-xs font-black text-[#66728f]">Customer App Preview</p>
      </div>

      <div className="grid gap-5 p-5 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[24px] bg-gradient-to-br from-[#0f214f] via-[#145cb7] to-[#19b7c5] p-6 text-white">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-100">Branded Customer Hub</p>
          <h3 className="mt-4 text-4xl font-black tracking-[-0.05em]">Book, order, pay, track, and get help from one app.</h3>
          <p className="mt-4 text-sm font-semibold leading-7 text-blue-100">
            The experience feels simple to customers because onboarding, actions, support, notifications, and admin handoff are planned together.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {["Onboarding", "Home action", "Support status", "Retention loop"].map((item) => (
              <p key={item} className="rounded-xl bg-white/12 px-4 py-3 text-xs font-black">
                {item}
              </p>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ["4.8k", "Active users"],
              ["28%", "Repeat lift"],
              ["35%", "Less support"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-[#d7e1f2] bg-[#f8fbff] p-4">
                <p className="text-2xl font-black text-[#145cb7]">{value}</p>
                <p className="mt-1 text-xs font-bold text-[#66728f]">{label}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-[#d7e1f2] bg-[#f8fbff] p-4">
            <p className="text-sm font-black text-[#0f214f]">Customer journey blocks</p>
            <div className="mt-4 space-y-2">
              {["OTP onboarding", "Next action home card", "Booking / order flow", "Ticket status", "Retention notification"].map((item) => (
                <div key={item} className="flex items-center justify-between rounded-xl bg-white px-4 py-3">
                  <span className="text-xs font-black text-[#0f214f]">{item}</span>
                  <Lucide.CheckCircle2 className="h-4 w-4 text-emerald-600" />
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-[#bfd7ff] bg-[#eef6ff] px-4 py-3">
            <p className="text-sm font-black text-[#145cb7]">Outcome: branded experience to self-service to repeat usage</p>
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
                  <span className="rounded-full bg-[#eef6ff] px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-[#145cb7]">
                    Step {index + 1}
                  </span>
                </div>
                <p className="mt-5 text-xl font-black tracking-[-0.03em] text-[#0f214f]">{item.title}</p>
                <p className="mt-3 text-sm font-semibold leading-6 text-[#52627d]">{item.text}</p>
              </div>

              {index < items.length - 1 ? (
                <span className="absolute -right-6 top-1/2 z-20 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-[#bfd7ff] bg-white text-[#2378ff] shadow-[0_10px_20px_rgba(15,23,42,0.08)] md:flex">
                  <Lucide.ArrowRight className="h-4 w-4" />
                </span>
              ) : null}
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
        <span className="rounded-full bg-[#eef6ff] px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-[#145cb7]">
          HNX Map
        </span>
      </div>
      <div className="mt-5 space-y-3">
        {rows.map((row, index) => (
          <div key={row} className="flex items-center gap-3 rounded-2xl bg-[#f8fbff] p-4">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-sm font-black text-[#145cb7] ring-1 ring-[#bfd7ff]">
              {index + 1}
            </span>
            <p className="text-sm font-black text-[#0f214f]">{row}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function SplitPanel({
  title,
  text,
  points,
  visual,
}: {
  title: string;
  text: string;
  points: string[];
  visual: ReactNode;
}) {
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

function SectionFooter({
  activeTab,
  onTabChange,
}: {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
}) {
  const activeIndex = knowledgeTabs.findIndex((item) => item.id === activeTab);
  const nextTab = knowledgeTabs[activeIndex + 1];

  if (!nextTab) {
    return (
      <div className="flex flex-col gap-3 rounded-[28px] bg-[#075edb] p-6 text-white sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xl font-black">Ready to plan your customer app?</p>
          <p className="mt-2 text-sm font-semibold text-blue-100">
            Build the mobile journey, admin connection, launch quality, and analytics loop together.
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-extrabold text-[#075edb]"
        >
          Book App Strategy Call
          <Lucide.ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="flex justify-end">
      <button
        type="button"
        onClick={() => onTabChange(nextTab.id)}
        className="inline-flex items-center justify-center gap-2 rounded-full border border-[#c8d7ea] bg-white px-6 py-3 text-sm font-extrabold text-[#0f214f] shadow-[0_12px_28px_rgba(15,23,42,0.06)] transition hover:border-[#145cb7] hover:text-[#145cb7]"
      >
        Continue to {nextTab.label}
        <Lucide.ArrowRight className="h-4 w-4" />
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

function SectionRenderer({
  activeTab,
  onTabChange,
}: {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
}) {
  const section = sections[activeTab];
  const activeLabel = knowledgeTabs.find((item) => item.id === activeTab)?.label ?? "Overview";
  const chapterCards = [...section.cards, ...buildDepthCards(section)];

  return (
    <ChapterShell activeLabel={activeLabel} title={section.title} intro={section.intro}>
      {activeTab === "overview" ? <PreviewWindow /> : null}

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {chapterCards.map((item) => (
          <KnowledgeCard key={item.title} item={item} />
        ))}
      </div>

      <ChapterInsightPanel section={section} />

      {section.metrics ? (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {section.metrics.map((metric) => (
            <MetricCard key={metric.label} metric={metric} />
          ))}
        </div>
      ) : null}

      <FlowVisual items={section.flow} />

      <SplitPanel
        title={section.implementationTitle}
        text={section.implementationText}
        points={section.implementationPoints}
        visual={<ImplementationMap title={section.visualTitle} rows={section.visualRows} />}
      />

      <SectionFooter activeTab={activeTab} onTabChange={onTabChange} />
    </ChapterShell>
  );
}

export default function CustomerMobileAppClient() {
  const [activeTab, setActiveTab] = useState<TabId>(() => {
    if (typeof window === "undefined") return "overview";
    return getTabFromHash(window.location.hash) ?? "overview";
  });

  const activeLabel = useMemo(
    () => knowledgeTabs.find((item) => item.id === activeTab)?.label ?? "Overview",
    [activeTab]
  );

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
          ctaTitle="Plan Customer App"
          ctaText="Create a branded app experience for onboarding, actions, support, retention, and analytics."
          ctaButtonText="Book App Call"
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
