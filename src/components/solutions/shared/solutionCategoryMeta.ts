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
    subtitle: "Plan, build, capture, manage, and monetize your digital platform.",
    journey: "Plan -> Build -> Capture -> Manage -> Monetize",
    icon: "Code2",
    accent: "from-[#2378ff] to-[#7c3aed]",
  },
  "mobile-apps": {
    id: "mobile-apps",
    title: "Mobile Apps",
    subtitle: "Plan, build, connect, engage, and launch mobile experiences.",
    journey: "Plan -> Build -> Connect -> Engage -> Launch",
    icon: "Smartphone",
    accent: "from-[#2378ff] to-[#14c8d8]",
  },
  "ai-automation": {
    id: "ai-automation",
    title: "AI Automation",
    subtitle: "Audit, automate, communicate, and analyze business workflows.",
    journey: "Audit -> Automate -> Communicate -> Analyze",
    icon: "Bot",
    accent: "from-[#7c3aed] to-[#14c8d8]",
  },
  "cloud-devops": {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    subtitle: "Plan, deploy, monitor, recover, and maintain stable systems.",
    journey: "Plan -> Deploy -> Monitor -> Recover",
    icon: "Cloud",
    accent: "from-[#2378ff] to-[#fb923c]",
  },
  "design-growth": {
    id: "design-growth",
    title: "Design & Growth",
    subtitle: "Position, design, launch, track, and optimize growth systems.",
    journey: "Position -> Design -> Launch -> Track -> Optimize",
    icon: "Palette",
    accent: "from-[#7c3aed] to-[#ec4899]",
  },
};
