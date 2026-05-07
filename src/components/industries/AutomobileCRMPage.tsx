"use client";

import { IndustryCRMTemplate } from "./IndustryCRMTemplate";
import { automobileConfig } from "./industryConfigs";

export default function AutomobileCRMPage() {
  return <IndustryCRMTemplate config={automobileConfig} />;
}
