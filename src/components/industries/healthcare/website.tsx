"use client";

import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
import HealthcareDemoModal, {
  type HealthcareDemo,
} from "./HealthcareDemoModal";
import {
  Activity,
  ArrowRight,
  BarChart3,
  Building2,
  CalendarCheck,
  CheckCircle2,
  ClipboardList,
  HeartPulse,
  Hospital,
  LockKeyhole,
  MessageSquareText,
  MonitorSmartphone,
  Pill,
  Search,
  ShieldCheck,
  Smartphone,
  Star,
  Stethoscope,
  TrendingUp,
  UserRound,
} from "lucide-react";

const heroImageUrl =
  "https://images.pexels.com/photos/5452291/pexels-photo-5452291.jpeg?auto=compress&cs=tinysrgb&w=1400";

const hospitalImageUrl =
  "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=900";

const clinicImageUrl =
  "https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=900";

const pharmaImageUrl =
  "https://images.pexels.com/photos/3683098/pexels-photo-3683098.jpeg?auto=compress&cs=tinysrgb&w=900";

const dentalImageUrl =
  "https://images.pexels.com/photos/6812561/pexels-photo-6812561.jpeg?auto=compress&cs=tinysrgb&w=900";

const diagnosticImageUrl =
  "https://images.pexels.com/photos/8325710/pexels-photo-8325710.jpeg?auto=compress&cs=tinysrgb&w=900";

const physiotherapyImageUrl =
  "https://images.pexels.com/photos/4506109/pexels-photo-4506109.jpeg?auto=compress&cs=tinysrgb&w=900";

const wellnessImageUrl =
  "https://images.pexels.com/photos/3757954/pexels-photo-3757954.jpeg?auto=compress&cs=tinysrgb&w=900";

const dermatologyImageUrl =
  "https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg?auto=compress&cs=tinysrgb&w=900";

const eyeCareImageUrl =
  "https://images.pexels.com/photos/5752242/pexels-photo-5752242.jpeg?auto=compress&cs=tinysrgb&w=900";

const heroChips = [
  { label: "Patient First Experience", icon: UserRound },
  { label: "Mobile Optimized", icon: Smartphone },
  { label: "SEO Ready", icon: Search },
  { label: "HIPAA Aware", icon: ShieldCheck },
];

const problems = [
  {
    title: "Low Online Trust",
    description: "Outdated websites make patients doubt the quality of care.",
    icon: ShieldCheck,
    tone: "emerald",
  },
  {
    title: "No Appointment Flow",
    description: "Visitors leave without booking because there is no clear flow.",
    icon: CalendarCheck,
    tone: "rose",
  },
  {
    title: "Poor Visibility",
    description: "Hard for patients to find your services, doctors, or specialties.",
    icon: Search,
    tone: "blue",
  },
  {
    title: "Not Mobile Friendly",
    description: "Poor mobile experience leads to lost patients and inquiries.",
    icon: MonitorSmartphone,
    tone: "violet",
  },
];

const includes = [
  {
    title: "Service Pages",
    description: "Well-designed service pages that explain treatments clearly.",
    icon: ClipboardList,
  },
  {
    title: "Doctor Profiles",
    description: "Build trust with detailed doctor profiles and expertise.",
    icon: Stethoscope,
  },
  {
    title: "Appointment Booking",
    description: "Easy online booking system for more confirmed appointments.",
    icon: CalendarCheck,
  },
  {
    title: "Patient Forms",
    description: "Custom forms for inquiries, appointments, and consultations.",
    icon: MessageSquareText,
  },
  {
    title: "SEO & Speed",
    description: "SEO-optimized structure for better ranking and faster performance.",
    icon: Search,
  },
  {
    title: "Analytics Setup",
    description: "Built-in analytics to track visitors, conversions, and patient behavior.",
    icon: BarChart3,
  },
];

const modules = [
  {
    title: "Hospitals",
    icon: Hospital,
    image: hospitalImageUrl,
    points: [
      "Department Pages",
      "Doctor Directory",
      "Emergency Contact",
      "Pre-Registration",
    ],
  },
  {
    title: "Clinics",
    icon: Stethoscope,
    image: clinicImageUrl,
    points: [
      "Slot Booking",
      "Treatment Pages",
      "WhatsApp Forms",
      "Follow-up Requests",
    ],
  },
  {
    title: "Pharmaceuticals",
    icon: Pill,
    image: pharmaImageUrl,
    points: [
      "Medicine Catalog",
      "Distributor Forms",
      "Compliance Pages",
      "B2B Lead Capture",
    ],
  },
  {
    title: "Dental Clinics",
    icon: Stethoscope,
    image: dentalImageUrl,
    points: [
      "Treatment Pages",
      "Smile Gallery",
      "Appointment Booking",
      "Review Blocks",
    ],
  },
  {
    title: "Diagnostic Labs",
    icon: ClipboardList,
    image: diagnosticImageUrl,
    points: [
      "Test Catalog",
      "Sample Booking",
      "Report Inquiry",
      "Package Pages",
    ],
  },
  {
    title: "Physiotherapy",
    icon: Activity,
    image: physiotherapyImageUrl,
    points: [
      "Session Booking",
      "Recovery Programs",
      "Progress Forms",
      "Follow-up Reminders",
    ],
  },
  {
    title: "Wellness Centers",
    icon: HeartPulse,
    image: wellnessImageUrl,
    points: [
      "Program Pages",
      "Membership Inquiry",
      "Client Forms",
      "Offer Pages",
    ],
  },
  {
    title: "Dermatology",
    icon: ShieldCheck,
    image: dermatologyImageUrl,
    points: [
      "Treatment Pages",
      "Before/After Gallery",
      "Consultation Booking",
      "Safety Content",
    ],
  },
  {
    title: "Eye Care Centers",
    icon: Search,
    image: eyeCareImageUrl,
    points: [
      "Specialist Pages",
      "Eye Test Booking",
      "Surgery Info",
      "Patient Education",
    ],
  },
];

const healthcareDemos = [
  {
    title: "Hospitals & Clinics",
    subtitle: "Multi-specialty hospitals, clinics & health centers.",
    brand: "CurePoint",
    headline: "Compassionate Care for a Healthier You",
    image: hospitalImageUrl,
    icon: HeartPulse,
    accent: "emerald",
    stats: ["15+", "20K+", "50+", "24/7"],
    chips: [
      "Doctor Profiles",
      "Departments",
      "Appointment Booking",
      "Emergency Services",
    ],
  },
  {
    title: "Diagnostic Centers",
    subtitle: "Pathology labs, imaging centers & diagnostic services.",
    brand: "DiagnoLab",
    headline: "Accurate Tests, Reliable Results",
    image: diagnosticImageUrl,
    icon: ClipboardList,
    accent: "violet",
    stats: ["48", "Home", "Fast", "Online"],
    chips: ["Test Catalog", "Online Reports", "Home Collection", "Lab Locator"],
  },
  {
    title: "Pharmacies & Pharma",
    subtitle: "Pharmacy stores, pharma companies & medicine brands.",
    brand: "MediStore",
    headline: "Your Health, Our Priority",
    image: pharmaImageUrl,
    icon: Pill,
    accent: "emerald",
    stats: ["Rx", "B2B", "Fast", "Safe"],
    chips: ["Medicine Search", "Prescription Upload", "Offers", "Order Tracking"],
  },
  {
    title: "Dental Clinics",
    subtitle: "Dental care clinics, implant centers & oral care services.",
    brand: "SmileCare",
    headline: "Healthy Smile, Happy Life",
    image: dentalImageUrl,
    icon: ShieldCheck,
    accent: "blue",
    stats: ["10+", "5K+", "15+", "8+"],
    chips: ["Treatments", "Before & After", "Doctor Profiles", "Booking System"],
  },
  {
    title: "Eye Care Centers",
    subtitle: "Eye hospitals, vision centers & eye care specialists.",
    brand: "VisionCare",
    headline: "Clear Vision, Better Life",
    image: eyeCareImageUrl,
    icon: Search,
    accent: "violet",
    stats: ["Eye", "Lens", "Care", "Tech"],
    chips: ["Eye Treatments", "Surgeries", "Doctor Profiles", "Book Appointment"],
  },
  {
    title: "Mental Health Centers",
    subtitle: "Therapy centers, counseling & mental wellness services.",
    brand: "MindWellness",
    headline: "Better Mental Health, Better Life",
    image: wellnessImageUrl,
    icon: HeartPulse,
    accent: "teal",
    stats: ["Care", "Trust", "Safe", "Online"],
    chips: [
      "Therapy Services",
      "Therapist Profiles",
      "Session Booking",
      "Wellness Programs",
    ],
  },
  {
    title: "Fitness & Wellness",
    subtitle: "Gyms, wellness centers, yoga & nutrition coaches.",
    brand: "FitLife",
    headline: "Stronger Body, Better You",
    image: physiotherapyImageUrl,
    icon: Activity,
    accent: "orange",
    stats: ["Plans", "Coach", "Track", "Grow"],
    chips: ["Workout Programs", "Trainer Profiles", "Membership Plans", "Booking System"],
  },
  {
    title: "Rehabilitation Centers",
    subtitle: "Physiotherapy, rehab & recovery centers.",
    brand: "RehabCare",
    headline: "Recovery Today, Stronger Tomorrow",
    image: dermatologyImageUrl,
    icon: Stethoscope,
    accent: "rose",
    stats: ["Rehab", "Care", "Plan", "Track"],
    chips: ["Therapy Services", "Specialists", "Booking System", "Treatment Plans"],
  },
];

type HealthcareDemoCardItem = (typeof healthcareDemos)[number];

const whyChoose = [
  {
    title: "Healthcare Focused",
    description: "We understand patient journeys and healthcare business needs.",
    icon: Hospital,
  },
  {
    title: "Conversion Driven",
    description: "We design websites that turn visitors into booked appointments.",
    icon: TrendingUp,
  },
  {
    title: "Secure & Compliant",
    description: "We follow best practices for security and patient data protection.",
    icon: ShieldCheck,
  },
  {
    title: "Ongoing Support",
    description: "We provide continuous support, updates, and performance care.",
    icon: UserRound,
  },
];

const pricingPlans = [
  {
    name: "Clinic Starter",
    subtitle: "Best for smaller clinics and individual practices",
    price: "₹25,000",
    icon: Stethoscope,
    features: [
      "Up to 10 Pages",
      "Appointment Booking",
      "Mobile Responsive",
      "Basic SEO Setup",
      "Email Support",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Healthcare Growth",
    subtitle: "Best for growing clinics and multi-specialty providers",
    price: "₹50,000",
    icon: TrendingUp,
    features: [
      "Up to 25 Pages",
      "Advanced Booking & Forms",
      "SEO & Speed Optimization",
      "Analytics & Conversion Tracking",
      "Priority Support",
    ],
    cta: "Book Consultation",
    popular: true,
  },
  {
    name: "Enterprise Healthcare",
    subtitle: "Best for hospitals, groups, and larger healthcare systems",
    price: "₹1,00,000+",
    icon: ShieldCheck,
    features: [
      "Unlimited Pages",
      "Custom Integrations",
      "Multi-Location Support",
      "Advanced Security Structure",
      "Dedicated Account Manager",
    ],
    cta: "Get Custom Quote",
    popular: false,
  },
];

const testimonials = [
  {
    quote:
      "Our new website brought more patients and simplified our appointment process.",
    name: "Dr. Aditi Sharma",
    role: "Dental Care Clinic",
  },
  {
    quote:
      "Professional, fast and patient-friendly. We saw results within weeks.",
    name: "Dr. Rahul Mehta",
    role: "CityCare Hospital",
  },
  {
    quote:
      "The HNX team understood our requirements perfectly and delivered beyond expectations.",
    name: "Novakos Healthcare",
    role: "Pharmaceutical Company",
  },
];

const trustedProviders = [
  {
    name: "CityCare Hospitals",
    type: "Multi-specialty care",
    image: hospitalImageUrl,
  },
  {
    name: "LifePlus Clinics",
    type: "Clinic network",
    image: clinicImageUrl,
  },
  {
    name: "Wellness Hospitals",
    type: "Preventive care",
    image: wellnessImageUrl,
  },
  {
    name: "MediCare Group",
    type: "Healthcare group",
    image: heroImageUrl,
  },
  {
    name: "Novakos Healthcare",
    type: "Pharma business",
    image: pharmaImageUrl,
  },
  {
    name: "DentalCare Plus",
    type: "Dental clinic",
    image: dentalImageUrl,
  },
  {
    name: "Prime Diagnostics",
    type: "Diagnostic lab",
    image: diagnosticImageUrl,
  },
  {
    name: "RecoverWell Physio",
    type: "Physiotherapy",
    image: physiotherapyImageUrl,
  },
];

const compliance = [
  {
    title: "HIPAA Aware Structure",
    icon: ShieldCheck,
  },
  {
    title: "SSL Secured",
    icon: LockKeyhole,
  },
  {
    title: "Data Privacy Focused",
    icon: ClipboardList,
  },
  {
    title: "Regular Backups",
    icon: Building2,
  },
  {
    title: "Secure Hosting",
    icon: Hospital,
  },
];

export default function HealthcareWebsitePreview() {
  const [activeDemo, setActiveDemo] = useState<HealthcareDemo | null>(null);

  return (
    <main className="relative overflow-hidden bg-[#f8fbff] text-slate-950 dark:bg-[#050814] dark:text-white">
      <div className="pointer-events-none absolute left-0 top-0 h-[34rem] w-[34rem] rounded-full bg-blue-200/35 blur-3xl dark:bg-blue-500/10" />
      <div className="pointer-events-none absolute right-0 top-20 h-[30rem] w-[30rem] rounded-full bg-violet-200/35 blur-3xl dark:bg-violet-500/10" />

      <section className="relative px-5 pb-20 pt-24 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <div className="mx-auto w-full max-w-[min(92vw,1440px)]">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white/90 shadow-[0_28px_90px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.05]">
            <HeroSection />

            <div className="grid border-t border-slate-200 dark:border-white/10 xl:grid-cols-[1.05fr_0.95fr]">
              <ProblemsSection />
              <IncludesSection />
            </div>

            <IndustryModulesSection />
            <TrustedProvidersSection />

            <HealthcareWebsiteDemosSection
              onOpenDemo={(demo) => setActiveDemo(demo)}
            />

            <WhyChooseAndCTASection />
            <PricingSection />
            <TestimonialsSection />
            <ComplianceSection />
          </div>
        </div>
      </section>

      {activeDemo ? (
        <HealthcareDemoModal
          demo={activeDemo}
          onClose={() => setActiveDemo(null)}
        />
      ) : null}

      <MarqueeStyles />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden px-7 py-1 sm:px-10 lg:px-12 xl:px-14">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(59,130,246,0.12),transparent_28%),radial-gradient(circle_at_78%_16%,rgba(124,58,237,0.10),transparent_28%)]" />

      <div className="relative grid items-center gap-10 xl:grid-cols-[0.78fr_1.22fr]">
        <div>
          <Badge>
            <Hospital className="h-4 w-4" />
            Healthcare Website Solutions
          </Badge>

          <h1 className="mt-7 max-w-2xl text-[clamp(2.5rem,4.6vw,3.1rem)] font-black leading-[1.04] tracking-[-0.055em] text-slate-950 dark:text-white">
            Modern Healthcare Websites That Build Trust{" "}
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              & Get More Appointments
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-8 text-slate-600 dark:text-slate-300">
            We design high-converting, patient-focused healthcare websites that
            establish trust and turn visitors into appointments.
          </p>

          <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {heroChips.map((chip) => {
              const Icon = chip.icon;

              return (
                <div
                  key={chip.label}
                  className="rounded-2xl border border-slate-200 bg-white/85 p-3 shadow-sm dark:border-white/10 dark:bg-white/[0.06]"
                >
                  <Icon className="mb-2 h-5 w-5 text-blue-600 dark:text-blue-300" />
                  <p className="text-xs font-bold leading-4 text-slate-700 dark:text-slate-300">
                    {chip.label}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-7 py-4 text-sm font-black text-white shadow-[0_18px_50px_rgba(37,99,235,0.25)] transition hover:-translate-y-0.5"
            >
              Build My Website
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="#healthcare-website-demos"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-7 py-4 text-sm font-black text-blue-700 shadow-sm transition hover:-translate-y-0.5 dark:border-white/10 dark:bg-white/[0.06] dark:text-blue-300"
            >
              View Live Demo
            </Link>
          </div>
        </div>

        <HealthcareWebsiteMockup />
      </div>
    </section>
  );
}

function HealthcareWebsiteMockup() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute -left-10 top-10 h-40 w-40 rounded-full bg-blue-300/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-8 bottom-10 h-48 w-48 rounded-full bg-violet-300/30 blur-3xl" />

      <div className="absolute -right-3 bottom-6 z-30 hidden w-[185px] overflow-hidden rounded-[1.6rem] border-[7px] border-slate-950 bg-white p-2 shadow-[0_24px_70px_rgba(15,23,42,0.20)] dark:border-slate-800 lg:block">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-[10px] font-black text-blue-700">CurePoint</span>
          <span className="h-1.5 w-8 rounded-full bg-slate-300" />
        </div>

        <div
          className="h-24 rounded-xl bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImageUrl})` }}
        />

        <div className="mt-3 space-y-2">
          <p className="text-sm font-black leading-tight text-slate-950">
            Your Health. Our Priority.
          </p>
          <div className="h-8 rounded-lg bg-blue-600" />
          <div className="grid grid-cols-2 gap-2">
            <div className="h-9 rounded-lg bg-slate-100" />
            <div className="h-9 rounded-lg bg-slate-100" />
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-3 shadow-[0_28px_90px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-white/[0.06]">
        <div className="overflow-hidden rounded-[1.5rem] bg-slate-50 dark:bg-slate-950">
          <div className="flex items-center justify-between bg-white px-5 py-4 dark:bg-white/[0.06]">
            <div className="flex items-center gap-2">
              <HeartPulse className="h-5 w-5 text-emerald-600" />
              <span className="text-sm font-black text-slate-950 dark:text-white">
                CurePoint
              </span>
            </div>

            <div className="hidden gap-5 text-xs font-bold text-slate-500 dark:text-slate-400 md:flex">
              <span>Home</span>
              <span>Services</span>
              <span>Doctors</span>
              <span>Pages</span>
              <span>Blog</span>
              <span>Contact</span>
            </div>

            <span className="rounded-lg bg-emerald-500 px-3 py-2 text-xs font-black text-white">
              Book Appointment
            </span>
          </div>

          <div className="relative grid min-h-[345px] items-center gap-6 bg-gradient-to-br from-blue-50 to-white p-7 dark:from-blue-950/30 dark:to-slate-950 md:grid-cols-[0.85fr_1.15fr]">
            <div>
              <h2 className="text-3xl font-black leading-tight text-slate-950 dark:text-white">
                Compassionate Care For A Healthier You
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                Expert doctors. Advanced technology. Personalized care for you
                and your family.
              </p>

              <div className="mt-5 flex gap-3">
                <span className="rounded-lg bg-emerald-500 px-4 py-2 text-xs font-black text-white">
                  Book Appointment
                </span>
                <span className="rounded-lg bg-white px-4 py-2 text-xs font-black text-slate-700 dark:bg-white/10 dark:text-slate-200">
                  View Services
                </span>
              </div>
            </div>

            <div
              className="min-h-[280px] rounded-[1.5rem] bg-cover bg-center shadow-inner"
              style={{ backgroundImage: `url(${heroImageUrl})` }}
            />

            <div className="absolute -bottom-7 left-8 right-8 grid grid-cols-4 gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-[0_18px_50px_rgba(15,23,42,0.10)] dark:border-white/10 dark:bg-slate-950">
              {[
                ["15+", "Years Experience"],
                ["20K+", "Happy Patients"],
                ["50+", "Expert Doctors"],
                ["24/7", "Support"],
              ].map(([value, label]) => (
                <div key={label}>
                  <p className="text-base font-black text-emerald-600">
                    {value}
                  </p>
                  <p className="text-[10px] font-semibold text-slate-500 dark:text-slate-400">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="h-9" />
        </div>
      </div>
    </div>
  );
}

function ProblemsSection() {
  return (
    <section className="border-r border-slate-200 px-7 py-10 dark:border-white/10 sm:px-10 lg:px-12">
      <SectionTitle
        title="Challenges We Solve For Healthcare Providers"
        center
      />

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {problems.map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-white/[0.05]"
            >
              <span className={toneClass(item.tone)}>
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-base font-black text-slate-950 dark:text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {item.description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function IncludesSection() {
  return (
    <section className="px-7 py-10 sm:px-10 lg:px-12">
      <SectionTitle title="What Your Healthcare Website Will Include" center />

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {includes.map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.title}
              className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_22px_60px_rgba(37,99,235,0.10)] dark:border-white/10 dark:bg-white/[0.05]"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-400/10 dark:text-blue-300">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-sm font-black text-slate-950 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs leading-5 text-slate-600 dark:text-slate-300">
                  {item.description}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function IndustryModulesSection() {
  const marqueeModules = [...modules, ...modules];

  return (
    <section className="border-t border-slate-200 px-0 py-8 dark:border-white/10">
      <div className="px-7 sm:px-10 lg:px-12">
        <SectionTitle
          title="Built for Every Healthcare Specialty"
          description="Tailored website modules for clinics, hospitals, labs, wellness centers, and healthcare brands."
          center
        />
      </div>

      <div className="mt-6 overflow-hidden">
        <div className="healthcare-marquee-left flex w-max gap-4 px-7 sm:px-10 lg:px-12">
          {marqueeModules.map((module, index) => {
            const Icon = module.icon;

            return (
              <article
                key={`${module.title}-${index}`}
                className="group h-[235px] w-[280px] shrink-0 overflow-hidden rounded-[1.35rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,0.10)] dark:border-white/10 dark:bg-white/[0.05] sm:w-[310px]"
              >
                <div
                  className="relative h-24 bg-cover bg-center"
                  style={{ backgroundImage: `url(${module.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/15 via-transparent to-transparent" />
                  <span className="absolute -bottom-5 left-5 grid h-10 w-10 place-items-center rounded-xl border border-cyan-200 bg-cyan-50 text-cyan-600 shadow-[0_10px_24px_rgba(8,145,178,0.16)] dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-300">
                    <Icon className="h-5 w-5" />
                  </span>
                </div>

                <div className="px-5 pb-5 pt-8">
                  <h3 className="text-lg font-black leading-6 text-slate-950 dark:text-white">
                    {module.title}
                  </h3>

                  <div className="mt-3 space-y-2">
                    {module.points.slice(0, 3).map((point) => (
                      <div
                        key={point}
                        className="flex items-start gap-2 text-xs font-semibold leading-5 text-slate-600 dark:text-slate-300"
                      >
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500" />
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TrustedProvidersSection() {
  const marqueeProviders = [...trustedProviders, ...trustedProviders];

  return (
    <section className="border-t border-slate-200 px-0 py-8 dark:border-white/10">
      <div className="px-7 sm:px-10 lg:px-12">
        <SectionTitle
          title="Trusted By Healthcare Providers Across The Country"
          description="A premium healthcare website system built for providers who want trust, bookings, visibility, and growth."
          center
        />
      </div>

      <div className="mt-6 overflow-hidden">
        <div className="healthcare-marquee-right flex w-max gap-4 px-7 sm:px-10 lg:px-12">
          {marqueeProviders.map((provider, index) => (
            <article
              key={`${provider.name}-${index}`}
              className="flex h-[92px] w-[285px] shrink-0 items-center gap-3 rounded-[1.25rem] border border-slate-200 bg-white p-3 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(15,23,42,0.09)] dark:border-white/10 dark:bg-white/[0.05]"
            >
              <div
                className="h-14 w-14 shrink-0 rounded-2xl bg-cover bg-center"
                style={{ backgroundImage: `url(${provider.image})` }}
              />

              <div className="min-w-0">
                <p className="truncate text-sm font-black leading-5 text-slate-950 dark:text-white">
                  {provider.name}
                </p>
                <p className="truncate text-xs font-bold text-slate-500 dark:text-slate-400">
                  {provider.type}
                </p>

                <div className="mt-2 inline-flex items-center gap-1 rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-black text-blue-700 dark:bg-blue-400/10 dark:text-blue-300">
                  <CheckCircle2 className="h-3 w-3" />
                  Website Ready
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function HealthcareWebsiteDemosSection({
  onOpenDemo,
}: {
  onOpenDemo: (demo: HealthcareDemoCardItem) => void;
}) {
  return (
    <section
      id="healthcare-website-demos"
      className="border-t border-slate-200 bg-gradient-to-b from-white to-blue-50/40 px-7 py-12 dark:border-white/10 dark:from-white/[0.04] dark:to-blue-950/10 sm:px-10 lg:px-12"
    >
      <div className="mx-auto max-w-3xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-black text-blue-700 dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-300">
          <MonitorSmartphone className="h-4 w-4" />
          Website Demo Gallery
        </div>

        <h2 className="mt-5 text-[clamp(1.8rem,3vw,2.8rem)] font-black leading-tight tracking-[-0.04em] text-slate-950 dark:text-white">
          Healthcare Website Demos — Built for Every Industry
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-300">
          Explore clean, high-converting website demo concepts for hospitals,
          clinics, diagnostics, pharma, dental, wellness, and rehabilitation.
        </p>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        {[
          ["Modern Design", ShieldCheck],
          ["Mobile Responsive", Smartphone],
          ["Appointment Booking", CalendarCheck],
          ["SEO Optimized", Search],
          ["Easy To Customize", MonitorSmartphone],
        ].map(([label, Icon]) => {
          const ChipIcon = Icon as typeof ShieldCheck;

          return (
            <span
              key={label as string}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-black text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-300"
            >
              <ChipIcon className="h-4 w-4 text-blue-600 dark:text-blue-300" />
              {label as string}
            </span>
          );
        })}
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {healthcareDemos.map((demo) => (
          <HealthcareDemoCard
            key={demo.title}
            demo={demo}
            onOpenDemo={onOpenDemo}
          />
        ))}
      </div>

      <div className="mt-8 grid gap-5 rounded-[1.6rem] border border-slate-200 bg-slate-950 p-5 text-white shadow-[0_24px_70px_rgba(15,23,42,0.16)] dark:border-white/10 lg:grid-cols-[1fr_auto] lg:items-center">
        <div className="flex items-start gap-4">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-blue-500/15 text-blue-300">
            <ShieldCheck className="h-6 w-6" />
          </span>

          <div>
            <h3 className="text-lg font-black">
              100% Customizable Healthcare Website Demos
            </h3>
            <p className="mt-1 max-w-3xl text-sm leading-6 text-slate-300">
              Every demo can be customized with your logo, colors, services,
              doctors, product catalog, booking flow, and business requirements.
            </p>
          </div>
        </div>

        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-7 py-4 text-sm font-black text-white shadow-[0_18px_50px_rgba(37,99,235,0.25)] transition hover:-translate-y-0.5"
        >
          Build My Website Now
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

function HealthcareDemoCard({
  demo,
  onOpenDemo,
}: {
  demo: HealthcareDemoCardItem;
  onOpenDemo: (demo: HealthcareDemoCardItem) => void;
}) {
  const Icon = demo.icon;
  const accentClasses = getDemoAccentClasses(demo.accent);

  return (
    <article className="group overflow-hidden rounded-[1.45rem] border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.10)] dark:border-white/10 dark:bg-white/[0.05]">
      <div className="mb-4 flex items-start gap-3">
        <span
          className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl ${accentClasses.iconBg} ${accentClasses.iconText}`}
        >
          <Icon className="h-5 w-5" />
        </span>

        <div>
          <h3 className="text-base font-black text-slate-950 dark:text-white">
            {demo.title}
          </h3>
          <p className="mt-1 line-clamp-2 text-xs leading-5 text-slate-500 dark:text-slate-400">
            {demo.subtitle}
          </p>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-slate-950">
        <div className="flex items-center justify-between border-b border-slate-200 bg-white px-3 py-2 dark:border-white/10 dark:bg-white/[0.06]">
          <span className="text-[10px] font-black text-slate-900 dark:text-white">
            {demo.brand}
          </span>
          <span className={`h-5 w-16 rounded-md ${accentClasses.button}`} />
        </div>

        <div className="grid min-h-[138px] grid-cols-[1fr_116px] items-stretch gap-2 p-3">
          <div className="flex flex-col justify-center rounded-xl bg-white p-3 dark:bg-white/[0.06]">
            <p className="text-sm font-black leading-tight text-slate-950 dark:text-white">
              {demo.headline}
            </p>

            <div className="mt-3 flex gap-2">
              <span className={`h-6 w-16 rounded-md ${accentClasses.button}`} />
              <span className="h-6 w-14 rounded-md bg-slate-100 dark:bg-white/10" />
            </div>

            <div className="mt-3 grid grid-cols-4 gap-1.5">
              {demo.stats.map((stat) => (
                <div key={stat} className="text-center">
                  <p className={`text-[11px] font-black ${accentClasses.text}`}>
                    {stat}
                  </p>
                  <div className="mx-auto mt-1 h-1.5 w-6 rounded-full bg-slate-100 dark:bg-white/10" />
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div
              className="h-full min-h-[138px] rounded-xl bg-cover bg-center"
              style={{ backgroundImage: `url(${demo.image})` }}
            />

            <div className="absolute bottom-2 right-2 hidden h-[104px] w-[58px] overflow-hidden rounded-xl border-[4px] border-slate-950 bg-white p-1 shadow-lg sm:block dark:border-slate-800">
              <div className="mb-1 h-1 w-5 rounded-full bg-slate-200" />
              <div
                className="h-12 rounded-md bg-cover bg-center"
                style={{ backgroundImage: `url(${demo.image})` }}
              />
              <div className="mt-1.5 space-y-1">
                <div className="h-1.5 rounded bg-slate-100" />
                <div className="h-1.5 w-2/3 rounded bg-slate-100" />
                <div className={`h-3 rounded ${accentClasses.button}`} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2">
        {demo.chips.slice(0, 4).map((chip) => (
          <span
            key={chip}
            className="truncate rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-[10px] font-bold text-slate-600 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-300"
          >
            {chip}
          </span>
        ))}
      </div>

      <button
        type="button"
        onClick={() => onOpenDemo(demo)}
        className={`mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-xs font-black text-white shadow-sm transition hover:-translate-y-0.5 ${accentClasses.button}`}
      >
        View Full Demo
        <ArrowRight className="h-4 w-4" />
      </button>
    </article>
  );
}

function WhyChooseAndCTASection() {
  return (
    <section className="border-t border-slate-200 px-7 py-10 dark:border-white/10 sm:px-10 lg:px-12">
      <div className="grid gap-6 xl:grid-cols-[1fr_1fr]">
        <div>
          <SectionTitle title="Why Healthcare Providers Choose Us" center />

          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {whyChoose.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm dark:border-white/10 dark:bg-white/[0.05]"
                >
                  <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-400/10 dark:text-blue-300">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="mt-3 text-sm font-black text-slate-950 dark:text-white">
                    {item.title}
                  </p>
                  <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] bg-gradient-to-r from-blue-700 to-violet-700 p-8 text-white shadow-[0_24px_70px_rgba(37,99,235,0.24)]">
          <h2 className="text-2xl font-black">
            Ready To Grow Your Healthcare Practice Online?
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-blue-50">
            Get a high-converting, patient-focused website that brings more
            appointments and builds long-term trust.
          </p>

          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-black text-blue-700"
          >
            Build My Healthcare Website
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  const [activePlan, setActivePlan] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActivePlan((current) => (current + 1) % pricingPlans.length);
    }, 3500);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="border-t border-slate-200 px-0 py-8 dark:border-white/10">
      <div className="px-7 sm:px-10 lg:px-12">
        <SectionTitle
          title="Simple, Transparent Pricing"
          description="Flexible plans designed to grow with your healthcare business"
          center
        />
      </div>

      <div className="mt-7 lg:hidden">
        <div className="mx-auto w-[285px] overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${activePlan * 285}px)`,
            }}
          >
            {pricingPlans.map((plan) => {
              const Icon = plan.icon;

              return (
                <article
                  key={`${plan.name}-mobile`}
                  className={`relative h-[350px] w-[285px] shrink-0 rounded-[1.5rem] border bg-white p-5 shadow-sm dark:bg-white/[0.05] ${
                    plan.popular
                      ? "border-violet-400 shadow-[0_18px_48px_rgba(124,58,237,0.14)] dark:border-violet-400/60"
                      : "border-slate-200 dark:border-white/10"
                  }`}
                >
                  {plan.popular ? (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-4 py-1.5 text-[10px] font-black text-white">
                      Most Popular
                    </span>
                  ) : null}

                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-400/10 dark:text-blue-300">
                    <Icon className="h-5 w-5" />
                  </span>

                  <h3 className="mt-4 text-base font-black text-slate-950 dark:text-white">
                    {plan.name}
                  </h3>

                  <p className="mt-1 line-clamp-2 text-xs leading-5 text-slate-500 dark:text-slate-400">
                    {plan.subtitle}
                  </p>

                  <div className="mt-4">
                    <p className="text-[11px] font-bold text-slate-500 dark:text-slate-400">
                      Starting From
                    </p>
                    <p className="mt-1 text-2xl font-black text-slate-950 dark:text-white">
                      {plan.price}
                    </p>
                  </div>

                  <ul className="mt-4 space-y-2">
                    {plan.features.slice(0, 4).map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`absolute bottom-5 left-5 right-5 inline-flex items-center justify-center rounded-xl px-4 py-3 text-xs font-black transition hover:-translate-y-0.5 ${
                      plan.popular
                        ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-[0_14px_36px_rgba(37,99,235,0.24)]"
                        : "border border-slate-200 bg-white text-blue-700 dark:border-white/10 dark:bg-white/[0.06] dark:text-blue-300"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-5 flex items-center justify-center gap-2">
          {pricingPlans.map((plan, index) => (
            <button
              key={plan.name}
              type="button"
              aria-label={`Show ${plan.name}`}
              onClick={() => setActivePlan(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activePlan === index
                  ? "w-7 bg-gradient-to-r from-blue-600 to-violet-600"
                  : "w-2.5 bg-slate-300 dark:bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="mt-8 hidden gap-5 px-7 sm:px-10 lg:grid lg:grid-cols-3 lg:px-12">
        {pricingPlans.map((plan) => {
          const Icon = plan.icon;

          return (
            <article
              key={plan.name}
              className={`relative rounded-[1.6rem] border bg-white p-6 shadow-sm transition hover:-translate-y-1 dark:bg-white/[0.05] ${
                plan.popular
                  ? "border-violet-400 shadow-[0_18px_50px_rgba(124,58,237,0.13)] dark:border-violet-400/60"
                  : "border-slate-200 dark:border-white/10"
              }`}
            >
              {plan.popular ? (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-2 text-xs font-black text-white">
                  Most Popular
                </span>
              ) : null}

              <div className="flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-400/10 dark:text-blue-300">
                  <Icon className="h-5 w-5" />
                </span>

                <div>
                  <h3 className="text-lg font-black text-slate-950 dark:text-white">
                    {plan.name}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400">
                    {plan.subtitle}
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-xs font-bold text-slate-500 dark:text-slate-400">
                  Starting From
                </p>
                <p className="mt-1 text-3xl font-black text-slate-950 dark:text-white">
                  {plan.price}
                </p>
              </div>

              <ul className="mt-5 grid gap-2">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm font-semibold text-slate-700 dark:text-slate-300"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-5 py-3 text-sm font-black transition hover:-translate-y-0.5 ${
                  plan.popular
                    ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-[0_14px_38px_rgba(37,99,235,0.24)]"
                    : "border border-slate-200 bg-white text-blue-700 dark:border-white/10 dark:bg-white/[0.06] dark:text-blue-300"
                }`}
              >
                {plan.cta}
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="border-t border-slate-200 px-7 py-10 dark:border-white/10 sm:px-10 lg:px-12">
      <SectionTitle
        title="Happy Providers, Better Patient Experiences"
        center
      />

      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {testimonials.map((item) => (
          <article
            key={item.name}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.05]"
          >
            <div className="mb-4 flex gap-1 text-amber-400">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="text-sm leading-6 text-slate-700 dark:text-slate-300">
              “{item.quote}”
            </p>
            <p className="mt-5 text-sm font-black text-slate-950 dark:text-white">
              {item.name}
            </p>
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              {item.role}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ComplianceSection() {
  return (
    <section className="border-t border-slate-200 px-7 py-10 dark:border-white/10 sm:px-10 lg:px-12">
      <SectionTitle title="Built For Security, Trust & Compliance" center />

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {compliance.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.title} className="text-center">
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-400/10 dark:text-blue-300">
                <Icon className="h-5 w-5" />
              </span>
              <p className="mt-3 text-xs font-black text-slate-700 dark:text-slate-300">
                {item.title}
              </p>
            </div>
          );
        })}
      </div>

      <p className="mx-auto mt-6 max-w-xl text-center text-sm leading-6 text-slate-500 dark:text-slate-400">
        We follow best practices to protect patient data and ensure a secure
        experience for your visitors.
      </p>
    </section>
  );
}

function Badge({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-xs font-black text-blue-700 dark:bg-blue-400/10 dark:text-blue-300">
      {children}
    </div>
  );
}

function SectionTitle({
  title,
  description,
  center = false,
}: {
  title: string;
  description?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "text-center" : ""}>
      <h2 className="text-xl font-black text-slate-950 dark:text-white">
        {title}
      </h2>
      {description ? (
        <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-slate-500 dark:text-slate-400">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function toneClass(tone: string) {
  const base = "grid h-14 w-14 place-items-center rounded-2xl";

  if (tone === "emerald") {
    return `${base} bg-emerald-50 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-300`;
  }

  if (tone === "rose") {
    return `${base} bg-rose-50 text-rose-600 dark:bg-rose-400/10 dark:text-rose-300`;
  }

  if (tone === "violet") {
    return `${base} bg-violet-50 text-violet-600 dark:bg-violet-400/10 dark:text-violet-300`;
  }

  return `${base} bg-blue-50 text-blue-600 dark:bg-blue-400/10 dark:text-blue-300`;
}

function getDemoAccentClasses(accent: string) {
  if (accent === "violet") {
    return {
      iconBg: "bg-violet-50 dark:bg-violet-400/10",
      iconText: "text-violet-600 dark:text-violet-300",
      button: "bg-violet-600",
      text: "text-violet-600 dark:text-violet-300",
    };
  }

  if (accent === "blue") {
    return {
      iconBg: "bg-blue-50 dark:bg-blue-400/10",
      iconText: "text-blue-600 dark:text-blue-300",
      button: "bg-blue-600",
      text: "text-blue-600 dark:text-blue-300",
    };
  }

  if (accent === "teal") {
    return {
      iconBg: "bg-teal-50 dark:bg-teal-400/10",
      iconText: "text-teal-600 dark:text-teal-300",
      button: "bg-teal-600",
      text: "text-teal-600 dark:text-teal-300",
    };
  }

  if (accent === "orange") {
    return {
      iconBg: "bg-orange-50 dark:bg-orange-400/10",
      iconText: "text-orange-600 dark:text-orange-300",
      button: "bg-orange-600",
      text: "text-orange-600 dark:text-orange-300",
    };
  }

  if (accent === "rose") {
    return {
      iconBg: "bg-rose-50 dark:bg-rose-400/10",
      iconText: "text-rose-600 dark:text-rose-300",
      button: "bg-rose-600",
      text: "text-rose-600 dark:text-rose-300",
    };
  }

  return {
    iconBg: "bg-emerald-50 dark:bg-emerald-400/10",
    iconText: "text-emerald-600 dark:text-emerald-300",
    button: "bg-emerald-600",
    text: "text-emerald-600 dark:text-emerald-300",
  };
}

function MarqueeStyles() {
  return (
    <style jsx global>{`
      @keyframes healthcare-marquee-left {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }

      @keyframes healthcare-marquee-right {
        0% {
          transform: translateX(-50%);
        }
        100% {
          transform: translateX(0);
        }
      }

      .healthcare-marquee-left {
        animation: healthcare-marquee-left 40s linear infinite;
      }

      .healthcare-marquee-right {
        animation: healthcare-marquee-right 36s linear infinite;
      }

      .healthcare-marquee-left:hover,
      .healthcare-marquee-right:hover {
        animation-play-state: paused;
      }

      @media (prefers-reduced-motion: reduce) {
        .healthcare-marquee-left,
        .healthcare-marquee-right {
          animation: none;
        }
      }
    `}</style>
  );
}