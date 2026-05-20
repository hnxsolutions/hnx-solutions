"use client";

import { useState, type CSSProperties } from "react";
import type { ServiceItem } from "@/data/services";
import { ArrowRight, CheckCircle2, RotateCcw, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import ServiceSectionHeading from "@/components/services/shared/ServiceSectionHeading";
import { getServicePageDetails } from "@/components/services/shared/servicePageDetails";

type ServiceProcessProps = {
  service: ServiceItem;
};

type JourneyKnowledge = {
  label: string;
  headline: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  points: string[];
};

const processPhotos = {
  strategy:
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=760&q=85",
  ux:
    "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=760&q=85",
  code:
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=760&q=85",
  backend:
    "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=760&q=85",
  launch:
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=760&q=85",
  dashboard:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=760&q=85",
  automation:
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=760&q=85",
};

const serviceJourneyKnowledge: Record<string, JourneyKnowledge[]> = {
  "web-development": [
    {
      label: "Audience Strategy",
      headline: "Define who the website must convince.",
      description:
        "We clarify target users, trust gaps, primary offers, page goals, and conversion actions.",
      imageUrl: processPhotos.strategy,
      imageAlt: "Team planning website strategy",
      points: ["Audience intent", "Offer clarity", "Primary CTAs"],
    },
    {
      label: "Sitemap Flow",
      headline: "Plan the page structure before design.",
      description:
        "We map pages, sections, content order, internal links, and SEO-friendly hierarchy.",
      imageUrl: processPhotos.ux,
      imageAlt: "Website sitemap and interface planning",
      points: ["Page order", "Section flow", "SEO structure"],
    },
    {
      label: "Premium UI Build",
      headline: "Turn the structure into polished pages.",
      description:
        "We build responsive sections, forms, cards, interactions, and brand-consistent layouts.",
      imageUrl: processPhotos.code,
      imageAlt: "Developer building website UI",
      points: ["Responsive UI", "Lead forms", "Polished sections"],
    },
    {
      label: "Speed and SEO",
      headline: "Tune the technical foundation.",
      description:
        "We optimize metadata, schema basics, accessibility, performance, and page behavior.",
      imageUrl: processPhotos.dashboard,
      imageAlt: "Website performance and SEO dashboard",
      points: ["Performance", "Metadata", "Schema basics"],
    },
    {
      label: "QA and Launch",
      headline: "Prepare the site for live traffic.",
      description:
        "We test forms, links, responsiveness, analytics, deployment, and post-launch handoff.",
      imageUrl: processPhotos.launch,
      imageAlt: "Website launch preparation",
      points: ["Form testing", "Analytics check", "Deployment"],
    },
  ],

  "mobile-app-development": [
    {
      label: "Journey Mapping",
      headline: "Define the product path.",
      description:
        "We map app users, actions, navigation, and the shortest useful path to value.",
      imageUrl: processPhotos.strategy,
      imageAlt: "Team planning mobile app journey",
      points: ["User roles", "Screen flow", "Launch scope"],
    },
    {
      label: "UX Prototype",
      headline: "Make the app visible.",
      description:
        "We design mobile flows, core screens, states, and interactions before deep development.",
      imageUrl: processPhotos.ux,
      imageAlt: "Designer working on mobile app prototype",
      points: ["App screens", "Clickable flow", "UI states"],
    },
    {
      label: "Backend System",
      headline: "Build the core engine.",
      description:
        "We structure APIs, auth, data, payments, notifications, and admin workflows.",
      imageUrl: processPhotos.backend,
      imageAlt: "Developer working on backend code",
      points: ["API structure", "Data model", "Secure auth"],
    },
    {
      label: "Build and QA",
      headline: "Turn plans into product.",
      description:
        "We develop screens, validate behavior, test devices, and tune performance.",
      imageUrl: processPhotos.code,
      imageAlt: "Software developer building a mobile app",
      points: ["App build", "QA testing", "Performance polish"],
    },
    {
      label: "Store Ready",
      headline: "Prepare for release.",
      description:
        "We prepare release builds, listings, privacy notes, and launch support.",
      imageUrl: processPhotos.launch,
      imageAlt: "Team preparing app release",
      points: ["Release assets", "Final checklist", "Launch support"],
    },
  ],

  "custom-crm-systems": [
    {
      label: "Workflow Audit",
      headline: "Map how your team actually works.",
      description:
        "We identify lead sources, stages, roles, follow-ups, reporting needs, and bottlenecks.",
      imageUrl: processPhotos.strategy,
      imageAlt: "CRM workflow planning session",
      points: ["Lead sources", "Sales stages", "Team roles"],
    },
    {
      label: "Module Planning",
      headline: "Convert operations into CRM modules.",
      description:
        "We define entities, fields, statuses, permissions, automation rules, and dashboards.",
      imageUrl: processPhotos.dashboard,
      imageAlt: "CRM module planning on dashboard",
      points: ["CRM entities", "Permissions", "Dashboards"],
    },
    {
      label: "UX and Data Model",
      headline: "Design screens your team can use daily.",
      description:
        "We shape practical CRM screens and data structures around real team behavior.",
      imageUrl: processPhotos.ux,
      imageAlt: "CRM interface design",
      points: ["Pipeline UI", "Data model", "Daily actions"],
    },
    {
      label: "Build and Automate",
      headline: "Create the CRM operating system.",
      description:
        "We implement modules, reports, reminders, integrations, and workflow automation.",
      imageUrl: processPhotos.code,
      imageAlt: "Developer building CRM system",
      points: ["CRM modules", "Reminders", "Reports"],
    },
    {
      label: "Training and Rollout",
      headline: "Move the team into the CRM.",
      description:
        "We test real scenarios, migrate starter data, train users, and refine adoption.",
      imageUrl: processPhotos.launch,
      imageAlt: "Team training for CRM launch",
      points: ["Scenario testing", "Starter data", "Team training"],
    },
  ],

  "saas-development": [
    {
      label: "Product Blueprint",
      headline: "Define the MVP and business model.",
      description:
        "We clarify users, jobs-to-be-done, pricing model, and first-release boundaries.",
      imageUrl: processPhotos.strategy,
      imageAlt: "SaaS product blueprint planning",
      points: ["MVP scope", "User roles", "Pricing model"],
    },
    {
      label: "Data and Roles",
      headline: "Design the SaaS foundation.",
      description:
        "We plan entities, permissions, billing states, feature gates, and workflow rules.",
      imageUrl: processPhotos.backend,
      imageAlt: "SaaS backend architecture planning",
      points: ["Data model", "Role access", "Billing states"],
    },
    {
      label: "Dashboard UX",
      headline: "Shape the product experience.",
      description:
        "We design onboarding, core actions, admin screens, reporting, and usage views.",
      imageUrl: processPhotos.dashboard,
      imageAlt: "SaaS dashboard design",
      points: ["Onboarding", "Admin views", "Reports"],
    },
    {
      label: "Build and Integrate",
      headline: "Connect product, billing, and analytics.",
      description:
        "We implement frontend, backend, auth, billing, analytics, and notifications.",
      imageUrl: processPhotos.code,
      imageAlt: "SaaS development and integration",
      points: ["Auth", "Billing", "Analytics"],
    },
    {
      label: "Launch and Iterate",
      headline: "Release the SaaS with a roadmap.",
      description:
        "We handle QA, deployment, onboarding support, and post-launch improvement planning.",
      imageUrl: processPhotos.launch,
      imageAlt: "SaaS launch planning",
      points: ["QA", "Production deploy", "Roadmap"],
    },
  ],

  "ai-automation": [
    {
      label: "Opportunity Audit",
      headline: "Find where AI will save real time.",
      description:
        "We identify repetitive decisions with enough value and structure for AI support.",
      imageUrl: processPhotos.strategy,
      imageAlt: "AI workflow opportunity planning",
      points: ["Repeat tasks", "Decision points", "ROI areas"],
    },
    {
      label: "Prompt and Data Design",
      headline: "Prepare context the AI can trust.",
      description:
        "We define knowledge sources, prompt patterns, examples, and output rules.",
      imageUrl: processPhotos.automation,
      imageAlt: "AI prompt and workflow design",
      points: ["Prompt rules", "Data context", "Output format"],
    },
    {
      label: "Workflow Build",
      headline: "Connect AI to real business actions.",
      description:
        "We connect AI steps to forms, CRM records, documents, messages, and dashboards.",
      imageUrl: processPhotos.code,
      imageAlt: "AI automation workflow build",
      points: ["AI steps", "CRM updates", "Message drafts"],
    },
    {
      label: "Guardrail Testing",
      headline: "Keep automation controlled.",
      description:
        "We test edge cases, review points, response quality, and fallback behavior.",
      imageUrl: processPhotos.backend,
      imageAlt: "AI guardrail testing",
      points: ["Review points", "Fallbacks", "Quality checks"],
    },
    {
      label: "Rollout and Tuning",
      headline: "Improve the workflow with real usage.",
      description:
        "We launch carefully, measure usefulness, and refine prompts or actions over time.",
      imageUrl: processPhotos.launch,
      imageAlt: "AI automation rollout",
      points: ["Soft launch", "Usage review", "Prompt tuning"],
    },
  ],

  "workflow-automation": [
    {
      label: "Process Capture",
      headline: "Document the current manual flow.",
      description:
        "We map owners, triggers, exceptions, delays, and handoff points.",
      imageUrl: processPhotos.strategy,
      imageAlt: "Workflow process capture",
      points: ["Owners", "Triggers", "Handoffs"],
    },
    {
      label: "Rule Design",
      headline: "Convert steps into automation logic.",
      description:
        "We define triggers, conditions, actions, delays, fallback paths, and audit needs.",
      imageUrl: processPhotos.automation,
      imageAlt: "Automation rule design",
      points: ["Conditions", "Actions", "Fallbacks"],
    },
    {
      label: "Tool Connection",
      headline: "Connect the systems involved.",
      description:
        "We connect CRM, forms, sheets, email, WhatsApp, or custom system events.",
      imageUrl: processPhotos.backend,
      imageAlt: "Workflow tool integration",
      points: ["CRM", "Forms", "Notifications"],
    },
    {
      label: "Exception Testing",
      headline: "Make the automation reliable.",
      description:
        "We test loops, delays, edge cases, permissions, and error handling.",
      imageUrl: processPhotos.code,
      imageAlt: "Automation testing",
      points: ["Edge cases", "Error handling", "Safe loops"],
    },
    {
      label: "Monitor and Improve",
      headline: "Track workflow health after launch.",
      description:
        "We watch stuck records, overdue work, completion trends, and team adoption.",
      imageUrl: processPhotos.dashboard,
      imageAlt: "Workflow monitoring dashboard",
      points: ["Flow health", "Overdue items", "Throughput"],
    },
  ],

  "api-development": [
    {
      label: "Contract Planning",
      headline: "Define what every API must return.",
      description:
        "We map consumers, endpoints, payloads, authentication, errors, and integration goals.",
      imageUrl: processPhotos.strategy,
      imageAlt: "API contract planning",
      points: ["Endpoints", "Payloads", "Error states"],
    },
    {
      label: "Backend Architecture",
      headline: "Set up the API foundation.",
      description:
        "We design data models, services, validation, permissions, and clean error patterns.",
      imageUrl: processPhotos.backend,
      imageAlt: "Backend API architecture planning",
      points: ["Data models", "Validation", "Permissions"],
    },
    {
      label: "Implementation",
      headline: "Build reliable API endpoints.",
      description:
        "We implement REST or GraphQL APIs, webhooks, background jobs, and integration adapters.",
      imageUrl: processPhotos.code,
      imageAlt: "API implementation by developer",
      points: ["REST or GraphQL", "Webhooks", "Jobs"],
    },
    {
      label: "Docs and Testing",
      headline: "Make the API usable by teams.",
      description:
        "We create examples, auth notes, test responses, secure flows, and edge-case checks.",
      imageUrl: processPhotos.dashboard,
      imageAlt: "API documentation and testing dashboard",
      points: ["Examples", "Auth notes", "Test cases"],
    },
    {
      label: "Deploy and Monitor",
      headline: "Release with visibility.",
      description:
        "We deploy the API with logs, environment configuration, and health checks.",
      imageUrl: processPhotos.launch,
      imageAlt: "API deployment and monitoring",
      points: ["Deployment", "Logs", "Health checks"],
    },
  ],

  "integration-services": [
    {
      label: "Tool Audit",
      headline: "Find every system that must sync.",
      description:
        "We identify source apps, destination apps, data owners, events, and sync priorities.",
      imageUrl: processPhotos.strategy,
      imageAlt: "Integration tool audit",
      points: ["Source tools", "Destinations", "Sync priority"],
    },
    {
      label: "Field Mapping",
      headline: "Decide how data should move.",
      description:
        "We map fields, statuses, IDs, payment states, customer records, and transform rules.",
      imageUrl: processPhotos.dashboard,
      imageAlt: "Field mapping and data flow dashboard",
      points: ["Field rules", "Status mapping", "Transforms"],
    },
    {
      label: "Connector Build",
      headline: "Connect APIs, webhooks, and events.",
      description:
        "We build connectors for CRMs, forms, payments, WhatsApp, sheets, dashboards, or custom tools.",
      imageUrl: processPhotos.backend,
      imageAlt: "Integration connector development",
      points: ["API connectors", "Webhooks", "Event sync"],
    },
    {
      label: "Error Handling",
      headline: "Make sync failures traceable.",
      description:
        "We add logs, retries, alerts, fallback rules, and ownership for failed events.",
      imageUrl: processPhotos.code,
      imageAlt: "Integration error handling setup",
      points: ["Logs", "Retries", "Alerts"],
    },
    {
      label: "Monitor Sync Health",
      headline: "Keep integrations reliable after launch.",
      description:
        "We monitor failures, stale data, duplicate records, and reporting freshness.",
      imageUrl: processPhotos.dashboard,
      imageAlt: "Integration monitoring dashboard",
      points: ["Sync health", "Fresh data", "Duplicate checks"],
    },
  ],

  "devops-deployment": [
    {
      label: "Deployment Audit",
      headline: "Map release risks first.",
      description:
        "We review hosting, branches, secrets, build steps, domains, and current deployment pain points.",
      imageUrl: processPhotos.code,
      imageAlt: "Developer reviewing deployment pipeline on a laptop",
      points: ["Release risks", "Environment map", "Access review"],
    },
    {
      label: "CI/CD Pipeline",
      headline: "Automate build and deploy.",
      description:
        "We configure Git-based build checks, deploy triggers, preview environments, and production release rules.",
      imageUrl: processPhotos.backend,
      imageAlt: "Code editor showing backend pipeline configuration",
      points: ["Build checks", "Deploy triggers", "Preview deploys"],
    },
    {
      label: "Observability Layer",
      headline: "Make production visible.",
      description:
        "We add logs, uptime checks, health signals, and alert paths so issues are easier to catch.",
      imageUrl: processPhotos.dashboard,
      imageAlt: "Technical team monitoring application health dashboards",
      points: ["Readable logs", "Health checks", "Alert routing"],
    },
    {
      label: "Rollback Safety",
      headline: "Test recovery before launch.",
      description:
        "We document rollback steps, validate release checkpoints, and prepare safer recovery behavior.",
      imageUrl: processPhotos.code,
      imageAlt: "Software release workflow being tested before launch",
      points: ["Rollback steps", "Release gates", "Recovery test"],
    },
    {
      label: "Handoff System",
      headline: "Leave the release system clear.",
      description:
        "We hand over environment notes, deployment docs, runbooks, and support guidance for future releases.",
      imageUrl: processPhotos.launch,
      imageAlt: "Team handing off a completed deployment plan",
      points: ["Runbook", "Env notes", "Support handoff"],
    },
  ],

  "cloud-infrastructure": [
    {
      label: "Cloud Discovery",
      headline: "Define the infrastructure map.",
      description:
        "We map product load, app services, database needs, storage, traffic flow, and future scaling pressure.",
      imageUrl: processPhotos.dashboard,
      imageAlt: "Cloud infrastructure planning session with laptop and diagrams",
      points: ["Service map", "Traffic needs", "Growth target"],
    },
    {
      label: "Architecture Design",
      headline: "Choose the right cloud layout.",
      description:
        "We plan hosting, database, storage, CDN, environments, network boundaries, and access controls.",
      imageUrl: processPhotos.backend,
      imageAlt: "Cloud architecture diagram being reviewed",
      points: ["Hosting plan", "Database choice", "CDN path"],
    },
    {
      label: "Provisioning Setup",
      headline: "Build the production foundation.",
      description:
        "We configure servers, managed services, environment variables, storage buckets, and deployment targets.",
      imageUrl: processPhotos.code,
      imageAlt: "Engineer configuring cloud infrastructure on a screen",
      points: ["App server", "Storage setup", "Env config"],
    },
    {
      label: "Backup and Monitoring",
      headline: "Protect uptime and data.",
      description:
        "We add backup schedules, recovery steps, uptime checks, service metrics, and alert rules.",
      imageUrl: processPhotos.dashboard,
      imageAlt: "Monitoring dashboard showing service uptime and metrics",
      points: ["Backups", "Recovery path", "Uptime alerts"],
    },
    {
      label: "Scale Handoff",
      headline: "Prepare for controlled growth.",
      description:
        "We document cost decisions, scaling triggers, access notes, and operational checks for your team.",
      imageUrl: processPhotos.launch,
      imageAlt: "Team reviewing cloud growth and handoff plan",
      points: ["Cost notes", "Scaling triggers", "Ops handoff"],
    },
  ],

  "maintenance-support": [
    {
      label: "Product Health Audit",
      headline: "Check what needs care.",
      description:
        "We review current bugs, uptime behavior, update risks, performance issues, and support priorities.",
      imageUrl: processPhotos.dashboard,
      imageAlt: "Support team reviewing product maintenance tasks",
      points: ["Bug list", "Uptime check", "Risk notes"],
    },
    {
      label: "Support Plan",
      headline: "Define the care workflow.",
      description:
        "We set ticket categories, priority rules, update windows, response expectations, and report cadence.",
      imageUrl: processPhotos.strategy,
      imageAlt: "Team planning support workflow and ticket priorities",
      points: ["Ticket rules", "Priority levels", "Update window"],
    },
    {
      label: "Monitoring Setup",
      headline: "Watch product health.",
      description:
        "We track uptime, performance signals, error patterns, and user-facing issues before they grow.",
      imageUrl: processPhotos.dashboard,
      imageAlt: "Application monitoring dashboard used for maintenance support",
      points: ["Uptime checks", "Error signals", "Speed watch"],
    },
    {
      label: "Fix and Update Cycle",
      headline: "Resolve and improve safely.",
      description:
        "We handle bug fixes, small updates, dependency checks, QA passes, and visible change logs.",
      imageUrl: processPhotos.code,
      imageAlt: "Developer fixing bugs and preparing product updates",
      points: ["Bug fixes", "QA pass", "Update log"],
    },
    {
      label: "Monthly Report",
      headline: "Show what changed.",
      description:
        "We provide support summaries, completed fixes, product health notes, and next improvement actions.",
      imageUrl: processPhotos.launch,
      imageAlt: "Support report and product health review meeting",
      points: ["Fix summary", "Health notes", "Next actions"],
    },
  ],

  "security-compliance": [
    {
      label: "Security Audit",
      headline: "Find the highest risks.",
      description:
        "We review authentication, admin access, APIs, data exposure, deployment settings, and sensitive actions.",
      imageUrl: processPhotos.backend,
      imageAlt: "Security specialist reviewing access controls and risk indicators",
      points: ["Access audit", "API review", "Risk list"],
    },
    {
      label: "Risk Mapping",
      headline: "Prioritize what matters.",
      description:
        "We group risks by business impact, exposure level, user role, data sensitivity, and fix complexity.",
      imageUrl: processPhotos.strategy,
      imageAlt: "Team mapping security risks and controls",
      points: ["Impact level", "Data sensitivity", "Fix priority"],
    },
    {
      label: "Control Design",
      headline: "Plan practical protection.",
      description:
        "We define roles, permission rules, audit logs, blocked actions, API hardening, and review points.",
      imageUrl: processPhotos.backend,
      imageAlt: "Developer planning secure API and permission rules",
      points: ["RBAC rules", "Audit logs", "API hardening"],
    },
    {
      label: "Security Build",
      headline: "Implement the controls.",
      description:
        "We add access checks, logging, protected routes, deployment hardening, and safer admin behavior.",
      imageUrl: processPhotos.code,
      imageAlt: "Security controls being implemented in a software system",
      points: ["Protected routes", "Action logs", "Safe settings"],
    },
    {
      label: "Review and Handoff",
      headline: "Leave it audit-ready.",
      description:
        "We test controls, verify logs, document policy decisions, and provide a security improvement roadmap.",
      imageUrl: processPhotos.launch,
      imageAlt: "Security review report being handed to a project team",
      points: ["Control test", "Policy notes", "Roadmap"],
    },
  ],

};

function getJourneyKnowledge(
  serviceId: string,
  stepTitle: string,
  index: number
): JourneyKnowledge {
  const serviceKnowledge = serviceJourneyKnowledge[serviceId];

  if (serviceKnowledge?.[index]) {
    return serviceKnowledge[index];
  }

  const title = stepTitle.toLowerCase();

  if (
    title.includes("journey") ||
    title.includes("mapping") ||
    title.includes("audit") ||
    title.includes("blueprint") ||
    title.includes("planning")
  ) {
    return {
      label: "Discovery",
      headline: "Map the work before building.",
      description: "We clarify goals, users, steps, scope, and success signals.",
      imageUrl: processPhotos.strategy,
      imageAlt: "Team planning a digital project",
      points: ["Goals", "Users", "Scope"],
    };
  }

  if (
    title.includes("ux") ||
    title.includes("prototype") ||
    title.includes("design") ||
    title.includes("dashboard")
  ) {
    return {
      label: "Experience Design",
      headline: "Make the workflow visible.",
      description: "We design screens, states, interactions, and key user paths.",
      imageUrl: processPhotos.ux,
      imageAlt: "Designer working on interface screens",
      points: ["Screens", "States", "Interactions"],
    };
  }

  if (
    title.includes("api") ||
    title.includes("backend") ||
    title.includes("data") ||
    title.includes("architecture")
  ) {
    return {
      label: "Technical Foundation",
      headline: "Build the core engine.",
      description: "We structure APIs, data, auth, services, and integrations.",
      imageUrl: processPhotos.backend,
      imageAlt: "Developer working on backend code",
      points: ["APIs", "Data", "Auth"],
    };
  }

  if (
    title.includes("build") ||
    title.includes("implement") ||
    title.includes("integrate") ||
    title.includes("automation")
  ) {
    return {
      label: "Build",
      headline: "Turn the plan into working software.",
      description:
        "We implement the frontend, backend, workflows, and integrations.",
      imageUrl: processPhotos.code,
      imageAlt: "Developer building software",
      points: ["Frontend", "Backend", "Integrations"],
    };
  }

  if (
    title.includes("launch") ||
    title.includes("release") ||
    title.includes("rollout") ||
    title.includes("deploy")
  ) {
    return {
      label: "Launch",
      headline: "Prepare for real users.",
      description: "We test, deploy, monitor, hand off, and refine after release.",
      imageUrl: processPhotos.launch,
      imageAlt: "Team preparing product launch",
      points: ["QA", "Deploy", "Handoff"],
    };
  }

  return {
    label: `Phase ${index + 1}`,
    headline: stepTitle,
    description: "We keep scope, quality, and delivery aligned for this phase.",
    imageUrl: processPhotos.strategy,
    imageAlt: "Team planning project delivery",
    points: ["Clear scope", "Quality check", "Next handoff"],
  };
}

function CardPhoto({
  src,
  alt,
  accentClass,
}: {
  src: string;
  alt: string;
  accentClass: string;
}) {
  return (
    <div className="relative h-[68px] overflow-hidden rounded-[1.05rem] border border-white/80 bg-white shadow-[0_14px_30px_rgba(15,23,42,0.11)] ring-1 ring-slate-200/70 dark:border-white/10 dark:bg-white/10 dark:ring-white/10">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-slate-950/28" />
      <div
        className={`absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r ${accentClass}`}
      />
    </div>
  );
}

export default function ServiceProcess({ service }: ServiceProcessProps) {
  const details = getServicePageDetails(service);
  const [hasStarted, setHasStarted] = useState(false);
  const [manualFlip, setManualFlip] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden py-16">
      <style jsx>{`
        @keyframes journeyCardEnter {
          0% {
            opacity: 0;
            transform: translateY(38px) rotateX(-20deg) scale(0.93);
            filter: blur(14px);
          }
          68% {
            opacity: 1;
            transform: translateY(-7px) rotateX(4deg) scale(1.012);
            filter: blur(0);
          }
          100% {
            opacity: 1;
            transform: translateY(0) rotateX(0deg) scale(1);
            filter: blur(0);
          }
        }

        @keyframes journeyAutoFlip {
          0% {
            transform: rotateY(0deg);
          }
          38% {
            transform: rotateY(0deg);
          }
          70% {
            transform: rotateY(188deg);
          }
          100% {
            transform: rotateY(180deg);
          }
        }

        @keyframes journeyLineTravel {
          0% {
            transform: translateX(-18%);
            opacity: 0.18;
          }
          45% {
            opacity: 0.95;
          }
          100% {
            transform: translateX(118%);
            opacity: 0.18;
          }
        }

        @keyframes cardHalo {
          0%,
          100% {
            opacity: 0.08;
            transform: scale(1);
          }
          50% {
            opacity: 0.24;
            transform: scale(1.08);
          }
        }

        @keyframes burstSpark {
          0% {
            opacity: 0;
            transform: translate3d(0, 0, 0) scale(0.35);
          }
          38% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translate3d(var(--spark-x), var(--spark-y), 0)
              scale(1.1);
          }
        }

        @keyframes scanReveal {
          0% {
            opacity: 0;
            transform: translateY(-14px);
          }
          28% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateY(220px);
          }
        }

        @keyframes nodePulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.74;
          }
          50% {
            transform: scale(1.22);
            opacity: 1;
          }
        }

        @keyframes progressFill {
          0% {
            transform: scaleX(0);
          }
          100% {
            transform: scaleX(1);
          }
        }

        .journey-card-start {
          animation: journeyCardEnter 0.72s ease-out var(--enter-delay) both;
          transform-style: preserve-3d;
        }

        .journey-card-inner-start {
          animation: journeyAutoFlip 1.2s cubic-bezier(0.22, 1, 0.36, 1)
            var(--flip-delay) both;
          transform-style: preserve-3d;
        }

        .journey-card-inner-manual {
          transform: rotateY(180deg);
        }

        .journey-card-inner-front {
          transform: rotateY(0deg);
        }

        .journey-line-glow {
          animation: journeyLineTravel 6.2s ease-in-out infinite;
        }

        .journey-halo {
          animation: cardHalo 3.8s ease-in-out infinite;
        }

        .journey-spark {
          animation: burstSpark 0.8s ease-out var(--spark-delay) both;
        }

        .journey-scan {
          animation: scanReveal 0.95s ease-out var(--scan-delay) both;
        }

        .journey-node {
          animation: nodePulse 2.2s ease-in-out infinite;
        }

        .journey-progress-fill {
          animation: progressFill 5.4s ease-out 0.2s both;
          transform-origin: left;
        }

        @media (prefers-reduced-motion: reduce) {
          .journey-card-start,
          .journey-card-inner-start,
          .journey-line-glow,
          .journey-halo,
          .journey-spark,
          .journey-scan,
          .journey-node,
          .journey-progress-fill {
            animation: none;
          }
        }
      `}</style>

      <div className="pointer-events-none absolute inset-x-0 top-16 h-[620px] bg-[radial-gradient(circle_at_16%_18%,rgba(14,165,233,0.12),transparent_34%),radial-gradient(circle_at_78%_20%,rgba(124,58,237,0.12),transparent_34%),radial-gradient(circle_at_54%_78%,rgba(34,211,238,0.08),transparent_32%)] dark:bg-[radial-gradient(circle_at_16%_18%,rgba(56,189,248,0.11),transparent_34%),radial-gradient(circle_at_78%_20%,rgba(139,92,246,0.14),transparent_34%)]" />

      <div className="relative mx-auto w-full max-w-[min(92vw,1440px)] px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <div className="grid gap-6 lg:grid-cols-[0.72fr_1fr] lg:items-end">
          <ServiceSectionHeading
            eyebrow="Process"
            title={details.processTitle}
            description={details.processDescription}
          />

          <motion.div
            initial={{ opacity: 0, y: 18, rotateX: -4 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            onViewportEnter={() => setHasStarted(true)}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{ transformStyle: "preserve-3d" }}
            className="relative overflow-hidden rounded-[1.8rem] border border-white/70 bg-white/78 p-5 shadow-[0_22px_65px_rgba(15,23,42,0.08)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/6 dark:shadow-[0_22px_65px_rgba(0,0,0,0.22)]"
          >
            <div
              className={`pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-gradient-to-br ${service.accent} opacity-[0.12] blur-3xl`}
            />
            <div
              className={`pointer-events-none absolute -bottom-20 left-10 h-44 w-44 rounded-full bg-gradient-to-br ${service.accent} opacity-[0.07] blur-3xl`}
            />

            <div className="relative flex items-start gap-3">
              <span
                className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${service.accent} text-white shadow-[0_14px_34px_rgba(37,99,235,0.16)]`}
                style={{ transform: "translateZ(16px)" }}
              >
                <Sparkles className="h-5 w-5" aria-hidden="true" />
              </span>

              <div style={{ transform: "translateZ(14px)" }}>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#145cb7] dark:text-cyan-200">
                  Guided build journey
                </p>
                <p className="mt-2 text-sm font-normal leading-7 text-slate-600 antialiased dark:text-slate-300">
                  Each phase appears like a storyboard card and flips to show
                  the exact work inside that step.
                </p>
              </div>
            </div>

            <div className="relative mt-5 h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-white/10">
              <span
                className={`absolute inset-y-0 left-0 w-full rounded-full bg-gradient-to-r ${service.accent} ${
                  hasStarted ? "journey-progress-fill" : "scale-x-0"
                }`}
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          className="relative mt-12 [perspective:1600px]"
          viewport={{ once: true, amount: 0.25 }}
          onViewportEnter={() => setHasStarted(true)}
        >
          <div className="pointer-events-none absolute left-0 right-0 top-[4.55rem] hidden h-px overflow-hidden bg-gradient-to-r from-transparent via-sky-200 to-transparent dark:via-cyan-300/20 xl:block">
            <span
              className={`absolute inset-y-0 h-px w-64 bg-gradient-to-r ${service.accent} ${
                hasStarted ? "journey-line-glow" : ""
              }`}
            />
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {details.process.map((step, index) => {
              const knowledge = getJourneyKnowledge(
                service.id,
                step.title,
                index
              );

              const enterDelay = index * 0.36;
              const flipDelay = enterDelay + 0.88;
              const scanDelay = flipDelay + 0.14;
              const isManuallyFlipped = manualFlip === index;
              const isManualFront = manualFlip !== null && manualFlip !== index;

              const cssVars = {
                "--enter-delay": `${enterDelay}s`,
                "--flip-delay": `${flipDelay}s`,
                "--scan-delay": `${scanDelay}s`,
              } as CSSProperties;

              return (
                <article
                  key={`${step.title}-${index}`}
                  style={cssVars}
                  className={`group relative h-[390px] transform-gpu rounded-[1.9rem] transition duration-300 will-change-transform ${
                    hasStarted
                      ? "journey-card-start"
                      : "translate-y-10 opacity-0"
                  }`}
                >
                  <div
                    className={`journey-halo pointer-events-none absolute -inset-3 rounded-[2.15rem] bg-gradient-to-br ${service.accent} opacity-0 blur-2xl transition group-hover:opacity-[0.18]`}
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setManualFlip((current) =>
                        current === index ? null : index
                      )
                    }
                    className="relative h-full w-full text-left [perspective:1600px]"
                    aria-pressed={isManuallyFlipped}
                  >
                    <div
                      className={`relative h-full w-full rounded-[1.9rem] transition-transform duration-700 [transform-style:preserve-3d] ${
                        hasStarted && manualFlip === null
                          ? "journey-card-inner-start"
                          : ""
                      } ${
                        isManuallyFlipped
                          ? "journey-card-inner-manual"
                          : isManualFront
                            ? "journey-card-inner-front"
                            : ""
                      }`}
                    >
                      <div className="absolute inset-0 flex h-full flex-col overflow-hidden rounded-[1.9rem] border border-slate-200 bg-white/88 p-4 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur-2xl [backface-visibility:hidden] dark:border-white/10 dark:bg-white/7 dark:shadow-[0_24px_70px_rgba(0,0,0,0.24)]">
                        <div
                          className={`absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${service.accent} opacity-10 blur-3xl`}
                        />
                        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.72),transparent_46%,rgba(59,130,246,0.06))] dark:bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_48%,rgba(56,189,248,0.06))]" />

                        <div className="relative shrink-0">
                          <CardPhoto
                            src={knowledge.imageUrl}
                            alt={knowledge.imageAlt}
                            accentClass={service.accent}
                          />

                          <span className="absolute right-2.5 top-2.5 rounded-full border border-white/65 bg-white/78 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-500 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-slate-950/45 dark:text-slate-300">
                            Step {index + 1}
                          </span>
                        </div>

                        <div className="relative mt-4 shrink-0">
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#145cb7] dark:text-cyan-200">
                            Phase {index + 1}
                          </p>

                          <h3 className="mt-1.5 text-xl font-semibold leading-7 tracking-[-0.028em] text-slate-950 antialiased dark:text-white">
                            {step.title}
                          </h3>

                          <p className="mt-2.5 overflow-hidden text-sm font-normal leading-6 text-slate-600 antialiased [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:4] dark:text-slate-300">
                            {step.description}
                          </p>
                        </div>

                        <div className="relative mt-auto flex items-center justify-between gap-3 pt-4">
                          <span className="inline-flex items-center gap-2 text-sm font-medium text-[#145cb7] dark:text-cyan-300">
                            <span className="journey-node grid h-5 w-5 place-items-center rounded-full bg-emerald-50 text-emerald-500 dark:bg-emerald-400/10">
                              <CheckCircle2
                                className="h-3.5 w-3.5"
                                aria-hidden="true"
                              />
                            </span>
                            View step
                          </span>

                          <ArrowRight
                            className="h-4 w-4 text-slate-400 transition group-hover:translate-x-1 group-hover:text-[#145cb7]"
                            aria-hidden="true"
                          />
                        </div>
                      </div>

                      <div className="absolute inset-0 overflow-hidden rounded-[1.9rem] border border-sky-200 bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(240,249,255,0.94),rgba(237,233,254,0.58))] p-4 shadow-[0_30px_90px_rgba(14,165,233,0.15)] backdrop-blur-2xl [backface-visibility:hidden] [transform:rotateY(180deg)] dark:border-cyan-300/25 dark:bg-[linear-gradient(135deg,rgba(8,47,73,0.44),rgba(255,255,255,0.07),rgba(88,28,135,0.22))]">
                        <div
                          className={`absolute -right-16 -top-16 h-44 w-44 rounded-full bg-gradient-to-br ${service.accent} opacity-[0.18] blur-3xl`}
                        />
                        <div
                          className={`absolute -bottom-20 left-6 h-36 w-36 rounded-full bg-gradient-to-br ${service.accent} opacity-[0.12] blur-3xl`}
                        />

                        <span className="journey-scan pointer-events-none absolute left-4 right-4 top-4 h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent shadow-[0_0_24px_rgba(34,211,238,0.6)]" />

                        {[
                          ["18%", "16%", "-22px", "-18px", "0s"],
                          ["78%", "18%", "22px", "-20px", "0.06s"],
                          ["86%", "62%", "28px", "24px", "0.12s"],
                          ["18%", "76%", "-28px", "26px", "0.18s"],
                          ["50%", "10%", "0px", "-32px", "0.24s"],
                        ].map(([left, top, x, y, delay]) => (
                          <span
                            key={`${left}-${top}`}
                            className={`journey-spark pointer-events-none absolute h-2 w-2 rounded-full bg-gradient-to-r ${service.accent}`}
                            style={
                              {
                                left,
                                top,
                                "--spark-x": x,
                                "--spark-y": y,
                                "--spark-delay": `calc(${scanDelay}s + ${delay})`,
                              } as CSSProperties
                            }
                          />
                        ))}

                        <div className="relative flex h-full flex-col">
                          <div className="relative shrink-0">
                            <CardPhoto
                              src={knowledge.imageUrl}
                              alt={knowledge.imageAlt}
                              accentClass={service.accent}
                            />

                            <span className="absolute right-2.5 top-2.5 inline-flex items-center gap-1.5 rounded-full border border-white/65 bg-white/82 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-[#145cb7] shadow-sm backdrop-blur-md dark:border-cyan-300/20 dark:bg-slate-950/45 dark:text-cyan-200">
                              <RotateCcw className="h-3.5 w-3.5" />
                              Replay
                            </span>
                          </div>

                          <div className="relative mt-3 shrink-0">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#145cb7] dark:text-cyan-200">
                              {knowledge.label}
                            </p>

                            <h3 className="mt-1 text-[1.05rem] font-semibold leading-6 tracking-[-0.025em] text-slate-950 antialiased dark:text-white">
                              {knowledge.headline}
                            </h3>

                            <p className="mt-2 max-h-[66px] overflow-hidden text-[13px] font-normal leading-[22px] text-slate-600 antialiased dark:text-slate-300">
                              {knowledge.description}
                            </p>
                          </div>

                          <div className="relative mt-auto space-y-1.5 pt-3">
                            {knowledge.points.slice(0, 3).map((point) => (
                              <div
                                key={point}
                                className="flex h-8 items-center gap-2 rounded-2xl border border-sky-100 bg-white/76 px-3 text-xs font-medium text-slate-600 shadow-sm dark:border-cyan-300/15 dark:bg-white/7 dark:text-slate-300"
                              >
                                <span
                                  className={`h-2 w-2 shrink-0 rounded-full bg-gradient-to-r ${service.accent}`}
                                />
                                <span className="truncate">{point}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div
                          className={`absolute inset-x-4 bottom-0 h-1 rounded-t-full bg-gradient-to-r ${service.accent}`}
                        />
                      </div>
                    </div>
                  </button>
                </article>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}