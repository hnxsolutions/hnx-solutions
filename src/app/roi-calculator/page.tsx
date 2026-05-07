import type { Metadata } from "next";
import { ROICalculatorPage } from "@/components/roi/ROICalculatorPage";

export const metadata: Metadata = {
  title: "HNX CRM Systems ROI Calculator | Custom CRM Cost & Savings Estimator",
  description:
    "Calculate how much time, cost, and revenue opportunity your business can save with a custom-owned HNX CRM Systems compared to manual work and rented CRM tools.",
};

export default function RoiCalculatorRoute() {
  return <ROICalculatorPage />;
}
