'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Gift, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { submitLeadMagnet } from '@/app/actions';
import { fadeUp, staggerContainer } from '@/lib/animations';

const guideContents = [
  'Real cost breakdowns from 150+ Austin renovation projects (2022–2024)',
  'Kitchen remodel: what $30k gets you vs. $100k — with photos',
  'Bathroom renovation cost guide by finish level (standard, premium, luxury)',
  'The 6 most common renovation budget mistakes Austin homeowners make',
  'How to compare contractor bids without getting burned',
  'Material cost escalations: what\'s gotten more expensive and why',
  'Basement finishing costs: permits, egress, and full finish-out',
  'Outdoor kitchen investment guide — what adds resale value in Austin',
  'Red flags in renovation contracts (and what fair terms look like)',
  '5 questions to ask every contractor before signing',
];

const testimonials = [
  { name: 'Jennifer T.', text: 'This guide saved us from overpaying by $18,000. Read it before you call anyone.' },
  { name: 'Carlos M.', text: 'Finally, something honest about renovation costs in Austin. Incredibly useful.' },
  { name: 'Sarah K.', text: 'I wish I had this before our first renovation. Would have avoided so many mistakes.' },
];

export default function CostGuidePage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email) { setError('Please enter your email.'); return; }
    setLoading(true);
    const fd = new FormData();
    fd.set('email', email);
    const result = await submitLeadMagnet(fd);
    setLoading(false);
    if (result.success) setSuccess(true);
    else setError(result.errors?.email?.[0] || 'Something went wrong.');
  }

  return (
    // No header/footer nav distractions on this landing page
    <div className="min-h-screen bg-brand-cream">
      {/* Simple nav bar */}
      <div className="bg-brand-charcoal px-4 py-3 flex items-center justify-between max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-1">
          <span className="font-playfair text-xl font-bold text-white">Renovate</span>
          <span className="font-playfair text-xl font-bold text-brand-gold">+</span>
        </Link>
        <Link href="/contact" className="text-white/60 hover:text-brand-gold text-sm transition-colors">
          Book Free Consultation →
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-brand-gold/20 text-brand-copper rounded-full px-4 py-1.5 text-xs font-mono uppercase tracking-wider mb-5">
              <Gift className="w-3.5 h-3.5" />
              Free Download — No Credit Card Required
            </motion.div>

            <motion.h1 variants={fadeUp} className="font-playfair text-4xl sm:text-5xl text-brand-charcoal font-bold mb-4 leading-tight">
              The 2024 Austin{' '}
              <span className="text-brand-gold">Renovation Cost Guide</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-brand-warmGray text-lg leading-relaxed mb-8">
              Before you call a single contractor, read this. 42 pages of real numbers, honest advice, and hard-won lessons from 20 years of Austin renovations.
            </motion.p>

            <motion.div variants={fadeUp} className="mb-8">
              <p className="font-semibold text-brand-charcoal mb-4">What's inside:</p>
              <ul className="space-y-3">
                {guideContents.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-brand-charcoal">
                    <CheckCircle className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Social proof */}
            <motion.div variants={fadeUp} className="space-y-3">
              {testimonials.map((t) => (
                <div key={t.name} className="bg-white rounded-xl p-4 border border-gray-100 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-gold flex items-center justify-center text-brand-charcoal text-xs font-bold shrink-0">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="flex items-center gap-0.5 mb-1">
                      {[1,2,3,4,5].map(s => <Star key={s} className="w-3 h-3 fill-brand-gold text-brand-gold" />)}
                    </div>
                    <p className="text-brand-charcoal text-sm italic">"{t.text}"</p>
                    <p className="text-brand-warmGray text-xs mt-1">— {t.name}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="lg:sticky lg:top-8"
          >
            <div className="bg-white rounded-2xl shadow-2xl border border-brand-gold/20 overflow-hidden">
              {/* Top band */}
              <div className="bg-brand-gold px-6 py-4">
                <div className="flex items-center gap-2 mb-1">
                  <Gift className="w-5 h-5 text-brand-charcoal" />
                  <span className="font-mono text-xs font-bold text-brand-charcoal uppercase tracking-wider">
                    Free Instant Download
                  </span>
                </div>
                <p className="text-brand-charcoal/70 text-xs">
                  Sent to your inbox in under 60 seconds.
                </p>
              </div>

              <div className="p-6">
                {!success ? (
                  <>
                    <h2 className="font-playfair text-2xl text-brand-charcoal font-bold mb-2">
                      Get Your Free Cost Guide
                    </h2>
                    <p className="text-brand-warmGray text-sm mb-6">
                      Enter your email and we'll send you the full 42-page guide instantly.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <Input
                          type="email"
                          placeholder="Your email address"
                          value={email}
                          onChange={(e) => { setEmail(e.target.value); setError(''); }}
                          className="h-12 text-base"
                        />
                        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
                      </div>
                      <Button type="submit" size="lg" className="w-full" disabled={loading}>
                        {loading ? 'Sending...' : 'Send Me the Free Guide →'}
                      </Button>
                    </form>
                    <p className="text-center text-xs text-brand-warmGray mt-4">
                      We respect your privacy. Unsubscribe anytime. No spam, ever.
                    </p>
                    <div className="mt-6 pt-5 border-t border-gray-100">
                      <p className="text-xs text-brand-warmGray text-center mb-3">
                        Ready to go beyond the guide?
                      </p>
                      <Button asChild variant="charcoal" className="w-full">
                        <Link href="/contact">Book a Free Consultation Instead</Link>
                      </Button>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-6">
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', bounce: 0.5 }}>
                      <div className="w-16 h-16 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-brand-gold" />
                      </div>
                    </motion.div>
                    <h3 className="font-playfair text-xl text-brand-charcoal font-bold mb-2">
                      Check Your Inbox!
                    </h3>
                    <p className="text-brand-warmGray text-sm mb-6">
                      Your 2024 Austin Renovation Cost Guide is on its way. While you wait — why not book your free consultation?
                    </p>
                    <Button asChild className="w-full">
                      <Link href="/contact">
                        Book My Free Consultation <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </Button>
                  </div>
                )}
              </div>
            </div>

            {/* Trust badges */}
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              {['BBB A+ Rated', 'Licensed & Insured', '4.9★ Google Reviews'].map((b) => (
                <span key={b} className="text-xs text-brand-warmGray flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-brand-gold" /> {b}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
