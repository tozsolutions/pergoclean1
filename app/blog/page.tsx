import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FloatingContact } from "@/components/floating-contact";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | PergoClean Uzman Rehberleri",
  description: "Pergola temizliği, bakımı ve restorasyonu hakkında en güncel uzman rehberleri ve SEO odaklı ipuçları.",
};

const blogPosts = [
  {
    title: "Premium Pergola Bakım ve Restorasyon Rehberi",
    slug: "premium-pergola-bakim-rehberi",
    description: "Sistem ömrünü uzatan, premium görünümü koruyan profesyonel bakım teknikleri.",
    date: "12 Mayıs 2026",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
    tag: "Uzman Rehberi"
  },
  {
    title: "Pergola Temizliği Ne Sıklıkla Yapılmalı?",
    slug: "pergola-temizlik-sikligi",
    description: "Mekan tipine ve dış ortam kirliliğine göre ideal temizlik periyotları.",
    date: "10 Mayıs 2026",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80",
    tag: "Bakım"
  },
  {
    title: "ZipPerde Sistemlerinde Güneş Işığı ve UV Koruması",
    slug: "zipperde-uv-korumasi",
    description: "UV ışınlarının kumaş üzerindeki etkileri ve profesyonel koruma yöntemleri.",
    date: "5 Mayıs 2026",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=600&q=80",
    tag: "Teknik"
  }
];

export default function BlogPage() {
  return (
    <>
      <SiteHeader />
      <main className="section" style={{ paddingTop: 120 }}>
        <div className="container">
          <header className="section-title-wrap" style={{ marginBottom: 56 }}>
            <span className="eyebrow">PergoClean Blog</span>
            <h1 className="heading-lg">Uzman İpuçları & Bakım Rehberleri</h1>
            <p className="lead">
              Ankara ve Antalya odaklı profesyonel pergola, tente ve zip perde sistemleri için 
              hazırladığımız güncel rehberleri keşfedin.
            </p>
          </header>

          <div className="grid blog-grid">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="card blog-card" style={{ textDecoration: "none", color: "inherit" }}>
                <div className="cover" style={{ position: "relative", width: "100%", height: 240 }}>
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill 
                    style={{ objectFit: "cover" }}
                    loading="lazy"
                  />
                  <div style={{ position: "absolute", top: 14, left: 14 }}>
                    <span className="badge" style={{ background: "rgba(255,255,255,0.9)", color: "var(--brand-dark)" }}>{post.tag}</span>
                  </div>
                </div>
                <div className="blog-content" style={{ padding: 24 }}>
                  <p className="form-note" style={{ margin: 0 }}>{post.date}</p>
                  <h3 className="heading-md" style={{ marginTop: 12, marginBottom: 12 }}>{post.title}</h3>
                  <p className="form-note" style={{ color: "var(--muted)" }}>{post.description}</p>
                  <span style={{ color: "var(--brand-dark)", fontWeight: 700, fontSize: "0.9rem" }}>Devamını Oku →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
      <FloatingContact />
    </>
  );
}
