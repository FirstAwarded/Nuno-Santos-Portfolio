import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export const EngineeredHero = () => {
  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBookIntro = () => {
    window.location.href = 'mailto:nunorgsantosdesigner@gmail.com?subject=Let\'s Connect';
  };

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Mesh background with drift */}
      <div className="absolute inset-0 mesh-drift noise-texture" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline with staggered fade-in */}
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.08 }}
            className="hero-engineered mb-6"
          >
            I design systems that make complex work feel simple.
          </motion.h1>
          
          {/* Subline */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.16 }}
            className="subline-engineered mb-10"
          >
            Product Designer · 3+ years building clarity and measurable impact.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.24 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Button
              onClick={scrollToWork}
              className="btn-engineered-primary"
            >
              View Work
            </Button>
            <Button
              onClick={handleBookIntro}
              variant="outline"
              className="btn-engineered-outline"
            >
              Book Intro
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
