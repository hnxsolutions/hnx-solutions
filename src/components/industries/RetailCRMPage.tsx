"use client";

import { IndustryCRMTemplate } from "./IndustryCRMTemplate";
import { retailConfig } from "./industryConfigs";

export default function RetailCRMPage() {
  return <IndustryCRMTemplate config={retailConfig} />;
}
