import type { SolutionCard, SolutionPageData, SolutionStat } from "./types";
import { enhanceSolutions } from "./contentEnhancements";

const href = (slug: string) => `/solutions/cloud-devops/${slug}`;

const stat = (label: string, value: string, note: string): SolutionStat => ({
  label,
  value,
  note,
});

const card = (
  title: string,
  text: string,
  icon: SolutionCard["icon"],
): SolutionCard => ({
  title,
  text,
  icon,
});

const cloudDevopsSolutionsBase: SolutionPageData[] = [
  {
    slug: "cloud-architecture",
    label: "Cloud Architecture",
    href: href("cloud-architecture"),
    icon: "Cloud",
    eyebrow: "Cloud System Planning",
    headline: "Cloud architecture built for growth, reliability, and control.",
    description:
      "Plan the hosting, compute, database, storage, CDN, security, and deployment setup your product needs.",
    problem:
      "Many products start on whatever hosting is fastest, then struggle with scaling, cost, security, and visibility later.",
    solution:
      "HNX designs a practical cloud architecture with clear services, environments, backups, monitoring, and ownership.",
    impact:
      "Your system becomes easier to deploy, secure, scale, and maintain as usage increases.",
    stats: [
      stat("Environments", "Staged", "Dev, preview, production"),
      stat("Scale", "Planned", "Compute, database, and storage paths"),
      stat("Security", "Layered", "Access, secrets, and network controls"),
      stat("Cost", "Visible", "Right-sized services and monitoring"),
    ],
    problems: [
      card("Unplanned hosting", "Apps grow on fragile hosting setups with unclear limits and ownership.", "Cloud"),
      card("Database pressure", "Data grows without backup, scaling, or performance strategy.", "Database"),
      card("Security gaps", "Secrets, permissions, and production access are handled casually.", "ShieldCheck"),
      card("No visibility", "Teams cannot see health, errors, usage, or cost trends clearly.", "BarChart3"),
    ],
    flow: [
      card("Assess product needs", "Review traffic, data, integrations, security, and uptime requirements.", "SearchCheck"),
      card("Design architecture", "Map compute, database, storage, CDN, queues, and external services.", "Cloud"),
      card("Plan operations", "Define environments, deployments, backups, monitoring, and access rules.", "ServerCog"),
      card("Prepare scaling", "Set the path for performance, cost control, and future growth.", "Rocket"),
    ],
    modules: [
      card("Infrastructure blueprint", "A clear cloud map for app, API, database, storage, CDN, and services.", "Cloud"),
      card("Environment strategy", "Development, preview, staging, and production setup with safe promotion.", "GitBranch"),
      card("Security model", "Access roles, secret handling, headers, permissions, and audit expectations.", "ShieldCheck"),
      card("Operations plan", "Backups, monitoring, alerts, cost checks, and maintenance ownership.", "Activity"),
    ],
    process: [
      card("Discovery", "Understand current stack, business needs, risks, and expected growth.", "SearchCheck"),
      card("Architecture", "Design the cloud services and system boundaries.", "Cloud"),
      card("Setup plan", "Define migration, deployment, monitoring, and backup steps.", "CheckCircle2"),
      card("Handoff", "Document access, environments, runbooks, and maintenance routines.", "FileText"),
    ],
    useCases: [
      card("New SaaS launch", "Design scalable hosting and data layers before public release.", "Rocket"),
      card("Growing web app", "Move from ad hoc hosting to a maintainable cloud setup.", "Cloud"),
      card("CRM and dashboards", "Plan secure backend, database, storage, and reporting services.", "LayoutDashboard"),
      card("Multi-service platform", "Structure APIs, jobs, storage, and integrations cleanly.", "Network"),
    ],
    preview: {
      title: "Cloud Architecture Map",
      subtitle: "Services, environments, backups, monitoring, and access controls.",
      metrics: [
        stat("Services", "12", "Mapped for production"),
        stat("Risk Items", "6", "Prioritized before launch"),
        stat("Cost Bands", "3", "Startup, growth, scale"),
      ],
      rows: ["Production app service", "Managed database", "CDN and storage layer", "Backup and monitoring plan"],
    },
    ctaTitle: "Need a cloud setup that will not collapse under growth?",
    ctaText:
      "We can design the architecture, deployment model, and operations plan your system needs.",
  },
  {
    slug: "server-setup",
    label: "Server Setup",
    href: href("server-setup"),
    icon: "ServerCog",
    eyebrow: "Production Server Setup",
    headline: "Server environments configured for secure, stable delivery.",
    description:
      "Set up application servers, domains, SSL, environment variables, process managers, logs, access, and deployment routines.",
    problem:
      "A server can run today and still be hard to secure, update, monitor, or recover when something goes wrong.",
    solution:
      "HNX configures production-ready servers with access controls, process health, logs, SSL, deployment paths, and documentation.",
    impact:
      "Your app runs on a cleaner foundation with fewer surprises during updates, traffic spikes, and maintenance.",
    stats: [
      stat("SSL", "Ready", "Secure domains and certificates"),
      stat("Access", "Controlled", "Users, keys, and permissions"),
      stat("Logs", "Visible", "Runtime, error, and deploy logs"),
      stat("Deploy", "Repeatable", "Documented release steps"),
    ],
    problems: [
      card("Manual setup", "Servers are configured once and then become impossible to reproduce.", "ServerCog"),
      card("Access risk", "Shared credentials and open permissions create unnecessary security exposure.", "ShieldCheck"),
      card("No process health", "Apps fail silently when services stop or memory runs out.", "Activity"),
      card("Messy deploys", "Updates require manual steps that are easy to forget.", "GitBranch"),
    ],
    flow: [
      card("Provision", "Prepare server, runtime, domains, SSL, firewall, and base packages.", "Cloud"),
      card("Secure", "Configure keys, users, permissions, secrets, and access boundaries.", "ShieldCheck"),
      card("Run app", "Set up processes, environment variables, reverse proxy, and logs.", "ServerCog"),
      card("Document", "Create handoff notes for deployment, restarts, backups, and support.", "FileText"),
    ],
    modules: [
      card("Runtime setup", "Node, containers, process manager, reverse proxy, SSL, and domain routing.", "ServerCog"),
      card("Security hardening", "SSH keys, firewall rules, environment secrets, and user permissions.", "ShieldCheck"),
      card("Logging setup", "App logs, server logs, deploy logs, and error visibility.", "Activity"),
      card("Deployment routine", "Repeatable steps for updates, rollbacks, and maintenance windows.", "GitBranch"),
    ],
    process: [
      card("Server audit", "Review hosting, app needs, domains, access, and runtime requirements.", "SearchCheck"),
      card("Configuration", "Set up server packages, SSL, reverse proxy, and app services.", "ServerCog"),
      card("Security pass", "Limit access, protect secrets, and close unnecessary exposure.", "ShieldCheck"),
      card("Handoff", "Share runbook, restart steps, and maintenance guidance.", "FileText"),
    ],
    useCases: [
      card("Node app hosting", "Run APIs, dashboards, portals, and web apps on a managed server.", "Code2"),
      card("Legacy migration", "Move from fragile hosting to a documented production server.", "Cloud"),
      card("Admin systems", "Host internal dashboards with controlled access and logging.", "LayoutDashboard"),
      card("API backend", "Serve secure endpoints with logs, SSL, and process monitoring.", "Network"),
    ],
    preview: {
      title: "Server Readiness Panel",
      subtitle: "Runtime status, SSL, access, logs, and deployment health.",
      metrics: [
        stat("Uptime", "99.9%", "Target configuration"),
        stat("Open Ports", "Minimal", "Firewall reviewed"),
        stat("Deploy Time", "8m", "Documented update path"),
      ],
      rows: ["SSL certificate active", "Node service healthy", "Error logs connected", "Deploy runbook completed"],
    },
    ctaTitle: "Get your production server set up the right way.",
    ctaText:
      "We can configure, secure, document, and stabilize the server environment behind your product.",
  },
  {
    slug: "database-storage",
    label: "Database & Storage",
    href: href("database-storage"),
    icon: "Database",
    eyebrow: "Data Layer Setup",
    headline: "Databases and storage organized for speed, safety, and scale.",
    description:
      "Design and configure databases, file storage, backups, access rules, indexing, migrations, and retention policies.",
    problem:
      "Data layers often grow without clear structure, backups, access control, or performance planning.",
    solution:
      "HNX sets up database and storage systems with schema clarity, permissions, backup routines, and operational visibility.",
    impact:
      "Your product can store, retrieve, protect, and recover business data with more confidence.",
    stats: [
      stat("Backups", "Scheduled", "Database and file recovery paths"),
      stat("Indexes", "Tuned", "Performance for core queries"),
      stat("Access", "Scoped", "Roles, keys, and service permissions"),
      stat("Storage", "Organized", "Files, metadata, and retention rules"),
    ],
    problems: [
      card("Slow queries", "Important screens become sluggish as records grow.", "Activity"),
      card("Backup uncertainty", "Teams do not know what can be recovered or how quickly.", "ShieldCheck"),
      card("File clutter", "Uploads lack naming, metadata, access rules, and lifecycle policies.", "FileText"),
      card("Schema drift", "Data structure changes without migration discipline or documentation.", "Database"),
    ],
    flow: [
      card("Model data", "Define entities, relationships, retention needs, and reporting requirements.", "Database"),
      card("Set permissions", "Control app, admin, user, and service access to sensitive data.", "ShieldCheck"),
      card("Optimize performance", "Create indexes, query patterns, and storage rules for common use.", "Activity"),
      card("Protect recovery", "Configure backups, restore checks, and file storage safeguards.", "CheckCircle2"),
    ],
    modules: [
      card("Database design", "Schema, collections, tables, relationships, indexes, and migration paths.", "Database"),
      card("File storage", "Upload structure, metadata, permissions, folders, and lifecycle rules.", "FileText"),
      card("Backup system", "Scheduled backups, restore procedures, retention policy, and monitoring.", "ShieldCheck"),
      card("Performance review", "Query optimization, indexing, connection usage, and growth planning.", "Activity"),
    ],
    process: [
      card("Data audit", "Review current records, storage, risks, performance, and access patterns.", "SearchCheck"),
      card("Design", "Create the right data model and storage structure for the business.", "Database"),
      card("Configure", "Set up backups, indexes, access, storage rules, and migration steps.", "ServerCog"),
      card("Validate", "Test recovery, performance, permissions, and key user flows.", "CheckCircle2"),
    ],
    useCases: [
      card("SaaS platform data", "Users, billing, roles, usage, subscriptions, and analytics.", "LayoutDashboard"),
      card("CRM records", "Leads, customers, deals, notes, files, activities, and reports.", "Users"),
      card("Document systems", "Uploads, metadata, permissions, versioning, and review status.", "FileText"),
      card("Analytics storage", "Events, dashboards, summaries, exports, and retention.", "BarChart3"),
    ],
    preview: {
      title: "Data Operations Console",
      subtitle: "Database health, storage usage, backups, and access checks.",
      metrics: [
        stat("Query Health", "96%", "Core screens optimized"),
        stat("Backup Age", "4h", "Latest verified backup"),
        stat("Storage Used", "68GB", "With lifecycle rules"),
      ],
      rows: ["Customer index optimized", "Daily backup verified", "Private file rule enabled", "Schema migration documented"],
    },
    ctaTitle: "Give your data layer the structure it deserves.",
    ctaText:
      "We can organize the databases, storage, backups, and access controls behind your product.",
  },
  {
    slug: "cicd-pipeline",
    label: "CI/CD Pipeline",
    href: href("cicd-pipeline"),
    icon: "GitBranch",
    eyebrow: "Deployment Automation",
    headline: "CI/CD pipelines that make releases safer and faster.",
    description:
      "Automate checks, builds, tests, previews, deployments, environment handling, and rollback routines.",
    problem:
      "Manual releases are slow, stressful, inconsistent, and risky when multiple people touch the same product.",
    solution:
      "HNX sets up CI/CD pipelines with branch rules, previews, test gates, deploy workflows, logs, and rollback paths.",
    impact:
      "Teams ship more confidently with fewer broken releases and clearer visibility into each deployment.",
    stats: [
      stat("Checks", "Automated", "Lint, test, type, and build stages"),
      stat("Previews", "Per branch", "Review changes before production"),
      stat("Deploys", "Controlled", "Staging and production workflows"),
      stat("Rollback", "Planned", "Safer recovery from bad releases"),
    ],
    problems: [
      card("Manual release steps", "Deploys depend on memory and local machine state.", "GitBranch"),
      card("Broken production", "Changes ship without passing consistent checks.", "ShieldCheck"),
      card("No preview flow", "Stakeholders review only after production deployment.", "LayoutDashboard"),
      card("Rollback panic", "Teams do not know how to recover from a failed release quickly.", "Activity"),
    ],
    flow: [
      card("Commit", "Code changes trigger automated checks and preview workflows.", "GitBranch"),
      card("Validate", "Run lint, tests, build, type checks, and security-sensitive checks.", "CheckCircle2"),
      card("Deploy", "Promote approved builds to staging or production environments.", "Rocket"),
      card("Monitor", "Review logs, alerts, and rollback options after release.", "Activity"),
    ],
    modules: [
      card("Build workflow", "Automated install, lint, type check, test, build, and artifact steps.", "Code2"),
      card("Preview deployments", "Branch-based previews for QA, clients, and internal review.", "LayoutDashboard"),
      card("Environment controls", "Secrets, variables, branch rules, and release approvals.", "ShieldCheck"),
      card("Release runbook", "Rollback steps, logs, ownership, and hotfix process.", "FileText"),
    ],
    process: [
      card("Repo audit", "Review branches, scripts, environments, and current deployment process.", "SearchCheck"),
      card("Pipeline design", "Select checks, triggers, previews, approvals, and deploy targets.", "Workflow"),
      card("Implementation", "Configure GitHub Actions, Vercel, Docker, or cloud workflows.", "GitBranch"),
      card("Release drill", "Test successful deploy, failed deploy, and rollback paths.", "Activity"),
    ],
    useCases: [
      card("Next.js products", "Preview branches and production deploys with automated checks.", "Code2"),
      card("API services", "Build, test, deploy, and monitor backend releases.", "ServerCog"),
      card("SaaS teams", "Protect production while multiple developers ship features.", "Users"),
      card("Client projects", "Give stakeholders preview links before final release.", "LayoutDashboard"),
    ],
    preview: {
      title: "Deployment Pipeline",
      subtitle: "Checks, previews, production deploys, and rollback state.",
      metrics: [
        stat("Deploy Time", "6m", "From merge to production"),
        stat("Checks", "8", "Automated gates"),
        stat("Failures Caught", "12", "Before production this month"),
      ],
      rows: ["Type check passed", "Preview deployed", "Production approval waiting", "Rollback snapshot ready"],
    },
    ctaTitle: "Ship updates without turning every release into a gamble.",
    ctaText:
      "We can set up CI/CD pipelines that protect production while helping your team move faster.",
  },
  {
    slug: "monitoring-logs",
    label: "Monitoring & Logs",
    href: href("monitoring-logs"),
    icon: "Activity",
    eyebrow: "System Visibility",
    headline: "Monitoring and logs that reveal issues before customers complain.",
    description:
      "Track uptime, errors, performance, jobs, APIs, logs, alerts, and operational signals across your product.",
    problem:
      "Without monitoring, teams learn about failures from customers, lost revenue, or silent data problems.",
    solution:
      "HNX configures health checks, logs, alerts, dashboards, and incident routines for your app and infrastructure.",
    impact:
      "You get earlier warning, faster debugging, and better confidence in production health.",
    stats: [
      stat("Uptime", "Tracked", "Public and internal endpoints"),
      stat("Errors", "Grouped", "Actionable debugging context"),
      stat("Alerts", "Routed", "Notify the right owner"),
      stat("Logs", "Searchable", "App, API, server, and jobs"),
    ],
    problems: [
      card("Silent downtime", "Endpoints fail without alerting the people responsible.", "Activity"),
      card("Hard debugging", "Errors are scattered across consoles, servers, and user reports.", "SearchCheck"),
      card("Slow incidents", "Teams do not know severity, owner, or next action during outages.", "Users"),
      card("No performance view", "Slow pages, APIs, and jobs are not visible until users complain.", "BarChart3"),
    ],
    flow: [
      card("Measure health", "Track uptime, latency, API success, jobs, and background processes.", "Activity"),
      card("Collect logs", "Centralize app, server, deploy, and error logs with useful metadata.", "FileText"),
      card("Alert owners", "Route critical issues to the right channel with severity context.", "Bell"),
      card("Review trends", "Use dashboards to spot recurring failures and performance issues.", "BarChart3"),
    ],
    modules: [
      card("Uptime checks", "Health checks for web pages, APIs, jobs, and critical customer flows.", "Activity"),
      card("Error tracking", "Grouped errors with context, frequency, releases, and user impact.", "SearchCheck"),
      card("Alert routing", "Severity rules, owners, notification channels, and escalation paths.", "Bell"),
      card("Ops dashboard", "Status, response time, error rates, logs, and recent incidents.", "LayoutDashboard"),
    ],
    process: [
      card("Signal selection", "Choose what must be watched for uptime, performance, and correctness.", "BarChart3"),
      card("Tool setup", "Connect uptime checks, error tracking, logs, and alert destinations.", "Network"),
      card("Incident rules", "Define severity, ownership, and response expectations.", "ShieldCheck"),
      card("Review cadence", "Use trends to reduce recurring failures and improve stability.", "Activity"),
    ],
    useCases: [
      card("SaaS monitoring", "Track app health, API errors, jobs, and customer-impacting issues.", "LayoutDashboard"),
      card("Ecommerce uptime", "Watch checkout, payments, pages, and order flows.", "CreditCard"),
      card("CRM operations", "Monitor lead capture, automations, reports, and integrations.", "Workflow"),
      card("API platforms", "Track latency, error rates, auth failures, and webhook delivery.", "Network"),
    ],
    preview: {
      title: "Production Health Center",
      subtitle: "Uptime, errors, latency, logs, and alerts in one operations view.",
      metrics: [
        stat("Uptime", "99.94%", "Last 30 days"),
        stat("Error Rate", "0.18%", "Grouped by release"),
        stat("Alerts", "4", "Actioned this week"),
      ],
      rows: ["Checkout latency spike", "API auth failures grouped", "Daily job succeeded", "Webhook retry warning"],
    },
    ctaTitle: "See production clearly before issues become expensive.",
    ctaText:
      "We can connect monitoring, logs, and alerts around the parts of your system that matter most.",
  },
  {
    slug: "backup-recovery",
    label: "Backup & Recovery",
    href: href("backup-recovery"),
    icon: "ShieldCheck",
    eyebrow: "Recovery Planning",
    headline: "Backup and recovery systems for when things go wrong.",
    description:
      "Set up backup schedules, retention, restore procedures, recovery checks, file protection, and incident runbooks.",
    problem:
      "Many businesses assume backups exist until a database change, deletion, or outage proves recovery was never tested.",
    solution:
      "HNX creates backup and recovery routines for databases, files, configurations, and operational documentation.",
    impact:
      "You reduce the risk of permanent data loss and improve your ability to recover from mistakes or outages.",
    stats: [
      stat("Backups", "Scheduled", "Database, files, and configuration"),
      stat("Retention", "Defined", "Daily, weekly, and monthly rules"),
      stat("Restore", "Tested", "Recovery drills and documentation"),
      stat("Incidents", "Planned", "Clear steps and owners"),
    ],
    problems: [
      card("Untested backups", "Backups exist, but nobody has confirmed they can be restored.", "ShieldCheck"),
      card("No retention policy", "Teams keep too little, too much, or the wrong backup history.", "FileText"),
      card("Manual recovery", "Incidents become stressful because owners and steps are unclear.", "Users"),
      card("File risk", "Uploads, documents, and assets are not protected like the database.", "Database"),
    ],
    flow: [
      card("Identify assets", "List databases, uploads, environment config, reports, and critical records.", "Database"),
      card("Set schedule", "Define backup frequency, storage location, retention, and access.", "CheckCircle2"),
      card("Test restore", "Validate recovery steps with real backup samples and timing.", "Activity"),
      card("Document response", "Create runbooks for deletion, corruption, outage, and migration scenarios.", "FileText"),
    ],
    modules: [
      card("Backup routines", "Scheduled database, file, and configuration backups with retention rules.", "Database"),
      card("Restore runbooks", "Step-by-step recovery paths with owners and estimated time.", "FileText"),
      card("Recovery checks", "Regular restore validation and backup health alerts.", "ShieldCheck"),
      card("Incident response", "Practical guidance for outage, data loss, deletion, and migration events.", "Activity"),
    ],
    process: [
      card("Risk audit", "Review data sources, backup gaps, access, and recovery expectations.", "SearchCheck"),
      card("Backup setup", "Configure schedules, storage, retention, and protection rules.", "ServerCog"),
      card("Restore test", "Run a recovery drill and document the actual process.", "CheckCircle2"),
      card("Maintenance", "Monitor backup health and update runbooks as systems change.", "Activity"),
    ],
    useCases: [
      card("Database recovery", "Restore after accidental deletion, migration error, or data corruption.", "Database"),
      card("File recovery", "Protect uploads, documents, media, and generated reports.", "FileText"),
      card("Migration safety", "Create recovery points before large infrastructure or schema changes.", "GitBranch"),
      card("Compliance readiness", "Document retention, recovery checks, and access controls.", "ShieldCheck"),
    ],
    preview: {
      title: "Recovery Readiness Board",
      subtitle: "Backup freshness, restore tests, retention, and incident runbooks.",
      metrics: [
        stat("Latest Backup", "2h", "Database snapshot age"),
        stat("Restore Test", "Passed", "Last recovery drill"),
        stat("Retention", "30d", "Daily recovery points"),
      ],
      rows: ["Database snapshot completed", "File backup verified", "Restore runbook updated", "Access review passed"],
    },
    ctaTitle: "Do not wait until recovery is urgent to plan it.",
    ctaText:
      "We can set up backups, restore testing, and recovery documentation for your critical systems.",
  },
  {
    slug: "maintenance-support",
    label: "Maintenance Support",
    href: href("maintenance-support"),
    icon: "Headphones",
    eyebrow: "Ongoing Product Care",
    headline: "Maintenance support that keeps your product healthy after launch.",
    description:
      "Handle updates, bug fixes, monitoring reviews, performance checks, security patches, backups, and monthly reporting.",
    problem:
      "Products degrade after launch when nobody owns updates, support issues, monitoring, and small improvements.",
    solution:
      "HNX provides structured maintenance support with response routines, health checks, patching, and improvement tracking.",
    impact:
      "Your system remains stable, secure, and easier to improve without constant emergency work.",
    stats: [
      stat("Support", "Ongoing", "Bug fixes and minor improvements"),
      stat("Patches", "Managed", "Dependencies and security updates"),
      stat("Health", "Reviewed", "Uptime, errors, performance, backups"),
      stat("Reports", "Monthly", "Clear maintenance summary"),
    ],
    problems: [
      card("Post-launch drift", "Small bugs, outdated packages, and performance issues accumulate.", "Activity"),
      card("No ownership", "Teams do not know who handles fixes, alerts, and updates.", "Users"),
      card("Reactive support", "Issues are handled only after customers complain.", "Headphones"),
      card("Missing reports", "Owners cannot see what changed, what broke, or what improved.", "FileText"),
    ],
    flow: [
      card("Monitor", "Review uptime, errors, logs, backups, and performance signals.", "Activity"),
      card("Maintain", "Fix bugs, update dependencies, apply patches, and improve stability.", "ServerCog"),
      card("Support", "Handle reported issues with clear priority and status communication.", "Headphones"),
      card("Report", "Summarize work completed, risks found, and recommended improvements.", "FileText"),
    ],
    modules: [
      card("Bug fix queue", "Triage, prioritize, resolve, and document product issues.", "CheckCircle2"),
      card("Security updates", "Patch dependencies, review access, and monitor exposure.", "ShieldCheck"),
      card("Performance checks", "Review speed, logs, errors, and production health regularly.", "Activity"),
      card("Monthly report", "A clear summary of fixes, updates, risks, and next recommendations.", "FileText"),
    ],
    process: [
      card("Onboard system", "Review stack, access, deployment, monitoring, and support needs.", "SearchCheck"),
      card("Set cadence", "Define response priorities, update windows, and reporting rhythm.", "CheckCircle2"),
      card("Maintain", "Run updates, fixes, checks, and small improvements.", "ServerCog"),
      card("Review", "Share monthly maintenance outcomes and future recommendations.", "FileText"),
    ],
    useCases: [
      card("SaaS maintenance", "Keep dashboards, APIs, billing, and user systems stable.", "LayoutDashboard"),
      card("Website support", "Fix issues, update dependencies, improve speed, and protect uptime.", "Code2"),
      card("CRM support", "Maintain workflows, reports, permissions, and integrations.", "Workflow"),
      card("App support", "Handle backend, store updates, notifications, and user issues.", "Smartphone"),
    ],
    preview: {
      title: "Maintenance Health Report",
      subtitle: "Issues, updates, uptime, patches, and recommendations.",
      metrics: [
        stat("Issues Closed", "18", "This month"),
        stat("Uptime", "99.91%", "Tracked endpoints"),
        stat("Updates", "11", "Dependencies and patches"),
      ],
      rows: ["Checkout bug fixed", "Security patch applied", "Backup health verified", "Performance issue queued"],
    },
    ctaTitle: "Keep your product improving after launch.",
    ctaText:
      "We can support, maintain, monitor, and improve the systems your business depends on.",
  },
];

export const cloudDevopsSolutions = enhanceSolutions("cloud-devops", cloudDevopsSolutionsBase);
