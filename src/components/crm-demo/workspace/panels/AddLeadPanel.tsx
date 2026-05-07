"use client";

import { Loader2 } from "lucide-react";
import { useEffect, useMemo, useState, type FormEvent } from "react";
import type { DemoIndustry } from "@/components/crm-demo/demoData";
import { useWorkspace } from "@/lib/workspaceContext";
import {
  getSortedStages,
  workspaceLeadSources,
  workspaceTemperatures,
  type WorkspaceLead,
  type WorkspaceTemperature,
} from "@/lib/workspaceState";
import { WorkspaceButton, WorkspacePanel } from "@/components/crm-demo/workspace/WorkspacePrimitives";

type LeadFormState = {
  name: string;
  organization: string;
  phone: string;
  email: string;
  source: string;
  stage: string;
  owner: string;
  value: string;
  temperature: WorkspaceTemperature;
  need: string;
  note: string;
  customFields: Record<string, string>;
};

function getInitialState(lead: WorkspaceLead | null, defaultStage: string, defaultOwner: string): LeadFormState {
  return {
    name: lead?.name ?? "",
    organization: lead?.organization ?? "",
    phone: lead?.phone ?? "",
    email: lead?.email ?? "",
    source: lead?.source ?? "Website",
    stage: lead?.stage ?? defaultStage,
    owner: lead?.owner ?? defaultOwner,
    value: lead?.value ?? "",
    temperature: lead?.temperature ?? "New",
    need: lead?.need ?? "",
    note: lead?.note ?? "",
    customFields: lead?.customFields ?? {},
  };
}

export function AddLeadPanel({
  open,
  lead,
  onClose,
  industry,
  showToast,
}: {
  open: boolean;
  lead: WorkspaceLead | null;
  onClose: () => void;
  industry: DemoIndustry;
  showToast: (message: string) => void;
}) {
  const { workspace, dispatch } = useWorkspace();
  const stages = getSortedStages(workspace);
  const defaultStage = stages[0]?.name ?? industry.pipelineStages[0] ?? "New Lead";
  const defaultOwner = workspace.roles[0]?.name ?? "Sales Team";
  const [form, setForm] = useState<LeadFormState>(() => getInitialState(lead, defaultStage, defaultOwner));
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const leadFields = useMemo(() => workspace.customFields.filter((field) => field.module === "leads"), [workspace.customFields]);

  useEffect(() => {
    if (open) {
      setForm(getInitialState(lead, defaultStage, defaultOwner));
      setErrors({});
      setSubmitting(false);
    }
  }, [defaultOwner, defaultStage, lead, open]);

  function updateField<K extends keyof LeadFormState>(key: K, value: LeadFormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function updateCustomField(id: string, value: string) {
    setForm((current) => ({ ...current, customFields: { ...current.customFields, [id]: value } }));
  }

  function validate() {
    const nextErrors: Record<string, string> = {};
    if (!form.name.trim()) nextErrors.name = "Lead name is required.";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = "Enter a valid email address.";
    leadFields.forEach((field) => {
      if (field.required && !form.customFields[field.id]?.trim()) {
        nextErrors[field.id] = `${field.name} is required.`;
      }
    });
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    window.setTimeout(() => {
      const payload = {
        name: form.name.trim(),
        organization: form.organization.trim(),
        phone: form.phone.trim(),
        email: form.email.trim(),
        source: form.source,
        stage: form.stage,
        owner: form.owner.trim() || "Sales Team",
        value: form.value.trim(),
        temperature: form.temperature,
        need: form.need.trim(),
        note: form.note.trim(),
        customFields: form.customFields,
      };
      if (lead) {
        dispatch({ type: "UPDATE_LEAD", payload: { id: lead.id, updates: payload } });
        showToast(`Lead updated - ${payload.name}`);
      } else {
        dispatch({ type: "ADD_LEAD", payload });
        showToast(`Lead added - ${payload.name} from ${payload.organization || "Unknown organization"}`);
      }
      setSubmitting(false);
      onClose();
    }, 420);
  }

  return (
    <WorkspacePanel
      open={open}
      onClose={onClose}
      title={lead ? "Edit lead" : "Add lead"}
      description={`Create real ${industry.labels.leads.toLowerCase()} in your live workspace.`}
    >
      <form onSubmit={onSubmit} className="grid gap-4">
        <TextField label="Name" value={form.name} required error={errors.name} onChange={(value) => updateField("name", value)} />
        <div className="grid gap-4 sm:grid-cols-2">
          <TextField label="Organization" value={form.organization} onChange={(value) => updateField("organization", value)} />
          <TextField label="Phone" type="tel" value={form.phone} onChange={(value) => updateField("phone", value)} />
        </div>
        <TextField label="Email" type="email" value={form.email} error={errors.email} onChange={(value) => updateField("email", value)} />
        <div className="grid gap-4 sm:grid-cols-2">
          <SelectField label="Source" value={form.source} options={workspaceLeadSources} onChange={(value) => updateField("source", value)} />
          <SelectField label="Stage" value={form.stage} options={stages.map((stage) => stage.name)} onChange={(value) => updateField("stage", value)} />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <TextField label="Owner" value={form.owner} list="workspace-owner-list" onChange={(value) => updateField("owner", value)} />
          <TextField label="Value" value={form.value} placeholder="Rs. 85,000" onChange={(value) => updateField("value", value)} />
        </div>
        <datalist id="workspace-owner-list">
          {[...workspace.roles.map((role) => role.name), "Sales Team", "Manager", "Support"].map((owner) => (
            <option key={owner} value={owner} />
          ))}
        </datalist>
        <SelectField label="Temperature" value={form.temperature} options={workspaceTemperatures} onChange={(value) => updateField("temperature", value as WorkspaceTemperature)} />
        <TextField label="Need" value={form.need} onChange={(value) => updateField("need", value)} />
        <label>
          <span className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-200">Note</span>
          <textarea
            value={form.note}
            onChange={(event) => updateField("note", event.target.value)}
            rows={4}
            className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-cyan-300 focus:ring-4 focus:ring-cyan-100 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
          />
        </label>

        {leadFields.length ? (
          <div className="rounded-2xl border border-blue-100 bg-blue-50 p-4">
            <p className="text-sm font-bold text-blue-800">Custom fields</p>
            <div className="mt-4 grid gap-4">
              {leadFields.map((field) => (
                <div key={field.id}>
                  {field.type === "dropdown" ? (
                    <SelectField
                      label={`${field.name}${field.required ? " *" : ""}`}
                      value={form.customFields[field.id] ?? ""}
                      options={["", ...field.options]}
                      error={errors[field.id]}
                      onChange={(value) => updateCustomField(field.id, value)}
                    />
                  ) : (
                    <TextField
                      label={`${field.name}${field.required ? " *" : ""}`}
                      type={field.type === "number" || field.type === "currency" ? "number" : field.type === "date" ? "date" : "text"}
                      value={form.customFields[field.id] ?? ""}
                      error={errors[field.id]}
                      onChange={(value) => updateCustomField(field.id, value)}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        ) : null}

        <div className="sticky bottom-0 -mx-5 mt-2 border-t border-slate-200 bg-white px-5 py-4 dark:border-slate-800 dark:bg-slate-950">
          <WorkspaceButton type="submit" disabled={submitting} className="w-full">
            {submitting ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : null}
            {lead ? "Save lead" : "Add lead"}
          </WorkspaceButton>
        </div>
      </form>
    </WorkspacePanel>
  );
}

function TextField({
  label,
  value,
  onChange,
  type = "text",
  required = false,
  error,
  placeholder,
  list,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
  error?: string;
  placeholder?: string;
  list?: string;
}) {
  return (
    <label>
      <span className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-200">
        {label}
        {required ? " *" : ""}
      </span>
      <input
        type={type}
        value={value}
        list={list}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        className={`h-12 w-full rounded-2xl border bg-slate-50 px-4 text-sm outline-none transition focus:border-cyan-300 focus:ring-4 focus:ring-cyan-100 dark:bg-slate-900 dark:text-white ${
          error ? "border-rose-300" : "border-slate-200 dark:border-slate-700"
        }`}
      />
      {error ? <p className="mt-1 text-xs font-semibold text-rose-600">{error}</p> : null}
    </label>
  );
}

function SelectField({
  label,
  value,
  options,
  onChange,
  error,
}: {
  label: string;
  value: string;
  options: readonly string[];
  onChange: (value: string) => void;
  error?: string;
}) {
  return (
    <label>
      <span className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-200">{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={`h-12 w-full rounded-2xl border bg-slate-50 px-4 text-sm font-semibold text-slate-700 outline-none transition focus:border-cyan-300 focus:ring-4 focus:ring-cyan-100 dark:bg-slate-900 dark:text-white ${
          error ? "border-rose-300" : "border-slate-200 dark:border-slate-700"
        }`}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option || "Select option"}
          </option>
        ))}
      </select>
      {error ? <p className="mt-1 text-xs font-semibold text-rose-600">{error}</p> : null}
    </label>
  );
}

