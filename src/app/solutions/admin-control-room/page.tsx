"use client";

import Link from "next/link";
import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
    ArrowRight,
    BarChart3,
    Bell,
    Building2,
    CheckCircle2,
    CircleAlert,
    Crown,
    Database,
    Download,
    Eye,
    EyeOff,
    FileCheck2,
    FileText,
    Filter,
    Gauge,
    Globe2,
    Grid2X2,
    History,
    Home,
    KeyRound,
    LineChart,
    Lock,
    MapPin,
    Network,
    Pencil,
    Plus,
    RefreshCw,
    Route,
    Settings,
    ShieldAlert,
    ShieldCheck,
    SlidersHorizontal,
    Star,
    TimerReset,
    Trash2,
    TrendingDown,
    TrendingUp,
    UserCheck,
    UserCog,
    Users,
    Workflow,
    Zap,
} from "lucide-react";
import { SolutionSidebar } from "@/components/solutions/SolutionSidebar";
import { Button } from "@/components/ui/Button";

type TabId =
    | "overview"
    | "users-roles"
    | "permissions-matrix"
    | "approval-workflows"
    | "audit-logs"
    | "team-ownership"
    | "security-policies"
    | "final-cta";

type Feature = { icon: LucideIcon; title: string; text: string; tone?: Tone };
type Tone = "blue" | "cyan" | "green" | "purple" | "orange" | "red" | "slate";

const toneClasses: Record<Tone, string> = {
    blue: "bg-[#eef6ff] text-[#145cb7]",
    cyan: "bg-cyan-50 text-[#1593b5]",
    green: "bg-emerald-50 text-emerald-600",
    purple: "bg-purple-50 text-purple-600",
    orange: "bg-orange-50 text-orange-500",
    red: "bg-red-50 text-red-500",
    slate: "bg-slate-100 text-slate-600",
};

const sidebarItems: Array<{ id: TabId; label: string; icon: LucideIcon; description: string }> = [
    { id: "overview", label: "Overview", icon: Home, description: "Control users, roles, permissions, approvals, and security." },
    { id: "users-roles", label: "Users & Roles", icon: Users, description: "Manage team members, departments, seats, roles, and access levels." },
    { id: "permissions-matrix", label: "Permissions Matrix", icon: Grid2X2, description: "Define module, record, field, and action-level permissions." },
    { id: "approval-workflows", label: "Approval Workflows", icon: Workflow, description: "Route approvals based on roles, amounts, conditions, and process rules." },
    { id: "audit-logs", label: "Audit Logs", icon: History, description: "Track every change, access event, export, and policy update." },
    { id: "team-ownership", label: "Team Ownership", icon: UserCheck, description: "Define ownership rules for leads, deals, accounts, tasks, and territories." },
    { id: "security-policies", label: "Security Policies", icon: ShieldCheck, description: "Control login security, retention, data policies, and risk alerts." },
    { id: "final-cta", label: "Final CTA", icon: ArrowRight, description: "Show why governance gives your business confidence at scale." },
];

const overviewCards: Feature[] = [
    { icon: Users, title: "Role-Based Access", text: "Define roles and granular permissions to ensure the right access for the right people.", tone: "blue" },
    { icon: CheckCircle2, title: "Approval Control", text: "Create multi-step approval workflows with conditions, thresholds, and accountability.", tone: "green" },
    { icon: Eye, title: "Audit Visibility", text: "Track every change and action with complete logs, real-time insights, and history.", tone: "purple" },
    { icon: ShieldCheck, title: "Secure Scaling", text: "Apply policies and controls that grow with your business without compromising security.", tone: "cyan" },
];

const adminStats = [
    ["Total Users", "256", "+12%"],
    ["Active Users", "198", "+8%"],
    ["Pending Approvals", "14", "+27%"],
    ["Roles", "28", "+4%"],
];

const roleCards = [
    { icon: Crown, title: "Admin", text: "Full system access and configuration control.", seats: "12 Seats", tag: "Full Access", tone: "blue" as Tone },
    { icon: Users, title: "Manager", text: "Manage team performance and business outcomes.", seats: "28 Seats", tag: "High Access", tone: "green" as Tone },
    { icon: UserCheck, title: "Sales", text: "Own deals, customers, and pipeline execution.", seats: "64 Seats", tag: "Standard Access", tone: "orange" as Tone },
    { icon: Bell, title: "Support", text: "Manage tickets, SLAs, and customer issues.", seats: "18 Seats", tag: "Limited Access", tone: "purple" as Tone },
    { icon: Settings, title: "Operations", text: "Manage workflows, data, and processes.", seats: "16 Seats", tag: "Custom Access", tone: "cyan" as Tone },
    { icon: CircleAlert, title: "Finance", text: "View financials, reports, and budget data.", seats: "9 Seats", tag: "Restricted Access", tone: "orange" as Tone },
];

const users = [
    ["Jane Cooper", "jane.cooper@acme.com", "Sales", "Sales", "Active", "Mike Ross", "Sales Manager"],
    ["Mike Ross", "mike.ross@acme.com", "Sales", "Manager", "Active", "Sarah Lee", "Director of Sales"],
    ["Sarah Lee", "sarah.lee@acme.com", "Sales", "Admin", "Active", "System Admin", "—"],
    ["Alex Morgan", "alex.morgan@acme.com", "Support", "Support", "Active", "Emily Chen", "Support Manager"],
    ["Emily Chen", "emily.chen@acme.com", "Support", "Manager", "Away", "Sarah Lee", "Director of Sales"],
];

const permissionRows = [
    ["Leads", "Capture and manage leads", "Full Access", "Edit", "Edit", "Read", "Read"],
    ["Deals", "Pipeline and deal management", "Full Access", "Edit", "Edit", "No Access", "Read"],
    ["Customers", "Accounts and contacts", "Full Access", "Edit", "Read", "Read", "Edit"],
    ["Support", "Tickets and resolutions", "Full Access", "Read", "No Access", "Edit", "Read"],
    ["Reports", "Dashboards and analytics", "Full Access", "Read", "Read", "Read", "Read"],
    ["Automations", "Workflows and triggers", "Full Access", "Edit", "No Access", "No Access", "Edit"],
];

const approvalTemplates: Feature[] = [
    { icon: TrendingDown, title: "Discount Approval", text: "Approve discount requests above set thresholds.", tone: "green" },
    { icon: Workflow, title: "Deal Approval", text: "Multi-step approval for deals above target value.", tone: "blue" },
    { icon: RefreshCw, title: "Refund Request", text: "Review and approve customer refund requests.", tone: "orange" },
    { icon: FileText, title: "Expense Approval", text: "Validate and approve employee expense claims.", tone: "purple" },
    { icon: UserCheck, title: "User Access Request", text: "Approve new user access and permission changes.", tone: "cyan" },
];

const auditEvents = [
    ["Jane Cooper", "Updated Lead Status", "Leads", "May 26, 2025 10:24 AM", "Low", "Success"],
    ["Mike Ross", "Changed Deal Value", "Deals", "May 26, 2025 9:45 AM", "Medium", "Success"],
    ["Sarah Lee", "Exported Reports", "Reports", "May 26, 2025 8:31 AM", "Medium", "Success"],
    ["Alex Johnson", "Modified Permission Set", "Permissions", "May 25, 2025 6:12 PM", "High", "Success"],
    ["Emily Chen", "Deleted Automation", "Automations", "May 25, 2025 4:08 PM", "High", "Success"],
    ["David Kim", "Logged In", "Authentication", "May 25, 2025 3:22 PM", "Low", "Success"],
    ["Olivia Martinez", "Viewed Customer Data", "Customers", "May 25, 2025 2:14 PM", "Low", "Success"],
    ["Chris Wilson", "Updated Workflow", "Automations", "May 25, 2025 11:03 AM", "Medium", "Success"],
];

const ownershipRules: Feature[] = [
    { icon: Users, title: "Lead Ownership", text: "Assign leads based on territory, source, role, or round-robin rules.", tone: "blue" },
    { icon: CircleAlert, title: "Deal Ownership", text: "Assign deals by account, stage, product, or account manager.", tone: "green" },
    { icon: ShieldCheck, title: "Team Territories", text: "Define territories by region, industry, segment, or account.", tone: "purple" },
    { icon: Route, title: "Sharing Rules", text: "Set visibility and sharing rules across owners and teams.", tone: "orange" },
];

const policyCards: Feature[] = [
    { icon: KeyRound, title: "Login Security", text: "Configure session timeout, password rules, SSO, and MFA requirements.", tone: "blue" },
    { icon: Database, title: "Data Retention", text: "Set retention policies for records, logs, exports, and deleted data.", tone: "green" },
    { icon: Download, title: "Export Controls", text: "Restrict, monitor, and approve exports of sensitive customer data.", tone: "orange" },
    { icon: ShieldAlert, title: "Risk Alerts", text: "Trigger real-time alerts for suspicious access and policy violations.", tone: "red" },
    { icon: EyeOff, title: "Sensitive Fields", text: "Hide, mask, or encrypt fields by role, team, or security policy.", tone: "purple" },
    { icon: Globe2, title: "Geo Access Rules", text: "Control access by region, IP range, territory, or approved locations.", tone: "cyan" },
];

function IconBubble({ icon: Icon, tone = "blue" }: { icon: LucideIcon; tone?: Tone }) {
    return (
        <div className={`grid h-14 w-14 place-items-center rounded-full ${toneClasses[tone]}`}>
            <Icon className="h-6 w-6" aria-hidden="true" />
        </div>
    );
}

function FeatureCard({ icon, title, text, tone = "blue" }: Feature) {
    return (
        <div className="rounded-[22px] border border-[#d7e1f2] bg-white p-6 shadow-[0_16px_44px_rgba(15,23,42,0.05)]">
            <IconBubble icon={icon} tone={tone} />
            <h3 className="mt-4 text-base font-extrabold text-[#0f214f]">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-[#465374]">{text}</p>
        </div>
    );
}

function Shell({ activeTab, onTabChange, children }: { activeTab: TabId; onTabChange: (tab: TabId) => void; children: React.ReactNode }) {
    const active = sidebarItems.find((item) => item.id === activeTab) ?? sidebarItems[0];

    return (
        <main className="min-h-screen bg-[#f8fbff] pt-24 text-[#0f214f] sm:pt-28 lg:pt-32">
            <div className="mx-auto flex max-w-[1600px]">
                <SolutionSidebar<TabId>
                    title="Admin Control Room"
                    subtitle="Governance and access"
                    icon={ShieldCheck}
                    items={sidebarItems}
                    activeTab={activeTab}
                    onTabChange={onTabChange}
                    ctaTitle={active.id === "overview" ? "Take Control of Your Org" : `See ${active.label} in Action`}
                    ctaText={active.description}
                    ctaButtonText="Book a CRM Consultation"
                />
                <div className="min-w-0 flex-1 bg-white">{children}</div>
            </div>
        </main>
    );
}

function PageSection({ children }: { children: React.ReactNode }) {
    return <section className="min-w-0 flex-1 bg-white"><div className="mx-auto max-w-[min(95vw,1600px)] px-4 py-10 sm:px-6 lg:px-8">{children}</div></section>;
}

function Breadcrumb({ current }: { current: string }) {
    return (
        <div className="flex items-center gap-2 text-xs font-bold text-[#1593b5]">
            <Link href="/" className="hover:text-[#145cb7]">Solutions</Link><span>/</span>
            <Link href="/solutions/admin-control-room" className="hover:text-[#145cb7]">Admin Control Room</Link><span>/</span>
            <span className="text-[#0f214f]">{current}</span>
        </div>
    );
}

function HeaderGrid({ current, title, subtitle, features }: { current: string; title: string; subtitle: string; features?: Feature[] }) {
    return (
        <div className="grid gap-8 lg:grid-cols-[1fr_1.05fr] lg:items-start">
            <div>
                <Breadcrumb current={current} />
                <h1 className="mt-5 text-5xl font-extrabold tracking-[-0.045em] text-[#0f214f] sm:text-6xl">{title}</h1>
                <p className="mt-4 max-w-3xl text-base leading-8 text-[#465374]">{subtitle}</p>
            </div>
            {features ? <div className="grid gap-4 md:grid-cols-3">{features.map((feature) => <FeatureCard key={feature.title} {...feature} />)}</div> : null}
        </div>
    );
}

function DiagramNode({ icon: Icon, title, text, tone }: { icon: LucideIcon; title: string; text: string; tone: Tone }) {
    return (
        <div className="relative z-10 flex items-center gap-4 rounded-[20px] border border-[#d7e1f2] bg-white p-4 shadow-[0_14px_40px_rgba(15,23,42,0.06)]">
            <div className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl ${toneClasses[tone]}`}><Icon className="h-5 w-5" aria-hidden="true" /></div>
            <div><p className="text-sm font-extrabold text-[#0f214f]">{title}</p><p className="mt-1 text-xs leading-5 text-[#66728f]">{text}</p></div>
        </div>
    );
}

function AdminSystemDiagram() {
    const left = [
        { icon: Users, title: "Users", text: "Manage team members, access, and status.", tone: "blue" as Tone },
        { icon: UserCog, title: "Roles", text: "Create roles with defined responsibilities.", tone: "green" as Tone },
        { icon: Lock, title: "Permissions", text: "Set granular access at every level.", tone: "purple" as Tone },
    ];
    const right = [
        { icon: FileCheck2, title: "Approvals", text: "Design and enforce approval workflows.", tone: "orange" as Tone },
        { icon: FileText, title: "Audit Logs", text: "Monitor activity and maintain compliance.", tone: "blue" as Tone },
        { icon: Users, title: "Teams", text: "Organize teams and define ownership.", tone: "cyan" as Tone },
    ];
    return (
        <section className="mt-8 rounded-[30px] border border-[#d7e1f2] bg-white p-7 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
            <div className="relative grid gap-7 lg:grid-cols-[1fr_260px_1fr] lg:items-center">
                <svg className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[270px] w-[780px] -translate-x-1/2 -translate-y-1/2 text-[#61c9ee] lg:block" viewBox="0 0 780 270" fill="none" aria-hidden="true">
                    <path d="M125 45 H240 C280 45 280 85 320 85" stroke="currentColor" strokeWidth="2" /><path d="M125 135 H320" stroke="currentColor" strokeWidth="2" /><path d="M125 225 H240 C280 225 280 185 320 185" stroke="currentColor" strokeWidth="2" />
                    <path d="M460 85 C500 85 500 45 540 45 H655" stroke="currentColor" strokeWidth="2" /><path d="M460 135 H655" stroke="currentColor" strokeWidth="2" /><path d="M460 185 C500 185 500 225 540 225 H655" stroke="currentColor" strokeWidth="2" />
                    {[320, 460].map((x) => [85, 135, 185].map((y) => <circle key={`${x}-${y}`} cx={x} cy={y} r="5" fill="currentColor" />))}
                </svg>
                <div className="grid gap-4">{left.map((item) => <DiagramNode key={item.title} {...item} />)}</div>
                <div className="relative mx-auto grid h-[250px] w-[250px] place-items-center rounded-full bg-[#f8fbff]"><div className="absolute inset-2 rounded-full border border-dashed border-[#8ad8ee]" /><div className="absolute inset-8 rounded-full border border-[#b8dcff]" /><div className="grid h-[155px] w-[155px] place-items-center rounded-full bg-gradient-to-br from-[#0f214f] to-[#145cb7] text-white shadow-[0_24px_70px_rgba(20,92,183,0.28)]"><div className="text-center"><Network className="mx-auto h-9 w-9 text-cyan-100" /><p className="mt-2 text-2xl font-extrabold">HNX</p><p className="mt-1 text-xs font-bold text-cyan-100">Admin Control Room</p></div></div></div>
                <div className="grid gap-4">{right.map((item) => <DiagramNode key={item.title} {...item} />)}</div>
            </div>
        </section>
    );
}

function AdminDashboardPreview() {
    return (
        <div className="overflow-hidden rounded-[26px] border border-[#d7e1f2] bg-white shadow-[0_18px_55px_rgba(15,23,42,0.08)]">
            <div className="grid min-h-[370px] grid-cols-[135px_1fr]">
                <aside className="border-r border-[#d7e1f2] bg-[#f8fbff] p-5"><div className="flex items-center gap-2 text-sm font-extrabold text-[#0f214f]"><Network className="h-5 w-5 text-[#1593b5]" />HNX</div><div className="mt-7 space-y-2 text-xs font-bold">{["Overview", "Users", "Roles", "Permissions", "Approvals", "Audit Logs", "Teams", "Settings"].map((item, index) => <div key={item} className={`rounded-xl px-3 py-2 ${index === 0 ? "bg-[#eef6ff] text-[#145cb7]" : "text-[#66728f]"}`}>{item}</div>)}</div></aside>
                <div className="p-5"><div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">{adminStats.map(([label, value, delta]) => <div key={label} className="rounded-2xl border border-[#d7e1f2] bg-white p-4"><p className="text-xs font-bold text-[#66728f]">{label}</p><p className="mt-2 text-2xl font-extrabold text-[#0f214f]">{value}</p><p className="mt-1 text-xs font-bold text-emerald-600">{delta} vs last 7 days</p></div>)}</div>
                    <div className="mt-4 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]"><div className="rounded-2xl border border-[#d7e1f2] p-4"><div className="flex items-center justify-between"><p className="text-sm font-extrabold text-[#0f214f]">Pending Approvals</p><span className="text-xs font-bold text-[#145cb7]">View all</span></div><div className="mt-4 space-y-3">{[["Contract Approval - Acme Corp.", "Submitted by Sarah Lee", "High"], ["Discount Approval - $45,000", "Submitted by Mike Ross", "Medium"], ["Vendor Access Request", "Submitted by Jane Cooper", "Low"]].map(([title, sub, priority]) => <div key={title} className="flex items-center justify-between rounded-xl bg-[#fbfdff] px-3 py-2"><div><p className="text-xs font-extrabold text-[#0f214f]">{title}</p><p className="text-[11px] text-[#66728f]">{sub}</p></div><span className={`rounded-lg px-2 py-1 text-[10px] font-bold ${priority === "High" ? "bg-red-50 text-red-600" : priority === "Medium" ? "bg-orange-50 text-orange-600" : "bg-emerald-50 text-emerald-600"}`}>{priority}</span></div>)}</div></div>
                        <div className="rounded-2xl border border-[#d7e1f2] p-4"><p className="text-sm font-extrabold text-[#0f214f]">Role Assignments</p><div className="mt-5 grid place-items-center"><div className="grid h-28 w-28 place-items-center rounded-full border-[16px] border-[#2378ff] border-r-[#14c8d8] border-b-[#7c3aed] border-l-[#10b981] bg-white"><span className="text-lg font-extrabold text-[#0f214f]">256</span></div></div></div></div>
                    <div className="mt-4 grid gap-4 lg:grid-cols-2"><div className="rounded-2xl border border-[#d7e1f2] p-4"><p className="text-sm font-extrabold text-[#0f214f]">Recent Activity</p><div className="mt-3 flex items-center gap-3 text-xs text-[#465374]"><CheckCircle2 className="h-4 w-4 text-emerald-600" />Mike Ross updated permissions for “Sales Manager”<span className="ml-auto">10m ago</span></div></div><div className="rounded-2xl border border-[#d7e1f2] p-4"><p className="text-sm font-extrabold text-[#0f214f]">Security Alerts</p><div className="mt-3 flex items-center gap-3 text-xs text-[#465374]"><CircleAlert className="h-4 w-4 text-red-500" />3 failed login attempts detected<span className="ml-auto">15m ago</span></div></div></div>
                </div>
            </div>
        </div>
    );
}

function OverviewPage() {
    return <PageSection><HeaderGrid current="Overview" title="Admin Control Room" subtitle="Your command center for users, roles, permissions, approvals, governance, and security. Control who can access what, how approvals flow, and how your organization stays secure and compliant." features={overviewCards} /><AdminSystemDiagram /><div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.15fr]"><section className="rounded-[28px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]"><h2 className="text-2xl font-extrabold text-[#0f214f]">Built for Controlled Growth</h2><div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">{[{ icon: KeyRound, title: "Granular Permissions", text: "Control access down to module, record, field, and action level.", tone: "blue" as Tone }, { icon: Zap, title: "Workflow Automation", text: "Automate approvals based on rules, thresholds, and conditions.", tone: "green" as Tone }, { icon: LineChart, title: "Real-Time Monitoring", text: "Live visibility into logins, changes, and admin activity.", tone: "purple" as Tone }, { icon: ShieldCheck, title: "Policy Enforcement", text: "Apply security policies and prevent unauthorized actions.", tone: "cyan" as Tone }, { icon: Building2, title: "Scalable Governance", text: "Govern access at every stage of your organization’s growth.", tone: "orange" as Tone }, { icon: FileCheck2, title: "Compliance Ready", text: "Built-in audit trails and reporting for regulatory readiness.", tone: "blue" as Tone }].map(item => <FeatureCard key={item.title} {...item} />)}</div></section><section className="rounded-[28px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]"><h2 className="text-2xl font-extrabold text-[#0f214f]">Admin Dashboard Preview</h2><div className="mt-6"><AdminDashboardPreview /></div></section></div><section className="mt-8 rounded-[30px] border border-[#d7e1f2] bg-gradient-to-br from-[#f8fbff] via-white to-[#eefcff] p-8 shadow-[0_18px_50px_rgba(15,23,42,0.05)]"><div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center"><div><p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#1593b5]">VisionCRM Governance Layer</p><h2 className="mt-3 text-3xl font-extrabold tracking-[-0.035em] text-[#0f214f]">Build one system that stays secure as your team grows.</h2><p className="mt-4 max-w-3xl text-base leading-8 text-[#465374]">Admin Control Room gives your CRM the discipline of an enterprise system: controlled access, approval rules, audit visibility, ownership logic, and policy enforcement.</p></div><Button href="/#contact" size="lg" showArrow>Book a CRM Consultation</Button></div></section></PageSection>;
}

function UsersRolesPage() {
    return <PageSection><HeaderGrid current="Users & Roles" title="Users & Roles" subtitle="Assign the right access to the right people. Build a clear role structure, manage user permissions, and ensure every team member has what they need — no more, no less." features={[{ icon: Eye, title: "Admin Visibility", text: "See who has access to what and monitor user activity in real time.", tone: "blue" }, { icon: ShieldCheck, title: "Controlled Access", text: "Granular role permissions protect your data and critical workflows.", tone: "green" }, { icon: Users, title: "Team Accountability", text: "Clear ownership and audit trails keep teams aligned and responsible.", tone: "purple" }]} /><section className="mt-8 rounded-[30px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]"><div className="flex flex-wrap items-center justify-between gap-4"><h2 className="text-2xl font-extrabold text-[#0f214f]">Role System Overview</h2><button className="inline-flex items-center gap-2 rounded-xl border border-[#d7e1f2] px-4 py-2 text-xs font-extrabold text-[#145cb7]"><Plus className="h-4 w-4" />Create New Role</button></div><div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-6">{roleCards.map(role => { const Icon = role.icon; return <div key={role.title} className="rounded-[22px] border border-[#d7e1f2] bg-white p-5 text-center shadow-sm"><IconBubble icon={Icon} tone={role.tone} /><h3 className="mt-4 text-lg font-extrabold text-[#0f214f]">{role.title}</h3><p className="mt-2 min-h-[48px] text-xs leading-5 text-[#465374]">{role.text}</p><p className="mt-3 text-xs font-bold text-[#66728f]">{role.seats}</p><span className={`mt-4 inline-flex rounded-lg px-3 py-1 text-xs font-bold ${toneClasses[role.tone]}`}>{role.tag}</span></div> })}</div></section><div className="mt-8 grid gap-6 xl:grid-cols-[1.25fr_0.75fr]"><UserDirectory /><RoleSummary /></div><WhyMatters /></PageSection>;
}

function UserDirectory() { return <section className="rounded-[28px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]"><div className="flex flex-wrap items-center justify-between gap-4"><h2 className="text-xl font-extrabold text-[#0f214f]">User Directory & Assignment</h2><div className="flex flex-wrap gap-2">{["Search users by name, email, or role...", "All Departments", "All Roles", "All Status"].map(item => <button key={item} className="rounded-xl border border-[#d7e1f2] px-3 py-2 text-xs font-bold text-[#66728f]">{item}</button>)}</div></div><div className="mt-5 overflow-x-auto"><table className="w-full min-w-[820px] text-left text-sm"><thead><tr className="text-xs text-[#66728f]">{["User", "Department", "Role", "Status", "Reports To", ""].map(head => <th key={head} className="border-b border-[#d7e1f2] px-4 py-3 font-extrabold">{head}</th>)}</tr></thead><tbody>{users.map(user => <tr key={user[1]} className="border-b border-[#edf2f7]"><td className="px-4 py-4"><div className="flex items-center gap-3"><div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-[#19b7c5] to-[#145cb7] text-xs font-extrabold text-white">{user[0].split(" ").map(part => part[0]).join("")}</div><div><p className="font-bold text-[#0f214f]">{user[0]}</p><p className="text-xs text-[#66728f]">{user[1]}</p></div></div></td><td className="px-4 py-4 text-[#334766]">{user[2]}</td><td className="px-4 py-4"><span className={`rounded-lg px-2 py-1 text-xs font-bold ${user[3] === "Admin" ? "bg-[#eef6ff] text-[#145cb7]" : user[3] === "Manager" ? "bg-emerald-50 text-emerald-600" : user[3] === "Support" ? "bg-purple-50 text-purple-600" : "bg-orange-50 text-orange-600"}`}>{user[3]}</span></td><td className="px-4 py-4"><span className={`rounded-lg px-2 py-1 text-xs font-bold ${user[4] === "Active" ? "bg-emerald-50 text-emerald-600" : "bg-orange-50 text-orange-600"}`}>● {user[4]}</span></td><td className="px-4 py-4 text-[#334766]"><p className="font-semibold">{user[5]}</p><p className="text-xs text-[#66728f]">{user[6]}</p></td><td className="px-4 py-4 text-right text-[#145cb7]">•••</td></tr>)}</tbody></table></div><Link href="/#contact" className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-[#145cb7]">View all users <ArrowRight className="h-4 w-4" /></Link></section> }
function RoleSummary() { return <section className="rounded-[28px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]"><h2 className="text-xl font-extrabold text-[#0f214f]">Role Summary</h2><div className="mt-7 grid place-items-center"><div className="grid h-44 w-44 place-items-center rounded-full border-[28px] border-[#2378ff] border-r-[#22c55e] border-b-[#f97316] border-l-[#8b5cf6] bg-white"><div className="text-center"><p className="text-xs font-bold text-[#66728f]">Total Users</p><p className="text-3xl font-extrabold text-[#0f214f]">147</p></div></div></div><div className="mt-7 space-y-3 text-sm font-semibold text-[#334766]">{["Admin 12 (8%)", "Manager 28 (19%)", "Sales 64 (44%)", "Support 18 (12%)", "Operations 16 (11%)", "Finance 9 (6%)"].map(item => <div key={item} className="flex justify-between"><span>{item.replace(/\s\(.*/, "")}</span><span>{item.match(/\(.+\)/)?.[0]}</span></div>)}</div><div className="mt-7 rounded-2xl border border-[#d7e1f2] bg-[#fbfdff] p-5"><p className="text-xs font-bold text-[#66728f]">Most assigned role</p><p className="mt-2 text-2xl font-extrabold text-[#145cb7]">Sales</p><p className="mt-1 text-sm font-semibold text-[#465374]">64 users (44% of total)</p></div></section> }
function WhyMatters() { return <section className="mt-8 rounded-[28px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]"><h2 className="text-xl font-extrabold text-[#0f214f]">Why this matters</h2><div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-5">{[{ icon: ShieldCheck, title: "Protect Sensitive Data", text: "Only authorized users see critical information.", tone: "blue" as Tone }, { icon: Users, title: "Improve Productivity", text: "Users get the right tools and data to do their best work.", tone: "cyan" as Tone }, { icon: CheckCircle2, title: "Reduce Risk", text: "Minimize errors and exposure with least-privilege access.", tone: "green" as Tone }, { icon: FileText, title: "Ensure Compliance", text: "Maintain audit-ready records of access and changes.", tone: "purple" as Tone }, { icon: TrendingUp, title: "Scale with Confidence", text: "Onboard new teams without security concerns.", tone: "orange" as Tone }].map(item => <FeatureCard key={item.title} {...item} />)}</div></section> }

function PermissionPill({ value }: { value: string }) { const cls = value === "Full Access" ? "bg-emerald-50 text-emerald-600" : value === "Edit" ? "bg-[#eef6ff] text-[#145cb7]" : value === "Read" ? "bg-[#f8fbff] text-[#145cb7]" : "bg-slate-50 text-slate-500"; const Icon = value === "Full Access" ? CheckCircle2 : value === "Edit" ? Pencil : value === "Read" ? Eye : Lock; return <span className={`inline-flex items-center gap-1 rounded-lg px-3 py-1 text-xs font-bold ${cls}`}><Icon className="h-3.5 w-3.5" />{value}</span> }

function PermissionsMatrixPage() { const cols = [{ label: "Admin", icon: Crown, sub: "Full Access", tone: "blue" as Tone }, { label: "Manager", icon: Users, sub: "High Access", tone: "green" as Tone }, { label: "Sales", icon: UserCheck, sub: "Standard Access", tone: "orange" as Tone }, { label: "Support", icon: Bell, sub: "Limited Access", tone: "purple" as Tone }, { label: "Operations", icon: Settings, sub: "Custom Access", tone: "cyan" as Tone }]; return <PageSection><HeaderGrid current="Permissions Matrix" title="Permissions Matrix" subtitle="Define who can see, edit, approve, delete, export, and manage every part of your system. Control access at module, field, record, action, and data level." features={[{ icon: ShieldCheck, title: "Granular Control", text: "Set exact permissions for modules, fields, and sensitive data.", tone: "blue" }, { icon: Lock, title: "Module Security", text: "Manage access across the platform with role-based controls.", tone: "green" }, { icon: SlidersHorizontal, title: "Field-Level Rules", text: "Apply rules to individual fields and data attributes.", tone: "purple" }]} /><div className="mt-8 grid gap-6 xl:grid-cols-[1fr_250px]"><section className="rounded-[28px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]"><h2 className="text-xl font-extrabold text-[#0f214f]">Permissions Matrix</h2><div className="mt-5 overflow-x-auto"><table className="w-full min-w-[950px] text-left text-sm"><thead><tr><th className="border-b border-[#d7e1f2] px-4 py-4 text-xs font-extrabold text-[#66728f]">Module</th>{cols.map(col => { const Icon = col.icon; return <th key={col.label} className="border-b border-[#d7e1f2] px-4 py-4"><div className="flex items-center gap-3"><div className={`grid h-10 w-10 place-items-center rounded-xl ${toneClasses[col.tone]}`}><Icon className="h-4 w-4" /></div><div><p className="text-sm font-extrabold text-[#0f214f]">{col.label}</p><p className="text-xs text-[#66728f]">{col.sub}</p></div></div></th> })}<th className="border-b border-[#d7e1f2] px-4 py-4" /></tr></thead><tbody>{permissionRows.map(row => <tr key={row[0]} className="border-b border-[#edf2f7]"><td className="px-4 py-4"><div className="flex items-center gap-3"><div className="grid h-10 w-10 place-items-center rounded-xl bg-[#eef6ff] text-[#145cb7]"><Database className="h-4 w-4" /></div><div><p className="font-extrabold text-[#0f214f]">{row[0]}</p><p className="text-xs text-[#66728f]">{row[1]}</p></div></div></td>{row.slice(2).map((value, index) => <td key={`${row[0]}-${index}`} className="px-4 py-4"><PermissionPill value={value} /></td>)}<td className="px-4 py-4 text-[#145cb7]">•••</td></tr>)}</tbody></table></div></section><PermissionRules /></div><MatrixBottom /></PageSection> }
function PermissionRules() { return <section className="rounded-[28px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]"><h2 className="text-lg font-extrabold text-[#0f214f]">Permission Rules</h2><p className="mt-2 text-xs leading-5 text-[#66728f]">These rules define how access is applied across the system.</p><div className="mt-6 space-y-5">{[{ icon: Eye, title: "Read", text: "View records and basic details.", tone: "blue" as Tone }, { icon: Pencil, title: "Edit", text: "Create and update records.", tone: "blue" as Tone }, { icon: Trash2, title: "Delete", text: "Remove records permanently.", tone: "red" as Tone }, { icon: CheckCircle2, title: "Approve", text: "Approve workflows and data.", tone: "green" as Tone }, { icon: Download, title: "Export", text: "Export reports and data.", tone: "purple" as Tone }, { icon: ShieldAlert, title: "Sensitive Data", text: "Access to sensitive fields.", tone: "red" as Tone }].map((item) => { const Icon = item.icon; return <div key={item.title} className="flex gap-3"><div className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${toneClasses[item.tone]}`}><Icon className="h-5 w-5" /></div><div><p className="text-sm font-extrabold text-[#0f214f]">{item.title}</p><p className="mt-1 text-xs leading-5 text-[#66728f]">{item.text}</p></div></div> })}</div></section> }
function MatrixBottom() { return <div className="mt-8 grid gap-6 xl:grid-cols-3">{[{ title: "Visibility by Team", text: "Control what each team can see across modules and data sets.", icon: Users }, { title: "Restriction by Territory", text: "Apply territory-based rules to restrict access to regional data.", icon: MapPin }, { title: "Data Governance", text: "Maintain compliance and protect sensitive business information.", icon: ShieldCheck }].map((card, index) => <section key={card.title} className="rounded-[26px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]"><h3 className="text-lg font-extrabold text-[#0f214f]">{card.title}</h3><p className="mt-2 text-sm leading-6 text-[#465374]">{card.text}</p><div className="mt-6 grid place-items-center"><IconBubble icon={card.icon} tone={index === 0 ? "blue" : index === 1 ? "green" : "purple"} /></div><div className="mt-6 space-y-3">{["Field-level controls", "Audit-ready history", "Real-time alerts"].map(item => <div key={item} className="flex gap-3 text-sm font-semibold text-[#334766]"><CheckCircle2 className="h-5 w-5 text-emerald-600" />{item}</div>)}</div></section>)}</div> }

function ApprovalWorkflowsPage() { const steps = [{ icon: FileText, title: "1. Request Submitted", text: "Initiated by requester", tag: "Auto Capture", tone: "blue" as Tone }, { icon: Users, title: "2. Manager Review", text: "Review and validate request details", tag: "Pending", tone: "green" as Tone }, { icon: CircleAlert, title: "3. Finance Check", text: "Verify budget and financial impact", tag: "Pending", tone: "orange" as Tone }, { icon: ShieldCheck, title: "4. Final Approval", text: "Final sign-off by approver", tag: "Pending", tone: "purple" as Tone }, { icon: Bell, title: "5. Notifications", text: "Notify stakeholders and update records", tag: "Auto Notify", tone: "cyan" as Tone }]; return <PageSection><HeaderGrid current="Approval Workflows" title="Approval Workflows" subtitle="Keep critical actions in check with multi-step approval workflows. Ensure the right people review, approve, and track every important decision." features={[{ icon: Users, title: "Clear Accountability", text: "Define who approves what and maintain complete visibility.", tone: "blue" }, { icon: Zap, title: "Faster Decisions", text: "Streamline approvals with automated routing and smart conditions.", tone: "green" }, { icon: ShieldCheck, title: "Compliance Ready", text: "Built-in controls, audit trails, and policies keep you compliant.", tone: "purple" }]} /><div className="mt-8 grid gap-6 xl:grid-cols-[310px_1fr]"><aside className="rounded-[28px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]"><h2 className="text-xl font-extrabold text-[#0f214f]">Popular Approval Templates</h2><p className="mt-2 text-sm text-[#66728f]">Kickstart with proven workflows.</p><div className="mt-5 space-y-4">{approvalTemplates.map(template => { const Icon = template.icon; return <button key={template.title} className="flex w-full items-center gap-4 rounded-2xl border border-[#d7e1f2] bg-white p-4 text-left transition hover:bg-[#fbfdff]"><div className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl ${toneClasses[template.tone ?? "blue"]}`}><Icon className="h-5 w-5" /></div><div className="flex-1"><p className="text-sm font-extrabold text-[#0f214f]">{template.title}</p><p className="mt-1 text-xs leading-5 text-[#66728f]">{template.text}</p></div><ArrowRight className="h-4 w-4 text-[#145cb7]" /></button> })}</div></aside><section className="rounded-[28px] border border-[#d7e1f2] bg-white shadow-[0_18px_55px_rgba(15,23,42,0.05)]"><div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#d7e1f2] p-6"><div><h2 className="text-xl font-extrabold text-[#0f214f]">Workflow Builder</h2><p className="mt-1 text-sm text-[#66728f]">Design, customize, and automate your approval process.</p></div><button className="inline-flex items-center gap-2 rounded-xl border border-[#d7e1f2] px-4 py-2 text-xs font-extrabold text-[#145cb7]">New Workflow <Plus className="h-4 w-4" /></button></div><div className="p-7"><div className="grid gap-5 xl:grid-cols-5">{steps.map((step, index) => { const Icon = step.icon; return <div key={step.title} className="relative rounded-[22px] border border-[#d7e1f2] bg-white p-5 text-center shadow-sm">{index > 0 ? <div className="absolute -left-5 top-1/2 hidden h-px w-5 bg-[#145cb7] xl:block" /> : null}<IconBubble icon={Icon} tone={step.tone} /><p className="mt-4 text-sm font-extrabold text-[#0f214f]">{step.title}</p><p className="mt-2 min-h-[42px] text-xs leading-5 text-[#66728f]">{step.text}</p><span className={`mt-4 inline-flex rounded-lg px-3 py-1 text-xs font-bold ${toneClasses[step.tone]}`}>{step.tag}</span></div> })}</div><div className="mt-8 grid gap-5 lg:grid-cols-[1fr_1.4fr]"><div className="rounded-[20px] border border-red-100 bg-red-50 p-5"><p className="text-sm font-extrabold text-red-700">Request Changes</p><p className="mt-1 text-xs leading-5 text-red-700/80">Returned to requester for updates when key details are missing.</p></div><div className="rounded-[20px] border border-emerald-100 bg-emerald-50 p-5"><p className="text-sm font-extrabold text-emerald-700">Approved Flow</p><p className="mt-2 text-xs leading-5 text-emerald-700/80">When every rule passes, the system updates records, sends notifications, and logs the full approval trail.</p></div></div></div></section></div><section className="mt-8 rounded-[28px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]"><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">{[{ icon: FileCheck2, title: "Audit Trail", text: "Every action is logged with who, what, when, and why.", tone: "blue" as Tone }, { icon: Filter, title: "Smart Conditions", text: "Route approvals based on rules, amounts, roles, or data.", tone: "green" as Tone }, { icon: Users, title: "Escalation Rules", text: "Automatically escalate delays and ensure nothing gets stuck.", tone: "orange" as Tone }, { icon: Bell, title: "Real-Time Alerts", text: "Instant notifications keep everyone informed and on track.", tone: "purple" as Tone }].map(item => <FeatureCard key={item.title} {...item} />)}</div></section></PageSection> }

function SeverityBadge({ value }: { value: string }) { const cls = value === "High" ? "bg-red-50 text-red-600" : value === "Medium" ? "bg-orange-50 text-orange-600" : "bg-emerald-50 text-emerald-600"; return <span className={`rounded-lg px-2 py-1 text-xs font-bold ${cls}`}>{value}</span> }
function AuditLogsPage() { return <PageSection><div className="flex flex-wrap items-start justify-between gap-5"><div><Breadcrumb current="Audit Logs" /><h1 className="mt-5 text-5xl font-extrabold tracking-[-0.045em] text-[#0f214f] sm:text-6xl">Audit Logs</h1><p className="mt-4 max-w-3xl text-base leading-8 text-[#465374]">Full visibility into who changed what, when, and why. Maintain trust, ensure compliance, and stay audit-ready with a complete activity trail.</p></div><button className="inline-flex items-center gap-2 rounded-xl border border-[#d7e1f2] px-4 py-3 text-sm font-extrabold text-[#145cb7]"><Download className="h-4 w-4" />Export Logs</button></div><div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">{[{ icon: ShieldAlert, title: "Critical Events", value: "12", delta: "+20%", tone: "red" as Tone }, { icon: SlidersHorizontal, title: "Policy Changes", value: "28", delta: "+15%", tone: "purple" as Tone }, { icon: FileCheck2, title: "Exported Logs", value: "16", delta: "-8%", tone: "blue" as Tone }, { icon: TimerReset, title: "Security Alerts", value: "7", delta: "-12%", tone: "orange" as Tone }].map(item => <div key={item.title} className="rounded-[22px] border border-[#d7e1f2] bg-white p-6 shadow-[0_16px_44px_rgba(15,23,42,0.05)]"><div className="flex items-center gap-4"><IconBubble icon={item.icon} tone={item.tone} /><div><p className="text-sm font-extrabold text-[#0f214f]">{item.title}</p><p className="mt-1 text-3xl font-extrabold text-[#0f214f]">{item.value}</p><p className={`text-xs font-bold ${item.delta.startsWith("-") ? "text-red-500" : "text-emerald-600"}`}>{item.delta} vs last 7 days</p></div></div></div>)}</div><div className="mt-8 grid gap-6 xl:grid-cols-[1fr_360px]"><AuditTable /><SecurityEvents /></div><AuditBottom /></PageSection> }
function AuditTable() { return <section className="rounded-[28px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]"><h2 className="text-xl font-extrabold text-[#0f214f]">Audit Activity</h2><p className="mt-2 text-sm text-[#66728f]">Track all system activity across users, modules, and actions.</p><div className="mt-5 flex flex-wrap gap-3">{["May 20 – May 26, 2025", "All Modules", "All Users", "All Severity", "Search by user, action, or details..."].map(filter => <button key={filter} className="rounded-xl border border-[#d7e1f2] bg-white px-4 py-2 text-xs font-bold text-[#66728f]">{filter}</button>)}</div><div className="mt-5 overflow-x-auto"><table className="w-full min-w-[850px] text-left text-sm"><thead><tr className="text-xs text-[#66728f]">{["User", "Action", "Module", "Timestamp", "Severity", "Status"].map(head => <th key={head} className="border-b border-[#d7e1f2] px-4 py-3 font-extrabold">{head}</th>)}</tr></thead><tbody>{auditEvents.map(row => <tr key={`${row[0]}-${row[1]}`} className="border-b border-[#edf2f7]"><td className="px-4 py-3"><div className="flex items-center gap-3"><div className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-[#19b7c5] to-[#145cb7] text-[10px] font-extrabold text-white">{row[0].split(" ").map(part => part[0]).join("")}</div><span className="font-bold text-[#0f214f]">{row[0]}</span></div></td><td className="px-4 py-3 text-[#334766]">{row[1]}</td><td className="px-4 py-3 text-[#334766]">{row[2]}</td><td className="px-4 py-3 text-[#66728f]">{row[3]}</td><td className="px-4 py-3"><SeverityBadge value={row[4]} /></td><td className="px-4 py-3"><span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600"><CheckCircle2 className="h-3.5 w-3.5" />{row[5]}</span></td></tr>)}</tbody></table></div></section> }
function SecurityEvents() { return <aside className="space-y-6"><section className="rounded-[28px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]"><h2 className="text-xl font-extrabold text-[#0f214f]">Recent Security Events</h2><div className="mt-6 space-y-5">{[{ icon: ShieldAlert, title: "Failed Login Attempt", text: "Multiple failed login attempts detected.", time: "10:32 AM", tone: "red" as Tone }, { icon: CircleAlert, title: "Permission Escalation", text: "Admin role granted by Alex Johnson.", time: "9:15 AM", tone: "orange" as Tone }, { icon: Download, title: "Sensitive Data Exported", text: "Customer list exported by Sarah Lee.", time: "8:31 AM", tone: "purple" as Tone }, { icon: FileText, title: "Policy Change", text: "Data retention policy updated.", time: "Yesterday", tone: "blue" as Tone }].map(event => <div key={event.title} className="flex gap-4"><IconBubble icon={event.icon} tone={event.tone} /><div className="flex-1"><div className="flex justify-between gap-3"><p className="text-sm font-extrabold text-[#0f214f]">{event.title}</p><span className="text-xs text-[#66728f]">{event.time}</span></div><p className="mt-1 text-xs leading-5 text-[#66728f]">{event.text}</p></div></div>)}</div></section><section className="rounded-[28px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]"><h2 className="text-xl font-extrabold text-[#0f214f]">Audit Health</h2><div className="mt-6 space-y-4">{["Log Integrity 100%", "Log Ingestion 98%", "Retention Compliance 100%"].map(item => <div key={item} className="flex items-center justify-between text-sm font-bold text-[#334766]"><span>{item.replace(/\s\d+%/, "")}</span><span className="text-emerald-600">{item.match(/\d+%/)?.[0]} ✓</span></div>)}</div></section></aside> }
function AuditBottom() { return <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">{[{ icon: Users, title: "Access History", text: "See who accessed what, and when. Complete access visibility.", tone: "blue" as Tone }, { icon: FileText, title: "Record Changes", text: "Track field-level changes and compare record versions.", tone: "green" as Tone }, { icon: Lock, title: "Login Events", text: "Monitor logins, locations, and device activity.", tone: "purple" as Tone }, { icon: Download, title: "Export Trail", text: "Review all data exports and download history.", tone: "blue" as Tone }].map(item => <FeatureCard key={item.title} {...item} />)}</div> }

function TeamOwnershipPage() { return <PageSection><HeaderGrid current="Team Ownership" title="Team Ownership" subtitle="Define who owns what, where, and why. Design territories, apply ownership rules, and prevent overlap so every record has a clear owner." features={[{ icon: Users, title: "Clear Ownership", text: "Every lead, deal, customer, and task has one accountable owner.", tone: "blue" }, { icon: MapPin, title: "Territory Logic", text: "Configure smart territories and rules that reflect your business.", tone: "green" }, { icon: ShieldCheck, title: "No Overlap", text: "Prevent duplicate ownership and routing conflicts.", tone: "purple" }]} /><div className="mt-8 grid gap-6 xl:grid-cols-[0.95fr_1.45fr]"><section className="rounded-[28px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]"><p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#1593b5]">1. Structured Ownership</p><h2 className="mt-3 text-2xl font-extrabold text-[#0f214f]">Build a strong foundation of ownership.</h2><div className="mt-6 space-y-4">{["Define territories by region, role, segment, or product line", "Map ownership rules for leads, deals, accounts, and tasks", "Auto-assign based on rules, capacity, and territory", "Prevent overlaps and ensure complete coverage", "Enable flexibility with sharing and handoff logic", "Maintain accountability with audit trails and history"].map(item => <div key={item} className="flex gap-3 text-sm font-semibold text-[#334766]"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#1593b5]" />{item}</div>)}</div></section><OwnershipDiagram /></div><section className="mt-8 rounded-[28px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]"><h2 className="text-xl font-extrabold text-[#0f214f]">Ownership Rules</h2><div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">{ownershipRules.map(item => <FeatureCard key={item.title} {...item} />)}</div></section><section className="mt-8 rounded-[28px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]"><h2 className="text-xl font-extrabold text-[#0f214f]">Built for Better Accountability</h2><div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-5">{[{ icon: Users, title: "Stronger Accountability", text: "Everyone owns their work.", tone: "blue" as Tone }, { icon: Gauge, title: "Balanced Workload", text: "Distribute fairly across teams.", tone: "green" as Tone }, { icon: Star, title: "Better Customer Experience", text: "Faster handoffs. Fewer delays.", tone: "purple" as Tone }, { icon: Eye, title: "Operational Clarity", text: "Know who owns what — always.", tone: "blue" as Tone }, { icon: TrendingUp, title: "Scalable & Flexible", text: "Grows with your business.", tone: "green" as Tone }].map(item => <FeatureCard key={item.title} {...item} />)}</div></section></PageSection> }
function OwnershipDiagram() { return <section className="rounded-[28px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]"><div className="grid gap-7 lg:grid-cols-[1fr_210px_1fr] lg:items-center"><div><p className="text-center text-sm font-extrabold text-[#0f214f]">What Gets Owned</p><div className="mt-5 grid gap-4">{[{ icon: Users, title: "Leads", tone: "blue" as Tone }, { icon: CircleAlert, title: "Deals", tone: "green" as Tone }, { icon: BarChart3, title: "Customers", tone: "purple" as Tone }, { icon: FileCheck2, title: "Tasks", tone: "orange" as Tone }].map(item => <DiagramNode key={item.title} icon={item.icon} title={item.title} text="Ownership rules apply automatically." tone={item.tone} />)}</div></div><div className="relative mx-auto grid h-[210px] w-[210px] place-items-center rounded-full bg-[#f8fbff]"><div className="absolute inset-2 rounded-full border border-dashed border-[#8ad8ee]" /><div className="grid h-[130px] w-[130px] place-items-center rounded-full bg-gradient-to-br from-[#0f214f] to-[#145cb7] text-white shadow-[0_24px_70px_rgba(20,92,183,0.28)]"><div className="text-center"><Network className="mx-auto h-8 w-8 text-cyan-100" /><p className="mt-2 text-xl font-extrabold">HNX</p><p className="text-[11px] font-bold text-cyan-100">Ownership Engine</p></div></div></div><div><p className="text-center text-sm font-extrabold text-[#0f214f]">Owned By</p><div className="mt-5 grid gap-4"><DiagramNode icon={UserCheck} title="Owners" text="Individuals accountable for results." tone="green" /><DiagramNode icon={Users} title="Teams" text="Teams responsible within territories." tone="blue" /></div></div></div></section> }

function SecurityPoliciesPage() {
    return <PageSection><HeaderGrid current="Security Policies" title="Security Policies" subtitle="Define the rules that keep your CRM secure, compliant, and protected. Control login security, sensitive data, exports, sessions, retention, and risk alerts from one place." features={[{ icon: KeyRound, title: "Login Protection", text: "MFA, SSO, password rules, and session controls.", tone: "blue" }, { icon: ShieldCheck, title: "Data Protection", text: "Sensitive fields, encryption, masking, and export rules.", tone: "green" }, { icon: ShieldAlert, title: "Risk Monitoring", text: "Real-time alerts for suspicious activity and policy violations.", tone: "red" }]} /><div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{policyCards.map(item => <FeatureCard key={item.title} {...item} />)}</div><div className="mt-8 grid gap-6 xl:grid-cols-[1fr_0.95fr]"><section className="rounded-[28px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]"><h2 className="text-xl font-extrabold text-[#0f214f]">Policy Configuration</h2><div className="mt-6 space-y-5">{[
        { title: "Require MFA for Admins", text: "Admins must verify identity using multi-factor authentication.", active: true },
        { title: "Session Timeout", text: "Automatically sign users out after 30 minutes of inactivity.", active: true },
        { title: "Block Unknown Locations", text: "Require approval when users sign in from unusual locations.", active: true },
        { title: "Sensitive Field Masking", text: "Mask phone, financial, and confidential data based on role.", active: true },
        { title: "Export Approval Required", text: "Require manager approval for high-volume data exports.", active: false },
    ].map((policy) => <div key={policy.title} className="flex items-center justify-between gap-4 rounded-2xl border border-[#d7e1f2] bg-[#fbfdff] p-5"><div><p className="font-extrabold text-[#0f214f]">{policy.title}</p><p className="mt-1 text-sm leading-6 text-[#66728f]">{policy.text}</p></div><span className={`shrink-0 rounded-full px-3 py-1 text-xs font-bold ${policy.active ? "bg-emerald-50 text-emerald-600" : "bg-slate-100 text-slate-600"}`}>{policy.active ? "Active" : "Draft"}</span></div>)}</div></section><SecurityHealth /></div></PageSection>
}
function SecurityHealth() { return <section className="rounded-[28px] border border-[#d7e1f2] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]"><h2 className="text-xl font-extrabold text-[#0f214f]">Security Health</h2><p className="mt-2 text-sm text-[#66728f]">A live view of your governance posture.</p><div className="mt-7 grid place-items-center"><div className="grid h-48 w-48 place-items-center rounded-full border-[28px] border-emerald-500 border-r-[#14c8d8] border-b-[#2378ff] bg-white"><div className="text-center"><p className="text-4xl font-extrabold text-[#0f214f]">94</p><p className="text-xs font-bold text-emerald-600">Excellent</p></div></div></div><div className="mt-8 space-y-4">{[["MFA Coverage", "96%"], ["Policy Compliance", "92%"], ["Sensitive Data Protection", "98%"], ["Audit Coverage", "100%"]].map(([label, value]) => <div key={label}><div className="flex justify-between text-sm font-bold text-[#334766]"><span>{label}</span><span>{value}</span></div><div className="mt-2 h-2 rounded-full bg-[#eef2f7]"><div className="h-full rounded-full bg-[#1593b5]" style={{ width: value }} /></div></div>)}</div></section> }

function FinalCtaPage() { return <PageSection><div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center"><div><Breadcrumb current="Final CTA" /><h1 className="mt-6 text-5xl font-extrabold tracking-[-0.045em] text-[#0f214f] sm:text-6xl">Ready to Control Your Business with Confidence?</h1><p className="mt-5 max-w-2xl text-base leading-8 text-[#465374]">Admin Control Room gives your VisionCRM system enterprise-grade governance: role-based access, approval rules, audit trails, ownership logic, and policy enforcement — all built around your business.</p><div className="mt-7 flex flex-wrap gap-4"><Button href="/#contact" size="lg" showArrow>Book a CRM Consultation</Button><Button href="/crm-demo" variant="secondary" size="lg" showArrow>See Demo</Button></div></div><div className="relative mx-auto grid h-[380px] w-full max-w-[560px] place-items-center"><div className="absolute h-[300px] w-[300px] rounded-full border border-dashed border-[#8ad8ee]" /><div className="absolute h-[220px] w-[220px] rounded-full border border-[#b8dcff]" /><div className="grid h-[160px] w-[160px] place-items-center rounded-full bg-gradient-to-br from-[#0f214f] to-[#145cb7] text-white shadow-[0_24px_70px_rgba(20,92,183,0.28)]"><div className="text-center"><Network className="mx-auto h-9 w-9 text-cyan-100" /><p className="mt-2 text-2xl font-extrabold">HNX</p><p className="text-[11px] font-bold text-cyan-100">Admin Control</p></div></div>{[{ label: "Users", icon: Users, pos: "left-0 top-5" }, { label: "Roles", icon: UserCog, pos: "left-[-20px] top-32" }, { label: "Policies", icon: ShieldCheck, pos: "left-5 bottom-16" }, { label: "Approvals", icon: Workflow, pos: "right-0 top-5" }, { label: "Audit Logs", icon: History, pos: "right-[-30px] top-32" }, { label: "Security", icon: Lock, pos: "right-6 bottom-16" }].map(item => { const Icon = item.icon; return <div key={item.label} className={`absolute ${item.pos} flex items-center gap-3 rounded-2xl border border-[#d7e1f2] bg-white px-5 py-3 shadow-[0_16px_44px_rgba(15,23,42,0.07)]`}><Icon className="h-5 w-5 text-[#145cb7]" /><span className="text-sm font-extrabold text-[#0f214f]">{item.label}</span></div> })}</div></div><section className="mt-8 rounded-[30px] bg-gradient-to-r from-[#0f214f] via-[#145cb7] to-[#19b7c5] p-8 text-white shadow-[0_28px_80px_rgba(15,33,79,0.24)]"><div className="flex flex-wrap items-center justify-between gap-6"><div><h2 className="text-3xl font-extrabold">Your CRM Should Be Powerful — and Controlled.</h2><p className="mt-2 max-w-xl text-sm leading-7 text-cyan-50">Let’s build a governance layer that keeps your team fast, secure, accountable, and ready to scale.</p></div><Button href="/#contact" variant="secondary" size="lg" showArrow>Book a CRM Consultation</Button></div></section></PageSection> }

export default function AdminControlRoomPage() {
    const [activeTab, setActiveTab] = useState<TabId>("overview");
    const renderActiveTab = () => {
        switch (activeTab) {
            case "overview": return <OverviewPage />;
            case "users-roles": return <UsersRolesPage />;
            case "permissions-matrix": return <PermissionsMatrixPage />;
            case "approval-workflows": return <ApprovalWorkflowsPage />;
            case "audit-logs": return <AuditLogsPage />;
            case "team-ownership": return <TeamOwnershipPage />;
            case "security-policies": return <SecurityPoliciesPage />;
            case "final-cta": return <FinalCtaPage />;
            default: return <OverviewPage />;
        }
    };
    return <Shell activeTab={activeTab} onTabChange={setActiveTab}>{renderActiveTab()}</Shell>;
}
