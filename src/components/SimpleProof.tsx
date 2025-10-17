import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface Metric {
  value: number;
  label: string;
}

const metrics: Metric[] = [
  { value: 75, label: "faster approvals" },
  { value: 30, label: "shorter cycles" },
  { value: 40, label: "less rework" },
];

export const SimpleProof = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section 
      ref={ref}
      className="relative py-20 px-6 bg-card/30 backdrop-blur-sm transition-all duration-225 motion-reduce:transition-none"
      style={{
        transform: isInView ? 'translateY(0)' : 'translateY(20px)',
        opacity: isInView ? 1 : 0.95
      }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {metrics.map((metric, index) => (
            <MetricItem key={metric.label} metric={metric} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface MetricItemProps {
  metric: Metric;
  index: number;
}

const MetricItem = ({ metric, index }: MetricItemProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      // Check for reduced motion preference
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      if (prefersReducedMotion) {
        // Skip animation, show final value immediately
        setCount(metric.value);
        return;
      }

      const duration = 800;
      const frames = 40;
      const increment = metric.value / frames;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= metric.value) {
          setCount(metric.value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / frames);

      return () => clearInterval(timer);
    }
  }, [isInView, metric.value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ 
        delay: index * 0.1, 
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1]
      }}
      className="text-center"
    >
      <div className="text-3xl font-light tracking-tight text-foreground mb-1">
        {count}%
      </div>
      <p className="text-sm text-muted-foreground">{metric.label}</p>
    </motion.div>
  );
};
