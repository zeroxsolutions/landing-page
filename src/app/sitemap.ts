import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://zeroxsolutions.com";

  return [
    {
      url: base,
      lastModified: "2025-03-01",
      changeFrequency: "weekly",
      priority: 1,
    },
    ...routing.locales.map((locale) => ({
      url: `${base}/${locale}`,
      lastModified: "2025-03-01",
      changeFrequency: "weekly" as const,
      priority: locale === routing.defaultLocale ? 0.9 : 0.8,
    })),
  ];
}
