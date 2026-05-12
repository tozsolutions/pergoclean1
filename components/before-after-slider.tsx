"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export function BeforeAfterSlider({ before, after, title }: { before: string; after: string; title: string }) {
  const [percent, setPercent] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  function handleMove(e: MouseEvent | TouchEvent) {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = "touches" in e ? e.touches[0].clientX : e.clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    setPercent(Math.min(Math.max(position, 0), 100));
  }

  const [isMouseDown, setIsMouseDown] = useState(false);

  useEffect(() => {
    const onUp = () => setIsMouseDown(false);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchend", onUp);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="reveal-slider"
      onMouseDown={() => setIsMouseDown(true)}
      onTouchStart={() => setIsMouseDown(true)}
      onMouseMove={(e) => isMouseDown && handleMove(e.nativeEvent)}
      onTouchMove={(e) => isMouseDown && handleMove(e.nativeEvent)}
    >
      <div className="reveal-before">
        <Image 
          src={before} 
          alt="Before" 
          fill 
          style={{ objectFit: "cover", transform: `scale(${1 + (100 - percent) / 1000})` }} 
        />
        <span className="badge" style={{ position: "absolute", top: 14, left: 14, zIndex: 10, background: "#ff6b35" }}>ÖNCE</span>
      </div>
      <div className="reveal-after" style={{ clipPath: `inset(0 0 0 ${percent}%)` }}>
        <Image 
          src={after} 
          alt="After" 
          fill 
          style={{ objectFit: "cover", transform: `scale(${1 + percent / 1000})` }} 
        />
        <span className="badge" style={{ position: "absolute", top: 14, right: 14, zIndex: 10, background: "#10b981" }}>SONRA</span>
      </div>
      <div className="reveal-handle" style={{ left: `${percent}%` }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "rgba(0,0,0,0.6)", padding: "10px 14px", color: "white", zIndex: 4 }}>
        <h3 style={{ margin: 0, fontSize: "0.95rem" }}>{title}</h3>
      </div>
    </div>
  );
}
