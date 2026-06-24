import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Bell,
  Bot,
  Briefcase,
  CalendarCheck,
  Car,
  CheckCircle2,
  ClipboardCheck,
  ClipboardList,
  CreditCard,
  Factory,
  FileText,
  Globe2,
  GraduationCap,
  Handshake,
  Headphones,
  HeartPulse,
  Home,
  Landmark,
  LayoutDashboard,
  Lightbulb,
  LockKeyhole,
  Mail,
  Map,
  Megaphone,
  MessageCircle,
  MonitorSmartphone,
  Network,
  Plane,
  Puzzle,
  Rocket,
  Search,
  Settings,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Store,
  Target,
  TrendingUp,
  UserRound,
  Users,
  Workflow,
  Wrench,
  Zap,
} from "lucide-react";

export type BusinessSuiteTone =
  | "blue"
  | "orange"
  | "green"
  | "purple"
  | "red"
  | "teal"
  | "navy";

export type BusinessSuiteRoute = {
  industrySlug: string;
  solutionSlug: string;
};

export type BusinessSuiteIconItem = {
  title: string;
  description: string;
  icon: LucideIcon;
  tone?: BusinessSuiteTone;
};

export type BusinessSuiteStackRow = {
  problem: string;
  stack: string[];
  icon: LucideIcon;
  tone: BusinessSuiteTone;
};

export type BusinessSuiteModule = {
  title: string;
  icon: LucideIcon;
  tone: BusinessSuiteTone;
  featured?: boolean;
};

export type BusinessSuiteIndustryExample = {
  name: string;
  category: string;
  image: string;
  description: string;
  href: string;
};

export type BusinessSuiteRoadmapStep = {
  title: string;
  description: string;
  icon: LucideIcon;
  tone: BusinessSuiteTone;
};

export type BusinessSuitePackage = {
  name: string;
  bestFor: string;
  description: string;
  includes: string[];
  badge?: string;
};

export type BusinessSuitePageData = {
  industryName: string;
  industrySlug: string;
  aliases: string[];
  primaryRoute: string;
  keywords: string[];
  serviceType: string;
  industryIcon: LucideIcon;
  hero: {
    eyebrow: string;
    title: string;
    highlightedTitle: string;
    description: string;
    bullets: string[];
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel: string;
    secondaryHref: string;
    stats: Array<{ label: string; value: string; icon: LucideIcon }>;
  };
  comparison: {
    normal: string[];
    suite: string[];
  };
  discovery: {
    kicker: string;
    title: string;
    cards: BusinessSuiteIconItem[];
    process: BusinessSuiteIconItem[];
    image: string;
  };
  stackBuilder: {
    tabs: BusinessSuiteIconItem[];
    rows: BusinessSuiteStackRow[];
  };
  modules: BusinessSuiteModule[];
  automation: {
    cards: BusinessSuiteIconItem[];
    workflow: BusinessSuiteIconItem[];
  };
  industryExamples: BusinessSuiteIndustryExample[];
  roadmap: BusinessSuiteRoadmapStep[];
  dashboard: {
    sideCards: BusinessSuiteIconItem[];
    metrics: Array<{ label: string; value: string; meta: string; icon: LucideIcon; tone: BusinessSuiteTone }>;
    activities: string[];
  };
  whyChoose: BusinessSuiteIconItem[];
  packages: BusinessSuitePackage[];
  finalCta: {
    title: string;
    description: string;
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel: string;
    secondaryHref: string;
  };
};

type IndustryConfig = {
  slug: string;
  name: string;
  icon: LucideIcon;
  heroDescription: string;
  stackRows: BusinessSuiteStackRow[];
  modules: string[];
  automationCards: BusinessSuiteIconItem[];
  example: BusinessSuiteIndustryExample;
  dashboardNoun: string;
  keywords: string[];
};

export const businessSuiteSlug = "business-suite";

const defaultHero = {
  eyebrow: "Full Business Suite",
  title: "One Complete Digital System for",
  highlightedTitle: "Your Business",
  description:
    "We study your business, recommend the right digital tools, and build a connected suite that drives growth and efficiency.",
  bullets: [
    "Business Research",
    "Smart Recommendations",
    "Web + App + Portal + CRM",
    "Automation + Dashboards + AI",
  ],
  primaryLabel: "Get Business Audit",
  primaryHref: "/contact",
  secondaryLabel: "See What's Included",
  secondaryHref: "#business-suite-modules",
  stats: [
    { label: "Happy Clients", value: "150+", icon: Users },
    { label: "Projects Delivered", value: "250+", icon: ClipboardCheck },
    { label: "Industries", value: "10+", icon: ShieldCheck },
    { label: "Client Retention", value: "98%", icon: CheckCircle2 },
  ],
};

const comparison = {
  normal: [
    "Website made separately",
    "App made separately",
    "CRM added later",
    "No automation planning",
    "No business research",
    "Disconnected tools",
  ],
  suite: [
    "Business researched first",
    "Right tools recommended",
    "Everything connected",
    "Automation planned",
    "Dashboards & reports",
    "One team for everything",
  ],
};

const discoveryCards: BusinessSuiteIconItem[] = [
  {
    title: "Business Model Study",
    description: "We understand how you earn, serve, and scale.",
    icon: Network,
    tone: "blue",
  },
  {
    title: "Customer Journey Mapping",
    description: "We map how customers find, contact, buy, and return.",
    icon: Users,
    tone: "navy",
  },
  {
    title: "Team Workflow Audit",
    description: "We check how your team works every day.",
    icon: Workflow,
    tone: "green",
  },
  {
    title: "Digital Gap Analysis",
    description: "We find what is missing across site, app, CRM, portal, automation, and dashboards.",
    icon: ClipboardCheck,
    tone: "purple",
  },
  {
    title: "Priority Roadmap",
    description: "We suggest what to build first, second, and later.",
    icon: Map,
    tone: "orange",
  },
];

const discoveryProcess: BusinessSuiteIconItem[] = [
  { title: "Understand", description: "Study", icon: Search, tone: "orange" },
  { title: "Analyze", description: "Audit", icon: BarChart3, tone: "blue" },
  { title: "Plan", description: "Scope", icon: ClipboardList, tone: "purple" },
  { title: "Recommend", description: "Stack", icon: TrendingUp, tone: "orange" },
  { title: "Build", description: "Launch", icon: Wrench, tone: "navy" },
];

const stackTabs: BusinessSuiteIconItem[] = [
  { title: "Leads", description: "Capture", icon: Users, tone: "navy" },
  { title: "Operations", description: "Run", icon: Settings, tone: "blue" },
  { title: "Customers", description: "Serve", icon: UserRound, tone: "purple" },
  { title: "Growth", description: "Scale", icon: BarChart3, tone: "green" },
  { title: "Automation", description: "Save time", icon: Bot, tone: "orange" },
];

const baseModules: BusinessSuiteModule[] = [
  { title: "Website", icon: Globe2, tone: "blue" },
  { title: "Mobile App", icon: Smartphone, tone: "blue" },
  { title: "Custom CRM", icon: Users, tone: "orange" },
  { title: "Portal", icon: MonitorSmartphone, tone: "teal" },
  { title: "Admin Dashboard", icon: LayoutDashboard, tone: "blue" },
  { title: "Payments", icon: CreditCard, tone: "orange" },
  { title: "Bookings / Orders", icon: CalendarCheck, tone: "green" },
  { title: "Lead Management", icon: UserRound, tone: "purple" },
  { title: "WhatsApp Automation", icon: MessageCircle, tone: "green" },
  { title: "Email Automation", icon: Mail, tone: "purple" },
  { title: "Reports & Analytics", icon: BarChart3, tone: "green" },
  { title: "AI Chatbot", icon: Bot, tone: "purple" },
  { title: "Staff Management", icon: Briefcase, tone: "teal" },
  { title: "Support System", icon: Headphones, tone: "red" },
  { title: "Notifications", icon: Bell, tone: "orange" },
  { title: "Document Management", icon: FileText, tone: "blue" },
  { title: "Role-Based Access", icon: ShieldCheck, tone: "teal" },
  { title: "Integrations", icon: Puzzle, tone: "red" },
  { title: "Data Security", icon: LockKeyhole, tone: "orange" },
  { title: "More Modules", icon: Settings, tone: "blue" },
];

const baseAutomationCards: BusinessSuiteIconItem[] = [
  {
    title: "Lead Auto-Capture",
    description: "Capture leads from website, ads, WhatsApp, and forms in one place.",
    icon: Mail,
    tone: "green",
  },
  {
    title: "Follow-Up Automation",
    description: "Send automatic replies, reminders, and follow-ups.",
    icon: MessageCircle,
    tone: "green",
  },
  {
    title: "Task & Workflow Automation",
    description: "Tasks, approvals, and internal workflows move automatically.",
    icon: ClipboardCheck,
    tone: "red",
  },
  {
    title: "Customer Updates",
    description: "Status updates, reminders, and alerts are sent automatically.",
    icon: Bell,
    tone: "orange",
  },
  {
    title: "Reporting Automation",
    description: "Daily and weekly reports are delivered to your team automatically.",
    icon: BarChart3,
    tone: "purple",
  },
  {
    title: "AI Assistance",
    description: "AI helps reply, qualify leads, and suggest next actions.",
    icon: Bot,
    tone: "blue",
  },
];

const workflowItems: BusinessSuiteIconItem[] = [
  { title: "Trigger", description: "New lead", icon: Zap, tone: "blue" },
  { title: "WhatsApp Msg", description: "Send welcome message", icon: MessageCircle, tone: "green" },
  { title: "Assign Task", description: "Assign to sales rep", icon: UserRound, tone: "orange" },
  { title: "Follow Up", description: "Send reminder in 2 days", icon: Mail, tone: "purple" },
  { title: "Deal Won", description: "Move to won stage", icon: CheckCircle2, tone: "green" },
];

const commonExamples: BusinessSuiteIndustryExample[] = [
  {
    name: "Healthcare",
    category: "Healthcare",
    image: "/images/industries/crm/healthcare-preview.png",
    description:
      "Website + appointment booking + patient portal + CRM + reminders + doctor dashboard.",
    href: "/industries/healthcare/business-suite",
  },
  {
    name: "Real Estate",
    category: "Real Estate",
    image: "/images/industries/crm/real-estate-preview.png",
    description: "Property website + lead CRM + broker app + client portal.",
    href: "/industries/real-estate/business-suite",
  },
  {
    name: "Education",
    category: "Education",
    image: "/images/industries/crm/education-campus-preview.png",
    description: "Admission system + student portal + counselor CRM + fee reminders.",
    href: "/industries/education/business-suite",
  },
  {
    name: "Manufacturing",
    category: "Others",
    image: "/images/industries/crm/manufacturing-preview.png",
    description: "Dealer portal + order tracking + quotation CRM + dashboards.",
    href: "/industries/manufacturing/business-suite",
  },
  {
    name: "Retail / E-Commerce",
    category: "Retail",
    image: "/images/industries/crm/retail-preview.png",
    description: "Online store + loyalty app + inventory dashboard + customer CRM.",
    href: "/industries/retail/business-suite",
  },
];

const roadmap: BusinessSuiteRoadmapStep[] = [
  {
    title: "Business Audit & Digital Plan",
    description: "We understand and plan the right strategy.",
    icon: Lightbulb,
    tone: "orange",
  },
  {
    title: "Website / Lead System",
    description: "Build your online presence and lead capture.",
    icon: MonitorSmartphone,
    tone: "orange",
  },
  {
    title: "CRM / Portal / Mobile App",
    description: "Manage customers, staff, and operations.",
    icon: Smartphone,
    tone: "green",
  },
  {
    title: "Automation & Integrations",
    description: "Automate workflows and connect systems.",
    icon: Workflow,
    tone: "green",
  },
  {
    title: "Dashboards & AI Agents",
    description: "Reports, insights, and AI-powered help.",
    icon: BarChart3,
    tone: "blue",
  },
  {
    title: "Continuous Optimization",
    description: "Improve, scale, and grow with data.",
    icon: Rocket,
    tone: "purple",
  },
];

const dashboardSideCards: BusinessSuiteIconItem[] = [
  {
    title: "Real-Time Insights",
    description: "Live updates on leads, revenue, tasks, and more.",
    icon: Users,
    tone: "blue",
  },
  {
    title: "Performance Overview",
    description: "Track growth, conversion, and key metrics at a glance.",
    icon: BarChart3,
    tone: "blue",
  },
  {
    title: "Smarter Decisions",
    description: "Visual reports and dashboards help you act faster.",
    icon: Target,
    tone: "navy",
  },
  {
    title: "Stay on Top",
    description: "Recent activities and task alerts keep you informed.",
    icon: Bell,
    tone: "purple",
  },
  {
    title: "Secure & Connected",
    description: "All your data, tools, and teams connected in one place.",
    icon: ShieldCheck,
    tone: "blue",
  },
  {
    title: "Everything in Sync",
    description: "Sales, marketing, support, and operations working together.",
    icon: Network,
    tone: "green",
  },
];

const whyChoose: BusinessSuiteIconItem[] = [
  {
    title: "One Team",
    description: "Everything handled by one reliable team.",
    icon: Users,
    tone: "orange",
  },
  {
    title: "No Disconnected Tools",
    description: "All systems connected and working together.",
    icon: Network,
    tone: "blue",
  },
  {
    title: "Built Around You",
    description: "Solutions built around your real workflow.",
    icon: Puzzle,
    tone: "red",
  },
  {
    title: "Custom Features",
    description: "Only what you need, nothing extra.",
    icon: ClipboardCheck,
    tone: "green",
  },
  {
    title: "Automation First",
    description: "Automation planned from day one.",
    icon: ShieldCheck,
    tone: "green",
  },
  {
    title: "Data Ownership",
    description: "Your data stays secure, always with you.",
    icon: LockKeyhole,
    tone: "blue",
  },
  {
    title: "Scalable Growth",
    description: "Designed to grow with your business.",
    icon: TrendingUp,
    tone: "blue",
  },
  {
    title: "Long-Term Partner",
    description: "We stay with you in your growth journey.",
    icon: Handshake,
    tone: "orange",
  },
];

const packages: BusinessSuitePackage[] = [
  {
    name: "Starter Digital Suite",
    bestFor: "Website + lead capture + basic automation.",
    description: "For businesses that need a strong foundation before expanding into a larger system.",
    includes: ["Business audit", "Website or landing pages", "Lead forms", "WhatsApp/email alerts", "Basic reports"],
  },
  {
    name: "Growth Business Suite",
    bestFor: "Website/app/CRM/portal with connected workflows.",
    description: "For teams that need customer management, operations visibility, and workflow automation.",
    includes: ["Website or app", "CRM setup", "Portal workflows", "Dashboards", "Automation planning"],
    badge: "Most Selected",
  },
  {
    name: "Advanced Automation Suite",
    bestFor: "Dashboards, AI agents, integrations, and advanced operations.",
    description: "For businesses ready to reduce manual work and connect multiple teams or tools.",
    includes: ["AI assistants", "Workflow automation", "Third-party integrations", "Advanced reporting", "Optimization"],
  },
  {
    name: "Custom Enterprise Suite",
    bestFor: "Full custom planning, multi-role systems, and long-term scaling.",
    description: "For organizations that need a complete digital operating system with custom scope.",
    includes: ["Custom architecture", "Multi-role access", "Cloud deployment", "Security planning", "Long-term support"],
  },
];

const industryConfigs: IndustryConfig[] = [
  {
    slug: "healthcare",
    name: "Healthcare",
    icon: HeartPulse,
    heroDescription: defaultHero.description,
    modules: ["Portal", "Bookings / Orders", "Custom CRM", "Notifications", "Document Management", "Role-Based Access"],
    dashboardNoun: "patients",
    keywords: ["healthcare full business suite", "healthcare digital system", "patient portal CRM app"],
    stackRows: [
      stack("Need More Appointments?", ["Website", "CRM", "WhatsApp Automation"], HeartPulse, "green"),
      stack("Need Patient Self-Service?", ["Portal", "Mobile App", "Notifications"], Headphones, "red"),
      stack("Manual Follow-Up Issues?", ["CRM", "Automation", "Doctor Dashboard"], Users, "blue"),
      stack("Want Repeat Visits?", ["Mobile App", "Reminders", "Campaigns"], CalendarCheck, "orange"),
      stack("Too Many Manual Tasks?", ["Portal", "Workflow Automation", "Reports"], ClipboardList, "purple"),
    ],
    automationCards: baseAutomationCards,
    example: commonExamples[0],
  },
  {
    slug: "finance",
    name: "Finance",
    icon: Landmark,
    heroDescription:
      "We study your finance workflow, recommend secure digital tools, and build a connected suite for clients, advisors, documents, approvals, and reporting.",
    modules: ["Portal", "Custom CRM", "Document Management", "Data Security", "Reports & Analytics", "Role-Based Access"],
    dashboardNoun: "clients",
    keywords: ["finance full business suite", "finance CRM portal", "finance dashboard automation"],
    stackRows: [
      stack("Need More Qualified Leads?", ["Website", "CRM", "Lead Scoring"], Landmark, "green"),
      stack("Need Client Self-Service?", ["Client Portal", "Mobile App", "Notifications"], LockKeyhole, "red"),
      stack("Manual Document Follow-Ups?", ["CRM", "Automation", "Advisor Dashboard"], FileText, "blue"),
      stack("Need Retention Workflows?", ["Mobile App", "Campaigns", "Reports"], TrendingUp, "orange"),
      stack("Too Many Approval Tasks?", ["Portal", "Workflow Automation", "Reports"], ClipboardList, "purple"),
    ],
    automationCards: [
      ...baseAutomationCards.slice(0, 4),
      {
        title: "Document Review Automation",
        description: "Route client files, approvals, and reminders without manual tracking.",
        icon: FileText,
        tone: "purple",
      },
      baseAutomationCards[5],
    ],
    example: {
      name: "Finance",
      category: "Others",
      image: "/images/industries/crm/finance-preview.png",
      description: "Client portal + document workflow + advisor CRM + secure dashboards.",
      href: "/industries/finance/business-suite",
    },
  },
  {
    slug: "education",
    name: "Education",
    icon: GraduationCap,
    heroDescription:
      "We study your admissions, student, parent, and operations workflow, then build one connected education suite for growth and efficiency.",
    modules: ["Website", "Portal", "Lead Management", "Bookings / Orders", "Notifications", "Reports & Analytics"],
    dashboardNoun: "students",
    keywords: ["education full business suite", "student portal CRM", "admission automation dashboard"],
    stackRows: [
      stack("Need More Admissions?", ["Website", "CRM", "WhatsApp Automation"], GraduationCap, "green"),
      stack("Need Student Self-Service?", ["Portal", "Mobile App", "Notifications"], Headphones, "red"),
      stack("Manual Counselor Follow-Up?", ["CRM", "Automation", "Counselor Dashboard"], Users, "blue"),
      stack("Want Better Parent Updates?", ["Mobile App", "Fee Reminders", "Campaigns"], Bell, "orange"),
      stack("Too Many Manual Tasks?", ["Portal", "Workflow Automation", "Reports"], ClipboardList, "purple"),
    ],
    automationCards: baseAutomationCards,
    example: commonExamples[2],
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    icon: Home,
    heroDescription:
      "We study your property, lead, site visit, broker, and client workflow, then build one connected suite that helps deals move faster.",
    modules: ["Website", "Custom CRM", "Mobile App", "Portal", "Lead Management", "Reports & Analytics"],
    dashboardNoun: "leads",
    keywords: ["real estate full business suite", "property CRM portal", "broker app dashboard"],
    stackRows: [
      stack("Need More Property Leads?", ["Website", "CRM", "WhatsApp Automation"], Home, "green"),
      stack("Need Buyer Self-Service?", ["Portal", "Mobile App", "Notifications"], Headphones, "red"),
      stack("Manual Site Visit Follow-Up?", ["CRM", "Automation", "Broker Dashboard"], Users, "blue"),
      stack("Want Repeat Investors?", ["Mobile App", "Campaigns", "Reports"], TrendingUp, "orange"),
      stack("Too Many Manual Tasks?", ["Portal", "Workflow Automation", "Reports"], ClipboardList, "purple"),
    ],
    automationCards: baseAutomationCards,
    example: commonExamples[1],
  },
  {
    slug: "retail",
    name: "Retail",
    icon: ShoppingBag,
    heroDescription:
      "We study your store, customer, order, loyalty, and inventory workflow, then build a connected suite for selling, service, and repeat growth.",
    modules: ["Website", "Mobile App", "Payments", "Bookings / Orders", "WhatsApp Automation", "Reports & Analytics"],
    dashboardNoun: "orders",
    keywords: ["retail full business suite", "ecommerce CRM app", "retail automation dashboard"],
    stackRows: [
      stack("Need More Orders?", ["Website", "CRM", "WhatsApp Automation"], ShoppingBag, "green"),
      stack("Need Customer Self-Service?", ["Portal", "Mobile App", "Notifications"], Headphones, "red"),
      stack("Manual Follow-Up Issues?", ["CRM", "Automation", "Manager Dashboard"], Users, "blue"),
      stack("Want Repeat Customers?", ["Mobile App", "Loyalty", "Campaigns"], Megaphone, "orange"),
      stack("Too Many Manual Tasks?", ["Portal", "Workflow Automation", "Reports"], ClipboardList, "purple"),
    ],
    automationCards: baseAutomationCards,
    example: commonExamples[4],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    icon: Factory,
    heroDescription:
      "We study your dealer, order, quotation, dispatch, and production workflow, then build one suite for stronger B2B operations.",
    modules: ["Portal", "Custom CRM", "Document Management", "Integrations", "Reports & Analytics", "Admin Dashboard"],
    dashboardNoun: "orders",
    keywords: ["manufacturing full business suite", "dealer portal CRM", "manufacturing dashboard automation"],
    stackRows: [
      stack("Need More Dealer Leads?", ["Website", "CRM", "WhatsApp Automation"], Factory, "green"),
      stack("Need Dealer Self-Service?", ["Dealer Portal", "Mobile App", "Notifications"], Headphones, "red"),
      stack("Manual RFQ Follow-Up?", ["CRM", "Automation", "Manager Dashboard"], Users, "blue"),
      stack("Want Faster Dispatch Updates?", ["Mobile App", "Status Alerts", "Reports"], Bell, "orange"),
      stack("Too Many Manual Tasks?", ["Portal", "Workflow Automation", "Reports"], ClipboardList, "purple"),
    ],
    automationCards: baseAutomationCards,
    example: commonExamples[3],
  },
  {
    slug: "insurance",
    name: "Insurance",
    icon: ShieldCheck,
    heroDescription:
      "We study your policy, claim, agent, and renewal workflow, then build a connected suite for service, retention, and reporting.",
    modules: ["Portal", "Custom CRM", "Notifications", "Document Management", "Role-Based Access", "Reports & Analytics"],
    dashboardNoun: "policies",
    keywords: ["insurance full business suite", "policyholder portal CRM", "claims automation dashboard"],
    stackRows: [
      stack("Need More Policy Leads?", ["Website", "CRM", "WhatsApp Automation"], ShieldCheck, "green"),
      stack("Need Policyholder Self-Service?", ["Portal", "Mobile App", "Notifications"], Headphones, "red"),
      stack("Manual Renewal Follow-Up?", ["CRM", "Automation", "Agent Dashboard"], Users, "blue"),
      stack("Want Better Retention?", ["Mobile App", "Renewal Campaigns", "Reports"], Megaphone, "orange"),
      stack("Too Many Claims Tasks?", ["Portal", "Workflow Automation", "Reports"], ClipboardList, "purple"),
    ],
    automationCards: baseAutomationCards,
    example: {
      name: "Insurance",
      category: "Others",
      image: "/images/industries/crm/insurance-preview.png",
      description: "Policy website + agent CRM + policyholder portal + renewal reminders.",
      href: "/industries/insurance/business-suite",
    },
  },
  {
    slug: "travel",
    name: "Travel",
    icon: Plane,
    heroDescription:
      "We study your booking, itinerary, traveler, payment, and support workflow, then build one suite for smoother travel operations.",
    modules: ["Website", "Mobile App", "Bookings / Orders", "Payments", "Notifications", "Support System"],
    dashboardNoun: "bookings",
    keywords: ["travel full business suite", "booking portal CRM", "travel automation dashboard"],
    stackRows: [
      stack("Need More Trip Leads?", ["Website", "CRM", "WhatsApp Automation"], Plane, "green"),
      stack("Need Traveler Self-Service?", ["Portal", "Mobile App", "Notifications"], Headphones, "red"),
      stack("Manual Booking Follow-Up?", ["CRM", "Automation", "Manager Dashboard"], Users, "blue"),
      stack("Want Repeat Travelers?", ["Mobile App", "Loyalty", "Campaigns"], Megaphone, "orange"),
      stack("Too Many Manual Tasks?", ["Portal", "Workflow Automation", "Reports"], ClipboardList, "purple"),
    ],
    automationCards: baseAutomationCards,
    example: {
      name: "Travel",
      category: "Others",
      image: "/images/industries/crm/travel-preview.png",
      description: "Travel website + booking app + traveler portal + inquiry CRM.",
      href: "/industries/travel/business-suite",
    },
  },
  {
    slug: "automobile",
    name: "Automobile",
    icon: Car,
    heroDescription:
      "We study your vehicle, service, dealer, lead, and booking workflow, then build one suite for stronger sales and service operations.",
    modules: ["Website", "Mobile App", "Custom CRM", "Portal", "Bookings / Orders", "Reports & Analytics"],
    dashboardNoun: "vehicles",
    keywords: ["automobile full business suite", "dealer CRM portal", "service booking dashboard"],
    stackRows: [
      stack("Need More Vehicle Leads?", ["Website", "CRM", "WhatsApp Automation"], Car, "green"),
      stack("Need Customer Self-Service?", ["Portal", "Mobile App", "Notifications"], Headphones, "red"),
      stack("Manual Service Follow-Up?", ["CRM", "Automation", "Service Dashboard"], Users, "blue"),
      stack("Want Repeat Service Visits?", ["Mobile App", "Reminders", "Campaigns"], CalendarCheck, "orange"),
      stack("Too Many Manual Tasks?", ["Portal", "Workflow Automation", "Reports"], ClipboardList, "purple"),
    ],
    automationCards: baseAutomationCards,
    example: {
      name: "Automobile",
      category: "Others",
      image: "/images/industries/crm/automobile-preview.png",
      description: "Vehicle website + customer app + dealer CRM + service portal.",
      href: "/industries/automobile/business-suite",
    },
  },
  {
    slug: "service-business",
    name: "Service Business",
    icon: Store,
    heroDescription:
      "We study your booking, quote, staff, customer, payment, and support workflow, then build a connected suite that makes service delivery easier.",
    modules: ["Website", "Custom CRM", "Portal", "Staff Management", "Payments", "Support System"],
    dashboardNoun: "clients",
    keywords: ["service business full suite", "client portal CRM", "service workflow automation"],
    stackRows: [
      stack("Need More Leads?", ["Website", "CRM", "WhatsApp Automation"], Store, "green"),
      stack("Need Client Self-Service?", ["Portal", "Mobile App", "Notifications"], Headphones, "red"),
      stack("Manual Follow-Up Issues?", ["CRM", "Automation", "Manager Dashboard"], Users, "blue"),
      stack("Want Repeat Customers?", ["Mobile App", "Loyalty", "Campaigns"], Megaphone, "orange"),
      stack("Too Many Manual Tasks?", ["Portal", "Workflow Automation", "Reports"], ClipboardList, "purple"),
    ],
    automationCards: baseAutomationCards,
    example: {
      name: "Service Business",
      category: "Others",
      image: "/images/industries/crm/service-preview.png",
      description: "Service website + booking CRM + client portal + staff app.",
      href: "/industries/service-business/business-suite",
    },
  },
];

export const businessSuitePages: Record<string, BusinessSuitePageData> = Object.fromEntries(
  industryConfigs.map((config) => [config.slug, createPage(config)]),
);

export const industryBusinessSuitePages = businessSuitePages;

export const businessSuiteStaticParams: BusinessSuiteRoute[] = Object.values(businessSuitePages).flatMap((page) =>
  page.aliases.map((solutionSlug) => ({
    industrySlug: page.industrySlug,
    solutionSlug,
  })),
);

export const industryBusinessSuiteStaticParams = businessSuiteStaticParams;

export function getBusinessSuitePage(
  industrySlug: string,
  solutionSlug = businessSuiteSlug,
): BusinessSuitePageData | null {
  const page = businessSuitePages[industrySlug];

  if (!page || !page.aliases.includes(solutionSlug)) {
    return null;
  }

  return page;
}

export const getIndustryBusinessSuitePage = getBusinessSuitePage;

function createPage(config: IndustryConfig): BusinessSuitePageData {
  const modules = baseModules.map((module) => ({
    ...module,
    featured: config.modules.includes(module.title),
  }));
  const industryExamples = uniqueExamples([config.example, ...commonExamples]).slice(0, 5);

  return {
    industryName: config.name,
    industrySlug: config.slug,
    aliases: [businessSuiteSlug],
    primaryRoute: `/industries/${config.slug}/${businessSuiteSlug}`,
    keywords: [
      ...config.keywords,
      "full business suite",
      "business operating system",
      "website app CRM portal automation",
      "HNX Solutions",
    ],
    serviceType: `${config.name} Full Business Suite`,
    industryIcon: config.icon,
    hero: {
      ...defaultHero,
      description: config.heroDescription,
    },
    comparison,
    discovery: {
      kicker: "Understand - Analyze - Recommend",
      title: "We First Understand Your Business",
      cards: discoveryCards,
      process: discoveryProcess,
      image: "/images/business-growth.jpg",
    },
    stackBuilder: {
      tabs: stackTabs,
      rows: config.stackRows,
    },
    modules,
    automation: {
      cards: config.automationCards,
      workflow: workflowItems,
    },
    industryExamples,
    roadmap,
    dashboard: {
      sideCards: dashboardSideCards,
      metrics: [
        { label: `Total ${capitalize(config.dashboardNoun)}`, value: "1,248", meta: "+12.5%", icon: Users, tone: "blue" },
        { label: "New Customers", value: "352", meta: "+8.4%", icon: UserRound, tone: "green" },
        { label: "Revenue", value: "Rs 12,45,000", meta: "+15.3%", icon: TrendingUp, tone: "purple" },
        { label: "Tasks", value: "28", meta: "In Progress", icon: ClipboardCheck, tone: "orange" },
      ],
      activities: [
        "New lead from website",
        "WhatsApp message sent",
        "New order received",
        "Payment received",
        "Task completed",
      ],
    },
    whyChoose,
    packages,
    finalCta: {
      title: "Let's Build the Right Digital System for Your Business",
      description:
        "We'll study your business, identify the most useful digital tools, and create a clear roadmap before development starts.",
      primaryLabel: "Request Business Audit",
      primaryHref: "/contact",
      secondaryLabel: "Book Consultation",
      secondaryHref: "/contact",
    },
  };
}

function stack(
  problem: string,
  stackItems: string[],
  icon: LucideIcon,
  tone: BusinessSuiteTone,
): BusinessSuiteStackRow {
  return { problem, stack: stackItems, icon, tone };
}

function uniqueExamples(examples: BusinessSuiteIndustryExample[]) {
  const seen = new Set<string>();

  return examples.filter((example) => {
    if (seen.has(example.name)) return false;
    seen.add(example.name);
    return true;
  });
}

function capitalize(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}
