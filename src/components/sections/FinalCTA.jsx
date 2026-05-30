"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { siteConfig } from "@/data";

export default function FinalCTA() {
  return (
    <section className="py-24 bg-brand-gold grain-overlay relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-brand-copper/20 blur-3xl" />
      <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-brand-charcoal/10 blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.h2
            variants={fadeUp}
            className="font-heading text-4xl sm:text-5xl text-brand-charcoal font-bold mb-4 leading-tight"
          >
            Ready to Transform
            <br />
            Your Home?
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-brand-charcoal/70 text-lg mb-10 max-w-xl mx-auto leading-relaxed"
          >
            Book your free consultation today. We'll visit your home, listen to
            your vision, and provide an honest, detailed quote — no pressure, no
            obligation.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              asChild
              size="xl"
              className="bg-brand-charcoal text-white hover:bg-brand-charcoal/90 shadow-xl font-semibold"
            >
              <Link href="/contact" className="flex items-center gap-2">
                Claim My Free Consultation <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <a
              href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
              className="flex items-center gap-2 text-brand-charcoal font-semibold text-lg hover:text-brand-charcoal/70 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-brand-charcoal flex items-center justify-center">
                <Phone className="w-5 h-5 text-brand-gold" />
              </div>
              {siteConfig.phone}
            </a>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-brand-charcoal/50 text-xs font-mono"
          >
            We respond within 2 hours · Mon–Fri 8am–6pm · Free consultation,
            zero obligation
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
