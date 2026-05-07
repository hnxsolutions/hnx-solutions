export type IndustryId =
  | "general"
  | "education"
  | "healthcare"
  | "realEstate"
  | "pharma"
  | "events"
  | "saas"
  | "localServices";

export type DemoStat = {
  label: string;
  value: string;
  trend: string;
};

export type DemoLead = {
  name: string;
  organization: string;
  source: string;
  need: string;
  value: string;
  stage: string;
  owner: string;
  temperature: "Hot" | "Warm" | "Medium" | "High";
  note: string;
};

export type DemoRecord = {
  name: string;
  type: string;
  status: string;
  owner: string;
  nextStep: string;
};

export type DemoTask = {
  title: string;
  owner: string;
  due: string;
  priority: "High" | "Medium" | "Low";
  status: string;
};

export type DemoTicket = {
  title: string;
  customer: string;
  owner: string;
  priority: "High" | "Medium" | "Low";
  status: string;
};

export type DemoWorkflow = {
  title: string;
  trigger: string;
  condition: string;
  action: string;
  active: boolean;
};

export type DemoRole = {
  name: string;
  summary: string;
};

export type DemoReport = {
  title: string;
  metric: string;
  description: string;
  progress: number;
};

export type DemoAiQuestion = {
  question: string;
  answer: string;
};

export type DemoInventoryItem = {
  medicine: string;
  stock: string;
  threshold: string;
  status: string;
};

export type DemoIndustry = {
  id: IndustryId;
  name: string;
  selectorTitle: string;
  description: string;
  positioning: string;
  icon: "business" | "education" | "healthcare" | "realEstate" | "pharma" | "events" | "saas" | "local";
  roleUserLabel: string;
  labels: {
    leads: string;
    pipeline: string;
    records: string;
    tickets: string;
  };
  stats: DemoStat[];
  modules: string[];
  leads: DemoLead[];
  pipelineStages: string[];
  records: DemoRecord[];
  tasks: DemoTask[];
  tickets: DemoTicket[];
  workflows: DemoWorkflow[];
  roles: DemoRole[];
  reports: DemoReport[];
  aiQuestions: DemoAiQuestion[];
  aiInsights: string[];
  activities: string[];
  ctaMessage: string;
  inventory?: DemoInventoryItem[];
};

export const permissionColumns = ["View", "Create", "Edit", "Delete", "Export", "Approve"] as const;

export const permissionRows = [
  "Leads/Inquiries",
  "Customers/Records",
  "Pipeline",
  "Tasks",
  "Tickets",
  "Reports",
  "Workflows",
  "Users",
  "Settings",
  "Billing/Payments",
  "Documents",
];

export const permissionTypes = [
  "Module-level permissions",
  "Field-level permissions",
  "Record-level permissions",
  "Approval permissions",
  "Report access permissions",
  "Export restrictions",
  "Workflow management access",
  "Client portal restrictions",
];

export const demoIndustries: DemoIndustry[] = [
  {
    id: "general",
    name: "General Business CRM",
    selectorTitle: "General Business CRM",
    description: "For service companies, agencies, consultants, and growing teams.",
    positioning:
      "A flexible CRM for businesses that need one owned system for leads, clients, deals, tasks, tickets, automation, and reporting.",
    icon: "business",
    roleUserLabel: "Sales User",
    labels: {
      leads: "Leads / Inquiries",
      pipeline: "Sales Pipeline",
      records: "Customers / Records",
      tickets: "Support / Tickets",
    },
    stats: [
      { label: "Total Leads", value: "248", trend: "+18%" },
      { label: "Active Deals", value: "64", trend: "+12%" },
      { label: "Revenue Pipeline", value: "Rs. 18.4L", trend: "+22%" },
      { label: "Pending Follow-ups", value: "37", trend: "-9%" },
      { label: "Open Tickets", value: "14", trend: "-6%" },
      { label: "Conversion Rate", value: "28%", trend: "+4%" },
      { label: "Automations Active", value: "18", trend: "+7" },
      { label: "Team Members", value: "12", trend: "Live" },
    ],
    modules: [
      "Lead capture",
      "Customer records",
      "Sales pipeline",
      "Task follow-ups",
      "Support tickets",
      "Workflow engine",
      "Team permissions",
      "Revenue reports",
      "AI assistant",
    ],
    leads: [
      {
        name: "Amit Sharma",
        organization: "Novakos Healthcare",
        source: "Website",
        need: "Custom CRM",
        value: "Rs. 2,50,000",
        stage: "Demo Scheduled",
        owner: "Priya",
        temperature: "Hot",
        note: "Asked for sales, support, and permission-based dashboard modules.",
      },
      {
        name: "Riya Kapoor",
        organization: "Elite Events",
        source: "Instagram Ads",
        need: "Ticketing CRM",
        value: "Rs. 1,80,000",
        stage: "Proposal Sent",
        owner: "Rahul",
        temperature: "Warm",
        note: "Needs event-wise sales, platform tracking, and vendor task reports.",
      },
      {
        name: "Vikram Mehta",
        organization: "Urban Estates",
        source: "Referral",
        need: "Real Estate CRM",
        value: "Rs. 3,20,000",
        stage: "Contacted",
        owner: "Sneha",
        temperature: "Hot",
        note: "Wants site visit workflows and agent-wise conversion reporting.",
      },
      {
        name: "Arjun Malhotra",
        organization: "SaaSWorks",
        source: "LinkedIn",
        need: "SaaS CRM",
        value: "Rs. 4,50,000",
        stage: "Negotiation",
        owner: "Priya",
        temperature: "Hot",
        note: "Considering AI lead scoring, onboarding tasks, and MRR dashboards.",
      },
    ],
    pipelineStages: ["New Lead", "Contacted", "Demo Scheduled", "Proposal Sent", "Negotiation", "Won", "Lost"],
    records: [
      { name: "Novakos Healthcare", type: "Healthcare services", status: "Demo scheduled", owner: "Priya", nextStep: "Show permission workflow" },
      { name: "Urban Estates", type: "Real estate", status: "Discovery done", owner: "Sneha", nextStep: "Prepare module blueprint" },
      { name: "SaaSWorks", type: "Software company", status: "Negotiation", owner: "Priya", nextStep: "Finalize AI CRM scope" },
    ],
    tasks: [
      { title: "Send custom CRM blueprint to Novakos", owner: "Priya", due: "Today 4:00 PM", priority: "High", status: "Open" },
      { title: "Create follow-up task for Elite Events proposal", owner: "Rahul", due: "Tomorrow", priority: "Medium", status: "Scheduled" },
      { title: "Review Urban Estates workflow map", owner: "Sneha", due: "Friday", priority: "High", status: "In progress" },
      { title: "Prepare SaaSWorks AI assistant demo", owner: "Priya", due: "Next Monday", priority: "High", status: "Open" },
    ],
    tickets: [
      { title: "Need help exporting weekly lead report", customer: "Elite Events", owner: "Support Team", priority: "Medium", status: "Open" },
      { title: "Dashboard filter request", customer: "Urban Estates", owner: "Ankit", priority: "Low", status: "Pending review" },
      { title: "WhatsApp template approval", customer: "Novakos Healthcare", owner: "Riya", priority: "High", status: "Escalated" },
    ],
    workflows: [
      {
        title: "High-value lead assignment",
        trigger: "New lead is created",
        condition: "Deal value is above Rs. 2L",
        action: "Assign senior owner, notify manager, and create discovery call task.",
        active: true,
      },
      {
        title: "Follow-up reminder",
        trigger: "Follow-up date is today",
        condition: "Lead is not won or lost",
        action: "Create task and send WhatsApp reminder to assigned owner.",
        active: true,
      },
      {
        title: "Proposal follow-up",
        trigger: "Proposal sent",
        condition: "No customer response after 48 hours",
        action: "Send follow-up email and move deal to manager watchlist.",
        active: true,
      },
      {
        title: "Ticket escalation",
        trigger: "Support ticket stays open",
        condition: "Priority is High and age exceeds 12 hours",
        action: "Notify manager and escalate ticket owner.",
        active: false,
      },
    ],
    roles: [
      { name: "Business Owner", summary: "Complete visibility into leads, revenue, teams, tickets, reports, and system health." },
      { name: "Admin", summary: "Controls modules, users, permissions, workflow settings, integrations, and dashboards." },
      { name: "Manager", summary: "Tracks team pipeline, approves actions, reviews reports, and manages escalations." },
      { name: "Sales User", summary: "Handles assigned leads, customer notes, follow-up tasks, and deal updates." },
      { name: "Operations User", summary: "Manages internal tasks, approvals, documents, and process status." },
    ],
    reports: [
      { title: "Source-wise Lead Quality", metric: "Website leads convert 34%", description: "Compare source, lead score, deal value, and owner response time.", progress: 72 },
      { title: "Team Follow-up Health", metric: "37 pending", description: "Track delayed tasks, missed calls, and aging follow-ups.", progress: 58 },
      { title: "Revenue Pipeline Forecast", metric: "Rs. 18.4L", description: "Forecast expected closures by stage and confidence.", progress: 66 },
      { title: "Support SLA Watch", metric: "14 open tickets", description: "Monitor ticket priority, age, escalation risk, and owner workload.", progress: 44 },
    ],
    aiQuestions: [
      {
        question: "Which leads should my team follow up today?",
        answer:
          "Prioritize Amit Sharma, Arjun Malhotra, and Vikram Mehta. Amit has a demo scheduled, Arjun is in negotiation with the highest deal value, and Vikram is a hot referral with no follow-up in 18 hours.",
      },
      {
        question: "Which deals are most likely to close?",
        answer:
          "Arjun Malhotra and Amit Sharma are strongest. Both have clear requirements, high deal value, and recent engagement. Recommend sending a scoped implementation roadmap today.",
      },
      {
        question: "Write a follow-up message for this lead.",
        answer:
          "Hi Amit, thanks for discussing your CRM workflow with us. Based on your needs, HNX can map sales, support, permissions, and reporting into one owned CRM. Would tomorrow work for a detailed walkthrough?",
      },
      {
        question: "Explain this month's sales performance.",
        answer:
          "Lead volume is up 18%, but follow-up backlog is creating risk. Website and referral leads are strongest. The team should reduce pending follow-ups and focus on proposal-stage deals this week.",
      },
    ],
    aiInsights: ["3 hot deals need action today", "Proposal-stage deals have 61% close probability", "Referral leads are converting 1.8x better"],
    activities: ["Priya scheduled a demo for Novakos", "AI scored SaaSWorks as Hot", "Rahul sent proposal to Elite Events", "Support escalated WhatsApp template approval"],
    ctaMessage: "Your business should not adjust to software. Software should adjust to your business.",
  },
  {
    id: "education",
    name: "Education CRM",
    selectorTitle: "Education CRM",
    description: "For schools, colleges, coaching institutes, admission teams, and education consultants.",
    positioning:
      "A custom education CRM for admissions, counsellor assignment, parent communication, document tracking, fee follow-ups, and enrollment reports.",
    icon: "education",
    roleUserLabel: "Admissions User",
    labels: {
      leads: "Student Inquiries",
      pipeline: "Admission Pipeline",
      records: "Students / Parents",
      tickets: "Support / Requests",
    },
    stats: [
      { label: "Student Inquiries", value: "520", trend: "+24%" },
      { label: "Active Applications", value: "186", trend: "+16%" },
      { label: "Admission Pipeline Value", value: "Rs. 42.8L", trend: "+21%" },
      { label: "Pending Counselling Calls", value: "74", trend: "-8%" },
      { label: "Documents Pending", value: "39", trend: "-11%" },
      { label: "Fee Follow-ups", value: "28", trend: "-6%" },
      { label: "Conversion Rate", value: "31%", trend: "+5%" },
      { label: "Counsellors Active", value: "9", trend: "Live" },
    ],
    modules: [
      "Student inquiries",
      "Admission pipeline",
      "Counsellor assignment",
      "Parent communication",
      "Document collection",
      "Fee follow-up",
      "Batch/course interest",
      "Campus visit scheduling",
      "Application reports",
    ],
    leads: [
      {
        name: "Aarav Mehta",
        organization: "Parent: Neha Mehta",
        source: "Website",
        need: "Grade 8 Admission",
        value: "Rs. 1.8L fee value",
        stage: "Interested",
        owner: "Riya",
        temperature: "Hot",
        note: "Campus visit pending. Parent asked for transport and scholarship details.",
      },
      {
        name: "Simran Kaur",
        organization: "B.Com Admission",
        source: "Instagram Ads",
        need: "Commerce program",
        value: "Rs. 2.4L fee value",
        stage: "Documents Pending",
        owner: "Aman",
        temperature: "Warm",
        note: "Follow-up tomorrow for marksheet and ID proof upload.",
      },
      {
        name: "Rohan Verma",
        organization: "JEE Coaching",
        source: "Referral",
        need: "JEE advanced batch",
        value: "Rs. 1.2L fee value",
        stage: "Demo Class Scheduled",
        owner: "Priya",
        temperature: "Hot",
        note: "Attended webinar and requested fee plan.",
      },
      {
        name: "Ananya Sharma",
        organization: "MBA Counselling",
        source: "LinkedIn",
        need: "Application guidance",
        value: "Rs. 85,000",
        stage: "Application Started",
        owner: "Rahul",
        temperature: "Warm",
        note: "Needs shortlist and admission timeline summary.",
      },
    ],
    pipelineStages: ["New Inquiry", "Counselling Scheduled", "Campus Visit / Demo Class", "Application Started", "Documents Pending", "Fee Pending", "Enrolled", "Not Interested"],
    records: [
      { name: "Aarav Mehta", type: "Grade 8 applicant", status: "Campus visit pending", owner: "Riya", nextStep: "Call parent and confirm visit slot" },
      { name: "Simran Kaur", type: "B.Com applicant", status: "Documents pending", owner: "Aman", nextStep: "Send document checklist" },
      { name: "Rohan Verma", type: "JEE coaching lead", status: "Demo class scheduled", owner: "Priya", nextStep: "Share fee plan after demo" },
    ],
    tasks: [
      { title: "Call Neha Mehta for campus visit confirmation", owner: "Riya", due: "Today 11:30 AM", priority: "High", status: "Open" },
      { title: "Send document reminder to Simran", owner: "Aman", due: "Today 3:00 PM", priority: "Medium", status: "Scheduled" },
      { title: "Prepare JEE demo class notes", owner: "Priya", due: "Tomorrow", priority: "High", status: "In progress" },
      { title: "Review MBA application checklist", owner: "Rahul", due: "Friday", priority: "Medium", status: "Open" },
    ],
    tickets: [
      { title: "Parent requested transport route details", customer: "Aarav Mehta", owner: "Front Desk", priority: "Medium", status: "Open" },
      { title: "Scholarship document clarification", customer: "Simran Kaur", owner: "Document Team", priority: "High", status: "Pending" },
      { title: "Demo class reschedule request", customer: "Rohan Verma", owner: "Priya", priority: "Low", status: "Resolved" },
    ],
    workflows: [
      {
        title: "New student inquiry assignment",
        trigger: "New student inquiry is created",
        condition: "Course interest is high priority",
        action: "Assign counsellor, create call task, and send parent welcome message.",
        active: true,
      },
      {
        title: "Document delay reminder",
        trigger: "Documents remain pending",
        condition: "Pending for more than 3 days",
        action: "Remind student or parent and notify counsellor.",
        active: true,
      },
      {
        title: "Fee follow-up",
        trigger: "Fee payment is pending",
        condition: "Application is approved",
        action: "Create finance follow-up and notify admission manager.",
        active: true,
      },
      {
        title: "Campus visit no-show recovery",
        trigger: "Campus visit missed",
        condition: "Lead score is Hot or Warm",
        action: "Send reschedule message and alert counsellor.",
        active: false,
      },
    ],
    roles: [
      { name: "Business Owner", summary: "Sees admissions, counsellor output, fee pipeline, documents, and conversion reports." },
      { name: "Super Admin", summary: "Controls courses, forms, users, permissions, workflows, and admission dashboards." },
      { name: "Admission Head", summary: "Manages counsellors, approvals, stuck applications, and enrollment targets." },
      { name: "Counsellor", summary: "Handles assigned inquiries, parent calls, follow-ups, and application movement." },
      { name: "Finance User", summary: "Tracks fee follow-ups, payment status, receipts, and finance approvals." },
      { name: "Document Verification User", summary: "Reviews uploaded documents and updates verification status." },
      { name: "Parent / Student Portal User", summary: "Restricted portal access for forms, document uploads, and status updates." },
    ],
    reports: [
      { title: "Counsellor Conversion", metric: "Riya leads at 38%", description: "Compare inquiry volume, calls, applications, and enrollments by counsellor.", progress: 76 },
      { title: "Document Bottleneck", metric: "39 pending", description: "Identify students stuck because of missing marksheets, IDs, or certificates.", progress: 49 },
      { title: "Course Demand", metric: "JEE + MBA rising", description: "Track course-wise demand, source quality, and fee pipeline.", progress: 68 },
      { title: "Fee Collection Pipeline", metric: "28 follow-ups", description: "Monitor approved applications waiting for payment completion.", progress: 57 },
    ],
    aiQuestions: [
      {
        question: "Which students are most likely to enroll?",
        answer:
          "Your highest-priority admission leads are Aarav Mehta, Rohan Verma, and Simran Kaur. Aarav has a campus visit pending, Rohan has attended a demo class, and Simran only has document verification pending. Call Aarav's parent first, send Rohan a fee plan, and remind Simran about documents.",
      },
      {
        question: "Which applications are pending documents?",
        answer:
          "Simran Kaur is the most important pending document case because the application is otherwise qualified. The AI recommends a WhatsApp checklist and a counsellor call before tomorrow evening.",
      },
      {
        question: "Write a parent follow-up message.",
        answer:
          "Hi Neha ji, thank you for your interest in Aarav's Grade 8 admission. We can schedule your campus visit this week and walk you through academics, transport, and fee details. Would today evening or tomorrow morning work better?",
      },
      {
        question: "Which counsellor is performing best?",
        answer:
          "Riya has the strongest conversion rate this week because she closes campus visit confirmations fastest. Priya has the highest high-intent lead volume and needs one extra follow-up slot today.",
      },
    ],
    aiInsights: ["3 students are close to enrollment", "Document delays are blocking Rs. 5.1L in fee pipeline", "Counsellor response speed improved by 18%"],
    activities: ["Riya created a campus visit task", "Finance marked one fee follow-up complete", "AI flagged Simran as document-sensitive", "A parent welcome message was sent"],
    ctaMessage: "From inquiry to enrollment, every step can run from one custom admission CRM.",
  },
  {
    id: "healthcare",
    name: "Healthcare CRM",
    selectorTitle: "Healthcare CRM",
    description: "For clinics, hospitals, pharmacies, healthcare providers, and medical service teams.",
    positioning:
      "A healthcare CRM for patient inquiries, appointments, doctor assignment, reports, billing, support, and care follow-ups.",
    icon: "healthcare",
    roleUserLabel: "Support User",
    labels: {
      leads: "Patient Inquiries",
      pipeline: "Appointment / Treatment Pipeline",
      records: "Patients",
      tickets: "Care / Support Cases",
    },
    stats: [
      { label: "Patient Inquiries", value: "312", trend: "+13%" },
      { label: "Appointments Booked", value: "128", trend: "+19%" },
      { label: "Follow-ups Due", value: "46", trend: "-7%" },
      { label: "Open Support Cases", value: "18", trend: "-4%" },
      { label: "Reports Pending", value: "22", trend: "-10%" },
      { label: "Revenue Pipeline", value: "Rs. 9.6L", trend: "+11%" },
      { label: "Patient Satisfaction", value: "92%", trend: "+3%" },
      { label: "Staff Active", value: "16", trend: "Live" },
    ],
    modules: [
      "Patient inquiries",
      "Appointment pipeline",
      "Patient records",
      "Doctor assignment",
      "Follow-up reminders",
      "Report tracking",
      "Billing status",
      "Support tickets",
      "Care reminders",
    ],
    leads: [
      {
        name: "Kavita Sharma",
        organization: "Dermatology Consultation",
        source: "Website",
        need: "Skin consultation",
        value: "Rs. 6,500",
        stage: "Appointment Booked",
        owner: "Dr. Mehra",
        temperature: "High",
        note: "Appointment today at 4:30 PM. Needs reminder and consent form.",
      },
      {
        name: "Rajesh Kumar",
        organization: "Diagnostics Package",
        source: "WhatsApp",
        need: "Full body checkup",
        value: "Rs. 12,000",
        stage: "Report Pending",
        owner: "Ankit",
        temperature: "Medium",
        note: "Patient asked for report status and follow-up call.",
      },
      {
        name: "Priya Nair",
        organization: "Dental Treatment",
        source: "Referral",
        need: "Post-treatment review",
        value: "Rs. 18,000",
        stage: "Follow-up Due",
        owner: "Dr. Sinha",
        temperature: "High",
        note: "Follow-up overdue by one day after procedure.",
      },
      {
        name: "Mohan Singh",
        organization: "Pharmacy Order",
        source: "Phone Call",
        need: "Monthly prescription",
        value: "Rs. 4,800",
        stage: "Billing Pending",
        owner: "Riya",
        temperature: "Medium",
        note: "Needs payment confirmation and delivery update.",
      },
    ],
    pipelineStages: ["New Inquiry", "Appointment Scheduled", "Consultation Done", "Reports / Prescription Pending", "Follow-up Due", "Billing Pending", "Completed"],
    records: [
      { name: "Kavita Sharma", type: "Dermatology patient", status: "Appointment booked", owner: "Dr. Mehra", nextStep: "Send appointment reminder" },
      { name: "Rajesh Kumar", type: "Diagnostics patient", status: "Report pending", owner: "Ankit", nextStep: "Share report ETA" },
      { name: "Priya Nair", type: "Dental patient", status: "Follow-up due", owner: "Dr. Sinha", nextStep: "Call for post-treatment review" },
    ],
    tasks: [
      { title: "Send appointment reminder to Kavita", owner: "Front Desk", due: "Today 2:00 PM", priority: "High", status: "Open" },
      { title: "Call Priya for post-treatment follow-up", owner: "Care Coordinator", due: "Today", priority: "High", status: "Open" },
      { title: "Update Rajesh diagnostics report status", owner: "Ankit", due: "Tomorrow", priority: "Medium", status: "In progress" },
      { title: "Confirm Mohan pharmacy billing", owner: "Riya", due: "Today 5:00 PM", priority: "Medium", status: "Scheduled" },
    ],
    tickets: [
      { title: "Diagnostics report delayed", customer: "Rajesh Kumar", owner: "Ankit", priority: "High", status: "Open" },
      { title: "Appointment reschedule request", customer: "Kavita Sharma", owner: "Front Desk", priority: "Medium", status: "Pending" },
      { title: "Billing receipt not received", customer: "Mohan Singh", owner: "Billing Team", priority: "Medium", status: "Open" },
    ],
    workflows: [
      {
        title: "Appointment confirmation",
        trigger: "Appointment is booked",
        condition: "Doctor and slot are selected",
        action: "Send confirmation, create doctor calendar task, and notify front desk.",
        active: true,
      },
      {
        title: "Report upload notification",
        trigger: "Patient report is uploaded",
        condition: "Report is approved by staff",
        action: "Notify patient and create follow-up reminder.",
        active: true,
      },
      {
        title: "Overdue follow-up escalation",
        trigger: "Follow-up is overdue",
        condition: "Priority is High",
        action: "Notify care coordinator and update patient timeline.",
        active: true,
      },
      {
        title: "No-show recovery",
        trigger: "Patient misses appointment",
        condition: "Not contacted within 2 hours",
        action: "Send reschedule link and assign front desk callback.",
        active: false,
      },
    ],
    roles: [
      { name: "Business Owner", summary: "Tracks appointments, patient satisfaction, revenue, reports, care follow-ups, and team workload." },
      { name: "Clinic Admin", summary: "Controls users, departments, workflows, appointments, billing rules, and dashboards." },
      { name: "Doctor", summary: "Views assigned patients, notes, reports, prescriptions, and treatment follow-ups." },
      { name: "Front Desk", summary: "Handles inquiries, appointment booking, reminders, and reschedules." },
      { name: "Care Coordinator", summary: "Manages follow-ups, support cases, patient communication, and escalation." },
      { name: "Billing User", summary: "Updates invoices, receipts, payment status, and billing approvals." },
      { name: "Patient Portal User", summary: "Restricted access for appointments, reports, requests, and status updates." },
    ],
    reports: [
      { title: "Appointment Utilization", metric: "128 booked", description: "Track doctor-wise bookings, no-shows, and schedule load.", progress: 74 },
      { title: "Care Follow-up Risk", metric: "46 due", description: "Find patients needing post-visit, treatment, or report follow-up.", progress: 52 },
      { title: "Report Turnaround", metric: "22 pending", description: "Monitor diagnostics/report delays and patient communication gaps.", progress: 46 },
      { title: "Patient Satisfaction", metric: "92%", description: "Review support cases, feedback, response time, and closure rate.", progress: 88 },
    ],
    aiQuestions: [
      {
        question: "Which patients need follow-up today?",
        answer:
          "Today's priority follow-ups are Priya Nair, Kavita Sharma, and Rajesh Kumar. Priya is due for post-treatment follow-up, Kavita has a scheduled consultation today, and Rajesh is waiting for diagnostics reports. Call Priya first and send Rajesh a report status update.",
      },
      {
        question: "Which appointments may be missed?",
        answer:
          "Kavita Sharma has not confirmed the reminder yet, so front desk should call before 2 PM. Two lower-priority appointments have weak confirmation history and should receive automated WhatsApp reminders.",
      },
      {
        question: "Summarize this patient record.",
        answer:
          "Priya Nair completed dental treatment and is due for review. Last note shows mild discomfort. Recommended next step is a care coordinator call followed by doctor review if symptoms continue.",
      },
      {
        question: "Write appointment reminder message.",
        answer:
          "Hi Kavita, this is a reminder for your dermatology consultation with Dr. Mehra today at 4:30 PM. Please arrive 10 minutes early and carry any previous prescriptions or reports.",
      },
    ],
    aiInsights: ["3 high-priority patients need care follow-up", "Report delays are the main support driver", "No-show risk is highest after unconfirmed reminders"],
    activities: ["Front desk booked Kavita's appointment", "AI flagged Priya follow-up as urgent", "Report ticket opened for Rajesh", "Billing updated Mohan's pharmacy order"],
    ctaMessage: "Leads, appointments, doctors, care reminders, billing, and reports in one custom healthcare CRM.",
  },
  {
    id: "realEstate",
    name: "Real Estate CRM",
    selectorTitle: "Real Estate CRM",
    description: "For builders, agents, property consultants, and real estate sales teams.",
    positioning:
      "A real estate CRM for buyer requirements, property inventory, site visits, agent assignment, bookings, payments, documents, and sales reports.",
    icon: "realEstate",
    roleUserLabel: "Sales User",
    labels: {
      leads: "Property Leads",
      pipeline: "Site Visit Pipeline",
      records: "Buyers / Tenants",
      tickets: "Requests / Documents",
    },
    stats: [
      { label: "Property Leads", value: "410", trend: "+17%" },
      { label: "Site Visits Scheduled", value: "68", trend: "+14%" },
      { label: "Active Deals", value: "52", trend: "+8%" },
      { label: "Revenue Pipeline", value: "Rs. 8.7Cr", trend: "+19%" },
      { label: "Hot Buyers", value: "31", trend: "+6" },
      { label: "Follow-ups Due", value: "59", trend: "-5%" },
      { label: "Inventory Matched", value: "124", trend: "+21" },
      { label: "Conversion Rate", value: "18%", trend: "+3%" },
    ],
    modules: [
      "Property leads",
      "Buyer requirements",
      "Property inventory",
      "Site visits",
      "Agent assignment",
      "Deal pipeline",
      "Booking status",
      "Payment milestones",
      "Document reports",
    ],
    leads: [
      {
        name: "Nitin Arora",
        organization: "3BHK in Gurgaon",
        source: "MagicBricks",
        need: "Budget Rs. 1.5Cr",
        value: "Rs. 1.5Cr",
        stage: "Site Visit Scheduled",
        owner: "Karan",
        temperature: "Hot",
        note: "Needs premium 3BHK near office corridor. Site visit scheduled this weekend.",
      },
      {
        name: "Pooja Bansal",
        organization: "2BHK in Mohali",
        source: "Website",
        need: "Budget Rs. 75L",
        value: "Rs. 75L",
        stage: "Contacted",
        owner: "Simran",
        temperature: "Warm",
        note: "Asked for gated society options and possession timeline.",
      },
      {
        name: "Rahul Khanna",
        organization: "Commercial Space",
        source: "Referral",
        need: "Budget Rs. 2.2Cr",
        value: "Rs. 2.2Cr",
        stage: "Negotiation",
        owner: "Aman",
        temperature: "Hot",
        note: "Price negotiation with finance and documentation team involved.",
      },
      {
        name: "Meera Sethi",
        organization: "Rental Apartment",
        source: "Instagram",
        need: "Budget Rs. 45K/month",
        value: "Rs. 45K/month",
        stage: "New Lead",
        owner: "Priya",
        temperature: "Warm",
        note: "Interested in furnished rental near metro.",
      },
    ],
    pipelineStages: ["New Lead", "Requirement Collected", "Property Shared", "Site Visit Scheduled", "Negotiation", "Booking", "Payment / Documentation", "Closed"],
    records: [
      { name: "Nitin Arora", type: "Buyer", status: "Site visit scheduled", owner: "Karan", nextStep: "Send visit reminder and route map" },
      { name: "Rahul Khanna", type: "Commercial buyer", status: "Negotiation", owner: "Aman", nextStep: "Update offer sheet" },
      { name: "Pooja Bansal", type: "Buyer", status: "Requirement collected", owner: "Simran", nextStep: "Share 2BHK inventory shortlist" },
    ],
    tasks: [
      { title: "Confirm Nitin's Gurgaon site visit", owner: "Karan", due: "Today 6:00 PM", priority: "High", status: "Open" },
      { title: "Send 2BHK inventory to Pooja", owner: "Simran", due: "Tomorrow", priority: "Medium", status: "Scheduled" },
      { title: "Prepare Rahul commercial offer sheet", owner: "Aman", due: "Today", priority: "High", status: "In progress" },
      { title: "Call Meera for rental requirements", owner: "Priya", due: "Friday", priority: "Medium", status: "Open" },
    ],
    tickets: [
      { title: "Payment milestone clarification", customer: "Rahul Khanna", owner: "Finance User", priority: "High", status: "Open" },
      { title: "Need possession certificate copy", customer: "Pooja Bansal", owner: "Documentation", priority: "Medium", status: "Pending" },
      { title: "Site visit location update", customer: "Nitin Arora", owner: "Karan", priority: "Medium", status: "Resolved" },
    ],
    workflows: [
      {
        title: "Senior agent assignment",
        trigger: "New property lead is created",
        condition: "Budget is above Rs. 1Cr",
        action: "Assign senior agent and create immediate call task.",
        active: true,
      },
      {
        title: "Site visit reminder",
        trigger: "Site visit is scheduled",
        condition: "Visit is within 24 hours",
        action: "Send reminder to customer and agent with map link.",
        active: true,
      },
      {
        title: "Booking stage handoff",
        trigger: "Deal reaches booking stage",
        condition: "Token amount is marked pending",
        action: "Notify documentation and finance team.",
        active: true,
      },
      {
        title: "Inventory match alert",
        trigger: "New matching property is added",
        condition: "Buyer requirement score is above 80",
        action: "Notify agent with recommended buyer list.",
        active: false,
      },
    ],
    roles: [
      { name: "Business Owner", summary: "Sees pipeline value, agent output, site visits, inventory matches, and booking forecasts." },
      { name: "Sales Head", summary: "Manages agents, hot buyers, deals, negotiations, and sales performance reports." },
      { name: "Agent", summary: "Handles assigned buyers, site visits, property sharing, notes, and follow-ups." },
      { name: "Documentation User", summary: "Manages KYC, booking forms, agreements, and document status." },
      { name: "Finance User", summary: "Tracks token payments, milestones, receipts, and payment follow-ups." },
      { name: "Property Manager", summary: "Maintains inventory, unit availability, pricing, and possession data." },
    ],
    reports: [
      { title: "Agent Closing Rate", metric: "Karan at 22%", description: "Compare agent-wise site visits, negotiations, bookings, and closures.", progress: 63 },
      { title: "Inventory Match Report", metric: "124 matches", description: "Match buyer requirements with available inventory by budget and location.", progress: 72 },
      { title: "Site Visit Conversion", metric: "31 hot buyers", description: "Find buyers likely to convert after visits and follow-up timing.", progress: 57 },
      { title: "Revenue Pipeline", metric: "Rs. 8.7Cr", description: "Forecast bookings, payment milestones, and documentation blockers.", progress: 69 },
    ],
    aiQuestions: [
      {
        question: "Which buyers are ready for site visit?",
        answer:
          "Nitin Arora is ready because budget, location, and property type are clear. Pooja Bansal needs two more inventory options before visit confirmation. Meera Sethi should be called for locality preference first.",
      },
      {
        question: "Match this buyer with properties.",
        answer:
          "For Nitin, AI recommends three Gurgaon 3BHK units within Rs. 1.45Cr to Rs. 1.62Cr near his office corridor. The best first option has possession in 4 months and matches 91% of requirements.",
      },
      {
        question: "Which deals are closest to booking?",
        answer:
          "Rahul Khanna is closest to booking, but price approval and payment milestone clarity are blockers. Nitin can move quickly if the site visit goes well this weekend.",
      },
      {
        question: "Write property follow-up message.",
        answer:
          "Hi Nitin, we have shortlisted 3BHK options in Gurgaon matching your budget and location preference. Your site visit is scheduled this weekend. I will share the route and project details shortly.",
      },
    ],
    aiInsights: ["2 high-budget buyers need senior attention", "Site visit confirmations are driving this week's pipeline", "Documentation blockers may delay one booking"],
    activities: ["Karan confirmed a Gurgaon site visit", "AI matched 3 units to Nitin", "Finance opened payment clarification for Rahul", "Simran shortlisted Mohali inventory"],
    ctaMessage: "Property leads, inventory, site visits, agents, documents, and payments can all run in one owned CRM.",
  },
  {
    id: "pharma",
    name: "Pharma / Inventory CRM",
    selectorTitle: "Pharma / Inventory CRM",
    description: "For medicine distributors, pharma wholesalers, stock managers, billing teams, and sales teams.",
    positioning:
      "A pharma CRM for retailer management, stock tracking, billing, dispatch, payment follow-ups, purchase suggestions, and AI inventory insights.",
    icon: "pharma",
    roleUserLabel: "Sales User",
    labels: {
      leads: "Client Orders",
      pipeline: "Sales / Billing Pipeline",
      records: "Retailers / Distributors",
      tickets: "Dispatch / Billing Issues",
    },
    stats: [
      { label: "Active Retailers", value: "186", trend: "+9%" },
      { label: "Monthly Orders", value: "742", trend: "+15%" },
      { label: "Stock Alerts", value: "23", trend: "+5" },
      { label: "Pending Bills", value: "Rs. 6.8L", trend: "-6%" },
      { label: "Low Stock Medicines", value: "17", trend: "+3" },
      { label: "Sales Pipeline", value: "Rs. 14.2L", trend: "+18%" },
      { label: "Dispatch Pending", value: "36", trend: "-8%" },
      { label: "Payment Follow-ups", value: "41", trend: "-4%" },
    ],
    modules: [
      "Retailer management",
      "Medicine inventory",
      "Order management",
      "Billing",
      "Stock alerts",
      "Manufacturer purchase requests",
      "Sales follow-ups",
      "Payment reminders",
      "AI stock suggestions",
    ],
    leads: [
      {
        name: "City Medicos",
        organization: "Retail pharmacy",
        source: "Sales Visit",
        need: "Paracetamol 40 boxes",
        value: "Rs. 48,000",
        stage: "Bill Created",
        owner: "Sales: Nikhil",
        temperature: "High",
        note: "Stock updated automatically after bill creation. Payment pending.",
      },
      {
        name: "HealthPlus Pharmacy",
        organization: "Retail chain",
        source: "WhatsApp Order",
        need: "Azithromycin 15 boxes",
        value: "Rs. 31,500",
        stage: "Dispatch Pending",
        owner: "Dispatch: Riya",
        temperature: "Medium",
        note: "Low stock warning triggered during order processing.",
      },
      {
        name: "NovaCare Retail",
        organization: "Retail pharmacy",
        source: "Phone Order",
        need: "Vitamin D3 10 boxes",
        value: "Rs. 18,000",
        stage: "Completed",
        owner: "Accounts: Aman",
        temperature: "Warm",
        note: "Payment received and invoice closed.",
      },
      {
        name: "Sharma Medical Store",
        organization: "Distributor account",
        source: "Sales User",
        need: "Mixed Order",
        value: "Rs. 74,000",
        stage: "Invoice Draft",
        owner: "Billing: Priya",
        temperature: "High",
        note: "Manager approval needed before dispatch.",
      },
    ],
    pipelineStages: ["New Order", "Stock Check", "Bill Drafted", "Manager Approval", "Dispatch Pending", "Payment Pending", "Completed"],
    records: [
      { name: "City Medicos", type: "Retailer", status: "Payment pending", owner: "Nikhil", nextStep: "Send payment reminder after dispatch" },
      { name: "HealthPlus Pharmacy", type: "Retail chain", status: "Dispatch pending", owner: "Riya", nextStep: "Confirm low stock availability" },
      { name: "Sharma Medical Store", type: "Distributor", status: "Manager approval", owner: "Priya", nextStep: "Approve invoice draft" },
    ],
    tasks: [
      { title: "Prepare purchase request for Azithromycin", owner: "Stock Manager", due: "Today", priority: "High", status: "Open" },
      { title: "Collect pending payment from City Medicos", owner: "Accounts User", due: "Tomorrow", priority: "Medium", status: "Scheduled" },
      { title: "Approve Sharma Medical mixed invoice", owner: "Manager", due: "Today 5:00 PM", priority: "High", status: "In progress" },
      { title: "Dispatch HealthPlus order after stock check", owner: "Riya", due: "Tomorrow", priority: "Medium", status: "Open" },
    ],
    tickets: [
      { title: "Low stock warning for Azithromycin", customer: "HealthPlus Pharmacy", owner: "Stock Manager", priority: "High", status: "Open" },
      { title: "Invoice correction requested", customer: "Sharma Medical Store", owner: "Billing User", priority: "Medium", status: "Pending" },
      { title: "Dispatch delay update", customer: "City Medicos", owner: "Dispatch User", priority: "Low", status: "Resolved" },
    ],
    workflows: [
      {
        title: "Bill stock reduction",
        trigger: "Bill is created",
        condition: "Medicine quantity is available",
        action: "Reduce stock automatically and update inventory dashboard.",
        active: true,
      },
      {
        title: "Low stock purchase suggestion",
        trigger: "Stock goes below threshold",
        condition: "Medicine is active in monthly sales",
        action: "Notify stock manager and prepare manufacturer purchase suggestion.",
        active: true,
      },
      {
        title: "Payment collection follow-up",
        trigger: "Payment is pending",
        condition: "Bill age exceeds 7 days",
        action: "Create collection follow-up task for accounts team.",
        active: true,
      },
      {
        title: "Critical stock alert",
        trigger: "Critical medicine stock falls below threshold",
        condition: "Stock gap is urgent",
        action: "Alert admin and purchasing team immediately.",
        active: true,
      },
    ],
    roles: [
      { name: "Business Owner", summary: "Sees sales, stock alerts, pending bills, dispatch delays, and inventory risk." },
      { name: "Admin", summary: "Controls medicines, users, billing rules, stock thresholds, permissions, and workflows." },
      { name: "Sales User", summary: "Creates orders, tracks retailer follow-ups, and views assigned customer records." },
      { name: "Billing User", summary: "Creates invoices, applies approvals, and updates billing status." },
      { name: "Stock Manager", summary: "Manages inventory, stock thresholds, purchase suggestions, and medicine availability." },
      { name: "Dispatch User", summary: "Tracks packed, dispatched, and delivery-pending orders." },
      { name: "Accounts User", summary: "Handles pending payments, receipts, collections, and credit limits." },
      { name: "Manufacturer Coordination User", summary: "Prepares purchase requests and communicates reorder requirements." },
    ],
    reports: [
      { title: "Low Stock Watchlist", metric: "17 medicines", description: "Track stock below threshold and critical reorder priorities.", progress: 43 },
      { title: "Payment Aging", metric: "Rs. 6.8L pending", description: "Analyze pending bills by retailer, owner, and overdue days.", progress: 61 },
      { title: "Fast-Moving Medicines", metric: "Azithromycin rising", description: "Find products selling fastest and project next-week demand.", progress: 78 },
      { title: "Dispatch SLA", metric: "36 pending", description: "Monitor order stages from bill creation to dispatch completion.", progress: 52 },
    ],
    aiQuestions: [
      {
        question: "Which medicines need reorder?",
        answer:
          "Azithromycin 250mg and Vitamin D3 Tablets need immediate reorder. Azithromycin is below threshold by 12 boxes, and Vitamin D3 is critical with only 18 boxes left. Based on this month's sales rate, reorder at least 80 boxes of Azithromycin and 60 boxes of Vitamin D3.",
      },
      {
        question: "Which retailers have pending payments?",
        answer:
          "City Medicos and Sharma Medical Store need attention. City Medicos has an active bill after dispatch, while Sharma Medical has invoice approval pending before collection can start.",
      },
      {
        question: "Predict stock shortage.",
        answer:
          "Vitamin D3 Tablets may run out within 5 days if current sales continue. Azithromycin 250mg may create dispatch delays next week unless the purchase request is approved today.",
      },
      {
        question: "Draft manufacturer reorder email.",
        answer:
          "Subject: Urgent reorder request for Azithromycin and Vitamin D3. Please share availability and dispatch timeline for 80 boxes of Azithromycin 250mg and 60 boxes of Vitamin D3 Tablets.",
      },
    ],
    aiInsights: ["2 medicines need reorder today", "Billing automation reduced manual stock errors", "Payment follow-ups are concentrated across 11 retailers"],
    activities: ["City Medicos bill reduced stock automatically", "AI suggested Vitamin D3 reorder", "Stock manager opened Azithromycin purchase request", "Accounts scheduled payment follow-up"],
    ctaMessage: "Orders, stock, billing, dispatch, payments, and AI reorder suggestions can run in one pharma CRM.",
    inventory: [
      { medicine: "Paracetamol 500mg", stock: "120 boxes", threshold: "50", status: "Healthy" },
      { medicine: "Azithromycin 250mg", stock: "28 boxes", threshold: "40", status: "Low Stock" },
      { medicine: "Cough Syrup 100ml", stock: "75 bottles", threshold: "30", status: "Healthy" },
      { medicine: "Vitamin D3 Tablets", stock: "18 boxes", threshold: "25", status: "Critical" },
      { medicine: "Amoxicillin 500mg", stock: "42 boxes", threshold: "50", status: "Low Stock" },
    ],
  },
  {
    id: "events",
    name: "Events & Ticketing CRM",
    selectorTitle: "Events & Ticketing CRM",
    description: "For venues, event organizers, ticketing businesses, and entertainment companies.",
    positioning:
      "A ticketing CRM for event inquiries, platform-wise sales, vendor tasks, guest lists, sponsor pipelines, support requests, and post-event reports.",
    icon: "events",
    roleUserLabel: "Support User",
    labels: {
      leads: "Event Inquiries",
      pipeline: "Booking / Ticket Pipeline",
      records: "Attendees / Partners",
      tickets: "Refund / Support Tickets",
    },
    stats: [
      { label: "Upcoming Events", value: "24", trend: "+6" },
      { label: "Tickets Sold", value: "4,820", trend: "+28%" },
      { label: "Revenue", value: "Rs. 18.9L", trend: "+31%" },
      { label: "Platform Sources", value: "5", trend: "Live" },
      { label: "VIP Leads", value: "42", trend: "+9" },
      { label: "Vendor Tasks", value: "31", trend: "-7%" },
      { label: "Support Tickets", value: "19", trend: "-3%" },
      { label: "Occupancy Rate", value: "74%", trend: "+8%" },
    ],
    modules: [
      "Event inquiries",
      "Ticket sales tracking",
      "Platform-wise revenue",
      "Artist/vendor coordination",
      "Sponsor pipeline",
      "Guest list",
      "Refund requests",
      "Support tickets",
      "Event reports",
    ],
    leads: [
      {
        name: "Jazz Night",
        organization: "Live venue event",
        source: "Skillbox + District",
        need: "420 tickets sold",
        value: "Rs. 3.2L",
        stage: "Active",
        owner: "Event Team",
        temperature: "Hot",
        note: "Strong platform performance. Vendor sound check pending.",
      },
      {
        name: "Indie Friday",
        organization: "Music event",
        source: "Urbanaut",
        need: "280 tickets sold",
        value: "Rs. 2.1L",
        stage: "Promotion Running",
        owner: "Marketing",
        temperature: "Warm",
        note: "Needs campaign push for final 48 hours.",
      },
      {
        name: "Comedy Evening",
        organization: "Stand-up event",
        source: "Swiggy Scenes",
        need: "160 tickets sold",
        value: "Rs. 1.4L",
        stage: "Vendor Pending",
        owner: "Vendor Team",
        temperature: "Warm",
        note: "Lighting vendor confirmation pending.",
      },
      {
        name: "Corporate Gig",
        organization: "Private event inquiry",
        source: "Referral",
        need: "Budget Rs. 4L",
        value: "Rs. 4L",
        stage: "Proposal Sent",
        owner: "Rahul",
        temperature: "Hot",
        note: "Awaiting HR team approval and date confirmation.",
      },
    ],
    pipelineStages: ["New Event Inquiry", "Proposal Sent", "Vendor Planning", "Ticket Live", "Promotion Running", "Event Completed", "Report Generated"],
    records: [
      { name: "Jazz Night", type: "Venue event", status: "Ticket live", owner: "Event Team", nextStep: "Complete vendor checklist" },
      { name: "Indie Friday", type: "Music event", status: "Promotion running", owner: "Marketing", nextStep: "Launch final push campaign" },
      { name: "Corporate Gig", type: "Private event", status: "Proposal sent", owner: "Rahul", nextStep: "Follow up with HR team" },
    ],
    tasks: [
      { title: "Launch final push for Indie Friday", owner: "Marketing", due: "Today", priority: "High", status: "Open" },
      { title: "Confirm Comedy Evening lighting vendor", owner: "Vendor Team", due: "Tomorrow", priority: "Medium", status: "Pending" },
      { title: "Send platform-wise report for Jazz Night", owner: "Finance", due: "Friday", priority: "Medium", status: "Scheduled" },
      { title: "Follow up Corporate Gig proposal", owner: "Rahul", due: "Today 5:00 PM", priority: "High", status: "Open" },
    ],
    tickets: [
      { title: "Refund request for two tickets", customer: "Jazz Night attendee", owner: "Support Agent", priority: "Medium", status: "Open" },
      { title: "Vendor arrival time clarification", customer: "Comedy Evening", owner: "Vendor Team", priority: "High", status: "Pending" },
      { title: "VIP guest list update", customer: "Corporate Gig", owner: "Event Manager", priority: "Low", status: "Resolved" },
    ],
    workflows: [
      {
        title: "Event go-live workflow",
        trigger: "Event goes live",
        condition: "Ticket platform links are added",
        action: "Create marketing tasks and platform tracking dashboard.",
        active: true,
      },
      {
        title: "Low ticket sales alert",
        trigger: "Ticket sales are below target",
        condition: "Event is within 5 days",
        action: "Notify marketing manager and suggest campaign action.",
        active: true,
      },
      {
        title: "Post-event report",
        trigger: "Event is completed",
        condition: "Ticket platforms are synced",
        action: "Generate revenue report and platform-wise summary.",
        active: true,
      },
      {
        title: "Vendor task escalation",
        trigger: "Vendor task is overdue",
        condition: "Event starts within 48 hours",
        action: "Escalate to event manager and owner.",
        active: false,
      },
    ],
    roles: [
      { name: "Business Owner", summary: "Tracks ticket revenue, event occupancy, platform sources, vendors, and support risk." },
      { name: "Venue Owner", summary: "Reviews upcoming events, revenue, partners, guest lists, and performance dashboards." },
      { name: "Event Manager", summary: "Manages event stages, vendor tasks, booking pipeline, and issue escalation." },
      { name: "Marketing User", summary: "Tracks campaign tasks, ticket sales, platform source performance, and promotions." },
      { name: "Ticketing User", summary: "Handles ticket sales data, guest lists, refunds, and platform updates." },
      { name: "Vendor Coordinator", summary: "Manages vendor checklists, arrival times, approvals, and event-day tasks." },
      { name: "Finance User", summary: "Reviews revenue, payout, sponsor, vendor cost, and final event reports." },
      { name: "Support Agent", summary: "Handles attendee queries, refunds, ticket issues, and escalations." },
    ],
    reports: [
      { title: "Platform-wise Revenue", metric: "Skillbox leads", description: "Compare ticket sales across Skillbox, District, Urbanaut, and other platforms.", progress: 81 },
      { title: "Event Occupancy", metric: "74%", description: "Track tickets sold, capacity, VIP list, and event readiness.", progress: 74 },
      { title: "Vendor Readiness", metric: "31 tasks", description: "Monitor pending vendor tasks, overdue items, and escalations.", progress: 55 },
      { title: "Promotion Impact", metric: "Final push needed", description: "Identify events that need campaign action before show date.", progress: 48 },
    ],
    aiQuestions: [
      {
        question: "Which event needs marketing push?",
        answer:
          "Indie Friday needs the strongest marketing push because occupancy is behind target and the event is close. AI recommends a 48-hour campaign across Instagram, WhatsApp broadcast, and partner platform retargeting.",
      },
      {
        question: "Which platform sold most tickets?",
        answer:
          "Skillbox is leading ticket sales for Jazz Night, while Urbanaut is strongest for Indie Friday. District is converting well for premium ticket categories.",
      },
      {
        question: "Summarize ticket revenue.",
        answer:
          "Total ticket revenue is Rs. 18.9L across active events. Jazz Night is ahead of target, Indie Friday is below target, and Corporate Gig can add Rs. 4L if approved.",
      },
      {
        question: "Create promotion message.",
        answer:
          "Indie Friday is almost here. Book your spot for a live music night with limited seats left. Grab tickets now before the final release closes.",
      },
    ],
    aiInsights: ["Indie Friday needs campaign action", "Skillbox is the top-performing platform", "Vendor delays could affect Comedy Evening"],
    activities: ["Marketing launched ticket push", "AI flagged Indie Friday below target", "Vendor task opened for Comedy Evening", "Finance synced Jazz Night ticket revenue"],
    ctaMessage: "Events, tickets, vendors, guests, sponsors, support, and reports can run in one CRM.",
  },
  {
    id: "saas",
    name: "IT & SaaS CRM",
    selectorTitle: "IT & SaaS CRM",
    description: "For software companies, SaaS startups, IT service providers, and product teams.",
    positioning:
      "A SaaS CRM for demo requests, trials, subscriptions, onboarding, support, renewal reminders, churn risk, and AI account insights.",
    icon: "saas",
    roleUserLabel: "Sales User",
    labels: {
      leads: "Demo Requests",
      pipeline: "Subscription / Deal Pipeline",
      records: "Accounts",
      tickets: "Support Tickets",
    },
    stats: [
      { label: "Demo Requests", value: "164", trend: "+20%" },
      { label: "Active Trials", value: "72", trend: "+11%" },
      { label: "MRR Pipeline", value: "Rs. 11.6L", trend: "+16%" },
      { label: "Onboarding Tasks", value: "29", trend: "-8%" },
      { label: "Open Support Tickets", value: "21", trend: "-5%" },
      { label: "Churn Risk Accounts", value: "8", trend: "-2" },
      { label: "Conversion Rate", value: "24%", trend: "+4%" },
      { label: "Product Qualified Leads", value: "46", trend: "+9" },
    ],
    modules: [
      "Demo requests",
      "Trial users",
      "Subscription pipeline",
      "Onboarding",
      "Support tickets",
      "Product usage signals",
      "Account management",
      "Renewal reminders",
      "Churn risk",
    ],
    leads: [
      {
        name: "FinEdge SaaS",
        organization: "Fintech software",
        source: "LinkedIn",
        need: "50 users",
        value: "Rs. 2.8L MRR",
        stage: "Trial Started",
        owner: "Priya",
        temperature: "Hot",
        note: "Product team active in trial. Needs onboarding checklist.",
      },
      {
        name: "CloudKart",
        organization: "E-commerce SaaS",
        source: "Website",
        need: "20 users",
        value: "Rs. 92K MRR",
        stage: "Demo Scheduled",
        owner: "Rahul",
        temperature: "Warm",
        note: "Asked for role-based access and analytics.",
      },
      {
        name: "EduStack",
        organization: "Education platform",
        source: "Referral",
        need: "100 users",
        value: "Rs. 4.1L MRR",
        stage: "Proposal Sent",
        owner: "Aman",
        temperature: "Hot",
        note: "Needs custom onboarding and support workflows.",
      },
      {
        name: "RetailOS",
        organization: "Retail software",
        source: "Cold Email",
        need: "35 users",
        value: "Rs. 1.4L MRR",
        stage: "Contacted",
        owner: "Sneha",
        temperature: "Warm",
        note: "Interested in CRM plus support ticketing.",
      },
    ],
    pipelineStages: ["New Demo Request", "Discovery Call", "Demo Scheduled", "Trial Started", "Proposal Sent", "Subscription Negotiation", "Won", "Churn Risk"],
    records: [
      { name: "FinEdge SaaS", type: "Trial account", status: "Trial started", owner: "Priya", nextStep: "Activate onboarding checklist" },
      { name: "EduStack", type: "Enterprise lead", status: "Proposal sent", owner: "Aman", nextStep: "Review pricing scope" },
      { name: "CloudKart", type: "Demo lead", status: "Demo scheduled", owner: "Rahul", nextStep: "Prepare analytics use case" },
    ],
    tasks: [
      { title: "Create onboarding plan for FinEdge", owner: "Customer Success", due: "Today", priority: "High", status: "Open" },
      { title: "Send EduStack revised proposal", owner: "Aman", due: "Tomorrow", priority: "High", status: "In progress" },
      { title: "Prepare CloudKart demo script", owner: "Rahul", due: "Today 3:00 PM", priority: "Medium", status: "Scheduled" },
      { title: "Check inactive trial accounts", owner: "Priya", due: "Friday", priority: "Medium", status: "Open" },
    ],
    tickets: [
      { title: "Trial user login issue", customer: "FinEdge SaaS", owner: "Support Agent", priority: "High", status: "Open" },
      { title: "Need API integration docs", customer: "EduStack", owner: "Product Admin", priority: "Medium", status: "Pending" },
      { title: "Billing plan clarification", customer: "CloudKart", owner: "Finance User", priority: "Low", status: "Resolved" },
    ],
    workflows: [
      {
        title: "Demo request assignment",
        trigger: "Demo request is created",
        condition: "Company size is above 20 users",
        action: "Assign account executive and create discovery call task.",
        active: true,
      },
      {
        title: "Trial activation reminder",
        trigger: "Trial user is inactive",
        condition: "No key action for 3 days",
        action: "Send activation reminder and notify account owner.",
        active: true,
      },
      {
        title: "Renewal follow-up",
        trigger: "Renewal date is approaching",
        condition: "15 days before renewal",
        action: "Create renewal follow-up task for customer success.",
        active: true,
      },
      {
        title: "Churn risk watch",
        trigger: "Usage drops",
        condition: "Account health score below 60",
        action: "Notify customer success and suggest save action.",
        active: false,
      },
    ],
    roles: [
      { name: "Business Owner", summary: "Sees MRR pipeline, conversion, churn risk, trial activation, and account health." },
      { name: "Founder / Owner", summary: "Reviews revenue pipeline, strategic accounts, churn risk, and product adoption." },
      { name: "Sales Manager", summary: "Manages demo requests, account executives, deals, and pipeline forecasts." },
      { name: "Account Executive", summary: "Handles assigned demos, trial follow-ups, notes, proposals, and negotiations." },
      { name: "Customer Success", summary: "Manages onboarding, renewal reminders, health scores, and success tasks." },
      { name: "Support Agent", summary: "Handles technical tickets, status updates, and support escalation." },
      { name: "Product Admin", summary: "Tracks usage signals, product requests, integration docs, and feedback." },
      { name: "Finance User", summary: "Handles subscription billing, invoices, renewals, and payment follow-ups." },
    ],
    reports: [
      { title: "MRR Pipeline", metric: "Rs. 11.6L", description: "Forecast subscription revenue by stage, plan, and close probability.", progress: 70 },
      { title: "Trial Activation", metric: "72 active trials", description: "Track product usage, onboarding completion, and conversion probability.", progress: 64 },
      { title: "Churn Risk", metric: "8 accounts", description: "Identify accounts with falling usage, open tickets, or renewal risk.", progress: 38 },
      { title: "Support Load", metric: "21 tickets", description: "Monitor support volume, SLA risk, and product issue categories.", progress: 53 },
    ],
    aiQuestions: [
      {
        question: "Which trials are likely to convert?",
        answer:
          "FinEdge SaaS and EduStack are most likely to convert. FinEdge has strong trial activity and multiple users onboarded. EduStack has high deal value and referral trust but needs proposal closure.",
      },
      {
        question: "Which accounts are at churn risk?",
        answer:
          "Three accounts have reduced usage and open tickets. AI recommends customer success outreach, support closure, and a value review call before renewal reminders begin.",
      },
      {
        question: "Summarize MRR pipeline.",
        answer:
          "MRR pipeline is Rs. 11.6L. Trial-started and proposal-sent stages are strongest. The biggest growth action is faster onboarding for trial accounts with more than 20 users.",
      },
      {
        question: "Write onboarding message.",
        answer:
          "Hi FinEdge team, welcome to your trial. We have prepared your onboarding checklist so your team can test lead tracking, permissions, dashboards, and support workflows this week.",
      },
    ],
    aiInsights: ["FinEdge is the strongest trial conversion", "8 accounts need churn review", "Onboarding completion is the biggest conversion lever"],
    activities: ["FinEdge trial started", "AI flagged EduStack as high-value", "Support opened login issue", "Customer Success created onboarding tasks"],
    ctaMessage: "Demo requests, trials, subscriptions, onboarding, support, and AI account insights in one custom SaaS CRM.",
  },
  {
    id: "localServices",
    name: "Local Services CRM",
    selectorTitle: "Local Services CRM",
    description: "For repair services, salons, fitness studios, home services, and local businesses.",
    positioning:
      "A local services CRM for customer requests, bookings, staff assignment, service status, payments, feedback, repeat follow-ups, and support.",
    icon: "local",
    roleUserLabel: "Support User",
    labels: {
      leads: "Customer Requests",
      pipeline: "Booking / Service Pipeline",
      records: "Customers",
      tickets: "Service / Support Tickets",
    },
    stats: [
      { label: "Customer Requests", value: "236", trend: "+14%" },
      { label: "Bookings Today", value: "48", trend: "+9%" },
      { label: "Completed Jobs", value: "132", trend: "+18%" },
      { label: "Pending Payments", value: "Rs. 2.4L", trend: "-7%" },
      { label: "Repeat Customers", value: "86", trend: "+12%" },
      { label: "Staff Tasks", value: "39", trend: "-5%" },
      { label: "Reviews Collected", value: "58", trend: "+22%" },
      { label: "Follow-ups Due", value: "27", trend: "-4%" },
    ],
    modules: [
      "Customer requests",
      "Booking calendar",
      "Staff assignment",
      "Service status",
      "Payment tracking",
      "Feedback collection",
      "Repeat follow-ups",
      "Offers/campaigns",
      "Support tickets",
    ],
    leads: [
      {
        name: "Anjali Gupta",
        organization: "AC Repair",
        source: "WhatsApp",
        need: "Booking confirmed",
        value: "Rs. 2,400",
        stage: "Booking Confirmed",
        owner: "Rohit",
        temperature: "High",
        note: "Technician visit today at 3 PM. Payment link to be shared after service.",
      },
      {
        name: "Manav Singh",
        organization: "Salon Package",
        source: "Instagram",
        need: "Grooming package",
        value: "Rs. 5,500",
        stage: "Follow-up Due",
        owner: "Neha",
        temperature: "Warm",
        note: "Asked for weekend slot and discount campaign.",
      },
      {
        name: "Priyanka Jain",
        organization: "Home Cleaning",
        source: "Website",
        need: "Deep cleaning",
        value: "Rs. 8,000",
        stage: "Payment Pending",
        owner: "CleanPro Team",
        temperature: "High",
        note: "Service completed. Payment pending since yesterday.",
      },
      {
        name: "Arjun Sethi",
        organization: "Gym Membership",
        source: "Walk-in",
        need: "Trial session",
        value: "Rs. 24,000 annual",
        stage: "Trial Scheduled",
        owner: "Aman",
        temperature: "Hot",
        note: "Interested in personal training plan.",
      },
    ],
    pipelineStages: ["New Request", "Contacted", "Booking Scheduled", "Staff Assigned", "Service In Progress", "Payment Pending", "Completed", "Feedback Collected"],
    records: [
      { name: "Anjali Gupta", type: "Repair customer", status: "Booking confirmed", owner: "Rohit", nextStep: "Send technician reminder" },
      { name: "Priyanka Jain", type: "Home cleaning customer", status: "Payment pending", owner: "Accounts", nextStep: "Send payment reminder" },
      { name: "Arjun Sethi", type: "Fitness lead", status: "Trial scheduled", owner: "Aman", nextStep: "Confirm trainer slot" },
    ],
    tasks: [
      { title: "Confirm AC repair visit with Anjali", owner: "Receptionist", due: "Today 12:00 PM", priority: "High", status: "Open" },
      { title: "Send payment reminder to Priyanka", owner: "Accounts User", due: "Today", priority: "High", status: "Open" },
      { title: "Follow up salon package with Manav", owner: "Neha", due: "Tomorrow", priority: "Medium", status: "Scheduled" },
      { title: "Prepare trial session for Arjun", owner: "Aman", due: "Friday", priority: "Medium", status: "Open" },
    ],
    tickets: [
      { title: "Technician running late", customer: "Anjali Gupta", owner: "Support User", priority: "Medium", status: "Open" },
      { title: "Payment link not received", customer: "Priyanka Jain", owner: "Accounts User", priority: "High", status: "Pending" },
      { title: "Need weekend salon slot", customer: "Manav Singh", owner: "Receptionist", priority: "Low", status: "Resolved" },
    ],
    workflows: [
      {
        title: "Booking confirmation",
        trigger: "Customer books a service",
        condition: "Slot and staff are available",
        action: "Assign staff and send confirmation.",
        active: true,
      },
      {
        title: "Feedback and repeat follow-up",
        trigger: "Service is completed",
        condition: "Customer has no open issue",
        action: "Request feedback and create repeat follow-up.",
        active: true,
      },
      {
        title: "Payment reminder",
        trigger: "Payment is pending",
        condition: "Payment link is generated",
        action: "Send payment reminder to customer.",
        active: true,
      },
      {
        title: "Staff delay alert",
        trigger: "Staff task is delayed",
        condition: "Booking starts within 60 minutes",
        action: "Notify branch manager and customer support.",
        active: false,
      },
    ],
    roles: [
      { name: "Business Owner", summary: "Sees bookings, payments, staff workload, reviews, repeat customers, and service health." },
      { name: "Branch Manager", summary: "Manages staff tasks, bookings, customer issues, and branch reports." },
      { name: "Staff / Technician", summary: "Views assigned bookings, job details, status updates, and customer notes." },
      { name: "Receptionist", summary: "Handles new requests, bookings, confirmations, and customer communication." },
      { name: "Accounts User", summary: "Tracks invoices, payment links, reminders, and payment status." },
      { name: "Support User", summary: "Handles customer issues, reschedules, delays, and service escalations." },
    ],
    reports: [
      { title: "Booking Calendar Health", metric: "48 today", description: "Track bookings by branch, staff, slot, and service type.", progress: 69 },
      { title: "Pending Payment Report", metric: "Rs. 2.4L", description: "See overdue payments, owner, customer, and reminder status.", progress: 45 },
      { title: "Repeat Customer Potential", metric: "86 customers", description: "Find customers likely to rebook based on history and feedback.", progress: 72 },
      { title: "Staff Completion", metric: "132 jobs", description: "Track jobs completed, delayed, reopened, and reviewed by staff member.", progress: 78 },
    ],
    aiQuestions: [
      {
        question: "Which bookings need confirmation?",
        answer:
          "Anjali Gupta's AC repair and Arjun Sethi's gym trial need confirmation first. Both are scheduled soon and have high conversion or service priority.",
      },
      {
        question: "Which payments are pending?",
        answer:
          "Priyanka Jain is the highest-priority pending payment because service is completed and the payment link was not received. AI recommends resending the link and assigning Accounts follow-up.",
      },
      {
        question: "Which customers may repeat?",
        answer:
          "Anjali Gupta and Manav Singh are likely repeat customers. Anjali has repair history and Manav engaged with a package offer. Send a service reminder and package offer this week.",
      },
      {
        question: "Write service reminder message.",
        answer:
          "Hi Anjali, your AC repair visit is confirmed for today at 3 PM. Technician Rohit has been assigned. We will update you before arrival.",
      },
    ],
    aiInsights: ["Payment reminders can recover Rs. 2.4L", "48 bookings need smooth staff assignment today", "Repeat follow-ups can lift next week's bookings"],
    activities: ["Rohit assigned to AC repair", "AI flagged Priyanka payment pending", "Receptionist confirmed salon slot", "Feedback request sent after completed service"],
    ctaMessage: "Requests, bookings, staff, payments, support, feedback, and repeat follow-ups in one local services CRM.",
  },
];

export const defaultIndustryId: IndustryId = "general";
