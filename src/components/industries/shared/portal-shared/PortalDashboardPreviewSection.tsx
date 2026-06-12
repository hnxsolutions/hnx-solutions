import {
  Bell,
  CheckCircle2,
  FileText,
  LifeBuoy,
  LockKeyhole,
  ReceiptText,
  Search,
} from "lucide-react";
import { PortalReveal } from "./PortalMotion";
import {
  PortalIcon,
  PortalSection,
  PortalSectionHeader,
} from "./portalSectionUtils";
import type { IndustryPortalPageData, PortalDashboardActivity } from "./portalTypes";

export default function PortalDashboardPreviewSection({ data }: { data: IndustryPortalPageData }) {
  return (
    <PortalSection>
      <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <PortalSectionHeader
          eyebrow="Dashboard Preview"
          title="A Complete Portal Dashboard for Users and Teams"
          description={`The ${data.portalName.toLowerCase()} dashboard keeps external users focused on requests, documents, payments, notifications, and support while internal teams manage review work.`}
        />

        <PortalReveal>
          <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-3 shadow-[0_24px_70px_rgba(15,23,42,0.14)] dark:border-white/10">
            <div className="overflow-hidden rounded-[1.5rem] bg-white dark:bg-slate-950">
              <div className="grid min-h-[560px] lg:grid-cols-[170px_1fr]">
                <aside className="hidden border-r border-slate-100 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/[0.03] lg:block">
                  <div className="flex items-center gap-2">
                    <PortalIcon icon={LockKeyhole} tone="blue" className="h-9 w-9 rounded-xl" />
                    <p className="text-xs font-black text-slate-950 dark:text-white">{data.portalName}</p>
                  </div>
                  <nav className="mt-6 space-y-2">
                    {data.dashboard.sidebarItems.map((item, index) => (
                      <div
                        key={item}
                        className={`rounded-xl px-3 py-2 text-xs font-black ${
                          index === 0
                            ? "bg-slate-950 text-white dark:bg-white dark:text-slate-950"
                            : "text-slate-500 dark:text-slate-400"
                        }`}
                      >
                        {item}
                      </div>
                    ))}
                  </nav>
                </aside>

                <div className="min-w-0 p-4">
                  <div className="flex flex-col gap-3 border-b border-slate-100 pb-4 dark:border-white/10 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm font-black text-slate-950 dark:text-white">
                        Portal Overview
                      </p>
                      <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                        Requests, documents, payments, updates, and tickets
                      </p>
                    </div>
                    <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 dark:border-white/10 dark:bg-white/[0.04]">
                      <Search className="h-4 w-4 text-slate-400" aria-hidden="true" />
                      <span className="text-xs font-semibold text-slate-400">Search portal records</span>
                    </div>
                  </div>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                    {data.dashboard.metrics.map((metric) => (
                      <div key={metric.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/[0.04]">
                        <p className="text-[11px] font-black uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400">
                          {metric.label}
                        </p>
                        <p className="mt-2 text-2xl font-black text-slate-950 dark:text-white">
                          {metric.value}
                        </p>
                        <p className="mt-1 text-xs font-bold text-blue-700 dark:text-blue-300">
                          {metric.note}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
                    <DashboardPanel title="Request Status" icon={CheckCircle2} items={data.dashboard.requestStatus} />
                    <DashboardPanel title="Document Status" icon={FileText} items={data.dashboard.documents} />
                    <DashboardPanel title="Payment Status" icon={ReceiptText} items={data.dashboard.payments} />
                    <div className="grid gap-4">
                      <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-white/[0.05]">
                        <div className="flex items-center gap-2">
                          <Bell className="h-4 w-4 text-blue-700 dark:text-blue-300" aria-hidden="true" />
                          <p className="text-sm font-black text-slate-950 dark:text-white">Notifications</p>
                        </div>
                        <div className="mt-3 space-y-2">
                          {data.dashboard.notifications.map((item) => (
                            <p key={item} className="rounded-xl bg-slate-50 px-3 py-2 text-xs font-bold text-slate-600 dark:bg-white/[0.05] dark:text-slate-300">
                              {item}
                            </p>
                          ))}
                        </div>
                      </div>
                      <DashboardPanel title="Support Tickets" icon={LifeBuoy} items={data.dashboard.tickets} compact />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PortalReveal>
      </div>
    </PortalSection>
  );
}

function DashboardPanel({
  title,
  icon: Icon,
  items,
  compact = false,
}: {
  title: string;
  icon: typeof CheckCircle2;
  items: PortalDashboardActivity[];
  compact?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-white/[0.05]">
      <div className="flex items-center gap-2">
        <Icon className="h-4 w-4 text-blue-700 dark:text-blue-300" aria-hidden="true" />
        <p className="text-sm font-black text-slate-950 dark:text-white">{title}</p>
      </div>
      <div className="mt-3 space-y-2">
        {items.slice(0, compact ? 2 : 3).map((item) => (
          <div key={`${item.title}-${item.status}`} className="rounded-xl bg-slate-50 px-3 py-2 dark:bg-white/[0.05]">
            <div className="flex items-center justify-between gap-2">
              <p className="truncate text-xs font-black text-slate-800 dark:text-slate-200">
                {item.title}
              </p>
              <span className="shrink-0 rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-black text-blue-700 dark:bg-blue-400/10 dark:text-blue-300">
                {item.status}
              </span>
            </div>
            <p className="mt-1 text-[11px] font-semibold text-slate-500 dark:text-slate-400">
              {item.meta}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
