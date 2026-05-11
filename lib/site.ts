export const siteConfig = {
  name: "PergoClean",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.pergoclean.com.tr",
  description:
    "Pergola, bioclimatic, rolling roof, cam tavan, zip perde ve tente sistemleri için Ankara ve Antalya odaklı profesyonel yerinde temizlik, LED yenileme ve bakım hizmetleri.",
  phonePrimary: "+90 536 773 14 04",
  phoneSecondary: "+90 530 955 00 28",
  email: "pergoclean@tozyapi.com.tr",
  address:
    "Timko İş Merkezi, Macun Mahallesi 177. Cadde V8 Kat 1, Yenimahalle / Ankara",
  socials: [
    { label: "LinkedIn", href: "https://linkedin.com/company/pergoclean" },
    { label: "Instagram", href: "https://instagram.com/pergoclean.tr" },
    { label: "TikTok", href: "https://tiktok.com/@pergoclean.tr" },
    { label: "Pinterest", href: "https://pinterest.com/pergocleantr" },
    { label: "YouTube", href: "https://youtube.com/@pergocleantr" },
    { label: "Facebook", href: "https://facebook.com/pergoclean.tr" },
    { label: "Twitter", href: "https://x.com/pergocleantr" }
  ]
};

export const pricing = {
  pergola: {
    eco: { base: 5000, perM2: 350, threshold: 15 },
    plus: { base: 7500, perM2: 450, threshold: 15 }
  },
  zip: {
    base: 2500, perM2: 250, threshold: 10
  },
  replacementRange: "50 m² için ortalama 70.000 TL – 90.000 TL"
};

export const seoKeywords = [
  "pergola temizliği ankara",
  "zip perde temizliği ankara",
  "cam tavan temizliği ankara",
  "bioclimatic pergola temizliği",
  "rolling roof temizliği",
  "tente temizliği ankara",
  "pergola temizliği antalya",
  "zip perde bakım ankara",
  "pergola led değişimi",
  "pergola kumaş temizliği"
];
