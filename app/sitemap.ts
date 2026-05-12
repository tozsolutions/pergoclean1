import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { blogs } from "@/lib/blogs";

const BASE = siteConfig.url;
const now = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const blogEntries = blogs.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
    lastModified: now,
  }));

  const staticPages = [
    { url: BASE, priority: 1.0, changeFrequency: "weekly" as const, lastModified: now },
    { url: `${BASE}/blog`, priority: 0.8, changeFrequency: "weekly" as const, lastModified: now },
    { url: `${BASE}/avrupa-standartlari`, priority: 0.7, changeFrequency: "monthly" as const, lastModified: now },
    { url: `${BASE}/blog/premium-pergola-bakim-rehberi`, priority: 0.9, changeFrequency: "monthly" as const, lastModified: now },
  ];

  const servicePages = [
    "pergola-tente-temizligi",
    "zip-perde-temizligi",
    "bioclimatic-temizligi",
    "rollingroof-temizligi",
    "cam-tavan-temizligi"
  ].map(slug => ({
    url: `${BASE}/hizmetler/${slug}`,
    priority: 0.9,
    changeFrequency: "monthly" as const,
    lastModified: now,
  }));

  const districtPages = [
    "cankaya-pergola-temizligi",
    "yenimahalle-pergola-temizligi",
    "kecioren-tente-temizligi",
    "etimesgut-temizlik",
    "golbasi-temizlik",
    "umitkoy-pergola-temizligi",
    "cayyolu-premium-restorasyon"
  ].map(slug => ({
    url: `${BASE}/ankara/${slug}`,
    priority: 0.9,
    changeFrequency: "monthly" as const,
    lastModified: now,
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...districtPages,
    ...blogEntries,
  ];
}

