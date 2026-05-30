'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '@/data/index';

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          className={`w-4 h-4 ${s <= rating ? 'fill-brand-gold text-brand-gold' : 'text-gray-300'}`}
        />
      ))}
    </div>
  );
}

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);
  const total = testimonials.length;

  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + total) % total), [total]);

  useEffect(() => {
    if (!paused) {
      intervalRef.current = setInterval(next, 5000);
    }
    return () => clearInterval(intervalRef.current);
  }, [paused, next]);

  // Show 1 on mobile, up to 3 on desktop (centered)
  const getVisible = () => {
    const indices = [];
    for (let i = -1; i <= 1; i++) {
      indices.push((current + i + total) % total);
    }
    return indices;
  };

  const visible = getVisible();

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {visible.map((idx, position) => {
          const t = testimonials[idx];
          const isCenter = position === 1;
          return (
            <div
              key={`${idx}-${position}`}
              className={`bg-white rounded-2xl p-6 border transition-all duration-500 ${
                isCenter
                  ? 'border-brand-gold shadow-xl scale-[1.02] md:scale-[1.03]'
                  : 'border-gray-100 shadow-md opacity-70 hidden md:block'
              }`}
            >
              <StarRating rating={t.rating} />
              <p className="mt-4 text-brand-charcoal text-sm leading-relaxed italic">
                "{t.quote}"
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center text-brand-charcoal font-bold text-sm shrink-0">
                  {t.author.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand-charcoal">{t.author}</p>
                  <p className="text-xs text-brand-warmGray">
                    {t.projectType} · {t.location}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={prev}
          className="w-10 h-10 rounded-full border border-brand-gold text-brand-gold flex items-center justify-center hover:bg-brand-gold hover:text-brand-charcoal transition-all"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === current ? 'bg-brand-gold w-6' : 'bg-brand-gold/30'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="w-10 h-10 rounded-full border border-brand-gold text-brand-gold flex items-center justify-center hover:bg-brand-gold hover:text-brand-charcoal transition-all"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
