"use client";

import { Check, Lock, Plus } from "lucide-react";
import { useMemo, useState, type FormEvent } from "react";
import {
  createPermissionTemplate,
  roleTemplateNames,
  workspacePermissionActions,
  workspacePermissionModules,
  workspaceRoleColors,
  type RoleTemplateName,
  type WorkspaceRole,
} from "@/lib/workspaceState";
import { useWorkspace } from "@/lib/workspaceContext";
import { WorkspaceButton, WorkspaceBadge } from "@/components/crm-demo/workspace/WorkspacePrimitives";

export function RoleBuilderPanel({
  selectedRole,
  showToast,
}: {
  selectedRole: WorkspaceRole | null;
  showToast: (message: string) => void;
}) {
  const { dispatch, setSelectedRoleId, selectedRoleId } = useWorkspace();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [template, setTemplate] = useState<RoleTemplateName>("Sales User");
  const [color, setColor] = useState(workspaceRoleColors[0]);
  const previewPermissions = useMemo(() => createPermissionTemplate(template), [template]);
  const isOwnerTemplate = selectedRole?.name.toLowerCase().includes("owner") ?? false;

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!name.trim()) return;
    dispatch({
      type: "CREATE_ROLE",
      payload: {
        name: name.trim(),
        description: description.trim() || `${template} access template.`,
        color,
        permissions: previewPermissions,
      },
    });
    showToast(`Role created - ${name.trim()}`);
    setName("");
    setDescription("");
    setTemplate("Sales User");
  }

  return (
    <div className="grid gap-5 xl:grid-cols-[0.9fr_1.1fr]">
      <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950">
        <h3 className="text-lg font-bold text-slate-950 dark:text-white">Create New Role</h3>
        <form onSubmit={submit} className="mt-4 grid gap-4">
          <label>
            <span className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-200">Role name</span>
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none focus:border-cyan-300 focus:ring-4 focus:ring-cyan-100 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
              placeholder="Sales Executive"
            />
          </label>
          <label>
            <span className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-200">Description</span>
            <textarea
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              rows={3}
              className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-cyan-300 focus:ring-4 focus:ring-cyan-100 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
            />
          </label>
          <label>
            <span className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-200">Base template</span>
            <select
              value={template}
              onChange={(event) => setTemplate(event.target.value as RoleTemplateName)}
              className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-bold text-slate-700 outline-none focus:border-cyan-300 focus:ring-4 focus:ring-cyan-100 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
            >
              {roleTemplateNames.map((item) => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>
          </label>
          <div>
            <span className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-200">Color</span>
            <div className="flex flex-wrap gap-2">
              {workspaceRoleColors.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setColor(item)}
                  className={`h-9 w-9 rounded-full border-4 ${color === item ? "border-slate-900" : "border-white"}`}
                  style={{ backgroundColor: item }}
                  aria-label={`Use role color ${item}`}
                />
              ))}
            </div>
          </div>
          <WorkspaceButton type="submit" disabled={!name.trim()}>
            <Plus className="h-4 w-4" aria-hidden="true" />
            Create Role
          </WorkspaceButton>
        </form>
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950">
        <div className="flex flex-col gap-3 border-b border-slate-200 p-5 dark:border-slate-800 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-950 dark:text-white">
              {selectedRole ? `Permission matrix: ${selectedRole.name}` : "Select a role"}
            </h3>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Toggle each permission to test real access design.</p>
          </div>
          {selectedRole ? (
            <div className="flex flex-wrap gap-2">
              <WorkspaceButton
                variant={selectedRoleId === selectedRole.id ? "secondary" : "ghost"}
                onClick={() => {
                  setSelectedRoleId(selectedRole.id);
                  showToast(`Testing workspace as ${selectedRole.name}.`);
                }}
              >
                Test this role
              </WorkspaceButton>
              <WorkspaceButton
                variant="danger"
                onClick={() => {
                  if (window.confirm(`Delete ${selectedRole.name}?`)) {
                    dispatch({ type: "DELETE_ROLE", payload: { roleId: selectedRole.id } });
                    showToast(`${selectedRole.name} deleted. Undo is available.`);
                  }
                }}
              >
                Delete role
              </WorkspaceButton>
            </div>
          ) : null}
        </div>
        {selectedRole ? (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[840px] border-collapse text-sm">
              <thead className="bg-slate-50 text-xs font-bold uppercase tracking-[0.15em] text-slate-500 dark:bg-slate-900">
                <tr>
                  <th className="px-4 py-4 text-left">Module</th>
                  {workspacePermissionActions.map((action) => (
                    <th key={action} className="px-4 py-4 text-center">{action}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {workspacePermissionModules.map((moduleName) => (
                  <tr key={moduleName} className="hover:bg-blue-50/50 dark:hover:bg-slate-900">
                    <td className="px-4 py-4 font-bold text-slate-800 dark:text-slate-200">{moduleName}</td>
                    {workspacePermissionActions.map((action) => {
                      const checked = selectedRole.permissions[moduleName]?.[action] ?? false;
                      return (
                        <td key={`${moduleName}-${action}`} className="px-4 py-4 text-center">
                          <button
                            type="button"
                            disabled={isOwnerTemplate}
                            onClick={() =>
                              dispatch({
                                type: "UPDATE_ROLE_PERMISSION",
                                payload: { roleId: selectedRole.id, module: moduleName, action, value: !checked },
                              })
                            }
                            className={`mx-auto grid h-8 w-8 place-items-center rounded-full transition ${
                              checked ? "bg-emerald-50 text-emerald-700" : "bg-slate-100 text-slate-400"
                            } ${isOwnerTemplate ? "cursor-not-allowed opacity-70" : "hover:ring-4 hover:ring-blue-100"}`}
                            aria-label={`${checked ? "Disable" : "Enable"} ${action} for ${moduleName}`}
                          >
                            {checked ? <Check className="h-4 w-4" aria-hidden="true" /> : <Lock className="h-4 w-4" aria-hidden="true" />}
                          </button>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-8 text-center">
            <WorkspaceBadge tone="slate">No role selected</WorkspaceBadge>
            <p className="mt-3 text-sm font-semibold text-slate-500">Create or select a role to edit permissions.</p>
          </div>
        )}
      </div>
    </div>
  );
}
