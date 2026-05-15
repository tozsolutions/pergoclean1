"use client";

import { useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FloatingContact } from "@/components/floating-contact";
import { LeadForm } from "@/components/lead-form";
import { PricingCalculator } from "@/components/pricing-calculator";
import { BeforeAfterSlider } from "@/components/before-after-slider";
import { InstagramSlider } from "@/components/instagram-slider";
import { siteConfig } from "@/lib/site";
import VaporizeTextCycle from "@/components/ui/vapour-text-effect";
import ImmersiveScrollGallery from "@/components/ui/immersive-scroll-gallery";
import { RevealText } from "@/components/ui/reveal-text";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  { 
    title: "Pergola / Tente Kumaş Temizliği", 
    icon: "🏛️",
    text: "Pergola, RollingRoof, BioClimatic ve CamTavan sistemlerinizdeki zorlu kir, yağ ve is tabakalarını teknik ekipmanlarla arındırarak kumaş dokusunu yeniliyoruz.",
    detail: `Pergola Kumaş Temizliği — Teknik Bakım ve Profesyonel Restorasyon Rehberi

Pergola Kumaşları Neden Zamanla Kirlenir?

Pergola sistemlerinde kullanılan PVC coated polyester, akrilik kumaş ve teknik membran yüzeyler dış ortam koşullarına sürekli maruz kaldığı için zaman içerisinde:

UV kaynaklı yüzey matlaşması
Atmosferik kir tabakası
Egzoz partikülleri
Organik küf oluşumu
Kuş pisliği asidik lekeleri
Yağmur minerali kalıntıları
Reçine ve polen birikimi

oluşturmaya başlar.

Özellikle yanlış kimyasallar kullanıldığında kumaşın üzerindeki hydrophobic coating tabakası zarar görür. Bu durum kumaşın daha hızlı kir tutmasına, renk solmasına ve su geçirgenliğinin artmasına neden olur.

PergoClean uygulamalarında kullanılan düşük basınçlı kontrollü temizleme yöntemleri sayesinde kumaş yüzeyi zarar görmeden derin temizlik sağlanır.

Yanlış Pergola Temizliği Hangi Sorunlara Yol Açar?

Birçok kullanıcı yüksek basınçlı yıkama sistemlerinin kumaşa zarar verdiğini fark etmez.

Yanlış uygulamalar:

PVC yüzey çatlaması
Dikiş açılması
Laminasyon ayrılması
Kumaş elastikiyet kaybı
Ray sistemi içine kir taşınması
Motor sistemine nem ilerlemesi

gibi ciddi problemlere sebep olabilir.

Özellikle solvent bazlı kimyasallar teknik pergola kumaşlarında geri dönüşü olmayan yüzey bozulmalarına yol açabilir.

Profesyonel Pergola Kumaş Temizliği Nasıl Yapılır?

PergoClean bakım süreçlerinde:

1. Yüzey Analizi - Kumaş tipi belirlenir (PVC coated polyester, Acrylic awning fabric, Blackout technical fabric, Micro perforated screen fabric)
2. Kirlilik Analizi - Organik kir, Küf kolonisi, Mineral tabakası, Atmosferik karbon birikimi, Yağ tabakası tespit edilir
3. Kimyasal Uyumluluk Kontrolü - Her kumaş tipi farklı pH toleransına sahiptir
4. Kontrollü Temizlik - Düşük basınç, Fiber yönlü uygulama, Coating-safe cleaning, Durulama optimizasyonu uygulanır
5. Mekanik Kontrol - Ray sistemi, Drenaj kanalları, Motor bağlantıları, Gergi mekanizmaları kontrol edilir

Pergola Kumaşı Ne Sıklıkla Temizlenmelidir?

Kullanım Alanı / Önerilen Süre:
- Deniz kenarı işletmeler: 3-4 ay
- Restoran & cafe: 4-6 ay
- Konut sistemleri: 6-12 ay
- Endüstriyel alanlar: 3-6 ay

Düzenli bakım yapılmayan kumaşlarda UV yorgunluğu hızlanır.

Teknik Pergola Bakımı Neden Önemlidir?

Düzenli bakım: sistem ömrünü uzatır, motor yükünü azaltır, ray sürtünmesini düşürür, su tahliyesini iyileştirir, enerji tüketimini azaltır, arıza riskini düşürür ve yüksek maliyetli mekanik arızaları önler.`
  },
  { 
    title: "BioClimatic / RollingRoof", 
    icon: "🌿",
    text: "Bioclimatic pergola lam ve yüzey restorasyonu. UV etkisi ve kir birikimini teknik ekipmanlarla arındırıyoruz.",
    detail: `Bioclimatic / Rolling Roof Sistemleri — Teknik Bakım Rehberi

Bioclimatic Sistemler Neden Düzenli Bakım Gerektirir?

Bioclimatic roof ve rolling roof sistemleri yalnızca bir gölgelendirme çözümü değildir.

Bu sistemlerde:

motorlu hareket mekanizmaları
lineer drenaj kanalları
alüminyum louver paneller
EPDM izolasyon elemanları
senkronize ray sistemleri

birlikte çalışır.

Bakım yapılmadığında sistem toleransları bozulur ve uzun vadede ciddi arızalar oluşabilir.

Rolling Roof Sistemlerinde En Sık Görülen Problemler

Su Tahliye Problemleri:
Lineer drenaj kanallarında oluşan yaprak birikimi, toz çamur tabakası ve polen yoğunluğu su taşmalarına sebep olur.

Motor Zorlanması:
Ray içinde biriken partiküller motor tork yükünü artırır, rulman aşınmasını hızlandırır ve hareket senkronizasyonunu bozar.

Ses Problemleri:
Metal sürtünmesi ve kuru rulman sistemleri zamanla yüksek ses oluşturur.

Teknik Bakım Sürecinde Neler Yapılır?

PergoClean bakım protokollerinde:

Mekanik Kontroller:
- Tubular motor analizi
- Ray hizalama kontrolü
- Hareket senkronizasyon testi
- Vida gevşeme analizi

Yüzey Temizliği:
- Oksidasyon temizliği
- Alüminyum yüzey bakımı
- Drenaj temizliği
- Silikon kalıntı temizliği

Koruyucu Uygulamalar:
- Mekanik yağlama
- Conta bakımı
- Sürtünme azaltıcı uygulamalar

Bioclimatic Sistemlerde UV ve Oksidasyon Etkisi

Uzun süre dış ortamda kalan alüminyum yüzeylerde oksidasyon, matlaşma, yüzey yorulması ve renk kaybı oluşabilir. Özellikle deniz kenarı bölgelerde tuzlu hava bu süreci hızlandırır.`
  },
  { 
    title: "Wintent — Zip Perde Temizliği", 
    icon: "🪟",
    text: "Zip perde sistemleri için profesyonel bakım uyguluyor, ray mekanizması ve fermuar bölgelerini teknik korumaya alıyoruz.",
    detail: `ZIP Perde Temizliği ve Ray Sistemi Bakımı

ZIP Perde Sistemleri Neden Hassas Sistemlerdir?

ZIP screen sistemleri klasik stor perde sistemlerinden farklıdır.

Bu sistemlerde:

yan ray baskısı
gergi toleransı
fermuarlı kumaş yapısı
motor senkronizasyonu

kritik öneme sahiptir.

Yanlış temizlik uygulamaları kumaş deformasyonuna neden olabilir.

ZIP Perde Sistemlerinde Görülen Yaygın Arızalar

Perde Sıkışması:
Genellikle ray içi kir birikimi, deformasyon veya yanlış yağlama sebebiyle oluşur.

Dalgalı Kumaş Görünümü:
Sebep aşırı güneş yükü, gergi kaybı veya nem etkisi olabilir.

Teknik ZIP Perde Temizliği Nasıl Yapılır?

Uygulama sürecinde:

- Ray içleri temizlenir
- Sürtünme noktaları analiz edilir
- Kumaş yüzeyi düşük basınçla temizlenir
- Motor çalışma toleransı kontrol edilir

Ve sistem tekrar kalibre edilir.`
  },
  { 
    title: "Kepenk — Panjur Temizliği", 
    icon: "🚪",
    text: "Endüstriyel ve konut kepenk sistemleri için profesyonel yağlama, ray temizliği ve motor bakımı hizmetleri.",
    detail: `Kepenk ve Panjur Sistemleri — Koruyucu Mekanik Bakım

Kepenk Sistemlerinde Bakım Neden Kritik?

Kepenk ve panjur sistemleri sürekli yük altında çalışan mekanik yapılardır.

Bakım yapılmadığında:

motor zorlanması
ray aşınması
lamel sürtünmesi
yatak arızaları

oluşabilir.

En Büyük Hata: Sadece Arıza Olduğunda Müdahale

Birçok işletme bakım yaptırmaz, yalnızca sistem durduğunda servis çağırır.

Bu durum:

daha büyük maliyet
motor yanması
ray deformasyonu
mekanik kırılma

riskini artırır.

Önleyici bakım, sistem arızalarının %80'ini önleyebilir.`
  },
  { 
    title: "Güneş Panel Temizliği", 
    icon: "☀️",
    text: "Solar panel yüzeylerinin profesyonel temizliği ve verimlilik artırıcı bakım hizmetleri.",
    detail: `Güneş Paneli Temizliği — Verimlilik ve Yüzey Koruma

Kirli Güneş Paneli Ne Kadar Verim Kaybı Oluşturur?

Uluslararası saha analizlerine göre kirli paneller:

%5 ile %30'a kadar enerji kaybına neden olabilir.

Özellikle:

kuş pisliği
kireçli su kalıntısı
polen tabakası
endüstriyel toz

panel geçirgenliğini düşürür.

Yanlış Panel Temizliği Neden Tehlikelidir?

Basit görünen temizlik işlemleri bile:

mikro çizik
anti-reflective coating hasarı
sıcak nokta oluşumu
cam yüzey gerilimi

oluşturabilir.

Bu nedenle sert fırça ve yüksek mineral içeren su kullanımı önerilmez.

Profesyonel Solar Panel Temizliği Süreci

PergoClean uygulamalarında:

saf su sistemi
düşük iletkenlikli durulama
residue-free cleaning
yüzey sıcaklık kontrolü

uygulanır.

Bu yöntemler panel verimliliğinin korunmasına yardımcı olur.`
  },
  { 
    title: "Mekanik Sistem Bakımı", 
    icon: "⚙️",
    text: "Motorlu pergola ve gölgelendirme sistemleri için kapsamlı mekanik bakım ve arıza önleyici hizmetler.",
    detail: `Mekanik Sistem Bakımı — Arıza Önleyici Teknik Koruma

Önleyici Bakım Neden Kritik?

Motorlu pergola ve gölgelendirme sistemlerinde arızaların büyük kısmı aniden oluşmaz.

Öncesinde:

sürtünme artışı
ses değişimi
motor zorlanması
yavaş hareket
drenaj problemi

gibi belirtiler verir.

PergoClean Teknik Bakım Yaklaşımı

Bakım süreçlerinde:

motor yük analizi
ray sürtünme kontrolü
rulman kontrolü
bağlantı noktası analizi
drenaj optimizasyonu
izolasyon kontrolü

uygulanır.

Amaç yalnızca temizlik değil:

sistem ömrünü uzatmak
arıza riskini azaltmak
maliyetli servisleri önlemek
operasyonel güvenliği artırmaktır.

Sonuç

PergoClean yaklaşımı klasik "temizlik hizmeti" mantığından farklıdır.

Odak noktası:

teknik koruma
mekanik sürdürülebilirlik
sistem restorasyonu
önleyici bakım mühendisliği
uzun vadeli performans optimizasyonudur.`
  }
];

const compareItems = [
  { title: "Ankara · Çankaya Wintent / Pergola Temizliği", before: "/assets/Ankara_Pergola_Temizlik_Çankaya_1_before.jpg", after: "/assets/Ankara_Pergola_Temizlik_Çankaya_2_after.jpg" },
  { title: "Ankara · Pursaklar Pergola Temizliği", before: "/assets/Ankara_Pergola_Temizlik_Pursaklar_q_before.jpg", after: "/assets/Ankara_Pergola_Temizlik_Pursaklar_2_after.jpg" },
  { title: "Ankara · Sincan Pergola Temizliği", before: "/assets/Ankara_Pergola_Temizlik_Sincan_1_before.jpg", after: "/assets/Ankara_Pergola_Temizlik_Sincan_2_after.jpg" },
  { title: "Teknik Kumaş Restorasyonu", image: "yenimahalle" },
  { title: "Pergola Yüzey Bakımı", image: "etimesgut" },
  { title: "RollingRoof Temizliği", image: "cayyolu" }
];

const projects = [
  { title: "Keçiören Restoran Tente Restorasyonu", image: "ref-kecioren-1.jpg", meta: "Keçiören, Ankara" },
  { title: "AVM Referans Projelerimiz", image: "ref-malls.jpg", meta: "Ankara Geneli AVM'ler" },
  { title: "Zincir Kafe & Restoranlar", image: "ref-cafes.jpg", meta: "Kurumsal Referanslar" },
  { title: "Bilkent Konut Projesi", image: "ref-bilkent.jpg", meta: "Bilkent, Ankara" },
  { title: "Çankaya Premium Mekan Restorasyonu", image: "ref-cankaya.jpg", meta: "Çankaya, Ankara" },
  { title: "Çayyolu Villa Pergola Bakımı", image: "ref-cayyolu.jpg", meta: "Çayyolu, Ankara" },
  { title: "Etimesgut Ticari İşletme Bakımı", image: "ref-etimesgut.jpg", meta: "Etimesgut, Ankara" },
  { title: "Gölbaşı Bahçe Alanı Restorasyonu", image: "ref-golbasi.jpg", meta: "Gölbaşı, Ankara" },
  { title: "İncek Modern Villa Sistemleri", image: "ref-incek.jpg", meta: "İncek, Ankara" },
  { title: "Keçiören Kurumsal Uygulama", image: "ref-kecioren-2.jpg", meta: "Keçiören, Ankara" },
  { title: "Kızılay Merkezi Lokasyon Bakımı", image: "ref-kizilay.jpg", meta: "Kızılay, Ankara" },
  { title: "Mamak Bölgesel Hizmetler", image: "ref-mamak.jpg", meta: "Mamak, Ankara" },
  { title: "Pursaklar Teknik Uygulama", image: "ref-pursaklar.jpg", meta: "Pursaklar, Ankara" },
  { title: "Sincan Endüstriyel Restorasyon", image: "ref-sincan.jpg", meta: "Sincan, Ankara" },
  { title: "Ümitköy Lüks Konut Çözümleri", image: "ref-umitkoy.jpg", meta: "Ümitköy, Ankara" },
  { title: "Nata Vega AVM Uygulaması 1", image: "ref-vega-2.jpg", meta: "Mamak, Ankara" },
  { title: "Nata Vega AVM Uygulaması 2", image: "ref-vega-3.jpg", meta: "Mamak, Ankara" },
  { title: "Nata Vega AVM Uygulaması 3", image: "ref-vega-4.jpg", meta: "Mamak, Ankara" },
  { title: "Nata Vega AVM Uygulaması 4", image: "ref-vega-5.jpg", meta: "Mamak, Ankara" }
];

const blogPosts = [
  "Pergola Restorasyonu Ne Sıklıkla Yapılmalı?",
  "RollingRoof Sistemlerinde Kış Hazırlığı",
  "Bioclimatic Pergolalar: Teknik Bakım Rehberi",
  "Cam Tavan Sistemlerinde Küf ve Yoğun Lekeler",
  "ZipPerde Sistemlerinde Güneş Işığı ve UV Koruması",
  "Kasetli Tente Motor Bakımı ve Uzaktan Kumanda Sorunları"
];

const faqs = [
  ["Pergola, RollingRoof ve ZipPerde bakım süreci ne kadar sürer?", "Saha koşullarına göre çoğunlukla bir gün içinde tamamlanır. Söküm gerektirmez, mekan çalışmasını minimum seviyede etkiler."],
  ["Hangi tür kumaşlarda restorasyon yapıyorsunuz?", "Pergola, zip perde, rolling roof, tente ve birçok teknik dış mekan kumaşında uzmanlığımız bulunmaktadır."],
  ["Yatırım maliyeti nasıl belirleniyor?", "m², kirlilik seviyesi, erişim zorluğu ve ek LED / mekanizma bakım ihtiyacına göre netleştiriliyor."],
  ["LED değişimi de yapıyor musunuz?", "Evet. Arızalı veya eskimiş LED sistemleri için değişim ve renklendirme hizmeti veriyoruz."],
  ["Ücretsiz keşif için nasıl ulaşabilirim?", "WhatsApp, telefon ya da form aracılığıyla teknik analiz sürecini başlatabilirsiniz."],
  ["Uygulama sonrası teknik destek var mı?", "Uygulanan işleme göre bakım önerisi ve kayıtlı süreç dosyası teslim ediyoruz."],
  ["ZipPerde sistemlerinde teknik bir yöntem uyguluyor musunuz?", "Evet. Zip perde sistemlerinde ray mekanizması ve fermuar bölgeleri için özel kimyasal ve profesyonel teknikler kullanıyoruz. Kumaşa zarar vermeden derinlemesine bakım yapıyoruz."],
  ["ZipPerde rayları ve mekanizmaları bakımı yapılıyor mu?", "Evet, fermuar dişlileri, ray kanalları ve hareket mekanizması kontrolü dahildir. Gerekirse yağlama ve ayar da yapılır."]
];

export default function HomePage() {
  const [expandedService, setExpandedService] = useState<number | null>(null);
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero">
          <div className="hero-bg">
            <Image
              src="/assets/hero-main.jpg"
              alt="PergoClean Premium Pergola Restorasyonu"
              fill
              className="hero-bg-image"
              priority
              sizes="100vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="hero-overlay" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.75) 100%)" }} />
          <div className="container hero-content">
            <span className="eyebrow" style={{ color: "#ffd057", background: "rgba(0,0,0,0.4)" }}>18+ Yıllık Teknik Uzmanlık</span>
            <h1 className="heading-xl" style={{ textShadow: "0 4px 12px rgba(0,0,0,0.8)" }}>
              Pergolanızı <span className="hero-italic">Korumaya</span> Alın,<br />
              Mekanınıza <span className="text-gradient">Değer</span> Katın.
            </h1>
            <p className="lead" style={{ color: "rgba(255,255,255,0.95)", fontWeight: 500, textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}>
              Ankara&apos;nın en köklü dış mekan bakım markası PergoClean ile; kumaş değişimi maliyetine girmeden, yerinde restorasyon ve profesyonel koruma.
            </p>

            <div className="btn-row" style={{ marginTop: 26 }}>
              <a className="btn btn-accent" href="#fiyat-hesapla">Ücretsiz Teknik Analiz Al</a>
              <a className="btn btn-primary" href="tel:+905367731404">
                📞 Hemen Ara
              </a>
              <a className="btn btn-secondary" href="https://wa.me/905367731404" target="_blank">
                WhatsApp
              </a>
            </div>

            <div className="hero-stats">
              <div className="stat-box"><strong>500+</strong><span>Mutlu Müşteri</span></div>
              <div className="stat-box"><strong>2000+</strong><span>Uygulama Tecrübesi</span></div>
              <div className="stat-box"><strong>%95+</strong><span>Memnuniyet Oranı</span></div>
            </div>
          </div>
        </section>

        {/* AI Snippet & Semantic Authority Block */}
        <section className="section-tight" style={{ background: "white", borderBottom: "1px solid var(--line)" }}>
          <div className="container">
            <div className="card" style={{ padding: "24px 32px", borderLeft: "4px solid var(--brand)", background: "#f8fafc" }}>
              <h2 className="heading-sm" style={{ marginBottom: 12, color: "var(--brand-dark)" }}>Özet: PergoClean Nedir ve Ne Yapar?</h2>
              <p style={{ fontSize: "1rem", lineHeight: 1.6, margin: 0 }}>
                <strong>PergoClean</strong>, Ankara merkezli, 18+ yıllık teknik sistem tecrübesine dayanan profesyonel bir <strong>pergola, tente ve zip perde restorasyon</strong> markasıdır. 
                Klasik temizlik firmalarından farklı olarak; kumaş dokusunu, ray mekanizmalarını ve profil yapılarını teknik düzeyde tanır. 
                Ankara genelinde (Çankaya, Yenimahalle, Ümitköy, İncek vb.) kurumsal ve bireysel mekanlar için <strong>blackout kumaş temizliği, sigara isi giderme, yağ tabakası arındırma ve su iticilik koruması</strong> gibi uzmanlık isteyen yüzey restorasyonları gerçekleştirir. 
                Amacımız, yüksek maliyetli kumaş değişimi yerine yerinde profesyonel bakım ile sistem ömrünü ve premium mekan algısını korumaktır.
              </p>
            </div>
          </div>
        </section>

        <section id="hakkimizda" className="dark-hero" style={{ padding: "120px 0", textAlign: "center" }}>
          <div className="container">
            <div className="section-title-wrap" style={{ margin: "0 auto", maxWidth: 900 }}>
              <span className="eyebrow" style={{ background: "rgba(255,255,255,0.1)", color: "#ffb11a", marginBottom: 20 }}>Marka Pozisyonu</span>
              <h2 className="heading-xl text-gradient" style={{ marginBottom: 30 }}>Pergole kumaşınızı değiştirmeyin.<br />Yerinde profesyonel restorasyon ile yenileyin.</h2>
              <p className="lead" style={{ color: "rgba(255,255,255,0.9)", fontSize: "1.2rem", margin: "0 auto" }}>
                En büyük kozumuz net: kumaş değişiminde söküm + yeni kumaş + montaj maliyeti oluşur,
                <strong> 50 m² için ortalama 70.000 – 90.000 TL bandına çıkılır</strong> ve mekan çoğu zaman 3 gün boyunca kapalı kalır.
              </p>
              <p className="lead" style={{ color: "var(--brand)", fontSize: "1.3rem", fontWeight: 700, margin: "20px auto 40px" }}>
                PergoClean ise söküm gerektirmeden, iş kaybını sıfırlayarak, yerinde profesyonel bakım yapar.
              </p>
            </div>

            <div className="grid kpi-grid">
              <div className="luxury-card card" style={{ padding: 32 }}><h3 className="heading-md" style={{ color: "#ffb11a" }}>%70-80 Tasarruf</h3><p style={{ color: "rgba(255,255,255,0.7)", margin: 0 }}>Değişim yerine yerinde restorasyon ile ekonomik çözüm.</p></div>
              <div className="luxury-card card" style={{ padding: 32 }}><h3 className="heading-md" style={{ color: "#ffb11a" }}>Söküm Yok</h3><p style={{ color: "rgba(255,255,255,0.7)", margin: 0 }}>Mekan aksamadan, ekstra operasyon yükü oluşmadan uygulama.</p></div>
              <div className="luxury-card card" style={{ padding: 32 }}><h3 className="heading-md" style={{ color: "#ffb11a" }}>Hızlı Uygulama</h3><p style={{ color: "rgba(255,255,255,0.7)", margin: 0 }}>Planlı saha ekibiyle hızlı keşif ve kısa restorasyon süresi.</p></div>
              <div className="luxury-card card" style={{ padding: 32 }}><h3 className="heading-md" style={{ color: "#ffb11a" }}>%80-90 Yenilenme</h3><p style={{ color: "rgba(255,255,255,0.7)", margin: 0 }}>Teknik kumaşlarda ilk günkü dokuya en yakın sonuç.</p></div>
            </div>

            <div className="notice luxury-card" style={{ marginTop: 40, border: "1px solid rgba(239,68,68,0.4)", color: "#fca5a5", fontSize: "1.1rem" }}>
              Kumaş değişimi genellikle mekanın 1 gün söküm, 1 gün kumaş işlemi, 1 gün tekrar montaj nedeniyle toplam <strong>3 gün verimsiz kalmasına</strong> yol açar. Bu, özellikle restoran, kafe ve otel işletmelerinde doğrudan ciro kaybı demektir.
            </div>
          </div>
        </section>

        <section id="hikayemiz" className="section" style={{ background: "#f8fbff" }}>
          <div className="container">
            <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
              <span className="eyebrow" style={{ background: "rgba(19,179,163,0.1)", color: "var(--brand-dark)" }}>Biz Kimiz?</span>
              <h2 className="heading-lg">18+ Yıllık Teknik Tecrübe ve Uzmanlık</h2>
              <p className="lead" style={{ margin: "24px auto" }}>
                PergoClean klasik bir temizlik firması değildir. 18+ yıllık pergola sistemleri üretim, montaj ve teknik servis geçmişinden gelen derin uzmanlığımızla, kumaşı ve mekanizmayı en ince ayrıntısına kadar tanıyoruz.
              </p>
              <div className="grid" style={{ gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginTop: 40 }}>
                {[
                  { title: "Kumaşı Tanıyoruz", desc: "Üretimden gelen bilgiyle kumaşın dokusuna ve yapısına uygun işlem yapıyoruz." },
                  { title: "Mekanizmaya Hakimiz", desc: "Ray, oluk ve motor sistemlerini bozmadan, teknik hassasiyetle temizliyoruz." },
                  { title: "Restorasyon Odaklı", desc: "Amacımız sadece silmek değil, kumaşın ilk günkü premium dokusunu geri kazandırmak." }
                ].map((item, i) => (
                  <div key={i} className="card" style={{ padding: 24, textAlign: "left", background: "white" }}>
                    <h3 className="heading-md" style={{ fontSize: "1.1rem", color: "var(--brand)" }}>{item.title}</h3>
                    <p style={{ margin: 0, fontSize: "0.9rem", color: "var(--muted)" }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ background: "white" }}>
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
              <div style={{ position: "relative", width: "100%", aspectRatio: "1/1", borderRadius: 32, overflow: "hidden", boxShadow: "var(--shadow)" }}>
                <Image
                  src="/assets/restoration-main.jpg"
                  alt="Restorasyon Etkisi"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div>
                <span className="eyebrow">Restorasyon Yaklaşımı</span>
                <h2 className="heading-lg" style={{ fontSize: 'calc(clamp(2.4rem, 4vw, 4.5rem) * 1.1)', fontWeight: 800, color: '#ffffff', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>Profesyonel Temizlik</h2>
                <p className="lead">
                  PergoClean yaklaşımında amaç yalnızca yüzey temizliği değildir.
                  Kumaşı sertleştirmeden bakım yapmak, su iticiliği korumak ve mekana ilk günkü premium görünümünü geri kazandırmak için çalışıyoruz.
                </p>
                <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: 20, marginTop: 24 }}>
                  {[
                    "pH Dengeli Ürünler",
                    "Buharlı Uygulama",
                    "UV Koruma Desteği",
                    "Ray & Oluk Bakımı"
                  ].map(item => (
                    <div key={item} style={{ display: "flex", gap: 10, alignItems: "center", fontWeight: 700 }}>
                      <span style={{ color: "var(--brand)" }}>✓</span> {item}
                    </div>
                  ))}
                </div>
                <Link href="/blog/premium-pergola-bakim-rehberi" className="btn btn-secondary" style={{ marginTop: 32 }}>
                  Restorasyon Rehberini Oku →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="hizmetler" className="section">
          <div className="container">
            <div className="section-title-wrap">
              <span className="eyebrow">Hizmetlerimiz</span>
              <RevealText
                text="NERELER YAPIYORUZ?"
                textColor="text-[#0e1b3f]"
                overlayColor="text-[#13b3a3]"
                fontSize="text-[clamp(2.4rem,4vw,4.5rem)]"
                letterDelay={0.04}
              />
            </div>

            <div className="grid service-grid">
              {services.map((service, index) => (
                <article key={index} className="card service-card" style={{ cursor: 'pointer' }}>
                  <div 
                    onClick={() => setExpandedService(expandedService === index ? null : index)}
                    style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}
                  >
                    <div style={{ 
                      fontSize: '2.5rem', 
                      flexShrink: 0,
                      width: '60px',
                      height: '60px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'linear-gradient(135deg, var(--brand) 0%, var(--brand-dark) 100%)',
                      borderRadius: '16px',
                      color: 'white'
                    }}>
                      {service.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 className="heading-md" style={{ marginTop: 0, marginBottom: '8px' }}>{service.title}</h3>
                      <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>{service.text}</p>
                    </div>
                    <div style={{ 
                      fontSize: '1.5rem', 
                      color: 'var(--brand)',
                      transform: expandedService === index ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease'
                    }}>
                      ▼
                    </div>
                  </div>
                  
                  <AnimatePresence>
                    {expandedService === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div style={{ 
                          marginTop: '20px', 
                          paddingTop: '20px', 
                          borderTop: '1px solid var(--line)',
                          maxHeight: '500px',
                          overflowY: 'auto'
                        }}>
                          <ImmersiveScrollGallery />
                          <div style={{ padding: '20px', marginTop: '-100px', position: 'relative', zIndex: 10 }}>
                            <pre style={{ 
                              whiteSpace: 'pre-wrap', 
                              fontFamily: 'inherit',
                              fontSize: '0.9rem',
                              lineHeight: 1.8,
                              color: 'var(--text)'
                            }}>
                              {service.detail}
                            </pre>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </article>
              ))}
            </div>

            <div className="card value-block">
              <h3 className="heading-md" style={{ color: "white" }}>Neden PergoClean Restorasyon?</h3>
              <div className="grid value-list">
                <div className="value-item"><div>✓</div><div><strong>Maliyet Optimizasyonu</strong><span>Değiştirme maliyetinin %20-30&apos;una tam restorasyon çözümü.</span></div></div>
                <div className="value-item"><div>✓</div><div><strong>Teknik Uzmanlık</strong><span>PVC, Akrilik ve Blackout teknik kumaşlara özel pH dengeli profesyonel bakım.</span></div></div>
                <div className="value-item"><div>✓</div><div><strong>Zorlu Leke Müdahalesi</strong><span>Yağ, is, polen ve derinleşmiş kir tabakalarında yüksek başarı oranı.</span></div></div>
                <div className="value-item"><div>✓</div><div><strong>Sistem Koruma</strong><span>Ray, fitil ve motorlu aksamların temizlik esnasında teknik korunması.</span></div></div>
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
                    Zamanla biriken kir, toz ve UV etkisiyle küflenen zip perde kumaşları için <strong>PergoClean&apos;in teknik restorasyon servisi</strong> ile
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
              <RevealText
                text="FARKI GÖZLERİNİZLE GÖRÜN"
                textColor="text-[#13b3a3]"
                overlayColor="text-[#0e1b3f]"
                fontSize="text-[clamp(2.4rem,4vw,4.5rem)]"
                letterDelay={0.04}
              />
            </div>

            <div className="grid compare-grid" style={{ transform: 'scale(0.95)' }}>
              {compareItems.map((item, index) => (
                <BeforeAfterSlider
                  key={index}
                  title={item.title}
                  before={item.before || `/assets/${item.image}-before.jpg`}
                  after={item.after || `/assets/${item.image}-after.jpg`}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="fiyat-hesapla" className="section">
          <div className="container">
            <div className="card price-wrap" style={{ boxShadow: "0 30px 60px rgba(0,0,0,0.15)" }}>
              <aside className="price-side" style={{ background: "linear-gradient(135deg, #020617 0%, #1e293b 100%)" }}>
                <RevealText
                  text="ANINDA FIYAT TEKLİFİ ALIN"
                  textColor="text-[#ffc82c]"
                  overlayColor="text-[#13b3a3]"
                  fontSize="text-[clamp(2.4rem,4vw,3rem)]"
                  letterDelay={0.04}
                />
                <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.1rem" }}>Pergola, Rolling Roof, BioClimatic, CamTavan, ZipPerde ve tente ölçülerinizi girin, profesyonel restorasyon maliyetini görün.</p>

                {/* Trust Badges */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, margin: "20px 0" }}>
                  {[
                    { icon: "⚡", label: "Hızlı Teknik Servis" },
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
              <RevealText
                text="TEKNİK UYGULAMA SÜRECİMİZ"
                textColor="text-[#0e1b3f]"
                overlayColor="text-[#13b3a3]"
                fontSize="text-[clamp(2.4rem,4vw,4.5rem)]"
                letterDelay={0.04}
              />
              <p className="lead">5 Adımda Profesyonel Dış Mekan Bakımı ve Restorasyonu</p>
            </div>

            <div className="grid process-grid">
              {[
                ["Talep & Randevu", "WhatsApp veya form üzerinden gelen talepleriniz için hızla randevu oluşturulur."],
                ["Teknik Analiz & Keşif", "Saha ekibimiz kumaş tipini, kirlilik seviyesini ve mekanizma durumunu yerinde analiz eder."],
                ["Profesyonel Uygulama", "pH dengeli solüsyonlar ve kontrollü tekniklerle sisteminiz zarar görmeden restore edilir."],
                ["Kalite Kontrol", "Yapılan işlemlerin kumaş dokusu ve mekanizma üzerindeki etkisi son kez kontrol edilir."],
                ["Güvenle Teslim", "Sisteminiz premium görünümüne kavuşmuş şekilde, bakım önerileriyle birlikte teslim edilir."]
              ].map(([title, text], index) => (
                <div key={title} className="process-card">
                  <div className="process-number">{index + 1}</div>
                  <h3>{title}</h3>
                  <p className="form-note">{text}</p>
                </div>
              ))}
            </div>

            <div style={{ textAlign: "center", marginTop: 30 }}>
              <a className="btn btn-primary" href="https://wa.me/905367731404" target="_blank">Teknik Destek Alın</a>
            </div>
          </div>
        </section>

        <section id="portfolio" className="section" style={{ background: "#f8fafc" }}>
          <div className="container">
            <div className="portfolio-top">
              <div className="section-title-wrap">
                <span className="eyebrow">Referans İşlerimiz</span>
                <RevealText
                  text="TAMAMLANAN PROJELER"
                  textColor="text-[#0e1b3f]"
                  overlayColor="text-[#13b3a3]"
                  fontSize="text-[clamp(2.4rem,4vw,4.5rem)]"
                  letterDelay={0.04}
                />
                <p className="lead" style={{ fontWeight: 800, fontSize: "1.2rem", color: "var(--brand-dark)" }}>Restorasyon Portfolyomuzu İnceleyin</p>
              </div>
            </div>

            <div className="grid portfolio-grid">
              {projects.map((project, index) => (
                <article key={project.title} className="hover-showcase">
                  <div className="project-cover">
                    <Image
                      src={`/assets/${project.image}`}
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
                  <span className="eyebrow" style={{ background: "rgba(66,133,244,.16)", color: "#285db5" }}>Hızlı Analiz</span>
                  <h2 className="heading-md">Sistem Fotoğraflarınızı Gönderin</h2>
                  <p className="form-note">Ön teknik analiz için görsel yükleyin, keşif öncesi daha sağlıklı fiyatlandırma yapalım.</p>
                </div>
                <LeadForm
                  endpoint="/api/lead/photo"
                  submitLabel="Analiz Talebi Gönder"
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
                  <span className="eyebrow" style={{ background: "rgba(34,197,94,.16)", color: "#198a43" }}>Teknik Randevu</span>
                  <h2 className="heading-md">Keşif Randevusu Oluşturun</h2>
                  <p className="form-note">Yerinde teknik analiz ve ölçüm için uygun tarih belirleyin.</p>
                </div>
                <LeadForm
                  endpoint="/api/lead/appointment"
                  submitLabel="Randevu Talebi"
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
              <span className="eyebrow" style={{ background: "rgba(34,197,94,.14)", color: "#15803d" }}>Uzman Rehberi</span>
              <RevealText
                text="TEKNİK İPUÇLARI & BAKIM REHBERLERİ"
                textColor="text-[#0e1b3f]"
                overlayColor="text-[#13b3a3]"
                fontSize="text-[clamp(2.4rem,4vw,4.5rem)]"
                letterDelay={0.04}
              />
            </div>

            <div className="blog-feature">
              <article className="card blog-feature-card">
                <div className="cover cover-tall" style={{ position: "relative", width: "100%", height: "100%", minHeight: "300px" }}>
                  <Image
                    src="/assets/hero1.jpeg"
                    alt="Pergola Bakım ve Restorasyon Uzman Rehberi"
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
                  <span className="eyebrow">Bakım + Teknik Çözüm</span>
                  <h3 className="heading-md">Tente Ömrünü 2 Katına Çıkaran 5 Bakım İpucu</h3>
                  <p className="lead" style={{ fontSize: ".98rem" }}>
                    Teknik kumaşın ömrünü artıran rutin uygulama, is-duman arındırma, UV etkisini azaltan koruma ve doğru teknik seçimi.
                  </p>
                  <p className="form-note">15 Mart 2026 · 6 dk okuma</p>
                  <Link href="/blog" style={{ color: "#0b857d", fontWeight: 700 }}>Devamını Oku →</Link>
                </div>
              </article>
            </div>

            <div className="grid blog-grid">
              {blogPosts.map((post, index) => (
                <article key={post} className="card blog-card">
                  <div className="cover" style={{ position: "relative", width: "100%", minHeight: "200px" }}>
                    <Image
                      src={`/assets/${["blog-pergola-1.jpg", "blog-bioclimatic-1.jpg", "blog-zipperde-1.jpg", "blog-pergola-2.jpg", "blog-bioclimatic-2.jpg", "blog-zipperde-2.jpg"][index]}`}
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
                    <p className="form-note">Teknik inceleme ve bakım notları.</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-tight">
          <div className="container">
            <div className="section-title-wrap" style={{ textAlign: "center", margin: "0 auto 30px" }}>
              <RevealText
                text="MÜŞTERİ YORUMLARI"
                textColor="text-[#0e1b3f]"
                overlayColor="text-[#13b3a3]"
                fontSize="text-[clamp(2.4rem,4vw,4.5rem)]"
                letterDelay={0.04}
              />
            </div>
            <div className="grid testimonial-grid">
              {[
                "Restoran pergola kumaşımızı değiştirmek yerine restore ettirdik. Hem iş kaybımız azaldı hem ciddi tasarruf ettik.",
                "Zip perde ve LED bakım süreci teknik düzeyde ilerledi. Hızlı, düzenli ve güven veren bir ekipti.",
                "Kumaş değişimi yerine profesyonel restorasyon kararı işletme için çok daha mantıklı çıktı. Sonuç beklentimizin üstündeydi."
              ].map((quote, index) => (
                <article key={quote} className="card testimonial">
                  <div style={{ color: "#f59e0b", fontSize: 22 }}>★★★★★</div>
                  <p className="lead" style={{ fontSize: ".98rem" }}>{quote}</p>
                  <strong>{["Mehmet Yılmaz", "Ayşe Demir", "Can Öztürk"][index]}</strong>
                  <p className="form-note">{["Çankaya, Ankara", "Keçiören, Ankara", "Yenimahalle, Ankara"][index]}</p>
                </article>
              ))}
            </div>

            <div style={{ textAlign: "center", marginTop: 42 }}>
              <h3 className="heading-md">Instagram&apos;da Bizi Takip Edin</h3>
              <InstagramSlider />
              <div style={{ marginTop: 18 }}>
                <a className="btn btn-secondary" href="https://www.instagram.com/pergoclean.tr" target="_blank" rel="noopener noreferrer">Instagram&apos;da Takip Et</a>
              </div>
            </div>
          </div>
        </section>

        <section id="sss" className="section">
          <div className="container" style={{ maxWidth: 860 }}>
            <div className="section-title-wrap" style={{ margin: "0 auto", textAlign: "center" }}>
              <RevealText
                text="SIK SORULAN SORULAR"
                textColor="text-[#0e1b3f]"
                overlayColor="text-[#13b3a3]"
                fontSize="text-[clamp(2.4rem,4vw,4.5rem)]"
                letterDelay={0.04}
              />
              <p className="lead">Teknik süreçler ve bakım hakkında merak edilenler.</p>
            </div>

            <div className="faq-list">
              {faqs.map(([question, answer]) => (
                <details key={question} className="card faq-item">
                  <summary style={{ fontWeight: 700, cursor: "pointer" }}>{question}</summary>
                  <p className="form-note" style={{ marginTop: 12 }}>{answer}</p>
                </details>
              ))}
            </div>

            <div className="card" style={{ marginTop: 32, padding: "34px 32px", background: "linear-gradient(135deg, #f0fdf4, #dcfce7)", border: "1px solid rgba(34,197,94,.25)", textAlign: "center" }}>
              <div style={{ color: "#f59e0b", fontSize: 32, marginBottom: 12 }}>★★★★★</div>
              <h3 className="heading-md" style={{ marginBottom: 12 }}>Deneyiminizi paylaşın! Google&apos;da yorum bırakın.</h3>
              <p className="form-note" style={{ marginBottom: 20 }}>Geri bildirimleriniz gelişimimiz için çok değerli.</p>
              <a
                className="btn btn-primary"
                href="https://g.page/r/Cdf_vvn-fscdEAg/review"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google&apos;da Yorum Yaz →
              </a>
            </div>
          </div>
        </section>

        <section id="iletisim" className="section">
          <div className="container">
            <div className="section-title-wrap" style={{ textAlign: "center", margin: "0 auto" }}>
              <RevealText
                text="HEMEN BAŞLAYALIM"
                textColor="text-[#0e1b3f]"
                overlayColor="text-[#13b3a3]"
                fontSize="text-[clamp(2.4rem,4vw,4.5rem)]"
                letterDelay={0.04}
              />
              <p className="lead">Bugün uzman ekibimizle iletişime geçin; teknik analiz sürecini başlatalım.</p>
            </div>

            <div className="btn-row" style={{ justifyContent: "center", marginTop: 24 }}>
              <a className="btn btn-primary" href={`tel:${siteConfig.phonePrimary.replace(/\s+/g, "")}`}>{siteConfig.phonePrimary} (Teknik Destek)</a>
              <a className="btn btn-primary" href={`tel:${siteConfig.phoneSecondary.replace(/\s+/g, "")}`}>{siteConfig.phoneSecondary} (Teknik Destek)</a>
              <a className="btn btn-secondary" href="https://wa.me/905367731404" target="_blank">WhatsApp Uzman Hattı</a>
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
                    { name: "konu", label: "Konu", required: true, options: ["Restorasyon Talebi", "Teknik Randevu", "LED Bakımı", "Kurumsal Proje", "Genel Bilgi"] },
                    { name: "mesaj", label: "Mesajınız", type: "textarea", required: true }
                  ]}
                />
              </article>

              <article className="card soft-panel">
                <h3 className="heading-md">İletişim Bilgileri</h3>
                <p className="lead">{siteConfig.address}</p>
                <p><strong>Teknik WhatsApp:</strong> {siteConfig.phonePrimary}</p>
                <p><strong>Teknik WhatsApp:</strong> {siteConfig.phoneSecondary}</p>
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
