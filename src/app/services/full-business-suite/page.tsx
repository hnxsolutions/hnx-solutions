import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import FullBusinessSuitePage from "@/components/services/shared/full-business-suite/FullBusinessSuitePage";
import { fullBusinessSuiteData } from "@/components/services/shared/full-business-suite/fullBusinessSuiteData";
import {
  createBreadcrumbJsonLd,
  createMetadata,
  createServiceJsonLd,
} from "@/lib/seo";

import { Exo_2 } from "next/font/google";

const exo2 = Exo_2({
  variable: "--font-exo2",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const { path, metadata: pageMetadata } = fullBusinessSuiteData;

export const metadata: Metadata = createMetadata({
  title: pageMetadata.title,
  description: pageMetadata.description,
  path,
  keywords: pageMetadata.keywords,
});

export default function ServicesFullBusinessSuiteRoute() {
  return (
    <>
      <JsonLd
        data={[
          createBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Full Business Suite", path },
          ]),
          createServiceJsonLd({
            name: "HNX Full Business Suite",
            description: pageMetadata.description,
            path,
            serviceType: "Full Business Suite for Service Businesses",
          }),
        ]}
      />
      <div className={`${exo2.variable} full-business-exo2-scope`}>
        <style>{`
          .full-business-exo2-scope,
          .full-business-exo2-scope * {
            font-family: var(--font-exo2), Inter, ui-sans-serif, system-ui, sans-serif !important;
          }

          .full-business-exo2-scope :where(h1, h2, h3, .solution-heading, .solution-serif) {
            font-weight: 700;
            letter-spacing: -0.045em;
          }

          .full-business-exo2-scope :where(h1) { line-height: 1.02; }
          .full-business-exo2-scope :where(h2) { line-height: 1.08; }

          .full-business-exo2-scope :where(button, a, p, span, li, label, input, textarea, select) {
            font-family: var(--font-exo2), Inter, ui-sans-serif, system-ui, sans-serif !important;
          }
        `}</style>
        <FullBusinessSuitePage />
      </div>
    </>
  );
}
