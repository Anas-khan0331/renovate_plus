import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import CostEstimator from "@/components/shared/CostEstimator";
import FinalCTA from "@/components/sections/FinalCTA";
import { services } from "@/data/index";
import { serviceSchema } from "@/lib/schema";

export const metadata = {
  title: "Home Renovation Services in Austin | Renovate+",
  description:
    "Kitchen remodeling, bathroom renovation, basement finishing, home additions, outdoor living & full home renovation in Austin, TX. Starting from $12,000. Free consultation.",
  alternates: { canonical: "https://renovateplus.com/services" },
};

const stepIcons = ["01", "02", "03", "04"];

export default function ServicesPage() {
  const schemas = services.map(serviceSchema);

  return (
    <>
      {schemas.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}

      {/* Hero */}
      <section className="bg-brand-charcoal pt-32 pb-16 grain-overlay relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(201,169,110,0.08)_0%,_transparent_60%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-gold font-mono text-xs uppercase tracking-[0.2em] mb-4 block">
            Our Services
          </span>
          <h1 className="font-heading text-5xl sm:text-6xl text-white font-bold mb-5">
            Every Renovation.
            <br />
            <span className="text-brand-gold">One Expert Team.</span>
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto leading-relaxed mb-8">
            Six specialty renovation services backed by 20 years of Austin
            craftsmanship. Transparent pricing, in-house crews, zero hidden
            fees.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {services.map((s) => (
              <a
                key={s.slug}
                href={`#${s.slug}`}
                className="bg-white/10 hover:bg-brand-gold hover:text-brand-charcoal text-white text-sm px-4 py-2 rounded-full transition-all"
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      {services.map((service, idx) => (
        <section
          key={service.id}
          id={service.slug}
          className={`py-20 scroll-mt-20 ${idx % 2 === 0 ? "bg-brand-cream" : "bg-white"}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Hero image + headline */}
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 ${idx % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
            >
              <div className={idx % 2 !== 0 ? "lg:order-2" : ""}>
                <span className="text-brand-gold font-mono text-xs uppercase tracking-[0.2em] mb-3 block">
                  {service.title}
                </span>
                <h2 className="font-heading text-4xl sm:text-5xl text-brand-charcoal font-bold mb-5 leading-tight">
                  {service.title === "Kitchen Remodeling" && (
                    <>
                      The Kitchen You've
                      <br />
                      <span className="text-brand-gold">Always Imagined</span>
                    </>
                  )}
                  {service.title === "Bathroom Renovation" && (
                    <>
                      Your Personal
                      <br />
                      <span className="text-brand-gold">Spa Retreat</span>
                    </>
                  )}
                  {service.title === "Basement Finishing" && (
                    <>
                      Unlock Your Home's
                      <br />
                      <span className="text-brand-gold">Hidden Potential</span>
                    </>
                  )}
                  {service.title === "Home Additions" && (
                    <>
                      More Space,
                      <br />
                      <span className="text-brand-gold">
                        Same Home You Love
                      </span>
                    </>
                  )}
                  {service.title === "Outdoor Living" && (
                    <>
                      Bring the Indoors
                      <br />
                      <span className="text-brand-gold">Outside</span>
                    </>
                  )}
                  {service.title === "Full Home Renovation" && (
                    <>
                      Your Home,
                      <br />
                      <span className="text-brand-gold">
                        Completely Reimagined
                      </span>
                    </>
                  )}
                </h2>
                <p className="text-brand-warmGray leading-relaxed mb-4">
                  {service.shortDescription}
                </p>
                <p className="text-brand-warmGray leading-relaxed mb-6">
                  Every {service.title.toLowerCase()} project we take on
                  receives the full attention of our in-house design team,
                  licensed contractors, and dedicated project manager. We don't
                  subcontract our core work — quality control is non-negotiable.
                </p>
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-brand-gold/10 border border-brand-gold/30 rounded-xl px-5 py-3">
                    <p className="text-xs font-mono text-brand-warmGray uppercase">
                      Starting From
                    </p>
                    <p className="font-heading text-2xl font-bold text-brand-charcoal">
                      {service.startingPrice}
                    </p>
                  </div>
                  <Button asChild>
                    <Link href="/contact">
                      Get My Free Quote <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Free Consultation",
                    "Fixed Pricing",
                    "Licensed & Insured",
                    "Warranty Included",
                  ].map((badge) => (
                    <div
                      key={badge}
                      className="flex items-center gap-1 text-xs text-brand-warmGray"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-brand-gold" />
                      {badge}
                    </div>
                  ))}
                </div>
              </div>
              <div
                className={`relative rounded-2xl overflow-hidden shadow-2xl ${idx % 2 !== 0 ? "lg:order-1" : ""}`}
                style={{ aspectRatio: "4/3" }}
              >
                <Image
                  src={service.heroImage}
                  alt={`${service.title} by Renovate+ Austin`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading={idx === 0 ? "eager" : "lazy"}
                />
              </div>
            </div>

            {/* Process */}
            <div className="mb-16">
              <h3 className="font-heading text-2xl text-brand-charcoal font-bold mb-8 text-center">
                Our {service.title} Process
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {service.processSteps.map((step) => (
                  <div
                    key={step.step}
                    className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm"
                  >
                    <div className="w-8 h-8 rounded-full bg-brand-charcoal flex items-center justify-center mb-4">
                      <span className="font-mono text-xs font-bold text-brand-gold">
                        0{step.step}
                      </span>
                    </div>
                    <h4 className="font-semibold text-brand-charcoal mb-2">
                      {step.title}
                    </h4>
                    <p className="text-brand-warmGray text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="max-w-3xl mx-auto">
              <h3 className="font-heading text-2xl text-brand-charcoal font-bold mb-6 text-center">
                Common Questions About {service.title}
              </h3>
              <Accordion type="single" collapsible className="space-y-2">
                {service.faqs.map((faq, i) => (
                  <AccordionItem
                    key={i}
                    value={`faq-${service.id}-${i}`}
                    className="bg-white rounded-xl border border-gray-100 px-5"
                  >
                    <AccordionTrigger className="text-left text-brand-charcoal font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      ))}

      {/* Cost Estimator */}
      <section className="py-20 bg-brand-charcoal">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-brand-gold font-mono text-xs uppercase tracking-[0.2em] mb-3 block">
              Free Tool
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl text-white font-bold mb-3">
              Estimate Your Project Cost
            </h2>
            <p className="text-white/60 leading-relaxed">
              Get a ballpark range in under 60 seconds. Then book a free
              consultation for an exact quote.
            </p>
          </div>
          <CostEstimator />
        </div>
      </section>

      {/* Floating quote button */}
      <div className="fixed bottom-20 md:bottom-24 right-6 z-30 hidden md:block">
        <Link
          href="/contact"
          className="flex items-center gap-2 bg-brand-gold text-brand-charcoal font-semibold text-sm px-4 py-3 rounded-full shadow-xl hover:bg-brand-copper transition-all animate-pulse-gold"
        >
          Get My Quote <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <FinalCTA />
    </>
  );
}
