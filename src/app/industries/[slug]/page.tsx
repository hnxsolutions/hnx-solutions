import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  HiArrowLeft,
  HiArrowRight,
  HiCheck,
  HiSparkles,
} from "react-icons/hi";
import CRMDashboardMockup from "@/components/sections/CRMDashboardMockup";
import { featuredIndustryDetails } from "@/data/hnx-crm";

type IndustryDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return [{ slug: "ecommerce-crm" }];
}

export async function generateMetadata({
  params,
}: IndustryDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = featuredIndustryDetails[slug];

  if (!industry) {
    return {
      title: "Industry CRM Not Found | HNX Technologies",
      description: "The requested HNX industry CRM page could not be found.",
    };
  }

  return {
    title: `${industry.title} by HNX | Custom Industry CRM System`,
    description: industry.subheading,
  };
}

export default async function IndustryDetailPage({
  params,
}: IndustryDetailPageProps) {
  const { slug } = await params;
  const industry = featuredIndustryDetails[slug];

  if (!industry) {
    notFound();
  }

  return (
    <main className="page-shell">
      <section className="page-hero hero-light relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(56,189,248,0.12),transparent_28%),radial-gradient(circle_at_82%_72%,rgba(139,92,246,0.12),transparent_28%)]" />
        <div className="relative z-10 mx-auto max-w-[min(95vw,1600px)] px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <Link
                href="/industries"
                className="mb-5 inline-flex items-center gap-2 rounded-full border border-(--border) bg-white/45 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-(--text-soft) backdrop-blur-xl transition-all hover:border-primary/30 hover:text-primary dark:bg-white/4"
              >
                <HiArrowLeft />
                Industries
              </Link>
              <span className="block w-fit rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                <span className="inline-flex items-center gap-2">
                  <HiSparkles />
                  HNX Industry CRM
                </span>
              </span>
              <h1 className="mt-6 text-4xl font-black leading-[1.02] tracking-tight sm:text-5xl md:text-6xl">
                {industry.title}
              </h1>
              <p className="mt-5 text-2xl font-bold leading-snug text-(--text)">
                {industry.headline}
              </p>
              <p className="mt-5 max-w-2xl text-base leading-8 text-(--text-muted) md:text-lg">
                {industry.subheading}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="btn-shine inline-flex items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-primary to-accent px-7 py-4 text-sm font-bold text-dark-900 transition-all hover:-translate-y-1 sm:text-base"
                >
                  Discuss This CRM
                  <HiArrowRight />
                </Link>
                <Link
                  href="/workflow-lab"
                  className="inline-flex items-center justify-center rounded-2xl border border-(--border) bg-white/55 px-7 py-4 text-sm font-semibold text-(--text) backdrop-blur-xl transition-all hover:border-primary/30 hover:bg-white/80 dark:bg-white/4 sm:text-base"
                >
                  View Workflow Lab
                </Link>
              </div>
            </div>

            <CRMDashboardMockup compact />
          </div>
        </div>
      </section>

      <section className="relative py-18 sm:py-22 lg:py-24">
        <div className="mx-auto max-w-[min(95vw,1600px)] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[1.75rem] border border-(--border) bg-white/68 p-6 backdrop-blur-2xl dark:bg-white/5">
              <h2 className="text-2xl font-black tracking-tight text-(--text) sm:text-3xl">
                Core modules
              </h2>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {industry.modules.map((module) => (
                  <div
                    key={module}
                    className="flex items-start gap-3 rounded-2xl border border-(--border) bg-white/45 p-4 dark:bg-white/4"
                  >
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <HiCheck size={14} />
                    </span>
                    <p className="text-sm font-semibold leading-6 text-(--text)">
                      {module}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-(--border) bg-white/68 p-6 backdrop-blur-2xl dark:bg-white/5">
              <h2 className="text-2xl font-black tracking-tight text-(--text) sm:text-3xl">
                Workflow automations
              </h2>
              <div className="mt-6 space-y-3">
                {industry.automations.map((automation) => (
                  <div
                    key={automation}
                    className="flex items-start gap-3 rounded-2xl border border-(--border) bg-white/45 p-4 dark:bg-white/4"
                  >
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-500 dark:text-emerald-300">
                      <HiCheck size={14} />
                    </span>
                    <p className="text-sm leading-6 text-(--text-muted)">
                      {automation}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
