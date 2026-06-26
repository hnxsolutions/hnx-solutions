import Link from "next/link";
import {
  HiArrowRight,
  HiChartBar,
  HiCheckCircle,
  HiSparkles,
} from "react-icons/hi";
import CRMDashboardMockup from "@/components/sections/CRMDashboardMockup";
import { commandCenterBullets } from "./homeSectionsData";

export default function HomeCommandCenterSection() {
  return (
    <section className="relative overflow-hidden bg-[#f8fbff] py-16 text-slate-950 sm:py-18 lg:py-20 dark:bg-slate-950 dark:text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(56,189,248,0.12),transparent_28%),radial-gradient(circle_at_82%_72%,rgba(139,92,246,0.12),transparent_28%)] dark:bg-[radial-gradient(circle_at_18%_18%,rgba(77,208,225,0.16),transparent_28%),radial-gradient(circle_at_82%_72%,rgba(149,117,205,0.14),transparent_28%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-[#f8fbff] to-transparent dark:from-slate-950" />

      <div className="relative mx-auto w-full max-w-[min(92vw,1440px)] px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              <HiChartBar />
              Business Command Center
            </span>

            <h2 className="mt-5 max-w-3xl text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl dark:text-white">
              See the business system before you build it.
            </h2>

            <p className="mt-4 max-w-2xl text-base font-medium leading-7 text-slate-600 sm:text-lg dark:text-slate-300">
              A custom HNX CRM can combine leads, deals, customers, tasks,
              reports, automation, revenue visibility, AI insights, and activity
              history in one controlled interface.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {commandCenterBullets.map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm font-black text-slate-800 dark:text-slate-100">
                  <span className="grid h-8 w-8 place-items-center rounded-full border border-primary/20 bg-primary/10 text-primary">
                    <HiCheckCircle />
                  </span>
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/crm-demo"
                className="btn-shine inline-flex items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-primary to-accent px-6 py-3.5 text-sm font-bold text-dark-900 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/25"
              >
                Explore CRM Demo
                <HiArrowRight />
              </Link>
              <Link
                href="/workflow-lab"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white/55 px-6 py-3.5 text-sm font-semibold text-slate-900 backdrop-blur-xl transition-all hover:border-primary/30 hover:bg-white/80 dark:border-white/10 dark:bg-white/4 dark:text-white"
              >
                View Workflow Lab
                <HiSparkles />
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2.2rem] bg-linear-to-br from-primary/18 via-accent/12 to-cyan-300/10 blur-2xl" />
            <CRMDashboardMockup compact className="relative" />
          </div>
        </div>
      </div>
    </section>
  );
}
