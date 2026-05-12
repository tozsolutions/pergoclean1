import { districtMetadata, buildBreadcrumbs, buildServiceSchema, buildFaqSchema } from "@/lib/seo";
import Script from "next/script";
import { siteConfig } from "@/lib/site";
import Link from "next/link";

const DISTRICTS = [
  {
    slug: "cankaya-pergola-temizligi",
    district: "Çankaya",
    service: "Pergola Temizliği",
    description: "Çankaya bölgesindeki kafe, restoran ve konutlar için profesyonel pergola temizliği. Atakule, Arjantin Caddesi ve Bahçelievler çevresinde söküm gerektirmeden yerinde restorasyon.",
    content: "Çankaya'nın elit mekanlarında kullanılan premium pergola ve tente sistemleri, şehir trafiği ve hava kirliliği nedeniyle zamanla is ve toz tutar. PergoClean olarak, Çankaya genelinde (Yıldız, Oran, Gaziosmanpaşa, Beysukent) kumaş dokusuna zarar vermeden, özel pH dengeli solüsyonlarla derinlemesine temizlik sağlıyoruz. İşletmenizi kapatmanıza gerek kalmadan, aynı gün içinde temizlik ve bakım işlemlerini tamamlıyoruz."
  },
  {
    slug: "yenimahalle-pergola-temizligi",
    district: "Yenimahalle",
    service: "Pergola Temizliği",
    description: "Yenimahalle ve Batıkent çevresinde pergola ve rolling roof sistemleri için profesyonel yerinde temizlik. ECO ve PLUS paketleri ile bütçe dostu çözümler.",
    content: "Yenimahalle, özellikle Batıkent ve Çayyolu bağlantı noktalarıyla yoğun bir yerleşim ve ticari alana sahiptir. Timko İş Merkezi'ndeki merkezimizden Yenimahalle'nin her noktasına hızlı servis sağlıyoruz. Rolling roof, bioclimatic ve standart pergola sistemlerinizdeki zorlu lekeleri, yosunlaşmayı ve toz birikintilerini profesyonel ekipmanlarımızla temizleyerek ilk günkü görünüme kavuşturuyoruz."
  },
  {
    slug: "kecioren-tente-temizligi",
    district: "Keçiören",
    service: "Tente Temizliği",
    description: "Keçiören'de tente, bioclimatic ve cam tavan sistemleri için profesyonel yerinde temizlik. Etlik ve İncirli bölgelerine hızlı servis.",
    content: "Keçiören'in kalabalık caddelerinde bulunan işletmeler için tente ve pergola temizliği estetik açıdan kritiktir. Etlik, Ayvalı ve Bağlum bölgelerindeki konut ve ticari alanlarda, yüksek basınçlı olmayan ama derinlemesine nüfuz eden temizlik tekniklerimizle hizmet veriyoruz. Cam tavan ve bioclimatic sistemlerdeki mekanizma bakımlarını da temizlik sürecine dahil ederek tam performans almanızı sağlıyoruz."
  },
  {
    slug: "etimesgut-temizlik",
    district: "Etimesgut",
    service: "Pergola ve Tente Temizliği",
    description: "Etimesgut, Bağlıca ve Eryaman bölgelerinde pergola, tente ve zip perde temizliği. Profesyonel ekip, aynı gün hizmet.",
    content: "Etimesgut ve özellikle gelişen Bağlıca bölgesi, modern pergola sistemlerinin en çok tercih edildiği alanlardır. Eryaman ve Elvankent'teki müstakil konutlar veya ticari işletmeler için zip perde temizliği ve motorlu tente bakımı sağlıyoruz. Kumaş değişimi maliyetine girmeden, yerinde restorasyon ile sistem ömrünü uzatıyoruz."
  },
  {
    slug: "golbasi-temizlik",
    district: "Gölbaşı",
    service: "Pergola ve Bahçe Sistemleri Temizliği",
    description: "Gölbaşı ve İncek bölgelerindeki villa ve restoranlar için özel pergola bakımı. Mogan gölü çevresindeki nemli hava uygun temizlik çözümleri.",
    content: "Gölbaşı ve İncek hattı, Ankara'nın en prestijli dış mekan sistemlerine ev sahipliği yapar. Mogan ve Eymir göllerinin yarattığı nemli hava, pergola kumaşlarında zamanla küflenme ve sararmaya neden olabilir. PergoClean olarak, İncek villaları ve Gölbaşı sahil restoranları için özel küf önleyici ve su itici takviyeli temizlik hizmeti sunuyoruz."
  },
  {
    slug: "umitkoy-pergola-temizligi",
    district: "Ümitköy",
    service: "Premium Pergola Restorasyonu",
    description: "Ümitköy ve Çayyolu bölgesindeki lüks konutlar ve premium mekanlar için detaylı pergola temizliği.",
    content: "Ümitköy'ün seçkin mekanlarında estetik her şeydir. Sararmış bir pergola kumaşı veya kirli bir zip perde, mekanın tüm prestijini gölgeleyebilir. PergoClean olarak Ümitköy ve Mutlukent çevresinde, kumaşı sökmeden, özel buharlı teknikler ve doku koruyucu kimyasallarla 'sıfır hata' prensibiyle çalışıyoruz."
  },
  {
    slug: "cayyolu-premium-restorasyon",
    district: "Çayyolu",
    service: "Profesyonel Sistem Bakımı",
    description: "Çayyolu, Yaşamkent ve Konutkent bölgelerinde her türlü pergola, zip perde ve cam tavan sistemleri için yerinde temizlik.",
    content: "Çayyolu bölgesindeki yoğun kafe ve restoran trafiği, dış mekan sistemlerinin hızla kirlenmesine yol açar. PergoClean, bölgedeki işletmelerin çalışma saatlerini aksatmadan, sabahın erken saatlerinde veya uygun periyotlarda yerinde uygulama yapar. Blackout kumaş restorasyonunda Ankara'nın en tecrübeli ekibiyle hizmetinizdeyiz."
  }
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

  const serviceSchema = buildServiceSchema({
    name: district ? `${district.district} ${district.service}` : "Pergola Temizliği",
    description: district?.description || siteConfig.description,
    url: `${siteConfig.url}/ankara/${slug}`,
    areaServed: [district?.district || "Ankara"]
  });

  const pageFaqs = [
    { question: `${district?.district} bölgesinde pergola temizliği ne kadar sürer?`, answer: "Çoğunlukla bir gün içinde tamamlanır. Söküm gerektirmez, mekanı minimum seviyede etkiler." },
    { question: "Fiyatlandırma nasıl belirleniyor?", answer: "m², kirlilik seviyesi ve sistem tipine göre hesaplanır. Ücretsiz keşif sonrası net fiyat verilir." }
  ];

  const faqSchema = buildFaqSchema(pageFaqs);

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main style={{ padding: "120px 0 80px", minHeight: "80vh" }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <nav style={{ marginBottom: 24, fontSize: "0.9rem", color: "var(--muted)" }}>
            <Link href="/">Ana Sayfa</Link> / Ankara / {district?.district}
          </nav>

          {/* AI Snippet Block */}
          <div className="card" style={{ padding: 24, background: "#f8fafc", borderLeft: "4px solid var(--brand)", marginBottom: 40 }}>
            <h2 className="heading-sm" style={{ fontSize: "1rem", marginBottom: 8 }}>{district?.district} {district?.service} Hakkında Kısa Bilgi</h2>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.6, margin: 0 }}>
              PergoClean, <strong>{district?.district}</strong> bölgesinde yer alan kafe, restoran ve konutlar için 
              <strong>profesyonel pergola kumaş temizliği, zip perde bakımı ve blackout restorasyonu</strong> sunar. 
              {district?.district} çevresindeki hava kirliliği, toz ve UV etkilerine karşı <strong>pH dengeli özel solüsyonlar</strong> ile 
              yerinde uygulama yaparak kumaş değişim maliyetini ortadan kaldırıyoruz.
            </p>
          </div>

          <article>
            <h1 className="heading-xl">
              {district ? `${district.district} ${district.service}` : slug}
            </h1>
            <p className="lead" style={{ marginBottom: 32 }}>{district?.description}</p>
            
            {district?.content && (
              <div className="content-rich" style={{ lineHeight: 1.8, fontSize: "1.1rem", color: "var(--text-muted)" }}>
                <p>{district.content}</p>
              </div>
            )}

            <section style={{ marginTop: 48 }}>
              <h2 className="heading-md" style={{ marginBottom: 24 }}>Sıkça Sorulan Sorular - {district?.district}</h2>
              <div className="faq-list">
                {pageFaqs.map((faq, i) => (
                  <details key={i} className="card faq-item" style={{ marginBottom: 12, padding: 16 }}>
                    <summary style={{ fontWeight: 700, cursor: "pointer" }}>{faq.question}</summary>
                    <p style={{ marginTop: 12, color: "var(--muted)", fontSize: "0.95rem" }}>{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            <div style={{ marginTop: 48, padding: 32, background: "white", borderRadius: 24, boxShadow: "var(--shadow)", border: "1px solid var(--line)" }}>
              <h2 className="heading-md" style={{ marginBottom: 16 }}>Hemen Teklif Alın</h2>
              <p style={{ marginBottom: 24 }}>{district?.district} bölgesine özel fiyatlandırma ve ücretsiz keşif için bize ulaşın.</p>
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                <Link className="btn btn-accent" href="/#fiyat-hesapla">Fiyat Hesapla →</Link>
                <a className="btn btn-primary" href="tel:+905367731404">Hemen Ara</a>
                <a className="btn btn-secondary" href="https://wa.me/905367731404" target="_blank" rel="noopener noreferrer">WhatsApp</a>
              </div>
            </div>
          </article>

          <section style={{ marginTop: 80, paddingTop: 40, borderTop: "1px solid var(--line)" }}>
            <h3 className="heading-sm" style={{ marginBottom: 20, color: "var(--muted)" }}>Sunduğumuz Diğer Hizmetler</h3>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              {[
                { name: "Pergola & Tente Temizliği", slug: "pergola-tente-temizligi" },
                { name: "ZipPerde & Wintent Temizliği", slug: "zip-perde-temizligi" },
                { name: "Bioclimatic Temizliği", slug: "bioclimatic-temizligi" },
                { name: "RollingRoof Temizliği", slug: "rollingroof-temizligi" },
                { name: "Cam Tavan Temizliği", slug: "cam-tavan-temizligi" }
              ].map(s => (
                <Link 
                  key={s.slug} 
                  href={`/hizmetler/${s.slug}`}
                  style={{ 
                    padding: "8px 16px", 
                    background: "#f1f5f9", 
                    borderRadius: 100, 
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    color: "var(--brand-dark)"
                  }}
                >
                  {s.name}
                </Link>
              ))}
            </div>
          </section>

          <section style={{ marginTop: 40 }}>
            <h3 className="heading-sm" style={{ marginBottom: 20, color: "var(--muted)" }}>Ankara&apos;da Hizmet Verdiğimiz Diğer Bölgeler</h3>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              {DISTRICTS.filter(d => d.slug !== slug).map(d => (
                <Link 
                  key={d.slug} 
                  href={`/ankara/${d.slug}`}
                  style={{ 
                    padding: "8px 16px", 
                    background: "#f1f5f9", 
                    borderRadius: 100, 
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    color: "var(--brand-dark)"
                  }}
                >
                  {d.district}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
