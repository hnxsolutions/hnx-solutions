import type { Metadata } from "next";
import { ProductPage } from "@/components/pages/LightDetailPages";

export const metadata: Metadata = {
  title: "Product | HNX",
  description: "Explore HNX product modules, CRM features, integrations, updates, and AI-ready workflow automation.",

  alternates: {
    canonical: "https://hnxsolutions.com/product",
  },
  openGraph: {
    title: "Product | HNX",
    description: "Explore HNX product modules, CRM features, integrations, updates, and AI-ready workflow automation.",
    url: "https://hnxsolutions.com/product",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Product | HNX",
    description: "Explore HNX product modules, CRM features, integrations, updates, and AI-ready workflow automation.",
  },
};

export default function Product() {
  return <ProductPage />;
}
