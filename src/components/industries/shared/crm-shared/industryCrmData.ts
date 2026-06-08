import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Bell,
  Building2,
  CalendarCheck,
  ClipboardCheck,
  ClipboardList,
  CreditCard,
  Factory,
  FileCheck2,
  FileText,
  GraduationCap,
  HeartPulse,
  Home,
  Landmark,
  LifeBuoy,
  MessageCircle,
  PackageCheck,
  ReceiptText,
  Route,
  School,
  ShieldCheck,
  ShoppingBag,
  Star,
  Stethoscope,
  Store,
  Tags,
  UserCheck,
  Users,
  Workflow,
} from "lucide-react";

export type IndustryCrmRoute = {
  industrySlug: string;
  solutionSlug: string;
};

export type IndustryCrmMetric = {
  label: string;
  value: string;
  note: string;
};

export type IndustryCrmHero = {
  eyebrow: string;
  title: string;
  description: string;
  dashboardName: string;
  sidebarItems: string[];
  stats: IndustryCrmMetric[];
  pipelineStages: Array<{
    title: string;
    count: string;
    items: string[];
  }>;
  customerPanel: {
    title: string;
    subtitle: string;
    nextAction: string;
    owner: string;
  };
  followUps: string[];
  analytics: Array<{
    label: string;
    value: string;
  }>;
};

export type IndustryCrmCard = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type IndustryCrmWorkflowStep = IndustryCrmCard & {
  owner: string;
};

export type IndustryCrmModule = IndustryCrmCard & {
  features: string[];
};

export type IndustryCrmRole = IndustryCrmCard & {
  permissions: string[];
};

export type IndustryCrmDemoRedirect = {
  title: string;
  text: string;
  note: string;
  demoHref: string;
  planHref: string;
  primaryLabel: string;
  secondaryLabel: string;
};

export type IndustryCrmAutomation = IndustryCrmCard & {
  trigger: string;
  action: string;
};

export type IndustryCrmReport = IndustryCrmCard & {
  metric: string;
};

export type IndustryCrmIntegration = IndustryCrmCard & {
  flow: string;
};

export type IndustryCrmUseCase = IndustryCrmCard;

export type IndustryCrmProcessStep = {
  title: string;
  description: string;
};

export type IndustryCrmFinalCta = {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
};

export type IndustryCrmPageData = {
  industrySlug: string;
  industryName: string;
  title: string;
  description: string;
  primaryRoute: string;
  aliases: string[];
  keywords: string[];
  serviceType: string;
  hero: IndustryCrmHero;
  problems: IndustryCrmCard[];
  workflowSteps: IndustryCrmWorkflowStep[];
  modules: IndustryCrmModule[];
  roles: IndustryCrmRole[];
  demoRedirect: IndustryCrmDemoRedirect;
  automations: IndustryCrmAutomation[];
  reports: IndustryCrmReport[];
  integrations: IndustryCrmIntegration[];
  useCases: IndustryCrmUseCase[];
  processSteps: IndustryCrmProcessStep[];
  finalCta: IndustryCrmFinalCta;
};

type IndustryConfig = {
  industrySlug: string;
  industryName: string;
  title: string;
  description: string;
  dashboardName: string;
  sidebarItems: string[];
  stats: IndustryCrmMetric[];
  pipelineStages: IndustryCrmHero["pipelineStages"];
  customerPanel: IndustryCrmHero["customerPanel"];
  followUps: string[];
  analytics: IndustryCrmHero["analytics"];
  problems: IndustryCrmCard[];
  workflowSteps: IndustryCrmWorkflowStep[];
  modules: IndustryCrmModule[];
  roles: IndustryCrmRole[];
  automations: IndustryCrmAutomation[];
  reports: IndustryCrmReport[];
  integrations: IndustryCrmIntegration[];
  useCases: IndustryCrmUseCase[];
};

const crmDemoHref = "/crm-demo";
const contactHref = "/contact";

function card(
  title: string,
  description: string,
  icon: LucideIcon,
): IndustryCrmCard {
  return { title, description, icon };
}

function workflowStep(
  title: string,
  description: string,
  owner: string,
  icon: LucideIcon,
): IndustryCrmWorkflowStep {
  return { title, description, owner, icon };
}

function moduleCard(
  title: string,
  description: string,
  icon: LucideIcon,
  features: string[],
): IndustryCrmModule {
  return { title, description, icon, features };
}

function roleCard(
  title: string,
  description: string,
  icon: LucideIcon,
  permissions: string[],
): IndustryCrmRole {
  return { title, description, icon, permissions };
}

function automation(
  title: string,
  trigger: string,
  action: string,
  description: string,
  icon: LucideIcon,
): IndustryCrmAutomation {
  return { title, trigger, action, description, icon };
}

function report(
  title: string,
  metric: string,
  description: string,
  icon: LucideIcon,
): IndustryCrmReport {
  return { title, metric, description, icon };
}

function integration(
  title: string,
  flow: string,
  description: string,
  icon: LucideIcon,
): IndustryCrmIntegration {
  return { title, flow, description, icon };
}

function createPage(config: IndustryConfig): IndustryCrmPageData {
  return {
    industrySlug: config.industrySlug,
    industryName: config.industryName,
    title: config.title,
    description: config.description,
    primaryRoute: `/industries/${config.industrySlug}-crm`,
    aliases: ["crm", "custom-crm", "crm-system"],
    keywords: [
      `${config.industryName} CRM`,
      `${config.industryName} CRM development`,
      "custom CRM system",
      "CRM automation",
      "HNX Solutions",
    ],
    serviceType: `${config.industryName} CRM Development`,
    hero: {
      eyebrow: `${config.industryName} CRM`,
      title: config.title,
      description: config.description,
      dashboardName: config.dashboardName,
      sidebarItems: config.sidebarItems,
      stats: config.stats,
      pipelineStages: config.pipelineStages,
      customerPanel: config.customerPanel,
      followUps: config.followUps,
      analytics: config.analytics,
    },
    problems: config.problems,
    workflowSteps: config.workflowSteps,
    modules: config.modules,
    roles: config.roles,
    demoRedirect: {
      title: "Explore the CRM Demo",
      text: "See how a CRM dashboard manages leads, customers, follow-ups, tasks, pipelines, reports, and team roles in one place.",
      note: "The demo shows a general CRM experience. Your final CRM can be customized for your specific industry workflow.",
      demoHref: crmDemoHref,
      planHref: contactHref,
      primaryLabel: "View CRM Demo",
      secondaryLabel: "Plan My CRM",
    },
    automations: config.automations,
    reports: config.reports,
    integrations: config.integrations,
    useCases: config.useCases,
    processSteps: [
      {
        title: "Workflow discovery",
        description:
          "Map teams, lead sources, stages, tasks, documents, reports, and handoffs before development begins.",
      },
      {
        title: "CRM architecture",
        description:
          "Define modules, fields, permissions, dashboard views, automation rules, and integration points.",
      },
      {
        title: "Design and build",
        description:
          "Create a clean admin-focused CRM interface with practical workflows for each team role.",
      },
      {
        title: "Testing and rollout",
        description:
          "Test sample records, train users, migrate starting data, and launch with support for adoption.",
      },
    ],
    finalCta: {
      title: `Build a custom ${config.industryName} CRM around your workflow`,
      description:
        "Turn scattered leads, manual follow-ups, role confusion, and reporting gaps into one owned CRM system your team can use every day.",
      primaryLabel: "Plan My CRM",
      primaryHref: contactHref,
      secondaryLabel: "View CRM Demo",
      secondaryHref: crmDemoHref,
    },
  };
}

type StandardCrmConfig = {
  industrySlug: string;
  industryName: string;
  title: string;
  description: string;
  dashboardName: string;
  sidebarItems: string[];
  stats: IndustryCrmMetric[];
  pipelineStages: IndustryCrmHero["pipelineStages"];
  customerPanel: IndustryCrmHero["customerPanel"];
  followUps: string[];
  analytics: IndustryCrmHero["analytics"];
  leadNoun: string;
  pipelineNoun: string;
  teamNoun: string;
  documentNoun: string;
  revenueNoun: string;
  primaryIcon: LucideIcon;
  processIcon: LucideIcon;
  teamIcon: LucideIcon;
  documentIcon: LucideIcon;
  financeIcon: LucideIcon;
};

function createStandardCrmConfig(config: StandardCrmConfig): IndustryConfig {
  const leadNoun = config.leadNoun.toLowerCase();
  const pipelineNoun = config.pipelineNoun.toLowerCase();
  const teamNoun = config.teamNoun.toLowerCase();
  const documentNoun = config.documentNoun.toLowerCase();
  const revenueNoun = config.revenueNoun.toLowerCase();

  return {
    industrySlug: config.industrySlug,
    industryName: config.industryName,
    title: config.title,
    description: config.description,
    dashboardName: config.dashboardName,
    sidebarItems: config.sidebarItems,
    stats: config.stats,
    pipelineStages: config.pipelineStages,
    customerPanel: config.customerPanel,
    followUps: config.followUps,
    analytics: config.analytics,
    problems: [
      card(`${config.industryName} inquiries need clear ownership`, `Teams need one place to capture ${leadNoun}, sources, status, and next action.`, config.primaryIcon),
      card("Follow-ups are easy to miss", `Manual reminders make it hard to move ${pipelineNoun} forward at the right time.`, Bell),
      card("Reporting stays scattered", `Owners need quick visibility into ${teamNoun}, conversions, delays, and business performance.`, BarChart3),
    ],
    workflowSteps: [
      workflowStep(`Capture ${leadNoun}`, `Record source, customer details, requirement, priority, and preferred communication channel.`, "Front office / sales team", config.primaryIcon),
      workflowStep("Assign team owner", `Route each record to the right ${teamNoun} with workload visibility.`, "Manager", config.teamIcon),
      workflowStep(`Move ${pipelineNoun}`, "Track stages, status changes, deadlines, and next actions from one workspace.", "Assigned owner", config.processIcon),
      workflowStep(`Track ${documentNoun}`, "Manage checklists, pending items, approvals, and customer updates.", "Operations team", config.documentIcon),
      workflowStep("Review CRM analytics", `Measure response time, conversion, team workload, and ${revenueNoun}.`, "Business owner", BarChart3),
    ],
    modules: [
      moduleCard(`${config.industryName} Lead Management`, `Capture and organize ${leadNoun} from forms, calls, campaigns, referrals, and walk-ins.`, config.primaryIcon, ["Source tracking", "Owner", "Status"]),
      moduleCard(`${config.pipelineNoun} Pipeline`, `Move records through practical stages with next actions and clear ownership.`, config.processIcon, ["Stages", "Next action", "Priority"]),
      moduleCard("Team Assignment", `Assign work to the right ${teamNoun} with workload and escalation visibility.`, config.teamIcon, ["Owner", "Workload", "Escalations"]),
      moduleCard(`${config.documentNoun} Tracking`, "Track required documents, pending items, review notes, and approvals.", config.documentIcon, ["Checklist", "Pending items", "Review"]),
      moduleCard("Follow-up Automation", "Create reminders for calls, renewals, status updates, payments, and customer responses.", Bell, ["Reminders", "Tasks", "Escalations"]),
      moduleCard(`${config.revenueNoun} Status`, `Monitor ${revenueNoun}, pending payments, forecasts, and finance handoffs.`, config.financeIcon, ["Value", "Payments", "Forecast"]),
      moduleCard("Communication Timeline", "Keep customer conversations, notes, calls, emails, and WhatsApp-ready follow-ups in context.", MessageCircle, ["Timeline", "Notes", "Follow-ups"]),
      moduleCard("Analytics Dashboard", "View source performance, conversions, team productivity, delays, and business outcomes.", BarChart3, ["Sources", "Conversion", "Performance"]),
    ],
    roles: [
      roleCard("Business Owner", `Monitor ${pipelineNoun}, team performance, reports, and growth opportunities.`, ShieldCheck, ["Reports", "Team view", "Settings"]),
      roleCard("Manager", `Assign records, review escalations, and keep ${teamNoun} moving.`, config.teamIcon, ["Assignment", "Escalations", "Pipeline"]),
      roleCard("Sales / Service Team", `Manage assigned ${leadNoun}, customer notes, and daily follow-ups.`, UserCheck, ["Assigned records", "Tasks", "Timeline"]),
      roleCard("Operations Team", `Track ${documentNoun}, status updates, handoffs, and completion checks.`, config.documentIcon, ["Checklist", "Status", "Approvals"]),
      roleCard("Finance Team", `Update ${revenueNoun}, payment status, billing notes, and forecasts.`, config.financeIcon, ["Payments", "Forecast", "Finance notes"]),
    ],
    automations: [
      automation("New inquiry assignment", `New ${leadNoun} captured`, "Assign the right owner and create a first response task.", "Avoid unowned customer enquiries.", config.primaryIcon),
      automation("Follow-up reminder", "Next action is due", "Notify the owner and escalate if response is delayed.", "Keep customer movement active.", Bell),
      automation("Document or payment alert", "Checklist or payment is pending", "Create an operations or finance task for review.", "Reduce delays before completion.", config.documentIcon),
    ],
    reports: [
      report(`${config.pipelineNoun} Conversion`, "Live", `Track ${pipelineNoun} movement by source, owner, and stage.`, BarChart3),
      report("Team Performance", "Active", `Measure ${teamNoun}, task completion, response speed, and workload.`, UserCheck),
      report(`${config.revenueNoun} Forecast`, "Updated", `Review ${revenueNoun}, pending payments, and forecasted value.`, config.financeIcon),
    ],
    integrations: [
      integration("Website Forms", "Forms to CRM", `Capture ${leadNoun} and consultation requests directly into the CRM.`, ClipboardList),
      integration("Customer Portal", "Portal to CRM", `Sync ${documentNoun}, status updates, and customer responses.`, config.documentIcon),
      integration("Communication Tools", "Messages to CRM", "Connect reminders, email, calls, and WhatsApp-ready follow-ups.", MessageCircle),
    ],
    useCases: [
      card(`${config.industryName} lead CRM`, `Track ${leadNoun}, stages, owners, and follow-ups.`, config.primaryIcon),
      card(`${config.pipelineNoun} CRM`, `Manage stages, documents, payments, and next actions.`, config.processIcon),
      card(`${config.industryName} reporting CRM`, "Give owners a clean view of performance, workload, and outcomes.", BarChart3),
    ],
  };
}

export const industryCrmPages: Record<string, IndustryCrmPageData> = {
  healthcare: createPage({
    industrySlug: "healthcare",
    industryName: "Healthcare",
    title: "Healthcare CRM for patient enquiries, appointments, doctors and clinic analytics",
    description:
      "A custom healthcare CRM for patient enquiries, appointment scheduling, doctor assignment, visit follow-ups, prescriptions, reports, billing status and clinic analytics.",
    dashboardName: "Clinic CRM",
    sidebarItems: ["Patients", "Appointments", "Doctors", "Billing", "Reports"],
    stats: [
      { label: "New enquiries", value: "128", note: "This week" },
      { label: "Appointments", value: "84", note: "Scheduled" },
      { label: "Follow-ups", value: "36", note: "Due today" },
      { label: "Billing", value: "92%", note: "Updated" },
    ],
    pipelineStages: [
      { title: "New enquiry", count: "28", items: ["Cardiology consult", "Dental checkup"] },
      { title: "Appointment set", count: "42", items: ["OPD visit", "Video consult"] },
      { title: "Follow-up", count: "19", items: ["Report review", "Medicine reminder"] },
    ],
    customerPanel: {
      title: "Patient profile",
      subtitle: "Aarav Sharma - Cardiology",
      nextAction: "Confirm report review tomorrow",
      owner: "Dr. Mehta",
    },
    followUps: ["Send appointment reminder", "Collect pending report", "Update billing status"],
    analytics: [
      { label: "OPD conversion", value: "41%" },
      { label: "Doctor load", value: "Balanced" },
      { label: "No-show risk", value: "Low" },
    ],
    problems: [
      card("Patient enquiries are scattered", "Calls, website forms, WhatsApp requests and walk-ins are difficult to track from one place.", HeartPulse),
      card("Appointment follow-ups are manual", "Reception teams need reminders for confirmations, rescheduling, reports and repeat visits.", CalendarCheck),
      card("Clinic reporting is unclear", "Managers need visibility into departments, doctor workload, billing status and patient flow.", BarChart3),
    ],
    workflowSteps: [
      workflowStep("Capture patient enquiry", "Record source, department, symptoms, urgency and preferred appointment time.", "Receptionist", ClipboardList),
      workflowStep("Assign doctor or department", "Route the patient to the right doctor, department or care team.", "Clinic manager", Stethoscope),
      workflowStep("Schedule and confirm visit", "Book the appointment and trigger confirmation reminders.", "Receptionist", CalendarCheck),
      workflowStep("Track visit and documents", "Attach prescriptions, reports, notes, billing status and next follow-up.", "Doctor / Billing team", FileText),
      workflowStep("Review clinic analytics", "Measure enquiries, appointments, conversion, no-shows and department performance.", "Admin", BarChart3),
    ],
    modules: [
      moduleCard("Patient Lead Management", "Capture patient enquiries from forms, calls, WhatsApp, ads and referrals.", HeartPulse, ["Source tracking", "Department interest", "Urgency status"]),
      moduleCard("Appointment Scheduling", "Manage OPD, consultation, follow-up and reschedule workflows.", CalendarCheck, ["Slots", "Reminders", "No-show tracking"]),
      moduleCard("Doctor / Department Assignment", "Assign patients to doctors, departments or care coordinators.", Stethoscope, ["Doctor queue", "Department rules", "Workload visibility"]),
      moduleCard("Patient History", "Keep patient details, notes, visits and follow-up history organized.", FileText, ["Visit timeline", "Notes", "Care context"]),
      moduleCard("Prescription & Report Tracking", "Track reports, prescriptions, uploads and review status.", FileCheck2, ["Reports", "Prescriptions", "Review tasks"]),
      moduleCard("Billing & Payment Status", "Monitor billing, pending payments and finance handoffs.", ReceiptText, ["Invoices", "Payment status", "Billing notes"]),
      moduleCard("Follow-up Reminders", "Create automated reminders for visits, reports, medication and care follow-ups.", Bell, ["SMS/WhatsApp ready", "Task reminders", "Escalations"]),
      moduleCard("Clinic Analytics Dashboard", "View clinic performance, lead sources, appointment conversion and doctor workload.", BarChart3, ["Source reports", "Conversion", "Doctor load"]),
    ],
    roles: [
      roleCard("Admin", "Full control over users, modules, reports and clinic workflows.", ShieldCheck, ["All modules", "Reports", "User settings"]),
      roleCard("Receptionist", "Manage patient enquiries, appointments, reminders and front-desk tasks.", UserCheck, ["Patient intake", "Appointment calendar", "Follow-ups"]),
      roleCard("Doctor", "View assigned patients, notes, reports and visit follow-up tasks.", Stethoscope, ["Assigned patients", "Reports", "Clinical notes"]),
      roleCard("Billing Team", "Update invoices, payments, pending dues and finance notes.", CreditCard, ["Billing status", "Payment notes", "Finance tasks"]),
      roleCard("Clinic Manager", "Monitor departments, staff workload, conversion and service quality.", BarChart3, ["Team view", "Analytics", "Escalations"]),
    ],
    automations: [
      automation("Appointment reminder", "Appointment scheduled", "Send confirmation and reminder before visit.", "Reduce missed visits and manual reminder work.", CalendarCheck),
      automation("Report follow-up", "Report uploaded", "Create doctor review and patient update task.", "Keep report review workflows visible.", FileCheck2),
      automation("Billing follow-up", "Payment pending", "Notify billing team and schedule a patient follow-up.", "Avoid missed payment updates.", CreditCard),
    ],
    reports: [
      report("Appointment Conversion", "41%", "Track enquiry-to-appointment conversion across departments.", BarChart3),
      report("Doctor Workload", "Balanced", "See doctor assignment volume, pending reviews and visit load.", Stethoscope),
      report("Follow-up Health", "36 due", "Monitor patient follow-ups, report reviews and delayed tasks.", Bell),
    ],
    integrations: [
      integration("Website Forms", "Website to CRM", "Capture appointment requests and service enquiries directly into CRM.", ClipboardList),
      integration("Mobile App", "Patient app to CRM", "Sync patient bookings, reports and reminders with CRM records.", HeartPulse),
      integration("Billing System", "Billing to CRM", "Keep payment status and billing notes visible to the right teams.", CreditCard),
    ],
    useCases: [
      card("Clinic appointment CRM", "Manage patient enquiries, bookings, doctors and visit follow-ups.", CalendarCheck),
      card("Hospital department CRM", "Route patient leads by department and monitor team workload.", Building2),
      card("Diagnostics follow-up CRM", "Track reports, review status, billing and patient reminders.", FileCheck2),
    ],
  }),
  manufacturing: createPage({
    industrySlug: "manufacturing",
    industryName: "Manufacturing",
    title: "Manufacturing CRM for dealers, quotations, orders, production and dispatch",
    description:
      "A manufacturing CRM for dealer and distributor leads, B2B quotations, order pipelines, production updates, dispatch tracking and service ticket visibility.",
    dashboardName: "Factory CRM",
    sidebarItems: ["Dealers", "Quotes", "Orders", "Production", "Dispatch"],
    stats: [
      { label: "Dealer leads", value: "64", note: "Active" },
      { label: "Quotes sent", value: "31", note: "This month" },
      { label: "Orders", value: "18", note: "In pipeline" },
      { label: "Tickets", value: "12", note: "Open" },
    ],
    pipelineStages: [
      { title: "Dealer lead", count: "24", items: ["North distributor", "Bulk buyer"] },
      { title: "Quotation", count: "31", items: ["Machinery RFQ", "Parts quote"] },
      { title: "Production", count: "18", items: ["Batch #204", "Custom order"] },
    ],
    customerPanel: {
      title: "Dealer profile",
      subtitle: "North Zone Distributor",
      nextAction: "Confirm revised quotation",
      owner: "Dealer manager",
    },
    followUps: ["Approve quotation", "Update production status", "Confirm dispatch ETA"],
    analytics: [
      { label: "Quote win rate", value: "29%" },
      { label: "Dispatch delay", value: "4 jobs" },
      { label: "Dealer activity", value: "High" },
    ],
    problems: [
      card("Dealer leads need ownership", "Dealer, distributor and B2B enquiries often move through calls and spreadsheets without accountability.", Users),
      card("Quotation status is unclear", "Teams need visibility into quote revisions, approvals, pricing notes and next follow-ups.", FileText),
      card("Production and dispatch updates are disconnected", "Sales teams need clear status updates without repeatedly checking with operations.", Factory),
    ],
    workflowSteps: [
      workflowStep("Capture B2B lead", "Record dealer, distributor, RFQ, product interest, quantity and territory.", "Sales team", Users),
      workflowStep("Prepare quotation", "Track pricing, approval, revision history and quote follow-up.", "Dealer manager", FileText),
      workflowStep("Move order pipeline", "Convert accepted quotes into order stages with owner and delivery expectations.", "Owner", PackageCheck),
      workflowStep("Update production and inventory", "Track production status, inventory requests and dispatch readiness.", "Production team", Factory),
      workflowStep("Resolve service tickets", "Record complaints, warranty issues and service follow-ups.", "Service team", LifeBuoy),
    ],
    modules: [
      moduleCard("Dealer / Distributor Management", "Manage dealer profiles, territories, contacts and performance notes.", Users, ["Territory", "Account notes", "Dealer score"]),
      moduleCard("B2B Lead Tracking", "Track industrial leads, RFQs, source, product interest and owner.", Factory, ["RFQ source", "Product need", "Lead owner"]),
      moduleCard("Quotation Management", "Create quote workflows with approvals, revisions and follow-up status.", FileText, ["Quote status", "Approvals", "Revision notes"]),
      moduleCard("Order Pipeline", "Move accepted orders through production, dispatch and delivery stages.", PackageCheck, ["Order stages", "ETA", "Owner"]),
      moduleCard("Production Status Tracking", "Keep sales and management updated on production readiness.", Factory, ["Batch status", "Production notes", "Delays"]),
      moduleCard("Inventory Request Tracking", "Manage product requests, availability and inventory-linked responses.", ClipboardCheck, ["Stock requests", "Availability", "Priority"]),
      moduleCard("Service / Complaint Tickets", "Track dealer complaints, service requests and resolution history.", LifeBuoy, ["Tickets", "Warranty", "Resolution"]),
      moduleCard("Sales Team Performance", "View sales activity, quote conversion and dealer follow-up health.", BarChart3, ["Activity", "Conversion", "Follow-ups"]),
    ],
    roles: [
      roleCard("Owner", "Monitor leads, quotations, orders, revenue and team performance.", ShieldCheck, ["Reports", "Approvals", "Revenue view"]),
      roleCard("Sales Team", "Manage B2B leads, quotes, follow-ups and deal stages.", Users, ["Lead pipeline", "Quote follow-up", "Customer notes"]),
      roleCard("Dealer Manager", "Manage dealer accounts, territories, pricing discussions and escalations.", UserCheck, ["Dealer accounts", "Territory view", "Escalations"]),
      roleCard("Production Team", "Update production stage, availability, inventory needs and dispatch readiness.", Factory, ["Production status", "Inventory requests", "ETA notes"]),
      roleCard("Service Team", "Handle complaints, warranty notes, tickets and closure updates.", LifeBuoy, ["Tickets", "Complaints", "Resolution"]),
    ],
    automations: [
      automation("Quote follow-up", "Quotation sent", "Create follow-up task if no response in 48 hours.", "Keep sales follow-ups consistent.", FileText),
      automation("Production status alert", "Production stage changes", "Notify sales owner and dealer manager.", "Reduce repeated status calls.", Factory),
      automation("Service escalation", "Ticket unresolved", "Escalate to service manager before SLA risk.", "Protect dealer relationships.", LifeBuoy),
    ],
    reports: [
      report("Quote Conversion", "29%", "Track quote-to-order conversion by product, dealer and sales owner.", BarChart3),
      report("Production Pipeline", "18 active", "See open orders, production status and dispatch readiness.", Factory),
      report("Dealer Performance", "64 active", "Measure dealer source quality, activity and repeat order potential.", Users),
    ],
    integrations: [
      integration("Website RFQ Forms", "RFQ to CRM", "Send website RFQs and dealer applications into CRM.", ClipboardList),
      integration("Dealer Portal", "Portal to CRM", "Let dealers request quotes, documents and order updates.", Building2),
      integration("Inventory / ERP", "Operations to CRM", "Sync availability, order status and dispatch data where needed.", PackageCheck),
    ],
    useCases: [
      card("Dealer pipeline CRM", "Track dealer onboarding, territory activity and follow-ups.", Users),
      card("Quotation CRM", "Manage RFQs, quote approvals, revisions and conversion.", FileText),
      card("Production-linked sales CRM", "Connect sales visibility with production and dispatch stages.", Factory),
    ],
  }),
  education: createPage({
    industrySlug: "education",
    industryName: "Education",
    title: "Education CRM for admissions, enquiries, counsellors, fee follow-ups and parents",
    description:
      "An education CRM for student enquiries, admission pipelines, counsellor assignment, demo class scheduling, fee follow-ups, student profiles and parent communication.",
    dashboardName: "Admission CRM",
    sidebarItems: ["Enquiries", "Admissions", "Counsellors", "Fees", "Parents"],
    stats: [
      { label: "Student leads", value: "212", note: "This month" },
      { label: "Demo classes", value: "48", note: "Scheduled" },
      { label: "Fee follow-ups", value: "27", note: "Due" },
      { label: "Admissions", value: "36", note: "Won" },
    ],
    pipelineStages: [
      { title: "New enquiry", count: "74", items: ["Grade 11 science", "IELTS course"] },
      { title: "Counselling", count: "53", items: ["Parent call", "Course guidance"] },
      { title: "Admission", count: "36", items: ["Fee pending", "Documents due"] },
    ],
    customerPanel: {
      title: "Student profile",
      subtitle: "Nisha Verma - Admission lead",
      nextAction: "Schedule parent counselling call",
      owner: "Counsellor",
    },
    followUps: ["Confirm demo class", "Send fee reminder", "Collect admission documents"],
    analytics: [
      { label: "Lead conversion", value: "17%" },
      { label: "Counsellor load", value: "Medium" },
      { label: "Fee risk", value: "27 due" },
    ],
    problems: [
      card("Student enquiries are hard to prioritize", "Admissions teams need source, program, class, urgency and counsellor ownership in one place.", GraduationCap),
      card("Counsellor follow-ups get missed", "Demo classes, calls, parent discussions and fee reminders need clear task tracking.", UserCheck),
      card("Branch reporting is manual", "Managers need admission funnel, counsellor activity, fee status and campaign performance.", BarChart3),
    ],
    workflowSteps: [
      workflowStep("Capture student enquiry", "Record program interest, source, class, preferred branch and contact details.", "Admission desk", GraduationCap),
      workflowStep("Assign counsellor", "Route each student to the right counsellor or branch team.", "Admin", UserCheck),
      workflowStep("Schedule demo or visit", "Plan demo class, campus visit, counselling call or assessment.", "Counsellor", CalendarCheck),
      workflowStep("Track admission and fees", "Move students through admission stages, documents and fee follow-ups.", "Finance team", CreditCard),
      workflowStep("Communicate with parents", "Keep parent updates, notes, reminders and decisions connected.", "Branch manager", MessageCircle),
    ],
    modules: [
      moduleCard("Student Enquiry Management", "Capture student leads from ads, website, calls, events and referrals.", GraduationCap, ["Source", "Program", "Lead owner"]),
      moduleCard("Admission Pipeline", "Track enquiry, counselling, demo, application, fee and admission stages.", Route, ["Stages", "Status", "Next action"]),
      moduleCard("Counsellor Assignment", "Assign students to counsellors with workload and branch visibility.", UserCheck, ["Counsellor owner", "Branch", "Load"]),
      moduleCard("Demo Class / Campus Visit Scheduling", "Schedule demos, visits, counselling calls and reminders.", CalendarCheck, ["Slots", "Reminders", "Attendance"]),
      moduleCard("Fee Follow-up Tracking", "Track pending fees, payment stages and finance reminders.", CreditCard, ["Pending fee", "Due dates", "Payment notes"]),
      moduleCard("Student Profile Management", "Store student details, preferences, notes and admission documents.", FileText, ["Profile", "Documents", "Notes"]),
      moduleCard("Parent Communication", "Manage parent calls, updates, reminders and communication notes.", MessageCircle, ["Parent notes", "Updates", "Follow-ups"]),
      moduleCard("Admission Reports", "Monitor leads, conversions, counsellor activity and branch performance.", BarChart3, ["Funnel", "Counsellors", "Branch reports"]),
    ],
    roles: [
      roleCard("Admin", "Manage branches, counsellors, programs, reports and settings.", ShieldCheck, ["All branches", "Users", "Reports"]),
      roleCard("Admission Counsellor", "Handle assigned enquiries, calls, demos and admission movement.", UserCheck, ["Assigned leads", "Tasks", "Notes"]),
      roleCard("Teacher / Trainer", "View demo classes, student interest and class-related notes.", School, ["Demo schedule", "Student notes", "Class status"]),
      roleCard("Finance Team", "Track fee dues, payment notes, reminders and admission billing.", CreditCard, ["Fee status", "Payment notes", "Reminders"]),
      roleCard("Branch Manager", "Monitor counsellors, admissions, source performance and branch health.", BarChart3, ["Branch reports", "Team view", "Escalations"]),
    ],
    automations: [
      automation("Counsellor assignment", "New student enquiry", "Assign counsellor based on program, branch and workload.", "Every enquiry gets an owner quickly.", UserCheck),
      automation("Demo reminder", "Demo class scheduled", "Send reminder to student/parent and create attendance task.", "Reduce missed demo sessions.", CalendarCheck),
      automation("Fee follow-up", "Admission stage reaches fee pending", "Create finance task and parent reminder.", "Keep fee collection visible.", CreditCard),
    ],
    reports: [
      report("Admission Funnel", "17%", "Track enquiry-to-admission conversion by source and program.", BarChart3),
      report("Counsellor Performance", "53 active", "Measure calls, demos, follow-ups and admissions by counsellor.", UserCheck),
      report("Fee Follow-up View", "27 due", "Monitor pending payments, reminders and finance tasks.", CreditCard),
    ],
    integrations: [
      integration("Website / Landing Pages", "Forms to CRM", "Capture admission enquiries directly from campaigns and site forms.", ClipboardList),
      integration("Student Mobile App", "App to CRM", "Sync demo classes, notices, applications and student updates.", GraduationCap),
      integration("Payment System", "Payments to CRM", "Keep fee status and finance follow-ups connected.", CreditCard),
    ],
    useCases: [
      card("Admissions CRM", "Manage enquiries, counselling, demo classes and admission conversion.", GraduationCap),
      card("Coaching institute CRM", "Track student leads, batches, parent calls and fee reminders.", School),
      card("Multi-branch CRM", "Compare branch performance, counsellor workload and source quality.", Building2),
    ],
  }),
  "real-estate": createPage({
    industrySlug: "real-estate",
    industryName: "Real Estate",
    title: "Real Estate CRM for property leads, site visits, brokers, deals and payments",
    description:
      "A real estate CRM for property leads, buyer requirements, broker assignment, site visit scheduling, deal stages, document tracking and payment follow-ups.",
    dashboardName: "Property CRM",
    sidebarItems: ["Leads", "Properties", "Site Visits", "Deals", "Payments"],
    stats: [
      { label: "Property leads", value: "156", note: "Active" },
      { label: "Site visits", value: "42", note: "Scheduled" },
      { label: "Deals", value: "18", note: "Negotiation" },
      { label: "Payments", value: "11", note: "Follow-up" },
    ],
    pipelineStages: [
      { title: "New lead", count: "58", items: ["3BHK buyer", "Commercial lease"] },
      { title: "Site visit", count: "42", items: ["Sector 82 visit", "Villa tour"] },
      { title: "Deal stage", count: "18", items: ["Token pending", "Docs review"] },
    ],
    customerPanel: {
      title: "Buyer profile",
      subtitle: "Rohan Kapoor - 3BHK requirement",
      nextAction: "Confirm Saturday site visit",
      owner: "Sales manager",
    },
    followUps: ["Match property inventory", "Confirm broker assignment", "Send payment reminder"],
    analytics: [
      { label: "Visit conversion", value: "27%" },
      { label: "Hot buyers", value: "34" },
      { label: "Inventory match", value: "62%" },
    ],
    problems: [
      card("Property leads are fragmented", "Buyers, tenants, referrals and campaign leads need requirements and ownership tracked clearly.", Home),
      card("Site visits need coordination", "Brokers, agents, buyers and coordinators need shared visibility on visit timing and status.", CalendarCheck),
      card("Deals and documents get messy", "Payments, documents, commission notes and deal stages need one organized CRM record.", FileText),
    ],
    workflowSteps: [
      workflowStep("Capture property lead", "Record buyer or tenant requirement, budget, location, property type and source.", "Sales team", Home),
      workflowStep("Map requirement to inventory", "Match requirements with available properties, projects or rental inventory.", "Sales manager", Building2),
      workflowStep("Assign broker or agent", "Give each lead an owner and keep broker notes visible.", "Owner", Users),
      workflowStep("Schedule site visit", "Plan visits, reminders, attendance and feedback after the visit.", "Site coordinator", CalendarCheck),
      workflowStep("Track deal, documents and payments", "Manage deal stages, documents, commission and payment follow-ups.", "Finance team", CreditCard),
    ],
    modules: [
      moduleCard("Property Lead Management", "Capture buyer, tenant and investor leads from every source.", Home, ["Source", "Requirement", "Budget"]),
      moduleCard("Buyer / Tenant Requirement Mapping", "Match requirements with inventory and shortlist options.", Building2, ["Location", "Property type", "Budget"]),
      moduleCard("Broker / Agent Assignment", "Assign leads, visits and deals to brokers or agents.", Users, ["Owner", "Role", "Follow-ups"]),
      moduleCard("Site Visit Scheduling", "Plan visits, reminders, coordinator tasks and feedback notes.", CalendarCheck, ["Slots", "Attendance", "Feedback"]),
      moduleCard("Deal Pipeline", "Track lead, visit, negotiation, booking, documentation and closure stages.", Route, ["Stages", "Deal value", "Next action"]),
      moduleCard("Property Inventory", "Manage properties, availability, price, status and notes.", Building2, ["Inventory", "Availability", "Price"]),
      moduleCard("Document Tracking", "Track KYC, agreements, booking forms and document status.", FileCheck2, ["KYC", "Agreements", "Status"]),
      moduleCard("Commission / Payment Tracking", "Track token, milestones, commission and payment follow-ups.", CreditCard, ["Payment status", "Commission", "Due dates"]),
    ],
    roles: [
      roleCard("Owner", "View business performance, deals, payments and team activity.", ShieldCheck, ["All reports", "Payments", "Team view"]),
      roleCard("Sales Manager", "Manage lead assignment, deal stages, inventory matching and escalations.", BarChart3, ["Lead assignment", "Pipeline", "Reports"]),
      roleCard("Broker / Agent", "Work assigned leads, site visits, customer notes and follow-ups.", Users, ["Assigned leads", "Visits", "Notes"]),
      roleCard("Site Visit Coordinator", "Schedule visits, reminders, route details and attendance updates.", CalendarCheck, ["Visit calendar", "Attendance", "Reminders"]),
      roleCard("Finance Team", "Track payment milestones, commission notes and finance follow-ups.", CreditCard, ["Payments", "Commission", "Due follow-ups"]),
    ],
    automations: [
      automation("Site visit reminder", "Site visit scheduled", "Notify buyer, broker and coordinator before visit.", "Reduce missed or unconfirmed visits.", CalendarCheck),
      automation("Hot lead escalation", "Budget and requirement match", "Notify sales manager and assign priority follow-up.", "Move qualified buyers faster.", Bell),
      automation("Payment milestone follow-up", "Deal reaches booking stage", "Create payment and document tasks.", "Keep deal closure organized.", CreditCard),
    ],
    reports: [
      report("Lead Source Quality", "34 hot", "Track which campaigns and referrals create qualified buyers.", BarChart3),
      report("Site Visit Conversion", "27%", "Measure visit scheduling, attendance and booking movement.", CalendarCheck),
      report("Deal Forecast", "18 active", "See deals by stage, owner, project and expected closure.", ReceiptText),
    ],
    integrations: [
      integration("Property Website", "Website to CRM", "Capture project enquiries, property forms and landing page leads.", Home),
      integration("Mobile App", "Buyer app to CRM", "Sync saved properties, site visit requests and buyer preferences.", Building2),
      integration("Payment / Documents", "Finance to CRM", "Connect payment updates, document status and commission notes.", FileCheck2),
    ],
    useCases: [
      card("Brokerage CRM", "Track buyers, tenants, brokers, visits and deal stages.", Users),
      card("Builder sales CRM", "Manage project inventory, site visits, bookings and payments.", Building2),
      card("Rental CRM", "Map tenant needs, property availability, visits and agreements.", Home),
    ],
  }),
  retail: createPage({
    industrySlug: "retail",
    industryName: "Retail",
    title: "Retail CRM for customer retention, loyalty, offers, support and repeat sales",
    description:
      "A retail CRM for customer profiles, order history, loyalty rewards, offer campaigns, support tickets, inventory-linked requests, repeat purchase reminders and feedback.",
    dashboardName: "Retail CRM",
    sidebarItems: ["Customers", "Orders", "Loyalty", "Offers", "Support"],
    stats: [
      { label: "Customers", value: "2.4K", note: "Tracked" },
      { label: "Repeat buyers", value: "38%", note: "This month" },
      { label: "Campaigns", value: "12", note: "Active" },
      { label: "Tickets", value: "24", note: "Open" },
    ],
    pipelineStages: [
      { title: "New customer", count: "220", items: ["First order", "Store visit"] },
      { title: "Offer sent", count: "310", items: ["Loyalty coupon", "Restock alert"] },
      { title: "Repeat purchase", count: "146", items: ["Monthly reorder", "VIP buyer"] },
    ],
    customerPanel: {
      title: "Customer profile",
      subtitle: "Priya Nair - Loyalty member",
      nextAction: "Send repeat purchase offer",
      owner: "Store manager",
    },
    followUps: ["Send loyalty offer", "Resolve support ticket", "Ask for feedback"],
    analytics: [
      { label: "Repeat rate", value: "38%" },
      { label: "Offer response", value: "21%" },
      { label: "Ticket SLA", value: "94%" },
    ],
    problems: [
      card("Customer history is disconnected", "Stores need one view of orders, preferences, loyalty, support and feedback.", ShoppingBag),
      card("Repeat purchases depend on memory", "Teams need reminders and campaign workflows to bring customers back.", Bell),
      card("Support and feedback are scattered", "Tickets, complaints, product requests and feedback need structured resolution.", LifeBuoy),
    ],
    workflowSteps: [
      workflowStep("Create customer profile", "Capture customer details, preferences, order history and loyalty status.", "Sales staff", UserCheck),
      workflowStep("Track order and request history", "Connect purchases, inventory-linked requests and support notes.", "Store manager", ShoppingBag),
      workflowStep("Run loyalty and offers", "Send offers based on segment, order history or campaign goals.", "Marketing team", Tags),
      workflowStep("Manage support tickets", "Track complaints, returns, service requests and closure status.", "Support team", LifeBuoy),
      workflowStep("Measure repeat sales", "Review retention, offer response, repeat purchases and feedback.", "Owner", BarChart3),
    ],
    modules: [
      moduleCard("Customer Profile Management", "Keep customer details, segments, preferences and history in one place.", UserCheck, ["Profile", "Segment", "Preferences"]),
      moduleCard("Order History", "Track online, offline and repeat order activity.", ShoppingBag, ["Orders", "Items", "Dates"]),
      moduleCard("Loyalty & Rewards Tracking", "Manage points, rewards, tier status and redemption notes.", Star, ["Points", "Rewards", "Tier"]),
      moduleCard("Offer Campaigns", "Create offer lists, campaign tasks and customer follow-ups.", Tags, ["Campaigns", "Segments", "Response"]),
      moduleCard("Support Tickets", "Track issues, returns, complaints and resolution history.", LifeBuoy, ["Tickets", "Status", "SLA"]),
      moduleCard("Inventory-linked Requests", "Capture product requests, restock alerts and availability follow-ups.", Store, ["Requests", "Restock", "Availability"]),
      moduleCard("Repeat Purchase Reminders", "Trigger reminders based on purchase cycles and customer behavior.", Bell, ["Cycles", "Reminders", "Reactivation"]),
      moduleCard("Feedback Management", "Collect ratings, reviews, complaints and improvement notes.", MessageCircle, ["Reviews", "Feedback", "Follow-up"]),
    ],
    roles: [
      roleCard("Owner", "View sales, retention, campaigns, tickets and store performance.", ShieldCheck, ["Business reports", "Campaigns", "Team view"]),
      roleCard("Store Manager", "Manage customer queues, orders, staff tasks and support escalations.", Store, ["Store view", "Customer tasks", "Escalations"]),
      roleCard("Sales Staff", "Update customer profiles, order notes and follow-up tasks.", Users, ["Customer profile", "Order notes", "Follow-ups"]),
      roleCard("Support Team", "Resolve support tickets, returns, complaints and feedback.", LifeBuoy, ["Tickets", "Returns", "Resolution"]),
      roleCard("Marketing Team", "Run campaigns, loyalty offers and reactivation workflows.", Tags, ["Segments", "Offers", "Campaign response"]),
    ],
    automations: [
      automation("Repeat purchase reminder", "Purchase cycle due", "Create customer reminder or campaign task.", "Bring customers back at the right time.", Bell),
      automation("Loyalty offer", "Customer reaches reward threshold", "Trigger reward notification and staff follow-up.", "Increase retention and engagement.", Star),
      automation("Support escalation", "Ticket remains open", "Escalate to store manager before SLA breach.", "Protect customer experience.", LifeBuoy),
    ],
    reports: [
      report("Repeat Purchase Rate", "38%", "Track retention, reorder cycles and returning customers.", BarChart3),
      report("Campaign Response", "21%", "Measure offer clicks, redemptions and customer segments.", Tags),
      report("Support SLA", "94%", "Monitor open tickets, resolution time and feedback health.", LifeBuoy),
    ],
    integrations: [
      integration("E-commerce Website", "Orders to CRM", "Connect product enquiries, customer forms and order activity.", ShoppingBag),
      integration("Retail Mobile App", "App to CRM", "Sync customer profiles, loyalty, offers and support actions.", Store),
      integration("POS / Inventory", "Store data to CRM", "Connect order history, stock requests and product availability.", PackageCheck),
    ],
    useCases: [
      card("Customer retention CRM", "Track customers, purchase cycles, offers and repeat sales.", UserCheck),
      card("Loyalty CRM", "Manage rewards, tiers, campaigns and redemptions.", Star),
      card("Retail support CRM", "Handle tickets, returns, complaints and customer feedback.", LifeBuoy),
    ],
  }),
  finance: createPage({
    industrySlug: "finance",
    industryName: "Finance",
    title: "Finance CRM for leads, KYC, documents, advisors, pipelines and compliance",
    description:
      "A finance CRM for financial leads, KYC tracking, document collection, loan, policy and investment pipelines, advisor assignment, compliance notes and follow-up automation.",
    dashboardName: "Finance CRM",
    sidebarItems: ["Leads", "KYC", "Documents", "Advisors", "Compliance"],
    stats: [
      { label: "Financial leads", value: "96", note: "Active" },
      { label: "KYC pending", value: "22", note: "Needs action" },
      { label: "Advisor tasks", value: "41", note: "Open" },
      { label: "Pipeline", value: "Rs. 2.8Cr", note: "Forecast" },
    ],
    pipelineStages: [
      { title: "New lead", count: "34", items: ["Loan enquiry", "Policy request"] },
      { title: "KYC / Docs", count: "22", items: ["PAN pending", "Income proof"] },
      { title: "Advisor review", count: "41", items: ["Eligibility check", "Policy fit"] },
    ],
    customerPanel: {
      title: "Client profile",
      subtitle: "Meera Sinha - Home loan lead",
      nextAction: "Collect income proof and KYC",
      owner: "Relationship manager",
    },
    followUps: ["Request missing document", "Schedule advisor call", "Update eligibility status"],
    analytics: [
      { label: "Lead quality", value: "High" },
      { label: "KYC delay", value: "22" },
      { label: "Pipeline", value: "Rs. 2.8Cr" },
    ],
    problems: [
      card("Financial leads need secure tracking", "Loan, policy and investment enquiries need advisor ownership and careful follow-up.", Landmark),
      card("KYC and documents slow the pipeline", "Teams need clear status for missing documents, eligibility and client readiness.", FileCheck2),
      card("Compliance notes need visibility", "Advisors and managers need controlled records for risk, eligibility and audit context.", ShieldCheck),
    ],
    workflowSteps: [
      workflowStep("Capture financial lead", "Record product interest, source, budget, timeline and client profile.", "Relationship manager", Landmark),
      workflowStep("Assign advisor", "Route leads by service type, eligibility, location or advisor workload.", "Business owner", UserCheck),
      workflowStep("Collect KYC and documents", "Track document checklist, missing files and verification status.", "Document executive", FileCheck2),
      workflowStep("Move pipeline stage", "Track loan, policy or investment status with next actions.", "Advisor", Route),
      workflowStep("Add compliance notes", "Store risk, eligibility, compliance and approval context.", "Compliance team", ShieldCheck),
    ],
    modules: [
      moduleCard("Financial Lead Management", "Capture loan, policy, advisory and investment enquiries.", Landmark, ["Lead source", "Product interest", "Owner"]),
      moduleCard("Client KYC Tracking", "Track KYC status, verification steps and pending actions.", FileCheck2, ["KYC status", "Checklist", "Verification"]),
      moduleCard("Document Collection", "Manage document requests, uploads, missing files and review notes.", FileText, ["Documents", "Missing files", "Review"]),
      moduleCard("Loan / Policy / Investment Pipeline", "Move clients through stages by financial product type.", Route, ["Stages", "Value", "Status"]),
      moduleCard("Advisor Assignment", "Assign leads to advisors or relationship managers with workload visibility.", UserCheck, ["Advisor owner", "Workload", "Next task"]),
      moduleCard("Follow-up Automation", "Create reminders for documents, calls, renewals and decisions.", Bell, ["Reminders", "Escalations", "Tasks"]),
      moduleCard("Risk / Eligibility Status", "Track eligibility checks, risk notes and fitment decisions.", ShieldCheck, ["Eligibility", "Risk", "Review"]),
      moduleCard("Compliance Notes", "Keep compliance-sensitive notes controlled and visible to approved roles.", ClipboardCheck, ["Notes", "Approvals", "Audit context"]),
    ],
    roles: [
      roleCard("Advisor", "Manage assigned financial leads, client notes and next actions.", Landmark, ["Assigned clients", "Pipeline", "Follow-ups"]),
      roleCard("Relationship Manager", "Own client communication, appointments and relationship history.", UserCheck, ["Client timeline", "Calls", "Tasks"]),
      roleCard("Compliance Team", "Review eligibility, risk notes, documents and controlled records.", ShieldCheck, ["Compliance view", "Risk notes", "Approvals"]),
      roleCard("Document Executive", "Collect, verify and update KYC and document status.", FileCheck2, ["Document checklist", "Missing files", "Verification"]),
      roleCard("Business Owner", "Monitor pipeline, advisor performance, compliance risk and revenue forecast.", BarChart3, ["Reports", "Pipeline", "Team view"]),
    ],
    automations: [
      automation("Document reminder", "KYC document missing", "Notify document executive and client owner.", "Keep document collection moving.", FileCheck2),
      automation("Advisor assignment", "New finance lead", "Assign based on product type and workload.", "Avoid unowned financial enquiries.", UserCheck),
      automation("Compliance review task", "Eligibility status changes", "Create compliance review task for approved role.", "Keep sensitive review steps controlled.", ShieldCheck),
    ],
    reports: [
      report("Pipeline Forecast", "Rs. 2.8Cr", "Track loan, policy and investment pipeline by owner and stage.", BarChart3),
      report("KYC Completion", "22 pending", "Monitor documents, missing files and verification delays.", FileCheck2),
      report("Advisor Performance", "41 tasks", "Measure advisor workload, follow-up speed and conversion.", UserCheck),
    ],
    integrations: [
      integration("Website Forms", "Forms to CRM", "Capture financial enquiries and consultation requests.", ClipboardList),
      integration("Client Portal", "Portal to CRM", "Sync document uploads, KYC checklists and client updates.", FileCheck2),
      integration("Communication Tools", "Reminders to CRM", "Connect reminders, email and WhatsApp-ready follow-ups.", MessageCircle),
    ],
    useCases: [
      card("Loan CRM", "Track loan leads, KYC, eligibility, documents and approval movement.", Landmark),
      card("Insurance / policy CRM", "Manage policy enquiries, renewals, documents and advisor follow-ups.", ShieldCheck),
      card("Investment advisory CRM", "Track client interest, risk profile, advisor notes and compliance tasks.", BarChart3),
    ],
  }),
  insurance: createPage(createStandardCrmConfig({
    industrySlug: "insurance",
    industryName: "Insurance",
    title: "Insurance CRM for policy leads, renewals, claims, agents and document follow-ups",
    description:
      "A custom insurance CRM for policy enquiries, renewals, claim tracking, agent assignment, document collection, premium follow-ups and customer communication.",
    dashboardName: "Insurance CRM",
    sidebarItems: ["Policies", "Claims", "Agents", "Renewals", "Documents"],
    stats: [
      { label: "Policy leads", value: "118", note: "Active" },
      { label: "Renewals due", value: "42", note: "This week" },
      { label: "Claims open", value: "26", note: "Needs review" },
      { label: "Premium pipeline", value: "Rs. 84L", note: "Forecast" },
    ],
    pipelineStages: [
      { title: "New policy enquiry", count: "38", items: ["Health policy", "Vehicle policy"] },
      { title: "Quote shared", count: "31", items: ["Family plan", "Term plan"] },
      { title: "Document review", count: "22", items: ["KYC pending", "Claim proof"] },
    ],
    customerPanel: {
      title: "Policyholder profile",
      subtitle: "Riya Mehta - Health insurance lead",
      nextAction: "Share revised premium quote",
      owner: "Insurance advisor",
    },
    followUps: ["Send renewal reminder", "Collect claim document", "Schedule advisor call"],
    analytics: [
      { label: "Renewal rate", value: "74%" },
      { label: "Claims open", value: "26" },
      { label: "Premium pipeline", value: "Rs. 84L" },
    ],
    leadNoun: "Policy leads",
    pipelineNoun: "Policy pipeline",
    teamNoun: "agents and advisors",
    documentNoun: "Policy documents",
    revenueNoun: "premium revenue",
    primaryIcon: ShieldCheck,
    processIcon: Route,
    teamIcon: UserCheck,
    documentIcon: FileCheck2,
    financeIcon: CreditCard,
  })),
  automobile: createPage(createStandardCrmConfig({
    industrySlug: "automobile",
    industryName: "Automobile",
    title: "Automobile CRM for vehicle leads, test drives, quotations, bookings and service reminders",
    description:
      "A custom automobile CRM for vehicle enquiries, showroom visits, test drives, quotations, bookings, delivery follow-ups, service reminders and sales reporting.",
    dashboardName: "Automobile CRM",
    sidebarItems: ["Leads", "Vehicles", "Test Drives", "Bookings", "Service"],
    stats: [
      { label: "Vehicle leads", value: "156", note: "Active" },
      { label: "Test drives", value: "48", note: "Scheduled" },
      { label: "Bookings", value: "18", note: "This week" },
      { label: "Booking value", value: "Rs. 1.2Cr", note: "Forecast" },
    ],
    pipelineStages: [
      { title: "New vehicle lead", count: "46", items: ["SUV enquiry", "EV interest"] },
      { title: "Test drive", count: "28", items: ["Showroom visit", "Home test drive"] },
      { title: "Quotation / booking", count: "19", items: ["Finance option", "Delivery date"] },
    ],
    customerPanel: {
      title: "Buyer profile",
      subtitle: "Aarav Kapoor - EV enquiry",
      nextAction: "Confirm test drive slot",
      owner: "Sales advisor",
    },
    followUps: ["Confirm test drive", "Share quotation", "Send service reminder"],
    analytics: [
      { label: "Test drive rate", value: "31%" },
      { label: "Bookings", value: "18" },
      { label: "Booking value", value: "Rs. 1.2Cr" },
    ],
    leadNoun: "Vehicle leads",
    pipelineNoun: "Sales pipeline",
    teamNoun: "sales advisors",
    documentNoun: "Booking documents",
    revenueNoun: "booking value",
    primaryIcon: Store,
    processIcon: Route,
    teamIcon: UserCheck,
    documentIcon: FileText,
    financeIcon: CreditCard,
  })),
  "service-business": createPage(createStandardCrmConfig({
    industrySlug: "service-business",
    industryName: "Service Business",
    title: "Service business CRM for customer requests, schedules, technicians, tickets and payments",
    description:
      "A custom service business CRM for customer requests, technician assignment, schedules, service tickets, SLA tracking, payment status, feedback and operations reporting.",
    dashboardName: "Service Business CRM",
    sidebarItems: ["Requests", "Jobs", "Technicians", "Tickets", "Payments"],
    stats: [
      { label: "Service requests", value: "214", note: "Active" },
      { label: "Jobs scheduled", value: "86", note: "Today" },
      { label: "Open tickets", value: "32", note: "Needs action" },
      { label: "SLA met", value: "94%", note: "This month" },
    ],
    pipelineStages: [
      { title: "New request", count: "64", items: ["Repair request", "Installation enquiry"] },
      { title: "Assigned", count: "48", items: ["Technician visit", "Remote support"] },
      { title: "In progress", count: "36", items: ["Waiting parts", "Customer confirmation"] },
    ],
    customerPanel: {
      title: "Service request",
      subtitle: "Meera Iyer - AC repair request",
      nextAction: "Assign technician for afternoon slot",
      owner: "Service coordinator",
    },
    followUps: ["Assign technician", "Confirm arrival window", "Collect service feedback"],
    analytics: [
      { label: "SLA met", value: "94%" },
      { label: "Open tickets", value: "32" },
      { label: "Repeat customers", value: "41%" },
    ],
    leadNoun: "Service requests",
    pipelineNoun: "Service pipeline",
    teamNoun: "technicians and coordinators",
    documentNoun: "Service checklists",
    revenueNoun: "service revenue",
    primaryIcon: LifeBuoy,
    processIcon: CalendarCheck,
    teamIcon: Users,
    documentIcon: ClipboardCheck,
    financeIcon: ReceiptText,
  })),
  travel: createPage(createStandardCrmConfig({
    industrySlug: "travel",
    industryName: "Travel",
    title: "Travel CRM for enquiries, packages, itineraries, bookings, payments and customer follow-ups",
    description:
      "A custom travel CRM for travel enquiries, package planning, itinerary sharing, booking coordination, payment follow-ups, reminders and customer communication.",
    dashboardName: "Travel CRM",
    sidebarItems: ["Inquiries", "Packages", "Itineraries", "Bookings", "Payments"],
    stats: [
      { label: "Travel leads", value: "142", note: "Active" },
      { label: "Packages shared", value: "68", note: "This week" },
      { label: "Bookings", value: "24", note: "Confirmed" },
      { label: "Booking revenue", value: "Rs. 92L", note: "Forecast" },
    ],
    pipelineStages: [
      { title: "New travel enquiry", count: "42", items: ["Honeymoon package", "Group tour"] },
      { title: "Package shared", count: "36", items: ["Europe itinerary", "Goa trip"] },
      { title: "Booking follow-up", count: "24", items: ["Payment pending", "Passport details"] },
    ],
    customerPanel: {
      title: "Traveler profile",
      subtitle: "Neha Shah - Dubai family trip",
      nextAction: "Share final itinerary and payment link",
      owner: "Travel advisor",
    },
    followUps: ["Share package options", "Confirm itinerary", "Send payment reminder"],
    analytics: [
      { label: "Booking rate", value: "21%" },
      { label: "Trips planned", value: "68" },
      { label: "Booking revenue", value: "Rs. 92L" },
    ],
    leadNoun: "Travel leads",
    pipelineNoun: "Booking pipeline",
    teamNoun: "travel advisors",
    documentNoun: "Travel documents",
    revenueNoun: "booking revenue",
    primaryIcon: Route,
    processIcon: CalendarCheck,
    teamIcon: UserCheck,
    documentIcon: FileText,
    financeIcon: CreditCard,
  })),
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
  solutionSlug?: string,
): IndustryCrmPageData | null {
  const page = industryCrmPages[industrySlug];

  if (!page) {
    return null;
  }

  if (solutionSlug && !page.aliases.includes(solutionSlug)) {
    return null;
  }

  return page;
}
