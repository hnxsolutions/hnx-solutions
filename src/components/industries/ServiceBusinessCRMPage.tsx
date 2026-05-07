"use client";

import { IndustryCRMTemplate } from "./IndustryCRMTemplate";
import { serviceBusinessConfig } from "./industryConfigs";

export default function ServiceBusinessCRMPage() {
  return <IndustryCRMTemplate config={serviceBusinessConfig} />;
}
