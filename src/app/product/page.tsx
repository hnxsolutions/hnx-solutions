import type { Metadata } from "next";
import { ProductPage } from "@/components/pages/LightDetailPages";

export const metadata: Metadata = {
  title: "Product | HNX",
  description: "Explore HNX product modules, CRM features, integrations, updates, and AI-ready workflow automation.",
};

export default function Product() {
  return <ProductPage />;
}
