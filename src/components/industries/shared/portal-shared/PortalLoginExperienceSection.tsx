import {
  CalendarCheck,
  ChevronRight,
  CreditCard,
  FileText,
  Fingerprint,
  KeyRound,
  LayoutDashboard,
  LockKeyhole,
  LogOut,
  Mail,
  MessageSquareText,
  MonitorSmartphone,
  Plus,
  RotateCcw,
  Settings,
  ShieldCheck,
  Smartphone,
  UserRoundCheck,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";
import { PortalFloat, PortalReveal } from "./PortalMotion";
import { cn } from "./portalSectionUtils";
import type { IndustryPortalPageData } from "./portalTypes";

const benefitCards = [
  {
    title: "Single Sign-On (SSO)",
    description: "One secure login keeps access simple for patients, staff, and administrators.",
    icon: KeyRound,
    tone: "blue",
  },
  {
    title: "Role-based Access",
    description: "Every user lands in the right workspace with the right permissions.",
    icon: UsersRound,
    tone: "violet",
  },
  {
    title: "Secure & Compliant",
    description: "Protected sessions, verification steps, and privacy-first account handling.",
    icon: ShieldCheck,
    tone: "emerald",
  },
  {
    title: "Mobile Friendly Login",
    description: "A clean login flow that works smoothly across desktop and mobile screens.",
    icon: MonitorSmartphone,
    tone: "cyan",
  },
];

const accountMenuItems = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Appointments", icon: CalendarCheck },
  { label: "Patients", icon: UsersRound },
  { label: "Messages", icon: MessageSquareText, badge: "3" },
  { label: "Billing & Payments", icon: CreditCard },
  { label: "Documents", icon: FileText },
  { label: "Settings", icon: Settings },
  { label: "Log out", icon: LogOut },
];

export default function PortalLoginExperienceSection({ data }: { data: IndustryPortalPageData }) {
  return (
    <section id="portal-login-experience" className="relative isolate scroll-mt-[calc(var(--nav-offset)+1rem)] overflow-hidden border-t border-blue-100/70 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_56%,#edf4ff_100%)] px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20 xl:px-12">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(ellipse_at_top_right,rgba(191,219,254,0.55),transparent_62%)]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-80 bg-[radial-gradient(ellipse_at_bottom_left,rgba(221,214,254,0.44),transparent_64%)]" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-[520px] bg-[radial-gradient(circle,rgba(37,99,235,0.13)_1px,transparent_1.6px)] bg-[size:18px_18px] [mask-image:radial-gradient(ellipse_at_bottom_left,black_0%,transparent_72%)]" aria-hidden="true" />

      <div className="relative mx-auto grid w-full max-w-[min(92vw,1440px)] gap-8 lg:grid-cols-5 lg:items-center">
        <PortalReveal className="lg:col-span-2">
          <div>
            <SectionLabel>User Login Experience</SectionLabel>
            <h2 className="mt-4 max-w-2xl text-3xl font-extrabold leading-[1.1] text-[#071538] sm:text-4xl lg:text-[2.85rem]">
              Simple, Secure User Login Experience
            </h2>
            <p className="mt-4 max-w-2xl text-sm font-medium leading-7 text-[#31466d] sm:text-base">
              {data.industrySlug === "healthcare"
                ? "A streamlined login flow with secure, role-based access ensures the right people get to the right information safely and effortlessly."
                : `Give every ${data.portalName.toLowerCase()} user secure role-based access with a login experience that feels simple, fast, and trustworthy.`}
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {benefitCards.map((benefit, index) => {
                const Icon = benefit.icon;

                return (
                  <PortalReveal key={benefit.title} delay={index * 0.035}>
                    <article className="rounded-2xl border border-[#dce5f4] bg-white/90 p-5 shadow-[0_18px_44px_rgba(30,57,104,0.08)]">
                      <span className={cn("grid h-11 w-11 place-items-center rounded-xl", getIconTone(benefit.tone))}>
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <h3 className="mt-4 text-base font-extrabold text-[#111c37]">
                        {benefit.title}
                      </h3>
                      <p className="mt-2 text-sm font-medium leading-6 text-[#526684]">
                        {benefit.description}
                      </p>
                    </article>
                  </PortalReveal>
                );
              })}
            </div>
          </div>
        </PortalReveal>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4 lg:col-span-3">
          <PortalFloat delay={0.03}>
            <FlowCard step="01" title="Sign In" icon={LockKeyhole}>
              <BrandHeader />
              <h3 className="mt-6 text-xl font-extrabold text-[#111c37]">Welcome back</h3>
              <p className="mt-1 text-xs font-medium text-[#526684]">Sign in to your account</p>
              <div className="mt-5 space-y-3">
                <LoginField label="Email address" value="sarah.johnson@email.com" />
                <LoginField label="Password" value="********" secure />
              </div>
              <div className="mt-2 text-right">
                <span className="text-[11px] font-extrabold text-[#123adf]">Forgot password?</span>
              </div>
              <button type="button" className="mt-4 h-11 w-full rounded-xl bg-[#123adf] text-sm font-extrabold text-white shadow-[0_15px_30px_rgba(18,58,223,0.22)]">
                Sign in
              </button>
              <div className="my-3 flex items-center gap-3 text-[10px] font-bold text-[#8a96ad]">
                <span className="h-px flex-1 bg-[#e5edf8]" />
                or
                <span className="h-px flex-1 bg-[#e5edf8]" />
              </div>
              <button type="button" className="mt-3 flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-[#dbe4f0] bg-white text-sm font-extrabold text-[#263a62]">
                <Fingerprint className="h-4 w-4 text-[#123adf]" aria-hidden="true" />
                Use Face ID
              </button>
              <p className="mt-5 text-center text-[11px] font-semibold text-[#526684]">
                Do not have an account? <span className="font-extrabold text-[#123adf]">Sign up</span>
              </p>
            </FlowCard>
          </PortalFloat>

          <PortalFloat delay={0.07}>
            <FlowCard step="02" title="Verify OTP" icon={Smartphone}>
              <div className="mx-auto mt-8 grid h-24 w-24 place-items-center rounded-[2rem] bg-[linear-gradient(135deg,#eef4ff,#dbeafe)] text-[#123adf]">
                <Mail className="h-12 w-12" aria-hidden="true" />
              </div>
              <h3 className="mt-8 text-center text-xl font-extrabold text-[#111c37]">Enter OTP</h3>
              <p className="mx-auto mt-3 max-w-[180px] text-center text-xs font-medium leading-5 text-[#526684]">
                We sent a 6-digit code to sarah.johnson@email.com
              </p>
              <div className="mt-7 grid grid-cols-6 gap-1.5">
                {["2", "7", "4", "9", "1", "6"].map((digit, index) => (
                  <span key={`${digit}-${index}`} className={cn(
                    "grid h-9 place-items-center rounded-lg border bg-white text-sm font-extrabold text-[#111c37] shadow-sm",
                    index === 5 ? "border-[#123adf]" : "border-[#dbe4f0]",
                  )}>
                    {digit}
                  </span>
                ))}
              </div>
              <p className="mt-5 text-center text-xs font-semibold text-[#526684]">Resend code in 00:45</p>
              <button type="button" className="mt-7 h-11 w-full rounded-xl bg-[#123adf] text-sm font-extrabold text-white shadow-[0_15px_30px_rgba(18,58,223,0.22)]">
                Verify OTP
              </button>
              <p className="mt-6 text-center text-xs font-extrabold text-[#123adf]">Back to sign in</p>
            </FlowCard>
          </PortalFloat>

          <PortalFloat delay={0.11}>
            <FlowCard step="03" title="Reset Password" icon={RotateCcw}>
              <div className="mx-auto mt-9 grid h-20 w-20 place-items-center rounded-full bg-[#edf3ff] text-[#123adf]">
                <LockKeyhole className="h-9 w-9" aria-hidden="true" />
              </div>
              <h3 className="mt-8 text-center text-xl font-extrabold text-[#111c37]">Reset your password</h3>
              <p className="mx-auto mt-3 max-w-[190px] text-center text-xs font-medium leading-5 text-[#526684]">
                Enter and confirm your new password below.
              </p>
              <div className="mt-7 space-y-3">
                <LoginField label="New password" value="************" secure />
                <LoginField label="Confirm password" value="************" secure />
              </div>
              <div className="mt-5">
                <div className="grid grid-cols-4 gap-2">
                  {[0, 1, 2].map((item) => (
                    <span key={item} className="h-1.5 rounded-full bg-emerald-500" />
                  ))}
                  <span className="h-1.5 rounded-full bg-slate-200" />
                </div>
                <p className="mt-2 text-xs font-semibold text-emerald-700">Strong password</p>
              </div>
              <button type="button" className="mt-7 h-11 w-full rounded-xl bg-[#123adf] text-sm font-extrabold text-white shadow-[0_15px_30px_rgba(18,58,223,0.22)]">
                Reset Password
              </button>
              <p className="mt-6 text-center text-xs font-extrabold text-[#123adf]">Back to sign in</p>
            </FlowCard>
          </PortalFloat>

          <PortalFloat delay={0.15}>
            <FlowCard step="04" title="Access Account" icon={UserRoundCheck}>
              <div className="mt-8 text-center">
                <span className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-[linear-gradient(135deg,#f9c9a4,#7c3f25)] text-lg font-black text-white shadow-[0_14px_34px_rgba(30,57,104,0.14)]">
                  SJ
                </span>
                <h3 className="mt-4 text-lg font-extrabold text-[#111c37]">Sarah Johnson</h3>
                <p className="mt-1 text-xs font-medium text-[#526684]">Cardiologist</p>
                <span className="mt-3 inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-extrabold text-emerald-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Online
                </span>
              </div>
              <div className="mt-8 overflow-hidden rounded-2xl border border-[#e5edf8]">
                {accountMenuItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.label} className="flex items-center gap-3 border-b border-[#edf2f8] bg-white px-4 py-3 last:border-b-0">
                      <Icon className="h-4 w-4 text-[#123adf]" aria-hidden="true" />
                      <span className="min-w-0 flex-1 text-xs font-extrabold text-[#526684]">{item.label}</span>
                      {item.badge ? <span className="grid h-5 w-5 place-items-center rounded-full bg-[#123adf] text-[10px] font-black text-white">{item.badge}</span> : <ChevronRight className="h-3.5 w-3.5 text-[#9aa7bd]" aria-hidden="true" />}
                    </div>
                  );
                })}
              </div>
            </FlowCard>
          </PortalFloat>
        </div>
      </div>
    </section>
  );
}

function FlowCard({
  step,
  title,
  icon: Icon,
  children,
}: {
  step: string;
  title: string;
  icon: LucideIcon;
  children: ReactNode;
}) {
  return (
    <article className="relative h-full min-h-[520px] overflow-hidden rounded-[1.4rem] border border-[#dbe4f0] bg-white p-3.5 shadow-[0_22px_60px_rgba(30,57,104,0.10)]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-[radial-gradient(ellipse_at_top,rgba(191,219,254,0.42),transparent_66%)]" aria-hidden="true" />
      <div className="relative flex items-center justify-center gap-2">
        <span className="grid h-7 w-7 place-items-center rounded-full bg-[#123adf] text-xs font-black text-white">
          {step}
        </span>
        <h3 className="text-sm font-extrabold text-[#111c37]">{title}</h3>
      </div>
      <span className="absolute right-4 top-5 hidden text-[#123adf]/80 2xl:block">
        <Icon className="h-4 w-4" aria-hidden="true" />
      </span>
      <div className="relative mt-5 min-h-[440px] rounded-[1.15rem] border border-[#e5edf8] bg-white p-4 shadow-inner shadow-blue-50/70">
        {children}
      </div>
    </article>
  );
}

function BrandHeader() {
  return (
    <div className="flex items-center gap-3">
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#123adf] text-white shadow-[0_12px_26px_rgba(18,58,223,0.25)]">
        <Plus className="h-6 w-6 stroke-[4]" aria-hidden="true" />
      </span>
      <div>
        <p className="text-base font-extrabold leading-5 text-[#111c37]">CareConnect</p>
        <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#65708a]">Health Portal</p>
      </div>
    </div>
  );
}

function LoginField({
  label,
  value,
  secure,
}: {
  label: string;
  value: string;
  secure?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-[11px] font-extrabold text-[#65708a]">{label}</span>
      <span className="mt-1.5 flex h-11 items-center rounded-xl border border-[#dbe4f0] bg-white px-3 text-xs font-semibold text-[#263a62]">
        <span className="min-w-0 flex-1 truncate">{value}</span>
        {secure ? <LockKeyhole className="h-4 w-4 text-[#7a869c]" aria-hidden="true" /> : <Mail className="h-4 w-4 text-[#7a869c]" aria-hidden="true" />}
      </span>
    </label>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <span className="inline-flex text-xs font-black uppercase tracking-[0.22em] text-[#123adf]">
      {children}
    </span>
  );
}

function getIconTone(tone: string) {
  const tones: Record<string, string> = {
    blue: "bg-blue-50 text-blue-700",
    violet: "bg-violet-50 text-violet-700",
    emerald: "bg-emerald-50 text-emerald-700",
    cyan: "bg-cyan-50 text-cyan-700",
  };

  return tones[tone] ?? tones.blue;
}
