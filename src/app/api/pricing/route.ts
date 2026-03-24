import { NextResponse } from "next/server";

const plans = [
  {
    id: 1,
    name: "Starter",
    price: 999,
    period: "per project",
    description: "For startups and small businesses needing a strong web presence.",
    features: [
      "Modern responsive website",
      "Up to 7 pages/sections",
      "Contact form integration",
      "SEO optimization",
      "Mobile-friendly design",
      "2 weeks delivery",
      "1 month free support",
    ],
    popular: false,
  },
  {
    id: 2,
    name: "Professional",
    price: 3499,
    period: "per project",
    description: "Full-featured web or mobile app with custom functionality.",
    features: [
      "Custom Next.js / React Native app",
      "Database & authentication",
      "Admin dashboard",
      "API integrations",
      "Payment processing",
      "3-4 weeks delivery",
      "3 months free support",
    ],
    popular: true,
  },
  {
    id: 3,
    name: "Enterprise",
    price: 7999,
    period: "per project",
    description: "AI-powered solutions with complex automation and scale.",
    features: [
      "Full-stack web + mobile app",
      "AI chatbot / automation system",
      "Custom LLM integration",
      "Cloud infrastructure setup",
      "Advanced analytics dashboard",
      "4-6 weeks delivery",
      "6 months free support",
    ],
    popular: false,
  },
];

export async function GET() {
  return NextResponse.json({ success: true, data: plans });
}
