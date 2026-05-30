"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown, Star, Shield, Award, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

const trustItems = [
  { icon: Star, label: "4.9/5 Rating" },
  { icon: Award, label: "150+ Projects" },
  { icon: Shield, label: "Licensed & Insured" },
  { icon: Clock, label: "20 Yrs Experience" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden grain-overlay">
      {/* Video / image background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=80"
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            {/* Eyebrow */}
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-2 mb-6"
            >
              <span className="block w-8 h-0.5 bg-brand-gold" />
              <span className="text-brand-gold font-mono text-xs uppercase tracking-[0.2em]">
                Austin's Premier Renovation Team
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="font-heading text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.05] font-bold mb-6"
            >
              Transform Your Home
              <br />
              <span className="text-brand-gold">Into A Masterpiece</span>
            </motion.h1>

            {/* Subline */}
            <motion.p
              variants={fadeUp}
              className="text-white/80 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl"
            >
              Austin's Most Trusted Renovation Team — Est. 2004. We build spaces
              families love for generations, with craftsmanship that outlasts
              trends.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Button
                asChild
                size="xl"
                className="font-semibold shadow-lg shadow-brand-gold/20"
              >
                <Link href="/contact">Book Free Consultation</Link>
              </Button>
              <Button asChild size="xl" variant="outline">
                <Link href="/portfolio">See Our Work</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-10 flex justify-center pb-8">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-white/50 text-xs font-mono uppercase tracking-widest">
            Scroll
          </span>
          <ChevronDown className="w-5 h-5 text-brand-gold" />
        </motion.div>
      </div>

      {/* Trust bar */}
      <div className="relative z-10 bg-black/50 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 py-4">
            {trustItems.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2">
                <Icon className="w-4 h-4 text-brand-gold shrink-0" />
                <span className="text-white/80 text-sm font-mono">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
