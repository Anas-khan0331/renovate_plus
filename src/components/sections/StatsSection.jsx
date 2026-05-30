"use client";

import { motion } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { stats } from "@/data/index";

function StatCard({ stat, delay }) {
  const { count, ref } = useCountUp(stat.value, 2000);
  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      transition={{ delay }}
      className="text-center"
    >
      <div className="font-mono text-5xl sm:text-6xl font-bold text-brand-gold mb-2 tabular-nums">
        {stat.prefix}
        {count}
        {stat.suffix}
      </div>
      <p className="text-white/60 text-sm uppercase tracking-widest font-mono">
        {stat.label}
      </p>
    </motion.div>
  );
}

export default function StatsSection() {
  return (
    <section className="py-24 bg-brand-charcoal grain-overlay relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,169,110,0.06)_0%,_transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            By the Numbers
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-heading text-4xl sm:text-5xl text-white font-bold mb-4"
          >
            Results That Speak
            <br />
            <span className="text-brand-gold">For Themselves</span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} delay={i * 0.1} />
          ))}
        </motion.div>

        {/* Divider line */}
        <div className="mt-16 flex items-center gap-4">
          <div className="flex-1 h-px bg-white/10" />
          <div className="w-2 h-2 rounded-full bg-brand-gold" />
          <div className="flex-1 h-px bg-white/10" />
        </div>

        {/* Trust statement */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center text-white/50 text-sm mt-8 font-mono"
        >
          Licensed · Bonded · Insured · BBB A+ Rated · Houzz Pro · NKBA Member
        </motion.p>
      </div>
    </section>
  );
}
