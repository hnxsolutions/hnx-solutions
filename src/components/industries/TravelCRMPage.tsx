"use client";

import { IndustryCRMTemplate } from "./IndustryCRMTemplate";
import { travelConfig } from "./industryConfigs";

export default function TravelCRMPage() {
  return <IndustryCRMTemplate config={travelConfig} />;
}
