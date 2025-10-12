import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles } from "lucide-react";

export const ImmersiveHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  const scrollToContent = () => {
    document.getElementById("personas")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={{ opacity }}
      >
        <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-accent/10 to-transparent" />
        <motion.div
          className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary))/0.05_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary))/0.05_1px,transparent_1px)] bg-[size:80px_80px]"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity, scale, y }}
        className="text-center px-6 max-w-5xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">
            Product Designer Portfolio
          </span>
        </motion.div>

        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight mb-6 leading-[0.95]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Design that drives
          <br />
          <span className="gradient-text font-normal">business results</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          From 75% faster workflows to 40% revenue growth—proven strategies for
          designers, hiring managers, and leaders seeking measurable impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button
            size="lg"
            onClick={scrollToContent}
            className="group px-8 py-6 text-lg rounded-full"
          >
            Start the tour
            <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ opacity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-muted-foreground/50 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};
