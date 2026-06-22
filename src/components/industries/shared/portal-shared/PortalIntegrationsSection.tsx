import {
  BarChart3,
  Check,
  Cloud,
  FlaskConical,
  Headphones,
  Heart,
  Settings,
} from "lucide-react";
import { PortalReveal } from "./PortalMotion";
import { cn } from "./portalSectionUtils";
import type { IndustryPortalPageData } from "./portalTypes";

const checklist = [
  "EHR / EMR Systems",
  "Billing & Payment Gateways",
  "Lab & Diagnostic Systems",
  "Communication Tools",
  "Third-Party Applications",
];

const integrationCards = [
  { name: "Epic Systems", brand: "Epic", tag: "EHR / EMR", className: "left-[8%] top-[5%]", tone: "text-red-600", size: "large" },
  { name: "Cerner", brand: "Cerner", tag: "EHR / EMR", className: "left-[39%] top-0", tone: "text-sky-600", size: "large" },
  { name: "Lab Systems", icon: FlaskConical, tag: "Labs & Diagnostics", className: "right-[2%] top-[5%]", tone: "text-cyan-600" },
  { name: "Stripe", brand: "stripe", tag: "Payments", className: "left-0 top-[34%]", tone: "text-violet-600" },
  { name: "Salesforce", brand: "salesforce", tag: "CRM", className: "right-0 top-[34%]", tone: "text-sky-600" },
  { name: "Twilio", brand: "twilio", tag: "Communication", className: "left-[1%] bottom-[23%]", tone: "text-red-600" },
  { name: "Support Systems", icon: Headphones, tag: "Helpdesk / Support", className: "right-[4%] bottom-[23%]", tone: "text-teal-600" },
  { name: "Analytics Platforms", icon: BarChart3, tag: "Analytics", className: "left-[18%] bottom-0", tone: "text-blue-500" },
  { name: "Cloud Storage Providers", icon: Cloud, tag: "Storage", className: "left-[43%] bottom-0", tone: "text-blue-600" },
  { name: "Automation Tools", icon: Settings, tag: "Automation", className: "right-[15%] bottom-0", tone: "text-violet-600" },
];

export default function PortalIntegrationsSection({ data }: { data: IndustryPortalPageData }) {
  const isHealthcare = data.industrySlug === "healthcare";

  return (
    <section id="portal-integrations" className="relative isolate scroll-mt-[calc(var(--nav-offset)+1rem)] overflow-hidden border-t border-blue-100/70 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_52%,#eef5ff_100%)] px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20 xl:px-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(191,219,254,0.45),transparent_48%),radial-gradient(ellipse_at_bottom_left,rgba(219,234,254,0.85),transparent_42%)]" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-[480px] bg-[radial-gradient(circle,rgba(37,99,235,0.13)_1px,transparent_1.6px)] bg-[size:18px_18px] [mask-image:radial-gradient(ellipse_at_bottom_left,black_0%,transparent_72%)]" aria-hidden="true" />

      <div className="relative mx-auto grid w-full max-w-[min(92vw,1440px)] gap-8 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-center">
        <PortalReveal className="min-w-0">
          <div>
            <SectionLabel>Integrations</SectionLabel>
            <h2 className="mt-4 max-w-xl text-3xl font-extrabold leading-[1.1] text-[#071538] sm:text-4xl lg:text-[2.85rem]">
              Seamless Integrations for Stronger Workflows
            </h2>
            <p className="mt-4 max-w-xl text-sm font-medium leading-7 text-[#31466d] sm:text-base">
              {isHealthcare
                ? "CareConnect Health Portal connects effortlessly with the tools and systems you already use-helping your team streamline operations, reduce manual work, and deliver better patient care."
                : `${data.portalName} connects with your current tools so teams can reduce manual work and keep workflows moving.`}
            </p>

            <div className="mt-7 max-w-lg divide-y divide-[#dce5f4]">
              {checklist.map((item, index) => (
                <PortalReveal key={item} delay={index * 0.035}>
                  <div className="flex items-center gap-4 py-4">
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-blue-50 text-[#1257d9]">
                      <Check className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <p className="text-base font-extrabold text-[#071538]">{item}</p>
                  </div>
                </PortalReveal>
              ))}
            </div>
          </div>
        </PortalReveal>

        <div className="min-w-0">
          <IntegrationMap />
        </div>
      </div>
    </section>
  );
}

function IntegrationMap() {
  return (
    <div className="mx-auto w-full max-w-[760px] xl:max-w-[820px]">
      <div className="relative hidden min-h-[560px] overflow-hidden md:block xl:min-h-[590px]">
        <svg className="pointer-events-none absolute inset-0 h-full w-full text-[#65a7ff]" viewBox="0 0 920 720" preserveAspectRatio="none" aria-hidden="true">
          <ellipse cx="470" cy="360" rx="285" ry="260" fill="none" stroke="currentColor" strokeDasharray="5 8" strokeWidth="1.5" opacity="0.55" />
          <ellipse cx="470" cy="360" rx="220" ry="200" fill="none" stroke="currentColor" strokeDasharray="5 8" strokeWidth="1.5" opacity="0.45" />
          <path d="M470 320 C410 240 320 224 225 180" fill="none" stroke="currentColor" strokeDasharray="7 8" strokeWidth="2" />
          <path d="M470 320 V154" fill="none" stroke="currentColor" strokeDasharray="7 8" strokeWidth="2" />
          <path d="M470 320 C570 245 680 220 790 175" fill="none" stroke="currentColor" strokeDasharray="7 8" strokeWidth="2" />
          <path d="M365 360 H205" fill="none" stroke="currentColor" strokeDasharray="7 8" strokeWidth="2" />
          <path d="M575 360 H760" fill="none" stroke="currentColor" strokeDasharray="7 8" strokeWidth="2" />
          <path d="M470 440 C398 518 295 568 230 630" fill="none" stroke="currentColor" strokeDasharray="7 8" strokeWidth="2" />
          <path d="M470 440 V620" fill="none" stroke="currentColor" strokeDasharray="7 8" strokeWidth="2" />
          <path d="M470 440 C550 520 662 568 760 630" fill="none" stroke="currentColor" strokeDasharray="7 8" strokeWidth="2" />
        </svg>

        <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
          <IntegrationHubCard />
        </div>

        {integrationCards.map((card, index) => (
          <PortalReveal key={card.name} delay={index * 0.03} className={cn("absolute z-20", card.className)}>
            <IntegrationCard card={card} />
          </PortalReveal>
        ))}
      </div>

      <div className="grid gap-3 md:hidden">
        <IntegrationHubCard mobile />
        <div className="grid grid-cols-2 gap-3">
          {integrationCards.map((card) => (
            <IntegrationCard key={card.name} card={card} mobile />
          ))}
        </div>
      </div>
    </div>
  );
}

function IntegrationHubCard({ mobile = false }: { mobile?: boolean }) {
  return (
    <div className={cn(
      "grid place-items-center rounded-[1.5rem] border border-[#8eb8ff] bg-white text-center shadow-[0_22px_62px_rgba(25,52,101,0.12)]",
      mobile ? "min-h-[210px] p-5" : "h-52 w-64 p-5 xl:h-56 xl:w-[17rem]",
    )}>
      <div>
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-blue-50 text-[#1257d9] xl:h-[72px] xl:w-[72px]">
          <Heart className="h-9 w-9 fill-[#1257d9]/10 xl:h-10 xl:w-10" aria-hidden="true" />
        </span>
        <h3 className="mt-3 text-xl font-extrabold text-[#071538] xl:text-2xl">CareConnect</h3>
        <p className="text-lg font-extrabold text-[#1257d9] xl:text-xl">Health Portal</p>
        <p className="mt-3 text-xs font-medium text-[#31466d] xl:text-sm">Unified. Connected. Better Care.</p>
      </div>
    </div>
  );
}

function IntegrationCard({ card, mobile = false }: { card: (typeof integrationCards)[number]; mobile?: boolean }) {
  const Icon = "icon" in card ? card.icon : undefined;

  return (
    <article className={cn(
      "grid place-items-center rounded-2xl border border-[#dce5f4] bg-white text-center shadow-[0_16px_40px_rgba(25,52,101,0.09)]",
      mobile ? "min-h-[116px] w-full p-3" : "min-h-[112px] w-[132px] p-3.5 xl:w-[142px]",
      !mobile && card.size === "large" && "w-[150px] xl:w-[160px]",
    )}>
      {Icon ? (
        <Icon className={cn(mobile ? "h-8 w-8" : "h-9 w-9", card.tone)} aria-hidden="true" />
      ) : (
        <p className={cn(mobile ? "text-2xl font-black leading-none" : "text-[1.65rem] font-black leading-none", card.tone)}>{card.brand}</p>
      )}
      <div>
        <h3 className="mt-2.5 text-xs font-extrabold text-[#071538] xl:text-sm">{card.name}</h3>
        <span className="mt-2 inline-flex rounded-lg bg-blue-50 px-2 py-1 text-[10px] font-extrabold text-[#1257d9] xl:text-[11px]">{card.tag}</span>
      </div>
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
