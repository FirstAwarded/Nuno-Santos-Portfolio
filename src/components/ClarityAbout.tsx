import { motion } from "framer-motion";
import profilePicture from "@/assets/profilepicture.jpeg";

export const ClarityAbout = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Grayscale portrait - offset */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden rounded-lg">
              <img
                src={profilePicture}
                alt="Nuno Santos"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.15 }}
            className="space-y-6"
          >
            <p className="label-mono">About</p>
            
            <h2 className="text-3xl md:text-4xl font-normal tracking-tight leading-tight">
              I build flows that close loops and systems that earn trust.
            </h2>

            <div className="space-y-4 text-muted-foreground">
              <div className="flex items-center gap-3">
                <span className="label-mono text-foreground w-20">Role</span>
                <span className="text-base">Product Designer</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="label-mono text-foreground w-20">Company</span>
                <span className="text-base">Freelance</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="label-mono text-foreground w-20">Location</span>
                <span className="text-base">Lisbon, Portugal</span>
              </div>
            </div>

            <div className="pt-6">
              <a
                href="#work"
                className="btn-clarity-outline inline-block"
              >
                View Work
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
