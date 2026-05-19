"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import type { ServiceItem } from "@/data/services";
import {
  Activity,
  ArrowRight,
  BarChart3,
  BedDouble,
  BookOpen,
  CalendarCheck,
  Car,
  CheckCircle2,
  CreditCard,
  Dumbbell,
  Factory,
  FileCheck2,
  GraduationCap,
  HeartPulse,
  Home,
  Hotel,
  MapPinned,
  PackageCheck,
  Plane,
  Route,
  ShieldCheck,
  ShoppingBag,
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

type IndustryAppScreen = {
  appTitle: string;
  heroTitle: string;
  heroSubtext: string;
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

const industryScreens: Record<ScreenType, IndustryAppScreen> = {
  healthcare: {
    appTitle: "Health App",
    heroTitle: "Patient care dashboard",
    heroSubtext: "Appointments, reminders, and reports in one patient app.",
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
    heroSubtext: "Inventory, approvals, and floor updates for production teams.",
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
    heroSubtext: "Attendance, fees, notices, and parent updates in one app.",
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
    heroSubtext: "Listings, site visits, saved leads, and deal stages.",
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
    heroSubtext: "Orders, tables, loyalty, delivery, and kitchen updates.",
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
    heroSubtext: "Products, stock, orders, loyalty, and customer insights.",
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
    heroSubtext: "Routes, drivers, proof of delivery, and customer alerts.",
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
    heroSubtext: "Classes, trainers, progress, renewals, and reminders.",
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
    heroSubtext: "Bookings, check-ins, room service, payments, and reviews.",
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
    heroSubtext: "Applications, documents, approvals, payments, and compliance.",
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
    heroSubtext: "Packages, bookings, itineraries, reminders, and support.",
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
    heroSubtext: "Test drives, service bookings, reminders, and customer records.",
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

function IndustrySpecificScreen({
  industry,
  screen,
}: {
  industry: IndustryItem;
  screen: IndustryAppScreen;
}) {
  const chipClass =
    "rounded-2xl bg-slate-50 px-3 py-2 text-[11px] font-semibold text-slate-600";
  const dotClass = `h-2 w-2 rounded-full bg-gradient-to-r ${industry.accent}`;

  if (industry.slug === "healthcare") {
    return (
      <div className="mt-3 rounded-[1.35rem] bg-white p-4 shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-slate-950">
            Appointment flow
          </p>
          <CalendarCheck className="h-4 w-4 text-[#145cb7]" />
        </div>
        <div className="mt-3 space-y-2">
          {["10:30 AM - Consultation", "2:00 PM - Lab report", "4:30 PM - Follow-up"].map(
            (item) => (
              <div
                key={item}
                className="flex items-center gap-2 rounded-2xl bg-slate-50 px-3 py-2"
              >
                <span className={dotClass} />
                <span className="truncate text-xs font-semibold text-slate-700">
                  {item}
                </span>
              </div>
            )
          )}
        </div>
      </div>
    );
  }

  if (industry.slug === "manufacturing") {
    return (
      <div className="mt-3 rounded-[1.35rem] bg-white p-4 shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-slate-950">
            Production board
          </p>
          <Factory className="h-4 w-4 text-emerald-600" />
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2">
          {[
            ["Line A", "Running"],
            ["Line B", "QC"],
            ["Stock", "74%"],
            ["Machine", "A7"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-2xl bg-slate-50 p-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                {label}
              </p>
              <p className="mt-1 text-xs font-semibold text-slate-800">
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (industry.slug === "education") {
    return (
      <div className="mt-3 rounded-[1.35rem] bg-white p-4 shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-slate-950">
            Class dashboard
          </p>
          <GraduationCap className="h-4 w-4 text-violet-600" />
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {[
            ["Attendance", "86%"],
            ["Fees", "5 due"],
            ["Notices", "12"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-2xl bg-slate-50 p-3">
              <p className="text-sm font-semibold text-slate-950">{value}</p>
              <p className="mt-1 text-[10px] text-slate-500">{label}</p>
            </div>
          ))}
        </div>
        <div className="mt-3 rounded-2xl bg-slate-50 p-3 text-xs font-semibold text-slate-700">
          Assignment: Math worksheet due today
        </div>
      </div>
    );
  }

  if (industry.slug === "real-estate") {
    return (
      <div className="mt-3 rounded-[1.35rem] bg-white p-4 shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-slate-950">
            Property cards
          </p>
          <Home className="h-4 w-4 text-orange-500" />
        </div>
        <div className="mt-3 space-y-2">
          {["3 BHK luxury flat", "Site visit scheduled", "Hot buyer follow-up"].map(
            (item) => (
              <div key={item} className="rounded-2xl bg-slate-50 p-3">
                <p className="truncate text-xs font-semibold text-slate-700">
                  {item}
                </p>
                <div className="mt-2 h-1.5 rounded-full bg-slate-200">
                  <div
                    className={`h-full w-[72%] rounded-full bg-gradient-to-r ${industry.accent}`}
                  />
                </div>
              </div>
            )
          )}
        </div>
      </div>
    );
  }

  if (industry.slug === "restaurant") {
    return (
      <div className="mt-3 rounded-[1.35rem] bg-white p-4 shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-slate-950">Kitchen queue</p>
          <Utensils className="h-4 w-4 text-rose-500" />
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {["Dine-in", "Delivery", "Pickup"].map((item, index) => (
            <div key={item} className="rounded-2xl bg-slate-50 p-3">
              <p className="text-sm font-semibold text-slate-950">
                {index === 0 ? "12" : index === 1 ? "8" : "5"}
              </p>
              <p className="mt-1 text-[10px] text-slate-500">{item}</p>
            </div>
          ))}
        </div>
        <div className="mt-3 rounded-2xl bg-slate-50 p-3 text-xs font-semibold text-slate-700">
          Table 06 · Pasta order preparing
        </div>
      </div>
    );
  }

  if (industry.slug === "retail") {
    return (
      <div className="mt-3 rounded-[1.35rem] bg-white p-4 shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-slate-950">Store shelf</p>
          <ShoppingBag className="h-4 w-4 text-fuchsia-500" />
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {["New", "Low", "Sale"].map((item, index) => (
            <div key={item} className="rounded-2xl bg-slate-50 p-2.5">
              <div
                className={`h-8 rounded-xl bg-gradient-to-br ${industry.accent}`}
              />
              <p className="mt-2 text-[10px] font-semibold text-slate-600">
                {item}
              </p>
              <p className="text-[10px] text-slate-400">
                {index === 0 ? "54" : index === 1 ? "19" : "8"} items
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (industry.slug === "logistics") {
    return (
      <div className="mt-3 rounded-[1.35rem] bg-white p-4 shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-slate-950">Live route</p>
          <Route className="h-4 w-4 text-blue-600" />
        </div>
        <div className="relative mt-3 h-28 overflow-hidden rounded-2xl bg-sky-50">
          <div className="absolute left-5 top-8 h-1 w-40 rotate-[-10deg] rounded-full bg-sky-200" />
          <div className="absolute left-12 top-14 h-1 w-32 rotate-[16deg] rounded-full bg-sky-200" />
          <span
            className={`absolute left-10 top-9 h-5 w-5 rounded-full bg-gradient-to-br ${industry.accent} ring-4 ring-white`}
          />
          <span className="absolute right-12 top-16 h-5 w-5 rounded-full bg-emerald-500 ring-4 ring-white" />
          <MapPinned className="absolute bottom-4 left-4 h-4 w-4 text-blue-600" />
          <p className="absolute bottom-4 left-10 text-xs font-semibold text-slate-700">
            ETA 22 min
          </p>
        </div>
      </div>
    );
  }

  if (industry.slug === "fitness") {
    return (
      <div className="mt-3 rounded-[1.35rem] bg-white p-4 shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-slate-950">Training plan</p>
          <Dumbbell className="h-4 w-4 text-emerald-500" />
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {["Cardio", "Strength", "Yoga"].map((item, index) => (
            <div key={item} className="rounded-2xl bg-slate-50 p-3 text-center">
              <div
                className={`mx-auto grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br ${industry.accent} text-xs font-semibold text-white`}
              >
                {index === 0 ? "26" : index === 1 ? "12" : "4"}
              </div>
              <p className="mt-2 text-[10px] font-semibold text-slate-600">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (industry.slug === "hospitality") {
    return (
      <div className="mt-3 rounded-[1.35rem] bg-white p-4 shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-slate-950">Room service</p>
          <BedDouble className="h-4 w-4 text-cyan-600" />
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2">
          {["Room 204", "Check-in", "Food request", "Review"].map((item) => (
            <div key={item} className="rounded-2xl bg-slate-50 p-3">
              <p className="text-xs font-semibold text-slate-700">{item}</p>
              <p className="mt-1 text-[10px] text-slate-400">Active</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (industry.slug === "finance") {
    return (
      <div className="mt-3 rounded-[1.35rem] bg-white p-4 shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-slate-950">Approval desk</p>
          <FileCheck2 className="h-4 w-4 text-blue-700" />
        </div>
        <div className="mt-3 space-y-2">
          {["KYC verified", "Income proof pending", "Risk score low"].map(
            (item) => (
              <div key={item} className="flex items-center gap-2 rounded-2xl bg-slate-50 px-3 py-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                <span className="truncate text-xs font-semibold text-slate-700">
                  {item}
                </span>
              </div>
            )
          )}
        </div>
      </div>
    );
  }

  if (industry.slug === "travel") {
    return (
      <div className="mt-3 rounded-[1.35rem] bg-white p-4 shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-slate-950">Trip timeline</p>
          <Plane className="h-4 w-4 text-sky-600" />
        </div>
        <div className="mt-3 space-y-2">
          {["Delhi pickup", "Manali hotel", "Local sightseeing"].map((item) => (
            <div key={item} className={chipClass}>
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-sky-500" />
              {item}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="mt-3 rounded-[1.35rem] bg-white p-4 shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-slate-950">Service desk</p>
        <Car className="h-4 w-4 text-red-500" />
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2">
        {["Test drive", "Service due", "Hot lead", "Payment"].map((item) => (
          <div key={item} className="rounded-2xl bg-slate-50 p-3">
            <p className="text-xs font-semibold text-slate-700">{item}</p>
            <p className="mt-1 text-[10px] text-slate-400">Live</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function IndustryMobileMockup({ industry }: { industry: IndustryItem }) {
  const IndustryIcon = industry.icon;
  const screen = industryScreens[industry.slug];

  return (
    <div className="relative hidden min-h-[420px] items-center justify-center xl:flex">
      <div
        className={`absolute h-[370px] w-[580px] rounded-full bg-gradient-to-br ${industry.accent} opacity-[0.11] blur-3xl`}
      />

      <motion.div
        key={industry.slug}
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
              <IndustryIcon className="h-4 w-4" aria-hidden="true" />
            </span>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                Mini screen
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

          <div className="mt-3 grid grid-cols-2 gap-2">
            <div className="rounded-xl bg-slate-50 p-2.5 dark:bg-white/8">
              <p className="text-base font-semibold text-slate-950 dark:text-white">
                {screen.primaryStat}
              </p>
              <p className="text-[10px] text-slate-500">
                {screen.primaryStatLabel}
              </p>
            </div>
            <div className="rounded-xl bg-slate-50 p-2.5 dark:bg-white/8">
              <p className="text-base font-semibold text-slate-950 dark:text-white">
                {screen.secondaryStat}
              </p>
              <p className="text-[10px] text-slate-500">
                {screen.secondaryStatLabel}
              </p>
            </div>
          </div>
        </div>

        <div className="absolute -right-28 bottom-12 w-[198px] rotate-6 rounded-[1.6rem] border border-slate-200 bg-white/92 p-4 shadow-[0_26px_65px_rgba(15,23,42,0.13)] backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/55">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#145cb7] dark:text-cyan-200">
            Activity screen
          </p>

          <div className="mt-3 space-y-2">
            {industry.features.slice(0, 3).map((feature, index) => (
              <div
                key={feature}
                className="flex items-center gap-2 rounded-xl bg-slate-50 px-2.5 py-2 dark:bg-white/8"
              >
                <span
                  className={`grid h-6 w-6 shrink-0 place-items-center rounded-lg bg-gradient-to-br ${industry.accent} text-[10px] font-semibold text-white`}
                >
                  {index + 1}
                </span>
                <p className="truncate text-xs font-medium text-slate-600 dark:text-slate-300">
                  {feature}
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
                  <IndustryIcon className="h-5 w-5" aria-hidden="true" />
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
                  <div
                    className={`rounded-2xl bg-gradient-to-br ${industry.accent} p-3 text-white`}
                  >
                    <p className="text-lg font-semibold">
                      {screen.primaryStat}
                    </p>
                    <p className="mt-1 text-[10px] font-medium text-white/80">
                      {screen.primaryStatLabel}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-3">
                    <p className="text-lg font-semibold text-slate-950">
                      {screen.secondaryStat}
                    </p>
                    <p className="mt-1 text-[10px] font-medium text-slate-500">
                      {screen.secondaryStatLabel}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-3">
                    <p className="text-lg font-semibold text-slate-950">
                      {screen.thirdStat}
                    </p>
                    <p className="mt-1 text-[10px] font-medium text-slate-500">
                      {screen.thirdStatLabel}
                    </p>
                  </div>
                </div>
              </div>

              <IndustrySpecificScreen industry={industry} screen={screen} />

              <div className="mt-3 grid grid-cols-2 gap-2">
                <div className="rounded-[1.15rem] bg-white p-3 shadow-[0_10px_24px_rgba(15,23,42,0.07)]">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                    {screen.nextCardTitle}
                  </p>
                  <p className="mt-1 truncate text-xs font-semibold text-slate-700">
                    {screen.nextCardValue}
                  </p>
                </div>

                <div className="rounded-[1.15rem] bg-white p-3 shadow-[0_10px_24px_rgba(15,23,42,0.07)]">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                    {screen.reminderTitle}
                  </p>
                  <p className="mt-1 truncate text-xs font-semibold text-slate-700">
                    {screen.reminderValue}
                  </p>
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
  if (type === "mobile-app") {
    return <IndustryMobileMockup industry={industry} />;
  }

  return (
    <div className="relative hidden min-h-[330px] items-center justify-center xl:flex">
      <div className="absolute h-[240px] w-[460px] rounded-full bg-blue-100/70 blur-3xl dark:bg-blue-500/10" />

      <div className="relative w-full max-w-[500px] overflow-hidden rounded-[1.7rem] border border-slate-200 bg-white shadow-[0_26px_80px_rgba(15,23,42,0.13)] dark:border-white/10 dark:bg-slate-950">
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-3.5 dark:border-white/10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#145cb7] dark:text-cyan-200">
              {getSolutionLabel(type)} Preview
            </p>
            <h4 className="mt-1 text-lg font-semibold text-slate-950 dark:text-white">
              {industry.name} dashboard
            </h4>
          </div>
          <span
            className={`grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br ${industry.accent} text-white`}
          >
            <BarChart3 className="h-5 w-5" />
          </span>
        </div>

        <div className="grid gap-3 p-4">
          <div
            className={`rounded-[1.35rem] bg-gradient-to-br ${industry.accent} p-4 text-white`}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em]">
              Primary workflow
            </p>
            <h5 className="mt-2 text-xl font-semibold">
              {industry.features[0]}
            </h5>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {industry.features.slice(1, 4).map((feature) => (
              <div
                key={feature}
                className="rounded-2xl border border-slate-100 bg-slate-50 p-3 dark:border-white/10 dark:bg-white/6"
              >
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                  {feature}
                </p>
                <p className="mt-1 text-xs text-slate-400">Connected</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-slate-100 bg-white p-3 dark:border-white/10 dark:bg-white/6">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                Outcome tracking
              </p>
              <CheckCircle2 className="h-5 w-5 text-emerald-500" />
            </div>
            <div className="mt-3 h-2 rounded-full bg-slate-100 dark:bg-white/10">
              <div
                className={`h-full w-[74%] rounded-full bg-gradient-to-r ${industry.accent}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
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
                        {industry.name} Use Case
                      </span>
                      <span className="mt-0.5 line-clamp-1 block text-xs leading-5 text-slate-500 dark:text-slate-400">
                        {industry.summary}
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
                      {activeIndustry.name} Use Case
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