import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "HNX Solutions | Custom CRM, AI Automation & Digital Solutions",
  description:
    "HNX Solutions builds custom CRM systems, AI automation workflows, SaaS platforms, websites, mobile apps, and cloud infrastructure for modern businesses.",
  path: "/",
  keywords: [
    "custom CRM systems",
    "AI automation workflows",
    "SaaS platforms",
    "websites",
    "mobile apps",
    "cloud infrastructure",
  ],
});

const HomeServices = dynamic(() => import("@/components/HomeServices"), {
  loading: () => <div className="h-75" />,
});

const HNXSystemEcosystem = dynamic(
  () => import("@/components/sections/HNXSystemEcosystem"),
  {
    loading: () => <div className="h-75" />,
  }
);

const CRMPreviewShowcase = dynamic(
  () => import("@/components/sections/CRMPreviewShowcase"),
  {
    loading: () => <div className="h-75" />,
  }
);

const HomePortfolio = dynamic(() => import("@/components/HomePortfolio"), {
  loading: () => <div className="h-75" />,
});

const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  loading: () => <div className="h-75" />,
});

const HomeCTA = dynamic(() => import("@/components/HomeCTA"), {
  loading: () => <div className="h-50" />,
});

export default function HomePage() {
  return (
    <main className="page-shell">
      <Hero />
      <HNXSystemEcosystem />
      <CRMPreviewShowcase />
      <HomeServices />
      <HomePortfolio />
      <Testimonials />
      <HomeCTA />
    </main>
  );
}
