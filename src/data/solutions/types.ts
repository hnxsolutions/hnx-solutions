export type SolutionCategoryId = "web-saas" | "mobile-apps" | "ai-automation" | "cloud-devops" | "design-growth";

export type SolutionIconName =
  | "Activity"
  | "BarChart3"
  | "Bell"
  | "Bot"
  | "Boxes"
  | "CheckCircle2"
  | "Cloud"
  | "Code2"
  | "CreditCard"
  | "Database"
  | "FileText"
  | "GitBranch"
  | "Headphones"
  | "Layers3"
  | "LayoutDashboard"
  | "LockKeyhole"
  | "Mail"
  | "MessageCircle"
  | "Network"
  | "Palette"
  | "Rocket"
  | "SearchCheck"
  | "Send"
  | "ServerCog"
  | "ShieldCheck"
  | "Smartphone"
  | "Sparkles"
  | "Store"
  | "Users"
  | "Workflow";

export type SolutionStat = {
  label: string;
  value: string;
  note: string;
};

export type SolutionCard = {
  title: string;
  text: string;
  icon: SolutionIconName;
};

export type SolutionPreview = {
  title: string;
  subtitle: string;
  metrics: SolutionStat[];
  rows: string[];
};

export type SolutionPageData = {
  slug: string;
  label: string;
  href: string;
  icon: SolutionIconName;
  eyebrow: string;
  headline: string;
  description: string;
  problem: string;
  solution: string;
  impact: string;
  stats: SolutionStat[];
  problems: SolutionCard[];
  flow: SolutionCard[];
  modules: SolutionCard[];
  process: SolutionCard[];
  useCases: SolutionCard[];
  preview: SolutionPreview;
  ctaTitle: string;
  ctaText: string;
};
