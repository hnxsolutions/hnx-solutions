import type { LucideIcon } from "lucide-react";

export type IndustryKey =
  | "general-business"
  | "education"
  | "healthcare"
  | "real-estate"
  | "pharma"
  | "events"
  | "it-saas"
  | "local-services";

export type GoalKey =
  | "leads"
  | "followups"
  | "team"
  | "tickets"
  | "whatsapp"
  | "revenue"
  | "ai-scoring"
  | "workflows";

export type DemoTabKey =
  | "overview"
  | "leads"
  | "pipeline"
  | "customers"
  | "tasks"
  | "tickets"
  | "workflows"
  | "roles"
  | "reports"
  | "ai"
  | "advanced"
  | "roi"
  | "build";

export type TrendDirection = "up" | "down" | "neutral";
export type LeadStatus = "Hot" | "Warm" | "Cold" | "New" | "Converted" | "Contacted";
export type Priority = "High" | "Medium" | "Low";
export type TicketStatus = "Open" | "In Progress" | "Resolved" | "Escalated";
export type RoleName = "Business Owner" | "Admin" | "Manager" | "Sales User" | "Operations User";

export type IndustryOption = {
  key: IndustryKey;
  name: string;
  tagline: string;
  description: string;
  icon: "business" | "education" | "healthcare" | "realEstate" | "pharma" | "events" | "saas" | "local";
};

export type GoalOption = {
  key: GoalKey;
  label: string;
  tab: DemoTabKey;
  Icon?: LucideIcon;
};

export type KPI = {
  label: string;
  value: string;
  change: string;
  trend: TrendDirection;
  sparkline: number[];
};

export type DemoLead = {
  id: string;
  name: string;
  company: string;
  source: string;
  status: LeadStatus;
  aiScore: number;
  assigned: string;
  value: string;
  numericValue: number;
  lastContact: string;
  need: string;
  phone: string;
  email: string;
  daysInStage: number;
  priority: Priority;
  scoreReasons: string[];
  recommendedAction: string;
  timeline: string[];
  tags: string[];
};

export type PipelineDeal = {
  id: string;
  leadId: string;
  name: string;
  value: string;
  numericValue: number;
  assigned: string;
  daysInStage: number;
  priority: Priority;
};

export type DemoTask = {
  id: string;
  title: string;
  related: string;
  priority: Priority;
  assigned: string;
  due: string;
  bucket: "Overdue" | "Due Today" | "Due This Week" | "Upcoming";
  type: "follow-up" | "internal" | "document" | "payment" | "support";
};

export type DemoTicket = {
  id: string;
  subject: string;
  customer: string;
  status: TicketStatus;
  priority: Priority;
  assigned: string;
  timeOpen: string;
};

export type DemoWorkflow = {
  id: string;
  name: string;
  active: boolean;
  trigger: string;
  condition: string;
  action: string;
  runCount: number;
};

export type ActivityItem = {
  id: string;
  text: string;
  timestamp: string;
  initials: string;
};

export type ChatQA = {
  question: string;
  answer: string;
  followUps: string[];
};

export type ReportsData = {
  leadSources: { label: string; value: number; color: string }[];
  funnel: { stage: string; count: number; dropoff: number }[];
  team: { name: string; assigned: number; closed: number }[];
  revenue: { month: string; value: number }[];
};

export type RoiDefaults = {
  teamSize: number;
  leadsPerMonth: number;
  avgDealValue: number;
  manualHours: number;
  lostDeals: number;
};

export type BlueprintSummary = {
  modules: string[];
  automations: string[];
  roles: RoleName[];
  timeline: string;
  onboarding: string;
};

export type NotificationItem = {
  id: string;
  text: string;
};

export type IndustryData = IndustryOption & {
  welcomeMessage: string;
  kpis: KPI[];
  leads: DemoLead[];
  pipelineStages: string[];
  pipelineDeals: Record<string, PipelineDeal[]>;
  customers: DemoLead[];
  tasks: DemoTask[];
  tickets: DemoTicket[];
  workflows: DemoWorkflow[];
  activityFeed: ActivityItem[];
  aiInsights: string[];
  aiChatQA: ChatQA[];
  reportsData: ReportsData;
  roiDefaults: RoiDefaults;
  blueprintSummary: BlueprintSummary;
  notifications: NotificationItem[];
  whatsappTemplate: string;
  testimonial: {
    quote: string;
    author: string;
    company: string;
  };
};
