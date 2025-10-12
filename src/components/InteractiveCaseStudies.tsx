import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Lock, Sparkles, Zap, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

import oartMockup from "@/assets/oart-mockup.jpg";
import safewalkMockup from "@/assets/SafewalkBannerImage.png";
import umaiMockup from "@/assets/UmaiBannerImage.png";

interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  problem: string;
  solution: string;
  impact: string;
  image: string;
  route: string;
  locked?: boolean;
  gradient: string;
  icon: any;
}

const caseStudies: CaseStudy[] = [
  {
    id: "enterprise",
    title: "Enterprise Workflows",
    subtitle: "From chaos to clarity",
    problem: "Legacy approval system slowing teams down",
    solution: "Scalable UX framework with intelligent routing",
    impact: "75% faster approval times",
    image: oartMockup,
    route: "/work/enterprise/otgate",
    locked: true,
    gradient: "from-primary via-accent to-purple-500",
    icon: Zap,
  },
  {
    id: "safewalk",
    title: "SafeWalk",
    subtitle: "Safety-first navigation",
    problem: "Navigation apps optimize for speed, not safety",
    solution: "Context-aware routing with real-time safety data",
    impact: "95% user satisfaction for nighttime walks",
    image: safewalkMockup,
    route: "/work/safewalk",
    gradient: "from-info via-primary to-accent",
    icon: Target,
  },
  {
    id: "umai",
    title: "Umai",
    subtitle: "Personalized food ordering",
    problem: "Generic ordering flows create friction",
    solution: "ML-powered recommendations with streamlined checkout",
    impact: "30% faster order completion",
    image: umaiMockup,
    route: "/work/umai",
    gradient: "from-success via-accent to-primary",
    icon: Sparkles,
  },
];

const CaseStudyCard = ({ study, index }: { study: CaseStudy; index: number }) => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);

  const Icon = study.icon;

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity, scale }}
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="container mx-auto max-w-7xl px-6">
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={index % 2 === 1 ? "lg:order-2" : ""}
          >
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${study.gradient} bg-opacity-10 border border-primary/20 mb-6`}>
              <Icon className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Case Study {index + 1}
              </span>
            </div>

            <h3 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-4">
              {study.title}
            </h3>
            <p className="text-xl text-accent font-medium mb-8">{study.subtitle}</p>

            <div className="space-y-6 mb-8">
              <div>
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                  Problem
                </h4>
                <p className="text-lg">{study.problem}</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                  Solution
                </h4>
                <p className="text-lg">{study.solution}</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                  Impact
                </h4>
                <p className="text-lg font-semibold gradient-text">{study.impact}</p>
              </div>
            </div>

            <Button
              size="lg"
              onClick={() => navigate(study.route)}
              className="group px-8 py-6 text-lg rounded-full"
            >
              {study.locked && <Lock className="w-4 h-4 mr-2" />}
              View full case study
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`relative group ${index % 2 === 1 ? "lg:order-1" : ""}`}
          >
            <div className="relative overflow-hidden rounded-3xl">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-auto rounded-3xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              </motion.div>

              {/* Decorative elements */}
              <div className={`absolute -inset-4 bg-gradient-to-br ${study.gradient} opacity-20 blur-3xl -z-10 group-hover:opacity-30 transition-opacity duration-500`} />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export const InteractiveCaseStudies = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent -z-20" />
      
      {caseStudies.map((study, index) => (
        <CaseStudyCard key={study.id} study={study} index={index} />
      ))}
    </section>
  );
};
