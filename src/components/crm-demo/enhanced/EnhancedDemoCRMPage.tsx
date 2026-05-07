"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Bell,
  Bot,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronDown,
  CircleDollarSign,
  ClipboardList,
  Database,
  Eye,
  GraduationCap,
  HeartPulse,
  Home,
  Kanban,
  LayoutDashboard,
  LineChart,
  Loader2,
  MessageCircle,
  Moon,
  Network,
  Phone,
  RotateCcw,
  Search,
  Send,
  Settings,
  Share2,
  ShieldCheck,
  Sparkles,
  Store,
  Sun,
  Ticket,
  Users,
  Workflow,
  X,
  Zap,
  type LucideIcon,
} from "lucide-react";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type Dispatch,
  type FormEvent,
  type SetStateAction,
} from "react";
import { DemoProvider, useDemo } from "@/lib/demoContext";
import { goalOptions, guideTips, industryOptions } from "@/lib/industryDemoData";
import type {
  DemoLead,
  DemoTabKey,
  DemoTask,
  DemoTicket,
  DemoWorkflow,
  GoalKey,
  IndustryData,
  IndustryKey,
  PipelineDeal,
  Priority,
  RoleName,
} from "@/lib/demoTypes";

type ToastState = {
  message: string;
  id: number;
} | null;

type WhatsAppState = "idle" | "sending" | "sent" | "delivered" | "read";

const roleOptions: RoleName[] = ["Business Owner", "Admin", "Manager", "Sales User", "Operations User"];

const tabConfig: Array<{ key: DemoTabKey; label: string; short: string; icon: LucideIcon }> = [
  { key: "overview", label: "Overview", short: "Home", icon: LayoutDashboard },
  { key: "leads", label: "Leads", short: "Leads", icon: ClipboardList },
  { key: "pipeline", label: "Pipeline", short: "Pipe", icon: Kanban },
  { key: "customers", label: "Customers", short: "Records", icon: Database },
  { key: "tasks", label: "Tasks", short: "Tasks", icon: CalendarDays },
  { key: "tickets", label: "Tickets", short: "Tickets", icon: Ticket },
  { key: "workflows", label: "Workflows", short: "Flows", icon: Workflow },
  { key: "roles", label: "Roles", short: "Roles", icon: ShieldCheck },
  { key: "reports", label: "Reports", short: "Reports", icon: BarChart3 },
  { key: "ai", label: "AI Assistant", short: "AI", icon: Bot },
  { key: "advanced", label: "Advanced Demo", short: "More", icon: Settings },
  { key: "roi", label: "ROI Preview", short: "ROI", icon: CircleDollarSign },
  { key: "build", label: "Build CRM", short: "Build", icon: Network },
];

const industryIcons: Record<IndustryData["icon"], LucideIcon> = {
  business: BriefcaseBusiness,
  education: GraduationCap,
  healthcare: HeartPulse,
  realEstate: Home,
  pharma: Building2,
  events: Ticket,
  saas: LineChart,
  local: Store,
};

const goalIcons: Record<GoalKey, LucideIcon> = {
  leads: ClipboardList,
  followups: RotateCcw,
  team: Users,
  tickets: Ticket,
  whatsapp: MessageCircle,
  revenue: BarChart3,
  "ai-scoring": Bot,
  workflows: Workflow,
};

const sourceClasses: Record<string, string> = {
  WhatsApp: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Website: "bg-blue-50 text-blue-700 border-blue-200",
  Facebook: "bg-indigo-50 text-indigo-700 border-indigo-200",
  "Facebook Ad": "bg-indigo-50 text-indigo-700 border-indigo-200",
  Instagram: "bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200",
  Referral: "bg-amber-50 text-amber-700 border-amber-200",
  "Walk-in": "bg-slate-100 text-slate-700 border-slate-200",
  JustDial: "bg-sky-50 text-sky-700 border-sky-200",
};

const rolePermissions = [
  "View all leads",
  "Add/edit leads",
  "Delete records",
  "View revenue dashboard",
  "View team performance",
  "Manage workflows",
  "Export data",
  "Manage users",
  "View AI assistant",
  "Configure automations",
];

const roleMatrix: Record<RoleName, boolean[]> = {
  "Business Owner": [true, true, true, true, true, true, true, true, true, true],
  Admin: [true, true, true, true, true, true, true, true, true, true],
  Manager: [true, true, false, true, true, true, true, false, true, false],
  "Sales User": [false, true, false, false, false, false, false, false, true, false],
  "Operations User": [false, true, false, false, false, true, false, false, true, false],
};

const integrationLogos = ["WhatsApp", "Razorpay", "IndiaMART", "Shopify", "Gmail", "Zoho", "Tally", "Google Sheets"];

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function initials(name: string) {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function formatInr(value: number) {
  return `Rs. ${new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(value)}`;
}

function priorityClass(priority: Priority) {
  if (priority === "High") return "bg-rose-50 text-rose-700 border-rose-200";
  if (priority === "Medium") return "bg-amber-50 text-amber-700 border-amber-200";
  return "bg-sky-50 text-sky-700 border-sky-200";
}

function statusClass(status: string) {
  if (status === "Hot" || status === "Very Hot") return "bg-rose-50 text-rose-700 border-rose-200";
  if (status === "Warm") return "bg-amber-50 text-amber-700 border-amber-200";
  if (status === "Cold") return "bg-blue-50 text-blue-700 border-blue-200";
  if (status === "Converted" || status === "Contacted" || status === "Resolved") return "bg-emerald-50 text-emerald-700 border-emerald-200";
  if (status === "Escalated") return "bg-red-50 text-red-700 border-red-200";
  if (status === "In Progress") return "bg-indigo-50 text-indigo-700 border-indigo-200";
  return "bg-slate-100 text-slate-700 border-slate-200";
}

function scoreLabel(score: number) {
  if (score <= 40) return "Cold";
  if (score <= 70) return "Warm";
  if (score <= 85) return "Hot";
  return "Very Hot";
}

function goalLabel(goals: GoalKey[]) {
  const selected = goalOptions.filter((goal) => goals.includes(goal.key));
  if (!selected.length) return "business clarity";
  return selected.map((goal) => goal.label.toLowerCase()).join(" and ");
}

function makeWhatsappMessage(data: IndustryData, lead: DemoLead) {
  return data.whatsappTemplate.replace("{{name}}", lead.name);
}

function sumDeals(deals: PipelineDeal[]) {
  return deals.reduce((total, deal) => total + deal.numericValue, 0);
}

function getTabLabel(tab: DemoTabKey) {
  return tabConfig.find((item) => item.key === tab)?.label ?? tab;
}

export function EnhancedDemoCRMPage() {
  return (
    <DemoProvider>
      <EnhancedDemoContent />
    </DemoProvider>
  );
}

function EnhancedDemoContent() {
  const {
    selectedIndustry,
    selectedGoals,
    setActiveTab,
    exploredTabs,
    simulationsRun,
    markSimulationRun,
    isDarkMode,
    setIsDarkMode,
    demoData,
  } = useDemo();
  const industryRef = useRef<HTMLDivElement | null>(null);
  const dashboardRef = useRef<HTMLDivElement | null>(null);
  const [toast, setToast] = useState<ToastState>(null);
  const [selectedLead, setSelectedLead] = useState<DemoLead | null>(null);
  const [scoreLead, setScoreLead] = useState<DemoLead | null>(null);
  const [whatsAppLead, setWhatsAppLead] = useState<DemoLead | null>(null);
  const [whatsAppState, setWhatsAppState] = useState<WhatsAppState>("idle");
  const [selectedCustomer, setSelectedCustomer] = useState<DemoLead | null>(null);
  const [selectedDeal, setSelectedDeal] = useState<PipelineDeal | null>(null);
  const [postSimCta, setPostSimCta] = useState(false);
  const [showRoiStrip, setShowRoiStrip] = useState(false);
  const [showBookCall, setShowBookCall] = useState(false);
  const [exitIntent, setExitIntent] = useState(false);

  const progressStep = selectedGoals.length ? 3 : selectedIndustry ? 2 : 1;
  const completion = Math.min(100, Math.round(((exploredTabs.length / tabConfig.length) * 70) + (simulationsRun.length ? 30 : 0)));

  useEffect(() => {
    if (exploredTabs.length >= 2) {
      setShowRoiStrip(true);
    }
  }, [exploredTabs.length]);

  useEffect(() => {
    if (!showRoiStrip) return;
    const timer = window.setTimeout(() => setShowBookCall(true), 60000);
    return () => window.clearTimeout(timer);
  }, [showRoiStrip]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (event.clientY < 12 && exploredTabs.length >= 2) {
        setExitIntent(true);
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [exploredTabs.length]);

  function showToast(message: string) {
    setToast({ message, id: Date.now() });
    window.setTimeout(() => setToast(null), 3200);
  }

  function showSimulationCta(kind: string) {
    markSimulationRun(kind);
    setPostSimCta(true);
    window.setTimeout(() => setPostSimCta(false), 5000);
  }

  function openScorePanel(lead: DemoLead) {
    setScoreLead(null);
    showToast(`AI is scoring ${lead.name}...`);
    window.setTimeout(() => {
      setScoreLead(lead);
      showSimulationCta("ai-score");
    }, 1200);
  }

  function openWhatsApp(lead: DemoLead) {
    setWhatsAppLead(lead);
    setWhatsAppState("idle");
  }

  function runWhatsAppSend() {
    if (!whatsAppLead) return;
    setWhatsAppState("sending");
    window.setTimeout(() => setWhatsAppState("sent"), 500);
    window.setTimeout(() => setWhatsAppState("delivered"), 1000);
    window.setTimeout(() => {
      setWhatsAppState("read");
      showToast(`WhatsApp message sent to ${whatsAppLead.name}.`);
      showSimulationCta("whatsapp");
    }, 1500);
  }

  function scrollToDashboard(tab?: DemoTabKey) {
    if (tab) setActiveTab(tab);
    dashboardRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <main
      className={cn(
        "relative min-h-screen overflow-hidden transition-colors",
        isDarkMode ? "bg-slate-950 text-slate-100" : "bg-[#f8fbff] text-slate-950",
      )}
    >
      <HeroSection
        progressStep={progressStep}
        scrollToIndustry={() => industryRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })}
        isDarkMode={isDarkMode}
      />
      <section ref={industryRef} className="relative px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[min(95vw,1600px)]">
          <IndustrySelector />
          <GoalSelector scrollToDashboard={() => scrollToDashboard()} />
          <TestimonialStrip />
        </div>
      </section>
      <section ref={dashboardRef} className="relative px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px]">
          <DashboardShell
            showToast={showToast}
            openScorePanel={openScorePanel}
            openWhatsApp={openWhatsApp}
            setSelectedLead={setSelectedLead}
            setSelectedCustomer={setSelectedCustomer}
            setSelectedDeal={setSelectedDeal}
            showSimulationCta={showSimulationCta}
            scrollToIndustry={() => industryRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })}
            completion={completion}
          />
        </div>
      </section>
      <CompareSaasSection />
      <LeadDetailPanel lead={selectedLead} onClose={() => setSelectedLead(null)} title="Lead detail" />
      <LeadDetailPanel lead={selectedCustomer} onClose={() => setSelectedCustomer(null)} title="Customer profile" />
      <DealPanel deal={selectedDeal} onClose={() => setSelectedDeal(null)} />
      <AIScorePanel lead={scoreLead} onClose={() => setScoreLead(null)} />
      <WhatsAppModal
        lead={whatsAppLead}
        message={whatsAppLead ? makeWhatsappMessage(demoData, whatsAppLead) : ""}
        state={whatsAppState}
        onClose={() => setWhatsAppLead(null)}
        onSend={runWhatsAppSend}
        openWorkflows={() => {
          setWhatsAppLead(null);
          scrollToDashboard("workflows");
        }}
      />
      <GuidedAssistant />
      <RoiStrip
        visible={showRoiStrip}
        onDismiss={() => setShowRoiStrip(false)}
        onCalculate={() => scrollToDashboard("roi")}
      />
      <BookCallCard visible={showBookCall} onDismiss={() => setShowBookCall(false)} />
      <PostSimulationCta visible={postSimCta} />
      <ExitIntentOverlay visible={exitIntent} onClose={() => setExitIntent(false)} />
      <Toast toast={toast} />
      <button
        type="button"
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="fixed bottom-5 left-5 z-50 hidden h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm lg:grid"
        aria-label="Toggle dark mode"
      >
        {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      </button>
    </main>
  );
}

function HeroSection({
  progressStep,
  scrollToIndustry,
  isDarkMode,
}: {
  progressStep: number;
  scrollToIndustry: () => void;
  isDarkMode: boolean;
}) {
  const steps = ["Choose Industry", "Set Your Goal", "Explore Your CRM"];

  return (
    <section className="relative overflow-hidden px-4 pb-12 pt-28 sm:px-6 lg:px-8 lg:pb-16 lg:pt-32">
      <div
        className={cn(
          "absolute inset-0",
          isDarkMode
            ? "bg-[linear-gradient(135deg,#020617_0%,#0f172a_45%,#111827_100%)]"
            : "bg-[linear-gradient(135deg,#f8fbff_0%,#ffffff_42%,#eef6ff_100%)]",
        )}
      />
      <div className="absolute inset-0 opacity-[0.34] [background-image:linear-gradient(rgba(37,99,235,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.12)_1px,transparent_1px)] [background-size:34px_34px]" />
      <motion.div
        animate={{ y: [0, -16, 0], opacity: [0.3, 0.65, 0.3] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[12%] top-24 h-28 w-28 rounded-full border border-blue-200/80 bg-white/40 blur-sm"
      />
      <motion.div
        animate={{ y: [0, 18, 0], opacity: [0.25, 0.55, 0.25] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[12%] top-36 h-20 w-20 rounded-full border border-cyan-200/80 bg-blue-100/40 blur-sm"
      />
      <div className="relative mx-auto max-w-5xl text-center">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/90 px-4 py-2 text-sm font-bold text-blue-700 shadow-sm">
          <Sparkles className="h-4 w-4 text-blue-600" aria-hidden="true" />
          Interactive CRM demo for Indian businesses
        </div>
        <h1 className="mt-6 text-balance text-4xl font-extrabold tracking-[-0.035em] sm:text-5xl lg:text-6xl">
          Experience Your Custom CRM - Before You Build It.
        </h1>
        <p className={cn("mx-auto mt-5 max-w-3xl text-lg leading-8", isDarkMode ? "text-slate-300" : "text-slate-600")}>
          Choose your industry. Set your goal. Explore a live CRM dashboard built around your real business workflow,
          team, and data.
        </p>
        <div className="mx-auto mt-8 flex max-w-4xl flex-col items-center justify-center gap-3 md:flex-row">
          {steps.map((step, index) => {
            const isActive = progressStep >= index + 1;
            return (
              <div key={step} className="flex items-center gap-3">
                <span
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-extrabold transition",
                    isActive
                      ? "border-blue-200 bg-blue-600 text-white"
                      : "border-slate-200 bg-white/90 text-slate-500",
                  )}
                >
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-white/20 text-xs">{index + 1}</span>
                  {step}
                </span>
                {index < steps.length - 1 ? <ArrowRight className="hidden h-4 w-4 text-blue-400 md:block" /> : null}
              </div>
            );
          })}
        </div>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={scrollToIndustry}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-blue-600 px-6 text-sm font-extrabold text-white shadow-[0_18px_40px_rgba(37,99,235,0.22)] transition hover:bg-blue-700"
          >
            Start Your Demo
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
          <span className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-700">
            No signup required
          </span>
        </div>
      </div>
    </section>
  );
}

function IndustrySelector() {
  const { selectedIndustry, setSelectedIndustry } = useDemo();

  function handleKey(event: React.KeyboardEvent<HTMLButtonElement>, index: number) {
    const nextIndex =
      event.key === "ArrowRight" || event.key === "ArrowDown"
        ? Math.min(index + 1, industryOptions.length - 1)
        : event.key === "ArrowLeft" || event.key === "ArrowUp"
          ? Math.max(index - 1, 0)
          : index;

    if (nextIndex !== index) {
      event.preventDefault();
      const next = document.querySelector<HTMLButtonElement>(`[data-industry-index="${nextIndex}"]`);
      next?.focus();
    }
  }

  return (
    <div>
      <StepHeader
        step="Step 1"
        title="Choose your industry"
        description="Every card changes the demo data, dashboard labels, workflows, reports, AI answers, and ROI defaults."
      />
      <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {industryOptions.map((item, index) => {
          const Icon = industryIcons[item.icon];
          const active = item.key === selectedIndustry;
          return (
            <button
              key={item.key}
              type="button"
              data-industry-index={index}
              onKeyDown={(event) => handleKey(event, index)}
              onClick={() => setSelectedIndustry(item.key)}
              className={cn(
                "group relative min-h-[210px] overflow-hidden rounded-[14px] border bg-white p-5 text-left shadow-[0_1px_3px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.06)] transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-[0_16px_40px_rgba(15,23,42,0.08)]",
                active ? "border-blue-300 bg-blue-50/80 pl-6 ring-1 ring-blue-100" : "border-slate-200",
                selectedIndustry !== item.key && selectedIndustry ? "opacity-80 hover:opacity-100" : "",
              )}
            >
              <span className={cn("absolute inset-y-0 left-0 w-1.5 bg-blue-600 transition", active ? "opacity-100" : "opacity-0")} />
              <div className="flex items-start justify-between gap-3">
                <span className={cn("grid h-14 w-14 place-items-center rounded-xl border", active ? "border-blue-200 bg-white text-blue-700" : "border-slate-200 bg-slate-50 text-slate-700")}>
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </span>
                {active ? (
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-blue-600 text-white">
                    <Check className="h-4 w-4" aria-hidden="true" />
                  </span>
                ) : null}
              </div>
              <h3 className="mt-5 text-lg font-extrabold text-slate-950">{item.name}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function GoalSelector({ scrollToDashboard }: { scrollToDashboard: () => void }) {
  const { selectedGoals, toggleGoal, highlightedTabs, demoData } = useDemo();

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-10 rounded-[18px] border border-slate-200 bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.06)]"
    >
      <StepHeader
        step="Step 2"
        title="What's your primary goal?"
        description="Choose up to two. The matching dashboard tabs will pulse when your CRM loads."
      />
      <div className="mt-5 flex gap-3 overflow-x-auto pb-2 lg:flex-wrap">
        {goalOptions.map((goal) => {
          const Icon = goalIcons[goal.key];
          const active = selectedGoals.includes(goal.key);
          return (
            <button
              key={goal.key}
              type="button"
              onClick={() => toggleGoal(goal.key)}
              className={cn(
                "inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-extrabold transition",
                active ? "border-blue-300 bg-blue-600 text-white shadow-sm" : "border-slate-200 bg-slate-50 text-slate-700 hover:border-blue-200 hover:bg-blue-50",
              )}
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
              {goal.label}
            </button>
          );
        })}
      </div>
      <div className="mt-5 flex flex-col gap-4 rounded-[14px] bg-slate-50 p-4 lg:flex-row lg:items-center lg:justify-between">
        <p className="text-sm font-semibold leading-6 text-slate-700">
          Welcome. Here is your {demoData.name} focused on {goalLabel(selectedGoals)}.
          {highlightedTabs.length ? ` Highlighted tabs: ${highlightedTabs.map(getTabLabel).join(", ")}.` : ""}
        </p>
        <button
          type="button"
          onClick={scrollToDashboard}
          className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-blue-600 px-5 text-sm font-extrabold text-white transition hover:bg-blue-700"
        >
          Explore My CRM Dashboard
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </motion.div>
  );
}

function StepHeader({ step, title, description }: { step: string; title: string; description: string }) {
  return (
    <div>
      <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-blue-700">{step}</p>
      <h2 className="mt-2 text-2xl font-extrabold tracking-[-0.02em] text-slate-950 sm:text-3xl">{title}</h2>
      <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">{description}</p>
    </div>
  );
}

function TestimonialStrip() {
  const items = industryOptions.slice(0, 3);
  return (
    <div className="mt-8 grid gap-4 lg:grid-cols-3">
      {items.map((item) => (
        <div key={item.key} className="rounded-[14px] border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm leading-7 text-slate-700">
            &quot;HNX mapped our {item.name.replace(" CRM", "").toLowerCase()} workflow into one dashboard. We stopped
            chasing updates in spreadsheets.&quot;
          </p>
          <p className="mt-4 text-xs font-extrabold uppercase tracking-[0.18em] text-blue-700">Client story</p>
        </div>
      ))}
    </div>
  );
}

function DashboardShell({
  showToast,
  openScorePanel,
  openWhatsApp,
  setSelectedLead,
  setSelectedCustomer,
  setSelectedDeal,
  showSimulationCta,
  scrollToIndustry,
  completion,
}: {
  showToast: (message: string) => void;
  openScorePanel: (lead: DemoLead) => void;
  openWhatsApp: (lead: DemoLead) => void;
  setSelectedLead: (lead: DemoLead | null) => void;
  setSelectedCustomer: (lead: DemoLead | null) => void;
  setSelectedDeal: (deal: PipelineDeal | null) => void;
  showSimulationCta: (kind: string) => void;
  scrollToIndustry: () => void;
  completion: number;
}) {
  const { demoData, selectedIndustry, activeTab, setActiveTab, highlightedTabs, selectedRole, setSelectedRole, isDarkMode, setIsDarkMode, resetDemo } =
    useDemo();
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [deals, setDeals] = useState(demoData.pipelineDeals);
  const [tasks, setTasks] = useState(demoData.tasks);
  const [tickets, setTickets] = useState(demoData.tickets);
  const [workflows, setWorkflows] = useState(demoData.workflows);
  const [activity, setActivity] = useState(demoData.activityFeed);

  useEffect(() => {
    setLoading(true);
    const timer = window.setTimeout(() => {
      setDeals(demoData.pipelineDeals);
      setTasks(demoData.tasks);
      setTickets(demoData.tickets);
      setWorkflows(demoData.workflows);
      setActivity(demoData.activityFeed);
      setLoading(false);
    }, 350);
    return () => window.clearTimeout(timer);
  }, [demoData, selectedIndustry]);

  function selectTab(tab: DemoTabKey) {
    setActiveTab(tab);
  }

  function shareDemo() {
    try {
      const url = new URL(window.location.href);
      url.searchParams.set("industry", selectedIndustry);
      const text = url.toString();
      void navigator.clipboard?.writeText(text);
      showToast("Shareable demo URL copied.");
    } catch {
      showToast("Share URL is ready in your browser bar.");
    }
  }

  return (
    <div className={cn("overflow-hidden rounded-[18px] border shadow-[0_1px_3px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.06)]", isDarkMode ? "border-slate-700 bg-slate-900" : "border-slate-200 bg-white")}>
      <div className={cn("border-b px-4 py-4 lg:px-5", isDarkMode ? "border-slate-700 bg-slate-900" : "border-slate-200 bg-white")}>
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 text-base font-extrabold">
              <Network className="h-5 w-5 text-blue-600" aria-hidden="true" />
              HNX
            </div>
            <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-extrabold text-blue-700">
              {demoData.name}
            </span>
            <button
              type="button"
              onClick={scrollToIndustry}
              className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-700 transition hover:border-blue-200 hover:text-blue-700"
            >
              Switch Industry
            </button>
          </div>
          <div className="flex flex-col gap-3 md:flex-row md:items-center">
            <label className="relative min-w-0 md:w-72">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search leads, records, reports..."
                className="h-10 w-full rounded-full border border-slate-200 bg-slate-50 pl-9 pr-4 text-sm outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-100"
              />
            </label>
            <select
              value={selectedRole}
              onChange={(event) => {
                setSelectedRole(event.target.value as RoleName);
                showToast(`Role changed to ${event.target.value}. Visibility updated.`);
              }}
              className="h-10 rounded-full border border-slate-200 bg-white px-3 text-sm font-bold text-slate-700 outline-none"
            >
              {roleOptions.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
            <button type="button" onClick={() => setNotificationsOpen(!notificationsOpen)} className="relative grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-700">
              <Bell className="h-4 w-4" />
              <span className="absolute right-1.5 top-1.5 h-2.5 w-2.5 rounded-full bg-red-500" />
            </button>
            <button type="button" onClick={() => setIsDarkMode(!isDarkMode)} className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-700">
              {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button type="button" onClick={shareDemo} className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-700">
              <Share2 className="h-4 w-4" />
            </button>
            <button type="button" onClick={resetDemo} className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-700">
              <RotateCcw className="h-4 w-4" />
            </button>
          </div>
        </div>
        <AnimatePresence>
          {notificationsOpen ? (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="mt-4 grid gap-2 rounded-[14px] border border-slate-200 bg-slate-50 p-3 md:max-w-xl"
            >
              {demoData.notifications.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => showToast("Notification dismissed.")}
                  className="flex items-center gap-3 rounded-xl bg-white px-3 py-2 text-left text-sm font-semibold text-slate-700"
                >
                  <span className="h-2 w-2 rounded-full bg-blue-600" />
                  {item.text}
                </button>
              ))}
            </motion.div>
          ) : null}
        </AnimatePresence>
        {completion >= 80 ? (
          <div className="mt-4 rounded-[14px] border border-emerald-200 bg-emerald-50 p-3">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <p className="text-sm font-extrabold text-emerald-800">You have explored {completion}% of the demo.</p>
              <button type="button" onClick={() => selectTab("build")} className="text-sm font-extrabold text-emerald-700">
                Generate your CRM blueprint
              </button>
            </div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-white">
              <div className="h-full rounded-full bg-emerald-500" style={{ width: `${completion}%` }} />
            </div>
          </div>
        ) : null}
      </div>
      <div className="grid lg:grid-cols-[250px_minmax(0,1fr)]">
        <aside className={cn("hidden border-r p-3 lg:block", isDarkMode ? "border-slate-700 bg-slate-900" : "border-slate-200 bg-slate-50")}>
          <TabNav activeTab={activeTab} setActiveTab={selectTab} highlightedTabs={highlightedTabs} />
        </aside>
        <div className="min-w-0 p-4 lg:p-6">
          <MobileTabNav activeTab={activeTab} setActiveTab={selectTab} highlightedTabs={highlightedTabs} />
          {loading ? (
            <DashboardSkeleton />
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={`${selectedIndustry}-${activeTab}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.24 }}
                className="min-h-[720px]"
              >
                {activeTab === "overview" ? <OverviewTab activity={activity} setActiveTab={selectTab} /> : null}
                {activeTab === "leads" ? (
                  <LeadsTab search={search} openScorePanel={openScorePanel} openWhatsApp={openWhatsApp} setSelectedLead={setSelectedLead} />
                ) : null}
                {activeTab === "pipeline" ? (
                  <PipelineTab deals={deals} setDeals={setDeals} setSelectedDeal={setSelectedDeal} showToast={showToast} showSimulationCta={showSimulationCta} />
                ) : null}
                {activeTab === "customers" ? <CustomersTab setSelectedCustomer={setSelectedCustomer} openWhatsApp={openWhatsApp} /> : null}
                {activeTab === "tasks" ? <TasksTab tasks={tasks} setTasks={setTasks} openWhatsApp={openWhatsApp} showToast={showToast} /> : null}
                {activeTab === "tickets" ? <TicketsTab tickets={tickets} setTickets={setTickets} showToast={showToast} /> : null}
                {activeTab === "workflows" ? (
                  <WorkflowsTab workflows={workflows} setWorkflows={setWorkflows} setActivity={setActivity} showToast={showToast} showSimulationCta={showSimulationCta} />
                ) : null}
                {activeTab === "roles" ? <RolesTab showToast={showToast} /> : null}
                {activeTab === "reports" ? <ReportsTab /> : null}
                {activeTab === "ai" ? <AIAssistantTab /> : null}
                {activeTab === "advanced" ? <AdvancedDemoTab /> : null}
                {activeTab === "roi" ? <ROIPreviewTab /> : null}
                {activeTab === "build" ? <BuildCrmTab showToast={showToast} /> : null}
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>
    </div>
  );
}

function TabNav({
  activeTab,
  setActiveTab,
  highlightedTabs,
}: {
  activeTab: DemoTabKey;
  setActiveTab: (tab: DemoTabKey) => void;
  highlightedTabs: DemoTabKey[];
}) {
  return (
    <div className="space-y-1">
      {tabConfig.map((tab) => {
        const Icon = tab.icon;
        const active = activeTab === tab.key;
        const highlight = highlightedTabs.includes(tab.key);
        return (
          <button
            key={tab.key}
            type="button"
            onClick={() => setActiveTab(tab.key)}
            className={cn(
              "relative flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-extrabold transition",
              active ? "bg-blue-600 text-white" : "text-slate-600 hover:bg-white hover:text-blue-700",
            )}
          >
            <Icon className="h-4 w-4" />
            {tab.label}
            {highlight ? <span className="ml-auto h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400" /> : null}
          </button>
        );
      })}
    </div>
  );
}

function MobileTabNav({
  activeTab,
  setActiveTab,
  highlightedTabs,
}: {
  activeTab: DemoTabKey;
  setActiveTab: (tab: DemoTabKey) => void;
  highlightedTabs: DemoTabKey[];
}) {
  const primary = tabConfig.slice(0, 5);
  const more = tabConfig.slice(5);
  const activeInMore = more.some((tab) => tab.key === activeTab);

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 px-2 py-2 shadow-[0_-10px_30px_rgba(15,23,42,0.10)] backdrop-blur lg:hidden">
      <div className="mx-auto grid max-w-xl grid-cols-6 gap-1">
        {primary.map((tab) => {
          const Icon = tab.icon;
          const active = activeTab === tab.key;
          const highlight = highlightedTabs.includes(tab.key);
          return (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveTab(tab.key)}
              className={cn("relative grid rounded-xl px-1 py-1.5 text-[10px] font-extrabold", active ? "bg-blue-50 text-blue-700" : "text-slate-500")}
            >
              <Icon className="mx-auto h-4 w-4" />
              {tab.short}
              {highlight ? <span className="absolute right-2 top-1 h-2 w-2 animate-pulse rounded-full bg-emerald-500" /> : null}
            </button>
          );
        })}
        <label className={cn("relative grid rounded-xl px-1 py-1.5 text-center text-[10px] font-extrabold", activeInMore ? "bg-blue-50 text-blue-700" : "text-slate-500")}>
          <ChevronDown className="mx-auto h-4 w-4" />
          More
          <select
            value={activeInMore ? activeTab : ""}
            onChange={(event) => event.target.value && setActiveTab(event.target.value as DemoTabKey)}
            className="absolute inset-0 opacity-0"
            aria-label="More demo tabs"
          >
            <option value="">More</option>
            {more.map((tab) => (
              <option key={tab.key} value={tab.key}>
                {tab.label}
              </option>
            ))}
          </select>
        </label>
      </div>
    </div>
  );
}

function DashboardSkeleton() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {Array.from({ length: 8 }).map((_, index) => (
        <div key={index} className="h-32 animate-pulse rounded-[14px] bg-slate-100" />
      ))}
    </div>
  );
}

function OverviewTab({ activity, setActiveTab }: { activity: IndustryData["activityFeed"]; setActiveTab: (tab: DemoTabKey) => void }) {
  const { demoData, selectedRole, selectedGoals } = useDemo();
  return (
    <div>
      <TabHeader
        eyebrow="Live custom CRM preview"
        title={`Welcome. Here's your ${demoData.name} focused on ${goalLabel(selectedGoals)}.`}
        description={demoData.welcomeMessage}
      />
      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {demoData.kpis.map((kpi, index) => (
          <MetricCard key={kpi.label} kpi={kpi} delay={index * 0.04} />
        ))}
      </div>
      <div className="mt-6 grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[14px] border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-lg font-extrabold text-slate-950">Business workflow</h3>
          <p className="mt-1 text-sm text-slate-500">Source to CRM to assignment to follow-up to report.</p>
          <div className="mt-5 grid gap-3 md:grid-cols-5">
            {["Source", "CRM", "Assign", "Follow-up", "Report"].map((item, index) => (
              <div key={item} className="relative rounded-[12px] border border-blue-100 bg-blue-50 p-4 text-center">
                <span className="mx-auto grid h-10 w-10 place-items-center rounded-full bg-white text-blue-700">
                  {index + 1}
                </span>
                <p className="mt-3 text-sm font-extrabold text-slate-950">{item}</p>
                {index < 4 ? <ArrowRight className="absolute -right-4 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-blue-300 md:block" /> : null}
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[14px] border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-lg font-extrabold text-slate-950">AI insight preview</h3>
          <div className="mt-4 space-y-3">
            {demoData.aiInsights.slice(0, 3).map((insight) => (
              <div key={insight} className="flex gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm font-semibold text-slate-700">
                <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                {insight}
              </div>
            ))}
          </div>
          <button type="button" onClick={() => setActiveTab("ai")} className="mt-4 inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-extrabold text-white">
            Open AI Assistant
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="mt-6 grid gap-5 xl:grid-cols-[0.85fr_1.15fr]">
        <ActivityFeed items={activity} />
        <div className="rounded-[14px] border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-lg font-extrabold text-slate-950">Role-based view</h3>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            You are viewing the demo as <strong>{selectedRole}</strong>. In a real HNX CRM Systems, this controls modules,
            revenue visibility, team reports, workflow management, exports, and user permissions.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {["Visible records", "Allowed actions", "Hidden data"].map((item) => (
              <div key={item} className="rounded-xl bg-slate-50 p-3 text-sm font-bold text-slate-700">{item}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MetricCard({ kpi, delay }: { kpi: IndustryData["kpis"][number]; delay: number }) {
  const up = kpi.trend === "up";
  const down = kpi.trend === "down";
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.32, delay }}
      className="rounded-[14px] border border-slate-200 bg-white p-4 shadow-sm"
    >
      <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-slate-500">{kpi.label}</p>
      <div className="mt-3 flex items-end justify-between gap-3">
        <div>
          <p className="text-2xl font-extrabold tracking-[-0.02em] text-slate-950">{kpi.value}</p>
          <p className={cn("mt-1 text-xs font-extrabold", up ? "text-emerald-600" : down ? "text-red-600" : "text-slate-500")}>
            {up ? "Up" : down ? "Down" : "Live"} {kpi.change}
          </p>
        </div>
        <Sparkline values={kpi.sparkline} color={up ? "#16a34a" : down ? "#dc2626" : "#64748b"} />
      </div>
    </motion.div>
  );
}

function Sparkline({ values, color }: { values: number[]; color: string }) {
  const max = Math.max(...values);
  const min = Math.min(...values);
  const points = values
    .map((value, index) => {
      const x = (index / Math.max(values.length - 1, 1)) * 96;
      const y = 34 - ((value - min) / Math.max(max - min, 1)) * 30;
      return `${x},${y}`;
    })
    .join(" ");
  return (
    <svg viewBox="0 0 100 38" className="h-10 w-24" aria-hidden="true">
      <polyline points={points} fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ActivityFeed({ items }: { items: IndustryData["activityFeed"] }) {
  return (
    <div className="rounded-[14px] border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-lg font-extrabold text-slate-950">Live activity feed</h3>
      <div className="mt-4 space-y-3">
        {items.slice(0, 6).map((item) => (
          <div key={item.id} className="flex gap-3 rounded-xl bg-slate-50 p-3">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-blue-600 text-xs font-extrabold text-white">{item.initials}</span>
            <div>
              <p className="text-sm font-semibold leading-6 text-slate-700">{item.text}</p>
              <p className="text-xs font-bold text-slate-400">{item.timestamp}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TabHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div>
      <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-blue-700">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-extrabold tracking-[-0.03em] text-slate-950">{title}</h2>
      <p className="mt-2 max-w-4xl text-sm leading-7 text-slate-600">{description}</p>
    </div>
  );
}

function LeadsTab({
  search,
  openScorePanel,
  openWhatsApp,
  setSelectedLead,
}: {
  search: string;
  openScorePanel: (lead: DemoLead) => void;
  openWhatsApp: (lead: DemoLead) => void;
  setSelectedLead: (lead: DemoLead | null) => void;
}) {
  const { demoData } = useDemo();
  const [status, setStatus] = useState("All");
  const [source, setSource] = useState("All");
  const [assigned, setAssigned] = useState("All");
  const [sort, setSort] = useState("Score");

  const filtered = useMemo(() => {
    const term = search.toLowerCase();
    return demoData.leads
      .filter((lead) => (status === "All" ? true : lead.status === status))
      .filter((lead) => (source === "All" ? true : lead.source === source))
      .filter((lead) => (assigned === "All" ? true : lead.assigned === assigned))
      .filter((lead) => `${lead.name} ${lead.company} ${lead.source}`.toLowerCase().includes(term))
      .sort((a, b) => {
        if (sort === "Name") return a.name.localeCompare(b.name);
        if (sort === "Value") return b.numericValue - a.numericValue;
        if (sort === "Last Contact") return a.lastContact.localeCompare(b.lastContact);
        return b.aiScore - a.aiScore;
      });
  }, [assigned, demoData.leads, search, sort, source, status]);

  const statuses = ["All", ...Array.from(new Set(demoData.leads.map((lead) => lead.status)))];
  const sources = ["All", ...Array.from(new Set(demoData.leads.map((lead) => lead.source)))];
  const owners = ["All", ...Array.from(new Set(demoData.leads.map((lead) => lead.assigned)))];

  return (
    <div>
      <TabHeader eyebrow="Lead intelligence" title="Leads and inquiries that act like real CRM data" description="Filter, sort, open records, simulate AI scoring, and preview WhatsApp follow-ups." />
      <FilterBar
        filters={[
          ["Status", status, statuses, setStatus],
          ["Source", source, sources, setSource],
          ["Assigned", assigned, owners, setAssigned],
          ["Sort by", sort, ["Name", "Score", "Value", "Last Contact"], setSort],
        ]}
      />
      <div className="mt-5 hidden overflow-hidden rounded-[14px] border border-slate-200 bg-white shadow-sm lg:block">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-[0.12em] text-slate-500">
            <tr>
              {["Name", "Source", "Status", "AI Score", "Assigned", "Last Contact", "Value", "Actions"].map((header) => (
                <th key={header} className="px-4 py-3 font-extrabold">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((lead) => (
              <LeadRow key={lead.id} lead={lead} openScorePanel={openScorePanel} openWhatsApp={openWhatsApp} setSelectedLead={setSelectedLead} />
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-5 grid gap-3 lg:hidden">
        {filtered.map((lead) => (
          <LeadMobileCard key={lead.id} lead={lead} openScorePanel={openScorePanel} openWhatsApp={openWhatsApp} setSelectedLead={setSelectedLead} />
        ))}
      </div>
      {!filtered.length ? <EmptyState text="No leads match this filter. Try changing status, source, or assigned user." /> : null}
    </div>
  );
}

function FilterBar({ filters }: { filters: Array<[string, string, string[], Dispatch<SetStateAction<string>>]> }) {
  return (
    <div className="mt-5 flex gap-3 overflow-x-auto rounded-[14px] border border-slate-200 bg-white p-3">
      {filters.map(([label, value, options, setValue]) => (
        <label key={label} className="shrink-0">
          <span className="mb-1 block text-[11px] font-extrabold uppercase tracking-[0.16em] text-slate-500">{label}</span>
          <select value={value} onChange={(event) => setValue(event.target.value)} className="h-10 rounded-lg border border-slate-200 bg-slate-50 px-3 text-sm font-bold text-slate-700 outline-none">
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      ))}
    </div>
  );
}

function LeadRow({
  lead,
  openScorePanel,
  openWhatsApp,
  setSelectedLead,
}: {
  lead: DemoLead;
  openScorePanel: (lead: DemoLead) => void;
  openWhatsApp: (lead: DemoLead) => void;
  setSelectedLead: (lead: DemoLead | null) => void;
}) {
  return (
    <tr onClick={() => setSelectedLead(lead)} className="cursor-pointer border-t border-slate-100 transition hover:bg-blue-50/40">
      <td className="px-4 py-4">
        <div className="flex items-center gap-3">
          <Avatar name={lead.name} />
          <div>
            <p className="font-extrabold text-slate-950">{lead.name}</p>
            <p className="text-xs text-slate-500">{lead.company}</p>
          </div>
        </div>
      </td>
      <td className="px-4 py-4"><Badge className={sourceClasses[lead.source] ?? "bg-slate-50 text-slate-700 border-slate-200"}>{lead.source}</Badge></td>
      <td className="px-4 py-4"><Badge className={statusClass(lead.status)}>{lead.status}</Badge></td>
      <td className="px-4 py-4"><ScoreBar score={lead.aiScore} /></td>
      <td className="px-4 py-4 font-semibold text-slate-700">{lead.assigned}</td>
      <td className="px-4 py-4 text-slate-500">{lead.lastContact}</td>
      <td className="px-4 py-4 font-extrabold text-slate-950">{lead.value}</td>
      <td className="px-4 py-4">
        <div className="flex gap-2">
          <IconButton icon={Bot} label="AI Score" onClick={(event) => { event.stopPropagation(); openScorePanel(lead); }} />
          <IconButton icon={MessageCircle} label="Send WhatsApp" onClick={(event) => { event.stopPropagation(); openWhatsApp(lead); }} />
          <IconButton icon={Eye} label="View" onClick={(event) => { event.stopPropagation(); setSelectedLead(lead); }} />
        </div>
      </td>
    </tr>
  );
}

function LeadMobileCard({
  lead,
  openScorePanel,
  openWhatsApp,
  setSelectedLead,
}: {
  lead: DemoLead;
  openScorePanel: (lead: DemoLead) => void;
  openWhatsApp: (lead: DemoLead) => void;
  setSelectedLead: (lead: DemoLead | null) => void;
}) {
  return (
    <div className="rounded-[14px] border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div className="flex gap-3">
          <Avatar name={lead.name} />
          <div>
            <p className="font-extrabold text-slate-950">{lead.name}</p>
            <p className="text-xs text-slate-500">{lead.value}</p>
          </div>
        </div>
        <Badge className={statusClass(lead.status)}>{lead.status}</Badge>
      </div>
      <div className="mt-4">
        <ScoreBar score={lead.aiScore} />
      </div>
      <div className="mt-4 flex gap-2">
        <button type="button" onClick={() => openScorePanel(lead)} className="flex-1 rounded-full bg-blue-600 px-3 py-2 text-xs font-extrabold text-white">AI Score</button>
        <button type="button" onClick={() => openWhatsApp(lead)} className="flex-1 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs font-extrabold text-emerald-700">WhatsApp</button>
        <button type="button" onClick={() => setSelectedLead(lead)} className="rounded-full border border-slate-200 px-3 py-2 text-xs font-extrabold text-slate-700">View</button>
      </div>
    </div>
  );
}

function PipelineTab({
  deals,
  setDeals,
  setSelectedDeal,
  showToast,
  showSimulationCta,
}: {
  deals: Record<string, PipelineDeal[]>;
  setDeals: Dispatch<SetStateAction<Record<string, PipelineDeal[]>>>;
  setSelectedDeal: (deal: PipelineDeal | null) => void;
  showToast: (message: string) => void;
  showSimulationCta: (kind: string) => void;
}) {
  const { demoData } = useDemo();
  const [movedId, setMovedId] = useState<string | null>(null);
  const firstMovableStage = demoData.pipelineStages.find((stage, index) => index < demoData.pipelineStages.length - 1 && (deals[stage]?.length ?? 0) > 0);
  const firstMovableDeal = firstMovableStage ? deals[firstMovableStage]?.[0] : null;

  function moveDeal(stage: string, deal: PipelineDeal) {
    const fromIndex = demoData.pipelineStages.indexOf(stage);
    const nextStage = demoData.pipelineStages[fromIndex + 1];
    if (!nextStage) return;
    setMovedId(deal.id);
    window.setTimeout(() => {
      setDeals((current) => ({
        ...current,
        [stage]: current[stage].filter((item) => item.id !== deal.id),
        [nextStage]: [deal, ...(current[nextStage] ?? [])],
      }));
      showToast(nextStage === demoData.pipelineStages.at(-1) ? `New deal won. ${deal.value} added to revenue.` : `Deal moved to ${nextStage}.`);
      showSimulationCta("deal-move");
      window.setTimeout(() => setMovedId(null), 700);
    }, 450);
  }

  return (
    <div>
      <TabHeader eyebrow="Sales pipeline" title={`${demoData.name} kanban board`} description="Move the highlighted deal to watch counts and totals update." />
      <div className="mt-5 flex gap-4 overflow-x-auto pb-4">
        {demoData.pipelineStages.map((stage) => {
          const stageDeals = deals[stage] ?? [];
          return (
            <div key={stage} className="w-[240px] shrink-0 rounded-[14px] border border-slate-200 bg-slate-50 p-3 lg:w-[270px]">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-sm font-extrabold text-slate-950">{stage}</h3>
                  <p className="mt-1 text-xs font-bold text-slate-500">{formatInr(sumDeals(stageDeals))}</p>
                </div>
                <span className="rounded-full bg-white px-2 py-1 text-xs font-extrabold text-slate-600">{stageDeals.length}</span>
              </div>
              <div className="mt-4 space-y-3">
                {stageDeals.map((deal) => {
                  const highlighted = deal.id === firstMovableDeal?.id;
                  return (
                    <motion.div
                      key={deal.id}
                      animate={movedId === deal.id ? { x: 28, opacity: 0.5 } : { x: 0, opacity: 1 }}
                      className={cn("relative rounded-[12px] border bg-white p-4 shadow-sm", highlighted ? "border-blue-300 ring-2 ring-blue-100" : "border-slate-200")}
                      onClick={() => setSelectedDeal(deal)}
                    >
                      {movedId === deal.id ? <ConfettiDots /> : null}
                      <div className="flex items-center justify-between gap-3">
                        <Badge className={deal.daysInStage > 5 ? "bg-amber-50 text-amber-700 border-amber-200" : "bg-slate-50 text-slate-600 border-slate-200"}>{deal.daysInStage} days</Badge>
                        <span className={cn("h-2.5 w-2.5 rounded-full", deal.priority === "High" ? "bg-red-500" : deal.priority === "Medium" ? "bg-amber-500" : "bg-emerald-500")} />
                      </div>
                      <p className="mt-4 font-extrabold text-slate-950">{deal.name}</p>
                      <p className="mt-1 text-sm font-bold text-blue-700">{deal.value}</p>
                      <div className="mt-4 flex items-center justify-between gap-3">
                        <Avatar name={deal.assigned} size="sm" />
                        {highlighted ? (
                          <button type="button" onClick={(event) => { event.stopPropagation(); moveDeal(stage, deal); }} className="rounded-full bg-blue-600 px-3 py-1.5 text-xs font-extrabold text-white">
                            Move
                          </button>
                        ) : null}
                      </div>
                    </motion.div>
                  );
                })}
                {!stageDeals.length ? <p className="rounded-xl border border-dashed border-slate-200 p-4 text-xs font-semibold text-slate-500">No deals in this stage yet.</p> : null}
              </div>
            </div>
          );
        })}
      </div>
      <p className="text-xs font-bold text-slate-500 lg:hidden">Swipe sideways to view all pipeline stages.</p>
    </div>
  );
}

function CustomersTab({ setSelectedCustomer, openWhatsApp }: { setSelectedCustomer: (lead: DemoLead | null) => void; openWhatsApp: (lead: DemoLead) => void }) {
  const { demoData } = useDemo();
  return (
    <div>
      <TabHeader eyebrow="Customer records" title="Profiles, interactions, notes, deals, and tasks" description="Your real CRM can make every customer record a full operating timeline." />
      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {demoData.customers.slice(0, 6).map((customer) => (
          <div key={customer.id} className="rounded-[14px] border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between gap-3">
              <div className="flex gap-3">
                <Avatar name={customer.name} />
                <div>
                  <p className="font-extrabold text-slate-950">{customer.name}</p>
                  <p className="text-xs text-slate-500">{customer.company}</p>
                </div>
              </div>
              <Badge className={priorityClass(customer.priority)}>{customer.priority}</Badge>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {customer.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} className="border-slate-200 bg-slate-50 text-slate-600">{tag}</Badge>
              ))}
            </div>
            <p className="mt-4 text-sm text-slate-500">Last interaction: {customer.lastContact}</p>
            <p className="mt-1 text-sm font-bold text-slate-700">Assigned to {customer.assigned}</p>
            <div className="mt-5 flex gap-2">
              <IconButton icon={Phone} label="Call" onClick={() => setSelectedCustomer(customer)} />
              <IconButton icon={MessageCircle} label="WhatsApp" onClick={() => openWhatsApp(customer)} />
              <button type="button" onClick={() => setSelectedCustomer(customer)} className="flex-1 rounded-full bg-blue-600 px-3 py-2 text-xs font-extrabold text-white">View Full Record</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TasksTab({
  tasks,
  setTasks,
  openWhatsApp,
  showToast,
}: {
  tasks: DemoTask[];
  setTasks: Dispatch<SetStateAction<DemoTask[]>>;
  openWhatsApp: (lead: DemoLead) => void;
  showToast: (message: string) => void;
}) {
  const { demoData, setActiveTab } = useDemo();
  const [completed, setCompleted] = useState<string[]>([]);
  const groups: DemoTask["bucket"][] = ["Overdue", "Due Today", "Due This Week", "Upcoming"];
  const todayRemaining = tasks.some((task) => task.bucket === "Due Today");

  function completeTask(task: DemoTask) {
    setCompleted((current) => [...current, task.id]);
    showToast("Task marked complete.");
    window.setTimeout(() => setTasks((current) => current.filter((item) => item.id !== task.id)), 900);
  }

  return (
    <div>
      <TabHeader eyebrow="Task automation" title="Follow-ups your workflows can create automatically" description="Check off a task to see the demo list update." />
      {!todayRemaining ? <div className="mt-5 rounded-[14px] border border-emerald-200 bg-emerald-50 p-4 text-sm font-extrabold text-emerald-800">Great work. All today tasks are complete.</div> : null}
      <div className="mt-5 space-y-5">
        {groups.map((group) => {
          const groupTasks = tasks.filter((task) => task.bucket === group);
          if (!groupTasks.length) return null;
          return (
            <div key={group} className="rounded-[14px] border border-slate-200 bg-white p-4 shadow-sm">
              <h3 className="font-extrabold text-slate-950">{group}</h3>
              <div className="mt-3 space-y-2">
                {groupTasks.map((task) => {
                  const isDone = completed.includes(task.id);
                  const relatedLead = demoData.leads.find((lead) => lead.name === task.related);
                  return (
                    <motion.div
                      key={task.id}
                      animate={isDone ? { opacity: 0.35, x: 12 } : { opacity: 1, x: 0 }}
                      className="grid gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3 lg:grid-cols-[auto_1fr_auto_auto_auto]"
                    >
                      <button type="button" onClick={() => completeTask(task)} className={cn("grid h-6 w-6 place-items-center rounded-md border", isDone ? "border-emerald-500 bg-emerald-500 text-white" : "border-slate-300 bg-white")}>
                        {isDone ? <Check className="h-4 w-4" /> : null}
                      </button>
                      <div>
                        <p className={cn("font-bold text-slate-950", isDone ? "line-through" : "")}>{task.title}</p>
                        <button type="button" onClick={() => setActiveTab("leads")} className="text-xs font-bold text-blue-700">{task.related}</button>
                      </div>
                      <Badge className={priorityClass(task.priority)}>{task.priority}</Badge>
                      <p className={cn("text-sm font-bold", group === "Overdue" ? "text-red-600" : "text-slate-600")}>{task.due}</p>
                      {task.type === "follow-up" && relatedLead ? (
                        <button type="button" onClick={() => openWhatsApp(relatedLead)} className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-extrabold text-emerald-700">
                          WhatsApp
                        </button>
                      ) : null}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function TicketsTab({
  tickets,
  setTickets,
  showToast,
}: {
  tickets: DemoTicket[];
  setTickets: Dispatch<SetStateAction<DemoTicket[]>>;
  showToast: (message: string) => void;
}) {
  function resolve(ticket: DemoTicket) {
    setTickets((current) => current.map((item) => (item.id === ticket.id ? { ...item, status: "Resolved" } : item)));
    showToast(`${ticket.id} resolved.`);
  }

  return (
    <div>
      <TabHeader eyebrow="Support tickets" title="Escalations, issues, and customer requests" description="Resolve an open ticket to see status update instantly." />
      <div className="mt-6 grid gap-4 xl:grid-cols-4">
        {["Open", "In Progress", "Escalated", "Resolved"].map((status) => (
          <div key={status} className="rounded-[14px] border border-slate-200 bg-slate-50 p-3">
            <h3 className="font-extrabold text-slate-950">{status}</h3>
            <div className="mt-3 space-y-3">
              {tickets.filter((ticket) => ticket.status === status).map((ticket) => (
                <div key={ticket.id} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-xs font-extrabold text-blue-700">{ticket.id}</p>
                    <Badge className={priorityClass(ticket.priority)}>{ticket.priority}</Badge>
                  </div>
                  <p className="mt-3 font-bold text-slate-950">{ticket.subject}</p>
                  <p className="mt-1 text-sm text-slate-500">{ticket.customer}</p>
                  <p className="mt-3 text-xs font-bold text-slate-500">{ticket.timeOpen} open - {ticket.assigned}</p>
                  {ticket.status !== "Resolved" ? (
                    <button type="button" onClick={() => resolve(ticket)} className="mt-4 rounded-full bg-blue-600 px-3 py-1.5 text-xs font-extrabold text-white">
                      Resolve
                    </button>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function WorkflowsTab({
  workflows,
  setWorkflows,
  setActivity,
  showToast,
  showSimulationCta,
}: {
  workflows: DemoWorkflow[];
  setWorkflows: Dispatch<SetStateAction<DemoWorkflow[]>>;
  setActivity: Dispatch<SetStateAction<IndustryData["activityFeed"]>>;
  showToast: (message: string) => void;
  showSimulationCta: (kind: string) => void;
}) {
  const [runningId, setRunningId] = useState<string | null>(null);
  const [step, setStep] = useState(0);

  function toggle(workflow: DemoWorkflow) {
    setWorkflows((current) => current.map((item) => (item.id === workflow.id ? { ...item, active: !item.active } : item)));
  }

  function run(workflow: DemoWorkflow) {
    setRunningId(workflow.id);
    setStep(1);
    window.setTimeout(() => setStep(2), 800);
    window.setTimeout(() => setStep(3), 1600);
    window.setTimeout(() => {
      setWorkflows((current) => current.map((item) => (item.id === workflow.id ? { ...item, runCount: item.runCount + 1 } : item)));
      setActivity((current) => [
        { id: `run-${Date.now()}`, text: `${workflow.name} executed successfully`, timestamp: "just now", initials: "WF" },
        ...current,
      ]);
      showToast("Workflow executed.");
      showSimulationCta("workflow");
      setRunningId(null);
      setStep(0);
    }, 2300);
  }

  return (
    <div>
      <TabHeader eyebrow="Workflow engine" title="Your business logic as automation" description="Run a simulation to watch trigger, condition, and action steps execute." />
      <div className="mt-6 grid gap-5 xl:grid-cols-3">
        {workflows.map((workflow) => {
          const running = runningId === workflow.id;
          const steps = [
            ["Trigger", workflow.trigger],
            ["Condition", workflow.condition],
            ["Action", workflow.action],
          ];
          return (
            <div key={workflow.id} className="rounded-[14px] border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-extrabold text-slate-950">{workflow.name}</h3>
                  <p className="mt-1 text-xs font-bold text-slate-500">Ran {workflow.runCount} times this month</p>
                </div>
                <button type="button" onClick={() => toggle(workflow)} className={cn("rounded-full px-3 py-1.5 text-xs font-extrabold", workflow.active ? "bg-emerald-50 text-emerald-700" : "bg-slate-100 text-slate-500")}>
                  {workflow.active ? "Active" : "Paused"}
                </button>
              </div>
              <div className="mt-5 space-y-3">
                {steps.map(([label, text], index) => {
                  const done = running && step >= index + 1;
                  return (
                    <div key={label} className={cn("rounded-xl border p-3 transition", done ? "border-emerald-200 bg-emerald-50" : "border-slate-200 bg-slate-50")}>
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-slate-500">{label}</p>
                        {done ? <CheckCircle2 className="h-4 w-4 text-emerald-600" /> : null}
                      </div>
                      <p className="mt-1 text-sm font-semibold leading-6 text-slate-700">{text}</p>
                    </div>
                  );
                })}
              </div>
              <button type="button" onClick={() => run(workflow)} disabled={Boolean(runningId)} className="mt-5 inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-extrabold text-white disabled:opacity-50">
                {running ? <Loader2 className="h-4 w-4 animate-spin" /> : <Zap className="h-4 w-4" />}
                Run simulation
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function RolesTab({ showToast }: { showToast: (message: string) => void }) {
  const { selectedRole, setSelectedRole } = useDemo();
  return (
    <div>
      <TabHeader eyebrow="Roles and permissions" title="What your team sees is controlled by role" description="Click a role to switch the dashboard perspective." />
      <div className="mt-6 grid gap-4 xl:grid-cols-5">
        {roleOptions.map((role) => {
          const active = selectedRole === role;
          return (
            <button
              key={role}
              type="button"
              onClick={() => {
                setSelectedRole(role);
                showToast(`As ${role}, the dashboard hides restricted data and actions.`);
              }}
              className={cn("rounded-[14px] border p-4 text-left transition", active ? "border-blue-300 bg-blue-50 ring-2 ring-blue-100" : "border-slate-200 bg-white hover:border-blue-200")}
            >
              <h3 className="font-extrabold text-slate-950">{role}</h3>
              <div className="mt-4 space-y-2">
                {rolePermissions.slice(0, 6).map((permission, index) => (
                  <div key={permission} className="flex items-center justify-between gap-2 text-xs font-semibold text-slate-600">
                    <span>{permission}</span>
                    <span className={cn("h-4 w-7 rounded-full", roleMatrix[role][index] ? "bg-emerald-500" : "bg-slate-200")} />
                  </div>
                ))}
              </div>
            </button>
          );
        })}
      </div>
      <div className="mt-6 overflow-x-auto rounded-[14px] border border-slate-200 bg-white p-4">
        <table className="w-full min-w-[720px] text-sm">
          <thead>
            <tr className="text-left text-xs uppercase tracking-[0.14em] text-slate-500">
              <th className="py-3">Permission</th>
              {roleOptions.map((role) => <th key={role} className="py-3 text-center">{role}</th>)}
            </tr>
          </thead>
          <tbody>
            {rolePermissions.map((permission, index) => (
              <tr key={permission} className="border-t border-slate-100">
                <td className="py-3 font-bold text-slate-700">{permission}</td>
                {roleOptions.map((role) => (
                  <td key={role} className="py-3 text-center">{roleMatrix[role][index] ? <Check className="mx-auto h-4 w-4 text-emerald-600" /> : <X className="mx-auto h-4 w-4 text-slate-300" />}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ReportsTab() {
  const { demoData, setActiveTab } = useDemo();
  return (
    <div>
      <TabHeader eyebrow="Reports and charts" title="Industry-specific reports from the same data" description="In your real CRM, these charts use your live leads, team activity, and revenue." />
      <div className="mt-6 grid gap-5 xl:grid-cols-2">
        <DonutChart data={demoData.reportsData.leadSources} onClickSegment={() => setActiveTab("leads")} />
        <FunnelChart data={demoData.reportsData.funnel} />
        <TeamChart data={demoData.reportsData.team} />
        <RevenueChart data={demoData.reportsData.revenue} />
      </div>
    </div>
  );
}

function DonutChart({ data, onClickSegment }: { data: IndustryData["reportsData"]["leadSources"]; onClickSegment: () => void }) {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  let offset = 0;
  const gradient = data
    .map((item) => {
      const start = offset;
      const end = offset + (item.value / total) * 100;
      offset = end;
      return `${item.color} ${start}% ${end}%`;
    })
    .join(", ");
  return (
    <div className="rounded-[14px] border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="font-extrabold text-slate-950">Lead source breakdown</h3>
      <button type="button" onClick={onClickSegment} className="mx-auto mt-6 grid h-48 w-48 place-items-center rounded-full" style={{ background: `conic-gradient(${gradient})` }}>
        <span className="grid h-28 w-28 place-items-center rounded-full bg-white text-center text-sm font-extrabold text-slate-700">Click to filter leads</span>
      </button>
      <div className="mt-5 grid gap-2 sm:grid-cols-2">
        {data.map((item) => (
          <div key={item.label} className="flex items-center justify-between text-sm font-semibold text-slate-600">
            <span className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full" style={{ background: item.color }} />{item.label}</span>
            <span>{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function FunnelChart({ data }: { data: IndustryData["reportsData"]["funnel"] }) {
  const max = Math.max(...data.map((item) => item.count));
  return (
    <div className="rounded-[14px] border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="font-extrabold text-slate-950">Pipeline funnel</h3>
      <div className="mt-5 space-y-4">
        {data.map((item) => (
          <div key={item.stage}>
            <div className="flex justify-between text-xs font-bold text-slate-500"><span>{item.stage}</span><span>{item.count} - {item.dropoff}% drop</span></div>
            <div className="mt-2 h-7 overflow-hidden rounded-lg bg-slate-100">
              <div className="h-full rounded-lg bg-blue-600" style={{ width: `${(item.count / max) * 100}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TeamChart({ data }: { data: IndustryData["reportsData"]["team"] }) {
  const max = Math.max(...data.flatMap((item) => [item.assigned, item.closed]));
  return (
    <div className="rounded-[14px] border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="font-extrabold text-slate-950">Team performance</h3>
      <div className="mt-5 space-y-4">
        {data.map((item) => (
          <div key={item.name} className="grid grid-cols-[80px_1fr] items-center gap-3">
            <p className="text-sm font-bold text-slate-700">{item.name}</p>
            <div className="space-y-1">
              <div className="h-3 rounded-full bg-blue-100"><div className="h-full rounded-full bg-blue-600" style={{ width: `${(item.assigned / max) * 100}%` }} /></div>
              <div className="h-3 rounded-full bg-emerald-100"><div className="h-full rounded-full bg-emerald-500" style={{ width: `${(item.closed / max) * 100}%` }} /></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function RevenueChart({ data }: { data: IndustryData["reportsData"]["revenue"] }) {
  const values = data.map((item) => item.value);
  const max = Math.max(...values);
  const min = Math.min(...values);
  const points = values
    .map((value, index) => {
      const x = 18 + (index / Math.max(values.length - 1, 1)) * 320;
      const y = 150 - ((value - min) / Math.max(max - min, 1)) * 110;
      return `${x},${y}`;
    })
    .join(" ");
  return (
    <div className="rounded-[14px] border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="font-extrabold text-slate-950">Revenue trend</h3>
      <svg className="mt-5 h-56 w-full" viewBox="0 0 360 180" aria-hidden="true">
        <polyline points={points} fill="none" stroke="#2563eb" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        {data.map((item, index) => (
          <text key={item.month} x={18 + (index / Math.max(data.length - 1, 1)) * 320} y="172" textAnchor="middle" className="fill-slate-500 text-[10px] font-bold">
            {item.month}
          </text>
        ))}
      </svg>
    </div>
  );
}

function AIAssistantTab() {
  const { demoData } = useDemo();
  const [messages, setMessages] = useState<Array<{ role: "user" | "assistant"; text: string }>>([
    { role: "assistant", text: `Ask me anything about your ${demoData.name} data.` },
  ]);
  const [typing, setTyping] = useState(false);
  const [followUps, setFollowUps] = useState<string[]>([]);

  useEffect(() => {
    setMessages([{ role: "assistant", text: `Ask me anything about your ${demoData.name} data.` }]);
    setFollowUps([]);
  }, [demoData]);

  function ask(question: string) {
    const qa = demoData.aiChatQA.find((item) => item.question === question) ?? demoData.aiChatQA[0];
    setMessages((current) => [...current, { role: "user", text: question }]);
    setTyping(true);
    setFollowUps([]);
    window.setTimeout(() => {
      setTyping(false);
      let index = 0;
      setMessages((current) => [...current, { role: "assistant", text: "" }]);
      const interval = window.setInterval(() => {
        index += 1;
        setMessages((current) => {
          const next = [...current];
          next[next.length - 1] = { role: "assistant", text: qa.answer.slice(0, index) };
          return next;
        });
        if (index >= qa.answer.length) {
          window.clearInterval(interval);
          setFollowUps(qa.followUps);
        }
      }, 18);
    }, 800);
  }

  const hotLead = demoData.leads.find((lead) => lead.aiScore > 85);

  return (
    <div>
      <TabHeader eyebrow="AI assistant" title="Ask questions about your CRM data" description="Suggestion chips simulate the AI experience using industry-specific answers." />
      <div className="mt-6 grid gap-5 xl:grid-cols-[0.42fr_0.58fr]">
        <div className="space-y-4">
          {hotLead ? (
            <div className="rounded-[14px] border border-rose-200 bg-rose-50 p-4">
              <p className="text-sm font-extrabold text-rose-700">Hot deal alert</p>
              <p className="mt-2 text-sm leading-6 text-rose-700">{hotLead.name} scored {hotLead.aiScore}. Recommended action: {hotLead.recommendedAction}</p>
            </div>
          ) : null}
          {demoData.aiInsights.slice(0, 3).map((insight) => (
            <div key={insight} className="rounded-[14px] border border-slate-200 bg-white p-4 text-sm font-semibold leading-6 text-slate-700 shadow-sm">
              {insight}
            </div>
          ))}
        </div>
        <div className="rounded-[14px] border border-slate-200 bg-white p-4 shadow-sm">
          <div className="h-[430px] overflow-y-auto rounded-xl bg-slate-50 p-4">
            <div className="space-y-3">
              {messages.map((message, index) => (
                <div key={`${message.text}-${index}`} className={cn("flex", message.role === "user" ? "justify-end" : "justify-start")}>
                  <div className={cn("max-w-[82%] rounded-2xl px-4 py-3 text-sm leading-6", message.role === "user" ? "bg-blue-600 text-white" : "bg-white text-slate-700 shadow-sm")}>
                    {message.text}
                  </div>
                </div>
              ))}
              {typing ? <div className="w-fit rounded-2xl bg-white px-4 py-3 text-sm font-bold text-slate-500 shadow-sm">AI is typing...</div> : null}
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {(followUps.length ? followUps : demoData.aiChatQA.map((qa) => qa.question)).slice(0, 5).map((question) => (
              <button key={question} type="button" onClick={() => ask(question)} className="rounded-full border border-blue-200 bg-blue-50 px-3 py-2 text-xs font-extrabold text-blue-700">
                {question}
              </button>
            ))}
          </div>
          <div className="mt-3 flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-400">
            Ask a question...
          </div>
        </div>
      </div>
    </div>
  );
}

function AdvancedDemoTab() {
  const { demoData } = useDemo();
  return (
    <div>
      <TabHeader eyebrow="Advanced demo" title="Custom modules, integrations, permissions, and workflow branches" description="A real HNX CRM Systems can go beyond a standard sales dashboard." />
      <div className="mt-6 grid gap-5 xl:grid-cols-3">
        <div className="rounded-[14px] border border-slate-200 bg-white p-5 shadow-sm xl:col-span-2">
          <h3 className="font-extrabold text-slate-950">Multi-branch workflow diagram</h3>
          <div className="mt-5 grid gap-3 md:grid-cols-4">
            {["Lead captured", "Score and source check", "Assign or nurture", "Report and alert"].map((item, index) => (
              <div key={item} className="rounded-xl border border-blue-100 bg-blue-50 p-4 text-sm font-extrabold text-slate-800">
                <span className="text-xs text-blue-700">Branch {index + 1}</span>
                <p className="mt-2">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[14px] border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="font-extrabold text-slate-950">Custom modules</h3>
          <div className="mt-4 space-y-3">
            {demoData.blueprintSummary.modules.slice(0, 3).map((module) => (
              <div key={module} className="rounded-xl bg-slate-50 p-3 text-sm font-bold text-slate-700">{module}</div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-5 rounded-[14px] border border-slate-200 bg-white p-5 shadow-sm">
        <h3 className="font-extrabold text-slate-950">API integrations</h3>
        <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4 xl:grid-cols-8">
          {integrationLogos.map((logo) => (
            <div key={logo} className="grid h-20 place-items-center rounded-xl border border-slate-200 bg-slate-50 text-sm font-extrabold text-slate-700">{logo}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ROIPreviewTab() {
  const { demoData } = useDemo();
  const defaults = demoData.roiDefaults;
  const [teamSize, setTeamSize] = useState(defaults.teamSize);
  const [leadsPerMonth, setLeadsPerMonth] = useState(defaults.leadsPerMonth);
  const [avgDealValue, setAvgDealValue] = useState(defaults.avgDealValue);
  const [manualHours, setManualHours] = useState(defaults.manualHours);
  const [lostDeals, setLostDeals] = useState(defaults.lostDeals);

  useEffect(() => {
    setTeamSize(defaults.teamSize);
    setLeadsPerMonth(defaults.leadsPerMonth);
    setAvgDealValue(defaults.avgDealValue);
    setManualHours(defaults.manualHours);
    setLostDeals(defaults.lostDeals);
  }, [defaults]);

  const hoursSaved = Math.round(teamSize * manualHours * 0.7);
  const revenueRecovered = Math.round(lostDeals * avgDealValue * 0.4);
  const annualSaving = revenueRecovered * 12 + hoursSaved * 52 * 500;
  const payback = Math.max(1, Math.ceil(250000 / Math.max(revenueRecovered, 1)));

  return (
    <div>
      <TabHeader eyebrow="ROI preview" title="Estimate what automation can recover" description="Adjust the numbers to match your business. This is a demo estimate, not a quote." />
      <div className="mt-6 grid gap-5 xl:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[14px] border border-slate-200 bg-white p-5 shadow-sm">
          <Slider label="Team size" value={teamSize} min={1} max={50} onChange={setTeamSize} />
          <Slider label="Leads per month" value={leadsPerMonth} min={10} max={2000} onChange={setLeadsPerMonth} />
          <Slider label="Avg deal value" value={avgDealValue} min={10000} max={5000000} step={10000} onChange={setAvgDealValue} format={formatInr} />
          <Slider label="Manual CRM hours per week" value={manualHours} min={1} max={40} onChange={setManualHours} />
          <Slider label="Deals lost due to missed follow-ups" value={lostDeals} min={0} max={50} onChange={setLostDeals} />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            ["Hours saved per week", `${hoursSaved} hrs`],
            ["Revenue recovered per month", formatInr(revenueRecovered)],
            ["Annual saving", formatInr(annualSaving)],
            ["CRM payback period", `${payback} months`],
          ].map(([label, value]) => (
            <div key={label} className="rounded-[14px] border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-slate-500">{label}</p>
              <p className="mt-3 text-2xl font-extrabold text-slate-950">{value}</p>
            </div>
          ))}
          <div className="rounded-[14px] border border-blue-200 bg-blue-50 p-5 sm:col-span-2">
            <p className="font-extrabold text-blue-800">Businesses like yours save {formatInr(revenueRecovered)}/month with HNX.</p>
            <a href="/contact" className="mt-4 inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-extrabold text-white">
              Get your custom CRM proposal
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function BuildCrmTab({ showToast }: { showToast: (message: string) => void }) {
  const { demoData, selectedGoals, selectedIndustry, setSelectedIndustry, shareUrl } = useDemo();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [businessType, setBusinessType] = useState<IndustryKey>(selectedIndustry);
  const [goal, setGoal] = useState(selectedGoals[0] ?? "leads");
  const [generating, setGenerating] = useState(false);
  const [blueprintReady, setBlueprintReady] = useState(false);

  useEffect(() => {
    setBusinessType(selectedIndustry);
    setGoal(selectedGoals[0] ?? "leads");
  }, [selectedGoals, selectedIndustry]);

  function submit(event: FormEvent) {
    event.preventDefault();
    setGenerating(true);
    window.setTimeout(() => {
      setGenerating(false);
      setBlueprintReady(true);
      showToast("Your CRM blueprint is ready.");
    }, 2000);
  }

  function shareBlueprint() {
    void navigator.clipboard?.writeText(shareUrl || window.location.href);
    showToast("Blueprint link copied.");
  }

  return (
    <div>
      <TabHeader eyebrow="Build CRM" title="Generate your CRM blueprint" description="This is the final step: your selected industry and goal become a recommended CRM setup." />
      <div className="mt-6 grid gap-5 xl:grid-cols-[1fr_0.9fr]">
        <div className="space-y-5">
          <RecommendationCard title="Your recommended CRM setup" items={demoData.blueprintSummary.modules} />
          <RecommendationCard title="Recommended automations" items={demoData.blueprintSummary.automations} />
          <div className="rounded-[14px] border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="font-extrabold text-slate-950">Suggested roles setup</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {demoData.blueprintSummary.roles.map((role) => <Badge key={role} className="border-blue-200 bg-blue-50 text-blue-700">{role}</Badge>)}
            </div>
            <p className="mt-4 text-sm font-semibold text-slate-600">Estimated delivery: {demoData.blueprintSummary.timeline}. Onboarding: {demoData.blueprintSummary.onboarding}.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {["You own the CRM", "Built for your workflow", "Support and upgrades"].map((item) => (
              <div key={item} className="rounded-[14px] border border-slate-200 bg-white p-5 shadow-sm">
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                <p className="mt-3 font-extrabold text-slate-950">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[14px] border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-xl font-extrabold text-slate-950">Get My CRM Blueprint</h3>
          <form onSubmit={submit} className="mt-5 space-y-4">
            <FormInput label="Name" value={name} onChange={setName} required />
            <FormInput label="WhatsApp number" value={phone} onChange={setPhone} type="tel" required />
            <label className="block">
              <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-slate-500">Business type</span>
              <select value={businessType} onChange={(event) => { const next = event.target.value as IndustryKey; setBusinessType(next); setSelectedIndustry(next); }} className="mt-2 h-11 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 text-sm font-bold text-slate-700 outline-none">
                {industryOptions.map((item) => <option key={item.key} value={item.key}>{item.name}</option>)}
              </select>
            </label>
            <label className="block">
              <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-slate-500">Primary goal</span>
              <select value={goal} onChange={(event) => setGoal(event.target.value as GoalKey)} className="mt-2 h-11 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 text-sm font-bold text-slate-700 outline-none">
                {goalOptions.map((item) => <option key={item.key} value={item.key}>{item.label}</option>)}
              </select>
            </label>
            <button type="submit" className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-5 text-sm font-extrabold text-white">
              {generating ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
              Get My CRM Blueprint
            </button>
          </form>
          <div className="my-5 flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.16em] text-slate-400">
            <span className="h-px flex-1 bg-slate-200" /> OR <span className="h-px flex-1 bg-slate-200" />
          </div>
          <div className="grid gap-2">
            <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-center text-sm font-extrabold text-emerald-700">Chat with us on WhatsApp</a>
            <a href="/contact" className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-center text-sm font-extrabold text-slate-700">Book a Free 20-min Consultation</a>
          </div>
          <AnimatePresence>
            {blueprintReady ? (
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mt-5 rounded-[14px] border border-blue-200 bg-blue-50 p-4">
                <p className="font-extrabold text-blue-900">{demoData.name} blueprint ready</p>
                <p className="mt-2 text-sm leading-6 text-blue-800">A HNX consultant will send your detailed blueprint on WhatsApp within 24 hours.</p>
                <button type="button" onClick={shareBlueprint} className="mt-4 rounded-full bg-blue-600 px-4 py-2 text-xs font-extrabold text-white">Share this blueprint</button>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
      <div className="mt-6 rounded-[14px] border border-slate-200 bg-white p-5 shadow-sm">
        <p className="text-center text-sm font-extrabold text-slate-700">Trusted by businesses across India</p>
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {["Real Estate", "Education", "Healthcare", "Agency", "SaaS"].map((item) => <Badge key={item} className="border-emerald-200 bg-emerald-50 text-emerald-700">{item} ready</Badge>)}
        </div>
      </div>
    </div>
  );
}

function RecommendationCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-[14px] border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="font-extrabold text-slate-950">{title}</h3>
      <div className="mt-4 grid gap-2">
        {items.map((item) => (
          <div key={item} className="flex gap-3 text-sm font-semibold text-slate-700">
            <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function Slider({
  label,
  value,
  min,
  max,
  step = 1,
  onChange,
  format = (item: number) => String(item),
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (value: number) => void;
  format?: (value: number) => string;
}) {
  return (
    <label className="mb-5 block">
      <div className="flex items-center justify-between gap-3">
        <span className="text-sm font-extrabold text-slate-700">{label}</span>
        <span className="text-sm font-extrabold text-blue-700">{format(value)}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(event) => onChange(Number(event.target.value))} className="mt-3 w-full accent-blue-600" />
    </label>
  );
}

function FormInput({
  label,
  value,
  onChange,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-slate-500">{label}</span>
      <input value={value} onChange={(event) => onChange(event.target.value)} type={type} required={required} className="mt-2 h-11 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 text-sm font-bold text-slate-700 outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-100" />
    </label>
  );
}

function CompareSaasSection() {
  return (
    <section className="px-4 pb-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[min(95vw,1600px)] rounded-[18px] border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-extrabold text-slate-950">Compare with generic SaaS CRM</h2>
        <div className="mt-5 overflow-x-auto">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead className="text-xs uppercase tracking-[0.16em] text-slate-500">
              <tr><th className="py-3">Feature</th><th>Generic SaaS</th><th>HNX Custom CRM</th></tr>
            </thead>
            <tbody>
              {[
                ["Workflow fit", "You adjust to fixed modules", "Built around your exact workflow"],
                ["Ownership", "Monthly rental", "You own the CRM build"],
                ["Automation", "Limited templates", "Your triggers, conditions, and actions"],
                ["Reports", "Generic dashboards", "Your KPIs, roles, and industry metrics"],
              ].map(([feature, generic, custom]) => (
                <tr key={feature} className="border-t border-slate-100">
                  <td className="py-4 font-extrabold text-slate-950">{feature}</td>
                  <td className="text-slate-600">{generic}</td>
                  <td className="font-bold text-blue-700">{custom}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function AIScorePanel({ lead, onClose }: { lead: DemoLead | null; onClose: () => void }) {
  return (
    <AnimatePresence>
      {lead ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[80] bg-slate-950/35 backdrop-blur-sm">
          <motion.aside initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }} className="ml-auto h-full w-full max-w-xl overflow-y-auto bg-white p-6 shadow-2xl">
            <PanelClose onClose={onClose} />
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-blue-700">AI lead scoring</p>
            <div className="mt-4 flex items-center gap-3">
              <Avatar name={lead.name} />
              <div><h2 className="text-2xl font-extrabold text-slate-950">{lead.name}</h2><p className="text-sm text-slate-500">{lead.company}</p></div>
            </div>
            <div className="mt-8 grid place-items-center">
              <div className="grid h-44 w-44 place-items-center rounded-full bg-[conic-gradient(#dc2626_var(--score),#e2e8f0_0)]" style={{ "--score": `${lead.aiScore}%` } as React.CSSProperties}>
                <div className="grid h-32 w-32 place-items-center rounded-full bg-white text-center">
                  <div><p className="text-4xl font-extrabold text-slate-950">{lead.aiScore}</p><p className="text-sm font-bold text-rose-600">{scoreLabel(lead.aiScore)}</p></div>
                </div>
              </div>
            </div>
            <h3 className="mt-8 font-extrabold text-slate-950">Why this score?</h3>
            <div className="mt-3 space-y-3">
              {lead.scoreReasons.map((reason) => <div key={reason} className="flex gap-3 rounded-xl bg-slate-50 p-3 text-sm font-semibold text-slate-700"><CheckCircle2 className="h-4 w-4 text-emerald-600" />{reason}</div>)}
            </div>
            <div className="mt-5 rounded-[14px] border border-blue-200 bg-blue-50 p-4">
              <p className="text-sm font-extrabold text-blue-800">Recommended action</p>
              <p className="mt-2 text-sm leading-6 text-blue-800">{lead.recommendedAction}</p>
            </div>
            <button type="button" className="mt-5 rounded-full bg-blue-600 px-4 py-2 text-sm font-extrabold text-white">Add to Priority List</button>
            <a href="/contact" className="ml-3 text-sm font-extrabold text-blue-700">Want AI scoring on your real leads?</a>
          </motion.aside>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function WhatsAppModal({
  lead,
  message,
  state,
  onClose,
  onSend,
  openWorkflows,
}: {
  lead: DemoLead | null;
  message: string;
  state: WhatsAppState;
  onClose: () => void;
  onSend: () => void;
  openWorkflows: () => void;
}) {
  return (
    <AnimatePresence>
      {lead ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[90] grid place-items-center bg-slate-950/40 p-4 backdrop-blur-sm">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 24 }} className="w-full max-w-md rounded-[18px] bg-white p-5 shadow-2xl">
            <PanelClose onClose={onClose} />
            <div className="rounded-[16px] border border-emerald-200 bg-emerald-50 p-4">
              <div className="flex items-center gap-3">
                <Avatar name={lead.name} />
                <div><p className="font-extrabold text-slate-950">{lead.name}</p><p className="text-xs font-bold text-emerald-700">online</p></div>
              </div>
              <div className="mt-5 rounded-2xl bg-white p-4 text-sm font-semibold leading-6 text-slate-700 shadow-sm">{message}</div>
              <div className="mt-3 text-right text-xs font-bold text-emerald-700">
                {state === "sent" ? "sent" : state === "delivered" ? "delivered" : state === "read" ? "read" : state === "sending" ? "sending..." : ""}
              </div>
            </div>
            <button type="button" onClick={onSend} disabled={state !== "idle"} className="mt-5 inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-emerald-600 px-4 text-sm font-extrabold text-white disabled:opacity-60">
              {state === "sending" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
              Send
            </button>
            <button type="button" onClick={openWorkflows} className="mt-3 text-sm font-extrabold text-blue-700">This workflow can run automatically. See how.</button>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function LeadDetailPanel({ lead, onClose, title }: { lead: DemoLead | null; onClose: () => void; title: string }) {
  return (
    <AnimatePresence>
      {lead ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[70] bg-slate-950/35 backdrop-blur-sm">
          <motion.aside initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ duration: 0.35 }} className="ml-auto h-full w-full max-w-xl overflow-y-auto bg-white p-6 shadow-2xl">
            <PanelClose onClose={onClose} />
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-blue-700">{title}</p>
            <div className="mt-4 flex items-center gap-3"><Avatar name={lead.name} /><div><h2 className="text-2xl font-extrabold text-slate-950">{lead.name}</h2><p className="text-sm text-slate-500">{lead.company}</p></div></div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[["Phone", lead.phone], ["Email", lead.email], ["Value", lead.value], ["Owner", lead.assigned], ["Source", lead.source], ["Need", lead.need]].map(([label, value]) => (
                <div key={label} className="rounded-xl bg-slate-50 p-3"><p className="text-xs font-extrabold uppercase tracking-[0.16em] text-slate-500">{label}</p><p className="mt-1 font-bold text-slate-800">{value}</p></div>
              ))}
            </div>
            <h3 className="mt-6 font-extrabold text-slate-950">Interaction timeline</h3>
            <div className="mt-3 space-y-3">
              {lead.timeline.map((item) => <div key={item} className="flex gap-3 text-sm font-semibold text-slate-700"><span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-blue-600" />{item}</div>)}
            </div>
            <h3 className="mt-6 font-extrabold text-slate-950">Notes</h3>
            <textarea defaultValue={`${lead.need}. Next action: ${lead.recommendedAction}`} className="mt-3 h-28 w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm outline-none" />
          </motion.aside>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function DealPanel({ deal, onClose }: { deal: PipelineDeal | null; onClose: () => void }) {
  return (
    <AnimatePresence>
      {deal ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[70] grid place-items-center bg-slate-950/35 p-4 backdrop-blur-sm">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 18 }} className="w-full max-w-md rounded-[18px] bg-white p-5 shadow-2xl">
            <PanelClose onClose={onClose} />
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-blue-700">Deal detail</p>
            <h2 className="mt-3 text-2xl font-extrabold text-slate-950">{deal.name}</h2>
            <p className="mt-2 text-lg font-extrabold text-blue-700">{deal.value}</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl bg-slate-50 p-3"><p className="text-xs text-slate-500">Owner</p><p className="font-bold">{deal.assigned}</p></div>
              <div className="rounded-xl bg-slate-50 p-3"><p className="text-xs text-slate-500">Days in stage</p><p className="font-bold">{deal.daysInStage}</p></div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function GuidedAssistant() {
  const { activeTab, isGuideVisible, setIsGuideVisible, setActiveTab } = useDemo();
  if (!isGuideVisible) return null;
  const tip = guideTips[activeTab] ?? "Explore the dashboard and try one simulation.";
  const index = tabConfig.findIndex((tab) => tab.key === activeTab);
  const nextTab = tabConfig[(index + 1) % tabConfig.length].key;
  return (
    <div className="fixed bottom-20 left-4 right-4 z-50 rounded-[14px] border border-blue-200 bg-white p-4 shadow-[0_18px_50px_rgba(15,23,42,0.16)] lg:bottom-6 lg:left-auto lg:right-6 lg:w-[280px]">
      <div className="flex items-start gap-3">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-blue-600 text-white"><Bot className="h-4 w-4" /></span>
        <div className="min-w-0">
          <p className="text-sm font-bold leading-6 text-slate-700">{tip}</p>
          <button type="button" onClick={() => setActiveTab(nextTab)} className="mt-3 text-xs font-extrabold text-blue-700">Next tip</button>
        </div>
        <button type="button" onClick={() => setIsGuideVisible(false)} aria-label="Dismiss guide" className="text-slate-400"><X className="h-4 w-4" /></button>
      </div>
    </div>
  );
}

function RoiStrip({ visible, onDismiss, onCalculate }: { visible: boolean; onDismiss: () => void; onCalculate: () => void }) {
  const { demoData } = useDemo();
  const recovered = demoData.roiDefaults.lostDeals * demoData.roiDefaults.avgDealValue * 0.4;
  if (!visible) return null;
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-blue-200 bg-blue-950 px-4 py-3 text-white lg:bottom-0">
      <div className="mx-auto flex max-w-[min(95vw,1600px)] flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p className="text-sm font-bold">Businesses like yours save 12+ hours/week and recover {formatInr(recovered)}/month with HNX.</p>
        <div className="flex gap-3">
          <button type="button" onClick={onCalculate} className="rounded-full bg-white px-4 py-2 text-xs font-extrabold text-blue-700">Calculate your savings</button>
          <button type="button" onClick={onDismiss} className="text-white/70"><X className="h-5 w-5" /></button>
        </div>
      </div>
    </div>
  );
}

function BookCallCard({ visible, onDismiss }: { visible: boolean; onDismiss: () => void }) {
  if (!visible) return null;
  return (
    <div className="fixed bottom-20 right-6 z-50 hidden w-[300px] rounded-[14px] border border-slate-200 bg-white p-4 shadow-[0_18px_60px_rgba(15,23,42,0.18)] lg:block">
      <button type="button" onClick={onDismiss} className="absolute right-3 top-3 text-slate-400"><X className="h-4 w-4" /></button>
      <div className="flex gap-3"><Avatar name="HNX" /><div><h3 className="font-extrabold text-slate-950">Seen enough? Let us talk.</h3><p className="mt-1 text-sm text-slate-600">Book a free 20-min consultation.</p></div></div>
      <a href="/contact" className="mt-4 inline-flex w-full justify-center rounded-full bg-blue-600 px-4 py-2 text-sm font-extrabold text-white">Book consultation</a>
    </div>
  );
}

function PostSimulationCta({ visible }: { visible: boolean }) {
  if (!visible) return null;
  return (
    <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="fixed right-6 top-24 z-50 rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-extrabold text-emerald-700 shadow-lg">
      Want this on your real business data? Chat with us
    </a>
  );
}

function ExitIntentOverlay({ visible, onClose }: { visible: boolean; onClose: () => void }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  if (!visible) return null;
  return (
    <div className="fixed inset-0 z-[95] grid place-items-center bg-slate-950/45 p-4 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-[18px] bg-white p-6 shadow-2xl">
        <PanelClose onClose={onClose} />
        <h2 className="text-2xl font-extrabold text-slate-950">Before you go</h2>
        <p className="mt-2 text-sm leading-7 text-slate-600">Get your custom CRM blueprint sent to your WhatsApp.</p>
        <div className="mt-5 space-y-3">
          <FormInput label="Name" value={name} onChange={setName} />
          <FormInput label="WhatsApp number" value={phone} onChange={setPhone} type="tel" />
          <button type="button" onClick={onClose} className="w-full rounded-full bg-blue-600 px-4 py-2 text-sm font-extrabold text-white">Send my blueprint</button>
        </div>
      </div>
    </div>
  );
}

function Toast({ toast }: { toast: ToastState }) {
  return (
    <AnimatePresence>
      {toast ? (
        <motion.div
          key={toast.id}
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          className="fixed right-5 top-24 z-[100] max-w-sm rounded-[14px] border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700 shadow-lg"
        >
          {toast.message}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function Avatar({ name, size = "md" }: { name: string; size?: "sm" | "md" }) {
  return (
    <span className={cn("grid shrink-0 place-items-center rounded-full bg-blue-600 font-extrabold text-white", size === "sm" ? "h-8 w-8 text-xs" : "h-10 w-10 text-sm")}>
      {initials(name)}
    </span>
  );
}

function Badge({ children, className }: { children: React.ReactNode; className: string }) {
  return <span className={cn("inline-flex items-center rounded-md border px-2 py-1 text-xs font-extrabold", className)}>{children}</span>;
}

function ScoreBar({ score }: { score: number }) {
  return (
    <div className="min-w-[130px]">
      <div className="flex justify-between text-xs font-bold text-slate-500"><span>{scoreLabel(score)}</span><span>{score}</span></div>
      <div className="mt-1 h-2 rounded-full bg-slate-100"><div className="h-full rounded-full bg-blue-600" style={{ width: `${score}%` }} /></div>
    </div>
  );
}

function IconButton({
  icon: Icon,
  label,
  onClick,
}: {
  icon: LucideIcon;
  label: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <button type="button" onClick={onClick} className="grid h-9 w-9 place-items-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:border-blue-200 hover:text-blue-700" aria-label={label} title={label}>
      <Icon className="h-4 w-4" />
    </button>
  );
}

function PanelClose({ onClose }: { onClose: () => void }) {
  return (
    <button type="button" onClick={onClose} className="float-right grid h-9 w-9 place-items-center rounded-full border border-slate-200 bg-slate-50 text-slate-500" aria-label="Close">
      <X className="h-4 w-4" />
    </button>
  );
}

function EmptyState({ text }: { text: string }) {
  return <div className="mt-5 rounded-[14px] border border-dashed border-slate-200 bg-white p-6 text-center text-sm font-semibold text-slate-500">{text}</div>;
}

function ConfettiDots() {
  return (
    <div className="pointer-events-none absolute right-4 top-4">
      {[0, 1, 2, 3, 4].map((dot) => (
        <span key={dot} className="absolute h-2 w-2 animate-ping rounded-full bg-blue-500" style={{ transform: `translate(${dot * 6}px, ${dot % 2 ? -10 : 8}px)` }} />
      ))}
    </div>
  );
}
