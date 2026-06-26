import {
  HiClock,
  HiCog,
  HiExclamationCircle,
  HiLockClosed,
} from "react-icons/hi";
import { SectionBadge } from "./HomeSectionPrimitives";

const challengeCards = [
  {
    title: "Scattered operations",
    description:
      "Leads, customers, tasks, support, and reports live in different tools, so your team never has one clear operating view.",
    icon: HiExclamationCircle,
  },
  {
    title: "Manual follow-ups",
    description:
      "Sales teams still remember follow-ups manually, update sheets, and chase managers for approvals instead of using automated workflows.",
    icon: HiClock,
  },
  {
    title: "Generic CRM limits",
    description:
      "Subscription CRMs force your business into fixed modules, fixed pricing, and fixed workflows that were not designed for your process.",
    icon: HiCog,
  },
  {
    title: "No true ownership",
    description:
      "You keep paying every month, but the system, data model, workflows, and access rules still belong to the platform, not your business.",
    icon: HiLockClosed,
  },
];

export default function HomeBusinessChallengesSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 text-slate-950 sm:py-18 lg:py-20 dark:bg-slate-950 dark:text-white">
      <div className="pointer-events-none absolute left-[-14rem] top-10 h-[28rem] w-[28rem] rounded-full bg-cyan-200/25 blur-3xl" />
      <div className="pointer-events-none absolute right-[-12rem] bottom-[-8rem] h-[30rem] w-[30rem] rounded-full bg-blue-100/80 blur-3xl dark:bg-blue-950/30" />

      <div className="relative mx-auto grid w-full max-w-[min(92vw,1440px)] gap-10 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:px-8 xl:px-10 2xl:px-12">
        <div>
          <SectionBadge>Business Challenges</SectionBadge>
          <h2 className="mt-5 max-w-3xl text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl dark:text-white">
            Your business has outgrown scattered tools.
          </h2>
          <p className="mt-4 max-w-2xl text-base font-medium leading-7 text-slate-600 sm:text-lg dark:text-slate-300">
            Most teams are not failing because they need another CRM
            subscription. They are struggling because their real business
            process is split across spreadsheets, WhatsApp, inboxes, calls, and
            manual reports.
          </p>

          <div className="mt-8 rounded-[1.5rem] border border-slate-200 bg-[#f8fbff] p-6 shadow-[0_18px_55px_rgba(15,23,42,0.07)] dark:border-white/10 dark:bg-white/[0.05]">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-700 dark:text-cyan-200">
              HNX idea
            </p>
            <p className="mt-3 text-xl font-black leading-8 text-slate-950 dark:text-white">
              Build a business operating system your company owns.
            </p>
            <p className="mt-4 text-sm font-medium leading-7 text-slate-600 dark:text-slate-300">
              Leads, sales, support, teams, workflows, reports, and AI
              assistance should run from one owned system, not from
              disconnected tools.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {challengeCards.map((card) => (
            <article
              key={card.title}
              className="group rounded-[1.5rem] border border-slate-200 bg-linear-to-br from-white to-[#f5fbff] p-6 shadow-[0_18px_50px_rgba(15,23,42,0.07)] transition hover:-translate-y-1 hover:border-cyan-200 dark:border-white/10 dark:from-white/[0.07] dark:to-white/[0.03]"
            >
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-blue-700 shadow-sm ring-1 ring-slate-200 dark:bg-white/10 dark:text-blue-200 dark:ring-white/10">
                <card.icon className="text-xl" />
              </div>
              <h3 className="mt-5 text-lg font-black text-slate-950 dark:text-white">
                {card.title}
              </h3>
              <p className="mt-3 text-sm font-medium leading-7 text-slate-600 dark:text-slate-300">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
