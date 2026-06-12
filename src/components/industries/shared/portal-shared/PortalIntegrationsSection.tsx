import { LockKeyhole, PlugZap } from "lucide-react";
import { PortalReveal } from "./PortalMotion";
import {
  PortalCard,
  PortalIcon,
  PortalSection,
  PortalSectionHeader,
  getPortalTone,
} from "./portalSectionUtils";
import type { IndustryPortalPageData } from "./portalTypes";

export default function PortalIntegrationsSection({ data }: { data: IndustryPortalPageData }) {
  return (
    <PortalSection>
      <PortalSectionHeader
        eyebrow="Integrations"
        title="Connect Your Portal With Your Business Systems"
        description={`${data.portalName} can connect login, CRM records, mobile app actions, payments, documents, notifications, admin dashboards, databases, and reports.`}
        center
      />

      <div className="mt-8 grid gap-5 xl:grid-cols-[0.9fr_1.1fr] xl:items-center">
        <PortalReveal>
          <PortalCard className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white">
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-400/20 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white/10 text-blue-200 ring-1 ring-white/10">
                <LockKeyhole className="h-7 w-7" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-3xl font-black tracking-[-0.035em]">
                {data.portalName}
              </h3>
              <p className="mt-3 text-sm font-semibold leading-7 text-slate-300">
                The portal becomes the secure self-service layer between external users and your internal business systems.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Login", "Documents", "Payments", "Requests", "Support", "Reports"].map((item) => (
                  <span key={item} className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-black ring-1 ring-white/10">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </PortalCard>
        </PortalReveal>

        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
          {data.integrations.map((item, index) => (
            <PortalReveal key={item.title} delay={index * 0.025}>
              <PortalCard className="h-full p-4">
                <div className="flex items-center gap-3 xl:block">
                  <PortalIcon icon={item.icon} tone={getPortalTone(index)} className="h-10 w-10 rounded-xl" />
                  <div>
                    <h3 className="text-sm font-black text-slate-950 dark:text-white xl:mt-4">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs font-semibold leading-5 text-slate-600 dark:text-slate-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </PortalCard>
            </PortalReveal>
          ))}
        </div>
      </div>

      <div className="mt-5 flex items-center justify-center gap-2 rounded-2xl border border-blue-100 bg-blue-50 px-4 py-3 text-sm font-black text-blue-800 dark:border-blue-300/15 dark:bg-blue-400/10 dark:text-blue-200">
        <PlugZap className="h-4 w-4" aria-hidden="true" />
        Portal at the center, systems connected around it.
      </div>
    </PortalSection>
  );
}
