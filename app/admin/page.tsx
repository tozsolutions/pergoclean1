"use client";

import { useState } from "react";

const ENV_VARS = [
  { key: "QUOTE_WEBHOOK_URL", label: "Fiyat Teklifi Webhook URL", desc: "Fiyat hesaplama formu n8n webhook" },
  { key: "APPOINTMENT_WEBHOOK_URL", label: "Randevu Webhook URL", desc: "Randevu formu n8n webhook" },
  { key: "PHOTO_WEBHOOK_URL", label: "Fotoğraf Webhook URL", desc: "Fotoğraf gönderme formu n8n webhook" },
  { key: "CONTACT_WEBHOOK_URL", label: "İletişim Webhook URL", desc: "İletişim formu n8n webhook" },
  { key: "NOTIFICATION_EMAIL", label: "Bildirim E-postası", desc: "Form bildirimleri için e-posta adresi" },
  { key: "WHATSAPP_PRIMARY", label: "WhatsApp Birincil", desc: "Ana WhatsApp numarası (90 ile başlayan)" },
  { key: "WHATSAPP_SECONDARY", label: "WhatsApp İkincil", desc: "İkinci WhatsApp numarası" },
];

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState("");

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    // Basit istemci taraflı koruma - gerçek üretim için middleware eklenebilir
    if (password === "pergoclean-admin-2024") {
      setAuthenticated(true);
      setError("");
    } else {
      setError("Hatalı şifre. Lütfen tekrar deneyin.");
    }
  }

  if (!authenticated) {
    return (
      <main className="section" style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div className="card" style={{ padding: 40, maxWidth: 400, width: "100%" }}>
          <h1 className="heading-md" style={{ textAlign: "center", marginBottom: 8 }}>🔒 Admin Paneli</h1>
          <p className="form-note" style={{ textAlign: "center", marginBottom: 24 }}>Bu alan sadece yetkili kullanıcılara açıktır.</p>
          <form onSubmit={handleLogin} style={{ display: "grid", gap: 14 }}>
            <label>
              <span style={{ display: "block", fontWeight: 700, marginBottom: 8 }}>Şifre</span>
              <input
                className="input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Admin şifresini girin"
                required
              />
            </label>
            {error && <p style={{ color: "#dc2626", fontSize: ".9rem" }}>{error}</p>}
            <button className="btn btn-primary" type="submit">Giriş Yap</button>
          </form>
        </div>
      </main>
    );
  }

  return (
    <main className="section">
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
          <div>
            <span className="eyebrow">Admin Paneli</span>
            <h1 className="heading-lg" style={{ marginTop: 10 }}>Sistem Yönetimi</h1>
          </div>
          <button className="btn btn-secondary" onClick={() => setAuthenticated(false)}>Çıkış Yap</button>
        </div>

        <div className="grid" style={{ gap: 24, gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
          <div className="card" style={{ padding: 28 }}>
            <h2 className="heading-md" style={{ marginBottom: 16 }}>🔗 Webhook Yapılandırması</h2>
            <p className="form-note" style={{ marginBottom: 20 }}>
              Aşağıdaki değişkenleri Vercel Dashboard → Settings → Environment Variables bölümünde tanımlayın.
            </p>
            <div style={{ display: "grid", gap: 12 }}>
              {ENV_VARS.map(({ key, label, desc }) => (
                <div key={key} style={{ padding: "12px 16px", background: "#f8fafc", borderRadius: 12, border: "1px solid #e2e8f0" }}>
                  <strong style={{ display: "block", fontSize: ".9rem", color: "#0f172a" }}>{label}</strong>
                  <code style={{ display: "block", fontSize: ".8rem", color: "#6366f1", marginTop: 4 }}>{key}</code>
                  <p className="form-note" style={{ marginTop: 4 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card" style={{ padding: 28 }}>
            <h2 className="heading-md" style={{ marginBottom: 16 }}>📋 Deploy Kontrol Listesi</h2>
            <div style={{ display: "grid", gap: 10 }}>
              {[
                ["✅", "Next.js 15 + TypeScript kurulumu"],
                ["✅", "API route'ları (4 form endpoint)"],
                ["✅", "n8n webhook entegrasyonu"],
                ["✅", "SEO meta + JSON-LD schema"],
                ["✅", "Vercel deploy yapılandırması"],
                ["✅", "Environment variable şablonu (.env.example)"],
                ["⚙️", "Vercel'de ENV değişkenlerini tanımla"],
                ["⚙️", "n8n workflow'larını kur"],
                ["⚙️", "WhatsApp Business API bağla"],
                ["⚙️", "Google Analytics ekle"],
                ["⚙️", "Gerçek fotoğrafları /public/assets/ klasörüne yükle"],
              ].map(([icon, text]) => (
                <div key={text} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: ".9rem" }}>
                  <span>{icon}</span><span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="card" style={{ padding: 28 }}>
            <h2 className="heading-md" style={{ marginBottom: 16 }}>🤖 n8n Otomasyon Akışları</h2>
            <div style={{ display: "grid", gap: 14 }}>
              {[
                { icon: "💬", title: "WhatsApp Otomasyonu", items: ["Form gönderiminde müşteriye otomatik mesaj", "Randevu hatırlatma (24 saat önce)", "Teklif bildirim mesajı"] },
                { icon: "📧", title: "E-posta Otomasyonu", items: ["Fiyat teklifi PDF gönderimi", "Randevu onay e-postası", "Teşekkür ve takip mesajı"] },
                { icon: "📱", title: "Instagram / CRM", items: ["Lead bilgilerini CRM'e kaydet", "Instagram DM takip mesajı", "Takipçi segmentasyonu"] },
              ].map(({ icon, title, items }) => (
                <div key={title} style={{ padding: "14px", background: "#f8fafc", borderRadius: 12 }}>
                  <strong style={{ display: "block", marginBottom: 8 }}>{icon} {title}</strong>
                  {items.map((item) => (
                    <p key={item} className="form-note" style={{ margin: "2px 0" }}>• {item}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="card" style={{ padding: 28 }}>
            <h2 className="heading-md" style={{ marginBottom: 16 }}>🌐 Hızlı Bağlantılar</h2>
            <div style={{ display: "grid", gap: 10 }}>
              {[
                ["Vercel Dashboard", "https://vercel.com/dashboard"],
                ["n8n Arayüzü", "https://n8n.io"],
                ["Google Search Console", "https://search.google.com/search-console"],
                ["Instagram @pergoclean.tr", "https://instagram.com/pergoclean.tr"],
                ["WhatsApp Business", "https://business.whatsapp.com"],
                ["Google İşletme Profili", "https://business.google.com"],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ justifyContent: "flex-start", borderRadius: 10, minHeight: 40 }}
                >
                  {label} →
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
