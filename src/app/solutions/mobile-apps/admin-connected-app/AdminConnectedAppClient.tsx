"use client";

import Link from "next/link";
import { useMemo, useState, type ReactNode } from "react";
import * as Lucide from "lucide-react";
import { SolutionCategoryTabs } from "@/components/solutions/shared/SolutionCategoryTabs";
import { SolutionSidebar } from "@/components/solutions/SolutionSidebar";
import type { SolutionPageData } from "@/data/solutions/types";

type LucideIcon = Lucide.LucideIcon;

const MODULE_NAME = "Admin Connected App";
const SIDEBAR_TITLE = "Admin Connected";
const SIDEBAR_SUBTITLE = "Mobile + Control Room";

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
  { id: "admin-visibility-gap", label: "Admin Visibility Gap", icon: Lucide.CircleAlert },
  { id: "role-access", label: "Role Access", icon: Lucide.ShieldCheck },
  { id: "operational-dashboard", label: "Operational Dashboard", icon: Lucide.LayoutDashboard },
  { id: "request-management", label: "Request Management", icon: Lucide.ListChecks },
  { id: "order-booking-control", label: "Order / Booking Control", icon: Lucide.Store },
  { id: "notifications-alerts", label: "Notifications & Alerts", icon: Lucide.Bell },
  { id: "reports", label: "Reports", icon: Lucide.BarChart3 },
  { id: "maintenance-flow", label: "Maintenance Flow", icon: Lucide.Settings },
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
    title: "Connect the mobile app to the control room that runs it.",
    intro:
      "A mobile app becomes a real business system when customer actions, staff actions, content, payments, requests, bookings, notifications, reports, and maintenance controls are connected to an admin dashboard.",
    cards: [
      c(Lucide.Smartphone, "Mobile Action Layer", "Customers or staff create bookings, orders, requests, payments, support tickets, updates, or field records in the app.", "App"),
      c(Lucide.LayoutDashboard, "Admin Control Room", "Admins see queues, records, owners, statuses, payments, exceptions, content, and reports in one place.", "Control"),
      c(Lucide.ShieldCheck, "Role-based Access", "Owners, managers, staff, support, finance, and content users see only what they should manage.", "Roles"),
      c(Lucide.BarChart3, "Operational Visibility", "The business can see workload, revenue, delays, customer activity, support volume, and quality signals.", "Insights"),
    ],
    metrics: [
      m("Roles", "Granular", "Access can match business responsibility."),
      m("Queues", "Live", "Requests, orders, bookings, and tasks stay visible."),
      m("Reports", "Built-in", "Activity becomes usable business data."),
      m("Control", "Central", "Daily changes do not require developer dependency."),
    ],
    flow: [
      f(Lucide.Smartphone, "App event", "A customer or team member creates a mobile action."),
      f(Lucide.Database, "Record created", "The backend stores owner, status, payment, and context."),
      f(Lucide.LayoutDashboard, "Admin acts", "The right role updates, assigns, approves, or resolves."),
      f(Lucide.BarChart3, "Business learns", "Reports show outcomes, delays, and next improvements."),
    ],
    implementationTitle: "The admin system should be designed with the app, not after it.",
    implementationText:
      "If the admin side is weak, the mobile app creates more work than it saves. HNX plans both sides as one operating layer.",
    implementationPoints: [
      "Map every app action to an admin owner and status.",
      "Define roles, permissions, and data visibility early.",
      "Build admin controls for daily changes and exceptions.",
      "Track reports that leaders can actually use.",
    ],
    visualTitle: "Mobile to admin map",
    visualRows: ["Customer/staff app action", "Backend record and validation", "Admin queue and owner", "Notification or status update", "Report and audit history"],
  },
  "admin-visibility-gap": {
    title: "The app fails operationally when admins cannot see what is happening.",
    intro:
      "Many apps look clean for customers but leave the business blind. Teams still manage orders, content, support, payments, and reports in scattered tools because the admin layer was not designed deeply.",
    cards: [
      c(Lucide.CircleAlert, "Hidden Demand", "Bookings, orders, requests, or tickets arrive but are not organized by priority, owner, due date, or status.", "Risk"),
      c(Lucide.Workflow, "Manual Operations", "Teams copy data between chats, spreadsheets, payment tools, and staff messages.", "Friction"),
      c(Lucide.UserX, "Permission Confusion", "Users get too much or too little access because roles were not mapped to responsibilities.", "Access"),
      c(Lucide.BarChart3, "Weak Reporting", "Leaders cannot see revenue, workload, delays, support volume, or customer activity clearly.", "Blind Spot"),
    ],
    metrics: [
      m("Tool spread", "High", "Operations happen across too many places."),
      m("Ownership", "Unclear", "Records get stuck when no one owns them."),
      m("Risk", "Rising", "Manual edits create errors and inconsistent customer updates."),
      m("Decision data", "Weak", "Performance is guessed instead of measured."),
    ],
    flow: [
      f(Lucide.Smartphone, "App creates demand", "Customers submit actions quickly."),
      f(Lucide.CircleAlert, "Team loses context", "Work is handled outside structured admin views."),
      f(Lucide.Clock3, "Status stalls", "Customers wait or ask for manual updates."),
      f(Lucide.LayoutDashboard, "Admin view fixes", "Records, statuses, owners, and reports are centralized."),
    ],
    implementationTitle: "Visibility gaps must be converted into dashboard requirements.",
    implementationText:
      "HNX identifies which records, statuses, fields, filters, alerts, and reports the business needs to operate confidently.",
    implementationPoints: [
      "List all records created by app users and staff.",
      "Define status stages for every operational workflow.",
      "Create owner, priority, due date, and exception rules.",
      "Replace manual status chasing with dashboard visibility.",
    ],
    visualTitle: "Visibility gap diagnosis",
    visualRows: ["Unassigned app records", "Manual payment or status checks", "No role boundaries", "No audit trail", "No leader dashboard"],
  },
  "role-access": {
    title: "Role access keeps control secure and practical.",
    intro:
      "Admin-connected apps need permission design for owners, managers, staff, support, finance, content editors, delivery teams, and customers. Good roles protect data and reduce operational confusion.",
    cards: [
      c(Lucide.ShieldCheck, "Permission Matrix", "Define who can view, create, edit, approve, cancel, refund, export, and configure each module.", "Security"),
      c(Lucide.Users, "Team Roles", "Owners, branch managers, operations staff, support agents, finance, and content users need different dashboard paths.", "Teams"),
      c(Lucide.LockKeyhole, "Data Boundaries", "Branch, location, customer group, staff team, or region rules can limit sensitive access.", "Privacy"),
      c(Lucide.FileText, "Audit History", "Critical changes such as refunds, cancellations, role edits, and content updates should be logged.", "Audit"),
    ],
    metrics: [
      m("Access levels", "Defined", "Every admin role has clear capabilities."),
      m("Audit", "Logged", "Important changes keep history."),
      m("Security", "Stronger", "Sensitive actions are restricted."),
      m("Training", "Easier", "Users see only relevant tools."),
    ],
    flow: [
      f(Lucide.Users, "Identify users", "List internal and external roles."),
      f(Lucide.ShieldCheck, "Assign rights", "Map view, edit, approve, delete, export, and configure powers."),
      f(Lucide.LockKeyhole, "Limit scope", "Apply branch, team, location, or data boundaries."),
      f(Lucide.FileText, "Log changes", "Record sensitive admin activity."),
    ],
    implementationTitle: "Permissions should follow business responsibility.",
    implementationText:
      "The goal is not to create complicated access rules. The goal is to make daily work clear and sensitive actions controlled.",
    implementationPoints: [
      "Write a role matrix before dashboard development starts.",
      "Separate ordinary staff actions from manager approvals.",
      "Restrict finance, refund, export, and role-management actions carefully.",
      "Review audit logs during support and dispute workflows.",
    ],
    visualTitle: "Role access model",
    visualRows: ["Owner and super admin", "Manager and branch admin", "Staff and fulfillment user", "Support and finance user", "Customer or external user"],
  },
  "operational-dashboard": {
    title: "The operational dashboard should show what needs attention now.",
    intro:
      "An admin dashboard is not a decorative report page. It should help teams act on live bookings, orders, tickets, payments, users, content, alerts, and exceptions quickly.",
    cards: [
      c(Lucide.LayoutDashboard, "Live Summary", "Open requests, pending payments, new users, delayed orders, unresolved tickets, and daily revenue stay visible.", "Overview"),
      c(Lucide.ListFilter, "Filters & Views", "Admins need filters by status, owner, date, branch, customer, priority, payment, and source.", "Findability"),
      c(Lucide.MousePointerClick, "Quick Actions", "Assign, approve, cancel, refund, notify, update status, or add notes without digging through screens.", "Action"),
      c(Lucide.Activity, "Exception Focus", "The dashboard should highlight overdue, failed, delayed, rejected, and high-priority records.", "Risk"),
    ],
    metrics: [
      m("Open items", "Live", "Teams know what is pending."),
      m("SLA health", "Visible", "Delayed work is easy to catch."),
      m("Revenue", "Current", "Paid, pending, and refunded values can be reviewed."),
      m("Workload", "Balanced", "Owners and queues show pressure points."),
    ],
    flow: [
      f(Lucide.LayoutDashboard, "Scan", "Admin reviews summary and urgent alerts."),
      f(Lucide.ListFilter, "Filter", "They focus by status, owner, payment, or branch."),
      f(Lucide.MousePointerClick, "Act", "They assign, update, approve, refund, or message."),
      f(Lucide.BarChart3, "Review", "Dashboard metrics update from real actions."),
    ],
    implementationTitle: "Dashboard design should prioritize decisions.",
    implementationText:
      "A good dashboard helps a manager decide what needs action, who owns it, and where the business is leaking time or money.",
    implementationPoints: [
      "Place urgent operational indicators above broad charts.",
      "Design filters around actual team workflows.",
      "Create quick actions for repeated admin tasks.",
      "Separate real-time operational views from long-term reports.",
    ],
    visualTitle: "Dashboard layout map",
    visualRows: ["Today summary", "Urgent exceptions", "Queue filters", "Record quick actions", "Revenue and workload snapshot"],
  },
  "request-management": {
    title: "Request management keeps support and service work accountable.",
    intro:
      "Mobile apps often create requests: support issues, service inquiries, document submissions, approvals, callbacks, complaints, and operational tasks. The admin side should make those requests trackable.",
    cards: [
      c(Lucide.ListChecks, "Request Types", "Support, service, refund, account, document, appointment, maintenance, and custom request types can have different fields.", "Structure"),
      c(Lucide.UserCheck, "Owner Assignment", "Requests should move to a person, team, branch, or queue with priority and due date.", "Ownership"),
      c(Lucide.MessageCircle, "Context Thread", "Comments, attachments, customer messages, and internal notes stay connected to the request.", "Context"),
      c(Lucide.Clock3, "Status Lifecycle", "New, assigned, in progress, waiting customer, resolved, reopened, and escalated states create clarity.", "Status"),
    ],
    metrics: [
      m("Request types", "Custom", "Fields match real operational needs."),
      m("Owner", "Required", "No request should sit unassigned."),
      m("SLA", "Tracked", "Response and resolution time can be measured."),
      m("History", "Complete", "Context stays attached for support review."),
    ],
    flow: [
      f(Lucide.Smartphone, "Customer submits", "The app captures request type and context."),
      f(Lucide.LayoutDashboard, "Admin triages", "Request enters the right queue."),
      f(Lucide.UserCheck, "Owner works", "Team updates status, notes, and response."),
      f(Lucide.CheckCircle2, "Close or reopen", "Resolution and customer confirmation are tracked."),
    ],
    implementationTitle: "Requests need structure before automation.",
    implementationText:
      "Automation works only when request categories, fields, owners, statuses, and escalation rules are designed clearly.",
    implementationPoints: [
      "Create request templates for repeated service and support needs.",
      "Attach files, messages, and records to the request history.",
      "Set priorities and due dates where response time matters.",
      "Report repeated request categories to improve the app and operations.",
    ],
    visualTitle: "Request workflow",
    visualRows: ["Request type and fields", "Queue and priority", "Owner assignment", "Conversation and files", "Resolution and reporting"],
  },
  "order-booking-control": {
    title: "Order and booking control should be manageable without developers.",
    intro:
      "Businesses need to update catalog, services, slots, pricing, stock, staff, locations, coupons, order stages, booking statuses, refunds, and cancellation rules without code changes for every small operation.",
    cards: [
      c(Lucide.Store, "Catalog Controls", "Admins can manage services, products, packages, add-ons, images, prices, and visibility.", "Catalog"),
      c(Lucide.CalendarCheck, "Booking Rules", "Slots, blackout times, capacity, staff, duration, location, and reschedule limits are controlled from admin.", "Booking"),
      c(Lucide.CreditCard, "Payment Controls", "Paid, failed, partial, refunded, balance due, and manual adjustment states are visible and controlled.", "Payment"),
      c(Lucide.RefreshCw, "Exception Handling", "Cancellations, refunds, delays, replacements, reschedules, and customer notes need defined admin paths.", "Exceptions"),
    ],
    metrics: [
      m("Catalog edits", "Admin", "Daily content can change without developer tickets."),
      m("Slot control", "Live", "Availability and capacity remain accurate."),
      m("Refund path", "Approved", "Sensitive actions require role control."),
      m("Customer status", "Synced", "App reflects admin changes."),
    ],
    flow: [
      f(Lucide.Settings, "Configure", "Admin sets rules, catalog, slots, and payment options."),
      f(Lucide.Smartphone, "Customer acts", "App only shows valid selections and states."),
      f(Lucide.LayoutDashboard, "Admin updates", "Team changes status, assignment, refund, or cancellation."),
      f(Lucide.Bell, "Customer informed", "Mobile app reflects the latest operational status."),
    ],
    implementationTitle: "Admin controls should remove routine developer dependency.",
    implementationText:
      "The business should be able to run the app day to day: update offerings, manage exceptions, and keep customers informed.",
    implementationPoints: [
      "Identify settings that change frequently and move them into admin controls.",
      "Protect sensitive actions with permissions and audit logs.",
      "Sync admin changes back to customer-facing app status quickly.",
      "Create clear workflows for cancellations, refunds, and reschedules.",
    ],
    visualTitle: "Control model",
    visualRows: ["Catalog and pricing", "Slots and capacity", "Payment and refund states", "Fulfillment statuses", "Customer notification sync"],
  },
  "notifications-alerts": {
    title: "Notifications and alerts keep teams and customers aligned.",
    intro:
      "An admin-connected app needs two notification layers: customer updates and internal operational alerts. Both should be useful, role-aware, and tied to real status changes.",
    cards: [
      c(Lucide.Bell, "Customer Updates", "Confirmations, payment status, order progress, booking reminders, support replies, and cancellation updates are sent from app events.", "Customer"),
      c(Lucide.AlertTriangle, "Internal Alerts", "New urgent records, overdue requests, failed payments, low stock, delayed orders, or review needs can alert staff.", "Team"),
      c(Lucide.Users, "Role-aware Delivery", "Only the right owner, manager, support user, or branch should get each internal alert.", "Roles"),
      c(Lucide.SlidersHorizontal, "Frequency Control", "Alert rules should prevent noise while making critical operational risks visible.", "Trust"),
    ],
    metrics: [
      m("Alert rules", "Defined", "Messages fire from operational events."),
      m("Team noise", "Lower", "Role targeting reduces irrelevant alerts."),
      m("Customer clarity", "Higher", "Status updates reduce manual follow-up."),
      m("Escalations", "Visible", "Overdue records can be surfaced quickly."),
    ],
    flow: [
      f(Lucide.Activity, "Event changes", "A record is created, delayed, paid, failed, approved, or completed."),
      f(Lucide.Settings, "Rule checks", "Notification logic checks role, urgency, and preference."),
      f(Lucide.Bell, "Message sends", "Customer or staff receives a relevant alert."),
      f(Lucide.BarChart3, "Impact tracked", "Open, action, opt-out, and resolution signals are reviewed."),
    ],
    implementationTitle: "Alerts should support operations, not create noise.",
    implementationText:
      "HNX designs notification rules around what someone can actually do after receiving the message.",
    implementationPoints: [
      "Tie every alert to a clear trigger and expected action.",
      "Separate transactional customer updates from promotional messages.",
      "Route internal alerts by owner, branch, role, and urgency.",
      "Review alert performance and opt-outs after launch.",
    ],
    visualTitle: "Alert routing map",
    visualRows: ["Customer status update", "Staff task alert", "Manager escalation", "Finance/payment alert", "Performance review"],
  },
  reports: {
    title: "Reports turn app activity into business decisions.",
    intro:
      "The admin dashboard should reveal what is working: revenue, customer growth, workload, status delays, support volume, staff performance, payment health, retention, and app usage.",
    cards: [
      c(Lucide.BarChart3, "Revenue Reports", "Orders, bookings, paid online, refunds, balances, average value, source, and daily trends are visible.", "Revenue"),
      c(Lucide.Activity, "Operations Reports", "Open work, overdue items, owner workload, cancellation reasons, and fulfillment time show bottlenecks.", "Operations"),
      c(Lucide.Users, "Customer Reports", "New users, repeat users, inactive users, support volume, and high-value customers guide service decisions.", "Customers"),
      c(Lucide.Smartphone, "App Usage Reports", "Feature usage, drop-offs, push actions, crash signals, and funnel movement guide product improvements.", "Product"),
    ],
    metrics: [
      m("Daily revenue", "Visible", "Leaders can compare real performance."),
      m("SLA health", "Tracked", "Response and completion quality is measurable."),
      m("Retention", "Cohorts", "Repeat behavior is visible over time."),
      m("Exports", "Controlled", "Sensitive data access follows permissions."),
    ],
    flow: [
      f(Lucide.Database, "Collect records", "App and admin actions create structured data."),
      f(Lucide.BarChart3, "Summarize", "Reports group records by revenue, status, user, and time."),
      f(Lucide.SearchCheck, "Diagnose", "Managers identify delays, gaps, and opportunities."),
      f(Lucide.TrendingUp, "Improve", "Teams adjust operations, content, staffing, and roadmap."),
    ],
    implementationTitle: "Reports should answer operational questions.",
    implementationText:
      "A useful report tells the business what needs attention, not only what happened. HNX maps reports to decisions before building dashboards.",
    implementationPoints: [
      "Define the decisions each report should support.",
      "Separate operational dashboards from monthly leadership views.",
      "Use filters by branch, owner, status, source, and date.",
      "Protect export and customer data access with role permissions.",
    ],
    visualTitle: "Report suite",
    visualRows: ["Revenue and payment health", "Requests and SLA", "Orders/bookings and fulfillment", "Customer retention", "App usage and improvement backlog"],
  },
  "maintenance-flow": {
    title: "Maintenance controls keep the app useful after launch.",
    intro:
      "After launch, the business needs to update content, pricing, statuses, notification templates, app settings, staff access, support categories, reports, and operational rules without creating avoidable development tickets.",
    cards: [
      c(Lucide.Settings, "Configurable Settings", "Business rules that change often should live in admin controls where safe.", "Settings"),
      c(Lucide.FileText, "Content Updates", "Banners, FAQs, policies, services, categories, help content, and templates can be managed with approval rules.", "Content"),
      c(Lucide.UserCog, "User Maintenance", "Add, suspend, role-change, reset access, and audit admin users through controlled workflows.", "Access"),
      c(Lucide.GitBranch, "Version Roadmap", "Feature requests, bugs, analytics insights, and operational changes should feed future app versions.", "Growth"),
    ],
    metrics: [
      m("Daily changes", "Admin", "Routine updates stay out of code deployments."),
      m("Access review", "Scheduled", "Old users and roles can be cleaned up."),
      m("Templates", "Managed", "Notification and help copy stays current."),
      m("Roadmap", "Active", "Maintenance turns into planned improvement."),
    ],
    flow: [
      f(Lucide.Settings, "Configure", "Admin updates allowed settings and content."),
      f(Lucide.CheckCircle2, "Approve", "Sensitive changes can require review."),
      f(Lucide.Activity, "Monitor", "Usage, errors, and support issues are watched."),
      f(Lucide.GitBranch, "Plan update", "Larger changes move to the product roadmap."),
    ],
    implementationTitle: "Maintenance design reduces long-term cost.",
    implementationText:
      "When admin controls are planned properly, the business can operate confidently while developers focus on meaningful product improvements.",
    implementationPoints: [
      "Identify what changes weekly, monthly, and rarely.",
      "Move safe repeat changes into admin settings.",
      "Use approvals and logs for sensitive configuration changes.",
      "Create an improvement backlog from analytics, support, and team feedback.",
    ],
    visualTitle: "Maintenance operating loop",
    visualRows: ["Admin settings", "Content and template updates", "Role and access review", "Monitoring and support signals", "Version roadmap planning"],
  },
  "final-cta": {
    title: "Build the app and admin dashboard as one connected operating layer.",
    intro:
      "HNX can help you create a mobile app connected to role access, operational queues, order/booking controls, notifications, reports, audit history, and maintenance workflows.",
    cards: [
      c(Lucide.SearchCheck, "Operations Mapping", "Define app actions, records, statuses, owners, roles, and exception paths.", "Strategy"),
      c(Lucide.LayoutDashboard, "Admin Dashboard", "Build queues, controls, filters, reports, and quick actions for real daily work.", "Control"),
      c(Lucide.ShieldCheck, "Roles & Audit", "Protect sensitive data and actions with permissions and logged history.", "Security"),
      c(Lucide.Rocket, "Launch & Maintain", "Train teams, monitor usage, update settings, and plan future improvements.", "Growth"),
    ],
    metrics: [
      m("Visibility", "Central", "App activity flows into admin records."),
      m("Control", "Role-based", "Teams get the access they need."),
      m("Reports", "Actionable", "Dashboards support decisions."),
      m("Maintenance", "Practical", "Routine updates become easier."),
    ],
    flow: [
      f(Lucide.SearchCheck, "Map", "Define users, workflows, records, roles, and reports."),
      f(Lucide.Palette, "Design", "Create app and admin screens around real tasks."),
      f(Lucide.Code2, "Build", "Develop mobile, backend, admin, notification, and analytics layers."),
      f(Lucide.Activity, "Operate", "Launch, monitor, maintain, and improve."),
    ],
    implementationTitle: "The best app is easy for the business to run.",
    implementationText:
      "Customer experience depends on internal control. HNX builds the front app and the admin layer as a connected system.",
    implementationPoints: [
      "Do not launch app features without matching admin workflows.",
      "Give every operational record an owner, status, and history.",
      "Build settings for routine changes and controls for sensitive actions.",
      "Use reports and support feedback to guide the next release.",
    ],
    visualTitle: "HNX admin-connected delivery",
    visualRows: ["Workflow and role discovery", "Mobile and admin UX", "Backend and API build", "Reports and notifications", "Launch, training, and maintenance"],
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
        <p className="text-xs font-black text-[#66728f]">Admin Control Room Preview</p>
      </div>
      <div className="grid gap-5 p-5 lg:grid-cols-[220px_1fr]">
        <aside className="rounded-[24px] bg-[#0f214f] p-5 text-white">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/12"><Lucide.LayoutDashboard className="h-5 w-5 text-cyan-200" /></span>
            <div><p className="text-sm font-black">Admin OS</p><p className="text-[11px] font-semibold text-blue-100">Connected app control</p></div>
          </div>
          <div className="mt-7 space-y-2">
            {["Dashboard", "Requests", "Orders", "Users", "Reports", "Settings"].map((item, index) => (
              <div key={item} className={cx("rounded-xl px-4 py-3 text-xs font-black", index === 0 ? "bg-white text-[#145cb7]" : "bg-white/8 text-blue-100")}>{item}</div>
            ))}
          </div>
        </aside>
        <div className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-3">
            {[["42", "Open items"], ["91%", "SLA health"], ["18%", "Revenue lift"]].map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-[#d7e1f2] bg-[#f8fbff] p-4">
                <p className="text-2xl font-black text-[#145cb7]">{value}</p>
                <p className="mt-1 text-xs font-bold text-[#66728f]">{label}</p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-[#d7e1f2] bg-[#f8fbff] p-4">
            <p className="text-sm font-black text-[#0f214f]">Current operations</p>
            <div className="mt-4 space-y-2">
              {["Support ticket assigned", "Payment refund needs approval", "Booking status updated", "Low stock alert", "Monthly report ready"].map((item) => (
                <div key={item} className="flex items-center justify-between rounded-xl bg-white px-4 py-3">
                  <span className="text-xs font-black text-[#0f214f]">{item}</span>
                  <Lucide.CheckCircle2 className="h-4 w-4 text-emerald-600" />
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-[#bfd7ff] bg-[#eef6ff] px-4 py-3">
            <p className="text-sm font-black text-[#145cb7]">Outcome: app activity routed into business control</p>
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
          <p className="text-xl font-black">Ready to connect your app to admin control?</p>
          <p className="mt-2 text-sm font-semibold text-blue-100">Plan roles, dashboards, queues, controls, reports, maintenance, and launch together.</p>
        </div>
        <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-extrabold text-[#075edb]">
          Book Admin App Call <Lucide.ArrowRight className="h-4 w-4" />
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

export default function AdminConnectedAppClient() {
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
          icon={Lucide.LayoutDashboard}
          items={knowledgeTabs}
          activeTab={activeTab}
          onTabChange={handleTabChange}
          ctaTitle="Connect App + Admin"
          ctaText="Create operational control for records, roles, requests, reports, and maintenance."
          ctaButtonText="Book Admin Call"
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
