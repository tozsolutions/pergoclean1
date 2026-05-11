"use client";

import { useState } from "react";
import { pricing } from "@/lib/site";

export function PricingCalculator({ endpoint }: { endpoint: string }) {
  const [systemType, setSystemType] = useState("");
  const [packageType, setPackageType] = useState("eco");
  const [m2, setM2] = useState<number | "">("");
  const [adSoyad, setAdSoyad] = useState("");
  const [telefon, setTelefon] = useState("");
  const [email, setEmail] = useState("");
  
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const needsPackage = systemType === "pergola";
  const showPriceInfo = ["cam_tavan", "gunes_paneli"].includes(systemType);

  let calculatedPrice: number | null = null;
  if (!showPriceInfo && m2 && typeof m2 === "number" && m2 > 0) {
    if (systemType === "pergola") {
      const p = packageType === "eco" ? pricing.pergola.eco : pricing.pergola.plus;
      calculatedPrice = m2 <= p.threshold ? p.base : m2 * p.perM2;
    } else if (systemType === "zip") {
      calculatedPrice = m2 <= pricing.zip.threshold ? pricing.zip.base : m2 * pricing.zip.perM2;
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    // Create a form data object based on inputs
    const payload: any = {
      sistemTipi: systemType,
      paketTipi: needsPackage ? packageType : "N/A",
      metrekare: m2 || "N/A",
      adSoyad,
      telefon,
      email,
      hesaplananFiyat: calculatedPrice ? `${calculatedPrice} TL` : "Fiyat Alınız"
    };

    // Include honeypot field value by creating a hidden ref or directly attaching it
    // Wait, the honeypot is naturally picked up if it's in the form.
    const formElement = e.target as HTMLFormElement;
    const formData = new FormData(formElement);
    payload._honey = formData.get("_honey");

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || "Gönderim başarısız.");
      setMessage("Talebiniz alındı. WhatsApp veya E-posta üzerinden detaylı teklifiniz iletilecektir.");
      
      // reset form mostly
      setM2("");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Bir hata oluştu.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="card price-form" style={{ padding: 34, background: "rgba(255,255,255,.90)" }}>
      <form onSubmit={handleSubmit} className="grid" style={{ gap: 16 }}>
        <label>
          <span style={{ display: "block", marginBottom: 8, fontWeight: 700 }}>Sistem Tipi</span>
          <select className="select" required value={systemType} onChange={(e) => setSystemType(e.target.value)}>
            <option value="" disabled>Seçiniz...</option>
            <option value="pergola">Pergola / Tente / BioClimatic / RollingRoof</option>
            <option value="zip">ZipPerde / Wintent</option>
            <option value="cam_tavan">Cam Tavan / Tavan Zip</option>
            <option value="gunes_paneli">Güneş Paneli</option>
          </select>
        </label>

        {needsPackage && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <label style={{ 
              border: `2px solid ${packageType === "eco" ? "var(--brand)" : "var(--line)"}`, 
              padding: 12, borderRadius: 12, cursor: "pointer", background: packageType === "eco" ? "rgba(19,179,163,.05)" : "white" 
            }}>
              <input 
                type="radio" name="package" value="eco" 
                checked={packageType === "eco"} 
                onChange={() => setPackageType("eco")} 
                style={{ display: "none" }} 
              />
              <strong style={{ display: "block", color: "var(--brand-dark)" }}>ECO Paket</strong>
              <span className="form-note" style={{ fontSize: "0.8rem" }}>Hafif kir, toz, rutin bakım.</span>
            </label>
            <label style={{ 
              border: `2px solid ${packageType === "plus" ? "var(--accent)" : "var(--line)"}`, 
              padding: 12, borderRadius: 12, cursor: "pointer", background: packageType === "plus" ? "rgba(255,177,26,.05)" : "white" 
            }}>
              <input 
                type="radio" name="package" value="plus" 
                checked={packageType === "plus"} 
                onChange={() => setPackageType("plus")} 
                style={{ display: "none" }} 
              />
              <strong style={{ display: "block", color: "#a96f00" }}>PLUS Paket</strong>
              <span className="form-note" style={{ fontSize: "0.8rem" }}>Ağır kir, yıllanmış, yağ, is.</span>
            </label>
          </div>
        )}

        {!showPriceInfo && systemType !== "" && (
          <label>
            <span style={{ display: "block", marginBottom: 8, fontWeight: 700 }}>Toplam Alan (m²)</span>
            <input 
              className="input" type="number" min="1" required 
              value={m2} onChange={(e) => setM2(e.target.value ? Number(e.target.value) : "")} 
              placeholder="Örn: 25"
            />
          </label>
        )}

        {calculatedPrice !== null && !showPriceInfo && (
          <div style={{ padding: 18, background: "rgba(19,179,163,.1)", borderRadius: 12, textAlign: "center" }}>
            <span className="eyebrow" style={{ background: "transparent", color: "var(--brand-dark)", padding: 0 }}>Tahmini Tutar</span>
            <div style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--text)", lineHeight: 1, marginTop: 8 }}>
              {calculatedPrice.toLocaleString("tr-TR")} TL
            </div>
            {systemType === "pergola" && packageType === "eco" && (m2 as number) <= 15 && <span className="form-note">0-15 m² arası sabit ECO fiyatı</span>}
            {systemType === "pergola" && packageType === "plus" && (m2 as number) <= 15 && <span className="form-note">0-15 m² arası sabit PLUS fiyatı</span>}
            {systemType === "zip" && (m2 as number) <= 10 && <span className="form-note">0-10 m² arası sabit fiyat</span>}
          </div>
        )}

        {showPriceInfo && (
          <div style={{ padding: 18, background: "rgba(31,41,55,.05)", borderRadius: 12, textAlign: "center" }}>
            <div style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--text)", lineHeight: 1 }}>Fiyat Alınız</div>
            <span className="form-note">Bu sistem için keşif yapılarak özel fiyat verilmektedir.</span>
          </div>
        )}

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 14, marginTop: 8 }}>
          <label>
            <span style={{ display: "block", marginBottom: 6, fontWeight: 700, fontSize: "0.9rem" }}>Adınız Soyadınız</span>
            <input className="input" type="text" required value={adSoyad} onChange={e => setAdSoyad(e.target.value)} />
          </label>
          <label>
            <span style={{ display: "block", marginBottom: 6, fontWeight: 700, fontSize: "0.9rem" }}>Telefon</span>
            <input className="input" type="tel" required value={telefon} onChange={e => setTelefon(e.target.value)} />
          </label>
          <label>
            <span style={{ display: "block", marginBottom: 6, fontWeight: 700, fontSize: "0.9rem" }}>E-posta (İsteğe Bağlı)</span>
            <input className="input" type="email" value={email} onChange={e => setEmail(e.target.value)} />
          </label>
        </div>

        <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

        <button className="btn btn-accent" type="submit" disabled={isLoading} style={{ marginTop: 10, minHeight: 56, fontSize: "1.1rem" }}>
          {isLoading ? "Hesaplanıyor..." : "Fiyat Teklifi Al"}
        </button>
        <p className="form-note" style={{ textAlign: "center" }}>
          n8n otomasyonu ile anında WhatsApp ve e-posta fiyat teklifi akışı.
        </p>
        {message && (
          <div style={{ padding: 14, background: message.includes("hata") ? "#fee2e2" : "#dcfce7", color: message.includes("hata") ? "#991b1b" : "#166534", borderRadius: 12, fontWeight: 500, textAlign: "center" }}>
            {message}
          </div>
        )}
      </form>
    </div>
  );
}
