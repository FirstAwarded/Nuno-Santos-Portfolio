import { motion, useInView } from "framer-motion";
import React from "react";

export const SimpleContact = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section 
      id="contact-section" 
      ref={ref}
      className="relative py-24 px-6 bg-foreground text-background transition-all duration-225 motion-reduce:transition-none"
      style={{
        transform: isInView ? 'translateY(0)' : 'translateY(20px)',
        opacity: isInView ? 1 : 0.95
      }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.225, ease: [0.4, 0, 0.2, 1] }}
          className="space-y-6"
        >
          {/* Two lines */}
          <div className="space-y-2">
            <p className="text-2xl md:text-3xl font-normal tracking-tight">
              Clarity isn't an accident.
            </p>
            <p className="text-xl md:text-2xl text-background/70 font-light">
              Let's make it deliberate.
            </p>
          </div>

          {/* Small outlined button */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.225, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
            className="pt-4"
          >
            <a
              href="mailto:nunorgsantosdesigner@gmail.com"
              className="inline-block border border-background/40 text-background px-5 py-2 rounded-full text-sm font-medium transition-all duration-150 motion-reduce:transition-none hover:border-background hover:translate-x-[1px] min-w-[24px] min-h-[24px] focus:outline-none focus:ring-2 focus:ring-background focus:ring-offset-2 focus:ring-offset-foreground"
            >
              Get in touch
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
