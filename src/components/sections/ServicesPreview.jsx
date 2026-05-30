"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  UtensilsCrossed,
  Bath,
  Home,
  Building2,
  Trees,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import {
  staggerContainer,
  cardVariants,
  fadeUp,
  viewportOnce,
} from "@/lib/animations";

const iconMap = {
  UtensilsCrossed,
  Bath,
  Home,
  Building2,
  Trees,
  Sparkles,
};

const services = [
  {
    icon: "UtensilsCrossed",
    title: "Kitchen Remodeling",
    description:
      "From open-concept transformations to chef-grade appliance suites.",
    slug: "kitchen-remodeling",
  },
  {
    icon: "Bath",
    title: "Bathroom Renovation",
    description: "Spa-quality sanctuaries designed around your daily rituals.",
    slug: "bathroom-renovation",
  },
  {
    icon: "Home",
    title: "Basement Finishing",
    description:
      "Transform raw square footage into livable, income-generating space.",
    slug: "basement-finishing",
  },
  {
    icon: "Building2",
    title: "Home Additions",
    description:
      "Expand seamlessly — designed to look like it was always there.",
    slug: "home-additions",
  },
  {
    icon: "Trees",
    title: "Outdoor Living",
    description:
      "Covered kitchens, pergolas, and hardscaping for Texas living.",
    slug: "outdoor-living",
  },
  {
    icon: "Sparkles",
    title: "Full Home Renovation",
    description:
      "Complete transformations — fully managed, flawlessly executed.",
    slug: "full-home-renovation",
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-24 bg-white">
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
            What We Build
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-heading text-4xl sm:text-5xl text-brand-charcoal font-bold mb-4"
          >
            Every Room. <span className="text-brand-gold">Every Vision.</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-brand-warmGray max-w-xl mx-auto leading-relaxed"
          >
            Six specialty renovation services, all backed by 20 years of Austin
            craftsmanship and a team that treats your home like their own.
          </motion.p>
          <span className="gold-divider block w-16 h-0.5 bg-brand-gold mx-auto mt-4" />
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.slug}
                variants={cardVariants}
                className="card-gold-hover border border-gray-100 rounded-2xl p-7 bg-white group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center mb-5 group-hover:bg-brand-gold/20 transition-colors">
                  <Icon className="w-6 h-6 text-brand-gold" />
                </div>
                <h3 className="font-heading text-xl text-brand-charcoal font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-brand-warmGray text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <Link
                  href={`/services#${service.slug}`}
                  className="inline-flex items-center gap-1 text-brand-gold text-sm font-semibold hover:text-brand-copper transition-colors"
                >
                  Learn More <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-brand-charcoal font-semibold border-b-2 border-brand-gold pb-0.5 hover:text-brand-gold transition-colors"
          >
            View All Services & Pricing <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
