import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import profilePicture from "@/assets/profilepicture.jpeg";
import { MeshBackground } from "./MeshBackground";

export const GlassMeshHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const portraitRotateX = useTransform(mouseY, [0, window.innerHeight], [1.5, -1.5]);
  const portraitRotateY = useTransform(mouseX, [0, window.innerWidth], [-1.5, 1.5]);

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
      className="relative h-screen flex items-center overflow-hidden snap-start snap-always"
    >
      {/* Animated mesh background */}
      <div className="absolute inset-0 -z-20 bg-[#0e0e0e]">
        <MeshBackground />
      </div>

      {/* Glass panel container - split layout */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className="glass-panel-fallout max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-12 px-6 sm:px-8 lg:px-[10%] py-8 sm:py-12 lg:py-[12%]"
      >
        {/* Left: Content (60%) */}
        <div className="flex-1 lg:flex-[0.6] space-y-6 lg:space-y-8 text-center lg:text-left">
          <motion.h1
            className="text-3xl sm:text-4xl lg:text-[4rem] font-normal tracking-tight leading-[1.1] text-[#eaeaea]"
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            style={{ letterSpacing: '-0.5px' }}
          >
            Product designer building clarity in complex systems
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl lg:text-[1.375rem] font-light text-[#eaeaea]/80 max-w-[480px] mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            style={{ fontWeight: 300 }}
          >
            From research to prototype, I translate operations into intuitive digital tools.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            <a
              href="#work"
              className="inline-block text-sm sm:text-base uppercase tracking-wider font-medium text-[#eaeaea] border border-[#a6c48a]/30 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full transition-all duration-300 hover:border-[#bcc9a4] hover:bg-[#a6c48a]/10 hover:translate-x-[2px]"
              style={{ letterSpacing: '1px' }}
            >
              View my work →
            </a>
          </motion.div>
        </div>

        {/* Right: Portrait (40%) */}
        <motion.div
          className="flex-1 lg:flex-[0.4] relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Atomic icon decoration */}
          <div className="absolute -top-4 -right-4 lg:-top-6 lg:-right-6 w-10 h-10 lg:w-12 lg:h-12 opacity-5 pointer-events-none">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="24" cy="24" r="3" fill="white"/>
              <circle cx="24" cy="24" r="12" stroke="white" strokeWidth="1"/>
              <circle cx="24" cy="24" r="20" stroke="white" strokeWidth="1" strokeDasharray="2 4"/>
            </svg>
          </div>

          <motion.div
            className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-2xl overflow-hidden mx-auto"
            style={{
              rotateX: portraitRotateX,
              rotateY: portraitRotateY,
              transformStyle: "preserve-3d",
            }}
          >
            {/* Glow edge */}
            <div className="absolute inset-0 rounded-2xl shadow-[0_0_60px_rgba(255,255,255,0.05)] pointer-events-none z-10" style={{ filter: 'blur(12px)' }} />
            
            {/* Portrait image */}
            <motion.img
              src={profilePicture}
              alt="Nuno Santos"
              className="w-full h-full object-cover transition-all duration-1000"
              style={{
                filter: isHovered ? 'grayscale(0)' : 'grayscale(1)',
              }}
            />

            {/* CRT flicker effect on hover */}
            {isHovered && (
              <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.15, 0] }}
                transition={{ duration: 0.2 }}
                style={{
                  background: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0px, transparent 2px, transparent 4px)',
                }}
              />
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};