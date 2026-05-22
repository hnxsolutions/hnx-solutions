"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Activity,
  BarChart3,
  Code2,
  CreditCard,
  LayoutDashboard,
  Layers3,
  Rocket,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

type WebSaasTab = {
  label: string;
  href: string;
  icon: LucideIcon;
};

const webSaasSolutionTabs: WebSaasTab[] = [
  {
    label: "Digital Presence Strategy",
    href: "/solutions/web-saas/digital-presence-strategy",
    icon: Rocket,
  },
  {
    label: "Business Website",
    href: "/solutions/web-saas/business-website",
    icon: Code2,
  },
  {
    label: "Landing Pages",
    href: "/solutions/web-saas/landing-pages",
    icon: LayoutDashboard,
  },
  {
    label: "Client Portal",
    href: "/solutions/web-saas/client-portal",
    icon: ShieldCheck,
  },
  {
    label: "Admin Dashboard",
    href: "/solutions/web-saas/admin-dashboard",
    icon: BarChart3,
  },
  {
    label: "SaaS Platform",
    href: "/solutions/web-saas/saas-platform",
    icon: Layers3,
  },
  {
    label: "Booking & Payment System",
    href: "/solutions/web-saas/booking-payment-system",
    icon: CreditCard,
  },
  {
    label: "Analytics & Growth Tracking",
    href: "/solutions/web-saas/analytics-growth-tracking",
    icon: Activity,
  },
];

export function WebSaasSolutionTabs() {
  const pathname = usePathname();
  const normalizedPathname = pathname.replace(/\/$/, "");

  return (
    <div className="sticky top-[70px] z-40 border-b border-[#d7e1f2] bg-white/92 shadow-[0_10px_28px_rgba(15,23,42,0.06)] backdrop-blur-xl">
      <nav
        aria-label="Web & SaaS solution pages"
        className="mx-auto flex max-w-[min(92vw,1440px)] items-center gap-5 overflow-x-auto px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12"
      >
        <div className="hidden min-w-[245px] shrink-0 border-r border-[#d7e1f2] py-4 pr-6 lg:block">
          <p className="text-sm font-extrabold text-[#0f214f]">Web & SaaS</p>
          <p className="mt-1 text-xs font-semibold text-[#66728f]">
            Switch between Web & SaaS modules
          </p>
        </div>

        {webSaasSolutionTabs.map((item) => {
          const Icon = item.icon;
          const isActive =
            normalizedPathname === item.href ||
            normalizedPathname.startsWith(`${item.href}/`);

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
