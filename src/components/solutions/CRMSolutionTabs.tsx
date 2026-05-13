"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { LucideIcon } from "lucide-react";
import { BarChart3, Brain, Headphones, Network, ShieldCheck, UserCog, Users, Workflow } from "lucide-react";

type CRMSolutionTab = {
  label: string;
  href: string;
  icon: LucideIcon;
};

const crmSolutionTabs: CRMSolutionTab[] = [
  { label: "Business OS", href: "/solutions/crm/business-os", icon: Network },
  { label: "CRM Core", href: "/solutions/crm/crmcore", icon: Users },
  { label: "Admin Control Room", href: "/solutions/crm/admin-control-room", icon: ShieldCheck },
  { label: "Workflow Engine", href: "/solutions/crm/workflow-engine", icon: Workflow },
  { label: "AI Intelligence", href: "/solutions/crm/ai-intelligence", icon: Brain },
  { label: "Dashboards & Reports", href: "/solutions/crm/dashboards-reports", icon: BarChart3 },
];

function normalizeSolutionPath(pathname: string) {
  if (pathname === "/solutions/crm/crmcore" || pathname.startsWith("/solutions/crm/crmcore/")) {
    return pathname.replace("/solutions/crm/crmcore", "/solutions/crm/crm-core");
  }

  return pathname;
}

export function CRMSolutionTabs() {
  const pathname = usePathname();
  const normalizedPathname = normalizeSolutionPath(pathname);

  return (
    <div className="sticky top-[70px] z-40 border-b border-[#d7e1f2] bg-white/92 shadow-[0_10px_28px_rgba(15,23,42,0.06)] backdrop-blur-xl">
      <nav
        aria-label="CRM solution pages"
        className="mx-auto flex max-w-[min(92vw,1440px)] items-center gap-5 overflow-x-auto px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12"
      >
        <div className="hidden min-w-[210px] shrink-0 border-r border-[#d7e1f2] py-4 pr-6 lg:block">
          <p className="text-sm font-extrabold text-[#0f214f]">CRM Solutions</p>
          <p className="mt-1 text-xs font-semibold text-[#66728f]">
            Switch between CRM modules
          </p>
        </div>
        {crmSolutionTabs.map((item) => {
          const Icon = item.icon;
          const isActive = normalizedPathname === item.href || normalizedPathname.startsWith(`${item.href}/`);

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={`flex shrink-0 items-center gap-2 border-b-2 px-3 py-5 text-xs font-extrabold transition-colors ${
                isActive
                  ? "border-[#2378ff] bg-[#eef6ff] text-[#145cb7]"
                  : "border-transparent text-[#465374] hover:bg-[#f4f8ff] hover:text-[#145cb7]"
              }`}
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
