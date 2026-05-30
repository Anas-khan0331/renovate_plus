import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Award, Users, Heart, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import FinalCTA from "@/components/sections/FinalCTA";
import { teamMembers } from "@/data/index";

export const metadata = {
  title: "About Renovate+ | Austin's Premier Renovation Team Since 2004",
  description:
    "Meet the team behind Austin's most trusted renovation company. 20 years of craftsmanship, transparency, and families transformed. Learn our story.",
  alternates: { canonical: "https://renovateplus.com/about" },
};

const milestones = [
  {
    year: "2004",
    event:
      "Marcus Holloway founds Renovate+ from a single-truck operation in South Austin.",
  },
  {
    year: "2008",
    event:
      "Survived the recession by doubling down on quality. Emerged stronger than ever.",
  },
  {
    year: "2012",
    event:
      "Expanded to a full in-house crew of 12. Completed our 50th project.",
  },
  {
    year: "2016",
    event:
      "Opened our South Congress design showroom. Welcomed Elena Vasquez as Head of Design.",
  },
  {
    year: "2019",
    event:
      "Earned BBB A+ rating. Achieved 100+ project milestone with 98% satisfaction.",
  },
  {
    year: "2024",
    event:
      "150+ projects completed. Named one of Austin's top 10 home improvement companies.",
  },
];

const values = [
  {
    icon: Award,
    title: "Uncompromising Quality",
    description:
      'We use materials we\'d put in our own homes. No shortcuts, no inferior substitutions, no "good enough."',
  },
  {
    icon: Users,
    title: "Radical Transparency",
    description:
      "Fixed prices. No surprise invoices. Every decision documented. You always know exactly where your money is going.",
  },
  {
    icon: Zap,
    title: "Reliable Timeliness",
    description:
      "We set honest timelines and hit them. When unexpected issues arise, we tell you immediately — not on invoice day.",
  },
  {
    icon: Heart,
    title: "Genuine Craftsmanship",
    description:
      "Our crews take pride in their work. Many have been with us 10+ years. That continuity shows in every finished project.",
  },
];

const certifications = [
  "BBB A+ Rated",
  "Texas Licensed General Contractor",
  "Licensed & Fully Insured",
  "Houzz Pro Verified",
  "NKBA Member",
  "EPA Lead-Safe Certified",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-0 bg-brand-charcoal grain-overlay overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(201,169,110,0.12)_0%,_transparent_60%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div className="pb-16">
            <span className="text-brand-gold font-mono text-xs uppercase tracking-[0.2em] mb-4 block">
              Our Story
            </span>
            <h1 className="font-heading text-5xl sm:text-6xl text-white font-bold mb-6 leading-tight">
              Building Trust,
              <br />
              <span className="text-brand-gold">One Home at a Time</span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              In 2004, Marcus Holloway started Renovate+ with one truck, two
              tools, and a conviction that Austin homeowners deserved better
              than the unreliable contractors they'd been settling for.
            </p>
            <p className="text-white/60 leading-relaxed">
              Twenty years later, we've completed 150+ projects and built a
              reputation that spreads entirely through word of mouth. We've
              never spent a dollar on ads — our clients are our marketing
              department.
            </p>
          </div>
          <div className="relative aspect-[3/4] lg:aspect-auto lg:h-96 rounded-t-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80"
              alt="Renovate+ team at work on an Austin home renovation"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-brand-gold font-mono text-xs uppercase tracking-[0.2em] mb-3 block">
              What We Stand For
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl text-brand-charcoal font-bold">
              Our Core Values
            </h2>
            <span className="block w-16 h-0.5 bg-brand-gold mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-7 border border-gray-100 card-gold-hover text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-brand-gold" />
                </div>
                <h3 className="font-heading text-lg text-brand-charcoal font-semibold mb-2">
                  {title}
                </h3>
                <p className="text-brand-warmGray text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-brand-gold font-mono text-xs uppercase tracking-[0.2em] mb-3 block">
              20 Years
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl text-brand-charcoal font-bold">
              Our Journey
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-brand-gold/30" />
            <div className="space-y-8">
              {milestones.map((m) => (
                <div key={m.year} className="flex gap-6 pl-2">
                  <div className="relative flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-brand-charcoal border-2 border-brand-gold flex items-center justify-center shrink-0 z-10">
                      <span className="w-2 h-2 rounded-full bg-brand-gold" />
                    </div>
                  </div>
                  <div className="pb-2">
                    <span className="font-mono text-brand-gold font-bold text-sm block mb-1">
                      {m.year}
                    </span>
                    <p className="text-brand-charcoal leading-relaxed">
                      {m.event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-brand-gold font-mono text-xs uppercase tracking-[0.2em] mb-3 block">
              The People
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl text-brand-charcoal font-bold mb-3">
              Meet the Team
            </h2>
            <p className="text-brand-warmGray max-w-lg mx-auto">
              Our team averages 14 years of experience. They're not just skilled
              — they genuinely care about the homes they work in.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-2xl p-6 border border-gray-100 card-gold-hover flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-brand-charcoal flex items-center justify-center mb-4 text-brand-gold font-bold font-heading text-xl">
                  {member.initials}
                </div>
                <h3 className="font-heading text-lg text-brand-charcoal font-semibold">
                  {member.name}
                </h3>
                <p className="text-brand-gold font-mono text-xs uppercase tracking-wider mb-1">
                  {member.title}
                </p>
                <p className="text-brand-warmGray text-xs mb-3 font-mono">
                  {member.yearsExperience} years experience
                </p>
                <p className="text-brand-warmGray text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-brand-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl text-white font-bold mb-2">
              Credentials & Certifications
            </h2>
            <p className="text-white/60">
              The credentials that mean you can trust us with your home.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="flex items-center gap-2 bg-white/10 rounded-full px-5 py-2.5"
              >
                <CheckCircle className="w-4 h-4 text-brand-gold" />
                <span className="text-white text-sm font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-gold font-mono text-xs uppercase tracking-[0.2em] mb-3 block">
            Giving Back
          </span>
          <h2 className="font-heading text-4xl text-brand-charcoal font-bold mb-5">
            Rooted in Austin
          </h2>
          <p className="text-brand-warmGray leading-relaxed mb-4">
            We've renovated homes for Austin Habitat for Humanity, donated
            materials to the SAFE Alliance's housing program, and sponsor two
            Austin youth sports leagues. This is our community — we invest in
            it.
          </p>
          <p className="text-brand-warmGray leading-relaxed mb-8">
            Every year, we complete one pro-bono renovation for a family in
            need. It's the project our whole team looks forward to most.
          </p>
          <Button asChild variant="charcoal" size="lg">
            <Link href="/contact">Join the Renovate+ Family</Link>
          </Button>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
