import {
  AlertTriangle,
  CalendarCheck,
  ClipboardCheck,
  Clock,
  Database,
  FileText,
  FolderOpen,
  MessageSquareText,
  Plus,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import { PortalReveal } from "./PortalMotion";
import { cn } from "./portalSectionUtils";
import type { IndustryPortalPageData } from "./portalTypes";

const healthcareProblems = [
  {
    title: "Scattered Information",
    description: "Patient and operational data lives in disconnected systems, making it hard to find what you need.",
    icon: FolderOpen,
    tone: "blue",
  },
  {
    title: "Limited Self-Service",
    description: "Patients cannot complete tasks online, leading to more calls, repetitive work, and longer resolution times.",
    icon: UserRound,
    tone: "emerald",
  },
  {
    title: "Slow Communication",
    description: "Messages and updates get lost across inboxes and systems, causing delays and frustration.",
    icon: MessageSquareText,
    tone: "violet",
  },
  {
    title: "Manual Approvals",
    description: "Paper-based and multi-step approvals slow down processes and increase the risk of errors.",
    icon: ClipboardCheck,
    tone: "orange",
  },
  {
    title: "Operational Delays",
    description: "Inefficient workflows and bottlenecks lead to scheduling conflicts, backlogs, and longer wait times.",
    icon: Clock,
    tone: "rose",
  },
  {
    title: "Security & Compliance Risks",
    description: "Sensitive data and complex regulations demand strong controls, auditability, and always-on compliance.",
    icon: ShieldCheck,
    tone: "blue",
  },
];

export default function PortalProblemsSection({ data }: { data: IndustryPortalPageData }) {
  const cards = getProblemCards(data);

  return (
    <section id="portal-problems" className="relative isolate scroll-mt-[calc(var(--nav-offset)+1rem)] overflow-hidden border-t border-blue-100/70 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_48%,#edf4ff_100%)] px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20 xl:px-12">
      <SoftProblemBackground />

      <div className="relative mx-auto grid w-full max-w-[min(92vw,1440px)] gap-8 lg:grid-cols-5 lg:items-center">
        <div className="lg:col-span-3">
          <PortalReveal>
            <SectionLabel>Portal Problems</SectionLabel>
            <h2 className="mt-4 max-w-3xl text-3xl font-extrabold leading-[1.1] tracking-normal text-[#071538] sm:text-4xl lg:text-[2.85rem]">
              {data.industrySlug === "healthcare"
                ? "Challenges Healthcare Portals Must Solve"
                : `Challenges ${data.industryName} Portals Must Solve`}
            </h2>
            <p className="mt-4 max-w-3xl text-sm font-medium leading-7 text-[#31466d] sm:text-base">
              Modern healthcare teams need secure, efficient, and user-friendly portals that remove friction for patients, staff, and administrators.
            </p>
          </PortalReveal>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {cards.map((problem, index) => {
              const Icon = problem.icon;

              return (
                <PortalReveal key={problem.title} delay={index * 0.035} y={24}>
                  <article className={cn(
                    "group relative h-full min-h-[205px] overflow-hidden rounded-2xl border border-[#dce5f4] bg-white/92 p-5 shadow-[0_16px_40px_rgba(30,57,104,0.07)] backdrop-blur transition hover:-translate-y-1 hover:shadow-[0_22px_52px_rgba(30,57,104,0.11)]",
                    getBottomAccent(problem.tone),
                  )}>
                    <span className={cn("grid h-14 w-14 place-items-center rounded-2xl", getIconTone(problem.tone))}>
                      <Icon className="h-7 w-7" aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 text-base font-extrabold text-[#111c37]">
                      {problem.title}
                    </h3>
                    <p className="mt-2 text-sm font-medium leading-6 text-[#526684]">
                      {problem.description}
                    </p>
                  </article>
                </PortalReveal>
              );
            })}
          </div>
        </div>

        <PortalReveal className="lg:col-span-2" delay={0.08} y={28}>
          <ProblemVisualPanel />
        </PortalReveal>
      </div>
    </section>
  );
}

function ProblemVisualPanel() {
  const outerNodes = [
    { icon: CalendarCheck, className: "left-12 top-24", tone: "bg-blue-50 text-blue-700" },
    { icon: FolderOpen, className: "left-10 top-1/2", tone: "bg-blue-50 text-blue-700" },
    { icon: FileText, className: "bottom-56 left-14", tone: "bg-blue-50 text-blue-700" },
    { icon: Database, className: "right-12 top-24", tone: "bg-blue-50 text-blue-700" },
    { icon: ClipboardCheck, className: "right-10 top-1/2", tone: "bg-blue-50 text-blue-700" },
    { icon: UserRound, className: "bottom-56 right-14", tone: "bg-blue-50 text-blue-700" },
  ];

  return (
    <div className="relative min-h-[600px] overflow-hidden rounded-[2rem] border border-[#d9e4f4] bg-white/78 p-5 shadow-[0_24px_70px_rgba(25,52,101,0.12)] backdrop-blur">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_36%,rgba(37,99,235,0.13),transparent_28%),radial-gradient(circle_at_86%_10%,rgba(124,58,237,0.09),transparent_25%)]" />
      <div className="pointer-events-none absolute inset-6 rounded-[1.5rem] bg-[radial-gradient(circle,rgba(37,99,235,0.14)_1px,transparent_1.7px)] bg-[size:18px_18px] opacity-55 [mask-image:radial-gradient(circle_at_center,black_0%,transparent_72%)]" />

      <svg className="absolute inset-0 h-full w-full text-blue-300/80" aria-hidden="true">
        <circle cx="50%" cy="39%" r="16%" fill="none" stroke="currentColor" strokeDasharray="5 7" strokeWidth="1.5" />
        <circle cx="50%" cy="39%" r="9.5%" fill="none" stroke="rgba(191,219,254,0.7)" strokeWidth="1" />
        <line x1="50%" y1="39%" x2="20%" y2="24%" stroke="currentColor" strokeDasharray="5 8" strokeWidth="1.5" />
        <line x1="50%" y1="39%" x2="18%" y2="43%" stroke="currentColor" strokeDasharray="5 8" strokeWidth="1.5" />
        <line x1="50%" y1="39%" x2="22%" y2="63%" stroke="currentColor" strokeDasharray="5 8" strokeWidth="1.5" />
        <line x1="50%" y1="39%" x2="80%" y2="24%" stroke="currentColor" strokeDasharray="5 8" strokeWidth="1.5" />
        <line x1="50%" y1="39%" x2="82%" y2="43%" stroke="currentColor" strokeDasharray="5 8" strokeWidth="1.5" />
        <line x1="50%" y1="39%" x2="78%" y2="63%" stroke="currentColor" strokeDasharray="5 8" strokeWidth="1.5" />
        <line x1="50%" y1="39%" x2="50%" y2="66%" stroke="currentColor" strokeDasharray="5 8" strokeWidth="1.5" />
      </svg>

      <div className="absolute left-1/2 top-1/2 grid h-32 w-32 -translate-x-1/2 -translate-y-[65%] place-items-center rounded-full bg-white shadow-[0_26px_54px_rgba(25,52,101,0.16)]">
        <span className="grid h-20 w-20 place-items-center rounded-3xl bg-[linear-gradient(135deg,#0f62fe,#1d4ed8)] text-white shadow-[0_18px_40px_rgba(37,99,235,0.32)]">
          <Plus className="h-12 w-12 stroke-[4]" aria-hidden="true" />
        </span>
      </div>

      {outerNodes.map((node, index) => {
        const Icon = node.icon;

        return (
          <div
            key={index}
            className={cn("absolute grid h-16 w-16 place-items-center rounded-2xl border border-white bg-white shadow-[0_16px_36px_rgba(25,52,101,0.12)]", node.className)}
          >
            <span className={cn("grid h-10 w-10 place-items-center rounded-xl", node.tone)}>
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
          </div>
        );
      })}

      <div className="absolute left-1/2 top-7 flex w-[300px] -translate-x-1/2 items-center gap-3 rounded-2xl border border-[#dce5f4] bg-white px-5 py-4 shadow-[0_18px_46px_rgba(25,52,101,0.12)]">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-rose-50 text-rose-600">
          <AlertTriangle className="h-6 w-6" aria-hidden="true" />
        </span>
        <div>
          <p className="text-sm font-extrabold text-[#111c37]">Disconnected Systems</p>
          <p className="mt-1 text-xs font-semibold leading-5 text-[#31466d]">Patient data is spread across multiple systems.</p>
        </div>
      </div>

      <div className="absolute bottom-32 left-7 right-7 grid gap-4 sm:grid-cols-2">
        <MiniStatusCard
          title="Patient Forms"
          rows={[
            ["Intake Form", "Incomplete", "rose"],
            ["Insurance Details", "Pending", "orange"],
            ["Consent Form", "Pending", "orange"],
          ]}
        />
        <MiniStatusCard
          title="Approvals"
          rows={[
            ["Insurance Verification", "Pending", "orange"],
            ["Medication Request", "Pending", "orange"],
            ["Procedure Authorization", "Overdue", "rose"],
          ]}
          avatars
        />
      </div>

      <div className="absolute bottom-6 left-10 right-10 rounded-2xl border border-violet-200 bg-white/90 p-5 shadow-[0_20px_58px_rgba(25,52,101,0.15)]">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[#123adf] text-white">
              <ShieldCheck className="h-7 w-7" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-extrabold text-[#111c37]">Compliance Risk</p>
              <p className="mt-1 text-xs font-medium leading-5 text-[#526684]">PHI access without audit trail detected.</p>
            </div>
          </div>
          <button className="rounded-xl border border-[#b8c6ff] bg-white px-5 py-2.5 text-xs font-extrabold text-[#123adf] shadow-[0_12px_24px_rgba(18,58,223,0.10)]" type="button">
            View Audit Log
          </button>
        </div>
      </div>
    </div>
  );
}

function MiniStatusCard({
  title,
  rows,
  avatars,
}: {
  title: string;
  rows: Array<[label: string, status: string, tone: string]>;
  avatars?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-[#dde7f5] bg-white/94 p-5 shadow-[0_16px_40px_rgba(25,52,101,0.10)]">
      <p className="text-sm font-extrabold text-[#111c37]">{title}</p>
      <div className="mt-4 divide-y divide-[#edf2f8]">
        {rows.map(([label, status, tone]) => (
          <div key={label} className="flex items-center justify-between gap-3 py-3 first:pt-0 last:pb-0">
            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-extrabold text-[#263a62]">{label}</p>
              <span className="mt-2 block h-1.5 w-24 rounded-full bg-[#e8eefb]" />
            </div>
            <span className={cn(
              "rounded-lg px-2.5 py-1 text-[10px] font-extrabold",
              tone === "rose" ? "bg-rose-50 text-rose-600" : "bg-orange-50 text-orange-600",
            )}>
              {status}
            </span>
          </div>
        ))}
      </div>
      {avatars ? (
        <div className="mt-3 flex -space-x-2">
          {["SJ", "EW", "JW"].map((avatar) => (
            <span key={avatar} className="grid h-7 w-7 place-items-center rounded-full border-2 border-white bg-blue-100 text-[9px] font-black text-blue-700">
              {avatar}
            </span>
          ))}
          <span className="grid h-7 w-7 place-items-center rounded-full border-2 border-white bg-slate-100 text-[9px] font-black text-slate-500">
            +2
          </span>
        </div>
      ) : null}
    </div>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <span className="inline-flex text-xs font-black uppercase tracking-[0.22em] text-[#123adf]">
      {children}
    </span>
  );
}

function getProblemCards(data: IndustryPortalPageData) {
  if (data.industrySlug === "healthcare") {
    return healthcareProblems;
  }

  return data.problems.slice(0, 6).map((problem, index) => ({
    title: problem.title,
    description: problem.description,
    icon: problem.icon,
    tone: ["blue", "violet", "emerald", "orange", "cyan", "rose"][index] ?? "blue",
  }));
}

function getIconTone(tone: string) {
  const tones: Record<string, string> = {
    blue: "bg-blue-50 text-blue-700",
    violet: "bg-violet-50 text-violet-700",
    emerald: "bg-emerald-50 text-emerald-700",
    orange: "bg-orange-50 text-orange-700",
    cyan: "bg-cyan-50 text-cyan-700",
    rose: "bg-rose-50 text-rose-700",
  };

  return tones[tone] ?? tones.blue;
}

function getBottomAccent(tone: string) {
  const tones: Record<string, string> = {
    blue: "after:bg-blue-500",
    violet: "after:bg-violet-500",
    emerald: "after:bg-emerald-500",
    orange: "after:bg-orange-500",
    cyan: "after:bg-cyan-500",
    rose: "after:bg-rose-500",
  };

  return cn("after:absolute after:inset-x-0 after:bottom-0 after:h-1", tones[tone] ?? tones.blue);
}

function SoftProblemBackground() {
  return (
    <>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(ellipse_at_top_left,rgba(191,219,254,0.54),transparent_62%)]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-96 bg-[radial-gradient(ellipse_at_bottom_right,rgba(221,214,254,0.46),transparent_64%)]" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-[520px] bg-[radial-gradient(circle,rgba(37,99,235,0.14)_1px,transparent_1.6px)] bg-[size:18px_18px] [mask-image:radial-gradient(ellipse_at_bottom_left,black_0%,transparent_72%)]" aria-hidden="true" />
    </>
  );
}
