import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Bell,
  Briefcase,
  Building2,
  CalendarDays,
  Cloud,
  FileText,
  Filter,
  GraduationCap,
  LayoutDashboard,
  Search,
  ShieldCheck,
  Stethoscope,
  Target,
  Users,
  Wallet,
  Zap,
} from "lucide-react";
import type { IndustryCrmPageData } from "./industryCrmData";

type CrmVariant =
  | "education"
  | "healthcare"
  | "finance"
  | "real-estate"
  | "retail"
  | "manufacturing"
  | "default";

type MetricIcon = "users" | "calendar" | "target" | "wallet" | "file" | "chart";

type DashboardMetric = {
  label: string;
  value: string;
  note: string;
  icon: MetricIcon;
};

type DashboardRow = {
  label: string;
  value: string;
  note?: string;
};

type PeopleRow = {
  name: string;
  value: string;
  note: string;
};

type TrustItem = {
  title: string;
  description: string;
  icon: "shield" | "cloud" | "chart";
};

type DashboardConfig = {
  variant: CrmVariant;
  badge: string;
  heroTitle: string;
  heroLineOne: string;
  heroLineTwo: string;
  description: string;
  dashboardLabel: string;
  searchPlaceholder: string;
  actionLabel: string;
  tabs: string[];
  metrics: DashboardMetric[];
  primaryPanelTitle: string;
  primaryPanelType: "funnel" | "bars";
  primaryRows: DashboardRow[];
  middlePanelTitle: string;
  middleRows: PeopleRow[];
  rightPanelTitle: string;
  rightRows: DashboardRow[];
  financePanelTitle: string;
  financeValue: string;
  financeNote: string;
  trendTitle: string;
  trendValue: string;
  bottomBannerTitle: string;
  bottomBannerText: string;
  queueItems: string[];
  trustItems: TrustItem[];
  accentClass: string;
  sceneClass: string;
};

function getCrmVariant(data: IndustryCrmPageData): CrmVariant {
  const text = `${data.industrySlug} ${data.industryName} ${data.hero.eyebrow} ${data.hero.title} ${data.hero.dashboardName}`.toLowerCase();

  if (text.includes("education") || text.includes("student") || text.includes("admission")) return "education";
  if (text.includes("health") || text.includes("clinic") || text.includes("patient")) return "healthcare";
  if (text.includes("finance") || text.includes("kyc") || text.includes("financial")) return "finance";
  if (text.includes("real estate") || text.includes("property") || text.includes("broker")) return "real-estate";
  if (text.includes("manufacturing") || text.includes("dealer") || text.includes("production")) return "manufacturing";
  if (text.includes("retail") || text.includes("store") || text.includes("order")) return "retail";

  return "default";
}

function getDashboardConfig(data: IndustryCrmPageData): DashboardConfig {
  const variant = getCrmVariant(data);

  const configs: Record<CrmVariant, DashboardConfig> = {
    education: {
      variant,
      badge: "Built for Education. Designed for Impact.",
      heroTitle: "Education CRM",
      heroLineOne: "Stronger Connections.",
      heroLineTwo: "Smarter Enrollments.",
      description:
        "Unify student inquiries, track applications, manage counselors, and grow enrollments with a CRM built for modern educational institutions.",
      dashboardLabel: "Education CRM",
      searchPlaceholder: "Search students, inquiries, programs...",
      actionLabel: "Add Inquiry",
      tabs: ["Overview", "Inquiries", "Applications", "Students", "Counsellors", "Reports", "Automations"],
      metrics: [
        { label: "Total Inquiries", value: "2,450", note: "18.6% vs last month", icon: "users" },
        { label: "Applications", value: "1,248", note: "16.3% vs last month", icon: "file" },
        { label: "Offer Sent", value: "342", note: "12.5% vs last month", icon: "target" },
        { label: "Enrollments", value: "189", note: "14.8% vs last month", icon: "calendar" },
        { label: "Conversion Rate", value: "15.1%", note: "2.6% vs last month", icon: "chart" },
      ],
      primaryPanelTitle: "Inquiry Funnel",
      primaryPanelType: "funnel",
      primaryRows: [
        { label: "New Inquiries", value: "2,450" },
        { label: "Contacted", value: "1,802" },
        { label: "Engaged", value: "1,248" },
        { label: "Application Started", value: "624" },
        { label: "Application Submitted", value: "342" },
      ],
      middlePanelTitle: "Counsellor Performance",
      middleRows: [
        { name: "Neha Sharma", value: "156", note: "+18%" },
        { name: "Rohan Verma", value: "142", note: "+12%" },
        { name: "Priya Nair", value: "128", note: "+9%" },
        { name: "Aarav Patel", value: "102", note: "+7%" },
      ],
      rightPanelTitle: "Application Tracker",
      rightRows: [
        { label: "Not Started", value: "384", note: "31%" },
        { label: "In Progress", value: "612", note: "49%" },
        { label: "Submitted", value: "1,248", note: "100%" },
        { label: "Under Review", value: "458", note: "37%" },
      ],
      financePanelTitle: "Fee Collection",
      financeValue: "₹ 3.24 Cr",
      financeNote: "22.4% vs last quarter",
      trendTitle: "Response Time Analytics",
      trendValue: "2h 35m",
      bottomBannerTitle: "Boost Your Enrollments",
      bottomBannerText: "Automate follow-ups, personalize communication, and convert more inquiries into enrollments.",
      queueItems: ["Smart Automation", "Personalized Engagement", "Actionable Insights"],
      trustItems: [
        { title: "Enterprise Security", description: "Bank-grade protection", icon: "shield" },
        { title: "Cloud Platform", description: "99.9% uptime", icon: "cloud" },
        { title: "Trusted by Leaders", description: "Across education", icon: "chart" },
      ],
      accentClass: "from-blue-50 via-white to-violet-50",
      sceneClass: "from-sky-100/80 via-blue-50/70 to-violet-100/70",
    },
    healthcare: {
      variant,
      badge: "Built for Healthcare Professionals",
      heroTitle: "Healthcare CRM",
      heroLineOne: "Better Patient Journeys.",
      heroLineTwo: "Smarter Care Teams.",
      description:
        "Manage patients, appointments, communications, care teams, and follow-ups — all in one unified platform built for modern healthcare organizations.",
      dashboardLabel: "Healthcare CRM",
      searchPlaceholder: "Search patients, appointments...",
      actionLabel: "Add Patient",
      tabs: ["Overview", "Patients", "Appointments", "Communications", "Care Teams", "Reports"],
      metrics: [
        { label: "Total Patients", value: "2,482", note: "12% vs last month", icon: "users" },
        { label: "Appointments", value: "342", note: "8% vs last month", icon: "calendar" },
        { label: "Active Treatments", value: "128", note: "15% vs last month", icon: "target" },
        { label: "Follow-ups Done", value: "98%", note: "10% vs last month", icon: "file" },
      ],
      primaryPanelTitle: "Today’s Appointments",
      primaryPanelType: "bars",
      primaryRows: [
        { label: "Priya Desai", value: "09:00", note: "Confirmed" },
        { label: "Rahul Sharma", value: "10:30", note: "Confirmed" },
        { label: "Ananya Iyer", value: "11:15", note: "In Progress" },
        { label: "Neha Patel", value: "02:30", note: "Confirmed" },
      ],
      middlePanelTitle: "Doctor Performance",
      middleRows: [
        { name: "Dr. Arjun Mehta", value: "92%", note: "+11%" },
        { name: "Dr. Neha Iyer", value: "88%", note: "+8%" },
        { name: "Dr. Vikram Shah", value: "85%", note: "+6%" },
        { name: "Dr. Aisha Khan", value: "80%", note: "+5%" },
      ],
      rightPanelTitle: "Communications",
      rightRows: [
        { label: "Reminder sent", value: "Priya Desai", note: "08:30" },
        { label: "Lab report shared", value: "Rahul Sharma", note: "09:15" },
        { label: "Follow-up message", value: "Ananya Iyer", note: "10:00" },
        { label: "Insurance update", value: "Neha Patel", note: "11:20" },
      ],
      financePanelTitle: "Patient Retention",
      financeValue: "87%",
      financeNote: "9% vs last month",
      trendTitle: "Patient Trends",
      trendValue: "2,104",
      bottomBannerTitle: "Coordinate Better Care",
      bottomBannerText: "Unify appointments, communications, care teams, and patient outcomes in one CRM workspace.",
      queueItems: ["Lab Results", "Treatment Plan", "Insurance Update"],
      trustItems: [
        { title: "HIPAA Compliant", description: "Secure. Private. Compliant.", icon: "shield" },
        { title: "99.9% Uptime", description: "Always available", icon: "cloud" },
        { title: "Built for Care Teams", description: "Streamline workflows", icon: "chart" },
      ],
      accentClass: "from-cyan-50 via-white to-blue-50",
      sceneClass: "from-cyan-100/80 via-blue-50/70 to-emerald-100/60",
    },
    finance: {
      variant,
      badge: "Built for Finance. Designed for Growth.",
      heroTitle: "Finance CRM",
      heroLineOne: "Built for Relationships,",
      heroLineTwo: "Compliance & Growth",
      description:
        "Manage clients, track opportunities, ensure compliance, and strengthen relationships — all in one intelligent CRM platform built for financial advisors and institutions.",
      dashboardLabel: "Finance CRM",
      searchPlaceholder: "Search clients, accounts, opportunities...",
      actionLabel: "Add New",
      tabs: ["Overview", "Clients", "Pipeline", "Activities", "Compliance", "Reports"],
      metrics: [
        { label: "Total AUM", value: "₹48.75 Cr", note: "6.4% vs last month", icon: "wallet" },
        { label: "Active Clients", value: "312", note: "4.2% vs last month", icon: "users" },
        { label: "New Opportunities", value: "114", note: "12.7% vs last month", icon: "target" },
        { label: "Closed This Month", value: "28", note: "16.0% vs last month", icon: "chart" },
      ],
      primaryPanelTitle: "Client Pipeline",
      primaryPanelType: "bars",
      primaryRows: [
        { label: "Prospecting", value: "128", note: "₹24.6 Cr" },
        { label: "Qualification", value: "84", note: "₹18.3 Cr" },
        { label: "Proposal", value: "56", note: "₹12.7 Cr" },
        { label: "Closed Won", value: "28", note: "₹16.4 Cr" },
      ],
      middlePanelTitle: "KYC Status",
      middleRows: [
        { name: "Verified", value: "226", note: "53%" },
        { name: "In Progress", value: "126", note: "30%" },
        { name: "Pending", value: "54", note: "13%" },
        { name: "Expired", value: "20", note: "4%" },
      ],
      rightPanelTitle: "Compliance Alerts",
      rightRows: [
        { label: "Document Expiry", value: "12 clients", note: "Review" },
        { label: "KYC Pending", value: "18 clients", note: "Action" },
        { label: "Policy Acknowledgement", value: "9 clients", note: "Pending" },
        { label: "High Risk Review", value: "5 clients", note: "Urgent" },
      ],
      financePanelTitle: "Document Checklist",
      financeValue: "78%",
      financeNote: "overall completion",
      trendTitle: "Follow-up Queue",
      trendValue: "42",
      bottomBannerTitle: "Stronger Relationships. Smarter Decisions. Better Outcomes.",
      bottomBannerText: "Empower your finance business with HNX Finance CRM.",
      queueItems: ["KYC Review", "Portfolio Review", "Document Pending"],
      trustItems: [
        { title: "Secure & Compliant", description: "SOC 2 Type II", icon: "shield" },
        { title: "Always Available", description: "99.9% uptime", icon: "cloud" },
        { title: "Trusted by Advisors", description: "Across institutions", icon: "chart" },
      ],
      accentClass: "from-blue-50 via-white to-violet-50",
      sceneClass: "from-blue-100/80 via-slate-50/70 to-cyan-100/60",
    },
    "real-estate": {
      variant,
      badge: "Built for Real Estate Professionals",
      heroTitle: "Real Estate CRM",
      heroLineOne: "Deals, Site Visits, and",
      heroLineTwo: "Broker Workflows",
      description:
        "Manage leads, track site visits, accelerate deal closure, and empower your brokers with a unified CRM platform.",
      dashboardLabel: "Real Estate CRM",
      searchPlaceholder: "Search leads, properties, brokers...",
      actionLabel: "Add Lead",
      tabs: ["Dashboard", "Leads", "Properties", "Site Visits", "Deals", "Brokers", "Reports", "Documents"],
      metrics: [
        { label: "New Leads", value: "128", note: "12% vs last week", icon: "users" },
        { label: "Site Visits", value: "45", note: "15% vs last week", icon: "calendar" },
        { label: "Proposals", value: "28", note: "10% vs last week", icon: "file" },
        { label: "Won Deals", value: "12", note: "20% vs last week", icon: "chart" },
      ],
      primaryPanelTitle: "Pipeline Overview",
      primaryPanelType: "bars",
      primaryRows: [
        { label: "New Lead", value: "128", note: "₹6.45 Cr" },
        { label: "Site Visit", value: "45", note: "₹12.30 Cr" },
        { label: "Proposal", value: "28", note: "₹9.10 Cr" },
        { label: "Won", value: "12", note: "₹5.80 Cr" },
      ],
      middlePanelTitle: "Broker Activity",
      middleRows: [
        { name: "Rohit Sharma", value: "32", note: "+18%" },
        { name: "Neha Iyer", value: "28", note: "+12%" },
        { name: "Arjun Patel", value: "24", note: "+9%" },
        { name: "Priya Desai", value: "18", note: "+6%" },
      ],
      rightPanelTitle: "Site Visit Schedule",
      rightRows: [
        { label: "Skyline Residences", value: "10:00 AM", note: "Today" },
        { label: "Greenview Heights", value: "12:00 PM", note: "Today" },
        { label: "Ocean Breeze Tower", value: "03:00 PM", note: "Today" },
        { label: "Palm County", value: "05:00 PM", note: "New" },
      ],
      financePanelTitle: "Revenue Forecast",
      financeValue: "₹32.75 Cr",
      financeNote: "18% vs last quarter",
      trendTitle: "Win Rate",
      trendValue: "21.9%",
      bottomBannerTitle: "Close More Deals With Better Visibility",
      bottomBannerText: "Track leads, site visits, properties, brokers, documents, and deals from one CRM workspace.",
      queueItems: ["Hot Lead", "Site Visit", "Proposal Follow-up"],
      trustItems: [
        { title: "Enterprise Security", description: "Bank-grade protection", icon: "shield" },
        { title: "Cloud Platform", description: "99.9% uptime", icon: "cloud" },
        { title: "Trusted by Leaders", description: "Across real estate", icon: "chart" },
      ],
      accentClass: "from-sky-50 via-white to-blue-50",
      sceneClass: "from-sky-100/80 via-blue-50/70 to-violet-100/60",
    },
    manufacturing: {
      variant,
      badge: "Built for Manufacturing Teams",
      heroTitle: "Manufacturing CRM",
      heroLineOne: "Stronger Dealers.",
      heroLineTwo: "Smarter Dispatches.",
      description:
        "Manage dealer leads, quotations, orders, production updates, dispatches, and service tickets in one connected manufacturing CRM.",
      dashboardLabel: "Manufacturing CRM",
      searchPlaceholder: "Search dealers, quotes, orders...",
      actionLabel: "Add Quote",
      tabs: ["Overview", "Dealers", "Quotes", "Orders", "Production", "Dispatch", "Reports"],
      metrics: [
        { label: "Dealer Leads", value: "512", note: "14% vs last month", icon: "users" },
        { label: "Quotations", value: "284", note: "10% vs last month", icon: "file" },
        { label: "Orders", value: "156", note: "18% vs last month", icon: "target" },
        { label: "Dispatches", value: "64", note: "12% vs last month", icon: "calendar" },
      ],
      primaryPanelTitle: "Order Pipeline",
      primaryPanelType: "bars",
      primaryRows: [
        { label: "Dealer Lead", value: "128", note: "North" },
        { label: "Quotation", value: "86", note: "₹8.7 Cr" },
        { label: "Production", value: "45", note: "Live" },
        { label: "Dispatch", value: "28", note: "Scheduled" },
      ],
      middlePanelTitle: "Production Status",
      middleRows: [
        { name: "Queued", value: "84", note: "+8%" },
        { name: "In Production", value: "56", note: "+12%" },
        { name: "Quality Check", value: "32", note: "+7%" },
        { name: "Ready Dispatch", value: "28", note: "+5%" },
      ],
      rightPanelTitle: "Service Tickets",
      rightRows: [
        { label: "Warranty request", value: "12", note: "Open" },
        { label: "Installation support", value: "8", note: "Today" },
        { label: "Dealer escalation", value: "5", note: "Urgent" },
        { label: "Parts request", value: "18", note: "New" },
      ],
      financePanelTitle: "Revenue Forecast",
      financeValue: "₹32.75 Cr",
      financeNote: "18% vs last quarter",
      trendTitle: "Dealer Performance",
      trendValue: "92%",
      bottomBannerTitle: "Unify Dealers, Orders, and Production",
      bottomBannerText: "Connect sales, quotations, production, dispatch, and service in one CRM.",
      queueItems: ["Dealer Follow-up", "Production Alert", "Dispatch Approval"],
      trustItems: [
        { title: "Enterprise Security", description: "Access control", icon: "shield" },
        { title: "Cloud Platform", description: "99.9% uptime", icon: "cloud" },
        { title: "Built for Scale", description: "Dealer-ready", icon: "chart" },
      ],
      accentClass: "from-blue-50 via-white to-indigo-50",
      sceneClass: "from-blue-100/80 via-indigo-50/70 to-slate-100/60",
    },
    retail: {
      variant,
      badge: "Built for Retail Growth",
      heroTitle: "Retail CRM",
      heroLineOne: "Stronger Loyalty.",
      heroLineTwo: "Smarter Sales.",
      description:
        "Manage customers, order history, loyalty campaigns, offers, support tickets, repeat purchases, and feedback from one retail CRM.",
      dashboardLabel: "Retail CRM",
      searchPlaceholder: "Search customers, orders, campaigns...",
      actionLabel: "Add Customer",
      tabs: ["Overview", "Customers", "Orders", "Loyalty", "Campaigns", "Reports"],
      metrics: [
        { label: "Customers", value: "8,240", note: "12% vs last month", icon: "users" },
        { label: "Orders", value: "1,284", note: "18% vs last month", icon: "file" },
        { label: "Loyalty", value: "64%", note: "9% vs last month", icon: "target" },
        { label: "Revenue", value: "₹24.6L", note: "15% vs last month", icon: "wallet" },
      ],
      primaryPanelTitle: "Customer Segments",
      primaryPanelType: "bars",
      primaryRows: [
        { label: "VIP", value: "512", note: "High value" },
        { label: "Repeat", value: "1,802", note: "Loyal" },
        { label: "At Risk", value: "624", note: "Follow-up" },
        { label: "New", value: "342", note: "This month" },
      ],
      middlePanelTitle: "Campaign Performance",
      middleRows: [
        { name: "Festive Offer", value: "18%", note: "CTR" },
        { name: "Loyalty Push", value: "24%", note: "Repeat" },
        { name: "Winback", value: "12%", note: "Recovered" },
        { name: "Restock Alert", value: "16%", note: "Lift" },
      ],
      rightPanelTitle: "Support Queue",
      rightRows: [
        { label: "Refund request", value: "12", note: "Open" },
        { label: "Order issue", value: "8", note: "Today" },
        { label: "Feedback", value: "32", note: "New" },
        { label: "Loyalty query", value: "18", note: "Auto" },
      ],
      financePanelTitle: "Revenue Trend",
      financeValue: "₹24.6L",
      financeNote: "15% vs last month",
      trendTitle: "Repeat Purchase",
      trendValue: "64%",
      bottomBannerTitle: "Turn Customers Into Repeat Buyers",
      bottomBannerText: "Manage customers, loyalty, offers, support, and feedback in one CRM.",
      queueItems: ["VIP Offer", "Winback Flow", "Support Reply"],
      trustItems: [
        { title: "Secure CRM", description: "Customer data safe", icon: "shield" },
        { title: "Cloud Platform", description: "Always available", icon: "cloud" },
        { title: "Retail Insights", description: "Growth focused", icon: "chart" },
      ],
      accentClass: "from-blue-50 via-white to-purple-50",
      sceneClass: "from-blue-100/80 via-purple-50/70 to-sky-100/60",
    },
    default: {
      variant,
      badge: data.hero.eyebrow,
      heroTitle: data.hero.dashboardName,
      heroLineOne: "Stronger Relationships.",
      heroLineTwo: "Smarter Workflows.",
      description: data.hero.description,
      dashboardLabel: data.hero.dashboardName,
      searchPlaceholder: "Search leads, tasks, reports...",
      actionLabel: "Add Lead",
      tabs: ["Overview", "Leads", "Pipeline", "Tasks", "Reports", "Automations"],
      metrics: data.hero.stats.slice(0, 4).map((stat, index) => ({
        label: stat.label,
        value: stat.value,
        note: stat.note,
        icon: index === 1 ? "file" : index === 2 ? "target" : index === 3 ? "chart" : "users",
      })),
      primaryPanelTitle: "Pipeline Overview",
      primaryPanelType: "bars",
      primaryRows: data.hero.pipelineStages.map((stage) => ({
        label: stage.title,
        value: stage.count,
        note: stage.items[0],
      })),
      middlePanelTitle: "Team Performance",
      middleRows: data.hero.analytics.map((item) => ({ name: item.label, value: item.value, note: "+12%" })).slice(0, 4),
      rightPanelTitle: "Follow-up Tracker",
      rightRows: data.hero.followUps.map((item) => ({ label: item, value: "Due", note: "Today" })).slice(0, 4),
      financePanelTitle: "Key Metric",
      financeValue: data.hero.analytics[0]?.value ?? "92%",
      financeNote: data.hero.analytics[0]?.label ?? "performance",
      trendTitle: "Analytics",
      trendValue: data.hero.analytics[1]?.value ?? "24%",
      bottomBannerTitle: "Manage Every Workflow From One CRM",
      bottomBannerText: "Connect leads, teams, tasks, reports, automations, and customer journeys.",
      queueItems: ["Lead Follow-up", "Team Task", "Report Review"],
      trustItems: [
        { title: "Enterprise Security", description: "Role-based access", icon: "shield" },
        { title: "Cloud Platform", description: "99.9% uptime", icon: "cloud" },
        { title: "Automation Ready", description: "Workflow driven", icon: "chart" },
      ],
      accentClass: "from-blue-50 via-white to-violet-50",
      sceneClass: "from-blue-100/80 via-sky-50/70 to-violet-100/60",
    },
  };

  return configs[variant];
}

function getMetricIcon(icon: MetricIcon, className = "h-4 w-4") {
  if (icon === "calendar") return <CalendarDays className={className} />;
  if (icon === "target") return <Target className={className} />;
  if (icon === "wallet") return <Wallet className={className} />;
  if (icon === "file") return <FileText className={className} />;
  if (icon === "chart") return <BarChart3 className={className} />;
  return <Users className={className} />;
}

function getBadgeIcon(variant: CrmVariant) {
  if (variant === "education") return <GraduationCap className="h-4 w-4" />;
  if (variant === "healthcare") return <Stethoscope className="h-4 w-4" />;
  if (variant === "finance") return <Briefcase className="h-4 w-4" />;
  if (variant === "real-estate") return <Building2 className="h-4 w-4" />;
  return <LayoutDashboard className="h-4 w-4" />;
}

function getTrustIcon(icon: TrustItem["icon"]) {
  if (icon === "cloud") return <Cloud className="h-5 w-5" />;
  if (icon === "chart") return <BarChart3 className="h-5 w-5" />;
  return <ShieldCheck className="h-5 w-5" />;
}

function getIntroCopy(variant: CrmVariant) {
  if (variant === "education") return "Here's what's happening in your admission pipeline today.";
  if (variant === "healthcare") return "Overview of appointments, care teams, and patient follow-ups.";
  if (variant === "finance") return "Here's what's happening across your client pipeline today.";
  if (variant === "real-estate") return "Overview of property leads, site visits, brokers, and deals.";
  if (variant === "manufacturing") return "Overview of dealers, quotations, production, dispatch, and service.";
  if (variant === "retail") return "Overview of customers, orders, loyalty, campaigns, and support.";
  return "Overview of leads, tasks, teams, and CRM performance.";
}

function getAvatarInitials(variant: CrmVariant) {
  if (variant === "finance") return "RM";
  if (variant === "real-estate") return "AM";
  if (variant === "healthcare") return "DR";
  if (variant === "manufacturing") return "FM";
  if (variant === "retail") return "SM";
  return "AM";
}

export default function CrmHeroSection({ data }: { data: IndustryCrmPageData }) {
  const config = getDashboardConfig(data);

  return (
    <section className="relative isolate -mt-4 overflow-hidden bg-white px-0 pb-0 pt-0 lg:-mt-6 dark:bg-slate-950">
      <div className="pointer-events-none absolute inset-0 -z-30 bg-[linear-gradient(115deg,#f8fbff_0%,#ffffff_45%,#eff6ff_100%)] dark:bg-[linear-gradient(115deg,#020617_0%,#0f172a_58%,#111827_100%)]" />
      <div className={`pointer-events-none absolute bottom-0 left-0 top-0 -z-20 w-full bg-gradient-to-br ${config.sceneClass} opacity-[0.12] lg:w-[39%] dark:opacity-20`} />
      <div className="pointer-events-none absolute inset-y-0 left-[35%] -z-10 hidden w-[25%] bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,0.92)_52%,rgba(255,255,255,1))] lg:block dark:from-transparent dark:via-slate-950/70 dark:to-slate-950" />
      <IndustryPhotoBackground variant={config.variant} />
      

      <div className="grid min-h-[calc(100svh-3.7rem)] min-w-0 w-full gap-0 lg:grid-cols-[minmax(0,0.39fr)_minmax(0,0.61fr)] lg:items-start">
        <div className="relative z-10 flex min-w-0 max-w-[700px] flex-col justify-start py-0 pl-5 pr-2 sm:pl-8 lg:min-h-[500px] lg:pl-11 lg:pr-1 lg:pt-[0.85rem] xl:pl-14">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/82 px-3.5 py-1.5 text-[13px] font-black text-blue-700 shadow-[0_8px_26px_rgba(37,99,235,0.13)] backdrop-blur-md dark:bg-white/[0.06] dark:text-blue-300">
            {getBadgeIcon(config.variant)}
            {config.badge}
          </span>

          <h1 className="mt-2 max-w-[680px] break-words text-[clamp(2.4rem,3vw,3.8rem)] font-black leading-[1.0] tracking-[-0.055em] text-slate-950 dark:text-white">
            <span className="block">{config.heroTitle}</span>
            <span className="mt-1.5 block whitespace-nowrap text-blue-700 dark:text-blue-300">{config.heroLineOne}</span>
            <span className="block whitespace-nowrap bg-gradient-to-r from-blue-700 to-violet-600 bg-clip-text text-transparent dark:from-blue-300 dark:to-violet-300">
              {config.heroLineTwo}
            </span>
          </h1>

          <p className="mt-3 max-w-[660px] text-[0.98rem] leading-[1.55] text-slate-700 dark:text-slate-300">
            {config.description}
          </p>

          <div className="mt-3 flex flex-col gap-2.5 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-black text-white shadow-[0_18px_45px_rgba(29,78,216,0.24)] transition hover:-translate-y-0.5 hover:bg-blue-800"
            >
              Get Started
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href={data.demoRedirect.demoHref}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/82 px-5 py-2.5 text-sm font-black text-blue-700 shadow-[0_8px_28px_rgba(15,23,42,0.08)] backdrop-blur-md transition hover:-translate-y-0.5 dark:bg-white/[0.06] dark:text-blue-300"
            >
              Book a Demo
              <CalendarDays className="h-5 w-5" />
            </Link>
          </div>

          <div className="mt-3 grid max-w-[680px] gap-2 sm:grid-cols-3">
            {config.trustItems.map((item) => (
              <div key={item.title} className="flex items-center gap-2">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white/75 text-blue-700 shadow-[0_8px_24px_rgba(15,23,42,0.08)] dark:bg-white/[0.05] dark:text-blue-300">
                  {getTrustIcon(item.icon)}
                </span>
                <span>
                  <span className="block text-[13px] font-black text-slate-950 dark:text-white">{item.title}</span>
                  <span className="mt-0.5 block text-[11px] font-semibold text-slate-600 dark:text-slate-400">{item.description}</span>
                </span>
              </div>
            ))}
          </div>
        </div>

        <CrmDashboardPreview config={config} />
      </div>
    </section>
  );
}

function CrmDashboardPreview({ config }: { config: DashboardConfig }) {
  return (
    <div className="relative z-10 min-w-0 w-full -translate-x-2 overflow-hidden rounded-[1rem] bg-white/96 shadow-[0_18px_48px_rgba(15,23,42,0.09)] backdrop-blur lg:w-[142%] lg:origin-top-left lg:scale-[0.70] xl:w-[136%] xl:scale-[0.74] 2xl:w-[132%] 2xl:scale-[0.78] dark:bg-slate-900/96">
      <div className="bg-white/96 px-2.5 py-0 dark:bg-slate-900">
        <div className="flex flex-wrap items-center gap-2">
          <div className="mr-2 min-w-fit leading-none">
            <p className="text-[1.25rem] font-black leading-none text-blue-700 dark:text-blue-300">HNX</p>
            <p className="mt-0.5 text-[8px] font-black uppercase tracking-[0.08em] text-slate-500 dark:text-slate-400">Solutions</p>
          </div>

          <span className="hidden text-[13px] font-black text-slate-950 sm:inline dark:text-white">{config.dashboardLabel}</span>

          <div className="ml-auto hidden min-w-[190px] max-w-[360px] flex-1 items-center gap-2 rounded-xl bg-white px-2.5 py-1.5 text-[11px] font-semibold text-slate-400 shadow-[0_5px_18px_rgba(15,23,42,0.10)] xl:flex dark:bg-white/[0.04]">
            <Search className="h-4 w-4" />
            <span className="truncate">{config.searchPlaceholder}</span>
          </div>

          <span className="hidden rounded-xl bg-blue-50 px-3 py-1.5 text-[11px] font-black text-blue-700 sm:inline-flex dark:bg-blue-400/10 dark:text-blue-300">
            {config.actionLabel}
          </span>
          <button className="relative grid h-8 w-8 place-items-center rounded-xl bg-white text-slate-500 shadow-[0_5px_18px_rgba(15,23,42,0.09)] dark:bg-white/[0.04] dark:text-slate-300" type="button" aria-label="Notifications">
            <Bell className="h-4 w-4" />
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
          </button>
          <div className="grid h-8 w-8 place-items-center rounded-full bg-slate-100 text-[11px] font-black text-slate-700 shadow-[0_5px_18px_rgba(15,23,42,0.08)] dark:bg-white/[0.06] dark:text-slate-200">
            {getAvatarInitials(config.variant)}
          </div>

          <nav className="order-last flex w-full items-center gap-1 overflow-x-auto pt-1" aria-label={`${config.dashboardLabel} preview tabs`}>
            {config.tabs.map((tab, index) => (
              <span
                key={tab}
                className={`shrink-0 rounded-xl px-2.5 py-1.5 text-[11px] font-black ${
                  index === 0
                    ? "bg-blue-50 text-blue-700 shadow-[0_5px_18px_rgba(37,99,235,0.10)] dark:bg-blue-400/10 dark:text-blue-300"
                    : "text-slate-600 dark:text-slate-300"
                }`}
              >
                {tab}
              </span>
            ))}
          </nav>
        </div>
      </div>

      <div className="bg-slate-50/74 px-2.5 pb-1.5 pt-1 dark:bg-slate-950/35">
        <div className="mb-1.5 flex flex-wrap items-center justify-between gap-2">
          <div>
            <h3 className="text-[1.02rem] font-black tracking-[-0.025em] text-slate-950 dark:text-white">
              {config.variant === "education" || config.variant === "finance" ? "Welcome back, Arjun Mehta" : config.dashboardLabel}
            </h3>
            <p className="mt-0.5 text-[11px] font-semibold text-slate-500 dark:text-slate-400">{getIntroCopy(config.variant)}</p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-xl bg-white px-2.5 py-1.5 text-[11px] font-black text-slate-700 shadow-[0_5px_18px_rgba(15,23,42,0.08)] dark:bg-white/[0.04] dark:text-slate-200">
              <CalendarDays className="h-4 w-4 text-slate-400" />
              May 12 - May 18, 2024
            </span>
            <span className="inline-flex items-center gap-2 rounded-xl bg-white px-2.5 py-1.5 text-[11px] font-black text-slate-700 shadow-[0_5px_18px_rgba(15,23,42,0.08)] dark:bg-white/[0.04] dark:text-slate-200">
              <Filter className="h-4 w-4 text-slate-400" />
              Filters
            </span>
          </div>
        </div>

        <div className={`grid gap-1.5 sm:grid-cols-2 ${config.metrics.length > 4 ? "xl:grid-cols-5" : "xl:grid-cols-4"}`}>
          {config.metrics.map((metric, index) => (
            <MetricCard key={metric.label} metric={metric} index={index} />
          ))}
        </div>

        <div className="mt-1.5 grid gap-1.5 xl:grid-cols-3">
          <MainPreviewPanel config={config} />
          <MiddlePreviewPanel config={config} />
          <RightPreviewPanel config={config} />
        </div>

        <div className="mt-1.5 grid gap-1.5 xl:grid-cols-3">
          <FinancePreviewPanel config={config} />
          <TrendPreviewPanel config={config} />
          <QueuePreviewPanel config={config} />
        </div>

        <div className={`mt-1.5 rounded-xl bg-gradient-to-r ${config.accentClass} p-2 shadow-[0_8px_24px_rgba(37,99,235,0.07)] dark:from-blue-400/10 dark:via-white/[0.04] dark:to-violet-400/10`}>
          <div className="flex flex-wrap items-center gap-4">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-blue-700 text-white shadow-lg shadow-blue-700/20">
              {config.variant === "education" ? <GraduationCap className="h-5 w-5" /> : <Zap className="h-5 w-5" />}
            </span>
            <div className="min-w-[180px] flex-1">
              <p className="text-[13px] font-black text-blue-950 dark:text-blue-100">{config.bottomBannerTitle}</p>
              <p className="mt-0.5 text-[11px] font-semibold leading-4 text-blue-900/70 dark:text-blue-100/70">{config.bottomBannerText}</p>
            </div>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl bg-white px-2.5 py-1.5 text-xs font-black text-blue-700 shadow-[0_6px_20px_rgba(15,23,42,0.08)] dark:bg-white/[0.06] dark:text-blue-300">
              Explore Automations
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function MetricCard({ metric, index }: { metric: DashboardMetric; index: number }) {
  const colorClasses = [
    "bg-blue-50 text-blue-700 dark:bg-blue-400/10 dark:text-blue-300",
    "bg-violet-50 text-violet-700 dark:bg-violet-400/10 dark:text-violet-300",
    "bg-emerald-50 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300",
    "bg-amber-50 text-amber-700 dark:bg-amber-400/10 dark:text-amber-300",
    "bg-sky-50 text-sky-700 dark:bg-sky-400/10 dark:text-sky-300",
  ];

  return (
    <div className="rounded-xl bg-white p-2.5 shadow-[0_6px_18px_rgba(15,23,42,0.07)] dark:bg-white/[0.04]">
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <p className="truncate text-[11px] font-bold text-slate-500 dark:text-slate-400">{metric.label}</p>
          <p className="mt-2 text-[1.02rem] font-black tracking-[-0.025em] text-slate-950 dark:text-white">{metric.value}</p>
        </div>
        <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-xl ${colorClasses[index % colorClasses.length]}`}>
          {getMetricIcon(metric.icon, "h-5 w-5")}
        </span>
      </div>
      <p className="mt-2 text-[10.5px] font-black text-emerald-600 dark:text-emerald-300">Up {metric.note}</p>
    </div>
  );
}

function MainPreviewPanel({ config }: { config: DashboardConfig }) {
  return (
    <div className="rounded-xl bg-white p-2.5 shadow-[0_6px_18px_rgba(15,23,42,0.07)] dark:bg-white/[0.04]">
      <div className="mb-3 flex min-w-0 items-center justify-between gap-2">
        <h4 className="min-w-0 truncate text-[13px] font-black text-slate-950 dark:text-white">{config.primaryPanelTitle}</h4>
        <span className="shrink-0 text-[12px] font-black text-blue-700 dark:text-blue-300">View All</span>
      </div>

      {config.primaryPanelType === "funnel" ? (
        <div className="grid gap-4 sm:grid-cols-[0.95fr_1.05fr] xl:grid-cols-1 2xl:grid-cols-[0.95fr_1.05fr]">
          <FunnelGraphic rows={config.primaryRows} />
          <div className="space-y-2">
            {config.primaryRows.map((row, index) => (
              <div key={row.label} className="flex items-center justify-between gap-2 text-[12px] font-bold text-slate-600 dark:text-slate-300">
                <span className="flex min-w-0 items-center gap-2">
                  <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${index === 0 ? "bg-blue-600" : index === 1 ? "bg-blue-500" : index === 2 ? "bg-violet-500" : index === 3 ? "bg-purple-400" : "bg-violet-300"}`} />
                  <span className="truncate">{row.label}</span>
                </span>
                <span className="shrink-0 text-slate-950 dark:text-white">{row.value}</span>
              </div>
            ))}
            <div className="pt-2 text-right text-[12px] font-black text-slate-950 dark:text-white">
              Conversion Rate <span className="ml-2 text-blue-700 dark:text-blue-300">15.1%</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-2">
          {config.primaryRows.map((row, index) => (
            <div key={row.label} className="grid grid-cols-[0.82fr_1fr_auto] items-center gap-2 text-[12px]">
              <span className="min-w-0 truncate font-black text-slate-700 dark:text-slate-200">{row.label}</span>
              <span className="h-3 overflow-hidden rounded-full bg-slate-100 dark:bg-white/10">
                <span
                  className={`block h-full rounded-full ${index % 4 === 0 ? "bg-blue-600" : index % 4 === 1 ? "bg-violet-500" : index % 4 === 2 ? "bg-emerald-500" : "bg-amber-500"}`}
                  style={{ width: `${Math.max(34, 92 - index * 13)}%` }}
                />
              </span>
              <span className="text-right font-black text-slate-950 dark:text-white">{row.value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function MiddlePreviewPanel({ config }: { config: DashboardConfig }) {
  const useDonut = config.variant === "finance" || config.variant === "healthcare";

  return (
    <div className="rounded-xl bg-white p-2.5 shadow-[0_6px_18px_rgba(15,23,42,0.07)] dark:bg-white/[0.04]">
      <div className="mb-3 flex min-w-0 items-center justify-between gap-2">
        <h4 className="min-w-0 truncate text-[13px] font-black text-slate-950 dark:text-white">{config.middlePanelTitle}</h4>
        <span className="shrink-0 text-[12px] font-black text-blue-700 dark:text-blue-300">View All</span>
      </div>

      {useDonut ? (
        <div className="grid items-center gap-4 sm:grid-cols-[0.8fr_1.2fr] xl:grid-cols-1 2xl:grid-cols-[0.8fr_1.2fr]">
          <DonutChart center={config.variant === "finance" ? "426" : "568"} />
          <div className="space-y-2">
            {config.middleRows.map((row, index) => (
              <div key={row.name} className="flex items-center justify-between gap-2 text-[12px] font-bold">
                <span className="flex min-w-0 items-center gap-2 text-slate-600 dark:text-slate-300">
                  <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${index === 0 ? "bg-emerald-500" : index === 1 ? "bg-blue-600" : index === 2 ? "bg-amber-500" : "bg-red-500"}`} />
                  <span className="truncate">{row.name}</span>
                </span>
                <span className="shrink-0 text-slate-950 dark:text-white">{row.value}</span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="space-y-2">
          {config.middleRows.map((row, index) => (
            <div key={row.name} className="grid grid-cols-[minmax(0,1fr)_auto_auto] items-center gap-2 text-[12px]">
              <span className="flex min-w-0 items-center gap-2 font-bold text-slate-700 dark:text-slate-200">
                <Avatar index={index} />
                <span className="truncate">{row.name}</span>
              </span>
              <span className="font-black text-slate-950 dark:text-white">{row.value}</span>
              <span className="font-black text-emerald-600 dark:text-emerald-300">{row.note}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function RightPreviewPanel({ config }: { config: DashboardConfig }) {
  return (
    <div className="rounded-xl bg-white p-2.5 shadow-[0_6px_18px_rgba(15,23,42,0.07)] dark:bg-white/[0.04]">
      <div className="mb-3 flex min-w-0 items-center justify-between gap-2">
        <h4 className="min-w-0 truncate text-[13px] font-black text-slate-950 dark:text-white">{config.rightPanelTitle}</h4>
        <span className="shrink-0 text-[12px] font-black text-blue-700 dark:text-blue-300">View All</span>
      </div>
      <div className="space-y-2">
        {config.rightRows.map((row, index) => (
          <div key={row.label} className="flex items-center justify-between gap-2 rounded-lg bg-slate-50 px-2.5 py-2 dark:bg-white/[0.04]">
            <span className="flex min-w-0 items-center gap-2">
              <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-lg ${index === 0 ? "bg-blue-50 text-blue-700" : index === 1 ? "bg-violet-50 text-violet-700" : index === 2 ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"}`}>
                {getMetricIcon(index % 2 === 0 ? "file" : "calendar", "h-4 w-4")}
              </span>
              <span className="min-w-0">
                <span className="block truncate text-[12px] font-black text-slate-900 dark:text-white">{row.label}</span>
                <span className="mt-0.5 block truncate text-[11px] font-semibold text-slate-500 dark:text-slate-400">{row.value}</span>
              </span>
            </span>
            {row.note ? <span className="shrink-0 text-[11px] font-black text-slate-500 dark:text-slate-400">{row.note}</span> : null}
          </div>
        ))}
      </div>
    </div>
  );
}

function FinancePreviewPanel({ config }: { config: DashboardConfig }) {
  return (
    <div className="rounded-xl bg-white p-2.5 shadow-[0_6px_18px_rgba(15,23,42,0.07)] dark:bg-white/[0.04]">
      <div className="mb-3 flex min-w-0 items-center justify-between gap-2">
        <h4 className="min-w-0 truncate text-[13px] font-black text-slate-950 dark:text-white">{config.financePanelTitle}</h4>
        <span className="rounded-md bg-slate-50 px-2 py-1 text-[10px] font-black text-slate-500 dark:bg-white/[0.05] dark:text-slate-400">Quarter</span>
      </div>
      <p className="text-base font-black text-slate-950 dark:text-white">{config.financeValue}</p>
      <p className="mt-1 text-[11px] font-black text-emerald-600 dark:text-emerald-300">Up {config.financeNote}</p>
      <div className="mt-3 h-14 rounded-lg bg-[linear-gradient(180deg,rgba(37,99,235,0.14),rgba(37,99,235,0.02))] p-3">
        <Sparkline />
      </div>
    </div>
  );
}

function TrendPreviewPanel({ config }: { config: DashboardConfig }) {
  return (
    <div className="rounded-xl bg-white p-2.5 shadow-[0_6px_18px_rgba(15,23,42,0.07)] dark:bg-white/[0.04]">
      <div className="mb-3 flex min-w-0 items-center justify-between gap-2">
        <h4 className="min-w-0 truncate text-[13px] font-black text-slate-950 dark:text-white">{config.trendTitle}</h4>
        <span className="rounded-md bg-slate-50 px-2 py-1 text-[10px] font-black text-slate-500 dark:bg-white/[0.05] dark:text-slate-400">Month</span>
      </div>
      <p className="text-base font-black text-slate-950 dark:text-white">{config.trendValue}</p>
      <p className="mt-1 text-[11px] font-black text-emerald-600 dark:text-emerald-300">Up improving trend</p>
      <div className="mt-3 flex h-16 items-end gap-1.5 rounded-lg bg-slate-50 p-3 dark:bg-white/[0.04]">
        {[40, 58, 46, 70, 52, 64, 78, 60, 72, 88].map((height, index) => (
          <span key={index} className="flex-1 rounded-t-full bg-blue-600/80" style={{ height: `${height}%` }} />
        ))}
      </div>
    </div>
  );
}

function QueuePreviewPanel({ config }: { config: DashboardConfig }) {
  return (
    <div className="rounded-xl bg-white p-2.5 shadow-[0_6px_18px_rgba(15,23,42,0.07)] dark:bg-white/[0.04]">
      <div className="mb-3 flex min-w-0 items-center justify-between gap-2">
        <h4 className="min-w-0 truncate text-[13px] font-black text-slate-950 dark:text-white">Action Queue</h4>
        <span className="shrink-0 text-[12px] font-black text-blue-700 dark:text-blue-300">View All</span>
      </div>
      <div className="space-y-2">
        {config.queueItems.map((item, index) => (
          <div key={item} className="flex items-center justify-between gap-2 rounded-lg bg-slate-50 px-2.5 py-2 dark:bg-white/[0.04]">
            <span className="flex min-w-0 items-center gap-2 text-[12px] font-black text-slate-700 dark:text-slate-200">
              <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-full ${index === 0 ? "bg-blue-50 text-blue-700" : index === 1 ? "bg-violet-50 text-violet-700" : "bg-emerald-50 text-emerald-700"}`}>
                {index + 1}
              </span>
              <span className="truncate">{item}</span>
            </span>
            <span className={`shrink-0 rounded-full px-2 py-1 text-[10px] font-black ${index === 0 ? "bg-red-50 text-red-600" : index === 1 ? "bg-amber-50 text-amber-600" : "bg-emerald-50 text-emerald-600"}`}>
              {index === 0 ? "High" : index === 1 ? "Medium" : "Low"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function FunnelGraphic({ rows }: { rows: DashboardRow[] }) {
  return (
    <div className="flex flex-col items-center justify-center gap-1 py-1">
      {rows.slice(0, 5).map((row, index) => (
        <div
          key={row.label}
          className={`h-7 rounded-md shadow-sm ${index === 0 ? "bg-blue-700" : index === 1 ? "bg-blue-600" : index === 2 ? "bg-violet-500" : index === 3 ? "bg-purple-400" : "bg-violet-300"}`}
          style={{ width: `${100 - index * 13}%` }}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

function DonutChart({ center }: { center: string }) {
  return (
    <div className="relative mx-auto grid h-24 w-24 place-items-center rounded-full bg-[conic-gradient(#2563eb_0_42%,#22c55e_42%_68%,#f59e0b_68%_84%,#ef4444_84%_100%)]">
      <div className="grid h-16 w-16 place-items-center rounded-full bg-white text-center shadow-inner dark:bg-slate-900">
        <span>
          <span className="block text-base font-black text-slate-950 dark:text-white">{center}</span>
          <span className="block text-[10px] font-bold text-slate-500 dark:text-slate-400">Total</span>
        </span>
      </div>
    </div>
  );
}

function Sparkline() {
  return (
    <svg viewBox="0 0 260 80" className="h-full w-full" role="img" aria-label="Trend chart">
      <path d="M5 58 C24 52, 32 28, 48 34 C66 42, 70 20, 88 24 C112 28, 112 12, 136 18 C154 22, 158 35, 176 28 C200 18, 210 16, 255 8" fill="none" stroke="currentColor" strokeWidth="4" className="text-blue-600" strokeLinecap="round" />
      <path d="M5 58 C24 52, 32 28, 48 34 C66 42, 70 20, 88 24 C112 28, 112 12, 136 18 C154 22, 158 35, 176 28 C200 18, 210 16, 255 8 L255 78 L5 78 Z" className="fill-blue-600/10" />
    </svg>
  );
}

function Avatar({ index }: { index: number }) {
  const colors = [
    "bg-blue-100 text-blue-700",
    "bg-violet-100 text-violet-700",
    "bg-emerald-100 text-emerald-700",
    "bg-amber-100 text-amber-700",
    "bg-rose-100 text-rose-700",
  ];
  const initials = ["NS", "RV", "PN", "AP", "MI", "AM", "PS"];

  return (
    <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-full text-[10px] font-black ${colors[index % colors.length]}`}>
      {initials[index % initials.length]}
    </span>
  );
}


function getIndustryPhotoUrl(variant: CrmVariant) {
  if (variant === "education") {
    return "/images/industries/crm/education-campus-preview.png";
  }

  if (variant === "healthcare") {
    return "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1400&q=80";
  }

  if (variant === "finance") {
    return "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80";
  }

  if (variant === "real-estate") {
    return "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=80";
  }

  if (variant === "manufacturing") {
    return "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1400&q=80";
  }

  if (variant === "retail") {
    return "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=80";
  }

  return "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80";
}

function IndustryPhotoBackground({ variant }: { variant: CrmVariant }) {
  const isEducation = variant === "education";

  return (
    <div
      className={[
        "pointer-events-none absolute left-0 -z-10 hidden overflow-hidden sm:block",
        isEducation
          ? "bottom-0 h-[50%] w-full lg:w-[39%]"
          : "inset-y-0 w-full lg:w-[43%]",
      ].join(" ")}
    >
      <div
        className={[
          "absolute inset-0 bg-no-repeat saturate-[0.98]",
          isEducation
            ? "bg-cover bg-[center_40%] opacity-[0.88]"
            : "bg-cover bg-left-bottom opacity-[0.50]",
        ].join(" ")}
        style={{ backgroundImage: `url(${getIndustryPhotoUrl(variant)})` }}
      />

      {isEducation ? (
        <>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(248,251,255,0)_0%,rgba(248,251,255,0.12)_58%,rgba(248,251,255,0.96)_100%)] dark:bg-[linear-gradient(90deg,rgba(2,6,23,0.50)_0%,rgba(2,6,23,0.42)_46%,rgba(2,6,23,0.96)_100%)]" />
          <div className="absolute inset-x-0 top-0 h-20 bg-[linear-gradient(180deg,rgba(248,251,255,1),rgba(248,251,255,0.6),rgba(248,251,255,0))] dark:bg-[linear-gradient(180deg,rgba(2,6,23,1),rgba(2,6,23,0.55),rgba(2,6,23,0))]" />
          <div className="absolute inset-x-0 bottom-0 h-4 bg-[linear-gradient(180deg,rgba(248,251,255,0),rgba(248,251,255,0.18)_48%,rgba(248,251,255,0.58))] dark:bg-[linear-gradient(180deg,rgba(2,6,23,0),rgba(2,6,23,0.35)_48%,rgba(2,6,23,0.82))]" />
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(248,251,255,0.52)_0%,rgba(248,251,255,0.64)_48%,rgba(248,251,255,0.98)_100%)] dark:bg-[linear-gradient(90deg,rgba(2,6,23,0.82)_0%,rgba(2,6,23,0.78)_48%,rgba(2,6,23,0.98)_100%)]" />
          <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(248,251,255,0.98),rgba(248,251,255,0.42),rgba(248,251,255,0))] dark:bg-[linear-gradient(180deg,rgba(2,6,23,1),rgba(2,6,23,0.45),rgba(2,6,23,0))]" />
          <div className="absolute inset-x-0 bottom-0 h-52 bg-[linear-gradient(180deg,rgba(248,251,255,0),rgba(248,251,255,0.55)_45%,rgba(248,251,255,1))] dark:bg-[linear-gradient(180deg,rgba(2,6,23,0),rgba(2,6,23,0.6)_45%,rgba(2,6,23,1))]" />
        </>
      )}
    </div>
  );
}

function IndustryScene({ variant }: { variant: CrmVariant }) {
  if (variant === "education") return null;

  return (
    <div className="pointer-events-none absolute bottom-0 left-0 -z-10 hidden h-[42%] w-full overflow-hidden opacity-55 sm:block lg:w-[42%]">
      <div className="absolute inset-x-0 bottom-0 h-36 bg-[linear-gradient(180deg,rgba(255,255,255,0),rgba(255,255,255,0.84)_48%,rgba(255,255,255,1))] dark:from-transparent dark:via-slate-950/80 dark:to-slate-950" />
      <div className="absolute bottom-8 left-8 right-8 h-24 rounded-[999px] bg-emerald-200/35 blur-xl dark:bg-emerald-400/10" />

      {variant === "education" ? <CampusScene /> : variant === "healthcare" ? <HealthcareScene /> : variant === "manufacturing" ? <ManufacturingScene /> : <CityScene />}
    </div>
  );
}

function CampusScene() {
  return (
    <div className="absolute bottom-10 left-[3%] right-[8%] flex items-end gap-2 opacity-70">
      <SceneTower height="h-36" width="w-20" top="rounded-t-full" />
      <div className="h-28 flex-1 rounded-t-lg bg-white/72 shadow-sm dark:bg-white/10">
        <div className="grid h-full grid-cols-8 gap-2 p-4">
          {Array.from({ length: 24 }).map((_, index) => (
            <span key={index} className="rounded-sm bg-blue-100/80 dark:bg-blue-300/15" />
          ))}
        </div>
      </div>
      <SceneTower height="h-44" width="w-16" top="rounded-t-full" />
    </div>
  );
}

function HealthcareScene() {
  return (
    <div className="absolute bottom-10 left-[5%] right-[9%] flex items-end gap-2 opacity-70">
      <div className="h-24 w-24 rounded-t-xl bg-white/72 shadow-sm dark:bg-white/10">
        <div className="grid h-full place-items-center text-4xl font-black text-blue-200">+</div>
      </div>
      <div className="h-24 flex-1 rounded-t-lg bg-white/72 shadow-sm dark:bg-white/10">
        <div className="grid h-full grid-cols-8 gap-2 p-4">
          {Array.from({ length: 24 }).map((_, index) => (
            <span key={index} className="rounded-sm bg-blue-100/80 dark:bg-blue-300/15" />
          ))}
        </div>
      </div>
    </div>
  );
}

function ManufacturingScene() {
  return (
    <div className="absolute bottom-10 left-[5%] right-[8%] flex items-end gap-2 opacity-70">
      <SceneTower height="h-24" width="w-16" />
      <SceneTower height="h-34" width="w-20" />
      <div className="relative h-24 flex-1 rounded-t-lg bg-white/72 shadow-sm dark:bg-white/10">
        <div className="absolute -top-8 left-8 h-8 w-5 rounded-t-sm bg-white/85 dark:bg-white/10" />
        <div className="absolute -top-12 right-12 h-12 w-5 rounded-t-sm bg-white/85 dark:bg-white/10" />
        <div className="grid h-full grid-cols-6 gap-2 p-4">
          {Array.from({ length: 18 }).map((_, index) => (
            <span key={index} className="rounded-sm bg-blue-100/80 dark:bg-blue-300/15" />
          ))}
        </div>
      </div>
    </div>
  );
}

function CityScene() {
  return (
    <div className="absolute bottom-10 left-[5%] right-[8%] flex items-end gap-2 opacity-70">
      <SceneTower height="h-20" width="w-14" />
      <SceneTower height="h-36" width="w-20" />
      <SceneTower height="h-28" width="w-16" />
      <div className="h-32 flex-1 rounded-t-lg bg-white/72 shadow-sm dark:bg-white/10">
        <div className="grid h-full grid-cols-8 gap-2 p-4">
          {Array.from({ length: 24 }).map((_, index) => (
            <span key={index} className="rounded-sm bg-blue-100/80 dark:bg-blue-300/15" />
          ))}
        </div>
      </div>
    </div>
  );
}

function SceneTower({ height, width, top = "rounded-t-lg" }: { height: string; width: string; top?: string }) {
  return (
    <div className={`${height} ${width} ${top} bg-white/72 shadow-sm dark:bg-white/10`}>
      <div className="grid h-full grid-cols-2 gap-2 p-3">
        {Array.from({ length: 8 }).map((_, index) => (
          <span key={index} className="rounded-sm bg-blue-100/80 dark:bg-blue-300/15" />
        ))}
      </div>
    </div>
  );
}
