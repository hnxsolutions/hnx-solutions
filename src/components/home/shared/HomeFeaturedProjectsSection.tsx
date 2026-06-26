import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";
import {
  HomeSectionShell,
  SectionBadge,
  SectionCopy,
  SectionHeading,
} from "./HomeSectionPrimitives";
import { featuredProjects } from "./homeSectionsData";

function ProjectMockup({ accent }: { accent: string }) {
  const accentClass =
    accent === "emerald"
      ? "from-emerald-400 to-cyan-500"
      : accent === "blue"
        ? "from-blue-500 to-indigo-500"
        : "from-violet-500 to-fuchsia-500";

  return (
    <div className="relative h-60 overflow-hidden bg-linear-to-b from-slate-50 to-white p-4">
      <div className="absolute bottom-8 left-5 right-8 rounded-t-2xl border-[8px] border-slate-950 bg-white shadow-2xl">
        <div className="h-36 rounded-md bg-slate-50 p-3">
          <div className="mb-3 flex items-center justify-between">
            <div className={`h-7 w-24 rounded-lg bg-linear-to-r ${accentClass}`} />
            <span className="h-3 w-14 rounded-full bg-emerald-200" />
          </div>
          <div className="grid grid-cols-4 gap-3">
            {["2,543", "1,234", "$245k", "156"].map((value) => (
              <div key={value} className="rounded-lg border border-slate-200 bg-white p-1.5">
                <p className="text-xs font-black text-slate-950">{value}</p>
                <span className="mt-2 block h-1.5 rounded-full bg-emerald-300" />
              </div>
            ))}
          </div>
          <div className="mt-3 grid grid-cols-[0.9fr_1.1fr] gap-2">
            <div className="space-y-2 rounded-lg bg-white p-2.5">
              {Array.from({ length: 4 }).map((_, index) => (
                <span
                  key={index}
                  className="block h-3 rounded-full bg-slate-200"
                />
              ))}
            </div>
            <div className="rounded-lg bg-white p-2.5">
              <svg viewBox="0 0 140 60" className="h-16 w-full text-blue-600">
                <path
                  d="M4 46 24 36 44 40 64 20 84 32 108 16 136 22"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="4"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-7 right-5 h-40 w-20 rounded-[1.15rem] border-[6px] border-slate-950 bg-white shadow-2xl">
        <div className="mx-auto mt-2 h-1.5 w-8 rounded-full bg-slate-900" />
        <div className="p-2.5">
          <div className={`h-7 rounded-lg bg-linear-to-r ${accentClass}`} />
          <div className="mt-3 space-y-2">
            {Array.from({ length: 5 }).map((_, index) => (
              <span
                key={index}
                className="block h-3 rounded-full bg-slate-200"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomeFeaturedProjectsSection() {
  return (
    <HomeSectionShell>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <SectionBadge>Featured Projects</SectionBadge>
          <SectionHeading>
            Real Solutions.
            <br />
            Real Results.
          </SectionHeading>
          <SectionCopy>
            Explore how we&apos;ve helped businesses across industries solve
            complex challenges and achieve measurable growth.
          </SectionCopy>
        </div>

        <Link
          href="/portfolio"
          className="inline-flex items-center gap-4 self-start text-base font-black text-blue-700"
        >
          View All Projects
          <span className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white shadow-lg">
            <HiArrowRight />
          </span>
        </Link>
      </div>

      <div className="mt-9 grid gap-5 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <div
            key={project.title}
            className="overflow-hidden rounded-[1.15rem] border border-slate-200/90 bg-white shadow-[0_16px_48px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-white/[0.05]"
          >
            <div className="p-5">
              <h3 className="text-xl font-black text-blue-700">{project.title}</h3>
              <p className="mt-2 text-sm font-medium text-slate-600 dark:text-slate-300">
                {project.type}
              </p>
            </div>
            <ProjectMockup accent={project.accent} />
            <Link
              href="/portfolio"
              className="flex items-center justify-center gap-3 border-t border-slate-200 bg-white px-5 py-4 text-base font-black text-blue-700 transition hover:bg-blue-50 dark:border-white/10 dark:bg-transparent"
            >
              View Case Study
              <HiArrowRight />
            </Link>
          </div>
        ))}
      </div>
    </HomeSectionShell>
  );
}
