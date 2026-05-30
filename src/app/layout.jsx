import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileCallBar from "@/components/layout/MobileCallBar";
import LeadGenWrapper from "@/components/lead/LeadGenWrapper";
import { siteConfig } from "@/data";
import defaultAssets from "@/data/defaultAssets";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(siteConfig.website),
  title: {
    default: `${siteConfig.businessName} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.businessName}`,
  },
  description: `${siteConfig.city}'s most trusted renovation team since ${siteConfig.foundedYear}. Kitchen, bathroom, basement, and full home renovations. Licensed & insured. Book your free consultation today.`,
  keywords: [
    `home renovation ${siteConfig.city}`,
    `kitchen remodeling ${siteConfig.city}`,
    `bathroom renovation ${siteConfig.city}`,
    `home addition ${siteConfig.city}`,
    `renovation contractor ${siteConfig.city}`,
  ],
  authors: [{ name: siteConfig.businessName }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.website,
    siteName: siteConfig.businessName,
    title: `${siteConfig.businessName} | ${siteConfig.tagline}`,
    description: `Transform your home with ${siteConfig.city}'s most trusted renovation team. ${siteConfig.projectsCompleted}+ completed projects, ${siteConfig.satisfactionRate}% satisfaction rate.`,
    images: [
      {
        url: defaultAssets.ogImage,
        width: 1200,
        height: 630,
        alt: `Home renovation by ${siteConfig.businessName}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.businessName} | ${siteConfig.tagline}`,
    description: `Transform your home with ${siteConfig.city}'s most trusted renovation team.`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable}`}>
      <body className="bg-brand-cream antialiased mobile-bar-offset">
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileCallBar />
        <LeadGenWrapper />
      </body>
    </html>
  );
}
