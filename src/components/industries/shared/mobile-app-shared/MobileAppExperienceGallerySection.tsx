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
  MessageCircle,
  Package,
  Search,
  Settings,
  ShieldCheck,
  Star,
  Truck,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import type {
  IndustryMobileAppDemo,
  IndustryMobileAppPageData,
} from "../industryMobileAppData";
import {
  MobileAppIconBadge,
  MobileAppSectionHeader,
  MobileAppSectionShell,
  cn,
  getDemoTone,
} from "./mobileAppSectionUtils";

const PHONE_WIDTH = 268;
const PHONE_HEIGHT = 452;
const PHONE_INNER_HEIGHT = 424;
const PHONE_CONTENT_HEIGHT = 392;

type AccentTheme = {
  softBg: string;
  softBorder: string;
  softText: string;
  button: string;
  buttonSoft: string;
  glow: string;
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

const screenOrder: Array<{ type: AppScreenType; label: string }> = [
  { type: "login", label: "Login" },
  { type: "tabHome", label: "Home" },
  { type: "tabExplore", label: "Explore" },
  { type: "tabRequests", label: "Requests" },
  { type: "tabProfile", label: "Profile" },
  { type: "search", label: "Search" },
  { type: "detail", label: "Details" },
  { type: "form", label: "New Request" },
  { type: "tracking", label: "Tracking" },
  { type: "payment", label: "Payment" },
  { type: "notifications", label: "Alerts" },
  { type: "messages", label: "Messages" },
  { type: "support", label: "Support" },
  { type: "success", label: "Success" },
  { type: "feedback", label: "Feedback" },
  { type: "settings", label: "Settings" },
];

export default function MobileAppExperienceGallerySection({
  data,
  onOpenDemo,
}: {
  data: IndustryMobileAppPageData;
  onOpenDemo: (demo: IndustryMobileAppDemo) => void;
}) {
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
    <MobileAppSectionShell className="overflow-hidden bg-white dark:bg-slate-950">
      <MobileAppSectionHeader
        number="6"
        eyebrow="Mobile App Experience Gallery"
        title="Beautiful. Intuitive. Engaging."
        highlight="Intuitive"
        description={data.demoGalleryDescription}
      />

      <div className="relative mt-10 overflow-hidden">
        <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-20 w-8 bg-gradient-to-r from-white to-transparent dark:from-slate-950 sm:w-14 lg:w-20" />
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-20 w-8 bg-gradient-to-l from-white to-transparent dark:from-slate-950 sm:w-14 lg:w-20" />

        <div className="mobile-app-gallery-slider overflow-x-auto pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="mobile-app-gallery-track flex w-max items-center gap-5 px-1">
            {sliderScreens.map((screen, index) => (
              <GalleryPhoneCard
                key={`${screen.type}-${screen.demo.title}-${index}`}
                screen={screen}
                onOpenDemo={onOpenDemo}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .mobile-app-gallery-track {
          animation: mobileAppGalleryScroll 88s linear infinite;
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
  );
}

function GalleryPhoneCard({
  screen,
  onOpenDemo,
}: {
  screen: AppScreen;
  onOpenDemo: (demo: IndustryMobileAppDemo) => void;
}) {
  const demo = screen.demo;
  const Icon = demo.icon;
  const tone = getDemoTone(demo.accent);
  const accentTheme = getAccentTheme(tone);

  return (
    <button
      type="button"
      onClick={() => onOpenDemo(demo)}
      aria-label={`Open ${screen.label} preview`}
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

            <div className="mt-3 min-h-0 flex-1 overflow-hidden">
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
    </button>
  );
}

function PhoneStatusBar() {
  return (
    <div className="flex h-8 items-center justify-between px-5 pt-2 text-[8px] font-black text-slate-950 dark:text-white">
      <span>9:41</span>
      <span className="h-3.5 w-11 rounded-full bg-slate-950 dark:bg-slate-800" />
      <span className="h-2 w-4 rounded-sm border border-slate-950 dark:border-white" />
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
  tone: string;
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
      return (
        <BottomTabExploreScreen screen={screen} accentTheme={accentTheme} />
      );

    case "tabRequests":
      return (
        <BottomTabRequestsScreen screen={screen} accentTheme={accentTheme} />
      );

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
  tone: string;
  accentTheme: AccentTheme;
}) {
  const demo = screen.demo;

  return (
    <div className="flex h-full flex-col">
      <ImageHero demo={demo} className="h-[132px]">
        <div className="relative flex h-full flex-col items-center justify-center text-center">
          <MobileAppIconBadge
            icon={Icon}
            tone={tone}
            className="h-12 w-12 rounded-2xl shadow-sm"
          />
          <h3 className="mt-3 text-sm font-black text-slate-950 dark:text-white">
            Welcome Back!
          </h3>
          <p className="mt-1 line-clamp-2 max-w-[190px] text-[10px] font-semibold leading-4 text-slate-500 dark:text-slate-400">
            Access your {demo.brand.toLowerCase()} dashboard, saved requests,
            alerts, and support history.
          </p>
        </div>
      </ImageHero>

      <div className="mt-4 space-y-2">
        <FieldRow icon={UserRound} label="Email / mobile number" />
        <FieldRow icon={LockKeyhole} label="Secure password" />
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
  tone: string;
  accentTheme: AccentTheme;
}) {
  const demo = screen.demo;
  const chips = getChips(demo, 4);

  return (
    <div className="flex h-full flex-col">
      <ImageHero demo={demo} className="h-[118px]">
        <div className="relative flex h-full items-center justify-between gap-3 p-4">
          <div className="min-w-0">
            <p className="text-[9px] font-black uppercase tracking-[0.14em] text-slate-400">
              Today Overview
            </p>
            <h3 className="mt-1 line-clamp-2 text-sm font-black leading-5 text-slate-950 dark:text-white">
              {demo.headline}
            </h3>
            <p className="mt-2 line-clamp-1 text-[10px] font-semibold text-slate-500">
              {demo.subtitle}
            </p>
          </div>

          <MobileAppIconBadge
            icon={Icon}
            tone={tone}
            className="h-10 w-10 shrink-0 rounded-2xl"
          />
        </div>
      </ImageHero>

      <div className="mt-3 grid grid-cols-2 gap-2">
        {chips.map((chip, index) => {
          const ChipIcon = [Home, Search, Package, Heart][index % 4];

          return (
            <MiniGridCard
              key={`${chip}-${index}`}
              icon={ChipIcon}
              label={chip}
              active={index === 0}
              accentTheme={accentTheme}
            />
          );
        })}
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
  const chips = getChips(demo, 5);

  return (
    <div className="flex h-full flex-col">
      <SearchBar label={`Search ${demo.brand.toLowerCase()}...`} />

      <div className="mt-3 grid grid-cols-2 gap-2">
        {chips.slice(0, 2).map((chip, index) => (
          <ImageTile
            key={`${chip}-${index}`}
            demo={demo}
            label={chip}
            active={index === 0}
            accentTheme={accentTheme}
          />
        ))}
      </div>

      <div className="mt-3 space-y-2">
        {chips.slice(2, 5).map((chip, index) => (
          <ListRow
            key={`${chip}-${index}`}
            icon={Package}
            title={chip}
            subtitle={demo.brand}
            action="Open"
            active={index === 0}
            accentTheme={accentTheme}
          />
        ))}
      </div>

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
  const chips = getChips(demo, 4);

  return (
    <div className="flex h-full flex-col">
      <HeaderPanel
        icon={CalendarCheck}
        eyebrow="My Requests"
        title={demo.title}
        accentTheme={accentTheme}
      />

      <div className="mt-4 space-y-2">
        {chips.map((chip, index) => (
          <ListRow
            key={`${chip}-${index}`}
            icon={CheckCircle2}
            title={chip}
            subtitle={index === 0 ? "In progress" : "Saved records"}
            action={index === 0 ? "Live" : "View"}
            active={index === 0}
            accentTheme={accentTheme}
          />
        ))}
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
  tone: string;
  accentTheme: AccentTheme;
}) {
  const demo = screen.demo;
  const chips = getChips(demo, 4);

  return (
    <div className="flex h-full flex-col">
      <ImageHero demo={demo} className="h-[124px]">
        <div className="relative flex h-full flex-col items-center justify-center text-center">
          <MobileAppIconBadge
            icon={Icon}
            tone={tone}
            className="h-12 w-12 rounded-2xl shadow-sm"
          />
          <h3 className="mt-3 text-sm font-black text-slate-950 dark:text-white">
            My Account
          </h3>
          <p className="mt-1 line-clamp-2 max-w-[200px] text-[10px] font-semibold leading-4 text-slate-500">
            Manage profile details, saved documents, support tickets, and app
            preferences.
          </p>
        </div>
      </ImageHero>

      <div className="mt-4 space-y-2">
        {chips.map((chip, index) => (
          <ListRow
            key={`${chip}-${index}`}
            icon={UserRound}
            title={chip}
            subtitle={index === 0 ? "Verified profile" : "Account control"}
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

function SearchScreen({
  screen,
  accentTheme,
}: {
  screen: AppScreen;
  accentTheme: AccentTheme;
}) {
  const demo = screen.demo;
  const chips = getChips(demo, 5);

  return (
    <div className="flex h-full flex-col">
      <SearchBar label="Search requests, services, documents, or updates..." />

      <div className="mt-4">
        <p className="text-[9px] font-black uppercase tracking-[0.12em] text-slate-400">
          Recommended for you
        </p>

        <div className="mt-2 space-y-2">
          {chips.slice(0, 4).map((chip, index) => (
            <ListRow
              key={`${chip}-${index}`}
              icon={Search}
              title={chip}
              subtitle={demo.brand}
              action="Select"
              active={index === 0}
              accentTheme={accentTheme}
            />
          ))}
        </div>
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
  tone: string;
  accentTheme: AccentTheme;
}) {
  const demo = screen.demo;

  return (
    <div className="flex h-full flex-col">
      <ImageHero demo={demo} className="h-[148px]">
        <div className="relative flex h-full items-center gap-4 px-4">
          <MobileAppIconBadge
            icon={Icon}
            tone={tone}
            className="h-14 w-14 shrink-0 rounded-3xl shadow-sm"
          />

          <div className="min-w-0">
            <h3 className="line-clamp-2 text-sm font-black leading-5 text-slate-950 dark:text-white">
              {demo.headline}
            </h3>

            <p className="mt-2 line-clamp-3 text-[10px] font-semibold leading-4 text-slate-500 dark:text-slate-400">
              {demo.subtitle}
            </p>
          </div>
        </div>
      </ImageHero>

      <div className="mt-4 space-y-2">
        {getChips(demo, 3).map((chip, index) => (
          <FeatureRow
            key={`${chip}-${index}`}
            label={chip}
            active={index === 0}
            accentTheme={accentTheme}
          />
        ))}
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

  return (
    <div className="flex h-full flex-col">
      <HeaderPanel
        icon={CalendarCheck}
        eyebrow="New Request"
        title={demo.title}
        accentTheme={accentTheme}
      />

      <div className="mt-4 space-y-2">
        {[
          "Select request type",
          "Upload details",
          "Pick preferred slot",
          "Review & confirm",
        ].map((item, index) => (
          <StepRow
            key={item}
            index={index}
            label={item}
            done={index <= 1}
            accentTheme={accentTheme}
          />
        ))}
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

  return (
    <div className="flex h-full flex-col">
      <div className="relative flex-1 overflow-hidden rounded-[1.35rem] border border-slate-100 bg-[#f5f7fb] dark:border-white/10 dark:bg-slate-900">
        <div
          className="absolute inset-x-0 top-0 h-28 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${demo.image})` }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/80 dark:to-slate-950/90" />

        <div className="absolute inset-0 opacity-60">
          <div className="absolute left-4 top-6 h-px w-40 bg-slate-200" />
          <div className="absolute left-8 top-16 h-px w-36 bg-slate-200" />
          <div className="absolute left-3 top-28 h-px w-44 bg-slate-200" />
          <div className="absolute left-8 top-9 h-44 w-px bg-slate-200" />
          <div className="absolute left-24 top-5 h-52 w-px bg-slate-200" />
          <div className="absolute right-9 top-12 h-44 w-px bg-slate-200" />
        </div>

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
          <circle
            cx="34"
            cy="178"
            r="8"
            fill="#ffffff"
            stroke="#0f172a"
            strokeWidth="3"
          />
          <circle
            cx="86"
            cy="122"
            r="7"
            fill="#ffffff"
            stroke="#0f172a"
            strokeWidth="3"
          />
          <circle
            cx="180"
            cy="34"
            r="8"
            fill="#ffffff"
            stroke="#0f172a"
            strokeWidth="3"
          />
        </svg>

        <div className="absolute bottom-3 left-3 right-3 rounded-xl bg-white p-3 shadow-[0_12px_28px_rgba(15,23,42,0.12)] dark:bg-slate-950">
          <p className="line-clamp-1 text-[9px] font-black text-slate-950 dark:text-white">
            {demo.headline}
          </p>
          <p className="mt-1 line-clamp-2 text-[8px] font-semibold text-slate-500 dark:text-slate-400">
            {demo.subtitle}
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
  const demo = screen.demo;
  const chips = getChips(demo, 3);

  return (
    <div className="flex h-full flex-col">
      <div
        className={cn(
          "rounded-[1.35rem] border px-4 py-4",
          accentTheme.softBorder,
          accentTheme.softBg,
        )}
      >
        <p className="text-[9px] font-black uppercase tracking-[0.12em] text-slate-500">
          Payment Summary
        </p>

        <div className="mt-3 flex items-end justify-between">
          <p className="text-2xl font-black text-slate-950 dark:text-white">
            {getDemoAmount(demo)}
          </p>
          <CreditCard className={cn("h-6 w-6", accentTheme.softText)} />
        </div>

        <div
          className={cn(
            "mt-3 inline-flex rounded-full px-2.5 py-1 text-[8px] font-black",
            accentTheme.buttonSoft,
            accentTheme.softText,
          )}
        >
          Protected payment
        </div>
      </div>

      <div className="mt-4 space-y-2">
        {chips.map((chip, index) => (
          <ListRow
            key={`${chip}-${index}`}
            icon={Package}
            title={chip}
            subtitle="App transaction"
            action={index === 0 ? "Due" : "Paid"}
            active={index === 0}
            accentTheme={accentTheme}
          />
        ))}
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
  const notifications = [
    `${demo.title} has moved to the next step`,
    `${demo.brand} sent a new status update`,
    "Required document or reminder added",
    "Support replied with the next action",
  ];

  return (
    <div className="flex h-full flex-col">
      <HeaderPanel
        icon={Bell}
        eyebrow="Notifications"
        title="Recent Activity"
        accentTheme={accentTheme}
      />

      <div className="mt-4 space-y-2">
        {notifications.map((item, index) => (
          <NotificationRow
            key={`${item}-${index}`}
            index={index}
            label={item}
            accentTheme={accentTheme}
          />
        ))}
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

  return (
    <div className="flex h-full flex-col">
      <HeaderPanel
        icon={MessageCircle}
        eyebrow="Messages"
        title="Support Chat"
        accentTheme={accentTheme}
      />

      <ChatBubble
        align="left"
        text={`Hi, can you check the latest update for ${demo.title}?`}
      />
      <ChatBubble
        align="right"
        text="Sure — I can see the request is active and the next step is ready."
        accentTheme={accentTheme}
      />
      <ChatBubble
        align="left"
        text="Can I upload documents and track status here?"
      />
      <ChatBubble
        align="right"
        text="Yes, documents, chat, alerts, and status updates stay in this app."
        accentTheme={accentTheme}
      />

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
  const chips = getChips(demo, 3);

  return (
    <div className="flex h-full flex-col">
      <HeaderPanel
        icon={Headphones}
        eyebrow="Help Center"
        title="How can we help?"
        accentTheme={accentTheme}
      />

      <div className="mt-4 space-y-2">
        {chips.map((chip, index) => (
          <ListRow
            key={`${chip}-${index}`}
            icon={Headphones}
            title={chip}
            subtitle={index === 0 ? "Priority help" : "Support topic"}
            action="Open"
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
  tone: string;
  accentTheme: AccentTheme;
}) {
  const demo = screen.demo;

  return (
    <div className="flex h-full flex-col">
      <ImageHero demo={demo} className="flex-1">
        <div className="relative flex h-full flex-col items-center justify-center px-4 text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-sm dark:bg-white/10">
            <CheckCircle2 className={cn("h-9 w-9", accentTheme.softText)} />
          </div>

          <h3 className="mt-5 text-sm font-black leading-5 text-slate-950 dark:text-white">
            Request Submitted
          </h3>

          <p className="mt-2 line-clamp-3 max-w-[200px] text-[10px] font-semibold leading-4 text-slate-500 dark:text-slate-400">
            Your {demo.brand.toLowerCase()} request has been submitted
            successfully.
          </p>

          <MobileAppIconBadge
            icon={Icon}
            tone={tone}
            className="mt-5 h-10 w-10 rounded-2xl"
          />
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
  tone: string;
  accentTheme: AccentTheme;
}) {
  const demo = screen.demo;

  return (
    <div className="flex h-full flex-col">
      <div className="flex flex-1 flex-col rounded-[1.35rem] border border-slate-100 bg-white px-4 py-5 dark:border-white/10 dark:bg-white/[0.04]">
        <MobileAppIconBadge
          icon={Icon}
          tone={tone}
          className="mx-auto h-12 w-12 rounded-2xl"
        />

        <h3 className="mt-4 text-center text-sm font-black leading-5 text-slate-950 dark:text-white">
          Thank you!
        </h3>

        <p className="mt-2 text-center text-[10px] font-semibold leading-4 text-slate-500 dark:text-slate-400">
          Rate your latest {demo.brand.toLowerCase()} interaction.
        </p>

        <div className="mt-5 flex items-center justify-center gap-1.5">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              className="h-4 w-4 fill-amber-400 text-amber-400"
            />
          ))}
        </div>

        <div className="mt-5 rounded-xl border border-slate-100 bg-slate-50 px-3 py-3 text-[9px] font-medium text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-400">
          Tell us what worked well or what needs improvement...
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
  const demo = screen.demo;
  const settings = [
    "Notifications",
    "Saved documents",
    "Privacy & security",
    `${demo.brand} preferences`,
  ];

  return (
    <div className="flex h-full flex-col">
      <HeaderPanel
        icon={Settings}
        eyebrow="App Settings"
        title="App Preferences"
        accentTheme={accentTheme}
      />

      <div className="mt-4 space-y-2">
        {settings.map((item, index) => (
          <ListRow
            key={`${item}-${index}`}
            icon={Settings}
            title={item}
            subtitle={index === 0 ? "Enabled" : "Manage option"}
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
        className="absolute inset-0 bg-cover bg-center opacity-38"
        style={{ backgroundImage: `url(${demo.image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-white/62 via-white/88 to-white dark:from-slate-950/55 dark:via-slate-950/82 dark:to-slate-950" />
      <div className="absolute -right-5 -top-5 h-20 w-20 rounded-full bg-white/55 blur-2xl dark:bg-white/10" />
      <div className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-blue-200/35 blur-2xl dark:bg-blue-500/10" />
      <div className="absolute right-3 top-3 hidden h-8 w-12 rounded-xl border border-white/60 bg-white/55 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/10 sm:block">
        <div className="mx-1 mt-1 h-1.5 rounded-full bg-slate-300/70 dark:bg-white/20" />
        <div className="mx-1 mt-1 grid grid-cols-3 gap-0.5">
          <span className="h-1.5 rounded-full bg-blue-400/70" />
          <span className="h-1.5 rounded-full bg-emerald-400/70" />
          <span className="h-1.5 rounded-full bg-violet-400/70" />
        </div>
      </div>
      <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full border border-white/70 bg-white/60 px-2 py-1 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/10">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
        <span className="text-[7px] font-black uppercase tracking-[0.12em] text-slate-600 dark:text-slate-300">
          Live
        </span>
      </div>
      {children}
    </div>
  );
}

function ImageTile({
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
        className="absolute inset-0 bg-cover bg-center opacity-46"
        style={{ backgroundImage: `url(${demo.image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/35 via-white/72 to-white dark:from-slate-950/25 dark:via-slate-950/72 dark:to-slate-950" />
      <div className="absolute right-2 top-2 flex -space-x-1">
        <span className="h-4 w-4 rounded-full border border-white bg-blue-400" />
        <span className="h-4 w-4 rounded-full border border-white bg-emerald-400" />
        <span className="h-4 w-4 rounded-full border border-white bg-violet-400" />
      </div>
      <div className="absolute bottom-2 left-2 right-2 h-1 rounded-full bg-white/70 dark:bg-white/10">
        <div
          className={cn(
            "h-1 rounded-full",
            active ? accentTheme.button : "bg-slate-400",
          )}
          style={{ width: active ? "72%" : "46%" }}
        />
      </div>

      <div className="relative flex h-full flex-col justify-end pb-2">
        <span
          className={cn(
            "w-fit rounded-full px-2 py-1 text-[8px] font-black shadow-sm",
            active
              ? [accentTheme.buttonSoft, accentTheme.softText].join(" ")
              : "bg-white text-slate-500 dark:bg-white/10 dark:text-slate-300",
          )}
        >
          {active ? "Popular" : "New"}
        </span>

        <p className="mt-2 line-clamp-1 text-[9px] font-black text-slate-800 dark:text-white">
          {label}
        </p>
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
    <div
      className={cn(
        "relative overflow-hidden rounded-[1.35rem] border px-4 py-4 shadow-sm",
        accentTheme.softBorder,
        accentTheme.softBg,
      )}
    >
      <div className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-white/55 blur-xl dark:bg-white/10" />
      <div className="absolute right-3 bottom-3 grid grid-cols-3 gap-1 opacity-60">
        <span
          className={cn("h-1.5 w-4 rounded-full", accentTheme.buttonSoft)}
        />
        <span
          className={cn("h-1.5 w-3 rounded-full", accentTheme.buttonSoft)}
        />
        <span
          className={cn("h-1.5 w-5 rounded-full", accentTheme.buttonSoft)}
        />
      </div>
      <div className="relative flex items-center gap-3">
        <div
          className={cn(
            "flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl shadow-sm",
            accentTheme.buttonSoft,
          )}
        >
          <Icon className={cn("h-5 w-5", accentTheme.softText)} />
        </div>

        <div className="min-w-0">
          <p className="text-[9px] font-black uppercase tracking-[0.12em] text-slate-500">
            {eyebrow}
          </p>

          <h3 className="truncate text-sm font-black text-slate-950 dark:text-white">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
}

function FieldRow({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-slate-100 bg-gradient-to-r from-slate-50 to-white px-3 py-2.5 shadow-sm dark:border-white/10 dark:from-white/5 dark:to-white/[0.02]">
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm dark:bg-white/10">
        <Icon className="h-3.5 w-3.5 text-slate-400" />
      </span>
      <span className="truncate text-[9px] font-bold text-slate-400">
        {label}
      </span>
    </div>
  );
}

function SearchBar({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-slate-100 bg-gradient-to-r from-slate-50 to-white px-3 py-2.5 text-[9px] font-semibold text-slate-400 shadow-sm dark:border-white/10 dark:from-white/5 dark:to-white/[0.02]">
      <Search className="h-3.5 w-3.5 shrink-0" />
      <span className="truncate">{label}</span>
      <span className="ml-auto h-1.5 w-1.5 rounded-full bg-emerald-400" />
    </div>
  );
}

function MiniGridCard({
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
        "rounded-2xl border px-2 py-3 text-center shadow-sm",
        active
          ? [accentTheme.softBorder, accentTheme.softBg].join(" ")
          : "border-slate-100 bg-white dark:border-white/10 dark:bg-white/[0.04]",
      )}
    >
      <div
        className={cn(
          "mx-auto flex h-8 w-8 items-center justify-center rounded-xl",
          active ? accentTheme.buttonSoft : "bg-slate-50 dark:bg-white/10",
        )}
      >
        <Icon
          className={cn(
            "h-4 w-4",
            active
              ? accentTheme.softText
              : "text-slate-700 dark:text-slate-200",
          )}
        />
      </div>
      <p className="mt-2 truncate text-[9px] font-black text-slate-700 dark:text-slate-200">
        {label}
      </p>
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
        "flex items-center justify-between rounded-xl border px-3 py-2.5 shadow-sm",
        active
          ? [accentTheme.softBorder, accentTheme.softBg].join(" ")
          : "border-slate-100 bg-white dark:border-white/10 dark:bg-white/[0.04]",
      )}
    >
      <div className="flex min-w-0 items-center gap-2">
        <div
          className={cn(
            "flex h-8 w-8 shrink-0 items-center justify-center rounded-xl",
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
            : "text-slate-400",
        )}
      >
        {action}
      </span>
    </div>
  );
}

function FeatureRow({
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

function StepRow({
  index,
  label,
  done,
  accentTheme,
}: {
  index: number;
  label: string;
  done: boolean;
  accentTheme: AccentTheme;
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-between rounded-xl border px-3 py-2.5 shadow-sm",
        done
          ? [accentTheme.softBorder, accentTheme.softBg].join(" ")
          : "border-slate-100 bg-white dark:border-white/10 dark:bg-white/[0.04]",
      )}
    >
      <div className="flex items-center gap-2">
        <span
          className={cn(
            "flex h-6 w-6 items-center justify-center rounded-full text-[8px] font-black",
            done
              ? [accentTheme.buttonSoft, accentTheme.softText].join(" ")
              : "bg-slate-50 text-slate-400 dark:bg-white/10",
          )}
        >
          {index + 1}
        </span>
        <span className="text-[9px] font-black text-slate-700 dark:text-slate-200">
          {label}
        </span>
      </div>

      {done ? (
        <CheckCircle2 className={cn("h-4 w-4", accentTheme.softText)} />
      ) : null}
    </div>
  );
}

function NotificationRow({
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
  accentTheme,
}: {
  align: "left" | "right";
  text: string;
  accentTheme?: AccentTheme;
}) {
  const isRight = align === "right";

  return (
    <div
      className={cn(
        "mt-3 flex max-w-[88%] items-end gap-1.5",
        isRight && "ml-auto flex-row-reverse",
      )}
    >
      <span
        className={cn(
          "h-5 w-5 shrink-0 rounded-full border border-white shadow-sm",
          isRight ? (accentTheme?.buttonSoft ?? "bg-blue-100") : "bg-slate-200",
        )}
      />
      <div
        className={cn(
          "rounded-2xl px-3 py-2 text-[9px] font-semibold leading-4 shadow-sm",
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
    </div>
  );
}

function MessageInput() {
  return (
    <div className="mt-auto flex items-center gap-2 rounded-xl border border-slate-100 bg-gradient-to-r from-slate-50 to-white px-3 py-2.5 text-[9px] font-semibold text-slate-400 shadow-sm dark:border-white/10 dark:from-white/5 dark:to-white/[0.02]">
      <MessageCircle className="h-3.5 w-3.5 shrink-0" />
      <span className="truncate">Ask a question or share an update...</span>
      <span className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-[8px] font-black text-white shadow-sm">
        ↗
      </span>
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
    <div className="mt-auto flex items-center justify-between rounded-2xl border border-slate-100 bg-white px-3 py-2 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
      {items.map((item) => {
        const Icon = item.icon;
        const isActive = item.id === active;

        return (
          <span
            key={item.id}
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-xl",
              isActive
                ? [accentTheme.buttonSoft, accentTheme.softText].join(" ")
                : "text-slate-400",
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
  const profile = getIndustryProfile(demo);
  const fallback = [
    ...profile.actions,
    demo.brand,
    demo.title,
    demo.headline,
    "Live status",
    "Smart reminders",
    "Saved documents",
    "Secure access",
  ];

  return [...demo.chips, ...fallback]
    .filter(Boolean)
    .filter((item, index, list) => list.indexOf(item) === index)
    .slice(0, count);
}

function getDemoAmount(demo: IndustryMobileAppDemo) {
  const profile = getIndustryProfile(demo);
  return profile.amount;
}

type IndustryProfile = {
  amount: string;
  actions: string[];
};

function getIndustryProfile(demo: IndustryMobileAppDemo): IndustryProfile {
  const text = [
    demo.brand,
    demo.title,
    demo.headline,
    demo.subtitle,
    ...demo.chips,
  ]
    .join(" ")
    .toLowerCase();

  if (
    text.includes("insurance") ||
    text.includes("claim") ||
    text.includes("policy") ||
    text.includes("premium") ||
    text.includes("renew")
  ) {
    return {
      amount: "₹4,250",
      actions: [
        "Policy overview",
        "File a claim",
        "Upload documents",
        "Renewal reminder",
        "Premium payment",
        "Claim status",
        "Agent chat",
        "Coverage details",
      ],
    };
  }

  if (
    text.includes("health") ||
    text.includes("doctor") ||
    text.includes("patient") ||
    text.includes("appointment") ||
    text.includes("clinic")
  ) {
    return {
      amount: "₹1,200",
      actions: [
        "Book appointment",
        "Doctor availability",
        "Prescription upload",
        "Lab report",
        "Video consult",
        "Patient records",
        "Medicine reminder",
        "Care support",
      ],
    };
  }

  if (
    text.includes("retail") ||
    text.includes("shop") ||
    text.includes("cart") ||
    text.includes("catalog") ||
    text.includes("product") ||
    text.includes("order")
  ) {
    return {
      amount: "₹2,499",
      actions: [
        "Browse catalog",
        "Add to cart",
        "Order tracking",
        "New arrivals",
        "Wishlist",
        "Store offers",
        "Delivery status",
        "Support chat",
      ],
    };
  }

  if (
    text.includes("education") ||
    text.includes("student") ||
    text.includes("course") ||
    text.includes("class") ||
    text.includes("assignment")
  ) {
    return {
      amount: "₹8,500",
      actions: [
        "Course dashboard",
        "Class schedule",
        "Assignment upload",
        "Fee payment",
        "Live lecture",
        "Attendance",
        "Student support",
        "Progress report",
      ],
    };
  }

  if (
    text.includes("real estate") ||
    text.includes("property") ||
    text.includes("listing") ||
    text.includes("site visit") ||
    text.includes("rental")
  ) {
    return {
      amount: "₹15,000",
      actions: [
        "Browse properties",
        "Schedule visit",
        "Shortlist listing",
        "Talk to agent",
        "Price estimate",
        "Document upload",
        "Visit reminder",
        "Deal status",
      ],
    };
  }

  if (
    text.includes("finance") ||
    text.includes("loan") ||
    text.includes("bank") ||
    text.includes("wallet") ||
    text.includes("payment")
  ) {
    return {
      amount: "₹12,750",
      actions: [
        "Account summary",
        "Loan application",
        "KYC upload",
        "EMI reminder",
        "Transaction history",
        "Card support",
        "Payment alerts",
        "Advisor chat",
      ],
    };
  }

  if (
    text.includes("manufacturing") ||
    text.includes("factory") ||
    text.includes("inventory") ||
    text.includes("production") ||
    text.includes("shipment")
  ) {
    return {
      amount: "₹32,000",
      actions: [
        "Inventory status",
        "Production queue",
        "Quality check",
        "Shipment tracking",
        "Work order",
        "Vendor updates",
        "Machine alerts",
        "Supervisor chat",
      ],
    };
  }

  return {
    amount: "₹2,450",
    actions: [
      "Dashboard",
      "New request",
      "Live tracking",
      "Upload document",
      "Payment status",
      "Notifications",
      "Support chat",
      "Saved records",
    ],
  };
}

function getAccentTheme(tone: string): AccentTheme {
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
      };

    case "amber":
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
      };
  }
}
