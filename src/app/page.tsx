import dynamic from "next/dynamic";
import Hero from "@/components/Hero";

const HomeServices = dynamic(() => import("@/components/HomeServices"), {
  loading: () => <div className="h-75" />,
});

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
      <HomeServices />
      <HomePortfolio />
      <Testimonials />
      <HomeCTA />
    </main>
  );
}