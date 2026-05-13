import type { ServiceItem } from "@/data/services";
import {
  BarChart3,
  CheckCircle2,
  LayoutDashboard,
  Rocket,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

type ServiceFeatureStripProps = {
  service: ServiceItem;
};

const featureIcons: LucideIcon[] = [
  Rocket,
  ShieldCheck,
  LayoutDashboard,
  BarChart3,
  Sparkles,
  CheckCircle2,
];

const detailByVisual: Record<ServiceItem["visualType"], string[]> = {
  website: ["Built to load fast", "Structured for search", "Designed for enquiries", "Tracked with analytics", "Ready for every screen", "Easy to expand"],
  saas: ["MVP to production", "Subscription-ready", "Admin controls", "Product analytics", "Role-based flows", "Cloud deployable"],
  mobile: ["Native-feeling UX", "Secure backend sync", "Smooth onboarding", "Payments and bookings", "Push-ready flows", "Store launch support"],
  crm: ["Lead ownership", "Pipeline clarity", "Task automation", "Actionable reporting", "AI insights", "Permission control"],
  ai: ["Practical automation", "Human review points", "Smart lead handling", "Document intelligence", "Chat assistance", "Trigger-based actions"],
  workflow: ["Clear rules", "Fewer manual steps", "Approval routing", "Reminder logic", "Escalation paths", "Audit-friendly flows"],
  api: ["Secure endpoints", "Clean contracts", "Webhook-ready", "Auth-first design", "Payment support", "Documented handoff"],
  integration: ["Connected records", "Tool sync", "Reduced copy-paste", "Cleaner reporting", "Automated alerts", "Reliable handoffs"],
  devops: ["Predictable releases", "Build automation", "Testing gates", "Rollback planning", "Monitoring setup", "Stable environments"],
  cloud: ["Scalable foundation", "Cost-aware setup", "Backups planned", "Monitoring included", "Storage ready", "CDN performance"],
  support: ["Ongoing care", "Ticket visibility", "Fast bug fixes", "Uptime checks", "Update history", "Priority support"],
  security: ["Access control", "Audit visibility", "API protection", "Risk reduction", "Role permissions", "Safer deployments"],
  design: ["Clear user flows", "Polished visuals", "Reusable UI system", "Mobile-friendly screens", "Prototype ready", "Developer handoff"],
  landing: ["Campaign-ready", "Lead capture", "Trust sections", "Fast launch", "Conversion tracking", "A/B friendly"],
  seo: ["Indexing health", "Schema-ready", "Ranking visibility", "Traffic clarity", "Conversion events", "Monthly insight"],
  brand: ["Logo direction", "Color system", "Typography guide", "Social-ready", "Icon language", "Reusable guidelines"],
};

export default function ServiceFeatureStrip({ service }: ServiceFeatureStripProps) {
  const details = detailByVisual[service.visualType];

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
      {service.features.slice(0, 6).map((feature, index) => {
        const Icon = featureIcons[index % featureIcons.length];
        return (
          <article
            key={feature}
            className="group relative overflow-hidden rounded-[1.45rem] border border-slate-200/80 bg-white/76 p-4 shadow-[0_18px_42px_rgba(15,23,42,0.08)] backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:border-primary/30 dark:border-white/10 dark:bg-white/6"
          >
            <div className={`absolute inset-x-0 top-0 h-1 bg-linear-to-r ${service.accent}`} />
            <div className="flex items-center justify-between gap-3">
              <span className={`grid h-11 w-11 place-items-center rounded-2xl bg-linear-to-br ${service.accent} text-white shadow-[0_14px_32px_rgba(37,99,235,0.18)]`}>
                <Icon className="h-5 w-5" />
              </span>
              <span className="rounded-full border border-slate-200/80 bg-slate-50 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-slate-500 dark:border-white/10 dark:bg-white/8 dark:text-slate-400">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="mt-4 text-base font-black text-slate-950 dark:text-white">{feature}</h3>
            <p className="mt-2 text-xs font-medium leading-5 text-slate-500 dark:text-slate-400">
              {details[index] ?? "Built for real business outcomes"}
            </p>
          </article>
        );
      })}
    </div>
  );
}
