"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HiChevronDown,
  HiMenuAlt3,
  HiMoon,
  HiSun,
  HiX,
} from "react-icons/hi";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { useTheme } from "next-themes";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Boxes,
  Building2,
  Car,
  CheckCircle2,
  ChevronRight,
  Cloud,
  Code2,
  Factory,
  GraduationCap,
  Headphones,
  HeartPulse,
  Landmark,
  LayoutDashboard,
  Layers3,
  Network,
  Palette,
  Plane,
  Rocket,
  SearchCheck,
  ServerCog,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Store,
  Workflow,
  Wrench,
  type LucideIcon,
} from "lucide-react";

type DropdownLink = {
  label: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

type ServiceColumn = {
  title: string;
  items: DropdownLink[];
};

type SolutionMenuColumn = {
  title: string;
  href: string;
  icon: LucideIcon;
  accent: string;
  items: DropdownLink[];
};

type IndustrySolution = DropdownLink & {
  tag: string;
  tagClass: string;
};

type IndustryMenu = {
  id: string;
  label: string;
  short: string;
  eyebrow: string;
  description: string;
  href: string;
  icon: LucideIcon;
  traits: { label: string; icon: LucideIcon }[];
  proofTitle: string;
  proofDescription: string;
  ctaLabel: string;
  solutions: IndustrySolution[];
};

type IndustryView = "overview" | "engage" | "operate" | "growth";

type DesktopDropdown = "services" | "solutions" | "industries";

const serviceColumns: ServiceColumn[] = [
  {
    title: "Development",
    items: [
      {
        label: "Web Development",
        description: "Fast, responsive and SEO-friendly websites.",
        href: "/services/web-development",
        icon: Code2,
      },
      {
        label: "SaaS Development",
        description: "Scalable SaaS platforms with dashboards.",
        href: "/services/saas-development",
        icon: LayoutDashboard,
      },
      {
        label: "Mobile App Development",
        description: "Android and iOS apps users love.",
        href: "/services/mobile-app-development",
        icon: Smartphone,
      },
      {
        label: "Custom CRM Systems",
        description: "Business-centric CRM systems built around your process.",
        href: "/services/custom-crm-systems",
        icon: Network,
      },
    ],
  },
  {
    title: "Automation",
    items: [
      {
        label: "AI Automation",
        description: "AI agents, automation workflows and smart tools.",
        href: "/services/ai-automation",
        icon: Bot,
      },
      {
        label: "Workflow Automation",
        description: "Automate reminders, approvals and business tasks.",
        href: "/services/workflow-automation",
        icon: Workflow,
      },
      {
        label: "API Development",
        description: "Robust APIs and backend integrations.",
        href: "/services/api-development",
        icon: ServerCog,
      },
      {
        label: "Integration Services",
        description: "Connect apps, CRMs, payments and tools.",
        href: "/services/integration-services",
        icon: Layers3,
      },
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      {
        label: "DevOps & Deployments",
        description: "CI/CD, cloud infrastructure and deployments.",
        href: "/services/devops-deployment",
        icon: Cloud,
      },
      {
        label: "Cloud Infrastructure",
        description: "Secure and scalable cloud architecture.",
        href: "/services/cloud-infrastructure",
        icon: ServerCog,
      },
      {
        label: "Maintenance & Support",
        description: "Ongoing support and product maintenance.",
        href: "/services/maintenance-support",
        icon: Headphones,
      },
      {
        label: "Security & Compliance",
        description: "Secure, reliable and protected systems.",
        href: "/services/security-compliance",
        icon: ShieldCheck,
      },
    ],
  },
  {
    title: "Design & Growth",
    items: [
      {
        label: "UI/UX Design",
        description: "Beautiful, intuitive and conversion-focused designs.",
        href: "/services/ui-ux-design",
        icon: Palette,
      },
      {
        label: "Landing Pages & Campaigns",
        description: "SEO, analytics, marketing and growth strategies.",
        href: "/services/landing-pages-campaigns",
        icon: BarChart3,
      },
      {
        label: "SEO & Analytics",
        description: "Search visibility, tracking and performance insights.",
        href: "/services/seo-analytics",
        icon: SearchCheck,
      },
      {
        label: "Brand & Identity",
        description: "Clear brand systems for stronger digital presence.",
        href: "/services/brand-identity",
        icon: Sparkles,
      },
    ],
  },
];

const serviceFeaturedLinks = [
  {
    label: "Workflow Automation",
    href: "/services/workflow-automation",
    icon: Workflow,
  },
  {
    label: "AI Intelligence",
    href: "/services/ai-automation",
    icon: Bot,
  },
  {
    label: "Industry Modules",
    href: "/industries",
    icon: Layers3,
  },
  {
    label: "Complete Ownership",
    href: "/services/custom-crm-systems",
    icon: ShieldCheck,
  },
];

const serviceTrustPoints = [
  {
    label: "Agile Process",
    icon: Rocket,
  },
  {
    label: "On-time Delivery",
    icon: CheckCircle2,
  },
  {
    label: "Scalable Solutions",
    icon: Boxes,
  },
  {
    label: "24/7 Support",
    icon: Headphones,
  },
];

const solutionMenuColumns: SolutionMenuColumn[] = [
  {
    title: "CRM",
    href: "/solutions/crm/business-os",
    icon: Network,
    accent: "text-cyan-500",
    items: [
      {
        label: "Business OS",
        description: "One owned system for your entire business.",
        href: "/solutions/crm/business-os",
        icon: LayoutDashboard,
      },
      {
        label: "CRM Core",
        description: "Leads, deals, customers, tasks, and follow-ups.",
        href: "/solutions/crm/crmcore",
        icon: Network,
      },
      {
        label: "Admin Control Room",
        description: "Fields, pipelines, users, roles, and permissions.",
        href: "/solutions/crm/admin-control-room",
        icon: ShieldCheck,
      },
      {
        label: "Workflow Engine",
        description: "Automate reminders, assignments, and approvals.",
        href: "/solutions/crm/workflow-engine",
        icon: Workflow,
      },
      {
        label: "AI Intelligence",
        description: "Lead scoring, insights, and next-best actions.",
        href: "/solutions/crm/ai-intelligence",
        icon: Bot,
      },
      {
        label: "Dashboards & Reports",
        description: "Revenue, conversions, tasks, and team performance.",
        href: "/solutions/crm/dashboards-reports",
        icon: BarChart3,
      },
    ],
  },
  {
    title: "Web & SaaS",
    href: "/solutions/web-saas/digital-presence-strategy",
    icon: Code2,
    accent: "text-violet-500",
    items: [
      {
        label: "Digital Presence Strategy",
        description: "Plan the complete online presence.",
        href: "/solutions/web-saas/digital-presence-strategy",
        icon: Rocket,
      },
      {
        label: "Business Website",
        description: "Professional website for your business.",
        href: "/solutions/web-saas/business-website",
        icon: Code2,
      },
      {
        label: "Landing Pages",
        description: "Focused pages for leads and campaigns.",
        href: "/solutions/web-saas/landing-pages",
        icon: LayoutDashboard,
      },
      {
        label: "Client Portal",
        description: "Secure access for clients and users.",
        href: "/solutions/web-saas/client-portal",
        icon: ShieldCheck,
      },
      {
        label: "SaaS Platform",
        description: "Scalable product platform.",
        href: "/solutions/web-saas/saas-platform",
        icon: Layers3,
      },
      {
        label: "Admin Dashboard",
        description: "Control panel for operations.",
        href: "/solutions/web-saas/admin-dashboard",
        icon: BarChart3,
      },
      {
        label: "Booking & Payment System",
        description: "Bookings, orders, payments, and tracking.",
        href: "/solutions/web-saas/booking-payment-system",
        icon: CheckCircle2,
      },
    ],
  },
  {
    title: "Mobile Apps",
    href: "/solutions/mobile-apps/app-strategy",
    icon: Smartphone,
    accent: "text-blue-500",
    items: [
      {
        label: "App Strategy",
        description: "Plan the full mobile app flow.",
        href: "/solutions/mobile-apps/app-strategy",
        icon: Rocket,
      },
      {
        label: "Flutter App Development",
        description: "Cross-platform Android and iOS apps.",
        href: "/solutions/mobile-apps/flutter-app-development",
        icon: Smartphone,
      },
      {
        label: "Customer Mobile App",
        description: "User-facing app for customers.",
        href: "/solutions/mobile-apps/customer-mobile-app",
        icon: Store,
      },
      {
        label: "Booking / Order App",
        description: "Apps for bookings and orders.",
        href: "/solutions/mobile-apps/booking-order-app",
        icon: CheckCircle2,
      },
      {
        label: "Admin Connected App",
        description: "Mobile app connected with admin system.",
        href: "/solutions/mobile-apps/admin-connected-app",
        icon: LayoutDashboard,
      },
      {
        label: "Push Notifications",
        description: "Alerts, reminders, and engagement.",
        href: "/solutions/mobile-apps/push-notifications",
        icon: Bot,
      },
      {
        label: "Play Store / App Store Launch",
        description: "App publishing and launch setup.",
        href: "/solutions/mobile-apps/app-store-launch",
        icon: Rocket,
      },
    ],
  },
  {
    title: "AI Automation",
    href: "/solutions/ai-automation/automation-audit",
    icon: Bot,
    accent: "text-emerald-500",
    items: [
      {
        label: "Automation Audit",
        description: "Find what can be automated.",
        href: "/solutions/ai-automation/automation-audit",
        icon: SearchCheck,
      },
      {
        label: "AI Agents",
        description: "Smart assistants for business tasks.",
        href: "/solutions/ai-automation/ai-agents",
        icon: Bot,
      },
      {
        label: "Workflow Automation",
        description: "Rules, triggers, and actions.",
        href: "/solutions/ai-automation/workflow-automation",
        icon: Workflow,
      },
      {
        label: "Lead Scoring",
        description: "Rank and prioritize better leads.",
        href: "/solutions/ai-automation/lead-scoring",
        icon: Network,
      },
      {
        label: "WhatsApp / Email Automation",
        description: "Automated customer communication.",
        href: "/solutions/ai-automation/whatsapp-email-automation",
        icon: Smartphone,
      },
      {
        label: "Document Automation",
        description: "Process files and documents faster.",
        href: "/solutions/ai-automation/document-automation",
        icon: ShieldCheck,
      },
      {
        label: "AI Reports & Insights",
        description: "Smart reports and business insights.",
        href: "/solutions/ai-automation/ai-reports-insights",
        icon: BarChart3,
      },
    ],
  },
  {
    title: "Cloud & DevOps",
    href: "/solutions/cloud-devops/cloud-architecture",
    icon: Cloud,
    accent: "text-orange-500",
    items: [
      {
        label: "Cloud Architecture",
        description: "Plan secure cloud infrastructure.",
        href: "/solutions/cloud-devops/cloud-architecture",
        icon: Cloud,
      },
      {
        label: "Server Setup",
        description: "Backend, SSL, domain, and config.",
        href: "/solutions/cloud-devops/server-setup",
        icon: ServerCog,
      },
      {
        label: "Database & Storage",
        description: "Database, files, and storage setup.",
        href: "/solutions/cloud-devops/database-storage",
        icon: Boxes,
      },
      {
        label: "CI/CD Pipeline",
        description: "Automated deployment workflow.",
        href: "/solutions/cloud-devops/cicd-pipeline",
        icon: Workflow,
      },
      {
        label: "Monitoring & Logs",
        description: "Track uptime, errors, and performance.",
        href: "/solutions/cloud-devops/monitoring-logs",
        icon: BarChart3,
      },
      {
        label: "Backup & Recovery",
        description: "Backup and recovery planning.",
        href: "/solutions/cloud-devops/backup-recovery",
        icon: ShieldCheck,
      },
      {
        label: "Maintenance Support",
        description: "Ongoing fixes and support.",
        href: "/solutions/cloud-devops/maintenance-support",
        icon: Headphones,
      },
    ],
  },
  {
    title: "Design & Growth",
    href: "/solutions/design-growth/brand-positioning",
    icon: Palette,
    accent: "text-pink-500",
    items: [
      {
        label: "Brand Positioning",
        description: "Clear positioning for your brand.",
        href: "/solutions/design-growth/brand-positioning",
        icon: Sparkles,
      },
      {
        label: "UI/UX Design",
        description: "Clean and conversion-focused design.",
        href: "/solutions/design-growth/ui-ux-design",
        icon: Palette,
      },
      {
        label: "Design System",
        description: "Reusable visual components.",
        href: "/solutions/design-growth/design-system",
        icon: Layers3,
      },
      {
        label: "Landing Pages",
        description: "Pages for ads, SEO, and campaigns.",
        href: "/solutions/design-growth/landing-pages",
        icon: Code2,
      },
      {
        label: "SEO Growth",
        description: "Search visibility and ranking setup.",
        href: "/solutions/design-growth/seo-growth",
        icon: SearchCheck,
      },
      {
        label: "Analytics Setup",
        description: "Tracking, funnels, and reports.",
        href: "/solutions/design-growth/analytics-setup",
        icon: BarChart3,
      },
      {
        label: "Campaign Optimization",
        description: "Improve campaign performance.",
        href: "/solutions/design-growth/campaign-optimization",
        icon: Rocket,
      },
    ],
  },
];

const solutionLinks: DropdownLink[] = solutionMenuColumns.flatMap(
  (column) => column.items
);

const industryViewTabs: { id: IndustryView; label: string; helper: string; icon: LucideIcon }[] = [
  { id: "overview", label: "Overview", helper: "Full suite", icon: LayoutDashboard },
  { id: "engage", label: "Engage", helper: "Customers", icon: Sparkles },
  { id: "operate", label: "Operate", helper: "Workflow", icon: Workflow },
  { id: "growth", label: "Growth", helper: "Revenue", icon: BarChart3 },
];

const industryViewFilters: Record<IndustryView, (solution: IndustrySolution) => boolean> = {
  overview: () => true,
  engage: (solution) =>
    ["Website", "App", "Portal", "Marketing"].includes(solution.tag),
  operate: (solution) =>
    [
      "CRM",
      "Automation",
      "Dashboard",
      "Policy",
      "Loans",
      "POS",
      "Inventory",
      "LMS",
      "Itinerary",
      "Tickets",
      "Listings",
    ].includes(solution.tag),
  growth: (solution) =>
    ["Website", "Marketing", "Dashboard", "CRM", "Automation"].includes(
      solution.tag
    ),
};

const industryPhotoById: Record<string, { src: string; alt: string; credit: string }> = {
  healthcare: {
    src: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=900&q=80",
    alt: "Doctor using digital healthcare technology in a modern clinic",
    credit: "Healthcare systems",
  },
  "real-estate": {
    src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80",
    alt: "Modern real estate property and housing exterior",
    credit: "Property workflows",
  },
  education: {
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80",
    alt: "Students learning with laptops in an education environment",
    credit: "Education journeys",
  },
  manufacturing: {
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80",
    alt: "Industrial manufacturing team working with production technology",
    credit: "Factory operations",
  },
  retail: {
    src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80",
    alt: "Retail customer checkout and digital commerce experience",
    credit: "Retail commerce",
  },
  finance: {
    src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80",
    alt: "Finance documents and financial dashboard workspace",
    credit: "Financial workflows",
  },
  insurance: {
    src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80",
    alt: "Insurance documents and policy planning workspace",
    credit: "Policy management",
  },
  travel: {
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    alt: "Travel destination planning and hospitality experience",
    credit: "Travel bookings",
  },
  automobile: {
    src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80",
    alt: "Premium automobile showroom and vehicle service experience",
    credit: "Auto operations",
  },
  "service-business": {
    src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80",
    alt: "Professional service business team managing client delivery operations",
    credit: "Service operations",
  },
};

function getIndustryPhoto(industry: IndustryMenu) {
  return industryPhotoById[industry.id] ?? industryPhotoById.healthcare;
}

const tagStyles = {
  crm: "bg-blue-50 text-blue-700 dark:bg-blue-400/10 dark:text-blue-300",
  website: "bg-emerald-50 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300",
  app: "bg-violet-50 text-violet-700 dark:bg-violet-400/10 dark:text-violet-300",
  portal: "bg-orange-50 text-orange-700 dark:bg-orange-400/10 dark:text-orange-300",
  automation: "bg-amber-50 text-amber-700 dark:bg-amber-400/10 dark:text-amber-300",
  dashboard: "bg-sky-50 text-sky-700 dark:bg-sky-400/10 dark:text-sky-300",
  specialist: "bg-rose-50 text-rose-700 dark:bg-rose-400/10 dark:text-rose-300",
  marketing: "bg-teal-50 text-teal-700 dark:bg-teal-400/10 dark:text-teal-300",
};

const industryMenus: IndustryMenu[] = [
  {
    id: "healthcare",
    label: "Healthcare",
    short: "Patient care, clinics, hospitals",
    eyebrow: "Healthcare",
    description:
      "End-to-end digital solutions designed to improve patient care, streamline operations, and drive growth for healthcare providers.",
    href: "/industries/healthcare",
    icon: HeartPulse,
    traits: [
      { label: "HIPAA-Ready", icon: ShieldCheck },
      { label: "Secure by Design", icon: ShieldCheck },
      { label: "Patient-Centric", icon: Network },
    ],
    proofTitle: "Built for Security. Designed for Growth.",
    proofDescription:
      "HIPAA-ready, role-based access and enterprise-grade security to protect patient data and power your practice.",
    ctaLabel: "Explore Healthcare Solutions",
    solutions: [
      {
        label: "Healthcare CRM",
        description: "Manage patient leads, appointments, follow-ups, and care workflows in one place.",
        href: "/industries/healthcare/crm",
        icon: Network,
        tag: "CRM",
        tagClass: tagStyles.crm,
      },
      {
        label: "Website Development",
        description: "Modern, HIPAA-ready websites that build trust and convert visitors into patients.",
        href: "/industries/healthcare/website-development",
        icon: Code2,
        tag: "Website",
        tagClass: tagStyles.website,
      },
      {
        label: "Mobile App Development",
        description: "Patient apps for booking, reminders, teleconsultation, records, and updates.",
        href: "/industries/healthcare/mobile-app-development",
        icon: Smartphone,
        tag: "App",
        tagClass: tagStyles.app,
      },
      {
        label: "Patient Portal",
        description: "Secure portals for patients to access records, reports, prescriptions, and appointments.",
        href: "/industries/healthcare/patient-portal",
        icon: Network,
        tag: "Portal",
        tagClass: tagStyles.portal,
      },
      {
        label: "Automation Workflows",
        description: "Automate reminders, follow-ups, billing, appointment updates, and admin tasks.",
        href: "/industries/healthcare/automation-workflows",
        icon: Workflow,
        tag: "Automation",
        tagClass: tagStyles.automation,
      },
      {
        label: "Dashboard & Reporting",
        description: "Real-time insights on patients, appointments, revenue, and team performance.",
        href: "/industries/healthcare/dashboard-reporting",
        icon: BarChart3,
        tag: "Dashboard",
        tagClass: tagStyles.dashboard,
      },
      {
        label: "Telemedicine",
        description: "Secure virtual consultations with video, chat, documents, and prescriptions.",
        href: "/industries/healthcare/telemedicine",
        icon: Smartphone,
        tag: "Telemedicine",
        tagClass: tagStyles.specialist,
      },
      {
        label: "Marketing Automation",
        description: "Run targeted campaigns, nurture patient relationships, and grow your practice.",
        href: "/industries/healthcare/marketing-automation",
        icon: Bot,
        tag: "Marketing",
        tagClass: tagStyles.marketing,
      },
    ],
  },
  {
    id: "real-estate",
    label: "Real Estate",
    short: "Properties, brokers, agencies",
    eyebrow: "Real Estate",
    description:
      "End-to-end digital solutions that help property businesses streamline lead management, listings, sales, and client experience.",
    href: "/industries/real-estate",
    icon: Building2,
    traits: [
      { label: "Lead-Driven", icon: SearchCheck },
      { label: "Broker-Friendly", icon: Network },
      { label: "Growth-Focused", icon: BarChart3 },
    ],
    proofTitle: "Built for Leads. Designed for Conversions.",
    proofDescription:
      "Centralize property inquiries, site visits, listings, brokers, and follow-ups with scalable real estate systems.",
    ctaLabel: "Explore Real Estate Solutions",
    solutions: [
      {
        label: "Real Estate CRM",
        description: "Manage property leads, site visits, brokers, deals, and client communication.",
        href: "/industries/real-estate/crm",
        icon: Network,
        tag: "CRM",
        tagClass: tagStyles.crm,
      },
      {
        label: "Website Development",
        description: "Property showcase websites with listings, lead capture, and enquiry flows.",
        href: "/industries/real-estate/website-development",
        icon: Code2,
        tag: "Website",
        tagClass: tagStyles.website,
      },
      {
        label: "Mobile App Development",
        description: "Apps for agents, buyers, property alerts, site visits, and instant inquiries.",
        href: "/industries/real-estate/mobile-app-development",
        icon: Smartphone,
        tag: "App",
        tagClass: tagStyles.app,
      },
      {
        label: "Client Portal",
        description: "Secure access for inquiries, documents, booking status, and property tracking.",
        href: "/industries/real-estate/client-portal",
        icon: Network,
        tag: "Portal",
        tagClass: tagStyles.portal,
      },
      {
        label: "Automation Workflows",
        description: "Automate lead routing, reminders, site visit follow-ups, and broker assignments.",
        href: "/industries/real-estate/automation-workflows",
        icon: Workflow,
        tag: "Automation",
        tagClass: tagStyles.automation,
      },
      {
        label: "Dashboard & Reporting",
        description: "Track inventory, sales funnel, broker performance, and property demand.",
        href: "/industries/real-estate/dashboard-reporting",
        icon: BarChart3,
        tag: "Dashboard",
        tagClass: tagStyles.dashboard,
      },
      {
        label: "Listing Management",
        description: "Manage listings, pricing, images, availability, and property updates.",
        href: "/industries/real-estate/listing-management",
        icon: Store,
        tag: "Listings",
        tagClass: tagStyles.specialist,
      },
      {
        label: "Marketing Automation",
        description: "Run campaigns to nurture property leads and boost booking conversions.",
        href: "/industries/real-estate/marketing-automation",
        icon: Bot,
        tag: "Marketing",
        tagClass: tagStyles.marketing,
      },
    ],
  },
  {
    id: "education",
    label: "Education",
    short: "Schools, colleges, training",
    eyebrow: "Education",
    description:
      "Empowering schools, colleges, coaching institutes, and edtech businesses with digital systems for admissions, communication, and learning.",
    href: "/industries/education",
    icon: GraduationCap,
    traits: [
      { label: "Student-Centric", icon: Network },
      { label: "Scalable", icon: BarChart3 },
      { label: "Outcome-Driven", icon: SearchCheck },
    ],
    proofTitle: "Built for Security. Designed for Growth.",
    proofDescription:
      "Role-based access, data privacy, and enterprise-grade security to protect students and power your institution.",
    ctaLabel: "Explore Education Solutions",
    solutions: [
      {
        label: "Education CRM",
        description: "Manage inquiries, counselors, admissions, batches, and student journeys.",
        href: "/industries/education/crm",
        icon: Network,
        tag: "CRM",
        tagClass: tagStyles.crm,
      },
      {
        label: "Website Development",
        description: "Build school and institute websites that drive trust, inquiries, and admissions.",
        href: "/industries/education/website-development",
        icon: Code2,
        tag: "Website",
        tagClass: tagStyles.website,
      },
      {
        label: "Mobile App Development",
        description: "Apps for students, parents, teachers, notices, schedules, and updates.",
        href: "/industries/education/mobile-app-development",
        icon: Smartphone,
        tag: "App",
        tagClass: tagStyles.app,
      },
      {
        label: "Student Portal",
        description: "Secure portals for schedules, notices, reports, fees, records, and resources.",
        href: "/industries/education/student-portal",
        icon: Network,
        tag: "Portal",
        tagClass: tagStyles.portal,
      },
      {
        label: "Admissions Automation",
        description: "Automate forms, counselor follow-ups, admission workflows, and reminders.",
        href: "/industries/education/admissions-automation",
        icon: Workflow,
        tag: "Automation",
        tagClass: tagStyles.automation,
      },
      {
        label: "Dashboard & Reporting",
        description: "Track admissions, engagement, batches, counselor output, and performance.",
        href: "/industries/education/dashboard-reporting",
        icon: BarChart3,
        tag: "Dashboard",
        tagClass: tagStyles.dashboard,
      },
      {
        label: "LMS Integration",
        description: "Connect classes, assignments, learning content, attendance, and progress systems.",
        href: "/industries/education/lms-integration",
        icon: Layers3,
        tag: "LMS",
        tagClass: tagStyles.specialist,
      },
      {
        label: "Marketing Automation",
        description: "Run campaigns to boost enrollments, engagement, referrals, and retention.",
        href: "/industries/education/marketing-automation",
        icon: Bot,
        tag: "Marketing",
        tagClass: tagStyles.marketing,
      },
    ],
  },
  {
    id: "manufacturing",
    label: "Manufacturing",
    short: "Factories, production, supply chain",
    eyebrow: "Manufacturing",
    description:
      "Helping factories, distributors, and industrial businesses digitize operations, sales, inventory, and supply chain workflows.",
    href: "/industries/manufacturing",
    icon: Factory,
    traits: [
      { label: "Operational Efficiency", icon: ShieldCheck },
      { label: "Process-Driven", icon: Workflow },
      { label: "Scalable", icon: BarChart3 },
    ],
    proofTitle: "Built for Security. Designed for Growth.",
    proofDescription:
      "Role-based access, operational controls, and enterprise-grade systems for production and B2B workflows.",
    ctaLabel: "Explore Manufacturing Solutions",
    solutions: [
      {
        label: "Manufacturing CRM",
        description: "Manage RFQs, dealers, quotations, orders, dispatches, and B2B relationships.",
        href: "/industries/manufacturing/crm",
        icon: Network,
        tag: "CRM",
        tagClass: tagStyles.crm,
      },
      {
        label: "Website Development",
        description: "Industrial websites built for credibility, catalogs, inquiries, and lead generation.",
        href: "/industries/manufacturing/website-development",
        icon: Code2,
        tag: "Website",
        tagClass: tagStyles.website,
      },
      {
        label: "Mobile App Development",
        description: "Apps for teams, distributors, approvals, inventory, and real-time coordination.",
        href: "/industries/manufacturing/mobile-app-development",
        icon: Smartphone,
        tag: "App",
        tagClass: tagStyles.app,
      },
      {
        label: "Vendor Portal",
        description: "Portals for vendors, procurement, purchase requests, documents, and updates.",
        href: "/industries/manufacturing/vendor-portal",
        icon: Network,
        tag: "Portal",
        tagClass: tagStyles.portal,
      },
      {
        label: "Workflow Automation",
        description: "Automate approvals, follow-ups, dispatch updates, and production workflows.",
        href: "/industries/manufacturing/workflow-automation",
        icon: Workflow,
        tag: "Automation",
        tagClass: tagStyles.automation,
      },
      {
        label: "Dashboard & Reporting",
        description: "Track operations, sales, orders, production, inventory, and KPIs.",
        href: "/industries/manufacturing/dashboard-reporting",
        icon: BarChart3,
        tag: "Dashboard",
        tagClass: tagStyles.dashboard,
      },
      {
        label: "Inventory Management",
        description: "Manage stock, SKUs, supply chain visibility, reorder logic, and availability.",
        href: "/industries/manufacturing/inventory-management",
        icon: Boxes,
        tag: "Inventory",
        tagClass: tagStyles.specialist,
      },
      {
        label: "B2B Marketing",
        description: "Run campaigns to generate industrial leads, dealer demand, and repeat orders.",
        href: "/industries/manufacturing/b2b-marketing",
        icon: Bot,
        tag: "Marketing",
        tagClass: tagStyles.marketing,
      },
    ],
  },
  {
    id: "retail",
    label: "Retail",
    short: "Stores, eCommerce, POS",
    eyebrow: "Retail",
    description:
      "End-to-end digital solutions designed to help retail brands, eCommerce businesses, and stores improve engagement, sales, and loyalty.",
    href: "/industries/retail",
    icon: Store,
    traits: [
      { label: "Customer-First", icon: ShieldCheck },
      { label: "Omnichannel", icon: Workflow },
      { label: "Growth-Focused", icon: BarChart3 },
    ],
    proofTitle: "Built for Security. Designed for Growth.",
    proofDescription:
      "Secure customer systems, reliable workflows, and scalable retail infrastructure for growth.",
    ctaLabel: "Explore Retail Solutions",
    solutions: [
      {
        label: "Retail CRM",
        description: "Manage customers, support, loyalty, campaigns, and repeat sales.",
        href: "/industries/retail/crm",
        icon: Network,
        tag: "CRM",
        tagClass: tagStyles.crm,
      },
      {
        label: "E-commerce Website",
        description: "High-converting retail and eCommerce websites with catalog and checkout.",
        href: "/industries/retail/ecommerce-website",
        icon: Code2,
        tag: "Website",
        tagClass: tagStyles.website,
      },
      {
        label: "Mobile App Development",
        description: "Shopping apps for engagement, orders, offers, notifications, and retention.",
        href: "/industries/retail/mobile-app-development",
        icon: Smartphone,
        tag: "App",
        tagClass: tagStyles.app,
      },
      {
        label: "Customer Portal",
        description: "Customer accounts, order tracking, service requests, returns, and support access.",
        href: "/industries/retail/customer-portal",
        icon: Network,
        tag: "Portal",
        tagClass: tagStyles.portal,
      },
      {
        label: "Loyalty Automation",
        description: "Automate offers, rewards, reminders, retention campaigns, and customer journeys.",
        href: "/industries/retail/loyalty-automation",
        icon: Workflow,
        tag: "Automation",
        tagClass: tagStyles.automation,
      },
      {
        label: "Dashboard & Reporting",
        description: "Track sales, customer behavior, product performance, and campaign results.",
        href: "/industries/retail/dashboard-reporting",
        icon: BarChart3,
        tag: "Dashboard",
        tagClass: tagStyles.dashboard,
      },
      {
        label: "POS Integration",
        description: "Connect online and offline systems with POS workflows and reporting.",
        href: "/industries/retail/pos-integration",
        icon: ServerCog,
        tag: "POS",
        tagClass: tagStyles.specialist,
      },
      {
        label: "Marketing Automation",
        description: "Run campaigns, promotions, abandoned-cart flows, and personalized outreach.",
        href: "/industries/retail/marketing-automation",
        icon: Bot,
        tag: "Marketing",
        tagClass: tagStyles.marketing,
      },
    ],
  },
  {
    id: "finance",
    label: "Finance",
    short: "Banks, NBFCs, financial services",
    eyebrow: "Finance",
    description:
      "Helping banks, NBFCs, advisors, and fintech businesses manage leads, compliance, approvals, documents, and client journeys.",
    href: "/industries/finance",
    icon: Landmark,
    traits: [
      { label: "Compliance-Ready", icon: ShieldCheck },
      { label: "Secure", icon: ShieldCheck },
      { label: "Scalable", icon: Layers3 },
    ],
    proofTitle: "Built for Security. Designed for Growth.",
    proofDescription:
      "Role-based access, audit-ready workflows, and enterprise-grade security for financial institutions.",
    ctaLabel: "Explore Finance Solutions",
    solutions: [
      {
        label: "Finance CRM",
        description: "Manage leads, advisors, approvals, client follow-ups, and financial journeys.",
        href: "/industries/finance/crm",
        icon: Network,
        tag: "CRM",
        tagClass: tagStyles.crm,
      },
      {
        label: "Website Development",
        description: "Build trusted finance websites that convert, educate, and capture leads.",
        href: "/industries/finance/website-development",
        icon: Code2,
        tag: "Website",
        tagClass: tagStyles.website,
      },
      {
        label: "Mobile App Development",
        description: "Secure apps for customers, advisors, service updates, and financial access.",
        href: "/industries/finance/mobile-app-development",
        icon: Smartphone,
        tag: "App",
        tagClass: tagStyles.app,
      },
      {
        label: "Client Portal",
        description: "Portals for statements, onboarding, documents, approvals, and service access.",
        href: "/industries/finance/client-portal",
        icon: Network,
        tag: "Portal",
        tagClass: tagStyles.portal,
      },
      {
        label: "KYC Automation",
        description: "Automate onboarding, document checks, verification, and approval workflows.",
        href: "/industries/finance/kyc-automation",
        icon: Workflow,
        tag: "Automation",
        tagClass: tagStyles.automation,
      },
      {
        label: "Dashboard & Reporting",
        description: "Track pipelines, approvals, revenue, advisors, targets, and KPIs.",
        href: "/industries/finance/dashboard-reporting",
        icon: BarChart3,
        tag: "Dashboard",
        tagClass: tagStyles.dashboard,
      },
      {
        label: "Loan Management",
        description: "Manage loan workflows, stages, documents, disbursement, and visibility.",
        href: "/industries/finance/loan-management",
        icon: Landmark,
        tag: "Loans",
        tagClass: tagStyles.specialist,
      },
      {
        label: "Marketing Automation",
        description: "Run compliant campaigns, advisor follow-ups, and nurture prospects.",
        href: "/industries/finance/marketing-automation",
        icon: Bot,
        tag: "Marketing",
        tagClass: tagStyles.marketing,
      },
    ],
  },
  {
    id: "insurance",
    label: "Insurance",
    short: "Policies, claims, agents",
    eyebrow: "Insurance",
    description:
      "Helping insurers, agencies, and brokers streamline policy workflows, claims, renewals, agent operations, and client communication.",
    href: "/industries/insurance",
    icon: ShieldCheck,
    traits: [
      { label: "Policy-Ready", icon: ShieldCheck },
      { label: "Claims-Focused", icon: Building2 },
      { label: "Secure", icon: ShieldCheck },
    ],
    proofTitle: "Built for Security. Designed for Growth.",
    proofDescription:
      "Secure policy, claim, and customer workflows with role-based access and controlled communication.",
    ctaLabel: "Explore Insurance Solutions",
    solutions: [
      {
        label: "Insurance CRM",
        description: "Manage leads, policies, renewals, agents, reminders, and customer workflows.",
        href: "/industries/insurance/crm",
        icon: Network,
        tag: "CRM",
        tagClass: tagStyles.crm,
      },
      {
        label: "Website Development",
        description: "Build trusted insurance websites that generate inquiries and convert leads.",
        href: "/industries/insurance/website-development",
        icon: Code2,
        tag: "Website",
        tagClass: tagStyles.website,
      },
      {
        label: "Mobile App Development",
        description: "Apps for policyholders, agents, claims, renewals, and service updates.",
        href: "/industries/insurance/mobile-app-development",
        icon: Smartphone,
        tag: "App",
        tagClass: tagStyles.app,
      },
      {
        label: "Policyholder Portal",
        description: "Access claims, documents, policies, renewals, requests, and service updates.",
        href: "/industries/insurance/policyholder-portal",
        icon: Network,
        tag: "Portal",
        tagClass: tagStyles.portal,
      },
      {
        label: "Claims Automation",
        description: "Automate claims intake, reminders, document routing, and service processes.",
        href: "/industries/insurance/claims-automation",
        icon: Workflow,
        tag: "Automation",
        tagClass: tagStyles.automation,
      },
      {
        label: "Dashboard & Reporting",
        description: "Track premiums, claims, renewals, agent performance, and team KPIs.",
        href: "/industries/insurance/dashboard-reporting",
        icon: BarChart3,
        tag: "Dashboard",
        tagClass: tagStyles.dashboard,
      },
      {
        label: "Policy Management",
        description: "Manage products, coverage, lifecycle workflows, and policy documentation.",
        href: "/industries/insurance/policy-management",
        icon: ShieldCheck,
        tag: "Policy",
        tagClass: tagStyles.specialist,
      },
      {
        label: "Marketing Automation",
        description: "Run campaigns for acquisition, renewals, upsell, and client retention.",
        href: "/industries/insurance/marketing-automation",
        icon: Bot,
        tag: "Marketing",
        tagClass: tagStyles.marketing,
      },
    ],
  },
  {
    id: "travel",
    label: "Travel",
    short: "Agencies, bookings, tours",
    eyebrow: "Travel",
    description:
      "Helping travel agencies, tour operators, and hospitality brands manage bookings, itineraries, payments, journeys, and customer engagement.",
    href: "/industries/travel",
    icon: Plane,
    traits: [
      { label: "Experience-Driven", icon: Sparkles },
      { label: "Booking-Focused", icon: CheckCircle2 },
      { label: "Scalable", icon: BarChart3 },
    ],
    proofTitle: "Built for Security. Designed for Growth.",
    proofDescription:
      "Secure booking workflows, traveler data, payments, documents, and communication in one system.",
    ctaLabel: "Explore Travel Solutions",
    solutions: [
      {
        label: "Travel CRM",
        description: "Manage leads, packages, bookings, itineraries, traveler details, and communication.",
        href: "/industries/travel/crm",
        icon: Network,
        tag: "CRM",
        tagClass: tagStyles.crm,
      },
      {
        label: "Travel Website",
        description: "Build beautiful booking-ready travel websites with packages and inquiries.",
        href: "/industries/travel/website-development",
        icon: Code2,
        tag: "Website",
        tagClass: tagStyles.website,
      },
      {
        label: "Mobile App Development",
        description: "Apps for bookings, itineraries, alerts, vouchers, documents, and support.",
        href: "/industries/travel/mobile-app-development",
        icon: Smartphone,
        tag: "App",
        tagClass: tagStyles.app,
      },
      {
        label: "Traveler Portal",
        description: "Secure traveler access for bookings, vouchers, visa documents, and updates.",
        href: "/industries/travel/traveler-portal",
        icon: Network,
        tag: "Portal",
        tagClass: tagStyles.portal,
      },
      {
        label: "Booking Automation",
        description: "Automate confirmations, payment reminders, itinerary updates, and follow-ups.",
        href: "/industries/travel/booking-automation",
        icon: Workflow,
        tag: "Automation",
        tagClass: tagStyles.automation,
      },
      {
        label: "Dashboard & Reporting",
        description: "Track bookings, revenue, destinations, customer trends, and campaign results.",
        href: "/industries/travel/dashboard-reporting",
        icon: BarChart3,
        tag: "Dashboard",
        tagClass: tagStyles.dashboard,
      },
      {
        label: "Itinerary Management",
        description: "Organize trips, schedules, documents, inclusions, vendors, and service coordination.",
        href: "/industries/travel/itinerary-management",
        icon: Plane,
        tag: "Itinerary",
        tagClass: tagStyles.specialist,
      },
      {
        label: "Marketing Automation",
        description: "Run destination campaigns, seasonal offers, and traveler nurturing flows.",
        href: "/industries/travel/marketing-automation",
        icon: Bot,
        tag: "Marketing",
        tagClass: tagStyles.marketing,
      },
    ],
  },
  {
    id: "automobile",
    label: "Automobile",
    short: "Dealers, services, workshops",
    eyebrow: "Automobile",
    description:
      "Helping dealerships, workshops, and auto brands manage customer journeys, leads, inventory, bookings, and service operations.",
    href: "/industries/automobile",
    icon: Car,
    traits: [
      { label: "Customer-Centric", icon: Network },
      { label: "Service-Ready", icon: Wrench },
      { label: "Growth-Focused", icon: BarChart3 },
    ],
    proofTitle: "Built for Security. Designed for Growth.",
    proofDescription:
      "Secure customer records, inventory visibility, service workflows, and communication systems.",
    ctaLabel: "Explore Automobile Solutions",
    solutions: [
      {
        label: "Automotive CRM",
        description: "Manage leads, inquiries, test drives, vehicle sales, and customer follow-ups.",
        href: "/industries/automobile/crm",
        icon: Network,
        tag: "CRM",
        tagClass: tagStyles.crm,
      },
      {
        label: "Dealership Website",
        description: "Build auto websites with inventory, inquiries, service booking, and promotions.",
        href: "/industries/automobile/website-development",
        icon: Code2,
        tag: "Website",
        tagClass: tagStyles.website,
      },
      {
        label: "Mobile App Development",
        description: "Apps for customers, dealerships, bookings, offers, service updates, and alerts.",
        href: "/industries/automobile/mobile-app-development",
        icon: Smartphone,
        tag: "App",
        tagClass: tagStyles.app,
      },
      {
        label: "Customer Portal",
        description: "Access bookings, service history, offers, documents, and vehicle updates.",
        href: "/industries/automobile/customer-portal",
        icon: Network,
        tag: "Portal",
        tagClass: tagStyles.portal,
      },
      {
        label: "Service Automation",
        description: "Automate reminders, bookings, follow-ups, service workflows, and updates.",
        href: "/industries/automobile/service-automation",
        icon: Workflow,
        tag: "Automation",
        tagClass: tagStyles.automation,
      },
      {
        label: "Dashboard & Reporting",
        description: "Track sales, service performance, inventory, teams, and customer trends.",
        href: "/industries/automobile/dashboard-reporting",
        icon: BarChart3,
        tag: "Dashboard",
        tagClass: tagStyles.dashboard,
      },
      {
        label: "Inventory Management",
        description: "Manage vehicles, stock, variants, pricing, availability, and showroom visibility.",
        href: "/industries/automobile/inventory-management",
        icon: Car,
        tag: "Inventory",
        tagClass: tagStyles.specialist,
      },
      {
        label: "Marketing Automation",
        description: "Run campaigns for launches, offers, service reminders, and retention.",
        href: "/industries/automobile/marketing-automation",
        icon: Bot,
        tag: "Marketing",
        tagClass: tagStyles.marketing,
      },
    ],
  },
  {
    id: "service-business",
    label: "Service Business",
    short: "Agencies, field services, support",
    eyebrow: "Service Business",
    description:
      "Helping agencies, consultancies, and field service businesses manage clients, jobs, tickets, quotes, schedules, and delivery operations.",
    href: "/industries/service-business",
    icon: Wrench,
    traits: [
      { label: "Client-Focused", icon: ShieldCheck },
      { label: "Efficient", icon: Rocket },
      { label: "Scalable", icon: BarChart3 },
    ],
    proofTitle: "Built for Security. Designed for Growth.",
    proofDescription:
      "Role-based access, client communication, team accountability, and scalable service workflows.",
    ctaLabel: "Explore Service Business Solutions",
    solutions: [
      {
        label: "Service CRM",
        description: "Manage clients, leads, quotes, jobs, tickets, and follow-ups.",
        href: "/industries/service-business/crm",
        icon: Network,
        tag: "CRM",
        tagClass: tagStyles.crm,
      },
      {
        label: "Website Development",
        description: "Build service websites that explain offers, build trust, and convert inquiries.",
        href: "/industries/service-business/website-development",
        icon: Code2,
        tag: "Website",
        tagClass: tagStyles.website,
      },
      {
        label: "Field Service App",
        description: "Mobile apps for teams, jobs, checklists, site updates, and client communication.",
        href: "/industries/service-business/field-service-app",
        icon: Smartphone,
        tag: "App",
        tagClass: tagStyles.app,
      },
      {
        label: "Client Portal",
        description: "Secure client access for projects, invoices, files, updates, and communication.",
        href: "/industries/service-business/client-portal",
        icon: Network,
        tag: "Portal",
        tagClass: tagStyles.portal,
      },
      {
        label: "Scheduling Automation",
        description: "Automate bookings, task assignments, reminders, follow-ups, and team schedules.",
        href: "/industries/service-business/scheduling-automation",
        icon: Workflow,
        tag: "Automation",
        tagClass: tagStyles.automation,
      },
      {
        label: "Dashboard & Reporting",
        description: "Track jobs, revenue, utilization, support tickets, teams, and performance.",
        href: "/industries/service-business/dashboard-reporting",
        icon: BarChart3,
        tag: "Dashboard",
        tagClass: tagStyles.dashboard,
      },
      {
        label: "Ticket Management",
        description: "Manage requests, service tasks, support workflows, SLAs, and client issues.",
        href: "/industries/service-business/ticket-management",
        icon: Headphones,
        tag: "Tickets",
        tagClass: tagStyles.specialist,
      },
      {
        label: "Marketing Automation",
        description: "Run campaigns, reminders, upsell flows, reviews, and prospect nurturing.",
        href: "/industries/service-business/marketing-automation",
        icon: Bot,
        tag: "Marketing",
        tagClass: tagStyles.marketing,
      },
    ],
  },
];

type IndustryInsightPoint = {
  label: string;
  description: string;
  icon: LucideIcon;
};

type IndustryInsightCopy = {
  overview: IndustryInsightPoint[];
  engage: IndustryInsightPoint[];
  operate: IndustryInsightPoint[];
  growth: IndustryInsightPoint[];
  solutionStack: string[];
};

const defaultIndustryInsight: IndustryInsightCopy = {
  overview: [
    {
      label: "Scattered customer data",
      description: "Leads, requests, documents, and follow-ups live in separate tools.",
      icon: Layers3,
    },
    {
      label: "Manual follow-ups",
      description: "Teams lose time on repeated calls, messages, reminders, and updates.",
      icon: Workflow,
    },
    {
      label: "Low visibility",
      description: "Owners cannot clearly track pipeline, revenue, team output, and bottlenecks.",
      icon: BarChart3,
    },
  ],
  engage: [
    {
      label: "Weak online journey",
      description: "Customers struggle to discover, inquire, book, or request service online.",
      icon: SearchCheck,
    },
    {
      label: "Slow communication",
      description: "Important updates depend on manual WhatsApp, calls, and scattered messages.",
      icon: Bot,
    },
    {
      label: "No self-service",
      description: "Customers need a simple portal or app to check status, files, and updates.",
      icon: Smartphone,
    },
  ],
  operate: [
    {
      label: "Process leakage",
      description: "Tasks, approvals, assignments, and handoffs are not tracked end-to-end.",
      icon: Workflow,
    },
    {
      label: "Team dependency",
      description: "Operations depend on individuals instead of a controlled business system.",
      icon: Network,
    },
    {
      label: "No live control room",
      description: "Managers lack dashboards for workload, performance, SLA, and revenue trends.",
      icon: LayoutDashboard,
    },
  ],
  growth: [
    {
      label: "No conversion engine",
      description: "Leads are generated but not nurtured, scored, followed up, or measured properly.",
      icon: SearchCheck,
    },
    {
      label: "Campaign gaps",
      description: "Ads, SEO, email, and WhatsApp campaigns are not connected to CRM outcomes.",
      icon: Bot,
    },
    {
      label: "Poor decision data",
      description: "Growth decisions happen without clean analytics, source tracking, and reports.",
      icon: BarChart3,
    },
  ],
  solutionStack: ["CRM", "Portal", "Automation", "Dashboard"],
};

const industryInsightCopy: Record<string, IndustryInsightCopy> = {
  healthcare: {
    ...defaultIndustryInsight,
    overview: [
      {
        label: "Missed appointments",
        description: "Patients forget bookings and clinics lose productive time and revenue.",
        icon: CheckCircle2,
      },
      {
        label: "Manual patient follow-ups",
        description: "Staff spends hours calling, messaging, and updating patients manually.",
        icon: Workflow,
      },
      {
        label: "Scattered patient data",
        description: "Leads, appointments, records, reports, and billing are not connected.",
        icon: Layers3,
      },
    ],
    engage: [
      {
        label: "Low online booking",
        description: "Patients cannot easily book appointments from website, app, or portal.",
        icon: SearchCheck,
      },
      {
        label: "Poor patient communication",
        description: "Reminders, reports, prescriptions, and updates are sent manually.",
        icon: Bot,
      },
      {
        label: "No digital patient access",
        description: "Patients need secure self-service for records, appointments, and reports.",
        icon: Smartphone,
      },
    ],
    operate: [
      {
        label: "Appointment chaos",
        description: "Slots, walk-ins, follow-ups, and staff tasks are difficult to manage.",
        icon: Workflow,
      },
      {
        label: "Admin workload",
        description: "Billing, reminders, reports, and patient lifecycle tasks consume staff time.",
        icon: Network,
      },
      {
        label: "No clinic control room",
        description: "Owners lack live insight into patients, revenue, doctors, and follow-ups.",
        icon: LayoutDashboard,
      },
    ],
    growth: [
      {
        label: "Low patient acquisition",
        description: "Clinic websites and campaigns do not convert visitors into booked patients.",
        icon: SearchCheck,
      },
      {
        label: "No retention engine",
        description: "Patients are not nurtured with reminders, health checks, and reactivation flows.",
        icon: Bot,
      },
      {
        label: "Unclear marketing ROI",
        description: "Campaigns are not connected to appointments, revenue, and patient sources.",
        icon: BarChart3,
      },
    ],
    solutionStack: ["CRM", "Patient Portal", "Automation", "Dashboard"],
  },
  "real-estate": {
    ...defaultIndustryInsight,
    overview: [
      {
        label: "Lead leakage",
        description: "Property inquiries from calls, ads, portals, and WhatsApp are not unified.",
        icon: SearchCheck,
      },
      {
        label: "Site visit follow-up gaps",
        description: "Brokers miss reminders, buyer updates, and post-visit follow-ups.",
        icon: Workflow,
      },
      {
        label: "Listing confusion",
        description: "Availability, pricing, media, and documents change but teams lack one source.",
        icon: Store,
      },
    ],
    solutionStack: ["CRM", "Listings", "Portal", "Automation"],
  },
  education: {
    ...defaultIndustryInsight,
    overview: [
      {
        label: "Admission inquiry leakage",
        description: "Leads from forms, calls, ads, and counselors are not tracked cleanly.",
        icon: SearchCheck,
      },
      {
        label: "Manual counselor follow-ups",
        description: "Counselors handle reminders, batches, calls, and admission updates manually.",
        icon: Workflow,
      },
      {
        label: "Student journey gaps",
        description: "Admissions, fees, notices, records, LMS, and parent updates are disconnected.",
        icon: Layers3,
      },
    ],
    solutionStack: ["CRM", "Student Portal", "LMS", "Automation"],
  },
  manufacturing: {
    ...defaultIndustryInsight,
    overview: [
      {
        label: "RFQs scattered across channels",
        description: "Dealer inquiries, quotations, orders, and follow-ups are hard to track.",
        icon: Network,
      },
      {
        label: "Manual approval workflows",
        description: "Pricing, quotation, dispatch, and procurement approvals move slowly.",
        icon: Workflow,
      },
      {
        label: "Low supply-chain visibility",
        description: "Inventory, orders, dealers, production, and dispatch KPIs are not unified.",
        icon: Boxes,
      },
    ],
    solutionStack: ["CRM", "Inventory", "Automation", "Dashboard"],
  },
  retail: {
    ...defaultIndustryInsight,
    overview: [
      {
        label: "Customers do not repeat",
        description: "Purchase history, loyalty, offers, and support are not connected.",
        icon: Store,
      },
      {
        label: "Online and offline gaps",
        description: "Website, POS, app, inventory, orders, and campaigns work separately.",
        icon: Layers3,
      },
      {
        label: "No customer behavior insight",
        description: "Teams cannot clearly see sales trends, repeat buyers, and product demand.",
        icon: BarChart3,
      },
    ],
    solutionStack: ["CRM", "E-commerce", "POS", "Marketing"],
  },
  finance: {
    ...defaultIndustryInsight,
    overview: [
      {
        label: "Slow lead qualification",
        description: "Loan, advisory, and finance inquiries need faster routing and follow-up.",
        icon: SearchCheck,
      },
      {
        label: "Document and KYC delays",
        description: "Approvals slow down when documents, checks, and status are scattered.",
        icon: ShieldCheck,
      },
      {
        label: "Pipeline visibility gaps",
        description: "Teams need clear visibility into stages, approvals, revenue, and advisors.",
        icon: BarChart3,
      },
    ],
    solutionStack: ["CRM", "KYC", "Portal", "Dashboard"],
  },
  insurance: {
    ...defaultIndustryInsight,
    overview: [
      {
        label: "Renewals get missed",
        description: "Policyholders are not reminded at the right time with the right context.",
        icon: CheckCircle2,
      },
      {
        label: "Claims are hard to track",
        description: "Claim intake, documents, agent updates, and status tracking are fragmented.",
        icon: ShieldCheck,
      },
      {
        label: "Agent performance is unclear",
        description: "Leads, policies, renewals, claims, and follow-ups need measurable reporting.",
        icon: BarChart3,
      },
    ],
    solutionStack: ["CRM", "Policy Portal", "Claims", "Automation"],
  },
  travel: {
    ...defaultIndustryInsight,
    overview: [
      {
        label: "Booking communication gaps",
        description: "Travelers need timely confirmations, itinerary updates, and document reminders.",
        icon: Plane,
      },
      {
        label: "Manual itinerary handling",
        description: "Packages, vendors, vouchers, visa docs, and support are hard to coordinate.",
        icon: Workflow,
      },
      {
        label: "Weak traveler retention",
        description: "Past customers are not nurtured with offers, campaigns, and seasonal journeys.",
        icon: Sparkles,
      },
    ],
    solutionStack: ["CRM", "Booking Portal", "Itinerary", "Automation"],
  },
  automobile: {
    ...defaultIndustryInsight,
    overview: [
      {
        label: "Lead and test-drive leakage",
        description: "Inquiries, test drives, vehicle interest, and sales follow-ups are scattered.",
        icon: Car,
      },
      {
        label: "Service reminders are manual",
        description: "Workshops need automated bookings, reminders, and service lifecycle updates.",
        icon: Wrench,
      },
      {
        label: "Inventory visibility gaps",
        description: "Vehicle stock, variants, offers, and availability need one live system.",
        icon: Boxes,
      },
    ],
    solutionStack: ["CRM", "Inventory", "Service App", "Automation"],
  },
  "service-business": {
    ...defaultIndustryInsight,
    overview: [
      {
        label: "Jobs and tickets scatter",
        description: "Client requests, tasks, quotes, tickets, and updates need one workflow.",
        icon: Headphones,
      },
      {
        label: "Scheduling is manual",
        description: "Teams lose time assigning jobs, reminders, follow-ups, and field updates.",
        icon: Workflow,
      },
      {
        label: "Client communication gaps",
        description: "Clients need transparent access to files, invoices, projects, and status.",
        icon: Network,
      },
    ],
    solutionStack: ["CRM", "Client Portal", "Tickets", "Dashboard"],
  },
};

function getIndustryInsight(industry: IndustryMenu, view: IndustryView) {
  const copy = industryInsightCopy[industry.id] ?? defaultIndustryInsight;
  const points = copy[view] ?? copy.overview;

  const titles: Record<IndustryView, string> = {
    overview: `Common ${industry.label} Challenges`,
    engage: `Engagement Problems`,
    operate: `Operational Problems`,
    growth: `Growth Problems`,
  };

  const descriptions: Record<IndustryView, string> = {
    overview: `What ${industry.label.toLowerCase()} businesses usually struggle with before a proper digital system.`,
    engage: `Customer-facing gaps where websites, apps, portals, and communication systems create impact.`,
    operate: `Internal workflow gaps where CRM, dashboards, automation, and role-based systems improve control.`,
    growth: `Revenue and visibility gaps where SEO, campaigns, analytics, and nurturing create measurable growth.`,
  };

  return {
    title: titles[view],
    description: descriptions[view],
    points,
    solutionStack: copy.solutionStack,
  };
}


const dropdownVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 8,
    scale: 0.985,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.18,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  exit: {
    opacity: 0,
    y: 6,
    scale: 0.985,
    filter: "blur(6px)",
    transition: {
      duration: 0.14,
      ease: "easeInOut",
    },
  },
};

const gridVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.035,
      delayChildren: 0.03,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 8,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.18,
      ease: "easeOut",
    },
  },
};

function DropdownAnchor({ open }: { open: boolean }) {
  if (!open) return null;

  return (
    <span
      className="pointer-events-none absolute left-1/2 top-[calc(100%+8px)] z-70 h-3 w-10 -translate-x-1/2 rounded-t-full bg-white shadow-[0_-1px_0_rgba(226,232,240,0.9)] dark:bg-[#0b1220] dark:shadow-[0_-1px_0_rgba(255,255,255,0.08)]"
      aria-hidden="true"
    />
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [desktopSolutionsOpen, setDesktopSolutionsOpen] = useState(false);
  const [desktopIndustriesOpen, setDesktopIndustriesOpen] = useState(false);
  const [selectedIndustryId, setSelectedIndustryId] = useState("healthcare");
  const [selectedIndustryView, setSelectedIndustryView] =
    useState<IndustryView>("overview");
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const mobileServicesRef = useRef<HTMLDivElement | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  function clearDesktopCloseTimer() {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }

  function closeDesktopDropdowns() {
    clearDesktopCloseTimer();
    setDesktopServicesOpen(false);
    setDesktopSolutionsOpen(false);
    setDesktopIndustriesOpen(false);
  }

  function scheduleDesktopDropdownClose() {
    clearDesktopCloseTimer();
    closeTimerRef.current = setTimeout(() => {
      setDesktopServicesOpen(false);
      setDesktopSolutionsOpen(false);
      setDesktopIndustriesOpen(false);
    }, 140);
  }

  function openDesktopDropdown(type: DesktopDropdown) {
    clearDesktopCloseTimer();
    setDesktopServicesOpen(type === "services");
    setDesktopSolutionsOpen(type === "solutions");
    setDesktopIndustriesOpen(type === "industries");
  }

  function closeMobileMenu() {
    setMobileOpen(false);
    setMobileServicesOpen(false);
    setMobileSolutionsOpen(false);
    setMobileIndustriesOpen(false);
  }

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handle);
    return () => window.removeEventListener("scroll", handle);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest("[data-desktop-dropdown]")) {
        if (closeTimerRef.current) {
          clearTimeout(closeTimerRef.current);
          closeTimerRef.current = null;
        }
        setDesktopServicesOpen(false);
        setDesktopSolutionsOpen(false);
        setDesktopIndustriesOpen(false);
      }
    };

    if (desktopServicesOpen || desktopSolutionsOpen || desktopIndustriesOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [desktopServicesOpen, desktopSolutionsOpen, desktopIndustriesOpen]);

  useEffect(() => {
    return () => clearDesktopCloseTimer();
  }, []);

  useEffect(() => {
    const handleMobileOutsideClick = (event: MouseEvent) => {
      if (!mobileServicesOpen) return;
      const target = event.target as Node;
      if (
        mobileServicesRef.current &&
        !mobileServicesRef.current.contains(target)
      ) {
        setMobileServicesOpen(false);
      }
    };

    if (mobileServicesOpen) {
      document.addEventListener("mousedown", handleMobileOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleMobileOutsideClick);
    };
  }, [mobileServicesOpen]);

  useEffect(() => {
    const handleMobileMenuOutsideClick = (event: MouseEvent) => {
      if (!mobileOpen) return;
      const target = event.target as Node;

      if (mobileMenuRef.current && !mobileMenuRef.current.contains(target)) {
        closeMobileMenu();
      }
    };

    if (mobileOpen) {
      document.addEventListener("mousedown", handleMobileMenuOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleMobileMenuOutsideClick);
    };
  }, [mobileOpen]);

  const isDark = theme === "dark";
  const isServicesActive =
    pathname === "/services" || pathname.startsWith("/services/");
  const isSolutionsActive = pathname.startsWith("/solutions/");
  const isIndustriesActive =
    pathname === "/industries" || pathname.startsWith("/industries/");
  const isDesktopDropdownOpen =
    desktopServicesOpen || desktopSolutionsOpen || desktopIndustriesOpen;
  const selectedIndustry =
    industryMenus.find((industry) => industry.id === selectedIndustryId) ??
    industryMenus[0];
  const filteredIndustrySolutions = selectedIndustry.solutions.filter(
    industryViewFilters[selectedIndustryView]
  );
  const visibleIndustrySolutions = (
    filteredIndustrySolutions.length > 0
      ? filteredIndustrySolutions
      : selectedIndustry.solutions
  ).slice(0, 6);
  const selectedIndustryInsight = getIndustryInsight(
    selectedIndustry,
    selectedIndustryView
  );

  const isLinkActive = (href: string) =>
    href === "/"
      ? pathname === href
      : pathname === href || pathname.startsWith(`${href}/`);

  function desktopNavClass(active: boolean) {
    return `rounded-2xl px-3.5 py-2 text-sm font-medium transition-all duration-200 2xl:px-4 ${
      active
        ? "bg-white/75 text-primary shadow-[0_8px_24px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/80 dark:bg-white/8 dark:ring-white/10"
        : "text-(--text-soft) hover:bg-white/45 hover:text-primary dark:hover:bg-white/5"
    }`;
  }

  function desktopDropdownNavClass(active: boolean, open: boolean) {
    return `relative z-80 inline-flex items-center gap-2 rounded-2xl px-3.5 py-2 text-sm font-medium transition-all duration-200 2xl:px-4 ${
      open
        ? "bg-white text-primary shadow-[0_10px_28px_rgba(15,23,42,0.10)] ring-1 ring-slate-200/90 dark:bg-[#0b1220] dark:ring-white/10"
        : active
          ? "bg-white/75 text-primary shadow-[0_8px_24px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/80 dark:bg-white/8 dark:ring-white/10"
          : "text-(--text-soft) hover:bg-white/45 hover:text-primary dark:hover:bg-white/5"
    }`;
  }

  function renderMobileDropdownItem(item: DropdownLink) {
    const Icon = item.icon;
    const active = isLinkActive(item.href);

    return (
      <Link
        key={item.href}
        href={item.href}
        onClick={closeMobileMenu}
        aria-current={active ? "page" : undefined}
        className={`flex gap-3 rounded-xl px-3 py-3 text-sm transition ${
          active
            ? "bg-white/8 text-primary"
            : "text-(--text-muted) hover:bg-white/5 hover:text-primary"
        }`}
      >
        <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-xl border border-(--border) bg-white/5 text-primary">
          <Icon className="h-3.5 w-3.5" aria-hidden="true" />
        </span>
        <span>
          <span className="block font-bold text-(--text)">{item.label}</span>
          <span className="mt-0.5 block text-xs leading-5 text-(--text-soft)">
            {item.description}
          </span>
        </span>
      </Link>
    );
  }

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-3 pt-0.1 sm:px-4">
      <AnimatePresence>
        {isDesktopDropdownOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="pointer-events-none fixed inset-x-0 top-0 bottom-0 z-30 bg-white/20 backdrop-blur-sm dark:bg-black/30"
          />
        )}
      </AnimatePresence>

      <div
      className={`relative z-50 mx-auto max-w-[min(94vw,1680px)] rounded-3xl border border-white/50 bg-white/70 shadow-black/10 backdrop-blur-2xl dark:border-white/10 dark:bg-dark-800/80 ${          scrolled ? "shadow-xl" : "shadow-lg"
        }`}
      >
        <div className="px-4 sm:px-5 lg:px-7">
          <div className="flex h-17 items-center justify-between gap-4 sm:h-18">
            <Link
              href="/"
              className="group flex min-w-0 items-center gap-2.5 sm:gap-3"
            >
                <div className="relative grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-full border border-slate-200/70 bg-[#f8efe0] shadow-[0_8px_22px_rgba(15,23,42,0.14)] transition-all duration-300 group-hover:scale-105 dark:border-white/10 dark:bg-white/8 sm:h-13 sm:w-13">                <Image
                  src="/hnxlogo.png"
                  alt="HNX Solutions Logo"
                  fill
                  priority
                  sizes="60px"
                  className="object-cover scale-[1.0]"
                />
              </div>

              <div className="min-w-0 leading-tight">
                <span className="block truncate text-lg font-extrabold tracking-tight text-(--text) sm:text-xl md:text-2xl">
                  HNX<span className="text-primary"> Solutions</span>
                </span>
                <span className="hidden text-sm font-medium tracking-tight text-(--text-soft) sm:block">
                  IT Services & Digital Solutions
                </span>
              </div>
            </Link>

            <div className="hidden flex-1 items-center justify-center gap-1 xl:flex 2xl:gap-1.5">
              <Link
                href="/"
                className={desktopNavClass(isLinkActive("/"))}
                aria-current={isLinkActive("/") ? "page" : undefined}
              >
                Home
              </Link>

              <div
                data-desktop-dropdown
                className="relative"
                onMouseEnter={() => openDesktopDropdown("services")}
                onMouseLeave={scheduleDesktopDropdownClose}
                onFocus={() => openDesktopDropdown("services")}
                onBlur={(event) => {
                  const nextFocus = event.relatedTarget;
                  if (
                    !(nextFocus instanceof Node) ||
                    !event.currentTarget.contains(nextFocus)
                  ) {
                    scheduleDesktopDropdownClose();
                  }
                }}
              >
                <button
                  type="button"
                  aria-expanded={desktopServicesOpen ? "true" : "false"}
                  className={desktopDropdownNavClass(
                    isServicesActive,
                    desktopServicesOpen
                  )}
                >
                  Services
                  <HiChevronDown
                    className={`text-base transition-transform duration-200 ${
                      desktopServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <DropdownAnchor open={desktopServicesOpen} />
                <div className="absolute left-1/2 top-full h-5 w-44 -translate-x-1/2" />

                <AnimatePresence>
                  {desktopServicesOpen && (
                    <div
                      className="fixed left-1/2 top-[4.45rem] z-60 w-[min(94vw,1120px)] -translate-x-1/2"
                      onMouseEnter={clearDesktopCloseTimer}
                      onMouseLeave={scheduleDesktopDropdownClose}
                    >
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={dropdownVariants}
                        style={{ transformOrigin: "top center" }}
                        className="relative max-h-[calc(100vh-6rem)] overflow-hidden rounded-3xl border border-slate-200/70 bg-white/95 shadow-[0_24px_70px_rgba(15,23,42,0.16)] ring-1 ring-white/70 backdrop-blur-2xl dark:border-white/10 dark:bg-[#0b1220]/95 dark:ring-white/5 dark:shadow-[0_28px_90px_rgba(0,0,0,0.62)]"
                        aria-label="Services"
                      >
                        <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-linear-to-r from-transparent via-primary/50 to-transparent" />
                        <div className="pointer-events-none absolute -left-14 top-20 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
                        <div className="pointer-events-none absolute -right-16 top-0 h-48 w-48 rounded-full bg-accent/10 blur-3xl" />

                        <div className="grid grid-cols-[280px_1fr]">
                          <div className="relative overflow-hidden border-r border-slate-200/70 bg-linear-to-br from-blue-600 via-indigo-600 to-violet-700 p-6 text-white dark:border-white/10 dark:from-blue-700 dark:via-indigo-700 dark:to-violet-800">
                            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-300/25 blur-3xl" />
                            <div className="pointer-events-none absolute -bottom-16 left-4 h-40 w-40 rounded-full bg-purple-300/20 blur-3xl" />

                            <div className="relative">
                              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/90">
                                <Sparkles size={13} aria-hidden="true" />
                                Featured Service
                              </span>

                              <h3 className="mt-5 text-2xl font-bold tracking-tight">
                                HNX CRM Systems
                              </h3>

                              <p className="mt-3 text-sm leading-6 text-white/85">
                                Owned CRM systems with workflow automation, AI
                                insights, dashboards, secure roles, and industry
                                modules.
                              </p>

                              <Link
                                href="/crm-systems"
                                onClick={closeDesktopDropdowns}
                                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
                              >
                                Explore CRM Systems
                                <ArrowRight size={16} aria-hidden="true" />
                              </Link>

                              <div className="mt-6 space-y-3">
                                {serviceFeaturedLinks.map((item) => {
                                  const Icon = item.icon;

                                  return (
                                    <Link
                                      key={item.label}
                                      href={item.href}
                                      onClick={closeDesktopDropdowns}
                                      className="group flex items-center justify-between rounded-xl px-1 py-1.5 text-sm text-white/90 transition hover:text-white"
                                    >
                                      <span className="flex items-center gap-3">
                                        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/15">
                                          <Icon size={15} aria-hidden="true" />
                                        </span>
                                        {item.label}
                                      </span>
                                      <ArrowRight
                                        size={14}
                                        className="opacity-60 transition group-hover:translate-x-1 group-hover:opacity-100"
                                        aria-hidden="true"
                                      />
                                    </Link>
                                  );
                                })}
                              </div>
                            </div>
                          </div>

                          <div className="relative p-6">
                            <div className="mb-5">
                              <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary dark:text-cyan-300">
                                Our Services
                              </p>
                              <p className="mt-2 text-sm text-(--text-soft)">
                                Premium digital solutions for building,
                                automating, and scaling businesses.
                              </p>
                            </div>

                            <div className="grid grid-cols-4 gap-8">
                              {serviceColumns.map((column) => (
                                <div key={column.title}>
                                  <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-primary dark:text-cyan-300">
                                    {column.title}
                                  </h4>

                                  <div className="space-y-3">
                                    {column.items.map((item) => {
                                      const active = isLinkActive(item.href);

                                      return (
                                        <Link
                                          key={item.label}
                                          href={item.href}
                                          onClick={closeDesktopDropdowns}
                                          aria-current={
                                            active ? "page" : undefined
                                          }
                                          className="group flex items-center justify-between py-1 pr-1 text-sm transition"
                                        >
                                          <span className="relative inline-flex flex-col">
                                            <span
                                              className={`font-semibold leading-6 transition-colors duration-300 ${
                                                active
                                                  ? "text-primary"
                                                  : "text-(--text) group-hover:text-primary"
                                              }`}
                                            >
                                              {item.label}
                                            </span>

                                            <span
                                              className={`mt-1 h-[1.5px] rounded-full bg-linear-to-r from-cyan-400 to-violet-500 transition-all duration-300 ease-out ${
                                                active
                                                  ? "w-full"
                                                  : "w-0 group-hover:w-full"
                                              }`}
                                            />
                                          </span>

                                          <ArrowRight
                                            size={14}
                                            className={`transition-all duration-300 ${
                                              active
                                                ? "translate-x-0 text-primary opacity-100"
                                                : "-translate-x-1 text-primary opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                                            }`}
                                            aria-hidden="true"
                                          />
                                        </Link>
                                      );
                                    })}
                                  </div>
                                </div>
                              ))}
                            </div>

                            <div className="mt-8 border-t border-slate-200/80 pt-5 dark:border-white/10">
                              <div className="grid grid-cols-4 gap-4">
                                {serviceTrustPoints.map((point) => {
                                  const Icon = point.icon;

                                  return (
                                    <div
                                      key={point.label}
                                      className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 dark:bg-white/4 dark:text-slate-300"
                                    >
                                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-primary dark:bg-cyan-400/10 dark:text-cyan-300">
                                        <Icon size={17} aria-hidden="true" />
                                      </span>
                                      {point.label}
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  )}
                </AnimatePresence>
              </div>

              <div
                data-desktop-dropdown
                className="relative"
                onMouseEnter={() => openDesktopDropdown("solutions")}
                onMouseLeave={scheduleDesktopDropdownClose}
                onFocus={() => openDesktopDropdown("solutions")}
                onBlur={(event) => {
                  const nextFocus = event.relatedTarget;
                  if (
                    !(nextFocus instanceof Node) ||
                    !event.currentTarget.contains(nextFocus)
                  ) {
                    scheduleDesktopDropdownClose();
                  }
                }}
              >
                <Link
                  href="/solutions/crm/business-os"
                  className={desktopDropdownNavClass(
                    isSolutionsActive,
                    desktopSolutionsOpen
                  )}
                  aria-current={isSolutionsActive ? "page" : undefined}
                  aria-haspopup="menu"
                  aria-expanded={desktopSolutionsOpen ? "true" : "false"}
                >
                  Solutions
                  <HiChevronDown
                    className={`text-base transition-transform duration-200 ${
                      desktopSolutionsOpen ? "rotate-180" : ""
                    }`}
                  />
                </Link>

                <DropdownAnchor open={desktopSolutionsOpen} />
                <div className="absolute left-1/2 top-full h-5 w-44 -translate-x-1/2" />

                <AnimatePresence>
                  {desktopSolutionsOpen && (
                    <div
                      className="fixed left-1/2 top-[4.45rem] z-60 w-[min(94vw,1180px)] -translate-x-1/2"
                      onMouseEnter={clearDesktopCloseTimer}
                      onMouseLeave={scheduleDesktopDropdownClose}
                    >
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={dropdownVariants}
                        style={{ transformOrigin: "top center" }}
                        className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/95 shadow-[0_24px_70px_rgba(15,23,42,0.16)] ring-1 ring-white/70 backdrop-blur-2xl dark:border-white/10 dark:bg-[#0b1220]/95 dark:ring-white/5 dark:shadow-[0_28px_90px_rgba(0,0,0,0.62)]"
                        aria-label="Solutions"
                      >
                        <div className="grid grid-cols-6 divide-x divide-slate-200/80 p-6 dark:divide-white/10">
                          {solutionMenuColumns.map((column) => {
                            const HeaderIcon = column.icon;

                            return (
                              <div
                                key={column.title}
                                className="px-6 first:pl-0 last:pr-0"
                              >
                                <Link
                                  href={column.href}
                                  onClick={closeDesktopDropdowns}
                                  className="group/header mb-7 flex items-center gap-3"
                                >
                                  <HeaderIcon
                                    className={`h-5 w-5 shrink-0 ${column.accent}`}
                                    aria-hidden="true"
                                  />
                                  <span className="text-base font-bold text-(--text) transition group-hover/header:text-primary">
                                    {column.title}
                                  </span>
                                </Link>

                                <div className="space-y-5">
                                  {column.items.map((item) => {
                                    const active = isLinkActive(item.href);

                                    return (
                                      <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={closeDesktopDropdowns}
                                        aria-current={
                                          active ? "page" : undefined
                                        }
                                        className="group block"
                                      >
                                        <span
                                          className={`block text-sm font-medium leading-5 transition-colors duration-300 ${
                                            active
                                              ? "text-primary"
                                              : "text-(--text) group-hover:text-primary"
                                          }`}
                                        >
                                          {item.label}
                                        </span>

                                        <span
                                          className={`mt-1.5 block h-[1.5px] rounded-full bg-linear-to-r from-cyan-400 to-violet-500 transition-all duration-300 ease-out ${
                                            active
                                              ? "w-full"
                                              : "w-0 group-hover:w-full"
                                          }`}
                                        />
                                      </Link>
                                    );
                                  })}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </motion.div>
                    </div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/demo-crm"
                className={desktopNavClass(isLinkActive("/demo-crm"))}
                aria-current={isLinkActive("/demo-crm") ? "page" : undefined}
              >
                Demo CRM
              </Link>

              <Link
                href="/roi-calculator"
                className={desktopNavClass(isLinkActive("/roi-calculator"))}
                aria-current={
                  isLinkActive("/roi-calculator") ? "page" : undefined
                }
              >
                ROI Calculator
              </Link>

              <div
                data-desktop-dropdown
                className="relative"
                onMouseEnter={() => openDesktopDropdown("industries")}
                onMouseLeave={scheduleDesktopDropdownClose}
                onFocus={() => openDesktopDropdown("industries")}
                onBlur={(event) => {
                  const nextFocus = event.relatedTarget;
                  if (
                    !(nextFocus instanceof Node) ||
                    !event.currentTarget.contains(nextFocus)
                  ) {
                    scheduleDesktopDropdownClose();
                  }
                }}
              >
                <Link
                  href="/industries"
                  className={desktopDropdownNavClass(
                    isIndustriesActive,
                    desktopIndustriesOpen
                  )}
                  aria-current={isIndustriesActive ? "page" : undefined}
                  aria-haspopup="menu"
                  aria-expanded={desktopIndustriesOpen ? "true" : "false"}
                >
                  Industries
                  <HiChevronDown
                    className={`text-base transition-transform duration-200 ${
                      desktopIndustriesOpen ? "rotate-180" : ""
                    }`}
                  />
                </Link>

                <DropdownAnchor open={desktopIndustriesOpen} />
                <div className="absolute left-1/2 top-full h-5 w-44 -translate-x-1/2" />

                <AnimatePresence>
                  {desktopIndustriesOpen && (
                    <div
                      className="fixed left-1/2 top-[4.55rem] z-60 w-[min(98vw,1540px)] -translate-x-1/2"
                      onMouseEnter={clearDesktopCloseTimer}
                      onMouseLeave={scheduleDesktopDropdownClose}
                    >
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={dropdownVariants}
                        style={{ transformOrigin: "top center" }}
                        className="relative max-h-[calc(100vh-6rem)] overflow-hidden rounded-3xl border border-slate-200/80 bg-white/96 shadow-[0_28px_80px_rgba(15,23,42,0.18)] ring-1 ring-white/70 backdrop-blur-2xl dark:border-white/10 dark:bg-[#0b1220]/96 dark:ring-white/5 dark:shadow-[0_28px_90px_rgba(0,0,0,0.62)]"
                        aria-label="Industries"
                      >
                        <div className="pointer-events-none absolute inset-x-12 top-0 h-px bg-linear-to-r from-transparent via-primary/70 to-transparent" />
                        <div className="pointer-events-none absolute -left-24 -top-16 h-64 w-64 rounded-full bg-cyan-400/12 blur-3xl" />
                        <div className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-violet-500/12 blur-3xl" />
                        <motion.div
                          className="pointer-events-none absolute left-[46%] top-4 h-16 w-16 rounded-full bg-linear-to-br from-cyan-300/20 to-violet-500/20 blur-xl"
                          animate={{ y: [0, 10, 0], opacity: [0.45, 0.8, 0.45] }}
                          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                          aria-hidden="true"
                        />

                        <div className="relative grid max-h-[calc(100vh-5.4rem)] grid-cols-[250px_minmax(0,1fr)_300px] overflow-hidden">
                          <aside className="border-r border-slate-200/75 bg-slate-50/75 p-3.5 dark:border-white/10 dark:bg-white/3">
                            <div className="mb-3">
                              <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-primary dark:text-cyan-300">
                                Browse Industries
                              </p>
                              <p className="mt-1 text-[11px] leading-4 text-(--text-soft)">
                                Select one industry, then choose the right service.
                              </p>
                            </div>

                            <div className="max-h-[390px] space-y-1.5 overflow-y-auto pr-1">
                              {industryMenus.map((industry) => {
                                const active = selectedIndustry.id === industry.id;
                                const industryPhoto = getIndustryPhoto(industry);

                                return (
                                  <motion.button
                                    key={industry.id}
                                    type="button"
                                    whileHover={{ x: 4, scale: 1.012 }}
                                    whileTap={{ scale: 0.985 }}
                                    onClick={() => {
                                      setSelectedIndustryId(industry.id);
                                      setSelectedIndustryView("overview");
                                    }}
                                    className={`group/industry flex w-full items-center gap-3 rounded-2xl border px-3 py-2.5 text-left transition duration-200 ease-out ${
                                      active
                                        ? "border-primary/20 bg-white text-primary shadow-[0_14px_32px_rgba(14,165,233,0.12)] ring-1 ring-primary/12 dark:border-cyan-300/20 dark:bg-white/10 dark:text-cyan-300 dark:ring-cyan-300/15"
                                        : "border-transparent bg-transparent text-(--text) hover:border-slate-200/90 hover:bg-white/85 hover:text-primary hover:shadow-sm dark:hover:border-white/10 dark:hover:bg-white/6"
                                    }`}
                                  >
                                    <span
                                      className={`relative h-10 w-12 shrink-0 overflow-hidden rounded-xl border bg-slate-100 shadow-sm transition ${
                                        active
                                          ? "border-primary/30 ring-2 ring-primary/15 dark:border-cyan-300/25 dark:ring-cyan-300/15"
                                          : "border-slate-200/80 group-hover/industry:border-primary/25 dark:border-white/10"
                                      }`}
                                    >
                                      <img
                                        src={industryPhoto.src}
                                        alt=""
                                        className="h-full w-full object-cover transition duration-300 group-hover/industry:scale-105"
                                        loading="lazy"
                                        referrerPolicy="no-referrer"
                                        aria-hidden="true"
                                      />
                                      <span className="absolute inset-0 bg-linear-to-tr from-slate-950/10 via-transparent to-primary/10" aria-hidden="true" />
                                    </span>

                                    <span className="min-w-0 flex-1">
                                      <span className="block truncate text-[13px] font-extrabold leading-4">
                                        {industry.label}
                                      </span>
                                      <span className="mt-1 block truncate text-[11px] leading-4 text-(--text-soft)">
                                        {industry.short}
                                      </span>
                                    </span>

                                    <ChevronRight
                                      className={`h-4 w-4 shrink-0 transition ${
                                        active
                                          ? "translate-x-0 opacity-100"
                                          : "-translate-x-1 opacity-0 group-hover/industry:translate-x-0 group-hover/industry:opacity-100"
                                      }`}
                                      aria-hidden="true"
                                    />
                                  </motion.button>
                                );
                              })}
                            </div>

                            <Link
                              href="/industries"
                              onClick={closeDesktopDropdowns}
                              className="group/all mt-3 flex items-center justify-center gap-2 rounded-2xl border border-primary/20 bg-linear-to-r from-primary/10 to-accent/10 px-4 py-3 text-xs font-extrabold text-primary transition hover:border-primary/30 hover:bg-primary/15 dark:border-cyan-300/20 dark:bg-cyan-300/10 dark:text-cyan-300"
                            >
                              View All Industries
                              <ArrowRight
                                className="h-3.5 w-3.5 transition group-hover/all:translate-x-0.5"
                                aria-hidden="true"
                              />
                            </Link>
                          </aside>

                          <section className="min-w-0 overflow-y-auto p-4">
                            <div className="flex items-start gap-4">
                              <div className="relative h-24 w-36 shrink-0 overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-100 shadow-[0_18px_42px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-white/6">
                                <img
                                  src={getIndustryPhoto(selectedIndustry).src}
                                  alt={getIndustryPhoto(selectedIndustry).alt}
                                  className="h-full w-full object-cover"
                                  loading="lazy"
                                  referrerPolicy="no-referrer"
                                />
                                <div className="absolute inset-0 bg-linear-to-br from-slate-950/10 via-transparent to-primary/20" />
                              </div>

                              <div className="min-w-0 flex-1">
                                <p className="text-[10px] font-extrabold uppercase tracking-[0.36em] text-primary dark:text-cyan-300">
                                  {selectedIndustry.eyebrow} Solutions
                                </p>
                                <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-(--text)">
                                  {selectedIndustry.label} Solutions
                                </h3>
                                <p className="mt-2 max-w-175 text-sm leading-6 text-(--text-soft)">
                                  {selectedIndustry.description}
                                </p>
                              </div>
                            </div>

                            <div className="mt-4 flex flex-wrap items-center gap-2">
                              {selectedIndustry.traits.slice(0, 3).map((trait) => {
                                const TraitIcon = trait.icon;

                                return (
                                  <span
                                    key={trait.label}
                                    className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-slate-50/90 px-3 py-1.5 text-[11px] font-bold text-primary dark:border-white/10 dark:bg-white/4 dark:text-cyan-300"
                                  >
                                    <TraitIcon size={13} aria-hidden="true" />
                                    {trait.label}
                                  </span>
                                );
                              })}
                            </div>

                            <div className="mt-4 grid grid-cols-4 gap-2 rounded-3xl border border-slate-200/80 bg-white/75 p-1.5 shadow-[0_12px_30px_rgba(15,23,42,0.055)] dark:border-white/10 dark:bg-white/3.5">
                              {industryViewTabs.map((tab) => {
                                const active = selectedIndustryView === tab.id;
                                const TabIcon = tab.icon;

                                return (
                                  <motion.button
                                    key={tab.id}
                                    type="button"
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.985 }}
                                    onClick={() => setSelectedIndustryView(tab.id)}
                                    className={`group/tab relative flex items-center justify-center gap-2 overflow-hidden rounded-[18px] px-3 py-2.5 text-left transition duration-200 ease-out ${
                                      active
                                        ? "bg-linear-to-r from-cyan-500 to-violet-600 text-white shadow-[0_12px_26px_rgba(14,165,233,0.22)]"
                                        : "text-slate-600 hover:bg-slate-50 hover:text-primary dark:text-slate-300 dark:hover:bg-white/6"
                                    }`}
                                  >
                                    <span
                                      className={`grid h-7 w-7 shrink-0 place-items-center rounded-xl transition ${
                                        active
                                          ? "bg-white/18 text-white"
                                          : "bg-slate-50 text-primary group-hover/tab:bg-primary/10 dark:bg-white/6"
                                      }`}
                                    >
                                      <TabIcon size={15} aria-hidden="true" />
                                    </span>
                                    <span className="min-w-0">
                                      <span className="block text-xs font-extrabold leading-4">
                                        {tab.label}
                                      </span>
                                      <span className="block text-[10px] font-semibold leading-3 opacity-75">
                                        {tab.helper}
                                      </span>
                                    </span>
                                  </motion.button>
                                );
                              })}
                            </div>

                            <motion.div
                              key={`${selectedIndustry.id}-${selectedIndustryView}`}
                              initial="hidden"
                              animate="visible"
                              variants={gridVariants}
                              className="mt-4 grid grid-cols-2 gap-3"
                            >
                              {visibleIndustrySolutions.map((solution) => {
                                const Icon = solution.icon;
                                const active = isLinkActive(solution.href);

                                return (
                                  <motion.div
                                    key={solution.href}
                                    variants={itemVariants}
                                    whileHover={{ y: -3, scale: 1.01 }}
                                    transition={{ duration: 0.18 }}
                                  >
                                    <Link
                                      href={solution.href}
                                      onClick={closeDesktopDropdowns}
                                      aria-current={active ? "page" : undefined}
                                      className={`group/solution flex min-h-20.5 items-center gap-3 rounded-2xl border bg-white/86 p-3 shadow-[0_10px_26px_rgba(15,23,42,0.055)] transition duration-200 ease-out hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-[0_18px_40px_rgba(15,23,42,0.11)] dark:bg-white/4 ${
                                        active
                                          ? "border-primary/30 ring-1 ring-primary/20"
                                          : "border-slate-200/80 dark:border-white/10"
                                      }`}
                                    >
                                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-slate-50 text-primary shadow-sm transition group-hover/solution:scale-105 dark:bg-white/8">
                                        <Icon className="h-5 w-5" aria-hidden="true" />
                                      </span>

                                      <span className="min-w-0 flex-1">
                                        <span className="flex items-center gap-2">
                                          <span className="truncate text-[13px] font-extrabold text-(--text)">
                                            {solution.label}
                                          </span>
                                          <span
                                            className={`shrink-0 rounded-full px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wide ${solution.tagClass}`}
                                          >
                                            {solution.tag}
                                          </span>
                                        </span>
                                        <span className="mt-1 line-clamp-2 block text-[11px] leading-4 text-(--text-soft)">
                                          {solution.description}
                                        </span>
                                      </span>

                                      <ChevronRight
                                        className="h-4 w-4 shrink-0 text-primary transition group-hover/solution:translate-x-0.5"
                                        aria-hidden="true"
                                      />
                                    </Link>
                                  </motion.div>
                                );
                              })}
                            </motion.div>
                          </section>

                          <aside className="min-w-0 border-l border-slate-200/70 bg-linear-to-b from-slate-50/95 via-white/95 to-cyan-50/35 p-3 dark:border-white/10 dark:from-white/4 dark:via-white/3 dark:to-cyan-400/8">
                            <motion.div
                              key={`${selectedIndustry.id}-${selectedIndustryView}-insight`}
                              initial={{ opacity: 0, x: 12, filter: "blur(8px)" }}
                              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                              transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
                              className="relative flex h-full min-h-0 flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white/96 p-4 shadow-[0_18px_46px_rgba(15,23,42,0.10)] ring-1 ring-white/70 backdrop-blur-xl dark:border-white/10 dark:bg-[#0b1220]/94 dark:ring-white/5"
                            >
                              <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-cyan-400/12 blur-3xl" aria-hidden="true" />
                              <div className="pointer-events-none absolute -bottom-16 left-0 h-36 w-36 rounded-full bg-violet-500/10 blur-3xl" aria-hidden="true" />

                              <div className="relative flex min-h-0 flex-1 flex-col">
                                <div className="flex shrink-0 items-start justify-between gap-3">
                                  <div className="min-w-0">
                                    <p className="text-[10px] font-black uppercase tracking-[0.24em] text-primary dark:text-cyan-300">
                                      Problems We Solve
                                    </p>
                                    <h4 className="mt-1 text-base font-black leading-5 text-(--text)">
                                      {selectedIndustry.label} pain points
                                    </h4>
                                  </div>
                                  <span className="shrink-0 rounded-full bg-cyan-50 px-3 py-1 text-[10px] font-extrabold capitalize text-primary ring-1 ring-cyan-100 dark:bg-cyan-300/10 dark:text-cyan-300 dark:ring-cyan-300/15">
                                    {selectedIndustryView}
                                  </span>
                                </div>

                                <div className="mt-4 space-y-2.5">
                                  {selectedIndustryInsight.points.slice(0, 3).map((point, index) => {
                                    const PointIcon = point.icon;

                                    return (
                                      <motion.div
                                        key={point.label}
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.2, delay: index * 0.04 }}
                                        whileHover={{ x: 3 }}
                                        className="group/problem flex items-center gap-3 rounded-2xl border border-slate-200/75 bg-white/88 px-3 py-3 transition hover:border-primary/25 hover:bg-white hover:shadow-[0_10px_24px_rgba(15,23,42,0.07)] dark:border-white/10 dark:bg-white/4 dark:hover:bg-white/6"
                                      >
                                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-2xl bg-cyan-50 text-primary shadow-sm ring-1 ring-cyan-100 transition group-hover/problem:scale-105 dark:bg-cyan-300/10 dark:text-cyan-300 dark:ring-cyan-300/15">
                                          <PointIcon size={15} aria-hidden="true" />
                                        </span>
                                        <div className="min-w-0 flex-1">
                                          <p className="flex items-center gap-2 text-[12px] font-black leading-4 text-(--text)">
                                            <span className="text-[9px] font-black text-primary dark:text-cyan-300">
                                              0{index + 1}
                                            </span>
                                            <span className="truncate">{point.label}</span>
                                          </p>
                                          <p className="mt-1 line-clamp-1 text-[10.5px] leading-4 text-(--text-soft)">
                                            {point.description}
                                          </p>
                                        </div>
                                      </motion.div>
                                    );
                                  })}
                                </div>

                                <div className="mt-4 shrink-0 rounded-2xl border border-cyan-200/70 bg-linear-to-br from-cyan-50 via-white to-violet-50 px-4 py-3 dark:border-cyan-300/15 dark:from-cyan-300/10 dark:via-white/4 dark:to-violet-400/10">
                                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-primary dark:text-cyan-300">
                                    HNX Solves It
                                  </p>
                                  <p className="mt-1.5 text-[12px] font-semibold leading-5 text-(--text)">
                                    One connected system for leads, customers, workflows, automation, and reports.
                                  </p>
                                </div>

                                <Link
                                  href={selectedIndustry.href}
                                  onClick={closeDesktopDropdowns}
                                  className="group/cta mt-4 inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-cyan-500 to-violet-600 px-4 py-3 text-[12px] font-extrabold text-white shadow-lg shadow-primary/20 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30"
                                >
                                  Build {selectedIndustry.label} System
                                  <ArrowRight
                                    size={15}
                                    className="transition group-hover/cta:translate-x-1"
                                    aria-hidden="true"
                                  />
                                </Link>
                              </div>
                            </motion.div>
                          </aside>
                        </div>
                      </motion.div>
                    </div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/workflow-lab"
                className={desktopNavClass(isLinkActive("/workflow-lab"))}
                aria-current={isLinkActive("/workflow-lab") ? "page" : undefined}
              >
                Workflow Lab
              </Link>
            </div>

            <div className="hidden shrink-0 items-center gap-3 xl:flex">
              {mounted && (
                <button
                  onClick={() => setTheme(isDark ? "light" : "dark")}
                  aria-label="Toggle theme"
                  className="relative inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-(--border) bg-white/60 text-(--text-muted) backdrop-blur-sm transition-all duration-300 hover:border-cyan-300/40 hover:bg-white/80 dark:bg-white/5 dark:hover:bg-white/10"
                >
                  <span className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle,rgba(56,189,248,0.12),transparent_60%)] opacity-0 transition-opacity duration-300 hover:opacity-100" />
                  {isDark ? (
                    <HiSun className="relative z-10 text-[18px] text-yellow-300" />
                  ) : (
                    <HiMoon className="relative z-10 text-[18px] text-cyan-300" />
                  )}
                </button>
              )}

              <Link
                href="/contact"
                className="group inline-flex h-11 items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-cyan-500 to-violet-600 px-5 text-sm font-bold text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30"
              >
                Book a Consultation
                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>

            <div className="flex items-center gap-2 xl:hidden">
              {mounted && (
                <button
                  onClick={() => setTheme(isDark ? "light" : "dark")}
                  aria-label="Toggle theme"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-(--border) bg-white/5 text-(--text-muted) transition-all duration-300 hover:border-cyan-300/40 hover:bg-white/10"
                >
                  {isDark ? (
                    <HiSun className="text-xl text-yellow-300" />
                  ) : (
                    <HiMoon className="text-xl text-cyan-300" />
                  )}
                </button>
              )}

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 text-(--text-muted) transition-colors hover:text-primary"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close mobile menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMobileMenu}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[1px] dark:bg-black/35 xl:hidden"
            />

            <motion.div
              ref={mobileMenuRef}
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{
                duration: 0.28,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative z-50 mx-auto mt-3 max-w-[min(96vw,1600px)] overflow-hidden rounded-3xl border border-(--border) bg-(--surface) backdrop-blur-xl xl:hidden"
            >
              <div className="max-h-[78vh] space-y-1 overflow-y-auto px-6 py-6">
                <Link
                  href="/"
                  onClick={closeMobileMenu}
                  className={`block rounded-lg px-4 py-3 transition-colors ${
                    isLinkActive("/")
                      ? "bg-white/5 text-primary"
                      : "text-(--text-muted) hover:bg-white/5 hover:text-primary"
                  }`}
                >
                  Home
                </Link>

                <div ref={mobileServicesRef} className="relative">
                  <button
                    onClick={() => {
                      setMobileServicesOpen(!mobileServicesOpen);
                      setMobileSolutionsOpen(false);
                      setMobileIndustriesOpen(false);
                    }}
                    aria-expanded={mobileServicesOpen ? "true" : "false"}
                    className={`flex w-full items-center justify-between rounded-lg px-4 py-3 transition-colors ${
                      isServicesActive || mobileServicesOpen
                        ? "bg-white/5 text-primary"
                        : "text-(--text-muted) hover:bg-white/5 hover:text-primary"
                    }`}
                  >
                    <span>Services</span>
                    <HiChevronDown
                      className={`transition-transform duration-300 ${
                        mobileServicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.98 }}
                        transition={{
                          duration: 0.22,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="relative z-20 mt-2 overflow-hidden"
                      >
                        <div className="mx-auto w-full overflow-hidden rounded-2xl border border-(--border) bg-(--surface-2) shadow-[0_18px_40px_rgba(15,23,42,0.14)] backdrop-blur-xl">
                          <div className="border-b border-(--border) p-3">
                            <Link
                              href="/crm-systems"
                              onClick={closeMobileMenu}
                              className="block rounded-2xl border border-primary/20 bg-primary/10 p-4"
                            >
                              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                                Featured Service
                              </span>
                              <span className="mt-2 block text-base font-bold text-(--text)">
                                HNX CRM Systems
                              </span>
                              <span className="mt-1 block text-xs leading-5 text-(--text-soft)">
                                Owned CRM systems with workflow automation, AI
                                insights, and industry modules.
                              </span>
                              <span className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-primary">
                                Explore CRM Systems
                                <ArrowRight size={14} aria-hidden="true" />
                              </span>
                            </Link>
                          </div>

                          <div className="max-h-[42vh] overflow-y-auto p-2">
                            {serviceColumns.flatMap((column) =>
                              column.items.map((service) => {
                                const Icon = service.icon;
                                const active = isLinkActive(service.href);

                                return (
                                  <Link
                                    key={service.href}
                                    href={service.href}
                                    onClick={closeMobileMenu}
                                    className={`mt-1 flex items-center gap-3 rounded-xl px-3 py-3 text-sm transition-all first:mt-0 ${
                                      active
                                        ? "bg-white/6 text-primary"
                                        : "text-(--text-muted) hover:bg-white/5 hover:text-primary"
                                    }`}
                                  >
                                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-xl border border-(--border) bg-white/5 text-primary">
                                      <Icon
                                        className="h-4 w-4"
                                        aria-hidden="true"
                                      />
                                    </span>
                                    <span>
                                      <span className="block font-bold text-(--text)">
                                        {service.label}
                                      </span>
                                      <span className="mt-0.5 block text-xs leading-5 text-(--text-soft)">
                                        {service.description}
                                      </span>
                                    </span>
                                  </Link>
                                );
                              })
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="relative">
                  <button
                    onClick={() => {
                      setMobileSolutionsOpen(!mobileSolutionsOpen);
                      setMobileServicesOpen(false);
                      setMobileIndustriesOpen(false);
                    }}
                    aria-expanded={mobileSolutionsOpen ? "true" : "false"}
                    className={`flex w-full items-center justify-between rounded-lg px-4 py-3 transition-colors ${
                      isSolutionsActive || mobileSolutionsOpen
                        ? "bg-white/5 text-primary"
                        : "text-(--text-muted) hover:bg-white/5 hover:text-primary"
                    }`}
                  >
                    <span>Solutions</span>
                    <HiChevronDown
                      className={`transition-transform duration-300 ${
                        mobileSolutionsOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {mobileSolutionsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.98 }}
                        transition={{
                          duration: 0.22,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="mt-2 overflow-hidden rounded-2xl border border-(--border) bg-(--surface-2) p-2 shadow-[0_18px_40px_rgba(15,23,42,0.14)]"
                      >
                        {solutionLinks.map(renderMobileDropdownItem)}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  href="/demo-crm"
                  onClick={closeMobileMenu}
                  className={`block rounded-lg px-4 py-3 transition-colors ${
                    isLinkActive("/demo-crm")
                      ? "bg-white/5 text-primary"
                      : "text-(--text-muted) hover:bg-white/5 hover:text-primary"
                  }`}
                >
                  Demo CRM
                </Link>

                <Link
                  href="/roi-calculator"
                  onClick={closeMobileMenu}
                  className={`block rounded-lg px-4 py-3 transition-colors ${
                    isLinkActive("/roi-calculator")
                      ? "bg-white/5 text-primary"
                      : "text-(--text-muted) hover:bg-white/5 hover:text-primary"
                  }`}
                >
                  ROI Calculator
                </Link>

                <div className="relative">
                  <button
                    onClick={() => {
                      setMobileIndustriesOpen(!mobileIndustriesOpen);
                      setMobileServicesOpen(false);
                      setMobileSolutionsOpen(false);
                    }}
                    aria-expanded={mobileIndustriesOpen ? "true" : "false"}
                    className={`flex w-full items-center justify-between rounded-lg px-4 py-3 transition-colors ${
                      isIndustriesActive || mobileIndustriesOpen
                        ? "bg-white/5 text-primary"
                        : "text-(--text-muted) hover:bg-white/5 hover:text-primary"
                    }`}
                  >
                    <span>Industries</span>
                    <HiChevronDown
                      className={`transition-transform duration-300 ${
                        mobileIndustriesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {mobileIndustriesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.98 }}
                        transition={{
                          duration: 0.22,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="mt-2 overflow-hidden rounded-2xl border border-(--border) bg-(--surface-2) shadow-[0_18px_40px_rgba(15,23,42,0.14)]"
                      >
                        <div className="border-b border-(--border) p-3">
                          <Link
                            href="/industries"
                            onClick={closeMobileMenu}
                            className={`block rounded-2xl border border-primary/20 bg-primary/10 p-4 transition ${
                              pathname === "/industries"
                                ? "text-primary"
                                : "hover:bg-primary/15"
                            }`}
                          >
                            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                              Industry Solutions
                            </span>
                            <span className="mt-2 block text-base font-bold text-(--text)">
                              Explore All Industries
                            </span>
                            <span className="mt-1 block text-xs leading-5 text-(--text-soft)">
                              Choose an industry and open CRM, website, app,
                              portal, automation, dashboard, and marketing
                              solutions tailored to that business.
                            </span>
                            <span className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-primary">
                              View All Industries
                              <ArrowRight size={14} aria-hidden="true" />
                            </span>
                          </Link>
                        </div>

                        <div className="max-h-[48vh] space-y-3 overflow-y-auto p-3">
                          {industryMenus.map((industry) => {
                            const Icon = industry.icon;

                            return (
                              <div
                                key={industry.id}
                                className="rounded-2xl border border-(--border) bg-white/5 p-3"
                              >
                                <Link
                                  href={industry.href}
                                  onClick={closeMobileMenu}
                                  className="flex items-start gap-3"
                                >
                                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-(--border) bg-white/5 text-primary">
                                    <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                                  </span>
                                  <span className="min-w-0 flex-1">
                                    <span className="block font-bold text-(--text)">
                                      {industry.label}
                                    </span>
                                    <span className="mt-0.5 block text-xs leading-5 text-(--text-soft)">
                                      {industry.description}
                                    </span>
                                  </span>
                                </Link>

                                <div className="mt-2 grid grid-cols-2 gap-1">
                                  {industry.solutions.slice(0, 6).map((solution) => (
                                    <Link
                                      key={solution.href}
                                      href={solution.href}
                                      onClick={closeMobileMenu}
                                      className="rounded-xl border border-(--border) px-3 py-2 text-xs font-semibold text-(--text-muted) transition hover:border-primary/25 hover:bg-primary/10 hover:text-primary"
                                    >
                                      {solution.label}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  href="/workflow-lab"
                  onClick={closeMobileMenu}
                  className={`block rounded-lg px-4 py-3 transition-colors ${
                    isLinkActive("/workflow-lab")
                      ? "bg-white/5 text-primary"
                      : "text-(--text-muted) hover:bg-white/5 hover:text-primary"
                  }`}
                >
                  Workflow Lab
                </Link>

                <div className="pt-3">
                  <Link
                    href="/contact"
                    onClick={closeMobileMenu}
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-cyan-500 to-violet-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30"
                  >
                    Book a Consultation
                    <ArrowRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
