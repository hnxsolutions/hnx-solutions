import { ROICalculatorPage } from "@/components/roi/ROICalculatorPage";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "HNX CRM Systems ROI Calculator | Custom CRM Cost & Savings Estimator",
  description:
    "Calculate how much time, cost, and revenue opportunity your business can save with a custom-owned HNX CRM Systems compared to manual work and rented CRM tools.",
  path: "/roi-calculator",
  keywords: ["CRM ROI calculator", "custom CRM cost", "CRM savings estimator", "business automation ROI"],
});

export default function RoiCalculatorRoute() {
  return <ROICalculatorPage />;
}
