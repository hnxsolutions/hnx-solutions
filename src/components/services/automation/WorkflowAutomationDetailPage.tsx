import type { ServiceItem } from "@/data/services";
import { Bell, CheckCircle2, GitBranch, PlayCircle, Route, SlidersHorizontal, TimerReset, Workflow } from "lucide-react";
import { ServiceDetailLayout, type ServiceHeroContent } from "@/components/services/shared/ServiceHeroShell";

type WorkflowAutomationDetailPageProps = {
  service: ServiceItem;
};

const content = {
  eyebrow: "Workflow Automation",
  headline: "Automated workflows that keep your business moving.",
  description:
    "Convert repetitive processes into trigger, condition, and action flows for assignments, reminders, approvals, alerts, and status updates.",
  imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=85",
  primaryCta: "Automate My Workflow",
  secondaryCta: "Explore Flow Design",
  accentClass: "from-emerald-600 to-teal-500",
  mockupTitle: "Trigger-condition-action automation",
  mockupSubtitle: "A visual automation layer that routes work, sends alerts, updates records, and prevents manual process gaps.",
  stats: [
    { label: "Trigger", value: "Event", detail: "Starts the flow", icon: TimerReset },
    { label: "Condition", value: "Rules", detail: "Routes decisions", icon: SlidersHorizontal },
    { label: "Action", value: "Auto", detail: "Completes tasks", icon: PlayCircle },
    { label: "Alerts", value: "Instant", detail: "Team visibility", icon: Bell },
  ],
  visualLabels: [
    { label: "Builder", value: "Visual flow canvas", icon: GitBranch },
    { label: "Routing", value: "Role-based paths", icon: Route },
    { label: "Tasks", value: "Auto assignments", icon: CheckCircle2 },
    { label: "Rules", value: "Conditional logic", icon: SlidersHorizontal },
    { label: "Alerts", value: "Escalations", icon: Bell },
    { label: "Engine", value: "Workflow runs", icon: Workflow },
  ],
  highlights: [
    "Lead routing, reminders, approvals, and escalations automated.",
    "Rules built around your actual business process.",
    "Notifications and task creation across teams.",
    "Workflow testing before rollout to avoid surprises.",
  ],
} satisfies ServiceHeroContent;

export default function WorkflowAutomationDetailPage({ service }: WorkflowAutomationDetailPageProps) {
  return <ServiceDetailLayout service={service} content={content} />;
}
