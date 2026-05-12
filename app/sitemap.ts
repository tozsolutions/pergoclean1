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
    { url: `${BASE}/ankara/yasamkent-pergola-temizligi`, priority: 0.8, changeFrequency: "monthly", lastModified: now },
    { url: `${BASE}/ankara/umitkoy-pergola-temizligi`, priority: 0.8, changeFrequency: "monthly", lastModified: now },
    { url: `${BASE}/ankara/bilkent-tente-bakimi`, priority: 0.8, changeFrequency: "monthly", lastModified: now },
    { url: `${BASE}/ankara/incek-pergola-temizligi`, priority: 0.8, changeFrequency: "monthly", lastModified: now },
    { url: `${BASE}/ankara/golbasi-temizlik`, priority: 0.7, changeFrequency: "monthly", lastModified: now },
    { url: `${BASE}/ankara/batikent-tente-temizligi`, priority: 0.7, changeFrequency: "monthly", lastModified: now },
    { url: `${BASE}/ankara/eryaman-pergola-bakimi`, priority: 0.7, changeFrequency: "monthly", lastModified: now },
    { url: `${BASE}/ankara/oran-pergola-temizligi`, priority: 0.7, changeFrequency: "monthly", lastModified: now },
    { url: `${BASE}/ankara/kizilay-tente-temizligi`, priority: 0.7, changeFrequency: "monthly", lastModified: now },
    { url: `${BASE}/ankara/sincan-pergola-temizligi`, priority: 0.7, changeFrequency: "monthly", lastModified: now },
    { url: `${BASE}/ankara/pursaklar-tente-bakimi`, priority: 0.7, changeFrequency: "monthly", lastModified: now },
    { url: `${BASE}/ankara/mamak-zip-perde-temizligi`, priority: 0.7, changeFrequency: "monthly", lastModified: now },
    { url: `${BASE}/ankara/dikmen-pergola-bakim`, priority: 0.7, changeFrequency: "monthly", lastModified: now },
    { url: `${BASE}/ankara/balgat-mekan-temizligi`, priority: 0.7, changeFrequency: "monthly", lastModified: now },
    { url: `${BASE}/ankara/ostim-sanayi-pergola-temizlik`, priority: 0.7, changeFrequency: "monthly", lastModified: now },
    { url: `${BASE}/ankara/cayyolu-premium-restorasyon`, priority: 0.7, changeFrequency: "monthly", lastModified: now },
    { url: `${BASE}/blog/premium-pergola-bakim-rehberi`, priority: 0.9, changeFrequency: "monthly", lastModified: now },
  ];
}

