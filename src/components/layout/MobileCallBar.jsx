"use client";

import { Phone } from "lucide-react";
import { siteConfig } from "@/data";

export default function MobileCallBar() {
  return (
    <a
      href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-brand-gold text-brand-charcoal text-center py-4 font-semibold text-sm flex items-center justify-center gap-2 shadow-lg"
      aria-label={`Call ${siteConfig.businessName} now`}
    >
      <Phone className="w-4 h-4" />
      <span>📞 Tap to Call · {siteConfig.phone}</span>
    </a>
  );
}
