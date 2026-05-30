'use client';

import { useState, useEffect, useRef } from 'react';
import { Star, X } from 'lucide-react';
import { socialProofMessages } from '@/data/index';

export default function SocialProof() {
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState(0);
  const [dismissed, setDismissed] = useState(false);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (dismissed) return;

    function showNext(index) {
      setCurrent(index);
      setVisible(true);

      timeoutRef.current = setTimeout(() => {
        setVisible(false);
      }, 5000);
    }

    // First show after 8 seconds
    const initial = setTimeout(() => {
      showNext(0);
    }, 8000);

    // Then every 45 seconds
    intervalRef.current = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % socialProofMessages.length);
        setVisible(true);
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => setVisible(false), 5000);
      }, 600);
    }, 45000);

    return () => {
      clearTimeout(initial);
      clearInterval(intervalRef.current);
      clearTimeout(timeoutRef.current);
    };
  }, [dismissed]);

  if (dismissed) return null;

  const msg = socialProofMessages[current];

  return (
    <div
      className={`fixed bottom-20 md:bottom-6 left-4 z-40 transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <div className="bg-white rounded-xl shadow-2xl border border-gray-100 p-3 max-w-xs flex items-start gap-3">
        {/* Avatar */}
        <div className="w-9 h-9 rounded-full bg-brand-charcoal flex items-center justify-center shrink-0 text-white text-xs font-bold">
          {msg.name.charAt(0)}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1 mb-0.5">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="w-3 h-3 fill-brand-gold text-brand-gold" />
            ))}
          </div>
          <p className="text-xs text-brand-charcoal leading-relaxed">
            <strong>{msg.name}</strong> from {msg.city}{' '}
            <span className="text-brand-warmGray">{msg.action}</span>
          </p>
          <p className="text-xs text-brand-warmGray mt-0.5">Just now</p>
        </div>
        <button
          onClick={() => setVisible(false)}
          className="text-gray-300 hover:text-gray-500 shrink-0"
          aria-label="Dismiss"
        >
          <X className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
}
