"use client";

import { IndustryCRMTemplate } from "./IndustryCRMTemplate";
import { educationConfig } from "./industryConfigs";

export default function EducationCRMPage() {
  return <IndustryCRMTemplate config={educationConfig} />;
}
