"use client";

import { IndustryCRMTemplate } from "./IndustryCRMTemplate";
import { manufacturingConfig } from "./industryConfigs";

export default function ManufacturingCRMPage() {
  return <IndustryCRMTemplate config={manufacturingConfig} />;
}
