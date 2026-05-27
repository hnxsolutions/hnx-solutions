import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Bell,
  BookOpen,
  BriefcaseBusiness,
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
  Home,
  Landmark,
  LifeBuoy,
  ListChecks,
  LockKeyhole,
  MapPin,
  MessageCircle,
  PackageCheck,
  PackageSearch,
  Plane,
  Route,
  School,
  Search,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Star,
  Store,
  Tags,
  Truck,
  UserCheck,
  Users,
  Wrench,
} from "lucide-react";

export type IndustryMobileAppRoute = {
  industrySlug: string;
  solutionSlug: string;
};

export type IndustryMobileAppCard = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type IndustryMobileAppProblem = IndustryMobileAppCard;

export type IndustryMobileAppModule = {
  title: string;
  description: string;
  icon: LucideIcon;
  points: string[];
};

export type IndustryMobileAppRoleExperience = {
  id: string;
  title: string;
  role: string;
  description: string;
  icon: LucideIcon;
  capabilities: string[];
  metric: string;
  actionLabel: string;
  previewTitle: string;
  previewCards: Array<{
    label: string;
    value: string;
    icon: LucideIcon;
  }>;
};

type BaseIndustryMobileAppRoleExperience = {
  title: string;
  role?: string;
  description: string;
  icon: LucideIcon;
  capabilities: string[];
  metric?: string;
};

export type IndustryMobileAppHeroVisual = {
  appName: string;
  screenTitle: string;
  screenSubtitle: string;
  actionLabel: string;
  navItems: string[];
  cards: Array<{
    label: string;
    value: string;
    icon: LucideIcon;
  }>;
  floatingMetric: string;
  notification: string;
  actionCard: string;
};

export type IndustryMobileAppDemo = {
  title: string;
  subtitle: string;
  brand: string;
  headline: string;
  image: string;
  icon: LucideIcon;
  accent: "blue" | "emerald" | "violet" | "orange" | "rose" | "teal";
  stats: string[];
  chips: string[];
};

export type IndustryMobileAppPricingPlan = {
  name: string;
  subtitle: string;
  price: string;
  icon: LucideIcon;
  features: string[];
  popular: boolean;
};

export type IndustryMobileAppTestimonial = {
  quote: string;
  name: string;
  role: string;
};

export type IndustryMobileAppTrustItem = {
  title: string;
  icon: LucideIcon;
};

export type IndustryMobileAppMetric = {
  label: string;
  value: string;
  change: string;
  icon: LucideIcon;
};

export type IndustryMobileAppDemoContent = {
  appPreviewTitle: string;
  flowTabLabel: string;
  catalogTabLabel: string;
  catalogTitle: string;
  catalogDescription: string;
  flowSteps: string[];
  catalogItems: Array<{
    title: string;
    description: string;
    meta: string;
    icon: LucideIcon;
  }>;
  notifications: Array<{
    title: string;
    description: string;
    time: string;
  }>;
  analyticsMetrics: IndustryMobileAppMetric[];
  analyticsSources: Array<[string, string]>;
  appScreens: string[];
  primaryAction: string;
  secondaryAction: string;
  adminTitle: string;
  adminDescription: string;
};

export type IndustryMobileAppPageData = {
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
  heroChips: Array<{ label: string; icon: LucideIcon }>;
  heroStats: Array<[string, string]>;
  heroVisual: IndustryMobileAppHeroVisual;
  problemsTitle: string;
  problems: IndustryMobileAppProblem[];
  includesTitle: string;
  includes: IndustryMobileAppCard[];
  modulesTitle: string;
  modulesDescription: string;
  modules: IndustryMobileAppModule[];
  roleExperiencesTitle: string;
  roleExperiencesDescription: string;
  roleExperiences: IndustryMobileAppRoleExperience[];
  flowTitle: string;
  flowSteps: IndustryMobileAppCard[];
  demoGalleryTitle: string;
  demoGalleryDescription: string;
  demoGallery: IndustryMobileAppDemo[];
  demoContent: IndustryMobileAppDemoContent;
  benefitsTitle: string;
  benefits: IndustryMobileAppCard[];
  ctaTitle: string;
  ctaDescription: string;
  pricingDescription: string;
  pricingPlans: IndustryMobileAppPricingPlan[];
  testimonialsTitle: string;
  testimonials: IndustryMobileAppTestimonial[];
  trustTitle: string;
  trustDescription: string;
  trustItems: IndustryMobileAppTrustItem[];
};

type PageInput = {
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
  heroChips: Array<{ label: string; icon: LucideIcon }>;
  heroStats: Array<[string, string]>;
  problems: IndustryMobileAppProblem[];
  includes: IndustryMobileAppCard[];
  modules: IndustryMobileAppModule[];
  flowTitle: string;
  flowSteps: IndustryMobileAppCard[];
  demoGallery: IndustryMobileAppDemo[];
  demoContent: IndustryMobileAppDemoContent;
  benefits: IndustryMobileAppCard[];
  ctaTitle: string;
  ctaDescription: string;
  pricingDescription: string;
  pricingPlans: IndustryMobileAppPricingPlan[];
  testimonials: IndustryMobileAppTestimonial[];
  trustItems: IndustryMobileAppTrustItem[];
};

const rupee = "\u20b9";

const realEstateImages = [
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=900&q=85",
];

const educationImages = [
  "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=85",
];

const manufacturingImages = [
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=900&q=85",
];

const retailImages = [
  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1481437156560-3205f6a55735?auto=format&fit=crop&w=900&q=85",
];

const financeImages = [
  "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=85",
];

const insuranceImages = [
  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=85",
];

const travelImages = [
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=900&q=85",
];

const automobileImages = [
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?auto=format&fit=crop&w=900&q=85",
];

const serviceImages = [
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85",
];

function card(
  title: string,
  description: string,
  icon: LucideIcon,
): IndustryMobileAppCard {
  return { title, description, icon };
}

function moduleCard(
  title: string,
  icon: LucideIcon,
  points: string[],
  description?: string,
): IndustryMobileAppModule {
  return {
    title,
    description:
      description ??
      `A focused mobile workflow for ${points
        .slice(0, 2)
        .join(", ")
        .toLowerCase()} and faster daily action.`,
    icon,
    points,
  };
}

function demo(
  title: string,
  subtitle: string,
  brand: string,
  headline: string,
  image: string,
  icon: LucideIcon,
  accent: IndustryMobileAppDemo["accent"],
  chips: string[],
): IndustryMobileAppDemo {
  return {
    title,
    subtitle,
    brand,
    headline,
    image,
    icon,
    accent,
    stats: ["Mobile UX", "Push alerts", "Admin sync"],
    chips,
  };
}

function plan(
  name: string,
  price: string,
  popular: boolean,
  features: string[],
): IndustryMobileAppPricingPlan {
  return {
    name,
    subtitle: popular ? "Most selected growth build" : "Focused mobile app build",
    price,
    icon: popular ? Star : Smartphone,
    features,
    popular,
  };
}

const roleExperiencesByIndustry: Record<string, BaseIndustryMobileAppRoleExperience[]> = {
  "real-estate": [
    {
      title: "Buyer App",
      description: "Buyers search properties, save listings, book visits, and follow deal updates from one mobile account.",
      icon: Home,
      capabilities: ["Saved listings", "Site visit slots", "Broker messages"],
    },
    {
      title: "Broker App",
      description: "Brokers receive assigned leads, review buyer preferences, and update follow-up status after each interaction.",
      icon: MessageCircle,
      capabilities: ["Lead context", "Visit reminders", "Follow-up notes"],
    },
    {
      title: "Builder Admin App",
      description: "Admins monitor project interest, inventory demand, visit pipeline, and broker performance on mobile.",
      icon: Building2,
      capabilities: ["Project demand", "Inventory signals", "Team reports"],
    },
    {
      title: "Sales Team App",
      description: "Sales teams track inquiries, schedule visits, and move buyers through qualification and booking stages.",
      icon: Users,
      capabilities: ["Lead stages", "Tasks", "Deal status"],
    },
  ],
  education: [
    {
      title: "Student App",
      description: "Students view classes, assignments, notices, program updates, and support actions in one mobile dashboard.",
      icon: GraduationCap,
      capabilities: ["Class updates", "Assignments", "Progress"],
    },
    {
      title: "Parent App",
      description: "Parents receive notices, fee reminders, event updates, and important communication without scattered chats.",
      icon: Users,
      capabilities: ["Notices", "Fee reminders", "Events"],
    },
    {
      title: "Teacher/Admin App",
      description: "Teachers and admins publish updates, track read status, manage tasks, and keep students informed.",
      icon: School,
      capabilities: ["Publish notices", "Review tasks", "Student records"],
    },
    {
      title: "Counselor App",
      description: "Counselors manage admission inquiries, program interest, callback tasks, and application status.",
      icon: UserCheck,
      capabilities: ["Admission leads", "Callbacks", "Follow-up status"],
    },
  ],
  manufacturing: [
    {
      title: "Dealer App",
      description: "Dealers browse product catalogs, request orders or RFQs, upload documents, and track dispatch status.",
      icon: Truck,
      capabilities: ["Catalog access", "RFQ requests", "Dispatch updates"],
    },
    {
      title: "Sales Team App",
      description: "Sales teams review dealer requests, quote status, account notes, and follow-up tasks while on the move.",
      icon: Users,
      capabilities: ["Dealer leads", "Quote status", "Account notes"],
    },
    {
      title: "Admin App",
      description: "Admins monitor inventory visibility, approval queues, document collection, and order performance.",
      icon: BarChart3,
      capabilities: ["Inventory view", "Approval queues", "Reports"],
    },
    {
      title: "Dispatch Team App",
      description: "Dispatch teams update shipment stages, ETAs, proof documents, and dealer notifications.",
      icon: Route,
      capabilities: ["Shipment stages", "ETA updates", "Proof uploads"],
    },
  ],
  retail: [
    {
      title: "Customer App",
      description: "Customers browse catalog items, offers, loyalty status, order inquiries, and support updates.",
      icon: ShoppingBag,
      capabilities: ["Product discovery", "Offers", "Order status"],
    },
    {
      title: "Store Admin App",
      description: "Store admins publish products, manage offers, view inquiries, and track local customer demand.",
      icon: Store,
      capabilities: ["Catalog updates", "Offer control", "Inquiry queue"],
    },
    {
      title: "Support Team App",
      description: "Support teams update order status, answer product questions, and resolve customer requests.",
      icon: LifeBuoy,
      capabilities: ["Support tickets", "Order updates", "Customer notes"],
    },
    {
      title: "Loyalty Manager App",
      description: "Managers monitor rewards, repeat buying, offer clicks, and campaign response from mobile analytics.",
      icon: Tags,
      capabilities: ["Loyalty points", "Campaign response", "Repeat sales"],
    },
  ],
  finance: [
    {
      title: "Client App",
      description: "Clients request consultations, submit details, track document checklists, and receive advisor updates.",
      icon: Landmark,
      capabilities: ["Consultation requests", "Documents", "Advisor updates"],
    },
    {
      title: "Advisor App",
      description: "Advisors review service interest, schedule calls, update next steps, and manage follow-ups securely.",
      icon: UserCheck,
      capabilities: ["Client queue", "Call schedule", "Next steps"],
    },
    {
      title: "Admin App",
      description: "Admins track service demand, advisor workloads, form completions, and secure inquiry handling.",
      icon: BarChart3,
      capabilities: ["Lead reports", "Advisor workload", "Form status"],
    },
    {
      title: "Document Review Team",
      description: "Review teams validate checklists, request missing files, and keep clients updated through controlled notifications.",
      icon: FileCheck2,
      capabilities: ["Checklist review", "Missing files", "Secure updates"],
    },
  ],
  insurance: [
    {
      title: "Policyholder App",
      description: "Policyholders access policy details, submit claims, upload documents, and track renewal reminders.",
      icon: ShieldCheck,
      capabilities: ["Policy view", "Claims", "Renewals"],
    },
    {
      title: "Agent App",
      description: "Agents manage policy inquiries, customer questions, claim follow-ups, and renewal tasks from mobile.",
      icon: UserCheck,
      capabilities: ["Policy leads", "Customer notes", "Renewal tasks"],
    },
    {
      title: "Claims Team App",
      description: "Claims teams review documents, update request stages, and trigger status notifications for customers.",
      icon: ClipboardCheck,
      capabilities: ["Claim stages", "Document review", "Status alerts"],
    },
    {
      title: "Admin App",
      description: "Admins monitor policy demand, claim volume, renewal pipeline, and agent performance.",
      icon: BarChart3,
      capabilities: ["Policy demand", "Claim volume", "Agent reports"],
    },
  ],
  travel: [
    {
      title: "Traveler App",
      description: "Travelers browse packages, save itineraries, submit inquiries, store vouchers, and receive trip alerts.",
      icon: Plane,
      capabilities: ["Packages", "Itineraries", "Trip alerts"],
    },
    {
      title: "Consultant App",
      description: "Consultants manage package interest, date preferences, guest details, and follow-up tasks.",
      icon: MessageCircle,
      capabilities: ["Inquiry queue", "Guest notes", "Follow-ups"],
    },
    {
      title: "Admin App",
      description: "Admins track package demand, seasonal inquiries, lead sources, and booking conversion.",
      icon: BarChart3,
      capabilities: ["Package demand", "Source reports", "Bookings"],
    },
    {
      title: "Operations Team App",
      description: "Operations teams coordinate vouchers, vendor updates, support requests, and travel documents.",
      icon: Route,
      capabilities: ["Vouchers", "Vendor updates", "Support status"],
    },
  ],
  automobile: [
    {
      title: "Customer App",
      description: "Customers browse vehicles, book test drives, request service, review offers, and receive reminders.",
      icon: Car,
      capabilities: ["Inventory", "Test drives", "Service reminders"],
    },
    {
      title: "Dealer App",
      description: "Dealers manage vehicle interest, showroom inquiries, finance requests, and offer follow-ups.",
      icon: Store,
      capabilities: ["Vehicle leads", "Offer follow-ups", "Finance inquiry"],
    },
    {
      title: "Service Advisor App",
      description: "Service advisors coordinate bookings, service history, customer updates, and reminder campaigns.",
      icon: Wrench,
      capabilities: ["Service slots", "History", "Status updates"],
    },
    {
      title: "Admin App",
      description: "Admins track inventory views, test drive leads, service bookings, and top model demand.",
      icon: BarChart3,
      capabilities: ["Inventory demand", "Lead reports", "Service metrics"],
    },
  ],
  "service-business": [
    {
      title: "Customer App",
      description: "Customers select services, request quotes, book appointments, track job status, and leave reviews.",
      icon: Users,
      capabilities: ["Service catalog", "Quote requests", "Reviews"],
    },
    {
      title: "Field Team App",
      description: "Field teams receive job assignments, update status, upload proof, and communicate with support.",
      icon: Wrench,
      capabilities: ["Job queue", "Status updates", "Proof uploads"],
    },
    {
      title: "Admin App",
      description: "Admins assign teams, monitor quote requests, manage schedules, and review service performance.",
      icon: BarChart3,
      capabilities: ["Team assignment", "Schedule view", "Performance"],
    },
    {
      title: "Support Team App",
      description: "Support teams manage customer questions, reschedules, issue notes, and post-service follow-ups.",
      icon: LifeBuoy,
      capabilities: ["Support queue", "Reschedules", "Follow-ups"],
    },
  ],
};

const heroFloatingMetrics: Record<string, string> = {
  "real-estate": "12 site visits this week",
  education: "42 admission leads",
  manufacturing: "18 active RFQs",
  retail: "24 repeat orders",
  finance: "9 new consultations",
  insurance: "16 renewals due",
  travel: "31 booking inquiries",
  automobile: "11 test drives this week",
  "service-business": "27 quote requests",
};

const heroVisualContentByIndustry: Record<
  string,
  {
    appName: string;
    screenTitle: string;
    rows: string[];
    notification: string;
    analytics: string;
    actionCard: string;
  }
> = {
  "real-estate": {
    appName: "EstateFlow",
    screenTitle: "Property Discovery",
    rows: ["Search Properties", "Saved Listings", "Site Visit", "Broker Chat"],
    notification: "Site visit confirmed for 4:30 PM",
    analytics: "12 site visits this week",
    actionCard: "Hot lead: 3BHK buyer",
  },
  education: {
    appName: "EduConnect",
    screenTitle: "Student Dashboard",
    rows: ["Classes", "Assignments", "Notices", "Admissions"],
    notification: "New admission inquiry received",
    analytics: "42 admission leads",
    actionCard: "Parent update sent",
  },
  manufacturing: {
    appName: "FactoryLink",
    screenTitle: "Dealer Operations",
    rows: ["Product Catalog", "Order Requests", "Approvals", "Dispatch"],
    notification: "RFQ approved by admin",
    analytics: "18 active RFQs",
    actionCard: "Dispatch in progress",
  },
  retail: {
    appName: "RetailGo",
    screenTitle: "Shopping Experience",
    rows: ["Catalog", "Offers", "Loyalty", "Orders"],
    notification: "New offer sent to 1,200 users",
    analytics: "24 repeat orders",
    actionCard: "Loyalty reward unlocked",
  },
  finance: {
    appName: "FinClient",
    screenTitle: "Client Advisory",
    rows: ["Services", "Consultation", "Documents", "Advisor Updates"],
    notification: "Consultation booked",
    analytics: "9 new consultations",
    actionCard: "Document checklist complete",
  },
  insurance: {
    appName: "PolicyDesk",
    screenTitle: "Policy Management",
    rows: ["Policies", "Claims", "Renewals", "Agent Chat"],
    notification: "Renewal reminder sent",
    analytics: "16 renewals due",
    actionCard: "Claim under review",
  },
  travel: {
    appName: "TripFlow",
    screenTitle: "Trip Planning",
    rows: ["Packages", "Itinerary", "Booking", "Trip Alerts"],
    notification: "Traveler confirmed package",
    analytics: "31 booking inquiries",
    actionCard: "Goa itinerary ready",
  },
  automobile: {
    appName: "AutoDrive",
    screenTitle: "Dealer Experience",
    rows: ["Inventory", "Test Drive", "Service", "Offers"],
    notification: "Test drive booked",
    analytics: "11 test drives this week",
    actionCard: "Service reminder active",
  },
  "service-business": {
    appName: "ServicePro",
    screenTitle: "Service Booking",
    rows: ["Services", "Quote Request", "Job Tracking", "Reviews"],
    notification: "New quote request received",
    analytics: "27 quote requests",
    actionCard: "Technician assigned",
  },
};

const roleMetricsByIndustry: Record<string, string[]> = {
  "real-estate": [
    "3x faster visit scheduling",
    "Cleaner broker follow-ups",
    "Project demand at a glance",
    "Lead stages stay visible",
  ],
  education: [
    "Better student engagement",
    "Clearer parent communication",
    "Faster notice publishing",
    "More organized admission follow-ups",
  ],
  manufacturing: [
    "Faster dealer order requests",
    "Quicker quote follow-ups",
    "Approval queues stay visible",
    "Dispatch updates reach dealers sooner",
  ],
  retail: [
    "Higher repeat purchase intent",
    "Faster catalog updates",
    "More loyalty activity",
    "Support updates stay trackable",
  ],
  finance: [
    "More consultation-ready leads",
    "Advisor follow-ups stay structured",
    "Secure inquiry visibility",
    "Document review becomes clearer",
  ],
  insurance: [
    "Policy access becomes easier",
    "Agent tasks stay organized",
    "Claim status is easier to track",
    "Renewal pipeline stays visible",
  ],
  travel: [
    "More package inquiries",
    "Consultant follow-ups stay clear",
    "Booking demand is easier to read",
    "Trip operations stay coordinated",
  ],
  automobile: [
    "More test drive-ready leads",
    "Dealer follow-ups stay focused",
    "Service slots are easier to manage",
    "Inventory demand stays visible",
  ],
  "service-business": [
    "More quote-ready requests",
    "Field jobs stay trackable",
    "Team assignments become clearer",
    "Support follow-ups stay organized",
  ],
};

const premiumUseCasesByIndustry: Record<string, BaseIndustryMobileAppRoleExperience[]> = {
  "real-estate": [
    {
      title: "Buyer App",
      role: "Buyer",
      description: "Buyers search properties, save favorites, book visits, and chat with brokers.",
      icon: Home,
      capabilities: ["Smart property search", "Saved listings", "Site visit booking", "Broker chat"],
      metric: "3x faster visit scheduling",
    },
    {
      title: "Broker App",
      role: "Broker",
      description: "Brokers manage fresh inquiries, plan visits, share properties, and keep buyer follow-ups moving.",
      icon: MessageCircle,
      capabilities: ["Lead inbox", "Visit calendar", "Follow-up reminders", "Property sharing"],
      metric: "Faster follow-ups",
    },
    {
      title: "Builder/Admin App",
      role: "Builder Admin",
      description: "Builder teams monitor inventory, lead quality, visit reports, and project sales activity.",
      icon: Building2,
      capabilities: ["Project inventory", "Lead tracking", "Site visit reports", "Sales dashboard"],
      metric: "Better project visibility",
    },
    {
      title: "Sales Team App",
      role: "Sales Team",
      description: "Sales executives track assigned leads, call notes, visit status, and deal updates from mobile.",
      icon: Users,
      capabilities: ["Assigned leads", "Call notes", "Visit status", "Deal updates"],
      metric: "Cleaner sales pipeline",
    },
  ],
  education: [
    {
      title: "Student App",
      role: "Student",
      description: "Students access classes, assignments, notices, and study material from one mobile dashboard.",
      icon: GraduationCap,
      capabilities: ["Classes", "Assignments", "Notices", "Study material"],
      metric: "Better student engagement",
    },
    {
      title: "Parent App",
      role: "Parent",
      description: "Parents track notices, attendance, fee reminders, and teacher updates without scattered messages.",
      icon: Users,
      capabilities: ["Attendance", "Notices", "Fee reminders", "Teacher updates"],
      metric: "Better parent communication",
    },
    {
      title: "Teacher/Admin App",
      role: "Teacher/Admin",
      description: "Academic teams publish updates, homework, announcements, and attendance from a role-based app.",
      icon: School,
      capabilities: ["Student updates", "Homework posting", "Announcements", "Attendance"],
      metric: "Faster academic operations",
    },
    {
      title: "Counselor App",
      role: "Counselor",
      description: "Counselors handle admission leads, follow-up tasks, course suggestions, and inquiry status.",
      icon: UserCheck,
      capabilities: ["Admission leads", "Follow-up tasks", "Course suggestions", "Inquiry status"],
      metric: "Higher admission conversion",
    },
  ],
  manufacturing: [
    {
      title: "Dealer App",
      role: "Dealer",
      description: "Dealers browse catalogs, request orders, check stock visibility, and follow dispatch status.",
      icon: Truck,
      capabilities: ["Product catalog", "Order request", "Stock visibility", "Dispatch status"],
      metric: "Faster B2B ordering",
    },
    {
      title: "Sales Team App",
      role: "Sales Team",
      description: "Field teams track dealer leads, RFQs, follow-ups, and product sharing from mobile.",
      icon: Users,
      capabilities: ["Dealer leads", "RFQ tracking", "Follow-ups", "Product sharing"],
      metric: "Cleaner field sales",
    },
    {
      title: "Admin App",
      role: "Admin",
      description: "Admins review approval queues, dealer records, orders, and analytics with operational clarity.",
      icon: BarChart3,
      capabilities: ["Approval queue", "Dealer management", "Order review", "Analytics"],
      metric: "Faster approvals",
    },
    {
      title: "Dispatch Team App",
      role: "Dispatch Team",
      description: "Dispatch teams update shipment status, delivery information, documents, and notifications.",
      icon: Route,
      capabilities: ["Shipment status", "Delivery updates", "Documents", "Notifications"],
      metric: "Better dispatch visibility",
    },
  ],
  retail: [
    {
      title: "Customer App",
      role: "Customer",
      description: "Customers browse products, discover offers, send order inquiries, and leave reviews.",
      icon: ShoppingBag,
      capabilities: ["Catalog browsing", "Offers", "Order inquiry", "Reviews"],
      metric: "Higher repeat orders",
    },
    {
      title: "Store Admin App",
      role: "Store Admin",
      description: "Store teams update products, manage offers, track orders, and respond to customer requests.",
      icon: Store,
      capabilities: ["Product updates", "Offer management", "Order tracking", "Customer requests"],
      metric: "Faster store operations",
    },
    {
      title: "Loyalty Manager App",
      role: "Loyalty Manager",
      description: "Marketing teams manage reward points, coupons, campaigns, and customer segments.",
      icon: Tags,
      capabilities: ["Reward points", "Coupons", "Campaigns", "Segments"],
      metric: "Better retention",
    },
    {
      title: "Support Team App",
      role: "Support Team",
      description: "Support teams handle tickets, order status, returns, and chat support from one queue.",
      icon: LifeBuoy,
      capabilities: ["Customer tickets", "Order status", "Returns", "Chat support"],
      metric: "Faster response time",
    },
  ],
  finance: [
    {
      title: "Client App",
      role: "Client",
      description: "Clients request services, upload documents, book consultations, and receive advisor updates.",
      icon: Landmark,
      capabilities: ["Service requests", "Documents", "Consultation", "Advisor updates"],
      metric: "More organized client journey",
    },
    {
      title: "Advisor App",
      role: "Advisor",
      description: "Advisors manage client pipelines, task reminders, document review, and meeting notes.",
      icon: UserCheck,
      capabilities: ["Client pipeline", "Task reminders", "Document review", "Meeting notes"],
      metric: "Faster advisory workflow",
    },
    {
      title: "Admin App",
      role: "Admin",
      description: "Admins control leads, service tracking, advisor assignment, and business reports.",
      icon: BarChart3,
      capabilities: ["Lead management", "Service tracking", "Advisor assignment", "Reports"],
      metric: "Better operational control",
    },
    {
      title: "Document Review Team",
      role: "Review Team",
      description: "Review teams track checklists, approval status, missing documents, and secure notes.",
      icon: FileCheck2,
      capabilities: ["Checklist tracking", "Approval status", "Missing document alerts", "Secure notes"],
      metric: "Less document delay",
    },
  ],
  insurance: [
    {
      title: "Policyholder App",
      role: "Policyholder",
      description: "Policyholders access dashboards, renewals, claims, and agent chat from a secure app.",
      icon: ShieldCheck,
      capabilities: ["Policy dashboard", "Renewals", "Claims", "Agent chat"],
      metric: "Better policy retention",
    },
    {
      title: "Agent App",
      role: "Agent",
      description: "Agents manage follow-ups, claim status, renewal reminders, and customer notes.",
      icon: UserCheck,
      capabilities: ["Lead follow-ups", "Claim status", "Renewal reminders", "Customer notes"],
      metric: "Faster agent response",
    },
    {
      title: "Claims Team App",
      role: "Claims Team",
      description: "Claims teams review requests, documents, status updates, and escalation items.",
      icon: ClipboardCheck,
      capabilities: ["Claim requests", "Document review", "Status updates", "Escalations"],
      metric: "Cleaner claim handling",
    },
    {
      title: "Admin App",
      role: "Admin",
      description: "Admins monitor policy analytics, agent performance, renewal pipeline, and claim dashboards.",
      icon: BarChart3,
      capabilities: ["Policy analytics", "Agent performance", "Renewal pipeline", "Claim dashboard"],
      metric: "Better business visibility",
    },
  ],
  travel: [
    {
      title: "Traveler App",
      role: "Traveler",
      description: "Travelers explore packages, itineraries, booking status, and trip alerts in one app.",
      icon: Plane,
      capabilities: ["Packages", "Itinerary", "Booking status", "Trip alerts"],
      metric: "Better trip experience",
    },
    {
      title: "Consultant App",
      role: "Consultant",
      description: "Consultants manage inquiry pipelines, package sharing, follow-ups, and customer notes.",
      icon: MessageCircle,
      capabilities: ["Inquiry pipeline", "Package sharing", "Follow-ups", "Customer notes"],
      metric: "Faster booking conversion",
    },
    {
      title: "Admin App",
      role: "Admin",
      description: "Admins manage packages, booking analytics, consultant assignment, and offer updates.",
      icon: BarChart3,
      capabilities: ["Package management", "Booking analytics", "Consultant assignment", "Offer updates"],
      metric: "Better travel operations",
    },
    {
      title: "Operations Team App",
      role: "Operations Team",
      description: "Operations teams coordinate vouchers, vendors, trip status, and support requests.",
      icon: Route,
      capabilities: ["Voucher updates", "Vendor coordination", "Trip status", "Support requests"],
      metric: "Smoother trip delivery",
    },
  ],
  automobile: [
    {
      title: "Customer App",
      role: "Customer",
      description: "Customers browse inventory, book test drives, schedule service, and explore offers.",
      icon: Car,
      capabilities: ["Inventory browsing", "Test drive booking", "Service booking", "Offers"],
      metric: "More dealership leads",
    },
    {
      title: "Dealer App",
      role: "Dealer",
      description: "Dealers manage vehicle inventory, lead inboxes, test drive calendars, and finance inquiries.",
      icon: Store,
      capabilities: ["Vehicle inventory", "Lead inbox", "Test drive calendar", "Finance inquiries"],
      metric: "Faster dealer follow-up",
    },
    {
      title: "Service Advisor App",
      role: "Service Advisor",
      description: "Service advisors manage slots, job status, reminders, and customer updates.",
      icon: Wrench,
      capabilities: ["Service slots", "Job status", "Reminders", "Customer updates"],
      metric: "Better service retention",
    },
    {
      title: "Admin App",
      role: "Admin",
      description: "Admins see lead dashboards, vehicle performance, booking analytics, and staff overview.",
      icon: BarChart3,
      capabilities: ["Lead dashboard", "Vehicle performance", "Booking analytics", "Staff overview"],
      metric: "Better dealership control",
    },
  ],
  "service-business": [
    {
      title: "Customer App",
      role: "Customer",
      description: "Customers select services, request quotes, book appointments, and track jobs.",
      icon: Users,
      capabilities: ["Service selection", "Quote request", "Booking", "Job tracking"],
      metric: "Easier customer booking",
    },
    {
      title: "Field Team App",
      role: "Field Team",
      description: "Field teams view assigned jobs, route/status, job notes, and completion proof.",
      icon: Wrench,
      capabilities: ["Assigned jobs", "Route/status", "Job notes", "Completion proof"],
      metric: "Better field execution",
    },
    {
      title: "Admin App",
      role: "Admin",
      description: "Admins handle job assignment, quote review, team tracking, and analytics.",
      icon: BarChart3,
      capabilities: ["Job assignment", "Quote review", "Team tracking", "Analytics"],
      metric: "Stronger operations",
    },
    {
      title: "Support Team App",
      role: "Support Team",
      description: "Support teams manage customer queries, job updates, feedback, and follow-ups.",
      icon: LifeBuoy,
      capabilities: ["Customer queries", "Job updates", "Feedback", "Follow-ups"],
      metric: "Faster support handling",
    },
  ],
};

function slugifyLabel(label: string) {
  return label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function buildHeroVisual(input: PageInput): IndustryMobileAppHeroVisual {
  const visualContent = heroVisualContentByIndustry[input.industrySlug];
  const visualCards = visualContent?.rows ?? [];

  return {
    appName: visualContent?.appName ?? input.heroBrand,
    screenTitle: visualContent?.screenTitle ?? input.heroHeadline,
    screenSubtitle: input.heroSubtext,
    actionLabel: input.demoContent.primaryAction,
    navItems: visualCards.slice(0, 4),
    cards: input.heroChips.slice(0, 4).map((chip, index) => ({
      label: visualCards[index] ?? chip.label,
      value: input.heroStats[index]?.[1] ?? input.demoContent.catalogTabLabel,
      icon: chip.icon,
    })),
    floatingMetric:
      visualContent?.analytics ??
      heroFloatingMetrics[input.industrySlug] ??
      `${input.demoContent.analyticsMetrics[0]?.value ?? "Live"} active app actions`,
    notification:
      visualContent?.notification ??
      input.demoContent.notifications[0]?.description ??
      input.heroSubtext,
    actionCard: visualContent?.actionCard ?? input.demoContent.primaryAction,
  };
}

function buildRoleExperiences(input: PageInput): IndustryMobileAppRoleExperience[] {
  const baseRoles =
    premiumUseCasesByIndustry[input.industrySlug] ??
    roleExperiencesByIndustry[input.industrySlug] ??
    [];
  const metrics = roleMetricsByIndustry[input.industrySlug] ?? [];

  return baseRoles.map((role, index) => {
    const capabilities = role.capabilities.slice(0, 4);

    return {
      ...role,
      id: `${input.industrySlug}-${slugifyLabel(role.title)}`,
      role: role.role ?? role.title.replace(/\s+App$/i, ""),
      capabilities,
      metric:
        role.metric ??
        metrics[index] ??
        `${input.demoContent.analyticsMetrics[index]?.value ?? "Live"} tracked actions`,
      actionLabel: `Open ${role.title}`,
      previewTitle: `${role.title} Screen Preview`,
      previewCards: capabilities.map((capability, capabilityIndex) => ({
        label: capability,
        value:
          input.heroStats[capabilityIndex]?.[1] ??
          input.demoContent.analyticsMetrics[capabilityIndex]?.value ??
          input.demoContent.catalogTabLabel,
        icon: capabilityIndex === 0 ? role.icon : input.heroChips[capabilityIndex - 1]?.icon ?? role.icon,
      })),
    };
  });
}

function buildTrustItems(input: PageInput): IndustryMobileAppTrustItem[] {
  const privacyItem = input.trustItems[0] ?? { title: "Data Privacy", icon: ShieldCheck };
  const backupItem =
    input.trustItems.find((item) => /backup|hosting/i.test(item.title)) ??
    { title: "Secure Hosting", icon: ClipboardCheck };

  return [
    privacyItem,
    { title: "Secure Login", icon: LockKeyhole },
    { title: "Role-Based Access", icon: Users },
    { title: "Push Notification Control", icon: Bell },
    backupItem,
  ];
}

function createPage(input: PageInput): IndustryMobileAppPageData {
  return {
    ...input,
    heroVisual: buildHeroVisual(input),
    problemsTitle: `${input.industryName} App Problems We Solve`,
    includesTitle: `What Your ${input.industryName} Mobile App Includes`,
    modulesTitle: `${input.industryName} App Modules`,
    modulesDescription:
      "A focused module set for customer, team, and admin workflows that need to work from a phone.",
    roleExperiencesTitle: `${input.industryName} Role-Based App Experiences`,
    roleExperiencesDescription:
      "Each mobile app can include separate experiences for customers, teams, admins, and operational roles so every user sees the right actions.",
    roleExperiences: buildRoleExperiences(input),
    demoGalleryTitle: `${input.industryName} Mobile App Demo Gallery`,
    demoGalleryDescription:
      "Explore sample app experiences for the most common mobile workflows in this industry.",
    benefitsTitle: `Why Build A ${input.industryName} Mobile App With HNX`,
    testimonialsTitle: `${input.industryName} App Feedback`,
    trustTitle: "Security, Compliance And Trust",
    trustDescription:
      "Every mobile app is planned around privacy-aware forms, secure access, reliable hosting, and operational continuity.",
    trustItems: buildTrustItems(input),
  };
}

export const industryMobileAppPages: Record<string, IndustryMobileAppPageData> = {
  "real-estate": createPage({
    industrySlug: "real-estate",
    industryName: "Real Estate",
    eyebrow: "Real Estate Mobile App",
    title: "Real Estate Mobile App For Property Search And Site Visits",
    highlight: "Property Search",
    description:
      "A real estate mobile app for property search, saved listings, site visits, broker communication, and deal tracking.",
    primaryRoute: "/industries/real-estate/mobile-app-development",
    aliases: ["mobile-app-development", "mobile-app"],
    keywords: ["real estate mobile app", "property listing app", "site visit booking app"],
    serviceType: "Real Estate Mobile App Development",
    heroImage: realEstateImages[0],
    heroBrand: "UrbanNest App",
    heroHeadline: "Search, save and visit properties from one app",
    heroSubtext:
      "Give buyers one mobile hub for listings, location alerts, visit booking, broker chat, and inquiry status.",
    heroChips: [
      { label: "Property Search", icon: Search },
      { label: "Saved Listings", icon: Home },
      { label: "Site Visit Booking", icon: CalendarCheck },
      { label: "Broker Chat", icon: MessageCircle },
    ],
    heroStats: [["Listings", "Live inventory"], ["Visits", "Booking flow"], ["Brokers", "Chat support"], ["CRM", "Admin sync"]],
    problems: [
      card("Buyers lose track of properties", "Shortlisted properties, budgets, maps, and preferences are hard to remember across calls and chats.", Home),
      card("Site visit coordination is manual", "Teams spend time confirming visits, collecting preferences, and rescheduling missed appointments.", CalendarCheck),
      card("Broker follow-ups are scattered", "Buyer conversations and listing context get split between brokers, managers, and spreadsheets.", MessageCircle),
    ],
    includes: [
      card("Property search", "Filter listings by location, budget, configuration, status, and amenities.", Search),
      card("Saved listings", "Let buyers shortlist properties and return when they are ready.", Home),
      card("Site visit booking", "Capture project, preferred date, time, budget, and contact details.", CalendarCheck),
      card("Broker chat", "Connect buyers with assigned brokers while preserving context.", MessageCircle),
      card("Location alerts", "Notify users when matching properties are available in selected areas.", MapPin),
      card("Admin CRM connection", "Sync inquiries, visits, and lead status with the sales team.", BarChart3),
    ],
    modules: [
      moduleCard("Property Search", Search, ["Location filters", "Budget range", "Amenity tags"]),
      moduleCard("Saved Properties", Home, ["Shortlist units", "Compare options", "Return alerts"]),
      moduleCard("Site Visit Booking", CalendarCheck, ["Preferred slot", "Project context", "Team routing"]),
      moduleCard("Broker Chat", MessageCircle, ["Assigned broker", "Lead history", "Quick replies"]),
      moduleCard("Location Alerts", MapPin, ["Area watchlist", "New matches", "Price updates"]),
      moduleCard("User Profile", UserCheck, ["Buyer profile", "Budget notes", "Preferences"]),
      moduleCard("Inquiry Status", ListChecks, ["Visit status", "Follow-up state", "Deal stage"]),
      moduleCard("Admin Sync", BarChart3, ["CRM update", "Broker tasks", "Lead reports"]),
    ],
    flowTitle: "Property Buyer App Flow",
    flowSteps: [
      card("Browse Property", "Buyers explore inventory by area, price, and property type.", Search),
      card("Save Listing", "They shortlist matching homes or commercial properties.", Home),
      card("Book Site Visit", "The app captures preferred slot and visit details.", CalendarCheck),
      card("Broker Follow-up", "The assigned broker receives context and next action.", MessageCircle),
      card("Deal Tracking", "Buyer and team can see status until closure.", ListChecks),
    ],
    demoGallery: [
      demo("Property Buyer App", "Search and save properties", "UrbanNest Buyer", "Find the right property faster", realEstateImages[0], Home, "orange", ["Search", "Save", "Visit"]),
      demo("Broker App", "Lead and visit coordination", "BrokerDesk", "Manage every buyer follow-up", realEstateImages[1], MessageCircle, "blue", ["Leads", "Calls", "Tasks"]),
      demo("Site Visit App", "Appointment-focused app", "VisitPilot", "Book, confirm and track visits", realEstateImages[2], CalendarCheck, "emerald", ["Slots", "Routes", "Status"]),
      demo("Rental App", "Rental discovery and inquiry", "RentNest", "Shortlist rentals and request tours", realEstateImages[1], Building2, "violet", ["Rentals", "Maps", "Inquiry"]),
      demo("Builder Project App", "Project and inventory showcase", "PrimeBuild App", "Launch project inventory on mobile", realEstateImages[0], Building2, "teal", ["Projects", "Units", "CRM"]),
    ],
    demoContent: {
      appPreviewTitle: "Property buyer app preview",
      flowTabLabel: "Site Visit Flow",
      catalogTabLabel: "Listings",
      catalogTitle: "Featured property listings",
      catalogDescription: "Demo listing cards with price, location, availability, and visit CTA.",
      flowSteps: ["Browse Property", "Save Listing", "Book Site Visit", "Broker Follow-up", "Deal Tracking"],
      catalogItems: [
        { title: "Skyline Residency", description: "3 BHK apartments near metro corridor.", meta: "From 85L - Ready visits", icon: Building2 },
        { title: "MetroView Offices", description: "Commercial spaces with flexible units.", meta: "CBD - Leasing open", icon: Landmark },
        { title: "Green Acres Villas", description: "Premium villa community with clubhouse.", meta: "North zone - 12 units", icon: Home },
      ],
      notifications: [
        { title: "Visit confirmed", description: "Skyline Residency visit is confirmed for 5:30 PM.", time: "10 min ago" },
        { title: "New match found", description: "2 properties match your saved location alert.", time: "1 hr ago" },
        { title: "Broker note", description: "Rohit shared floor plan and payment schedule.", time: "Today" },
      ],
      analyticsMetrics: [
        { label: "Property Views", value: "18.4K", change: "+24%", icon: Search },
        { label: "Site Visits", value: "420", change: "+31%", icon: CalendarCheck },
        { label: "Saved Listings", value: "1.8K", change: "+18%", icon: Home },
        { label: "Broker Chats", value: "760", change: "+22%", icon: MessageCircle },
      ],
      analyticsSources: [["Location alerts", "38%"], ["Listing search", "31%"], ["Project page", "21%"], ["Referral", "10%"]],
      appScreens: ["Home", "Listings", "Visits", "Chat"],
      primaryAction: "Book Site Visit",
      secondaryAction: "Save Property",
      adminTitle: "Connected sales dashboard",
      adminDescription: "Visits, brokers, property interests, and deal stages sync into one admin view.",
    },
    benefits: [
      card("Buyer-first discovery", "Make property browsing, saving, and comparing simple on mobile.", Search),
      card("Better site visit conversion", "Turn interest into scheduled visits with fewer manual calls.", CalendarCheck),
      card("Broker accountability", "Keep follow-ups visible across brokers and managers.", Users),
      card("CRM-ready operations", "Push app activity into lead and sales reporting.", BarChart3),
    ],
    ctaTitle: "Build a real estate mobile app that moves buyers faster",
    ctaDescription:
      "Launch an app for property search, visits, broker follow-ups, and connected sales operations.",
    pricingDescription: "Choose a real estate app package based on listings, broker workflows, and admin depth.",
    pricingPlans: [
      plan("Property App Starter", `${rupee}45,000`, false, ["Property search", "Saved listings", "Inquiry form", "Basic notifications", "Admin handoff"]),
      plan("Real Estate App Growth", `${rupee}90,000`, true, ["Site visit booking", "Broker chat", "Location alerts", "Lead status", "Analytics dashboard"]),
      plan("Developer App Suite", `${rupee}1,80,000+`, false, ["Project inventory", "CRM integration", "Broker roles", "Advanced reports", "Custom workflows"]),
    ],
    testimonials: [
      { quote: "The demo app helped us see how buyer shortlists and visit requests can stay connected.", name: "Riya Malhotra", role: "Sample provider - Property consultant" },
      { quote: "Broker follow-ups became much clearer once the app flow was mapped to lead status.", name: "Arjun Sethi", role: "Demo brand - Real estate agency" },
      { quote: "The site visit flow feels practical for project launches and weekend campaigns.", name: "Neha Kapoor", role: "Sample provider - Developer team" },
    ],
    trustItems: [
      { title: "Lead Data Protection", icon: ShieldCheck },
      { title: "Secure Buyer Profiles", icon: LockKeyhole },
      { title: "Visit Privacy", icon: CalendarCheck },
      { title: "Admin Sync Controls", icon: BarChart3 },
      { title: "Regular Backups", icon: FileCheck2 },
    ],
  }),

  education: createPage({
    industrySlug: "education",
    industryName: "Education",
    eyebrow: "Education Mobile App",
    title: "Education Mobile App For Students, Parents And Admissions",
    highlight: "Students, Parents And Admissions",
    description:
      "An education mobile app for students, parents, admissions, classes, notices, assignments, and updates.",
    primaryRoute: "/industries/education/mobile-app-development",
    aliases: ["mobile-app-development", "mobile-app"],
    keywords: ["education mobile app", "student app", "school parent app", "admissions app"],
    serviceType: "Education Mobile App Development",
    heroImage: educationImages[0],
    heroBrand: "BrightPath App",
    heroHeadline: "Students, parents and admissions in one app",
    heroSubtext:
      "Bring notices, class updates, assignments, admissions, parent communication, and reminders into a calm mobile dashboard.",
    heroChips: [
      { label: "Student Dashboard", icon: GraduationCap },
      { label: "Admissions Flow", icon: ClipboardList },
      { label: "Notices", icon: Bell },
      { label: "Parent Updates", icon: Users },
    ],
    heroStats: [["Students", "Profiles"], ["Notices", "Push alerts"], ["Programs", "Admissions"], ["Parents", "Updates"]],
    problems: [
      card("Notices are scattered", "Important updates get buried across WhatsApp groups, PDFs, and calls.", Bell),
      card("Admissions follow-ups are manual", "Counselors need cleaner status tracking for inquiries, forms, and reminders.", ClipboardList),
      card("Students and parents lack one dashboard", "Attendance, assignments, notices, events, and payments need one accessible view.", GraduationCap),
    ],
    includes: [
      card("Student dashboard", "Show class updates, notices, assignments, and quick actions.", GraduationCap),
      card("Course and class updates", "Publish program, batch, and timetable updates.", BookOpen),
      card("Admissions flow", "Capture program interest and counselor follow-up context.", ClipboardList),
      card("Assignments", "Share tasks, submissions, deadlines, and teacher feedback.", ClipboardCheck),
      card("Parent updates", "Keep guardians informed with alerts and dashboards.", Users),
      card("Push notifications", "Send reminders for notices, events, fees, and counseling calls.", Bell),
    ],
    modules: [
      moduleCard("Student Dashboard", GraduationCap, ["Class summary", "Tasks", "Progress"]),
      moduleCard("Course Updates", BookOpen, ["Programs", "Batches", "Timetable"]),
      moduleCard("Notices", Bell, ["Announcements", "Priority alerts", "Read status"]),
      moduleCard("Assignments", ClipboardCheck, ["Homework", "Submissions", "Teacher notes"]),
      moduleCard("Admissions", ClipboardList, ["Inquiry form", "Counselor status", "Brochure"]),
      moduleCard("Parent View", Users, ["Guardian login", "Updates", "Reminders"]),
      moduleCard("Events", CalendarCheck, ["Calendar", "RSVP", "Alerts"]),
      moduleCard("Support", LifeBuoy, ["Help desk", "Chat", "Ticket status"]),
    ],
    flowTitle: "Education App Flow",
    flowSteps: [
      card("Open App", "Student or parent lands on a role-based dashboard.", Smartphone),
      card("Select Program/Class", "They view courses, classes, assignments, or admissions.", BookOpen),
      card("Submit Inquiry/Task", "The app captures inquiry, assignment, or support details.", ClipboardCheck),
      card("Counselor/Teacher Update", "Staff respond from the connected admin view.", Users),
      card("Notification", "The user receives status updates and reminders.", Bell),
    ],
    demoGallery: [
      demo("Student App", "Classes, notices and assignments", "EduRise Student", "A mobile hub for every learner", educationImages[0], GraduationCap, "violet", ["Classes", "Tasks", "Notices"]),
      demo("Parent App", "Guardian updates and reminders", "ParentBridge", "Keep parents connected daily", educationImages[1], Users, "blue", ["Updates", "Fees", "Events"]),
      demo("Admissions App", "Inquiry and counselor flow", "ApplyPath", "Convert inquiries into admissions", educationImages[2], ClipboardList, "emerald", ["Programs", "Forms", "Calls"]),
      demo("Coaching App", "Batch and practice flow", "SkillBridge App", "Manage batches and learner tasks", educationImages[1], BookOpen, "orange", ["Batches", "Practice", "Alerts"]),
      demo("Online Course App", "Course access and progress", "CourseNest", "Deliver courses on mobile", educationImages[0], Smartphone, "teal", ["Lessons", "Progress", "Support"]),
    ],
    demoContent: {
      appPreviewTitle: "Student and admissions app preview",
      flowTabLabel: "Student Flow",
      catalogTabLabel: "Programs",
      catalogTitle: "Programs and classes",
      catalogDescription: "Demo program cards for admissions, batches, and learning paths.",
      flowSteps: ["Open App", "Select Program/Class", "Submit Inquiry/Task", "Counselor/Teacher Update", "Notification"],
      catalogItems: [
        { title: "Grade 11 Science", description: "Admission inquiry with brochure and counselor callback.", meta: "Admissions open", icon: School },
        { title: "JEE Foundation Batch", description: "Batch details, schedule, fees, and demo class request.", meta: "Evening batch", icon: BookOpen },
        { title: "Parent Dashboard", description: "Notices, attendance, tasks, and fee reminders.", meta: "Guardian view", icon: Users },
      ],
      notifications: [
        { title: "Assignment due", description: "Physics worksheet submission closes tonight.", time: "15 min ago" },
        { title: "Counselor callback", description: "Admission counselor assigned for B.Com inquiry.", time: "1 hr ago" },
        { title: "Notice published", description: "Annual day schedule is available in the app.", time: "Today" },
      ],
      analyticsMetrics: [
        { label: "Admission Leads", value: "640", change: "+29%", icon: ClipboardList },
        { label: "Course Views", value: "8.2K", change: "+18%", icon: BookOpen },
        { label: "Notice Reads", value: "91%", change: "+12%", icon: Bell },
        { label: "Parent Activity", value: "4.7K", change: "+21%", icon: Users },
      ],
      analyticsSources: [["Programs", "35%"], ["Notices", "24%"], ["Assignments", "22%"], ["Parent view", "19%"]],
      appScreens: ["Home", "Programs", "Tasks", "Notices"],
      primaryAction: "Apply / Enquire",
      secondaryAction: "View Program",
      adminTitle: "Connected counselor and teacher dashboard",
      adminDescription: "Admissions, notices, parent updates, and learning activity sync with role-based teams.",
    },
    benefits: [
      card("Cleaner communication", "Move notices and updates into one official mobile channel.", Bell),
      card("Faster admissions", "Give counselors structured inquiries and follow-up context.", ClipboardList),
      card("Better parent trust", "Keep guardians informed without scattered chats.", Users),
      card("Student engagement", "Make tasks, classes, and reminders easier to follow.", GraduationCap),
    ],
    ctaTitle: "Build an education app students and parents actually use",
    ctaDescription:
      "Launch a mobile app for admissions, notices, class updates, assignments, and parent engagement.",
    pricingDescription: "Choose an education app package based on admissions, learning, and parent communication needs.",
    pricingPlans: [
      plan("Institute App Starter", `${rupee}40,000`, false, ["Student dashboard", "Notices", "Program pages", "Inquiry form", "Push notifications"]),
      plan("Education App Growth", `${rupee}85,000`, true, ["Admissions flow", "Assignments", "Parent view", "Counselor status", "Analytics dashboard"]),
      plan("Campus App Suite", `${rupee}1,60,000+`, false, ["Role-based access", "Fee reminders", "Teacher workflows", "LMS hooks", "Custom reports"]),
    ],
    testimonials: [
      { quote: "The demo made notices, parent updates, and admissions feel much less fragmented.", name: "Meera Rao", role: "Sample provider - Academy director" },
      { quote: "Counselor follow-ups finally had a simple app flow our team could understand.", name: "Rohan Iyer", role: "Demo brand - Coaching institute" },
      { quote: "The parent view is exactly the kind of clear communication schools need.", name: "Anika Sen", role: "Sample provider - School admin" },
    ],
    trustItems: [
      { title: "Student Data Privacy", icon: ShieldCheck },
      { title: "Secure Login", icon: LockKeyhole },
      { title: "Admission Form Protection", icon: FileCheck2 },
      { title: "Role-Based Access", icon: Users },
      { title: "Regular Backups", icon: ClipboardCheck },
    ],
  }),
};

industryMobileAppPages.manufacturing = createPage({
  industrySlug: "manufacturing",
  industryName: "Manufacturing",
  eyebrow: "Manufacturing Mobile App",
  title: "Manufacturing Mobility That Moves Business Forward",
  highlight: "Moves Business Forward",
  description:
    "A powerful mobile app for dealers and internal teams to manage catalogs, orders, approvals, dispatches, and inventory — all in real time.",
  primaryRoute: "/industries/manufacturing/mobile-app-development",
  aliases: ["mobile-app-development", "mobile-app"],
  keywords: ["manufacturing mobile app", "dealer ordering app", "inventory app", "dispatch tracking app"],
  serviceType: "Manufacturing Mobile App Development",
  heroImage: manufacturingImages[0],
  heroBrand: "IronPeak Connect",
  heroHeadline: "Dealer Operations",
  heroSubtext:
    "Give dealers and internal teams a connected app for catalogs, orders and more.",
  heroChips: [
    { label: "Product Catalog", icon: PackageSearch },
    { label: "Dealer Orders", icon: Truck },
    { label: "Approvals", icon: ClipboardCheck },
    { label: "Dispatch Tracking", icon: Route },
  ],
  heroStats: [["Catalog", "Products"], ["Orders", "Requests"], ["Dispatch", "Tracking"], ["Admin", "Sync"]],
  problems: [
    card("Dealers call manually for stock", "Teams spend hours answering availability, pricing, and product-fit questions.", PackageSearch),
    card("Approvals are slow", "Order, credit, and dispatch approvals move through disconnected calls and spreadsheets.", ClipboardCheck),
    card("Order and dispatch updates are scattered", "Dealers and teams lack one reliable view of order status and documents.", Truck),
  ],
  includes: [
    card("Product catalog", "Mobile catalog with categories, specs, documents, and availability.", PackageSearch),
    card("Dealer order request", "Let dealers request orders or RFQs with quantity and notes.", Truck),
    card("Inventory visibility", "Show controlled stock availability or category-level signals.", BarChart3),
    card("Approval flow", "Route requests to sales, finance, or dispatch teams.", ClipboardCheck),
    card("Dispatch tracking", "Share status, expected dates, and shipment notes.", Route),
    card("Document upload", "Collect purchase orders, GST, invoices, and dispatch documents.", FileText),
  ],
  modules: [
    moduleCard("Dealer App", Users, ["Dealer login", "Order history", "Account notes"]),
    moduleCard("Product Catalog", PackageSearch, ["Categories", "Specs", "Downloads"]),
    moduleCard("Order Requests", Truck, ["Quantity", "RFQ notes", "Approval status"]),
    moduleCard("Inventory", BarChart3, ["Stock signal", "Low-stock alerts", "SKU details"]),
    moduleCard("Approvals", ClipboardCheck, ["Sales approval", "Credit check", "Dispatch clear"]),
    moduleCard("Dispatch Tracking", Route, ["Shipment stage", "ETA", "Proof"]),
    moduleCard("Documents", FileText, ["PO upload", "Invoices", "Certificates"]),
    moduleCard("Admin Sync", Factory, ["ERP handoff", "Dealer reports", "Team dashboard"]),
  ],
  flowTitle: "Dealer Ordering App Flow",
  flowSteps: [
    card("Dealer Login", "Dealer accesses catalog and account-specific information.", UserCheck),
    card("View Catalog", "They review products, specs, and stock signals.", PackageSearch),
    card("Request Order/RFQ", "Quantity, requirement, and documents are submitted.", ClipboardList),
    card("Approval", "Internal teams review and approve the request.", ClipboardCheck),
    card("Dispatch Tracking", "Dealer receives status, ETA, and shipment updates.", Route),
  ],
  demoGallery: [
    demo("Dealer Ordering App", "B2B order requests", "IronPeak Dealer", "Request orders without long calls", manufacturingImages[0], Truck, "emerald", ["Catalog", "RFQ", "Dispatch"]),
    demo("Inventory App", "Stock visibility for teams", "StockLine", "Know stock before quoting", manufacturingImages[1], BarChart3, "blue", ["Stock", "Alerts", "SKUs"]),
    demo("Dispatch Tracking App", "Shipment status and proof", "DispatchPro", "Keep dealers updated after approval", manufacturingImages[2], Route, "orange", ["ETA", "Proof", "Status"]),
    demo("Approval App", "Internal approval workflow", "ApproveDesk", "Move requests through teams faster", manufacturingImages[1], ClipboardCheck, "violet", ["Sales", "Credit", "Dispatch"]),
    demo("B2B Catalog App", "Product discovery for dealers", "Apex Catalog", "Show products, specs and documents", manufacturingImages[0], PackageSearch, "teal", ["Specs", "Docs", "RFQ"]),
  ],
  demoContent: {
    appPreviewTitle: "Dealer ordering app preview",
    flowTabLabel: "RFQ Flow",
    catalogTabLabel: "Product Catalog",
    catalogTitle: "B2B product catalog",
    catalogDescription: "Demo catalog cards with product details, stock signals, and RFQ actions.",
    flowSteps: ["Dealer Login", "View Catalog", "Request Order/RFQ", "Approval", "Dispatch Tracking"],
    catalogItems: [
      { title: "Industrial Pump A12", description: "High-duty pump for factory applications.", meta: "Stock: Medium", icon: Factory },
      { title: "Precision Tool Kit", description: "Dealer pack for repair and assembly teams.", meta: "MOQ: 25 units", icon: Wrench },
      { title: "Export Grade Components", description: "Documentation-ready component batch.", meta: "RFQ required", icon: PackageCheck },
    ],
    notifications: [
      { title: "RFQ approved", description: "Your 120-unit pump RFQ moved to dispatch review.", time: "20 min ago" },
      { title: "Stock update", description: "Precision Tool Kit is back in medium stock.", time: "2 hrs ago" },
      { title: "Dispatch ETA", description: "Order IP-402 expected to dispatch tomorrow.", time: "Today" },
    ],
    analyticsMetrics: [
      { label: "RFQs", value: "318", change: "+27%", icon: ClipboardList },
      { label: "Catalog Views", value: "9.7K", change: "+16%", icon: PackageSearch },
      { label: "Dealer Orders", value: "184", change: "+22%", icon: Truck },
      { label: "Approval Time", value: "31%", change: "faster", icon: ClipboardCheck },
    ],
    analyticsSources: [["Catalog", "42%"], ["Dealer login", "25%"], ["RFQ follow-up", "21%"], ["Dispatch alerts", "12%"]],
    appScreens: ["Catalog", "RFQ", "Approvals", "Dispatch"],
    primaryAction: "Request Quote",
    secondaryAction: "View Catalog",
    adminTitle: "Connected B2B operations dashboard",
    adminDescription: "Catalog views, dealer requests, approvals, documents, and dispatch updates stay connected.",
  },
  benefits: [
    card("Fewer stock calls", "Give dealers a clear catalog and availability experience.", PackageSearch),
    card("Faster approvals", "Move order requests through teams with visible stages.", ClipboardCheck),
    card("Better dealer experience", "Share updates, documents, and dispatch status quickly.", Truck),
    card("Admin visibility", "Track demand, approvals, and product interest from one dashboard.", BarChart3),
  ],
  ctaTitle: "Build a manufacturing app for dealers and B2B coordination",
  ctaDescription:
    "Launch mobile workflows for catalogs, RFQs, approvals, dispatch, documents, and admin reporting.",
  pricingDescription: "Choose a manufacturing app package based on catalog, dealer, and dispatch depth.",
  pricingPlans: [
    plan("Industrial App Starter", `${rupee}55,000`, false, ["Product catalog", "Dealer inquiry", "Basic RFQ", "Notifications", "Admin handoff"]),
    plan("B2B App Growth", `${rupee}1,10,000`, true, ["Dealer login", "Order requests", "Approval flow", "Dispatch tracking", "Analytics dashboard"]),
    plan("Manufacturing App Suite", `${rupee}2,00,000+`, false, ["ERP hooks", "Document workflows", "Dealer roles", "Inventory sync", "Custom reports"]),
  ],
  testimonials: [
    { quote: "The dealer catalog and RFQ flow matched the way our distributors actually ask for stock.", name: "Kunal Mehta", role: "Sample provider - Industrial supplier" },
    { quote: "Approval visibility was the biggest win in the demo app.", name: "Asha Nair", role: "Demo brand - Manufacturing team" },
    { quote: "Dispatch updates inside the app would reduce so many status calls.", name: "Dev Shah", role: "Sample provider - Export business" },
  ],
  trustItems: [
    { title: "B2B Inquiry Privacy", icon: ShieldCheck },
    { title: "Secure Dealer Login", icon: LockKeyhole },
    { title: "RFQ Data Protection", icon: FileCheck2 },
    { title: "Document Controls", icon: FileText },
    { title: "Regular Backups", icon: ClipboardCheck },
  ],
});

industryMobileAppPages.retail = createPage({
  industrySlug: "retail",
  industryName: "Retail",
  eyebrow: "Retail Mobile App",
  title: "Retail Mobile App For Catalog, Offers And Repeat Sales",
  highlight: "Catalog, Offers And Repeat Sales",
  description:
    "A retail mobile app for product catalog, cart or order inquiry, offers, loyalty, reviews, and customer support.",
  primaryRoute: "/industries/retail/mobile-app-development",
  aliases: ["mobile-app-development", "mobile-app"],
  keywords: ["retail mobile app", "shopping app", "loyalty app", "catalog app"],
  serviceType: "Retail Mobile App Development",
  heroImage: retailImages[0],
  heroBrand: "StyleKart App",
  heroHeadline: "Bring catalog, offers and loyalty into one shopping app",
  heroSubtext:
    "Help customers browse products, save offers, request orders, track purchases, and return for repeat buying.",
  heroChips: [
    { label: "Product Catalog", icon: ShoppingBag },
    { label: "Offers", icon: Tags },
    { label: "Order Flow", icon: PackageCheck },
    { label: "Loyalty", icon: Star },
  ],
  heroStats: [["Catalog", "Products"], ["Offers", "Campaigns"], ["Orders", "Tracking"], ["Loyalty", "Rewards"]],
  problems: [
    card("Customers forget offers", "Promotions disappear after one social post or message broadcast.", Tags),
    card("Repeat buying is weak", "Customers need an easier way to discover, save, and return to products.", Star),
    card("Order inquiries are manual", "Stock checks, pickup requests, and order status updates create repetitive work.", PackageCheck),
  ],
  includes: [
    card("Product catalog", "Show categories, SKUs, best sellers, and new arrivals.", ShoppingBag),
    card("Cart/order inquiry", "Let customers add products and submit order or stock requests.", PackageCheck),
    card("Offers", "Promote deals, coupons, festive campaigns, and flash alerts.", Tags),
    card("Loyalty points", "Reward repeat customers with points, tiers, and perks.", Star),
    card("Order tracking", "Share order, pickup, delivery, or inquiry status.", Truck),
    card("Customer support", "Give customers a simple help and review flow.", LifeBuoy),
  ],
  modules: [
    moduleCard("Catalog", ShoppingBag, ["Categories", "Product cards", "Search"]),
    moduleCard("Offers", Tags, ["Coupons", "Campaigns", "Push alerts"]),
    moduleCard("Cart/Inquiry", PackageCheck, ["Cart list", "Stock request", "Checkout handoff"]),
    moduleCard("Loyalty", Star, ["Points", "Rewards", "Tiers"]),
    moduleCard("Orders", Truck, ["Status", "Pickup", "Delivery"]),
    moduleCard("Push Notifications", Bell, ["Offer alerts", "Order status", "Restock"]),
    moduleCard("Reviews", MessageCircle, ["Ratings", "Feedback", "Proof"]),
    moduleCard("Support", LifeBuoy, ["Help desk", "Returns", "Chat"]),
  ],
  flowTitle: "Retail Shopping App Flow",
  flowSteps: [
    card("Browse Catalog", "Customers discover products, categories, and offers.", ShoppingBag),
    card("Add Product", "They save products or add to cart/inquiry.", PackageCheck),
    card("Order/Inquiry", "The app captures quantity, variant, address, and contact.", ClipboardList),
    card("Payment/Confirmation", "Customer receives confirmation or payment instructions.", CreditCard),
    card("Tracking", "Order status and support updates stay in the app.", Truck),
  ],
  demoGallery: [
    demo("Shopping App", "Product discovery and order flow", "StyleKart", "Browse, save and order products", retailImages[0], ShoppingBag, "rose", ["Catalog", "Cart", "Orders"]),
    demo("Loyalty App", "Rewards and repeat buying", "FreshRewards", "Turn customers into repeat buyers", retailImages[1], Star, "orange", ["Points", "Rewards", "Tiers"]),
    demo("Offers App", "Campaign and promo alerts", "DealPulse", "Make offers easy to discover", retailImages[2], Tags, "violet", ["Coupons", "Alerts", "Campaigns"]),
    demo("Order Tracking App", "Status and support", "OrderNest", "Keep shoppers updated after inquiry", retailImages[1], Truck, "blue", ["Status", "Pickup", "Support"]),
    demo("Store App", "Local retail mobile presence", "UrbanStore", "Bring store trust to mobile", retailImages[0], Store, "teal", ["Store", "Reviews", "Contact"]),
  ],
  demoContent: {
    appPreviewTitle: "Retail shopping app preview",
    flowTabLabel: "Order Flow",
    catalogTabLabel: "Catalog",
    catalogTitle: "Featured retail catalog",
    catalogDescription: "Demo products with offers, stock signals, and inquiry actions.",
    flowSteps: ["Browse Catalog", "Add Product", "Order/Inquiry", "Payment/Confirmation", "Tracking"],
    catalogItems: [
      { title: "Festive Kurta Set", description: "Popular fashion item with size variants.", meta: "20% offer", icon: ShoppingBag },
      { title: "Organic Grocery Pack", description: "FreshBasket weekly essentials bundle.", meta: "Same-day pickup", icon: Store },
      { title: "Wireless Earbuds", description: "Electronics item with warranty and reviews.", meta: "In stock", icon: PackageCheck },
    ],
    notifications: [
      { title: "Offer unlocked", description: "You have 15% off on wishlist products.", time: "12 min ago" },
      { title: "Order confirmed", description: "Your pickup order is being prepared.", time: "1 hr ago" },
      { title: "Loyalty points", description: "120 points added after your last purchase.", time: "Today" },
    ],
    analyticsMetrics: [
      { label: "Product Views", value: "22K", change: "+26%", icon: ShoppingBag },
      { label: "Order Inquiries", value: "1.1K", change: "+34%", icon: PackageCheck },
      { label: "Offer Clicks", value: "4.8K", change: "+19%", icon: Tags },
      { label: "Repeat Users", value: "62%", change: "+14%", icon: Star },
    ],
    analyticsSources: [["Catalog", "40%"], ["Offers", "27%"], ["Push alerts", "21%"], ["Reviews", "12%"]],
    appScreens: ["Home", "Catalog", "Offers", "Orders"],
    primaryAction: "Order / Enquire",
    secondaryAction: "Browse Catalog",
    adminTitle: "Connected retail dashboard",
    adminDescription: "Product views, offer engagement, order inquiries, and loyalty activity sync to admin.",
  },
  benefits: [
    card("Repeat purchase growth", "Bring customers back with offers and loyalty loops.", Star),
    card("Better product discovery", "Make catalog browsing easier than message-based selling.", ShoppingBag),
    card("Fewer manual updates", "Use order status and push notifications for common updates.", Bell),
    card("Customer insights", "Track products, offers, reviews, and repeat buying behavior.", BarChart3),
  ],
  ctaTitle: "Build a retail app for catalog, offers and repeat sales",
  ctaDescription:
    "Launch a mobile app for product discovery, order inquiries, loyalty, reviews, and customer support.",
  pricingDescription: "Choose a retail app package based on catalog depth, loyalty, and order workflows.",
  pricingPlans: [
    plan("Retail App Starter", `${rupee}45,000`, false, ["Product catalog", "Offer sections", "Order inquiry", "Push notifications", "Basic admin"]),
    plan("Commerce App Growth", `${rupee}95,000`, true, ["Cart flow", "Order tracking", "Loyalty points", "Reviews", "Analytics dashboard"]),
    plan("Retail App Suite", `${rupee}1,80,000+`, false, ["Payment gateway", "Inventory hooks", "Customer segments", "Campaign automation", "Custom reports"]),
  ],
  testimonials: [
    { quote: "The app flow showed how offers and orders can finally sit in one customer experience.", name: "Tara Shah", role: "Sample provider - Retail brand" },
    { quote: "Loyalty, product discovery, and notifications felt practical for repeat buying.", name: "Ishan Bedi", role: "Demo brand - Local store chain" },
    { quote: "The order tracking screen would reduce so many customer follow-up calls.", name: "Pooja Menon", role: "Sample provider - D2C seller" },
  ],
  trustItems: [
    { title: "Customer Data Privacy", icon: ShieldCheck },
    { title: "Secure Forms", icon: LockKeyhole },
    { title: "Order Inquiry Protection", icon: FileCheck2 },
    { title: "Payment-Ready Structure", icon: CreditCard },
    { title: "Regular Backups", icon: ClipboardCheck },
  ],
});

const financeBase = createPage({
  industrySlug: "finance",
  industryName: "Finance",
  eyebrow: "Finance Mobile App",
  title: "Finance Mobile App For Secure Consultations And Documents",
  highlight: "Secure Consultations And Documents",
  description:
    "A finance mobile app for secure consultation requests, client dashboards, document checklists, and advisor updates.",
  primaryRoute: "/industries/finance/mobile-app",
  aliases: ["mobile-app-development", "mobile-app"],
  keywords: ["finance mobile app", "financial advisor app", "document checklist app", "consultation app"],
  serviceType: "Finance Mobile App Development",
  heroImage: financeImages[0],
  heroBrand: "FinTrust App",
  heroHeadline: "Client services, documents and advisor updates in one app",
  heroSubtext:
    "Let clients request services, upload documents, book consultations, and follow advisor updates securely.",
  heroChips: [
    { label: "Client Dashboard", icon: Users },
    { label: "Consultation Booking", icon: CalendarCheck },
    { label: "Document Checklist", icon: FileCheck2 },
    { label: "Secure Forms", icon: ShieldCheck },
  ],
  heroStats: [["Clients", "Dashboard"], ["Docs", "Checklist"], ["Consults", "Booking"], ["Advisor", "Updates"]],
  problems: [
    card("Client documents are scattered", "Documents arrive through email, chat, and paper without one checklist.", FileCheck2),
    card("Consultation status is unclear", "Clients do not know what is pending, reviewed, or approved.", CalendarCheck),
    card("Advisor updates are manual", "Advisors spend time repeating status and document readiness updates.", UserCheck),
  ],
  includes: [
    card("Client dashboard", "Show service status, documents, reminders, and next steps.", Users),
    card("Service requests", "Capture loan, tax, accounting, advisory, or investment needs.", Landmark),
    card("Document checklist", "Guide clients through required uploads and pending items.", FileCheck2),
    card("Consultation booking", "Let clients request advisory slots with context.", CalendarCheck),
    card("Advisor updates", "Share status, notes, and follow-up tasks from the team.", UserCheck),
    card("Secure forms", "Collect sensitive inquiry details with privacy-aware structure.", ShieldCheck),
  ],
  modules: [
    moduleCard("Client Dashboard", Users, ["Status", "Documents", "Next steps"]),
    moduleCard("Services", Landmark, ["Service list", "Eligibility", "Request forms"]),
    moduleCard("Consultation Booking", CalendarCheck, ["Slots", "Advisor notes", "Reminders"]),
    moduleCard("Document Checklist", FileCheck2, ["Uploads", "Pending docs", "Review state"]),
    moduleCard("Advisor Updates", UserCheck, ["Assigned advisor", "Status notes", "Tasks"]),
    moduleCard("Secure Forms", ShieldCheck, ["Private intake", "Validation", "Consent"]),
    moduleCard("Notifications", Bell, ["Due dates", "Status", "Follow-ups"]),
    moduleCard("Reports", BarChart3, ["Service demand", "Completion", "Advisor output"]),
  ],
  flowTitle: "Finance App Client Flow",
  flowSteps: [
    card("Choose Service", "Client selects advisory, tax, loan, accounting, or investment support.", Landmark),
    card("Submit Details", "The app captures goals, timeline, and service context.", ClipboardList),
    card("Upload Documents", "Client completes the checklist with secure uploads.", FileCheck2),
    card("Advisor Review", "Advisor reviews and updates status.", UserCheck),
    card("Follow-up", "Client gets consultation reminders and next steps.", Bell),
  ],
  demoGallery: [
    demo("Client Advisory App", "Services and consultation requests", "FinTrust Client", "Give clients a secure advisory hub", financeImages[0], Landmark, "blue", ["Services", "Consults", "Docs"]),
    demo("Document Checklist App", "Uploads and review status", "DocReady", "Make documents easier to complete", financeImages[1], FileCheck2, "emerald", ["Checklist", "Upload", "Review"]),
    demo("Consultation App", "Advisor booking flow", "AdvisorDesk", "Book calls with the right context", financeImages[2], CalendarCheck, "violet", ["Booking", "Advisor", "Reminder"]),
    demo("Wealth Dashboard App", "Client portfolio and updates", "WealthAxis", "Show client updates in one app", financeImages[1], BarChart3, "teal", ["Dashboard", "Updates", "Reports"]),
  ],
  demoContent: {
    appPreviewTitle: "Finance client app preview",
    flowTabLabel: "Consultation Flow",
    catalogTabLabel: "Services",
    catalogTitle: "Finance services",
    catalogDescription: "Demo service cards with consultation, document, and advisor actions.",
    flowSteps: ["Choose Service", "Submit Details", "Upload Documents", "Advisor Review", "Follow-up"],
    catalogItems: [
      { title: "Loan Consultation", description: "Eligibility guidance and document checklist.", meta: "Advisor review", icon: CreditCard },
      { title: "Tax Planning", description: "Consultation request with due date reminders.", meta: "Secure intake", icon: FileText },
      { title: "Investment Advisory", description: "Goal-based advisory request and profile setup.", meta: "Consultation", icon: BarChart3 },
    ],
    notifications: [
      { title: "Document pending", description: "Bank statement upload is still required.", time: "20 min ago" },
      { title: "Advisor assigned", description: "Ananya will review your tax planning request.", time: "2 hrs ago" },
      { title: "Consultation reminder", description: "Your advisor call starts tomorrow at 11 AM.", time: "Today" },
    ],
    analyticsMetrics: [
      { label: "Consultation Leads", value: "540", change: "+23%", icon: CalendarCheck },
      { label: "Doc Completion", value: "78%", change: "+18%", icon: FileCheck2 },
      { label: "Service Views", value: "6.4K", change: "+17%", icon: Landmark },
      { label: "Advisor Follow-ups", value: "1.2K", change: "+21%", icon: UserCheck },
    ],
    analyticsSources: [["Services", "37%"], ["Documents", "26%"], ["Consultation", "24%"], ["Insights", "13%"]],
    appScreens: ["Home", "Services", "Docs", "Advisor"],
    primaryAction: "Book Consultation",
    secondaryAction: "Upload Documents",
    adminTitle: "Connected advisory dashboard",
    adminDescription: "Client requests, documents, advisors, reminders, and service demand sync securely.",
  },
  benefits: [
    card("Secure client intake", "Collect service and document details in a structured app flow.", ShieldCheck),
    card("Clear document status", "Help clients understand what is pending or reviewed.", FileCheck2),
    card("Better advisor follow-up", "Give advisors context before every call.", UserCheck),
    card("Service analytics", "Track demand, completion, and client progress.", BarChart3),
  ],
  ctaTitle: "Build a finance mobile app clients can trust",
  ctaDescription:
    "Launch secure client dashboards, consultation booking, document checklists, reminders, and advisor updates.",
  pricingDescription: "Choose a finance app package based on security, document, and advisory workflow needs.",
  pricingPlans: [
    plan("Finance App Starter", `${rupee}60,000`, false, ["Client dashboard", "Service requests", "Basic document checklist", "Consultation form", "Secure login"]),
    plan("Advisory App Growth", `${rupee}1,20,000`, true, ["Consultation booking", "Advisor updates", "Document uploads", "Notifications", "Analytics dashboard"]),
    plan("Finance App Suite", `${rupee}2,20,000+`, false, ["Advanced roles", "Compliance-friendly flows", "Document review stages", "CRM integration", "Custom reports"]),
  ],
  testimonials: [
    { quote: "The document checklist and advisor flow makes finance onboarding feel much clearer.", name: "Nitin Rao", role: "Sample provider - Finance consultant" },
    { quote: "Clients knowing status inside the app would reduce repeated follow-up calls.", name: "Priya Kapoor", role: "Demo brand - Advisory team" },
    { quote: "The secure consultation flow is a strong fit for tax and loan advisory work.", name: "Amit Suri", role: "Sample provider - Accounting firm" },
  ],
  trustItems: [
    { title: "Client Data Privacy", icon: ShieldCheck },
    { title: "Secure Login", icon: LockKeyhole },
    { title: "Document Protection", icon: FileCheck2 },
    { title: "Compliance-Friendly Structure", icon: ClipboardCheck },
    { title: "Regular Backups", icon: FileText },
  ],
});

industryMobileAppPages.finance = financeBase;

industryMobileAppPages.insurance = createPage({
  ...financeBase,
  industrySlug: "insurance",
  industryName: "Insurance",
  eyebrow: "Insurance Mobile App",
  title: "Insurance Mobile App For Policies, Claims And Renewals",
  highlight: "Policies, Claims And Renewals",
  description:
    "An insurance mobile app for policy access, claim requests, renewals, documents, premium reminders, and agent support.",
  primaryRoute: "/industries/insurance/mobile-app",
  aliases: ["mobile-app-development", "mobile-app"],
  keywords: ["insurance mobile app", "policyholder app", "claim support app", "renewal app"],
  serviceType: "Insurance Mobile App Development",
  heroImage: insuranceImages[0],
  heroBrand: "PolicyFirst App",
  heroHeadline: "Policies, claims and renewals in one customer app",
  heroSubtext:
    "Help policyholders view policies, upload claim documents, receive renewal reminders, and chat with agents.",
  heroChips: [
    { label: "Policy Dashboard", icon: ShieldCheck },
    { label: "Claim Request", icon: ClipboardList },
    { label: "Renewal Reminders", icon: Bell },
    { label: "Agent Chat", icon: MessageCircle },
  ],
  heroStats: [["Policies", "Dashboard"], ["Claims", "Requests"], ["Renewals", "Reminders"], ["Agents", "Support"]],
  problems: [
    card("Policy documents are hard to find", "Customers lose track of policy details, coverage, and documents.", ShieldCheck),
    card("Claim requests are manual", "Claims need documents, status, and agent review in one flow.", ClipboardList),
    card("Renewal follow-ups are missed", "Teams miss renewal timing when reminders depend on manual calls.", Bell),
  ],
  includes: [
    card("Policy dashboard", "Show policies, coverage details, and document links.", ShieldCheck),
    card("Claim request", "Capture claim type, incident details, and required documents.", ClipboardList),
    card("Renewal reminders", "Notify policyholders before important renewal windows.", Bell),
    card("Document upload", "Collect claim, ID, policy, and support documents.", FileCheck2),
    card("Agent chat", "Connect customers to assigned agents with context.", MessageCircle),
    card("Status tracking", "Show claim, renewal, and support ticket progress.", ListChecks),
  ],
  modules: [
    moduleCard("Policy Dashboard", ShieldCheck, ["Policy list", "Coverage", "Documents"]),
    moduleCard("Claims", ClipboardList, ["Claim type", "Upload docs", "Status"]),
    moduleCard("Renewals", Bell, ["Due dates", "Reminders", "Payment CTA"]),
    moduleCard("Documents", FileCheck2, ["Policy files", "Claim docs", "Receipts"]),
    moduleCard("Agent Chat", MessageCircle, ["Assigned agent", "Context", "Follow-up"]),
    moduleCard("Premium Reminders", CreditCard, ["Due alerts", "Payment status", "Receipts"]),
    moduleCard("Status Tracking", ListChecks, ["Claim stage", "Renewal stage", "Support"]),
    moduleCard("Support", LifeBuoy, ["Tickets", "FAQs", "Callbacks"]),
  ],
  flowTitle: "Policyholder App Flow",
  flowSteps: [
    card("Select Policy", "Policyholder opens a policy or coverage area.", ShieldCheck),
    card("Submit Claim/Renewal", "They request claim support or renewal help.", ClipboardList),
    card("Upload Docs", "Required documents are uploaded in the app.", FileCheck2),
    card("Agent Review", "Agent reviews request and updates the customer.", UserCheck),
    card("Status Updates", "The app sends claim, renewal, or premium reminders.", Bell),
  ],
  demoGallery: [
    demo("Policyholder App", "Policy access and documents", "SecureLife", "Put policy details in every customer's pocket", insuranceImages[0], ShieldCheck, "blue", ["Policies", "Docs", "Agent"]),
    demo("Claim Support App", "Claim intake and status", "ClaimPath", "Make claim requests easier to track", insuranceImages[1], ClipboardList, "emerald", ["Claim", "Upload", "Status"]),
    demo("Renewal App", "Renewal reminders and actions", "RenewNow", "Reduce missed renewals", insuranceImages[2], Bell, "orange", ["Renewal", "Reminder", "Premium"]),
    demo("Agent Support App", "Customer-agent communication", "AgentDesk", "Keep customers and agents connected", insuranceImages[1], MessageCircle, "violet", ["Chat", "Tasks", "Follow-up"]),
  ],
  demoContent: {
    ...financeBase.demoContent,
    appPreviewTitle: "Policyholder app preview",
    flowTabLabel: "Policy Flow",
    catalogTabLabel: "Policies",
    catalogTitle: "Policy cards",
    catalogDescription: "Demo policies with coverage, renewal, claim, and document actions.",
    flowSteps: ["Select Policy", "Submit Claim/Renewal", "Upload Docs", "Agent Review", "Status Updates"],
    catalogItems: [
      { title: "Health Protect Plus", description: "Family coverage with claim support.", meta: "Renewal in 28 days", icon: ShieldCheck },
      { title: "Vehicle Secure", description: "Motor policy with claim document checklist.", meta: "Claim support ready", icon: Car },
      { title: "Life Assure", description: "Life coverage with nominee details.", meta: "Premium due soon", icon: FileText },
    ],
    notifications: [
      { title: "Renewal reminder", description: "Health Protect Plus renews in 28 days.", time: "25 min ago" },
      { title: "Claim document needed", description: "Upload repair estimate for Vehicle Secure claim.", time: "2 hrs ago" },
      { title: "Agent update", description: "Your assigned agent reviewed your policy request.", time: "Today" },
    ],
    analyticsMetrics: [
      { label: "Policy Inquiries", value: "820", change: "+25%", icon: ShieldCheck },
      { label: "Claim Requests", value: "214", change: "+18%", icon: ClipboardList },
      { label: "Renewal Leads", value: "390", change: "+31%", icon: Bell },
      { label: "Agent Chats", value: "1.4K", change: "+22%", icon: MessageCircle },
    ],
    analyticsSources: [["Policies", "36%"], ["Claims", "26%"], ["Renewals", "24%"], ["Agent chat", "14%"]],
    appScreens: ["Policies", "Claims", "Renewals", "Agent"],
    primaryAction: "Get Policy Quote",
    secondaryAction: "Submit Claim",
    adminTitle: "Connected insurance team dashboard",
    adminDescription: "Policies, claims, renewal reminders, documents, and agent follow-ups stay visible.",
  },
  benefits: [
    card("Easier policy access", "Keep policy details, coverage, documents, and support actions in one app.", ShieldCheck),
    card("Cleaner claim intake", "Guide customers through claim details and document uploads.", ClipboardList),
    card("Fewer missed renewals", "Use app reminders to keep renewal action visible.", Bell),
    card("Agent-ready follow-up", "Give agents claim, policy, and customer context before every call.", UserCheck),
  ],
  ctaTitle: "Build an insurance app for policyholders and agents",
  ctaDescription:
    "Launch policy access, claim requests, renewals, document uploads, status tracking, and support in one mobile app.",
  pricingDescription: "Choose an insurance app package based on policy, claim, renewal, and agent workflows.",
  pricingPlans: [
    plan("Insurance App Starter", `${rupee}50,000`, false, ["Policy dashboard", "Claim form", "Renewal reminders", "Document upload", "Secure login"]),
    plan("Policy App Growth", `${rupee}1,00,000`, true, ["Agent chat", "Status tracking", "Premium reminders", "Notifications", "Analytics dashboard"]),
    plan("Insurance App Suite", `${rupee}1,90,000+`, false, ["Agent roles", "Claim stages", "Policy integrations", "Renewal automation", "Custom reports"]),
  ],
  testimonials: [
    { quote: "The policy and claim flow makes support feel simple for policyholders.", name: "Kavya Sharma", role: "Sample provider - Insurance advisor" },
    { quote: "Renewal reminders and agent chat are exactly what our desk needs.", name: "Manav Jain", role: "Demo brand - Policy team" },
    { quote: "Document upload inside the claim flow would reduce back-and-forth.", name: "Sara Dutta", role: "Sample provider - Claim consultant" },
  ],
  trustItems: [
    { title: "Policy Inquiry Privacy", icon: ShieldCheck },
    { title: "Secure Login", icon: LockKeyhole },
    { title: "Claim Data Protection", icon: FileCheck2 },
    { title: "Agent Access Controls", icon: Users },
    { title: "Regular Backups", icon: ClipboardCheck },
  ],
});

industryMobileAppPages.travel = createPage({
  ...financeBase,
  industrySlug: "travel",
  industryName: "Travel",
  eyebrow: "Travel Mobile App",
  title: "Travel Mobile App For Packages, Itineraries And Booking Inquiries",
  highlight: "Packages, Itineraries And Booking Inquiries",
  description:
    "A travel mobile app for packages, destinations, itineraries, booking inquiries, vouchers, trip alerts, and support.",
  primaryRoute: "/industries/travel/mobile-app",
  aliases: ["mobile-app-development", "mobile-app"],
  keywords: ["travel mobile app", "trip planner app", "itinerary app", "package booking app"],
  serviceType: "Travel Mobile App Development",
  heroImage: travelImages[0],
  heroBrand: "TripNest App",
  heroHeadline: "Packages, itineraries and trip support in one app",
  heroSubtext:
    "Let travelers browse packages, select dates, store vouchers, track trip updates, and request consultant help.",
  heroChips: [
    { label: "Packages", icon: Plane },
    { label: "Destinations", icon: MapPin },
    { label: "Itinerary", icon: Route },
    { label: "Booking Inquiry", icon: CalendarCheck },
  ],
  heroStats: [["Packages", "Browse"], ["Trips", "Itinerary"], ["Vouchers", "Storage"], ["Support", "Chat"]],
  problems: [
    card("Travelers lose itinerary details", "Plans, vouchers, inclusions, and timings are scattered across PDFs and chats.", Route),
    card("Package inquiry is slow", "Travelers need date, guest, destination, and budget capture in one flow.", CalendarCheck),
    card("Support is scattered", "Before-trip updates, documents, and urgent questions need one trusted channel.", LifeBuoy),
  ],
  includes: [
    card("Package browsing", "Show packages by destination, season, budget, and theme.", Plane),
    card("Destination pages", "Give travelers destination details, proof, and package options.", MapPin),
    card("Itinerary builder", "Preview day-wise plans, inclusions, and timings.", Route),
    card("Booking inquiry", "Capture dates, guests, budget, and preferences.", CalendarCheck),
    card("Voucher storage", "Keep vouchers and documents available offline-friendly.", FileText),
    card("Support chat", "Route travelers to the right consultant or support team.", MessageCircle),
  ],
  modules: [
    moduleCard("Packages", Plane, ["Themes", "Pricing", "Inclusions"]),
    moduleCard("Destinations", MapPin, ["Guides", "Gallery", "Best time"]),
    moduleCard("Itinerary", Route, ["Day plan", "Transfers", "Activities"]),
    moduleCard("Booking Inquiry", CalendarCheck, ["Dates", "Guests", "Budget"]),
    moduleCard("Vouchers", FileText, ["Hotel", "Flights", "Documents"]),
    moduleCard("Trip Alerts", Bell, ["Reminders", "Weather", "Updates"]),
    moduleCard("Support", MessageCircle, ["Consultant chat", "Help", "Emergency"]),
    moduleCard("Payments", CreditCard, ["Status", "Receipts", "Due alerts"]),
  ],
  flowTitle: "Travel App Booking Flow",
  flowSteps: [
    card("Browse Package", "Traveler explores packages and destinations.", Plane),
    card("Select Dates", "They choose travel dates, guest count, and preferences.", CalendarCheck),
    card("Submit Inquiry", "The app captures budget, package interest, and contact.", ClipboardList),
    card("Consultant Follow-up", "A consultant receives context and responds.", MessageCircle),
    card("Trip Updates", "Vouchers, itinerary, and alerts stay in the app.", Bell),
  ],
  demoGallery: [
    demo("Trip Planner App", "Plan and save itineraries", "TripNest Planner", "Plan every trip from one app", travelImages[0], Route, "blue", ["Itinerary", "Alerts", "Support"]),
    demo("Package Booking App", "Package inquiry flow", "GlobeWay", "Convert package views into inquiries", travelImages[1], Plane, "teal", ["Packages", "Dates", "Guests"]),
    demo("Itinerary App", "Day-wise trip details", "ItineraryHub", "Keep day plans and vouchers together", travelImages[2], FileText, "emerald", ["Vouchers", "Day Plan", "Docs"]),
    demo("Travel Support App", "Consultant and help flow", "TravelDesk", "Support travelers before and during trips", travelImages[1], MessageCircle, "orange", ["Chat", "Updates", "Help"]),
  ],
  demoContent: {
    ...financeBase.demoContent,
    appPreviewTitle: "Travel booking app preview",
    flowTabLabel: "Booking Flow",
    catalogTabLabel: "Packages",
    catalogTitle: "Travel packages",
    catalogDescription: "Demo packages with destinations, dates, inclusions, and inquiry CTA.",
    flowSteps: ["Browse Package", "Select Dates", "Submit Inquiry", "Consultant Follow-up", "Trip Updates"],
    catalogItems: [
      { title: "Bali Honeymoon Escape", description: "6 nights with private transfers and experiences.", meta: "Couples package", icon: Plane },
      { title: "Himachal Adventure", description: "Trekking, stays, and guided day-wise plan.", meta: "Adventure", icon: Route },
      { title: "Dubai Family Break", description: "Hotel, activities, visa support, and vouchers.", meta: "Family trip", icon: MapPin },
    ],
    notifications: [
      { title: "Itinerary updated", description: "Day 3 sightseeing timing has changed.", time: "10 min ago" },
      { title: "Voucher added", description: "Hotel voucher is ready in your trip wallet.", time: "1 hr ago" },
      { title: "Consultant reply", description: "Your Bali package quote has been updated.", time: "Today" },
    ],
    analyticsMetrics: [
      { label: "Package Views", value: "15.2K", change: "+28%", icon: Plane },
      { label: "Booking Inquiries", value: "760", change: "+33%", icon: CalendarCheck },
      { label: "Top Destination", value: "Bali", change: "+19%", icon: MapPin },
      { label: "Trip Alerts", value: "4.1K", change: "+24%", icon: Bell },
    ],
    analyticsSources: [["Packages", "41%"], ["Destinations", "24%"], ["Itinerary", "22%"], ["Support", "13%"]],
    appScreens: ["Packages", "Dates", "Itinerary", "Support"],
    primaryAction: "Plan Trip",
    secondaryAction: "View Packages",
    adminTitle: "Connected travel sales dashboard",
    adminDescription: "Package interest, inquiries, dates, vouchers, consultants, and trip updates stay connected.",
  },
  benefits: [
    card("Better trip clarity", "Keep itinerary, vouchers, inclusions, and alerts available in one app.", Route),
    card("Faster booking inquiries", "Capture dates, guests, budget, and preferences before consultant follow-up.", CalendarCheck),
    card("Stronger traveler support", "Give travelers a reliable channel before and during the trip.", MessageCircle),
    card("Package demand visibility", "Track destinations, package views, and seasonal inquiry patterns.", BarChart3),
  ],
  ctaTitle: "Build a travel app for packages, itineraries and trip support",
  ctaDescription:
    "Launch package browsing, booking inquiries, vouchers, alerts, and consultant support in one mobile experience.",
  pricingDescription: "Choose a travel app package based on package catalog, itinerary, and booking workflow needs.",
  pricingPlans: [
    plan("Travel App Starter", `${rupee}45,000`, false, ["Package browsing", "Destination pages", "Booking inquiry", "Trip alerts", "Basic admin"]),
    plan("Booking App Growth", `${rupee}95,000`, true, ["Itinerary builder", "Voucher storage", "Consultant follow-up", "Payment status", "Analytics dashboard"]),
    plan("Travel App Suite", `${rupee}1,80,000+`, false, ["Custom package builder", "Agent roles", "CRM integration", "Automated reminders", "Custom reports"]),
  ],
  testimonials: [
    { quote: "The itinerary and voucher flow fits exactly how travelers ask for trip updates.", name: "Rhea Thomas", role: "Sample provider - Travel consultant" },
    { quote: "Package inquiry with dates and guests would make sales follow-up faster.", name: "Kabir Khan", role: "Demo brand - Tour operator" },
    { quote: "The support app preview makes pre-trip communication feel organized.", name: "Maya Das", role: "Sample provider - Destination planner" },
  ],
  trustItems: [
    { title: "Booking Inquiry Privacy", icon: ShieldCheck },
    { title: "Secure Login", icon: LockKeyhole },
    { title: "Customer Data Protection", icon: FileCheck2 },
    { title: "Voucher Storage Controls", icon: FileText },
    { title: "Regular Backups", icon: ClipboardCheck },
  ],
});

industryMobileAppPages.automobile = createPage({
  ...financeBase,
  industrySlug: "automobile",
  industryName: "Automobile",
  eyebrow: "Automobile Mobile App",
  title: "Automobile Mobile App For Inventory, Test Drives And Service Booking",
  highlight: "Inventory, Test Drives And Service Booking",
  description:
    "An automobile mobile app for vehicle inventory, test drive booking, service booking, offers, finance inquiry, and customer updates.",
  primaryRoute: "/industries/automobile/mobile-app",
  aliases: ["mobile-app-development", "mobile-app"],
  keywords: ["automobile mobile app", "dealer app", "test drive app", "service booking app"],
  serviceType: "Automobile Mobile App Development",
  heroImage: automobileImages[0],
  heroBrand: "DriveMax App",
  heroHeadline: "Vehicle browsing, test drives and service updates in one app",
  heroSubtext:
    "Give customers a mobile app for inventory, test drives, service booking, finance inquiries, offers, reminders, and dealer chat.",
  heroChips: [
    { label: "Vehicle Inventory", icon: Car },
    { label: "Test Drive Booking", icon: CalendarCheck },
    { label: "Service Booking", icon: Wrench },
    { label: "Dealer Support", icon: MessageCircle },
  ],
  heroStats: [["Inventory", "Vehicles"], ["Drives", "Bookings"], ["Service", "Slots"], ["Offers", "Campaigns"]],
  problems: [
    card("Test drive booking is manual", "Customers need quick slot booking with vehicle and showroom context.", CalendarCheck),
    card("Service reminders are missed", "Customers forget service due dates, offers, and maintenance tasks.", Bell),
    card("Inventory inquiries are scattered", "Vehicle questions land across calls, forms, and chats without one record.", Car),
  ],
  includes: [
    card("Vehicle inventory", "Show models, variants, availability, pricing notes, and offers.", Car),
    card("Test drive booking", "Capture model, location, slot, and contact details.", CalendarCheck),
    card("Service booking", "Let customers pick service type, slot, and vehicle details.", Wrench),
    card("Offers", "Promote exchange, launch, finance, and service campaigns.", Tags),
    card("Finance inquiry", "Capture loan interest, budget, and document readiness.", CreditCard),
    card("Dealer support", "Route inquiries to sales or service teams.", MessageCircle),
  ],
  modules: [
    moduleCard("Inventory", Car, ["Models", "Variants", "Availability"]),
    moduleCard("Test Drive", CalendarCheck, ["Slots", "Vehicle", "Showroom"]),
    moduleCard("Service Booking", Wrench, ["Service type", "Vehicle info", "Slots"]),
    moduleCard("Offers", Tags, ["Launch offers", "Exchange", "Service deals"]),
    moduleCard("Finance Inquiry", CreditCard, ["Loan interest", "Budget", "Callback"]),
    moduleCard("Service History", FileText, ["Past visits", "Invoices", "Recommendations"]),
    moduleCard("Reminders", Bell, ["Service due", "Offer expiry", "Follow-up"]),
    moduleCard("Dealer Chat", MessageCircle, ["Sales chat", "Service support", "Updates"]),
  ],
  flowTitle: "Automobile App Flow",
  flowSteps: [
    card("Browse Vehicle", "Customer explores inventory, variants, and offers.", Car),
    card("Book Test Drive", "They select model, slot, and showroom.", CalendarCheck),
    card("Dealer Follow-up", "Sales team receives context and follows up.", MessageCircle),
    card("Service Booking", "Customer can schedule service and get reminders.", Wrench),
    card("Offer Updates", "App sends launch, finance, and service offers.", Bell),
  ],
  demoGallery: [
    demo("Dealer App", "Customer vehicle hub", "DriveMax", "Inventory and dealer support on mobile", automobileImages[0], Car, "orange", ["Inventory", "Offers", "Chat"]),
    demo("Test Drive App", "Slot booking and follow-up", "TestDrive Pro", "Make test drives easier to book", automobileImages[1], CalendarCheck, "blue", ["Slots", "Model", "Dealer"]),
    demo("Service Booking App", "Workshop slots and reminders", "AutoPrime Service", "Book service without repeated calls", automobileImages[2], Wrench, "emerald", ["Service", "History", "Reminder"]),
    demo("Vehicle Inventory App", "Model and stock browsing", "InventoryDrive", "Show vehicles and variants clearly", automobileImages[1], Car, "violet", ["Models", "Variants", "Stock"]),
  ],
  demoContent: {
    ...financeBase.demoContent,
    appPreviewTitle: "Automobile dealer app preview",
    flowTabLabel: "Test Drive Flow",
    catalogTabLabel: "Inventory",
    catalogTitle: "Vehicle inventory",
    catalogDescription: "Demo inventory cards with model, variant, offer, and booking CTA.",
    flowSteps: ["Browse Vehicle", "Book Test Drive", "Dealer Follow-up", "Service Booking", "Offer Updates"],
    catalogItems: [
      { title: "Urban SUV ZX", description: "Automatic SUV with launch offer.", meta: "Test drive open", icon: Car },
      { title: "City EV Prime", description: "Electric hatchback with finance inquiry.", meta: "EV offer", icon: Car },
      { title: "Service Care Pack", description: "Annual service package and reminders.", meta: "Workshop slot", icon: Wrench },
    ],
    notifications: [
      { title: "Test drive confirmed", description: "Urban SUV ZX test drive is scheduled for Saturday.", time: "18 min ago" },
      { title: "Service reminder", description: "Your vehicle service is due next week.", time: "2 hrs ago" },
      { title: "Offer update", description: "Exchange bonus available on City EV Prime.", time: "Today" },
    ],
    analyticsMetrics: [
      { label: "Vehicle Views", value: "13.8K", change: "+21%", icon: Car },
      { label: "Test Drives", value: "510", change: "+30%", icon: CalendarCheck },
      { label: "Service Bookings", value: "290", change: "+24%", icon: Wrench },
      { label: "Offer Clicks", value: "2.9K", change: "+17%", icon: Tags },
    ],
    analyticsSources: [["Inventory", "39%"], ["Test drive", "26%"], ["Service", "21%"], ["Offers", "14%"]],
    appScreens: ["Inventory", "Drive", "Service", "Offers"],
    primaryAction: "Book Test Drive",
    secondaryAction: "View Inventory",
    adminTitle: "Connected dealership dashboard",
    adminDescription: "Inventory views, test drives, service bookings, offers, and dealer follow-ups sync to admin.",
  },
  benefits: [
    card("More test-drive leads", "Make model selection, slot booking, and dealer follow-up easy on mobile.", CalendarCheck),
    card("Better service retention", "Use reminders and booking flows to bring customers back to the workshop.", Wrench),
    card("Clear inventory discovery", "Show models, variants, offers, and finance options in one app.", Car),
    card("Dealer team visibility", "Track sales, service, offers, and follow-up activity from admin.", BarChart3),
  ],
  ctaTitle: "Build an automobile app for sales and service leads",
  ctaDescription:
    "Launch inventory browsing, test drive booking, service scheduling, offers, reminders, and dealer support.",
  pricingDescription: "Choose an automobile app package based on inventory, test drive, and service workflows.",
  pricingPlans: [
    plan("Auto App Starter", `${rupee}50,000`, false, ["Vehicle inventory", "Test drive form", "Offers", "Dealer contact", "Basic admin"]),
    plan("Dealer App Growth", `${rupee}1,05,000`, true, ["Test drive booking", "Service booking", "Finance inquiry", "Reminders", "Analytics dashboard"]),
    plan("Automobile App Suite", `${rupee}2,00,000+`, false, ["Inventory sync", "Dealer roles", "Service history", "Campaign automation", "Custom reports"]),
  ],
  testimonials: [
    { quote: "The test drive flow and inventory preview are very practical for dealership leads.", name: "Varun Arora", role: "Sample provider - Auto dealer" },
    { quote: "Service reminders and booking in the same app would help our workshop team.", name: "Sneha Rathi", role: "Demo brand - Service center" },
    { quote: "The finance inquiry and offers flow makes campaign follow-ups easier.", name: "Nikhil Bose", role: "Sample provider - Vehicle sales team" },
  ],
  trustItems: [
    { title: "Customer Inquiry Privacy", icon: ShieldCheck },
    { title: "Secure Login", icon: LockKeyhole },
    { title: "Booking Data Protection", icon: FileCheck2 },
    { title: "Dealer Access Controls", icon: Users },
    { title: "Regular Backups", icon: ClipboardCheck },
  ],
});

industryMobileAppPages["service-business"] = createPage({
  ...financeBase,
  industrySlug: "service-business",
  industryName: "Service Business",
  eyebrow: "Service Business Mobile App",
  title: "Service Business Mobile App For Bookings, Quotes And Job Tracking",
  highlight: "Bookings, Quotes And Job Tracking",
  description:
    "A service business mobile app for bookings, quote requests, job tracking, reminders, reviews, and customer support.",
  primaryRoute: "/industries/service-business/field-service-app",
  aliases: ["field-service-app", "mobile-app-development", "mobile-app"],
  keywords: ["service business mobile app", "field service app", "booking app", "quote request app"],
  serviceType: "Service Business Mobile App Development",
  heroImage: serviceImages[0],
  heroBrand: "ProServe App",
  heroHeadline: "Quotes, bookings and job updates in one app",
  heroSubtext:
    "Let customers choose services, request quotes, book slots, track job progress, get reminders, and leave reviews.",
  heroChips: [
    { label: "Service Catalog", icon: Wrench },
    { label: "Quote Request", icon: ClipboardList },
    { label: "Job Tracking", icon: ListChecks },
    { label: "Support Chat", icon: MessageCircle },
  ],
  heroStats: [["Quotes", "Requests"], ["Bookings", "Slots"], ["Jobs", "Tracking"], ["Reviews", "Proof"]],
  problems: [
    card("Quote requests are scattered", "Service needs, photos, locations, and budgets arrive across disconnected channels.", ClipboardList),
    card("Job status is unclear", "Customers ask repeatedly for assignment, arrival, completion, and payment updates.", ListChecks),
    card("Customers need repeated follow-ups", "Reminders, reviews, and support updates depend on manual team effort.", Bell),
  ],
  includes: [
    card("Service catalog", "Show services, packages, process, and service areas.", Wrench),
    card("Booking/quote request", "Capture service need, photos, location, budget, and preferred slot.", ClipboardList),
    card("Job tracking", "Show assigned team, status, ETA, and completion notes.", ListChecks),
    card("Customer profile", "Save contact, addresses, jobs, and support history.", UserCheck),
    card("Reminders", "Send booking, arrival, payment, and review reminders.", Bell),
    card("Reviews", "Collect feedback and proof after job completion.", Star),
  ],
  modules: [
    moduleCard("Services", Wrench, ["Catalog", "Packages", "Service areas"]),
    moduleCard("Quote Request", ClipboardList, ["Need", "Photos", "Budget"]),
    moduleCard("Booking", CalendarCheck, ["Slots", "Location", "Team"]),
    moduleCard("Job Tracking", ListChecks, ["Assigned team", "ETA", "Status"]),
    moduleCard("Customer Profile", UserCheck, ["Address", "History", "Preferences"]),
    moduleCard("Reminders", Bell, ["Booking", "Payment", "Review"]),
    moduleCard("Support", MessageCircle, ["Chat", "Tickets", "Updates"]),
    moduleCard("Reviews", Star, ["Ratings", "Feedback", "Proof"]),
  ],
  flowTitle: "Service App Customer Flow",
  flowSteps: [
    card("Select Service", "Customer chooses a service and service area.", Wrench),
    card("Request Quote/Booking", "They share details, photos, location, and slot.", ClipboardList),
    card("Team Assignment", "Admin assigns the right team or field staff.", Users),
    card("Job Status", "Customer tracks progress and receives reminders.", ListChecks),
    card("Review", "After completion, customer leaves feedback.", Star),
  ],
  demoGallery: [
    demo("Booking App", "Appointment and slot booking", "ProServe Booking", "Turn service requests into booked jobs", serviceImages[0], CalendarCheck, "blue", ["Slots", "Team", "Status"]),
    demo("Quote Request App", "Structured service inquiry", "QuoteBridge", "Capture quote details cleanly", serviceImages[1], ClipboardList, "emerald", ["Need", "Budget", "Photos"]),
    demo("Job Tracking App", "Customer job status", "TaskTrack", "Show every job stage clearly", serviceImages[2], ListChecks, "orange", ["ETA", "Status", "Completion"]),
    demo("Customer Support App", "Support and reviews", "SupportNest", "Keep clients informed after booking", serviceImages[1], MessageCircle, "violet", ["Chat", "Reviews", "Help"]),
  ],
  demoContent: {
    ...financeBase.demoContent,
    appPreviewTitle: "Service business app preview",
    flowTabLabel: "Quote Flow",
    catalogTabLabel: "Services",
    catalogTitle: "Service catalog",
    catalogDescription: "Demo service cards with booking, quote, and service-area actions.",
    flowSteps: ["Select Service", "Request Quote/Booking", "Team Assignment", "Job Status", "Review"],
    catalogItems: [
      { title: "Home Deep Cleaning", description: "Room-wise cleaning package with slot booking.", meta: "Popular", icon: Home },
      { title: "AC Repair Visit", description: "Repair request with photos and technician assignment.", meta: "Same-day slots", icon: Wrench },
      { title: "Legal Consultation", description: "Professional appointment with document checklist.", meta: "Consultation", icon: BriefcaseBusiness },
    ],
    notifications: [
      { title: "Quote received", description: "Your AC repair quote request is under review.", time: "14 min ago" },
      { title: "Team assigned", description: "Rahul's team is assigned for tomorrow's visit.", time: "1 hr ago" },
      { title: "Review request", description: "Please rate your completed cleaning service.", time: "Today" },
    ],
    analyticsMetrics: [
      { label: "Quote Requests", value: "690", change: "+30%", icon: ClipboardList },
      { label: "Booked Jobs", value: "420", change: "+24%", icon: CalendarCheck },
      { label: "Service Views", value: "7.9K", change: "+18%", icon: Wrench },
      { label: "Reviews", value: "4.8", change: "+11%", icon: Star },
    ],
    analyticsSources: [["Services", "38%"], ["Quote request", "27%"], ["Bookings", "22%"], ["Reviews", "13%"]],
    appScreens: ["Services", "Quote", "Jobs", "Support"],
    primaryAction: "Request Quote",
    secondaryAction: "Book Service",
    adminTitle: "Connected service operations dashboard",
    adminDescription: "Quotes, bookings, teams, job status, reminders, and reviews stay connected.",
  },
  benefits: [
    card("Structured quote intake", "Capture service need, budget, photos, location, and preferred slot cleanly.", ClipboardList),
    card("Clear job tracking", "Reduce repeated calls with visible assignment, ETA, and completion status.", ListChecks),
    card("Better customer support", "Keep support, reminders, and reviews connected to each job.", MessageCircle),
    card("Team and admin sync", "Give owners one view of bookings, staff, jobs, and customer feedback.", Users),
  ],
  ctaTitle: "Build a service app for quotes, bookings and job tracking",
  ctaDescription:
    "Launch service catalog, quote requests, bookings, job tracking, reminders, support, and reviews in one app.",
  pricingDescription: "Choose a service business app package based on quote, booking, and job tracking needs.",
  pricingPlans: [
    plan("Service App Starter", `${rupee}40,000`, false, ["Service catalog", "Quote request", "Contact form", "Basic reminders", "Admin handoff"]),
    plan("Service App Growth", `${rupee}85,000`, true, ["Booking slots", "Job tracking", "Customer profile", "Support chat", "Analytics dashboard"]),
    plan("Service App Suite", `${rupee}1,60,000+`, false, ["Team assignment", "Field staff roles", "Payment status", "Review automation", "Custom reports"]),
  ],
  testimonials: [
    { quote: "The quote and job tracking flow would remove a lot of repeated customer calls.", name: "Sahil Verma", role: "Sample provider - Service company" },
    { quote: "Booking, reminders, and reviews in one app is exactly what local teams need.", name: "Mina Joseph", role: "Demo brand - Home service team" },
    { quote: "The field-service structure feels practical for agencies and repair teams.", name: "Aditya Rao", role: "Sample provider - Professional services" },
  ],
  trustItems: [
    { title: "Client Inquiry Privacy", icon: ShieldCheck },
    { title: "Secure Login", icon: LockKeyhole },
    { title: "Quote Request Protection", icon: FileCheck2 },
    { title: "Team Access Controls", icon: Users },
    { title: "Regular Backups", icon: ClipboardCheck },
  ],
});

export const industryMobileAppStaticParams: IndustryMobileAppRoute[] =
  Object.values(industryMobileAppPages).flatMap((page) =>
    page.aliases.map((solutionSlug) => ({
      industrySlug: page.industrySlug,
      solutionSlug,
    })),
  );

export function getIndustryMobileAppPage(
  industrySlug: string,
  solutionSlug: string,
) {
  const page = industryMobileAppPages[industrySlug];

  if (!page || !page.aliases.includes(solutionSlug)) {
    return null;
  }

  return page;
}
