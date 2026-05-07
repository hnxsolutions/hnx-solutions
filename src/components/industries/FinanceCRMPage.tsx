"use client";

import { IndustryCRMTemplate } from "./IndustryCRMTemplate";
import { financeConfig } from "./industryConfigs";

export default function FinanceCRMPage() {
  return <IndustryCRMTemplate config={financeConfig} />;
}
