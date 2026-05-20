"use client";

import { useState, type CSSProperties } from "react";
import type { ServiceItem } from "@/data/services";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  WandSparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import ServiceSectionHeading from "@/components/services/shared/ServiceSectionHeading";
import { getServicePageDetails } from "@/components/services/shared/servicePageDetails";

type ServiceProblemsProps = {
  service: ServiceItem;
};

type FriendlySolution = {
  label: string;
  detail: string;
  points: string[];
};

const serviceProblemSolutions: Record<string, FriendlySolution[]> = {
  "web-development": [
    {
      label: "Performance-first pages",
      detail:
        "We reduce page weight, clean section structure, and tune frontend behavior so visitors stay longer.",
      points: ["Faster key pages", "Cleaner asset loading", "Better mobile feel"],
    },
    {
      label: "Premium first impression",
      detail:
        "We rebuild visual hierarchy, proof sections, and copy flow so the brand feels credible quickly.",
      points: ["Stronger hero flow", "Trust signals", "Clearer value message"],
    },
    {
      label: "Lead capture journey",
      detail:
        "We place CTAs, forms, tracking, and follow-up handoffs around the visitor’s decision path.",
      points: ["Clear CTAs", "Form handoff", "Conversion tracking"],
    },
    {
      label: "SEO-ready structure",
      detail:
        "We organize metadata, headings, schema, internal links, and content blocks for better discovery.",
      points: ["Clean metadata", "Schema basics", "Internal links"],
    },
  ],

  "mobile-app-development": [
    {
      label: "Usable mobile flows",
      detail:
        "We turn the app idea into onboarding, core journeys, empty states, and edge-case screens.",
      points: ["Onboarding flow", "Core actions", "Edge cases"],
    },
    {
      label: "App-ready backend",
      detail:
        "We plan APIs, auth, records, media, payments, and admin actions around mobile usage.",
      points: ["Secure APIs", "Mobile auth", "Admin sync"],
    },
    {
      label: "Return-user triggers",
      detail:
        "We design useful push notifications, reminders, and status updates that bring users back.",
      points: ["Push logic", "Reminder triggers", "Status alerts"],
    },
    {
      label: "Store launch readiness",
      detail:
        "We prepare release checks, privacy requirements, QA passes, and store assets before launch.",
      points: ["Store assets", "QA checks", "Privacy notes"],
    },
  ],

  "custom-crm-systems": [
    {
      label: "Centralized lead intake",
      detail:
        "We bring website, WhatsApp, campaign, and manual leads into one visible pipeline.",
      points: ["Lead sources", "Pipeline stages", "Ownership rules"],
    },
    {
      label: "Follow-up engine",
      detail:
        "We add tasks, reminders, ownership, and escalation rules so actions stop depending on memory.",
      points: ["Task reminders", "Owner alerts", "Escalations"],
    },
    {
      label: "Live manager visibility",
      detail:
        "We create dashboards for pipeline stages, activity, conversions, and team performance.",
      points: ["Pipeline view", "Team activity", "Reports"],
    },
    {
      label: "Custom workflow fit",
      detail:
        "We shape modules, roles, fields, and automations around your actual business process.",
      points: ["Custom modules", "Role control", "Workflow rules"],
    },
  ],

  "saas-development": [
    {
      label: "MVP boundary control",
      detail:
        "We separate launch-critical features from later product depth so the first release stays realistic.",
      points: ["MVP scope", "Feature priority", "Launch boundary"],
    },
    {
      label: "Billing and access map",
      detail:
        "We define plans, payment states, trials, upgrades, permissions, and gated features before build.",
      points: ["Plans", "Permissions", "Upgrade paths"],
    },
    {
      label: "Admin operating layer",
      detail:
        "We build dashboards and controls for managing users, records, subscriptions, and support.",
      points: ["Admin panel", "User controls", "Support view"],
    },
    {
      label: "Scalable product base",
      detail:
        "We plan data models, APIs, auth, and deployment choices for maintainable product growth.",
      points: ["Data model", "API layer", "Cloud-ready base"],
    },
  ],

  "ai-automation": [
    {
      label: "AI lead handling",
      detail:
        "We qualify, summarize, score, and prepare the next action before the team opens the lead.",
      points: ["Lead summary", "Fit score", "Next action"],
    },
    {
      label: "Document intelligence",
      detail:
        "We extract fields, summaries, risks, and action items from uploaded files and messages.",
      points: ["Field extraction", "Risk notes", "Action items"],
    },
    {
      label: "Contextual reply drafts",
      detail:
        "We draft useful support replies from templates, customer context, and knowledge sources.",
      points: ["Draft replies", "Context match", "Review control"],
    },
    {
      label: "CRM insight layer",
      detail:
        "We turn activity history into priority signals, next-best actions, and manager insights.",
      points: ["Priority signals", "Deal insights", "Manager view"],
    },
  ],

  "workflow-automation": [
    {
      label: "Automatic task routing",
      detail:
        "We assign work by source, priority, category, location, capacity, or ownership rules.",
      points: ["Routing rules", "Owner logic", "Auto assignment"],
    },
    {
      label: "Approval movement",
      detail:
        "We automate approval requests, reminders, escalations, and status updates.",
      points: ["Approval steps", "Escalation rules", "Status updates"],
    },
    {
      label: "Follow-up protection",
      detail:
        "We add reminders and notifications so leads, tasks, and customers do not go cold.",
      points: ["Timed reminders", "Missed-action alerts", "Follow-up flow"],
    },
    {
      label: "Flow health reporting",
      detail:
        "We show stuck items, overdue work, completion trends, and workflow bottlenecks.",
      points: ["SLA risks", "Overdue work", "Throughput reports"],
    },
  ],

  "api-development": [
    {
      label: "Clear API contracts",
      detail:
        "We define request and response shapes so frontend, mobile, and partner teams can build confidently.",
      points: ["Endpoint contracts", "Response models", "Error states"],
    },
    {
      label: "Consistent auth layer",
      detail:
        "We design JWT, OAuth, API keys, roles, and access rules around real usage.",
      points: ["Auth flow", "Role checks", "Secure access"],
    },
    {
      label: "Traceable integrations",
      detail:
        "We add webhooks, retries, logs, and status responses so integrations are easier to debug.",
      points: ["Webhook logs", "Retries", "Status tracking"],
    },
    {
      label: "Usable API docs",
      detail:
        "We prepare endpoint references, examples, auth notes, and clear error responses.",
      points: ["Docs", "Examples", "Integration notes"],
    },
  ],

  "integration-services": [
    {
      label: "Automated data sync",
      detail:
        "We sync leads, payments, customers, and status updates between tools automatically.",
      points: ["Lead sync", "Payment sync", "Record updates"],
    },
    {
      label: "Shared tool context",
      detail:
        "We connect CRM, sheets, WhatsApp, email, forms, dashboards, and internal tools.",
      points: ["Tool mapping", "Context sharing", "Connected records"],
    },
    {
      label: "Traceable sync errors",
      detail:
        "We add logs, retries, alerts, and ownership for failed integration events.",
      points: ["Error logs", "Retry rules", "Failure alerts"],
    },
    {
      label: "Fresher reporting data",
      detail:
        "We move data into reporting views faster so managers see updated numbers.",
      points: ["Live reports", "Fresh metrics", "Data pipeline"],
    },
  ],

  "devops-deployment": [
    {
      label: "Automated CI/CD pipeline",
      detail:
        "We replace manual release steps with a tracked build, test, deploy, and verification flow.",
      points: ["Git-based releases", "Build checks", "Safer deployments"],
    },
    {
      label: "Rollback-ready release plan",
      detail:
        "We define safer release patterns so your team can recover quickly when production issues appear.",
      points: ["Rollback path", "Release checkpoints", "Recovery steps"],
    },
    {
      label: "Centralized logs and monitoring",
      detail:
        "We make production issues easier to detect with readable logs, health checks, and alert visibility.",
      points: ["Readable logs", "Health checks", "Issue alerts"],
    },
    {
      label: "Environment control system",
      detail:
        "We organize environments, secrets, build variables, and deployment targets so releases stay consistent.",
      points: ["Env documentation", "Secret handling", "Staging parity"],
    },
  ],

  "cloud-infrastructure": [
    {
      label: "Cloud architecture blueprint",
      detail:
        "We map hosting, databases, storage, CDN, environments, and scaling needs before production setup.",
      points: ["Hosting map", "Database plan", "Scalable structure"],
    },
    {
      label: "Cost-aware cloud setup",
      detail:
        "We choose practical infrastructure so you avoid overbuilding early while keeping room to scale later.",
      points: ["Right-sized resources", "Cost visibility", "Growth planning"],
    },
    {
      label: "Backup and recovery plan",
      detail:
        "We define backup frequency, recovery steps, and storage safety so critical data is protected.",
      points: ["Backup schedule", "Recovery path", "Data protection"],
    },
    {
      label: "Monitoring and alerting layer",
      detail:
        "We add uptime checks, service health visibility, and alerts so cloud issues are caught early.",
      points: ["Uptime checks", "Health metrics", "Alert rules"],
    },
  ],

  "maintenance-support": [
    {
      label: "Structured support desk",
      detail:
        "We turn scattered support requests into a clear ticket flow with priorities, ownership, and status tracking.",
      points: ["Ticket queue", "Priority rules", "Status visibility"],
    },
    {
      label: "Uptime monitoring routine",
      detail:
        "We add uptime checks and review points so website, app, CRM, or SaaS issues are noticed early.",
      points: ["Uptime checks", "Health review", "Issue alerts"],
    },
    {
      label: "Bug and update workflow",
      detail:
        "We track bugs, small changes, and update requests so fixes stay organized and visible after launch.",
      points: ["Bug tracking", "Update logs", "Fix ownership"],
    },
    {
      label: "Performance care plan",
      detail:
        "We keep performance, security basics, dependencies, and improvement tasks under regular technical care.",
      points: ["Speed checks", "Security basics", "Monthly improvements"],
    },
  ],

  "security-compliance": [
    {
      label: "Role and access control",
      detail:
        "We define who can view, edit, approve, export, and manage sensitive business data inside the system.",
      points: ["Role matrix", "Permission rules", "Access boundaries"],
    },
    {
      label: "Audit-ready activity logs",
      detail:
        "We add traceable logs for important actions so teams can review access, changes, and risky events.",
      points: ["Action logs", "Access history", "Change tracking"],
    },
    {
      label: "API and deployment hardening",
      detail:
        "We strengthen auth, API exposure, environment settings, and production configuration against common risks.",
      points: ["API protection", "Secure envs", "Production checks"],
    },
    {
      label: "Data protection roadmap",
      detail:
        "We map sensitive data, retention needs, safer handling rules, and practical compliance-ready controls.",
      points: ["Data mapping", "Retention rules", "Control checklist"],
    },
  ],
};

function getFriendlySolution(
  serviceId: string,
  problemTitle: string,
  index: number
): FriendlySolution {
  const serviceSolutions = serviceProblemSolutions[serviceId];

  if (serviceSolutions?.[index]) {
    return serviceSolutions[index];
  }

  const title = problemTitle.toLowerCase();

  if (
    title.includes("ux") ||
    title.includes("flow") ||
    title.includes("drop") ||
    title.includes("journey")
  ) {
    return {
      label: "Clear user flow",
      detail: "We simplify the journey so users always know what to do next.",
      points: ["Smooth onboarding", "Cleaner screen flow", "Lower drop-off"],
    };
  }

  if (
    title.includes("backend") ||
    title.includes("api") ||
    title.includes("secure") ||
    title.includes("connection")
  ) {
    return {
      label: "Stable technical foundation",
      detail: "We plan APIs, data, auth, and admin actions for real usage.",
      points: ["Secure APIs", "Clean data flow", "Admin-ready logic"],
    };
  }

  if (
    title.includes("notification") ||
    title.includes("reminder") ||
    title.includes("return") ||
    title.includes("forget")
  ) {
    return {
      label: "Smart engagement",
      detail: "We bring users back with useful reminders, alerts, and updates.",
      points: ["Push triggers", "Reminder logic", "Status updates"],
    };
  }

  if (
    title.includes("store") ||
    title.includes("launch") ||
    title.includes("release") ||
    title.includes("risky")
  ) {
    return {
      label: "Launch confidence",
      detail: "We prepare release checks, assets, QA, and readiness steps.",
      points: ["Launch assets", "QA passes", "Release support"],
    };
  }

  return {
    label: "Mapped solution path",
    detail: "We convert this gap into a clear, build-ready decision.",
    points: ["Mapped scope", "Cleaner workflow", "Better outcome"],
  };
}

export default function ServiceProblems({ service }: ServiceProblemsProps) {
  const details = getServicePageDetails(service);
  const [hasStarted, setHasStarted] = useState(false);

  return (
    <section className="relative overflow-hidden py-14">
      <style jsx>{`
        @keyframes problemCardEnter {
          0% {
            opacity: 0;
            transform: translateY(38px) rotateX(-18deg) scale(0.94);
            filter: blur(12px);
          }
          72% {
            opacity: 1;
            transform: translateY(-6px) rotateX(2deg) scale(1.012);
            filter: blur(0);
          }
          100% {
            opacity: 1;
            transform: translateY(0) rotateX(0deg) scale(1);
            filter: blur(0);
          }
        }

        @keyframes cardFloat {
          0%,
          100% {
            transform: translateY(0) rotateX(0deg);
          }
          50% {
            transform: translateY(-7px) rotateX(1.2deg);
          }
        }

        @keyframes scannerLine {
          0% {
            opacity: 0;
            transform: translateY(-18px);
          }
          18% {
            opacity: 1;
          }
          78% {
            opacity: 1;
            transform: translateY(206px);
          }
          100% {
            opacity: 0;
            transform: translateY(224px);
          }
        }

        @keyframes solutionReveal {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.96);
            clip-path: inset(0 0 100% 0 round 1.25rem);
            filter: blur(12px);
          }
          68% {
            opacity: 1;
            transform: translateY(-4px) scale(1.012);
            clip-path: inset(0 0 0 0 round 1.25rem);
            filter: blur(0);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            clip-path: inset(0 0 0 0 round 1.25rem);
            filter: blur(0);
          }
        }

        @keyframes glitterSweep {
          0% {
            transform: translateX(-145%) rotate(13deg);
            opacity: 0;
          }
          34% {
            opacity: 1;
          }
          100% {
            transform: translateX(175%) rotate(13deg);
            opacity: 0;
          }
        }

        @keyframes sparklePop {
          0% {
            transform: scale(0.25) translateY(10px);
            opacity: 0;
          }
          34% {
            opacity: 1;
          }
          100% {
            transform: scale(1.1) translateY(-12px);
            opacity: 0;
          }
        }

        @keyframes iconPulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.94;
          }
          50% {
            transform: scale(1.08);
            opacity: 1;
          }
        }

        @keyframes pathGlow {
          0% {
            transform: translateX(-20%);
            opacity: 0.18;
          }
          50% {
            opacity: 0.9;
          }
          100% {
            transform: translateX(120%);
            opacity: 0.18;
          }
        }

        @keyframes solutionBadgeGlow {
          0%,
          100% {
            box-shadow: 0 0 0 rgba(14, 165, 233, 0);
          }
          50% {
            box-shadow: 0 0 28px rgba(14, 165, 233, 0.28);
          }
        }

        .problem-card-start {
          animation:
            problemCardEnter 0.7s ease-out var(--card-delay) both,
            cardFloat 6.4s ease-in-out calc(var(--card-delay) + 0.85s)
              infinite;
          transform-style: preserve-3d;
        }

        .problem-card-start:hover {
          animation-play-state: paused;
        }

        .problem-card-start:hover .problem-icon {
          animation: iconPulse 1.35s ease-in-out infinite;
        }

        .scanner-line-start {
          animation: scannerLine 1.05s ease-out var(--scan-delay) both;
        }

        .solution-layer-start {
          animation: solutionReveal 0.9s ease-out var(--solution-delay) both;
        }

        .solution-glitter-start {
          animation: glitterSweep 1.05s ease-out var(--glitter-delay) both;
        }

        .sparkle-dot-start {
          animation: sparklePop 1.15s ease-out both;
        }

        .solution-badge {
          animation: solutionBadgeGlow 2.6s ease-in-out infinite;
        }

        .path-glow-start {
          animation: pathGlow 6s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .problem-card-start,
          .problem-card-start:hover .problem-icon,
          .scanner-line-start,
          .solution-layer-start,
          .solution-glitter-start,
          .sparkle-dot-start,
          .solution-badge,
          .path-glow-start {
            animation: none;
          }
        }
      `}</style>

      <div className="pointer-events-none absolute inset-x-0 top-16 h-[540px] bg-[radial-gradient(circle_at_10%_18%,rgba(244,63,94,0.055),transparent_34%),radial-gradient(circle_at_72%_24%,rgba(14,165,233,0.10),transparent_34%),radial-gradient(circle_at_88%_72%,rgba(124,58,237,0.08),transparent_34%)] dark:bg-[radial-gradient(circle_at_10%_18%,rgba(244,63,94,0.08),transparent_34%),radial-gradient(circle_at_72%_24%,rgba(56,189,248,0.10),transparent_34%),radial-gradient(circle_at_88%_72%,rgba(139,92,246,0.12),transparent_34%)]" />

      <div className="relative mx-auto w-full max-w-[min(92vw,1440px)] px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <div className="grid gap-6 lg:grid-cols-[0.72fr_1fr] lg:items-end">
          <ServiceSectionHeading
            eyebrow="Problems We Solve"
            title={details.problemTitle}
            description={details.problemDescription}
          />

          <motion.div
            initial={{ opacity: 0, y: 18, rotateX: -4 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            whileHover={{ y: -5, rotateX: 2, rotateY: -1 }}
            viewport={{ once: true, amount: 0.25 }}
            onViewportEnter={() => setHasStarted(true)}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{ transformStyle: "preserve-3d" }}
            className="relative overflow-hidden rounded-[1.8rem] border border-white/70 bg-white/78 p-5 shadow-[0_22px_65px_rgba(15,23,42,0.08)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/6 dark:shadow-[0_22px_65px_rgba(0,0,0,0.22)]"
          >
            <div
              className={`pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-gradient-to-br ${service.accent} opacity-[0.12] blur-3xl`}
            />
            <div
              className={`pointer-events-none absolute -bottom-20 left-12 h-44 w-44 rounded-full bg-gradient-to-br ${service.accent} opacity-[0.08] blur-3xl`}
            />

            <div className="relative flex items-start gap-3">
              <span
                className={`solution-badge grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${service.accent} text-white shadow-[0_14px_34px_rgba(37,99,235,0.16)]`}
                style={{ transform: "translateZ(16px)" }}
              >
                <WandSparkles className="h-5 w-5" aria-hidden="true" />
              </span>

              <div style={{ transform: "translateZ(14px)" }}>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#145cb7] dark:text-cyan-200">
                  Problem first, solution after
                </p>
                <p className="mt-2 text-sm font-normal leading-7 text-slate-600 antialiased dark:text-slate-300">
                  First the problem appears. Then a scan and glitter effect
                  reveals the solution, card by card, only when this section
                  enters the screen.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="relative mt-10 [perspective:1400px]"
          viewport={{ once: true, amount: 0.22 }}
          onViewportEnter={() => setHasStarted(true)}
        >
          <div className="pointer-events-none absolute left-0 right-0 top-[4.35rem] hidden h-px overflow-hidden bg-gradient-to-r from-transparent via-sky-200 to-transparent dark:via-cyan-300/20 xl:block">
            <span
              className={`absolute inset-y-0 h-px w-56 bg-gradient-to-r ${service.accent} ${
                hasStarted ? "path-glow-start" : ""
              }`}
            />
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {details.problems.map((problem, index) => {
              const Icon = problem.icon;
              const solution = getFriendlySolution(
                service.id,
                problem.title,
                index
              );

              const cardDelay = index * 0.32;
              const scanDelay = cardDelay + 0.64;
              const solutionDelay = cardDelay + 1.05;
              const glitterDelay = cardDelay + 1.12;

              const animationVars = {
                "--card-delay": `${cardDelay}s`,
                "--scan-delay": `${scanDelay}s`,
                "--solution-delay": `${solutionDelay}s`,
                "--glitter-delay": `${glitterDelay}s`,
              } as CSSProperties;

              return (
                <article
                  key={problem.title}
                  style={animationVars}
                  className={`group relative min-h-[420px] transform-gpu overflow-hidden rounded-[1.9rem] border border-slate-200 bg-white/88 p-5 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur-2xl transition duration-300 will-change-transform hover:-translate-y-3 hover:border-sky-200 hover:shadow-[0_34px_100px_rgba(14,165,233,0.16)] dark:border-white/10 dark:bg-white/7 dark:shadow-[0_24px_70px_rgba(0,0,0,0.24)] dark:hover:border-cyan-300/25 ${
                    hasStarted
                      ? "problem-card-start"
                      : "opacity-0 translate-y-10"
                  }`}
                >
                  <div
                    className={`absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${service.accent} opacity-0 blur-3xl transition duration-300 group-hover:opacity-[0.20]`}
                  />
                  <div
                    className={`absolute -bottom-20 left-6 h-36 w-36 rounded-full bg-gradient-to-br ${service.accent} opacity-0 blur-3xl transition duration-300 group-hover:opacity-[0.14]`}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.72),transparent_46%,rgba(59,130,246,0.06))] dark:bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_48%,rgba(56,189,248,0.06))]" />

                  <span
                    className={`pointer-events-none absolute left-5 right-5 z-20 h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent shadow-[0_0_20px_rgba(34,211,238,0.55)] ${
                      hasStarted ? "scanner-line-start" : "opacity-0"
                    }`}
                  />

                  <div
                    className="relative flex items-start justify-between gap-4"
                    style={{ transform: "translateZ(24px)" }}
                  >
                    <span className="problem-icon grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-rose-50 text-rose-500 shadow-[0_14px_34px_rgba(244,63,94,0.12)] ring-1 ring-rose-100 transition group-hover:bg-rose-500 group-hover:text-white dark:bg-rose-400/10 dark:text-rose-300 dark:ring-rose-300/10 dark:group-hover:bg-rose-500 dark:group-hover:text-white">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>

                    <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-400 transition group-hover:border-rose-200 group-hover:text-rose-500 dark:border-white/10 dark:bg-white/6 dark:text-slate-500 dark:group-hover:border-rose-300/25 dark:group-hover:text-rose-300">
                      Problem {index + 1}
                    </span>
                  </div>

                  <div
                    className="relative mt-7"
                    style={{ transform: "translateZ(20px)" }}
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rose-500/80 dark:text-rose-300">
                      First, the gap
                    </p>

                    <h3 className="mt-2 text-xl font-semibold leading-7 tracking-[-0.028em] text-slate-950 antialiased dark:text-white">
                      {problem.title}
                    </h3>

                    <p className="mt-3 text-sm font-normal leading-6 text-slate-600 antialiased [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3] dark:text-slate-300">
                      {problem.description}
                    </p>
                  </div>

                  <div
                    className={`relative mt-5 overflow-hidden rounded-2xl border border-sky-100 bg-[linear-gradient(135deg,rgba(240,249,255,0.96),rgba(255,255,255,0.82),rgba(237,233,254,0.38))] p-4 shadow-[0_14px_34px_rgba(14,165,233,0.08)] dark:border-cyan-300/15 dark:bg-[linear-gradient(135deg,rgba(8,47,73,0.42),rgba(255,255,255,0.06),rgba(88,28,135,0.18))] ${
                      hasStarted ? "solution-layer-start" : "opacity-0"
                    }`}
                    style={{ transform: "translateZ(30px)" }}
                  >
                    <span
                      className={`pointer-events-none absolute -left-20 top-0 h-full w-20 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.96),transparent)] dark:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.22),transparent)] ${
                        hasStarted ? "solution-glitter-start" : "opacity-0"
                      }`}
                    />

                    {[
                      ["82%", "8%", "0s"],
                      ["93%", "38%", "0.12s"],
                      ["76%", "78%", "0.22s"],
                      ["15%", "22%", "0.16s"],
                      ["24%", "86%", "0.26s"],
                    ].map(([left, top, delay]) => (
                      <span
                        key={`${left}-${top}`}
                        className={`pointer-events-none absolute h-1.5 w-1.5 rounded-full bg-gradient-to-r ${service.accent} ${
                          hasStarted ? "sparkle-dot-start" : "opacity-0"
                        }`}
                        style={
                          {
                            left,
                            top,
                            animationDelay: `calc(${glitterDelay}s + ${delay})`,
                          } as CSSProperties
                        }
                      />
                    ))}

                    <div className="relative flex items-start gap-3">
                      <span
                        className={`solution-badge grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${service.accent} text-white shadow-[0_10px_24px_rgba(37,99,235,0.16)]`}
                      >
                        <Sparkles className="h-4 w-4" aria-hidden="true" />
                      </span>

                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#145cb7] dark:text-cyan-200">
                          Then, the solution
                        </p>
                        <h4 className="mt-1 text-sm font-semibold text-slate-950 dark:text-white">
                          {solution.label}
                        </h4>
                        <p className="mt-1 text-xs font-normal leading-5 text-slate-500 dark:text-slate-300">
                          {solution.detail}
                        </p>
                      </div>
                    </div>

                    <div className="relative mt-3 grid gap-2">
                      {solution.points.slice(0, 3).map((point) => (
                        <div
                          key={point}
                          className="flex items-center gap-2 rounded-xl bg-white/68 px-2.5 py-2 text-xs font-medium text-slate-600 shadow-sm dark:bg-white/7 dark:text-slate-300"
                        >
                          <CheckCircle2
                            className="h-3.5 w-3.5 shrink-0 text-emerald-500"
                            aria-hidden="true"
                          />
                          {point}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div
                    className="relative mt-5 flex items-center gap-2 text-sm font-medium text-[#145cb7] antialiased dark:text-cyan-300"
                    style={{ transform: "translateZ(22px)" }}
                  >
                    <CheckCircle2
                      className="h-4 w-4 text-emerald-500"
                      aria-hidden="true"
                    />
                    Converted into a build decision
                    <ArrowRight
                      className="h-4 w-4 transition group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </div>

                  <div
                    className={`absolute inset-x-5 bottom-0 h-1 rounded-t-full bg-gradient-to-r ${service.accent} opacity-0 transition duration-300 group-hover:opacity-100`}
                  />
                </article>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}