"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calculator } from "lucide-react";

const steps = [
  {
    id: "type",
    label: "Project Type",
    options: [
      { value: "kitchen", label: "Kitchen Remodel", base: [25000, 120000] },
      { value: "bathroom", label: "Bathroom Renovation", base: [10000, 65000] },
      { value: "basement", label: "Basement Finishing", base: [30000, 90000] },
      { value: "addition", label: "Home Addition", base: [80000, 250000] },
      { value: "outdoor", label: "Outdoor Living", base: [15000, 75000] },
      { value: "full", label: "Full Home Renovation", base: [120000, 400000] },
    ],
  },
  {
    id: "size",
    label: "Project Size",
    options: [
      { value: "small", label: "Small / Compact", multiplier: [0.6, 0.7] },
      { value: "medium", label: "Medium / Standard", multiplier: [0.85, 1.0] },
      { value: "large", label: "Large / Expansive", multiplier: [1.2, 1.5] },
    ],
  },
  {
    id: "finish",
    label: "Finish Level",
    options: [
      { value: "standard", label: "Standard", multiplier: [0.7, 0.8] },
      { value: "premium", label: "Premium", multiplier: [0.95, 1.1] },
      { value: "luxury", label: "Luxury / High-End", multiplier: [1.3, 1.6] },
    ],
  },
];

function formatK(n) {
  return n >= 1000 ? `$${(n / 1000).toFixed(0)}k` : `$${n}`;
}

export default function CostEstimator() {
  const [selections, setSelections] = useState({});
  const [estimate, setEstimate] = useState(null);

  const currentStep = steps.findIndex((s) => !selections[s.id]);
  const done = currentStep === -1;

  function select(stepId, option) {
    const newSels = { ...selections, [stepId]: option };
    setSelections(newSels);

    // Calculate if all steps done
    const allDone = steps.every((s) => newSels[s.id]);
    if (allDone) {
      const typeOpt = newSels["type"];
      const sizeOpt = newSels["size"];
      const finishOpt = newSels["finish"];
      const low =
        Math.round(
          (typeOpt.base[0] * sizeOpt.multiplier[0] * finishOpt.multiplier[0]) /
            1000,
        ) * 1000;
      const high =
        Math.round(
          (typeOpt.base[1] * sizeOpt.multiplier[1] * finishOpt.multiplier[1]) /
            1000,
        ) * 1000;
      setEstimate([low, high]);
    }
  }

  function reset() {
    setSelections({});
    setEstimate(null);
  }

  const activeStep = done ? null : steps[currentStep];

  return (
    <div className="bg-white rounded-2xl border border-brand-gold/30 shadow-xl overflow-hidden">
      {/* Header */}
      <div className="bg-brand-charcoal px-6 py-4 flex items-center gap-3">
        <Calculator className="w-5 h-5 text-brand-gold" />
        <h3 className="font-heading text-white text-lg">
          Renovation Cost Estimator
        </h3>
        <span className="ml-auto text-xs text-white/40 font-mono">
          Step {Math.min(currentStep + 1, steps.length)} of {steps.length}
        </span>
      </div>

      {/* Progress */}
      <div className="flex">
        {steps.map((s, i) => (
          <div
            key={s.id}
            className={`h-1 flex-1 transition-colors duration-300 ${
              selections[s.id] ? "bg-brand-gold" : "bg-gray-100"
            }`}
          />
        ))}
      </div>

      <div className="p-6">
        {!done ? (
          <>
            <p className="text-sm text-brand-warmGray font-mono uppercase tracking-wider mb-1">
              Step {currentStep + 1}
            </p>
            <h4 className="font-heading text-xl text-brand-charcoal mb-4">
              {activeStep.label}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {activeStep.options.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => select(activeStep.id, opt)}
                  className="border border-gray-200 rounded-lg px-4 py-3 text-left hover:border-brand-gold hover:bg-brand-gold/5 transition-all group"
                >
                  <span className="text-sm font-medium text-brand-charcoal group-hover:text-brand-copper">
                    {opt.label}
                  </span>
                  {opt.base && (
                    <p className="text-xs text-brand-warmGray mt-0.5 font-mono">
                      {formatK(opt.base[0])} – {formatK(opt.base[1])}
                    </p>
                  )}
                </button>
              ))}
            </div>

            {/* Selections summary */}
            {Object.keys(selections).length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {steps
                  .filter((s) => selections[s.id])
                  .map((s) => (
                    <span
                      key={s.id}
                      className="text-xs bg-brand-gold/10 text-brand-copper border border-brand-gold/30 px-2 py-1 rounded-full font-mono"
                    >
                      {selections[s.id].label}
                    </span>
                  ))}
              </div>
            )}
          </>
        ) : estimate ? (
          <div className="text-center">
            <p className="text-sm text-brand-warmGray font-mono uppercase tracking-wider mb-2">
              Your Estimate
            </p>
            <div className="text-4xl font-heading font-bold text-brand-charcoal mb-1">
              {formatK(estimate[0])} – {formatK(estimate[1])}
            </div>
            <p className="text-brand-warmGray text-sm mb-2">
              {selections["type"]?.label} · {selections["size"]?.label} ·{" "}
              {selections["finish"]?.label}
            </p>
            <p className="text-xs text-brand-warmGray/70 mb-6 max-w-sm mx-auto">
              This is a rough estimate based on typical Austin project costs. An
              exact quote requires a site visit — and it's free.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg">
                <Link href="/contact" className="flex items-center gap-2">
                  Get an Exact Quote <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                onClick={reset}
                className="border-brand-charcoal text-brand-charcoal hover:bg-brand-charcoal hover:text-white"
              >
                Start Over
              </Button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
