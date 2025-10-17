import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const ClarityHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const headline = "I design digital systems that turn complexity into measurable clarity.";
  const subline = "3+ years helping enterprise teams move faster through purposeful design.";

  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center px-6 py-24 overflow-hidden">
      {/* Subtle mesh background - ripples once per 20s */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            background: "var(--gradient-mesh)",
          }}
          animate={{ 
            scale: [1, 1.01, 1],
            opacity: [0.08, 0.12, 0.08]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 20, 
            ease: "easeInOut" 
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:64px_64px] opacity-20" />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Headline with letter-by-letter reveal */}
        <h1 className="headline-clarity mb-8">
          {headline.split("").map((char, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                delay: idx * 0.015,
                duration: 0.2,
                ease: [0.4, 0, 0.2, 1]
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h1>

        {/* Subline */}
        <motion.p
          className="subline-clarity mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.3 }}
        >
          {subline}
        </motion.p>

        {/* Single CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.25 }}
        >
          <a
            href="#work"
            className="btn-clarity inline-block"
          >
            See the Work
          </a>
        </motion.div>
      </div>
    </section>
  );
};
