"use client";

import Image from "next/image";

const INSTA_IMAGES = [
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=600&q=80"
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
