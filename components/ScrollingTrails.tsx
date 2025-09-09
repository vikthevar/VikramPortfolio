"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ScrollingTrails = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(currentScrollY / scrollHeight, 1);
      
      setScrollY(currentScrollY);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Left Progress Bar - Only shows completed progress */}
      {scrollProgress > 0 && (
        <div className="fixed left-0 top-0 h-full w-1 z-50 pointer-events-none">
          {/* Progress fill - only the completed portion */}
          <motion.div
            className="absolute left-0 top-0 w-full shadow-lg"
            style={{
              height: `${scrollProgress * 100}%`,
              background: "linear-gradient(to bottom, #ffffff, #d1d5db, #6b7280)"
            }}
            initial={{ height: "0%", opacity: 0 }}
            animate={{ 
              height: `${scrollProgress * 100}%`, 
              opacity: 1 
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1, ease: "easeOut" }}
          />
          
          {/* Glow effect at the bottom of progress */}
          <motion.div
            className="absolute left-0 w-full blur-sm"
            style={{
              height: "30px",
              top: `${scrollProgress * 100}%`,
              transform: "translateY(-15px)",
              background: "linear-gradient(to bottom, transparent, #ffffff, transparent)"
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        </div>
      )}


    
    </>
  );
};

export default ScrollingTrails;
