import { motion } from "framer-motion";
import profilePicture from "@/assets/profilepicture.jpeg";

export const FullScreenAbout = () => {
  return (
    <section 
      id="about" 
      className="h-screen flex items-center justify-center px-6 snap-start snap-always bg-background relative z-20"
    >
      <div className="max-w-4xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="flex-shrink-0"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-border/20">
              <img
                src={profilePicture}
                alt="Nuno Santos"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="flex-1 space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-light tracking-tight leading-relaxed">
              I build flows that close loops and systems that earn trust.
            </h2>
            
            <div className="space-y-3 text-muted-foreground text-lg">
              <p>Product Designer</p>
              <p>Enterprise & Data Platforms</p>
              <p>Based in Portugal</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};