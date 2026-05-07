"use client";

import type React from "react";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  BarChart3,
  CalendarCheck,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  HeartPulse,
  Mail,
  MessageCircle,
  Phone,
  Play,
  Plus,
  ShieldCheck,
  Stethoscope,
  Users,
  Workflow,
  BriefcaseMedical,
  BrainCircuit,
  Smartphone,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

const doctorImage = "/images/Doctor-hero.png";

const specialtyCards = [
  {
    title: "Clinics & Hospitals",
    text: "Manage OPD, IPD, staff, appointments & billing.",
    image:
      "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=900&q=85",
    icon: HeartPulse,
  },
  {
    title: "Dental Clinics",
    text: "Appointments, treatments, follow-ups & reminders.",
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=85",
    icon: Stethoscope,
  },
  {
    title: "Diagnostic Labs",
    text: "Test bookings, reports, results & follow-ups.",
    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=85",
    icon: FileText,
  },
  {
    title: "Physiotherapy",
    text: "Session bookings, progress tracking & follow-ups.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=85",
    icon: Activity,
  },
  {
    title: "Wellness Centers",
    text: "Programs, memberships & client management.",
    image:
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=900&q=85",
    icon: HeartPulse,
  },
];

const trustBadges = [
  { label: "Appointments", sub: "Doctor calendar", icon: CalendarCheck },
  { label: "Follow-ups", sub: "Auto reminders", icon: MessageCircle },
  { label: "Doctor Tasks", sub: "Daily routine", icon: ClipboardCheck },
  { label: "Mobile Access", sub: "One-device view", icon: Phone },
];

const whyCards = [
  {
    title: "Centralized Patient Data",
    text: "All patient information in one secure place.",
    icon: Users,
  },
  {
    title: "Smart Appointments",
    text: "Easy scheduling, reminders and calendar management.",
    icon: CalendarCheck,
  },
  {
    title: "Automated Follow Ups",
    text: "Reduce no-shows and improve patient retention.",
    icon: Workflow,
  },
  {
    title: "Secure Communication",
    text: "Communicate via SMS, Email, WhatsApp & more.",
    icon: MessageCircle,
  },
  {
    title: "Powerful Reports",
    text: "Real-time insights to make better decisions.",
    icon: BarChart3,
  },
];

const metrics = [
  { label: "Total Patients", value: "2,453", delta: "▲ 12.6% this month" },
  { label: "Appointments", value: "327", delta: "▲ 8.4% yesterday" },
  { label: "New Inquiries", value: "178", delta: "▲ 15.3% this month" },
  { label: "Follow Ups", value: "96", delta: "▲ 9.7% this month" },
];

const appointmentRows = [
  ["John Doe", "General Consultation", "May 26, 10:30 AM", "Confirmed"],
  ["Priya Sharma", "Dental Checkup", "May 26, 11:15 AM", "Confirmed"],
  ["Rahul Verma", "Follow Up", "May 26, 12:00 PM", "Pending"],
  ["Anita Singh", "Physiotherapy", "May 26, 01:00 PM", "Confirmed"],
];

const taskRows = [
  ["Follow up with Priya Sharma", "Due in 30 mins"],
  ["Share report with John Doe", "Due in 2 hours"],
  ["Confirm appointment with Rahul Verma", "Due in 1 hour"],
];

const patientJourney = [
  {
    title: "Inquiry Captured",
    text: "From website, call, WhatsApp or walk-in",
    icon: Users,
  },
  {
    title: "Appointment Scheduled",
    text: "Quick booking & calendar sync",
    icon: CalendarCheck,
  },
  {
    title: "Visit Completed",
    text: "Consultation & treatment details recorded",
    icon: Stethoscope,
  },
  {
    title: "Follow Up Automated",
    text: "Reminders, meds, check-ups automatically scheduled",
    icon: Workflow,
  },
  {
    title: "Patient Retained",
    text: "Better experience, stronger relationships",
    icon: HeartPulse,
  },
];

const leftFeatures = [
  "Patient & Lead Management",
  "Appointment & Calendar",
  "Automated Reminders",
  "Multi-channel Communication (SMS, Email, WhatsApp)",
  "Doctor & Staff Management",
];

const rightFeatures = [
  "Treatment & Visit Records",
  "Prescription & Documents",
  "Reports & Analytics",
  "Custom Workflows",
  "Role-based Access & Security",
];

const plans = [
  {
    name: "Starter CRM",
    tag: "Lead management",
    desc: "For small teams that need lead management, customer database, follow-ups, and a basic dashboard.",
    price: "₹99,999",
    note: "Best for getting started quickly",
    features: ["Lead and customer records", "Follow-up tasks", "Basic dashboard", "Simple user roles"],
  },
  {
    name: "Growth CRM",
    tag: "Workflow ready",
    desc: "For businesses that need custom fields, team roles, permissions, workflow automation, and advanced reports.",
    price: "₹1,99,999",
    note: "For growing operations",
    popular: true,
    features: ["Custom fields", "Role-based access", "Permission sets", "Workflow automation", "Advanced reports"],
  },
  {
    name: "AI-Powered CRM",
    tag: "AI assistant",
    desc: "For businesses that want AI lead scoring, smart suggestions, auto message writing, daily planning, and report explanations.",
    price: "₹4,99,999",
    note: "Advanced AI capabilities included",
    features: ["AI lead scoring", "Smart suggestions", "Message drafts", "Daily routine planning", "Report explanation"],
  },
  {
    name: "Enterprise Custom CRM",
    tag: "Complex operations",
    desc: "For companies with complex workflows, integrations, multi-team access, advanced permissions, and scalable architecture.",
    price: "Custom",
    note: "Tailored as per requirements",
    features: ["Advanced permissions", "Integrations", "Multi-team workflows", "Scalable architecture"],
  },
];

const integrations = [
  { name: "WhatsApp", sub: "Business API", icon: MessageCircle },
  { name: "SMS", sub: "Gateways", icon: MessageCircle },
  { name: "Email", sub: "Services", icon: Mail },
  { name: "Payment", sub: "Gateway", icon: ClipboardCheck },
  { name: "Telephony", sub: "CTI", icon: Phone },
  { name: "Calendar", sub: "Sync", icon: CalendarCheck },
  { name: "Lab", sub: "Integrations", icon: FileText },
  { name: "Insurance", sub: "APIs", icon: ShieldCheck },
  { name: "And More", sub: "50+ Integrations", icon: Plus },
];

const doctorUseCases = [
  {
    title: "Doctor Daily Planner",
    text: "Doctors can manage their daily schedule, OPD flow, appointments, and personal follow-up list from one dashboard.",
    icon: CalendarCheck,
  },
  {
    title: "Meetings & Team Coordination",
    text: "Track internal meetings, assign tasks to assistants or staff, and manage clinic coordination in one place.",
    icon: BriefcaseMedical,
  },
  {
    title: "AI Routine Assistant",
    text: "Use AI to review today’s appointments, prepare your workday, and get smart reminders for pending actions.",
    icon: BrainCircuit,
  },
  {
    title: "Mobile Access Anywhere",
    text: "Check appointments, patient history, doctor notes, and operational updates directly from a mobile phone.",
    icon: Smartphone,
  },
  {
    title: "Operational Work Tracking",
    text: "Handle reports, billing status, lab follow-ups, communication logs, and day-to-day clinic operations easily.",
    icon: ClipboardCheck,
  },
  {
    title: "Communication & Follow Ups",
    text: "Manage patient communication, reminders, post-visit follow-ups, and internal team updates from one device.",
    icon: MessageCircle,
  },
];


function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function HeroVisual() {
  return (
    <div className="relative min-h-[560px] overflow-visible lg:min-h-[760px]">
      {/* right-side visual box only */}
      <div className="absolute inset-y-[30px] right-0 z-0 w-[78%] overflow-hidden rounded-[46px] bg-white shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_42%,rgba(224,247,245,0.98),rgba(255,255,255,0.92)_38%,rgba(255,255,255,0.7)_58%,rgba(15,159,145,0.05)_100%)]" />
        <div className="absolute bottom-[4.8rem] left-[-18%] top-[4.8rem] w-[58%] rounded-[999px] bg-[#dff3f2]" />
        <div className="absolute bottom-[1.6rem] right-[1.45rem] top-[3.35rem] w-[58%] rounded-[46px] bg-[#109789]" />
      </div>

      {/* doctor image OUTSIDE the white/teal box */}
      <img
        src={doctorImage}
        alt="Healthcare doctor standing with arms crossed"
        className="absolute bottom-[-0.45rem] left-[-8%] z-20 h-[100%] w-auto max-w-none object-contain object-bottom drop-shadow-[0_28px_55px_rgba(15,23,42,0.14)]"
      />

      {/* fade only under the doctor, outside visual cards */}
      <div className="absolute bottom-0 left-[-10%] z-[21] h-[13%] w-[52%] bg-gradient-to-t from-white via-white/74 to-transparent" />

      {/* top overview card - separate on right */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[3.2rem] top-[6.05rem] z-30 w-[420px] rounded-[30px] bg-white p-7 shadow-[0_24px_50px_rgba(0,0,0,0.10)]"
      >
        <h3 className="text-[23px] font-black leading-none text-[#071b4c]">
          Today&apos;s Overview
        </h3>

        <div className="mt-6 grid grid-cols-2 overflow-hidden rounded-[22px] border border-[#e3e9f2]">
          {[
            {
              label: "Patients",
              value: "2,453",
              change: "▲ 12.5% vs yesterday",
            },
            {
              label: "Appointments",
              value: "327",
              change: "▲ 8.4% vs yesterday",
            },
            {
              label: "Follow Ups",
              value: "96",
              change: "▲ 15.7% vs yesterday",
            },
            {
              label: "New Inquiries",
              value: "178",
              change: "▲ 10.1% vs yesterday",
            },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className={`min-h-[145px] p-5 ${
                index % 2 === 0 ? "border-r border-[#e3e9f2]" : ""
              } ${index < 2 ? "border-b border-[#e3e9f2]" : ""}`}
            >
              <div className="text-[15px] font-bold text-[#64748b]">
                {stat.label}
              </div>
              <div className="mt-3 text-[36px] font-black leading-none text-[#071b4c]">
                {stat.value}
              </div>
              <div className="mt-4 whitespace-nowrap text-[13px] font-extrabold text-[#0aa36c]">
                {stat.change}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* bottom appointment card - separate on right */}
      <motion.div
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[5.6rem] right-[2.9rem] z-30 w-[440px] rounded-[30px] bg-white p-7 shadow-[0_24px_50px_rgba(0,0,0,0.10)]"
      >
        <div className="text-[17px] font-bold text-[#64748b]">
          Next Appointment
        </div>

        <div className="mt-6 flex items-center gap-4">
          <div className="flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-full bg-[#e7f8f6]">
            <img
              src="/images/consultant.jpg"
              alt="Patient"
              className="h-[54px] w-[54px] rounded-full object-cover"
            />
          </div>

          <div className="min-w-0 flex-1">
            <div className="text-[22px] font-black leading-tight text-[#071b4c]">
              John Doe
            </div>
            <div className="mt-1 text-[15px] font-medium text-[#5d7296]">
              General Consultation
            </div>
            <div className="mt-2 text-[14px] font-medium text-[#5d7296]">
              10:30 AM <span className="mx-1" aria-hidden="true">&middot;</span> Dr. Sarah Wilson
            </div>
          </div>

          <div className="rounded-full bg-[#e5f7ef] px-4 py-2.5 text-[14px] font-extrabold text-[#0a9f67]">
            Confirmed
          </div>
        </div>
      </motion.div>
    </div>
  );
}


function DashboardMetric({ label, value, delta }: { label: string; value: string; delta: string }) {
  return (
    <div className="rounded-2xl border border-[#e6edf7] bg-white p-4 shadow-sm">
      <p className="text-xs font-bold text-[#65718c]">{label}</p>
      <p className="mt-2 text-2xl font-black text-[#081633]">{value}</p>
      <p className="mt-1 text-[11px] font-bold text-emerald-600">{delta}</p>
    </div>
  );
}

function DashboardSection() {
  return (
    <section className="bg-[#f3f7fb] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[min(95vw,1600px)]">
        <Reveal>
          <div className="rounded-[34px] border border-[#dce7f7] bg-white p-5 shadow-[0_26px_90px_rgba(15,23,42,0.08)]">
            <h2 className="mb-6 text-center text-2xl font-black tracking-[-0.02em] text-[#081633]">
              All-in-One Healthcare Dashboard
            </h2>

            <div className="overflow-hidden rounded-[28px] border border-[#e5edf8] bg-white">
              <div className="grid lg:grid-cols-[170px_1fr]">
                <aside className="hidden border-r border-[#e5edf8] bg-[#fbfdff] p-5 lg:block">
                  <p className="mb-6 text-sm font-black text-[#078477]">HNX CRM Systems</p>

                  {["Dashboard", "Patients", "Appointments", "Calendar", "Follow Ups", "Communications", "Staff", "Reports", "Analytics", "Settings"].map(
                    (item, index) => (
                      <div
                        key={item}
                        className={`mb-1.5 rounded-xl px-3 py-2 text-xs font-bold ${
                          index === 0 ? "bg-[#e6f7f5] text-[#078477]" : "text-[#65718c]"
                        }`}
                      >
                        {item}
                      </div>
                    )
                  )}
                </aside>

                <div className="p-4 sm:p-6">
                  <div className="mb-5 flex items-center justify-between">
                    <p className="text-lg font-black text-[#081633]">Dashboard</p>
                    <div className="flex items-center gap-3">
                      <span className="hidden rounded-full border border-[#e5edf8] px-3 py-2 text-xs font-bold text-[#65718c] sm:block">
                        May 20 – May 26, 2025
                      </span>
                      <span className="grid h-9 w-9 place-items-center rounded-full bg-[#f1f7ff] text-[#145cb7]">
                        <Users className="h-4 w-4" />
                      </span>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    {metrics.map((item) => (
                      <DashboardMetric key={item.label} {...item} />
                    ))}
                  </div>

                  <div className="mt-5 grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
                    <div className="rounded-2xl border border-[#e5edf8] bg-white p-5 shadow-sm">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-black text-[#081633]">Appointments Overview</p>
                        <div className="flex items-center gap-3 text-[11px] font-bold text-[#65718c]">
                          <span className="flex items-center gap-1">
                            <span className="h-2 w-2 rounded-full bg-[#145cb7]" />
                            Scheduled
                          </span>
                          <span className="flex items-center gap-1">
                            <span className="h-2 w-2 rounded-full bg-[#19b7c5]" />
                            Completed
                          </span>
                        </div>
                      </div>

                      <div className="mt-4 h-56 rounded-2xl bg-gradient-to-b from-[#f8fbff] to-white p-4">
                        <svg viewBox="0 0 440 190" className="h-full w-full">
                          {[35, 75, 115, 155].map((y) => (
                            <line key={y} x1="0" x2="440" y1={y} y2={y} stroke="#e5edf8" strokeWidth="1" />
                          ))}
                          <path
                            d="M18 142 C52 86, 80 112, 112 76 C148 28, 178 118, 214 84 C248 46, 284 65, 318 42 C354 18, 390 86, 420 62"
                            fill="none"
                            stroke="#145cb7"
                            strokeLinecap="round"
                            strokeWidth="4"
                          />
                          <path
                            d="M18 150 C52 114, 80 128, 112 98 C148 62, 178 137, 214 104 C248 72, 284 92, 318 67 C354 44, 390 106, 420 82"
                            fill="none"
                            stroke="#19b7c5"
                            strokeLinecap="round"
                            strokeWidth="3"
                          />
                        </svg>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-[#e5edf8] bg-white p-5 shadow-sm">
                      <p className="text-sm font-black text-[#081633]">Top Appointment Sources</p>
                      <div className="mt-5 grid place-items-center">
                        <div className="relative grid h-36 w-36 place-items-center rounded-full bg-[conic-gradient(#145cb7_0_35%,#19b7c5_35%_63%,#60a5fa_63%_83%,#f59e0b_83%_95%,#e5edf8_95%_100%)]">
                          <div className="grid h-20 w-20 place-items-center rounded-full bg-white text-center shadow-inner">
                            <div>
                              <p className="text-xl font-black text-[#081633]">2,453</p>
                              <p className="text-[10px] font-bold text-[#65718c]">Total</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-5 space-y-2 text-xs font-bold text-[#65718c]">
                        {["Website 35%", "Google 28%", "Referral 20%", "Walk-in 12%", "Others 5%"].map((source) => (
                          <div key={source} className="flex items-center justify-between">
                            <span>{source}</span>
                            <span className="h-2 w-8 rounded-full bg-[#145cb7]" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
                    <div className="rounded-2xl border border-[#e5edf8] bg-white p-5 shadow-sm">
                      <div className="mb-3 flex items-center justify-between">
                        <p className="text-sm font-black text-[#081633]">Recent Appointments</p>
                        <span className="text-xs font-black text-[#145cb7]">View all</span>
                      </div>

                      <div className="overflow-x-auto">
                        <table className="w-full min-w-[620px] text-left text-xs">
                          <tbody>
                            {appointmentRows.map(([patient, type, time, status]) => (
                              <tr key={`${patient}-${time}`} className="border-b border-[#eef3fa] last:border-0">
                                <td className="py-2 font-bold text-[#081633]">{patient}</td>
                                <td className="py-2 text-[#65718c]">{type}</td>
                                <td className="py-2 text-[#65718c]">{time}</td>
                                <td className="py-2">
                                  <span
                                    className={`rounded-full px-2 py-1 text-[10px] font-black ${
                                      status === "Confirmed"
                                        ? "bg-emerald-50 text-emerald-700"
                                        : "bg-amber-50 text-amber-700"
                                    }`}
                                  >
                                    {status}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-[#e5edf8] bg-white p-5 shadow-sm">
                      <p className="text-sm font-black text-[#081633]">Tasks & Follow Ups</p>
                      <div className="mt-4 space-y-3">
                        {taskRows.map(([task, due]) => (
                          <div key={task} className="flex items-start justify-between gap-3">
                            <p className="text-xs font-bold text-[#334766]">{task}</p>
                            <p className="text-[10px] font-bold text-[#65718c]">{due}</p>
                          </div>
                        ))}
                      </div>
                      <p className="mt-4 text-xs font-black text-[#145cb7]">View all tasks</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function PatientJourney() {
  return (
    <section className="bg-gradient-to-br from-[#effcff] to-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[min(95vw,1600px)]">
        <Reveal>
          <div className="text-center">
            <h2 className="text-3xl font-black tracking-[-0.03em] text-[#081633]">
              Patient Journey — Simplified & Automated
            </h2>
            <p className="mt-2 text-[#465374]">From inquiry to loyal patient — we manage the entire journey</p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-5">
          {patientJourney.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 0.05}>
                <div className="relative h-full text-center">
                  <div className="rounded-[30px] border border-[#dce7f7] bg-white p-6 shadow-sm">
                    <span className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-[#dce7f7] bg-white text-[#0f9f91] shadow-sm">
                      <Icon className="h-7 w-7" />
                    </span>
                    <h3 className="mt-5 text-sm font-black text-[#081633]">{item.title}</h3>
                    <p className="mt-2 text-xs leading-5 text-[#65718c]">{item.text}</p>
                  </div>

                  {index < patientJourney.length - 1 ? (
                    <ArrowRight className="absolute right-[-1.6rem] top-[4.8rem] hidden h-6 w-6 text-[#0f9f91] lg:block" />
                  ) : null}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PhoneFeatureBlock() {
  return (
    <section className="bg-[#f8fbff] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-[min(95vw,1600px)] items-center gap-8 lg:grid-cols-[0.95fr_0.55fr_0.95fr]">
        <Reveal>
          <div className="rounded-[30px] border border-[#dce7f7] bg-white p-7 shadow-[0_20px_70px_rgba(15,23,42,0.065)]">
            <h2 className="text-center text-lg font-black text-[#081633]">Powerful Features for</h2>
            <p className="mb-6 text-center text-sm font-bold text-[#65718c]">Modern Healthcare</p>

            <div className="space-y-3">
              {leftFeatures.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#0f9f91]" />
                  <span className="text-sm font-bold text-[#334766]">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="mx-auto w-full max-w-[230px] rounded-[2.2rem] border-[10px] border-[#081633] bg-[#081633] p-2 shadow-[0_24px_80px_rgba(15,23,42,0.20)]">
            <div className="overflow-hidden rounded-[1.5rem] bg-white">
              <div className="bg-[#06324d] px-4 py-3 text-white">
                <p className="text-xs font-black">Patient Profile</p>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-[#e9fbfb] text-[#0f9f91]">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-black text-[#081633]">John Doe</p>
                    <p className="text-[10px] text-[#65718c]">Male · 34 yrs</p>
                  </div>
                </div>

                <div className="mt-5 space-y-2">
                  {["Allergies", "Prescription", "Conditions", "Last Visit", "Next Appointment"].map((item) => (
                    <div key={item} className="rounded-xl bg-[#f8fbff] px-3 py-2">
                      <p className="text-[10px] font-bold text-[#65718c]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="rounded-[30px] border border-[#dce7f7] bg-white p-7 shadow-[0_20px_70px_rgba(15,23,42,0.065)]">
            <div className="space-y-3">
              {rightFeatures.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#0f9f91]" />
                  <span className="text-sm font-bold text-[#334766]">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}


function DoctorUseCasesSection() {
  return (
    <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[min(95vw,1600px)]">
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-black tracking-[-0.03em] text-[#081633]">
              More Than Patient Records — Built for Doctors & Operations
            </h2>
            <p className="mt-3 text-lg leading-8 text-[#465374]">
              This CRM is not just for patient records. Doctors, staff, and operations teams can manage appointments,
              daily routines, internal meetings, follow-ups, task planning, communication, and AI-assisted work from one dashboard — even on mobile devices.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {doctorUseCases.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 0.04}>
                <div className="h-full rounded-[28px] border border-[#dce7f7] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.055)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.10)]">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[#e9fbfb] text-[#0f9f91] shadow-sm">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-xl font-black text-[#081633]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#5b6b87]">{item.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}


function PricingCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % plans.length);
    }, 3200);

    return () => window.clearInterval(timer);
  }, []);

  const visiblePlans = useMemo(
    () => [0, 1, 2].map((offset) => plans[(activeIndex + offset) % plans.length]),
    [activeIndex]
  );

  return (
    <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[min(95vw,1600px)]">
        <Reveal>
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-xl leading-[1.45] text-[#3f5379] sm:text-2xl lg:text-[1.9rem]">
              Every build is scoped after understanding your modules, fields, permissions,
              reports, integrations, workflow rules, and AI requirements.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-10 overflow-hidden rounded-[34px]">
            <motion.div
              key={activeIndex}
              initial={{ x: 80, opacity: 0.75 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="grid gap-6 lg:grid-cols-3"
            >
              {visiblePlans.map((plan, index) => (
                <div
                  key={`${plan.name}-${activeIndex}-${index}`}
                  className={`min-h-[430px] rounded-[34px] border p-7 shadow-[0_20px_70px_rgba(15,23,42,0.07)] ${
                    plan.popular
                      ? "border-[#b8ebff] bg-gradient-to-br from-[#eefdff] via-[#f6fdff] to-white ring-2 ring-[#b8ebff]"
                      : "border-[#dce7f7] bg-white"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-3xl font-black leading-tight text-[#081633]">{plan.name}</h3>
                      <p className="mt-4 min-h-[84px] text-base leading-7 text-[#445676]">{plan.desc}</p>
                    </div>

                    {plan.popular ? (
                      <span className="shrink-0 rounded-full bg-[#dff7ff] px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-[#15a8d4]">
                        Most Popular
                      </span>
                    ) : null}
                  </div>

                  <div className="mt-5 rounded-2xl border border-[#e3eaf4] bg-white/80 p-5">
                    <p className="text-xs font-black uppercase tracking-[0.24em] text-[#65718c]">Package Price</p>
                    <p className="mt-3 text-4xl font-black text-[#10a8c6]">{plan.price}</p>
                    <p className="mt-2 text-sm font-bold text-[#65718c]">{plan.note}</p>
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#0f9f91]" />
                        <span className="text-[0.95rem] leading-6 text-[#334766]">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </Reveal>

        <div className="mt-6 flex justify-center gap-2">
          {plans.map((plan, index) => (
            <button
              key={plan.name}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Show ${plan.name}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === index ? "w-10 bg-[#0f9f91]" : "w-2.5 bg-[#c9d8ea]"
              }`}
            />
          ))}
        </div>

        <Reveal>
          <div className="mt-8 rounded-[24px] border border-[#dce7f7] bg-[#f8fbff] px-6 py-5 text-center">
            <p className="text-base font-black text-[#081633]">
              Note: Workflow add-ons, advanced automation flows, and custom integration charges are extra and are scoped separately.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function HealthcareCRMContent() {
  return (
    <main className="overflow-hidden bg-[#f8fbff] text-[#081633]">
      <section className="relative border-b border-[#e5edf8] bg-gradient-to-br from-white via-[#fbfdff] to-[#eefbff] px-4 pb-0 pt-28 sm:px-6 lg:px-8 lg:pt-32">
        <div className="mx-auto grid max-w-[1660px] gap-8 lg:grid-cols-[0.96fr_1.04fr] lg:items-start xl:gap-10">
          <Reveal>
            <div className="relative z-20 pb-12 pt-2 lg:pb-14 lg:pt-8">
              <div className="inline-flex items-center gap-3 rounded-full bg-[#e0f8f5] px-5 py-3 text-base font-black uppercase text-[#0b9a8d]">
                <ShieldCheck className="h-4 w-4" />
                Healthcare CRM
              </div>

              <h1 className="mt-7 max-w-[820px] text-4xl font-black leading-[1.06] text-[#071633] sm:text-5xl lg:text-[3.75rem] xl:text-[4.1rem]">
                <span className="block">Healthcare CRM</span>
                <span className="block">Built for Better Care</span>
                <span className="block">&amp; Stronger Growth</span>
              </h1>

              <p className="mt-8 max-w-[760px] text-lg leading-9 text-[#334766] lg:text-[1.18rem] lg:leading-[2.2rem]">
                Manage patients, appointments, staff, communications, follow-ups and reports in one smart CRM.
                Automate workflows and deliver a seamless patient experience.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button href="/contact" size="lg" className="!h-[64px] !bg-[#109f91] !px-8 !text-[1.12rem] !text-white hover:!bg-[#0c887d]">
                  Book a Demo
                </Button>
                <Button href="/crm-demo" variant="secondary" size="lg" className="!h-[64px] !border-[#dce7f7] !bg-white !px-8 !text-[1.05rem] !text-[#081633]">
                  <Play className="mr-1 h-5 w-5" />
                  See it in Action
                </Button>
              </div>

              <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:w-[760px] lg:grid-cols-4">
                {trustBadges.map((badge) => {
                  const Icon = badge.icon;
                  return (
                    <div key={badge.label} className="flex items-center gap-3">
                      <span className="grid h-[60px] w-12 shrink-0 place-items-center rounded-[18px] bg-white text-[#0874e6] shadow-sm ring-1 ring-[#dce7f7]">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-base font-black leading-tight text-[#081633]">{badge.label}</p>
                        <p className="mt-1 text-sm font-bold leading-tight text-[#65718c]">{badge.sub}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>

          <Reveal>
            <HeroVisual />
          </Reveal>
        </div>
      </section>

      <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[min(95vw,1600px)]">
          <Reveal>
            <div className="rounded-[34px] bg-gradient-to-br from-[#06142f] to-[#075e61] p-8 text-white shadow-[0_24px_80px_rgba(15,23,42,0.12)]">
              <div className="text-center">
                <h2 className="text-2xl font-black">Why Healthcare Teams Choose HNX CRM Systems</h2>
                <p className="mt-2 text-sm text-[#d8fbff]">Designed to simplify processes and improve patient care</p>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
                {whyCards.map((card) => {
                  const Icon = card.icon;
                  return (
                    <div key={card.title} className="rounded-3xl bg-white/10 p-5 text-center ring-1 ring-white/10 backdrop-blur">
                      <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-white text-[#0f9f91]">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h3 className="mt-4 text-sm font-black">{card.title}</h3>
                      <p className="mt-2 text-xs leading-5 text-[#d8fbff]">{card.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white px-4 pb-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[min(95vw,1600px)]">
          <Reveal>
            <h2 className="text-center text-2xl font-black text-[#081633]">Built for Every Healthcare Specialty</h2>
          </Reveal>

          <Reveal>
            <div className="relative mt-8 overflow-hidden rounded-[28px]">
              <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
              <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />

              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
                className="flex w-max gap-5"
              >
                {[...specialtyCards, ...specialtyCards].map((card, index) => {
                  const Icon = card.icon;
                  return (
                    <div
                      key={`${card.title}-${index}`}
                      className="w-[280px] shrink-0 overflow-hidden rounded-[24px] border border-[#dce7f7] bg-white shadow-[0_18px_55px_rgba(15,23,42,0.055)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.10)] sm:w-[320px]"
                    >
                      <div className="relative h-28 bg-cover bg-center" style={{ backgroundImage: `url(${card.image})` }}>
                        <span className="absolute bottom-[-1.1rem] left-5 grid h-11 w-11 place-items-center rounded-2xl border border-[#dce7f7] bg-[#e9fbfb] text-[#0f9f91] shadow-sm">
                          <Icon className="h-5 w-5" />
                        </span>
                      </div>
                      <div className="px-5 pb-5 pt-7">
                        <h3 className="text-[1.12rem] font-black text-[#081633]">{card.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-[#65718c]">{card.text}</p>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </Reveal>
        </div>
      </section>

      <DashboardSection />
      <PatientJourney />
      <PhoneFeatureBlock />
      <DoctorUseCasesSection />

      <PricingCarousel />



      <section className="bg-[#f8fbff] px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[min(95vw,1600px)]">
          <Reveal>
            <h2 className="text-center text-3xl font-black text-[#081633]">Seamless Integrations</h2>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-9">
            {integrations.map((integration) => {
              const Icon = integration.icon;
              return (
                <Reveal key={integration.name}>
                  <div className="rounded-2xl border border-[#dce7f7] bg-white p-5 text-center shadow-sm">
                    <Icon className="mx-auto h-7 w-7 text-[#145cb7]" />
                    <p className="mt-3 text-sm font-black text-[#081633]">{integration.name}</p>
                    <p className="text-xs text-[#65718c]">{integration.sub}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

export default function HealtcareCRM() {
  return (
    <>
      <HealthcareCRMContent />
    </>
  );
}
