import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  CreditCard,
  Database,
  FileText,
  PlayCircle,
  ReceiptText,
  X,
} from "lucide-react";

const genericCrmPoints = [
  "Pay monthly per user — costs add up over time",
  "Packed with features you don't need or use",
  "Limited customization to fit your exact workflow",
  "You don't own your data or the platform",
  "Vendor lock-in with upgrade and pricing risks",
  "One-size-fits-all — never truly built for you",
];

const customCrmPoints = [
  "One-time investment — no recurring per-user fees",
  "Only the features you need — nothing you don't",
  "100% customizable to match your exact process",
  "You own your data and your CRM",
  "No vendor lock-in — complete flexibility",
  "Built for your business — designed to scale with you",
];

export default function CrmOwnershipComparisonSection({
  primaryHref = "/contact",
}: {
  primaryHref?: string;
}) {
  const safePrimaryHref = primaryHref || "/contact";

  return (
    <section
      id="own-your-crm"
      className="crm-ownership-section is-visible relative isolate overflow-hidden bg-[#fbfcff] px-3 py-9 text-slate-950 sm:px-6 sm:py-10 lg:px-8 lg:py-12 xl:px-10 2xl:px-12"
    >
      <style>
        {`
          @keyframes crmFloatSlow {
            0%, 100% { transform: translate3d(0, 0, 0) scale(1); opacity: .5; }
            50% { transform: translate3d(12px, -14px, 0) scale(1.08); opacity: .78; }
          }

          @keyframes crmFloatReverse {
            0%, 100% { transform: translate3d(0, 0, 0) scale(1); opacity: .45; }
            50% { transform: translate3d(-14px, 10px, 0) scale(1.06); opacity: .72; }
          }

          @keyframes crmFadeUp {
            from { opacity: 0; transform: translateY(24px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes crmSlideLeft {
            from { opacity: 0; transform: translateX(-34px) translateY(18px); }
            to { opacity: 1; transform: translateX(0) translateY(0); }
          }

          @keyframes crmSlideRight {
            from { opacity: 0; transform: translateX(34px) translateY(18px); }
            to { opacity: 1; transform: translateX(0) translateY(0); }
          }

          @keyframes crmPop {
            0% { opacity: 0; transform: scale(.62); }
            70% { opacity: 1; transform: scale(1.08); }
            100% { opacity: 1; transform: scale(1); }
          }

          @keyframes crmPulseGlow {
            0%, 100% {
              box-shadow: 0 22px 58px rgba(79,70,229,.18), 0 0 0 1px rgba(124,58,237,.14);
            }
            50% {
              box-shadow: 0 28px 78px rgba(79,70,229,.32), 0 0 0 1px rgba(124,58,237,.22);
            }
          }

          @keyframes crmShine {
            0% { transform: translateX(-130%) rotate(14deg); opacity: 0; }
            20% { opacity: .45; }
            60% { opacity: .22; }
            100% { transform: translateX(180%) rotate(14deg); opacity: 0; }
          }

          @keyframes crmGradientMove {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }

          @keyframes crmPointReveal {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .crm-ownership-section .crm-wait {
            opacity: 0;
            transform: translateY(18px);
          }

          .crm-ownership-section.is-visible .crm-anim-fade-up {
            animation: crmFadeUp .75s cubic-bezier(.22,1,.36,1) both;
          }

          .crm-ownership-section.is-visible .crm-anim-left {
            animation: crmSlideLeft .8s cubic-bezier(.22,1,.36,1) both;
          }

          .crm-ownership-section.is-visible .crm-anim-pop {
            animation: crmPop .65s cubic-bezier(.22,1,.36,1) .36s both;
          }

          .crm-ownership-section.is-visible .crm-anim-cta {
            animation: crmFadeUp .7s cubic-bezier(.22,1,.36,1) .55s both;
          }

          .crm-ownership-section.is-visible .crm-gradient-text {
            background-size: 220% 220%;
            animation: crmGradientMove 5.5s ease-in-out infinite;
          }

          .crm-shine::after {
            content: "";
            position: absolute;
            inset: -40%;
            width: 42%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,.72), transparent);
            transform: translateX(-130%) rotate(14deg);
            opacity: 0;
            pointer-events: none;
          }

          .crm-ownership-section.is-visible .crm-shine::after {
            animation: crmShine 4.8s ease-in-out infinite;
          }

          .crm-ownership-section.is-visible .crm-card-positive {
            animation: crmSlideRight .8s cubic-bezier(.22,1,.36,1) both, crmPulseGlow 4.8s ease-in-out infinite 1s;
          }

          .crm-point {
            opacity: 0;
          }

          .crm-ownership-section.is-visible .crm-point {
            animation: crmPointReveal .46s cubic-bezier(.22,1,.36,1) both;
          }

          .crm-ownership-section.is-visible .crm-float-slow {
            animation: crmFloatSlow 7s ease-in-out infinite;
          }

          .crm-ownership-section.is-visible .crm-float-reverse {
            animation: crmFloatReverse 9s ease-in-out infinite;
          }

          @media (prefers-reduced-motion: reduce) {
            .crm-ownership-section .crm-wait,
            .crm-ownership-section .crm-anim-fade-up,
            .crm-ownership-section .crm-anim-left,
            .crm-ownership-section .crm-anim-pop,
            .crm-ownership-section .crm-anim-cta,
            .crm-ownership-section .crm-card-positive,
            .crm-ownership-section .crm-point,
            .crm-ownership-section .crm-gradient-text,
            .crm-ownership-section .crm-shine::after {
              animation: none !important;
              opacity: 1 !important;
              transform: none !important;
            }
          }
        `}
      </style>

      <div className="crm-float-slow pointer-events-none absolute -left-24 -top-28 h-72 w-72 rounded-full border border-violet-100/70 opacity-60" />
      <div className="crm-float-reverse pointer-events-none absolute -left-32 -top-36 h-[24rem] w-[24rem] rounded-full border border-blue-100/60 opacity-50" />
      <div className="crm-float-slow pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border-[20px] border-violet-200/40 shadow-[0_0_70px_rgba(124,58,237,0.18)]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-36 w-full bg-[linear-gradient(90deg,rgba(37,99,235,0.06),transparent_30%,transparent_70%,rgba(124,58,237,0.08))]" />

      <div className="relative mx-auto w-full max-w-[min(92vw,1360px)]">
        <div className="crm-wait crm-anim-fade-up mx-auto max-w-6xl text-center">
          <h2 className="mx-auto max-w-6xl whitespace-normal text-balance text-3xl font-black leading-[1.08] tracking-[-0.035em] text-[#060822] sm:text-4xl lg:whitespace-nowrap lg:text-[2.9rem] xl:text-[3.15rem]">
            Own Your CRM —{" "}
            <span className="crm-gradient-text bg-gradient-to-r from-violet-600 via-indigo-500 to-blue-600 bg-clip-text text-transparent">
              Stop Paying Per User
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-balance text-sm font-semibold leading-6 text-slate-600 sm:text-base lg:text-lg">
            Most businesses only need a fraction of what large CRM platforms offer. Stop paying monthly per user for
            bloated software you don&apos;t fully use.
          </p>

          <div className="crm-shine relative mx-auto mt-5 inline-flex max-w-3xl overflow-hidden rounded-full border border-violet-100 bg-white/85 px-5 py-2.5 text-center text-sm font-bold text-indigo-700 shadow-[0_14px_38px_rgba(79,70,229,0.09)] transition duration-300 hover:-translate-y-0.5 hover:scale-[1.01] sm:px-7 sm:text-base">
            <span className="relative z-10 flex items-center gap-3">
              <span className="text-2xl leading-none text-violet-300" aria-hidden="true">
                &ldquo;
              </span>
              <span>Need only 5 powerful CRM features? Why pay for 50 you don&apos;t use?</span>
            </span>
          </div>
        </div>

        <div className="relative mt-8 grid gap-6 lg:grid-cols-2 lg:gap-8">
          <ComparisonCard
            title="Generic Subscription CRM"
            subtitle="Pay for access. Limited control. Built for everyone."
            tone="negative"
            points={genericCrmPoints}
          />

          <div className="crm-wait crm-anim-pop relative z-20 mx-auto grid h-16 w-16 place-items-center rounded-full border border-violet-100 bg-white text-2xl font-black italic text-violet-700 shadow-[0_16px_36px_rgba(79,70,229,0.2)] transition duration-300 hover:scale-110 lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2">
            VS
          </div>

          <ComparisonCard
            title="HNX Custom CRM"
            subtitle="Pay once. Full control. Built around your business."
            tone="positive"
            points={customCrmPoints}
          />
        </div>

        <div className="crm-wait crm-anim-cta mx-auto mt-7 grid gap-5 rounded-[1.6rem] border border-violet-100 bg-white/90 p-4 shadow-[0_18px_55px_rgba(15,23,42,0.07)] backdrop-blur transition duration-300 hover:-translate-y-1 sm:p-5 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-7 xl:max-w-6xl">
          <div className="grid gap-4 sm:grid-cols-[4rem_1fr] sm:items-center">
            <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-violet-50 text-blue-700 shadow-sm transition duration-300 hover:scale-105 sm:mx-0">
              <Building2 className="h-7 w-7" aria-hidden="true" />
            </span>

            <p className="text-center text-sm font-black leading-6 text-[#11143a] sm:text-left sm:text-base lg:text-lg">
              Built for healthcare, real estate, insurance, manufacturing, education and more.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href={safePrimaryHref}
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-6 py-3.5 text-sm font-black text-white shadow-[0_16px_36px_rgba(79,70,229,0.28)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_44px_rgba(79,70,229,0.34)] sm:w-auto"
            >
              Build My Custom CRM
              <ArrowRight
                className="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>

            <Link
              href="/crm-demo"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full border border-violet-200 bg-white px-6 py-3.5 text-sm font-black text-violet-700 shadow-sm transition hover:-translate-y-0.5 hover:border-violet-300 hover:bg-violet-50 sm:w-auto"
            >
              View CRM Demo
              <PlayCircle
                className="h-[18px] w-[18px] transition-transform duration-300 group-hover:scale-110"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ComparisonCard({
  title,
  subtitle,
  tone,
  points,
}: {
  title: string;
  subtitle: string;
  tone: "negative" | "positive";
  points: string[];
}) {
  const isPositive = tone === "positive";
  const Icon = isPositive ? CheckCircle2 : X;

  return (
    <article
      className={`group relative overflow-hidden rounded-[1.7rem] border bg-white/[0.92] p-5 backdrop-blur transition duration-300 hover:-translate-y-1.5 hover:scale-[1.01] sm:p-6 lg:p-7 ${
        isPositive
          ? "crm-wait crm-card-positive crm-shine border-violet-400"
          : "crm-wait crm-anim-left border-rose-200 shadow-[0_18px_50px_rgba(190,18,60,0.07)]"
      }`}
    >
      {isPositive ? (
        <div className="crm-float-slow pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-400/25 blur-3xl" />
      ) : null}

      <div
        className={`pointer-events-none absolute inset-x-0 top-0 h-24 ${
          isPositive
            ? "bg-gradient-to-b from-violet-100/75 to-transparent"
            : "bg-gradient-to-b from-rose-50 to-transparent"
        }`}
      />

      {!isPositive ? (
        <div className="pointer-events-none absolute right-8 top-8 grid grid-cols-4 gap-2 opacity-40">
          {Array.from({ length: 16 }).map((_, index) => (
            <span key={index} className="h-1.5 w-1.5 rounded-full bg-rose-200" />
          ))}
        </div>
      ) : null}

      <div className="relative z-10 flex gap-4">
        <span
          className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl shadow-sm transition duration-300 group-hover:scale-105 ${
            isPositive
              ? "bg-gradient-to-br from-violet-600 to-blue-600 text-white shadow-[0_12px_28px_rgba(79,70,229,0.26)]"
              : "bg-rose-50 text-rose-700"
          }`}
        >
          {isPositive ? (
            <Database className="h-6 w-6" aria-hidden="true" />
          ) : (
            <ReceiptText className="h-6 w-6" aria-hidden="true" />
          )}
        </span>

        <div>
          <h3 className="text-xl font-black tracking-[-0.03em] text-[#080b2a] sm:text-2xl">{title}</h3>
          <p className="mt-1.5 text-sm font-semibold leading-6 text-slate-600">{subtitle}</p>
        </div>
      </div>

      <div className="relative z-10 mt-4 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <ul className="relative z-10 mt-4 space-y-2.5">
        {points.map((point, index) => (
          <li
            key={point}
            className="crm-point flex gap-3 text-sm font-semibold leading-6 text-[#11143a] sm:text-[0.95rem]"
            style={{ animationDelay: `${0.18 + index * 0.075}s` }}
          >
            <span
              className={`mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full transition duration-300 group-hover:scale-110 ${
                isPositive ? "bg-gradient-to-br from-violet-600 to-blue-600 text-white" : "bg-rose-100 text-rose-600"
              }`}
            >
              <Icon className="h-3 w-3" aria-hidden="true" />
            </span>
            <span>{point}</span>
          </li>
        ))}
      </ul>

      {!isPositive ? (
        <div className="pointer-events-none absolute bottom-5 right-5 flex gap-2 text-rose-200/75">
          <CreditCard className="h-[18px] w-[18px]" aria-hidden="true" />
          <FileText className="h-[18px] w-[18px]" aria-hidden="true" />
        </div>
      ) : null}
    </article>
  );
}