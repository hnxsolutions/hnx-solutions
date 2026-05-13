import type { ServiceItem } from "@/data/services";
import { Activity, CloudUpload, GitBranch, MonitorCheck, RefreshCw, Rocket, ShieldCheck, TestTube2 } from "lucide-react";
import { ServiceDetailLayout, type ServiceHeroContent } from "@/components/services/shared/ServiceHeroShell";

type DevopsDeploymentDetailPageProps = {
  service: ServiceItem;
};

const content = {
  eyebrow: "DevOps & Deployment",
  headline: "Reliable deployments with CI/CD, monitoring, and rollback safety.",
  description:
    "Make releases predictable with build pipelines, environments, domains, SSL, logs, monitoring, rollback plans, and deployment documentation.",
  imageUrl: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&w=1600&q=85",
  primaryCta: "Fix My Deployment",
  secondaryCta: "See Release Setup",
  accentClass: "from-blue-600 to-sky-500",
  mockupTitle: "Release pipeline with production confidence",
  mockupSubtitle: "A practical DevOps setup to build, test, deploy, monitor, and recover with less launch stress.",
  stats: [
    { label: "Build", value: "CI", detail: "Automated checks", icon: GitBranch },
    { label: "Test", value: "Gated", detail: "Quality control", icon: TestTube2 },
    { label: "Deploy", value: "Safe", detail: "Release flow", icon: CloudUpload },
    { label: "Monitor", value: "Live", detail: "Visibility", icon: Activity },
  ],
  visualLabels: [
    { label: "Pipeline", value: "Build automation", icon: GitBranch },
    { label: "Deploy", value: "Production release", icon: Rocket },
    { label: "Rollback", value: "Recovery plan", icon: RefreshCw },
    { label: "Health", value: "Uptime checks", icon: MonitorCheck },
    { label: "Security", value: "Secrets + SSL", icon: ShieldCheck },
    { label: "Testing", value: "Pre-release gates", icon: TestTube2 },
  ],
  highlights: [
    "CI/CD workflows reduce manual release risk.",
    "Environment, domain, SSL, and secret setup handled cleanly.",
    "Monitoring and logs added so production issues are visible.",
    "Rollback planning gives launches a safer recovery path.",
  ],
} satisfies ServiceHeroContent;

export default function DevopsDeploymentDetailPage({ service }: DevopsDeploymentDetailPageProps) {
  return <ServiceDetailLayout service={service} content={content} />;
}
