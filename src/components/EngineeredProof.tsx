import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useRef, useEffect } from 'react';

interface Metric {
  value: number;
  suffix: string;
  label: string;
}

const metrics: Metric[] = [
  { value: 75, suffix: '%', label: 'faster approvals' },
  { value: 30, suffix: '%', label: 'shorter cycles' },
  { value: 40, suffix: '%', label: 'fewer reworks' },
];

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      });
      return controls.stop;
    }
  }, [isInView, count, value]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-medium">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
};

export const EngineeredProof = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section ref={ref} className="py-24 px-6 bg-card">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.2 }}
          className="flex flex-wrap justify-around gap-12 text-center"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.2, delay: index * 0.08 }}
              className="flex flex-col items-center gap-2"
            >
              <AnimatedCounter value={metric.value} suffix={metric.suffix} />
              <p className="label-engineered">{metric.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
