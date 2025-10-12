import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { TrendingUp, Clock, Users, DollarSign } from "lucide-react";

interface Metric {
  value: string;
  suffix: string;
  label: string;
  sublabel: string;
  icon: any;
  color: string;
}

const metrics: Metric[] = [
  {
    value: "75",
    suffix: "%",
    label: "Faster Workflows",
    sublabel: "Approval time reduction",
    icon: Clock,
    color: "text-primary",
  },
  {
    value: "40",
    suffix: "%",
    label: "Revenue Growth",
    sublabel: "Through optimized UX",
    icon: DollarSign,
    color: "text-accent",
  },
  {
    value: "95",
    suffix: "%",
    label: "User Satisfaction",
    sublabel: "Average across projects",
    icon: Users,
    color: "text-info",
  },
  {
    value: "30",
    suffix: "%",
    label: "Time Saved",
    sublabel: "In user task completion",
    icon: TrendingUp,
    color: "text-success",
  },
];

const AnimatedCounter = ({ value, suffix, inView }: { value: string; suffix: string; inView: boolean }) => {
  const [count, setCount] = useState(0);
  const target = parseInt(value);

  useEffect(() => {
    if (!inView) return;

    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

export const ImpactMetrics = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-6 relative overflow-hidden bg-muted/20">
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/10 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Proven Impact
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6">
            Design backed by <span className="gradient-text font-normal">data</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every project is measured against clear success metrics. These are real outcomes from real projects.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative group"
              >
                <div className="relative p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 overflow-hidden h-full">
                  {/* Glow effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                  />

                  {/* Icon */}
                  <div className="relative z-10 mb-6">
                    <motion.div
                      className={`inline-flex p-3 rounded-2xl bg-muted/50 ${metric.color}`}
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="w-6 h-6" />
                    </motion.div>
                  </div>

                  {/* Value */}
                  <div className="relative z-10">
                    <motion.div
                      className={`text-5xl md:text-6xl font-bold mb-2 ${metric.color}`}
                    >
                      <AnimatedCounter value={metric.value} suffix={metric.suffix} inView={isInView} />
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-2">{metric.label}</h3>
                    <p className="text-sm text-muted-foreground">{metric.sublabel}</p>
                  </div>

                  {/* Decorative element */}
                  <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
