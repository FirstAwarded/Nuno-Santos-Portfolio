import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import 

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section ref={ref} className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative"
          >
            <div className="aspect-square relative overflow-hidden rounded-3xl bg-muted">
              {/* Placeholder for photo - mask reveal effect */}
              <img src={profilepicture} alt="Safety routing comparison"className="h-64" />
              </div>
              <motion.div
                initial={{ y: '100%' }}
                animate={isInView ? { y: '0%' } : {}}
                transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"
              />
            </div>
          </motion.div>

          {/* Right: Content */}
          <div className="space-y-8">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-4xl md:text-5xl font-light leading-tight"
              style={{ fontWeight: 200 }}
            >
              Building experiences that matter.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              I'm Nuno, a product-minded Service Designer. I build flows that close loops, 
              systems that earn trust, and case studies that prove it.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex gap-6 pt-4"
            >
              <motion.a
                href="#work"
                className="text-primary hover:text-primary/80 transition-colors relative group"
                whileHover={{ scale: 1.02 }}
              >
                View work
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-primary origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                />
              </motion.a>
              <motion.a
                href="#contact"
                className="text-muted-foreground hover:text-foreground transition-colors relative group"
                whileHover={{ scale: 1.02 }}
              >
                Get in touch
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-muted-foreground origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};