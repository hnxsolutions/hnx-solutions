import type { LucideIcon } from "lucide-react";

export type PortalRoute = {
  industrySlug: string;
  solutionSlug: string;
};

export type PortalCta = {
  label: string;
  href: string;
};

export type PortalHeroData = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: PortalCta;
  secondaryCta: PortalCta;
  trustChips: string[];
};

export type PortalProblem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type PortalLoginExperienceCard = {
  title: string;
  value: string;
  description: string;
  icon: LucideIcon;
};

export type PortalRole = {
  id: string;
  title: string;
  description: string;
  accessLevel: string;
  capabilities: string[];
  workspaceItems: string[];
};

export type PortalModule = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type PortalWorkflowStep = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type PortalDashboardMetric = {
  label: string;
  value: string;
  note: string;
};

export type PortalDashboardActivity = {
  title: string;
  status: string;
  meta: string;
};

export type PortalSecurityItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type PortalIntegrationItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type PortalAiAutomationItem = {
  title: string;
  description: string;
  trigger: string;
  icon: LucideIcon;
};

export type PortalImplementationStep = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type PortalDashboardData = {
  sidebarItems: string[];
  metrics: PortalDashboardMetric[];
  requestStatus: PortalDashboardActivity[];
  documents: PortalDashboardActivity[];
  payments: PortalDashboardActivity[];
  notifications: string[];
  tickets: PortalDashboardActivity[];
};

export type PortalLoginExperienceData = {
  profileTitle: string;
  profileSubtitle: string;
  accountStatus: string;
  latestUpdate: string;
  cards: PortalLoginExperienceCard[];
};

export type PortalPermissionMatrixRow = {
  area: string;
  user: string;
  staff: string;
  admin: string;
};

export type PortalFinalCtaData = {
  title: string;
  description: string;
  primaryCta: PortalCta;
  secondaryCta: PortalCta;
  trustPoints: string[];
};

export type IndustryPortalPageData = {
  industrySlug: string;
  industryName: string;
  portalName: string;
  eyebrow: string;
  primaryRoute: string;
  aliases: string[];
  keywords: string[];
  serviceType: string;
  hero: PortalHeroData;
  problems: PortalProblem[];
  loginExperience: PortalLoginExperienceData;
  roles: PortalRole[];
  modules: PortalModule[];
  workflowSteps: PortalWorkflowStep[];
  dashboard: PortalDashboardData;
  securityItems: PortalSecurityItem[];
  permissionMatrix: PortalPermissionMatrixRow[];
  integrations: PortalIntegrationItem[];
  aiAutomationItems: PortalAiAutomationItem[];
  implementationSteps: PortalImplementationStep[];
  finalCta: PortalFinalCtaData;
};
