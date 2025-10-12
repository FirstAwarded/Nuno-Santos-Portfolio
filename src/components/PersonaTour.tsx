import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Target, Users, TrendingUp, Zap, Eye, Brain } from "lucide-react";
import { Card } from "@/components/ui/card";

interface Persona {
  id: string;
  title: string;
  icon: any;
  color: string;
  tagline: string;
  value: string;
  metrics: string[];
}

const personas: Persona[] = [
  {
    id: "designer",
    title: "For Designers",
    icon: Eye,
    color: "from-primary to-accent",
    tagline: "Learn proven design patterns",
    value: "See how strategic UX thinking transforms complex problems into intuitive solutions",
    metrics: [
      "Design systems that scale",
      "User research methodologies",
      "Interaction patterns that work",
    ],
  },
  {
    id: "manager",
    title: "For Hiring Managers",
    icon: Target,
    color: "from-accent to-info",
    tagline: "Evaluate design thinking",
    value: "Understand my process, decision-making, and how I balance user needs with business goals",
    metrics: [
      "Strategic problem solving",
      "Cross-functional collaboration",
      "Data-driven design decisions",
    ],
  },
  {
    id: "leader",
    title: "For Senior Leaders",
    icon: TrendingUp,
    color: "from-info to-success",
    tagline: "See measurable business impact",
    value: "Review quantified outcomes: 75% faster workflows, 40% revenue growth, 95% user satisfaction",
    metrics: [
      "Measurable ROI",
      "Scalable solutions",
      "Strategic alignment",
    ],
  },
];

export const PersonaTour = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="personas" ref={ref} className="py-32 px-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent -z-10" />
      
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <Users className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">
              Choose Your Perspective
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6">
            What matters to <span className="gradient-text font-normal">you?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every role sees design differently. Explore case studies through the lens that matters most.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {personas.map((persona, index) => {
            const Icon = persona.icon;
            const isHovered = hoveredId === persona.id;

            return (
              <motion.div
                key={persona.id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                onHoverStart={() => setHoveredId(persona.id)}
                onHoverEnd={() => setHoveredId(null)}
              >
                <Card className="relative p-8 h-full overflow-hidden group hover:shadow-xl transition-all duration-500 cursor-pointer border-border/50">
                  {/* Gradient background on hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${persona.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    initial={false}
                    animate={{ scale: isHovered ? 1.2 : 1 }}
                    transition={{ duration: 0.8 }}
                  />

                  {/* Icon */}
                  <motion.div
                    className={`relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br ${persona.color} p-0.5 mb-6`}
                    animate={{
                      rotate: isHovered ? [0, -5, 5, 0] : 0,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                      <Icon className="w-7 h-7 text-foreground" />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {persona.title}
                    </h3>
                    <p className="text-accent font-medium mb-4 text-sm uppercase tracking-wide">
                      {persona.tagline}
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {persona.value}
                    </p>

                    {/* Metrics */}
                    <div className="space-y-3">
                      {persona.metrics.map((metric, i) => (
                        <motion.div
                          key={i}
                          className="flex items-center gap-3 text-sm"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.4 + index * 0.15 + i * 0.1 }}
                        >
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${persona.color}`} />
                          <span className="text-muted-foreground">{metric}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Hover indicator */}
                  <motion.div
                    className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity"
                    animate={{ x: isHovered ? [0, 5, 0] : 0 }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <Zap className="w-5 h-5 text-primary" />
                  </motion.div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
