import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/dashboard", "/dashboard/", "/dashboard/*"] },
    ],
    sitemap: "https://www.vyrelio.fr/sitemap.xml",
  };
}
