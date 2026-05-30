"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-brand-charcoal shadow-lg py-3" : "bg-transparent py-5",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1 group">
          {siteConfig.logoAccentFirst ? (
            <>
              <span className="font-heading text-4xl font-bold text-brand-gold tracking-tight">
                {siteConfig.logoAccent}
              </span>
              <span className="font-heading text-4xl font-bold text-white tracking-tight">
                {siteConfig.logoMain}
              </span>
            </>
          ) : (
            <>
              <span className="font-heading text-4xl font-bold text-white tracking-tight">
                {siteConfig.logoMain}
              </span>
              {siteConfig.logoAccent && (
                <span className="font-heading text-4xl font-bold text-brand-gold tracking-tight">
                  {siteConfig.logoAccent}
                </span>
              )}
            </>
          )}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-brand-gold text-sm font-medium transition-colors duration-200 tracking-wide"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
            className="text-white/70 hover:text-brand-gold text-sm font-mono transition-colors flex items-center gap-1"
          >
            <Phone className="w-3 h-3" />
            {siteConfig.phone}
          </a>
          <Button asChild size="sm">
            <Link href="/contact">Book Free Consultation</Link>
          </Button>
        </div>

        {/* Mobile: Call + Hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <a
            href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
            className="bg-brand-gold text-brand-charcoal px-4 py-2 rounded text-sm font-semibold flex items-center gap-1"
          >
            <Phone className="w-3 h-3" />
            Call Now
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white p-1"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-brand-charcoal border-t border-white/10 px-4 py-6 space-y-4 animate-fade-in">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-white/80 hover:text-brand-gold text-base font-medium py-2 border-b border-white/10 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Button asChild className="w-full mt-4">
            <Link href="/contact" onClick={() => setMenuOpen(false)}>
              Book Free Consultation
            </Link>
          </Button>
        </div>
      )}
    </header>
  );
}
