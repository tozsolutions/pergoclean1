import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

const BASE = siteConfig.url;
const now = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Core pages
    { url: BASE, priority: 1.0, changeFrequency: "weekly", lastModified: now },
    { url: `${BASE}/blog`, priority: 0.8, changeFrequency: "weekly", lastModified: now },
    { url: `${BASE}/avrupa-standartlari`, priority: 0.7, changeFrequency: "monthly", lastModified: now },

    // Hizmet sayfaları (skeleton — içerik gelince priority artacak)
    { url: `${BASE}/hizmetler/pergola-tente-temizligi`, priority: 0.9, changeFrequency: "monthly", lastModified: now },
    { url: `${BASE}/hizmetler/zip-perde-temizligi`, priority: 0.9, changeFrequency: "monthly", lastModified: now },
    { url: `${BASE}/hizmetler/bioclimatic-temizligi`, priority: 0.8, changeFrequency: "monthly", lastModified: now },
    { url: `${BASE}/hizmetler/rollingroof-temizligi`, priority: 0.8, changeFrequency: "monthly", lastModified: now },
    { url: `${BASE}/hizmetler/cam-tavan-temizligi`, priority: 0.8, changeFrequency: "monthly", lastModified: now },

    // İlçe landing pages (skeleton)
    { url: `${BASE}/ankara/cankaya-pergola-temizligi`, priority: 0.9, changeFrequency: "monthly", lastModified: now },
    { url: `${BASE}/ankara/yenimahalle-pergola-temizligi`, priority: 0.9, changeFrequency: "monthly", lastModified: now },
    { url: `${BASE}/ankara/kecioren-tente-temizligi`, priority: 0.8, changeFrequency: "monthly", lastModified: now },
    { url: `${BASE}/ankara/etimesgut-temizlik`, priority: 0.7, changeFrequency: "monthly", lastModified: now },
  ];
}

