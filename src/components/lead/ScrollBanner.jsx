'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ArrowRight } from 'lucide-react';
import { useScrollDepth } from '@/hooks/useScrollDepth';

export default function ScrollBanner() {
  const depth = useScrollDepth();
  const [show40, setShow40] = useState(false);
  const [show80, setShow80] = useState(false);
  const [dismissed40, setDismissed40] = useState(false);
  const [dismissed80, setDismissed80] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const d40 = sessionStorage.getItem('scrollBanner40');
    const d80 = sessionStorage.getItem('scrollBanner80');
    if (d40) setDismissed40(true);
    if (d80) setDismissed80(true);
  }, []);

  useEffect(() => {
    if (depth >= 40 && !dismissed40 && !show40) {
      setShow40(true);
    }
  }, [depth, dismissed40]);

  useEffect(() => {
    if (depth >= 80 && !dismissed80 && !show80) {
      setShow80(true);
    }
  }, [depth, dismissed80]);

  function dismiss40() {
    setShow40(false);
    setDismissed40(true);
    sessionStorage.setItem('scrollBanner40', '1');
  }

  function dismiss80() {
    setShow80(false);
    setDismissed80(true);
    sessionStorage.setItem('scrollBanner80', '1');
  }

  return (
    <>
      {/* 40% scroll — slide-up banner */}
      {show40 && !dismissed40 && (
        <div className="fixed bottom-16 md:bottom-4 left-0 right-0 z-40 px-4 pointer-events-none">
          <div className="max-w-lg mx-auto pointer-events-auto animate-slide-up">
            <div className="bg-brand-charcoal text-white rounded-xl shadow-2xl flex items-center justify-between px-5 py-3 border border-brand-gold/30">
              <div className="flex items-center gap-3">
                <span className="text-brand-gold text-lg">⚡</span>
                <div>
                  <p className="text-sm font-semibold">Get a free quote — takes 60 seconds</p>
                  <p className="text-xs text-white/60">No obligation. We respond within 2 hours.</p>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0 ml-3">
                <Link
                  href="/contact"
                  className="bg-brand-gold text-brand-charcoal text-xs font-bold px-3 py-2 rounded flex items-center gap-1 hover:bg-brand-copper transition-colors whitespace-nowrap"
                >
                  Start Now <ArrowRight className="w-3 h-3" />
                </Link>
                <button
                  onClick={dismiss40}
                  className="text-white/40 hover:text-white p-1"
                  aria-label="Dismiss"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 80% scroll — compact sticky footer CTA */}
      {show80 && !dismissed80 && depth >= 80 && (
        <div className="fixed bottom-16 md:bottom-0 left-0 right-0 z-30 bg-brand-gold border-t-2 border-brand-copper pointer-events-auto">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            <p className="text-brand-charcoal text-sm font-semibold">
              🏡 Ready to transform your home?{' '}
              <span className="font-normal">3 consultation slots available this month.</span>
            </p>
            <div className="flex items-center gap-2 shrink-0">
              <Link
                href="/contact"
                className="bg-brand-charcoal text-white text-sm font-bold px-4 py-2 rounded hover:bg-brand-charcoal/80 transition-colors whitespace-nowrap"
              >
                Book Free Consult
              </Link>
              <button
                onClick={dismiss80}
                className="text-brand-charcoal/50 hover:text-brand-charcoal p-1"
                aria-label="Dismiss"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
