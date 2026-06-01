"use client";

import Link from "next/link";
import { useEffect, useState, type ChangeEvent } from "react";
import {
  ArrowRight,
  BarChart3,
  Bell,
  CalendarCheck,
  CheckCircle2,
  FileText,
  Menu,
  MonitorSmartphone,
  PackageSearch,
  PhoneCall,
  Search,
  Smartphone,
  X,
} from "lucide-react";
import type {
  IndustryWebsiteDemo,
  IndustryWebsiteDemoContent,
  IndustryWebsiteDemoDirectoryItem,
  IndustryWebsiteDemoResourcePage,
  IndustryWebsiteDemoSectionId,
  IndustryWebsitePageData,
} from "./industryWebsiteData";

type DemoTab = "desktop" | "mobile" | "flow" | "catalog" | "analytics";

type IndustryWebsiteDemoModalProps = {
  data: IndustryWebsitePageData;
  demo: IndustryWebsiteDemo;
  onClose: () => void;
};

export default function IndustryWebsiteDemoModal({
  data,
  demo,
  onClose,
}: IndustryWebsiteDemoModalProps) {
  const content = data.demoContent;
  const [activeTab, setActiveTab] = useState<DemoTab>("desktop");
  const accent = getDemoAccentClasses(demo.accent);

  useEffect(() => {
    setActiveTab("desktop");
  }, [demo.title, data.industrySlug]);

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

  const tabs = [
    { id: "desktop", label: "Desktop Preview", icon: MonitorSmartphone },
    { id: "mobile", label: "Mobile Preview", icon: Smartphone },
    { id: "flow", label: content.flowTabLabel, icon: CalendarCheck },
    { id: "catalog", label: content.catalogTabLabel, icon: PackageSearch },
    { id: "analytics", label: "Lead Insights", icon: BarChart3 },
  ] as const;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-slate-950/70 p-0 backdrop-blur-xl sm:p-4">
      <button
        type="button"
        aria-label="Close preview"
        className="absolute inset-0 cursor-default"
        onClick={onClose}
      />

      <section className="relative h-[100dvh] w-full max-w-none overflow-hidden rounded-none border border-white/20 bg-white shadow-[0_35px_120px_rgba(0,0,0,0.35)] dark:border-white/10 dark:bg-[#080b16] sm:h-[92vh] sm:max-w-[1380px] sm:rounded-[2rem]">
        <button
          type="button"
          aria-label="Close preview"
          onClick={onClose}
          className="absolute right-3 top-3 z-30 grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:scale-105 dark:border-white/10 dark:bg-white/[0.08] dark:text-white sm:right-5 sm:top-5 sm:h-11 sm:w-11"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex h-full min-h-0 overflow-y-auto bg-white px-3 pb-5 pt-12 dark:bg-[#080b16] lg:hidden">
          <MobilePreview content={content} demo={demo} onOpenTab={setActiveTab} />
        </div>

        <div className="hidden h-full min-h-0 overflow-hidden lg:grid lg:max-h-[92vh] lg:grid-cols-[300px_1fr]">
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
                  {content.modalBadge}
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

            <nav className="mt-7 space-y-2" aria-label="Website preview tabs">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;

                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex w-full items-start gap-3 rounded-2xl px-4 py-3 text-left transition ${
                      isActive
                        ? `${accent.softBg} ${accent.text}`
                        : "text-slate-600 hover:bg-white hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/[0.06] dark:hover:text-white"
                    }`}
                  >
                    <Icon className="mt-0.5 h-5 w-5 shrink-0" />
                    <span className="min-w-0">
                      <span className="block text-sm font-black leading-5">
                        {tab.label}
                      </span>
                      <span className="mt-0.5 block text-[11px] font-semibold leading-4 text-slate-500 dark:text-slate-400">
                        {getTabDescription(tab.id, content)}
                      </span>
                    </span>
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
                    onClick={() => setActiveTab("catalog")}
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

          <div className="min-h-0 flex-1 overflow-y-auto bg-white p-5 dark:bg-[#080b16] sm:p-7">
            <div className="mb-5 pr-14">
              <p className={`text-sm font-black ${accent.text}`}>
                {tabs.find((tab) => tab.id === activeTab)?.label}
              </p>
              <h2 className="mt-1 text-2xl font-black text-slate-950 dark:text-white sm:text-3xl">
                {demo.title} Website Experience
              </h2>
            </div>

            {activeTab === "desktop" ? (
              <DesktopPreview
                content={content}
                data={data}
                demo={demo}
                onOpenTab={setActiveTab}
              />
            ) : null}

            {activeTab === "mobile" ? (
              <MobilePreview content={content} demo={demo} onOpenTab={setActiveTab} />
            ) : null}

            {activeTab === "flow" ? (
              <FlowPreview content={content} demo={demo} />
            ) : null}

            {activeTab === "catalog" ? (
              <CatalogPreview content={content} demo={demo} onOpenTab={setActiveTab} />
            ) : null}

            {activeTab === "analytics" ? (
              <AnalyticsPreview content={content} demo={demo} onOpenTab={setActiveTab} />
            ) : null}

            <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 px-5 py-4 text-sm leading-6 text-slate-600 dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-slate-300">
              This is a strategic preview. Final design, content, modules,
              images, booking flow, forms, and dashboards can be customized
              according to the client&apos;s {data.industryName.toLowerCase()} business.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function getTabDescription(tab: DemoTab, content: IndustryWebsiteDemoContent) {
  if (tab === "desktop") {
    return "Full website layout, trust sections, and conversion CTAs.";
  }

  if (tab === "mobile") {
    return "Compact mobile website with menu-based pages.";
  }

  if (tab === "flow") {
    return `${content.flowTabLabel} steps, fields, and follow-up routing.`;
  }

  if (tab === "catalog") {
    return `${content.catalogTabLabel}, services, proof, and detailed pages.`;
  }

  return "Lead source, recent requests, and performance overview.";
}

function DesktopPreview({
  content,
  data,
  demo,
  onOpenTab,
}: {
  content: IndustryWebsiteDemoContent;
  data: IndustryWebsitePageData;
  demo: IndustryWebsiteDemo;
  onOpenTab: (tab: DemoTab) => void;
}) {
  const accent = getDemoAccentClasses(demo.accent);
  const [activeSection, setActiveSection] =
    useState<IndustryWebsiteDemoSectionId>("home");
  const [selectedService, setSelectedService] = useState(
    content.services[0]?.title ?? content.catalogTabLabel,
  );
  const [selectedDirectory, setSelectedDirectory] = useState(
    content.directoryItems[0]?.name ?? content.directoryLabel,
  );
  const [selectedResource, setSelectedResource] = useState(
    content.resourcePages[0]?.title ?? content.resourceLabel,
  );
  const [requestSent, setRequestSent] = useState(false);

  useEffect(() => {
    setActiveSection(content.navSections[0]?.id ?? "home");
    setSelectedService(content.services[0]?.title ?? content.catalogTabLabel);
    setSelectedDirectory(content.directoryItems[0]?.name ?? content.directoryLabel);
    setSelectedResource(content.resourcePages[0]?.title ?? content.resourceLabel);
    setRequestSent(false);
  }, [content, demo.title]);

  function openPage(section: IndustryWebsiteDemoSectionId) {
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
            onClick={() => onOpenTab("flow")}
            className={`rounded-lg px-4 py-2 text-xs font-black text-white transition hover:-translate-y-0.5 ${accent.button}`}
          >
            {content.primaryAction}
          </button>
        </div>

        {activeSection === "sectionA" ? (
          <ServicesPage
            accent={accent}
            content={content}
            selectedService={selectedService}
            onOpenPage={openPage}
            onSelectService={setSelectedService}
          />
        ) : null}

        {activeSection === "sectionB" ? (
          <DirectoryPage
            accent={accent}
            content={content}
            selectedDirectory={selectedDirectory}
            onOpenPage={openPage}
            onSelectDirectory={setSelectedDirectory}
          />
        ) : null}

        {activeSection === "sectionC" ? (
          <ResourcesPage
            accent={accent}
            content={content}
            selectedResource={selectedResource}
            onOpenPage={openPage}
            onSelectResource={setSelectedResource}
          />
        ) : null}

        {activeSection === "contact" ? (
          <ContactPage
            accent={accent}
            content={content}
            requestSent={requestSent}
            selectedService={selectedService}
            onOpenTab={onOpenTab}
            onSelectService={setSelectedService}
            onSubmitRequest={() => setRequestSent(true)}
          />
        ) : null}

        {activeSection === "home" ? (
          <HomePage
            accent={accent}
            content={content}
            data={data}
            demo={demo}
            onOpenPage={openPage}
            onOpenTab={onOpenTab}
          />
        ) : null}

        <DemoFooter
          accent={accent}
          content={content}
          demo={demo}
          onOpenPage={openPage}
        />
      </div>
    </div>
  );
}

function HomePage({
  accent,
  content,
  data,
  demo,
  onOpenPage,
  onOpenTab,
}: {
  accent: ReturnType<typeof getDemoAccentClasses>;
  content: IndustryWebsiteDemoContent;
  data: IndustryWebsitePageData;
  demo: IndustryWebsiteDemo;
  onOpenPage: (section: IndustryWebsiteDemoSectionId) => void;
  onOpenTab: (tab: DemoTab) => void;
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
              onClick={() => onOpenPage("sectionA")}
              className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-black text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300 dark:border-white/10 dark:bg-white/[0.06] dark:text-white"
            >
              {content.secondaryAction}
            </button>
            <button
              type="button"
              onClick={() => onOpenTab("analytics")}
              className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-black text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300 dark:border-white/10 dark:bg-white/[0.06] dark:text-white"
            >
              View Lead Insights
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
              {content.statsLabels[index] ?? data.industryName}
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
                card.icon === BarChart3 ? onOpenTab("analytics") : onOpenPage("sectionA")
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
            The homepage moves visitors from trust to action: understand the
            offer, compare the right path, see proof, then send a request
            without leaving the website experience.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {content.flowSteps.map((step, index) => (
            <button
              key={step}
              type="button"
              onClick={() => onOpenTab("flow")}
              className="rounded-2xl bg-slate-50 p-4 text-left transition hover:-translate-y-0.5 dark:bg-white/[0.05]"
            >
              <p className={`text-xs font-black ${accent.text}`}>
                Step {index + 1}
              </p>
              <p className="mt-2 text-sm font-black text-slate-950 dark:text-white">
                {step}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesPage({
  accent,
  content,
  selectedService,
  onOpenPage,
  onSelectService,
}: {
  accent: ReturnType<typeof getDemoAccentClasses>;
  content: IndustryWebsiteDemoContent;
  selectedService: string;
  onOpenPage: (section: IndustryWebsiteDemoSectionId) => void;
  onSelectService: (service: string) => void;
}) {
  const sectionLabel =
    content.navSections.find((section) => section.id === "sectionA")?.label ??
    content.catalogTabLabel;
  const selected =
    content.services.find((service) => service.title === selectedService) ??
    content.services[0];

  return (
    <section className="min-h-[680px] p-7">
      <SectionHeader
        accentText={accent.text}
        eyebrow={sectionLabel}
        title={`${sectionLabel} built for real visitor intent`}
        description={`This section uses industry-specific cards for ${content.catalogTabLabel.toLowerCase()}, not a generic SaaS layout.`}
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
              {selected.description} The final build can add FAQs, pricing
              guidance, proof blocks, eligibility notes, and a dedicated CTA.
            </p>
            <button
              type="button"
              onClick={() => onOpenPage("contact")}
              className={`mt-5 inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-black text-white ${accent.button}`}
            >
              Continue To Request
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          <div className="grid gap-3">
            {["Overview", "Details", "Proof", "Next step"].map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-white p-4 dark:bg-white/[0.06]"
              >
                <p className="text-sm font-black text-slate-950 dark:text-white">
                  {item}
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                  Content block tailored to this exact industry section.
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}

function DirectoryPage({
  accent,
  content,
  selectedDirectory,
  onOpenPage,
  onSelectDirectory,
}: {
  accent: ReturnType<typeof getDemoAccentClasses>;
  content: IndustryWebsiteDemoContent;
  selectedDirectory: string;
  onOpenPage: (section: IndustryWebsiteDemoSectionId) => void;
  onSelectDirectory: (item: string) => void;
}) {
  const selected =
    content.directoryItems.find((item) => item.name === selectedDirectory) ??
    content.directoryItems[0];

  return (
    <section className="min-h-[680px] p-7">
      <SectionHeader
        accentText={accent.text}
        eyebrow={content.directoryLabel}
        title={content.directoryTitle}
        description={content.directoryDescription}
      />

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {content.directoryItems.map((item) => (
          <DirectoryCard
            key={item.name}
            accent={accent}
            active={selectedDirectory === item.name}
            item={item}
            onClick={() => onSelectDirectory(item.name)}
          />
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
                  Content adapts to this category and business model.
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}

function ResourcesPage({
  accent,
  content,
  selectedResource,
  onOpenPage,
  onSelectResource,
}: {
  accent: ReturnType<typeof getDemoAccentClasses>;
  content: IndustryWebsiteDemoContent;
  selectedResource: string;
  onOpenPage: (section: IndustryWebsiteDemoSectionId) => void;
  onSelectResource: (page: string) => void;
}) {
  const selected =
    content.resourcePages.find((page) => page.title === selectedResource) ??
    content.resourcePages[0];

  return (
    <section className="min-h-[680px] p-7">
      <SectionHeader
        accentText={accent.text}
        eyebrow={content.resourceLabel}
        title={content.resourceTitle}
        description="Every page in this section has industry-specific copy, proof points, and next-step CTAs."
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
          <ResourceDetail
            accent={accent}
            page={selected}
            onOpenContact={() => onOpenPage("contact")}
          />
        ) : null}
      </div>
    </section>
  );
}

function ContactPage({
  accent,
  content,
  selectedService,
  requestSent,
  onOpenTab,
  onSelectService,
  onSubmitRequest,
}: {
  accent: ReturnType<typeof getDemoAccentClasses>;
  content: IndustryWebsiteDemoContent;
  selectedService: string;
  requestSent: boolean;
  onOpenTab: (tab: DemoTab) => void;
  onSelectService: (service: string) => void;
  onSubmitRequest: () => void;
}) {
  return (
    <section className="min-h-[680px] p-7">
      <SectionHeader
        accentText={accent.text}
        eyebrow={content.contactTitle}
        title={content.requestAction}
        description={content.contactDescription}
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
            {content.requestFields.slice(0, 6).map((field, index) => (
              <label
                key={field}
                className="text-xs font-black text-slate-500 dark:text-slate-400"
              >
                {field}
                {index === 2 ? (
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
                ) : (
                  <input
                    defaultValue={getDemoFieldValue(field, index)}
                    className="mt-2 h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm font-bold text-slate-700 outline-none transition focus:border-blue-300 dark:border-white/10 dark:bg-[#0b1020] dark:text-white"
                  />
                )}
              </label>
            ))}
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
            {requestSent ? "Request routed successfully" : content.contactDescription}
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
            {requestSent
              ? `${selectedService} is now assigned to the ${content.directoryLabel.toLowerCase()} workflow with alerts queued.`
              : "This preview can connect forms to WhatsApp, email, CRM, reports, or a lightweight lead insights portal."}
          </p>
          <div className="mt-5 grid gap-2">
            {["WhatsApp", "Email", "CRM", "Lead Insights"].map((route) => (
              <button
                key={route}
                type="button"
                onClick={() =>
                  route === "Lead Insights" ? onOpenTab("analytics") : undefined
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

function DemoFooter({
  accent,
  content,
  demo,
  onOpenPage,
}: {
  accent: ReturnType<typeof getDemoAccentClasses>;
  content: IndustryWebsiteDemoContent;
  demo: IndustryWebsiteDemo;
  onOpenPage: (section: IndustryWebsiteDemoSectionId) => void;
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
            {content.footerSections.map((section) => (
              <button
                key={`${section.label}-${section.targetSection}`}
                type="button"
                onClick={() => onOpenPage(section.targetSection)}
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
                onClick={() => onOpenPage("sectionA")}
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
  content,
  demo,
  onOpenTab,
}: {
  content: IndustryWebsiteDemoContent;
  demo: IndustryWebsiteDemo;
  onOpenTab: (tab: DemoTab) => void;
}) {
  const accent = getDemoAccentClasses(demo.accent);
  const [activeScreen, setActiveScreen] =
    useState<IndustryWebsiteDemoSectionId | "flow" | "updates">("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setActiveScreen("home");
    setMenuOpen(false);
  }, [content, demo.title]);

  function handleScreen(screen: IndustryWebsiteDemoSectionId | "flow" | "updates") {
    setActiveScreen(screen);
    setMenuOpen(false);
  }

  const activeLabel =
    content.mobileScreens.find((screen) => screen.id === activeScreen)?.label ??
    content.navSections.find((section) => section.id === activeScreen)?.label ??
    "Home";

  return (
    <div className="mx-auto h-[calc(100dvh-4.75rem)] max-h-[790px] min-h-[620px] w-full max-w-[350px] overflow-hidden rounded-[1.8rem] border border-slate-200 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.16)] dark:border-white/10 dark:bg-[#0b1020]">
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 px-4 py-3 backdrop-blur-xl dark:border-white/10 dark:bg-[#0b1020]/95">
        <div className="flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => handleScreen("home")}
            className="flex min-w-0 items-center gap-2 text-left"
          >
            <span
              className={`grid h-9 w-9 shrink-0 place-items-center rounded-2xl ${accent.iconBg} ${accent.iconText}`}
            >
              <MonitorSmartphone className="h-4 w-4" />
            </span>
            <span className="min-w-0">
              <span className="block truncate text-sm font-black text-slate-950 dark:text-white">
                {demo.brand}
              </span>
              <span className="block truncate text-[10px] font-bold text-slate-500 dark:text-slate-400">
                {activeLabel}
              </span>
            </span>
          </button>

          <button
            type="button"
            aria-label="Open website menu"
            onClick={() => setMenuOpen((value) => !value)}
            className="grid h-9 w-9 place-items-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-slate-200 dark:bg-white/[0.08] dark:text-slate-200"
          >
            <Menu className="h-4 w-4" />
          </button>
        </div>

        {menuOpen ? (
          <div className="absolute left-3 right-3 top-[4.15rem] z-40 rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_18px_50px_rgba(15,23,42,0.16)] dark:border-white/10 dark:bg-[#111827]">
            {content.mobileScreens.map((screen) => (
              <button
                key={`${screen.id}-mobile-menu`}
                type="button"
                onClick={() => handleScreen(screen.id)}
                className={`flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-xs font-black transition ${
                  activeScreen === screen.id
                    ? `${accent.button} text-white`
                    : "text-slate-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-white/[0.06]"
                }`}
              >
                {screen.label}
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            ))}
          </div>
        ) : null}
      </header>

      <div className="h-[calc(100%-4.1rem)] overflow-y-auto scroll-smooth bg-slate-50/70 dark:bg-white/[0.02]">
        <MobilePhoneScreen
          activeScreen={activeScreen}
          accent={accent}
          content={content}
          demo={demo}
          onOpenTab={onOpenTab}
          onScreenChange={handleScreen}
        />

        <div className="border-t border-slate-200 bg-slate-950 p-4 text-white dark:border-white/10">
          <div className="flex items-center gap-2">
            <span className={`h-3.5 w-3.5 rounded-full ${accent.button}`} />
            <p className="text-sm font-black">{demo.brand}</p>
          </div>
          <p className="mt-2 line-clamp-2 text-xs leading-5 text-slate-300">
            {content.intro}
          </p>
          <button
            type="button"
            onClick={() => handleScreen("contact")}
            className={`mt-4 inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl text-xs font-black text-white ${accent.button}`}
          >
            {content.requestAction}
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

function MobilePhoneScreen({
  activeScreen,
  accent,
  content,
  demo,
  onOpenTab,
  onScreenChange,
}: {
  activeScreen: IndustryWebsiteDemoSectionId | "flow" | "updates";
  accent: ReturnType<typeof getDemoAccentClasses>;
  content: IndustryWebsiteDemoContent;
  demo: IndustryWebsiteDemo;
  onOpenTab: (tab: DemoTab) => void;
  onScreenChange: (screen: IndustryWebsiteDemoSectionId | "flow" | "updates") => void;
}) {
  const pageShell =
    "min-h-[630px] bg-gradient-to-br from-slate-50 via-white to-blue-50/80 p-4 dark:from-white/[0.04] dark:via-transparent dark:to-blue-950/20";

  if (activeScreen === "sectionA") {
    return (
      <section className={pageShell}>
        <div className={`rounded-[1.55rem] p-4 text-white shadow-sm ${accent.button}`}>
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/80">
                {content.catalogTabLabel}
              </p>
              <h3 className="mt-3 text-2xl font-black leading-tight tracking-[-0.035em]">
                Explore the right option faster
              </h3>
              <p className="mt-3 text-sm leading-6 text-white/85">
                {content.secondaryAction} pages give visitors clear details, proof,
                and the next action without making them search manually.
              </p>
            </div>
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white/15">
              <PackageSearch className="h-6 w-6" />
            </span>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-2">
            {content.services.slice(0, 2).map((service) => (
              <button
                key={service.title}
                type="button"
                onClick={() => onScreenChange("contact")}
                className="rounded-2xl bg-white/14 p-3 text-left text-xs font-black text-white backdrop-blur"
              >
                {service.title}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-5 grid gap-3">
          {content.services.slice(0, 6).map((service, index) => {
            const Icon = service.icon;

            return (
              <button
                key={service.title}
                type="button"
                onClick={() => onScreenChange(index % 2 === 0 ? "sectionB" : "contact")}
                className="group rounded-2xl border border-slate-200 bg-white p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-white/[0.05]"
              >
                <div className="flex items-start gap-3">
                  <span
                    className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${index % 2 === 0 ? accent.iconBg : "bg-slate-50 dark:bg-white/[0.06]"} ${accent.iconText}`}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-black text-slate-950 dark:text-white">
                      {service.title}
                    </span>
                    <span className="mt-1 line-clamp-3 block text-xs leading-5 text-slate-500 dark:text-slate-400">
                      {service.description}
                    </span>
                    {service.meta ? (
                      <span className={`mt-3 inline-flex rounded-full px-2.5 py-1 text-[9px] font-black ${accent.softBg} ${accent.text}`}>
                        {service.meta}
                      </span>
                    ) : null}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        <MobileWebsiteInfoBand
          title="What this page helps with"
          items={["Clear category discovery", "Relevant proof sections", "Direct request CTA"]}
          accent={accent}
        />
      </section>
    );
  }

  if (activeScreen === "sectionB") {
    return (
      <section className={pageShell}>
        <div className="overflow-hidden rounded-[1.55rem] border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-white/[0.05]">
          <div className="grid grid-cols-[0.92fr_1.08fr]">
            <div className="p-4">
              <p className={`text-[10px] font-black uppercase tracking-[0.18em] ${accent.text}`}>
                {content.directoryLabel}
              </p>
              <h3 className="mt-3 text-2xl font-black leading-tight tracking-[-0.035em] text-slate-950 dark:text-white">
                {content.directoryTitle}
              </h3>
              <p className="mt-2 line-clamp-4 text-xs leading-5 text-slate-500 dark:text-slate-400">
                {content.directoryDescription}
              </p>
              <button
                type="button"
                onClick={() => onScreenChange("contact")}
                className={`mt-4 inline-flex rounded-xl px-4 py-2 text-[10px] font-black text-white ${accent.button}`}
              >
                {content.requestAction}
              </button>
            </div>
            <div
              className="min-h-[225px] bg-cover bg-center"
              style={{ backgroundImage: `url(${demo.image})` }}
            />
          </div>
        </div>

        <div className="mt-5 grid gap-3">
          {content.directoryItems.slice(0, 5).map((item, index) => (
            <button
              key={item.name}
              type="button"
              onClick={() => onScreenChange("contact")}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-white/[0.05]"
            >
              <div className="flex items-start gap-3 p-4">
                <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${accent.iconBg} ${accent.iconText}`}>
                  <PackageSearch className="h-4 w-4" />
                </span>
                <span className="min-w-0">
                  <span className="flex items-center justify-between gap-2">
                    <span className="text-sm font-black text-slate-950 dark:text-white">
                      {item.name}
                    </span>
                    {index === 0 ? (
                      <span className={`rounded-full px-2 py-0.5 text-[9px] font-black ${accent.softBg} ${accent.text}`}>
                        Featured
                      </span>
                    ) : null}
                  </span>
                  <span className="mt-1 block text-xs font-bold text-slate-500 dark:text-slate-400">
                    {item.role} • {item.slot}
                  </span>
                  <span className="mt-2 line-clamp-3 block text-xs leading-5 text-slate-500 dark:text-slate-400">
                    {item.detail}
                  </span>
                </span>
              </div>
            </button>
          ))}
        </div>

        <MobileWebsiteInfoBand
          title="Trust modules included"
          items={[content.directoryLabel, "Availability/details", "Follow-up ready CTA"]}
          accent={accent}
        />
      </section>
    );
  }

  if (activeScreen === "sectionC") {
    return (
      <section className={pageShell}>
        <div className="relative overflow-hidden rounded-[1.55rem] border border-slate-200 bg-slate-950 p-4 text-white shadow-sm dark:border-white/10">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: `url(${demo.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900/90 to-blue-950/80" />
          <div className="relative">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-200">
              {content.resourceLabel}
            </p>
            <h3 className="mt-3 text-2xl font-black leading-tight tracking-[-0.035em]">
              {content.resourceTitle}
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Support pages build confidence before a visitor sends a request.
              They make the website useful, searchable, and conversion-ready.
            </p>

            <div className="mt-5 grid grid-cols-3 gap-2">
              {["Proof", "SEO", "Trust"].map((item) => (
                <span
                  key={item}
                  className="rounded-2xl bg-white/10 px-3 py-3 text-center text-[10px] font-black text-white"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-5 grid gap-3">
          {content.resourcePages.slice(0, 5).map((page, index) => {
            const Icon = page.icon;

            return (
              <article
                key={page.title}
                className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/[0.05]"
              >
                <div className="flex items-start justify-between gap-3">
                  <Icon className={`h-5 w-5 ${accent.text}`} />
                  <span className="rounded-full bg-slate-50 px-2 py-1 text-[9px] font-black text-slate-500 dark:bg-white/[0.06] dark:text-slate-300">
                    Page {index + 1}
                  </span>
                </div>
                <p className="mt-3 text-sm font-black text-slate-950 dark:text-white">
                  {page.title}
                </p>
                <p className="mt-2 line-clamp-3 text-xs leading-5 text-slate-500 dark:text-slate-400">
                  {page.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {page.blocks.slice(0, 4).map((block) => (
                    <span
                      key={block}
                      className="rounded-full bg-slate-50 px-2.5 py-1 text-[9px] font-black text-slate-500 dark:bg-white/[0.06] dark:text-slate-300"
                    >
                      {block}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>
    );
  }

  if (activeScreen === "flow") {
    return (
      <section className={pageShell}>
        <div className={`rounded-[1.55rem] p-4 text-white shadow-sm ${accent.button}`}>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/80">
            {content.flowTabLabel}
          </p>
          <h3 className="mt-3 text-2xl font-black leading-tight tracking-[-0.035em]">
            Turn visitors into qualified requests
          </h3>
          <p className="mt-3 text-sm leading-6 text-white/85">
            The flow collects the exact details your team needs before a callback,
            quote, visit, admission conversation, or consultation.
          </p>
        </div>

        <div className="mt-5 grid gap-3">
          {content.flowSteps.map((step, index) => (
            <button
              key={step}
              type="button"
              onClick={() => index === content.flowSteps.length - 1 ? onScreenChange("contact") : undefined}
              className="rounded-2xl border border-slate-200 bg-white p-4 text-left shadow-sm dark:border-white/10 dark:bg-white/[0.05]"
            >
              <div className="flex items-start gap-3">
                <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl text-xs font-black text-white ${accent.button}`}>
                  {index + 1}
                </span>
                <span>
                  <span className="block text-sm font-black text-slate-950 dark:text-white">
                    {step}
                  </span>
                  <span className="mt-1 block text-xs leading-5 text-slate-500 dark:text-slate-400">
                    {content.requestFields[index] ?? content.requestAction}
                  </span>
                </span>
              </div>
            </button>
          ))}
        </div>

        <MobileWebsiteInfoBand
          title="Flow outcome"
          items={["Qualified lead details", "Clear team follow-up", "Reduced manual calls"]}
          accent={accent}
        />
      </section>
    );
  }

  if (activeScreen === "updates") {
    return (
      <section className={pageShell}>
        <div className="rounded-[1.55rem] border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/[0.05]">
          <div className="flex items-center gap-3">
            <span className={`grid h-12 w-12 place-items-center rounded-2xl ${accent.iconBg} ${accent.iconText}`}>
              <BarChart3 className="h-5 w-5" />
            </span>
            <div>
              <p className={`text-[10px] font-black uppercase tracking-[0.18em] ${accent.text}`}>
                Lead Insights
              </p>
              <h3 className="mt-1 text-xl font-black leading-tight text-slate-950 dark:text-white">
                Recent website activity
              </h3>
            </div>
          </div>
          <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
            A compact admin-style view shows what came from the website and
            which channel or page created the most interest.
          </p>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-2">
          {content.analyticsMetrics.slice(0, 4).map((metric) => (
            <button
              key={metric.label}
              type="button"
              onClick={() => onOpenTab("analytics")}
              className="rounded-2xl border border-slate-200 bg-white p-3 text-left shadow-sm dark:border-white/10 dark:bg-white/[0.05]"
            >
              <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400">
                {metric.label}
              </p>
              <p className="mt-1 text-sm font-black text-slate-950 dark:text-white">
                {metric.value}
              </p>
              <p className={`mt-0.5 text-[10px] font-black ${accent.text}`}>
                {metric.change}
              </p>
            </button>
          ))}
        </div>

        <div className="mt-5 grid gap-3">
          {content.mobileUpdates.map(([title, description]) => (
            <button
              key={title}
              type="button"
              onClick={() => onOpenTab("analytics")}
              className="rounded-2xl border border-slate-200 bg-white p-4 text-left shadow-sm dark:border-white/10 dark:bg-white/[0.05]"
            >
              <p className="text-sm font-black text-slate-950 dark:text-white">
                {title}
              </p>
              <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                {description}
              </p>
            </button>
          ))}
        </div>

        <MobileWebsiteInfoBand
          title="Admin can quickly check"
          items={["New requests", "Top source", "Next follow-up status"]}
          accent={accent}
        />
      </section>
    );
  }

  if (activeScreen === "contact") {
    return (
      <section className={pageShell}>
        <div className="rounded-[1.55rem] border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/[0.05]">
          <div className="flex items-center gap-3">
            <span className={`grid h-12 w-12 place-items-center rounded-2xl ${accent.iconBg} ${accent.iconText}`}>
              <PhoneCall className="h-5 w-5" />
            </span>
            <div>
              <p className={`text-[10px] font-black uppercase tracking-[0.18em] ${accent.text}`}>
                {content.contactTitle}
              </p>
              <h3 className="mt-1 text-xl font-black leading-tight text-slate-950 dark:text-white">
                Start with a simple request
              </h3>
            </div>
          </div>
          <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
            {content.contactDescription}
          </p>
        </div>

        <div className="mt-5 space-y-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/[0.05]">
          {content.requestFields.slice(0, 6).map((field, index) => (
            <div
              key={field}
              className="rounded-xl bg-slate-50 px-4 py-3 text-xs font-bold text-slate-500 dark:bg-white/[0.06] dark:text-slate-300"
            >
              {getDemoFieldValue(field, index)}
            </div>
          ))}
          <button
            type="button"
            onClick={() => onScreenChange("updates")}
            className={`inline-flex h-11 w-full items-center justify-center rounded-xl text-xs font-black text-white ${accent.button}`}
          >
            Request Submitted
          </button>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2">
          {content.analyticsSources.slice(0, 4).map(([label, value]) => (
            <button
              key={label}
              type="button"
              onClick={() => onScreenChange("updates")}
              className="rounded-2xl border border-slate-200 bg-white p-3 text-left shadow-sm dark:border-white/10 dark:bg-white/[0.05]"
            >
              <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400">
                {label}
              </p>
              <p className="mt-1 text-sm font-black text-slate-950 dark:text-white">
                {value}
              </p>
            </button>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className={pageShell}>
      <div className="overflow-hidden rounded-[1.55rem] border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-white/[0.05]">
        <div
          className="relative h-44 bg-cover bg-center"
          style={{ backgroundImage: `url(${demo.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/15 to-transparent" />
          <div className="absolute bottom-3 left-3 right-3">
            <span className="rounded-full bg-white/90 px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-slate-800">
              {content.trustLine}
            </span>
          </div>
        </div>

        <div className="p-4">
          <h3 className="text-2xl font-black leading-tight tracking-[-0.035em] text-slate-950 dark:text-white">
            {demo.headline}
          </h3>
          <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
            {content.intro}
          </p>
          <div className="mt-5 grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => onScreenChange("flow")}
              className={`inline-flex h-11 items-center justify-center rounded-xl text-xs font-black text-white ${accent.button}`}
            >
              {content.primaryAction}
            </button>
            <button
              type="button"
              onClick={() => onScreenChange("sectionA")}
              className="inline-flex h-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-xs font-black text-slate-700 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-200"
            >
              {content.secondaryAction}
            </button>
          </div>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-2">
        {content.services.slice(0, 4).map((service) => {
          const Icon = service.icon;

          return (
            <button
              type="button"
              key={service.title}
              onClick={() => onScreenChange("sectionA")}
              className="min-h-[92px] rounded-2xl border border-slate-200 bg-white p-3 text-left shadow-sm dark:border-white/10 dark:bg-white/[0.05]"
            >
              <Icon className={`h-4 w-4 ${accent.text}`} />
              <p className="mt-2 line-clamp-2 text-[10px] font-black leading-4 text-slate-700 dark:text-slate-300">
                {service.title}
              </p>
            </button>
          );
        })}
      </div>

      <div className="mt-5 grid grid-cols-4 gap-2 rounded-2xl border border-slate-200 bg-white p-3 text-center shadow-sm dark:border-white/10 dark:bg-white/[0.05]">
        {demo.stats.map((stat, index) => (
          <div key={`${stat}-${index}`}>
            <p className={`text-sm font-black ${accent.text}`}>{stat}</p>
            <p className="mt-1 text-[9px] font-bold leading-3 text-slate-500 dark:text-slate-400">
              {content.statsLabels[index] ?? "Metric"}
            </p>
          </div>
        ))}
      </div>

      <MobileWebsiteInfoBand
        title="Website journey"
        items={["Trust first", content.secondaryAction, content.primaryAction]}
        accent={accent}
      />
    </section>
  );
}

function MobileWebsiteInfoBand({
  title,
  items,
  accent,
}: {
  title: string;
  items: string[];
  accent: ReturnType<typeof getDemoAccentClasses>;
}) {
  return (
    <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/[0.05]">
      <p className="text-sm font-black text-slate-950 dark:text-white">
        {title}
      </p>
      <div className="mt-3 grid gap-2">
        {items.map((item) => (
          <div
            key={item}
            className="flex items-center gap-2 text-xs font-bold text-slate-600 dark:text-slate-300"
          >
            <CheckCircle2 className={`h-4 w-4 shrink-0 ${accent.text}`} />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function FlowPreview({
  content,
  demo,
}: {
  content: IndustryWebsiteDemoContent;
  demo: IndustryWebsiteDemo;
}) {
  const accent = getDemoAccentClasses(demo.accent);
  const [selectedStep, setSelectedStep] = useState(0);
  const [requestSent, setRequestSent] = useState(false);

  useEffect(() => {
    setSelectedStep(0);
    setRequestSent(false);
  }, [content, demo.title]);

  return (
    <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="rounded-[1.6rem] border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.05]">
        <h3 className="text-xl font-black text-slate-950 dark:text-white">
          {content.flowTabLabel}
        </h3>
        <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
          A focused flow captures the exact information this industry needs
          before routing the lead to the right team.
        </p>

        <div className="mt-6 space-y-3">
          {content.flowSteps.map((step, index) => (
            <button
              key={step}
              type="button"
              onClick={() => setSelectedStep(index)}
              className={`flex w-full items-start gap-4 rounded-2xl border p-4 text-left transition hover:-translate-y-0.5 ${
                selectedStep === index
                  ? `border-transparent ${accent.softBg}`
                  : "border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/[0.04]"
              }`}
            >
              <span
                className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl text-xs font-black ${
                  selectedStep === index
                    ? `${accent.button} text-white`
                    : "bg-white text-slate-500 dark:bg-white/[0.08] dark:text-slate-300"
                }`}
              >
                {index + 1}
              </span>
              <span>
                <span className="block text-sm font-black text-slate-950 dark:text-white">
                  {step}
                </span>
                <span className="mt-1 block text-xs leading-5 text-slate-500 dark:text-slate-400">
                  {content.requestFields[index] ?? content.requestAction}
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-[1.6rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-[0_22px_70px_rgba(15,23,42,0.20)] dark:border-white/10">
        <div className="flex items-center gap-3">
          <span className={`grid h-12 w-12 place-items-center rounded-2xl ${accent.button}`}>
            <FileText className="h-5 w-5" />
          </span>
          <div>
            <p className="text-xs font-black text-slate-300">Request Preview</p>
            <h4 className="text-xl font-black">{demo.brand}</h4>
          </div>
        </div>

        <div className="mt-6 grid gap-3">
          {content.requestFields.slice(0, 5).map((field, index) => (
            <div
              key={field}
              className="flex items-center justify-between gap-4 rounded-2xl bg-white/10 px-4 py-3"
            >
              <span className="text-xs font-bold text-slate-300">{field}</span>
              <span className="text-right text-sm font-black">
                {getDemoFieldValue(field, index)}
              </span>
            </div>
          ))}
          <div className="flex items-center justify-between gap-4 rounded-2xl bg-white/10 px-4 py-3">
            <span className="text-xs font-bold text-slate-300">Status</span>
            <span className="text-right text-sm font-black">
              {requestSent ? "Ready for follow-up" : content.flowSteps[selectedStep]}
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={() => {
            setSelectedStep(content.flowSteps.length - 1);
            setRequestSent(true);
          }}
          className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-black text-white ${accent.button}`}
        >
          {requestSent ? "Request Confirmed" : `Confirm ${content.requestAction}`}
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

function CatalogPreview({
  content,
  demo,
  onOpenTab,
}: {
  content: IndustryWebsiteDemoContent;
  demo: IndustryWebsiteDemo;
  onOpenTab: (tab: DemoTab) => void;
}) {
  const accent = getDemoAccentClasses(demo.accent);
  const [selectedItem, setSelectedItem] = useState(
    content.services[0]?.title ?? content.catalogTabLabel,
  );

  useEffect(() => {
    setSelectedItem(content.services[0]?.title ?? content.catalogTabLabel);
  }, [content, demo.title]);

  const selectedService =
    content.services.find((service) => service.title === selectedItem) ??
    content.services[0];

  return (
    <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
      <div className="rounded-[1.6rem] border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.05]">
        <h3 className="text-xl font-black text-slate-950 dark:text-white">
          {content.catalogTabLabel}
        </h3>
        <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
          {content.directoryDescription}
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {content.services.map((service) => {
            const Icon = service.icon;
            const isActive = selectedItem === service.title;

            return (
              <button
                key={service.title}
                type="button"
                onClick={() => setSelectedItem(service.title)}
                className={`rounded-2xl border p-4 text-left transition hover:-translate-y-0.5 ${
                  isActive
                    ? `border-transparent ${accent.softBg}`
                    : "border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/[0.04]"
                }`}
              >
                <Icon className={`h-5 w-5 ${accent.text}`} />
                <p className="mt-3 text-sm font-black text-slate-950 dark:text-white">
                  {service.title}
                </p>
                <p className="mt-2 line-clamp-2 text-xs leading-5 text-slate-500 dark:text-slate-400">
                  {service.description}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      <div className="overflow-hidden rounded-[1.6rem] border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-white/[0.05]">
        <div
          className="h-56 bg-cover bg-center"
          style={{ backgroundImage: `url(${demo.image})` }}
        />
        <div className="p-6">
          <p className={`text-xs font-black ${accent.text}`}>{demo.brand}</p>
          <h4 className="mt-2 text-2xl font-black text-slate-950 dark:text-white">
            {selectedService?.title ?? content.catalogTabLabel}
          </h4>
          <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
            {selectedService?.description ?? content.intro}
          </p>

          <div className="mt-5 grid gap-2">
            {[...content.directoryItems, ...content.resourcePages]
              .slice(0, 4)
              .map((item) => (
                <div
                  key={"title" in item ? item.title : item.name}
                  className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 dark:bg-white/[0.06] dark:text-slate-300"
                >
                  <CheckCircle2 className={`h-4 w-4 ${accent.text}`} />
                  {"title" in item ? item.title : item.name}
                </div>
              ))}
          </div>

          <button
            type="button"
            onClick={() => onOpenTab("flow")}
            className={`mt-5 inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-black text-white ${accent.button}`}
          >
            Start {content.flowTabLabel}
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

function AnalyticsPreview({
  content,
  demo,
  onOpenTab,
}: {
  content: IndustryWebsiteDemoContent;
  demo: IndustryWebsiteDemo;
  onOpenTab: (tab: DemoTab) => void;
}) {
  const accent = getDemoAccentClasses(demo.accent);
  const [reportReady, setReportReady] = useState(false);

  useEffect(() => {
    setReportReady(false);
  }, [content, demo.title]);

  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_0.8fr]">
      <div className="rounded-[1.6rem] border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.05]">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h3 className="text-xl font-black text-slate-950 dark:text-white">
              Lead Insights Overview
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
              Metrics are tailored to this industry&apos;s real conversion path,
              not a generic analytics dashboard.
            </p>
          </div>
          <span className={`rounded-xl px-4 py-2 text-xs font-black ${accent.softBg} ${accent.text}`}>
            30 Days
          </span>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {content.analyticsMetrics.map((metric) => (
            <button
              key={metric.label}
              type="button"
              onClick={() => setReportReady(false)}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-left transition hover:-translate-y-0.5 hover:bg-white dark:border-white/10 dark:bg-[#0b1020]"
            >
              <p className="text-xs font-bold text-slate-500 dark:text-slate-400">
                {metric.label}
              </p>
              <p className="mt-2 text-2xl font-black text-slate-950 dark:text-white">
                {metric.value}
              </p>
              <p className={`mt-1 text-xs font-black ${accent.text}`}>
                {metric.change}
              </p>
            </button>
          ))}
        </div>

        <div className="mt-6 h-44 rounded-2xl bg-slate-50 p-5 dark:bg-[#0b1020]">
          <svg viewBox="0 0 500 140" className="h-full w-full" aria-hidden="true">
            <path
              d="M10 112 C70 96, 100 88, 150 92 S240 58, 290 78 S370 42, 430 55 S470 40, 490 32"
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
            {reportReady ? "Report Ready" : "Generate Lead Report"}
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
            <div key={source}>
              <div className="mb-2 flex justify-between text-sm font-bold text-slate-600 dark:text-slate-300">
                <span>{source}</span>
                <span>{value}</span>
              </div>
              <div className="h-2 rounded-full bg-slate-100 dark:bg-white/10">
                <div
                  className={`h-2 rounded-full ${accent.button}`}
                  style={{ width: value }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl bg-slate-50 p-5 dark:bg-white/[0.04]">
          <p className="text-sm font-black text-slate-950 dark:text-white">
            Latest lead
          </p>
          <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">
            {demo.title} request from the {content.catalogTabLabel.toLowerCase()} section,
            ready for the next follow-up step.
          </p>
        </div>
      </div>
    </div>
  );
}

function DirectoryCard({
  accent,
  active,
  item,
  onClick,
}: {
  accent: ReturnType<typeof getDemoAccentClasses>;
  active: boolean;
  item: IndustryWebsiteDemoDirectoryItem;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-2xl border p-5 text-left transition hover:-translate-y-0.5 ${
        active
          ? `border-transparent ${accent.softBg}`
          : "border-slate-200 bg-slate-50 hover:bg-white dark:border-white/10 dark:bg-white/[0.04]"
      }`}
    >
      <PackageSearch className={`h-6 w-6 ${accent.text}`} />
      <p className="mt-4 text-sm font-black text-slate-950 dark:text-white">
        {item.name}
      </p>
      <p className="mt-1 text-xs font-bold text-slate-500 dark:text-slate-400">
        {item.role}
      </p>
      <p className={`mt-3 text-xs font-black ${accent.text}`}>{item.slot}</p>
    </button>
  );
}

function ResourceDetail({
  accent,
  page,
  onOpenContact,
}: {
  accent: ReturnType<typeof getDemoAccentClasses>;
  page: IndustryWebsiteDemoResourcePage;
  onOpenContact: () => void;
}) {
  const Icon = page.icon;

  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/[0.04]">
      <Icon className={`h-8 w-8 ${accent.text}`} />
      <h4 className="mt-4 text-2xl font-black text-slate-950 dark:text-white">
        {page.title}
      </h4>
      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
        {page.description}
      </p>
      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {page.blocks.map((block) => (
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
          onClick={onOpenContact}
          className={`mt-5 inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-black text-white ${accent.button}`}
        >
          Ask About This
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

function SectionHeader({
  accentText,
  description,
  eyebrow,
  title,
}: {
  accentText: string;
  description: string;
  eyebrow: string;
  title: string;
}) {
  return (
    <div>
      <p className={`text-xs font-black uppercase ${accentText}`}>{eyebrow}</p>
      <h3 className="mt-2 text-3xl font-black leading-tight text-slate-950 dark:text-white">
        {title}
      </h3>
      <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600 dark:text-slate-300">
        {description}
      </p>
    </div>
  );
}

function getDemoFieldValue(field: string, index: number) {
  const lower = field.toLowerCase();

  if (lower.includes("phone") || lower.includes("whatsapp")) return "+91 98765 43210";
  if (lower.includes("email")) return "client@example.com";
  if (lower.includes("date") || lower.includes("time") || lower.includes("slot")) return "May 28, 2026";
  if (lower.includes("quantity")) return "500 units";
  if (lower.includes("budget")) return "Flexible budget";
  if (lower.includes("location")) return "Central area";
  if (lower.includes("guest")) return "4 travelers";
  if (lower.includes("company")) return "Northstar Industries Pvt Ltd";
  if (lower.includes("name")) return index === 0 ? "Anika Sharma" : "Primary contact";

  return ["Selected option", "Priority request", "Ready for follow-up", "Detailed notes"][index % 4];
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
