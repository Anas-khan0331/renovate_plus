"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Eye } from "lucide-react";
import {
  fadeUp,
  cardVariants,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";
import { projects } from "@/data/index";

const images = [
  {
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
    title: "Westlake Kitchen",
    cat: "Kitchen",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&q=80",
    title: "Barton Hills Bath",
    cat: "Bathroom",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    title: "Mueller Addition",
    cat: "Addition",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1618219944342-824e40a13285?w=600&q=80",
    title: "Hyde Park Full Home",
    cat: "Full Home",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1598928636135-d146006ff4be?w=600&q=80",
    title: "Travis Basement",
    cat: "Basement",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
    title: "Tarrytown Outdoor",
    cat: "Outdoor",
    tall: false,
  },
];

export default function PortfolioPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12"
        >
          <div>
            <motion.p
              variants={fadeUp}
              className="text-brand-gold font-mono text-xs uppercase tracking-[0.2em] mb-3"
            >
              Our Work
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-heading text-4xl sm:text-5xl text-brand-charcoal font-bold"
            >
              Projects We're <span className="text-brand-gold">Proud Of</span>
            </motion.h2>
          </div>
          <motion.div variants={fadeUp}>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-brand-charcoal font-semibold border-b-2 border-brand-gold pb-0.5 hover:text-brand-gold transition-colors whitespace-nowrap"
            >
              See All Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={img.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              transition={{ delay: i * 0.08 }}
              className={`relative overflow-hidden rounded-xl group cursor-pointer ${
                img.tall ? "row-span-2" : ""
              }`}
              style={{ aspectRatio: img.tall ? "3/4" : "4/3" }}
            >
              <Image
                src={img.src}
                alt={`${img.title} renovation by Renovate+ Austin`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 33vw"
                loading="lazy"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
              <div className="absolute inset-0 flex flex-col justify-end p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-brand-gold font-mono text-xs uppercase tracking-widest mb-1">
                  {img.cat}
                </span>
                <p className="text-white font-heading text-lg font-semibold">
                  {img.title}
                </p>
                <Link
                  href="/portfolio"
                  className="mt-2 inline-flex items-center gap-1 text-white/80 text-xs hover:text-brand-gold transition-colors"
                >
                  <Eye className="w-3 h-3" /> View Project
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
