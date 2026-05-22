import { Lora } from "next/font/google";
import type { ReactNode } from "react";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function SolutionsLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className={`${lora.variable} solutions-lora-scope`}>
      <style>{`
        .solutions-lora-scope,
        .solutions-lora-scope * {
          font-family: var(--font-lora), Georgia, "Times New Roman", serif !important;
        }

        .solutions-lora-scope :where(h1, h2, h3, .solution-heading, .solution-serif) {
          font-weight: 700;
          letter-spacing: -0.045em;
        }

        .solutions-lora-scope :where(h1) {
          line-height: 1.02;
        }

        .solutions-lora-scope :where(h2) {
          line-height: 1.08;
        }

        .solutions-lora-scope :where(button, a, p, span, li, label, input, textarea, select) {
          font-family: var(--font-lora), Georgia, "Times New Roman", serif !important;
        }
      `}</style>
      {children}
    </div>
  );
}
