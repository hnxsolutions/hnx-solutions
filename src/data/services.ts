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
  shortDescription: string;
  fullDescription: string;
  startingPrice: string;
  timeline: string;
  bestFor: string;
  tags: string[];
  details: string[];
  packages: ServicePackage[];
};

export const services: ServiceItem[] = [
  {
    id: "web-development",
    title: "Web Development",
    shortDescription:
      "Modern websites, dashboards, and scalable web apps built for speed, SEO, and growth.",
    fullDescription:
      "We build high-performance websites and web applications using modern frameworks like Next.js and React. Whether you need a business website, custom dashboard, internal tool, or scalable platform, we focus on clean architecture, responsive UI, performance, and conversion-focused execution.",
    startingPrice: "Starting from $100",
    timeline: "5 days to 3 weeks",
    bestFor:
      "Landing pages, business websites, e-commerce, admin dashboards, and custom web applications.",
    tags: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    details: [
      "Custom web applications with strong SEO and performance optimization",
      "Responsive and modern business websites built for credibility and conversions",
      "Progressive Web Apps (PWAs) for app-like user experiences",
      "Admin dashboards and internal tools with role-based workflows",
      "API integrations for payment gateways, CRMs, messaging, and more",
    ],
    packages: [
      {
        name: "Starter Website",
        price: "$100 - $250",
        description:
          "Best for simple websites, portfolios, landing pages, and small service businesses.",
        features: [
          "Modern responsive design",
          "Up to 5 sections/pages",
          "Contact form integration",
          "Basic SEO setup",
          "Mobile-friendly layout",
          "Deployment support",
        ],
      },
      {
        name: "Business Website",
        price: "$250 - $600",
        description:
          "Ideal for growing brands that need more pages, lead flow, and stronger online presence.",
        features: [
          "Up to 10 pages",
          "Custom UI sections",
          "Lead generation forms",
          "CMS/blog integration",
          "Analytics setup",
          "Performance optimization",
        ],
        popular: true,
      },
      {
        name: "Advanced Web App",
        price: "$600+",
        description:
          "For dashboards, portals, internal tools, and dynamic business platforms.",
        features: [
          "Authentication system",
          "Database integration",
          "Admin dashboard",
          "API integrations",
          "Role-based access",
          "Scalable architecture",
        ],
      },
    ],
  },
  {
    id: "saas-development",
    title: "SaaS Development",
    shortDescription:
      "Scalable SaaS platforms with subscriptions, dashboards, billing, and cloud deployment.",
    fullDescription:
      "We build secure and scalable SaaS products for startups and growing businesses. From MVP architecture to subscription billing, user roles, dashboards, and cloud deployment, we help transform product ideas into production-ready SaaS platforms.",
    startingPrice: "Starting from $300",
    timeline: "3 to 6 weeks",
    bestFor:
      "Startup MVPs, SaaS platforms, subscription systems, B2B products, and cloud-based software.",
    tags: ["Next.js", "React", "Node.js", "PostgreSQL", "Stripe", "AWS/Vercel"],
    details: [
      "MVP architecture designed to validate ideas quickly",
      "Multi-tenant SaaS systems with scalable user management",
      "Subscription and billing integration with Stripe or Razorpay",
      "Secure authentication and role-based permissions",
      "Cloud deployment and performance optimization",
    ],
    packages: [
      {
        name: "SaaS MVP",
        price: "$300 - $700",
        description:
          "For founders who want to launch fast with a usable and scalable MVP.",
        features: [
          "MVP architecture",
          "Authentication",
          "Basic dashboard",
          "Billing integration",
          "Cloud deployment",
          "Launch support",
        ],
      },
      {
        name: "Growth SaaS",
        price: "$700 - $1,500",
        description:
          "For growing SaaS products that need stronger workflows, billing, and admin controls.",
        features: [
          "Multi-user dashboard",
          "Subscription billing",
          "Role-based access",
          "Admin controls",
          "API integrations",
          "Analytics setup",
        ],
        popular: true,
      },
      {
        name: "Advanced SaaS Platform",
        price: "$1,500+",
        description:
          "For complex SaaS systems requiring scale, custom workflows, and deeper security.",
        features: [
          "Multi-tenant architecture",
          "Advanced permissions",
          "Custom workflows",
          "Scalable backend",
          "Security hardening",
          "Infrastructure planning",
        ],
      },
    ],
  },
  {
    id: "mobile-apps",
    title: "Mobile App Development",
    shortDescription:
      "Cross-platform mobile apps for iOS and Android with polished UI and scalable backend support.",
    fullDescription:
      "We create mobile apps using modern cross-platform technologies like React Native and Flutter. Our focus is on smooth user experience, strong performance, backend integration, and store-ready delivery for both Android and iOS.",
    startingPrice: "Starting from $650",
    timeline: "4 to 8 weeks",
    bestFor:
      "Startup MVPs, booking apps, business apps, service platforms, and customer-facing mobile products.",
    tags: ["React Native", "Flutter", "Expo", "iOS", "Android", "Firebase"],
    details: [
      "Cross-platform apps using one codebase for Android and iOS",
      "Push notifications, authentication, and app store preparation",
      "Offline-friendly architecture with synced data handling",
      "Secure backend and cloud integration",
      "Custom app flows designed for real user behavior",
    ],
    packages: [
      {
        name: "Starter App",
        price: "$650 - $900",
        description:
          "Good for MVP apps with essential screens and a clear primary flow.",
        features: [
          "Cross-platform build",
          "Up to 8 screens",
          "Backend integration",
          "Push notifications",
          "Store-ready build",
          "Launch support",
        ],
      },
      {
        name: "Business App",
        price: "$900 - $1,300",
        description:
          "For production apps that need more UX quality, data flow, and integrations.",
        features: [
          "Up to 15 screens",
          "Authentication",
          "Cloud database",
          "API integrations",
          "Analytics setup",
          "Admin controls",
        ],
        popular: true,
      },
      {
        name: "Advanced App",
        price: "$1,300+",
        description:
          "For complex mobile products with custom logic and scalable architecture.",
        features: [
          "Complex app flows",
          "Realtime features",
          "Role-based access",
          "Advanced backend",
          "Production architecture",
          "Extended support planning",
        ],
      },
    ],
  },
  {
    id: "crm-salesforce",
    title: "CRM & Salesforce",
    shortDescription:
      "CRM systems, Salesforce customization, process automation, and workflow optimization.",
    fullDescription:
      "We help businesses improve operations using CRM systems and Salesforce-based solutions. From implementation and customization to automation, reporting, integrations, and team enablement, we build systems that improve visibility and productivity.",
    startingPrice: "Starting from $15/hour",
    timeline: "4 to 8 weeks",
    bestFor:
      "Sales teams, lead tracking, pipeline management, internal operations, and process automation.",
    tags: ["Salesforce", "CRM", "Business Automation", "Integration", "Apex", "LWC"],
    details: [
      "Salesforce implementation and advanced customization",
      "Custom CRM workflows based on business processes",
      "Lead, contact, and pipeline management systems",
      "Automation using Flow, Apex, and process optimization tools",
      "Integration with business tools and reporting systems",
    ],
    packages: [
      {
        name: "CRM Starter",
        price: "$15/hour",
        description:
          "For businesses needing setup, visibility, and core CRM process improvement.",
        features: [
          "CRM setup",
          "Lead & contact management",
          "Basic pipeline customization",
          "Reports & dashboards",
          "User onboarding",
          "Basic automation",
        ],
      },
      {
        name: "Salesforce Growth",
        price: "$35/hour",
        description:
          "For teams that need stronger automation, visibility, and operational structure.",
        features: [
          "Advanced customization",
          "Flow automation",
          "Dashboards and reports",
          "Role-based visibility",
          "Integrations",
          "Training support",
        ],
        popular: true,
      },
      {
        name: "Advanced CRM System",
        price: "$55/hour",
        description:
          "For larger or more custom CRM environments with deep workflows and integrations.",
        features: [
          "Advanced business workflows",
          "Custom development",
          "Integration architecture",
          "Operational analytics",
          "Scalable setup",
          "Long-term support planning",
        ],
      },
    ],
  },
  {
    id: "devops",
    title: "DevOps",
    shortDescription:
      "Deployment automation, CI/CD, infrastructure setup, monitoring, and reliability engineering.",
    fullDescription:
      "We design and implement DevOps systems that improve deployment speed, system reliability, and operational confidence. From CI/CD pipelines to monitoring, backups, infrastructure automation, and disaster recovery, we help teams ship and scale safely.",
    startingPrice: "Starting from $18/hour",
    timeline: "2 weeks to 4 weeks",
    bestFor:
      "CI/CD pipelines, deployments, server setup, infrastructure reliability, and automation.",
    tags: ["Kubernetes", "Jenkins", "AWS", "Docker", "Terraform", "Ansible"],
    details: [
      "CI/CD setup for faster and safer deployments",
      "Dockerized applications and container orchestration",
      "Infrastructure as Code using modern DevOps tooling",
      "Monitoring, logging, and alerting for uptime and health",
      "Disaster recovery, backup strategy, and security hardening",
    ],
    packages: [
      {
        name: "DevOps Starter",
        price: "$18/hour",
        description:
          "For small teams needing reliable deployment and clean environment setup.",
        features: [
          "Basic CI/CD setup",
          "Hosting/server deployment",
          "Environment setup",
          "SSL/domain setup",
          "Basic monitoring",
          "Documentation",
        ],
      },
      {
        name: "DevOps Growth",
        price: "$25/hour",
        description:
          "For stronger automation, monitoring, deployment quality, and system confidence.",
        features: [
          "Advanced CI/CD",
          "Container deployment",
          "Monitoring & alerting",
          "Backup strategy",
          "Security hardening",
          "Infrastructure optimization",
        ],
        popular: true,
      },
      {
        name: "Advanced DevOps",
        price: "$30/hour",
        description:
          "For larger systems requiring scale, orchestration, and resilient infrastructure.",
        features: [
          "Kubernetes/orchestration",
          "Disaster recovery",
          "IaC implementation",
          "Load balancing",
          "Multi-environment workflows",
          "Scalability consultation",
        ],
      },
    ],
  },
  {
    id: "ai-automation",
    title: "AI & Automation",
    shortDescription:
      "AI chatbots, smart assistants, workflow automation, and business process intelligence.",
    fullDescription:
      "We build custom AI and automation systems that help businesses reduce manual work, improve response times, and streamline operations. This includes chatbots, workflow agents, document processing, data extraction, and tailored AI-assisted tools.",
    startingPrice: "Starting from $350",
    timeline: "2 to 4 weeks",
    bestFor:
      "AI chatbots, customer support automation, internal workflows, lead handling, and smart operations.",
    tags: ["GPT", "Claude", "LangChain", "Python", "Automation", "Vector DBs"],
    details: [
      "Custom AI chatbots trained around your business workflows",
      "Automation systems that reduce repetitive manual effort",
      "Document handling and structured data extraction",
      "Dashboard-style insights and intelligent process support",
      "LLM integrations for real business use cases",
    ],
    packages: [
      {
        name: "AI Starter",
        price: "$350 - $500",
        description:
          "For simple AI use cases, lightweight assistants, and basic automation.",
        features: [
          "Basic AI chatbot",
          "Simple automation workflow",
          "FAQ handling",
          "Lead capture flow",
          "Prompt setup",
          "Deployment support",
        ],
      },
      {
        name: "AI Business Automation",
        price: "$500 - $1000",
        description:
          "For useful AI systems connected to actual business operations.",
        features: [
          "Custom chatbot logic",
          "Workflow automation",
          "Data handling integration",
          "Document processing",
          "API integrations",
          "Dashboard/reporting support",
        ],
        popular: true,
      },
      {
        name: "Advanced AI System",
        price: "$1000+",
        description:
          "For advanced AI products with deeper workflows, logic, and integrations.",
        features: [
          "Multi-step AI workflows",
          "Advanced integrations",
          "Custom data pipelines",
          "Role-based access",
          "Scalable architecture",
          "Advanced analytics",
        ],
      },
    ],
  },
  {
    id: "cloud-solutions",
    title: "Cloud Solutions",
    shortDescription:
      "Cloud deployment, migration, optimization, architecture planning, and infrastructure modernization.",
    fullDescription:
      "We help businesses move, optimize, and manage their systems in the cloud. Whether you need a fresh cloud setup, migration support, deployment architecture, or reliability improvements, we design practical cloud solutions around performance and scale.",
    startingPrice: "Starting from $50",
    timeline: "5 days to 3 weeks",
    bestFor:
      "Cloud migration, deployment setup, infrastructure optimization, and hosting modernization.",
    tags: ["AWS", "GCP", "Docker", "Kubernetes", "CI/CD", "Terraform"],
    details: [
      "Cloud architecture design for cost and performance efficiency",
      "Deployment planning and hosting optimization",
      "Database migration and infrastructure modernization",
      "Monitoring, alerting, and incident response readiness",
      "Scalable setup for growth-focused products",
    ],
    packages: [
      {
        name: "Cloud Starter",
        price: "$50/month",
        description:
          "For businesses needing stable hosting, deployment, or migration basics.",
        features: [
          "Basic cloud deployment",
          "Hosting optimization",
          "Environment setup",
          "Migration support",
          "Security basics",
          "Documentation",
        ],
      },
      {
        name: "Cloud Growth",
        price: "$100/month",
        description:
          "For apps needing stronger architecture, performance, and monitoring.",
        features: [
          "Cloud architecture optimization",
          "Container deployment",
          "CI/CD integration",
          "Database migration support",
          "Monitoring & alerts",
          "Performance improvements",
        ],
        popular: true,
      },
      {
        name: "Advanced Cloud Infrastructure",
        price: "$250+/month",
        description:
          "For high-reliability environments needing resilience and scale planning.",
        features: [
          "Advanced architecture",
          "Kubernetes/orchestration",
          "Load balancing strategy",
          "Disaster recovery",
          "Security hardening",
          "Scalable infra roadmap",
        ],
      },
    ],
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    shortDescription:
      "User-centered interface design, wireframes, product flows, and polished digital experiences.",
    fullDescription:
      "We create user-focused interfaces that are clean, modern, and effective. From wireframes and prototypes to design systems and production-ready screens, our work is aimed at clarity, usability, and stronger user engagement.",
    startingPrice: "Starting from $50",
    timeline: "3 days to 2 weeks",
    bestFor:
      "Landing pages, dashboards, product UI, app design, redesigns, and UX improvements.",
    tags: ["Figma", "Design Systems", "Prototyping", "UX Research", "Accessibility"],
    details: [
      "Wireframes, mockups, and interface flows for clear user journeys",
      "Design systems and reusable components for consistency",
      "Responsive layouts for desktop and mobile experiences",
      "Accessibility-aware visual design practices",
      "Conversion-focused and usability-first design decisions",
    ],
    packages: [
      {
        name: "Design Starter",
        price: "$50 - $120",
        description:
          "For quick design work, wireframes, and launch-ready landing page design.",
        features: [
          "Wireframes",
          "UI mockups",
          "Responsive layout design",
          "Basic design system",
          "Prototype basics",
          "Asset handoff",
        ],
      },
      {
        name: "UI/UX Growth",
        price: "$120 - $250",
        description:
          "For more complete interface systems with better usability and consistency.",
        features: [
          "Complete UI screens",
          "User flow planning",
          "Interactive prototype",
          "Reusable design system",
          "Mobile + desktop layouts",
          "Developer handoff",
        ],
        popular: true,
      },
      {
        name: "Advanced Product Design",
        price: "$250+",
        description:
          "For full product design systems and multi-screen digital products.",
        features: [
          "Full product UI/UX",
          "Advanced prototyping",
          "Journey mapping",
          "Complex design systems",
          "Accessibility-focused layouts",
          "Long-term design support",
        ],
      },
    ],
  },
  {
    id: "digital-growth",
    title: "Digital Growth",
    shortDescription:
      "SEO, analytics, conversion optimization, and performance improvement for online growth.",
    fullDescription:
      "We help businesses improve visibility, traffic, and conversion through digital growth services. This includes technical SEO, analytics setup, performance optimization, and ongoing search-focused improvements that support long-term online growth.",
    startingPrice: "Starting from $100/month",
    timeline: "3 to 6 months for strong momentum",
    bestFor:
      "SEO growth, visibility improvement, traffic scaling, analytics, and conversion optimization.",
    tags: ["SEO", "Analytics", "Performance", "Growth", "CRO"],
    details: [
      "Technical SEO audits and implementation guidance",
      "On-page optimization and search-focused improvements",
      "Performance tuning for better Core Web Vitals",
      "Analytics integration and event tracking",
      "Content and keyword strategy for visibility growth",
    ],
    packages: [
      {
        name: "SEO Starter",
        price: "$100/month",
        description:
          "For foundational SEO setup and monthly performance tracking.",
        features: [
          "Keyword research",
          "On-page optimization",
          "Meta updates",
          "Basic technical SEO fixes",
          "Monthly reporting",
          "Search Console review",
        ],
      },
      {
        name: "Growth SEO",
        price: "$200/month",
        description:
          "For businesses wanting stronger ranking improvements and organic growth.",
        features: [
          "Everything in Starter",
          "Competitor analysis",
          "Internal linking strategy",
          "Technical SEO audit",
          "Content recommendations",
          "Priority implementation",
        ],
        popular: true,
      },
      {
        name: "Advanced SEO",
        price: "$300+/month",
        description:
          "For more aggressive SEO execution and strategic long-term growth.",
        features: [
          "Full SEO roadmap",
          "Advanced issue resolution",
          "Niche/location targeting",
          "Conversion-focused SEO pages",
          "Performance tracking",
          "Strategy calls",
        ],
      },
    ],
  },
];

export function getServiceById(id: string) {
  return services.find((service) => service.id === id);
}