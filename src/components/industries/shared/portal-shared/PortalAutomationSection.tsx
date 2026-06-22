import {
  Bell,
  Bot,
  BrainCircuit,
  Clock,
  FileText,
  GitBranch,
  MessageCircle,
  Route,
  Sparkles,
  Stethoscope,
  Target,
  TrendingUp,
  Workflow,
  Zap,
} from "lucide-react";
import { PortalReveal } from "./PortalMotion";
import { cn } from "./portalSectionUtils";
import type { IndustryPortalPageData } from "./portalTypes";

const benefitRows = [
  { title: "AI-Powered Insights", description: "Turn data into actionable insights for better decisions.", icon: BrainCircuit },
  { title: "Automated Workflows", description: "Eliminate repetitive tasks with intelligent workflow automation.", icon: GitBranch },
  { title: "Smart Notifications", description: "Deliver the right alerts to the right people at the right time.", icon: Bell },
  { title: "Predictive Analytics", description: "Anticipate needs and improve outcomes with predictive intelligence.", icon: TrendingUp },
];

const aiCards = [
  { title: "Smart Triage", description: "AI prioritizes patient inquiries and routes them to the right care teams.", icon: Stethoscope, tag: "High Priority", tone: "blue", className: "left-[12%] top-0" },
  { title: "Auto Responses", description: "AI generates accurate and context-aware responses in seconds.", icon: MessageCircle, tag: "Response Sent", tone: "emerald", className: "right-[2%] top-0" },
  { title: "Document Intelligence", description: "Extract, classify, and summarize data from medical documents automatically.", icon: FileText, tag: "Processed", tone: "violet", className: "left-[7%] top-[31%]" },
  { title: "Predictive Insights", description: "Identify risks and opportunities with AI-driven predictive analytics.", icon: TrendingUp, tag: "Risk Score: Medium", tone: "orange", className: "right-0 top-[32%]" },
  { title: "Intelligent Routing", description: "Automatically route tasks and requests to the most appropriate teams.", icon: Route, tag: "Routed", tone: "teal", className: "left-[2%] bottom-[6%]" },
  { title: "Workflow Automation", description: "Automate end-to-end processes and reduce operational bottlenecks.", icon: Workflow, tag: "Workflow Active", tone: "blue", className: "right-[3%] bottom-[4%]" },
];

const stats = [
  { value: "85%", title: "Time Saved", note: "On repetitive tasks and manual processes", icon: Clock, tone: "blue" },
  { value: "60%", title: "Manual Work Reduced", note: "By automating routine operations", icon: FileText, tone: "emerald" },
  { value: "95%", title: "Accuracy Improvement", note: "With AI-powered data validation and insights", icon: Target, tone: "violet" },
  { value: "40%", title: "Faster Response", note: "Across patient inquiries and communications", icon: Zap, tone: "orange" },
];

export default function PortalAutomationSection({ data }: { data: IndustryPortalPageData }) {
  const isHealthcare = data.industrySlug === "healthcare";

  return (
    <section id="portal-automation" className="relative isolate scroll-mt-[calc(var(--nav-offset)+1rem)] overflow-hidden border-t border-blue-100/70 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_54%,#eef5ff_100%)] px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20 xl:px-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(219,234,254,0.9),transparent_42%),radial-gradient(ellipse_at_top_right,rgba(191,219,254,0.35),transparent_35%)]" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-24 left-0 h-64 w-[420px] bg-[radial-gradient(circle,rgba(37,99,235,0.14)_1px,transparent_1.6px)] bg-[size:18px_18px] [mask-image:radial-gradient(ellipse_at_bottom_left,black_0%,transparent_72%)]" aria-hidden="true" />

      <div className="relative mx-auto grid w-full max-w-[min(92vw,1440px)] gap-8 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-center">
        <PortalReveal className="min-w-0">
          <div>
            <SectionLabel>AI & Automation</SectionLabel>
            <div className="mt-4 h-0.5 w-14 bg-[#1257d9]" />
            <h2 className="mt-6 max-w-xl text-3xl font-extrabold leading-[1.1] text-[#071538] sm:text-4xl lg:text-[2.85rem]">
              Smarter Automation with AI
            </h2>
            <p className="mt-4 max-w-xl text-sm font-medium leading-7 text-[#31466d] sm:text-base">
              {isHealthcare
                ? "Save time, reduce manual work, and improve patient experiences with intelligent automation built for healthcare. Our AI-powered tools streamline operations so your team can focus on what matters most-patient care."
                : `Save time, reduce manual work, and improve ${data.portalName.toLowerCase()} experiences with intelligent automation.`}
            </p>

            <div className="mt-7 space-y-4">
              {benefitRows.map((row, index) => {
                const Icon = row.icon;

                return (
                  <PortalReveal key={row.title} delay={index * 0.035}>
                    <div className="flex gap-4">
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-blue-50 text-[#1257d9] shadow-[0_12px_26px_rgba(30,57,104,0.08)]">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </span>
                      <div>
                        <h3 className="text-base font-extrabold text-[#071538]">{row.title}</h3>
                        <p className="mt-1 max-w-md text-sm font-medium leading-6 text-[#526684]">{row.description}</p>
                      </div>
                    </div>
                  </PortalReveal>
                );
              })}
            </div>
          </div>
        </PortalReveal>

        <div className="min-w-0">
          <AiVisualMap />
        </div>
      </div>

      <div className="relative mx-auto mt-9 grid w-full max-w-[min(92vw,1440px)] gap-5 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <article key={stat.title} className="flex min-h-[140px] items-center gap-5 rounded-2xl border border-[#dce5f4] bg-white p-5 shadow-[0_16px_40px_rgba(25,52,101,0.07)]">
                <span className={cn("grid h-16 w-16 shrink-0 place-items-center rounded-full", getTone(stat.tone))}>
                  <Icon className="h-8 w-8" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-3xl font-extrabold text-[#071538]">{stat.value}</p>
                  <h3 className="mt-1 text-base font-extrabold text-[#071538]">{stat.title}</h3>
                  <p className="mt-2 text-sm font-medium leading-6 text-[#526684]">{stat.note}</p>
                </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function AiVisualMap() {
  return (
    <div className="mx-auto w-full max-w-[760px] xl:max-w-[820px]">
      <div className="relative hidden min-h-[535px] overflow-hidden md:block xl:min-h-[560px]">
        <svg className="pointer-events-none absolute inset-0 h-full w-full text-[#7db6ff]" viewBox="0 0 900 660" preserveAspectRatio="none" aria-hidden="true">
          <path d="M450 148 V118 H256 V202" fill="none" stroke="currentColor" strokeDasharray="4 7" strokeWidth="2" />
          <path d="M450 148 V118 H678 V202" fill="none" stroke="currentColor" strokeDasharray="4 7" strokeWidth="2" />
          <path d="M346 312 H258 V360" fill="none" stroke="currentColor" strokeDasharray="4 7" strokeWidth="2" />
          <path d="M554 312 H714 V370" fill="none" stroke="currentColor" strokeDasharray="4 7" strokeWidth="2" />
          <path d="M450 476 V568 H240 V512" fill="none" stroke="currentColor" strokeDasharray="4 7" strokeWidth="2" />
          <path d="M450 476 V568 H690 V520" fill="none" stroke="currentColor" strokeDasharray="4 7" strokeWidth="2" />
        </svg>

        <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
          <AiAssistantCard />
        </div>

        {aiCards.map((card) => (
          <div key={card.title} className={cn("absolute z-20", card.className)}>
            <AiFeatureCard card={card} />
          </div>
        ))}
      </div>

      <div className="grid gap-3 md:hidden">
        <AiAssistantCard mobile />
        <div className="grid gap-3">
          {aiCards.map((card) => (
            <AiFeatureCard key={card.title} card={card} mobile />
          ))}
        </div>
      </div>
    </div>
  );
}

function AiAssistantCard({ mobile = false }: { mobile?: boolean }) {
  return (
    <div className={cn(
      "flex flex-col items-center justify-center rounded-[1.75rem] border border-[#dce5f4] bg-white text-center shadow-[0_24px_68px_rgba(25,52,101,0.13)]",
      mobile ? "min-h-[300px] p-5" : "h-[330px] w-[230px] p-5 xl:h-[345px] xl:w-[240px]",
    )}>
      <span className="grid h-32 w-32 place-items-center rounded-full bg-[radial-gradient(circle,#dbeafe_0%,#bfdbfe_54%,rgba(191,219,254,0.25)_72%)] xl:h-36 xl:w-36">
        <span className="relative grid h-20 w-20 place-items-center rounded-full bg-white shadow-[0_20px_46px_rgba(18,87,217,0.20)] xl:h-[88px] xl:w-[88px]">
          <Bot className="h-12 w-12 text-[#1257d9] xl:h-14 xl:w-14" aria-hidden="true" />
          <span className="absolute bottom-6 h-7 w-14 rounded-full bg-[#071538] text-center text-base leading-7 text-cyan-200">⌣</span>
        </span>
      </span>
      <h3 className="mt-5 text-lg font-extrabold text-[#071538] xl:text-xl">AI Assistant</h3>
      <p className="mt-2 max-w-[200px] text-xs font-medium leading-5 text-[#31466d] xl:text-sm xl:leading-6">Your intelligent partner for smarter healthcare operations.</p>
      <button type="button" className="mt-4 inline-flex items-center gap-2 rounded-xl border border-blue-100 bg-white px-3 py-2 text-[11px] font-extrabold text-[#1257d9] shadow-[0_12px_28px_rgba(25,52,101,0.08)] xl:px-4 xl:py-2.5 xl:text-xs">
        <Sparkles className="h-4 w-4" aria-hidden="true" />
        How can I help you today?
      </button>
    </div>
  );
}

function AiFeatureCard({ card, mobile = false }: { card: (typeof aiCards)[number]; mobile?: boolean }) {
  const Icon = card.icon;

  return (
    <article className={cn(
      "flex gap-3 rounded-2xl border border-[#dce5f4] bg-white shadow-[0_16px_40px_rgba(25,52,101,0.09)]",
      mobile ? "min-h-[118px] w-full p-4" : "min-h-[128px] w-[190px] p-4 xl:w-[200px]",
    )}>
      <span className={cn("grid h-10 w-10 shrink-0 place-items-center rounded-2xl xl:h-11 xl:w-11", getTone(card.tone))}>
        <Icon className="h-5 w-5 xl:h-6 xl:w-6" aria-hidden="true" />
      </span>
      <div className="min-w-0">
        <h3 className="text-sm font-extrabold text-[#071538] xl:text-base">{card.title}</h3>
        <p className="mt-1.5 text-[11px] font-medium leading-5 text-[#526684] xl:text-xs">{card.description}</p>
        <span className={cn("mt-3 inline-flex rounded-lg px-2.5 py-1 text-[10px] font-extrabold xl:text-[11px]", getTagTone(card.tone))}>{card.tag}</span>
      </div>
    </article>
  );
}

function getTone(tone: string) {
  const tones: Record<string, string> = {
    blue: "bg-blue-50 text-[#1257d9]",
    emerald: "bg-emerald-50 text-emerald-600",
    violet: "bg-violet-50 text-violet-600",
    orange: "bg-orange-50 text-orange-600",
    teal: "bg-teal-50 text-teal-600",
  };

  return tones[tone] ?? tones.blue;
}

function getTagTone(tone: string) {
  const tones: Record<string, string> = {
    blue: "bg-blue-50 text-[#1257d9]",
    emerald: "bg-emerald-50 text-emerald-700",
    violet: "bg-violet-50 text-violet-700",
    orange: "bg-orange-50 text-orange-700",
    teal: "bg-teal-50 text-teal-700",
  };

  return tones[tone] ?? tones.blue;
}

function SectionLabel({ children }: { children: string }) {
  return (
    <span className="text-xs font-black uppercase tracking-[0.22em] text-[#0b57e3]">
      {children}
    </span>
  );
}
