import { NextResponse } from "next/server";

const projects = [
  {
    id: 1,
    title: "FinTrack Pro",
    description:
      "Enterprise financial dashboard with real-time analytics, multi-currency support, and AI-powered forecasting for investment firms.",
    category: "Web Apps",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Charts"],
    stats: { users: "12K+", metric: "Real-time" },
  },
  {
    id: 2,
    title: "MediConnect",
    description:
      "Telemedicine platform connecting patients with doctors. Video consultations, prescription management, and health tracking.",
    category: "Mobile Apps",
    tags: ["React Native", "WebRTC", "Node.js", "MongoDB"],
    stats: { users: "8K+", metric: "iOS & Android" },
  },
  {
    id: 3,
    title: "AI Support Agent",
    description:
      "Intelligent customer support system trained on company data. Handles 80% of queries autonomously with natural conversations.",
    category: "AI Solutions",
    tags: ["GPT-4", "LangChain", "Vector DB", "Python"],
    stats: { users: "50K+", metric: "Queries/month" },
  },
  {
    id: 4,
    title: "ShopFlow",
    description:
      "Modern e-commerce platform with AI-powered recommendations, real-time inventory, and seamless payment integrations.",
    category: "E-Commerce",
    tags: ["Next.js", "Stripe", "Redis", "Algolia"],
    stats: { users: "25K+", metric: "Orders processed" },
  },
  {
    id: 5,
    title: "TaskForge",
    description:
      "Project management platform for remote teams. Kanban boards, time tracking, sprint planning, and team analytics.",
    category: "Web Apps",
    tags: ["React", "Node.js", "WebSocket", "Redis"],
    stats: { users: "6K+", metric: "Teams active" },
  },
  {
    id: 6,
    title: "FitPulse",
    description:
      "Fitness tracking app with workout plans, nutrition logging, progress analytics, and social challenges.",
    category: "Mobile Apps",
    tags: ["React Native", "Firebase", "HealthKit", "Charts"],
    stats: { users: "15K+", metric: "Active users" },
  },
];

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category");

  let filtered = projects;
  if (category && category !== "All") {
    filtered = projects.filter((p) => p.category === category);
  }

  return NextResponse.json({ success: true, data: filtered });
}
