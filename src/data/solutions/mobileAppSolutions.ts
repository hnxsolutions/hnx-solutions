import type { SolutionCard, SolutionPageData, SolutionStat } from "./types";
import { enhanceSolutions } from "./contentEnhancements";

const href = (slug: string) => `/solutions/mobile-apps/${slug}`;

const stat = (label: string, value: string, note: string): SolutionStat => ({
  label,
  value,
  note,
});

const card = (
  title: string,
  text: string,
  icon: SolutionCard["icon"],
): SolutionCard => ({
  title,
  text,
  icon,
});

const mobileAppSolutionsBase: SolutionPageData[] = [
  {
    slug: "app-strategy",
    label: "App Strategy",
    href: href("app-strategy"),
    icon: "Rocket",
    eyebrow: "Mobile App Strategy",
    headline: "Turn an app idea into a clear launch roadmap.",
    description:
      "We map the user journey, revenue model, feature priority, and technical path before development starts.",
    problem:
      "Most app projects begin with a feature list but no validated flow, launch plan, or business case.",
    solution:
      "HNX defines the app experience, admin connection, MVP scope, analytics plan, and rollout sequence.",
    impact:
      "You get a build-ready roadmap that reduces waste, clarifies budget, and keeps launch decisions tied to business outcomes.",
    stats: [
      stat("Roadmap", "30 days", "MVP, V1, and scale phases"),
      stat("Screens", "18+", "Core customer and admin flows"),
      stat("Risk", "-40%", "Fewer late-stage scope surprises"),
      stat("Launch", "Clear", "Store, analytics, and support plan"),
    ],
    problems: [
      card("Unclear MVP", "Teams build too much too early without knowing what users need first.", "Layers3"),
      card("Disconnected admin", "Customer app flows fail when the backend operations path is not planned.", "LayoutDashboard"),
      card("No launch path", "Store listing, tracking, support, and update plans are left until the end.", "Store"),
      card("Weak economics", "Payments, subscriptions, retention, and support costs are not modeled upfront.", "CreditCard"),
    ],
    flow: [
      card("Discover users", "Define roles, journeys, pain points, and business events the app must support.", "Users"),
      card("Shape MVP", "Prioritize features into launch, follow-up, and later growth releases.", "CheckCircle2"),
      card("Plan systems", "Map APIs, admin tools, notifications, payments, analytics, and support channels.", "Network"),
      card("Prepare launch", "Create a practical delivery plan for store review, rollout, and iteration.", "Rocket"),
    ],
    modules: [
      card("User journey map", "End-to-end flows for onboarding, booking, ordering, payments, support, and retention.", "Workflow"),
      card("Feature roadmap", "A phased build plan with scope, dependencies, and launch priorities.", "Layers3"),
      card("Admin blueprint", "Operational views for orders, users, content, notifications, and reports.", "LayoutDashboard"),
      card("Launch checklist", "Store assets, analytics events, support workflows, and update cadence.", "Store"),
    ],
    process: [
      card("Workshop", "Align business goals, audiences, monetization, and app success metrics.", "Users"),
      card("Journey design", "Turn user needs into practical screens, states, and workflows.", "Palette"),
      card("Technical plan", "Define app stack, API needs, admin tools, and integrations.", "ServerCog"),
      card("Roadmap handoff", "Deliver a build-ready scope with milestones and release priorities.", "Rocket"),
    ],
    useCases: [
      card("New app idea", "Validate a customer app before investing in full development.", "Sparkles"),
      card("Service booking app", "Map booking, payments, staff availability, and reminders.", "CheckCircle2"),
      card("Commerce app", "Plan catalog, cart, orders, delivery, and retention flows.", "Store"),
      card("Internal mobile tool", "Design mobile operations for field teams and managers.", "Smartphone"),
    ],
    preview: {
      title: "App Strategy Board",
      subtitle: "MVP scope, launch phases, and connected systems in one place.",
      metrics: [
        stat("MVP Features", "12", "Ranked by business value"),
        stat("Critical Flows", "7", "Mapped for customer and admin"),
        stat("Launch Risks", "9", "Captured with owners"),
      ],
      rows: ["Customer onboarding", "Booking and payment path", "Admin review queue", "Store launch checklist"],
    },
    ctaTitle: "Ready to plan your mobile app properly?",
    ctaText:
      "We will turn your app idea into a clear product roadmap, screen plan, and build sequence.",
  },
  {
    slug: "flutter-app-development",
    label: "Flutter App Development",
    href: href("flutter-app-development"),
    icon: "Smartphone",
    eyebrow: "Cross-Platform Mobile Apps",
    headline: "Flutter apps built for smooth UX and faster rollout.",
    description:
      "Launch one polished app experience across iOS and Android with connected APIs, admin tools, and analytics.",
    problem:
      "Separate native builds can slow launch, duplicate work, and create inconsistent customer experiences.",
    solution:
      "HNX builds Flutter apps with clean UI systems, secure API connections, push notifications, payments, and release support.",
    impact:
      "You ship faster while keeping the product maintainable, measurable, and ready for growth.",
    stats: [
      stat("Platforms", "2", "iOS and Android from one codebase"),
      stat("UI", "Smooth", "Responsive app interactions"),
      stat("APIs", "Secure", "Auth, data, payments, and admin"),
      stat("Launch", "Store-ready", "Release and update support"),
    ],
    problems: [
      card("Slow dual builds", "Two separate apps create duplicated effort and inconsistent releases.", "Smartphone"),
      card("Weak performance", "Poor state management and heavy screens make apps feel unreliable.", "Activity"),
      card("Missing backend link", "Apps often launch without a strong admin, API, or reporting layer.", "Network"),
      card("Store delays", "Release assets, policies, and review requirements are handled too late.", "Store"),
    ],
    flow: [
      card("Design system", "Create reusable mobile UI patterns for fast, consistent screens.", "Palette"),
      card("App architecture", "Set up navigation, state, authentication, and API structure.", "Code2"),
      card("Connected features", "Build payments, maps, notifications, uploads, and account flows.", "Network"),
      card("Release support", "Prepare builds, store assets, testing tracks, and update process.", "Store"),
    ],
    modules: [
      card("Customer app", "Onboarding, profile, catalog, booking, ordering, payments, and support.", "Smartphone"),
      card("Admin connection", "Admin dashboard and APIs to manage content, orders, users, and reports.", "LayoutDashboard"),
      card("Push notifications", "Segmented alerts for reminders, offers, status updates, and reactivation.", "Bell"),
      card("Analytics events", "Track funnels, retention, errors, and business conversion points.", "BarChart3"),
    ],
    process: [
      card("Prototype", "Confirm screens and interaction patterns before full development.", "Layers3"),
      card("Build", "Develop the Flutter app with clean state and reusable components.", "Code2"),
      card("Connect", "Integrate APIs, payments, notifications, maps, and admin systems.", "Network"),
      card("Launch", "Test, package, submit, and support store release.", "Rocket"),
    ],
    useCases: [
      card("Booking apps", "Let customers book appointments, pay, and receive reminders.", "CheckCircle2"),
      card("Order apps", "Support catalog browsing, checkout, status tracking, and reorders.", "Store"),
      card("Community apps", "Create member profiles, updates, content, and engagement loops.", "Users"),
      card("Field apps", "Give teams mobile access to tasks, checklists, and reports.", "Activity"),
    ],
    preview: {
      title: "Flutter Release Console",
      subtitle: "Feature progress, API health, and launch readiness for both stores.",
      metrics: [
        stat("Builds", "2", "iOS and Android"),
        stat("Crash Rate", "<1%", "Tracked during testing"),
        stat("Events", "24", "Analytics points configured"),
      ],
      rows: ["Authentication flow", "Payment checkout", "Push notification campaign", "Store submission assets"],
    },
    ctaTitle: "Build a mobile app your users enjoy opening.",
    ctaText:
      "We can design, develop, connect, and launch a Flutter app that supports real business workflows.",
  },
  {
    slug: "customer-mobile-app",
    label: "Customer Mobile App",
    href: href("customer-mobile-app"),
    icon: "Users",
    eyebrow: "Customer Experience Apps",
    headline: "A branded app that keeps customers connected.",
    description:
      "Give customers a simple mobile home for bookings, orders, updates, support, payments, and loyalty.",
    problem:
      "Customers bounce between calls, WhatsApp, websites, and manual follow-ups because there is no single app experience.",
    solution:
      "HNX creates customer apps with account flows, self-service actions, notifications, payments, and admin visibility.",
    impact:
      "Your business becomes easier to access, easier to buy from, and easier to support at scale.",
    stats: [
      stat("Self-service", "24/7", "Bookings, orders, and account actions"),
      stat("Engagement", "+30%", "Better repeat touchpoints"),
      stat("Support", "Faster", "Less manual customer chasing"),
      stat("Retention", "Higher", "Personalized mobile reminders"),
    ],
    problems: [
      card("Scattered customer actions", "Bookings, payments, and support happen across too many channels.", "Workflow"),
      card("Manual reminders", "Teams spend time sending status updates and follow-ups manually.", "Bell"),
      card("Poor repeat purchase", "Customers do not have a convenient path back into your business.", "Store"),
      card("No behavior data", "You cannot see what customers try, abandon, or repeat.", "BarChart3"),
    ],
    flow: [
      card("Customer account", "Create profiles, preferences, history, saved details, and permissions.", "Users"),
      card("Core actions", "Enable booking, ordering, payments, requests, support, or status tracking.", "CheckCircle2"),
      card("Engagement layer", "Add reminders, offers, updates, loyalty, and reactivation messages.", "Bell"),
      card("Admin visibility", "Connect every customer action to the dashboard your team uses.", "LayoutDashboard"),
    ],
    modules: [
      card("Mobile home", "A branded dashboard for customer tasks, updates, offers, and history.", "Smartphone"),
      card("Payments and orders", "Checkout, invoices, status updates, and receipts inside the app.", "CreditCard"),
      card("Support channel", "Request help, attach details, and track response status.", "Headphones"),
      card("Retention tools", "Push alerts, saved actions, rewards, and personalized content.", "Bell"),
    ],
    process: [
      card("Customer journey", "Define the actions customers need most often.", "Workflow"),
      card("UX and screens", "Design app flows that stay quick and easy on mobile.", "Palette"),
      card("Admin integration", "Connect customer activity to business operations.", "Network"),
      card("Launch and learn", "Release, track usage, and improve the app with real behavior.", "BarChart3"),
    ],
    useCases: [
      card("Clinics and salons", "Appointments, reminders, payments, and visit history.", "CheckCircle2"),
      card("Education providers", "Student updates, fees, schedules, and parent communication.", "Users"),
      card("Retail and D2C", "Orders, loyalty, offers, returns, and delivery updates.", "Store"),
      card("Service companies", "Requests, quotes, job status, and support tracking.", "Headphones"),
    ],
    preview: {
      title: "Customer App Hub",
      subtitle: "Live activity across bookings, payments, reminders, and support.",
      metrics: [
        stat("Active Users", "4.8k", "Monthly customer app users"),
        stat("Repeat Actions", "+28%", "Bookings and reorders"),
        stat("Support Load", "-35%", "Manual status requests"),
      ],
      rows: ["Upcoming booking reminder", "Payment receipt generated", "Support ticket updated", "Win-back push segment"],
    },
    ctaTitle: "Give your customers a better way to come back.",
    ctaText:
      "We will build a branded customer app connected to the operations your team already runs.",
  },
  {
    slug: "booking-order-app",
    label: "Booking / Order App",
    href: href("booking-order-app"),
    icon: "Store",
    eyebrow: "Booking And Ordering Systems",
    headline: "Mobile booking and ordering without the manual chaos.",
    description:
      "Let customers book, order, pay, track, and receive updates while your team manages everything from one dashboard.",
    problem:
      "Manual bookings and order taking create missed requests, duplicate entries, late updates, and weak payment tracking.",
    solution:
      "HNX builds mobile booking and order flows with availability, payments, notifications, admin queues, and reports.",
    impact:
      "You capture more demand, reduce back-and-forth, and give teams a reliable workflow from request to completion.",
    stats: [
      stat("Bookings", "Live", "Slots, capacity, and confirmations"),
      stat("Payments", "Ready", "Online checkout and receipts"),
      stat("Updates", "Auto", "Push, email, or WhatsApp alerts"),
      stat("Admin", "Unified", "One queue for staff action"),
    ],
    problems: [
      card("Missed requests", "Customer calls and messages are easy to lose during busy hours.", "Bell"),
      card("Slot confusion", "Availability, capacity, and rescheduling are handled manually.", "CheckCircle2"),
      card("Payment gaps", "Teams chase advances, balances, refunds, and receipts by hand.", "CreditCard"),
      card("No order visibility", "Customers keep asking for status because tracking is unclear.", "Activity"),
    ],
    flow: [
      card("Customer selects", "Choose service, product, slot, location, quantity, or add-ons.", "Store"),
      card("System validates", "Check availability, pricing, capacity, rules, and customer details.", "CheckCircle2"),
      card("Payment and confirmation", "Collect payment, issue confirmation, and trigger reminders.", "CreditCard"),
      card("Admin fulfillment", "Route booking or order to staff with status, notes, and reports.", "LayoutDashboard"),
    ],
    modules: [
      card("Booking engine", "Calendar rules, slot limits, staff assignment, rescheduling, and cancellations.", "CheckCircle2"),
      card("Order workflow", "Cart, order notes, delivery or pickup, status tracking, and repeat orders.", "Store"),
      card("Payment layer", "Online payments, invoices, refunds, balances, and receipts.", "CreditCard"),
      card("Operations dashboard", "Queues, staff actions, notifications, and daily performance reports.", "LayoutDashboard"),
    ],
    process: [
      card("Rules mapping", "Capture services, pricing, slot logic, fulfillment stages, and exceptions.", "Workflow"),
      card("Mobile UX", "Design a fast booking or ordering experience for customers.", "Smartphone"),
      card("Admin build", "Create the internal dashboard for managing every request.", "LayoutDashboard"),
      card("Launch automation", "Connect payments, reminders, confirmations, and reports.", "Bell"),
    ],
    useCases: [
      card("Appointment booking", "Clinics, salons, consultants, fitness, and local services.", "CheckCircle2"),
      card("Food and retail ordering", "Catalog, cart, payment, pickup, delivery, and reorder flows.", "Store"),
      card("Rental businesses", "Availability, deposits, pickup windows, and return tracking.", "CreditCard"),
      card("Home services", "Request details, slots, technician assignment, and job updates.", "Headphones"),
    ],
    preview: {
      title: "Booking And Order Command Center",
      subtitle: "Live requests, payment status, staff queues, and customer updates.",
      metrics: [
        stat("Confirmed", "186", "This week"),
        stat("Paid Online", "72%", "Reduced payment chasing"),
        stat("Reschedules", "14", "Handled without calls"),
      ],
      rows: ["New booking confirmed", "Payment balance reminder", "Order marked out for delivery", "Staff slot capacity updated"],
    },
    ctaTitle: "Make booking and ordering feel effortless.",
    ctaText:
      "We can turn manual requests into a clean mobile system connected to payments and operations.",
  },
  {
    slug: "admin-connected-app",
    label: "Admin Connected App",
    href: href("admin-connected-app"),
    icon: "LayoutDashboard",
    eyebrow: "Mobile Plus Admin Systems",
    headline: "Customer apps connected to the admin tools behind them.",
    description:
      "Build the mobile experience and the operational control room together so every action is visible, assigned, and measurable.",
    problem:
      "A beautiful app still fails if admins cannot manage users, content, orders, payments, and support cleanly.",
    solution:
      "HNX connects apps to admin dashboards, role controls, workflows, reports, and automated notifications.",
    impact:
      "Your team gets operational control while customers get a smoother, faster mobile experience.",
    stats: [
      stat("Roles", "Granular", "Admin, manager, staff, customer"),
      stat("Queues", "Live", "Requests, orders, and tasks"),
      stat("Reports", "Built-in", "Revenue, usage, status, and SLA"),
      stat("Control", "Central", "Mobile and web operations synced"),
    ],
    problems: [
      card("No operations layer", "Apps create demand but teams have no clear system to handle it.", "LayoutDashboard"),
      card("Manual admin work", "Content, status, payments, and support are updated in different tools.", "Workflow"),
      card("Weak permissions", "Everyone sees too much or too little because roles are not designed.", "ShieldCheck"),
      card("No reporting", "App activity does not turn into useful business decisions.", "BarChart3"),
    ],
    flow: [
      card("Mobile action", "Customer creates a booking, order, ticket, payment, or profile update.", "Smartphone"),
      card("Admin queue", "The action appears in the right operational view with owner and status.", "LayoutDashboard"),
      card("Workflow action", "Team updates status, triggers messages, collects payment, or completes work.", "Workflow"),
      card("Reporting", "Activity becomes dashboards for revenue, workload, usage, and quality.", "BarChart3"),
    ],
    modules: [
      card("Role-based admin", "Permissions for owners, managers, staff, support, finance, and content teams.", "ShieldCheck"),
      card("Request queues", "Structured lists for bookings, orders, support, approvals, and follow-ups.", "CheckCircle2"),
      card("Customer records", "Profiles, history, notes, payments, tickets, and engagement timelines.", "Users"),
      card("Reporting layer", "Dashboards for performance, status, revenue, and operational bottlenecks.", "BarChart3"),
    ],
    process: [
      card("Admin mapping", "Define who needs to see and act on each mobile event.", "Users"),
      card("Data model", "Structure customers, transactions, content, requests, and statuses.", "Database"),
      card("Workflow build", "Connect app actions to queues, notifications, and reports.", "Workflow"),
      card("Role testing", "Validate permissions and team handoffs before launch.", "ShieldCheck"),
    ],
    useCases: [
      card("Marketplace app", "Manage buyers, sellers, listings, orders, payouts, and support.", "Store"),
      card("Membership app", "Control plans, content, renewals, messages, and member history.", "Users"),
      card("Service app", "Assign jobs, track status, collect payments, and measure delivery.", "CheckCircle2"),
      card("Internal app", "Give staff mobile tools connected to a central admin dashboard.", "Smartphone"),
    ],
    preview: {
      title: "App Admin Control Room",
      subtitle: "Mobile activity routed into operational queues and business reports.",
      metrics: [
        stat("Open Requests", "42", "Assigned by team role"),
        stat("SLA Health", "91%", "On-time responses"),
        stat("Revenue", "+18%", "Mobile-assisted orders"),
      ],
      rows: ["Customer order needs review", "Support ticket assigned", "Payment verified", "Manager dashboard updated"],
    },
    ctaTitle: "Connect your app to the system that runs the business.",
    ctaText:
      "We build mobile apps and admin control rooms as one connected operating layer.",
  },
  {
    slug: "push-notifications",
    label: "Push Notifications",
    href: href("push-notifications"),
    icon: "Bell",
    eyebrow: "Mobile Engagement Automation",
    headline: "Push notifications that bring customers back with purpose.",
    description:
      "Send timely updates, reminders, offers, status alerts, and lifecycle nudges based on real user behavior.",
    problem:
      "Most apps either over-send generic blasts or under-use notifications until users forget the app exists.",
    solution:
      "HNX creates segmented push systems with triggers, templates, analytics, and admin controls.",
    impact:
      "Customers receive useful messages, teams automate follow-ups, and the app becomes a stronger retention channel.",
    stats: [
      stat("Segments", "Smart", "User behavior and lifecycle groups"),
      stat("Triggers", "Auto", "Events, status, reminders, and reactivation"),
      stat("Templates", "Reusable", "Brand-safe message library"),
      stat("Tracking", "Clear", "Open, action, and conversion metrics"),
    ],
    problems: [
      card("Generic blasts", "Same message to everyone creates fatigue and lower engagement.", "Send"),
      card("Missed reminders", "Bookings, renewals, payments, and updates require manual follow-up.", "Bell"),
      card("No measurement", "Teams cannot see which messages drive action.", "BarChart3"),
      card("Poor timing", "Messages arrive late, too often, or without relevance.", "Activity"),
    ],
    flow: [
      card("Define events", "Map the actions that should trigger notification journeys.", "Workflow"),
      card("Create segments", "Group users by behavior, value, lifecycle, and preferences.", "Users"),
      card("Automate messages", "Send reminders, updates, offers, alerts, and reactivation nudges.", "Bell"),
      card("Measure outcomes", "Track opens, clicks, completed actions, and opt-outs.", "BarChart3"),
    ],
    modules: [
      card("Trigger library", "Events for booking, order, payment, inactivity, renewal, and support status.", "Workflow"),
      card("Message templates", "Reusable push copy with variables, timing, and fallback channels.", "FileText"),
      card("Segment builder", "User groups based on profile, behavior, location, and purchase stage.", "Users"),
      card("Performance dashboard", "Message delivery, open rate, action rate, and conversion tracking.", "BarChart3"),
    ],
    process: [
      card("Audit journeys", "Identify where mobile reminders and updates improve the user experience.", "SearchCheck"),
      card("Design triggers", "Create event-based rules for each message type.", "Workflow"),
      card("Build controls", "Add admin-friendly campaign and template management.", "LayoutDashboard"),
      card("Optimize", "Review metrics and refine timing, copy, and segmentation.", "BarChart3"),
    ],
    useCases: [
      card("Booking reminders", "Reduce no-shows with confirmations and schedule nudges.", "CheckCircle2"),
      card("Order updates", "Keep customers informed from purchase to delivery.", "Store"),
      card("Payment nudges", "Remind users about invoices, renewals, and failed payments.", "CreditCard"),
      card("Win-back campaigns", "Re-engage inactive users with relevant offers or actions.", "Sparkles"),
    ],
    preview: {
      title: "Push Engagement Console",
      subtitle: "Segments, triggers, templates, and conversion metrics in one view.",
      metrics: [
        stat("Open Rate", "38%", "Segmented notification average"),
        stat("Automations", "16", "Lifecycle triggers active"),
        stat("Opt-out", "Low", "Frequency controls enabled"),
      ],
      rows: ["Booking reminder sent", "Payment failed alert", "Order ready update", "Inactive user offer"],
    },
    ctaTitle: "Use notifications to improve service, not annoy users.",
    ctaText:
      "We can design push journeys that feel timely, useful, and measurable.",
  },
  {
    slug: "app-store-launch",
    label: "Play Store / App Store Launch",
    href: href("app-store-launch"),
    icon: "Store",
    eyebrow: "Mobile Store Launch",
    headline: "Launch your app with the store details handled properly.",
    description:
      "Prepare builds, screenshots, listings, policies, testing tracks, review requirements, and rollout support.",
    problem:
      "Apps often get delayed because store assets, compliance details, and release workflows are handled at the last minute.",
    solution:
      "HNX manages the launch checklist across Google Play and Apple App Store with testing, metadata, and release support.",
    impact:
      "You avoid preventable delays and launch with a cleaner listing, safer rollout, and better post-release visibility.",
    stats: [
      stat("Stores", "2", "Google Play and Apple App Store"),
      stat("Assets", "Complete", "Screenshots, copy, icons, policies"),
      stat("Testing", "Ready", "Internal, closed, or TestFlight flows"),
      stat("Rollout", "Controlled", "Versioning and release notes"),
    ],
    problems: [
      card("Review delays", "Missing metadata, policies, or permissions can hold up launch.", "FileText"),
      card("Weak listing", "Screenshots and copy do not explain the value clearly.", "Palette"),
      card("No testing track", "Bugs reach public users because beta paths were not set up.", "Activity"),
      card("Messy updates", "Versioning, release notes, and rollback plans are not defined.", "GitBranch"),
    ],
    flow: [
      card("Prepare listing", "Create title, description, screenshots, app icon, categories, and keywords.", "FileText"),
      card("Validate compliance", "Review permissions, privacy, data handling, and store policies.", "ShieldCheck"),
      card("Test release", "Set up internal or beta tracks for QA and stakeholder review.", "CheckCircle2"),
      card("Launch and monitor", "Submit, respond to review, release, and track early signals.", "Rocket"),
    ],
    modules: [
      card("Store metadata", "Descriptions, category selection, keywords, support details, and policy links.", "FileText"),
      card("Visual assets", "Screenshots, icons, feature graphics, and launch-ready presentation.", "Palette"),
      card("Testing setup", "Internal testing, closed tracks, TestFlight, version codes, and feedback loops.", "Activity"),
      card("Release operations", "Submission support, review fixes, rollout stages, and update process.", "GitBranch"),
    ],
    process: [
      card("Asset audit", "Check what is ready and what the stores require.", "SearchCheck"),
      card("Listing creation", "Prepare copy, visuals, permissions, and policy details.", "FileText"),
      card("Beta testing", "Run pre-launch tracks and fix release blockers.", "CheckCircle2"),
      card("Public release", "Submit, monitor review, and support rollout.", "Rocket"),
    ],
    useCases: [
      card("New app launch", "Prepare first public release across both stores.", "Rocket"),
      card("Rejected app fix", "Resolve review blockers and resubmit with better documentation.", "ShieldCheck"),
      card("Listing refresh", "Improve screenshots, copy, and conversion quality.", "Palette"),
      card("Version update", "Handle new builds, release notes, and staged rollout.", "GitBranch"),
    ],
    preview: {
      title: "Store Launch Tracker",
      subtitle: "Assets, compliance, testing, submission, and rollout in one checklist.",
      metrics: [
        stat("Checklist", "94%", "Launch readiness"),
        stat("Beta Users", "120", "Testing track invited"),
        stat("Review Items", "3", "Resolved before submit"),
      ],
      rows: ["Privacy policy linked", "Screenshots approved", "TestFlight build ready", "Play Console release notes added"],
    },
    ctaTitle: "Launch your app without store-day stress.",
    ctaText:
      "We can package, submit, and support your Play Store and App Store release from checklist to launch.",
  },
];

export const mobileAppSolutions = enhanceSolutions("mobile-apps", mobileAppSolutionsBase);
