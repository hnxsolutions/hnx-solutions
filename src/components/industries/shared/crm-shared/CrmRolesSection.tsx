import {
  BarChart3,
  BriefcaseBusiness,
  CalendarCheck,
  CheckCircle2,
  Circle,
  ClipboardList,
  CreditCard,
  FileText,
  IndianRupee,
  Lock,
  PhoneCall,
  ShieldCheck,
  Target,
  TrendingUp,
  UserCheck,
  Users,
  XCircle,
} from "lucide-react";
import type { IndustryCrmPageData } from "./industryCrmData";

const fallbackRoles = [
  {
    title: "Business Owner",
    description: "Track business performance, revenue, team activity and key CRM outcomes.",
    permissions: ["Business overview", "Revenue dashboard", "Team performance"],
    icon: BriefcaseBusiness,
  },
  {
    title: "Sales Manager",
    description: "Monitor leads, follow-ups, deals, source performance and sales activity.",
    permissions: ["Lead pipeline", "Team follow-ups", "Sales reports"],
    icon: BarChart3,
  },
  {
    title: "Sales Executive",
    description: "Work on assigned leads, calls, follow-ups, meetings and updates.",
    permissions: ["Assigned leads", "Call notes", "Follow-up tasks"],
    icon: UserCheck,
  },
  {
    title: "Operations Team",
    description: "Manage tasks, service updates, customer requests and delivery status.",
    permissions: ["Task tracking", "Customer updates", "Service status"],
    icon: ClipboardList,
  },
  {
    title: "Finance Team",
    description: "Track payments, invoices, collections, receipts and revenue reports.",
    permissions: ["Invoices", "Collections", "Payment reports"],
    icon: CreditCard,
  },
];

const rolePresets = [
  {
    key: "owner",
    match: ["owner", "founder", "ceo", "director", "business", "admin"],
    badge: "Full Access",
    permissions: ["Business overview", "Revenue dashboard", "Team performance", "Reports"],
    restricted: [],
    metrics: [
      { label: "Revenue", value: "₹52.3L", trend: "↑ 18.6%", icon: IndianRupee },
      { label: "Active Leads", value: "1,248", trend: "↑ 12.4%", icon: Users },
      { label: "Conversions", value: "320", trend: "↑ 15.3%", icon: Target },
      { label: "Team Score", value: "86%", trend: "↑ 9.2%", icon: TrendingUp },
    ],
    chartTitle: "Business Growth Trend",
    journey: ["Review", "Track", "Approve", "Grow"],
  },
  {
    key: "manager",
    match: ["manager", "head", "branch", "lead"],
    badge: "Team Access",
    permissions: ["Lead pipeline", "Team follow-ups", "Source reports", "Targets"],
    restricted: ["Finance settings"],
    metrics: [
      { label: "Team Leads", value: "486", trend: "↑ 14.2%", icon: Users },
      { label: "Follow-ups", value: "128", trend: "↓ 8.4%", icon: CalendarCheck },
      { label: "Won Deals", value: "74", trend: "↑ 11.8%", icon: Target },
      { label: "Pipeline", value: "₹31.4L", trend: "↑ 16.2%", icon: IndianRupee },
    ],
    chartTitle: "Sales Pipeline Trend",
    journey: ["Assign", "Monitor", "Review", "Close"],
  },
  {
    key: "executive",
    match: ["executive", "counsellor", "counselor", "sales", "agent", "associate"],
    badge: "Lead Access",
    permissions: ["Assigned leads", "Follow-up tasks", "Call notes", "Lead status"],
    restricted: ["Team reports"],
    metrics: [
      { label: "Assigned Leads", value: "48", trend: "↑ 18.4%", icon: Users },
      { label: "Calls Today", value: "26", trend: "↑ 8.7%", icon: PhoneCall },
      { label: "Follow-ups", value: "12", trend: "↓ 5.3%", icon: CalendarCheck },
      { label: "Conversion", value: "21.6%", trend: "↑ 3.9pp", icon: Target },
    ],
    chartTitle: "Lead Conversion Trend",
    journey: ["Assigned", "Call", "Follow-up", "Converted"],
  },
  {
    key: "operations",
    match: ["operation", "service", "support", "teacher", "trainer", "delivery"],
    badge: "Task Access",
    permissions: ["Task board", "Customer updates", "Service status", "Issue tracking"],
    restricted: ["Finance settings"],
    metrics: [
      { label: "Open Tasks", value: "64", trend: "↓ 10.2%", icon: ClipboardList },
      { label: "Completed", value: "138", trend: "↑ 8.2%", icon: CheckCircle2 },
      { label: "On-Time", value: "92.6%", trend: "↑ 4.6%", icon: TrendingUp },
      { label: "Issues", value: "15", trend: "Review", icon: FileText },
    ],
    chartTitle: "Operations Activity Trend",
    journey: ["Created", "Assigned", "Progress", "Done"],
  },
  {
    key: "finance",
    match: ["finance", "fee", "payment", "billing", "accounts"],
    badge: "Billing Access",
    permissions: ["Invoices", "Collections", "Payment notes", "Receipts"],
    restricted: ["Lead assignment"],
    metrics: [
      { label: "Collections", value: "₹48.6L", trend: "↑ 14.6%", icon: IndianRupee },
      { label: "Due Amount", value: "₹12.7L", trend: "↑ 8.2%", icon: CreditCard },
      { label: "Invoices", value: "248", trend: "↑ 5.3%", icon: FileText },
      { label: "Success", value: "96.4%", trend: "↑ 2.8%", icon: CheckCircle2 },
    ],
    chartTitle: "Collections Over Time",
    journey: ["Invoice", "Payment", "Reconcile", "Report"],
  },
];

const matrixRows = ["Leads", "Tasks", "Finance", "Reports"];

function getRolePreset(title: string, index: number) {
  const normalizedTitle = title.toLowerCase();

  return (
    rolePresets.find((preset) =>
      preset.match.some((keyword) => normalizedTitle.includes(keyword)),
    ) ??
    rolePresets[index] ??
    rolePresets[0]
  );
}

function getAccess(module: string, roleKey: string) {
  if (roleKey === "owner") return "full";

  if (roleKey === "manager") {
    return module === "Finance" ? "limited" : "full";
  }

  if (roleKey === "executive") {
    if (["Leads", "Tasks"].includes(module)) return "full";
    if (module === "Reports") return "limited";
    return "none";
  }

  if (roleKey === "operations") {
    if (module === "Tasks") return "full";
    if (module === "Reports") return "limited";
    return "none";
  }

  if (roleKey === "finance") {
    if (module === "Finance") return "full";
    if (module === "Reports") return "limited";
    return "none";
  }

  return "limited";
}

function AccessDot({ access }: { access: string }) {
  if (access === "full") {
    return <CheckCircle2 className="h-3 w-3 text-emerald-500" aria-hidden="true" />;
  }

  if (access === "none") {
    return <XCircle className="h-3 w-3 text-red-500" aria-hidden="true" />;
  }

  return <Circle className="h-3 w-3 text-amber-500" aria-hidden="true" />;
}

export default function CrmRolesSection({ data }: { data: IndustryCrmPageData }) {
  const roles = [
    ...data.roles,
    ...fallbackRoles.filter(
      (fallback) => !data.roles.some((role) => role.title === fallback.title),
    ),
  ].slice(0, 5);

  const roleViews = roles.map((role, index) => {
    const preset = getRolePreset(role.title, index);

    return {
      title: role.title || fallbackRoles[index]?.title || "Team Role",
      permissions:
        role.permissions.length > 0
          ? [
              ...role.permissions,
              ...preset.permissions.filter(
                (permission) => !role.permissions.includes(permission),
              ),
            ].slice(0, 4)
          : preset.permissions,
      icon: role.icon ?? fallbackRoles[index]?.icon ?? preset.metrics[0].icon,
      preset,
    };
  });

  return (
    <section id="crm-roles" className="py-4">
      <style>
        {`
          #crm-role-tab-0:checked ~ .crm-role-console .crm-role-tab-label-0,
          #crm-role-tab-1:checked ~ .crm-role-console .crm-role-tab-label-1,
          #crm-role-tab-2:checked ~ .crm-role-console .crm-role-tab-label-2,
          #crm-role-tab-3:checked ~ .crm-role-console .crm-role-tab-label-3,
          #crm-role-tab-4:checked ~ .crm-role-console .crm-role-tab-label-4 {
            background: linear-gradient(90deg, #2563eb, #7c3aed);
            color: #ffffff;
            box-shadow: 0 12px 26px rgba(79, 70, 229, 0.18);
          }

          #crm-role-tab-0:checked ~ .crm-role-console .crm-role-panel-0,
          #crm-role-tab-1:checked ~ .crm-role-console .crm-role-panel-1,
          #crm-role-tab-2:checked ~ .crm-role-console .crm-role-panel-2,
          #crm-role-tab-3:checked ~ .crm-role-console .crm-role-panel-3,
          #crm-role-tab-4:checked ~ .crm-role-console .crm-role-panel-4 {
            display: block;
          }

          #crm-role-tab-0:checked ~ .crm-role-console .crm-role-matrix-column-0,
          #crm-role-tab-1:checked ~ .crm-role-console .crm-role-matrix-column-1,
          #crm-role-tab-2:checked ~ .crm-role-console .crm-role-matrix-column-2,
          #crm-role-tab-3:checked ~ .crm-role-console .crm-role-matrix-column-3,
          #crm-role-tab-4:checked ~ .crm-role-console .crm-role-matrix-column-4 {
            background: rgba(124, 58, 237, 0.08);
            color: #6d28d9;
          }
        `}
      </style>

      <input id="crm-role-tab-0" className="sr-only" type="radio" name="crm-role-tabs" defaultChecked aria-label="Show role tab 1" title="Show role tab 1" />
      <input id="crm-role-tab-1" className="sr-only" type="radio" name="crm-role-tabs" aria-label="Show role tab 2" title="Show role tab 2" />
      <input id="crm-role-tab-2" className="sr-only" type="radio" name="crm-role-tabs" aria-label="Show role tab 3" title="Show role tab 3" />
      <input id="crm-role-tab-3" className="sr-only" type="radio" name="crm-role-tabs" aria-label="Show role tab 4" title="Show role tab 4" />
      <input id="crm-role-tab-4" className="sr-only" type="radio" name="crm-role-tabs" aria-label="Show role tab 5" title="Show role tab 5" />

      <div className="crm-role-console rounded-[2rem] border border-slate-200 bg-white px-5 py-7 shadow-[0_22px_70px_rgba(15,23,42,0.05)] dark:border-white/10 dark:bg-white/[0.04] sm:px-7 lg:px-8">
        <div className="grid gap-7 lg:grid-cols-[0.34fr_0.66fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-violet-50 px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.15em] text-violet-700 dark:bg-violet-400/10 dark:text-violet-200">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-violet-600 to-blue-600 text-white">
                <Users className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              Role Experience
            </span>

            <h2 className="mt-6 max-w-xl text-[2.15rem] font-black leading-[1.12] tracking-[-0.045em] text-slate-950 dark:text-white sm:text-4xl lg:text-[2.45rem]">
              One CRM. Role-Based Views for Every Team.
            </h2>

            <p className="mt-5 max-w-md text-[14px] font-medium leading-7 text-slate-600 dark:text-slate-300">
              Role-based access ensures every user sees what they need, nothing more,
              nothing less.
            </p>

            <div className="mt-7 grid max-w-md gap-3 sm:grid-cols-3">
              {[
                { title: "Admin Control", text: "Centralized setup.", icon: ShieldCheck },
                { title: "Focused Views", text: "Only what matters.", icon: BarChart3 },
                { title: "Secure Access", text: "Granular controls.", icon: Lock },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="rounded-2xl bg-white p-3 shadow-[0_0_0_1px_rgba(226,232,240,0.95),0_10px_26px_rgba(15,23,42,0.035)] dark:bg-white/[0.05] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.1)]"
                  >
                    <Icon className="h-5 w-5 text-violet-600 dark:text-violet-300" aria-hidden="true" />
                    <h3 className="mt-3 text-[11px] font-black text-slate-950 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-[10px] font-medium leading-4 text-slate-600 dark:text-slate-300">
                      {item.text}
                    </p>
                  </article>
                );
              })}
            </div>

            <div className="mt-6 flex items-center gap-3 text-xs font-semibold text-slate-600 dark:text-slate-300">
              <ShieldCheck className="h-4 w-4 text-slate-500 dark:text-slate-300" aria-hidden="true" />
              <span>
                <span className="font-black text-violet-700 dark:text-violet-300">Smart access.</span>{" "}
                Better focus. Stronger control.
              </span>
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-slate-200 bg-white p-3.5 shadow-[0_16px_46px_rgba(37,99,235,0.06)] dark:border-white/10 dark:bg-white/[0.045]">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="text-base font-black tracking-[-0.025em] text-slate-950 dark:text-white">
                  Role Access Console
                </h3>
                <p className="mt-0.5 text-[11px] font-medium text-slate-500 dark:text-slate-300">
                  Manage permissions and preview role dashboards.
                </p>
              </div>

              <span className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-[10px] font-black text-slate-600 shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-slate-200">
                <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
                Manage Roles
              </span>
            </div>

            <div className="mt-4 grid overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-white/10 dark:bg-white/[0.03] sm:grid-cols-2 lg:grid-cols-5">
              {roleViews.map((role, index) => {
                const Icon = role.icon;

                return (
                  <label
                    key={role.title}
                    htmlFor={`crm-role-tab-${index}`}
                    className={`crm-role-tab-label-${index} flex cursor-pointer items-center justify-center gap-2 border-slate-200 px-2.5 py-2.5 text-[11px] font-black text-slate-700 transition hover:bg-slate-50 dark:border-white/10 dark:text-slate-200 dark:hover:bg-white/5 lg:border-r last:lg:border-r-0`}
                  >
                    <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                    <span className="truncate">{role.title}</span>
                  </label>
                );
              })}
            </div>

            {roleViews.map((role, roleIndex) => {
              const preset = role.preset;

              return (
                <div key={role.title} className={`crm-role-panel-${roleIndex} hidden`}>
                  <div className="mt-3 grid gap-3 lg:grid-cols-[0.3fr_0.7fr]">
                    <div className="rounded-2xl border border-slate-200 bg-white p-3.5 dark:border-white/10 dark:bg-white/[0.04]">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="text-xs font-black text-slate-950 dark:text-white">
                          {role.title} Permissions
                        </h4>
                        <span className="rounded-full bg-violet-50 px-2 py-0.5 text-[9px] font-black text-violet-700 dark:bg-violet-400/10 dark:text-violet-200">
                          {preset.badge}
                        </span>
                      </div>

                      <div className="mt-3 space-y-2">
                        {role.permissions.slice(0, 4).map((permission) => (
                          <div
                            key={permission}
                            className="flex items-center gap-2 text-[11px] font-semibold text-slate-600 dark:text-slate-300"
                          >
                            <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-violet-600 dark:text-violet-300" aria-hidden="true" />
                            <span className="truncate">{permission}</span>
                          </div>
                        ))}

                        {preset.restricted.slice(0, 1).map((permission) => (
                          <div
                            key={permission}
                            className="flex items-center gap-2 text-[11px] font-semibold text-slate-400 dark:text-slate-500"
                          >
                            <Lock className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                            <span className="truncate">{permission}</span>
                          </div>
                        ))}
                      </div>

                      <span className="mt-4 inline-flex items-center gap-2 text-[11px] font-black text-violet-700 dark:text-violet-300">
                        View all <span aria-hidden="true">→</span>
                      </span>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white p-3.5 dark:border-white/10 dark:bg-white/[0.04]">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="text-xs font-black text-slate-950 dark:text-white">
                          {role.title} Dashboard
                        </h4>
                        <span className="rounded-xl border border-slate-200 px-2 py-1 text-[10px] font-bold text-slate-500 dark:border-white/10 dark:text-slate-300">
                          Month
                        </span>
                      </div>

                      <div className="mt-3 grid gap-2 sm:grid-cols-2 xl:grid-cols-4">
                        {preset.metrics.map((metric) => {
                          const MetricIcon = metric.icon;
                          const isNegative = metric.trend.includes("↓");

                          return (
                            <div
                              key={metric.label}
                              className="rounded-xl bg-white p-2 shadow-[0_0_0_1px_rgba(226,232,240,0.95),0_7px_16px_rgba(15,23,42,0.03)] dark:bg-white/[0.05] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.1)]"
                            >
                              <p className="text-[9px] font-black text-slate-500 dark:text-slate-300">
                                {metric.label}
                              </p>
                              <div className="mt-1 flex items-end justify-between gap-1.5">
                                <span className="text-base font-black text-slate-950 dark:text-white">
                                  {metric.value}
                                </span>
                                <span className="grid h-6 w-6 place-items-center rounded-full bg-violet-50 text-violet-700 dark:bg-violet-400/10 dark:text-violet-200">
                                  <MetricIcon className="h-3 w-3" aria-hidden="true" />
                                </span>
                              </div>
                              <p className={`mt-0.5 text-[9px] font-black ${isNegative ? "text-red-500" : "text-emerald-500"}`}>
                                {metric.trend}
                              </p>
                            </div>
                          );
                        })}
                      </div>

                      <div className="mt-3">
                        <div className="mb-1.5 flex items-center justify-between">
                          <p className="text-[11px] font-black text-slate-950 dark:text-white">
                            {preset.chartTitle}
                          </p>
                          <span className="rounded-xl border border-slate-200 px-2 py-0.5 text-[9px] font-bold text-slate-500 dark:border-white/10 dark:text-slate-300">
                            Daily
                          </span>
                        </div>

                        <div className="relative h-20 overflow-hidden rounded-xl bg-slate-50 px-3 py-2 dark:bg-white/[0.035]">
                          <svg viewBox="0 0 520 90" className="h-full w-full" aria-hidden="true">
                            <defs>
                              <linearGradient id={`crmRolesChartFill-${roleIndex}`} x1="0" x2="0" y1="0" y2="1">
                                <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.22" />
                                <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
                              </linearGradient>
                            </defs>
                            {[20, 40, 60, 80].map((y) => (
                              <line key={y} x1="0" x2="520" y1={y} y2={y} stroke="#e2e8f0" strokeWidth="1" />
                            ))}
                            <path
                              d="M0 70 C38 52 70 35 105 50 C145 72 176 28 220 43 C264 58 304 36 348 45 C398 56 438 26 520 16"
                              fill="none"
                              stroke="#6d28d9"
                              strokeWidth="3"
                              strokeLinecap="round"
                            />
                            <path
                              d="M0 70 C38 52 70 35 105 50 C145 72 176 28 220 43 C264 58 304 36 348 45 C398 56 438 26 520 16 L520 90 L0 90 Z"
                              fill={`url(#crmRolesChartFill-${roleIndex})`}
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-2.5 grid gap-3 lg:grid-cols-[0.44fr_0.56fr]">
                    <div className="rounded-2xl border border-slate-200 bg-white p-3 dark:border-white/10 dark:bg-white/[0.04]">
                      <h4 className="text-[11px] font-black text-slate-950 dark:text-white">
                        {role.title} Journey
                      </h4>

                      <div className="mt-3 grid grid-cols-4 gap-1.5">
                        {preset.journey.map((step, index) => (
                          <div key={step} className="relative text-center">
                            {index < preset.journey.length - 1 ? (
                              <span className="absolute left-1/2 top-3 h-px w-full border-t border-dashed border-violet-200 dark:border-violet-300/20" />
                            ) : null}

                            <span
                              className={`relative z-10 mx-auto grid h-6 w-6 place-items-center rounded-full text-[10px] font-black ${
                                index === 0
                                  ? "bg-gradient-to-br from-blue-600 to-violet-600 text-white"
                                  : index === preset.journey.length - 1
                                    ? "bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100 dark:bg-emerald-400/10 dark:text-emerald-300 dark:ring-emerald-300/20"
                                    : "bg-white text-slate-700 ring-1 ring-slate-200 dark:bg-white/10 dark:text-slate-200 dark:ring-white/10"
                              }`}
                            >
                              {index + 1}
                            </span>

                            <p className="mt-1.5 text-[9px] font-black leading-3 text-slate-700 dark:text-slate-200">
                              {step}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white p-3 dark:border-white/10 dark:bg-white/[0.04]">
                      <h4 className="text-[11px] font-black text-slate-950 dark:text-white">
                        Permission Matrix
                      </h4>

                      <div className="mt-2 overflow-hidden rounded-xl border border-slate-200 dark:border-white/10">
                        <table className="w-full text-left text-[9px]">
                          <thead className="bg-slate-50 text-slate-500 dark:bg-white/[0.04] dark:text-slate-300">
                            <tr>
                              <th className="px-2 py-1.5 font-black">Module</th>
                              {roleViews.map((matrixRole, matrixIndex) => (
                                <th key={matrixRole.title} className={`crm-role-matrix-column-${matrixIndex} px-2 py-1.5 text-center font-black`}>
                                  {matrixRole.title.split(" ")[0]}
                                </th>
                              ))}
                            </tr>
                          </thead>

                          <tbody>
                            {matrixRows.map((module) => (
                              <tr key={module} className="border-t border-slate-200 dark:border-white/10">
                                <td className="px-2 py-1 font-bold text-slate-600 dark:text-slate-300">
                                  {module}
                                </td>

                                {roleViews.map((matrixRole, matrixIndex) => {
                                  const access = getAccess(module, matrixRole.preset.key);

                                  return (
                                    <td key={`${module}-${matrixRole.title}`} className={`crm-role-matrix-column-${matrixIndex} px-2 py-1`}>
                                      <span className="flex justify-center">
                                        <AccessDot access={access} />
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
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}