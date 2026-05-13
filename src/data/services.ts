export type ServiceVisualType =
  | "website"
  | "saas"
  | "mobile"
  | "crm"
  | "ai"
  | "workflow"
  | "api"
  | "integration"
  | "devops"
  | "cloud"
  | "support"
  | "security"
  | "design"
  | "landing"
  | "seo"
  | "brand";

export type ServicePackage = {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
};

export type ServiceItem = {
  id: string;
  title: string;
  badge: string;
  shortDescription: string;
  fullDescription: string;
  heroTitle: string;
  heroDescription: string;
  startingPrice: string;
  timeline: string;
  bestFor: string;
  tags: string[];
  features: string[];
  problems: string[];
  whatWeBuild: string[];
  process: string[];
  useCases: string[];
  packages: ServicePackage[];
  ctaTitle: string;
  ctaDescription: string;
  visualType: ServiceVisualType;
  accent: string;
  secondaryCta: string;
  details: string[];
};

const defaultProcess = [
  "Discovery",
  "Strategy",
  "Design / Architecture",
  "Build",
  "Testing",
  "Launch",
  "Support",
];

export const services: ServiceItem[] = [
  {
    id: "web-development",
    title: "Web Development",
    badge: "Web Development",
    shortDescription:
      "High-performance websites and web applications built for speed, trust, SEO, and conversions.",
    fullDescription:
      "We design and develop modern business websites and web applications that load fast, look premium, rank better on Google, and convert visitors into qualified leads.",
    heroTitle: "High-performance websites built for trust, speed, and conversion.",
    heroDescription:
      "Launch a polished website that feels premium on every screen, communicates your offer clearly, and gives your team a reliable lead-generation foundation.",
    startingPrice: "Starting from ₹25,000",
    timeline: "1 to 4 weeks",
    bestFor:
      "Business websites, service companies, portfolios, landing pages, and lead generation websites.",
    tags: ["SEO Ready", "Fast Performance", "Responsive UI", "Lead Focused"],
    features: ["Responsive Design", "SEO Structure", "Fast Loading", "Lead Forms", "Analytics", "CMS / Blog"],
    problems: ["Outdated website design", "Slow loading pages", "Poor mobile experience", "Low enquiry conversion"],
    whatWeBuild: ["Business Websites", "Landing Pages", "Portfolio Websites", "Blog Systems", "Lead Forms", "Admin Editable Pages"],
    process: defaultProcess,
    useCases: ["IT company website", "Healthcare website", "Real estate landing page", "Education website"],
    packages: [
      { name: "Starter", price: "₹25,000+", description: "A focused launch-ready website for a clear service offer.", features: ["Landing page", "Responsive UI", "Contact form"] },
      { name: "Growth", price: "₹55,000+", description: "A multi-page business website with stronger SEO and analytics.", features: ["Multi-page website", "SEO setup", "Analytics"], popular: true },
      { name: "Premium", price: "Custom Quote", description: "A custom web app or content platform with admin controls.", features: ["Custom web app", "Admin panel", "Integrations"] },
    ],
    ctaTitle: "Need a website that actually brings leads?",
    ctaDescription: "Let’s build a fast, premium, conversion-focused website for your business.",
    visualType: "website",
    accent: "from-cyan-400 to-blue-500",
    secondaryCta: "View Features",
    details: ["Conversion-focused page structure", "SEO-ready metadata and content hierarchy", "Responsive UI across devices", "Fast hosting and launch support"],
  },
  {
    id: "saas-development",
    title: "SaaS Development",
    badge: "SaaS Development",
    shortDescription:
      "Scalable SaaS platforms with dashboards, subscriptions, billing, users, roles, and cloud deployment.",
    fullDescription:
      "We build secure SaaS products from MVP to production, including authentication, subscriptions, dashboards, admin panels, billing, analytics, and scalable cloud deployment.",
    heroTitle: "Build scalable SaaS platforms with dashboards, subscriptions, and automation.",
    heroDescription:
      "Turn a product idea into a working SaaS platform with clean architecture, user roles, revenue flows, product analytics, and a practical launch path.",
    startingPrice: "Starting from ₹75,000",
    timeline: "4 to 10 weeks",
    bestFor: "Startup MVPs, B2B SaaS tools, subscription platforms, portals, and admin products.",
    tags: ["MVP Build", "Subscriptions", "Admin Panel", "Cloud Ready"],
    features: ["Authentication", "User Roles", "Billing", "Dashboard", "Analytics", "Cloud Deploy"],
    problems: ["Unclear MVP scope", "Manual billing workflows", "Weak admin controls", "No scalable product architecture"],
    whatWeBuild: ["SaaS MVPs", "Billing Systems", "Admin Dashboards", "Tenant Workspaces", "Usage Analytics", "Customer Portals"],
    process: defaultProcess,
    useCases: ["Subscription CRM", "B2B dashboard SaaS", "Booking platform", "Internal product portal"],
    packages: [
      { name: "MVP", price: "₹75,000+", description: "Core SaaS flow to validate your idea quickly.", features: ["Auth", "Dashboard", "Basic billing"] },
      { name: "Growth", price: "₹1,50,000+", description: "A stronger SaaS foundation with roles and analytics.", features: ["Roles", "Subscription billing", "Admin controls"], popular: true },
      { name: "Scale", price: "Custom Quote", description: "Advanced SaaS architecture for complex workflows.", features: ["Multi-tenant design", "Advanced reporting", "Automation"] },
    ],
    ctaTitle: "Ready to turn your SaaS idea into a real platform?",
    ctaDescription: "We’ll help you define the MVP, build the product, and launch with confidence.",
    visualType: "saas",
    accent: "from-violet-500 to-blue-500",
    secondaryCta: "Explore Modules",
    details: ["Product architecture planning", "Subscription and payment integration", "Admin workflows and user roles", "Launch-ready cloud deployment"],
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    badge: "Mobile App Development",
    shortDescription:
      "Cross-platform mobile apps for iOS and Android with smooth UX, secure backend, and launch support.",
    fullDescription:
      "We create mobile apps that feel fast, clean, and business-ready, with polished onboarding, dashboards, booking, payments, notifications, and backend integrations.",
    heroTitle: "Mobile apps that feel fast, clean, and business-ready.",
    heroDescription:
      "Build Android and iOS apps with user-friendly screens, secure data flows, and the backend foundation needed for real customer usage.",
    startingPrice: "Starting from ₹90,000",
    timeline: "5 to 12 weeks",
    bestFor: "Startup apps, booking apps, business apps, service platforms, and customer-facing products.",
    tags: ["Android & iOS", "Smooth UX", "Secure Backend", "Push Notifications"],
    features: ["Onboarding", "Auth", "Dashboard", "Payments", "Notifications", "Admin Link"],
    problems: ["Fragmented app experience", "No mobile-first workflow", "Weak backend connection", "Poor launch readiness"],
    whatWeBuild: ["Customer Apps", "Booking Apps", "Payment Flows", "Admin-Connected Apps", "Notification Systems", "App Store Builds"],
    process: defaultProcess,
    useCases: ["Healthcare booking app", "Education app", "Service marketplace", "Customer loyalty app"],
    packages: [
      { name: "Starter App", price: "₹90,000+", description: "A focused MVP app with the essential user journey.", features: ["8 screens", "Auth", "Backend integration"] },
      { name: "Business App", price: "₹1,60,000+", description: "A production-ready app with stronger flows and analytics.", features: ["15 screens", "Payments", "Notifications"], popular: true },
      { name: "Advanced App", price: "Custom Quote", description: "A complex app with realtime features and custom backend logic.", features: ["Realtime data", "Role access", "Advanced backend"] },
    ],
    ctaTitle: "Need a mobile app your customers will actually use?",
    ctaDescription: "Let’s design and build a clean, reliable app for your business workflow.",
    visualType: "mobile",
    accent: "from-blue-500 to-violet-500",
    secondaryCta: "See App Features",
    details: ["Cross-platform app development", "Backend and API integration", "Push notifications and analytics", "Store-ready launch support"],
  },
  {
    id: "custom-crm-systems",
    title: "Custom CRM Systems",
    badge: "Custom CRM Systems",
    shortDescription:
      "Owned CRM systems with lead pipelines, workflows, dashboards, reports, AI insights, and role permissions.",
    fullDescription:
      "HNX builds custom CRM systems around your business process so your team can manage leads, customers, tasks, reports, approvals, workflows, and AI insights from one owned platform.",
    heroTitle: "Own your CRM instead of adjusting your business to rented software.",
    heroDescription:
      "Replace spreadsheets and generic CRM limitations with a custom system built around your pipeline, roles, dashboards, follow-ups, reports, and automation rules.",
    startingPrice: "Starting from ₹1,20,000",
    timeline: "5 to 12 weeks",
    bestFor: "Sales teams, service teams, lead tracking, operations, customer management, and owned workflow systems.",
    tags: ["Lead Pipeline", "Role Access", "Automation", "Reports"],
    features: ["Lead Management", "Tasks", "Pipeline", "Reports", "AI Insights", "Permissions"],
    problems: ["Leads lost in spreadsheets", "No ownership of workflow", "Manual follow-ups", "Generic CRM limitations"],
    whatWeBuild: ["Lead Modules", "Customer Profiles", "Pipeline Boards", "Task Systems", "Role Permissions", "Reporting Dashboards", "Workflow Engine", "AI Insight Layer"],
    process: defaultProcess,
    useCases: ["Real estate CRM", "Education admissions CRM", "Healthcare CRM", "Sales team CRM"],
    packages: [
      { name: "CRM Starter", price: "₹1,20,000+", description: "A clean owned CRM foundation for leads and customers.", features: ["Lead module", "Pipeline", "Basic reports"] },
      { name: "CRM Growth", price: "₹2,25,000+", description: "A stronger CRM with automation, roles, and dashboards.", features: ["Workflows", "Roles", "Realtime dashboards"], popular: true },
      { name: "CRM Enterprise", price: "Custom Quote", description: "A full custom operating system with AI and integrations.", features: ["AI insights", "Advanced automation", "Integrations"] },
    ],
    ctaTitle: "Want a CRM your business actually owns?",
    ctaDescription: "Let’s map your process and build a custom CRM around how your team works.",
    visualType: "crm",
    accent: "from-sky-500 to-cyan-400",
    secondaryCta: "Explore CRM Modules",
    details: ["Custom CRM data model", "Workflow automation rules", "Role-based access and approvals", "Reporting and AI insight layer"],
  },
  {
    id: "ai-automation",
    title: "AI Automation",
    badge: "AI Automation",
    shortDescription:
      "AI agents, chatbots, document automation, lead scoring, smart replies, and workflow intelligence.",
    fullDescription:
      "We build practical AI automation systems that reduce repetitive work, speed up responses, summarize data, score leads, draft messages, and connect intelligence to your business workflows.",
    heroTitle: "Automate repetitive work with AI agents and smart business workflows.",
    heroDescription:
      "Use AI to handle lead qualification, support replies, document summaries, CRM insights, internal assistants, and repeatable decisions without losing business control.",
    startingPrice: "Starting from ₹60,000",
    timeline: "2 to 6 weeks",
    bestFor: "Lead handling, support automation, document workflows, internal assistants, and CRM intelligence.",
    tags: ["AI Assistant", "Lead Scoring", "Smart Replies", "Workflow Triggers"],
    features: ["Chatbot", "Lead Score", "AI Replies", "Summaries", "Triggers", "Dashboards"],
    problems: ["Slow response times", "Manual document review", "Missed lead priority", "Repetitive support questions"],
    whatWeBuild: ["AI Chatbots", "Lead Scoring Engines", "Document Summary Tools", "Reply Drafting Systems", "Internal AI Assistants", "Automation Triggers"],
    process: defaultProcess,
    useCases: ["AI lead assistant", "Support response bot", "Document summary workflow", "CRM next-action assistant"],
    packages: [
      { name: "AI Starter", price: "₹60,000+", description: "A focused AI assistant or automation for one workflow.", features: ["Prompt setup", "Basic assistant", "Lead capture"] },
      { name: "AI Workflow", price: "₹1,20,000+", description: "AI connected to real business systems and dashboards.", features: ["Workflow logic", "Data integration", "Reports"], popular: true },
      { name: "AI System", price: "Custom Quote", description: "Advanced AI workflows with roles, actions, and integrations.", features: ["Multi-step agents", "Custom data", "Automation engine"] },
    ],
    ctaTitle: "Want AI to remove repetitive work from your team?",
    ctaDescription: "Let’s identify your best automation opportunities and build practical AI workflows.",
    visualType: "ai",
    accent: "from-violet-500 to-fuchsia-500",
    secondaryCta: "Explore Use Cases",
    details: ["AI workflow mapping", "LLM integration and prompts", "Business data connection", "Guardrails and human review points"],
  },
  {
    id: "workflow-automation",
    title: "Workflow Automation",
    badge: "Workflow Automation",
    shortDescription:
      "Trigger-condition-action workflows for assignments, reminders, approvals, escalations, and task automation.",
    fullDescription:
      "We automate repetitive business processes by connecting triggers, conditions, and actions across your CRM, website, forms, communication tools, and internal operations.",
    heroTitle: "Turn manual processes into automated workflows.",
    heroDescription:
      "Automate assignments, reminders, approvals, follow-ups, emails, WhatsApp messages, status changes, and manager alerts with workflows built around your real process.",
    startingPrice: "Starting from ₹45,000",
    timeline: "2 to 5 weeks",
    bestFor: "Lead routing, task assignment, reminders, approvals, alerts, and operations automation.",
    tags: ["Trigger Logic", "Approvals", "Follow-ups", "Task Automation"],
    features: ["Assignment", "Approvals", "Reminders", "Emails", "WhatsApp", "Escalations"],
    problems: ["Manual task assignment", "Follow-ups forgotten", "Delayed approvals", "No escalation tracking"],
    whatWeBuild: ["Workflow Builders", "Reminder Systems", "Approval Flows", "Lead Assignment Rules", "Status Automation", "Notification Triggers"],
    process: defaultProcess,
    useCases: ["Sales follow-up workflow", "Approval workflow", "Support escalation", "Onboarding task automation"],
    packages: [
      { name: "Starter Flow", price: "₹45,000+", description: "A small workflow set for one business process.", features: ["3 workflows", "Basic triggers", "Notifications"] },
      { name: "Automation Suite", price: "₹95,000+", description: "Multiple connected workflows for daily operations.", features: ["10 workflows", "Conditions", "Manager alerts"], popular: true },
      { name: "Workflow Engine", price: "Custom Quote", description: "A configurable automation engine inside your system.", features: ["Rule builder", "Role logic", "Audit trail"] },
    ],
    ctaTitle: "Ready to stop doing repeat work manually?",
    ctaDescription: "Let’s convert your daily process into clean automated workflows.",
    visualType: "workflow",
    accent: "from-emerald-500 to-teal-500",
    secondaryCta: "View Workflow Lab",
    details: ["Trigger-condition-action mapping", "Automation rule configuration", "Notifications and escalations", "Workflow testing and rollout"],
  },
  {
    id: "api-development",
    title: "API Development",
    badge: "API Development",
    shortDescription:
      "Secure APIs that connect apps, dashboards, databases, auth, payments, webhooks, and third-party platforms.",
    fullDescription:
      "We design and build robust APIs that power web apps, mobile apps, SaaS systems, integrations, automation workflows, and secure business data exchange.",
    heroTitle: "Secure APIs that connect your apps, dashboards, and platforms.",
    heroDescription:
      "Build reliable backend APIs with authentication, database design, webhook handling, documentation, third-party integrations, and clean architecture.",
    startingPrice: "Starting from ₹50,000",
    timeline: "2 to 6 weeks",
    bestFor: "Backend APIs, mobile backends, SaaS APIs, payment flows, dashboards, and platform integrations.",
    tags: ["REST API", "Auth", "Webhooks", "Documentation"],
    features: ["REST APIs", "Auth", "Database", "Webhooks", "Payments", "Docs"],
    problems: ["Disconnected systems", "Unstable backend logic", "No API documentation", "Weak authentication flow"],
    whatWeBuild: ["REST APIs", "Auth Services", "Database APIs", "Webhook Handlers", "Payment APIs", "API Documentation"],
    process: defaultProcess,
    useCases: ["Mobile app backend", "CRM API layer", "Payment gateway API", "Third-party integration API"],
    packages: [
      { name: "API Starter", price: "₹50,000+", description: "A focused API layer for one product or workflow.", features: ["REST endpoints", "Auth", "Docs"] },
      { name: "API Platform", price: "₹1,10,000+", description: "A secure API backend with database and integrations.", features: ["Database design", "Webhooks", "Testing"], popular: true },
      { name: "Advanced API", price: "Custom Quote", description: "A scalable API architecture for complex products.", features: ["Versioning", "Rate limits", "Monitoring"] },
    ],
    ctaTitle: "Need a backend your product can depend on?",
    ctaDescription: "Let’s design secure APIs that connect every important part of your system.",
    visualType: "api",
    accent: "from-blue-500 to-cyan-500",
    secondaryCta: "Discuss Integration",
    details: ["API architecture and endpoint planning", "Authentication and permissions", "Webhook and payment integration", "Testing and documentation"],
  },
  {
    id: "integration-services",
    title: "Integration Services",
    badge: "Integration Services",
    shortDescription:
      "Connect CRMs, WhatsApp, payments, email, analytics, sheets, APIs, and business tools into one workflow.",
    fullDescription:
      "We integrate your business tools so data moves automatically between CRM, websites, payments, messaging, analytics, spreadsheets, email platforms, and third-party APIs.",
    heroTitle: "Connect your tools, platforms, and data into one unified business workflow.",
    heroDescription:
      "Stop copying data between systems manually. We connect the tools your team already uses so leads, payments, messages, reports, and records stay synced.",
    startingPrice: "Starting from ₹40,000",
    timeline: "1 to 5 weeks",
    bestFor: "CRM integrations, payment gateways, WhatsApp, email, analytics, Google Sheets, and third-party APIs.",
    tags: ["CRM Sync", "Payments", "WhatsApp", "Analytics"],
    features: ["Payment Gateways", "WhatsApp API", "Email Systems", "CRM Sync", "Analytics", "Sheets"],
    problems: ["Manual data entry", "Disconnected tools", "Missed notifications", "Reports not syncing"],
    whatWeBuild: ["Payment Integrations", "WhatsApp Workflows", "Email Integrations", "Analytics Tracking", "Google Sheets Sync", "Third-party API Bridges"],
    process: defaultProcess,
    useCases: ["Website to CRM lead sync", "Payment status automation", "WhatsApp follow-up flow", "Analytics event tracking"],
    packages: [
      { name: "Single Integration", price: "₹40,000+", description: "Connect one important tool or workflow.", features: ["One integration", "Testing", "Documentation"] },
      { name: "Business Hub", price: "₹90,000+", description: "Connect multiple tools around CRM or operations.", features: ["3-5 integrations", "Workflow sync", "Alerts"], popular: true },
      { name: "Integration Platform", price: "Custom Quote", description: "A deeper connected system across many services.", features: ["API bridge", "Monitoring", "Data mapping"] },
    ],
    ctaTitle: "Want your tools to finally work together?",
    ctaDescription: "Let’s connect your systems and remove manual data movement.",
    visualType: "integration",
    accent: "from-teal-500 to-cyan-500",
    secondaryCta: "Plan Integration",
    details: ["Tool and API audit", "Data mapping and sync rules", "Webhook and automation setup", "Integration testing and monitoring"],
  },
  {
    id: "devops-deployment",
    title: "DevOps & Deployment",
    badge: "DevOps & Deployment",
    shortDescription:
      "CI/CD pipelines, hosting, domains, SSL, monitoring, deployments, and release automation for websites and SaaS.",
    fullDescription:
      "We set up reliable deployment systems so your website, app, or SaaS product can ship safely, recover faster, and stay observable after launch.",
    heroTitle: "Reliable deployment systems for websites, apps, and SaaS.",
    heroDescription:
      "Build a clean delivery pipeline from GitHub to build, test, deploy, monitor, and rollback so releases become predictable instead of stressful.",
    startingPrice: "Starting from ₹35,000",
    timeline: "1 to 4 weeks",
    bestFor: "CI/CD setup, Vercel deployment, server deployment, domains, SSL, logs, and monitoring.",
    tags: ["CI/CD", "Deployment", "Monitoring", "SSL"],
    features: ["CI/CD", "Vercel", "Domains", "Environments", "Logs", "Monitoring"],
    problems: ["Manual deployments", "No rollback plan", "Production errors unseen", "Environment mismatch"],
    whatWeBuild: ["CI/CD Pipelines", "Deployment Setup", "Environment Management", "SSL & Domain Setup", "Monitoring Dashboards", "Release Documentation"],
    process: defaultProcess,
    useCases: ["Next.js deployment", "SaaS release pipeline", "Backend deployment", "Monitoring setup"],
    packages: [
      { name: "Deploy Starter", price: "₹35,000+", description: "Stable deployment setup for one project.", features: ["Hosting", "Domain + SSL", "Basic CI"] },
      { name: "Release System", price: "₹80,000+", description: "CI/CD, environments, logging, and monitoring.", features: ["Build pipeline", "Staging", "Monitoring"], popular: true },
      { name: "Advanced DevOps", price: "Custom Quote", description: "Complex deployment and reliability workflows.", features: ["Rollback", "Infra automation", "Alerts"] },
    ],
    ctaTitle: "Want deployments that feel boring in the best way?",
    ctaDescription: "Let’s set up a reliable release pipeline for your product.",
    visualType: "devops",
    accent: "from-blue-500 to-sky-500",
    secondaryCta: "Fix My Deployment",
    details: ["CI/CD pipeline setup", "Environment and secret management", "Monitoring and alerting", "Deployment documentation"],
  },
  {
    id: "cloud-infrastructure",
    title: "Cloud Infrastructure",
    badge: "Cloud Infrastructure",
    shortDescription:
      "Cloud architecture, app servers, databases, storage, CDN, backups, monitoring, and scaling setup.",
    fullDescription:
      "We design practical cloud infrastructure for growing products, including hosting, databases, storage, CDN, backups, monitoring, security foundations, and cost-aware scaling.",
    heroTitle: "Scalable cloud infrastructure for growing digital products.",
    heroDescription:
      "Plan and deploy cloud architecture that keeps your product fast, secure, observable, backed up, and ready for future scale.",
    startingPrice: "Starting from ₹50,000",
    timeline: "2 to 6 weeks",
    bestFor: "Cloud hosting, migration, databases, storage, backups, CDN, and production architecture.",
    tags: ["Cloud Hosting", "Database", "Storage", "Monitoring"],
    features: ["App Server", "Database", "Storage", "CDN", "Backup", "Scaling"],
    problems: ["Unclear cloud setup", "High hosting cost", "No backup plan", "Weak monitoring"],
    whatWeBuild: ["Cloud Architecture", "Database Setup", "Storage Buckets", "CDN Setup", "Backup Strategy", "Monitoring Systems"],
    process: defaultProcess,
    useCases: ["SaaS cloud setup", "App migration", "Database modernization", "Production hosting"],
    packages: [
      { name: "Cloud Starter", price: "₹50,000+", description: "A stable cloud setup for one app or website.", features: ["App hosting", "Database", "SSL"] },
      { name: "Cloud Growth", price: "₹1,10,000+", description: "A stronger cloud foundation with monitoring and backups.", features: ["CDN", "Backups", "Monitoring"], popular: true },
      { name: "Cloud Scale", price: "Custom Quote", description: "Advanced architecture for scale and reliability.", features: ["Load balancing", "Disaster recovery", "Cost optimization"] },
    ],
    ctaTitle: "Need cloud infrastructure that can grow with you?",
    ctaDescription: "Let’s design a practical cloud foundation for your product.",
    visualType: "cloud",
    accent: "from-sky-500 to-blue-500",
    secondaryCta: "Discuss Architecture",
    details: ["Cloud architecture planning", "Database and storage setup", "Backup and recovery strategy", "Monitoring and cost optimization"],
  },
  {
    id: "maintenance-support",
    title: "Maintenance & Support",
    badge: "Maintenance & Support",
    shortDescription:
      "Ongoing support for websites, apps, CRM, SaaS, bug fixes, updates, monitoring, and performance improvements.",
    fullDescription:
      "We keep your digital products healthy after launch with bug fixes, uptime checks, updates, performance improvements, content support, and priority technical help.",
    heroTitle: "Keep your website, app, CRM or SaaS running smoothly after launch.",
    heroDescription:
      "Protect your investment with ongoing technical care, update logs, bug fixes, uptime monitoring, performance improvements, and priority support.",
    startingPrice: "Starting from ₹15,000/month",
    timeline: "Monthly support",
    bestFor: "Businesses with live websites, SaaS platforms, apps, CRM systems, and production dashboards.",
    tags: ["Bug Fixes", "Updates", "Uptime", "Priority Support"],
    features: ["Tickets", "Uptime", "Bug Fixes", "Updates", "Performance", "Security"],
    problems: ["No post-launch support", "Bugs remain unresolved", "Site performance drops", "Updates are risky"],
    whatWeBuild: ["Support Desk", "Update Logs", "Bug Fix System", "Uptime Monitoring", "Performance Reviews", "Priority Support Flow"],
    process: ["Audit", "Support Plan", "Monitoring", "Fixes", "Updates", "Reports", "Ongoing Support"],
    useCases: ["Website maintenance", "CRM support", "SaaS bug fixing", "App update support"],
    packages: [
      { name: "Care", price: "₹15,000/month", description: "Basic support for small websites or apps.", features: ["Bug fixes", "Small updates", "Monthly report"] },
      { name: "Growth Support", price: "₹35,000/month", description: "Priority support and performance care.", features: ["Priority fixes", "Uptime checks", "Performance review"], popular: true },
      { name: "Dedicated Support", price: "Custom Quote", description: "Extended technical support for active products.", features: ["SLA", "Feature updates", "Monitoring"] },
    ],
    ctaTitle: "Need reliable technical support after launch?",
    ctaDescription: "Let’s keep your product stable, updated, and improving.",
    visualType: "support",
    accent: "from-orange-400 to-amber-500",
    secondaryCta: "Request Maintenance",
    details: ["Monthly support planning", "Bug tracking and fixes", "Uptime and performance checks", "Update and improvement logs"],
  },
  {
    id: "security-compliance",
    title: "Security & Compliance",
    badge: "Security & Compliance",
    shortDescription:
      "Authentication, permissions, access logs, audit trails, API protection, deployment security, and data controls.",
    fullDescription:
      "We strengthen your digital products with practical security controls, role-based access, audit logs, secure APIs, protected deployments, data handling rules, and compliance-ready foundations.",
    heroTitle: "Secure your digital products with strong protection and control.",
    heroDescription:
      "Add the security basics that growing products need: authentication, permissions, audit logs, API protection, access rules, and deployment hardening.",
    startingPrice: "Starting from ₹45,000",
    timeline: "2 to 5 weeks",
    bestFor: "CRM systems, SaaS products, admin dashboards, APIs, internal tools, and customer platforms.",
    tags: ["Role Access", "Audit Logs", "API Protection", "Data Security"],
    features: ["Roles", "Access Logs", "Blocked Attempts", "Audit Trail", "API Security", "Data Controls"],
    problems: ["Weak admin access", "No audit trail", "Unprotected APIs", "Risky deployment settings"],
    whatWeBuild: ["Role-Based Access", "Audit Logging", "API Protection", "Secure Auth", "Permission Rules", "Security Review"],
    process: ["Security Audit", "Risk Mapping", "Control Design", "Implementation", "Testing", "Review", "Support"],
    useCases: ["CRM permission system", "SaaS security review", "API hardening", "Admin audit logs"],
    packages: [
      { name: "Security Audit", price: "₹45,000+", description: "Review and prioritize the biggest security gaps.", features: ["Audit", "Risk report", "Fix roadmap"] },
      { name: "Security Build", price: "₹95,000+", description: "Implement key security controls in your product.", features: ["Roles", "Logs", "API protection"], popular: true },
      { name: "Compliance Ready", price: "Custom Quote", description: "Advanced controls and audit-ready architecture.", features: ["Policies", "Data controls", "Monitoring"] },
    ],
    ctaTitle: "Want stronger control over your product security?",
    ctaDescription: "Let’s review your risks and build the right protection layer.",
    visualType: "security",
    accent: "from-rose-500 to-red-500",
    secondaryCta: "Request Audit",
    details: ["Security and access review", "Role and permission implementation", "Audit log and API protection", "Deployment hardening guidance"],
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    badge: "UI/UX Design",
    shortDescription:
      "Premium interfaces, wireframes, product flows, dashboards, mobile screens, design systems, and prototypes.",
    fullDescription:
      "We design clean, modern, user-friendly interfaces for websites, apps, SaaS dashboards, CRM systems, and landing pages with a strong focus on clarity and conversion.",
    heroTitle: "Premium interfaces designed for clarity, trust, and conversion.",
    heroDescription:
      "Create a beautiful and practical UI system with wireframes, polished screens, responsive layouts, color palettes, typography, and developer-ready components.",
    startingPrice: "Starting from ₹25,000",
    timeline: "1 to 4 weeks",
    bestFor: "Product UI, dashboards, mobile app screens, SaaS design, landing pages, and redesigns.",
    tags: ["Wireframes", "Prototypes", "Design System", "Responsive UI"],
    features: ["Wireframes", "Mobile Screens", "Dashboard Design", "Palette", "Typography", "Prototype"],
    problems: ["Confusing user flows", "Outdated visual design", "Inconsistent UI", "Low product trust"],
    whatWeBuild: ["Wireframes", "Landing Page UI", "Dashboard UI", "Mobile App Screens", "Design Systems", "Interactive Prototypes"],
    process: ["Discovery", "UX Direction", "Wireframes", "UI Design", "Prototype", "Handoff", "Support"],
    useCases: ["SaaS dashboard design", "Mobile app UI", "CRM interface", "Landing page redesign"],
    packages: [
      { name: "UI Starter", price: "₹25,000+", description: "A focused design set for a landing page or key screens.", features: ["Wireframe", "UI design", "Responsive layout"] },
      { name: "Product Design", price: "₹65,000+", description: "A fuller design system for apps and dashboards.", features: ["User flows", "Screens", "Prototype"], popular: true },
      { name: "Design System", price: "Custom Quote", description: "A complete UI library for larger products.", features: ["Components", "Guidelines", "Handoff"] },
    ],
    ctaTitle: "Need a product interface that feels premium?",
    ctaDescription: "Let’s design a polished UI your users can understand quickly.",
    visualType: "design",
    accent: "from-violet-500 to-pink-500",
    secondaryCta: "View UX Process",
    details: ["UX flow planning", "High-fidelity UI screens", "Responsive design system", "Developer handoff support"],
  },
  {
    id: "landing-pages-campaigns",
    title: "Landing Pages & Campaigns",
    badge: "Landing Pages & Campaigns",
    shortDescription:
      "Conversion-focused landing pages for ads, campaigns, launches, lead capture, and product funnels.",
    fullDescription:
      "We build landing pages designed to capture attention, explain offers quickly, collect qualified leads, track conversions, and support paid campaigns or launches.",
    heroTitle: "Conversion-focused landing pages for ads, campaigns, and product launches.",
    heroDescription:
      "Turn campaign traffic into enquiries with a clear hero, strong CTA, lead forms, trust badges, offer sections, analytics, and fast-loading responsive design.",
    startingPrice: "Starting from ₹20,000",
    timeline: "4 days to 2 weeks",
    bestFor: "Ad campaigns, product launches, lead magnets, service offers, events, and high-conversion funnels.",
    tags: ["Lead Forms", "Campaign Ready", "Fast Launch", "Analytics"],
    features: ["Hero CTA", "Lead Form", "Trust Badges", "Analytics", "A/B Ready", "Fast Load"],
    problems: ["Ad traffic not converting", "No campaign tracking", "Weak offer page", "Slow launch cycles"],
    whatWeBuild: ["Campaign Pages", "Lead Capture Forms", "Thank-you Pages", "Analytics Events", "Trust Sections", "Offer Pages"],
    process: ["Offer Discovery", "Funnel Strategy", "Page Design", "Development", "Tracking", "Launch", "Optimization"],
    useCases: ["Google Ads landing page", "Webinar registration", "Real estate campaign", "Product launch page"],
    packages: [
      { name: "Campaign Page", price: "₹20,000+", description: "A fast landing page for one focused offer.", features: ["Hero section", "Lead form", "Mobile ready"] },
      { name: "Growth Funnel", price: "₹45,000+", description: "A fuller campaign flow with analytics and trust sections.", features: ["Landing page", "Tracking", "Thank-you page"], popular: true },
      { name: "Campaign System", price: "Custom Quote", description: "Multiple campaign pages with reusable sections.", features: ["A/B variants", "CRM sync", "Reports"] },
    ],
    ctaTitle: "Need a landing page that converts campaign traffic?",
    ctaDescription: "Let’s build a focused funnel for your offer.",
    visualType: "landing",
    accent: "from-rose-500 to-pink-500",
    secondaryCta: "Plan My Funnel",
    details: ["Campaign offer structure", "Conversion-focused page design", "Tracking and analytics setup", "Lead capture and CRM handoff"],
  },
  {
    id: "seo-analytics",
    title: "SEO & Analytics",
    badge: "SEO & Analytics",
    shortDescription:
      "Technical SEO, indexing, schema, ranking tracking, traffic dashboards, analytics events, and conversion measurement.",
    fullDescription:
      "We help your website become easier to find, track, and improve through SEO structure, technical fixes, schema, indexing checks, analytics setup, and conversion tracking.",
    heroTitle: "Make your website easier to find, track, and improve.",
    heroDescription:
      "Improve search visibility and measurement with technical SEO, schema, metadata, indexing checks, analytics events, traffic dashboards, and conversion tracking.",
    startingPrice: "Starting from ₹18,000/month",
    timeline: "Monthly growth",
    bestFor: "Business websites, blogs, service pages, local SEO, lead generation, and analytics setup.",
    tags: ["Technical SEO", "Schema", "Analytics", "Tracking"],
    features: ["SEO Audit", "Schema", "Indexing", "Rank Graph", "Traffic Chart", "Conversions"],
    problems: ["Poor Google visibility", "No conversion tracking", "Indexing issues", "No SEO reporting"],
    whatWeBuild: ["Technical SEO Setup", "Schema Markup", "Analytics Events", "Search Console Setup", "Conversion Tracking", "SEO Reports"],
    process: ["Audit", "Keyword Strategy", "Technical Fixes", "Schema", "Tracking", "Reports", "Optimization"],
    useCases: ["Service SEO", "Local business SEO", "Landing page analytics", "Blog performance tracking"],
    packages: [
      { name: "SEO Setup", price: "₹18,000+", description: "Foundational SEO and analytics setup.", features: ["Audit", "Meta setup", "Search Console"] },
      { name: "Growth SEO", price: "₹35,000/month", description: "Monthly SEO improvements and reporting.", features: ["Technical fixes", "Reports", "Tracking"], popular: true },
      { name: "SEO System", price: "Custom Quote", description: "Full SEO and conversion measurement roadmap.", features: ["Schema", "Content plan", "Dashboards"] },
    ],
    ctaTitle: "Want clearer traffic, rankings, and conversion data?",
    ctaDescription: "Let’s set up SEO and analytics that actually guide decisions.",
    visualType: "seo",
    accent: "from-emerald-500 to-green-500",
    secondaryCta: "Improve SEO",
    details: ["Technical SEO audit", "Schema and indexing setup", "Analytics and conversion tracking", "Monthly reporting and recommendations"],
  },
  {
    id: "brand-identity",
    title: "Brand Identity",
    badge: "Brand Identity",
    shortDescription:
      "Logo direction, color palettes, typography, visual systems, brand guidelines, icons, and social media previews.",
    fullDescription:
      "We create digital brand identity systems that make your business look credible and consistent across websites, apps, social media, presentations, and campaigns.",
    heroTitle: "Build a clear digital identity that makes your business look credible.",
    heroDescription:
      "Create a practical brand kit with logo direction, colors, typography, icons, social previews, reusable styles, and guidelines your team can actually use.",
    startingPrice: "Starting from ₹30,000",
    timeline: "1 to 4 weeks",
    bestFor: "New businesses, rebrands, SaaS products, service brands, campaign systems, and digital-first companies.",
    tags: ["Logo Direction", "Color Palette", "Typography", "Guidelines"],
    features: ["Logo Direction", "Palette", "Typography", "Icons", "Social Preview", "Guidelines"],
    problems: ["Inconsistent brand visuals", "Low trust online", "No design direction", "Scattered social assets"],
    whatWeBuild: ["Logo Direction", "Brand Color System", "Typography System", "Icon Style", "Social Templates", "Brand Guidelines"],
    process: ["Discovery", "Moodboard", "Identity Direction", "Design System", "Templates", "Guidelines", "Handoff"],
    useCases: ["Startup identity", "SaaS brand kit", "Agency rebrand", "Campaign visual system"],
    packages: [
      { name: "Brand Starter", price: "₹30,000+", description: "A clear starter identity for digital launch.", features: ["Logo direction", "Colors", "Typography"] },
      { name: "Brand Kit", price: "₹65,000+", description: "A complete practical brand kit for online use.", features: ["Guidelines", "Icons", "Social templates"], popular: true },
      { name: "Brand System", price: "Custom Quote", description: "A deeper visual identity system for larger teams.", features: ["Design language", "Templates", "Campaign assets"] },
    ],
    ctaTitle: "Need a brand identity that looks professional everywhere?",
    ctaDescription: "Let’s create a clean digital brand kit for your business.",
    visualType: "brand",
    accent: "from-amber-500 to-orange-500",
    secondaryCta: "Discuss Visual Direction",
    details: ["Brand discovery and moodboard", "Logo direction and visual system", "Color and typography guidelines", "Reusable digital assets"],
  },
];

const serviceAliases: Record<string, string> = {
  "web-solutions": "web-development",
  "mobile-apps": "mobile-app-development",
  "crm-salesforce": "custom-crm-systems",
  devops: "devops-deployment",
  "devops-cloud": "devops-deployment",
  "cloud-systems": "cloud-infrastructure",
  "cloud-solutions": "cloud-infrastructure",
  "security-solutions": "security-compliance",
  "digital-growth": "landing-pages-campaigns",
  "design-growth": "ui-ux-design",
};

export function getServiceById(id: string) {
  const serviceId = serviceAliases[id] ?? id;
  return services.find((service) => service.id === serviceId);
}
