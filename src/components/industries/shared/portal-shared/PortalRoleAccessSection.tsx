"use client";

import { useState } from "react";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import {
  PortalCard,
  PortalIcon,
  PortalSection,
  PortalSectionHeader,
  cn,
} from "./portalSectionUtils";
import type { PortalRole } from "./portalTypes";

export default function PortalRoleAccessSection({
  portalName,
  roles,
}: {
  portalName: string;
  roles: PortalRole[];
}) {
  const [selectedRoleId, setSelectedRoleId] = useState(roles[0]?.id ?? "");
  const selectedRole = roles.find((role) => role.id === selectedRoleId) ?? roles[0];

  if (!selectedRole) {
    return null;
  }

  return (
    <PortalSection className="bg-slate-50/70 dark:bg-white/[0.025]">
      <PortalSectionHeader
        eyebrow="Role-Based Access"
        title="Role-Based Portal Access"
        description={`Every ${portalName.toLowerCase()} user sees a focused workspace with the right permissions, documents, requests, and updates.`}
      />

      <div className="mt-8 grid gap-5 lg:grid-cols-[320px_1fr]">
        <PortalCard className="h-fit">
          <div className="grid gap-2">
            {roles.map((role) => {
              const active = role.id === selectedRole.id;

              return (
                <button
                  key={role.id}
                  type="button"
                  onClick={() => setSelectedRoleId(role.id)}
                  className={cn(
                    "rounded-2xl border px-4 py-3 text-left transition",
                    active
                      ? "border-blue-200 bg-blue-50 text-blue-800 dark:border-blue-300/20 dark:bg-blue-400/10 dark:text-blue-200"
                      : "border-slate-200 bg-white text-slate-700 hover:border-blue-200 hover:bg-blue-50/60 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300 dark:hover:bg-white/[0.08]",
                  )}
                >
                  <span className="block text-sm font-black">{role.title}</span>
                  <span className="mt-1 block text-xs font-semibold opacity-75">
                    {role.accessLevel}
                  </span>
                </button>
              );
            })}
          </div>
        </PortalCard>

        <PortalCard className="relative overflow-hidden">
          <div
            className="pointer-events-none absolute right-0 top-0 h-56 w-56 rounded-full bg-blue-100/70 blur-3xl dark:bg-blue-500/10"
            aria-hidden="true"
          />
          <div className="relative">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-start gap-4">
                <PortalIcon icon={ShieldCheck} tone="blue" />
                <div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-slate-600 dark:bg-white/[0.08] dark:text-slate-300">
                    {selectedRole.accessLevel}
                  </span>
                  <h3 className="mt-3 text-2xl font-black text-slate-950 dark:text-white">
                    {selectedRole.title}
                  </h3>
                  <p className="mt-2 max-w-3xl text-sm font-semibold leading-7 text-slate-600 dark:text-slate-300">
                    {selectedRole.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {selectedRole.capabilities.map((capability) => (
                <span
                  key={capability}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-black text-slate-700 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-300"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 dark:text-blue-300" aria-hidden="true" />
                  {capability}
                </span>
              ))}
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {selectedRole.workspaceItems.map((item, index) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/[0.04]"
                >
                  <span className="grid h-8 w-8 place-items-center rounded-xl bg-blue-50 text-xs font-black text-blue-700 dark:bg-blue-400/10 dark:text-blue-300">
                    {index + 1}
                  </span>
                  <p className="mt-3 text-sm font-black text-slate-900 dark:text-white">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </PortalCard>
      </div>
    </PortalSection>
  );
}
