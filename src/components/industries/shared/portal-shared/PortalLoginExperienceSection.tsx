import {
  Bell,
  CheckCircle2,
  FileText,
  LifeBuoy,
  ReceiptText,
  UserRound,
} from "lucide-react";
import { PortalFloat, PortalReveal } from "./PortalMotion";
import {
  PortalCard,
  PortalIcon,
  PortalSection,
  PortalSectionHeader,
  getPortalTone,
} from "./portalSectionUtils";
import type { IndustryPortalPageData } from "./portalTypes";

export default function PortalLoginExperienceSection({ data }: { data: IndustryPortalPageData }) {
  return (
    <PortalSection>
      <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
        <PortalReveal>
          <div>
            <PortalSectionHeader
              eyebrow="User Login Experience"
              title="A Secure Login Experience for Every User"
              description={`Users sign in to the ${data.portalName.toLowerCase()} and immediately see the actions, files, payments, requests, and updates that matter to them.`}
            />

            <PortalCard className="mt-7 bg-gradient-to-br from-slate-950 to-blue-950 text-white dark:from-white/[0.08] dark:to-blue-500/10">
              <div className="flex items-start gap-4">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white/10 text-blue-200 ring-1 ring-white/10">
                  <UserRound className="h-7 w-7" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                    {data.loginExperience.accountStatus}
                  </p>
                  <h3 className="mt-2 text-2xl font-black">{data.loginExperience.profileTitle}</h3>
                  <p className="mt-2 text-sm font-semibold leading-6 text-slate-300">
                    {data.loginExperience.profileSubtitle}
                  </p>
                </div>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {["Secure session", "Verified account", "Controlled files", "Live status"].map((item) => (
                  <div key={item} className="flex items-center gap-2 rounded-2xl bg-white/10 px-3 py-2 text-xs font-black ring-1 ring-white/10">
                    <CheckCircle2 className="h-3.5 w-3.5 text-blue-200" aria-hidden="true" />
                    {item}
                  </div>
                ))}
              </div>
            </PortalCard>
          </div>
        </PortalReveal>

        <div>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {data.loginExperience.cards.map((card, index) => {
              const Icon = card.icon;

              return (
                <PortalFloat key={card.title} delay={index * 0.035}>
                  <PortalCard className="h-full">
                    <div className="flex items-center justify-between gap-3">
                      <PortalIcon icon={Icon} tone={getPortalTone(index)} />
                      <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-black uppercase text-slate-500 dark:bg-white/[0.08] dark:text-slate-300">
                        {card.value}
                      </span>
                    </div>
                    <h3 className="mt-4 text-sm font-black text-slate-950 dark:text-white">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-xs font-semibold leading-5 text-slate-600 dark:text-slate-300">
                      {card.description}
                    </p>
                  </PortalCard>
                </PortalFloat>
              );
            })}
          </div>

          <PortalReveal delay={0.12}>
            <div className="mt-4 rounded-[1.5rem] border border-blue-100 bg-blue-50/80 p-4 dark:border-blue-300/15 dark:bg-blue-400/10">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <PortalIcon icon={Bell} tone="blue" className="h-10 w-10 rounded-xl" />
                  <div>
                    <p className="text-sm font-black text-slate-950 dark:text-white">Latest update</p>
                    <p className="mt-1 text-xs font-semibold leading-5 text-slate-600 dark:text-slate-300">
                      {data.loginExperience.latestUpdate}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center sm:w-[240px]">
                  {[
                    { label: "Docs", icon: FileText },
                    { label: "Pay", icon: ReceiptText },
                    { label: "Help", icon: LifeBuoy },
                  ].map((item) => {
                    const Icon = item.icon;

                    return (
                      <div key={item.label} className="rounded-2xl bg-white px-3 py-2 shadow-sm dark:bg-white/[0.06]">
                        <Icon className="mx-auto h-4 w-4 text-blue-700 dark:text-blue-300" aria-hidden="true" />
                        <p className="mt-1 text-[10px] font-black text-slate-600 dark:text-slate-300">
                          {item.label}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </PortalReveal>
        </div>
      </div>
    </PortalSection>
  );
}
