import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Lightbulb, TestTube, Rocket, CheckCircle2 } from "lucide-react";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: any;
  color: string;
}

const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Research & Discovery",
    description: "Deep dive into user needs, business goals, and technical constraints through interviews, analytics, and competitive analysis.",
    icon: Search,
    color: "from-primary to-accent",
  },
  {
    number: "02",
    title: "Ideation & Concept",
    description: "Generate solutions through workshops, sketches, and rapid prototyping. Validate ideas with stakeholders early.",
    icon: Lightbulb,
    color: "from-accent to-info",
  },
  {
    number: "03",
    title: "Test & Iterate",
    description: "User testing with real prototypes. Measure, learn, refine. No assumptions—only validated insights drive decisions.",
    icon: TestTube,
    color: "from-info to-success",
  },
  {
    number: "04",
    title: "Launch & Scale",
    description: "Ship with confidence. Monitor metrics, gather feedback, and continuously improve based on real-world usage.",
    icon: Rocket,
    color: "from-success to-primary",
  },
];

export const ProcessShowcase = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 border border-success/20 mb-6">
            <CheckCircle2 className="w-4 h-4 text-success" />
            <span className="text-sm font-medium text-success">
              Proven Process
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6">
            How <span className="gradient-text font-normal">I work</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A systematic approach that balances speed with rigor, creativity with data, and innovation with business goals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="relative group"
              >
                <div className="relative p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-500 h-full overflow-hidden">
                  {/* Gradient background on hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                  />

                  {/* Number */}
                  <div className="relative z-10 mb-6">
                    <motion.div
                      className="inline-flex items-center gap-4"
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className={`text-6xl font-bold bg-gradient-to-br ${step.color} bg-clip-text text-transparent`}>
                        {step.number}
                      </span>
                      <div className={`p-3 rounded-2xl bg-gradient-to-br ${step.color}`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Decorative line */}
                  <motion.div
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${step.color}`}
                    initial={{ width: "0%" }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
