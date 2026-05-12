import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

const navItems = [
  ["Hakkımızda", "#hakkimizda"],
  ["Hizmetlerimiz", "#hizmetler"],
  ["Portfolio", "#portfolio"],
  ["Fiyat Hesaplama", "#fiyat-hesapla"],
  ["Blog", "#blog"],
  ["SSS", "#sss"],
  ["İletişim", "#iletisim"]
];

const socialIconMap: Record<string, string> = {
  Instagram: "ri-instagram-line",
  TikTok: "ri-tiktok-line",
  YouTube: "ri-youtube-line",
  Pinterest: "ri-pinterest-line",
  LinkedIn: "ri-linkedin-line",
  Facebook: "ri-facebook-line",
  Twitter: "ri-twitter-x-line"
};

export function SiteHeader() {
  return (
    <header className="header">
      <div className="container header-inner">
        <Link href="/" aria-label="PergoClean ana sayfa">
          <Image
            src="/assets/logo.png"
            alt="PergoClean Logo"
            width={160}
            height={160}
            style={{ height: 64, width: "auto" }}
            priority
          />
        </Link>
        <nav className="nav" aria-label="Ana menü">
          {navItems.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>
        <div className="header-social">
          {siteConfig.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${social.label} sayfamız`}
              title={social.label}
            >
              <i className={socialIconMap[social.label] || "ri-link"}></i>
            </a>
          ))}
          <a
            href="https://wa.me/905367731404"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp ile ulaş"
            title="WhatsApp"
            className="header-whatsapp"
          >
            <i className="ri-whatsapp-line"></i>
          </a>
        </div>
      </div>
    </header>
  );
}
