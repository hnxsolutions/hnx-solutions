export type CrmSolutionSeoItem = {
  slug: string;
  label: string;
  href: string;
  title: string;
  description: string;
  keywords: string[];
};

export const crmSolutionSeoItems: CrmSolutionSeoItem[] = [
  {
    slug: "business-os",
    label: "Business OS",
    href: "/solutions/crm/business-os",
    title: "Business OS CRM Solution | HNX Solutions",
    description:
      "Build one owned business operating system for leads, customers, tasks, workflows, permissions, dashboards, and team visibility.",
    keywords: ["business OS", "custom CRM", "business operating system", "HNX CRM"],
  },
  {
    slug: "crmcore",
    label: "CRM Core",
    href: "/solutions/crm/crmcore",
    title: "CRM Core Solution | Leads, Deals, Customers & Follow-ups",
    description:
      "Manage leads, deals, customers, tasks, follow-ups, customer timelines, and sales pipelines inside a custom CRM core built around your workflow.",
    keywords: ["CRM core", "lead management", "sales pipeline", "customer CRM"],
  },
  {
    slug: "admin-control-room",
    label: "Admin Control Room",
    href: "/solutions/crm/admin-control-room",
    title: "CRM Admin Control Room | Roles, Fields & Permissions",
    description:
      "Control CRM users, roles, permissions, custom fields, pipelines, workflows, approval rules, and admin settings from one secure control room.",
    keywords: ["CRM admin", "role based access", "CRM permissions", "custom CRM admin"],
  },
  {
    slug: "workflow-engine",
    label: "Workflow Engine",
    href: "/solutions/crm/workflow-engine",
    title: "CRM Workflow Engine | Automation, Reminders & Approvals",
    description:
      "Automate CRM assignments, reminders, approvals, escalations, follow-ups, notifications, and repeat business workflows with HNX.",
    keywords: ["CRM workflow automation", "workflow engine", "CRM reminders", "approval automation"],
  },
  {
    slug: "ai-intelligence",
    label: "AI Intelligence",
    href: "/solutions/crm/ai-intelligence",
    title: "CRM AI Intelligence | Lead Scoring, Insights & Next Actions",
    description:
      "Add AI lead scoring, smart insights, next-best actions, customer summaries, business reports, and automation intelligence to your CRM.",
    keywords: ["CRM AI", "lead scoring", "AI insights", "AI CRM automation"],
  },
  {
    slug: "dashboards-reports",
    label: "Dashboards & Reports",
    href: "/solutions/crm/dashboards-reports",
    title: "CRM Dashboards & Reports | Sales, Revenue & Team Visibility",
    description:
      "Track CRM revenue, conversions, follow-ups, team performance, pipeline health, customer activity, and business KPIs with live dashboards.",
    keywords: ["CRM dashboards", "CRM reports", "sales reporting", "business KPI dashboards"],
  },
];

export function getCrmSolutionSeo(slug: string) {
  return crmSolutionSeoItems.find((item) => item.slug === slug) ?? crmSolutionSeoItems[0];
}
