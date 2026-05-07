export type SolutionId =
  | "website-development"
  | "saas-platforms"
  | "crm-systems"
  | "ai-automation"
  | "workflow-lab"
  | "industry-crm-systems";

export type HnxSolutionPreview = {
  id: SolutionId;
  title: string;
  description: string;
  cta: string;
  href: string;
  accent: string;
  metrics: [string, string, string];
};

export const hnxSolutionPreviews: HnxSolutionPreview[] = [
  {
    id: "website-development",
    title: "Website Development",
    description:
      "High-performance websites and landing pages built for speed, SEO, and conversion.",
    cta: "Explore Websites",
    href: "/services/web-development",
    accent: "from-cyan-400 to-blue-500",
    metrics: ["SEO", "Speed", "Leads"],
  },
  {
    id: "saas-platforms",
    title: "SaaS Platforms",
    description:
      "Scalable SaaS products with authentication, billing, dashboards, roles, and cloud-ready architecture.",
    cta: "Explore SaaS",
    href: "/services/saas-development",
    accent: "from-indigo-400 to-violet-500",
    metrics: ["Auth", "Billing", "Roles"],
  },
  {
    id: "crm-systems",
    title: "CRM Systems",
    description:
      "Custom CRM systems for leads, deals, customers, tasks, reports, and business operations.",
    cta: "Explore CRM Systems",
    href: "/crm-systems",
    accent: "from-sky-400 to-cyan-500",
    metrics: ["Leads", "Deals", "Reports"],
  },
  {
    id: "ai-automation",
    title: "AI Automation",
    description:
      "AI workflows, agents, smart insights, document processing, and business automation.",
    cta: "Explore AI Automation",
    href: "/services/ai-automation",
    accent: "from-fuchsia-400 to-violet-500",
    metrics: ["Agents", "Insights", "Docs"],
  },
  {
    id: "workflow-lab",
    title: "Workflow Lab",
    description:
      "Ready-made workflow add-ons that can be activated inside HNX-built CRM systems.",
    cta: "View Workflow Lab",
    href: "/workflow-lab",
    accent: "from-emerald-400 to-cyan-500",
    metrics: ["Add-ons", "Alerts", "Tasks"],
  },
  {
    id: "industry-crm-systems",
    title: "Industry CRM Systems",
    description:
      "CRM foundations tailored for real estate, healthcare, education, ecommerce, finance, agencies, and service businesses.",
    cta: "View Industries",
    href: "/industries",
    accent: "from-blue-400 to-violet-500",
    metrics: ["Real Estate", "Health", "Edu"],
  },
];

export type WorkflowTier = "Small" | "Medium" | "Advanced";

export type WorkflowAutomation = {
  title: string;
  category: string;
  automates: string;
  price: string;
  tier: WorkflowTier;
  iconKey:
    | "birthday"
    | "assignment"
    | "followup"
    | "invoice"
    | "whatsapp"
    | "winback"
    | "task"
    | "payment"
    | "appointment"
    | "document"
    | "approval"
    | "pipeline";
};

export const workflowAutomations: WorkflowAutomation[] = [
  {
    title: "Birthday Wishes Automation",
    category: "Customer Care",
    automates:
      "Sends birthday greetings and follow-up reminders to customers automatically.",
    price: "₹4,999 - ₹9,999",
    tier: "Small",
    iconKey: "birthday",
  },
  {
    title: "Lead Auto Assignment",
    category: "Sales Operations",
    automates:
      "Assigns fresh leads to the right sales owner based on rules, location, or workload.",
    price: "₹14,999 - ₹29,999",
    tier: "Medium",
    iconKey: "assignment",
  },
  {
    title: "Missed Follow-up Alert",
    category: "Sales Discipline",
    automates:
      "Flags overdue lead and customer follow-ups before opportunities go cold.",
    price: "₹4,999 - ₹9,999",
    tier: "Small",
    iconKey: "followup",
  },
  {
    title: "Invoice Reminder",
    category: "Finance",
    automates:
      "Reminds customers and internal teams when invoices are pending or overdue.",
    price: "₹14,999 - ₹29,999",
    tier: "Medium",
    iconKey: "invoice",
  },
  {
    title: "WhatsApp Follow-up",
    category: "Communication",
    automates:
      "Prepares structured WhatsApp follow-up flows for leads, customers, and reminders.",
    price: "₹14,999 - ₹29,999",
    tier: "Medium",
    iconKey: "whatsapp",
  },
  {
    title: "Customer Winback",
    category: "Retention",
    automates:
      "Finds inactive customers and creates winback tasks, offers, or outreach reminders.",
    price: "₹14,999 - ₹29,999",
    tier: "Medium",
    iconKey: "winback",
  },
  {
    title: "Task Escalation",
    category: "Team Management",
    automates:
      "Escalates stuck or overdue tasks to managers with clear ownership history.",
    price: "₹14,999 - ₹29,999",
    tier: "Medium",
    iconKey: "task",
  },
  {
    title: "Payment Reminder",
    category: "Collections",
    automates:
      "Triggers payment reminders and internal collection tasks for pending dues.",
    price: "₹4,999 - ₹9,999",
    tier: "Small",
    iconKey: "payment",
  },
  {
    title: "Appointment Reminder",
    category: "Scheduling",
    automates:
      "Sends reminders for appointments, meetings, site visits, demos, or consultations.",
    price: "₹4,999 - ₹9,999",
    tier: "Small",
    iconKey: "appointment",
  },
  {
    title: "Document Collection",
    category: "Operations",
    automates:
      "Tracks required documents and reminds teams or customers until files are complete.",
    price: "₹14,999 - ₹29,999",
    tier: "Medium",
    iconKey: "document",
  },
  {
    title: "Approval Workflow",
    category: "Process Control",
    automates:
      "Routes requests to the right approver and keeps approval status visible inside CRM.",
    price: "₹49,999+",
    tier: "Advanced",
    iconKey: "approval",
  },
  {
    title: "Sales Pipeline Reminder",
    category: "Revenue Operations",
    automates:
      "Monitors stale deals and nudges sales teams before pipeline movement slows down.",
    price: "₹14,999 - ₹29,999",
    tier: "Medium",
    iconKey: "pipeline",
  },
];

export type IndustryIconKey =
  | "realEstate"
  | "healthcare"
  | "education"
  | "ecommerce"
  | "finance"
  | "agency"
  | "events"
  | "travel"
  | "pharma"
  | "service";

export type IndustryCrm = {
  slug: string;
  title: string;
  iconKey: IndustryIconKey;
  description: string;
  workflows: string[];
  detailRoute?: string;
};

export const industryCrms: IndustryCrm[] = [
  {
    slug: "real-estate-crm",
    title: "Real Estate CRM",
    iconKey: "realEstate",
    description:
      "Manage property leads, site visits, inventory, buyers, brokers, and deal stages from one owned system.",
    workflows: ["Lead capture", "Site visit scheduling", "Broker tracking"],
    detailRoute: "/industries/real-estate-crm",
  },
  {
    slug: "healthcare-crm",
    title: "Healthcare CRM",
    iconKey: "healthcare",
    description:
      "Coordinate patient inquiries, appointments, care follow-ups, documents, and clinic operations.",
    workflows: ["Appointments", "Patient follow-ups", "Document collection"],
    detailRoute: "/industries/healthcare-crm",
  },
  {
    slug: "education-crm",
    title: "Education CRM",
    iconKey: "education",
    description:
      "Track admissions, student inquiries, counselors, demos, fee reminders, and parent communication.",
    workflows: ["Admissions pipeline", "Counselor tasks", "Fee reminders"],
    detailRoute: "/industries/education-crm",
  },
  {
    slug: "ecommerce-crm",
    title: "E-commerce CRM",
    iconKey: "ecommerce",
    description:
      "Unify customers, orders, support, returns, campaigns, and repeat purchase workflows.",
    workflows: ["Order support", "Winback campaigns", "Return tracking"],
    detailRoute: "/industries/ecommerce-crm",
  },
  {
    slug: "finance-crm",
    title: "Finance CRM",
    iconKey: "finance",
    description:
      "Manage applications, client onboarding, documents, reminders, and advisor follow-ups.",
    workflows: ["Application tracking", "Document checks", "Advisor alerts"],
  },
  {
    slug: "agency-crm",
    title: "Agency CRM",
    iconKey: "agency",
    description:
      "Control leads, proposals, retainers, projects, approvals, and client communication.",
    workflows: ["Proposal pipeline", "Client approvals", "Retainer alerts"],
  },
  {
    slug: "event-management-crm",
    title: "Event Management CRM",
    iconKey: "events",
    description:
      "Track inquiries, vendors, guests, budgets, tasks, timelines, and event delivery status.",
    workflows: ["Event tasks", "Vendor tracking", "Guest follow-ups"],
  },
  {
    slug: "travel-crm",
    title: "Travel CRM",
    iconKey: "travel",
    description:
      "Manage travel inquiries, packages, quotations, bookings, documents, and payment reminders.",
    workflows: ["Package quotes", "Booking stages", "Payment reminders"],
  },
  {
    slug: "pharma-distributor-crm",
    title: "Pharma / Distributor CRM",
    iconKey: "pharma",
    description:
      "Coordinate distributor leads, orders, visits, stock visibility, follow-ups, and territory tasks.",
    workflows: ["Territory tasks", "Order follow-ups", "Distributor activity"],
  },
  {
    slug: "service-business-crm",
    title: "Service Business CRM",
    iconKey: "service",
    description:
      "Run inquiries, job scheduling, service tickets, field tasks, renewals, and customer follow-ups.",
    workflows: ["Job scheduling", "Ticket tracking", "Renewal reminders"],
  },
];

export type IndustryDetail = IndustryCrm & {
  headline: string;
  subheading: string;
  modules: string[];
  automations: string[];
};

export const featuredIndustryDetails: Record<string, IndustryDetail> =
  industryCrms
    .filter((industry) => industry.detailRoute)
    .reduce<Record<string, IndustryDetail>>((acc, industry) => {
      const detailsBySlug: Record<string, Omit<IndustryDetail, keyof IndustryCrm>> = {
        "real-estate-crm": {
          headline: "Turn every property inquiry into a managed sales journey.",
          subheading:
            "HNX builds real estate CRM systems for builders, brokers, agencies, and property teams that need clear lead ownership, visit tracking, and deal visibility.",
          modules: [
            "Property inventory",
            "Lead source tracking",
            "Site visit calendar",
            "Buyer and broker profiles",
            "Deal stage dashboard",
            "Payment milestone view",
          ],
          automations: [
            "Auto-assign leads by project, location, or sales owner",
            "Trigger visit reminders for buyers and sales teams",
            "Flag inactive deals before they leave the pipeline",
            "Create follow-up tasks after every site visit",
          ],
        },
        "healthcare-crm": {
          headline: "Bring patient inquiries, appointments, and follow-ups into one system.",
          subheading:
            "HNX healthcare CRM systems help clinics, wellness providers, and healthcare businesses manage patient communication and operational visibility.",
          modules: [
            "Patient inquiry board",
            "Appointment calendar",
            "Doctor or counselor assignment",
            "Document checklist",
            "Follow-up history",
            "Care reporting dashboard",
          ],
          automations: [
            "Send appointment and follow-up reminders",
            "Create document collection tasks",
            "Escalate missed patient callbacks",
            "Notify teams when care steps are pending",
          ],
        },
        "education-crm": {
          headline: "Manage admissions from inquiry to enrollment with clarity.",
          subheading:
            "HNX education CRM systems help schools, institutes, colleges, and edtech teams organize counselors, leads, demos, documents, and fee workflows.",
          modules: [
            "Admissions pipeline",
            "Student and parent profiles",
            "Counselor dashboard",
            "Demo class calendar",
            "Fee reminder board",
            "Document status tracker",
          ],
          automations: [
            "Assign new inquiries to counselors",
            "Trigger demo and callback reminders",
            "Track pending documents and fees",
            "Highlight high-intent students for faster action",
          ],
        },
        "ecommerce-crm": {
          headline: "Unify customers, orders, support, and repeat purchase workflows.",
          subheading:
            "HNX ecommerce CRM systems help online brands manage order conversations, customer support, returns, loyalty, and winback campaigns.",
          modules: [
            "Customer timeline",
            "Order and return tracker",
            "Support ticket board",
            "Campaign segments",
            "Repeat purchase dashboard",
            "Product issue insights",
          ],
          automations: [
            "Create support tasks from order issues",
            "Trigger winback reminders for inactive customers",
            "Flag delayed returns or refunds",
            "Segment customers for targeted follow-ups",
          ],
        },
      };

      const detail = detailsBySlug[industry.slug];

      if (!detail) {
        return acc;
      }

      acc[industry.slug] = {
        ...industry,
        ...detail,
      };

      return acc;
    }, {});
