import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ServiceWorkerRegistration from "@/components/ServiceWorkerRegistration";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const viewport: Viewport = {
  themeColor: "#FF6B00",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "Tool Executive — The Best Tools. Period.",
    template: "%s — Tool Executive",
  },
  description:
    "The ultimate source for professional and industrial tools. Power tools, hand tools, heavy equipment, and more — curated for tradespeople who demand the best.",
  manifest: "/manifest.json",
  openGraph: {
    title: "Tool Executive — The Best Tools. Period.",
    description: "Professional tools curated for people who build things for a living.",
    type: "website",
    siteName: "Tool Executive",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tool Executive",
    description: "Professional tools curated for people who build things for a living.",
  },
  robots: { index: true, follow: true },
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "mobile-web-app-capable": "yes",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="apple-touch-icon" href="/icons/icon-192.svg" />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
        <ServiceWorkerRegistration />
      </body>
    </html>
  );
}
