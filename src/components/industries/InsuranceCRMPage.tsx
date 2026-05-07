"use client";

import { IndustryCRMTemplate } from "./IndustryCRMTemplate";
import { insuranceConfig } from "./industryConfigs";

export default function InsuranceCRMPage() {
  return <IndustryCRMTemplate config={insuranceConfig} />;
}
