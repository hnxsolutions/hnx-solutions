import {
  BarChart3,
  Bell,
  Building2,
  CalendarDays,
  ChevronDown,
  Crown,
  Eye,
  Mail,
  MessageCircle,
  Phone,
  User,
  Users,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { IndustryCrmPageData } from "./industryCrmData";

const fallbackWorkflowSteps = [
  {
    title: "Capture student enquiry",
    description: "Record program interest, source, class, preferred branch and contact details.",
    owner: "Admission desk",
  },
  {
    title: "Assign counsellor",
    description: "Route each student to the right counsellor or branch team.",
    owner: "Admin",
  },
  {
    title: "Schedule demo or visit",
    description: "Plan demo class, campus visit, counselling call or assessment.",
    owner: "Counsellor",
  },
  {
    title: "Track admission and fees",
    description: "Move students through admission stages, documents and fee follow-ups.",
    owner: "Finance team",
  },
  {
    title: "Communicate with parents",
    description: "Keep parent updates, notes, reminders and decisions connected.",
    owner: "Branch manager",
  },
  {
    title: "Growth reported",
    description: "Dashboards reveal conversion, revenue and team performance trends.",
    owner: "Leadership",
  },
];

function getIndustryLabel(data: IndustryCrmPageData) {
  const typedData = data as IndustryCrmPageData & {
    industryName?: string;
    hero?: {
      industryLabel?: string;
      eyebrow?: string;
    };
  };

  return typedData.industryName || typedData.hero?.industryLabel || typedData.hero?.eyebrow || "Business";
}

function getWorkflowSteps(data: IndustryCrmPageData) {
  return [
    ...data.workflowSteps,
    ...fallbackWorkflowSteps.slice(data.workflowSteps.length),
  ]
    .slice(0, 6)
    .map((step, index) => ({
      ...fallbackWorkflowSteps[index],
      ...step,
      title: step.title || fallbackWorkflowSteps[index].title,
      description: step.description || fallbackWorkflowSteps[index].description,
      owner: step.owner || fallbackWorkflowSteps[index].owner,
    }));
}

function WorkflowConnector() {
  const nodes = [
    { x: 52, y: 142, delay: "0.95s" },
    { x: 342, y: 142, delay: "1.55s" },
    { x: 612, y: 142, delay: "2.25s" },
    { x: 882, y: 142, delay: "2.95s" },
    { x: 1048, y: 142, delay: "3.4s" },
    { x: 1048, y: 280, delay: "3.9s" },
    { x: 160, y: 280, delay: "4.25s" },
    { x: 160, y: 430, delay: "4.65s" },
    { x: 390, y: 430, delay: "5.05s" },
    { x: 665, y: 430, delay: "5.55s" },
    { x: 940, y: 430, delay: "6.05s" },
    { x: 1080, y: 430, delay: "6.35s" },
  ];

  return (
    <svg
      className="pointer-events-none absolute inset-0 z-0 h-full w-full"
      viewBox="0 0 1120 555"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="workflowConnectorGradient" x1="52" y1="142" x2="1080" y2="430">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="50%" stopColor="#4f46e5" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>

        <filter id="connectorSoftGlow" x="-12%" y="-18%" width="124%" height="136%">
          <feGaussianBlur stdDeviation="1.45" result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="0 0 0 0 0.14 0 0 0 0 0.32 0 0 0 0 1 0 0 0 0.12 0"
          />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <path
        className="crm-workflow-line-base"
        d="
          M 52 142
          H 1048
          Q 1084 142 1084 178
          V 244
          Q 1084 280 1048 280
          H 160
          Q 124 280 124 316
          V 394
          Q 124 430 160 430
          H 1080
        "
        stroke="#dbeafe"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        className="crm-workflow-line-draw"
        d="
          M 52 142
          H 1048
          Q 1084 142 1084 178
          V 244
          Q 1084 280 1048 280
          H 160
          Q 124 280 124 316
          V 394
          Q 124 430 160 430
          H 1080
        "
        stroke="url(#workflowConnectorGradient)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#connectorSoftGlow)"
      />

      {nodes.map((node) => (
        <g
          key={`${node.x}-${node.y}`}
          className="crm-workflow-node"
          style={{ animationDelay: node.delay }}
        >
          <circle cx={node.x} cy={node.y} r="7.2" fill="white" />
          <circle cx={node.x} cy={node.y} r="5.4" fill="white" stroke="#2563eb" strokeWidth="2" />
          <circle cx={node.x} cy={node.y} r="2.2" fill="#2563eb" />
        </g>
      ))}
    </svg>
  );
}

function MiniInquiryCard({ industry }: { industry: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-2.5 shadow-[0_10px_24px_rgba(15,23,42,0.045)] dark:border-white/10 dark:bg-white/[0.04]">
      <div className="mb-2 flex items-center justify-between">
        <p className="text-[9px] font-black text-slate-950 dark:text-white">New Inquiry</p>
        <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[7px] font-black text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-200">
          Hot Lead
        </span>
      </div>

      <div className="grid grid-cols-2 gap-1.5">
        <div>
          <p className="mb-1 text-[7px] font-bold text-slate-400">Full Name</p>
          <div className="rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-[8px] font-bold text-slate-700 dark:border-white/10 dark:bg-white/[0.05] dark:text-slate-200">
            Aarav Sharma
          </div>
        </div>

        <div>
          <p className="mb-1 text-[7px] font-bold text-slate-400">Mobile Number</p>
          <div className="rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-[8px] font-bold text-slate-700 dark:border-white/10 dark:bg-white/[0.05] dark:text-slate-200">
            98765 43210
          </div>
        </div>

        <div>
          <p className="mb-1 text-[7px] font-bold text-slate-400">Interested In</p>
          <div className="flex items-center justify-between rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-[8px] font-bold text-slate-700 dark:border-white/10 dark:bg-white/[0.05] dark:text-slate-200">
            {industry.slice(0, 14)}
            <ChevronDown className="h-2.5 w-2.5 text-slate-400" />
          </div>
        </div>

        <div>
          <p className="mb-1 text-[7px] font-bold text-slate-400">Source</p>
          <div className="flex items-center justify-between rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-[8px] font-bold text-slate-700 dark:border-white/10 dark:bg-white/[0.05] dark:text-slate-200">
            Website
            <ChevronDown className="h-2.5 w-2.5 text-slate-400" />
          </div>
        </div>
      </div>

      <button className="mt-2 w-full rounded-md bg-gradient-to-r from-blue-600 to-violet-600 py-1.5 text-[8px] font-black text-white shadow-[0_8px_18px_rgba(79,70,229,0.22)]">
        Submit Inquiry
      </button>
    </div>
  );
}

function MiniAssignmentCard() {
  const people = [
    { initials: "SC", name: "Sneha Chauhan", workload: "32%", active: true },
    { initials: "AK", name: "Aman Kapoor", workload: "61%", active: false },
    { initials: "PR", name: "Priya Rathi", workload: "74%", active: false },
  ];

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-2.5 shadow-[0_10px_24px_rgba(15,23,42,0.045)] dark:border-white/10 dark:bg-white/[0.04]">
      <p className="mb-1.5 text-[9px] font-black text-slate-950 dark:text-white">Auto Assignment</p>

      <div className="space-y-1.5">
        {people.map((person) => (
          <div
            key={person.name}
            className={`flex items-center gap-2 rounded-lg border px-2 py-1.5 ${
              person.active
                ? "border-violet-200 bg-violet-50/70 dark:border-violet-300/20 dark:bg-violet-400/10"
                : "border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/[0.05]"
            }`}
          >
            <span className="grid h-6 w-6 place-items-center rounded-md bg-slate-800 text-[8px] font-black text-white">
              {person.initials}
            </span>

            <div className="min-w-0 flex-1">
              <p className="truncate text-[8px] font-black text-slate-800 dark:text-white">{person.name}</p>
              <p className="text-[7px] font-bold text-slate-400">Senior Counsellor</p>
            </div>

            <div className="text-right">
              <p className="text-[7px] font-bold text-slate-400">Workload</p>
              <p
                className={`text-[9px] font-black ${
                  person.active
                    ? "text-emerald-600"
                    : person.workload === "61%"
                      ? "text-amber-500"
                      : "text-rose-500"
                }`}
              >
                {person.workload}
              </p>
            </div>

            <span
              className={`h-2.5 w-2.5 rounded-full border ${
                person.active ? "border-violet-600 bg-violet-600" : "border-slate-300"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function MiniCalendarCard() {
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const dates = [
    "27",
    "28",
    "29",
    "30",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
  ];

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-2.5 shadow-[0_10px_24px_rgba(15,23,42,0.045)] dark:border-white/10 dark:bg-white/[0.04]">
      <div className="mb-1.5 flex items-center justify-between">
        <span className="text-xs font-black text-slate-500 dark:text-slate-300">‹</span>
        <p className="text-[9px] font-black text-slate-950 dark:text-white">May 2025</p>
        <span className="text-xs font-black text-slate-500 dark:text-slate-300">›</span>
      </div>

      <div className="grid grid-cols-7 gap-0.5 text-center">
        {days.map((day) => (
          <span key={day} className="text-[6px] font-black text-slate-400">
            {day}
          </span>
        ))}

        {dates.map((date) => (
          <span
            key={date}
            className={`grid h-4 place-items-center rounded-full text-[7px] font-bold ${
              date === "14" ? "bg-blue-600 text-white" : "text-slate-600 dark:text-slate-300"
            }`}
          >
            {date}
          </span>
        ))}
      </div>

      <div className="mt-2 grid grid-cols-[1fr_1fr] gap-1.5">
        <div className="rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-[7px] font-black text-slate-700 dark:border-white/10 dark:bg-white/[0.05] dark:text-slate-200">
          11:00 AM
        </div>
        <button className="rounded-md bg-blue-600 px-2 py-1 text-[7px] font-black text-white">
          Confirm
        </button>
      </div>
    </div>
  );
}

function MiniAdmissionCard() {
  const items = [
    ["Application Submitted", "Completed"],
    ["Document Verification", "Completed"],
    ["Offer Letter", "Completed"],
    ["Fee Payment", "In Progress"],
    ["Enrollment", "Pending"],
  ];

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-2.5 shadow-[0_10px_24px_rgba(15,23,42,0.045)] dark:border-white/10 dark:bg-white/[0.04]">
      <p className="mb-1.5 text-[9px] font-black text-slate-950 dark:text-white">Admission Progress</p>

      <div className="space-y-1">
        {items.map(([label, status]) => (
          <div key={label} className="flex items-center justify-between gap-2">
            <span className="truncate text-[7px] font-bold text-slate-600 dark:text-slate-300">› {label}</span>
            <span
              className={`flex items-center gap-1 text-[7px] font-black ${
                status === "Completed"
                  ? "text-emerald-600"
                  : status === "In Progress"
                    ? "text-blue-600"
                    : "text-slate-400"
              }`}
            >
              <span
                className={`h-2 w-2 rounded-full border ${
                  status === "Completed"
                    ? "border-emerald-500 bg-emerald-500"
                    : status === "In Progress"
                      ? "border-blue-500"
                      : "border-slate-300"
                }`}
              />
              {status}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-2 border-t border-slate-100 pt-2 dark:border-white/10">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[7px] font-bold text-slate-400">Fee Payment</p>
            <p className="text-[9px] font-black text-slate-900 dark:text-white">₹ 75,000 / ₹ 75,000</p>
          </div>
          <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[7px] font-black text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-200">
            Paid
          </span>
        </div>

        <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-slate-100 dark:bg-white/10">
          <div className="h-full w-full rounded-full bg-emerald-500" />
        </div>
      </div>
    </div>
  );
}

function MiniMessageCard() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-2.5 shadow-[0_10px_24px_rgba(15,23,42,0.045)] dark:border-white/10 dark:bg-white/[0.04]">
      <div className="mb-2 flex gap-5 border-b border-slate-100 pb-1.5 dark:border-white/10">
        <span className="text-[8px] font-black text-blue-600">Messages</span>
        <span className="text-[8px] font-bold text-slate-400">History</span>
      </div>

      <div className="space-y-1.5">
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-2 dark:border-white/10 dark:bg-white/[0.05]">
          <div className="flex items-start gap-2">
            <span className="grid h-6 w-6 place-items-center rounded-md bg-emerald-500 text-white">
              <Phone className="h-3 w-3" />
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex justify-between gap-2">
                <p className="text-[8px] font-black text-slate-900 dark:text-white">WhatsApp</p>
                <p className="text-[7px] font-bold text-slate-400">10:30 AM</p>
              </div>
              <p className="mt-0.5 text-[7px] font-bold leading-3 text-slate-600 dark:text-slate-300">
                Dear Parent, your ward&apos;s document verification is complete.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-slate-200 bg-slate-50 p-2 dark:border-white/10 dark:bg-white/[0.05]">
          <div className="flex items-start gap-2">
            <span className="grid h-6 w-6 place-items-center rounded-md bg-violet-500 text-white">
              <Mail className="h-3 w-3" />
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex justify-between gap-2">
                <p className="text-[8px] font-black text-slate-900 dark:text-white">Email</p>
                <p className="text-[7px] font-bold text-slate-400">Yesterday</p>
              </div>
              <p className="mt-0.5 text-[7px] font-bold leading-3 text-slate-600 dark:text-slate-300">
                Subject: Admission Offer Letter. Please find the offer letter attached.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MiniGrowthCard() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-2.5 shadow-[0_10px_24px_rgba(15,23,42,0.045)] dark:border-white/10 dark:bg-white/[0.04]">
      <div className="mb-2 flex items-center justify-between">
        <p className="text-[9px] font-black text-slate-950 dark:text-white">Admissions Overview</p>
        <span className="rounded-md border border-slate-200 px-2 py-0.5 text-[7px] font-black text-slate-500 dark:border-white/10 dark:text-slate-300">
          This Month
        </span>
      </div>

      <div className="grid grid-cols-2 gap-1.5">
        {[
          ["Total Inquiries", "1,248", "+18%"],
          ["Applications", "842", "+22%"],
          ["Admissions", "312", "+27%"],
          ["Conversion Rate", "37.1%", "+6.3%"],
        ].map(([label, value, growth]) => (
          <div key={label} className="rounded-lg bg-slate-50 p-1.5 dark:bg-white/[0.05]">
            <p className="text-[6px] font-bold text-slate-400">{label}</p>
            <div className="mt-0.5 flex items-end justify-between gap-1">
              <p className="text-[9px] font-black text-slate-950 dark:text-white">{value}</p>
              <p className="text-[7px] font-black text-emerald-600">↑ {growth}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-2 flex h-11 items-end gap-1.5 border-t border-slate-100 pt-2 dark:border-white/10">
        {[32, 40, 38, 44, 34].map((height, index) => (
          <div key={index} className="flex flex-1 flex-col items-center gap-1">
            <span
              className="w-full rounded-t bg-gradient-to-t from-blue-600 to-violet-500"
              style={{ height }}
            />
            <span className="text-[6px] font-bold text-slate-400">Wk {index + 1}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function WorkflowMiniCard({
  step,
  index,
  industry,
}: {
  step: ReturnType<typeof getWorkflowSteps>[number];
  index: number;
  industry: string;
}) {
  const RoleIcon =
    index === 0
      ? User
      : index === 1
        ? Zap
        : index === 2
          ? CalendarDays
          : index === 3
            ? Building2
            : index === 4
              ? Users
              : Crown;

  return (
    <article
      className="crm-workflow-card relative z-10 w-[15.65rem] rounded-[1.2rem] border border-slate-200 bg-white/95 p-3 shadow-[0_14px_38px_rgba(15,23,42,0.05)] backdrop-blur dark:border-white/10 dark:bg-slate-950/75"
      style={{ animationDelay: `${index === 0 ? 0.12 : 0.95 + index * 0.88}s` }}
    >
      <div className="mb-2.5 flex items-start gap-2.5">
        <span className="grid h-[34px] w-[34px] shrink-0 place-items-center rounded-full bg-violet-50 text-sm font-black text-blue-600 shadow-inner dark:bg-violet-400/10 dark:text-violet-200">
          {index + 1}
        </span>

        <h3 className="max-w-[10.5rem] text-[0.9rem] font-black leading-tight text-slate-950 dark:text-white">
          {step.title}
        </h3>
      </div>

      {index === 0 ? <MiniInquiryCard industry={industry} /> : null}
      {index === 1 ? <MiniAssignmentCard /> : null}
      {index === 2 ? <MiniCalendarCard /> : null}
      {index === 3 ? <MiniAdmissionCard /> : null}
      {index === 4 ? <MiniMessageCard /> : null}
      {index === 5 ? <MiniGrowthCard /> : null}

      <div className="mt-2.5 flex items-center gap-2 text-[10px] font-black text-blue-600 dark:text-blue-300">
        <RoleIcon className="h-3.5 w-3.5" aria-hidden="true" />
        {step.owner}
      </div>
    </article>
  );
}

function BenefitCard({
  icon: Icon,
  title,
  description,
  delay,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  delay: string;
}) {
  return (
    <article
      className="crm-workflow-benefit group flex min-h-[5.8rem] items-center gap-3.5 rounded-[1.1rem] border border-slate-200 bg-white/90 p-3.5 shadow-[0_12px_34px_rgba(15,23,42,0.035)] transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_18px_55px_rgba(37,99,235,0.09)] dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-blue-300/20"
      style={{ animationDelay: delay }}
    >
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gradient-to-br from-blue-50 to-violet-100 text-blue-600 shadow-[inset_0_0_0_1px_rgba(99,102,241,0.12),0_12px_28px_rgba(79,70,229,0.08)] dark:from-blue-400/10 dark:to-violet-400/10 dark:text-blue-200">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>

      <div>
        <h3 className="text-[0.82rem] font-black text-slate-950 dark:text-white">{title}</h3>
        <p className="mt-1 text-[0.72rem] font-semibold leading-5 text-slate-600 dark:text-slate-300">
          {description}
        </p>
      </div>
    </article>
  );
}

export default function CrmWorkflowSection({ data }: { data: IndustryCrmPageData }) {
  const steps = getWorkflowSteps(data);
  const industry = getIndustryLabel(data);

  const cardPositions = [
    "left-[122px] top-[0px]",
    "left-[435px] top-[0px]",
    "left-[748px] top-[0px]",
    "left-[175px] top-[275px]",
    "left-[488px] top-[275px]",
    "left-[801px] top-[275px]",
  ];

  return (
    <section id="crm-workflow" className="py-8">
      <style>{`
        .crm-workflow-line-draw {
          stroke-dasharray: 3050;
          stroke-dashoffset: 3050;
        }

        .crm-workflow-node {
          opacity: 0;
          transform-box: fill-box;
          transform-origin: center;
        }

        .crm-workflow-card {
          opacity: 0;
          transform: translateY(18px) scale(0.82);
          transform-origin: center;
        }

        .crm-workflow-benefit {
          opacity: 0;
          transform: translateY(18px);
        }

        .crm-workflow-animate .crm-workflow-card {
          animation: crmWorkflowCardZoomReveal 0.68s cubic-bezier(0.18, 0.9, 0.2, 1.15) forwards;
        }

        .crm-workflow-animate .crm-workflow-line-draw {
          animation: crmWorkflowLineDraw 5.85s ease-in-out 0.78s forwards;
        }

        .crm-workflow-animate .crm-workflow-node {
          animation: crmWorkflowNodePop 0.32s cubic-bezier(0.2, 0.8, 0.2, 1.18) forwards;
        }

        .crm-workflow-animate .crm-workflow-benefit {
          animation: crmWorkflowBenefitReveal 0.55s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }

        @keyframes crmWorkflowLineDraw {
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes crmWorkflowNodePop {
          0% {
            opacity: 0;
            transform: scale(0.25);
          }
          70% {
            opacity: 1;
            transform: scale(1.18);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes crmWorkflowCardZoomReveal {
          0% {
            opacity: 0;
            transform: translateY(18px) scale(0.82);
          }
          55% {
            opacity: 1;
            transform: translateY(-4px) scale(1.06);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes crmWorkflowBenefitReveal {
          0% {
            opacity: 0;
            transform: translateY(18px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .crm-workflow-line-draw,
          .crm-workflow-node,
          .crm-workflow-card,
          .crm-workflow-benefit {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
            stroke-dashoffset: 0 !important;
          }
        }
      `}</style>

      <div className="crm-workflow-animate relative overflow-hidden rounded-[2.25rem] border border-slate-200 bg-[radial-gradient(circle_at_82%_10%,rgba(99,102,241,0.10),transparent_30%),linear-gradient(180deg,#ffffff_0%,#fbfdff_100%)] px-5 py-8 shadow-[0_24px_80px_rgba(15,23,42,0.055)] dark:border-white/10 dark:bg-[radial-gradient(circle_at_82%_10%,rgba(99,102,241,0.16),transparent_32%),linear-gradient(180deg,rgba(15,23,42,0.82)_0%,rgba(2,6,23,0.92)_100%)] sm:px-8 lg:px-9 lg:py-10">
        <div className="pointer-events-none absolute right-16 top-24 hidden h-24 w-24 bg-[radial-gradient(circle,rgba(99,102,241,0.22)_1px,transparent_1px)] [background-size:13px_13px] lg:block" />

        <div className="relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-black tracking-[-0.055em] text-slate-950 dark:text-white sm:text-5xl lg:text-[3.35rem] lg:leading-[0.98]">
              A Smarter Journey
              <span className="block bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                From Inquiry to Enrollment
              </span>
            </h2>

            <p className="mx-auto mt-3 max-w-3xl text-sm font-semibold leading-7 text-slate-600 dark:text-slate-300 sm:text-[0.95rem]">
              Turn every inquiry into a structured {industry.toLowerCase()} CRM journey with clear handoffs,
              faster follow-ups, and better visibility at every stage.
            </p>
          </div>

          <span className="absolute right-0 top-0 hidden w-fit items-center gap-2.5 rounded-full border border-blue-200 bg-white/80 px-4 py-2.5 text-sm font-black text-blue-600 shadow-[0_14px_40px_rgba(37,99,235,0.08)] backdrop-blur dark:border-blue-300/20 dark:bg-white/[0.06] dark:text-blue-200 lg:inline-flex">
            <Zap className="h-4 w-4" aria-hidden="true" />
            End-to-end flow
          </span>
        </div>

        <div className="relative z-10 mt-7 overflow-x-auto pb-3 xl:overflow-visible xl:pb-0">
          <div className="relative mx-auto h-[555px] min-w-[1120px] max-w-[1120px]">
            <WorkflowConnector />

            {steps.map((step, index) => (
              <div
                key={`${step.title}-${index}`}
                className={`absolute z-10 ${cardPositions[index]}`}
              >
                <WorkflowMiniCard step={step} index={index} industry={industry} />
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 mx-auto mt-6 grid max-w-[92rem] gap-3.5 sm:grid-cols-2 xl:grid-cols-4">
          <BenefitCard
            icon={Eye}
            title="Unified Visibility"
            description="Track every lead, stage, owner, and stakeholder update from one connected workspace."
            delay="6.35s"
          />
          <BenefitCard
            icon={Bell}
            title="Automated Follow-ups"
            description="Reduce manual chasing with reminders, tasks, smart triggers, and timely next actions."
            delay="6.5s"
          />
          <BenefitCard
            icon={MessageCircle}
            title="Stronger Communication"
            description="Keep teams, customers, students, and parents informed with clear contextual updates."
            delay="6.65s"
          />
          <BenefitCard
            icon={BarChart3}
            title="Decision-ready Insights"
            description="Use real-time performance data to improve conversions, revenue, and team productivity."
            delay="6.8s"
          />
        </div>
      </div>
    </section>
  );
}