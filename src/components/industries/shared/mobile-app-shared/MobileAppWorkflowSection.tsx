"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import {
  ArrowRight,
  GitBranch,
  type LucideIcon,
} from "lucide-react";
import type { IndustryMobileAppPageData } from "../industryMobileAppData";
import { MobileAppSectionShell } from "./mobileAppSectionUtils";

type WorkflowCopy = {
  title: string;
  description: string;
};

type WorkflowTone = {
  iconWrap: string;
  iconColor: string;
  iconBorder: string;
};

const workflowTones: WorkflowTone[] = [
  {
    iconWrap: "bg-blue-50",
    iconColor: "text-blue-600",
    iconBorder: "border-blue-100",
  },
  {
    iconWrap: "bg-violet-50",
    iconColor: "text-violet-600",
    iconBorder: "border-violet-100",
  },
  {
    iconWrap: "bg-emerald-50",
    iconColor: "text-emerald-600",
    iconBorder: "border-emerald-100",
  },
  {
    iconWrap: "bg-orange-50",
    iconColor: "text-orange-600",
    iconBorder: "border-orange-100",
  },
  {
    iconWrap: "bg-cyan-50",
    iconColor: "text-cyan-600",
    iconBorder: "border-cyan-100",
  },
  {
    iconWrap: "bg-rose-50",
    iconColor: "text-rose-600",
    iconBorder: "border-rose-100",
  },
];

const fallbackWorkflow: WorkflowCopy[] = [
  {
    title: "Onboarding",
    description: "Quick sign-up, verification, and profile setup.",
  },
  {
    title: "Browse & Discover",
    description: "Explore services, providers, and options easily.",
  },
  {
    title: "Book / Request",
    description: "Place bookings or requests in just a few taps.",
  },
  {
    title: "Real-Time Tracking",
    description: "Live updates and tracking from start to finish.",
  },
  {
    title: "Notifications",
    description: "Instant alerts and important reminders.",
  },
  {
    title: "History & Reports",
    description: "View history, reports, and key insights anytime.",
  },
];

const industryWorkflowMap: Record<string, WorkflowCopy[]> = {
  healthcare: [
    {
      title: "Patient Onboarding",
      description: "Patients sign up, verify details, and create secure care profiles.",
    },
    {
      title: "Find Care",
      description: "Browse doctors, departments, specialists, and available services.",
    },
    {
      title: "Book Appointment",
      description: "Schedule consultations, tests, or follow-up visits in a few taps.",
    },
    {
      title: "Live Visit Tracking",
      description: "Track appointment flow, queue status, and visit progress in real time.",
    },
    {
      title: "Care Alerts",
      description: "Receive medicine reminders, appointment alerts, and follow-up updates.",
    },
    {
      title: "Health Records",
      description: "Access prescriptions, reports, invoices, and treatment history anytime.",
    },
  ],

  manufacturing: [
    {
      title: "Team Onboarding",
      description: "Workers, supervisors, and vendors get secure role-based access.",
    },
    {
      title: "Browse Tasks",
      description: "Review work orders, production tasks, and assigned operations easily.",
    },
    {
      title: "Raise Request",
      description: "Submit maintenance, material, inventory, or quality requests quickly.",
    },
    {
      title: "Production Tracking",
      description: "Track jobs, inventory movement, and production progress from start to finish.",
    },
    {
      title: "Factory Alerts",
      description: "Get instant notifications for downtime, stock issues, and approvals.",
    },
    {
      title: "Reports & Logs",
      description: "View production history, output logs, and performance insights anytime.",
    },
  ],

  education: [
    {
      title: "Student Onboarding",
      description: "Students, parents, and faculty create secure profiles and accounts.",
    },
    {
      title: "Explore Learning",
      description: "Browse classes, courses, assignments, notices, and study materials.",
    },
    {
      title: "Submit / Request",
      description: "Submit homework, book sessions, or request academic support quickly.",
    },
    {
      title: "Progress Tracking",
      description: "Track attendance, submissions, scores, and learning progress in real time.",
    },
    {
      title: "Class Alerts",
      description: "Receive updates for exams, fees, assignments, and school announcements.",
    },
    {
      title: "Academic Reports",
      description: "Access report cards, attendance summaries, certificates, and records.",
    },
  ],

  "real-estate": [
    {
      title: "Client Onboarding",
      description: "Buyers, tenants, sellers, and agents create verified profiles securely.",
    },
    {
      title: "Browse Properties",
      description: "Explore listings, amenities, pricing, locations, and project details.",
    },
    {
      title: "Book Visit",
      description: "Schedule property visits, callbacks, site inspections, or consultations.",
    },
    {
      title: "Deal Tracking",
      description: "Track enquiries, visits, negotiations, and deal progress in real time.",
    },
    {
      title: "Follow-Up Alerts",
      description: "Get reminders for visits, documents, offers, and payment updates.",
    },
    {
      title: "Property History",
      description: "View saved properties, visit records, enquiries, and transaction history.",
    },
  ],

  realestate: [
    {
      title: "Client Onboarding",
      description: "Buyers, tenants, sellers, and agents create verified profiles securely.",
    },
    {
      title: "Browse Properties",
      description: "Explore listings, amenities, pricing, locations, and project details.",
    },
    {
      title: "Book Visit",
      description: "Schedule property visits, callbacks, site inspections, or consultations.",
    },
    {
      title: "Deal Tracking",
      description: "Track enquiries, visits, negotiations, and deal progress in real time.",
    },
    {
      title: "Follow-Up Alerts",
      description: "Get reminders for visits, documents, offers, and payment updates.",
    },
    {
      title: "Property History",
      description: "View saved properties, visit records, enquiries, and transaction history.",
    },
  ],

  retail: [
    {
      title: "Customer Onboarding",
      description: "Customers sign up, save preferences, and create personalized profiles.",
    },
    {
      title: "Browse Products",
      description: "Explore products, categories, offers, recommendations, and collections.",
    },
    {
      title: "Order / Reserve",
      description: "Place orders, reserve products, or request delivery and store pickup.",
    },
    {
      title: "Order Tracking",
      description: "Track packing, shipping, delivery, and return progress from start to finish.",
    },
    {
      title: "Offer Alerts",
      description: "Get sale notifications, cart reminders, and loyalty reward updates.",
    },
    {
      title: "Purchase History",
      description: "View orders, invoices, returns, and reward activity anytime.",
    },
  ],

  finance: [
    {
      title: "Client Onboarding",
      description: "Users complete secure registration, profile setup, and KYC verification.",
    },
    {
      title: "Browse Services",
      description: "Explore loans, accounts, cards, policies, and investment services.",
    },
    {
      title: "Apply / Request",
      description: "Submit applications, service requests, and document updates with ease.",
    },
    {
      title: "Status Tracking",
      description: "Track approvals, verifications, payments, and requests in real time.",
    },
    {
      title: "Smart Alerts",
      description: "Receive payment reminders, due alerts, approval updates, and notices.",
    },
    {
      title: "Financial Reports",
      description: "Access statements, summaries, transactions, and key financial insights.",
    },
  ],
};

function normalizeIndustryKey(data: IndustryMobileAppPageData) {
  const raw =
    (data as { industrySlug?: string }).industrySlug ||
    (data as { slug?: string }).slug ||
    (data as { industry?: string }).industry ||
    "";

  return raw
    .toLowerCase()
    .trim()
    .replace(/_/g, "-")
    .replace(/\s+/g, "-");
}

function getWorkflowCopy(data: IndustryMobileAppPageData) {
  const key = normalizeIndustryKey(data);
  return industryWorkflowMap[key] ?? fallbackWorkflow;
}

function WorkflowIcon({
  icon: Icon,
  tone,
}: {
  icon: LucideIcon;
  tone: WorkflowTone;
}) {
  return (
    <div
      className={[
        "mx-auto flex h-20 w-20 items-center justify-center rounded-full border",
        tone.iconWrap,
        tone.iconBorder,
      ].join(" ")}
    >
      <Icon className={["h-8 w-8", tone.iconColor].join(" ")} />
    </div>
  );
}

export default function MobileAppWorkflowSection({
  data,
}: {
  data: IndustryMobileAppPageData;
}) {
  const workflowCopy = getWorkflowCopy(data);
  const sectionRef = useRef<HTMLElement | null>(null);
  const [animateWorkflow, setAnimateWorkflow] = useState(false);

  const workflowItems = data.modules.slice(0, 6).map((item, index) => ({
    icon: item.icon,
    title: workflowCopy[index]?.title ?? item.title,
    description: workflowCopy[index]?.description ?? item.description,
  }));

  useEffect(() => {
    const section = sectionRef.current;

    if (!section || animateWorkflow) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;

        setAnimateWorkflow(true);
        observer.disconnect();
      },
      {
        root: null,
        rootMargin: "-12% 0px -18% 0px",
        threshold: 0.28,
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [animateWorkflow]);

  return (
    <MobileAppSectionShell className="border-0 py-6 sm:py-8 lg:py-8 xl:py-8">
      <section ref={sectionRef} className="relative py-4 sm:py-5 lg:py-6">
        <div className="mx-auto flex max-w-fit items-center justify-center gap-3">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 via-indigo-500 to-violet-500 text-white shadow-[0_12px_30px_rgba(79,70,229,0.24)]">
            <GitBranch className="h-6 w-6" />
          </span>

          <p className="text-[0.74rem] font-black uppercase tracking-[0.34em] text-blue-600 sm:text-[0.8rem]">
            Built for Every App Workflow
          </p>
        </div>

        <div className="mx-auto mt-5 max-w-6xl text-center">
          <h2 className="text-[clamp(2.6rem,5.8vw,5.4rem)] font-black leading-[0.96] tracking-[-0.045em] text-slate-950 dark:text-white">
            A Workflow That Works From
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500 bg-clip-text text-transparent">
              Start to Finish
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-[1rem] leading-7 text-slate-600 dark:text-slate-300 sm:text-[1.08rem]">
            Designed to simplify every step of the user journey and your daily
            operations.
          </p>
        </div>

        <div className="mt-10 overflow-x-auto pb-3 [scrollbar-width:none] xl:overflow-visible [&::-webkit-scrollbar]:hidden">
          <div className="flex min-w-max snap-x snap-mandatory gap-6 px-1 xl:grid xl:min-w-0 xl:grid-cols-6 xl:gap-6 xl:px-0">
            {workflowItems.map((item, index) => {
              const tone = workflowTones[index % workflowTones.length];
              const Icon = item.icon;

              return (
                <article
                  key={`${item.title}-${index}`}
                  className={[
                    "workflow-drop-card relative flex min-h-[310px] w-[270px] shrink-0 snap-center flex-col rounded-[1.8rem] border border-slate-200 bg-white px-6 py-8 text-center shadow-[0_18px_44px_rgba(15,23,42,0.05)] transition-shadow duration-300 hover:shadow-[0_22px_54px_rgba(59,130,246,0.12)] dark:border-white/10 dark:bg-white/[0.045] xl:w-full",
                    animateWorkflow ? "workflow-drop-card--active" : "",
                  ].join(" ")}
                  style={
                    {
                      "--workflow-start-x": `${index % 2 === 0 ? -42 : 42}px`,
                      "--workflow-start-rotate": `${index % 2 === 0 ? -4 : 4}deg`,
                      animationDelay: `${index * 155}ms`,
                    } as CSSProperties
                  }
                >
                  <WorkflowIcon icon={Icon} tone={tone} />

                  <p className="mt-5 text-[0.95rem] font-black tracking-[0.08em] text-slate-500 dark:text-slate-400">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3 className="mt-4 text-[1.45rem] font-black leading-8 tracking-tight text-slate-950 dark:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[1rem] leading-7 text-slate-600 dark:text-slate-300">
                    {item.description}
                  </p>

                  {index < workflowItems.length - 1 ? (
                    <div className="pointer-events-none absolute -right-10 top-1/2 z-20 hidden -translate-y-1/2 items-center xl:flex">
                      <span className="w-12 border-t-2 border-dashed border-blue-300" />
                      <ArrowRight
                        className="-ml-1 h-4 w-4 text-blue-400"
                        aria-hidden="true"
                      />
                    </div>
                  ) : null}
                </article>
              );
            })}
          </div>
        </div>

        <style jsx>{`
          .workflow-drop-card {
            opacity: 0;
            transform: translate3d(var(--workflow-start-x), -92px, 0)
              scale(0.92)
              rotate(var(--workflow-start-rotate));
          }

          .workflow-drop-card--active {
            animation: workflowCardDrop 780ms cubic-bezier(0.18, 0.84, 0.28, 1.18)
              forwards;
          }

          @keyframes workflowCardDrop {
            0% {
              opacity: 0;
              transform: translate3d(var(--workflow-start-x), -92px, 0)
                scale(0.92)
                rotate(var(--workflow-start-rotate));
            }

            62% {
              opacity: 1;
              transform: translate3d(0, 10px, 0) scale(1.015) rotate(0deg);
            }

            82% {
              transform: translate3d(0, -5px, 0) scale(0.995) rotate(0deg);
            }

            100% {
              opacity: 1;
              transform: translate3d(0, 0, 0) scale(1) rotate(0deg);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .workflow-drop-card {
              opacity: 1;
              transform: none;
            }

            .workflow-drop-card--active {
              animation: none;
            }
          }
        `}</style>
      </section>
    </MobileAppSectionShell>
  );
}