import Link from "next/link";
import { siteConfig } from "@/data";
import { Phone, Mail, MapPin, Instagram, Facebook, Star } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-charcoal text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-1 mb-4">
              {siteConfig.logoAccentFirst ? (
                <>
                  <span className="font-heading text-2xl font-bold text-brand-gold">
                    {siteConfig.logoAccent}
                  </span>
                  <span className="font-heading text-2xl font-bold text-white">
                    {siteConfig.logoMain}
                  </span>
                </>
              ) : (
                <>
                  <span className="font-heading text-2xl font-bold text-white">
                    {siteConfig.logoMain}
                  </span>
                  {siteConfig.logoAccent && (
                    <span className="font-heading text-2xl font-bold text-brand-gold">
                      {siteConfig.logoAccent}
                    </span>
                  )}
                </>
              )}
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              {siteConfig.aboutBrief}
            </p>
            <div className="flex items-center gap-1 mb-2">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star
                  key={s}
                  className="w-4 h-4 fill-brand-gold text-brand-gold"
                />
              ))}
              <span className="text-brand-gold font-mono text-sm ml-1">
                4.9/5
              </span>
            </div>
            <p className="text-white/40 text-xs">
              Based on 150+ Google Reviews
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-white font-semibold mb-4 text-lg">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/portfolio", label: "Portfolio" },
                { href: "/about", label: "Our Story" },
                { href: "/contact", label: "Book Consultation" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-brand-gold text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-white font-semibold mb-4 text-lg">
              Services
            </h4>
            <ul className="space-y-2">
              {[
                "Kitchen Remodeling",
                "Bathroom Renovation",
                "Basement Finishing",
                "Home Additions",
                "Outdoor Living",
                "Full Home Renovation",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-white/60 hover:text-brand-gold text-sm transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-white font-semibold mb-4 text-lg">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                  className="flex items-start gap-2 text-white/60 hover:text-brand-gold text-sm transition-colors"
                >
                  <Phone className="w-4 h-4 mt-0.5 shrink-0 text-brand-gold" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-2 text-white/60 hover:text-brand-gold text-sm transition-colors"
                >
                  <Mail className="w-4 h-4 mt-0.5 shrink-0 text-brand-gold" />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-white/60 text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-brand-gold" />
                  {siteConfig.address}
                  <br />
                  {siteConfig.city}, {siteConfig.state} {siteConfig.zipCode}
                </div>
              </li>
              <li className="text-white/60 text-sm">
                Mon–Fri: 8am–6pm
                <br />
                Sat: 9am–2pm
              </li>
            </ul>
            <div className="flex gap-3 mt-5">
              <a
                href={siteConfig.instagramUrl || "https://instagram.com"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-charcoal transition-all"
                aria-label="Follow on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.facebookUrl || "https://facebook.com"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-charcoal transition-all"
                aria-label="Follow on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            © {year} {siteConfig.businessName}. All rights reserved. Licensed
            General Contractor · Texas License #GC-204891
          </p>
          <div className="flex items-center gap-4 text-xs text-white/40">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-brand-gold inline-block"></span>
              BBB A+ Rated
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-brand-gold inline-block"></span>
              Licensed & Insured
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-brand-gold inline-block"></span>
              NKBA Member
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
