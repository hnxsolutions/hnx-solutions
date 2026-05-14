"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Activity,
  ArrowRight,
  BarChart3,
  CalendarCheck,
  CheckCircle2,
  ClipboardList,
  MonitorSmartphone,
  PackageSearch,
  Smartphone,
  Stethoscope,
  UserRound,
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

const tabs: {
  id: DemoTab;
  label: string;
  icon: typeof MonitorSmartphone;
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
    label: "Appointment / Inquiry Flow",
    icon: CalendarCheck,
  },
  {
    id: "profile",
    label: "Profile / Catalog",
    icon: PackageSearch,
  },
  {
    id: "analytics",
    label: "Analytics Dashboard",
    icon: BarChart3,
  },
];

export default function HealthcareDemoModal({
  demo,
  onClose,
}: HealthcareDemoModalProps) {
  const [activeTab, setActiveTab] = useState<DemoTab>("desktop");
  const accent = getDemoAccentClasses(demo.accent);

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
          <aside className="border-b border-slate-200 bg-slate-50/80 p-6 dark:border-white/10 dark:bg-white/[0.03] lg:border-b-0 lg:border-r">
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
                  Healthcare Website Demo
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

            <nav className="mt-7 space-y-2">
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
                    {tab.label}
                  </button>
                );
              })}
            </nav>

            <div className="mt-7 rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/[0.05]">
              <h3 className="text-sm font-black text-slate-950 dark:text-white">
                What&apos;s included
              </h3>

              <div className="mt-4 space-y-3">
                {demo.chips.map((chip) => (
                  <div
                    key={chip}
                    className="flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-300"
                  >
                    <CheckCircle2 className={`h-4 w-4 ${accent.text}`} />
                    {chip}
                  </div>
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
                {activeTabLabel(activeTab)}
              </p>
              <h2 className="mt-1 text-2xl font-black tracking-[-0.035em] text-slate-950 dark:text-white sm:text-3xl">
                {demo.title} Website Experience
              </h2>
            </div>

            {activeTab === "desktop" ? (
              <DesktopPreview demo={demo} />
            ) : null}

            {activeTab === "mobile" ? (
              <MobilePreview demo={demo} />
            ) : null}

            {activeTab === "flow" ? (
              <FlowPreview demo={demo} />
            ) : null}

            {activeTab === "profile" ? (
              <ProfilePreview demo={demo} />
            ) : null}

            {activeTab === "analytics" ? (
              <AnalyticsPreview demo={demo} />
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

function DesktopPreview({ demo }: { demo: HealthcareDemo }) {
  const accent = getDemoAccentClasses(demo.accent);

  return (
    <div className="rounded-[1.6rem] border border-slate-200 bg-slate-50 p-4 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
      <div className="overflow-hidden rounded-[1.25rem] border border-slate-200 bg-white dark:border-white/10 dark:bg-[#0b1020]">
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4 dark:border-white/10">
          <div className="flex items-center gap-2">
            <span className={`h-4 w-4 rounded-full ${accent.button}`} />
            <span className="text-sm font-black text-slate-950 dark:text-white">
              {demo.brand}
            </span>
          </div>

          <div className="hidden items-center gap-6 text-xs font-black text-slate-500 dark:text-slate-400 md:flex">
            <span>Home</span>
            <span>Services</span>
            <span>Doctors</span>
            <span>Pages</span>
            <span>Contact</span>
          </div>

          <span className={`rounded-lg px-4 py-2 text-xs font-black text-white ${accent.button}`}>
            Book Appointment
          </span>
        </div>

        <div className="grid items-center gap-6 bg-gradient-to-br from-slate-50 to-white p-7 dark:from-white/[0.04] dark:to-transparent lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <span className={`inline-flex rounded-full px-3 py-1.5 text-xs font-black ${accent.softBg} ${accent.text}`}>
              Trusted Care. Better Health.
            </span>

            <h3 className="mt-5 max-w-lg text-4xl font-black leading-tight tracking-[-0.05em] text-slate-950 dark:text-white">
              {demo.headline}
            </h3>

            <p className="mt-4 max-w-md text-sm leading-6 text-slate-600 dark:text-slate-300">
              A conversion-focused website experience built for trust, inquiries,
              appointments, and measurable healthcare growth.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className={`rounded-xl px-5 py-3 text-sm font-black text-white ${accent.button}`}>
                Book Appointment
              </span>
              <span className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-black text-slate-700 dark:border-white/10 dark:bg-white/[0.06] dark:text-white">
                Explore Services
              </span>
            </div>
          </div>

          <div
            className="min-h-[330px] rounded-[1.4rem] bg-cover bg-center shadow-inner"
            style={{ backgroundImage: `url(${demo.image})` }}
          />
        </div>

        <div className="grid gap-3 border-t border-slate-200 p-5 dark:border-white/10 sm:grid-cols-4">
          {demo.stats.map((stat, index) => (
            <div
              key={`${stat}-${index}`}
              className="rounded-2xl bg-slate-50 p-4 text-center dark:bg-white/[0.05]"
            >
              <p className={`text-xl font-black ${accent.text}`}>{stat}</p>
              <p className="mt-1 text-xs font-bold text-slate-500 dark:text-slate-400">
                {["Years", "Patients", "Experts", "Support"][index] ?? "Metric"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobilePreview({ demo }: { demo: HealthcareDemo }) {
  const accent = getDemoAccentClasses(demo.accent);

  return (
    <div className="grid items-center gap-8 lg:grid-cols-[0.8fr_1.2fr]">
      <div className="mx-auto w-[280px] rounded-[2.4rem] border-[10px] border-slate-950 bg-white p-4 shadow-[0_30px_80px_rgba(15,23,42,0.24)] dark:border-slate-800 dark:bg-[#0b1020]">
        <div className="mx-auto mb-4 h-1.5 w-16 rounded-full bg-slate-300" />

        <div className="flex items-center justify-between">
          <span className="text-sm font-black text-slate-950 dark:text-white">
            {demo.brand}
          </span>
          <span className="h-2 w-8 rounded-full bg-slate-200" />
        </div>

        <div
          className="mt-4 h-36 rounded-2xl bg-cover bg-center"
          style={{ backgroundImage: `url(${demo.image})` }}
        />

        <h3 className="mt-5 text-2xl font-black leading-tight text-slate-950 dark:text-white">
          {demo.headline}
        </h3>

        <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
          Responsive mobile-first design for patients who browse and book from
          their phones.
        </p>

        <div className={`mt-5 grid h-11 place-items-center rounded-xl text-sm font-black text-white ${accent.button}`}>
          Book Appointment
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          {demo.chips.slice(0, 4).map((chip) => (
            <div
              key={chip}
              className="rounded-xl bg-slate-50 p-3 text-center text-[10px] font-bold text-slate-600 dark:bg-white/[0.06] dark:text-slate-300"
            >
              {chip}
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {[
          "Mobile-first layout",
          "Fast-loading pages",
          "Tap-to-call buttons",
          "Easy inquiry forms",
        ].map((item) => (
          <div
            key={item}
            className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/[0.05]"
          >
            <CheckCircle2 className={`mb-3 h-5 w-5 ${accent.text}`} />
            <p className="text-sm font-black text-slate-950 dark:text-white">
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function FlowPreview({ demo }: { demo: HealthcareDemo }) {
  const accent = getDemoAccentClasses(demo.accent);
  const steps = demo.title.includes("Pharma")
    ? ["Search Product", "Upload Prescription", "Send Inquiry", "Track Request"]
    : demo.title.includes("Diagnostic")
      ? ["Choose Test", "Select Collection", "Enter Details", "Get Report"]
      : ["Choose Service", "Select Expert", "Pick Slot", "Confirm Booking"];

  return (
    <div className="rounded-[1.6rem] border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.05]">
      <div className="grid gap-5 md:grid-cols-4">
        {steps.map((step, index) => (
          <div key={step} className="relative">
            {index < steps.length - 1 ? (
              <ArrowRight className="absolute -right-4 top-8 hidden h-5 w-5 text-slate-300 md:block" />
            ) : null}

            <span className={`mx-auto grid h-16 w-16 place-items-center rounded-full ${accent.softBg} ${accent.text}`}>
              {index + 1}
            </span>

            <h3 className="mt-4 text-center text-sm font-black text-slate-950 dark:text-white">
              {step}
            </h3>
            <p className="mt-2 text-center text-xs leading-5 text-slate-500 dark:text-slate-400">
              Clean step-by-step experience designed to reduce friction and
              increase confirmed leads.
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_0.75fr]">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-[#0b1020]">
          <h3 className="text-lg font-black text-slate-950 dark:text-white">
            Booking / Inquiry Form
          </h3>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {["Name", "Phone", "Service", "Preferred Date"].map((field) => (
              <div
                key={field}
                className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-500 dark:border-white/10 dark:bg-white/[0.06]"
              >
                {field}
              </div>
            ))}
          </div>

          <div className={`mt-5 grid h-12 place-items-center rounded-xl text-sm font-black text-white ${accent.button}`}>
            Submit Request
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/[0.05]">
          <CalendarCheck className={`mb-4 h-6 w-6 ${accent.text}`} />
          <p className="text-lg font-black text-slate-950 dark:text-white">
            Lead captured successfully
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
            The request can be routed to WhatsApp, email, CRM, or admin
            dashboard depending on your setup.
          </p>
        </div>
      </div>
    </div>
  );
}

function ProfilePreview({ demo }: { demo: HealthcareDemo }) {
  const accent = getDemoAccentClasses(demo.accent);
  const isCatalog =
    demo.title.includes("Pharma") || demo.title.includes("Diagnostic");

  return (
    <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
      <div className="rounded-[1.6rem] border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/[0.05]">
        <div
          className="h-64 rounded-2xl bg-cover bg-center"
          style={{ backgroundImage: `url(${demo.image})` }}
        />

        <h3 className="mt-5 text-2xl font-black text-slate-950 dark:text-white">
          {isCatalog ? "Featured Catalog" : "Expert Profile"}
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
          {isCatalog
            ? "Show products, tests, packages, details, benefits, and inquiry CTAs."
            : "Show specialist details, experience, reviews, availability, and booking CTA."}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {demo.chips.map((chip) => (
          <div
            key={chip}
            className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/[0.05]"
          >
            <ClipboardList className={`mb-3 h-5 w-5 ${accent.text}`} />
            <p className="text-sm font-black text-slate-950 dark:text-white">
              {chip}
            </p>
            <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">
              Dedicated UI block that helps visitors understand, trust, and act.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function AnalyticsPreview({ demo }: { demo: HealthcareDemo }) {
  const accent = getDemoAccentClasses(demo.accent);

  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_0.8fr]">
      <div className="rounded-[1.6rem] border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.05]">
        <h3 className="text-xl font-black text-slate-950 dark:text-white">
          Website Performance Overview
        </h3>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            ["Visitors", "12,540", "+24.5%"],
            ["Leads", "1,245", "+32.1%"],
            ["Conversion", "9.8%", "+18.4%"],
            ["Top Page", demo.title, "+20.7%"],
          ].map(([label, value, growth]) => (
            <div
              key={label}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-[#0b1020]"
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
            </div>
          ))}
        </div>

        <div className="mt-6 h-44 rounded-2xl bg-slate-50 p-5 dark:bg-[#0b1020]">
          <svg viewBox="0 0 500 140" className="h-full w-full">
            <path
              d="M10 105 C60 55, 100 95, 150 60 S240 100, 290 48 S380 68, 430 30 S470 52, 490 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="8"
              className={accent.text}
            />
          </svg>
        </div>
      </div>

      <div className="rounded-[1.6rem] border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.05]">
        <h3 className="text-xl font-black text-slate-950 dark:text-white">
          Lead Sources
        </h3>

        <div className="mt-6 space-y-4">
          {[
            ["Google Search", "45%"],
            ["Direct", "25%"],
            ["Referral", "20%"],
            ["Social Media", "10%"],
          ].map(([source, value]) => (
            <div key={source}>
              <div className="mb-2 flex justify-between text-sm font-bold text-slate-600 dark:text-slate-300">
                <span>{source}</span>
                <span>{value}</span>
              </div>
              <div className="h-3 rounded-full bg-slate-100 dark:bg-white/10">
                <div
                  className={`h-full rounded-full ${accent.button}`}
                  style={{ width: value }}
                />
              </div>
            </div>
          ))}
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

function activeTabLabel(tab: DemoTab) {
  if (tab === "desktop") return "Desktop Website Preview";
  if (tab === "mobile") return "Mobile Responsive Preview";
  if (tab === "flow") return "Booking / Inquiry Flow";
  if (tab === "profile") return "Profile / Catalog Preview";
  return "Analytics Dashboard Preview";
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