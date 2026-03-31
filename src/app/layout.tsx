import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseGlowProvider from "@/components/MouseGlowProvider";
import MouseSpotlight from "@/components/MouseSpotlight";

export const metadata: Metadata = {
  title: "HNX Technologies",
  description: "IT Services & Digital Solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <MouseGlowProvider />
          <MouseSpotlight />

          <div className="page-transition">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}