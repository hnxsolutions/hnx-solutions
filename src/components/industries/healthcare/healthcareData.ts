import type { LucideIcon } from "lucide-react";
import {
  Activity,
  BarChart3,
  Bell,
  Bot,
  Calendar,
  CalendarCheck,
  CheckCircle2,
  ClipboardCheck,
  ClipboardList,
  Clock,
  Database,
  FileText,
  Folder,
  Globe,
  HeartPulse,
  LayoutDashboard,
  LineChart,
  LockKeyhole,
  MessageSquare,
  MonitorSmartphone,
  Network,
  PhoneCall,
  PieChart,
  Rocket,
  Search,
  ShieldCheck,
  Smartphone,
  Stethoscope,
  TrendingUp,
  User,
  UserCheck,
  Users,
  Video,
  Wallet,
  Workflow,
} from "lucide-react";

export const healthcareSolutionSlugs = [
  "website",
  "mobile-app",
  "crm",
  "patient-portal",
  "full-suite",
] as const;

const healthcareSelectableSolutionSlugs = [
  "website",
  "mobile-app",
  "crm",
  "patient-portal",
] as const;

export type HealthcareSolutionSlug = (typeof healthcareSolutionSlugs)[number];

export type HealthcareCardItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type HealthcareMetric = HealthcareCardItem & {
  label: string;
  value: string;
  change?: string;
  tone?: "blue" | "cyan" | "violet" | "emerald" | "amber";
};

export type HealthcareSolutionData = {
  slug: HealthcareSolutionSlug;
  href: string;
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  selectorTitle: string;
  selectorDescription: string;
  icon: LucideIcon;
  visualType:
    | "website"
    | "mobile"
    | "crm"
    | "portal"
    | "automation"
    | "dashboard"
    | "full-suite";
  imageUrl: string;
  problems: HealthcareCardItem[];
  features: HealthcareCardItem[];
  flowTitle: string;
  flowSteps: HealthcareCardItem[];
  metrics: HealthcareMetric[];
  previewCards?: Array<HealthcareCardItem & { value: string }>;
  benefits: HealthcareCardItem[];
  valuePoints?: string[];
  featureTitle: string;
  dashboardTitle: string;
  dashboardDescription: string;
  ctaLabel: string;
  ctaDescription: string;
  isBestValue?: boolean;
};

export const healthcareSolutions: Record<
  HealthcareSolutionSlug,
  HealthcareSolutionData
> = {
  website: {
    slug: "website",
    href: "/industries/healthcare/website",
    eyebrow: "Healthcare Website",
    title: "Healthcare Website Solutions",
    highlight: "Website Solutions",
    description:
      "Modern healthcare websites designed to build trust, generate appointments, and support patient journeys.",
    selectorTitle: "Website",
    selectorDescription:
      "A conversion-focused medical website with service pages, doctor profiles, booking flows, SEO structure, and analytics.",
    icon: Globe,
    visualType: "website",
    imageUrl:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1400&q=82",
    problems: [
      {
        title: "Weak online trust",
        description:
          "Outdated pages and thin credibility signals make patients hesitate before contacting your practice.",
        icon: ShieldCheck,
      },
      {
        title: "No appointment conversion flow",
        description:
          "Visitors do not know what to do next, so qualified demand leaks before it becomes a booking.",
        icon: CalendarCheck,
      },
      {
        title: "Poor visibility for healthcare services",
        description:
          "Important departments and treatments are difficult to find, compare, or understand online.",
        icon: Search,
      },
    ],
    features: [
      {
        title: "Service Pages",
        description:
          "Clear, SEO-friendly pages for each treatment, clinic service, or specialty.",
        icon: FileText,
      },
      {
        title: "Doctor Profiles",
        description:
          "Profile pages that show credentials, experience, availability, and trust markers.",
        icon: Stethoscope,
      },
      {
        title: "Appointment Booking",
        description:
          "A guided request flow that helps visitors pick the right service and submit quickly.",
        icon: CalendarCheck,
      },
      {
        title: "Patient Inquiry Forms",
        description:
          "Structured forms for symptoms, preferred time, service interest, and follow-up details.",
        icon: ClipboardList,
      },
      {
        title: "SEO Structure",
        description:
          "Search-ready URLs, page hierarchy, metadata, and service content planning.",
        icon: Search,
      },
      {
        title: "Analytics Setup",
        description:
          "Track visitors, appointment leads, conversion rate, and top service demand.",
        icon: BarChart3,
      },
    ],
    flowTitle: "Patient Conversion Flow",
    flowSteps: [
      {
        title: "Visitor",
        description: "A patient lands on a service or clinic page.",
        icon: Users,
      },
      {
        title: "Service Page",
        description: "They compare treatment details and provider context.",
        icon: FileText,
      },
      {
        title: "Trust Signals",
        description: "Reviews, doctors, facilities, and outcomes build confidence.",
        icon: ShieldCheck,
      },
      {
        title: "Appointment Request",
        description: "The visitor submits a clean inquiry or booking form.",
        icon: CalendarCheck,
      },
      {
        title: "Confirmation",
        description: "The team receives the lead and the patient gets next steps.",
        icon: CheckCircle2,
      },
    ],
    metrics: [
      {
        label: "Monthly Visitors",
        title: "Monthly Visitors",
        value: "12,540",
        change: "+23.5%",
        description: "Track service discovery and clinic demand.",
        icon: Globe,
        tone: "blue",
      },
      {
        label: "Appointment Leads",
        title: "Appointment Leads",
        value: "1,842",
        change: "+31.2%",
        description: "Measure how many visitors become inquiries.",
        icon: CalendarCheck,
        tone: "violet",
      },
      {
        label: "Conversion Rate",
        title: "Conversion Rate",
        value: "14.6%",
        change: "+28.6%",
        description: "Understand booking intent and page performance.",
        icon: PieChart,
        tone: "cyan",
      },
      {
        label: "Top Services Viewed",
        title: "Top Services Viewed",
        value: "Cardiology",
        change: "+18.2%",
        description: "See which specialties attract the most interest.",
        icon: LineChart,
        tone: "emerald",
      },
    ],
    benefits: [
      {
        title: "Trust-building",
        description: "Build credibility with strong proof, doctors, and content.",
        icon: ShieldCheck,
      },
      {
        title: "Mobile-friendly",
        description: "A smooth experience across phones, tablets, and desktops.",
        icon: Smartphone,
      },
      {
        title: "HIPAA-ready structure",
        description: "Built around privacy-aware forms, content, and workflows.",
        icon: LockKeyhole,
      },
      {
        title: "SEO-friendly",
        description: "Structured to help patients find your services in search.",
        icon: Search,
      },
    ],
    featureTitle: "What This Website Includes",
    dashboardTitle: "Website performance preview",
    dashboardDescription:
      "See how traffic, appointment demand, service interest, and conversion quality connect inside one simple reporting view.",
    ctaLabel: "Build Healthcare Website",
    ctaDescription:
      "Launch a healthcare website that builds trust, captures appointment demand, and supports every patient journey.",
  },
  "mobile-app": {
    slug: "mobile-app",
    href: "/industries/healthcare/mobile-app",
    eyebrow: "Healthcare Mobile App",
    title: "Healthcare Mobile App",
    highlight: "Mobile App",
    description:
      "Patient-focused mobile apps for appointments, reminders, records, updates, and digital care experiences.",
    selectorTitle: "Mobile App",
    selectorDescription:
      "A patient app for booking, reminders, records, teleconsultation, prescriptions, notifications, and secure access.",
    icon: Smartphone,
    visualType: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1400&q=82",
    problems: [
      {
        title: "Patients miss appointments",
        description:
          "Busy schedules and weak reminder systems lead to no-shows and lost care opportunities.",
        icon: Calendar,
      },
      {
        title: "Communication is fragmented",
        description:
          "Updates spread across calls, messages, and paper notes slow the patient experience.",
        icon: MessageSquare,
      },
      {
        title: "Records and updates are hard to access",
        description:
          "Patients struggle to find reports, prescriptions, appointment history, and care instructions.",
        icon: Folder,
      },
    ],
    features: [
      {
        title: "Appointment Booking",
        description:
          "Let patients request, schedule, and confirm visits from their phone.",
        icon: CalendarCheck,
      },
      {
        title: "Reminders & Notifications",
        description:
          "Send timely appointment, medication, report, and follow-up reminders.",
        icon: Bell,
      },
      {
        title: "Patient Records Access",
        description:
          "Give patients secure access to reports, prescriptions, and visit history.",
        icon: Folder,
      },
      {
        title: "Prescription Updates",
        description:
          "Share refill notes, dosage updates, medication instructions, and alerts.",
        icon: ClipboardCheck,
      },
      {
        title: "Teleconsultation Access",
        description:
          "Enable video consultations and post-call records from the same app.",
        icon: Video,
      },
      {
        title: "Secure Login",
        description:
          "Protect patient data with secure login, roles, and privacy-aware flows.",
        icon: LockKeyhole,
      },
    ],
    flowTitle: "App Experience Flow",
    flowSteps: [
      {
        title: "Login",
        description: "Patients securely access their account.",
        icon: User,
      },
      {
        title: "Book Appointment",
        description: "They choose the doctor, service, date, and time.",
        icon: CalendarCheck,
      },
      {
        title: "Receive Reminder",
        description: "Smart alerts reduce missed visits and confusion.",
        icon: Bell,
      },
      {
        title: "Join Consultation",
        description: "Patients connect with the care team when needed.",
        icon: Video,
      },
      {
        title: "Access Records",
        description: "Reports, prescriptions, and history stay available.",
        icon: Folder,
      },
    ],
    metrics: [
      {
        label: "Active Patients",
        title: "Active Patients",
        value: "12,540",
        change: "+23.5%",
        description: "Patients using the app and care features.",
        icon: Users,
        tone: "blue",
      },
      {
        label: "Bookings",
        title: "Bookings",
        value: "1,842",
        change: "+31.2%",
        description: "Appointments created through the app.",
        icon: CalendarCheck,
        tone: "violet",
      },
      {
        label: "Reminder Delivery",
        title: "Reminder Delivery",
        value: "98.6%",
        change: "+2.8%",
        description: "Delivered notifications across reminders and updates.",
        icon: Bell,
        tone: "cyan",
      },
      {
        label: "Engagement Rate",
        title: "Engagement Rate",
        value: "76.4%",
        change: "+12.6%",
        description: "Patients returning to manage care digitally.",
        icon: Activity,
        tone: "emerald",
      },
    ],
    benefits: [
      {
        title: "Better patient engagement",
        description: "Keep patients connected before and after visits.",
        icon: HeartPulse,
      },
      {
        title: "Fewer missed appointments",
        description: "Automated reminders help reduce no-shows.",
        icon: CalendarCheck,
      },
      {
        title: "Faster communication",
        description: "Send updates, reports, and care reminders quickly.",
        icon: MessageSquare,
      },
      {
        title: "Better care experience",
        description: "Give patients one calm, helpful digital care hub.",
        icon: ShieldCheck,
      },
    ],
    featureTitle: "What This App Includes",
    dashboardTitle: "App and admin overview",
    dashboardDescription:
      "Monitor patient activity, booking volume, reminder delivery, and care engagement from one connected admin view.",
    ctaLabel: "Build Healthcare App",
    ctaDescription:
      "Launch a patient-centered mobile app that improves communication, access, and care outcomes.",
  },
  crm: {
    slug: "crm",
    href: "/industries/healthcare/crm",
    eyebrow: "Healthcare CRM",
    title: "Healthcare CRM Solutions",
    highlight: "CRM Solutions",
    description:
      "One connected system to manage patient leads, appointments, follow-ups, care workflows, and reporting.",
    selectorTitle: "CRM",
    selectorDescription:
      "A healthcare CRM for patient leads, appointment pipelines, follow-ups, staff coordination, billing, and reporting.",
    icon: Network,
    visualType: "crm",
    imageUrl:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=82",
    problems: [
      {
        title: "Scattered patient data",
        description:
          "Patient inquiries live in spreadsheets, notebooks, WhatsApp, call logs, and disconnected systems.",
        icon: Database,
      },
      {
        title: "Missed follow-ups",
        description:
          "Important callbacks and post-visit touchpoints slip through the cracks.",
        icon: Bell,
      },
      {
        title: "No clear appointment workflow",
        description:
          "Manual scheduling makes it hard to track booking status, owners, and next actions.",
        icon: Calendar,
      },
    ],
    features: [
      {
        title: "Patient Lead Management",
        description:
          "Capture, qualify, and track new patients from web, calls, campaigns, and referrals.",
        icon: Users,
      },
      {
        title: "Appointment Pipeline",
        description:
          "Move each patient through lead, contacted, qualified, booked, visit, and follow-up stages.",
        icon: Workflow,
      },
      {
        title: "Follow-up Automation",
        description:
          "Automate reminders, tasks, and patient touchpoints so follow-ups are not missed.",
        icon: Bell,
      },
      {
        title: "Doctor / Staff Coordination",
        description:
          "Assign work, share notes, and keep care teams aligned on every patient journey.",
        icon: UserCheck,
      },
      {
        title: "Billing Workflow",
        description:
          "Track payments, invoices, billing updates, and handoffs without manual confusion.",
        icon: Wallet,
      },
      {
        title: "Reports & Dashboards",
        description:
          "See appointments, sources, revenue, follow-ups, and staff productivity in real time.",
        icon: LayoutDashboard,
      },
    ],
    flowTitle: "CRM Workflow Preview",
    flowSteps: [
      {
        title: "Lead Capture",
        description: "Website, calls, walk-ins, referrals, and campaigns enter CRM.",
        icon: Users,
      },
      {
        title: "Appointment Booking",
        description: "Staff schedule and confirm the visit.",
        icon: CalendarCheck,
      },
      {
        title: "Reminder",
        description: "SMS, email, or WhatsApp reminders reduce no-shows.",
        icon: Bell,
      },
      {
        title: "Visit",
        description: "Patient consultation and care notes are recorded.",
        icon: Stethoscope,
      },
      {
        title: "Follow-up",
        description: "Post-visit reminders and tasks keep care moving.",
        icon: PhoneCall,
      },
      {
        title: "Reporting",
        description: "Track outcomes, revenue, and team performance.",
        icon: BarChart3,
      },
    ],
    metrics: [
      {
        label: "New Patient Leads",
        title: "New Patient Leads",
        value: "1,248",
        change: "+22.6%",
        description: "New inquiries captured across channels.",
        icon: Users,
        tone: "blue",
      },
      {
        label: "Appointments Scheduled",
        title: "Appointments Scheduled",
        value: "856",
        change: "+18.7%",
        description: "Appointments booked from active lead pipelines.",
        icon: CalendarCheck,
        tone: "cyan",
      },
      {
        label: "Follow-ups Pending",
        title: "Follow-ups Pending",
        value: "642",
        change: "+15.4%",
        description: "Open tasks waiting for staff action.",
        icon: Bell,
        tone: "violet",
      },
      {
        label: "Monthly Revenue",
        title: "Monthly Revenue",
        value: "$245,650",
        change: "+28.3%",
        description: "Tracked revenue tied to appointments and billing.",
        icon: Wallet,
        tone: "emerald",
      },
    ],
    benefits: [
      {
        title: "Better control",
        description: "Centralize patient data, status, owners, and next steps.",
        icon: ShieldCheck,
      },
      {
        title: "Less manual work",
        description: "Automate repetitive tasks and reduce admin load.",
        icon: Clock,
      },
      {
        title: "Faster operations",
        description: "Move from lead to booked patient with less friction.",
        icon: Rocket,
      },
      {
        title: "Better reporting",
        description: "See what is working with real-time dashboards.",
        icon: BarChart3,
      },
    ],
    featureTitle: "What This CRM Includes",
    dashboardTitle: "CRM dashboard preview",
    dashboardDescription:
      "Track patient leads, scheduled appointments, open follow-ups, revenue, and team activity inside one operational CRM.",
    ctaLabel: "Build Healthcare CRM",
    ctaDescription:
      "Streamline patient relationships, appointment workflows, follow-ups, billing, and reporting in one CRM.",
  },
  "patient-portal": {
    slug: "patient-portal",
    href: "/industries/healthcare/patient-portal",
    eyebrow: "Patient Portal",
    title: "Patient Portal Solutions",
    highlight: "Portal Solutions",
    description:
      "Secure portals for patients to access records, reports, appointments, prescriptions, and updates in one place.",
    selectorTitle: "Patient Portal",
    selectorDescription:
      "A secure self-service portal where patients can access records, reports, appointments, invoices, and updates.",
    icon: User,
    visualType: "portal",
    imageUrl:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1400&q=82",
    problems: [
      {
        title: "Patients struggle to access records",
        description:
          "Patients often wait for staff to resend reports, visit notes, and health records.",
        icon: LockKeyhole,
      },
      {
        title: "Reports and prescriptions are disconnected",
        description:
          "Important documents sit across email, paper files, lab systems, and reception desks.",
        icon: FileText,
      },
      {
        title: "Communication is slow",
        description:
          "Status updates, appointment changes, and report availability can take too long to reach patients.",
        icon: MessageSquare,
      },
    ],
    features: [
      {
        title: "Secure Login",
        description:
          "Privacy-aware access with role controls, patient authentication, and account protection.",
        icon: LockKeyhole,
      },
      {
        title: "Medical Records",
        description:
          "Give patients access to care history, allergies, lab results, and treatment details.",
        icon: Folder,
      },
      {
        title: "Reports & Prescriptions",
        description:
          "Let patients view and download reports, prescriptions, and instructions.",
        icon: FileText,
      },
      {
        title: "Appointment History",
        description:
          "Show upcoming, past, cancelled, and completed appointments in one timeline.",
        icon: CalendarCheck,
      },
      {
        title: "Billing & Invoices",
        description:
          "Share bills, payment status, receipts, and invoice downloads securely.",
        icon: Wallet,
      },
      {
        title: "Notifications",
        description:
          "Keep patients informed about new reports, reminders, prescriptions, and messages.",
        icon: Bell,
      },
    ],
    flowTitle: "Access Flow",
    flowSteps: [
      {
        title: "Login",
        description: "Patients securely sign in to the portal.",
        icon: LockKeyhole,
      },
      {
        title: "View Records",
        description: "They open health history and visit documents.",
        icon: Folder,
      },
      {
        title: "Download Reports",
        description: "Lab reports and prescriptions are available on demand.",
        icon: FileText,
      },
      {
        title: "Check Appointments",
        description: "Upcoming and past appointments stay easy to find.",
        icon: CalendarCheck,
      },
      {
        title: "Receive Updates",
        description: "Portal alerts keep patients informed.",
        icon: Bell,
      },
    ],
    metrics: [
      {
        label: "Upcoming Appointments",
        title: "Upcoming Appointments",
        value: "284",
        change: "+12.4%",
        description: "Scheduled patient visits visible in the portal.",
        icon: CalendarCheck,
        tone: "blue",
      },
      {
        label: "Latest Reports",
        title: "Latest Reports",
        value: "1,092",
        change: "+18.1%",
        description: "Reports uploaded and accessed by patients.",
        icon: FileText,
        tone: "cyan",
      },
      {
        label: "Prescriptions",
        title: "Prescriptions",
        value: "736",
        change: "+9.8%",
        description: "Digital prescriptions and refill notes.",
        icon: ClipboardCheck,
        tone: "violet",
      },
      {
        label: "Notifications",
        title: "Notifications",
        value: "8,420",
        change: "+24.6%",
        description: "Patient updates delivered securely.",
        icon: Bell,
        tone: "emerald",
      },
    ],
    previewCards: [
      {
        title: "Upcoming Appointments",
        value: "May 20, 2026",
        description: "Patients can view visit timing, doctor, and status.",
        icon: CalendarCheck,
      },
      {
        title: "Latest Reports",
        value: "Blood Test",
        description: "Reports can be opened, downloaded, and shared securely.",
        icon: FileText,
      },
      {
        title: "Prescriptions",
        value: "2 Active",
        description: "Medication details and refill reminders stay visible.",
        icon: ClipboardCheck,
      },
      {
        title: "Notifications",
        value: "4 Updates",
        description: "Patients receive timely portal and appointment updates.",
        icon: Bell,
      },
    ],
    benefits: [
      {
        title: "Better patient access",
        description: "24/7 access to health information and documents.",
        icon: User,
      },
      {
        title: "Reduced manual support",
        description: "Fewer repeated calls and document resend requests.",
        icon: PhoneCall,
      },
      {
        title: "Better experience",
        description: "A seamless, self-service patient journey.",
        icon: HeartPulse,
      },
      {
        title: "Secure communication",
        description: "End-to-end communication designed around privacy.",
        icon: ShieldCheck,
      },
    ],
    featureTitle: "Portal Modules",
    dashboardTitle: "Portal preview",
    dashboardDescription:
      "Give patients one secure view for appointments, latest reports, prescriptions, notifications, and billing activity.",
    ctaLabel: "Build Patient Portal",
    ctaDescription:
      "Launch a secure patient portal that reduces support load and gives patients confident self-service access.",
  },
  "full-suite": {
    slug: "full-suite",
    href: "/industries/healthcare/full-suite",
    eyebrow: "Full Healthcare Suite",
    title: "Full Healthcare Digital Suite",
    highlight: "Digital Suite",
    description:
      "One connected digital system to attract patients, manage operations, automate follow-ups, and track growth.",
    selectorTitle: "Full Digital Suite",
    selectorDescription:
      "The complete connected package: healthcare website, mobile app, CRM, patient portal, workflows, and dashboards.",
    icon: Rocket,
    visualType: "full-suite",
    imageUrl:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=82",
    problems: [
      {
        title: "Disconnected patient journey",
        description:
          "Website, app, CRM, portal, automation, and reporting often operate as separate systems.",
        icon: Network,
      },
      {
        title: "Too much manual coordination",
        description:
          "Teams spend hours moving data, assigning tasks, sending reminders, and compiling reports.",
        icon: ClipboardList,
      },
      {
        title: "Growth data is hard to trust",
        description:
          "Without one source of truth, patient acquisition and operations are hard to optimize.",
        icon: BarChart3,
      },
    ],
    features: [
      {
        title: "Healthcare Website",
        description:
          "A high-converting website that builds trust and brings in more patients.",
        icon: Globe,
      },
      {
        title: "Mobile App",
        description:
          "A patient app for appointments, records, reminders, and engagement.",
        icon: Smartphone,
      },
      {
        title: "Healthcare CRM",
        description:
          "A system to manage patient leads, communication, and appointments.",
        icon: Network,
      },
      {
        title: "Patient Portal",
        description:
          "Self-service access to appointments, reports, prescriptions, and invoices.",
        icon: User,
      },
      {
        title: "Automation Workflows",
        description:
          "Automated reminders, follow-ups, billing updates, and task routing.",
        icon: Bot,
      },
      {
        title: "Dashboard & Reporting",
        description:
          "Real-time performance, revenue, growth, and operations reporting.",
        icon: LayoutDashboard,
      },
    ],
    flowTitle: "Connected System Flow",
    flowSteps: [
      {
        title: "Website Visit",
        description: "Patients discover your practice online.",
        icon: Globe,
      },
      {
        title: "Appointment Booking",
        description: "Bookings happen on the website, app, or portal.",
        icon: CalendarCheck,
      },
      {
        title: "CRM Tracking",
        description: "Every lead, patient, and follow-up is tracked.",
        icon: Network,
      },
      {
        title: "Reminder Automation",
        description: "SMS, email, and workflow reminders keep patients engaged.",
        icon: Bot,
      },
      {
        title: "Patient Portal / App Access",
        description: "Patients access records, updates, and appointments.",
        icon: MonitorSmartphone,
      },
      {
        title: "Dashboard Reporting",
        description: "Leadership tracks growth, operations, and performance.",
        icon: LayoutDashboard,
      },
    ],
    metrics: [
      {
        label: "Appointment Leads",
        title: "Appointment Leads",
        value: "1,842",
        change: "+31.2%",
        description: "New appointment demand from connected channels.",
        icon: CalendarCheck,
        tone: "blue",
      },
      {
        label: "Active Patients",
        title: "Active Patients",
        value: "12,540",
        change: "+23.5%",
        description: "Patients active across app and portal experiences.",
        icon: Users,
        tone: "cyan",
      },
      {
        label: "Follow-ups Automated",
        title: "Follow-ups Automated",
        value: "8,763",
        change: "+42.8%",
        description: "Automated reminders, tasks, and patient touchpoints.",
        icon: Bot,
        tone: "violet",
      },
      {
        label: "Monthly Revenue",
        title: "Monthly Revenue",
        value: "$128,450",
        change: "+28.6%",
        description: "Revenue visibility across services and appointments.",
        icon: Wallet,
        tone: "emerald",
      },
    ],
    benefits: [
      {
        title: "More appointment leads",
        description: "Attract and convert more patients from digital channels.",
        icon: TrendingUp,
      },
      {
        title: "Less manual work",
        description: "Automate repetitive tasks and save staff time.",
        icon: Bot,
      },
      {
        title: "Better patient experience",
        description: "Create one smooth journey from discovery to aftercare.",
        icon: HeartPulse,
      },
      {
        title: "Centralized operations",
        description: "Manage patients, staff, workflows, and reporting together.",
        icon: Database,
      },
      {
        title: "Better reporting",
        description: "Make smarter decisions with connected data.",
        icon: BarChart3,
      },
      {
        title: "Connected data",
        description: "Keep systems synced so every team sees the same truth.",
        icon: Network,
      },
    ],
    valuePoints: [
      "Everything works together",
      "One platform, one login, one team",
      "Built for growth",
    ],
    featureTitle: "What's Included",
    dashboardTitle: "Full suite operations preview",
    dashboardDescription:
      "Connect acquisition, booking, CRM tracking, reminders, portal access, mobile engagement, and reporting into one healthcare system.",
    ctaLabel: "Build Full Healthcare Suite",
    ctaDescription:
      "Get every core healthcare digital module working together as one connected growth and operations platform.",
    isBestValue: true,
  },
};

export const healthcareSolutionList = healthcareSelectableSolutionSlugs.map(
  (slug) => healthcareSolutions[slug],
);

export function getHealthcareSolution(slug: string) {
  return healthcareSolutions[slug as HealthcareSolutionSlug];
}
