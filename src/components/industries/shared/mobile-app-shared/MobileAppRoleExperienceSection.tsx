"use client";

import type { LucideIcon } from "lucide-react";
import type { IndustryMobileAppPageData } from "./industryMobileAppData";
import { MobileAppSectionShell } from "./mobileAppSectionUtils";

type RoleTone = {
  iconBg: string;
  iconText: string;
  iconBorder: string;
};

const roleTones: RoleTone[] = [
  {
    iconBg: "bg-blue-50",
    iconText: "text-blue-600",
    iconBorder: "border-blue-100",
  },
  {
    iconBg: "bg-emerald-50",
    iconText: "text-emerald-600",
    iconBorder: "border-emerald-100",
  },
  {
    iconBg: "bg-violet-50",
    iconText: "text-violet-600",
    iconBorder: "border-violet-100",
  },
  {
    iconBg: "bg-orange-50",
    iconText: "text-orange-600",
    iconBorder: "border-orange-100",
  },
];

function RoleIcon({
  icon: Icon,
  tone,
}: {
  icon: LucideIcon;
  tone: RoleTone;
}) {
  return (
    <div
      className={[
        "flex h-14 w-14 shrink-0 items-center justify-center rounded-full border",
        tone.iconBg,
        tone.iconBorder,
      ].join(" ")}
    >
      <Icon className={["h-6 w-6", tone.iconText].join(" ")} />
    </div>
  );
}

export default function MobileAppRoleExperienceSection({
  data,
}: {
  data: IndustryMobileAppPageData;
}) {
  const roles = data.roleExperiences.slice(0, 4);

  return (
    <MobileAppSectionShell className="border-0 bg-slate-50/70 py-6 dark:bg-slate-950 sm:py-8 lg:py-8 xl:py-8">
      <section className="relative overflow-hidden rounded-[2rem] bg-white px-6 py-8 shadow-[0_18px_48px_rgba(15,23,42,0.055)] dark:bg-white/[0.035] sm:px-8 lg:px-10 lg:py-9">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-black leading-[1.05] tracking-[-0.035em] text-slate-950 dark:text-white sm:text-4xl lg:text-5xl xl:text-6xl">
            One App. Multiple
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500 bg-clip-text text-transparent">
              Experiences.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
            {data.roleExperiencesDescription}
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {roles.map((role, index) => {
            const tone = roleTones[index % roleTones.length];

            return (
              <article
                key={role.id}
                className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-[0_18px_42px_rgba(15,23,42,0.055)] transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_24px_56px_rgba(59,130,246,0.13)] dark:border-white/10 dark:bg-white/[0.045]"
              >
                <div className="flex items-center gap-4">
                  <RoleIcon icon={role.icon} tone={tone} />

                  <h3 className="text-xl font-black leading-7 tracking-tight text-slate-950 dark:text-white">
                    {role.title}
                  </h3>
                </div>

                <ul className="mt-6 list-disc space-y-1.5 pl-5 text-[0.96rem] font-normal leading-6 text-slate-700 marker:text-[0.85rem] marker:text-slate-950 dark:text-slate-300 dark:marker:text-white">
                  {role.capabilities.slice(0, 5).map((capability) => (
                    <li key={capability} className="pl-1">
                      {capability}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>
    </MobileAppSectionShell>
  );
}
