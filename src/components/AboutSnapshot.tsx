import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const AboutSnapshot = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const proofChips = [
    "+17% conversion (internship)",
    "Accessibility-first",
    "Research-led enterprise workflows"
  ];

  return (
    <section 
      ref={ref}
      className="py-16 px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.225, ease: [0.4, 0, 0.2, 1] }}
        className="max-w-3xl mx-auto space-y-6"
      >
        {/* Two paragraphs */}
        <div className="space-y-4">
          <p className="text-base text-foreground leading-relaxed">
            Product-minded service designer turning ambiguity into clear flows and confident decisions.
          </p>
          <p className="text-base text-foreground leading-relaxed">
            I map systems, trace constraints, and ship thin slices early—measuring before/after so outcomes aren't guesswork.
          </p>
        </div>

        {/* Proof chips */}
        <div className="flex flex-wrap gap-2">
          {proofChips.map((chip, index) => (
            <motion.span
              key={chip}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ 
                duration: 0.2, 
                delay: 0.15 + (index * 0.05),
                ease: [0.4, 0, 0.2, 1]
              }}
              className="inline-block px-3 py-1 text-xs font-medium bg-muted/50 text-muted-foreground rounded-full border border-border/50"
            >
              {chip}
            </motion.span>
          ))}
        </div>

        {/* Link to full About */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.2, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
        >
          <a
            href="#about-full"
            className="inline-block text-sm text-accent hover:text-accent/80 transition-colors duration-150 underline underline-offset-4 min-w-[24px] min-h-[24px] py-1 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded"
          >
            About →
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};
