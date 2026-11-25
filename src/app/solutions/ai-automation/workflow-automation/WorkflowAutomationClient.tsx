"use client";

import Link from "next/link";
import { useMemo, useState, type ReactNode } from "react";
import * as Lucide from "lucide-react";
import { SolutionSidebar } from "@/components/solutions/SolutionSidebar";
import { SolutionCategoryTabs } from "@/components/solutions/shared/SolutionCategoryTabs";
import type { SolutionPageData } from "@/data/solutions/types";

type LucideIcon = Lucide.LucideIcon;
type CardCopy = { title: string; text: string; tag: string };
type MetricItem = { label: string; value: string; note: string };
type FlowItem = { icon: LucideIcon; title: string; text: string };
type SectionContent = {
  title: string;
  intro: string;
  cards: CardCopy[];
  metrics: MetricItem[];
  flow: FlowItem[];
  implementationTitle: string;
  implementationText: string;
  implementationPoints: string[];
  visualTitle: string;
  visualRows: string[];
};

const MODULE_NAME = "Workflow Automation";
const SIDEBAR_TITLE = "Workflow Automation";
const SIDEBAR_SUBTITLE = "Trigger to task system";

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

const aiAutomationSolutions: readonly SolutionPageData[] = [
  tabSolution("automation-strategy", "Automation Strategy", "/solutions/ai-automation/automation-strategy", "Sparkles"),
  tabSolution("workflow-automation", "Workflow Automation", "/solutions/ai-automation/workflow-automation", "Workflow"),
  tabSolution("ai-sales-agent", "AI Sales Agent", "/solutions/ai-automation/ai-sales-agent", "Bot"),
  tabSolution("ai-support-agent", "AI Support Agent", "/solutions/ai-automation/ai-support-agent", "Headphones"),
  tabSolution("whatsapp-email-automation", "WhatsApp / Email Automation", "/solutions/ai-automation/whatsapp-email-automation", "MessageCircle"),
  tabSolution("lead-scoring-crm-automation", "Lead Scoring & CRM Automation", "/solutions/ai-automation/lead-scoring-crm-automation", "BarChart3"),
  tabSolution("document-report-automation", "Document / Report Automation", "/solutions/ai-automation/document-report-automation", "FileText"),
  tabSolution("automation-analytics-improvements", "Automation Analytics & Improvements", "/solutions/ai-automation/automation-analytics-improvements", "Activity"),
];

const knowledgeTabs = [
  { id: "overview", label: "Overview", icon: Lucide.Home },
  { id: "workflow-bottlenecks", label: "Workflow Bottlenecks", icon: Lucide.CircleAlert },
  { id: "trigger-system", label: "Trigger System", icon: Lucide.Sparkles },
  { id: "approval-rules", label: "Approval Rules", icon: Lucide.ShieldCheck },
  { id: "task-assignment", label: "Task Assignment", icon: Lucide.Users },
  { id: "status-tracking", label: "Status Tracking", icon: Lucide.Activity },
  { id: "notifications", label: "Notifications", icon: Lucide.Bell },
  { id: "exception-handling", label: "Exception Handling", icon: Lucide.CircleAlert },
  { id: "workflow-dashboard", label: "Workflow Dashboard", icon: Lucide.LayoutDashboard },
  { id: "final-cta", label: "Final CTA", icon: Lucide.ArrowRight },
] as const;

type TabId = (typeof knowledgeTabs)[number]["id"];

const cardIcons: LucideIcon[] = [Lucide.Workflow, Lucide.Settings, Lucide.ShieldCheck, Lucide.Users, Lucide.LayoutDashboard, Lucide.BarChart3];

const sections: Record<TabId, SectionContent> = {
  overview: {
    title: "Automate business workflows from first trigger to final status.",
    intro: "Workflow automation turns repeated operational steps into a controlled system. HNX maps triggers, conditions, approvals, task owners, notifications, exceptions, dashboards, and audit history so work moves without depending on memory or manual chasing.",
    cards: [
      { title: "Trigger-to-action Design", text: "Every workflow starts with a clear event such as a new lead, form submission, payment update, approval request, support issue, or schedule change.", tag: "Trigger" },
      { title: "Approval Logic", text: "Rules define who must review, when auto-approval is safe, when a manager is needed, and how rejected items return for correction.", tag: "Approval" },
      { title: "Task Ownership", text: "The system assigns work to the right person or team with due dates, priority, context, and escalation paths.", tag: "Routing" },
      { title: "Status Visibility", text: "Teams can see what is pending, completed, blocked, overdue, rejected, or waiting on a customer or vendor.", tag: "Status" },
      { title: "Exception Controls", text: "Edge cases such as missing data, failed integrations, duplicate requests, and policy conflicts are routed for human review.", tag: "Control" },
      { title: "Audit and Reporting", text: "Each workflow action creates a trackable history so managers can review cycle time, bottlenecks, owner performance, and compliance.", tag: "Insight" },
    ],
    metrics: [
      { label: "Cycle time", value: "-40%", note: "Common target after removing manual handoffs." },
      { label: "Ownership", value: "Clear", note: "Each task has a responsible role and due state." },
      { label: "Exceptions", value: "Visible", note: "Blocked items are routed instead of hidden." },
      { label: "Audit trail", value: "Complete", note: "Every status change can be reviewed." },
    ],
    flow: [
      { icon: Lucide.Sparkles, title: "Trigger", text: "A form, CRM update, payment event, message, or schedule creates the workflow." },
      { icon: Lucide.ShieldCheck, title: "Decide", text: "Rules check ownership, eligibility, priority, approval needs, and required data." },
      { icon: Lucide.Users, title: "Assign", text: "Tasks move to the right person with context, deadline, and next action." },
      { icon: Lucide.LayoutDashboard, title: "Track", text: "Dashboards show progress, delays, exceptions, and completion quality." },
    ],
    implementationTitle: "Workflow automation is operations design, not just task automation.",
    implementationText: "A reliable workflow needs triggers, rules, human control, integration checks, and clear reporting. HNX builds the automation around how the business actually approves, serves, fulfills, and follows up.",
    implementationPoints: ["Map the real operational journey before building rules.", "Define owners, due dates, statuses, and exception paths for every workflow.", "Connect notifications to useful action rather than noisy alerts.", "Review dashboard metrics after launch and refine the rules."],
    visualTitle: "Workflow operating map",
    visualRows: ["Trigger event", "Decision rules", "Owner assignment", "Status and notification", "Exception and audit review"],
  },
  "workflow-bottlenecks": {
    title: "Bottlenecks appear when work depends on memory, messages, and manual checking.",
    intro: "Most slow workflows are not slow because people are careless. They are slow because the process has too many invisible handoffs, unclear owners, duplicate tools, and missing status signals.",
    cards: [
      { title: "Hidden Requests", text: "Work arrives through calls, email, WhatsApp, spreadsheets, forms, and CRM notes without one queue to manage it.", tag: "Visibility" },
      { title: "Unclear Ownership", text: "Teams waste time asking who should approve, who should respond, and who is waiting on whom.", tag: "Owner" },
      { title: "Manual Follow-up", text: "Managers chase updates because the workflow does not show pending, delayed, and blocked states automatically.", tag: "Delay" },
      { title: "Approval Drift", text: "Different people apply different rules when approvals live in chat threads or memory instead of a defined system.", tag: "Rules" },
      { title: "Duplicate Data Entry", text: "Staff copy the same information between CRM, sheets, email, invoices, and internal dashboards.", tag: "Rework" },
      { title: "No Bottleneck Evidence", text: "The business can feel delays, but cannot easily prove where cycle time is being lost.", tag: "Metrics" },
    ],
    metrics: [
      { label: "Manual handoffs", value: "5+", note: "Common in approval and service workflows." },
      { label: "Owner clarity", value: "Low", note: "Tasks stall when ownership is assumed." },
      { label: "Duplicate entry", value: "High", note: "Repeated copying increases error risk." },
      { label: "Delay source", value: "Unknown", note: "Dashboards make the slowdown visible." },
    ],
    flow: [
      { icon: Lucide.MessageCircle, title: "Request arrives", text: "The business receives a lead, order, task, document, ticket, or approval need." },
      { icon: Lucide.CircleAlert, title: "Context scatters", text: "Important data moves across channels and no one sees the full picture." },
      { icon: Lucide.Clock3, title: "Follow-up slows", text: "People chase status manually while the customer or internal team waits." },
      { icon: Lucide.Workflow, title: "Workflow rebuilds", text: "Automation creates one path with owner, status, reminder, and escalation." },
    ],
    implementationTitle: "Bottleneck diagnosis turns frustration into design requirements.",
    implementationText: "HNX audits the workflow at the point where delay is visible: missed approvals, stale tasks, repeated questions, late customer updates, and incomplete reporting.",
    implementationPoints: ["List the channels where workflow requests currently enter.", "Mark every point where work waits for a person, tool, or missing detail.", "Separate process problems from software problems before automating.", "Use the audit to define the first workflow worth launching."],
    visualTitle: "Bottleneck diagnosis board",
    visualRows: ["Request channel map", "Manual handoff points", "Approval delay source", "Duplicate entry risk", "Status visibility gap"],
  },
  "trigger-system": {
    title: "The trigger system decides when automation should begin.",
    intro: "A workflow is only reliable when the starting condition is precise. HNX defines event triggers, schedule triggers, data-change triggers, customer-action triggers, and admin triggers with guardrails so automation starts at the right moment.",
    cards: [
      { title: "Event Triggers", text: "New lead, new order, ticket created, document uploaded, payment received, or form submitted can start the workflow.", tag: "Event" },
      { title: "Schedule Triggers", text: "Daily checks, renewal reminders, SLA follow-ups, weekly reports, and delayed tasks can run on a planned cadence.", tag: "Schedule" },
      { title: "Status Triggers", text: "Changing a CRM stage, booking state, approval state, or support priority can launch the next internal action.", tag: "Status" },
      { title: "Data Conditions", text: "Automation can check amount, location, service type, customer segment, risk flag, owner, or missing fields before moving.", tag: "Rules" },
      { title: "Duplicate Protection", text: "Trigger design prevents the same action from firing repeatedly when data is edited or external systems retry.", tag: "Safety" },
      { title: "Manual Override", text: "Admins can start, pause, retry, or cancel a workflow when business context requires human judgment.", tag: "Control" },
    ],
    metrics: [
      { label: "Trigger types", value: "5", note: "Event, schedule, status, data, and manual." },
      { label: "Duplicate risk", value: "Lower", note: "Idempotent logic avoids repeated tasks." },
      { label: "Start clarity", value: "High", note: "Teams know what launches each workflow." },
      { label: "Admin override", value: "Built-in", note: "Humans can control unusual cases." },
    ],
    flow: [
      { icon: Lucide.Database, title: "Data changes", text: "A record, message, payment, file, or schedule event is detected." },
      { icon: Lucide.SearchCheck, title: "Rules validate", text: "The system checks conditions, duplicates, required fields, and eligibility." },
      { icon: Lucide.Workflow, title: "Workflow starts", text: "Tasks, notifications, approvals, and status updates are created." },
      { icon: Lucide.ShieldCheck, title: "Control remains", text: "Admins can pause, retry, or redirect the workflow if needed." },
    ],
    implementationTitle: "Strong triggers make automation feel dependable instead of surprising.",
    implementationText: "The best workflow trigger is specific enough to avoid noise but flexible enough to capture the real business event without manual checking.",
    implementationPoints: ["Define the exact data change or event that should launch the workflow.", "Add duplicate checks for retries, edits, and repeated submissions.", "Use conditional logic before creating tasks or sending messages.", "Give admins a manual override for unusual business context."],
    visualTitle: "Trigger-to-action map",
    visualRows: ["Source event", "Condition checks", "Duplicate guard", "Action creation", "Manual override control"],
  },
  "approval-rules": {
    title: "Approval rules make decisions consistent and reviewable.",
    intro: "Approvals fail when rules are hidden in chat, senior staff memory, or spreadsheet notes. HNX creates approval paths for finance, operations, documents, discounts, refunds, requests, and exceptions with clear authority and audit history.",
    cards: [
      { title: "Approval Levels", text: "Amount, risk, request type, department, or customer segment can decide whether one or multiple reviewers are required.", tag: "Levels" },
      { title: "Auto-approval Conditions", text: "Low-risk repeat actions can move automatically when data is complete and the request fits policy.", tag: "Speed" },
      { title: "Rejection Reasons", text: "Rejected items should capture why they failed and what the requester must correct before resubmitting.", tag: "Clarity" },
      { title: "Delegation Rules", text: "If a manager is unavailable, the workflow can route approvals to a backup owner without losing traceability.", tag: "Continuity" },
      { title: "Escalation Timing", text: "Pending approvals can notify or escalate after defined time limits so work does not stall silently.", tag: "SLA" },
      { title: "Audit Trail", text: "Every approval, rejection, edit, comment, and timestamp stays visible for reporting and compliance review.", tag: "Audit" },
    ],
    metrics: [
      { label: "Approval time", value: "Tracked", note: "Slow reviewers and policy delays become visible." },
      { label: "Policy fit", value: "Defined", note: "Rules reduce subjective handling." },
      { label: "Escalations", value: "Timed", note: "Pending approvals no longer disappear." },
      { label: "Audit trail", value: "Stored", note: "Review history supports accountability." },
    ],
    flow: [
      { icon: Lucide.FileText, title: "Request created", text: "A quote, refund, document, task, discount, or operation needs review." },
      { icon: Lucide.ShieldCheck, title: "Policy checks", text: "The workflow evaluates amount, risk, role, status, and required evidence." },
      { icon: Lucide.Users, title: "Reviewer acts", text: "The right approver accepts, rejects, comments, or requests changes." },
      { icon: Lucide.Database, title: "History stores", text: "The decision and timing become part of the permanent workflow record." },
    ],
    implementationTitle: "Approval automation should speed decisions without removing accountability.",
    implementationText: "HNX designs approval workflows so teams can move faster while preserving policy control, human judgment, and complete review history.",
    implementationPoints: ["Document who can approve what, and under which conditions.", "Define rejection and correction loops before launch.", "Add backup owners and escalation timing for stalled approvals.", "Report approval time by owner, type, and workflow stage."],
    visualTitle: "Approval pipeline",
    visualRows: ["Request details", "Policy gate", "Reviewer route", "Decision record", "Escalation and audit"],
  },
  "task-assignment": {
    title: "Task assignment turns workflow decisions into accountable action.",
    intro: "Automation is incomplete if it only sends a notification. HNX builds assignment logic that creates work with context, owner, due date, priority, customer record, and escalation path.",
    cards: [
      { title: "Role-based Routing", text: "Tasks can route by department, branch, service type, geography, product, seniority, or workload.", tag: "Role" },
      { title: "Priority Rules", text: "High-value leads, urgent tickets, VIP customers, payment risks, and SLA-sensitive requests can receive faster handling.", tag: "Priority" },
      { title: "Context Packaging", text: "Assigned users receive the information needed to act without opening multiple tools or asking for background.", tag: "Context" },
      { title: "Due Dates", text: "Each task can carry a response deadline, completion deadline, reminder timing, and overdue behavior.", tag: "SLA" },
      { title: "Reassignment Controls", text: "Managers can reassign, pause, split, or escalate work when capacity or expertise changes.", tag: "Control" },
      { title: "Workload Balance", text: "Dashboards show task volume by owner so managers can spot overload before service quality drops.", tag: "Capacity" },
    ],
    metrics: [
      { label: "Owner", value: "Assigned", note: "No task sits without responsibility." },
      { label: "SLA", value: "Visible", note: "Due dates and overdue states are clear." },
      { label: "Context", value: "Attached", note: "Owners see the data needed to act." },
      { label: "Capacity", value: "Balanced", note: "Managers can redistribute work." },
    ],
    flow: [
      { icon: Lucide.Workflow, title: "Rule decides", text: "The workflow determines the right team, priority, and action path." },
      { icon: Lucide.Users, title: "Owner receives", text: "A task is assigned with customer, record, note, file, or CRM context." },
      { icon: Lucide.Clock3, title: "SLA monitors", text: "Reminders and overdue states track whether work is moving." },
      { icon: Lucide.LayoutDashboard, title: "Manager reviews", text: "Dashboards show owner load, delayed tasks, and reassignment needs." },
    ],
    implementationTitle: "Assignment logic should mirror how the business actually operates.",
    implementationText: "The right assignment model prevents confusion, protects customer response time, and lets managers run operations without manually distributing every task.",
    implementationPoints: ["Create owner rules by role, location, product, workload, and priority.", "Attach the source record and required context to each task.", "Define due dates and reminder timing by task type.", "Give managers reassignment and escalation controls."],
    visualTitle: "Assignment map",
    visualRows: ["Role rules", "Priority scoring", "Context package", "Due date and reminder", "Manager reassignment"],
  },
  "status-tracking": {
    title: "Status tracking shows where every workflow item stands.",
    intro: "A workflow should not become invisible after the first action. HNX creates status models that show progress, blockers, owners, timestamps, customer-facing updates, and internal next steps.",
    cards: [
      { title: "Custom Status Model", text: "Statuses are designed around the real workflow: new, assigned, waiting, approved, blocked, completed, rejected, or escalated.", tag: "Model" },
      { title: "Timestamp History", text: "Each movement records when the item changed state so cycle time and delay can be measured.", tag: "Time" },
      { title: "Owner Visibility", text: "The current owner, previous owner, backup owner, and escalation owner can be shown where needed.", tag: "Owner" },
      { title: "Customer-facing Updates", text: "Where useful, status changes can trigger clear customer messages without exposing internal complexity.", tag: "Customer" },
      { title: "Blocked Reasons", text: "Blocked states capture missing data, policy issues, unavailable capacity, failed payment, or external dependency.", tag: "Blocker" },
      { title: "Completion Evidence", text: "Completed items can store attachments, notes, approval references, generated files, or delivery confirmations.", tag: "Proof" },
    ],
    metrics: [
      { label: "Stage clarity", value: "High", note: "Teams know what is happening now." },
      { label: "Cycle time", value: "Measured", note: "Status changes reveal delay." },
      { label: "Blocked items", value: "Flagged", note: "Managers see items needing attention." },
      { label: "History", value: "Auditable", note: "Past movement can be reviewed." },
    ],
    flow: [
      { icon: Lucide.Activity, title: "State changes", text: "A task, approval, request, or order moves to the next workflow stage." },
      { icon: Lucide.Database, title: "History logs", text: "Timestamp, owner, reason, and source are recorded." },
      { icon: Lucide.Bell, title: "Update sends", text: "Relevant people receive a useful notification or customer update." },
      { icon: Lucide.BarChart3, title: "Metrics improve", text: "Cycle time and blockers become measurable by workflow type." },
    ],
    implementationTitle: "Status tracking turns workflow movement into operational intelligence.",
    implementationText: "HNX defines status states so they are useful for staff, managers, customers, and reporting rather than just labels in a dropdown.",
    implementationPoints: ["Name statuses around real decisions and blockers.", "Log timestamps, owners, notes, and reasons for important movements.", "Connect only customer-relevant status changes to outward messages.", "Use status data to improve workflow design after launch."],
    visualTitle: "Status dashboard layers",
    visualRows: ["Current state", "Owner and due date", "Blocked reason", "Customer update", "Cycle-time report"],
  },
  notifications: {
    title: "Notifications should drive action, not create noise.",
    intro: "Workflow notifications work best when they are tied to a clear responsibility, timing, and next step. HNX designs internal alerts, customer updates, manager escalations, and reminder rules with trust and focus.",
    cards: [
      { title: "Internal Alerts", text: "Staff receive notifications when a task is assigned, due soon, overdue, returned, approved, rejected, or escalated.", tag: "Internal" },
      { title: "Customer Updates", text: "Customers can receive booking, order, ticket, payment, document, or request progress updates when the message is useful.", tag: "Customer" },
      { title: "Reminder Timing", text: "Reminder schedules are based on SLA, business hours, urgency, and customer expectations instead of arbitrary frequency.", tag: "Timing" },
      { title: "Escalation Alerts", text: "Managers see overdue, blocked, high-value, high-risk, or repeated failure items before damage spreads.", tag: "Escalation" },
      { title: "Channel Choice", text: "Email, WhatsApp, CRM tasks, dashboard alerts, and push notifications are chosen based on action type and audience.", tag: "Channel" },
      { title: "Preference and Safety", text: "External communication includes opt-out, permission, and frequency controls where needed.", tag: "Trust" },
    ],
    metrics: [
      { label: "Alert relevance", value: "High", note: "Messages map to real next actions." },
      { label: "Overdue tasks", value: "Lower", note: "Timed reminders reduce silent delays." },
      { label: "Escalations", value: "Controlled", note: "Managers see urgent exceptions." },
      { label: "Customer trust", value: "Protected", note: "Updates are useful and respectful." },
    ],
    flow: [
      { icon: Lucide.Activity, title: "Workflow changes", text: "A task becomes assigned, due, blocked, approved, or completed." },
      { icon: Lucide.SearchCheck, title: "Audience checks", text: "The system decides who needs to know and why." },
      { icon: Lucide.Bell, title: "Message sends", text: "The chosen channel sends a clear, context-rich notification." },
      { icon: Lucide.MousePointerClick, title: "Action follows", text: "The receiver can open the record, respond, approve, or complete the task." },
    ],
    implementationTitle: "Useful notifications are part of workflow design.",
    implementationText: "HNX avoids noisy automation by connecting every notification to a status, owner, urgency level, action, and communication permission.",
    implementationPoints: ["Define which status changes deserve messages.", "Separate internal action alerts from customer-facing updates.", "Set reminder frequency by SLA and business hours.", "Track open, click, response, and completion impact where channels allow."],
    visualTitle: "Notification control panel",
    visualRows: ["Status trigger", "Audience rule", "Channel selection", "Frequency limit", "Action and response tracking"],
  },
  "exception-handling": {
    title: "Exception handling keeps automation trustworthy when reality gets messy.",
    intro: "No workflow runs perfectly forever. HNX plans for missing data, failed API calls, duplicate requests, policy conflicts, rejected approvals, customer changes, and manual override needs before launch.",
    cards: [
      { title: "Missing Data Rules", text: "Automation can pause and ask for required details instead of creating incomplete tasks or sending wrong messages.", tag: "Data" },
      { title: "Failed Integration Handling", text: "API errors, timeouts, payment failures, or CRM sync issues can retry, alert, or route to a human queue.", tag: "Systems" },
      { title: "Duplicate Detection", text: "Repeated form submissions, retried webhooks, and duplicate customer requests are checked before new work is created.", tag: "Duplicates" },
      { title: "Policy Conflict Routing", text: "Requests outside standard conditions can move to a manager instead of being auto-approved or blocked silently.", tag: "Policy" },
      { title: "Manual Override", text: "Admins can retry, edit, pause, cancel, or complete a workflow when human context is needed.", tag: "Control" },
      { title: "Exception Reporting", text: "Recurring exceptions become improvement opportunities instead of daily operational surprises.", tag: "Learning" },
    ],
    metrics: [
      { label: "Failure visibility", value: "High", note: "Errors move into queues and reports." },
      { label: "Retry rules", value: "Defined", note: "Temporary failures do not break the process." },
      { label: "Manual control", value: "Available", note: "Admins can intervene safely." },
      { label: "Root causes", value: "Tracked", note: "Repeated issues guide improvements." },
    ],
    flow: [
      { icon: Lucide.CircleAlert, title: "Issue detected", text: "Missing data, failed sync, unusual value, or policy conflict appears." },
      { icon: Lucide.ShieldCheck, title: "Guardrail applies", text: "The workflow pauses, retries, requests data, or routes to review." },
      { icon: Lucide.Users, title: "Human resolves", text: "An owner corrects the record, approves an exception, or retries the step." },
      { icon: Lucide.BarChart3, title: "Pattern reports", text: "Recurring exceptions are reviewed for process or integration improvements." },
    ],
    implementationTitle: "Exception design prevents automation from becoming brittle.",
    implementationText: "HNX builds fallback paths so the business can trust automation while still giving humans control over unusual, risky, or incomplete cases.",
    implementationPoints: ["List expected failure cases before launch.", "Create retry, pause, and human-review states.", "Show exception queues in the workflow dashboard.", "Review exception categories monthly and refine rules."],
    visualTitle: "Exception response map",
    visualRows: ["Error detection", "Pause or retry", "Human review queue", "Resolution note", "Root-cause report"],
  },
  "workflow-dashboard": {
    title: "The workflow dashboard gives managers operational visibility.",
    intro: "Automation needs a control room. HNX builds dashboards that show open work, cycle time, overdue tasks, approval queues, exception volume, owner performance, SLA risk, and completion quality.",
    cards: [
      { title: "Live Work Queue", text: "Managers can see every active item by stage, owner, priority, customer, due date, and blocker.", tag: "Queue" },
      { title: "Approval Board", text: "Pending, approved, rejected, returned, and escalated approvals are grouped for fast review.", tag: "Approvals" },
      { title: "Overdue Tracking", text: "SLA risk becomes visible by owner, team, workflow type, and customer segment.", tag: "SLA" },
      { title: "Exception Reports", text: "Failed automations, missing data, duplicate risks, and integration issues are tracked as operational signals.", tag: "Exceptions" },
      { title: "Owner Performance", text: "Reports show volume, response time, completion rate, overdue count, and reassignment patterns.", tag: "Team" },
      { title: "Improvement Backlog", text: "Dashboard findings can become rule changes, integration fixes, form updates, or workflow simplifications.", tag: "Improve" },
    ],
    metrics: [
      { label: "Open work", value: "Live", note: "Every active item is visible." },
      { label: "SLA risk", value: "Flagged", note: "Late work surfaces before escalation." },
      { label: "Exception rate", value: "Tracked", note: "Automation quality can improve over time." },
      { label: "Manager view", value: "Central", note: "Operations no longer depend on scattered updates." },
    ],
    flow: [
      { icon: Lucide.Database, title: "Workflow logs", text: "Triggers, tasks, statuses, approvals, and exceptions create structured events." },
      { icon: Lucide.LayoutDashboard, title: "Dashboard groups", text: "Records are grouped by owner, stage, priority, SLA, and exception type." },
      { icon: Lucide.SearchCheck, title: "Manager reviews", text: "The team spots delays, overload, and repeated process problems." },
      { icon: Lucide.Settings, title: "Rules improve", text: "Automation logic is adjusted based on operational evidence." },
    ],
    implementationTitle: "A workflow dashboard turns automation into a managed operating system.",
    implementationText: "HNX designs dashboards for people running the business, not only technical monitoring. The view must help managers decide what to fix today and what to improve next month.",
    implementationPoints: ["Define dashboard views by role, team, and workflow type.", "Track open work, overdue items, approvals, exceptions, and cycle time.", "Add filters that match manager decisions.", "Use dashboard insights to update rules and integrations after launch."],
    visualTitle: "Workflow dashboard panels",
    visualRows: ["Live queue", "Approval board", "Overdue and SLA risk", "Exception report", "Improvement backlog"],
  },
  "final-cta": {
    title: "Build workflows that move work forward without constant chasing.",
    intro: "HNX can map, design, automate, launch, and improve workflow systems for approvals, task routing, customer updates, internal operations, reports, and exception control.",
    cards: [
      { title: "Workflow Audit", text: "Identify where manual handoffs, unclear ownership, approval delays, and duplicated updates slow operations.", tag: "Audit" },
      { title: "Rule Design", text: "Define triggers, conditions, approvals, assignments, notifications, statuses, and fallback paths.", tag: "Rules" },
      { title: "System Integration", text: "Connect CRM, forms, dashboards, email, WhatsApp, payments, documents, and internal tools where needed.", tag: "Integration" },
      { title: "Manager Dashboard", text: "Give owners and leaders a live view of queues, delays, exceptions, SLA risk, and team workload.", tag: "Control" },
      { title: "Launch Support", text: "Test the workflow with real records, edge cases, permission rules, and staff operating steps.", tag: "Launch" },
      { title: "Continuous Improvement", text: "Use workflow metrics to reduce delay, simplify rules, improve notifications, and remove recurring exceptions.", tag: "Growth" },
    ],
    metrics: [
      { label: "Workflow", value: "Mapped", note: "Manual steps become structured automation." },
      { label: "Control", value: "Built-in", note: "Admins can review, retry, and override." },
      { label: "Visibility", value: "Live", note: "Managers can see movement and delays." },
      { label: "Improvement", value: "Ongoing", note: "Automation gets better after launch." },
    ],
    flow: [
      { icon: Lucide.SearchCheck, title: "Audit", text: "Understand the workflow, delays, owners, tools, and exceptions." },
      { icon: Lucide.Workflow, title: "Design", text: "Create trigger, rule, task, status, and notification logic." },
      { icon: Lucide.Settings, title: "Build", text: "Connect systems and dashboards with admin control." },
      { icon: Lucide.BarChart3, title: "Improve", text: "Review metrics and optimize the workflow after launch." },
    ],
    implementationTitle: "The right workflow automation feels calm, visible, and accountable.",
    implementationText: "HNX helps teams move repeated work into a system that still respects human review, business exceptions, and operational control.",
    implementationPoints: ["Start with one high-friction workflow before automating everything.", "Keep every automated action tied to owner, status, and record history.", "Use notifications to support action, not noise.", "Measure cycle time and exception patterns after launch."],
    visualTitle: "HNX workflow automation delivery",
    visualRows: ["Process audit", "Rule and trigger design", "Integration build", "Dashboard launch", "Optimization review"],
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
      <Link href="/solutions/ai-automation/automation-strategy" className="text-[#0891b2] transition hover:text-[#145cb7]">AI Automation</Link>
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
        <p className="text-xs font-black uppercase tracking-[0.22em] text-[#7c3aed]">{MODULE_NAME}</p>
        <h1 className="mt-5 text-5xl font-black leading-[1.02] tracking-[-0.06em] text-[#0f214f] sm:text-6xl">{title}</h1>
        <p className="mt-5 max-w-4xl text-base font-semibold leading-8 text-[#52627d] sm:text-lg">{intro}</p>
      </div>
      <div className="mt-10 space-y-8">{children}</div>
    </section>
  );
}

function KnowledgeCard({ item, index }: { item: CardCopy; index: number }) {
  const Icon = cardIcons[index % cardIcons.length];
  return (
    <div className="rounded-[24px] border border-[#d7e1f2] bg-white p-5 shadow-[0_18px_45px_rgba(15,23,42,0.045)]">
      <div className="flex items-start gap-4">
        <IconShell icon={Icon} />
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-lg font-black tracking-[-0.02em] text-[#0f214f]">{item.title}</h3>
            <span className="rounded-full bg-[#f3efff] px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-[#6d28d9]">{item.tag}</span>
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
      <svg viewBox="0 0 220 36" className="mt-3 h-9 w-full text-[#7c3aed]" aria-hidden="true">
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
        <p className="text-xs font-black text-[#66728f]">Workflow Control Room</p>
      </div>
      <div className="grid gap-5 p-5 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[24px] bg-gradient-to-br from-[#0f214f] via-[#6d28d9] to-[#19b7c5] p-6 text-white">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-100">Trigger to action</p>
          <h3 className="mt-4 text-4xl font-black tracking-[-0.05em]">Requests, approvals, tasks, and statuses in one operating flow.</h3>
          <p className="mt-4 text-sm font-semibold leading-7 text-blue-100">The workflow engine connects business rules with people, dashboards, notifications, and exception handling.</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {["Trigger map", "Approval rules", "Task routing", "Exception queue"].map((item) => <p key={item} className="rounded-xl bg-white/12 px-4 py-3 text-xs font-black">{item}</p>)}
          </div>
        </div>
        <div className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-3">
            {[["42", "Active tasks"], ["9", "Approvals"], ["3", "Exceptions"]].map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-[#d7e1f2] bg-[#f8fbff] p-4">
                <p className="text-2xl font-black text-[#6d28d9]">{value}</p>
                <p className="mt-1 text-xs font-bold text-[#66728f]">{label}</p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-[#d7e1f2] bg-[#f8fbff] p-4">
            <p className="text-sm font-black text-[#0f214f]">Workflow queue</p>
            <div className="mt-4 space-y-2">
              {["New request assigned", "Manager approval pending", "Customer update sent", "Payment exception flagged", "Completion report logged"].map((item) => (
                <div key={item} className="flex items-center justify-between rounded-xl bg-white px-4 py-3">
                  <span className="text-xs font-black text-[#0f214f]">{item}</span>
                  <Lucide.CheckCircle2 className="h-4 w-4 text-emerald-600" />
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-[#c4b5fd] bg-[#f3efff] px-4 py-3">
            <p className="text-sm font-black text-[#6d28d9]">Outcome: fewer stalled tasks, clearer ownership, visible operations</p>
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
                  <span className="rounded-full bg-[#f3efff] px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-[#6d28d9]">Step {index + 1}</span>
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
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-sm font-black text-[#6d28d9] ring-1 ring-[#c4b5fd]">{index + 1}</span>
            <p className="text-sm font-black text-[#0f214f]">{row}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ChapterInsightPanel({ section }: { section: SectionContent }) {
  return (
    <div className="grid gap-5 rounded-[28px] border border-[#d7e1f2] bg-[#f8fbff] p-6 lg:grid-cols-[1fr_1fr]">
      <div>
        <p className="text-xs font-black uppercase tracking-[0.16em] text-[#6d28d9]">HNX Build Lens</p>
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
          <p className="text-xl font-black">Ready to automate your workflows?</p>
          <p className="mt-2 text-sm font-semibold text-blue-100">Map the process, rules, owners, dashboards, and improvement loop before building the automation.</p>
        </div>
        <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-extrabold text-[#075edb]">
          Book Workflow Call <Lucide.ArrowRight className="h-4 w-4" />
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

function SectionRenderer({ activeTab, onTabChange }: { activeTab: TabId; onTabChange: (tab: TabId) => void }) {
  const section = sections[activeTab];
  const activeLabel = knowledgeTabs.find((item) => item.id === activeTab)?.label ?? "Overview";
  return (
    <ChapterShell activeLabel={activeLabel} title={section.title} intro={section.intro}>
      {activeTab === "overview" ? <PreviewWindow /> : null}
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {section.cards.map((item, index) => <KnowledgeCard key={item.title} item={item} index={index} />)}
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

export default function WorkflowAutomationClient() {
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
      <SolutionCategoryTabs category="ai-automation" solutions={aiAutomationSolutions} />
      <MobileTabs activeTab={activeTab} onTabChange={handleTabChange} />
      <div className="mx-auto flex max-w-[min(92vw,1440px)] pt-14">
        <SolutionSidebar<TabId>
          title={SIDEBAR_TITLE}
          subtitle={SIDEBAR_SUBTITLE}
          icon={Lucide.Workflow}
          items={knowledgeTabs}
          activeTab={activeTab}
          onTabChange={handleTabChange}
          ctaTitle="Automate Workflow"
          ctaText="Turn triggers, approvals, assignments, statuses, notifications, and dashboards into one controlled system."
          ctaButtonText="Book Workflow Call"
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
