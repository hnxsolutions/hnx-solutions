"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  ArrowRight,
  BarChart3,
  Bell,
  Bot,
  Boxes,
  Building2,
  Calculator,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  Database,
  FileText,
  GraduationCap,
  HeartPulse,
  Home as HomeIcon,
  Kanban,
  Layers,
  Laptop,
  LayoutDashboard,
  Lock,
  Mail,
  MapPin,
  MessageSquare,
  Palette,
  Phone,
  Search,
  ShieldCheck,
  Sparkles,
  Store,
  Ticket,
  Users,
  Workflow,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useMemo, useState, type FormEvent, type ReactNode } from "react";
import {
  defaultIndustryId,
  demoIndustries,
  permissionColumns,
  permissionRows,
  permissionTypes,
  type DemoIndustry,
  type DemoLead,
  type DemoWorkflow,
  type IndustryId,
} from "@/components/crm-demo/demoData";
import {
  calculateRoi,
  formatInr,
  formatNumber,
  recommendCrmSetup,
  roiDefaults,
  roiIndustryMessages,
} from "@/components/roi/roiUtils";
import { Button } from "@/components/ui/Button";
import { WorkspaceActivityTab } from "@/components/crm-demo/workspace/tabs/WorkspaceActivityTab";
import { WorkspaceAITab } from "@/components/crm-demo/workspace/tabs/WorkspaceAITab";
import { WorkspaceBuildTab } from "@/components/crm-demo/workspace/tabs/WorkspaceBuildTab";
import { WorkspaceLeadsTab } from "@/components/crm-demo/workspace/tabs/WorkspaceLeadsTab";
import { WorkspaceModeToggle } from "@/components/crm-demo/workspace/WorkspaceModeToggle";
import { WorkspaceOnboarding } from "@/components/crm-demo/workspace/WorkspaceOnboarding";
import { WorkspaceOverviewTab } from "@/components/crm-demo/workspace/tabs/WorkspaceOverviewTab";
import { WorkspacePipelineTab } from "@/components/crm-demo/workspace/tabs/WorkspacePipelineTab";
import { WorkspaceProgressBar } from "@/components/crm-demo/workspace/WorkspaceProgressBar";
import { WorkspaceRolesTab } from "@/components/crm-demo/workspace/tabs/WorkspaceRolesTab";
import { WorkspaceTasksTab } from "@/components/crm-demo/workspace/tabs/WorkspaceTasksTab";
import { WorkspaceTopbar } from "@/components/crm-demo/workspace/WorkspaceTopbar";
import { WorkspaceWorkflowsTab } from "@/components/crm-demo/workspace/tabs/WorkspaceWorkflowsTab";
import { canRoleViewTab } from "@/lib/workspaceState";
import { useWorkspace, WorkspaceProvider } from "@/lib/workspaceContext";

type DemoTab =
  | "overview"
  | "leads"
  | "pipeline"
  | "records"
  | "tasks"
  | "tickets"
  | "workflows"
  | "permissions"
  | "reports"
  | "ai"
  | "advanced"
  | "roi"
  | "build"
  | "activity";

const iconMap: Record<DemoIndustry["icon"], LucideIcon> = {
  business: Building2,
  education: GraduationCap,
  healthcare: HeartPulse,
  realEstate: HomeIcon,
  pharma: Boxes,
  events: Ticket,
  saas: Laptop,
  local: Store,
};

const tabIcons: Record<DemoTab, LucideIcon> = {
  overview: BarChart3,
  leads: ClipboardList,
  pipeline: Kanban,
  records: Database,
  tasks: CalendarDays,
  tickets: Ticket,
  workflows: Workflow,
  permissions: ShieldCheck,
  reports: FileText,
  ai: Bot,
  advanced: Layers,
  roi: Calculator,
  build: LayoutDashboard,
  activity: Activity,
};

const tabOrder: DemoTab[] = [
  "overview",
  "leads",
  "pipeline",
  "records",
  "tasks",
  "tickets",
  "workflows",
  "permissions",
  "reports",
  "ai",
  "advanced",
  "roi",
  "build",
];

const workspaceTabOrder: DemoTab[] = [...tabOrder, "activity"];

function getRoleOptions(industry: DemoIndustry) {
  const adminLabel =
    industry.id === "education"
      ? "Super Admin"
      : industry.id === "healthcare"
        ? "Clinic Admin"
        : "Admin";
  const managerLabel =
    industry.id === "education"
      ? "Admission Head"
      : industry.id === "realEstate"
        ? "Sales Head"
        : industry.id === "events"
          ? "Event Manager"
          : industry.id === "saas"
            ? "Sales Manager"
            : industry.id === "localServices"
              ? "Branch Manager"
              : "Manager";

  return ["Business Owner", adminLabel, managerLabel, industry.roleUserLabel, "Operations User"];
}

function getTabLabel(tab: DemoTab, industry: DemoIndustry) {
  const labels: Record<DemoTab, string> = {
    overview: "Overview",
    leads: industry.labels.leads,
    pipeline: industry.labels.pipeline,
    records: industry.labels.records,
    tasks: "Tasks",
    tickets: industry.labels.tickets,
    workflows: "Workflows",
    permissions: "Roles & Permissions",
    reports: "Reports",
    ai: "AI Assistant",
    advanced: "Advanced Demo",
    roi: "ROI Preview",
    build: "Build CRM",
    activity: "Activity Log",
  };

  return labels[tab];
}

function statusClasses(status: string) {
  const lower = status.toLowerCase();
  if (lower.includes("hot") || lower.includes("high") || lower.includes("critical") || lower.includes("escalated")) {
    return "border-rose-200 bg-rose-50 text-rose-700";
  }
  if (lower.includes("warm") || lower.includes("pending") || lower.includes("medium") || lower.includes("low stock")) {
    return "border-amber-200 bg-amber-50 text-amber-700";
  }
  if (lower.includes("complete") || lower.includes("healthy") || lower.includes("won") || lower.includes("resolved")) {
    return "border-emerald-200 bg-emerald-50 text-emerald-700";
  }
  return "border-blue-200 bg-blue-50 text-blue-700";
}

function Toast({ message }: { message: string | null }) {
  return (
    <AnimatePresence>
      {message ? (
        <motion.div
          initial={{ opacity: 0, y: 18, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 18, scale: 0.96 }}
          className="fixed bottom-5 left-1/2 z-[80] w-[calc(100%-2rem)] max-w-md -translate-x-1/2 rounded-2xl border border-cyan-200 bg-white/95 px-4 py-3 text-sm font-semibold text-slate-800 shadow-[0_24px_80px_rgba(15,23,42,0.18)] backdrop-blur"
        >
          <span className="inline-flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-blue-700" aria-hidden="true" />
            {message}
          </span>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export function DemoCRMPage() {
  return (
    <WorkspaceProvider>
      <DemoCRMPageContent />
    </WorkspaceProvider>
  );
}

function DemoCRMPageContent() {
  const [selectedIndustryId, setSelectedIndustryId] = useState<IndustryId>(defaultIndustryId);
  const industry = useMemo(
    () => demoIndustries.find((item) => item.id === selectedIndustryId) ?? demoIndustries[0],
    [selectedIndustryId],
  );
  const roleOptions = useMemo(() => getRoleOptions(industry), [industry]);
  const [selectedRole, setSelectedRole] = useState("Business Owner");
  const [activeTab, setActiveTab] = useState<DemoTab>("overview");
  const [search, setSearch] = useState("");
  const [selectedLead, setSelectedLead] = useState<DemoLead | null>(null);
  const [toast, setToast] = useState<string | null>(null);
  const { isWorkspaceMode, restoredFromSession, acknowledgeSessionRestore } = useWorkspace();

  useEffect(() => {
    setSelectedRole("Business Owner");
    setActiveTab("overview");
    setSearch("");
  }, [industry.id]);

  useEffect(() => {
    if (!isWorkspaceMode && activeTab === "activity") {
      setActiveTab("overview");
    }
  }, [activeTab, isWorkspaceMode]);

  function showToast(message: string) {
    setToast(message);
    window.setTimeout(() => setToast(null), 2400);
  }

  useEffect(() => {
    if (!restoredFromSession) return;
    showToast("Session restored.");
    acknowledgeSessionRestore();
  }, [acknowledgeSessionRestore, restoredFromSession]);

  return (
    <main className={`relative min-h-screen overflow-hidden text-slate-950 transition-colors ${isWorkspaceMode ? "bg-[#f0f7ff]" : "bg-[#f8fbff]"}`}>
      <section className="relative px-4 pb-10 pt-28 sm:px-6 lg:px-8 lg:pb-14 lg:pt-32">
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.45, 0.72, 0.45] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[-12rem] top-0 h-[34rem] w-[34rem] rounded-full bg-cyan-200/70 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.06, 1], opacity: [0.45, 0.68, 0.45] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[-10rem] top-10 h-[34rem] w-[34rem] rounded-full bg-blue-200/70 blur-3xl"
        />
        <div className="grid-fade absolute left-1/2 top-0 h-[38rem] w-[56rem] -translate-x-1/2 opacity-60" />

        <div className="relative mx-auto max-w-[min(95vw,1600px)]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.62, ease: "easeOut" }}
            className="mx-auto max-w-4xl text-center"
          >
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/[0.85] px-4 py-2 text-sm font-bold text-blue-700 shadow-sm backdrop-blur">
              <Sparkles className="h-4 w-4 text-cyan-500" aria-hidden="true" />
              Interactive custom CRM product demo
            </div>
            <h1 className="mt-6 text-balance text-4xl font-bold tracking-normal text-slate-950 sm:text-5xl lg:text-6xl">
              What Type of CRM Demo Do You Want to Explore?
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              Choose your industry and see how a custom HNX CRM Systems can be designed around your real business workflow,
              data, roles, reports, automation, and AI use cases.
            </p>
          </motion.div>

          <WorkspaceModeToggle industry={industry} />

          <IndustrySelector selectedIndustryId={industry.id} onSelect={setSelectedIndustryId} />

          <div className="mt-8 rounded-[34px] border border-blue-100 bg-white/[0.86] p-4 shadow-[0_26px_90px_rgba(15,23,42,0.11)] backdrop-blur-xl sm:p-5">
            <DemoShell
              industry={industry}
              selectedIndustryId={selectedIndustryId}
              setSelectedIndustryId={setSelectedIndustryId}
              roleOptions={roleOptions}
              selectedRole={selectedRole}
              setSelectedRole={setSelectedRole}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              search={search}
              setSearch={setSearch}
              setSelectedLead={setSelectedLead}
              showToast={showToast}
            />
          </div>

        </div>
      </section>
      <WorkspaceOnboarding industry={industry} setActiveTab={setActiveTab} showToast={showToast} />
      {!isWorkspaceMode ? <LeadModal lead={selectedLead} onClose={() => setSelectedLead(null)} showToast={showToast} industry={industry} /> : null}
      {!isWorkspaceMode ? <FloatingDemoGuide activeTab={activeTab} setActiveTab={setActiveTab} /> : null}
      <Toast message={toast} />
    </main>
  );
}

function IndustrySelector({
  selectedIndustryId,
  onSelect,
}: {
  selectedIndustryId: IndustryId;
  onSelect: (industryId: IndustryId) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.62, ease: "easeOut", delay: 0.12 }}
      className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
    >
      {demoIndustries.map((item) => {
        const Icon = iconMap[item.icon];
        const isSelected = item.id === selectedIndustryId;
        return (
          <button
            type="button"
            key={item.id}
            onClick={() => onSelect(item.id)}
            className={`group relative min-h-44 overflow-hidden rounded-[28px] border p-5 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(37,208,255,0.16)] ${
              isSelected
                ? "border-blue-300 bg-gradient-to-br from-blue-600 to-cyan-500 text-white"
                : "border-slate-200 bg-white/90 text-slate-950 hover:border-cyan-200"
            }`}
          >
            <div
              className={`grid h-12 w-12 place-items-center rounded-2xl ${
                isSelected ? "bg-white/[0.16] text-white" : "bg-cyan-50 text-blue-700"
              }`}
            >
              <Icon className="h-6 w-6" aria-hidden="true" />
            </div>
            <h2 className="mt-5 text-lg font-bold">{item.selectorTitle}</h2>
            <p className={`mt-2 text-sm leading-6 ${isSelected ? "text-blue-50" : "text-slate-600"}`}>{item.description}</p>
            <span
              className={`mt-4 inline-flex items-center gap-2 text-xs font-bold ${
                isSelected ? "text-white" : "text-blue-700"
              }`}
            >
              {isSelected ? "Selected demo" : "Explore workflow"}
              <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" aria-hidden="true" />
            </span>
          </button>
        );
      })}
    </motion.div>
  );
}

function DemoShell({
  industry,
  selectedIndustryId,
  setSelectedIndustryId,
  roleOptions,
  selectedRole,
  setSelectedRole,
  activeTab,
  setActiveTab,
  search,
  setSearch,
  setSelectedLead,
  showToast,
}: {
  industry: DemoIndustry;
  selectedIndustryId: IndustryId;
  setSelectedIndustryId: (industryId: IndustryId) => void;
  roleOptions: string[];
  selectedRole: string;
  setSelectedRole: (role: string) => void;
  activeTab: DemoTab;
  setActiveTab: (tab: DemoTab) => void;
  search: string;
  setSearch: (value: string) => void;
  setSelectedLead: (lead: DemoLead | null) => void;
  showToast: (message: string) => void;
}) {
  const [workflowOverrides, setWorkflowOverrides] = useState<Record<string, boolean>>({});
  const { isWorkspaceMode, selectedRole: workspaceSelectedRole } = useWorkspace();

  function isWorkflowActive(workflow: DemoWorkflow) {
    const key = `${industry.id}:${workflow.title}`;
    return workflowOverrides[key] ?? workflow.active;
  }

  function toggleWorkflow(workflow: DemoWorkflow) {
    const key = `${industry.id}:${workflow.title}`;
    const next = !isWorkflowActive(workflow);
    setWorkflowOverrides((current) => ({ ...current, [key]: next }));
    showToast(`${workflow.title} ${next ? "activated" : "paused"} in demo mode.`);
  }

  return (
    <div className={`overflow-hidden rounded-[28px] border border-slate-200 bg-slate-50 ${isWorkspaceMode ? "border-t-2 border-t-blue-500" : ""}`}>
      {isWorkspaceMode ? (
        <WorkspaceTopbar
          industry={industry}
          selectedIndustryId={selectedIndustryId}
          setSelectedIndustryId={setSelectedIndustryId}
          search={search}
          setSearch={setSearch}
          setActiveTab={setActiveTab}
        />
      ) : (
        <DemoTopbar
          industry={industry}
          selectedIndustryId={selectedIndustryId}
          setSelectedIndustryId={setSelectedIndustryId}
          roleOptions={roleOptions}
          selectedRole={selectedRole}
          setSelectedRole={setSelectedRole}
          search={search}
          setSearch={setSearch}
          setActiveTab={setActiveTab}
          showToast={showToast}
        />
      )}
      <div className="grid lg:grid-cols-[260px_minmax(0,1fr)]">
        {isWorkspaceMode ? (
          <WorkspaceSidebar industry={industry} activeTab={activeTab} setActiveTab={setActiveTab} />
        ) : (
          <DemoSidebar industry={industry} activeTab={activeTab} setActiveTab={setActiveTab} />
        )}
        <div className="min-w-0 border-t border-slate-200 bg-white/[0.78] p-4 lg:border-l lg:border-t-0 lg:p-6">
          {isWorkspaceMode ? (
            <WorkspaceMobileTabs industry={industry} activeTab={activeTab} setActiveTab={setActiveTab} />
          ) : (
            <MobileTabs industry={industry} activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          <div className="min-h-[720px]">
            {isWorkspaceMode ? (
              <>
                <WorkspaceProgressBar setActiveTab={setActiveTab} />
                {workspaceSelectedRole && !canRoleViewTab(workspaceSelectedRole, activeTab) ? (
                  <WorkspaceLockedTab tab={activeTab} roleName={workspaceSelectedRole.name} />
                ) : (
                  <>
                    {activeTab === "overview" ? <WorkspaceOverviewTab showToast={showToast} setActiveTab={setActiveTab} /> : null}
                    {activeTab === "leads" ? <WorkspaceLeadsTab industry={industry} search={search} showToast={showToast} /> : null}
                    {activeTab === "pipeline" ? <WorkspacePipelineTab showToast={showToast} /> : null}
                    {activeTab === "records" ? <RecordsTab industry={industry} showToast={showToast} /> : null}
                    {activeTab === "tasks" ? <WorkspaceTasksTab showToast={showToast} /> : null}
                    {activeTab === "tickets" ? <TicketsTab industry={industry} showToast={showToast} /> : null}
                    {activeTab === "workflows" ? <WorkspaceWorkflowsTab showToast={showToast} /> : null}
                    {activeTab === "permissions" ? <WorkspaceRolesTab showToast={showToast} /> : null}
                    {activeTab === "reports" ? <ReportsTab industry={industry} /> : null}
                    {activeTab === "ai" ? <WorkspaceAITab industry={industry} showToast={showToast} /> : null}
                    {activeTab === "advanced" ? (
                      <AdvancedConversionSuite
                        industry={industry}
                        roleOptions={roleOptions}
                        selectedRole={workspaceSelectedRole?.name ?? selectedRole}
                        setSelectedRole={setSelectedRole}
                        showToast={showToast}
                      />
                    ) : null}
                    {activeTab === "roi" ? <ROIPreviewTab industry={industry} /> : null}
                    {activeTab === "build" ? <WorkspaceBuildTab industry={industry} showToast={showToast} /> : null}
                    {activeTab === "activity" ? <WorkspaceActivityTab /> : null}
                  </>
                )}
              </>
            ) : (
              <>
                {activeTab === "overview" ? (
                  <OverviewTab
                    industry={industry}
                    selectedRole={selectedRole}
                    showToast={showToast}
                    setActiveTab={setActiveTab}
                  />
                ) : null}
                {activeTab === "leads" ? (
                  <LeadsTab industry={industry} search={search} setSelectedLead={setSelectedLead} showToast={showToast} />
                ) : null}
                {activeTab === "pipeline" ? <PipelineTab industry={industry} setSelectedLead={setSelectedLead} /> : null}
                {activeTab === "records" ? <RecordsTab industry={industry} showToast={showToast} /> : null}
                {activeTab === "tasks" ? <TasksTab industry={industry} showToast={showToast} /> : null}
                {activeTab === "tickets" ? <TicketsTab industry={industry} showToast={showToast} /> : null}
                {activeTab === "workflows" ? (
                  <WorkflowsTab
                    industry={industry}
                    isWorkflowActive={isWorkflowActive}
                    toggleWorkflow={toggleWorkflow}
                    showToast={showToast}
                  />
                ) : null}
                {activeTab === "permissions" ? <RolesPermissionsTab industry={industry} selectedRole={selectedRole} /> : null}
                {activeTab === "reports" ? <ReportsTab industry={industry} /> : null}
                {activeTab === "ai" ? <AIAssistantTab industry={industry} showToast={showToast} /> : null}
                {activeTab === "advanced" ? (
                  <AdvancedConversionSuite
                    industry={industry}
                    roleOptions={roleOptions}
                    selectedRole={selectedRole}
                    setSelectedRole={setSelectedRole}
                    showToast={showToast}
                  />
                ) : null}
                {activeTab === "roi" ? <ROIPreviewTab industry={industry} /> : null}
                {activeTab === "build" ? (
                  <BuildCRMTab
                    industry={industry}
                    selectedIndustryId={selectedIndustryId}
                    setSelectedIndustryId={setSelectedIndustryId}
                    roleOptions={roleOptions}
                    showToast={showToast}
                  />
                ) : null}
              </>
            )}
          </div>
          <DemoStickyCta />
        </div>
      </div>
    </div>
  );
}

function DemoTopbar({
  industry,
  selectedIndustryId,
  setSelectedIndustryId,
  roleOptions,
  selectedRole,
  setSelectedRole,
  search,
  setSearch,
  setActiveTab,
  showToast,
}: {
  industry: DemoIndustry;
  selectedIndustryId: IndustryId;
  setSelectedIndustryId: (industryId: IndustryId) => void;
  roleOptions: string[];
  selectedRole: string;
  setSelectedRole: (role: string) => void;
  search: string;
  setSearch: (value: string) => void;
  setActiveTab: (tab: DemoTab) => void;
  showToast: (message: string) => void;
}) {
  return (
    <div className="border-b border-slate-200 bg-white px-4 py-4 sm:px-5">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-2 text-xs font-bold text-blue-700">
            <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_0_4px_rgba(16,185,129,0.14)]" />
            Demo Mode
          </div>
          <div className="rounded-full border border-cyan-200 bg-white px-3 py-2 text-xs font-bold text-slate-700">
            Demo: {industry.name}
          </div>
          <p className="text-sm font-semibold text-slate-500">Perspective: {selectedRole}</p>
        </div>

        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          <label className="relative min-w-0 md:w-72">
            <span className="sr-only">Search demo CRM</span>
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" aria-hidden="true" />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder={`Search ${industry.labels.leads.toLowerCase()}...`}
              className="h-11 w-full rounded-full border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm outline-none transition focus:border-cyan-300 focus:ring-4 focus:ring-cyan-100"
            />
          </label>
          <label className="sr-only" htmlFor="industry-switcher">
            Switch industry
          </label>
          <select
            id="industry-switcher"
            value={selectedIndustryId}
            onChange={(event) => setSelectedIndustryId(event.target.value as IndustryId)}
            className="h-11 rounded-full border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 outline-none transition focus:border-cyan-300 focus:ring-4 focus:ring-cyan-100"
          >
            {demoIndustries.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
          <label className="sr-only" htmlFor="role-switcher">
            Switch demo role
          </label>
          <select
            id="role-switcher"
            value={selectedRole}
            onChange={(event) => {
              setSelectedRole(event.target.value);
              showToast(`Role perspective changed to ${event.target.value}.`);
            }}
            className="h-11 rounded-full border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 outline-none transition focus:border-cyan-300 focus:ring-4 focus:ring-cyan-100"
          >
            {roleOptions.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
          <button
            type="button"
            onClick={() => showToast("Notification center opened in demo mode.")}
            className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-cyan-200 hover:text-blue-700"
            aria-label="Open notifications"
          >
            <Bell className="h-4 w-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("ai")}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 text-sm font-bold text-blue-700 transition hover:bg-cyan-50"
          >
            <Bot className="h-4 w-4" aria-hidden="true" />
            AI Assistant
          </button>
        </div>
      </div>
    </div>
  );
}

function DemoSidebar({
  industry,
  activeTab,
  setActiveTab,
}: {
  industry: DemoIndustry;
  activeTab: DemoTab;
  setActiveTab: (tab: DemoTab) => void;
}) {
  return (
    <aside className="hidden bg-slate-950 p-4 text-white lg:block">
      <div className="rounded-[24px] border border-white/10 bg-white/[0.06] p-4">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-200">HNX CRM Demo</p>
        <h2 className="mt-2 text-xl font-bold">{industry.name}</h2>
        <p className="mt-2 text-sm leading-6 text-slate-300">{industry.positioning}</p>
      </div>
      <nav className="mt-4 grid gap-1" aria-label="CRM Systems tabs">
        {tabOrder.map((tab) => {
          const Icon = tabIcons[tab];
          const isActive = tab === activeTab;
          return (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-semibold transition ${
                isActive ? "bg-cyan-300/[0.14] text-cyan-100 shadow-[inset_0_0_0_1px_rgba(103,232,249,0.28)]" : "text-slate-300 hover:bg-white/[0.06] hover:text-white"
              }`}
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
              <span>{getTabLabel(tab, industry)}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}

function WorkspaceSidebar({
  industry,
  activeTab,
  setActiveTab,
}: {
  industry: DemoIndustry;
  activeTab: DemoTab;
  setActiveTab: (tab: DemoTab) => void;
}) {
  const { selectedRole } = useWorkspace();

  return (
    <aside className="hidden bg-slate-950 p-4 text-white lg:block">
      <div className="rounded-[24px] border border-white/10 bg-white/[0.06] p-4">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-200">Live Workspace</p>
        <h2 className="mt-2 text-xl font-bold">{industry.name}</h2>
        <p className="mt-2 text-sm leading-6 text-slate-300">Build your CRM live with leads, roles, workflows, AI, and activity logs.</p>
      </div>
      {selectedRole ? (
        <div className="mt-3 rounded-2xl border border-amber-300/20 bg-amber-300/10 p-3 text-xs font-bold text-amber-100">
          Viewing as: {selectedRole.name}
        </div>
      ) : null}
      <nav className="mt-4 grid gap-1" aria-label="Live workspace tabs">
        {workspaceTabOrder.map((tab) => {
          const Icon = tabIcons[tab];
          const isActive = tab === activeTab;
          const locked = selectedRole ? !canRoleViewTab(selectedRole, tab) : false;
          return (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`relative flex items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-semibold transition ${
                isActive ? "bg-cyan-300/[0.14] text-cyan-100 shadow-[inset_0_0_0_1px_rgba(103,232,249,0.28)]" : "text-slate-300 hover:bg-white/[0.06] hover:text-white"
              } ${locked ? "opacity-55" : ""}`}
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
              <span>{getTabLabel(tab, industry)}</span>
              {locked ? <Lock className="ml-auto h-3.5 w-3.5" aria-hidden="true" /> : null}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}

function WorkspaceMobileTabs({
  industry,
  activeTab,
  setActiveTab,
}: {
  industry: DemoIndustry;
  activeTab: DemoTab;
  setActiveTab: (tab: DemoTab) => void;
}) {
  const { selectedRole } = useWorkspace();

  return (
    <div className="no-scrollbar mb-5 flex gap-2 overflow-x-auto pb-2 lg:hidden">
      {workspaceTabOrder.map((tab) => {
        const Icon = tabIcons[tab];
        const isActive = tab === activeTab;
        const locked = selectedRole ? !canRoleViewTab(selectedRole, tab) : false;
        return (
          <button
            type="button"
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-bold transition ${
              isActive ? "border-blue-200 bg-blue-600 text-white" : "border-slate-200 bg-white text-slate-700"
            } ${locked ? "opacity-60" : ""}`}
          >
            <Icon className="h-4 w-4" aria-hidden="true" />
            {getTabLabel(tab, industry)}
            {locked ? <Lock className="h-3.5 w-3.5" aria-hidden="true" /> : null}
          </button>
        );
      })}
    </div>
  );
}

function WorkspaceLockedTab({ tab, roleName }: { tab: DemoTab; roleName: string }) {
  return (
    <div className="grid min-h-[520px] place-items-center rounded-[28px] border border-dashed border-slate-300 bg-slate-50 p-8 text-center">
      <div>
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl border border-slate-200 bg-white text-slate-500 shadow-sm">
          <Lock className="h-6 w-6" aria-hidden="true" />
        </div>
        <h2 className="mt-5 text-2xl font-bold text-slate-950">Locked for {roleName}</h2>
        <p className="mx-auto mt-3 max-w-md text-sm font-semibold leading-6 text-slate-600">
          This role cannot view the {tab} workspace module. Edit the permission matrix to unlock it.
        </p>
      </div>
    </div>
  );
}

function MobileTabs({
  industry,
  activeTab,
  setActiveTab,
}: {
  industry: DemoIndustry;
  activeTab: DemoTab;
  setActiveTab: (tab: DemoTab) => void;
}) {
  return (
    <div className="no-scrollbar mb-5 flex gap-2 overflow-x-auto pb-2 lg:hidden">
      {tabOrder.map((tab) => {
        const Icon = tabIcons[tab];
        const isActive = tab === activeTab;
        return (
          <button
            type="button"
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-bold transition ${
              isActive ? "border-blue-200 bg-blue-600 text-white" : "border-slate-200 bg-white text-slate-700"
            }`}
          >
            <Icon className="h-4 w-4" aria-hidden="true" />
            {getTabLabel(tab, industry)}
          </button>
        );
      })}
    </div>
  );
}

function OverviewTab({
  industry,
  selectedRole,
  showToast,
  setActiveTab,
}: {
  industry: DemoIndustry;
  selectedRole: string;
  showToast: (message: string) => void;
  setActiveTab: (tab: DemoTab) => void;
}) {
  return (
    <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.34 }}>
      <SectionHeader
        eyebrow="Overview dashboard"
        title={`Demo: ${industry.name}`}
        description={industry.positioning}
        action={
          <Button href="/contact" size="sm" showArrow>
            Build My Custom CRM
          </Button>
        }
      />
      <StatsGrid industry={industry} />
      <RolePerspectivePanel industry={industry} selectedRole={selectedRole} />
      <div className="mt-6 grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-slate-950">Business workflow in one system</h3>
              <p className="mt-1 text-sm text-slate-500">Lead Source &rarr; HNX &rarr; Assignment &rarr; Follow-up &rarr; Report</p>
            </div>
            <Zap className="h-6 w-6 text-blue-700" aria-hidden="true" />
          </div>
          <div className="mt-6 grid gap-3 md:grid-cols-5">
            {["Lead Source", "HNX CRM Systems", "Assignment", "Follow-up", "Report"].map((step, index) => (
              <div key={step} className="relative rounded-2xl border border-blue-100 bg-gradient-to-br from-cyan-50 to-white p-4 text-center">
                <span className="mx-auto grid h-9 w-9 place-items-center rounded-full bg-blue-600 text-sm font-bold text-white">
                  {index + 1}
                </span>
                <p className="mt-3 text-sm font-bold text-slate-800">{step}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl bg-slate-50 p-4">
            <p className="text-sm font-semibold leading-6 text-slate-700">{industry.ctaMessage}</p>
          </div>
        </div>

        <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-950">Live activity feed</h3>
              <p className="text-sm text-slate-500">Frontend demo data changes by industry</p>
            </div>
            <Activity className="h-6 w-6 text-cyan-600" aria-hidden="true" />
          </div>
          <div className="space-y-3">
            {industry.activities.map((activity) => (
              <div key={activity} className="flex gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-3">
                <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-cyanGlow" />
                <p className="text-sm font-medium leading-6 text-slate-700">{activity}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {industry.id === "pharma" ? <PharmaStockDemo showToast={showToast} /> : null}

      <div className="mt-6 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        <ModuleCloud industry={industry} />
        <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-slate-950">AI insight preview</h3>
            <button
              type="button"
              onClick={() => setActiveTab("ai")}
              className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 transition hover:text-cyan-600"
            >
              Open AI Assistant
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-5 grid gap-3">
            {industry.aiInsights.map((insight) => (
              <div key={insight} className="rounded-2xl border border-blue-100 bg-blue-50 p-4 text-sm font-semibold leading-6 text-blue-800">
                {insight}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
      <div className="max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-600">{eyebrow}</p>
        <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">{title}</h2>
        {description ? <p className="mt-3 leading-7 text-slate-600">{description}</p> : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}

function StatsGrid({ industry }: { industry: DemoIndustry }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {industry.stats.map((stat) => (
        <motion.div
          whileHover={{ y: -4 }}
          key={stat.label}
          className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm transition hover:border-cyan-200 hover:shadow-[0_20px_60px_rgba(37,208,255,0.12)]"
        >
          <p className="text-sm font-semibold text-slate-500">{stat.label}</p>
          <div className="mt-4 flex items-end justify-between gap-3">
            <span className="text-2xl font-bold text-slate-950">{stat.value}</span>
            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2 py-1 text-xs font-bold text-emerald-700">{stat.trend}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function RolePerspectivePanel({ industry, selectedRole }: { industry: DemoIndustry; selectedRole: string }) {
  const items = getRolePerspectiveItems(industry, selectedRole);

  return (
    <div className="mt-6 rounded-[28px] border border-blue-100 bg-gradient-to-br from-cyan-50 via-white to-blue-50 p-5 shadow-sm">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-700">Role-based view</p>
          <h3 className="mt-2 text-xl font-bold text-slate-950">{selectedRole} dashboard perspective</h3>
        </div>
        <span className="rounded-full border border-blue-100 bg-white px-3 py-2 text-xs font-bold text-blue-700">
          Permission-aware UI
        </span>
      </div>
      <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-sm font-bold text-slate-950">{item.title}</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ModuleCloud({ industry }: { industry: DemoIndustry }) {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-xl font-bold text-slate-950">Industry-specific modules</h3>
      <p className="mt-2 text-sm leading-6 text-slate-500">
        Each module can be renamed, extended, restricted by permission, connected to workflows, and reported on.
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {industry.modules.map((module) => (
          <span key={module} className="rounded-full border border-blue-100 bg-cyan-50 px-3 py-2 text-sm font-bold text-blue-700">
            {module}
          </span>
        ))}
      </div>
    </div>
  );
}

function LeadsTab({
  industry,
  search,
  setSelectedLead,
  showToast,
}: {
  industry: DemoIndustry;
  search: string;
  setSelectedLead: (lead: DemoLead | null) => void;
  showToast: (message: string) => void;
}) {
  const filteredLeads = industry.leads.filter((lead) =>
    [lead.name, lead.organization, lead.source, lead.need, lead.stage, lead.owner]
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase()),
  );

  return (
    <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.34 }}>
      <SectionHeader
        eyebrow="Lead intelligence"
        title={industry.labels.leads}
        description="Click a record to see how HNX can hold business-specific context, owner history, next action, and AI-ready data."
      />
      <div className="hidden overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm md:block">
        <table className="w-full border-collapse text-left text-sm">
          <thead className="bg-slate-50 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
            <tr>
              <th className="px-4 py-4">Name</th>
              <th className="px-4 py-4">Need</th>
              <th className="px-4 py-4">Source</th>
              <th className="px-4 py-4">Value</th>
              <th className="px-4 py-4">Stage</th>
              <th className="px-4 py-4">Owner</th>
              <th className="px-4 py-4">Score</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filteredLeads.map((lead) => (
              <tr
                key={`${lead.name}-${lead.organization}`}
                onClick={() => setSelectedLead(lead)}
                className="cursor-pointer transition hover:bg-cyan-50/70"
              >
                <td className="px-4 py-4">
                  <p className="font-bold text-slate-950">{lead.name}</p>
                  <p className="mt-1 text-xs text-slate-500">{lead.organization}</p>
                </td>
                <td className="px-4 py-4 font-medium text-slate-700">{lead.need}</td>
                <td className="px-4 py-4 text-slate-600">{lead.source}</td>
                <td className="px-4 py-4 font-bold text-slate-950">{lead.value}</td>
                <td className="px-4 py-4">
                  <span className="rounded-full border border-blue-100 bg-blue-50 px-2 py-1 text-xs font-bold text-blue-700">{lead.stage}</span>
                </td>
                <td className="px-4 py-4 text-slate-600">{lead.owner}</td>
                <td className="px-4 py-4">
                  <span className={`rounded-full border px-2 py-1 text-xs font-bold ${statusClasses(lead.temperature)}`}>{lead.temperature}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid gap-4 md:hidden">
        {filteredLeads.map((lead) => (
          <LeadCard key={`${lead.name}-${lead.organization}`} lead={lead} setSelectedLead={setSelectedLead} />
        ))}
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        <Button type="button" variant="secondary" onClick={() => showToast("Assignment rule previewed in demo mode.")}>
          Assign
        </Button>
        <Button type="button" variant="secondary" onClick={() => showToast("Follow-up task created in demo mode.")}>
          Create Follow-up
        </Button>
        <Button type="button" variant="secondary" onClick={() => showToast("AI reviewed lead priority in demo mode.")}>
          Ask AI
        </Button>
      </div>
    </motion.div>
  );
}

function LeadCard({ lead, setSelectedLead }: { lead: DemoLead; setSelectedLead: (lead: DemoLead | null) => void }) {
  return (
    <button
      type="button"
      onClick={() => setSelectedLead(lead)}
      className="rounded-[24px] border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:border-cyan-200"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-bold text-slate-950">{lead.name}</h3>
          <p className="mt-1 text-sm text-slate-500">{lead.organization}</p>
        </div>
        <span className={`rounded-full border px-2 py-1 text-xs font-bold ${statusClasses(lead.temperature)}`}>{lead.temperature}</span>
      </div>
      <div className="mt-4 grid gap-2 text-sm text-slate-600">
        <p>
          <span className="font-bold text-slate-800">Need:</span> {lead.need}
        </p>
        <p>
          <span className="font-bold text-slate-800">Stage:</span> {lead.stage}
        </p>
        <p>
          <span className="font-bold text-slate-800">Owner:</span> {lead.owner}
        </p>
      </div>
    </button>
  );
}

function PipelineTab({ industry, setSelectedLead }: { industry: DemoIndustry; setSelectedLead: (lead: DemoLead | null) => void }) {
  return (
    <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.34 }}>
      <SectionHeader
        eyebrow="Pipeline"
        title={industry.labels.pipeline}
        description="Stages can be renamed around your actual process, then connected to tasks, notifications, approvals, reports, and AI scoring."
      />
      <div className="no-scrollbar flex gap-4 overflow-x-auto pb-4">
        {industry.pipelineStages.map((stage, index) => {
          const exactLeads = industry.leads.filter((lead) => lead.stage === stage || stage.includes(lead.stage) || lead.stage.includes(stage));
          const stageLeads = exactLeads.length > 0 ? exactLeads : industry.leads.filter((_, leadIndex) => leadIndex === index % industry.leads.length).slice(0, 1);
          return (
            <div key={stage} className="w-72 shrink-0 rounded-[26px] border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-slate-950">{stage}</h3>
                <span className="rounded-full bg-white px-2 py-1 text-xs font-bold text-slate-500">{stageLeads.length}</span>
              </div>
              <div className="mt-4 space-y-3">
                {stageLeads.map((lead) => (
                  <button
                    type="button"
                    key={`${stage}-${lead.name}`}
                    onClick={() => setSelectedLead(lead)}
                    className="w-full rounded-2xl border border-slate-200 bg-white p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-200"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="font-bold text-slate-950">{lead.name}</p>
                      <span className={`rounded-full border px-2 py-1 text-[11px] font-bold ${statusClasses(lead.temperature)}`}>{lead.temperature}</span>
                    </div>
                    <p className="mt-2 text-sm text-slate-500">{lead.need}</p>
                    <p className="mt-3 text-sm font-bold text-blue-700">{lead.value}</p>
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

function RecordsTab({ industry, showToast }: { industry: DemoIndustry; showToast: (message: string) => void }) {
  return (
    <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.34 }}>
      <SectionHeader
        eyebrow="Customer records"
        title={industry.labels.records}
        description="Records keep the complete customer lifecycle: status, owner, next action, documents, notes, and activity history."
      />
      <div className="grid gap-4 lg:grid-cols-3">
        {industry.records.map((record) => (
          <motion.article
            key={record.name}
            whileHover={{ y: -5 }}
            className="rounded-[26px] border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-bold text-slate-950">{record.name}</h3>
                <p className="mt-1 text-sm text-slate-500">{record.type}</p>
              </div>
              <span className={`rounded-full border px-2 py-1 text-xs font-bold ${statusClasses(record.status)}`}>{record.status}</span>
            </div>
            <div className="mt-5 space-y-3 text-sm text-slate-600">
              <p>
                <span className="font-bold text-slate-800">Owner:</span> {record.owner}
              </p>
              <p>
                <span className="font-bold text-slate-800">Next step:</span> {record.nextStep}
              </p>
            </div>
            <button
              type="button"
              onClick={() => showToast(`Opened ${record.name} record in demo mode.`)}
              className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-700"
            >
              Open record
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </motion.article>
        ))}
      </div>
      {industry.inventory ? (
        <div className="mt-6 rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-xl font-bold text-slate-950">Medicine inventory watchlist</h3>
          <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-5">
            {industry.inventory.map((item) => (
              <div key={item.medicine} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="font-bold text-slate-950">{item.medicine}</p>
                <p className="mt-2 text-sm text-slate-600">Stock: {item.stock}</p>
                <p className="text-sm text-slate-600">Threshold: {item.threshold}</p>
                <span className={`mt-3 inline-flex rounded-full border px-2 py-1 text-xs font-bold ${statusClasses(item.status)}`}>{item.status}</span>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </motion.div>
  );
}

function TasksTab({ industry, showToast }: { industry: DemoIndustry; showToast: (message: string) => void }) {
  return (
    <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.34 }}>
      <SectionHeader
        eyebrow="Task execution"
        title="Tasks and follow-ups"
        description="Tasks can be created manually or automatically from workflow triggers, pipeline stages, ticket escalations, or AI recommendations."
      />
      <div className="grid gap-4 xl:grid-cols-2">
        {industry.tasks.map((task) => (
          <div key={task.title} className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-bold text-slate-950">{task.title}</h3>
                <p className="mt-2 text-sm text-slate-500">Owner: {task.owner}</p>
              </div>
              <span className={`rounded-full border px-2 py-1 text-xs font-bold ${statusClasses(task.priority)}`}>{task.priority}</span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2 text-xs font-bold">
              <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-600">{task.due}</span>
              <span className="rounded-full bg-blue-50 px-3 py-1 text-blue-700">{task.status}</span>
            </div>
            <button
              type="button"
              onClick={() => showToast(`Task marked reviewed: ${task.title}`)}
              className="mt-5 text-sm font-bold text-blue-700 transition hover:text-cyan-600"
            >
              Review task
            </button>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function TicketsTab({ industry, showToast }: { industry: DemoIndustry; showToast: (message: string) => void }) {
  return (
    <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.34 }}>
      <SectionHeader
        eyebrow="Support operations"
        title={industry.labels.tickets}
        description="Ticketing can be connected to customer records, SLAs, owners, escalations, internal tasks, and reporting."
      />
      <div className="grid gap-4 lg:grid-cols-3">
        {industry.tickets.map((ticket, index) => (
          <div key={ticket.title} className="rounded-[26px] border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between gap-3">
              <MessageSquare className="h-5 w-5 text-blue-700" aria-hidden="true" />
              <div className="flex flex-col items-end gap-2">
                <span className={`rounded-full border px-2 py-1 text-xs font-bold ${statusClasses(ticket.priority)}`}>{ticket.priority}</span>
                <span className={`rounded-full border px-2 py-1 text-[11px] font-bold ${statusClasses(getSlaBadge(index))}`}>
                  {getSlaBadge(index)}
                </span>
              </div>
            </div>
            <h3 className="mt-4 text-lg font-bold text-slate-950">{ticket.title}</h3>
            <p className="mt-2 text-sm text-slate-500">{ticket.customer}</p>
            <div className="mt-5 space-y-2 text-sm text-slate-600">
              <p>Owner: {ticket.owner}</p>
              <p>Status: {ticket.status}</p>
            </div>
            <button
              type="button"
              onClick={() => showToast(`Ticket escalated in demo mode: ${ticket.title}`)}
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-2 text-sm font-bold text-blue-700"
            >
              Escalate
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function WorkflowsTab({
  industry,
  isWorkflowActive,
  toggleWorkflow,
  showToast,
}: {
  industry: DemoIndustry;
  isWorkflowActive: (workflow: DemoWorkflow) => boolean;
  toggleWorkflow: (workflow: DemoWorkflow) => void;
  showToast: (message: string) => void;
}) {
  return (
    <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.34 }}>
      <SectionHeader
        eyebrow="Workflow engine"
        title="Trigger -> Condition -> Action"
        description="Every industry demo shows automation rules that can create tasks, send notifications, update reports, escalate work, and involve AI."
        action={
          <Button type="button" variant="secondary" onClick={() => showToast("Workflow builder opened in demo mode.")}>
            Open Builder
          </Button>
        }
      />
      <div className="grid gap-4 xl:grid-cols-2">
        {industry.workflows.map((workflow) => {
          const active = isWorkflowActive(workflow);
          return (
            <motion.article
              key={workflow.title}
              whileHover={{ y: -5 }}
              className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-50 text-blue-700">
                  <Workflow className="h-6 w-6" aria-hidden="true" />
                </div>
                <button
                  type="button"
                  onClick={() => toggleWorkflow(workflow)}
                  className={`relative h-7 w-14 rounded-full p-1 transition ${active ? "bg-blue-600" : "bg-slate-300"}`}
                  aria-label={`${active ? "Pause" : "Activate"} ${workflow.title}`}
                >
                  <span className={`block h-5 w-5 rounded-full bg-white shadow-sm transition ${active ? "translate-x-7" : ""}`} />
                </button>
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-950">{workflow.title}</h3>
              <div className="mt-5 grid gap-3">
                <WorkflowLine label="Trigger" text={workflow.trigger} />
                <WorkflowLine label="Condition" text={workflow.condition} />
                <WorkflowLine label="Action" text={workflow.action} />
              </div>
              <span className={`mt-5 inline-flex rounded-full border px-3 py-1 text-xs font-bold ${active ? "border-emerald-200 bg-emerald-50 text-emerald-700" : "border-slate-200 bg-slate-50 text-slate-500"}`}>
                {active ? "Active automation" : "Paused in demo"}
              </span>
            </motion.article>
          );
        })}
      </div>
    </motion.div>
  );
}

function WorkflowLine({ label, text }: { label: string; text: string }) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">{label}</p>
      <p className="mt-2 text-sm font-semibold leading-6 text-slate-700">{text}</p>
    </div>
  );
}

function RolesPermissionsTab({ industry, selectedRole }: { industry: DemoIndustry; selectedRole: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.34 }}>
      <SectionHeader
        eyebrow="Access control"
        title="Roles, permission sets, and controlled data access"
        description={`Current perspective: ${selectedRole}. Permission sets can control exactly what each role can view, create, edit, approve, export, delete, or manage.`}
      />
      <div className="grid gap-4 lg:grid-cols-3">
        {industry.roles.map((role) => (
          <div key={role.name} className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-blue-50 text-blue-700">
              <Users className="h-5 w-5" aria-hidden="true" />
            </div>
            <h3 className="mt-4 font-bold text-slate-950">{role.name}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{role.summary}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 bg-slate-50 px-5 py-4">
          <h3 className="font-bold text-slate-950">Permission matrix for {selectedRole}</h3>
          <p className="mt-1 text-sm text-slate-500">Sample frontend matrix. Your final CRM can have module, field, record, and report-level permission rules.</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] border-collapse text-sm">
            <thead className="bg-white text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
              <tr>
                <th className="px-4 py-4 text-left">Module</th>
                {permissionColumns.map((column) => (
                  <th key={column} className="px-4 py-4 text-center">
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {permissionRows.map((row, rowIndex) => (
                <tr key={row} className="hover:bg-cyan-50/50">
                  <td className="px-4 py-4 font-semibold text-slate-800">{row}</td>
                  {permissionColumns.map((column, columnIndex) => {
                    const allowed = isPermissionAllowed(selectedRole, row, rowIndex, columnIndex);
                    return (
                      <td key={`${row}-${column}`} className="px-4 py-4 text-center">
                        <span
                          className={`mx-auto grid h-8 w-8 place-items-center rounded-full ${
                            allowed ? "bg-emerald-50 text-emerald-700" : "bg-slate-100 text-slate-400"
                          }`}
                        >
                          {allowed ? <Check className="h-4 w-4" aria-hidden="true" /> : <Lock className="h-4 w-4" aria-hidden="true" />}
                        </span>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {permissionTypes.map((type) => (
          <span key={type} className="rounded-full border border-blue-100 bg-blue-50 px-3 py-2 text-sm font-bold text-blue-700">
            {type}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function isPermissionAllowed(role: string, row: string, rowIndex: number, columnIndex: number) {
  const lowerRole = role.toLowerCase();
  if (lowerRole.includes("owner") || lowerRole.includes("admin")) {
    return true;
  }
  if (row === "Settings" || row === "Users") {
    return columnIndex === 0 && lowerRole.includes("manager");
  }
  if (columnIndex === 3) {
    return false;
  }
  if (columnIndex === 4) {
    return lowerRole.includes("manager") || lowerRole.includes("head") || lowerRole.includes("finance");
  }
  if (columnIndex === 5) {
    return lowerRole.includes("manager") || lowerRole.includes("head") || lowerRole.includes("finance") || row.includes("Documents");
  }
  if (rowIndex > 8 && lowerRole.includes("sales")) {
    return false;
  }
  return columnIndex <= 2;
}

function ReportsTab({ industry }: { industry: DemoIndustry }) {
  return (
    <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.34 }}>
      <SectionHeader
        eyebrow="Reporting"
        title="Dashboards and reports that match your business"
        description="Reports can be built around your exact metrics: leads, revenue, tasks, tickets, documents, payments, stock, conversion, or team performance."
      />
      <div className="grid gap-4 lg:grid-cols-2">
        {industry.reports.map((report) => (
          <motion.article key={report.title} whileHover={{ y: -5 }} className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-slate-950">{report.title}</h3>
                <p className="mt-1 text-sm font-semibold text-blue-700">{report.metric}</p>
              </div>
              <BarChart3 className="h-6 w-6 text-cyan-600" aria-hidden="true" />
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-600">{report.description}</p>
            <div className="mt-5 h-3 rounded-full bg-slate-100">
              <div className="h-full rounded-full bg-gradient-to-r from-cyanGlow to-blue-600" style={{ width: `${report.progress}%` }} />
            </div>
            <div className="mt-5 h-28 rounded-2xl bg-[linear-gradient(180deg,#eff6ff,#ffffff)] p-3">
              <div className="flex h-full items-end gap-2">
                {[42, 58, report.progress, 64, 76, 52, 88].map((height, index) => (
                  <div key={`${report.title}-${height}-${index}`} className="flex-1 rounded-t-lg bg-gradient-to-t from-blue-600 to-cyan-300" style={{ height: `${height}%` }} />
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.div>
  );
}

function AIAssistantTab({ industry, showToast }: { industry: DemoIndustry; showToast: (message: string) => void }) {
  const [selectedQuestion, setSelectedQuestion] = useState(industry.aiQuestions[0]?.question ?? "");
  const [answer, setAnswer] = useState(industry.aiQuestions[0]?.answer ?? "");
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  useEffect(() => {
    const first = industry.aiQuestions[0];
    setSelectedQuestion(first?.question ?? "");
    setAnswer(first?.answer ?? "");
    setIsAnalyzing(false);
  }, [industry]);

  function askQuestion(question: string) {
    const nextAnswer = industry.aiQuestions.find((item) => item.question === question)?.answer ?? industry.aiQuestions[0]?.answer ?? "";
    setSelectedQuestion(question);
    setIsAnalyzing(true);
    setAnswer("");
    window.setTimeout(() => {
      setAnswer(nextAnswer);
      setIsAnalyzing(false);
      showToast("AI assistant analyzed the selected CRM data.");
    }, 650);
  }

  return (
    <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.34 }}>
      <SectionHeader
        eyebrow="AI CRM assistant"
        title="AI that helps your team decide what to do next"
        description="This is mocked frontend-only, but it shows how HNX can connect AI with your CRM data, reports, roles, records, workflows, and business rules."
      />
      <div className="grid gap-5 xl:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-lg font-bold text-slate-950">Suggested questions</h3>
          <div className="mt-4 grid gap-3">
            {industry.aiQuestions.map((item) => (
              <button
                type="button"
                key={item.question}
                onClick={() => askQuestion(item.question)}
                className={`rounded-2xl border p-4 text-left text-sm font-bold leading-6 transition ${
                  item.question === selectedQuestion ? "border-blue-200 bg-blue-50 text-blue-800" : "border-slate-200 bg-slate-50 text-slate-700 hover:border-cyan-200"
                }`}
              >
                {item.question}
              </button>
            ))}
          </div>
          <div className="mt-5 grid gap-3">
            {industry.aiInsights.map((insight) => (
              <div key={insight} className="rounded-2xl border border-cyan-100 bg-cyan-50 p-4 text-sm font-semibold leading-6 text-blue-800">
                {insight}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[28px] border border-slate-200 bg-slate-950 p-4 text-white shadow-[0_28px_90px_rgba(15,23,42,0.18)]">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-cyan-300/[0.12] text-cyan-100">
                <Bot className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-bold">HNX AI Assistant</h3>
                <p className="text-sm text-slate-400">{industry.name} data context</p>
              </div>
            </div>
            <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-bold text-emerald-100">
              Demo AI
            </span>
          </div>

          <div className="mt-5 space-y-4">
            <div className="ml-auto max-w-[86%] rounded-3xl rounded-br-md bg-blue-600 px-4 py-3 text-sm font-semibold leading-6 text-white">
              {selectedQuestion}
            </div>
            <div className="max-w-[92%] rounded-3xl rounded-bl-md border border-white/10 bg-white/[0.07] px-4 py-4">
              {isAnalyzing ? (
                <div className="flex items-center gap-3 text-sm font-semibold text-cyan-100">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300" />
                  AI analyzing CRM data...
                </div>
              ) : (
                <p className="text-sm leading-7 text-slate-100">{answer}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

type ConfiguratorState = {
  industryId: IndustryId;
  teamSize: string;
  modules: string[];
  automationLevel: string;
  aiLevel: string;
  integrations: string[];
  reportingNeeds: string[];
  roles: string[];
};

const teamSizeOptions = ["1-5 users", "6-15 users", "16-50 users", "51-150 users", "150+ users"];
const automationLevels = ["Basic reminders", "Workflow automation", "Advanced workflow engine", "Multi-team approval automation"];
const aiLevels = ["No AI yet", "AI insights", "AI assistant", "AI scoring + recommendations"];
const integrationMarketplace = [
  { name: "Website Forms", status: "Available" },
  { name: "WhatsApp", status: "Popular" },
  { name: "Email", status: "Available" },
  { name: "Google Sheets", status: "Popular" },
  { name: "Razorpay", status: "Popular" },
  { name: "Stripe", status: "Available" },
  { name: "Meta Ads", status: "Popular" },
  { name: "Google Ads", status: "Available" },
  { name: "Calendly", status: "Available" },
  { name: "Google Calendar", status: "Available" },
  { name: "Slack", status: "Coming Soon" },
  { name: "Twilio", status: "Custom" },
  { name: "Custom APIs", status: "Custom" },
];

function AdvancedConversionSuite({
  industry,
  roleOptions,
  selectedRole,
  setSelectedRole,
  showToast,
}: {
  industry: DemoIndustry;
  roleOptions: string[];
  selectedRole: string;
  setSelectedRole: (role: string) => void;
  showToast: (message: string) => void;
}) {
  return (
    <section className="mt-10 space-y-8" aria-label="Advanced CRM demo and conversion tools">
      <div className="rounded-[34px] border border-blue-100 bg-white/[0.88] p-5 shadow-[0_26px_90px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:p-7">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.26em] text-blue-700">Advanced demo layer</p>
            <h2 className="mt-3 text-3xl font-bold tracking-normal text-slate-950 sm:text-4xl">
              Build, simulate, secure, and preview your custom CRM before the sales call.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              This section shows how HNX can map your industry, team size, roles, permissions, reports, portals,
              integrations, approvals, imports, and AI into one owned CRM blueprint.
            </p>
          </div>
          <Button href="/contact" size="lg" showArrow>
            Get My CRM Blueprint
          </Button>
        </div>
      </div>

      <CRMBlueprintGenerator industry={industry} />

      <AICRMArchitect industry={industry} />

      <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
        <WorkflowSimulator industry={industry} showToast={showToast} />
        <ApprovalFlowDemo industry={industry} showToast={showToast} />
      </div>

      <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <RoleSwitcherConversionCard
          industry={industry}
          roleOptions={roleOptions}
          selectedRole={selectedRole}
          setSelectedRole={setSelectedRole}
        />
        <PermissionLockExperience selectedRole={selectedRole} showToast={showToast} />
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
        <AuditTrailPreview industry={industry} />
        <ClientPortalPreview industry={industry} />
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <IntegrationMarketplacePreview industry={industry} />
        <NotificationCenterPreview industry={industry} />
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
        <SmartReportBuilder industry={industry} />
        <CustomFieldBuilder industry={industry} />
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <DataImportPreview showToast={showToast} />
        <DuplicateDetectionPreview showToast={showToast} />
        <SLATimerPreview industry={industry} />
      </div>

      <EnterpriseFeatureGrid industry={industry} showToast={showToast} />
    </section>
  );
}

function ROIPreviewTab({ industry }: { industry: DemoIndustry }) {
  const [inputs, setInputs] = useState(roiDefaults[industry.id]);

  useEffect(() => {
    setInputs(roiDefaults[industry.id]);
  }, [industry]);

  const results = calculateRoi(inputs);
  const recommendation = recommendCrmSetup(inputs);

  function updateInput(key: keyof typeof inputs, value: string) {
    const parsed = Number(value);
    setInputs((current) => ({ ...current, [key]: Number.isNaN(parsed) ? 0 : parsed }));
  }

  return (
    <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.34 }}>
      <SectionHeader
        eyebrow="ROI preview"
        title="Estimate the business value of your custom CRM"
        description="This is a simplified teaser inside the demo. Use the full ROI Calculator for a more detailed rent-vs-own comparison."
        action={
          <Button href="/roi-calculator" size="sm" showArrow>
            Open Full ROI Calculator
          </Button>
        }
      />
      <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Team size", "teamSize"],
              ["Monthly leads/inquiries", "monthlyLeads"],
              ["Average customer/deal value", "averageDealValue"],
              ["Missed follow-up %", "missedFollowupPercentage"],
              ["Manual hours per week", "weeklyManualHours"],
              ["Current monthly tool cost", "monthlyToolCost"],
            ].map(([label, key]) => (
              <label key={key}>
                <span className="mb-2 block text-sm font-bold text-slate-700">{label}</span>
                <input
                  type="number"
                  value={inputs[key as keyof typeof inputs]}
                  onChange={(event) => updateInput(key as keyof typeof inputs, event.target.value)}
                  className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none focus:border-cyan-300 focus:ring-4 focus:ring-cyan-100"
                />
              </label>
            ))}
          </div>
          <p className="mt-5 rounded-2xl border border-blue-100 bg-blue-50 p-4 text-sm font-semibold leading-6 text-blue-800">
            {roiIndustryMessages[industry.id]}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {[
            ["Estimated time saved / month", `${formatNumber(results.estimatedTimeSaved)} hrs`],
            ["Manual work cost saved / month", formatInr(results.manualCostSaved)],
            ["Potential recovered revenue / month", formatInr(results.potentialRevenueRecovered)],
            ["Missed leads recoverable", formatNumber(results.recoverableLeads)],
            ["Manual reporting hours reduced", `${formatNumber(results.estimatedTimeSaved)} hrs`],
            ["1-year current tool cost", formatInr(results.oneYearToolCost)],
            ["3-year rented CRM cost", formatInr(results.threeYearRentedCRM)],
            ["5-year rented CRM cost", formatInr(results.fiveYearRentedCRM)],
          ].map(([label, value]) => (
            <div key={label} className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-slate-500">{label}</p>
              <p className="mt-3 text-2xl font-bold text-slate-950">{value}</p>
            </div>
          ))}
          <div className="rounded-[24px] border border-blue-100 bg-gradient-to-br from-blue-600 to-cyan-500 p-5 text-white shadow-sm sm:col-span-2">
            <p className="text-sm font-bold text-blue-50">Recommended CRM setup</p>
            <h3 className="mt-2 text-2xl font-bold">{recommendation.plan}</h3>
            <p className="mt-3 text-sm leading-6 text-blue-50">Custom build estimate after consultation.</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {recommendation.features.map((feature) => (
                <span key={feature} className="rounded-full border border-white/15 bg-white/[0.12] px-3 py-1.5 text-xs font-bold text-blue-50">
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function BuildCRMTab({
  industry,
  selectedIndustryId,
  setSelectedIndustryId,
  roleOptions,
  showToast,
}: {
  industry: DemoIndustry;
  selectedIndustryId: IndustryId;
  setSelectedIndustryId: (industryId: IndustryId) => void;
  roleOptions: string[];
  showToast: (message: string) => void;
}) {
  return (
    <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.34 }} className="space-y-6">
      <SectionHeader
        eyebrow="Build CRM"
        title="Generate a CRM blueprint around your business"
        description="Choose modules, roles, permissions, workflows, AI features, reports, integrations, portals, and security controls."
      />
      <PersonalizationWizard industry={industry} showToast={showToast} />
      <CRMConfigurator
        industry={industry}
        selectedIndustryId={selectedIndustryId}
        setSelectedIndustryId={setSelectedIndustryId}
        roleOptions={roleOptions}
        showToast={showToast}
      />
      <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
        <DynamicModuleBuilderPreview industry={industry} />
        <PipelineBuilderPreview industry={industry} showToast={showToast} />
      </div>
      <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <CustomDashboardBuilder industry={industry} />
        <AdvancedPermissionBuilder />
      </div>
      <CRMBlueprintGenerator industry={industry} />
      <DemoLeadCapture industry={industry} showToast={showToast} />
    </motion.div>
  );
}

function FloatingDemoGuide({ activeTab, setActiveTab }: { activeTab: DemoTab; setActiveTab: (tab: DemoTab) => void }) {
  const [collapsed, setCollapsed] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const guide = getGuideContent(activeTab);

  if (dismissed) {
    return null;
  }

  if (collapsed) {
    return (
      <button
        type="button"
        onClick={() => setCollapsed(false)}
        className="fixed bottom-5 right-5 z-[75] inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-3 text-sm font-bold text-blue-700 shadow-[0_20px_70px_rgba(15,23,42,0.18)]"
      >
        <Bot className="h-4 w-4" aria-hidden="true" />
        CRM Guide
      </button>
    );
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setCollapsed(true)}
        className="fixed bottom-5 right-5 z-[75] inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-3 text-sm font-bold text-blue-700 shadow-[0_20px_70px_rgba(15,23,42,0.18)] md:hidden"
      >
        <Bot className="h-4 w-4" aria-hidden="true" />
        CRM Guide
      </button>
      <motion.aside
        initial={{ opacity: 0, y: 18, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        className="fixed bottom-5 right-5 z-[75] hidden w-[22rem] rounded-[28px] border border-blue-100 bg-white/[0.95] p-5 shadow-[0_28px_90px_rgba(15,23,42,0.2)] backdrop-blur-xl md:block"
        aria-label="CRM Systems guide"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-blue-600 text-white">
              <Bot className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">CRM Guide</p>
              <h3 className="font-bold text-slate-950">{guide.title}</h3>
            </div>
          </div>
          <div className="flex gap-1">
            <button type="button" onClick={() => setCollapsed(true)} className="rounded-full p-1 text-slate-400 hover:text-blue-700" aria-label="Collapse CRM guide">
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </button>
            <button type="button" onClick={() => setDismissed(true)} className="rounded-full p-1 text-slate-400 hover:text-blue-700" aria-label="Dismiss CRM guide">
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
        <p className="mt-4 text-sm leading-6 text-slate-600">{guide.message}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {["Custom modules", "Permissions", "AI", "ROI"].map((item) => (
            <span key={item} className="rounded-full border border-blue-100 bg-blue-50 px-2 py-1 text-[11px] font-bold text-blue-700">
              {item}
            </span>
          ))}
        </div>
        {guide.href ? (
          <Button href={guide.href} size="sm" className="mt-4 w-full" showArrow>
            {guide.cta}
          </Button>
        ) : (
          <Button type="button" size="sm" className="mt-4 w-full" onClick={() => setActiveTab(guide.targetTab ?? activeTab)} showArrow>
            {guide.cta}
          </Button>
        )}
      </motion.aside>
    </>
  );
}

function CRMConfigurator({
  industry,
  selectedIndustryId,
  setSelectedIndustryId,
  roleOptions,
  showToast,
}: {
  industry: DemoIndustry;
  selectedIndustryId: IndustryId;
  setSelectedIndustryId: (industryId: IndustryId) => void;
  roleOptions: string[];
  showToast: (message: string) => void;
}) {
  const defaultConfig = useMemo<ConfiguratorState>(
    () => ({
      industryId: selectedIndustryId,
      teamSize: "16-50 users",
      modules: industry.modules.slice(0, 5),
      automationLevel: "Workflow automation",
      aiLevel: "AI assistant",
      integrations: getIndustryIntegrations(industry).slice(0, 4),
      reportingNeeds: getReportMetricOptions(industry).slice(0, 3),
      roles: roleOptions.slice(0, 4),
    }),
    [industry, roleOptions, selectedIndustryId],
  );
  const [config, setConfig] = useState<ConfiguratorState>(defaultConfig);

  useEffect(() => {
    setConfig(defaultConfig);
  }, [defaultConfig]);

  const recommendation = useMemo(() => getRecommendedSetup(industry, config), [config, industry]);

  function toggleListValue(key: "modules" | "integrations" | "reportingNeeds" | "roles", value: string) {
    setConfig((current) => {
      const exists = current[key].includes(value);
      const nextValues = exists ? current[key].filter((item) => item !== value) : [...current[key], value];
      return { ...current, [key]: nextValues };
    });
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
      <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
        <SectionHeader
          eyebrow="CRM configurator"
          title="Build Your CRM"
          description="Select your business needs and generate a practical frontend-only recommended setup."
        />
        <div className="grid gap-5">
          <label>
            <span className="mb-2 block text-sm font-bold text-slate-700">Industry</span>
            <select
              value={selectedIndustryId}
              onChange={(event) => setSelectedIndustryId(event.target.value as IndustryId)}
              className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-semibold text-slate-700 outline-none focus:border-cyan-300 focus:ring-4 focus:ring-cyan-100"
            >
              {demoIndustries.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </label>

          <div className="grid gap-4 md:grid-cols-3">
            <SelectField
              label="Team size"
              value={config.teamSize}
              options={teamSizeOptions}
              onChange={(value) => setConfig((current) => ({ ...current, teamSize: value }))}
            />
            <SelectField
              label="Automation level"
              value={config.automationLevel}
              options={automationLevels}
              onChange={(value) => setConfig((current) => ({ ...current, automationLevel: value }))}
            />
            <SelectField
              label="AI level"
              value={config.aiLevel}
              options={aiLevels}
              onChange={(value) => setConfig((current) => ({ ...current, aiLevel: value }))}
            />
          </div>

          <ConfiguratorPills title="Required modules" values={industry.modules} selected={config.modules} onToggle={(value) => toggleListValue("modules", value)} />
          <ConfiguratorPills
            title="Integrations"
            values={getIndustryIntegrations(industry)}
            selected={config.integrations}
            onToggle={(value) => toggleListValue("integrations", value)}
          />
          <ConfiguratorPills
            title="Reporting needs"
            values={getReportMetricOptions(industry)}
            selected={config.reportingNeeds}
            onToggle={(value) => toggleListValue("reportingNeeds", value)}
          />
          <ConfiguratorPills title="User roles" values={roleOptions} selected={config.roles} onToggle={(value) => toggleListValue("roles", value)} />
        </div>
      </div>

      <div className="rounded-[32px] border border-blue-100 bg-gradient-to-br from-blue-600 to-cyan-500 p-6 text-white shadow-[0_28px_90px_rgba(37,208,255,0.22)]">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-50">Recommended CRM setup</p>
        <h3 className="mt-3 text-3xl font-bold">{recommendation.plan}</h3>
        <p className="mt-3 leading-7 text-blue-50">
          Based on your selections, this setup gives you enough structure for launch while keeping room for custom
          modules, permissions, AI, and integrations.
        </p>
        <RecommendationList title="Modules" items={recommendation.modules} />
        <RecommendationList title="Workflows" items={recommendation.workflows} />
        <RecommendationList title="AI features" items={recommendation.aiFeatures} />
        <RecommendationList title="Roles" items={recommendation.roles} />
        <div className="mt-5 rounded-2xl border border-white/15 bg-white/[0.12] p-4">
          <p className="text-sm font-bold">Suggested build phases</p>
          <div className="mt-3 grid gap-2">
            {recommendation.phases.map((phase, index) => (
              <div key={phase} className="flex items-center gap-3 text-sm text-blue-50">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-white text-xs font-bold text-blue-700">
                  {index + 1}
                </span>
                {phase}
              </div>
            ))}
          </div>
        </div>
        <button
          type="button"
          onClick={() => showToast("Recommended CRM setup saved in demo mode.")}
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-blue-700 shadow-sm transition hover:bg-blue-50"
        >
          Save recommended setup
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

function SelectField({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  return (
    <label>
      <span className="mb-2 block text-sm font-bold text-slate-700">{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-semibold text-slate-700 outline-none focus:border-cyan-300 focus:ring-4 focus:ring-cyan-100"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function ConfiguratorPills({
  title,
  values,
  selected,
  onToggle,
}: {
  title: string;
  values: string[];
  selected: string[];
  onToggle: (value: string) => void;
}) {
  return (
    <div>
      <p className="mb-3 text-sm font-bold text-slate-700">{title}</p>
      <div className="flex flex-wrap gap-2">
        {values.map((value) => {
          const isSelected = selected.includes(value);
          return (
            <button
              type="button"
              key={value}
              onClick={() => onToggle(value)}
              className={`rounded-full border px-3 py-2 text-sm font-bold transition ${
                isSelected ? "border-blue-200 bg-blue-600 text-white" : "border-slate-200 bg-slate-50 text-slate-700 hover:border-cyan-200"
              }`}
            >
              {value}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function RecommendationList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="mt-5">
      <p className="text-sm font-bold text-white">{title}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((item) => (
          <span key={item} className="rounded-full border border-white/15 bg-white/[0.12] px-3 py-1.5 text-xs font-bold text-blue-50">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function CRMBlueprintGenerator({ industry }: { industry: DemoIndustry }) {
  const blueprint = getIndustryBlueprint(industry);

  return (
    <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
      <SectionHeader
        eyebrow="CRM blueprint generator"
        title="Your CRM Blueprint"
        description={`A recommended ${industry.name} architecture based on realistic modules, roles, permissions, workflows, dashboards, integrations, and AI use cases.`}
      />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {blueprint.map((group) => {
          const Icon = group.icon;
          return (
            <div key={group.title} className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-2xl bg-blue-50 text-blue-700">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="font-bold text-slate-950">{group.title}</h3>
              </div>
              <div className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <div key={item} className="flex gap-2 text-sm leading-6 text-slate-700">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function WorkflowSimulator({ industry, showToast }: { industry: DemoIndustry; showToast: (message: string) => void }) {
  const [trigger, setTrigger] = useState(industry.workflows[0]?.trigger ?? "");
  const [condition, setCondition] = useState(industry.workflows[0]?.condition ?? "");
  const [action, setAction] = useState(industry.workflows[0]?.action ?? "");
  const [activeStep, setActiveStep] = useState(-1);
  const workflowSteps = ["Record updated", "Task created", "Notification sent", "Dashboard refreshed", "AI suggestion generated"];

  useEffect(() => {
    const firstWorkflow = industry.workflows[0];
    setTrigger(firstWorkflow?.trigger ?? "");
    setCondition(firstWorkflow?.condition ?? "");
    setAction(firstWorkflow?.action ?? "");
    setActiveStep(-1);
  }, [industry]);

  useEffect(() => {
    if (activeStep < 0 || activeStep >= workflowSteps.length - 1) {
      return;
    }
    const timer = window.setTimeout(() => setActiveStep((current) => current + 1), 420);
    return () => window.clearTimeout(timer);
  }, [activeStep, workflowSteps.length]);

  function runWorkflow() {
    setActiveStep(0);
    showToast("Workflow simulation started.");
  }

  return (
    <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
      <SectionHeader
        eyebrow="Workflow simulator"
        title="Trigger &rarr; Condition &rarr; Action"
        description="Select an industry workflow pattern, then run it to see how records, tasks, notifications, dashboards, and AI suggestions can update automatically."
      />
      <div className="grid gap-4">
        <SelectField label="Trigger" value={trigger} options={industry.workflows.map((item) => item.trigger)} onChange={setTrigger} />
        <SelectField label="Condition" value={condition} options={industry.workflows.map((item) => item.condition)} onChange={setCondition} />
        <SelectField label="Action" value={action} options={industry.workflows.map((item) => item.action)} onChange={setAction} />
      </div>
      <button
        type="button"
        onClick={runWorkflow}
        className="mt-5 inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-blue-700"
      >
        Run Workflow
        <Zap className="h-4 w-4" aria-hidden="true" />
      </button>
      <div className="mt-6 grid gap-3 sm:grid-cols-5">
        {workflowSteps.map((step, index) => {
          const complete = activeStep >= index;
          return (
            <motion.div
              key={step}
              animate={{ scale: complete ? 1.02 : 1 }}
              className={`rounded-2xl border p-4 text-center transition ${
                complete ? "border-emerald-200 bg-emerald-50 text-emerald-800" : "border-slate-200 bg-slate-50 text-slate-500"
              }`}
            >
              <span className={`mx-auto grid h-9 w-9 place-items-center rounded-full ${complete ? "bg-emerald-600 text-white" : "bg-white text-slate-400"}`}>
                {complete ? <Check className="h-4 w-4" aria-hidden="true" /> : index + 1}
              </span>
              <p className="mt-3 text-xs font-bold leading-5">{step}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function RoleSwitcherConversionCard({
  industry,
  roleOptions,
  selectedRole,
  setSelectedRole,
}: {
  industry: DemoIndustry;
  roleOptions: string[];
  selectedRole: string;
  setSelectedRole: (role: string) => void;
}) {
  return (
    <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
      <SectionHeader
        eyebrow="Role-based view switcher"
        title="Every user sees the CRM differently"
        description="Switch roles to preview the type of dashboard each person can receive based on responsibilities and permission sets."
      />
      <div className="flex flex-wrap gap-2">
        {roleOptions.map((role) => (
          <button
            type="button"
            key={role}
            onClick={() => setSelectedRole(role)}
            className={`rounded-full border px-3 py-2 text-sm font-bold transition ${
              role === selectedRole ? "border-blue-200 bg-blue-600 text-white" : "border-slate-200 bg-slate-50 text-slate-700"
            }`}
          >
            {role}
          </button>
        ))}
      </div>
      <div className="mt-5 grid gap-3 md:grid-cols-2">
        {getRolePerspectiveItems(industry, selectedRole).map((item) => (
          <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="font-bold text-slate-950">{item.title}</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function PermissionLockExperience({ selectedRole, showToast }: { selectedRole: string; showToast: (message: string) => void }) {
  const actions = ["Export report", "Delete record", "Manage users", "Edit workflow", "View finance report"];
  const role = selectedRole.toLowerCase();
  const hasFullAccess = role.includes("owner") || role.includes("admin");

  function isLocked(action: string) {
    if (hasFullAccess) {
      return false;
    }
    if (role.includes("manager") || role.includes("head")) {
      return action === "Delete record" || action === "Manage users" || action === "Edit workflow";
    }
    return true;
  }

  return (
    <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
      <SectionHeader
        eyebrow="Permission lock experience"
        title="Restricted actions are visible and controlled"
        description="Limited roles can see what is locked, why it is locked, and how an admin can customize access."
      />
      <div className="grid gap-3 sm:grid-cols-2">
        {actions.map((action) => {
          const locked = isLocked(action);
          return (
            <button
              type="button"
              key={action}
              title={locked ? "Restricted by permission set. Admin can customize this access." : "Allowed for this role."}
              onClick={() =>
                showToast(
                  locked
                    ? "Restricted by permission set. Admin can customize this access."
                    : `${action} is allowed for ${selectedRole}.`,
                )
              }
              className={`flex items-center justify-between rounded-2xl border p-4 text-left transition ${
                locked ? "border-slate-200 bg-slate-50 text-slate-500" : "border-emerald-200 bg-emerald-50 text-emerald-800"
              }`}
            >
              <span className="font-bold">{action}</span>
              {locked ? <Lock className="h-4 w-4" aria-hidden="true" /> : <Check className="h-4 w-4" aria-hidden="true" />}
            </button>
          );
        })}
      </div>
      <p className="mt-4 rounded-2xl border border-blue-100 bg-blue-50 p-4 text-sm font-semibold leading-6 text-blue-800">
        Restricted by permission set. Admin can customize this access.
      </p>
    </div>
  );
}

function AuditTrailPreview({ industry }: { industry: DemoIndustry }) {
  const lead = industry.leads[0];
  const secondLead = industry.leads[1] ?? lead;
  const auditItems = [
    `${lead.owner} changed ${lead.name} status from Contacted to ${lead.stage}.`,
    `Workflow created a follow-up task for ${secondLead.name}.`,
    `Admin updated ${industry.roleUserLabel} permission set.`,
    `AI scored ${lead.name} as 87/100.`,
    `Rahul exported monthly ${industry.reports[0]?.title ?? "performance"} report.`,
    `System sent notification for ${industry.workflows[0]?.title ?? "automation rule"}.`,
  ];

  return (
    <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
      <SectionHeader
        eyebrow="Audit trail"
        title="Every important action is traceable"
        description="Track user actions, system actions, workflow events, AI activity, exports, and permission changes."
      />
      <div className="space-y-3">
        {auditItems.map((item, index) => (
          <div key={item} className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-blue-600 text-xs font-bold text-white">
              {index + 1}
            </span>
            <p className="text-sm font-semibold leading-6 text-slate-700">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ApprovalFlowDemo({ industry, showToast }: { industry: DemoIndustry; showToast: (message: string) => void }) {
  const approvalExamples = getApprovalExamples(industry);
  const [selectedApproval, setSelectedApproval] = useState(approvalExamples[0]);

  useEffect(() => {
    setSelectedApproval(getApprovalExamples(industry)[0]);
  }, [industry]);

  return (
    <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
      <SectionHeader
        eyebrow="Approval flows"
        title="Approvals before sensitive actions"
        description="Discounts, refunds, purchases, documents, and user access can follow controlled approval workflows."
      />
      <div className="grid gap-3 sm:grid-cols-2">
        {approvalExamples.map((approval) => (
          <button
            type="button"
            key={approval.title}
            onClick={() => setSelectedApproval(approval)}
            className={`rounded-2xl border p-4 text-left transition ${
              approval.title === selectedApproval.title ? "border-blue-200 bg-blue-50" : "border-slate-200 bg-slate-50"
            }`}
          >
            <p className="font-bold text-slate-950">{approval.title}</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">{approval.description}</p>
          </button>
        ))}
      </div>
      <div className="mt-5 rounded-2xl border border-blue-100 bg-gradient-to-br from-cyan-50 to-white p-4">
        <p className="font-bold text-slate-950">{selectedApproval.title}</p>
        <div className="mt-4 grid gap-3 md:grid-cols-4">
          {["Request", "Manager Review", selectedApproval.decision, "Record Updated"].map((step, index) => (
            <div key={`${selectedApproval.title}-${step}`} className="rounded-2xl border border-slate-200 bg-white p-4 text-center">
              <span className="mx-auto grid h-8 w-8 place-items-center rounded-full bg-blue-600 text-xs font-bold text-white">{index + 1}</span>
              <p className="mt-3 text-xs font-bold text-slate-700">{step}</p>
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={() => showToast(`${selectedApproval.title} submitted for approval in demo mode.`)}
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-bold text-white"
        >
          Submit approval
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

function ClientPortalPreview({ industry }: { industry: DemoIndustry }) {
  const portal = getPortalPreview(industry);

  return (
    <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
      <SectionHeader
        eyebrow="Client portal preview"
        title={portal.title}
        description="External users can get restricted portal views without exposing your internal CRM."
      />
      <div className="rounded-[26px] border border-slate-200 bg-slate-950 p-5 text-white">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">{portal.user}</p>
            <h3 className="mt-2 text-xl font-bold">{portal.primaryStatus}</h3>
          </div>
          <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-bold text-emerald-100">
            Portal access
          </span>
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {portal.items.map((item) => (
            <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
              <p className="text-sm font-bold text-white">{item.label}</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function IntegrationMarketplacePreview({ industry }: { industry: DemoIndustry }) {
  const recommended = new Set(getIndustryIntegrations(industry));

  return (
    <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
      <SectionHeader
        eyebrow="Integration marketplace"
        title="Connect HNX with the tools your team already uses"
        description="Some integrations can be standard, some popular, and some custom-built around your workflow."
      />
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {integrationMarketplace.map((integration) => (
          <div key={integration.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-bold text-slate-950">{integration.name}</p>
                <p className="mt-1 text-xs font-semibold text-slate-500">
                  {recommended.has(integration.name) ? "Recommended for this demo" : "Optional connection"}
                </p>
              </div>
              <span className={`rounded-full border px-2 py-1 text-[11px] font-bold ${statusClasses(integration.status)}`}>
                {integration.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function NotificationCenterPreview({ industry }: { industry: DemoIndustry }) {
  const notifications = getNotificationExamples(industry);

  return (
    <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
      <SectionHeader
        eyebrow="Notification center"
        title="Alerts that reach the right person"
        description="In-app, email, WhatsApp, and SMS alerts can be triggered by your business rules."
      />
      <div className="space-y-3">
        {notifications.map((notification) => (
          <div key={notification.message} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="flex items-center justify-between gap-3">
              <p className="font-bold text-slate-950">{notification.message}</p>
              <span className="rounded-full bg-blue-50 px-2 py-1 text-xs font-bold text-blue-700">{notification.channel}</span>
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-600">{notification.context}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function SmartReportBuilder({ industry }: { industry: DemoIndustry }) {
  const metricOptions = getReportMetricOptions(industry);
  const [metric, setMetric] = useState(metricOptions[0]);
  const [groupBy, setGroupBy] = useState("Owner");
  const [dateRange, setDateRange] = useState("This month");
  const [filter, setFilter] = useState("High priority only");

  useEffect(() => {
    setMetric(getReportMetricOptions(industry)[0]);
    setGroupBy("Owner");
    setDateRange("This month");
    setFilter("High priority only");
  }, [industry]);

  return (
    <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
      <SectionHeader
        eyebrow="Smart report builder"
        title="Build reports without waiting for manual spreadsheets"
        description="Choose metric, grouping, date range, and filters to generate a mock CRM report preview."
      />
      <div className="grid gap-4 md:grid-cols-2">
        <SelectField label="Metric" value={metric} options={metricOptions} onChange={setMetric} />
        <SelectField label="Group by" value={groupBy} options={["Owner", "Source", "Stage", "Status", "Team", "City"]} onChange={setGroupBy} />
        <SelectField label="Date range" value={dateRange} options={["Today", "This week", "This month", "Last 90 days"]} onChange={setDateRange} />
        <SelectField label="Filter" value={filter} options={["High priority only", "All records", "Pending only", "Won / completed", "Overdue only"]} onChange={setFilter} />
      </div>
      <div className="mt-5 rounded-[24px] border border-blue-100 bg-gradient-to-br from-cyan-50 to-white p-5">
        <p className="text-sm font-bold text-blue-700">Generated report preview</p>
        <h3 className="mt-2 text-2xl font-bold text-slate-950">{metric} by {groupBy}</h3>
        <p className="mt-2 text-sm text-slate-600">
          Date range: {dateRange}. Filter: {filter}. This preview would become a saved dashboard widget in the final CRM.
        </p>
        <div className="mt-5 flex h-28 items-end gap-2">
          {[52, 74, 46, 88, 62, 70, 58].map((height, index) => (
            <div key={`${metric}-${height}-${index}`} className="flex-1 rounded-t-lg bg-gradient-to-t from-blue-600 to-cyan-300" style={{ height: `${height}%` }} />
          ))}
        </div>
      </div>
    </div>
  );
}

function CustomFieldBuilder({ industry }: { industry: DemoIndustry }) {
  const fieldExamples = getFieldExamples(industry);
  const [fieldName, setFieldName] = useState(fieldExamples[0]);
  const [fieldType, setFieldType] = useState("Dropdown");
  const fieldTypes = ["Text", "Number", "Dropdown", "Date", "File Upload", "User Assignment", "Status", "Currency", "Formula"];

  useEffect(() => {
    setFieldName(getFieldExamples(industry)[0]);
    setFieldType("Dropdown");
  }, [industry]);

  return (
    <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
      <SectionHeader
        eyebrow="Admin field builder"
        title="Create custom fields without changing the whole CRM"
        description="Fields can be used in forms, records, workflows, reports, permissions, imports, and AI context."
      />
      <div className="grid gap-4 md:grid-cols-2">
        <SelectField label="Custom field" value={fieldName} options={fieldExamples} onChange={setFieldName} />
        <SelectField label="Field type" value={fieldType} options={fieldTypes} onChange={setFieldType} />
      </div>
      <div className="mt-5 rounded-[24px] border border-slate-200 bg-slate-50 p-5">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Field preview</p>
        <div className="mt-3 rounded-2xl border border-slate-200 bg-white p-4">
          <label className="text-sm font-bold text-slate-700">{fieldName}</label>
          <div className="mt-3 h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-500">
            {fieldType} field connected to reports, workflows, and permissions
          </div>
        </div>
      </div>
    </div>
  );
}

function DataImportPreview({ showToast }: { showToast: (message: string) => void }) {
  const [completed, setCompleted] = useState(false);
  const steps = ["Upload Excel/CSV", "Map Columns", "Validate Data", "Import Records"];

  return (
    <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
      <SectionHeader
        eyebrow="Data import"
        title="Bring existing data into your CRM"
        description="A clean import flow helps migrate spreadsheets without losing structure."
      />
      <div className="space-y-3">
        {steps.map((step, index) => (
          <div key={step} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-blue-600 text-xs font-bold text-white">{index + 1}</span>
            <span className="font-bold text-slate-800">{step}</span>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={() => {
          setCompleted(true);
          showToast("Import completed successfully in demo mode.");
        }}
        className="mt-5 inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-bold text-white"
      >
        Run import preview
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </button>
      {completed ? (
        <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-bold leading-6 text-emerald-800">
          1,240 records imported. 36 duplicates detected. 12 missing phone numbers found. Import completed successfully.
        </div>
      ) : null}
    </div>
  );
}

function DuplicateDetectionPreview({ showToast }: { showToast: (message: string) => void }) {
  const duplicates = [
    "Same phone number found in multiple leads",
    "Same email exists in customer and lead",
    "Similar company name detected",
  ];

  return (
    <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
      <SectionHeader
        eyebrow="Duplicate detection"
        title="Keep CRM data clean"
        description="HNX can flag possible duplicates before your team creates messy records."
      />
      <div className="space-y-3">
        {duplicates.map((duplicate) => (
          <div key={duplicate} className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm font-bold text-amber-800">
            {duplicate}
          </div>
        ))}
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {["Merge records", "Keep separate", "Assign to manager"].map((action) => (
          <button
            type="button"
            key={action}
            onClick={() => showToast(`${action} selected in demo mode.`)}
            className="rounded-full border border-blue-100 bg-blue-50 px-3 py-2 text-sm font-bold text-blue-700"
          >
            {action}
          </button>
        ))}
      </div>
    </div>
  );
}

function SLATimerPreview({ industry }: { industry: DemoIndustry }) {
  return (
    <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
      <SectionHeader
        eyebrow="SLA timers"
        title="Support work should never disappear"
        description="SLA timer badges help teams see urgency, overdue tickets, and escalation risk."
      />
      <div className="space-y-3">
        {industry.tickets.map((ticket, index) => (
          <div key={ticket.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-bold text-slate-950">{ticket.title}</p>
                <p className="mt-1 text-sm text-slate-500">{ticket.customer}</p>
              </div>
              <span className={`rounded-full border px-2 py-1 text-xs font-bold ${statusClasses(getSlaBadge(index))}`}>
                {getSlaBadge(index)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DemoLeadCapture({ industry, showToast }: { industry: DemoIndustry; showToast: (message: string) => void }) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    showToast("CRM blueprint request captured in demo mode.");
  }

  return (
    <div className="overflow-hidden rounded-[36px] border border-blue-100 bg-[radial-gradient(circle_at_15%_20%,rgba(37,208,255,0.24),transparent_28%),linear-gradient(135deg,#eff6ff,#ffffff_55%,#dff7ff)] p-6 shadow-[0_30px_100px_rgba(37,208,255,0.16)] sm:p-8">
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.26em] text-blue-700">Conversion form</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
            Want this CRM customized for your business?
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Share your current tools, team size, workflow problems, and industry. HNX can convert this demo into a
            serious CRM blueprint for your business.
          </p>
          <div className="mt-6 rounded-2xl border border-blue-100 bg-white/80 p-4 text-sm font-semibold leading-6 text-blue-800">
            Current demo context: {industry.name}. Built around your process, not someone else&apos;s template.
          </div>
        </div>
        <form onSubmit={handleSubmit} className="grid gap-4 rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm sm:grid-cols-2">
          {[
            ["Name", "text"],
            ["Company", "text"],
            ["Team size", "text"],
            ["Current tools", "text"],
            ["Phone", "tel"],
            ["Email", "email"],
          ].map(([label, type]) => (
            <label key={label}>
              <span className="mb-2 block text-sm font-bold text-slate-700">{label}</span>
              <input
                type={type}
                placeholder={label}
                className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none focus:border-cyan-300 focus:ring-4 focus:ring-cyan-100"
              />
            </label>
          ))}
          <label>
            <span className="mb-2 block text-sm font-bold text-slate-700">Industry</span>
            <input
              value={industry.name}
              readOnly
              className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-semibold text-slate-600 outline-none"
            />
          </label>
          <label className="sm:col-span-2">
            <span className="mb-2 block text-sm font-bold text-slate-700">Biggest problem</span>
            <textarea
              rows={4}
              placeholder="Example: missed follow-ups, manual reports, poor permissions, no workflow automation..."
              className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-cyan-300 focus:ring-4 focus:ring-cyan-100"
            />
          </label>
          <Button type="submit" size="lg" className="sm:col-span-2" showArrow>
            Get My CRM Blueprint
          </Button>
        </form>
      </div>
    </div>
  );
}

function getRecommendedSetup(industry: DemoIndustry, config: ConfiguratorState) {
  const isLargeTeam = config.teamSize.includes("51") || config.teamSize.includes("150");
  const isAdvancedAutomation = config.automationLevel.includes("Advanced") || config.automationLevel.includes("approval");
  const isAdvancedAi = config.aiLevel.includes("scoring") || config.aiLevel.includes("assistant");
  const plan = isLargeTeam
    ? "Enterprise Custom CRM"
    : isAdvancedAi
      ? "AI-Powered CRM"
      : isAdvancedAutomation
        ? "Growth CRM"
        : "Starter CRM";

  return {
    plan,
    modules: (config.modules.length ? config.modules : industry.modules).slice(0, 7),
    workflows: industry.workflows.map((workflow) => workflow.title).slice(0, isAdvancedAutomation ? 4 : 2),
    aiFeatures:
      config.aiLevel === "No AI yet"
        ? ["AI-ready data structure", "Future AI assistant layer"]
        : industry.aiQuestions.map((question) => question.question).slice(0, isAdvancedAi ? 4 : 2),
    roles: (config.roles.length ? config.roles : industry.roles.map((role) => role.name)).slice(0, 6),
    phases: [
      "Discovery, module map, fields, and permission blueprint",
      "Core CRM build with imports, dashboard, and role-based access",
      "Workflow automation, integrations, notifications, and approval flows",
      "AI assistant, reporting, portal preview, training, and launch support",
    ],
  };
}

function getIndustryBlueprint(industry: DemoIndustry) {
  return [
    { title: "Recommended modules", icon: Database, items: industry.modules.slice(0, 7) },
    { title: "Recommended roles", icon: Users, items: industry.roles.map((role) => role.name).slice(0, 7) },
    { title: "Permission sets", icon: ShieldCheck, items: permissionTypes.slice(0, 7) },
    { title: "Workflow engine", icon: Workflow, items: industry.workflows.map((workflow) => workflow.title).slice(0, 6) },
    { title: "Dashboards", icon: BarChart3, items: industry.reports.map((report) => report.title).slice(0, 6) },
    { title: "AI assistant", icon: Bot, items: industry.aiQuestions.map((item) => item.question).slice(0, 6) },
    { title: "Integrations", icon: Zap, items: getIndustryIntegrations(industry).slice(0, 6) },
  ];
}

function getRolePerspectiveItems(industry: DemoIndustry, selectedRole: string) {
  const role = selectedRole.toLowerCase();
  if (role.includes("owner")) {
    return [
      { title: "Revenue and pipeline health", description: `${industry.stats[2]?.label ?? "Revenue"} is visible with conversion and risk signals.` },
      { title: "Team performance", description: "Compare owner workload, pending follow-ups, delayed tasks, and conversion by user." },
      { title: "Business risks", description: "See overdue tickets, stuck pipeline stages, payment delays, and workflow failures." },
      { title: "AI business insights", description: industry.aiInsights[0] ?? "AI highlights the actions that need leadership attention." },
      { title: "Reports", description: "Owner-level dashboards summarize sales, operations, support, and financial movement." },
    ];
  }
  if (role.includes("admin") || role.includes("super")) {
    return [
      { title: "Users", description: "Create users, assign departments, manage branches, and deactivate inactive accounts." },
      { title: "Roles", description: "Design role templates for managers, users, support, finance, portals, and operations." },
      { title: "Permissions", description: "Control module, field, record, export, approval, and report-level access." },
      { title: "Workflows", description: "Edit triggers, conditions, actions, notifications, and approval rules." },
      { title: "Audit logs", description: "Track system actions, permission changes, exports, workflow events, and AI activity." },
    ];
  }
  if (role.includes("support") || role.includes("care") || role.includes("front desk")) {
    return [
      { title: "Tickets", description: `Work from ${industry.labels.tickets.toLowerCase()} with status, owner, and customer context.` },
      { title: "SLA timers", description: "See overdue, escalated, due today, and remaining-time badges for support work." },
      { title: "Escalations", description: "Move urgent issues to managers with internal notes and workflow alerts." },
      { title: "Customer issues", description: "View customer record, past communication, ticket history, and next action." },
    ];
  }
  if (role.includes("manager") || role.includes("head")) {
    return [
      { title: "Team queue", description: "Review assigned work, delayed follow-ups, approvals, and owner-level performance." },
      { title: "Conversion", description: `Monitor ${industry.labels.pipeline.toLowerCase()} stage movement and stuck records.` },
      { title: "Approvals", description: "Approve discounts, documents, refunds, purchases, access requests, or escalations." },
      { title: "Reports", description: "Access management dashboards without changing admin-only settings." },
    ];
  }
  return [
    { title: "Assigned records", description: `Focus on assigned ${industry.labels.leads.toLowerCase()} and daily action items.` },
    { title: "Today's follow-ups", description: "See pending calls, reminders, tasks, status updates, and next steps." },
    { title: "Pipeline updates", description: "Move records through allowed stages and add notes after each touchpoint." },
    { title: "Limited actions", description: "Exports, deletes, user settings, finance reports, and workflow edits can be locked." },
  ];
}

function getIndustryIntegrations(industry: DemoIndustry) {
  const common = ["Website Forms", "WhatsApp", "Email", "Google Sheets", "Custom APIs"];
  const industrySpecific: Record<IndustryId, string[]> = {
    general: ["Meta Ads", "Google Ads", "Calendly", "Google Calendar"],
    education: ["Meta Ads", "Google Ads", "Google Calendar", "Razorpay"],
    healthcare: ["Google Calendar", "WhatsApp", "Twilio", "Razorpay"],
    realEstate: ["Meta Ads", "Google Ads", "WhatsApp", "Calendly"],
    pharma: ["Razorpay", "Custom APIs", "Google Sheets", "Email"],
    events: ["Stripe", "Razorpay", "Meta Ads", "Custom APIs"],
    saas: ["Stripe", "Calendly", "Slack", "Google Calendar"],
    localServices: ["WhatsApp", "Google Calendar", "Razorpay", "Meta Ads"],
  };

  return [...new Set([...common, ...industrySpecific[industry.id]])];
}

function getReportMetricOptions(industry: DemoIndustry) {
  const options: Record<IndustryId, string[]> = {
    general: ["Leads", "Deals", "Revenue", "Follow-ups", "Tickets", "Conversion"],
    education: ["Admissions", "Fees", "Documents", "Counselling Calls", "Enrollments", "Course Interest"],
    healthcare: ["Appointments", "Reports", "Follow-ups", "Billing", "Patient Satisfaction", "Support Cases"],
    realEstate: ["Leads", "Site Visits", "Bookings", "Inventory Matches", "Payment Milestones", "Agent Conversion"],
    pharma: ["Stock", "Orders", "Payments", "Dispatch", "Low Stock", "Retailer Sales"],
    events: ["Tickets", "Revenue", "Platforms", "Vendors", "Occupancy", "Support Tickets"],
    saas: ["Trials", "MRR", "Churn Risk", "Onboarding", "Support Tickets", "Product Qualified Leads"],
    localServices: ["Bookings", "Payments", "Staff Jobs", "Repeat Customers", "Reviews", "Follow-ups"],
  };

  return options[industry.id];
}

function getApprovalExamples(industry: DemoIndustry) {
  const common = [
    { title: "User access approval", description: "New user requests module access before joining the CRM.", decision: "Approved" },
    { title: "Document approval", description: "Uploaded documents are reviewed before status changes.", decision: "Approved" },
  ];
  const specific: Record<IndustryId, Array<{ title: string; description: string; decision: string }>> = {
    general: [
      { title: "Discount approval", description: "Sales user requests a custom proposal discount.", decision: "Approved" },
      { title: "Deal approval", description: "High-value deal requires manager review before closing.", decision: "Approved" },
      { title: "Refund approval", description: "Support requests refund review for a customer issue.", decision: "Rejected" },
      { title: "Purchase approval", description: "Operations requests software or service purchase.", decision: "Approved" },
    ],
    education: [
      { title: "Scholarship approval", description: "Counsellor requests scholarship or fee discount for a student.", decision: "Approved" },
      { title: "Fee discount approval", description: "Admission head reviews discount before finance updates fee status.", decision: "Approved" },
      { title: "Document approval", description: "Verification user approves uploaded marksheet and ID proof.", decision: "Approved" },
      { title: "Refund approval", description: "Finance reviews admission refund request.", decision: "Rejected" },
    ],
    healthcare: [
      { title: "Billing approval", description: "Billing user requests approval for corrected invoice amount.", decision: "Approved" },
      { title: "Report release approval", description: "Doctor approves a report before patient notification.", decision: "Approved" },
      { title: "Refund approval", description: "Admin reviews duplicate payment refund.", decision: "Approved" },
      { title: "User access approval", description: "New care coordinator requests patient follow-up access.", decision: "Approved" },
    ],
    realEstate: [
      { title: "Discount approval", description: "Agent requests price discount before booking confirmation.", decision: "Approved" },
      { title: "Deal approval", description: "Sales head reviews high-value commercial deal.", decision: "Approved" },
      { title: "Document approval", description: "Documentation team approves KYC and booking documents.", decision: "Approved" },
      { title: "Payment milestone approval", description: "Finance approves milestone change request.", decision: "Rejected" },
    ],
    pharma: [
      { title: "Stock purchase approval", description: "Stock manager requests manufacturer purchase for low-stock medicines.", decision: "Approved" },
      { title: "Credit limit approval", description: "Accounts asks manager to approve retailer credit extension.", decision: "Approved" },
      { title: "Dispatch approval", description: "Manager approves dispatch for a large mixed order.", decision: "Approved" },
      { title: "Invoice correction approval", description: "Billing user requests invoice correction approval.", decision: "Rejected" },
    ],
    events: [
      { title: "Vendor payment approval", description: "Event manager requests vendor payment release.", decision: "Approved" },
      { title: "Sponsor deal approval", description: "Owner reviews sponsor proposal before contract update.", decision: "Approved" },
      { title: "Refund approval", description: "Ticketing user requests attendee refund approval.", decision: "Approved" },
      { title: "Campaign spend approval", description: "Marketing requests promotion budget for low-selling event.", decision: "Approved" },
    ],
    saas: [
      { title: "Deal approval", description: "Account executive requests custom subscription terms.", decision: "Approved" },
      { title: "Discount approval", description: "Sales manager reviews annual plan discount.", decision: "Approved" },
      { title: "Refund approval", description: "Customer success requests refund for billing issue.", decision: "Rejected" },
      { title: "User access approval", description: "Support agent requests advanced account access.", decision: "Approved" },
    ],
    localServices: [
      { title: "Discount approval", description: "Receptionist requests package discount for repeat customer.", decision: "Approved" },
      { title: "Refund approval", description: "Manager reviews refund for delayed service.", decision: "Approved" },
      { title: "Purchase approval", description: "Branch manager requests supplies or equipment purchase.", decision: "Approved" },
      { title: "Staff access approval", description: "New technician requests service calendar access.", decision: "Approved" },
    ],
  };

  return [...specific[industry.id], ...common].slice(0, 6);
}

function getPortalPreview(industry: DemoIndustry) {
  const firstRecord = industry.records[0];
  const previews: Record<IndustryId, { title: string; user: string; primaryStatus: string; items: Array<{ label: string; value: string }> }> = {
    general: {
      title: "Customer portal preview",
      user: firstRecord?.name ?? "Client",
      primaryStatus: "Request and project status",
      items: [
        { label: "Request status", value: firstRecord?.status ?? "In progress" },
        { label: "Documents", value: "Proposal, onboarding checklist, and signed files" },
        { label: "Invoices", value: "Latest invoice and payment status" },
        { label: "Tickets", value: "Open requests and recent updates" },
      ],
    },
    education: {
      title: "Student / Parent portal preview",
      user: "Parent and student access",
      primaryStatus: "Application status and fee progress",
      items: [
        { label: "Application status", value: "Campus visit pending and application started" },
        { label: "Documents", value: "Marksheets, ID proof, certificates, and verification status" },
        { label: "Fee status", value: "Fee pending with next finance follow-up" },
        { label: "Messages", value: "Counsellor notes, parent updates, and reminders" },
      ],
    },
    healthcare: {
      title: "Patient portal preview",
      user: "Patient access",
      primaryStatus: "Appointments, reports, and prescriptions",
      items: [
        { label: "Appointments", value: "Upcoming consultation and follow-up reminders" },
        { label: "Reports", value: "Diagnostics report status and release updates" },
        { label: "Prescriptions", value: "Doctor notes and prescription uploads" },
        { label: "Payments", value: "Billing status and receipt requests" },
      ],
    },
    realEstate: {
      title: "Buyer portal preview",
      user: "Buyer / tenant access",
      primaryStatus: "Site visits and documents",
      items: [
        { label: "Site visits", value: "Scheduled visits, route map, and agent contact" },
        { label: "Documents", value: "KYC, booking form, agreement, and possession files" },
        { label: "Payment milestones", value: "Token, booking, and milestone payment status" },
        { label: "Updates", value: "Property recommendations and negotiation notes" },
      ],
    },
    pharma: {
      title: "Retailer portal preview",
      user: "Retailer / distributor access",
      primaryStatus: "Orders, invoices, and payment status",
      items: [
        { label: "Orders", value: "New order, stock check, dispatch, and delivery status" },
        { label: "Invoices", value: "Bill copies, corrections, and credit notes" },
        { label: "Payments", value: "Pending bills, receipts, and collection reminders" },
        { label: "Messages", value: "Stock availability and dispatch updates" },
      ],
    },
    events: {
      title: "Sponsor / vendor portal preview",
      user: "Sponsor, vendor, or partner access",
      primaryStatus: "Event tasks and invoice approvals",
      items: [
        { label: "Event tasks", value: "Vendor planning, setup, and show-day checklist" },
        { label: "Invoices", value: "Vendor payment status and approval updates" },
        { label: "Approvals", value: "Sponsor assets, vendor documents, and payout approvals" },
        { label: "Messages", value: "Event manager updates and reminders" },
      ],
    },
    saas: {
      title: "Account portal preview",
      user: "Customer account access",
      primaryStatus: "Trial, onboarding, support, and renewal status",
      items: [
        { label: "Onboarding", value: "Setup tasks, training, and completion percentage" },
        { label: "Invoices", value: "Subscription billing and renewal reminders" },
        { label: "Tickets", value: "Open support tickets and product issues" },
        { label: "Messages", value: "Customer success updates and account notes" },
      ],
    },
    localServices: {
      title: "Customer booking portal preview",
      user: "Customer access",
      primaryStatus: "Bookings, payments, and service updates",
      items: [
        { label: "Request status", value: "Booking confirmed and staff assigned" },
        { label: "Payments", value: "Payment link, receipt, and pending amount" },
        { label: "Tickets", value: "Service delays, support issues, and resolutions" },
        { label: "Updates", value: "Technician arrival, completion, and feedback request" },
      ],
    },
  };

  return previews[industry.id];
}

function getNotificationExamples(industry: DemoIndustry) {
  const common = [
    { message: "New high-value lead assigned.", channel: "In-app", context: `${industry.leads[0]?.owner ?? "Owner"} received a priority record.` },
    { message: "Ticket SLA breach warning.", channel: "Email", context: `${industry.tickets[0]?.title ?? "Support ticket"} is close to escalation.` },
    { message: "Payment overdue.", channel: "WhatsApp", context: "Finance follow-up was created automatically." },
    { message: "Demo scheduled.", channel: "SMS", context: "Customer and owner both received confirmation." },
    { message: "Approval pending.", channel: "In-app", context: "Manager review required before record update." },
    { message: "AI insight available.", channel: "In-app", context: industry.aiInsights[0] ?? "AI found a priority action." },
  ];
  if (industry.id === "pharma") {
    return [
      { message: "Stock below threshold.", channel: "In-app", context: "Vitamin D3 Tablets and Azithromycin need reorder." },
      ...common.slice(1),
    ];
  }
  if (industry.id === "education") {
    return [
      { message: "Document pending reminder.", channel: "WhatsApp", context: "Parent and counsellor notified about missing documents." },
      ...common.slice(0, 5),
    ];
  }
  if (industry.id === "healthcare") {
    return [
      { message: "Appointment confirmation pending.", channel: "SMS", context: "Front desk should call before the appointment window." },
      ...common.slice(1),
    ];
  }
  return common;
}

function getFieldExamples(industry: DemoIndustry) {
  const common = ["Budget", "Lead Source", "Payment Status", "Priority", "Owner", "Next Follow-up Date"];
  const specific: Record<IndustryId, string[]> = {
    general: ["Deal Value", "Business Type", "CRM Challenge", "Proposal Stage"],
    education: ["Course Interest", "Grade / Program", "Document Status", "Fee Plan"],
    healthcare: ["Appointment Type", "Doctor", "Report Status", "Billing Status"],
    realEstate: ["Property Type", "Budget", "Preferred Location", "Site Visit Date"],
    pharma: ["Medicine Stock", "Batch Number", "Expiry Date", "Retailer Credit Limit"],
    events: ["Ticket Platform", "Event Date", "Vendor Status", "Sponsor Category"],
    saas: ["Trial Status", "MRR Value", "Churn Risk", "Product Usage Score"],
    localServices: ["Service Type", "Booking Slot", "Staff Assigned", "Payment Status"],
  };

  return [...specific[industry.id], ...common];
}

function getSlaBadge(index: number) {
  return ["4h left", "Due today", "Overdue", "Escalated"][index % 4];
}

function getGuideContent(activeTab: DemoTab) {
  const guideMap: Record<DemoTab, { title: string; message: string; cta: string; targetTab?: DemoTab; href?: string }> = {
    overview: {
      title: "This Is Your Business Control Room",
      message:
        "Your actual CRM can show live leads, revenue, team activity, pending tasks, tickets, AI insights, reports, integrations, client portals, campaigns, audit logs, and performance dashboards in one place.",
      cta: "Explore Reports",
      targetTab: "reports",
    },
    leads: {
      title: "Capture Every Lead in One Place",
      message:
        "HNX can collect leads from website forms, WhatsApp, ads, calls, emails, referrals, landing pages, and APIs, then assign them automatically with workflow rules.",
      cta: "Ask AI About Leads",
      targetTab: "ai",
    },
    pipeline: {
      title: "Customize Your Sales Journey",
      message:
        "Your pipeline stages can be created around your process. Add stages, automate follow-ups, assign users, and track every deal from inquiry to closure.",
      cta: "Open Pipeline Builder",
      targetTab: "build",
    },
    records: {
      title: "Every Record Has a Full History",
      message:
        "Records can include custom modules, communication history, documents, payments, approvals, customer portals, AI summaries, and security-controlled fields.",
      cta: "View Records",
      targetTab: "records",
    },
    tasks: {
      title: "Turn Work Into Clear Ownership",
      message:
        "Tasks and follow-ups can be created manually or by automation, with reminders, WhatsApp alerts, escalation rules, and audit trails.",
      cta: "Open Workflows",
      targetTab: "workflows",
    },
    tickets: {
      title: "Support Tickets With SLA Control",
      message:
        "Support tickets can include SLA timers, escalations, customer issues, internal comments, AI summaries, and permission-based visibility.",
      cta: "View Tickets",
      targetTab: "tickets",
    },
    workflows: {
      title: "Automate Repetitive Work",
      message:
        "Use Trigger to Condition to Action workflows to automate lead assignment, reminders, approvals, ticket escalation, stock alerts, payment follow-ups, notifications, and campaigns.",
      cta: "Run Workflow Simulator",
      targetTab: "advanced",
    },
    permissions: {
      title: "Control Who Can See and Do What",
      message:
        "HNX supports role-based access, permission sets, module-level permissions, field-level permissions, export restrictions, approval rights, branch rules, and record-level access.",
      cta: "View Permission Matrix",
      targetTab: "permissions",
    },
    reports: {
      title: "Turn Data Into Decisions",
      message:
        "Reports can be customized for revenue, leads, conversions, stock, tickets, team performance, admissions, event sales, bookings, ROI, and industry-specific KPIs.",
      cta: "Build Report",
      targetTab: "advanced",
    },
    ai: {
      title: "AI Works With Your CRM Data",
      message:
        "AI can score leads, explain reports, summarize customers, draft follow-up messages, identify risks, forecast outcomes, segment records, and suggest next-best actions.",
      cta: "Ask AI",
      targetTab: "ai",
    },
    advanced: {
      title: "Explore Enterprise CRM Features",
      message:
        "Preview audit logs, approval workflows, client portals, integrations, notifications, campaigns, documents, invoices, risk detection, white-label CRM, and implementation phases.",
      cta: "Generate Blueprint",
      targetTab: "build",
    },
    roi: {
      title: "See the Business Value",
      message:
        "Estimate how much time, manual work, missed follow-ups, rented CRM cost, and revenue opportunity your business can recover with a custom-owned CRM.",
      cta: "Open Full ROI Calculator",
      href: "/roi-calculator",
    },
    build: {
      title: "Build Your CRM Blueprint",
      message:
        "Select modules, roles, workflows, AI features, dashboards, integrations, reports, client portals, security controls, campaigns, data imports, and white-label options.",
      cta: "Generate Blueprint",
      targetTab: "build",
    },
    activity: {
      title: "Trace Every Workspace Action",
      message:
        "Activity logs show lead changes, workflow runs, tasks, AI scoring, role updates, exports, notifications, and important admin events.",
      cta: "Open Workflows",
      targetTab: "workflows",
    },
  };

  return guideMap[activeTab];
}

function getDynamicModuleName(industry: DemoIndustry) {
  const moduleNames: Record<IndustryId, string> = {
    general: "Custom Business Module",
    education: "Admission Applications",
    healthcare: "Patient Records",
    realEstate: "Property Inventory",
    pharma: "Medicine Inventory",
    events: "Event Revenue Tracker",
    saas: "Trial Accounts",
    localServices: "Service Bookings",
  };

  return moduleNames[industry.id];
}

function getEnterpriseCards(industry: DemoIndustry) {
  const campaignName: Record<IndustryId, string> = {
    general: "Lead Follow-up Campaign",
    education: "Admission Follow-up Campaign",
    healthcare: "Appointment Reminder Campaign",
    realEstate: "Site Visit Follow-up Campaign",
    pharma: "Retailer Payment Campaign",
    events: "Ticket Sales Push Campaign",
    saas: "Trial Activation Campaign",
    localServices: "Repeat Booking Campaign",
  };
  const forecast: Record<IndustryId, string> = {
    general: "Expected revenue",
    education: "Likely admissions",
    healthcare: "Follow-up volume",
    realEstate: "Booking forecast",
    pharma: "Stock shortage risk",
    events: "Ticket sales forecast",
    saas: "Churn risk",
    localServices: "Expected bookings",
  };

  return [
    {
      title: "Multi-branch / multi-location preview",
      description: "Branch A, Branch B, and Branch C can have separate users, leads, revenue, tasks, and reports.",
      icon: MapPin,
      items: ["Admin sees all", "Branch manager sees assigned branch", "Location-wise reports"],
    },
    {
      title: "Communication hub",
      description: "Email, WhatsApp, call notes, SMS, internal comments, and customer replies stay attached to records.",
      icon: MessageSquare,
      items: ["Email", "WhatsApp", "Call notes", "SMS"],
    },
    {
      title: "WhatsApp campaign analytics",
      description: `${campaignName[industry.id]}: Sent 1,200, delivered 1,143, replies 182, converted 39.`,
      icon: Phone,
      items: ["Sent", "Delivered", "Replied", "Converted"],
    },
    {
      title: "Email campaign analytics",
      description: "Track cold campaigns, nurture, proposal follow-ups, reactivation, and onboarding campaigns.",
      icon: Mail,
      items: ["Open rate", "Click rate", "Reply rate", "Conversion"],
    },
    {
      title: "Omnichannel lead capture",
      description: "Website forms, landing pages, WhatsApp, Instagram ads, Google ads, email, calls, referrals, manual entry, and APIs flow into CRM.",
      icon: Database,
      items: ["Auto assignment", "Follow-up rule", "Source reports"],
    },
    {
      title: "Document management",
      description: "Proposals, invoices, KYC, prescriptions, admission forms, property documents, and vendor contracts can include status, owner, approval, expiry, and reminders.",
      icon: FileText,
      items: ["Status", "Owner", "Approval", "Expiry"],
    },
    {
      title: "E-sign / document approval",
      description: "Proposal generated, sent to client, reviewed, e-sign pending, approved, and deal marked won.",
      icon: ClipboardList,
      items: ["Generated", "Reviewed", "E-sign", "Approved"],
    },
    {
      title: "Invoice + payment tracking",
      description: "Invoice created, payment pending, partial payment, paid, overdue, and reminder sent with Razorpay, Stripe, UPI, bank transfer, or manual payment.",
      icon: Calculator,
      items: ["Razorpay", "Stripe", "UPI", "Bank transfer"],
    },
    {
      title: "AI forecasting dashboard",
      description: `${forecast[industry.id]} with confidence scores, expected movement, and recommended next actions.`,
      icon: BarChart3,
      items: ["82% confidence", "Next action", "Trend summary"],
    },
    {
      title: "AI risk detection",
      description: "Detect cold leads, churn risk, overdue payments, SLA breaches, stock shortages, low ticket sales, and admission drop-offs.",
      icon: Bell,
      items: ["Lead going cold", "Payment overdue", "SLA breach"],
      action: "Create Preventive Task",
    },
    {
      title: "Smart segmentation",
      description: "Create segments for hot leads, high-value customers, inactive customers, pending payments, repeat buyers, low-stock products, and VIP guests.",
      icon: Users,
      items: ["Create campaign", "Assign to team", "Ask AI"],
      action: "Create campaign",
    },
    {
      title: "Auto proposal / quotation generator",
      description: "Select lead, choose modules/services, generate proposal, let AI write scope summary, preview price table, and send for approval.",
      icon: FileText,
      items: ["Lead", "Modules", "AI scope", "Approval"],
    },
    {
      title: "Implementation roadmap",
      description: "Phase 1 Core CRM, Phase 2 permissions, Phase 3 automation, Phase 4 reports, Phase 5 AI, Phase 6 integrations.",
      icon: Workflow,
      items: ["No fixed pricing", "Scoped after consultation", "Build phases"],
    },
    {
      title: "Demo vs real build",
      description: "Demo uses static data and mock interactions. Real build includes database, auth, custom roles, workflow engine, AI connected to your data, integrations, deployment, and support.",
      icon: Layers,
      items: ["Demo preview", "Real database", "Deployment"],
    },
    {
      title: "Security & access control",
      description: "Authentication, role-based access, permission sets, audit logs, data isolation, export control, activity tracking, and backup strategy.",
      icon: ShieldCheck,
      items: ["Auth", "Audit logs", "Export control", "Backup"],
    },
    {
      title: "White-label CRM preview",
      description: "Your CRM can include client logo, client colors, custom domain, custom login page, and custom email templates.",
      icon: Palette,
      items: ["Client logo", "Custom domain", "Custom login", "Your brand"],
    },
    {
      title: "Admin setup checklist",
      description: "Company profile, users, roles, modules, pipeline, workflows, reports, AI assistant, and integrations connected.",
      icon: CheckCircle2,
      items: ["Users added", "Roles configured", "AI enabled"],
    },
  ];
}

function getRecordTimeline(lead: DemoLead) {
  return [
    `Record created from ${lead.source}.`,
    `Assigned to ${lead.owner}.`,
    `Call completed for ${lead.need}.`,
    `Proposal or next-step details shared with ${lead.name}.`,
    "Follow-up task created by workflow.",
    `AI score generated: ${lead.temperature}.`,
    `Status changed to ${lead.stage}.`,
  ];
}

function PersonalizationWizard({ industry, showToast }: { industry: DemoIndustry; showToast: (message: string) => void }) {
  const [problem, setProblem] = useState("Missed follow-ups");
  const [need, setNeed] = useState("Automation + AI");
  const [tools, setTools] = useState("Spreadsheets, WhatsApp, Email");

  return (
    <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
      <SectionHeader
        eyebrow="Demo personalization wizard"
        title="Tell the demo what your business needs"
        description="This frontend-only wizard generates a simple recommendation summary from your answers."
      />
      <div className="grid gap-4 md:grid-cols-3">
        <SelectField label="Biggest current problem" value={problem} options={["Missed follow-ups", "Manual reports", "Poor permissions", "Scattered tools", "No automation"]} onChange={setProblem} />
        <SelectField label="Need automation, AI, or both" value={need} options={["Automation only", "AI only", "Automation + AI", "Reports first"]} onChange={setNeed} />
        <SelectField label="Current tools used" value={tools} options={["Spreadsheets, WhatsApp, Email", "Generic CRM", "ERP + Sheets", "Only WhatsApp", "Multiple disconnected apps"]} onChange={setTools} />
      </div>
      <div className="mt-5 rounded-2xl border border-blue-100 bg-blue-50 p-4">
        <p className="text-sm font-bold text-blue-800">Personalized recommendation</p>
        <p className="mt-2 leading-7 text-slate-700">
          Based on your {industry.name} answers, we recommend a Growth CRM with lead capture, workflow automation,
          role-based access, WhatsApp alerts, reports, and an AI follow-up assistant to solve: {problem}.
        </p>
      </div>
      <button
        type="button"
        onClick={() => showToast("Personalized CRM recommendation generated.")}
        className="mt-5 rounded-full bg-blue-600 px-4 py-2 text-sm font-bold text-white"
      >
        Generate recommendation
      </button>
    </div>
  );
}

function AICRMArchitect({ industry }: { industry: DemoIndustry }) {
  const [generated, setGenerated] = useState(false);

  useEffect(() => {
    setGenerated(false);
    const timer = window.setTimeout(() => setGenerated(true), 650);
    return () => window.clearTimeout(timer);
  }, [industry]);

  return (
    <div className="rounded-[32px] border border-blue-100 bg-gradient-to-br from-slate-950 to-blue-950 p-6 text-white shadow-[0_28px_90px_rgba(15,23,42,0.22)]">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-200">AI CRM Architect</p>
          <h3 className="mt-3 text-2xl font-bold">AI CRM Architect is generating your recommended CRM structure...</h3>
          <p className="mt-3 max-w-3xl leading-7 text-slate-300">
            The architect reads your industry demo context and proposes modules, roles, permission sets, workflows,
            reports, integrations, AI features, and build phases.
          </p>
        </div>
        <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-100">
          {generated ? "Structure ready" : "Analyzing..."}
        </span>
      </div>
      <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {[
          ["Modules", industry.modules.slice(0, 4).join(", ")],
          ["Roles", industry.roles.map((role) => role.name).slice(0, 4).join(", ")],
          ["Workflows", industry.workflows.map((workflow) => workflow.title).slice(0, 3).join(", ")],
          ["AI features", industry.aiQuestions.map((item) => item.question).slice(0, 3).join(", ")],
        ].map(([label, value]) => (
          <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
            <p className="text-sm font-bold text-cyan-100">{label}</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">{generated ? value : "Generating recommendation..."}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function DynamicModuleBuilderPreview({ industry }: { industry: DemoIndustry }) {
  const moduleName = getDynamicModuleName(industry);
  const fields = getFieldExamples(industry).slice(0, 6);
  const fieldTypes = ["Text", "Dropdown", "Date", "User Assignment", "Status", "Currency"];

  return (
    <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
      <SectionHeader
        eyebrow="Dynamic module builder"
        title={moduleName}
        description="Preview fields, views, and permissions for a custom module built around your industry."
      />
      <div className="grid gap-3 sm:grid-cols-2">
        {fields.map((field, index) => (
          <div key={field} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="font-bold text-slate-950">{field}</p>
            <p className="mt-1 text-sm text-slate-500">{fieldTypes[index % fieldTypes.length]} field</p>
          </div>
        ))}
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {["Table view", "Kanban view", "Portal view", "Manager permissions"].map((item) => (
          <span key={item} className="rounded-full bg-blue-50 px-3 py-2 text-xs font-bold text-blue-700">{item}</span>
        ))}
      </div>
    </div>
  );
}

function PipelineBuilderPreview({ industry, showToast }: { industry: DemoIndustry; showToast: (message: string) => void }) {
  const [stages, setStages] = useState(industry.pipelineStages.slice(0, 5));
  const [newStage, setNewStage] = useState("Proposal Review");

  useEffect(() => {
    setStages(industry.pipelineStages.slice(0, 5));
  }, [industry]);

  return (
    <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
      <SectionHeader
        eyebrow="Pipeline builder"
        title="Add, rename, and automate stages"
        description="No drag dependency needed here. This preview shows how stages and automation rules can be configured."
      />
      <div className="no-scrollbar flex gap-3 overflow-x-auto pb-2">
        {stages.map((stage, index) => (
          <div key={`${stage}-${index}`} className="w-48 shrink-0 rounded-2xl border border-blue-100 bg-blue-50 p-4">
            <p className="text-sm font-bold text-blue-800">{stage}</p>
            <p className="mt-2 text-xs leading-5 text-blue-700">
              When stage changes to {stage}, create follow-up task after {index + 1} days.
            </p>
          </div>
        ))}
      </div>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <input
          value={newStage}
          onChange={(event) => setNewStage(event.target.value)}
          className="h-11 flex-1 rounded-full border border-slate-200 bg-slate-50 px-4 text-sm outline-none focus:border-cyan-300 focus:ring-4 focus:ring-cyan-100"
        />
        <button
          type="button"
          onClick={() => {
            setStages((current) => [...current, newStage]);
            showToast("Pipeline stage added in demo mode.");
          }}
          className="rounded-full bg-blue-600 px-4 py-2 text-sm font-bold text-white"
        >
          Add stage
        </button>
      </div>
    </div>
  );
}

function CustomDashboardBuilder({ industry }: { industry: DemoIndustry }) {
  const widgetOptions = ["Revenue", "Leads", "Follow-ups", "Tickets", "Inventory alerts", "Team leaderboard", "AI insights", "Pipeline value", "Conversion rate"];
  const [widgets, setWidgets] = useState(widgetOptions.slice(0, 5));

  function toggleWidget(widget: string) {
    setWidgets((current) => (current.includes(widget) ? current.filter((item) => item !== widget) : [...current, widget]));
  }

  return (
    <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
      <SectionHeader
        eyebrow="Dashboard builder"
        title="Choose dashboard widgets"
        description="Build dashboards for owners, managers, admins, sales users, support teams, or client portals."
      />
      <div className="flex flex-wrap gap-2">
        {widgetOptions.map((widget) => (
          <button
            type="button"
            key={widget}
            onClick={() => toggleWidget(widget)}
            className={`rounded-full border px-3 py-2 text-sm font-bold ${widgets.includes(widget) ? "border-blue-200 bg-blue-600 text-white" : "border-slate-200 bg-slate-50 text-slate-700"}`}
          >
            {widget}
          </button>
        ))}
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {widgets.slice(0, 6).map((widget, index) => (
          <div key={widget} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="font-bold text-slate-950">{widget}</p>
            <div className="mt-3 h-2 rounded-full bg-white">
              <div className="h-full rounded-full bg-gradient-to-r from-cyanGlow to-blue-600" style={{ width: `${55 + index * 7}%` }} />
            </div>
          </div>
        ))}
      </div>
      <p className="mt-4 text-sm font-semibold text-slate-500">Preview context: {industry.name}</p>
    </div>
  );
}

function AdvancedPermissionBuilder() {
  const examples = [
    "Sales Executive can view only assigned leads.",
    "Manager can view team leads.",
    "Finance can view payment fields.",
    "Admin can export all reports.",
    "Branch-wise access controls location data.",
    "Team-wise access separates sales, support, and operations.",
  ];

  return (
    <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
      <SectionHeader
        eyebrow="Advanced permission builder"
        title="Go beyond simple admin/user access"
        description="Configure module access, record ownership, field visibility, approval rights, export restrictions, delete restrictions, and branch/team rules."
      />
      <div className="grid gap-3">
        {examples.map((example) => (
          <div key={example} className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold leading-6 text-slate-700">
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true" />
            {example}
          </div>
        ))}
      </div>
    </div>
  );
}

function EnterpriseFeatureGrid({ industry, showToast }: { industry: DemoIndustry; showToast: (message: string) => void }) {
  const cards = getEnterpriseCards(industry);

  return (
    <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
      <SectionHeader
        eyebrow="Enterprise demo features"
        title="More systems your custom CRM can include"
        description="Progressive previews for branches, communication, campaigns, documents, payments, forecasting, risks, proposals, implementation, security, and white-label deployment."
      />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <motion.article key={card.title} whileHover={{ y: -4 }} className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
              <div className="flex items-center justify-between gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-2xl bg-blue-50 text-blue-700">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                {card.action ? (
                  <button
                    type="button"
                    onClick={() => showToast(`${card.action} created in demo mode.`)}
                    className="rounded-full border border-blue-100 bg-white px-3 py-1.5 text-xs font-bold text-blue-700"
                  >
                    {card.action}
                  </button>
                ) : null}
              </div>
              <h3 className="mt-4 font-bold text-slate-950">{card.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{card.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {card.items.map((item) => (
                  <span key={item} className="rounded-full bg-white px-2 py-1 text-[11px] font-bold text-slate-600">
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          );
        })}
      </div>
    </div>
  );
}

function PharmaStockDemo({ showToast }: { showToast: (message: string) => void }) {
  const [billQuantity, setBillQuantity] = useState(40);
  const originalStock = 100;
  const remainingStock = Math.max(originalStock - billQuantity, 0);

  return (
    <div className="mt-6 rounded-[28px] border border-amber-200 bg-gradient-to-br from-amber-50 to-white p-5 shadow-sm">
      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-amber-700">Pharma billing automation</p>
          <h3 className="mt-2 text-2xl font-bold text-slate-950">Stock changes after billing</h3>
          <p className="mt-3 leading-7 text-slate-600">
            Example: Medicine A has 100 boxes. A bill is created for 40 boxes. The inventory dashboard updates the
            remaining stock automatically.
          </p>
        </div>
        <div className="rounded-[24px] border border-amber-200 bg-white p-5 shadow-sm">
          <label htmlFor="bill-quantity" className="text-sm font-bold text-slate-700">
            Bill quantity
          </label>
          <input
            id="bill-quantity"
            type="range"
            min="0"
            max="100"
            value={billQuantity}
            onChange={(event) => setBillQuantity(Number(event.target.value))}
            className="mt-4 w-full accent-blue-600"
          />
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {[
              ["Original stock", `${originalStock} boxes`],
              ["Bill quantity", `${billQuantity} boxes`],
              ["Remaining stock", `${remainingStock} boxes`],
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">{label}</p>
                <p className="mt-2 text-xl font-bold text-slate-950">{value}</p>
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={() => showToast(`Bill created. Remaining stock updated to ${remainingStock} boxes.`)}
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-blue-700"
          >
            Simulate bill creation
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}

function DemoStickyCta() {
  return (
    <div className="sticky bottom-4 z-30 mt-8 rounded-[28px] border border-blue-100 bg-white/[0.94] p-4 shadow-[0_24px_80px_rgba(15,23,42,0.16)] backdrop-blur-xl">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h3 className="text-lg font-bold text-slate-950">Want this CRM for your business?</h3>
          <p className="mt-1 max-w-3xl text-sm leading-6 text-slate-600">
            This is only a sample CRM experience. Your actual CRM can be customized with your modules, workflows, roles,
            permissions, reports, automations, integrations, AI features, and business rules.
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row">
          <Button href="/contact" size="sm" showArrow>
            Build My Custom CRM
          </Button>
          <Button href="/contact" size="sm" variant="secondary">
            Customize This Demo for My Industry
          </Button>
        </div>
      </div>
    </div>
  );
}

function LeadModal({
  lead,
  onClose,
  showToast,
  industry,
}: {
  lead: DemoLead | null;
  onClose: () => void;
  showToast: (message: string) => void;
  industry: DemoIndustry;
}) {
  return (
    <AnimatePresence>
      {lead ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] grid place-items-center bg-slate-950/40 px-4 py-8 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            className="w-full max-w-2xl rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_34px_100px_rgba(15,23,42,0.24)]"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-700">{industry.labels.leads}</p>
                <h2 className="mt-2 text-2xl font-bold text-slate-950">{lead.name}</h2>
                <p className="mt-1 text-slate-500">{lead.organization}</p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-slate-50 text-slate-600 transition hover:bg-cyan-50 hover:text-blue-700"
                aria-label="Close lead details"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                ["Need", lead.need],
                ["Source", lead.source],
                ["Value", lead.value],
                ["Stage", lead.stage],
                ["Owner", lead.owner],
                ["Score", lead.temperature],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-500">{label}</p>
                  <p className="mt-2 font-bold text-slate-950">{value}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-2xl border border-blue-100 bg-blue-50 p-4">
              <p className="text-sm font-bold text-blue-800">CRM context note</p>
              <p className="mt-2 leading-7 text-slate-700">{lead.note}</p>
            </div>
            <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-bold text-slate-950">Record timeline</p>
              <div className="mt-4 space-y-3">
                {getRecordTimeline(lead).map((item) => (
                  <div key={item} className="flex gap-3 text-sm font-semibold leading-6 text-slate-700">
                    <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-blue-600" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button type="button" onClick={() => showToast(`Follow-up created for ${lead.name}.`)}>
                Create Follow-up
              </Button>
              <Button type="button" variant="secondary" onClick={() => showToast(`AI summarized ${lead.name}'s record.`)}>
                Ask AI
              </Button>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
