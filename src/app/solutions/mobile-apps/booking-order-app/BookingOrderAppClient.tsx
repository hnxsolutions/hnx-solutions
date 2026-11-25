"use client";

import Link from "next/link";
import { useMemo, useState, type ReactNode } from "react";
import * as Lucide from "lucide-react";
import { SolutionCategoryTabs } from "@/components/solutions/shared/SolutionCategoryTabs";
import { SolutionSidebar } from "@/components/solutions/SolutionSidebar";
import type { SolutionPageData } from "@/data/solutions/types";

type LucideIcon = Lucide.LucideIcon;

const MODULE_NAME = "Booking / Order App";
const SIDEBAR_TITLE = "Booking / Order";
const SIDEBAR_SUBTITLE = "Revenue Flow System";

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
  { id: "booking-order-chaos", label: "Booking / Order Chaos", icon: Lucide.CircleAlert },
  { id: "catalog-service-flow", label: "Catalog / Service Flow", icon: Lucide.Store },
  { id: "slot-cart-flow", label: "Slot / Cart Flow", icon: Lucide.CalendarCheck },
  { id: "checkout-journey", label: "Checkout Journey", icon: Lucide.ShoppingCart },
  { id: "payment-status", label: "Payment Status", icon: Lucide.CreditCard },
  { id: "notifications", label: "Notifications", icon: Lucide.Bell },
  { id: "admin-fulfillment", label: "Admin Fulfillment", icon: Lucide.LayoutDashboard },
  { id: "revenue-tracking", label: "Revenue Tracking", icon: Lucide.BarChart3 },
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
    title: "Turn bookings and orders into a complete mobile revenue flow.",
    intro:
      "A booking or order app is not just a form. It is the full path from selection to slot or cart logic, checkout, payment, confirmation, customer updates, admin fulfillment, cancellation handling, and revenue analytics.",
    cards: [
      c(Lucide.Store, "Catalog / Service Selection", "Customers can choose turf slots, appointments, food, services, events, rentals, products, or add-ons from a structured mobile flow.", "Demand"),
      c(Lucide.CalendarCheck, "Slot / Cart Logic", "Availability, capacity, variants, quantity, duration, delivery, pickup, staff, and pricing rules are handled before checkout.", "Rules"),
      c(Lucide.CreditCard, "Payment-ready Checkout", "Advance, full payment, balance, refund, receipt, invoice, and failed payment states are designed clearly.", "Money"),
      c(Lucide.LayoutDashboard, "Admin Fulfillment", "Every booking or order becomes an operational record with status, owner, notes, payment state, and customer updates.", "Operations"),
    ],
    metrics: [
      m("Confirmed", "Live", "Bookings or orders move from customer app into admin queue."),
      m("Paid online", "72%", "Target direction for lower payment chasing."),
      m("Status updates", "Auto", "Customers receive confirmations and progress alerts."),
      m("Revenue view", "Daily", "Bookings, orders, refunds, and balances are visible."),
    ],
    flow: [
      f(Lucide.Store, "Select", "Customer chooses service, slot, product, quantity, or add-on."),
      f(Lucide.CheckCircle2, "Validate", "System checks availability, price, rules, and customer details."),
      f(Lucide.CreditCard, "Checkout", "Payment, confirmation, and receipt are handled in-app."),
      f(Lucide.LayoutDashboard, "Fulfill", "Admin team manages status, staff, delivery, cancellation, or completion."),
    ],
    implementationTitle: "The app should be planned around the money path.",
    implementationText:
      "HNX maps how demand becomes confirmed revenue, how exceptions are handled, and how the business sees performance after launch.",
    implementationPoints: [
      "Define selection, pricing, capacity, and exception rules before UI design.",
      "Design checkout states for success, failure, partial payment, and retry.",
      "Connect every customer action to admin fulfillment and status updates.",
      "Track revenue, refunds, cancellations, source quality, and repeat usage.",
    ],
    visualTitle: "Revenue flow map",
    visualRows: ["Catalog or service selection", "Slot/cart validation", "Checkout and payment", "Admin fulfillment", "Revenue and analytics review"],
  },
  "booking-order-chaos": {
    title: "Manual booking and ordering creates leakage at every step.",
    intro:
      "Calls, chat messages, spreadsheets, payment screenshots, and manual status updates can work at small volume, but they become fragile when demand increases or staff changes.",
    cards: [
      c(Lucide.MessageCircle, "Requests in Chat", "Customers send booking or order details in messages that are easy to miss, duplicate, or misread.", "Friction"),
      c(Lucide.CalendarX, "Slot Confusion", "Availability, capacity, staff timing, reschedules, and cancellations are handled without a reliable rule engine.", "Risk"),
      c(Lucide.CreditCard, "Payment Gaps", "Advance payments, balances, failed attempts, refunds, and receipts are tracked manually.", "Leakage"),
      c(Lucide.Activity, "No Live Status", "Customers keep asking what happened because confirmation, preparation, delivery, or completion is not visible.", "Support"),
    ],
    metrics: [
      m("Missed requests", "High", "Demand can disappear during busy hours."),
      m("Double booking", "Risk", "Manual slot control creates avoidable conflicts."),
      m("Payment clarity", "Low", "Screenshots and bank checks slow operations."),
      m("Customer updates", "Manual", "Teams repeat the same status messages."),
    ],
    flow: [
      f(Lucide.CircleAlert, "Request arrives", "Customer asks through call, chat, or social."),
      f(Lucide.FileText, "Staff records", "Details are copied into notes, sheets, or memory."),
      f(Lucide.CreditCard, "Payment chased", "Advance, receipt, or confirmation is handled manually."),
      f(Lucide.LayoutDashboard, "System replaces", "App creates one structured record with status and payment state."),
    ],
    implementationTitle: "The chaos must be converted into business rules.",
    implementationText:
      "A good app does not merely digitize the same messy process. It captures rules, controls exceptions, and gives both customer and team a clear view.",
    implementationPoints: [
      "List every manual booking/order step currently handled by staff.",
      "Separate normal flow from cancellation, refund, and reschedule exceptions.",
      "Create one record structure for customer, payment, status, and owner.",
      "Use notifications to reduce repeated status questions.",
    ],
    visualTitle: "Manual process diagnosis",
    visualRows: ["Unstructured request", "Manual availability check", "Payment screenshot chasing", "Unclear status", "No revenue report"],
  },
  "catalog-service-flow": {
    title: "Catalog and service selection should make buying feel obvious.",
    intro:
      "The first commercial decision happens when customers choose what they want. Services, products, packages, events, rentals, variants, add-ons, and policies need clear mobile structure.",
    cards: [
      c(Lucide.ListChecks, "Service Categories", "Group services by intent so customers can quickly find appointments, turf slots, rentals, menus, classes, or events.", "Structure"),
      c(Lucide.Package, "Product / Package Detail", "Each item should explain price, duration, inclusions, images, terms, capacity, and next action.", "Clarity"),
      c(Lucide.Tags, "Variants & Add-ons", "Sizes, extras, locations, staff, time duration, delivery method, and custom notes should be easy to select.", "Options"),
      c(Lucide.SearchCheck, "Availability Context", "Show only the choices that can be fulfilled, or explain why a service is unavailable.", "Trust"),
    ],
    metrics: [
      m("Findability", "High", "Categories and filters reduce browsing confusion."),
      m("Upsell", "Structured", "Add-ons are offered at relevant moments."),
      m("Policy clarity", "Visible", "Cancellation, refund, and timing rules are not hidden."),
      m("Selection events", "Tracked", "Popular services and abandoned choices become visible."),
    ],
    flow: [
      f(Lucide.Search, "Browse", "Customer views categories, filters, and featured options."),
      f(Lucide.Package, "Inspect", "They review detail, price, images, inclusions, and rules."),
      f(Lucide.Tags, "Customize", "Variants, add-ons, notes, and location are selected."),
      f(Lucide.CalendarCheck, "Continue", "The app moves into slot, cart, or checkout logic."),
    ],
    implementationTitle: "Selection screens should reduce decision fatigue.",
    implementationText:
      "The catalog or service flow should educate customers enough to choose confidently without forcing staff to explain everything manually.",
    implementationPoints: [
      "Design categories around customer language, not internal labels.",
      "Show price, duration, inclusions, and policies before checkout.",
      "Place add-ons where they are relevant, not as random promotions.",
      "Track search, filter, detail view, add-to-cart, and abandon events.",
    ],
    visualTitle: "Selection architecture",
    visualRows: ["Category and filter", "Item or service detail", "Variant and add-on logic", "Policy and availability", "Next step to slot/cart"],
  },
  "slot-cart-flow": {
    title: "Slot and cart logic should prevent confusion before payment.",
    intro:
      "For booking businesses, slot logic controls availability, duration, staff, capacity, and reschedules. For order businesses, cart logic controls quantities, add-ons, delivery, taxes, minimums, and inventory.",
    cards: [
      c(Lucide.CalendarCheck, "Availability Rules", "Slots can depend on branch, turf, staff, day, duration, blackout periods, or capacity.", "Booking"),
      c(Lucide.ShoppingCart, "Cart Rules", "Quantity, variants, add-ons, tax, delivery fee, pickup window, minimum order, and stock rules shape order reliability.", "Order"),
      c(Lucide.Clock3, "Hold / Expiry", "Popular slots or cart prices may need a short hold window so customers can complete checkout fairly.", "Control"),
      c(Lucide.RefreshCw, "Reschedule / Edit", "Customers should understand what can be changed before and after payment.", "Flexibility"),
    ],
    metrics: [
      m("Availability", "Real-time", "Customers see valid choices before checkout."),
      m("Cart accuracy", "Reliable", "Price and quantity rules are clear."),
      m("Expired holds", "Handled", "Slots or carts recover gracefully."),
      m("Rule exceptions", "Defined", "Admin can manage edge cases."),
    ],
    flow: [
      f(Lucide.CalendarCheck, "Check slot/cart", "System validates current availability and pricing."),
      f(Lucide.Clock3, "Reserve window", "A temporary hold can protect the customer's checkout path."),
      f(Lucide.FileText, "Review details", "Customer confirms date, items, quantity, notes, and policy."),
      f(Lucide.CreditCard, "Proceed", "The app moves to checkout with a valid order or booking."),
    ],
    implementationTitle: "Rules must be visible to both customer and admin.",
    implementationText:
      "Customers need simple choices, while the business needs control over capacity, pricing, timing, and exceptions.",
    implementationPoints: [
      "Model booking and cart rules before screen design begins.",
      "Show clear messages when a slot, product, or price changes.",
      "Let admins manage blackout times, capacity, stock, and service availability.",
      "Track drop-offs caused by unavailable slots, cart edits, or price changes.",
    ],
    visualTitle: "Slot/cart rule board",
    visualRows: ["Availability and stock", "Duration or quantity", "Add-ons and fees", "Hold and expiry", "Edit, reschedule, or cancel rules"],
  },
  "checkout-journey": {
    title: "Checkout should feel short, trustworthy, and recoverable.",
    intro:
      "Checkout is where customer intent becomes revenue. The journey must explain what is being purchased, what is due now, what happens next, and how the customer can recover from errors.",
    cards: [
      c(Lucide.FileText, "Order Summary", "Date, slot, items, service details, price, taxes, delivery, customer details, and policies should be easy to review.", "Review"),
      c(Lucide.UserCheck, "Customer Details", "Ask only the information needed for fulfillment, support, receipts, delivery, or compliance.", "Input"),
      c(Lucide.ShieldCheck, "Trust Signals", "Secure payment, cancellation rules, refund notes, and support contact should be visible near payment.", "Trust"),
      c(Lucide.CheckCircle2, "Confirmation State", "The customer should receive a clear booking/order ID, receipt, next step, and status path.", "Result"),
    ],
    metrics: [
      m("Checkout steps", "Lean", "Remove anything that does not help fulfillment."),
      m("Failure recovery", "Clear", "Payment and validation issues have next steps."),
      m("Receipt", "Instant", "Confirmation is visible and stored."),
      m("Funnel", "Tracked", "Start, payment attempt, success, and drop-off are measured."),
    ],
    flow: [
      f(Lucide.FileText, "Review", "Customer confirms selection, price, policy, and details."),
      f(Lucide.CreditCard, "Pay", "Payment is attempted with clear loading and failure states."),
      f(Lucide.CheckCircle2, "Confirm", "Booking/order ID and receipt are created."),
      f(Lucide.Bell, "Notify", "Customer and admin receive the right updates."),
    ],
    implementationTitle: "Checkout should not leave customers guessing.",
    implementationText:
      "A clean checkout explains charges, confirms the outcome, and protects revenue when payment or validation fails.",
    implementationPoints: [
      "Keep summary, customer details, policy, and payment on a logical path.",
      "Create visible states for payment pending, failed, successful, and refunded.",
      "Generate confirmation and receipt records automatically.",
      "Track checkout abandonment by step and source.",
    ],
    visualTitle: "Checkout state map",
    visualRows: ["Review selection", "Customer details", "Payment attempt", "Confirmation and receipt", "Admin and customer notification"],
  },
  "payment-status": {
    title: "Payment status should be auditable for customers and teams.",
    intro:
      "Booking and order apps often need full payment, advance payment, cash on delivery, balances, refunds, failed attempts, coupons, invoices, and settlement reports. The app should make every money state clear.",
    cards: [
      c(Lucide.CreditCard, "Payment Attempt", "The app captures gateway attempt, amount, method, order ID, status, and retry details.", "Gateway"),
      c(Lucide.ReceiptText, "Receipts & Invoices", "Receipts, tax details, balances, and invoice links should be stored in customer history.", "Records"),
      c(Lucide.RefreshCw, "Refund / Cancellation", "Refund eligibility, cancellation windows, partial refunds, and manual approval paths need clear logic.", "Exception"),
      c(Lucide.LayoutDashboard, "Finance View", "Admins need paid, pending, failed, refunded, balance due, and settlement visibility.", "Admin"),
    ],
    metrics: [
      m("Payment states", "Mapped", "Pending, paid, failed, refunded, partial, balance due."),
      m("Receipts", "Stored", "Customers and admins can find records later."),
      m("Refunds", "Controlled", "Rules prevent confusion and manual conflict."),
      m("Reconciliation", "Easier", "Gateway and app records can be compared."),
    ],
    flow: [
      f(Lucide.CreditCard, "Attempt", "Customer starts payment through the selected method."),
      f(Lucide.Activity, "Verify", "The app and backend confirm gateway status."),
      f(Lucide.ReceiptText, "Record", "Receipt, invoice, and balance state are stored."),
      f(Lucide.LayoutDashboard, "Reconcile", "Admin checks paid, failed, refunded, and settlement data."),
    ],
    implementationTitle: "Money states should never depend on screenshots alone.",
    implementationText:
      "A proper app records payment attempts and final status so teams can support customers without arguing over unclear proof.",
    implementationPoints: [
      "Store gateway IDs and app order/booking IDs together.",
      "Show customer-friendly messages for pending and failed payments.",
      "Create admin filters for paid, failed, refunded, and balance due.",
      "Define refund and cancellation rules before launch.",
    ],
    visualTitle: "Payment control board",
    visualRows: ["Attempt created", "Gateway status checked", "Receipt generated", "Refund/cancel rules", "Finance reconciliation"],
  },
  notifications: {
    title: "Notifications should keep the revenue flow moving.",
    intro:
      "Booking and order notifications are operational messages first. They confirm actions, remind customers, update status, reduce no-shows, and help staff avoid manual follow-up.",
    cards: [
      c(Lucide.Bell, "Confirmations", "Booking/order confirmation, payment receipt, and admin acceptance should reach the customer quickly.", "Trust"),
      c(Lucide.Clock3, "Reminders", "Upcoming slot, pickup time, delivery ETA, balance due, and expiry reminders reduce missed revenue.", "Timing"),
      c(Lucide.Truck, "Status Updates", "Preparing, ready, out for delivery, completed, cancelled, rescheduled, or delayed states keep customers informed.", "Status"),
      c(Lucide.SlidersHorizontal, "Preference Control", "Customers should have practical control over promotional messages while still receiving critical updates.", "Trust"),
    ],
    metrics: [
      m("No-shows", "Lower", "Timely reminders protect booked capacity."),
      m("Status calls", "Fewer", "Customers can see progress without asking."),
      m("Payment prompts", "Useful", "Balances and failures are handled professionally."),
      m("Opt-outs", "Monitored", "Frequency control protects trust."),
    ],
    flow: [
      f(Lucide.CheckCircle2, "Confirm", "Send immediate confirmation after booking or order."),
      f(Lucide.Clock3, "Remind", "Send relevant reminders before the due time."),
      f(Lucide.Activity, "Update", "Trigger status changes from admin actions."),
      f(Lucide.BarChart3, "Measure", "Track opens, clicks, completions, and opt-outs."),
    ],
    implementationTitle: "Notifications should be tied to real booking/order events.",
    implementationText:
      "The best messages are triggered by meaningful state changes, not by random campaigns.",
    implementationPoints: [
      "Map all customer-facing status states before writing notification copy.",
      "Use deep links to take customers directly to the booking or order.",
      "Limit promotional messages and prioritize transactional clarity.",
      "Track notification impact on no-shows, support tickets, and repeat orders.",
    ],
    visualTitle: "Notification trigger map",
    visualRows: ["Booking/order confirmation", "Payment success or failure", "Reminder before slot/pickup", "Admin status update", "Feedback or reorder prompt"],
  },
  "admin-fulfillment": {
    title: "Admin fulfillment turns mobile demand into completed work.",
    intro:
      "The customer app only succeeds if the business can fulfill each booking or order. Admin views need queues, statuses, staff assignment, notes, inventory or capacity updates, refunds, and reports.",
    cards: [
      c(Lucide.LayoutDashboard, "Live Queue", "New, confirmed, preparing, assigned, completed, cancelled, refunded, and delayed records stay visible.", "Queue"),
      c(Lucide.UserCheck, "Staff Assignment", "Bookings can be assigned to staff, branches, turf slots, delivery teams, technicians, or service owners.", "Owner"),
      c(Lucide.Settings, "Operational Controls", "Admins manage slots, pricing, catalog, availability, blackout times, stock, and fulfillment stages.", "Control"),
      c(Lucide.FileText, "Audit History", "Status changes, payment updates, cancellations, refunds, and staff notes should be logged.", "History"),
    ],
    metrics: [
      m("Open queue", "Live", "Teams know what needs action now."),
      m("Assignment", "Clear", "Each booking/order has an owner or team."),
      m("Exceptions", "Tracked", "Cancellations, delays, and refunds do not disappear."),
      m("Daily report", "Ready", "Volume and revenue can be reviewed quickly."),
    ],
    flow: [
      f(Lucide.Smartphone, "Customer submits", "App creates a structured booking/order record."),
      f(Lucide.LayoutDashboard, "Admin reviews", "Record appears with payment, status, and customer context."),
      f(Lucide.UserCheck, "Team fulfills", "Staff updates stage, notes, delivery, or completion."),
      f(Lucide.Bell, "Customer updated", "Status changes notify the customer automatically."),
    ],
    implementationTitle: "Admin control is part of the product, not an add-on.",
    implementationText:
      "A booking/order app should let the business operate daily without calling developers for routine changes.",
    implementationPoints: [
      "Design admin queues around how staff actually work.",
      "Make service, slot, stock, and status controls editable from admin views.",
      "Log changes so payment and service disputes have history.",
      "Use reports to reveal bottlenecks in fulfillment.",
    ],
    visualTitle: "Fulfillment control room",
    visualRows: ["New records queue", "Payment and customer context", "Owner or staff assignment", "Status and exception handling", "Completion and report update"],
  },
  "revenue-tracking": {
    title: "Revenue tracking shows what the app is really producing.",
    intro:
      "A booking or order app should show more than total sales. The business needs confirmed revenue, pending payments, cancellations, refunds, average order value, repeat usage, source quality, and fulfillment bottlenecks.",
    cards: [
      c(Lucide.BarChart3, "Revenue Dashboard", "Track gross sales, net sales, refunds, balances, paid online, cash pending, and settlement direction.", "Money"),
      c(Lucide.Activity, "Funnel Analysis", "View catalog views, slot checks, cart starts, checkout starts, payment attempts, confirmations, and cancellations.", "Funnel"),
      c(Lucide.Users, "Repeat Customers", "See rebooks, reorders, inactive customers, loyalty usage, and high-value segments.", "Retention"),
      c(Lucide.Target, "Source Quality", "Compare organic, paid, referral, social, QR, and direct sources by confirmed revenue, not just clicks.", "Growth"),
    ],
    metrics: [
      m("AOV", "Visible", "Average booking/order value informs pricing and add-ons."),
      m("Cancellation rate", "Tracked", "Policy and availability issues become visible."),
      m("Repeat rate", "Measured", "Retention improves with real cohorts."),
      m("Source revenue", "Compared", "Marketing can optimize for paying users."),
    ],
    flow: [
      f(Lucide.MousePointerClick, "Track actions", "Every important step becomes an analytics event."),
      f(Lucide.CreditCard, "Connect money", "Payment and refund states are tied to bookings/orders."),
      f(Lucide.LayoutDashboard, "Report daily", "Admins see revenue and workload together."),
      f(Lucide.TrendingUp, "Improve", "Pricing, capacity, reminders, and offers are adjusted from evidence."),
    ],
    implementationTitle: "The app should teach the business what to improve next.",
    implementationText:
      "Revenue analytics helps the team decide whether to improve catalog clarity, slot availability, pricing, reminders, checkout, or fulfillment.",
    implementationPoints: [
      "Define revenue events before launch, not after traffic arrives.",
      "Separate confirmed revenue from pending or failed payment attempts.",
      "Review funnel drop-offs and cancellation reasons weekly.",
      "Use repeat behavior to plan offers, reminders, and service improvements.",
    ],
    visualTitle: "Revenue intelligence map",
    visualRows: ["Catalog and slot events", "Checkout and payment states", "Confirmed revenue", "Cancellation and refund reasons", "Repeat and source analysis"],
  },
  "final-cta": {
    title: "Build a booking or order app that captures demand and runs operations.",
    intro:
      "HNX can turn manual booking, ordering, payments, confirmations, fulfillment, notifications, and reports into one mobile revenue system for turf booking, appointments, rentals, food, retail, events, and service businesses.",
    cards: [
      c(Lucide.SearchCheck, "Flow Audit", "Map current request channels, slot rules, catalog structure, payment gaps, and admin workload.", "Audit"),
      c(Lucide.Palette, "Mobile UX", "Design selection, slot/cart, checkout, confirmation, status, and account flows.", "Design"),
      c(Lucide.LayoutDashboard, "Admin Dashboard", "Build operational queues, controls, refunds, staff assignment, and reports.", "Control"),
      c(Lucide.Rocket, "Launch & Improve", "Test payment, notifications, store release, analytics, and post-launch revenue improvements.", "Launch"),
    ],
    metrics: [
      m("Demand", "Captured", "Requests become structured records."),
      m("Payments", "Clear", "Revenue states are auditable."),
      m("Fulfillment", "Managed", "Teams know what to do next."),
      m("Growth", "Measured", "Analytics guides pricing and retention."),
    ],
    flow: [
      f(Lucide.SearchCheck, "Map rules", "Capture services, slots, cart logic, pricing, and exceptions."),
      f(Lucide.Smartphone, "Build app", "Create customer selection, checkout, and status flows."),
      f(Lucide.LayoutDashboard, "Connect admin", "Route each record to fulfillment and reports."),
      f(Lucide.BarChart3, "Optimize", "Improve from funnel, revenue, and support data."),
    ],
    implementationTitle: "Start with the revenue process before screens.",
    implementationText:
      "A strong booking/order app makes customer purchase easier while giving the business control over fulfillment, money, exceptions, and growth.",
    implementationPoints: [
      "Define catalog, slot, cart, payment, and cancellation rules clearly.",
      "Connect customer actions to admin statuses and owner workflows.",
      "Design confirmations, reminders, and failure states professionally.",
      "Use analytics to improve revenue, capacity, repeat use, and support.",
    ],
    visualTitle: "HNX booking/order delivery",
    visualRows: ["Rules and revenue mapping", "Customer app journey", "Payment and notification setup", "Admin fulfillment dashboard", "Analytics and improvement roadmap"],
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
        <p className="text-xs font-black text-[#66728f]">Booking / Order Command Center</p>
      </div>
      <div className="grid gap-5 p-5 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[24px] bg-gradient-to-br from-[#0f214f] via-[#145cb7] to-[#19b7c5] p-6 text-white">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-100">Mobile Revenue Flow</p>
          <h3 className="mt-4 text-4xl font-black tracking-[-0.05em]">From selection to payment to fulfillment.</h3>
          <p className="mt-4 text-sm font-semibold leading-7 text-blue-100">A complete app flow for appointments, turf slots, orders, rentals, events, and service businesses.</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {["Slot rules", "Checkout", "Admin queue", "Revenue view"].map((item) => <p key={item} className="rounded-xl bg-white/12 px-4 py-3 text-xs font-black">{item}</p>)}
          </div>
        </div>
        <div className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-3">
            {[["186", "Confirmed"], ["72%", "Paid online"], ["14", "Reschedules"]].map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-[#d7e1f2] bg-[#f8fbff] p-4">
                <p className="text-2xl font-black text-[#145cb7]">{value}</p>
                <p className="mt-1 text-xs font-bold text-[#66728f]">{label}</p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-[#d7e1f2] bg-[#f8fbff] p-4">
            <p className="text-sm font-black text-[#0f214f]">Live operations</p>
            <div className="mt-4 space-y-2">
              {["New booking confirmed", "Payment balance reminder", "Order marked ready", "Refund request reviewed", "Daily revenue report updated"].map((item) => (
                <div key={item} className="flex items-center justify-between rounded-xl bg-white px-4 py-3">
                  <span className="text-xs font-black text-[#0f214f]">{item}</span>
                  <Lucide.CheckCircle2 className="h-4 w-4 text-emerald-600" />
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-[#bfd7ff] bg-[#eef6ff] px-4 py-3">
            <p className="text-sm font-black text-[#145cb7]">Outcome: demand captured, paid, fulfilled, and measured</p>
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
          <p className="text-xl font-black">Ready to systemize booking or ordering?</p>
          <p className="mt-2 text-sm font-semibold text-blue-100">Plan customer flow, payment, fulfillment, notifications, and revenue tracking together.</p>
        </div>
        <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-extrabold text-[#075edb]">
          Book Revenue Flow Call <Lucide.ArrowRight className="h-4 w-4" />
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

export default function BookingOrderAppClient() {
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
          ctaTitle="Plan Revenue App"
          ctaText="Create a booking or ordering flow with payments, fulfillment, updates, and reports."
          ctaButtonText="Book Planning Call"
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
