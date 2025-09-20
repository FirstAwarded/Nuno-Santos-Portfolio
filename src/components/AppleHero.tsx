import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const sublines = [
  "I build flows that close loops.",
  "I turn processes into decisions you can see.",
  "I design clarity into enterprise chaos.",
];

export const AppleHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [sublineIndex, setSublineIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 200);
    const cycle = setInterval(
      () => setSublineIndex((i) => (i + 1) % sublines.length),
      4000
    );
    return () => {
      clearTimeout(timer);
      clearInterval(cycle);
    };
  }, []);

  const headline = "Designing clarity into chaos.";

  return (
    <section className="relative flex flex-col items-center justify-center px-6 py-40 text-center overflow-hidden">
      {/* Background layers */}
      <motion.div
        className="absolute inset-0 -z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        {/* Morphing mesh gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-radial from-primary/20 via-primary/5 to-transparent blur-3xl"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 10 }}
        />
        {/* Subtle geometric grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--muted))/0.08_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted))/0.08_1px,transparent_1px)] bg-[size:40px_40px]" />
      </motion.div>

      {/* Animated headline */}
      <h1 className="mb-6 text-5xl sm:text-6xl font-extrabold tracking-tight relative z-10">
        {headline.split("").map((char, idx) => (
          <motion.span
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: idx * 0.03, duration: 0.4 }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </h1>

      {/* Cycling subline */}
      <motion.p
        key={sublineIndex}
        className="mb-10 max-w-2xl text-lg sm:text-xl text-muted-foreground relative z-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {sublines[sublineIndex]}
      </motion.p>

      {/* Call-to-action buttons */}
      <div className="flex flex-col sm:flex-row gap-4 relative z-10">
        <Button
          onClick={() => navigate("/work")}
          className="px-6 py-3 text-base"
        >
          View Work
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
          }
          className="px-6 py-3 text-base"
        >
          Get in Touch
        </Button>
      </div>
    </section>
  );
};
