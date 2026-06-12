import Link from "next/link";
import type { CSSProperties } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Bell,
  ChevronDown,
  Copy,
  Maximize2,
  Minus,
  MoreVertical,
  Share2,
  Bot,
  CalendarCheck,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  CreditCard,
  DollarSign,
  FileCheck2,
  FileText,
  FlaskConical,
  Mail,
  MessageCircle,
  Route,
  ShieldCheck,
  Sparkles,
  UserCheck,
  Users,
  Workflow,
} from "lucide-react";
import CrmReveal from "./CrmReveal";
import {
  crmClass,
  crmRevealCard,
  crmRevealHeading,
  crmRevealScale,
} from "./crmAnimationUtils";
import type { IndustryCrmPageData } from "./industryCrmData";

const styles: Record<string, CSSProperties> = {
  outer: {
    boxShadow:
      "inset 0 0 0 1px rgba(221,226,245,0.92), 0 30px 95px rgba(15,23,42,0.075)",
  },
  panel: {
    boxShadow:
      "inset 0 0 0 1px rgba(226,232,240,0.98), 0 18px 58px rgba(15,23,42,0.055)",
  },
  card: {
    boxShadow:
      "inset 0 0 0 1px rgba(226,232,240,0.96), 0 12px 32px rgba(15,23,42,0.055)",
  },
  activeCard: {
    boxShadow:
      "inset 4px 0 0 rgba(124,58,237,0.95), inset 0 0 0 1px rgba(196,181,253,0.72), 0 18px 46px rgba(124,58,237,0.10)",
  },
  node: {
    boxShadow:
      "inset 0 0 0 1px rgba(219,225,239,0.98), 0 14px 34px rgba(15,23,42,0.08)",
  },
  builder: {
    backgroundImage:
      "radial-gradient(circle at 1px 1px, rgba(148,163,184,0.26) 1px, transparent 0)",
    backgroundSize: "18px 18px",
    boxShadow:
      "inset 0 0 0 1px rgba(226,232,240,0.96), 0 18px 58px rgba(15,23,42,0.055)",
  },
  cta: {
    boxShadow:
      "inset 0 0 0 1px rgba(196,181,253,0.35), 0 14px 34px rgba(79,70,229,0.08)",
  },
  pill: {
    boxShadow:
      "inset 0 0 0 1px rgba(196,181,253,0.55), 0 10px 28px rgba(79,70,229,0.10)",
  },
};

type WorkflowLibraryItem = {
  title: string;
  description: string;
  icon: LucideIcon;
  status: "Active" | "Paused" | "Draft";
};

type WorkflowNodeItem = {
  title: string;
  description: string;
  icon: LucideIcon;
  tone: "purple" | "blue" | "emerald" | "orange";
};

type WorkflowPreview = {
  selectedTitle: string;
  trigger: WorkflowNodeItem;
  actions: WorkflowNodeItem[];
  outcomes: WorkflowNodeItem[];
};

type IndustryAutomationCopy = {
  library: WorkflowLibraryItem[];
  preview: WorkflowPreview;
};

const toneClasses: Record<WorkflowNodeItem["tone"], string> = {
  purple: "bg-violet-50 text-violet-600 dark:bg-violet-400/10 dark:text-violet-200",
  blue: "bg-blue-50 text-blue-600 dark:bg-blue-400/10 dark:text-blue-200",
  emerald:
    "bg-emerald-50 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-200",
  orange:
    "bg-orange-50 text-orange-600 dark:bg-orange-400/10 dark:text-orange-200",
};

const statusClasses: Record<WorkflowLibraryItem["status"], string> = {
  Active: "bg-emerald-50 text-emerald-700 ring-emerald-200/80 dark:bg-emerald-400/10 dark:text-emerald-200 dark:ring-emerald-300/20",
  Paused: "bg-orange-50 text-orange-700 ring-orange-200/80 dark:bg-orange-400/10 dark:text-orange-200 dark:ring-orange-300/20",
  Draft: "bg-blue-50 text-blue-700 ring-blue-200/80 dark:bg-blue-400/10 dark:text-blue-200 dark:ring-blue-300/20",
};

const defaultAutomationCopy: IndustryAutomationCopy = {
  library: [
    {
      title: "New Lead Onboarding",
      description: "Capture, assign, and follow up with every new lead.",
      icon: UserCheck,
      status: "Active",
    },
    {
      title: "Follow-up Sequence",
      description: "Nurture leads with timed reminders and messages.",
      icon: MessageCircle,
      status: "Active",
    },
    {
      title: "Booking Confirmation Flow",
      description: "Send confirmations, task updates, and team alerts.",
      icon: CalendarCheck,
      status: "Active",
    },
    {
      title: "Payment Reminder Automation",
      description: "Send reminders and escalate overdue payments.",
      icon: DollarSign,
      status: "Paused",
    },
    {
      title: "Document Collection Workflow",
      description: "Collect and verify customer documents automatically.",
      icon: FileText,
      status: "Draft",
    },
  ],
  preview: {
    selectedTitle: "New Lead Onboarding",
    trigger: {
      title: "New Lead Created",
      description: "When a new inquiry is received from website, form, or chat.",
      icon: UserCheck,
      tone: "purple",
    },
    actions: [
      {
        title: "Assign to Sales Rep",
        description: "Automatically assign the lead to an available team member.",
        icon: Users,
        tone: "purple",
      },
      {
        title: "Add to Nurture Sequence",
        description: "Enroll the record into a smart follow-up sequence.",
        icon: MessageCircle,
        tone: "blue",
      },
      {
        title: "Create Follow-Up Task",
        description: "Create a task for the assigned owner.",
        icon: CheckCircle2,
        tone: "purple",
      },
    ],
    outcomes: [
      {
        title: "Lead Engaged",
        description: "Send personalized message with relevant recommendations.",
        icon: Mail,
        tone: "emerald",
      },
      {
        title: "No Response",
        description: "Wait two days and send a reminder automatically.",
        icon: Clock3,
        tone: "orange",
      },
    ],
  },
};

const industryAutomationCopy: Record<string, IndustryAutomationCopy> = {
  healthcare: {
    library: [
      {
        title: "Patient Enquiry Intake",
        description: "Capture patient enquiries and assign them to reception.",
        icon: UserCheck,
        status: "Active",
      },
      {
        title: "Appointment Reminder Flow",
        description: "Send visit reminders and reduce missed appointments.",
        icon: Bell,
        status: "Active",
      },
      {
        title: "Report Review Workflow",
        description: "Notify doctors when reports are uploaded.",
        icon: FileCheck2,
        status: "Active",
      },
      {
        title: "Billing Follow-up Automation",
        description: "Remind patients and billing team about pending payments.",
        icon: CreditCard,
        status: "Paused",
      },
      {
        title: "Repeat Visit Reminder",
        description: "Create follow-up tasks for checkups and repeat visits.",
        icon: CalendarCheck,
        status: "Draft",
      },
    ],
    preview: {
      selectedTitle: "Patient Enquiry Intake",
      trigger: {
        title: "New Patient Enquiry",
        description: "Patient submits a form, calls, or sends a WhatsApp message.",
        icon: UserCheck,
        tone: "purple",
      },
      actions: [
        {
          title: "Assign Reception Owner",
          description: "Route enquiry to available reception or care coordinator.",
          icon: Users,
          tone: "purple",
        },
        {
          title: "Book Appointment Slot",
          description: "Create appointment task with department and preferred time.",
          icon: CalendarCheck,
          tone: "blue",
        },
        {
          title: "Send Visit Reminder",
          description: "Send confirmation and reminder before the appointment.",
          icon: Bell,
          tone: "purple",
        },
      ],
      outcomes: [
        {
          title: "Visit Confirmed",
          description: "Patient receives confirmation and clinic team gets notified.",
          icon: CheckCircle2,
          tone: "emerald",
        },
        {
          title: "No Confirmation",
          description: "Create callback task and notify front-desk team.",
          icon: Clock3,
          tone: "orange",
        },
      ],
    },
  },
  manufacturing: {
    library: [
      {
        title: "Dealer Lead Routing",
        description: "Assign new dealer enquiries to the right sales owner.",
        icon: Users,
        status: "Active",
      },
      {
        title: "Quotation Follow-up Flow",
        description: "Create follow-ups after quote sharing and revisions.",
        icon: FileText,
        status: "Active",
      },
      {
        title: "Production Status Alert",
        description: "Notify sales when production or dispatch stage changes.",
        icon: Workflow,
        status: "Active",
      },
      {
        title: "Payment Collection Reminder",
        description: "Escalate overdue dealer payments and pending invoices.",
        icon: DollarSign,
        status: "Paused",
      },
      {
        title: "Service Escalation Workflow",
        description: "Escalate unresolved service and warranty tickets.",
        icon: Bell,
        status: "Draft",
      },
    ],
    preview: {
      selectedTitle: "Dealer Lead Routing",
      trigger: {
        title: "New Dealer Lead Created",
        description: "Dealer enquiry is received from website, RFQ, or referral.",
        icon: Users,
        tone: "purple",
      },
      actions: [
        {
          title: "Assign Dealer Manager",
          description: "Route lead based on region, product, and capacity.",
          icon: UserCheck,
          tone: "purple",
        },
        {
          title: "Create Quote Task",
          description: "Generate quotation task with product and quantity details.",
          icon: FileText,
          tone: "blue",
        },
        {
          title: "Schedule Follow-Up",
          description: "Create sales follow-up if dealer has not responded.",
          icon: Bell,
          tone: "purple",
        },
      ],
      outcomes: [
        {
          title: "Quote Accepted",
          description: "Move record to order pipeline and notify production team.",
          icon: CheckCircle2,
          tone: "emerald",
        },
        {
          title: "No Response",
          description: "Escalate to dealer manager after the waiting window.",
          icon: Clock3,
          tone: "orange",
        },
      ],
    },
  },
  education: {
    library: [
      {
        title: "Student Lead Onboarding",
        description: "Capture student enquiries and assign counsellors.",
        icon: UserCheck,
        status: "Active",
      },
      {
        title: "Demo Class Reminder",
        description: "Send demo class reminders to students and parents.",
        icon: Bell,
        status: "Active",
      },
      {
        title: "Admission Follow-up Flow",
        description: "Nurture admission leads through counselling and documents.",
        icon: MessageCircle,
        status: "Active",
      },
      {
        title: "Fee Reminder Automation",
        description: "Send fee reminders and escalate overdue cases.",
        icon: DollarSign,
        status: "Paused",
      },
      {
        title: "Document Collection Workflow",
        description: "Collect admission forms, ID proofs, and certificates.",
        icon: FileText,
        status: "Draft",
      },
    ],
    preview: {
      selectedTitle: "Student Lead Onboarding",
      trigger: {
        title: "New Student Enquiry",
        description: "Student enquiry is captured from website, ads, or walk-in.",
        icon: UserCheck,
        tone: "purple",
      },
      actions: [
        {
          title: "Assign Counsellor",
          description: "Route lead based on program, campus, and counsellor load.",
          icon: Users,
          tone: "purple",
        },
        {
          title: "Create Demo Task",
          description: "Schedule demo class or counselling call automatically.",
          icon: CalendarCheck,
          tone: "blue",
        },
        {
          title: "Send Parent Follow-Up",
          description: "Send course details and parent communication reminder.",
          icon: MessageCircle,
          tone: "purple",
        },
      ],
      outcomes: [
        {
          title: "Admission Started",
          description: "Move student to application stage and request documents.",
          icon: CheckCircle2,
          tone: "emerald",
        },
        {
          title: "No Response",
          description: "Send reminder and create counsellor callback task.",
          icon: Clock3,
          tone: "orange",
        },
      ],
    },
  },
  "real-estate": {
    library: [
      {
        title: "Property Lead Onboarding",
        description: "Capture buyer enquiries and assign them to agents.",
        icon: UserCheck,
        status: "Active",
      },
      {
        title: "Site Visit Reminder Flow",
        description: "Send visit reminders and broker notifications.",
        icon: Bell,
        status: "Active",
      },
      {
        title: "Property Match Sequence",
        description: "Share matching listings based on requirement and budget.",
        icon: Route,
        status: "Active",
      },
      {
        title: "Booking Payment Reminder",
        description: "Remind customers about token and pending payments.",
        icon: DollarSign,
        status: "Paused",
      },
      {
        title: "Agreement Document Workflow",
        description: "Collect KYC, agreement, and booking documents.",
        icon: FileText,
        status: "Draft",
      },
    ],
    preview: {
      selectedTitle: "Property Lead Onboarding",
      trigger: {
        title: "New Property Lead Created",
        description: "Buyer enquiry comes from website, campaign, or referral.",
        icon: UserCheck,
        tone: "purple",
      },
      actions: [
        {
          title: "Assign Sales Agent",
          description: "Route lead by location, budget, and agent availability.",
          icon: Users,
          tone: "purple",
        },
        {
          title: "Share Matched Listings",
          description: "Send suitable properties based on customer requirement.",
          icon: Route,
          tone: "blue",
        },
        {
          title: "Create Site Visit Task",
          description: "Schedule visit task and notify assigned owner.",
          icon: CheckCircle2,
          tone: "purple",
        },
      ],
      outcomes: [
        {
          title: "Visit Confirmed",
          description: "Move lead to site visit stage and send confirmation.",
          icon: CalendarCheck,
          tone: "emerald",
        },
        {
          title: "No Response",
          description: "Send reminder and notify broker or sales manager.",
          icon: Clock3,
          tone: "orange",
        },
      ],
    },
  },
  retail: {
    library: [
      {
        title: "Buyer Lead Onboarding",
        description: "Capture product enquiries and assign follow-ups.",
        icon: UserCheck,
        status: "Active",
      },
      {
        title: "Cart Follow-up Automation",
        description: "Recover abandoned carts and incomplete purchases.",
        icon: Bell,
        status: "Active",
      },
      {
        title: "Offer Broadcast Flow",
        description: "Send targeted offers and product updates.",
        icon: MessageCircle,
        status: "Active",
      },
      {
        title: "Payment Reminder Automation",
        description: "Follow up on failed or pending payments.",
        icon: DollarSign,
        status: "Paused",
      },
      {
        title: "Delivery Update Workflow",
        description: "Notify customers about dispatch and delivery movement.",
        icon: Mail,
        status: "Draft",
      },
    ],
    preview: {
      selectedTitle: "Buyer Lead Onboarding",
      trigger: {
        title: "New Buyer Enquiry",
        description: "Customer asks about a product, offer, or order.",
        icon: UserCheck,
        tone: "purple",
      },
      actions: [
        {
          title: "Assign Store Owner",
          description: "Route enquiry to the right branch or sales person.",
          icon: Users,
          tone: "purple",
        },
        {
          title: "Send Product Offer",
          description: "Send relevant product details and offer message.",
          icon: MessageCircle,
          tone: "blue",
        },
        {
          title: "Create Follow-Up Task",
          description: "Create next action if purchase is not completed.",
          icon: CheckCircle2,
          tone: "purple",
        },
      ],
      outcomes: [
        {
          title: "Order Created",
          description: "Move customer to order stage and notify operations.",
          icon: CheckCircle2,
          tone: "emerald",
        },
        {
          title: "No Purchase",
          description: "Send reminder and add customer to nurture campaign.",
          icon: Clock3,
          tone: "orange",
        },
      ],
    },
  },
  finance: {
    library: [
      {
        title: "Client Lead Onboarding",
        description: "Capture and assign financial service enquiries.",
        icon: UserCheck,
        status: "Active",
      },
      {
        title: "KYC Reminder Flow",
        description: "Collect missing KYC and verification documents.",
        icon: Bell,
        status: "Active",
      },
      {
        title: "Advisor Follow-up Sequence",
        description: "Create advisor tasks for calls and case updates.",
        icon: MessageCircle,
        status: "Active",
      },
      {
        title: "Payment / EMI Reminder",
        description: "Send reminders for payments, EMIs, and dues.",
        icon: DollarSign,
        status: "Paused",
      },
      {
        title: "Approval Workflow",
        description: "Move cases through manager and compliance approvals.",
        icon: ShieldCheck,
        status: "Draft",
      },
    ],
    preview: {
      selectedTitle: "Client Lead Onboarding",
      trigger: {
        title: "New Client Lead Created",
        description: "Client enquiry enters from form, campaign, or advisor call.",
        icon: UserCheck,
        tone: "purple",
      },
      actions: [
        {
          title: "Assign Advisor",
          description: "Route case by service interest, branch, and workload.",
          icon: Users,
          tone: "purple",
        },
        {
          title: "Create KYC Task",
          description: "Request required KYC and financial documents.",
          icon: FileCheck2,
          tone: "blue",
        },
        {
          title: "Schedule Advisory Call",
          description: "Create a follow-up call task for the advisor.",
          icon: CheckCircle2,
          tone: "purple",
        },
      ],
      outcomes: [
        {
          title: "Case Qualified",
          description: "Move client to active case and notify operations.",
          icon: CheckCircle2,
          tone: "emerald",
        },
        {
          title: "Documents Pending",
          description: "Send reminder and create compliance follow-up task.",
          icon: Clock3,
          tone: "orange",
        },
      ],
    },
  },
  insurance: {
    library: [
      {
        title: "Policy Lead Onboarding",
        description: "Capture policy enquiries and assign agents.",
        icon: UserCheck,
        status: "Active",
      },
      {
        title: "Premium Reminder Flow",
        description: "Send premium payment reminders automatically.",
        icon: Bell,
        status: "Active",
      },
      {
        title: "Renewal Follow-up Sequence",
        description: "Nurture renewals before policy expiry.",
        icon: MessageCircle,
        status: "Active",
      },
      {
        title: "Claim Escalation Workflow",
        description: "Escalate delayed claims and sensitive cases.",
        icon: ShieldCheck,
        status: "Paused",
      },
      {
        title: "KYC Collection Workflow",
        description: "Collect identity, nominee, and policy documents.",
        icon: FileText,
        status: "Draft",
      },
    ],
    preview: {
      selectedTitle: "Policy Lead Onboarding",
      trigger: {
        title: "New Policy Lead Created",
        description: "Policy enquiry is received from campaign, form, or call.",
        icon: UserCheck,
        tone: "purple",
      },
      actions: [
        {
          title: "Assign Insurance Agent",
          description: "Route lead based on policy type and agent workload.",
          icon: Users,
          tone: "purple",
        },
        {
          title: "Create KYC Task",
          description: "Request policyholder and nominee documents.",
          icon: FileText,
          tone: "blue",
        },
        {
          title: "Send Quote Follow-Up",
          description: "Send quotation reminder and create callback task.",
          icon: MessageCircle,
          tone: "purple",
        },
      ],
      outcomes: [
        {
          title: "Policy Converted",
          description: "Move record to active policy and create renewal reminder.",
          icon: CheckCircle2,
          tone: "emerald",
        },
        {
          title: "Pending Documents",
          description: "Escalate missing KYC or payment to assigned agent.",
          icon: Clock3,
          tone: "orange",
        },
      ],
    },
  },
  automobile: {
    library: [
      {
        title: "Vehicle Lead Onboarding",
        description: "Capture vehicle enquiries and assign sales advisors.",
        icon: UserCheck,
        status: "Active",
      },
      {
        title: "Test Drive Reminder Flow",
        description: "Send test drive reminders and showroom alerts.",
        icon: Bell,
        status: "Active",
      },
      {
        title: "Quotation Follow-up Sequence",
        description: "Create quotation and booking follow-up tasks.",
        icon: FileText,
        status: "Active",
      },
      {
        title: "Service Reminder Automation",
        description: "Send periodic service and warranty reminders.",
        icon: Workflow,
        status: "Paused",
      },
      {
        title: "Delivery Update Workflow",
        description: "Notify customers about booking and delivery movement.",
        icon: Mail,
        status: "Draft",
      },
    ],
    preview: {
      selectedTitle: "Vehicle Lead Onboarding",
      trigger: {
        title: "New Vehicle Enquiry",
        description: "Customer asks about model, variant, price, or test drive.",
        icon: UserCheck,
        tone: "purple",
      },
      actions: [
        {
          title: "Assign Sales Advisor",
          description: "Route lead based on branch, model, and advisor load.",
          icon: Users,
          tone: "purple",
        },
        {
          title: "Schedule Test Drive",
          description: "Create test drive task and send customer confirmation.",
          icon: CalendarCheck,
          tone: "blue",
        },
        {
          title: "Send Quotation",
          description: "Create quotation follow-up for selected vehicle.",
          icon: FileText,
          tone: "purple",
        },
      ],
      outcomes: [
        {
          title: "Booking Started",
          description: "Move lead to booking pipeline and notify finance team.",
          icon: CheckCircle2,
          tone: "emerald",
        },
        {
          title: "No Response",
          description: "Send reminder and create advisor callback task.",
          icon: Clock3,
          tone: "orange",
        },
      ],
    },
  },
  "service-business": {
    library: [
      {
        title: "Service Request Intake",
        description: "Capture requests and assign technicians.",
        icon: UserCheck,
        status: "Active",
      },
      {
        title: "Visit Reminder Flow",
        description: "Send technician visit reminders and customer updates.",
        icon: Bell,
        status: "Active",
      },
      {
        title: "Job Completion Workflow",
        description: "Create service checklist and completion tasks.",
        icon: ClipboardCheck,
        status: "Active",
      },
      {
        title: "Payment Follow-up Automation",
        description: "Remind customers about pending service payments.",
        icon: DollarSign,
        status: "Paused",
      },
      {
        title: "SLA Escalation Workflow",
        description: "Escalate delayed jobs before SLA risk.",
        icon: Clock3,
        status: "Draft",
      },
    ],
    preview: {
      selectedTitle: "Service Request Intake",
      trigger: {
        title: "New Service Request",
        description: "Customer request is captured from call, form, or WhatsApp.",
        icon: UserCheck,
        tone: "purple",
      },
      actions: [
        {
          title: "Assign Technician",
          description: "Route job by location, skill, and availability.",
          icon: Users,
          tone: "purple",
        },
        {
          title: "Create Job Task",
          description: "Create service job with checklist and priority.",
          icon: ClipboardCheck,
          tone: "blue",
        },
        {
          title: "Send Visit Reminder",
          description: "Notify customer and technician before the visit.",
          icon: Bell,
          tone: "purple",
        },
      ],
      outcomes: [
        {
          title: "Job Completed",
          description: "Move ticket to completed and request customer feedback.",
          icon: CheckCircle2,
          tone: "emerald",
        },
        {
          title: "SLA Risk",
          description: "Escalate delayed ticket to operations manager.",
          icon: Clock3,
          tone: "orange",
        },
      ],
    },
  },
  travel: {
    library: [
      {
        title: "New Travel Lead Onboarding",
        description: "Automate lead capture, enrichment, and follow-up for new travel inquiries.",
        icon: UserCheck,
        status: "Active",
      },
      {
        title: "Package Follow-Up Sequence",
        description: "Nurture leads who requested package details but haven't booked.",
        icon: MessageCircle,
        status: "Active",
      },
      {
        title: "Booking Confirmation Flow",
        description: "Send confirmations, itineraries, and reminders after booking.",
        icon: Bell,
        status: "Active",
      },
      {
        title: "Payment Reminder Automation",
        description: "Send smart payment reminders and escalate overdue payments.",
        icon: DollarSign,
        status: "Paused",
      },
      {
        title: "Document Collection Workflow",
        description: "Collect and verify customer documents automatically.",
        icon: FileText,
        status: "Draft",
      },
    ],
    preview: {
      selectedTitle: "New Travel Lead Onboarding",
      trigger: {
        title: "New Travel Lead Created",
        description: "When a new inquiry is received via website, form, or chat.",
        icon: UserCheck,
        tone: "purple",
      },
      actions: [
        {
          title: "Assign to Sales Rep",
          description: "Automatically assign the lead to an available sales rep.",
          icon: Users,
          tone: "purple",
        },
        {
          title: "Add to Nurture Sequence",
          description: "Enroll lead in the Travel Lead Nurture email sequence.",
          icon: MessageCircle,
          tone: "blue",
        },
        {
          title: "Create Follow-Up Task",
          description: "Create a follow-up task for the assigned sales rep.",
          icon: CheckCircle2,
          tone: "purple",
        },
      ],
      outcomes: [
        {
          title: "Lead Engaged",
          description: "Send personalized email with travel recommendations.",
          icon: Mail,
          tone: "emerald",
        },
        {
          title: "No Response",
          description: "Wait two days and send a follow-up reminder.",
          icon: Clock3,
          tone: "orange",
        },
      ],
    },
  },
};

function getAutomationCopy(data: IndustryCrmPageData): IndustryAutomationCopy {
  return industryAutomationCopy[data.industrySlug] ?? defaultAutomationCopy;
}

type WorkflowCategoryId =
  | "all"
  | "lead"
  | "support"
  | "sales"
  | "finance"
  | "documents"
  | "payments";

type WorkflowLibraryWorkflow = WorkflowLibraryItem & {
  category: Exclude<WorkflowCategoryId, "all">;
  preview: WorkflowPreview;
};

type WorkflowTab = {
  id: WorkflowCategoryId;
  label: string;
  workflows: WorkflowLibraryWorkflow[];
};

const workflowTabLabels: Array<{ id: WorkflowCategoryId; label: string }> = [
  { id: "all", label: "All Workflows" },
  { id: "lead", label: "Lead Management" },
  { id: "support", label: "Customer Support" },
  { id: "sales", label: "Sales Operations" },
  { id: "finance", label: "Finance" },
  { id: "documents", label: "Documents" },
  { id: "payments", label: "Payments" },
];

function createWorkflowNode(
  title: string,
  description: string,
  icon: LucideIcon,
  tone: WorkflowNodeItem["tone"],
): WorkflowNodeItem {
  return { title, description, icon, tone };
}

function getIndustryRecordLabel(data: IndustryCrmPageData): string {
  const labelMap: Record<string, string> = {
    healthcare: "patient",
    manufacturing: "dealer",
    education: "student",
    "real-estate": "property lead",
    retail: "buyer",
    finance: "client",
    insurance: "policy lead",
    automobile: "vehicle lead",
    "service-business": "service request",
    travel: "travel lead",
  };

  return labelMap[data.industrySlug] ?? `${data.industryName.toLowerCase()} lead`;
}

function getCategoryPreview(
  data: IndustryCrmPageData,
  item: WorkflowLibraryItem,
  category: Exclude<WorkflowCategoryId, "all">,
  basePreview: WorkflowPreview,
): WorkflowPreview {
  const industry = data.industryName.toLowerCase();
  const recordLabel = getIndustryRecordLabel(data);

  if (category === "lead") {
    return basePreview.selectedTitle === item.title
      ? basePreview
      : {
          selectedTitle: item.title,
          trigger: createWorkflowNode(
            `New ${data.industryName} Lead Created`,
            `A new ${recordLabel} enters from website, campaign, form, or chat.`,
            item.icon,
            "purple",
          ),
          actions: [
            createWorkflowNode(
              "Assign Team Owner",
              `Route the ${recordLabel} to the right team member automatically.`,
              Users,
              "purple",
            ),
            createWorkflowNode(
              "Start Follow-Up Sequence",
              `Send the first ${industry} follow-up message with relevant context.`,
              MessageCircle,
              "blue",
            ),
            createWorkflowNode(
              "Create Next Task",
              "Create a timed task so the owner never misses the next action.",
              CheckCircle2,
              "purple",
            ),
          ],
          outcomes: [
            createWorkflowNode(
              "Lead Engaged",
              "Move the record forward once the customer responds.",
              Mail,
              "emerald",
            ),
            createWorkflowNode(
              "No Response",
              "Wait, remind again, and notify the owner before delay risk.",
              Clock3,
              "orange",
            ),
          ],
        };
  }

  if (category === "support") {
    return {
      selectedTitle: item.title,
      trigger: createWorkflowNode(
        `${data.industryName} Support Request`,
        `A customer needs help, status update, clarification, or service support.`,
        item.icon,
        "purple",
      ),
      actions: [
        createWorkflowNode(
          "Classify Request",
          "Identify priority, owner, source, and required response window.",
          ClipboardCheck,
          "purple",
        ),
        createWorkflowNode(
          "Notify Responsible Team",
          `Send alert to the right ${industry} team or manager.`,
          Bell,
          "blue",
        ),
        createWorkflowNode(
          "Create Resolution Task",
          "Create a tracked task with due time and escalation rule.",
          CheckCircle2,
          "purple",
        ),
      ],
      outcomes: [
        createWorkflowNode(
          "Resolved",
          "Close the loop and update the customer timeline.",
          CheckCircle2,
          "emerald",
        ),
        createWorkflowNode(
          "Escalated",
          "Escalate delayed support items to the manager automatically.",
          Clock3,
          "orange",
        ),
      ],
    };
  }

  if (category === "sales") {
    return {
      selectedTitle: item.title,
      trigger: createWorkflowNode(
        `${data.industryName} Stage Updated`,
        `A ${recordLabel} moves to a sales, booking, quote, or conversion stage.`,
        item.icon,
        "purple",
      ),
      actions: [
        createWorkflowNode(
          "Update Pipeline Stage",
          "Move the record to the correct stage with owner visibility.",
          Workflow,
          "purple",
        ),
        createWorkflowNode(
          "Send Confirmation",
          "Send the customer the right confirmation or next-step message.",
          Mail,
          "blue",
        ),
        createWorkflowNode(
          "Create Follow-Up Task",
          "Create the next sales task based on the new stage.",
          CheckCircle2,
          "purple",
        ),
      ],
      outcomes: [
        createWorkflowNode(
          "Stage Completed",
          "The pipeline moves forward with a clear next action.",
          CheckCircle2,
          "emerald",
        ),
        createWorkflowNode(
          "Stage Delayed",
          "Notify the owner if the stage stays inactive too long.",
          Clock3,
          "orange",
        ),
      ],
    };
  }

  if (category === "finance" || category === "payments") {
    return {
      selectedTitle: item.title,
      trigger: createWorkflowNode(
        "Payment Status Pending",
        `A payment, invoice, fee, premium, booking amount, or due item is pending.`,
        item.icon,
        "purple",
      ),
      actions: [
        createWorkflowNode(
          "Send Payment Reminder",
          "Send a polite reminder through email or WhatsApp-ready workflow.",
          DollarSign,
          "purple",
        ),
        createWorkflowNode(
          "Create Finance Task",
          "Notify finance team and add an internal payment follow-up task.",
          CreditCard,
          "blue",
        ),
        createWorkflowNode(
          "Escalate If Overdue",
          "Escalate overdue payments to manager after the configured window.",
          Bell,
          "purple",
        ),
      ],
      outcomes: [
        createWorkflowNode(
          "Payment Updated",
          "Mark status updated and move the record forward.",
          CheckCircle2,
          "emerald",
        ),
        createWorkflowNode(
          "Still Pending",
          "Create another reminder and show the item in finance dashboard.",
          Clock3,
          "orange",
        ),
      ],
    };
  }

  return {
    selectedTitle: item.title,
    trigger: createWorkflowNode(
      "Documents Required",
      `A ${recordLabel} needs documents, approvals, files, or verification.`,
      item.icon,
      "purple",
    ),
    actions: [
      createWorkflowNode(
        "Send Document Request",
        "Send customer a checklist of required documents and pending items.",
        FileText,
        "purple",
      ),
      createWorkflowNode(
        "Verify Submission",
        "Create a verification task for the responsible team.",
        FileCheck2,
        "blue",
      ),
      createWorkflowNode(
        "Update Internal Status",
        "Move document status to pending, verified, or rejected.",
        ClipboardCheck,
        "purple",
      ),
    ],
    outcomes: [
      createWorkflowNode(
        "Documents Verified",
        "Move the record ahead after successful verification.",
        CheckCircle2,
        "emerald",
      ),
      createWorkflowNode(
        "Missing Documents",
        "Send reminder and notify the owner about missing files.",
        Clock3,
        "orange",
      ),
    ],
  };
}

function buildWorkflow(
  data: IndustryCrmPageData,
  item: WorkflowLibraryItem,
  category: Exclude<WorkflowCategoryId, "all">,
  basePreview: WorkflowPreview,
): WorkflowLibraryWorkflow {
  return {
    ...item,
    category,
    preview: getCategoryPreview(data, item, category, basePreview),
  };
}

function getGeneratedWorkflow(
  data: IndustryCrmPageData,
  category: Exclude<WorkflowCategoryId, "all">,
): WorkflowLibraryItem {
  const industry = data.industryName;

  const generated: Record<Exclude<WorkflowCategoryId, "all">, WorkflowLibraryItem> = {
    lead: {
      title: `${industry} Lead Routing`,
      description: `Assign every ${getIndustryRecordLabel(data)} to the right owner automatically.`,
      icon: UserCheck,
      status: "Active",
    },
    support: {
      title: `${industry} Support Escalation`,
      description: "Create service tasks, status alerts, and escalation reminders.",
      icon: ShieldCheck,
      status: "Active",
    },
    sales: {
      title: `${industry} Stage Movement`,
      description: "Move records across stages when tasks, bookings, or approvals happen.",
      icon: Route,
      status: "Active",
    },
    finance: {
      title: `${industry} Finance Reminder`,
      description: "Track dues, billing, pending payments, and finance follow-ups.",
      icon: DollarSign,
      status: "Paused",
    },
    documents: {
      title: `${industry} Document Workflow`,
      description: "Collect, verify, and update required documents automatically.",
      icon: FileText,
      status: "Draft",
    },
    payments: {
      title: `${industry} Payment Follow-Up`,
      description: "Send reminders and create internal tasks for pending payments.",
      icon: CreditCard,
      status: "Active",
    },
  };

  return generated[category];
}

function getWorkflowTabs(data: IndustryCrmPageData): WorkflowTab[] {
  const copy = getAutomationCopy(data);
  const [leadOne, leadTwo, salesOne, financeOne, documentsOne] = copy.library;

  const workflows: WorkflowLibraryWorkflow[] = [
    buildWorkflow(
      data,
      leadOne ?? getGeneratedWorkflow(data, "lead"),
      "lead",
      copy.preview,
    ),
    buildWorkflow(
      data,
      leadTwo ?? getGeneratedWorkflow(data, "lead"),
      "lead",
      copy.preview,
    ),
    buildWorkflow(
      data,
      getGeneratedWorkflow(data, "support"),
      "support",
      copy.preview,
    ),
    buildWorkflow(
      data,
      salesOne ?? getGeneratedWorkflow(data, "sales"),
      "sales",
      copy.preview,
    ),
    buildWorkflow(
      data,
      financeOne ?? getGeneratedWorkflow(data, "finance"),
      "finance",
      copy.preview,
    ),
    buildWorkflow(
      data,
      documentsOne ?? getGeneratedWorkflow(data, "documents"),
      "documents",
      copy.preview,
    ),
    buildWorkflow(
      data,
      getGeneratedWorkflow(data, "payments"),
      "payments",
      copy.preview,
    ),
  ];

  return workflowTabLabels.map((tab) => ({
    ...tab,
    workflows:
      tab.id === "all"
        ? workflows.slice(0, 5)
        : workflows.filter((workflow) => workflow.category === tab.id),
  }));
}

function getTabPaneClass(tabId: WorkflowCategoryId): string {
  return `crm-tab-pane crm-tab-pane-${tabId}`;
}

export default function CrmAutomationReportsSection({
  data,
}: {
  data: IndustryCrmPageData;
}) {
  const workflowTabs = getWorkflowTabs(data);

  return (
    <section id="crm-automation-reports" className="py-8 sm:py-10">
      <CrmReveal
        variant="scale-in"
        duration={860}
        className={crmClass(
          crmRevealScale,
          "relative overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_50%_0%,rgba(124,58,237,0.075),transparent_30%),linear-gradient(135deg,#ffffff,#f8fbff)] px-4 py-8 shadow-[inset_0_0_0_1px_rgba(221,226,245,0.92),0_30px_95px_rgba(15,23,42,0.075)] dark:bg-none dark:bg-white/[0.04] sm:px-7 sm:py-10 lg:px-9 lg:py-12",
        )}
      >
        <div
          className={crmClass(
            crmRevealHeading,
            "mx-auto max-w-5xl text-center",
          )}
        >
          <span
            style={styles.pill}
            className="inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-black tracking-[0.14em] text-violet-700 dark:bg-white/10 dark:text-violet-200"
          >
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            CRM Automation
          </span>

          <h2 className="mt-5 text-4xl font-black tracking-[-0.06em] text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
            See Your CRM Workflows in Action
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-base font-semibold leading-8 text-slate-600 dark:text-slate-300">
            Explore, understand, and automate with confidence. Visualize every
            step of your {data.industryName.toLowerCase()} CRM workflow from
            trigger to outcome.
          </p>
        </div>

        <div className="crm-workflow-tabs mt-8">
          <style>{`
            .crm-workflow-tabs .crm-tab-input { display: none; }
            .crm-workflow-tabs .crm-tab-pane { display: none; }
            #crm-workflow-tab-all:checked ~ .crm-workflow-grid .crm-tab-pane-all,
            #crm-workflow-tab-lead:checked ~ .crm-workflow-grid .crm-tab-pane-lead,
            #crm-workflow-tab-support:checked ~ .crm-workflow-grid .crm-tab-pane-support,
            #crm-workflow-tab-sales:checked ~ .crm-workflow-grid .crm-tab-pane-sales,
            #crm-workflow-tab-finance:checked ~ .crm-workflow-grid .crm-tab-pane-finance,
            #crm-workflow-tab-documents:checked ~ .crm-workflow-grid .crm-tab-pane-documents,
            #crm-workflow-tab-payments:checked ~ .crm-workflow-grid .crm-tab-pane-payments { display: block; }
            #crm-workflow-tab-all:checked ~ .crm-workflow-grid .crm-tab-label-all,
            #crm-workflow-tab-lead:checked ~ .crm-workflow-grid .crm-tab-label-lead,
            #crm-workflow-tab-support:checked ~ .crm-workflow-grid .crm-tab-label-support,
            #crm-workflow-tab-sales:checked ~ .crm-workflow-grid .crm-tab-label-sales,
            #crm-workflow-tab-finance:checked ~ .crm-workflow-grid .crm-tab-label-finance,
            #crm-workflow-tab-documents:checked ~ .crm-workflow-grid .crm-tab-label-documents,
            #crm-workflow-tab-payments:checked ~ .crm-workflow-grid .crm-tab-label-payments {
              color: #6d28d9;
              background: rgba(124, 58, 237, 0.08);
            }
            .dark #crm-workflow-tab-all:checked ~ .crm-workflow-grid .crm-tab-label-all,
            .dark #crm-workflow-tab-lead:checked ~ .crm-workflow-grid .crm-tab-label-lead,
            .dark #crm-workflow-tab-support:checked ~ .crm-workflow-grid .crm-tab-label-support,
            .dark #crm-workflow-tab-sales:checked ~ .crm-workflow-grid .crm-tab-label-sales,
            .dark #crm-workflow-tab-finance:checked ~ .crm-workflow-grid .crm-tab-label-finance,
            .dark #crm-workflow-tab-documents:checked ~ .crm-workflow-grid .crm-tab-label-documents,
            .dark #crm-workflow-tab-payments:checked ~ .crm-workflow-grid .crm-tab-label-payments {
              color: #ddd6fe;
              background: rgba(167, 139, 250, 0.12);
            }
          `}</style>

          {workflowTabs.map((tab, index) => (
            <input
              key={tab.id}
              id={`crm-workflow-tab-${tab.id}`}
              name="crm-workflow-tab"
              type="radio"
              className="crm-tab-input"
              defaultChecked={index === 0}
            />
          ))}

          <div className="crm-workflow-grid grid gap-5 lg:grid-cols-[0.42fr_0.58fr] lg:items-stretch">
            <CrmReveal
              variant="fade-up"
              duration={760}
              className={crmClass(
                crmRevealScale,
                "overflow-hidden rounded-[1.8rem] bg-white p-5 shadow-[inset_0_0_0_1px_rgba(226,232,240,0.98),0_18px_58px_rgba(15,23,42,0.055)] dark:bg-white/[0.05] sm:p-6 lg:p-6",
              )}
            >
              <div className="flex items-center gap-4">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-violet-50 text-violet-600 shadow-[0_10px_24px_rgba(124,58,237,0.08)] dark:bg-violet-400/10 dark:text-violet-200">
                  <Workflow className="h-6 w-6" aria-hidden="true" />
                </span>

                <div>
                  <h3 className="text-2xl font-black leading-tight tracking-[-0.04em] text-slate-950 dark:text-white">
                    Workflow Library
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-slate-500 dark:text-slate-400">
                    Choose a workflow to view and customize.
                  </p>
                </div>
              </div>

              <div className="relative mt-6 border-b border-slate-200 dark:border-white/10">
                <div className="flex flex-nowrap gap-3 overflow-x-auto pb-3 pr-10 text-xs font-black text-slate-500 [scrollbar-width:none] dark:text-slate-400 [&::-webkit-scrollbar]:hidden">
                  {workflowTabs.map((tab) => (
                    <label
                      key={tab.id}
                      htmlFor={`crm-workflow-tab-${tab.id}`}
                      className={crmClass(
                        `crm-tab-label-${tab.id}`,
                        "shrink-0 cursor-pointer rounded-full px-3.5 py-2 transition hover:bg-slate-50 hover:text-slate-900 dark:hover:bg-white/5 dark:hover:text-white",
                      )}
                    >
                      {tab.label}
                    </label>
                  ))}
                </div>

                <div className="pointer-events-none absolute bottom-3 right-0 top-0 w-12 bg-gradient-to-l from-white via-white/95 to-transparent dark:from-[#111827] dark:via-[#111827]/95" />
              </div>

              <div className="mt-4 overflow-hidden rounded-[1.4rem] border border-slate-200 bg-white dark:border-white/10 dark:bg-white/[0.03]">
                {workflowTabs.map((tab) => (
                  <WorkflowLibraryList
                    key={tab.id}
                    className={getTabPaneClass(tab.id)}
                    workflows={tab.workflows}
                  />
                ))}
              </div>
            </CrmReveal>

            <CrmReveal
              variant="fade-up"
              duration={780}
              className={crmClass(
                crmRevealScale,
                "overflow-hidden rounded-[1.8rem] bg-white p-5 shadow-[inset_0_0_0_1px_rgba(226,232,240,0.98),0_18px_58px_rgba(15,23,42,0.055)] dark:bg-white/[0.05] sm:p-6 lg:p-6",
              )}
            >
              {workflowTabs.map((tab) => {
                const activeWorkflow = tab.workflows[0];

                if (!activeWorkflow) {
                  return null;
                }

                return (
                  <VisualWorkflowPanel
                    key={tab.id}
                    className={getTabPaneClass(tab.id)}
                    workflow={activeWorkflow}
                  />
                );
              })}
            </CrmReveal>
          </div>
        </div>
      </CrmReveal>
    </section>
  );
}

function WorkflowLibraryList({
  workflows,
  className,
}: {
  workflows: WorkflowLibraryWorkflow[];
  className: string;
}) {
  return (
    <div className={className}>
      {workflows.map((item, index) => {
        const Icon = item.icon;
        const isActive = index === 0;

        return (
          <article
            key={item.title}
            style={isActive ? styles.activeCard : undefined}
            className={crmClass(
              crmRevealCard(index),
              "group flex items-center gap-3 border-b border-slate-200 p-3.5 transition last:border-b-0 dark:border-white/10",
              isActive
                ? "bg-gradient-to-r from-violet-50 via-blue-50/55 to-white dark:from-violet-400/10 dark:via-blue-400/5 dark:to-transparent"
                : "bg-white hover:bg-slate-50 dark:bg-transparent dark:hover:bg-white/[0.04]",
            )}
          >
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-violet-50 text-violet-600 dark:bg-violet-400/10 dark:text-violet-200">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>

            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-3">
                <h4 className="truncate text-base font-black text-slate-950 dark:text-white">
                  {item.title}
                </h4>

                <span
                  className={crmClass(
                    "shrink-0 rounded-full px-3 py-1 text-[10px] font-black ring-1",
                    statusClasses[item.status],
                  )}
                >
                  {item.status}
                </span>
              </div>

              <p className="mt-1 line-clamp-2 text-sm font-semibold leading-6 text-slate-500 dark:text-slate-400">
                {item.description}
              </p>
            </div>

            <ArrowRight className="h-4 w-4 shrink-0 text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-violet-600" />
          </article>
        );
      })}
    </div>
  );
}

function VisualWorkflowPanel({
  workflow,
  className,
}: {
  workflow: WorkflowLibraryWorkflow;
  className: string;
}) {
  return (
    <div className={className}>
      <div className="flex flex-nowrap items-center gap-3 overflow-x-auto border-b border-slate-200 pb-5 [scrollbar-width:none] dark:border-white/10 [&::-webkit-scrollbar]:hidden">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-violet-50 text-violet-600 shadow-[0_10px_24px_rgba(124,58,237,0.08)] dark:bg-violet-400/10 dark:text-violet-200">
          <Bot className="h-5 w-5" aria-hidden="true" />
        </span>

        <h3 className="shrink-0 text-2xl font-black leading-tight tracking-[-0.04em] text-slate-950 dark:text-white">
          Visual Workflow
        </h3>

        <span className="h-8 w-px shrink-0 bg-slate-200 dark:bg-white/10" />

        <button
          type="button"
          className="inline-flex h-10 max-w-[16rem] shrink-0 items-center gap-2 rounded-2xl bg-white px-4 text-xs font-black text-slate-700 ring-1 ring-slate-200 transition hover:bg-slate-50 dark:bg-white/[0.04] dark:text-slate-200 dark:ring-white/10"
        >
          <span className="truncate">{workflow.title}</span>
          <ChevronDown className="h-4 w-4 shrink-0" aria-hidden="true" />
        </button>

        <span
          className={crmClass(
            "inline-flex h-10 shrink-0 items-center gap-2 rounded-2xl px-4 text-xs font-black ring-1",
            statusClasses[workflow.status],
          )}
        >
          <span
            className={crmClass(
              "h-2.5 w-2.5 rounded-full",
              workflow.status === "Active"
                ? "bg-emerald-500"
                : workflow.status === "Paused"
                  ? "bg-orange-500"
                  : "bg-blue-500",
            )}
          />
          {workflow.status}
        </span>

        <div className="ml-auto flex shrink-0 items-center gap-2">
          {[
            { label: "Copy workflow", icon: Copy },
            { label: "Fullscreen", icon: Maximize2 },
            { label: "Share workflow", icon: Share2 },
            { label: "Minimize", icon: Minus },
            { label: "More options", icon: MoreVertical },
          ].map((tool) => {
            const Icon = tool.icon;

            return (
              <button
                key={tool.label}
                type="button"
                aria-label={tool.label}
                className="grid h-10 w-10 place-items-center rounded-2xl bg-white text-slate-500 ring-1 ring-slate-200 transition hover:bg-slate-50 hover:text-violet-600 dark:bg-white/[0.04] dark:text-slate-300 dark:ring-white/10 dark:hover:bg-white/[0.08]"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </button>
            );
          })}
        </div>
      </div>

      <div
        style={styles.builder}
        className="mt-5 rounded-[1.5rem] bg-white p-4 dark:bg-slate-950/40 sm:p-5"
      >
        <WorkflowBuilder preview={workflow.preview} />
      </div>

      <div
        style={styles.cta}
        className="mt-4 flex flex-nowrap items-center gap-4 overflow-x-auto rounded-[1.35rem] bg-white p-4 [scrollbar-width:none] dark:bg-white/[0.04] [&::-webkit-scrollbar]:hidden"
      >
        <div className="flex min-w-0 flex-1 flex-nowrap items-center gap-2 text-[11px] font-black text-slate-500 dark:text-slate-300">
          <LegendItem label="Trigger" className="bg-violet-400" />
          <LegendItem label="Conditions" className="bg-blue-400" />
          <LegendItem label="Actions" className="bg-violet-500" />
          <LegendItem label="Notifications" className="bg-emerald-400" />
          <LegendItem label="Outcomes" className="bg-orange-400" />
        </div>

        <Link
          href="/workflow-lab"
          className="inline-flex h-12 w-[15rem] shrink-0 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 px-5 text-sm font-black text-white shadow-[0_14px_36px_rgba(79,70,229,0.22)] transition hover:-translate-y-0.5"
        >
          <FlaskConical className="h-5 w-5" aria-hidden="true" />
          Open Workflow Lab
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}

function LegendItem({
  label,
  className,
}: {
  label: string;
  className: string;
}) {
  return (
    <span className="inline-flex h-9 shrink-0 items-center gap-2 rounded-xl bg-slate-50 px-3 ring-1 ring-slate-200 dark:bg-white/[0.04] dark:ring-white/10">
      <span className={crmClass("h-2.5 w-2.5 rounded-[0.2rem]", className)} />
      {label}
    </span>
  );
}

function WorkflowBuilder({ preview }: { preview: WorkflowPreview }) {
  return (
    <div className="mx-auto max-w-5xl">
      <div className="flex justify-center">
        <div className="text-center">
          <p className="mb-3 text-[10px] font-black uppercase tracking-[0.18em] text-violet-600 dark:text-violet-300">
            Trigger
          </p>
          <WorkflowNode item={preview.trigger} />
        </div>
      </div>

      <div className="mx-auto h-9 w-px border-l-2 border-dashed border-slate-400/75" />

      <div className="relative rounded-[1.35rem] bg-white/70 p-4 ring-1 ring-violet-100 dark:bg-white/[0.03] dark:ring-violet-300/20">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-violet-600 shadow-[0_8px_20px_rgba(124,58,237,0.08)] ring-1 ring-violet-200/80 dark:bg-slate-950 dark:text-violet-200 dark:ring-violet-300/20">
          Actions
        </div>

        <div className="pointer-events-none absolute left-[16%] right-[16%] top-1/2 hidden border-t-2 border-dashed border-slate-400/75 lg:block" />

        <div className="relative z-10 grid gap-3 lg:grid-cols-3">
          {preview.actions.map((item, index) => (
            <WorkflowNode key={item.title} item={item} index={index + 1} />
          ))}
        </div>
      </div>

      <div className="mx-auto h-9 w-px border-l-2 border-dashed border-slate-400/75" />

      <div className="relative">
        <div className="absolute left-[24%] right-[24%] top-0 hidden border-t-2 border-dashed border-slate-400/75 lg:block" />
        <div className="absolute left-[24%] top-0 hidden h-9 border-l-2 border-dashed border-slate-400/75 lg:block" />
        <div className="absolute right-[24%] top-0 hidden h-9 border-l-2 border-dashed border-slate-400/75 lg:block" />

        <p className="mb-4 text-center text-[10px] font-black uppercase tracking-[0.18em] text-violet-600 dark:text-violet-300">
          Outcomes
        </p>

        <div className="grid gap-3 lg:grid-cols-2">
          {preview.outcomes.map((item) => (
            <WorkflowNode key={item.title} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

function WorkflowNode({
  item,
  index,
}: {
  item: WorkflowNodeItem;
  index?: number;
}) {
  const Icon = item.icon;

  return (
    <div
      style={styles.node}
      className="relative flex items-center gap-3 rounded-[1.15rem] bg-white p-4 dark:bg-slate-950"
    >
      <span
        className={crmClass(
          "grid h-[3.25rem] w-[3.25rem] shrink-0 place-items-center rounded-2xl",
          toneClasses[item.tone],
        )}
      >
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>

      <div className="min-w-0">
        <h4 className="text-sm font-black leading-5 text-slate-950 dark:text-white">
          {item.title}
        </h4>
        <p className="mt-1 line-clamp-2 text-xs font-semibold leading-5 text-slate-500 dark:text-slate-400">
          {item.description}
        </p>
      </div>

      {typeof index === "number" ? (
        <span className="absolute right-3 top-3 grid h-6 w-6 place-items-center rounded-full bg-violet-50 text-[10px] font-black text-violet-600 dark:bg-violet-400/10 dark:text-violet-200">
          {index}
        </span>
      ) : null}
    </div>
  );
}
