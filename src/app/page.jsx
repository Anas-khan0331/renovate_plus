import HeroSection from "@/components/sections/HeroSection";
import BeforeAfterSection from "@/components/sections/BeforeAfterSection";
import ServicesPreview from "@/components/sections/ServicesPreview";
import ProcessSection from "@/components/sections/ProcessSection";
import StatsSection from "@/components/sections/StatsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import PortfolioPreview from "@/components/sections/PortfolioPreview";
import FinalCTA from "@/components/sections/FinalCTA";
import { localBusinessSchema } from "@/lib/schema";
import { siteConfig } from "@/data";
import defaultAssets from "@/data/defaultAssets";

export const metadata = {
  title: `${siteConfig.tagline} | ${siteConfig.businessName}`,
  description: `Transform your home with ${siteConfig.city}'s most trusted renovation team since ${siteConfig.foundedYear}. Kitchen, bathroom, basement & full home renovations. ${siteConfig.projectsCompleted}+ projects, ${siteConfig.satisfactionRate}% satisfaction. Book your free consultation today.`,
  openGraph: {
    title: `${siteConfig.tagline} | ${siteConfig.businessName}`,
    description: `Transform your home with ${siteConfig.city}'s most trusted renovation team. ${siteConfig.projectsCompleted}+ completed projects, ${siteConfig.satisfactionRate}% satisfaction rate.`,
    images: [
      {
        url: defaultAssets.ogImage,
        width: 1200,
        height: 630,
        alt: `Home renovation by ${siteConfig.businessName} in ${siteConfig.city}`,
      },
    ],
  },
  alternates: { canonical: siteConfig.website },
};

export default function HomePage() {
  const schema = localBusinessSchema();

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <HeroSection />
      <BeforeAfterSection />
      <ServicesPreview />
      <ProcessSection />
      <StatsSection />
      <TestimonialsSection />
      <PortfolioPreview />
      <FinalCTA />
    </>
  );
}
