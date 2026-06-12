import Link from "next/link";
import {
  ArrowRight,
  Bell,
  CheckCircle2,
  ChevronRight,
  CreditCard,
  FileText,
  LifeBuoy,
  LockKeyhole,
  UserRound,
} from "lucide-react";
import { PortalFloat, PortalReveal } from "./PortalMotion";
import type { IndustryPortalPageData } from "./portalTypes";

const accountItems = [
  { label: "Requests", icon: CheckCircle2 },
  { label: "Documents", icon: FileText },
  { label: "Payments", icon: CreditCard },
  { label: "Support", icon: LifeBuoy },
];

export default function PortalHeroSection({ data }: { data: IndustryPortalPageData }) {
  return (
    <section className="relative overflow-hidden px-5 py-8 sm:px-8 lg:px-10 xl:px-12">
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.045)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:linear-gradient(125deg,black,transparent_72%)] dark:bg-[linear-gradient(rgba(125,211,252,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(125,211,252,0.04)_1px,transparent_1px)]"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute -right-20 top-4 h-80 w-80 rounded-full bg-blue-100/70 blur-3xl dark:bg-blue-500/10" aria-hidden="true" />

      <div className="relative">
        <nav className="flex flex-wrap items-center gap-2 text-xs font-bold text-slate-500 dark:text-slate-400 sm:text-sm">
          <Link href="/industries" className="transition hover:text-blue-700 dark:hover:text-blue-300">
            Industries
          </Link>
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
          <Link
            href={`/industries/${data.industrySlug}`}
            className="transition hover:text-blue-700 dark:hover:text-blue-300"
          >
            {data.industryName}
          </Link>
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
          <span className="text-slate-900 dark:text-white">Portal</span>
        </nav>

        <div className="mt-8 grid items-center gap-10 xl:grid-cols-[0.9fr_1.1fr]">
          <PortalReveal>
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-blue-700 dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-300">
                <LockKeyhole className="h-4 w-4" aria-hidden="true" />
                {data.hero.eyebrow}
              </span>

              <h1 className="mt-6 max-w-4xl text-[clamp(2.25rem,4.25vw,4.7rem)] font-black leading-[1.03] tracking-[-0.055em] text-slate-950 dark:text-white">
                {data.hero.title}
              </h1>

              <p className="mt-5 max-w-2xl text-base font-semibold leading-8 text-slate-600 dark:text-slate-300">
                {data.hero.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {data.hero.trustChips.map((chip) => (
                  <span
                    key={chip}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/85 px-3 py-2 text-xs font-black text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-300"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 dark:text-blue-300" aria-hidden="true" />
                    {chip}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={data.hero.primaryCta.href}
                  className="inline-flex items-center justify-center gap-3 rounded-2xl bg-slate-950 px-8 py-4 text-sm font-black text-white shadow-[0_18px_44px_rgba(15,23,42,0.18)] transition hover:-translate-y-0.5 dark:bg-white dark:text-slate-950"
                >
                  {data.hero.primaryCta.label}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href={data.hero.secondaryCta.href}
                  className="inline-flex items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white/90 px-8 py-4 text-sm font-black text-blue-700 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 dark:border-white/10 dark:bg-white/[0.06] dark:text-blue-300"
                >
                  {data.hero.secondaryCta.label}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </PortalReveal>

          <PortalDashboardMockup data={data} />
        </div>
      </div>
    </section>
  );
}

function PortalDashboardMockup({ data }: { data: IndustryPortalPageData }) {
  return (
    <PortalReveal delay={0.08} y={20}>
      <div className="mx-auto w-full max-w-[760px]">
        <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-3 shadow-[0_24px_70px_rgba(15,23,42,0.16)] dark:border-white/10">
          <div className="overflow-hidden rounded-[1.5rem] bg-white dark:bg-slate-950">
            <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3 dark:border-white/10">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-2xl bg-blue-50 text-blue-700 dark:bg-blue-400/10 dark:text-blue-300">
                  <LockKeyhole className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-black text-slate-950 dark:text-white">{data.portalName}</p>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">Secure self-service access</p>
                </div>
              </div>
              <span className="hidden rounded-full bg-emerald-50 px-3 py-1 text-xs font-black text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-200 sm:inline-flex">
                Login protected
              </span>
            </div>

            <div className="grid gap-4 p-4 lg:grid-cols-[0.78fr_1.22fr]">
              <PortalFloat>
                <div className="h-full rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/[0.04]">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">My account</p>
                  <div className="mt-4 flex items-center gap-3">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-blue-700 shadow-sm dark:bg-white/10 dark:text-blue-300">
                      <UserRound className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-black text-slate-950 dark:text-white">
                        {data.loginExperience.profileTitle}
                      </p>
                      <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                        {data.loginExperience.accountStatus}
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-xs font-semibold leading-5 text-slate-600 dark:text-slate-300">
                    {data.loginExperience.profileSubtitle}
                  </p>
                  <div className="mt-4 grid gap-2">
                    {accountItems.map(({ label, icon: Icon }) => (
                      <div key={label} className="flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-xs font-black text-slate-700 shadow-sm dark:bg-white/[0.06] dark:text-slate-300">
                        <Icon className="h-3.5 w-3.5 text-blue-600 dark:text-blue-300" aria-hidden="true" />
                        {label}
                      </div>
                    ))}
                  </div>
                </div>
              </PortalFloat>

              <div className="grid gap-3 sm:grid-cols-2">
                {data.loginExperience.cards.slice(0, 6).map((card, index) => {
                  const Icon = card.icon;

                  return (
                    <PortalFloat key={card.title} delay={index * 0.04}>
                      <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/[0.05]">
                        <div className="flex items-center justify-between gap-3">
                          <span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-50 text-blue-700 dark:bg-blue-400/10 dark:text-blue-300">
                            <Icon className="h-4 w-4" aria-hidden="true" />
                          </span>
                          <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-black uppercase text-slate-500 dark:bg-white/[0.08] dark:text-slate-300">
                            {card.value}
                          </span>
                        </div>
                        <h3 className="mt-4 text-sm font-black text-slate-950 dark:text-white">{card.title}</h3>
                        <p className="mt-2 text-xs font-semibold leading-5 text-slate-500 dark:text-slate-400">
                          {card.description}
                        </p>
                      </article>
                    </PortalFloat>
                  );
                })}
              </div>
            </div>

            <div className="border-t border-slate-100 p-4 dark:border-white/10">
              <div className="flex items-center gap-3 rounded-2xl border border-blue-100 bg-blue-50/80 p-4 dark:border-blue-300/15 dark:bg-blue-400/10">
                <Bell className="h-5 w-5 shrink-0 text-blue-700 dark:text-blue-300" aria-hidden="true" />
                <p className="text-sm font-black leading-6 text-slate-800 dark:text-slate-100">
                  {data.loginExperience.latestUpdate}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PortalReveal>
  );
}
