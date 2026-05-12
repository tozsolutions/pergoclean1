"use client";

import Image from "next/image";

const INSTA_IMAGES = [
  "/assets/insta-1.jpg",
  "/assets/insta-2.jpg",
  "/assets/insta-3.jpg",
  "/assets/insta-4.jpg",
  "/assets/restoration-main.jpg",
  "/assets/hero-main.jpg"
];

export function InstagramSlider() {
  // Duplicate for infinite effect
  const images = [...INSTA_IMAGES, ...INSTA_IMAGES];

  return (
    <div className="instagram-scroll-container">
      <div className="instagram-scroll-content">
        {images.map((img, i) => (
          <div key={i} className="instagram-card">
            <Image src={img} alt={`Instagram ${i}`} fill style={{ objectFit: "cover" }} />
          </div>
        ))}
      </div>
    </div>
  );
}
