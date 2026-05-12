import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FloatingContact } from "@/components/floating-contact";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Pergola Bakım ve Restorasyon Rehberi | PergoClean",
  description: "Pergola, tente ve zip perde sistemlerinde profesyonel bakım, temizlik ve restorasyon süreçleri hakkında kapsamlı uzman rehberi.",
  alternates: { canonical: "/blog/premium-pergola-bakim-rehberi" }
};

export default function PremiumGuidePage() {
  return (
    <>
      <SiteHeader />
      <main className="section" style={{ paddingTop: 120 }}>
        <article className="container" style={{ maxWidth: 900 }}>
          <header className="section-title-wrap" style={{ marginBottom: 48 }}>
            <span className="eyebrow" style={{ background: "rgba(19,179,163,.14)", color: "#0b857d" }}>Uzman Rehberi</span>
            <h1 className="heading-xl">PERGOCLEAN PREMIUM PERGOLA BAKIM VE RESTORASYON REHBERİ</h1>
            <p className="lead">Pergola sistemlerinizi ilk günkü premium görünümüne kavuşturmanın ve ömrünü uzatmanın profesyonel yolları.</p>
          </header>

          <div className="card" style={{ position: "relative", width: "100%", aspectRatio: "21/9", borderRadius: 24, overflow: "hidden", marginBottom: 48 }}>
            <Image 
              src="/assets/hero2.jpeg" 
              alt="Premium Pergola ve Tente Sistemleri Profesyonel Bakım Rehberi" 
              fill 
              style={{ objectFit: "cover" }}
              priority
            />
          </div>

          <div className="blog-rich-content" style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "var(--text)" }}>
            <h2 className="heading-md">PERGOLA SİSTEMLERİNDE BAKIM VE ONARIM</h2>
            <p>
              Pergola sistemleri yalnızca gölgelendirme çözümü değildir. Özellikle Ankara gibi yoğun güneş, rüzgar, egzoz, polen ve ani hava değişimlerinin yaşandığı bölgelerde; pergola, tente ve zip perde sistemleri düzenli bakım ister.
            </p>
            <p><strong>Düzenli bakım yapılmayan sistemlerde:</strong></p>
            <ul>
              <li>Blackout kumaşlarda sararma</li>
              <li>Su tahliye sorunları</li>
              <li>Ray sistemlerinde zorlanma</li>
              <li>Motor arızaları</li>
              <li>LED performans kaybı</li>
              <li>Sigara isi ve yağ tabakası birikimi</li>
              <li>Premium mekan algısında düşüş</li>
            </ul>
            
            <p>
              PergoClean yaklaşımında amaç yalnızca yüzey temizliği değildir. 
              <strong>Hedefimiz:</strong> kumaşı sertleştirmeden bakım yapmak, su iticiliği korumak, kumaş ömrünü uzatmak ve mekana ilk günkü premium görünümünü geri kazandırmaktır.
            </p>

            <hr style={{ margin: "40px 0", border: 0, borderTop: "1px solid var(--line)" }} />

            <h2 className="heading-md">TEMİZLİK VE BAKIM İŞLEMLERİ</h2>
            <p>
              Pergola üst örtüleri, tente kumaşları, zip perdeler, oluk sistemleri ve taşıyıcı profiller düzenli aralıklarla kontrol edilmelidir. 
              Özellikle <strong>Çankaya, Yaşamkent, Ümitköy, Bilkent, İncek, Gölbaşı, Batıkent, Eryaman, Oran ve Kızılay</strong> gibi yoğun kullanım bölgelerinde dış ortam kirliliği daha hızlı birikir.
            </p>
            <p>Bu süreçte şu yöntemler hayati önem taşır:</p>
            <ul>
              <li>pH dengeli profesyonel bakım ürünleri</li>
              <li>Kontrollü buharlı uygulamalar</li>
              <li>Düşük basınçlı yüzey temizliği</li>
              <li>Mikrofiber destekli kir toplama</li>
              <li>Profesyonel kurutma süreçleri</li>
            </ul>

            <h2 className="heading-md">PERGOLA KUMAŞLARINDA SARARMA VE İS TABAKASI</h2>
            <p>
              Blackout pergola kumaşları zamanla sigara isi, egzoz, yağ buharı, polen ve UV etkisi nedeniyle sararabilir. Bu durum mekanın marka algısını aşağı çeker. 
              Özellikle cafe, restoran ve otel gibi yoğun kullanım alanlarında bu problem daha hızlı oluşur.
            </p>

            <h2 className="heading-md">ZIP PERDE VE RAY SİSTEMİ BAKIMI</h2>
            <p>
              Zip perde sistemleri toz, yağmur, çamur ve polen nedeniyle raylarda sürtünme oluşturabilir. Ray içlerinde biriken kir motor zorlanmasına ve kumaş çizgilenmesine neden olur. 
              Bu nedenle silikon bazlı profesyonel bakım ve düzenli mekanizma testi yapılmalıdır.
            </p>

            <h2 className="heading-md">MEKANİK VE MOTORLU SİSTEM KONTROLLERİ</h2>
            <p>
              Motor performansı, uzaktan kumanda sistemi, sensörler ve LED aydınlatmalar düzenli kontrol edilmelidir. 
              Gevşeyen bağlantılar zamanla ses, sürtünme ve yapısal deformasyon oluşturabilir.
            </p>

            <div className="card" style={{ padding: 32, background: "var(--deep)", color: "white", marginTop: 40 }}>
              <h3 className="heading-md" style={{ color: "var(--accent)" }}>Ücretsiz Keşif ve Analiz</h3>
              <p>Pergola sisteminizin ömrünü uzatmak ve marka algınızı korumak için profesyonel bakım büyük önem taşır.</p>
              <a className="btn btn-accent" href="https://wa.me/905367731404" target="_blank" style={{ marginTop: 20 }}>
                WhatsApp Destek Hattı →
              </a>
            </div>
          </div>
        </article>
      </main>
      <SiteFooter />
      <FloatingContact />
    </>
  );
}
