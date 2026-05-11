import { serviceMetadata, buildBreadcrumbs } from "@/lib/seo";
import Script from "next/script";
import { siteConfig } from "@/lib/site";
import Link from "next/link";

const SERVICES = [
  {
    slug: "pergola-tente-temizligi",
    name: "Pergola / Tente Temizliği",
    description: "Ankara'da pergola ve tente kumaşları için profesyonel yerinde temizlik. ECO ve PLUS paketleri ile söküm gerektirmeden %85-90 yenilenme. Aynı gün hizmet.",
  },
  {
    slug: "zip-perde-temizligi",
    name: "ZipPerde / Wintent Temizliği",
    description: "Zip perde ve Wintent sistemleri için özel ray ve fermuar bölge temizliği. Ankara'da profesyonel yerinde bakım.",
  },
  {
    slug: "bioclimatic-temizligi",
    name: "Bioclimatic Pergola Temizliği",
    description: "Bioclimatic pergola lam ve yüzey temizliği. UV etkisi, yağ ve kir birikimini Ankara'da profesyonel ekiple temizliyoruz.",
  },
  {
    slug: "rollingroof-temizligi",
    name: "RollingRoof Temizliği",
    description: "Rolling Roof sistemlerinde kumaş ve mekanizma temizliği. Ankara'da profesyonel yerinde uygulama.",
  },
  {
    slug: "cam-tavan-temizligi",
    name: "Cam Tavan / Tavan Zip Temizliği",
    description: "Cam tavan ve tavan zip sistemleri için özel temizlik. Keşif sonrası fiyat verilmektedir.",
  },
];

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return { title: "Hizmet | PergoClean" };
  return serviceMetadata({ serviceName: service.name, description: service.description, slug });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  const breadcrumbSchema = buildBreadcrumbs([
    { name: "Hizmetler", url: `${siteConfig.url}/hizmetler` },
    { name: service?.name ?? "Hizmet", url: `${siteConfig.url}/hizmetler/${slug}` },
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
            <Link href="/">Ana Sayfa</Link> / <Link href="/hizmetler">Hizmetler</Link> / {service?.name}
          </nav>
          <h1 className="heading-xl">{service?.name ?? "Hizmet"}</h1>
          <p className="lead">{service?.description}</p>
          <div style={{ marginTop: 32, padding: 24, background: "rgba(19,179,163,.06)", borderRadius: 20, border: "1px solid rgba(19,179,163,.2)" }}>
            <p style={{ fontWeight: 600, marginBottom: 16 }}>Bu sayfa için içerik hazırlanıyor. Hemen teklif almak için:</p>
            <a className="btn btn-accent" href="/#fiyat-hesapla">Fiyat Hesapla →</a>
            <a className="btn btn-secondary" href="https://wa.me/905367731404" target="_blank" rel="noopener noreferrer" style={{ marginLeft: 12 }}>WhatsApp</a>
          </div>
        </div>
      </main>
    </>
  );
}
