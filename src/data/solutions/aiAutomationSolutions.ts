import type { SolutionCard, SolutionPageData, SolutionStat } from "./types";
import { enhanceSolutions } from "./contentEnhancements";

const href = (slug: string) => `/solutions/ai-automation/${slug}`;

const stat = (label: string, value: string, note: string): SolutionStat => ({
  label,
  value,
  note,
});

const card = (
  title: string,
  text: string,
  icon: SolutionCard["icon"],
): SolutionCard => ({
  title,
  text,
  icon,
});

const aiAutomationSolutionsBase: SolutionPageData[] = [
  {
    slug: "automation-audit",
    label: "Automation Audit",
    href: href("automation-audit"),
    icon: "SearchCheck",
    eyebrow: "Automation Discovery",
    headline: "Find the manual work your business should not be doing.",
    description:
      "We inspect repetitive tasks, tool handoffs, lead flows, documents, and reporting gaps to identify practical automation opportunities.",
    problem:
      "Businesses know work is repetitive, but they do not know what to automate first or what the ROI should be.",
    solution:
      "HNX maps workflows, scores automation value, identifies system gaps, and creates a prioritized implementation roadmap.",
    impact:
      "You get a clear action plan for saving time, reducing mistakes, and improving response speed without guessing.",
    stats: [
      stat("Workflows", "15+", "Reviewed for automation fit"),
      stat("ROI", "Ranked", "Effort, value, and complexity"),
      stat("Quick wins", "5-8", "Ready for first implementation"),
      stat("Roadmap", "Clear", "Tools, triggers, owners, and timeline"),
    ],
    problems: [
      card("Unknown bottlenecks", "Manual work is spread across teams, messages, sheets, and apps.", "Workflow"),
      card("Wrong automation priority", "Teams automate visible tasks instead of the tasks with the best business return.", "BarChart3"),
      card("Tool confusion", "There is no clarity on when to use AI, workflows, scripts, or integrations.", "Bot"),
      card("No ownership", "Automations fail because triggers, exceptions, and human handoffs are not defined.", "Users"),
    ],
    flow: [
      card("Map current work", "Document repeated tasks, tools, decisions, delays, and handoffs.", "Workflow"),
      card("Score opportunities", "Rank tasks by volume, risk, time saved, and customer impact.", "BarChart3"),
      card("Design automation path", "Choose AI agents, workflows, APIs, CRM triggers, or reporting automations.", "Network"),
      card("Plan implementation", "Create a staged roadmap with quick wins and larger system improvements.", "Rocket"),
    ],
    modules: [
      card("Workflow inventory", "A practical view of manual tasks, owners, systems, and frequency.", "FileText"),
      card("Automation scorecard", "Priority ranking by impact, complexity, risk, and dependency.", "BarChart3"),
      card("Tool recommendation", "Suggested stack for workflows, AI, integrations, messaging, and dashboards.", "Bot"),
      card("Implementation roadmap", "Phased plan with dependencies, owners, milestones, and expected savings.", "CheckCircle2"),
    ],
    process: [
      card("Interview", "Understand how work really moves through people and systems.", "Users"),
      card("Observe", "Review tools, data sources, messages, sheets, and reports.", "SearchCheck"),
      card("Prioritize", "Select automations that can deliver measurable business impact.", "BarChart3"),
      card("Roadmap", "Turn the audit into a build-ready automation plan.", "Rocket"),
    ],
    useCases: [
      card("Sales operations", "Lead routing, qualification, follow-ups, proposals, and CRM updates.", "Users"),
      card("Back office", "Document handling, approvals, reminders, and status reporting.", "FileText"),
      card("Support teams", "Ticket triage, replies, escalation, and SLA dashboards.", "Headphones"),
      card("Founder operations", "Replace repetitive founder tasks with lightweight automation systems.", "Sparkles"),
    ],
    preview: {
      title: "Automation Opportunity Map",
      subtitle: "Manual tasks ranked by impact, effort, risk, and implementation path.",
      metrics: [
        stat("Hours Saved", "42/wk", "Estimated from top workflows"),
        stat("Quick Wins", "7", "Low effort, high return"),
        stat("Systems", "9", "Tools reviewed"),
      ],
      rows: ["Lead follow-up delay", "Invoice reminder workflow", "Support triage rules", "Monthly report automation"],
    },
    ctaTitle: "Want to know what you should automate first?",
    ctaText:
      "We will audit your workflows and turn the findings into a clear automation roadmap.",
  },
  {
    slug: "ai-agents",
    label: "AI Agents",
    href: href("ai-agents"),
    icon: "Bot",
    eyebrow: "AI Business Agents",
    headline: "AI agents that handle focused business tasks with context.",
    description:
      "Build AI assistants for lead handling, support, document review, internal operations, and knowledge retrieval.",
    problem:
      "Generic AI tools help individuals, but they do not reliably operate inside your business workflows or data context.",
    solution:
      "HNX creates scoped AI agents with instructions, tools, knowledge access, human handoffs, and performance monitoring.",
    impact:
      "Teams respond faster, reduce repetitive work, and keep control over when AI acts and when people approve.",
    stats: [
      stat("Tasks", "Scoped", "Clear jobs and guardrails"),
      stat("Knowledge", "Connected", "Docs, CRM, FAQs, and systems"),
      stat("Handoffs", "Human", "Approvals where risk matters"),
      stat("Monitoring", "Built-in", "Quality, usage, and escalation"),
    ],
    problems: [
      card("Context gaps", "AI gives generic answers because it cannot access the right business knowledge.", "FileText"),
      card("No workflow control", "Tasks need triggers, approvals, and follow-ups beyond chat responses.", "Workflow"),
      card("Risky autonomy", "Businesses need guardrails before AI can act on customer or operational data.", "ShieldCheck"),
      card("Hard to measure", "Teams do not know whether AI is actually improving response speed or quality.", "BarChart3"),
    ],
    flow: [
      card("Define agent role", "Set the task scope, allowed actions, limits, and escalation rules.", "Bot"),
      card("Connect knowledge", "Attach approved documents, CRM fields, FAQs, and process instructions.", "Network"),
      card("Add workflow tools", "Enable forms, tickets, messages, records, and approval steps.", "Workflow"),
      card("Track performance", "Measure quality, handoffs, response time, and business outcomes.", "BarChart3"),
    ],
    modules: [
      card("Lead assistant", "Qualifies inquiries, asks follow-up questions, and routes promising leads.", "Users"),
      card("Support assistant", "Answers common questions and escalates cases with context.", "Headphones"),
      card("Document agent", "Extracts, summarizes, and validates structured information from files.", "FileText"),
      card("Internal knowledge agent", "Helps teams find SOPs, policies, product details, and account context.", "SearchCheck"),
    ],
    process: [
      card("Scope", "Choose a narrow, valuable task the agent can perform safely.", "CheckCircle2"),
      card("Prepare data", "Clean knowledge sources and define what the agent can cite or use.", "FileText"),
      card("Build agent", "Configure prompts, tools, workflows, fallbacks, and review paths.", "Bot"),
      card("Improve", "Review conversations, tune instructions, and expand capabilities carefully.", "Sparkles"),
    ],
    useCases: [
      card("Lead qualification", "Capture details, score intent, and push records into CRM.", "Users"),
      card("Customer support", "Answer FAQs, create tickets, and escalate complex issues.", "Headphones"),
      card("Document processing", "Read invoices, forms, contracts, applications, or reports.", "FileText"),
      card("Ops assistant", "Help internal teams query process rules and system data.", "LayoutDashboard"),
    ],
    preview: {
      title: "AI Agent Control Panel",
      subtitle: "Agent tasks, confidence, handoffs, and workflow outcomes.",
      metrics: [
        stat("Resolved", "68%", "Without manual first response"),
        stat("Handoffs", "32", "Sent with full context"),
        stat("Avg Reply", "18s", "Initial AI response time"),
      ],
      rows: ["Lead qualified and routed", "Document summary approved", "Support reply drafted", "Low-confidence case escalated"],
    },
    ctaTitle: "Build an AI agent that fits your business rules.",
    ctaText:
      "We can design, connect, and monitor AI agents that help your team without losing control.",
  },
  {
    slug: "workflow-automation",
    label: "Workflow Automation",
    href: href("workflow-automation"),
    icon: "Workflow",
    eyebrow: "Trigger Based Operations",
    headline: "Automated workflows that keep business moving.",
    description:
      "Connect triggers, conditions, actions, approvals, reminders, and reports across the tools your team already uses.",
    problem:
      "Teams waste hours moving data, chasing approvals, sending reminders, and updating statuses by hand.",
    solution:
      "HNX builds trigger-condition-action workflows with reliable exceptions, human approvals, and dashboard visibility.",
    impact:
      "Work moves faster, handoffs become clearer, and managers can see where processes slow down.",
    stats: [
      stat("Triggers", "Smart", "Forms, CRM, payment, time, and status"),
      stat("Actions", "Auto", "Tasks, messages, updates, and reports"),
      stat("Approvals", "Controlled", "Human checks when needed"),
      stat("Visibility", "Live", "Status and exception dashboards"),
    ],
    problems: [
      card("Manual handoffs", "People wait for someone to notice, assign, or update work.", "Users"),
      card("Late follow-ups", "Important reminders depend on memory or scattered notes.", "Bell"),
      card("Broken tool chain", "Forms, CRM, sheets, email, and chat do not pass context reliably.", "Network"),
      card("No exception handling", "Automations fail when unusual cases are not planned.", "ShieldCheck"),
    ],
    flow: [
      card("Trigger", "Start from form submissions, CRM changes, payments, dates, or support events.", "Workflow"),
      card("Condition", "Apply rules for priority, value, owner, status, and customer type.", "CheckCircle2"),
      card("Action", "Create tasks, send messages, update records, or request approval.", "Send"),
      card("Report", "Track flow health, exceptions, completion time, and team workload.", "BarChart3"),
    ],
    modules: [
      card("Approval flows", "Route requests to the right person with clear context and reminders.", "CheckCircle2"),
      card("Reminder systems", "Send internal and customer reminders based on time or status.", "Bell"),
      card("Task routing", "Create and assign tasks automatically from events and rules.", "Workflow"),
      card("Exception dashboard", "Show failed automations, delayed steps, and items needing attention.", "LayoutDashboard"),
    ],
    process: [
      card("Map process", "Define the real trigger, decision rules, handoffs, and edge cases.", "Workflow"),
      card("Build automations", "Create workflows using APIs, automation tools, or custom code.", "Code2"),
      card("Test exceptions", "Validate failure paths, approvals, retries, and notifications.", "ShieldCheck"),
      card("Monitor", "Track outcomes and refine rules as business behavior changes.", "BarChart3"),
    ],
    useCases: [
      card("Lead follow-up", "Assign, notify, qualify, and remind sales teams automatically.", "Users"),
      card("Payment operations", "Trigger invoices, receipts, reminders, and finance updates.", "CreditCard"),
      card("Support workflow", "Route tickets, send SLA alerts, and summarize open issues.", "Headphones"),
      card("Internal approvals", "Automate purchase, leave, document, or task approval paths.", "CheckCircle2"),
    ],
    preview: {
      title: "Workflow Operations Board",
      subtitle: "Triggers, approvals, delayed steps, and completion metrics.",
      metrics: [
        stat("Automations", "24", "Active workflows"),
        stat("Delay Reduced", "46%", "Average handoff time"),
        stat("Exceptions", "6", "Need human review"),
      ],
      rows: ["New lead assigned", "Invoice reminder queued", "Approval waiting on manager", "SLA alert sent"],
    },
    ctaTitle: "Replace repeated manual handoffs with clean workflows.",
    ctaText:
      "We can automate the triggers, reminders, approvals, and reports that slow your team down.",
  },
  {
    slug: "lead-scoring",
    label: "Lead Scoring",
    href: href("lead-scoring"),
    icon: "BarChart3",
    eyebrow: "Sales Intelligence",
    headline: "Lead scoring that helps your team focus on the right opportunities.",
    description:
      "Score leads by source, fit, intent, behavior, urgency, and conversation context so sales teams can prioritize better.",
    problem:
      "Sales teams treat every inquiry the same, so high-intent leads wait while low-fit leads consume time.",
    solution:
      "HNX builds scoring models, routing rules, alerts, and CRM visibility around the signals that matter.",
    impact:
      "Your best leads get faster attention, follow-ups become more relevant, and sales effort becomes easier to measure.",
    stats: [
      stat("Signals", "Multi-source", "Forms, CRM, pages, messages, and history"),
      stat("Routing", "Instant", "Priority leads sent to the right owner"),
      stat("Follow-up", "Relevant", "Score-based messaging and reminders"),
      stat("Pipeline", "Cleaner", "Better qualification and reporting"),
    ],
    problems: [
      card("No prioritization", "Teams chase leads in arrival order instead of business value.", "Users"),
      card("Weak qualification", "Forms capture data, but intent and fit are not interpreted.", "FileText"),
      card("Slow response", "Hot leads lose momentum while waiting for manual review.", "Activity"),
      card("Poor reporting", "Managers cannot see which sources produce valuable opportunities.", "BarChart3"),
    ],
    flow: [
      card("Capture signals", "Collect source, profile, behavior, message intent, and previous engagement.", "SearchCheck"),
      card("Score fit", "Apply points for ideal customer traits, urgency, budget, and need.", "BarChart3"),
      card("Route actions", "Assign high-priority leads and trigger custom follow-up paths.", "Workflow"),
      card("Refine model", "Review conversion data and adjust scoring rules over time.", "Sparkles"),
    ],
    modules: [
      card("Scoring rules", "Weighted criteria for source, intent, fit, budget, urgency, and behavior.", "CheckCircle2"),
      card("Priority alerts", "Notify sales teams when a high-value lead enters or changes status.", "Bell"),
      card("CRM integration", "Display score, reason, source, and recommended next action on each lead.", "LayoutDashboard"),
      card("Source analytics", "Compare channel quality by conversion, revenue, and sales time.", "BarChart3"),
    ],
    process: [
      card("Signal audit", "Review forms, CRM fields, analytics, and sales qualification rules.", "SearchCheck"),
      card("Model design", "Define scoring logic and thresholds for priority segments.", "BarChart3"),
      card("Automation build", "Connect routing, alerts, follow-ups, and CRM views.", "Workflow"),
      card("Sales feedback", "Improve scoring based on won, lost, and delayed deals.", "Users"),
    ],
    useCases: [
      card("Inbound sales", "Rank demo requests, quote requests, and contact form leads.", "Users"),
      card("Campaign leads", "Separate curious clicks from high-intent buyers.", "Sparkles"),
      card("CRM cleanup", "Identify stale, promising, or urgent leads inside an existing pipeline.", "LayoutDashboard"),
      card("Partner inquiries", "Route partner, vendor, and enterprise leads to the right owner.", "Network"),
    ],
    preview: {
      title: "Lead Priority Dashboard",
      subtitle: "Scores, reasons, routing, and follow-up status for new inquiries.",
      metrics: [
        stat("Hot Leads", "18", "Need same-day action"),
        stat("Avg Response", "9m", "For priority segment"),
        stat("Source Quality", "+22%", "Campaign improvement"),
      ],
      rows: ["Enterprise demo request scored 92", "Budget signal detected", "Low-fit lead moved to nurture", "Owner follow-up overdue"],
    },
    ctaTitle: "Stop guessing which leads deserve attention first.",
    ctaText:
      "We can build a scoring and routing system that helps sales teams move faster with better context.",
  },
  {
    slug: "whatsapp-email-automation",
    label: "WhatsApp / Email Automation",
    href: href("whatsapp-email-automation"),
    icon: "MessageCircle",
    eyebrow: "Customer Communication Automation",
    headline: "WhatsApp and email flows that respond at the right moment.",
    description:
      "Automate confirmations, reminders, follow-ups, nurture sequences, alerts, and internal notifications.",
    problem:
      "Teams manually send the same messages every day, and customers still miss updates or wait too long for replies.",
    solution:
      "HNX designs message journeys tied to forms, CRM events, payments, bookings, orders, and support status.",
    impact:
      "Customers receive timely updates while teams spend less time typing, chasing, and checking status manually.",
    stats: [
      stat("Channels", "2+", "WhatsApp, email, and internal alerts"),
      stat("Templates", "Reusable", "Personalized and approved copy"),
      stat("Triggers", "Event-based", "Lead, booking, payment, support, and status"),
      stat("Tracking", "Visible", "Delivery, reply, and conversion signals"),
    ],
    problems: [
      card("Manual replies", "Staff repeatedly type confirmations, reminders, and follow-ups.", "MessageCircle"),
      card("Lost context", "Messages are not connected to CRM, orders, tickets, or payments.", "Network"),
      card("Inconsistent tone", "Different team members send different message quality.", "Mail"),
      card("No follow-through", "Customers fall out of the journey after one missed reply.", "Workflow"),
    ],
    flow: [
      card("Trigger event", "Start from form submission, status change, payment, booking, or time delay.", "Workflow"),
      card("Choose channel", "Send via WhatsApp, email, or both depending on urgency and preference.", "MessageCircle"),
      card("Personalize", "Merge customer data, context, next steps, and call-to-action.", "FileText"),
      card("Track outcome", "Log delivery, replies, clicks, and next actions inside the system.", "BarChart3"),
    ],
    modules: [
      card("Message journeys", "Sequences for leads, customers, bookings, payments, support, and reactivation.", "Workflow"),
      card("Template library", "Approved WhatsApp and email templates with dynamic fields.", "FileText"),
      card("Reply routing", "Route customer replies to owners, tickets, or CRM records.", "Users"),
      card("Performance reports", "Measure delivery, response, action rate, and automation health.", "BarChart3"),
    ],
    process: [
      card("Journey map", "Identify where automated communication improves speed and clarity.", "Workflow"),
      card("Copy setup", "Write short, useful, brand-aligned message templates.", "Mail"),
      card("Integration", "Connect channels to CRM, forms, booking, payment, or support tools.", "Network"),
      card("Optimize", "Improve timing, segments, and copy based on response data.", "Sparkles"),
    ],
    useCases: [
      card("Lead nurture", "Auto-reply, qualify, remind, and move interested leads forward.", "Users"),
      card("Booking reminders", "Send confirmations, reminders, reschedule links, and post-visit follow-ups.", "CheckCircle2"),
      card("Payment reminders", "Automate invoices, pending payment nudges, and receipts.", "CreditCard"),
      card("Support updates", "Notify customers when tickets move, resolve, or need more details.", "Headphones"),
    ],
    preview: {
      title: "Messaging Automation Console",
      subtitle: "Journeys, templates, delivery status, and reply routing.",
      metrics: [
        stat("Messages", "3.2k", "Automated this month"),
        stat("Reply Rate", "41%", "Across active journeys"),
        stat("Manual Time", "-28h", "Estimated weekly saving"),
      ],
      rows: ["Quote follow-up sent", "Payment reminder delivered", "Support reply routed", "Booking confirmation opened"],
    },
    ctaTitle: "Make customer communication faster and more consistent.",
    ctaText:
      "We can automate WhatsApp and email journeys without making them feel robotic.",
  },
  {
    slug: "document-automation",
    label: "Document Automation",
    href: href("document-automation"),
    icon: "FileText",
    eyebrow: "Document Intelligence",
    headline: "Automate document intake, extraction, review, and reporting.",
    description:
      "Use structured workflows and AI-assisted processing for invoices, forms, applications, contracts, reports, and internal documents.",
    problem:
      "Teams spend too much time reading files, copying details, checking fields, renaming documents, and updating systems.",
    solution:
      "HNX builds document workflows that capture files, extract data, flag issues, route approvals, and sync records.",
    impact:
      "Document-heavy operations become faster, less error-prone, and easier to track from upload to approval.",
    stats: [
      stat("Extraction", "AI-assisted", "Fields, summaries, and validations"),
      stat("Approvals", "Routed", "Review paths and exception handling"),
      stat("Storage", "Organized", "Naming, folders, and records"),
      stat("Accuracy", "Tracked", "Human review for risky fields"),
    ],
    problems: [
      card("Manual data entry", "Teams copy values from PDFs, forms, and emails into systems.", "FileText"),
      card("Missed errors", "Missing fields and mismatched values are found too late.", "ShieldCheck"),
      card("Slow approvals", "Documents wait in inboxes without clear owner or status.", "Workflow"),
      card("Poor searchability", "Files are stored without consistent names, metadata, or links to records.", "SearchCheck"),
    ],
    flow: [
      card("Capture", "Receive files from forms, email, portals, CRM, or internal uploads.", "FileText"),
      card("Extract", "Pull key fields, summaries, tables, and confidence scores.", "Bot"),
      card("Validate", "Check against rules, records, required fields, and review thresholds.", "ShieldCheck"),
      card("Route", "Send approvals, sync systems, store files, and trigger reports.", "Workflow"),
    ],
    modules: [
      card("Document intake", "Upload, classify, name, and route files from multiple sources.", "FileText"),
      card("AI extraction", "Extract fields, summaries, tables, and structured data with review controls.", "Bot"),
      card("Validation rules", "Flag missing data, mismatches, duplicates, and risky fields.", "ShieldCheck"),
      card("Approval dashboard", "Track document status, reviewer notes, exceptions, and completion time.", "LayoutDashboard"),
    ],
    process: [
      card("Document audit", "Review file types, fields, systems, and approval rules.", "SearchCheck"),
      card("Template setup", "Define extraction fields, confidence thresholds, and validation logic.", "FileText"),
      card("Workflow build", "Connect capture, review, storage, and system updates.", "Workflow"),
      card("Quality tuning", "Improve extraction and exception handling with real samples.", "Sparkles"),
    ],
    useCases: [
      card("Invoice processing", "Extract vendors, amounts, tax, due dates, and approval status.", "CreditCard"),
      card("Application review", "Collect forms, verify fields, and route decisions.", "CheckCircle2"),
      card("Contract summaries", "Summarize obligations, dates, values, and unusual clauses.", "FileText"),
      card("Compliance records", "Organize evidence, logs, and review trails.", "ShieldCheck"),
    ],
    preview: {
      title: "Document Automation Desk",
      subtitle: "Captured files, extracted fields, confidence, and approval status.",
      metrics: [
        stat("Files Processed", "846", "This month"),
        stat("Auto-filled", "78%", "Fields completed automatically"),
        stat("Review Queue", "21", "Need human approval"),
      ],
      rows: ["Invoice amount verified", "Application missing ID proof", "Contract summary generated", "Audit evidence stored"],
    },
    ctaTitle: "Turn document handling into a controlled workflow.",
    ctaText:
      "We can automate document intake, extraction, approvals, and reporting around your real process.",
  },
  {
    slug: "ai-reports-insights",
    label: "AI Reports & Insights",
    href: href("ai-reports-insights"),
    icon: "Sparkles",
    eyebrow: "AI Reporting Systems",
    headline: "AI insights that explain what your reports are trying to say.",
    description:
      "Convert CRM, sales, support, operations, and campaign data into summaries, alerts, trends, and recommended actions.",
    problem:
      "Dashboards show numbers, but teams still spend time interpreting what changed, why it matters, and what to do next.",
    solution:
      "HNX adds AI summaries, anomaly detection, trend explanations, and action prompts to your reporting layer.",
    impact:
      "Managers see the story behind the numbers faster and teams get clearer next steps from their data.",
    stats: [
      stat("Summaries", "Auto", "Daily, weekly, and monthly insights"),
      stat("Signals", "Flagged", "Anomalies, trends, and risks"),
      stat("Actions", "Suggested", "Recommended next steps"),
      stat("Reports", "Shareable", "Team-friendly briefings"),
    ],
    problems: [
      card("Report overload", "Teams receive charts without a clear business interpretation.", "BarChart3"),
      card("Missed anomalies", "Drops, spikes, and risks are discovered too late.", "Activity"),
      card("Manual summaries", "Managers spend hours writing updates from dashboards.", "FileText"),
      card("No action layer", "Reports rarely translate into owners, tasks, and follow-ups.", "Workflow"),
    ],
    flow: [
      card("Connect data", "Pull CRM, sales, support, campaign, or operational metrics.", "Database"),
      card("Explain trends", "Generate plain-language summaries of movement, risk, and opportunity.", "Sparkles"),
      card("Recommend action", "Suggest follow-ups, owners, experiments, and decision points.", "CheckCircle2"),
      card("Share insights", "Send reports to dashboards, email, WhatsApp, or team tools.", "Send"),
    ],
    modules: [
      card("Insight summaries", "Plain-language daily, weekly, and monthly performance explanations.", "Sparkles"),
      card("Anomaly alerts", "Flag sudden movement in revenue, leads, response time, or operational status.", "Activity"),
      card("Action prompts", "Recommend owners and next steps based on the data pattern.", "Workflow"),
      card("Executive briefings", "Concise reports for leadership, managers, and client updates.", "FileText"),
    ],
    process: [
      card("Metric selection", "Choose the numbers that actually guide decisions.", "BarChart3"),
      card("Data connection", "Connect dashboards, CRM, sheets, databases, or analytics tools.", "Network"),
      card("Insight design", "Create summary logic, anomaly rules, and action suggestions.", "Sparkles"),
      card("Distribution", "Deliver insights where teams already work.", "Send"),
    ],
    useCases: [
      card("Sales reporting", "Summarize pipeline movement, stuck deals, and source quality.", "Users"),
      card("Support reporting", "Explain ticket volume, SLA risks, and recurring issues.", "Headphones"),
      card("Campaign reporting", "Turn traffic, leads, and conversions into plain next steps.", "BarChart3"),
      card("Operations reporting", "Surface delays, capacity issues, and workflow exceptions.", "Activity"),
    ],
    preview: {
      title: "AI Insights Briefing",
      subtitle: "Trends, risks, explanations, and suggested actions generated from live data.",
      metrics: [
        stat("Insights", "36", "Generated this week"),
        stat("Anomalies", "5", "Flagged for review"),
        stat("Actions", "14", "Converted to tasks"),
      ],
      rows: ["Lead quality improved from organic search", "Support backlog risk rising", "Payment reminders improved collections", "Campaign CPA increased 12%"],
    },
    ctaTitle: "Make your data easier to act on.",
    ctaText:
      "We can add AI summaries, alerts, and action recommendations to the reports your team already uses.",
  },
];

export const aiAutomationSolutions = enhanceSolutions("ai-automation", aiAutomationSolutionsBase);
