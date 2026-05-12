import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FloatingContact } from "@/components/floating-contact";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { blogs } from "@/lib/blogs";

export const metadata: Metadata = {
  title: "Blog | PergoClean Uzman Rehberleri",
  description: "Pergola temizliği, bakımı ve restorasyonu hakkında en güncel uzman rehberleri, Ankara GEO SEO odaklı ipuçları.",
};

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
              Ankara ve tüm ilçeleri için profesyonel pergola, tente ve zip perde sistemleri hakkında 
              detaylı restorasyon ve hijyen rehberleri.
            </p>
          </header>

          <div className="grid blog-grid">
            {blogs.map((post) => (
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
                    <span className="badge" style={{ background: "rgba(255,255,255,0.9)", color: "var(--brand-dark)" }}>{post.category}</span>
                  </div>
                </div>
                <div className="blog-content" style={{ padding: 24 }}>
                  <p className="form-note" style={{ margin: 0 }}>{post.date} • {post.author}</p>
                  <h3 className="heading-md" style={{ marginTop: 12, marginBottom: 12, fontSize: "1.2rem" }}>{post.title}</h3>
                  <p className="form-note" style={{ color: "var(--muted)", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                    {post.excerpt}
                  </p>
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
