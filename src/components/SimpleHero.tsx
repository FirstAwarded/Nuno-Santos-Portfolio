import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export const SimpleHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollY } = useScroll();
  const meshY = useTransform(scrollY, [0, 500], [0, -50]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[75vh] flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
      {/* Light radial mesh - drifts with scroll */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={{ y: meshY }}
      >
        <motion.div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            background: "radial-gradient(at 50% 30%, hsl(200 20% 55% / 0.12) 0%, transparent 60%)",
          }}
          animate={{ 
            scale: [1, 1.008, 1],
            opacity: [0.06, 0.08, 0.06]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 15, 
            ease: [0.4, 0, 0.2, 1]
          }}
        />
      </motion.div>

      {/* Content */}
      <div className="max-w-3xl mx-auto text-center relative z-10">
        {/* Headline */}
        <motion.h1
          className="hero-simple mb-4"
          initial={{ opacity: 0, y: 12 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
        >
          I design systems that make complexity feel simple.
        </motion.h1>

        {/* Subline */}
        <motion.p
          className="body-simple mb-8 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 12 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
        >
          3+ years helping enterprise teams move faster through design clarity.
        </motion.p>

        {/* Small pill CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
        >
          <a
            href="#work"
            className="btn-simple inline-block"
          >
            See my work
          </a>
        </motion.div>
      </div>
    </section>
  );
};
