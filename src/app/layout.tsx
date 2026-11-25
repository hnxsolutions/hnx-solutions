import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import type { CSSProperties } from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/chat/ChatWidget";
import WhatsAppFloatingButton from "@/components/shared/WhatsAppFloatingButton";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  DEFAULT_TITLE,
  SITE_NAME,
  SITE_URL,
  defaultKeywords,
  openGraphDefaults,
  organizationJsonLd,
  professionalServiceJsonLd,
  websiteJsonLd,
} from "@/lib/seo";

const fontVariables = {
  "--font-geist-sans":
    'Arial, Helvetica, "Segoe UI", system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
  "--font-geist-mono":
    '"Courier New", Consolas, "SFMono-Regular", Menlo, Monaco, monospace',
  "--font-raleway":
    'Raleway, Arial, Helvetica, "Segoe UI", system-ui, sans-serif',
  "--font-mukta":
    'Mukta, Arial, Helvetica, "Segoe UI", system-ui, sans-serif',
} as CSSProperties;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  keywords: defaultKeywords,
  openGraph: {
    ...openGraphDefaults,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" style={fontVariables}>
        <JsonLd data={[organizationJsonLd, websiteJsonLd, professionalServiceJsonLd]} />

        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
          <ChatWidget />
          <WhatsAppFloatingButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
