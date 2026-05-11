"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password })
      });
      
      const data = await res.json();
      
      if (res.ok) {
        router.push("/portal");
        router.refresh();
      } else {
        setError(data.message || "Giriş başarısız.");
      }
    } catch (err) {
      setError("Bir hata oluştu.");
    } finally {
      setIsLoading(false);
    }
  }

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
              disabled={isLoading}
            />
          </label>
          {error && <p style={{ color: "#dc2626", fontSize: ".9rem" }}>{error}</p>}
          <button className="btn btn-primary" type="submit" disabled={isLoading}>
            {isLoading ? "Giriş Yapılıyor..." : "Giriş Yap"}
          </button>
        </form>
      </div>
    </main>
  );
}
