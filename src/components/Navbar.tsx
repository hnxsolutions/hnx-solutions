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

type DesktopDropdown = "services" | "solutions" | "industries" | "showcase";

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

const showcaseLinks: DropdownLink[] = [
  {
    label: "CRM Demo",
    description: "Explore leads, tickets, workflows, reports, and team dashboards.",
    href: "/demo-crm",
    icon: LayoutDashboard,
  },
  {
    label: "ROI Calculator",
    description: "Estimate time saved, cost reduction, and automation value.",
    href: "/roi-calculator",
    icon: BarChart3,
  },
  {
    label: "Workflow Lab",
    description: "Browse ready-to-use automation flows for business operations.",
    href: "/workflow-lab",
    icon: Workflow,
  },
];

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


type IndustryPreviewPhoto = {
  src: string;
  alt: string;
  credit: string;
};

const solutionPreviewPhotosByTag: Record<string, IndustryPreviewPhoto> = {
  Website: {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    alt: "Modern website interface and analytics dashboard preview",
    credit: "Website preview",
  },
  App: {
    src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80",
    alt: "Mobile app screens and smartphone interface preview",
    credit: "Mobile app preview",
  },
  CRM: {
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    alt: "CRM dashboard with charts and business analytics preview",
    credit: "CRM preview",
  },
  Portal: {
    src: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80",
    alt: "Client portal and team workflow interface preview",
    credit: "Portal preview",
  },
};

const solutionPreviewPhotosByIndustry: Record<
  string,
  Partial<Record<string, IndustryPreviewPhoto>>
> = {
  healthcare: {
    Website: {
      src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80",
      alt: "Healthcare website preview with doctor patient care and clinic trust visuals",
      credit: "Healthcare website",
    },
    App: {
      src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80",
      alt: "Healthcare mobile app preview for appointments reminders and patient updates",
      credit: "Healthcare app",
    },
    CRM: {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
      alt: "Healthcare CRM preview for patient leads appointments and reporting dashboards",
      credit: "Healthcare CRM",
    },
    Portal: {
      src: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=900&q=80",
      alt: "Patient portal preview for records reports prescriptions and secure access",
      credit: "Patient portal",
    },
  },
  "real-estate": {
    Website: {
      src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80",
      alt: "Real estate website preview with property listing and premium home visuals",
      credit: "Real estate website",
    },
    App: {
      src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=900&q=80",
      alt: "Real estate mobile app preview for property search and site visit booking",
      credit: "Property app",
    },
    CRM: {
      src: "https://images.unsplash.com/photo-1554224154-26032fced8bd?auto=format&fit=crop&w=900&q=80",
      alt: "Real estate CRM preview for leads brokers site visits and sales pipeline",
      credit: "Real estate CRM",
    },
    Portal: {
      src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
      alt: "Real estate client portal preview for documents bookings and property status",
      credit: "Property portal",
    },
  },
  education: {
    Website: {
      src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80",
      alt: "Education website preview for schools colleges courses and admissions",
      credit: "Education website",
    },
    App: {
      src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80",
      alt: "Education mobile app preview for students classes notices and assignments",
      credit: "Education app",
    },
    CRM: {
      src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
      alt: "Education CRM preview for admissions inquiries counselors and student journeys",
      credit: "Admissions CRM",
    },
    Portal: {
      src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
      alt: "Student portal preview for reports resources schedules and learning access",
      credit: "Student portal",
    },
  },
  manufacturing: {
    Website: {
      src: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=900&q=80",
      alt: "Manufacturing website preview for factory credibility catalog and B2B inquiries",
      credit: "Manufacturing website",
    },
    App: {
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80",
      alt: "Manufacturing mobile app preview for approvals inventory and team coordination",
      credit: "Factory app",
    },
    CRM: {
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
      alt: "Manufacturing CRM preview for RFQs dealers quotations orders and dispatches",
      credit: "Manufacturing CRM",
    },
    Portal: {
      src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=900&q=80",
      alt: "Vendor portal preview for procurement purchase requests and production updates",
      credit: "Vendor portal",
    },
  },
  retail: {
    Website: {
      src: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=80",
      alt: "Retail ecommerce website preview for catalog checkout offers and conversion",
      credit: "Retail website",
    },
    App: {
      src: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80",
      alt: "Retail mobile app preview for shopping orders loyalty and push notifications",
      credit: "Retail app",
    },
    CRM: {
      src: "https://images.unsplash.com/photo-1556742393-d75f468bfcb0?auto=format&fit=crop&w=900&q=80",
      alt: "Retail CRM preview for customers loyalty campaigns and repeat sales",
      credit: "Retail CRM",
    },
    Portal: {
      src: "https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&w=900&q=80",
      alt: "Retail customer portal preview for orders returns service requests and accounts",
      credit: "Customer portal",
    },
  },
  finance: {
    Website: {
      src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80",
      alt: "Finance website preview for trust compliance financial services and lead capture",
      credit: "Finance website",
    },
    App: {
      src: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=900&q=80",
      alt: "Finance mobile app preview for secure banking payments and customer access",
      credit: "Finance app",
    },
    CRM: {
      src: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=900&q=80",
      alt: "Finance CRM preview for leads approvals advisors and revenue reporting",
      credit: "Finance CRM",
    },
    Portal: {
      src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
      alt: "Finance client portal preview for statements onboarding documents and approvals",
      credit: "Finance portal",
    },
  },
  insurance: {
    Website: {
      src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80",
      alt: "Insurance website preview for policies claims renewal and inquiry flows",
      credit: "Insurance website",
    },
    App: {
      src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
      alt: "Insurance mobile app preview for policyholders claims and renewal reminders",
      credit: "Insurance app",
    },
    CRM: {
      src: "https://images.unsplash.com/photo-1554224154-26032fced8bd?auto=format&fit=crop&w=900&q=80",
      alt: "Insurance CRM preview for agents policies renewals claims and follow ups",
      credit: "Insurance CRM",
    },
    Portal: {
      src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80",
      alt: "Policyholder portal preview for claims documents renewals and service requests",
      credit: "Policyholder portal",
    },
  },
  travel: {
    Website: {
      src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
      alt: "Travel website preview for destinations packages bookings and inquiries",
      credit: "Travel website",
    },
    App: {
      src: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=900&q=80",
      alt: "Travel mobile app preview for bookings itineraries vouchers and alerts",
      credit: "Travel app",
    },
    CRM: {
      src: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&w=900&q=80",
      alt: "Travel CRM preview for packages leads bookings destinations and revenue tracking",
      credit: "Travel CRM",
    },
    Portal: {
      src: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=80",
      alt: "Traveler portal preview for vouchers documents itinerary and support updates",
      credit: "Traveler portal",
    },
  },
  automobile: {
    Website: {
      src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80",
      alt: "Automobile dealership website preview for inventory offers and service booking",
      credit: "Automobile website",
    },
    App: {
      src: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=900&q=80",
      alt: "Automobile mobile app preview for vehicle service booking offers and alerts",
      credit: "Automobile app",
    },
    CRM: {
      src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
      alt: "Automotive CRM preview for dealership leads test drives service and sales analytics",
      credit: "Automotive CRM",
    },
    Portal: {
      src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80",
      alt: "Automobile customer portal preview for service history documents and updates",
      credit: "Auto portal",
    },
  },
  "service-business": {
    Website: {
      src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80",
      alt: "Service business website preview for offers trust inquiry and lead capture",
      credit: "Service website",
    },
    App: {
      src: "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=900&q=80",
      alt: "Field service mobile app preview for jobs checklists schedules and updates",
      credit: "Service app",
    },
    CRM: {
      src: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=900&q=80",
      alt: "Service CRM preview for clients jobs quotes tickets and team performance",
      credit: "Service CRM",
    },
    Portal: {
      src: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80",
      alt: "Client portal preview for projects invoices files updates and communication",
      credit: "Client portal",
    },
  },
};

function getSolutionPreviewPhoto(solution: IndustrySolution, industryId: string) {
  return (
    solutionPreviewPhotosByIndustry[industryId]?.[solution.tag] ??
    solutionPreviewPhotosByTag[solution.tag] ??
    solutionPreviewPhotosByTag.Website
  );
}

const tagStyles = {
  crm: "bg-blue-50 text-blue-700 dark:bg-blue-400/10 dark:text-blue-300",
  website: "bg-emerald-50 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300",
  app: "bg-violet-50 text-violet-700 dark:bg-violet-400/10 dark:text-violet-300",
  portal: "bg-orange-50 text-orange-700 dark:bg-orange-400/10 dark:text-orange-300",
  automation: "bg-amber-50 text-amber-700 dark:bg-amber-400/10 dark:text-amber-300",
  dashboard: "bg-sky-50 text-sky-700 dark:bg-sky-400/10 dark:text-sky-300",
  suite: "bg-indigo-50 text-indigo-700 dark:bg-indigo-400/10 dark:text-indigo-300",
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
        label: "Website",
        description: "Modern healthcare websites that build trust and convert visitors into patients.",
        href: "/industries/healthcare/website",
        icon: Code2,
        tag: "Website",
        tagClass: tagStyles.website,
      },
      {
        label: "Mobile App",
        description: "Patient apps for booking, reminders, records, teleconsultation, and updates.",
        href: "/industries/healthcare/mobile-app",
        icon: Smartphone,
        tag: "App",
        tagClass: tagStyles.app,
      },
      {
        label: "Healthcare CRM",
        description: "Manage patient leads, appointments, follow-ups, and care workflows in one place.",
        href: "/industries/healthcare/crm",
        icon: Network,
        tag: "CRM",
        tagClass: tagStyles.crm,
      },
      {
        label: "Patient Portal",
        description: "Secure portals for patients to access records, reports, prescriptions, and appointments.",
        href: "/industries/healthcare/patient-portal",
        icon: Network,
        tag: "Portal",
        tagClass: tagStyles.portal,
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
  const [mobileShowcaseOpen, setMobileShowcaseOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [desktopSolutionsOpen, setDesktopSolutionsOpen] = useState(false);
  const [desktopIndustriesOpen, setDesktopIndustriesOpen] = useState(false);
  const [desktopShowcaseOpen, setDesktopShowcaseOpen] = useState(false);
  const [selectedIndustryId, setSelectedIndustryId] = useState("healthcare");
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
    setDesktopShowcaseOpen(false);
  }

  function scheduleDesktopDropdownClose() {
    clearDesktopCloseTimer();
    closeTimerRef.current = setTimeout(() => {
      setDesktopServicesOpen(false);
      setDesktopSolutionsOpen(false);
      setDesktopIndustriesOpen(false);
      setDesktopShowcaseOpen(false);
    }, 140);
  }

  function openDesktopDropdown(type: DesktopDropdown) {
    clearDesktopCloseTimer();
    setDesktopServicesOpen(type === "services");
    setDesktopSolutionsOpen(type === "solutions");
    setDesktopIndustriesOpen(type === "industries");
    setDesktopShowcaseOpen(type === "showcase");
  }

  function closeMobileMenu() {
    setMobileOpen(false);
    setMobileServicesOpen(false);
    setMobileSolutionsOpen(false);
    setMobileIndustriesOpen(false);
    setMobileShowcaseOpen(false);
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
        setDesktopShowcaseOpen(false);
      }
    };

    if (
      desktopServicesOpen ||
      desktopSolutionsOpen ||
      desktopIndustriesOpen ||
      desktopShowcaseOpen
    ) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [
    desktopServicesOpen,
    desktopSolutionsOpen,
    desktopIndustriesOpen,
    desktopShowcaseOpen,
  ]);

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

  const isLinkActive = (href: string) =>
    href === "/"
      ? pathname === href
      : pathname === href || pathname.startsWith(`${href}/`);

  const isServicesActive =
    pathname === "/services" || pathname.startsWith("/services/");
  const isSolutionsActive = pathname.startsWith("/solutions/");
  const isIndustriesActive =
    pathname === "/industries" || pathname.startsWith("/industries/");
  const isShowcaseActive =
    pathname === "/demo-crm" ||
    pathname.startsWith("/demo-crm/") ||
    pathname === "/roi-calculator" ||
    pathname.startsWith("/roi-calculator/") ||
    pathname === "/workflow-lab" ||
    pathname.startsWith("/workflow-lab/");
  const isDesktopDropdownOpen =
    desktopServicesOpen ||
    desktopSolutionsOpen ||
    desktopIndustriesOpen ||
    desktopShowcaseOpen;
  const selectedIndustry =
    industryMenus.find((industry) => industry.id === selectedIndustryId) ??
    industryMenus[0];
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
                {/* <span className="hidden text-sm font-medium tracking-tight text-(--text-soft) sm:block">
                  IT Services & Digital Solutions
                </span> */}
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
                  aria-expanded={desktopServicesOpen}
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
                            <div className="mb-2">
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

                                  <div className="space-y-2">
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
                  aria-expanded={desktopSolutionsOpen}
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

              <div
                data-desktop-dropdown
                className="relative"
                onMouseEnter={() => openDesktopDropdown("showcase")}
                onMouseLeave={scheduleDesktopDropdownClose}
                onFocus={() => openDesktopDropdown("showcase")}
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
                  className={desktopDropdownNavClass(
                    isShowcaseActive,
                    desktopShowcaseOpen
                  )}
                  aria-haspopup="menu"
                  aria-expanded={desktopShowcaseOpen}
                >
                  Explore
                  <HiChevronDown
                    className={`text-base transition-transform duration-200 ${
                      desktopShowcaseOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <DropdownAnchor open={desktopShowcaseOpen} />
                <div className="absolute left-1/2 top-full h-5 w-44 -translate-x-1/2" />

                <AnimatePresence>
                  {desktopShowcaseOpen && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="absolute left-1/2 top-[calc(100%+18px)] z-60 w-[min(88vw,330px)] -translate-x-1/2 overflow-hidden rounded-2xl border border-slate-200/80 bg-white/96 p-2 shadow-[0_22px_60px_rgba(15,23,42,0.14)] backdrop-blur-2xl dark:border-white/10 dark:bg-[#0b1220]/96"
                      onMouseEnter={clearDesktopCloseTimer}
                      onMouseLeave={scheduleDesktopDropdownClose}
                    >
                      <div className="pointer-events-none absolute inset-x-4 top-0 h-px bg-linear-to-r from-transparent via-primary/70 to-transparent" />
                      <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-400/15 blur-2xl" />
                      <div className="pointer-events-none absolute -left-10 bottom-0 h-28 w-28 rounded-full bg-violet-500/15 blur-2xl" />

                      <div className="relative px-3 pb-2 pt-3">
                        <p className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-primary dark:text-cyan-300">
                          Explore HNX
                        </p>
                        <h3 className="mt-1 text-base font-extrabold tracking-tight text-(--text)">
                          Try tools before you book
                        </h3>
                        <p className="mt-1 text-[11px] leading-4 text-(--text-soft)">
                          Preview CRM, savings, and automation workflows.
                        </p>
                      </div>

                      <motion.div
                        variants={gridVariants}
                        initial="hidden"
                        animate="visible"
                        className="relative space-y-1"
                      >
                        {showcaseLinks.map((item) => {
                          const Icon = item.icon;
                          const active = isLinkActive(item.href);

                          return (
                            <motion.div
                              key={item.href}
                              variants={itemVariants}
                              whileHover={{ x: 3 }}
                              whileTap={{ scale: 0.985 }}
                            >
                              <Link
                                href={item.href}
                                onClick={closeDesktopDropdowns}
                                aria-current={active ? "page" : undefined}
                                className={`group flex items-center justify-between gap-3 rounded-xl px-3.5 py-3 text-sm font-bold transition-all duration-200 ${
                                  active
                                    ? "bg-primary/10 text-primary"
                                    : "text-(--text) hover:bg-slate-50 hover:text-primary dark:hover:bg-white/6"
                                }`}
                              >
                                <span className="flex min-w-0 items-center gap-3">
                                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-slate-50 text-primary shadow-sm ring-1 ring-slate-200/80 transition duration-300 group-hover:scale-105 group-hover:bg-primary/8 dark:bg-white/8 dark:ring-white/10 dark:text-cyan-300">
                                    <Icon className="h-4 w-4" aria-hidden="true" />
                                  </span>
                                  <span className="relative min-w-0">
                                    <span className="block truncate font-extrabold">
                                      {item.label}
                                    </span>
                                    <span
                                      className={`mt-1 block h-[1.5px] rounded-full bg-linear-to-r from-cyan-400 to-violet-500 transition-all duration-300 ease-out ${
                                        active ? "w-full" : "w-0 group-hover:w-full"
                                      }`}
                                    />
                                  </span>
                                </span>

                                <ChevronRight
                                  size={15}
                                  className="text-(--text-soft) transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-primary"
                                  aria-hidden="true"
                                />
                              </Link>
                            </motion.div>
                          );
                        })}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

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
                  aria-expanded={desktopIndustriesOpen}
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
                      className="fixed left-1/2 top-[4.35rem] z-60 w-[min(92vw,1000px)] -translate-x-1/2"
                      onMouseEnter={clearDesktopCloseTimer}
                      onMouseLeave={scheduleDesktopDropdownClose}
                    >
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={dropdownVariants}
                        style={{ transformOrigin: "top center" }}
                        className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/97 shadow-[0_24px_70px_rgba(15,23,42,0.16)] ring-1 ring-white/70 backdrop-blur-2xl dark:border-white/10 dark:bg-[#0b1220]/96 dark:ring-white/5 dark:shadow-[0_28px_90px_rgba(0,0,0,0.62)]"
                        aria-label="Industries"
                      >
                        <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-linear-to-r from-transparent via-primary/70 to-transparent" />
                        <div className="pointer-events-none absolute -left-20 -top-16 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />
                        <div className="pointer-events-none absolute -right-20 bottom-0 h-56 w-56 rounded-full bg-violet-500/10 blur-3xl" />

                        <div className="relative grid grid-cols-[300px_minmax(0,1fr)] overflow-hidden">
                          <aside className="border-r border-slate-200/75 bg-slate-50/75 p-4 dark:border-white/10 dark:bg-white/3">
                            <div className="mb-3">
                              <p className="text-[11px] font-extrabold uppercase tracking-[0.32em] text-primary dark:text-cyan-300">
                                Browse Industries
                              </p>
                              <p className="mt-1 text-[11px] leading-4 text-(--text-soft)">
                                Select an industry.
                              </p>
                            </div>

                            <div className="space-y-0.5 pr-0">
                              {industryMenus.map((industry) => {
                                const active = selectedIndustry.id === industry.id;
                                const Icon = industry.icon;

                                return (
                                  <motion.button
                                    key={industry.id}
                                    type="button"
                                    whileHover={{ x: 3 }}
                                    whileTap={{ scale: 0.985 }}
                                    onClick={() => {
                                      setSelectedIndustryId(industry.id);
                                    }}
                                    className={`group/industry flex w-full items-center gap-2 rounded-lg px-6 py-1.5 text-left transition duration-200 ease-out ${
                                      active
                                        ? "bg-primary/8 text-primary shadow-sm ring-1 ring-primary/10 dark:bg-cyan-300/10 dark:text-cyan-300 dark:ring-cyan-300/15"
                                        : "text-(--text) hover:bg-white/80 hover:text-primary hover:shadow-sm dark:hover:bg-white/6"
                                    }`}
                                  >
                                    <span
                                      className={`grid h-7 w-10 shrink-0 place-items-center rounded-lg transition ${
                                        active
                                          ? "bg-white text-primary shadow-sm ring-1 ring-primary/15 dark:bg-white/8 dark:text-cyan-300"
                                          : "bg-transparent text-(--text-soft) group-hover/industry:bg-white group-hover/industry:text-primary dark:group-hover/industry:bg-white/8"
                                      }`}
                                    >
                                      <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                                    </span>

                                    <span className="min-w-0 flex-1">
                                      <span className="block truncate text-[11px] font-extrabold leading-4">
                                        {industry.label}
                                      </span>
                                    </span>

                                    <ChevronRight
                                      className={`h-3.5 w-3.5 shrink-0 transition ${
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
                              className="group/all mt-2 flex items-center justify-center gap-2 border-t border-slate-200/80 pt-2 text-[11px] font-extrabold text-primary transition hover:text-accent dark:border-white/10 dark:text-cyan-300"
                            >
                              View All Industries
                              <ArrowRight
                                className="h-3.5 w-3.5 transition group-hover/all:translate-x-0.5"
                                aria-hidden="true"
                              />
                            </Link>
                          </aside>

                          <section className="min-w-0 p-7">
                            <div className="mb-3 flex items-start justify-between gap-4">
                              <div className="min-w-0 flex-1">
                                <p className="text-[10px] font-extrabold uppercase tracking-[0.34em] text-primary dark:text-cyan-300">
                                  {selectedIndustry.eyebrow} Solutions
                                </p>
                                <h3 className="mt-1 text-lg font-extrabold tracking-tight text-(--text)">
                                  {selectedIndustry.label} Solutions
                                </h3>
                                <p className="mt-1 max-w-[500px] text-[12px] leading-5 text-(--text-soft)">
                                  {selectedIndustry.description}
                                </p>
                              </div>

                              <div className="hidden shrink-0 items-center gap-3 md:flex">
                                <span
                                  title={getIndustryPhoto(selectedIndustry).credit}
                                  className="relative h-16 w-32 overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 shadow-sm dark:border-white/10 dark:bg-white/5"
                                >
                                  <span
                                    className="absolute inset-0 bg-cover bg-center transition duration-300"
                                    style={{ backgroundImage: `url(${getIndustryPhoto(selectedIndustry).src})` }}
                                    aria-hidden="true"
                                  />
                                  <span className="absolute inset-0 bg-linear-to-r from-white/25 via-transparent to-[#eef8ff]/65 dark:to-[#0b1220]/60" aria-hidden="true" />
                                </span>

                                <Link
                                  href={selectedIndustry.href}
                                  onClick={closeDesktopDropdowns}
                                  className="group/page inline-flex shrink-0 items-center gap-2 rounded-xl border border-slate-200/80 bg-white/80 px-3.5 py-2 text-[11px] font-extrabold text-primary shadow-sm transition hover:border-primary/30 hover:bg-primary/8 dark:border-white/10 dark:bg-white/5 dark:text-cyan-300"
                                >
                                  View Industry Page
                                  <ArrowRight
                                    className="h-3.5 w-3.5 transition group-hover/page:translate-x-0.5"
                                    aria-hidden="true"
                                  />
                                </Link>
                              </div>
                            </div>

                            <motion.div
                              key={selectedIndustry.id}
                              initial="hidden"
                              animate="visible"
                              variants={gridVariants}
                              className="space-y-2"
                            >
                              {selectedIndustry.solutions
                                .filter((solution) =>
                                  ["Website", "App", "CRM", "Portal"].includes(solution.tag)
                                )
                                .sort(
                                  (a, b) =>
                                    ["Website", "App", "CRM", "Portal"].indexOf(a.tag) -
                                    ["Website", "App", "CRM", "Portal"].indexOf(b.tag)
                                )
                                .slice(0, 4)
                                .map((solution) => {
                                  const Icon = solution.icon;
                                  const active = isLinkActive(solution.href);
                                  const previewPhoto = getSolutionPreviewPhoto(solution, selectedIndustry.id);

                                  return (
                                    <motion.div
                                      key={solution.href}
                                      variants={itemVariants}
                                      whileHover={{ y: -2, scale: 1.006 }}
                                      transition={{ duration: 0.18 }}
                                    >
                                      <Link
                                        href={solution.href}
                                        onClick={closeDesktopDropdowns}
                                        aria-current={active ? "page" : undefined}
                                        className={`group/solution grid min-h-[78px] grid-cols-[150px_42px_minmax(0,1fr)_18px] items-center gap-3 rounded-2xl border bg-white/88 p-2.5 shadow-[0_8px_22px_rgba(15,23,42,0.05)] transition duration-200 ease-out hover:border-primary/25 hover:bg-white hover:shadow-[0_14px_32px_rgba(15,23,42,0.10)] dark:bg-white/4 ${
                                          active
                                            ? "border-primary/30 ring-1 ring-primary/20"
                                            : "border-slate-200/80 dark:border-white/10"
                                        }`}
                                      >
                                        <span
                                          title={previewPhoto.credit}
                                          className="relative hidden h-15 overflow-hidden rounded-xl border border-slate-200/80 bg-slate-100 shadow-sm dark:border-white/10 dark:bg-white/5 sm:block"
                                        >
                                          <span
                                            className="absolute inset-0 bg-cover bg-center opacity-85 transition duration-300 group-hover/solution:scale-105 group-hover/solution:opacity-100"
                                            style={{ backgroundImage: `url(${previewPhoto.src})` }}
                                            aria-hidden="true"
                                          />
                                          <span className="absolute inset-0 bg-linear-to-r from-white/70 via-white/25 to-transparent dark:from-[#0b1220]/65 dark:via-[#0b1220]/25" aria-hidden="true" />
                                          <span className="absolute bottom-1.5 left-1.5 rounded-full bg-white/95 px-2 py-0.5 text-[8px] font-black uppercase tracking-wide text-primary shadow-sm dark:bg-[#0b1220]/90 dark:text-cyan-300">
                                            {solution.tag}
                                          </span>
                                        </span>

                                        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-slate-50 text-primary shadow-sm ring-1 ring-slate-200/70 transition group-hover/solution:scale-105 group-hover/solution:bg-primary/8 dark:bg-white/8 dark:ring-white/10 dark:text-cyan-300">
                                          <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                                        </span>

                                        <span className="min-w-0">
                                          <span className="block truncate text-[14px] font-extrabold text-(--text)">
                                            {solution.label}
                                          </span>
                                          <span className="mt-0.5 line-clamp-2 block text-[12px] leading-5 text-(--text-soft)">
                                            {solution.description}
                                          </span>
                                        </span>

                                        <ChevronRight
                                          className="h-4 w-4 shrink-0 text-primary transition group-hover/solution:translate-x-0.5 dark:text-cyan-300"
                                          aria-hidden="true"
                                        />
                                      </Link>
                                    </motion.div>
                                  );
                                })}
                            </motion.div>
                          </section>
                        </div>
                      </motion.div>
                    </div>
                  )}
                </AnimatePresence>
              </div>

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
                      setMobileShowcaseOpen(false);
                    }}
                    aria-expanded={mobileServicesOpen}
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
                      setMobileShowcaseOpen(false);
                    }}
                    aria-expanded={mobileSolutionsOpen}
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

                <div className="relative">
                  <button
                    onClick={() => {
                      setMobileShowcaseOpen(!mobileShowcaseOpen);
                      setMobileServicesOpen(false);
                      setMobileSolutionsOpen(false);
                      setMobileIndustriesOpen(false);
                    }}
                    aria-expanded={mobileShowcaseOpen}
                    className={`flex w-full items-center justify-between rounded-lg px-4 py-3 transition-colors ${
                      isShowcaseActive || mobileShowcaseOpen
                        ? "bg-white/5 text-primary"
                        : "text-(--text-muted) hover:bg-white/5 hover:text-primary"
                    }`}
                  >
                    <span>Explore</span>
                    <HiChevronDown
                      className={`transition-transform duration-300 ${
                        mobileShowcaseOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {mobileShowcaseOpen && (
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
                        {showcaseLinks.map(renderMobileDropdownItem)}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="relative">
                  <button
                    onClick={() => {
                      setMobileIndustriesOpen(!mobileIndustriesOpen);
                      setMobileServicesOpen(false);
                      setMobileSolutionsOpen(false);
                      setMobileShowcaseOpen(false);
                    }}
                    aria-expanded={mobileIndustriesOpen}
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
                                  {industry.solutions.slice(0, 7).map((solution) => (
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
