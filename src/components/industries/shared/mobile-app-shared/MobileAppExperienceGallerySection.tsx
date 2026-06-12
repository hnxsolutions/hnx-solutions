"use client";

import type { ReactNode } from "react";
import {
  ArrowLeft,
  Bell,
  CalendarCheck,
  CheckCircle2,
  CreditCard,
  Headphones,
  Heart,
  Home,
  LockKeyhole,
  MapPin,
  MessageCircle,
  Package,
  Search,
  Settings,
  ShieldCheck,
  SlidersHorizontal,
  Star,
  TrendingUp,
  Truck,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import type {
  IndustryMobileAppDemo,
  IndustryMobileAppPageData,
} from "./industryMobileAppData";
import {
  MobileAppIconBadge,
  MobileAppSectionShell,
  cn,
  getDemoTone,
} from "./mobileAppSectionUtils";

const PHONE_WIDTH = 268;
const PHONE_HEIGHT = 452;
const PHONE_INNER_HEIGHT = 424;
const PHONE_CONTENT_HEIGHT = 392;

type DemoTone = ReturnType<typeof getDemoTone>;

type AccentTheme = {
  softBg: string;
  softBorder: string;
  softText: string;
  button: string;
  buttonSoft: string;
  glow: string;
  ring: string;
};

type BottomTabId = "home" | "explore" | "requests" | "profile";

type AppScreenType =
  | "login"
  | "tabHome"
  | "tabExplore"
  | "tabRequests"
  | "tabProfile"
  | "search"
  | "detail"
  | "form"
  | "tracking"
  | "payment"
  | "notifications"
  | "messages"
  | "support"
  | "success"
  | "feedback"
  | "settings";

type AppScreen = {
  type: AppScreenType;
  label: string;
  demo: IndustryMobileAppDemo;
};

type IndustryKey =
  | "insurance"
  | "healthcare"
  | "retail"
  | "education"
  | "realEstate"
  | "finance"
  | "manufacturing"
  | "generic";

type IndustryProfile = {
  key: IndustryKey;
  appName: string;
  dashboardTitle: string;
  heroLabel: string;
  primaryMetric: string;
  primaryMetricLabel: string;
  secondaryMetric: string;
  secondaryMetricLabel: string;
  tertiaryMetric: string;
  tertiaryMetricLabel: string;
  quickActions: string[];
  discoverCards: string[];
  activitySteps: string[];
  searchFilters: string[];
  formFields: Array<{ label: string; value: string }>;
  walletLabel: string;
  receiptRows: Array<[string, string]>;
  notifications: string[];
  chat: Array<{ align: "left" | "right"; text: string; avatar: string }>;
  supportCards: string[];
  settings: string[];
  successTitle: string;
  feedbackTags: string[];
  screenTheme: {
    mode: string;
    artifact: string;
    aiTask: string;
    status: string;
    progressLabel: string;
  };
};

function getIndustryProfile(demo: IndustryMobileAppDemo): IndustryProfile {
  const source = [
    demo.brand,
    demo.title,
    demo.headline,
    demo.subtitle,
    ...demo.chips,
  ]
    .join(" ")
    .toLowerCase();

  if (
    source.includes("insurance") ||
    source.includes("policy") ||
    source.includes("claim") ||
    source.includes("premium") ||
    source.includes("renewal")
  ) {
    return {
      key: "insurance",
      appName: "PolicyCare",
      dashboardTitle: "Policy Command Center",
      heroLabel: "Coverage health",
      primaryMetric: "$8.2L",
      primaryMetricLabel: "Coverage",
      secondaryMetric: "02",
      secondaryMetricLabel: "Claims",
      tertiaryMetric: "18d",
      tertiaryMetricLabel: "Renewal",
      quickActions: ["File claim", "Policy vault", "Renewal", "Roadside help"],
      discoverCards: ["Motor insurance", "Health cover", "Claim history", "Premium offers"],
      activitySteps: ["Claim submitted", "Survey assigned", "Documents verified", "Settlement pending"],
      searchFilters: ["Policies", "Claims", "Premiums"],
      formFields: [
        { label: "Claim type", value: "Cashless motor claim" },
        { label: "Incident date", value: "Today, 4:30 PM" },
        { label: "Documents", value: "RC, photos, policy PDF" },
      ],
      walletLabel: "Premium Wallet",
      receiptRows: [
        ["Base premium", "$9,850"],
        ["GST", "$1,773"],
        ["Total", "$11,623"],
      ],
      notifications: [
        "Claim surveyor assigned for your vehicle",
        "Policy document has been verified",
        "Premium renewal reminder is active",
      ],
      chat: [
        { align: "left", text: "I need help with my claim documents.", avatar: "K" },
        { align: "right", text: "Upload RC, incident photos and policy PDF here.", avatar: "A" },
        { align: "left", text: "Can I track the survey status?", avatar: "K" },
        { align: "right", text: "Yes, survey and settlement stages are live.", avatar: "A" },
      ],
      supportCards: ["Claim support", "Policy renewal", "Document help"],
      settings: ["Claim alerts", "Policy vault", "KYC security", "Renewal reminders"],
      successTitle: "Claim request created",
      feedbackTags: ["Fast claim", "Clear policy", "Helpful agent"],
      screenTheme: {
        mode: "Claim AI",
        artifact: "Policy + claim file",
        aiTask: "Checking coverage, KYC and claim risk",
        status: "Survey assigned",
        progressLabel: "Claim maturity",
      },
    };
  }

  if (
    source.includes("health") ||
    source.includes("doctor") ||
    source.includes("clinic") ||
    source.includes("patient") ||
    source.includes("hospital") ||
    source.includes("medical")
  ) {
    return {
      key: "healthcare",
      appName: "CareConnect",
      dashboardTitle: "Patient Care Hub",
      heroLabel: "Vitals today",
      primaryMetric: "98%",
      primaryMetricLabel: "Care score",
      secondaryMetric: "03",
      secondaryMetricLabel: "Visits",
      tertiaryMetric: "07",
      tertiaryMetricLabel: "Reports",
      quickActions: ["Book doctor", "Lab reports", "Medicine refill", "Teleconsult"],
      discoverCards: ["Cardiology", "Dental care", "Lab tests", "Pharmacy"],
      activitySteps: ["Appointment booked", "Doctor assigned", "Vitals checked", "Report pending"],
      searchFilters: ["Doctors", "Tests", "Reports"],
      formFields: [
        { label: "Appointment type", value: "Video consultation" },
        { label: "Preferred slot", value: "Today, 6:00 PM" },
        { label: "Symptoms", value: "Fever, cough, headache" },
      ],
      walletLabel: "Care Payment",
      receiptRows: [
        ["Consultation", "$799"],
        ["Lab pickup", "$250"],
        ["Total", "$1,049"],
      ],
      notifications: [
        "Doctor consultation starts in 20 minutes",
        "Lab report is ready for download",
        "Medicine refill reminder is active",
      ],
      chat: [
        { align: "left", text: "I want to share my lab report with the doctor.", avatar: "K" },
        { align: "right", text: "Sure, upload the report and I will attach it to your visit.", avatar: "A" },
        { align: "left", text: "Can I book follow-up?", avatar: "K" },
        { align: "right", text: "Yes, today 6:00 PM is available.", avatar: "A" },
      ],
      supportCards: ["Doctor support", "Report help", "Prescription support"],
      settings: ["Appointment alerts", "Health records", "Privacy lock", "Medicine reminders"],
      successTitle: "Appointment confirmed",
      feedbackTags: ["Clean booking", "Good doctor", "Fast report"],
      screenTheme: {
        mode: "Care AI",
        artifact: "Prescription + lab file",
        aiTask: "Reviewing vitals, symptoms and reports",
        status: "Doctor assigned",
        progressLabel: "Care readiness",
      },
    };
  }

  if (
    source.includes("retail") ||
    source.includes("shop") ||
    source.includes("order") ||
    source.includes("cart") ||
    source.includes("store") ||
    source.includes("product")
  ) {
    return {
      key: "retail",
      appName: "ShopFlow",
      dashboardTitle: "Shopping Dashboard",
      heroLabel: "Order pulse",
      primaryMetric: "42",
      primaryMetricLabel: "Orders",
      secondaryMetric: "08",
      secondaryMetricLabel: "Offers",
      tertiaryMetric: "2d",
      tertiaryMetricLabel: "Delivery",
      quickActions: ["New arrivals", "Track order", "Coupons", "Wishlist"],
      discoverCards: ["Trending products", "Flash sale", "Recommended", "Saved items"],
      activitySteps: ["Order placed", "Packed", "Out for delivery", "Delivered"],
      searchFilters: ["Products", "Orders", "Offers"],
      formFields: [
        { label: "Product issue", value: "Return or exchange" },
        { label: "Pickup slot", value: "Tomorrow, 11:00 AM" },
        { label: "Order ID", value: "#ORD-24891" },
      ],
      walletLabel: "Shopping Wallet",
      receiptRows: [
        ["Items", "$2,499"],
        ["Delivery", "$99"],
        ["Total", "$2,598"],
      ],
      notifications: [
        "Your order is out for delivery",
        "Flash sale starts in 30 minutes",
        "Return pickup has been scheduled",
      ],
      chat: [
        { align: "left", text: "Can I change the delivery address?", avatar: "K" },
        { align: "right", text: "Yes, address change is available before dispatch.", avatar: "A" },
        { align: "left", text: "Any coupon for this order?", avatar: "K" },
        { align: "right", text: "A 10% coupon is available in your wallet.", avatar: "A" },
      ],
      supportCards: ["Order support", "Return request", "Coupon help"],
      settings: ["Order alerts", "Wishlist sync", "Payment security", "Offer reminders"],
      successTitle: "Order request confirmed",
      feedbackTags: ["Fast delivery", "Good offer", "Easy return"],
      screenTheme: {
        mode: "Commerce AI",
        artifact: "Order + return file",
        aiTask: "Checking stock, coupon and delivery ETA",
        status: "Out for delivery",
        progressLabel: "Order readiness",
      },
    };
  }

  if (
    source.includes("education") ||
    source.includes("school") ||
    source.includes("student") ||
    source.includes("course") ||
    source.includes("class") ||
    source.includes("learning")
  ) {
    return {
      key: "education",
      appName: "LearnTrack",
      dashboardTitle: "Student Learning Hub",
      heroLabel: "Learning progress",
      primaryMetric: "86%",
      primaryMetricLabel: "Progress",
      secondaryMetric: "05",
      secondaryMetricLabel: "Classes",
      tertiaryMetric: "12",
      tertiaryMetricLabel: "Tasks",
      quickActions: ["Join class", "Assignments", "Attendance", "Certificates"],
      discoverCards: ["Live classes", "Practice tests", "Study notes", "Mentor sessions"],
      activitySteps: ["Class joined", "Assignment uploaded", "Teacher reviewed", "Grade pending"],
      searchFilters: ["Courses", "Notes", "Tests"],
      formFields: [
        { label: "Assignment", value: "Math worksheet upload" },
        { label: "Deadline", value: "Tonight, 9:00 PM" },
        { label: "Attachment", value: "worksheet-final.pdf" },
      ],
      walletLabel: "Fee Wallet",
      receiptRows: [
        ["Course fee", "$4,500"],
        ["Platform fee", "$299"],
        ["Total", "$4,799"],
      ],
      notifications: [
        "Live class starts in 15 minutes",
        "Assignment feedback is ready",
        "Attendance report has been updated",
      ],
      chat: [
        { align: "left", text: "Can I submit my assignment again?", avatar: "K" },
        { align: "right", text: "Yes, resubmission is open until 9 PM.", avatar: "T" },
        { align: "left", text: "Where is my attendance report?", avatar: "K" },
        { align: "right", text: "It is updated in your profile dashboard.", avatar: "T" },
      ],
      supportCards: ["Class support", "Assignment help", "Fee support"],
      settings: ["Class alerts", "Progress reports", "Parent access", "Exam reminders"],
      successTitle: "Assignment submitted",
      feedbackTags: ["Clear lesson", "Good mentor", "Easy upload"],
      screenTheme: {
        mode: "Learning AI",
        artifact: "Assignment + progress file",
        aiTask: "Checking deadline, attendance and learning gaps",
        status: "Teacher review",
        progressLabel: "Course progress",
      },
    };
  }

  if (
    source.includes("real estate") ||
    source.includes("property") ||
    source.includes("home") ||
    source.includes("flat") ||
    source.includes("rent") ||
    source.includes("site visit")
  ) {
    return {
      key: "realEstate",
      appName: "PropertyGo",
      dashboardTitle: "Property Shortlist",
      heroLabel: "Visit pipeline",
      primaryMetric: "14",
      primaryMetricLabel: "Listings",
      secondaryMetric: "03",
      secondaryMetricLabel: "Visits",
      tertiaryMetric: "$75L",
      tertiaryMetricLabel: "Budget",
      quickActions: ["Book visit", "Shortlist", "Loan check", "Map search"],
      discoverCards: ["Premium flats", "Ready homes", "Rental picks", "Nearby projects"],
      activitySteps: ["Property shortlisted", "Visit scheduled", "Agent assigned", "Offer pending"],
      searchFilters: ["Buy", "Rent", "Visit"],
      formFields: [
        { label: "Property type", value: "3BHK apartment" },
        { label: "Visit slot", value: "Sunday, 12:30 PM" },
        { label: "Budget range", value: "$65L - $80L" },
      ],
      walletLabel: "Booking Wallet",
      receiptRows: [
        ["Visit booking", "$0"],
        ["Token amount", "$25,000"],
        ["Total", "$25,000"],
      ],
      notifications: [
        "Site visit has been confirmed",
        "New listing matches your budget",
        "Agent shared floor plan details",
      ],
      chat: [
        { align: "left", text: "Can I visit the property this Sunday?", avatar: "K" },
        { align: "right", text: "Yes, 12:30 PM slot is available.", avatar: "A" },
        { align: "left", text: "Send me the floor plan.", avatar: "K" },
        { align: "right", text: "Floor plan and price sheet are attached.", avatar: "A" },
      ],
      supportCards: ["Visit support", "Loan guidance", "Agent chat"],
      settings: ["Listing alerts", "Saved properties", "KYC security", "Visit reminders"],
      successTitle: "Site visit booked",
      feedbackTags: ["Good listing", "Helpful agent", "Clear pricing"],
      screenTheme: {
        mode: "Property AI",
        artifact: "Visit + floor plan file",
        aiTask: "Checking budget, locality and visit availability",
        status: "Agent assigned",
        progressLabel: "Visit readiness",
      },
    };
  }

  if (
    source.includes("finance") ||
    source.includes("bank") ||
    source.includes("loan") ||
    source.includes("investment") ||
    source.includes("payment") ||
    source.includes("wallet")
  ) {
    return {
      key: "finance",
      appName: "FinPulse",
      dashboardTitle: "Financial Control Room",
      heroLabel: "Portfolio health",
      primaryMetric: "$4.8L",
      primaryMetricLabel: "Balance",
      secondaryMetric: "+12%",
      secondaryMetricLabel: "Growth",
      tertiaryMetric: "760",
      tertiaryMetricLabel: "Score",
      quickActions: ["Transfer", "Invest", "Loan check", "Statements"],
      discoverCards: ["Mutual funds", "Credit offers", "Expense insights", "Loan plans"],
      activitySteps: ["KYC verified", "Risk profile ready", "Investment selected", "Order pending"],
      searchFilters: ["Accounts", "Loans", "Investments"],
      formFields: [
        { label: "Request type", value: "Personal loan pre-check" },
        { label: "Amount", value: "$2,00,000" },
        { label: "Documents", value: "PAN, salary slips, bank PDF" },
      ],
      walletLabel: "Finance Wallet",
      receiptRows: [
        ["Transfer", "$20,000"],
        ["Fee", "$12"],
        ["Total", "$20,012"],
      ],
      notifications: [
        "Investment order has been processed",
        "Credit score updated successfully",
        "Monthly statement is ready",
      ],
      chat: [
        { align: "left", text: "Can I check my loan eligibility?", avatar: "K" },
        { align: "right", text: "Yes, your pre-approved amount is ready.", avatar: "F" },
        { align: "left", text: "Show my monthly statement.", avatar: "K" },
        { align: "right", text: "Statement PDF is available in documents.", avatar: "F" },
      ],
      supportCards: ["Loan support", "KYC help", "Statement support"],
      settings: ["Payment alerts", "Account security", "KYC documents", "Investment reminders"],
      successTitle: "Finance request submitted",
      feedbackTags: ["Secure flow", "Clear report", "Fast approval"],
      screenTheme: {
        mode: "Finance AI",
        artifact: "KYC + statement file",
        aiTask: "Checking eligibility, risk and transaction health",
        status: "KYC verified",
        progressLabel: "Approval readiness",
      },
    };
  }

  if (
    source.includes("manufacturing") ||
    source.includes("factory") ||
    source.includes("machine") ||
    source.includes("inventory") ||
    source.includes("production") ||
    source.includes("work order")
  ) {
    return {
      key: "manufacturing",
      appName: "FactoryOps",
      dashboardTitle: "Production Floor",
      heroLabel: "Line health",
      primaryMetric: "92%",
      primaryMetricLabel: "Output",
      secondaryMetric: "06",
      secondaryMetricLabel: "Alerts",
      tertiaryMetric: "18",
      tertiaryMetricLabel: "Orders",
      quickActions: ["Work orders", "Machine health", "Inventory", "Quality check"],
      discoverCards: ["Production line", "Spare parts", "QC reports", "Dispatch queue"],
      activitySteps: ["Work order created", "Material issued", "QC inspection", "Dispatch pending"],
      searchFilters: ["Orders", "Machines", "Inventory"],
      formFields: [
        { label: "Work order", value: "Batch #MO-2048" },
        { label: "Shift", value: "Evening shift" },
        { label: "Material", value: "Steel coils, 42 units" },
      ],
      walletLabel: "Procurement Wallet",
      receiptRows: [
        ["Raw material", "$85,000"],
        ["Logistics", "$7,500"],
        ["Total", "$92,500"],
      ],
      notifications: [
        "Machine M-12 needs inspection",
        "QC report is ready for batch #2048",
        "Inventory threshold reached",
      ],
      chat: [
        { align: "left", text: "What is the status of batch #2048?", avatar: "K" },
        { align: "right", text: "QC inspection is in progress on line 2.", avatar: "O" },
        { align: "left", text: "Any inventory alert?", avatar: "K" },
        { align: "right", text: "Steel coil stock is below threshold.", avatar: "O" },
      ],
      supportCards: ["Machine support", "Inventory help", "QC escalation"],
      settings: ["Machine alerts", "Inventory sync", "Operator access", "QC reminders"],
      successTitle: "Work order created",
      feedbackTags: ["Fast update", "Clear batch", "Good QC"],
      screenTheme: {
        mode: "Ops AI",
        artifact: "Work order + QC file",
        aiTask: "Checking machine status, stock and QC risk",
        status: "Line monitored",
        progressLabel: "Production health",
      },
    };
  }

  return {
    key: "generic",
    appName: demo.brand || "Business App",
    dashboardTitle: "Business Command Center",
    heroLabel: "Live activity",
    primaryMetric: "87%",
    primaryMetricLabel: "Progress",
    secondaryMetric: "12",
    secondaryMetricLabel: "Open",
    tertiaryMetric: "03",
    tertiaryMetricLabel: "Due",
    quickActions: getChips(demo, 4),
    discoverCards: getChips(demo, 4),
    activitySteps: ["Request received", "Team assigned", "Documents verified", "Completion pending"],
    searchFilters: ["All", "Active", "Saved"],
    formFields: [
      { label: "Request type", value: getChips(demo, 1)[0] ?? demo.title },
      { label: "Preferred slot", value: "Today, 4:30 PM" },
      { label: "Documents", value: "2 files attached" },
    ],
    walletLabel: "Secure Wallet",
    receiptRows: [
      ["Subtotal", "$210.00"],
      ["Tax", "$35.60"],
      ["Total", "$245.60"],
    ],
    notifications: [
      `${demo.title} update is available`,
      "Request status has changed",
      "Support team replied",
    ],
    chat: [
      { align: "left", text: `I need help with ${demo.title}.`, avatar: "K" },
      { align: "right", text: "Sure, I can guide you with the next step.", avatar: "A" },
      { align: "left", text: "Can I track it inside the app?", avatar: "K" },
      { align: "right", text: "Yes, live updates are visible from your dashboard.", avatar: "A" },
    ],
    supportCards: ["Priority support", "Document help", "Live chat"],
    settings: ["Notifications", "Saved items", "Security", demo.brand],
    successTitle: "Request confirmed",
    feedbackTags: ["Fast", "Clear", "Helpful"],
    screenTheme: {
      mode: "Business AI",
      artifact: "Request + activity file",
      aiTask: "Checking workflow status, documents and next action",
      status: "Synced",
      progressLabel: "Workflow health",
    },
  };
}

function getIndustryVisualTone(profile: IndustryProfile) {
  switch (profile.key) {
    case "healthcare":
      return {
        topLine: "Blood pressure",
        midLine: "Heart rate stable",
        bottomLine: "Report reviewed",
        symbol: "+",
      };
    case "insurance":
      return {
        topLine: "Policy active",
        midLine: "Claim protection on",
        bottomLine: "Renewal tracked",
        symbol: "✓",
      };
    case "retail":
      return {
        topLine: "Cart ready",
        midLine: "Delivery slot locked",
        bottomLine: "Coupon applied",
        symbol: "%",
      };
    case "education":
      return {
        topLine: "Class live",
        midLine: "Assignment pending",
        bottomLine: "Progress synced",
        symbol: "A+",
      };
    case "realEstate":
      return {
        topLine: "Visit booked",
        midLine: "Agent assigned",
        bottomLine: "Floor plan ready",
        symbol: "⌂",
      };
    case "finance":
      return {
        topLine: "Portfolio up",
        midLine: "KYC verified",
        bottomLine: "Statement ready",
        symbol: "$",
      };
    case "manufacturing":
      return {
        topLine: "Line running",
        midLine: "QC active",
        bottomLine: "Stock monitored",
        symbol: "M",
      };
    default:
      return {
        topLine: "Live update",
        midLine: "Smart workflow",
        bottomLine: "Status synced",
        symbol: "↗",
      };
  }
}

const screenOrder: Array<{ type: AppScreenType; label: string }> = [
  { type: "login", label: "Secure Login" },
  { type: "tabHome", label: "Dashboard" },
  { type: "tabExplore", label: "Discover" },
  { type: "tabRequests", label: "Activity" },
  { type: "tabProfile", label: "Profile" },
  { type: "search", label: "Smart Search" },
  { type: "detail", label: "Service Detail" },
  { type: "form", label: "Request Form" },
  { type: "tracking", label: "Live Tracking" },
  { type: "payment", label: "Wallet" },
  { type: "notifications", label: "Alerts" },
  { type: "messages", label: "Inbox" },
  { type: "support", label: "Support Hub" },
  { type: "success", label: "Confirmation" },
  { type: "feedback", label: "Rating" },
  { type: "settings", label: "Settings" },
];

export default function MobileAppExperienceGallerySection({
  data,
  onOpenDemo,
}: {
  data: IndustryMobileAppPageData;
  onOpenDemo: (demo: IndustryMobileAppDemo) => void;
}) {
  void onOpenDemo;

  const gallery = data.demoGallery.slice(0, 5);

  if (!gallery.length) {
    return null;
  }

  const screens: AppScreen[] = screenOrder.map((screen, index) => ({
    ...screen,
    demo: gallery[index % gallery.length],
  }));

  const sliderScreens = [...screens, ...screens];

  return (
    <div id="mobile-app-experience-gallery" className="scroll-mt-28">
      <MobileAppSectionShell className="border-0 overflow-hidden bg-white py-6 dark:bg-slate-950 sm:py-8 lg:py-8 xl:py-8">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-4xl lg:text-5xl">
          Mobile App Experience Gallery
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-6 text-slate-600 dark:text-slate-300 sm:text-base sm:leading-7">
          {data.demoGalleryDescription}
        </p>
      </div>

      <div className="relative mt-8 overflow-hidden">
        <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-20 w-8 bg-gradient-to-r from-white to-transparent dark:from-slate-950 sm:w-14 lg:w-20" />
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-20 w-8 bg-gradient-to-l from-white to-transparent dark:from-slate-950 sm:w-14 lg:w-20" />

        <div className="mobile-app-gallery-slider overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="mobile-app-gallery-track flex w-max items-center gap-5 px-1">
            {sliderScreens.map((screen, index) => (
              <GalleryPhoneCard
                key={`${screen.type}-${screen.demo.title}-${index}`}
                screen={screen}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .mobile-app-gallery-track {
          animation: mobileAppGalleryScroll 120s linear infinite;
          will-change: transform;
        }

        .mobile-app-gallery-slider:hover .mobile-app-gallery-track {
          animation-play-state: paused;
        }

        @keyframes mobileAppGalleryScroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 767px) {
          .mobile-app-gallery-track {
            animation-duration: 64s;
          }
        }
      `}</style>
      </MobileAppSectionShell>
    </div>
  );
}

function GalleryPhoneCard({ screen }: { screen: AppScreen }) {
  const demo = screen.demo;
  const Icon = demo.icon;
  const tone = getDemoTone(demo.accent);
  const accentTheme = getAccentTheme(tone);

  return (
    <div
      className="block shrink-0 text-left"
      style={{
        width: PHONE_WIDTH,
        minWidth: PHONE_WIDTH,
        maxWidth: PHONE_WIDTH,
        height: PHONE_HEIGHT,
        minHeight: PHONE_HEIGHT,
        maxHeight: PHONE_HEIGHT,
        flex: `0 0 ${PHONE_WIDTH}px`,
      }}
    >
      <div
        className="rounded-[2rem] border-[7px] border-slate-950 bg-slate-950 p-1.5 shadow-[0_24px_58px_rgba(15,23,42,0.18)] dark:border-slate-800"
        style={{
          width: PHONE_WIDTH,
          minWidth: PHONE_WIDTH,
          maxWidth: PHONE_WIDTH,
          height: PHONE_HEIGHT,
          minHeight: PHONE_HEIGHT,
          maxHeight: PHONE_HEIGHT,
        }}
      >
        <div
          className="w-full overflow-hidden rounded-[1.45rem] bg-white dark:bg-slate-950"
          style={{
            height: PHONE_INNER_HEIGHT,
            minHeight: PHONE_INNER_HEIGHT,
            maxHeight: PHONE_INNER_HEIGHT,
          }}
        >
          <PhoneStatusBar />

          <div
            className="flex flex-col px-4 pb-3 pt-2"
            style={{
              height: PHONE_CONTENT_HEIGHT,
              minHeight: PHONE_CONTENT_HEIGHT,
              maxHeight: PHONE_CONTENT_HEIGHT,
            }}
          >
            <ScreenHeader screen={screen} accentTheme={accentTheme} />

            <div className="relative mt-3 min-h-0 flex-1 overflow-hidden rounded-[1.15rem]">
              <div className="phone-premium-orb pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.13),transparent_42%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.10),transparent_38%)]" />
              <div className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent dark:via-white/15" />
              <div className="relative h-full">
                <PhoneScreenContent
                  screen={screen}
                  Icon={Icon}
                  tone={tone}
                  accentTheme={accentTheme}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PhoneStatusBar() {
  return (
    <div className="flex h-8 items-center justify-between px-5 pt-2 text-[8px] font-black text-slate-950 dark:text-white">
      <span className="tabular-nums">9:41</span>

      <span className="h-3.5 w-11 rounded-full bg-slate-950 dark:bg-slate-800" />

      <div className="flex items-center gap-1.5">
        <div className="flex items-end gap-0.5">
          <span className="h-1.5 w-0.5 rounded-full bg-slate-950/45 dark:bg-white/45" />
          <span className="h-2 w-0.5 rounded-full bg-slate-950/60 dark:bg-white/60" />
          <span className="h-2.5 w-0.5 rounded-full bg-slate-950/80 dark:bg-white/80" />
          <span className="h-3 w-0.5 rounded-full bg-slate-950 dark:bg-white" />
        </div>

        <svg
          viewBox="0 0 18 12"
          className="h-3 w-[18px] text-slate-950 dark:text-white"
          aria-hidden="true"
        >
          <path
            d="M1.2 6.7C3.3 4.9 5.9 3.9 9 3.9s5.7 1 7.8 2.8"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.6"
          />
          <path
            d="M4.2 8.8C5.5 7.7 7.1 7.1 9 7.1s3.5.6 4.8 1.7"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.6"
          />
          <circle cx="9" cy="10.1" r="1" fill="currentColor" />
        </svg>

        <div className="flex items-center">
          <div className="relative h-2.5 w-[18px] rounded-[3px] border border-slate-950/80 p-[1px] dark:border-white/85">
            <div className="h-full w-[72%] rounded-[2px] bg-slate-950 dark:bg-white" />
          </div>
          <span className="ml-[1px] h-1.5 w-0.5 rounded-r-sm bg-slate-950/80 dark:bg-white/85" />
        </div>
      </div>
    </div>
  );
}

function ScreenHeader({
  screen,
  accentTheme,
}: {
  screen: AppScreen;
  accentTheme: AccentTheme;
}) {
  if (screen.type === "login") {
    return (
      <div className="flex h-5 items-center justify-between">
        <span
          className={cn(
            "rounded-full border px-2.5 py-1 text-[8px] font-black uppercase tracking-[0.14em]",
            accentTheme.softBorder,
            accentTheme.buttonSoft,
            accentTheme.softText,
          )}
        >
          Welcome
        </span>
        <ShieldCheck className="h-3.5 w-3.5 text-slate-400" />
      </div>
    );
  }

  return (
    <div className="flex h-5 items-center justify-between">
      <ArrowLeft className="h-3.5 w-3.5 shrink-0 text-slate-500" />
      <h3 className="max-w-[170px] truncate text-center text-[11px] font-black text-slate-950 dark:text-white">
        {screen.label}
      </h3>
      <Bell className="h-3.5 w-3.5 shrink-0 text-slate-500" />
    </div>
  );
}

function PhoneScreenContent({
  screen,
  Icon,
  tone,
  accentTheme,
}: {
  screen: AppScreen;
  Icon: LucideIcon;
  tone: DemoTone;
  accentTheme: AccentTheme;
}) {
  switch (screen.type) {
    case "login":
      return (
        <LoginScreen
          screen={screen}
          Icon={Icon}
          tone={tone}
          accentTheme={accentTheme}
        />
      );

    case "tabHome":
      return (
        <BottomTabHomeScreen
          screen={screen}
          Icon={Icon}
          tone={tone}
          accentTheme={accentTheme}
        />
      );

    case "tabExplore":
      return <BottomTabExploreScreen screen={screen} accentTheme={accentTheme} />;

    case "tabRequests":
      return <BottomTabRequestsScreen screen={screen} accentTheme={accentTheme} />;

    case "tabProfile":
      return (
        <BottomTabProfileScreen
          screen={screen}
          Icon={Icon}
          tone={tone}
          accentTheme={accentTheme}
        />
      );

    case "search":
      return <SearchScreen screen={screen} accentTheme={accentTheme} />;

    case "detail":
      return (
        <DetailScreen
          screen={screen}
          Icon={Icon}
          tone={tone}
          accentTheme={accentTheme}
        />
      );

    case "form":
      return <RequestFormScreen screen={screen} accentTheme={accentTheme} />;

    case "tracking":
      return <TrackingScreen screen={screen} accentTheme={accentTheme} />;

    case "payment":
      return <PaymentScreen screen={screen} accentTheme={accentTheme} />;

    case "notifications":
      return <NotificationsScreen screen={screen} accentTheme={accentTheme} />;

    case "messages":
      return <MessagesScreen screen={screen} accentTheme={accentTheme} />;

    case "support":
      return <SupportScreen screen={screen} accentTheme={accentTheme} />;

    case "success":
      return (
        <SuccessScreen
          screen={screen}
          Icon={Icon}
          tone={tone}
          accentTheme={accentTheme}
        />
      );

    case "feedback":
      return (
        <FeedbackScreen
          screen={screen}
          Icon={Icon}
          tone={tone}
          accentTheme={accentTheme}
        />
      );

    default:
      return <SettingsScreen screen={screen} accentTheme={accentTheme} />;
  }
}

function LoginScreen({
  screen,
  Icon,
  tone,
  accentTheme,
}: {
  screen: AppScreen;
  Icon: LucideIcon;
  tone: DemoTone;
  accentTheme: AccentTheme;
}) {
  const demo = screen.demo;
  const profile = getIndustryProfile(demo);
  const visual = getIndustryVisualTone(profile);

  return (
    <div className="flex h-full flex-col">
      <ImageHero demo={demo} className="h-[138px]">
        <div className="relative flex h-full flex-col items-center justify-center px-4 text-center">
          <div className="relative">
            <div className={cn("absolute inset-0 rounded-2xl blur-xl", accentTheme.glow)} />
            <MobileAppIconBadge
              icon={Icon}
              tone={tone}
              className="relative h-12 w-12 rounded-2xl shadow-sm"
            />
          </div>

          <h3 className="mt-3 text-sm font-black text-slate-950 dark:text-white">
            {profile.appName}
          </h3>
          <p className="mt-1 line-clamp-2 max-w-[190px] text-[10px] font-semibold leading-4 text-slate-500 dark:text-slate-400">
            Secure access for {profile.dashboardTitle.toLowerCase()}.
          </p>
        </div>
      </ImageHero>

      <div className="mt-4 space-y-2">
        <FieldRow icon={UserRound} label="karan@example.com" />
        <FieldRow icon={LockKeyhole} label="••••••••••" />
      </div>

      <div className="mt-3 rounded-2xl border border-slate-100 bg-white/85 p-3 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/[0.05]">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[9px] font-black text-slate-700 dark:text-slate-200">
              {visual.topLine}
            </p>
            <p className="mt-0.5 text-[8px] font-semibold text-slate-400">
              Biometric access and encrypted profile
            </p>
          </div>
          <span className={cn("flex h-8 w-8 items-center justify-center rounded-xl", accentTheme.buttonSoft)}>
            <ShieldCheck className={cn("h-4 w-4", accentTheme.softText)} />
          </span>
        </div>
      </div>

      <div className="mt-auto space-y-2 pt-4">
        <PrimaryButton label="Log In" accentTheme={accentTheme} />
        <SecondaryButton label="Create Account" accentTheme={accentTheme} />
      </div>
    </div>
  );
}

function BottomTabHomeScreen({
  screen,
  Icon,
  tone,
  accentTheme,
}: {
  screen: AppScreen;
  Icon: LucideIcon;
  tone: DemoTone;
  accentTheme: AccentTheme;
}) {
  const demo = screen.demo;
  const profile = getIndustryProfile(demo);

  return (
    <div className="flex h-full flex-col">
      <RealWorldHero
        demo={demo}
        profile={profile}
        Icon={Icon}
        tone={tone}
        accentTheme={accentTheme}
      />

      <div className="mt-3">
        <FluidDashboardPanel profile={profile} accentTheme={accentTheme} />
      </div>

      <div className="mt-3">
        <RealWorldActionDock profile={profile} accentTheme={accentTheme} />
      </div>

      <BottomNav active="home" accentTheme={accentTheme} />
    </div>
  );
}

function BottomTabExploreScreen({
  screen,
  accentTheme,
}: {
  screen: AppScreen;
  accentTheme: AccentTheme;
}) {
  const demo = screen.demo;
  const profile = getIndustryProfile(demo);

  return (
    <div className="flex h-full flex-col">
      <RealSearchPreview profile={profile} accentTheme={accentTheme} />

      <div className="mt-3">
        <AppStoreStyleCard demo={demo} profile={profile} accentTheme={accentTheme} />
      </div>

      <div className="mt-3 flex gap-2 overflow-hidden">
        {profile.discoverCards.slice(1, 4).map((card, index) => (
          <span
            key={`${card}-${index}`}
            className={cn(
              "shrink-0 rounded-full px-3 py-2 text-[8px] font-black shadow-sm",
              index === 0
                ? [accentTheme.buttonSoft, accentTheme.softText].join(" ")
                : "bg-white/85 text-slate-500 backdrop-blur dark:bg-white/10 dark:text-slate-300",
            )}
          >
            {card}
          </span>
        ))}
      </div>

      <NativeActivityStream profile={profile} accentTheme={accentTheme} compact />

      <BottomNav active="explore" accentTheme={accentTheme} />
    </div>
  );
}

function BottomTabRequestsScreen({
  screen,
  accentTheme,
}: {
  screen: AppScreen;
  accentTheme: AccentTheme;
}) {
  const demo = screen.demo;
  const profile = getIndustryProfile(demo);

  return (
    <div className="flex h-full flex-col">
      <HeaderPanel
        icon={CalendarCheck}
        eyebrow={profile.screenTheme.status}
        title={profile.screenTheme.progressLabel}
        accentTheme={accentTheme}
      />

      <div className="mt-3">
        <AdvancedProgressOrbit profile={profile} accentTheme={accentTheme} />
      </div>

      <div className="mt-3">
        <NativeActivityStream profile={profile} accentTheme={accentTheme} compact />
      </div>

      <BottomNav active="requests" accentTheme={accentTheme} />
    </div>
  );
}

function BottomTabProfileScreen({
  screen,
  Icon,
  tone,
  accentTheme,
}: {
  screen: AppScreen;
  Icon: LucideIcon;
  tone: DemoTone;
  accentTheme: AccentTheme;
}) {
  const demo = screen.demo;
  const profile = getIndustryProfile(demo);

  return (
    <div className="flex h-full flex-col">
      <div className={cn("relative overflow-hidden rounded-[1.35rem] p-4 text-white", accentTheme.button)}>
        <div className="absolute -right-8 -top-10 h-28 w-28 rounded-full bg-white/20 blur-2xl" />
        <div className="relative flex items-center gap-3">
          <MobileAppIconBadge
            icon={Icon}
            tone={tone}
            className="h-14 w-14 rounded-3xl border border-white/40 bg-white/20 shadow-sm"
          />
          <div className="min-w-0">
            <h3 className="text-sm font-black text-white">{profile.appName}</h3>
            <p className="mt-1 line-clamp-2 text-[10px] font-semibold leading-4 text-white/75">
              Verified profile for {profile.dashboardTitle.toLowerCase()}.
            </p>
          </div>
        </div>
        <div className="relative mt-4 grid grid-cols-3 gap-2">
          <ProfileStat label={profile.primaryMetricLabel} value={profile.primaryMetric} />
          <ProfileStat label={profile.secondaryMetricLabel} value={profile.secondaryMetric} />
          <ProfileStat label={profile.tertiaryMetricLabel} value={profile.tertiaryMetric} />
        </div>
      </div>

      <div className="mt-3 space-y-2">
        {profile.settings.slice(0, 3).map((item, index) => (
          <ListRow
            key={`${item}-${index}`}
            icon={UserRound}
            title={item}
            subtitle={index === 0 ? "Primary setting" : "Account option"}
            action="›"
            active={index === 0}
            accentTheme={accentTheme}
          />
        ))}
      </div>

      <BottomNav active="profile" accentTheme={accentTheme} />
    </div>
  );
}

function ProfileStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/20 bg-white/15 px-2 py-2 text-center backdrop-blur-md">
      <p className="text-[12px] font-black text-white">{value}</p>
      <p className="mt-0.5 truncate text-[8px] font-black uppercase tracking-[0.08em] text-white/65">
        {label}
      </p>
    </div>
  );
}

function SearchScreen({
  screen,
  accentTheme,
}: {
  screen: AppScreen;
  accentTheme: AccentTheme;
}) {
  const demo = screen.demo;
  const profile = getIndustryProfile(demo);

  return (
    <div className="flex h-full flex-col">
      <RealSearchPreview profile={profile} accentTheme={accentTheme} />

      <div className="mt-3">
        <IndustryOperationsMatrix profile={profile} accentTheme={accentTheme} />
      </div>

      <div className="mt-3">
        <NativeActivityStream profile={profile} accentTheme={accentTheme} compact />
      </div>

      <BottomNav active="explore" accentTheme={accentTheme} />
    </div>
  );
}

function DetailScreen({
  screen,
  Icon,
  tone,
  accentTheme,
}: {
  screen: AppScreen;
  Icon: LucideIcon;
  tone: DemoTone;
  accentTheme: AccentTheme;
}) {
  const demo = screen.demo;
  const profile = getIndustryProfile(demo);

  return (
    <div className="flex h-full flex-col">
      <RealWorldHero
        demo={demo}
        profile={profile}
        Icon={Icon}
        tone={tone}
        accentTheme={accentTheme}
      />

      <div className="mt-3">
        <NativeActivityStream profile={profile} accentTheme={accentTheme} compact />
      </div>

      <div className="mt-3 rounded-[1.45rem] bg-white/90 px-4 py-3 shadow-[0_12px_30px_rgba(15,23,42,0.08)] backdrop-blur dark:bg-white/[0.06]">
        <div className="flex items-center gap-3">
          <MobileAppIconBadge
            icon={Icon}
            tone={tone}
            className="h-10 w-10 shrink-0 rounded-2xl shadow-sm"
          />
          <div className="min-w-0">
            <p className="line-clamp-1 text-[10px] font-black text-slate-800 dark:text-white">
              {profile.discoverCards[0]}
            </p>
            <p className="mt-1 line-clamp-2 text-[8px] font-semibold leading-3 text-slate-400">
              {profile.screenTheme.aiTask}
            </p>
          </div>
        </div>
      </div>

      <PrimaryButton label="Continue" accentTheme={accentTheme} />
    </div>
  );
}

function RequestFormScreen({
  screen,
  accentTheme,
}: {
  screen: AppScreen;
  accentTheme: AccentTheme;
}) {
  const demo = screen.demo;
  const profile = getIndustryProfile(demo);

  return (
    <div className="flex h-full flex-col">
      <HeaderPanel
        icon={CalendarCheck}
        eyebrow={profile.screenTheme.mode}
        title={profile.formFields[0]?.value ?? demo.title}
        accentTheme={accentTheme}
      />

      <DocumentStack accentTheme={accentTheme} profile={profile} />

      <div className="mt-3 rounded-[1.45rem] bg-white/92 px-4 py-2 shadow-[0_12px_30px_rgba(15,23,42,0.09)] backdrop-blur dark:bg-white/[0.06]">
        {profile.formFields.slice(0, 3).map((field) => (
          <FormSheetField
            key={field.label}
            label={field.label}
            value={field.value}
            accentTheme={accentTheme}
          />
        ))}
      </div>

      <div className="mt-3">
        <IndustryControlPanel profile={profile} accentTheme={accentTheme} />
      </div>

      <PrimaryButton label="Submit Request" accentTheme={accentTheme} />
    </div>
  );
}

function TrackingScreen({
  screen,
  accentTheme,
}: {
  screen: AppScreen;
  accentTheme: AccentTheme;
}) {
  const demo = screen.demo;
  const profile = getIndustryProfile(demo);
  const visual = getIndustryVisualTone(profile);

  return (
    <div className="flex h-full flex-col">
      <div className="relative flex-1 overflow-hidden rounded-[1.35rem] border border-slate-100 bg-[#f5f7fb] dark:border-white/10 dark:bg-slate-900">
        <div
          className="absolute inset-x-0 top-0 h-28 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${demo.image})` }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/80 dark:to-slate-950/90" />

        <IndustryTrackingVisual profile={profile} accentTheme={accentTheme} />

        <div className="absolute right-3 top-3 rounded-xl border border-white/70 bg-white/80 px-2.5 py-2 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-slate-950/70">
          <MapPin className={cn("h-4 w-4", accentTheme.softText)} />
        </div>

        <div className="absolute bottom-3 left-3 right-3 rounded-xl bg-white p-3 shadow-[0_12px_28px_rgba(15,23,42,0.12)] dark:bg-slate-950">
          <p className="line-clamp-1 text-[9px] font-black text-slate-950 dark:text-white">
            {visual.midLine}
          </p>
          <p className="mt-1 line-clamp-2 text-[8px] font-semibold text-slate-500 dark:text-slate-400">
            {visual.bottomLine}
          </p>

          <div className="mt-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Truck className={cn("h-4 w-4", accentTheme.softText)} />
              <span className="text-[8px] font-black text-slate-700 dark:text-slate-200">
                Live Status
              </span>
            </div>

            <span
              className={cn(
                "rounded-full px-2 py-1 text-[8px] font-black",
                accentTheme.buttonSoft,
                accentTheme.softText,
              )}
            >
              Active
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function PaymentScreen({
  screen,
  accentTheme,
}: {
  screen: AppScreen;
  accentTheme: AccentTheme;
}) {
  const profile = getIndustryProfile(screen.demo);

  return (
    <div className="flex h-full flex-col">
      <RealPaymentPass profile={profile} accentTheme={accentTheme} />

      <div className="mt-3">
        <RealWorldReceipt profile={profile} accentTheme={accentTheme} />
      </div>

      <div className="mt-3 flex gap-2">
        <GlassActionCard icon={CreditCard} title="Pay now" subtitle="Instant" accentTheme={accentTheme} />
        <GlassActionCard icon={ShieldCheck} title="Protected" subtitle="Secure" accentTheme={accentTheme} />
      </div>

      <PrimaryButton label="Pay Now" accentTheme={accentTheme} />
    </div>
  );
}

function NotificationsScreen({
  screen,
  accentTheme,
}: {
  screen: AppScreen;
  accentTheme: AccentTheme;
}) {
  const demo = screen.demo;
  const profile = getIndustryProfile(demo);

  return (
    <div className="flex h-full flex-col">
      <HeaderPanel
        icon={Bell}
        eyebrow="Smart Alerts"
        title="Priority Updates"
        accentTheme={accentTheme}
      />

      <div className="mt-3">
        <AssistantPulseCard demo={demo} accentTheme={accentTheme} />
      </div>

      <div className="mt-3">
        <IndustryNotificationStack profile={profile} accentTheme={accentTheme} />
      </div>

      <BottomNav active="requests" accentTheme={accentTheme} />
    </div>
  );
}

function MessagesScreen({
  screen,
  accentTheme,
}: {
  screen: AppScreen;
  accentTheme: AccentTheme;
}) {
  const demo = screen.demo;
  const profile = getIndustryProfile(demo);

  return (
    <div className="flex h-full flex-col">
      <HeaderPanel
        icon={MessageCircle}
        eyebrow="Inbox"
        title={`${profile.appName} Assistant`}
        accentTheme={accentTheme}
      />

      {profile.chat.map((message, index) => (
        <ChatBubble
          key={`${message.text}-${index}`}
          align={message.align}
          text={message.text}
          accentTheme={message.align === "right" ? accentTheme : undefined}
          avatar={message.avatar}
        />
      ))}

      <MessageInput />
    </div>
  );
}

function SupportScreen({
  screen,
  accentTheme,
}: {
  screen: AppScreen;
  accentTheme: AccentTheme;
}) {
  const demo = screen.demo;
  const profile = getIndustryProfile(demo);

  return (
    <div className="flex h-full flex-col">
      <HeaderPanel
        icon={Headphones}
        eyebrow="Support Hub"
        title="AI + Human Help"
        accentTheme={accentTheme}
      />

      <div className="mt-3">
        <AssistantPulseCard demo={demo} accentTheme={accentTheme} />
      </div>

      <div className="mt-3 space-y-2">
        {profile.supportCards.slice(0, 2).map((card, index) => (
          <SupportCard
            key={`${card}-${index}`}
            title={card}
            subtitle={index === 0 ? "Priority help available" : "Instant guide"}
            active={index === 0}
            accentTheme={accentTheme}
          />
        ))}
      </div>

      <MessageInput />
    </div>
  );
}

function SuccessScreen({
  screen,
  Icon,
  tone,
  accentTheme,
}: {
  screen: AppScreen;
  Icon: LucideIcon;
  tone: DemoTone;
  accentTheme: AccentTheme;
}) {
  const demo = screen.demo;
  const profile = getIndustryProfile(demo);

  return (
    <div className="flex h-full flex-col">
      <ImageHero demo={demo} className="flex-1">
        <div className="relative flex h-full flex-col items-center justify-center px-4 text-center">
          <div className="relative">
            <div className={cn("absolute inset-0 rounded-full blur-2xl", accentTheme.glow)} />
            <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-sm dark:bg-white/10">
              <CheckCircle2 className={cn("h-9 w-9", accentTheme.softText)} />
            </div>
          </div>

          <h3 className="mt-5 text-sm font-black leading-5 text-slate-950 dark:text-white">
            {profile.successTitle}
          </h3>

          <p className="mt-2 line-clamp-3 max-w-[200px] text-[10px] font-semibold leading-4 text-slate-500 dark:text-slate-400">
            Your {profile.appName.toLowerCase()} request is now synced.
          </p>

          <div className="mt-4 w-full rounded-2xl border border-white/70 bg-white/75 p-3 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/10">
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-black text-slate-500">{profile.screenTheme.status}</span>
              <span className={cn("text-[9px] font-black", accentTheme.softText)}>#HNX-2048</span>
            </div>
            <div className="mt-2 flex items-center justify-between gap-3">
              <MobileAppIconBadge
                icon={Icon}
                tone={tone}
                className="h-9 w-9 rounded-2xl"
              />
              <div className="min-w-0 flex-1 text-left">
                <p className="truncate text-[9px] font-black text-slate-700 dark:text-white">
                  {profile.screenTheme.artifact}
                </p>
                <p className="mt-0.5 truncate text-[8px] font-semibold text-slate-400">
                  Securely synced
                </p>
              </div>
            </div>
          </div>
        </div>
      </ImageHero>

      <PrimaryButton label="Track Status" accentTheme={accentTheme} />
    </div>
  );
}

function FeedbackScreen({
  screen,
  Icon,
  tone,
  accentTheme,
}: {
  screen: AppScreen;
  Icon: LucideIcon;
  tone: DemoTone;
  accentTheme: AccentTheme;
}) {
  const demo = screen.demo;
  const profile = getIndustryProfile(demo);

  return (
    <div className="flex h-full flex-col">
      <div className="flex flex-1 flex-col rounded-[1.35rem] border border-slate-100 bg-white px-4 py-5 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
        <MobileAppIconBadge
          icon={Icon}
          tone={tone}
          className="mx-auto h-12 w-12 rounded-2xl"
        />

        <h3 className="mt-4 text-center text-sm font-black leading-5 text-slate-950 dark:text-white">
          Rate {profile.appName}
        </h3>

        <p className="mt-2 text-center text-[10px] font-semibold leading-4 text-slate-500 dark:text-slate-400">
          How was your {profile.heroLabel.toLowerCase()} experience?
        </p>

        <div className="mt-5 flex items-center justify-center gap-1.5">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              className="h-4 w-4 fill-amber-400 text-amber-400"
            />
          ))}
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2">
          {profile.feedbackTags.map((item, index) => (
            <span
              key={`${item}-${index}`}
              className={cn(
                "rounded-full border px-2 py-1.5 text-center text-[8px] font-black",
                index === 0
                  ? [accentTheme.softBorder, accentTheme.buttonSoft, accentTheme.softText].join(" ")
                  : "border-slate-100 bg-slate-50 text-slate-400 dark:border-white/10 dark:bg-white/10",
              )}
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-4 rounded-xl border border-slate-100 bg-slate-50 px-3 py-3 text-[9px] font-medium text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-400">
          Write a review about {profile.dashboardTitle.toLowerCase()}...
        </div>

        <PrimaryButton label="Submit Review" accentTheme={accentTheme} />
      </div>
    </div>
  );
}

function SettingsScreen({
  screen,
  accentTheme,
}: {
  screen: AppScreen;
  accentTheme: AccentTheme;
}) {
  const profile = getIndustryProfile(screen.demo);

  return (
    <div className="flex h-full flex-col">
      <HeaderPanel
        icon={Settings}
        eyebrow="App Settings"
        title={`${profile.appName} Preferences`}
        accentTheme={accentTheme}
      />

      <div className="mt-4 space-y-2">
        {profile.settings.map((item, index) => (
          <SettingsRow
            key={`${item}-${index}`}
            title={item}
            subtitle={index === 0 ? "Enabled" : "Manage option"}
            enabled={index <= 1}
            accentTheme={accentTheme}
          />
        ))}
      </div>

      <BottomNav active="profile" accentTheme={accentTheme} />
    </div>
  );
}


function RealWorldHero({
  demo,
  profile,
  Icon,
  tone,
  accentTheme,
}: {
  demo: IndustryMobileAppDemo;
  profile: IndustryProfile;
  Icon: LucideIcon;
  tone: DemoTone;
  accentTheme: AccentTheme;
}) {
  void accentTheme;

  return (
    <div className="relative h-[172px] overflow-hidden rounded-[1.6rem] bg-slate-950 shadow-[0_18px_40px_rgba(15,23,42,0.18)]">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80"
        style={{ backgroundImage: `url(${demo.image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/82 via-slate-950/34 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/88 to-transparent" />

      <div className="relative flex h-full flex-col justify-between p-4 text-white">
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-white/18 px-2.5 py-1 text-[8px] font-black uppercase tracking-[0.12em] text-white backdrop-blur-md">
            {profile.screenTheme.mode}
          </span>
          <MobileAppIconBadge
            icon={Icon}
            tone={tone}
            className="h-9 w-9 rounded-2xl border border-white/30 bg-white/20 shadow-sm"
          />
        </div>

        <div>
          <p className="text-[9px] font-black uppercase tracking-[0.14em] text-white/65">
            {profile.heroLabel}
          </p>
          <h3 className="mt-1 line-clamp-2 text-lg font-black leading-5 text-white">
            {profile.dashboardTitle}
          </h3>

          <div className="mt-3 flex items-center gap-2">
            <span className="rounded-full bg-white/18 px-2.5 py-1 text-[8px] font-black text-white backdrop-blur-md">
              {profile.primaryMetricLabel}: {profile.primaryMetric}
            </span>
            <span className="rounded-full bg-white/18 px-2.5 py-1 text-[8px] font-black text-white backdrop-blur-md">
              {profile.screenTheme.status}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function FluidDashboardPanel({
  profile,
  accentTheme,
}: {
  profile: IndustryProfile;
  accentTheme: AccentTheme;
}) {
  const bars =
    profile.key === "manufacturing"
      ? [84, 52, 78, 92, 64, 88]
      : profile.key === "finance"
        ? [32, 48, 43, 64, 78, 92]
        : profile.key === "healthcare"
          ? [64, 74, 58, 86, 76, 94]
          : [52, 68, 44, 82, 74, 88];

  return (
    <div className="relative h-[112px] overflow-hidden rounded-[1.55rem] bg-slate-950 px-4 py-3 text-white shadow-[0_14px_32px_rgba(15,23,42,0.16)]">
      <div className={cn("absolute -right-8 -top-8 h-24 w-24 rounded-full blur-2xl", accentTheme.glow)} />
      <div className="absolute -bottom-10 left-8 h-24 w-24 rounded-full bg-white/10 blur-2xl" />

      <div className="relative flex items-start justify-between">
        <div>
          <p className="text-[8px] font-black uppercase tracking-[0.14em] text-white/55">
            {profile.screenTheme.progressLabel}
          </p>
          <p className="mt-1 text-xl font-black">{profile.primaryMetric}</p>
        </div>
        <span className="rounded-full bg-white/15 px-2 py-1 text-[8px] font-black text-white backdrop-blur">
          Live
        </span>
      </div>

      <div className="relative mt-3 flex h-10 items-end gap-1.5">
        {bars.map((height, index) => (
          <span
            key={`${height}-${index}`}
            className={cn("w-full rounded-t-md", index > 3 ? "bg-white" : "bg-white/28")}
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
    </div>
  );
}

function RealWorldActionDock({
  profile,
  accentTheme,
}: {
  profile: IndustryProfile;
  accentTheme: AccentTheme;
}) {
  const actions = profile.quickActions.slice(0, 4);

  return (
    <div className="flex items-center justify-between gap-2 rounded-[1.45rem] bg-white/90 px-2.5 py-2.5 shadow-[0_12px_32px_rgba(15,23,42,0.10)] backdrop-blur dark:bg-white/[0.07]">
      {actions.map((action, index) => {
        const Icon = [Home, Search, Package, UserRound][index % 4];

        return (
          <div key={`${action}-${index}`} className="min-w-0 flex-1 text-center">
            <span
              className={cn(
                "mx-auto flex h-9 w-9 items-center justify-center rounded-2xl",
                index === 0 ? accentTheme.button : "bg-slate-100 text-slate-500 dark:bg-white/10 dark:text-slate-300",
              )}
            >
              <Icon className={cn("h-4 w-4", index === 0 ? "text-white" : "")} />
            </span>
            <p className="mt-1 truncate text-[8px] font-black text-slate-500 dark:text-slate-300">
              {action}
            </p>
          </div>
        );
      })}
    </div>
  );
}

function NativeActivityStream({
  profile,
  accentTheme,
  compact = false,
}: {
  profile: IndustryProfile;
  accentTheme: AccentTheme;
  compact?: boolean;
}) {
  return (
    <div className="rounded-[1.45rem] bg-white/88 px-3 py-3 shadow-[0_12px_30px_rgba(15,23,42,0.08)] backdrop-blur dark:bg-white/[0.06]">
      {profile.activitySteps.slice(0, compact ? 3 : 4).map((step, index) => (
        <div
          key={`${step}-${index}`}
          className={cn(
            "flex items-center gap-3",
            index !== 0 && "mt-3 border-t border-slate-100 pt-3 dark:border-white/10",
          )}
        >
          <span
            className={cn(
              "flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[8px] font-black",
              index < 2
                ? [accentTheme.buttonSoft, accentTheme.softText].join(" ")
                : "bg-slate-100 text-slate-400 dark:bg-white/10",
            )}
          >
            {index + 1}
          </span>

          <div className="min-w-0 flex-1">
            <p className="truncate text-[9px] font-black text-slate-700 dark:text-white">
              {step}
            </p>
            <p className="mt-0.5 truncate text-[8px] font-semibold text-slate-400">
              {index === 0 ? profile.screenTheme.status : profile.screenTheme.aiTask}
            </p>
          </div>

          <span className={cn("h-2 w-2 rounded-full", index < 2 ? "bg-emerald-500" : "bg-slate-300 dark:bg-white/20")} />
        </div>
      ))}
    </div>
  );
}

function RealSearchPreview({
  profile,
  accentTheme,
}: {
  profile: IndustryProfile;
  accentTheme: AccentTheme;
}) {
  return (
    <div className="overflow-hidden rounded-[1.55rem] bg-white shadow-[0_14px_34px_rgba(15,23,42,0.10)] dark:bg-white/[0.06]">
      <div className="px-3 py-3">
        <div className="flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2 dark:bg-white/10">
          <Search className="h-3.5 w-3.5 shrink-0 text-slate-400" />
          <span className="truncate text-[9px] font-semibold text-slate-400">
            Search {profile.searchFilters.join(", ").toLowerCase()}...
          </span>
        </div>
      </div>

      <div className="flex gap-2 overflow-hidden px-3 pb-3">
        {profile.searchFilters.map((filter, index) => (
          <span
            key={`${filter}-${index}`}
            className={cn(
              "shrink-0 rounded-full px-3 py-1.5 text-[8px] font-black",
              index === 0 ? [accentTheme.buttonSoft, accentTheme.softText].join(" ") : "bg-slate-100 text-slate-400 dark:bg-white/10",
            )}
          >
            {filter}
          </span>
        ))}
      </div>
    </div>
  );
}

function AppStoreStyleCard({
  demo,
  profile,
  accentTheme,
}: {
  demo: IndustryMobileAppDemo;
  profile: IndustryProfile;
  accentTheme: AccentTheme;
}) {
  void accentTheme;

  return (
    <div className="relative h-[150px] overflow-hidden rounded-[1.6rem] bg-slate-950 shadow-[0_18px_42px_rgba(15,23,42,0.18)]">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80"
        style={{ backgroundImage: `url(${demo.image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/92 via-slate-950/35 to-slate-950/10" />

      <div className="relative flex h-full flex-col justify-end p-4 text-white">
        <span className="mb-2 w-fit rounded-full bg-white/18 px-2.5 py-1 text-[8px] font-black text-white backdrop-blur">
          {profile.screenTheme.mode}
        </span>
        <h3 className="line-clamp-2 text-base font-black leading-5 text-white">
          {profile.discoverCards[0]}
        </h3>
        <p className="mt-1 line-clamp-1 text-[9px] font-semibold text-white/65">
          {profile.screenTheme.aiTask}
        </p>
      </div>
    </div>
  );
}

function FormSheetField({
  label,
  value,
  accentTheme,
}: {
  label: string;
  value: string;
  accentTheme: AccentTheme;
}) {
  return (
    <div className="border-b border-slate-100 py-2.5 last:border-b-0 dark:border-white/10">
      <div className="flex items-center justify-between gap-2">
        <div className="min-w-0">
          <p className="text-[8px] font-black uppercase tracking-[0.12em] text-slate-400">
            {label}
          </p>
          <p className="mt-1 truncate text-[10px] font-black text-slate-800 dark:text-white">
            {value}
          </p>
        </div>
        <span className={cn("rounded-full px-2.5 py-1 text-[8px] font-black", accentTheme.buttonSoft, accentTheme.softText)}>
          Edit
        </span>
      </div>
    </div>
  );
}

function RealPaymentPass({
  profile,
  accentTheme,
}: {
  profile: IndustryProfile;
  accentTheme: AccentTheme;
}) {
  return (
    <div className={cn("relative h-[176px] overflow-hidden rounded-[1.65rem] p-4 text-white shadow-[0_20px_46px_rgba(15,23,42,0.20)]", accentTheme.button)}>
      <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/22 blur-2xl" />
      <div className="absolute -bottom-8 left-5 h-24 w-24 rounded-full bg-white/12 blur-2xl" />

      <div className="relative flex items-center justify-between">
        <p className="text-[9px] font-black uppercase tracking-[0.14em] text-white/75">
          {profile.walletLabel}
        </p>
        <CreditCard className="h-6 w-6 text-white" />
      </div>

      <p className="relative mt-5 text-3xl font-black">
        {profile.receiptRows[profile.receiptRows.length - 1]?.[1] ?? "$245.60"}
      </p>
      <p className="relative mt-1 text-[9px] font-bold text-white/70">
        {profile.screenTheme.status}
      </p>

      <div className="relative mt-5 flex items-center justify-between rounded-2xl border border-white/20 bg-white/14 px-3 py-2 backdrop-blur-md">
        <span className="text-[9px] font-black text-white/80">•••• 4829</span>
        <span className="text-[8px] font-black text-white/70">VERIFIED</span>
      </div>
    </div>
  );
}

function RealWorldReceipt({
  profile,
  accentTheme,
}: {
  profile: IndustryProfile;
  accentTheme: AccentTheme;
}) {
  return (
    <div className="rounded-[1.45rem] bg-white/92 px-4 py-3 shadow-[0_12px_30px_rgba(15,23,42,0.09)] backdrop-blur dark:bg-white/[0.06]">
      {profile.receiptRows.map(([label, value], index) => (
        <div
          key={`${label}-${index}`}
          className={cn(
            "flex items-center justify-between",
            index !== 0 && "mt-2 border-t border-slate-100 pt-2 dark:border-white/10",
          )}
        >
          <span className="text-[9px] font-bold text-slate-500 dark:text-slate-300">
            {label}
          </span>
          <span className={cn("text-[9px] font-black", index === profile.receiptRows.length - 1 ? accentTheme.softText : "text-slate-700 dark:text-white")}>
            {value}
          </span>
        </div>
      ))}
    </div>
  );
}

function ImageHero({
  demo,
  className,
  children,
}: {
  demo: IndustryMobileAppDemo;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[1.35rem] border border-slate-100 bg-slate-50 shadow-sm dark:border-white/10 dark:bg-white/[0.04]",
        className,
      )}
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-45"
        style={{ backgroundImage: `url(${demo.image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-white/68 via-white/88 to-white dark:from-slate-950/65 dark:via-slate-950/85 dark:to-slate-950" />

      <div className="absolute right-3 top-3 flex h-8 w-12 items-center justify-center rounded-xl border border-white/70 bg-white/65 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/10">
        <div className="h-2 w-7 rounded-full bg-slate-300/80 dark:bg-white/25" />
      </div>

      <div className="absolute bottom-3 left-3 flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-full bg-emerald-500" />
        <span className="text-[8px] font-black uppercase tracking-[0.14em] text-slate-500">
          Live
        </span>
      </div>

      {children}
    </div>
  );
}

export function ImageTile({
  demo,
  label,
  active,
  accentTheme,
}: {
  demo: IndustryMobileAppDemo;
  label: string;
  active: boolean;
  accentTheme: AccentTheme;
}) {
  return (
    <div
      className={cn(
        "relative h-[82px] overflow-hidden rounded-2xl border p-2 shadow-sm",
        active
          ? [accentTheme.softBorder, accentTheme.softBg].join(" ")
          : "border-slate-100 bg-slate-50 dark:border-white/10 dark:bg-white/[0.04]",
      )}
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-45"
        style={{ backgroundImage: `url(${demo.image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/75 to-white dark:from-slate-950/35 dark:via-slate-950/75 dark:to-slate-950" />

      <div className="relative flex h-full flex-col justify-between">
        <div className="flex items-center justify-between">
          <span
            className={cn(
              "rounded-full px-2 py-1 text-[8px] font-black",
              active
                ? [accentTheme.buttonSoft, accentTheme.softText].join(" ")
                : "bg-white text-slate-500 dark:bg-white/10 dark:text-slate-300",
            )}
          >
            {active ? "Popular" : "New"}
          </span>

          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/80 shadow-sm dark:bg-white/10">
            <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
          </span>
        </div>

        <div>
          <p className="line-clamp-1 text-[9px] font-black text-slate-800 dark:text-white">
            {label}
          </p>

          <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/80 dark:bg-white/10">
            <div
              className={cn(
                "h-full rounded-full",
                active ? accentTheme.button : "bg-slate-300 dark:bg-white/20",
              )}
              style={{ width: active ? "78%" : "48%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function HeaderPanel({
  icon: Icon,
  eyebrow,
  title,
  accentTheme,
}: {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  accentTheme: AccentTheme;
}) {
  return (
    <div className="relative overflow-hidden rounded-[1.55rem] bg-white/90 px-4 py-4 shadow-[0_14px_34px_rgba(15,23,42,0.09)] backdrop-blur dark:bg-white/[0.06]">
      <div className={cn("absolute -right-8 -top-8 h-24 w-24 rounded-full blur-2xl", accentTheme.glow)} />
      <div className="relative flex items-center gap-3">
        <div className={cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl", accentTheme.buttonSoft)}>
          <Icon className={cn("h-5 w-5", accentTheme.softText)} />
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-[9px] font-black uppercase tracking-[0.12em] text-slate-500">
            {eyebrow}
          </p>
          <h3 className="truncate text-sm font-black text-slate-950 dark:text-white">
            {title}
          </h3>
        </div>

        <div className="flex h-10 w-14 shrink-0 items-end gap-1 rounded-2xl bg-slate-100/80 px-1.5 py-2 dark:bg-white/10">
          {[35, 58, 44, 74].map((height, index) => (
            <span
              key={`${height}-${index}`}
              className={cn("w-full rounded-t", index === 3 ? accentTheme.button : "bg-slate-300/70 dark:bg-white/20")}
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function FieldRow({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-slate-100 bg-slate-50 px-3 py-2.5 dark:border-white/10 dark:bg-white/5">
      <Icon className="h-3.5 w-3.5 shrink-0 text-slate-400" />
      <span className="truncate text-[9px] font-bold text-slate-400">
        {label}
      </span>
    </div>
  );
}

export function SearchBar({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-slate-100 bg-slate-50 px-3 py-2.5 text-[9px] font-semibold text-slate-400 dark:border-white/10 dark:bg-white/5">
      <Search className="h-3.5 w-3.5 shrink-0" />
      <span className="truncate">{label}</span>
    </div>
  );
}

export function MiniGridCard({
  icon: Icon,
  label,
  active = false,
  accentTheme,
}: {
  icon: LucideIcon;
  label: string;
  active?: boolean;
  accentTheme: AccentTheme;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border px-2 py-3 text-center shadow-sm",
        active
          ? [accentTheme.softBorder, accentTheme.softBg].join(" ")
          : "border-slate-100 bg-white dark:border-white/10 dark:bg-white/[0.04]",
      )}
    >
      <div
        className={cn(
          "mx-auto flex h-8 w-8 items-center justify-center rounded-xl shadow-sm",
          active ? accentTheme.buttonSoft : "bg-slate-50 dark:bg-white/10",
        )}
      >
        <Icon
          className={cn(
            "h-4 w-4",
            active ? accentTheme.softText : "text-slate-700 dark:text-slate-200",
          )}
        />
      </div>

      <p className="mt-2 truncate text-[9px] font-black text-slate-700 dark:text-slate-200">
        {label}
      </p>

      {active ? (
        <div className="mx-auto mt-1.5 h-1 w-10 overflow-hidden rounded-full bg-white/80 dark:bg-white/10">
          <div className={cn("h-full w-[70%] rounded-full", accentTheme.button)} />
        </div>
      ) : null}
    </div>
  );
}

function ListRow({
  icon: Icon,
  title,
  subtitle,
  action,
  active,
  accentTheme,
}: {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  action: string;
  active: boolean;
  accentTheme: AccentTheme;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border px-3 py-2.5 shadow-sm",
        active
          ? [accentTheme.softBorder, accentTheme.softBg].join(" ")
          : "border-slate-100 bg-white dark:border-white/10 dark:bg-white/[0.04]",
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex min-w-0 items-center gap-2">
          <div
            className={cn(
              "flex h-8 w-8 shrink-0 items-center justify-center rounded-xl shadow-sm",
              active ? accentTheme.buttonSoft : "bg-slate-50 dark:bg-white/10",
            )}
          >
            <Icon
              className={cn(
                "h-4 w-4",
                active ? accentTheme.softText : "text-slate-500",
              )}
            />
          </div>

          <div className="min-w-0">
            <p className="truncate text-[9px] font-black text-slate-700 dark:text-slate-200">
              {title}
            </p>
            <p className="mt-0.5 truncate text-[8px] font-semibold text-slate-400">
              {subtitle}
            </p>
          </div>
        </div>

        <span
          className={cn(
            "shrink-0 rounded-full px-2 py-1 text-[8px] font-black",
            active
              ? [accentTheme.buttonSoft, accentTheme.softText].join(" ")
              : "bg-slate-50 text-slate-400 dark:bg-white/10",
          )}
        >
          {action}
        </span>
      </div>

      {active ? (
        <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/70 dark:bg-white/10">
          <div className={cn("h-full w-[72%] rounded-full", accentTheme.button)} />
        </div>
      ) : null}
    </div>
  );
}

export function FeatureRow({
  label,
  active,
  accentTheme,
}: {
  label: string;
  active: boolean;
  accentTheme: AccentTheme;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-xl border px-3 py-2.5 shadow-sm",
        active
          ? [accentTheme.softBorder, accentTheme.softBg].join(" ")
          : "border-slate-100 bg-white dark:border-white/10 dark:bg-white/[0.04]",
      )}
    >
      <CheckCircle2
        className={cn(
          "h-4 w-4 shrink-0",
          active ? accentTheme.softText : "text-slate-400",
        )}
      />
      <span className="truncate text-[9px] font-black text-slate-700 dark:text-slate-200">
        {label}
      </span>
    </div>
  );
}

export function TimelineRow({
  title,
  subtitle,
  done,
  accentTheme,
}: {
  title: string;
  subtitle: string;
  done: boolean;
  accentTheme: AccentTheme;
}) {
  return (
    <div className="flex gap-2 rounded-xl border border-slate-100 bg-white px-3 py-2.5 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
      <div
        className={cn(
          "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full",
          done ? [accentTheme.buttonSoft, accentTheme.softText].join(" ") : "bg-slate-50 text-slate-400",
        )}
      >
        <CheckCircle2 className="h-3.5 w-3.5" />
      </div>
      <div className="min-w-0">
        <p className="truncate text-[9px] font-black text-slate-700 dark:text-slate-200">
          {title}
        </p>
        <p className="mt-0.5 truncate text-[8px] font-semibold text-slate-400">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

export function SearchResultRow({
  title,
  subtitle,
  active,
  accentTheme,
}: {
  title: string;
  subtitle: string;
  active: boolean;
  accentTheme: AccentTheme;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-xl border px-3 py-2.5 shadow-sm",
        active
          ? [accentTheme.softBorder, accentTheme.softBg].join(" ")
          : "border-slate-100 bg-white dark:border-white/10 dark:bg-white/[0.04]",
      )}
    >
      <div
        className={cn(
          "flex h-8 w-8 shrink-0 items-center justify-center rounded-xl",
          active ? accentTheme.buttonSoft : "bg-slate-50 dark:bg-white/10",
        )}
      >
        <Search className={cn("h-4 w-4", active ? accentTheme.softText : "text-slate-400")} />
      </div>

      <div className="min-w-0 flex-1">
        <p className="truncate text-[9px] font-black text-slate-700 dark:text-slate-200">
          {title}
        </p>
        <p className="mt-0.5 truncate text-[8px] font-semibold text-slate-400">
          {subtitle}
        </p>
      </div>

      <SlidersHorizontal className="h-3.5 w-3.5 text-slate-300" />
    </div>
  );
}

export function FormField({
  label,
  value,
  accentTheme,
}: {
  label: string;
  value: string;
  accentTheme: AccentTheme;
}) {
  return (
    <div className="rounded-xl border border-slate-100 bg-white px-3 py-2.5 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
      <p className="text-[8px] font-black uppercase tracking-[0.12em] text-slate-400">
        {label}
      </p>
      <div className="mt-1 flex items-center justify-between">
        <span className="max-w-[170px] truncate text-[9px] font-black text-slate-700 dark:text-slate-200">
          {value}
        </span>
        <span className={cn("rounded-full px-2 py-1 text-[8px] font-black", accentTheme.buttonSoft, accentTheme.softText)}>
          Edit
        </span>
      </div>
    </div>
  );
}

export function NotificationRow({
  index,
  label,
  accentTheme,
}: {
  index: number;
  label: string;
  accentTheme: AccentTheme;
}) {
  const active = index === 0;

  return (
    <div
      className={cn(
        "rounded-xl border px-3 py-2.5 shadow-sm",
        active
          ? [accentTheme.softBorder, accentTheme.softBg].join(" ")
          : "border-slate-100 bg-white dark:border-white/10 dark:bg-white/[0.04]",
      )}
    >
      <div className="flex items-start gap-2">
        <span
          className={cn(
            "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[8px] font-black",
            active
              ? [accentTheme.buttonSoft, accentTheme.softText].join(" ")
              : "bg-slate-50 text-slate-400 dark:bg-white/10",
          )}
        >
          {index + 1}
        </span>

        <div className="min-w-0">
          <p className="line-clamp-2 text-[9px] font-black leading-4 text-slate-700 dark:text-slate-200">
            {label}
          </p>
          <p className="mt-1 text-[8px] font-semibold text-slate-400">
            {index + 1} min ago
          </p>
        </div>
      </div>
    </div>
  );
}

function ChatBubble({
  align,
  text,
  avatar,
  accentTheme,
}: {
  align: "left" | "right";
  text: string;
  avatar: string;
  accentTheme?: AccentTheme;
}) {
  const isRight = align === "right";

  return (
    <div className={cn("mt-3 flex items-end gap-2", isRight && "justify-end")}>
      {!isRight ? (
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-100 text-[8px] font-black text-slate-500">
          {avatar}
        </span>
      ) : null}

      <div
        className={cn(
          "max-w-[78%] rounded-2xl px-3 py-2 text-[9px] font-semibold leading-4",
          isRight
            ? [
                "rounded-tr-sm text-white",
                accentTheme?.button ?? "bg-blue-600",
              ].join(" ")
            : "rounded-tl-sm bg-slate-100 text-slate-600 dark:bg-white/10 dark:text-slate-300",
        )}
      >
        {text}
      </div>

      {isRight ? (
        <span
          className={cn(
            "flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[8px] font-black",
            accentTheme?.buttonSoft ?? "bg-blue-100",
            accentTheme?.softText ?? "text-blue-700",
          )}
        >
          {avatar}
        </span>
      ) : null}
    </div>
  );
}

function SupportCard({
  title,
  subtitle,
  active,
  accentTheme,
}: {
  title: string;
  subtitle: string;
  active: boolean;
  accentTheme: AccentTheme;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border p-3 shadow-sm",
        active
          ? [accentTheme.softBorder, accentTheme.softBg].join(" ")
          : "border-slate-100 bg-white dark:border-white/10 dark:bg-white/[0.04]",
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-xl",
              active ? accentTheme.buttonSoft : "bg-slate-50 dark:bg-white/10",
            )}
          >
            <Headphones className={cn("h-4 w-4", active ? accentTheme.softText : "text-slate-500")} />
          </span>
          <div>
            <p className="text-[9px] font-black text-slate-700 dark:text-slate-200">
              {title}
            </p>
            <p className="mt-0.5 text-[8px] font-semibold text-slate-400">
              {subtitle}
            </p>
          </div>
        </div>
        <span className="text-[11px] font-black text-slate-300">›</span>
      </div>
    </div>
  );
}

function SettingsRow({
  title,
  subtitle,
  enabled,
  accentTheme,
}: {
  title: string;
  subtitle: string;
  enabled: boolean;
  accentTheme: AccentTheme;
}) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-slate-100 bg-white px-3 py-2.5 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
      <div className="flex items-center gap-2">
        <span
          className={cn(
            "flex h-8 w-8 items-center justify-center rounded-xl",
            enabled ? accentTheme.buttonSoft : "bg-slate-50 dark:bg-white/10",
          )}
        >
          <Settings className={cn("h-4 w-4", enabled ? accentTheme.softText : "text-slate-500")} />
        </span>
        <div>
          <p className="text-[9px] font-black text-slate-700 dark:text-slate-200">
            {title}
          </p>
          <p className="mt-0.5 text-[8px] font-semibold text-slate-400">
            {subtitle}
          </p>
        </div>
      </div>
      <ToggleOn accentTheme={enabled ? accentTheme : undefined} />
    </div>
  );
}

function ToggleOn({ accentTheme }: { accentTheme?: AccentTheme }) {
  return (
    <span
      className={cn(
        "relative h-5 w-9 rounded-full",
        accentTheme ? accentTheme.button : "bg-slate-200 dark:bg-white/10",
      )}
    >
      <span
        className={cn(
          "absolute top-0.5 h-4 w-4 rounded-full bg-white shadow-sm",
          accentTheme ? "right-0.5" : "left-0.5",
        )}
      />
    </span>
  );
}

function MetricPill({
  label,
  value,
  accentTheme,
}: {
  label: string;
  value: string;
  accentTheme: AccentTheme;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border px-2 py-2 text-center shadow-sm",
        accentTheme.softBorder,
        accentTheme.softBg,
      )}
    >
      <p className="text-[12px] font-black text-slate-950 dark:text-white">
        {value}
      </p>
      <p className="mt-0.5 truncate text-[8px] font-black uppercase tracking-[0.08em] text-slate-400">
        {label}
      </p>
    </div>
  );
}


function LiveInsightCard({
  title,
  value,
  helper,
  accentTheme,
}: {
  title: string;
  value: string;
  helper: string;
  accentTheme: AccentTheme;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border p-3 shadow-sm",
        accentTheme.softBorder,
        accentTheme.softBg,
      )}
    >
      <div className={cn("absolute -right-8 -top-8 h-20 w-20 rounded-full blur-2xl", accentTheme.glow)} />
      <div className="relative flex items-start justify-between">
        <div>
          <p className="text-[8px] font-black uppercase tracking-[0.12em] text-slate-500">
            {title}
          </p>
          <p className="mt-1 text-lg font-black text-slate-950 dark:text-white">
            {value}
          </p>
          <p className="mt-1 text-[8px] font-semibold text-slate-400">
            {helper}
          </p>
        </div>

        <div className={cn("flex h-9 w-9 items-center justify-center rounded-2xl", accentTheme.buttonSoft)}>
          <TrendingUp className={cn("h-4 w-4", accentTheme.softText)} />
        </div>
      </div>

      <div className="relative mt-3 flex items-end gap-1">
        {[35, 58, 46, 75, 54, 88, 68].map((height, index) => (
          <span
            key={index}
            className={cn(
              "w-full rounded-t-md",
              index === 5 ? accentTheme.button : "bg-white/80 dark:bg-white/10",
            )}
            style={{ height: `${height / 4}px` }}
          />
        ))}
      </div>
    </div>
  );
}

function GlassActionCard({
  icon: Icon,
  title,
  subtitle,
  accentTheme,
}: {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  accentTheme: AccentTheme;
}) {
  return (
    <div className="rounded-2xl border border-white/70 bg-white/75 p-3 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/10">
      <div className="flex items-center gap-2">
        <span className={cn("flex h-8 w-8 items-center justify-center rounded-xl", accentTheme.buttonSoft)}>
          <Icon className={cn("h-4 w-4", accentTheme.softText)} />
        </span>
        <div className="min-w-0">
          <p className="truncate text-[9px] font-black text-slate-800 dark:text-white">
            {title}
          </p>
          <p className="mt-0.5 truncate text-[8px] font-semibold text-slate-400">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}

function MiniChartCard({
  label,
  accentTheme,
}: {
  label: string;
  accentTheme: AccentTheme;
}) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-3 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
      <div className="flex items-center justify-between">
        <p className="text-[9px] font-black text-slate-700 dark:text-slate-200">
          {label}
        </p>
        <span className={cn("rounded-full px-2 py-1 text-[8px] font-black", accentTheme.buttonSoft, accentTheme.softText)}>
          +12%
        </span>
      </div>
      <div className="mt-3 flex h-10 items-end gap-1">
        {[42, 28, 55, 38, 76, 62, 88].map((height, index) => (
          <span
            key={index}
            className={cn(
              "w-full rounded-t-md",
              index > 4 ? accentTheme.button : "bg-slate-100 dark:bg-white/10",
            )}
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
    </div>
  );
}

function FloatingMediaCard({
  demo,
  accentTheme,
}: {
  demo: IndustryMobileAppDemo;
  accentTheme: AccentTheme;
}) {
  return (
    <div className="relative h-[104px] overflow-hidden rounded-2xl border border-slate-100 shadow-sm dark:border-white/10">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${demo.image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-950/35 to-transparent" />
      <div className="relative flex h-full flex-col justify-between p-3">
        <span className="w-fit rounded-full bg-white/20 px-2 py-1 text-[8px] font-black text-white backdrop-blur-md">
          Premium preview
        </span>
        <div>
          <p className="line-clamp-1 text-[10px] font-black text-white">
            {demo.headline}
          </p>
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/25">
            <div className={cn("h-full w-[66%] rounded-full", accentTheme.button)} />
          </div>
        </div>
      </div>
    </div>
  );
}


function StatusCapsule({
  label,
  value,
  accentTheme,
}: {
  label: string;
  value: string;
  accentTheme: AccentTheme;
}) {
  return (
    <div className="rounded-full border border-white/70 bg-white/70 px-2.5 py-1 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/10">
      <span className="text-[8px] font-black text-slate-400">{label}</span>
      <span className={cn("ml-1 text-[8px] font-black", accentTheme.softText)}>
        {value}
      </span>
    </div>
  );
}

function DocumentStack({
  accentTheme,
  profile,
}: {
  accentTheme: AccentTheme;
  profile?: IndustryProfile;
}) {
  return (
    <div className="relative h-[82px]">
      <div className="absolute left-2 top-5 h-12 w-[78%] rotate-[-5deg] rounded-2xl border border-slate-100 bg-white shadow-sm dark:border-white/10 dark:bg-white/10" />
      <div className="absolute left-5 top-3 h-14 w-[78%] rotate-[3deg] rounded-2xl border border-slate-100 bg-white shadow-sm dark:border-white/10 dark:bg-white/10" />
      <div className={cn("absolute left-8 top-0 h-[70px] w-[78%] overflow-hidden rounded-2xl border p-3 shadow-sm", accentTheme.softBorder, accentTheme.softBg)}>
        <div className={cn("absolute -right-7 -top-7 h-16 w-16 rounded-full blur-xl", accentTheme.glow)} />
        <div className="relative flex items-center gap-2">
          <FileIcon accentTheme={accentTheme} />
          <div className="min-w-0 flex-1">
            <p className="truncate text-[9px] font-black text-slate-700 dark:text-slate-200">
              {profile?.screenTheme.artifact ?? "Request summary.pdf"}
            </p>
            <p className="mt-1 truncate text-[8px] font-semibold text-slate-400">
              {profile?.screenTheme.aiTask ?? "Verified now"}
            </p>
          </div>
        </div>
        <div className="relative mt-2 h-1 rounded-full bg-white/75 dark:bg-white/10">
          <div className={cn("h-full w-[78%] rounded-full", accentTheme.button)} />
        </div>
      </div>
    </div>
  );
}

function FileIcon({ accentTheme }: { accentTheme: AccentTheme }) {
  return (
    <span className={cn("flex h-8 w-8 shrink-0 items-center justify-center rounded-xl", accentTheme.buttonSoft)}>
      <Package className={cn("h-4 w-4", accentTheme.softText)} />
    </span>
  );
}

export function DevicePreviewCard({
  demo,
  accentTheme,
}: {
  demo: IndustryMobileAppDemo;
  accentTheme: AccentTheme;
}) {
  return (
    <div className="relative h-[136px] overflow-hidden rounded-[1.35rem] border border-slate-100 shadow-sm dark:border-white/10">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${demo.image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-950/35 to-transparent" />
      <div className="relative flex h-full flex-col justify-between p-3">
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-white/20 px-2 py-1 text-[8px] font-black text-white backdrop-blur-md">
            Live preview
          </span>
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md">
            <Heart className="h-3.5 w-3.5 fill-white/80" />
          </span>
        </div>

        <div className="rounded-2xl border border-white/20 bg-white/15 p-3 backdrop-blur-md">
          <p className="line-clamp-1 text-[10px] font-black text-white">
            {demo.headline}
          </p>
          <p className="mt-1 line-clamp-1 text-[8px] font-semibold text-white/70">
            {demo.subtitle}
          </p>
          <div className="mt-2 flex gap-1">
            {[52, 76, 38, 88, 64].map((width, index) => (
              <span
                key={index}
                className={cn("h-1.5 rounded-full", index === 3 ? accentTheme.button : "bg-white/35")}
                style={{ width: `${width / 2}px` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


function AssistantPulseCard({
  demo,
  accentTheme,
}: {
  demo: IndustryMobileAppDemo;
  accentTheme: AccentTheme;
}) {
  const profile = getIndustryProfile(demo);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-3 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
      <div className={cn("absolute -right-8 -top-8 h-20 w-20 rounded-full blur-2xl", accentTheme.glow)} />
      <div className="relative flex items-center justify-between">
        <div>
          <p className="text-[8px] font-black uppercase tracking-[0.12em] text-slate-400">
            {profile.screenTheme.mode}
          </p>
          <p className="mt-1 line-clamp-1 text-[10px] font-black text-slate-800 dark:text-white">
            {profile.screenTheme.aiTask}
          </p>
        </div>

        <div className="relative flex h-10 w-10 items-center justify-center">
          <span className={cn("absolute h-10 w-10 rounded-full opacity-40 blur-md", accentTheme.glow)} />
          <span className={cn("relative flex h-8 w-8 items-center justify-center rounded-full", accentTheme.buttonSoft)}>
            <SparkMini accentTheme={accentTheme} />
          </span>
        </div>
      </div>

      <div className="relative mt-3 grid grid-cols-3 gap-2">
        {[profile.searchFilters[0] ?? "Scan", profile.screenTheme.status, "Sync"].map((item, index) => (
          <span
            key={`${item}-${index}`}
            className={cn(
              "rounded-xl border px-2 py-1.5 text-center text-[8px] font-black",
              index === 1
                ? [accentTheme.softBorder, accentTheme.buttonSoft, accentTheme.softText].join(" ")
                : "border-slate-100 bg-slate-50 text-slate-400 dark:border-white/10 dark:bg-white/5",
            )}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function SparkMini({ accentTheme }: { accentTheme: AccentTheme }) {
  return (
    <span className="relative flex h-4 w-4 items-center justify-center">
      <span className={cn("absolute h-4 w-1 rounded-full", accentTheme.button)} />
      <span className={cn("absolute h-1 w-4 rounded-full", accentTheme.button)} />
    </span>
  );
}

export function PremiumNotificationStack({
  accentTheme,
}: {
  accentTheme: AccentTheme;
}) {
  return (
    <div className="space-y-2">
      {[
        ["Smart alert", "High-priority update detected"],
        ["Auto reminder", "Next action is ready"],
        ["System sync", "All records are up to date"],
      ].map(([title, text], index) => (
        <div
          key={title}
          className={cn(
            "flex items-center gap-2 rounded-2xl border px-3 py-2.5 shadow-sm",
            index === 0
              ? [accentTheme.softBorder, accentTheme.softBg].join(" ")
              : "border-slate-100 bg-white dark:border-white/10 dark:bg-white/[0.04]",
          )}
        >
          <span
            className={cn(
              "flex h-8 w-8 shrink-0 items-center justify-center rounded-xl",
              index === 0 ? accentTheme.buttonSoft : "bg-slate-50 dark:bg-white/10",
            )}
          >
            <Bell className={cn("h-4 w-4", index === 0 ? accentTheme.softText : "text-slate-400")} />
          </span>

          <div className="min-w-0 flex-1">
            <p className="truncate text-[9px] font-black text-slate-700 dark:text-slate-200">
              {title}
            </p>
            <p className="mt-0.5 truncate text-[8px] font-semibold text-slate-400">
              {text}
            </p>
          </div>

          <span className="h-2 w-2 rounded-full bg-emerald-500" />
        </div>
      ))}
    </div>
  );
}

function MiniCalendarCard({
  accentTheme,
}: {
  accentTheme: AccentTheme;
}) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-3 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
      <div className="mb-2 flex items-center justify-between">
        <p className="text-[9px] font-black text-slate-700 dark:text-slate-200">
          Upcoming slots
        </p>
        <span className={cn("rounded-full px-2 py-1 text-[8px] font-black", accentTheme.buttonSoft, accentTheme.softText)}>
          Today
        </span>
      </div>

      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: 14 }).map((_, index) => (
          <span
            key={index}
            className={cn(
              "h-5 rounded-lg",
              index === 9
                ? accentTheme.button
                : index % 3 === 0
                  ? "bg-slate-200 dark:bg-white/15"
                  : "bg-slate-100 dark:bg-white/10",
            )}
          />
        ))}
      </div>
    </div>
  );
}

export function RouteTimelineCard({
  accentTheme,
}: {
  accentTheme: AccentTheme;
}) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-3 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
      <div className="space-y-2">
        {["Request received", "Team assigned", "Completion pending"].map((item, index) => (
          <div key={`${item}-${index}`} className="flex items-center gap-2">
            <span
              className={cn(
                "flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[8px] font-black",
                index < 2
                  ? [accentTheme.buttonSoft, accentTheme.softText].join(" ")
                  : "bg-slate-100 text-slate-400 dark:bg-white/10",
              )}
            >
              {index + 1}
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[9px] font-black text-slate-700 dark:text-slate-200">
                {item}
              </p>
              <div className="mt-1 h-1 rounded-full bg-slate-100 dark:bg-white/10">
                <div
                  className={cn("h-full rounded-full", index < 2 ? accentTheme.button : "bg-slate-200 dark:bg-white/15")}
                  style={{ width: index < 2 ? "100%" : "38%" }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PremiumReceiptCard({
  demo,
  accentTheme,
}: {
  demo: IndustryMobileAppDemo;
  accentTheme: AccentTheme;
}) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-3 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[8px] font-black uppercase tracking-[0.12em] text-slate-400">
            Digital receipt
          </p>
          <p className="mt-1 line-clamp-1 text-[10px] font-black text-slate-800 dark:text-white">
            {demo.title}
          </p>
        </div>
        <span className={cn("rounded-full px-2 py-1 text-[8px] font-black", accentTheme.buttonSoft, accentTheme.softText)}>
          Paid
        </span>
      </div>

      <div className="my-3 border-t border-dashed border-slate-200 dark:border-white/10" />

      <div className="space-y-1.5">
        {[
          ["Subtotal", "$210.00"],
          ["Tax", "$35.60"],
          ["Total", "$245.60"],
        ].map(([label, value], index) => (
          <div key={label} className="flex items-center justify-between">
            <span className={cn("text-[8px] font-bold", index === 2 ? "text-slate-700 dark:text-white" : "text-slate-400")}>
              {label}
            </span>
            <span className={cn("text-[8px] font-black", index === 2 ? accentTheme.softText : "text-slate-500")}>
              {value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}


export function IndustryDashboardVisual({
  profile,
  accentTheme,
}: {
  profile: IndustryProfile;
  accentTheme: AccentTheme;
}) {
  const visual = getIndustryVisualTone(profile);

  if (profile.key === "retail") {
    return (
      <div className="grid grid-cols-3 gap-2 rounded-2xl border border-slate-100 bg-white p-3 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
        {profile.discoverCards.slice(0, 6).map((item, index) => (
          <div
            key={`${item}-${index}`}
            className={cn(
              "h-12 rounded-xl border",
              index === 1
                ? [accentTheme.softBorder, accentTheme.buttonSoft].join(" ")
                : "border-slate-100 bg-slate-50 dark:border-white/10 dark:bg-white/10",
            )}
          >
            <div className="p-1.5">
              <div className={cn("h-5 rounded-lg", index === 1 ? accentTheme.button : "bg-slate-200 dark:bg-white/15")} />
              <div className="mt-1 h-1 w-8 rounded-full bg-slate-200 dark:bg-white/15" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (profile.key === "healthcare") {
    return (
      <div className="rounded-2xl border border-slate-100 bg-white p-3 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
        <div className="flex items-center justify-between">
          <p className="text-[9px] font-black text-slate-700 dark:text-slate-200">{visual.topLine}</p>
          <span className={cn("rounded-full px-2 py-1 text-[8px] font-black", accentTheme.buttonSoft, accentTheme.softText)}>Stable</span>
        </div>
        <svg viewBox="0 0 210 58" className="mt-2 h-14 w-full" aria-hidden="true">
          <path d="M0 34 H30 L40 12 L52 50 L66 24 L80 34 H110 L122 18 L136 42 L148 34 H210" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className={accentTheme.softText} />
        </svg>
      </div>
    );
  }

  if (profile.key === "finance") {
    return <MiniChartCard label="Portfolio movement" accentTheme={accentTheme} />;
  }

  if (profile.key === "manufacturing") {
    return (
      <div className="rounded-2xl border border-slate-100 bg-white p-3 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
        <div className="grid grid-cols-4 gap-2">
          {[92, 76, 68, 84].map((value, index) => (
            <div key={index} className="rounded-xl bg-slate-50 p-2 text-center dark:bg-white/10">
              <div className="mx-auto flex h-8 w-8 items-end justify-center rounded-lg bg-white p-1 dark:bg-white/10">
                <span className={cn("w-3 rounded-t", index === 0 ? accentTheme.button : "bg-slate-300 dark:bg-white/20")} style={{ height: `${value}%` }} />
              </div>
              <p className="mt-1 text-[8px] font-black text-slate-400">M-{index + 1}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <LiveInsightCard
      title={visual.topLine}
      value={profile.primaryMetric}
      helper={visual.midLine}
      accentTheme={accentTheme}
    />
  );
}

export function IndustryDiscoverHero({
  demo,
  profile,
  accentTheme,
}: {
  demo: IndustryMobileAppDemo;
  profile: IndustryProfile;
  accentTheme: AccentTheme;
}) {
  if (profile.key === "realEstate") {
    return (
      <div className="relative h-[108px] overflow-hidden rounded-2xl border border-slate-100 bg-slate-100 shadow-sm dark:border-white/10 dark:bg-white/10">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-55"
          style={{ backgroundImage: `url(${demo.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 to-transparent" />
        {[24, 54, 74].map((left, index) => (
          <span
            key={index}
            className={cn("absolute h-6 w-6 rounded-full border-2 border-white shadow-sm", accentTheme.button)}
            style={{ left: `${left}%`, top: `${24 + index * 14}%` }}
          />
        ))}
        <div className="relative flex h-full flex-col justify-end p-3">
          <p className="text-[10px] font-black text-white">{profile.discoverCards[0]}</p>
          <p className="mt-1 text-[8px] font-semibold text-white/70">Map-based property discovery</p>
        </div>
      </div>
    );
  }

  if (profile.key === "education") {
    return (
      <div className="rounded-2xl border border-slate-100 bg-white p-3 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
        <div className="grid grid-cols-4 gap-2">
          {["M", "T", "W", "T"].map((day, index) => (
            <div
              key={`${day}-${index}`}
              className={cn(
                "rounded-xl px-2 py-2 text-center",
                index === 1 ? accentTheme.button : "bg-slate-50 dark:bg-white/10",
              )}
            >
              <p className={cn("text-[8px] font-black", index === 1 ? "text-white" : "text-slate-400")}>{day}</p>
              <p className={cn("mt-1 text-[10px] font-black", index === 1 ? "text-white" : "text-slate-700 dark:text-slate-200")}>{index + 2}</p>
            </div>
          ))}
        </div>
        <p className="mt-3 line-clamp-1 text-[9px] font-black text-slate-700 dark:text-white">Next class: {profile.discoverCards[0]}</p>
      </div>
    );
  }

  return <FloatingMediaCard demo={demo} accentTheme={accentTheme} />;
}

function IndustryTimelineCard({
  profile,
  accentTheme,
}: {
  profile: IndustryProfile;
  accentTheme: AccentTheme;
}) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-3 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
      <div className="space-y-2">
        {profile.activitySteps.slice(0, 3).map((item, index) => (
          <div key={`${item}-${index}`} className="flex items-center gap-2">
            <span
              className={cn(
                "flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[8px] font-black",
                index < 2
                  ? [accentTheme.buttonSoft, accentTheme.softText].join(" ")
                  : "bg-slate-100 text-slate-400 dark:bg-white/10",
              )}
            >
              {index + 1}
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[9px] font-black text-slate-700 dark:text-slate-200">
                {item}
              </p>
              <div className="mt-1 h-1 rounded-full bg-slate-100 dark:bg-white/10">
                <div
                  className={cn("h-full rounded-full", index < 2 ? accentTheme.button : "bg-slate-200 dark:bg-white/15")}
                  style={{ width: index < 2 ? "100%" : "38%" }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function IndustrySearchVisual({
  profile,
  accentTheme,
}: {
  profile: IndustryProfile;
  accentTheme: AccentTheme;
}) {
  if (profile.key === "insurance" || profile.key === "finance") {
    return <MiniChartCard label={`${profile.appName} insights`} accentTheme={accentTheme} />;
  }

  if (profile.key === "manufacturing") {
    return (
      <div className="rounded-2xl border border-slate-100 bg-white p-3 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
        <div className="grid grid-cols-2 gap-2">
          {["Inventory", "Machines", "QC", "Dispatch"].map((item, index) => (
            <div key={`${item}-${index}`} className={cn("rounded-xl p-2", index === 0 ? accentTheme.buttonSoft : "bg-slate-50 dark:bg-white/10")}>
              <p className={cn("text-[9px] font-black", index === 0 ? accentTheme.softText : "text-slate-500")}>{item}</p>
              <div className="mt-2 h-1.5 rounded-full bg-white/70 dark:bg-white/10">
                <div className={cn("h-full rounded-full", index === 0 ? accentTheme.button : "bg-slate-300")} style={{ width: `${50 + index * 10}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return <MiniCalendarCard accentTheme={accentTheme} />;
}

function IndustryMiniSchedule({
  profile,
  accentTheme,
}: {
  profile: IndustryProfile;
  accentTheme: AccentTheme;
}) {
  if (profile.key === "finance" || profile.key === "insurance") {
    return <DocumentStack accentTheme={accentTheme} profile={profile} />;
  }

  return <MiniCalendarCard accentTheme={accentTheme} />;
}

function IndustryTrackingVisual({
  profile,
  accentTheme,
}: {
  profile: IndustryProfile;
  accentTheme: AccentTheme;
}) {
  if (profile.key === "manufacturing") {
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="grid w-[78%] grid-cols-3 gap-2">
          {[1, 2, 3, 4, 5, 6].map((item, index) => (
            <div
              key={`${item}-${index}`}
              className={cn(
                "h-12 rounded-xl border border-white/70 bg-white/70 p-2 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/10",
                index === 2 && "ring-2 ring-offset-1",
                index === 2 && accentTheme.ring,
              )}
            >
              <div className={cn("h-2 rounded-full", index === 2 ? accentTheme.button : "bg-slate-300 dark:bg-white/20")} />
              <div className="mt-2 h-1.5 w-8 rounded-full bg-slate-200 dark:bg-white/15" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (profile.key === "finance") {
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[78%] rounded-2xl border border-white/70 bg-white/75 p-3 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/10">
          <div className="flex h-20 items-end gap-1">
            {[34, 52, 47, 72, 66, 88, 76].map((height, index) => (
              <span key={index} className={cn("w-full rounded-t", index > 4 ? accentTheme.button : "bg-slate-300 dark:bg-white/20")} style={{ height: `${height}%` }} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <svg
      viewBox="0 0 200 220"
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      <path
        d="M34 178 C54 148, 70 146, 86 122 S124 86, 143 82 S166 58, 180 34"
        fill="none"
        stroke="#2563eb"
        strokeDasharray="5 5"
        strokeLinecap="round"
        strokeWidth="4"
      />
      <circle cx="34" cy="178" r="8" fill="#ffffff" stroke="#0f172a" strokeWidth="3" />
      <circle cx="86" cy="122" r="7" fill="#ffffff" stroke="#0f172a" strokeWidth="3" />
      <circle cx="180" cy="34" r="8" fill="#ffffff" stroke="#0f172a" strokeWidth="3" />
    </svg>
  );
}

function IndustryReceiptCard({
  profile,
  accentTheme,
}: {
  profile: IndustryProfile;
  accentTheme: AccentTheme;
}) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-3 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[8px] font-black uppercase tracking-[0.12em] text-slate-400">
            Digital receipt
          </p>
          <p className="mt-1 line-clamp-1 text-[10px] font-black text-slate-800 dark:text-white">
            {profile.walletLabel}
          </p>
        </div>
        <span className={cn("rounded-full px-2 py-1 text-[8px] font-black", accentTheme.buttonSoft, accentTheme.softText)}>
          Verified
        </span>
      </div>

      <div className="my-3 border-t border-dashed border-slate-200 dark:border-white/10" />

      <div className="space-y-1.5">
        {profile.receiptRows.map(([label, value], index) => (
          <div key={label} className="flex items-center justify-between">
            <span className={cn("text-[8px] font-bold", index === profile.receiptRows.length - 1 ? "text-slate-700 dark:text-white" : "text-slate-400")}>
              {label}
            </span>
            <span className={cn("text-[8px] font-black", index === profile.receiptRows.length - 1 ? accentTheme.softText : "text-slate-500")}>
              {value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function IndustryNotificationStack({
  profile,
  accentTheme,
}: {
  profile: IndustryProfile;
  accentTheme: AccentTheme;
}) {
  return (
    <div className="space-y-2">
      {profile.notifications.map((text, index) => (
        <div
          key={text}
          className={cn(
            "flex items-center gap-2 rounded-2xl border px-3 py-2.5 shadow-sm",
            index === 0
              ? [accentTheme.softBorder, accentTheme.softBg].join(" ")
              : "border-slate-100 bg-white dark:border-white/10 dark:bg-white/[0.04]",
          )}
        >
          <span
            className={cn(
              "flex h-8 w-8 shrink-0 items-center justify-center rounded-xl",
              index === 0 ? accentTheme.buttonSoft : "bg-slate-50 dark:bg-white/10",
            )}
          >
            <Bell className={cn("h-4 w-4", index === 0 ? accentTheme.softText : "text-slate-400")} />
          </span>

          <div className="min-w-0 flex-1">
            <p className="truncate text-[9px] font-black text-slate-700 dark:text-slate-200">
              {text}
            </p>
            <p className="mt-0.5 truncate text-[8px] font-semibold text-slate-400">
              {index + 1} min ago
            </p>
          </div>

          <span className="h-2 w-2 rounded-full bg-emerald-500" />
        </div>
      ))}
    </div>
  );
}



function IndustryControlPanel({
  profile,
  accentTheme,
}: {
  profile: IndustryProfile;
  accentTheme: AccentTheme;
}) {
  const items = [
    [profile.screenTheme.mode, profile.screenTheme.status],
    [profile.screenTheme.progressLabel, profile.primaryMetric],
    [profile.secondaryMetricLabel, profile.secondaryMetric],
  ];

  return (
    <div className="rounded-2xl border border-slate-100 bg-white/90 p-3 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/[0.05]">
      <div className="mb-2 flex items-center justify-between">
        <p className="text-[9px] font-black text-slate-700 dark:text-slate-200">
          Command layer
        </p>
        <span className={cn("rounded-full px-2 py-1 text-[8px] font-black", accentTheme.buttonSoft, accentTheme.softText)}>
          AI live
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {items.map(([label, value], index) => (
          <div
            key={`${label}-${index}`}
            className={cn(
              "rounded-xl border px-2 py-2 text-center",
              index === 0
                ? [accentTheme.softBorder, accentTheme.buttonSoft].join(" ")
                : "border-slate-100 bg-slate-50 dark:border-white/10 dark:bg-white/10",
            )}
          >
            <p className={cn("truncate text-[8px] font-black", index === 0 ? accentTheme.softText : "text-slate-400")}>
              {label}
            </p>
            <p className="mt-1 truncate text-[9px] font-black text-slate-700 dark:text-white">
              {value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function AdvancedIndustryHeroPanel({
  demo,
  profile,
  accentTheme,
}: {
  demo: IndustryMobileAppDemo;
  profile: IndustryProfile;
  accentTheme: AccentTheme;
}) {
  const visual = getIndustryVisualTone(profile);

  return (
    <div className="relative h-[126px] overflow-hidden rounded-[1.35rem] border border-slate-100 shadow-sm dark:border-white/10">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${demo.image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-950/45 to-transparent" />
      <div className={cn("absolute -right-10 -top-10 h-28 w-28 rounded-full blur-2xl", accentTheme.glow)} />

      <div className="relative flex h-full flex-col justify-between p-3">
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-white/20 px-2 py-1 text-[8px] font-black text-white backdrop-blur-md">
            {profile.screenTheme.mode}
          </span>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-[9px] font-black text-white backdrop-blur-md">
            {visual.symbol}
          </span>
        </div>

        <div className="rounded-2xl border border-white/20 bg-white/15 p-3 backdrop-blur-md">
          <p className="line-clamp-1 text-[10px] font-black text-white">
            {profile.dashboardTitle}
          </p>
          <p className="mt-1 line-clamp-1 text-[8px] font-semibold text-white/70">
            {profile.screenTheme.aiTask}
          </p>
          <div className="mt-2 flex items-center gap-1">
            {[44, 76, 58, 92, 64].map((width, index) => (
              <span
                key={index}
                className={cn("h-1.5 rounded-full", index === 3 ? accentTheme.button : "bg-white/35")}
                style={{ width: `${width / 2}px` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function IndustryOperationsMatrix({
  profile,
  accentTheme,
}: {
  profile: IndustryProfile;
  accentTheme: AccentTheme;
}) {
  const cells =
    profile.key === "healthcare"
      ? ["Vitals", "Reports", "Doctor", "Pharmacy", "Visit", "Care"]
      : profile.key === "insurance"
        ? ["Policy", "Claim", "KYC", "Survey", "Renewal", "Risk"]
        : profile.key === "retail"
          ? ["Cart", "Stock", "Offer", "Return", "Ship", "Pay"]
          : profile.key === "education"
            ? ["Class", "Quiz", "Notes", "Grade", "Task", "Mentor"]
            : profile.key === "realEstate"
              ? ["Map", "Visit", "Loan", "Agent", "Floor", "Deal"]
              : profile.key === "finance"
                ? ["KYC", "Score", "Loan", "SIP", "Card", "Risk"]
                : profile.key === "manufacturing"
                  ? ["Line", "QC", "Stock", "Shift", "Batch", "MRO"]
                  : ["CRM", "Flow", "Docs", "Chat", "Pay", "Track"];

  return (
    <div className="grid grid-cols-3 gap-2 rounded-2xl border border-slate-100 bg-white p-3 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
      {cells.map((cell, index) => (
        <div
          key={cell}
          className={cn(
            "rounded-xl px-2 py-2 text-center",
            index === 1 || index === 3
              ? [accentTheme.buttonSoft, accentTheme.softText].join(" ")
              : "bg-slate-50 text-slate-500 dark:bg-white/10 dark:text-slate-300",
          )}
        >
          <p className="text-[8px] font-black">{cell}</p>
          <div className="mx-auto mt-1 h-1 w-7 rounded-full bg-current opacity-30" />
        </div>
      ))}
    </div>
  );
}

function AdvancedProgressOrbit({
  profile,
  accentTheme,
}: {
  profile: IndustryProfile;
  accentTheme: AccentTheme;
}) {
  return (
    <div className="relative flex h-[118px] items-center justify-center rounded-2xl border border-slate-100 bg-white shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
      <div className={cn("absolute h-24 w-24 rounded-full blur-2xl", accentTheme.glow)} />
      <div className="relative flex h-20 w-20 items-center justify-center rounded-full border-[7px] border-slate-100 dark:border-white/10">
        <div className={cn("absolute inset-[-7px] rounded-full border-[7px] border-transparent", accentTheme.ring)} />
        <div className={cn("flex h-12 w-12 items-center justify-center rounded-full text-[12px] font-black", accentTheme.buttonSoft, accentTheme.softText)}>
          {profile.primaryMetric}
        </div>
      </div>
      <div className="absolute left-3 top-3">
        <StatusCapsule label={profile.secondaryMetricLabel} value={profile.secondaryMetric} accentTheme={accentTheme} />
      </div>
      <div className="absolute bottom-3 right-3">
        <StatusCapsule label={profile.tertiaryMetricLabel} value={profile.tertiaryMetric} accentTheme={accentTheme} />
      </div>
    </div>
  );
}


function IndustryRiskIntelligenceCard({
  profile,
  accentTheme,
}: {
  profile: IndustryProfile;
  accentTheme: AccentTheme;
}) {
  const riskLabel =
    profile.key === "healthcare"
      ? "Care risk"
      : profile.key === "insurance"
        ? "Claim risk"
        : profile.key === "finance"
          ? "Credit risk"
          : profile.key === "manufacturing"
            ? "Line risk"
            : profile.key === "retail"
              ? "Fulfilment risk"
              : profile.key === "realEstate"
                ? "Visit risk"
                : profile.key === "education"
                  ? "Learning risk"
                  : "Workflow risk";

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border p-3 shadow-sm",
        accentTheme.softBorder,
        accentTheme.softBg,
      )}
    >
      <div className={cn("absolute -right-8 -top-8 h-24 w-24 rounded-full blur-2xl", accentTheme.glow)} />
      <div className="relative flex items-center justify-between">
        <div>
          <p className="text-[8px] font-black uppercase tracking-[0.12em] text-slate-500">
            {riskLabel}
          </p>
          <p className="mt-1 text-[15px] font-black text-slate-950 dark:text-white">
            Low
          </p>
        </div>

        <div className="relative h-12 w-12">
          <div className="absolute inset-0 rounded-full border-[6px] border-white/70 dark:border-white/10" />
          <div className={cn("absolute inset-0 rounded-full border-[6px] border-transparent", accentTheme.ring)} />
          <div className={cn("absolute inset-3 rounded-full", accentTheme.button)} />
        </div>
      </div>

      <div className="relative mt-3 grid grid-cols-3 gap-2">
        {["Verified", profile.screenTheme.status, "Synced"].map((item, index) => (
          <div key={`${item}-${index}`} className="rounded-xl bg-white/70 px-2 py-1.5 text-center dark:bg-white/10">
            <p className="truncate text-[8px] font-black text-slate-500 dark:text-slate-300">
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function IndustryRoleSwitch({
  profile,
  accentTheme,
}: {
  profile: IndustryProfile;
  accentTheme: AccentTheme;
}) {
  const roles =
    profile.key === "healthcare"
      ? ["Patient", "Doctor", "Lab"]
      : profile.key === "insurance"
        ? ["Policy", "Claim", "Agent"]
        : profile.key === "retail"
          ? ["Buyer", "Store", "Courier"]
          : profile.key === "education"
            ? ["Student", "Teacher", "Parent"]
            : profile.key === "realEstate"
              ? ["Buyer", "Agent", "Owner"]
              : profile.key === "finance"
                ? ["User", "Advisor", "KYC"]
                : profile.key === "manufacturing"
                  ? ["Operator", "QC", "Admin"]
                  : ["User", "Team", "Admin"];

  return (
    <div className="grid grid-cols-3 gap-2 rounded-2xl border border-slate-100 bg-white p-2 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
      {roles.map((role, index) => (
        <div
          key={role}
          className={cn(
            "rounded-xl px-2 py-2 text-center",
            index === 0
              ? [accentTheme.buttonSoft, accentTheme.softText].join(" ")
              : "bg-slate-50 text-slate-400 dark:bg-white/10",
          )}
        >
          <p className="truncate text-[8px] font-black">{role}</p>
        </div>
      ))}
    </div>
  );
}

function IndustryQRCodeCard({
  profile,
  accentTheme,
}: {
  profile: IndustryProfile;
  accentTheme: AccentTheme;
}) {
  const label =
    profile.key === "healthcare"
      ? "Patient QR"
      : profile.key === "insurance"
        ? "Claim QR"
        : profile.key === "retail"
          ? "Order QR"
          : profile.key === "education"
            ? "Class QR"
            : profile.key === "realEstate"
              ? "Visit QR"
              : profile.key === "finance"
                ? "KYC QR"
                : profile.key === "manufacturing"
                  ? "Batch QR"
                  : "Request QR";

  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-3 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[9px] font-black text-slate-700 dark:text-slate-200">
            {label}
          </p>
          <p className="mt-0.5 text-[8px] font-semibold text-slate-400">
            Scan-ready secure pass
          </p>
        </div>
        <span className={cn("rounded-full px-2 py-1 text-[8px] font-black", accentTheme.buttonSoft, accentTheme.softText)}>
          Active
        </span>
      </div>

      <div className="mt-3 grid h-[78px] grid-cols-5 gap-1 rounded-xl bg-slate-50 p-2 dark:bg-white/10">
        {Array.from({ length: 25 }).map((_, index) => (
          <span
            key={index}
            className={cn(
              "rounded-[3px]",
              [0, 1, 2, 5, 10, 6, 12, 18, 20, 21, 22, 24, 8, 16].includes(index)
                ? accentTheme.button
                : "bg-white dark:bg-white/10",
            )}
          />
        ))}
      </div>
    </div>
  );
}

function IndustryLiveFeed({
  profile,
  accentTheme,
}: {
  profile: IndustryProfile;
  accentTheme: AccentTheme;
}) {
  const feed =
    profile.key === "healthcare"
      ? ["Vitals synced", "Report attached", "Doctor online"]
      : profile.key === "insurance"
        ? ["Surveyor mapped", "KYC checked", "Claim queued"]
        : profile.key === "retail"
          ? ["Stock reserved", "Courier assigned", "Coupon valid"]
          : profile.key === "education"
            ? ["Class joined", "Task checked", "Grade updated"]
            : profile.key === "realEstate"
              ? ["Agent online", "Visit slot locked", "Map shared"]
              : profile.key === "finance"
                ? ["KYC passed", "Risk scored", "Statement synced"]
                : profile.key === "manufacturing"
                  ? ["Machine online", "QC running", "Stock checked"]
                  : ["Request synced", "Team online", "Status updated"];

  return (
    <div className="space-y-2">
      {feed.map((item, index) => (
        <div key={`${item}-${index}`} className="flex items-center gap-2 rounded-xl border border-slate-100 bg-white px-3 py-2 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
          <span className={cn("h-2 w-2 shrink-0 rounded-full", index === 0 ? "bg-emerald-500" : "bg-slate-300 dark:bg-white/20")} />
          <span className="min-w-0 flex-1 truncate text-[8px] font-black text-slate-600 dark:text-slate-300">
            {item}
          </span>
          <span className={cn("text-[8px] font-black", index === 0 ? accentTheme.softText : "text-slate-400")}>
            {index + 1}m
          </span>
        </div>
      ))}
    </div>
  );
}

function IndustryKpiStrip({
  profile,
  accentTheme,
}: {
  profile: IndustryProfile;
  accentTheme: AccentTheme;
}) {
  return (
    <div className="grid grid-cols-3 gap-2">
      <MetricPill label={profile.primaryMetricLabel} value={profile.primaryMetric} accentTheme={accentTheme} />
      <MetricPill label={profile.secondaryMetricLabel} value={profile.secondaryMetric} accentTheme={accentTheme} />
      <MetricPill label={profile.tertiaryMetricLabel} value={profile.tertiaryMetric} accentTheme={accentTheme} />
    </div>
  );
}

function IndustryComplianceCard({
  profile,
  accentTheme,
}: {
  profile: IndustryProfile;
  accentTheme: AccentTheme;
}) {
  const compliance =
    profile.key === "healthcare"
      ? "HIPAA-style privacy"
      : profile.key === "insurance"
        ? "Policy compliance"
        : profile.key === "finance"
          ? "KYC/AML checks"
          : profile.key === "education"
            ? "Parent-safe access"
            : profile.key === "manufacturing"
              ? "QC compliance"
              : profile.key === "realEstate"
                ? "KYC visit checks"
                : profile.key === "retail"
                  ? "Payment protection"
                  : "Secure access";

  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-3 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
      <div className="flex items-center gap-3">
        <span className={cn("flex h-9 w-9 shrink-0 items-center justify-center rounded-xl", accentTheme.buttonSoft)}>
          <ShieldCheck className={cn("h-4 w-4", accentTheme.softText)} />
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-[9px] font-black text-slate-700 dark:text-slate-200">
            {compliance}
          </p>
          <p className="mt-0.5 truncate text-[8px] font-semibold text-slate-400">
            Role-based access and audit log enabled
          </p>
        </div>
      </div>
    </div>
  );
}

function MessageInput() {
  return (
    <div className="mt-auto flex items-center gap-2 rounded-xl border border-slate-100 bg-slate-50 px-3 py-2.5 text-[9px] font-semibold text-slate-400 dark:border-white/10 dark:bg-white/5">
      <MessageCircle className="h-3.5 w-3.5 shrink-0" />
      <span className="truncate">Type a message...</span>
    </div>
  );
}

function PrimaryButton({
  label,
  accentTheme,
}: {
  label: string;
  accentTheme: AccentTheme;
}) {
  return (
    <div
      className={cn(
        "relative mt-auto overflow-hidden rounded-xl px-3 py-2.5 text-center text-[10px] font-black text-white transition shadow-sm",
        accentTheme.button,
      )}
    >
      <span className="absolute inset-x-4 top-0 h-px bg-white/55" />
      <span className="absolute -right-4 -top-4 h-10 w-10 rounded-full bg-white/20 blur-xl" />
      <span className="relative">{label}</span>
    </div>
  );
}

function SecondaryButton({
  label,
  accentTheme,
}: {
  label: string;
  accentTheme: AccentTheme;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border px-3 py-2.5 text-center text-[10px] font-black",
        accentTheme.softBorder,
        accentTheme.buttonSoft,
        accentTheme.softText,
      )}
    >
      {label}
    </div>
  );
}

function BottomNav({
  active,
  accentTheme,
}: {
  active: BottomTabId;
  accentTheme: AccentTheme;
}) {
  const items: Array<{ id: BottomTabId; icon: LucideIcon }> = [
    { id: "home", icon: Home },
    { id: "explore", icon: Search },
    { id: "requests", icon: Bell },
    { id: "profile", icon: UserRound },
  ];

  return (
    <div className="mt-auto flex items-center justify-between rounded-full bg-white/92 px-3 py-2 shadow-[0_14px_34px_rgba(15,23,42,0.10)] backdrop-blur dark:bg-white/[0.07]">
      {items.map((item) => {
        const Icon = item.icon;
        const isActive = item.id === active;

        return (
          <span
            key={item.id}
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-full",
              isActive ? [accentTheme.button, "text-white"].join(" ") : "text-slate-400",
            )}
          >
            <Icon className="h-4 w-4" />
          </span>
        );
      })}
    </div>
  );
}

function getChips(demo: IndustryMobileAppDemo, count: number) {
  const fallback = [
    demo.brand,
    demo.title,
    demo.headline,
    "Live updates",
    "Smart alerts",
    "Fast access",
    "Saved activity",
    "Secure access",
  ];

  return [...demo.chips, ...fallback].filter(Boolean).slice(0, count);
}

function getAccentTheme(tone: DemoTone): AccentTheme {
  switch (tone) {
    case "violet":
      return {
        softBg:
          "bg-gradient-to-br from-violet-50 via-fuchsia-50 to-white dark:from-violet-500/15 dark:via-fuchsia-500/10 dark:to-white/[0.03]",
        softBorder: "border-violet-100 dark:border-violet-500/20",
        softText: "text-violet-700 dark:text-violet-300",
        button:
          "bg-gradient-to-r from-violet-600 via-fuchsia-600 to-indigo-600 shadow-[0_12px_28px_rgba(124,58,237,0.25)]",
        buttonSoft:
          "bg-gradient-to-r from-violet-100 to-fuchsia-100 dark:from-violet-500/15 dark:to-fuchsia-500/15",
        glow: "bg-violet-300/50 dark:bg-violet-500/20",
        ring: "ring-violet-200 dark:ring-violet-500/20",
      };

    case "emerald":
      return {
        softBg:
          "bg-gradient-to-br from-emerald-50 via-teal-50 to-white dark:from-emerald-500/15 dark:via-teal-500/10 dark:to-white/[0.03]",
        softBorder: "border-emerald-100 dark:border-emerald-500/20",
        softText: "text-emerald-700 dark:text-emerald-300",
        button:
          "bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 shadow-[0_12px_28px_rgba(16,185,129,0.25)]",
        buttonSoft:
          "bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-500/15 dark:to-teal-500/15",
        glow: "bg-emerald-300/50 dark:bg-emerald-500/20",
        ring: "ring-emerald-200 dark:ring-emerald-500/20",
      };

    case "orange":
      return {
        softBg:
          "bg-gradient-to-br from-amber-50 via-orange-50 to-white dark:from-amber-500/15 dark:via-orange-500/10 dark:to-white/[0.03]",
        softBorder: "border-amber-100 dark:border-amber-500/20",
        softText: "text-amber-700 dark:text-amber-300",
        button:
          "bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 shadow-[0_12px_28px_rgba(245,158,11,0.25)]",
        buttonSoft:
          "bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-500/15 dark:to-orange-500/15",
        glow: "bg-amber-300/50 dark:bg-amber-500/20",
        ring: "ring-amber-200 dark:ring-amber-500/20",
      };

    case "rose":
      return {
        softBg:
          "bg-gradient-to-br from-rose-50 via-pink-50 to-white dark:from-rose-500/15 dark:via-pink-500/10 dark:to-white/[0.03]",
        softBorder: "border-rose-100 dark:border-rose-500/20",
        softText: "text-rose-700 dark:text-rose-300",
        button:
          "bg-gradient-to-r from-rose-600 via-pink-600 to-red-500 shadow-[0_12px_28px_rgba(225,29,72,0.25)]",
        buttonSoft:
          "bg-gradient-to-r from-rose-100 to-pink-100 dark:from-rose-500/15 dark:to-pink-500/15",
        glow: "bg-rose-300/50 dark:bg-rose-500/20",
        ring: "ring-rose-200 dark:ring-rose-500/20",
      };

    default:
      return {
        softBg:
          "bg-gradient-to-br from-blue-50 via-sky-50 to-white dark:from-blue-500/15 dark:via-sky-500/10 dark:to-white/[0.03]",
        softBorder: "border-blue-100 dark:border-blue-500/20",
        softText: "text-blue-700 dark:text-blue-300",
        button:
          "bg-gradient-to-r from-blue-600 via-sky-600 to-violet-600 shadow-[0_12px_28px_rgba(37,99,235,0.25)]",
        buttonSoft:
          "bg-gradient-to-r from-blue-100 to-sky-100 dark:from-blue-500/15 dark:to-sky-500/15",
        glow: "bg-blue-300/50 dark:bg-blue-500/20",
        ring: "ring-blue-200 dark:ring-blue-500/20",
      };
  }
}
