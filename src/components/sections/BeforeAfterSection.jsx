"use client";

import { motion } from "framer-motion";
import BeforeAfterSlider from "@/components/shared/BeforeAfterSlider";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

const transformations = [
  {
    title: "The Westlake Kitchen",
    category: "Kitchen Remodel",
    before:
      "https://images.unsplash.com/photo-1556909075-c3b7d2c9a76a?w=800&q=80",
    after:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    beforeAlt: "Outdated galley kitchen before renovation",
    afterAlt: "Stunning open-concept kitchen after Renovate+ transformation",
  },
  {
    title: "Barton Hills Master Bath",
    category: "Bathroom Renovation",
    before:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
    after:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80",
    beforeAlt: "Builder-grade bathroom before renovation",
    afterAlt: "Spa-quality master bathroom after Renovate+ renovation",
  },
  {
    title: "Hyde Park Full Home",
    category: "Full Home Renovation",
    before:
      "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=800&q=80",
    after:
      "https://images.unsplash.com/photo-1618219944342-824e40a13285?w=800&q=80",
    beforeAlt: "Original 1940s bungalow living area before renovation",
    afterAlt: "Modernized open-concept living space after full home renovation",
  },
];

export default function BeforeAfterSection() {
  return (
    <section className="py-20 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
            The Evidence
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-heading text-4xl sm:text-5xl text-brand-charcoal font-bold mb-4"
          >
            See the Difference
            <br />
            <span className="text-brand-gold">We Make</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-brand-warmGray max-w-xl mx-auto leading-relaxed"
          >
            Drag the slider to reveal the transformation. Every project is a
            story of a home — and a family — made better.
          </motion.p>
          <motion.span
            variants={fadeUp}
            className="gold-divider block w-16 h-0.5 bg-brand-gold mx-auto mt-4"
          />
        </motion.div>

        {/* Sliders */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {transformations.map((t, i) => (
            <motion.div
              key={t.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              transition={{ delay: i * 0.15 }}
            >
              <BeforeAfterSlider
                before={t.before}
                after={t.after}
                title={t.title}
                category={t.category}
                beforeAlt={t.beforeAlt}
                afterAlt={t.afterAlt}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
