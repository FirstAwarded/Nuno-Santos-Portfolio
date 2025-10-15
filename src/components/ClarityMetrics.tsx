import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface Metric {
  value: number;
  label: string;
  suffix?: string;
}

const metrics: Metric[] = [
  { value: 3, label: "Years of Experience", suffix: "+" },
  { value: 15, label: "Projects Delivered", suffix: "+" },
  { value: 75, label: "Avg. Time Reduction", suffix: "%" },
  { value: 4, label: "Companies Helped", suffix: "" },
];

export const ClarityMetrics = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="mb-12 text-center"
        >
          <p className="label-mono mb-4">Proof in Numbers</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {metrics.map((metric, index) => (
            <MetricCard key={metric.label} metric={metric} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface MetricCardProps {
  metric: Metric;
  index: number;
}

const MetricCard = ({ metric, index }: MetricCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const duration = 1000;
      const frames = 60;
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
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ 
        delay: index * 0.1, 
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1]
      }}
      className="clarity-card text-center"
    >
      <div className="text-4xl md:text-5xl font-light tracking-tight text-foreground mb-2">
        {count}{metric.suffix}
      </div>
      <p className="text-sm text-muted-foreground">{metric.label}</p>
    </motion.div>
  );
};
