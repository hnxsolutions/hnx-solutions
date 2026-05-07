"use client";

import { motion } from "framer-motion";
import { FileText, Plus, Settings2 } from "lucide-react";
import { useState, type FormEvent } from "react";
import type { DemoIndustry } from "@/components/crm-demo/demoData";
import { useWorkspace } from "@/lib/workspaceContext";
import { WorkspaceSummaryCard } from "@/components/crm-demo/workspace/panels/WorkspaceSummaryCard";
import {
  WorkspaceBadge,
  WorkspaceButton,
  WorkspaceInlineHint,
  WorkspaceSectionHeader,
} from "@/components/crm-demo/workspace/WorkspacePrimitives";
import type { WorkspaceCustomFieldType } from "@/lib/workspaceState";

const fieldTypes: WorkspaceCustomFieldType[] = ["text", "number", "dropdown", "date", "user", "status", "currency"];
const modules = ["leads", "tasks", "records", "tickets"];

export function WorkspaceBuildTab({ industry, showToast }: { industry: DemoIndustry; showToast: (message: string) => void }) {
  const { workspace, dispatch } = useWorkspace();
  const [fieldName, setFieldName] = useState("Budget range");
  const [moduleName, setModuleName] = useState("leads");
  const [fieldType, setFieldType] = useState<WorkspaceCustomFieldType>("dropdown");
  const [options, setOptions] = useState("Below Rs. 1L, Rs. 1L - Rs. 5L, Above Rs. 5L");
  const [required, setRequired] = useState(false);

  function submitField(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!fieldName.trim()) return;
    dispatch({
      type: "ADD_CUSTOM_FIELD",
      payload: {
        name: fieldName.trim(),
        module: moduleName,
        type: fieldType,
        options: fieldType === "dropdown" ? options.split(",").map((item) => item.trim()).filter(Boolean) : [],
        required,
      },
    });
    showToast(`Custom field added - ${fieldName.trim()}`);
    setFieldName("");
  }

  return (
    <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.34 }} className="space-y-6">
      <WorkspaceSectionHeader
        eyebrow="Build CRM"
        title="Build your live CRM blueprint"
        description="Create custom fields and generate a summary from the workspace you built."
      />

      <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950">
          <div className="flex items-center gap-3">
            <Settings2 className="h-5 w-5 text-blue-700" aria-hidden="true" />
            <h3 className="text-lg font-bold text-slate-950 dark:text-white">Custom Field Builder</h3>
          </div>
          <p className="mt-2 text-sm leading-6 text-slate-500">Lead fields appear immediately inside the Add/Edit Lead form.</p>
          <form onSubmit={submitField} className="mt-5 grid gap-4">
            <label>
              <span className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-200">Field name</span>
              <input value={fieldName} onChange={(event) => setFieldName(event.target.value)} className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none focus:border-cyan-300 focus:ring-4 focus:ring-cyan-100 dark:border-slate-700 dark:bg-slate-900 dark:text-white" />
            </label>
            <div className="grid gap-4 sm:grid-cols-2">
              <Select label="Module" value={moduleName} options={modules} onChange={setModuleName} />
              <Select label="Type" value={fieldType} options={fieldTypes} onChange={(value) => setFieldType(value as WorkspaceCustomFieldType)} />
            </div>
            {fieldType === "dropdown" ? (
              <label>
                <span className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-200">Dropdown options</span>
                <input value={options} onChange={(event) => setOptions(event.target.value)} className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none focus:border-cyan-300 focus:ring-4 focus:ring-cyan-100 dark:border-slate-700 dark:bg-slate-900 dark:text-white" />
              </label>
            ) : null}
            <label className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3 text-sm font-bold text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
              <input type="checkbox" checked={required} onChange={(event) => setRequired(event.target.checked)} className="h-4 w-4 accent-blue-600" />
              Required field
            </label>
            <WorkspaceButton type="submit" disabled={!fieldName.trim()}>
              <Plus className="h-4 w-4" aria-hidden="true" />
              Save Field
            </WorkspaceButton>
          </form>
          <div className="mt-5 flex flex-wrap gap-2">
            {workspace.customFields.map((field) => (
              <WorkspaceBadge key={field.id} tone={field.module === "leads" ? "blue" : "slate"}>{field.name} · {field.module}</WorkspaceBadge>
            ))}
          </div>
        </div>

        <div className="rounded-[28px] border border-blue-100 bg-blue-50 p-5">
          <div className="flex items-center gap-3">
            <FileText className="h-5 w-5 text-blue-700" aria-hidden="true" />
            <h3 className="text-lg font-bold text-blue-950">My Workspace Summary</h3>
          </div>
          <p className="mt-3 text-sm font-semibold leading-6 text-blue-800">
            The summary unlocks after you create at least 1 lead and 1 workflow. It uses your live workspace data, not static demo copy.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              ["Leads", workspace.leads.length],
              ["Workflows", workspace.workflows.length],
              ["Roles", workspace.roles.length],
              ["Custom fields", workspace.customFields.length],
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-blue-100 bg-white p-4">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">{label}</p>
                <p className="mt-2 text-2xl font-bold text-slate-950">{value}</p>
              </div>
            ))}
          </div>
          {workspace.leads.length < 1 || workspace.workflows.length < 1 ? (
            <div className="mt-5">
              <WorkspaceInlineHint>Add one lead and one workflow to unlock the professional CRM summary.</WorkspaceInlineHint>
            </div>
          ) : null}
        </div>
      </div>

      {workspace.leads.length >= 1 && workspace.workflows.length >= 1 ? (
        <WorkspaceSummaryCard industry={industry} showToast={showToast} />
      ) : null}
    </motion.div>
  );
}

function Select({ label, value, options, onChange }: { label: string; value: string; options: readonly string[]; onChange: (value: string) => void }) {
  return (
    <label>
      <span className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-200">{label}</span>
      <select value={value} onChange={(event) => onChange(event.target.value)} className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-bold text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-white">
        {options.map((option) => <option key={option} value={option}>{option}</option>)}
      </select>
    </label>
  );
}

