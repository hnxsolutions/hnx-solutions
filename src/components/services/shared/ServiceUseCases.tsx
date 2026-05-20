"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import type { ServiceItem } from "@/data/services";
import {
  Activity,
  ArrowRight,
  BarChart3,
  BookOpen,
  CalendarCheck,
  Car,
  CheckCircle2,
  CreditCard,
  Database,
  Dumbbell,
  Factory,
  FileCheck2,
  Globe2,
  GraduationCap,
  HeartPulse,
  Home,
  Hotel,
  LayoutDashboard,
  LineChart,
  Lock,
  MapPinned,
  PackageCheck,
  Plane,
  Rocket,
  Route,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Truck,
  Utensils,
  UsersRound,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

type ServiceUseCasesProps = {
  service: ServiceItem;
};

type SolutionType = "website" | "mobile-app" | "crm" | "saas";

type ScreenType =
  | "healthcare"
  | "manufacturing"
  | "education"
  | "real-estate"
  | "restaurant"
  | "retail"
  | "logistics"
  | "fitness"
  | "hospitality"
  | "finance"
  | "travel"
  | "automotive";

type IndustryItem = {
  name: string;
  shortName: string;
  slug: ScreenType;
  icon: LucideIcon;
  accent: string;
  summary: string;
  title: string;
  description: Record<SolutionType, string>;
  outcome: string;
  features: string[];
};

type IndustryScreen = {
  appTitle: string;
  heroTitle: string;
  primaryStat: string;
  primaryStatLabel: string;
  secondaryStat: string;
  secondaryStatLabel: string;
  thirdStat: string;
  thirdStatLabel: string;
  actionTitle: string;
  actionSubtitle: string;
  workflowTitle: string;
  nextCardTitle: string;
  nextCardValue: string;
  reminderTitle: string;
  reminderValue: string;
  nav: [string, string, string];
};

const industries: IndustryItem[] = [
  {
    name: "Healthcare",
    shortName: "Health",
    slug: "healthcare",
    icon: HeartPulse,
    accent: "from-sky-500 to-cyan-500",
    summary:
      "Appointments, records, reminders, payments, reports, and patient updates.",
    title: "Patient journey and appointment operations",
    description: {
      website:
        "A healthcare website for appointments, doctor profiles, service pages, trust content, and patient enquiries.",
      "mobile-app":
        "A healthcare mobile app for appointments, records, reminders, payments, and patient communication.",
      crm:
        "A healthcare CRM for patients, appointments, follow-ups, billing status, and communication history.",
      saas:
        "A healthcare SaaS platform for appointments, staff, reports, payments, and patient communication.",
    },
    outcome:
      "Reduce front-desk load, improve patient response time, and make appointment handling smoother.",
    features: [
      "Appointment booking",
      "Patient communication",
      "User profiles",
      "Payments",
      "Smart reminders",
      "Reports",
    ],
  },
  {
    name: "Manufacturing",
    shortName: "Factory",
    slug: "manufacturing",
    icon: Factory,
    accent: "from-emerald-500 to-teal-500",
    summary:
      "Inventory, production status, approvals, maintenance, quality checks, and reports.",
    title: "Production visibility and operational control",
    description: {
      website:
        "A manufacturing website for capabilities, product lines, certifications, facilities, and B2B enquiries.",
      "mobile-app":
        "A mobile app for production teams to track inventory, approvals, maintenance, quality checks, and floor updates.",
      crm:
        "A CRM for leads, dealer enquiries, production requests, quotations, follow-ups, and customer communication.",
      saas:
        "A SaaS platform for production tracking, inventory updates, approvals, maintenance logs, and reporting.",
    },
    outcome:
      "Improve production visibility, reduce manual coordination, and keep teams aligned across departments.",
    features: [
      "Inventory tracking",
      "Production status",
      "Approvals",
      "Quality checks",
      "Maintenance logs",
      "Reports",
    ],
  },
  {
    name: "Education",
    shortName: "School",
    slug: "education",
    icon: GraduationCap,
    accent: "from-violet-500 to-purple-500",
    summary:
      "Students, courses, attendance, notices, fees, parent updates, and admissions.",
    title: "Student lifecycle and learning operations",
    description: {
      website:
        "An education website for courses, admissions, faculty, results, notices, and enquiry conversion.",
      "mobile-app":
        "A mobile app for students, parents, and staff to manage attendance, notices, fees, assignments, and updates.",
      crm:
        "A CRM for admissions, enquiries, counselling calls, student records, fee follow-ups, and parent communication.",
      saas:
        "An education SaaS platform for attendance, learning workflows, notices, fee management, and academic reports.",
    },
    outcome:
      "Make admissions, student updates, fee communication, and academic operations easier to manage.",
    features: [
      "Admissions",
      "Attendance",
      "Fee updates",
      "Notices",
      "Parent chat",
      "Reports",
    ],
  },
  {
    name: "Real Estate",
    shortName: "Property",
    slug: "real-estate",
    icon: Home,
    accent: "from-orange-500 to-amber-500",
    summary:
      "Listings, buyer enquiries, site visits, broker follow-ups, deals, and reports.",
    title: "Property discovery and sales pipeline",
    description: {
      website:
        "A real estate website for property listings, project pages, lead capture, location details, and trust sections.",
      "mobile-app":
        "A mobile app for buyers, agents, and owners to browse listings, book visits, save properties, and track enquiries.",
      crm:
        "A CRM for leads, property interests, site visits, broker tasks, follow-ups, and deal stages.",
      saas:
        "A real estate SaaS platform for listings, visits, lead routing, agent performance, and sales reporting.",
    },
    outcome:
      "Capture better leads, reduce missed follow-ups, and make property sales pipelines easier to manage.",
    features: [
      "Property listings",
      "Site visits",
      "Lead capture",
      "Follow-ups",
      "Broker tasks",
      "Deal stages",
    ],
  },
  {
    name: "Restaurant",
    shortName: "Food",
    slug: "restaurant",
    icon: Utensils,
    accent: "from-rose-500 to-orange-500",
    summary:
      "Orders, reservations, loyalty, offers, kitchen updates, delivery, and retention.",
    title: "Food ordering and customer retention",
    description: {
      website:
        "A restaurant website for menu discovery, reservations, offers, location, reviews, and direct enquiries.",
      "mobile-app":
        "A mobile app for orders, reservations, offers, loyalty points, delivery tracking, and retention.",
      crm:
        "A CRM for customer orders, reservations, feedback, offers, repeat visits, and campaign follow-ups.",
      saas:
        "A restaurant SaaS platform for orders, kitchen updates, reservations, loyalty, reporting, and delivery operations.",
    },
    outcome:
      "Increase repeat orders, improve reservation handling, and reduce manual order coordination.",
    features: [
      "Online orders",
      "Reservations",
      "Loyalty",
      "Offers",
      "Delivery tracking",
      "Feedback",
    ],
  },
  {
    name: "Retail",
    shortName: "Retail",
    slug: "retail",
    icon: ShoppingBag,
    accent: "from-fuchsia-500 to-pink-500",
    summary:
      "Products, orders, stock, loyalty, offers, returns, and customer behaviour.",
    title: "Retail commerce and customer growth",
    description: {
      website:
        "A retail website for product catalogues, offers, store details, enquiry capture, and brand credibility.",
      "mobile-app":
        "A shopping app for product discovery, orders, offers, loyalty, returns, and personalized engagement.",
      crm:
        "A CRM for customers, repeat purchases, order history, offers, returns, and campaign segmentation.",
      saas:
        "A retail SaaS platform for inventory, orders, customer behaviour, loyalty, offers, and analytics.",
    },
    outcome:
      "Improve product discovery, increase repeat purchases, and keep stock and customer data organized.",
    features: [
      "Product catalog",
      "Orders",
      "Stock",
      "Loyalty",
      "Returns",
      "Customer insights",
    ],
  },
  {
    name: "Logistics",
    shortName: "Logistics",
    slug: "logistics",
    icon: Truck,
    accent: "from-blue-500 to-indigo-500",
    summary:
      "Shipments, drivers, routes, delivery proof, customer alerts, and tracking.",
    title: "Shipment tracking and delivery operations",
    description: {
      website:
        "A logistics website for services, fleet details, shipment enquiries, coverage areas, and B2B lead capture.",
      "mobile-app":
        "A mobile app for drivers, dispatch teams, and customers to track shipments, routes, delivery proof, and alerts.",
      crm:
        "A CRM for shipment enquiries, customer accounts, quotations, dispatch follow-ups, and service history.",
      saas:
        "A logistics SaaS platform for route tracking, driver updates, delivery proof, alerts, and reports.",
    },
    outcome:
      "Improve delivery visibility, reduce customer calls, and make dispatch operations more reliable.",
    features: [
      "Shipment tracking",
      "Driver updates",
      "Routes",
      "Delivery proof",
      "Customer alerts",
      "Reports",
    ],
  },
  {
    name: "Fitness",
    shortName: "Fitness",
    slug: "fitness",
    icon: Dumbbell,
    accent: "from-lime-500 to-emerald-500",
    summary:
      "Members, plans, trainers, bookings, progress, payments, and reminders.",
    title: "Member engagement and fitness operations",
    description: {
      website:
        "A fitness website for services, plans, trainers, transformations, membership enquiries, and local SEO.",
      "mobile-app":
        "A fitness app for class booking, workout plans, trainer communication, progress tracking, payments, and reminders.",
      crm:
        "A CRM for leads, memberships, trainer assignments, renewals, payments, and member follow-ups.",
      saas:
        "A fitness SaaS platform for schedules, memberships, trainers, attendance, payments, and progress reports.",
    },
    outcome:
      "Improve member retention, reduce missed renewals, and simplify trainer and class management.",
    features: [
      "Class booking",
      "Workout plans",
      "Trainer chat",
      "Progress",
      "Payments",
      "Renewals",
    ],
  },
  {
    name: "Hospitality",
    shortName: "Hotel",
    slug: "hospitality",
    icon: Hotel,
    accent: "from-cyan-500 to-blue-500",
    summary:
      "Bookings, rooms, guests, services, reviews, check-ins, payments, and support.",
    title: "Guest experience and booking operations",
    description: {
      website:
        "A hospitality website for rooms, amenities, booking enquiries, location, reviews, and guest trust.",
      "mobile-app":
        "A guest app for bookings, check-ins, room services, payments, support, and personalized updates.",
      crm:
        "A CRM for guests, bookings, enquiries, service requests, reviews, and repeat-stay follow-ups.",
      saas:
        "A hospitality SaaS platform for room bookings, guest services, check-ins, payments, and reports.",
    },
    outcome:
      "Improve guest communication, simplify bookings, and create a smoother stay experience.",
    features: [
      "Room booking",
      "Guest profiles",
      "Check-in",
      "Room service",
      "Payments",
      "Reviews",
    ],
  },
  {
    name: "Finance",
    shortName: "Finance",
    slug: "finance",
    icon: CreditCard,
    accent: "from-slate-700 to-blue-600",
    summary:
      "Clients, applications, documents, approvals, payments, support, and compliance.",
    title: "Client onboarding and financial workflows",
    description: {
      website:
        "A finance website for services, calculators, trust sections, application enquiries, and compliance-led content.",
      "mobile-app":
        "A secure finance app for client onboarding, document upload, status tracking, payments, and support.",
      crm:
        "A CRM for applications, client documents, advisor tasks, follow-ups, approvals, and communication history.",
      saas:
        "A finance SaaS platform for onboarding, document workflows, approvals, payments, reporting, and compliance.",
    },
    outcome:
      "Reduce manual document handling, improve application visibility, and make client onboarding smoother.",
    features: [
      "Client onboarding",
      "Documents",
      "Approvals",
      "Payments",
      "Support",
      "Compliance",
    ],
  },
  {
    name: "Travel",
    shortName: "Travel",
    slug: "travel",
    icon: Plane,
    accent: "from-sky-500 to-blue-600",
    summary:
      "Packages, bookings, itineraries, payments, reminders, support, and reviews.",
    title: "Travel booking and itinerary management",
    description: {
      website:
        "A travel website for packages, destination pages, booking enquiries, itineraries, testimonials, and SEO growth.",
      "mobile-app":
        "A travel app for bookings, itineraries, payments, reminders, support, and trip updates.",
      crm:
        "A CRM for leads, packages, booking stages, customer follow-ups, payments, and trip communication.",
      saas:
        "A travel SaaS platform for package management, bookings, itineraries, payments, reminders, and support.",
    },
    outcome:
      "Improve booking conversions, reduce manual trip coordination, and keep customers updated before travel.",
    features: [
      "Packages",
      "Bookings",
      "Itineraries",
      "Payments",
      "Trip reminders",
      "Support",
    ],
  },
  {
    name: "Automotive",
    shortName: "Auto",
    slug: "automotive",
    icon: Car,
    accent: "from-red-500 to-orange-500",
    summary:
      "Vehicles, test drives, service bookings, customer records, reminders, and reports.",
    title: "Vehicle sales and service operations",
    description: {
      website:
        "An automotive website for vehicle pages, service booking, dealership trust, offers, and enquiry capture.",
      "mobile-app":
        "A mobile app for vehicle browsing, test drives, service booking, reminders, payments, and support.",
      crm:
        "A CRM for leads, vehicles, test drives, service records, follow-ups, reminders, and sales stages.",
      saas:
        "An automotive SaaS platform for vehicle inventory, service bookings, test drives, reminders, and reporting.",
    },
    outcome:
      "Improve test-drive handling, service reminders, and customer follow-up across sales and service teams.",
    features: [
      "Vehicle listings",
      "Test drives",
      "Service booking",
      "Reminders",
      "Customer records",
      "Reports",
    ],
  },
];

const industryScreens: Record<ScreenType, IndustryScreen> = {
  healthcare: {
    appTitle: "Health App",
    heroTitle: "Patient care dashboard",
    primaryStat: "18",
    primaryStatLabel: "Bookings",
    secondaryStat: "7",
    secondaryStatLabel: "Reminders",
    thirdStat: "4",
    thirdStatLabel: "Reports",
    actionTitle: "Next appointment",
    actionSubtitle: "Dr. follow-up at 4:30 PM",
    workflowTitle: "Patient workflow",
    nextCardTitle: "Payment due",
    nextCardValue: "₹1,250",
    reminderTitle: "Medicine",
    reminderValue: "8:00 PM",
    nav: ["Home", "Visits", "Reports"],
  },
  manufacturing: {
    appTitle: "Factory App",
    heroTitle: "Production control room",
    primaryStat: "42",
    primaryStatLabel: "Batches",
    secondaryStat: "11",
    secondaryStatLabel: "Approvals",
    thirdStat: "3",
    thirdStatLabel: "Issues",
    actionTitle: "Line 2 update",
    actionSubtitle: "Quality check pending",
    workflowTitle: "Factory workflow",
    nextCardTitle: "Stock level",
    nextCardValue: "74%",
    reminderTitle: "Machine",
    reminderValue: "A7 service",
    nav: ["Floor", "Stock", "Reports"],
  },
  education: {
    appTitle: "School App",
    heroTitle: "Student operations hub",
    primaryStat: "86",
    primaryStatLabel: "Present",
    secondaryStat: "12",
    secondaryStatLabel: "Notices",
    thirdStat: "5",
    thirdStatLabel: "Fees",
    actionTitle: "Class update",
    actionSubtitle: "Math assignment due today",
    workflowTitle: "Student workflow",
    nextCardTitle: "Fee status",
    nextCardValue: "Due",
    reminderTitle: "PTM",
    reminderValue: "Friday",
    nav: ["Class", "Fees", "Notices"],
  },
  "real-estate": {
    appTitle: "Property App",
    heroTitle: "Property sales pipeline",
    primaryStat: "24",
    primaryStatLabel: "Leads",
    secondaryStat: "8",
    secondaryStatLabel: "Visits",
    thirdStat: "5",
    thirdStatLabel: "Deals",
    actionTitle: "Site visit",
    actionSubtitle: "3 BHK visit at 5:00 PM",
    workflowTitle: "Property workflow",
    nextCardTitle: "Lead score",
    nextCardValue: "Hot",
    reminderTitle: "Follow-up",
    reminderValue: "Broker call",
    nav: ["Leads", "Visits", "Deals"],
  },
  restaurant: {
    appTitle: "Food App",
    heroTitle: "Orders and reservations",
    primaryStat: "38",
    primaryStatLabel: "Orders",
    secondaryStat: "9",
    secondaryStatLabel: "Tables",
    thirdStat: "6",
    thirdStatLabel: "Offers",
    actionTitle: "Kitchen queue",
    actionSubtitle: "6 orders preparing",
    workflowTitle: "Restaurant workflow",
    nextCardTitle: "Delivery",
    nextCardValue: "12 min",
    reminderTitle: "Loyalty",
    reminderValue: "320 pts",
    nav: ["Orders", "Tables", "Menu"],
  },
  retail: {
    appTitle: "Retail App",
    heroTitle: "Store sales dashboard",
    primaryStat: "54",
    primaryStatLabel: "Orders",
    secondaryStat: "19",
    secondaryStatLabel: "Stock",
    thirdStat: "8",
    thirdStatLabel: "Returns",
    actionTitle: "Top product",
    actionSubtitle: "New arrivals trending",
    workflowTitle: "Retail workflow",
    nextCardTitle: "Inventory",
    nextCardValue: "Low",
    reminderTitle: "Campaign",
    reminderValue: "Festive sale",
    nav: ["Store", "Orders", "Stock"],
  },
  logistics: {
    appTitle: "Logistics App",
    heroTitle: "Shipment command center",
    primaryStat: "31",
    primaryStatLabel: "Shipments",
    secondaryStat: "14",
    secondaryStatLabel: "Drivers",
    thirdStat: "6",
    thirdStatLabel: "Delayed",
    actionTitle: "Route update",
    actionSubtitle: "Driver #12 near destination",
    workflowTitle: "Delivery workflow",
    nextCardTitle: "ETA",
    nextCardValue: "22 min",
    reminderTitle: "Proof",
    reminderValue: "Pending",
    nav: ["Routes", "Fleet", "POD"],
  },
  fitness: {
    appTitle: "Fitness App",
    heroTitle: "Member training hub",
    primaryStat: "26",
    primaryStatLabel: "Classes",
    secondaryStat: "12",
    secondaryStatLabel: "Members",
    thirdStat: "4",
    thirdStatLabel: "Renewals",
    actionTitle: "Next session",
    actionSubtitle: "Strength training at 6 PM",
    workflowTitle: "Fitness workflow",
    nextCardTitle: "Progress",
    nextCardValue: "82%",
    reminderTitle: "Renewal",
    reminderValue: "3 days",
    nav: ["Classes", "Plans", "Progress"],
  },
  hospitality: {
    appTitle: "Hotel App",
    heroTitle: "Guest service dashboard",
    primaryStat: "19",
    primaryStatLabel: "Bookings",
    secondaryStat: "11",
    secondaryStatLabel: "Check-ins",
    thirdStat: "5",
    thirdStatLabel: "Requests",
    actionTitle: "Guest request",
    actionSubtitle: "Room 204 service pending",
    workflowTitle: "Guest workflow",
    nextCardTitle: "Occupancy",
    nextCardValue: "76%",
    reminderTitle: "Review",
    reminderValue: "New",
    nav: ["Rooms", "Guests", "Service"],
  },
  finance: {
    appTitle: "Finance App",
    heroTitle: "Client approval workflow",
    primaryStat: "17",
    primaryStatLabel: "Applications",
    secondaryStat: "9",
    secondaryStatLabel: "Approvals",
    thirdStat: "3",
    thirdStatLabel: "Pending",
    actionTitle: "KYC review",
    actionSubtitle: "2 documents need approval",
    workflowTitle: "Finance workflow",
    nextCardTitle: "Risk score",
    nextCardValue: "Low",
    reminderTitle: "Payment",
    reminderValue: "Due",
    nav: ["Clients", "Docs", "Status"],
  },
  travel: {
    appTitle: "Travel App",
    heroTitle: "Trip booking manager",
    primaryStat: "21",
    primaryStatLabel: "Trips",
    secondaryStat: "6",
    secondaryStatLabel: "Bookings",
    thirdStat: "4",
    thirdStatLabel: "Support",
    actionTitle: "Upcoming trip",
    actionSubtitle: "Manali package starts Monday",
    workflowTitle: "Travel workflow",
    nextCardTitle: "Itinerary",
    nextCardValue: "Ready",
    reminderTitle: "Payment",
    reminderValue: "Pending",
    nav: ["Trips", "Bookings", "Help"],
  },
  automotive: {
    appTitle: "Auto App",
    heroTitle: "Vehicle sales and service",
    primaryStat: "15",
    primaryStatLabel: "Leads",
    secondaryStat: "7",
    secondaryStatLabel: "Services",
    thirdStat: "3",
    thirdStatLabel: "Drives",
    actionTitle: "Test drive",
    actionSubtitle: "SUV booking at 3:00 PM",
    workflowTitle: "Auto workflow",
    nextCardTitle: "Service due",
    nextCardValue: "Today",
    reminderTitle: "Follow-up",
    reminderValue: "Hot lead",
    nav: ["Leads", "Service", "Cars"],
  },
};

function getSolutionType(serviceId: string): SolutionType {
  if (serviceId === "web-development") return "website";
  if (serviceId === "custom-crm-systems") return "crm";
  if (serviceId === "saas-development") return "saas";
  return "mobile-app";
}

function getSolutionLabel(type: SolutionType) {
  if (type === "website") return "Website";
  if (type === "crm") return "CRM";
  if (type === "saas") return "SaaS";
  return "Mobile App";
}

function getRouteSegment(type: SolutionType) {
  if (type === "website") return "website";
  if (type === "crm") return "crm";
  if (type === "saas") return "saas";
  return "mobile-app";
}

function getRoute(industry: IndustryItem, type: SolutionType) {
  return `/industries/${industry.slug}/${getRouteSegment(type)}`;
}

function IndustryDetailPanel({
  industry,
  title,
  items,
}: {
  industry: IndustryItem;
  title: string;
  items: string[];
}) {
  return (
    <div className="absolute -right-24 bottom-12 hidden w-[196px] rotate-6 rounded-[1.6rem] border border-slate-200 bg-white/92 p-4 shadow-[0_26px_65px_rgba(15,23,42,0.13)] backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/55 xl:block">
      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#145cb7] dark:text-cyan-200">
        {title}
      </p>

      <div className="mt-3 space-y-2">
        {items.slice(0, 3).map((item, index) => (
          <div
            key={item}
            className="flex items-center gap-2 rounded-xl bg-slate-50 px-2.5 py-2 dark:bg-white/8"
          >
            <span
              className={`grid h-6 w-6 shrink-0 place-items-center rounded-lg bg-gradient-to-br ${industry.accent} text-[10px] font-semibold text-white`}
            >
              {index + 1}
            </span>
            <p className="truncate text-xs font-medium text-slate-600 dark:text-slate-300">
              {item}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-3 rounded-2xl border border-slate-100 bg-white p-3 dark:border-white/10 dark:bg-white/8">
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">
            Sync status
          </p>
          <CheckCircle2 className="h-4 w-4 text-emerald-500" />
        </div>
        <div className="mt-3 h-2 rounded-full bg-slate-100 dark:bg-white/10">
          <div
            className={`h-full w-[82%] rounded-full bg-gradient-to-r ${industry.accent}`}
          />
        </div>
      </div>
    </div>
  );
}

function IndustryWebsiteMockup({ industry }: { industry: IndustryItem }) {
  const Icon = industry.icon;
  const screen = industryScreens[industry.slug];

  return (
    <div className="relative hidden min-h-[420px] items-center justify-center xl:flex">
      <div
        className={`absolute h-[360px] w-[610px] rounded-full bg-gradient-to-br ${industry.accent} opacity-[0.11] blur-3xl`}
      />

      <motion.div
        key={`website-${industry.slug}`}
        initial={{ opacity: 0, y: 18, rotateX: -8 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.42, ease: "easeOut" }}
        className="relative w-full max-w-[570px]"
      >
        <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_32px_95px_rgba(15,23,42,0.16)] dark:border-white/10 dark:bg-slate-950">
          <div className="flex items-center justify-between border-b border-slate-100 px-5 py-3 dark:border-white/10">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
            </div>
            <div className="rounded-full bg-slate-100 px-4 py-1.5 text-[10px] font-semibold text-slate-500 dark:bg-white/8 dark:text-slate-300">
              /{industry.slug}/{getRouteSegment("website")}
            </div>
          </div>

          <div className="relative min-h-[380px] overflow-hidden p-5">
            <div
              className={`absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br ${industry.accent} opacity-[0.14] blur-3xl`}
            />
            <div className="relative grid gap-4 lg:grid-cols-[1fr_0.82fr]">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500 dark:bg-white/8 dark:text-slate-300">
                  <Globe2 className="h-3.5 w-3.5" />
                  {industry.name} Website
                </div>

                <h4 className="mt-5 text-3xl font-semibold leading-[1.05] tracking-[-0.05em] text-slate-950 dark:text-white">
                  Industry-ready website for{" "}
                  <span
                    className={`bg-gradient-to-r ${industry.accent} bg-clip-text text-transparent`}
                  >
                    real enquiries.
                  </span>
                </h4>

                <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {industry.description.website}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {industry.features.slice(0, 4).map((feature) => (
                    <span
                      key={feature}
                      className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[10px] font-semibold text-slate-600 dark:border-white/10 dark:bg-white/7 dark:text-slate-300"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-3">
                  <span
                    className={`rounded-2xl bg-gradient-to-r ${industry.accent} px-4 py-3 text-xs font-semibold text-white shadow-[0_16px_34px_rgba(37,99,235,0.18)]`}
                  >
                    Request quote
                  </span>
                  <span className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-xs font-semibold text-slate-700 dark:border-white/10 dark:bg-white/7 dark:text-slate-200">
                    View services
                  </span>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-[1.4rem] border border-slate-200 bg-white p-4 shadow-[0_18px_50px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-white/7">
                  <div className="flex items-center justify-between">
                    <span
                      className={`grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br ${industry.accent} text-white`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-semibold text-emerald-600">
                      Live leads
                    </span>
                  </div>

                  <p className="mt-4 text-lg font-semibold text-slate-950 dark:text-white">
                    Conversion modules
                  </p>

                  <div className="mt-4 space-y-2">
                    {[
                      screen.actionTitle,
                      industry.features[0],
                      industry.features[1],
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl bg-slate-50 p-3 dark:bg-white/7"
                      >
                        <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                          {item}
                        </p>
                        <div className="mt-2 h-1.5 rounded-full bg-slate-200 dark:bg-white/10">
                          <div
                            className={`h-full w-[74%] rounded-full bg-gradient-to-r ${industry.accent}`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-3 grid grid-cols-3 gap-2">
                  {[
                    [screen.primaryStat, screen.primaryStatLabel],
                    [screen.secondaryStat, screen.secondaryStatLabel],
                    [screen.thirdStat, screen.thirdStatLabel],
                  ].map(([value, label]) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-slate-200 bg-white p-3 text-center dark:border-white/10 dark:bg-white/7"
                    >
                      <p className="text-base font-semibold text-slate-950 dark:text-white">
                        {value}
                      </p>
                      <p className="mt-1 text-[10px] text-slate-500">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <IndustryDetailPanel
          industry={industry}
          title="Website sections"
          items={["Hero + CTA", "Service pages", "Lead form"]}
        />
      </motion.div>
    </div>
  );
}

function IndustryMobileMockup({ industry }: { industry: IndustryItem }) {
  const Icon = industry.icon;
  const screen = industryScreens[industry.slug];

  return (
    <div className="relative hidden min-h-[420px] items-center justify-center xl:flex">
      <div
        className={`absolute h-[370px] w-[580px] rounded-full bg-gradient-to-br ${industry.accent} opacity-[0.11] blur-3xl`}
      />

      <motion.div
        key={`mobile-${industry.slug}`}
        initial={{ opacity: 0, y: 18, rotateX: -8 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.42, ease: "easeOut" }}
        className="relative flex items-center justify-center"
      >
        <div className="absolute -left-28 top-12 w-[190px] -rotate-6 rounded-[1.6rem] border border-slate-200 bg-white/92 p-4 shadow-[0_26px_65px_rgba(15,23,42,0.13)] backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/55">
          <div className="flex items-center gap-2.5">
            <span
              className={`grid h-9 w-9 place-items-center rounded-2xl bg-gradient-to-br ${industry.accent} text-white`}
            >
              <Icon className="h-4 w-4" />
            </span>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                Mobile screen
              </p>
              <p className="text-xs font-semibold text-slate-950 dark:text-white">
                {screen.workflowTitle}
              </p>
            </div>
          </div>

          <div className="mt-4 rounded-2xl bg-slate-50 p-3 dark:bg-white/8">
            <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">
              {screen.actionTitle}
            </p>
            <p className="mt-1 text-[11px] leading-4 text-slate-500 dark:text-slate-400">
              {screen.actionSubtitle}
            </p>
          </div>
        </div>

        <div className="relative w-[280px] rounded-[3rem] border-[10px] border-slate-950 bg-slate-950 p-2 shadow-[0_48px_130px_rgba(15,23,42,0.38)]">
          <div className="absolute left-1/2 top-3 z-20 h-6 w-24 -translate-x-1/2 rounded-full bg-slate-950" />

          <div className="relative h-[470px] overflow-hidden rounded-[2.1rem] bg-[#f6f8fb] text-slate-950">
            <div
              className={`absolute inset-x-0 top-0 h-[166px] bg-gradient-to-br ${industry.accent}`}
            />
            <div className="absolute inset-x-0 top-0 h-[166px] bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.45),transparent_28%),radial-gradient(circle_at_82%_26%,rgba(255,255,255,0.30),transparent_32%)]" />

            <div className="relative px-5 pt-10">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/80">
                    {screen.appTitle}
                  </p>
                  <h4 className="mt-2 max-w-[165px] text-[24px] font-semibold leading-7 text-white">
                    {screen.heroTitle}
                  </h4>
                </div>

                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white/20 text-white ring-1 ring-white/30 backdrop-blur">
                  <Icon className="h-5 w-5" />
                </span>
              </div>

              <div className="mt-4 rounded-[1.5rem] bg-white p-4 shadow-[0_18px_42px_rgba(15,23,42,0.16)]">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                      Dashboard
                    </p>
                    <p className="mt-1 text-lg font-semibold text-slate-950">
                      Today overview
                    </p>
                  </div>
                  <BarChart3 className="h-5 w-5 text-[#145cb7]" />
                </div>

                <div className="mt-4 grid grid-cols-3 gap-2">
                  {[
                    [screen.primaryStat, screen.primaryStatLabel, true],
                    [screen.secondaryStat, screen.secondaryStatLabel, false],
                    [screen.thirdStat, screen.thirdStatLabel, false],
                  ].map(([value, label, active]) => (
                    <div
                      key={label as string}
                      className={
                        active
                          ? `rounded-2xl bg-gradient-to-br ${industry.accent} p-3 text-white`
                          : "rounded-2xl bg-slate-50 p-3"
                      }
                    >
                      <p
                        className={
                          active
                            ? "text-lg font-semibold text-white"
                            : "text-lg font-semibold text-slate-950"
                        }
                      >
                        {value as string}
                      </p>
                      <p
                        className={
                          active
                            ? "mt-1 text-[10px] font-medium text-white/80"
                            : "mt-1 text-[10px] font-medium text-slate-500"
                        }
                      >
                        {label as string}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-3 rounded-[1.35rem] bg-white p-4 shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-slate-950">
                    {screen.workflowTitle}
                  </p>
                  <Smartphone className="h-4 w-4 text-[#145cb7]" />
                </div>

                <div className="mt-3 space-y-2">
                  {industry.features.slice(0, 3).map((feature, index) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 rounded-2xl bg-slate-50 px-3 py-2"
                    >
                      <span
                        className={`grid h-6 w-6 shrink-0 place-items-center rounded-lg bg-gradient-to-br ${industry.accent} text-[10px] font-semibold text-white`}
                      >
                        {index + 1}
                      </span>
                      <span className="truncate text-xs font-semibold text-slate-700">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute inset-x-5 bottom-4 rounded-[1.4rem] border border-slate-100 bg-white/94 px-4 py-3 shadow-[0_12px_34px_rgba(15,23,42,0.12)] backdrop-blur">
                <div className="flex items-center justify-between">
                  {screen.nav.map((item, index) => (
                    <div key={item} className="flex flex-col items-center">
                      <span
                        className={`h-2 w-2 rounded-full ${
                          index === 0
                            ? `bg-gradient-to-r ${industry.accent}`
                            : "bg-slate-300"
                        }`}
                      />
                      <span
                        className={`mt-1 text-[9px] font-semibold ${
                          index === 0 ? "text-slate-950" : "text-slate-400"
                        }`}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <IndustryDetailPanel
          industry={industry}
          title="App activity"
          items={industry.features}
        />
      </motion.div>
    </div>
  );
}

function IndustryCrmMockup({ industry }: { industry: IndustryItem }) {
  const Icon = industry.icon;
  const screen = industryScreens[industry.slug];

  return (
    <div className="relative hidden min-h-[420px] items-center justify-center xl:flex">
      <div
        className={`absolute h-[360px] w-[610px] rounded-full bg-gradient-to-br ${industry.accent} opacity-[0.11] blur-3xl`}
      />

      <motion.div
        key={`crm-${industry.slug}`}
        initial={{ opacity: 0, y: 18, rotateX: -8 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.42, ease: "easeOut" }}
        className="relative w-full max-w-[575px]"
      >
        <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_32px_95px_rgba(15,23,42,0.16)] dark:border-white/10 dark:bg-slate-950">
          <div className="grid min-h-[400px] grid-cols-[112px_1fr]">
            <aside className="border-r border-slate-100 bg-slate-50 p-3 dark:border-white/10 dark:bg-white/5">
              <div className="mb-4 flex items-center gap-2">
                <span
                  className={`grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-r ${industry.accent} text-xs font-bold text-white`}
                >
                  C
                </span>
                <span className="text-[11px] font-semibold text-slate-950 dark:text-white">
                  CRM
                </span>
              </div>

              {["Leads", "Pipeline", "Tasks", "Reports"].map((item, index) => (
                <div
                  key={item}
                  className={`mb-2 rounded-xl px-2.5 py-2 text-[10px] font-semibold ${
                    index === 0
                      ? "bg-blue-600 text-white"
                      : "text-slate-500 dark:text-slate-400"
                  }`}
                >
                  {item}
                </div>
              ))}
            </aside>

            <div className="p-4">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#145cb7] dark:text-cyan-200">
                    {industry.name} CRM
                  </p>
                  <h4 className="mt-1 text-xl font-semibold tracking-[-0.04em] text-slate-950 dark:text-white">
                    Operating pipeline
                  </h4>
                </div>

                <span
                  className={`grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br ${industry.accent} text-white`}
                >
                  <Icon className="h-5 w-5" />
                </span>
              </div>

              <div className="mb-4 grid grid-cols-4 gap-2">
                {[
                  [screen.primaryStat, screen.primaryStatLabel],
                  [screen.secondaryStat, screen.secondaryStatLabel],
                  [screen.thirdStat, screen.thirdStatLabel],
                  ["92%", "Follow-up"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm dark:border-white/10 dark:bg-white/7"
                  >
                    <p className="text-base font-semibold text-slate-950 dark:text-white">
                      {value}
                    </p>
                    <p className="mt-1 text-[10px] text-slate-500">{label}</p>
                  </div>
                ))}
              </div>

              <div className="grid gap-3 lg:grid-cols-[1.08fr_0.92fr]">
                <div className="rounded-2xl border border-slate-200 bg-white p-3 dark:border-white/10 dark:bg-white/7">
                  <div className="mb-3 flex items-center justify-between">
                    <p className="text-sm font-semibold text-slate-950 dark:text-white">
                      CRM stages
                    </p>
                    <LayoutDashboard className="h-4 w-4 text-blue-500" />
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    {["New", "Active", "Closed"].map((stage, index) => (
                      <div
                        key={stage}
                        className="min-h-[150px] rounded-2xl bg-slate-50 p-2 dark:bg-white/6"
                      >
                        <div className="mb-2 flex justify-between text-[10px] font-semibold text-slate-500">
                          <span>{stage}</span>
                          <span>{index === 0 ? "12" : index === 1 ? "8" : "5"}</span>
                        </div>

                        <div className="space-y-2">
                          {industry.features.slice(index, index + 2).map((item) => (
                            <div
                              key={item}
                              className="rounded-xl bg-white p-2 text-[10px] font-semibold text-slate-700 shadow-sm dark:bg-slate-950/60 dark:text-slate-200"
                            >
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-3">
                  <div className="rounded-2xl border border-slate-200 bg-white p-3 dark:border-white/10 dark:bg-white/7">
                    <p className="text-xs font-semibold text-slate-950 dark:text-white">
                      Follow-up tasks
                    </p>
                    <div className="mt-3 space-y-2">
                      {[screen.actionTitle, "Send update", "Manager review"].map(
                        (task) => (
                          <div
                            key={task}
                            className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2 text-[10px] font-semibold text-slate-600 dark:bg-white/6 dark:text-slate-300"
                          >
                            <span>{task}</span>
                            <span className="text-blue-500">Open</span>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white p-3 dark:border-white/10 dark:bg-white/7">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-semibold text-slate-950 dark:text-white">
                        Conversion
                      </p>
                      <LineChart className="h-4 w-4 text-emerald-500" />
                    </div>
                    <div className="mt-3 flex h-14 items-end gap-1.5 rounded-xl bg-slate-50 p-2 dark:bg-white/6">
                      {[42, 58, 49, 72, 64, 88].map((height, index) => (
                        <span
                          key={index}
                          className={`flex-1 rounded-t-md bg-gradient-to-t ${industry.accent}`}
                          style={{ height: `${height}%` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <IndustryDetailPanel
          industry={industry}
          title="CRM modules"
          items={["Lead capture", "Follow-ups", "Reports"]}
        />
      </motion.div>
    </div>
  );
}

function IndustrySaasMockup({ industry }: { industry: IndustryItem }) {
  const Icon = industry.icon;
  const screen = industryScreens[industry.slug];

  return (
    <div className="relative hidden min-h-[420px] items-center justify-center xl:flex">
      <div
        className={`absolute h-[360px] w-[610px] rounded-full bg-gradient-to-br ${industry.accent} opacity-[0.11] blur-3xl`}
      />

      <motion.div
        key={`saas-${industry.slug}`}
        initial={{ opacity: 0, y: 18, rotateX: -8 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.42, ease: "easeOut" }}
        className="relative w-full max-w-[575px]"
      >
        <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_32px_95px_rgba(15,23,42,0.16)] dark:border-white/10 dark:bg-slate-950">
          <div className="grid min-h-[400px] grid-cols-[124px_1fr]">
            <aside className="border-r border-slate-100 bg-slate-50 p-3 dark:border-white/10 dark:bg-white/5">
              <div className="mb-4 flex items-center gap-2">
                <span
                  className={`grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-r ${industry.accent} text-xs font-bold text-white`}
                >
                  S
                </span>
                <span className="text-[11px] font-semibold text-slate-950 dark:text-white">
                  SaaS OS
                </span>
              </div>

              {["Overview", "Users", "Workflow", "Billing", "Reports"].map(
                (item, index) => (
                  <div
                    key={item}
                    className={`mb-2 rounded-xl px-2.5 py-2 text-[10px] font-semibold ${
                      index === 0
                        ? "bg-blue-600 text-white"
                        : "text-slate-500 dark:text-slate-400"
                    }`}
                  >
                    {item}
                  </div>
                )
              )}
            </aside>

            <div className="p-4">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#145cb7] dark:text-cyan-200">
                    {industry.name} SaaS Platform
                  </p>
                  <h4 className="mt-1 text-xl font-semibold tracking-[-0.04em] text-slate-950 dark:text-white">
                    Multi-user admin system
                  </h4>
                </div>

                <span
                  className={`grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br ${industry.accent} text-white`}
                >
                  <Icon className="h-5 w-5" />
                </span>
              </div>

              <div className="mb-4 grid grid-cols-4 gap-2">
                {[
                  [screen.primaryStat, screen.primaryStatLabel],
                  [screen.secondaryStat, screen.secondaryStatLabel],
                  [screen.thirdStat, screen.thirdStatLabel],
                  ["99%", "Uptime"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm dark:border-white/10 dark:bg-white/7"
                  >
                    <p className="text-base font-semibold text-slate-950 dark:text-white">
                      {value}
                    </p>
                    <p className="mt-1 text-[10px] text-slate-500">{label}</p>
                  </div>
                ))}
              </div>

              <div className="grid gap-3 lg:grid-cols-[1fr_0.92fr]">
                <div className="rounded-2xl border border-slate-200 bg-white p-3 dark:border-white/10 dark:bg-white/7">
                  <div className="mb-3 flex items-center justify-between">
                    <p className="text-sm font-semibold text-slate-950 dark:text-white">
                      Platform modules
                    </p>
                    <Database className="h-4 w-4 text-blue-500" />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {industry.features.slice(0, 4).map((feature, index) => (
                      <div
                        key={feature}
                        className="rounded-2xl bg-slate-50 p-3 dark:bg-white/6"
                      >
                        <span
                          className={`grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br ${industry.accent} text-[10px] font-semibold text-white`}
                        >
                          {index + 1}
                        </span>
                        <p className="mt-3 text-xs font-semibold text-slate-700 dark:text-slate-200">
                          {feature}
                        </p>
                        <p className="mt-1 text-[10px] text-slate-400">
                          Admin-ready
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-3">
                  <div className="rounded-2xl border border-slate-200 bg-white p-3 dark:border-white/10 dark:bg-white/7">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-semibold text-slate-950 dark:text-white">
                        Roles & access
                      </p>
                      <Lock className="h-4 w-4 text-emerald-500" />
                    </div>

                    <div className="mt-3 space-y-2">
                      {["Owner", "Manager", "User"].map((role, index) => (
                        <div
                          key={role}
                          className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2 text-[10px] font-semibold dark:bg-white/6"
                        >
                          <span className="text-slate-600 dark:text-slate-300">
                            {role}
                          </span>
                          <span
                            className={
                              index === 0 ? "text-violet-500" : "text-blue-500"
                            }
                          >
                            {index === 0 ? "Full" : "Limited"}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white p-3 dark:border-white/10 dark:bg-white/7">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-semibold text-slate-950 dark:text-white">
                        Launch state
                      </p>
                      <Rocket className="h-4 w-4 text-orange-500" />
                    </div>
                    <div className="mt-3 h-2 rounded-full bg-slate-100 dark:bg-white/10">
                      <div
                        className={`h-full w-[78%] rounded-full bg-gradient-to-r ${industry.accent}`}
                      />
                    </div>
                    <p className="mt-2 text-[10px] font-semibold text-slate-500">
                      MVP → scale-ready platform
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function SolutionPreview({
  industry,
  type,
}: {
  industry: IndustryItem;
  type: SolutionType;
}) {
  if (type === "website") {
    return <IndustryWebsiteMockup industry={industry} />;
  }

  if (type === "mobile-app") {
    return <IndustryMobileMockup industry={industry} />;
  }

  if (type === "crm") {
    return <IndustryCrmMockup industry={industry} />;
  }

  return <IndustrySaasMockup industry={industry} />;
}

export default function ServiceUseCases({ service }: ServiceUseCasesProps) {
  const type = getSolutionType(service.id);
  const [activeSlug, setActiveSlug] = useState<ScreenType>("healthcare");

  const activeIndustry = useMemo(
    () =>
      industries.find((industry) => industry.slug === activeSlug) ??
      industries[0],
    [activeSlug]
  );

  const ActiveIcon = activeIndustry.icon;
  const route = getRoute(activeIndustry, type);

  return (
    <section className="relative overflow-hidden py-8 lg:py-10">
      <div className="pointer-events-none absolute inset-x-0 top-8 h-[460px] bg-[radial-gradient(circle_at_12%_18%,rgba(14,165,233,0.09),transparent_34%),radial-gradient(circle_at_82%_18%,rgba(124,58,237,0.08),transparent_34%)] dark:bg-[radial-gradient(circle_at_12%_18%,rgba(56,189,248,0.10),transparent_34%),radial-gradient(circle_at_82%_18%,rgba(139,92,246,0.10),transparent_34%)]" />

      <div className="relative mx-auto w-full max-w-[min(92vw,1440px)] px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <div className="grid gap-5 lg:grid-cols-[310px_1fr] lg:items-start">
          <aside className="relative self-start rounded-[1.6rem] border border-slate-200 bg-white/84 p-3.5 shadow-[0_20px_55px_rgba(15,23,42,0.07)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/6 dark:shadow-[0_22px_65px_rgba(0,0,0,0.22)]">
            <div className="mb-3 flex items-start justify-between gap-3 border-b border-slate-100 pb-3 dark:border-white/10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#145cb7] dark:text-cyan-200">
                  Use Cases
                </p>
                <p className="mt-1 text-xs font-normal text-slate-500 dark:text-slate-400">
                  Select industry
                </p>
              </div>

              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-2xl border border-slate-200 bg-slate-50 text-xs font-semibold text-slate-500 dark:border-white/10 dark:bg-white/6 dark:text-slate-300">
                {industries.length}
              </span>
            </div>

            <div className="max-h-[460px] space-y-1.5 overflow-y-auto pr-1 [scrollbar-width:thin] [scrollbar-color:rgba(14,165,233,0.35)_transparent]">
              {industries.map((industry) => {
                const Icon = industry.icon;
                const isActive = industry.slug === activeSlug;

                return (
                  <button
                    key={industry.slug}
                    type="button"
                    onClick={() => setActiveSlug(industry.slug)}
                    aria-pressed={isActive}
                    className={`group flex w-full items-center gap-2.5 rounded-[1.1rem] border p-2.5 text-left transition ${
                      isActive
                        ? "border-sky-200 bg-sky-50/80 shadow-[0_12px_28px_rgba(14,165,233,0.11)] dark:border-cyan-300/20 dark:bg-cyan-300/10"
                        : "border-transparent hover:border-slate-200 hover:bg-slate-50 dark:hover:border-white/10 dark:hover:bg-white/6"
                    }`}
                  >
                    <span
                      className={`grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${industry.accent} text-white shadow-[0_12px_26px_rgba(15,23,42,0.12)]`}
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-semibold text-slate-950 dark:text-white">
                        {industry.name} {getSolutionLabel(type)}
                      </span>
                      <span className="mt-0.5 line-clamp-1 block text-xs leading-5 text-slate-500 dark:text-slate-400">
                        {industry.description[type]}
                      </span>
                    </span>

                    <ArrowRight
                      className={`h-4 w-4 shrink-0 transition ${
                        isActive
                          ? "translate-x-0 text-[#145cb7] dark:text-cyan-200"
                          : "text-slate-400 group-hover:translate-x-1"
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                );
              })}
            </div>
          </aside>

          <div className="relative min-h-[590px] overflow-hidden rounded-[1.8rem] border border-slate-200 bg-white/88 p-5 shadow-[0_24px_75px_rgba(15,23,42,0.08)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/6 dark:shadow-[0_28px_90px_rgba(0,0,0,0.24)] lg:p-6 xl:min-h-[560px]">
            <div
              className={`pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gradient-to-br ${activeIndustry.accent} opacity-[0.10] blur-3xl`}
            />
            <div className="pointer-events-none absolute bottom-0 right-0 hidden h-full w-[44%] bg-gradient-to-l from-sky-50/70 to-transparent dark:from-sky-500/5 xl:block" />

            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeIndustry.slug}-${type}`}
                initial={{ opacity: 0, y: 14, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -10, filter: "blur(8px)" }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="relative grid gap-6 xl:grid-cols-[0.8fr_1fr] xl:items-center"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <span
                      className={`grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br ${activeIndustry.accent} text-white shadow-[0_16px_36px_rgba(14,165,233,0.18)]`}
                    >
                      <ActiveIcon className="h-5 w-5" aria-hidden="true" />
                    </span>

                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#145cb7] dark:text-cyan-200">
                      {activeIndustry.name} {getSolutionLabel(type)} Use Case
                    </p>
                  </div>

                  <h3 className="mt-5 max-w-xl text-3xl font-semibold leading-[1.1] tracking-[-0.045em] text-slate-950 antialiased dark:text-white lg:text-4xl">
                    {activeIndustry.title}
                  </h3>

                  <p className="mt-4 max-w-2xl text-sm font-normal leading-7 text-slate-600 antialiased dark:text-slate-300 lg:text-base">
                    {activeIndustry.description[type]}
                  </p>

                  <div className="mt-5 rounded-[1.35rem] border border-slate-200 bg-slate-50/80 p-4 dark:border-white/10 dark:bg-white/6">
                    <div className="flex gap-3">
                      <span
                        className={`grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${activeIndustry.accent} text-white`}
                      >
                        <PackageCheck className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                          Business outcome
                        </p>
                        <p className="mt-2 text-sm font-normal leading-6 text-slate-600 dark:text-slate-300">
                          {activeIndustry.outcome}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                    {activeIndustry.features.map((feature, index) => {
                      const icons = [
                        CalendarCheck,
                        UsersRound,
                        Activity,
                        CreditCard,
                        ShieldCheck,
                        BookOpen,
                      ];
                      const FeatureIcon = icons[index % icons.length];

                      return (
                        <div
                          key={feature}
                          className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 py-2.5 text-sm font-medium text-slate-600 shadow-sm dark:border-white/10 dark:bg-white/6 dark:text-slate-300"
                        >
                          <FeatureIcon className="h-4 w-4 shrink-0 text-[#145cb7] dark:text-cyan-200" />
                          <span className="line-clamp-2">{feature}</span>
                        </div>
                      );
                    })}
                  </div>

                  <Link
                    href={route}
                    className={`mt-6 inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r ${service.accent} px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_38px_rgba(37,99,235,0.18)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_48px_rgba(37,99,235,0.26)]`}
                  >
                    View full page
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                <SolutionPreview industry={activeIndustry} type={type} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}