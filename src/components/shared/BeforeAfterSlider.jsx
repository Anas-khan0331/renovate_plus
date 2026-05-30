'use client';

import Image from 'next/image';
import { useBeforeAfter } from '@/hooks/useBeforeAfter';
import { GripVertical } from 'lucide-react';

export default function BeforeAfterSlider({ before, after, title, category, beforeAlt, afterAlt }) {
  const { position, isDragging, containerRef, handleMouseDown, handleTouchStart } =
    useBeforeAfter(50);

  return (
    <div className="relative group rounded-xl overflow-hidden shadow-2xl">
      {/* Labels */}
      <div className="absolute top-4 left-4 z-20 bg-black/60 text-white text-xs font-mono px-2 py-1 rounded uppercase tracking-widest">
        Before
      </div>
      <div className="absolute top-4 right-4 z-20 bg-brand-gold text-brand-charcoal text-xs font-mono px-2 py-1 rounded uppercase tracking-widest">
        After
      </div>

      {/* Project info */}
      {title && (
        <div className="absolute bottom-4 left-4 z-20">
          <p className="text-white font-playfair text-lg font-semibold drop-shadow-lg">{title}</p>
          {category && (
            <span className="text-brand-gold text-xs font-mono uppercase tracking-wider">{category}</span>
          )}
        </div>
      )}

      {/* Container */}
      <div
        ref={containerRef}
        className="relative w-full aspect-[4/3] cursor-col-resize select-none"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        {/* Before image (full width) */}
        <div className="absolute inset-0">
          <Image
            src={before}
            alt={beforeAlt || 'Before renovation'}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            draggable={false}
          />
        </div>

        {/* After image (clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <Image
            src={after}
            alt={afterAlt || 'After renovation'}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            draggable={false}
          />
        </div>

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-xl z-10 cursor-col-resize"
          style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
        >
          {/* Handle */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center border-2 border-brand-gold"
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
          >
            <GripVertical className="w-5 h-5 text-brand-gold" />
          </div>
        </div>
      </div>
    </div>
  );
}
