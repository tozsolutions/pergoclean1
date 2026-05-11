import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FloatingContact } from "@/components/floating-contact";
import { LeadForm } from "@/components/lead-form";
import { PricingCalculator } from "@/components/pricing-calculator";
import { siteConfig } from "@/lib/site";
import Image from "next/image";
import Script from "next/script";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "PergoClean",
  "description": "Pergola, bioclimatic, rolling roof, cam tavan, zip perde ve tente sistemleri için profesyonel yerinde temizlik ve bakım hizmetleri.",
  "url": "https://www.pergoclean.com.tr",
  "telephone": "+90-536-773-14-04",
  "email": "pergoclean@tozyapi.com.tr",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Macun Mahallesi 177. Cadde V8 Kat 1",
    "addressLocality": "Yenimahalle",
    "addressRegion": "Ankara",
    "addressCountry": "TR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 39.9534,
    "longitude": 32.7663
  },
  "sameAs": [
    "https://www.instagram.com/pergoclean.tr",
    "https://www.youtube.com/@PergoClean",
    "https://x.com/PergoClean"
  ],
  "openingHours": "Mo-Sa 08:00-18:00",
  "priceRange": "₺₺"
};

const services = [
  { title: "Derin Temizlik", text: "Pergola RollingRoof BioClimatic CamTavan ZipPerde Tente kumaşlarınızdaki kir, yağ, duman ve buharlaşma kaynaklı atıkları profesyonel ekipmanlarla temizliyoruz." },
  { title: "ZipPerde Temizlik & Bakım", text: "Zip perde sistemleri için özel temizlik ve bakım uyguluyor, ray mekanizması ve fermuar bölgelerini güvenli biçimde temizliyoruz." },
  { title: "LED Bakım & Değişim", text: "Eskimiş veya hasar görmüş LED sistemlerini kayıt altına alınan süreçlerle değiştiriyor, şeffaf ve güvenilir teslim sağlıyoruz." },
  { title: "Renk Yenileme", text: "LED ışık renklendirme ve yüzey görünüm yenileme ile pergola ve tente sistemlerinize daha estetik bir görünüm kazandırıyoruz." }
];

const compareItems = [
  { title: "Pergola Kumaş Temizliği", category: "Derin Temizlik" },
  { title: "LED Işık Değişimi", category: "LED Bakım" },
  { title: "Tente Kumaş Temizleme", category: "Renk Yenileme" }
];

const projects = [
  { title: "Roof Temizliği", meta: "11-15" },
  { title: "Keçiören Restoran Gerdirme Tente Bakımı", meta: "Keçiören, Ankara · 2024-10-22" },
  { title: "Yenimahalle Cafe Hareketli Cam Tavan Temizlik", meta: "Yenimahalle, Ankara · 2024-09-18" },
  { title: "Etimesgut Otel Kasetli Tente Bakımı", meta: "Etimesgut, Ankara · 2024-08-10" }
];

const blogPosts = [
  "Pergola Temizliği Ne Sıklıkla Yapılmalı?",
  "RollingRoof Sistemlerinde Kış Hazırlığı",
  "Bioclimatic Pergolalar: Temizlik ve Bakım Rehberi",
  "Cam Tavan Sistemlerinde Küf ve Yoğun Lekeler",
  "ZipPerde Sistemlerinde Güneş Işığı ve UV Koruması",
  "Kasetli Tente Motor Bakımı ve Uzaktan Kumanda Sorunları"
];

const faqs = [
  ["Pergola RollingRoof BioClimatic CamTavan ZipPerde Tente temizliği ne kadar sürer?", "Saha koşullarına göre çoğunlukla bir gün içinde tamamlanır. Söküm gerektirmez, mekan çalışmasını minimum seviyede etkiler."],
  ["Hangi tür kumaşları temizliyorsunuz?", "Pergola, zip perde, rolling roof, tente ve birçok teknik dış mekan kumaşında çalışıyoruz."],
  ["Fiyatlandırma nasıl yapılıyor?", "m², kirlilik seviyesi, erişim zorluğu ve ek LED / bakım ihtiyacına göre netleştiriliyor."],
  ["LED değişimi de yapıyor musunuz?", "Evet. Arızalı veya eskimiş LED sistemleri için değişim ve renklendirme hizmeti veriyoruz."],
  ["Randevu nasıl alabilirim?", "WhatsApp, telefon ya da form aracılığıyla keşif ve fiyatlama sürecini başlatabilirsiniz."],
  ["Temizlik sonrası garanti var mı?", "Uygulanan işleme göre bakım önerisi ve kayıtlı süreç teslim ediyoruz."],
  ["ZipPerde sistemlerinde özel bir temizlik yöntemi uyguluyor musunuz?", "Evet. Zip perde sistemlerinde ray mekanizması ve fermuar bölgeleri için özel kimyasal ve basınçlı yıkama teknikleri kullanıyoruz. Kumaşa zarar vermeden derin temizlik yapıyoruz."],
  ["ZipPerde rayları ve mekanizmaları bakımı yapılıyor mu?", "Evet, fermuar dişlileri, ray kanalları ve hareket mekanizması kontrolü dahildir. Gerekirse yağlama ve ayar da yapılır."]
];

export default function HomePage() {
  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <SiteHeader />
      <main>
        <section className="hero">
          <div className="hero-bg">
            <Image
              src="/assets/hero1.jpeg"
              alt="Pergola RollingRoof BioClimatic Temizlik"
              fill
              className="hero-bg-image"
              priority
              sizes="100vw"
              style={{ objectFit: "cover" }}
            />
            <div className="hero-overlay"></div>
          </div>
          <div className="container hero-content">
            <span className="eyebrow">Profesyonel Yerinde Temizlik</span>
            <h1 className="heading-xl">
              Pergola RollingRoof BioClimatic
              <br />
              ZipPerde Tente
              <br />
              <span className="hero-italic">Profesyonel Temizlik</span>
            </h1>
            <p className="lead" style={{ color: "rgba(255,255,255,.92)" }}>
              Pergola RollingRoof BioClimatic ZipPerde ve Tentelerinizde %85-90
              oranında ilk günkü temizliğine ve hijyenik yeni görünümüne kavuşturuyoruz.
              Minimum maliyet, maksimum sonuç.
            </p>

            <div className="btn-row" style={{ marginTop: 26 }}>
              <a className="btn btn-secondary" href="#fiyat-hesapla">Ücretsiz Fiyat Teklifi Al</a>
              <a className="btn btn-primary" href="https://wa.me/905367731404" target="_blank">
                WhatsApp&apos;tan Ulaş
              </a>
            </div>

              <div className="hero-stats">
                <div className="stat-box"><strong>500+</strong><span>Mutlu Müşteri</span></div>
                <div className="stat-box"><strong>2000+</strong><span>Uygulama Tecrübesi</span></div>
                <div className="stat-box"><strong>%95+</strong><span>Memnuniyet Oranı</span></div>
              </div>
          </div>
        </section>

        <section id="hakkimizda" className="dark-hero" style={{ padding: "120px 0", textAlign: "center" }}>
          <div className="container">
            <div className="section-title-wrap" style={{ margin: "0 auto", maxWidth: 900 }}>
              <span className="eyebrow" style={{ background: "rgba(255,255,255,0.1)", color: "#ffb11a", marginBottom: 20 }}>Marka Pozisyonu</span>
              <h2 className="heading-xl text-gradient" style={{ marginBottom: 30 }}>Pergole kumaşınızı değiştirmeyin.<br/>Yerinde profesyonel temizlik ile yenileyin.</h2>
              <p className="lead" style={{ color: "rgba(255,255,255,0.9)", fontSize: "1.2rem", margin: "0 auto" }}>
                En büyük kozumuz net: kumaş değişiminde söküm + yeni kumaş + montaj maliyeti oluşur,
                <strong> 50 m² için ortalama 70.000 – 90.000 TL bandına çıkılır</strong> ve mekan çoğu zaman 3 gün boyunca açık kalır ya da verimsiz çalışır.
              </p>
              <p className="lead" style={{ color: "var(--brand)", fontSize: "1.3rem", fontWeight: 700, margin: "20px auto 40px" }}>
                PergoClean ise söküm gerektirmeden, iş kaybını azaltarak, aynı gün uygulama mantığıyla hareket eder.
              </p>
            </div>

            <div className="grid kpi-grid">
              <div className="luxury-card card" style={{ padding: 32 }}><h3 className="heading-md" style={{ color: "#ffb11a" }}>%70-80 Tasarruf</h3><p style={{ color: "rgba(255,255,255,0.7)", margin: 0 }}>Değişim yerine yerinde temizlik ile ekonomik çözüm.</p></div>
              <div className="luxury-card card" style={{ padding: 32 }}><h3 className="heading-md" style={{ color: "#ffb11a" }}>Söküm Yok</h3><p style={{ color: "rgba(255,255,255,0.7)", margin: 0 }}>Mekan üstü açık kalmaz, ekstra operasyon yükü oluşmaz.</p></div>
              <div className="luxury-card card" style={{ padding: 32 }}><h3 className="heading-md" style={{ color: "#ffb11a" }}>Aynı Gün İşlem</h3><p style={{ color: "rgba(255,255,255,0.7)", margin: 0 }}>Planlı saha ekibiyle hızlı keşif ve kısa uygulama süresi.</p></div>
              <div className="luxury-card card" style={{ padding: 32 }}><h3 className="heading-md" style={{ color: "#ffb11a" }}>%80-90 Yenilenme</h3><p style={{ color: "rgba(255,255,255,0.7)", margin: 0 }}>Teknik kumaşlarda ilk günkü görünüme yakın güçlü sonuç.</p></div>
            </div>

            <div className="notice luxury-card" style={{ marginTop: 40, border: "1px solid rgba(239,68,68,0.4)", color: "#fca5a5", fontSize: "1.1rem" }}>
              Kumaş değişimi genellikle mekanın 1 gün söküm, 1 gün kumaş işlemi, 1 gün tekrar montaj nedeniyle toplam <strong>3 gün verimsiz kalmasına</strong> yol açar. Bu, özellikle restoran, kafe ve otel işletmelerinde doğrudan ciro kaybı demektir.
            </div>
          </div>
        </section>

        <section id="hizmetler" className="section">
          <div className="container">
            <div className="section-title-wrap">
              <span className="eyebrow">Hizmetlerimiz</span>
              <h2 className="heading-lg">Neler Yapıyoruz?</h2>
            </div>

            <div className="grid service-grid">
              {services.map((service) => (
                <article key={service.title} className="card service-card">
                  <span className="badge" style={{ background: "rgba(19,179,163,.12)", color: "#0b857d" }}>Uzman Hizmet</span>
                  <h3 className="heading-md" style={{ marginTop: 18 }}>{service.title}</h3>
                  <p>{service.text}</p>
                  <a href="#iletisim" style={{ fontWeight: 700, color: "#0b857d" }}>Detaylı Bilgi →</a>
                </article>
              ))}
            </div>

            <div className="card value-block">
              <h3 className="heading-md" style={{ color: "white" }}>Neden PergoClean?</h3>
              <div className="grid value-list">
                <div className="value-item"><div>✓</div><div><strong>%70-80 Tasarruf</strong><span>Değiştirme yerine temizlik ile ekonomik çözüm</span></div></div>
                <div className="value-item"><div>✓</div><div><strong>Özel Kimyasal</strong><span>PVC kaplı polyester teknik kumaşlara özel profesyonel uygulama</span></div></div>
                <div className="value-item"><div>✓</div><div><strong>Yağ, İs, Duman Temizliği</strong><span>Kumaşınızı ilk günkü haline yaklaştırıyoruz</span></div></div>
                <div className="value-item"><div>✓</div><div><strong>Yapı Koruması</strong><span>Tüm işlemler yerinde yapılır, yapı korunur</span></div></div>
              </div>
            </div>

            <div className="card" style={{ marginTop: 28, padding: "32px", background: "linear-gradient(135deg, rgba(99,102,241,.06), rgba(99,102,241,.12))", border: "1px solid rgba(99,102,241,.2)" }}>
              <div style={{ display: "flex", gap: 24, flexWrap: "wrap", alignItems: "flex-start" }}>
                <div style={{ flex: "0 0 auto", fontSize: "3rem" }}>🪟</div>
                <div style={{ flex: 1, minWidth: 220 }}>
                  <span className="badge" style={{ background: "rgba(99,102,241,.15)", color: "#4338ca", marginBottom: 12 }}>ZipPerde Nedir?</span>
                  <h3 className="heading-md" style={{ marginBottom: 10 }}>ZipPerde Sistemi Ne İşe Yarar?</h3>
                  <p style={{ color: "var(--muted)", lineHeight: 1.75, marginBottom: 12 }}>
                    ZipPerde, özel fermuar rayları sayesinde rüzgar ve yağmura karşı mükemmel sızdırmazlık sağlayan modern cam yüzey alternatifleridir.
                    Güneş, rüzgar ve yağışa karşı tam koruma sunarken terası veya açık alanı dört mevsim kullanılabilir hale getirir.
                  </p>
                  <p style={{ color: "var(--muted)", lineHeight: 1.75 }}>
                    Zamanla biriken kir, toz ve UV etkisiyle küflenen zip perde kumaşları için <strong>PergoClean&apos;in özel yerinde temizlik servisi</strong> ile
                    kumaşı sökmeden, mekanı kapatmadan %85-90 oranında ilk günkü berraklığına kavuşturabilirsiniz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="dark-hero" style={{ padding: "80px 0" }}>
          <div className="container">
            <div className="section-title-wrap" style={{ textAlign: "center", margin: "0 auto 40px" }}>
              <span className="eyebrow" style={{ background: "rgba(255,255,255,0.1)", color: "#14b8a6" }}>Önce / Sonra</span>
              <h2 className="heading-lg text-gradient">Farkı Gözlerinizle Görün</h2>
            </div>

            <div className="grid compare-grid">
              {compareItems.map((item) => (
                <article key={item.title} className="cinematic-slider">
                  <div className="compare-image">
                    <div className="compare-split">
                      <div className="compare-before"><span className="badge" style={{ background: "#ff6b35" }}>ÖNCE</span></div>
                      <div className="compare-after" style={{ justifyContent: "flex-end" }}><span className="badge" style={{ background: "#10b981" }}>SONRA</span></div>
                    </div>
                  </div>
                  <div className="compare-content" style={{ background: "#0f172a", color: "white" }}>
                    <h3 style={{ margin: "0 0 4px" }}>{item.title}</h3>
                    <p style={{ color: "rgba(255,255,255,0.6)", margin: 0, fontSize: "0.9rem" }}>{item.category}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="fiyat-hesapla" className="section">
          <div className="container">
            <div className="card price-wrap" style={{ boxShadow: "0 30px 60px rgba(0,0,0,0.15)" }}>
              <aside className="price-side" style={{ background: "linear-gradient(135deg, #020617 0%, #1e293b 100%)" }}>
                <h2 className="heading-lg text-gradient" style={{ fontSize: "3rem" }}>Anında Fiyat Hesaplayın</h2>
                <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.1rem" }}>Pergola, Rolling Roof, BioClimatic, CamTavan, ZipPerde ve tente ölçülerinizi girin, anında tahmini tutarı görün.</p>

                {/* Trust Badges */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, margin: "20px 0" }}>
                  {[
                    { icon: "⚡", label: "Aynı Gün Hizmet" },
                    { icon: "😊", label: "%95+ Memnuniyet" },
                    { icon: "👥", label: "500+ Mutlu Müşteri" },
                    { icon: "🏆", label: "2000+ Uygulama" },
                  ].map(b => (
                    <div key={b.label} style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, padding: "10px 12px", display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ fontSize: "1.2rem" }}>{b.icon}</span>
                      <span style={{ color: "rgba(255,255,255,0.9)", fontSize: "0.82rem", fontWeight: 600 }}>{b.label}</span>
                    </div>
                  ))}
                </div>

                <div className="price-stat">500+</div><p style={{ color: "rgba(255,255,255,0.6)" }}>Mutlu müşteri</p>
                <div className="price-stat">2000+</div><p style={{ color: "rgba(255,255,255,0.6)" }}>Uygulama tecrübesi</p>
                <div className="price-stat">%95+</div><p style={{ color: "rgba(255,255,255,0.6)" }}>Memnuniyet oranı</p>
              </aside>

              <PricingCalculator endpoint="/api/lead/quote" />
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-title-wrap" style={{ textAlign: "center", margin: "0 auto" }}>
              <h2 className="heading-lg">Nasıl Çalışıyoruz?</h2>
              <p className="lead">Basit ve hızlı süreç: iletişim → keşif ve fiyatlandırma → temizlik → teslim.</p>
            </div>

            <div className="grid process-grid">
              {[
                ["İletişim", "WhatsApp, telefon veya web sitesi formu ile bize ulaşırsınız."],
                ["Keşif & Fiyatlandırma", "Ölçü, kirlilik ve kullanım senaryosuna göre teklif çıkarılır."],
                ["Temizlik", "Profesyonel ekibimiz yerinde uygulama ile süreci tamamlar."],
                ["Teslim", "Kumaş ilk günkü temizliğine yaklaşır, mekan hızla kullanıma döner."]
              ].map(([title, text], index) => (
                <div key={title} className="process-card">
                  <div className="process-number">{index + 1}</div>
                  <h3>{title}</h3>
                  <p className="form-note">{text}</p>
                </div>
              ))}
            </div>

            <div style={{ textAlign: "center", marginTop: 30 }}>
              <a className="btn btn-primary" href="https://wa.me/905367731404" target="_blank">Hemen Başlayalım</a>
            </div>
          </div>
        </section>

        <section id="portfolio" className="section" style={{ background: "#f8fafc" }}>
          <div className="container">
            <div className="portfolio-top">
              <div className="section-title-wrap">
                <span className="eyebrow">Referans İşlerimiz</span>
                <h2 className="heading-lg">Tamamlanan Projeler</h2>
                <p className="lead">Premium vitrin düzeni ile projelerimizi inceleyin.</p>
              </div>
            </div>

            <div className="grid portfolio-grid">
              {projects.map((project, index) => (
                <article key={project.title} className="hover-showcase">
                  <div className="project-cover">
                    <Image
                      src={`https://images.unsplash.com/photo-${["1505693416388-ac5ce068fe85","1513694203232-719a280e022f","1494526585095-c41746248156","1448630360428-65456885c650"][index]}?auto=format&fit=crop&w=900&q=80`}
                      alt={project.title}
                      fill
                      sizes="(max-width: 760px) 100vw, (max-width: 1080px) 50vw, 25vw"
                      style={{ objectFit: "cover" }}
                      loading="lazy"
                    />
                  </div>
                  <div className="hover-showcase-overlay">
                    <h3>{project.title}</h3>
                    <p>{project.meta}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="grid dual-forms">
              <article className="card soft-panel soft-blue">
                <div className="section-title-wrap">
                  <span className="eyebrow" style={{ background: "rgba(66,133,244,.16)", color: "#285db5" }}>Fotoğraf Gönderin</span>
                  <h2 className="heading-md">Pergola RollingRoof BioClimatic CamTavan ZipPerde Tente Fotoğraflarınızı Gönderin</h2>
                  <p className="form-note">Ön analiz için görsel yükleyin, keşif öncesi daha hızlı fiyatlama yapalım.</p>
                </div>
                <LeadForm
                  endpoint="/api/lead/photo"
                  submitLabel="Fotoğraf Talebi Gönder"
                  extraText="Not: gerçek dosya depolama altyapısı eklenirse Vercel Blob / S3 bağlantısı ile genişletilebilir."
                  fields={[
                    { name: "adSoyad", label: "Adınız Soyadınız", required: true },
                    { name: "telefon", label: "Telefon Numaranız", required: true, type: "tel" },
                    { name: "email", label: "E-posta Adresiniz", type: "email" },
                    { name: "detay", label: "Kumaş / sistem durumu notu", type: "textarea" }
                  ]}
                />
              </article>

              <article className="card soft-panel soft-green">
                <div className="section-title-wrap">
                  <span className="eyebrow" style={{ background: "rgba(34,197,94,.16)", color: "#198a43" }}>Randevu Alın</span>
                  <h2 className="heading-md">Hemen Randevu Alın</h2>
                  <p className="form-note">Uygun tarih ve saat bilgisiyle otomatik onay akışı oluşturun.</p>
                </div>
                <LeadForm
                  endpoint="/api/lead/appointment"
                  submitLabel="Randevu Oluştur"
                  extraText="Randevunuz n8n ile otomatik olarak e-posta ve WhatsApp teyidine bağlanabilir."
                  fields={[
                    { name: "adSoyad", label: "Adınız Soyadınız", required: true },
                    { name: "telefon", label: "Telefon Numaranız", required: true, type: "tel" },
                    { name: "email", label: "E-posta Adresiniz", type: "email" },
                    { name: "tarih", label: "Tarih", required: true, type: "date" },
                    { name: "saat", label: "Saat", required: true, options: ["09:00", "11:00", "13:00", "15:00", "17:00"] },
                    { name: "adres", label: "Adres Bilgisi", type: "textarea" }
                  ]}
                />
              </article>
            </div>
          </div>
        </section>

        <section id="blog" className="section">
          <div className="container">
            <div className="section-title-wrap">
              <span className="eyebrow" style={{ background: "rgba(34,197,94,.14)", color: "#15803d" }}>Blog Rehberleri</span>
              <h2 className="heading-lg">Uzman İpuçları & Bakım Rehberleri</h2>
              <p className="lead">Ankara ve çevresi odaklı blog rehberlerimizle sistemlerinizi daha uzun süre verimli kullanın.</p>
            </div>

            <div className="blog-feature">
              <article className="card blog-feature-card">
                <div className="cover cover-tall" style={{ position: "relative", width: "100%", height: "100%", minHeight: "300px" }}>
                  <Image
                    src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80"
                    alt="Blog Feature"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: "cover" }}
                    loading="lazy"
                  />
                  <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(135deg, rgba(7,21,46,.14), rgba(19,179,163,.18))" }} />
                </div>
              </article>
              <article className="card blog-feature-card">
                <div className="blog-content">
                  <span className="eyebrow">Bakım + Uzman Çözüm</span>
                  <h3 className="heading-md">Tente Ömrünü 2 Katına Çıkaran 5 Bakım İpucu</h3>
                  <p className="lead" style={{ fontSize: ".98rem" }}>
                    Teknik kumaşın ömrünü artıran rutin yıkama, is-duman temizliği, UV etkisini azaltan bakım ve doğru kimyasal seçimi.
                  </p>
                  <p className="form-note">15 Mart 2026 · 6 dk okuma</p>
                  <a href="/blog" style={{ color: "#0b857d", fontWeight: 700 }}>Devamını Oku →</a>
                </div>
              </article>
            </div>

            <div className="grid blog-grid">
              {blogPosts.map((post, index) => (
                <article key={post} className="card blog-card">
                  <div className="cover" style={{ position: "relative", width: "100%", minHeight: "200px" }}>
                    <Image
                      src={`https://images.unsplash.com/photo-${["1494526585095-c41746248156","1513694203232-719a280e022f","1448630360428-65456885c650","1484154218962-a197022b5858","1505693416388-ac5ce068fe85","1523413651479-597eb2da0ad6"][index]}?auto=format&fit=crop&w=900&q=80`}
                      alt={post}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ objectFit: "cover" }}
                      loading="lazy"
                    />
                    <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(135deg, rgba(7,21,46,.08), rgba(19,179,163,.15))" }} />
                  </div>
                  <div className="blog-content">
                    <span className="badge" style={{ background: "rgba(255,177,26,.14)", color: "#8a5e00" }}>Blog</span>
                    <h3>{post}</h3>
                    <p className="form-note">SEO odaklı içerik taslağı hazırlandı.</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-tight">
          <div className="container">
            <div className="grid testimonial-grid">
              {[
                "Restoran pergola kumaşımızı değiştirmek yerine temizlettik. Hem iş kaybımız azaldı hem ciddi tasarruf ettik.",
                "Zip perde ve LED bakım süreci kayıtlı ilerledi. Hızlı, düzenli ve güven veren bir ekipti.",
                "Kumaş değişimi yerine temizlik kararı işletme için çok daha mantıklı çıktı. Sonuç beklentimizin üstündeydi."
              ].map((quote, index) => (
                <article key={quote} className="card testimonial">
                  <div style={{ color: "#f59e0b", fontSize: 22 }}>★★★★★</div>
                  <p className="lead" style={{ fontSize: ".98rem" }}>{quote}</p>
                  <strong>{["Mehmet Yılmaz", "Ayşe Demir", "Can Öztürk"][index]}</strong>
                  <p className="form-note">{["Çankaya, Ankara", "Keçiören, Ankara", "Yenimahalle, Ankara"][index]}</p>
                </article>
              ))}
            </div>

            <div style={{ textAlign: "center", marginTop: 28 }}>
              <h3 className="heading-md">Instagram&apos;da Bizi Takip Edin</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12, marginTop: 18 }}>
                {[0,1,2,3].map((i) => <div key={i} className="project-cover" style={{ aspectRatio: "1/1" }} />)}
              </div>
              <div style={{ marginTop: 18 }}>
                <a className="btn btn-secondary" href="https://www.instagram.com/pergoclean.tr" target="_blank" rel="noopener noreferrer">Instagram&apos;da Takip Et</a>
              </div>
            </div>
          </div>
        </section>

        <section id="sss" className="section">
          <div className="container" style={{ maxWidth: 860 }}>
            <div className="section-title-wrap" style={{ margin: "0 auto", textAlign: "center" }}>
              <h2 className="heading-lg">Sık Sorulan Sorular</h2>
              <p className="lead">Merak edilen kritik başlıklar burada.</p>
            </div>

            <div className="faq-list">
              {faqs.map(([question, answer]) => (
                <details key={question} className="card faq-item">
                  <summary style={{ fontWeight: 700, cursor: "pointer" }}>{question}</summary>
                  <p className="form-note" style={{ marginTop: 12 }}>{answer}</p>
                </details>
              ))}
            </div>

            <div className="card" style={{ marginTop: 32, padding: "28px 32px", background: "linear-gradient(135deg, #f0fdf4, #dcfce7)", border: "1px solid rgba(34,197,94,.25)", textAlign: "center" }}>
              <p style={{ fontSize: "1.5rem", marginBottom: 8 }}>⭐</p>
              <h3 className="heading-md" style={{ marginBottom: 10 }}>Memnun kaldınız mı? Google&apos;da yorum bırakın!</h3>
              <p className="form-note" style={{ marginBottom: 18 }}>Yorumlarınız bizim için çok değerli. Sadece 30 saniyenizi alır.</p>
              <a
                className="btn btn-primary"
                href="https://g.page/r/pergoclean/review"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-flex" }}
              >
                Google&apos;da Yorum Yaz →
              </a>
            </div>
          </div>
        </section>

        <section id="iletisim" className="section">
          <div className="container">
            <div className="section-title-wrap" style={{ textAlign: "center", margin: "0 auto" }}>
              <h2 className="heading-lg">Hemen Başlayalım</h2>
              <p className="lead">Bugün bizimle iletişime geçin; keşif ve teklif sürecini başlatalım.</p>
            </div>

            <div className="btn-row" style={{ justifyContent: "center", marginTop: 24 }}>
              <a className="btn btn-primary" href="https://wa.me/905367731404" target="_blank">{siteConfig.phonePrimary}</a>
              <a className="btn btn-primary" href="https://wa.me/905309550028" target="_blank">{siteConfig.phoneSecondary}</a>
              <a className="btn btn-secondary" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </div>

            <div className="grid dual-forms" style={{ marginTop: 28 }}>
              <article className="card soft-panel">
                <h3 className="heading-md">İletişim Formu</h3>
                <LeadForm
                  endpoint="/api/lead/contact"
                  submitLabel="Mesaj Gönder"
                  fields={[
                    { name: "adSoyad", label: "Adınız Soyadınız", required: true },
                    { name: "email", label: "E-posta", type: "email" },
                    { name: "telefon", label: "Telefon", type: "tel", required: true },
                    { name: "konu", label: "Konu", required: true, options: ["Teklif Talebi", "Randevu", "LED Bakımı", "Kurumsal Proje", "Genel Bilgi"] },
                    { name: "mesaj", label: "Mesajınız", type: "textarea", required: true }
                  ]}
                />
              </article>

              <article className="card soft-panel">
                <h3 className="heading-md">İletişim Bilgileri</h3>
                <p className="lead">{siteConfig.address}</p>
                <p><strong>WhatsApp:</strong> {siteConfig.phonePrimary}</p>
                <p><strong>WhatsApp:</strong> {siteConfig.phoneSecondary}</p>
                <p><strong>E-posta:</strong> {siteConfig.email}</p>
                <p><strong>Web:</strong> www.pergoclean.com.tr</p>
                {/* CLS-safe map container: explicit aspect-ratio prevents layout shift */}
                <div style={{ marginTop: 18, position: "relative", width: "100%", aspectRatio: "16/9", borderRadius: 16, overflow: "hidden", background: "#e5e7eb" }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.4610118559387!2d32.76632427659424!3d39.95344397151745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d3493e878479e5%3A0xcdaaa763ed404c06!2sTimko%20Sokak%20Makina%20Otomotiv%20G%C4%B1da%20Sanayi%20B%C3%B6lgesi!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="PergoClean Konum - Timko İş Merkezi, Yenimahalle Ankara"
                  />
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <FloatingContact />
    </>
  );
}
