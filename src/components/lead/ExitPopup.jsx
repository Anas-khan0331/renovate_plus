"use client";

import { useState, useEffect } from "react";
import { useExitIntent } from "@/hooks/useExitIntent";
import { submitLeadMagnet } from "@/app/actions";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle, Gift, X } from "lucide-react";

export default function ExitPopup() {
  const triggered = useExitIntent(4000);
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (triggered && !open && !success) {
      setOpen(true);
    }
  }, [triggered]);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email) {
      setError("Please enter your email.");
      return;
    }
    setLoading(true);
    const fd = new FormData();
    fd.set("email", email);
    const result = await submitLeadMagnet(fd);
    setLoading(false);
    if (result.success) {
      setSuccess(true);
    } else {
      setError(result.errors?.email?.[0] || "Something went wrong.");
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md p-0 overflow-hidden">
        {/* Top gold band */}
        <div className="bg-brand-gold px-6 py-4 text-brand-charcoal">
          <div className="flex items-center gap-2">
            <Gift className="w-5 h-5" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest">
              Free Resource
            </span>
          </div>
        </div>

        <div className="px-6 py-6">
          {!success ? (
            <>
              <DialogHeader className="mb-4">
                <DialogTitle className="text-2xl font-heading text-brand-charcoal leading-tight">
                  Wait! Before You Go...
                </DialogTitle>
                <DialogDescription className="text-brand-warmGray mt-2 text-base leading-relaxed">
                  Download our{" "}
                  <strong className="text-brand-charcoal">
                    Free Austin Renovation Cost Guide 2024
                  </strong>{" "}
                  — see exactly what kitchen, bathroom, and full-home
                  renovations cost in your area.
                </DialogDescription>
              </DialogHeader>

              <ul className="space-y-2 mb-6">
                {[
                  "Real project costs from 150+ Austin renovations",
                  "Material cost breakdowns by finish level",
                  "Red flags to watch out for with contractors",
                  "5 questions to ask before signing anything",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-brand-charcoal"
                  >
                    <CheckCircle className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>

              <form onSubmit={handleSubmit} className="space-y-3">
                <Input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError("");
                  }}
                  className="h-12"
                />
                {error && <p className="text-red-500 text-xs">{error}</p>}
                <Button
                  type="submit"
                  className="w-full h-12 text-base"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Me the Free Guide →"}
                </Button>
              </form>
              <p className="text-center text-xs text-brand-warmGray mt-3">
                No spam. Unsubscribe anytime. We respect your privacy.
              </p>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-brand-gold" />
              </div>
              <h3 className="font-heading text-xl text-brand-charcoal mb-2">
                Check Your Inbox!
              </h3>
              <p className="text-brand-warmGray text-sm">
                Your 2024 Austin Renovation Cost Guide is on its way. While
                you're here — why not book a free consultation?
              </p>
              <Button
                className="mt-4 w-full"
                onClick={() => setOpen(false)}
                asChild
              >
                <a href="/contact">Book My Free Consultation</a>
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
