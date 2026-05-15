"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface RevealTextProps {
  text?: string;
  textColor?: string;
  overlayColor?: string;
  fontSize?: string;
  letterDelay?: number;
  overlayDelay?: number;
  overlayDuration?: number;
  springDuration?: number;
  letterImages?: string[];
}

const defaultImages = [
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400",
  "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400",
  "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400",
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400",
  "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400",
  "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=400",
];

export function RevealText({
  text = "REVEAL",
  textColor = "text-[#0e1b3f]",
  overlayColor = "text-[#13b3a3]",
  fontSize = "text-[clamp(2.4rem,4vw,4.5rem)]",
  letterDelay = 0.05,
  overlayDelay = 0.03,
  overlayDuration = 0.3,
  springDuration = 400,
  letterImages = defaultImages
}: RevealTextProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [showOverlay, setShowOverlay] = useState(false);
  
  useEffect(() => {
    const lastLetterDelay = (text.length - 1) * letterDelay;
    const totalDelay = (lastLetterDelay * 1000) + springDuration;
    
    const timer = setTimeout(() => {
      setShowOverlay(true);
    }, totalDelay);
    
    return () => clearTimeout(timer);
  }, [text.length, letterDelay, springDuration]);

  return (
    <div className="flex items-center justify-center relative">
      <div className="flex flex-wrap justify-center">
        {text.split("").map((letter, index) => (
          letter === " " ? (
            <span key={index} className="w-4 sm:w-6" />
          ) : (
            <motion.span
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`${fontSize} font-black tracking-tight cursor-pointer relative inline-block`}
              initial={{ 
                scaleY: 0,
                opacity: 0,
              }}
              animate={{ 
                scaleY: 1,
                opacity: 1,
              }}
              transition={{
                delay: index * letterDelay,
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <span className={`block ${textColor}`}>
                {letter}
              </span>
              
              {showOverlay && (
                <motion.span
                  className={`absolute inset-0 ${overlayColor}`}
                  initial={{ scaleY: 0 }}
                  animate={{ 
                    scaleY: [0, 1, 1, 0]
                  }}
                  transition={{
                    delay: index * overlayDelay,
                    duration: overlayDuration,
                    times: [0, 0.3, 0.7, 1],
                    ease: "easeInOut"
                  }}
                >
                  {letter}
                </motion.span>
              )}
              
              <motion.span
                className="absolute inset-0 bg-cover bg-no-repeat opacity-0 transition-opacity duration-0.1"
                style={{
                  backgroundImage: `url('${letterImages[index % letterImages.length]}')`,
                  backgroundPosition: "center",
                }}
                animate={{ 
                  opacity: hoveredIndex === index ? 1 : 0
                }}
              >
                <span className="text-transparent bg-clip-text bg-cover bg-center" style={{
                  backgroundImage: `url('${letterImages[index % letterImages.length]}')`,
                }}>
                  {letter}
                </span>
              </motion.span>
            </motion.span>
          )
        ))}
      </div>
    </div>
  );
}