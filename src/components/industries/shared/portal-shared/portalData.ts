import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Bell,
  Bot,
  CalendarCheck,
  ClipboardCheck,
  ClipboardList,
  CreditCard,
  Database,
  Factory,
  FileCheck2,
  FileText,
  FolderOpen,
  GraduationCap,
  Home,
  LayoutDashboard,
  LifeBuoy,
  LockKeyhole,
  Mail,
  MessageCircle,
  PackageCheck,
  Plane,
  ReceiptText,
  SearchCheck,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Star,
  Store,
  Truck,
  UserCheck,
  Users,
  Workflow,
  Wrench,
  Zap,
} from "lucide-react";
import type {
  IndustryPortalPageData,
  PortalAiAutomationItem,
  PortalDashboardActivity,
  PortalDashboardData,
  PortalImplementationStep,
  PortalIntegrationItem,
  PortalModule,
  PortalPermissionMatrixRow,
  PortalRole,
  PortalRoute,
  PortalSecurityItem,
} from "./portalTypes";

type TextIconTuple = [title: string, description: string, icon: LucideIcon];

type IndustryPortalConfig = {
  industrySlug: string;
  industryName: string;
  portalName: string;
  aliases: string[];
  heroTitle: string;
  heroDescription: string;
  profileTitle: string;
  profileSubtitle: string;
  accountStatus: string;
  latestUpdate: string;
  problems: TextIconTuple[];
  loginCards: Array<[title: string, value: string, description: string, icon: LucideIcon]>;
  roles: PortalRole[];
  workflowSteps: TextIconTuple[];
  dashboardEvents: [request: string, document: string, payment: string, notification: string];
  finalCtaTitle: string;
  finalCtaDescription: string;
  keywords: string[];
};

const contactHref = "/contact";

const baseModules: PortalModule[] = [
  item("Secure Login", "Password-protected user access with clean onboarding and account verification.", LockKeyhole),
  item("User Dashboard", "A focused home screen for requests, files, status, payments, and updates.", UserCheck),
  item("Document Upload / Download", "Users and teams can exchange files without losing context.", FileText),
  item("Request Tracking", "Every request has a visible owner, stage, priority, and update history.", ClipboardList),
  item("Payment Status", "Invoices, receipts, dues, and payment updates stay easy to track.", ReceiptText),
  item("Support Tickets", "Users raise support items and teams manage responses in one queue.", LifeBuoy),
  item("Notifications", "Important updates reach users through portal, email, or WhatsApp-ready flows.", Bell),
  item("Admin Review Panel", "Internal teams review submissions, documents, approvals, and escalations.", ShieldCheck),
  item("Reports", "Admins track portal activity, pending work, support load, and completion trends.", BarChart3),
  item("Approval Workflow", "Route files, requests, payments, and decisions through controlled review steps.", ClipboardCheck),
];

const securityItems: PortalSecurityItem[] = [
  item("Secure Login", "Protect every account with controlled sign-in and verified user access.", LockKeyhole),
  item("Role-Based Permissions", "Give each user type only the screens and actions they need.", ShieldCheck),
  item("Document Access Control", "Keep sensitive files tied to approved users, teams, and review stages.", FileCheck2),
  item("User Activity Logs", "Track uploads, request changes, payment updates, and support actions.", ClipboardList),
  item("Admin Approval Control", "Let admins approve critical changes before users see them.", UserCheck),
  item("Data Privacy", "Structure records around ownership, visibility, and audit boundaries.", Database),
];

const permissionMatrix: PortalPermissionMatrixRow[] = [
  { area: "Documents", user: "View / Upload", staff: "Review", admin: "Control" },
  { area: "Requests", user: "Create", staff: "Update", admin: "Assign" },
  { area: "Payments", user: "View", staff: "Verify", admin: "Manage" },
  { area: "Reports", user: "Limited", staff: "Team view", admin: "Full view" },
];

const integrations: PortalIntegrationItem[] = [
  item("Website Forms", "Move public enquiries and form submissions into portal workflows.", ClipboardList),
  item("CRM", "Sync customer context with internal lead, service, and relationship records.", Database),
  item("Mobile App", "Give users mobile-friendly portal actions and notification access.", Smartphone),
  item("Email", "Send confirmations, request updates, document reminders, and replies.", Mail),
  item("WhatsApp", "Trigger WhatsApp-ready alerts for status, payments, and missing documents.", MessageCircle),
  item("Payment Gateway", "Connect payments, receipts, dues, fees, renewals, or invoice status.", CreditCard),
  item("Document Storage", "Store uploads, approvals, signed files, and downloadable records securely.", FolderOpen),
  item("Admin Dashboard", "Give teams one panel for reviews, requests, approvals, and reports.", LayoutDashboard),
  item("Database", "Keep users, roles, documents, requests, payments, and activity structured.", Database),
  item("Reports", "Track portal usage, pending work, support tickets, and completion trends.", BarChart3),
];

const aiAutomationItems: PortalAiAutomationItem[] = [
  automation("AI Helpdesk", "Answer common user questions from portal data and support knowledge.", "User asks question", Bot),
  automation("Auto Ticket Routing", "Assign new requests to the right team based on type and urgency.", "New request", Workflow),
  automation("Document Reminder Automation", "Remind users when required files are missing or expired.", "Document missing", FileText),
  automation("Payment Reminder Automation", "Notify users about dues, receipts, fees, or renewal payments.", "Payment pending", ReceiptText),
  automation("Status Update Automation", "Send updates when request, document, payment, or ticket stages change.", "Status changes", Bell),
  automation("AI Summaries", "Summarize account activity, requests, documents, and support history.", "Team opens record", SearchCheck),
  automation("Smart Notifications", "Deliver timely portal alerts without manual follow-up.", "Event happens", Zap),
];

const implementationSteps: PortalImplementationStep[] = [
  item("Discovery", "We understand users, teams, requests, documents, payments, and support load.", SearchCheck),
  item("User Role Mapping", "We define what each user, staff member, and admin can view or control.", Users),
  item("Portal UI/UX Design", "We design login, dashboard, request, document, and support experiences.", LayoutDashboard),
  item("Dashboard Development", "We build user dashboards, admin review panels, metrics, and activity views.", BarChart3),
  item("Workflow Setup", "We connect request stages, document reviews, payments, notifications, and tickets.", Workflow),
  item("Security & Testing", "We test access rules, privacy boundaries, mobile screens, and critical workflows.", ShieldCheck),
  item("Launch & Training", "We launch the portal and train your team to manage users and admin tasks.", Bell),
  item("Support", "We monitor usage, fix issues, improve flows, and add modules as the portal grows.", LifeBuoy),
];

const configs: IndustryPortalConfig[] = [
  {
    industrySlug: "healthcare",
    industryName: "Healthcare",
    portalName: "Patient Portal",
    aliases: ["portal", "patient-portal"],
    heroTitle: "Healthcare Portal for Patients, Staff, and Operations",
    heroDescription: "A secure, unified portal that connects patients, healthcare professionals, and administrators—simplifying access to care, improving efficiency, and ensuring better outcomes.",
    profileTitle: "Patient Profile",
    profileSubtitle: "Reports, visits, prescriptions, and billing in one secure workspace.",
    accountStatus: "Verified patient",
    latestUpdate: "New lab report is ready for download and the next visit reminder is active.",
    problems: [
      ["Patients keep calling for reports", "Reports, prescriptions, and discharge files need a secure place patients can access anytime.", FileText],
      ["Appointment status is unclear", "Bookings, reschedules, doctor updates, and visit instructions need one view.", CalendarCheck],
      ["Billing questions repeat", "Receipts, dues, insurance notes, and payment status should be visible without support calls.", ReceiptText],
      ["Patient support is scattered", "Care questions and document follow-ups need a structured support queue.", LifeBuoy],
      ["Updates are missed", "Patients need timely notifications for reports, appointments, billing, and care instructions.", Bell],
      ["Teams repeat the same answers", "Front-desk teams lose time answering status questions the portal can handle.", Users],
    ],
    loginCards: [
      ["Patient Profile", "Verified", "Patient details and care context.", UserCheck],
      ["Lab Reports", "3 Ready", "Open and download reports.", FileText],
      ["Appointments", "Next: 10 AM", "Visit status and reminders.", CalendarCheck],
      ["Prescriptions", "2 Active", "Doctor instructions and medicines.", FileCheck2],
      ["Payment Receipts", "Paid", "Invoices and receipts.", ReceiptText],
      ["Doctor Message", "New", "Care update from clinic.", MessageCircle],
    ],
    roles: [
      role("patient", "Patient", "Patients view reports, appointments, prescriptions, payments, and support updates.", "Self-service", ["Reports", "Appointments", "Payments", "Support"], ["My reports", "Upcoming visit", "Receipts"]),
      role("doctor-admin", "Doctor/Admin", "Doctors and admins review records, messages, reports, and care updates.", "Clinical review", ["Patient records", "Care notes", "Report review", "Messages"], ["Assigned patients", "Report review", "Care updates"]),
      role("reception", "Reception", "Reception teams manage appointments, billing status, patient requests, and notifications.", "Operations", ["Appointment queue", "Billing status", "Requests", "Notifications"], ["Visit queue", "Billing desk", "Patient help"]),
    ],
    workflowSteps: [
      ["Patient Login", "Patient securely enters their portal account.", LockKeyhole],
      ["View Reports", "Reports, prescriptions, and files are available by permission.", FileText],
      ["Track Appointment", "Appointment status and visit instructions remain visible.", CalendarCheck],
      ["Check Payment", "Receipts, dues, and payment status stay attached.", ReceiptText],
      ["Get Care Update", "Patient receives report, visit, or doctor updates.", Bell],
      ["Raise Support Request", "Support questions move into a managed queue.", LifeBuoy],
    ],
    dashboardEvents: ["Lab report uploaded", "Appointment rescheduled", "Payment receipt ready", "Care update sent"],
    finalCtaTitle: "Launch a Patient Portal That Reduces Front-Desk Work",
    finalCtaDescription: "Give patients secure access to reports, appointments, payments, prescriptions, and support while your team handles fewer repeated calls.",
    keywords: ["patient portal development", "healthcare portal", "medical document portal"],
  },
  {
    industrySlug: "manufacturing",
    industryName: "Manufacturing",
    portalName: "Dealer / Vendor Portal",
    aliases: ["portal", "dealer-portal", "vendor-portal"],
    heroTitle: "Dealer / Vendor Portal for RFQs, Orders and Dispatch Updates",
    heroDescription: "Let dealers and vendors log in to submit RFQs, upload documents, track orders, view invoices, follow dispatch status, and raise support requests.",
    profileTitle: "Dealer Account",
    profileSubtitle: "RFQs, orders, invoices, dispatch, and vendor documents in one place.",
    accountStatus: "Approved partner",
    latestUpdate: "Purchase order moved to dispatch and the invoice is ready for download.",
    problems: [
      ["Dealers keep asking for order status", "RFQs, purchase orders, production updates, and dispatch details need a shared view.", PackageCheck],
      ["Vendor documents are scattered", "KYC, compliance files, quotations, and invoices need controlled upload and review.", FileText],
      ["Dispatch updates are manual", "Teams waste time sending repeated shipment and delivery status messages.", Truck],
      ["Support requests are unmanaged", "Dealer issues, warranty queries, and supply questions need visible ownership.", LifeBuoy],
      ["Payments and invoices need visibility", "Invoices, receipts, dues, and payment status should be easy to track.", ReceiptText],
      ["Operations teams lack one queue", "Internal teams need a clean panel for RFQs, document review, orders, and escalations.", Factory],
    ],
    loginCards: [
      ["Dealer Account", "Active", "Partner profile and permissions.", UserCheck],
      ["Purchase Orders", "7 Open", "Orders and stage updates.", ClipboardList],
      ["Vendor Documents", "2 Pending", "Files awaiting review.", FileText],
      ["Dispatch Status", "Shipped", "Delivery movement and ETA.", PackageCheck],
      ["Invoices", "Ready", "Billing and receipts.", ReceiptText],
      ["Support Request", "Assigned", "Dealer issue status.", LifeBuoy],
    ],
    roles: [
      role("dealer", "Dealer", "Dealers submit RFQs, track orders, download invoices, and check dispatch updates.", "Partner access", ["RFQs", "Orders", "Invoices", "Dispatch"], ["RFQ workspace", "Order status", "Invoice center"]),
      role("vendor", "Vendor", "Vendors upload documents, respond to requests, view review status, and manage submissions.", "Vendor access", ["Documents", "Submissions", "Review status", "Requests"], ["Document upload", "Review queue", "Vendor messages"]),
      role("operations", "Operations", "Operations teams review RFQs, update order stages, monitor dispatch, and close support issues.", "Team control", ["RFQ review", "Order updates", "Dispatch", "Support"], ["RFQ board", "Dispatch desk", "Issue queue"]),
      role("admin", "Admin", "Admins manage partner accounts, permissions, pricing rules, reports, and escalation controls.", "Full control", ["Partner accounts", "Permissions", "Reports", "Escalations"], ["Partner list", "Access rules", "Reports"]),
    ],
    workflowSteps: [
      ["Dealer Login", "Dealer or vendor enters a secure partner workspace.", LockKeyhole],
      ["Submit RFQ", "RFQ, product, quantity, and requirement details are captured.", ClipboardList],
      ["Upload Documents", "Compliance, quotation, and invoice files stay attached.", FileText],
      ["Track Order", "Order review, production, dispatch, and delivery stages remain visible.", PackageCheck],
      ["Get Dispatch Update", "Shipment changes trigger portal notifications.", Bell],
      ["Raise Support Ticket", "Issues route to operations with clear ownership.", LifeBuoy],
    ],
    dashboardEvents: ["RFQ submitted", "Vendor document pending", "Invoice ready", "Dispatch updated"],
    finalCtaTitle: "Build a Dealer / Vendor Portal That Reduces Manual Follow-Ups",
    finalCtaDescription: "Give partners a secure workspace for RFQs, orders, documents, invoices, dispatch updates, and support while your team gets one control panel.",
    keywords: ["dealer portal development", "vendor portal", "manufacturing portal"],
  },
  {
    industrySlug: "education",
    industryName: "Education",
    portalName: "Student / Parent Portal",
    aliases: ["portal", "student-portal", "parent-portal"],
    heroTitle: "Student / Parent Portal for Admissions, Notices and Fee Updates",
    heroDescription: "Give students and parents one secure login for admissions, notices, fee status, assignments, documents, results, and support requests.",
    profileTitle: "Student Profile",
    profileSubtitle: "Admissions, fee status, notices, results, and documents connected.",
    accountStatus: "Active student",
    latestUpdate: "Fee reminder and admission document review status are available in the portal.",
    problems: [
      ["Parents ask repeatedly for fee updates", "Fee dues, receipts, scholarships, and admission status need a single source of truth.", ReceiptText],
      ["Notices are scattered", "Announcements, circulars, events, and class updates get lost across channels.", Bell],
      ["Student documents need review", "Applications, certificates, marksheets, and ID files need controlled upload and admin review.", FileCheck2],
      ["Counselor/admin work is manual", "Teams repeat admission, document, fee, and support updates through calls and messages.", Users],
      ["Students miss updates", "Assignments, results, notices, and approval status need a reliable notification flow.", GraduationCap],
      ["Support requests are not tracked", "Parent and student questions need status, ownership, and response history.", LifeBuoy],
    ],
    loginCards: [
      ["Student Profile", "Active", "Student, class, and admission data.", UserCheck],
      ["Notices", "4 New", "Circulars and announcements.", Bell],
      ["Fee Status", "Due Soon", "Fees, dues, and receipts.", ReceiptText],
      ["Documents", "Review", "Applications and certificates.", FileText],
      ["Results", "Published", "Marks and academic records.", BarChart3],
      ["Support Ticket", "Open", "Parent/student query.", LifeBuoy],
    ],
    roles: [
      role("student", "Student", "Students view academic updates, documents, notices, assignments, and support status.", "Student access", ["Notices", "Assignments", "Results", "Documents"], ["My classes", "Assignments", "Results"]),
      role("parent", "Parent", "Parents track fees, notices, attendance, documents, and communication updates.", "Guardian access", ["Fees", "Attendance", "Notices", "Receipts"], ["Fee status", "Attendance", "Notices"]),
      role("teacher-admin", "Teacher/Admin", "Teachers and admins manage notices, documents, student status, and support requests.", "Academic control", ["Student records", "Document review", "Notices", "Support"], ["Student records", "Review desk", "Support queue"]),
    ],
    workflowSteps: [
      ["Student Login", "Student or parent enters a secure academic workspace.", LockKeyhole],
      ["Check Admissions", "Admission stage, counselor notes, and required documents are visible.", ClipboardList],
      ["Upload Documents", "Applications, certificates, and ID proofs move into review.", FileText],
      ["Track Fee Status", "Dues, receipts, and payment status remain clear.", ReceiptText],
      ["Get Notices", "Notices, results, and important reminders reach the account.", Bell],
      ["Raise Support Ticket", "Parent or student questions move into a tracked queue.", LifeBuoy],
    ],
    dashboardEvents: ["Notice published", "Document uploaded", "Fee status due", "Result update"],
    finalCtaTitle: "Build a Student / Parent Portal That Simplifies Communication",
    finalCtaDescription: "Make admissions, notices, fees, documents, results, and parent communication easier to manage from one secure portal.",
    keywords: ["student portal development", "parent portal", "education portal"],
  },
  {
    industrySlug: "real-estate",
    industryName: "Real Estate",
    portalName: "Buyer / Tenant Portal",
    aliases: ["portal", "buyer-portal", "tenant-portal"],
    heroTitle: "Buyer / Tenant Portal for Site Visits, Documents and Payment Updates",
    heroDescription: "Give buyers and tenants secure access to site visits, agreements, KYC documents, payment milestones, property updates, and support requests.",
    profileTitle: "Buyer / Tenant Profile",
    profileSubtitle: "Property interest, visit status, documents, payments, and support together.",
    accountStatus: "Verified user",
    latestUpdate: "Site visit confirmed and the next payment milestone has been added.",
    problems: [
      ["Buyers ask repeatedly for site visit status", "Site visits, property availability, and assigned team updates need a visible timeline.", Home],
      ["Agreements and KYC are scattered", "Documents, proofs, agreements, and verification stages need controlled access.", FileCheck2],
      ["Payment milestones need visibility", "Token, installment, receipt, and due date updates should stay easy to track.", ReceiptText],
      ["Broker updates are not centralized", "Buyer, tenant, broker, and sales updates need one shared activity trail.", Users],
      ["Tenant requests need ownership", "Maintenance, documents, rent status, and support requests need a managed queue.", LifeBuoy],
      ["Teams repeat property updates", "Status, documents, and payment answers should be self-service wherever possible.", Bell],
    ],
    loginCards: [
      ["Buyer Profile", "Verified", "Preferences and assigned property.", UserCheck],
      ["Site Visits", "Scheduled", "Visit time and status.", CalendarCheck],
      ["Documents", "KYC Pending", "Agreements and proofs.", FileText],
      ["Payment Milestone", "Next Due", "Receipts and dues.", ReceiptText],
      ["Property Update", "New", "Availability and project status.", Home],
      ["Support Request", "Open", "Query or tenant request.", LifeBuoy],
    ],
    roles: [
      role("buyer", "Buyer", "Buyers view visit status, property documents, booking milestones, and support updates.", "Buyer access", ["Visits", "Documents", "Payments", "Updates"], ["Visit calendar", "Agreement status", "Milestones"]),
      role("tenant", "Tenant", "Tenants manage rent, documents, service requests, notices, and support tickets.", "Tenant access", ["Rent status", "Requests", "Documents", "Notices"], ["Rent view", "Service ticket", "Tenant files"]),
      role("broker", "Broker", "Brokers view assigned buyers, visit updates, shared files, and communication status.", "Partner access", ["Assigned buyers", "Visits", "Files", "Messages"], ["Buyer list", "Visit status", "Messages"]),
      role("sales-admin", "Sales/Admin", "Sales and admin teams manage documents, milestones, support queues, and property updates.", "Team control", ["Document review", "Milestones", "Support", "Updates"], ["Review desk", "Milestones", "Support queue"]),
    ],
    workflowSteps: [
      ["Buyer Login", "Buyer or tenant enters a secure property workspace.", LockKeyhole],
      ["Track Site Visit", "Visit schedule, assigned team, and property status are visible.", CalendarCheck],
      ["Upload Documents", "KYC, agreements, and proofs move into review.", FileText],
      ["Check Payment", "Milestones, receipts, and due dates stay clear.", ReceiptText],
      ["Get Property Update", "Users receive project, visit, document, and payment updates.", Bell],
      ["Raise Support Ticket", "Buyer or tenant issues route to the right team.", LifeBuoy],
    ],
    dashboardEvents: ["Site visit scheduled", "Agreement uploaded", "Milestone due", "Property update"],
    finalCtaTitle: "Build a Property Portal That Keeps Buyers and Teams Aligned",
    finalCtaDescription: "Give buyers, tenants, brokers, and teams one secure place for visits, documents, payments, property updates, and support.",
    keywords: ["buyer portal", "tenant portal", "real estate portal development"],
  },
  {
    industrySlug: "retail",
    industryName: "Retail",
    portalName: "Customer Portal",
    aliases: ["portal", "customer-portal", "loyalty-portal"],
    heroTitle: "Customer Portal for Orders, Returns, Loyalty and Support",
    heroDescription: "Let customers log in to track orders, raise returns, download invoices, view loyalty points, manage profile details, and contact support.",
    profileTitle: "Customer Profile",
    profileSubtitle: "Orders, returns, invoices, loyalty, and support in one account.",
    accountStatus: "Loyalty member",
    latestUpdate: "Return request is under review and loyalty points were updated.",
    problems: [
      ["Customers ask for order status", "Orders, invoices, delivery updates, and return stages need one self-service view.", ShoppingBag],
      ["Returns are hard to track", "Return requests, approvals, pickup status, and refunds need a structured workflow.", ClipboardList],
      ["Loyalty points are unclear", "Customers need transparent points, rewards, tier status, and offers.", Star],
      ["Support requests are scattered", "Complaints, product questions, returns, and service issues need a managed ticket flow.", LifeBuoy],
      ["Invoices are requested repeatedly", "Receipts, invoices, payment history, and refunds should be available anytime.", ReceiptText],
      ["Store teams repeat updates", "Portal status and notifications reduce manual order and return follow-ups.", Bell],
    ],
    loginCards: [
      ["Customer Profile", "Active", "Profile and preferences.", UserCheck],
      ["Orders", "2 Active", "Order and delivery status.", ShoppingBag],
      ["Returns", "In Review", "Return and refund status.", ClipboardList],
      ["Loyalty Points", "1,240", "Rewards and offers.", Star],
      ["Invoices", "Ready", "Receipts and downloads.", ReceiptText],
      ["Support Ticket", "Assigned", "Customer support status.", LifeBuoy],
    ],
    roles: [
      role("customer", "Customer", "Customers track orders, returns, invoices, loyalty points, and support tickets.", "Customer access", ["Orders", "Returns", "Loyalty", "Invoices"], ["Order history", "Return status", "Rewards"]),
      role("store-team", "Store Team", "Store teams update order status, inventory notes, customer requests, and return reviews.", "Store operations", ["Order updates", "Inventory notes", "Returns", "Requests"], ["Order queue", "Return review", "Customer notes"]),
      role("support", "Support", "Support teams handle tickets, returns, complaints, refunds, and response history.", "Support queue", ["Tickets", "Returns", "Complaints", "Refunds"], ["Ticket board", "Return cases", "Response history"]),
      role("loyalty-manager", "Loyalty Manager", "Managers control rewards, customer segments, offers, and loyalty reporting.", "Loyalty control", ["Rewards", "Segments", "Offers", "Reports"], ["Reward rules", "Segments", "Offer performance"]),
    ],
    workflowSteps: [
      ["Customer Login", "Customer enters their secure order and support workspace.", LockKeyhole],
      ["Track Order", "Order, delivery, invoice, and return status stay visible.", ShoppingBag],
      ["Create Return", "Return reason, pickup, refund, and approval details are captured.", ClipboardList],
      ["Download Invoice", "Invoices and receipts are available anytime.", ReceiptText],
      ["Get Updates", "Customers receive order, return, reward, and support notifications.", Bell],
      ["Raise Ticket", "Support issues move into a managed queue.", LifeBuoy],
    ],
    dashboardEvents: ["Order updated", "Return request", "Invoice ready", "Loyalty update"],
    finalCtaTitle: "Build a Customer Portal That Improves Orders, Returns and Support",
    finalCtaDescription: "Give customers a clean self-service account for orders, returns, invoices, loyalty points, and support while teams reduce repeated updates.",
    keywords: ["retail customer portal", "loyalty portal", "retail support portal"],
  },
  {
    industrySlug: "finance",
    industryName: "Finance",
    portalName: "Client Portal",
    aliases: ["portal", "client-portal"],
    heroTitle: "Client Portal for Documents, Requests and Advisory Updates",
    heroDescription: "Give clients secure access to KYC uploads, applications, statements, advisory updates, payment status, support tickets, and document review progress.",
    profileTitle: "Client Profile",
    profileSubtitle: "KYC, applications, documents, advisor updates, and requests secured.",
    accountStatus: "Verified client",
    latestUpdate: "KYC document is under review and advisor notes were updated.",
    problems: [
      ["Clients need document visibility", "KYC, statements, applications, and advisory files require secure upload and review.", FileCheck2],
      ["Application status is unclear", "Loan, investment, advisory, or service requests need trackable stages.", ClipboardList],
      ["Advisor updates get missed", "Important notes, reminders, and next steps should be easy for clients to see.", MessageCircle],
      ["Payments and fees need clarity", "Fees, invoices, receipts, and pending payments should not require repeated calls.", ReceiptText],
      ["Requests need controlled review", "Sensitive client questions and file submissions need role-based handling.", ShieldCheck],
      ["Compliance needs audit history", "Every important client action should have clean visibility for approved teams.", Database],
    ],
    loginCards: [
      ["Client Profile", "Verified", "Client and advisor details.", UserCheck],
      ["KYC Documents", "Review", "Secure uploads and status.", FileCheck2],
      ["Requests", "Open", "Applications and service requests.", ClipboardList],
      ["Statements", "Ready", "Reports and downloads.", FileText],
      ["Payment Status", "Pending", "Fees and receipts.", ReceiptText],
      ["Advisor Update", "New", "Secure client communication.", MessageCircle],
    ],
    roles: [
      role("client", "Client", "Clients upload documents, track requests, download statements, and receive advisor updates.", "Client access", ["Documents", "Requests", "Statements", "Updates"], ["Document center", "Request status", "Advisor notes"]),
      role("advisor", "Advisor", "Advisors review client status, send updates, request files, and manage next steps.", "Advisor workspace", ["Client records", "Updates", "File requests", "Next steps"], ["Client list", "Advisor notes", "Pending files"]),
      role("reviewer-admin", "Reviewer/Admin", "Reviewers and admins manage compliance status, approvals, permissions, and reports.", "Controlled review", ["Compliance", "Approvals", "Permissions", "Reports"], ["Review queue", "Approvals", "Access control"]),
    ],
    workflowSteps: [
      ["Client Login", "Client enters a secure finance workspace.", LockKeyhole],
      ["Submit Request", "Client submits application, service, or advisory request details.", ClipboardList],
      ["Upload Documents", "KYC, statements, proofs, and forms move into controlled review.", FileText],
      ["Track Status", "Client follows request stage, missing files, and advisor updates.", BarChart3],
      ["Check Payment", "Fees, receipts, and payment status remain visible.", ReceiptText],
      ["Raise Support Ticket", "Sensitive support questions route to approved teams.", LifeBuoy],
    ],
    dashboardEvents: ["KYC uploaded", "Request updated", "Fee reminder", "Advisor message"],
    finalCtaTitle: "Build a Secure Client Portal for Documents and Advisory Updates",
    finalCtaDescription: "Give clients a secure workspace for KYC, requests, statements, fees, advisor communication, and controlled support.",
    keywords: ["finance client portal", "secure document portal", "financial advisory portal"],
  },
  {
    industrySlug: "insurance",
    industryName: "Insurance",
    portalName: "Policyholder / Agent Portal",
    aliases: ["portal", "policyholder-portal", "agent-portal"],
    heroTitle: "Policyholder Portal for Claims, Renewals and Documents",
    heroDescription: "Let policyholders and agents manage claims, policies, renewals, premium status, documents, receipts, and support updates from one portal.",
    profileTitle: "Policyholder Profile",
    profileSubtitle: "Policies, claims, documents, renewals, and premium updates connected.",
    accountStatus: "Active policyholder",
    latestUpdate: "Claim document is received and renewal reminder is scheduled.",
    problems: [
      ["Claim status is unclear", "Policyholders need visibility into submitted claims, pending documents, and review stages.", ClipboardList],
      ["Policy documents are hard to find", "Policies, endorsements, receipts, and claim files should be available anytime.", FileText],
      ["Renewal reminders are missed", "Renewals, premium dues, and payment reminders need structured notifications.", Bell],
      ["Agents need one workspace", "Agents need policyholder context, pending documents, claims, and renewal tasks.", Users],
      ["Premium status needs clarity", "Premium dues, receipts, and payment confirmation should be easy to check.", ReceiptText],
      ["Support queries need ownership", "Claim questions, policy changes, and service requests need assigned tracking.", LifeBuoy],
    ],
    loginCards: [
      ["Policyholder Profile", "Active", "Policyholder and policy data.", UserCheck],
      ["Claims", "Under Review", "Claim status and notes.", ClipboardList],
      ["Policy Documents", "Ready", "Policies and endorsements.", FileText],
      ["Renewals", "Due Soon", "Renewal reminders and dates.", Bell],
      ["Premium Payment", "Pending", "Premium status and receipts.", ReceiptText],
      ["Agent Message", "New", "Agent and support updates.", MessageCircle],
    ],
    roles: [
      role("policyholder", "Policyholder", "Policyholders view policies, claims, renewals, documents, payments, and support.", "Policyholder access", ["Policies", "Claims", "Renewals", "Payments"], ["Policy list", "Claim status", "Premium dues"]),
      role("agent", "Agent", "Agents manage assigned policyholders, claim updates, renewals, and document follow-ups.", "Agent access", ["Assigned clients", "Claim updates", "Renewals", "Documents"], ["Client list", "Renewal tasks", "Claim docs"]),
      role("claims-team", "Claims Team", "Claims teams review documents, update claim stages, and communicate next actions.", "Claims review", ["Document review", "Claim stages", "Requests", "Updates"], ["Claim queue", "Document review", "Next actions"]),
      role("admin", "Admin", "Admins manage permissions, reports, escalations, and policyholder access rules.", "Full control", ["Permissions", "Reports", "Escalations", "Access rules"], ["Access control", "Reports", "Escalations"]),
    ],
    workflowSteps: [
      ["Policyholder Login", "Policyholder enters a secure policy workspace.", LockKeyhole],
      ["Track Claim", "Claim status, required files, and review stage stay visible.", ClipboardList],
      ["Upload Documents", "Claim proofs, KYC, and policy files move into review.", FileText],
      ["Check Renewal", "Renewal, premium, and receipt status remain clear.", ReceiptText],
      ["Get Updates", "Policyholder receives claim, renewal, and agent notifications.", Bell],
      ["Raise Support Ticket", "Support questions route to agent or claims team.", LifeBuoy],
    ],
    dashboardEvents: ["Claim updated", "Document received", "Premium due", "Renewal reminder"],
    finalCtaTitle: "Build a Policyholder Portal for Claims, Renewals and Support",
    finalCtaDescription: "Give policyholders and agents one secure portal for policies, claims, renewals, documents, premiums, and support updates.",
    keywords: ["policyholder portal", "insurance claims portal", "agent portal"],
  },
  {
    industrySlug: "travel",
    industryName: "Travel",
    portalName: "Traveler Portal",
    aliases: ["portal", "traveler-portal"],
    heroTitle: "Traveler Portal for Bookings, Vouchers and Trip Updates",
    heroDescription: "Give travelers secure access to bookings, vouchers, invoices, itinerary updates, visa documents, payment status, and trip support.",
    profileTitle: "Traveler Profile",
    profileSubtitle: "Bookings, vouchers, itineraries, documents, payments, and support together.",
    accountStatus: "Confirmed traveler",
    latestUpdate: "Voucher is ready and the itinerary update has been sent.",
    problems: [
      ["Travelers ask for booking status", "Bookings, inclusions, itinerary, and confirmation details need one secure account.", Plane],
      ["Vouchers and documents are scattered", "Vouchers, passports, visa files, invoices, and receipts need organized access.", FileText],
      ["Payment updates are manual", "Installments, receipts, dues, and payment links should stay visible.", ReceiptText],
      ["Trip changes get missed", "Flight, hotel, itinerary, and vendor updates need reliable notifications.", Bell],
      ["Agents need client context", "Agents need one view for traveler requests, documents, and package updates.", Users],
      ["Support needs a trip history", "Trip questions, issues, and vendor escalations need a tracked support trail.", LifeBuoy],
    ],
    loginCards: [
      ["Traveler Profile", "Verified", "Traveler details and preferences.", UserCheck],
      ["Bookings", "Confirmed", "Booking and package status.", Plane],
      ["Vouchers", "Ready", "Vouchers and receipts.", FileText],
      ["Visa Documents", "Uploaded", "Passport and visa files.", FileCheck2],
      ["Payment Update", "Paid", "Dues and receipts.", ReceiptText],
      ["Trip Support", "Open", "Questions and assistance.", LifeBuoy],
    ],
    roles: [
      role("traveler", "Traveler", "Travelers view bookings, vouchers, itinerary, payments, documents, and support updates.", "Traveler access", ["Bookings", "Vouchers", "Itinerary", "Support"], ["Booking view", "Voucher center", "Trip support"]),
      role("agent", "Agent", "Agents manage traveler requests, package updates, documents, and payment reminders.", "Agent workspace", ["Requests", "Packages", "Documents", "Payments"], ["Traveler list", "Documents", "Payment follow-up"]),
      role("operations", "Operations", "Operations teams update vouchers, vendors, itinerary readiness, and support escalations.", "Trip operations", ["Vouchers", "Vendors", "Itinerary", "Escalations"], ["Voucher desk", "Vendor updates", "Trip status"]),
      role("admin", "Admin", "Admins manage access, reports, team workload, package rules, and portal settings.", "Full control", ["Access", "Reports", "Workload", "Settings"], ["Access control", "Reports", "Settings"]),
    ],
    workflowSteps: [
      ["Traveler Login", "Traveler enters a secure booking workspace.", LockKeyhole],
      ["Track Booking", "Booking, itinerary, vouchers, and inclusions stay visible.", Plane],
      ["Upload Documents", "Passport, visa, and traveler files move into review.", FileText],
      ["Check Payment", "Dues, receipts, and payment status stay clear.", ReceiptText],
      ["Get Trip Updates", "Travelers receive itinerary, voucher, and alert notifications.", Bell],
      ["Raise Support Ticket", "Trip questions route to agent or operations team.", LifeBuoy],
    ],
    dashboardEvents: ["Booking confirmed", "Voucher ready", "Payment received", "Itinerary update"],
    finalCtaTitle: "Build a Traveler Portal for Bookings, Documents and Updates",
    finalCtaDescription: "Give travelers one secure account for bookings, vouchers, documents, payments, itinerary updates, and support.",
    keywords: ["traveler portal", "travel booking portal", "tour portal"],
  },
  {
    industrySlug: "automobile",
    industryName: "Automobile",
    portalName: "Customer / Dealer Portal",
    aliases: ["portal", "customer-portal", "dealer-portal"],
    heroTitle: "Customer / Dealer Portal for Service, Documents and Vehicle Updates",
    heroDescription: "Let customers and dealers manage service bookings, vehicle documents, warranty status, invoices, test drive updates, and support requests.",
    profileTitle: "Vehicle Customer Profile",
    profileSubtitle: "Service, warranty, documents, invoices, test drives, and dealer updates connected.",
    accountStatus: "Active owner",
    latestUpdate: "Service booking confirmed and vehicle documents are ready.",
    problems: [
      ["Service status is unclear", "Customers need service booking, job progress, advisor notes, and pickup updates.", Wrench],
      ["Vehicle documents are requested often", "Invoices, warranty, insurance, RC, and service records need secure access.", FileText],
      ["Dealers need better visibility", "Dealers need one view for customers, test drives, documents, and service status.", Store],
      ["Payment and invoice updates are manual", "Receipts, service invoices, and payment confirmations should be self-service.", ReceiptText],
      ["Maintenance reminders are missed", "Customers need timely service, warranty, and vehicle update notifications.", Bell],
      ["Support requests need tracking", "Service issues, warranty questions, and dealer requests need clear ownership.", LifeBuoy],
    ],
    loginCards: [
      ["Customer Profile", "Active", "Customer and vehicle details.", UserCheck],
      ["Service Booking", "Scheduled", "Service date and job status.", Wrench],
      ["Vehicle Documents", "Ready", "Invoices and vehicle files.", FileText],
      ["Warranty Status", "Valid", "Coverage and warranty details.", ShieldCheck],
      ["Payment Invoice", "Ready", "Receipts and dues.", ReceiptText],
      ["Service Reminder", "New", "Maintenance alerts.", Bell],
    ],
    roles: [
      role("customer", "Customer", "Customers track service bookings, documents, warranty, invoices, and support.", "Customer access", ["Service", "Documents", "Warranty", "Invoices"], ["Service status", "Documents", "Warranty"]),
      role("dealer", "Dealer", "Dealers manage assigned customers, test drives, service updates, and document requests.", "Dealer access", ["Customers", "Test drives", "Service", "Documents"], ["Customer list", "Test drives", "Document requests"]),
      role("service-team", "Service Team", "Service teams update job status, invoices, reminders, and support tickets.", "Service operations", ["Job status", "Invoices", "Reminders", "Tickets"], ["Service queue", "Job cards", "Tickets"]),
      role("admin", "Admin", "Admins manage access, reports, service workload, dealer controls, and escalations.", "Full control", ["Access", "Reports", "Workload", "Escalations"], ["Access control", "Reports", "Dealer settings"]),
    ],
    workflowSteps: [
      ["Customer Login", "Customer or dealer enters a secure vehicle workspace.", LockKeyhole],
      ["Track Service", "Service booking, advisor notes, and job progress stay visible.", Wrench],
      ["Upload Documents", "Vehicle, warranty, finance, and service files stay attached.", FileText],
      ["Check Payment", "Invoices, dues, and receipts are easy to download.", ReceiptText],
      ["Get Vehicle Update", "Users receive service, warranty, and reminder notifications.", Bell],
      ["Raise Support Ticket", "Vehicle questions route to dealer or service team.", LifeBuoy],
    ],
    dashboardEvents: ["Service scheduled", "Document ready", "Invoice generated", "Reminder sent"],
    finalCtaTitle: "Build a Customer / Dealer Portal for Service and Vehicle Updates",
    finalCtaDescription: "Give customers, dealers, and service teams one secure portal for bookings, documents, warranty, payments, and support.",
    keywords: ["automobile customer portal", "dealer portal", "service portal"],
  },
  {
    industrySlug: "service-business",
    industryName: "Service Business",
    portalName: "Client / Service Portal",
    aliases: ["portal", "client-portal", "customer-portal"],
    heroTitle: "Client Portal for Requests, Jobs, Files and Invoices",
    heroDescription: "Give clients secure access to requests, quotes, job status, files, approvals, invoices, payments, and support updates from one portal.",
    profileTitle: "Client Account",
    profileSubtitle: "Requests, jobs, files, invoices, approvals, and support in one workspace.",
    accountStatus: "Active client",
    latestUpdate: "Job status was updated and the invoice is ready for review.",
    problems: [
      ["Clients ask for job status", "Requests, quotes, assignments, arrival updates, and completion proof need one timeline.", Workflow],
      ["Files are scattered", "Photos, requirements, contracts, proofs, and invoices need controlled upload and download.", FileText],
      ["Invoices need clarity", "Quotes, approvals, invoices, receipts, and payment status should be easy to track.", ReceiptText],
      ["Support requests are unmanaged", "Client questions, complaints, and job follow-ups need assigned ownership.", LifeBuoy],
      ["Field updates get missed", "Field team notes, proof, and client updates need a visible flow.", Wrench],
      ["Admins repeat the same answers", "A portal reduces manual status calls and keeps client communication structured.", Users],
    ],
    loginCards: [
      ["Client Profile", "Active", "Client and service details.", UserCheck],
      ["Open Requests", "5 Open", "Requests and quotes.", ClipboardList],
      ["Job Status", "In Progress", "Assigned team and updates.", Workflow],
      ["Files", "Received", "Uploads and downloads.", FileText],
      ["Invoices", "Ready", "Billing and receipts.", ReceiptText],
      ["Support Ticket", "Assigned", "Issue status and owner.", LifeBuoy],
    ],
    roles: [
      role("client", "Client", "Clients submit requests, upload files, track jobs, approve invoices, and raise support tickets.", "Client access", ["Requests", "Files", "Jobs", "Invoices"], ["Request list", "Job status", "Invoice review"]),
      role("field-team", "Field Team", "Field teams view assigned jobs, update progress, upload proof, and close tasks.", "Field access", ["Assigned jobs", "Progress", "Proof", "Notes"], ["Assigned jobs", "Proof upload", "Progress notes"]),
      role("support", "Support", "Support teams handle tickets, client updates, follow-ups, and job communication.", "Support queue", ["Tickets", "Updates", "Follow-ups", "Communication"], ["Ticket queue", "Client updates", "Follow-ups"]),
      role("admin", "Admin", "Admins assign work, review invoices, manage permissions, and monitor service reports.", "Full control", ["Assignments", "Invoices", "Permissions", "Reports"], ["Job assignment", "Invoice review", "Reports"]),
    ],
    workflowSteps: [
      ["Client Login", "Client enters a secure service workspace.", LockKeyhole],
      ["Submit Request", "Client submits request, quote, file, or support details.", ClipboardList],
      ["Upload Documents", "Photos, proofs, contracts, and files stay attached.", FileText],
      ["Track Job", "Assignment, progress, proof, and completion status remain visible.", Workflow],
      ["Check Invoice", "Quotes, invoices, receipts, and payment status are available.", ReceiptText],
      ["Raise Support Ticket", "Client questions route to support or admin team.", LifeBuoy],
    ],
    dashboardEvents: ["Request created", "File uploaded", "Invoice ready", "Job update"],
    finalCtaTitle: "Build a Client Portal That Tracks Requests, Jobs and Invoices",
    finalCtaDescription: "Give clients, field teams, support, and admins a secure portal for requests, jobs, files, invoices, payments, and updates.",
    keywords: ["client portal development", "service portal", "job tracking portal"],
  },
];

export const industryPortalPages: Record<string, IndustryPortalPageData> = Object.fromEntries(
  configs.map((config) => [config.industrySlug, createPage(config)]),
);

export const industryPortalStaticParams: PortalRoute[] = Object.values(industryPortalPages)
  .filter((page) => page.industrySlug !== "healthcare")
  .flatMap((page) =>
    page.aliases.map((solutionSlug) => ({
      industrySlug: page.industrySlug,
      solutionSlug,
    })),
  );

export function getIndustryPortalPage(
  industrySlug: string,
  solutionSlug = "portal",
): IndustryPortalPageData | null {
  const page = industryPortalPages[industrySlug];

  if (!page || !page.aliases.includes(solutionSlug)) {
    return null;
  }

  return page;
}

function createPage(config: IndustryPortalConfig): IndustryPortalPageData {
  const isHealthcare = config.industrySlug === "healthcare";

  return {
    industrySlug: config.industrySlug,
    industryName: config.industryName,
    portalName: config.portalName,
    eyebrow: config.portalName,
    primaryRoute: `/industries/${config.industrySlug}/portal`,
    aliases: config.aliases,
    keywords: [
      ...config.keywords,
      "self service portal",
      "role based portal",
      "document management portal",
      "request tracking portal",
      "HNX Solutions",
    ],
    serviceType: `${config.portalName} Development`,
    hero: {
      eyebrow: `${config.industryName} Industry`,
      title: config.heroTitle,
      description: config.heroDescription,
      primaryCta: { label: "Book a Consultation", href: contactHref },
      secondaryCta: { label: "View Live Demo", href: "#portal-workflow" },
      trustChips: isHealthcare
        ? ["HIPAA Compliant & Secure", "Role-based Access", "Scalable & Enterprise Ready"]
        : ["Secure & Compliant", "Role-based Access", "Scalable & Enterprise Ready"],
    },
    problems: config.problems.map(([title, description, icon]) => ({ title, description, icon })),
    loginExperience: {
      profileTitle: config.profileTitle,
      profileSubtitle: config.profileSubtitle,
      accountStatus: config.accountStatus,
      latestUpdate: config.latestUpdate,
      cards: config.loginCards.map(([title, value, description, icon]) => ({
        title,
        value,
        description,
        icon,
      })),
    },
    roles: config.roles,
    modules: baseModules,
    workflowSteps: config.workflowSteps.map(([title, description, icon]) => ({
      title,
      description,
      icon,
    })),
    dashboard: createDashboard(config.dashboardEvents),
    securityItems,
    permissionMatrix,
    integrations,
    aiAutomationItems,
    implementationSteps,
    finalCta: {
      title: config.finalCtaTitle,
      description: config.finalCtaDescription,
      primaryCta: { label: "Build My Portal", href: contactHref },
      secondaryCta: { label: "Book a Consultation", href: contactHref },
      trustPoints: ["Secure login", "Self-service workspace", "Reduced manual support"],
    },
  };
}

function createDashboard([
  request,
  document,
  payment,
  notification,
]: IndustryPortalConfig["dashboardEvents"]): PortalDashboardData {
  return {
    sidebarItems: ["Overview", "Requests", "Documents", "Payments", "Support", "Updates"],
    metrics: [
      { label: "Open Requests", value: "24", note: "Needs action" },
      { label: "Pending Documents", value: "8", note: "Under review" },
      { label: "Payment Status", value: "92%", note: "Updated" },
      { label: "Support Tickets", value: "11", note: "Assigned" },
    ],
    requestStatus: [
      activity(request, "In progress", "Portal request"),
      activity("New support request", "Assigned", "Team queue"),
      activity("Profile update", "Approved", "Admin review"),
    ],
    documents: [
      activity(document, "Ready", "Document center"),
      activity("Missing document reminder", "Sent", "Auto reminder"),
      activity("Admin review", "Pending", "Review desk"),
    ],
    payments: [
      activity(payment, "Visible", "Payment panel"),
      activity("Receipt download", "Ready", "Billing center"),
      activity("Payment reminder", "Scheduled", "Notification"),
    ],
    notifications: [notification, "Document reminder sent", "Support ticket assigned", "Admin review completed"],
    tickets: [
      activity("Support ticket", "Open", "Response due"),
      activity("Document question", "In review", "Admin desk"),
      activity("Status request", "Answered", "Portal update"),
    ],
  };
}

function item<T extends { title: string; description: string; icon: LucideIcon }>(
  title: string,
  description: string,
  icon: LucideIcon,
): T {
  return { title, description, icon } as T;
}

function automation(
  title: string,
  description: string,
  trigger: string,
  icon: LucideIcon,
): PortalAiAutomationItem {
  return { title, description, trigger, icon };
}

function role(
  id: string,
  title: string,
  description: string,
  accessLevel: string,
  capabilities: string[],
  workspaceItems: string[],
): PortalRole {
  return { id, title, description, accessLevel, capabilities, workspaceItems };
}

function activity(title: string, status: string, meta: string): PortalDashboardActivity {
  return { title, status, meta };
}
