import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const AppleHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  // start the animation when mounted
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 200);
    return () => clearTimeout(timer);
  }, []);

  // headline to animate
  const headline = "Designing clarity into chaos.";

  return (
    <section className="relative flex flex-col items-center justify-center px-6 py-40 text-center overflow-hidden">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 -z-10 bg-gradient-radial from-primary/20 via-primary/5 to-transparent blur-3xl" />
      {/* Headline */}
      <h1 className="mb-6 text-5xl sm:text-6xl font-extrabold tracking-tight">
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
      {/* Subheading */}
      <p className="mb-10 max-w-2xl text-lg sm:text-xl text-muted-foreground">
        Service & Product Designer. I build flows that close loops and systems that earn trust.
      </p>
      {/* Call to action buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          onClick={() => navigate("/work")}
          className="text-base sm:text-lg px-6 py-3"
        >
          View Work
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            // anchor scroll to contact section
            const contact = document.getElementById("contact");
            if (contact) contact.scrollIntoView({ behavior: "smooth" });
          }}
          className="text-base sm:text-lg px-6 py-3"
        >
          Get in Touch
        </Button>
      </div>
    </section>
  );
};
