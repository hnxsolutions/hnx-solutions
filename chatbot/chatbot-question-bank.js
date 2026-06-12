const CHATBOT_QUESTION_BANK = [
  {
    category: "Greeting & Discovery",
    description: "Start the conversation and guide visitors to the right HNX Solutions service.",
    defaultQuickReplies: ["Web Development", "Mobile App Development", "Custom CRM Systems", "SaaS Development", "AI & Automation", "Need suggestion"],
    intents: [
      {
        category: "Greeting & Discovery",
        intent: "start_chat",
        priority: "high",
        keywords: ["hi", "hello", "hey", "hii", "namaste", "start", "help", "help me", "need help", "can you help", "i have a project", "i want to build"],
        exampleQuestions: [
          "Hi, I need help with a project.",
          "Can you help me build something for my business?",
          "I want to discuss a website or app."
        ],
        responseGoal:
          "👋 Welcome to HNX Solutions!\n\nWe help businesses build websites, mobile apps, CRM systems, SaaS platforms, AI automation, cloud/DevOps systems, UI/UX design, and SEO growth solutions.\n\nWhat would you like to build, improve, or automate?",
        collect: ["projectType"],
        quickReplies: ["Web Development", "Mobile App Development", "Custom CRM Systems", "SaaS Development", "AI & Automation", "UI/UX Design", "SEO & Digital Growth", "Cloud, DevOps & Maintenance"]
      },
      {
        category: "Greeting & Discovery",
        intent: "services_list",
        priority: "high",
        keywords: ["services", "service", "what services", "your services", "services you provide", "what do you provide", "what do you do", "offerings", "solutions", "what can you build"],
        exampleQuestions: [
          "Services",
          "What services do you provide?",
          "What can HNX Solutions build?"
        ],
        responseGoal:
          "Here are the main services we provide at HNX Solutions:\n\n• Web Development — business websites, landing pages, ecommerce, portals\n• Mobile App Development — Android/iOS apps, booking apps, ecommerce apps, internal apps\n• Custom CRM Systems — lead management, sales pipeline, support workflows, dashboards\n• SaaS Development — MVP SaaS, subscription platforms, marketplaces, dashboards\n• AI & Automation — chatbots, lead automation, document automation, workflow automation\n• Integration Services — APIs, payments, WhatsApp, CRM sync, Google Sheets, analytics\n• Cloud, DevOps & Maintenance — deployment, CI/CD, hosting, SSL, monitoring, support\n• UI/UX Design & Brand — Figma UI, wireframes, prototypes, design systems, branding\n• SEO & Digital Growth — SEO audit, analytics, speed, conversion tracking\n\nWhich service are you interested in?",
        collect: ["projectType"],
        quickReplies: ["Web Development", "Mobile App Development", "Custom CRM Systems", "SaaS Development", "AI & Automation", "UI/UX Design"]
      },
      {
        category: "Greeting & Discovery",
        intent: "service_recommendation",
        priority: "high",
        keywords: ["suggest", "recommend", "which service", "confused", "not sure", "guide me", "need suggestion", "best option", "what should i choose"],
        exampleQuestions: [
          "I am not sure whether I need a website or CRM.",
          "Suggest the best solution for my business."
        ],
        responseGoal:
          "Sure — I can guide you.\n\n• Need online presence or leads? Choose Web Development.\n• Need Android/iOS customer experience? Choose Mobile App Development.\n• Need to manage leads, sales, support, or operations? Choose Custom CRM Systems.\n• Need a subscription product or software platform? Choose SaaS Development.\n• Need to reduce manual work? Choose AI & Automation.\n• Need deployment, hosting, monitoring, or scaling? Choose Cloud/DevOps.\n• Need screens, wireframes, or prototype? Choose UI/UX Design.\n• Need Google ranking, analytics, or conversions? Choose SEO & Digital Growth.\n\nTell me your business type and main problem, and I’ll suggest the best option.",
        collect: ["businessType", "problem", "goal", "budget"],
        quickReplies: ["Need leads", "Need app", "Need CRM", "Need automation", "Need SaaS", "Need SEO"],
        followUpQuestions: [
          "What is your main goal: more leads, smoother operations, customer app, or automation?",
          "Do you already have a website, CRM, app, or software system?"
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
        keywords: ["website", "web development", "web developer", "business website", "company website", "service website", "professional website", "corporate website", "portfolio website", "new website", "build website", "make website", "website development", "responsive website", "seo website", "fast website", "contact form", "web design"],
        exampleQuestions: [
          "I need a professional website for my company.",
          "Can you build a business website with contact forms?",
          "I want a fast SEO-friendly website."
        ],
        responseGoal:
          "Yes, we can build a professional business website for you.\n\nOur web development service includes responsive design, SEO-ready structure, fast loading pages, contact/lead forms, analytics setup, WhatsApp CTA, and launch support.\n\nTo suggest the right scope, please tell me:",
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
          "Can you build an ecommerce website with payments?"
        ],
        responseGoal:
          "Yes, we can build an ecommerce website with product catalog, cart, checkout, payment gateway, order management, admin panel, analytics, and SEO setup.\n\nPlease tell me how many products you have and whether you need delivery/order tracking.",
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
          "Can you make a lead generation page?"
        ],
        responseGoal:
          "Yes, we can create a conversion-focused landing page for ads, campaigns, or lead generation.\n\nIt can include strong CTA sections, lead form, WhatsApp button, trust elements, analytics tracking, and fast loading design.",
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
          "Can you build a dashboard for my users?"
        ],
        responseGoal:
          "Yes, we can build a custom portal or dashboard with login, user roles, admin controls, data views, reports, notifications, and integrations.\n\nPlease tell me who will use the portal and what they should be able to do inside it.",
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
        keywords: ["mobile app", "app", "android app", "ios app", "flutter app", "react native app", "cross platform app", "app development", "build an app", "create app", "app idea", "mvp app", "startup app", "phone app"],
        exampleQuestions: [
          "I want to build a mobile app for my startup.",
          "Can you make Android and iOS apps?"
        ],
        responseGoal:
          "Yes, we can build Android and iOS mobile apps for your business or startup.\n\nWe can help with app strategy, UI/UX, backend APIs, admin panel, payments, notifications, analytics, and store launch support.\n\nTo understand your app better:",
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
          "Can you build appointment booking with reminders?"
        ],
        responseGoal:
          "Yes, we can build a booking app with customer booking, staff availability, calendar slots, reminders, payments, admin view, cancellation rules, and reports.",
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
          "Can field staff update reports from mobile?"
        ],
        responseGoal:
          "Yes, we can build an internal team app for staff workflows like attendance, task updates, field reports, inventory, approvals, and manager dashboards.",
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
        keywords: ["crm", "custom crm", "lead management", "lead tracking", "lead capture", "follow up", "follow-up", "sales pipeline", "deal pipeline", "customer database", "crm dashboard", "sales dashboard", "own crm", "crm software"],
        exampleQuestions: [
          "I need a CRM to manage leads.",
          "Can you build a custom CRM for my sales team?"
        ],
        responseGoal:
          "Yes, we can build a custom CRM around your exact sales and operations process.\n\nIt can include lead capture, pipeline stages, tasks, follow-ups, reminders, role access, dashboards, reports, workflow automation, and AI insights.\n\nTo map your CRM requirement:",
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
          "I need Salesforce flows and dashboards."
        ],
        responseGoal:
          "Yes, we can help with Salesforce setup, customization, flows, Apex, LWC, dashboards, integrations, migration, and support.",
        collect: ["salesforceOrgStatus", "cloudType", "objects", "automationNeeds", "integrationNeeds", "budget"],
        quickReplies: ["Salesforce setup", "Flows", "Apex/LWC", "Dashboards", "Integration"]
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
          "Can you create a subscription-based platform?"
        ],
        responseGoal:
          "Yes, we can build SaaS products from MVP to production.\n\nWe can include authentication, roles, dashboards, tenant/workspace structure, subscriptions, billing, analytics, admin controls, and cloud deployment.",
        collect: ["productIdea", "targetUsers", "tenantModel", "billingModel", "coreModules", "budget"],
        quickReplies: ["MVP", "Subscriptions", "Multi-tenant", "Admin panel", "Analytics"],
        followUpQuestions: [
          "Is this B2B SaaS, B2C SaaS, marketplace, or internal product?",
          "Do you need subscriptions, free trial, payments, or usage-based billing?",
          "What are the must-have modules for the first version?"
        ]
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
          "Can the chatbot answer customer questions?"
        ],
        responseGoal:
          "Yes, we can build an AI chatbot for your website.\n\nIt can answer FAQs, capture leads, qualify prospects, book appointments, use your website/PDF/knowledge base data, and hand off leads to your team.",
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
        intent: "workflow_automation",
        priority: "high",
        route: "/services/workflow-automation",
        keywords: ["workflow automation", "automation", "approval workflow", "reminders", "task automation", "status automation", "trigger", "condition", "action", "notification automation", "operations automation"],
        exampleQuestions: [
          "I want to automate our daily workflow.",
          "Can you automate approvals and reminders?"
        ],
        responseGoal:
          "Yes, we can automate repetitive business workflows.\n\nWe map your process into triggers, conditions, actions, approvals, reminders, escalations, notifications, logs, and dashboards.",
        collect: ["processName", "triggerEvents", "conditions", "actions", "approvalRules", "budget"],
        quickReplies: ["Approvals", "Reminders", "Task assignment", "Escalations", "Notifications"]
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
        keywords: ["ui ux", "ui/ux", "ui", "ux", "ui design", "ux design", "product design", "figma", "wireframe", "prototype", "app design", "website design", "dashboard design", "design system", "redesign", "user flow"],
        exampleQuestions: [
          "Can you design my mobile app screens?",
          "I need UI/UX design in Figma."
        ],
        responseGoal:
          "Yes, we can help with UI/UX design.\n\nWe can create user flows, wireframes, high-fidelity Figma screens, clickable prototypes, dashboard/app/website UI, design systems, and developer handoff files.",
        collect: ["productType", "screenCount", "designStage", "brandAssets", "prototypeNeed", "budget"],
        quickReplies: ["App screens", "Website UI", "Dashboard", "Wireframes", "Prototype"]
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
          "My pages are not ranking on Google."
        ],
        responseGoal:
          "Yes, we can help improve your SEO and organic visibility.\n\nWe can perform SEO audit, keyword mapping, metadata optimization, schema, technical fixes, indexing checks, internal linking, content gaps, analytics, and reporting.",
        collect: ["websiteUrl", "targetLocation", "mainServices", "currentProblem", "competitors", "budget"],
        quickReplies: ["SEO audit", "Indexing issue", "Keyword research", "Schema", "Local SEO"]
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
          "What is the price for CRM development?"
        ],
        responseGoal:
          "Pricing depends on the service, features, design complexity, integrations, and timeline.\n\nRough starting ranges:\n• Website / landing page: $10k–$50k+\n• Mobile app: $50k–$2L+\n• Custom CRM: $50k–$2L+\n• SaaS platform: $75k–$3L+\n• AI automation/chatbot: $30k–$1.5L+\n• UI/UX design: $10k–$1L+\n\nPlease choose your service and budget range so we can guide you better.",
        collect: ["projectType", "features", "timeline", "budget", "name", "email"],
        quickReplies: ["Under 25k", "25k–50k", "50k–1L", "1L–2L", "Above 2L", "Need expert help"]
      },
      {
        category: "Pricing, Timeline & Process",
        intent: "budget_selection",
        priority: "high",
        keywords: ["under 25k", "25k", "25 k", "25000", "25k-50k", "25k–50k", "50k", "50000", "50k-1l", "50k–1l", "1l", "1 lakh", "1l-2l", "1l–2l", "2l", "above 2l", "3l", "need expert help"],
        exampleQuestions: [
          "25k",
          "My budget is 50k",
          "Under 25k"
        ],
        responseGoal:
          "Got it. Thanks for sharing your budget range.\n\nTo prepare the right suggestion or quote, please share your name, email, and a short description of what you want to build.",
        collect: ["budget", "name", "email", "requirementSummary"],
        quickReplies: ["Share name", "Share email", "Explain requirement", "Talk to team"]
      },
      {
        category: "Pricing, Timeline & Process",
        intent: "timeline_question",
        priority: "medium",
        keywords: ["timeline", "how long", "delivery time", "duration", "deadline", "when can you deliver", "fast delivery", "urgent", "launch date"],
        exampleQuestions: [
          "How long will it take to build my website?",
          "Can you deliver a landing page quickly?"
        ],
        responseGoal:
          "Timeline depends on scope and complexity.\n\nRough timelines:\n• Landing page: a few days to 1 week\n• Business website: 1–4 weeks\n• Mobile app: 5–12 weeks\n• CRM/SaaS: 5–12+ weeks\n• AI automation: 2–6 weeks\n• DevOps/cloud setup: 1–6 weeks\n\nTell me your service type and deadline, and I’ll guide you better.",
        collect: ["projectType", "mustHaveFeatures", "deadline", "budget"],
        quickReplies: ["Urgent", "1-2 weeks", "1 month", "Flexible", "Need roadmap"]
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
          "Can you send me a quote?"
        ],
        responseGoal:
          "Sure. Please share your name, email, phone number, service requirement, and approximate budget.\n\nOur team will review your requirement and contact you with the next steps.",
        collect: ["name", "email", "phone", "projectType", "budget", "message"],
        quickReplies: ["Share email", "Share phone", "Get quote", "Start again"],
        followUpQuestions: [
          "Please share your name and email so our team can contact you.",
          "What service do you need help with?",
          "What is your approximate budget or preferred range?"
        ]
      }
    ]
  }
];

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
];

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
];

module.exports = {
  CHATBOT_QUESTION_BANK,
  CHATBOT_REQUIRED_LEAD_FIELDS,
  CHATBOT_SERVICE_DECISION_TREE
};
