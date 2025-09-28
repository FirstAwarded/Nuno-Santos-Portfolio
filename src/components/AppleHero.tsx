import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const sublines = [
  "I simplify complex systems into clear, usable experiences.",
  "I design products people can use in minutes, not manuals.",
  "I turn complexity into clarity that moves teams faster and delivers measurable results",
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

  const headline = "Nuno Santos, Product Designer";

  return (
    <section className="relative flex flex-col items-center justify-center px-6 py-32 text-center overflow-hidden">
      {/* Background */}
      <motion.div
        className="absolute inset-0 -z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-radial from-primary/20 via-primary/5 to-transparent blur-3xl"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--muted))/0.04_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted))/0.04_1px,transparent_1px)] bg-[size:48px_48px]" />
      </motion.div>

      {/* Headline */}
      <h1 className="mb-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight relative z-10">
        {headline.split("").map((char, idx) => (
          <motion.span
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: idx * 0.02, duration: 0.35 }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </h1>

      {/* Cycling subline */}
      <motion.p
        key={sublineIndex}
        className="mb-12 max-w-xl text-base sm:text-lg text-muted-foreground relative z-10 font-normal"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {sublines[sublineIndex]}
      </motion.p>

      {/* Call-to-action buttons */}
      <div className="flex flex-col sm:flex-row gap-4 relative z-10">
        <Button
          size="lg"
          onClick={() => navigate("/work")}
          className="px-7 py-3 text-sm sm:text-base font-medium rounded-full"
        >
          View Work
        </Button>
        <Button
          size="lg"
          variant="outline"
          onClick={() =>
            document.getElementById("contact")?.scrollIntoView({
              behavior: "smooth",
            })
          }
          className="px-7 py-3 text-sm sm:text-base font-medium rounded-full"
        >
          Get in Touch
        </Button>
      </div>
    </section>
  );
};
