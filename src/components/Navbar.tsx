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
        href: "/crm-systems",
        icon: Network,
      },
    ],
  },
  {
    title: "Automation",
    items: [
      {
        label: "AI & Automation",
        description: "AI agents, automation workflows and smart tools.",
        href: "/services/ai-automation",
        icon: Bot,
      },
      {
        label: "Workflow Automation",
        description: "Automate reminders, approvals and business tasks.",
        href: "/workflow-lab",
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
        label: "DevOps & Cloud",
        description: "CI/CD, cloud infrastructure and deployments.",
        href: "/services/devops-cloud",
        icon: Cloud,
      },
      {
        label: "Cloud Solutions",
        description: "Secure and scalable cloud architecture.",
        href: "/services/cloud-solutions",
        icon: ServerCog,
      },
      {
        label: "Maintenance & Support",
        description: "Ongoing support and product maintenance.",
        href: "/services/maintenance-support",
        icon: Headphones,
      },
      {
        label: "Security Solutions",
        description: "Secure, reliable and protected systems.",
        href: "/services/security-solutions",
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
        label: "Digital Growth",
        description: "SEO, analytics, marketing and growth strategies.",
        href: "/services/digital-growth",
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
    href: "/workflow-lab",
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
    href: "/crm-systems",
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
    href: "/solutions/business-os",
    icon: Network,
    accent: "text-cyan-500",
    items: [
      {
        label: "Business OS",
        description: "One owned system for your entire business.",
        href: "/solutions/business-os",
        icon: LayoutDashboard,
      },
      {
        label: "CRM Core",
        description: "Leads, deals, customers, tasks, and follow-ups.",
        href: "/solutions/crmcore",
        icon: Network,
      },
      {
        label: "Admin Control Room",
        description: "Fields, pipelines, users, roles, and permissions.",
        href: "/solutions/admin-control-room",
        icon: ShieldCheck,
      },
      {
        label: "Workflow Engine",
        description: "Automate reminders, assignments, and approvals.",
        href: "/solutions/workflow-engine",
        icon: Workflow,
      },
      {
        label: "AI Intelligence",
        description: "Lead scoring, insights, and next-best actions.",
        href: "/solutions/ai-intelligence",
        icon: Bot,
      },
      {
        label: "Dashboards & Reports",
        description: "Revenue, conversions, tasks, and team performance.",
        href: "/solutions/dashboards-reports",
        icon: BarChart3,
      },
    ],
  },
  {
    title: "Web & SaaS",
    href: "/solutions/web-saas-solutions",
    icon: Code2,
    accent: "text-violet-500",
    items: [
      {
        label: "Business Website",
        description: "Premium websites for services and companies.",
        href: "/solutions/business-websites",
        icon: Code2,
      },
      {
        label: "SaaS Platform",
        description: "Subscription-ready product systems.",
        href: "/solutions/saas-platforms",
        icon: LayoutDashboard,
      },
      {
        label: "Admin Dashboard",
        description: "Control panels for operations and data.",
        href: "/solutions/admin-dashboards",
        icon: BarChart3,
      },
      {
        label: "Client Portal",
        description: "Secure portals for clients, files, and updates.",
        href: "/solutions/client-portals",
        icon: ShieldCheck,
      },
      {
        label: "Booking Platform",
        description: "Slots, calendars, bookings, and confirmations.",
        href: "/solutions/booking-platforms",
        icon: CheckCircle2,
      },
      {
        label: "Payment System",
        description: "Orders, invoices, payments, and verification.",
        href: "/solutions/payment-systems",
        icon: Landmark,
      },
    ],
  },
  {
    title: "Mobile Apps",
    href: "/solutions/mobile-app-solutions",
    icon: Smartphone,
    accent: "text-blue-500",
    items: [
      {
        label: "Android App",
        description: "Native and production-ready Android apps.",
        href: "/solutions/android-apps",
        icon: Smartphone,
      },
      {
        label: "iOS App",
        description: "Clean iPhone apps with smooth journeys.",
        href: "/solutions/ios-apps",
        icon: Smartphone,
      },
      {
        label: "Flutter App",
        description: "Cross-platform mobile apps for fast launch.",
        href: "/solutions/flutter-apps",
        icon: Smartphone,
      },
      {
        label: "Customer App",
        description: "User-facing apps for bookings and services.",
        href: "/solutions/customer-apps",
        icon: Store,
      },
      {
        label: "Booking App",
        description: "Booking, slots, payments, and reminders.",
        href: "/solutions/booking-apps",
        icon: CheckCircle2,
      },
      {
        label: "Push Notifications",
        description: "Alerts, reminders, and engagement triggers.",
        href: "/solutions/push-notifications",
        icon: Bot,
      },
    ],
  },
  {
    title: "AI Automation",
    href: "/solutions/ai-automation-solutions",
    icon: Bot,
    accent: "text-emerald-500",
    items: [
      {
        label: "AI Agents",
        description: "Assistants for sales, support, and operations.",
        href: "/solutions/ai-agents",
        icon: Bot,
      },
      {
        label: "Workflow Automation",
        description: "Rules, triggers, reminders, and actions.",
        href: "/solutions/workflow-automation",
        icon: Workflow,
      },
      {
        label: "Lead Scoring",
        description: "Prioritize leads using smart scoring logic.",
        href: "/solutions/lead-scoring",
        icon: Network,
      },
      {
        label: "Email Automation",
        description: "Sequences, campaigns, and reminders.",
        href: "/solutions/email-automation",
        icon: Store,
      },
      {
        label: "WhatsApp Automation",
        description: "Message flows and customer updates.",
        href: "/solutions/whatsapp-automation",
        icon: Smartphone,
      },
      {
        label: "Document Automation",
        description: "Upload, validate, classify, and route documents.",
        href: "/solutions/document-automation",
        icon: ShieldCheck,
      },
    ],
  },
  {
    title: "Cloud & DevOps",
    href: "/solutions/cloud-devops-solutions",
    icon: Cloud,
    accent: "text-orange-500",
    items: [
      {
        label: "Cloud Hosting",
        description: "Reliable hosting for websites, apps, and SaaS.",
        href: "/solutions/cloud-hosting",
        icon: Cloud,
      },
      {
        label: "CI/CD Pipeline",
        description: "Automated builds, tests, and deployments.",
        href: "/solutions/cicd-pipeline",
        icon: ServerCog,
      },
      {
        label: "Server Setup",
        description: "Backend, database, domain, SSL, and config.",
        href: "/solutions/server-setup",
        icon: ServerCog,
      },
      {
        label: "Monitoring & Logs",
        description: "Track uptime, errors, logs, and performance.",
        href: "/solutions/monitoring-logs",
        icon: BarChart3,
      },
      {
        label: "Backup Systems",
        description: "Automated backup and recovery planning.",
        href: "/solutions/backup-systems",
        icon: ShieldCheck,
      },
      {
        label: "Maintenance Support",
        description: "Ongoing upgrades, fixes, and support.",
        href: "/solutions/maintenance-support",
        icon: Headphones,
      },
    ],
  },
  {
    title: "Design & Growth",
    href: "/solutions/design-growth-solutions",
    icon: Palette,
    accent: "text-pink-500",
    items: [
      {
        label: "UI/UX Systems",
        description: "Interfaces, flows, wireframes, and systems.",
        href: "/solutions/ui-ux-systems",
        icon: Palette,
      },
      {
        label: "Design Systems",
        description: "Reusable components and visual consistency.",
        href: "/solutions/design-systems",
        icon: Layers3,
      },
      {
        label: "Brand Identity",
        description: "Logo direction, visual system, and tone.",
        href: "/solutions/brand-identity",
        icon: Sparkles,
      },
      {
        label: "SEO Growth",
        description: "SEO pages, metadata, schema, and indexing.",
        href: "/solutions/seo-growth-systems",
        icon: SearchCheck,
      },
      {
        label: "Analytics Setup",
        description: "Tracking, funnels, events, and reports.",
        href: "/solutions/analytics-setup",
        icon: BarChart3,
      },
      {
        label: "Campaign Pages",
        description: "Dedicated pages for ads and launches.",
        href: "/solutions/campaign-pages",
        icon: Code2,
      },
    ],
  },
];

const solutionLinks: DropdownLink[] = solutionMenuColumns.flatMap(
  (column) => column.items
);

const industryLinks: DropdownLink[] = [
  {
    label: "Healthcare CRM",
    description: "Patient leads, appointments, follow-ups, and care workflows.",
    href: "/industries/healthcare-crm",
    icon: HeartPulse,
  },
  {
    label: "Real Estate CRM",
    description: "Property inquiries, site visits, deals, and broker activity.",
    href: "/industries/real-estate-crm",
    icon: Building2,
  },
  {
    label: "Education CRM",
    description:
      "Admissions, enquiries, counselors, batches, and student journeys.",
    href: "/industries/education-crm",
    icon: GraduationCap,
  },
  {
    label: "Manufacturing CRM",
    description:
      "RFQs, quotations, dealers, orders, dispatches, and B2B sales.",
    href: "/industries/manufacturing-crm",
    icon: Factory,
  },
  {
    label: "Retail CRM",
    description: "Customers, loyalty, campaigns, support, and repeat purchases.",
    href: "/industries/retail-crm",
    icon: Store,
  },
  {
    label: "Finance CRM",
    description: "Loan leads, KYC documents, approvals, and advisor follow-ups.",
    href: "/industries/finance-crm",
    icon: Landmark,
  },
  {
    label: "Insurance CRM",
    description: "Policies, renewals, premium reminders, claims, and agents.",
    href: "/industries/insurance-crm",
    icon: ShieldCheck,
  },
  {
    label: "Travel CRM",
    description:
      "Packages, itineraries, visa documents, bookings, and payments.",
    href: "/industries/travel-crm",
    icon: Plane,
  },
  {
    label: "Automobile CRM",
    description:
      "Vehicle leads, test drives, bookings, service reminders, and sales.",
    href: "/industries/automobile-crm",
    icon: Car,
  },
  {
    label: "Service Business CRM",
    description:
      "Leads, quotes, tickets, tasks, schedules, and client follow-ups.",
    href: "/industries/service-business-crm",
    icon: Wrench,
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
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [desktopSolutionsOpen, setDesktopSolutionsOpen] = useState(false);
  const [desktopIndustriesOpen, setDesktopIndustriesOpen] = useState(false);
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

  function renderDesktopDropdownItem(item: DropdownLink) {
    const Icon = item.icon;
    const active = isLinkActive(item.href);

    return (
      <motion.div key={item.href} variants={itemVariants}>
        <Link
          href={item.href}
          onClick={closeDesktopDropdowns}
          aria-current={active ? "page" : undefined}
          role="menuitem"
          className={`group/item flex items-start gap-3 rounded-[18px] px-3 py-3 transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-primary/[0.07] ${
            active ? "bg-primary/12 text-primary" : "text-(--text)"
          }`}
        >
          <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-(--border) bg-white/60 text-primary shadow-sm transition duration-200 group-hover/item:scale-[1.06] group-hover/item:border-primary/30 dark:bg-white/5">
            <Icon className="h-4 w-4" aria-hidden="true" />
          </span>

          <span className="min-w-0 flex-1">
            <span className="block text-sm font-bold text-(--text)">
              {item.label}
            </span>
            <span className="mt-0.5 block text-xs leading-5 text-(--text-soft)">
              {item.description}
            </span>
          </span>

          <ChevronRight
            className="mt-2 h-3.5 w-3.5 shrink-0 -translate-x-1 text-primary opacity-0 transition duration-200 ease-out group-hover/item:translate-x-0 group-hover/item:opacity-100"
            aria-hidden="true"
          />
        </Link>
      </motion.div>
    );
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
        <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-xl border border-(--border) bg-white/5 text-primary">
          <Icon className="h-4 w-4" aria-hidden="true" />
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
      className={`relative z-50 mx-auto max-w-[min(94vw,1680px)] rounded-[30px] border border-white/50 bg-white/70 shadow-black/10 backdrop-blur-2xl dark:border-white/10 dark:bg-dark-800/80 ${          scrolled ? "shadow-xl" : "shadow-lg"
        }`}
      >
        <div className="px-4 sm:px-5 lg:px-7">
          <div className="flex h-17 items-center justify-between gap-4 sm:h-18">
            <Link
              href="/"
              className="group flex min-w-0 items-center gap-2 sm:gap-3"
            >
              <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-2xl border border-(--border) bg-white/70 shadow-md transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-primary/20 dark:bg-white/5 sm:h-12 sm:w-12">
                <Image
                  src="/hnxlogo.png"
                  alt="HNX Technologies Logo"
                  fill
                  priority
                  sizes="48px"
                  className="object-contain p-1"
                />
              </div>

              <div className="min-w-0 leading-tight">
                <span className="block truncate text-base font-bold tracking-tight text-(--text) sm:text-lg md:text-xl">
                  HNX<span className="text-primary"> Technologies</span>
                </span>
                <span className="hidden text-xs text-(--text-soft) sm:block">
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
                        className="relative overflow-hidden rounded-[30px] border border-slate-200/70 bg-white/95 shadow-[0_24px_70px_rgba(15,23,42,0.16)] ring-1 ring-white/70 backdrop-blur-2xl dark:border-white/10 dark:bg-[#0b1220]/95 dark:ring-white/5 dark:shadow-[0_28px_90px_rgba(0,0,0,0.62)]"
                        role="menu"
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
                                role="menuitem"
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
                                      role="menuitem"
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
                                          role="menuitem"
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
                                      className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 dark:bg-white/[0.04] dark:text-slate-300"
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
                  href="/solutions/business-os"
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
                        className="relative overflow-hidden rounded-[30px] border border-slate-200/80 bg-white/95 shadow-[0_24px_70px_rgba(15,23,42,0.16)] ring-1 ring-white/70 backdrop-blur-2xl dark:border-white/10 dark:bg-[#0b1220]/95 dark:ring-white/5 dark:shadow-[0_28px_90px_rgba(0,0,0,0.62)]"
                        role="menu"
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
                                  role="menuitem"
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
                                        role="menuitem"
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
                href="/crm-systems"
                className={desktopNavClass(isLinkActive("/crm-systems"))}
                aria-current={isLinkActive("/crm-systems") ? "page" : undefined}
              >
                CRM Systems
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
                      className="absolute left-1/2 top-full z-60 w-[660px] -translate-x-1/2 pt-4"
                      onMouseEnter={clearDesktopCloseTimer}
                      onMouseLeave={scheduleDesktopDropdownClose}
                    >
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={dropdownVariants}
                        style={{ transformOrigin: "top center" }}
                        className="relative overflow-hidden rounded-[28px] border border-white/20 bg-white/90 p-3 shadow-[0_24px_70px_rgba(15,23,42,0.18)] ring-1 ring-white/60 backdrop-blur-2xl dark:border-white/10 dark:bg-[#0b1220]/92 dark:ring-white/5 dark:shadow-[0_24px_80px_rgba(0,0,0,0.58)]"
                        role="menu"
                        aria-label="Industries"
                      >
                        <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-linear-to-r from-transparent via-primary/50 to-transparent" />
                        <div className="pointer-events-none absolute left-0 top-10 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
                        <div className="pointer-events-none absolute right-0 top-0 h-24 w-24 rounded-full bg-accent/10 blur-2xl" />

                        <div className="relative mb-2 px-1">
                          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-(--text-soft)">
                            Industry CRM Systems
                          </p>
                          <p className="mt-1 text-[11px] text-(--text-soft)">
                            Workflow structures tailored for real operations
                          </p>
                        </div>

                        <motion.div
                          className="grid gap-1 sm:grid-cols-2"
                          variants={gridVariants}
                        >
                          {industryLinks.map(renderDesktopDropdownItem)}
                        </motion.div>

                        <div className="mt-2 flex justify-center">
                          <Link
                            href="/industries"
                            onClick={closeDesktopDropdowns}
                            role="menuitem"
                            className="group/footer inline-flex w-fit min-w-[190px] items-center justify-center gap-3 rounded-full border border-(--border) bg-linear-to-r from-primary/10 to-accent/10 px-4 py-3 text-sm font-bold text-primary transition duration-200 ease-out hover:border-primary/25 hover:bg-primary/10"
                          >
                            View All Industries
                            <span
                              className="transition-transform duration-200 ease-out group-hover/footer:translate-x-1"
                              aria-hidden="true"
                            >
                              -&gt;
                            </span>
                          </Link>
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
                                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl border border-(--border) bg-white/5 text-primary">
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
                  href="/crm-systems"
                  onClick={closeMobileMenu}
                  className={`block rounded-lg px-4 py-3 transition-colors ${
                    isLinkActive("/crm-systems")
                      ? "bg-white/5 text-primary"
                      : "text-(--text-muted) hover:bg-white/5 hover:text-primary"
                  }`}
                >
                  CRM Systems
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
                        className="mt-2 overflow-hidden rounded-2xl border border-(--border) bg-(--surface-2) p-2 shadow-[0_18px_40px_rgba(15,23,42,0.14)]"
                      >
                        <Link
                          href="/industries"
                          onClick={closeMobileMenu}
                          className={`mb-1 block rounded-xl px-3 py-2.5 text-sm font-bold transition-all ${
                            pathname === "/industries"
                              ? "bg-white/6 text-primary"
                              : "text-(--text-muted) hover:bg-white/5 hover:text-primary"
                          }`}
                        >
                          View All Industries
                        </Link>
                        {industryLinks.map(renderMobileDropdownItem)}
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
