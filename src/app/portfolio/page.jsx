"use client";

import { useState, Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "@/data/index";
import {
  staggerContainer,
  cardVariants,
  fadeUp,
  viewportOnce,
} from "@/lib/animations";
import FinalCTA from "@/components/sections/FinalCTA";

const categories = [
  "All",
  "Kitchen",
  "Bathroom",
  "Basement",
  "Home Addition",
  "Outdoor Living",
  "Full Home",
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [imgIndex, setImgIndex] = useState(0);

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  function openProject(project) {
    setSelectedProject(project);
    setImgIndex(0);
  }

  const allImages = selectedProject
    ? [
        ...(selectedProject.beforeImages || []),
        ...(selectedProject.afterImages || []),
      ]
    : [];

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-charcoal pt-32 pb-16 grain-overlay relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(201,169,110,0.1)_0%,_transparent_60%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-gold font-mono text-xs uppercase tracking-[0.2em] mb-4 block">
            Our Portfolio
          </span>
          <h1 className="font-heading text-5xl sm:text-6xl text-white font-bold mb-5">
            150+ Homes <span className="text-brand-gold">Transformed</span>
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto leading-relaxed">
            Every project tells a story. Browse our work — each one built with
            the same level of care we'd give our own home.
          </p>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="bg-white border-b border-gray-100 sticky top-[60px] z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === cat
                    ? "bg-brand-gold text-brand-charcoal font-semibold"
                    : "text-brand-warmGray hover:text-brand-charcoal hover:bg-gray-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio grid */}
      <section className="py-16 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((project, i) => (
                <Fragment key={project.id}>
                  <motion.div
                    variants={cardVariants}
                    className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-gray-100 card-gold-hover"
                    onClick={() => openProject(project)}
                  >
                    {/* Image with before/after hover */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={project.afterImages[0]}
                        alt={`${project.title} - After renovation by Renovate+ Austin`}
                        fill
                        className="object-cover transition-all duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUE/8QAIRAAAgIBBAMBAAAAAAAAAAAAAQIDBAUREiExQWH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8Amuz3iy6vJXxEslcqRuCOzAHjjnH01l3VTK7GWM7WPIwT3H0xSlKiUkf/2Q=="
                      />
                      {/* Before overlay on hover */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Image
                          src={project.beforeImages[0]}
                          alt={`${project.title} - Before renovation`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        <div className="absolute top-3 left-3 bg-black/70 text-white text-xs font-mono px-2 py-1 rounded">
                          BEFORE
                        </div>
                      </div>
                      <div className="absolute top-3 right-3">
                        <Badge variant="gold">{project.category}</Badge>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-heading text-lg text-brand-charcoal font-semibold mb-1">
                        {project.title}
                      </h3>
                      <p className="text-brand-warmGray text-sm mb-3 line-clamp-2">
                        {project.shortDescription}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex gap-3 text-xs font-mono text-brand-warmGray">
                          <span>{project.duration}</span>
                          <span>·</span>
                          <span>{project.budgetRange}</span>
                        </div>
                        <button className="text-brand-gold text-sm font-semibold flex items-center gap-1 hover:text-brand-copper transition-colors">
                          View <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </motion.div>

                  {/* Quote banner after every 3rd row (3 items = 1 row on desktop) */}
                  {(i + 1) % 6 === 0 && i < filtered.length - 1 && (
                    <motion.div
                      key={`banner-${i}`}
                      variants={fadeUp}
                      className="col-span-1 sm:col-span-2 lg:col-span-3 bg-brand-charcoal rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-4"
                    >
                      <div>
                        <p className="font-heading text-xl text-white font-semibold">
                          Love what you see? Let's build yours.
                        </p>
                        <p className="text-white/60 text-sm mt-1">
                          Free consultation · No obligation · We respond within
                          2 hours
                        </p>
                      </div>
                      <Button asChild className="shrink-0">
                        <Link href="/contact">Get a Free Quote</Link>
                      </Button>
                    </motion.div>
                  )}
                </Fragment>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Project Detail Modal */}
      <Dialog
        open={!!selectedProject}
        onOpenChange={() => setSelectedProject(null)}
      >
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-0">
          {selectedProject && (
            <>
              {/* Image carousel */}
              <div className="relative aspect-[16/9] overflow-hidden rounded-t-lg">
                <Image
                  src={allImages[imgIndex]}
                  alt={`${selectedProject.title} - image ${imgIndex + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 768px"
                />
                {/* Before/After labels */}
                <div className="absolute top-3 left-3">
                  {imgIndex < selectedProject.beforeImages.length ? (
                    <span className="bg-black/70 text-white text-xs font-mono px-2 py-1 rounded">
                      BEFORE
                    </span>
                  ) : (
                    <span className="bg-brand-gold text-brand-charcoal text-xs font-mono px-2 py-1 rounded">
                      AFTER
                    </span>
                  )}
                </div>
                {allImages.length > 1 && (
                  <>
                    <button
                      onClick={() =>
                        setImgIndex(
                          (imgIndex - 1 + allImages.length) % allImages.length,
                        )
                      }
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() =>
                        setImgIndex((imgIndex + 1) % allImages.length)
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
                      {allImages.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setImgIndex(i)}
                          className={`w-1.5 h-1.5 rounded-full ${i === imgIndex ? "bg-brand-gold" : "bg-white/50"}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Details */}
              <div className="p-6">
                <DialogHeader className="mb-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <Badge variant="gold" className="mb-2">
                        {selectedProject.category}
                      </Badge>
                      <DialogTitle className="text-2xl">
                        {selectedProject.title}
                      </DialogTitle>
                    </div>
                  </div>
                </DialogHeader>

                <p className="text-brand-warmGray text-sm leading-relaxed mb-5">
                  {selectedProject.fullDescription}
                </p>

                {/* Meta */}
                <div className="grid grid-cols-2 gap-4 mb-5 bg-brand-cream rounded-xl p-4">
                  <div>
                    <p className="text-xs font-mono text-brand-warmGray uppercase">
                      Duration
                    </p>
                    <p className="font-semibold text-brand-charcoal">
                      {selectedProject.duration}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-mono text-brand-warmGray uppercase">
                      Investment
                    </p>
                    <p className="font-semibold text-brand-charcoal">
                      {selectedProject.budgetRange}
                    </p>
                  </div>
                </div>

                {/* Materials */}
                <div className="mb-5">
                  <p className="text-xs font-mono text-brand-warmGray uppercase mb-2">
                    Materials Used
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.materials.map((m) => (
                      <Badge key={m} variant="outline">
                        {m}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                {selectedProject.testimonial && (
                  <div className="bg-brand-charcoal rounded-xl p-5 mb-5">
                    <div className="flex items-center gap-0.5 mb-2">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star
                          key={s}
                          className="w-3.5 h-3.5 fill-brand-gold text-brand-gold"
                        />
                      ))}
                    </div>
                    <p className="text-white/80 text-sm italic leading-relaxed mb-3">
                      "{selectedProject.testimonial.quote}"
                    </p>
                    <div>
                      <p className="text-white text-sm font-semibold">
                        {selectedProject.testimonial.author}
                      </p>
                      <p className="text-white/50 text-xs">
                        {selectedProject.testimonial.location}
                      </p>
                    </div>
                  </div>
                )}

                <Button asChild className="w-full" size="lg">
                  <Link href="/contact">Start a Similar Project →</Link>
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <FinalCTA />
    </>
  );
}
