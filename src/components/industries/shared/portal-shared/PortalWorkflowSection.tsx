import {
  ArrowRight,
  BellRing,
  ClipboardCheck,
  FileInput,
  LogIn,
  RefreshCcw,
  UserCheck,
} from "lucide-react";
import { PortalFloat, PortalProgressLine, PortalReveal } from "./PortalMotion";
import { cn } from "./portalSectionUtils";
import type { IndustryPortalPageData } from "./portalTypes";

const healthcareWorkflow = [
  {
    title: "User Signs In",
    description: "Users securely sign in to the portal using their credentials.",
    icon: LogIn,
  },
  {
    title: "Request Submitted",
    description: "Users complete and submit a request or required form.",
    icon: FileInput,
  },
  {
    title: "Internal Review",
    description: "The request is reviewed by the appropriate internal team.",
    icon: ClipboardCheck,
  },
  {
    title: "Action Assigned",
    description: "The request is assigned to the right person or department.",
    icon: UserCheck,
  },
  {
    title: "Status Updated",
    description: "Progress is tracked and status is updated in real time.",
    icon: RefreshCcw,
  },
  {
    title: "User Notified",
    description: "Users receive timely notifications about updates or actions.",
    icon: BellRing,
  },
];

export default function PortalWorkflowSection({ data }: { data: IndustryPortalPageData }) {
  const steps = getWorkflowSteps(data);

  return (
    <section id="portal-workflow" className="relative isolate scroll-mt-[calc(var(--nav-offset)+1rem)] overflow-hidden border-t border-blue-100/70 bg-[linear-gradient(180deg,#ffffff_0%,#ffffff_52%,#edf4ff_100%)] px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20 xl:px-12">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.08),transparent_64%)]" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-[520px] bg-[radial-gradient(circle,rgba(37,99,235,0.13)_1px,transparent_1.6px)] bg-[size:18px_18px] [mask-image:radial-gradient(ellipse_at_bottom_left,black_0%,transparent_72%)]" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-[radial-gradient(ellipse_at_bottom,rgba(79,70,229,0.12),transparent_68%)]" aria-hidden="true" />
      <PortalReveal>
        <div className="relative mx-auto max-w-4xl text-center">
          <SectionLabel>Portal Workflow</SectionLabel>
          <h2 className="mt-4 text-3xl font-extrabold leading-[1.1] text-[#071538] sm:text-4xl lg:text-[2.85rem]">
            How the Portal Workflow Moves
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm font-medium leading-7 text-[#31466d] sm:text-base">
            A streamlined process designed for speed, clarity, and accountability, ensuring every request is handled efficiently from start to finish.
          </p>
        </div>
      </PortalReveal>

      <div className="relative mx-auto mt-10 w-full max-w-[min(92vw,1440px)] pb-12">
        <div className="relative grid min-w-0 gap-4 px-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 xl:gap-5">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <PortalFloat key={step.title} delay={index * 0.055}>
                <article className="relative min-h-[230px] rounded-2xl border border-[#dce5f4] bg-white px-4 py-6 text-center shadow-[0_18px_44px_rgba(30,57,104,0.09)] xl:min-h-[270px]">
                  {index < steps.length - 1 ? (
                    <div className="absolute -right-5 top-[38%] z-20 hidden -translate-y-1/2 items-center text-[#123adf] xl:flex" aria-hidden="true">
                      <span className="h-px w-4 border-t-2 border-dotted border-[#123adf]" />
                      <ArrowRight className="-ml-1 h-6 w-6" />
                    </div>
                  ) : null}

                  <span className="mx-auto block text-xl font-black leading-none text-[#123adf]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className={cn("mx-auto mt-6 grid h-14 w-14 place-items-center rounded-2xl", getStepTone(index))}>
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-base font-extrabold text-[#111c37]">
                    {step.title}
                  </h3>
                  <p className="mx-auto mt-3 max-w-[150px] text-sm font-medium leading-6 text-[#526684]">
                    {step.description}
                  </p>
                </article>
              </PortalFloat>
            );
          })}

          <div className="absolute -bottom-10 left-2 right-2 hidden h-8 xl:block" aria-hidden="true">
            <span className="absolute left-0 right-0 top-1/2 h-0.5 -translate-y-1/2 bg-[#123adf]/45" />
            <PortalProgressLine className="absolute left-0 right-0 top-1/2 h-0.5 -translate-y-1/2 bg-[#123adf]" />
            <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-between">
              {steps.map((step) => (
                <span key={step.title} className={cn(
                  "h-5 w-5 rounded-full border-4 border-white bg-white shadow-[0_0_0_2px_rgba(18,58,223,0.70)]",
                )} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function getWorkflowSteps(data: IndustryPortalPageData) {
  if (data.industrySlug === "healthcare") {
    return healthcareWorkflow;
  }

  return data.workflowSteps.slice(0, 6).map((step) => ({
    title: step.title,
    description: step.description,
    icon: step.icon,
  }));
}

function getStepTone(index: number) {
  const tones = [
    "bg-blue-50 text-blue-700",
    "bg-violet-50 text-violet-700",
    "bg-emerald-50 text-emerald-700",
    "bg-orange-50 text-orange-700",
    "bg-cyan-50 text-cyan-700",
    "bg-rose-50 text-rose-700",
  ];

  return tones[index % tones.length];
}

function SectionLabel({ children }: { children: string }) {
  return (
    <span className="inline-flex text-xs font-black uppercase tracking-[0.22em] text-[#123adf]">
      {children}
    </span>
  );
}
