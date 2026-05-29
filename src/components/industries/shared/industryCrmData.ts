import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Bell,
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
  PackageCheck,
  Plane,
  ReceiptText,
  Route,
  Search,
  School,
  Settings2,
  ShieldCheck,
  ShoppingBag,
  Star,
  Tags,
  Truck,
  UserCheck,
  Users,
  Workflow,
  Wrench,
} from "lucide-react";

export type IndustryCrmRoute = {
  industrySlug: string;
  solutionSlug: string;
};

export type IndustryCrmCard = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type IndustryCrmHeroVisual = {
  crmName: string;
  sidebar: string[];
  stats: Array<{ label: string; value: string; change: string }>;
  customerName: string;
  customerType: string;
  dealValue: string;
  lastContact: string;
  nextTask: string;
  automationSuggestion: string;
  reportHealth: string;
};

export type IndustryCrmWorkflowStage = {
  title: string;
  owner: string;
  metric: string;
  icon: LucideIcon;
};

export type IndustryCrmObject = {
  title: string;
  description: string;
  relation: string;
  icon: LucideIcon;
};

export type IndustryCrmRole = {
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

export type IndustryCrmPipelineDeal = {
  name: string;
  value: string;
  nextTask: string;
  owner: string;
  priority: "Hot" | "Warm" | "Review" | "Due" | "Won";
};

export type IndustryCrmPipelineStage = {
  title: string;
  total: string;
  cards: IndustryCrmPipelineDeal[];
};

export type IndustryCrmAutomationExample = {
  title: string;
  trigger: string;
  condition: string;
  action: string;
  icon: LucideIcon;
};

export type IndustryCrmReportCard = {
  title: string;
  description: string;
  metric: string;
  change: string;
  icon: LucideIcon;
};

export type IndustryCrmIntegration = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type IndustryCrmPricingPlan = {
  name: string;
  subtitle: string;
  price: string;
  icon: LucideIcon;
  features: string[];
  popular: boolean;
};

export type IndustryCrmTestimonial = {
  quote: string;
  name: string;
  role: string;
};

export type IndustryCrmPageData = {
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
  heroChips: Array<{ label: string; icon: LucideIcon }>;
  heroStats: Array<[string, string]>;
  crmDemoHref: string;
  heroVisual: IndustryCrmHeroVisual;
  genericProblemsTitle: string;
  genericProblems: IndustryCrmCard[];
  crmFixesTitle: string;
  crmFixes: IndustryCrmCard[];
  workflowTitle: string;
  workflowStages: IndustryCrmWorkflowStage[];
  objectsTitle: string;
  crmObjects: IndustryCrmObject[];
  rolesTitle: string;
  rolesDescription: string;
  crmRoles: IndustryCrmRole[];
  pipelineTitle: string;
  pipelineStages: IndustryCrmPipelineStage[];
  automationTitle: string;
  automationExamples: IndustryCrmAutomationExample[];
  demoSectionTitle: string;
  demoSectionDescription: string;
  demoSteps: IndustryCrmCard[];
  reportsTitle: string;
  reportCards: IndustryCrmReportCard[];
  ownershipTitle: string;
  ownershipComparison: {
    genericTitle: string;
    genericItems: string[];
    customTitle: string;
    customItems: string[];
  };
  integrationsTitle: string;
  integrations: IndustryCrmIntegration[];
  pricingDescription: string;
  pricingPlans: IndustryCrmPricingPlan[];
  testimonialsTitle: string;
  testimonials: IndustryCrmTestimonial[];
  ctaTitle: string;
  ctaDescription: string;
};

type RoleInput = {
  id: string;
  title: string;
  role: string;
  description: string;
  icon: LucideIcon;
  capabilities: string[];
  metric: string;
};

type Config = {
  industrySlug: string;
  industryName: string;
  title: string;
  highlight: string;
  description: string;
  heroChips: Array<{ label: string; icon: LucideIcon }>;
  heroStats: Array<[string, string]>;
  crmName: string;
  customerName: string;
  customerType: string;
  dealValue: string;
  lastContact: string;
  nextTask: string;
  automationSuggestion: string;
  reportHealth: string;
  workflowStages: IndustryCrmWorkflowStage[];
  crmObjects: IndustryCrmObject[];
  crmRoles: RoleInput[];
  pipelineStages: IndustryCrmPipelineStage[];
  automationExamples: IndustryCrmAutomationExample[];
  reportCards: IndustryCrmReportCard[];
  pricingBase: string;
  pricingGrowth: string;
  pricingCustom: string;
  testimonials: IndustryCrmTestimonial[];
};

const crmDemoHref = "/crm-demo";

function card(title: string, description: string, icon: LucideIcon): IndustryCrmCard {
  return { title, description, icon };
}

function stage(
  title: string,
  owner: string,
  metric: string,
  icon: LucideIcon,
): IndustryCrmWorkflowStage {
  return { title, owner, metric, icon };
}

function objectCard(
  title: string,
  description: string,
  relation: string,
  icon: LucideIcon,
): IndustryCrmObject {
  return { title, description, relation, icon };
}

function role(input: RoleInput): IndustryCrmRole {
  return {
    ...input,
    previewCards: input.capabilities.slice(0, 4).map((capability, index) => ({
      label: capability,
      value:
        index === 0
          ? "Primary desk"
          : index === 1
            ? "Live queue"
            : index === 2
              ? "Next action"
              : "Manager visible",
      icon: index === 0 ? input.icon : index === 1 ? ClipboardCheck : index === 2 ? Bell : BarChart3,
    })),
  };
}

function deal(
  name: string,
  value: string,
  nextTask: string,
  owner: string,
  priority: IndustryCrmPipelineDeal["priority"],
): IndustryCrmPipelineDeal {
  return { name, value, nextTask, owner, priority };
}

function pipelineStage(
  title: string,
  total: string,
  cards: IndustryCrmPipelineDeal[],
): IndustryCrmPipelineStage {
  return { title, total, cards };
}

function automation(
  title: string,
  trigger: string,
  condition: string,
  action: string,
  icon: LucideIcon,
): IndustryCrmAutomationExample {
  return { title, trigger, condition, action, icon };
}

function report(
  title: string,
  description: string,
  metric: string,
  change: string,
  icon: LucideIcon,
): IndustryCrmReportCard {
  return { title, description, metric, change, icon };
}

function pricingPlan(
  name: string,
  price: string,
  subtitle: string,
  features: string[],
  popular: boolean,
): IndustryCrmPricingPlan {
  return {
    name,
    price,
    subtitle,
    features,
    popular,
    icon: popular ? Workflow : name.includes("Custom") ? Settings2 : ClipboardList,
  };
}

function buildGenericProblems(industryName: string): IndustryCrmCard[] {
  return [
    card(
      "Your team adapts to the CRM",
      `Generic CRM stages rarely match how ${industryName.toLowerCase()} teams qualify, follow up, close, and retain customers.`,
      Settings2,
    ),
    card(
      "Data stays scattered",
      "Leads, customers, follow-ups, documents, calls, and notes get split across Excel, WhatsApp, email, and memory.",
      FileText,
    ),
    card(
      "Sales and operations disagree",
      "One team updates pipeline status while another handles documents, tasks, or delivery without shared visibility.",
      Users,
    ),
    card(
      "Reports do not expose bottlenecks",
      "Dashboards show numbers, but not the exact aging leads, delayed tasks, or stuck stages your team needs to fix.",
      BarChart3,
    ),
  ];
}

function buildCrmFixes(industryName: string): IndustryCrmCard[] {
  return [
    card(
      "Custom stages and fields",
      `Your ${industryName.toLowerCase()} CRM uses stages, objects, fields, automations, and dashboards around your real workflow.`,
      Workflow,
    ),
    card(
      "One source of truth",
      "Every lead, customer, deal, task, document, call note, and conversation stays attached to one living record.",
      ClipboardCheck,
    ),
    card(
      "Role-based dashboards",
      "Sales, operations, managers, and admins see the desk they need without noise from unused modules.",
      ShieldCheck,
    ),
    card(
      "Decision-ready reports",
      "Track pipeline health, follow-up aging, team performance, source quality, and revenue forecast in plain view.",
      BarChart3,
    ),
  ];
}

function buildDemoSteps(industryName: string): IndustryCrmCard[] {
  return [
    card("Select your industry", `Start with a ${industryName.toLowerCase()} CRM workspace instead of a generic sample board.`, Settings2),
    card("View sample pipeline", "Walk through realistic leads, customers, stages, owners, values, and next tasks.", Workflow),
    card("Explore customer timeline", "See calls, notes, documents, follow-ups, meetings, and automation history in one record.", Users),
    card("Check reports and automations", "Review dashboards, triggers, delayed tasks, source quality, and team productivity.", BarChart3),
  ];
}

function buildIntegrations(): IndustryCrmIntegration[] {
  return [
    { title: "Website Forms", description: "Send website inquiries directly into CRM with source and campaign context.", icon: FileText },
    { title: "Landing Pages", description: "Route paid campaign leads into the right pipeline and owner queue.", icon: Search },
    { title: "WhatsApp / Email", description: "Connect reminders, follow-ups, templates, and communication history.", icon: MessageCircle },
    { title: "Payment Records", description: "Attach payment status, receipts, and pending amounts to customer records.", icon: CreditCard },
    { title: "Google Sheets Migration", description: "Move old spreadsheets into clean CRM objects and history.", icon: ClipboardList },
    { title: "Call Logs", description: "Record call outcomes, missed follow-ups, and next actions automatically.", icon: Bell },
    { title: "ERP / Inventory", description: "Sync product, stock, order, or operation data with CRM views.", icon: PackageCheck },
    { title: "Portals", description: "Connect customer, dealer, vendor, or client portal activity back to CRM.", icon: LockKeyhole },
    { title: "Mobile Apps", description: "Push app events, requests, bookings, and alerts into CRM records.", icon: Route },
    { title: "Analytics", description: "Measure source quality, stage conversion, team output, and revenue forecast.", icon: BarChart3 },
  ];
}

function buildPricingPlans(config: Config): IndustryCrmPricingPlan[] {
  return [
    pricingPlan(
      "Starter CRM",
      config.pricingBase,
      "For small teams moving from Excel or WhatsApp follow-ups.",
      ["Lead/contact management", "Custom pipeline", "Follow-up tasks", "Basic dashboard", "Source capture"],
      false,
    ),
    pricingPlan(
      "Growth CRM",
      config.pricingGrowth,
      "For teams that need pipelines, roles, automations and dashboards.",
      ["Role-based desks", "Automations", "Reports dashboard", "CRM demo mapping", "Task aging alerts"],
      true,
    ),
    pricingPlan(
      "Custom CRM OS",
      config.pricingCustom,
      "For businesses that want a full operating system with CRM, portal, app and integrations.",
      ["Advanced workflows", "API integrations", "Portal/app connections", "Custom reporting", "Permission controls"],
      false,
    ),
  ];
}

function createPage(config: Config): IndustryCrmPageData {
  return {
    industrySlug: config.industrySlug,
    industryName: config.industryName,
    eyebrow: `${config.industryName} CRM Solution`,
    title: config.title,
    highlight: config.highlight,
    description: config.description,
    primaryRoute: `/industries/${config.industrySlug}/crm`,
    aliases: ["crm"],
    keywords: [
      `${config.industryName.toLowerCase()} CRM development`,
      "custom CRM development",
      "industry CRM software",
      "CRM dashboard development",
      "sales pipeline CRM",
      "lead management CRM",
      "CRM automation",
      "custom business CRM",
      "own your CRM",
    ],
    serviceType: `${config.industryName} CRM Development`,
    heroChips: config.heroChips,
    heroStats: config.heroStats,
    crmDemoHref,
    heroVisual: {
      crmName: config.crmName,
      sidebar: ["Dashboard", "Leads", "Customers", "Pipeline", "Tasks", "Reports", "Automations"],
      stats: [
        { label: "New Leads", value: config.heroStats[0]?.[1] ?? "48", change: "+12%" },
        { label: "Open Deals", value: config.heroStats[1]?.[1] ?? "24", change: "+8%" },
        { label: "Follow-Ups Due", value: config.heroStats[2]?.[1] ?? "16", change: "-6%" },
        { label: "Forecast Revenue", value: config.heroStats[3]?.[1] ?? "₹18L", change: "+15%" },
      ],
      customerName: config.customerName,
      customerType: config.customerType,
      dealValue: config.dealValue,
      lastContact: config.lastContact,
      nextTask: config.nextTask,
      automationSuggestion: config.automationSuggestion,
      reportHealth: config.reportHealth,
    },
    genericProblemsTitle: `Why Generic CRMs Fail for ${config.industryName} Teams`,
    genericProblems: buildGenericProblems(config.industryName),
    crmFixesTitle: "How HNX Custom CRM Fixes It",
    crmFixes: buildCrmFixes(config.industryName),
    workflowTitle: `Your ${config.industryName} CRM Workflow, Mapped End-to-End`,
    workflowStages: config.workflowStages,
    objectsTitle: `Custom CRM Objects Built for ${config.industryName}`,
    crmObjects: config.crmObjects,
    rolesTitle: "Role-Based CRM Desks for Every Team",
    rolesDescription: `Create focused internal desks for the ${config.industryName.toLowerCase()} teams that manage pipeline, follow-ups, operations, reports, and revenue.`,
    crmRoles: config.crmRoles.map(role),
    pipelineTitle: "A Pipeline That Matches Your Real Sales Process",
    pipelineStages: config.pipelineStages,
    automationTitle: "Automations That Remove Manual Follow-Ups",
    automationExamples: config.automationExamples,
    demoSectionTitle: "Experience Your CRM Before You Build It",
    demoSectionDescription:
      "Choose your industry and explore a working CRM-style demo with sample leads, customers, pipeline stages, tasks, reports and role-based dashboards. It helps you see how your own CRM could work before development starts.",
    demoSteps: buildDemoSteps(config.industryName),
    reportsTitle: "Turn CRM Data Into Decisions",
    reportCards: config.reportCards,
    ownershipTitle: "Stop Renting a CRM Your Team Has to Fight With",
    ownershipComparison: {
      genericTitle: "Generic SaaS CRM",
      genericItems: [
        "You pay monthly per user.",
        "Extra features cost more.",
        "Your workflow adjusts to the tool.",
        "Bloated screens and unused modules.",
        "Hard to customize deeply.",
        "Vendor lock-in.",
      ],
      customTitle: "HNX Custom CRM",
      customItems: [
        "You own your CRM system.",
        "Built around only what you need.",
        "CRM adjusts to your workflow.",
        "Clean role-based dashboards.",
        "Custom fields, stages, reports and automations.",
        "Your data, your workflows, your control.",
      ],
    },
    integrationsTitle: "Connect CRM With the Tools Your Team Already Uses",
    integrations: buildIntegrations(),
    pricingDescription: `Choose a ${config.industryName.toLowerCase()} CRM package based on pipeline complexity, roles, automations, integrations and reporting depth.`,
    pricingPlans: buildPricingPlans(config),
    testimonialsTitle: `${config.industryName} CRM Feedback`,
    testimonials: config.testimonials,
    ctaTitle: "Build a CRM Your Team Actually Uses",
    ctaDescription:
      "Turn scattered leads, tasks, follow-ups and reports into one industry-specific CRM built around your real business process.",
  };
}

// Healthcare CRM stays on the specialized healthcare route/component at /industries/healthcare/crm.
// TODO: Add healthcare here only if the specialized healthcare architecture is intentionally unified later.
export const industryCrmPages: Record<string, IndustryCrmPageData> = {
  "real-estate": createPage({
    industrySlug: "real-estate",
    industryName: "Real Estate",
    title: "A Real Estate CRM Built Around Leads, Site Visits and Property Deals",
    highlight: "Property Deals",
    description:
      "Replace scattered buyer inquiries, broker notes and property follow-ups with a CRM designed around requirements, site visits, documents, negotiation and booking stages.",
    heroChips: [
      { label: "Lead Pipeline", icon: Users },
      { label: "Site Visits", icon: CalendarCheck },
      { label: "Broker Follow-Ups", icon: Handshake },
      { label: "Revenue Dashboard", icon: BarChart3 },
    ],
    heroStats: [["New Leads", "186"], ["Open Deals", "74"], ["Visits Due", "28"], ["Forecast", "₹6.4Cr"]],
    crmName: "EstateCRM",
    customerName: "Aarav Mehta",
    customerType: "3BHK buyer lead",
    dealValue: "₹1.24Cr",
    lastContact: "Site visit completed yesterday",
    nextTask: "Send payment plan and floor options",
    automationSuggestion: "Create negotiation task after high-interest site visit",
    reportHealth: "Pipeline health: 82%",
    workflowStages: [
      stage("Lead", "Sales desk", "186 active", Users),
      stage("Property Match", "Lead manager", "72 matched", Home),
      stage("Site Visit", "Visit desk", "28 due", CalendarCheck),
      stage("Negotiation", "Broker desk", "19 active", Handshake),
      stage("Booking", "Manager", "11 warm", ClipboardCheck),
      stage("Documentation", "Admin", "8 pending", FileText),
      stage("Handover", "CRM owner", "4 closed", Building2),
    ],
    crmObjects: [
      objectCard("Buyers", "Lead profile, budget, urgency, source and contact history.", "Core record", Users),
      objectCard("Properties", "Projects, units, inventory status, price bands and amenities.", "Matched to buyer", Home),
      objectCard("Site Visits", "Visit date, executive, feedback, reschedule notes and rating.", "Activity object", CalendarCheck),
      objectCard("Requirements", "Location, budget, configuration, possession and preferences.", "Qualification object", ClipboardList),
      objectCard("Deals", "Negotiation, booking stage, value, probability and owner.", "Pipeline object", BarChart3),
      objectCard("Documents", "KYC, booking forms, payment proof and agreement files.", "Attached records", FileText),
      objectCard("Broker Follow-Ups", "Partner activity, commission notes and next action reminders.", "Team object", Handshake),
    ],
    crmRoles: [
      { id: "lead-manager", title: "Lead Manager Desk", role: "Sales desk", description: "Qualify buyer requirements, assign property matches, and move leads toward visits.", icon: Users, capabilities: ["Lead inbox", "Requirement capture", "Property matching", "Next follow-up"], metric: "3x clearer lead ownership" },
      { id: "visit", title: "Site Visit Desk", role: "Visit operations", description: "Schedule visits, assign executives, track attendance and capture buyer feedback.", icon: CalendarCheck, capabilities: ["Visit calendar", "Executive assignment", "Feedback notes", "Reschedule alerts"], metric: "Fewer missed visits" },
      { id: "broker", title: "Broker Follow-Up Desk", role: "Channel team", description: "Track broker leads, shared properties, follow-ups, partner notes and deal movement.", icon: Handshake, capabilities: ["Broker leads", "Shared listings", "Follow-up reminders", "Commission notes"], metric: "Cleaner broker pipeline" },
      { id: "manager", title: "Sales Manager Desk", role: "Management", description: "Monitor source quality, stage aging, visit conversion, booking forecast and team output.", icon: BarChart3, capabilities: ["Pipeline health", "Team score", "Visit conversion", "Revenue forecast"], metric: "Better booking visibility" },
    ],
    pipelineStages: [
      pipelineStage("New Lead", "₹2.1Cr", [deal("Aarav Mehta", "₹1.24Cr", "Call budget confirmation", "Riya", "Hot"), deal("Neha Kapoor", "₹86L", "Share project brochure", "Aman", "Warm")]),
      pipelineStage("Requirement Captured", "₹1.8Cr", [deal("Rohan Shah", "₹95L", "Match 2BHK inventory", "Dev", "Warm"), deal("Isha Rao", "₹78L", "Confirm possession timeline", "Riya", "Review")]),
      pipelineStage("Property Shared", "₹1.4Cr", [deal("Kunal Jain", "₹1.1Cr", "Send floor plan", "Aman", "Hot"), deal("Maya Sen", "₹64L", "Share location video", "Dev", "Warm")]),
      pipelineStage("Site Visit Booked", "₹2.6Cr", [deal("Arjun Nair", "₹1.3Cr", "Confirm Saturday slot", "Riya", "Due"), deal("Pooja Malik", "₹92L", "Arrange pickup", "Aman", "Warm")]),
      pipelineStage("Negotiation", "₹1.9Cr", [deal("Sahil Bedi", "₹1.05Cr", "Manager price review", "Dev", "Hot"), deal("Tara Das", "₹84L", "Share payment plan", "Riya", "Review")]),
      pipelineStage("Booking Closed", "₹1.1Cr", [deal("Vihaan Arora", "₹1.1Cr", "Collect booking documents", "Aman", "Won")]),
    ],
    automationExamples: [
      automation("High-interest visit follow-up", "Site visit completed", "Buyer rating is high", "Create negotiation task and notify sales manager.", CalendarCheck),
      automation("Cold lead recovery", "No activity for 5 days", "Lead value above ₹75L", "Create call task and send WhatsApp follow-up.", Bell),
      automation("Document reminder", "Booking stage reached", "KYC missing after 24 hours", "Assign admin task and notify buyer.", FileText),
    ],
    reportCards: [
      report("Lead Source Performance", "See which portals, campaigns, referrals and walk-ins create qualified visits.", "38% portal leads", "+14%", Search),
      report("Pipeline Health", "Track stuck buyers, aging stages and visit-to-booking movement.", "82% healthy", "+9%", BarChart3),
      report("Team Follow-Up Score", "Compare executive activity, overdue tasks and next actions.", "91% on time", "+11%", Users),
      report("Revenue Forecast", "Expected booking value by project, source, executive and stage.", "₹6.4Cr", "+18%", ReceiptText),
      report("Customer Aging", "Find leads not contacted recently by budget, urgency and stage.", "23 aging", "-12%", Bell),
      report("Lead-to-Booking Conversion", "Track inquiry to requirement, visit, negotiation and booking.", "7.8%", "+2.1%", ClipboardCheck),
    ],
    pricingBase: "₹75,000",
    pricingGrowth: "₹1,50,000",
    pricingCustom: "₹3,00,000+",
    testimonials: [
      { quote: "The CRM structure finally matches how real estate teams actually move from inquiry to site visit and booking.", name: "Riya Malhotra", role: "Sample provider - Property consultant" },
      { quote: "Broker follow-ups, visit status and inventory context in one CRM view would save our team a lot of confusion.", name: "Arjun Sethi", role: "Demo brand - Real estate agency" },
      { quote: "The pipeline board feels built for project sales, not generic deal tracking.", name: "Neha Kapoor", role: "Sample provider - Developer team" },
    ],
  }),

  education: createPage({
    industrySlug: "education",
    industryName: "Education",
    title: "An Education CRM Built Around Admissions, Counseling and Parent Follow-Ups",
    highlight: "Parent Follow-Ups",
    description:
      "Replace messy admission spreadsheets and counselor reminders with a CRM for inquiries, counseling calls, applications, documents, fee follow-ups and student relationship workflows.",
    heroChips: [
      { label: "Admissions Pipeline", icon: GraduationCap },
      { label: "Counseling Calls", icon: MessageCircle },
      { label: "Fee Follow-Ups", icon: CreditCard },
      { label: "Reports", icon: BarChart3 },
    ],
    heroStats: [["New Inquiries", "248"], ["Applications", "96"], ["Follow-Ups Due", "44"], ["Forecast", "₹38L"]],
    crmName: "AdmissionCRM",
    customerName: "Ananya Sharma",
    customerType: "Grade 11 science inquiry",
    dealValue: "₹1.2L fee value",
    lastContact: "Counseling call completed today",
    nextTask: "Follow up with parent for documents",
    automationSuggestion: "Create parent reminder when documents are missing",
    reportHealth: "Admissions health: 79%",
    workflowStages: [
      stage("Inquiry", "Admissions desk", "248 active", GraduationCap),
      stage("Counseling", "Counselor", "102 calls", MessageCircle),
      stage("Application", "Admissions", "96 started", ClipboardList),
      stage("Admission", "Admin", "41 ready", School),
      stage("Fee Follow-Up", "Finance desk", "44 due", CreditCard),
      stage("Student Relationship", "Success team", "29 active", Users),
    ],
    crmObjects: [
      objectCard("Student Leads", "Program interest, source, grade, parent contact and urgency.", "Core record", GraduationCap),
      objectCard("Counseling Calls", "Call notes, objections, suggested courses and next action.", "Activity object", MessageCircle),
      objectCard("Applications", "Form status, program, batch, document gaps and owner.", "Pipeline object", ClipboardList),
      objectCard("Admissions", "Admission status, batch, counselor, approval and onboarding.", "Conversion object", School),
      objectCard("Fees", "Due amount, payment stage, reminders and receipts.", "Finance object", CreditCard),
      objectCard("Parent Follow-Ups", "Guardian communication, reminders, notes and task history.", "Relationship object", Users),
    ],
    crmRoles: [
      { id: "counselor", title: "Admission Counselor Desk", role: "Counselor", description: "Manage inquiries, counseling calls, course suggestions and next follow-up tasks.", icon: MessageCircle, capabilities: ["Inquiry queue", "Counseling notes", "Course suggestions", "Parent reminders"], metric: "Higher admission conversion" },
      { id: "application", title: "Application Review Desk", role: "Admin review", description: "Track forms, documents, application stages and missing information.", icon: ClipboardCheck, capabilities: ["Form status", "Document gaps", "Review queue", "Admission stage"], metric: "Faster application review" },
      { id: "fees", title: "Fee Follow-Up Desk", role: "Finance team", description: "Monitor fee commitments, due dates, reminders, receipts and payment status.", icon: CreditCard, capabilities: ["Fee due list", "Payment reminders", "Receipt records", "Parent tasks"], metric: "Cleaner fee collection" },
      { id: "manager", title: "Admission Manager Desk", role: "Management", description: "Track counselor performance, program demand, admission forecast and stuck applications.", icon: BarChart3, capabilities: ["Counselor score", "Program demand", "Forecast", "Aging inquiries"], metric: "Better admissions visibility" },
    ],
    pipelineStages: [
      pipelineStage("New Inquiry", "₹18L", [deal("Ananya Sharma", "₹1.2L", "Call parent today", "Priya", "Hot"), deal("Dev Patel", "₹90K", "Send course details", "Rohan", "Warm")]),
      pipelineStage("Counseling Done", "₹14L", [deal("Ira Menon", "₹1.1L", "Share batch options", "Priya", "Warm"), deal("Karan Shah", "₹85K", "Demo class reminder", "Megha", "Due")]),
      pipelineStage("Application Started", "₹11L", [deal("Riya Jain", "₹1.4L", "Check form section", "Rohan", "Review"), deal("Aman Rao", "₹75K", "Parent call", "Megha", "Warm")]),
      pipelineStage("Documents Pending", "₹8L", [deal("Sara Khan", "₹95K", "Collect TC copy", "Priya", "Due"), deal("Neil Das", "₹70K", "ID proof reminder", "Rohan", "Review")]),
      pipelineStage("Fee Follow-Up", "₹9L", [deal("Tanvi Soni", "₹1.3L", "Payment confirmation", "Megha", "Hot"), deal("Om Nair", "₹80K", "Send receipt link", "Priya", "Due")]),
      pipelineStage("Admission Closed", "₹6L", [deal("Vivaan Iyer", "₹1.1L", "Onboarding checklist", "Rohan", "Won")]),
    ],
    automationExamples: [
      automation("Missing document reminder", "Application started", "Documents missing after 2 days", "Send counselor reminder and parent follow-up task.", FileText),
      automation("Demo class follow-up", "Demo class completed", "No admission action in 24 hours", "Create counselor call task.", CalendarCheck),
      automation("Fee promise tracking", "Fee commitment added", "Due date tomorrow", "Notify finance desk and parent.", CreditCard),
    ],
    reportCards: [
      report("Lead Source Performance", "Compare walk-ins, ads, referrals, school events and website forms.", "32% referrals", "+10%", Search),
      report("Pipeline Health", "See inquiry-to-counseling and application bottlenecks.", "79% healthy", "+7%", BarChart3),
      report("Team Follow-Up Score", "Measure counselor task completion and overdue parent calls.", "88% on time", "+13%", Users),
      report("Revenue Forecast", "Expected admission value by program, batch and counselor.", "₹38L", "+16%", ReceiptText),
      report("Student Aging", "Find inquiries and applications untouched for too long.", "41 aging", "-9%", Bell),
      report("Inquiry-to-Admission Conversion", "Track every step from inquiry to admitted student.", "18.5%", "+3.4%", GraduationCap),
    ],
    pricingBase: "₹70,000",
    pricingGrowth: "₹1,40,000",
    pricingCustom: "₹2,80,000+",
    testimonials: [
      { quote: "This CRM thinks like an admissions office: inquiry, counseling, documents, fees and parent follow-up.", name: "Aditi Sharma", role: "Sample provider - Academy coordinator" },
      { quote: "The counselor desk and application review queue would reduce a lot of manual tracking.", name: "Rohan Mehta", role: "Demo brand - Coaching institute" },
      { quote: "Admissions reporting feels practical because it connects program demand with counselor output.", name: "Priya Nair", role: "Sample provider - School admin" },
    ],
  }),

  manufacturing: createPage({
    industrySlug: "manufacturing",
    industryName: "Manufacturing",
    title: "A Manufacturing CRM Built Around Dealers, RFQs and Dispatch Follow-Ups",
    highlight: "Dispatch Follow-Ups",
    description:
      "Replace scattered dealer calls, RFQ sheets and dispatch updates with a CRM built for dealer leads, quotes, approvals, orders, shipment follow-ups and repeat purchase opportunities.",
    heroChips: [
      { label: "Dealer Pipeline", icon: Factory },
      { label: "RFQ Tracking", icon: ClipboardList },
      { label: "Quote Follow-Ups", icon: FileText },
      { label: "Revenue Dashboard", icon: BarChart3 },
    ],
    heroStats: [["New RFQs", "118"], ["Open Orders", "42"], ["Follow-Ups Due", "31"], ["Forecast", "₹2.8Cr"]],
    crmName: "FactoryCRM",
    customerName: "Dealer One",
    customerType: "Gear systems RFQ",
    dealValue: "₹18.5L",
    lastContact: "Quote sent 15 hours ago",
    nextTask: "Call for approval feedback",
    automationSuggestion: "Create follow-up task for delayed RFQ opportunity",
    reportHealth: "Pipeline health: 78%",
    workflowStages: [
      stage("Dealer Lead", "Dealer sales", "118 active", Factory),
      stage("RFQ", "RFQ desk", "64 open", ClipboardList),
      stage("Quote", "Sales manager", "42 sent", FileText),
      stage("Approval", "Operations", "19 pending", ClipboardCheck),
      stage("Order", "Admin", "24 open", PackageCheck),
      stage("Dispatch Follow-Up", "Dispatch team", "11 live", Truck),
      stage("Repeat Sales", "Account desk", "17 warm", BarChart3),
    ],
    crmObjects: [
      objectCard("Dealers", "Dealer profile, territory, category, credit notes and purchase history.", "Core record", Factory),
      objectCard("RFQs", "Product need, quantity, urgency, documents, expected price and owner.", "Pipeline object", ClipboardList),
      objectCard("Quotes", "Quote amount, margin, validity, approvals and follow-up status.", "Sales object", FileText),
      objectCard("Orders", "PO status, confirmation, payment, production and ownership.", "Fulfillment object", PackageCheck),
      objectCard("Dispatches", "Shipment stage, ETA, proof, carrier and dealer notification.", "Operations object", Truck),
      objectCard("Follow-Ups", "Call notes, next tasks, delayed opportunities and escalation rules.", "Task object", Bell),
      objectCard("Repeat Purchase Opportunities", "Reorder windows, dealer demand and category interest.", "Revenue object", BarChart3),
    ],
    crmRoles: [
      { id: "dealer-sales", title: "Dealer Sales Desk", role: "Sales team", description: "Manage dealer leads, RFQs, quotes, follow-ups and repeat sales opportunities.", icon: Factory, capabilities: ["Dealer lead inbox", "RFQ notes", "Quote follow-ups", "Repeat opportunities"], metric: "Faster dealer response" },
      { id: "rfq-ops", title: "RFQ Operations Desk", role: "Operations", description: "Track RFQs, required documents, product availability, quote readiness and approval status.", icon: ClipboardList, capabilities: ["RFQ queue", "Product requirement", "Approval status", "Document gaps"], metric: "Cleaner RFQ movement" },
      { id: "dispatch", title: "Dispatch Follow-Up Desk", role: "Logistics", description: "Update shipment stages, dealer notifications, ETA changes and delivery proof.", icon: Truck, capabilities: ["Shipment stages", "ETA updates", "Delivery proof", "Dealer alerts"], metric: "Better dispatch visibility" },
      { id: "manager", title: "Manager Revenue Desk", role: "Management", description: "Monitor quote conversion, RFQ aging, dealer performance and forecast revenue.", icon: BarChart3, capabilities: ["RFQ aging", "Quote conversion", "Dealer performance", "Revenue forecast"], metric: "Stronger B2B forecast" },
    ],
    pipelineStages: [
      pipelineStage("New Dealer", "₹42L", [deal("Dealer One", "₹18.5L", "Qualify product category", "Nikhil", "Hot"), deal("NorthLine Traders", "₹11L", "Send product catalog", "Meera", "Warm")]),
      pipelineStage("RFQ Received", "₹58L", [deal("Apex Tools", "₹22L", "Confirm quantity", "Ravi", "Review"), deal("Metro Industrial", "₹14L", "Ask delivery timeline", "Nikhil", "Warm")]),
      pipelineStage("Quote Sent", "₹63L", [deal("Dealer Prime", "₹31L", "Follow up quote", "Meera", "Due"), deal("IronPeak Buyers", "₹17L", "Margin approval", "Ravi", "Review")]),
      pipelineStage("Approval Pending", "₹28L", [deal("WestLine Supply", "₹16L", "Senior approval", "Nikhil", "Hot"), deal("GearMart", "₹12L", "Payment terms review", "Meera", "Review")]),
      pipelineStage("Order Confirmed", "₹48L", [deal("Apex Systems", "₹24L", "Generate PO record", "Ravi", "Won"), deal("Dealer One", "₹18L", "Schedule dispatch", "Nikhil", "Won")]),
      pipelineStage("Dispatch Follow-Up", "₹34L", [deal("DS-7781", "₹18L", "Update ETA", "Dispatch", "Due"), deal("DS-7812", "₹16L", "Upload proof", "Dispatch", "Review")]),
    ],
    automationExamples: [
      automation("High-value RFQ assignment", "New RFQ submitted", "Value above ₹50,000", "Assign to senior sales manager and create follow-up task.", ClipboardList),
      automation("Quote aging alert", "Quote sent", "No response within 48 hours", "Notify owner and create dealer call task.", Bell),
      automation("Dispatch update", "Order marked dispatched", "Dealer notification enabled", "Send ETA update and create delivery proof task.", Truck),
    ],
    reportCards: [
      report("Lead Source Performance", "Track which dealers, campaigns and B2B sources create qualified RFQs.", "41% dealer network", "+12%", Search),
      report("Pipeline Health", "See RFQ aging, quote delays and approval bottlenecks.", "78% healthy", "+8%", BarChart3),
      report("Team Follow-Up Score", "Measure delayed quote calls and owner response discipline.", "86% on time", "+10%", Users),
      report("Revenue Forecast", "Expected value by dealer, product category and quote probability.", "₹2.8Cr", "+19%", ReceiptText),
      report("Customer Aging", "Find dealers not contacted recently or due for reorder.", "29 aging", "-14%", Bell),
      report("RFQ-to-Order Conversion", "Track conversion from RFQ to quote, approval, order and repeat sale.", "24.6%", "+4.2%", Factory),
    ],
    pricingBase: "₹90,000",
    pricingGrowth: "₹1,80,000",
    pricingCustom: "₹3,50,000+",
    testimonials: [
      { quote: "This feels like a real manufacturing CRM because RFQs, quotes and dispatch follow-ups are first-class objects.", name: "Nikhil Rao", role: "Sample provider - Industrial supplier" },
      { quote: "The dealer sales desk and RFQ operations desk would replace a lot of spreadsheet chaos.", name: "Meera Soni", role: "Demo brand - Factory operations" },
      { quote: "Pipeline reports focused on RFQ aging and quote conversion are exactly what B2B teams need.", name: "Vikram Jain", role: "Sample provider - B2B distributor" },
    ],
  }),

  retail: createPage({
    industrySlug: "retail",
    industryName: "Retail",
    title: "A Retail CRM Built Around Customers, Orders and Loyalty Follow-Ups",
    highlight: "Loyalty Follow-Ups",
    description:
      "Replace disconnected order records, support notes and campaign lists with a CRM for customer profiles, repeat purchases, support tickets, loyalty segments and retention campaigns.",
    heroChips: [
      { label: "Customer Timeline", icon: ShoppingBag },
      { label: "Order Support", icon: PackageCheck },
      { label: "Loyalty Segments", icon: Tags },
      { label: "Revenue Dashboard", icon: BarChart3 },
    ],
    heroStats: [["New Customers", "412"], ["Open Tickets", "68"], ["Follow-Ups Due", "52"], ["Forecast", "₹24L"]],
    crmName: "RetailCRM",
    customerName: "Kavya Shah",
    customerType: "Repeat buyer segment",
    dealValue: "₹18K lifetime value",
    lastContact: "Support ticket resolved today",
    nextTask: "Send loyalty coupon follow-up",
    automationSuggestion: "Add inactive customer to winback campaign",
    reportHealth: "Customer health: 84%",
    workflowStages: [
      stage("Customer", "Customer desk", "412 new", ShoppingBag),
      stage("First Order", "Order support", "138 orders", PackageCheck),
      stage("Support", "Support desk", "68 open", LifeBuoy),
      stage("Loyalty Segment", "Retention", "240 tagged", Tags),
      stage("Campaign", "Marketing", "12 active", Bell),
      stage("Repeat Purchase", "CRM owner", "86 warm", CreditCard),
    ],
    crmObjects: [
      objectCard("Customer Profiles", "Purchase history, preferences, source, loyalty status and support notes.", "Core record", ShoppingBag),
      objectCard("Orders", "Order value, status, support issues, returns and payment context.", "Transaction object", PackageCheck),
      objectCard("Loyalty Segments", "VIP, inactive, high-frequency and campaign-ready groups.", "Retention object", Tags),
      objectCard("Support Tickets", "Issue category, priority, owner, resolution and customer sentiment.", "Service object", LifeBuoy),
      objectCard("Campaigns", "Offers, winback, seasonal pushes and coupon performance.", "Growth object", Bell),
      objectCard("Repeat Purchases", "Next purchase signals, product interest and loyalty follow-ups.", "Revenue object", CreditCard),
    ],
    crmRoles: [
      { id: "customer", title: "Customer Desk", role: "CRM team", description: "Manage customer profiles, order history, support notes and retention opportunities.", icon: ShoppingBag, capabilities: ["Customer timeline", "Order history", "Support notes", "Repeat signals"], metric: "Higher repeat orders" },
      { id: "support", title: "Order Support Desk", role: "Support team", description: "Track order issues, returns, ticket status, refunds and customer communication.", icon: LifeBuoy, capabilities: ["Ticket inbox", "Order status", "Return notes", "Refund tasks"], metric: "Faster support response" },
      { id: "loyalty", title: "Loyalty Desk", role: "Retention team", description: "Build customer segments, coupons, rewards and winback follow-ups.", icon: Tags, capabilities: ["Segments", "Reward status", "Coupon tasks", "Winback queue"], metric: "Better retention" },
      { id: "campaign", title: "Campaign Manager Desk", role: "Marketing", description: "Monitor campaign lists, conversion, source quality and repeat purchase reports.", icon: BarChart3, capabilities: ["Campaign lists", "Conversion reports", "Source quality", "Revenue forecast"], metric: "Cleaner campaign ROI" },
    ],
    pipelineStages: [
      pipelineStage("New Customer", "₹8L", [deal("Kavya Shah", "₹18K LTV", "Tag product interest", "Ritika", "Warm"), deal("Manav Iyer", "₹11K LTV", "Send welcome coupon", "Asha", "Due")]),
      pipelineStage("First Order", "₹12L", [deal("UrbanWear buyer", "₹8.4K", "Check delivery", "Support", "Warm"), deal("FreshBasket user", "₹3.2K", "Review payment status", "Asha", "Review")]),
      pipelineStage("Support / Feedback", "₹5L", [deal("Order #RK-4102", "High priority", "Resolve return issue", "Support", "Hot"), deal("BeautyStore buyer", "Medium", "Ask review", "Ritika", "Due")]),
      pipelineStage("Loyalty Segment", "₹15L", [deal("VIP segment", "₹9L", "Launch early access", "Asha", "Hot"), deal("Dormant buyers", "₹6L", "Winback campaign", "Ritika", "Warm")]),
      pipelineStage("Campaign Active", "₹18L", [deal("Summer offer", "₹12L", "Monitor coupon use", "Asha", "Review"), deal("Repeat push", "₹6L", "Check conversion", "Ritika", "Warm")]),
      pipelineStage("Repeat Purchase", "₹10L", [deal("Kavya Shah", "₹4.8K", "Send loyalty reward", "Asha", "Won")]),
    ],
    automationExamples: [
      automation("Inactive customer winback", "Customer inactive", "No purchase in 60 days", "Add to campaign and create loyalty follow-up.", Tags),
      automation("Support resolution follow-up", "Ticket resolved", "High-value customer", "Create review request and retention note.", LifeBuoy),
      automation("Repeat purchase signal", "Second order placed", "Category interest detected", "Assign loyalty segment and coupon task.", ShoppingBag),
    ],
    reportCards: [
      report("Lead Source Performance", "Track which channels create first orders and repeat buyers.", "29% organic", "+8%", Search),
      report("Pipeline Health", "See support backlog, loyalty movement and repeat purchase signals.", "84% healthy", "+7%", BarChart3),
      report("Team Follow-Up Score", "Measure support response, campaign tasks and retention follow-ups.", "90% on time", "+12%", Users),
      report("Revenue Forecast", "Expected repeat purchase value by segment and campaign.", "₹24L", "+14%", ReceiptText),
      report("Customer Aging", "Find customers not contacted or inactive beyond threshold.", "312 aging", "-10%", Bell),
      report("Repeat Purchase Conversion", "Track first order to support, segment, campaign and repeat purchase.", "21.4%", "+3.1%", ShoppingBag),
    ],
    pricingBase: "₹70,000",
    pricingGrowth: "₹1,45,000",
    pricingCustom: "₹2,90,000+",
    testimonials: [
      { quote: "The CRM thinks beyond orders. It connects support, loyalty and repeat purchase follow-ups.", name: "Kavya Shah", role: "Demo brand - Retail operator" },
      { quote: "A customer timeline with tickets and campaigns would help us stop guessing who to follow up.", name: "Ritika Bansal", role: "Sample provider - Lifestyle store" },
      { quote: "The loyalty desk makes retention feel actionable instead of just a campaign list.", name: "Manav Iyer", role: "Sample provider - D2C brand" },
    ],
  }),

  finance: createPage({
    industrySlug: "finance",
    industryName: "Finance",
    title: "A Finance CRM Built Around Clients, Documents and Advisory Follow-Ups",
    highlight: "Advisory Follow-Ups",
    description:
      "Replace scattered client documents and advisor notes with a CRM for inquiries, KYC, product recommendations, applications, approvals, renewals and secure follow-up tasks.",
    heroChips: [
      { label: "Client Timeline", icon: Landmark },
      { label: "KYC Documents", icon: FileText },
      { label: "Advisor Tasks", icon: Users },
      { label: "Revenue Dashboard", icon: BarChart3 },
    ],
    heroStats: [["New Clients", "64"], ["Applications", "31"], ["Follow-Ups Due", "18"], ["Forecast", "₹42L"]],
    crmName: "FinCRM",
    customerName: "Ankit Verma",
    customerType: "Investment advisory client",
    dealValue: "₹12L portfolio value",
    lastContact: "KYC uploaded today",
    nextTask: "Advisor review and recommendation",
    automationSuggestion: "Move KYC upload to application review task",
    reportHealth: "Advisory health: 81%",
    workflowStages: [
      stage("Client Inquiry", "Advisor desk", "64 active", Landmark),
      stage("KYC", "Review team", "29 pending", FileText),
      stage("Product Recommendation", "Advisor", "34 ready", ClipboardList),
      stage("Application", "Operations", "31 open", ClipboardCheck),
      stage("Approval", "Admin", "14 pending", ShieldCheck),
      stage("Renewal Follow-Up", "Advisor", "22 due", CalendarCheck),
    ],
    crmObjects: [
      objectCard("Clients", "Profile, source, intent, risk notes, advisor owner and timeline.", "Core record", Landmark),
      objectCard("Products", "Recommended services, suitability notes, value and stage.", "Advisory object", ClipboardList),
      objectCard("KYC Documents", "Required documents, verification status, expiry and gaps.", "Compliance object", FileText),
      objectCard("Risk Profiles", "Risk appetite, goals, horizon and advisory notes.", "Profile object", ShieldCheck),
      objectCard("Applications", "Submission status, owner, documents and approval progress.", "Pipeline object", ClipboardCheck),
      objectCard("Approvals", "Review tasks, decision notes, escalation and audit trail.", "Control object", UserCheck),
      objectCard("Renewals", "Expiry dates, recurring opportunities and client follow-up tasks.", "Revenue object", CalendarCheck),
    ],
    crmRoles: [
      { id: "advisor", title: "Advisor Desk", role: "Advisor", description: "Manage client pipeline, consultation notes, product recommendations and follow-up tasks.", icon: Users, capabilities: ["Client pipeline", "Recommendation notes", "Meeting tasks", "Follow-up reminders"], metric: "More organized advisory" },
      { id: "documents", title: "Document Review Desk", role: "Review team", description: "Track KYC checklists, missing files, verification status and secure notes.", icon: FileCheck2, capabilities: ["KYC checklist", "Missing alerts", "Review status", "Secure notes"], metric: "Less document delay" },
      { id: "approval", title: "Approval Desk", role: "Operations", description: "Move applications through review, approval, escalation and decision tasks.", icon: ClipboardCheck, capabilities: ["Application queue", "Approval status", "Escalations", "Decision notes"], metric: "Faster approvals" },
      { id: "renewal", title: "Renewal Desk", role: "Revenue team", description: "Monitor renewals, recurring advisory opportunities and client reactivation tasks.", icon: CalendarCheck, capabilities: ["Renewal queue", "Expiry alerts", "Client reactivation", "Revenue forecast"], metric: "Better renewal control" },
    ],
    pipelineStages: [
      pipelineStage("New Client", "₹18L", [deal("Ankit Verma", "₹12L", "Collect KYC", "Megha", "Hot"), deal("Sahil Jain", "₹8L", "Book consultation", "Rahul", "Warm")]),
      pipelineStage("KYC Pending", "₹22L", [deal("Pooja Menon", "₹10L", "PAN upload reminder", "Megha", "Due"), deal("Ishaan Kapoor", "₹7L", "Address proof check", "Rahul", "Review")]),
      pipelineStage("Product Recommended", "₹31L", [deal("Ravi Shah", "₹14L", "Share proposal", "Megha", "Warm"), deal("Naina Gill", "₹9L", "Risk profile call", "Rahul", "Hot")]),
      pipelineStage("Application Submitted", "₹24L", [deal("Kabir Bhatia", "₹16L", "Review application", "Ops", "Review"), deal("Tanya Rao", "₹8L", "Check documents", "Ops", "Due")]),
      pipelineStage("Approval Pending", "₹19L", [deal("Arjun Nair", "₹11L", "Admin approval", "Ops", "Hot"), deal("Maya Shah", "₹8L", "Clarify terms", "Megha", "Review")]),
      pipelineStage("Renewal Follow-Up", "₹15L", [deal("Renewal - Verma", "₹7L", "Schedule review", "Rahul", "Due")]),
    ],
    automationExamples: [
      automation("KYC review movement", "KYC uploaded", "Product selected", "Move to application review and create advisor task.", FileText),
      automation("Missing document alert", "KYC pending", "No update after 48 hours", "Notify client owner and document desk.", Bell),
      automation("Renewal reminder", "Renewal date approaching", "30 days remaining", "Create advisor task and client reminder.", CalendarCheck),
    ],
    reportCards: [
      report("Lead Source Performance", "See which campaigns, referrals and content create qualified finance clients.", "36% referrals", "+9%", Search),
      report("Pipeline Health", "Track KYC delays, application review and approval bottlenecks.", "81% healthy", "+8%", BarChart3),
      report("Team Follow-Up Score", "Compare advisor tasks, delayed reviews and meeting notes.", "89% on time", "+10%", Users),
      report("Revenue Forecast", "Expected revenue by product, advisor, approval stage and renewal.", "₹42L", "+17%", ReceiptText),
      report("Client Aging", "Find clients not contacted after KYC, consultation or approval.", "18 aging", "-11%", Bell),
      report("Inquiry-to-Approval Conversion", "Track client journey from inquiry to approved service.", "22.8%", "+3.7%", Landmark),
    ],
    pricingBase: "₹90,000",
    pricingGrowth: "₹1,85,000",
    pricingCustom: "₹3,60,000+",
    testimonials: [
      { quote: "The finance CRM structure makes documents, advisor tasks and approvals feel connected.", name: "Ankit Verma", role: "Sample provider - Financial advisor" },
      { quote: "KYC and renewal desks are exactly where generic CRMs usually fall short.", name: "Megha Rao", role: "Demo brand - Advisory office" },
      { quote: "The approval reports would help operations see delays before clients start chasing.", name: "Sahil Jain", role: "Sample provider - Finance operations" },
    ],
  }),

  insurance: createPage({
    industrySlug: "insurance",
    industryName: "Insurance",
    title: "An Insurance CRM Built Around Policies, Claims and Renewal Follow-Ups",
    highlight: "Renewal Follow-Ups",
    description:
      "Replace scattered policy notes, claim follow-ups and renewal reminders with a CRM for leads, policy suggestions, documents, issued policies, claims, service requests and agent tasks.",
    heroChips: [
      { label: "Policy Pipeline", icon: ShieldCheck },
      { label: "Claims Tasks", icon: ClipboardList },
      { label: "Renewal Follow-Ups", icon: CalendarCheck },
      { label: "Agent Dashboard", icon: BarChart3 },
    ],
    heroStats: [["New Leads", "142"], ["Policies", "58"], ["Renewals Due", "37"], ["Forecast", "₹31L"]],
    crmName: "PolicyCRM",
    customerName: "Ishaan Kapoor",
    customerType: "Motor policy renewal",
    dealValue: "₹48K premium",
    lastContact: "Renewal reminder sent today",
    nextTask: "Agent call for coverage upgrade",
    automationSuggestion: "Create renewal task before policy expiry",
    reportHealth: "Policy health: 83%",
    workflowStages: [
      stage("Lead", "Agent desk", "142 active", Users),
      stage("Policy Suggested", "Advisor", "74 quoted", ShieldCheck),
      stage("Documents", "Review team", "39 pending", FileText),
      stage("Policy Issued", "Admin", "58 active", ClipboardCheck),
      stage("Claim / Service", "Claims desk", "21 open", LifeBuoy),
      stage("Renewal", "Renewal desk", "37 due", CalendarCheck),
    ],
    crmObjects: [
      objectCard("Policyholders", "Customer profile, family/company context, policy interest and history.", "Core record", Users),
      objectCard("Policies", "Coverage, premium, expiry, insurer, status and renewal probability.", "Policy object", ShieldCheck),
      objectCard("Claims", "Claim intake, documents, status, notes and escalations.", "Service object", ClipboardList),
      objectCard("Renewals", "Expiry date, reminder stage, agent owner and retention status.", "Revenue object", CalendarCheck),
      objectCard("Documents", "KYC, policy docs, claim proof and verification status.", "Attached records", FileText),
      objectCard("Agent Tasks", "Calls, follow-ups, renewal reminders and service commitments.", "Task object", Bell),
    ],
    crmRoles: [
      { id: "agent", title: "Agent Desk", role: "Agent", description: "Manage leads, policy suggestions, customer notes, follow-ups and renewal tasks.", icon: Users, capabilities: ["Lead follow-ups", "Policy suggestions", "Customer notes", "Renewal reminders"], metric: "Faster agent response" },
      { id: "claims", title: "Claims Desk", role: "Claims team", description: "Track claim requests, documents, status, escalations and service communication.", icon: ClipboardList, capabilities: ["Claim requests", "Document review", "Status updates", "Escalations"], metric: "Cleaner claim handling" },
      { id: "renewal", title: "Renewal Desk", role: "Retention team", description: "Monitor expiry dates, reminder status, agent actions and renewal conversion.", icon: CalendarCheck, capabilities: ["Renewal queue", "Expiry alerts", "Agent tasks", "Retention reports"], metric: "Better policy retention" },
      { id: "manager", title: "Policy Manager Desk", role: "Management", description: "Review policy mix, agent performance, claims volume and premium forecast.", icon: BarChart3, capabilities: ["Policy analytics", "Agent score", "Claim dashboard", "Premium forecast"], metric: "Better business visibility" },
    ],
    pipelineStages: [
      pipelineStage("New Lead", "₹9L", [deal("Ishaan Kapoor", "₹48K", "Suggest motor policy", "Pooja", "Hot"), deal("Rahil Shah", "₹72K", "Collect coverage need", "Amit", "Warm")]),
      pipelineStage("Policy Suggested", "₹13L", [deal("Family Health Plan", "₹1.2L", "Share comparison", "Pooja", "Warm"), deal("Fleet Insurance", "₹2.8L", "Manager review", "Amit", "Hot")]),
      pipelineStage("Documents Pending", "₹8L", [deal("Meera Soni", "₹55K", "Collect ID proof", "Pooja", "Due"), deal("Nikhil Rao", "₹86K", "Vehicle RC copy", "Amit", "Review")]),
      pipelineStage("Policy Issued", "₹11L", [deal("Kapoor Motor", "₹48K", "Send policy docs", "Pooja", "Won"), deal("Bedi Life", "₹1.1L", "Welcome call", "Amit", "Won")]),
      pipelineStage("Claim / Service", "₹4L", [deal("Claim #CL-2048", "High", "Review documents", "Claims", "Review"), deal("Service #SR-421", "Medium", "Agent callback", "Pooja", "Due")]),
      pipelineStage("Renewal Due", "₹16L", [deal("Renewal - Kapoor", "₹48K", "Upgrade call", "Pooja", "Due")]),
    ],
    automationExamples: [
      automation("Renewal reminder", "Policy renewal due", "30 days remaining", "Create renewal task and agent notification.", CalendarCheck),
      automation("Claim document follow-up", "Claim submitted", "Documents missing", "Create claim desk task and customer reminder.", FileText),
      automation("High premium lead", "New lead captured", "Premium estimate above threshold", "Assign to senior agent and manager view.", ShieldCheck),
    ],
    reportCards: [
      report("Lead Source Performance", "Track which channels create policy inquiries and qualified renewals.", "34% referral", "+11%", Search),
      report("Pipeline Health", "See document delays, claims backlog and renewal gaps.", "83% healthy", "+8%", BarChart3),
      report("Team Follow-Up Score", "Measure agent renewal tasks and service follow-up discipline.", "87% on time", "+9%", Users),
      report("Revenue Forecast", "Expected premium by policy type, agent and renewal probability.", "₹31L", "+15%", ReceiptText),
      report("Customer Aging", "Find policyholders not contacted before expiry or claim stage.", "37 aging", "-13%", Bell),
      report("Lead-to-Policy Conversion", "Track lead to policy suggestion, documents, issue and renewal.", "26.2%", "+4.1%", ShieldCheck),
    ],
    pricingBase: "₹80,000",
    pricingGrowth: "₹1,65,000",
    pricingCustom: "₹3,20,000+",
    testimonials: [
      { quote: "The insurance CRM makes renewals, claims and agent follow-ups feel like one pipeline.", name: "Ishaan Kapoor", role: "Demo brand - Insurance desk" },
      { quote: "Renewal automation is the section every policy advisor will understand immediately.", name: "Pooja Menon", role: "Sample provider - Policy advisor" },
      { quote: "Claims and documents need this kind of controlled CRM workflow.", name: "Rahil Shah", role: "Sample provider - Claims consultant" },
    ],
  }),

  travel: createPage({
    industrySlug: "travel",
    industryName: "Travel",
    title: "A Travel CRM Built Around Leads, Itineraries and Booking Follow-Ups",
    highlight: "Booking Follow-Ups",
    description:
      "Replace scattered trip inquiries, itinerary PDFs and payment follow-ups with a CRM for preferences, packages, bookings, documents, vendors, support and post-trip retention.",
    heroChips: [
      { label: "Travel Leads", icon: Plane },
      { label: "Itinerary Pipeline", icon: Route },
      { label: "Payment Follow-Ups", icon: CreditCard },
      { label: "Revenue Dashboard", icon: BarChart3 },
    ],
    heroStats: [["New Inquiries", "126"], ["Bookings", "42"], ["Follow-Ups Due", "33"], ["Forecast", "₹54L"]],
    crmName: "TripCRM",
    customerName: "Naina Gill",
    customerType: "Goa family package inquiry",
    dealValue: "₹1.8L",
    lastContact: "Itinerary shared 2 days ago",
    nextTask: "Payment follow-up call",
    automationSuggestion: "Create payment follow-up task after itinerary delay",
    reportHealth: "Booking health: 80%",
    workflowStages: [
      stage("Inquiry", "Travel advisor", "126 active", Plane),
      stage("Preferences", "Advisor", "82 mapped", ClipboardList),
      stage("Itinerary", "Package team", "54 shared", Route),
      stage("Payment Follow-Up", "Sales", "33 due", CreditCard),
      stage("Booking", "Operations", "42 confirmed", CalendarCheck),
      stage("Post-Trip Retention", "Retention", "24 warm", Star),
    ],
    crmObjects: [
      objectCard("Travel Leads", "Destination, dates, budget, guests, source and urgency.", "Core record", Plane),
      objectCard("Destination Preferences", "Location interests, trip type, constraints and special requests.", "Qualification object", MapPin),
      objectCard("Itineraries", "Shared itinerary, inclusions, revisions, vendor notes and status.", "Proposal object", Route),
      objectCard("Bookings", "Confirmation, payment, hotel, transport, vouchers and owner.", "Pipeline object", CalendarCheck),
      objectCard("Payments", "Advance, balance, reminders, receipts and pending amount.", "Finance object", CreditCard),
      objectCard("Post-Trip Follow-Ups", "Feedback, reviews, referrals and repeat travel opportunities.", "Retention object", Star),
    ],
    crmRoles: [
      { id: "advisor", title: "Travel Advisor Desk", role: "Advisor", description: "Manage inquiries, preferences, package sharing, follow-ups and traveler notes.", icon: Plane, capabilities: ["Inquiry queue", "Preference capture", "Package sharing", "Follow-up tasks"], metric: "Faster booking conversion" },
      { id: "itinerary", title: "Itinerary Desk", role: "Package team", description: "Track itinerary versions, inclusions, vendor notes and customer feedback.", icon: Route, capabilities: ["Itinerary versions", "Inclusions", "Vendor notes", "Revision tasks"], metric: "Cleaner package delivery" },
      { id: "booking", title: "Booking Desk", role: "Operations", description: "Manage confirmed bookings, vouchers, payment status and travel documents.", icon: CalendarCheck, capabilities: ["Booking status", "Voucher tasks", "Payment status", "Document gaps"], metric: "Better operations control" },
      { id: "retention", title: "Retention Desk", role: "Growth team", description: "Track post-trip feedback, referrals, repeat travel signals and campaign tasks.", icon: Star, capabilities: ["Feedback queue", "Referral notes", "Repeat travel", "Campaign tasks"], metric: "More repeat bookings" },
    ],
    pipelineStages: [
      pipelineStage("New Inquiry", "₹18L", [deal("Naina Gill", "₹1.8L", "Capture dates", "Aarav", "Hot"), deal("Mehul Das", "₹2.4L", "Ask guest count", "Sara", "Warm")]),
      pipelineStage("Preference Captured", "₹22L", [deal("Goa family trip", "₹1.8L", "Build itinerary", "Aarav", "Warm"), deal("Dubai honeymoon", "₹3.2L", "Share options", "Sara", "Hot")]),
      pipelineStage("Itinerary Shared", "₹28L", [deal("Europe group", "₹8L", "Follow up revision", "Aarav", "Review"), deal("Kerala couple", "₹1.4L", "Payment reminder", "Sara", "Due")]),
      pipelineStage("Payment Pending", "₹16L", [deal("Goa family", "₹1.8L", "Advance call", "Aarav", "Due"), deal("Dubai honeymoon", "₹3.2L", "Send payment link", "Sara", "Hot")]),
      pipelineStage("Booking Confirmed", "₹20L", [deal("Bali package", "₹4L", "Voucher upload", "Ops", "Won"), deal("Rajasthan tour", "₹2.2L", "Hotel confirmation", "Ops", "Won")]),
      pipelineStage("Post-Trip Follow-Up", "₹7L", [deal("Kerala repeat", "₹1.4L", "Ask feedback", "Aarav", "Warm")]),
    ],
    automationExamples: [
      automation("Payment follow-up", "Itinerary shared", "Payment not received in 48 hours", "Create payment follow-up task.", CreditCard),
      automation("Revision reminder", "Itinerary viewed", "Customer requested changes", "Assign package revision task.", Route),
      automation("Post-trip retention", "Trip completed", "Feedback not collected", "Create review and referral follow-up.", Star),
    ],
    reportCards: [
      report("Lead Source Performance", "Track campaigns, referrals, destinations and inquiry quality.", "31% referrals", "+10%", Search),
      report("Pipeline Health", "See itinerary delays, payment aging and booking confirmation health.", "80% healthy", "+8%", BarChart3),
      report("Team Follow-Up Score", "Measure advisor tasks, payment calls and itinerary revisions.", "88% on time", "+12%", Users),
      report("Revenue Forecast", "Expected bookings by destination, package type and advisor.", "₹54L", "+19%", ReceiptText),
      report("Customer Aging", "Find leads waiting after itinerary, quote or payment stage.", "33 aging", "-9%", Bell),
      report("Inquiry-to-Booking Conversion", "Track inquiry to preferences, itinerary, payment and booking.", "19.7%", "+3.2%", Plane),
    ],
    pricingBase: "₹75,000",
    pricingGrowth: "₹1,55,000",
    pricingCustom: "₹3,10,000+",
    testimonials: [
      { quote: "The travel CRM connects itinerary, payment and booking follow-up in a very practical way.", name: "Naina Gill", role: "Demo brand - Travel agency" },
      { quote: "Advisor and itinerary desks solve the exact handoff problem tour teams face.", name: "Aarav Khanna", role: "Sample provider - Tour operator" },
      { quote: "The payment follow-up automation would help us close inquiries faster.", name: "Mehul Das", role: "Sample provider - Destination planner" },
    ],
  }),

  automobile: createPage({
    industrySlug: "automobile",
    industryName: "Automobile",
    title: "An Automobile CRM Built Around Leads, Test Drives and Service Follow-Ups",
    highlight: "Service Follow-Ups",
    description:
      "Replace disconnected showroom leads, test drive notes and service reminders with a CRM for vehicle inquiries, quotes, finance cases, deliveries, reminders and retention follow-ups.",
    heroChips: [
      { label: "Vehicle Leads", icon: Car },
      { label: "Test Drives", icon: CalendarCheck },
      { label: "Finance Follow-Ups", icon: CreditCard },
      { label: "Service Dashboard", icon: Wrench },
    ],
    heroStats: [["New Leads", "154"], ["Test Drives", "46"], ["Follow-Ups Due", "39"], ["Forecast", "₹4.2Cr"]],
    crmName: "AutoCRM",
    customerName: "Rajat Bedi",
    customerType: "SUV test drive lead",
    dealValue: "₹18.4L",
    lastContact: "Test drive completed today",
    nextTask: "Send variant quote and finance plan",
    automationSuggestion: "Create quote task if not sent after test drive",
    reportHealth: "Dealership health: 85%",
    workflowStages: [
      stage("Lead", "Lead desk", "154 active", Car),
      stage("Test Drive", "Showroom", "46 booked", CalendarCheck),
      stage("Quote", "Sales", "38 sent", FileText),
      stage("Booking", "Admin", "21 warm", ClipboardCheck),
      stage("Finance", "Finance desk", "18 pending", CreditCard),
      stage("Delivery", "Delivery team", "14 ready", Truck),
      stage("Service Follow-Up", "Service team", "39 due", Wrench),
    ],
    crmObjects: [
      objectCard("Vehicle Leads", "Model interest, source, budget, exchange, timeline and owner.", "Core record", Car),
      objectCard("Test Drives", "Slot, vehicle, executive, feedback and next task.", "Activity object", CalendarCheck),
      objectCard("Quotes", "Variant, offer, insurance, accessories and validity.", "Sales object", FileText),
      objectCard("Finance Cases", "Loan status, documents, approval and payment notes.", "Finance object", CreditCard),
      objectCard("Deliveries", "Delivery checklist, documents, payment and handover tasks.", "Fulfillment object", Truck),
      objectCard("Service Reminders", "Upcoming service, job card, customer notes and retention tasks.", "Retention object", Wrench),
    ],
    crmRoles: [
      { id: "lead", title: "Lead Desk", role: "Sales team", description: "Manage vehicle inquiries, source quality, model interest and follow-up tasks.", icon: Car, capabilities: ["Lead inbox", "Model interest", "Call notes", "Next follow-up"], metric: "More dealership leads" },
      { id: "test-drive", title: "Test Drive Desk", role: "Showroom", description: "Track test drive slots, executive assignment, feedback and quote readiness.", icon: CalendarCheck, capabilities: ["Drive calendar", "Executive assignment", "Feedback notes", "Quote task"], metric: "Faster test drive conversion" },
      { id: "finance", title: "Finance Follow-Up Desk", role: "Finance team", description: "Monitor finance applications, documents, approvals and pending cases.", icon: CreditCard, capabilities: ["Finance cases", "Document gaps", "Approval status", "Payment tasks"], metric: "Cleaner finance movement" },
      { id: "service", title: "Service Retention Desk", role: "Service team", description: "Create service reminders, job follow-ups, offer campaigns and customer retention tasks.", icon: Wrench, capabilities: ["Service reminders", "Job follow-ups", "Offer tasks", "Retention reports"], metric: "Better service retention" },
    ],
    pipelineStages: [
      pipelineStage("New Lead", "₹2.4Cr", [deal("Rajat Bedi", "₹18.4L", "Book test drive", "Sana", "Hot"), deal("Maya Shah", "₹12.2L", "Share variant options", "Arjun", "Warm")]),
      pipelineStage("Test Drive Booked", "₹1.8Cr", [deal("Kabir Bhatia", "₹16L", "Confirm slot", "Sana", "Due"), deal("Tanya Rao", "₹9.8L", "Arrange vehicle", "Arjun", "Warm")]),
      pipelineStage("Quote Sent", "₹1.6Cr", [deal("Nikhil Rao", "₹21L", "Follow quote", "Sana", "Hot"), deal("Pooja Menon", "₹11L", "Discuss offer", "Arjun", "Review")]),
      pipelineStage("Finance Pending", "₹1.2Cr", [deal("SUV Finance", "₹18L", "Collect documents", "Finance", "Due"), deal("Hatchback Loan", "₹8L", "Bank approval", "Finance", "Review")]),
      pipelineStage("Delivery Confirmed", "₹1.4Cr", [deal("Bedi SUV", "₹18.4L", "Delivery checklist", "Sana", "Won"), deal("Kapoor Sedan", "₹13L", "Insurance copy", "Arjun", "Won")]),
      pipelineStage("Service Follow-Up", "₹28L", [deal("First service - Bedi", "Retention", "Service reminder", "Service", "Due")]),
    ],
    automationExamples: [
      automation("Post-test-drive quote task", "Test drive completed", "Quote not sent within 24 hours", "Create sales task and manager alert.", CalendarCheck),
      automation("Finance document alert", "Finance case opened", "Documents missing after 2 days", "Notify finance desk and sales owner.", CreditCard),
      automation("Service retention reminder", "Delivery completed", "First service date approaching", "Create service follow-up task.", Wrench),
    ],
    reportCards: [
      report("Lead Source Performance", "Track showroom, website, ads, events and referrals by qualified leads.", "27% showroom", "+9%", Search),
      report("Pipeline Health", "See quote delays, finance bottlenecks and delivery readiness.", "85% healthy", "+8%", BarChart3),
      report("Team Follow-Up Score", "Measure test drive callbacks, quotes and finance follow-up tasks.", "92% on time", "+11%", Users),
      report("Revenue Forecast", "Expected vehicle sales by model, stage, executive and branch.", "₹4.2Cr", "+16%", ReceiptText),
      report("Customer Aging", "Find leads or service customers untouched beyond follow-up threshold.", "39 aging", "-12%", Bell),
      report("Lead-to-Delivery Conversion", "Track lead to test drive, quote, finance, booking and delivery.", "16.4%", "+2.8%", Car),
    ],
    pricingBase: "₹85,000",
    pricingGrowth: "₹1,75,000",
    pricingCustom: "₹3,40,000+",
    testimonials: [
      { quote: "The CRM maps dealership reality: lead, test drive, quote, finance, delivery and service retention.", name: "Rajat Bedi", role: "Sample provider - Auto dealer" },
      { quote: "Finance follow-up and service retention are usually missing in basic sales CRMs.", name: "Sana Kapoor", role: "Demo brand - Dealership team" },
      { quote: "The test drive desk would make showroom follow-ups easier to control.", name: "Arjun Nair", role: "Sample provider - Service center" },
    ],
  }),

  "service-business": createPage({
    industrySlug: "service-business",
    industryName: "Service Business",
    title: "A Service CRM Built Around Leads, Jobs and Field Team Follow-Ups",
    highlight: "Field Team Follow-Ups",
    description:
      "Replace scattered quote requests, job updates and client follow-ups with a CRM for service leads, quotes, job scheduling, field work, payment reminders and customer feedback.",
    heroChips: [
      { label: "Service Leads", icon: Wrench },
      { label: "Job Scheduling", icon: CalendarCheck },
      { label: "Field Follow-Ups", icon: Users },
      { label: "Revenue Dashboard", icon: BarChart3 },
    ],
    heroStats: [["New Requests", "176"], ["Jobs Open", "58"], ["Follow-Ups Due", "47"], ["Forecast", "₹28L"]],
    crmName: "ServiceCRM",
    customerName: "Kabir Bhatia",
    customerType: "Home repair quote",
    dealValue: "₹45K",
    lastContact: "Quote sent yesterday",
    nextTask: "Confirm job schedule",
    automationSuggestion: "Create payment follow-up after job completion",
    reportHealth: "Service health: 86%",
    workflowStages: [
      stage("New Request", "Lead desk", "176 active", Wrench),
      stage("Quote", "Sales", "82 sent", FileText),
      stage("Job Scheduled", "Scheduler", "58 open", CalendarCheck),
      stage("Field Work", "Field team", "36 active", Users),
      stage("Payment Follow-Up", "Finance", "47 due", CreditCard),
      stage("Feedback", "Support", "29 pending", Star),
    ],
    crmObjects: [
      objectCard("Service Leads", "Request type, source, urgency, address, budget and owner.", "Core record", Wrench),
      objectCard("Job Requests", "Problem details, preferred slot, files, quote and priority.", "Request object", ClipboardList),
      objectCard("Quotes", "Estimate, validity, approval status and next follow-up.", "Sales object", FileText),
      objectCard("Field Assignments", "Team member, route, job status, notes and completion proof.", "Operations object", Users),
      objectCard("Proof Uploads", "Before/after photos, signatures, files and completion evidence.", "Document object", FileCheck2),
      objectCard("Feedback", "Ratings, issues, service quality notes and repeat opportunity.", "Retention object", Star),
    ],
    crmRoles: [
      { id: "lead", title: "Lead Desk", role: "Sales team", description: "Manage new service requests, quotes, qualification and follow-up tasks.", icon: Wrench, capabilities: ["Request inbox", "Quote status", "Call notes", "Next follow-up"], metric: "Faster quote response" },
      { id: "scheduling", title: "Job Scheduling Desk", role: "Operations", description: "Assign teams, confirm slots, route work and monitor job readiness.", icon: CalendarCheck, capabilities: ["Job calendar", "Team assignment", "Route notes", "Customer reminders"], metric: "Cleaner scheduling" },
      { id: "field", title: "Field Team Desk", role: "Field team", description: "Track assigned work, status updates, proof uploads and completion notes.", icon: Users, capabilities: ["Assigned jobs", "Status updates", "Proof upload", "Completion notes"], metric: "Better field execution" },
      { id: "feedback", title: "Customer Feedback Desk", role: "Support team", description: "Collect reviews, resolve issues, trigger repeat work and support follow-ups.", icon: Star, capabilities: ["Review queue", "Issue notes", "Repeat signals", "Support tasks"], metric: "Stronger customer retention" },
    ],
    pipelineStages: [
      pipelineStage("New Request", "₹12L", [deal("Kabir Bhatia", "₹45K", "Qualify repair scope", "Maya", "Hot"), deal("Tanya Rao", "₹28K", "Ask photos", "Arjun", "Warm")]),
      pipelineStage("Quote Sent", "₹18L", [deal("Home repair", "₹45K", "Quote follow-up", "Maya", "Due"), deal("Office cleaning", "₹1.2L", "Manager price review", "Arjun", "Review")]),
      pipelineStage("Job Scheduled", "₹14L", [deal("AC service", "₹18K", "Assign technician", "Ops", "Warm"), deal("Legal consult", "₹35K", "Confirm slot", "Maya", "Due")]),
      pipelineStage("Field Work Done", "₹9L", [deal("Repair job #421", "₹45K", "Upload proof", "Field", "Review"), deal("Install #334", "₹62K", "Completion note", "Field", "Won")]),
      pipelineStage("Payment Follow-Up", "₹7L", [deal("Invoice #221", "₹45K", "Payment reminder", "Finance", "Due"), deal("Invoice #224", "₹62K", "Confirm receipt", "Finance", "Review")]),
      pipelineStage("Feedback", "₹5L", [deal("Bhatia service", "Repeat", "Ask review", "Support", "Warm")]),
    ],
    automationExamples: [
      automation("Payment follow-up", "Job completed", "Payment pending", "Create payment follow-up and feedback request.", CreditCard),
      automation("Quote aging task", "Quote sent", "No response in 48 hours", "Create sales follow-up task.", FileText),
      automation("Field proof reminder", "Job marked complete", "Proof not uploaded", "Notify field team and operations desk.", Users),
    ],
    reportCards: [
      report("Lead Source Performance", "Track website, referrals, calls, ads and repeat customers by qualified jobs.", "33% referrals", "+11%", Search),
      report("Pipeline Health", "See quote delays, job scheduling load and payment bottlenecks.", "86% healthy", "+9%", BarChart3),
      report("Team Follow-Up Score", "Measure quote calls, field updates and payment reminders.", "91% on time", "+13%", Users),
      report("Revenue Forecast", "Expected service revenue by job type, stage and owner.", "₹28L", "+15%", ReceiptText),
      report("Customer Aging", "Find leads, quotes and jobs without recent follow-up.", "47 aging", "-10%", Bell),
      report("Request-to-Payment Conversion", "Track request to quote, job, payment and feedback.", "28.2%", "+4.5%", Wrench),
    ],
    pricingBase: "₹70,000",
    pricingGrowth: "₹1,45,000",
    pricingCustom: "₹2,90,000+",
    testimonials: [
      { quote: "The service CRM connects quotes, scheduling, field updates and payments in one operating view.", name: "Kabir Bhatia", role: "Sample provider - Service agency" },
      { quote: "Field team proof and payment follow-up are exactly the details generic CRMs miss.", name: "Maya Shah", role: "Demo brand - Home services" },
      { quote: "The job scheduling desk would make daily service operations much easier to control.", name: "Tanya Rao", role: "Sample provider - Repair service" },
    ],
  }),
};

export const industryCrmStaticParams: IndustryCrmRoute[] = Object.values(
  industryCrmPages,
).flatMap((page) =>
  page.aliases.map((solutionSlug) => ({
    industrySlug: page.industrySlug,
    solutionSlug,
  })),
);

export function getIndustryCrmPage(
  industrySlug: string,
  solutionSlug: string,
): IndustryCrmPageData | null {
  const page = industryCrmPages[industrySlug];

  if (!page || !page.aliases.includes(solutionSlug)) {
    return null;
  }

  return page;
}
