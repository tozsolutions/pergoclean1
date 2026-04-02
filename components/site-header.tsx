import Image from "next/image";
import Link from "next/link";

const navItems = [
  ["Hakkımızda", "#hakkimizda"],
  ["Hizmetlerimiz", "#hizmetler"],
  ["Portfolio", "#portfolio"],
  ["Fiyat Hesaplama", "#fiyat-hesapla"],
  ["Blog", "#blog"],
  ["SSS", "#sss"],
  ["İletişim", "#iletisim"]
];

export function SiteHeader() {
  return (
    <header className="header">
      <div className="container header-inner">
        <Link href="/" aria-label="PergoClean ana sayfa">
          <Image
            src="/assets/PergoClean24_02.26_1.png"
            alt="PergoClean logo"
            width={120}
            height={58}
            style={{ height: 58, width: "auto" }}
            priority
          />
        </Link>
        <nav className="nav">
          {navItems.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>
      </div>
    </header>
  );
}
