"use client";

import { useState } from "react";
import { siteConfig } from "@/data";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { submitContactForm } from "@/app/actions";
import { fadeUp, staggerContainer } from "@/lib/animations";

const projectTypes = [
  { value: "kitchen", label: "Kitchen Remodel", icon: "🍳" },
  { value: "bathroom", label: "Bathroom", icon: "🛁" },
  { value: "basement", label: "Basement", icon: "🏠" },
  { value: "addition", label: "Home Addition", icon: "🏗️" },
  { value: "outdoor", label: "Outdoor Living", icon: "🌿" },
  { value: "full", label: "Full Home", icon: "✨" },
];

const timelines = [
  { value: "asap", label: "As Soon As Possible" },
  { value: "1-3months", label: "Within 1–3 Months" },
  { value: "3-6months", label: "Within 3–6 Months" },
  { value: "planning", label: "Just Planning Ahead" },
];

const budgets = [
  { value: "under25k", label: "Under $25,000" },
  { value: "25-75k", label: "$25,000 – $75,000" },
  { value: "75-150k", label: "$75,000 – $150,000" },
  { value: "150k+", label: "$150,000+" },
  { value: "unsure", label: "Not Sure Yet" },
];

const TOTAL_STEPS = 5;

export default function ContactPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    projectType: "",
    timeline: "",
    budget: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const progress = ((step - 1) / TOTAL_STEPS) * 100;

  function set(field, value) {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  }

  function validateStep() {
    if (step === 1 && !formData.projectType) {
      setErrors({ projectType: "Please select a project type." });
      return false;
    }
    if (step === 2 && !formData.timeline) {
      setErrors({ timeline: "Please select a timeline." });
      return false;
    }
    if (step === 3 && !formData.budget) {
      setErrors({ budget: "Please select a budget range." });
      return false;
    }
    if (step === 4) {
      const errs = {};
      if (!formData.name.trim()) errs.name = "Name is required.";
      if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
        errs.email = "Valid email required.";
      if (
        !formData.phone.trim() ||
        formData.phone.replace(/\D/g, "").length < 10
      )
        errs.phone = "Valid phone required.";
      if (!formData.address.trim()) errs.address = "Address is required.";
      if (Object.keys(errs).length) {
        setErrors(errs);
        return false;
      }
    }
    return true;
  }

  function next() {
    if (validateStep()) setStep((s) => Math.min(s + 1, TOTAL_STEPS));
  }

  function back() {
    setStep((s) => Math.max(s - 1, 1));
  }

  async function handleSubmit() {
    setLoading(true);
    const fd = new FormData();
    Object.entries(formData).forEach(([k, v]) => fd.set(k, v));
    const result = await submitContactForm(fd);
    setLoading(false);
    if (result.success) {
      setSuccess(true);
    } else {
      setErrors(
        result.errors || { general: "Submission failed. Please try again." },
      );
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-charcoal pt-32 pb-16 grain-overlay relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(201,169,110,0.08)_0%,_transparent_60%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-gold font-mono text-xs uppercase tracking-[0.2em] mb-4 block">
            Free Consultation
          </span>
          <h1 className="font-heading text-5xl sm:text-6xl text-white font-bold mb-4">
            Let's Build <span className="text-brand-gold">Something Great</span>
          </h1>
          <p className="text-white/70 text-lg max-w-md mx-auto">
            Tell us about your project. We'll respond within 2 hours with a
            personalized plan.
          </p>
        </div>
      </section>

      {/* Two-col layout */}
      <section className="py-16 bg-brand-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form (left 3 cols) */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* Progress bar */}
              <div className="px-6 pt-6 pb-0">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs text-brand-warmGray uppercase tracking-wider">
                    Step {step} of {TOTAL_STEPS}
                  </span>
                  <span className="font-mono text-xs text-brand-gold">
                    {Math.round(progress)}% Complete
                  </span>
                </div>
                <Progress value={progress} className="h-1.5 mb-6" />
              </div>

              <div className="px-6 pb-6">
                {!success ? (
                  <AnimatePresence mode="wait">
                    {step === 1 && (
                      <motion.div
                        key="s1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                      >
                        <h2 className="font-heading text-2xl text-brand-charcoal font-bold mb-2">
                          What are you renovating?
                        </h2>
                        <p className="text-brand-warmGray text-sm mb-6">
                          Select the primary project type.
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                          {projectTypes.map((pt) => (
                            <button
                              key={pt.value}
                              onClick={() => {
                                set("projectType", pt.value);
                              }}
                              className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${
                                formData.projectType === pt.value
                                  ? "border-brand-gold bg-brand-gold/5 scale-[1.02]"
                                  : "border-gray-100 hover:border-brand-gold/50"
                              }`}
                            >
                              <span className="text-2xl">{pt.icon}</span>
                              <span className="text-sm font-medium text-brand-charcoal text-center">
                                {pt.label}
                              </span>
                            </button>
                          ))}
                        </div>
                        {errors.projectType && (
                          <p className="text-red-500 text-xs mt-3">
                            {errors.projectType}
                          </p>
                        )}
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div
                        key="s2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                      >
                        <h2 className="font-heading text-2xl text-brand-charcoal font-bold mb-2">
                          When do you want to start?
                        </h2>
                        <p className="text-brand-warmGray text-sm mb-6">
                          This helps us plan availability.
                        </p>
                        <div className="space-y-3">
                          {timelines.map((t) => (
                            <button
                              key={t.value}
                              onClick={() => set("timeline", t.value)}
                              className={`w-full flex items-center gap-3 p-4 rounded-xl border-2 text-left transition-all ${
                                formData.timeline === t.value
                                  ? "border-brand-gold bg-brand-gold/5"
                                  : "border-gray-100 hover:border-brand-gold/50"
                              }`}
                            >
                              <div
                                className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${
                                  formData.timeline === t.value
                                    ? "border-brand-gold"
                                    : "border-gray-300"
                                }`}
                              >
                                {formData.timeline === t.value && (
                                  <div className="w-2 h-2 rounded-full bg-brand-gold" />
                                )}
                              </div>
                              <span className="text-brand-charcoal font-medium">
                                {t.label}
                              </span>
                            </button>
                          ))}
                        </div>
                        {errors.timeline && (
                          <p className="text-red-500 text-xs mt-3">
                            {errors.timeline}
                          </p>
                        )}
                      </motion.div>
                    )}

                    {step === 3 && (
                      <motion.div
                        key="s3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                      >
                        <h2 className="font-heading text-2xl text-brand-charcoal font-bold mb-2">
                          What's your budget range?
                        </h2>
                        <p className="text-brand-warmGray text-sm mb-6">
                          No judgment — this just helps us tailor our
                          recommendation.
                        </p>
                        <div className="space-y-3">
                          {budgets.map((b) => (
                            <button
                              key={b.value}
                              onClick={() => set("budget", b.value)}
                              className={`w-full flex items-center gap-3 p-4 rounded-xl border-2 text-left transition-all ${
                                formData.budget === b.value
                                  ? "border-brand-gold bg-brand-gold/5"
                                  : "border-gray-100 hover:border-brand-gold/50"
                              }`}
                            >
                              <div
                                className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${
                                  formData.budget === b.value
                                    ? "border-brand-gold"
                                    : "border-gray-300"
                                }`}
                              >
                                {formData.budget === b.value && (
                                  <div className="w-2 h-2 rounded-full bg-brand-gold" />
                                )}
                              </div>
                              <span className="text-brand-charcoal font-medium">
                                {b.label}
                              </span>
                            </button>
                          ))}
                        </div>
                        {errors.budget && (
                          <p className="text-red-500 text-xs mt-3">
                            {errors.budget}
                          </p>
                        )}
                      </motion.div>
                    )}

                    {step === 4 && (
                      <motion.div
                        key="s4"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                      >
                        <h2 className="font-heading text-2xl text-brand-charcoal font-bold mb-2">
                          Your Contact Details
                        </h2>
                        <p className="text-brand-warmGray text-sm mb-6">
                          We'll use this to schedule your free consultation.
                        </p>
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="name" className="mb-1.5 block">
                              Full Name
                            </Label>
                            <Input
                              id="name"
                              placeholder="Jane & John Smith"
                              value={formData.name}
                              onChange={(e) => set("name", e.target.value)}
                            />
                            {errors.name && (
                              <p className="text-red-500 text-xs mt-1">
                                {errors.name}
                              </p>
                            )}
                          </div>
                          <div>
                            <Label htmlFor="email" className="mb-1.5 block">
                              Email Address
                            </Label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="jane@example.com"
                              value={formData.email}
                              onChange={(e) => set("email", e.target.value)}
                            />
                            {errors.email && (
                              <p className="text-red-500 text-xs mt-1">
                                {errors.email}
                              </p>
                            )}
                          </div>
                          <div>
                            <Label htmlFor="phone" className="mb-1.5 block">
                              Phone Number
                            </Label>
                            <Input
                              id="phone"
                              type="tel"
                              placeholder="(512) 000-0000"
                              value={formData.phone}
                              onChange={(e) => set("phone", e.target.value)}
                            />
                            {errors.phone && (
                              <p className="text-red-500 text-xs mt-1">
                                {errors.phone}
                              </p>
                            )}
                          </div>
                          <div>
                            <Label htmlFor="address" className="mb-1.5 block">
                              Home Address
                            </Label>
                            <Input
                              id="address"
                              placeholder="123 Main St, Austin, TX"
                              value={formData.address}
                              onChange={(e) => set("address", e.target.value)}
                            />
                            {errors.address && (
                              <p className="text-red-500 text-xs mt-1">
                                {errors.address}
                              </p>
                            )}
                          </div>
                          <div>
                            <Label htmlFor="message" className="mb-1.5 block">
                              Anything else? (optional)
                            </Label>
                            <Textarea
                              id="message"
                              placeholder="Tell us about your vision..."
                              value={formData.message}
                              onChange={(e) => set("message", e.target.value)}
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {step === 5 && (
                      <motion.div
                        key="s5"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                      >
                        <h2 className="font-heading text-2xl text-brand-charcoal font-bold mb-2">
                          Confirm Your Request
                        </h2>
                        <p className="text-brand-warmGray text-sm mb-6">
                          Review your details and submit.
                        </p>
                        <div className="bg-brand-cream rounded-xl p-5 space-y-3 mb-6 text-sm">
                          <div className="flex justify-between">
                            <span className="text-brand-warmGray">Project</span>
                            <span className="font-medium text-brand-charcoal capitalize">
                              {formData.projectType.replace("-", " ")}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-brand-warmGray">
                              Timeline
                            </span>
                            <span className="font-medium text-brand-charcoal">
                              {
                                timelines.find(
                                  (t) => t.value === formData.timeline,
                                )?.label
                              }
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-brand-warmGray">Budget</span>
                            <span className="font-medium text-brand-charcoal">
                              {
                                budgets.find((b) => b.value === formData.budget)
                                  ?.label
                              }
                            </span>
                          </div>
                          <hr className="border-brand-gold/20" />
                          <div className="flex justify-between">
                            <span className="text-brand-warmGray">Name</span>
                            <span className="font-medium text-brand-charcoal">
                              {formData.name}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-brand-warmGray">Email</span>
                            <span className="font-medium text-brand-charcoal">
                              {formData.email}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-brand-warmGray">Phone</span>
                            <span className="font-medium text-brand-charcoal">
                              {formData.phone}
                            </span>
                          </div>
                        </div>
                        {errors.general && (
                          <p className="text-red-500 text-xs mb-3">
                            {errors.general}
                          </p>
                        )}
                        <Button
                          onClick={handleSubmit}
                          size="lg"
                          className="w-full"
                          disabled={loading}
                        >
                          {loading
                            ? "Submitting..."
                            : "Submit My Consultation Request →"}
                        </Button>
                        <p className="text-center text-xs text-brand-warmGray mt-3">
                          We respond within 2 hours · No spam, ever.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                ) : (
                  <div className="text-center py-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", bounce: 0.4 }}
                    >
                      <div className="w-20 h-20 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-5">
                        <CheckCircle className="w-10 h-10 text-brand-gold" />
                      </div>
                    </motion.div>
                    <h3 className="font-heading text-2xl text-brand-charcoal font-bold mb-2">
                      Request Received!
                    </h3>
                    <p className="text-brand-warmGray leading-relaxed mb-6">
                      Thank you, {formData.name.split(" ")[0]}! We'll be in
                      touch within 2 hours to schedule your free consultation.
                    </p>
                    <div className="bg-brand-cream rounded-xl p-4 text-sm text-brand-warmGray mb-6">
                      While you wait — browse our{" "}
                      <Link
                        href="/portfolio"
                        className="text-brand-gold hover:underline"
                      >
                        portfolio
                      </Link>{" "}
                      for inspiration or check out our{" "}
                      <Link
                        href="/cost-guide"
                        className="text-brand-gold hover:underline"
                      >
                        free cost guide
                      </Link>
                      .
                    </div>
                  </div>
                )}

                {/* Navigation */}
                {!success && (
                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
                    {step > 1 ? (
                      <button
                        onClick={back}
                        className="flex items-center gap-1 text-brand-warmGray hover:text-brand-charcoal text-sm transition-colors"
                      >
                        <ArrowLeft className="w-4 h-4" /> Back
                      </button>
                    ) : (
                      <div />
                    )}
                    {step < TOTAL_STEPS && (
                      <Button onClick={next} size="sm" className="ml-auto">
                        Continue <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Contact info (right 2 cols) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Trust bar */}
            <div className="bg-brand-charcoal rounded-2xl p-6 text-white">
              <h3 className="font-heading text-xl font-bold mb-4">
                Why {siteConfig.businessName}?
              </h3>
              <ul className="space-y-3">
                {[
                  "Free consultation — no cost, no obligation",
                  "Fixed pricing — no surprise invoices",
                  "In-house crews — single point of accountability",
                  "We respond within 2 hours on business days",
                  "20 years serving Austin homeowners",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-white/80"
                  >
                    <CheckCircle className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact details */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 space-y-4">
              <h3 className="font-heading text-xl text-brand-charcoal font-bold">
                Contact Info
              </h3>
              <a
                href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                className="flex items-center gap-3 text-brand-charcoal hover:text-brand-gold transition-colors group"
              >
                <div className="w-9 h-9 bg-brand-gold/10 rounded-full flex items-center justify-center group-hover:bg-brand-gold/20">
                  <Phone className="w-4 h-4 text-brand-gold" />
                </div>
                <div>
                  <p className="text-xs text-brand-warmGray font-mono">Phone</p>
                  <p className="font-semibold">{siteConfig.phone}</p>
                </div>
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 text-brand-charcoal hover:text-brand-gold transition-colors group"
              >
                <div className="w-9 h-9 bg-brand-gold/10 rounded-full flex items-center justify-center group-hover:bg-brand-gold/20">
                  <Mail className="w-4 h-4 text-brand-gold" />
                </div>
                <div>
                  <p className="text-xs text-brand-warmGray font-mono">Email</p>
                  <p className="font-semibold">{siteConfig.email}</p>
                </div>
              </a>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-brand-gold/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-brand-gold" />
                </div>
                <div>
                  <p className="text-xs text-brand-warmGray font-mono">
                    Showroom
                  </p>
                  <p className="font-semibold text-brand-charcoal text-sm">
                    {siteConfig.address}
                    <br />
                    {siteConfig.city}, {siteConfig.state} {siteConfig.zipCode}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-brand-gold/10 rounded-full flex items-center justify-center">
                  <Clock className="w-4 h-4 text-brand-gold" />
                </div>
                <div>
                  <p className="text-xs text-brand-warmGray font-mono">Hours</p>
                  <p className="text-brand-charcoal text-sm font-medium">
                    Mon–Fri: 8am–6pm
                    <br />
                    Sat: 9am–2pm
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
