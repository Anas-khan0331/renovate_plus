import { siteConfig } from "@/data";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/"],
    },
    sitemap: `${siteConfig.website}/sitemap.xml`,
    host: siteConfig.website,
  };
}
