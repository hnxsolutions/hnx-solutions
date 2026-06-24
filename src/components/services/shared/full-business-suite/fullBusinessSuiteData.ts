import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Bell,
  Bot,
  BriefcaseBusiness,
  CalendarCheck,
  CheckCircle2,
  ClipboardCheck,
  Database,
  FileText,
  Gauge,
  Globe2,
  Headphones,
  LayoutDashboard,
  LineChart,
  Link2,
  Mail,
  MessageCircle,
  MonitorSmartphone,
  MousePointerClick,
  Network,
  PanelsTopLeft,
  Rocket,
  SearchCheck,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  Users,
  Workflow,
  Zap,
} from "lucide-react";

export type SuiteTone = "blue" | "navy" | "green" | "orange" | "purple" | "red" | "teal";

export type IconItem = {
  title: string;
  description: string;
  icon: LucideIcon;
  tone: SuiteTone;
};

export type StackRow = {
  need: string;
  stack: Array<{ label: string; tone: SuiteTone }>;
};

export type PackageOption = {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  badge?: string;
};

export const fullBusinessSuiteData = {
  path: "/services/full-business-suite",
  metadata: {
    title: "HNX Full Business Suite | Complete Service Business System",
    description:
      "Plan and build a complete service business system with website, mobile app, CRM, client portal, dashboards, automation, AI assistant, integrations, and reporting.",
    keywords: [
      "HNX Full Business Suite",
      "service business software",
      "business automation",
      "CRM portal dashboard",
      "website app CRM",
      "digital business system",
    ],
  },
  hero: {
    eyebrow: "Full Business Suite for Services",
    title: "One Complete Digital System to Run & Grow Your Service Business",
    description:
      "We research your business, recommend the right tools, and build a connected system that helps you deliver services better and grow faster.",
    bullets: [
      "Business Research & Analysis",
      "Smart Tool Recommendations",
      "Website + App + CRM + Portal",
      "Automation + Dashboards + AI",
    ],
    primaryLabel: "Get Your Business Audit",
    primaryHref: "/contact",
    secondaryLabel: "See What's Included",
    secondaryHref: "#modules",
    stats: [
      { label: "Happy Clients", value: "250+", icon: Users },
      { label: "Projects Delivered", value: "500+", icon: ClipboardCheck },
      { label: "Service Categories", value: "15+", icon: BriefcaseBusiness },
      { label: "Client Retention", value: "98%", icon: CheckCircle2 },
    ],
  },
  comparison: {
    eyebrow: "Not Just Software",
    title: "We Don't Just Build Software. We Build Complete Business Systems.",
    description:
      "Most companies get software. Our clients get clarity, alignment, and a system built to run their business better - today and as they grow.",
    typicalTitle: "Typical Approach",
    suiteTitle: "HNX Full Business Suite",
    typical: [
      "Tools built separately",
      "No business understanding",
      "Manual follow-ups",
      "Disconnected systems",
      "Limited insights",
      "No automation strategy",
    ],
    suite: [
      "Business studied first",
      "Right tools recommended",
      "Fully connected systems",
      "Automation from the start",
      "Real-time insights & reports",
      "One team for everything",
    ],
    callout:
      "We build systems that streamline your operations, enhance customer experience, and drive growth.",
  },
  discovery: {
    eyebrow: "Business Discovery",
    title: "We First Understand Your Service Business Deeply",
    description:
      "We study your services, clients, team workflows, and challenges to design the right digital system for you.",
    cards: [
      { title: "Business Study", description: "Understand services, offers, goals, and revenue flow.", icon: SearchCheck, tone: "blue" },
      { title: "Process Mapping", description: "Map client, team, delivery, and support workflows.", icon: Workflow, tone: "green" },
      { title: "Gap Analysis", description: "Find manual work, missing visibility, and friction points.", icon: Target, tone: "purple" },
      { title: "Solution Planning", description: "Choose the modules and integrations that matter.", icon: PanelsTopLeft, tone: "orange" },
      { title: "Roadmap Creation", description: "Define what to build first, next, and later.", icon: ClipboardCheck, tone: "teal" },
    ] satisfies IconItem[],
    process: [
      { label: "Understand", icon: SearchCheck },
      { label: "Analyze", icon: BarChart3 },
      { label: "Plan", icon: ClipboardCheck },
      { label: "Recommend", icon: LineChart },
      { label: "Build", icon: Workflow },
    ],
  },
  stackBuilder: {
    eyebrow: "Smart Recommendation",
    title: "Get the Right Tools for Every Part of Your Business",
    description:
      "Mix, match, and connect the tools you need. We recommend the best stack for your goals, so you can move faster and grow with confidence.",
    tabs: [
      { label: "Lead Generation", icon: Target },
      { label: "Operations", icon: Workflow },
      { label: "Client Management", icon: Users },
      { label: "Growth", icon: LineChart },
      { label: "Automation", icon: Bot },
    ],
    rows: [
      {
        need: "Need More Leads?",
        stack: [
          { label: "Website", tone: "orange" },
          { label: "CRM", tone: "blue" },
          { label: "Lead Automation", tone: "green" },
        ],
      },
      {
        need: "Want Better Client Management?",
        stack: [
          { label: "CRM", tone: "blue" },
          { label: "Client Portal", tone: "purple" },
          { label: "Mobile App", tone: "teal" },
        ],
      },
      {
        need: "Need to Streamline Operations?",
        stack: [
          { label: "Dashboard", tone: "navy" },
          { label: "Workflow Automation", tone: "green" },
          { label: "Reports", tone: "blue" },
        ],
      },
      {
        need: "Want Repeat Business?",
        stack: [
          { label: "Email Marketing", tone: "red" },
          { label: "WhatsApp Automation", tone: "green" },
          { label: "Loyalty", tone: "orange" },
        ],
      },
      {
        need: "Too Many Manual Tasks?",
        stack: [
          { label: "Workflow Automation", tone: "purple" },
          { label: "AI Assistant", tone: "teal" },
          { label: "Reports", tone: "blue" },
        ],
      },
    ] satisfies StackRow[],
    reasons: [
      "Right tool for the right job",
      "Everything connected",
      "Automated workflows",
      "Real-time insights",
      "Scalable as you grow",
    ],
  },
  modules: {
    eyebrow: "Suite Modules",
    title: "All the Tools You Need, Connected Together",
    description:
      "Our full suite of integrated tools helps you run your business seamlessly. Built to work together. Designed to help you grow.",
    items: [
      { title: "Website", description: "Trust-building pages and lead capture.", icon: Globe2, tone: "blue" },
      { title: "Mobile App", description: "Customer and team access on the go.", icon: Smartphone, tone: "blue" },
      { title: "CRM", description: "Lead, client, pipeline, and follow-up control.", icon: Database, tone: "orange" },
      { title: "Client Portal", description: "Secure self-service access for clients.", icon: MonitorSmartphone, tone: "teal" },
      { title: "Bookings & Orders", description: "Appointments, requests, and order flows.", icon: CalendarCheck, tone: "green" },
      { title: "Payments", description: "Invoices, payment status, and records.", icon: BriefcaseBusiness, tone: "orange" },
      { title: "AI Assistant", description: "Smart help for replies, summaries, and actions.", icon: Bot, tone: "purple" },
      { title: "Team Management", description: "Roles, tasks, activity, and ownership.", icon: Users, tone: "teal" },
      { title: "Reports & Analytics", description: "Dashboards for growth and operations.", icon: BarChart3, tone: "green" },
      { title: "Tasks & Projects", description: "Assignments, progress, and accountability.", icon: ClipboardCheck, tone: "blue" },
      { title: "Documents", description: "Files, approvals, and shared records.", icon: FileText, tone: "navy" },
      { title: "Integrations", description: "Connect tools, APIs, email, and WhatsApp.", icon: Link2, tone: "red" },
    ] satisfies IconItem[],
  },
  automation: {
    eyebrow: "Automation Opportunities",
    title: "Automate. Save Time. Focus on What Matters.",
    description:
      "Streamline repetitive tasks, reduce manual work, and create seamless experiences for your team and your customers.",
    items: [
      { title: "Lead Capture Automation", description: "Capture leads from website, ads, forms, and chats.", icon: MousePointerClick, tone: "green" },
      { title: "Follow-up Automation", description: "Send replies, reminders, and next-step messages.", icon: MessageCircle, tone: "green" },
      { title: "Task & Workflow Automation", description: "Assign tasks, approvals, and internal actions.", icon: Workflow, tone: "red" },
      { title: "Client Communication", description: "Keep clients updated through email and WhatsApp.", icon: Bell, tone: "orange" },
      { title: "Reporting Automation", description: "Deliver daily and weekly reports automatically.", icon: BarChart3, tone: "purple" },
      { title: "AI-Powered Assistance", description: "Use AI for replies, qualification, and summaries.", icon: Bot, tone: "blue" },
    ] satisfies IconItem[],
    workflow: [
      { title: "Trigger", detail: "New Lead", icon: Zap, tone: "blue" },
      { title: "Welcome", detail: "Send message", icon: MessageCircle, tone: "green" },
      { title: "Assign Task", detail: "Owner selected", icon: Users, tone: "orange" },
      { title: "Follow-up", detail: "Schedule next step", icon: Mail, tone: "purple" },
      { title: "Converted", detail: "Mark as client", icon: CheckCircle2, tone: "teal" },
    ] satisfies Array<{ title: string; detail: string; icon: LucideIcon; tone: SuiteTone }>,
  },
  examples: {
    eyebrow: "Service Solutions",
    title: "Tailored Full Business Suite for Every Service",
    description:
      "From professional services to high-touch experiences, our full business suite adapts to your industry so you can run smarter, serve better, and grow faster.",
    items: [
      {
        title: "Consulting Services",
        points: [
          "Manage clients, projects, and engagements seamlessly.",
          "Track time, invoices, and profitability in one connected system.",
        ],
        icon: BriefcaseBusiness,
        tone: "blue",
      },
      {
        title: "IT & Software Services",
        points: [
          "Manage projects, sprints, and developer workloads efficiently.",
          "Track time, bugs, and deliverables with complete visibility.",
        ],
        icon: Network,
        tone: "teal",
      },
      {
        title: "Marketing Agencies",
        points: [
          "Manage campaigns, leads, and client deliverables.",
          "Track performance, budgets, and results in real time.",
        ],
        icon: LineChart,
        tone: "orange",
      },
      {
        title: "Training & Coaching",
        points: [
          "Manage students, courses, and enrollment workflows.",
          "Track progress, certificates, and payments effortlessly.",
        ],
        icon: Users,
        tone: "purple",
      },
      {
        title: "Event Management",
        points: [
          "Manage events, registrations, and attendee experiences.",
          "Track sales, vendors, and event performance easily.",
        ],
        icon: CalendarCheck,
        tone: "red",
      },
    ] satisfies Array<{ title: string; points: string[]; icon: LucideIcon; tone: SuiteTone }>,
  },
  roadmap: {
    eyebrow: "Growth Roadmap",
    title: "From Discovery to Long-Term Growth",
    description:
      "A proven journey that aligns strategy, systems, and automation so your business runs better today and scales tomorrow.",
    steps: [
      { title: "Discovery & Audit", description: "Study your business, tools, users, and bottlenecks.", icon: SearchCheck, tone: "orange" },
      { title: "Strategy & Planning", description: "Choose the right modules, integrations, and order.", icon: ClipboardCheck, tone: "blue" },
      { title: "Setup & Build", description: "Design and build the connected business suite.", icon: MonitorSmartphone, tone: "green" },
      { title: "Automation & Launch", description: "Connect workflows, test the system, and go live.", icon: Rocket, tone: "teal" },
      { title: "Optimize & Grow", description: "Improve with dashboards, insights, and new modules.", icon: LineChart, tone: "purple" },
    ] satisfies IconItem[],
    callout:
      "You're never alone. We partner with you at every step - delivering clarity, results, and a system that evolves with your business.",
  },
  dashboard: {
    eyebrow: "Connected Dashboard",
    title: "Your Business, All in One Dashboard",
    description:
      "Track performance, monitor operations, and manage your entire business from a single, connected dashboard - so you can move faster and grow smarter.",
    list: [
      { title: "Real-Time Performance", description: "Live revenue, lead, client, and delivery updates.", icon: Gauge, tone: "blue" },
      { title: "Complete Visibility", description: "See every team, task, project, and customer flow.", icon: LayoutDashboard, tone: "green" },
      { title: "Smarter Decisions", description: "Use reports and trends to prioritize action.", icon: BarChart3, tone: "purple" },
      { title: "Stay in Control", description: "Track ownership, status, and deadlines clearly.", icon: ShieldCheck, tone: "navy" },
      { title: "Secure & Reliable", description: "Role-based access and protected business data.", icon: CheckCircle2, tone: "teal" },
      { title: "Accessible Anywhere", description: "Manage the business from desktop or mobile.", icon: Smartphone, tone: "orange" },
    ] satisfies IconItem[],
    metrics: [
      { label: "Total Revenue", value: "$124.5K", meta: "+15.3%", icon: BarChart3, tone: "blue" },
      { label: "New Leads", value: "1,248", meta: "+12.5%", icon: Users, tone: "green" },
      { label: "Active Clients", value: "352", meta: "+8.4%", icon: BriefcaseBusiness, tone: "purple" },
      { label: "Avg. Deal Value", value: "$4.2K", meta: "+6.2%", icon: LineChart, tone: "orange" },
      { label: "Tasks Completed", value: "428", meta: "92% done", icon: CheckCircle2, tone: "teal" },
    ] satisfies Array<{ label: string; value: string; meta: string; icon: LucideIcon; tone: SuiteTone }>,
    activities: [
      "New lead from website",
      "Proposal approved",
      "Invoice payment received",
      "Project milestone completed",
      "Client follow-up scheduled",
    ],
  },
  whyChoose: {
    eyebrow: "Why Choose Full Business Suite",
    title: "Built for Service Businesses. Designed for Growth.",
    description:
      "Our full business suite brings everything you need into one connected system so you can streamline operations, delight customers, and grow with confidence.",
    cards: [
      { title: "One Complete System", description: "Website, CRM, portal, app, automation, and reports together.", icon: LayoutDashboard, tone: "blue" },
      { title: "Built Around Your Business", description: "The suite follows your services, workflows, and priorities.", icon: Sparkles, tone: "orange" },
      { title: "Automation First", description: "Reduce repeat work and speed up handoffs from day one.", icon: Zap, tone: "green" },
      { title: "Data-Driven Growth", description: "See what is working and where to improve next.", icon: BarChart3, tone: "purple" },
      { title: "Scalable & Flexible", description: "Start focused, then add modules as your business grows.", icon: Rocket, tone: "teal" },
      { title: "One Trusted Partner", description: "Strategy, design, development, automation, and support in one team.", icon: Headphones, tone: "navy" },
    ] satisfies IconItem[],
  },
  packages: {
    eyebrow: "Packages / Engagement Model",
    title: "Choose the Right Engagement for Your Business Stage",
    description:
      "Start with the right scope after a business audit. No fixed one-size package - just the system your business actually needs.",
    items: [
      {
        title: "Starter Digital Suite",
        subtitle: "Starts After Audit",
        description:
          "For businesses that need website, lead capture, and basic automation.",
        features: ["Business audit", "Website or landing pages", "Lead capture", "Basic automation"],
      },
      {
        title: "Growth Business Suite",
        subtitle: "Custom Quote",
        badge: "Most Selected",
        description:
          "For businesses that need website, CRM, portal, app, dashboards, and connected workflows.",
        features: ["Website + CRM", "Client portal", "Dashboards", "Connected workflows"],
      },
      {
        title: "Advanced Automation Suite",
        subtitle: "Custom Quote",
        description:
          "For businesses that need advanced workflow automation, integrations, reports, and AI assistance.",
        features: ["Workflow automation", "Integrations", "Advanced reports", "AI assistance"],
      },
      {
        title: "Enterprise Custom Suite",
        subtitle: "Custom Quote",
        description:
          "For businesses that need fully custom systems, role-based access, advanced dashboards, and long-term support.",
        features: ["Custom architecture", "Role-based access", "Advanced dashboards", "Long-term support"],
      },
    ] satisfies PackageOption[],
  },
  finalCta: {
    eyebrow: "Ready to Build Smarter?",
    title: "Let's Build the Right Digital System for Your Business",
    description:
      "We'll study your business, identify the most useful digital tools, and create a clear roadmap before development starts.",
    primaryLabel: "Request Business Audit",
    primaryHref: "/contact",
    secondaryLabel: "Book Consultation",
    secondaryHref: "/contact",
  },
};
