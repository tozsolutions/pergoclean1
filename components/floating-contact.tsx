"use client";

export function FloatingContact() {
  return (
    <>
      {/* Floating WhatsApp + Call buttons — desktop/tablet */}
      <div className="float-contact" aria-label="Hızlı iletişim">
        <a
          href="https://wa.me/905367731404"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp ile ulaş"
          className="float-wa"
        >
          <span className="float-icon">💬</span>
          <span className="float-label">WhatsApp</span>
        </a>
        <a
          href="tel:+905367731404"
          aria-label="Telefon ile ara"
          className="float-call"
        >
          <span className="float-icon">📞</span>
          <span className="float-label">Ara</span>
        </a>
      </div>

      {/* Sticky Mobile CTA — mobile only, iOS safe-area aware */}
      <div className="sticky-mobile-cta" role="complementary" aria-label="Mobil hızlı teklif">
        <a href="#fiyat-hesapla" className="sticky-cta-btn sticky-cta-quote">
          📋 Analiz & Teklif Al
        </a>
        <a
          href="https://wa.me/905367731404"
          target="_blank"
          rel="noopener noreferrer"
          className="sticky-cta-btn sticky-cta-wa"
        >
          💬 WhatsApp
        </a>
      </div>
    </>
  );
}
