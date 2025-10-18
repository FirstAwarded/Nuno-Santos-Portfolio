import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export const GlassMeshHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const meshX = useTransform(mouseX, [0, window.innerWidth], [-20, 20]);
  const meshY = useTransform(mouseY, [0, window.innerHeight], [-20, 20]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section 
      id="hero" 
      className="relative h-screen flex items-center justify-center px-6 overflow-hidden snap-start snap-always"
    >
      {/* Dark mesh gradient background with parallax */}
      <motion.div
        className="absolute inset-0 -z-20"
        style={{ 
          x: meshX,
          y: meshY,
          background: `
            radial-gradient(at 30% 40%, hsl(0 0% 16%) 0%, transparent 60%),
            radial-gradient(at 70% 60%, hsl(0 0% 10%) 0%, transparent 60%),
            hsl(0 0% 5.5%)
          `
        }}
      >
        {/* Subtle animated overlay */}
        <motion.div
          className="absolute inset-0"
          animate={{ 
            opacity: [0.3, 0.4, 0.3],
            scale: [1, 1.01, 1]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 18, 
            ease: [0.4, 0, 0.2, 1]
          }}
          style={{
            background: "radial-gradient(circle at 50% 50%, hsl(200 15% 25% / 0.15) 0%, transparent 70%)"
          }}
        />
      </motion.div>

      {/* Glass panel container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className="glass-panel max-w-4xl mx-auto px-12 py-16 text-center"
      >
        {/* Headline */}
        <motion.h1
          className="text-[2.8rem] md:text-[3.5rem] font-light tracking-tight leading-[1.15] text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
          Service designer shaping enterprise workflows into intuitive tools
        </motion.h1>

        {/* Subline */}
        <motion.p
          className="text-lg md:text-xl font-light text-white/70 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
          Designing clarity for data-driven platforms
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
          <a
            href="#work"
            className="glass-button inline-block"
          >
            View my work
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};