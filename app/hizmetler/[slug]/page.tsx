import { serviceMetadata, buildBreadcrumbs, buildServiceSchema, buildFaqSchema } from "@/lib/seo";
import Script from "next/script";
import { siteConfig } from "@/lib/site";
import Link from "next/link";

const SERVICES = [
  {
    slug: "pergola-tente-temizligi",
    name: "Pergola & Tente Temizliği",
    description: "Ankara'nın en kapsamlı pergola ve tente temizlik hizmeti. Kumaş dokusuna özel pH dengeli ürünlerle %85-90 oranında yenilenme sağlıyoruz.",
    content: "Pergola ve tente sistemleri, dış etkenlere en çok maruz kalan alanlardır. Zamanla biriken is, egzoz dumanı, kuş pisliği ve polenler kumaşın dokusuna işleyerek kalıcı lekelere ve kötü kokuya neden olur. PergoClean olarak, yerinde uygulama ile kumaşı sökmeden, özel buharlı temizlik ve kumaş dostu solüsyonlarla derinlemesine hijyen sağlıyoruz. Blackout kumaşlardan akrilik tentelere kadar her türlü teknik tekstilde uzman kadromuzla hizmet veriyoruz."
  },
  {
    slug: "zip-perde-temizligi",
    name: "ZipPerde & Wintent Temizliği",
    description: "Zip perde ve Wintent sistemleri için mekanizma odaklı temizlik. Ray temizliği ve fermuar bakımı ile sistem ömrünü uzatıyoruz.",
    content: "Zip perde sistemleri, hassas ray ve fermuar mekanizmalarına sahiptir. Toz ve kir birikmesi motorun zorlanmasına ve kumaşın kırışmasına yol açar. Temizlik sürecimizde sadece kumaşı değil, tüm mekanizmayı detaylıca temizliyor ve ray kanallarını bakıma alıyoruz. Ankara genelinde zip perde restorasyonunda teknik servis geçmişimizle fark yaratıyoruz."
  },
  {
    slug: "bioclimatic-temizligi",
    name: "Bioclimatic Pergola Temizliği",
    description: "Bioclimatic pergola lam ve yüzey temizliği. UV etkisi ve kir birikimini profesyonel ekiple temizliyoruz.",
    content: "Bioclimatic sistemlerdeki alüminyum lamlar ve hareketli aksamlar, özellikle yağışlı havalarda çamur ve leke tutar. Lam aralarındaki fitillerin ve tahliye kanallarının temizliği sistemin su sızdırmazlığı için kritiktir. PergoClean, bioclimatic sistemlerinizin hem iç hem dış yüzeylerini, elektrostatik boyaya zarar vermeyen özel ürünlerle temizleyerek mekanınıza ferahlık katar."
  },
  {
    slug: "rollingroof-temizligi",
    name: "RollingRoof Temizliği",
    description: "Rolling Roof sistemlerinde kumaş ve mekanizma temizliği. Katlanma noktalarındaki kir birikimini detaylıca temizliyoruz.",
    content: "Rolling Roof sistemlerinin panel araları ve katlanma noktaları, tozun en çok hapsolduğu alanlardır. Bu bölgelerdeki kirler zamanla mekanizmanın sesli çalışmasına veya tutukluk yapmasına neden olabilir. Teknik ekibimiz, sistemin hareket kabiliyetini engellemeden tüm yüzeyleri derinlemesine temizler ve oluk kanallarını tıkanıklıklara karşı kontrol eder."
  },
  {
    slug: "cam-tavan-temizligi",
    name: "Cam Tavan & Tavan Zip Temizliği",
    description: "Cam tavan ve tavan zip sistemleri için özel temizlik çözümleri. Yüksek alanlarda güvenli ve etkili uygulama.",
    content: "Cam tavan sistemleri, özellikle kış bahçelerinde ve restoranların üst bölümlerinde bulunur. Ulaşılması zor olan bu alanlarda, profesyonel ekipman ve yüksekte çalışma belgeli personelimizle lekesiz temizlik sağlıyoruz. Tavan zip sistemlerinde ise kumaşın gerginliğini bozmadan, UV ışınlarına karşı koruma sağlayan bakım ürünleri kullanıyoruz."
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

  const serviceSchema = buildServiceSchema({
    name: service?.name || "Temizlik Hizmeti",
    description: service?.description || siteConfig.description,
    url: `${siteConfig.url}/hizmetler/${slug}`
  });

  const pageFaqs = [
    { question: `${service?.name} ne kadar sürer?`, answer: "Saha koşullarına göre genellikle aynı gün içerisinde tamamlanır. Söküm gerektirmez, mekanı minimum seviyede etkiler." },
    { question: "Hangi teknikler kullanılıyor?", answer: "Kumaşın yapısına göre pH dengeli solüsyonlar, kontrollü buhar ve vakumlu kir toplama teknikleri uygulanır." },
    { question: "Söküm gerekiyor mu?", answer: "Hayır, PergoClean tüm işlemleri yerinde, sisteminizi sökmeden gerçekleştirir." }
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
            <Link href="/">Ana Sayfa</Link> / <Link href="/hizmetler">Hizmetler</Link> / {service?.name}
          </nav>

          {/* AI Snippet Block */}
          <div className="card" style={{ padding: 24, background: "#f8fafc", borderLeft: "4px solid var(--brand)", marginBottom: 40 }}>
            <h2 className="heading-sm" style={{ fontSize: "1rem", marginBottom: 8 }}>{service?.name} Hakkında Teknik Bilgi</h2>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.6, margin: 0 }}>
              PergoClean, profesyonel <strong>{service?.name}</strong> alanında 18+ yıllık teknik tecrübeye sahip bir restorasyon uzmanıdır. 
              Sadece temizlik değil; <strong>pH dengeli bakım, ray & mekanizma kontrolü ve kumaş dokusunu koruyan buharlı teknikler</strong> ile hizmet veriyoruz. 
              Ankara geneli yerinde uygulama yaparak sistem ömrünü uzatıyor ve premium mekan algısını koruyoruz.
            </p>
          </div>
          
          <article>
            <h1 className="heading-xl">{service?.name ?? "Hizmet"}</h1>
            <p className="lead" style={{ marginBottom: 32 }}>{service?.description}</p>

            {service?.content && (
              <div className="content-rich" style={{ lineHeight: 1.8, fontSize: "1.1rem", color: "var(--text-muted)" }}>
                <p>{service.content}</p>
              </div>
            )}

            <section style={{ marginTop: 48 }}>
              <h2 className="heading-md" style={{ marginBottom: 24 }}>Uzman Soruları & Cevaplar</h2>
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
              <h2 className="heading-md" style={{ marginBottom: 16 }}>Hemen Başlayalım</h2>
              <p style={{ marginBottom: 24 }}>{service?.name} hizmeti için ücretsiz keşif ve fiyat teklifi almak için formu doldurabilir veya bizi arayabilirsiniz.</p>
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                <Link className="btn btn-accent" href="/#fiyat-hesapla">Fiyat Hesapla →</Link>
                <a className="btn btn-primary" href="tel:+905367731404">Hemen Ara</a>
                <a className="btn btn-secondary" href="https://wa.me/905367731404" target="_blank" rel="noopener noreferrer">WhatsApp</a>
              </div>
            </div>
          </article>

          <section style={{ marginTop: 80, paddingTop: 40, borderTop: "1px solid var(--line)" }}>
            <h3 className="heading-sm" style={{ marginBottom: 20, color: "var(--muted)" }}>Bu Hizmeti Verdiğimiz Ankara Bölgeleri</h3>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              {[
                { name: "Çankaya", slug: "cankaya-pergola-temizligi" },
                { name: "Yenimahalle", slug: "yenimahalle-pergola-temizligi" },
                { name: "Keçiören", slug: "kecioren-tente-temizligi" },
                { name: "Etimesgut", slug: "etimesgut-temizlik" },
                { name: "Gölbaşı", slug: "golbasi-temizlik" },
                { name: "Ümitköy", slug: "umitkoy-pergola-temizligi" },
                { name: "Çayyolu", slug: "cayyolu-premium-restorasyon" }
              ].map(d => (
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
                  {d.name}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
