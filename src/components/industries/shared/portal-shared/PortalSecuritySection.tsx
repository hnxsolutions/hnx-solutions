import {
  Activity,
  ClipboardList,
  Database,
  LockKeyhole,
  ShieldCheck,
  Stethoscope,
  UserCheck,
  UsersRound,
} from "lucide-react";
import { PortalReveal } from "./PortalMotion";
import { cn } from "./portalSectionUtils";
import type { IndustryPortalPageData } from "./portalTypes";

const securityList = [
  { title: "HIPAA Compliant", icon: Stethoscope },
  { title: "Role-Based Permissions", icon: UsersRound },
  { title: "Data Encryption", icon: LockKeyhole },
  { title: "Audit & Activity Logs", icon: ClipboardList },
  { title: "Secure Access Controls", icon: ShieldCheck },
];

const orbitNodes = [
  { label: "Secure Sessions", icon: UserCheck, className: "left-1/2 top-6 -translate-x-1/2", line: "top" },
  { label: "Role-Based Permissions", icon: UsersRound, className: "left-8 top-[26%]", line: "leftTop" },
  { label: "Audit & Activity Logs", icon: ClipboardList, className: "right-8 top-[26%]", line: "rightTop" },
  { label: "Secure Access Controls", icon: LockKeyhole, className: "bottom-[24%] left-12", line: "leftBottom" },
  { label: "Data Protection & Encryption", icon: Database, className: "bottom-[24%] right-12", line: "rightBottom" },
];

const complianceCards = [
  { title: "HIPAA Compliant", note: "Protected health information", icon: Stethoscope },
  { title: "SOC 2 Type II", note: "Audited for security, availability & privacy", badge: "AICPA SOC" },
  { title: "GDPR Ready", note: "EU data protection compliant", icon: LockKeyhole },
  { title: "Data Encryption At Rest & In Transit", note: "AES-256 encryption for all data", icon: LockKeyhole },
];

export default function PortalSecuritySection({ data }: { data: IndustryPortalPageData }) {
  const isHealthcare = data.industrySlug === "healthcare";

  return (
    <section id="portal-security" className="relative isolate scroll-mt-[calc(var(--nav-offset)+1rem)] overflow-hidden border-t border-blue-100/70 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_52%,#eef5ff_100%)] px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20 xl:px-12">
      <div className="absolute inset-5 rounded-[2rem] border border-blue-100/80" aria-hidden="true" />

      <div className="relative mx-auto grid w-full max-w-[min(92vw,1440px)] gap-8 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-center">
        <PortalReveal className="min-w-0">
          <div>
            <SectionLabel>Security & Permissions</SectionLabel>
            <h2 className="mt-4 max-w-lg text-3xl font-extrabold leading-[1.1] text-[#071538] sm:text-4xl lg:text-[2.85rem]">
              Enterprise-Grade Security You Can Trust
            </h2>
            <p className="mt-4 max-w-xl text-sm font-medium leading-7 text-[#31466d] sm:text-base">
              {isHealthcare
                ? "We prioritize the safety of your data with industry-leading security, rigorous access controls, and continuous monitoring to ensure compliance and protect what matters most."
                : `Protect every ${data.portalName.toLowerCase()} account with rigorous access controls, monitoring, privacy boundaries, and secure workflows.`}
            </p>

            <div className="mt-7 divide-y divide-[#dce5f4]">
              {securityList.map((item, index) => {
                const Icon = item.icon;

                return (
                  <PortalReveal key={item.title} delay={index * 0.035}>
                    <div className="flex items-center gap-4 py-3.5">
                      <span className="grid h-14 w-14 place-items-center rounded-2xl bg-blue-50 text-[#1257d9] shadow-[0_14px_30px_rgba(30,57,104,0.08)]">
                        <Icon className="h-7 w-7" aria-hidden="true" />
                      </span>
                      <h3 className="text-base font-extrabold text-[#071538]">{item.title}</h3>
                    </div>
                  </PortalReveal>
                );
              })}
            </div>
          </div>
        </PortalReveal>

        <div className="min-w-0">
          <SecurityVisualPanel />
        </div>
      </div>
    </section>
  );
}

function SecurityVisualPanel() {
  return (
    <div className="relative mx-auto w-full max-w-[760px] overflow-hidden rounded-[1.75rem] border border-[#cfe0f5] bg-white/72 p-4 shadow-[0_24px_72px_rgba(25,52,101,0.11)] backdrop-blur xl:max-w-[820px]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_45%_40%,rgba(37,99,235,0.12),transparent_38%),radial-gradient(circle_at_90%_10%,rgba(191,219,254,0.34),transparent_26%)]" />

      <div className="relative grid min-h-[560px] gap-4 xl:grid-cols-[minmax(0,1fr)_230px]">
        <div className="relative min-h-[390px] overflow-hidden rounded-[1.4rem]">
          <svg className="absolute inset-0 h-full w-full text-blue-200" viewBox="0 0 680 520" preserveAspectRatio="none" aria-hidden="true">
            <circle cx="340" cy="250" r="190" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.7" />
            <circle cx="340" cy="250" r="150" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.6" />
            <circle cx="340" cy="250" r="110" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.45" />
            <line x1="340" y1="250" x2="340" y2="92" stroke="#1257d9" strokeDasharray="4 10" strokeWidth="3" />
            <line x1="340" y1="250" x2="155" y2="178" stroke="#1257d9" strokeDasharray="4 10" strokeWidth="3" />
            <line x1="340" y1="250" x2="525" y2="178" stroke="#1257d9" strokeDasharray="4 10" strokeWidth="3" />
            <line x1="340" y1="250" x2="190" y2="402" stroke="#1257d9" strokeDasharray="4 10" strokeWidth="3" />
            <line x1="340" y1="250" x2="490" y2="402" stroke="#1257d9" strokeDasharray="4 10" strokeWidth="3" />
          </svg>

          <div className="absolute left-1/2 top-1/2 grid h-52 w-52 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-blue-50/70 shadow-[inset_0_0_0_1px_rgba(191,219,254,0.8)]">
            <div className="relative grid h-[152px] w-[152px] place-items-center">
              <ShieldShape />
              <LockKeyhole className="absolute h-14 w-14 text-white drop-shadow-[0_10px_22px_rgba(0,0,0,0.2)]" aria-hidden="true" />
            </div>
          </div>

          {orbitNodes.map((node, index) => {
            const Icon = node.icon;

            return (
              <div key={node.label} className={cn("absolute flex w-28 flex-col items-center text-center", node.className)}>
                <span className="relative grid h-16 w-16 place-items-center rounded-full border border-[#d8e5f7] bg-white shadow-[0_16px_40px_rgba(25,52,101,0.1)]">
                  <Icon className="h-7 w-7 text-[#1257d9]" aria-hidden="true" />
                  {index === 0 ? <span className="absolute right-2 top-9 grid h-5 w-5 place-items-center rounded-full bg-emerald-500 text-white"><ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" /></span> : null}
                </span>
                <p className="mt-2 text-[11px] font-extrabold leading-4 text-[#071538]">{node.label}</p>
              </div>
            );
          })}
        </div>

        <div className="grid content-center gap-4">
          <StatusCard icon={ShieldCheck} title="Active & Protected" description="All systems are monitored 24/7 to detect and prevent threats in real time." footer="All systems secure" />
          <StatusCard icon={Activity} title="Continuous Monitoring" description="Real-time monitoring, vulnerability scanning, and threat detection." footer="Always On Guard" />
        </div>

        <div className="grid gap-3 md:grid-cols-2 xl:col-span-2 xl:grid-cols-4">
          {complianceCards.map((card, index) => (
            <PortalReveal key={card.title} delay={0.1 + index * 0.035}>
              <article className="flex min-h-[118px] items-center gap-3 rounded-2xl border border-[#dce5f4] bg-white p-3.5 shadow-[0_14px_34px_rgba(25,52,101,0.07)]">
                {card.badge ? (
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[linear-gradient(135deg,#0ea5e9,#1d4ed8)] text-center text-[9px] font-black leading-3 text-white">{card.badge}</span>
                ) : (
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-blue-50 text-[#1257d9]">
                    {card.icon ? <card.icon className="h-6 w-6" aria-hidden="true" /> : null}
                  </span>
                )}
                <div>
                  <h3 className="text-sm font-extrabold leading-5 text-[#071538]">{card.title}</h3>
                  <p className="mt-1.5 text-[11px] font-medium leading-5 text-[#526684]">{card.note}</p>
                </div>
              </article>
            </PortalReveal>
          ))}
        </div>
      </div>
    </div>
  );
}

function ShieldShape() {
  return (
    <svg className="h-full w-full drop-shadow-[0_22px_48px_rgba(18,87,217,0.3)]" viewBox="0 0 180 210" aria-hidden="true">
      <path d="M90 8 L164 40 L154 128 C149 164 126 188 90 204 C54 188 31 164 26 128 L16 40 Z" fill="#bfdbfe" />
      <path d="M90 24 L146 48 L138 122 C134 151 116 171 90 184 C64 171 46 151 42 122 L34 48 Z" fill="url(#shieldGradient)" />
      <defs>
        <linearGradient id="shieldGradient" x1="35" x2="145" y1="30" y2="180">
          <stop stopColor="#1d5df0" />
          <stop offset="1" stopColor="#052a86" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function StatusCard({
  icon: Icon,
  title,
  description,
  footer,
}: {
  icon: typeof ShieldCheck;
  title: string;
  description: string;
  footer: string;
}) {
  return (
    <article className="rounded-2xl border border-[#dce5f4] bg-white p-4 shadow-[0_16px_42px_rgba(25,52,101,0.09)]">
      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-50 text-emerald-600">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>
      <h3 className="mt-4 text-base font-extrabold text-[#071538]">{title}</h3>
      <p className="mt-2 text-xs font-medium leading-5 text-[#31466d]">{description}</p>
      <p className="mt-4 inline-flex items-center gap-2 text-xs font-extrabold text-emerald-600">
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
        {footer}
      </p>
    </article>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <span className="text-xs font-black uppercase tracking-[0.22em] text-[#0b57e3]">
      {children}
    </span>
  );
}
