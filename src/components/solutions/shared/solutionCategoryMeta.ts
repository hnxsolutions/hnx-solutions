import type { SolutionCategoryId, SolutionIconName } from "@/data/solutions/types";

export type SolutionCategoryMeta = {
  id: SolutionCategoryId;
  title: string;
  subtitle: string;
  journey: string;
  icon: SolutionIconName;
  accent: string;
};

export const solutionCategoryMeta: Record<SolutionCategoryId, SolutionCategoryMeta> = {
  "web-saas": {
    id: "web-saas",
    title: "Web & SaaS",
    subtitle: "Switch between Web & SaaS modules",
    journey: "Plan -> Build -> Capture -> Manage -> Monetize",
    icon: "Code2",
    accent: "from-[#2378ff] to-[#7c3aed]",
  },
  "mobile-apps": {
    id: "mobile-apps",
    title: "Mobile Apps",
    subtitle: "Switch between Mobile App modules",
    journey: "Plan -> Build -> Connect -> Engage -> Launch",
    icon: "Smartphone",
    accent: "from-[#2378ff] to-[#14c8d8]",
  },
  "ai-automation": {
    id: "ai-automation",
    title: "AI Automation",
    subtitle: "Switch between AI Automation modules",
    journey: "Audit -> Automate -> Communicate -> Analyze",
    icon: "Bot",
    accent: "from-[#7c3aed] to-[#14c8d8]",
  },
  "cloud-devops": {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    subtitle: "Switch between Cloud & DevOps modules",
    journey: "Plan -> Deploy -> Monitor -> Recover",
    icon: "Cloud",
    accent: "from-[#2378ff] to-[#fb923c]",
  },
  "design-growth": {
    id: "design-growth",
    title: "Design & Growth",
    subtitle: "Switch between Design & Growth modules",
    journey: "Position -> Design -> Launch -> Track -> Optimize",
    icon: "Palette",
    accent: "from-[#7c3aed] to-[#ec4899]",
  },
};
