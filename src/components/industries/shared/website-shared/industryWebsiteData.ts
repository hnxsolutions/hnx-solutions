import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  BarChart3,
  Building2,
  CalendarCheck,
  Car,
  ClipboardCheck,
  ClipboardList,
  CreditCard,
  Factory,
  FileCheck2,
  FileText,
  GraduationCap,
  Handshake,
  Home,
  Landmark,
  LifeBuoy,
  LockKeyhole,
  MapPin,
  MessageCircle,
  MonitorSmartphone,
  PackageCheck,
  PackageSearch,
  Plane,
  Route,
  School,
  Search,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Star,
  Store,
  Tags,
  Truck,
  UserCheck,
  Users,
  Wrench,
} from "lucide-react";
import type { IndustryAiAutomationData } from "../common/IndustryAiAutomationSection";
import type { IndustryIntegrationsDeploymentData } from "../common/IndustryIntegrationsDeploymentSection";

export type IndustryWebsiteRoute = {
  industrySlug: string;
  websiteSlug: string;
};

export type IndustryWebsiteCard = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type IndustryWebsiteProblem = IndustryWebsiteCard & {
  tone: "emerald" | "rose" | "blue" | "violet";
};

export type IndustryWebsiteModule = {
  title: string;
  image: string;
  icon: LucideIcon;
  points: string[];
};

export type IndustryWebsiteProvider = {
  name: string;
  type: string;
  image: string;
};

export type IndustryWebsiteDemo = {
  title: string;
  subtitle: string;
  brand: string;
  headline: string;
  image: string;
  icon: LucideIcon;
  accent: "emerald" | "violet" | "blue" | "teal" | "orange" | "rose";
  stats: string[];
  chips: string[];
};

export type IndustryWebsitePricingPlan = {
  name: string;
  subtitle: string;
  price: string;
  icon: LucideIcon;
  features: string[];
  cta: string;
  popular: boolean;
};

export type IndustryWebsiteTestimonial = {
  quote: string;
  name: string;
  role: string;
};

export type IndustryWebsiteTrustItem = {
  title: string;
  icon: LucideIcon;
};

export type IndustryWebsiteDemoSectionId =
  | "home"
  | "sectionA"
  | "sectionB"
  | "sectionC"
  | "contact";

export type IndustryWebsiteDemoCard = {
  title: string;
  description: string;
  meta?: string;
  icon: LucideIcon;
};

export type IndustryWebsiteDemoDirectoryItem = {
  name: string;
  role: string;
  slot: string;
  detail: string;
};

export type IndustryWebsiteDemoResourcePage = {
  title: string;
  description: string;
  blocks: string[];
  icon: LucideIcon;
};

export type IndustryWebsiteDemoContent = {
  modalBadge: string;
  flowTabLabel: string;
  catalogTabLabel: string;
  navSections: Array<{ id: IndustryWebsiteDemoSectionId; label: string }>;
  footerSections: Array<{
    label: string;
    targetSection: IndustryWebsiteDemoSectionId;
  }>;
  primaryAction: string;
  secondaryAction: string;
  requestAction: string;
  trustLine: string;
  intro: string;
  services: IndustryWebsiteDemoCard[];
  overviewCards: IndustryWebsiteDemoCard[];
  directoryLabel: string;
  directoryTitle: string;
  directoryDescription: string;
  directoryItems: IndustryWebsiteDemoDirectoryItem[];
  resourceLabel: string;
  resourceTitle: string;
  resourcePages: IndustryWebsiteDemoResourcePage[];
  contactTitle: string;
  contactDescription: string;
  flowSteps: string[];
  requestFields: string[];
  mobileScreens: Array<{
    id: IndustryWebsiteDemoSectionId | "flow" | "updates";
    label: string;
    icon: LucideIcon;
  }>;
  mobileUpdates: [string, string][];
  statsLabels: string[];
  analyticsSources: [string, string][];
  analyticsMetrics: Array<{ label: string; value: string; change: string }>;
};

export type IndustryWebsitePageData = {
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
  heroBrand: string;
  heroHeadline: string;
  heroSubtext: string;
  heroNav: string[];
  heroPrimaryCta: string;
  heroSecondaryCta: string;
  heroChips: Array<{ label: string; icon: LucideIcon }>;
  heroStats: Array<[string, string]>;
  problemsTitle: string;
  problems: IndustryWebsiteProblem[];
  featuresTitle: string;
  features: IndustryWebsiteCard[];
  modulesTitle: string;
  modulesDescription: string;
  modules: IndustryWebsiteModule[];
  trustedProvidersTitle: string;
  trustedProvidersDescription: string;
  trustedProviders: IndustryWebsiteProvider[];
  demoGalleryTitle: string;
  demoGalleryDescription: string;
  demoGallery: IndustryWebsiteDemo[];
  demoCtaTitle: string;
  demoCtaDescription: string;
  benefitsTitle: string;
  benefits: IndustryWebsiteCard[];
  ctaTitle: string;
  ctaDescription: string;
  ctaLabel: string;
  pricingDescription: string;
  pricingPlans: IndustryWebsitePricingPlan[];
  testimonialsTitle: string;
  testimonials: IndustryWebsiteTestimonial[];
  complianceDescription: string;
  compliance: IndustryWebsiteTrustItem[];
  aiAutomation: IndustryAiAutomationData;
  integrationsDeployment: IndustryIntegrationsDeploymentData;
  demoContent: IndustryWebsiteDemoContent;
};

const rupee = "\u20b9";
const aiAutomationHref = "/contact?service=ai-automation";

const websiteAiAutomation: IndustryAiAutomationData = {
  eyebrow: "AI Automation Add-ons",
  title: "Add AI Automation to Your Website",
  description:
    "Turn your industry website into a smarter lead and support system with AI chat, qualification, follow-ups, and booking automation.",
  items: ["AI chatbot", "Lead qualification", "WhatsApp follow-ups", "Booking assistant"],
  ctaLabel: "Add AI to Website",
  ctaHref: aiAutomationHref,
};

const websiteIntegrationsDeployment: IndustryIntegrationsDeploymentData = {
  eyebrow: "Integrations & Deployment",
  title: "Connected Website. Ready to Scale.",
  description:
    "Connect your website with forms, WhatsApp, analytics, booking tools, CRM pipelines, and secure hosting so every lead is captured and tracked properly.",
  items: [
    { title: "Forms & lead capture", description: "Route inquiries into structured lead records." },
    { title: "WhatsApp / email alerts", description: "Notify teams instantly when visitors convert." },
    { title: "Analytics & pixels", description: "Track sources, campaigns, events, and conversions." },
    { title: "Booking integrations", description: "Connect appointment, visit, or consultation flows." },
    { title: "CRM connection", description: "Sync website leads into your sales pipeline." },
    { title: "Secure hosting", description: "Deploy with performance, backups, and SSL readiness." },
  ],
  ctaLabel: "Plan Website Stack",
  ctaHref: aiAutomationHref,
};

const realEstateImages = [
  "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=900&q=85",
];

const educationImages = [
  "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=85",
];

const manufacturingImages = [
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=900&q=85",
];

const retailImages = [
  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1481437156560-3205f6a55735?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=900&q=85",
];

const financeImages = [
  "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=85",
];

const insuranceImages = [
  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=900&q=85",
];

const travelImages = [
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1499678329028-101435549a4e?auto=format&fit=crop&w=900&q=85",
];

const automobileImages = [
  "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=900&q=85",
];

const serviceImages = [
  "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=85",
];

function image(images: readonly string[], index: number) {
  return images[index % images.length];
}

function provider(
  name: string,
  type: string,
  images: readonly string[],
  index: number,
): IndustryWebsiteProvider {
  return { name, type, image: image(images, index) };
}

function demo(
  title: string,
  subtitle: string,
  brand: string,
  headline: string,
  images: readonly string[],
  index: number,
  icon: LucideIcon,
  accent: IndustryWebsiteDemo["accent"],
  stats: string[],
  chips: string[],
): IndustryWebsiteDemo {
  return {
    title,
    subtitle,
    brand,
    headline,
    image: image(images, index),
    icon,
    accent,
    stats,
    chips,
  };
}

function plan(
  name: string,
  subtitle: string,
  price: string,
  icon: LucideIcon,
  features: string[],
  popular = false,
): IndustryWebsitePricingPlan {
  return {
    name,
    subtitle,
    price,
    icon,
    features,
    popular,
    cta: popular ? "Book Consultation" : name.includes("Enterprise") ? "Get Custom Quote" : "Get Started",
  };
}

function trustItems(titles: string[]): IndustryWebsiteTrustItem[] {
  return titles.map((title) => ({ title, icon: trustIcon(title) }));
}

function trustIcon(title: string): LucideIcon {
  if (title.includes("SSL")) return LockKeyhole;
  if (title.includes("Hosting")) return Building2;
  if (title.includes("Backups")) return FileCheck2;
  if (title.includes("Compliance")) return BadgeCheck;
  if (title.includes("Privacy") || title.includes("Protection")) return ShieldCheck;
  return ClipboardCheck;
}

function nav(
  labels: [string, string, string, string, string],
): IndustryWebsiteDemoContent["navSections"] {
  const ids: IndustryWebsiteDemoSectionId[] = [
    "home",
    "sectionA",
    "sectionB",
    "sectionC",
    "contact",
  ];

  return labels.map((label, index) => ({ id: ids[index], label }));
}

function footer(
  items: Array<[string, IndustryWebsiteDemoSectionId]>,
): IndustryWebsiteDemoContent["footerSections"] {
  return items.map(([label, targetSection]) => ({ label, targetSection }));
}

function demoCard(
  title: string,
  description: string,
  icon: LucideIcon,
  meta?: string,
): IndustryWebsiteDemoCard {
  return { title, description, icon, meta };
}

function directoryItem(
  name: string,
  role: string,
  slot: string,
  detail: string,
): IndustryWebsiteDemoDirectoryItem {
  return { name, role, slot, detail };
}

function resourcePage(
  title: string,
  description: string,
  blocks: string[],
  icon: LucideIcon,
): IndustryWebsiteDemoResourcePage {
  return { title, description, blocks, icon };
}

function analyticsMetric(label: string, value: string, change: string) {
  return { label, value, change };
}

function defaultMobileScreens(
  secondLabel: string,
  flowLabel: string,
): IndustryWebsiteDemoContent["mobileScreens"] {
  return [
    { id: "home", label: "Home", icon: MonitorSmartphone },
    { id: "sectionA", label: secondLabel, icon: Search },
    { id: "flow", label: flowLabel, icon: CalendarCheck },
    { id: "updates", label: "Updates", icon: MessageCircle },
  ];
}

function createRealEstateDemoContent(): IndustryWebsiteDemoContent {
  return {
    modalBadge: "Real Estate Website Experience",
    flowTabLabel: "Site Visit Flow",
    catalogTabLabel: "Listings",
    navSections: nav(["Home", "Properties", "Projects", "Locations", "Contact"]),
    footerSections: footer([
      ["Featured Properties", "sectionA"],
      ["Site Visits", "contact"],
      ["Locations", "sectionC"],
      ["Builder Trust", "sectionB"],
      ["Contact", "contact"],
    ]),
    primaryAction: "Book Site Visit",
    secondaryAction: "Explore Properties",
    requestAction: "Book Site Visit",
    trustLine: "Listings. Projects. Location Trust.",
    intro:
      "A property website experience built for buyers who need listings, project proof, neighborhood context, and a clear site visit path.",
    services: [
      demoCard("Ready-To-Move Apartments", "Listing cards with price range, location, possession, status, and site visit CTAs.", Home, "From Rs 68L"),
      demoCard("Luxury Villas", "Premium property cards with gallery previews, lifestyle copy, and private inquiry options.", Sparkles, "Private tours"),
      demoCard("Commercial Offices", "Commercial listings with carpet area, lease terms, map context, and broker routing.", Landmark, "Lease ready"),
      demoCard("Rental Homes", "Rental inventory with furnishing status, monthly rent, owner inquiry, and tenant forms.", Building2, "Move-in leads"),
    ],
    overviewCards: [
      demoCard("Featured properties", "High-intent listings with price, location, status, and inquiry CTAs.", Building2),
      demoCard("Site visit flow", "Visitors choose property interest, preferred slot, and contact details.", CalendarCheck),
      demoCard("Location pages", "Area pages explain landmarks, connectivity, and neighborhood demand.", MapPin),
      demoCard("Lead analytics", "Track property views, visit requests, and source quality.", BarChart3),
    ],
    directoryLabel: "Projects",
    directoryTitle: "Project pages with builder trust",
    directoryDescription:
      "Project cards can show amenities, approvals, construction status, inventory highlights, and sales team routing.",
    directoryItems: [
      directoryItem("Skyline Residency", "Apartment project", "Possession: Ready", "Approval notes, amenities, floor plans, nearby schools, and site visit slots."),
      directoryItem("PrimeSpace Villas", "Luxury villa community", "Private tours open", "Lifestyle gallery, club amenities, gated access, and premium inquiry flow."),
      directoryItem("MetroView Business Park", "Commercial property", "Lease inquiries active", "Office sizes, parking, location proof, and broker contact routing."),
    ],
    resourceLabel: "Locations",
    resourceTitle: "Local SEO and location pages",
    resourcePages: [
      resourcePage("Whitefield Properties", "Search-ready page for projects, rentals, and commercial demand in Whitefield.", ["Metro access", "IT corridor", "Schools"], MapPin),
      resourcePage("North City Projects", "Neighborhood overview with project clusters, pricing context, and map sections.", ["New launches", "Road links", "Amenities"], Building2),
      resourcePage("Luxury Property Guide", "Buyer guide for premium homes, private tours, and lifestyle-led discovery.", ["Lifestyle", "Privacy", "Visit plan"], Sparkles),
    ],
    contactTitle: "Site visit request form",
    contactDescription:
      "Capture property interest, budget, preferred visit time, buyer profile, and sales follow-up details.",
    flowSteps: ["Property Interest", "Site Visit Details", "Contact", "Confirmation"],
    requestFields: ["Buyer name", "Phone / WhatsApp", "Property type", "Preferred visit date", "Budget range", "Location preference"],
    mobileScreens: defaultMobileScreens("Properties", "Visit"),
    mobileUpdates: [
      ["Visit confirmed", "Sales team receives preferred project and slot."],
      ["New brochure sent", "Buyer gets floor plan and location details."],
      ["Follow-up queued", "Lead is marked by project, budget, and urgency."],
    ],
    statsLabels: ["Properties", "Visit leads", "Locations", "Lead rate"],
    analyticsSources: [["Google property search", "43%"], ["WhatsApp campaigns", "24%"], ["Location pages", "21%"], ["Referral", "12%"]],
    analyticsMetrics: [
      analyticsMetric("Property views", "18,420", "+24.1%"),
      analyticsMetric("Site visit requests", "642", "+31.4%"),
      analyticsMetric("Top location", "Whitefield", "+18.2%"),
      analyticsMetric("Lead source quality", "11.8%", "+2.7%"),
    ],
  };
}

function createEducationDemoContent(): IndustryWebsiteDemoContent {
  return {
    modalBadge: "Education Website Experience",
    flowTabLabel: "Admission Flow",
    catalogTabLabel: "Programs",
    navSections: nav(["Home", "Courses", "Admissions", "Faculty", "Contact"]),
    footerSections: footer([
      ["Programs", "sectionA"],
      ["Admissions", "sectionB"],
      ["Faculty", "sectionC"],
      ["Campus", "home"],
      ["Contact", "contact"],
    ]),
    primaryAction: "Apply / Enquire Now",
    secondaryAction: "Explore Courses",
    requestAction: "Admission Inquiry",
    trustLine: "Programs. Admissions. Faculty Trust.",
    intro:
      "An admissions-focused website that helps students and parents compare programs, understand steps, meet faculty, and talk to a counselor.",
    services: [
      demoCard("Primary And Secondary School", "Grade pages with curriculum, activities, fees context, and parent inquiry CTAs.", School, "Parent-first"),
      demoCard("Undergraduate Programs", "Course pages with eligibility, outcomes, departments, and application prompts.", GraduationCap, "Apply now"),
      demoCard("Coaching Batches", "Batch cards with exam focus, schedule, trial class CTA, and result proof.", BadgeCheck, "Trial class"),
      demoCard("Online Courses", "Digital course pages with instructor info, lesson previews, and enrollment inquiry.", MonitorSmartphone, "Hybrid ready"),
    ],
    overviewCards: [
      demoCard("Course discovery", "Students compare programs, fees context, eligibility, and outcomes.", GraduationCap),
      demoCard("Admission flow", "Inquiry forms capture program interest and student/parent details.", ClipboardCheck),
      demoCard("Faculty trust", "Profiles show experience, departments, achievements, and mentor fit.", UserCheck),
      demoCard("Admission analytics", "Track course views, brochure downloads, and counselor leads.", BarChart3),
    ],
    directoryLabel: "Admissions",
    directoryTitle: "Admission steps and inquiry routing",
    directoryDescription:
      "Admissions content can show eligibility, documents, deadlines, counselor assignment, and brochure lead capture.",
    directoryItems: [
      directoryItem("Program Selection", "Admission step", "Open for current intake", "Visitors choose course, grade, or batch before sharing contact details."),
      directoryItem("Eligibility And Documents", "Admission checklist", "Counselor review", "Document lists, age criteria, prerequisites, and transfer guidance."),
      directoryItem("Counselor Follow-up", "Conversion step", "Same-day callback", "Counselors receive program interest, parent info, student details, and notes."),
    ],
    resourceLabel: "Faculty",
    resourceTitle: "Faculty and campus trust pages",
    resourcePages: [
      resourcePage("Faculty Profiles", "Profiles for teachers, mentors, departments, and academic leadership.", ["Experience", "Subjects", "Achievements"], UserCheck),
      resourcePage("Campus Life", "Facilities, activities, events, labs, sports, and student life sections.", ["Labs", "Sports", "Events"], School),
      resourcePage("Results And Outcomes", "Placement proof, exam results, alumni notes, and parent testimonials.", ["Results", "Placements", "Reviews"], Star),
    ],
    contactTitle: "Counselor inquiry form",
    contactDescription:
      "Capture program interest, admission year, student details, parent contact, and counselor follow-up notes.",
    flowSteps: ["Program Interest", "Admission Details", "Student/Parent Info", "Counselor Follow-up"],
    requestFields: ["Student name", "Parent phone", "Program interest", "Admission year", "Current grade", "Preferred counselor call"],
    mobileScreens: defaultMobileScreens("Courses", "Apply"),
    mobileUpdates: [
      ["Brochure downloaded", "Counselor receives program interest."],
      ["Application started", "Parent details and preferred course captured."],
      ["Campus visit queued", "Admission team can schedule the next step."],
    ],
    statsLabels: ["Programs", "Inquiries", "Faculty", "Brochures"],
    analyticsSources: [["Course search", "39%"], ["Admissions campaign", "27%"], ["Brochure forms", "22%"], ["Referral", "12%"]],
    analyticsMetrics: [
      analyticsMetric("Admission inquiries", "1,280", "+29.4%"),
      analyticsMetric("Course views", "14,620", "+21.8%"),
      analyticsMetric("Brochure downloads", "540", "+18.5%"),
      analyticsMetric("Top program", "Data Science", "+16.2%"),
    ],
  };
}

function createManufacturingDemoContent(): IndustryWebsiteDemoContent {
  return {
    modalBadge: "Manufacturing Website Experience",
    flowTabLabel: "RFQ Flow",
    catalogTabLabel: "Catalog",
    navSections: nav(["Home", "Products", "Capabilities", "Certifications", "RFQ"]),
    footerSections: footer([
      ["Product Catalog", "sectionA"],
      ["Capabilities", "sectionB"],
      ["Certifications", "sectionC"],
      ["RFQ", "contact"],
      ["Contact", "contact"],
    ]),
    primaryAction: "Request Quote",
    secondaryAction: "View Products",
    requestAction: "Request Quote",
    trustLine: "Products. Capabilities. Certified Supply.",
    intro:
      "A B2B manufacturing website for product discovery, technical confidence, certification proof, and RFQ capture.",
    services: [
      demoCard("Precision Components", "Catalog cards with material, tolerances, applications, and RFQ actions.", PackageSearch, "Custom specs"),
      demoCard("Industrial Tools", "Category cards with sizes, grades, bulk demand, and distributor inquiries.", Wrench, "Bulk orders"),
      demoCard("OEM Fabrication", "Service pages for drawings, capacity, turnaround, and NDA-led inquiries.", Factory, "OEM ready"),
      demoCard("Export Products", "Export-ready product pages with regions, packaging, documentation, and logistics notes.", Truck, "Global buyers"),
    ],
    overviewCards: [
      demoCard("Product catalog", "Buyers browse SKUs, specs, applications, and downloadable details.", PackageSearch),
      demoCard("RFQ forms", "Capture quantity, requirement, drawing files, and company details.", FileText),
      demoCard("Capabilities", "Show plant, machinery, quality checks, and production capacity.", Factory),
      demoCard("B2B analytics", "Track RFQs, catalog views, top categories, and dealer inquiries.", BarChart3),
    ],
    directoryLabel: "Capabilities",
    directoryTitle: "Manufacturing capability pages",
    directoryDescription:
      "Capability content can show production capacity, machine lines, material expertise, quality process, and industry fit.",
    directoryItems: [
      directoryItem("CNC Machining", "Production capability", "Capacity slots available", "Materials, tolerances, part sizes, inspection process, and turnaround details."),
      directoryItem("Assembly And Packaging", "Value-added service", "Export packaging ready", "Assembly lines, labeling, packaging standards, and dispatch handling."),
      directoryItem("Custom OEM Supply", "B2B program", "Drawing review first", "Drawing upload, NDA workflow, prototype approval, and production planning."),
    ],
    resourceLabel: "Certifications",
    resourceTitle: "Certifications and buyer proof",
    resourcePages: [
      resourcePage("ISO And Quality Proof", "Show certification details, audit cycles, quality process, and test reports.", ["ISO proof", "QC process", "Reports"], BadgeCheck),
      resourcePage("Export Documentation", "Explain packaging, shipping documents, regions served, and compliance needs.", ["Invoices", "Packing", "Regions"], Truck),
      resourcePage("Material Standards", "Document material grades, testing, tolerances, and application fit.", ["Grades", "Testing", "Tolerances"], ClipboardCheck),
    ],
    contactTitle: "RFQ request form",
    contactDescription:
      "Capture product category, quantity, specifications, drawings, destination, timeline, and company details.",
    flowSteps: ["Product / RFQ Details", "Quantity / Requirement", "Company Info", "Sales Follow-up"],
    requestFields: ["Company name", "Product category", "Quantity", "Specification notes", "Destination", "Timeline"],
    mobileScreens: defaultMobileScreens("Products", "RFQ"),
    mobileUpdates: [
      ["RFQ received", "Sales team gets product, quantity, and timeline."],
      ["Catalog viewed", "Top category is marked for follow-up."],
      ["Certification sent", "Buyer gets quality proof and export documents."],
    ],
    statsLabels: ["SKUs", "RFQs", "Markets", "B2B"],
    analyticsSources: [["Product search", "41%"], ["Catalog downloads", "26%"], ["Dealer referrals", "19%"], ["Export campaigns", "14%"]],
    analyticsMetrics: [
      analyticsMetric("RFQs", "86", "+22.4%"),
      analyticsMetric("Catalog views", "8,940", "+25.7%"),
      analyticsMetric("Dealer inquiries", "34", "+13.9%"),
      analyticsMetric("Top category", "Precision Parts", "+17.1%"),
    ],
  };
}

function createRetailDemoContent(): IndustryWebsiteDemoContent {
  return {
    modalBadge: "Retail Website Experience",
    flowTabLabel: "Order Flow",
    catalogTabLabel: "Catalog",
    navSections: nav(["Home", "Catalog", "Offers", "Store", "Contact"]),
    footerSections: footer([
      ["Catalog", "sectionA"],
      ["Offers", "sectionB"],
      ["Store Locator", "sectionC"],
      ["Reviews", "sectionC"],
      ["Contact", "contact"],
    ]),
    primaryAction: "Order / Enquire",
    secondaryAction: "Browse Catalog",
    requestAction: "Order / Enquire",
    trustLine: "Catalog. Offers. Store Trust.",
    intro:
      "A product-led retail website for browsing collections, promoting offers, supporting store trust, and capturing order inquiries.",
    services: [
      demoCard("Fashion Collection", "Product cards with price, size inquiry, lookbook links, and campaign CTAs.", ShoppingBag, "New drop"),
      demoCard("Grocery Essentials", "Category cards for daily products, delivery notes, and local order inquiry.", Store, "Daily offers"),
      demoCard("Electronics Catalog", "Spec-led product cards with warranty, EMI, comparisons, and support notes.", MonitorSmartphone, "Warranty ready"),
      demoCard("Home Decor Range", "Room-based collection cards with gallery, catalog inquiry, and consultation CTA.", Home, "Room styling"),
    ],
    overviewCards: [
      demoCard("Product catalog", "Customers browse categories, variants, pricing context, and order inquiry CTAs.", ShoppingBag),
      demoCard("Offer campaigns", "Dedicated promo cards help seasonal campaigns convert.", Tags),
      demoCard("Store trust", "Store pages, reviews, policies, and support reduce hesitation.", Store),
      demoCard("Retail analytics", "Track product views, offer clicks, inquiries, and conversion rate.", BarChart3),
    ],
    directoryLabel: "Offers",
    directoryTitle: "Offer and promo sections",
    directoryDescription:
      "Offer pages can highlight seasonal deals, bundles, launch campaigns, store promotions, and category-specific CTAs.",
    directoryItems: [
      directoryItem("Weekend Sale", "Promo campaign", "Live this week", "Offer card with product group, discount message, countdown, and inquiry CTA."),
      directoryItem("Bundle Deals", "Retail bundle", "High conversion", "Bundle cards for category combinations, add-ons, and stock urgency."),
      directoryItem("New Arrival Launch", "Product launch", "Campaign ready", "Launch story, featured products, lookbook, and social proof blocks."),
    ],
    resourceLabel: "Store",
    resourceTitle: "Store locator and retail trust",
    resourcePages: [
      resourcePage("Store Locator", "Local branch cards with address, hours, contact, and directions.", ["Address", "Hours", "Directions"], MapPin),
      resourcePage("Customer Reviews", "Ratings, product feedback, store experience, and social proof.", ["Ratings", "Photos", "Proof"], Star),
      resourcePage("Policies And Support", "Delivery, exchange, warranty, payment, and customer support details.", ["Delivery", "Exchange", "Support"], ShieldCheck),
    ],
    contactTitle: "Order inquiry form",
    contactDescription:
      "Capture product interest, quantity, size or variant, delivery preference, and customer contact details.",
    flowSteps: ["Product Interest", "Order/Inquiry Details", "Contact", "Confirmation"],
    requestFields: ["Customer name", "Phone / WhatsApp", "Product interest", "Quantity", "Variant or size", "Delivery location"],
    mobileScreens: defaultMobileScreens("Catalog", "Order"),
    mobileUpdates: [
      ["Order inquiry sent", "Store team receives product and variant details."],
      ["Offer clicked", "Campaign source is tracked for follow-up."],
      ["Store visit planned", "Nearest branch and contact details are shown."],
    ],
    statsLabels: ["Products", "Campaigns", "Lead rate", "Mobile"],
    analyticsSources: [["Product search", "38%"], ["Instagram campaigns", "29%"], ["Offer pages", "21%"], ["Direct", "12%"]],
    analyticsMetrics: [
      analyticsMetric("Product views", "22,480", "+27.5%"),
      analyticsMetric("Order inquiries", "1,140", "+24.8%"),
      analyticsMetric("Offer clicks", "3,920", "+31.6%"),
      analyticsMetric("Conversion rate", "9.4%", "+2.3%"),
    ],
  };
}

function createFinanceDemoContent(): IndustryWebsiteDemoContent {
  return {
    modalBadge: "Finance Website Experience",
    flowTabLabel: "Consultation Flow",
    catalogTabLabel: "Advisors / Services",
    navSections: nav(["Home", "Services", "Advisors", "Insights", "Contact"]),
    footerSections: footer([
      ["Services", "sectionA"],
      ["Advisors", "sectionB"],
      ["Consultation", "contact"],
      ["Insights", "sectionC"],
      ["Contact", "contact"],
    ]),
    primaryAction: "Book Consultation",
    secondaryAction: "Explore Services",
    requestAction: "Book Consultation",
    trustLine: "Secure Advice. Clear Services. Trusted Experts.",
    intro:
      "A trust-first finance website that explains services, presents advisor credibility, and routes consultation requests securely.",
    services: [
      demoCard("Financial Planning", "Service page for goals, risk profile, planning process, and consultation booking.", Landmark, "Goal led"),
      demoCard("Loan Consulting", "Loan pages with eligibility, document checklist, and callback routing.", CreditCard, "Eligibility flow"),
      demoCard("Tax Advisory", "Tax service pages with deadlines, document intake, and secure inquiry forms.", FileCheck2, "Compliance aware"),
      demoCard("Wealth Management", "Private service pages with portfolio approach, risk notes, and advisor proof.", ShieldCheck, "Private consult"),
    ],
    overviewCards: [
      demoCard("Service clarity", "Visitors understand advisory, loan, tax, and accounting services.", Landmark),
      demoCard("Consultation booking", "Forms capture service need, timeline, and readiness.", CalendarCheck),
      demoCard("Advisor trust", "Profiles show credentials, process, and service fit.", UserCheck),
      demoCard("Finance analytics", "Track consultation leads, form completions, and top services.", BarChart3),
    ],
    directoryLabel: "Advisors",
    directoryTitle: "Advisor and service profile pages",
    directoryDescription:
      "Advisor sections can show expertise, credentials, service fit, availability, and trust-building proof.",
    directoryItems: [
      directoryItem("Aarav Mehta", "Financial advisor", "Consult slots available", "Goal planning, portfolio review, risk profiling, and documentation guidance."),
      directoryItem("Naina Rao", "Tax consultant", "Deadline support open", "ITR, GST, compliance calendar, and document review support."),
      directoryItem("Kunal Shah", "Loan consultant", "Eligibility review active", "Home loan, business loan, document checklist, and bank coordination."),
    ],
    resourceLabel: "Insights",
    resourceTitle: "Finance insights and resource pages",
    resourcePages: [
      resourcePage("Investment Readiness Guide", "Educational guide for goals, risk, horizon, and advisor discussion.", ["Goals", "Risk", "Timeline"], FileText),
      resourcePage("Loan Document Checklist", "Checklist page for income proof, bank statements, identity, and property documents.", ["Income", "KYC", "Property"], ClipboardCheck),
      resourcePage("Tax Deadline Calendar", "Resource page for tax dates, filing reminders, and document prep.", ["ITR", "GST", "Notices"], CalendarCheck),
    ],
    contactTitle: "Consultation request form",
    contactDescription:
      "Capture service interest, preferred consultation time, client details, and advisor follow-up requirements.",
    flowSteps: ["Service Interest", "Consultation Details", "Client Info", "Advisor Follow-up"],
    requestFields: ["Client name", "Phone / email", "Service interest", "Preferred time", "Document readiness", "Notes for advisor"],
    mobileScreens: defaultMobileScreens("Services", "Consult"),
    mobileUpdates: [
      ["Consultation booked", "Advisor receives service interest and notes."],
      ["Document checklist sent", "Client gets preparation steps."],
      ["Insight downloaded", "Top service interest is tracked."],
    ],
    statsLabels: ["Services", "Consults", "Rating", "Forms"],
    analyticsSources: [["Finance service search", "37%"], ["Advisor referrals", "24%"], ["Insights pages", "23%"], ["Direct", "16%"]],
    analyticsMetrics: [
      analyticsMetric("Consultation leads", "320", "+21.9%"),
      analyticsMetric("Service views", "7,860", "+18.4%"),
      analyticsMetric("Form completions", "214", "+16.8%"),
      analyticsMetric("Top service", "Loan Consulting", "+13.5%"),
    ],
  };
}

function createInsuranceDemoContent(): IndustryWebsiteDemoContent {
  return {
    modalBadge: "Insurance Website Experience",
    flowTabLabel: "Policy Flow",
    catalogTabLabel: "Policies",
    navSections: nav(["Home", "Policies", "Claims", "Renewals", "Contact"]),
    footerSections: footer([
      ["Policies", "sectionA"],
      ["Claims", "sectionB"],
      ["Renewals", "sectionC"],
      ["Agents", "contact"],
      ["Contact", "contact"],
    ]),
    primaryAction: "Get Policy Quote",
    secondaryAction: "Compare Policies",
    requestAction: "Get Policy Quote",
    trustLine: "Policies. Claims. Renewals.",
    intro:
      "An insurance website that simplifies coverage choices, supports claims, captures renewal intent, and routes buyers to agents.",
    services: [
      demoCard("Health Insurance", "Policy cards with family cover, inclusions, hospital network, and quote CTA.", ShieldCheck, "Family cover"),
      demoCard("Vehicle Insurance", "Vehicle policy cards with renewal, claim support, and comparison sections.", Car, "Renewal ready"),
      demoCard("Life Insurance", "Needs-led policy pages with advisor guidance and trust-first content.", Users, "Advisor led"),
      demoCard("Corporate Insurance", "Group policy pages with employee coverage, RFQ fields, and broker support.", Building2, "Team plans"),
    ],
    overviewCards: [
      demoCard("Policy comparison", "Visitors compare coverage types, inclusions, exclusions, and quote CTAs.", ShieldCheck),
      demoCard("Claim support", "Claim pages collect policy type, incident details, and document readiness.", LifeBuoy),
      demoCard("Renewal flow", "Renewal reminders guide policyholders toward plan review and callbacks.", CalendarCheck),
      demoCard("Insurance analytics", "Track policy inquiries, claim requests, and renewal leads.", BarChart3),
    ],
    directoryLabel: "Claims",
    directoryTitle: "Claim support content and routing",
    directoryDescription:
      "Claim pages can show document checklists, incident forms, status inquiries, and support team routing.",
    directoryItems: [
      directoryItem("Health Claim Support", "Claim path", "Documents required", "Hospital bills, policy details, member information, and reimbursement guidance."),
      directoryItem("Vehicle Claim Support", "Claim path", "Incident review", "Accident details, photos, repair center guidance, and claim status inquiry."),
      directoryItem("Corporate Claim Desk", "Group support", "HR routing enabled", "Employee coverage details, documents, and broker escalation workflow."),
    ],
    resourceLabel: "Renewals",
    resourceTitle: "Renewal reminder and policy review pages",
    resourcePages: [
      resourcePage("Policy Renewal Reminder", "Renewal page with policy lookup, expiry reminders, and callback CTA.", ["Expiry", "Lookup", "Callback"], CalendarCheck),
      resourcePage("Coverage Review", "Guide policyholders through coverage gaps, add-ons, and plan upgrades.", ["Gaps", "Add-ons", "Review"], FileText),
      resourcePage("Agent Assistance", "Agent support page for plan comparison, documents, and quote follow-up.", ["Agent", "Docs", "Quote"], UserCheck),
    ],
    contactTitle: "Agent inquiry form",
    contactDescription:
      "Capture policy interest, coverage details, contact information, and agent follow-up preferences.",
    flowSteps: ["Policy Interest", "Coverage Details", "Contact", "Agent Follow-up"],
    requestFields: ["Customer name", "Phone / email", "Policy type", "Coverage need", "Renewal date", "Preferred agent call"],
    mobileScreens: defaultMobileScreens("Policies", "Quote"),
    mobileUpdates: [
      ["Quote requested", "Agent receives policy type and coverage need."],
      ["Claim support started", "Documents and incident details are queued."],
      ["Renewal reminder", "Policy review callback is scheduled."],
    ],
    statsLabels: ["Policies", "Quotes", "Renewals", "Claims"],
    analyticsSources: [["Policy search", "40%"], ["Renewal reminders", "24%"], ["Claim pages", "20%"], ["Agent referrals", "16%"]],
    analyticsMetrics: [
      analyticsMetric("Policy inquiries", "510", "+26.2%"),
      analyticsMetric("Claim requests", "96", "+14.7%"),
      analyticsMetric("Renewal leads", "180", "+22.9%"),
      analyticsMetric("Top policy", "Health Cover", "+18.1%"),
    ],
  };
}

function createTravelDemoContent(): IndustryWebsiteDemoContent {
  return {
    modalBadge: "Travel Website Experience",
    flowTabLabel: "Booking Flow",
    catalogTabLabel: "Packages",
    navSections: nav(["Home", "Packages", "Destinations", "Itinerary", "Contact"]),
    footerSections: footer([
      ["Packages", "sectionA"],
      ["Destinations", "sectionB"],
      ["Booking", "contact"],
      ["Itinerary", "sectionC"],
      ["Contact", "contact"],
    ]),
    primaryAction: "Plan Trip",
    secondaryAction: "Explore Packages",
    requestAction: "Plan Trip",
    trustLine: "Packages. Destinations. Itineraries.",
    intro:
      "A travel website experience for destination discovery, package comparison, itinerary clarity, and consultant-led booking inquiries.",
    services: [
      demoCard("Weekend Getaways", "Package cards with destination, nights, inclusions, price context, and inquiry CTA.", Plane, "2N/3D"),
      demoCard("International Tours", "Tour cards with visa notes, transfers, hotels, and group departure details.", Route, "Group tours"),
      demoCard("Honeymoon Packages", "Romantic package cards with private itinerary, stays, experiences, and consult CTA.", Star, "Couple plans"),
      demoCard("Adventure Trips", "Experience cards with activity, safety notes, gear checklist, and booking forms.", Sparkles, "Safety ready"),
    ],
    overviewCards: [
      demoCard("Package browsing", "Travelers compare destinations, inclusions, and package fit.", PackageCheck),
      demoCard("Booking inquiry", "Forms capture dates, guests, budget, and preferences.", CalendarCheck),
      demoCard("Destination pages", "SEO pages show highlights, activities, weather, and trip ideas.", MapPin),
      demoCard("Travel analytics", "Track package views, booking inquiries, and seasonal demand.", BarChart3),
    ],
    directoryLabel: "Destinations",
    directoryTitle: "Destination discovery pages",
    directoryDescription:
      "Destination pages can show highlights, hotels, local experiences, weather notes, and package CTAs.",
    directoryItems: [
      directoryItem("Goa Weekend", "Beach package", "Peak season demand", "Hotel options, beach experiences, transfers, nightlife, and family-friendly notes."),
      directoryItem("Dubai Group Tour", "International package", "Visa support included", "Flights, visa checklist, hotel category, city tours, and shopping plans."),
      directoryItem("Himachal Adventure", "Adventure trip", "Safety briefing required", "Trek details, gear checklist, altitude notes, and group booking workflow."),
    ],
    resourceLabel: "Itinerary",
    resourceTitle: "Itinerary preview pages",
    resourcePages: [
      resourcePage("Day-Wise Itinerary", "Structured trip plan with day details, transfers, meals, and activities.", ["Day 1", "Day 2", "Day 3"], Route),
      resourcePage("Hotel And Stay Options", "Stay cards with room category, amenities, location, and upgrade prompts.", ["Rooms", "Amenities", "Upgrades"], Home),
      resourcePage("Travel Checklist", "Document, packing, visa, weather, and support checklist.", ["Docs", "Packing", "Support"], ClipboardCheck),
    ],
    contactTitle: "Travel inquiry form",
    contactDescription:
      "Capture package interest, travel dates, guests, budget, destination preferences, and consultant notes.",
    flowSteps: ["Package Interest", "Travel Dates", "Guests", "Consultant Follow-up"],
    requestFields: ["Traveler name", "Phone / WhatsApp", "Package interest", "Travel dates", "Guest count", "Budget range"],
    mobileScreens: defaultMobileScreens("Packages", "Book"),
    mobileUpdates: [
      ["Trip request sent", "Consultant receives dates, guests, and budget."],
      ["Itinerary shared", "Traveler gets day-wise plan preview."],
      ["Seasonal offer clicked", "Campaign demand is tracked."],
    ],
    statsLabels: ["Packages", "Inquiries", "Destinations", "Lead rate"],
    analyticsSources: [["Destination search", "42%"], ["Seasonal campaigns", "28%"], ["Package pages", "18%"], ["Referral", "12%"]],
    analyticsMetrics: [
      analyticsMetric("Package views", "16,280", "+23.9%"),
      analyticsMetric("Booking inquiries", "740", "+18.4%"),
      analyticsMetric("Top destination", "Goa", "+16.8%"),
      analyticsMetric("Seasonal demand", "32%", "+9.1%"),
    ],
  };
}

function createAutomobileDemoContent(): IndustryWebsiteDemoContent {
  return {
    modalBadge: "Automobile Website Experience",
    flowTabLabel: "Test Drive Flow",
    catalogTabLabel: "Inventory / Services",
    navSections: nav(["Home", "Inventory", "Test Drive", "Service", "Contact"]),
    footerSections: footer([
      ["Inventory", "sectionA"],
      ["Test Drive", "sectionB"],
      ["Service Booking", "sectionC"],
      ["Offers", "sectionA"],
      ["Contact", "contact"],
    ]),
    primaryAction: "Book Test Drive",
    secondaryAction: "View Inventory",
    requestAction: "Book Test Drive",
    trustLine: "Inventory. Test Drives. Service.",
    intro:
      "A dealer website experience for vehicle browsing, test drive booking, service requests, offers, and showroom trust.",
    services: [
      demoCard("SUV Inventory", "Vehicle cards with variant, price context, availability, finance, and test drive CTA.", Car, "Top model"),
      demoCard("Bike Models", "Model cards with color options, walk-in CTA, offer notes, and local showroom routing.", Route, "New arrivals"),
      demoCard("Used Cars", "Used inventory with inspection proof, finance forms, and visit booking.", Tags, "Verified stock"),
      demoCard("EV Models", "EV cards with range, charging FAQs, test ride, and finance inquiry.", Sparkles, "EV ready"),
    ],
    overviewCards: [
      demoCard("Vehicle inventory", "Buyers compare models, variants, offers, and availability.", Car),
      demoCard("Test drive booking", "Forms capture model, preferred slot, location, and contact details.", CalendarCheck),
      demoCard("Service booking", "Vehicle owners request service type, issue, and preferred slot.", Wrench),
      demoCard("Dealer analytics", "Track vehicle views, test drive leads, service bookings, and top models.", BarChart3),
    ],
    directoryLabel: "Test Drive",
    directoryTitle: "Test drive steps and model selection",
    directoryDescription:
      "Test drive pages can show model options, available slots, showroom location, finance CTAs, and sales routing.",
    directoryItems: [
      directoryItem("SUV Automatic", "Test drive model", "Slots open today", "Model details, variant selection, finance prompt, and showroom assignment."),
      directoryItem("Electric Hatchback", "EV test ride", "Charging guide included", "Range notes, charging FAQ, subsidy context, and test ride booking."),
      directoryItem("Premium Bike", "Ride request", "Weekend slots open", "Variant interest, color choice, showroom visit, and executive follow-up."),
    ],
    resourceLabel: "Service",
    resourceTitle: "Service booking and after-sales pages",
    resourcePages: [
      resourcePage("Periodic Service", "Service package page with mileage, checklist, and slot booking.", ["Mileage", "Checklist", "Slot"], Wrench),
      resourcePage("Repair Request", "Issue form for diagnostics, photos, pickup, and advisor notes.", ["Issue", "Photos", "Pickup"], ClipboardList),
      resourcePage("Offers And Finance", "Dealer offer page with exchange, EMI, festive deals, and finance inquiry.", ["EMI", "Exchange", "Deals"], CreditCard),
    ],
    contactTitle: "Dealer inquiry form",
    contactDescription:
      "Capture vehicle or service interest, test drive slot, preferred location, and customer contact details.",
    flowSteps: ["Vehicle / Service Interest", "Test Drive or Service Slot", "Contact", "Dealer Follow-up"],
    requestFields: ["Customer name", "Phone / WhatsApp", "Vehicle or service interest", "Preferred slot", "Showroom location", "Finance interest"],
    mobileScreens: defaultMobileScreens("Inventory", "Drive"),
    mobileUpdates: [
      ["Test drive booked", "Sales executive receives model and slot."],
      ["Service request sent", "Service advisor gets vehicle issue details."],
      ["Offer viewed", "Top model demand is tracked."],
    ],
    statsLabels: ["Vehicle views", "Test drives", "Services", "Top model"],
    analyticsSources: [["Model search", "40%"], ["Dealer location pages", "25%"], ["Service reminders", "20%"], ["Offer campaigns", "15%"]],
    analyticsMetrics: [
      analyticsMetric("Vehicle views", "9,820", "+21.2%"),
      analyticsMetric("Test drive leads", "342", "+18.9%"),
      analyticsMetric("Service bookings", "280", "+14.3%"),
      analyticsMetric("Top model", "SUV", "+11.7%"),
    ],
  };
}

function createServiceBusinessDemoContent(): IndustryWebsiteDemoContent {
  return {
    modalBadge: "Service Business Website Experience",
    flowTabLabel: "Quote Flow",
    catalogTabLabel: "Services",
    navSections: nav(["Home", "Services", "Projects", "Reviews", "Contact"]),
    footerSections: footer([
      ["Services", "sectionA"],
      ["Quote Request", "contact"],
      ["Projects", "sectionB"],
      ["Reviews", "sectionC"],
      ["Contact", "contact"],
    ]),
    primaryAction: "Request Quote",
    secondaryAction: "Explore Services",
    requestAction: "Request Quote",
    trustLine: "Services. Proof. Quote Requests.",
    intro:
      "A service business website that explains offerings, proves quality, shows reviews, and turns local visitors into quote requests.",
    services: [
      demoCard("Consulting Services", "Service package cards with scope, process, timelines, and consultation CTA.", UserCheck, "Expert led"),
      demoCard("Repair Services", "Issue-led service cards with urgency fields, booking slots, and local routing.", Wrench, "Fast response"),
      demoCard("Home Services", "Local service cards with area pages, photo proof, and quote forms.", Home, "Local SEO"),
      demoCard("Professional Services", "Practice or firm pages with trust proof, document intake, and appointment booking.", Landmark, "Trust first"),
    ],
    overviewCards: [
      demoCard("Service pages", "Visitors understand scope, process, timing, and fit before inquiry.", ClipboardList),
      demoCard("Quote request", "Forms capture service need, urgency, location, and contact details.", FileText),
      demoCard("Project proof", "Before-after, case studies, reviews, and results reduce hesitation.", Star),
      demoCard("Local analytics", "Track quote requests, service views, booked appointments, and top areas.", BarChart3),
    ],
    directoryLabel: "Projects",
    directoryTitle: "Project proof and service outcomes",
    directoryDescription:
      "Project pages can show before-after proof, scope, turnaround, outcome, review, and related service CTA.",
    directoryItems: [
      directoryItem("Office Renovation Support", "Project proof", "Completed in 12 days", "Scope, photos, process, result summary, and client feedback."),
      directoryItem("Emergency Repair Job", "Repair proof", "Same-day response", "Issue intake, technician routing, completion notes, and warranty details."),
      directoryItem("Consulting Sprint", "Professional service", "4-week engagement", "Goals, deliverables, timeline, results, and next-step CTA."),
    ],
    resourceLabel: "Reviews",
    resourceTitle: "Reviews and trust sections",
    resourcePages: [
      resourcePage("Client Reviews", "Review blocks filtered by service, location, result, and urgency.", ["Service", "Location", "Rating"], Star),
      resourcePage("Service Areas", "Location pages for neighborhoods, cities, branches, and coverage notes.", ["Areas", "Branches", "Coverage"], MapPin),
      resourcePage("Process And Guarantees", "Explain request, inspection, quote, delivery, support, and guarantees.", ["Process", "Quote", "Guarantee"], ShieldCheck),
    ],
    contactTitle: "Quote request form",
    contactDescription:
      "Capture service need, quote details, location, urgency, photos or notes, and team follow-up requirements.",
    flowSteps: ["Service Need", "Quote Details", "Contact", "Team Follow-up"],
    requestFields: ["Customer name", "Phone / WhatsApp", "Service need", "Location", "Urgency", "Project notes"],
    mobileScreens: defaultMobileScreens("Services", "Quote"),
    mobileUpdates: [
      ["Quote request sent", "Team receives service need and location."],
      ["Appointment booked", "Preferred time is ready for confirmation."],
      ["Review viewed", "Proof section influenced the inquiry path."],
    ],
    statsLabels: ["Quotes", "Views", "Bookings", "Top area"],
    analyticsSources: [["Local search", "44%"], ["Service area pages", "23%"], ["Reviews", "19%"], ["Referral", "14%"]],
    analyticsMetrics: [
      analyticsMetric("Quote requests", "430", "+22.1%"),
      analyticsMetric("Service views", "7,840", "+18.8%"),
      analyticsMetric("Booked appointments", "210", "+15.6%"),
      analyticsMetric("Top service area", "Central", "+13.4%"),
    ],
  };
}

export const industryWebsitePages: Record<string, IndustryWebsitePageData> = {
  "real-estate": {
    industrySlug: "real-estate",
    industryName: "Real Estate",
    eyebrow: "Real Estate Website Solutions",
    title: "Real Estate Websites That Showcase Properties And Convert Site Visits",
    highlight: "Convert Site Visits",
    description:
      "Property websites built around listings, project pages, location SEO, galleries, maps, inquiries, and site visit requests.",
    primaryRoute: "/industries/real-estate/website-development",
    aliases: ["website-development", "website"],
    keywords: [
      "real estate website development",
      "property listing website",
      "builder website",
      "site visit booking website",
    ],
    serviceType: "Real Estate Website Development",
    heroImage: realEstateImages[0],
    heroBrand: "EstatePoint",
    heroHeadline: "Find The Right Property With Confidence",
    heroSubtext:
      "Listings, project details, maps, galleries, and visit requests in one conversion-focused property website.",
    heroNav: ["Home", "Projects", "Locations", "Gallery", "Contact"],
    heroPrimaryCta: "Book Site Visit",
    heroSecondaryCta: "View Listings",
    heroChips: [
      { label: "Property Listings", icon: Building2 },
      { label: "Location SEO", icon: MapPin },
      { label: "Visit Booking", icon: CalendarCheck },
      { label: "WhatsApp Leads", icon: MessageCircle },
    ],
    heroStats: [
      ["120+", "Listings"],
      ["38", "Locations"],
      ["420", "Visit Leads"],
      ["11.8%", "Lead Rate"],
    ],
    problemsTitle: "Challenges We Solve For Real Estate Teams",
    problems: [
      {
        title: "Scattered Property Information",
        description:
          "Buyers leave when plans, pricing, amenities, gallery, and location details are spread across PDFs and calls.",
        icon: FileText,
        tone: "blue",
      },
      {
        title: "Weak Project Trust",
        description:
          "Projects need approvals, proof, neighborhood context, and clear ownership before buyers share contact details.",
        icon: ShieldCheck,
        tone: "emerald",
      },
      {
        title: "Poor Location Visibility",
        description:
          "Without location pages and SEO-ready project content, high-intent local searches go to competitors.",
        icon: Search,
        tone: "rose",
      },
      {
        title: "No Site Visit Flow",
        description:
          "Generic forms miss preferred project, budget, buyer profile, visit time, and sales follow-up context.",
        icon: CalendarCheck,
        tone: "violet",
      },
    ],
    featuresTitle: "What Your Real Estate Website Will Include",
    features: [
      {
        title: "Property Listing Pages",
        description:
          "Filter-ready pages for projects, units, rentals, plots, villas, and commercial inventory.",
        icon: Building2,
      },
      {
        title: "Project Detail Pages",
        description:
          "Dedicated project pages with plans, amenities, pricing notes, approvals, galleries, and nearby landmarks.",
        icon: Home,
      },
      {
        title: "Location Pages",
        description:
          "SEO-ready pages for cities, neighborhoods, corridors, and project clusters.",
        icon: MapPin,
      },
      {
        title: "Site Visit Booking",
        description:
          "Capture visit date, project interest, buyer profile, and sales team routing.",
        icon: CalendarCheck,
      },
      {
        title: "WhatsApp Lead Capture",
        description:
          "Fast mobile inquiry paths for brokers, buyers, renters, and investors.",
        icon: MessageCircle,
      },
      {
        title: "Gallery And Map Sections",
        description:
          "Showcase project visuals, construction status, map embed areas, and local context.",
        icon: MonitorSmartphone,
      },
    ],
    modulesTitle: "Built for Every Real Estate Website Model",
    modulesDescription:
      "Use the same premium website system for developers, agencies, brokers, rentals, and property consultants.",
    modules: [
      { title: "Property Developers", image: image(realEstateImages, 0), icon: Building2, points: ["Project pages", "Approval proof", "Tower inventory", "Site visit forms"] },
      { title: "Real Estate Agencies", image: image(realEstateImages, 1), icon: Store, points: ["Listing search", "Area pages", "Agent profiles", "Lead routing"] },
      { title: "Brokers", image: image(realEstateImages, 2), icon: Users, points: ["Buyer forms", "WhatsApp leads", "Featured listings", "Follow-up queues"] },
      { title: "Builders", image: image(realEstateImages, 3), icon: Home, points: ["Project launches", "Floor plans", "Amenities", "Construction updates"] },
      { title: "Rental Businesses", image: image(realEstateImages, 0), icon: CalendarCheck, points: ["Rental listings", "Tenant forms", "Owner inquiries", "Map sections"] },
      { title: "Commercial Property", image: image(realEstateImages, 1), icon: Landmark, points: ["Office listings", "Lease inquiries", "Location proof", "Broker contact"] },
      { title: "Luxury Properties", image: image(realEstateImages, 2), icon: Sparkles, points: ["Premium galleries", "Private inquiries", "Lifestyle pages", "Concierge CTA"] },
      { title: "Property Consultants", image: image(realEstateImages, 3), icon: Handshake, points: ["Consultation pages", "Buyer guides", "Investment forms", "Trust content"] },
    ],
    trustedProvidersTitle: "Trusted By Property Businesses Across The Country",
    trustedProvidersDescription:
      "Property brands, agencies, builders, and consultants can be presented with clear service positioning and trust proof.",
    trustedProviders: [
      provider("UrbanNest Realty", "Real estate agency", realEstateImages, 0),
      provider("PrimeSpace Developers", "Property developer", realEstateImages, 1),
      provider("MetroView Properties", "Property listings", realEstateImages, 2),
      provider("EstatePro Consultants", "Property consultant", realEstateImages, 3),
      provider("Skyline Habitat", "Luxury projects", realEstateImages, 0),
      provider("RentBridge Homes", "Rental business", realEstateImages, 1),
      provider("NorthGate Realty", "Commercial property", realEstateImages, 2),
      provider("Avenue Plot Co.", "Land projects", realEstateImages, 3),
    ],
    demoGalleryTitle: "Real Estate Website Experiences - Built For Every Property Business",
    demoGalleryDescription:
      "Explore developer, broker, luxury, rental, commercial, consultant, land, and co-living website experiences with listing, inquiry, and visit flows.",
    demoGallery: [
      demo("Property Developer Website", "Project launches, towers, plans, approvals, and site visits.", "PrimeSpace", "Launch Projects With Trust And Clarity", realEstateImages, 0, Building2, "emerald", ["12+", "420", "38", "11%"], ["Project Pages", "Floor Plans", "Approvals", "Site Visits"]),
      demo("Broker Agency Website", "Listings, area pages, agent profiles, and WhatsApp inquiries.", "BrokerBridge", "Turn Buyer Searches Into Qualified Leads", realEstateImages, 1, Users, "blue", ["85", "230", "14", "9%"], ["Listing Search", "Area Pages", "Agent Profiles", "Lead Routing"]),
      demo("Luxury Property Website", "Premium galleries, lifestyle content, and private inquiries.", "LuxeHabitat", "Showcase Signature Homes With Elegance", realEstateImages, 2, Sparkles, "violet", ["VIP", "Gallery", "Tours", "High"], ["Luxury Gallery", "Private Tours", "Lifestyle Pages", "Concierge CTA"]),
      demo("Rental Listing Website", "Rental inventory, tenant forms, owner inquiries, and maps.", "RentNest", "Fill Vacancies With Better Rental Discovery", realEstateImages, 3, Home, "teal", ["60", "180", "Map", "Fast"], ["Rental Listings", "Tenant Forms", "Owner Leads", "Map Search"]),
      demo("Commercial Property Website", "Office, retail, warehouse, and lease inquiry pages.", "MetroLease", "Make Commercial Spaces Easier To Compare", realEstateImages, 0, Landmark, "orange", ["B2B", "Lease", "Maps", "ROI"], ["Office Listings", "Lease Forms", "Location Proof", "Broker CTA"]),
      demo("Property Consultant Website", "Advisory pages, investment guides, and consultation flows.", "EstateGuide", "Guide Buyers From Research To Decision", realEstateImages, 1, Handshake, "rose", ["Guide", "Trust", "Calls", "Plans"], ["Buyer Guides", "Investment Forms", "Consultation", "Trust Content"]),
      demo("Land / Plot Selling Website", "Plot listings, map sections, approvals, pricing notes, and buyer inquiry flows.", "PlotVista", "Present Land Projects With Clear Buyer Trust", realEstateImages, 2, MapPin, "blue", ["Plots", "Maps", "Docs", "Leads"], ["Plot Listings", "Map Sections", "Approval Proof", "Buyer Inquiry"]),
      demo("PG / Co-Living Website", "Room availability, amenities, location proof, booking inquiries, and tenant trust.", "CoLivePoint", "Fill Rooms With A Better Co-Living Website", realEstateImages, 3, Building2, "emerald", ["Rooms", "Rent", "Area", "Book"], ["Room Listings", "Amenities", "Location Proof", "Booking Inquiry"]),
    ],
    demoCtaTitle: "100% Customizable Real Estate Website Experiences",
    demoCtaDescription:
      "Every website experience can be customized with your projects, listings, maps, amenities, sales process, lead routing, and brand style.",
    benefitsTitle: "Why Property Businesses Choose Us",
    benefits: [
      { title: "Better Property Discovery", description: "Buyers can understand listings without calling for every basic detail.", icon: Search },
      { title: "Higher Buyer Trust", description: "Project proof, gallery, map, and approvals make inquiry decisions easier.", icon: ShieldCheck },
      { title: "Faster Sales Follow-up", description: "Structured forms send clearer project, budget, and visit context.", icon: MessageCircle },
      { title: "Location SEO Growth", description: "Project and area pages create long-term search visibility.", icon: BarChart3 },
    ],
    ctaTitle: "Ready To Turn Property Traffic Into Site Visits?",
    ctaDescription:
      "Build a premium real estate website that connects listings, project trust, location SEO, inquiries, and sales follow-up.",
    ctaLabel: "Build My Website",
    pricingDescription: "Flexible plans designed to grow with your real estate business",
    pricingPlans: [
      plan("Property Starter", "Best for brokers and small property teams", `${rupee}30,000`, Home, ["Up to 10 Pages", "Property Inquiry Forms", "Mobile Responsive", "Basic SEO Setup", "Email Support"]),
      plan("Real Estate Growth", "Best for agencies, rentals, and project campaigns", `${rupee}60,000`, BarChart3, ["Up to 25 Pages", "Listing And Project Pages", "Site Visit Booking", "Analytics Setup", "Priority Support"], true),
      plan("Developer Enterprise", "Best for builders, developers, and multi-project portfolios", `${rupee}1,20,000+`, ShieldCheck, ["Unlimited Pages", "Multi-Project Structure", "Advanced Lead Routing", "Custom Integrations", "Dedicated Account Manager"]),
    ],
    testimonialsTitle: "Happy Property Teams, Better Buyer Experiences",
    testimonials: [
      { quote: "The website structure made our projects easier to explain and our inquiry quality much better.", name: "Rhea Kapoor", role: "Property developer" },
      { quote: "Listings, location pages, and visit forms finally felt connected in one buyer journey.", name: "Arjun Mehta", role: "Brokerage team" },
      { quote: "The site visit flow captured budget and project interest before our sales team called.", name: "Nisha Rao", role: "Property consultant" },
    ],
    complianceDescription:
      "We follow secure website practices to protect property inquiries, lead details, and visitor trust.",
    compliance: trustItems(["SSL Secured", "Lead Data Protection", "Property Inquiry Privacy", "Fast Hosting", "Regular Backups"]),
    aiAutomation: websiteAiAutomation,
    integrationsDeployment: websiteIntegrationsDeployment,
    demoContent: createRealEstateDemoContent(),
  },

  education: {
    industrySlug: "education",
    industryName: "Education",
    eyebrow: "Education Website Solutions",
    title: "Education Websites That Guide Admissions And Build Parent Trust",
    highlight: "Build Parent Trust",
    description:
      "Admission-focused education websites for schools, colleges, coaching institutes, edtech brands, and training centers.",
    primaryRoute: "/industries/education/website-development",
    aliases: ["website-development", "website"],
    keywords: ["education website development", "school website", "admission website", "course website"],
    serviceType: "Education Website Development",
    heroImage: educationImages[0],
    heroBrand: "LearnBridge",
    heroHeadline: "Programs, Admissions, Faculty And Campus Trust",
    heroSubtext:
      "Help students and parents understand courses, outcomes, faculty, campus proof, and admission steps.",
    heroNav: ["Home", "Programs", "Admissions", "Faculty", "Contact"],
    heroPrimaryCta: "Admission Inquiry",
    heroSecondaryCta: "Download Brochure",
    heroChips: [
      { label: "Course Pages", icon: GraduationCap },
      { label: "Admissions Flow", icon: ClipboardCheck },
      { label: "Faculty Trust", icon: UserCheck },
      { label: "Campus Proof", icon: School },
    ],
    heroStats: [["42", "Programs"], ["1,280", "Inquiries"], ["18", "Faculty"], ["22%", "Brochures"]],
    problemsTitle: "Challenges We Solve For Education Teams",
    problems: [
      { title: "Weak Admissions Flow", description: "Parents and students need eligibility, fees, deadlines, counselor contact, and clear next steps.", icon: ClipboardList, tone: "rose" },
      { title: "Unclear Course Information", description: "Thin course pages make programs hard to compare and reduce inquiry quality.", icon: GraduationCap, tone: "blue" },
      { title: "Low Parent Trust", description: "Faculty, campus, outcomes, testimonials, notices, and proof need to be visible before inquiry.", icon: ShieldCheck, tone: "emerald" },
      { title: "Poor Program Visibility", description: "Without SEO-ready course pages, high-intent program searches are missed.", icon: Search, tone: "violet" },
    ],
    featuresTitle: "What Your Education Website Will Include",
    features: [
      { title: "Course And Program Pages", description: "Detailed pages for courses, grades, departments, batches, eligibility, outcomes, and fees.", icon: GraduationCap },
      { title: "Admissions Inquiry Forms", description: "Forms that capture program interest, student details, parent contact, and counselor routing.", icon: ClipboardCheck },
      { title: "Faculty Profiles", description: "Show faculty experience, departments, qualifications, and student trust markers.", icon: UserCheck },
      { title: "Campus Proof", description: "Gallery, facilities, achievements, placements, activities, and student life sections.", icon: School },
      { title: "Notice And Events", description: "Publish admissions updates, open houses, seminars, exam dates, and important notices.", icon: CalendarCheck },
      { title: "Brochure Download", description: "Capture contact details before brochure downloads and counselor follow-up.", icon: FileText },
    ],
    modulesTitle: "Built for Every Education Website Model",
    modulesDescription:
      "A consistent website system for schools, colleges, coaching institutes, edtech platforms, and training centers.",
    modules: [
      { title: "Schools", image: image(educationImages, 0), icon: School, points: ["Admissions pages", "Campus proof", "Parent inquiry", "Notices"] },
      { title: "Colleges", image: image(educationImages, 1), icon: Building2, points: ["Department pages", "Faculty profiles", "Placement proof", "Applications"] },
      { title: "Coaching Institutes", image: image(educationImages, 2), icon: GraduationCap, points: ["Batch pages", "Trial class CTA", "Results proof", "Counselor forms"] },
      { title: "EdTech Platforms", image: image(educationImages, 3), icon: MonitorSmartphone, points: ["Course catalog", "Trial lessons", "Learner dashboard", "Subscription CTA"] },
      { title: "Training Centers", image: image(educationImages, 0), icon: BadgeCheck, points: ["Program tracks", "Certificate proof", "Brochures", "Counselor flow"] },
      { title: "Online Course Brands", image: image(educationImages, 1), icon: Smartphone, points: ["Course landing pages", "Instructor profiles", "Checkout inquiry", "Student reviews"] },
      { title: "Preschools", image: image(educationImages, 2), icon: Sparkles, points: ["Parent trust", "Age group pages", "Visit booking", "Gallery sections"] },
      { title: "Universities", image: image(educationImages, 3), icon: Landmark, points: ["Program schools", "Research pages", "Admissions portal", "International inquiry"] },
    ],
    trustedProvidersTitle: "Trusted By Education Providers Across The Country",
    trustedProvidersDescription:
      "Education providers can be presented with program clarity, admissions trust, and student-focused discovery.",
    trustedProviders: [
      provider("BrightPath Academy", "School", educationImages, 0),
      provider("EduRise Institute", "Coaching institute", educationImages, 1),
      provider("SkillBridge Learning", "Training center", educationImages, 2),
      provider("CampusNorth College", "College", educationImages, 3),
      provider("LittleSteps Preschool", "Preschool", educationImages, 0),
      provider("CourseNest Online", "Online course brand", educationImages, 1),
      provider("FutureGrade University", "University", educationImages, 2),
      provider("MentorPeak Classes", "Coaching classes", educationImages, 3),
    ],
    demoGalleryTitle: "Education Website Experiences - Built For Every Learning Provider",
    demoGalleryDescription:
      "Explore school, college, coaching, edtech, training center, and online course website previews with admissions and inquiry flows.",
    demoGallery: [
      demo("School Website", "Admissions, campus proof, notices, and parent inquiry flows.", "BrightPath", "Help Parents Choose With Confidence", educationImages, 0, School, "blue", ["Classes", "Tours", "Forms", "Trust"], ["Admissions", "Campus Gallery", "Notices", "Parent Inquiry"]),
      demo("College Website", "Programs, departments, faculty, placements, and applications.", "CampusBridge", "Show Programs, Outcomes And Campus Life", educationImages, 1, Landmark, "emerald", ["42", "Faculty", "Apply", "Jobs"], ["Departments", "Placements", "Applications", "Faculty Profiles"]),
      demo("Coaching Institute Website", "Batch pages, results proof, trial class booking, and leads.", "CoachSprint", "Turn Exam Interest Into Batch Inquiries", educationImages, 2, GraduationCap, "orange", ["Batches", "Rank", "Trial", "Calls"], ["Batch Pages", "Results Proof", "Trial Class", "Counselor CTA"]),
      demo("EdTech Platform Website", "Course catalog, trial lessons, subscriptions, and learner trust.", "EduFlow", "Launch Courses With A Clear Learning Journey", educationImages, 3, MonitorSmartphone, "violet", ["Courses", "Trial", "App", "Learn"], ["Course Catalog", "Trial Lessons", "Learner Dashboard", "Subscriptions"]),
      demo("Training Center Website", "Skill tracks, certificates, outcomes, and counselor inquiries.", "SkillForge", "Present Training Programs That Feel Career Ready", educationImages, 0, BadgeCheck, "teal", ["Skills", "Certs", "Jobs", "Calls"], ["Program Tracks", "Certificates", "Career Outcomes", "Brochure Forms"]),
      demo("Online Course Website", "Instructor pages, course detail pages, and inquiry paths.", "CourseNest", "Sell Online Courses With Better Clarity", educationImages, 1, Smartphone, "rose", ["Video", "Tutor", "Enroll", "Track"], ["Course Pages", "Instructor Profiles", "Enrollment CTA", "Student Reviews"]),
      demo("Preschool Website", "Parent trust, age group pages, gallery proof, visit booking, and inquiry paths.", "LittleSteps", "Help Parents Feel Confident Before A Visit", educationImages, 2, Sparkles, "blue", ["Kids", "Tours", "Care", "Trust"], ["Age Groups", "Parent Inquiry", "Visit Booking", "Gallery Sections"]),
      demo("University Website", "Program schools, research pages, admissions content, and international inquiry flows.", "FutureGrade", "Present A Complete University Experience", educationImages, 3, Landmark, "emerald", ["Schools", "Apply", "Global", "Life"], ["Program Schools", "Research Pages", "Admissions", "International Inquiry"]),
    ],
    demoCtaTitle: "100% Customizable Education Website Experiences",
    demoCtaDescription:
      "Every website experience can be customized with programs, admissions forms, faculty profiles, campus photos, notices, brochures, and counselor flows.",
    benefitsTitle: "Why Education Providers Choose Us",
    benefits: [
      { title: "Clear Admission Paths", description: "Parents and students know exactly what to do next.", icon: ClipboardCheck },
      { title: "Better Program Discovery", description: "Course pages explain outcomes, eligibility, fees, and fit.", icon: GraduationCap },
      { title: "Stronger Parent Trust", description: "Faculty, campus proof, results, and reviews reduce hesitation.", icon: ShieldCheck },
      { title: "SEO-Ready Course Growth", description: "Program and admissions pages capture long-term search demand.", icon: Search },
    ],
    ctaTitle: "Ready To Turn Education Interest Into Admission Inquiries?",
    ctaDescription:
      "Build an education website that explains programs, earns parent trust, captures inquiries, and supports counselor follow-up.",
    ctaLabel: "Build My Website",
    pricingDescription: "Flexible plans designed to grow with your education brand",
    pricingPlans: [
      plan("Institute Starter", "Best for schools, tutors, and smaller institutes", `${rupee}25,000`, School, ["Up to 10 Pages", "Admission Inquiry Form", "Mobile Responsive", "Basic SEO Setup", "Email Support"]),
      plan("Admission Growth", "Best for growing institutes and coaching brands", `${rupee}55,000`, BarChart3, ["Up to 25 Pages", "Course And Batch Pages", "Brochure Lead Capture", "Analytics Setup", "Priority Support"], true),
      plan("Education Enterprise", "Best for colleges, universities, and multi-branch groups", `${rupee}1,10,000+`, ShieldCheck, ["Unlimited Pages", "Multi-Program Structure", "Advanced Form Routing", "Custom Integrations", "Dedicated Account Manager"]),
    ],
    testimonialsTitle: "Happy Education Teams, Better Admission Experiences",
    testimonials: [
      { quote: "Our admissions journey became much easier for parents to understand.", name: "Meera Iyer", role: "School administrator" },
      { quote: "The course pages and brochure flow helped us qualify student interest faster.", name: "Kabir Shah", role: "Coaching institute" },
      { quote: "Faculty profiles, outcomes, and campus proof finally worked together in one website.", name: "Ananya Sen", role: "College marketing team" },
    ],
    complianceDescription:
      "We follow secure website practices to protect student inquiries, admission forms, and institution trust.",
    compliance: trustItems(["Student Data Privacy", "SSL Secured", "Admission Form Protection", "Fast Hosting", "Regular Backups"]),
    aiAutomation: websiteAiAutomation,
    integrationsDeployment: websiteIntegrationsDeployment,
    demoContent: createEducationDemoContent(),
  },

  manufacturing: {
    industrySlug: "manufacturing",
    industryName: "Manufacturing",
    eyebrow: "Manufacturing Website Solutions",
    title: "Manufacturing Websites That Present Products And Capture B2B Inquiries",
    highlight: "Capture B2B Inquiries",
    description:
      "Industrial websites for factories, suppliers, exporters, OEM teams, product catalogs, RFQs, and distributor inquiries.",
    primaryRoute: "/industries/manufacturing/website-development",
    aliases: ["website-development", "website"],
    keywords: ["manufacturing website development", "industrial website", "product catalog website", "rfq website"],
    serviceType: "Manufacturing Website Development",
    heroImage: manufacturingImages[0],
    heroBrand: "IndustryGrid",
    heroHeadline: "Products, Capabilities, Certifications And RFQs",
    heroSubtext:
      "Present manufacturing strength, catalogs, quality proof, export capabilities, and B2B inquiry forms.",
    heroNav: ["Home", "Products", "Capabilities", "Quality", "Contact"],
    heroPrimaryCta: "Request Quote",
    heroSecondaryCta: "View Catalog",
    heroChips: [
      { label: "Product Catalog", icon: PackageSearch },
      { label: "RFQ Forms", icon: FileText },
      { label: "Certifications", icon: BadgeCheck },
      { label: "Export Ready", icon: Truck },
    ],
    heroStats: [["240", "SKUs"], ["86", "RFQs"], ["12", "Markets"], ["B2B", "Ready"]],
    problemsTitle: "Challenges We Solve For Manufacturing Teams",
    problems: [
      { title: "Weak Product Presentation", description: "Industrial buyers need specs, applications, materials, tolerances, and downloadable details before contacting.", icon: PackageSearch, tone: "blue" },
      { title: "Low Buyer Confidence", description: "Certifications, quality process, plant capability, and export proof must be easy to verify.", icon: BadgeCheck, tone: "emerald" },
      { title: "Poor RFQ Capture", description: "Generic forms miss product type, quantity, drawing files, destination, and timeline context.", icon: FileText, tone: "rose" },
      { title: "Limited B2B Visibility", description: "Without product and application pages, supplier searches are hard to win.", icon: Search, tone: "violet" },
    ],
    featuresTitle: "What Your Manufacturing Website Will Include",
    features: [
      { title: "Product Catalog Pages", description: "Organized product families, specs, applications, variants, and downloadable PDFs.", icon: PackageSearch },
      { title: "RFQ Inquiry Forms", description: "Capture quantity, grade, drawings, destination, timeline, and buyer contact details.", icon: FileText },
      { title: "Capabilities Section", description: "Show production capacity, machinery, materials, quality process, and industries served.", icon: Factory },
      { title: "Certifications Section", description: "Display compliance, certifications, standards, testing, and buyer confidence proof.", icon: BadgeCheck },
      { title: "Distributor And Export Pages", description: "Explain logistics, export regions, B2B terms, and distributor inquiry paths.", icon: Truck },
      { title: "Analytics Setup", description: "Track product views, RFQ sources, catalog downloads, and high-value inquiries.", icon: BarChart3 },
    ],
    modulesTitle: "Built for Every Manufacturing Website Model",
    modulesDescription:
      "Support factories, exporters, industrial suppliers, OEM teams, distributors, and machinery businesses.",
    modules: [
      { title: "Factories", image: image(manufacturingImages, 0), icon: Factory, points: ["Capability pages", "Production proof", "Quality process", "Plant gallery"] },
      { title: "Industrial Suppliers", image: image(manufacturingImages, 1), icon: PackageCheck, points: ["Product categories", "Specs", "RFQ forms", "Bulk inquiry"] },
      { title: "Exporters", image: image(manufacturingImages, 2), icon: Truck, points: ["Export regions", "Certifications", "Logistics proof", "Buyer forms"] },
      { title: "Product Manufacturers", image: image(manufacturingImages, 3), icon: PackageSearch, points: ["Catalog pages", "Applications", "Downloads", "Variant tables"] },
      { title: "OEM Businesses", image: image(manufacturingImages, 0), icon: Handshake, points: ["OEM services", "Drawing upload", "Capacity proof", "NDA inquiry"] },
      { title: "Distributors", image: image(manufacturingImages, 1), icon: Store, points: ["Product lines", "Dealer inquiry", "Territory pages", "Quote routing"] },
      { title: "B2B Traders", image: image(manufacturingImages, 2), icon: Users, points: ["Bulk demand", "Product sourcing", "Lead forms", "Trade proof"] },
      { title: "Machinery Businesses", image: image(manufacturingImages, 3), icon: Wrench, points: ["Machine pages", "Service support", "Consultation booking", "Spare parts"] },
    ],
    trustedProvidersTitle: "Trusted By Industrial Businesses Across The Country",
    trustedProvidersDescription:
      "Industrial providers can be presented with product strength, export readiness, certifications, and B2B credibility.",
    trustedProviders: [
      provider("IronPeak Industries", "Factory", manufacturingImages, 0),
      provider("Apex Tools Manufacturing", "Product manufacturer", manufacturingImages, 1),
      provider("NorthLine Exports", "Exporter", manufacturingImages, 2),
      provider("SteelGrid Components", "Industrial supplier", manufacturingImages, 3),
      provider("MachinaWorks", "Machinery business", manufacturingImages, 0),
      provider("ForgePath OEM", "OEM business", manufacturingImages, 1),
      provider("SupplyAxis Traders", "B2B trader", manufacturingImages, 2),
      provider("DeltaParts Distribution", "Distributor", manufacturingImages, 3),
    ],
    demoGalleryTitle: "Manufacturing Website Experiences - Built For Industrial Buyers",
    demoGalleryDescription:
      "Explore factory, industrial supplier, exporter, product catalog, machinery, and B2B distributor website previews.",
    demoGallery: [
      demo("Factory Website", "Capabilities, capacity, certifications, and RFQ flows.", "IronPeak", "Show Factory Strength With Buyer Confidence", manufacturingImages, 0, Factory, "blue", ["Plant", "ISO", "RFQ", "B2B"], ["Capabilities", "Quality Proof", "Plant Gallery", "RFQ Forms"]),
      demo("Industrial Supplier Website", "Product categories, specs, bulk inquiries, and catalog downloads.", "SupplyGrid", "Make Industrial Products Easier To Source", manufacturingImages, 1, PackageCheck, "emerald", ["240", "Specs", "Bulk", "Fast"], ["Product Categories", "Specs", "Bulk Inquiry", "Downloads"]),
      demo("Export Business Website", "Regions, logistics, certifications, and international buyer forms.", "NorthLine", "Build Export Trust Before The First Call", manufacturingImages, 2, Truck, "orange", ["12", "Ports", "Docs", "Global"], ["Export Regions", "Logistics Proof", "Certifications", "Buyer Forms"]),
      demo("Product Catalog Website", "Detailed products, applications, variants, and RFQ request paths.", "ProductBase", "Turn Catalog Browsing Into Qualified RFQs", manufacturingImages, 3, PackageSearch, "violet", ["SKUs", "PDF", "Specs", "RFQ"], ["Catalog Pages", "Applications", "Variants", "Quote Requests"]),
      demo("Machinery Website", "Machines, website previews, service support, and spare part inquiries.", "MachineHub", "Explain Machinery Value With Clear Walkthroughs", manufacturingImages, 0, Wrench, "teal", ["Walkthrough", "Parts", "Service", "B2B"], ["Machine Pages", "Consultation Booking", "Service Support", "Spare Parts"]),
      demo("B2B Distributor Website", "Product lines, territory pages, dealer forms, and lead routing.", "TradeWorks", "Connect Buyers To The Right Distributor Flow", manufacturingImages, 1, Store, "rose", ["Lines", "Dealers", "Areas", "Leads"], ["Product Lines", "Dealer Forms", "Territory Pages", "Lead Routing"]),
      demo("OEM / Fabrication Website", "Custom fabrication, drawing review, material options, and production inquiry flows.", "FabriCore", "Turn Custom Requirements Into Qualified RFQs", manufacturingImages, 2, Factory, "blue", ["OEM", "Draw", "Batch", "RFQ"], ["Fabrication Pages", "Drawing Review", "Material Options", "Production Inquiry"]),
      demo("Chemical / Materials Website", "Material grades, compliance proof, applications, safety notes, and buyer forms.", "MaterialWorks", "Present Industrial Materials With Compliance Trust", manufacturingImages, 3, ClipboardCheck, "emerald", ["Grades", "Safe", "Docs", "Bulk"], ["Material Grades", "Compliance Proof", "Applications", "Buyer Forms"]),
    ],
    demoCtaTitle: "100% Customizable Manufacturing Website Experiences",
    demoCtaDescription:
      "Every website experience can be customized with products, specs, certifications, catalogs, RFQ fields, export regions, and B2B workflows.",
    benefitsTitle: "Why Industrial Businesses Choose Us",
    benefits: [
      { title: "Better Product Clarity", description: "Buyers understand specs, applications, and capabilities before inquiry.", icon: PackageSearch },
      { title: "Stronger B2B Trust", description: "Certifications, quality process, and plant proof reduce buyer hesitation.", icon: BadgeCheck },
      { title: "More Useful RFQs", description: "Forms capture product, quantity, drawings, timeline, and destination.", icon: FileText },
      { title: "Search Visibility", description: "Product and application pages capture industrial buyer searches.", icon: Search },
    ],
    ctaTitle: "Ready To Turn Industrial Traffic Into RFQs?",
    ctaDescription:
      "Build a manufacturing website that presents products, proves capability, captures RFQs, and supports B2B sales.",
    ctaLabel: "Build My Website",
    pricingDescription: "Flexible plans designed to grow with your manufacturing business",
    pricingPlans: [
      plan("Industrial Starter", "Best for small manufacturers and suppliers", `${rupee}35,000`, Factory, ["Up to 10 Pages", "RFQ Inquiry Form", "Mobile Responsive", "Basic SEO Setup", "Email Support"]),
      plan("B2B Growth", "Best for catalog-led manufacturers and exporters", `${rupee}70,000`, BarChart3, ["Up to 30 Pages", "Product Catalog Structure", "RFQ And Download Forms", "Analytics Setup", "Priority Support"], true),
      plan("Manufacturing Enterprise", "Best for large factories and multi-category industrial groups", `${rupee}1,40,000+`, ShieldCheck, ["Unlimited Pages", "Advanced Catalogs", "Drawing Upload Flow", "Custom Integrations", "Dedicated Account Manager"]),
    ],
    testimonialsTitle: "Happy Industrial Teams, Better Buyer Experiences",
    testimonials: [
      { quote: "The catalog and RFQ flow gave our sales team much cleaner buyer information.", name: "Rohan Kulkarni", role: "Industrial supplier" },
      { quote: "Capabilities, certifications, and product pages finally looked organized for export buyers.", name: "Devika Menon", role: "Export business" },
      { quote: "The machinery website helped us explain products and capture service inquiries in one place.", name: "Sameer Jain", role: "Machinery team" },
    ],
    complianceDescription:
      "We follow secure website practices to protect B2B inquiries, RFQ details, documents, and buyer data.",
    compliance: trustItems(["B2B Inquiry Privacy", "SSL Secured", "RFQ Data Protection", "Secure Hosting", "Regular Backups"]),
    aiAutomation: websiteAiAutomation,
    integrationsDeployment: websiteIntegrationsDeployment,
    demoContent: createManufacturingDemoContent(),
  },

  retail: {
    industrySlug: "retail",
    industryName: "Retail",
    eyebrow: "Retail Website Solutions",
    title: "Retail Websites That Showcase Products And Grow Online Sales",
    highlight: "Grow Online Sales",
    description:
      "Retail and ecommerce websites for product discovery, store trust, campaign pages, inquiries, catalogs, and sales growth.",
    primaryRoute: "/industries/retail/ecommerce-website",
    aliases: ["ecommerce-website", "website"],
    keywords: ["retail website development", "ecommerce website", "d2c website", "product catalog website"],
    serviceType: "Retail Website Development",
    heroImage: retailImages[0],
    heroBrand: "RetailLane",
    heroHeadline: "Products, Offers, Store Trust And Online Orders",
    heroSubtext:
      "Showcase products, collections, campaigns, store details, and inquiry or order paths for retail buyers.",
    heroNav: ["Home", "Collections", "Offers", "Stores", "Contact"],
    heroPrimaryCta: "Shop Collection",
    heroSecondaryCta: "View Offers",
    heroChips: [
      { label: "Product Catalog", icon: ShoppingBag },
      { label: "Offer Pages", icon: Tags },
      { label: "Mobile Shopping", icon: Smartphone },
      { label: "Customer Trust", icon: Star },
    ],
    heroStats: [["320", "Products"], ["18", "Campaigns"], ["9.4%", "Lead Rate"], ["Fast", "Mobile"]],
    problemsTitle: "Challenges We Solve For Retail Brands",
    problems: [
      { title: "Messy Product Discovery", description: "Customers leave when collections, categories, pricing context, and offers are hard to browse.", icon: ShoppingBag, tone: "blue" },
      { title: "Weak Store Trust", description: "Retail buyers need reviews, photos, policies, delivery notes, and secure inquiry paths.", icon: ShieldCheck, tone: "emerald" },
      { title: "Poor Campaign Landing Pages", description: "Seasonal offers need dedicated pages that make promotion and conversion simple.", icon: Tags, tone: "rose" },
      { title: "Not Mobile Friendly", description: "Retail browsing is mobile-led, so slow pages and unclear CTAs lose buyers quickly.", icon: Smartphone, tone: "violet" },
    ],
    featuresTitle: "What Your Retail Website Will Include",
    features: [
      { title: "Product Catalog Pages", description: "Collection and category pages for product discovery, variants, pricing context, and inquiries.", icon: ShoppingBag },
      { title: "Offer And Campaign Pages", description: "Dedicated pages for seasonal offers, launches, discounts, and store promotions.", icon: Tags },
      { title: "Store And Brand Sections", description: "Build trust with locations, policies, reviews, brand story, and customer support details.", icon: Store },
      { title: "Inquiry Or Order Flow", description: "Capture product interest, cart intent, quote requests, size choices, and customer details.", icon: ClipboardList },
      { title: "Mobile Responsive Design", description: "Fast browsing, clear CTAs, and collection layouts built for mobile shoppers.", icon: Smartphone },
      { title: "Analytics Setup", description: "Track product views, campaign clicks, inquiries, store demand, and conversion rate.", icon: BarChart3 },
    ],
    modulesTitle: "Built for Every Retail Website Model",
    modulesDescription:
      "Support fashion, grocery, electronics, D2C, lifestyle, beauty, and home decor retail brands.",
    modules: [
      { title: "Fashion Stores", image: image(retailImages, 0), icon: ShoppingBag, points: ["Collection pages", "Size inquiry", "Lookbook", "Offer banners"] },
      { title: "Grocery Stores", image: image(retailImages, 1), icon: Store, points: ["Category catalog", "Daily offers", "Delivery inquiry", "Store locator"] },
      { title: "Electronics Stores", image: image(retailImages, 2), icon: MonitorSmartphone, points: ["Product specs", "Warranty notes", "Finance CTA", "Comparison blocks"] },
      { title: "D2C Brands", image: image(retailImages, 3), icon: Sparkles, points: ["Brand story", "Product launches", "Reviews", "Campaign pages"] },
      { title: "Local Retail Chains", image: image(retailImages, 0), icon: MapPin, points: ["Store pages", "Local SEO", "Offers", "WhatsApp inquiry"] },
      { title: "Lifestyle Brands", image: image(retailImages, 1), icon: Star, points: ["Lookbooks", "Collections", "Brand proof", "Influencer sections"] },
      { title: "Beauty Stores", image: image(retailImages, 2), icon: Sparkles, points: ["Product categories", "Skin concern pages", "Bundles", "Reviews"] },
      { title: "Home Decor Stores", image: image(retailImages, 3), icon: Home, points: ["Room collections", "Catalog inquiry", "Gallery", "Consultation CTA"] },
    ],
    trustedProvidersTitle: "Trusted By Retail Brands Across The Country",
    trustedProvidersDescription:
      "Retail brands can be presented with product discovery, campaign visibility, store trust, and customer confidence.",
    trustedProviders: [
      provider("StyleKart", "Fashion retail", retailImages, 0),
      provider("FreshBasket Retail", "Grocery store", retailImages, 1),
      provider("UrbanWear Studio", "Lifestyle brand", retailImages, 2),
      provider("ElectroLane", "Electronics store", retailImages, 3),
      provider("GlowCart Beauty", "Beauty store", retailImages, 0),
      provider("DecorNest Living", "Home decor", retailImages, 1),
      provider("LocalMart Chain", "Retail chain", retailImages, 2),
      provider("DailyStyle D2C", "D2C brand", retailImages, 3),
    ],
    demoGalleryTitle: "Retail Website Experiences - Built For Product-Led Brands",
    demoGalleryDescription:
      "Explore fashion, grocery, electronics, D2C, beauty, home decor, jewellery, and furniture website experiences with catalog and inquiry flows.",
    demoGallery: [
      demo("Fashion Retail Website", "Collections, lookbooks, size inquiry, and campaign pages.", "StyleKart", "Launch Collections That Shoppers Want To Explore", retailImages, 0, ShoppingBag, "violet", ["Drops", "Looks", "Sizes", "Sales"], ["Collection Pages", "Lookbook", "Size Inquiry", "Campaign Pages"]),
      demo("Grocery Store Website", "Daily offers, categories, delivery inquiry, and store locator.", "FreshBasket", "Make Daily Shopping Fast And Local", retailImages, 1, Store, "emerald", ["Fresh", "Daily", "Local", "Fast"], ["Grocery Catalog", "Daily Offers", "Delivery Inquiry", "Store Locator"]),
      demo("Electronics Store Website", "Specs, comparisons, warranty notes, and finance inquiries.", "ElectroMart", "Help Buyers Compare Products Clearly", retailImages, 2, MonitorSmartphone, "blue", ["Specs", "EMI", "Warranty", "Deals"], ["Product Specs", "Comparisons", "Warranty Notes", "Finance CTA"]),
      demo("D2C Brand Website", "Brand story, product launches, social proof, and inquiries.", "D2C Studio", "Build A Direct Brand Experience That Converts", retailImages, 3, Sparkles, "orange", ["Launch", "Brand", "Reviews", "Grow"], ["Brand Story", "Product Launches", "Reviews", "Campaign CTAs"]),
      demo("Beauty Store Website", "Product categories, skin concern pages, bundles, and reviews.", "GlowCart", "Guide Shoppers To The Right Beauty Picks", retailImages, 0, Star, "rose", ["Skin", "Bundles", "Reviews", "Care"], ["Concern Pages", "Bundles", "Reviews", "Product Inquiry"]),
      demo("Home Decor Website", "Room collections, catalogs, gallery, and consultation CTA.", "DecorNest", "Inspire Homes With Better Product Stories", retailImages, 1, Home, "teal", ["Rooms", "Catalog", "Gallery", "Consult"], ["Room Collections", "Catalog Inquiry", "Gallery", "Consultation CTA"]),
      demo("Jewellery Store Website", "Collections, occasion pages, trust proof, appointment inquiries, and product stories.", "JewelLane", "Showcase Jewellery With Premium Trust", retailImages, 2, Sparkles, "violet", ["Gold", "Trust", "Style", "Book"], ["Jewellery Collections", "Occasion Pages", "Trust Proof", "Appointment Inquiry"]),
      demo("Furniture Store Website", "Room sets, product ranges, material details, delivery notes, and consultation CTAs.", "FurniNest", "Help Shoppers Visualize Better Living Spaces", retailImages, 3, Home, "orange", ["Rooms", "Wood", "Ship", "Plan"], ["Room Sets", "Product Ranges", "Material Details", "Consultation CTA"]),
    ],
    demoCtaTitle: "100% Customizable Retail Website Experiences",
    demoCtaDescription:
      "Every website experience can be customized with products, categories, offers, store pages, inquiry flows, campaign landing pages, and brand content.",
    benefitsTitle: "Why Retail Brands Choose Us",
    benefits: [
      { title: "Better Product Discovery", description: "Collections and categories make browsing easier for every customer.", icon: ShoppingBag },
      { title: "Campaign-Ready Pages", description: "Offers and launches get dedicated pages built for conversion.", icon: Tags },
      { title: "Mobile Shopping Experience", description: "Layouts and CTAs stay fast, clear, and usable on phones.", icon: Smartphone },
      { title: "Customer Trust", description: "Reviews, policies, store details, and support reduce purchase hesitation.", icon: ShieldCheck },
    ],
    ctaTitle: "Ready To Turn Retail Browsing Into Sales Conversations?",
    ctaDescription:
      "Build a retail website that showcases products, promotes offers, captures inquiries, and supports customer trust.",
    ctaLabel: "Build My Website",
    pricingDescription: "Flexible plans designed to grow with your retail brand",
    pricingPlans: [
      plan("Retail Starter", "Best for small stores and new retail brands", `${rupee}25,000`, Store, ["Up to 10 Pages", "Product Inquiry Form", "Mobile Responsive", "Basic SEO Setup", "Email Support"]),
      plan("Commerce Growth", "Best for growing catalogs and campaign-led brands", `${rupee}60,000`, BarChart3, ["Up to 25 Pages", "Product Catalog Structure", "Offer Landing Pages", "Analytics Setup", "Priority Support"], true),
      plan("Retail Enterprise", "Best for retail chains and larger product brands", `${rupee}1,20,000+`, ShieldCheck, ["Unlimited Pages", "Advanced Catalogs", "Multi-Location Support", "Custom Integrations", "Dedicated Account Manager"]),
    ],
    testimonialsTitle: "Happy Retail Teams, Better Shopping Experiences",
    testimonials: [
      { quote: "The collection structure made our products easier to browse and promote.", name: "Tara Bansal", role: "Fashion retail" },
      { quote: "Campaign pages and inquiry forms gave our store team cleaner customer intent.", name: "Kunal Arora", role: "Retail chain" },
      { quote: "The mobile preview showed exactly how customers would move from product to inquiry.", name: "Priya Nair", role: "D2C brand" },
    ],
    complianceDescription:
      "We follow secure website practices to protect customer inquiries, order interest, and retail website trust.",
    compliance: trustItems(["Customer Data Privacy", "SSL Secured", "Order Inquiry Protection", "Secure Hosting", "Regular Backups"]),
    aiAutomation: websiteAiAutomation,
    integrationsDeployment: websiteIntegrationsDeployment,
    demoContent: createRetailDemoContent(),
  },

  finance: {
    industrySlug: "finance",
    industryName: "Finance",
    eyebrow: "Finance Website Solutions",
    title: "Finance Websites That Build Trust And Capture Qualified Consultations",
    highlight: "Capture Qualified Consultations",
    description:
      "Trust-first finance websites for advisors, loan consultants, tax experts, accounting firms, NBFCs, and fintech services.",
    primaryRoute: "/industries/finance/website-development",
    aliases: ["website-development", "website"],
    keywords: ["finance website development", "financial advisor website", "loan consultant website", "tax consultant website"],
    serviceType: "Finance Website Development",
    heroImage: financeImages[0],
    heroBrand: "FinGuide",
    heroHeadline: "Advisory Trust, Secure Inquiries And Clear Services",
    heroSubtext:
      "Explain financial services, build credibility, capture consultation requests, and support compliant content structure.",
    heroNav: ["Home", "Services", "Advisors", "Insights", "Contact"],
    heroPrimaryCta: "Book Consultation",
    heroSecondaryCta: "Explore Services",
    heroChips: [
      { label: "Secure Forms", icon: ShieldCheck },
      { label: "Advisor Trust", icon: UserCheck },
      { label: "Service Pages", icon: Landmark },
      { label: "Lead Tracking", icon: BarChart3 },
    ],
    heroStats: [["18", "Services"], ["320", "Consults"], ["4.8", "Rating"], ["Safe", "Forms"]],
    problemsTitle: "Challenges We Solve For Finance Service Providers",
    problems: [
      { title: "Low Client Trust", description: "Finance visitors need credentials, process clarity, disclaimers, and proof before sharing information.", icon: ShieldCheck, tone: "emerald" },
      { title: "Unclear Service Fit", description: "Visitors need to understand loan, tax, accounting, advisory, or investment fit before consultation.", icon: Landmark, tone: "blue" },
      { title: "Weak Inquiry Qualification", description: "Generic forms miss income range, service need, documents, timeline, and risk context.", icon: FileText, tone: "rose" },
      { title: "Compliance-Sensitive Content", description: "Finance content needs a careful structure for trust, disclaimers, and responsible claims.", icon: BadgeCheck, tone: "violet" },
    ],
    featuresTitle: "What Your Finance Website Will Include",
    features: [
      { title: "Service Pages", description: "Clear pages for loans, tax, accounting, advisory, investments, and fintech services.", icon: Landmark },
      { title: "Advisor Profiles", description: "Show team expertise, credentials, process, and trust markers.", icon: UserCheck },
      { title: "Secure Inquiry Forms", description: "Capture service need, contact details, timelines, and document readiness.", icon: ShieldCheck },
      { title: "Resource And Insights Pages", description: "Publish guides, FAQs, calculators, and educational content for client confidence.", icon: FileText },
      { title: "Consultation Booking", description: "Let clients request advisory slots, calls, or document review sessions.", icon: CalendarCheck },
      { title: "Analytics Setup", description: "Track service demand, consultation sources, form quality, and conversion rate.", icon: BarChart3 },
    ],
    modulesTitle: "Built for Every Finance Website Model",
    modulesDescription:
      "Support advisors, loan teams, accounting firms, tax consultants, NBFCs, wealth managers, and fintech services.",
    modules: [
      { title: "Financial Advisors", image: image(financeImages, 0), icon: UserCheck, points: ["Advisor profiles", "Consultation CTA", "Service pages", "Trust content"] },
      { title: "Loan Consultants", image: image(financeImages, 1), icon: CreditCard, points: ["Loan pages", "Eligibility forms", "Document checklist", "Callback routing"] },
      { title: "Accounting Firms", image: image(financeImages, 2), icon: ClipboardList, points: ["Service pages", "Client inquiry", "Compliance notes", "Team profiles"] },
      { title: "Investment Consultants", image: image(financeImages, 3), icon: BarChart3, points: ["Strategy pages", "Risk notes", "Consult forms", "Insights"] },
      { title: "Tax Consultants", image: image(financeImages, 0), icon: FileCheck2, points: ["Tax service pages", "Document flow", "Deadline notices", "Secure forms"] },
      { title: "NBFCs", image: image(financeImages, 1), icon: Landmark, points: ["Product pages", "Eligibility flow", "Branch pages", "Lead routing"] },
      { title: "Wealth Managers", image: image(financeImages, 2), icon: ShieldCheck, points: ["Portfolio services", "Advisor proof", "Private inquiry", "Client education"] },
      { title: "Fintech Services", image: image(financeImages, 3), icon: MonitorSmartphone, points: ["Feature pages", "App flows", "Security trust", "Product walkthrough request"] },
    ],
    trustedProvidersTitle: "Trusted By Finance Service Providers Across The Country",
    trustedProvidersDescription:
      "Finance firms can be presented with credibility, secure inquiries, service clarity, and consultation pathways.",
    trustedProviders: [
      provider("FinTrust Advisors", "Financial advisor", financeImages, 0),
      provider("CapitalPath Consulting", "Finance consultant", financeImages, 1),
      provider("LedgerWise Accounts", "Accounting firm", financeImages, 2),
      provider("TaxBridge Services", "Tax consultant", financeImages, 3),
      provider("LoanLift Desk", "Loan consultant", financeImages, 0),
      provider("WealthAxis Managers", "Wealth manager", financeImages, 1),
      provider("CredNorth NBFC", "NBFC team", financeImages, 2),
      provider("FinEdge Digital", "Fintech service", financeImages, 3),
    ],
    demoGalleryTitle: "Finance Website Experiences - Built For Trust And Qualified Leads",
    demoGalleryDescription:
      "Explore advisor, loan consultant, tax, wealth management, accounting, and fintech service website experiences.",
    demoGallery: [
      demo("Financial Advisor Website", "Advisor trust, services, insights, and consultation booking.", "FinTrust", "Build Client Confidence Before The First Call", financeImages, 0, UserCheck, "blue", ["Trust", "Calls", "Plans", "Safe"], ["Advisor Profiles", "Service Pages", "Insights", "Consultation"]),
      demo("Loan Consultant Website", "Loan types, eligibility forms, document checklists, and callbacks.", "LoanBridge", "Make Loan Inquiries Easier To Qualify", financeImages, 1, CreditCard, "emerald", ["Loans", "Docs", "EMI", "Calls"], ["Loan Pages", "Eligibility Forms", "Document Checklist", "Callback Flow"]),
      demo("Tax Consultant Website", "Tax services, deadlines, document flows, and secure forms.", "TaxWise", "Help Clients Prepare Tax Work With Clarity", financeImages, 2, FileCheck2, "orange", ["ITR", "GST", "Docs", "Safe"], ["Tax Services", "Document Flow", "Deadline Notes", "Secure Forms"]),
      demo("Wealth Management Website", "Portfolio services, private inquiries, education, and trust.", "WealthPath", "Present Wealth Services With Careful Trust", financeImages, 3, ShieldCheck, "violet", ["Private", "Plans", "Risk", "Trust"], ["Portfolio Services", "Private Inquiry", "Risk Notes", "Advisor Proof"]),
      demo("Accounting Firm Website", "Firm services, client inquiry, compliance notes, and team profiles.", "LedgerPro", "Turn Accounting Needs Into Clear Client Requests", financeImages, 0, ClipboardList, "teal", ["Books", "Audit", "GST", "Team"], ["Accounting Services", "Client Forms", "Compliance Notes", "Team Profiles"]),
      demo("Fintech Service Website", "Product pages, app flows, security trust, and product walkthrough requests.", "FinEdge", "Explain Digital Finance Features With Trust", financeImages, 1, MonitorSmartphone, "rose", ["App", "Secure", "Guide", "API"], ["Feature Pages", "App Flows", "Security Trust", "Product Walkthrough Request"]),
      demo("Investment Advisory Website", "Investment services, risk education, advisor trust, and consultation inquiry flows.", "InvestPath", "Build Investor Confidence Before The First Call", financeImages, 2, BarChart3, "blue", ["Risk", "Plan", "Calls", "Trust"], ["Investment Services", "Risk Education", "Advisor Trust", "Consultation Inquiry"]),
      demo("CA / CPA Firm Website", "Audit services, tax compliance, client intake, document checklists, and firm trust.", "AuditBridge", "Turn Compliance Needs Into Organized Client Requests", financeImages, 3, FileCheck2, "emerald", ["Audit", "Tax", "Docs", "Firm"], ["Audit Services", "Client Intake", "Document Checklist", "Firm Trust"]),
    ],
    demoCtaTitle: "100% Customizable Finance Website Experiences",
    demoCtaDescription:
      "Every website experience can be customized with service pages, advisor profiles, disclaimers, secure forms, insights, calculators, and consultation flows.",
    benefitsTitle: "Why Finance Service Providers Choose Us",
    benefits: [
      { title: "Trust-First Positioning", description: "Credentials, process, and proof help visitors feel safer before inquiry.", icon: ShieldCheck },
      { title: "Qualified Consultations", description: "Forms capture service need, timeline, and readiness before calls.", icon: CalendarCheck },
      { title: "Compliance-Friendly Structure", description: "Content areas support disclaimers, education, and responsible service claims.", icon: BadgeCheck },
      { title: "Service Demand Tracking", description: "Analytics reveal which finance services generate qualified interest.", icon: BarChart3 },
    ],
    ctaTitle: "Ready To Turn Finance Visitors Into Qualified Consultations?",
    ctaDescription:
      "Build a finance website that explains services, earns trust, captures secure inquiries, and supports your advisory team.",
    ctaLabel: "Build My Website",
    pricingDescription: "Flexible plans designed to grow with your finance service business",
    pricingPlans: [
      plan("Finance Starter", "Best for advisors and smaller finance teams", `${rupee}35,000`, Landmark, ["Up to 10 Pages", "Secure Inquiry Form", "Mobile Responsive", "Basic SEO Setup", "Email Support"]),
      plan("Advisory Growth", "Best for growing advisory, tax, and loan teams", `${rupee}75,000`, BarChart3, ["Up to 30 Pages", "Advisor And Service Pages", "Consultation Booking", "Analytics Setup", "Priority Support"], true),
      plan("Finance Enterprise", "Best for NBFCs, fintech teams, and larger firms", `${rupee}1,50,000+`, ShieldCheck, ["Unlimited Pages", "Advanced Form Routing", "Compliance-Friendly Structure", "Custom Integrations", "Dedicated Account Manager"]),
    ],
    testimonialsTitle: "Happy Finance Teams, Better Client Experiences",
    testimonials: [
      { quote: "The finance website balanced trust, service clarity, and secure inquiry capture very well.", name: "Naveen Malhotra", role: "Financial advisor" },
      { quote: "Loan inquiries became much easier to qualify with eligibility and document fields.", name: "Sana Qureshi", role: "Loan consultant" },
      { quote: "The service pages helped clients understand tax and accounting needs before contacting us.", name: "Harish Patel", role: "Accounting firm" },
    ],
    complianceDescription:
      "We follow secure website practices to protect client inquiries and support a compliance-friendly finance website structure.",
    compliance: trustItems(["Client Data Privacy", "SSL Secured", "Secure Inquiry Handling", "Compliance-Friendly Structure", "Regular Backups"]),
    aiAutomation: websiteAiAutomation,
    integrationsDeployment: websiteIntegrationsDeployment,
    demoContent: createFinanceDemoContent(),
  },

  insurance: {
    industrySlug: "insurance",
    industryName: "Insurance",
    eyebrow: "Insurance Website Solutions",
    title: "Insurance Websites That Explain Policies And Convert Renewal Inquiries",
    highlight: "Convert Renewal Inquiries",
    description:
      "Insurance websites for agencies, advisors, claim consultants, policy pages, renewal teams, and corporate insurance services.",
    primaryRoute: "/industries/insurance/website-development",
    aliases: ["website-development", "website"],
    keywords: ["insurance website development", "policy advisor website", "claim consultant website", "insurance agency website"],
    serviceType: "Insurance Website Development",
    heroImage: insuranceImages[0],
    heroBrand: "PolicyDesk",
    heroHeadline: "Policies, Claims, Renewals And Advisor Trust",
    heroSubtext:
      "Explain coverage, capture policy inquiries, support claim requests, and guide renewal conversations.",
    heroNav: ["Home", "Policies", "Claims", "Renewals", "Contact"],
    heroPrimaryCta: "Get Policy Quote",
    heroSecondaryCta: "Renew Policy",
    heroChips: [
      { label: "Policy Pages", icon: ShieldCheck },
      { label: "Claim Support", icon: LifeBuoy },
      { label: "Renewal Flow", icon: CalendarCheck },
      { label: "Advisor Trust", icon: UserCheck },
    ],
    heroStats: [["28", "Policies"], ["510", "Quotes"], ["180", "Renewals"], ["Safe", "Claims"]],
    problemsTitle: "Challenges We Solve For Insurance Teams",
    problems: [
      { title: "Confusing Policy Information", description: "Visitors need simple coverage explanations, inclusions, exclusions, and next steps.", icon: ShieldCheck, tone: "blue" },
      { title: "Weak Claim Support Flow", description: "Claim inquiries need policy type, incident details, documents, and callback context.", icon: LifeBuoy, tone: "rose" },
      { title: "Lost Renewal Opportunities", description: "Renewal teams need dedicated flows for reminders, policy checks, and follow-up.", icon: CalendarCheck, tone: "violet" },
      { title: "Low Advisor Trust", description: "Insurance buyers need proof, advisor profiles, reviews, and privacy-safe inquiry paths.", icon: UserCheck, tone: "emerald" },
    ],
    featuresTitle: "What Your Insurance Website Will Include",
    features: [
      { title: "Policy Pages", description: "Explain health, vehicle, life, corporate, and specialty policies in clear sections.", icon: ShieldCheck },
      { title: "Quote Inquiry Forms", description: "Capture coverage need, contact details, age, vehicle, family, or business context.", icon: FileText },
      { title: "Claim Support Flow", description: "Collect policy type, claim reason, document readiness, and support request details.", icon: LifeBuoy },
      { title: "Renewal Reminders", description: "Guide policyholders toward renewal inquiries, plan checks, and advisor calls.", icon: CalendarCheck },
      { title: "Advisor Profiles", description: "Show advisor expertise, service approach, and trust markers.", icon: UserCheck },
      { title: "Analytics Setup", description: "Track policy demand, claim inquiries, renewal requests, and quote conversion.", icon: BarChart3 },
    ],
    modulesTitle: "Built for Every Insurance Website Model",
    modulesDescription:
      "Support agencies, advisors, claim consultants, renewal teams, health, vehicle, life, and corporate insurance services.",
    modules: [
      { title: "Insurance Agencies", image: image(insuranceImages, 0), icon: Store, points: ["Policy pages", "Quote forms", "Advisor profiles", "Lead routing"] },
      { title: "Policy Advisors", image: image(insuranceImages, 1), icon: UserCheck, points: ["Advisor trust", "Coverage guides", "Consult CTA", "Privacy notes"] },
      { title: "Claim Consultants", image: image(insuranceImages, 2), icon: LifeBuoy, points: ["Claim forms", "Document checklist", "Status inquiry", "Support routing"] },
      { title: "Health Insurance Providers", image: image(insuranceImages, 3), icon: ShieldCheck, points: ["Plan pages", "Family forms", "Hospital network", "Quote CTA"] },
      { title: "Vehicle Insurance Providers", image: image(insuranceImages, 0), icon: Car, points: ["Vehicle forms", "Renewal CTA", "Claim support", "Policy comparison"] },
      { title: "Life Insurance Advisors", image: image(insuranceImages, 1), icon: Users, points: ["Life plan pages", "Needs analysis", "Advisor booking", "Trust content"] },
      { title: "Corporate Insurance Teams", image: image(insuranceImages, 2), icon: Building2, points: ["Group plans", "Employee coverage", "RFQ forms", "Broker support"] },
      { title: "Renewal Teams", image: image(insuranceImages, 3), icon: CalendarCheck, points: ["Renewal reminders", "Policy lookup", "Callback flow", "Upsell pages"] },
    ],
    trustedProvidersTitle: "Trusted By Insurance Teams Across The Country",
    trustedProvidersDescription:
      "Insurance teams can be presented with policy trust, claim support, renewal pathways, and advisor credibility.",
    trustedProviders: [
      provider("PolicyFirst Advisors", "Insurance advisor", insuranceImages, 0),
      provider("SecureLife Insurance Desk", "Life insurance desk", insuranceImages, 1),
      provider("ClaimCare Consultants", "Claim consultant", insuranceImages, 2),
      provider("HealthCover Point", "Health policy team", insuranceImages, 3),
      provider("AutoShield Desk", "Vehicle insurance", insuranceImages, 0),
      provider("RenewRight Team", "Renewal team", insuranceImages, 1),
      provider("CorpCover Partners", "Corporate insurance", insuranceImages, 2),
      provider("PolicyBridge Agency", "Insurance agency", insuranceImages, 3),
    ],
    demoGalleryTitle: "Insurance Website Experiences - Built For Policy And Claim Journeys",
    demoGalleryDescription:
      "Explore agency, health policy, vehicle insurance, claim support, renewal, and corporate insurance website experiences.",
    demoGallery: [
      demo("Insurance Agency Website", "Policy pages, advisor profiles, quote forms, and lead routing.", "PolicyFirst", "Make Policy Choices Easier To Understand", insuranceImages, 0, Store, "blue", ["Plans", "Quotes", "Trust", "Calls"], ["Policy Pages", "Advisor Profiles", "Quote Forms", "Lead Routing"]),
      demo("Health Policy Website", "Health plans, family quote forms, hospital network, and support.", "HealthCover", "Guide Families Toward The Right Health Cover", insuranceImages, 1, ShieldCheck, "emerald", ["Health", "Family", "Network", "Quote"], ["Health Plans", "Family Forms", "Hospital Network", "Quote CTA"]),
      demo("Vehicle Insurance Website", "Vehicle quote, renewal, claims, and policy comparison pages.", "AutoShield", "Convert Vehicle Owners Into Policy Inquiries", insuranceImages, 2, Car, "orange", ["Auto", "Renew", "Claim", "Fast"], ["Vehicle Forms", "Renewal CTA", "Claim Support", "Comparisons"]),
      demo("Claim Support Website", "Claim forms, document checklists, status inquiry, and support routing.", "ClaimCare", "Help Policyholders Start Claims Clearly", insuranceImages, 3, LifeBuoy, "rose", ["Claim", "Docs", "Status", "Help"], ["Claim Forms", "Document Checklist", "Status Inquiry", "Support Routing"]),
      demo("Renewal Website", "Renewal reminders, policy lookup, callbacks, and plan upgrades.", "RenewDesk", "Turn Renewal Dates Into Conversations", insuranceImages, 0, CalendarCheck, "teal", ["Renew", "Lookup", "Calls", "Plans"], ["Renewal Reminders", "Policy Lookup", "Callback Flow", "Upgrade Pages"]),
      demo("Corporate Insurance Website", "Group policy pages, employee coverage, RFQ forms, and broker support.", "SecureCorp", "Present Corporate Coverage With Confidence", insuranceImages, 1, Building2, "violet", ["Group", "RFQ", "Broker", "Teams"], ["Group Plans", "Employee Coverage", "RFQ Forms", "Broker Support"]),
      demo("Life Insurance Website", "Life cover pages, needs calculator sections, advisor guidance, and callback flows.", "LifeGuard", "Help Families Understand Long-Term Protection", insuranceImages, 2, Users, "blue", ["Life", "Family", "Plan", "Call"], ["Life Cover Pages", "Needs Guidance", "Advisor CTA", "Callback Flow"]),
      demo("Travel Insurance Website", "Trip cover pages, claim support, document guidance, and quick quote inquiries.", "TravelCover", "Make Trip Protection Simple To Compare", insuranceImages, 3, Plane, "emerald", ["Trip", "Docs", "Claim", "Fast"], ["Travel Cover", "Document Guidance", "Claim Support", "Quick Quote"]),
    ],
    demoCtaTitle: "100% Customizable Insurance Website Experiences",
    demoCtaDescription:
      "Every website experience can be customized with policy types, advisor profiles, quote forms, claim flows, renewal journeys, and support content.",
    benefitsTitle: "Why Insurance Teams Choose Us",
    benefits: [
      { title: "Clear Policy Education", description: "Visitors understand coverage options before requesting a quote.", icon: ShieldCheck },
      { title: "Better Quote Quality", description: "Forms capture the right policy context from the first inquiry.", icon: FileText },
      { title: "Renewal Support", description: "Dedicated flows help teams capture renewal and upgrade opportunities.", icon: CalendarCheck },
      { title: "Claim-Friendly Experience", description: "Support pages make document and claim requests easier to route.", icon: LifeBuoy },
    ],
    ctaTitle: "Ready To Turn Policy Interest Into Qualified Inquiries?",
    ctaDescription:
      "Build an insurance website that explains policies, captures quotes, supports claims, and improves renewal follow-up.",
    ctaLabel: "Build My Website",
    pricingDescription: "Flexible plans designed to grow with your insurance team",
    pricingPlans: [
      plan("Insurance Starter", "Best for advisors and smaller insurance agencies", `${rupee}30,000`, ShieldCheck, ["Up to 10 Pages", "Quote Inquiry Form", "Mobile Responsive", "Basic SEO Setup", "Email Support"]),
      plan("Policy Growth", "Best for growing agencies and renewal teams", `${rupee}65,000`, BarChart3, ["Up to 25 Pages", "Policy And Claim Pages", "Renewal Inquiry Flow", "Analytics Setup", "Priority Support"], true),
      plan("Insurance Enterprise", "Best for multi-policy agencies and corporate insurance teams", `${rupee}1,30,000+`, LifeBuoy, ["Unlimited Pages", "Advanced Quote Routing", "Claim Support Flow", "Custom Integrations", "Dedicated Account Manager"]),
    ],
    testimonialsTitle: "Happy Insurance Teams, Better Policy Experiences",
    testimonials: [
      { quote: "The policy pages made coverage choices easier for visitors to understand.", name: "Amit Desai", role: "Insurance agency" },
      { quote: "Claim support and renewal flows gave our team much better context.", name: "Leena Verma", role: "Claim consultant" },
      { quote: "Advisor profiles and privacy notes helped the website feel trustworthy.", name: "Farhan Ali", role: "Policy advisor" },
    ],
    complianceDescription:
      "We follow secure website practices to protect policy inquiries, claim details, and customer trust.",
    compliance: trustItems(["Policy Inquiry Privacy", "SSL Secured", "Claim Data Protection", "Secure Hosting", "Regular Backups"]),
    aiAutomation: websiteAiAutomation,
    integrationsDeployment: websiteIntegrationsDeployment,
    demoContent: createInsuranceDemoContent(),
  },

  travel: {
    industrySlug: "travel",
    industryName: "Travel",
    eyebrow: "Travel Website Solutions",
    title: "Travel Websites That Sell Packages And Capture Booking Inquiries",
    highlight: "Capture Booking Inquiries",
    description:
      "Travel websites for agencies, tour operators, hotels, visa consultants, destination campaigns, and package inquiries.",
    primaryRoute: "/industries/travel/website-development",
    aliases: ["website-development", "website"],
    keywords: ["travel website development", "tour package website", "hotel website", "visa consultant website"],
    serviceType: "Travel Website Development",
    heroImage: travelImages[0],
    heroBrand: "TripBridge",
    heroHeadline: "Destinations, Packages, Itineraries And Booking Leads",
    heroSubtext:
      "Showcase destinations, explain packages, capture trip preferences, and route inquiries to travel consultants.",
    heroNav: ["Home", "Packages", "Destinations", "Offers", "Contact"],
    heroPrimaryCta: "Plan My Trip",
    heroSecondaryCta: "View Packages",
    heroChips: [
      { label: "Package Pages", icon: PackageCheck },
      { label: "Booking Inquiry", icon: CalendarCheck },
      { label: "Destination SEO", icon: MapPin },
      { label: "Itinerary Blocks", icon: Route },
    ],
    heroStats: [["64", "Packages"], ["740", "Inquiries"], ["22", "Destinations"], ["9.6%", "Lead Rate"]],
    problemsTitle: "Challenges We Solve For Travel Businesses",
    problems: [
      { title: "Unclear Package Details", description: "Travelers need pricing context, itinerary, stays, inclusions, exclusions, and FAQs before inquiry.", icon: PackageCheck, tone: "blue" },
      { title: "Weak Booking Forms", description: "A booking form must capture destination, dates, guests, budget, and travel preferences.", icon: CalendarCheck, tone: "rose" },
      { title: "Poor Seasonal Visibility", description: "Offers and destination campaigns need dedicated pages with strong CTAs.", icon: Tags, tone: "violet" },
      { title: "Low Travel Trust", description: "Galleries, reviews, itinerary clarity, and support access matter before booking.", icon: ShieldCheck, tone: "emerald" },
    ],
    featuresTitle: "What Your Travel Website Will Include",
    features: [
      { title: "Destination Pages", description: "SEO-ready pages with highlights, activities, weather notes, and package CTAs.", icon: Plane },
      { title: "Package Pages", description: "Package pages with pricing context, inclusions, exclusions, stays, transfers, and FAQs.", icon: PackageCheck },
      { title: "Itinerary Sections", description: "Day-wise itinerary blocks that make trips easier to understand and compare.", icon: Route },
      { title: "Booking Inquiry Form", description: "Capture destination, dates, guests, budget, preferences, and contact details.", icon: CalendarCheck },
      { title: "Seasonal Offers", description: "Campaign sections for holidays, honeymoon trips, group tours, and festival travel.", icon: Tags },
      { title: "Travel SEO Structure", description: "Destination URLs, package pages, internal links, and campaign content planning.", icon: Search },
    ],
    modulesTitle: "Built for Every Travel Website Model",
    modulesDescription:
      "Support agencies, tour operators, hotels, destination planners, visa teams, and package-led travel brands.",
    modules: [
      { title: "Travel Agencies", image: image(travelImages, 0), icon: Plane, points: ["Package pages", "Inquiry forms", "WhatsApp CTA", "Reviews"] },
      { title: "Tour Operators", image: image(travelImages, 1), icon: Route, points: ["Itinerary pages", "Group tours", "Seat inquiries", "Trip proof"] },
      { title: "Hotels & Resorts", image: image(travelImages, 2), icon: Home, points: ["Room pages", "Gallery", "Booking inquiry", "Offer pages"] },
      { title: "Destination Planners", image: image(travelImages, 3), icon: MapPin, points: ["Destination guides", "Custom plans", "Activity pages", "Lead forms"] },
      { title: "Visa Consultants", image: image(travelImages, 0), icon: FileCheck2, points: ["Visa pages", "Document checklist", "Appointment CTA", "Status inquiry"] },
      { title: "Adventure Travel", image: image(travelImages, 1), icon: Sparkles, points: ["Adventure packages", "Safety notes", "Gear checklist", "Booking forms"] },
      { title: "Corporate Travel", image: image(travelImages, 2), icon: Building2, points: ["Business trips", "Team travel", "RFQ forms", "Support routing"] },
      { title: "Honeymoon Packages", image: image(travelImages, 3), icon: Star, points: ["Romantic packages", "Private itinerary", "Photo gallery", "Consultation CTA"] },
    ],
    trustedProvidersTitle: "Trusted By Travel Businesses Across The Country",
    trustedProvidersDescription:
      "Travel businesses can be presented with package clarity, booking trust, destination proof, and consultant support.",
    trustedProviders: [
      provider("TripNest Holidays", "Travel agency", travelImages, 0),
      provider("GlobeWay Tours", "Tour operator", travelImages, 1),
      provider("ResortRoute Stays", "Hotel and resort", travelImages, 2),
      provider("VisaPath Consultants", "Visa consultant", travelImages, 3),
      provider("AdventureMiles", "Adventure travel", travelImages, 0),
      provider("Honeymoon Harbor", "Honeymoon packages", travelImages, 1),
      provider("CorporateTrip Desk", "Corporate travel", travelImages, 2),
      provider("DestinationCraft", "Destination planner", travelImages, 3),
    ],
    demoGalleryTitle: "Travel Website Experiences - Built For Packages And Bookings",
    demoGalleryDescription:
      "Explore travel agency, tour package, hotel, adventure, visa, and honeymoon package website experiences.",
    demoGallery: [
      demo("Travel Agency Website", "Packages, inquiry forms, destination pages, and reviews.", "TripNest", "Turn Travel Dreams Into Planned Trips", travelImages, 0, Plane, "blue", ["Trips", "Leads", "Deals", "Maps"], ["Package Pages", "Inquiry Forms", "Reviews", "Destination SEO"]),
      demo("Tour Package Website", "Itineraries, inclusions, group tour seats, and booking requests.", "TourCraft", "Make Packages Easy To Compare And Book", travelImages, 1, Route, "emerald", ["Tours", "Seats", "Plans", "Book"], ["Itineraries", "Inclusions", "Group Tours", "Booking Requests"]),
      demo("Hotel/Resort Website", "Room pages, galleries, offers, and reservation inquiry flows.", "ResortWay", "Show Stay Experiences With Booking Clarity", travelImages, 2, Home, "orange", ["Rooms", "Views", "Stay", "Offer"], ["Room Pages", "Gallery", "Reservation Inquiry", "Offer Pages"]),
      demo("Adventure Travel Website", "Adventure packages, safety details, activity pages, and forms.", "AdventureRoute", "Sell Experiences With Safety And Excitement", travelImages, 3, Sparkles, "teal", ["Trek", "Gear", "Safe", "Go"], ["Adventure Packages", "Safety Notes", "Activity Pages", "Booking Forms"]),
      demo("Visa Consultant Website", "Visa pages, document checklists, appointments, and status inquiries.", "VisaDesk", "Make Visa Guidance Clear From The Start", travelImages, 0, FileCheck2, "violet", ["Visa", "Docs", "Slots", "Help"], ["Visa Pages", "Document Checklist", "Appointment CTA", "Status Inquiry"]),
      demo("Honeymoon Package Website", "Romantic packages, custom plans, galleries, and consultation CTA.", "HoneymoonMiles", "Create Memorable Trips With Clear Packages", travelImages, 1, Star, "rose", ["Couple", "Plans", "Gallery", "Care"], ["Romantic Packages", "Custom Plans", "Gallery", "Consultation CTA"]),
      demo("Destination Guide Website", "City guides, attraction pages, itinerary ideas, local tips, and inquiry paths.", "DestinationPro", "Help Travelers Choose The Right Destination", travelImages, 2, MapPin, "blue", ["Guides", "Maps", "Tips", "Plan"], ["City Guides", "Attraction Pages", "Itinerary Ideas", "Inquiry Paths"]),
      demo("Corporate Travel Website", "Business travel plans, group bookings, policy pages, and account inquiry flows.", "CorpTrip", "Manage Business Travel Interest With Clarity", travelImages, 3, Building2, "emerald", ["Teams", "Plans", "Stay", "Book"], ["Business Trips", "Group Bookings", "Policy Pages", "Account Inquiry"]),
    ],
    demoCtaTitle: "100% Customizable Travel Website Experiences",
    demoCtaDescription:
      "Every website experience can be customized with destinations, package pages, hotel details, itineraries, offers, booking forms, and consultant flows.",
    benefitsTitle: "Why Travel Businesses Choose Us",
    benefits: [
      { title: "Better Package Clarity", description: "Travelers understand inclusions, itinerary, pricing context, and support.", icon: Route },
      { title: "More Booking Inquiries", description: "Forms capture dates, guests, destination, preferences, and budget.", icon: CalendarCheck },
      { title: "Seasonal Campaign Lift", description: "Dedicated campaign pages make offers easier to promote.", icon: Tags },
      { title: "Destination SEO", description: "Search-ready pages create long-term travel demand.", icon: Search },
    ],
    ctaTitle: "Ready To Turn Destination Interest Into Booking Inquiries?",
    ctaDescription:
      "Build a travel website that showcases destinations, explains packages, captures inquiries, and supports consultant follow-up.",
    ctaLabel: "Build My Website",
    pricingDescription: "Flexible plans designed to grow with your travel business",
    pricingPlans: [
      plan("Travel Starter", "Best for agencies and small tour teams", `${rupee}25,000`, Plane, ["Up to 10 Pages", "Booking Inquiry Form", "Mobile Responsive", "Basic SEO Setup", "Email Support"]),
      plan("Booking Growth", "Best for package-led and destination-led travel teams", `${rupee}60,000`, BarChart3, ["Up to 25 Pages", "Package And Destination Pages", "Itinerary Sections", "Analytics Setup", "Priority Support"], true),
      plan("Travel Enterprise", "Best for large agencies, hotels, and multi-destination brands", `${rupee}1,20,000+`, ShieldCheck, ["Unlimited Pages", "Advanced Package Catalog", "Multi-Destination Structure", "Custom Integrations", "Dedicated Account Manager"]),
    ],
    testimonialsTitle: "Happy Travel Teams, Better Booking Experiences",
    testimonials: [
      { quote: "The package pages made our itineraries easier to understand and sell.", name: "Ishita Roy", role: "Travel agency" },
      { quote: "Booking forms finally captured dates, guests, budget, and trip preferences clearly.", name: "Rahul Bedi", role: "Tour operator" },
      { quote: "The destination sections gave our seasonal campaigns a much stronger landing page.", name: "Neha Thomas", role: "Destination planner" },
    ],
    complianceDescription:
      "We follow secure website practices to protect booking inquiries, customer travel details, and website trust.",
    compliance: trustItems(["Booking Inquiry Privacy", "SSL Secured", "Customer Data Protection", "Secure Hosting", "Regular Backups"]),
    aiAutomation: websiteAiAutomation,
    integrationsDeployment: websiteIntegrationsDeployment,
    demoContent: createTravelDemoContent(),
  },

  automobile: {
    industrySlug: "automobile",
    industryName: "Automobile",
    eyebrow: "Automobile Website Solutions",
    title: "Automobile Websites That Drive Inventory Views And Test Drive Bookings",
    highlight: "Test Drive Bookings",
    description:
      "Dealer and service websites for vehicle inventory, model pages, test drive booking, service booking, offers, and location SEO.",
    primaryRoute: "/industries/automobile/website-development",
    aliases: ["website-development", "website"],
    keywords: ["automobile website development", "car dealer website", "test drive booking website", "service booking website"],
    serviceType: "Automobile Website Development",
    heroImage: automobileImages[0],
    heroBrand: "AutoDrive",
    heroHeadline: "Vehicle Inventory, Offers, Test Drives And Service",
    heroSubtext:
      "Help buyers compare models, see offers, book test drives, request finance, and schedule service.",
    heroNav: ["Home", "Inventory", "Models", "Service", "Contact"],
    heroPrimaryCta: "Book Test Drive",
    heroSecondaryCta: "Book Service",
    heroChips: [
      { label: "Vehicle Inventory", icon: Car },
      { label: "Test Drive", icon: CalendarCheck },
      { label: "Service Booking", icon: Wrench },
      { label: "Dealer SEO", icon: MapPin },
    ],
    heroStats: [["9,820", "Views"], ["342", "Test Drives"], ["280", "Services"], ["SUV", "Top Model"]],
    problemsTitle: "Challenges We Solve For Automobile Teams",
    problems: [
      { title: "Weak Inventory Visibility", description: "Buyers need model, variant, price context, offers, images, and availability before inquiry.", icon: Car, tone: "blue" },
      { title: "Poor Test Drive Flow", description: "Test drive CTAs should capture model, preferred slot, location, and contact details.", icon: CalendarCheck, tone: "rose" },
      { title: "Unclear Service Booking", description: "Service visitors need booking forms, service types, reminders, and location details.", icon: Wrench, tone: "violet" },
      { title: "Low Dealer Trust", description: "Reviews, showroom proof, finance options, offers, and location SEO support buyer confidence.", icon: ShieldCheck, tone: "emerald" },
    ],
    featuresTitle: "What Your Automobile Website Will Include",
    features: [
      { title: "Vehicle Inventory", description: "Inventory pages for models, variants, stock highlights, offers, and inquiry CTAs.", icon: Car },
      { title: "Model Detail Pages", description: "Dedicated pages for specs, images, variants, price context, finance, and FAQs.", icon: FileText },
      { title: "Test Drive Booking", description: "Capture model interest, preferred date, location, contact, and executive routing.", icon: CalendarCheck },
      { title: "Service Booking", description: "Service forms for vehicle type, issue, preferred slot, location, and contact.", icon: Wrench },
      { title: "Offers Section", description: "Promote finance schemes, exchange offers, seasonal deals, and dealership campaigns.", icon: Tags },
      { title: "Dealer Location SEO", description: "Location pages for showroom, service center, city, area, and maps.", icon: MapPin },
    ],
    modulesTitle: "Built for Every Automobile Website Model",
    modulesDescription:
      "Support car dealers, bike dealers, service centers, spare parts stores, EV dealers, and fleet businesses.",
    modules: [
      { title: "Car Dealerships", image: image(automobileImages, 0), icon: Car, points: ["Inventory pages", "Test drive form", "Finance CTA", "Offer blocks"] },
      { title: "Bike Dealerships", image: image(automobileImages, 1), icon: Route, points: ["Model pages", "Variant inquiry", "Walk-in CTA", "Local SEO"] },
      { title: "Service Centers", image: image(automobileImages, 2), icon: Wrench, points: ["Service booking", "Issue forms", "Location pages", "Reviews"] },
      { title: "Auto Parts Stores", image: image(automobileImages, 3), icon: PackageSearch, points: ["Parts catalog", "Fitment inquiry", "Bulk requests", "Delivery notes"] },
      { title: "Used Car Sellers", image: image(automobileImages, 0), icon: Tags, points: ["Used inventory", "Inspection proof", "Finance forms", "Visit booking"] },
      { title: "EV Dealers", image: image(automobileImages, 1), icon: Sparkles, points: ["EV model pages", "Range details", "Charging FAQs", "Test ride"] },
      { title: "Detailing Studios", image: image(automobileImages, 2), icon: Star, points: ["Service packages", "Before after", "Booking forms", "Gallery"] },
      { title: "Fleet Businesses", image: image(automobileImages, 3), icon: Truck, points: ["Fleet pages", "B2B inquiries", "Maintenance plans", "Quote forms"] },
    ],
    trustedProvidersTitle: "Trusted By Automobile Businesses Across The Country",
    trustedProvidersDescription:
      "Automobile businesses can be presented with vehicle discovery, test drive intent, service booking, and local showroom trust.",
    trustedProviders: [
      provider("DriveMax Motors", "Car dealership", automobileImages, 0),
      provider("AutoPrime Service", "Service center", automobileImages, 1),
      provider("BikeLane Motors", "Bike dealership", automobileImages, 2),
      provider("PartsLane Auto", "Auto parts store", automobileImages, 3),
      provider("EVDrive Hub", "EV dealer", automobileImages, 0),
      provider("PreOwned Wheels", "Used car seller", automobileImages, 1),
      provider("DetailPro Studio", "Detailing studio", automobileImages, 2),
      provider("FleetAxis Auto", "Fleet business", automobileImages, 3),
    ],
    demoGalleryTitle: "Automobile Website Experiences - Built For Dealers And Service Teams",
    demoGalleryDescription:
      "Explore dealership, bike dealer, service center, used car, EV dealer, and auto parts website experiences.",
    demoGallery: [
      demo("Car Dealership Website", "Inventory, model pages, finance inquiry, and test drives.", "DriveMax", "Turn Model Interest Into Test Drives", automobileImages, 0, Car, "blue", ["Cars", "Drives", "EMI", "Deals"], ["Vehicle Inventory", "Model Pages", "Finance Inquiry", "Test Drive"]),
      demo("Bike Dealership Website", "Model variants, walk-in CTA, offers, and local SEO pages.", "BikePrime", "Help Riders Choose The Right Model", automobileImages, 1, Route, "emerald", ["Bikes", "Ride", "Offer", "Local"], ["Variant Pages", "Walk-in CTA", "Offers", "Local SEO"]),
      demo("Service Center Website", "Service booking, issue forms, packages, and reviews.", "AutoPrime", "Make Service Booking Fast And Clear", automobileImages, 2, Wrench, "orange", ["Service", "Slots", "Care", "Trust"], ["Service Booking", "Issue Forms", "Packages", "Reviews"]),
      demo("Used Car Website", "Used inventory, inspection proof, finance forms, and visits.", "PreOwnedHub", "Sell Verified Used Cars With More Trust", automobileImages, 3, Tags, "teal", ["Used", "Proof", "Visit", "EMI"], ["Used Inventory", "Inspection Proof", "Finance Forms", "Visit Booking"]),
      demo("EV Dealer Website", "EV models, range details, charging FAQs, and test ride booking.", "EVDrive", "Explain EV Choices With Confidence", automobileImages, 0, Sparkles, "violet", ["EV", "Range", "Charge", "Test"], ["EV Models", "Range Details", "Charging FAQs", "Test Ride"]),
      demo("Auto Parts Website", "Parts catalog, fitment inquiry, bulk requests, and delivery notes.", "PartsLane", "Make Auto Parts Easier To Find And Request", automobileImages, 1, PackageSearch, "rose", ["Parts", "Fit", "Bulk", "Ship"], ["Parts Catalog", "Fitment Inquiry", "Bulk Requests", "Delivery Notes"]),
      demo("Car Rental Website", "Fleet pages, booking requests, location details, pricing notes, and customer forms.", "RentDrive", "Turn Rental Searches Into Booking Requests", automobileImages, 2, CalendarCheck, "blue", ["Fleet", "Book", "Local", "Fast"], ["Fleet Pages", "Booking Requests", "Location Details", "Pricing Notes"]),
      demo("Automobile Accessories Website", "Accessory catalog, fitment support, installation requests, and store inquiry flows.", "AutoStyle", "Show Accessories With Better Product Clarity", automobileImages, 3, PackageCheck, "emerald", ["Style", "Fit", "Store", "Install"], ["Accessory Catalog", "Fitment Support", "Installation Requests", "Store Inquiry"]),
    ],
    demoCtaTitle: "100% Customizable Automobile Website Experiences",
    demoCtaDescription:
      "Every website experience can be customized with inventory, model pages, service forms, test drive flows, finance CTAs, offers, and location pages.",
    benefitsTitle: "Why Automobile Businesses Choose Us",
    benefits: [
      { title: "Better Inventory Discovery", description: "Buyers can compare models, variants, and offers quickly.", icon: Search },
      { title: "More Test Drives", description: "Booking forms turn model interest into scheduled visits.", icon: CalendarCheck },
      { title: "Service Revenue Support", description: "Service booking paths help retain vehicle owners.", icon: Wrench },
      { title: "Dealer Trust", description: "Reviews, location proof, offers, and finance information reduce hesitation.", icon: ShieldCheck },
    ],
    ctaTitle: "Ready To Turn Vehicle Interest Into Test Drives?",
    ctaDescription:
      "Build an automobile website that showcases inventory, captures bookings, promotes offers, and supports sales and service teams.",
    ctaLabel: "Build My Website",
    pricingDescription: "Flexible plans designed to grow with your automobile business",
    pricingPlans: [
      plan("Auto Starter", "Best for small dealers and service teams", `${rupee}30,000`, Car, ["Up to 10 Pages", "Booking Inquiry Form", "Mobile Responsive", "Basic SEO Setup", "Email Support"]),
      plan("Dealer Growth", "Best for dealerships with inventory and service flows", `${rupee}70,000`, BarChart3, ["Up to 30 Pages", "Inventory And Model Pages", "Test Drive Booking", "Analytics Setup", "Priority Support"], true),
      plan("Automobile Enterprise", "Best for multi-location dealers and larger auto groups", `${rupee}1,40,000+`, ShieldCheck, ["Unlimited Pages", "Advanced Inventory Structure", "Service Booking Flow", "Custom Integrations", "Dedicated Account Manager"]),
    ],
    testimonialsTitle: "Happy Automobile Teams, Better Buyer Experiences",
    testimonials: [
      { quote: "Inventory and test drive forms became much easier for customers to use.", name: "Vikram Sethi", role: "Car dealership" },
      { quote: "The service center flow captured vehicle issues and preferred slots clearly.", name: "Pooja Menon", role: "Service center" },
      { quote: "Model pages, offers, and finance CTAs worked together in a simple buyer journey.", name: "Karan Bhatt", role: "Dealer team" },
    ],
    complianceDescription:
      "We follow secure website practices to protect customer inquiries, booking details, and dealership trust.",
    compliance: trustItems(["Customer Inquiry Privacy", "SSL Secured", "Booking Data Protection", "Secure Hosting", "Regular Backups"]),
    aiAutomation: websiteAiAutomation,
    integrationsDeployment: websiteIntegrationsDeployment,
    demoContent: createAutomobileDemoContent(),
  },

  "service-business": {
    industrySlug: "service-business",
    industryName: "Service Business",
    eyebrow: "Service Business Website Solutions",
    title: "Service Business Websites That Convert Local Visitors Into Quote Requests",
    highlight: "Quote Requests",
    description:
      "Service websites for clear service pages, quote requests, appointment booking, reviews, proof, and service area SEO.",
    primaryRoute: "/industries/service-business/website-development",
    aliases: ["website-development", "website"],
    keywords: ["service business website development", "local service website", "quote request website", "appointment booking website"],
    serviceType: "Service Business Website Development",
    heroImage: serviceImages[0],
    heroBrand: "ServicePro",
    heroHeadline: "Services, Proof, Quotes And Appointment Booking",
    heroSubtext:
      "Help local customers understand your services, trust your work, and request a quote or booking.",
    heroNav: ["Home", "Services", "Projects", "Reviews", "Contact"],
    heroPrimaryCta: "Request Quote",
    heroSecondaryCta: "Book Appointment",
    heroChips: [
      { label: "Service Pages", icon: ClipboardList },
      { label: "Quote Forms", icon: FileText },
      { label: "Reviews", icon: Star },
      { label: "Area Pages", icon: MapPin },
    ],
    heroStats: [["430", "Quotes"], ["7,840", "Views"], ["210", "Bookings"], ["Central", "Top Area"]],
    problemsTitle: "Challenges We Solve For Service Businesses",
    problems: [
      { title: "Unclear Services", description: "Customers need scope, process, pricing context, timelines, and fit before contacting.", icon: ClipboardList, tone: "blue" },
      { title: "Weak Quote Flow", description: "Quote forms must collect service type, location, urgency, photos, and contact details.", icon: FileText, tone: "rose" },
      { title: "Poor Local Trust", description: "Reviews, project proof, process, service areas, and guarantees need to be visible.", icon: Star, tone: "emerald" },
      { title: "Low Local Visibility", description: "Without service area pages, local searches are hard to win.", icon: MapPin, tone: "violet" },
    ],
    featuresTitle: "What Your Service Business Website Will Include",
    features: [
      { title: "Service Pages", description: "Dedicated pages for each service, process, scope, timeline, and next steps.", icon: ClipboardList },
      { title: "Quote Request Forms", description: "Capture service type, issue, location, urgency, contact, and supporting details.", icon: FileText },
      { title: "Appointment Booking", description: "Let customers request a preferred date, time, visit type, or consultation.", icon: CalendarCheck },
      { title: "Process Sections", description: "Explain how your service works from request to completion.", icon: ClipboardCheck },
      { title: "Reviews And Testimonials", description: "Show proof from clients, ratings, before-after context, and trust markers.", icon: Star },
      { title: "Service Area Pages", description: "Location-specific SEO pages for city, neighborhood, or branch coverage.", icon: MapPin },
    ],
    modulesTitle: "Built for Every Service Website Model",
    modulesDescription:
      "Support consultants, agencies, local services, repair services, legal teams, home services, and field teams.",
    modules: [
      { title: "Consultants", image: image(serviceImages, 0), icon: UserCheck, points: ["Consultation CTA", "Service packages", "Case studies", "Lead forms"] },
      { title: "Agencies", image: image(serviceImages, 1), icon: Building2, points: ["Service pages", "Portfolio proof", "Inquiry routing", "Analytics"] },
      { title: "Local Services", image: image(serviceImages, 2), icon: MapPin, points: ["Area SEO", "Quote form", "Reviews", "Location pages"] },
      { title: "Repair Services", image: image(serviceImages, 3), icon: Wrench, points: ["Issue forms", "Urgency fields", "Booking slots", "Service proof"] },
      { title: "Legal Services", image: image(serviceImages, 0), icon: FileCheck2, points: ["Practice pages", "Consult forms", "Trust content", "Document intake"] },
      { title: "Home Services", image: image(serviceImages, 1), icon: Home, points: ["Service pages", "Area pages", "Photo proof", "Quote CTA"] },
      { title: "Professional Firms", image: image(serviceImages, 2), icon: Landmark, points: ["Expert profiles", "Service details", "Consult booking", "Resource pages"] },
      { title: "Field Service Teams", image: image(serviceImages, 3), icon: Truck, points: ["Dispatch forms", "Urgent requests", "Job tracking", "Local SEO"] },
    ],
    trustedProvidersTitle: "Trusted By Service Businesses Across The Country",
    trustedProvidersDescription:
      "Service businesses can be presented with quote requests, appointments, local trust, and service-area visibility.",
    trustedProviders: [
      provider("ProServe Experts", "Professional services", serviceImages, 0),
      provider("TaskBridge Services", "Local service team", serviceImages, 1),
      provider("FixRight Repairs", "Repair service", serviceImages, 2),
      provider("LegalPath Advisors", "Legal service", serviceImages, 3),
      provider("HomeTasker Pros", "Home service", serviceImages, 0),
      provider("ConsultEdge Partners", "Consultant", serviceImages, 1),
      provider("AgencyWorks Studio", "Agency", serviceImages, 2),
      provider("FieldFlow Teams", "Field service", serviceImages, 3),
    ],
    demoGalleryTitle: "Service Business Website Experiences - Built For Quote And Booking Flows",
    demoGalleryDescription:
      "Explore consulting, agency, local service, repair, legal, and home service website experiences with quote request flows.",
    demoGallery: [
      demo("Consulting Website", "Service packages, expert profiles, case studies, and consultation CTA.", "ConsultPro", "Turn Expertise Into Qualified Consultations", serviceImages, 0, UserCheck, "blue", ["Calls", "Cases", "Trust", "Leads"], ["Service Packages", "Expert Profiles", "Case Studies", "Consultation CTA"]),
      demo("Agency Website", "Services, portfolio proof, inquiry routing, and analytics-ready pages.", "AgencyWorks", "Show Services And Proof With Clarity", serviceImages, 1, Building2, "violet", ["Work", "Proof", "Forms", "Growth"], ["Service Pages", "Portfolio Proof", "Inquiry Routing", "Analytics"]),
      demo("Local Service Website", "Area pages, reviews, quote forms, and local service proof.", "LocalFix", "Convert Local Searches Into Quote Requests", serviceImages, 2, MapPin, "emerald", ["Local", "Reviews", "Area", "Quote"], ["Area SEO", "Quote Forms", "Reviews", "Location Pages"]),
      demo("Repair Service Website", "Issue forms, urgent requests, service packages, and booking slots.", "RepairDesk", "Make Repair Requests Faster To Route", serviceImages, 3, Wrench, "orange", ["Fix", "Urgent", "Slots", "Care"], ["Issue Forms", "Urgency Fields", "Booking Slots", "Service Proof"]),
      demo("Legal Service Website", "Practice pages, consultation forms, trust content, and document intake.", "LegalPath", "Help Clients Request Legal Help With Confidence", serviceImages, 0, FileCheck2, "teal", ["Law", "Docs", "Calls", "Trust"], ["Practice Pages", "Consult Forms", "Trust Content", "Document Intake"]),
      demo("Home Service Website", "Home service pages, quote CTA, local areas, and project proof.", "HomeTasker", "Turn Home Service Needs Into Booked Jobs", serviceImages, 1, Home, "rose", ["Home", "Quote", "Areas", "Proof"], ["Service Pages", "Area Pages", "Photo Proof", "Quote CTA"]),
      demo("Cleaning Service Website", "Residential and commercial cleaning pages, package cards, booking forms, and reviews.", "CleanPro", "Convert Cleaning Needs Into Scheduled Jobs", serviceImages, 2, Sparkles, "blue", ["Clean", "Book", "Areas", "Trust"], ["Cleaning Packages", "Booking Forms", "Service Areas", "Reviews"]),
      demo("Interior / Renovation Website", "Project galleries, service packages, consultation requests, and material guidance.", "RenovaSpace", "Show Renovation Work With Visual Trust", serviceImages, 3, Wrench, "emerald", ["Design", "Work", "Quote", "Proof"], ["Project Galleries", "Service Packages", "Consultation Requests", "Material Guidance"]),
    ],
    demoCtaTitle: "100% Customizable Service Business Website Experiences",
    demoCtaDescription:
      "Every website experience can be customized with service pages, quote forms, appointment booking, reviews, area pages, project proof, and team workflows.",
    benefitsTitle: "Why Service Businesses Choose Us",
    benefits: [
      { title: "Clear Service Positioning", description: "Customers quickly understand what you do and how you help.", icon: ClipboardList },
      { title: "More Quote Requests", description: "Structured forms capture useful service details from the start.", icon: FileText },
      { title: "Stronger Local Trust", description: "Reviews, proof, process, and area pages reduce hesitation.", icon: Star },
      { title: "Local SEO Growth", description: "Service area pages help capture intent in the locations you serve.", icon: MapPin },
    ],
    ctaTitle: "Ready To Turn Local Visitors Into Quote Requests?",
    ctaDescription:
      "Build a service business website that explains your services, proves your work, captures quotes, and supports local growth.",
    ctaLabel: "Build My Website",
    pricingDescription: "Flexible plans designed to grow with your service business",
    pricingPlans: [
      plan("Service Starter", "Best for consultants and smaller local service teams", `${rupee}25,000`, ClipboardList, ["Up to 10 Pages", "Quote Request Form", "Mobile Responsive", "Basic SEO Setup", "Email Support"]),
      plan("Service Growth", "Best for growing service teams and agencies", `${rupee}55,000`, BarChart3, ["Up to 25 Pages", "Service And Area Pages", "Appointment Booking", "Analytics Setup", "Priority Support"], true),
      plan("Service Enterprise", "Best for multi-location service firms and field teams", `${rupee}1,00,000+`, ShieldCheck, ["Unlimited Pages", "Advanced Quote Routing", "Multi-Area Structure", "Custom Integrations", "Dedicated Account Manager"]),
    ],
    testimonialsTitle: "Happy Service Teams, Better Client Experiences",
    testimonials: [
      { quote: "The service pages and quote forms made our local leads much easier to understand.", name: "Maya Fernandes", role: "Local service business" },
      { quote: "Area pages, reviews, and process sections gave the website stronger local trust.", name: "Nikhil Chopra", role: "Repair service" },
      { quote: "The consulting website helped us package services and capture better-fit inquiries.", name: "Diya Shah", role: "Consultant" },
    ],
    complianceDescription:
      "We follow secure website practices to protect client inquiries, quote requests, and service business trust.",
    compliance: trustItems(["Client Inquiry Privacy", "SSL Secured", "Quote Request Protection", "Secure Hosting", "Regular Backups"]),
    aiAutomation: websiteAiAutomation,
    integrationsDeployment: websiteIntegrationsDeployment,
    demoContent: createServiceBusinessDemoContent(),
  },
};

export const industryWebsiteStaticParams: IndustryWebsiteRoute[] = Object.values(
  industryWebsitePages,
).flatMap((page) =>
  page.aliases.map((websiteSlug) => ({
    industrySlug: page.industrySlug,
    websiteSlug,
  })),
);

export function getIndustryWebsitePage(
  industrySlug: string,
  websiteSlug: string,
) {
  const page = industryWebsitePages[industrySlug];

  if (!page || !page.aliases.includes(websiteSlug)) {
    return null;
  }

  return page;
}
