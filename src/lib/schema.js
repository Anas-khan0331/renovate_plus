import { siteConfig } from "@/data";

export function localBusinessSchema() {
  const sameAs = [
    siteConfig.facebookUrl,
    siteConfig.instagramUrl,
    siteConfig.houzzUrl,
    siteConfig.yelpUrl,
  ].filter(Boolean);

  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: siteConfig.businessName,
    url: siteConfig.website,
    logo: `${siteConfig.website}/logo.png`,
    description: `${siteConfig.city}'s trusted remodeling & construction team since ${siteConfig.foundedYear}. ${siteConfig.projectsCompleted}+ projects completed, ${siteConfig.satisfactionRate}% satisfaction rate.`,
    foundingDate: String(siteConfig.foundedYear),
    telephone: `+1-${siteConfig.phone.replace(/\D/g, "").replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3")}`,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.state,
      postalCode: siteConfig.zipCode,
      addressCountry: "US",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "14:00",
      },
    ],
    ...(sameAs.length > 0 ? { sameAs } : {}),
    priceRange: "$$$",
    areaServed: {
      "@type": "State",
      name: `${siteConfig.city}, ${siteConfig.state}`,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: String(siteConfig.projectsCompleted),
      bestRating: "5",
    },
  };
}

export function serviceSchema(service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.businessName,
      url: siteConfig.website,
    },
    description: service.shortDescription,
    url: `${siteConfig.website}/services#${service.slug}`,
    areaServed: `${siteConfig.city}, ${siteConfig.state}`,
    offers: {
      "@type": "Offer",
      price: service.startingPrice.replace(/[^0-9]/g, ""),
      priceCurrency: "USD",
      description: `Starting from ${service.startingPrice}`,
    },
  };
}

export function reviewSchema(testimonial) {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    author: {
      "@type": "Person",
      name: testimonial.author,
    },
    reviewBody: testimonial.quote,
    reviewRating: {
      "@type": "Rating",
      ratingValue: testimonial.rating.toString(),
      bestRating: "5",
    },
    itemReviewed: {
      "@type": "LocalBusiness",
      name: siteConfig.businessName,
    },
  };
}
