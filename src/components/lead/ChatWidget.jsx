'use client';

import { useState, useEffect } from 'react';
import { MessageCircle, X, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { submitChatForm } from '@/app/actions';

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [showPromo, setShowPromo] = useState(false);
  const [promoDismissed, setPromoDismissed] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!promoDismissed && !open) {
        setShowPromo(true);
      }
    }, 30000);
    return () => clearTimeout(timer);
  }, [promoDismissed, open]);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError('All fields are required.');
      return;
    }
    setLoading(true);
    const fd = new FormData();
    Object.entries(form).forEach(([k, v]) => fd.set(k, v));
    const result = await submitChatForm(fd);
    setLoading(false);
    if (result.success) {
      setSuccess(true);
    } else {
      setError(result.message || 'Something went wrong.');
    }
  }

  return (
    <>
      {/* Proactive promo bubble */}
      {showPromo && !promoDismissed && !open && (
        <div className="fixed bottom-24 right-6 z-50 max-w-xs animate-slide-up">
          <div className="bg-white rounded-xl shadow-2xl p-4 border border-brand-gold/30 relative">
            <button
              onClick={() => {
                setShowPromo(false);
                setPromoDismissed(true);
              }}
              className="absolute top-2 right-2 text-brand-warmGray hover:text-brand-charcoal"
              aria-label="Dismiss"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 bg-brand-gold rounded-full flex items-center justify-center shrink-0">
                <span className="text-brand-charcoal text-sm font-bold">R+</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-brand-charcoal mb-1">
                  Exploring renovations?
                </p>
                <p className="text-xs text-brand-warmGray leading-relaxed">
                  Hi! We have <strong className="text-brand-gold">3 consultation slots</strong> open this month 👋 — want to grab one?
                </p>
                <button
                  onClick={() => {
                    setShowPromo(false);
                    setOpen(true);
                  }}
                  className="mt-2 text-xs text-brand-gold font-semibold hover:underline"
                >
                  Yes, let's talk →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-slide-up">
          {/* Header */}
          <div className="bg-brand-charcoal px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center">
                <span className="text-brand-charcoal text-xs font-bold">R+</span>
              </div>
              <div>
                <p className="text-white text-sm font-semibold">Renovate+ Team</p>
                <p className="text-white/60 text-xs flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full inline-block"></span>
                  Usually replies within 1 hour
                </p>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="text-white/60 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4">
            {!success ? (
              <>
                <div className="bg-brand-cream rounded-lg p-3 mb-4">
                  <p className="text-sm text-brand-charcoal leading-relaxed">
                    👋 Hi there! How can we help you today? Send us a quick message and we'll get back to you fast.
                  </p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <Input
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="text-sm h-9"
                  />
                  <Input
                    type="email"
                    placeholder="Your email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="text-sm h-9"
                  />
                  <Textarea
                    placeholder="What are you looking to renovate?"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="text-sm min-h-[70px]"
                  />
                  {error && <p className="text-red-500 text-xs">{error}</p>}
                  <Button type="submit" className="w-full h-9 text-sm" disabled={loading}>
                    <Send className="w-3 h-3 mr-1" />
                    {loading ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </>
            ) : (
              <div className="text-center py-6">
                <CheckCircle className="w-10 h-10 text-brand-gold mx-auto mb-3" />
                <p className="font-semibold text-brand-charcoal text-sm">Message received!</p>
                <p className="text-brand-warmGray text-xs mt-1">
                  We'll reply to your email within the hour.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={() => {
          setOpen(!open);
          setShowPromo(false);
        }}
        className="fixed bottom-20 right-6 z-50 w-14 h-14 bg-brand-gold text-brand-charcoal rounded-full shadow-lg flex items-center justify-center hover:bg-brand-copper transition-all hover:scale-110 animate-pulse-gold md:bottom-6"
        aria-label="Open chat"
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
    </>
  );
}
