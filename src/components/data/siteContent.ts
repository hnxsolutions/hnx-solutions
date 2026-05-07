import type { LucideIcon } from "lucide-react";
import {
  BadgeIndianRupee,
  BarChart3,
  Blocks,
  Bot,
  BriefcaseBusiness,
  Building2,
  Car,
  CheckCircle2,
  ClipboardCheck,
  ClipboardList,
  CloudCog,
  Code2,
  CreditCard,
  DatabaseZap,
  Factory,
  FileText,
  GraduationCap,
  Handshake,
  HeartPulse,
  Landmark,
  Layers3,
  LifeBuoy,
  Mail,
  Megaphone,
  MessageCircle,
  PanelsTopLeft,
  Phone,
  PieChart,
  Plane,
  RefreshCw,
  Route,
  Settings2,
  ShieldCheck,
  Sparkles,
  Store,
  Target,
  TrendingUp,
  UsersRound,
  WalletCards,
  Workflow,
} from "lucide-react";

export type IconCard = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type PricingPlan = {
  name: string;
  price: string;
  label: string;
  description: string;
  features: string[];
  featured?: boolean;
};

export type BlogPost = {
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
};

export type WorkflowScenario = {
  title: string;
  trigger: string;
  logic: string;
  action: string;
  report: string;
};

export type IntegrationCategory = {
  title: string;
  description: string;
  examples: string[];
  bestFor: string;
};

export const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "Product", href: "/product" },
  { label: "Company", href: "/company" },
  { label: "Resources", href: "/resources" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export const overviewCards: IconCard[] = [
  {
    title: "Lead Capture",
    description: "Bring enquiries from ads, websites, calls, WhatsApp, referrals, and social media into one CRM.",
    icon: Target,
  },
  {
    title: "Team Assignment",
    description: "Route every lead to the right owner with clear deadlines, stages, and manager visibility.",
    icon: UsersRound,
  },
  {
    title: "Automated Follow-ups",
    description: "Trigger reminders, messages, escalations, and next-step tasks based on your business rules.",
    icon: Workflow,
  },
  {
    title: "Real-Time Reports",
    description: "Track pipeline health, delayed tasks, source quality, conversion, and revenue from live dashboards.",
    icon: BarChart3,
  },
];

export const featureCards: IconCard[] = [
  {
    title: "Lead Management",
    description:
      "Capture, qualify, assign, and track leads from ads, website forms, WhatsApp, referrals, calls, and social media.",
    icon: PanelsTopLeft,
  },
  {
    title: "Workflow Automation",
    description:
      "Automate reminders, follow-ups, lead assignments, ticket escalations, notifications, and stage-based actions.",
    icon: DatabaseZap,
  },
  {
    title: "Team Accountability",
    description:
      "Give every lead an owner, every task a deadline, and every manager visibility over team performance.",
    icon: ClipboardCheck,
  },
  {
    title: "Dashboards & Reports",
    description:
      "View leads, deals, revenue, follow-ups, conversion rates, delayed tasks, and team performance from one dashboard.",
    icon: PieChart,
  },
  {
    title: "WhatsApp & Email Triggers",
    description:
      "Send automatic WhatsApp and email updates based on lead stage, follow-up date, payment status, or client action.",
    icon: MessageCircle,
  },
  {
    title: "AI-Ready CRM Layer",
    description:
      "Add AI lead scoring, smart suggestions, message drafts, sales insights, report summaries, and next-best-action recommendations.",
    icon: Bot,
  },
];

export const integrations: IconCard[] = [
  { title: "Website Forms", description: "Capture website leads directly in CRM.", icon: PanelsTopLeft },
  { title: "WhatsApp", description: "Send reminders, updates, and lead alerts.", icon: MessageCircle },
  { title: "Email", description: "Automate follow-up and status emails.", icon: Mail },
  { title: "Google Sheets", description: "Sync legacy sheets during transition.", icon: FileText },
  { title: "Meta Ads", description: "Pull campaign leads with source tracking.", icon: Megaphone },
  { title: "Google Ads", description: "Capture paid search leads in real time.", icon: TrendingUp },
  { title: "Payment Gateways", description: "Track payment status and reminders.", icon: CreditCard },
  { title: "Third-Party APIs", description: "Connect custom business tools.", icon: Code2 },
  { title: "Existing CRM / ERP", description: "Bridge old systems and new workflows.", icon: CloudCog },
  { title: "Reporting Tools", description: "Push clean data into BI views.", icon: BarChart3 },
];

export const whatWeProvideCards: IconCard[] = [
  {
    title: "Custom CRM Development",
    description: "We design and build CRM systems based on your actual business process, not generic templates.",
    icon: Code2,
  },
  {
    title: "Lead & Customer Management",
    description: "Capture, assign, track, and manage leads and customers from one organized dashboard.",
    icon: Target,
  },
  {
    title: "Sales Pipeline Management",
    description: "Create custom deal stages such as New Lead, Contacted, Demo Scheduled, Proposal Sent, Negotiation, Won, and Lost.",
    icon: Route,
  },
  {
    title: "Role-Based Access",
    description: "Create separate access levels for admins, managers, sales users, support agents, operations teams, and clients.",
    icon: UsersRound,
  },
  {
    title: "Permission Sets",
    description: "Control who can view, create, edit, approve, export, delete, or manage each module, record, report, and workflow.",
    icon: ShieldCheck,
  },
  {
    title: "Workflow Automation",
    description: "Automate lead assignment, follow-up tasks, reminders, ticket escalation, approval flows, and internal notifications.",
    icon: Workflow,
  },
  {
    title: "AI CRM Assistant",
    description: "Use AI for lead scoring, smart suggestions, follow-up message writing, customer summaries, report explanation, and next-best actions.",
    icon: Bot,
  },
  {
    title: "Dashboards & Reports",
    description: "Track revenue, leads, conversion, pending tasks, team performance, source-wise leads, and customer activity in real time.",
    icon: BarChart3,
  },
  {
    title: "Support & Ticketing",
    description: "Manage customer issues, complaints, service requests, escalation, and resolution history.",
    icon: LifeBuoy,
  },
  {
    title: "Integrations",
    description: "Connect forms, email, WhatsApp, payment tools, third-party APIs, landing pages, and internal business systems.",
    icon: CloudCog,
  },
];

export const roleCards: IconCard[] = [
  {
    title: "Admin",
    description: "Full system control, user management, settings, workflows, dashboards, and reports.",
    icon: Settings2,
  },
  {
    title: "Manager",
    description: "Team visibility, assigned pipeline access, approvals, reports, and performance tracking.",
    icon: BarChart3,
  },
  {
    title: "Sales User",
    description: "Lead access, customer notes, follow-ups, deal updates, and task management.",
    icon: Target,
  },
  {
    title: "Support Agent",
    description: "Ticket access, issue status, customer communication, and resolution updates.",
    icon: LifeBuoy,
  },
  {
    title: "Operations User",
    description: "Internal tasks, approvals, documents, and process tracking.",
    icon: ClipboardCheck,
  },
  {
    title: "Client / Limited User",
    description: "Restricted access to selected records, requests, updates, or portal views.",
    icon: ShieldCheck,
  },
];

export const permissionExamples = [
  "View-only access",
  "Create access",
  "Edit access",
  "Delete restriction",
  "Export restriction",
  "Module-level permissions",
  "Record-level permissions",
  "Field-level permissions",
  "Approval permissions",
  "Report access control",
  "Workflow management access",
];

export const automationExamples = [
  "When a website lead is created, assign it automatically.",
  "When a high-value lead comes in, notify the sales manager.",
  "When a follow-up is due, create a task and send a reminder.",
  "When a ticket is unresolved, escalate it to a manager.",
  "When a payment is confirmed, update the customer record.",
  "When a deal moves stage, update reports automatically.",
];

export const aiFeatures = [
  "Lead scoring",
  "Smart follow-up suggestions",
  "Auto message writing",
  "Customer summaries",
  "Ticket summaries",
  "Report explanation",
  "Sales insights",
  "Next-best action",
  "Campaign analysis",
  "Internal CRM chatbot",
];

export const ownedCrmComparison = {
  renting: [
    "Monthly cost forever",
    "Limited customization",
    "Complex setup",
    "Extra cost per user",
    "Dependency on vendor rules",
    "Hard to match exact workflow",
  ],
  owning: [
    "Built around your process",
    "Custom modules and workflows",
    "Role-based access and permissions",
    "Automation based on your rules",
    "AI layer when needed",
    "Long-term control and scalability",
  ],
};

export const buildPlans: PricingPlan[] = [
  {
    name: "Starter CRM",
    price: "Scoped after consultation",
    label: "Lead management",
    description: "For small teams that need lead management, customer database, follow-ups, and a basic dashboard.",
    features: ["Lead and customer records", "Follow-up tasks", "Basic dashboard", "Simple user roles"],
  },
  {
    name: "Growth CRM",
    price: "Scoped after consultation",
    label: "Workflow ready",
    description: "For businesses that need custom fields, team roles, permissions, workflow automation, and advanced reports.",
    featured: true,
    features: ["Custom fields", "Role-based access", "Permission sets", "Workflow automation", "Advanced reports"],
  },
  {
    name: "AI-Powered CRM",
    price: "Scoped after consultation",
    label: "AI assistant",
    description: "For businesses that want AI lead scoring, smart suggestions, auto message writing, and report explanations.",
    features: ["AI lead scoring", "Smart suggestions", "Message drafts", "Report explanation"],
  },
  {
    name: "Enterprise Custom CRM",
    price: "Scoped after consultation",
    label: "Complex operations",
    description: "For companies with complex workflows, integrations, multi-team access, advanced permissions, and scalable architecture.",
    features: ["Advanced permissions", "Integrations", "Multi-team workflows", "Scalable architecture"],
  },
];

export const industryCards: IconCard[] = [
  {
    title: "Real Estate",
    description: "Property inquiries, site visits, agent assignment, and customer pipeline.",
    icon: Building2,
  },
  {
    title: "Healthcare",
    description: "Patient inquiries, documents, appointments, support, and follow-ups.",
    icon: HeartPulse,
  },
  {
    title: "Education",
    description: "Student leads, counselling pipeline, admission status, and document collection.",
    icon: GraduationCap,
  },
  {
    title: "Manufacturing",
    description: "RFQs, quotations, dealers, orders, production follow-ups, and dispatches.",
    icon: Factory,
  },
  {
    title: "Retail",
    description: "Customers, loyalty, offers, campaigns, support, and repeat purchases.",
    icon: Store,
  },
  {
    title: "Finance",
    description: "Loan leads, KYC documents, approvals, advisor tasks, and follow-ups.",
    icon: Landmark,
  },
  {
    title: "Insurance",
    description: "Policies, renewals, premium reminders, claims, agents, and customers.",
    icon: ShieldCheck,
  },
  {
    title: "Travel",
    description: "Packages, itineraries, visa documents, bookings, payments, and follow-ups.",
    icon: Plane,
  },
  {
    title: "Automobile",
    description: "Vehicle leads, test drives, bookings, service reminders, and showroom reports.",
    icon: Car,
  },
  {
    title: "Service Business",
    description: "Leads, quotes, tickets, tasks, staff schedules, invoices, and clients.",
    icon: Phone,
  },
];

export const workflowScenarios: WorkflowScenario[] = [
  {
    title: "Inbound lead routing",
    trigger: "A lead enters from a website form, ad, WhatsApp, referral, or call.",
    logic: "HNX checks source, city, product interest, budget, and team availability.",
    action: "Assign the right owner, create a first-response task, notify the rep, and start the follow-up clock.",
    report: "Managers see speed-to-contact, owner, source quality, and unassigned lead risk.",
  },
  {
    title: "Follow-up SLA workflow",
    trigger: "A lead reaches Contacted, Demo Booked, Proposal Sent, or Negotiation stage.",
    logic: "The CRM applies a follow-up rule based on stage, lead temperature, and last activity.",
    action: "Create reminders, send WhatsApp/email updates, and escalate overdue tasks to managers.",
    report: "Track delayed follow-ups, missed tasks, aging deals, and team-level SLA performance.",
  },
  {
    title: "Proposal and deal movement",
    trigger: "A proposal is shared, opened, accepted, or marked for revision.",
    logic: "HNX checks proposal value, expected close date, and decision-maker status.",
    action: "Move the deal stage, create next-step tasks, alert managers on high-value deals, and update forecast.",
    report: "View proposal conversion, deal aging, stage leakage, and revenue pipeline health.",
  },
  {
    title: "Payment and renewal workflow",
    trigger: "A payment becomes due, overdue, partially paid, or completed.",
    logic: "The CRM checks invoice status, client priority, owner, and renewal date.",
    action: "Send reminders, update payment status, create finance tasks, and notify account owners.",
    report: "Monitor overdue value, collection activity, renewal risk, and payment-linked tasks.",
  },
  {
    title: "Support ticket escalation",
    trigger: "A support request is created or remains unresolved near SLA breach.",
    logic: "HNX checks ticket priority, client type, owner, time open, and escalation rules.",
    action: "Notify support, escalate to manager, create internal tasks, and update customer communication.",
    report: "See open tickets, SLA risk, escalation history, and support workload by owner.",
  },
  {
    title: "Client onboarding handoff",
    trigger: "A deal is won or a client signs up for implementation.",
    logic: "The CRM checks package, modules, integrations, timeline, and assigned implementation owner.",
    action: "Create onboarding tasks, request documents, schedule kickoff, and prepare dashboard milestones.",
    report: "Track onboarding completion, blocked items, implementation timelines, and handoff quality.",
  },
];

export const integrationCategories: IntegrationCategory[] = [
  {
    title: "Lead Capture Integrations",
    description: "Bring new enquiries into CRM automatically instead of copying them from different sources.",
    examples: ["Website forms", "Meta lead ads", "Google Ads", "Landing pages", "Call tracking"],
    bestFor: "Core CRM and above",
  },
  {
    title: "Communication Integrations",
    description: "Centralize follow-up communication and trigger updates from lead stages or client actions.",
    examples: ["WhatsApp", "Email", "SMS", "Team notifications", "Calendar reminders"],
    bestFor: "Growth CRM and above",
  },
  {
    title: "Finance and Payment Integrations",
    description: "Connect payment status with client workflows, renewals, reminders, and finance dashboards.",
    examples: ["Payment gateways", "Invoices", "Renewal reminders", "Overdue alerts", "Finance exports"],
    bestFor: "Growth add-on or Business AI CRM",
  },
  {
    title: "Operations and Support Integrations",
    description: "Extend CRM into tickets, onboarding, support escalations, implementation tasks, and handoffs.",
    examples: ["Support tickets", "Project boards", "Client onboarding", "SLA alerts", "Internal approvals"],
    bestFor: "Business AI CRM and Enterprise",
  },
  {
    title: "Data and Reporting Integrations",
    description: "Push CRM data into sheets, dashboards, BI tools, or custom reports for leadership visibility.",
    examples: ["Google Sheets", "Looker Studio", "Custom dashboards", "CSV imports", "BI exports"],
    bestFor: "Core CRM and above",
  },
  {
    title: "Custom API and Legacy Systems",
    description: "Connect existing CRM, ERP, homegrown systems, or third-party tools through APIs.",
    examples: ["Existing CRM", "ERP", "Custom API", "Webhooks", "Data migration"],
    bestFor: "Business AI CRM and Enterprise",
  },
];

export const integrationPricingRows = [
  {
    scope: "Basic lead capture",
    includedIn: "Core CRM",
    details: "Website form capture, manual imports, basic source tracking, and clean lead records.",
  },
  {
    scope: "Messaging triggers",
    includedIn: "Growth CRM / Add-on",
    details: "WhatsApp, email, reminders, stage updates, owner notifications, and follow-up tasks.",
  },
  {
    scope: "Ads and source sync",
    includedIn: "Growth CRM / Add-on",
    details: "Google/Meta lead capture, campaign source mapping, and response-time tracking.",
  },
  {
    scope: "Payments and finance",
    includedIn: "Business AI CRM / Add-on",
    details: "Payment status, overdue reminders, renewal triggers, and finance reporting workflows.",
  },
  {
    scope: "Custom APIs",
    includedIn: "Business AI CRM / Enterprise",
    details: "Third-party APIs, existing CRM/ERP, custom dashboards, and legacy system bridges.",
  },
];

export const serviceTopics = {
  customCrm: {
    eyebrow: "Custom CRM Development",
    title: "Build and own a CRM system designed around your business.",
    description:
      "HNX designs custom business CRM systems with your modules, fields, workflows, permission sets, dashboards, reports, and integrations.",
    cards: whatWeProvideCards.slice(0, 8),
  },
  automation: {
    eyebrow: "Workflow Automation",
    title: "Automate repetitive work before it slows your team down.",
    description:
      "Use trigger, condition, and action logic to automate lead routing, follow-ups, escalations, approvals, reminders, payment updates, and reports.",
    cards: workflowScenarios.map((item) => ({
      title: item.title,
      description: `${item.trigger} ${item.action}`,
      icon: Workflow,
    })),
  },
  aiCrm: {
    eyebrow: "AI CRM Assistant",
    title: "AI that helps your team decide what to do next.",
    description:
      "Add AI lead scoring, smart suggestions, message drafts, customer summaries, ticket summaries, report explanations, and next-best-action support.",
    cards: aiFeatures.map((item) => ({
      title: item,
      description: "A practical AI capability that works with CRM data, activity history, and business context.",
      icon: Bot,
    })),
  },
  industries: {
    eyebrow: "Industries",
    title: "Custom CRM systems for different business models.",
    description:
      "HNX adapts CRM workflows for service businesses, agencies, real estate, healthcare, education, events, IT teams, and local businesses.",
    cards: industryCards,
  },
};

export const roadmap: IconCard[] = [
  {
    title: "Core CRM Modules",
    description: "Leads, clients, deals, tasks, notes, users, and dashboards.",
    icon: Layers3,
  },
  {
    title: "Admin Power",
    description: "Custom fields, custom pipelines, roles, permissions, and dashboard controls.",
    icon: Settings2,
  },
  {
    title: "Automation Engine",
    description: "Triggers, conditions, actions, reminders, notifications, and integrations.",
    icon: Workflow,
  },
  {
    title: "AI Layer",
    description: "Lead scoring, chatbot support, smart suggestions, report explanations, and sales insights.",
    icon: Sparkles,
  },
];

export const companyCards: IconCard[] = [
  {
    title: "Workflow-first thinking",
    description: "We map how your leads, teams, follow-ups, reports, and approvals actually move today.",
    icon: Route,
  },
  {
    title: "Built around your process",
    description: "The CRM structure, fields, roles, dashboards, and automations match your operating model.",
    icon: Building2,
  },
  {
    title: "Long-term CRM scalability",
    description: "Start lean, then extend modules, integrations, AI, analytics, and admin controls as you grow.",
    icon: TrendingUp,
  },
];

export const careerAreas: IconCard[] = [
  { title: "Product Design", description: "Design CRM experiences that make complex workflows feel simple.", icon: PanelsTopLeft },
  { title: "Full-Stack Engineering", description: "Build reliable CRM modules, APIs, dashboards, and automations.", icon: Code2 },
  { title: "CRM Implementation", description: "Map client workflows and turn them into practical systems.", icon: ClipboardList },
  { title: "Sales & Partnerships", description: "Help businesses understand where a custom CRM can create leverage.", icon: Handshake },
  { title: "Customer Success", description: "Support onboarding, adoption, documentation, and continuous improvement.", icon: LifeBuoy },
  { title: "AI Automation", description: "Create scoring, recommendations, summaries, and next-action intelligence.", icon: Bot },
];

export const helpCenterItems: IconCard[] = [
  { title: "Getting Started", description: "Onboarding steps, workspace setup, first pipeline, and launch checklist.", icon: CheckCircle2 },
  { title: "User Management", description: "Roles, permissions, users, teams, manager views, and access rules.", icon: UsersRound },
  { title: "Lead Pipeline Setup", description: "Stages, statuses, sources, owners, fields, and task rules.", icon: Route },
  { title: "Workflow Automation Help", description: "Triggers, reminders, escalations, notifications, and automation testing.", icon: Workflow },
  { title: "Reports & Dashboard Guide", description: "Revenue, follow-ups, conversion, delayed tasks, and source performance views.", icon: BarChart3 },
  { title: "Support Requests", description: "Request changes, ask questions, report issues, and track support actions.", icon: LifeBuoy },
];

export const crmGuideChecklist = [
  "Define all lead sources before the CRM is built.",
  "Define pipeline stages that match your sales journey.",
  "Define team roles, permissions, managers, and ownership rules.",
  "Define follow-up rules for every lead stage and outcome.",
  "Define dashboards for owners, managers, sales, support, and finance.",
  "Define automation triggers for assignments, reminders, and escalations.",
  "Define integrations for forms, WhatsApp, email, ads, payments, and reports.",
];

export const webinars = [
  {
    title: "Building a lead management system from scratch",
    description: "Learn how to structure lead sources, stages, ownership rules, and reporting from day one.",
    duration: "45 min",
    format: "Live",
  },
  {
    title: "Automating follow-ups without losing personalization",
    description: "Design WhatsApp, email, task, and reminder workflows that still feel human.",
    duration: "38 min",
    format: "Recorded",
  },
  {
    title: "Using AI inside CRM for sales insights",
    description: "See how lead scoring, next-best-action, summaries, and smart suggestions can support sales teams.",
    duration: "50 min",
    format: "Live",
  },
  {
    title: "Dashboards managers actually use",
    description: "Build reporting views around team activity, overdue work, revenue, and conversion.",
    duration: "36 min",
    format: "Recorded",
  },
  {
    title: "CRM implementation planning workshop",
    description: "Prepare your fields, modules, users, automations, and data migration before build starts.",
    duration: "60 min",
    format: "Live",
  },
  {
    title: "From spreadsheets to an owned CRM",
    description: "A practical transition plan for teams moving away from manual lead tracking.",
    duration: "42 min",
    format: "Recorded",
  },
];

export const useCases: IconCard[] = [
  {
    title: "Agencies",
    description: "Track campaign leads, client onboarding, proposals, renewals, and account follow-ups in one place.",
    icon: Megaphone,
  },
  {
    title: "Real Estate",
    description: "Manage property enquiries, site visits, broker assignments, callbacks, and booking status.",
    icon: Building2,
  },
  {
    title: "Education",
    description: "Handle student enquiries, counsellor assignments, admission stages, reminders, and batch reports.",
    icon: GraduationCap,
  },
  {
    title: "Healthcare Services",
    description: "Organize patient enquiries, appointment follow-ups, care coordination, and service requests.",
    icon: HeartPulse,
  },
  {
    title: "Finance Consultants",
    description: "Track client documents, advisory stages, payment status, renewals, and compliance tasks.",
    icon: WalletCards,
  },
  {
    title: "B2B Sales Teams",
    description: "Manage account leads, demos, proposals, negotiation, revenue forecasts, and team activities.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Local Service Businesses",
    description: "Capture enquiries, assign field teams, send reminders, track jobs, and report conversions.",
    icon: Phone,
  },
  {
    title: "E-commerce / D2C",
    description: "Manage support, repeat purchase follow-ups, abandoned enquiries, and customer lifecycle tasks.",
    icon: Blocks,
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    name: "Core CRM",
    price: "₹49,999+",
    label: "Starter build",
    description: "For small teams moving away from manual lead tracking.",
    features: [
      "Lead and client modules",
      "Basic task tracking",
      "Pipeline dashboard",
      "Follow-up reminders",
      "Responsive CRM UI",
      "Up to 5 users",
      "1 month support",
    ],
  },
  {
    name: "Growth CRM",
    price: "₹99,999+",
    label: "Most Popular",
    description: "For growing teams that need automation and reporting.",
    featured: true,
    features: [
      "Everything in Core",
      "Custom fields and pipelines",
      "Workflow automation",
      "WhatsApp/email triggers",
      "Role-based access",
      "Team performance reports",
      "Up to 20 users",
      "3 months support",
    ],
  },
  {
    name: "Business AI CRM",
    price: "₹1,99,999+",
    label: "Advanced operations",
    description: "For businesses needing advanced AI, integrations, and dashboards.",
    features: [
      "Everything in Growth",
      "AI lead scoring",
      "Smart suggestions",
      "Advanced analytics",
      "2 API integrations",
      "Unlimited users",
      "6 months support",
    ],
  },
  {
    name: "Enterprise Suite",
    price: "Custom Quote",
    label: "White-label ready",
    description: "For agencies, multi-branch teams, and larger operating systems.",
    features: [
      "White-label option",
      "Full AI layer",
      "Multi-tenant setup",
      "Dedicated server setup",
      "On-premise option",
      "1 year priority support",
    ],
  },
];

export const addOns = [
  { title: "WhatsApp Automation", price: "₹14,999+", description: "Auto-send WhatsApp updates on lead changes, payments, and reminders." },
  { title: "Lead Scoring Engine", price: "₹19,999+", description: "Score leads using source, activity, budget, behavior, and readiness." },
  { title: "Ticket Escalation System", price: "₹12,999+", description: "Escalate unresolved tickets and notify managers before SLA breaches." },
  { title: "Payment Workflow", price: "₹9,999+", description: "Create due, overdue, and completed payment reminders and status updates." },
  { title: "Email Drip Campaigns", price: "₹17,999+", description: "Automated follow-up emails based on lead stage and timing." },
  { title: "Multi-Pipeline Builder", price: "₹11,999+", description: "Create sales, support, onboarding, and custom operational pipelines." },
];

export const amcPlans = [
  "Basic AMC - ₹9,999/year: bug fixes, minor updates, and email support.",
  "Standard AMC - ₹24,999/year: Basic AMC plus 2 feature additions and priority support.",
  "Premium AMC - ₹59,999/year: dedicated developer support, unlimited small changes, and SLA-based support.",
];

export const blogPosts: BlogPost[] = [
  {
    category: "Lead Management",
    title: "Why businesses lose leads even after running ads",
    excerpt: "Ad spend brings enquiries, but weak ownership, slow follow-ups, and scattered tracking quietly reduce ROI.",
    readTime: "5 min read",
  },
  {
    category: "CRM Strategy",
    title: "Custom CRM vs generic CRM: what growing teams should choose",
    excerpt: "A practical comparison for businesses deciding between subscription tools and workflow-first CRM ownership.",
    readTime: "7 min read",
  },
  {
    category: "Automation",
    title: "How workflow automation improves sales follow-ups",
    excerpt: "Use triggers, tasks, and reminders to keep every prospect moving without depending on memory.",
    readTime: "6 min read",
  },
  {
    category: "Reporting",
    title: "The dashboards every sales manager should see daily",
    excerpt: "Track overdue follow-ups, source quality, deal movement, and team activity without manual reports.",
    readTime: "5 min read",
  },
  {
    category: "Implementation",
    title: "How to plan CRM fields before development starts",
    excerpt: "Avoid messy data by defining lead sources, statuses, owners, products, deal values, and next actions early.",
    readTime: "8 min read",
  },
  {
    category: "AI CRM",
    title: "Where AI lead scoring actually helps sales teams",
    excerpt: "AI works best when it supports prioritization, summaries, and action suggestions instead of replacing sales judgment.",
    readTime: "6 min read",
  },
  {
    category: "WhatsApp CRM",
    title: "Using WhatsApp triggers without making messages feel robotic",
    excerpt: "Combine templates, timing, owner context, and smart handoffs to keep automated communication useful.",
    readTime: "5 min read",
  },
  {
    category: "Sales Ops",
    title: "Why every lead needs an owner, deadline, and next action",
    excerpt: "Simple accountability rules can fix most visibility and follow-up problems in growing teams.",
    readTime: "4 min read",
  },
  {
    category: "CRM Migration",
    title: "Moving from spreadsheets to CRM without confusing your team",
    excerpt: "A step-by-step transition plan for teams that still depend on Excel, WhatsApp, and manual reminders.",
    readTime: "7 min read",
  },
  {
    category: "Integrations",
    title: "How Google and Meta lead integrations improve response time",
    excerpt: "Real-time lead capture helps teams respond while buyer intent is still fresh.",
    readTime: "5 min read",
  },
  {
    category: "Process Design",
    title: "How to define pipeline stages that your team will actually use",
    excerpt: "Good stages are clear, action-based, measurable, and aligned with how customers buy.",
    readTime: "6 min read",
  },
  {
    category: "Customer Success",
    title: "CRM adoption fails when training is treated as an afterthought",
    excerpt: "Launch success depends on practical user guidance, manager rituals, and simple daily workflows.",
    readTime: "5 min read",
  },
  {
    category: "Operations",
    title: "Connecting sales, support, and finance inside one CRM workflow",
    excerpt: "Use role-based modules and handoffs to reduce missed information between departments.",
    readTime: "7 min read",
  },
  {
    category: "Dashboards",
    title: "What founders should measure inside a CRM every week",
    excerpt: "Lead volume, speed-to-contact, conversion, revenue, delays, and source quality tell a clear growth story.",
    readTime: "5 min read",
  },
  {
    category: "Automation",
    title: "Trigger, condition, action: the simple CRM automation model",
    excerpt: "A clear framework for building useful automation without making workflows brittle.",
    readTime: "4 min read",
  },
  {
    category: "Pricing",
    title: "Why owned CRM systems can beat monthly subscriptions over time",
    excerpt: "Subscription software looks cheaper upfront, but ownership can create better fit, control, and long-term value.",
    readTime: "6 min read",
  },
  {
    category: "Sales Teams",
    title: "How managers can spot stalled deals before the month ends",
    excerpt: "Use pipeline aging, overdue tasks, missing next actions, and stage movement to find risks earlier.",
    readTime: "5 min read",
  },
  {
    category: "AI CRM",
    title: "Next-best-action recommendations: what they are and when to use them",
    excerpt: "Smart suggestions can help sales reps choose the right call, message, or escalation path.",
    readTime: "6 min read",
  },
  {
    category: "Support",
    title: "How ticket escalation workflows protect customer experience",
    excerpt: "Escalation rules make support teams more predictable and help managers intervene before SLA issues grow.",
    readTime: "5 min read",
  },
  {
    category: "Business Growth",
    title: "Your CRM should become your operating system, not just a contact list",
    excerpt: "A modern CRM connects leads, clients, tasks, automation, reporting, and decisions in one system.",
    readTime: "7 min read",
  },
];

export function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => slugify(post.title) === slug);
}

export const faqs = [
  {
    question: "Is HNX a ready-made CRM or custom CRM?",
    answer:
      "HNX is positioned as a custom CRM ownership system. It can be built around your workflow, modules, users, dashboards, automations, and integrations.",
  },
  {
    question: "Who is HNX best for?",
    answer:
      "It is best for small and mid-sized teams that have outgrown spreadsheets, WhatsApp follow-ups, scattered tools, or generic CRM systems that do not match their process.",
  },
  {
    question: "Can WhatsApp, email, payment, or ad integrations be added?",
    answer:
      "Yes. WhatsApp, email, Google/Meta leads, payment gateways, reporting tools, third-party APIs, and existing CRM or ERP systems can be added based on scope.",
  },
  {
    question: "Can AI features be added later?",
    answer:
      "Yes. AI lead scoring, smart suggestions, message drafts, sales insights, chatbot support, and report summaries can be added as advanced layers.",
  },
  {
    question: "How long does implementation take?",
    answer:
      "A lean CRM can start from 3-4 weeks. A workflow-heavy CRM with automations, dashboards, integrations, and AI can take 6-12+ weeks depending on scope.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes. Launch support, training, documentation, and optional annual maintenance packages can be included so the CRM keeps improving after go-live.",
  },
];

export const footerColumns = [
  {
    title: "Services",
    links: [
      { label: "CRM Systems", href: "/crm-demo" },
      { label: "ROI Calculator", href: "/roi-calculator" },
      { label: "Custom CRM", href: "/crm-systems" },
      { label: "Automation", href: "/workflow-lab" },
      { label: "AI CRM", href: "/ai-crm" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Sales CRM", href: "/solutions#sales-crm" },
      { label: "Support CRM", href: "/solutions#support-crm" },
      { label: "Operations CRM", href: "/solutions#operations-crm" },
      { label: "Industries", href: "/industries" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "CRM Guide", href: "/resources#crm-guide" },
      { label: "Use Cases", href: "/resources#use-cases" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
];

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "X / Twitter", href: "https://x.com/" },
  { label: "Facebook", href: "https://www.facebook.com/" },
  { label: "Instagram", href: "https://www.instagram.com/" },
];

export const trustCards = [
  { title: "Workflow-first consultation", icon: Workflow },
  { title: "No generic proposal", icon: ShieldCheck },
  { title: "Clear package recommendation", icon: BadgeIndianRupee },
  { title: "Scalable roadmap", icon: RefreshCw },
];
