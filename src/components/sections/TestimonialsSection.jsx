"use client";

import { motion } from "framer-motion";
import TestimonialCarousel from "@/components/shared/TestimonialCarousel";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-brand-cream relative overflow-hidden">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-14"
        >
          <motion.p
            variants={fadeUp}
            className="text-brand-gold font-mono text-xs uppercase tracking-[0.2em] mb-3"
          >
            Client Stories
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-heading text-4xl sm:text-5xl text-brand-charcoal font-bold mb-4"
          >
            What Austin Families
            <br />
            <span className="text-brand-gold">Are Saying</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-brand-warmGray max-w-xl mx-auto leading-relaxed"
          >
            4.9 stars across 150+ reviews. Not because we're perfect — because
            we genuinely care.
          </motion.p>
          <span className="block w-16 h-0.5 bg-brand-gold mx-auto mt-4" />
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <TestimonialCarousel />
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mt-12"
        >
          <p className="text-brand-warmGray text-sm mb-4">
            Join the 150+ Austin families who transformed their homes with
            Renovate+
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Start My Renovation Story</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
