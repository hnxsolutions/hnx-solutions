"use client";

import Link from "next/link";
import { useMemo, useState, type ReactNode } from "react";
import {
  ArrowRight,
  BarChart3,
  Bell,
  CalendarCheck,
  CheckCircle2,
  CircleAlert,
  CreditCard,
  Database,
  FileText,
  Home,
  LockKeyhole,
  Rocket,
  Send,
  ShieldCheck,
  Target,
  Users,
  WalletCards,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { SolutionCategoryTabs } from "@/components/solutions/shared/SolutionCategoryTabs";
import { SolutionSidebar } from "@/components/solutions/SolutionSidebar";
import { webSaasSolutions } from "@/data/solutions/webSaasSolutions";

const knowledgeTabs = [
  { id: "overview", label: "Overview", icon: Home },
  { id: "booking-chaos", label: "Booking Chaos", icon: CircleAlert },
  { id: "slot-availability", label: "Slot & Availability", icon: CalendarCheck },
  { id: "checkout-flow", label: "Checkout Flow", icon: WalletCards },
  { id: "payment-verification", label: "Payment Verification", icon: ShieldCheck },
  { id: "notifications-reminders", label: "Notifications & Reminders", icon: Bell },
  { id: "admin-revenue", label: "Admin Revenue", icon: BarChart3 },
  { id: "security-reliability", label: "Security & Reliability", icon: LockKeyhole },
  { id: "launch-roadmap", label: "Launch Roadmap", icon: Rocket },
  { id: "final-cta", label: "Final CTA", icon: ArrowRight }
] as const;

type TabId = (typeof knowledgeTabs)[number]["id"];

type CardItem = {
  icon: LucideIcon;
  title: string;
  text: string;
  tag: string;
};

type MetricItem = {
  label: string;
  value: string;
  note: string;
};

type SectionItem = {
  id: TabId;
  eyebrow: string;
  title: string;
  intro: string;
  cards: CardItem[];
  metrics: MetricItem[];
  flow: CardItem[];
  panelTitle: string;
  panelText: string;
  panelPoints: string[];
};

const sections: SectionItem[] = [
  {
    id: "overview",
    eyebrow: "Booking & Payment System",
    title: "Build a booking and payment flow users can trust from slot selection to confirmation.",
    intro: "A booking system should manage availability, pricing, checkout, payment status, confirmations, reminders, refunds, cancellations, admin visibility, and revenue reporting.",
    cards: [
    { icon: Target, title: "Availability Engine", text: "Manage slots, capacity, calendar rules, resource limits, and closures.", tag: "Slots" },
    { icon: Workflow, title: "Checkout Flow", text: "Guide users from selection to details, payment, and confirmation.", tag: "UX" },
    { icon: Database, title: "Payment Verification", text: "Track pending, success, failed, refunded, and manual review states.", tag: "Payments" },
    { icon: ShieldCheck, title: "Admin Revenue", text: "Show bookings, occupancy, refunds, failed payments, and revenue.", tag: "Admin" }
  ],
    metrics: [
    { label: "Bookings", value: "1.2K", note: "Confirmed this month" },
    { label: "Revenue", value: "\u20b912.6L", note: "Collected through checkout" },
    { label: "Occupancy", value: "78%", note: "Slot utilization" },
    { label: "Failed Payments", value: "27", note: "Need review" }
  ],
    flow: [
    { icon: CalendarCheck, title: "Select Slot", text: "User chooses available date, time, service, or resource.", tag: "Slot" },
    { icon: FileText, title: "Enter Details", text: "User provides required booking details.", tag: "Details" },
    { icon: WalletCards, title: "Checkout", text: "Price, taxes, coupons, and terms are shown.", tag: "Checkout" },
    { icon: CreditCard, title: "Payment", text: "Gateway handles payment and returns status.", tag: "Pay" },
    { icon: ShieldCheck, title: "Verify", text: "System confirms payment before booking.", tag: "Verify" },
    { icon: Bell, title: "Remind", text: "User and admin get confirmations and reminders.", tag: "Notify" }
  ],
    panelTitle: "Booking trust depends on state control.",
    panelText: "A reliable booking flow keeps availability, payment, confirmation, and reminders synchronized.",
    panelPoints: ["Prevent stale or duplicate booking slots.", "Confirm bookings only after payment verification.", "Show clear receipts and next steps.", "Give admins revenue and exception visibility."],
  },
  {
    id: "booking-chaos",
    eyebrow: "Chapter",
    title: "Bookings become risky when availability, payments, and confirmations are disconnected.",
    intro: "A weak booking system creates double bookings, unclear slots, failed payment confusion, manual verification, missed reminders, and poor revenue visibility.",
    cards: [
    { icon: Target, title: "State Rules", text: "Define what happens at each booking and payment state.", tag: "State" },
    { icon: Workflow, title: "User Clarity", text: "Show users status, price, terms, and next steps clearly.", tag: "UX" },
    { icon: Database, title: "Admin Review", text: "Surface failed, pending, and abnormal records.", tag: "Admin" },
    { icon: ShieldCheck, title: "Automation", text: "Send confirmations, reminders, receipts, and alerts.", tag: "Notify" },
    { icon: Bell, title: "Policy Logic", text: "Handle cancellation, refund, reschedule, and no-show rules.", tag: "Policy" },
    { icon: BarChart3, title: "Reports", text: "Track bookings, occupancy, revenue, and conversion.", tag: "Reports" }
  ],
    metrics: [

  ],
    flow: [

  ],
    panelTitle: "Booking flows should reduce doubt.",
    panelText: "The user and admin should always know the current booking state.",
    panelPoints: ["Make status visible to users and admins.", "Reduce manual verification.", "Handle failed and pending payments safely.", "Report revenue and exceptions clearly."],
  },
  {
    id: "slot-availability",
    eyebrow: "Chapter",
    title: "Slot and availability rules protect capacity and user trust.",
    intro: "The system needs rules for dates, resources, capacity, closures, buffers, waitlists, and booking windows.",
    cards: [
    { icon: Target, title: "State Rules", text: "Define what happens at each booking and payment state.", tag: "State" },
    { icon: Workflow, title: "User Clarity", text: "Show users status, price, terms, and next steps clearly.", tag: "UX" },
    { icon: Database, title: "Admin Review", text: "Surface failed, pending, and abnormal records.", tag: "Admin" },
    { icon: ShieldCheck, title: "Automation", text: "Send confirmations, reminders, receipts, and alerts.", tag: "Notify" },
    { icon: Bell, title: "Policy Logic", text: "Handle cancellation, refund, reschedule, and no-show rules.", tag: "Policy" },
    { icon: BarChart3, title: "Reports", text: "Track bookings, occupancy, revenue, and conversion.", tag: "Reports" }
  ],
    metrics: [

  ],
    flow: [
    { icon: CalendarCheck, title: "Choose", text: "User selects booking option.", tag: "Step" },
    { icon: WalletCards, title: "Pay", text: "User completes checkout.", tag: "Payment" },
    { icon: ShieldCheck, title: "Verify", text: "System confirms status.", tag: "Trust" },
    { icon: Bell, title: "Notify", text: "Confirmation and reminders go out.", tag: "Notify" }
  ],
    panelTitle: "Booking flows should reduce doubt.",
    panelText: "The user and admin should always know the current booking state.",
    panelPoints: ["Make status visible to users and admins.", "Reduce manual verification.", "Handle failed and pending payments safely.", "Report revenue and exceptions clearly."],
  },
  {
    id: "checkout-flow",
    eyebrow: "Chapter",
    title: "Checkout flow should be short, clear, and mobile-first.",
    intro: "Users need to understand what they are booking, what they are paying, and what happens after payment.",
    cards: [
    { icon: Target, title: "State Rules", text: "Define what happens at each booking and payment state.", tag: "State" },
    { icon: Workflow, title: "User Clarity", text: "Show users status, price, terms, and next steps clearly.", tag: "UX" },
    { icon: Database, title: "Admin Review", text: "Surface failed, pending, and abnormal records.", tag: "Admin" },
    { icon: ShieldCheck, title: "Automation", text: "Send confirmations, reminders, receipts, and alerts.", tag: "Notify" },
    { icon: Bell, title: "Policy Logic", text: "Handle cancellation, refund, reschedule, and no-show rules.", tag: "Policy" },
    { icon: BarChart3, title: "Reports", text: "Track bookings, occupancy, revenue, and conversion.", tag: "Reports" }
  ],
    metrics: [

  ],
    flow: [
    { icon: CalendarCheck, title: "Choose", text: "User selects booking option.", tag: "Step" },
    { icon: WalletCards, title: "Pay", text: "User completes checkout.", tag: "Payment" },
    { icon: ShieldCheck, title: "Verify", text: "System confirms status.", tag: "Trust" },
    { icon: Bell, title: "Notify", text: "Confirmation and reminders go out.", tag: "Notify" }
  ],
    panelTitle: "Booking flows should reduce doubt.",
    panelText: "The user and admin should always know the current booking state.",
    panelPoints: ["Make status visible to users and admins.", "Reduce manual verification.", "Handle failed and pending payments safely.", "Report revenue and exceptions clearly."],
  },
  {
    id: "payment-verification",
    eyebrow: "Chapter",
    title: "Payment verification decides when a booking becomes final.",
    intro: "Pending, success, failed, refunded, expired, and manual review states must be handled safely.",
    cards: [
    { icon: Target, title: "State Rules", text: "Define what happens at each booking and payment state.", tag: "State" },
    { icon: Workflow, title: "User Clarity", text: "Show users status, price, terms, and next steps clearly.", tag: "UX" },
    { icon: Database, title: "Admin Review", text: "Surface failed, pending, and abnormal records.", tag: "Admin" },
    { icon: ShieldCheck, title: "Automation", text: "Send confirmations, reminders, receipts, and alerts.", tag: "Notify" },
    { icon: Bell, title: "Policy Logic", text: "Handle cancellation, refund, reschedule, and no-show rules.", tag: "Policy" },
    { icon: BarChart3, title: "Reports", text: "Track bookings, occupancy, revenue, and conversion.", tag: "Reports" }
  ],
    metrics: [

  ],
    flow: [
    { icon: CalendarCheck, title: "Choose", text: "User selects booking option.", tag: "Step" },
    { icon: WalletCards, title: "Pay", text: "User completes checkout.", tag: "Payment" },
    { icon: ShieldCheck, title: "Verify", text: "System confirms status.", tag: "Trust" },
    { icon: Bell, title: "Notify", text: "Confirmation and reminders go out.", tag: "Notify" }
  ],
    panelTitle: "Booking flows should reduce doubt.",
    panelText: "The user and admin should always know the current booking state.",
    panelPoints: ["Make status visible to users and admins.", "Reduce manual verification.", "Handle failed and pending payments safely.", "Report revenue and exceptions clearly."],
  },
  {
    id: "notifications-reminders",
    eyebrow: "Chapter",
    title: "Notifications and reminders reduce missed bookings and support pressure.",
    intro: "Confirmations, receipts, payment updates, cancellation notices, and reminders should be automated.",
    cards: [
    { icon: Target, title: "State Rules", text: "Define what happens at each booking and payment state.", tag: "State" },
    { icon: Workflow, title: "User Clarity", text: "Show users status, price, terms, and next steps clearly.", tag: "UX" },
    { icon: Database, title: "Admin Review", text: "Surface failed, pending, and abnormal records.", tag: "Admin" },
    { icon: ShieldCheck, title: "Automation", text: "Send confirmations, reminders, receipts, and alerts.", tag: "Notify" },
    { icon: Bell, title: "Policy Logic", text: "Handle cancellation, refund, reschedule, and no-show rules.", tag: "Policy" },
    { icon: BarChart3, title: "Reports", text: "Track bookings, occupancy, revenue, and conversion.", tag: "Reports" }
  ],
    metrics: [

  ],
    flow: [

  ],
    panelTitle: "Booking flows should reduce doubt.",
    panelText: "The user and admin should always know the current booking state.",
    panelPoints: ["Make status visible to users and admins.", "Reduce manual verification.", "Handle failed and pending payments safely.", "Report revenue and exceptions clearly."],
  },
  {
    id: "admin-revenue",
    eyebrow: "Chapter",
    title: "Admin revenue view gives owners control over bookings and money.",
    intro: "Admins need bookings, payments, refunds, occupancy, revenue, cancellations, and exceptions in one place.",
    cards: [
    { icon: Target, title: "State Rules", text: "Define what happens at each booking and payment state.", tag: "State" },
    { icon: Workflow, title: "User Clarity", text: "Show users status, price, terms, and next steps clearly.", tag: "UX" },
    { icon: Database, title: "Admin Review", text: "Surface failed, pending, and abnormal records.", tag: "Admin" },
    { icon: ShieldCheck, title: "Automation", text: "Send confirmations, reminders, receipts, and alerts.", tag: "Notify" },
    { icon: Bell, title: "Policy Logic", text: "Handle cancellation, refund, reschedule, and no-show rules.", tag: "Policy" },
    { icon: BarChart3, title: "Reports", text: "Track bookings, occupancy, revenue, and conversion.", tag: "Reports" }
  ],
    metrics: [
    { label: "Bookings", value: "1.2K", note: "Confirmed this month" },
    { label: "Revenue", value: "\u20b912.6L", note: "Monthly booking revenue" },
    { label: "Occupancy", value: "78%", note: "Slot utilization" },
    { label: "Failures", value: "27", note: "Payment exceptions" }
  ],
    flow: [

  ],
    panelTitle: "Booking flows should reduce doubt.",
    panelText: "The user and admin should always know the current booking state.",
    panelPoints: ["Make status visible to users and admins.", "Reduce manual verification.", "Handle failed and pending payments safely.", "Report revenue and exceptions clearly."],
  },
  {
    id: "security-reliability",
    eyebrow: "Chapter",
    title: "Security and reliability prevent booking disputes.",
    intro: "The system needs safe payment handling, audit history, access control, and reliable state updates.",
    cards: [
    { icon: Target, title: "State Rules", text: "Define what happens at each booking and payment state.", tag: "State" },
    { icon: Workflow, title: "User Clarity", text: "Show users status, price, terms, and next steps clearly.", tag: "UX" },
    { icon: Database, title: "Admin Review", text: "Surface failed, pending, and abnormal records.", tag: "Admin" },
    { icon: ShieldCheck, title: "Automation", text: "Send confirmations, reminders, receipts, and alerts.", tag: "Notify" },
    { icon: Bell, title: "Policy Logic", text: "Handle cancellation, refund, reschedule, and no-show rules.", tag: "Policy" },
    { icon: BarChart3, title: "Reports", text: "Track bookings, occupancy, revenue, and conversion.", tag: "Reports" }
  ],
    metrics: [

  ],
    flow: [

  ],
    panelTitle: "Booking flows should reduce doubt.",
    panelText: "The user and admin should always know the current booking state.",
    panelPoints: ["Make status visible to users and admins.", "Reduce manual verification.", "Handle failed and pending payments safely.", "Report revenue and exceptions clearly."],
  },
  {
    id: "launch-roadmap",
    eyebrow: "Chapter",
    title: "Launch roadmap makes booking operations ready before users arrive.",
    intro: "QA must test slots, payments, confirmations, reminders, refunds, and admin exception handling.",
    cards: [
    { icon: Target, title: "State Rules", text: "Define what happens at each booking and payment state.", tag: "State" },
    { icon: Workflow, title: "User Clarity", text: "Show users status, price, terms, and next steps clearly.", tag: "UX" },
    { icon: Database, title: "Admin Review", text: "Surface failed, pending, and abnormal records.", tag: "Admin" },
    { icon: ShieldCheck, title: "Automation", text: "Send confirmations, reminders, receipts, and alerts.", tag: "Notify" },
    { icon: Bell, title: "Policy Logic", text: "Handle cancellation, refund, reschedule, and no-show rules.", tag: "Policy" },
    { icon: BarChart3, title: "Reports", text: "Track bookings, occupancy, revenue, and conversion.", tag: "Reports" }
  ],
    metrics: [
    { label: "Bookings", value: "1.2K", note: "Confirmed this month" },
    { label: "Revenue", value: "\u20b912.6L", note: "Monthly booking revenue" },
    { label: "Occupancy", value: "78%", note: "Slot utilization" },
    { label: "Failures", value: "27", note: "Payment exceptions" }
  ],
    flow: [

  ],
    panelTitle: "Booking flows should reduce doubt.",
    panelText: "The user and admin should always know the current booking state.",
    panelPoints: ["Make status visible to users and admins.", "Reduce manual verification.", "Handle failed and pending payments safely.", "Report revenue and exceptions clearly."],
  },
  {
    id: "final-cta",
    eyebrow: "Final CTA",
    title: "Build a booking and payment system that feels fast, safe, and reliable.",
    intro: "HNX can create booking and payment systems for appointments, events, turfs, services, classes, rentals, consultations, orders, and reservations.",
    cards: [
    { icon: Target, title: "State Rules", text: "Define what happens at each booking and payment state.", tag: "State" },
    { icon: Workflow, title: "User Clarity", text: "Show users status, price, terms, and next steps clearly.", tag: "UX" },
    { icon: Database, title: "Admin Review", text: "Surface failed, pending, and abnormal records.", tag: "Admin" },
    { icon: ShieldCheck, title: "Automation", text: "Send confirmations, reminders, receipts, and alerts.", tag: "Notify" },
    { icon: Bell, title: "Policy Logic", text: "Handle cancellation, refund, reschedule, and no-show rules.", tag: "Policy" },
    { icon: BarChart3, title: "Reports", text: "Track bookings, occupancy, revenue, and conversion.", tag: "Reports" }
  ],
    metrics: [

  ],
    flow: [

  ],
    panelTitle: "Booking flows should reduce doubt.",
    panelText: "The user and admin should always know the current booking state.",
    panelPoints: ["Make status visible to users and admins.", "Reduce manual verification.", "Handle failed and pending payments safely.", "Report revenue and exceptions clearly."],
  }
];

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

    window.scrollTo({
      top: Math.max(top, 0),
      behavior: "smooth",
    });
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


function SecondaryButton({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center justify-center gap-2 rounded-full border border-[#c8d7ea] bg-white px-6 py-3 text-sm font-extrabold text-[#0f214f] shadow-[0_12px_28px_rgba(15,23,42,0.06)] transition hover:border-[#145cb7] hover:text-[#145cb7]"
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </button>
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

function Breadcrumb({
  currentLabel,
}: {
  currentLabel: string;
}) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-3 text-sm font-extrabold">
      <Link href="/solutions" className="text-[#0891b2] transition hover:text-[#145cb7]">
        Solutions
      </Link>
      <span className="text-[#9aa7bd]">/</span>
      <Link href="/solutions/web-saas" className="text-[#0891b2] transition hover:text-[#145cb7]">
        Web &amp; SaaS
      </Link>
      <span className="text-[#9aa7bd]">/</span>
      <span className="text-[#334766]">Booking & Payment System</span>
      <span className="text-[#9aa7bd]">/</span>
      <span className="text-[#0f214f]">{currentLabel}</span>
    </nav>
  );
}

function ChapterShell({
  eyebrow,
  title,
  intro,
  currentLabel,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  currentLabel: string;
  children: ReactNode;
}) {
  return (
    <section className="border-b border-[#d7e1f2] bg-white px-5 py-10 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
      <Breadcrumb currentLabel={currentLabel} />
      <div className="max-w-5xl">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-[#145cb7]">{eyebrow}</p>
        <h1 className="mt-5 text-5xl font-black leading-[1.02] tracking-[-0.06em] text-[#0f214f] sm:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-4xl text-base font-semibold leading-8 text-[#52627d] sm:text-lg">
          {intro}
        </p>
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
            <span className="rounded-full bg-[#eef6ff] px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-[#145cb7]">
              {item.tag}
            </span>
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

function SplitPanel({
  title,
  text,
  points,
}: {
  title: string;
  text: string;
  points: string[];
}) {
  return (
    <div className="grid gap-6 rounded-[28px] border border-[#d7e1f2] bg-[#f8fbff] p-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
      <div>
        <h2 className="text-2xl font-black tracking-[-0.035em] text-[#0f214f]">{title}</h2>
        <p className="mt-4 text-sm font-semibold leading-7 text-[#52627d]">{text}</p>
        <div className="mt-5 space-y-3">
          {points.map((point) => (
            <div key={point} className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
              <p className="text-sm font-semibold leading-6 text-[#465374]">{point}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-[28px] border border-[#d7e1f2] bg-white p-6">
        <p className="text-lg font-black text-[#0f214f]">Operating map</p>
        <div className="mt-5 space-y-3">
          {points.map((point, index) => (
            <div key={point} className="flex items-center gap-3 rounded-2xl bg-[#f8fbff] p-4">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-[#eef6ff] text-sm font-black text-[#145cb7]">
                {index + 1}
              </span>
              <p className="text-sm font-semibold leading-6 text-[#52627d]">{point}</p>
            </div>
          ))}
        </div>
      </div>
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
        <p className="text-xs font-black text-[#66728f]">Booking & Payment Preview</p>
      </div>

      <div className="grid gap-5 p-5 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[24px] bg-gradient-to-br from-[#0f214f] via-[#145cb7] to-[#19b7c5] p-6 text-white">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-100">Reservation Revenue System</p>
          <h3 className="mt-4 text-4xl font-black tracking-[-0.05em]">Turn availability into confirmed paid bookings.</h3>
          <p className="mt-4 text-sm font-semibold leading-7 text-blue-100">
            Slots, checkout, payments, verification, reminders, and admin revenue work as one reliable flow.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {["Slots", "Checkout", "Payments", "Reminders"].map((item) => (
              <p key={item} className="rounded-xl bg-white/12 px-4 py-3 text-xs font-black">{item}</p>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ["1.2K", "Bookings"], ["\u20b912.6L", "Revenue"], ["78%", "Occupancy"]
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-[#d7e1f2] bg-[#f8fbff] p-4">
                <p className="text-2xl font-black text-[#145cb7]">{value}</p>
                <p className="mt-1 text-xs font-bold text-[#66728f]">{label}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-[#d7e1f2] bg-[#f8fbff] p-4">
            <p className="text-sm font-black text-[#0f214f]">Core modules</p>
            <div className="mt-4 space-y-2">
              {["Slot selection", "Checkout details", "Payment verification", "Booking reminders", "Revenue dashboard"].map((item) => (
                <div key={item} className="flex items-center justify-between rounded-xl bg-white px-4 py-3">
                  <span className="text-xs font-black text-[#0f214f]">{item}</span>
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-[#bfd7ff] bg-[#eef6ff] px-4 py-3">
            <p className="text-sm font-black text-[#145cb7]">Outcome: available slot → paid booking → confirmation → revenue visibility</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FlowVisual({ items }: { items: CardItem[] }) {
  return (
    <div className="overflow-x-auto rounded-[28px] border border-[#d7e1f2] bg-[#f8fbff] p-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <div className="flex min-w-max items-stretch gap-4">
        {items.map((step, index) => {
          const Icon = step.icon;

          return (
            <div key={step.title} className="relative flex w-[235px] shrink-0">
              <div className="flex min-h-[250px] w-full flex-col rounded-[24px] border border-[#d7e1f2] bg-white p-5 shadow-[0_18px_45px_rgba(15,23,42,0.045)]">
                <div className="flex items-start justify-between gap-4">
                  <IconShell icon={Icon} className="h-12 w-12" />
                  <span className="rounded-full bg-[#eef6ff] px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-[#145cb7]">
                    Step {index + 1}
                  </span>
                </div>
                <p className="mt-5 text-xl font-black tracking-[-0.03em] text-[#0f214f]">{step.title}</p>
                <p className="mt-3 text-sm font-semibold leading-6 text-[#52627d]">{step.text}</p>
              </div>

              {index < items.length - 1 ? (
                <span className="absolute -right-6 top-1/2 z-20 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-[#bfd7ff] bg-white text-[#2378ff] shadow-[0_10px_20px_rgba(15,23,42,0.08)] md:flex">
                  <ArrowRight className="h-4 w-4" />
                </span>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function AnalyticsDashboard({ metrics }: { metrics: MetricItem[] }) {
  return (
    <div className="rounded-[28px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.04)]">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        <div>
          <p className="text-xl font-black text-[#0f214f]">Booking Revenue View</p>
          <p className="mt-1 text-sm font-semibold text-[#66728f]">Confirmed bookings, payment states, occupancy, reminders, refunds, and revenue in one view.</p>
        </div>
        <span className="rounded-full bg-[#eef6ff] px-4 py-2 text-xs font-black text-[#145cb7]">Revenue ready</span>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {metrics.slice(0, 4).map((metric) => (
          <MetricCard key={metric.label} metric={metric} />
        ))}
      </div>
    </div>
  );
}

function ContentSection({
  section,
  activeLabel,
  setActiveTab,
}: {
  section: SectionItem;
  activeLabel: string;
  setActiveTab: (tab: TabId) => void;
}) {
  const sectionIndex = knowledgeTabs.findIndex((tab) => tab.id === section.id);
  const nextTab = knowledgeTabs[sectionIndex + 1]?.id;

  return (
    <ChapterShell eyebrow={section.eyebrow} title={section.title} intro={section.intro} currentLabel={activeLabel}>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {section.cards.slice(0, 4).map((item) => (
          <KnowledgeCard key={item.title} item={item} />
        ))}
      </div>

      {section.id === "overview" ? <PreviewWindow /> : null}

      {section.flow.length ? <FlowVisual items={section.flow} /> : null}

      {section.cards.length > 4 ? (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {section.cards.slice(4).map((item) => (
            <KnowledgeCard key={item.title} item={item} />
          ))}
        </div>
      ) : null}

      {section.metrics.length ? <AnalyticsDashboard metrics={section.metrics} /> : null}

      {section.panelTitle ? (
        <SplitPanel
          title={section.panelTitle}
          text={section.panelText}
          points={section.panelPoints}
        />
      ) : null}

      {nextTab ? (
        <div className="flex flex-col gap-3 rounded-[28px] bg-[#075edb] p-6 text-white sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xl font-black">Continue the journey.</p>
            <p className="mt-2 text-sm font-semibold text-blue-100">
              Open the next knowledge chapter to understand the complete solution system.
            </p>
          </div>
          <SecondaryButton onClick={() => setActiveTab(nextTab)}>Open Next Chapter</SecondaryButton>
        </div>
      ) : null}
    </ChapterShell>
  );
}

function renderSection(activeTab: TabId, activeLabel: string, setActiveTab: (tab: TabId) => void) {
  const section = sections.find((item) => item.id === activeTab) ?? sections[0];

  return <ContentSection section={section} activeLabel={activeLabel} setActiveTab={setActiveTab} />;
}

export default function BookingPaymentSystemClient() {
  const [activeTab, setActiveTab] = useState<TabId>(() => {
    if (typeof window === "undefined") {
      return "overview";
    }

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
      <SolutionCategoryTabs category="web-saas" solutions={webSaasSolutions} />
      <MobileTabs activeTab={activeTab} onTabChange={handleTabChange} />

      <div className="mx-auto flex max-w-[min(92vw,1440px)] pt-14">
        <SolutionSidebar<TabId>
          title="Booking & Payment"
          subtitle="Checkout + Revenue Flow"
          icon={CreditCard}
          items={knowledgeTabs}
          activeTab={activeTab}
          onTabChange={handleTabChange}
          ctaTitle="Plan Booking Flow"
          ctaText="Create a reliable booking, checkout, payment verification, reminder, and revenue management system."
          ctaButtonText="Plan Booking System"
          ctaHref="/contact"
        />

        <div id="knowledge-content" className="min-w-0 flex-1">
          <div className="mb-5 rounded-2xl border border-[#d7e1f2] bg-white px-4 py-3 shadow-[0_10px_24px_rgba(15,23,42,0.04)] lg:hidden">
            <p className="text-xs font-bold text-[#66728f]">Booking & Payment</p>
            <p className="text-sm font-black text-[#0f214f]">{activeLabel}</p>
          </div>

          {renderSection(activeTab, activeLabel, handleTabChange)}
        </div>
      </div>
    </main>
  );
}
