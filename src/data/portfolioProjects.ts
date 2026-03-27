export type PortfolioProject = {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  category: string;
  tags: string[];
  stats: {
    users: string;
    metric: string;
    timeline?: string;
    usersLabel?: string;
    metricLabel?: string;
    timelineLabel?: string;
  };
  color: string;
  accent?: string;
  liveUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
  previewImages?: Array<{
    src: string;
    alt: string;
    label: string;
  }>;
  challenges?: string[];
  results?: string[];
  summaryBullets?: string[];
  standoutFeatures?: string[];
  technologyGroups?: Array<{
    label: string;
    items: string[];
  }>;
  architecture?: Array<{
    title: string;
    description: string;
  }>;
};

export const portfolioCategories = [
  "All",
  "Web Apps",
  "Mobile Apps",
  "AI Solutions",
  "E-Commerce",
  "Healthcare",
];

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 1,
    title: "Novakos Healthcare",
    description:
      "B2B pharmaceutical distribution platform with 160+ medicines catalog, bulk ordering, buyer registration, and compliance management for chemists, pharmacies, and hospitals.",
    longDescription:
      "Built a comprehensive B2B pharmaceutical distribution platform for Novakos Healthcare, a trusted PCD pharma partner. The platform features a catalog of 160+ medicines across 23 therapeutic categories including antibiotics, analgesics, derma, hepatoprotective, and ortho products. Key features include a bulk ordering system, buyer registration with verification, medicine catalog with category filtering, compliance documentation, and a responsive design optimized for healthcare professionals. The site serves 500+ pharmacies and hospitals with temperature-controlled warehousing visibility and GDP compliance transparency.",
    category: "Healthcare",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "SEO", "Responsive Design", "B2B Platform"],
    stats: { users: "500+", metric: "Live", timeline: "3 weeks" },
    color: "from-emerald-500/20 to-cyan-500/20",
    accent: "emerald",
    liveUrl: "https://www.novakoshealthcare.com",
    challenges: [
      "Organizing 160+ medicines across 23 therapeutic categories with intuitive filtering",
      "Building a GDPR-compliant buyer registration and bulk ordering workflow",
      "Optimizing SEO for pharmaceutical B2B search visibility",
    ],
    results: [
      "Serving 500+ pharmacies and hospitals since launch",
      "160+ products cataloged across 23 categories",
      "Bulk order inquiries increased by 3x after launch",
    ],
  },
  {
    id: 2,
    title: "MindSets",
    description:
      "Mental wellness and counselling app with secure chat, video therapy sessions, journaling, articles, and guided breathing, meditation, and sleep resources.",
    longDescription:
      "MindSets is a full-featured mental health platform built as a React Native and Expo mobile app with a separate Next.js admin panel. It connects users with licensed counsellors, supports role-based onboarding and verification, handles real-time chat plus audio and video calling through Stream, and layers in self-guided wellness tools such as journaling, articles, breathing exercises, meditation sessions, and sleep content. The repository also includes Firebase-backed authentication, Firestore data models, cloud functions, push notifications, document uploads, moderation workflows, and production-oriented Android and EAS configuration.",
    category: "Mobile Apps",
    tags: ["React Native", "Expo", "Firebase", "Stream Chat", "Stream Video", "NativeWind"],
    stats: {
      users: "137",
      usersLabel: "Commits",
      metric: "Play Store Ready",
      metricLabel: "Status",
      timeline: "38K LOC",
      timelineLabel: "Scope",
    },
    color: "from-teal-500/20 to-cyan-500/20",
    accent: "teal",
    githubUrl: "https://github.com/hnxtechnologies/MindSets",
    imageUrl: "/images/mobile-apps/mindsets/first-onboarding-screen.png",
    previewImages: [
      {
        src: "/images/mobile-apps/mindsets/first-onboarding-screen.png",
        alt: "MindSets onboarding screen preview",
        label: "Onboarding hero",
      },
      {
        src: "/images/mobile-apps/mindsets/counselor-1.png",
        alt: "MindSets counsellor image asset 1",
        label: "Counsellor visual 1",
      },
      {
        src: "/images/mobile-apps/mindsets/counselor-2.png",
        alt: "MindSets counsellor image asset 2",
        label: "Counsellor visual 2",
      },
      {
        src: "/images/mobile-apps/mindsets/counselor-3.png",
        alt: "MindSets counsellor image asset 3",
        label: "Counsellor visual 3",
      },
      {
        src: "/images/mobile-apps/mindsets/counselor-4.png",
        alt: "MindSets counsellor image asset 4",
        label: "Counsellor visual 4",
      },
    ],
    challenges: [
      "Combining counsellor discovery, session booking, real-time messaging, and video calls inside a single mobile flow",
      "Supporting secure document uploads, role-based approvals, and Firebase-backed moderation workflows for counsellors",
      "Adding journaling, articles, breathing, meditation, and sleep resources without fragmenting the overall user experience",
    ],
    results: [
      "Delivered a production-scale Expo mobile app plus a separate Next.js admin panel",
      "Integrated secure chat, audio and video calling, push notifications, and Firebase cloud services",
      "Packaged a polished mental wellness product with dark and light theme support, onboarding assets, and admin tooling",
    ],
    summaryBullets: [
      "Email, Google, and Apple sign-in with role-based onboarding",
      "Licensed counsellor verification, profile workflows, and approvals",
      "Real-time chat with Stream plus audio and video therapy sessions",
      "Journal, story publishing, bookmarks, breathing, meditation, and sleep modules",
    ],
    standoutFeatures: [
      "Role-based onboarding for users, counsellors, and admins",
      "Secure 1:1 chat plus audio and video sessions powered by Stream",
      "Session booking, reminders, availability, and counsellor review flows",
      "Wellness resources including journaling, breathing, meditation, and sleep content",
      "Story publishing and moderation with article management workflows",
      "Push notification setup, error boundaries, and dark/light theming",
    ],
    technologyGroups: [
      {
        label: "Mobile Foundation",
        items: ["React Native 0.79.6", "Expo SDK 53", "Expo Router", "TypeScript", "NativeWind", "React Native Reanimated"],
      },
      {
        label: "Realtime Communication",
        items: ["Stream Chat", "stream-chat-expo", "Stream Video React Native SDK", "React Native WebRTC", "Notifee", "React Native Firebase Messaging"],
      },
      {
        label: "Backend and Data",
        items: ["Firebase Authentication", "Cloud Firestore", "Firebase Storage", "Firebase Cloud Functions", "Firebase Admin SDK"],
      },
      {
        label: "Device and UX",
        items: ["Expo Notifications", "Expo Image Picker", "Expo Haptics", "Gesture Handler", "Safe Area Context", "rn-primitives"],
      },
      {
        label: "Admin Panel",
        items: ["Next.js 16", "App Router", "shadcn/ui", "Lucide", "Firebase-backed moderation"],
      },
    ],
    architecture: [
      {
        title: "Expo Mobile Client",
        description: "The core app uses Expo Router and React Native screens for onboarding, dashboards, sessions, chat, settings, and wellness resources.",
      },
      {
        title: "Firebase Backend",
        description: "Authentication, Firestore, Storage, and Cloud Functions support account workflows, content, uploads, and secure server-side token generation.",
      },
      {
        title: "Stream Realtime Layer",
        description: "Stream powers direct messaging plus audio and video calling, with additional push notification setup for incoming sessions and call state management.",
      },
      {
        title: "Next.js Admin Panel",
        description: "A separate admin app handles approvals, users, stories, analytics, and moderation workflows for the platform team.",
      },
    ],
  },
  {
    id: 3,
    title: "AI Support Agent",
    description:
      "Intelligent customer support system trained on company data. Handles 80% of queries autonomously with natural conversations.",
    longDescription:
      "Built an AI-powered customer support system that handles 80% of incoming queries without human intervention. The system uses GPT-4 with custom fine-tuning on company-specific data, features multi-language support, sentiment analysis, and intelligent escalation to human agents when needed.",
    category: "AI Solutions",
    tags: ["GPT-4", "LangChain", "Vector DB", "Python", "Pinecone", "FastAPI"],
    stats: { users: "50K+", metric: "Queries/month", timeline: "5 weeks" },
    color: "from-amber-500/20 to-orange-500/20",
    accent: "amber",
    challenges: [
      "Training the model on 10,000+ company-specific documents",
      "Maintaining context across multi-turn conversations",
      "Handling edge cases with graceful human escalation",
    ],
    results: [
      "80% autonomous resolution rate",
      "60% reduction in support costs",
      "Average response time under 2 seconds",
    ],
  },
  {
    id: 4,
    title: "ShopFlow",
    description:
      "Modern e-commerce platform with AI-powered recommendations, real-time inventory, and seamless payment integrations.",
    longDescription:
      "Created a modern e-commerce platform featuring AI-powered product recommendations, real-time inventory management, and frictionless checkout with multiple payment providers. The platform handles 25K+ orders with automated fulfillment, dynamic pricing, and comprehensive seller analytics.",
    category: "E-Commerce",
    tags: ["Next.js", "Stripe", "Redis", "Algolia", "AWS S3", "Webhook"],
    stats: { users: "25K+", metric: "Orders processed", timeline: "7 weeks" },
    color: "from-violet-500/20 to-purple-500/20",
    accent: "violet",
    challenges: [
      "Real-time inventory sync across multiple warehouses",
      "AI recommendation engine processing millions of user interactions",
      "PCI-DSS compliant payment processing with multiple providers",
    ],
    results: [
      "35% increase in average order value through AI recommendations",
      "Sub-2-second page load times across the platform",
      "99.9% order processing accuracy",
    ],
  },
  {
    id: 5,
    title: "TaskForge",
    description:
      "Project management platform for remote teams. Kanban boards, time tracking, sprint planning, and team analytics.",
    longDescription:
      "Developed a comprehensive project management platform designed for distributed teams. Features include real-time Kanban boards, sprint planning with velocity tracking, integrated time tracking, team performance analytics, and automated status reports. Built with WebSocket for real-time collaboration.",
    category: "Web Apps",
    tags: ["React", "Node.js", "WebSocket", "Redis", "PostgreSQL", "Docker"],
    stats: { users: "6K+", metric: "Teams active", timeline: "6 weeks" },
    color: "from-sky-500/20 to-indigo-500/20",
    accent: "sky",
    challenges: [
      "Real-time collaboration with conflict resolution",
      "Complex permission system across organizations, teams, and projects",
      "Performance optimization for boards with 1000+ tasks",
    ],
    results: [
      "25% improvement in team productivity reported by users",
      "Real-time sync across unlimited team members",
      "Adopted by 200+ companies within first 3 months",
    ],
  },
];

export const homePortfolioProjects = portfolioProjects.filter((project) =>
  ["Novakos Healthcare", "MindSets", "AI Support Agent"].includes(project.title),
);

export const mindsetsProject = portfolioProjects.find(
  (project) => project.title === "MindSets",
)!;