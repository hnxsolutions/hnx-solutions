import type { SolutionCard, SolutionCategoryId, SolutionPageData, SolutionPreview, SolutionStat } from "./types";

type SolutionContentEnhancement = Partial<
  Pick<SolutionPageData, "description" | "problem" | "solution" | "impact" | "ctaTitle" | "ctaText">
> & {
  problems?: SolutionCard[];
  flow?: SolutionCard[];
  modules?: SolutionCard[];
  process?: SolutionCard[];
  useCases?: SolutionCard[];
  preview?: Partial<SolutionPreview>;
};

const stat = (label: string, value: string, note: string): SolutionStat => ({ label, value, note });

const card = (title: string, text: string, icon: SolutionCard["icon"]): SolutionCard => ({
  title,
  text,
  icon,
});

const flowTargets: Record<SolutionCategoryId, number> = {
  "web-saas": 5,
  "mobile-apps": 5,
  "ai-automation": 4,
  "cloud-devops": 4,
  "design-growth": 5,
};

const enhancements: Record<SolutionCategoryId, Record<string, SolutionContentEnhancement>> = {
  "web-saas": {
    "digital-presence-strategy": {
      problems: [
        card("Unclear brand positioning", "Offers, proof, audience language, and trust signals are not aligned before the website or SaaS build begins.", "Sparkles"),
        card("Analytics planned too late", "Teams launch pages without knowing which visits, form actions, source quality, or customer paths need tracking.", "BarChart3"),
      ],
      flow: [
        card("Measure", "Define funnel events, page goals, ownership, and reporting views so every digital asset can be improved after launch.", "BarChart3"),
      ],
      modules: [
        card("Brand positioning map", "Audience segments, promise, proof, objections, and key messages for every major page or product area.", "Sparkles"),
        card("SEO architecture", "Page hierarchy, content clusters, metadata priorities, internal links, and search intent planning.", "SearchCheck"),
        card("Customer journey blueprint", "Paths for first-time visitors, repeat prospects, clients, admins, and high-intent campaign traffic.", "Workflow"),
        card("Analytics specification", "Events, funnels, source tracking, conversion definitions, and dashboard ownership before development starts.", "BarChart3"),
      ],
      process: [
        card("Offer and audience audit", "Review the business model, key services, target buyers, proof points, and current conversion friction.", "SearchCheck"),
        card("Content and SEO architecture", "Plan page groups, keyword intent, trust sections, campaign destinations, and internal linking.", "FileText"),
        card("Measurement blueprint", "Define events, goals, source fields, reporting views, and improvement cadence for launch.", "BarChart3"),
      ],
      useCases: [
        card("Multi-service business planning", "Create a page and funnel roadmap for companies with many offers, locations, or industries.", "Layers3"),
        card("Pre-build platform roadmap", "Clarify how the website, CRM, portal, SaaS modules, and analytics should phase together.", "LayoutDashboard"),
      ],
      preview: {
        metrics: [stat("Conversion Paths", "9", "Visitor journeys planned")],
        rows: ["SEO content clusters prioritized", "Analytics events tied to funnel stages"],
      },
    },
    "business-website": {
      problems: [
        card("Missing trust proof", "Case studies, process clarity, certifications, testimonials, and outcome proof are not placed where buyers decide.", "ShieldCheck"),
        card("No source attribution", "Calls, WhatsApp clicks, forms, and enquiry quality are not connected to campaigns or organic traffic.", "BarChart3"),
      ],
      flow: [
        card("Optimize", "Use enquiry sources, page behavior, speed checks, and search data to improve the website after launch.", "Activity"),
      ],
      modules: [
        card("Trust proof system", "Case studies, testimonials, guarantees, process sections, FAQs, and credibility signals positioned around buyer hesitation.", "ShieldCheck"),
        card("WhatsApp and call CTAs", "Click actions, mobile-first contact paths, source capture, and routed notifications for faster enquiry handling.", "MessageCircle"),
        card("Speed and technical QA", "Responsive checks, performance cleanup, accessibility basics, metadata, sitemap, and launch readiness.", "CheckCircle2"),
        card("SEO service architecture", "Dedicated service and industry pages structured for search visibility and sales clarity.", "SearchCheck"),
      ],
      process: [
        card("SEO page planning", "Turn offers into search-ready service pages with clear hierarchy, proof, and conversion sections.", "SearchCheck"),
        card("Form and CTA wiring", "Connect forms, call buttons, WhatsApp actions, notifications, and source tracking.", "Send"),
        card("Launch QA", "Test speed, mobile behavior, metadata, schema basics, forms, and analytics events before publishing.", "CheckCircle2"),
      ],
      useCases: [
        card("Consultation-led business", "Support high-value enquiries with proof, process clarity, qualification forms, and direct call paths.", "Users"),
        card("Multi-location company", "Create location and service pages that support SEO, calls, directions, and campaign tracking.", "Store"),
      ],
      preview: {
        metrics: [stat("CTA Clicks", "34%", "Tracked from mobile actions")],
        rows: ["WhatsApp click source captured", "Trust proof added to top service pages"],
      },
    },
    "landing-pages": {
      problems: [
        card("A/B blind spots", "Headlines, proof sections, form length, and CTA positions are changed without structured comparison.", "Activity"),
        card("Lead routing gap", "Campaign leads arrive in inboxes without source, offer, owner, priority, or follow-up rules.", "Workflow"),
      ],
      flow: [
        card("Iterate", "Review source quality, form drop-off, CTA clicks, and lead outcomes to improve the next version.", "Activity"),
      ],
      modules: [
        card("A/B-ready sections", "Alternate headlines, proof blocks, CTAs, FAQs, and form layouts prepared for controlled iteration.", "Layers3"),
        card("Thank-you and follow-up flow", "Confirmation pages, auto replies, CRM capture, and next-step messages after every submission.", "Send"),
        card("UTM and pixel tracking", "Campaign parameters, ad pixels, conversion events, and source quality fields captured cleanly.", "BarChart3"),
        card("Lead quality routing", "Route high-intent leads to sales, nurture low-intent leads, and flag incomplete submissions.", "Workflow"),
      ],
      process: [
        card("Ad intent review", "Align page message with search terms, ad promise, audience temperature, and offer urgency.", "SearchCheck"),
        card("Conversion QA", "Test mobile pacing, form completion, CTA visibility, trust proof, and page speed.", "CheckCircle2"),
        card("Performance review", "Compare source, cost, conversion rate, lead quality, and follow-up response.", "BarChart3"),
      ],
      useCases: [
        card("Lead magnet campaign", "Capture downloads, webinar signups, demos, or consultation requests with automated follow-up.", "FileText"),
        card("High-ticket offer page", "Use proof, objections, qualification, and direct contact paths for expensive services.", "CreditCard"),
      ],
      preview: {
        metrics: [stat("Lead Quality", "A-", "Qualified source score")],
        rows: ["A/B headline variant queued", "High-intent lead routed to sales owner"],
      },
    },
    "client-portal": {
      problems: [
        card("No audit trail", "Approvals, uploads, comments, and client decisions are scattered across email and chat.", "FileText"),
        card("Support requests lack structure", "Clients send incomplete requests without categories, priority, attachments, or accountable owners.", "Headphones"),
      ],
      flow: [
        card("Improve", "Review request volume, client activity, approval delays, and support load to refine the portal experience.", "BarChart3"),
      ],
      modules: [
        card("Secure client login", "Account access, password flow, role-based visibility, and session-safe client workspaces.", "LockKeyhole"),
        card("Status timeline", "Milestones, comments, approvals, uploads, and client-facing updates in chronological order.", "Activity"),
        card("Invoice and payment area", "Invoices, payment states, receipts, pending balances, and finance notes visible to clients.", "CreditCard"),
        card("Audit trail", "Track who uploaded, approved, commented, changed status, or downloaded important documents.", "ShieldCheck"),
      ],
      process: [
        card("Permission model", "Define what clients, internal users, finance, and support teams can see or change.", "ShieldCheck"),
        card("Document and request design", "Structure uploads, request forms, statuses, priorities, categories, and notifications.", "FileText"),
        card("Pilot with real clients", "Test visibility, language, request quality, and notification frequency before wider rollout.", "Users"),
      ],
      useCases: [
        card("Finance onboarding", "Collect KYC, agreements, invoices, approvals, and compliance documents in one portal.", "ShieldCheck"),
        card("Project delivery portal", "Share milestones, files, approvals, change requests, and client decisions without email clutter.", "Workflow"),
      ],
      preview: {
        metrics: [stat("Approval Time", "-31%", "Fewer email loops")],
        rows: ["Client approved milestone deliverable", "Invoice reminder visible in portal"],
      },
    },
    "saas-platform": {
      problems: [
        card("Role logic gets messy", "Customers, teams, admins, and support users need different access rules from day one.", "LockKeyhole"),
        card("Usage data is invisible", "Founders cannot see activation, feature adoption, plan limits, retention risk, or support load.", "Activity"),
      ],
      flow: [
        card("Monetize", "Connect plans, billing states, usage limits, upgrades, trials, invoices, and revenue dashboards.", "CreditCard"),
      ],
      modules: [
        card("Workspace model", "Accounts, organizations, teams, invitations, ownership, and scoped records for B2B SaaS.", "Users"),
        card("Usage and plan limits", "Track feature usage, quota states, billing eligibility, upgrades, downgrades, and trial expiry.", "Activity"),
        card("Notification center", "Lifecycle emails, account alerts, billing notices, admin updates, and in-app messages.", "Bell"),
        card("Support and feedback loop", "Tickets, feature requests, user notes, churn reasons, and product improvement backlog.", "Headphones"),
      ],
      process: [
        card("MVP boundary", "Separate must-have workflows from future features so the first release can reach users faster.", "CheckCircle2"),
        card("Billing state design", "Map trials, plans, invoices, failed payments, upgrades, downgrades, and access rules.", "CreditCard"),
        card("Product analytics setup", "Track activation, retention, feature adoption, account health, and revenue signals.", "BarChart3"),
      ],
      useCases: [
        card("Founder MVP", "Launch a focused product with billing, admin control, and user feedback loops.", "Rocket"),
        card("Vertical SaaS", "Build a workflow platform for a specific industry with roles, reports, and customer workspaces.", "Store"),
      ],
      preview: {
        metrics: [stat("Trial-to-Paid", "24%", "Tracked conversion path")],
        rows: ["Trial account approaching usage limit", "Feature request linked to product backlog"],
      },
    },
    "admin-dashboard": {
      problems: [
        card("Approvals happen off-system", "Managers approve changes in chat or email, leaving no reliable history or status.", "CheckCircle2"),
        card("Reports are manually assembled", "Teams export data, clean sheets, and rebuild weekly views instead of using live reports.", "FileText"),
      ],
      flow: [
        card("Govern", "Use roles, approvals, audit trails, and dashboard rules to keep operations controlled as teams grow.", "ShieldCheck"),
      ],
      modules: [
        card("Approval center", "Manager review queues, comments, decision history, status changes, and escalation rules.", "CheckCircle2"),
        card("KPI command view", "Operational metrics, filters, trends, exceptions, and comparison views for leadership.", "BarChart3"),
        card("Bulk actions and imports", "Controlled edits, CSV imports, exports, record updates, and data cleanup workflows.", "Database"),
        card("Audit and activity log", "Track user actions, permission changes, record updates, exports, and sensitive operations.", "ShieldCheck"),
      ],
      process: [
        card("KPI definition", "Define which numbers matter, who owns them, and what actions they should trigger.", "BarChart3"),
        card("Permission testing", "Validate admin, manager, agent, finance, and viewer access with real operating scenarios.", "LockKeyhole"),
        card("Report handoff", "Create live views and exports that replace manual spreadsheet reporting.", "FileText"),
      ],
      useCases: [
        card("Operations control room", "Run approvals, queues, records, reporting, and team actions from one admin surface.", "LayoutDashboard"),
        card("Compliance-sensitive admin", "Restrict changes, log activity, and keep a history of sensitive actions.", "ShieldCheck"),
      ],
      preview: {
        metrics: [stat("Approvals", "27", "Pending owner action")],
        rows: ["Bulk import validated before publish", "Weekly KPI report generated automatically"],
      },
    },
    "booking-payment-system": {
      problems: [
        card("Cancellation rules are unclear", "Refunds, deposits, reschedules, no-shows, and late cancellations need enforceable logic.", "ShieldCheck"),
        card("Calendar and payment data split", "Availability may live in one place while payment and customer details live somewhere else.", "Network"),
      ],
      flow: [
        card("Reconcile", "Match bookings, payments, invoices, refunds, reminders, and admin actions in one operating view.", "CreditCard"),
      ],
      modules: [
        card("Availability rules", "Slots, staff calendars, capacity, blackout dates, buffers, booking windows, and conflict prevention.", "CheckCircle2"),
        card("Cancellation and refund logic", "Deposits, partial refunds, policy windows, reschedule rules, and exception handling.", "ShieldCheck"),
        card("Invoice and receipt flow", "Payment confirmation, tax details, invoices, receipts, failed payment notices, and balance tracking.", "CreditCard"),
        card("Customer reminder engine", "Confirmation, pre-visit reminders, payment nudges, reschedule links, and post-service follow-up.", "Bell"),
      ],
      process: [
        card("Payment scenario testing", "Validate success, failure, refund, partial payment, cancellation, and manual adjustment cases.", "CreditCard"),
        card("Calendar conflict testing", "Check overlapping slots, capacity, staff availability, blackout dates, and reschedules.", "CheckCircle2"),
        card("Finance handoff", "Prepare booking revenue, pending balances, refunds, and invoice reports for operations.", "FileText"),
      ],
      useCases: [
        card("Class and cohort booking", "Manage limited seats, batches, deposits, reminders, and attendance tracking.", "Users"),
        card("Paid consultation system", "Collect advance payments, confirm slots, issue receipts, and reduce no-shows.", "CreditCard"),
      ],
      preview: {
        metrics: [stat("Pending Payments", "18", "Need reminder or review")],
        rows: ["Refund request queued for approval", "Calendar conflict prevented before checkout"],
      },
    },
  },
  "mobile-apps": {
    "app-strategy": {
      problems: [
        card("API needs are vague", "Teams plan app screens before defining the backend, admin, payment, and data requirements.", "Network"),
        card("Growth plan is missing", "Retention, notifications, analytics, app updates, and acquisition loops are not planned early.", "BarChart3"),
      ],
      flow: [
        card("Launch", "Turn the roadmap into release phases, store requirements, analytics goals, and post-launch growth steps.", "Store"),
      ],
      modules: [
        card("Objective scorecard", "Business goal, user job, revenue logic, retention goal, and success metric for the app.", "BarChart3"),
        card("Technical architecture", "API requirements, authentication, admin connection, data model, notifications, and integrations.", "ServerCog"),
        card("Release roadmap", "MVP, V1, future modules, launch dependencies, testing plan, and store readiness.", "Rocket"),
        card("Growth plan", "Push strategy, onboarding, engagement loops, analytics events, and user feedback channels.", "Bell"),
      ],
      process: [
        card("Business objective mapping", "Clarify what the app must improve: bookings, orders, retention, support, field work, or revenue.", "SearchCheck"),
        card("Architecture planning", "Define backend services, admin tools, APIs, data ownership, and security requirements.", "Network"),
        card("Launch and growth plan", "Prepare store steps, analytics, feedback loops, notification strategy, and update rhythm.", "Store"),
      ],
      useCases: [
        card("Investor-ready app plan", "Turn a product idea into a scoped roadmap with business logic and launch milestones.", "FileText"),
        card("Legacy app rebuild", "Audit an old mobile experience and plan a cleaner architecture, UX, and release path.", "Activity"),
      ],
      preview: {
        metrics: [stat("API Needs", "14", "Mapped before build")],
        rows: ["Notification strategy linked to retention goals", "Store release milestones assigned"],
      },
    },
    "flutter-app-development": {
      problems: [
        card("State logic is underplanned", "Carts, bookings, auth, offline states, and payment flows need predictable app behavior.", "Code2"),
        card("Device testing is too narrow", "Critical screens can fail across screen sizes, OS versions, permissions, or network conditions.", "Smartphone"),
      ],
      flow: [
        card("Launch", "Prepare store builds, test tracks, monitoring, release notes, and post-launch update routines.", "Store"),
      ],
      modules: [
        card("State management setup", "Predictable handling for auth, carts, forms, bookings, payments, loading states, and errors.", "Code2"),
        card("Offline and retry states", "Graceful behavior for poor networks, failed requests, saved drafts, and user feedback.", "Activity"),
        card("Release automation", "Build variants, environment config, versioning, release notes, and internal testing support.", "GitBranch"),
        card("App health tracking", "Crash signals, performance events, funnel analytics, and critical flow monitoring.", "BarChart3"),
      ],
      process: [
        card("Architecture setup", "Define folders, state approach, API patterns, environments, and reusable UI components.", "ServerCog"),
        card("Device QA", "Test common devices, permissions, network changes, deep links, payments, and notification behavior.", "CheckCircle2"),
        card("Release preparation", "Package builds, version releases, prepare store metadata, and confirm production configuration.", "Store"),
      ],
      useCases: [
        card("SaaS companion app", "Give SaaS customers mobile access to tasks, dashboards, notifications, and quick actions.", "LayoutDashboard"),
        card("Operations app", "Support field teams with checklists, uploads, assignments, and status updates.", "Workflow"),
      ],
      preview: {
        metrics: [stat("Critical Flows", "11", "Tested across devices")],
        rows: ["Offline retry state verified", "Production API environment locked"],
      },
    },
    "customer-mobile-app": {
      problems: [
        card("Loyalty data is unused", "Repeat customers, preferences, saved services, and past orders are not used to improve experience.", "Sparkles"),
        card("Support history is fragmented", "Customer questions, tickets, bookings, and payments are not visible in one mobile profile.", "Headphones"),
      ],
      flow: [
        card("Retain", "Use behavior, reminders, loyalty, offers, and self-service paths to bring customers back.", "Bell"),
      ],
      modules: [
        card("Customer profile and history", "Bookings, orders, payments, support tickets, saved preferences, and recent activity.", "Users"),
        card("Loyalty and rewards", "Points, offers, saved benefits, membership status, referrals, and repeat purchase prompts.", "Sparkles"),
        card("Self-service support", "Request creation, status tracking, attachments, FAQs, and escalation options inside the app.", "Headphones"),
        card("Personalized notifications", "Messages based on booking history, purchase behavior, location, lifecycle, or support status.", "Bell"),
      ],
      process: [
        card("Retention mapping", "Identify what makes customers return and where app reminders or loyalty can help.", "BarChart3"),
        card("Profile data design", "Define what customer history, preferences, documents, and transactions the app should show.", "Database"),
        card("Engagement testing", "Review notification timing, support flows, loyalty prompts, and repeat action paths.", "Bell"),
      ],
      useCases: [
        card("Membership businesses", "Let customers manage plans, rewards, bookings, events, and exclusive updates.", "Users"),
        card("After-sales support", "Give customers service history, request tracking, documents, and direct support paths.", "Headphones"),
      ],
      preview: {
        metrics: [stat("Loyalty Actions", "+21%", "Repeat customer activity")],
        rows: ["Customer reward unlocked", "Support ticket linked to purchase history"],
      },
    },
    "booking-order-app": {
      problems: [
        card("Status updates are inconsistent", "Customers do not know whether a request is received, confirmed, prepared, delivered, or completed.", "Activity"),
        card("Admin sync is weak", "Mobile requests need immediate visibility for staff, inventory, payment, and fulfillment teams.", "LayoutDashboard"),
      ],
      flow: [
        card("Notify", "Send confirmation, reminder, payment, status, delivery, and completion updates from the same flow.", "Bell"),
      ],
      modules: [
        card("Order status engine", "Received, confirmed, in progress, ready, dispatched, completed, cancelled, or refunded states.", "Activity"),
        card("Admin sync layer", "Mobile requests routed to staff queues, inventory checks, finance review, and service delivery.", "LayoutDashboard"),
        card("Customer update timeline", "In-app status, push alerts, payment receipts, cancellation notes, and support prompts.", "Bell"),
        card("Availability and inventory rules", "Slots, stock, service capacity, delivery limits, add-ons, and conflict prevention.", "Database"),
      ],
      process: [
        card("Status model design", "Define every customer-visible and admin-only status for bookings, orders, payments, and exceptions.", "Workflow"),
        card("Payment and refund testing", "Validate payment success, failure, partial payment, cancellation, refund, and invoice behavior.", "CreditCard"),
        card("Fulfillment rehearsal", "Test the complete journey with staff from new request to completion and customer update.", "Users"),
      ],
      useCases: [
        card("Healthcare appointment app", "Patients book slots, pay fees, receive reminders, and track visit status.", "CheckCircle2"),
        card("Repair and service orders", "Customers request service, attach details, approve estimates, and track job progress.", "Headphones"),
      ],
      preview: {
        metrics: [stat("Status Updates", "1.8k", "Sent automatically")],
        rows: ["Customer received order delay update", "Staff accepted assigned booking"],
      },
    },
    "admin-connected-app": {
      problems: [
        card("Approvals need mobile access", "Managers cannot approve orders, refunds, content, or exceptions when away from the desk.", "CheckCircle2"),
        card("Staff updates arrive late", "Field teams and store teams need a fast way to update status without opening a full dashboard.", "Smartphone"),
      ],
      flow: [
        card("Act", "Let admins and staff approve, update, assign, notify, and report from mobile or web.", "CheckCircle2"),
      ],
      modules: [
        card("Mobile admin actions", "Approve, assign, update, refund, message, and resolve operational items from the app.", "Smartphone"),
        card("Staff activity feed", "Live updates from field teams, support teams, stores, or managers with owner and timestamp.", "Activity"),
        card("Exception alerts", "High-priority orders, failed payments, delayed jobs, refund requests, and SLA risks.", "Bell"),
        card("Role-safe mobile controls", "Limit actions by owner, manager, support, finance, and admin permissions.", "LockKeyhole"),
      ],
      process: [
        card("Mobile admin role mapping", "Define what each role can view, approve, edit, and escalate from mobile.", "Users"),
        card("Exception workflow testing", "Simulate refunds, urgent orders, delayed jobs, failed payments, and priority support cases.", "ShieldCheck"),
        card("Reporting alignment", "Connect mobile admin activity to dashboard KPIs and manager reports.", "BarChart3"),
      ],
      useCases: [
        card("Store manager app", "Managers approve exceptions, view daily performance, and update order status from mobile.", "Store"),
        card("Field operations app", "Staff update jobs, upload proof, request approvals, and sync status to the dashboard.", "Activity"),
      ],
      preview: {
        metrics: [stat("Mobile Actions", "312", "Admin actions this week")],
        rows: ["Refund exception approved from mobile", "Field staff uploaded job completion proof"],
      },
    },
    "push-notifications": {
      problems: [
        card("Segments are too broad", "New users, loyal customers, inactive users, and payment-risk users receive the same message.", "Users"),
        card("Delivery is not audited", "Teams cannot see failed sends, opt-outs, message timing, or action after notification.", "Activity"),
      ],
      flow: [
        card("Refine", "Use open rates, conversions, opt-outs, timing, and segment behavior to improve notification rules.", "Sparkles"),
      ],
      modules: [
        card("Campaign scheduler", "Plan one-time messages, lifecycle journeys, reminders, and recurring campaigns with frequency controls.", "Bell"),
        card("Delivery and opt-out tracking", "Monitor sent, delivered, opened, failed, muted, and opt-out states by segment.", "Activity"),
        card("Event trigger map", "Notification rules tied to bookings, orders, payments, inactivity, support, loyalty, and milestones.", "Workflow"),
        card("Engagement reporting", "Measure opens, action completion, revenue influence, no-show reduction, and churn signals.", "BarChart3"),
      ],
      process: [
        card("Segment strategy", "Define behavior groups, lifecycle stages, preferences, and message frequency limits.", "Users"),
        card("Template and trigger QA", "Test dynamic fields, timing, fallback messages, opt-out handling, and deep links.", "CheckCircle2"),
        card("Engagement review", "Track opens, actions, opt-outs, and conversion impact to refine notification journeys.", "BarChart3"),
      ],
      useCases: [
        card("Payment recovery", "Alert users about failed payments, pending balances, renewal windows, and receipt updates.", "CreditCard"),
        card("Lifecycle onboarding", "Guide new users through profile completion, first booking, saved preferences, and app value.", "Sparkles"),
      ],
      preview: {
        metrics: [stat("Segments", "12", "Active behavior groups")],
        rows: ["Inactive customer win-back scheduled", "Failed delivery reviewed for payment reminder"],
      },
    },
    "app-store-launch": {
      problems: [
        card("Privacy details are incomplete", "Data collection, permissions, deletion requests, and policy links must match store expectations.", "ShieldCheck"),
        card("Release tracks are unmanaged", "Internal, closed, staged, and public releases need version control and feedback handling.", "GitBranch"),
      ],
      flow: [
        card("Optimize", "Review listing conversion, crash signals, early feedback, and update needs after release.", "BarChart3"),
      ],
      modules: [
        card("Privacy and compliance pack", "Policy links, permissions explanation, data safety forms, support contact, and account deletion guidance.", "ShieldCheck"),
        card("Release track management", "Internal builds, TestFlight, closed testing, staged rollout, version codes, and release notes.", "GitBranch"),
        card("Listing conversion polish", "Screenshots, feature graphics, benefit-led copy, keywords, categories, and social proof.", "Palette"),
        card("Post-launch monitoring", "Crash checks, review response, early feedback, update plan, and support escalation.", "Activity"),
      ],
      process: [
        card("Privacy readiness", "Confirm permissions, data collection, policy pages, deletion flow, and store compliance details.", "ShieldCheck"),
        card("Store conversion review", "Improve screenshots, title, description, keywords, benefits, and release notes before launch.", "Palette"),
        card("Post-release monitoring", "Watch crash signals, reviews, installs, early user feedback, and urgent update needs.", "Activity"),
      ],
      useCases: [
        card("Beta to public release", "Move from internal testing to public launch with cleaner assets and staged rollout control.", "Rocket"),
        card("Enterprise app listing", "Prepare privacy details, screenshots, support links, and store copy for a serious business app.", "Store"),
      ],
      preview: {
        metrics: [stat("Store Assets", "100%", "Ready for submit")],
        rows: ["Data safety answers reviewed", "Staged rollout plan prepared"],
      },
    },
  },
  "ai-automation": {
    "automation-audit": {
      problems: [
        card("ROI is not quantified", "Manual task volume, error cost, delay cost, and automation complexity are not compared.", "BarChart3"),
        card("Workflow selection is emotional", "Teams choose automations based on frustration instead of measurable business impact.", "SearchCheck"),
      ],
      modules: [
        card("Process discovery map", "Tasks, owners, systems, frequency, error points, delay points, and customer impact in one view.", "Workflow"),
        card("ROI estimate", "Time saved, cost avoided, response speed, quality risk, and implementation effort scored clearly.", "CreditCard"),
        card("Automation readiness checklist", "Data quality, API access, tool fit, human approvals, and exception handling prepared upfront.", "CheckCircle2"),
        card("Roadmap board", "Quick wins, medium builds, high-value systems, owners, dependencies, and implementation sequence.", "LayoutDashboard"),
      ],
      process: [
        card("Repetitive task mapping", "List repeated actions across sales, support, admin, finance, documents, and reporting.", "FileText"),
        card("Automation scoring", "Score each workflow by volume, value, risk, complexity, and data readiness.", "BarChart3"),
        card("Roadmap review", "Turn findings into quick wins, larger builds, timeline, owners, and expected savings.", "Rocket"),
      ],
      useCases: [
        card("Automation budget planning", "Prioritize which workflows deserve immediate investment and which should wait.", "CreditCard"),
        card("Tool stack cleanup", "Decide where AI, APIs, n8n, CRM triggers, or custom dashboards should be used.", "Network"),
      ],
      preview: {
        metrics: [stat("ROI Score", "8.6", "Top workflow priority")],
        rows: ["Document intake scored high impact", "Low-value automation moved to later phase"],
      },
    },
    "ai-agents": {
      problems: [
        card("Knowledge sources are scattered", "Agents need approved FAQs, SOPs, CRM context, documents, and business rules to answer safely.", "FileText"),
        card("Human handoff is undefined", "There is no clear line for when the agent should stop, ask, escalate, or request approval.", "Users"),
      ],
      modules: [
        card("Agent objective setup", "Defined role, task boundaries, success criteria, prohibited actions, and escalation conditions.", "Bot"),
        card("Knowledge base layer", "Approved documents, FAQs, SOPs, product details, CRM fields, and retrieval rules.", "SearchCheck"),
        card("Action tools", "Create tickets, update records, draft replies, route leads, summarize documents, or trigger workflows.", "Workflow"),
        card("Safety controls", "Confidence thresholds, approval gates, sensitive-data rules, audit logs, and fallback responses.", "ShieldCheck"),
      ],
      process: [
        card("Prompt and policy design", "Write the agent role, tone, boundaries, allowed actions, fallback rules, and escalation language.", "FileText"),
        card("Tool connection", "Connect CRM, support, document, email, WhatsApp, or internal systems the agent can use.", "Network"),
        card("Human handoff testing", "Validate low-confidence answers, sensitive cases, approvals, and edge-case escalation.", "ShieldCheck"),
      ],
      useCases: [
        card("Sales intake agent", "Collect requirements, qualify intent, suggest next steps, and route leads with context.", "Users"),
        card("Internal SOP assistant", "Answer team questions from approved process documents without searching through files.", "SearchCheck"),
      ],
      preview: {
        metrics: [stat("Confidence", "91%", "Average approved answer score")],
        rows: ["Human handoff triggered for pricing exception", "Knowledge base source attached to AI answer"],
      },
    },
    "workflow-automation": {
      problems: [
        card("Approvals are invisible", "Requests wait in messages with no status, reminders, owner, or escalation path.", "CheckCircle2"),
        card("Exceptions stop the flow", "Failed triggers, missing data, and unusual cases are not routed for human review.", "ShieldCheck"),
      ],
      modules: [
        card("Trigger library", "Form events, CRM updates, payments, dates, documents, messages, support tickets, and status changes.", "Workflow"),
        card("Rules engine", "Conditions for priority, value, customer type, owner, SLA, stage, and exception routing.", "CheckCircle2"),
        card("Approval and reminder layer", "Manager approvals, due-date reminders, escalation alerts, and completion confirmations.", "Bell"),
        card("Workflow health dashboard", "Completed tasks, delayed steps, failed automations, exception queues, and time saved.", "Activity"),
      ],
      process: [
        card("Exception planning", "Define what happens when data is missing, systems fail, approvals are late, or rules conflict.", "ShieldCheck"),
        card("Integration setup", "Connect forms, CRM, email, WhatsApp, sheets, payment tools, and business databases.", "Network"),
        card("Workflow health review", "Monitor failures, delayed steps, saved time, owner load, and rule improvements.", "Activity"),
      ],
      useCases: [
        card("Approval operations", "Automate quote, refund, leave, purchase, document, or manager approval paths.", "CheckCircle2"),
        card("Status-based customer updates", "Send customer messages when work moves, pauses, completes, or needs action.", "MessageCircle"),
      ],
      preview: {
        metrics: [stat("Overdue Steps", "5", "Escalated automatically")],
        rows: ["Missing data exception routed to operations", "Refund approval reminder sent to manager"],
      },
    },
    "lead-scoring": {
      problems: [
        card("Source quality is unclear", "Campaigns generate leads, but the team cannot compare which sources turn into serious opportunities.", "SearchCheck"),
        card("Sales alerts lack reason", "Reps need to know why a lead is hot, not just see a score number.", "Bell"),
      ],
      modules: [
        card("Behavior signal capture", "Page visits, form answers, message intent, repeat engagement, downloads, and booking actions.", "Activity"),
        card("Priority routing rules", "High-score leads sent to owners with SLA, context, recommended action, and follow-up trigger.", "Workflow"),
        card("Score explanation panel", "Show the reasons behind a score: source, urgency, fit, budget, service interest, and behavior.", "FileText"),
        card("Conversion feedback loop", "Won, lost, ignored, delayed, and disqualified outcomes used to improve scoring rules.", "BarChart3"),
      ],
      process: [
        card("Ideal lead definition", "Define fit, urgency, budget, service need, geography, source, and buying signals.", "Users"),
        card("Routing and alert setup", "Create sales notifications, ownership rules, priority queues, and follow-up timing.", "Bell"),
        card("Model review", "Compare scores against real conversion data and update weights with sales feedback.", "Sparkles"),
      ],
      useCases: [
        card("Fast-response sales team", "Prioritize demo, pricing, and callback requests with immediate owner alerts.", "Bell"),
        card("Campaign quality review", "Compare lead score by campaign, keyword, landing page, and offer.", "BarChart3"),
      ],
      preview: {
        metrics: [stat("Score Accuracy", "82%", "Matched sales feedback")],
        rows: ["High-value lead routed with score reasons", "Low-intent campaign lead moved to nurture"],
      },
    },
    "whatsapp-email-automation": {
      problems: [
        card("Templates are not governed", "Teams send unapproved copy, inconsistent promises, and follow-ups that are hard to audit.", "Mail"),
        card("Campaign sequences stop early", "Leads and customers need reminders, next steps, and escalation when they do not respond.", "Workflow"),
      ],
      modules: [
        card("Trigger catalogue", "Lead, booking, payment, support, renewal, inactivity, document, and status-change message triggers.", "Workflow"),
        card("Template governance", "Approved WhatsApp and email copy with variables, owner review, and use-case boundaries.", "ShieldCheck"),
        card("Follow-up sequences", "Multi-step journeys for reminders, nurture, payment recovery, feedback, and reactivation.", "Send"),
        card("Reply and conversion reporting", "Replies, opens, clicks, delivery, failed sends, opt-outs, and conversion impact tracked.", "BarChart3"),
      ],
      process: [
        card("Communication audit", "Review repeated messages, delays, customer questions, reply quality, and missed follow-ups.", "MessageCircle"),
        card("Template approval", "Write and approve short, useful, brand-safe messages for each trigger and segment.", "CheckCircle2"),
        card("Reply routing QA", "Test replies, failed delivery, opt-outs, owner routing, and CRM activity logging.", "ShieldCheck"),
      ],
      useCases: [
        card("Quote follow-up system", "Remind prospects, answer common questions, and route replies to the sales owner.", "Users"),
        card("Lifecycle customer messages", "Send onboarding, renewal, feedback, win-back, and support follow-up messages automatically.", "Sparkles"),
      ],
      preview: {
        metrics: [stat("Sequences", "18", "Active communication flows")],
        rows: ["No-response follow-up scheduled", "Reply routed to CRM owner with message history"],
      },
    },
    "document-automation": {
      problems: [
        card("Classification is manual", "Teams spend time deciding what a document is before they can extract or route it.", "SearchCheck"),
        card("Storage lacks governance", "Documents need naming, access rules, retention, record links, and searchable metadata.", "Database"),
      ],
      modules: [
        card("Classification engine", "Identify invoices, applications, IDs, contracts, reports, receipts, and supporting documents.", "SearchCheck"),
        card("Human review queue", "Low-confidence fields, missing documents, mismatches, and high-risk records routed for approval.", "Users"),
        card("Structured storage", "File naming, folders, metadata, record links, retention rules, and access controls.", "Database"),
        card("Audit-ready reporting", "Document status, extraction accuracy, reviewer history, exceptions, and completion time.", "ShieldCheck"),
      ],
      process: [
        card("Sample set review", "Collect real documents, variants, edge cases, poor scans, and validation examples.", "FileText"),
        card("Routing design", "Define where each document type goes, who reviews it, and what system it updates.", "Workflow"),
        card("Audit and accuracy review", "Track extraction quality, missed fields, review reasons, and exception patterns.", "BarChart3"),
      ],
      useCases: [
        card("KYC document workflow", "Collect IDs, verify required fields, flag missing proof, and store audit evidence.", "ShieldCheck"),
        card("Operations paperwork", "Process receipts, forms, checklists, reports, and approvals with searchable records.", "FileText"),
      ],
      preview: {
        metrics: [stat("Confidence", "87%", "Average extraction confidence")],
        rows: ["Low-confidence PAN field sent to reviewer", "Document linked to client record"],
      },
    },
    "ai-reports-insights": {
      problems: [
        card("Decision dashboards lack explanation", "Leaders see charts but still need someone to explain movement, risk, and priority.", "Sparkles"),
        card("Recommendations are not assigned", "Insights do not become tasks, owners, experiments, or follow-up reviews.", "Workflow"),
      ],
      modules: [
        card("KPI explanation engine", "Plain-language movement summaries for sales, support, operations, finance, campaigns, or product metrics.", "Sparkles"),
        card("Anomaly detection rules", "Drops, spikes, SLA risks, lead-quality shifts, churn signals, and operational bottlenecks flagged.", "Activity"),
        card("Recommendation board", "Suggested next actions, owners, priorities, experiments, and follow-up review dates.", "CheckCircle2"),
        card("Scheduled briefings", "Daily, weekly, monthly, team, leadership, and client-ready summaries delivered automatically.", "Send"),
      ],
      process: [
        card("KPI and audience mapping", "Define which metrics matter for leadership, sales, support, operations, and growth teams.", "Users"),
        card("Insight rules setup", "Create summaries, comparisons, anomaly thresholds, recommendation logic, and confidence language.", "Sparkles"),
        card("Decision workflow", "Route important insights into tasks, alerts, review meetings, or team briefings.", "Workflow"),
      ],
      useCases: [
        card("Leadership weekly briefing", "Summarize what changed, why it matters, and what decisions need attention.", "FileText"),
        card("Revenue risk alerts", "Flag drops in lead quality, response time, pipeline movement, or collections.", "BarChart3"),
      ],
      preview: {
        metrics: [stat("Briefings", "9", "Scheduled stakeholder reports")],
        rows: ["Insight converted into owner task", "Lead quality anomaly flagged for review"],
      },
    },
  },
  "cloud-devops": {
    "cloud-architecture": {
      problems: [
        card("Cost control is missing", "Hosting, databases, storage, CDN, logs, and backups can grow without ownership or budget planning.", "CreditCard"),
        card("Security is bolted on later", "Access rules, secrets, environments, network exposure, and audit needs are not designed upfront.", "ShieldCheck"),
      ],
      modules: [
        card("Hosting strategy", "Choose hosting, serverless, managed services, regions, scaling rules, and runtime fit.", "Cloud"),
        card("Security baseline", "Secrets, roles, network exposure, SSL, headers, access policy, and environment separation.", "ShieldCheck"),
        card("Cost and capacity plan", "Traffic expectations, storage growth, database sizing, monitoring cost, and scaling triggers.", "BarChart3"),
        card("Backup and recovery design", "Database backup schedule, file storage backup, restore path, retention, and test cadence.", "Database"),
      ],
      process: [
        card("Workload review", "Assess traffic, user roles, data volume, API patterns, uptime needs, and integration dependencies.", "SearchCheck"),
        card("Architecture decision record", "Document hosting choices, tradeoffs, costs, risks, security assumptions, and future scaling paths.", "FileText"),
        card("Readiness validation", "Check monitoring, backups, access, environments, deployment path, and recovery procedure.", "CheckCircle2"),
      ],
      useCases: [
        card("SaaS infrastructure planning", "Prepare hosting, database, storage, monitoring, and backup decisions before product launch.", "ServerCog"),
        card("CRM and portal cloud setup", "Run business-critical dashboards and client portals on stable, monitored infrastructure.", "LayoutDashboard"),
      ],
      preview: {
        metrics: [stat("Cost Bands", "3", "Launch, growth, scale")],
        rows: ["Backup restore path documented", "Environment separation approved"],
      },
    },
    "server-setup": {
      problems: [
        card("Environment variables are messy", "Secrets, API keys, database URLs, and service settings are copied without structure or ownership.", "LockKeyhole"),
        card("Staging and production are confused", "Teams test on live systems because environments, domains, and deployment rules are not separated.", "GitBranch"),
      ],
      modules: [
        card("Domain and SSL setup", "DNS records, SSL certificates, redirects, subdomains, and secure public access.", "ShieldCheck"),
        card("Environment management", "Production, staging, development variables, secrets, runtime settings, and ownership.", "LockKeyhole"),
        card("Firewall and access rules", "Restricted ports, service users, SSH policy, admin access, and exposure checks.", "ServerCog"),
        card("Staging and production split", "Separate environments for QA, release review, production deploys, and emergency fixes.", "GitBranch"),
      ],
      process: [
        card("Server hardening", "Configure access, updates, firewall, SSL, service users, secrets, and basic security rules.", "ShieldCheck"),
        card("Deployment rehearsal", "Test application start, database connection, domain routing, logs, and restart behavior.", "Rocket"),
        card("Runbook handoff", "Document access, deploy steps, rollback basics, environment variables, and support contacts.", "FileText"),
      ],
      useCases: [
        card("Backend API server", "Set up secure runtime, domains, SSL, environment variables, and database connectivity.", "ServerCog"),
        card("Staging environment", "Give teams a safe place to test changes before production release.", "GitBranch"),
      ],
      preview: {
        metrics: [stat("SSL", "Active", "Domain and subdomains secured")],
        rows: ["Staging variables separated from production", "Firewall rules reviewed"],
      },
    },
    "database-storage": {
      problems: [
        card("Schema decisions slow growth", "Poorly planned records, relationships, indexes, and constraints make dashboards and reports harder later.", "Database"),
        card("File access is risky", "Uploads, documents, images, and exports need permission rules, retention, and backup strategy.", "FileText"),
      ],
      modules: [
        card("Schema planning", "Collections, tables, relationships, indexes, constraints, audit fields, and reporting-friendly structure.", "Database"),
        card("File storage layer", "Uploads, media, documents, buckets, folders, naming, metadata, and secure access rules.", "FileText"),
        card("Backup and retention policy", "Database dumps, point-in-time options, file backups, retention windows, and restore drills.", "ShieldCheck"),
        card("Performance planning", "Indexes, query patterns, pagination, caching points, slow query review, and growth limits.", "Activity"),
      ],
      process: [
        card("Data model workshop", "Map business entities, ownership, relationships, reporting needs, and permission boundaries.", "Database"),
        card("Access and backup setup", "Configure roles, connection rules, storage access, backups, retention, and restore checks.", "ShieldCheck"),
        card("Performance review", "Validate indexes, queries, storage usage, pagination, and dashboard load behavior.", "Activity"),
      ],
      useCases: [
        card("Document-heavy portals", "Store files, metadata, approvals, and access history safely for client or admin portals.", "FileText"),
        card("Analytics-ready database", "Structure records so dashboards, filters, reports, and exports stay reliable.", "BarChart3"),
      ],
      preview: {
        metrics: [stat("Indexes", "18", "Matched to key queries")],
        rows: ["File bucket permission reviewed", "Restore test scheduled for database backup"],
      },
    },
    "cicd-pipeline": {
      problems: [
        card("Tests are skipped before release", "Manual deploy pressure leads to untested changes entering production.", "CheckCircle2"),
        card("Rollback is uncertain", "Teams do not know which version is live, which deploy failed, or how to return safely.", "GitBranch"),
      ],
      modules: [
        card("Git workflow rules", "Branching, pull requests, review steps, protected environments, and release ownership.", "GitBranch"),
        card("Automated build and test", "Install, type check, lint, unit tests, build output, and failure visibility in the pipeline.", "CheckCircle2"),
        card("Environment deployment", "Preview, staging, and production deploys with environment variables and approval gates.", "Rocket"),
        card("Rollback plan", "Version history, deployment history, quick revert path, release notes, and incident response.", "ShieldCheck"),
      ],
      process: [
        card("Workflow design", "Define branches, checks, environments, secrets, approvals, and release responsibilities.", "GitBranch"),
        card("Pipeline implementation", "Set up automated build, validation, deployment, notifications, and environment targeting.", "Code2"),
        card("Release simulation", "Test success, failed build, failed deploy, rollback, and hotfix scenarios before relying on it.", "CheckCircle2"),
      ],
      useCases: [
        card("SaaS release process", "Ship product improvements with review, validation, preview, production deploy, and rollback path.", "Rocket"),
        card("Client portal updates", "Deploy portal changes safely without risking sensitive client workflows.", "ShieldCheck"),
      ],
      preview: {
        metrics: [stat("Deploy Time", "7m", "Automated release path")],
        rows: ["Staging deploy waiting for approval", "Rollback tag prepared for previous release"],
      },
    },
    "monitoring-logs": {
      problems: [
        card("Incidents are discovered by users", "Teams learn about outages, slow pages, or errors only after customers complain.", "Headphones"),
        card("Logs lack context", "Errors are hard to debug because logs do not show release, route, user action, or environment.", "FileText"),
      ],
      modules: [
        card("Uptime monitoring", "Endpoint checks, availability history, downtime alerts, and SLA visibility.", "Activity"),
        card("Error and log tracking", "Runtime errors, server logs, request details, deploy context, and searchable debugging trails.", "FileText"),
        card("Performance metrics", "Response time, CPU, memory, database latency, slow routes, and background job health.", "ServerCog"),
        card("Incident workflow", "Alerts, owner assignment, severity, status, resolution notes, and post-incident review.", "Workflow"),
      ],
      process: [
        card("Critical path mapping", "Define the pages, APIs, jobs, forms, payments, and dashboards that must be watched.", "SearchCheck"),
        card("Alert tuning", "Set thresholds, channels, owners, severity, escalation, and noise-control rules.", "Bell"),
        card("Incident review loop", "Track causes, fixes, prevention tasks, and deployment links after important incidents.", "FileText"),
      ],
      useCases: [
        card("Production SaaS monitoring", "Watch APIs, dashboard routes, auth flows, jobs, and customer-facing uptime.", "Activity"),
        card("Payment and booking visibility", "Alert teams when checkout, booking confirmation, or payment callback flows fail.", "CreditCard"),
      ],
      preview: {
        metrics: [stat("Uptime", "99.96%", "Tracked this month")],
        rows: ["CPU spike linked to report export", "Payment callback error assigned to owner"],
      },
    },
    "backup-recovery": {
      problems: [
        card("Restore path is untested", "Backups exist, but teams do not know how long recovery takes or whether files restore correctly.", "ShieldCheck"),
        card("Retention is undefined", "Database, files, logs, and exports need clear retention windows and storage ownership.", "Database"),
      ],
      modules: [
        card("Backup schedule", "Database, file storage, environment config, export routines, and backup frequency.", "Activity"),
        card("Restore procedure", "Step-by-step recovery plan for full restore, partial restore, accidental delete, and rollback scenarios.", "ShieldCheck"),
        card("Retention policy", "Daily, weekly, monthly, and long-term retention rules with ownership and storage location.", "Database"),
        card("Recovery testing", "Planned restore drills, evidence, timing, data checks, and improvement actions.", "CheckCircle2"),
      ],
      process: [
        card("Risk mapping", "Identify critical data, restore priorities, acceptable downtime, and recovery point targets.", "SearchCheck"),
        card("Backup automation setup", "Configure database dumps, file backups, retention, monitoring, and failure alerts.", "ServerCog"),
        card("Restore drill", "Test recovery steps, verify data, document timing, and improve weak points.", "CheckCircle2"),
      ],
      useCases: [
        card("Accidental delete recovery", "Restore records, files, or exports after human error without panic.", "Database"),
        card("Business continuity plan", "Prepare recovery steps for SaaS, CRM, portal, app, or admin systems.", "ShieldCheck"),
      ],
      preview: {
        metrics: [stat("Restore Test", "Passed", "Latest drill verified")],
        rows: ["Weekly database backup completed", "File storage retention policy updated"],
      },
    },
    "maintenance-support": {
      problems: [
        card("Security patches are delayed", "Dependencies, servers, frameworks, and packages age without regular review.", "ShieldCheck"),
        card("Minor improvements pile up", "Small UX fixes, report changes, content updates, and workflow tweaks wait too long.", "Activity"),
      ],
      modules: [
        card("Bug fix workflow", "Issue capture, priority, reproduction steps, fix tracking, testing, and release notes.", "CheckCircle2"),
        card("Security patch review", "Dependency updates, server updates, package risks, access review, and secure configuration checks.", "ShieldCheck"),
        card("Performance health checks", "Speed, database queries, logs, errors, uptime, and slow dashboard views reviewed regularly.", "Activity"),
        card("Monthly support report", "Completed work, open risks, uptime, incidents, recommendations, and next-month priorities.", "FileText"),
      ],
      process: [
        card("Support intake setup", "Define how issues, requests, priorities, screenshots, and acceptance checks are submitted.", "Headphones"),
        card("Maintenance cadence", "Schedule updates, patch checks, backups, monitoring review, and minor improvement cycles.", "Activity"),
        card("Monthly review", "Share work completed, incidents, risks, improvements, and recommended next steps.", "FileText"),
      ],
      useCases: [
        card("Post-launch product care", "Keep a website, CRM, SaaS, app, or portal stable while business needs evolve.", "Rocket"),
        card("Founder technical support", "Give non-technical teams a reliable partner for fixes, changes, and production questions.", "Users"),
      ],
      preview: {
        metrics: [stat("Tickets Closed", "38", "This support cycle")],
        rows: ["Security patch queued for staging", "Monthly performance report shared"],
      },
    },
  },
  "design-growth": {
    "brand-positioning": {
      problems: [
        card("Differentiation is unclear", "Prospects cannot quickly tell why this business is different from similar options.", "Sparkles"),
        card("Trust signals are scattered", "Proof, process, outcomes, guarantees, team credibility, and customer examples are not used strategically.", "ShieldCheck"),
      ],
      flow: [
        card("Optimize", "Use audience feedback, campaign data, and conversion signals to sharpen message and proof over time.", "Activity"),
      ],
      modules: [
        card("Audience and offer clarity", "Define customer segments, pains, outcomes, objections, buying triggers, and best-fit offer framing.", "Users"),
        card("Messaging framework", "Headline themes, value proposition, proof points, voice, objections, and CTA language.", "FileText"),
        card("Visual direction", "Mood, color, type direction, imagery style, trust cues, and brand personality for digital use.", "Palette"),
        card("Conversion positioning", "How the brand should guide visitors from first impression to inquiry, demo, or purchase.", "Workflow"),
      ],
      process: [
        card("Audience research", "Review customer types, decision criteria, competitor messages, and buying objections.", "SearchCheck"),
        card("Message testing", "Compare headline angles, proof points, offer clarity, and CTA language for strongest fit.", "Sparkles"),
        card("Brand handoff", "Document positioning, voice, page message hierarchy, trust signals, and visual direction.", "FileText"),
      ],
      useCases: [
        card("Service business repositioning", "Clarify a premium offer and make the website easier for buyers to understand.", "Store"),
        card("SaaS brand foundation", "Define product promise, audience, differentiation, and onboarding message before launch.", "Rocket"),
      ],
      preview: {
        metrics: [stat("Message Pillars", "5", "Mapped to buyer needs")],
        rows: ["Trust signals assigned to buyer objections", "Offer hierarchy simplified for homepage"],
      },
    },
    "ui-ux-design": {
      problems: [
        card("Flows are not validated", "Teams design screens before confirming user actions, edge cases, empty states, and decision points.", "Workflow"),
        card("Accessibility is ignored", "Contrast, tap targets, labels, focus states, and mobile readability are handled too late.", "CheckCircle2"),
      ],
      flow: [
        card("Optimize", "Use usability feedback, analytics, and support signals to improve screens after release.", "Activity"),
      ],
      modules: [
        card("User flow maps", "Step-by-step journeys for onboarding, search, booking, checkout, dashboards, forms, and support.", "Workflow"),
        card("Wireframes and prototypes", "Low and high fidelity flows that clarify structure before development.", "Layers3"),
        card("Responsive interface design", "Desktop, tablet, and mobile screens with states, spacing, hierarchy, and interaction rules.", "Smartphone"),
        card("Usability and accessibility review", "Readable layouts, contrast, focus, forms, tap targets, feedback states, and friction checks.", "CheckCircle2"),
      ],
      process: [
        card("Flow workshop", "Define users, jobs, screens, states, bottlenecks, and conversion goals before visual design.", "Users"),
        card("Prototype review", "Test important flows with stakeholders and adjust structure before development handoff.", "Layers3"),
        card("Developer handoff", "Prepare components, states, spacing, behavior notes, and responsive specifications.", "Code2"),
      ],
      useCases: [
        card("Dashboard UX", "Make admin, analytics, CRM, or SaaS dashboards easier to scan and act on.", "LayoutDashboard"),
        card("Conversion flow redesign", "Improve enquiry, booking, checkout, signup, or onboarding completion.", "Send"),
      ],
      preview: {
        metrics: [stat("Flow Screens", "32", "Mapped with states")],
        rows: ["Empty state added to dashboard table", "Mobile form friction reduced"],
      },
    },
    "design-system": {
      problems: [
        card("Components drift over time", "Buttons, forms, cards, tables, modals, and navigation become inconsistent across teams.", "Layers3"),
        card("Development slows down", "Teams rebuild common UI patterns because tokens, variants, and rules are not documented.", "Code2"),
      ],
      flow: [
        card("Optimize", "Expand patterns, document exceptions, and improve components as product needs grow.", "Activity"),
      ],
      modules: [
        card("Design tokens", "Color, typography, spacing, radius, shadows, motion, and responsive scale rules.", "Palette"),
        card("Component library", "Buttons, inputs, cards, tables, tabs, modals, badges, alerts, navigation, and dashboard patterns.", "Layers3"),
        card("Usage guidelines", "When to use each pattern, content rules, accessibility notes, and do/don't examples.", "FileText"),
        card("Developer-ready specs", "Variants, states, measurements, interaction notes, and reusable implementation guidance.", "Code2"),
      ],
      process: [
        card("UI inventory", "Audit existing screens, repeated patterns, inconsistencies, and priority components.", "SearchCheck"),
        card("Token and component design", "Create core foundations, variants, states, and responsive behavior rules.", "Palette"),
        card("Adoption handoff", "Document usage, prepare examples, and align design and development workflows.", "FileText"),
      ],
      useCases: [
        card("SaaS product scaling", "Keep new modules consistent as dashboards, roles, and workflows expand.", "LayoutDashboard"),
        card("Agency delivery system", "Speed up landing pages, portals, and client projects with reusable UI patterns.", "Rocket"),
      ],
      preview: {
        metrics: [stat("Components", "42", "Reusable UI patterns")],
        rows: ["Table pattern documented with empty state", "Form validation style standardized"],
      },
    },
    "landing-pages": {
      problems: [
        card("Offer sections are weak", "Campaign pages do not explain outcome, proof, urgency, objections, and next action clearly.", "Sparkles"),
        card("Tracking is incomplete", "Clicks, forms, scroll depth, source, campaign, and lead quality are not measured together.", "BarChart3"),
      ],
      flow: [
        card("Optimize", "Improve copy, proof, forms, traffic sources, and follow-up from conversion data.", "Activity"),
      ],
      modules: [
        card("Offer architecture", "Hero, problem, outcome, proof, process, FAQs, guarantee, urgency, and CTA structure.", "FileText"),
        card("Lead capture system", "Forms, hidden fields, thank-you states, notifications, CRM routing, and qualification questions.", "Send"),
        card("Trust proof blocks", "Testimonials, examples, logos, case snippets, metrics, objection handling, and risk reducers.", "ShieldCheck"),
        card("Optimization tracker", "Conversion rate, form quality, source performance, CTA clicks, and experiment backlog.", "BarChart3"),
      ],
      process: [
        card("Offer and traffic review", "Align page story with ad promise, keyword intent, audience maturity, and follow-up plan.", "SearchCheck"),
        card("Page and tracking build", "Design sections, connect forms, configure source capture, and verify conversion events.", "Code2"),
        card("Iteration review", "Review lead quality, drop-offs, CTA behavior, and experiment priorities after launch.", "Activity"),
      ],
      useCases: [
        card("Paid ad campaign page", "Create focused pages for Google, Meta, LinkedIn, or retargeting campaigns.", "BarChart3"),
        card("SEO offer page", "Build conversion-focused pages around high-intent service or industry search demand.", "SearchCheck"),
      ],
      preview: {
        metrics: [stat("Experiment Backlog", "11", "Copy and section tests")],
        rows: ["Offer section updated for ad relevance", "Lead form source captured in CRM"],
      },
    },
    "seo-growth": {
      problems: [
        card("Indexing is unmanaged", "Important pages, sitemaps, robots rules, canonical paths, and Search Console signals are not reviewed.", "SearchCheck"),
        card("Content lacks structure", "Keywords, service pages, internal links, schema, and topic clusters are not planned as a system.", "FileText"),
      ],
      flow: [
        card("Optimize", "Use Search Console, rankings, technical audits, and conversion data to improve organic performance.", "Activity"),
      ],
      modules: [
        card("Keyword and content map", "Service keywords, industry pages, topic clusters, landing pages, and search intent groups.", "SearchCheck"),
        card("Technical SEO foundation", "Metadata, canonical URLs, sitemap, robots, schema, headings, speed basics, and index checks.", "Code2"),
        card("Internal linking system", "Navigation, contextual links, related pages, anchor strategy, and crawl path improvement.", "Workflow"),
        card("Search Console dashboard", "Clicks, impressions, ranking movement, indexed pages, coverage issues, and query opportunities.", "BarChart3"),
      ],
      process: [
        card("SEO baseline audit", "Review current rankings, pages, metadata, index status, speed, schema, and content gaps.", "SearchCheck"),
        card("Content architecture", "Plan service, industry, comparison, landing, and support pages around buyer intent.", "FileText"),
        card("Monthly growth review", "Review queries, ranking changes, indexed pages, conversion quality, and content priorities.", "BarChart3"),
      ],
      useCases: [
        card("Local service SEO", "Build pages that support city, service, industry, and lead-generation search demand.", "Store"),
        card("SaaS organic growth", "Create feature, use case, comparison, and education pages that support product discovery.", "Rocket"),
      ],
      preview: {
        metrics: [stat("Indexed Pages", "128", "Tracked in Search Console")],
        rows: ["Schema issue fixed for service page", "Internal link added to high-intent page"],
      },
    },
    "analytics-setup": {
      problems: [
        card("Events are too shallow", "Only page views are tracked, while form starts, CTA clicks, calls, scrolls, and funnel steps are missed.", "Activity"),
        card("Source quality is invisible", "Teams see traffic volume but cannot connect sources to leads, revenue, or business outcomes.", "BarChart3"),
      ],
      flow: [
        card("Optimize", "Use event and source data to improve pages, campaigns, forms, funnels, and follow-up.", "Sparkles"),
      ],
      modules: [
        card("Event tracking plan", "CTA clicks, form starts, form submits, calls, WhatsApp clicks, downloads, bookings, and checkout steps.", "Activity"),
        card("Funnel and goal setup", "Visitor path, enquiry funnel, booking funnel, checkout funnel, and drop-off tracking.", "Workflow"),
        card("Source and campaign capture", "UTM rules, channel grouping, source fields, campaign reports, and lead attribution.", "SearchCheck"),
        card("Decision dashboard", "Conversions, source quality, landing page performance, funnel drop-off, and monthly reporting views.", "LayoutDashboard"),
      ],
      process: [
        card("Measurement workshop", "Define business questions, conversion goals, source fields, funnels, and reporting cadence.", "Users"),
        card("Tracking implementation", "Configure events, tags, pixels, goals, dashboards, and verification checks.", "Code2"),
        card("Data quality review", "Confirm events fire correctly, sources are captured, and reports answer real decisions.", "CheckCircle2"),
      ],
      useCases: [
        card("Lead source reporting", "Know which pages and campaigns generate quality enquiries, not just traffic.", "BarChart3"),
        card("Funnel drop-off diagnosis", "See where users abandon signup, booking, checkout, forms, or onboarding.", "Workflow"),
      ],
      preview: {
        metrics: [stat("Events", "36", "Verified conversion signals")],
        rows: ["WhatsApp CTA click tracked by source", "Booking funnel drop-off identified"],
      },
    },
    "campaign-optimization": {
      problems: [
        card("Campaign data is disconnected", "Ads, pages, forms, CRM, WhatsApp, and sales outcomes are reviewed separately.", "Network"),
        card("Audience refinement is weak", "Budgets keep going to broad audiences without learning which segments convert better.", "Users"),
      ],
      flow: [
        card("Optimize", "Refine audience, offer, landing page, tracking, follow-up, and budget based on conversion evidence.", "Activity"),
      ],
      modules: [
        card("Campaign performance board", "Spend, clicks, leads, cost per lead, lead quality, conversion rate, and follow-up outcomes.", "BarChart3"),
        card("Landing page experiment system", "Headlines, sections, CTAs, forms, proof, offers, and page speed improvements.", "LayoutDashboard"),
        card("Audience refinement loop", "Segment performance, exclusions, retargeting pools, geography, interest, and behavior adjustments.", "Users"),
        card("Lead follow-up alignment", "CRM routing, WhatsApp or email follow-up, sales owner visibility, and lost-reason tracking.", "Workflow"),
      ],
      process: [
        card("Performance audit", "Review ads, landing pages, tracking, source quality, CRM outcomes, and follow-up speed.", "SearchCheck"),
        card("Experiment planning", "Prioritize tests for audience, offer, creative, page sections, form fields, and follow-up.", "Activity"),
        card("Optimization review", "Compare experiment results, lead quality, cost, conversion rate, and next budget decisions.", "BarChart3"),
      ],
      useCases: [
        card("Lead generation optimization", "Improve paid campaigns by connecting ad intent, page quality, and sales follow-up.", "Send"),
        card("Retargeting improvement", "Create better follow-up journeys for visitors, abandoned forms, and warm leads.", "Workflow"),
      ],
      preview: {
        metrics: [stat("CPA Change", "-18%", "After page and audience fixes")],
        rows: ["Low-quality audience paused", "New landing page variant prepared"],
      },
    },
  },
};

const cardKey = (item: SolutionCard) => `${item.title}:${item.text}`;
const statKey = (item: SolutionStat) => `${item.label}:${item.value}:${item.note}`;

function mergeCards(base: readonly SolutionCard[], extra: readonly SolutionCard[] | undefined, limit: number) {
  const seen = new Set<string>();
  return [...base, ...(extra ?? [])].filter((item) => {
    const key = cardKey(item);
    if (seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  }).slice(0, limit);
}

function mergeStats(base: readonly SolutionStat[], extra: readonly SolutionStat[] | undefined, limit: number) {
  const seen = new Set<string>();
  return [...base, ...(extra ?? [])].filter((item) => {
    const key = statKey(item);
    if (seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  }).slice(0, limit);
}

function mergeRows(base: readonly string[], extra: readonly string[] | undefined, limit: number) {
  return Array.from(new Set([...base, ...(extra ?? [])])).slice(0, limit);
}

export function enhanceSolutions(
  category: SolutionCategoryId,
  solutions: readonly SolutionPageData[],
): SolutionPageData[] {
  return solutions.map((solution) => {
    const enhancement = enhancements[category][solution.slug];

    if (!enhancement) {
      return solution;
    }

    return {
      ...solution,
      description: enhancement.description ?? solution.description,
      problem: enhancement.problem ?? solution.problem,
      solution: enhancement.solution ?? solution.solution,
      impact: enhancement.impact ?? solution.impact,
      problems: mergeCards(solution.problems, enhancement.problems, 6),
      flow: mergeCards(solution.flow, enhancement.flow, flowTargets[category]),
      modules: mergeCards(solution.modules, enhancement.modules, 8),
      process: mergeCards(solution.process, enhancement.process, 7),
      useCases: mergeCards(solution.useCases, enhancement.useCases, 6),
      preview: {
        title: enhancement.preview?.title ?? solution.preview.title,
        subtitle: enhancement.preview?.subtitle ?? solution.preview.subtitle,
        metrics: mergeStats(solution.preview.metrics, enhancement.preview?.metrics, 4),
        rows: mergeRows(solution.preview.rows, enhancement.preview?.rows, 6),
      },
      ctaTitle: enhancement.ctaTitle ?? solution.ctaTitle,
      ctaText: enhancement.ctaText ?? solution.ctaText,
    };
  });
}
