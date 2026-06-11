
import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Bell,
  Building2,
  CalendarCheck,
  Car,
  ClipboardCheck,
  ClipboardList,
  Factory,
  FileCheck2,
  FileText,
  GraduationCap,
  Handshake,
  Home,
  Landmark,
  LifeBuoy,
  LockKeyhole,
  MessageCircle,
  PackageCheck,
  Plane,
  ReceiptText,
  Route,
  School,
  Settings2,
  ShieldCheck,
  ShoppingBag,
  Star,
  Store,
  Tags,
  Truck,
  UserCheck,
  Users,
  Workflow,
  Wrench,
} from "lucide-react";
import type { IndustryAiAutomationData } from "../common/IndustryAiAutomationSection";
import type { IndustryIntegrationsDeploymentData } from "../common/IndustryIntegrationsDeploymentSection";

export type IndustryPortalRoute = {
  industrySlug: string;
  solutionSlug: string;
};

export type IndustryPortalCard = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type IndustryPortalRole = {
  id: string;
  title: string;
  role: string;
  description: string;
  icon: LucideIcon;
  capabilities: string[];
  metric: string;
  previewCards: Array<{
    label: string;
    value: string;
    icon: LucideIcon;
  }>;
};

export type IndustryPortalModule = IndustryPortalCard & {
  points: string[];
};

export type IndustryPortalWorkflowStep = IndustryPortalCard;

export type IndustryPortalSecurityItem = IndustryPortalCard;

export type IndustryPortalDemo = {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  chips: string[];
  stats: Array<[string, string]>;
};

export type IndustryPortalPricingPlan = {
  name: string;
  subtitle: string;
  price: string;
  icon: LucideIcon;
  features: string[];
  popular: boolean;
};

export type IndustryPortalTestimonial = {
  quote: string;
  name: string;
  role: string;
};

export type IndustryPortalTrustItem = {
  title: string;
  icon: LucideIcon;
};

export type IndustryPortalHeroVisual = {
  portalName: string;
  sidebar: string[];
  stats: Array<{
    label: string;
    value: string;
    change: string;
  }>;
  pipelineTitle: string;
  pipeline: Array<{
    label: string;
    status: string;
    owner: string;
  }>;
  roleViewTitle: string;
  roleView: string[];
  notification: string;
  documentCard: string;
};

export type IndustryPortalHeroPreviewCard = {
  title: string;
  value: string;
  description: string;
};

export type IndustryPortalHero = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  trustChips: string[];
  previewCards: IndustryPortalHeroPreviewCard[];
};

export type IndustryPortalJourney = {
  title: string;
  description: string;
  steps: Array<{
    title: string;
    description: string;
  }>;
};

export type IndustryPortalRoleExperience = {
  role: string;
  title: string;
  description: string;
  features: string[];
};

export type IndustryPortalPageData = {
  industrySlug: string;
  industryName: string;
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  primaryRoute: string;
  aliases: string[];
  keywords: string[];
  serviceType: string;
  heroImage: string;
  heroChips: Array<{ label: string; icon: LucideIcon }>;
  heroStats: Array<[string, string]>;
  heroVisual: IndustryPortalHeroVisual;
  portalHero: IndustryPortalHero;
  problemsTitle: string;
  problems: IndustryPortalCard[];
  fixesTitle: string;
  fixes: IndustryPortalCard[];
  rolesTitle: string;
  rolesDescription: string;
  roles: IndustryPortalRole[];
  roleExperiences: {
    title: string;
    description: string;
    roles: IndustryPortalRoleExperience[];
  };
  modulesTitle: string;
  modulesDescription: string;
  modules: IndustryPortalModule[];
  workflowTitle: string;
  workflowSteps: IndustryPortalWorkflowStep[];
  portalJourney: IndustryPortalJourney;
  securityTitle: string;
  securityDescription: string;
  securityItems: IndustryPortalSecurityItem[];
  demoGalleryTitle: string;
  demoGalleryDescription: string;
  demoGallery: IndustryPortalDemo[];
  pricingDescription: string;
  pricingPlans: IndustryPortalPricingPlan[];
  testimonialsTitle: string;
  testimonials: IndustryPortalTestimonial[];
  trustTitle: string;
  trustDescription: string;
  trustItems: IndustryPortalTrustItem[];
  ctaTitle: string;
  ctaDescription: string;
  aiAutomation: IndustryAiAutomationData;
  integrationsDeployment: IndustryIntegrationsDeploymentData;
};

type PageInput = Omit<
  IndustryPortalPageData,
  | "eyebrow"
  | "primaryRoute"
  | "keywords"
  | "serviceType"
  | "portalHero"
  | "problemsTitle"
  | "fixesTitle"
  | "rolesTitle"
  | "roleExperiences"
  | "modulesTitle"
  | "portalJourney"
  | "securityTitle"
  | "demoGalleryTitle"
  | "testimonialsTitle"
  | "trustTitle"
  | "aiAutomation"
  | "integrationsDeployment"
>;

const rupee = "\u20b9";
const aiAutomationHref = "/contact?service=ai-automation";

const portalAiAutomation: IndustryAiAutomationData = {
  eyebrow: "AI Self-Service Add-ons",
  title: "Add AI Self-Service to Your Portal",
  description:
    "Help users get answers, upload documents, track requests, and receive status updates through AI-powered portal workflows.",
  items: ["AI helpdesk", "Document workflow", "Ticket routing", "Status updates"],
  ctaLabel: "Add AI to Portal",
  ctaHref: aiAutomationHref,
};

const portalIntegrationsDeployment: IndustryIntegrationsDeploymentData = {
  eyebrow: "Integrations & Deployment",
  title: "Secure Portal Integrations",
  description:
    "Connect your portal with authentication, payments, documents, notifications, tickets, and secure database workflows for smooth self-service access.",
  items: [
    { title: "Login & auth", description: "Support secure sign-in and role-based identity flows." },
    { title: "Document uploads", description: "Collect, review, and store important files." },
    { title: "Payment gateway", description: "Enable portal payments, invoices, or fees." },
    { title: "Ticketing workflow", description: "Route requests, issues, and approvals clearly." },
    { title: "Notifications", description: "Send email, WhatsApp-ready, and in-portal updates." },
    { title: "Secure database", description: "Protect records with structured access controls." },
  ],
  ctaLabel: "Plan Portal Stack",
  ctaHref: aiAutomationHref,
};

function card(title: string, description: string, icon: LucideIcon): IndustryPortalCard {
  return { title, description, icon };
}

function moduleCard(
  title: string,
  icon: LucideIcon,
  description: string,
  points: string[],
): IndustryPortalModule {
  return { title, description, icon, points };
}

function role(
  id: string,
  title: string,
  roleLabel: string,
  description: string,
  icon: LucideIcon,
  capabilities: string[],
  metric: string,
): IndustryPortalRole {
  return {
    id,
    title,
    role: roleLabel,
    description,
    icon,
    capabilities,
    metric,
    previewCards: capabilities.slice(0, 4).map((capability, index) => ({
      label: capability,
      value: index === 0 ? "Primary workspace" : index === 1 ? "Live status" : index === 2 ? "Role action" : "Admin visible",
      icon: index === 0 ? icon : index === 1 ? ClipboardCheck : index === 2 ? Bell : BarChart3,
    })),
  };
}

function demo(
  title: string,
  subtitle: string,
  icon: LucideIcon,
  chips: string[],
): IndustryPortalDemo {
  return {
    title,
    subtitle,
    icon,
    chips,
    stats: [
      ["Requests", "Live"],
      ["Docs", "Controlled"],
      ["SLA", "Tracked"],
    ],
  };
}

function plan(
  name: string,
  price: string,
  popular: boolean,
  features: string[],
): IndustryPortalPricingPlan {
  return {
    name,
    subtitle: popular
      ? "For growing portals with multiple roles, approvals, notifications, and reporting."
      : name.includes("Custom")
        ? "For complex portals with integrations, advanced permissions, and custom workflows."
        : "For focused login portals with core requests and document workflows.",
    price,
    icon: popular ? Workflow : name.includes("Custom") ? Settings2 : LockKeyhole,
    features,
    popular,
  };
}

function createPage(input: PageInput): IndustryPortalPageData {
  const portalCategoryName = getPortalCategoryName(input.industrySlug, input.industryName);

  return {
    ...input,
    eyebrow: portalCategoryName,
    primaryRoute: `/industries/${input.industrySlug}/portal`,
    keywords: [
      `${input.industryName.toLowerCase()} portal development`,
      "customer portal development",
      "vendor portal development",
      "partner portal development",
      "admin portal development",
      "role based portal",
      "document management portal",
      "request tracking portal",
    ],
    serviceType: `${portalCategoryName} Development`,
    portalHero: getPortalHero(input.industrySlug, portalCategoryName),
    problemsTitle: "Why a Self-Service Portal Matters",
    fixesTitle: "What Gets Fixed With A Portal",
    rolesTitle: `Role-Based Access for ${portalCategoryName}`,
    roleExperiences: {
      title: `Portal Experiences for ${portalCategoryName} Users`,
      description:
        "Every user gets a focused self-service view with the documents, requests, payments, updates, and support actions relevant to them.",
      roles: getPortalRoleExperiences(input.industrySlug),
    },
    modulesTitle: `${portalCategoryName} Features`,
    portalJourney: {
      title: `${portalCategoryName} Access Journey`,
      description:
        "A clear self-service path helps users log in, submit requests, upload files, track status, pay, receive updates, and raise support tickets without repeated calls.",
      steps: getPortalJourneySteps(input.industrySlug),
    },
    securityTitle: "Built for Secure Role-Based Access",
    demoGalleryTitle: `${input.industryName} Portal Demo Gallery`,
    testimonialsTitle: `${input.industryName} Portal Feedback`,
    trustTitle: "Portal Trust Signals",
    aiAutomation: portalAiAutomation,
    integrationsDeployment: portalIntegrationsDeployment,
  };
}

function getPortalCategoryName(industrySlug: string, industryName: string) {
  if (industrySlug === "real-estate") return "Buyer / Tenant Portal";
  if (industrySlug === "manufacturing") return "Dealer / Vendor Portal";
  if (industrySlug === "education") return "Student / Parent Portal";
  if (industrySlug === "retail") return "Customer / Loyalty Portal";
  if (industrySlug === "finance") return "Client Portal";
  if (industrySlug === "insurance") return "Policyholder / Agent Portal";
  if (industrySlug === "travel") return "Traveler Portal";
  if (industrySlug === "automobile") return "Customer / Dealer Portal";
  if (industrySlug === "service-business") return "Customer / Service Portal";

  return `${industryName} Portal`;
}

function getPortalHero(industrySlug: string, portalCategoryName: string): IndustryPortalHero {
  const heroTitles: Record<string, string> = {
    healthcare: "Give Patients a Secure Portal Experience",
    manufacturing: "Give Dealers and Vendors a Secure Portal",
    education: "Create a Smarter Student & Parent Portal",
    "real-estate": "Give Buyers and Tenants a Secure Portal",
    retail: "Create a Customer Portal for Orders, Loyalty, and Support",
    finance: "Give Clients a Secure Financial Portal",
    insurance: "Create a Policyholder Portal for Claims and Renewals",
    travel: "Give Travelers a Portal for Bookings and Documents",
    automobile: "Create a Customer Portal for Service and Vehicle Updates",
    "service-business": "Give Clients a Portal for Projects, Invoices, and Support",
  };

  const descriptions: Record<string, string> = {
    healthcare:
      "Let patients sign in, view reports, track appointments, download prescriptions, check payments, and receive care updates without waiting on calls.",
    manufacturing:
      "Let dealers and vendors log in, track purchase orders, download invoices, upload documents, check dispatch status, and raise support requests.",
    education:
      "Give students and parents one secure place for notices, assignments, attendance, fee status, documents, results, and support requests.",
    "real-estate":
      "Give buyers and tenants secure access to site visit status, agreements, payment milestones, property updates, documents, and support requests.",
    retail:
      "Let customers manage orders, returns, invoices, loyalty points, account details, support tickets, and notifications from one self-service portal.",
    finance:
      "Give clients a secure place to upload KYC documents, track applications, download statements, view payment status, and message advisors.",
    insurance:
      "Let policyholders view policies, track claims, download documents, check renewals, pay premiums, and contact agents from one secure portal.",
    travel:
      "Give travelers one login for bookings, vouchers, visa documents, payment updates, itinerary alerts, and support tickets.",
    automobile:
      "Let customers track service bookings, vehicle documents, warranty status, invoices, reminders, and showroom updates without manual follow-up.",
    "service-business":
      "Give clients secure access to project status, invoices, file uploads, approvals, support tickets, and team updates.",
  };

  return {
    eyebrow: "Secure Portal System",
    title: heroTitles[industrySlug] ?? `Give Users a Secure ${portalCategoryName}`,
    description:
      descriptions[industrySlug] ??
      "Give users a secure place to log in, track requests, upload documents, view payments, receive updates, and reduce manual support work.",
    primaryCtaLabel: "Build My Portal",
    primaryCtaHref: "/contact",
    secondaryCtaLabel: "View Portal Journey",
    secondaryCtaHref: "#portal-journey",
    trustChips: ["Secure login", "Role-based access", "Document control", "Status updates"],
    previewCards: getPortalHeroPreviewCards(industrySlug),
  };
}

function getPortalHeroPreviewCards(industrySlug: string): IndustryPortalHeroPreviewCard[] {
  const previewCards: Record<string, IndustryPortalHeroPreviewCard[]> = {
    healthcare: [
      previewCard("Patient profile", "Verified", "Secure patient account and contact details."),
      previewCard("Lab report uploaded", "Ready", "Reports can be opened and downloaded."),
      previewCard("Appointment status", "Confirmed", "Upcoming visit details stay visible."),
      previewCard("Prescription ready", "2 Active", "Prescriptions and care instructions are available."),
      previewCard("Payment status", "Paid", "Receipts and invoices stay attached."),
      previewCard("Doctor message", "New", "Care updates reach the patient inside the portal."),
    ],
    manufacturing: [
      previewCard("Dealer account", "Active", "Dealer profile and permissions are verified."),
      previewCard("Purchase order", "In review", "Order stage and owner stay visible."),
      previewCard("Invoice downloaded", "Latest", "Invoices and documents are easy to access."),
      previewCard("Dispatch update", "Shipped", "Shipment progress is visible to the dealer."),
      previewCard("Vendor request", "Open", "Vendor submissions move through review."),
      previewCard("Support ticket", "Assigned", "Issues are routed to the right team."),
    ],
    education: [
      previewCard("Student profile", "Active", "Student account and class details are secure."),
      previewCard("Attendance report", "92%", "Parents can review attendance status."),
      previewCard("Fee status", "Due soon", "Fees and receipts are easy to find."),
      previewCard("Assignment upload", "Submitted", "Students can upload work securely."),
      previewCard("Parent notice", "New", "Important notices reach parents quickly."),
      previewCard("Result update", "Published", "Results and records are available on demand."),
    ],
    "real-estate": [
      previewCard("Buyer profile", "Verified", "Buyer details and preferences stay organized."),
      previewCard("Site visit status", "Scheduled", "Visit date, time, and owner are visible."),
      previewCard("Agreement document", "Uploaded", "Agreements can be reviewed securely."),
      previewCard("Payment milestone", "Next due", "Milestones and receipts stay trackable."),
      previewCard("Support request", "Open", "Questions route to the assigned team."),
      previewCard("Property update", "New", "Users receive status and availability updates."),
    ],
    retail: [
      previewCard("Customer account", "Active", "Profile, order history, and preferences are secure."),
      previewCard("Order status", "Out for delivery", "Orders and delivery status stay visible."),
      previewCard("Return request", "In review", "Returns move through a clear support flow."),
      previewCard("Loyalty points", "1,240", "Rewards and offers stay visible."),
      previewCard("Invoice download", "Ready", "Receipts and invoices are available anytime."),
      previewCard("Support ticket", "Assigned", "Customer issues are routed and tracked."),
    ],
    finance: [
      previewCard("Client profile", "Verified", "Client account and advisor details are secure."),
      previewCard("KYC documents", "Pending review", "Documents move through a controlled workflow."),
      previewCard("Application status", "In progress", "Clients can check loan or service progress."),
      previewCard("Statement download", "Ready", "Statements and reports stay available."),
      previewCard("Advisor message", "New", "Advisor updates reach clients securely."),
      previewCard("Secure ticket", "Open", "Questions can be raised and tracked."),
    ],
    insurance: [
      previewCard("Policyholder profile", "Active", "Policyholder account and policy access are secure."),
      previewCard("Claim status", "Under review", "Claims move through visible stages."),
      previewCard("Policy document", "Ready", "Policies and endorsements can be downloaded."),
      previewCard("Renewal reminder", "Due soon", "Renewals and reminders stay visible."),
      previewCard("Premium payment", "Pending", "Premium status and receipts are trackable."),
      previewCard("Agent message", "New", "Agent communication stays attached to the policy."),
    ],
    travel: [
      previewCard("Traveler profile", "Verified", "Traveler details and preferences stay secure."),
      previewCard("Booking status", "Confirmed", "Bookings and inclusions stay visible."),
      previewCard("Voucher download", "Ready", "Vouchers and receipts are easy to access."),
      previewCard("Visa documents", "Uploaded", "Required documents can be reviewed."),
      previewCard("Payment update", "Paid", "Payment stages and receipts stay trackable."),
      previewCard("Itinerary alert", "New", "Trip alerts reach travelers quickly."),
    ],
    automobile: [
      previewCard("Customer profile", "Active", "Customer and vehicle details are secure."),
      previewCard("Service booking", "Scheduled", "Service appointments and status are visible."),
      previewCard("Vehicle documents", "Ready", "Documents and service history stay available."),
      previewCard("Warranty status", "Valid", "Warranty and coverage details stay clear."),
      previewCard("Payment invoice", "Ready", "Invoices can be downloaded anytime."),
      previewCard("Service reminder", "New", "Customers receive service and maintenance alerts."),
    ],
    "service-business": [
      previewCard("Client profile", "Active", "Client account, project, and access details are secure."),
      previewCard("Project status", "In progress", "Clients can track milestones and next steps."),
      previewCard("Invoice download", "Ready", "Invoices and receipts are available anytime."),
      previewCard("Support ticket", "Assigned", "Support items are routed and tracked."),
      previewCard("File upload", "Received", "Files and approvals stay organized."),
      previewCard("Team update", "New", "Clients receive updates from the assigned team."),
    ],
  };

  return previewCards[industrySlug] ?? previewCards["service-business"];
}

function getPortalJourneySteps(industrySlug: string): IndustryPortalJourney["steps"] {
  const requestLabel = industrySlug === "retail" ? "Create Return" : "Submit Request";
  const paymentLabel = industrySlug === "education" ? "Check Fees" : industrySlug === "insurance" ? "Pay Premium" : "Make Payment";

  return [
    { title: "Login", description: "The user signs in to a secure portal account with the right access level." },
    { title: requestLabel, description: "They submit a request, application, booking update, return, or service need." },
    { title: "Upload Documents", description: "Files, IDs, reports, invoices, or approvals are uploaded and stored safely." },
    { title: "Track Status", description: "Every stage is visible so users do not need to ask for repeated updates." },
    { title: paymentLabel, description: "Payment, fee, invoice, premium, or milestone status stays easy to check." },
    { title: "Get Updates", description: "Notifications keep users informed when status, files, or actions change." },
    { title: "Raise Support Ticket", description: "Issues are logged, assigned, and tracked through a clear support workflow." },
  ];
}

function getPortalRoleExperiences(industrySlug: string): IndustryPortalRoleExperience[] {
  const roleExperiences: Record<string, IndustryPortalRoleExperience[]> = {
    healthcare: [
      roleExperience("Patient", "Patient self-service", "Patients access reports, appointments, prescriptions, payments, and secure messages.", ["Reports", "Appointments", "Prescriptions", "Payments"]),
      roleExperience("Doctor/Admin", "Care review access", "Care and admin teams review uploads, requests, and patient status without exposing unrelated data.", ["Document review", "Care status", "Patient requests", "Permissions"]),
      roleExperience("Reception Team", "Front desk support", "Reception teams can help with appointment status, billing notes, and patient updates.", ["Appointments", "Billing notes", "Support queue", "Notifications"]),
    ],
    manufacturing: [
      roleExperience("Dealer", "Dealer self-service", "Dealers track orders, invoices, dispatch updates, documents, and support tickets.", ["Orders", "Invoices", "Dispatch", "Tickets"]),
      roleExperience("Vendor", "Vendor submission access", "Vendors submit documents, RFQs, compliance files, and request updates.", ["RFQs", "Compliance docs", "Submissions", "Status"]),
      roleExperience("Operations Team", "Internal review access", "Operations teams review requests, documents, dispatch stages, and escalations.", ["Review queue", "Dispatch", "Approvals", "Escalations"]),
    ],
    education: [
      roleExperience("Student", "Student self-service", "Students access assignments, notices, resources, fee status, and results.", ["Assignments", "Resources", "Results", "Requests"]),
      roleExperience("Parent", "Parent access", "Parents review notices, fees, attendance, reports, and school communication.", ["Notices", "Fees", "Attendance", "Reports"]),
      roleExperience("Teacher/Admin", "Academic review access", "Teachers and admins manage uploads, notices, requests, and student records.", ["Notices", "Records", "Review", "Updates"]),
    ],
    "real-estate": [
      roleExperience("Buyer", "Buyer self-service", "Buyers track visits, documents, payment milestones, property updates, and support requests.", ["Visits", "Documents", "Milestones", "Updates"]),
      roleExperience("Tenant", "Tenant access", "Tenants can view agreements, payment status, maintenance requests, and account updates.", ["Agreements", "Payments", "Maintenance", "Support"]),
      roleExperience("Sales/Admin Team", "Property team access", "Sales and admin teams review buyer requests, documents, visit status, and pending actions.", ["Buyer requests", "Document review", "Visit status", "Pending actions"]),
    ],
    retail: [
      roleExperience("Customer", "Customer self-service", "Customers track orders, returns, invoices, loyalty points, and support tickets.", ["Orders", "Returns", "Invoices", "Loyalty"]),
      roleExperience("Store Team", "Store service access", "Store teams review orders, return requests, customer updates, and support notes.", ["Order queue", "Returns", "Customer notes", "Updates"]),
      roleExperience("Support Team", "Support ticket access", "Support teams manage issues, status changes, refund notes, and customer communication.", ["Tickets", "Refund notes", "Status", "Messages"]),
    ],
    finance: [
      roleExperience("Client", "Client self-service", "Clients upload KYC, track applications, download statements, and contact advisors.", ["KYC", "Applications", "Statements", "Advisor messages"]),
      roleExperience("Advisor", "Advisor access", "Advisors review documents, client requests, consultation status, and next actions.", ["Documents", "Requests", "Consultations", "Next actions"]),
      roleExperience("Compliance/Admin Team", "Compliance review access", "Compliance and admin teams control document review, approvals, records, and audit trails.", ["Review", "Approvals", "Records", "Audit trail"]),
    ],
    insurance: [
      roleExperience("Policyholder", "Policyholder self-service", "Policyholders track claims, policies, renewals, premiums, and agent messages.", ["Claims", "Policies", "Renewals", "Premiums"]),
      roleExperience("Agent", "Agent support access", "Agents review customer requests, documents, claim status, and renewal opportunities.", ["Requests", "Documents", "Claims", "Renewals"]),
      roleExperience("Claims/Admin Team", "Claims review access", "Claims and admin teams manage evidence, approvals, updates, and service notes.", ["Evidence", "Approvals", "Updates", "Notes"]),
    ],
    travel: [
      roleExperience("Traveler", "Traveler self-service", "Travelers view bookings, vouchers, visa documents, payments, and itinerary alerts.", ["Bookings", "Vouchers", "Visa docs", "Alerts"]),
      roleExperience("Travel Agent", "Agent assistance access", "Agents review traveler requests, package updates, documents, and support needs.", ["Requests", "Packages", "Documents", "Support"]),
      roleExperience("Operations Team", "Trip operations access", "Operations teams manage bookings, payment status, vendor notes, and escalations.", ["Bookings", "Payments", "Vendors", "Escalations"]),
    ],
    automobile: [
      roleExperience("Customer", "Customer self-service", "Customers track service bookings, vehicle documents, invoices, warranties, and reminders.", ["Bookings", "Documents", "Invoices", "Warranty"]),
      roleExperience("Service Team", "Service access", "Service teams manage booking status, service notes, reminders, and handover updates.", ["Status", "Service notes", "Reminders", "Handover"]),
      roleExperience("Dealer/Admin Team", "Dealer review access", "Dealer teams review customer requests, vehicle records, invoices, and support tickets.", ["Requests", "Vehicle records", "Invoices", "Tickets"]),
    ],
    "service-business": [
      roleExperience("Client", "Client self-service", "Clients track project status, invoices, file uploads, approvals, and support tickets.", ["Projects", "Invoices", "Files", "Approvals"]),
      roleExperience("Project Team", "Team update access", "Project teams update milestones, review files, respond to requests, and log status.", ["Milestones", "Files", "Requests", "Status"]),
      roleExperience("Support Team", "Support access", "Support teams manage tickets, client questions, SLAs, and resolution notes.", ["Tickets", "Questions", "SLAs", "Resolution notes"]),
    ],
  };

  return roleExperiences[industrySlug] ?? roleExperiences["service-business"];
}

function previewCard(title: string, value: string, description: string): IndustryPortalHeroPreviewCard {
  return { title, value, description };
}

function roleExperience(
  roleName: string,
  title: string,
  description: string,
  features: string[],
): IndustryPortalRoleExperience {
  return { role: roleName, title, description, features };
}

const healthcareImage =
  "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1400&q=82";
const realEstateImage =
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85";
const educationImage =
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=85";
const manufacturingImage =
  "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1400&q=85";
const retailImage =
  "https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&w=1400&q=85";
const financeImage =
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=85";
const insuranceImage =
  "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=85";
const travelImage =
  "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1400&q=85";
const automobileImage =
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=85";
const serviceBusinessImage =
  "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=85";

const starterFeatures = [
  "Secure login",
  "Request forms",
  "Document upload",
  "Admin dashboard",
  "Email notifications",
];

const growthFeatures = [
  "Multiple user roles",
  "Approval workflow",
  "Notifications",
  "Reports dashboard",
  "Document review stages",
];

const customFeatures = [
  "Custom workflows",
  "API integrations",
  "Advanced permissions",
  "SLA and analytics",
  "Custom admin controls",
];

const sharedModules = [
  moduleCard("Secure Login", LockKeyhole, "Give every external user a protected account with the right access level.", [
    "Login access",
    "User sessions",
    "Access control",
  ]),
  moduleCard("User Dashboard", UserCheck, "Show requests, documents, payments, tickets, and status updates in one workspace.", [
    "Account overview",
    "Live status",
    "Quick actions",
  ]),
  moduleCard("Document Upload / Download", FileText, "Let users upload, download, review, and retrieve important files securely.", [
    "Upload controls",
    "Review status",
    "Document history",
  ]),
  moduleCard("Request Tracking", ClipboardList, "Turn inquiries, approvals, service needs, and applications into trackable requests.", [
    "Custom forms",
    "Status pipeline",
    "Owner assignment",
  ]),
  moduleCard("Ticket / Support Workflow", LifeBuoy, "Route user questions, issues, and service tickets to the right internal team.", [
    "Ticket queue",
    "Support notes",
    "Response status",
  ]),
  moduleCard("Payment Status", ReceiptText, "Show invoices, fees, dues, milestones, or payment confirmations inside the portal.", [
    "Invoice status",
    "Payment notes",
    "Receipt access",
  ]),
  moduleCard("Notifications", Bell, "Send portal, email, and WhatsApp-ready updates when status changes or action is needed.", [
    "Status alerts",
    "Due reminders",
    "Action prompts",
  ]),
  moduleCard("Admin Review Panel", ShieldCheck, "Give admins a controlled workspace for reviews, approvals, users, and reports.", [
    "Review queue",
    "Role actions",
    "Admin visibility",
  ]),
];

const sharedSecurity = [
  card("Role-Based Permissions", "Only show users the data, requests, documents, and actions they are allowed to access.", ShieldCheck),
  card("Document Access Control", "Keep files attached to records with upload/download visibility and review status.", FileCheck2),
  card("Audit Trail", "Track who submitted, reviewed, approved, downloaded, or changed each record.", ClipboardCheck),
  card("Admin Governance", "Give admins control over users, roles, workflow rules, notifications, and reporting.", Settings2),
];

export const industryPortalPages: Record<string, IndustryPortalPageData> = {
  healthcare: createPage({
    industrySlug: "healthcare",
    industryName: "Healthcare",
    title: "Patient Portal for Records, Reports, Requests and Payments",
    highlight: "Patient Portal",
    description:
      "Give patients secure access to reports, appointments, prescriptions, billing status, care updates, and support requests without repeated front-desk calls.",
    aliases: ["portal", "patient-portal"],
    heroImage: healthcareImage,
    heroChips: [
      { label: "Patient Login", icon: UserCheck },
      { label: "Medical Records", icon: FileText },
      { label: "Appointment Status", icon: CalendarCheck },
      { label: "Payment Status", icon: ReceiptText },
    ],
    heroStats: [["Reports", "Downloadable"], ["Payments", "Visible"], ["Requests", "Tracked"]],
    heroVisual: {
      portalName: "PatientCare Portal",
      sidebar: ["Overview", "Reports", "Appointments", "Prescriptions", "Payments", "Support"],
      stats: [
        { label: "Reports", value: "Ready", change: "Live" },
        { label: "Appointments", value: "2", change: "Upcoming" },
        { label: "Payments", value: "Clear", change: "Updated" },
      ],
      pipelineTitle: "Care Access Status",
      pipeline: [
        { label: "Lab report", status: "Ready", owner: "Diagnostics" },
        { label: "Appointment", status: "Confirmed", owner: "Reception" },
        { label: "Prescription", status: "Updated", owner: "Doctor" },
      ],
      roleViewTitle: "Patient access",
      roleView: ["Reports", "Prescriptions", "Appointments", "Payments"],
      notification: "New lab report is ready to download.",
      documentCard: "Blood test report uploaded",
    },
    problems: [
      card("Patients wait for records", "Reports, prescriptions, and visit notes are often requested repeatedly through calls or front desk visits.", FileText),
      card("Appointment status is unclear", "Patients need a clearer place to check appointment timing, doctor details, and visit updates.", CalendarCheck),
      card("Billing questions repeat", "Payment status, invoices, and receipts are hard to access without staff support.", ReceiptText),
      card("Support is scattered", "Patient questions, document requests, and updates get split across calls, WhatsApp, and email.", MessageCircle),
    ],
    fixes: [
      card("Self-service records", "Patients can access records, reports, prescriptions, and visit documents from one secure account.", FileText),
      card("Status visibility", "Appointments, billing status, document review, and support updates stay visible.", CalendarCheck),
      card("Secure patient communication", "Messages and updates are connected to the patient account.", ShieldCheck),
    ],
    rolesDescription: "Give patients, care teams, reception, and admins separate access levels while keeping medical information controlled.",
    roles: [
      role("patient", "Patient Portal", "Patient access", "Patients view reports, appointments, prescriptions, invoices, and secure updates.", UserCheck, ["Reports", "Appointments", "Prescriptions", "Payments"], "Better patient self-service"),
      role("doctor-admin", "Doctor / Admin Portal", "Care review", "Care and admin teams review uploads, requests, patient status, and document gaps.", ShieldCheck, ["Review queue", "Patient status", "Document review", "Permissions"], "Cleaner care coordination"),
      role("reception", "Reception Portal", "Front desk support", "Reception teams assist with appointments, payment notes, requests, and patient updates.", Users, ["Appointments", "Payment notes", "Requests", "Notifications"], "Reduced repeated calls"),
    ],
    modulesDescription: "Portal modules for patient login, medical records, appointments, payments, notifications, support, and admin review.",
    modules: sharedModules,
    workflowTitle: "Patient Portal Access Flow",
    workflowSteps: [
      card("Login", "Patients securely sign in to their portal account.", LockKeyhole),
      card("View Records", "Reports, prescriptions, and visit documents are available.", FileText),
      card("Track Appointment", "Upcoming and past appointments stay easy to find.", CalendarCheck),
      card("Check Payment", "Invoices, receipts, and payment status stay visible.", ReceiptText),
      card("Get Updates", "Portal notifications keep patients informed.", Bell),
      card("Raise Ticket", "Patients can ask for help through a tracked support request.", LifeBuoy),
    ],
    securityDescription: "Patient portals need secure login, role-based visibility, document access control, and admin governance.",
    securityItems: sharedSecurity,
    demoGalleryDescription: "Preview patient, doctor/admin, and reception portal flows with secure records and status updates.",
    demoGallery: [
      demo("Patient Portal Demo", "Reports, prescriptions, appointments, and payments.", UserCheck, ["Reports", "Appointments", "Payments"]),
      demo("Care Team Demo", "Review uploads, patient requests, and care status.", ShieldCheck, ["Review", "Requests", "Status"]),
      demo("Reception Demo", "Appointments, billing notes, and patient support.", Users, ["Appointments", "Billing", "Support"]),
    ],
    pricingDescription: "Patient portal pricing depends on users, records, integrations, security needs, and workflow complexity.",
    pricingPlans: [
      plan("Patient Portal Starter", `${rupee}45,000`, false, starterFeatures),
      plan("Healthcare Portal Growth", `${rupee}95,000`, true, growthFeatures),
      plan("Patient Portal Custom", `${rupee}1,80,000+`, false, customFeatures),
    ],
    testimonials: [
      {
        quote: "Patients stopped calling repeatedly for reports and appointment status because the portal made updates visible.",
        name: "Clinic Operations Lead",
        role: "Healthcare Provider",
      },
    ],
    trustDescription: "Portal architecture for patient privacy, care team review, and admin-controlled records.",
    trustItems: [
      { title: "Patient Data Privacy", icon: ShieldCheck },
      { title: "Document Control", icon: FileText },
      { title: "Role-Based Access", icon: LockKeyhole },
      { title: "Support Audit Trail", icon: ClipboardCheck },
    ],
    ctaTitle: "Launch a Secure Patient Portal",
    ctaDescription:
      "Give patients one secure place to access reports, appointments, prescriptions, payments, updates, and support.",
  }),
  "real-estate": createPage({
    industrySlug: "real-estate",
    industryName: "Real Estate",
    title: "Buyer / Tenant Portal for Property Documents, Requests and Status Updates",
    highlight: "Buyer / Tenant Portal",
    description:
      "Give buyers, brokers, builders, and sales teams a secure portal to manage inquiries, documents, bookings, site visit status, and deal updates without scattered calls or WhatsApp threads.",
    aliases: ["portal", "client-portal", "property-portal"],
    heroImage: realEstateImage,
    heroChips: [
      { label: "Buyer Access", icon: Home },
      { label: "Document Center", icon: FileText },
      { label: "Visit Tracking", icon: CalendarCheck },
      { label: "Builder Admin", icon: Building2 },
    ],
    heroStats: [["Visits", "Live status"], ["Documents", "Verified"], ["Brokers", "Role access"]],
    heroVisual: {
      portalName: "EstatePro",
      sidebar: ["Dashboard", "Properties", "Visits", "Documents", "Messages", "Reports"],
      stats: [
        { label: "Open Requests", value: "86", change: "+18%" },
        { label: "Pending Docs", value: "34", change: "-9%" },
        { label: "Approvals", value: "21", change: "+12%" },
        { label: "SLA Health", value: "94%", change: "+6%" },
      ],
      pipelineTitle: "Buyer Request Pipeline",
      pipeline: [
        { label: "3BHK Site Visit", status: "Scheduled", owner: "Broker team" },
        { label: "Booking documents", status: "Review", owner: "Admin" },
        { label: "Payment milestone", status: "Pending", owner: "Builder" },
      ],
      roleViewTitle: "Buyer Workspace",
      roleView: ["Saved properties", "Visit calendar", "KYC documents", "Broker messages"],
      notification: "New site visit request submitted",
      documentCard: "Booking form waiting for review",
    },
    problems: [
      card("Buyer requests are scattered", "Property inquiries, visit preferences, and follow-ups live across calls and chats.", MessageCircle),
      card("Documents are hard to track", "KYC, booking forms, allotment letters, and payment proofs get lost in separate threads.", FileText),
      card("Site visit status needs manual updates", "Buyers and brokers repeatedly ask what is confirmed, pending, or rescheduled.", CalendarCheck),
      card("Sales teams lack one view", "Builders need better visibility into buyer progress, broker activity, and pending documents.", BarChart3),
    ],
    fixes: [
      card("Buyer login workspace", "Buyers can view visits, saved properties, documents, and status in one secure place.", UserCheck),
      card("Broker and sales role access", "Brokers see assigned leads, follow-ups, documents, and next actions.", Users),
      card("Attached document records", "Every uploaded file stays linked to the right buyer, property, and booking stage.", FileCheck2),
      card("Admin visibility", "Managers can monitor site visits, document gaps, broker queues, and booking movement.", ShieldCheck),
    ],
    rolesDescription:
      "Give buyers, brokers, builder admins, and sales teams separate portal views while keeping every request connected to the same property workflow.",
    roles: [
      role("buyer", "Buyer Portal", "Customer access", "Buyers can track properties, visits, documents, payments, and broker communication.", Home, ["Saved properties", "Visit status", "Document upload", "Broker messages"], "Faster buyer follow-up"),
      role("broker", "Broker Portal", "Channel team", "Brokers manage assigned inquiries, property sharing, visit calendar, and follow-up notes.", Handshake, ["Lead inbox", "Visit calendar", "Property sharing", "Follow-up notes"], "Cleaner broker pipeline"),
      role("builder-admin", "Builder/Admin Portal", "Management", "Builder teams control project inventory, buyer records, documents, and booking stages.", Building2, ["Project inventory", "Buyer records", "Document review", "Sales reports"], "Better project visibility"),
      role("sales", "Sales Team Portal", "Internal team", "Sales teams see assigned leads, call notes, visit status, and deal updates.", Users, ["Assigned leads", "Call notes", "Visit status", "Deal updates"], "Stronger sales discipline"),
    ],
    modulesDescription: "Portal modules for property inquiries, documents, visits, broker visibility, and builder admin control.",
    modules: sharedModules,
    workflowTitle: "Property Portal Workflow",
    workflowSteps: [
      card("Buyer Login", "Buyer signs in to view properties, documents, and visit status.", LockKeyhole),
      card("Submit Request", "They request a site visit, document review, or booking update.", ClipboardList),
      card("Upload Documents", "KYC and booking files stay attached to the buyer record.", FileText),
      card("Broker / Admin Review", "The right role reviews and updates the next stage.", UserCheck),
      card("Status Update", "Buyer receives portal notifications and timeline updates.", Bell),
      card("Report", "Managers review visit, booking, and document pipeline health.", BarChart3),
    ],
    securityDescription: "Protect buyer documents, property interests, payment records, and broker activity with controlled access.",
    securityItems: sharedSecurity,
    demoGalleryDescription: "Sample portal experiences for buyer access, broker coordination, documents, and builder admin review.",
    demoGallery: [
      demo("Buyer Portal Demo", "Saved properties, site visits, and document status.", Home, ["Visits", "Documents", "Messages"]),
      demo("Broker Portal Demo", "Assigned leads, property sharing, and follow-up notes.", Handshake, ["Lead inbox", "Calendar", "Notes"]),
      demo("Document Center Demo", "Booking forms, KYC files, and verification stages.", FileText, ["KYC", "Review", "History"]),
      demo("Builder Admin Demo", "Project requests, broker activity, and booking reports.", Building2, ["Projects", "Approvals", "Reports"]),
    ],
    pricingDescription: "Choose a real estate portal package based on user roles, document workflows, and builder reporting needs.",
    pricingPlans: [
      plan("Property Portal Starter", `${rupee}40,000`, false, starterFeatures),
      plan("Real Estate Portal Growth", `${rupee}85,000`, true, growthFeatures),
      plan("Builder Portal Custom", `${rupee}1,60,000+`, false, customFeatures),
    ],
    testimonials: [
      { quote: "The portal flow makes property visits and buyer documents much easier to manage.", name: "Riya Malhotra", role: "Sample provider - Property consultant" },
      { quote: "Builder admin visibility is the strongest part. Every buyer stage has context.", name: "Arjun Sethi", role: "Demo brand - Real estate agency" },
      { quote: "It feels practical for brokers because their tasks and follow-ups are finally separated from chat noise.", name: "Neha Kapoor", role: "Sample provider - Developer team" },
    ],
    trustDescription: "Portal architecture for buyer privacy, broker accountability, and admin-controlled property workflows.",
    trustItems: [
      { title: "Buyer Data Privacy", icon: ShieldCheck },
      { title: "Document Review Control", icon: FileCheck2 },
      { title: "Role-Based Broker Access", icon: Users },
      { title: "Booking Stage History", icon: ClipboardCheck },
    ],
    ctaTitle: "Build a real estate portal that keeps buyers, brokers and builders aligned.",
    ctaDescription:
      "Turn scattered property requests, site visits, booking documents, and broker updates into one secure portal workflow.",
  }),

  education: createPage({
    industrySlug: "education",
    industryName: "Education",
    title: "Student / Parent Portal for Admissions, Documents, Notices and Fee Updates",
    highlight: "Student / Parent Portal",
    description:
      "Give students, parents, teachers, counselors, and admins a secure portal for notices, documents, admissions, assignments, fees, records, and daily academic communication.",
    aliases: ["portal", "student-portal", "parent-portal"],
    heroImage: educationImage,
    heroChips: [
      { label: "Student Login", icon: GraduationCap },
      { label: "Parent Updates", icon: Users },
      { label: "Admissions", icon: ClipboardList },
      { label: "Notices", icon: Bell },
    ],
    heroStats: [["Admissions", "Tracked"], ["Notices", "Delivered"], ["Documents", "Organized"]],
    heroVisual: {
      portalName: "EduDesk",
      sidebar: ["Dashboard", "Programs", "Admissions", "Documents", "Notices", "Reports"],
      stats: [
        { label: "Open Requests", value: "142", change: "+21%" },
        { label: "Pending Docs", value: "58", change: "-12%" },
        { label: "Approvals", value: "36", change: "+8%" },
        { label: "SLA Health", value: "92%", change: "+5%" },
      ],
      pipelineTitle: "Admissions Pipeline",
      pipeline: [
        { label: "Grade 11 inquiry", status: "Counselor", owner: "Admissions" },
        { label: "Transfer certificate", status: "Review", owner: "Admin" },
        { label: "Fee receipt upload", status: "Pending", owner: "Parent" },
      ],
      roleViewTitle: "Student Workspace",
      roleView: ["Class notices", "Assignments", "Admission status", "Study resources"],
      notification: "New notice published for Grade 10",
      documentCard: "Admission document waiting for review",
    },
    problems: [
      card("Notices are scattered", "Students and parents miss updates spread across WhatsApp, PDFs, emails, and calls.", Bell),
      card("Admission documents are hard to verify", "Forms, certificates, receipts, and ID proofs need a controlled review path.", FileText),
      card("Parents keep asking for status", "Fee reminders, attendance, forms, and admissions need transparent progress updates.", Users),
      card("Admins lack workload visibility", "Counselor follow-ups, pending forms, and teacher updates are hard to monitor.", BarChart3),
    ],
    fixes: [
      card("Student and parent login", "Each user gets a secure portal with the right academic and admission actions.", LockKeyhole),
      card("Admission tracking", "Inquiry, form, document, counselor, and fee stages stay visible.", ClipboardList),
      card("Document center", "Certificates, receipts, forms, and reports remain attached to student records.", FileCheck2),
      card("Admin dashboard", "Counselors and admins can monitor admissions, notices, and document gaps.", School),
    ],
    rolesDescription:
      "Give students, parents, teachers, counselors, and admins different portal views while keeping academic records controlled.",
    roles: [
      role("student", "Student Portal", "Student access", "Students view assignments, notices, resources, program details, and support updates.", GraduationCap, ["Assignments", "Notices", "Resources", "Support requests"], "Better student engagement"),
      role("parent", "Parent Portal", "Guardian access", "Parents track attendance, fee reminders, notices, documents, and teacher updates.", Users, ["Attendance", "Fee reminders", "Notices", "Teacher updates"], "Clearer parent communication"),
      role("teacher", "Teacher Portal", "Faculty access", "Teachers publish homework, student updates, class notices, and attendance entries.", School, ["Homework posting", "Attendance", "Student updates", "Announcements"], "Faster academic operations"),
      role("admin", "Admin Portal", "Institution control", "Admins manage admissions, documents, users, notices, and reports.", ClipboardCheck, ["Admission leads", "Document review", "User roles", "Reports"], "Higher admission visibility"),
    ],
    modulesDescription: "Education portal modules for admissions, notices, documents, parent communication, and academic records.",
    modules: sharedModules,
    workflowTitle: "Education Portal Workflow",
    workflowSteps: [
      card("Student / Parent Login", "Users sign in to their role-specific academic workspace.", LockKeyhole),
      card("Submit Request", "They submit admissions, support, certificate, or fee-related requests.", ClipboardList),
      card("Upload Documents", "Forms, IDs, certificates, and receipts stay attached.", FileText),
      card("Admin Review", "Counselors and admins review and update progress.", UserCheck),
      card("Notification", "Students and parents receive portal alerts.", Bell),
      card("Record", "Final status and document history stay available.", ReceiptText),
    ],
    securityDescription: "Secure student records, parent access, document uploads, and admin review workflows.",
    securityItems: sharedSecurity,
    demoGalleryDescription: "Sample student, parent, teacher, and admissions portal screens for education providers.",
    demoGallery: [
      demo("Student Portal Demo", "Assignments, notices, resources, and support.", GraduationCap, ["Tasks", "Notices", "Resources"]),
      demo("Parent Portal Demo", "Attendance, fees, documents, and teacher updates.", Users, ["Attendance", "Fees", "Updates"]),
      demo("Admissions Portal Demo", "Program inquiry, document review, and counselor status.", ClipboardList, ["Forms", "Docs", "Counselor"]),
      demo("Teacher Portal Demo", "Homework, class notices, and attendance tools.", School, ["Classes", "Homework", "Attendance"]),
    ],
    pricingDescription: "Choose an education portal package based on student roles, admissions workflows, and parent communication needs.",
    pricingPlans: [
      plan("Institute Portal Starter", `${rupee}35,000`, false, starterFeatures),
      plan("Education Portal Growth", `${rupee}80,000`, true, growthFeatures),
      plan("Campus Portal Custom", `${rupee}1,50,000+`, false, customFeatures),
    ],
    testimonials: [
      { quote: "The parent and student portal flow feels clear without making the admin side heavy.", name: "Aditi Sharma", role: "Sample provider - Academy coordinator" },
      { quote: "Admissions tracking and document review are exactly the kind of structure institutes need.", name: "Rohan Mehta", role: "Demo brand - Coaching institute" },
      { quote: "Notices and fee updates become much easier when parents have one workspace.", name: "Priya Nair", role: "Sample provider - School admin" },
    ],
    trustDescription: "Education portals need privacy-aware student records, controlled parent access, and clear admin governance.",
    trustItems: [
      { title: "Student Data Privacy", icon: ShieldCheck },
      { title: "Parent Role Access", icon: Users },
      { title: "Admission Document Control", icon: FileCheck2 },
      { title: "Academic Audit History", icon: ClipboardCheck },
    ],
    ctaTitle: "Build an education portal that keeps students, parents and teams informed.",
    ctaDescription:
      "Organize admissions, notices, documents, fees, assignments, and parent communication inside one secure workspace.",
  }),

  manufacturing: createPage({
    industrySlug: "manufacturing",
    industryName: "Manufacturing",
    title: "Dealer / Vendor Portal for RFQs, Orders, Documents and Dispatch Status",
    highlight: "Dealer / Vendor Portal",
    description:
      "Give dealers, vendors, admins, and dispatch teams a secure portal for RFQs, order requests, compliance documents, approvals, inventory visibility, and shipment updates.",
    aliases: ["portal", "vendor-portal", "dealer-portal"],
    heroImage: manufacturingImage,
    heroChips: [
      { label: "Dealer Requests", icon: Factory },
      { label: "Vendor Documents", icon: FileText },
      { label: "Approvals", icon: ClipboardCheck },
      { label: "Dispatch Visibility", icon: Truck },
    ],
    heroStats: [["RFQs", "18 active"], ["Orders", "24 open"], ["Dispatch", "Live"]],
    heroVisual: {
      portalName: "FactoryDesk",
      sidebar: ["Dashboard", "RFQs", "Orders", "Documents", "Approvals", "Reports"],
      stats: [
        { label: "Open Requests", value: "118", change: "+12%" },
        { label: "Pending Docs", value: "41", change: "-8%" },
        { label: "Approvals", value: "27", change: "+15%" },
        { label: "SLA Health", value: "91%", change: "+7%" },
      ],
      pipelineTitle: "Dealer Request Pipeline",
      pipeline: [
        { label: "RFQ for Gear Systems", status: "Review", owner: "Sales admin" },
        { label: "PO #PO-8842", status: "Approved", owner: "Operations" },
        { label: "DS-7781 shipment", status: "In transit", owner: "Dispatch" },
      ],
      roleViewTitle: "Dealer Workspace",
      roleView: ["Product catalog", "RFQ requests", "Order status", "Dispatch tracking"],
      notification: "New RFQ submitted by Dealer One",
      documentCard: "Vendor compliance document waiting for review",
    },
    problems: [
      card("Dealer requests are scattered", "RFQs, orders, stock questions, and follow-ups arrive through calls, email, and chats.", MessageCircle),
      card("Vendor documents are hard to control", "Invoices, compliance documents, certificates, and purchase files need traceable review.", FileText),
      card("Approvals move slowly", "Purchase orders and dispatch approvals depend on manual chasing across teams.", ClipboardCheck),
      card("Dispatch visibility is weak", "Dealers repeatedly ask for shipment status, ETA, and proof updates.", Truck),
    ],
    fixes: [
      card("Dealer portal access", "Dealers can request quotes, view catalog items, check status, and track dispatches.", Factory),
      card("Vendor document center", "Vendors upload invoices, compliance files, and purchase documents in one workspace.", FileCheck2),
      card("Approval queues", "Admins can review RFQs, POs, documents, and dispatch requests with clear ownership.", ClipboardCheck),
      card("Dispatch notifications", "Shipment stages, proof, and ETA updates become visible to the right users.", Bell),
    ],
    rolesDescription:
      "Create separate portal workspaces for dealers, vendors, admins, and dispatch teams while keeping RFQs, documents, approvals, and orders connected.",
    roles: [
      role("dealer", "Dealer Portal", "Dealer access", "Dealers login to request quotes, place orders, upload documents, and track dispatch status.", Factory, ["Product catalog", "RFQ requests", "Order status", "Dispatch tracking"], "Faster dealer request handling"),
      role("vendor", "Vendor Portal", "Vendor access", "Vendors submit invoices, upload compliance documents, review purchase requests, and track approvals.", Handshake, ["Invoice upload", "Compliance docs", "Purchase requests", "Approval status"], "Cleaner vendor coordination"),
      role("admin", "Admin Portal", "Operations control", "Admins control users, approvals, documents, request stages, and operational reports.", Settings2, ["User roles", "Approval queue", "Document review", "Reports"], "Better operational control"),
      role("dispatch", "Dispatch Team Portal", "Logistics team", "Dispatch teams update shipment stages, upload proof, and trigger dealer notifications.", Truck, ["Shipment stages", "Proof upload", "ETA updates", "Dealer alerts"], "Improved dispatch visibility"),
    ],
    modulesDescription: "Manufacturing portal modules for RFQs, orders, documents, approvals, dealer visibility, and dispatch coordination.",
    modules: sharedModules,
    workflowTitle: "Manufacturing Portal Workflow",
    workflowSteps: [
      card("Dealer Login", "Dealers enter a secure workspace for catalog, RFQ, and order access.", LockKeyhole),
      card("RFQ Request", "Dealer submits product, quantity, document, and delivery details.", ClipboardList),
      card("Admin Approval", "Admins review pricing, documents, and approval status.", ClipboardCheck),
      card("Dispatch Update", "Logistics updates shipment status and proof.", Truck),
      card("Dealer Notification", "Dealer receives ETA and status alerts.", Bell),
      card("Report", "Managers track RFQs, order stages, dispatch health, and SLA.", BarChart3),
    ],
    securityDescription: "Protect dealer pricing, vendor documents, purchase requests, and dispatch updates with controlled access.",
    securityItems: sharedSecurity,
    demoGalleryDescription: "Sample dealer, vendor, dispatch, and admin portal screens for industrial operations.",
    demoGallery: [
      demo("Dealer Portal Demo", "Catalog access, RFQ requests, and order tracking.", Factory, ["Catalog", "RFQ", "Orders"]),
      demo("Vendor Document Demo", "Invoice upload, compliance docs, and review status.", FileText, ["Invoices", "Docs", "Review"]),
      demo("Dispatch Portal Demo", "Shipment stages, ETA updates, and delivery proof.", Truck, ["ETA", "Proof", "Alerts"]),
      demo("Admin Approval Demo", "RFQ queues, PO approvals, and operational reports.", ClipboardCheck, ["Approvals", "Queues", "Reports"]),
    ],
    pricingDescription: "Choose a manufacturing portal package based on dealer roles, vendor documents, approvals, and dispatch visibility.",
    pricingPlans: [
      plan("Industrial Portal Starter", `${rupee}50,000`, false, starterFeatures),
      plan("B2B Portal Growth", `${rupee}1,05,000`, true, growthFeatures),
      plan("Manufacturing Portal Custom", `${rupee}1,90,000+`, false, customFeatures),
    ],
    testimonials: [
      { quote: "Dealer RFQs and dispatch status finally feel like one connected workflow.", name: "Nikhil Rao", role: "Sample provider - Industrial supplier" },
      { quote: "The vendor document flow is practical for compliance-heavy manufacturing teams.", name: "Meera Soni", role: "Demo brand - Factory operations" },
      { quote: "Approval queues make the portal feel like a real operating layer, not just a login area.", name: "Vikram Jain", role: "Sample provider - B2B distributor" },
    ],
    trustDescription: "Manufacturing portals need secure dealer access, document governance, approval records, and dispatch audit trails.",
    trustItems: [
      { title: "Dealer Role Access", icon: Users },
      { title: "Vendor Document Control", icon: FileCheck2 },
      { title: "Approval Audit Trail", icon: ClipboardCheck },
      { title: "Dispatch Status History", icon: Truck },
    ],
    ctaTitle: "Build a manufacturing portal that connects dealers, vendors and operations.",
    ctaDescription:
      "Turn RFQs, documents, approvals, orders, and dispatch updates into one secure role-based portal.",
  }),

  retail: createPage({
    industrySlug: "retail",
    industryName: "Retail",
    title: "Customer / Loyalty Portal for Orders, Rewards, Returns and Support",
    highlight: "Customer / Loyalty Portal",
    description:
      "Give customers, store admins, support teams, and loyalty managers a secure portal for order status, returns, documents, rewards, service requests, and account updates.",
    aliases: ["portal", "customer-portal", "store-portal"],
    heroImage: retailImage,
    heroChips: [
      { label: "Customer Accounts", icon: ShoppingBag },
      { label: "Order Status", icon: PackageCheck },
      { label: "Returns", icon: Route },
      { label: "Loyalty", icon: Tags },
    ],
    heroStats: [["Orders", "Tracked"], ["Returns", "Controlled"], ["Rewards", "Visible"]],
    heroVisual: {
      portalName: "RetailDesk",
      sidebar: ["Dashboard", "Orders", "Returns", "Rewards", "Support", "Reports"],
      stats: [
        { label: "Open Requests", value: "204", change: "+19%" },
        { label: "Pending Docs", value: "22", change: "-6%" },
        { label: "Approvals", value: "49", change: "+11%" },
        { label: "SLA Health", value: "96%", change: "+4%" },
      ],
      pipelineTitle: "Customer Support Pipeline",
      pipeline: [
        { label: "Order #RK-4102", status: "Packed", owner: "Store team" },
        { label: "Return request", status: "Review", owner: "Support" },
        { label: "Reward adjustment", status: "Approved", owner: "Loyalty" },
      ],
      roleViewTitle: "Customer Workspace",
      roleView: ["Orders", "Returns", "Rewards", "Support tickets"],
      notification: "Return request submitted",
      documentCard: "Invoice copy ready for download",
    },
    problems: [
      card("Customers ask repeatedly for order status", "Support teams spend time answering simple order, delivery, and return questions.", PackageCheck),
      card("Returns need structure", "Return reasons, documents, approvals, and updates are often handled manually.", Route),
      card("Loyalty visibility is weak", "Customers cannot clearly see rewards, coupons, account activity, and eligibility.", Tags),
      card("Store teams lack one support view", "Online orders, store requests, refunds, and tickets need one admin workspace.", Store),
    ],
    fixes: [
      card("Customer account portal", "Customers can see orders, invoices, returns, rewards, and support status.", UserCheck),
      card("Return request workflow", "Return details, proof, review status, and refund stages stay organized.", Route),
      card("Loyalty workspace", "Reward points, offers, coupons, and customer segments become visible.", Tags),
      card("Store admin dashboard", "Admins can monitor order requests, support tickets, and loyalty activity.", Store),
    ],
    rolesDescription:
      "Build customer, store admin, loyalty, and support portal views so retail requests move cleanly from order to resolution.",
    roles: [
      role("customer", "Customer Portal", "Shopper access", "Customers track orders, returns, rewards, invoices, and support tickets.", ShoppingBag, ["Order tracking", "Return request", "Reward balance", "Support tickets"], "Better self-service"),
      role("store-admin", "Store Admin Portal", "Store control", "Store teams manage product requests, orders, returns, and customer updates.", Store, ["Order queues", "Product updates", "Return review", "Customer requests"], "Faster store operations"),
      role("support", "Support Portal", "Service team", "Support teams resolve customer tickets, order issues, returns, and account updates.", LifeBuoy, ["Ticket inbox", "Order status", "Return notes", "Customer history"], "Faster response time"),
      role("loyalty", "Loyalty Manager Portal", "Retention team", "Managers control coupons, rewards, customer segments, and campaign visibility.", Tags, ["Reward points", "Coupons", "Campaigns", "Segments"], "Better retention"),
    ],
    modulesDescription: "Retail portal modules for accounts, orders, returns, support, rewards, and store admin visibility.",
    modules: sharedModules,
    workflowTitle: "Retail Portal Workflow",
    workflowSteps: [
      card("Customer Login", "Customer enters a secure account workspace.", LockKeyhole),
      card("Submit Request", "They request return, support, invoice, or account help.", ClipboardList),
      card("Attach Details", "Proof, invoice, photos, or notes stay linked to the request.", FileText),
      card("Store Review", "Store or support team reviews status and next step.", Store),
      card("Status Update", "Customer receives portal and email updates.", Bell),
      card("Report", "Managers monitor tickets, returns, orders, and loyalty activity.", BarChart3),
    ],
    securityDescription: "Protect customer accounts, order records, return proof, loyalty activity, and support history.",
    securityItems: sharedSecurity,
    demoGalleryDescription: "Sample customer account, return, support, and loyalty portal experiences for retail brands.",
    demoGallery: [
      demo("Customer Portal Demo", "Orders, invoices, returns, and rewards.", ShoppingBag, ["Orders", "Invoices", "Rewards"]),
      demo("Return Workflow Demo", "Return request, proof upload, and refund stage.", Route, ["Returns", "Proof", "Refund"]),
      demo("Support Portal Demo", "Tickets, order issues, and customer notes.", LifeBuoy, ["Tickets", "Status", "Notes"]),
      demo("Loyalty Portal Demo", "Rewards, coupons, and campaign segments.", Tags, ["Rewards", "Coupons", "Segments"]),
    ],
    pricingDescription: "Choose a retail portal package based on customer accounts, order visibility, returns, and loyalty controls.",
    pricingPlans: [
      plan("Retail Portal Starter", `${rupee}35,000`, false, starterFeatures),
      plan("Commerce Portal Growth", `${rupee}85,000`, true, growthFeatures),
      plan("Retail Portal Custom", `${rupee}1,60,000+`, false, customFeatures),
    ],
    testimonials: [
      { quote: "The order and return portal makes customer support feel more organized from day one.", name: "Kavya Shah", role: "Demo brand - Retail operator" },
      { quote: "Rewards and account visibility are useful without making the customer portal complex.", name: "Ritika Bansal", role: "Sample provider - Lifestyle store" },
      { quote: "Support teams get a cleaner queue because requests come with order context.", name: "Manav Iyer", role: "Sample provider - D2C brand" },
    ],
    trustDescription: "Retail portals require customer privacy, transaction context, support history, and controlled admin access.",
    trustItems: [
      { title: "Customer Data Privacy", icon: ShieldCheck },
      { title: "Order History Control", icon: PackageCheck },
      { title: "Return Proof History", icon: Route },
      { title: "Support Audit Trail", icon: ClipboardCheck },
    ],
    ctaTitle: "Build a retail portal that reduces support load and improves customer trust.",
    ctaDescription:
      "Give customers a secure place to track orders, returns, rewards, invoices, and support without repeated follow-ups.",
  }),

  finance: createPage({
    industrySlug: "finance",
    industryName: "Finance",
    title: "Client Portal for Documents, Requests, Payments and Advisory Updates",
    highlight: "Client Portal",
    description:
      "Give clients, advisors, document reviewers, and admins a secure portal for service requests, document collection, consultation status, approvals, statements, and advisory updates.",
    aliases: ["portal", "client-portal", "finance-portal"],
    heroImage: financeImage,
    heroChips: [
      { label: "Client Access", icon: Landmark },
      { label: "Document Checklist", icon: FileText },
      { label: "Approvals", icon: ClipboardCheck },
      { label: "Advisor Updates", icon: MessageCircle },
    ],
    heroStats: [["Clients", "Secure"], ["Docs", "Checklist"], ["Advisors", "Assigned"]],
    heroVisual: {
      portalName: "FinDesk",
      sidebar: ["Dashboard", "Services", "Documents", "Approvals", "Messages", "Reports"],
      stats: [
        { label: "Open Requests", value: "76", change: "+14%" },
        { label: "Pending Docs", value: "31", change: "-10%" },
        { label: "Approvals", value: "18", change: "+9%" },
        { label: "SLA Health", value: "95%", change: "+5%" },
      ],
      pipelineTitle: "Client Service Pipeline",
      pipeline: [
        { label: "Investment review", status: "Advisor", owner: "A. Mehta" },
        { label: "KYC document set", status: "Pending", owner: "Client" },
        { label: "Loan advisory request", status: "Approved", owner: "Admin" },
      ],
      roleViewTitle: "Client Workspace",
      roleView: ["Service requests", "Document checklist", "Consultation status", "Advisor notes"],
      notification: "Client uploaded missing KYC document",
      documentCard: "Agreement waiting for review",
    },
    problems: [
      card("Client documents are scattered", "KYC, statements, agreements, and forms are difficult to collect and verify across channels.", FileText),
      card("Advisory status is unclear", "Clients ask where their consultation, approval, or service request stands.", MessageCircle),
      card("Approvals need governance", "Financial requests often need reviewer visibility, admin control, and history.", ClipboardCheck),
      card("Advisors need cleaner pipelines", "Client notes, tasks, pending documents, and follow-ups need one role-based workspace.", Landmark),
    ],
    fixes: [
      card("Client portal login", "Clients can submit service requests, upload files, and track advisory progress.", LockKeyhole),
      card("Document checklist", "Required files, missing documents, and review status become clear.", FileCheck2),
      card("Advisor workspace", "Advisors see assigned clients, tasks, notes, and document status.", Users),
      card("Approval visibility", "Admins can monitor request queues, compliance stages, and reports.", ShieldCheck),
    ],
    rolesDescription:
      "Create secure workspaces for clients, advisors, document reviewers, and admins while keeping service requests and files controlled.",
    roles: [
      role("client", "Client Portal", "Client access", "Clients submit service requests, upload documents, view status, and receive advisor updates.", Landmark, ["Service requests", "Documents", "Consultation status", "Advisor updates"], "More organized client journey"),
      role("advisor", "Advisor Portal", "Advisor access", "Advisors manage client pipeline, document gaps, meetings, and follow-up tasks.", Users, ["Client pipeline", "Task reminders", "Document review", "Meeting notes"], "Faster advisory workflow"),
      role("review", "Document Review Portal", "Reviewer team", "Reviewers track checklists, approval status, missing files, and secure notes.", FileCheck2, ["Checklist tracking", "Approval status", "Missing alerts", "Secure notes"], "Less document delay"),
      role("admin", "Admin Portal", "Operations control", "Admins assign advisors, track services, monitor requests, and export reports.", Settings2, ["Lead management", "Service tracking", "Advisor assignment", "Reports"], "Better operational control"),
    ],
    modulesDescription: "Finance portal modules for clients, documents, consultations, approvals, advisors, and operational visibility.",
    modules: sharedModules,
    workflowTitle: "Finance Portal Workflow",
    workflowSteps: [
      card("Client Login", "Client accesses a secure advisory workspace.", LockKeyhole),
      card("Document Upload", "Required documents are uploaded against a checklist.", FileText),
      card("Advisor Review", "Advisor reviews details and requests missing items.", UserCheck),
      card("Approval", "Admin or reviewer moves request through approval stages.", ClipboardCheck),
      card("Status Update", "Client receives next-step notifications.", Bell),
      card("Report", "Managers review request, document, and advisor activity.", BarChart3),
    ],
    securityDescription: "Finance portals need secure document handling, role-based access, review history, and compliance-friendly workflows.",
    securityItems: sharedSecurity,
    demoGalleryDescription: "Sample finance client, advisor, document, and approval portal experiences.",
    demoGallery: [
      demo("Client Portal Demo", "Service requests, documents, and consultation status.", Landmark, ["Requests", "Docs", "Status"]),
      demo("Advisor Portal Demo", "Client pipeline, tasks, and meeting notes.", Users, ["Pipeline", "Tasks", "Notes"]),
      demo("Document Center Demo", "Checklist tracking, missing alerts, and review notes.", FileCheck2, ["Checklist", "Alerts", "Review"]),
      demo("Approval Portal Demo", "Service approvals, admin assignment, and reporting.", ClipboardCheck, ["Approvals", "Admin", "Reports"]),
    ],
    pricingDescription: "Choose a finance portal package based on client access, document workflows, advisor roles, and reporting depth.",
    pricingPlans: [
      plan("Finance Portal Starter", `${rupee}55,000`, false, starterFeatures),
      plan("Advisory Portal Growth", `${rupee}1,15,000`, true, growthFeatures),
      plan("Finance Portal Custom", `${rupee}2,10,000+`, false, customFeatures),
    ],
    testimonials: [
      { quote: "The client checklist and advisor workflow make finance document collection much more controlled.", name: "Ankit Verma", role: "Sample provider - Financial advisor" },
      { quote: "Clients can understand status without calling repeatedly. That is the real value.", name: "Megha Rao", role: "Demo brand - Advisory office" },
      { quote: "The review portal makes approvals traceable and easier to manage.", name: "Sahil Jain", role: "Sample provider - Finance operations" },
    ],
    trustDescription: "Finance portals must be designed for sensitive client data, document review, and controlled advisory access.",
    trustItems: [
      { title: "Client Data Privacy", icon: ShieldCheck },
      { title: "Document Checklist Control", icon: FileCheck2 },
      { title: "Advisor Role Access", icon: Users },
      { title: "Approval Audit Trail", icon: ClipboardCheck },
    ],
    ctaTitle: "Build a finance portal that gives clients clarity and teams control.",
    ctaDescription:
      "Organize documents, advisory requests, approvals, consultations, and client updates in one secure role-based portal.",
  }),

  insurance: createPage({
    industrySlug: "insurance",
    industryName: "Insurance",
    title: "Policyholder and Agent Portal for Claims, Renewals and Documents",
    highlight: "Claims, Renewals and Documents",
    description:
      "Give policyholders, agents, claims teams, and admins a secure portal for policy access, claim requests, renewal reminders, documents, coverage updates, and service communication.",
    aliases: ["portal", "policyholder-portal", "agent-portal"],
    heroImage: insuranceImage,
    heroChips: [
      { label: "Policy Access", icon: ShieldCheck },
      { label: "Claims", icon: ClipboardList },
      { label: "Renewals", icon: CalendarCheck },
      { label: "Agent Support", icon: MessageCircle },
    ],
    heroStats: [["Claims", "Tracked"], ["Renewals", "Visible"], ["Docs", "Secure"]],
    heroVisual: {
      portalName: "PolicyDesk",
      sidebar: ["Dashboard", "Policies", "Claims", "Renewals", "Documents", "Reports"],
      stats: [
        { label: "Open Requests", value: "98", change: "+16%" },
        { label: "Pending Docs", value: "45", change: "-7%" },
        { label: "Approvals", value: "22", change: "+10%" },
        { label: "SLA Health", value: "93%", change: "+5%" },
      ],
      pipelineTitle: "Policy Service Pipeline",
      pipeline: [
        { label: "Claim #CL-2048", status: "Review", owner: "Claims team" },
        { label: "Motor renewal", status: "Due", owner: "Agent" },
        { label: "Coverage document", status: "Approved", owner: "Admin" },
      ],
      roleViewTitle: "Policyholder Workspace",
      roleView: ["Policies", "Claims", "Renewals", "Agent chat"],
      notification: "Renewal reminder sent to policyholder",
      documentCard: "Claim document waiting for review",
    },
    problems: [
      card("Policy documents are hard to find", "Customers depend on agents for basic policy, coverage, and document access.", FileText),
      card("Claims need structured intake", "Claim requests, documents, proof, and status updates require controlled workflow.", ClipboardList),
      card("Renewal follow-ups are missed", "Agents and customers need clearer renewal reminders and status visibility.", CalendarCheck),
      card("Agent communication is scattered", "Customer notes, claim status, and policy updates get split across channels.", MessageCircle),
    ],
    fixes: [
      card("Policyholder portal", "Customers can access policies, claims, renewals, and documents in one secure workspace.", ShieldCheck),
      card("Claim request workflow", "Claims move through structured forms, document upload, review, and status updates.", ClipboardCheck),
      card("Renewal visibility", "Renewal dates, reminders, premium details, and agent follow-ups become visible.", CalendarCheck),
      card("Agent and admin dashboards", "Agents and admins can monitor claims, renewals, customer requests, and reports.", Users),
    ],
    rolesDescription:
      "Create controlled portal experiences for policyholders, agents, claims teams, and admins while protecting policy and claim data.",
    roles: [
      role("policyholder", "Policyholder Portal", "Customer access", "Policyholders view policies, renewals, claims, documents, and agent communication.", ShieldCheck, ["Policy dashboard", "Renewals", "Claims", "Agent chat"], "Better policy retention"),
      role("agent", "Agent Portal", "Agent access", "Agents manage customer follow-ups, claims, renewal reminders, and notes.", Users, ["Lead follow-ups", "Claim status", "Renewal reminders", "Customer notes"], "Faster agent response"),
      role("claims", "Claims Team Portal", "Claims team", "Claims teams review requests, documents, status updates, and escalations.", ClipboardList, ["Claim requests", "Document review", "Status updates", "Escalations"], "Cleaner claim handling"),
      role("admin", "Admin Portal", "Operations control", "Admins track policy analytics, agent performance, renewal pipeline, and claims dashboard.", BarChart3, ["Policy analytics", "Agent performance", "Renewal pipeline", "Claim dashboard"], "Better business visibility"),
    ],
    modulesDescription: "Insurance portal modules for policy access, claims, renewals, documents, agents, and admin reporting.",
    modules: sharedModules,
    workflowTitle: "Insurance Portal Workflow",
    workflowSteps: [
      card("Policyholder Login", "Customer enters a secure policy workspace.", LockKeyhole),
      card("Submit Claim / Renewal", "They submit claim, renewal, or service request details.", ClipboardList),
      card("Upload Docs", "Proof, policy files, and claim documents stay attached.", FileText),
      card("Agent Review", "Agent or claims team reviews and updates status.", UserCheck),
      card("Status Updates", "Customer receives renewal, claim, and document alerts.", Bell),
      card("Report", "Admins monitor claims, renewals, agents, and service workload.", BarChart3),
    ],
    securityDescription: "Insurance portals need controlled policy access, claim document protection, and clear audit history.",
    securityItems: sharedSecurity,
    demoGalleryDescription: "Sample policyholder, claims, renewal, and agent portal views for insurance teams.",
    demoGallery: [
      demo("Policyholder Portal Demo", "Policies, renewals, documents, and agent chat.", ShieldCheck, ["Policies", "Renewals", "Chat"]),
      demo("Claim Support Demo", "Claim intake, document upload, and status updates.", ClipboardList, ["Claims", "Docs", "Status"]),
      demo("Renewal Portal Demo", "Renewal reminders, premium notes, and agent tasks.", CalendarCheck, ["Renewal", "Tasks", "Alerts"]),
      demo("Agent Portal Demo", "Customer notes, follow-ups, and policy pipeline.", Users, ["Customers", "Notes", "Pipeline"]),
    ],
    pricingDescription: "Choose an insurance portal package based on policyholder access, claims, renewals, and agent workflows.",
    pricingPlans: [
      plan("Insurance Portal Starter", `${rupee}45,000`, false, starterFeatures),
      plan("Policy Portal Growth", `${rupee}95,000`, true, growthFeatures),
      plan("Insurance Portal Custom", `${rupee}1,80,000+`, false, customFeatures),
    ],
    testimonials: [
      { quote: "The policyholder portal gives claims and renewals a much clearer service path.", name: "Ishaan Kapoor", role: "Demo brand - Insurance desk" },
      { quote: "Agents can finally see renewal tasks and claim context in one place.", name: "Pooja Menon", role: "Sample provider - Policy advisor" },
      { quote: "Document upload and status tracking make this portal useful for real customer support.", name: "Rahil Shah", role: "Sample provider - Claims consultant" },
    ],
    trustDescription: "Insurance portals require policy privacy, claim document security, agent permissions, and renewal audit history.",
    trustItems: [
      { title: "Policy Data Privacy", icon: ShieldCheck },
      { title: "Claim Document Control", icon: FileCheck2 },
      { title: "Agent Role Access", icon: Users },
      { title: "Renewal History", icon: CalendarCheck },
    ],
    ctaTitle: "Build an insurance portal that simplifies claims, renewals and policy support.",
    ctaDescription:
      "Give policyholders, agents, claims teams, and admins one secure workspace for documents, requests, and status updates.",
  }),

  travel: createPage({
    industrySlug: "travel",
    industryName: "Travel",
    title: "Traveler and Agent Portal for Bookings, Vouchers and Trip Updates",
    highlight: "Trip Updates",
    description:
      "Give travelers, agents, operations teams, and admins a secure portal for booking status, itinerary documents, vouchers, visa files, payment updates, support requests, and trip coordination.",
    aliases: ["portal", "traveler-portal", "agent-portal"],
    heroImage: travelImage,
    heroChips: [
      { label: "Booking Status", icon: Plane },
      { label: "Vouchers", icon: FileText },
      { label: "Itinerary", icon: Route },
      { label: "Travel Support", icon: MessageCircle },
    ],
    heroStats: [["Bookings", "Visible"], ["Vouchers", "Ready"], ["Trips", "Tracked"]],
    heroVisual: {
      portalName: "TripDesk",
      sidebar: ["Dashboard", "Bookings", "Itinerary", "Documents", "Support", "Reports"],
      stats: [
        { label: "Open Requests", value: "132", change: "+22%" },
        { label: "Pending Docs", value: "39", change: "-11%" },
        { label: "Approvals", value: "17", change: "+8%" },
        { label: "SLA Health", value: "94%", change: "+6%" },
      ],
      pipelineTitle: "Trip Request Pipeline",
      pipeline: [
        { label: "Goa family package", status: "Confirmed", owner: "Agent" },
        { label: "Visa document set", status: "Review", owner: "Operations" },
        { label: "Hotel voucher", status: "Ready", owner: "Admin" },
      ],
      roleViewTitle: "Traveler Workspace",
      roleView: ["Bookings", "Itinerary", "Vouchers", "Support"],
      notification: "Traveler uploaded passport copy",
      documentCard: "Hotel voucher ready for download",
    },
    problems: [
      card("Travelers lose trip documents", "Vouchers, itineraries, visa files, invoices, and confirmations get buried in messages.", FileText),
      card("Booking status is unclear", "Customers keep asking about payments, confirmation, hotel status, and itinerary changes.", Plane),
      card("Operations need coordination", "Vendors, vouchers, special requests, and trip updates require a controlled workspace.", Route),
      card("Support is scattered", "Trip questions, document gaps, and changes are hard to attach to the right booking.", MessageCircle),
    ],
    fixes: [
      card("Traveler portal", "Travelers can view bookings, vouchers, itinerary, payment status, and support updates.", UserCheck),
      card("Agent workspace", "Agents manage inquiries, documents, package sharing, and follow-up tasks.", Users),
      card("Operations controls", "Ops teams track vouchers, vendors, trip status, documents, and escalation notes.", Settings2),
      card("Document and support history", "Every voucher, visa file, invoice, and support message stays attached to the trip.", FileCheck2),
    ],
    rolesDescription:
      "Create clear portal workspaces for travelers, agents, operations teams, and admins so trip delivery stays organized.",
    roles: [
      role("traveler", "Traveler Portal", "Traveler access", "Travelers view bookings, vouchers, itineraries, documents, and support updates.", Plane, ["Bookings", "Itinerary", "Vouchers", "Support"], "Better trip experience"),
      role("agent", "Agent Portal", "Sales team", "Agents manage inquiry pipeline, package sharing, follow-ups, and customer notes.", Users, ["Inquiry pipeline", "Package sharing", "Follow-ups", "Customer notes"], "Faster booking conversion"),
      role("operations", "Operations Portal", "Trip delivery", "Operations teams coordinate vouchers, vendors, documents, trip status, and support requests.", Route, ["Voucher updates", "Vendor coordination", "Trip status", "Support requests"], "Smoother trip delivery"),
      role("admin", "Admin Portal", "Business control", "Admins manage packages, booking analytics, consultant assignment, and offer updates.", BarChart3, ["Package management", "Booking analytics", "Consultant assignment", "Offer updates"], "Better travel operations"),
    ],
    modulesDescription: "Travel portal modules for bookings, documents, vouchers, itineraries, support, and operations visibility.",
    modules: sharedModules,
    workflowTitle: "Travel Portal Workflow",
    workflowSteps: [
      card("Traveler Login", "Traveler accesses their secure booking workspace.", LockKeyhole),
      card("Booking Request", "Traveler or agent submits package, date, or support details.", ClipboardList),
      card("Upload Documents", "Passport, visa, and traveler files stay attached.", FileText),
      card("Operations Review", "Team reviews vouchers, vendors, and itinerary readiness.", Route),
      card("Trip Update", "Traveler receives confirmation, voucher, and itinerary alerts.", Bell),
      card("Report", "Admins track bookings, documents, support, and destination demand.", BarChart3),
    ],
    securityDescription: "Protect traveler documents, booking records, payment notes, and itinerary access with role-based control.",
    securityItems: sharedSecurity,
    demoGalleryDescription: "Sample traveler, agent, operations, and document portal experiences for travel teams.",
    demoGallery: [
      demo("Traveler Portal Demo", "Bookings, vouchers, itinerary, and support.", Plane, ["Bookings", "Vouchers", "Support"]),
      demo("Agent Portal Demo", "Inquiry pipeline, package sharing, and follow-ups.", Users, ["Inquiries", "Packages", "Notes"]),
      demo("Operations Portal Demo", "Vouchers, vendors, trip status, and support tasks.", Route, ["Vendors", "Vouchers", "Trip status"]),
      demo("Document Center Demo", "Passport, visa files, invoices, and review state.", FileText, ["Passport", "Visa", "Invoices"]),
    ],
    pricingDescription: "Choose a travel portal package based on traveler access, documents, bookings, and operations workflow.",
    pricingPlans: [
      plan("Travel Portal Starter", `${rupee}40,000`, false, starterFeatures),
      plan("Booking Portal Growth", `${rupee}90,000`, true, growthFeatures),
      plan("Travel Portal Custom", `${rupee}1,70,000+`, false, customFeatures),
    ],
    testimonials: [
      { quote: "The traveler workspace makes vouchers, itinerary, and support feel organized.", name: "Naina Gill", role: "Demo brand - Travel agency" },
      { quote: "Agents can move booking inquiries forward without losing document context.", name: "Aarav Khanna", role: "Sample provider - Tour operator" },
      { quote: "Operations visibility is the difference. Vouchers and vendor updates are no longer invisible.", name: "Mehul Das", role: "Sample provider - Destination planner" },
    ],
    trustDescription: "Travel portals need document privacy, booking status history, support records, and operations access control.",
    trustItems: [
      { title: "Traveler Data Privacy", icon: ShieldCheck },
      { title: "Voucher Document Control", icon: FileCheck2 },
      { title: "Booking Status History", icon: ClipboardCheck },
      { title: "Support Audit Trail", icon: MessageCircle },
    ],
    ctaTitle: "Build a travel portal that gives every traveler and team a clear trip workspace.",
    ctaDescription:
      "Organize bookings, vouchers, documents, itineraries, support, and operations updates inside one secure portal.",
  }),

  automobile: createPage({
    industrySlug: "automobile",
    industryName: "Automobile",
    title: "Customer, Dealer and Service Portal for Automotive Operations",
    highlight: "Automotive Operations",
    description:
      "Give customers, dealers, service advisors, and admins a secure portal for test drives, service history, vehicle documents, offers, finance inquiries, bookings, and status updates.",
    aliases: ["portal", "customer-portal", "dealer-portal"],
    heroImage: automobileImage,
    heroChips: [
      { label: "Customer Access", icon: Car },
      { label: "Service History", icon: Wrench },
      { label: "Test Drives", icon: CalendarCheck },
      { label: "Dealer Control", icon: Store },
    ],
    heroStats: [["Bookings", "Tracked"], ["Service", "Visible"], ["Leads", "Assigned"]],
    heroVisual: {
      portalName: "AutoDesk",
      sidebar: ["Dashboard", "Vehicles", "Test Drives", "Service", "Documents", "Reports"],
      stats: [
        { label: "Open Requests", value: "124", change: "+17%" },
        { label: "Pending Docs", value: "28", change: "-8%" },
        { label: "Approvals", value: "19", change: "+10%" },
        { label: "SLA Health", value: "95%", change: "+5%" },
      ],
      pipelineTitle: "Dealer Service Pipeline",
      pipeline: [
        { label: "SUV test drive", status: "Booked", owner: "Dealer" },
        { label: "Service invoice", status: "Ready", owner: "Advisor" },
        { label: "Finance inquiry", status: "Review", owner: "Admin" },
      ],
      roleViewTitle: "Customer Workspace",
      roleView: ["Vehicle records", "Test drives", "Service booking", "Offers"],
      notification: "Test drive slot confirmed",
      documentCard: "Service invoice ready for download",
    },
    problems: [
      card("Test drive requests are manual", "Customers, sales teams, and dealers need cleaner test drive status and slot coordination.", CalendarCheck),
      card("Service records are scattered", "Service history, invoices, reminders, and advisor notes need one accessible customer record.", Wrench),
      card("Vehicle documents are hard to retrieve", "Insurance, invoices, RC files, and finance papers are often requested repeatedly.", FileText),
      card("Dealer teams lack one view", "Inventory, offers, inquiries, service bookings, and customer status need connected visibility.", Store),
    ],
    fixes: [
      card("Customer portal", "Customers can track test drives, service bookings, documents, offers, and vehicle history.", Car),
      card("Dealer workspace", "Dealers manage inventory inquiries, booking calendars, finance requests, and follow-ups.", Store),
      card("Service advisor portal", "Advisors update slots, job status, reminders, invoices, and customer notes.", Wrench),
      card("Admin reporting", "Admins monitor leads, vehicle performance, bookings, service status, and team activity.", BarChart3),
    ],
    rolesDescription:
      "Create customer, dealer, service advisor, and admin portal views for vehicle sales, service, documents, and follow-up workflows.",
    roles: [
      role("customer", "Customer Portal", "Customer access", "Customers browse records, book test drives, view service history, and access offers.", Car, ["Inventory browsing", "Test drive booking", "Service booking", "Offers"], "More dealership leads"),
      role("dealer", "Dealer Portal", "Dealer access", "Dealers manage inventory, lead inbox, test drive calendar, and finance inquiries.", Store, ["Vehicle inventory", "Lead inbox", "Test drive calendar", "Finance inquiries"], "Faster dealer follow-up"),
      role("service", "Service Advisor Portal", "Service team", "Service advisors track slots, job status, reminders, invoices, and customer updates.", Wrench, ["Service slots", "Job status", "Reminders", "Customer updates"], "Better service retention"),
      role("admin", "Admin Portal", "Business control", "Admins see lead dashboard, vehicle performance, booking analytics, and staff overview.", BarChart3, ["Lead dashboard", "Vehicle performance", "Booking analytics", "Staff overview"], "Better dealership control"),
    ],
    modulesDescription: "Automobile portal modules for customers, dealers, service advisors, test drives, documents, and booking visibility.",
    modules: sharedModules,
    workflowTitle: "Automobile Portal Workflow",
    workflowSteps: [
      card("Customer Login", "Customer enters a secure vehicle and service workspace.", LockKeyhole),
      card("Submit Request", "They request test drive, service booking, finance, or document help.", ClipboardList),
      card("Upload Documents", "Vehicle, service, insurance, or finance documents stay attached.", FileText),
      card("Dealer / Advisor Review", "Dealer or advisor updates next action and status.", UserCheck),
      card("Status Update", "Customer receives booking, service, or offer notifications.", Bell),
      card("Report", "Admins track leads, service bookings, inventory, and staff output.", BarChart3),
    ],
    securityDescription: "Automobile portals need secure customer records, vehicle documents, service history, and dealership role access.",
    securityItems: sharedSecurity,
    demoGalleryDescription: "Sample customer, dealer, service, and document portal experiences for automobile businesses.",
    demoGallery: [
      demo("Customer Portal Demo", "Vehicle records, test drives, offers, and bookings.", Car, ["Vehicles", "Bookings", "Offers"]),
      demo("Dealer Portal Demo", "Inventory, lead inbox, finance requests, and follow-ups.", Store, ["Inventory", "Leads", "Finance"]),
      demo("Service Portal Demo", "Service slots, job status, invoices, and reminders.", Wrench, ["Slots", "Jobs", "Invoices"]),
      demo("Document Center Demo", "Vehicle files, finance papers, and service history.", FileText, ["Files", "Finance", "History"]),
    ],
    pricingDescription: "Choose an automobile portal package based on customer access, dealer workflows, service bookings, and document control.",
    pricingPlans: [
      plan("Auto Portal Starter", `${rupee}45,000`, false, starterFeatures),
      plan("Dealer Portal Growth", `${rupee}1,00,000`, true, growthFeatures),
      plan("Automobile Portal Custom", `${rupee}1,90,000+`, false, customFeatures),
    ],
    testimonials: [
      { quote: "The customer portal makes test drives and service records easier for both customers and advisors.", name: "Rajat Bedi", role: "Sample provider - Auto dealer" },
      { quote: "Dealer follow-up is much clearer when finance inquiries and test drives are in one portal.", name: "Sana Kapoor", role: "Demo brand - Dealership team" },
      { quote: "The service advisor view feels useful for reminders, invoices, and repeat service bookings.", name: "Arjun Nair", role: "Sample provider - Service center" },
    ],
    trustDescription: "Automobile portals require customer privacy, vehicle document control, service history, and dealer permission boundaries.",
    trustItems: [
      { title: "Customer Inquiry Privacy", icon: ShieldCheck },
      { title: "Vehicle Document Control", icon: FileCheck2 },
      { title: "Dealer Role Access", icon: Users },
      { title: "Service History Tracking", icon: Wrench },
    ],
    ctaTitle: "Build an automobile portal that connects customers, dealers and service teams.",
    ctaDescription:
      "Organize test drives, service bookings, documents, offers, finance requests, and dealership updates in one secure portal.",
  }),

  "service-business": createPage({
    industrySlug: "service-business",
    industryName: "Service Business",
    title: "Customer and Field Team Portal for Service Requests and Job Tracking",
    highlight: "Job Tracking",
    description:
      "Give clients, field teams, support staff, and admins a secure portal for quote requests, bookings, job status, files, invoices, approvals, feedback, and service communication.",
    aliases: ["portal", "client-portal", "customer-portal"],
    heroImage: serviceBusinessImage,
    heroChips: [
      { label: "Quote Requests", icon: ClipboardList },
      { label: "Job Tracking", icon: Workflow },
      { label: "Files & Invoices", icon: FileText },
      { label: "Team Updates", icon: Users },
    ],
    heroStats: [["Jobs", "Tracked"], ["Quotes", "Open"], ["Support", "Visible"]],
    heroVisual: {
      portalName: "ServiceDesk",
      sidebar: ["Dashboard", "Requests", "Jobs", "Documents", "Support", "Reports"],
      stats: [
        { label: "Open Requests", value: "169", change: "+18%" },
        { label: "Pending Docs", value: "27", change: "-9%" },
        { label: "Approvals", value: "33", change: "+13%" },
        { label: "SLA Health", value: "94%", change: "+6%" },
      ],
      pipelineTitle: "Service Request Pipeline",
      pipeline: [
        { label: "Home repair quote", status: "Review", owner: "Admin" },
        { label: "AC service job", status: "Assigned", owner: "Field team" },
        { label: "Invoice approval", status: "Pending", owner: "Client" },
      ],
      roleViewTitle: "Client Workspace",
      roleView: ["Quote requests", "Job status", "Files", "Support"],
      notification: "New quote request submitted",
      documentCard: "Invoice waiting for client approval",
    },
    problems: [
      card("Quote requests are scattered", "Client needs, photos, job details, and estimates come from too many channels.", ClipboardList),
      card("Job status is unclear", "Clients ask repeatedly about team assignment, arrival, progress, and completion proof.", Workflow),
      card("Files and invoices are hard to organize", "Quotes, invoices, photos, contracts, and proofs need one record.", FileText),
      card("Teams need better visibility", "Admins, support, and field teams need cleaner queues, assignments, and updates.", Users),
    ],
    fixes: [
      card("Customer portal", "Clients submit requests, upload files, view quotes, track jobs, and approve invoices.", UserCheck),
      card("Field team workspace", "Teams see assigned jobs, route/status, notes, and completion proof.", Wrench),
      card("Support portal", "Support can update customers, answer questions, and attach messages to jobs.", LifeBuoy),
      card("Admin control room", "Admins assign jobs, review quotes, track workload, and monitor reports.", Settings2),
    ],
    rolesDescription:
      "Create customer, field team, support, and admin portal views so service requests move from quote to completion with clarity.",
    roles: [
      role("customer", "Customer Portal", "Client access", "Customers submit quote requests, book services, track jobs, approve invoices, and leave feedback.", UserCheck, ["Service selection", "Quote request", "Booking", "Job tracking"], "Easier customer booking"),
      role("field", "Field Team Portal", "Field team", "Field teams view assigned jobs, route/status, job notes, proof, and completion steps.", Wrench, ["Assigned jobs", "Route/status", "Job notes", "Completion proof"], "Better field execution"),
      role("support", "Support Portal", "Support team", "Support teams manage customer queries, job updates, feedback, and follow-ups.", LifeBuoy, ["Customer queries", "Job updates", "Feedback", "Follow-ups"], "Faster support handling"),
      role("admin", "Admin Portal", "Operations control", "Admins assign jobs, review quotes, track teams, and monitor analytics.", Settings2, ["Job assignment", "Quote review", "Team tracking", "Analytics"], "Stronger operations"),
    ],
    modulesDescription: "Service business portal modules for requests, quotes, jobs, files, support, field teams, and admin visibility.",
    modules: sharedModules,
    workflowTitle: "Service Business Portal Workflow",
    workflowSteps: [
      card("Client Login", "Client enters a secure service workspace.", LockKeyhole),
      card("Request Quote / Booking", "Client submits service need, details, files, and preferred slot.", ClipboardList),
      card("Team Assignment", "Admin assigns support or field team with context.", Users),
      card("Job Status", "Team updates progress, proof, and next steps.", Workflow),
      card("Notification", "Client receives job and invoice updates.", Bell),
      card("Review", "Feedback and completion records stay attached.", Star),
    ],
    securityDescription: "Service portals need client privacy, job history, file control, and role-based team visibility.",
    securityItems: sharedSecurity,
    demoGalleryDescription: "Sample customer, field team, support, and admin portal experiences for service businesses.",
    demoGallery: [
      demo("Customer Portal Demo", "Quote requests, bookings, job status, and files.", UserCheck, ["Quotes", "Booking", "Files"]),
      demo("Field Team Portal Demo", "Assigned jobs, route/status, notes, and proof.", Wrench, ["Jobs", "Route", "Proof"]),
      demo("Support Portal Demo", "Customer queries, job updates, and follow-ups.", LifeBuoy, ["Queries", "Updates", "Follow-up"]),
      demo("Admin Portal Demo", "Quote review, job assignment, and team reports.", Settings2, ["Quotes", "Assign", "Reports"]),
    ],
    pricingDescription: "Choose a service portal package based on client access, quote requests, job tracking, and team workflows.",
    pricingPlans: [
      plan("Service Portal Starter", `${rupee}35,000`, false, starterFeatures),
      plan("Service Portal Growth", `${rupee}80,000`, true, growthFeatures),
      plan("Service Portal Custom", `${rupee}1,50,000+`, false, customFeatures),
    ],
    testimonials: [
      { quote: "The client portal makes service requests and job status much easier to explain.", name: "Kabir Bhatia", role: "Sample provider - Service agency" },
      { quote: "Field team assignment and completion proof are the parts that make this feel operationally useful.", name: "Maya Shah", role: "Demo brand - Home services" },
      { quote: "Support can finally keep every update attached to the right job.", name: "Tanya Rao", role: "Sample provider - Repair service" },
    ],
    trustDescription: "Service portals need controlled client files, job history, support records, and team permission rules.",
    trustItems: [
      { title: "Client Inquiry Privacy", icon: ShieldCheck },
      { title: "Quote Request Control", icon: ClipboardList },
      { title: "Job History Tracking", icon: Workflow },
      { title: "Team Role Access", icon: Users },
    ],
    ctaTitle: "Build a service portal that makes every request easier to manage.",
    ctaDescription:
      "Bring quote requests, bookings, job updates, files, invoices, support, and field team activity into one secure portal.",
  }),
};

export const industryPortalStaticParams: IndustryPortalRoute[] = Object.values(
  industryPortalPages,
)
  .filter((page) => page.industrySlug !== "healthcare")
  .flatMap((page) =>
  page.aliases.map((solutionSlug) => ({
    industrySlug: page.industrySlug,
    solutionSlug,
  })),
);

export function getIndustryPortalPage(
  industrySlug: string,
  solutionSlug: string,
): IndustryPortalPageData | null {
  const page = industryPortalPages[industrySlug];

  if (!page || !page.aliases.includes(solutionSlug)) {
    return null;
  }

  return page;
}
