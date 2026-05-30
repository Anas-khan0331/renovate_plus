"use client";

import { motion } from "framer-motion";
import { MessageSquare, Pencil, Hammer, PartyPopper } from "lucide-react";
import {
  fadeUp,
  staggerContainer,
  lineGrow,
  viewportOnce,
} from "@/lib/animations";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Free Consultation",
    description:
      "We walk your home, listen to your vision, and give you an honest assessment — at no cost, no obligation.",
  },
  {
    number: "02",
    icon: Pencil,
    title: "Design & Plan",
    description:
      "3D renderings, material selections, and a fixed-price proposal. You approve every detail before we break ground.",
  },
  {
    number: "03",
    icon: Hammer,
    title: "Build",
    description:
      "Our in-house crews execute with precision. Weekly updates, clean job sites, and zero surprise costs.",
  },
  {
    number: "04",
    icon: PartyPopper,
    title: "Final Reveal",
    description:
      "A full walkthrough, punch list completion, and a home that exceeds what you imagined. The transformation is yours.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 bg-brand-cream relative overflow-hidden">
      {/* Decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-16"
        >
          <motion.p
            variants={fadeUp}
            className="text-brand-gold font-mono text-xs uppercase tracking-[0.2em] mb-3"
          >
            How It Works
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-heading text-4xl sm:text-5xl text-brand-charcoal font-bold mb-4"
          >
            Our Proven <span className="text-brand-gold">4-Step Process</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-brand-warmGray max-w-xl mx-auto leading-relaxed"
          >
            We've refined our process over 20 years and 150+ projects. It's
            designed to eliminate stress and deliver results that feel
            inevitable.
          </motion.p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-gray-200" />
          <motion.div
            variants={lineGrow}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-brand-gold origin-left"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  transition={{ delay: i * 0.12 }}
                  className="relative flex flex-col items-center text-center"
                >
                  {/* Icon circle */}
                  <div className="relative z-10 w-16 h-16 rounded-full bg-brand-charcoal flex items-center justify-center mb-5 shadow-lg border-2 border-brand-gold">
                    <Icon className="w-7 h-7 text-brand-gold" />
                  </div>

                  {/* Step number */}
                  <span className="font-mono text-xs text-brand-gold tracking-widest mb-2 uppercase">
                    Step {step.number}
                  </span>

                  <h3 className="font-heading text-xl text-brand-charcoal font-semibold mb-3">
                    {step.title}
                  </h3>
                  <p className="text-brand-warmGray text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
