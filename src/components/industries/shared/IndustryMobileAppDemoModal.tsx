"use client";

import { useEffect, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BarChart3,
  Bell,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  ClipboardList,
  LayoutDashboard,
  PackageSearch,
  Smartphone,
  X,
} from "lucide-react";
import type {
  IndustryMobileAppDemo,
  IndustryMobileAppPageData,
} from "./industryMobileAppData";

type MobileDemoTab = "preview" | "flow" | "catalog" | "notifications" | "analytics";

type IndustryMobileAppDemoModalProps = {
  data: IndustryMobileAppPageData;
  demo: IndustryMobileAppDemo;
  onClose: () => void;
};

const accentStyles: Record<
  IndustryMobileAppDemo["accent"],
  {
    bg: string;
    soft: string;
    text: string;
    border: string;
    gradient: string;
  }
> = {
  blue: {
    bg: "bg-blue-600",
    soft: "bg-blue-50 dark:bg-blue-400/10",
    text: "text-blue-700 dark:text-blue-300",
    border: "border-blue-200 dark:border-blue-300/20",
    gradient: "from-blue-600 to-cyan-500",
  },
  emerald: {
    bg: "bg-emerald-600",
    soft: "bg-emerald-50 dark:bg-emerald-400/10",
    text: "text-emerald-700 dark:text-emerald-300",
    border: "border-emerald-200 dark:border-emerald-300/20",
    gradient: "from-emerald-600 to-teal-500",
  },
  violet: {
    bg: "bg-violet-600",
    soft: "bg-violet-50 dark:bg-violet-400/10",
    text: "text-violet-700 dark:text-violet-300",
    border: "border-violet-200 dark:border-violet-300/20",
    gradient: "from-violet-600 to-blue-600",
  },
  orange: {
    bg: "bg-orange-600",
    soft: "bg-orange-50 dark:bg-orange-400/10",
    text: "text-orange-700 dark:text-orange-300",
    border: "border-orange-200 dark:border-orange-300/20",
    gradient: "from-orange-600 to-amber-500",
  },
  rose: {
    bg: "bg-rose-600",
    soft: "bg-rose-50 dark:bg-rose-400/10",
    text: "text-rose-700 dark:text-rose-300",
    border: "border-rose-200 dark:border-rose-300/20",
    gradient: "from-rose-600 to-pink-500",
  },
  teal: {
    bg: "bg-teal-600",
    soft: "bg-teal-50 dark:bg-teal-400/10",
    text: "text-teal-700 dark:text-teal-300",
    border: "border-teal-200 dark:border-teal-300/20",
    gradient: "from-teal-600 to-cyan-500",
  },
};

type AccentStyle = (typeof accentStyles)[IndustryMobileAppDemo["accent"]];

export default function IndustryMobileAppDemoModal({
  data,
  demo,
  onClose,
}: IndustryMobileAppDemoModalProps) {
  const [activeTab, setActiveTab] = useState<MobileDemoTab>("preview");
  const [selectedCatalogIndex, setSelectedCatalogIndex] = useState(0);

  useEffect(() => {
    setActiveTab("preview");
    setSelectedCatalogIndex(0);
  }, [data.industrySlug, demo.title]);

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

  const styles = accentStyles[demo.accent];
  const tabs: Array<{ id: MobileDemoTab; label: string; icon: LucideIcon }> = [
    { id: "preview", label: "App Preview", icon: Smartphone },
    { id: "flow", label: data.demoContent.flowTabLabel, icon: ClipboardList },
    { id: "catalog", label: data.demoContent.catalogTabLabel, icon: PackageSearch },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "analytics", label: "Analytics Dashboard", icon: BarChart3 },
  ];

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
                className={`grid h-12 w-12 place-items-center rounded-2xl ${styles.soft} ${styles.text}`}
              >
                <Smartphone className="h-6 w-6" />
              </span>

              <div>
                <p className="text-lg font-black text-slate-950 dark:text-white">
                  HNX Solutions
                </p>
                <p className="text-xs font-bold text-slate-500 dark:text-slate-400">
                  {data.eyebrow}
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

            <nav className="mt-7 space-y-2" aria-label="Mobile app demo tabs">
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
                        ? `${styles.soft} ${styles.text}`
                        : "text-slate-600 hover:bg-white hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/[0.06] dark:hover:text-white"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    {tab.label}
                  </button>
                );
              })}
            </nav>

            <div className="mt-7 rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/[0.05]">
              <h3 className="text-sm font-black text-slate-950 dark:text-white">
                Demo includes
              </h3>

              <div className="mt-4 space-y-3">
                {demo.chips.slice(0, 4).map((chip) => (
                  <button
                    type="button"
                    key={chip}
                    onClick={() => setActiveTab("preview")}
                    className="flex w-full items-center gap-2 rounded-xl text-left text-sm font-semibold text-slate-600 transition hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
                  >
                    <CheckCircle2 className={`h-4 w-4 ${styles.text}`} />
                    {chip}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() => setActiveTab("flow")}
              className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-4 text-sm font-black text-white shadow-lg transition hover:-translate-y-0.5 ${styles.bg}`}
            >
              {data.demoContent.primaryAction}
              <ArrowRight className="h-4 w-4" />
            </button>
          </aside>

          <div className="bg-white p-5 dark:bg-[#080b16] sm:p-7">
            <div className="mb-5 pr-14">
              <p className={`text-sm font-black ${styles.text}`}>
                {tabs.find((tab) => tab.id === activeTab)?.label}
              </p>
              <h2 className="mt-1 text-2xl font-black text-slate-950 dark:text-white sm:text-3xl">
                {demo.brand} Mobile App Experience
              </h2>
            </div>

            {activeTab === "preview" ? (
              <AppPreview data={data} demo={demo} styles={styles} />
            ) : null}
            {activeTab === "flow" ? (
              <FlowPreview data={data} styles={styles} />
            ) : null}
            {activeTab === "catalog" ? (
              <CatalogPreview
                data={data}
                styles={styles}
                selectedIndex={selectedCatalogIndex}
                onSelect={setSelectedCatalogIndex}
              />
            ) : null}
            {activeTab === "notifications" ? (
              <NotificationsPreview data={data} styles={styles} />
            ) : null}
            {activeTab === "analytics" ? (
              <AnalyticsPreview data={data} styles={styles} />
            ) : null}

            <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 px-5 py-4 text-sm leading-6 text-slate-600 dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-slate-300">
              This is a strategic preview. Final screens, roles, data fields,
              notification rules, catalog items, admin dashboard, and analytics can
              be customized for the client&apos;s {data.industryName.toLowerCase()} workflow.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function AppPreview({
  data,
  demo,
  styles,
}: {
  data: IndustryMobileAppPageData;
  demo: IndustryMobileAppDemo;
  styles: AccentStyle;
}) {
  const [activeScreen, setActiveScreen] = useState(
    data.demoContent.appScreens[0] ?? "Home",
  );

  useEffect(() => {
    setActiveScreen(data.demoContent.appScreens[0] ?? "Home");
  }, [data.industrySlug, demo.title, data.demoContent.appScreens]);

  const screenIndex = Math.max(data.demoContent.appScreens.indexOf(activeScreen), 0);
  const selectedItem =
    data.demoContent.catalogItems[screenIndex % data.demoContent.catalogItems.length] ??
    data.demoContent.catalogItems[0];
  const SelectedIcon = selectedItem?.icon ?? Smartphone;

  return (
    <div>
      <p className={`text-xs font-black uppercase ${styles.text}`}>
        App Preview
      </p>
      <h2 className="mt-3 max-w-3xl text-3xl font-black leading-tight text-slate-950 dark:text-white lg:text-5xl">
        {demo.headline}
      </h2>
      <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300">
        {data.demoContent.adminDescription}
      </p>

      <div className="mt-7 grid gap-7 xl:grid-cols-[330px_1fr] xl:items-center">
        <div className="mx-auto w-[min(305px,78vw)] rounded-[2.75rem] border-[10px] border-slate-950 bg-slate-950 p-2 shadow-[0_34px_90px_rgba(15,23,42,0.34)] dark:border-slate-800">
          <div className="overflow-hidden rounded-[2.05rem] bg-white dark:bg-slate-950">
            <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3 dark:border-white/10">
              <div>
                <p className="text-sm font-black text-slate-950 dark:text-white">
                  {demo.brand}
                </p>
                <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400">
                  {activeScreen}
                </p>
              </div>
              <Bell className={`h-4 w-4 ${styles.text}`} />
            </div>

            <div
              className="h-36 bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(15,23,42,0.05), rgba(255,255,255,0.96)), url(${demo.image})`,
              }}
            />

            <div className="p-4">
              <div className={`rounded-2xl ${styles.soft} p-3`}>
                <p className="text-[10px] font-black uppercase text-slate-500 dark:text-slate-400">
                  {activeScreen}
                </p>
                <div className="mt-2 flex gap-3">
                  <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${styles.gradient} text-white`}>
                    <SelectedIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-black text-slate-950 dark:text-white">
                      {selectedItem?.title ?? data.demoContent.primaryAction}
                    </p>
                    <p className="mt-1 text-[10px] leading-4 text-slate-600 dark:text-slate-300">
                      {selectedItem?.description ?? data.heroSubtext}
                    </p>
                  </div>
                </div>
                <button className={`mt-3 w-full rounded-xl ${styles.bg} py-2 text-[11px] font-black text-white`}>
                  {data.demoContent.primaryAction}
                </button>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2">
                {demo.chips.slice(0, 4).map((chip) => (
                  <div
                    key={chip}
                    className="rounded-xl border border-slate-200 bg-white p-2 text-center text-[10px] font-bold text-slate-600 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-300"
                  >
                    {chip}
                  </div>
                ))}
              </div>

              <div className="mt-4 grid grid-cols-4 gap-1.5 border-t border-slate-100 pt-3 dark:border-white/10">
                {data.demoContent.appScreens.slice(0, 4).map((screen) => (
                  <button
                    key={screen}
                    type="button"
                    onClick={() => setActiveScreen(screen)}
                    className={`rounded-xl px-1.5 py-2 text-center text-[9px] font-black transition ${
                      activeScreen === screen
                        ? `${styles.bg} text-white`
                        : "bg-slate-100 text-slate-500 hover:bg-slate-200 dark:bg-white/10 dark:text-slate-300 dark:hover:bg-white/15"
                    }`}
                  >
                    {screen}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-5">
          <div className="rounded-[1.7rem] border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.06]">
            <div className="flex items-center gap-3">
              <span className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${styles.gradient} text-white`}>
                <LayoutDashboard className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-black text-slate-950 dark:text-white">
                  {data.demoContent.adminTitle}
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400">
                  {data.demoContent.adminDescription}
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {data.demoContent.analyticsMetrics.slice(0, 3).map((metric) => {
              const Icon = metric.icon;

              return (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-black text-slate-700 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-200"
                >
                  <Icon className={`mb-3 h-5 w-5 ${styles.text}`} />
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {metric.label}
                  </p>
                  <p className="mt-1 text-xl font-black text-slate-950 dark:text-white">
                    {metric.value}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function FlowPreview({
  data,
  styles,
}: {
  data: IndustryMobileAppPageData;
  styles: AccentStyle;
}) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      <p className={`text-xs font-black uppercase ${styles.text}`}>
        {data.demoContent.flowTabLabel}
      </p>
      <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950 dark:text-white lg:text-5xl">
        User flow from first action to team follow-up
      </h2>

      <div className="mt-8 grid gap-6 xl:grid-cols-[1fr_0.72fr]">
        <div className="grid gap-4">
          {data.demoContent.flowSteps.map((step, index) => (
            <div
              key={step}
              className="flex items-center gap-4 rounded-[1.4rem] border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/[0.06]"
            >
              <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${styles.gradient} text-sm font-black text-white`}>
                {index + 1}
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="font-black text-slate-950 dark:text-white">{step}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400">
                  Mobile screen, notification, and admin status update are connected at this step.
                </p>
              </div>
              <ChevronRight className="h-5 w-5 text-slate-300" />
            </div>
          ))}
        </div>

        <div className="rounded-[1.7rem] border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.06]">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className={`text-xs font-black uppercase ${styles.text}`}>
                Request form
              </p>
              <h3 className="mt-2 text-xl font-black text-slate-950 dark:text-white">
                {data.demoContent.primaryAction}
              </h3>
            </div>
            <ClipboardCheck className={`h-7 w-7 ${styles.text}`} />
          </div>

          <div className="mt-5 space-y-3">
            {[data.demoContent.catalogTabLabel, "Preferred details", "Contact", "Confirmation"].map((field) => (
              <div key={field} className="rounded-2xl border border-slate-200 bg-slate-50 p-3 dark:border-white/10 dark:bg-white/[0.05]">
                <p className="text-[10px] font-black uppercase text-slate-400">
                  Field
                </p>
                <p className="mt-1 text-sm font-black text-slate-950 dark:text-white">
                  {field}
                </p>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setSubmitted(true)}
            className={`mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-black text-white ${styles.bg}`}
          >
            {submitted ? "Request Sent" : "Send Demo Request"}
            <ArrowRight className="h-4 w-4" />
          </button>

          {submitted ? (
            <div className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-bold text-emerald-700 dark:border-emerald-300/20 dark:bg-emerald-400/10 dark:text-emerald-300">
              Confirmation state: user receives an app notification and the admin dashboard gets a new task.
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function CatalogPreview({
  data,
  styles,
  selectedIndex,
  onSelect,
}: {
  data: IndustryMobileAppPageData;
  styles: AccentStyle;
  selectedIndex: number;
  onSelect: (index: number) => void;
}) {
  const selected = data.demoContent.catalogItems[selectedIndex] ?? data.demoContent.catalogItems[0];
  const SelectedIcon = selected.icon;

  return (
    <div>
      <p className={`text-xs font-black uppercase ${styles.text}`}>
        {data.demoContent.catalogTabLabel}
      </p>
      <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950 dark:text-white lg:text-5xl">
        {data.demoContent.catalogTitle}
      </h2>
      <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300">
        {data.demoContent.catalogDescription}
      </p>

      <div className="mt-7 grid gap-5 xl:grid-cols-[1fr_0.8fr]">
        <div className="grid gap-3">
          {data.demoContent.catalogItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = index === selectedIndex;

            return (
              <button
                key={item.title}
                type="button"
                onClick={() => onSelect(index)}
                className={`flex items-start gap-4 rounded-[1.4rem] border p-4 text-left transition ${
                  isActive
                    ? `${styles.border} ${styles.soft}`
                    : "border-slate-200 bg-white hover:border-slate-300 dark:border-white/10 dark:bg-white/[0.06]"
                }`}
              >
                <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl ${styles.soft} ${styles.text}`}>
                  <Icon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block font-black text-slate-950 dark:text-white">
                    {item.title}
                  </span>
                  <span className="mt-1 block text-sm leading-6 text-slate-500 dark:text-slate-400">
                    {item.description}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        <div className="rounded-[1.7rem] border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.06]">
          <span className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${styles.gradient} text-white`}>
            <SelectedIcon className="h-6 w-6" />
          </span>
          <h3 className="mt-5 text-2xl font-black text-slate-950 dark:text-white">
            {selected.title}
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
            {selected.description}
          </p>
          <p className={`mt-5 inline-flex rounded-full px-3 py-1.5 text-xs font-black ${styles.soft} ${styles.text}`}>
            {selected.meta}
          </p>

          <div className="mt-6 rounded-2xl bg-slate-50 p-4 dark:bg-white/[0.05]">
            <p className="text-xs font-black uppercase text-slate-400">
              App card preview
            </p>
            <div className="mt-4 flex items-center justify-between gap-4">
              <div>
                <p className="font-black text-slate-950 dark:text-white">
                  {selected.title}
                </p>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  {data.demoContent.secondaryAction}
                </p>
              </div>
              <span className={`rounded-xl px-4 py-2 text-xs font-black text-white ${styles.bg}`}>
                Open
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NotificationsPreview({
  data,
  styles,
}: {
  data: IndustryMobileAppPageData;
  styles: AccentStyle;
}) {
  return (
    <div>
      <p className={`text-xs font-black uppercase ${styles.text}`}>
        Notifications
      </p>
      <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950 dark:text-white lg:text-5xl">
        Push updates that keep users moving
      </h2>

      <div className="mt-8 grid gap-6 xl:grid-cols-[0.85fr_1fr] xl:items-center">
        <div className="mx-auto w-[min(285px,78vw)] rounded-[2.6rem] border-[9px] border-slate-950 bg-slate-950 p-2 shadow-[0_30px_80px_rgba(15,23,42,0.3)] dark:border-slate-800">
          <div className="overflow-hidden rounded-[1.95rem] bg-slate-100 p-4 dark:bg-slate-900">
            <p className="text-xs font-black text-slate-500 dark:text-slate-400">
              Notification Center
            </p>
            <div className="mt-4 space-y-3">
              {data.demoContent.notifications.map((notification) => (
                <div key={notification.title} className="rounded-2xl bg-white p-3 shadow-sm dark:bg-white/[0.08]">
                  <div className="flex gap-3">
                    <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl ${styles.soft} ${styles.text}`}>
                      <Bell className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-xs font-black text-slate-950 dark:text-white">
                        {notification.title}
                      </p>
                      <p className="mt-1 text-[10px] leading-4 text-slate-500 dark:text-slate-400">
                        {notification.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          {data.demoContent.notifications.map((notification) => (
            <div
              key={`${notification.title}-detail`}
              className="flex gap-4 rounded-[1.4rem] border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/[0.06]"
            >
              <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl ${styles.soft} ${styles.text}`}>
                <Bell className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-black text-slate-950 dark:text-white">
                    {notification.title}
                  </h3>
                  <span className="text-xs font-bold text-slate-400">
                    {notification.time}
                  </span>
                </div>
                <p className="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400">
                  {notification.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AnalyticsPreview({
  data,
  styles,
}: {
  data: IndustryMobileAppPageData;
  styles: AccentStyle;
}) {
  return (
    <div>
      <p className={`text-xs font-black uppercase ${styles.text}`}>
        Analytics Dashboard
      </p>
      <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950 dark:text-white lg:text-5xl">
        App, user and admin metrics for {data.industryName}
      </h2>

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {data.demoContent.analyticsMetrics.map((metric) => {
          const Icon = metric.icon;

          return (
            <div
              key={metric.label}
              className="rounded-[1.4rem] border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/[0.06]"
            >
              <div className="flex items-center justify-between gap-3">
                <span className={`grid h-11 w-11 place-items-center rounded-2xl ${styles.soft} ${styles.text}`}>
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-xs font-black text-emerald-600 dark:text-emerald-300">
                  {metric.change}
                </span>
              </div>
              <p className="mt-4 text-xs font-bold text-slate-500 dark:text-slate-400">
                {metric.label}
              </p>
              <p className="mt-1 text-2xl font-black text-slate-950 dark:text-white">
                {metric.value}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-6 grid gap-5 xl:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[1.7rem] border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.06]">
          <h3 className="font-black text-slate-950 dark:text-white">
            Engagement trend
          </h3>
          <div className="mt-5 flex h-52 items-end gap-3 rounded-2xl bg-slate-50 p-5 dark:bg-white/[0.05]">
            {[42, 58, 49, 70, 64, 82, 76, 94].map((height, index) => (
              <span
                key={`${height}-${index}`}
                className={`flex-1 rounded-t-xl bg-gradient-to-t ${styles.gradient}`}
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>

        <div className="rounded-[1.7rem] border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.06]">
          <h3 className="font-black text-slate-950 dark:text-white">
            Source breakdown
          </h3>
          <div className="mt-5 grid gap-4">
            {data.demoContent.analyticsSources.map(([label, value]) => (
              <div key={label}>
                <div className="mb-2 flex items-center justify-between text-sm font-bold text-slate-600 dark:text-slate-300">
                  <span>{label}</span>
                  <span>{value}</span>
                </div>
                <div className="h-2 rounded-full bg-slate-100 dark:bg-white/10">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${styles.gradient}`}
                    style={{ width: value }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
