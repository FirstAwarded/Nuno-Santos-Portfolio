import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import profilePic from "@/assets/profilepicture.jpeg";

export const SimpleAbout = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section 
      id="about-full"
      ref={ref}
      className="relative py-20 px-6 bg-card/50 backdrop-blur-sm transition-all duration-225 motion-reduce:transition-none"
      style={{
        transform: isInView ? 'translateY(0)' : 'translateY(20px)',
        opacity: isInView ? 1 : 0.95
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.225, ease: [0.4, 0, 0.2, 1] }}
        className="max-w-5xl mx-auto grid md:grid-cols-[200px_1fr] gap-8 items-start"
      >
        {/* Left: Profile picture */}
        <div className="relative overflow-hidden rounded-lg">
          <img
            src={profilePic}
            alt="Nuno Santos, Product Designer"
            className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-300 motion-reduce:transition-none"
          />
        </div>

        {/* Right: Text content */}
        <div className="space-y-4">
          <h2 className="text-2xl font-normal tracking-tight text-foreground">
            I build flows that close loops and systems that earn trust.
          </h2>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p><span className="font-medium text-foreground">Role:</span> Product Designer</p>
            <p><span className="font-medium text-foreground">Company:</span> Freelance</p>
            <p><span className="font-medium text-foreground">Location:</span> Lisbon, Portugal</p>
          </div>
          <button
            onClick={() => document.getElementById('work-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-block mt-4 px-5 py-2 text-sm font-medium bg-foreground text-background rounded-full hover:translate-x-[1px] transition-transform duration-150 motion-reduce:transition-none min-w-[24px] min-h-[24px] focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
          >
            View Work
          </button>
        </div>
      </motion.div>
    </section>
  );
};
