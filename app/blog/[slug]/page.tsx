import { blogs } from "@/lib/blogs";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FloatingContact } from "@/components/floating-contact";
import { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogs.find((b) => b.slug === slug);
  if (!post) return {};

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords.join(", "),
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      images: [post.image],
      type: "article",
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogs.find((b) => b.slug === slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.metaDescription,
        "image": post.image,
        "author": {
          "@type": "Organization",
          "name": post.author
        },
        "publisher": {
          "@type": "Organization",
          "name": "PergoClean",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.pergoclean.com.tr/assets/logo.png"
          }
        },
        "datePublished": "2026-05-12",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://www.pergoclean.com.tr/blog/${post.slug}`
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": post.faqs.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Ana Sayfa",
            "item": "https://www.pergoclean.com.tr"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": "https://www.pergoclean.com.tr/blog"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": post.title,
            "item": `https://www.pergoclean.com.tr/blog/${post.slug}`
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main className="section" style={{ paddingTop: 120 }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <header style={{ marginBottom: 40 }}>
            <span className="eyebrow">{post.category}</span>
            <h1 className="heading-lg" style={{ marginTop: 16 }}>{post.title}</h1>
            <div style={{ display: "flex", gap: 16, color: "var(--muted)", fontSize: "0.9rem", marginTop: 16 }}>
              <span>Yazar: <strong>{post.author}</strong></span>
              <span>•</span>
              <span>{post.date}</span>
            </div>
          </header>

          <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", borderRadius: 24, overflow: "hidden", marginBottom: 40 }}>
            <Image 
              src={post.image} 
              alt={post.title} 
              fill 
              style={{ objectFit: "cover" }}
              priority
            />
          </div>

          <div 
            className="blog-content-rich lead" 
            style={{ color: "var(--text)", maxWidth: "100%" }}
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />

          <div id="featured-snippet-container" className="card" style={{ marginTop: 56, padding: 32, background: "linear-gradient(135deg, #f8fbff, #f0f7ff)", border: "1px solid var(--line)" }}>
            <h3 className="heading-md" style={{ fontSize: "1.1rem", marginBottom: 12 }}>Özet (AI Overview - Snippet)</h3>
            <p className="lead" style={{ fontSize: "1.1rem", fontStyle: "italic", borderLeft: "4px solid var(--brand)", paddingLeft: 20 }}>{post.snippet}</p>
          </div>

          <section style={{ marginTop: 56 }}>
            <h3 className="heading-md">Sıkça Sorulan Sorular</h3>
            <div className="faq-list">
              {post.faqs.map((faq, i) => (
                <div key={i} className="card faq-item" style={{ marginBottom: 16, padding: 20 }}>
                  <strong style={{ display: "block", marginBottom: 8 }}>{faq.q}</strong>
                  <p className="form-note" style={{ margin: 0 }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="card" style={{ marginTop: 64, padding: 40, textAlign: "center", background: "var(--brand)", color: "white" }}>
            <h2 className="heading-md" style={{ color: "white" }}>Ücretsiz Keşif ve Fiyat Teklifi</h2>
            <p style={{ opacity: 0.9, marginBottom: 24 }}>PergoClean, Ankara genelinde pergola, tente ve premium mekan bakım hizmetleri sunar. Profesyonel restorasyon ile sistem ömrünü uzatın.</p>
            <div className="btn-row" style={{ justifyContent: "center" }}>
              <a href="https://wa.me/905367731404" className="btn btn-secondary">WhatsApp Destek</a>
              <Link href="/#iletisim" className="btn btn-accent">Fiyat Hesapla</Link>
            </div>
          </div>
          
          <div style={{ marginTop: 40, display: "flex", flexWrap: "wrap", gap: 10 }}>
            {post.keywords.map(kw => (
              <span key={kw} style={{ fontSize: "0.8rem", color: "var(--muted)", background: "#eee", padding: "4px 10px", borderRadius: 4 }}>#{kw.replace(/\s+/g, "")}</span>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
      <FloatingContact />
    </>
  );
}

export async function generateStaticParams() {
  return blogs.map((post) => ({
    slug: post.slug,
  }));
}
