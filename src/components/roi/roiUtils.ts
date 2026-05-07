import type { IndustryId } from "@/components/crm-demo/demoData";

export type RoiInputs = {
  industryId: IndustryId;
  teamSize: number;
  monthlyLeads: number;
  averageDealValue: number;
  missedFollowupPercentage: number;
  conversionRate: number;
  weeklyManualHours: number;
  hourlyCost: number;
  monthlyToolCost: number;
  numberOfUsers: number;
  monthlyCostPerUser: number;
  expectedUsageYears: number;
  monthlyAddOnCost: number;
};

export const roiIndustryLabels: Record<IndustryId, string> = {
  general: "General Business",
  education: "Education",
  healthcare: "Healthcare",
  pharma: "Pharma / Inventory",
  realEstate: "Real Estate",
  events: "Events & Ticketing",
  saas: "IT & SaaS",
  localServices: "Local Services",
};

export const roiIndustryMessages: Record<IndustryId, string> = {
  general:
    "Your team can manage leads, customers, follow-ups, tasks, reports, automation, and AI insights from one system.",
  education:
    "Your institute can improve admissions follow-ups, document reminders, fee follow-ups, and counsellor productivity.",
  healthcare:
    "Your healthcare team can reduce missed appointments, improve patient follow-ups, track reports, and manage billing reminders.",
  pharma:
    "Your pharma business can reduce stock errors, automate billing-to-inventory updates, improve low-stock alerts, and strengthen payment follow-ups.",
  realEstate:
    "Your sales team can improve site visit follow-ups, agent assignment, buyer tracking, and deal movement.",
  events:
    "Your team can track ticketing, platform-wise revenue, vendor tasks, and event follow-ups.",
  saas:
    "Your team can manage demo requests, trials, onboarding, renewals, support tickets, and churn-risk accounts.",
  localServices:
    "Your team can manage bookings, staff assignment, payments, feedback, and repeat follow-ups.",
};

export const roiDefaults: Record<IndustryId, RoiInputs> = {
  general: {
    industryId: "general",
    teamSize: 12,
    monthlyLeads: 248,
    averageDealValue: 250000,
    missedFollowupPercentage: 15,
    conversionRate: 8,
    weeklyManualHours: 42,
    hourlyCost: 450,
    monthlyToolCost: 18000,
    numberOfUsers: 12,
    monthlyCostPerUser: 1800,
    expectedUsageYears: 3,
    monthlyAddOnCost: 6000,
  },
  education: {
    industryId: "education",
    teamSize: 9,
    monthlyLeads: 520,
    averageDealValue: 85000,
    missedFollowupPercentage: 18,
    conversionRate: 10,
    weeklyManualHours: 56,
    hourlyCost: 350,
    monthlyToolCost: 22000,
    numberOfUsers: 9,
    monthlyCostPerUser: 1600,
    expectedUsageYears: 3,
    monthlyAddOnCost: 5000,
  },
  healthcare: {
    industryId: "healthcare",
    teamSize: 16,
    monthlyLeads: 312,
    averageDealValue: 12000,
    missedFollowupPercentage: 12,
    conversionRate: 18,
    weeklyManualHours: 48,
    hourlyCost: 420,
    monthlyToolCost: 26000,
    numberOfUsers: 16,
    monthlyCostPerUser: 1700,
    expectedUsageYears: 3,
    monthlyAddOnCost: 7000,
  },
  realEstate: {
    industryId: "realEstate",
    teamSize: 18,
    monthlyLeads: 410,
    averageDealValue: 150000,
    missedFollowupPercentage: 20,
    conversionRate: 5,
    weeklyManualHours: 60,
    hourlyCost: 500,
    monthlyToolCost: 35000,
    numberOfUsers: 18,
    monthlyCostPerUser: 2200,
    expectedUsageYears: 3,
    monthlyAddOnCost: 9000,
  },
  pharma: {
    industryId: "pharma",
    teamSize: 22,
    monthlyLeads: 742,
    averageDealValue: 42000,
    missedFollowupPercentage: 10,
    conversionRate: 12,
    weeklyManualHours: 72,
    hourlyCost: 380,
    monthlyToolCost: 32000,
    numberOfUsers: 22,
    monthlyCostPerUser: 1800,
    expectedUsageYears: 3,
    monthlyAddOnCost: 10000,
  },
  events: {
    industryId: "events",
    teamSize: 14,
    monthlyLeads: 260,
    averageDealValue: 85000,
    missedFollowupPercentage: 16,
    conversionRate: 9,
    weeklyManualHours: 46,
    hourlyCost: 450,
    monthlyToolCost: 24000,
    numberOfUsers: 14,
    monthlyCostPerUser: 1700,
    expectedUsageYears: 3,
    monthlyAddOnCost: 6500,
  },
  saas: {
    industryId: "saas",
    teamSize: 20,
    monthlyLeads: 164,
    averageDealValue: 140000,
    missedFollowupPercentage: 14,
    conversionRate: 11,
    weeklyManualHours: 50,
    hourlyCost: 650,
    monthlyToolCost: 42000,
    numberOfUsers: 20,
    monthlyCostPerUser: 2400,
    expectedUsageYears: 3,
    monthlyAddOnCost: 12000,
  },
  localServices: {
    industryId: "localServices",
    teamSize: 10,
    monthlyLeads: 236,
    averageDealValue: 6500,
    missedFollowupPercentage: 18,
    conversionRate: 16,
    weeklyManualHours: 38,
    hourlyCost: 280,
    monthlyToolCost: 12000,
    numberOfUsers: 10,
    monthlyCostPerUser: 1200,
    expectedUsageYears: 3,
    monthlyAddOnCost: 3500,
  },
};

export function percentToDecimal(value: number) {
  return value > 1 ? value / 100 : value;
}

export function calculateRoi(inputs: RoiInputs) {
  const missedFollowupRate = percentToDecimal(inputs.missedFollowupPercentage);
  const conversionRate = percentToDecimal(inputs.conversionRate);
  const monthlyManualHours = inputs.weeklyManualHours * 4;
  const estimatedTimeSaved = monthlyManualHours * 0.5;
  const manualCostSaved = estimatedTimeSaved * inputs.hourlyCost;
  const missedLeads = inputs.monthlyLeads * missedFollowupRate;
  const recoverableLeads = missedLeads * 0.25;
  const potentialRevenueRecovered = recoverableLeads * conversionRate * inputs.averageDealValue;
  const oneYearToolCost = inputs.monthlyToolCost * 12;
  const threeYearToolCost = inputs.monthlyToolCost * 36;
  const fiveYearToolCost = inputs.monthlyToolCost * 60;
  const monthlyRentedCRMEstimate = inputs.numberOfUsers * inputs.monthlyCostPerUser + inputs.monthlyAddOnCost;
  const oneYearRentedCRM = monthlyRentedCRMEstimate * 12;
  const threeYearRentedCRM = monthlyRentedCRMEstimate * 36;
  const fiveYearRentedCRM = monthlyRentedCRMEstimate * 60;
  const expectedUsageCost = monthlyRentedCRMEstimate * 12 * inputs.expectedUsageYears;

  return {
    monthlyManualHours,
    estimatedTimeSaved,
    manualCostSaved,
    missedLeads,
    recoverableLeads,
    potentialRevenueRecovered,
    oneYearToolCost,
    threeYearToolCost,
    fiveYearToolCost,
    monthlyRentedCRMEstimate,
    oneYearRentedCRM,
    threeYearRentedCRM,
    fiveYearRentedCRM,
    expectedUsageCost,
  };
}

export function recommendCrmSetup(inputs: RoiInputs) {
  const highManualWork = inputs.weeklyManualHours >= 60;
  const highMissedRate = percentToDecimal(inputs.missedFollowupPercentage) >= 0.18;

  if (inputs.teamSize > 50) {
    return {
      plan: "Enterprise Custom CRM",
      features: ["Advanced permissions", "Integrations", "Multi-branch support", "Custom workflows", "AI layer", "Scalable architecture"],
    };
  }

  if (inputs.monthlyLeads > 500 || highManualWork || highMissedRate) {
    return {
      plan: "AI-Powered CRM",
      features: ["AI lead scoring", "Smart suggestions", "Message writing", "Report explanations", "Automation insights"],
    };
  }

  if (inputs.teamSize <= 5 && inputs.monthlyLeads <= 100) {
    return {
      plan: "Starter CRM",
      features: ["Lead management", "Customer database", "Basic dashboard", "Follow-up reminders"],
    };
  }

  return {
    plan: "Growth CRM",
    features: ["Custom fields", "Roles", "Permission sets", "Workflow automation", "Reports", "Ticketing"],
  };
}

export function formatInr(value: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(Math.round(value));
}

export function formatNumber(value: number) {
  return new Intl.NumberFormat("en-IN", { maximumFractionDigits: 1 }).format(value);
}
