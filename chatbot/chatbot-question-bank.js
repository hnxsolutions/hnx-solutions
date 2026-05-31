const CHATBOT_QUESTION_BANK= [
  {
    category: "Greeting & Discovery",
    description: "Start the conversation, understand whether the visitor needs a website, app, CRM, SaaS, AI automation, cloud, design, or growth support.",
    defaultQuickReplies: ["Web Development", "Mobile App", "Custom CRM", "SaaS", "AI Automation", "Need suggestion"],
    intents: [
      {
        category: "Greeting & Discovery",
        intent: "start_chat",
        priority: "high",
        keywords: ["hi", "hello", "hey", "need help", "i have a project", "i need a website", "i want to build", "help me", "start", "namaste", "hii", "can you help"],
        exampleQuestions: [
          "Hi, I need help with a project.",
          "Can you help me build something for my business?",
          "Hello, what services do you provide?",
          "I want to discuss a website or app."
        ],
        responseGoal: "Welcome the visitor and ask what they want to build, improve, or automate.",
        collect: ["projectType"],
        quickReplies: ["Website", "Mobile App", "CRM", "SaaS", "AI Automation", "Design", "SEO/Growth", "Cloud/DevOps"]
      },
      {
        category: "Greeting & Discovery",
        intent: "service_recommendation",
        priority: "high",
        keywords: ["suggest", "recommend", "which service", "confused", "not sure", "guide me", "what should i choose", "need suggestion", "best option", "mujhe kya chahiye"],
        exampleQuestions: [
          "I am not sure whether I need a website or CRM.",
          "Suggest the best solution for my business.",
          "Which service should I choose if I want more leads?",
          "I have a business process problem but don't know the exact solution."
        ],
        responseGoal: "Explain the service decision tree: website for online presence/leads, mobile app for customer phone experience, CRM for pipeline/operations, SaaS for product/platform, AI automation for repetitive work, cloud/DevOps for deployment/reliability, UI/UX for design, SEO/growth for traffic and conversion.",
        collect: ["businessType", "problem", "goal", "budget"],
        quickReplies: ["Need leads", "Need app", "Need CRM", "Need automation", "Need product", "Need SEO"],
        followUpQuestions: [
          "What is your main goal right now: more leads, smoother operations, customer app, or automation?",
          "Do you already have a website, CRM, app, or software system?",
          "Is this for a new business, existing business, or startup product?"
        ]
      }
    ]
  },
  {
    category: "Web Development",
    description: "Business websites, landing pages, ecommerce, portals, dashboards, SEO-ready websites, and redesigns.",
    defaultQuickReplies: ["Business website", "Ecommerce website", "Landing page", "Custom web platform", "Website redesign"],
    intents: [
      {
        category: "Web Development",
        intent: "business_website",
        priority: "high",
        route: "/services/web-development",
        keywords: ["website", "business website", "company website", "service website", "professional website", "corporate website", "portfolio website", "new website", "build website", "make website", "website development", "web development", "responsive website", "seo website", "fast website"],
        exampleQuestions: [
          "I need a professional website for my company.",
          "Can you build a business website with contact forms?",
          "I want a fast SEO-friendly website.",
          "How much does a company website cost?"
        ],
        responseGoal: "Position HNX as a provider of premium, responsive, SEO-ready, conversion-focused websites with forms, analytics, hosting, and launch support.",
        collect: ["businessType", "numberOfPages", "requiredFeatures", "timeline", "budget", "name", "email"],
        quickReplies: ["5-page website", "Landing page", "Website redesign", "SEO setup", "Contact form"],
        followUpQuestions: [
          "Is this a new website or redesign of an existing website?",
          "How many pages do you need roughly?",
          "Do you need blog/CMS, contact forms, WhatsApp CTA, payments, or admin editable content?"
        ]
      },
      {
        category: "Web Development",
        intent: "ecommerce_website",
        priority: "high",
        route: "/services/web-development",
        keywords: ["ecommerce", "e-commerce", "online store", "shop website", "shopping website", "product catalog", "cart", "checkout", "payment gateway", "woocommerce", "shopify", "sell products online", "storefront"],
        exampleQuestions: [
          "I want to sell products online.",
          "Can you build an ecommerce website with payments?",
          "I need catalog, cart and checkout for my store.",
          "Can you create a Shopify or custom ecommerce website?"
        ],
        responseGoal: "Explain ecommerce scope: product catalog, cart, checkout, payment gateway, order management, admin panel, analytics, and SEO structure.",
        collect: ["productCount", "paymentGateway", "deliveryFlow", "adminNeeds", "budget"],
        quickReplies: ["Product catalog", "Cart/checkout", "Payment gateway", "Admin panel", "Order tracking"]
      },
      {
        category: "Web Development",
        intent: "landing_page_campaign",
        priority: "high",
        route: "/services/landing-pages-campaigns",
        keywords: ["landing page", "sales page", "lead generation page", "campaign page", "ad landing page", "conversion page", "funnel page", "one page website", "cta page"],
        exampleQuestions: [
          "I need a landing page for ads.",
          "Can you make a lead generation page?",
          "I want a campaign page with high conversion.",
          "Can you build a one-page website quickly?"
        ],
        responseGoal: "Focus on clear offer, CTA structure, trust elements, lead form, analytics tracking, and conversion optimization.",
        collect: ["campaignGoal", "offer", "targetAudience", "formFields", "adPlatform", "budget"],
        quickReplies: ["Ads landing page", "Lead form", "WhatsApp CTA", "Analytics", "A/B testing"]
      },
      {
        category: "Web Development",
        intent: "web_portal_dashboard",
        priority: "medium",
        route: "/solutions/web-saas/client-portal",
        keywords: ["client portal", "user portal", "admin dashboard", "web dashboard", "web app", "custom portal", "login website", "dashboard website", "vendor portal", "booking portal", "member portal"],
        exampleQuestions: [
          "I need a client portal with login.",
          "Can you build a dashboard for my users?",
          "I need an admin panel for my website.",
          "Can we create a booking portal?"
        ],
        responseGoal: "Explain that portals include authentication, roles, dashboard views, data workflows, notifications, reporting, and admin controls.",
        collect: ["userRoles", "dashboardModules", "dataSource", "integrations", "budget"],
        quickReplies: ["Client portal", "Admin dashboard", "Booking portal", "Vendor portal", "Reports"]
      }
    ]
  },
  {
    category: "Mobile App Development",
    description: "Android/iOS apps, customer apps, booking apps, ecommerce apps, internal apps, Flutter apps, notifications, payments, and app launch.",
    defaultQuickReplies: ["Customer app", "Booking app", "Ecommerce app", "Internal team app", "App redesign"],
    intents: [
      {
        category: "Mobile App Development",
        intent: "mobile_app_mvp",
        priority: "high",
        route: "/services/mobile-app-development",
        keywords: ["mobile app", "app", "android app", "ios app", "flutter app", "react native app", "cross platform app", "app development", "build an app", "create app", "app idea", "mvp app", "startup app"],
        exampleQuestions: [
          "I want to build a mobile app for my startup.",
          "Can you make Android and iOS apps?",
          "I have an app idea, can you help with MVP?",
          "How much does a mobile app cost?"
        ],
        responseGoal: "Guide toward app strategy, MVP scope, screens, backend, admin panel, notifications, payment needs, and store launch.",
        collect: ["appType", "platform", "screens", "backendNeeds", "adminPanel", "budget"],
        quickReplies: ["Android + iOS", "Flutter app", "MVP app", "App with admin", "App store launch"],
        followUpQuestions: [
          "Is it for customers, internal team, booking, ecommerce, or marketplace?",
          "Do you need an admin panel connected with the app?",
          "Do you need payments, chat, notifications, GPS, or real-time features?"
        ]
      },
      {
        category: "Mobile App Development",
        intent: "booking_app",
        priority: "high",
        route: "/solutions/mobile-apps/booking-order-app",
        keywords: ["booking app", "appointment app", "slot booking", "service booking", "doctor appointment app", "salon booking", "class booking", "event booking", "availability", "calendar app", "schedule app"],
        exampleQuestions: [
          "I need a booking app for my service business.",
          "Can you build appointment booking with reminders?",
          "I need staff availability and customer bookings.",
          "Can customers book slots from mobile?"
        ],
        responseGoal: "Explain booking flow: customer app, availability, calendar, payments, reminders, admin view, cancellation/reschedule rules.",
        collect: ["serviceType", "bookingRules", "staffCount", "paymentRequired", "reminderChannel", "budget"],
        quickReplies: ["Appointments", "Payments", "Reminders", "Staff calendar", "Admin panel"]
      },
      {
        category: "Mobile App Development",
        intent: "internal_team_app",
        priority: "medium",
        route: "/solutions/mobile-apps/admin-connected-app",
        keywords: ["internal app", "employee app", "staff app", "field team app", "sales team app", "attendance app", "inventory app", "reporting app", "team app", "manager app"],
        exampleQuestions: [
          "I need an app for my internal team.",
          "Can field staff update reports from mobile?",
          "I want attendance and task tracking app.",
          "Can managers see reports from staff app?"
        ],
        responseGoal: "Map role-based mobile workflows, offline/sync requirements, task updates, approvals, reports, and manager dashboard.",
        collect: ["teamSize", "roles", "dailyWorkflow", "offlineNeed", "reports", "budget"],
        quickReplies: ["Attendance", "Tasks", "Field reports", "Inventory", "Manager dashboard"]
      }
    ]
  },
  {
    category: "Custom CRM Systems",
    description: "Owned CRM systems, Salesforce/custom CRM, lead management, sales pipeline, workflows, reports, AI insights, and support workflows.",
    defaultQuickReplies: ["Lead management", "Sales pipeline", "Customer support", "Workflow automation", "CRM migration"],
    intents: [
      {
        category: "Custom CRM Systems",
        intent: "custom_crm_lead_management",
        priority: "high",
        route: "/services/custom-crm-systems",
        keywords: ["crm", "custom crm", "lead management", "lead tracking", "lead capture", "follow up", "sales pipeline", "deal pipeline", "customer database", "crm dashboard", "sales dashboard", "own crm", "crm software"],
        exampleQuestions: [
          "I need a CRM to manage leads.",
          "Can you build a custom CRM for my sales team?",
          "We are using spreadsheets and losing leads.",
          "I want pipeline, follow-ups and reporting in one system."
        ],
        responseGoal: "Explain owned CRM modules: lead capture, pipeline, tasks, follow-ups, reminders, role access, dashboards, reports, and automation rules.",
        collect: ["leadSources", "pipelineStages", "teamRoles", "reports", "automationNeeds", "budget"],
        quickReplies: ["Lead capture", "Pipeline", "Follow-ups", "Reports", "Role access"],
        followUpQuestions: [
          "How are leads coming today: website forms, calls, WhatsApp, ads, referrals, or manual entry?",
          "How many pipeline stages do you need?",
          "Do you need reminders, assignment rules, WhatsApp/email integration, or AI lead scoring?"
        ]
      },
      {
        category: "Custom CRM Systems",
        intent: "salesforce_crm",
        priority: "medium",
        route: "/services/custom-crm-systems",
        keywords: ["salesforce", "salesforce setup", "salesforce admin", "salesforce automation", "salesforce flow", "apex", "lwc", "sales cloud", "service cloud", "salesforce integration", "salesforce crm", "salesforce customization"],
        exampleQuestions: [
          "Can you customize Salesforce for us?",
          "I need Salesforce flows and dashboards.",
          "Can you build Apex or LWC in Salesforce?",
          "Can you migrate our CRM to Salesforce?"
        ],
        responseGoal: "Classify Salesforce requirements into setup, customization, flows, Apex/LWC, dashboards, integrations, migration, or support.",
        collect: ["salesforceOrgStatus", "cloudType", "objects", "automationNeeds", "integrationNeeds", "budget"],
        quickReplies: ["Salesforce setup", "Flows", "Apex/LWC", "Dashboards", "Integration"]
      },
      {
        category: "Custom CRM Systems",
        intent: "customer_support_crm",
        priority: "medium",
        route: "/solutions/crm/crmcore",
        keywords: ["support crm", "ticketing", "customer support", "case management", "helpdesk", "support workflow", "service workflow", "complaint tracking", "support dashboard", "agent workflow"],
        exampleQuestions: [
          "I need a ticketing CRM for customer support.",
          "Can you manage customer complaints and cases?",
          "We need agent assignment and escalation.",
          "Can support team track SLAs?"
        ],
        responseGoal: "Explain support workflow: ticket capture, agent assignment, SLA, escalation, status tracking, knowledge base, and reports.",
        collect: ["supportChannels", "agentCount", "slaRules", "escalationFlow", "reportNeeds", "budget"],
        quickReplies: ["Ticketing", "SLA", "Escalation", "Agent dashboard", "Reports"]
      }
    ]
  },
  {
    category: "SaaS Development",
    description: "SaaS MVPs, subscription platforms, marketplace SaaS, internal SaaS, dashboards, billing, roles, and multi-tenant architecture.",
    defaultQuickReplies: ["MVP SaaS", "Business SaaS", "Marketplace", "Subscription platform", "Internal SaaS"],
    intents: [
      {
        category: "SaaS Development",
        intent: "saas_mvp",
        priority: "high",
        route: "/services/saas-development",
        keywords: ["saas", "saas mvp", "mvp saas", "software product", "subscription software", "multi tenant", "tenant based", "dashboard saas", "billing saas", "launch saas", "startup saas", "build a product"],
        exampleQuestions: [
          "I want to build a SaaS MVP.",
          "Can you create a subscription-based platform?",
          "I have a SaaS idea and need development.",
          "Can you build multi-tenant SaaS with billing?"
        ],
        responseGoal: "Frame SaaS around MVP scope, user roles, dashboards, tenant/workspace model, subscription billing, analytics, admin controls, and scalable deployment.",
        collect: ["productIdea", "targetUsers", "tenantModel", "billingModel", "coreModules", "budget"],
        quickReplies: ["MVP", "Subscriptions", "Multi-tenant", "Admin panel", "Analytics"],
        followUpQuestions: [
          "Is this B2B SaaS, B2C SaaS, marketplace, or internal product?",
          "Do you need subscriptions, free trial, payments, or usage-based billing?",
          "What are the must-have modules for the first version?"
        ]
      },
      {
        category: "SaaS Development",
        intent: "marketplace_platform",
        priority: "medium",
        route: "/solutions/web-saas/saas-platform",
        keywords: ["marketplace", "two sided marketplace", "vendor platform", "seller platform", "buyer seller", "booking marketplace", "service marketplace", "multi vendor", "commission", "vendor dashboard"],
        exampleQuestions: [
          "I need a marketplace platform.",
          "Can vendors register and sell services?",
          "Can we build a buyer-seller platform?",
          "I want a marketplace with commissions."
        ],
        responseGoal: "Explain marketplace modules: vendor onboarding, listings, search, bookings/orders, payments, commissions, dispute/support flow, admin moderation.",
        collect: ["marketplaceType", "userRoles", "transactionFlow", "commissionModel", "moderationNeeds", "budget"],
        quickReplies: ["Vendor onboarding", "Listings", "Payments", "Commissions", "Admin moderation"]
      }
    ]
  },
  {
    category: "AI & Automation",
    description: "AI chatbots, lead automation, support automation, AI agents, document processing, workflow automation, WhatsApp/email automation, and RAG bots.",
    defaultQuickReplies: ["AI chatbot", "Lead automation", "Support automation", "Document automation", "AI agent"],
    intents: [
      {
        category: "AI & Automation",
        intent: "ai_chatbot",
        priority: "high",
        route: "/services/ai-agents",
        keywords: ["ai chatbot", "chatbot", "website chatbot", "support bot", "faq bot", "lead bot", "ai assistant", "virtual assistant", "chat widget", "conversational ai", "bot for website", "knowledge base bot"],
        exampleQuestions: [
          "I need a chatbot for my website.",
          "Can the chatbot answer customer questions?",
          "Can you build a lead capture chatbot?",
          "I want a bot trained on my website content."
        ],
        responseGoal: "Clarify chatbot type: FAQ/support, lead qualification, appointment booking, sales assistant, RAG knowledge bot, or internal assistant. Explain data source, intents, fallback, lead save, and human handoff.",
        collect: ["botGoal", "dataSources", "leadFields", "handoffChannel", "integrations", "budget"],
        quickReplies: ["FAQ bot", "Lead bot", "Support bot", "RAG bot", "Human handoff"],
        followUpQuestions: [
          "Should the bot mainly answer FAQs, capture leads, book appointments, or qualify prospects?",
          "What data should it use: website pages, PDFs, CRM, Google Sheets, or custom knowledge base?",
          "Where should qualified leads go: email, CRM, Google Sheet, WhatsApp, or dashboard?"
        ]
      },
      {
        category: "AI & Automation",
        intent: "lead_automation",
        priority: "high",
        route: "/solutions/ai-automation/lead-scoring",
        keywords: ["lead automation", "lead qualification", "lead scoring", "auto follow up", "sales automation", "crm automation", "lead routing", "lead nurturing", "whatsapp follow up", "email follow up", "smart replies"],
        exampleQuestions: [
          "Can AI qualify my website leads?",
          "I need automatic follow-ups for new leads.",
          "Can leads be scored and assigned automatically?",
          "Can WhatsApp or email messages go automatically?"
        ],
        responseGoal: "Explain trigger-condition-action flow: capture lead, enrich/score, route to owner, send email/WhatsApp, create CRM task, notify team, track status.",
        collect: ["leadSources", "qualificationCriteria", "followUpChannels", "crmTool", "teamRules", "budget"],
        quickReplies: ["Lead scoring", "WhatsApp follow-up", "Email sequence", "CRM routing", "Dashboard"]
      },
      {
        category: "AI & Automation",
        intent: "document_processing",
        priority: "medium",
        route: "/solutions/ai-automation/document-automation",
        keywords: ["document automation", "pdf automation", "ocr", "invoice extraction", "form extraction", "document processing", "data extraction", "file chatbot", "chat with pdf", "summarize documents"],
        exampleQuestions: [
          "Can AI extract data from PDFs?",
          "I need invoice processing automation.",
          "Can the system read forms and create records?",
          "Can users ask questions from uploaded documents?"
        ],
        responseGoal: "Explain OCR/extraction, validation, structured output, human review, CRM/database sync, and reporting.",
        collect: ["documentTypes", "fieldsToExtract", "volume", "accuracyNeed", "reviewFlow", "budget"],
        quickReplies: ["Invoices", "Forms", "PDF Q&A", "OCR", "CRM sync"]
      },
      {
        category: "AI & Automation",
        intent: "workflow_automation",
        priority: "high",
        route: "/services/workflow-automation",
        keywords: ["workflow automation", "automation", "approval workflow", "reminders", "task automation", "status automation", "trigger", "condition", "action", "notification automation", "operations automation"],
        exampleQuestions: [
          "I want to automate our daily workflow.",
          "Can you automate approvals and reminders?",
          "Can tasks be assigned automatically?",
          "Can status changes trigger notifications?"
        ],
        responseGoal: "Map business process into triggers, conditions, actions, notifications, approvals, escalations, logs, and dashboards.",
        collect: ["processName", "triggerEvents", "conditions", "actions", "approvalRules", "budget"],
        quickReplies: ["Approvals", "Reminders", "Task assignment", "Escalations", "Notifications"]
      }
    ]
  },
  {
    category: "Integration Services & API Development",
    description: "Backend APIs, third-party APIs, payment gateways, WhatsApp, email, analytics, CRM sync, Google Sheets sync, and webhook automation.",
    defaultQuickReplies: ["API backend", "Payment gateway", "WhatsApp API", "CRM integration", "Analytics tracking"],
    intents: [
      {
        category: "Integration Services & API Development",
        intent: "api_backend",
        priority: "medium",
        route: "/services/integration-services",
        keywords: ["api", "backend api", "rest api", "backend", "database api", "mobile backend", "webhook", "api integration", "third party api", "payment api", "auth api"],
        exampleQuestions: [
          "I need backend APIs for my mobile app.",
          "Can you connect my app with third-party APIs?",
          "Can you build secure REST APIs?",
          "Can you create webhooks for payment status?"
        ],
        responseGoal: "Clarify API modules, authentication, database, documentation, webhooks, testing, and monitoring.",
        collect: ["systemType", "apiModules", "authNeed", "thirdPartyTools", "database", "budget"],
        quickReplies: ["REST API", "Auth", "Database", "Webhooks", "Payments"]
      },
      {
        category: "Integration Services & API Development",
        intent: "business_tool_integration",
        priority: "high",
        route: "/services/integration-services",
        keywords: ["integrate", "integration", "connect tools", "crm sync", "google sheets sync", "whatsapp api", "email integration", "payment gateway", "razorpay", "stripe", "analytics", "zapier", "n8n", "make.com"],
        exampleQuestions: [
          "Can you connect my website leads to CRM?",
          "Can WhatsApp messages go automatically after form submit?",
          "Can payment status update in our dashboard?",
          "Can you sync Google Sheets with CRM?"
        ],
        responseGoal: "Explain tool audit, data mapping, webhook/API sync, retry/error handling, notifications, and monitoring.",
        collect: ["sourceTool", "destinationTool", "dataFields", "syncFrequency", "failureHandling", "budget"],
        quickReplies: ["Website to CRM", "WhatsApp", "Payments", "Google Sheets", "Analytics"]
      }
    ]
  },
  {
    category: "Cloud, DevOps & Maintenance",
    description: "Deployment, CI/CD, Docker, Kubernetes, cloud architecture, hosting, SSL, DNS, monitoring, backups, uptime, and support.",
    defaultQuickReplies: ["Deployment", "CI/CD", "Cloud setup", "Monitoring", "Maintenance"],
    intents: [
      {
        category: "Cloud, DevOps & Maintenance",
        intent: "devops_deployment",
        priority: "medium",
        route: "/services/devops-deployment",
        keywords: ["deploy", "deployment", "ci cd", "cicd", "github actions", "docker", "kubernetes", "server setup", "vercel", "hosting", "domain", "ssl", "nginx", "production deployment", "rollback"],
        exampleQuestions: [
          "Can you deploy my Next.js website?",
          "I need CI/CD from GitHub to production.",
          "Can you set up Docker and server deployment?",
          "Can you fix domain and SSL?"
        ],
        responseGoal: "Explain deployment pipeline: repo, build, environment variables, domain/SSL, staging, production, monitoring, rollback, and documentation.",
        collect: ["techStack", "hostingProvider", "repoStatus", "environmentCount", "domainStatus", "budget"],
        quickReplies: ["Vercel", "Server", "Docker", "GitHub Actions", "Domain/SSL"]
      },
      {
        category: "Cloud, DevOps & Maintenance",
        intent: "cloud_infrastructure",
        priority: "medium",
        route: "/services/cloud-infrastructure",
        keywords: ["cloud", "cloud setup", "aws", "azure", "gcp", "cloud architecture", "cloud migration", "database hosting", "cdn", "storage", "backup", "scaling", "cost optimization", "monitoring"],
        exampleQuestions: [
          "Can you design cloud infrastructure for my SaaS?",
          "I need AWS setup with database and backups.",
          "Can you migrate my app to cloud?",
          "Can you reduce cloud cost and improve monitoring?"
        ],
        responseGoal: "Clarify cloud provider, workloads, database/storage needs, scaling, security, backups, monitoring, and cost controls.",
        collect: ["provider", "workloads", "traffic", "database", "backupNeed", "budget"],
        quickReplies: ["AWS", "Azure", "GCP", "Database", "Backups", "Cost optimization"]
      },
      {
        category: "Cloud, DevOps & Maintenance",
        intent: "maintenance_support",
        priority: "medium",
        route: "/services/maintenance-support",
        keywords: ["maintenance", "support", "bug fix", "website support", "app support", "crm support", "monthly support", "monitoring", "updates", "performance fix", "ongoing support", "technical support"],
        exampleQuestions: [
          "Do you provide monthly website maintenance?",
          "Can you fix bugs in my app?",
          "Can you support our CRM after launch?",
          "Can you monitor uptime and performance?"
        ],
        responseGoal: "Explain support options: bug fixes, updates, monitoring, content changes, performance improvements, security patches, and priority support.",
        collect: ["productType", "currentIssue", "supportFrequency", "techStack", "urgency", "budget"],
        quickReplies: ["Bug fix", "Monthly support", "Performance", "Monitoring", "Security update"]
      }
    ]
  },
  {
    category: "UI/UX Design & Brand",
    description: "UI design, UX research, wireframes, prototypes, design systems, dashboards, mobile screens, landing pages, and brand identity.",
    defaultQuickReplies: ["UI design", "UX research", "Wireframes", "Prototype", "Design system", "Brand identity"],
    intents: [
      {
        category: "UI/UX Design & Brand",
        intent: "product_uiux_design",
        priority: "high",
        route: "/services/ui-ux-design",
        keywords: ["ui ux", "ui design", "ux design", "product design", "figma", "wireframe", "prototype", "app design", "website design", "dashboard design", "design system", "redesign", "user flow"],
        exampleQuestions: [
          "Can you design my mobile app screens?",
          "I need UI/UX design in Figma.",
          "Can you create wireframes and prototype?",
          "Can you redesign my dashboard?"
        ],
        responseGoal: "Clarify design scope: research, flows, wireframes, high-fidelity UI, prototype, design system, developer handoff.",
        collect: ["productType", "screenCount", "designStage", "brandAssets", "prototypeNeed", "budget"],
        quickReplies: ["App screens", "Website UI", "Dashboard", "Wireframes", "Prototype"]
      },
      {
        category: "UI/UX Design & Brand",
        intent: "brand_identity",
        priority: "medium",
        route: "/services/brand-identity",
        keywords: ["branding", "brand identity", "logo", "brand kit", "visual identity", "brand guidelines", "rebrand", "brand refresh", "colors", "typography", "brand strategy"],
        exampleQuestions: [
          "Can you create brand identity for my startup?",
          "I need logo, colors and brand guidelines.",
          "Can you refresh our existing brand?",
          "Can you design a complete brand kit?"
        ],
        responseGoal: "Explain brand deliverables: logo direction, color palette, typography, visual system, usage guidelines, digital-ready assets.",
        collect: ["businessName", "industry", "brandStyle", "deliverables", "timeline", "budget"],
        quickReplies: ["Logo", "Brand kit", "Guidelines", "Rebrand", "Startup brand"]
      }
    ]
  },
  {
    category: "SEO & Digital Growth",
    description: "SEO, technical audit, analytics setup, speed, Core Web Vitals, conversion optimization, growth roadmap, and content strategy.",
    defaultQuickReplies: ["SEO", "Analytics setup", "Technical audit", "Performance", "Conversion optimization"],
    intents: [
      {
        category: "SEO & Digital Growth",
        intent: "seo_growth",
        priority: "high",
        route: "/services/seo-growth",
        keywords: ["seo", "search engine optimization", "ranking", "google ranking", "technical seo", "on page seo", "keyword research", "seo audit", "search console", "indexing", "schema", "internal linking", "organic traffic", "local seo"],
        exampleQuestions: [
          "Can you improve my website SEO?",
          "My pages are not ranking on Google.",
          "Can you do technical SEO audit?",
          "Can you fix indexing and Search Console issues?"
        ],
        responseGoal: "Explain SEO audit, keyword mapping, metadata, schema, content gaps, internal links, technical fixes, analytics, and reporting.",
        collect: ["websiteUrl", "targetLocation", "mainServices", "currentProblem", "competitors", "budget"],
        quickReplies: ["SEO audit", "Indexing issue", "Keyword research", "Schema", "Local SEO"]
      },
      {
        category: "SEO & Digital Growth",
        intent: "analytics_conversion",
        priority: "medium",
        route: "/services/seo-growth",
        keywords: ["analytics", "ga4", "google analytics", "tag manager", "gtm", "conversion tracking", "lead tracking", "pixel setup", "meta pixel", "cro", "conversion optimization", "funnel"],
        exampleQuestions: [
          "Can you set up GA4 and conversion tracking?",
          "I want to track leads from my website.",
          "Can you improve conversion rate?",
          "Can you set up Meta Pixel and Google Tag Manager?"
        ],
        responseGoal: "Explain measurement setup: GA4, GTM, conversion events, lead source tracking, dashboards, funnel analysis, and CRO recommendations.",
        collect: ["websiteUrl", "trackingTools", "conversionGoals", "adPlatforms", "dashboardNeed", "budget"],
        quickReplies: ["GA4", "GTM", "Lead tracking", "Meta Pixel", "CRO"]
      }
    ]
  },
  {
    category: "Industry Solutions",
    description: "Industry-specific website, mobile app, CRM, and portal/SaaS needs for healthcare, manufacturing, education, real estate, retail, finance, and service businesses.",
    defaultQuickReplies: ["Healthcare", "Education", "Real Estate", "Retail", "Finance", "Manufacturing"],
    intents: [
      {
        category: "Industry Solutions",
        intent: "healthcare_solution",
        priority: "medium",
        route: "/industries/healthcare",
        keywords: ["healthcare", "hospital", "clinic", "doctor", "patient portal", "appointment", "medical website", "healthcare app", "clinic crm", "telemedicine", "pharmacy"],
        exampleQuestions: [
          "I need a website for my clinic.",
          "Can you build patient appointment booking?",
          "Can you make healthcare CRM for patient follow-ups?",
          "Can you create a patient portal?"
        ],
        responseGoal: "Route to healthcare website/app/CRM/portal based on need; highlight appointment booking, patient records, service pages, reminders, and compliance-aware workflows.",
        collect: ["solutionType", "clinicOrHospital", "appointmentNeed", "patientPortalNeed", "budget"],
        quickReplies: ["Healthcare website", "Patient app", "Clinic CRM", "Patient portal"]
      },
      {
        category: "Industry Solutions",
        intent: "real_estate_solution",
        priority: "medium",
        route: "/industries/real-estate",
        keywords: ["real estate", "property", "broker", "agent", "listing website", "property portal", "real estate crm", "site visit", "leads for property", "builder website"],
        exampleQuestions: [
          "I need a real estate website with property listings.",
          "Can you build CRM for property leads?",
          "Can buyers book site visits online?",
          "I need a portal for brokers and properties."
        ],
        responseGoal: "Suggest website/CRM/portal modules: listings, filters, lead capture, site visits, broker dashboard, follow-ups, and analytics.",
        collect: ["propertyTypes", "listingCount", "leadSources", "siteVisitFlow", "crmNeed", "budget"],
        quickReplies: ["Listing website", "Property CRM", "Site visit booking", "Broker portal"]
      },
      {
        category: "Industry Solutions",
        intent: "education_solution",
        priority: "medium",
        route: "/industries/education",
        keywords: ["education", "school", "college", "university", "edtech", "lms", "admission crm", "student portal", "course website", "learning app"],
        exampleQuestions: [
          "I need a website for my school or institute.",
          "Can you build admissions CRM?",
          "Can you create student portal or LMS?",
          "Can you make an education mobile app?"
        ],
        responseGoal: "Classify education need into website, admissions CRM, student portal, LMS, or learning app.",
        collect: ["institutionType", "admissionFlow", "studentPortalNeed", "courseNeed", "budget"],
        quickReplies: ["School website", "Admission CRM", "Student portal", "LMS", "Learning app"]
      },
      {
        category: "Industry Solutions",
        intent: "retail_solution",
        priority: "medium",
        route: "/industries/retail",
        keywords: ["retail", "shop", "store", "ecommerce", "inventory", "pos", "customer loyalty", "retail app", "retail crm", "online store"],
        exampleQuestions: [
          "I need an online store for my retail business.",
          "Can you build inventory and order dashboard?",
          "Can you make a customer loyalty app?",
          "Can retail leads and customers be managed in CRM?"
        ],
        responseGoal: "Recommend ecommerce website/app/CRM/portal with catalog, orders, payments, inventory, offers, loyalty, and analytics.",
        collect: ["storeType", "productCount", "inventoryNeed", "paymentNeed", "loyaltyNeed", "budget"],
        quickReplies: ["Online store", "Retail app", "Inventory", "Loyalty", "Retail CRM"]
      },
      {
        category: "Industry Solutions",
        intent: "manufacturing_solution",
        priority: "medium",
        route: "/industries/manufacturing",
        keywords: ["manufacturing", "factory", "production", "inventory", "vendor", "supplier", "dealer portal", "manufacturing crm", "b2b portal", "operations dashboard"],
        exampleQuestions: [
          "I need a manufacturing company website.",
          "Can you build vendor or dealer portal?",
          "Can you create operations dashboard for production?",
          "Can manufacturing leads be managed in CRM?"
        ],
        responseGoal: "Suggest B2B website, CRM, vendor/dealer portal, operations dashboard, inventory workflows, and reporting.",
        collect: ["businessModel", "dealerNeed", "inventoryNeed", "leadFlow", "dashboardNeed", "budget"],
        quickReplies: ["B2B website", "Dealer portal", "Manufacturing CRM", "Inventory dashboard"]
      },
      {
        category: "Industry Solutions",
        intent: "finance_solution",
        priority: "medium",
        route: "/industries/finance",
        keywords: ["finance", "fintech", "insurance", "loan", "accounting", "financial services", "finance crm", "client portal", "policy tracking", "claims", "secure dashboard"],
        exampleQuestions: [
          "I need a finance services website.",
          "Can you build a client portal for finance customers?",
          "Can you create insurance CRM or claims tracking?",
          "Can you build secure dashboard for financial data?"
        ],
        responseGoal: "Recommend secure website/CRM/portal with client onboarding, document upload, policy/loan tracking, claims/workflows, reports, and access control.",
        collect: ["financeType", "clientPortalNeed", "documentNeed", "workflowNeed", "securityNeed", "budget"],
        quickReplies: ["Finance website", "Client portal", "Insurance CRM", "Claims workflow", "Secure dashboard"]
      }
    ]
  },
  {
    category: "Pricing, Timeline & Process",
    description: "Answer commercial questions while qualifying scope and moving visitor toward lead submission.",
    defaultQuickReplies: ["Pricing", "Timeline", "Process", "Book consultation", "Get quote"],
    intents: [
      {
        category: "Pricing, Timeline & Process",
        intent: "pricing_question",
        priority: "high",
        keywords: ["price", "pricing", "cost", "budget", "how much", "quote", "quotation", "estimate", "charges", "package", "rate", "kitna", "fees"],
        exampleQuestions: [
          "How much does a website cost?",
          "What is the price for CRM development?",
          "Can you give me a quote for mobile app?",
          "What budget is needed for SaaS?"
        ],
        responseGoal: "Give a rough range only when service is known, then ask for scope. If service is unknown, ask what they want to build first.",
        collect: ["projectType", "features", "timeline", "budget", "name", "email"],
        quickReplies: ["Under 25k", "25k–50k", "50k–1L", "1L–2L", "Above 2L", "Need expert help"]
      },
      {
        category: "Pricing, Timeline & Process",
        intent: "timeline_question",
        priority: "medium",
        keywords: ["timeline", "how long", "delivery time", "duration", "deadline", "when can you deliver", "fast delivery", "urgent", "launch date"],
        exampleQuestions: [
          "How long will it take to build my website?",
          "Can you deliver a landing page quickly?",
          "What is the timeline for a mobile app?",
          "Can you launch before next month?"
        ],
        responseGoal: "Explain timeline depends on scope; website/landing page days to weeks, SaaS/mobile/CRM weeks, cloud/DevOps depends on infrastructure complexity. Ask for deadline and must-have features.",
        collect: ["projectType", "mustHaveFeatures", "deadline", "budget"],
        quickReplies: ["Urgent", "1-2 weeks", "1 month", "Flexible", "Need roadmap"]
      },
      {
        category: "Pricing, Timeline & Process",
        intent: "process_question",
        priority: "medium",
        keywords: ["process", "how do you work", "steps", "workflow", "development process", "what happens next", "how start", "consultation", "discovery", "proposal"],
        exampleQuestions: [
          "What is your development process?",
          "How do we start the project?",
          "Will you first understand requirements?",
          "Do you provide proposal before development?"
        ],
        responseGoal: "Explain HNX process: discovery, strategy, design/architecture, build, testing, launch, support. Then ask for project type and contact details.",
        collect: ["projectType", "requirementSummary", "name", "email"],
        quickReplies: ["Discovery call", "Proposal", "Design first", "Build MVP", "Support"]
      }
    ]
  },
  {
    category: "Lead Capture & Human Handoff",
    description: "Collect qualified lead data and move the visitor to consultation, quote, WhatsApp, email, or internal CRM save flow.",
    defaultQuickReplies: ["Talk to team", "Get quote", "Book consultation", "Share requirement", "Start again"],
    intents: [
      {
        category: "Lead Capture & Human Handoff",
        intent: "request_quote_or_contact",
        priority: "high",
        keywords: ["contact", "talk to team", "call me", "get quote", "book call", "consultation", "proposal", "send quote", "connect", "whatsapp", "email me", "schedule meeting"],
        exampleQuestions: [
          "I want to talk to your team.",
          "Can you send me a quote?",
          "Book a consultation for my project.",
          "How can I contact HNX Solutions?"
        ],
        responseGoal: "Ask for name, email, phone if available, project type, budget, and requirement summary. Then trigger save_lead or show contact CTA.",
        collect: ["name", "email", "phone", "projectType", "budget", "message"],
        quickReplies: ["Share email", "Share phone", "Get quote", "Start again"],
        followUpQuestions: [
          "Please share your name and email so our team can contact you.",
          "What service do you need help with?",
          "What is your approximate budget or preferred range?"
        ]
      },
      {
        category: "Lead Capture & Human Handoff",
        intent: "fallback_unclear",
        priority: "high",
        keywords: ["unknown", "unclear", "random", "other", "different", "custom requirement", "not listed", "something else"],
        exampleQuestions: [
          "I have a custom requirement.",
          "This is not listed in your services.",
          "I don't know the category but need help.",
          "Can I explain my requirement?"
        ],
        responseGoal: "Do not reject. Ask the visitor to explain the requirement in one or two lines, then classify into nearest service or route to human team.",
        collect: ["requirementSummary", "businessType", "goal", "contact"],
        quickReplies: ["Explain requirement", "Need suggestion", "Talk to team", "Start again"]
      }
    ]
  }
] 

const CHATBOT_REQUIRED_LEAD_FIELDS = [
  "projectType",
  "useCase",
  "budget",
  "name",
  "email",
  "phone",
  "timeline",
  "businessType",
  "websiteUrl",
  "requirementSummary"
]
const CHATBOT_SERVICE_DECISION_TREE = [
  {
    condition: "Visitor wants online presence, leads, credibility, service pages, landing pages, ecommerce, or website redesign.",
    recommend: "Web Development",
    ask: "Is this a new website, redesign, ecommerce store, landing page, or custom portal?"
  },
  {
    condition: "Visitor wants Android/iOS customer experience, booking/order app, notifications, payments, or internal staff mobile workflow.",
    recommend: "Mobile App Development",
    ask: "Is the app for customers, bookings, ecommerce, or your internal team?"
  },
  {
    condition: "Visitor has leads, sales pipeline, support tickets, follow-ups, reporting, or customer workflow problems.",
    recommend: "Custom CRM Systems",
    ask: "Do you need lead management, sales pipeline, support workflow, automation, or a custom CRM module?"
  },
  {
    condition: "Visitor wants a subscription product, multi-user software platform, dashboard SaaS, marketplace, or startup MVP.",
    recommend: "SaaS Development",
    ask: "Is this MVP SaaS, business SaaS, marketplace SaaS, internal SaaS, or subscription platform?"
  },
  {
    condition: "Visitor wants chatbot, AI agent, lead scoring, document automation, WhatsApp/email automation, or repetitive workflow automation.",
    recommend: "AI & Automation",
    ask: "Should AI handle FAQs, lead qualification, support replies, documents, or internal workflow automation?"
  },
  {
    condition: "Visitor wants APIs, payment gateway, WhatsApp/email, CRM sync, Google Sheets sync, analytics events, or third-party systems connected.",
    recommend: "Integration Services / API Development",
    ask: "Which tools need to be connected, and what data should move between them?"
  },
  {
    condition: "Visitor wants deployment, hosting, CI/CD, Docker, server setup, cloud architecture, backups, monitoring, or scaling.",
    recommend: "Cloud, DevOps & Maintenance",
    ask: "Is this deployment, cloud setup, monitoring, backup, scaling, or ongoing support?"
  },
  {
    condition: "Visitor wants Figma screens, wireframes, prototype, UI redesign, design system, dashboard design, or brand identity.",
    recommend: "UI/UX Design & Brand",
    ask: "Do you need wireframes, high-fidelity UI, prototype, design system, or brand identity?"
  },
  {
    condition: "Visitor wants Google ranking, technical SEO, analytics, conversion tracking, speed, Core Web Vitals, or lead funnel optimization.",
    recommend: "SEO & Digital Growth",
    ask: "Do you need SEO audit, analytics setup, performance optimization, or conversion tracking?"
  }
] 
module.exports = {
  CHATBOT_QUESTION_BANK,
  CHATBOT_REQUIRED_LEAD_FIELDS,
  CHATBOT_SERVICE_DECISION_TREE
};