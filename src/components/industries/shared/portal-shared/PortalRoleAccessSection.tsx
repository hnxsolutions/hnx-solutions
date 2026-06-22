import {
  Building2,
  CalendarCheck,
  Check,
  CreditCard,
  Eye,
  FileText,
  GaugeCircle,
  Info,
  LockKeyhole,
  MessageSquareText,
  ShieldCheck,
  UserRound,
  UsersRound,
  X,
} from "lucide-react";
import { PortalReveal } from "./PortalMotion";
import { cn } from "./portalSectionUtils";
import type { IndustryPortalPageData } from "./portalTypes";

const roleTabs = [
  { label: "Patient / Customer", icon: UserRound },
  { label: "Staff / Team", icon: UsersRound },
  { label: "Manager / Admin", icon: ShieldCheck },
  { label: "Partner / Vendor", icon: Building2 },
];

const benefitRows = [
  {
    title: "Right Access, Right People",
    description: "Assign role-specific permissions so users only see and do what is relevant to their role.",
    icon: UsersRound,
  },
  {
    title: "Data Security by Design",
    description: "Protect sensitive patient data with least-privilege access and built-in security controls.",
    icon: ShieldCheck,
  },
  {
    title: "Full Visibility & Control",
    description: "Track activity, review permissions, and make confident access decisions.",
    icon: Eye,
  },
];

const permissionRows = [
  { area: "Appointments", description: "Manage and view appointments", icon: CalendarCheck, values: [true, true, true, true, false] },
  { area: "Health Records", description: "Access medical history and test results", icon: FileText, values: [true, false, false, false, true] },
  { area: "Billing & Payments", description: "View invoices and manage payments", icon: CreditCard, values: [true, true, false, false, true] },
  { area: "Communication", description: "Send messages and receive updates", icon: MessageSquareText, values: [true, true, false, false, false] },
  { area: "Account", description: "Manage profile and account settings", icon: UserRound, values: [true, false, true, false, false] },
];

const permissionColumns = ["View", "Create", "Edit", "Delete", "Export"];

const accessStats = [
  { value: "12", label: "Permissions Granted", icon: Check, className: "text-[#123adf]" },
  { value: "4", label: "Permissions Restricted", icon: LockKeyhole, className: "text-orange-600" },
  { value: "16", label: "Total Permissions", icon: GaugeCircle, className: "text-[#263a62]" },
];

export default function PortalRoleAccessSection({ data }: { data: IndustryPortalPageData }) {
  const tabs = getRoleTabs(data);
  const selectedTab = tabs[0]?.label ?? roleTabs[0].label;

  return (
    <section id="portal-role-access" className="relative isolate scroll-mt-[calc(var(--nav-offset)+1rem)] overflow-hidden border-t border-blue-100/70 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_52%,#edf4ff_100%)] px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-16 xl:px-12">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(ellipse_at_top_left,rgba(191,219,254,0.52),transparent_62%)]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-80 bg-[radial-gradient(ellipse_at_bottom_right,rgba(221,214,254,0.44),transparent_64%)]" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-[520px] bg-[radial-gradient(circle,rgba(37,99,235,0.13)_1px,transparent_1.6px)] bg-[size:18px_18px] [mask-image:radial-gradient(ellipse_at_bottom_left,black_0%,transparent_72%)]" aria-hidden="true" />

      <div className="relative mx-auto grid w-full max-w-[min(92vw,1440px)] gap-8 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-center">
        <PortalReveal className="min-w-0">
          <div>
            <SectionLabel>Role-Based Access</SectionLabel>
            <h2 className="mt-4 max-w-2xl text-3xl font-extrabold leading-[1.1] text-[#071538] sm:text-4xl lg:text-[2.85rem]">
              Role-Based Access for Every User
            </h2>
            <p className="mt-4 max-w-2xl text-sm font-medium leading-7 text-[#31466d] sm:text-base">
              {data.industrySlug === "healthcare"
                ? "Granular permissions ensure the right people have the right access, nothing more, nothing less. Strengthen security, reduce risk, and maintain complete control."
                : `Granular permissions help every ${data.portalName.toLowerCase()} role access only what they need while keeping business data secure.`}
            </p>

            <div className="mt-7 space-y-4">
              {benefitRows.map((benefit, index) => {
                const Icon = benefit.icon;

                return (
                  <PortalReveal key={benefit.title} delay={index * 0.04}>
                    <div className="flex gap-4 rounded-2xl bg-white/60 p-2">
                      <span className={cn("grid h-14 w-14 shrink-0 place-items-center rounded-2xl shadow-[0_14px_30px_rgba(30,57,104,0.08)]", index === 0 ? "bg-blue-50 text-blue-700" : index === 1 ? "bg-emerald-50 text-emerald-700" : "bg-violet-50 text-violet-700")}>
                        <Icon className="h-7 w-7" aria-hidden="true" />
                      </span>
                      <div className="py-1">
                        <h3 className="text-base font-extrabold text-[#111c37]">
                          {benefit.title}
                        </h3>
                        <p className="mt-1.5 text-sm font-medium leading-6 text-[#526684]">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </PortalReveal>
                );
              })}
            </div>
          </div>
        </PortalReveal>

        <PortalReveal className="min-w-0" delay={0.08} y={28}>
          <div className="mx-auto w-full max-w-[760px] overflow-hidden rounded-[1.65rem] border border-[#d8e3f3] bg-white p-4 shadow-[0_24px_72px_rgba(30,57,104,0.12)] xl:max-w-[820px]">
            <div className="grid min-w-0 gap-2 rounded-2xl bg-[#f4f8ff] p-2 sm:grid-cols-2 xl:grid-cols-4">
              {tabs.map((tab) => {
                const active = tab.label === selectedTab;
                const Icon = tab.icon;

                return (
                  <button
                    key={tab.label}
                    type="button"
                    aria-pressed={active}
                    className={cn(
                      "flex min-h-11 min-w-0 items-center justify-center gap-2 rounded-xl px-2.5 text-[11px] font-extrabold transition",
                      active
                        ? "bg-[#123adf] text-white shadow-[0_12px_24px_rgba(18,58,223,0.22)]"
                        : "border border-[#dce5f4] bg-white text-[#526684]",
                    )}
                  >
                    <Icon className="h-[18px] w-[18px] shrink-0" aria-hidden="true" />
                    <span className="truncate">{tab.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="mt-4 grid min-w-0 gap-4 xl:grid-cols-[minmax(0,1fr)_205px]">
              <div className="min-w-0 rounded-[1.35rem] border border-[#dce5f4] bg-white p-4">
                <p className="text-sm font-extrabold text-[#111c37]">Role Overview</p>
                <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex min-w-0 items-start gap-3">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[linear-gradient(135deg,#f9c9a4,#7c3f25)] text-xs font-black text-white shadow-[0_14px_34px_rgba(30,57,104,0.14)]">
                      SJ
                    </span>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-base font-extrabold text-[#111c37]">Sarah Johnson</h3>
                        <span className="rounded-lg bg-blue-50 px-2.5 py-1 text-[10px] font-extrabold text-[#123adf]">
                          Patient
                        </span>
                      </div>
                      <p className="mt-1 truncate text-xs font-medium text-[#526684]">
                        sarah.johnson@email.com
                      </p>
                      <p className="mt-1 text-xs font-medium text-[#526684]">
                        Member since May 24, 2025
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-start gap-3 rounded-xl border border-[#dce5f4] bg-[#f8fbff] p-3">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-blue-50 text-[#123adf]">
                    <Info className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <p className="text-xs font-medium leading-5 text-[#31466d]">
                    This role has standard access to personal health information and self-service features.
                  </p>
                </div>

                <div className="mt-4 min-w-0 overflow-hidden rounded-2xl border border-[#e5edf8]">
                  <p className="px-3 py-3 text-sm font-extrabold text-[#111c37]">Permissions</p>
                  <table className="w-full table-fixed border-separate border-spacing-0 text-left">
                    <thead>
                      <tr>
                        <th className="w-[42%] bg-white px-3 py-2.5 text-[10px] font-black text-[#526684]">
                          Permissions
                        </th>
                        {permissionColumns.map((column, index) => (
                          <th key={column} className={cn(
                            "bg-white px-1 py-2.5 text-center text-[9px] font-black text-[#526684]",
                            index > 0 && "border-l border-[#edf2f8]",
                          )}>
                            {column}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {permissionRows.map((row) => {
                        const Icon = row.icon;

                        return (
                        <tr key={row.area}>
                          <td className="border-t border-[#edf2f8] px-3 py-3">
                            <div className="flex min-w-0 items-center gap-2">
                              <Icon className="h-4 w-4 shrink-0 text-[#123adf]" aria-hidden="true" />
                              <div className="min-w-0">
                                <p className="truncate text-xs font-extrabold text-[#111c37]">{row.area}</p>
                                <p className="mt-0.5 line-clamp-2 text-[10px] font-medium leading-4 text-[#526684]">{row.description}</p>
                              </div>
                            </div>
                          </td>
                          {row.values.map((allowed, index) => (
                            <td key={`${row.area}-${permissionColumns[index]}`} className="border-l border-t border-[#edf2f8] px-1 py-3 text-center">
                              <span className={cn(
                                "mx-auto grid h-6 w-6 place-items-center rounded-full",
                                allowed ? "bg-emerald-50 text-emerald-600" : "bg-slate-100 text-slate-400",
                              )}>
                                {allowed ? <Check className="h-3.5 w-3.5" aria-hidden="true" /> : <X className="h-3.5 w-3.5" aria-hidden="true" />}
                              </span>
                            </td>
                          ))}
                        </tr>
                      );
                      })}
                    </tbody>
                  </table>
                  <div className="flex flex-wrap items-center gap-4 border-t border-[#edf2f8] px-3 py-3 text-[11px] font-semibold text-[#526684]">
                    <span className="inline-flex items-center gap-2">
                      <span className="grid h-5 w-5 place-items-center rounded-full bg-emerald-50 text-emerald-600"><Check className="h-3 w-3" aria-hidden="true" /></span>
                      Allowed
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <span className="grid h-5 w-5 place-items-center rounded-full bg-slate-100 text-slate-400"><X className="h-3 w-3" aria-hidden="true" /></span>
                      Not Allowed
                    </span>
                  </div>
                </div>
              </div>

              <div className="min-w-0 rounded-[1.35rem] border border-[#dce5f4] bg-[linear-gradient(180deg,#ffffff,#f7fbff)] p-4">
                <p className="text-sm font-extrabold text-[#111c37]">Access Level</p>
                <div className="mx-auto mt-3 grid h-32 w-32 place-items-center rounded-full bg-[conic-gradient(#123adf_0_72%,#e5eefb_72%_100%)] p-2.5">
                  <div className="grid h-full w-full place-items-center rounded-full bg-white text-center">
                    <UserRound className="mx-auto h-6 w-6 text-[#123adf]" aria-hidden="true" />
                    <span className="mt-1 block text-sm font-extrabold text-[#111c37]">Standard</span>
                    <span className="block text-[10px] font-semibold text-[#526684]">Patient Access</span>
                  </div>
                </div>
                <div className="mt-4 grid gap-3">
                  {accessStats.map((stat) => {
                    const Icon = stat.icon;

                    return (
                    <div key={stat.label} className="flex min-w-0 items-center gap-2 rounded-2xl bg-white px-3 py-2 shadow-sm">
                      <Icon className={cn("h-4 w-4 shrink-0", stat.className)} aria-hidden="true" />
                      <span className={cn("text-base font-extrabold", stat.className)}>{stat.value}</span>
                      <span className="min-w-0 text-[11px] font-medium leading-4 text-[#526684]">{stat.label}</span>
                    </div>
                    );
                  })}
                </div>
                <div className="mt-4 flex items-start gap-2 rounded-xl border border-[#cfd8ff] bg-[#f4f7ff] p-3 text-[11px] font-medium leading-5 text-[#31466d]">
                  <ShieldCheck className="h-4 w-4 shrink-0 text-[#123adf]" aria-hidden="true" />
                  Access is reviewed automatically and logged for security.
                </div>
              </div>
            </div>
          </div>
        </PortalReveal>
      </div>
    </section>
  );
}

function getRoleTabs(data: IndustryPortalPageData) {
  if (data.industrySlug === "healthcare") {
    return roleTabs;
  }

  const labels = data.roles.map((role) => role.title);

  return [...labels, ...roleTabs.map((tab) => tab.label)].slice(0, 4).map((label, index) => ({
    label,
    icon: roleTabs[index]?.icon ?? UserRound,
  }));
}

function SectionLabel({ children }: { children: string }) {
  return (
    <span className="inline-flex text-xs font-black uppercase tracking-[0.22em] text-[#123adf]">
      {children}
    </span>
  );
}
