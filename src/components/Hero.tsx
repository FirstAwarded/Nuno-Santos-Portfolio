import { MeshBackground } from '@/components/MeshBackground';
import { VectorSweep } from '@/components/VectorSweep';
import { ScrollProgress } from '@/components/ScrollProgress';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useState } from 'react';

export const Hero = () => {
  const [metricsInView, setMetricsInView] = useState(false);

  return (
    <>
      <section 
        className="relative overflow-hidden flex items-center justify-center"
        style={{ 
          height: 'min(85vh, 1000px)',
          minHeight: '70vh'
        }}
      >
        {/* Apple keynote-style Mesh Background */}
        <MeshBackground className="w-full h-full" />
        
        {/* Two-column layout */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column: Enhanced Copy */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 
              className="hero-text keynote-headline font-display"
              style={{
                fontSize: 'clamp(2.8rem, 8vw, 6.5rem)',
                lineHeight: '0.9'
              }}
            >
              Design systems that{' '}
              <span className="gradient-text">ship and stick</span>.
            </h1>
            
            <p 
              className="body-large max-w-lg"
              style={{
                fontSize: 'clamp(1.25rem, 2.5vw, 1.4rem)',
                lineHeight: '1.6'
              }}
            >
              I design and build end-to-end product experiences—research, UI, micro-interactions—driven by measurable outcomes.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button size="lg" className="btn-hero">
                  View work
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button variant="outline" size="lg" className="border-2 hover:bg-background/80">
                  About & approach
                </Button>
              </motion.div>
            </div>

            {/* Metric Strip */}
            <motion.div 
              className="grid grid-cols-3 gap-6 pt-8 border-t border-border/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              onViewportEnter={() => setMetricsInView(true)}
            >
              <div className="text-center">
                <motion.div 
                  className="text-2xl font-bold text-primary mb-1"
                  initial={{ opacity: 0, y: 10 }}
                  animate={metricsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  5+
                </motion.div>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div className="text-center">
                <motion.div 
                  className="text-2xl font-bold text-primary mb-1"
                  initial={{ opacity: 0, y: 10 }}
                  animate={metricsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  20+
                </motion.div>
                <p className="text-sm text-muted-foreground">Projects Shipped</p>
              </div>
              <div className="text-center">
                <motion.div 
                  className="text-2xl font-bold text-primary mb-1"
                  initial={{ opacity: 0, y: 10 }}
                  animate={metricsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.0, duration: 0.6 }}
                >
                  100%
                </motion.div>
                <p className="text-sm text-muted-foreground">User-Centered</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right column: Enhanced Visual */}
          <motion.div 
            className="relative h-80 lg:h-96"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <VectorSweep />
          </motion.div>
        </div>

        {/* Scroll Progress Component */}
        <ScrollProgress />
      </section>

      {/* Social Proof / Testimonial Strip */}
      <section className="bg-muted/30 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-muted-foreground mb-8 text-sm uppercase tracking-wider">
              Trusted by teams at
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
              <div className="text-lg font-semibold text-muted-foreground">Enterprise Co.</div>
              <div className="text-lg font-semibold text-muted-foreground">Tech Startup</div>
              <div className="text-lg font-semibold text-muted-foreground">Design Agency</div>
              <div className="text-lg font-semibold text-muted-foreground">Global Corp</div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};