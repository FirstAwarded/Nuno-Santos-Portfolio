import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import profilePicture from '@/assets/profilepicture.jpeg';

export const EngineeredAbout = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section ref={ref} className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.2 }}
          className="grid md:grid-cols-[200px_1fr] gap-12 items-center"
        >
          {/* Portrait */}
          <div className="relative">
            <img
              src={profilePicture}
              alt="Nuno Santos"
              className="w-48 h-48 md:w-full md:h-auto rounded-2xl grayscale"
            />
          </div>
          
          {/* Text */}
          <div>
            <p className="text-xl md:text-2xl font-normal leading-relaxed mb-6">
              I build flows that close loops and systems that earn trust.
            </p>
            
            <div className="space-y-2 text-muted-foreground">
              <p className="label-engineered">Product Designer</p>
              <p className="label-engineered">Lisbon, Portugal</p>
              <p className="label-engineered">Open to Opportunities</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
