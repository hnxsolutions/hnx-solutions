"use client";

import { motion } from "framer-motion";
import { Calculator, CheckCircle2, Clock, IndianRupee, Sparkles, TrendingUp } from "lucide-react";
import { useState, type FormEvent } from "react";
import { demoIndustries, type IndustryId } from "@/components/crm-demo/demoData";
import { Button } from "@/components/ui/Button";
import {
  calculateRoi,
  formatInr,
  formatNumber,
  recommendCrmSetup,
  roiDefaults,
  roiIndustryLabels,
  roiIndustryMessages,
  type RoiInputs,
} from "@/components/roi/roiUtils";

function inputLabel(key: keyof RoiInputs) {
  const labels: Record<keyof RoiInputs, string> = {
    industryId: "Industry",
    teamSize: "Team size",
    monthlyLeads: "Monthly leads/inquiries",
    averageDealValue: "Average deal/customer value",
    missedFollowupPercentage: "Missed follow-up percentage",
    conversionRate: "Current conversion rate",
    weeklyManualHours: "Manual work hours per week",
    hourlyCost: "Average team hourly cost",
    monthlyToolCost: "Current monthly CRM/tool cost",
    numberOfUsers: "Number of users",
    monthlyCostPerUser: "Monthly cost per user of rented CRM",
    expectedUsageYears: "Expected usage years",
    monthlyAddOnCost: "Add-on/customization cost",
  };

  return labels[key];
}

export function ROICalculatorPage() {
  const [inputs, setInputs] = useState<RoiInputs>(roiDefaults.general);
  const [submitted, setSubmitted] = useState(false);
  const results = calculateRoi(inputs);
  const recommendation = recommendCrmSetup(inputs);

  function updateIndustry(industryId: IndustryId) {
    setInputs(roiDefaults[industryId]);
  }

  function updateInput(key: keyof RoiInputs, value: string) {
    const parsed = Number(value);
    setInputs((current) => ({ ...current, [key]: Number.isNaN(parsed) ? 0 : parsed }));
  }

  function handleLeadSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  const resultCards = [
    { label: "Estimated time saved per month", value: `${formatNumber(results.estimatedTimeSaved)} hrs`, icon: Clock },
    { label: "Manual work cost saved per month", value: formatInr(results.manualCostSaved), icon: IndianRupee },
    { label: "Potential recovered revenue per month", value: formatInr(results.potentialRevenueRecovered), icon: TrendingUp },
    { label: "Missed leads that may be recovered", value: formatNumber(results.recoverableLeads), icon: CheckCircle2 },
    { label: "Manual reporting hours reduced", value: `${formatNumber(results.estimatedTimeSaved)} hrs`, icon: Clock },
    { label: "Current tool cost per year", value: formatInr(results.oneYearToolCost), icon: Calculator },
    { label: "3-year rented CRM cost", value: formatInr(results.threeYearRentedCRM), icon: IndianRupee },
    { label: "5-year rented CRM cost", value: formatInr(results.fiveYearRentedCRM), icon: IndianRupee },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f8fbff] text-slate-950">
      <section className="relative pb-16 pt-28 lg:pb-24 lg:pt-32">
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.45, 0.7, 0.45] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[-12rem] top-0 h-[34rem] w-[34rem] rounded-full bg-cyan-200/70 blur-3xl"
        />
        <div className="grid-fade absolute left-1/2 top-0 h-[38rem] w-[56rem] -translate-x-1/2 opacity-60" />

        <div className="relative mx-auto w-full max-w-[min(92vw,1440px)] px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/[0.86] px-4 py-2 text-sm font-bold text-blue-700 shadow-sm">
              <Sparkles className="h-4 w-4 text-cyan-500" aria-hidden="true" />
              Rent vs own CRM value estimator
            </div>
            <h1 className="mt-6 text-balance text-4xl font-bold tracking-normal text-slate-950 sm:text-5xl lg:text-6xl">
              Custom CRM ROI Calculator
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              Estimate how much time, revenue, and operational cost your business can save by replacing scattered tools,
              manual follow-ups, spreadsheets, and rented CRM platforms with a custom-owned HNX CRM Systems.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href="#calculator" size="lg" showArrow>
                Calculate My CRM ROI
              </Button>
              <Button href="/crm-demo" variant="secondary" size="lg">
                Explore CRM Systems
              </Button>
            </div>
          </div>

          <div id="calculator" className="mt-12 grid gap-8 xl:grid-cols-[0.92fr_1.08fr]">
            <div className="rounded-[34px] border border-slate-200 bg-white p-6 shadow-[0_26px_90px_rgba(15,23,42,0.09)]">
              <div className="mb-6">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-700">Calculator form</p>
                <h2 className="mt-2 text-2xl font-bold text-slate-950">Enter your current CRM reality</h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="sm:col-span-2">
                  <span className="mb-2 block text-sm font-bold text-slate-700">Industry</span>
                  <select
                    value={inputs.industryId}
                    onChange={(event) => updateIndustry(event.target.value as IndustryId)}
                    className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-semibold outline-none focus:border-cyan-300 focus:ring-4 focus:ring-cyan-100"
                  >
                    {demoIndustries.map((industry) => (
                      <option key={industry.id} value={industry.id}>
                        {industry.name}
                      </option>
                    ))}
                  </select>
                </label>
                {[
                  "teamSize",
                  "monthlyLeads",
                  "averageDealValue",
                  "missedFollowupPercentage",
                  "conversionRate",
                  "weeklyManualHours",
                  "hourlyCost",
                  "monthlyToolCost",
                  "numberOfUsers",
                  "monthlyCostPerUser",
                  "expectedUsageYears",
                  "monthlyAddOnCost",
                ].map((key) => (
                  <label key={key}>
                    <span className="mb-2 block text-sm font-bold text-slate-700">{inputLabel(key as keyof RoiInputs)}</span>
                    <input
                      type="number"
                      value={inputs[key as keyof RoiInputs]}
                      onChange={(event) => updateInput(key as keyof RoiInputs, event.target.value)}
                      className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none focus:border-cyan-300 focus:ring-4 focus:ring-cyan-100"
                    />
                  </label>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {resultCards.map((card) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.label}
                    whileHover={{ y: -5 }}
                    className="rounded-[26px] border border-slate-200 bg-white p-5 shadow-sm"
                  >
                    <Icon className="h-5 w-5 text-blue-700" aria-hidden="true" />
                    <p className="mt-4 text-sm font-semibold leading-6 text-slate-500">{card.label}</p>
                    <p className="mt-2 text-2xl font-bold text-slate-950">{card.value}</p>
                  </motion.div>
                );
              })}
              <div className="rounded-[28px] border border-blue-100 bg-gradient-to-br from-blue-600 to-cyan-500 p-6 text-white shadow-[0_26px_90px_rgba(37,208,255,0.22)] sm:col-span-2">
                <p className="text-sm font-bold text-blue-50">Recommended CRM setup</p>
                <h3 className="mt-2 text-3xl font-bold">{recommendation.plan}</h3>
                <p className="mt-3 leading-7 text-blue-50">{roiIndustryMessages[inputs.industryId]}</p>
                <p className="mt-3 text-sm font-semibold text-blue-50">Custom build estimate after consultation.</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {recommendation.features.map((feature) => (
                    <span key={feature} className="rounded-full border border-white/15 bg-white/[0.12] px-3 py-1.5 text-xs font-bold text-blue-50">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <RentVsOwnComparison />
          <LeadCaptureCta submitted={submitted} onSubmit={handleLeadSubmit} industryId={inputs.industryId} />
        </div>
      </section>
    </main>
  );
}

function RentVsOwnComparison() {
  const renting = [
    "Monthly cost forever",
    "Per-user pricing increases as team grows",
    "Add-ons cost extra",
    "Limited customization",
    "Vendor dependency",
    "Workflow must adjust to software",
    "Long-term cost keeps increasing",
  ];
  const owning = [
    "Built around your workflow",
    "Custom modules",
    "Role-based access",
    "Permission sets",
    "Workflow automation",
    "AI assistant layer",
    "Reports and dashboards",
    "Long-term control",
    "No forced generic structure",
  ];

  return (
    <div className="mt-12 grid gap-6 lg:grid-cols-2">
      {[
        ["Renting Generic CRM", renting, "from-slate-50 to-white"],
        ["Owning HNX CRM Systems", owning, "from-cyan-50 to-blue-50"],
      ].map(([title, items, gradient]) => (
        <div key={title as string} className={`rounded-[32px] border border-slate-200 bg-gradient-to-br ${gradient as string} p-7 shadow-sm`}>
          <h2 className="text-2xl font-bold text-slate-950">{title as string}</h2>
          <div className="mt-6 space-y-3">
            {(items as string[]).map((item) => (
              <div key={item} className="flex gap-3 text-sm font-semibold leading-6 text-slate-700">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true" />
                {item}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function LeadCaptureCta({
  submitted,
  onSubmit,
  industryId,
}: {
  submitted: boolean;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  industryId: IndustryId;
}) {
  return (
    <div className="mt-12 overflow-hidden rounded-[36px] border border-blue-100 bg-[radial-gradient(circle_at_15%_20%,rgba(37,208,255,0.24),transparent_28%),linear-gradient(135deg,#eff6ff,#ffffff_55%,#dff7ff)] p-6 shadow-[0_30px_100px_rgba(37,208,255,0.16)] sm:p-8">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.26em] text-blue-700">Custom ROI report</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
            Want a More Accurate CRM ROI Report for Your Business?
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Share your business details and we will prepare a custom CRM blueprint with modules, workflows, roles,
            permission sets, reports, AI features, integrations, and estimated implementation phases.
          </p>
        </div>
        <form onSubmit={onSubmit} className="grid gap-4 rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm sm:grid-cols-2">
          {["Name", "Company", "Phone", "Email", "Team size"].map((label) => (
            <label key={label}>
              <span className="mb-2 block text-sm font-bold text-slate-700">{label}</span>
              <input
                type={label === "Email" ? "email" : label === "Phone" ? "tel" : "text"}
                placeholder={label}
                className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none focus:border-cyan-300 focus:ring-4 focus:ring-cyan-100"
              />
            </label>
          ))}
          <label>
            <span className="mb-2 block text-sm font-bold text-slate-700">Industry</span>
            <input
              value={roiIndustryLabels[industryId]}
              readOnly
              className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-semibold text-slate-600 outline-none"
            />
          </label>
          <label className="sm:col-span-2">
            <span className="mb-2 block text-sm font-bold text-slate-700">Biggest CRM problem</span>
            <textarea
              rows={4}
              placeholder="Example: rented CRM cost, missed follow-ups, manual reports, disconnected tools..."
              className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-cyan-300 focus:ring-4 focus:ring-cyan-100"
            />
          </label>
          <Button type="submit" size="lg" className="sm:col-span-2" showArrow>
            Get My Custom CRM Blueprint
          </Button>
          {submitted ? (
            <p className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-bold text-emerald-800 sm:col-span-2">
              Request captured in demo mode. We can connect this to your backend later.
            </p>
          ) : null}
        </form>
      </div>
    </div>
  );
}
