import { districtMetadata, buildBreadcrumbs } from "@/lib/seo";
import Script from "next/script";
import { siteConfig } from "@/lib/site";
import Link from "next/link";

const DISTRICTS = [
  {
    slug: "cankaya-pergola-temizligi",
    district: "Çankaya",
    service: "Pergola Temizliği",
    description: "Çankaya'da pergola, tente ve zip perde sistemleri için profesyonel yerinde temizlik. Söküm yok, aynı gün hizmet.",
  },
  {
    slug: "yenimahalle-pergola-temizligi",
    district: "Yenimahalle",
    service: "Pergola Temizliği",
    description: "Yenimahalle'de pergola ve rolling roof sistemleri için profesyonel yerinde temizlik. ECO ve PLUS paketleri.",
  },
  {
    slug: "kecioren-tente-temizligi",
    district: "Keçiören",
    service: "Tente Temizliği",
    description: "Keçiören'de tente, bioclimatic ve cam tavan sistemleri için profesyonel yerinde temizlik.",
  },
  {
    slug: "etimesgut-temizlik",
    district: "Etimesgut",
    service: "Pergola ve Tente Temizliği",
    description: "Etimesgut'ta pergola, tente ve zip perde temizliği. Profesyonel ekip, aynı gün hizmet.",
  },
];

export function generateStaticParams() {
  return DISTRICTS.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const district = DISTRICTS.find((d) => d.slug === slug);
  if (!district) return { title: "Bölge Hizmeti | PergoClean" };
  return districtMetadata({ district: district.district, service: district.service, slug, description: district.description });
}

export default async function DistrictPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const district = DISTRICTS.find((d) => d.slug === slug);

  const breadcrumbSchema = buildBreadcrumbs([
    { name: "Ankara", url: `${siteConfig.url}/ankara` },
    { name: district ? `${district.district} ${district.service}` : slug, url: `${siteConfig.url}/ankara/${slug}` },
  ]);

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main style={{ padding: "120px 0 80px", minHeight: "80vh" }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <nav style={{ marginBottom: 24, fontSize: "0.9rem", color: "var(--muted)" }}>
            <Link href="/">Ana Sayfa</Link> / Ankara / {district?.district}
          </nav>
          <h1 className="heading-xl">
            {district ? `${district.district} ${district.service}` : slug}
          </h1>
          <p className="lead">{district?.description}</p>
          <div style={{ marginTop: 32, padding: 24, background: "rgba(19,179,163,.06)", borderRadius: 20, border: "1px solid rgba(19,179,163,.2)" }}>
            <p style={{ fontWeight: 600, marginBottom: 16 }}>Bu bölge için içerik hazırlanıyor. Hemen teklif almak için:</p>
            <a className="btn btn-accent" href="/#fiyat-hesapla">Fiyat Hesapla →</a>
            <a className="btn btn-secondary" href="https://wa.me/905367731404" target="_blank" rel="noopener noreferrer" style={{ marginLeft: 12 }}>WhatsApp</a>
          </div>
        </div>
      </main>
    </>
  );
}
