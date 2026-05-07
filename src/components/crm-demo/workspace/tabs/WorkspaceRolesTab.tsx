"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { useWorkspace } from "@/lib/workspaceContext";
import { createPermissionTemplate, getPermissionSummary, type WorkspaceRole } from "@/lib/workspaceState";
import { RoleBuilderPanel } from "@/components/crm-demo/workspace/panels/RoleBuilderPanel";
import {
  WorkspaceBadge,
  WorkspaceButton,
  WorkspaceEmptyState,
  WorkspaceSectionHeader,
} from "@/components/crm-demo/workspace/WorkspacePrimitives";

export function WorkspaceRolesTab({ showToast }: { showToast: (message: string) => void }) {
  const { workspace, dispatch, setSelectedRoleId, selectedRoleId } = useWorkspace();
  const [selectedRole, setSelectedRole] = useState<WorkspaceRole | null>(workspace.roles[0] ?? null);

  useEffect(() => {
    if (selectedRole && !workspace.roles.some((role) => role.id === selectedRole.id)) {
      setSelectedRole(workspace.roles[0] ?? null);
    } else if (!selectedRole && workspace.roles[0]) {
      setSelectedRole(workspace.roles[0]);
    }
  }, [selectedRole, workspace.roles]);

  if (!workspace.roles.length) {
    return (
      <>
        <WorkspaceSectionHeader
          eyebrow="Live access control"
          title="Roles & Permissions"
          description="Build roles to control exactly who can see and do what in your CRM."
        />
        <WorkspaceEmptyState
          icon={<ShieldCheck className="h-6 w-6" aria-hidden="true" />}
          title="No custom roles yet."
          description="Create your first role and test how locked tabs and restricted actions feel."
          primaryLabel="Use Standard Roles"
          secondaryLabel="Create First Role"
          onPrimary={() => {
            dispatch({
              type: "CREATE_ROLE",
              payload: {
                name: "Sales Executive",
                description: "Can create leads, update pipeline, and manage assigned tasks.",
                color: "#2563eb",
                permissions: createPermissionTemplate("Sales User"),
              },
            });
            showToast("Standard role created. Edit permissions next.");
          }}
          onSecondary={() => showToast("Use the role form below to create a custom role.")}
        />
        <div className="mt-6">
          <RoleBuilderPanel selectedRole={selectedRole} showToast={showToast} />
        </div>
      </>
    );
  }

  return (
    <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.34 }}>
      <WorkspaceSectionHeader
        eyebrow="Live access control"
        title="Roles & Permissions"
        description="Select a role, edit its matrix, and test the workspace from that role's perspective."
      />

      <div className="mb-5 grid gap-4 lg:grid-cols-3">
        {workspace.roles.map((role) => (
          <div
            key={role.id}
            className={`rounded-[24px] border bg-white p-5 text-left shadow-sm transition hover:-translate-y-0.5 dark:bg-slate-950 ${
              selectedRole?.id === role.id ? "border-blue-300 ring-2 ring-blue-100" : "border-slate-200 dark:border-slate-800"
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <span className="h-4 w-4 rounded-full" style={{ backgroundColor: role.color }} />
              {selectedRoleId === role.id ? <WorkspaceBadge tone="amber">Testing</WorkspaceBadge> : <WorkspaceBadge>Yours</WorkspaceBadge>}
            </div>
            <h3 className="mt-4 font-bold text-slate-950 dark:text-white">{role.name}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{role.description}</p>
            <p className="mt-3 text-xs font-bold text-blue-700">{getPermissionSummary(role)}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <WorkspaceButton
                variant="secondary"
                onClick={() => {
                  setSelectedRole(role);
                }}
              >
                Edit permissions
              </WorkspaceButton>
              <WorkspaceButton
                variant={selectedRoleId === role.id ? "ghost" : "secondary"}
                onClick={() => {
                  setSelectedRoleId(role.id);
                  showToast(`Testing workspace as ${role.name}.`);
                }}
              >
                Test as this role
              </WorkspaceButton>
            </div>
          </div>
        ))}
      </div>

      <RoleBuilderPanel selectedRole={selectedRole} showToast={showToast} />
    </motion.div>
  );
}
