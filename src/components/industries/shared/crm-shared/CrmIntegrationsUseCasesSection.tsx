import { ArrowRight, Cable, CheckCircle2, FileText, Globe2, Mail, MessageCircle, WalletCards } from "lucide-react";
import type { IndustryCrmPageData } from "./industryCrmData";

const fallbackIntegrations = [
  { title: "WhatsApp Business", icon: MessageCircle },
  { title: "Email / Gmail / Outlook", icon: Mail },
  { title: "Google Calendar", icon: Cable },
  { title: "Payment Gateway", icon: WalletCards },
  { title: "Google Sheets", icon: FileText },
  { title: "Accounting Tools", icon: WalletCards },
  { title: "Customer Portal", icon: Globe2 },
  { title: "Website Forms", icon: FileText },
];

const fallbackUseCases = [
  "Lead & Opportunity Management",
  "Customer Onboarding & KYC",
  "Service & Support Management",
  "Renewals & Follow-ups",
  "Document & File Management",
  "Invoicing & Payments",
];

export default function CrmIntegrationsUseCasesSection({ data }: { data: IndustryCrmPageData }) {
  const integrations = [
    ...data.integrations.map((item) => ({ title: item.title, icon: item.icon, flow: item.flow })),
    ...fallbackIntegrations.map((item) => ({ ...item, flow: "Connected" })),
  ].slice(0, 8);
  const useCases = [
    ...data.useCases.map((item) => ({ title: item.title, description: item.description, icon: item.icon })),
    ...fallbackUseCases.map((title) => ({ title, description: "Mapped into your custom CRM workflow.", icon: CheckCircle2 })),
  ].slice(0, 6);

  return (
    <section id="crm-integrations-use-cases" className="py-6">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_22px_70px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-white/[0.04] sm:p-7 lg:p-9">
        <div className="mb-8 max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-violet-50 px-3 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-violet-700 dark:bg-violet-400/10 dark:text-violet-200">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-violet-600 text-white">08</span>
            Integrations + Use Cases
          </span>
          <h2 className="mt-5 text-3xl font-black tracking-[-0.035em] text-slate-950 dark:text-white sm:text-4xl">
            Integrations + Use Cases
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          <article className="rounded-[1.7rem] border border-slate-200 bg-slate-50/70 p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.05] sm:p-6">
            <div className="flex items-start gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-violet-600 text-white shadow-[0_16px_34px_rgba(79,70,229,0.2)]">
                <Cable className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-2xl font-black tracking-[-0.03em] text-slate-950 dark:text-white">
                  Connect With The Tools You Already Use
                </h3>
                <p className="mt-2 text-sm font-semibold leading-7 text-slate-600 dark:text-slate-300">
                  Seamless integrations to bring everything together in one ecosystem.
                </p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {integrations.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm dark:border-white/10 dark:bg-white/10">
                    <span className="mx-auto grid h-11 w-11 place-items-center rounded-2xl bg-violet-50 text-violet-700 dark:bg-violet-400/10 dark:text-violet-200">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <p className="mt-3 text-xs font-black leading-5 text-slate-800 dark:text-white">{item.title}</p>
                    <div className="mx-auto mt-2 flex w-fit items-center gap-1 text-[10px] font-black uppercase tracking-[0.1em] text-slate-400">
                      {item.flow}
                      <ArrowRight className="h-3 w-3" aria-hidden="true" />
                    </div>
                  </div>
                );
              })}
            </div>
          </article>

          <article className="rounded-[1.7rem] border border-blue-100 bg-[linear-gradient(135deg,#ffffff,#eef6ff)] p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.05] sm:p-6">
            <div className="flex items-start gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-600 text-white shadow-[0_16px_34px_rgba(37,99,235,0.2)]">
                <Globe2 className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-2xl font-black tracking-[-0.03em] text-slate-950 dark:text-white">
                  Built for Real Business Use Cases
                </h3>
                <p className="mt-2 text-sm font-semibold leading-7 text-slate-600 dark:text-slate-300">
                  Designed for your industry workflows and business operations.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {useCases.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/10">
                    <div className="flex items-start gap-3">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-700 dark:bg-blue-400/10 dark:text-blue-200">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <div>
                        <h4 className="text-sm font-black leading-5 text-slate-950 dark:text-white">{item.title}</h4>
                        <p className="mt-1 text-xs font-semibold leading-5 text-slate-600 dark:text-slate-300">{item.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
