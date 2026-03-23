import Hero from "@/components/Hero";
import HomeServices from "@/components/HomeServices";
import HomePortfolio from "@/components/HomePortfolio";
import Testimonials from "@/components/Testimonials";
import HomeCTA from "@/components/HomeCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeServices />
      <HomePortfolio />
      <Testimonials />
      <HomeCTA />
    </>
  );
}
