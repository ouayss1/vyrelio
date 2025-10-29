import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { BottomCta } from "@/components/bottom-cta";
import { CookieConsent } from "@/components/cookie-consent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.vyrelio.fr"),
  title: {
    default: "Vyrelio - Agence marketing dentaire",
    template: "%s | Vyrelio",
  },
  description: "Agence spécialisée en acquisition de patients pour dentistes.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://www.vyrelio.fr/",
    siteName: "Vyrelio",
    title: "Vyrelio - Agence marketing dentaire",
    description: "Agence spécialisée en acquisition de patients pour dentistes.",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vyrelio - Agence marketing dentaire",
    description: "Agence spécialisée en acquisition de patients pour dentistes.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
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
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SiteHeader />
        {children}
        <BottomCta />
        <SiteFooter />
        <CookieConsent />
      </body>
    </html>
  );
}
