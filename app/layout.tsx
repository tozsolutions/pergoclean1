import "./globals.css";
import type { Metadata } from "next";
import { seoKeywords, siteConfig } from "@/lib/site";
import { buildFaqSchema } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "PergoClean | Pergola, Zip Perde, Cam Tavan ve Tente Temizliği Ankara",
    template: "%s | PergoClean"
  },
  description: siteConfig.description,
  keywords: seoKeywords,
  alternates: { canonical: "/" },
  openGraph: {
    title: "PergoClean | Profesyonel Pergola ve Tente Temizliği",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: "PergoClean",
    locale: "tr_TR",
    type: "website",
    images: [{ url: "/assets/logo.png", width: 1200, height: 630, alt: "PergoClean - Profesyonel Temizlik" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "PergoClean | Profesyonel Pergola ve Tente Temizliği",
    description: siteConfig.description,
    images: ["/assets/logo.png"]
  },
  robots: { index: true, follow: true },
  verification: {
    // google: "YOUR_GOOGLE_SEARCH_CONSOLE_TOKEN", // Vercel deploy sonrası eklenecek
  }
};

const siteFaqs = [
  { question: "Pergola, RollingRoof, BioClimatic ve Cam Tavan temizliği ne kadar sürer?", answer: "Çoğunlukla bir gün içinde tamamlanır. Söküm gerektirmez, mekanı minimum seviyede etkiler." },
  { question: "Zip perde temizliği nasıl yapılıyor?", answer: "Ray mekanizması ve fermuar bölgeleri için özel kimyasal ve basınçlı yıkama teknikleri kullanılır. Kumaşa zarar verilmeden derin temizlik yapılır." },
  { question: "Fiyatlandırma nasıl belirleniyor?", answer: "m², kirlilik seviyesi (ECO veya PLUS paketi) ve erişim durumuna göre hesaplanır. Web sitemizden anında fiyat hesaplayabilirsiniz." },
  { question: "Aynı gün hizmet veriyor musunuz?", answer: "Evet, planlı saha ekibimizle çoğu durumda aynı gün keşif ve uygulama gerçekleştirilir." },
  { question: "Hizmet alanınız neresi?", answer: "Ağırlıklı olarak Ankara (Çankaya, Yenimahalle, Keçiören, Etimesgut, Mamak) ve çevresi. Antalya için de hizmet verilmektedir." },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "PergoClean",
  image: `${siteConfig.url}/assets/logo.png`,
  url: siteConfig.url,
  telephone: "+90-536-773-14-04",
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Timko İş Merkezi, Macun Mahallesi 177. Cadde V8 Kat 1",
    addressLocality: "Yenimahalle",
    addressRegion: "Ankara",
    addressCountry: "TR",
    postalCode: "06370"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 39.9534,
    longitude: 32.7663
  },
  areaServed: [
    { "@type": "City", name: "Ankara" },
    { "@type": "City", name: "Antalya" }
  ],
  openingHours: "Mo-Sa 08:00-18:00",
  priceRange: "₺₺",
  sameAs: siteConfig.socials.map((item) => item.href),
  description: siteConfig.description
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const faqSchema = buildFaqSchema(siteFaqs);

  return (
    <html lang="tr">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

