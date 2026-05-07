"use client";

import { IndustryCRMTemplate } from "./IndustryCRMTemplate";
import { realEstateConfig } from "./industryConfigs";

export default function RealEstateCRMPage() {
  return <IndustryCRMTemplate config={realEstateConfig} />;
}
