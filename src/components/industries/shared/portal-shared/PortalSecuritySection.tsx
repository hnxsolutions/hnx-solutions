import { PortalReveal } from "./PortalMotion";
import {
  PortalCard,
  PortalIcon,
  PortalSection,
  PortalSectionHeader,
  getPortalTone,
} from "./portalSectionUtils";
import type { IndustryPortalPageData } from "./portalTypes";

export default function PortalSecuritySection({ data }: { data: IndustryPortalPageData }) {
  return (
    <PortalSection className="bg-slate-50/70 dark:bg-white/[0.025]">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <PortalSectionHeader
          eyebrow="Security & Permissions"
          title="Built for Secure Role-Based Access"
          description={`${data.portalName} security keeps documents, requests, payments, support history, and admin review actions visible only to approved users.`}
        />

        <div className="grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {data.securityItems.map((item, index) => (
              <PortalReveal key={item.title} delay={index * 0.03}>
                <PortalCard className="h-full">
                  <PortalIcon icon={item.icon} tone={getPortalTone(index)} />
                  <h3 className="mt-4 text-sm font-black text-slate-950 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs font-semibold leading-5 text-slate-600 dark:text-slate-300">
                    {item.description}
                  </p>
                </PortalCard>
              </PortalReveal>
            ))}
          </div>

          <PortalReveal delay={0.12}>
            <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-white/[0.05]">
              <div className="grid grid-cols-4 border-b border-slate-200 bg-slate-50 text-xs font-black text-slate-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300">
                <div className="p-3">Area</div>
                <div className="p-3">User</div>
                <div className="p-3">Staff</div>
                <div className="p-3">Admin</div>
              </div>
              {data.permissionMatrix.map((row) => (
                <div key={row.area} className="grid grid-cols-4 border-b border-slate-100 text-xs font-semibold text-slate-600 last:border-b-0 dark:border-white/10 dark:text-slate-300">
                  <div className="p-3 font-black text-slate-900 dark:text-white">{row.area}</div>
                  <div className="p-3">{row.user}</div>
                  <div className="p-3">{row.staff}</div>
                  <div className="p-3">{row.admin}</div>
                </div>
              ))}
            </div>
          </PortalReveal>
        </div>
      </div>
    </PortalSection>
  );
}
