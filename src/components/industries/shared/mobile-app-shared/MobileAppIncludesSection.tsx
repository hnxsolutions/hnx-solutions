"use client";

import type { IndustryMobileAppPageData } from "../industryMobileAppData";
import {
  MiniPhoneFrame,
  MobileAppIconBadge,
  getToneForIndex,
} from "./mobileAppSectionUtils";

export default function MobileAppIncludesSection({
  data,
}: {
  data: IndustryMobileAppPageData;
}) {
  const includes = data.includes.slice(0, 8);
  const phoneRows = data.heroVisual.cards.length
    ? data.heroVisual.cards
    : includes.slice(0, 4).map((item) => ({
        label: item.title,
        value: item.description,
        icon: item.icon,
      }));

  return (
    <section
      aria-label={`${data.industryName} mobile app includes`}
      className="relative overflow-hidden bg-white px-5 py-8 dark:bg-slate-950 sm:px-8 lg:px-10 xl:px-12"
    >
      <div className="mx-auto w-full max-w-[min(92vw,1440px)]">
        <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-white px-4 py-7 shadow-[0_14px_40px_rgba(15,23,42,0.045)] dark:border-white/10 dark:bg-white/[0.035] sm:px-6 lg:px-8 xl:px-10">
          <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-[34%] bg-[radial-gradient(circle_at_58%_42%,rgba(59,130,246,0.12),transparent_36%),radial-gradient(circle_at_62%_55%,rgba(124,58,237,0.08),transparent_42%)] lg:block" />
          <div className="pointer-events-none absolute right-8 top-10 hidden h-[22rem] w-[22rem] rounded-full bg-cyan-100/40 blur-3xl dark:bg-cyan-400/10 lg:block" />
          <div className="pointer-events-none absolute right-4 top-10 hidden h-[24rem] w-[24rem] bg-[radial-gradient(circle,rgba(59,130,246,0.08)_1.5px,transparent_1.5px)] bg-[length:18px_18px] opacity-60 lg:block" />

          <div className="relative z-10 grid gap-8 lg:grid-cols-12 lg:items-start lg:gap-8 xl:gap-10">
            <div className="min-w-0 lg:col-span-8">
              <div className="max-w-[34rem]">
                <h2 className="text-2xl font-black leading-tight tracking-[-0.025em] text-slate-950 dark:text-white sm:text-3xl lg:text-[2.25rem]">
                  Everything You Need.
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                    Built Right In.
                  </span>
                </h2>

                <p className="mt-4 max-w-[31rem] text-sm font-semibold leading-6 text-slate-600 dark:text-slate-300">
                  Powerful features that work together to deliver a complete,
                  connected, and delightful mobile app experience.
                </p>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {includes.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <article
                      key={item.title}
                      className="flex min-h-[84px] min-w-0 items-center gap-3 rounded-[1.05rem] border border-slate-200 bg-white px-4 py-4 shadow-[0_12px_28px_rgba(15,23,42,0.04)] transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[0_18px_42px_rgba(37,99,235,0.08)] dark:border-white/10 dark:bg-white/[0.045]"
                    >
                      <MobileAppIconBadge
                        icon={Icon}
                        tone={getToneForIndex(index)}
                        className="h-10 w-10 shrink-0 rounded-xl"
                      />
                      <div className="min-w-0">
                        <h3 className="truncate text-sm font-black text-slate-950 dark:text-white">
                          {item.title}
                        </h3>
                        <p className="mt-1 line-clamp-2 text-xs leading-5 text-slate-600 dark:text-slate-300">
                          {item.description}
                        </p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>

            <div className="relative z-20 mx-auto w-full max-w-[285px] self-start lg:col-span-4 lg:mx-0 lg:ml-auto lg:max-w-[300px] xl:max-w-[315px]">
              <div className="pointer-events-none absolute -inset-5 rounded-full bg-cyan-200/35 blur-3xl dark:bg-cyan-400/10" />
              <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[20rem] w-[20rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-100 dark:border-blue-300/10 lg:block" />
              <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[14rem] w-[14rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-100 dark:border-violet-300/10 lg:block" />

              <MiniPhoneFrame
                appName={data.heroVisual.appName}
                title={data.heroVisual.screenTitle}
                subtitle={data.heroVisual.screenSubtitle}
                actionLabel={data.heroVisual.actionLabel}
                rows={phoneRows}
                navItems={data.heroVisual.navItems}
                tone="blue"
                className="relative mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
