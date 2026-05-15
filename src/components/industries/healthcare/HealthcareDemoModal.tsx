"use client";

import Link from "next/link";
import { useEffect, useMemo, useState, type ChangeEvent } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  ArrowRight,
  BarChart3,
  Bell,
  Brain,
  CalendarCheck,
  CheckCircle2,
  ClipboardCheck,
  ClipboardList,
  CreditCard,
  Dumbbell,
  Eye,
  FileText,
  HeartPulse,
  Hospital,
  MapPin,
  Menu,
  MonitorSmartphone,
  PackageSearch,
  PhoneCall,
  Pill,
  Search,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Star,
  Stethoscope,
  TestTube2,
  Truck,
  UserRound,
  Video,
  X,
} from "lucide-react";

export type HealthcareDemo = {
  title: string;
  subtitle: string;
  brand: string;
  headline: string;
  image: string;
  accent: string;
  stats: string[];
  chips: string[];
};

type HealthcareDemoModalProps = {
  demo: HealthcareDemo;
  onClose: () => void;
};

type DemoTab =
  | "desktop"
  | "mobile"
  | "flow"
  | "profile"
  | "analytics";

type DesktopSection = "home" | "services" | "directory" | "resources" | "contact";
type MobileScreen = "home" | "services" | "request" | "updates";
type ProfilePanel = "overview" | "availability" | "reviews";
type AnalyticsRange = "Today" | "7 Days" | "30 Days";
type ProfileKind = "experts" | "catalog" | "programs" | "care";

type DemoCard = {
  title: string;
  description: string;
  meta?: string;
  icon: LucideIcon;
};

type DirectoryItem = {
  name: string;
  role: string;
  slot: string;
  detail: string;
};

type ResourcePage = {
  title: string;
  description: string;
  blocks: string[];
  icon: LucideIcon;
};

type DemoContent = {
  key: string;
  badge: string;
  intro: string;
  trustLine: string;
  primaryAction: string;
  secondaryAction: string;
  requestAction: string;
  navSections: { id: DesktopSection; label: string }[];
  services: DemoCard[];
  overviewCards: DemoCard[];
  directoryLabel: string;
  directoryTitle: string;
  directoryDescription: string;
  directoryItems: DirectoryItem[];
  resourceLabel: string;
  resourceTitle: string;
  resourcePages: ResourcePage[];
  contactTitle: string;
  contactDescription: string;
  profileKind: ProfileKind;
  profileTitle: string;
  profileDescription: string;
  profileAction: string;
  flowSteps: string[];
  mobileScreens: { id: MobileScreen; label: string; icon: LucideIcon }[];
  mobileUpdates: [string, string][];
  statsLabels: string[];
  analyticsSources: [string, string][];
};

const tabs: {
  id: DemoTab;
  label: string;
  icon: LucideIcon;
}[] = [
  {
    id: "desktop",
    label: "Desktop Preview",
    icon: MonitorSmartphone,
  },
  {
    id: "mobile",
    label: "Mobile Preview",
    icon: Smartphone,
  },
  {
    id: "flow",
    label: "Request Flow",
    icon: CalendarCheck,
  },
  {
    id: "profile",
    label: "Directory / Catalog",
    icon: PackageSearch,
  },
  {
    id: "analytics",
    label: "Analytics Dashboard",
    icon: BarChart3,
  },
];

const profilePanels: { id: ProfilePanel; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "availability", label: "Availability" },
  { id: "reviews", label: "Reviews" },
];

const analyticsRanges: AnalyticsRange[] = ["Today", "7 Days", "30 Days"];

export default function HealthcareDemoModal({
  demo,
  onClose,
}: HealthcareDemoModalProps) {
  const [activeTab, setActiveTab] = useState<DemoTab>("desktop");
  const accent = getDemoAccentClasses(demo.accent);
  const content = useHealthcareDemoContent(demo);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-xl">
      <button
        type="button"
        aria-label="Close demo"
        className="absolute inset-0 cursor-default"
        onClick={onClose}
      />

      <section className="relative max-h-[92vh] w-full max-w-[1380px] overflow-hidden rounded-[2rem] border border-white/20 bg-white shadow-[0_35px_120px_rgba(0,0,0,0.35)] dark:border-white/10 dark:bg-[#080b16]">
        <button
          type="button"
          aria-label="Close demo"
          onClick={onClose}
          className="absolute right-5 top-5 z-30 grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:scale-105 dark:border-white/10 dark:bg-white/[0.08] dark:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="grid max-h-[92vh] overflow-y-auto lg:grid-cols-[300px_1fr]">
          <aside className="border-b border-slate-200 bg-slate-50/80 p-6 dark:border-white/10 dark:bg-white/[0.03] lg:sticky lg:top-0 lg:max-h-[92vh] lg:overflow-y-auto lg:border-b-0 lg:border-r">
            <div className="flex items-center gap-3">
              <span
                className={`grid h-12 w-12 place-items-center rounded-2xl ${accent.iconBg} ${accent.iconText}`}
              >
                <MonitorSmartphone className="h-6 w-6" />
              </span>

              <div>
                <p className="text-lg font-black text-slate-950 dark:text-white">
                  HNX Solutions
                </p>
                <p className="text-xs font-bold text-slate-500 dark:text-slate-400">
                  {content.badge}
                </p>
              </div>
            </div>

            <div className="mt-7">
              <h2 className="text-xl font-black leading-tight text-slate-950 dark:text-white">
                {demo.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {demo.subtitle}
              </p>
            </div>

            <nav className="mt-7 space-y-2" aria-label="Demo preview tabs">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;

                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-black transition ${
                      isActive
                        ? `${accent.softBg} ${accent.text}`
                        : "text-slate-600 hover:bg-white hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/[0.06] dark:hover:text-white"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    {getTabLabel(tab.id, content)}
                  </button>
                );
              })}
            </nav>

            <div className="mt-7 rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/[0.05]">
              <h3 className="text-sm font-black text-slate-950 dark:text-white">
                What&apos;s included
              </h3>

              <div className="mt-4 space-y-3">
                {content.services.slice(0, 4).map((service) => (
                  <button
                    type="button"
                    key={service.title}
                    onClick={() => setActiveTab("profile")}
                    className="flex w-full items-center gap-2 rounded-xl text-left text-sm font-semibold text-slate-600 transition hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
                  >
                    <CheckCircle2 className={`h-4 w-4 ${accent.text}`} />
                    {service.title}
                  </button>
                ))}
              </div>
            </div>

            <Link
              href="/contact"
              className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-4 text-sm font-black text-white shadow-lg transition hover:-translate-y-0.5 ${accent.button}`}
            >
              Build Similar Website
              <ArrowRight className="h-4 w-4" />
            </Link>
          </aside>

          <div className="bg-white p-5 dark:bg-[#080b16] sm:p-7">
            <div className="mb-5 pr-14">
              <p className={`text-sm font-black ${accent.text}`}>
                {activeTabLabel(activeTab, content)}
              </p>
              <h2 className="mt-1 text-2xl font-black text-slate-950 dark:text-white sm:text-3xl">
                {demo.title} Website Experience
              </h2>
            </div>

            {activeTab === "desktop" ? (
              <DesktopPreview demo={demo} onOpenTab={setActiveTab} />
            ) : null}

            {activeTab === "mobile" ? (
              <MobilePreview demo={demo} onOpenTab={setActiveTab} />
            ) : null}

            {activeTab === "flow" ? <FlowPreview demo={demo} /> : null}

            {activeTab === "profile" ? (
              <ProfilePreview demo={demo} onOpenTab={setActiveTab} />
            ) : null}

            {activeTab === "analytics" ? (
              <AnalyticsPreview demo={demo} onOpenTab={setActiveTab} />
            ) : null}

            <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 px-5 py-4 text-sm leading-6 text-slate-600 dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-slate-300">
              This is a strategic preview. Final design, content, modules,
              images, booking flow, forms, and dashboards can be customized
              according to the client&apos;s healthcare business.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function DesktopPreview({
  demo,
  onOpenTab,
}: {
  demo: HealthcareDemo;
  onOpenTab: (tab: DemoTab) => void;
}) {
  const accent = getDemoAccentClasses(demo.accent);
  const content = useHealthcareDemoContent(demo);
  const [activeSection, setActiveSection] = useState<DesktopSection>("home");
  const [selectedService, setSelectedService] = useState(
    content.services[0]?.title ?? "General Care",
  );
  const [selectedDirectory, setSelectedDirectory] = useState(
    content.directoryItems[0]?.name ?? content.directoryLabel,
  );
  const [selectedResource, setSelectedResource] = useState(
    content.resourcePages[0]?.title ?? content.resourceLabel,
  );
  const [requestSent, setRequestSent] = useState(false);

  useEffect(() => {
    setSelectedService(content.services[0]?.title ?? "General Care");
    setSelectedDirectory(content.directoryItems[0]?.name ?? content.directoryLabel);
    setSelectedResource(content.resourcePages[0]?.title ?? content.resourceLabel);
    setActiveSection("home");
    setRequestSent(false);
  }, [content]);

  function openPage(section: DesktopSection) {
    setActiveSection(section);
  }

  return (
    <div className="rounded-[1.6rem] border border-slate-200 bg-slate-50 p-3 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
      <div className="max-h-[74vh] overflow-y-auto rounded-[1.25rem] border border-slate-200 bg-white dark:border-white/10 dark:bg-[#0b1020]">
        <div className="sticky top-0 z-20 flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 bg-white/95 px-5 py-4 backdrop-blur-xl dark:border-white/10 dark:bg-[#0b1020]/95">
          <button
            type="button"
            onClick={() => openPage("home")}
            className="flex items-center gap-2"
          >
            <span className={`h-4 w-4 rounded-full ${accent.button}`} />
            <span className="text-sm font-black text-slate-950 dark:text-white">
              {demo.brand}
            </span>
          </button>

          <div className="flex max-w-full flex-1 items-center gap-2 overflow-x-auto text-xs font-black text-slate-500 dark:text-slate-400 md:justify-center">
            {content.navSections.map((section) => (
              <button
                key={section.id}
                type="button"
                onClick={() => openPage(section.id)}
                className={`shrink-0 rounded-lg px-3 py-2 transition ${
                  activeSection === section.id
                    ? `${accent.softBg} ${accent.text}`
                    : "hover:bg-slate-100 hover:text-slate-950 dark:hover:bg-white/[0.06] dark:hover:text-white"
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => openPage("contact")}
            className={`rounded-lg px-4 py-2 text-xs font-black text-white transition hover:-translate-y-0.5 ${accent.button}`}
          >
            {content.requestAction}
          </button>
        </div>

        <DesktopWebsitePage
          demo={demo}
          content={content}
          accent={accent}
          activeSection={activeSection}
          selectedService={selectedService}
          selectedDirectory={selectedDirectory}
          selectedResource={selectedResource}
          requestSent={requestSent}
          onOpenTab={onOpenTab}
          onOpenPage={openPage}
          onSelectService={setSelectedService}
          onSelectDirectory={setSelectedDirectory}
          onSelectResource={setSelectedResource}
          onSubmitRequest={() => setRequestSent(true)}
        />

        <DemoWebsiteFooter
          demo={demo}
          content={content}
          accent={accent}
          onOpenPage={openPage}
        />
      </div>
    </div>
  );
}

function DesktopWebsitePage({
  demo,
  content,
  accent,
  activeSection,
  selectedService,
  selectedDirectory,
  selectedResource,
  requestSent,
  onOpenTab,
  onOpenPage,
  onSelectService,
  onSelectDirectory,
  onSelectResource,
  onSubmitRequest,
}: {
  demo: HealthcareDemo;
  content: DemoContent;
  accent: ReturnType<typeof getDemoAccentClasses>;
  activeSection: DesktopSection;
  selectedService: string;
  selectedDirectory: string;
  selectedResource: string;
  requestSent: boolean;
  onOpenTab: (tab: DemoTab) => void;
  onOpenPage: (section: DesktopSection) => void;
  onSelectService: (service: string) => void;
  onSelectDirectory: (item: string) => void;
  onSelectResource: (page: string) => void;
  onSubmitRequest: () => void;
}) {
  if (activeSection === "services") {
    return (
      <ServicesWebsitePage
        demo={demo}
        content={content}
        accent={accent}
        selectedService={selectedService}
        onSelectService={onSelectService}
        onOpenPage={onOpenPage}
      />
    );
  }

  if (activeSection === "directory") {
    return (
      <DirectoryWebsitePage
        content={content}
        accent={accent}
        selectedDirectory={selectedDirectory}
        onSelectDirectory={onSelectDirectory}
        onOpenPage={onOpenPage}
      />
    );
  }

  if (activeSection === "resources") {
    return (
      <ResourcesWebsitePage
        content={content}
        accent={accent}
        selectedResource={selectedResource}
        onSelectResource={onSelectResource}
        onOpenPage={onOpenPage}
      />
    );
  }

  if (activeSection === "contact") {
    return (
      <ContactWebsitePage
        content={content}
        accent={accent}
        selectedService={selectedService}
        requestSent={requestSent}
        onSelectService={onSelectService}
        onSubmitRequest={onSubmitRequest}
        onOpenTab={onOpenTab}
      />
    );
  }

  return (
    <HomeWebsitePage
      demo={demo}
      content={content}
      accent={accent}
      onOpenTab={onOpenTab}
      onOpenPage={onOpenPage}
    />
  );
}

function HomeWebsitePage({
  demo,
  content,
  accent,
  onOpenTab,
  onOpenPage,
}: {
  demo: HealthcareDemo;
  content: DemoContent;
  accent: ReturnType<typeof getDemoAccentClasses>;
  onOpenTab: (tab: DemoTab) => void;
  onOpenPage: (section: DesktopSection) => void;
}) {
  return (
    <section className="min-h-[680px] bg-gradient-to-br from-slate-50 to-white p-7 dark:from-white/[0.04] dark:to-transparent">
      <div className="grid min-h-[440px] items-center gap-7 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <span
            className={`inline-flex rounded-full px-3 py-1.5 text-xs font-black ${accent.softBg} ${accent.text}`}
          >
            {content.trustLine}
          </span>

          <h3 className="mt-5 max-w-xl text-4xl font-black leading-tight text-slate-950 dark:text-white">
            {demo.headline}
          </h3>

          <p className="mt-4 max-w-lg text-sm leading-6 text-slate-600 dark:text-slate-300">
            {content.intro}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => onOpenTab("flow")}
              className={`rounded-xl px-5 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 ${accent.button}`}
            >
              {content.primaryAction}
            </button>
            <button
              type="button"
              onClick={() => onOpenPage("services")}
              className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-black text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300 dark:border-white/10 dark:bg-white/[0.06] dark:text-white"
            >
              {content.secondaryAction}
            </button>
            <button
              type="button"
              onClick={() => onOpenTab("analytics")}
              className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-black text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300 dark:border-white/10 dark:bg-white/[0.06] dark:text-white"
            >
              View Analytics
            </button>
          </div>
        </div>

        <div
          className="min-h-[360px] rounded-[1.4rem] bg-cover bg-center shadow-inner"
          style={{ backgroundImage: `url(${demo.image})` }}
        />
      </div>

      <div className="mt-7 grid gap-3 sm:grid-cols-4">
        {demo.stats.map((stat, index) => (
          <button
            type="button"
            key={`${stat}-${index}`}
            onClick={() => onOpenTab(index === 3 ? "flow" : "analytics")}
            className="rounded-2xl bg-white p-4 text-center transition hover:-translate-y-0.5 hover:shadow-sm dark:bg-white/[0.05]"
          >
            <p className={`text-xl font-black ${accent.text}`}>{stat}</p>
            <p className="mt-1 text-xs font-bold text-slate-500 dark:text-slate-400">
              {content.statsLabels[index] ?? "Metric"}
            </p>
          </button>
        ))}
      </div>

      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {content.overviewCards.map((card) => {
          const Icon = card.icon;

          return (
            <button
              key={card.title}
              type="button"
              onClick={() =>
                card.icon === BarChart3 ? onOpenTab("analytics") : onOpenPage("services")
              }
              className="rounded-2xl border border-slate-200 bg-white p-5 text-left transition hover:-translate-y-0.5 hover:shadow-sm dark:border-white/10 dark:bg-white/[0.05]"
            >
              <Icon className={`h-6 w-6 ${accent.text}`} />
              <p className="mt-4 text-sm font-black text-slate-950 dark:text-white">
                {card.title}
              </p>
              <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">
                {card.description}
              </p>
            </button>
          );
        })}
      </div>

      <div className="mt-7 grid gap-5 rounded-[1.4rem] border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/[0.05] lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className={`text-xs font-black uppercase ${accent.text}`}>
            Website journey
          </p>
          <h4 className="mt-2 text-2xl font-black text-slate-950 dark:text-white">
            A complete front door for {demo.title.toLowerCase()}
          </h4>
          <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
            The homepage is designed to move visitors from trust to action:
            understand the offer, compare the right path, see proof, then send
            a request without getting lost.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {content.flowSteps.map((step, index) => (
            <div
              key={step}
              className="rounded-2xl bg-slate-50 p-4 dark:bg-white/[0.05]"
            >
              <p className={`text-xs font-black ${accent.text}`}>
                Step {index + 1}
              </p>
              <p className="mt-2 text-sm font-black text-slate-950 dark:text-white">
                {step}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesWebsitePage({
  demo,
  content,
  accent,
  selectedService,
  onSelectService,
  onOpenPage,
}: {
  demo: HealthcareDemo;
  content: DemoContent;
  accent: ReturnType<typeof getDemoAccentClasses>;
  selectedService: string;
  onSelectService: (service: string) => void;
  onOpenPage: (section: DesktopSection) => void;
}) {
  const selected =
    content.services.find((service) => service.title === selectedService) ??
    content.services[0];

  return (
    <section className="min-h-[680px] p-7">
      <SectionHeader
        eyebrow={content.navSections.find((section) => section.id === "services")?.label ?? "Services"}
        title={`Detailed ${demo.title.toLowerCase()} services`}
        description={`This page is category-specific, so every service block supports the real user journey for ${demo.title.toLowerCase()}.`}
        accentText={accent.text}
      />

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {content.services.map((service) => {
          const Icon = service.icon;
          const active = selectedService === service.title;

          return (
            <button
              key={service.title}
              type="button"
              onClick={() => onSelectService(service.title)}
              className={`rounded-2xl border p-5 text-left transition hover:-translate-y-0.5 ${
                active
                  ? `border-transparent ${accent.softBg}`
                  : "border-slate-200 bg-slate-50 hover:bg-white dark:border-white/10 dark:bg-white/[0.04]"
              }`}
            >
              <Icon className={`h-6 w-6 ${accent.text}`} />
              <p className="mt-4 text-base font-black text-slate-950 dark:text-white">
                {service.title}
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                {service.description}
              </p>
              {service.meta ? (
                <span className={`mt-4 inline-flex text-xs font-black ${accent.text}`}>
                  {service.meta}
                </span>
              ) : null}
            </button>
          );
        })}
      </div>

      {selected ? (
        <div className="mt-6 grid gap-5 rounded-[1.4rem] border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/[0.04] lg:grid-cols-[1fr_0.8fr]">
          <div>
            <p className={`text-xs font-black uppercase ${accent.text}`}>
              Selected page
            </p>
            <h4 className="mt-2 text-2xl font-black text-slate-950 dark:text-white">
              {selected.title}
            </h4>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
              {selected.description} The real build can include detail sections,
              FAQs, pricing guidance, proof blocks, eligibility notes, and a
              dedicated call-to-action for this exact service.
            </p>
            <button
              type="button"
              onClick={() => onOpenPage("contact")}
              className={`mt-5 inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-black text-white ${accent.button}`}
            >
              Request {selected.title}
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          <div className="grid gap-3">
            {["Overview", "Eligibility", "Preparation", "Follow-up"].map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-white p-4 dark:bg-white/[0.06]"
              >
                <p className="text-sm font-black text-slate-950 dark:text-white">
                  {item}
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                  A dedicated content block that helps visitors decide and act.
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}

function DirectoryWebsitePage({
  content,
  accent,
  selectedDirectory,
  onSelectDirectory,
  onOpenPage,
}: {
  content: DemoContent;
  accent: ReturnType<typeof getDemoAccentClasses>;
  selectedDirectory: string;
  onSelectDirectory: (item: string) => void;
  onOpenPage: (section: DesktopSection) => void;
}) {
  const selected =
    content.directoryItems.find((item) => item.name === selectedDirectory) ??
    content.directoryItems[0];

  return (
    <section className="min-h-[680px] p-7">
      <SectionHeader
        eyebrow={content.directoryLabel}
        title={content.directoryTitle}
        description={content.directoryDescription}
        accentText={accent.text}
      />

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {content.directoryItems.map((item) => (
          <button
            key={item.name}
            type="button"
            onClick={() => onSelectDirectory(item.name)}
            className={`rounded-2xl border p-5 text-left transition hover:-translate-y-0.5 ${
              selectedDirectory === item.name
                ? `border-transparent ${accent.softBg}`
                : "border-slate-200 bg-slate-50 hover:bg-white dark:border-white/10 dark:bg-white/[0.04]"
            }`}
          >
            <span
              className={`grid h-12 w-12 place-items-center rounded-2xl ${accent.iconBg} ${accent.iconText}`}
            >
              {content.profileKind === "experts" ? (
                <UserRound className="h-6 w-6" />
              ) : (
                <PackageSearch className="h-6 w-6" />
              )}
            </span>
            <p className="mt-4 text-sm font-black text-slate-950 dark:text-white">
              {item.name}
            </p>
            <p className="mt-1 text-xs font-bold text-slate-500 dark:text-slate-400">
              {item.role}
            </p>
            <p className={`mt-3 text-xs font-black ${accent.text}`}>
              {item.slot}
            </p>
          </button>
        ))}
      </div>

      {selected ? (
        <div className="mt-6 grid gap-5 rounded-[1.4rem] border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/[0.05] lg:grid-cols-[1fr_1fr]">
          <div>
            <p className={`text-xs font-black uppercase ${accent.text}`}>
              Selected detail
            </p>
            <h4 className="mt-2 text-2xl font-black text-slate-950 dark:text-white">
              {selected.name}
            </h4>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
              {selected.detail}
            </p>
            <p className="mt-3 text-sm font-black text-slate-950 dark:text-white">
              {selected.slot}
            </p>
            <button
              type="button"
              onClick={() => onOpenPage("contact")}
              className={`mt-5 inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-black text-white ${accent.button}`}
            >
              Continue Request
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {["Trust proof", "Availability", "What to expect", "Next step"].map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-slate-50 p-4 dark:bg-white/[0.05]"
              >
                <CheckCircle2 className={`h-5 w-5 ${accent.text}`} />
                <p className="mt-3 text-sm font-black text-slate-950 dark:text-white">
                  {item}
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                  Content can be adapted to this category and business model.
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}

function ResourcesWebsitePage({
  content,
  accent,
  selectedResource,
  onSelectResource,
  onOpenPage,
}: {
  content: DemoContent;
  accent: ReturnType<typeof getDemoAccentClasses>;
  selectedResource: string;
  onSelectResource: (page: string) => void;
  onOpenPage: (section: DesktopSection) => void;
}) {
  const selected =
    content.resourcePages.find((page) => page.title === selectedResource) ??
    content.resourcePages[0];

  return (
    <section className="min-h-[680px] p-7">
      <SectionHeader
        eyebrow={content.resourceLabel}
        title={content.resourceTitle}
        description="Every resource page is category-specific and opens as its own larger page from the navbar."
        accentText={accent.text}
      />

      <div className="mt-6 grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-2">
          {content.resourcePages.map((page) => (
            <button
              key={page.title}
              type="button"
              onClick={() => onSelectResource(page.title)}
              className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-black transition ${
                selectedResource === page.title
                  ? `${accent.softBg} ${accent.text}`
                  : "bg-slate-50 text-slate-600 hover:bg-white hover:text-slate-950 dark:bg-white/[0.04] dark:text-slate-300"
              }`}
            >
              {page.title}
              <ArrowRight className="h-4 w-4" />
            </button>
          ))}
        </div>

        {selected ? (
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/[0.04]">
            <selected.icon className={`h-8 w-8 ${accent.text}`} />
            <h4 className="mt-4 text-2xl font-black text-slate-950 dark:text-white">
              {selected.title}
            </h4>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              {selected.description}
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {selected.blocks.map((block) => (
                <div
                  key={block}
                  className="rounded-xl bg-white p-3 text-xs font-bold text-slate-600 dark:bg-white/[0.06] dark:text-slate-300"
                >
                  {block}
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-2xl bg-white p-5 dark:bg-white/[0.06]">
              <p className="text-sm font-black text-slate-950 dark:text-white">
                Page content modules
              </p>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {["Detailed guide", "FAQ section", "CTA block", "Related links"].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-slate-200 p-3 text-xs font-bold text-slate-600 dark:border-white/10 dark:text-slate-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={() => onOpenPage("contact")}
                className={`mt-5 inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-black text-white ${accent.button}`}
              >
                Ask About This
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function ContactWebsitePage({
  content,
  accent,
  selectedService,
  requestSent,
  onSelectService,
  onSubmitRequest,
  onOpenTab,
}: {
  content: DemoContent;
  accent: ReturnType<typeof getDemoAccentClasses>;
  selectedService: string;
  requestSent: boolean;
  onSelectService: (service: string) => void;
  onSubmitRequest: () => void;
  onOpenTab: (tab: DemoTab) => void;
}) {
  return (
    <section className="min-h-[680px] p-7">
      <SectionHeader
        eyebrow={content.contactTitle}
        title={content.requestAction}
        description={content.contactDescription}
        accentText={accent.text}
      />

      <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_0.78fr]">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            onSubmitRequest();
          }}
          className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/[0.04]"
        >
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-xl font-black text-slate-950 dark:text-white">
              Working request form
            </h3>
            {requestSent ? (
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-black text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300">
                Request sent
              </span>
            ) : null}
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <label className="text-xs font-black text-slate-500 dark:text-slate-400">
              Name
              <input
                defaultValue="Anika Sharma"
                className="mt-2 h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm font-bold text-slate-700 outline-none transition focus:border-blue-300 dark:border-white/10 dark:bg-[#0b1020] dark:text-white"
              />
            </label>
            <label className="text-xs font-black text-slate-500 dark:text-slate-400">
              Phone number
              <input
                defaultValue="+91 98765 43210"
                className="mt-2 h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm font-bold text-slate-700 outline-none transition focus:border-blue-300 dark:border-white/10 dark:bg-[#0b1020] dark:text-white"
              />
            </label>
            <label className="text-xs font-black text-slate-500 dark:text-slate-400">
              Interest
              <select
                value={selectedService}
                onChange={(event: ChangeEvent<HTMLSelectElement>) =>
                  onSelectService(event.target.value)
                }
                className="mt-2 h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm font-bold text-slate-700 outline-none transition focus:border-blue-300 dark:border-white/10 dark:bg-[#0b1020] dark:text-white"
              >
                {content.services.map((service) => (
                  <option key={service.title}>{service.title}</option>
                ))}
              </select>
            </label>
            <label className="text-xs font-black text-slate-500 dark:text-slate-400">
              Preferred date
              <input
                type="date"
                defaultValue="2026-05-20"
                className="mt-2 h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm font-bold text-slate-700 outline-none transition focus:border-blue-300 dark:border-white/10 dark:bg-[#0b1020] dark:text-white"
              />
            </label>
          </div>

          <button
            type="submit"
            className={`mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl text-sm font-black text-white transition hover:-translate-y-0.5 ${accent.button}`}
          >
            Submit Request
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/[0.04]">
          <CalendarCheck className={`mb-4 h-6 w-6 ${accent.text}`} />
          <p className="text-lg font-black text-slate-950 dark:text-white">
            {requestSent
              ? "Request routed successfully"
              : content.contactDescription}
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
            {requestSent
              ? `${selectedService} is now assigned to the ${content.directoryLabel.toLowerCase()} workflow with alerts queued.`
              : "This preview can connect forms to WhatsApp, email, CRM, payment, reports, or admin dashboards."}
          </p>
          <div className="mt-5 grid gap-2">
            {["WhatsApp", "Email", "CRM", "Admin Dashboard"].map((route) => (
              <button
                key={route}
                type="button"
                onClick={() =>
                  route === "Admin Dashboard" ? onOpenTab("analytics") : undefined
                }
                className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3 text-sm font-black text-slate-700 transition hover:bg-slate-100 dark:bg-white/[0.06] dark:text-slate-300"
              >
                {route}
                <CheckCircle2 className={`h-4 w-4 ${accent.text}`} />
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {content.mobileUpdates.map(([title, description]) => (
          <div
            key={title}
            className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/[0.05]"
          >
            <Bell className={`h-5 w-5 ${accent.text}`} />
            <p className="mt-3 text-sm font-black text-slate-950 dark:text-white">
              {title}
            </p>
            <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function DemoWebsiteFooter({
  demo,
  content,
  accent,
  onOpenPage,
}: {
  demo: HealthcareDemo;
  content: DemoContent;
  accent: ReturnType<typeof getDemoAccentClasses>;
  onOpenPage: (section: DesktopSection) => void;
}) {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 p-7 text-white dark:border-white/10">
      <div className="grid gap-6 md:grid-cols-[1.1fr_0.8fr_0.8fr]">
        <div>
          <div className="flex items-center gap-2">
            <span className={`h-4 w-4 rounded-full ${accent.button}`} />
            <p className="text-lg font-black">{demo.brand}</p>
          </div>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-300">
            {content.intro}
          </p>
          <button
            type="button"
            onClick={() => onOpenPage("contact")}
            className={`mt-5 inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-black text-white ${accent.button}`}
          >
            {content.requestAction}
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div>
          <p className="text-sm font-black">Pages</p>
          <div className="mt-3 grid gap-2">
            {content.navSections.map((section) => (
              <button
                key={section.id}
                type="button"
                onClick={() => onOpenPage(section.id)}
                className="text-left text-sm font-semibold text-slate-300 transition hover:text-white"
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-black">Featured</p>
          <div className="mt-3 grid gap-2">
            {content.services.slice(0, 4).map((service) => (
              <button
                key={service.title}
                type="button"
                onClick={() => onOpenPage("services")}
                className="text-left text-sm font-semibold text-slate-300 transition hover:text-white"
              >
                {service.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function MobilePreview({
  demo,
  onOpenTab,
}: {
  demo: HealthcareDemo;
  onOpenTab: (tab: DemoTab) => void;
}) {
  const accent = getDemoAccentClasses(demo.accent);
  const content = useHealthcareDemoContent(demo);
  const [activeScreen, setActiveScreen] = useState<MobileScreen>("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [requestDone, setRequestDone] = useState(false);
  const [callStarted, setCallStarted] = useState(false);

  return (
    <div className="grid items-start gap-6 lg:grid-cols-[0.8fr_1.2fr]">
      <div className="mx-auto w-[280px] rounded-[2.4rem] border-[10px] border-slate-950 bg-white p-4 shadow-[0_30px_80px_rgba(15,23,42,0.24)] dark:border-slate-800 dark:bg-[#0b1020]">
        <div className="mx-auto mb-4 h-1.5 w-16 rounded-full bg-slate-300" />

        <div className="sticky top-0 z-10 flex items-center justify-between bg-white/95 py-1 backdrop-blur-xl dark:bg-[#0b1020]/95">
          <button
            type="button"
            onClick={() => setActiveScreen("home")}
            className="text-sm font-black text-slate-950 dark:text-white"
          >
            {demo.brand}
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Toggle mobile menu"
            className="grid h-8 w-8 place-items-center rounded-full bg-slate-100 text-slate-600 dark:bg-white/[0.08] dark:text-slate-200"
          >
            <Menu className="h-4 w-4" />
          </button>
        </div>

        {menuOpen ? (
          <div className="mt-3 grid grid-cols-2 gap-2 rounded-2xl bg-slate-50 p-2 dark:bg-white/[0.04]">
            {content.mobileScreens.map((screen) => (
              <button
                key={screen.id}
                type="button"
                onClick={() => {
                  setActiveScreen(screen.id);
                  setMenuOpen(false);
                }}
                className={`rounded-xl px-2 py-2 text-[10px] font-black ${
                  activeScreen === screen.id
                    ? `${accent.button} text-white`
                    : "bg-white text-slate-600 dark:bg-white/[0.06] dark:text-slate-300"
                }`}
              >
                {screen.label}
              </button>
            ))}
          </div>
        ) : null}

        <MobilePhoneScreen
          demo={demo}
          activeScreen={activeScreen}
          requestDone={requestDone}
          callStarted={callStarted}
          onScreenChange={setActiveScreen}
          onRequestDone={() => setRequestDone(true)}
          onCallStarted={() => setCallStarted((value) => !value)}
        />

        <div className="sticky bottom-0 mt-5 grid grid-cols-4 gap-2 bg-white/95 pt-2 backdrop-blur-xl dark:bg-[#0b1020]/95">
          {content.mobileScreens.map((screen) => {
            const Icon = screen.icon;

            return (
              <button
                key={screen.id}
                type="button"
                onClick={() => setActiveScreen(screen.id)}
                className={`grid h-12 place-items-center rounded-xl transition ${
                  activeScreen === screen.id
                    ? `${accent.button} text-white`
                    : "bg-slate-50 text-slate-500 hover:text-slate-900 dark:bg-white/[0.06] dark:text-slate-300"
                }`}
              >
                <Icon className="h-4 w-4" />
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {content.overviewCards.map((item, index) => {
          const Icon = item.icon;

          return (
            <button
              key={item.title}
              type="button"
              onClick={() =>
                index === 3 ? onOpenTab("analytics") : setActiveScreen(content.mobileScreens[index]?.id ?? "home")
              }
              className="rounded-2xl border border-slate-200 bg-white p-5 text-left transition hover:-translate-y-0.5 hover:shadow-sm dark:border-white/10 dark:bg-white/[0.05]"
            >
              <Icon className={`mb-3 h-5 w-5 ${accent.text}`} />
              <p className="text-sm font-black text-slate-950 dark:text-white">
                {item.title}
              </p>
              <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">
                {item.description}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function MobilePhoneScreen({
  demo,
  activeScreen,
  requestDone,
  callStarted,
  onScreenChange,
  onRequestDone,
  onCallStarted,
}: {
  demo: HealthcareDemo;
  activeScreen: MobileScreen;
  requestDone: boolean;
  callStarted: boolean;
  onScreenChange: (screen: MobileScreen) => void;
  onRequestDone: () => void;
  onCallStarted: () => void;
}) {
  const accent = getDemoAccentClasses(demo.accent);
  const content = useHealthcareDemoContent(demo);

  if (activeScreen === "services") {
    return (
      <div>
        <div
          className="mt-4 h-28 rounded-2xl bg-cover bg-center"
          style={{ backgroundImage: `url(${demo.image})` }}
        />
        <h3 className="mt-4 text-xl font-black leading-tight text-slate-950 dark:text-white">
          {content.navSections.find((section) => section.id === "services")?.label}
        </h3>
        <div className="mt-3 grid gap-2">
          {content.services.slice(0, 5).map((service) => (
            <button
              key={service.title}
              type="button"
              onClick={() => onScreenChange("request")}
              className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-3 text-left text-[11px] font-black text-slate-700 dark:bg-white/[0.06] dark:text-slate-200"
            >
              {service.title}
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (activeScreen === "request") {
    return (
      <div>
        <h3 className="mt-5 text-xl font-black leading-tight text-slate-950 dark:text-white">
          {content.requestAction}
        </h3>
        <div className="mt-4 space-y-2">
          {["Name", content.services[0]?.title ?? "Service", "May 20, 2026"].map(
            (field) => (
              <div
                key={field}
                className="rounded-xl border border-slate-200 bg-white px-3 py-3 text-[11px] font-bold text-slate-500 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-300"
              >
                {field}
              </div>
            ),
          )}
        </div>
        <button
          type="button"
          onClick={onRequestDone}
          className={`mt-4 grid h-11 w-full place-items-center rounded-xl text-sm font-black text-white ${accent.button}`}
        >
          {requestDone ? "Request Sent" : "Confirm Request"}
        </button>
        <button
          type="button"
          onClick={onCallStarted}
          className="mt-3 flex h-10 w-full items-center justify-center gap-2 rounded-xl border border-slate-200 text-xs font-black text-slate-700 dark:border-white/10 dark:text-slate-200"
        >
          <PhoneCall className="h-4 w-4" />
          {callStarted ? "Calling support" : "Call support"}
        </button>
      </div>
    );
  }

  if (activeScreen === "updates") {
    return (
      <div>
        <h3 className="mt-5 text-xl font-black leading-tight text-slate-950 dark:text-white">
          Updates
        </h3>
        <div className="mt-4 space-y-2">
          {content.mobileUpdates.map(([title, description]) => (
            <button
              key={title}
              type="button"
              className="w-full rounded-xl bg-slate-50 p-3 text-left dark:bg-white/[0.06]"
            >
              <p className="text-[11px] font-black text-slate-900 dark:text-white">
                {title}
              </p>
              <p className="mt-1 text-[10px] font-bold text-slate-500 dark:text-slate-400">
                {description}
              </p>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div
        className="mt-4 h-36 rounded-2xl bg-cover bg-center"
        style={{ backgroundImage: `url(${demo.image})` }}
      />

      <h3 className="mt-5 text-2xl font-black leading-tight text-slate-950 dark:text-white">
        {demo.headline}
      </h3>

      <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
        {content.intro}
      </p>

      <button
        type="button"
        onClick={() => onScreenChange("request")}
        className={`mt-5 grid h-11 w-full place-items-center rounded-xl text-sm font-black text-white ${accent.button}`}
      >
        {content.requestAction}
      </button>

      <div className="mt-5 grid grid-cols-2 gap-3">
        {content.services.slice(0, 4).map((service) => (
          <button
            type="button"
            key={service.title}
            onClick={() => onScreenChange("services")}
            className="rounded-xl bg-slate-50 p-3 text-center text-[10px] font-bold text-slate-600 transition hover:bg-slate-100 dark:bg-white/[0.06] dark:text-slate-300"
          >
            {service.title}
          </button>
        ))}
      </div>
    </div>
  );
}

function FlowPreview({ demo }: { demo: HealthcareDemo }) {
  const accent = getDemoAccentClasses(demo.accent);
  const content = useHealthcareDemoContent(demo);
  const [activeStep, setActiveStep] = useState(0);
  const [selectedChannel, setSelectedChannel] = useState("WhatsApp");
  const [submitted, setSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState(
    content.services[0]?.title ?? "General Care",
  );

  useEffect(() => {
    setSelectedService(content.services[0]?.title ?? "General Care");
    setActiveStep(0);
    setSubmitted(false);
  }, [content]);

  return (
    <div className="rounded-[1.6rem] border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.05]">
      <div className="grid gap-5 md:grid-cols-4">
        {content.flowSteps.map((step, index) => (
          <button
            type="button"
            key={step}
            onClick={() => setActiveStep(index)}
            className="relative text-left transition hover:-translate-y-0.5"
          >
            {index < content.flowSteps.length - 1 ? (
              <ArrowRight className="absolute -right-4 top-8 hidden h-5 w-5 text-slate-300 md:block" />
            ) : null}

            <span
              className={`mx-auto grid h-16 w-16 place-items-center rounded-full text-sm font-black ${
                activeStep === index
                  ? `${accent.button} text-white`
                  : `${accent.softBg} ${accent.text}`
              }`}
            >
              {index + 1}
            </span>

            <h3 className="mt-4 text-center text-sm font-black text-slate-950 dark:text-white">
              {step}
            </h3>
            <p className="mt-2 text-center text-xs leading-5 text-slate-500 dark:text-slate-400">
              {activeStep === index
                ? "This stage is active in the preview."
                : "Click to preview this stage of the journey."}
            </p>
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_0.75fr]">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            setSubmitted(true);
            setActiveStep(content.flowSteps.length - 1);
          }}
          className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-[#0b1020]"
        >
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-lg font-black text-slate-950 dark:text-white">
              {content.contactTitle}
            </h3>
            {submitted ? (
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-black text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300">
                Captured
              </span>
            ) : null}
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <input
              defaultValue="Rohan Mehta"
              aria-label="Name"
              className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-600 outline-none transition focus:border-blue-300 dark:border-white/10 dark:bg-white/[0.06] dark:text-white"
            />
            <input
              defaultValue="+91 99887 77665"
              aria-label="Phone"
              className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-600 outline-none transition focus:border-blue-300 dark:border-white/10 dark:bg-white/[0.06] dark:text-white"
            />
            <select
              aria-label="Service"
              value={selectedService}
              onChange={(event) => setSelectedService(event.target.value)}
              className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-600 outline-none transition focus:border-blue-300 dark:border-white/10 dark:bg-white/[0.06] dark:text-white"
            >
              {content.services.map((service) => (
                <option key={service.title}>{service.title}</option>
              ))}
            </select>
            <input
              type="date"
              defaultValue="2026-05-20"
              aria-label="Preferred date"
              className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-600 outline-none transition focus:border-blue-300 dark:border-white/10 dark:bg-white/[0.06] dark:text-white"
            />
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {["WhatsApp", "Email", "CRM"].map((channel) => (
              <button
                type="button"
                key={channel}
                onClick={() => setSelectedChannel(channel)}
                className={`rounded-xl px-4 py-2 text-xs font-black transition ${
                  selectedChannel === channel
                    ? `${accent.button} text-white`
                    : "bg-white text-slate-600 hover:text-slate-950 dark:bg-white/[0.06] dark:text-slate-300"
                }`}
              >
                {channel}
              </button>
            ))}
          </div>

          <button
            type="submit"
            className={`mt-5 grid h-12 w-full place-items-center rounded-xl text-sm font-black text-white transition hover:-translate-y-0.5 ${accent.button}`}
          >
            {submitted ? "Request Submitted" : "Submit Request"}
          </button>
        </form>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/[0.05]">
          <CalendarCheck className={`mb-4 h-6 w-6 ${accent.text}`} />
          <p className="text-lg font-black text-slate-950 dark:text-white">
            {submitted
              ? "Request captured successfully"
              : content.flowSteps[activeStep]}
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
            {submitted
              ? `${selectedService} request routed through ${selectedChannel}. The team can follow up without retyping details.`
              : "Select steps, routing channel, service, and form details to preview the working journey."}
          </p>

          <div className="mt-5 space-y-3">
            {[
              ["Assigned channel", selectedChannel],
              ["Selected interest", selectedService],
              ["Current step", content.flowSteps[activeStep]],
            ].map(([label, value]) => (
              <div
                key={label}
                className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3 text-sm dark:bg-white/[0.06]"
              >
                <span className="font-bold text-slate-500 dark:text-slate-400">
                  {label}
                </span>
                <span className="font-black text-slate-950 dark:text-white">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProfilePreview({
  demo,
  onOpenTab,
}: {
  demo: HealthcareDemo;
  onOpenTab: (tab: DemoTab) => void;
}) {
  const accent = getDemoAccentClasses(demo.accent);
  const content = useHealthcareDemoContent(demo);
  const [selectedItem, setSelectedItem] = useState(
    content.directoryItems[0]?.name ?? content.directoryLabel,
  );
  const [activePanel, setActivePanel] = useState<ProfilePanel>("overview");

  useEffect(() => {
    setSelectedItem(content.directoryItems[0]?.name ?? content.directoryLabel);
    setActivePanel("overview");
  }, [content]);

  return (
    <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
      <div className="rounded-[1.6rem] border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/[0.05]">
        <div
          className="h-64 rounded-2xl bg-cover bg-center"
          style={{ backgroundImage: `url(${demo.image})` }}
        />

        <h3 className="mt-5 text-2xl font-black text-slate-950 dark:text-white">
          {content.profileTitle}
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
          {content.profileDescription}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {profilePanels.map((panel) => (
            <button
              key={panel.id}
              type="button"
              onClick={() => setActivePanel(panel.id)}
              className={`rounded-xl px-4 py-2 text-xs font-black transition ${
                activePanel === panel.id
                  ? `${accent.button} text-white`
                  : "bg-slate-50 text-slate-600 hover:bg-slate-100 dark:bg-white/[0.06] dark:text-slate-300"
              }`}
            >
              {panel.label}
            </button>
          ))}
        </div>

        <div className="mt-5 rounded-2xl bg-slate-50 p-4 dark:bg-white/[0.04]">
          <ProfilePanelContent
            content={content}
            activePanel={activePanel}
            selectedItem={selectedItem}
          />
        </div>

        <button
          type="button"
          onClick={() => onOpenTab("flow")}
          className={`mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-4 text-sm font-black text-white ${accent.button}`}
        >
          {content.profileAction}
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {content.directoryItems.map((item) => (
          <button
            type="button"
            onClick={() => setSelectedItem(item.name)}
            key={item.name}
            className={`rounded-2xl border p-5 text-left transition hover:-translate-y-0.5 ${
              selectedItem === item.name
                ? `border-transparent ${accent.softBg}`
                : "border-slate-200 bg-white dark:border-white/10 dark:bg-white/[0.05]"
            }`}
          >
            <PackageSearch className={`mb-3 h-5 w-5 ${accent.text}`} />
            <p className="text-sm font-black text-slate-950 dark:text-white">
              {item.name}
            </p>
            <p className="mt-1 text-xs font-bold text-slate-500 dark:text-slate-400">
              {item.role}
            </p>
            <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">
              {item.detail}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}

function ProfilePanelContent({
  content,
  activePanel,
  selectedItem,
}: {
  content: DemoContent;
  activePanel: ProfilePanel;
  selectedItem: string;
}) {
  const accent = getDemoAccentClasses(content.key);
  const selected =
    content.directoryItems.find((item) => item.name === selectedItem) ??
    content.directoryItems[0];

  if (activePanel === "availability") {
    return (
      <div>
        <p className="text-sm font-black text-slate-950 dark:text-white">
          {selected?.slot ?? "Availability ready"}
        </p>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {["10:30", "13:15", "17:40"].map((slot) => (
            <span
              key={slot}
              className={`rounded-xl px-3 py-2 text-center text-xs font-black ${
                slot === "13:15"
                  ? `${accent.button} text-white`
                  : "bg-white text-slate-600 dark:bg-white/[0.06] dark:text-slate-300"
              }`}
            >
              {slot}
            </span>
          ))}
        </div>
      </div>
    );
  }

  if (activePanel === "reviews") {
    return (
      <div>
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`h-4 w-4 ${
                star < 5 ? "fill-amber-400 text-amber-400" : "text-amber-300"
              }`}
            />
          ))}
        </div>
        <p className="mt-3 text-sm font-black text-slate-950 dark:text-white">
          4.8 average user rating
        </p>
        <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">
          Reviews and outcomes can be filtered by service, location, category,
          and journey stage.
        </p>
      </div>
    );
  }

  return (
    <div>
      <p className="text-sm font-black text-slate-950 dark:text-white">
        {selected?.name ?? selectedItem}
      </p>
      <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">
        {selected?.detail ??
          "Connected content, inquiry routing, trust signals, and service-specific calls to action."}
      </p>
    </div>
  );
}

function AnalyticsPreview({
  demo,
  onOpenTab,
}: {
  demo: HealthcareDemo;
  onOpenTab: (tab: DemoTab) => void;
}) {
  const accent = getDemoAccentClasses(demo.accent);
  const content = useHealthcareDemoContent(demo);
  const [activeRange, setActiveRange] = useState<AnalyticsRange>("7 Days");
  const [activeSource, setActiveSource] = useState(content.analyticsSources[0]?.[0] ?? "Google Search");
  const [reportReady, setReportReady] = useState(false);
  const metrics = useMemo(
    () => getAnalyticsMetrics(demo, content, activeRange),
    [demo, content, activeRange],
  );

  useEffect(() => {
    setActiveSource(content.analyticsSources[0]?.[0] ?? "Google Search");
    setReportReady(false);
  }, [content]);

  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_0.8fr]">
      <div className="rounded-[1.6rem] border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.05]">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h3 className="text-xl font-black text-slate-950 dark:text-white">
              Website Performance Overview
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
              Filter the dashboard to see category-specific analytics update in place.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {analyticsRanges.map((range) => (
              <button
                key={range}
                type="button"
                onClick={() => setActiveRange(range)}
                className={`rounded-xl px-3 py-2 text-xs font-black transition ${
                  activeRange === range
                    ? `${accent.button} text-white`
                    : "bg-slate-50 text-slate-600 hover:bg-slate-100 dark:bg-white/[0.06] dark:text-slate-300"
                }`}
              >
                {range}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {metrics.map(([label, value, growth]) => (
            <button
              key={label}
              type="button"
              onClick={() => setReportReady(false)}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-left transition hover:-translate-y-0.5 hover:bg-white dark:border-white/10 dark:bg-[#0b1020]"
            >
              <p className="text-xs font-bold text-slate-500 dark:text-slate-400">
                {label}
              </p>
              <p className="mt-2 text-2xl font-black text-slate-950 dark:text-white">
                {value}
              </p>
              <p className={`mt-1 text-xs font-black ${accent.text}`}>
                {growth}
              </p>
            </button>
          ))}
        </div>

        <div className="mt-6 h-44 rounded-2xl bg-slate-50 p-5 dark:bg-[#0b1020]">
          <svg viewBox="0 0 500 140" className="h-full w-full">
            <path
              d={getChartPath(activeRange)}
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="8"
              className={accent.text}
            />
          </svg>
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => setReportReady((value) => !value)}
            className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-black text-white ${accent.button}`}
          >
            <FileText className="h-4 w-4" />
            {reportReady ? "Report Ready" : "Generate Report"}
          </button>
          <button
            type="button"
            onClick={() => onOpenTab("flow")}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 py-3 text-sm font-black text-slate-700 transition hover:-translate-y-0.5 dark:border-white/10 dark:text-white"
          >
            Review Requests
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="rounded-[1.6rem] border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.05]">
        <h3 className="text-xl font-black text-slate-950 dark:text-white">
          Source Performance
        </h3>

        <div className="mt-6 space-y-4">
          {content.analyticsSources.map(([source, value]) => (
            <button
              key={source}
              type="button"
              onClick={() => setActiveSource(source)}
              className="w-full text-left"
            >
              <div className="mb-2 flex justify-between text-sm font-bold text-slate-600 dark:text-slate-300">
                <span>{source}</span>
                <span>{value}</span>
              </div>
              <div className="h-3 rounded-full bg-slate-100 dark:bg-white/10">
                <div
                  className={`h-full rounded-full ${
                    activeSource === source ? accent.button : "bg-slate-300"
                  }`}
                  style={{ width: value }}
                />
              </div>
            </button>
          ))}
        </div>

        <div className="mt-6 rounded-2xl bg-slate-50 p-4 dark:bg-[#0b1020]">
          <p className="text-xs font-black uppercase text-slate-500 dark:text-slate-400">
            Selected source
          </p>
          <p className="mt-2 text-lg font-black text-slate-950 dark:text-white">
            {activeSource}
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
            Campaign details, page paths, request quality, and follow-up status
            can be connected to this view.
          </p>
        </div>

        <Link
          href="/contact"
          className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-4 text-sm font-black text-white ${accent.button}`}
        >
          Build Similar Website
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
  accentText,
}: {
  eyebrow: string;
  title: string;
  description: string;
  accentText: string;
}) {
  return (
    <div>
      <p className={`text-xs font-black uppercase ${accentText}`}>{eyebrow}</p>
      <h3 className="mt-2 text-2xl font-black text-slate-950 dark:text-white">
        {title}
      </h3>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-300">
        {description}
      </p>
    </div>
  );
}

function activeTabLabel(tab: DemoTab, content: DemoContent) {
  if (tab === "desktop") return "Sticky Desktop Website Preview";
  if (tab === "mobile") return "Sticky Mobile Website Preview";
  if (tab === "flow") return `${content.requestAction} Flow`;
  if (tab === "profile") return `${content.profileTitle} Preview`;
  return "Analytics Dashboard Preview";
}

function getTabLabel(tab: DemoTab, content: DemoContent) {
  if (tab === "flow") return `${content.requestAction} Flow`;
  if (tab === "profile") return content.profileTitle;
  return tabs.find((item) => item.id === tab)?.label ?? "Preview";
}

function useHealthcareDemoContent(demo: HealthcareDemo) {
  return useMemo(() => getDemoContent(demo), [demo]);
}

function getDemoContent(demo: HealthcareDemo): DemoContent {
  if (demo.title.includes("Diagnostic")) {
    return createDiagnosticContent(demo);
  }

  if (demo.title.includes("Pharma") || demo.title.includes("Pharmacies")) {
    return createPharmacyContent(demo);
  }

  if (demo.title.includes("Dental")) {
    return createDentalContent(demo);
  }

  if (demo.title.includes("Eye")) {
    return createEyeCareContent(demo);
  }

  if (demo.title.includes("Mental")) {
    return createMentalHealthContent(demo);
  }

  if (demo.title.includes("Fitness") || demo.title.includes("Wellness")) {
    return createFitnessContent(demo);
  }

  if (demo.title.includes("Rehabilitation")) {
    return createRehabContent(demo);
  }

  return createHospitalContent(demo);
}

function createBaseContent(demo: HealthcareDemo): Pick<
  DemoContent,
  "key" | "navSections" | "mobileScreens" | "analyticsSources"
> {
  return {
    key: demo.accent,
    navSections: [
      { id: "home", label: "Home" },
      { id: "services", label: "Services" },
      { id: "directory", label: "Directory" },
      { id: "resources", label: "Resources" },
      { id: "contact", label: "Contact" },
    ],
    mobileScreens: [
      { id: "home", label: "Home", icon: MonitorSmartphone },
      { id: "services", label: "Services", icon: Search },
      { id: "request", label: "Request", icon: CalendarCheck },
      { id: "updates", label: "Updates", icon: Bell },
    ],
    analyticsSources: [
      ["Google Search", "45%"],
      ["Direct", "25%"],
      ["Referral", "20%"],
      ["Social Media", "10%"],
    ],
  };
}

function createHospitalContent(demo: HealthcareDemo): DemoContent {
  return {
    ...createBaseContent(demo),
    badge: "Hospital & Clinic Website Demo",
    intro:
      "A full healthcare site with department pages, emergency access, specialist profiles, appointment requests, insurance guidance, and patient trust content.",
    trustLine: "Departments. Appointments. Emergency Care.",
    primaryAction: "Book Appointment",
    secondaryAction: "Explore Departments",
    requestAction: "Book Appointment",
    navSections: [
      { id: "home", label: "Home" },
      { id: "services", label: "Departments" },
      { id: "directory", label: "Care Team" },
      { id: "resources", label: "Patient Info" },
      { id: "contact", label: "Appointments" },
    ],
    services: [
      {
        title: "Emergency Care",
        description: "Priority routing for urgent contact, ambulance details, triage, and location instructions.",
        meta: "24/7 response",
        icon: HeartPulse,
      },
      {
        title: "Specialty Departments",
        description: "Cardiology, orthopedics, pediatrics, diagnostics, and other service pages with clear CTAs.",
        meta: "Service pages",
        icon: Hospital,
      },
      {
        title: "Appointment Booking",
        description: "Guided request flow that captures concern, department, preferred date, and patient details.",
        meta: "Low friction",
        icon: CalendarCheck,
      },
      {
        title: "Patient Portal",
        description: "Login entry points for reports, visit summaries, prescriptions, billing, and follow-ups.",
        meta: "Secure access",
        icon: ShieldCheck,
      },
    ],
    overviewCards: [
      { title: "Department pages", description: "Patients can compare specialties and care paths.", icon: Hospital },
      { title: "Fast booking", description: "Appointment requests move directly to front desk workflows.", icon: CalendarCheck },
      { title: "Patient updates", description: "Reports, visit notes, and reminders stay visible.", icon: Bell },
      { title: "Admin visibility", description: "Leadership sees leads, departments, and conversion trends.", icon: BarChart3 },
    ],
    directoryLabel: "Care Team",
    directoryTitle: "Specialists and care coordinators",
    directoryDescription:
      "Hospitals and clinics can show departments, specialists, availability, experience, and appointment paths.",
    directoryItems: [
      { name: "Dr. Aisha Raman", role: "Senior Physician", slot: "Next slot 10:30 AM", detail: "Primary care, preventive care, and family health appointments." },
      { name: "Dr. Neil Arora", role: "Orthopedic Specialist", slot: "Next slot 1:15 PM", detail: "Joint pain, sports injury, fracture care, and surgical consults." },
      { name: "Nisha Kapoor", role: "Patient Coordinator", slot: "Available now", detail: "Insurance, registration, department routing, and follow-up support." },
    ],
    resourceLabel: "Patient Info",
    resourceTitle: "Patient information pages",
    resourcePages: [
      { title: "Before Your Visit", description: "Preparation notes, documents to carry, estimated wait times, and check-in instructions.", blocks: ["Documents", "Check-in", "Visit prep"], icon: ClipboardCheck },
      { title: "Insurance & Billing", description: "Insurance partners, payment options, estimated costs, and claim support.", blocks: ["Insurance", "Payments", "Claims"], icon: CreditCard },
      { title: "Emergency Contacts", description: "Emergency phone numbers, ambulance routing, location map, and immediate care instructions.", blocks: ["Ambulance", "Location", "Urgent line"], icon: PhoneCall },
    ],
    contactTitle: "Appointment desk",
    contactDescription: "Ready to route patient requests to the right department.",
    profileKind: "experts",
    profileTitle: "Care Team Directory",
    profileDescription:
      "Show specialists, care coordinators, credentials, availability, reviews, and appointment CTAs.",
    profileAction: "Book Selected Specialist",
    flowSteps: ["Choose Department", "Select Specialist", "Pick Slot", "Confirm Appointment"],
    mobileUpdates: [
      ["Visit confirmed", "Orthopedic consult tomorrow"],
      ["Report ready", "Blood work summary uploaded"],
      ["Billing update", "Insurance review completed"],
    ],
    statsLabels: ["Years", "Patients", "Experts", "Support"],
  };
}

function createDiagnosticContent(demo: HealthcareDemo): DemoContent {
  return {
    ...createBaseContent(demo),
    badge: "Diagnostic Center Website Demo",
    intro:
      "A diagnostic website focused on test discovery, health packages, home sample collection, lab locations, report access, and preparation instructions.",
    trustLine: "Tests. Home Collection. Online Reports.",
    primaryAction: "Book Test",
    secondaryAction: "Browse Tests",
    requestAction: "Book Test",
    navSections: [
      { id: "home", label: "Home" },
      { id: "services", label: "Tests" },
      { id: "directory", label: "Packages" },
      { id: "resources", label: "Reports" },
      { id: "contact", label: "Book Test" },
    ],
    services: [
      { title: "Blood Tests", description: "Routine blood panels, thyroid, diabetes, vitamin, and preventive health testing.", meta: "Same-day slots", icon: TestTube2 },
      { title: "Imaging", description: "Ultrasound, X-ray, ECG, and imaging appointment pages with preparation notes.", meta: "Center based", icon: Activity },
      { title: "Home Collection", description: "Schedule sample pickup at home with technician assignment and reminders.", meta: "Doorstep service", icon: Truck },
      { title: "Health Packages", description: "Preventive packages organized by age, lifestyle, symptoms, and condition.", meta: "Bundled tests", icon: ClipboardList },
    ],
    overviewCards: [
      { title: "Test catalog", description: "Searchable test pages with prep instructions.", icon: TestTube2 },
      { title: "Home collection", description: "Patients can book sample pickup from mobile.", icon: Truck },
      { title: "Report updates", description: "Report-ready notifications and secure access.", icon: FileText },
      { title: "Lab analytics", description: "Track test demand, packages, and source quality.", icon: BarChart3 },
    ],
    directoryLabel: "Packages",
    directoryTitle: "Popular test packages",
    directoryDescription:
      "Diagnostic sites work better when users can compare packages, turnaround time, sample type, and report delivery.",
    directoryItems: [
      { name: "Full Body Checkup", role: "72 parameters", slot: "Report in 24 hrs", detail: "CBC, lipid, liver, kidney, thyroid, diabetes, and vitamin markers." },
      { name: "Diabetes Profile", role: "HbA1c + glucose", slot: "Report same day", detail: "Focused panel for diabetes screening and monitoring." },
      { name: "Home Sample Visit", role: "Technician assigned", slot: "Pickup 7-10 AM", detail: "Doorstep collection with route tracking and reminders." },
    ],
    resourceLabel: "Reports",
    resourceTitle: "Reports and preparation pages",
    resourcePages: [
      { title: "Report Access", description: "Secure report lookup, download, share, and status tracking for patients.", blocks: ["Download", "Share", "Status"], icon: FileText },
      { title: "Test Preparation", description: "Fasting rules, sample requirements, medication notes, and timing guidance.", blocks: ["Fasting", "Samples", "Timing"], icon: ClipboardCheck },
      { title: "Lab Locations", description: "Center finder with hours, map, parking, and available collection services.", blocks: ["Hours", "Map", "Facilities"], icon: MapPin },
    ],
    contactTitle: "Test booking desk",
    contactDescription: "Ready to route this test request to collection or lab staff.",
    profileKind: "catalog",
    profileTitle: "Test Catalog",
    profileDescription:
      "Show tests, packages, sample types, preparation rules, turnaround time, and report access CTAs.",
    profileAction: "Book Selected Test",
    flowSteps: ["Choose Test", "Select Collection", "Enter Details", "Get Report"],
    mobileUpdates: [
      ["Sample collected", "Technician completed pickup"],
      ["Report ready", "CBC report available online"],
      ["Package offer", "Full body checkup discount live"],
    ],
    statsLabels: ["Tests", "Collection", "Reports", "Support"],
    analyticsSources: [
      ["Test Search", "42%"],
      ["Health Packages", "28%"],
      ["Doctor Referral", "18%"],
      ["WhatsApp", "12%"],
    ],
  };
}

function createPharmacyContent(demo: HealthcareDemo): DemoContent {
  return {
    ...createBaseContent(demo),
    badge: "Pharmacy Website Demo",
    intro:
      "A pharmacy website for medicine search, prescription upload, refills, offers, delivery tracking, distributor inquiries, and customer support.",
    trustLine: "Prescriptions. Refills. Delivery.",
    primaryAction: "Upload Prescription",
    secondaryAction: "Search Medicines",
    requestAction: "Upload Prescription",
    navSections: [
      { id: "home", label: "Home" },
      { id: "services", label: "Medicines" },
      { id: "directory", label: "Catalog" },
      { id: "resources", label: "Orders" },
      { id: "contact", label: "Support" },
    ],
    services: [
      { title: "Medicine Search", description: "Search by medicine, salt, category, availability, alternatives, and dosage format.", meta: "Catalog ready", icon: Search },
      { title: "Prescription Upload", description: "Upload prescription images and route them for pharmacist review.", meta: "Rx workflow", icon: ClipboardCheck },
      { title: "Refills & Reminders", description: "Repeat purchase reminders for chronic medication and monthly care plans.", meta: "Repeat orders", icon: Bell },
      { title: "Delivery Tracking", description: "Order updates, rider assignment, delivery ETA, and support messages.", meta: "Live status", icon: Truck },
    ],
    overviewCards: [
      { title: "Medicine catalog", description: "Browse medicines, alternatives, and offers.", icon: Pill },
      { title: "Prescription upload", description: "Customers submit Rx for pharmacist review.", icon: ClipboardCheck },
      { title: "Order updates", description: "Refill reminders and delivery tracking.", icon: Bell },
      { title: "Sales visibility", description: "Track demand, refills, and product categories.", icon: BarChart3 },
    ],
    directoryLabel: "Catalog",
    directoryTitle: "Medicines and care products",
    directoryDescription:
      "A pharmacy should show catalog, Rx validation, stock status, delivery eligibility, offers, and order tracking instead of doctor profiles.",
    directoryItems: [
      { name: "Diabetes Care Kit", role: "Monthly refill", slot: "Auto reminder", detail: "Glucometer strips, lancets, supplements, and regular medication support." },
      { name: "Prescription Medicines", role: "Rx required", slot: "Pharmacist review", detail: "Upload prescription and receive verified medicine availability." },
      { name: "Wellness Essentials", role: "OTC products", slot: "Same-day delivery", detail: "Vitamins, personal care, first aid, and wellness bundles." },
    ],
    resourceLabel: "Orders",
    resourceTitle: "Order and refill pages",
    resourcePages: [
      { title: "Track Order", description: "Order status, delivery ETA, rider contact, payment, and support thread.", blocks: ["Packed", "Out for delivery", "Delivered"], icon: Truck },
      { title: "Refill Reminders", description: "Monthly medicine reminders, refill shortcuts, and recurring order prompts.", blocks: ["Monthly", "WhatsApp", "Auto reminder"], icon: Bell },
      { title: "Distributor Inquiry", description: "B2B lead forms for pharmacies, clinics, wholesalers, and product partners.", blocks: ["Bulk order", "GST details", "Callback"], icon: ShoppingBag },
    ],
    contactTitle: "Pharmacy support",
    contactDescription: "Ready to route this prescription, refill, or order question.",
    profileKind: "catalog",
    profileTitle: "Medicine Catalog",
    profileDescription:
      "Show products, Rx rules, stock status, delivery eligibility, refill prompts, and pharmacist-reviewed inquiry CTAs.",
    profileAction: "Send Product Inquiry",
    flowSteps: ["Search Product", "Upload Prescription", "Confirm Order", "Track Delivery"],
    mobileUpdates: [
      ["Rx under review", "Pharmacist checking prescription"],
      ["Refill due", "Monthly medicine reminder"],
      ["Order shipped", "Delivery arriving today"],
    ],
    statsLabels: ["Rx", "B2B", "Delivery", "Safety"],
    analyticsSources: [
      ["Medicine Search", "40%"],
      ["Prescription Upload", "30%"],
      ["Refill Reminder", "20%"],
      ["Offers", "10%"],
    ],
  };
}

function createDentalContent(demo: HealthcareDemo): DemoContent {
  return {
    ...createHospitalContent(demo),
    badge: "Dental Clinic Website Demo",
    intro:
      "A dental website built around treatment education, smile galleries, cosmetic procedures, implants, emergency dentistry, reviews, and easy booking.",
    trustLine: "Treatments. Smile Gallery. Emergency Dental.",
    primaryAction: "Book Dental Visit",
    secondaryAction: "View Treatments",
    requestAction: "Book Dental Visit",
    navSections: [
      { id: "home", label: "Home" },
      { id: "services", label: "Treatments" },
      { id: "directory", label: "Smile Gallery" },
      { id: "resources", label: "Patient Info" },
      { id: "contact", label: "Book Visit" },
    ],
    services: [
      { title: "Dental Implants", description: "Implant consultation pages with process, comfort, recovery, and financing details.", meta: "Consult ready", icon: Sparkles },
      { title: "Orthodontics", description: "Braces and aligner pages with timelines, before-after proof, and appointment CTAs.", meta: "Smile planning", icon: Stethoscope },
      { title: "Whitening & Veneers", description: "Cosmetic dentistry pages for smile design, whitening, veneers, and bonding.", meta: "Cosmetic care", icon: Star },
      { title: "Emergency Dentistry", description: "Urgent dental pain, broken tooth, swelling, and same-day contact routing.", meta: "Fast response", icon: PhoneCall },
    ],
    directoryLabel: "Smile Gallery",
    directoryTitle: "Treatment outcomes and case previews",
    directoryDescription:
      "Dental sites should feature visual trust through treatment categories, before-after stories, reviews, and financing prompts.",
    directoryItems: [
      { name: "Implant Smile Case", role: "Before / after", slot: "Consult available", detail: "Case block for implant results, timeline, and patient comfort notes." },
      { name: "Whitening Result", role: "Cosmetic dentistry", slot: "Same-week slot", detail: "Smile preview with shade improvement, treatment details, and review CTA." },
      { name: "Emergency Case", role: "Same-day care", slot: "Priority routing", detail: "Urgent treatment path for pain, swelling, chipped tooth, or trauma." },
    ],
    profileKind: "care",
    profileTitle: "Treatment Gallery",
    profileDescription:
      "Show treatments, outcomes, comfort promises, financing, reviews, and consultation CTAs.",
    profileAction: "Book Treatment Consult",
    flowSteps: ["Choose Treatment", "Share Concern", "Pick Slot", "Confirm Visit"],
    statsLabels: ["Years", "Smiles", "Treatments", "Support"],
  };
}

function createEyeCareContent(demo: HealthcareDemo): DemoContent {
  return {
    ...createBaseContent(demo),
    badge: "Eye Care Website Demo",
    intro:
      "An eye care website focused on eye exams, cataract and LASIK education, glaucoma screening, optical products, contact lenses, and appointment conversion.",
    trustLine: "Eye Exams. LASIK. Cataract Care.",
    primaryAction: "Book Eye Exam",
    secondaryAction: "Explore Vision Services",
    requestAction: "Book Eye Exam",
    navSections: [
      { id: "home", label: "Home" },
      { id: "services", label: "Eye Services" },
      { id: "directory", label: "Vision Care" },
      { id: "resources", label: "Eye Health" },
      { id: "contact", label: "Book Eye Exam" },
    ],
    services: [
      { title: "Comprehensive Eye Exams", description: "Vision testing, eye health checks, prescriptions, and follow-up recommendations.", meta: "Annual care", icon: Eye },
      { title: "Cataract Care", description: "Cataract evaluation pages with lens options, surgery education, and recovery notes.", meta: "Surgery education", icon: ShieldCheck },
      { title: "LASIK & Vision Correction", description: "Candidate guidance, consultation booking, technology details, and FAQs.", meta: "Consult funnel", icon: Sparkles },
      { title: "Optical & Contact Lenses", description: "Frames, lenses, specialty contacts, fitting appointments, and optical store CTAs.", meta: "Retail-ready", icon: ShoppingBag },
    ],
    overviewCards: [
      { title: "Eye services", description: "Exams, cataracts, LASIK, retina, and optical care.", icon: Eye },
      { title: "Exam booking", description: "Patients request eye exams from mobile.", icon: CalendarCheck },
      { title: "Eye health updates", description: "Screening reminders and optical order updates.", icon: Bell },
      { title: "Vision analytics", description: "Track exams, optical demand, and LASIK leads.", icon: BarChart3 },
    ],
    directoryLabel: "Vision Care",
    directoryTitle: "Eye care service paths",
    directoryDescription:
      "Eye care centers need service pages for exams, cataracts, LASIK, glaucoma, optical, and contact lenses, with education-heavy content.",
    directoryItems: [
      { name: "Cataract Evaluation", role: "Surgical care path", slot: "Consult slots open", detail: "Lens options, safety notes, pre-op checklist, and recovery guidance." },
      { name: "LASIK Consultation", role: "Vision correction", slot: "Candidate check", detail: "Eligibility, technology, financing, and post-care information." },
      { name: "Optical Boutique", role: "Frames & lenses", slot: "Fitting available", detail: "Frames, contact lenses, prescriptions, and store pickup details." },
    ],
    resourceLabel: "Eye Health",
    resourceTitle: "Eye health education pages",
    resourcePages: [
      { title: "Cataract Guide", description: "Symptoms, treatment options, lens choices, recovery, and questions to ask.", blocks: ["Symptoms", "Lens options", "Recovery"], icon: FileText },
      { title: "LASIK Candidate Check", description: "Eligibility questions, consultation flow, risks, and post-care expectations.", blocks: ["Eligibility", "Technology", "Aftercare"], icon: Eye },
      { title: "Optical Orders", description: "Frame selection, contact lens fitting, prescription updates, and pickup status.", blocks: ["Frames", "Contacts", "Pickup"], icon: ShoppingBag },
    ],
    contactTitle: "Eye exam desk",
    contactDescription: "Ready to route eye exam, LASIK, cataract, or optical inquiries.",
    profileKind: "care",
    profileTitle: "Vision Care Catalog",
    profileDescription:
      "Show eye services, optical products, cataract and LASIK education, screening reminders, and booking CTAs.",
    profileAction: "Book Vision Service",
    flowSteps: ["Choose Eye Service", "Share Vision Concern", "Pick Visit Type", "Confirm Eye Exam"],
    mobileUpdates: [
      ["Eye exam due", "Annual vision reminder"],
      ["Glasses ready", "Optical order available for pickup"],
      ["LASIK consult", "Candidate checklist sent"],
    ],
    statsLabels: ["Exams", "Lenses", "Care", "Tech"],
    analyticsSources: [
      ["Eye Exam Search", "36%"],
      ["LASIK Pages", "27%"],
      ["Optical Store", "22%"],
      ["Referral", "15%"],
    ],
  };
}

function createMentalHealthContent(demo: HealthcareDemo): DemoContent {
  return {
    ...createBaseContent(demo),
    badge: "Mental Health Website Demo",
    intro:
      "A calm mental health site with therapy services, psychiatry, telehealth, intake forms, insurance guidance, crisis-safe messaging, and privacy-focused content.",
    trustLine: "Therapy. Psychiatry. Private Care.",
    primaryAction: "Start Intake",
    secondaryAction: "Explore Care Options",
    requestAction: "Start Intake",
    navSections: [
      { id: "home", label: "Home" },
      { id: "services", label: "Care Options" },
      { id: "directory", label: "Therapies" },
      { id: "resources", label: "Resources" },
      { id: "contact", label: "Intake" },
    ],
    services: [
      { title: "Individual Therapy", description: "Therapy pages for anxiety, stress, trauma, depression, and life transitions.", meta: "Private sessions", icon: Brain },
      { title: "Psychiatry", description: "Evaluation, treatment planning, medication management, and follow-up care.", meta: "Clinical care", icon: Stethoscope },
      { title: "Telehealth Sessions", description: "Secure virtual visits with clear scheduling and preparation instructions.", meta: "Virtual care", icon: Video },
      { title: "Wellness Programs", description: "Programs for mindfulness, resilience, sleep, stress, and emotional wellness.", meta: "Ongoing support", icon: HeartPulse },
    ],
    overviewCards: [
      { title: "Care options", description: "Therapy, psychiatry, telehealth, and programs.", icon: Brain },
      { title: "Private intake", description: "Users can start with a soft, clear form.", icon: ShieldCheck },
      { title: "Session reminders", description: "Appointment and resource updates stay visible.", icon: Bell },
      { title: "Outcome tracking", description: "Track intake, attendance, and engagement.", icon: BarChart3 },
    ],
    directoryLabel: "Therapies",
    directoryTitle: "Care paths and therapy programs",
    directoryDescription:
      "Mental health websites should prioritize clarity, privacy, telehealth, appointment availability, and evidence-informed care options.",
    directoryItems: [
      { name: "Anxiety Support", role: "Therapy path", slot: "First visit 60 min", detail: "CBT-informed support, goals, progress tracking, and follow-up planning." },
      { name: "Medication Management", role: "Psychiatry", slot: "Follow-up slots", detail: "Evaluation, medication review, monitoring, and care adjustments." },
      { name: "Telehealth Intake", role: "Virtual care", slot: "Online slots", detail: "Secure online intake, insurance check, and video visit preparation." },
    ],
    resourceLabel: "Resources",
    resourceTitle: "Support and education pages",
    resourcePages: [
      { title: "First Visit Guide", description: "What to expect, intake steps, privacy notes, and session preparation.", blocks: ["Intake", "Privacy", "Preparation"], icon: ClipboardCheck },
      { title: "Conditions We Support", description: "Anxiety, depression, ADHD, trauma, sleep, stress, and mood care pages.", blocks: ["Anxiety", "Depression", "ADHD"], icon: Brain },
      { title: "Insurance & Pricing", description: "Plan verification, self-pay options, session cost, and billing guidance.", blocks: ["Insurance", "Self-pay", "Billing"], icon: CreditCard },
    ],
    contactTitle: "Private intake form",
    contactDescription: "Ready to route this intake safely to the care team.",
    profileKind: "care",
    profileTitle: "Therapy & Care Paths",
    profileDescription:
      "Show care options, privacy notes, telehealth availability, intake steps, and trust-building resources.",
    profileAction: "Start Selected Intake",
    flowSteps: ["Choose Care Type", "Complete Intake", "Verify Fit", "Schedule Session"],
    mobileUpdates: [
      ["Session reminder", "Telehealth visit tomorrow"],
      ["Intake reviewed", "Care coordinator follow-up queued"],
      ["Resource shared", "Sleep routine guide available"],
    ],
    statsLabels: ["Care", "Trust", "Privacy", "Online"],
    analyticsSources: [
      ["Therapy Search", "38%"],
      ["Telehealth", "26%"],
      ["Insurance Pages", "21%"],
      ["Referral", "15%"],
    ],
  };
}

function createFitnessContent(demo: HealthcareDemo): DemoContent {
  return {
    ...createBaseContent(demo),
    badge: "Fitness & Wellness Website Demo",
    intro:
      "A wellness website with programs, trainer profiles, membership plans, class schedules, nutrition coaching, progress tracking, and lead capture.",
    trustLine: "Programs. Memberships. Coaching.",
    primaryAction: "Book Trial Session",
    secondaryAction: "Explore Programs",
    requestAction: "Book Trial Session",
    navSections: [
      { id: "home", label: "Home" },
      { id: "services", label: "Programs" },
      { id: "directory", label: "Memberships" },
      { id: "resources", label: "Progress" },
      { id: "contact", label: "Trial" },
    ],
    services: [
      { title: "Workout Programs", description: "Strength, cardio, yoga, weight loss, and mobility programs with schedule CTAs.", meta: "Class ready", icon: Dumbbell },
      { title: "Trainer Profiles", description: "Trainer specialties, certifications, class times, and consultation booking.", meta: "Trust builder", icon: UserRound },
      { title: "Membership Plans", description: "Monthly plans, trial offers, inclusions, payment, and upgrade paths.", meta: "Sales flow", icon: CreditCard },
      { title: "Nutrition Coaching", description: "Meal guidance, habit tracking, wellness goals, and progress check-ins.", meta: "Coaching", icon: HeartPulse },
    ],
    overviewCards: [
      { title: "Program pages", description: "Class schedules and membership flows.", icon: Dumbbell },
      { title: "Trial booking", description: "Visitors can request a starter session.", icon: CalendarCheck },
      { title: "Progress updates", description: "Goal tracking and coaching reminders.", icon: Activity },
      { title: "Revenue analytics", description: "Track trials, memberships, and retention.", icon: BarChart3 },
    ],
    directoryLabel: "Memberships",
    directoryTitle: "Programs and membership paths",
    directoryDescription:
      "Fitness and wellness websites should convert interest into trials, memberships, trainer consults, and recurring programs.",
    directoryItems: [
      { name: "Transformation Plan", role: "12-week program", slot: "Trial available", detail: "Workouts, nutrition check-ins, body metrics, and weekly coaching." },
      { name: "Yoga & Mobility", role: "Group classes", slot: "Morning batches", detail: "Class schedule, instructor bio, wellness goals, and booking CTA." },
      { name: "Premium Membership", role: "Unlimited access", slot: "Monthly plan", detail: "Gym access, trainer consult, progress reviews, and member offers." },
    ],
    resourceLabel: "Progress",
    resourceTitle: "Progress and member pages",
    resourcePages: [
      { title: "Progress Tracker", description: "Weight, strength, attendance, goals, habits, and trainer feedback.", blocks: ["Goals", "Attendance", "Metrics"], icon: Activity },
      { title: "Class Schedule", description: "Daily batches, trainer availability, capacity, waitlist, and reminders.", blocks: ["Batches", "Capacity", "Waitlist"], icon: CalendarCheck },
      { title: "Member Offers", description: "Trial offers, upgrades, referrals, and membership renewal prompts.", blocks: ["Trial", "Referral", "Renewal"], icon: Sparkles },
    ],
    contactTitle: "Trial session form",
    contactDescription: "Ready to route this trial or membership request.",
    profileKind: "programs",
    profileTitle: "Program Catalog",
    profileDescription:
      "Show programs, memberships, trainer support, progress tracking, and trial booking CTAs.",
    profileAction: "Book Trial Program",
    flowSteps: ["Choose Program", "Select Batch", "Share Goal", "Confirm Trial"],
    mobileUpdates: [
      ["Trial confirmed", "Strength session tomorrow"],
      ["Progress check", "Weekly review available"],
      ["Membership offer", "Referral bonus unlocked"],
    ],
    statsLabels: ["Plans", "Coaches", "Tracking", "Growth"],
    analyticsSources: [
      ["Program Search", "34%"],
      ["Instagram", "28%"],
      ["Trial Offers", "24%"],
      ["Referral", "14%"],
    ],
  };
}

function createRehabContent(demo: HealthcareDemo): DemoContent {
  return {
    ...createBaseContent(demo),
    badge: "Rehabilitation Website Demo",
    intro:
      "A rehabilitation website for physiotherapy services, recovery plans, therapist availability, home exercise guidance, progress tracking, and follow-up reminders.",
    trustLine: "Therapy. Recovery. Progress.",
    primaryAction: "Book Rehab Assessment",
    secondaryAction: "Explore Therapies",
    requestAction: "Book Rehab Assessment",
    navSections: [
      { id: "home", label: "Home" },
      { id: "services", label: "Therapies" },
      { id: "directory", label: "Recovery Plans" },
      { id: "resources", label: "Progress" },
      { id: "contact", label: "Assessment" },
    ],
    services: [
      { title: "Physiotherapy", description: "Pain, mobility, sports injury, post-surgery, and orthopedic rehab pages.", meta: "Assessment led", icon: Activity },
      { title: "Recovery Programs", description: "Structured recovery plans with milestones, exercises, and session scheduling.", meta: "Program based", icon: ClipboardCheck },
      { title: "Pain Management", description: "Back, neck, shoulder, knee, and chronic pain care paths.", meta: "Condition pages", icon: HeartPulse },
      { title: "Home Exercise Plans", description: "Guided home routines, reminders, video instructions, and progress logging.", meta: "Follow-up ready", icon: Video },
    ],
    overviewCards: [
      { title: "Therapy services", description: "Condition pages and recovery programs.", icon: Activity },
      { title: "Assessment booking", description: "Patients can request an evaluation.", icon: CalendarCheck },
      { title: "Exercise updates", description: "Home plans and follow-up reminders.", icon: Bell },
      { title: "Progress analytics", description: "Track sessions, outcomes, and adherence.", icon: BarChart3 },
    ],
    directoryLabel: "Recovery Plans",
    directoryTitle: "Recovery programs and therapy tracks",
    directoryDescription:
      "Rehabilitation sites need therapy details, therapist availability, progress milestones, home plans, and follow-up automation.",
    directoryItems: [
      { name: "Post-Surgery Rehab", role: "Milestone plan", slot: "Assessment first", detail: "Session plan, recovery stages, pain score, and mobility tracking." },
      { name: "Sports Injury Recovery", role: "Performance rehab", slot: "Evening slots", detail: "Return-to-play plan, strength work, mobility, and progress review." },
      { name: "Back Pain Program", role: "Pain care path", slot: "Home plan ready", detail: "Assessment, therapy sessions, exercise videos, and reminders." },
    ],
    resourceLabel: "Progress",
    resourceTitle: "Progress and exercise pages",
    resourcePages: [
      { title: "Exercise Library", description: "Video-guided routines, sets, reps, precautions, and daily reminders.", blocks: ["Videos", "Sets", "Precautions"], icon: Video },
      { title: "Progress Notes", description: "Pain score, mobility range, attendance, therapist feedback, and next goals.", blocks: ["Pain score", "Mobility", "Goals"], icon: Activity },
      { title: "Follow-up Plan", description: "Next visits, home plan updates, reminders, and recovery check-ins.", blocks: ["Visits", "Reminders", "Check-ins"], icon: Bell },
    ],
    contactTitle: "Assessment request",
    contactDescription: "Ready to route this rehab request to a therapist.",
    profileKind: "programs",
    profileTitle: "Recovery Plan Catalog",
    profileDescription:
      "Show therapy programs, recovery stages, therapist support, exercise plans, and progress CTAs.",
    profileAction: "Book Recovery Assessment",
    flowSteps: ["Choose Therapy", "Share Pain Area", "Pick Assessment", "Start Recovery Plan"],
    mobileUpdates: [
      ["Exercise due", "Home routine ready"],
      ["Progress logged", "Mobility score improved"],
      ["Follow-up", "Therapy session tomorrow"],
    ],
    statsLabels: ["Rehab", "Care", "Plans", "Tracking"],
    analyticsSources: [
      ["Therapy Search", "37%"],
      ["Pain Pages", "25%"],
      ["Doctor Referral", "22%"],
      ["WhatsApp", "16%"],
    ],
  };
}

function getAnalyticsMetrics(
  demo: HealthcareDemo,
  content: DemoContent,
  range: AnalyticsRange,
) {
  const topLabel = content.services[0]?.title ?? demo.title;

  if (range === "Today") {
    return [
      ["Visitors", "642", "+8.4%"],
      ["Requests", "58", "+12.1%"],
      ["Conversion", "9.0%", "+3.5%"],
      ["Top Interest", topLabel, "+6.7%"],
    ];
  }

  if (range === "30 Days") {
    return [
      ["Visitors", "34,850", "+31.9%"],
      ["Requests", "3,420", "+36.4%"],
      ["Conversion", "9.8%", "+18.4%"],
      ["Top Interest", topLabel, "+24.7%"],
    ];
  }

  return [
    ["Visitors", "12,540", "+24.5%"],
    ["Requests", "1,245", "+32.1%"],
    ["Conversion", "9.8%", "+18.4%"],
    ["Top Interest", topLabel, "+20.7%"],
  ];
}

function getChartPath(range: AnalyticsRange) {
  if (range === "Today") {
    return "M10 112 C70 96, 100 88, 150 92 S240 58, 290 78 S370 42, 430 55 S470 40, 490 32";
  }

  if (range === "30 Days") {
    return "M10 118 C55 98, 80 112, 125 80 S205 96, 250 62 S335 78, 390 42 S455 36, 490 18";
  }

  return "M10 105 C60 55, 100 95, 150 60 S240 100, 290 48 S380 68, 430 30 S470 52, 490 24";
}

function getDemoAccentClasses(accent: string) {
  if (accent === "violet") {
    return {
      iconBg: "bg-violet-50 dark:bg-violet-400/10",
      iconText: "text-violet-600 dark:text-violet-300",
      button: "bg-violet-600",
      softBg: "bg-violet-50 dark:bg-violet-400/10",
      text: "text-violet-600 dark:text-violet-300",
    };
  }

  if (accent === "blue") {
    return {
      iconBg: "bg-blue-50 dark:bg-blue-400/10",
      iconText: "text-blue-600 dark:text-blue-300",
      button: "bg-blue-600",
      softBg: "bg-blue-50 dark:bg-blue-400/10",
      text: "text-blue-600 dark:text-blue-300",
    };
  }

  if (accent === "teal") {
    return {
      iconBg: "bg-teal-50 dark:bg-teal-400/10",
      iconText: "text-teal-600 dark:text-teal-300",
      button: "bg-teal-600",
      softBg: "bg-teal-50 dark:bg-teal-400/10",
      text: "text-teal-600 dark:text-teal-300",
    };
  }

  if (accent === "orange") {
    return {
      iconBg: "bg-orange-50 dark:bg-orange-400/10",
      iconText: "text-orange-600 dark:text-orange-300",
      button: "bg-orange-600",
      softBg: "bg-orange-50 dark:bg-orange-400/10",
      text: "text-orange-600 dark:text-orange-300",
    };
  }

  if (accent === "rose") {
    return {
      iconBg: "bg-rose-50 dark:bg-rose-400/10",
      iconText: "text-rose-600 dark:text-rose-300",
      button: "bg-rose-600",
      softBg: "bg-rose-50 dark:bg-rose-400/10",
      text: "text-rose-600 dark:text-rose-300",
    };
  }

  return {
    iconBg: "bg-emerald-50 dark:bg-emerald-400/10",
    iconText: "text-emerald-600 dark:text-emerald-300",
    button: "bg-emerald-600",
    softBg: "bg-emerald-50 dark:bg-emerald-400/10",
    text: "text-emerald-600 dark:text-emerald-300",
  };
}
